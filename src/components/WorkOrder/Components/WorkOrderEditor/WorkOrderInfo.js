import React from "react";
import 'react-rangeslider/lib/index.css';
import styled from "styled-components";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const StyledContainer = styled.div`
  height: 100%;
  .sub_title{
    color: #0f86d7;
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 10px;
    padding-left: 10px;
  }
  .mini_title{
    color: #0f86d7;
    font-size: 0.9rem;
    font-weight: bold;
    margin-bottom: 10px;
    padding-left: 10px;
  }
  .main_field{
    background-color: white;
    padding: 25px;
    height: 100%;
    border-left: 1px solid lightgrey;
    border-right: 1px solid lightgrey;
    border-bottom: 1px solid lightgrey;
    font-weight: bold;
    .slider_field{
      align-items: center;
    }
    .second_field{
      color: lightgray;
    }
    .row{
      .row{
        margin-bottom: 10px;
      }
    }
  }
  .billing_main{
    background-color: white;
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
      .billing_main_form_row{
        align-items: center;
        margin-bottom: 20px;
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
  .workorder-right {
    border-left: 1px solid lightgray;
  }
  .text_main {
    font-size: 0.9rem;
    font-weight: 400;
  }
  .text_sub {
    font-size: 0.7rem;
    font-weight: 400;
  }
  .article_text{
    font-size: 0.9rem;
  }
  .article_sub_text{
      font-size: 0.7rem;
      font-weight: 400;
  }
  .article_uploading_img{
      font-size: 3rem;   
      font-weight: 400;
  }
  .article_uploading_title{
      font-size: 0.7rem;
      font-weight: 400;
  }
  .article_uploading_text{
      font-size: 0.5rem;
      font-weight: 400;
  }
`;

class WorkOrderInfo extends React.Component {
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
          <div className="row">
            <div className="sub_title">
              Workorder Info
            </div>
          </div>
          <div className="billing_main row">
            <div className="col-md-7">
              <div className="row">
                <div className="col-md-12 billing_main_right">
                  <div className="row billing_main_form_row">
                    <div className="col-md-2 billing_main_form_title">Objekt:</div>
                    <div className="col-md-8 billing_main_form_component">
                      <input type="text" className="form-control" placeholder="" />
                    </div>
                    <div className="col-md-2">
                      <div className="btn btn-primary">Edit</div>
                    </div>
                  </div>
                  <div className="row billing_main_form_row">
                    <div className="col-md-2 billing_main_form_title">Fakturaddres:</div>
                    <div className="col-md-8 billing_main_form_component">
                      <input type="text" className="form-control" placeholder="" />
                    </div>
                    <div className="col-md-2">
                      <div className="btn btn-primary">Edit</div>
                    </div>
                  </div>
                  <div className="row billing_main_form_row">
                    <div className="col-md-2 billing_main_form_title">Kontakperson:</div>
                    <div className="col-md-8 billing_main_form_component">
                      <input type="text" className="form-control" placeholder="" />
                    </div>
                    <div className="col-md-2">
                      <div className="btn btn-primary">Edit</div>
                    </div>
                  </div>
                  <div className="row billing_main_form_row">
                    <div className="col-md-2 billing_main_form_title">Besokadres:</div>
                    <div className="col-md-8 billing_main_form_component">
                      <input type="text" className="form-control" placeholder="" />
                    </div>
                    <div className="col-md-2">
                      <div className="btn btn-primary">Edit</div>
                    </div>
                  </div>
                  <div className="row billing_main_form_row">
                    <div className="col-md-2 billing_main_form_title">Postort:</div>
                    <div className="col-md-8 billing_main_form_component">
                      <input type="text" className="form-control" placeholder="" />
                    </div>
                    <div className="col-md-2">
                      <div className="btn btn-primary">Edit</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5 workorder-right">
              <div className="row">
                <div className="mini_title">
                  Invoice as
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <FormControlLabel
                    control={<Checkbox name="checkedB" color="primary" />}
                    label="Email as PDF"
                  />
                </div>
                <div className="col-md-4">
                  <FormControlLabel
                    control={<Checkbox name="checkedB" color="primary" />}
                    label="Email as Link"
                  />
                </div>
                <div className="col-md-4">
                  <FormControlLabel
                    control={<Checkbox name="checkedB" color="primary" />}
                    label="PaperPost"
                  />
                </div>
                <div className="col-md-12">
                  <FormControlLabel
                    control={<Checkbox name="checkedB" color="primary" />}
                    label="Kivra"
                  />
                </div>
                <div className="col-md-4">
                  <FormControlLabel
                    control={<Checkbox name="checkedB" color="primary" />}
                    label="Send book sms"
                  />
                </div>
                <div className="col-md-8">
                  <FormControlLabel
                    control={<Checkbox name="checkedB" color="primary" />}
                    label="Send booking E-mail"
                  />
                </div>
                <div className="col-md-12">
                  <FormControlLabel
                    control={<Checkbox name="checkedB" color="primary" />}
                    label="fraga om Rot"
                  />
                </div>
              </div>
            </div>
          </div>          
          <div className="row">
            <div className="col-md-6">
              <div className="text_main">Ert Ordernummer</div>
              <input type="text" className="form-control"/>
              <div className="text_main mt-2">beskrivning</div>
              <textarea className="form-control" style={{height:"250px"}}></textarea>
            </div>            
            <div className="col-md-6">
              <div className="text_main">jobbkategori</div>
              <select className="form-control">
                <option>Standard</option>
              </select>
              <div className="text_main mt-2">Utforare</div>
              <div className="border"  style={{height:"250px"}}>
                <div className="d-flex justify-content-between border-bottom mt-2 pb-1 ml-2 mr-2">
                  <div className="text_sub">Nicklas Juhlin Rosen</div>
                  <div className="text_sub"><i className="fa fa-times"></i></div>
                </div>
                <div className="d-flex justify-content-between border-bottom mt-2 pb-1 ml-2 mr-2">
                  <div className="text_sub">Nicklas Juhlin Rosen</div>
                  <div className="text_sub"><i className="fa fa-times"></i></div>
                </div>
                <div className="d-flex justify-content-between border-bottom mt-2 pb-1 ml-2 mr-2">
                  <div className="text_sub">Nicklas Juhlin Rosen</div>
                  <div className="text_sub"><i className="fa fa-times"></i></div>
                </div>
                <div className="d-flex justify-content-between border-bottom mt-2 pb-1 ml-2 mr-2">
                  <div className="text_sub">Nicklas Juhlin Rosen</div>
                  <div className="text_sub"><i className="fa fa-times"></i></div>
                </div>
                <div className="d-flex justify-content-between border-bottom mt-2 pb-1 ml-2 mr-2">
                  <div className="text_sub">Nicklas Juhlin Rosen</div>
                  <div className="text_sub"><i className="fa fa-times"></i></div>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="bg-light text-dark border m-3 p-3">
              <div className="d-flex justify-content-between">
                <div className="d-flex">
                  <div className="text_main"><i className="fa fa-plus-circle text-success"></i> Add Material Service</div>
                  <div className="text_main ml-2"><i className="fa fa-minus-circle text-danger"></i> Remove Material Service</div>
                </div>
                <div>
                  Show Tax
                </div>
              </div>
              <div>
                <table className="table">
                  <thead>
                      <tr className="">
                        <th className="bg-light text_main">Item Code</th>
                        <th className="bg-light text_main">Item Name</th>
                        <th className="bg-light text_main">Qty</th>
                        <th className="bg-light text_main">Price inc Tax</th>
                        <th className="bg-light text_main">Total inc Tax</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td className="text-dark text_main border pt-0 pb-0">
                            <select className="form-control">
                              <option></option>
                            </select>  
                          </td>
                          <td className="text-dark text_main border pt-0 pb-0">Item Name</td>
                          <td className="text-dark text_main border pt-0 pb-0">15</td>
                          <td className="text-dark text_main border pt-0 pb-0">TT$0.0</td>
                          <td className="text-dark text_main border pt-0 pb-0">TT$0.0</td>
                      </tr>
                      <tr>
                          <td className="text-dark text_main border pt-0 pb-0">
                            <select className="form-control">
                              <option></option>
                            </select>  
                          </td>
                          <td className="text-dark text_main border pt-0 pb-0">Item Name</td>
                          <td className="text-dark text_main border pt-0 pb-0">15</td>
                          <td className="text-dark text_main border pt-0 pb-0">TT$0.0</td>
                          <td className="text-dark text_main border pt-0 pb-0">TT$0.0</td>
                      </tr>
                      <tr>
                          <td className="text-dark text_main border pt-0 pb-0">
                            <select className="form-control">
                              <option></option>
                            </select>  
                          </td>
                          <td className="text-dark text_main border pt-0 pb-0">Item Name</td>
                          <td className="text-dark text_main border pt-0 pb-0">15</td>
                          <td className="text-dark text_main border pt-0 pb-0">TT$0.0</td>
                          <td className="text-dark text_main border pt-0 pb-0">TT$0.0</td>
                      </tr>
                      <tr>
                          <td className="text-dark text_main border pt-0 pb-0">
                            <select className="form-control">
                              <option></option>
                            </select>  
                          </td>
                          <td className="text-dark text_main border pt-0 pb-0">Item Name</td>
                          <td className="text-dark text_main border pt-0 pb-0">15</td>
                          <td className="text-dark text_main border pt-0 pb-0">TT$0.0</td>
                          <td className="text-dark text_main border pt-0 pb-0">TT$0.0</td>
                      </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-3" style={{width:"300px"}}>                
                <div className="text_main">Uppskattad Tidsafgang (antal tim)</div>
                <input type="text" className="form-control"/>
              </div>
              <div className="p-3 bg-white text-dark m-3 d-flex">
                  <div className="w-100 bg-white text-dark m-2 p-2">
                      <div className="">
                              <div className="article_text">Uploading Files</div>
                              <div className="custom-file mt-2 mb-2">
                                  <input type="file" class="custom-file-input" id="customFile" />
                                  <label className="custom-file-label" for="customFile">Choose file</label>
                              </div>
                              <div className="d-flex justify-content-center mt-4">
                                  <div className="btn btn-success">Start Upload</div>
                              </div>
                      </div>
                  </div>
                  <div className="w-100 bg-white text-dark m-2 p-2">
                      <div className="">
                          <div className="article_sub_text">Uploading List</div>
                          <div className="mt-2 d-flex align-items-center border-bottom">
                              <div className="article_uploading_img"><i className="fa fa-file"></i></div>
                              <div className="w-100 ml-2">
                                  <div className="d-flex align-items-center justify-content-between w-100">
                                      <div className="d-flex align-items-center">
                                          <div className="article_uploading_title">Photo.png</div>
                                          <div className="article_uploading_text ml-3">2min</div>
                                      </div>
                                      <div className="article_uploading_text"><i className="fa fa-times"></i></div>
                                  </div>
                                  <div className="progress w-100 mt-1 mb-1" style={{height:"10px"}}>
                                      <div className="progress-bar" style={{width:"70%"}}></div>
                                  </div>                                                
                                  <div className="d-flex align-items-center justify-content-between w-100">
                                      <div className="article_uploading_text">70% done</div>
                                      <div className="article_uploading_text">12.12M/bps</div>
                                  </div>
                              </div>
                          </div>
                          <div className="mt-2 d-flex align-items-center border-bottom">
                              <div className="article_uploading_img"><i className="fa fa-file"></i></div>
                              <div className="w-100 ml-2">
                                  <div className="d-flex align-items-center justify-content-between w-100">
                                      <div className="d-flex align-items-center">
                                          <div className="article_uploading_title">Photo.png</div>
                                          <div className="article_uploading_text ml-3">2min</div>
                                      </div>
                                      <div className="article_uploading_text"><i className="fa fa-times"></i></div>
                                  </div>
                                  <div className="progress w-100 mt-1 mb-1" style={{height:"10px"}}>
                                      <div className="progress-bar" style={{width:"70%"}}></div>
                                  </div>                                                
                                  <div className="d-flex align-items-center justify-content-between w-100">
                                      <div className="article_uploading_text">70% done</div>
                                      <div className="article_uploading_text">12.12M/bps</div>
                                  </div>
                              </div>
                          </div>
                          <div className="mt-2 d-flex align-items-center border-bottom">
                              <div className="article_uploading_img"><i className="fa fa-file"></i></div>
                              <div className="w-100 ml-2">
                                  <div className="d-flex align-items-center justify-content-between w-100">
                                      <div className="d-flex align-items-center">
                                          <div className="article_uploading_title">Photo.png</div>
                                          <div className="article_uploading_text ml-3">2min</div>
                                      </div>
                                      <div className="article_uploading_text"><i className="fa fa-times"></i></div>
                                  </div>
                                  <div className="progress w-100 mt-1 mb-1" style={{height:"10px"}}>
                                      <div className="progress-bar" style={{width:"70%"}}></div>
                                  </div>                                                
                                  <div className="d-flex align-items-center justify-content-between w-100">
                                      <div className="article_uploading_text">70% done</div>
                                      <div className="article_uploading_text">12.12M/bps</div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </StyledContainer>
    );
  }
};

export default WorkOrderInfo;