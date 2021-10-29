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
class TimeOff extends React.Component {
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
                            <div className="text-success"><h5><i className="fa fa-clock-o"></i> Time Off</h5></div>
                            <div className="small_text">Accrual Level Start Date : 10/03/2019</div>
                        </div>
                        <div className="d-flex justify-content-between mb-0">
                            <div className="w-100 text-center p-2 m-2 bg-light text-dark">
                                <div className="font-weight-bold">Holiday</div>
                                <div className="text-success mb-2 mt-2"><h5><i className="fa fa-tree"></i> 15.6</h5></div>
                                <div className="text-success small_text">HOURS AVAILABLE</div>
                            </div>
                            <div className="w-100 text-center p-2 m-2 bg-light text-dark">
                                <div className="font-weight-bold">Sick</div>
                                <div className="text-success mb-2 mt-2"><h5><i className="fa fa-clock-o"></i> 24</h5></div>
                                <div className="text-success small_text">HOURS AVAILABLE</div>
                            </div>
                            <div className="w-100 text-center p-2 m-2 bg-light text-dark">
                                <div className="font-weight-bold">Bereavement</div>
                                <div className="mb-2 mt-2"><h5><i className="fa fa-suitcase"></i></h5></div>
                                <div className="">0 DAYS USED(YTD)</div>
                            </div>
                            <div className="w-100 text-center p-2 m-2 bg-light text-dark">
                                <div className="font-weight-bold">COVID-19 Related Absence</div>
                                <div className="mb-2 mt-2"><h5><i className="fa fa-clock-o"></i></h5></div>
                                <div className="">0 HOURS USED(YTD)</div>
                            </div>
                        </div>
                        
                        <div className="d-flex justify-content-between mb-2">
                            <div className="w-100 text-center">
                                Holiday Full-Time
                            </div>
                            <div className="w-100 text-center">
                                Sick Full-Time
                            </div>
                            <div className="w-100 text-center">
                                &nbsp;
                            </div>
                            <div className="w-100 text-center">
                                &nbsp;
                            </div>
                        </div>

                        <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex mb-2 mt-2">
                                <div className="mr-2 text-dark font-weight-bold">
                                    <i className="fa fa-clock-o"></i> Job Roles
                                </div>
                            </div>
                        </div>
                        
                        <div className="border-bottom pt-1"></div>

                        <div className="border-bottom pt-1 pb-1 d-flex">
                            <img class="rounded-circle" src="../assets/images/dummy2.png" alt="avatar"/>
                            <div>
                                <div>Apr 2</div>
                                <div className="small_text">Good Friday</div>
                            </div>
                        </div>
                        <div className="border-bottom pt-1 pb-1 d-flex">
                            <img class="rounded-circle" src="../assets/images/dummy2.png" alt="avatar"/>
                            <div>
                                <div>Apr 2</div>
                                <div className="small_text">Good Friday</div>
                            </div>
                        </div>
                        <div className="border-bottom pt-1 pb-1 d-flex">
                            <img class="rounded-circle" src="../assets/images/dummy2.png" alt="avatar"/>
                            <div>
                                <div>Apr 2</div>
                                <div className="small_text">Good Friday</div>
                            </div>
                        </div>


                        <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex mb-2 mt-4">
                                <div className="mr-2 text-dark font-weight-bold">
                                    <i className="fa fa-clock-o"></i> History
                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between">
                            <div className="d-flex">
                                <select className="form-control" style={{width:"300px"}}>
                                    <option>Holiday</option>
                                </select>
                                <select className="form-control ml-2" style={{width:"100px"}}>
                                    <option>2021</option>
                                </select>
                            </div>
                            <div>                                
                                <select className="form-control ml-2">
                                    <option>Earned/Used</option>
                                </select>
                            </div>
                        </div>
                        <table className="table">
                            <thead>
                                <tr className="">
                                    <th className="bg-light">Date</th>
                                    <th className="bg-light">Description</th>
                                    <th className="bg-light">Used</th>
                                    <th className="bg-light">Accrued(+)</th>
                                    <th className="bg-light">Balance</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="text-dark">01/01/2021</td>
                                    <td className="text-dark"><div>Holiday</div><div className="small_text">Camping</div></td>
                                    <td className="text-dark">-16.00 hours</td>
                                    <td className="text-dark"></td>
                                    <td className="text-dark">45.00 hours</td>
                                </tr>
                                <tr>
                                    <td className="text-dark">01/01/2021</td>
                                    <td className="text-dark"><div>Holiday</div><div className="small_text">Accrual for 12/17/2020 to 01/01/2021</div></td>
                                    <td className="text-dark"></td>
                                    <td className="text-dark">5.00 hours</td>
                                    <td className="text-dark">50.00 hours</td>
                                </tr>
                                <tr>
                                    <td className="text-dark">01/01/2021</td>
                                    <td className="text-dark"><div>Holiday</div><div className="small_text">Camping</div></td>
                                    <td className="text-dark">-16.00 hours</td>
                                    <td className="text-dark"></td>
                                    <td className="text-dark">45.00 hours</td>
                                </tr>
                                <tr>
                                    <td className="text-dark">01/01/2021</td>
                                    <td className="text-dark"><div>Holiday</div><div className="small_text">Accrual for 12/17/2020 to 01/01/2021</div></td>
                                    <td className="text-dark"></td>
                                    <td className="text-dark">5.00 hours</td>
                                    <td className="text-dark">50.00 hours</td>
                                </tr>
                                <tr>
                                    <td className="text-dark">01/01/2021</td>
                                    <td className="text-dark"><div>Holiday</div><div className="small_text">Camping</div></td>
                                    <td className="text-dark">-16.00 hours</td>
                                    <td className="text-dark"></td>
                                    <td className="text-dark">45.00 hours</td>
                                </tr>
                                <tr>
                                    <td className="text-dark">01/01/2021</td>
                                    <td className="text-dark"><div>Holiday</div><div className="small_text">Accrual for 12/17/2020 to 01/01/2021</div></td>
                                    <td className="text-dark"></td>
                                    <td className="text-dark">5.00 hours</td>
                                    <td className="text-dark">50.00 hours</td>
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

export default TimeOff
