import React, { Component } from 'react';
import ObjectComponent from './ObjectComponent';

class ObjectList extends Component {

	render() {
		const { objectList } = this.props;     
		const list = objectList.map(
			object => (<ObjectComponent key={object.id} object_id={object.id} onClickObject={this.props.onClickObject} title={object.title} content={object.content} />)
		)
		return (
			<div>
				{list}
			</div>
		);
	}
}

export default ObjectList;