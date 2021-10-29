import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { Col, Nav, Row, Tab, Tabs } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';
import EmployeeDetailLeft from './EmployeeDetailLeft';
import EmployeeDetailRight from './EmployeeDetailRight';
import ClothesAndToolsLeft from './ClothesAndToolsLeft';
import ProductCard from './ProductCard';

const StyledContainer = styled.div`
    background-color: white;
    border: 1px solid lightgrey;
    .small_text{
        font-size: .7rem;
        color: lightgrey;
    }
    td, th{
        vertical-align: top!important;
        border-bottom: 1px solid lightgrey;
        border-color: lightgrey!important;
    }
    .dropdown{
        .btn{
            font-size: 0.7rem!important;
        }
        .dropdown-item{
            font-size: 0.7rem!important;
        }
    }
    .filter_btn{
        font-size: 0.7rem!important;
    }
    .flex-wrap {
        flex-wrap: wrap!important;
    }
`;
class ClothesAndTools extends React.Component {
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
                    <div className="col-md-2 bg-light p-0" style={{color:"grey"}}>
                        <ClothesAndToolsLeft />
                    </div>
                    <div className="col-md-8" style={{fontSize:"0.8rem", color:"grey"}}>
                        <div className="d-flex justify-content-between mb-2 pb-1 border-bottom">
                            <div className="text-success"><h5><i className="fa fa-archive"></i> Clothes and Tools</h5></div>
                        </div>
                        <div className="p-2">
                            <div className="pt-1 pb-2 mb-2 d-flex justify-content-between align-items-center border-bottom">
                                <div><input type="text" className="form-control" placeholder="Search..." /></div>
                                <div><div className="btn btn-success"><i className="fa fa-plus"></i> Add New</div></div>
                            </div>
                            <div className="pb-2 mb-2 d-flex justify-content-between align-items-center border-bottom">
                                <div className="d-flex">
                                    <Dropdown>
                                        <Dropdown.Toggle variant="success" className="btn btn-default">SORT BY</Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <span className="dropdown-item">SORT BY1</span>
                                            <span className="dropdown-item">SORT BY2</span>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    <Dropdown>
                                        <Dropdown.Toggle variant="success" className="btn btn-default">TRADEMARK</Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <span className="dropdown-item">TRADEMARK1</span>
                                            <span className="dropdown-item">TRADEMARK2</span>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    <Dropdown>
                                        <Dropdown.Toggle variant="success" className="btn btn-default">PRODUCT TYPE</Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <span className="dropdown-item">PRODUCT TYPE1</span>
                                            <span className="dropdown-item">PRODUCT TYPE2</span>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    <Dropdown>
                                        <Dropdown.Toggle variant="success" className="btn btn-default">PRICE</Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <span className="dropdown-item">PRICE1</span>
                                            <span className="dropdown-item">PRICE2</span>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    <Dropdown>
                                        <Dropdown.Toggle variant="success" className="btn btn-default">PRODUCT STATUS</Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <span className="dropdown-item">PRODUCT STATUS1</span>
                                            <span className="dropdown-item">PRODUCT STATUS2</span>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    <div className="btn btn-default filter_btn"><i className="fa fa-sliders"></i> SHOW ALL 6 FILTERS</div>
                                </div>
                                <div className="small_text">349 products</div>
                            </div>
                            <div className="d-flex justify-content-center">
                                <div className="d-flex" style={{flexWrap:"wrap"}}>
                                    <ProductCard />
                                    <ProductCard />
                                    <ProductCard />
                                    <ProductCard />
                                    <ProductCard />
                                    <ProductCard />
                                    <ProductCard />
                                    <ProductCard />
                                    <ProductCard />
                                    <ProductCard />
                                    <ProductCard />
                                    <ProductCard />
                                    <ProductCard />
                                </div>
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

export default ClothesAndTools
