import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import ReactApexChart from "react-apexcharts";

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
          
          .select_normal{
            width: 80px;
            margin-right: 10px;
          }
          .select_customer{
            width: 100px;
            margin-right: 10px;
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
            height: 880px;
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
    }
    .section_item_border{
      border-left: 2px solid;
    }
    .section_list{
      border-bottom: 1px solid lightgrey;
    }
`;
class CustomerDetailsProposals extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [44, 55, 13],
      options: {
        chart: {
          type: 'pie',
        },
        title: {
          text: "",
          align: 'center',
          margin: 10,
          offsetX: 0,
          offsetY: 0,
          floating: false,
          style: {
            fontSize:  '14px',
            fontWeight:  'bold',
            fontFamily:  undefined,
            color:  '#263238',
          },
        },
        labels: ['Avslutade', 'Paborjade', 'Skapade'],
        legend: {
          show: false
        },
        stroke: {
          show: true,
          curve: 'smooth',
          lineCap: 'butt',
          colors: undefined,
          width: 0,
          dashArray: 0,      
        },      
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      }
    };
  }
  render() {
    return (
        <StyledContainer>  
          <div className="main_panel row">
              <div className="main_sub_panel col-md-10">                
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
                        <div className="select_normal">
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
                    <div className="filter_category">                    
                      <div className="input-group">                        
                          <div className="select_normal">
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
                    <div className="filter_category">                    
                      <div className="input-group">                        
                          <div className="select_customer">
                              Custormer
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
                    <div className="filter_category">                    
                      <div className="input-group">                        
                          <div className="select_normal">
                              Creator
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
                    <div className="filter_text">&nbsp;</div>  
                    <div className="filter_category">                    
                      <div className="input-group">                        
                          <div className="select_normal">
                              Date From
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
                    <div className="filter_category">                    
                      <div className="input-group">                        
                          <div className="select_normal">
                              Date To
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
                    
                    <div className="filter_search">
                      <div className="input-group">                          
                        <div className="btn btn-default"><i className="fa fa-star"></i></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="section_list bg-white p-2">
                  <div className="section_item d-flex justify-content-between font-weight-bold pt-3 pb-3 mb-2 bg-light">
                    <div className="ml-3 text-dark">PIPE LINE TOTAL : </div>
                    <div className="mr-3 text-primary">USD $5,256.290</div>
                  </div>
                  
                  <div className="section_item d-flex justify-content-between font-weight-bold pt-2 pb-2">
                    <div className="ml-3 text-primary">Draft </div>
                    <div className="mr-3 text-dark">USD $160.290</div>
                  </div>

                  <div className="section_item_border mb-2 border-primary d-flex justify-content-between font-weight-bold pt-3 pb-3 bg-light">
                    <div className="ml-3 text-dark d-flex">
                      <div className="text-grey text-center mr-3">
                        <div className="mb-1">6 Days</div>
                        <i className="fa fa-star"></i>
                      </div>
                      <div className="text-dark">
                        <div className="mb-1 text-primary">Example Company</div>
                        <div className="">Plumbing work new house</div>
                      </div>
                    </div>
                    <div className="mr-3 text-dark">
                      <img src="../assets/images/sm/avatar1.jpg" width="40" className="img-thumbnail rounded-circle avatar mr-3 border-0" alt="avatar" />
                      USD $5,256.290
                    </div>
                  </div>

                  <div className="section_item_border  border-primary d-flex justify-content-between font-weight-bold pt-3 pb-3 bg-light">
                    <div className="ml-3 text-dark d-flex">
                      <div className="text-grey text-center mr-3">
                        <div className="mb-1">6 Days</div>
                        <i className="fa fa-star"></i>
                      </div>
                      <div className="text-dark">
                        <div className="mb-1 text-primary">Example Company</div>
                        <div className="">Plumbing work new house</div>
                      </div>
                    </div>
                    <div className="mr-3 text-dark">
                      <img src="../assets/images/sm/avatar1.jpg" width="40" className="img-thumbnail rounded-circle avatar mr-3 border-0" alt="avatar" />
                      $5,256.290
                    </div>
                  </div>
                </div>

                <div className="section_list bg-white p-2 ">                  
                  <div className="section_item d-flex justify-content-between font-weight-bold pt-2 pb-2">
                    <div className="ml-3 text-primary">Sent</div>
                    <div className="mr-3 text-dark">USD $160.290</div>
                  </div>

                  <div className="section_item_border  border-pink d-flex justify-content-between font-weight-bold pt-3 pb-3 bg-light">
                    <div className="ml-3 text-dark d-flex">
                      <div className="text-grey text-center mr-3">
                        <div className="mb-1">Today</div>
                        <i className="fa fa-star"></i>
                      </div>
                      <div className="text-dark">
                        <div className="mb-1 text-primary">Example Company</div>
                        <div className="">Plumbing work new house</div>
                      </div>
                    </div>
                    <div className="mr-3 text-dark">
                      <img src="../assets/images/sm/avatar1.jpg" width="40" className="img-thumbnail rounded-circle avatar mr-3 border-0" alt="avatar" />
                      $5,256.290
                    </div>
                  </div>
                </div>

                <div className="section_list bg-white p-2 ">                  
                  <div className="section_item d-flex justify-content-between font-weight-bold pt-2 pb-2">
                    <div className="ml-3 text-primary">Viewed</div>
                    <div className="mr-3 text-dark">USD $160.290</div>
                  </div>

                  <div className="section_item_border  border-warning d-flex justify-content-between font-weight-bold pt-3 pb-3 bg-light">
                    <div className="ml-3 text-dark d-flex">
                      <div className="text-grey text-center mr-3">
                        <div className="mb-1">Today</div>
                        <i className="fa fa-star"></i>
                      </div>
                      <div className="text-dark">
                        <div className="mb-1 text-primary">Example Company</div>
                        <div className="">Plumbing work new house</div>
                      </div>
                    </div>
                    <div className="mr-3 text-dark">
                      <span className="text-primary"><i className="fa fa-edit"></i></span>
                      <span className="text-primary ml-2 mr-2">●●●</span>
                      <img src="../assets/images/sm/avatar1.jpg" width="40" className="img-thumbnail rounded-circle avatar mr-3 border-0" alt="avatar" />
                      $5,256.290
                    </div>
                  </div>
                </div>

                <div className="section_list bg-white p-2 ">                  
                  <div className="section_item d-flex justify-content-between font-weight-bold pt-2 pb-2">
                    <div className="ml-3 text-primary">Won</div>
                    <div className="mr-3 text-dark">USD $160.290</div>
                  </div>

                  <div className="section_item_border  border-success d-flex justify-content-between font-weight-bold pt-3 pb-3 bg-light">
                    <div className="ml-3 text-dark d-flex">
                      <div className="text-grey text-center mr-3">
                        <div className="mb-1">Today</div>
                        <i className="fa fa-star"></i>
                      </div>
                      <div className="text-dark">
                        <div className="mb-1 text-primary">Example Company</div>
                        <div className="">Plumbing work new house</div>
                      </div>
                    </div>
                    <div className="mr-3 text-dark">
                      <img src="../assets/images/sm/avatar1.jpg" width="40" className="img-thumbnail rounded-circle avatar mr-3 border-0" alt="avatar" />
                      $5,256.290
                    </div>
                  </div>
                </div>

                <div className="section_list bg-white p-2 ">                  
                  <div className="section_item d-flex justify-content-between font-weight-bold pt-2 pb-2">
                    <div className="ml-3 text-primary">Lost</div>
                    <div className="mr-3 text-dark">USD $160.290</div>
                  </div>

                  <div className="section_item_border  border-danger d-flex justify-content-between font-weight-bold pt-3 pb-3 bg-light">
                    <div className="ml-3 text-dark d-flex">
                      <div className="text-grey text-center mr-3">
                        <div className="mb-1">Today</div>
                        <i className="fa fa-star"></i>
                      </div>
                      <div className="text-dark">
                        <div className="mb-1 text-primary">Example Company</div>
                        <div className="">Plumbing work new house</div>
                      </div>
                    </div>
                    <div className="mr-3 text-dark">
                      <img src="../assets/images/sm/avatar1.jpg" width="40" className="img-thumbnail rounded-circle avatar mr-3 border-0" alt="avatar" />
                      $5,256.290
                    </div>
                  </div>
                </div>
              </div>
              <div className="main_sub_panel col-md-2">
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
          <div className="row mt-3">
            <div className="col-md-10">
              <div className="font-weight-bold">Proposal Metrics</div>
              <div className="d-flex justify-content-around bg-white mt-2 text-dark">
                <div className="text-center w-100">
                  <div className="border-success mr-5 ml-5 mb-2 text-success" style={{fontSize:"3rem", borderBottom:"2px solid"}}><i className="fa fa-eye"></i></div>
                  <div className="mb-3">Won - 1</div>
                </div>                
                <div className="text-center border-primary" style={{borderRight:"2px solid"}}></div>
                <div className="text-center w-100">
                  <div className="border-danger mr-5 ml-5 mb-2 text-danger" style={{fontSize:"3rem", borderBottom:"2px solid"}}><i className="fa fa-eye"></i></div>
                  <div className="mb-3">Lost - 1</div>
                </div>                
                <div className="text-center border-primary" style={{borderRight:"2px solid"}}></div>
                <div className="text-center w-100">
                  <div className="border-default mr-5 ml-5 mb-2 text-default" style={{fontSize:"3rem", borderBottom:"2px solid"}}><i className="fa fa-eye"></i></div>
                  <div className="mb-3">Total - 1</div>
                </div>                
                <div className="text-center border-primary" style={{borderRight:"2px solid"}}></div>
                <div className="text-center w-100">
                  <div className="border-warning mr-5 ml-5 mb-2 text-warning" style={{fontSize:"3rem", borderBottom:"2px solid"}}><i className="fa fa-eye"></i></div>
                  <div className="mb-3">Viewed - 1</div>
                </div>                
              </div>
            </div>
            <div className="col-md-2">
              <div className="font-weight-bold">Close Rate</div>
              <div className="bg-white mt-2 text-dark">
                <ReactApexChart options={this.state.options} series={this.state.series} type="donut"/>
              </div>
            </div>
          </div>
        </StyledContainer>
    );
  }
}
export default CustomerDetailsProposals
