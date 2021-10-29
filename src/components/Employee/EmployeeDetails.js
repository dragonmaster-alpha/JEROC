import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { Col, Nav, Row, Tab, Tabs } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';
import EmployeePeopleView from './Component/EmployeePeopleView';
import EmployeeDirectoryView from './Component/EmployeeDirectoryView';
import EmployeeOrgChartView from './Component/EmployeeOrgChartView';
import General from './EmployeeDetails/General';
import Job from './EmployeeDetails/Job';
import Emergency from './EmployeeDetails/Emergency';
import TimeOff from './EmployeeDetails/TimeOff';
import Notes from './EmployeeDetails/Notes';
import Onboarding from './EmployeeDetails/Onboarding';
import Offboarding from './EmployeeDetails/Offboarding';
import Documents from './EmployeeDetails/Documents';
import Training from './EmployeeDetails/Training';
import ClothesAndTools from './EmployeeDetails/ClothesAndTools';

const StyledContainer = styled.div`
    .custom_tab.active {
        background-color: #ffffff!important;
        color: #4073ad!important;
        font-weight: bold;
        border: none;
        border-left: 1px solid lightgrey;
        border-right: 1px solid lightgrey;
        border-radius: 0;
        border-color: lightgrey!important;
        border-top: 2px solid #4073ad!important;
        border-bottom: none!important;
    }
    .custom_tab {
        
    }
    .nav-tabs .nav-link {
        color: #4073ad!important;
        font-weight: bold;
        border: none;
        border-right: 1px solid lightgrey;
        border-radius: 0;
        background-color: white;
        padding: .3rem 1rem;
    }

    .nav.nav-tabs {
        background-color: white;
        border-top: 1px solid lightgrey;
        border-right: 1px solid lightgrey;
        border-left: 1px solid lightgrey;
        margin-top: -55px;
        margin-left: 100px;
    }
    
    .tab-content {
        margin-top: 0px;
        margin-bottom: 30px;
    }

    .top_bar{
        border: 1px solid lightgrey;
        margin-bottom: 20px;    
        background-color: #0f6fc6;
        .top_bar1{        
        display: flex;
        justify-content: space-between;
        align-items: center;
        .img-thumbnail{
            background-color: none;
            border: none;
            width: 80px;
        }
        .top_text{
            color: white;
            font-size: 0.9rem;
            font-weight:bold;
            margin-top: -20px;
            margin-left: 10px;
        }
        .btn{
            margin-top: -40px;
            margin-right: 20px;
            color: white;
            font-weight: bold;
            border:2px solid white;
            background-color: #0f6fc6;
        }
        }
        .top_bar2{    
        height: 50px;
        margin-top: -50px;
        background-color: white;
        }
    }
`;
class EmployeeDetails extends React.Component {
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
                <div className="top_bar">
                    <div className="top_bar1">
                        <div className="d-flex align-items-center p-3">
                        <img class="img-thumbnail rounded-circle" src="../assets/images/sm/avatar1.jpg" alt="avatar" />
                        <div className="top_text">28945 - Niklas Juhlin Rosen</div>
                        </div>
                        <div className="btn btn-primary">Andra&nbsp;&nbsp;<i className="fa fa-edit"></i></div>
                    </div>
                    <div className="top_bar2">
                    </div>
                </div>
                <Tabs defaultActiveKey="general" id="uncontrolled-tab-example">

                    <Tab eventKey="general" title="General" tabClassName="custom_tab">
                        <General />
                    </Tab>

                    <Tab eventKey="clothesandtools" title="Clothes And Tools" tabClassName="custom_tab">
                        <ClothesAndTools />
                    </Tab>
                    
                    <Tab eventKey="job" title="Job" tabClassName="custom_tab">
                        <Job />
                    </Tab>
                    
                    <Tab eventKey="emergency" title="Emergency" tabClassName="custom_tab">
                        <Emergency />
                    </Tab>
                    
                    <Tab eventKey="timeoff" title="Time Off" tabClassName="custom_tab">
                        <TimeOff />
                    </Tab>
                    
                    <Tab eventKey="notes" title="Notes" tabClassName="custom_tab">
                        <Notes />
                    </Tab>
                    
                    <Tab eventKey="onboarding" title="Onboarding" tabClassName="custom_tab">
                        <Onboarding />
                    </Tab>
                    
                    <Tab eventKey="offboarding" title="Offboarding" tabClassName="custom_tab">
                        <Offboarding />
                    </Tab>

                    <Tab eventKey="documents" title="Documents" tabClassName="custom_tab">
                        <Documents />
                    </Tab>

                    <Tab eventKey="training" title="Training" tabClassName="custom_tab">
                        <Training />
                    </Tab>
                </Tabs>
            </StyledContainer>

        );
    }
};

export default EmployeeDetails
