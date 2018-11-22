import React, { Component } from 'react';

class ObjectView extends Component {

  static defaultProps = {
    title : "Title_default",
    content : "Content_default"
  }

  componentDidMount() {
    console.log("ObjectView 마운트");
  }

  render() {
    console.log("");
    return (
      <div>
        <h1 className="object-title">{this.props.title}</h1>
        <h3 className="object-content">{this.props.content}</h3>
      </div>
    );
  }
}

export default ObjectView;