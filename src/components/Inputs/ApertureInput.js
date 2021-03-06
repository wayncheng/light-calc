import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { updateVariable, toggleLock, } from '../../modules/calc';
import classNames from 'classnames';
import LockToggle from '../LockToggle';

// const fStops = [22,20,18,16,14,13,11,10,9.0,8.0,7.1,6.3,5.6,5.0,4.5,4.0,3.5,3.2,2.8,2.0,1.8,1.4,1.2];
const fStops = ["22","20","18","16","14","13","11","10","9.0","8.0","7.1","6.3","5.6","5.0","4.5","4.0","3.5","3.2","2.8","2.0","1.8","1.4","1.2","1.0"];

class ApertureInput extends Component {
	constructor(props) {
		super(props)
		this.state = {
			locked: false,
		}
	}

	handleInputChange = event => {
		event.preventDefault();
		const { value } = event.target;
		const { iso, shutter } = this.props.values;
		const param = 'aperture';

		// const payload = {
		// 	param: 'aperture',
		// 	value,
		// }
		const all_values = {
			aperture: value,
			iso,
			shutter,
		}

		// If locked, don't change value / update state.
		const isLocked = this.props.locks.aperture;
		if (isLocked) {
			console.log("Variable is locked. To adjust this variable's value, you must unlock the variable first.")
		}
		else {
			this.props.updateVariable(param,value,all_values);
		}
	}
	handleLockToggle = event => {
		event.preventDefault();

		this.props.toggleLock('aperture')
	}

	render() {
		// const {value} = this.props.aperture;
		const isLocked = this.props.locks.aperture;
		
		return (
			<div className={classNames("input-group","aperture",{locked:isLocked})}>
				<label htmlFor="aperture">Aperture</label>
				<div className="input-wrap">
					{/* <span className="units">F</span> */}
					{/* <select 
						name="aperture" 
						id="aperture"
						className="input-field"
						onChange={this.handleInputChange}
						value={this.props.values.aperture}
						disabled={isLocked}
					>
						{fStops.map( (f,index) => (
							<option value={f} key={'f-option-'+index}>{f}</option>
						))}
					</select> */}
					<input 
						type="number"
						name="aperture" 
						id="aperture"
						className="input-field"
						onChange={this.handleInputChange}
						value={this.props.values.aperture}
						disabled={isLocked}
						step=".1"
					/>

				</div>
				<LockToggle onClick={this.handleLockToggle} />
				{/* <button onClick={this.handleLockToggle}>Lock</button> */}
			</div>
		)
	}
}
// export default ApertureInput;

const mapStateToProps = state => ({
	// aperture: state.calc.aperture,
	// shutter: state.calc.shutter,
	// iso: state.calc.iso,
	locks: state.calc.locks,
	values: state.calc.values,
})

const mapDispatchToProps = dispatch => bindActionCreators({
	updateVariable,
	toggleLock,
}, dispatch)

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(ApertureInput)