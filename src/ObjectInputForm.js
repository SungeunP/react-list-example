import React, { Component } from 'react';

class ObjectInputForm extends Component {
	
	state = {
		title : "",
		content : ""
	}
	
	// input data handling
	handleChange = (e) => {
		this.setState({
			[e.target.name] : e.target.value 
		});
	}

	createObject = (object) => {
		this.props.createObject(object);
	}

	onCreateButtonClicked = (e) => {
		if (this.state.title === "" || this.state.content === "") {
			alert("필요한 데이터를 모두 입력해주세요");
			return;
		}

		this.createObject(this.state);

		// state initialize
		this.setState({
			title : "",
			content : ""
		});
	}

	handleKeyEnter = (e) => {
		if (this.state.title === "" || this.state.content === "") {
			alert("필요한 데이터를 모두 입력해주세요");
			return;
		}
		if (e.key === 'Enter') {
			console.log("input enter");
			this.createObject(this.state);
		}
	}

	render() {
		return (
			<div>
				<input name="title" 
					placeholder="타이틀" 
					onChange={this.handleChange} 
					value={this.state.title}
					onKeyPress={this.handleKeyEnter}>
				</input>
				<input name="content" 
					placeholder="컨텐츠" 
					onChange={this.handleChange} 
					value={this.state.content}
					onKeyPress={this.handleKeyEnter}>
				</input>
				<button name="createObjectButton" onClick={this.onCreateButtonClicked} >생성</button>
			</div>
    );
	}
}

export default ObjectInputForm;