import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { Col, Nav, Row, Tab, Tabs } from 'react-bootstrap';
import { Accordion, Button } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';

const StyledContainer = styled.div`
    .small_text{
        font-size: .8rem;
        i{
            width: 20px;
        }
    }
    .accordion_list{
        border: none;
        outline: none;
        box-shadow: none;
        width: 100%;
        text-align:left;
        background:none;
        cursor:pointer;
    }
    .accordion_list:focus{
        border: none;
        outline: none;
        box-shadow: none;
        width: 100%;
    }
`;
class ClothesAndToolsLeft extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
          viewMode: 0,  // 0 : List, 1 : Directory, 2 : Org Chart
          accordion_list: [],
          childData: [
            {
                title: "Jackor",
                count: "1590"
            },
            {
                title: "Hoodlies",
                count: "15"
            },
            {
                title: "Trojor",
                count: "3421"
            },
            {
                title: "Skjortor",
                count: "1140"
            },
            {
                title: "Pike",
                count: "114"
            },
            {
                title: "Tshirts",
                count: "167"
            },
            {
                title: "Vastar",
                count: "1117"
            }
          ],
          dataList:[
            {
                title : "Huvud & Nacke",
                count : "100",
                active : false,
                child : {}
            },
            {
                title : "Skyddsutrustning",
                count : "100",
                active : false,
                child : {}
            },
            {
                title : "Overkropp",
                count : "100",
                active : false,
                child : {}
            },
            {
                title : "Underkropp",
                count : "100",
                active : false,
                child : {}
            },
            {
                title : "Underklader & Strumpor",
                count : "100",
                active : false,
                child : {}
            },
            {
                title : "Overaller",
                count : "100",
                active : false,
                child : {}
            },
            {
                title : "Understall",
                count : "100",
                active : false,
                child : {}
            },
            {
                title : "Regnklader",
                count : "100",
                active : false,
                child : {}
            },
            {
                title : "Balten & Hangslen",
                count : "100",
                active : false,
                child : {}
            },
            {
                title : "Skor",
                count : "100",
                active : false,
                child : {}
            },
            {
                title : "Tillbehor",
                count : "100",
                active : false,
                child : {}
            },
            {
                title : "Ovrigt",
                count : "100",
                active : false,
                child : {}
            }
          ]
      };
    }
    componentDidMount(){
    }
  
    componentDidUpdate(prevProps){
    }
  
    render() {
        return (
            <StyledContainer className="m-2">
                {
                    this.state.dataList.map((item, index) => {
                        return <Accordion className="accordion border-bottom pt-2 pb-2">
                            <Accordion.Toggle eventKey={index} className="accordion_list" onClick={() => { 
                                this.state.accordion_list[index] = !this.state.accordion_list[index];
                                this.setState({...this.state})}
                            }>
                                <div className="d-flex justify-content-between">
                                    <div>{item.title}</div>
                                    <div>{this.state.accordion_list[index] ? <i className="fa fa-angle-down"></i> : <i className="fa fa-angle-up"></i>}</div>
                                </div>
                                
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey={index} className="collapse">
                                <div className="ml-3">
                                    {this.state.childData.map((item) => {
                                        return <div className="d-flex justify-content-between list_item mt-2 mb-2">
                                            <div className="">{item.title}</div>
                                            <div className="">{item.count}</div>
                                        </div>
                                    })}
                                </div>
                            </Accordion.Collapse>
                        </Accordion>
                    })
                }
                <Accordion className="accordion border-bottom pt-2 pb-2">
                    <Accordion.Toggle eventKey="xx" className="accordion_list" onClick={() => { 
                        this.state.accordion_list["xx"] = !this.state.accordion_list["xx"];
                        this.setState({...this.state})}
                    }>
                        <div className="d-flex justify-content-between">
                            <div>Maskiner & verktyg</div>
                            <div>{this.state.accordion_list["xx"] ? <i className="fa fa-angle-down"></i> : <i className="fa fa-angle-up"></i>}</div>
                        </div>
                        
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="xx" className="collapse">
                        <div className="ml-3">
                            <div className="d-flex justify-content-between list_item mt-2 mb-2">
                                <div className="">Title1</div>
                                <div className="">100</div>
                            </div>
                            <div className="d-flex justify-content-between list_item mt-2 mb-2">
                                <div className="">Title1</div>
                                <div className="">100</div>
                            </div>
                            <div className="d-flex justify-content-between list_item mt-2 mb-2">
                                <div className="">Title1</div>
                                <div className="">100</div>
                            </div>
                            <div className="d-flex justify-content-between list_item mt-2 mb-2">
                                <div className="font-weight-bold">Title1</div>
                                <div className="">100</div>
                            </div>
                            <div className="d-flex justify-content-between list_item ml-2 mt-2 mb-2">
                                <div className="">Title2</div>
                                <div className="">100</div>
                            </div>
                            <div className="d-flex justify-content-between list_item ml-2 mt-2 mb-2">
                                <div className="">Title2</div>
                                <div className="">100</div>
                            </div>
                            <div className="d-flex justify-content-between list_item ml-2 mt-2 mb-2">
                                <div className="">Title2</div>
                                <div className="">100</div>
                            </div>
                            <div className="d-flex justify-content-between list_item ml-2 mt-2 mb-2">
                                <div className="font-weight-bold">Title2</div>
                                <div className="">100</div>
                            </div>                            
                            <div className="d-flex justify-content-between list_item ml-4 mt-2 mb-2">
                                <div className="">Title3</div>
                                <div className="">100</div>
                            </div>
                            <div className="d-flex justify-content-between list_item ml-4 mt-2 mb-2">
                                <div className="">Title3</div>
                                <div className="">100</div>
                            </div>
                            <div className="d-flex justify-content-between list_item ml-4 mt-2 mb-2">
                                <div className="">Title3</div>
                                <div className="">100</div>
                            </div>
                            <div className="d-flex justify-content-between list_item ml-4 mt-2 mb-2">
                                <div className="">Title3</div>
                                <div className="">100</div>
                            </div>
                            <div className="d-flex justify-content-between list_item ml-4 mt-2 mb-2">
                                <div className="">Title3</div>
                                <div className="">100</div>
                            </div>
                            <div className="d-flex justify-content-between list_item ml-2 mt-2 mb-2">
                                <div className="">Title2</div>
                                <div className="">100</div>
                            </div>  
                            <div className="d-flex justify-content-between list_item mt-2 mb-2">
                                <div className="">Title1</div>
                                <div className="">100</div>
                            </div>
                            <div className="d-flex justify-content-between list_item mt-2 mb-2">
                                <div className="">Title1</div>
                                <div className="">100</div>
                            </div>
                            <div className="d-flex justify-content-between list_item mt-2 mb-2">
                                <div className="">Title1</div>
                                <div className="">100</div>
                            </div>
                            <div className="d-flex justify-content-between list_item mt-2 mb-2">
                                <div className="">Title1</div>
                                <div className="">100</div>
                            </div>
                        </div>
                    </Accordion.Collapse>
                </Accordion>
            </StyledContainer>

        );
    }
};

export default ClothesAndToolsLeft
