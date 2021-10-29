import React from "react";
import 'react-rangeslider/lib/index.css';
import Grid from '@material-ui/core/Grid';
import Log from './Log';
import styled from "styled-components";
import CustomerInfo from './CustomerInfo';
import Note from './Note';
import WorkOrderInfo from "./WorkOrderInfo";

const StyledContainer = styled.div`
  .title{
    color: #0f86d7;
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 10px;
  }
  .filter_div{
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
  }
  .other_field{
    margin-top: 30px;
    margin-bottom: 30px;
  }
`;

const CustomerPanel = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={8} sm={8} md={8} lg={8} xl={8}>
        <CustomerInfo />
      </Grid>
      <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
        <Note />
      </Grid>
    </Grid>
  )
}

class WorkOrderEditor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      slider : 500
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
          Create - Work Order
        </div>
        <div className="filter_div">
            <div>Customer</div>
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
                <div className="add_new_customer">
                    <div className="btn btn-default"><i className="fa fa-plus"></i> New Customer</div>
                </div>
            </div>
        </div>
        <Grid container spacing={2}>
          <Grid item xs={8} sm={8} md={8} lg={8} xl={8}>
            <CustomerPanel />
          </Grid>
          <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
            <Log />
          </Grid>
          <Grid item xs={8} sm={8} md={8} lg={8} xl={8} style={{ marginTop: 15 }}>
            <WorkOrderInfo />
          </Grid>
          <Grid item xs={4} sm={4} md={4} lg={4} xl={4} style={{ marginTop: 15 }}>
            <Note />
          </Grid>
        </Grid>
      </StyledContainer>
    );
  }
};

export default WorkOrderEditor;