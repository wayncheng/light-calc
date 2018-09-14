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
		const { value } = event.target;
		const payload = {
			param: 'shutter',
			value,
		}

		// If locked, don't change value / update state.
		const isLocked = this.props.locks.shutter;
		if (isLocked) {
			console.log("Variable is locked. To adjust this variable's value, you must unlock the variable first.")
		} else {
			this.props.updateInput(payload);
		}
	}
	handleLockToggle = event => {
		event.preventDefault();

		this.props.toggleLock('shutter')
	}

	render() {
		const isLocked = this.props.locks.shutter;
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
						value={this.props.values.shutter}
						disabled={isLocked}
					/>
				</div>
				<LockToggle onClick={this.handleLockToggle} />
			</div>
		)
	}
}

const mapStateToProps = state => ({
	// shutter: state.calc.shutter,
	locks: state.calc.locks,
	values: state.calc.values,
})

const mapDispatchToProps = dispatch => bindActionCreators({
	updateInput,
	toggleLock,
}, dispatch)

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(ShutterInput)
