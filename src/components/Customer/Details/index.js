import React from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { Col, Nav, Row, Tab, Tabs } from 'react-bootstrap';
import CustomerDetailsMain from './Component/main/index';
import CustomerDetailsBilling from './Component/billing/index';
import CustomerDetailsFiles from './Component/files/index';
import CustomerDetailsProposals from './Component/proposals/index';
import CustomerDetailsProjects from './Component/project/index';
import CustomerDetailsWorkOrder from './Component/workOrder/index';
import CustomerDetailsObject from './Component/object/index';
import CustomerDetailsEconomy from './Component/economy/index';

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
  .nav-tabs .nav-link {
    color: #4073ad!important;
    font-weight: bold;
    border: none;
    border-left: 1px solid lightgrey;
    border-right: 1px solid lightgrey;
    border-top: 1px solid lightgrey;
    border-radius: 0;
    background-color: white;
    border-bottom: 2px solid lightgrey;
    padding: 1rem 1rem;
  }

  .nav.nav-tabs {
    background-color: white;
    border-top: 1px solid lightgrey;
    border-right: 1px solid lightgrey;
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

class CustomerDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
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
        <div className="container-fluid">
          <Tabs defaultActiveKey="main" id="uncontrolled-tab-example">

            <Tab eventKey="main" title="ALLMANT" tabClassName="custom_tab">
              <CustomerDetailsMain />
            </Tab>

            <Tab eventKey="billing" title="FAKTURAUPGIFFTER" tabClassName="custom_tab">
              <CustomerDetailsBilling />
            </Tab>
            
            <Tab eventKey="files" title="FILER" tabClassName="custom_tab">
              <CustomerDetailsFiles />
            </Tab>
            
            <Tab eventKey="proposals" title="OFFERTER" tabClassName="custom_tab">
              <CustomerDetailsProposals />
            </Tab>
            
            <Tab eventKey="projects" title="PROJEKT" tabClassName="custom_tab">
              <CustomerDetailsProjects />
            </Tab>
            
            <Tab eventKey="workOrder" title="ARBETSORDAR" tabClassName="custom_tab">
              <CustomerDetailsWorkOrder />
            </Tab>
            
            <Tab eventKey="object" title="OBJEKT" tabClassName="custom_tab">
              <CustomerDetailsObject />
            </Tab>

            <Tab eventKey="economy" title="EKONOMI" tabClassName="custom_tab">
              <CustomerDetailsEconomy />
            </Tab>

          </Tabs>
        </div>
      </StyledContainer>
    );
  }
};

export default CustomerDetails;