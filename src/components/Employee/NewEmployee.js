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
class NewEmployee extends React.Component {
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
                    <div className="d-flex justify-content-between">
                        <div className="text-success"><h5><i className="fa fa-user"></i> New Employee</h5></div>
                        <div className="">Customize Add Employee Form</div>
                    </div>
                    <div className="border p-3 mb-2">                        
                        <div className="mb-2"><h6>Make Everyone's life a little bit easier and send a new hire packet.</h6></div>
                        <div className="">Your new employee will be able to enter their own personal information, sign paperwork, see their team, and more.</div>
                        
                        <div className="form-check">
                            <div className="form-check-label">
                                <input type="checkbox" className="form-check-input"/> Send this new employee a new hire packet
                            </div>
                        </div>    
                    </div>
                    <div className="bg-white text-dark p-3 border-bottom">
                        <div className="text-success mb-3"><i className="fa fa-user"></i> Personal</div>
                        <div className="d-flex mb-2">
                            <div className="mr-2">
                                <div>Employee#</div>
                                <input type="text" className="form-control" placeholder=""/>
                            </div>
                        </div>
                        <div className="d-flex mb-2">
                            <div className="mr-2">
                                <div>Name</div>
                                <input type="text" className="form-control" placeholder="First *"/>
                            </div>
                            <div className="mr-2">
                                <div>&nbsp;</div>
                                <input type="text" className="form-control" placeholder="Middle"/>
                            </div>
                            <div className="mr-2">
                                <div>&nbsp;</div>
                                <input type="text" className="form-control" placeholder="Last *"/>
                            </div>
                            <div className="mr-2">
                                <div>Preferred Name</div>
                                <input type="text" className="form-control" placeholder=""/>
                            </div>
                        </div>
                        <div className="d-flex mb-2">
                            <div className="mr-2">
                                <div>Birthday#</div>
                                <input type="date" className="form-control" placeholder=""/>
                            </div>
                        </div>
                        <div className="d-flex mb-2">
                            <div className="mr-2">
                                <div>SSN</div>
                                <input type="text" className="form-control" placeholder=""/>
                            </div>
                        </div>
                        <div className="d-flex mb-2">
                            <div className="mr-2">
                                <div>Gender</div>
                                <select className="form-control">
                                    <option>-Select-</option>
                                </select>
                            </div>
                            <div className="mr-2">
                                <div>Marital Status</div>
                                <select className="form-control">
                                    <option>-Select-</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-white text-dark p-3 border-bottom">
                        <div className="text-success mb-3"><i className="fa fa-home"></i> Address</div>
                        <div className="d-flex mb-2">
                            <div className="mr-2">
                                <input type="text" className="form-control" placeholder="Street 1"/>
                            </div>
                        </div>
                        <div className="d-flex mb-2">
                            <div className="mr-2">
                                <input type="text" className="form-control" placeholder="Street 2"/>
                            </div>
                        </div>
                        <div className="d-flex mb-2">
                            <div className="mr-2">
                                <input type="text" className="form-control" placeholder="City"/>
                            </div>
                            <div className="mr-2">
                                <input type="text" className="form-control" placeholder="Provice"/>
                            </div>
                            <div className="mr-2">
                                <input type="text" className="form-control" placeholder="Postal Code"/>
                            </div>
                        </div>
                        <div className="d-flex mb-2">
                            <div className="mr-2">
                                <select className="form-control">
                                    <option>Sweden</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-white text-dark p-3 border-bottom">
                        <div className="text-success mb-3"><i className="fa fa-edit"></i> Compensation</div>
                        <div className="d-flex mb-2">
                            <div className="mr-2">
                                <div className="">Pay rate</div>                                
                                <div class="input-group">
                                    <input type="text" class="form-control" placeholder="" />
                                    <div class="input-group-append">
                                    <span class="input-group-text">USD</span>
                                    </div>
                                </div>
                            </div>
                            <div className="mr-2">
                                <div className="">&nbsp;</div>                                
                                <div className="mt-2">Per</div>
                            </div>
                            <div className="mr-2">
                                <div className="">&nbsp;</div>   
                                <select className="form-control">
                                    <option>-Select-</option>
                                </select>
                            </div>
                        </div>
                        <div className="d-flex mb-2">
                            <div className="mr-2">
                                <div className="">Pay Type</div>   
                                <select className="form-control">
                                    <option>-Select-</option>
                                </select>
                            </div>
                        </div>
                        <div className="d-flex mb-2">
                            <div className="mr-2">
                                <div className="">Pay Schedule</div>   
                                <select className="form-control">
                                    <option>-Select-</option>
                                </select>
                            </div>
                        </div>
                        <div className="d-flex mb-2">
                            <div className="mr-2">
                                <div className="">Ethnicity</div>   
                                <select className="form-control">
                                    <option>-Select-</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-white text-dark p-3 border-bottom">
                        <div className="text-success mb-3"><i className="fa fa-mobile"></i> Contact</div>
                        <div className="d-flex mb-2">
                            <div className="mr-2">
                                <div className="">Phone</div>                                
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i className="fa fa-building"></i></span>
                                    </div>
                                    <input type="text" class="form-control" placeholder="Work Phone" />
                                </div>
                            </div>
                            <div className="mr-2">
                                <div className="">&nbsp;</div>                                
                                <div class="input-group">
                                    <input type="text" class="form-control" placeholder="Ext." style={{width:"80px"}}/>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex mb-2">
                            <div className="mr-2">
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i className="fa fa-mobile"></i></span>
                                    </div>
                                    <input type="text" class="form-control" placeholder="Mobile Phone" />
                                </div>
                            </div>
                        </div>
                        <div className="d-flex mb-2">
                            <div className="mr-2">
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i className="fa fa-home"></i></span>
                                    </div>
                                    <input type="text" class="form-control" placeholder="Home Phone" />
                                </div>
                            </div>
                        </div>
                        <div className="d-flex mb-2">
                            <div className="mr-2">
                                <div className="">Email</div>                                
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i className="fa fa-building"></i></span>
                                    </div>
                                    <input type="text" class="form-control" placeholder="Working Email" />
                                </div>
                            </div>
                        </div>
                        <div className="d-flex mb-2">
                            <div className="mr-2">                              
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i className="fa fa-home"></i></span>
                                    </div>
                                    <input type="text" class="form-control" placeholder="Home Email" />
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-white text-dark p-3 border-bottom">
                        <div className="text-success mb-3"><i className="fa fa-mobile"></i> Job</div>
                        
                        <div className="d-flex mb-2">
                            <div className="mr-2">
                                <div>Hire Date</div>
                                <div class="input-group">                                    
                                    <input type="date" class="form-control" placeholder="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-white text-dark p-3 border-bottom">
                        <div className="text-success mb-3"><i className="fa fa-mobile"></i> Employment Status</div>
                        
                        <div className="d-flex mb-2">
                            <div className="mr-2">
                                <div className="">Employment Status</div>   
                                <select className="form-control">
                                    <option>-Select-</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-white text-dark p-3 border-bottom">
                        <div className="text-success mb-3"><i className="fa fa-mobile"></i> Job Information</div>
                        
                        <div className="d-flex mb-2">
                            <div className="mr-2">
                                <div className="">Job Title</div>   
                                <select className="form-control">
                                    <option>-Select-</option>
                                </select>
                            </div>
                            <div className="mr-2">
                                <div className="">Reports To</div>   
                                <select className="form-control">
                                    <option>-Select-</option>
                                </select>
                            </div>
                        </div>
                        <div className="d-flex mb-2">
                            <div className="mr-2">
                                <div className="">Department</div>   
                                <select className="form-control">
                                    <option>-Select-</option>
                                </select>
                            </div>
                            <div className="mr-2">
                                <div className="">Division</div>   
                                <select className="form-control">
                                    <option>-Select-</option>
                                </select>
                            </div>
                        </div>
                        <div className="d-flex mb-2">
                            <div className="mr-2">
                                <div className="">Location</div>   
                                <select className="form-control">
                                    <option>-Select-</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-white text-dark p-3 border-bottom">
                        <div className="text-success mb-3"><i className="fa fa-lock"></i> Self-service access</div>
                        
                        <div className="d-flex mb-2">
                            <div className="mr-4">
                                <div className=""><h6>Allow Access to BambooHR</h6></div>
                                <div className="">They will be able to login to BambooHR using<br/> the access level you choose.</div>
                            </div>
                            <div className="mr-2">
                                <div className="text-success"><h6>No Access</h6></div>
                                <div className="">They won't have access and will not be able to<br/> login to BambooHR.</div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white text-dark p-3 border-bottom">
                        <div className="d-flex mb-2">
                            <div className="mr-4">
                                <Link to="/employee"><div className="btn btn-success">Save</div></Link>
                            </div>
                            <div className="mr-2">
                                <Link to="/employee"><div className="btn btn-default">Cancel</div></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </StyledContainer>

        );
    }
};

export default NewEmployee
