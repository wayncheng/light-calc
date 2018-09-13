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

		this.props.updateInput(payload);
	}
	handleLockToggle = event => {
		event.preventDefault();

		this.props.toggleLock('shutter')
	}

	render() {
		return (
			<div className={classNames("input-group","shutter",{locked:this.props.shutter.isLocked})}>
				<label htmlFor="shutter">Shutter Speed</label>
				<div className="input-wrap">
					<input 
						type="text"
						id="shutter"
						name="shutter"
						className="input-field"
						onChange={this.handleInputChange}
						value={this.props.shutter.value}
						// step="0.1"
						// autoFocus
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
