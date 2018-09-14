import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { toggleLock, } from '../modules/calc';
import classNames from 'classnames';
import "./Lock.scss"

class LockToggle extends Component {
	constructor(props) {
		super(props)
		this.state = {
			locked: false,
		}
	}

	handleLockToggle = event => {
		event.preventDefault();

		this.props.toggleLock(this.props.param)
	}

	render() {
		return (
			<button 
				className={classNames("lock-btn",this.props.className)} 
				onClick={this.props.onClick}
			>
				<i className="material-icons lock-icon"></i>
			</button>
		)
	}
}
// export default LockToggle;

const mapStateToProps = state => ({
	params: state.calc.params,
	// [this.props.param]: state.calc[this.props.param]
})

const mapDispatchToProps = dispatch => bindActionCreators({
	toggleLock,
}, dispatch)

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(LockToggle)

LockToggle.defaultProps = {
	param: '',
}