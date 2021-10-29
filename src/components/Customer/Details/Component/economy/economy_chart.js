import React from "react";
import 'react-rangeslider/lib/index.css'
import styled from "styled-components";
import ReactApexChart from "react-apexcharts";

const StyledContainer = styled.div`
  .chart_content{
    display: flex;
    justify-content: center;
    background-color: white;
    border: 1px solid lightgrey;
    height: 145px;
  }
`;

class EconomyChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      workOrders : {
        series: [44, 55],
        options: {
          chart: {
            type: 'pie',
          },
          title: {
            text: "Payments",
            align: 'left',
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
          labels: ['Received', 'Outstanding'],
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
        series: [44, 55, 22, 32],
        options: {
          chart: {
            type: 'pie',
          },
          title: {
            text: "Status",
            align: 'left',
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
          labels: ['Paid', 'Partial', 'Unpaid', 'Overdue'],
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
            text: "Payments Methods",
            align: 'left',
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
          labels: ['Credit Card', 'Check', 'Money Write'],
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
            text: "Payments",
            align: 'left',
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
          labels: ['Products', 'Services', 'Others'],
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
         <div className="row">
          <div className="col-md-3">
            <div className="chart_content"><ReactApexChart options={this.state.workOrders.options} series={this.state.workOrders.series} type="donut"/></div>
          </div>
          <div className="col-md-3">            
            <div className="chart_content"><ReactApexChart options={this.state.hours.options} series={this.state.hours.series} type="donut"/></div>
          </div>
          <div className="col-md-3">
            <div className="chart_content"><ReactApexChart options={this.state.work.options} series={this.state.work.series} type="donut"/></div>
          </div>
          <div className="col-md-3">
            <div className="chart_content"><ReactApexChart options={this.state.material.options} series={this.state.material.series} type="donut"/></div>
          </div>
        </div>
      </StyledContainer>
    );
  }
};

export default EconomyChart;