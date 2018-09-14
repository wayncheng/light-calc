import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import FormInput from './FormInput';
import './Form.scss';
import './Inputs/Inputs.scss';
import ApertureInput from './Inputs/ApertureInput';
import IsoInput from './Inputs/IsoInput';
import ShutterInput from './Inputs/ShutterInput';


class Form extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	submitForm = event => {
		event.preventDefault();

	}

	render() {
		return (
			<form className="gs-form" autoComplete="off" onSubmit={this.submitForm}>
				<ShutterInput/>
				<ApertureInput />
				<IsoInput/>
			</form>
		)
	}
}

const mapStateToProps = state => ({
	input: state.calc.input,
})

const mapDispatchToProps = dispatch => bindActionCreators({
//   search,
}, dispatch)

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Form)