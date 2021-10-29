import React from "react";
import 'react-rangeslider/lib/index.css'
import styled from "styled-components";

const StyledContainer = styled.div`
  .activity_log{
    background-color: white;
    height: 220px;
    overflow: auto;
    border: 1px solid lightgrey;
    .activity_ltem{
      margin: 20px;
      font-weight: bold;
      span{
        color: #0f86d7;
        margin-right: 15px;
      }
    }
    .activity_ltem_show_all{
      color: #0f86d7;
      font-weight: bold;
      float: right;
      margin-right: 20px;
      margin-bottom: 20px;
      cursor: pointer;
    }
  }
  .title{
    color: #0f86d7;
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 10px;
  }
`;

class ActivityLog extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
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
          Handelselogg
        </div>
        <div className="activity_log">
          <div className="activity_ltem">
            <span>●</span> Faktura 5341 skickad till kkund@mail.se den 30 maj 2018 14:00
          </div>
          <div className="activity_ltem">
            <span>●</span> Faktura 5341 skickad till kkund@mail.se den 30 maj 2018 14:00
          </div>
          <div className="activity_ltem">
            <span>●</span> Faktura 5341 skickad till kkund@mail.se den 30 maj 2018 14:00
          </div>
          <div className="activity_ltem">
            <span>●</span> Faktura 5341 skickad till kkund@mail.se den 30 maj 2018 14:00
          </div>
          <div className="activity_ltem_show_all">
            Show All
          </div>
        </div>
      </StyledContainer>
    );
  }
};

export default ActivityLog;