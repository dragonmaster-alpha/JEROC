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
class Onboarding extends React.Component {
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
                            <div className="text-success"><h5><i className="fa fa-credit-card"></i> Onboarding</h5></div>
                        </div>
                        <div className="bg-light text-dark p-2">
                            <div className="pt-1 pb-1 d-flex justify-content-between align-items-center">
                                <div className="font-weight-bold">
                                    Onboarding Tasks
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

                            <div className="p-2" style={{backgroundColor:"#cecece"}}>
                                <div className="d-flex justify-content-between">
                                    <input type="text" className="form-control bg-white text-dark" placeholder="Task Name *" style={{width:"200px"}}/>
                                    <select className="form-control bg-white text-dark" style={{width:"150px"}}>
                                        <option>Assigned to...</option>
                                    </select>
                                    <div className="d-flex align-items-center">
                                        <input type="date" className="form-control bg-white text-dark"  style={{width:"150px"}}/>
                                        <div className="ml-2">Use hire date</div>
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <textarea className="form-control bg-white text-dark" placeholder="Description(optional)"></textarea>
                                </div>

                                <div className="mt-2 d-flex align-items-center">
                                    <select className="form-control bg-white text-dark" style={{width:"150px"}}>
                                        <option>-category-</option>
                                    </select>
                                    <div className="ml-2">(optional)</div>
                                </div>

                                <div className="mt-2">
                                    Attach File(s)<br/>
                                    <input type="file" />
                                </div>
                            </div>                            
                            <div className="bg-white text-dark">
                                <div className="">
                                    <span className="bg-light border rounded">HR Tasks</span>
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
                                    <span className="bg-light border rounded">IT Setup</span>
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
                            <div className="border-bottom">
                                <div className="">
                                    <span className="">HR Tasks</span>
                                </div>
                                <div className="d-flex justify-content-between align-items-center p-2 pl-4">
                                    <div className="d-flex">
                                        <input type="checkbox" checked className="bg-success"/>
                                        <div className="ml-2"><a className="font-weight-bold" style={{textDecoration: "line-through"}}>New I lier Orientation</a>  Completed by Jenifer Caldwell on 07/30/2020</div>
                                    </div>
                                    <div><i className="fa fa-trash"></i></div>
                                </div>
                                <div className="d-flex justify-content-between align-items-center p-2 pl-4">
                                    <div className="d-flex">
                                        <input type="checkbox" checked className="bg-success"/>
                                        <div className="ml-2"><a className="font-weight-bold" style={{textDecoration: "line-through"}}>New I lier Orientation</a>  Completed by Jenifer Caldwell on 07/30/2020</div>
                                    </div>
                                    <div><i className="fa fa-trash"></i></div>
                                </div>
                                <div className="d-flex justify-content-between align-items-center p-2 pl-4">
                                    <div className="d-flex">
                                        <input type="checkbox" checked className="bg-success"/>
                                        <div className="ml-2"><a className="font-weight-bold" style={{textDecoration: "line-through"}}>New I lier Orientation</a>  Completed by Jenifer Caldwell on 07/30/2020</div>
                                    </div>
                                    <div><i className="fa fa-trash"></i></div>
                                </div>
                                <div className="d-flex justify-content-between align-items-center p-2 pl-4">
                                    <div className="d-flex">
                                        <input type="checkbox" checked className="bg-success"/>
                                        <div className="ml-2"><a className="font-weight-bold" style={{textDecoration: "line-through"}}>New I lier Orientation</a>  Completed by Jenifer Caldwell on 07/30/2020</div>
                                    </div>
                                    <div><i className="fa fa-trash"></i></div>
                                </div>
                            </div>             
                            <div className="border-bottom">
                                <div className="">
                                    <span className="">Manage Tasks</span>
                                </div>
                                <div className="d-flex justify-content-between align-items-center p-2 pl-4">
                                    <div className="d-flex">
                                        <input type="checkbox" checked className="bg-success"/>
                                        <div className="ml-2"><a className="font-weight-bold" style={{textDecoration: "line-through"}}>New I lier Orientation</a>  Completed by Jenifer Caldwell on 07/30/2020</div>
                                    </div>
                                    <div><i className="fa fa-trash"></i></div>
                                </div>
                                <div className="d-flex justify-content-between align-items-center p-2 pl-4">
                                    <div className="d-flex">
                                        <input type="checkbox" checked className="bg-success"/>
                                        <div className="ml-2"><a className="font-weight-bold" style={{textDecoration: "line-through"}}>New I lier Orientation</a>  Completed by Jenifer Caldwell on 07/30/2020</div>
                                    </div>
                                    <div><i className="fa fa-trash"></i></div>
                                </div>
                            </div>             
                            <div className="border-bottom">
                                <div className="">
                                    <span className="">New Employee Paperwork</span>
                                </div>
                                <div className="d-flex justify-content-between align-items-center p-2 pl-4">
                                    <div className="d-flex">
                                        <input type="checkbox" checked className="bg-success"/>
                                        <div className="ml-2"><a className="font-weight-bold" style={{textDecoration: "line-through"}}>New I lier Orientation</a>  Completed by Jenifer Caldwell on 07/30/2020</div>
                                    </div>
                                    <div><i className="fa fa-trash"></i></div>
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

export default Onboarding
