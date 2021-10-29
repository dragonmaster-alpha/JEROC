import React from "react";
import 'react-rangeslider/lib/index.css'
import styled from "styled-components";

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
  .title{
    color: #0f86d7;
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 10px;
  }
`;

class CustomerContactPersons extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedContactIndex : 0,
      contactList : [
        {
          firstName: "Caroline1",
          lastName: "Juhlin1",
          roll: "Mor1"
        },
        {
          firstName: "Caroline2",
          lastName: "Juhlin2",
          roll: "Mor2"
        },
        {
          firstName: "Caroline3",
          lastName: "Juhlin3",
          roll: "Mor3"
        },
        {
          firstName: "Caroline",
          lastName: "Juhlin",
          roll: "Mor"
        },
        {
          firstName: "Caroline",
          lastName: "Juhlin",
          roll: "Mor"
        },
        {
          firstName: "Caroline",
          lastName: "Juhlin",
          roll: "Mor"
        },
        {
          firstName: "Caroline",
          lastName: "Juhlin",
          roll: "Mor"
        },
        {
          firstName: "Caroline",
          lastName: "Juhlin",
          roll: "Mor"
        },
        {
          firstName: "Caroline",
          lastName: "Juhlin",
          roll: "Mor"
        },
        {
          firstName: "Caroline",
          lastName: "Juhlin",
          roll: "Mor"
        },
        {
          firstName: "Caroline",
          lastName: "Juhlin",
          roll: "Mor"
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
        <div className="title">
          Customer Contact Persons
        </div>
        <div className="main_contact_person">          
          <div className="main_contact_person_top">
            <div className="btn_add"><i className="fa fa-plus-circle"></i>My kontakt</div>
            <div className="btn_remove"><i className="fa fa-minus-circle"></i>Ta bort kontakt</div>
          </div>          
          <div className="row">
            <div className="col-md-4 main_contact_person_left">
              {
                this.state.contactList.map((item, index)=>{
                  return <div className={"avatar_item" + (this.state.selectedContactIndex == index ? " active" : "")} onClick={() => {
                    this.setState({
                      ...this.state,
                      selectedContactIndex: index
                    })
                  }}>
                    <div className="avatar_item_img"><img class="rounded" src="../assets/images/xs/avatar4.jpg" alt="avatar" /></div>
                    <div className="avatar_item_content">
                      <div className="avatar_item_title">{item.firstName} {item.lastName}</div>
                      <div className="avatar_item_subtitle">{item.roll}</div>
                    </div>
                  </div>
                })
              }
            </div>
            {this.state.selectedContactIndex != null && 
            <div className="col-md-8 main_contact_person_right">
              <div className="row contact_person_form_row">
                <div className="col-md-3 contact_person_form_title">Namn:</div>
                <div className="col-md-9 contact_person_form_component">
                  <div className="row">
                    <div className="col-md-6"><input type="text" className="form-control" placeholder="First Name" onChange={(event) => { 
                    var contactList = this.state.contactList;
                    contactList[this.state.selectedContactIndex].firstName = event.target.value;
                    this.setState({
                      ...this.state,
                      contactList: contactList
                    })
                  }}  value={this.state.contactList[this.state.selectedContactIndex].firstName}/></div>
                    <div className="col-md-6"><input type="text" className="form-control" placeholder="Last Name" onChange={(event) => { 
                    var contactList = this.state.contactList;
                    contactList[this.state.selectedContactIndex].lastName = event.target.value;
                    this.setState({
                      ...this.state,
                      contactList: contactList
                    })
                  }}  value={this.state.contactList[this.state.selectedContactIndex].lastName} /></div>
                  </div>
                </div>
              </div>
              <div className="row contact_person_form_row">
                <div className="col-md-3 contact_person_form_title">Email:</div>
                <div className="col-md-9 contact_person_form_component">
                  <input type="email" className="form-control" placeholder="Email" />
                </div>
              </div>
              <div className="row contact_person_form_row ">
                <div className="col-md-3 contact_person_form_title">Mobile:</div>
                <div className="col-md-9 contact_person_form_component">
                  <input type="email" className="form-control" placeholder="Mobile" />
                </div>
              </div>
              <div className="row contact_person_form_row align-items-start">
                <div className="col-md-3 contact_person_form_title">Address:</div>
                <div className="col-md-9 contact_person_form_component">
                  <textarea className="form-control"></textarea>
                </div>
              </div>
              <div className="row contact_person_form_row">
                <div className="col-md-3 contact_person_form_title">Roll:</div>
                <div className="col-md-9 contact_person_form_component">
                  <input type="text" className="form-control" placeholder="Roll" onChange={(event) => { 
                    var contactList = this.state.contactList;
                    contactList[this.state.selectedContactIndex].roll = event.target.value;
                    this.setState({
                      ...this.state,
                      contactList: contactList
                    })
                  }} value={this.state.contactList[this.state.selectedContactIndex].roll}/>
                </div>
              </div>
              <div className="row contact_person_form_row">
                <div className="col-md-3 contact_person_form_title">Ovrigt:</div>
                <div className="col-md-9 contact_person_form_component">
                  <input type="text" className="form-control" placeholder="Ovrigt" />
                </div>
              </div>
              <div className="row contact_person_form_row">
                <div className="col-md-3 contact_person_form_title">Faktura alt:</div>
                <div className="col-md-9 contact_person_form_component">
                  <select className="form-control">
                    <option value="1">Option1</option>
                    <option value="2">Option2</option>
                    <option value="3">Option3</option>
                    <option value="4">Option4</option>
                  </select>
                </div>
              </div>
            </div>}
            {this.state.selectedContactIndex == null && 
            <div className="col-md-8 main_contact_person_right">
              <div className="row contact_person_form_row">
                <div className="col-md-3 contact_person_form_title">Namn:</div>
                <div className="col-md-9 contact_person_form_component">
                  <div className="row">
                    <div className="col-md-6"><input type="text" className="form-control" placeholder="First Name"/></div>
                    <div className="col-md-6"><input type="text" className="form-control" placeholder="Last Name" /></div>
                  </div>
                </div>
              </div>
              <div className="row contact_person_form_row">
                <div className="col-md-3 contact_person_form_title">Email:</div>
                <div className="col-md-9 contact_person_form_component">
                  <input type="email" className="form-control" placeholder="Email" />
                </div>
              </div>
              <div className="row contact_person_form_row ">
                <div className="col-md-3 contact_person_form_title">Mobile:</div>
                <div className="col-md-9 contact_person_form_component">
                  <input type="email" className="form-control" placeholder="Mobile" />
                </div>
              </div>
              <div className="row contact_person_form_row align-items-start">
                <div className="col-md-3 contact_person_form_title">Address:</div>
                <div className="col-md-9 contact_person_form_component">
                  <textarea className="form-control"></textarea>
                </div>
              </div>
              <div className="row contact_person_form_row">
                <div className="col-md-3 contact_person_form_title">Roll:</div>
                <div className="col-md-9 contact_person_form_component">
                  <input type="text" className="form-control" placeholder="Roll" />
                </div>
              </div>
              <div className="row contact_person_form_row">
                <div className="col-md-3 contact_person_form_title">Ovrigt:</div>
                <div className="col-md-9 contact_person_form_component">
                  <input type="text" className="form-control" placeholder="Ovrigt" />
                </div>
              </div>
              <div className="row contact_person_form_row">
                <div className="col-md-3 contact_person_form_title">Faktura alt:</div>
                <div className="col-md-9 contact_person_form_component">
                  <select className="form-control">
                    <option value="1">Option1</option>
                    <option value="2">Option2</option>
                    <option value="3">Option3</option>
                    <option value="4">Option4</option>
                  </select>
                </div>
              </div>
            </div>}
          </div>
        </div>
      </StyledContainer>
    );
  }
};

export default CustomerContactPersons;