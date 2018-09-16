import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { updateVariable, toggleLock, calculateExposure } from '../../modules/calc';
import classNames from 'classnames';
import LockToggle from '../LockToggle';
import Facade from '../Facade';

class ExposureControl extends Component {
	constructor(props) {
		super(props)
		this.state = {
			locked: false,
			ev_previous: null,
			ev: null,
			ev_diff: null,
		}
	}


	handleInputChange = event => {
		event.preventDefault();
		
		const { value } = event.target;
		const { iso, aperture } = this.props.values;
		const param = 'ev';
		const all_values = {
			[param]: value,
			iso,
			aperture,
		}

		// If locked, don't change value / update state.
		const isLocked = this.props.locks.ev;
		if (isLocked) {
			console.log("Variable is locked. To adjust this variable's value, you must unlock the variable first.")
		} else {
			this.props.updateVariable(param,value,all_values);
		}
	}
	handleLockToggle = event => {
		event.preventDefault();
		this.props.toggleLock('ev')
	}
	// handleExpoCalc = event => {
	// 	event.preventDefault();

	// 	this.props.calculateExposure(this.props.values)
	// }

	render() {
		const isLocked = this.props.locks.ev;
		return (
			<div className={classNames("input-group","ev",{locked:isLocked})}>
				<p className="eyebrow">Exposure</p>
				<Facade>{Math.round(this.props.values.ev * 10)/10}</Facade>
				<LockToggle onClick={this.handleLockToggle} />
				{/* <button onClick={this.handleExpoCalc}>Calculate EV</button> */}
			</div>
		)
	}
}

const mapStateToProps = state => ({
	// ev: state.calc.ev,
	locks: state.calc.locks,
	values: state.calc.values,
})

const mapDispatchToProps = dispatch => bindActionCreators({
	updateVariable,
	calculateExposure,
	toggleLock,
}, dispatch)

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(ExposureControl)

// ExposureControl.defaultProps = {}