import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { Col, Nav, Row, Tab, Tabs } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';
import EmployeePeopleView from './Component/EmployeePeopleView';
import EmployeeDirectoryView from './Component/EmployeeDirectoryView';
import EmployeeOrgChartView from './Component/EmployeeOrgChartView';

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
class Employee extends React.Component {
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
                <div className="container-fluid">      
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="">
                            {this.state.viewMode == 0 && <h5 className="text-success"><i className="fa fa-bars"></i> People <span className="text-dark" style={{fontSize:"0.7rem"}}>(85)</span></h5>}
                            {this.state.viewMode == 1 && <h5 className="text-success"><i className="fa fa-book"></i> Directory <span className="text-dark" style={{fontSize:"0.7rem"}}>(85)</span></h5>}
                            {this.state.viewMode == 2 && <h5 className="text-success"><i className="fa fa-sitemap"></i> Org Chart <span className="text-dark" style={{fontSize:"0.7rem"}}>(85)</span></h5>}
                        </div>
                        <div className="d-flex align-items-center">
                            <a href="#" style={{fontSize:"0.7rem"}}><i className="fa fa-share-square-o"></i> Quick access to the directory</a>
                        </div>
                    </div>
                    <div className="bg-white text-dark pl-2 pr-2">
                        <div className="d-flex justify-content-between align-items-center tab_pan border-bottom ">
                            <div className="btn btn-default text-success"><Link to="/newEmployee"><i className="fa fa-plus"></i> New Employee</Link></div>
                            <div className="d-flex pt-3 pr-3 pl-3">
                                <div onClick={() => {
                                    this.setState({
                                        ...this.state,
                                        viewMode : 0
                                    });
                                }} className={"tab_pan_item pb-1 pl-2 pr-2 " + (this.state.viewMode == 0 ? " active":"")}><i className="fa fa-bars"></i> List</div>
                                <div onClick={() => {
                                    this.setState({
                                        ...this.state,
                                        viewMode : 1
                                    });
                                }} className={"tab_pan_item ml-3 pb-1 pl-2 pr-2" + (this.state.viewMode == 1 ? " active":"")}><i className="fa fa-book"></i> Directory</div>
                                <div onClick={() => {
                                    this.setState({
                                        ...this.state,
                                        viewMode : 2
                                    });
                                }} className={"tab_pan_item ml-3 pb-1 pl-2 pr-2" + (this.state.viewMode == 2 ? " active":"")}><i className="fa fa-sitemap"></i> Org Chart</div>
                            </div>
                        </div>
                        {this.state.viewMode == 0 && <EmployeePeopleView />}
                        {this.state.viewMode == 1 && <EmployeeDirectoryView />}
                        {this.state.viewMode == 2 && <EmployeeOrgChartView />}
                    </div>
                </div>
            </StyledContainer>

        );
    }
};

export default Employee
