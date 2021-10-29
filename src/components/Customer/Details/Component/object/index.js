
import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

const StyledContainer = styled.div`
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
            .filter_import, .filter_export{
                i{
                    font-size:2rem;
                }
                font-size: 1rem;
                display: flex;
                align-items: center;
                width: 110px;
                justify-content: space-between;
                border-right: 2px solid;
                margin-right: 15px;
                padding-right: 19px;
                cursor: pointer;
            }
            .filter_import:hover, .filter_export:hover{
                color: lightblue;
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

const CustomerDetailsObject = () => {
    return (
        <StyledContainer>  
          <div className="filter_div">
              <div className="filter_left">
                  <div className="filter_search">
                      <div className="input-group">
                          <input type="text" className="form-control" placeholder="Search..." />
                          <div className="input-group-append">
                              <span className="input-group-text"><i className="fa fa-search"></i></span>
                          </div>
                      </div>
                  </div>     
                  <div className="filter_text">&nbsp;</div> 
                  <div className="filter_status">
                      <div className="input-group">                      
                          <div className="">
                              <select className="form-control filter_select">
                                  <option value="All">Filters</option>
                                  <option value="Status1">Status1</option>
                                  <option value="Status2">Status2</option>
                                  <option value="Status3">Status3</option>
                                  <option value="Status4">Status4</option>
                              </select>    
                          </div>                            
                      </div>
                  </div>
                  <div className="filter_text">&nbsp;</div>  
                  <div className="filter_category">
                      <div className="input-group">                        
                          <div className="">
                              <select className="form-control filter_select">
                                  <option value="All">Actions</option>
                                  <option value="Category1">Category1</option>
                                  <option value="Category2">Category2</option>
                                  <option value="Category3">Category3</option>
                                  <option value="Category4">Category4</option>
                              </select>    
                          </div>                            
                      </div>
                  </div>
              </div>
          </div>
          <div className="main_panel row">
              <div className="main_sub_panel col-md-12">
                  <div className="main_table">
                      <table class="table table-bordered ">
                          <thead>
                          <tr>
                              <th><div className="d-flex justify-content-center"><input type="checkbox" className="form-control" /></div></th>
                              <th>Objekt nr.</th>
                              <th>Name</th>
                              <th>Type</th>
                              <th>Status</th>
                              <th>Object Owner</th>
                              <th>Current User</th>
                              <th>Location</th>
                          </tr>
                          </thead>
                          <tbody>
                          <tr className="custom_category">
                              <td className="border-0"></td>
                              <td colspan="7" className="text-left border-0">Custom Object Category Name Header</td>
                          </tr>
                          <tr>
                              <td><div className="d-flex justify-content-center"><input type="checkbox" className="form-control" /></div></td>
                              <td>2434436</td>
                              <td>Building 1</td>
                              <td>Building</td>
                              <td>In use</td>
                              <td>Nicklas Juhlin Rosen</td>
                              <td>Nicklas Juhlin Rosen</td>
                              <td>Wall st. 12, 1236 New York</td>
                          </tr>
                          <tr>
                              <td><div className="d-flex justify-content-center"><input type="checkbox" className="form-control" /></div></td>
                              <td>2434436</td>
                              <td>Building 1</td>
                              <td>Building</td>
                              <td>In use</td>
                              <td>Nicklas Juhlin Rosen</td>
                              <td>Nicklas Juhlin Rosen</td>
                              <td>Wall st. 12, 1236 New York</td>
                          </tr>
                          <tr>
                              <td><div className="d-flex justify-content-center"><input type="checkbox" className="form-control" /></div></td>
                              <td>2434436</td>
                              <td>Building 1</td>
                              <td>Building</td>
                              <td>In use</td>
                              <td>Nicklas Juhlin Rosen</td>
                              <td>Nicklas Juhlin Rosen</td>
                              <td>Wall st. 12, 1236 New York</td>
                          </tr>
                          <tr className="custom_category">
                              <td className="border-0"></td>
                              <td colspan="7" className="text-left border-0">Custom Object Category Name Header</td>
                          </tr>
                          <tr>
                              <td><div className="d-flex justify-content-center"><input type="checkbox" className="form-control" /></div></td>
                              <td>2434436</td>
                              <td>Building 1</td>
                              <td>Building</td>
                              <td>In use</td>
                              <td>Nicklas Juhlin Rosen</td>
                              <td>Nicklas Juhlin Rosen</td>
                              <td>Wall st. 12, 1236 New York</td>
                          </tr>
                          <tr>
                              <td><div className="d-flex justify-content-center"><input type="checkbox" className="form-control" /></div></td>
                              <td>2434436</td>
                              <td>Building 1</td>
                              <td>Building</td>
                              <td>In use</td>
                              <td>Nicklas Juhlin Rosen</td>
                              <td>Nicklas Juhlin Rosen</td>
                              <td>Wall st. 12, 1236 New York</td>
                          </tr>
                          <tr>
                              <td><div className="d-flex justify-content-center"><input type="checkbox" className="form-control" /></div></td>
                              <td>2434436</td>
                              <td>Building 1</td>
                              <td>Building</td>
                              <td>In use</td>
                              <td>Nicklas Juhlin Rosen</td>
                              <td>Nicklas Juhlin Rosen</td>
                              <td>Wall st. 12, 1236 New York</td>
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
export default CustomerDetailsObject
