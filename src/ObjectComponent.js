import React, { Component } from 'react';
import './ObjectComponent.css';
import { className } from 'postcss-selector-parser';

class ObjectComponent extends Component {
	
	state = {
		clicked : false
	}

	handleCardClick = (e) => {
		console.log(e.currentTarget.dataset.id);
		this.props.onClickObject(e.currentTarget.dataset.id);
		this.setState({
			clicked : true
		});
	}
	
	render() {
		let elementClass = className({
			card : true,
			clicked : (this.state.clicked ? true : false)
		})
		console.log(elementClass);
		return (
			<div className="card" data-id={this.props.object_id} onClick={this.handleCardClick}>
				<h2>{this.props.title}</h2>
				<p>{this.props.content}</p>
			</div>
		);
	}
}

export default ObjectComponent 