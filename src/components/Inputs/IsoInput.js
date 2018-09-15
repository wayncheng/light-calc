import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { updateVariable, toggleLock, } from '../../modules/calc';
import classNames from 'classnames';
import LockToggle from '../LockToggle';

class IsoInput extends Component {
	constructor(props) {
		super(props)
		this.state = {
		}
	}

	handleInputChange = event => {
		event.preventDefault();
		const { value } = event.target;
		const { aperture, shutter,ev } = this.props.values;
		const param = 'iso';
		// const payload = {
		// 	param: 'iso',
		// 	value,
		// }
		const all_values = {
			[param]: value,
			aperture,
			shutter,
			ev,
		}

		
		// If locked, don't change value / update state.
		const isLocked = this.props.locks.iso;
		if (isLocked) { 
			console.log("Variable is locked. To adjust this variable's value, you must unlock the variable first.") }
		else {
			this.props.updateVariable(param,value,all_values);
		}
	}
	handleLockToggle = event => {
		event.preventDefault();

		this.props.toggleLock('iso')
	}

	render() {
		
		// const {value} = this.props.iso;
		const isLocked = this.props.locks.iso;
		return (
			<div className={classNames("input-group","iso",{locked:isLocked})}>
				<label htmlFor="iso">ISO</label>
				<div className="input-wrap">
					{/* <span className="units">ISO</span> */}
					<input 
						type="number"
						id="iso"
						name="iso"
						className="input-field"
						onChange={this.handleInputChange}
						// onKeyUp={this.handleInputChange}
						value={this.props.values.iso}
						disabled={isLocked}
						step="100"
					/>
				</div>
				<LockToggle onClick={this.handleLockToggle} />
				{/* <button onClick={this.handleLockToggle}>Lock</button> */}
			</div>
		)
	}
}

const mapStateToProps = state => ({
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
)(IsoInput)
