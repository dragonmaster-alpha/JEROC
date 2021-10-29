import React, { useState } from 'react';
import styled from "styled-components";
import WorkOrderSummary from './Components/WorkOrderSummary';
import WorkOrderList from './Components/WorkOrderList';
import WorkOrderEditor from './Components/WorkOrderEditor/index';
import { Tab, Tabs } from 'react-bootstrap';

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
`;

const WorkOrder = () => {
    const [viewStatus, setViewStatus] = useState(0);
    return (
        <StyledContainer>  
          <div className="container-fluid">
            <Tabs defaultActiveKey="main" id="uncontrolled-tab-example">
              <Tab eventKey="main" title="WorkOrder" tabClassName="custom_tab">
              </Tab>
            </Tabs>
          </div>
          {viewStatus === 0 && (
            <>
              <WorkOrderList setViewStatus={setViewStatus} />
              <WorkOrderSummary />
            </>
          )}
          {viewStatus === 1 && (
            <WorkOrderEditor />
          )}
        </StyledContainer>
    );

}
export default WorkOrder
