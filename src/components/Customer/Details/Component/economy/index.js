import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import EconomyChart from './economy_chart';
import { Dropdown } from 'react-bootstrap';

const StyledContainer = styled.div`
    margin-top: 20px;
    .latest_activity{
      .latest_activity_title{
        background-color: #2c6cb3;
        color: white;
        font-weight: bold;
        font-size: 0.8rem;
        padding: 10px;
        .lastest_activity_showall{
          cursor: pointer;
        }
      }
      .latest_activity_content{
        border: 1px solid lightgrey;
        background-color: white;
        height: 223px;
        overflow: auto;
        .latest_activity_item{
            padding: 10px;
            border-bottom: 1px solid lightgrey;
            .latest_activity_subtitle{
                color: black;
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
    }
    .filter_div{
        display: flex;
        background-color: #0f86d7;
        justify-content: space-between;
        align-items: center;
        color: white;
        font-weight: bold;
        padding: 10px;
        font-size: 0.7rem;
        margin-top: 15px;

        .filter_left{

            display: flex;
            align-items: center;

            .filter_search{
                border: none;
                border-radius: 0px 5px 5px 0px;
                input{                    
                    background-color: white;
                    border: none;        

                }
                .input-group-append{
                    background-color: white;
                    border: none;
                    border-radius: 0px 5px 5px 0px;
                }
                .input-group-text{
                    border: none;
                }
                .datetime{
                  width: 100px;
                }
            }
            .filter_text{
                padding: 8px;
                margin-left: 25px;
                padding-left: 15px;
                border-left: 2px solid;
            }
            .filter_select{
                background-color: white;
                margin-top: 2px;
            }
            .filter_status{
                
            }
            .filter_category{
                
            }
        }
        .filter_right{
            display: flex;
            align-items: center;
            .btn{
              color: #0f86d7;              
              padding: 6px 15px;
              margin-left: 10px;
            }
            .add_new_customer{
                .btn{
                    color: #0f86d7;
                    font-weight: bold;
                }
            }
        }
    }
    .main_panel{
        margin-top: 30px;
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
        .main_table{
            table{
                border-radius: 10px;
            }
            th{
                background-color: #0f86d7;                
                border: 1px solid lightgrey;
                color: white;
                font-weight: bold;
                text-align: center;
                input[type=checkbox]{
                    width: 15px;
                }
            }            
            td{
                border: 1px solid lightgrey;
                text-align: center;
                color: black;
                font-weight: bold;
                i{
                    color: #0f86d7;
                    margin-right:5px;
                }
                input[type=checkbox]{
                    width: 15px;
                }
                span{
                  color: white;
                  font-weight: bold;
                }
                .action_field{

                  .dropdown-item{
                    font-size: 0.8rem;
                  }
                }
            }
            .custom_category{
                td{
                    background-color: #f1f4f6;
                }
            }
            .main_table_filter{
                font-weight: bold;
                font-size: 0.8rem;
                display: flex;
                justify-content: space-between;
                align-items: center;
                border: 1px solid lightgrey;
                padding: 10px;
                background-color: white;
                margin-top: -17px;
                .main_table_filter_left{
                    display: flex;
                    align-items: center;
                    div{                        
                        color: #0f86d7;
                    }
                    select{
                        margin-left: 10px;
                    }
                }
                .main_table_filter_right{
                    i{
                        margin-left: 5px;
                        margin-right: 5px;
                        color: #0f86d7;
                        cursor:pointer;
                    }
                    span{
                        margin-right:10px;
                    }
                }
            }
        }
    }
`;

const CustomerDetailsEconomy = () => {
    return (
        <StyledContainer>
          <div className="row">
            <div className="col-md-3">
              <div className="latest_activity">
                <div className="latest_activity_title d-flex justify-content-between align-items-center">
                  <div><i className="fa fa-bell"></i>&nbsp;&nbsp;&nbsp;Notifications</div>
                  <div className="lastest_activity_showall">Show all</div>
                </div>
                <div className="latest_activity_content">
                  <div className="latest_activity_item">
                      <div className="latest_activity_subtitle">Dec 19, 2019: Invoice Ninja updated invoice <Link to="/">208050</Link></div>
                  </div>
                  <div className="latest_activity_item">
                      <div className="latest_activity_subtitle">Dec 19, 2019: ILorem ipsum dolor sit amet, consecteur <Link to="/">208050</Link></div>
                  </div>
                  <div className="latest_activity_item">
                      <div className="latest_activity_subtitle">Dec 19, 2019: Invoice Ninja updated invoice <Link to="/">208050</Link></div>
                  </div>
                  <div className="latest_activity_item">
                      <div className="latest_activity_subtitle">Dec 19, 2019: Invoice Ninja updated invoice <Link to="/">208050</Link></div>
                  </div>
                  <div className="latest_activity_item">
                      <div className="latest_activity_subtitle">Dec 19, 2019: Invoice Ninja updated invoice <Link to="/">208050</Link></div>
                  </div>
                  <div className="latest_activity_item">
                      <div className="latest_activity_subtitle">Dec 19, 2019: Invoice Ninja updated invoice <Link to="/">208050</Link></div>
                  </div>
                  <div className="latest_activity_item">
                      <div className="latest_activity_subtitle">Dec 19, 2019: Invoice Ninja updated invoice <Link to="/">208050</Link></div>
                  </div>
                  <div className="latest_activity_item">
                      <div className="latest_activity_subtitle">Dec 19, 2019: Invoice Ninja updated invoice <Link to="/">208050</Link></div>
                  </div>
                  <div className="latest_activity_item">
                      <div className="latest_activity_subtitle">Dec 19, 2019: Invoice Ninja updated invoice <Link to="/">208050</Link></div>
                  </div>
                  <div className="latest_activity_item">
                      <div className="latest_activity_subtitle">Dec 19, 2019: Invoice Ninja updated invoice <Link to="/">208050</Link></div>
                  </div>
                  <div className="latest_activity_item">
                      <div className="latest_activity_subtitle">Dec 19, 2019: Invoice Ninja updated invoice <Link to="/">208050</Link></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-9">
              <div className="row">
                <div className="col-md-4">
                  <div className="card rounded border-primary">
                    <div className="body top_counter p-3">
                      <div className="icon bg-primary text-white rounded-circle">
                        <i className="fa fa-building"></i> 
                      </div>
                      <div className="content">
                        <span className="font-weight-bold">Total Revenue</span>
                        <h5 className="number mb-0 font-weight-bold text-primary">$53,251.00</h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card rounded border-success">
                    <div className="body top_counter p-3">
                      <div className="icon bg-success text-white rounded-circle">
                        <i className="fa fa-credit-card"></i> 
                      </div>
                      <div className="content">
                        <span className="font-weight-bold">Average Invoice</span>
                        <h5 className="number mb-0 font-weight-bold text-primary">$53,251.00</h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card rounded border-warning">
                    <div className="body top_counter p-3">
                      <div className="icon bg-warning text-white rounded-circle">
                        <i className="fa fa-credit-card"></i> 
                      </div>
                      <div className="content">
                        <span className="font-weight-bold">Outstanding</span>
                        <h5 className="number mb-0 font-weight-bold text-primary">$53,251.00</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <EconomyChart />
            </div>
          </div>
          <div className="filter_div">
              <div className="filter_left">
                  <div className="filter_search">
                      <div className="input-group">
                          <input type="text" className="form-control" placeholder="" />
                          <div className="input-group-append">
                              <span className="input-group-text"><i className="fa fa-calendar"></i></span>
                          </div>
                      </div>
                  </div>     
                  <div className="filter_text">&nbsp;</div> 
                  <div className="filter_status">From&nbsp;&nbsp;&nbsp;&nbsp;</div>
                  
                  <div className="filter_search">
                      <div className="input-group">
                          <input type="text" className="form-control datetime" placeholder="" />
                          <div className="input-group-append">
                              <span className="input-group-text"><i className="fa fa-calendar"></i></span>
                          </div>
                      </div>
                  </div>  
                  <div className="filter_status">&nbsp;&nbsp;&nbsp;&nbsp;To&nbsp;&nbsp;&nbsp;&nbsp;</div>
                  
                  <div className="filter_search">
                      <div className="input-group">
                          <input type="text" className="form-control datetime" placeholder="" />
                          <div className="input-group-append">
                              <span className="input-group-text"><i className="fa fa-calendar"></i></span>
                          </div>
                      </div>
                  </div>  
                  <div className="filter_text">&nbsp;</div>  
                  <div className="filter_category">
                      <div className="btn btn-success font-weight-bold">Submit</div>
                  </div>
              </div>
              <div className="filter_right">                  
                  <div className="btn btn-default font-weight-bold"><i className="fa fa-plus"></i>&nbsp;&nbsp;New Invoice</div>
                  <div className="btn btn-default font-weight-bold"><i className="fa fa-mail-forward"></i></div>
                  <div className="btn btn-default font-weight-bold"><i className="fa fa-cog"></i></div>
                  <div className="btn btn-default font-weight-bold"><i className="fa fa-refresh"></i></div>
              </div>
          </div>
          <div className="main_panel row">
              <div className="main_sub_panel col-md-12">
                  <div className="main_table">
                      <table className="table table-bordered ">
                          <thead>
                          <tr>
                            <th>STATUS</th>
                            <th>TYPE</th>
                            <th>INVOICE#</th>
                            <th>CREATED</th>
                            <th>EXPIRES</th>
                            <th>CUSTOMER</th>
                            <th>TOTAL</th>
                            <th>PAID</th>
                            <th>BALANCE</th>
                            <th>PAYMENT DATE</th>
                            <th>SENT VIEW</th>
                            <th>ACTION</th>
                          </tr>
                          </thead>
                          <tbody>
                          <tr>
                            <td><span class="btn bg-success btn-round">Paid</span></td>
                            <td>Services</td>
                            <td>0016</td>
                            <td>21-01-2018</td>
                            <td>21-01-2018</td>
                            <td>Test Customer $115.00</td>
                            <td>$0.00</td>
                            <td>$115.00</td>
                            <td>22-05-2018</td>
                            <td>1</td>
                            <td>5</td>
                            <td>
                              <div className="d-flex align-items-center justify-content-center action_field">
                                <span class="btn_remove"><i className="fa fa-trash"></i></span>
                                <span class="btn_edit"><i className="fa fa-edit"></i></span>
                                <Dropdown>
                                  <Dropdown.Toggle variant="success" className="user-name left_dropdown_btn">                                  
                                    <i className="fa fa-chevron-down"></i>
                                  </Dropdown.Toggle>
                                  <Dropdown.Menu>
                                    <span className="dropdown-item text-dark">My Profile</span>
                                    <span className="dropdown-item text-dark">Export to PDF</span>
                                    <span className="dropdown-item text-dark">Send Invoice</span>
                                    <span className="dropdown-item text-dark">Copy Link</span>
                                    <span className="dropdown-item text-dark">Duplicate</span>
                                  </Dropdown.Menu>
                                </Dropdown>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td><span class="btn bg-warning btn-round">Partial</span></td>
                            <td>Services</td>
                            <td>0016</td>
                            <td>21-01-2018</td>
                            <td>21-01-2018</td>
                            <td>Test Customer $115.00</td>
                            <td>$0.00</td>
                            <td>$115.00</td>
                            <td>22-05-2018</td>
                            <td>1</td>
                            <td>5</td>
                            <td>
                              <div className="d-flex align-items-center justify-content-center action_field">
                                <span class="btn_remove"><i className="fa fa-trash"></i></span>
                                <span class="btn_edit"><i className="fa fa-edit"></i></span>
                                <Dropdown>
                                  <Dropdown.Toggle variant="success" className="user-name left_dropdown_btn">                                  
                                    <i className="fa fa-chevron-down"></i>
                                  </Dropdown.Toggle>
                                  <Dropdown.Menu>
                                    <span className="dropdown-item text-dark">My Profile</span>
                                    <span className="dropdown-item text-dark">Export to PDF</span>
                                    <span className="dropdown-item text-dark">Send Invoice</span>
                                    <span className="dropdown-item text-dark">Copy Link</span>
                                    <span className="dropdown-item text-dark">Duplicate</span>
                                  </Dropdown.Menu>
                                </Dropdown>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td><span class="btn bg-primary btn-round">unpaid</span></td>
                            <td>Services</td>
                            <td>0016</td>
                            <td>21-01-2018</td>
                            <td>21-01-2018</td>
                            <td>Test Customer $115.00</td>
                            <td>$0.00</td>
                            <td>$115.00</td>
                            <td>22-05-2018</td>
                            <td>1</td>
                            <td>5</td>
                            <td>
                              <div className="d-flex align-items-center justify-content-center action_field">
                                <span class="btn_remove"><i className="fa fa-trash"></i></span>
                                <span class="btn_edit"><i className="fa fa-edit"></i></span>
                                <Dropdown>
                                  <Dropdown.Toggle variant="success" className="user-name left_dropdown_btn">                                  
                                    <i className="fa fa-chevron-down"></i>
                                  </Dropdown.Toggle>
                                  <Dropdown.Menu>
                                    <span className="dropdown-item text-dark">My Profile</span>
                                    <span className="dropdown-item text-dark">Export to PDF</span>
                                    <span className="dropdown-item text-dark">Send Invoice</span>
                                    <span className="dropdown-item text-dark">Copy Link</span>
                                    <span className="dropdown-item text-dark">Duplicate</span>
                                  </Dropdown.Menu>
                                </Dropdown>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td><span class="btn bg-danger btn-round">Overdue</span></td>
                            <td>Services</td>
                            <td>0016</td>
                            <td>21-01-2018</td>
                            <td>21-01-2018</td>
                            <td>Test Customer $115.00</td>
                            <td>$0.00</td>
                            <td>$115.00</td>
                            <td>22-05-2018</td>
                            <td>1</td>
                            <td>5</td>
                            <td>
                              <div className="d-flex align-items-center justify-content-center action_field">
                                <span class="btn_remove"><i className="fa fa-trash"></i></span>
                                <span class="btn_edit"><i className="fa fa-edit"></i></span>
                                <Dropdown>
                                  <Dropdown.Toggle variant="success" className="user-name left_dropdown_btn">                                  
                                    <i className="fa fa-chevron-down"></i>
                                  </Dropdown.Toggle>
                                  <Dropdown.Menu>
                                    <span className="dropdown-item text-dark">My Profile</span>
                                    <span className="dropdown-item text-dark">Export to PDF</span>
                                    <span className="dropdown-item text-dark">Send Invoice</span>
                                    <span className="dropdown-item text-dark">Copy Link</span>
                                    <span className="dropdown-item text-dark">Duplicate</span>
                                  </Dropdown.Menu>
                                </Dropdown>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td><span class="btn bg-success btn-round">Paid</span></td>
                            <td>Services</td>
                            <td>0016</td>
                            <td>21-01-2018</td>
                            <td>21-01-2018</td>
                            <td>Test Customer $115.00</td>
                            <td>$0.00</td>
                            <td>$115.00</td>
                            <td>22-05-2018</td>
                            <td>1</td>
                            <td>5</td>
                            <td>
                              <div className="d-flex align-items-center justify-content-center action_field">
                                <span class="btn_remove"><i className="fa fa-trash"></i></span>
                                <span class="btn_edit"><i className="fa fa-edit"></i></span>
                                <Dropdown>
                                  <Dropdown.Toggle variant="success" className="user-name left_dropdown_btn">                                  
                                    <i className="fa fa-chevron-down"></i>
                                  </Dropdown.Toggle>
                                  <Dropdown.Menu>
                                    <span className="dropdown-item text-dark">My Profile</span>
                                    <span className="dropdown-item text-dark">Export to PDF</span>
                                    <span className="dropdown-item text-dark">Send Invoice</span>
                                    <span className="dropdown-item text-dark">Copy Link</span>
                                    <span className="dropdown-item text-dark">Duplicate</span>
                                  </Dropdown.Menu>
                                </Dropdown>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td><span class="btn bg-warning btn-round">Partial</span></td>
                            <td>Services</td>
                            <td>0016</td>
                            <td>21-01-2018</td>
                            <td>21-01-2018</td>
                            <td>Test Customer $115.00</td>
                            <td>$0.00</td>
                            <td>$115.00</td>
                            <td>22-05-2018</td>
                            <td>1</td>
                            <td>5</td>
                            <td>
                              <div className="d-flex align-items-center justify-content-center action_field">
                                <span class="btn_remove"><i className="fa fa-trash"></i></span>
                                <span class="btn_edit"><i className="fa fa-edit"></i></span>
                                <Dropdown>
                                  <Dropdown.Toggle variant="success" className="user-name left_dropdown_btn">                                  
                                    <i className="fa fa-chevron-down"></i>
                                  </Dropdown.Toggle>
                                  <Dropdown.Menu>
                                    <span className="dropdown-item text-dark">My Profile</span>
                                    <span className="dropdown-item text-dark">Export to PDF</span>
                                    <span className="dropdown-item text-dark">Send Invoice</span>
                                    <span className="dropdown-item text-dark">Copy Link</span>
                                    <span className="dropdown-item text-dark">Duplicate</span>
                                  </Dropdown.Menu>
                                </Dropdown>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td><span class="btn bg-primary btn-round">unpaid</span></td>
                            <td>Services</td>
                            <td>0016</td>
                            <td>21-01-2018</td>
                            <td>21-01-2018</td>
                            <td>Test Customer $115.00</td>
                            <td>$0.00</td>
                            <td>$115.00</td>
                            <td>22-05-2018</td>
                            <td>1</td>
                            <td>5</td>
                            <td>
                              <div className="d-flex align-items-center justify-content-center action_field">
                                <span class="btn_remove"><i className="fa fa-trash"></i></span>
                                <span class="btn_edit"><i className="fa fa-edit"></i></span>
                                <Dropdown>
                                  <Dropdown.Toggle variant="success" className="user-name left_dropdown_btn">                                  
                                    <i className="fa fa-chevron-down"></i>
                                  </Dropdown.Toggle>
                                  <Dropdown.Menu>
                                    <span className="dropdown-item text-dark">My Profile</span>
                                    <span className="dropdown-item text-dark">Export to PDF</span>
                                    <span className="dropdown-item text-dark">Send Invoice</span>
                                    <span className="dropdown-item text-dark">Copy Link</span>
                                    <span className="dropdown-item text-dark">Duplicate</span>
                                  </Dropdown.Menu>
                                </Dropdown>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td><span class="btn bg-danger btn-round">Overdue</span></td>
                            <td>Services</td>
                            <td>0016</td>
                            <td>21-01-2018</td>
                            <td>21-01-2018</td>
                            <td>Test Customer $115.00</td>
                            <td>$0.00</td>
                            <td>$115.00</td>
                            <td>22-05-2018</td>
                            <td>1</td>
                            <td>5</td>
                            <td>
                              <div className="d-flex align-items-center justify-content-center action_field">
                                <span class="btn_remove"><i className="fa fa-trash"></i></span>
                                <span class="btn_edit"><i className="fa fa-edit"></i></span>
                                <Dropdown>
                                  <Dropdown.Toggle variant="success" className="user-name left_dropdown_btn">                                  
                                    <i className="fa fa-chevron-down"></i>
                                  </Dropdown.Toggle>
                                  <Dropdown.Menu>
                                    <span className="dropdown-item text-dark">My Profile</span>
                                    <span className="dropdown-item text-dark">Export to PDF</span>
                                    <span className="dropdown-item text-dark">Send Invoice</span>
                                    <span className="dropdown-item text-dark">Copy Link</span>
                                    <span className="dropdown-item text-dark">Duplicate</span>
                                  </Dropdown.Menu>
                                </Dropdown>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td><span class="btn bg-success btn-round">Paid</span></td>
                            <td>Services</td>
                            <td>0016</td>
                            <td>21-01-2018</td>
                            <td>21-01-2018</td>
                            <td>Test Customer $115.00</td>
                            <td>$0.00</td>
                            <td>$115.00</td>
                            <td>22-05-2018</td>
                            <td>1</td>
                            <td>5</td>
                            <td>
                              <div className="d-flex align-items-center justify-content-center action_field">
                                <span class="btn_remove"><i className="fa fa-trash"></i></span>
                                <span class="btn_edit"><i className="fa fa-edit"></i></span>
                                <Dropdown>
                                  <Dropdown.Toggle variant="success" className="user-name left_dropdown_btn">                                  
                                    <i className="fa fa-chevron-down"></i>
                                  </Dropdown.Toggle>
                                  <Dropdown.Menu>
                                    <span className="dropdown-item text-dark">My Profile</span>
                                    <span className="dropdown-item text-dark">Export to PDF</span>
                                    <span className="dropdown-item text-dark">Send Invoice</span>
                                    <span className="dropdown-item text-dark">Copy Link</span>
                                    <span className="dropdown-item text-dark">Duplicate</span>
                                  </Dropdown.Menu>
                                </Dropdown>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td><span class="btn bg-warning btn-round">Partial</span></td>
                            <td>Services</td>
                            <td>0016</td>
                            <td>21-01-2018</td>
                            <td>21-01-2018</td>
                            <td>Test Customer $115.00</td>
                            <td>$0.00</td>
                            <td>$115.00</td>
                            <td>22-05-2018</td>
                            <td>1</td>
                            <td>5</td>
                            <td>
                              <div className="d-flex align-items-center justify-content-center action_field">
                                <span class="btn_remove"><i className="fa fa-trash"></i></span>
                                <span class="btn_edit"><i className="fa fa-edit"></i></span>
                                <Dropdown>
                                  <Dropdown.Toggle variant="success" className="user-name left_dropdown_btn">                                  
                                    <i className="fa fa-chevron-down"></i>
                                  </Dropdown.Toggle>
                                  <Dropdown.Menu>
                                    <span className="dropdown-item text-dark">My Profile</span>
                                    <span className="dropdown-item text-dark">Export to PDF</span>
                                    <span className="dropdown-item text-dark">Send Invoice</span>
                                    <span className="dropdown-item text-dark">Copy Link</span>
                                    <span className="dropdown-item text-dark">Duplicate</span>
                                  </Dropdown.Menu>
                                </Dropdown>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td><span class="btn bg-primary btn-round">unpaid</span></td>
                            <td>Services</td>
                            <td>0016</td>
                            <td>21-01-2018</td>
                            <td>21-01-2018</td>
                            <td>Test Customer $115.00</td>
                            <td>$0.00</td>
                            <td>$115.00</td>
                            <td>22-05-2018</td>
                            <td>1</td>
                            <td>5</td>
                            <td>
                              <div className="d-flex align-items-center justify-content-center action_field">
                                <span class="btn_remove"><i className="fa fa-trash"></i></span>
                                <span class="btn_edit"><i className="fa fa-edit"></i></span>
                                <Dropdown>
                                  <Dropdown.Toggle variant="success" className="user-name left_dropdown_btn">                                  
                                    <i className="fa fa-chevron-down"></i>
                                  </Dropdown.Toggle>
                                  <Dropdown.Menu>
                                    <span className="dropdown-item text-dark">My Profile</span>
                                    <span className="dropdown-item text-dark">Export to PDF</span>
                                    <span className="dropdown-item text-dark">Send Invoice</span>
                                    <span className="dropdown-item text-dark">Copy Link</span>
                                    <span className="dropdown-item text-dark">Duplicate</span>
                                  </Dropdown.Menu>
                                </Dropdown>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td><span class="btn bg-danger btn-round">Overdue</span></td>
                            <td>Services</td>
                            <td>0016</td>
                            <td>21-01-2018</td>
                            <td>21-01-2018</td>
                            <td>Test Customer $115.00</td>
                            <td>$0.00</td>
                            <td>$115.00</td>
                            <td>22-05-2018</td>
                            <td>1</td>
                            <td>5</td>
                            <td>
                              <div className="d-flex align-items-center justify-content-center action_field">
                                <span class="btn_remove"><i className="fa fa-trash"></i></span>
                                <span class="btn_edit"><i className="fa fa-edit"></i></span>
                                <Dropdown>
                                  <Dropdown.Toggle variant="success" className="user-name left_dropdown_btn">                                  
                                    <i className="fa fa-chevron-down"></i>
                                  </Dropdown.Toggle>
                                  <Dropdown.Menu>
                                    <span className="dropdown-item text-dark">My Profile</span>
                                    <span className="dropdown-item text-dark">Export to PDF</span>
                                    <span className="dropdown-item text-dark">Send Invoice</span>
                                    <span className="dropdown-item text-dark">Copy Link</span>
                                    <span className="dropdown-item text-dark">Duplicate</span>
                                  </Dropdown.Menu>
                                </Dropdown>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td><span class="btn bg-success btn-round">Paid</span></td>
                            <td>Services</td>
                            <td>0016</td>
                            <td>21-01-2018</td>
                            <td>21-01-2018</td>
                            <td>Test Customer $115.00</td>
                            <td>$0.00</td>
                            <td>$115.00</td>
                            <td>22-05-2018</td>
                            <td>1</td>
                            <td>5</td>
                            <td>
                              <div className="d-flex align-items-center justify-content-center action_field">
                                <span class="btn_remove"><i className="fa fa-trash"></i></span>
                                <span class="btn_edit"><i className="fa fa-edit"></i></span>
                                <Dropdown>
                                  <Dropdown.Toggle variant="success" className="user-name left_dropdown_btn">                                  
                                    <i className="fa fa-chevron-down"></i>
                                  </Dropdown.Toggle>
                                  <Dropdown.Menu>
                                    <span className="dropdown-item text-dark">My Profile</span>
                                    <span className="dropdown-item text-dark">Export to PDF</span>
                                    <span className="dropdown-item text-dark">Send Invoice</span>
                                    <span className="dropdown-item text-dark">Copy Link</span>
                                    <span className="dropdown-item text-dark">Duplicate</span>
                                  </Dropdown.Menu>
                                </Dropdown>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td><span class="btn bg-warning btn-round">Partial</span></td>
                            <td>Services</td>
                            <td>0016</td>
                            <td>21-01-2018</td>
                            <td>21-01-2018</td>
                            <td>Test Customer $115.00</td>
                            <td>$0.00</td>
                            <td>$115.00</td>
                            <td>22-05-2018</td>
                            <td>1</td>
                            <td>5</td>
                            <td>
                              <div className="d-flex align-items-center justify-content-center action_field">
                                <span class="btn_remove"><i className="fa fa-trash"></i></span>
                                <span class="btn_edit"><i className="fa fa-edit"></i></span>
                                <Dropdown>
                                  <Dropdown.Toggle variant="success" className="user-name left_dropdown_btn">                                  
                                    <i className="fa fa-chevron-down"></i>
                                  </Dropdown.Toggle>
                                  <Dropdown.Menu>
                                    <span className="dropdown-item text-dark">My Profile</span>
                                    <span className="dropdown-item text-dark">Export to PDF</span>
                                    <span className="dropdown-item text-dark">Send Invoice</span>
                                    <span className="dropdown-item text-dark">Copy Link</span>
                                    <span className="dropdown-item text-dark">Duplicate</span>
                                  </Dropdown.Menu>
                                </Dropdown>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td><span class="btn bg-primary btn-round">unpaid</span></td>
                            <td>Services</td>
                            <td>0016</td>
                            <td>21-01-2018</td>
                            <td>21-01-2018</td>
                            <td>Test Customer $115.00</td>
                            <td>$0.00</td>
                            <td>$115.00</td>
                            <td>22-05-2018</td>
                            <td>1</td>
                            <td>5</td>
                            <td>
                              <div className="d-flex align-items-center justify-content-center action_field">
                                <span class="btn_remove"><i className="fa fa-trash"></i></span>
                                <span class="btn_edit"><i className="fa fa-edit"></i></span>
                                <Dropdown>
                                  <Dropdown.Toggle variant="success" className="user-name left_dropdown_btn">                                  
                                    <i className="fa fa-chevron-down"></i>
                                  </Dropdown.Toggle>
                                  <Dropdown.Menu>
                                    <span className="dropdown-item text-dark">My Profile</span>
                                    <span className="dropdown-item text-dark">Export to PDF</span>
                                    <span className="dropdown-item text-dark">Send Invoice</span>
                                    <span className="dropdown-item text-dark">Copy Link</span>
                                    <span className="dropdown-item text-dark">Duplicate</span>
                                  </Dropdown.Menu>
                                </Dropdown>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td><span class="btn bg-danger btn-round">Overdue</span></td>
                            <td>Services</td>
                            <td>0016</td>
                            <td>21-01-2018</td>
                            <td>21-01-2018</td>
                            <td>Test Customer $115.00</td>
                            <td>$0.00</td>
                            <td>$115.00</td>
                            <td>22-05-2018</td>
                            <td>1</td>
                            <td>5</td>
                            <td>
                              <div className="d-flex align-items-center justify-content-center action_field">
                                <span class="btn_remove"><i className="fa fa-trash"></i></span>
                                <span class="btn_edit"><i className="fa fa-edit"></i></span>
                                <Dropdown>
                                  <Dropdown.Toggle variant="success" className="user-name left_dropdown_btn">                                  
                                    <i className="fa fa-chevron-down"></i>
                                  </Dropdown.Toggle>
                                  <Dropdown.Menu>
                                    <span className="dropdown-item text-dark">My Profile</span>
                                    <span className="dropdown-item text-dark">Export to PDF</span>
                                    <span className="dropdown-item text-dark">Send Invoice</span>
                                    <span className="dropdown-item text-dark">Copy Link</span>
                                    <span className="dropdown-item text-dark">Duplicate</span>
                                  </Dropdown.Menu>
                                </Dropdown>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td><span class="btn bg-success btn-round">Paid</span></td>
                            <td>Services</td>
                            <td>0016</td>
                            <td>21-01-2018</td>
                            <td>21-01-2018</td>
                            <td>Test Customer $115.00</td>
                            <td>$0.00</td>
                            <td>$115.00</td>
                            <td>22-05-2018</td>
                            <td>1</td>
                            <td>5</td>
                            <td>
                              <div className="d-flex align-items-center justify-content-center action_field">
                                <span class="btn_remove"><i className="fa fa-trash"></i></span>
                                <span class="btn_edit"><i className="fa fa-edit"></i></span>
                                <Dropdown>
                                  <Dropdown.Toggle variant="success" className="user-name left_dropdown_btn">                                  
                                    <i className="fa fa-chevron-down"></i>
                                  </Dropdown.Toggle>
                                  <Dropdown.Menu>
                                    <span className="dropdown-item text-dark">My Profile</span>
                                    <span className="dropdown-item text-dark">Export to PDF</span>
                                    <span className="dropdown-item text-dark">Send Invoice</span>
                                    <span className="dropdown-item text-dark">Copy Link</span>
                                    <span className="dropdown-item text-dark">Duplicate</span>
                                  </Dropdown.Menu>
                                </Dropdown>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td><span class="btn bg-warning btn-round">Partial</span></td>
                            <td>Services</td>
                            <td>0016</td>
                            <td>21-01-2018</td>
                            <td>21-01-2018</td>
                            <td>Test Customer $115.00</td>
                            <td>$0.00</td>
                            <td>$115.00</td>
                            <td>22-05-2018</td>
                            <td>1</td>
                            <td>5</td>
                            <td>
                              <div className="d-flex align-items-center justify-content-center action_field">
                                <span class="btn_remove"><i className="fa fa-trash"></i></span>
                                <span class="btn_edit"><i className="fa fa-edit"></i></span>
                                <Dropdown>
                                  <Dropdown.Toggle variant="success" className="user-name left_dropdown_btn">                                  
                                    <i className="fa fa-chevron-down"></i>
                                  </Dropdown.Toggle>
                                  <Dropdown.Menu>
                                    <span className="dropdown-item text-dark">My Profile</span>
                                    <span className="dropdown-item text-dark">Export to PDF</span>
                                    <span className="dropdown-item text-dark">Send Invoice</span>
                                    <span className="dropdown-item text-dark">Copy Link</span>
                                    <span className="dropdown-item text-dark">Duplicate</span>
                                  </Dropdown.Menu>
                                </Dropdown>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td><span class="btn bg-primary btn-round">unpaid</span></td>
                            <td>Services</td>
                            <td>0016</td>
                            <td>21-01-2018</td>
                            <td>21-01-2018</td>
                            <td>Test Customer $115.00</td>
                            <td>$0.00</td>
                            <td>$115.00</td>
                            <td>22-05-2018</td>
                            <td>1</td>
                            <td>5</td>
                            <td>
                              <div className="d-flex align-items-center justify-content-center action_field">
                                <span class="btn_remove"><i className="fa fa-trash"></i></span>
                                <span class="btn_edit"><i className="fa fa-edit"></i></span>
                                <Dropdown>
                                  <Dropdown.Toggle variant="success" className="user-name left_dropdown_btn">                                  
                                    <i className="fa fa-chevron-down"></i>
                                  </Dropdown.Toggle>
                                  <Dropdown.Menu>
                                    <span className="dropdown-item text-dark">My Profile</span>
                                    <span className="dropdown-item text-dark">Export to PDF</span>
                                    <span className="dropdown-item text-dark">Send Invoice</span>
                                    <span className="dropdown-item text-dark">Copy Link</span>
                                    <span className="dropdown-item text-dark">Duplicate</span>
                                  </Dropdown.Menu>
                                </Dropdown>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td><span class="btn bg-danger btn-round">Overdue</span></td>
                            <td>Services</td>
                            <td>0016</td>
                            <td>21-01-2018</td>
                            <td>21-01-2018</td>
                            <td>Test Customer $115.00</td>
                            <td>$0.00</td>
                            <td>$115.00</td>
                            <td>22-05-2018</td>
                            <td>1</td>
                            <td>5</td>
                            <td>
                              <div className="d-flex align-items-center justify-content-center action_field">
                                <span class="btn_remove"><i className="fa fa-trash"></i></span>
                                <span class="btn_edit"><i className="fa fa-edit"></i></span>
                                <Dropdown>
                                  <Dropdown.Toggle variant="success" className="user-name left_dropdown_btn">                                  
                                    <i className="fa fa-chevron-down"></i>
                                  </Dropdown.Toggle>
                                  <Dropdown.Menu>
                                    <span className="dropdown-item text-dark">My Profile</span>
                                    <span className="dropdown-item text-dark">Export to PDF</span>
                                    <span className="dropdown-item text-dark">Send Invoice</span>
                                    <span className="dropdown-item text-dark">Copy Link</span>
                                    <span className="dropdown-item text-dark">Duplicate</span>
                                  </Dropdown.Menu>
                                </Dropdown>
                              </div>
                            </td>
                          </tr>
                          </tbody>
                      </table>                            
                      <div className="main_table_filter">
                          <div className="main_table_filter_left">                                    
                              <div>View</div>
                              <select className="form-control filter_select">
                                  <option value="5">5</option>
                                  <option value="10">10</option>
                                  <option value="25">25</option>
                                  <option value="50">50</option>
                                  <option value="100">100</option>
                              </select>
                          </div>
                          <div className="main_table_filter_right">
                              <span>1 - 9 of 9 </span>
                              <i className="fa fa-chevron-left"></i>
                              <i className="fa fa-chevron-right"></i>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </StyledContainer>
    );

}
export default CustomerDetailsEconomy
