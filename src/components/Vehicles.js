import React, {Component} from 'react';

class Vehicles extends Component {
	constructor() {
		super()
		this.state = {
			vehicles: []
		}
		console.log(this.state)
	}
	componentDidMount() {
		console.log(this.state)
			fetch('https://swapi.co/api/vehicles')
				.then(response => response.json())
				.then(response => {
					console.log(response);
					console.log(response.results);
					let vehicleCards = response.results.map(
						(vehicle) =>
							{	return (
								<div key= {vehicle.name}>
									<h1>{vehicle.name}</h1>
									<h2>model: {vehicle.model}</h2>
									<ul>
										<h3>Specs</h3>
										<li>manufacturer: {vehicle.manufacturer}</li>
										<li>class: {vehicle.class}</li>
										<li>passengers: {vehicle.passengers}</li>
										<li>crew: {vehicle.class}</li>
										<li>length: {vehicle.length}</li>
										<li>max speed: {vehicle.max_atmosphering_speed}</li>
										<li>cargo capacity: {vehicle.cargo_capacity}</li>
									</ul>
								</div>
							)}
						)
				console.log(vehicleCards);
				this.setState({vehicles: vehicleCards})
				})
			}

	render() {

		return (
			<div>
				{this.state.vehicles}
			</div>
		)
	}
}

export default Vehicles;
