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

        .filter_left{

            display: flex;
            align-items: center;

            .filter_search{
                border: none;
                border-radius: 0px 5px 5px 0px;
                .input-group{
                    margin-top: 16px;
                }
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
                margin-top: 16px;
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
                text-align: center;
                padding: 0.15rem;
                input[type=checkbox]{
                    width: 15px;
                }
            }            
            td{
                border: 1px solid lightgrey;
                text-align: center;
                color: black;
                padding: 0.15rem;
                i{
                    color: #0f86d7;
                    margin-right:5px;
                }
                input[type=checkbox]{
                    width: 15px;
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

const Kunder = () => {
    return (
        <StyledContainer>
            <div className="container-fluid">      
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
                        <div className="filter_text">
                            Filters
                        </div>          
                        <div className="filter_status">
                            <div className="input-group">                      
                                <div className="">
                                    Status
                                    <select className="form-control filter_select">
                                        <option value="All">All</option>
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
                                    Category
                                    <select className="form-control filter_select">
                                        <option value="All">All</option>
                                        <option value="Category1">Category1</option>
                                        <option value="Category2">Category2</option>
                                        <option value="Category3">Category3</option>
                                        <option value="Category4">Category4</option>
                                    </select>    
                                </div>                            
                            </div>
                        </div>
                    </div>
                    <div className="filter_right">
                        <div className="filter_import">                            
                            <i className="fa fa-sign-in"></i> Import
                        </div>
                        <div className="filter_export">
                            <i className="fa fa-sign-out"></i> Export
                        </div>
                        <div className="add_new_customer">
                            <div className="btn btn-default"><i className="fa fa-plus"></i> New Customer</div>
                        </div>
                    </div>
                </div>
                <div className="main_panel row">
                    <div className="main_sub_panel col-md-9">
                        <div className="main_table">
                            <table class="table table-bordered ">
                                <thead>
                                <tr>
                                    <th><div className="d-flex justify-content-center"><input type="checkbox" className="form-control" /></div></th>
                                    <th>Customer nr</th>
                                    <th>Name</th>
                                    <th>Personal/Org-Nr</th>
                                    <th>Refrens</th>
                                    <th>Telephone</th>
                                    <th>Email</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td><div className="d-flex justify-content-center"><input type="checkbox" className="form-control" /></div></td>
                                    <td><Link to="/customerDetails"><i className="fa fa-user"></i>10936</Link></td>
                                    <td>Nicklas Juhlin Rosen</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td><div className="d-flex justify-content-center"><input type="checkbox" className="form-control" /></div></td>
                                    <td><Link to="/customerDetails"><i className="fa fa-user"></i>10936</Link></td>
                                    <td>Nicklas Juhlin Rosen</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td><div className="d-flex justify-content-center"><input type="checkbox" className="form-control" /></div></td>
                                    <td><Link to="/customerDetails"><i className="fa fa-user"></i>10936</Link></td>
                                    <td>Nicklas Juhlin Rosen</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td><div className="d-flex justify-content-center"><input type="checkbox" className="form-control" /></div></td>
                                    <td><Link to="/customerDetails"><i className="fa fa-user"></i>10936</Link></td>
                                    <td>Nicklas Juhlin Rosen</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td><div className="d-flex justify-content-center"><input type="checkbox" className="form-control" /></div></td>
                                    <td><Link to="/customerDetails"><i className="fa fa-user"></i>10936</Link></td>
                                    <td>Nicklas Juhlin Rosen</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
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
                                    <span>1 - 50 of 539 </span>
                                    <i className="fa fa-chevron-left"></i>
                                    <i className="fa fa-chevron-right"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="main_sub_panel col-md-3">
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
                    </div>
                </div>
            </div>
        </StyledContainer>

    );

}
export default Kunder
