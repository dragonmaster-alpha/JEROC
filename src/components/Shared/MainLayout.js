import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import Routes from '../Route';
import styled from "styled-components";

const StyledContainer = styled.div`
  #main-content{
	  width: 100%;
	  margin-top: 110px;
	  padding: 0px 0px;
  }
  .top-navbar{
	  width: 100%;
  }
`;

export default class MainLayout extends Component {
	render() {
		return (
			<StyledContainer>
				<div className="overlay" />
				<div id="wrapper">
					<Header />
					<div id="main-content">
						<Switch>
							{Routes.map((layout, i) => {
								return <Route key={`r${i}`} exact={layout.exact} path={layout.path} component={layout.component}></Route>
							})}
						</Switch>
					</div>
				</div>
			</StyledContainer>
		);
	}
}
