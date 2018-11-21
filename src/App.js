import React, { Component } from 'react';
import ObjectList from './ObjectList';
import ObjectInputForm from './ObjectInputForm';

class App extends Component {

  id = 2;

	state = {
		list : [
			{
				id : 0,
				title : "안녕하세요",
				content : "리액트 처음써봐영"
			},
			{
				id : 1,
				title : "테스트",
				content : "리덕스를써보자"
			}
		]
  }
  
  // list에 Object 추가
  handleList = (object) => {
    console.log("received object: ", object);
    this.setState({
      list : this.state.list.concat({ id : this.id++, ...object})
    });
  }

  render() {
    console.log("render", this.state.list);
    return (
      <div>
        <ObjectInputForm createObject={this.handleList} />
        <ObjectList objectList={this.state.list} />
      </div>
    );
  }
}

export default App;
