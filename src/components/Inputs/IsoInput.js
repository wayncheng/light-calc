import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { updateInput, toggleLock, } from '../../modules/calc';
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
		const payload = {
			param: 'iso',
			value,
		}

		// If locked, don't change value / update state.
		const isLocked = this.props.locks.iso;
		if (isLocked) {
			console.log("Variable is locked. To adjust this variable's value, you must unlock the variable first.")
		}
		else {
			this.props.updateInput(payload);
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
	updateInput,
	toggleLock,
}, dispatch)

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(IsoInput)

IsoInput.defaultProps = {
	name: 'untitled_input',
	label: 'Untitled',
	placeholder: null,
}