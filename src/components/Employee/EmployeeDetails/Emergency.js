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
class Emergency extends React.Component {
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
                            <div className="text-success"><h5><i className="fa fa-ambulance"></i> Emergency</h5></div>
                        </div>
                        
                        <div className="d-flex mb-2">
                            <div className="mr-2">
                                <div>Name</div>
                                <input type="text" className="form-control" placeholder=""/>
                            </div>
                            <div className="mr-2">
                                <div>Relationship</div>
                                <input type="text" className="form-control" placeholder=""/>
                            </div>
                        </div>

                        <div className="d-flex mb-2">
                            <div className="mr-2 text-dark font-weight-bold">
                                Phone
                            </div>
                        </div>
                        <div className="d-flex mb-2">
                            <div className="mr-2">
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i className="fa fa-building"></i></span>
                                    </div>
                                    <input type="text" class="form-control" placeholder="Work Phone" />
                                </div>
                            </div>
                            <div className="mr-2">                              
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
                            <div className="mr-2 text-dark font-weight-bold">
                                Email
                            </div>
                        </div>
                        <div className="d-flex mb-2">
                            <div className="mr-2">
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i className="fa fa-building"></i></span>
                                    </div>
                                    <input type="text" class="form-control" placeholder="" />
                                </div>
                            </div>
                        </div>

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

                        <div className="border-bottom pt-1 mb-1"></div>
                        <a href="#"><i className="fa fa-plus-circle"></i> Add Contact</a>
                    </div>
                    <div className="col-md-2 p-0">
                        <EmployeeDetailRight />
                    </div>
                </div>
            </StyledContainer>

        );
    }
};

export default Emergency
