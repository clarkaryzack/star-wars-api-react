import React, {Component} from 'react';
import '../styles/App.css';
import Jumbotron from './Jumbotron.js'
import Form from './Form.js'
import Vehicles from './Vehicles'

class App extends Component {
	render() {
		return (
			<div className='App'>
					<Jumbotron/>
					<Form/>
					<Vehicles/>
			</div>
		)
	}
}

export default App
