import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { updateInput, toggleLock, } from '../../modules/calc';
import classNames from 'classnames';
import LockToggle from '../LockToggle';

class ShutterInput extends Component {
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
		const isLocked = this.props.shutter.isLocked;
		if (isLocked) {
			console.log("Variable is locked. To adjust this variable's value, you must unlock the variable first.")
		}
		else {
			this.props.updateInput(payload);
		}
	}
	handleLockToggle = event => {
		event.preventDefault();

		this.props.toggleLock('shutter')
	}

	render() {
		const {value,isLocked} = this.props.shutter;
		return (
			<div className={classNames("input-group","shutter",{locked:isLocked})}>
				<label htmlFor="shutter">Shutter</label>
				<div className="input-wrap">
					<input 
						type="text"
						id="shutter"
						name="shutter"
						className="input-field"
						onChange={this.handleInputChange}
						// step="0.1"
						// autoFocus
						value={value}
						disabled={isLocked}
					/>
				</div>
				<LockToggle onClick={this.handleLockToggle} />
				{/* <button onClick={this.handleLockToggle}>Lock</button> */}
			</div>
		)
	}
}

const mapStateToProps = state => ({
	shutter: state.calc.shutter,
})

const mapDispatchToProps = dispatch => bindActionCreators({
	updateInput,
	toggleLock,
}, dispatch)

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(ShutterInput)
