import React, { Component } from 'react'
import PropTypes from 'prop-types'

/*
  *   <Book bookState="currentlyReading" title="Ender's Game" author="Orson Scott Card" updateView={this.updateView}/>
  */

class Book extends Component {
  state = {
      bookState: ""
    }

  possibleShelves =[{value:"move",text:"Move to..."},
  {value:"currentlyReading",text:"Currently Reading"},
  {value:"wantToRead",text:"Want to Read"},
  {value:"read",text:"Read"},
  {value:"none",text:"None"}];
  constructor(argumentList) {
    super(argumentList);
  //  this.updateViewFromChild = this.updateViewFromChild.bind(this)

    this.setState({
      shelf: argumentList.shelf
    });



  }
updateViewFromChild = (e) => {
//  updateViewFromChild(e){
    //  console.log(e.target.value);
    // set the state for the ui componentDidMount

    this.setState()
//   this.props.updateView();
   }

  handleChange(e)  {



  }
  render() {

    return(<div className="book">
                         <div className="book-top">
                           <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: 'url("http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api")' }}></div>
                           <div className="book-shelf-changer">
                             <select onChange={this.updateViewFromChild} value={this.state.shelf}>
                              {this.possibleShelves.map((obj) => <option key={obj.value} value={obj.value}>{obj.text}</option>)}
                              </select>
                           </div>
                         </div>
                         <div className="book-title">{this.props.title}</div>
                         <div className="book-authors">{this.props.author}</div>
                       </div>
                     )
  }



}

export default Book
