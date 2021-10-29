import React from "react";
import 'react-rangeslider/lib/index.css'
import styled from "styled-components";
import ReactApexChart from "react-apexcharts";

const StyledContainer = styled.div`
  .summary{
    font-weight: bold;
    background-color: white;
    border: 1px solid lightgrey;
    padding: 15px;
    .summary_header{

    }
    .summary_content{
      border-bottom: 1px solid lightgrey;
      padding-bottom: 10px;
      margin-bottom: 20px;
      .summary_title{      
        color: #0f86d7;
        width: 200px;
      }
      .summary_value{
        
      }
    }
    .split_bar{
      border-right: 1px solid lightgrey;
      display: flex;
      justify-content: center;
    }
    .split_bar.last{
      border-right: none;
    }
  }
  .title{
    color: #0f86d7;
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 10px;
    margin-top: 20px;
  }
`;

class WorkOrderSummary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      workOrders : {
        series: [44, 55, 13],
        options: {
          chart: {
            type: 'pie',
          },
          title: {
            text: "WorkOrders",
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
            horizontalAlign: 'left',
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
      },
      hours : {
        series: [44, 55],
        options: {
          chart: {
            type: 'pie',
          },
          title: {
            text: "Hours",
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
          labels: ['Avslutade', 'Skapade'],
          legend: {
            horizontalAlign: 'left',
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
      },
      
      work : {
        series: [13, 44, 55],
        options: {
          chart: {
            type: 'pie',
          },
          title: {
            text: "Work",
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
            horizontalAlign: 'left',
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
      },
      material : {
        series: [40, 60],
        options: {
          chart: {
            type: 'pie',
          },
          title: {
            text: "Material",
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
          labels: ['Avslutade', 'Skapade'],
          legend: {
            horizontalAlign: 'left',
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
      },
    };
  }
  componentDidMount(){
  }

  componentDidUpdate(prevProps){
  }

  render() {
    return (
      <StyledContainer>
        <div className="title">
          WorkOrder Summary
        </div>
        <div className="summary">
         <div className="summary_content d-flex justify-content-between align-items-center">
          <div className="summary_header">Showing 171 Workorders</div>
          <div className="">
            <div className="d-flex">
              <div className="summary_title">Amount left to bill:</div>
              <div className="summary_value">530.958.6</div>
            </div>            
            <div className="d-flex">
              <div className="summary_title">Total sum:</div>
              <div className="summary_value">530.958.6</div>
            </div>
          </div>
         </div>
         <div className="row">
          <div className="col-md-3 split_bar">
            <ReactApexChart options={this.state.workOrders.options} series={this.state.workOrders.series} type="pie"/>
          </div>
          <div className="col-md-3 split_bar">            
            <ReactApexChart options={this.state.hours.options} series={this.state.hours.series} type="pie"/>
          </div>
          <div className="col-md-3 split_bar">
            <ReactApexChart options={this.state.work.options} series={this.state.work.series} type="pie"/></div>
          <div className="col-md-3 split_bar last">
            <ReactApexChart options={this.state.material.options} series={this.state.material.series} type="pie"/></div>
         </div>
        </div>
      </StyledContainer>
    );
  }
};

export default WorkOrderSummary;