import React, {Component} from 'react';

class Form extends Component {
	constructor(props) {
		super(props)
		this.handleNameChange = this.handleNameChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.state = {
			name: "",
			value: "",
			pilot: "What's your name, pilot?"
		}
	}
	handleNameChange(event) {
		this.setState({name: event.target.value})
	}
	handleSubmit(event){
		event.preventDefault()
		this.setState({pilot: this.state.name})
		this.setState({name: ""})
	}
	render() {
		console.log(this.state.pilot)
		return (
			<div className='Form'>
				<form onSubmit={this.handleSubmit}>
					<input type='text' name='name' onChange={this.handleNameChange} value={this.state.name}/>
					<input type="submit" name="submit" value='Submit'/>
				</form>
				<div>
					{this.state.pilot}
				</div>
			</div>
		)
	}
}

export default Form
