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
`;
class Job extends React.Component {
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
                            <div className="text-success"><h5><i className="fa fa-envelope"></i> Job</h5></div>
                            <div className="small_text">Customize Fields</div>
                        </div>
                        <div className="d-flex mb-2">
                            <div className="mr-2">
                                <div>Hire Date</div>
                                <input type="date" className="form-control" placeholder=""/>
                            </div>
                        </div>
                        <div className="d-flex mb-2">
                            <div className="mr-2">
                                <div>Team</div>
                                <select className="form-control">
                                    <option>-Select-</option>
                                </select>
                            </div>
                        </div>
                        <div className="d-flex mb-2">
                            <div className="mr-2">
                                <div>Notice Period</div>
                                <select className="form-control">
                                    <option>-Select-</option>
                                </select>
                            </div>
                        </div>

                        <div className="border-bottom pt-3 mb-3"></div>

                        <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex mb-2">
                                <div className="mr-2 text-dark font-weight-bold">
                                    Job Roles
                                </div>
                            </div>
                            <div><a href="#"><i className="fa fa-plus-circle"></i> Update Job Roles Information</a></div>
                        </div>

                        <table className="table">
                            <thead>
                                <tr className="">
                                    <th className="bg-light">Effective Date</th>
                                    <th className="bg-light">Job Roles</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="text-dark"><i className="fa fa-circle text-success"></i> 03/17/2021</td>
                                    <td className="text-dark">Plumber, Electrician, exampleCustomer representative</td>
                                </tr>
                                <tr>
                                    <td><i className="fa fa-circle text-default"></i> 03/17/2021</td>
                                    <td>Electrician</td>
                                </tr>
                            </tbody>
                        </table>

                        <div className="border-bottom pt-3 mb-3"></div>
                        
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex mb-2">
                                <div className="mr-2 text-dark font-weight-bold">
                                Employment Status
                                </div>
                            </div>
                            <div><a href="#"><i className="fa fa-plus-circle"></i> Update Employment Status</a></div>
                        </div>

                        <table className="table">
                            <thead>
                                <tr className="">
                                    <th className="bg-light">Effective Date</th>
                                    <th className="bg-light">Employment Status</th>
                                    <th className="bg-light">Comment</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="text-dark"><i className="fa fa-circle text-success"></i> 03/17/2021</td>
                                    <td className="text-dark">Full-Time</td>
                                    <td className="text-dark">NA</td>
                                </tr>
                            </tbody>
                        </table>

                        <div className="border-bottom pt-3 mb-3"></div>
                        
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex mb-2">
                                <div className="mr-2 text-dark font-weight-bold">
                                Job Information
                                </div>
                            </div>
                            <div><a href="#"><i className="fa fa-plus-circle"></i> Update Job Information</a></div>
                        </div>

                        <table className="table">
                            <thead>
                                <tr className="">
                                    <th className="bg-light">Effective Date</th>
                                    <th className="bg-light">Location</th>
                                    <th className="bg-light">Division</th>
                                    <th className="bg-light">Department</th>
                                    <th className="bg-light">Job Title</th>
                                    <th className="bg-light">Reports To</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="text-dark"><i className="fa fa-circle text-success"></i> 03/17/2021</td>
                                    <td className="text-dark">London, UK</td>
                                    <td className="text-dark">Europe</td>
                                    <td className="text-dark">Human Resources</td>
                                    <td className="text-dark">Sr. HR Administrator</td>
                                    <td className="text-dark">Jennlfer Caldwell</td>
                                </tr>
                                <tr>
                                    <td className="text-dark"><i className="fa fa-circle text-success"></i> 03/17/2021</td>
                                    <td className="text-dark">London, UK</td>
                                    <td className="text-dark">Europe</td>
                                    <td className="text-dark">Human Resources</td>
                                    <td className="text-dark">Sr. HR Administrator</td>
                                    <td className="text-dark">Jennlfer Caldwell</td>
                                </tr>
                                <tr>
                                    <td className="text-dark"><i className="fa fa-circle text-success"></i> 03/17/2021</td>
                                    <td className="text-dark">London, UK</td>
                                    <td className="text-dark">Europe</td>
                                    <td className="text-dark">Human Resources</td>
                                    <td className="text-dark">Sr. HR Administrator</td>
                                    <td className="text-dark">Jennlfer Caldwell</td>
                                </tr>
                                <tr>
                                    <td className="text-dark"><i className="fa fa-circle text-success"></i> 03/17/2021</td>
                                    <td className="text-dark">London, UK</td>
                                    <td className="text-dark">Europe</td>
                                    <td className="text-dark">Human Resources</td>
                                    <td className="text-dark">Sr. HR Administrator</td>
                                    <td className="text-dark">Jennlfer Caldwell</td>
                                </tr>
                                <tr>
                                    <td className="text-dark"><i className="fa fa-circle text-success"></i> 03/17/2021</td>
                                    <td className="text-dark">London, UK</td>
                                    <td className="text-dark">Europe</td>
                                    <td className="text-dark">Human Resources</td>
                                    <td className="text-dark">Sr. HR Administrator</td>
                                    <td className="text-dark">Jennlfer Caldwell</td>
                                </tr>
                                <tr>
                                    <td className="text-dark"><i className="fa fa-circle text-success"></i> 03/17/2021</td>
                                    <td className="text-dark">London, UK</td>
                                    <td className="text-dark">Europe</td>
                                    <td className="text-dark">Human Resources</td>
                                    <td className="text-dark">Sr. HR Administrator</td>
                                    <td className="text-dark">Jennlfer Caldwell</td>
                                </tr>
                            </tbody>
                        </table>

                        

                        <div className="border-bottom pt-3 mb-3"></div>
                        
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex mb-2">
                                <div className="mr-2 text-dark font-weight-bold">
                                Compensation
                                </div>
                            </div>
                            <div><a href="#"><i className="fa fa-plus-circle"></i> Update Compensation</a></div>
                        </div>

                        <table className="table">
                            <thead>
                                <tr className="">
                                    <th className="bg-light">Effective Date</th>
                                    <th className="bg-light">Pay Rate</th>
                                    <th className="bg-light">Pay Schedule</th>
                                    <th className="bg-light">Pay Type</th>
                                    <th className="bg-light">Overtime</th>
                                    <th className="bg-light">Change Reason</th>
                                    <th className="bg-light">Comment</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="text-dark"><i className="fa fa-circle text-success"></i> 03/17/2021</td>
                                    <td className="text-dark">%65,000.00/Year</td>
                                    <td className="text-dark">Twice a month</td>
                                    <td className="text-dark">Salary</td>
                                    <td className="text-dark">Exempt</td>
                                    <td className="text-dark">Promotion</td>
                                    <td className="text-dark">Promotion</td>
                                </tr>
                                <tr>
                                    <td className="text-dark"><i className="fa fa-circle text-success"></i> 03/17/2021</td>
                                    <td className="text-dark">%65,000.00/Year</td>
                                    <td className="text-dark">Twice a month</td>
                                    <td className="text-dark">Salary</td>
                                    <td className="text-dark">Exempt</td>
                                    <td className="text-dark">Promotion</td>
                                    <td className="text-dark">Promotion</td>
                                </tr>
                                <tr>
                                    <td className="text-dark"><i className="fa fa-circle text-success"></i> 03/17/2021</td>
                                    <td className="text-dark">%65,000.00/Year</td>
                                    <td className="text-dark">Twice a month</td>
                                    <td className="text-dark">Salary</td>
                                    <td className="text-dark">Exempt</td>
                                    <td className="text-dark">NA</td>
                                    <td className="text-dark">NA</td>
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

export default Job
