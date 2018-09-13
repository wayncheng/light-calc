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

		this.props.toggleLock('iso')
	}

	render() {
		return (
			<div className={classNames("input-group","iso",{locked:this.props.iso.isLocked})}>
				<label htmlFor="iso">ISO</label>
				<div className="input-wrap">
					<span className="units">ISO</span>
					<input 
						type="number"
						id="iso"
						name="iso"
						className="input-field"
						onChange={this.handleInputChange}
						value={this.props.iso.value}
						step="100"
						autoFocus
					/>
				</div>
				<LockToggle onClick={this.handleLockToggle} />
				{/* <button onClick={this.handleLockToggle}>Lock</button> */}
			</div>
		)
	}
}

const mapStateToProps = state => ({
	iso: state.calc.iso,
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