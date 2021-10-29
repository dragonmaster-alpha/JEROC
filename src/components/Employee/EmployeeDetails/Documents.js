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
        font-size: .7rem;
        color: lightgrey;
    }
    td, th{
        vertical-align: top!important;
        border-bottom: 1px solid lightgrey;
        border-color: lightgrey!important;
    }
`;
class Documents extends React.Component {
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
                            <div className="text-success"><h5><i className="fa fa-file"></i> Documents</h5></div>
                        </div>
                        <div className="p-2">
                            <div className="pt-1 pb-1 d-flex justify-content-between align-items-center">
                                <div className="d-flex">
                                    <div className="btn btn-default"><i className="fa fa-upload"></i> Upload</div>
                                    <div className="btn btn-default ml-3"><i className="fa fa-folder"></i></div>
                                </div>
                                <div className="d-flex align-items-center">
                                    <div className="mr-1">Sort by </div>
                                    <select className="form-control" style={{width:"200px"}}>
                                        <option>Name : A-Z</option>
                                    </select>
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
                                <div className="d-flex align-items-center p-2 border-bottom">
                                    <div className="ml-2"><i className="fa fa-folder text-success"></i> Employee Uploads(0)</div>
                                </div>
                                <div className="d-flex align-items-center p-2 border-bottom">
                                    <div className="ml-2"><i className="fa fa-folder text-success"></i> Employee Uploads(0)</div>
                                </div>
                                <div className="d-flex align-items-center p-2 border-bottom">
                                    <div className="ml-2"><i className="fa fa-folder text-success"></i> Employee Uploads(0)</div>
                                </div>
                                <div className="d-flex align-items-center p-2 ml-4">
                                    <div><input type="checkbox"/></div>
                                    <div className="ml-2 d-flex align-items-center">
                                        <div><i className="fa fa-file text-danger" style={{fontSize:"1rem"}}></i></div>
                                        <div className="ml-2">
                                            <div>Company handbook.pdf<span className="small_text ml-2"><i className="fa fa-user"></i> shared</span></div>
                                            <div className="small_text">Added 07/30/2020 by Charlotte Abbott(2.68MB)</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center p-2 ml-4">
                                    <div><input type="checkbox"/></div>
                                    <div className="ml-2 d-flex align-items-center">
                                        <div><i className="fa fa-file text-danger" style={{fontSize:"1rem"}}></i></div>
                                        <div className="ml-2">
                                            <div>Company handbook.pdf<span className="small_text ml-2"><i className="fa fa-user"></i> shared</span></div>
                                            <div className="small_text">Added 07/30/2020 by Charlotte Abbott(2.68MB)</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center p-2 ml-4">
                                    <div><input type="checkbox"/></div>
                                    <div className="ml-2 d-flex align-items-center">
                                        <div><i className="fa fa-file text-danger" style={{fontSize:"1rem"}}></i></div>
                                        <div className="ml-2">
                                            <div>Company handbook.pdf<span className="small_text ml-2"><i className="fa fa-user"></i> shared</span></div>
                                            <div className="small_text">Added 07/30/2020 by Charlotte Abbott(2.68MB)</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center p-2 border-bottom">
                                    <div className="ml-2"><i className="fa fa-folder text-success"></i> Employee Uploads(0)</div>
                                </div>
                                <div className="d-flex align-items-center p-2 border-bottom">
                                    <div className="ml-2"><i className="fa fa-folder text-success"></i> Employee Uploads(0)</div>
                                </div>
                                <div className="d-flex align-items-center p-2 border-bottom">
                                    <div className="ml-2"><i className="fa fa-folder text-success"></i> Employee Uploads(0)</div>
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

export default Documents
