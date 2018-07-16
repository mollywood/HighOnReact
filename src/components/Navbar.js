import React, { Component } from 'react';

export class Navbar extends Component {

  render() {
    return (
        <div className="navbar" class="nav">
            <h1 class="title">HighOnCoding</h1>
            <a class="active">Home</a>
            <a class="inactive">Categories</a>        
        </div>
    )
  }

}