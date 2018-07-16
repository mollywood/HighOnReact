import React, {Component} from 'react'

export class Article extends Component {

  render() {

    return (

      <div className="article" class="content">
        <h4>{this.props.title}</h4>
        <p>{this.props.content}</p>
        <div class="orange">
            <div class="commentsnlikes">
                {this.props.comments}
            </div>
            <div class="commentsnlikes">
                {this.props.likes}
            </div>
        </div>
      </div>

    )
  }
}