import React from "react";
import 'react-rangeslider/lib/index.css'
import styled from "styled-components";

const StyledContainer = styled.div`
  .activity_note{
    background-color: white;
    height: 728px;
    overflow: auto;
    border: 1px solid lightgrey;
    .activity_note_textarea{      
      margin: 10px;
      textarea{
        height: 100px;
      }
    }
    .activity_note_save_button{      
      text-align: right;
      margin-right: 10px;
      .btn{
        font-weight: bold;
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
    
    .activity_ltem{
      display:flex;
      padding: 20px;
      margin-left: 10px;
      margin-right: 10px;
      font-weight: bold;
      border-bottom: 2px solid lightgrey;
      .activity_ltem_icon{        
        font-size: 2rem;
        margin-right: 15px;
      }    
      .activity_ltem_body{
        .activity_ltem_title{
          color: #0f86d7;
          font-size: 1.2rem;
        }
        .activity_ltem_time_name{
          color: lightgrey;
          font-weight: lighter;
          margin-top: 5px;
          margin-bottom: 5px;
        }
        .activity_ltem_content{

        }
      }
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

class ActivityNote extends React.Component {
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
          Note
        </div>
        <div className="activity_note">
          <div className="activity_note_textarea">
            <textarea className="form-control" />
          </div>
          <div className="activity_note_save_button">
            <div className="btn btn-primary">Save Note</div>
          </div>
          <div className="activity_ltem">
            <div className="activity_ltem_icon"><i className="fa fa-bookmark-o"></i></div>
            <div className="activity_ltem_body">
              <div className="activity_ltem_title">Anteckning</div>
              <div className="activity_ltem_time_name">13:22 25 April 2019 . by Nicklas</div>
              <div className="activity_ltem_content">Kund allmant trevlig, har lovat ett bra pris</div>
            </div>
          </div>
          <div className="activity_ltem">
            <div className="activity_ltem_icon"><i className="fa fa-bookmark-o"></i></div>
            <div className="activity_ltem_body">
              <div className="activity_ltem_title">Anteckning</div>
              <div className="activity_ltem_time_name">13:22 25 April 2019 . by Nicklas</div>
              <div className="activity_ltem_content">Kund allmant trevlig, har lovat ett bra pris</div>
            </div>
          </div>
          <div className="activity_ltem">
            <div className="activity_ltem_icon"><i className="fa fa-bookmark-o"></i></div>
            <div className="activity_ltem_body">
              <div className="activity_ltem_title">Anteckning</div>
              <div className="activity_ltem_time_name">13:22 25 April 2019 . by Nicklas</div>
              <div className="activity_ltem_content">Kund allmant trevlig, har lovat ett bra pris</div>
            </div>
          </div>
          <div className="activity_ltem">
            <div className="activity_ltem_icon"><i className="fa fa-bookmark-o"></i></div>
            <div className="activity_ltem_body">
              <div className="activity_ltem_title">Anteckning</div>
              <div className="activity_ltem_time_name">13:22 25 April 2019 . by Nicklas</div>
              <div className="activity_ltem_content">Kund allmant trevlig, har lovat ett bra pris</div>
            </div>
          </div>
          <div className="activity_ltem">
            <div className="activity_ltem_icon"><i className="fa fa-bookmark-o"></i></div>
            <div className="activity_ltem_body">
              <div className="activity_ltem_title">Anteckning</div>
              <div className="activity_ltem_time_name">13:22 25 April 2019 . by Nicklas</div>
              <div className="activity_ltem_content">Kund allmant trevlig, har lovat ett bra pris</div>
            </div>
          </div>
          <div className="activity_ltem">
            <div className="activity_ltem_icon"><i className="fa fa-bookmark-o"></i></div>
            <div className="activity_ltem_body">
              <div className="activity_ltem_title">Anteckning</div>
              <div className="activity_ltem_time_name">13:22 25 April 2019 . by Nicklas</div>
              <div className="activity_ltem_content">Kund allmant trevlig, har lovat ett bra pris</div>
            </div>
          </div>
          <div className="activity_ltem">
            <div className="activity_ltem_icon"><i className="fa fa-bookmark-o"></i></div>
            <div className="activity_ltem_body">
              <div className="activity_ltem_title">Anteckning</div>
              <div className="activity_ltem_time_name">13:22 25 April 2019 . by Nicklas</div>
              <div className="activity_ltem_content">Kund allmant trevlig, har lovat ett bra pris</div>
            </div>
          </div>
          <div className="activity_ltem">
            <div className="activity_ltem_icon"><i className="fa fa-bookmark-o"></i></div>
            <div className="activity_ltem_body">
              <div className="activity_ltem_title">Anteckning</div>
              <div className="activity_ltem_time_name">13:22 25 April 2019 . by Nicklas</div>
              <div className="activity_ltem_content">Kund allmant trevlig, har lovat ett bra pris</div>
            </div>
          </div>
          <div className="activity_ltem">
            <div className="activity_ltem_icon"><i className="fa fa-bookmark-o"></i></div>
            <div className="activity_ltem_body">
              <div className="activity_ltem_title">Anteckning</div>
              <div className="activity_ltem_time_name">13:22 25 April 2019 . by Nicklas</div>
              <div className="activity_ltem_content">Kund allmant trevlig, har lovat ett bra pris</div>
            </div>
          </div>
          <div className="activity_ltem">
            <div className="activity_ltem_icon"><i className="fa fa-bookmark-o"></i></div>
            <div className="activity_ltem_body">
              <div className="activity_ltem_title">Anteckning</div>
              <div className="activity_ltem_time_name">13:22 25 April 2019 . by Nicklas</div>
              <div className="activity_ltem_content">Kund allmant trevlig, har lovat ett bra pris</div>
            </div>
          </div>
          <div className="activity_ltem_show_all">
            Show All
          </div>
        </div>
      </StyledContainer>
    );
  }
};

export default ActivityNote;