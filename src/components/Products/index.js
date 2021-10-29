import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { Col, Nav, Row, Tab, Tabs } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';

const StyledContainer = styled.div`
    .tab_pan{
        .active{
            border-bottom: 2px solid #218838;
            border-radius: 2px;
        }
        .tab_pan_item{
            cursor: pointer;
        }
    }
    .dropdown-item{
        cursor: pointer;
    }
    .product_table{
        td, th{
            border-bottom: 1px solid lightgrey;
            border-color: lightgrey!important;
        }
        th{
            font-weight: bold;
        }
    }
`;

const Kunder = () => {
    return (
        <StyledContainer>
            <div className="container-fluid">      
                <div className="d-flex justify-content-between align-items-center">
                    <div className="">
                        <h5>Products</h5>
                    </div>
                    <div className="d-flex align-items-center">
                        <div className="">
                            <div className="btn">Import</div>
                        </div>
                        <div className="ml-2">
                            <div className="btn">Export</div>
                        </div>
                        <div className="dropdown ml-2">
                            <button className="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown">More Actions<span className="caret"></span></button>
                            <ul className="dropdown-menu">
                            <li><a href="#">Action1</a></li>
                            <li><a href="#">Action2</a></li>
                            <li><a href="#">Action3</a></li>
                            </ul>
                        </div>
                        <div className="ml-4">
                            <div className="btn btn-success">Add Product</div>
                        </div>
                    </div>
                </div>
                <div className="bg-white text-dark">
                    <div className="d-flex border-bottom pt-3 pr-3 pl-3 tab_pan">
                        <div className="tab_pan_item pb-1 pl-2 pr-2 active">All</div>
                        <div className="tab_pan_item ml-3 pb-1 pl-2 pr-2">Active</div>
                        <div className="tab_pan_item ml-3 pb-1 pl-2 pr-2">Draft</div>
                        <div className="tab_pan_item ml-3 pb-1 pl-2 pr-2">Archived</div>
                    </div>
                    <div className="d-flex justify-content-between p-2">
                        <div className="">
                            <input type="text" className="form-control" style={{width:"300px"}} placeholder="Filter products"/>
                        </div>
                        <div className="d-flex">
                            <Dropdown>
                                <Dropdown.Toggle variant="success" className="btn btn-default">Product Vendor</Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <span className="dropdown-item">Product Vendor1</span>
                                    <span className="dropdown-item">Product Vendor2</span>
                                    <span className="dropdown-item">Product Vendor3</span>
                                    <span className="dropdown-item">Product Vendor4</span>
                                    <span className="dropdown-item">Product Vendor5</span>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Dropdown>
                                <Dropdown.Toggle variant="success" className="btn btn-default">Tagged with</Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <span className="dropdown-item">Tagged with1</span>
                                    <span className="dropdown-item">Tagged with2</span>
                                    <span className="dropdown-item">Tagged with3</span>
                                    <span className="dropdown-item">Tagged with4</span>
                                    <span className="dropdown-item">Tagged with5</span>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Dropdown>
                                <Dropdown.Toggle variant="success" className="btn btn-default">Status</Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <span className="dropdown-item">Status1</span>
                                    <span className="dropdown-item">Status2</span>
                                    <span className="dropdown-item">Status3</span>
                                    <span className="dropdown-item">Status4</span>
                                    <span className="dropdown-item">Status5</span>
                                </Dropdown.Menu>
                            </Dropdown>
                            <div className="btn btn-default">More Filters</div>
                            <div className="btn btn-default"><i className="fa fa-star"> </i> Saved</div>
                            <div className="btn btn-default"><i className="fa fa-sort"> </i> Sort</div>
                        </div>
                    </div>
                    <div className="">
                        <table className="table product_table">
                            <thead>
                            <tr>
                                <th><input type="checkbox" className="form-control" style={{width:"20px"}}/></th>
                                <th>Product</th>
                                <th>Status</th>
                                <th>Inventory</th>
                                <th>Type</th>
                                <th>Vendor</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td><input type="checkbox" className="form-control" style={{width:"20px"}}/></td>
                                <td>Product1</td>
                                <td>Status1</td>
                                <td>Inventory1</td>
                                <td>Type1</td>
                                <td>Vendor1</td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" className="form-control" style={{width:"20px"}}/></td>
                                <td>Product1</td>
                                <td>Status1</td>
                                <td>Inventory1</td>
                                <td>Type1</td>
                                <td>Vendor1</td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" className="form-control" style={{width:"20px"}}/></td>
                                <td>Product1</td>
                                <td>Status1</td>
                                <td>Inventory1</td>
                                <td>Type1</td>
                                <td>Vendor1</td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" className="form-control" style={{width:"20px"}}/></td>
                                <td>Product1</td>
                                <td>Status1</td>
                                <td>Inventory1</td>
                                <td>Type1</td>
                                <td>Vendor1</td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" className="form-control" style={{width:"20px"}}/></td>
                                <td>Product1</td>
                                <td>Status1</td>
                                <td>Inventory1</td>
                                <td>Type1</td>
                                <td>Vendor1</td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" className="form-control" style={{width:"20px"}}/></td>
                                <td>Product1</td>
                                <td>Status1</td>
                                <td>Inventory1</td>
                                <td>Type1</td>
                                <td>Vendor1</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </StyledContainer>

    );

}
export default Kunder
