import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { Col, Nav, Row, Tab, Tabs } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';

const StyledContainer = styled.div`
    .tab_pan{
        .active{
            border-bottom: 2px solid #218838;
            border-radius: 2px;
            color: #218838;
        }
        .tab_pan_item{
            cursor: pointer;
        }
    }
    .dropdown-item{
        cursor: pointer;
    }
    .product_table{
        td, th{
            border-bottom: 1px solid lightgrey;
            border-color: lightgrey!important;
        }
        th{
            font-weight: bold;
        }
    }
`;
class EmployeeOrgChartView extends React.Component {
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
            <StyledContainer>
                <div className="d-flex justify-content-between align-items-center mt-4 mb-3 ">
                    <div className="d-flex">
                        <input type="text" class="form-control" style={{width:"300px"}} placeholder="Jump to an employee..." />                        
                        <select className="form-control" style={{width:"80px"}}>
                            <option>1</option>
                        </select>
                        <div className="btn btn-default ml-2"><i className="fa fa-arrow-up"></i></div>
                    </div>
                    <div className="">
                        <div className="d-flex align-items-center">
                            <div className="">
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
                            <div className="ml-2">
                                <Dropdown>
                                    <Dropdown.Toggle variant="success" className="btn btn-default">Export</Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <span className="dropdown-item">PNG</span>
                                        <span className="dropdown-item">JSON</span>
                                    </Dropdown.Menu>
                                </Dropdown> 
                            </div> 
                        </div>
                    </div>
                </div>
                <img class="w-100" src="../assets/images/dummy.png" alt="avatar" />
            </StyledContainer>

        );
    }
};

export default EmployeeOrgChartView
