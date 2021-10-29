import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { Col, Nav, Row, Tab, Tabs } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';

const StyledContainer = styled.div`
    .small_text{
        font-size: .8rem;
        i{
            width: 20px;
        }
    }
`;
class EmployeeDetailLeft extends React.Component {
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
            <StyledContainer className="m-2">
                <div className="small_text"><i className="fa fa-building"></i> 07911 654321</div>
                <div className="mt-1 border-bottom pb-2" style={{fontSize: "1rem"}}>
                    <i className="fa fa-envelope mr-2"></i>
                    <i className="fa fa-linkedin-square mr-2"></i>
                    <i className="fa fa-twitter-square mr-2"></i>
                    <i className="fa fa-facebook-square mr-2"></i>
                </div>

                <div className="text-success mt-2">Hire Date</div>
                <div className="small_text mt-1">Sep 2, 2017</div>
                <div className="small_text mt-1 pb-2 border-bottom">3y - 6m - 20d</div>

                <div className="small_text mt-2"><i className="fa fa-reorder"></i> 5</div>
                <div className="small_text mt-1"><i className="fa fa-clock-o"></i> Full-Time</div>
                <div className="small_text mt-1"><i className="fa fa-users"></i> Operations</div>
                <div className="small_text mt-1"><i className="fa fa-sitemap"></i> Europe</div>
                <div className="small_text mt-1 pb-2 border-bottom"><i className="fa fa-map-marker"></i> London, UK</div>

                <div className="text-success mt-2">Manager</div>
                <div className="d-flex align-items-center mt-1 pb-2 border-bottom">
                    <img class="rounded-circle" src="../assets/images/xs/avatar4.jpg" alt="avatar"/>
                    <div className="ml-2">
                        <div className="">Jennifer Caldwell</div>
                        <div className="small_text mt-1">VP of People</div>
                    </div>
                </div>
                
                <div className="text-success mt-2">Direct Reports</div>
                <div className="small_text mt-2"><i className="fa fa-user"></i> Eric Pasture</div>
                <div className="small_text mt-2"><i className="fa fa-user"></i> Jake Ryan</div>
                <div className="small_text mt-2"><i className="fa fa-users"></i> 4 More...</div>
            </StyledContainer>

        );
    }
};

export default EmployeeDetailLeft
