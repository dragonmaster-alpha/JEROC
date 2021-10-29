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
    .td_header{
        background-color: lightgrey!important;
    }
    .employee_info{
        font-size: .7rem;
    }
    .employee_name{
        font-color: 
    }
    td{
        vertical-align:top!important;
    }
`;
class EmployeeDirectoryView extends React.Component {
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
                    <div className="">
                        <input type="text" class="form-control" style={{width:"300px"}} placeholder="Search by name, title, department, etc..." />
                    </div>
                    <div className="">
                        <div className="d-flex align-items-center">
                            <div className="mr-2">Group By </div>
                            <div className="">
                                <select className="form-control">
                                    <option value="">Department</option>
                                </select>
                            </div> 
                            <div className="ml-2">
                                <select className="form-control">
                                    <option value="">My Circle</option>
                                </select>
                            </div> 
                        </div>
                    </div>
                </div>
                <div className="ml-1 mr-1">
                    <div className="text-success mt-2 mb-2">My Circle</div>
                    <table className="table product_table">
                        <tbody>
                        <tr>
                            <td colspan="4" className="td_header">Customer Success(1)</td>
                        </tr>
                        <tr>
                            <td><img class="rounded-circle" src="../assets/images/xs/avatar4.jpg" alt="avatar" width="80%" /></td>
                            <td>
                                <div className="employee_name mt-3"><Link to="/employeeDetails">Cheryl Barnet</Link></div>
                                <div className="employee_info mt-2">VP of Customer Success in Customer Success</div>
                                <div className="employee_info mt-2">London, UK</div>
                                <div className="employee_info mt-2">Europe</div>
                                <div className="employee_icon mt-2">
                                    <i className="fa fa-linkedin-square"></i>
                                    <i className="ml-2 fa fa-twitter-square"></i>
                                    <i className="ml-2 fa fa-facebook-square"></i>
                                </div>
                            </td>
                            <td>
                                <div className="employee_info mt-3"><i className="fa fa-envelope"></i> cbarnet@efficientoffice.com</div>
                                <div className="employee_info mt-2"><i className="fa fa-phone"></i> 801-724-6600 Ext. 1278</div>
                                <div className="employee_info mt-2"><i className="fa fa-mobile"></i> 801-555-6477</div>
                            </td>
                            <td>
                                <div className="employee_info mt-3"><i className="fa fa-user"></i> Reports to Nicklas Rosen</div>
                                <div className="employee_info mt-2"><i className="fa fa-sitemap"></i> 2 direct reports</div>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="4" className="td_header">Finance(1)</td>
                        </tr>
                        <tr>
                            <td><img class="rounded-circle" src="../assets/images/xs/avatar4.jpg" alt="avatar" width="80%" /></td>
                            <td>
                                <div className="employee_name mt-3"><Link to="/employeeDetails">Cheryl Barnet</Link></div>
                                <div className="employee_info mt-2">VP of Customer Success in Customer Success</div>
                                <div className="employee_info mt-2">London, UK</div>
                                <div className="employee_info mt-2">Europe</div>
                                <div className="employee_icon mt-2">
                                    <i className="fa fa-linkedin-square"></i>
                                    <i className="ml-2 fa fa-twitter-square"></i>
                                    <i className="ml-2 fa fa-facebook-square"></i>
                                </div>
                            </td>
                            <td>
                                <div className="employee_info mt-3"><i className="fa fa-envelope"></i> cbarnet@efficientoffice.com</div>
                                <div className="employee_info mt-2"><i className="fa fa-phone"></i> 801-724-6600 Ext. 1278</div>
                                <div className="employee_info mt-2"><i className="fa fa-mobile"></i> 801-555-6477</div>
                            </td>
                            <td>
                                <div className="employee_info mt-3"><i className="fa fa-user"></i> Reports to Nicklas Rosen</div>
                                <div className="employee_info mt-2"><i className="fa fa-sitemap"></i> 2 direct reports</div>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="4" className="td_header">Human Resources(1)</td>
                        </tr>
                        <tr>
                            <td><img class="rounded-circle" src="../assets/images/xs/avatar4.jpg" alt="avatar" width="80%" /></td>
                            <td>
                                <div className="employee_name mt-3"><Link to="/employeeDetails">Cheryl Barnet</Link></div>
                                <div className="employee_info mt-2">VP of Customer Success in Customer Success</div>
                                <div className="employee_info mt-2">London, UK</div>
                                <div className="employee_info mt-2">Europe</div>
                                <div className="employee_icon mt-2">
                                    <i className="fa fa-linkedin-square"></i>
                                    <i className="ml-2 fa fa-twitter-square"></i>
                                    <i className="ml-2 fa fa-facebook-square"></i>
                                </div>
                            </td>
                            <td>
                                <div className="employee_info mt-3"><i className="fa fa-envelope"></i> cbarnet@efficientoffice.com</div>
                                <div className="employee_info mt-2"><i className="fa fa-phone"></i> 801-724-6600 Ext. 1278</div>
                                <div className="employee_info mt-2"><i className="fa fa-mobile"></i> 801-555-6477</div>
                            </td>
                            <td>
                                <div className="employee_info mt-3"><i className="fa fa-user"></i> Reports to Nicklas Rosen</div>
                                <div className="employee_info mt-2"><i className="fa fa-sitemap"></i> 2 direct reports</div>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="4" className="td_header">IT(1)</td>
                        </tr>
                        <tr>
                            <td><img class="rounded-circle" src="../assets/images/xs/avatar4.jpg" alt="avatar" width="80%" /></td>
                            <td>
                                <div className="employee_name mt-3"><Link to="/employeeDetails">Cheryl Barnet</Link></div>
                                <div className="employee_info mt-2">VP of Customer Success in Customer Success</div>
                                <div className="employee_info mt-2">London, UK</div>
                                <div className="employee_info mt-2">Europe</div>
                                <div className="employee_icon mt-2">
                                    <i className="fa fa-linkedin-square"></i>
                                    <i className="ml-2 fa fa-twitter-square"></i>
                                    <i className="ml-2 fa fa-facebook-square"></i>
                                </div>
                            </td>
                            <td>
                                <div className="employee_info mt-3"><i className="fa fa-envelope"></i> cbarnet@efficientoffice.com</div>
                                <div className="employee_info mt-2"><i className="fa fa-phone"></i> 801-724-6600 Ext. 1278</div>
                                <div className="employee_info mt-2"><i className="fa fa-mobile"></i> 801-555-6477</div>
                            </td>
                            <td>
                                <div className="employee_info mt-3"><i className="fa fa-user"></i> Reports to Nicklas Rosen</div>
                                <div className="employee_info mt-2"><i className="fa fa-sitemap"></i> 2 direct reports</div>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="4" className="td_header">Marketing(2)</td>
                        </tr>
                        <tr>
                            <td><img class="rounded-circle" src="../assets/images/xs/avatar4.jpg" alt="avatar" width="80%" /></td>
                            <td>
                                <div className="employee_name mt-3"><Link to="/employeeDetails">Cheryl Barnet</Link></div>
                                <div className="employee_info mt-2">VP of Customer Success in Customer Success</div>
                                <div className="employee_info mt-2">London, UK</div>
                                <div className="employee_info mt-2">Europe</div>
                                <div className="employee_icon mt-2">
                                    <i className="fa fa-linkedin-square"></i>
                                    <i className="ml-2 fa fa-twitter-square"></i>
                                    <i className="ml-2 fa fa-facebook-square"></i>
                                </div>
                            </td>
                            <td>
                                <div className="employee_info mt-3"><i className="fa fa-envelope"></i> cbarnet@efficientoffice.com</div>
                                <div className="employee_info mt-2"><i className="fa fa-phone"></i> 801-724-6600 Ext. 1278</div>
                                <div className="employee_info mt-2"><i className="fa fa-mobile"></i> 801-555-6477</div>
                            </td>
                            <td>
                                <div className="employee_info mt-3"><i className="fa fa-user"></i> Reports to Nicklas Rosen</div>
                                <div className="employee_info mt-2"><i className="fa fa-sitemap"></i> 2 direct reports</div>
                            </td>
                        </tr>
                        <tr>
                            <td><img class="rounded-circle" src="../assets/images/xs/avatar4.jpg" alt="avatar" width="80%" /></td>
                            <td>
                                <div className="employee_name mt-3"><Link to="/employeeDetails">Cheryl Barnet</Link></div>
                                <div className="employee_info mt-2">VP of Customer Success in Customer Success</div>
                                <div className="employee_info mt-2">London, UK</div>
                                <div className="employee_info mt-2">Europe</div>
                                <div className="employee_icon mt-2">
                                    <i className="fa fa-linkedin-square"></i>
                                    <i className="ml-2 fa fa-twitter-square"></i>
                                    <i className="ml-2 fa fa-facebook-square"></i>
                                </div>
                            </td>
                            <td>
                                <div className="employee_info mt-3"><i className="fa fa-envelope"></i> cbarnet@efficientoffice.com</div>
                                <div className="employee_info mt-2"><i className="fa fa-phone"></i> 801-724-6600 Ext. 1278</div>
                                <div className="employee_info mt-2"><i className="fa fa-mobile"></i> 801-555-6477</div>
                            </td>
                            <td>
                                <div className="employee_info mt-3"><i className="fa fa-user"></i> Reports to Nicklas Rosen</div>
                                <div className="employee_info mt-2"><i className="fa fa-sitemap"></i> 2 direct reports</div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </StyledContainer>

        );
    }
};

export default EmployeeDirectoryView
