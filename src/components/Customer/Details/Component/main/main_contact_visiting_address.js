import React from "react";
import 'react-rangeslider/lib/index.css'
import styled from "styled-components";

const StyledContainer = styled.div`
  .main_visiting_address{
    background-color: white;
    border: 1px solid lightgrey;    
    padding: 15px;
    .main_visiting_address_top{
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
    .main_visiting_address_left{
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
    .main_visiting_address_right{      
      border-left: 1px solid lightgrey;
      .visiting_address_form_row{
        align-items: center;
        margin-bottom: 10px;
        .visiting_address_form_title{
          color: #0f6fc6;
          font-weight: bold;
          text-align: right;
          padding-right: 0px;
          font-size: 0.8rem;
          .btn_add{            
            font-size:1rem;
            margin-right: 10px;
            color: #79c2b1;
          }
          .btn_remove{
            font-size:1rem;
            margin-right: 10px;
            color: #e18e7f;
          }
        }
        .visiting_address_form_component{

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

class CustomerVisitingAddress extends React.Component {
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
          Customer Visiting Addresses
        </div>
        <div className="main_visiting_address">          
          <div className="main_visiting_address_top">
            <div className="btn_add"><i className="fa fa-plus-circle"></i>My kontakt</div>
            <div className="btn_remove"><i className="fa fa-minus-circle"></i>Ta bort kontakt</div>
          </div>          
          <div className="row">
            <div className="col-md-4 main_visiting_address_left">
              <div className="avatar_item">
                <div className="avatar_item_img"><img class="rounded" src="../assets/images/login-img.png" alt="avatar" /></div>
                <div className="avatar_item_content">
                  <div className="avatar_item_title">Rostationsvag 1</div>
                  <div className="avatar_item_subtitle">Risby 2:23 (Ro)</div>
                </div>
              </div>
              <div className="avatar_item">
                <div className="avatar_item_img"><img class="rounded" src="../assets/images/login-img.png" alt="avatar" /></div>
                <div className="avatar_item_content">
                  <div className="avatar_item_title">Rostationsvag 1</div>
                  <div className="avatar_item_subtitle">Risby 2:23 (Ro)</div>
                </div>
              </div>
              <div className="avatar_item">
                <div className="avatar_item_img"><img class="rounded" src="../assets/images/login-img.png" alt="avatar" /></div>
                <div className="avatar_item_content">
                  <div className="avatar_item_title">Rostationsvag 1</div>
                  <div className="avatar_item_subtitle">Risby 2:23 (Ro)</div>
                </div>
              </div>
              <div className="avatar_item">
                <div className="avatar_item_img"><img class="rounded" src="../assets/images/login-img.png" alt="avatar" /></div>
                <div className="avatar_item_content">
                  <div className="avatar_item_title">Rostationsvag 1</div>
                  <div className="avatar_item_subtitle">Risby 2:23 (Ro)</div>
                </div>
              </div>
              <div className="avatar_item">
                <div className="avatar_item_img"><img class="rounded" src="../assets/images/login-img.png" alt="avatar" /></div>
                <div className="avatar_item_content">
                  <div className="avatar_item_title">Rostationsvag 1</div>
                  <div className="avatar_item_subtitle">Risby 2:23 (Ro)</div>
                </div>
              </div>
              <div className="avatar_item">
                <div className="avatar_item_img"><img class="rounded" src="../assets/images/login-img.png" alt="avatar" /></div>
                <div className="avatar_item_content">
                  <div className="avatar_item_title">Rostationsvag 1</div>
                  <div className="avatar_item_subtitle">Risby 2:23 (Ro)</div>
                </div>
              </div>
              <div className="avatar_item">
                <div className="avatar_item_img"><img class="rounded" src="../assets/images/login-img.png" alt="avatar" /></div>
                <div className="avatar_item_content">
                  <div className="avatar_item_title">Rostationsvag 1</div>
                  <div className="avatar_item_subtitle">Risby 2:23 (Ro)</div>
                </div>
              </div>
              <div className="avatar_item">
                <div className="avatar_item_img"><img class="rounded" src="../assets/images/login-img.png" alt="avatar" /></div>
                <div className="avatar_item_content">
                  <div className="avatar_item_title">Rostationsvag 1</div>
                  <div className="avatar_item_subtitle">Risby 2:23 (Ro)</div>
                </div>
              </div>
            </div>
            <div className="col-md-8 main_visiting_address_right">
              <div className="row visiting_address_form_row">
                <div className="col-md-3 visiting_address_form_title">Adresser:</div>
                <div className="col-md-9 visiting_address_form_component">
                  <input type="text" className="form-control" placeholder="Adresser" />
                </div>
              </div>
              <div className="row visiting_address_form_row">
                <div className="col-md-3 visiting_address_form_title">PostNr:</div>
                <div className="col-md-9 visiting_address_form_component">
                  <div className="row ">
                    <div className="col-md-12 d-flex align-items-center justify-content-between">
                      <div><input type="text" className="form-control" placeholder="" /></div>
                      <div className="visiting_address_form_title" style={{marginLeft:"5px", marginRight:"5px"}}>Ort</div>
                      <div><input type="text" className="form-control" placeholder="" /></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row visiting_address_form_row ">
                <div className="col-md-3 visiting_address_form_title">Typ:</div>
                <div className="col-md-9 visiting_address_form_component">
                  <select className="form-control">
                    <option value="1">Option1</option>
                    <option value="2">Option2</option>
                    <option value="3">Option3</option>
                    <option value="4">Option4</option>
                  </select>
                </div>
              </div>
              <div className="row visiting_address_form_row">
                <div className="col-md-3 visiting_address_form_title">Portkod:</div>
                <div className="col-md-9 visiting_address_form_component">
                  <input type="text" className="form-control" placeholder="" />
                </div>
              </div>
              <div className="row visiting_address_form_row">
                <div className="col-md-3 visiting_address_form_title">Fast. Bet:</div>
                <div className="col-md-9 visiting_address_form_component">
                  <input type="text" className="form-control" placeholder="" />
                </div>
              </div>
              <div className="row visiting_address_form_row">
                <div className="col-md-3 visiting_address_form_title">Brf. Org:</div>
                <div className="col-md-9 visiting_address_form_component">
                  <div className="row ">
                    <div className="col-md-12 d-flex align-items-center justify-content-between">
                      <div><input type="text" className="form-control" placeholder="" /></div>
                      <div className="visiting_address_form_title" style={{marginLeft:"5px", marginRight:"5px", width:"80px"}}>lgh Nr.</div>
                      <div><input type="text" className="form-control" placeholder="" /></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="row visiting_address_form_row">
                <div className="col-md-3 visiting_address_form_title">Agare/Fordeln.</div>
                <div className="col-md-9 visiting_address_form_component">
                  <div className="row ">
                    <div className="col-md-12 d-flex align-items-center justify-content-between">
                      <div><input type="text" className="form-control" placeholder="" /></div>
                      <div><input type="text" className="form-control" placeholder="" style={{marginLeft:"10px"}}/></div>
                      <div className="visiting_address_form_title" style={{width:"100px"}}>                        
                        <i className="btn_add fa fa-plus-circle"></i>
                        <i className="btn_remove fa fa-minus-circle"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="row visiting_address_form_row">
                <div className="col-md-3 visiting_address_form_title">Huvud-Konatkt:</div>
                <div className="col-md-9 visiting_address_form_component">
                  <input type="text" className="form-control" placeholder="" />
                </div>
              </div>

              <div className="row visiting_address_form_row">
                <div className="col-md-3 visiting_address_form_title">Ovrigt:</div>
                <div className="col-md-9 visiting_address_form_component">
                  <input type="text" className="form-control" placeholder="Ovrigt" />
                </div>
              </div>

              <div className="row visiting_address_form_row">
                <div className="col-md-3 visiting_address_form_title">Faktura alt:</div>
                <div className="col-md-9 visiting_address_form_component">
                  <select className="form-control">
                    <option value="1">Standard</option>
                    <option value="2">Option2</option>
                    <option value="3">Option3</option>
                    <option value="4">Option4</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </StyledContainer>
    );
  }
};

export default CustomerVisitingAddress;