import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { Col, Nav, Row, Tab, Tabs } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';
import EmployeeDetailLeft from './EmployeeDetailLeft';
import EmployeeDetailRight from './EmployeeDetailRight';
import ClothesAndToolsLeft from './ClothesAndToolsLeft';

const StyledContainer = styled.div`
    background-color: lightgrey;

    .small_text{
        font-size: .7rem;
        color: grey!important;
    }
`;
class ProductCard extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
          viewMode: 0,  // 0 : List, 1 : Directory, 2 : Org Chart

      };
    }
    componentDidMount(){
    }
  
    componentDidUpdate(prevProps){
    }
  
    render() {
        return (
            <StyledContainer className="p-2 m-2">
                <div>SNICKERS</div>
                <div className="font-weight-bold">Jacka</div>
                <div className="">ID: 5413</div>
                <div className="text-center">
                    <img className="" src="../assets/images/dummy3.png" alt="avatar" width="250px"/>
                </div>
                <h4 className="mb-2 mt-2">Text1</h4>
                <div className="small_text mb-1">Date of purchase: 21 March 2020</div>
                <div className="small_text mb-1">Awarded: 02 Jan 2021</div>
                <div className="small_text mb-1">Product type: New</div>
                <div className="small_text mb-2">User: Nicklas Juhlin Rosen</div>
                <div className="d-flex justify-content-between">
                    <div className="btn btn-danger"><i className="fa fa-trash"></i></div>
                    <div className="btn btn-dark" style={{width:"100px"}}><i className="fa fa-info"></i></div>
                    <div className="btn btn-default"><i className="fa fa-refresh"></i></div>
                </div>
            </StyledContainer>
        );
    }
};

export default ProductCard
