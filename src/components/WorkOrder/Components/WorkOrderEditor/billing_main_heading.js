import React from "react";
import 'react-rangeslider/lib/index.css'
import styled from "styled-components";

const StyledContainer = styled.div`
  .billing_main{
    background-color: white;
    border: 1px solid lightgrey;    
    padding: 15px;
    .billing_main_top{
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
    .billing_main_left{
      height: 450px;
      overflow: auto;
      .avatar_item{
        cursor: pointer;
        display: flex;
        align-items: center;
        margin-bottom: 15px;
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
    .billing_main_right{      
      border-left: 1px solid lightgrey;
      .billing_main_form_row{
        align-items: center;
        margin-bottom: 10px;
        .billing_main_form_title{
          color: #0f6fc6;
          font-weight: bold;
          text-align: right;
          padding-right: 0px;
          font-size: 0.8rem;
          .btn_add{            
            font-size:1rem;
            margin-right: 10px;
            color: #79c2b1;
            margin-left: -20px;
          }
          .btn_remove{
            font-size:1rem;
            margin-right: 10px;
            color: #e18e7f;
          }
          .btn_info{
            font-size:1rem;
            color: #0f6fc6;
            margin-left: -20px;
          }
        }
        .billing_main_form_component{
          .input-group-prepend{
            .input-group-text{
              color: white;
              background-color: #0f6fc6;
            }
          }
          .input-group-append{
            .input-group-text{
              color: #0f6fc6;
              border: none;
              font-weight: bold;
            }
          }
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

class BillingMain extends React.Component {
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
          Main Heading
        </div>
        <div className="billing_main">          
          <div className="billing_main_top">
            <div className="btn_add"><i className="fa fa-plus-circle"></i>My kontakt</div>
            <div className="btn_remove"><i className="fa fa-minus-circle"></i>Ta bort kontakt</div>
          </div>          
          <div className="row">
            <div className="col-md-2 billing_main_left">
              <div className="avatar_item">
                <div className="avatar_item_img"><img class="rounded" src="../assets/images/xs/avatar4.jpg" alt="avatar" /></div>
                <div className="avatar_item_content">
                  <div className="avatar_item_title">Caroline Juhlin</div>
                  <div className="avatar_item_subtitle">Mor</div>
                </div>
              </div>
              <div className="avatar_item">
                <div className="avatar_item_img"><img class="rounded" src="../assets/images/xs/avatar4.jpg" alt="avatar" /></div>
                <div className="avatar_item_content">
                  <div className="avatar_item_title">Caroline Juhlin</div>
                  <div className="avatar_item_subtitle">Mor</div>
                </div>
              </div>
              <div className="avatar_item">
                <div className="avatar_item_img"><img class="rounded" src="../assets/images/xs/avatar4.jpg" alt="avatar" /></div>
                <div className="avatar_item_content">
                  <div className="avatar_item_title">Caroline Juhlin</div>
                  <div className="avatar_item_subtitle">Mor</div>
                </div>
              </div>
              <div className="avatar_item">
                <div className="avatar_item_img"><img class="rounded" src="../assets/images/xs/avatar4.jpg" alt="avatar" /></div>
                <div className="avatar_item_content">
                  <div className="avatar_item_title">Caroline Juhlin</div>
                  <div className="avatar_item_subtitle">Mor</div>
                </div>
              </div>
              <div className="avatar_item">
                <div className="avatar_item_img"><img class="rounded" src="../assets/images/xs/avatar4.jpg" alt="avatar" /></div>
                <div className="avatar_item_content">
                  <div className="avatar_item_title">Caroline Juhlin</div>
                  <div className="avatar_item_subtitle">Mor</div>
                </div>
              </div>
              <div className="avatar_item">
                <div className="avatar_item_img"><img class="rounded" src="../assets/images/xs/avatar4.jpg" alt="avatar" /></div>
                <div className="avatar_item_content">
                  <div className="avatar_item_title">Caroline Juhlin</div>
                  <div className="avatar_item_subtitle">Mor</div>
                </div>
              </div>
              <div className="avatar_item">
                <div className="avatar_item_img"><img class="rounded" src="../assets/images/xs/avatar4.jpg" alt="avatar" /></div>
                <div className="avatar_item_content">
                  <div className="avatar_item_title">Caroline Juhlin</div>
                  <div className="avatar_item_subtitle">Mor</div>
                </div>
              </div>
              <div className="avatar_item">
                <div className="avatar_item_img"><img class="rounded" src="../assets/images/xs/avatar4.jpg" alt="avatar" /></div>
                <div className="avatar_item_content">
                  <div className="avatar_item_title">Caroline Juhlin</div>
                  <div className="avatar_item_subtitle">Mor</div>
                </div>
              </div>
            </div>
            <div className="col-md-10 billing_main_right">
              <div className="row billing_main_form_row">
                <div className="col-md-2 billing_main_form_title">Postadress:</div>
                <div className="col-md-9 billing_main_form_component">
                  <input type="text" className="form-control" placeholder="" />
                </div>
              </div>
              <div className="row billing_main_form_row">
                <div className="col-md-2 billing_main_form_title"></div>
                <div className="col-md-9 billing_main_form_component">
                  <input type="text" className="form-control" placeholder="" />
                </div>
              </div>
              <div className="row billing_main_form_row">
                <div className="col-md-2 billing_main_form_title"></div>
                <div className="col-md-9 billing_main_form_component">
                  <input type="text" className="form-control" placeholder="" />
                </div>
              </div>
              <div className="row billing_main_form_row">
                <div className="col-md-2 billing_main_form_title">Postnr:</div>
                <div className="col-md-9 billing_main_form_component">
                  <input type="text" className="form-control" placeholder="" />
                </div>
              </div>
              <div className="row billing_main_form_row">
                <div className="col-md-2 billing_main_form_title">Postort:</div>
                <div className="col-md-9 billing_main_form_component">
                  <input type="text" className="form-control" placeholder="" />
                </div>
              </div>
              <div className="row billing_main_form_row ">
                <div className="col-md-2 billing_main_form_title">Land:</div>
                <div className="col-md-9 billing_main_form_component">
                  <select className="form-control">
                    <option value="1">Option1</option>
                    <option value="2">Option2</option>
                    <option value="3">Option3</option>
                    <option value="4">Option4</option>
                  </select>
                </div>
              </div>
              <div className="row billing_main_form_row">
                <div className="col-md-2 billing_main_form_title">GLN:</div>
                <div className="col-md-9 billing_main_form_component">
                  <input type="text" className="form-control" placeholder="" />
                </div>
              </div>
              <div className="row billing_main_form_row">
                <div className="col-md-2 billing_main_form_title">Momsregisterigsnr:</div>
                <div className="col-md-9 billing_main_form_component">
                  <input type="text" className="form-control" placeholder="" />
                </div>
              </div>
              <div className="row billing_main_form_row">
                <div className="col-md-2 billing_main_form_title">E-Postadres:</div>
                <div className="col-md-9 billing_main_form_component">
                  <input type="text" className="form-control" placeholder="" />
                </div>
                <div className="col-md-1 billing_main_form_title text-left">                        
                  <i className="btn_info fa fa-info-circle"></i>
                </div>
              </div>
              <div className="row billing_main_form_row">
                <div className="col-md-2 billing_main_form_title">E-Postkopia:</div>
                <div className="col-md-9 billing_main_form_component">
                  <input type="text" className="form-control" placeholder="" />
                </div>
                <div className="col-md-1 billing_main_form_title text-left">                        
                  <i className="btn_add fa fa-plus-circle"></i>
                  <i className="btn_remove fa fa-minus-circle"></i>
                </div>
              </div>
              <div className="row billing_main_form_row">
                <div className="col-md-2 billing_main_form_title">Telefonnummer:</div>
                <div className="col-md-9 billing_main_form_component">
                  <input type="text" className="form-control" placeholder="" />
                </div>
              </div>
              <div className="row billing_main_form_row">
                <div className="col-md-2 billing_main_form_title">Kontakt (er refrens):</div>
                <div className="col-md-9 billing_main_form_component">
                  <input type="text" className="form-control" placeholder="" />
                </div>
              </div>
              <div className="row billing_main_form_row">
                <div className="col-md-2 billing_main_form_title">Var refrens:</div>
                <div className="col-md-4 billing_main_form_component">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text"><i className="fa fa-user"></i></span>
                    </div>
                    <input type="text" className="form-control" />
                  </div>
                </div>
              </div>
              <div className="row billing_main_form_row">
                <div className="col-md-2 billing_main_form_title">Betainingsvilllkor:</div>
                <div className="col-md-4 billing_main_form_component">
                  <div className="input-group">
                    <input type="text" className="form-control" />
                    <div className="input-group-append">
                      <span className="input-group-text">dagar</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row billing_main_form_row ">
                <div className="col-md-2 billing_main_form_title">Prislista:</div>
                <div className="col-md-9 billing_main_form_component">
                  <select className="form-control">
                    <option value="1">Option1</option>
                    <option value="2">Option2</option>
                    <option value="3">Option3</option>
                    <option value="4">Option4</option>
                  </select>
                </div>
              </div>
              <div className="row billing_main_form_row ">
                <div className="col-md-2 billing_main_form_title">Valuta:</div>
                <div className="col-md-9 billing_main_form_component">
                  <select className="form-control">
                    <option value="1">Option1</option>
                    <option value="2">Option2</option>
                    <option value="3">Option3</option>
                    <option value="4">Option4</option>
                  </select>
                </div>
              </div>
              <div className="row billing_main_form_row ">
                <div className="col-md-2 billing_main_form_title">Fuktureras via:</div>
                <div className="col-md-9 billing_main_form_component">
                  <select className="form-control">
                    <option value="1">Option1</option>
                    <option value="2">Option2</option>
                    <option value="3">Option3</option>
                    <option value="4">Option4</option>
                  </select>
                </div>
              </div>
              <div className="row billing_main_form_row ">
                <div className="col-md-2 billing_main_form_title">Sprak:</div>
                <div className="col-md-9 billing_main_form_component">
                  <select className="form-control">
                    <option value="1">Option1</option>
                    <option value="2">Option2</option>
                    <option value="3">Option3</option>
                    <option value="4">Option4</option>
                  </select>
                </div>
              </div>

              <div className="row billing_main_form_row align-items-start">
                <div className="col-md-2 billing_main_form_title">Ovri Kommentar:</div>
                <div className="col-md-9 billing_main_form_component">
                  <textarea className="form-control"></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
      </StyledContainer>
    );
  }
};

export default BillingMain;