import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import {  } from '../modules/calc';

class StatsPanel extends Component {
	constructor(props){
		super(props)
		this.state = {
			ev_previous: null,
			ev_diff: null,
			// ev: null,
		}
	}

	componentWillReceiveProps = (nextProps) => {
		if (nextProps.values.ev !== this.props.values.ev){
			const ev_previous = this.props.values.ev;
			const ev = nextProps.values.ev;
			const ev_diff = ev - ev_previous;

			this.setState({
				ev_previous,
				ev_diff,
			})
		}
	}

	render(){
		const {shutter,aperture,iso,ev} = this.props.values;
		const {ev_previous,ev_diff} = this.state;
		return (
			<ul>
				<li>shutter: {shutter}</li>
				<li>aperture: {aperture}</li>
				<li>iso: {iso}</li>
				<li>ev: {ev}</li>
				<li>ev_diff: {ev_diff}</li>
				<li>ev_previous: {ev_previous}</li>
			</ul>
		)
	}
}

const mapStateToProps = state => ({
	...state.calc
})
// const mapStateToProps = state => ({
// 	values: state.calc.values,
// 	locks: state.calc.locks,
// })

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch)

export default connect(
  mapStateToProps, mapDispatchToProps
)(StatsPanel)