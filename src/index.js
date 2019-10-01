import React, { Component } from 'react';
import { render } from 'react-dom';
class Button extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: this.props.start,
			countMax: this.props.max,
			countMin: this.props.min
		};
	}
	plus() {
		this.setState({
			// if(this.state.count <= this.props.max) {
				count: this.state.count + 1
			// }
		});
	}
	minus() {
		this.setState({
			count: this.state.count - 1
		});
	}
	render() {
		const flex = {
			display: 'flex',
			width: 200,
			margin: 'auto',
			justifyContent: 'space-around'
		}
		const count = {
			fontSize: 40
		}
		const btn = {
			alignSelf: 'center'
		}

		return (
			<div style={flex}>
				<button style={btn} onClick={this.minus.bind(this)}>-</button>
				<div style={count}>{this.state.count}</div>
				<button style={btn} onClick={this.plus.bind(this)}>+</button>
			</div>
			);
	}
}
render(<Button start={0} countMin={-10} countMax={10}/>, document.getElementById('btn'));