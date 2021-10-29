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
class Notes extends React.Component {
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
                            <div className="text-success"><h5><i className="fa fa-book"></i> Notes</h5></div>
                        </div>
                        
                        <div className="bg-light border mb-3">
                            <div className=""><input type="text" className="form-control" placeholder="Add a note..."></input></div>
                        </div>

                        <div className="pt-1 pb-1 d-flex align-items-center">
                            <img class="rounded-circle" src="../assets/images/xs/avatar4.jpg" alt="avatar" width="70"/>
                            <div className="ml-2 border-bottom pb-3 mb-2">
                                <div className="font-weight-bold">Ryota Saito</div>
                                <div className="small_text mb-2">Nov 16, 2020 at 7:00 AM</div>
                                <div>Charlotte has been performing extremely well lately. We had a nice chat about how to implement her ideas in all of our office locations.</div>
                            </div>
                        </div>
                        <div className="pt-1 pb-1 d-flex align-items-center">
                            <img class="rounded-circle" src="../assets/images/xs/avatar4.jpg" alt="avatar" width="70"/>
                            <div className="ml-2 border-bottom pb-3 mb-2">
                                <div className="font-weight-bold">Ryota Saito</div>
                                <div className="small_text mb-2">Nov 16, 2020 at 7:00 AM</div>
                                <div>Charlotte has been performing extremely well lately. We had a nice chat about how to implement her ideas in all of our office locations.</div>
                            </div>
                        </div>
                        <div className="pt-1 pb-1 d-flex align-items-center">
                            <img class="rounded-circle" src="../assets/images/xs/avatar4.jpg" alt="avatar" width="70"/>
                            <div className="ml-2 border-bottom pb-3 mb-2">
                                <div className="font-weight-bold">Ryota Saito</div>
                                <div className="small_text mb-2">Nov 16, 2020 at 7:00 AM</div>
                                <div>Charlotte has been performing extremely well lately. We had a nice chat about how to implement her ideas in all of our office locations.</div>
                            </div>
                        </div>
                        <div className="pt-1 pb-1 d-flex align-items-center">
                            <img class="rounded-circle" src="../assets/images/xs/avatar4.jpg" alt="avatar" width="70"/>
                            <div className="ml-2 border-bottom pb-3 mb-2">
                                <div className="font-weight-bold">Ryota Saito</div>
                                <div className="small_text mb-2">Nov 16, 2020 at 7:00 AM</div>
                                <div>Charlotte has been performing extremely well lately. We had a nice chat about how to implement her ideas in all of our office locations.</div>
                            </div>
                        </div>
                        <div className="pt-1 pb-1 d-flex align-items-center">
                            <img class="rounded-circle" src="../assets/images/xs/avatar4.jpg" alt="avatar" width="70"/>
                            <div className="ml-2 border-bottom pb-3 mb-2">
                                <div className="font-weight-bold">Ryota Saito</div>
                                <div className="small_text mb-2">Nov 16, 2020 at 7:00 AM</div>
                                <div>Charlotte has been performing extremely well lately. We had a nice chat about how to implement her ideas in all of our office locations.</div>
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

export default Notes
