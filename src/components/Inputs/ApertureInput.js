import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { updateInput, toggleLock, } from '../../modules/calc';
import classNames from 'classnames';
import LockToggle from '../LockToggle';

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

		this.props.updateInput(payload);
	}
	handleLockToggle = event => {
		event.preventDefault();

		this.props.toggleLock('aperture')
	}

	render() {
		return (
			<div className={classNames("input-group","aperture",{locked:this.props.aperture.isLocked})}>
				<label htmlFor="aperture">Aperture</label>
				<div className="input-wrap">
					<span className="units">F</span>
					<select 
						name="aperture" 
						id="aperture"
						className="input-field"
						onChange={this.handleInputChange}
						value={this.props.aperture.value}
					>
						<option value="1.2">1.2</option>
						<option value="1.4">1.4</option>
						<option value="1.8">1.8</option>
						<option value="2.0">2.0</option>
						<option value="2.8">2.8</option>
						<option value="3.2">3.2</option>
						<option value="3.5">3.5</option>
						<option value="4.0">4.0</option>
						<option value="4.5">4.5</option>
						<option value="5.0">5.0</option>
						<option value="5.6">5.6</option>
						<option value="6.3">6.3</option>
						<option value="7.1">7.1</option>
						<option value="8.0">8.0</option>
						<option value="9.0">9.0</option>
						<option value="10">10</option>
						<option value="11">11</option>
						<option value="13">13</option>
						<option value="14">14</option>
						<option value="16">16</option>
						<option value="18">18</option>
						<option value="20">20</option>
						<option value="22">22</option>
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