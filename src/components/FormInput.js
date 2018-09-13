import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { updateInput } from '../modules/calc';

class FormInput extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	handleInputChange = event => {
		event.preventDefault();
		const { value,name } = event.target;
		let input = value;
		const payload = {
			variable: name,
			value: input,
		}

		this.props.updateInput(payload);
	}
	toggleLock = event => {
		event.preventDefault();

	}

	render() {
		const {name,label} = this.props;
		return (
			<div className="input-group">
				<label htmlFor={name}>{label}</label>
				<input
					type="number"
					name={name}
					className="ws-input"
					onChange={this.handleInputChange}
					value={this.props[name]}
					autoFocus
				/>
				<button onClick={this.toggleLock}>Lock</button>
			</div>
		)
	}
}
// export default FormInput;

const mapStateToProps = state => ({
	input: state.calc.input,
	aperture: state.calc.aperture,
	shutter: state.calc.shutter,
	iso: state.calc.iso,
})

const mapDispatchToProps = dispatch => bindActionCreators({
	updateInput,
}, dispatch)

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(FormInput)

FormInput.defaultProps = {
	name: 'untitled_input',
	label: 'Untitled',
	placeholder: null,
}