import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { updateInput, toggleLock, } from '../../modules/calc';
import classNames from 'classnames';
import LockToggle from '../LockToggle';

// const fStops = [22,20,18,16,14,13,11,10,9.0,8.0,7.1,6.3,5.6,5.0,4.5,4.0,3.5,3.2,2.8,2.0,1.8,1.4,1.2];
const fStops = ["22","20","18","16","14","13","11","10","9.0","8.0","7.1","6.3","5.6","5.0","4.5","4.0","3.5","3.2","2.8","2.0","1.8","1.4","1.2"];

class ApertureInput extends Component {
	constructor(props) {
		super(props)
		this.state = {
			locked: false,
		}
	}

	handleInputChange = event => {
		event.preventDefault();
		const { value,name } = event.target;
		let input = value;
		const payload = {
			variable: name,
			value: input,
		}

		// If locked, don't change value / update state.
		const isLocked = this.props.aperture.isLocked;
		if (isLocked) {
			console.log("Variable is locked. To adjust this variable's value, you must unlock the variable first.")
		}
		else {
			this.props.updateInput(payload);
		}
	}
	handleLockToggle = event => {
		event.preventDefault();

		this.props.toggleLock('aperture')
	}

	render() {
		const {value,isLocked} = this.props.aperture;
		return (
			<div className={classNames("input-group","aperture",{locked:isLocked})}>
				<label htmlFor="aperture">Aperture</label>
				<div className="input-wrap">
					{/* <span className="units">F</span> */}
					<select 
						name="aperture" 
						id="aperture"
						className="input-field"
						onChange={this.handleInputChange}
						value={value}						value={value}
						disabled={isLocked}

					>
						{fStops.map( (f,index) => (
							<option value={f} key={'f-option-'+index}>{f}</option>
						))}
					</select>

					{/* <input type="number" id="aperture" name="aperture" className="input-field" onChange={this.handleInputChange} value={this.props.aperture.value} step="0.1" autoFocus /> */}
				</div>
				<LockToggle onClick={this.handleLockToggle} />
				{/* <button onClick={this.handleLockToggle}>Lock</button> */}
			</div>
		)
	}
}
// export default ApertureInput;

const mapStateToProps = state => ({
	input: state.calc.input,
	aperture: state.calc.aperture,
	shutter: state.calc.shutter,
	iso: state.calc.iso,
})

const mapDispatchToProps = dispatch => bindActionCreators({
	updateInput,
	toggleLock,
}, dispatch)

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(ApertureInput)

ApertureInput.defaultProps = {
	name: 'untitled_input',
	label: 'Untitled',
	placeholder: null,
}