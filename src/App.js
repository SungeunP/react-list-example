import React, { Component } from 'react';
import ObjectList from './ObjectList';
import ObjectInputForm from './ObjectInputForm';
import ObjectView from './ObjectView';

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
    ],
    selectedObject : null
  }
  
  getObjectByID = (id) => {
    id = parseInt(id);
    let selectedItem = null;
    this.state.list.find((item) => {
      if (item.id === id) {
        console.log("find! ", item);
        selectedItem = item;
      }  
    });
    return selectedItem;
  }

  // list에 Object 추가
  handleList = (object) => {
    console.log("received object: ", object);
    this.setState({
      list : this.state.list.concat({ id : this.id++, ...object})
    });
  }

  handleSelectedObject = (objectKey) => {
    console.log("selected Object Key: ", objectKey);
    var selectedItem = this.getObjectByID(objectKey);
    console.log(selectedItem);
    this.setState({
      selectedObject : selectedItem
    });
  }

  render() {
    console.log("render", this.state);
    return (
      <div>
        <ObjectInputForm createObject={this.handleList} />
        <ObjectList onClickObject={this.handleSelectedObject} objectList={this.state.list} />
        { this.state.selectedObject && <ObjectView title={this.state.selectedObject.title} content={this.state.selectedObject.content} /> }
      </div>
    );
  }
}

export default App;
