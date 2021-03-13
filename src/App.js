// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Person from './Person';

class App extends React.Component {
	constructor() {
		super();
		this.state = { peopleUnder50: [], peopleAbove50: [] };
	}

	getData = () => {
		console.log('getData');
		fetch('https://randomuser.me/api/?results=20')
			.then((res) => res.json())
			.then(
				(result) => {
					console.log('result', result.results);
					const peopleUnder50 = result.results.filter(
						(person) => person.dob.age < 50
					);
					const peopleAbove50 = result.results.filter(
						(person) => person.dob.age >= 50
					);
					this.setState({
						peopleUnder50,
						peopleAbove50,
					});
				},
				(error) => {
					console.log('error', error);
				}
			);
	};

	render() {
		return (
			<div className='App'>
				<button onClick={() => this.getData()}>Lấy dữ liệu</button>
				<br />
				Danh sách người nhỏ hơn 50 tuổi
				<div className='MyBox'>
					{this.state.peopleUnder50.map((value, index) => {
						return <Person key={index} data={value} />;
					})}
				</div>
				<br />
				Danh sách người lớn hơn hay bằng 50 tuổi
				<div className='MyBox2'>
					{this.state.peopleAbove50.map((value, index) => {
						return <Person key={index} data={value} />;
					})}
				</div>
			</div>
		);
	}
}

export default App;
