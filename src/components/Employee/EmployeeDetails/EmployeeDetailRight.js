import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { Col, Nav, Row, Tab, Tabs } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';

const StyledContainer = styled.div`
    .latest_activity{
        border: 1px solid lightgrey;
        background-color: white;
        height: 500px;
        overflow: auto;
        .latest_activity_title{
            color: #2c6cb3;
            font-weight: bold;
            font-size: 1rem;
            margin-bottom: 10px;
            padding-top: 20px;
            margin-left: 20px;
        }
        .latest_activity_item{
            padding: 10px;
            margin-top: 10px;
            border-bottom: 1px solid lightgrey;
            .latest_activity_subtitle{
                color: black;
                text-indent: -1.5ch;
                margin-left: 20px;
                span{
                    color: #2c6cf3;
                }
            }
            .latest_activity_time{
                color: lightgrey;
                font-size: 0.7rem;
                margin-left: 20px;
                margin-top: 5px;
            }
        }
    }
`;
class EmployeeDetailRight extends React.Component {
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
                <div className="latest_activity">
                    <div className="latest_activity_title">Latest Activity</div>
                    <div className="latest_activity_item">
                        <div className="latest_activity_subtitle"><span>&#x25cf;</span> Nicklas marked the proposal contractor as lost</div>
                        <div className="latest_activity_time">2 seconds ago</div>
                    </div>
                    <div className="latest_activity_item">
                        <div className="latest_activity_subtitle"><span>&#x25cf;</span> Nicklas marked the proposal contractor as lost</div>
                        <div className="latest_activity_time">2 seconds ago</div>
                    </div>
                    <div className="latest_activity_item">
                        <div className="latest_activity_subtitle"><span>&#x25cf;</span> Nicklas marked the proposal contractor as lost</div>
                        <div className="latest_activity_time">2 seconds ago</div>
                    </div>
                    <div className="latest_activity_item">
                        <div className="latest_activity_subtitle"><span>&#x25cf;</span> Nicklas marked the proposal contractor as lost</div>
                        <div className="latest_activity_time">2 seconds ago</div>
                    </div>
                    <div className="latest_activity_item">
                        <div className="latest_activity_subtitle"><span>&#x25cf;</span> Nicklas marked the proposal contractor as lost</div>
                        <div className="latest_activity_time">2 seconds ago</div>
                    </div>
                    <div className="latest_activity_item">
                        <div className="latest_activity_subtitle"><span>&#x25cf;</span> Nicklas marked the proposal contractor as lost</div>
                        <div className="latest_activity_time">2 seconds ago</div>
                    </div>
                    <div className="latest_activity_item">
                        <div className="latest_activity_subtitle"><span>&#x25cf;</span> Nicklas marked the proposal contractor as lost</div>
                        <div className="latest_activity_time">2 seconds ago</div>
                    </div>
                    <div className="latest_activity_item">
                        <div className="latest_activity_subtitle"><span>&#x25cf;</span> Nicklas marked the proposal contractor as lost</div>
                        <div className="latest_activity_time">2 seconds ago</div>
                    </div>
                    <div className="latest_activity_item">
                        <div className="latest_activity_subtitle"><span>&#x25cf;</span> Nicklas marked the proposal contractor as lost</div>
                        <div className="latest_activity_time">2 seconds ago</div>
                    </div>
                    <div className="latest_activity_item">
                        <div className="latest_activity_subtitle"><span>&#x25cf;</span> Nicklas marked the proposal contractor as lost</div>
                        <div className="latest_activity_time">2 seconds ago</div>
                    </div>
                    <div className="latest_activity_item">
                        <div className="latest_activity_subtitle"><span>&#x25cf;</span> Nicklas marked the proposal contractor as lost</div>
                        <div className="latest_activity_time">2 seconds ago</div>
                    </div>
                    <div className="latest_activity_item">
                        <div className="latest_activity_subtitle"><span>&#x25cf;</span> Nicklas marked the proposal contractor as lost</div>
                        <div className="latest_activity_time">2 seconds ago</div>
                    </div>
                    <div className="latest_activity_item">
                        <div className="latest_activity_subtitle"><span>&#x25cf;</span> Nicklas marked the proposal contractor as lost</div>
                        <div className="latest_activity_time">2 seconds ago</div>
                    </div>
                    <div className="latest_activity_item">
                        <div className="latest_activity_subtitle"><span>&#x25cf;</span> Nicklas marked the proposal contractor as lost</div>
                        <div className="latest_activity_time">2 seconds ago</div>
                    </div>
                </div>
            </StyledContainer>

        );
    }
};

export default EmployeeDetailRight
