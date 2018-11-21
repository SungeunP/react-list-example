import React, { Component } from 'react';
import './ObjectComponent.css';

class ObjectComponent extends Component {
	render() {
		return (
			<div className="card" id={this.props.id}>
				<h2>{this.props.title}</h2>
				<p>{this.props.content}</p>
			</div>
		);
	}
}

export default ObjectComponent 