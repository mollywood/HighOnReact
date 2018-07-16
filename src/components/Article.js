import React, {Component} from 'react'

export class Article extends Component {

  render() {

    return (

      <div className="article">
        <h3>{this.props.title}</h3>
        <p>{this.props.content}</p>
        <ul>
            <li>{this.props.comments}</li>
            <li>{this.props.likes}</li>
        </ul>
      </div>

    )
  }
}