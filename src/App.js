import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import MainLayout from './components/Shared/MainLayout';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {
	render() {
		const { themeColor, fontStyle, lightVersion, RtlVersion, offcanvas, miniSidebar, horizontalMenu, miniHover } = this.props
		document.getElementsByTagName('body')[0].className = `${themeColor} ${fontStyle}${lightVersion ? ' light_version' : ''}${RtlVersion ? ' rtl' : ''}${offcanvas ? ' offcanvas-active' : ''}${horizontalMenu ? ' h-menu' : ''}${miniSidebar ? ' mini_sidebar' : ''}${miniHover ? ' mini_hover' : ''}`;
		return (
			<div
				ref={leftSidebar => {
					this.leftSidebar = leftSidebar;
				}}
			>
				<Router>
					<Switch>
						<Route component={MainLayout} />
					</Switch>
				</Router>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	themeColor: state.settings.themeColor,
	fontStyle: state.settings.fontStyle,
	lightVersion: state.settings.lightVersion,
	RtlVersion: state.settings.RtlVersion,
	offcanvas: state.settings.offcanvas,
	horizontalMenu: state.settings.horizontalMenu,
	miniSidebar: state.settings.miniSidebar,
	miniHover: state.settings.miniHover,
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(App)