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
class Training extends React.Component {
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
                            <div className="text-success"><h5><i className="fa fa-graduation-cap"></i> Training</h5></div>
                        </div>
                        <div className="bg-light text-dark p-2">
                            <div className="pt-1 pb-1 d-flex justify-content-between align-items-center">
                                <div className="font-weight-bold">
                                    Upcoming Training
                                </div>
                            </div>
                            <div className="border">
                                <div className="bg-white text-dark" style={{borderTop:"2px solid #28a745"}}>
                                    <div className="d-flex align-items-center p-2 border-bottom">
                                        <input type="checkbox"/>
                                        <div className="ml-2"><a href="#" className="font-weight-bold">Harassment Training</a> Due Oct 13, 2020</div>
                                    </div>
                                </div>
                                <div className="bg-white text-dark">
                                    <div className="">
                                        <span className="bg-light pl-2 pr-2">BambooHR Product Training</span>
                                    </div>
                                    <div className="d-flex align-items-center p-2 border-bottom">
                                        <input type="checkbox"/>
                                        <div className="ml-2"><a href="#" className="font-weight-bold">BambooHR Advantage Package Demo Video</a></div>
                                    </div>
                                    <div className="d-flex align-items-center p-2 border-bottom">
                                        <input type="checkbox"/>
                                        <div className="ml-2"><a href="#" className="font-weight-bold">Getting Started in BambooHR</a> Due Oct 13, 2020</div>
                                    </div>
                                </div>
                                <div className="bg-white text-dark">
                                    <div className="">
                                        <span className="bg-light pl-2 pr-2">COVID-19</span>
                                    </div>
                                    <div className="d-flex align-items-center p-2 border-bottom">
                                        <input type="checkbox"/>
                                        <div className="ml-2"><a href="#" className="font-weight-bold">Working from home during COVID-19</a></div>
                                    </div>
                                </div>
                                <div className="bg-white text-dark">
                                    <div className="">
                                        <span className="bg-light pl-2 pr-2">Changing Toilet</span>
                                    </div>
                                    <div className="d-flex align-items-center p-2 border-bottom">
                                        <input type="checkbox"/>
                                        <div className="ml-2"><a href="#" className="font-weight-bold">Silicone toilet</a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center pt-3 pb-1 border-bottom">
                                <div className="d-flex mb-2">
                                    <div className="mr-2 text-dark font-weight-bold">
                                        Completed
                                    </div>
                                </div>
                                <div className="d-flex align-items-center">
                                    <a href="#"><i className="fa fa-plus-circle"></i> Record a Training</a>
                                    <select className="form-control ml-2" style={{width:"150px"}}>
                                        <option>Most Recent</option>
                                    </select>
                                    <select className="form-control ml-2" style={{width:"100px"}}>
                                        <option>2021</option>
                                    </select>
                                </div>
                            </div>
                            <div className="border-bottom">
                                <div className="">
                                    <span className="">bauhus</span>
                                </div>
                                <div className="d-flex justify-content-between align-items-center p-2">
                                    <div className="d-flex align-items-center">
                                        <input type="checkbox" disabled checked/>
                                        <div className="ml-2"><a className="font-weight-bold" style={{textDecoration: "line-through"}}>Nicls Training</a>  Completed Mar 17, 2021</div>
                                    </div>
                                    <div>
                                        <i className="fa fa-edit mr-2"></i>
                                        <i className="fa fa-trash"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-2 mb-2 small_text">Summary: 1 Training Completed</div>
                        </div>
                    
                        <div className="pt-4">
                            <div className="pt-1 pb-1 d-flex justify-content-between align-items-center">
                                <div className="font-weight-bold">
                                    <div className="text-success"><i className="fa fa-graduation-cap"></i> Training</div>
                                </div>
                                <div className="btn btn-default"><i className="fa fa-cog"></i></div>
                            </div>
                        </div>
                        <table className="table">
                            <thead>
                                <tr className="">
                                    <th className="bg-light">Training Name</th>
                                    <th className="bg-light">Required?</th>
                                    <th className="bg-light">Frequency</th>
                                    <th className="bg-light">Due(from Hire Date)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="text-dark"><a href="#">Company Handbook Quiz</a></td>
                                    <td className="text-dark"><i className="fa fa-check text-success"></i></td>
                                    <td className="text-dark">One time</td>
                                    <td className="text-dark">
                                        <div className="d-flex align-items-center">
                                            <div className="" style={{width:"70px"}}>14 days</div>
                                            <div className="progress w-100 ml-3">
                                                <div className="progress-bar" style={{width:"70%"}}>70%</div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-dark"><a href="#">CPR</a></td>
                                    <td className="text-dark"></td>
                                    <td className="text-dark">Every 2 years</td>
                                    <td className="text-dark">
                                        <div className="d-flex align-items-center">
                                            <div className="" style={{width:"70px"}}></div>
                                            <div className="progress w-100 ml-3">
                                                <div className="progress-bar" style={{width:"70%"}}>70%</div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-dark"><a href="#">New Hire Training</a></td>
                                    <td className="text-dark"><i className="fa fa-check text-success"></i></td>
                                    <td className="text-dark">One time</td>
                                    <td className="text-dark">
                                        <div className="d-flex align-items-center">
                                            <div className="" style={{width:"70px"}}>14 days</div>
                                            <div className="progress w-100 ml-3">
                                                <div className="progress-bar" style={{width:"70%"}}>70%</div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="5"className="bg-light"><i className="fa fa-suitcase"></i> bauhuas</td>
                                </tr>
                                <tr>
                                    <td className="text-dark"><a href="#">nicls training</a></td>
                                    <td className="text-dark"><i className="fa fa-check text-success"></i></td>
                                    <td className="text-dark">One time</td>
                                    <td className="text-dark">
                                        <div className="d-flex align-items-center">
                                            <div className="" style={{width:"70px"}}>3 days</div>
                                            <div className="progress w-100 ml-3">
                                                <div className="progress-bar" style={{width:"70%"}}>70%</div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="5"className="bg-light"><i className="fa fa-suitcase"></i> Changing Toilet</td>
                                </tr>
                                <tr>
                                    <td className="text-dark"><a href="#">Silicone toilet</a></td>
                                    <td className="text-dark"><i className="fa fa-check text-success"></i></td>
                                    <td className="text-dark">One time</td>
                                    <td className="text-dark">
                                        <div className="d-flex align-items-center">
                                            <div className="" style={{width:"70px"}}>3 days</div>
                                            <div className="progress w-100 ml-3">
                                                <div className="progress-bar" style={{width:"70%"}}>70%</div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="5"className="bg-light"><i className="fa fa-suitcase"></i> COVID-19</td>
                                </tr>
                                <tr>
                                    <td className="text-dark"><a href="#">Working from home during COVID-19</a></td>
                                    <td className="text-dark"><i className="fa fa-check text-success"></i></td>
                                    <td className="text-dark">One time</td>
                                    <td className="text-dark">
                                        <div className="d-flex align-items-center">
                                            <div className="" style={{width:"70px"}}>3 days</div>
                                            <div className="progress w-100 ml-3">
                                                <div className="progress-bar" style={{width:"70%"}}>70%</div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="5"className="bg-light"><i className="fa fa-suitcase"></i> Plumbing Works</td>
                                </tr>
                                <tr>
                                    <td className="text-dark"><a href="#">Installation of Shower Cabin</a></td>
                                    <td className="text-dark"><i className="fa fa-check text-success"></i></td>
                                    <td className="text-dark">One time</td>
                                    <td className="text-dark">
                                        <div className="d-flex align-items-center">
                                            <div className="" style={{width:"70px"}}>3 days</div>
                                            <div className="progress w-100 ml-3">
                                                <div className="progress-bar" style={{width:"70%"}}>70%</div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-dark"><a href="#">Safe Installation Course</a></td>
                                    <td className="text-dark"><i className="fa fa-check text-success"></i></td>
                                    <td className="text-dark">One time</td>
                                    <td className="text-dark">
                                        <div className="d-flex align-items-center">
                                            <div className="" style={{width:"70px"}}>Every 3 years</div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="col-md-2 p-0">
                        <EmployeeDetailRight />
                    </div>
                </div>
            </StyledContainer>

        );
    }
};

export default Training
