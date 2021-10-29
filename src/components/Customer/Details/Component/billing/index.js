import React from "react";
import 'react-rangeslider/lib/index.css';
import styled from "styled-components";
import BillingMain from "./billing_main_heading";

const StyledContainer = styled.div`
  .main_field{
    background-color: white;
    padding: 25px;
    padding-top: 35px;
    border-left: 1px solid lightgrey;
    border-right: 1px solid lightgrey;
    border-bottom: 1px solid lightgrey;
    font-weight: bold;
    .main_field_top{
      .field_title{
        color: #4073ad;
      }
      .field_content{
        cursor: pointer;
        color: lightgray;
      }
    }
  }
  .other_field{
    margin-top: 30px;
    margin-bottom: 30px;
  }
`;

class CustomerDetailsBilling extends React.Component {
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
        <div className="main_field">
          <div className="main_field_top">
              <span className="field_title mr-3">Standard fakturaalternative: </span>
              <span className="field_content">
                kajsa@jeroc.se
                <i className="fa fa-chevron-down ml-2"></i>
              </span>              
          </div>
        </div>
        <div className="other_field">
          <BillingMain />
        </div>
      </StyledContainer>
    );
  }
};

export default CustomerDetailsBilling;