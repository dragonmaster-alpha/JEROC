import React from "react";
import 'react-rangeslider/lib/index.css'
import styled from "styled-components";
import TextField from '@material-ui/core/TextField';

const StyledContainer = styled.div`
  .main_contact_person{
    background-color: white;
    border: 1px solid lightgrey;    
    padding: 15px;
    .main_contact_person_top{
      border-bottom: 1px solid lightgrey;
      padding-bottom: 10px;
      margin-bottom: 10px;
      display: flex;
      font-weight: bold;
      font-size: 1rem;
      .btn_add{
        cursor: pointer;
        i{
          margin-right: 10px;
          color: #79c2b1;
        }
      }
      .btn_remove{
        cursor: pointer;
        margin-left: 30px;
        i{
          margin-right: 10px;
          color: #e18e7f;
        }
      }
    }
    .main_contact_person_left{
      height: 340px;
      overflow: auto;
      .avatar_item.active{
        border: 1px solid lightgrey;
        cursor: pointer;
      }
      .avatar_item{
        cursor: pointer;
        display: flex;
        align-items: center;
        margin-bottom: 15px;
        border: 1px solid white;
        .avatar_item_img{
          padding-bottom: 20px;
          img{
            width: 40px;
          }
        }
        .avatar_item_content{
          margin-left: 10px;
          font-weight: bold;
          .avatar_item_title{
            color: #0f6fc6;
          }
          .avatar_item_time{
            color: gray;
          }
          .avatar_item_subtitle{
            font-size: 0.7rem;
          }
        }
      }
    }
    .main_contact_person_right{      
      border-left: 1px solid lightgrey;
      .contact_person_form_row{
        align-items: center;
        margin-bottom: 10px;
        .contact_person_form_title{
          color: #0f6fc6;
          font-weight: bold;
          text-align: right;
          padding-right: 0px;
          font-size: 0.8rem;
        }
        .contact_person_form_component{

        }
      }
    }
  }
  .sub_title {
    color: #0f86d7;
    font-size: 0.9rem;
    font-weight: bold;
    margin-bottom: 10px;
  }
  .notes_area {
    width: 100%;
    padding: 3px;
    background-color: white;
  }
  .save_note {
    text-align: right;
    margin: 3px;
  }
`;

class Note extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedContactIndex : 0,
      contactList : [
        {
          title: "Anteckning",
          time: "13:22 Apr 2020, by John",
          detail: "Note detail here"
        },
        {
          title: "Anteckning",
          time: "13:22 Apr 2020, by John",
          detail: "Note detail here"
        },
        {
          title: "Anteckning",
          time: "13:22 Apr 2020, by John",
          detail: "Note detail here"
        },
        {
          title: "Anteckning",
          time: "13:22 Apr 2020, by John",
          detail: "Note detail here"
        },
        {
          title: "Anteckning",
          time: "13:22 Apr 2020, by John",
          detail: "Note detail here"
        },
        {
          title: "Anteckning",
          time: "13:22 Apr 2020, by John",
          detail: "Note detail here"
        },
        {
          title: "Anteckning",
          time: "13:22 Apr 2020, by John",
          detail: "Note detail here"
        },
        {
          title: "Anteckning",
          time: "13:22 Apr 2020, by John",
          detail: "Note detail here"
        },
        {
          title: "Anteckning",
          time: "13:22 Apr 2020, by John",
          detail: "Note detail here"
        },
        {
          title: "Anteckning",
          time: "13:22 Apr 2020, by John",
          detail: "Note detail here"
        },
        {
          title: "Anteckning",
          time: "13:22 Apr 2020, by John",
          detail: "Note detail here"
        },
        {
          title: "Anteckning",
          time: "13:22 Apr 2020, by John",
          detail: "Note detail here"
        },
      ]
    };
  }
  componentDidMount(){
  }

  componentDidUpdate(prevProps){
  }

  render() {
    return (
      <StyledContainer>
        <div className="sub_title">
          Notes
        </div>
        <TextField
          id="outlined-multiline-static"
          label="Notes"
          multiline
          rows={4}
          variant="outlined"
          className="notes_area"
        />
        <div className="save_note">
          <div className="btn btn-primary">Save Note</div>
        </div>
        <div className="main_contact_person">          
          <div className="row">
            <div className="col-md-12 main_contact_person_left">
              {
                this.state.contactList.map((item, index)=>{
                  return <div className={"avatar_item" + (this.state.selectedContactIndex == index ? " active" : "")} onClick={() => {
                    this.setState({
                      ...this.state,
                      selectedContactIndex: index
                    })
                  }}>
                    <div className="avatar_item_img"><img class="rounded" src="../assets/images/note.jpg" alt="avatar" /></div>
                    <div className="avatar_item_content">
                      <div className="avatar_item_title">{item.title}</div>
                      <div className="avatar_item_time">{item.time}</div>
                      <div className="avatar_item_subtitle">{item.detail}</div>
                    </div>
                  </div>
                })
              }
            </div>
          </div>
        </div>
      </StyledContainer>
    );
  }
};

export default Note;