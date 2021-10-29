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
class General extends React.Component {
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
                            <div className="text-success"><h5><i className="fa fa-credit-card"></i> Personal</h5></div>
                            <div className="small_text">Customize Fields</div>
                        </div>
                        <div className="d-flex mb-2">
                            <div className="mr-2 text-dark font-weight-bold">
                                Basic Information
                            </div>
                        </div>
                        <div className="d-flex mb-2">
                            <div className="mr-2">
                                <div>Employee#</div>
                                <input type="text" className="form-control" placeholder=""/>
                            </div>
                            <div className="mr-2">
                                <div>Status</div>
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
                                <div>Birth Date</div>
                                <input type="date" className="form-control" placeholder=""/>
                            </div>
                            <div className="mr-2">
                                <div>&nbsp;</div>
                                <div>Age : 34</div>
                            </div>
                            <div className="mr-2">
                                <div>Ethnicity</div>
                                <select className="form-control">
                                    <option>White</option>
                                </select>
                            </div>
                            <div className="mr-2">
                                <div>EEO Job Category</div>
                                <select className="form-control">
                                    <option>Service Workers</option>
                                </select>
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
                                <div>NIN</div>
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
                        <div className="d-flex mb-2">
                            <div className="mr-2">
                                <div>Shirt size custom field</div>
                                <select className="form-control">
                                    <option>-Select-</option>
                                </select>
                            </div>
                        </div>
                        <div className="d-flex mb-2">
                            <div className="mr-2">
                                <div>Dietary Restrictions</div>
                                <textarea className="form-control"></textarea>
                            </div>
                        </div>
                        <div className="d-flex mb-2">
                            <div className="mr-2">
                                <div>Allergies</div>
                                <input type="text" className="form-control" placeholder=""/>
                            </div>
                        </div>

                        <div className="border-bottom pt-3 mb-3"></div>

                        <div className="d-flex mb-2">
                            <div className="mr-2 text-dark font-weight-bold">
                                Address
                            </div>
                        </div>
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
                                <input type="text" className="form-control" placeholder="Country"/>
                            </div>
                        </div>

                        <div className="border-bottom pt-3 mb-3"></div>

                        <div className="d-flex mb-2">
                            <div className="mr-2 text-dark font-weight-bold">
                                Contact
                            </div>
                        </div>
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

                        <div className="border-bottom pt-3 mb-3"></div>

                        <div className="d-flex mb-2">
                            <div className="mr-2 text-dark font-weight-bold">
                                Social Link
                            </div>
                        </div>

                        <div className="d-flex mb-2">
                            <div className="mr-2">
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i className="fa fa-linkedin"></i></span>
                                    </div>
                                    <input type="text" class="form-control" placeholder="" />
                                </div>
                            </div>
                        </div>

                        <div className="d-flex mb-2">
                            <div className="mr-2">
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i className="fa fa-twitter"></i></span>
                                    </div>
                                    <input type="text" class="form-control" placeholder="" />
                                </div>
                            </div>
                        </div>

                        <div className="d-flex mb-2">
                            <div className="mr-2">
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i className="fa fa-facebook"></i></span>
                                    </div>
                                    <input type="text" class="form-control" placeholder="" />
                                </div>
                            </div>
                        </div>

                        <div className="border-bottom pt-3 mb-3"></div>

                        <div className="d-flex mb-2">
                            <div className="mr-2 text-dark font-weight-bold">
                                Education
                            </div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className>
                                <div className="d-flex mb-2">
                                    <div className="mr-2">
                                        <div class="input-group">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text"><i className="fa fa-graduation-cap"></i></span>
                                            </div>
                                            <input type="text" class="form-control" placeholder="" />
                                        </div>
                                    </div>
                                </div>

                                <div className="d-flex mb-2">                                
                                    <div className="mr-2">
                                        <input type="text" class="form-control" placeholder="" />
                                    </div>
                                    <div className="mr-2">
                                        <input type="text" class="form-control" placeholder="" />
                                    </div>
                                    <div className="mr-2">       
                                        <input type="text" class="form-control" placeholder="" style={{width:"80px"}}/>
                                    </div>
                                </div>
                                

                                <div className="d-flex mb-2 align-items-center">                                
                                    <div className="mr-2">
                                        <input type="date" class="form-control" placeholder="" />
                                    </div>
                                    <div className="mr-2">
                                        -
                                    </div>
                                    <div className="mr-2">       
                                        <input type="date" class="form-control" placeholder=""/>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <i className="fa fa-trash"></i>
                            </div>
                        </div>
                        <div className="border-bottom pt-1 mb-1"></div>
                        <a href="#"><i className="fa fa-plus-circle"></i> Add Education</a>
                        
                        <div className="d-flex mb-2 mt-3">
                            <div className="mr-2">
                                <div>Secondary Language "Custom Field"</div>
                                <input type="text" className="form-control" placeholder=""/>
                            </div>
                        </div>
                        
                        <div className="border-bottom pt-3 mb-3"></div>
                        
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex mb-2">
                                <div className="mr-2 text-dark font-weight-bold">
                                    Driver License
                                </div>
                            </div>
                            <div><a href="#"><i className="fa fa-plus-circle"></i> Add Driver License</a></div>
                        </div>

                        <table className="table">
                            <thead>
                                <tr>
                                    <th className="bg-light">License #</th>
                                    <th className="bg-light">State</th>
                                    <th className="bg-light">Expiration</th>
                                    <th className="bg-light">Classification</th>
                                    <th className="bg-light">DMV Violations</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td colspan="5">No driver license entries have been added</td>
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

export default General
