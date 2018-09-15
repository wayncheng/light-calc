import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import classNames from 'classnames';
import './Facade.scss';

class Facade extends Component {
	constructor(props) {
		super(props)
		this.state = { }
	}


	render() {
		return (
			<h4 className={classNames('facade','var-hero',this.props.className)}>
				{this.props.children}
			</h4>
		)
	}
}


const mapStateToProps = state => ({
	
})

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch)

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Facade)

Facade.defaultProps = {
	param: '',
}