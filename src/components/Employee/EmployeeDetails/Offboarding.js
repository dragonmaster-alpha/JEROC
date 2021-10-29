import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { Col, Nav, Row, Tab, Tabs } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';
import EmployeeDetailLeft from './EmployeeDetailLeft';
import EmployeeDetailRight from './EmployeeDetailRight';

const StyledContainer = styled.div`
    background-color: white;
    border: 1px solid lightgrey;
    .small_text{
        font-size: .8rem;
        i{
            width: 20px;
        }
    }
    td, th{
        vertical-align: top!important;
        border-bottom: 1px solid lightgrey;
        border-color: lightgrey!important;
    }
`;
class Offboarding extends React.Component {
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
            <StyledContainer className="p-3">                
                <div className="row">
                    <div className="col-md-2 bg-light" style={{color:"grey"}}>
                        <EmployeeDetailLeft />
                    </div>
                    <div className="col-md-8" style={{fontSize:"0.8rem", color:"grey"}}>
                        <div className="d-flex justify-content-between mb-2 pb-1 border-bottom">
                            <div className="text-success"><h5><i className="fa fa-credit-card"></i> Offboarding</h5></div>
                        </div>
                        <div className="bg-light text-dark p-2">
                            <div className="pt-1 pb-1 d-flex justify-content-between align-items-center">
                                <div className="font-weight-bold">
                                    Offboarding Tasks
                                </div>
                                <div className="d-flex">
                                    <div className="btn btn-default"><i className="fa fa-plus"></i> Add Task</div>
                                    <Dropdown>
                                        <Dropdown.Toggle variant="success" className="btn btn-default"><i className="fa fa-cog"></i></Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <span className="dropdown-item">setting1</span>
                                            <span className="dropdown-item">setting2</span>
                                            <span className="dropdown-item">setting3</span>
                                            <span className="dropdown-item">setting4</span>
                                            <span className="dropdown-item">setting5</span>
                                        </Dropdown.Menu>
                                    </Dropdown>  
                                </div>
                            </div>
              
                            <div className="bg-white text-dark">
                                <div className="">
                                    <span className="bg-light border rounded">HR</span>
                                </div>
                                <div className="d-flex align-items-center p-2 border-bottom">
                                    <input type="checkbox"/>
                                    <div className="ml-2"><a href="#" className="font-weight-bold">Employee Handbook Introduction</a> Shannon Anderson - Oct 9, 2017</div>
                                </div>
                                <div className="d-flex align-items-center p-2 border-bottom">
                                    <input type="checkbox"/>
                                    <div className="ml-2"><a href="#" className="font-weight-bold">Employee Handbook Introduction</a> Shannon Anderson - Oct 9, 2017</div>
                                </div>
                            </div>                    
                            <div className="bg-white text-dark">
                                <div className="">
                                    <span className="bg-light border rounded">IT</span>
                                </div>
                                <div className="d-flex align-items-center p-2 border-bottom">
                                    <input type="checkbox"/>
                                    <div className="ml-2"><a href="#" className="font-weight-bold">Employee Handbook Introduction</a> Shannon Anderson - Oct 9, 2017</div>
                                </div>
                                <div className="d-flex align-items-center p-2 border-bottom">
                                    <input type="checkbox"/>
                                    <div className="ml-2"><a href="#" className="font-weight-bold">Employee Handbook Introduction</a> Shannon Anderson - Oct 9, 2017</div>
                                </div>
                            </div>                    
                            <div className="bg-white text-dark">
                                <div className="">
                                    <span className="bg-light border rounded">Manager</span>
                                </div>
                                <div className="d-flex align-items-center p-2 border-bottom">
                                    <input type="checkbox"/>
                                    <div className="ml-2"><a href="#" className="font-weight-bold">Employee Handbook Introduction</a> Shannon Anderson - Oct 9, 2017</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 p-0">
                        <EmployeeDetailRight />
                    </div>
                </div>
            </StyledContainer>

        );
    }
};

export default Offboarding
