import React from 'react';

class Person extends React.Component {
	constructor(props) {
		super(props);
		this.state = { data: props.data };
	}

	render() {
		return (
			<div>
				<span>
					{this.state.data.name.first} {this.state.data.name.last}:
					{this.state.data.dob.age}
				</span>
			</div>
		);
	}
}

export default Person;
