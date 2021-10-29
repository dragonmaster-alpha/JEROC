import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { Col, Nav, Row, Tab, Tabs } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';
import EmployeePeopleView from './Component/EmployeePeopleView';
import EmployeeDirectoryView from './Component/EmployeeDirectoryView';
import EmployeeOrgChartView from './Component/EmployeeOrgChartView';
import NewArticle from './NewArticle';

const StyledContainer = styled.div`

`;
class Article extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
          viewMode: 1,  // 0 : List, 1 : Directory, 2 : Org Chart

      };
    }
    componentDidMount(){
    }
  
    componentDidUpdate(prevProps){
    }
  
    render() {
        return (
            <StyledContainer>
                <NewArticle />
            </StyledContainer>

        );
    }
};

export default Article
