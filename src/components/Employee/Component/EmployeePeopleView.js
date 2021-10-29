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
class EmployeePeopleView extends React.Component {
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
                
                <div className="d-flex justify-content-between align-items-center mt-4 mb-3">
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
                    <div className="">
                        <div className="d-flex align-items-center">
                            <div className="mr-2">showing </div>
                            <div className="">
                                <select className="form-control">
                                    <option value="">Active(85)</option>
                                </select>
                            </div> 
                        </div>
                    </div>
                </div>
                <div className="">
                    <table className="table product_table">
                        <thead>
                        <tr>
                            <th>Employee photo</th>
                            <th>Employee #</th>
                            <th>Last Name, First Name</th>
                            <th>Job Title</th>
                            <th>Location</th>
                            <th>Employment Status</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td><img class="rounded-circle" src="../assets/images/xs/avatar4.jpg" alt="avatar" /></td>
                            <td>1</td>
                            <td><Link to="/employeeDetails">Abbott, Charlotte</Link></td>
                            <td>Sr. HR Administrator</td>
                            <td>London, UK</td>
                            <td>Full-Time</td>
                        </tr>
                        <tr>
                            <td><img class="rounded-circle" src="../assets/images/xs/avatar4.jpg" alt="avatar" /></td>
                            <td>1</td>
                            <td><Link to="/employeeDetails">Abbott, Charlotte</Link></td>
                            <td>Sr. HR Administrator</td>
                            <td>London, UK</td>
                            <td>Full-Time</td>
                        </tr>
                        <tr>
                            <td><img class="rounded-circle" src="../assets/images/xs/avatar4.jpg" alt="avatar" /></td>
                            <td>1</td>
                            <td><Link to="/employeeDetails">Abbott, Charlotte</Link></td>
                            <td>Sr. HR Administrator</td>
                            <td>London, UK</td>
                            <td>Full-Time</td>
                        </tr>
                        <tr>
                            <td><img class="rounded-circle" src="../assets/images/xs/avatar4.jpg" alt="avatar" /></td>
                            <td>1</td>
                            <td><Link to="/employeeDetails">Abbott, Charlotte</Link></td>
                            <td>Sr. HR Administrator</td>
                            <td>London, UK</td>
                            <td>Full-Time</td>
                        </tr>
                        <tr>
                            <td><img class="rounded-circle" src="../assets/images/xs/avatar4.jpg" alt="avatar" /></td>
                            <td>1</td>
                            <td><Link to="/employeeDetails">Abbott, Charlotte</Link></td>
                            <td>Sr. HR Administrator</td>
                            <td>London, UK</td>
                            <td>Full-Time</td>
                        </tr>
                        <tr>
                            <td><img class="rounded-circle" src="../assets/images/xs/avatar4.jpg" alt="avatar" /></td>
                            <td>1</td>
                            <td><Link to="/employeeDetails">Abbott, Charlotte</Link></td>
                            <td>Sr. HR Administrator</td>
                            <td>London, UK</td>
                            <td>Full-Time</td>
                        </tr>
                        <tr>
                            <td><img class="rounded-circle" src="../assets/images/xs/avatar4.jpg" alt="avatar" /></td>
                            <td>1</td>
                            <td><Link to="/employeeDetails">Abbott, Charlotte</Link></td>
                            <td>Sr. HR Administrator</td>
                            <td>London, UK</td>
                            <td>Full-Time</td>
                        </tr>
                        <tr>
                            <td><img class="rounded-circle" src="../assets/images/xs/avatar4.jpg" alt="avatar" /></td>
                            <td>1</td>
                            <td><Link to="/employeeDetails">Abbott, Charlotte</Link></td>
                            <td>Sr. HR Administrator</td>
                            <td>London, UK</td>
                            <td>Full-Time</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </StyledContainer>

        );
    }
};

export default EmployeePeopleView
