import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { calculateExposure } from '../modules/calc';
import './Form.scss';
import './Inputs/Inputs.scss';
import ApertureInput from './Inputs/ApertureInput';
import IsoInput from './Inputs/IsoInput';
import ShutterInput from './Inputs/ShutterInput';
import Facade from './Facade';
import ExposureControl from './Inputs/ExposureControl';

// TODO: Extract Exposure Component
// ! Hitting enter/return while focused on input field will toggle the lock for the first input-group in the form. (already switched group order to see if it was that specific group or just the first group, and it was always the first group that was toggled.)

class Form extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	submitForm = event => {
		event.preventDefault();
		console.log('----------- submit ----------')
	}
	// handleExpoCalc = event => {
	// 	event.preventDefault();

	// 	this.props.calculateExposure(this.props.values)
	// }
	

	render() {
		return (
			<form className="gs-form" autoComplete="off" onSubmit={this.submitForm}>
				<section>
					<ShutterInput/>
					<ApertureInput />
					<IsoInput/>
				</section>
				<section>
					{/* <div className="input-group">
						<p className="eyebrow">Exposure</p>
						<Facade>{Math.round(this.props.values.exposure * 10)/10}</Facade>
						<button onClick={this.handleExpoCalc}>Calculate Exposure</button>
					</div> */}
					<ExposureControl/>
				</section>
			</form>
		)
	}
}

const mapStateToProps = state => ({
	values: state.calc.values,
	locks: state.calc.locks,
})

const mapDispatchToProps = dispatch => bindActionCreators({
	calculateExposure,
}, dispatch)

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Form)