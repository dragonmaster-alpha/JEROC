import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import ReactApexChart from "react-apexcharts";
import FileList from "./file_list";

const StyledContainer = styled.div`
    .search_field
    {
      color: white; 
      input{                    
        background-color: white;
        color: white;
        border: none;      
        border-radius: 0px;
      }
      input::placeholder {
        color: white; 
      }
      input:focus {
        color: white; 
      }
      .input-group-append{
          background-color: white;
          border: none;
          border-radius: 0px;
      }
      .input-group-text{
          border: none;          
          border-radius: 0px;
      }
    }
    .select_list{
      cursor: pointer;
    }
    .select_list.active{
      background-color: #eeeeee!important;
      color: #007bff!important;
    }
    .top_bar{
      .seperator{
        border-left: 1px solid;
      }
      color: #0f6fc6;
      font-size: 0.7rem;
      margin-bottom: 0px!important;
    }
`;
class CustomerDetailsFiles extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showFileMode : 1  // 0 : thumbnail, 1 : list
    };
  }
  render() {
    return (
        <StyledContainer>  
          <div className="row mt-3  font-weight-bold">
            <div className="col-md-2">
              <div className="">
                <div className="bg-primary search_field border-light border">
                  <div className="input-group">
                      <input type="text" className="form-control bg-primary" placeholder="Search Here" />
                      <div className="input-group-append bg-primary">
                          <span className="input-group-text"><i className="fa fa-search text-white"></i></span>
                      </div>
                  </div>
                </div>
                <div className="select_list d-flex justify-content-between p-2 bg-white text-dark border-light border">
                  <span>One Drive</span>
                  <i className="fa fa-database"></i>
                </div>
                <div className="select_list d-flex justify-content-between p-2 bg-white text-dark border-light border active">
                  <span>Files</span>
                  <i className="fa fa-file-o"></i>
                </div>
                <div className="select_list d-flex justify-content-between p-2 bg-white text-dark border-light border">
                  <span>Recent</span>
                  <i className="fa fa-clock-o"></i>
                </div>
                <div className="select_list d-flex justify-content-between p-2 bg-white text-dark">
                  <span>Recycle Bin</span>
                  <i className="fa fa-trash-o"></i>
                </div>
              </div>
            </div>
            <div className="col-md-10">
              <div className="top_bar bg-white d-flex justify-content-between p-2">
                <div className="top_bar_left d-flex">
                  <div className="m-2">
                    <i className="fa fa-file-word-o  font-weight-bold"> Open</i>
                    <i className="fa fa-angle-down  font-weight-bold"></i>
                  </div>
                  <div className="sperator border-left border-primary mt-1 mb-1"></div>                  
                  <div className="m-2">
                    <i className="fa fa-share font-weight-bold"> Share</i>
                  </div>
                  <div className="sperator border-left border-primary mt-1 mb-1"></div>                  
                  <div className="m-2">
                    <i className="fa fa-download font-weight-bold"> Download</i>
                  </div>
                  <div className="sperator border-left border-primary mt-1 mb-1"></div>                  
                  <div className="m-2">
                    <i className="fa fa-trash  font-weight-bold"> Delete</i>
                  </div>
                  <div className="sperator border-left border-primary mt-1 mb-1"></div>                  
                  <div className="m-2">
                    <i className="fa fa-cut font-weight-bold"> MoveTo</i>
                  </div>
                  <div className="sperator border-left border-primary mt-1 mb-1"></div>                  
                  <div className="m-2">
                    <i className="fa fa-copy  font-weight-bold"> CopyTo</i>
                  </div>
                  <div className="sperator border-left border-primary mt-1 mb-1"></div>                  
                  <div className="m-2">
                    <i className="fa fa-edit font-weight-bold"> Rename</i>
                  </div>
                  <div className="sperator border-left border-primary mt-1 mb-1"></div>                  
                  <div className="m-2">
                    <i className="fa fa-code font-weight-bold"> Embed</i>
                  </div>
                  <div className="sperator border-left border-primary mt-1 mb-1"></div>                  
                  <div className="m-2">
                    <i className="fa fa-clock-o font-weight-bold"> Version History</i>
                  </div>
                </div>
                <div className="top_bar_right d-flex">
                  <div className="m-2">
                    <i className="fa fa-sort-amount-asc font-weight-bold"> Sort By</i>
                    <i className="fa fa-angle-down  font-weight-bold"></i>
                  </div>                  
                  <div className="sperator border-left border-primary mt-1 mb-1"></div>     
                  <div className="m-2" style={{cursor:"pointer"}} onClick = {() => {
                    this.setState({
                      ...this.state,
                      showFileMode : (this.state.showFileMode + 1) % 2
                    })
                  }}>
                    {this.state.showFileMode == 0 && <i className="fa fa-th-large font-weight-bold"></i>}
                    {this.state.showFileMode == 1 && <i className="fa fa-th-list font-weight-bold"></i>}
                  </div>                  
                  <div className="sperator border-left border-primary mt-1 mb-1"></div>     
                  <div className="m-2">
                    <i className="fa fa-plus font-weight-bold"> New</i>
                    <i className="fa fa-angle-down  font-weight-bold"></i>
                  </div>                  
                  <div className="sperator border-left border-primary mt-1 mb-1"></div>     
                  <div className="m-2">
                    <i className="fa fa-upload font-weight-bold"> Upload</i>
                    <i className="fa fa-angle-down  font-weight-bold"></i>
                  </div>                  
                  <div className="sperator border-left border-primary mt-1 mb-1"></div>     
                  <div className="m-2">
                    <span className="font-weight-light">1 selected </span>
                    <i className="fa fa-times font-weight-bold"></i>
                  </div>
                </div>
              </div>
              <div className="bg-white">
                <FileList showFileMode = {this.state.showFileMode}/>
              </div>
            </div>
          </div>
        </StyledContainer>
    );
  }
}
export default CustomerDetailsFiles
