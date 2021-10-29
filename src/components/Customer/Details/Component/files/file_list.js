import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import ReactApexChart from "react-apexcharts";

const StyledContainer = styled.div`
  .file_details{
    .file_details_title{
      font-size: 0.7rem;
      color: grey;
    }
    .file_details_title1{
      font-size: 0.8rem;
      color: grey;
    }
    .file_details_subtitle{
      font-size: 0.5rem;
      color: lightgrey;
    }
  }
  .file_thumb_view{
    .file_list{
      margin: 10px;
      text-align: center;
      border: 1px solid white;
      cursor: pointer;
      i{
        font-size: 3rem;
        margin-bottom: 10px;
        color: #efce49;
      }    
      .file_details_title{
        font-size: 0.6rem;
        color: grey;
        margin-bottom: 10px;
        width: 100px;
      }
      .file_details_subtitle{
        font-size: 0.5rem;
        color: lightgrey;
      }
    }
    .file_list.active{
      border: 1px solid lightgrey;
    }
  }
  .file_list_view{
    td{
      text-align: left;
    }
    .file_list{
      margin: 10px;
      text-align: center;
      border: 1px solid white;
      cursor: pointer;
      .file_details_title{
        font-size: 0.6rem;
        color: grey;
        i{
          font-size: 1rem;
          color: #efce49;
        }    
      }
      .file_details_subtitle{
        font-size: 0.6rem;
        color: lightgrey;
      }
    }
    .file_list.active{
      td{
        background-color: lightgrey;
        .file_details_title{
          font-size: 0.6rem;
          color: black;
        }
        .file_details_subtitle{
          font-size: 0.6rem;
          color: black;
        }
      }
    }
  }
`;
class FileList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedFileIndex : null,
      fileList : [
        {
          fileName : "One Drive System",
          modified : "8 Jan 2019",
          sharing : "Private",
          size : "170MB"
        },
        {
          fileName : "One Drive System",
          modified : "8 Jan 2019",
          sharing : "Private",
          size : "170MB"
        },
        {
          fileName : "One Drive System",
          modified : "8 Jan 2019",
          sharing : "Private",
          size : "170MB"
        },
        {
          fileName : "One Drive System",
          modified : "8 Jan 2019",
          sharing : "Private",
          size : "170MB"
        },
        {
          fileName : "One Drive System",
          modified : "8 Jan 2019",
          sharing : "Private",
          size : "170MB"
        },
        {
          fileName : "One Drive System",
          modified : "8 Jan 2019",
          sharing : "Private",
          size : "170MB"
        },
        {
          fileName : "One Drive System",
          modified : "8 Jan 2019",
          sharing : "Private",
          size : "170MB"
        },
        {
          fileName : "One Drive System",
          modified : "8 Jan 2019",
          sharing : "Private",
          size : "170MB"
        },
        {
          fileName : "One Drive System",
          modified : "8 Jan 2019",
          sharing : "Private",
          size : "170MB"
        },
        {
          fileName : "One Drive System",
          modified : "8 Jan 2019",
          sharing : "Private",
          size : "170MB"
        },
        {
          fileName : "One Drive System",
          modified : "8 Jan 2019",
          sharing : "Private",
          size : "170MB"
        },
        {
          fileName : "One Drive System",
          modified : "8 Jan 2019",
          sharing : "Private",
          size : "170MB"
        },
        {
          fileName : "One Drive System",
          modified : "8 Jan 2019",
          sharing : "Private",
          size : "170MB"
        },
        {
          fileName : "One Drive System",
          modified : "8 Jan 2019",
          sharing : "Private",
          size : "170MB"
        },
        {
          fileName : "One Drive System",
          modified : "8 Jan 2019",
          sharing : "Private",
          size : "170MB"
        },
        {
          fileName : "One Drive System",
          modified : "8 Jan 2019",
          sharing : "Private",
          size : "170MB"
        },
        {
          fileName : "One Drive System",
          modified : "8 Jan 2019",
          sharing : "Private",
          size : "170MB"
        },
        {
          fileName : "One Drive System",
          modified : "8 Jan 2019",
          sharing : "Private",
          size : "170MB"
        },
        {
          fileName : "One Drive System",
          modified : "8 Jan 2019",
          sharing : "Private",
          size : "170MB"
        },
        {
          fileName : "One Drive System",
          modified : "8 Jan 2019",
          sharing : "Private",
          size : "170MB"
        },
        {
          fileName : "One Drive System",
          modified : "8 Jan 2019",
          sharing : "Private",
          size : "170MB"
        },
        {
          fileName : "One Drive System",
          modified : "8 Jan 2019",
          sharing : "Private",
          size : "170MB"
        },
        {
          fileName : "One Drive System",
          modified : "8 Jan 2019",
          sharing : "Private",
          size : "170MB"
        },
        {
          fileName : "One Drive System",
          modified : "8 Jan 2019",
          sharing : "Private",
          size : "170MB"
        },
        {
          fileName : "One Drive System",
          modified : "8 Jan 2019",
          sharing : "Private",
          size : "170MB"
        },
        {
          fileName : "One Drive System",
          modified : "8 Jan 2019",
          sharing : "Private",
          size : "170MB"
        },
        {
          fileName : "One Drive System",
          modified : "8 Jan 2019",
          sharing : "Private",
          size : "170MB"
        },
        {
          fileName : "One Drive System",
          modified : "8 Jan 2019",
          sharing : "Private",
          size : "170MB"
        },
        {
          fileName : "One Drive System",
          modified : "8 Jan 2019",
          sharing : "Private",
          size : "170MB"
        },
        {
          fileName : "One Drive System",
          modified : "8 Jan 2019",
          sharing : "Private",
          size : "170MB"
        },
        {
          fileName : "One Drive System",
          modified : "8 Jan 2019",
          sharing : "Private",
          size : "170MB"
        },
        {
          fileName : "One Drive System",
          modified : "8 Jan 2019",
          sharing : "Private",
          size : "170MB"
        },
        {
          fileName : "One Drive System",
          modified : "8 Jan 2019",
          sharing : "Private",
          size : "170MB"
        },
        {
          fileName : "One Drive System",
          modified : "8 Jan 2019",
          sharing : "Private",
          size : "170MB"
        },
        {
          fileName : "One Drive System",
          modified : "8 Jan 2019",
          sharing : "Private",
          size : "170MB"
        },
        {
          fileName : "One Drive System",
          modified : "8 Jan 2019",
          sharing : "Private",
          size : "170MB"
        },
        {
          fileName : "One Drive System",
          modified : "8 Jan 2019",
          sharing : "Private",
          size : "170MB"
        },
        {
          fileName : "One Drive System",
          modified : "8 Jan 2019",
          sharing : "Private",
          size : "170MB"
        },
        {
          fileName : "One Drive System",
          modified : "8 Jan 2019",
          sharing : "Private",
          size : "170MB"
        },
        {
          fileName : "One Drive System",
          modified : "8 Jan 2019",
          sharing : "Private",
          size : "170MB"
        },
        {
          fileName : "One Drive System",
          modified : "8 Jan 2019",
          sharing : "Private",
          size : "170MB"
        },
        {
          fileName : "One Drive System",
          modified : "8 Jan 2019",
          sharing : "Private",
          size : "170MB"
        },
        {
          fileName : "One Drive System",
          modified : "8 Jan 2019",
          sharing : "Private",
          size : "170MB"
        }
      ]
    };
  }


  render() {
    return (
        <StyledContainer>            
          <div className="row">
            <div className="col-md-9">
              <div className="m-3 font-weight-bold text-primary">Files</div>
              {this.props.showFileMode == 0 && <div className="file_thumb_view d-flex justify-content-center">
                <div className="d-flex flex-wrap">
                  {this.state.fileList.map((item, index) => {
                    return <div className={"file_list" + (this.state.selectedFileIndex == index ? " active" : "")} onClick={() => {
                      this.setState({
                        ...this.state,
                        selectedFileIndex : index
                      })
                    }}>
                      <div><i className="fa fa-folder"></i></div>
                      <div className="file_details_title">{item.fileName}</div>
                      <div className="file_details_subtitle">{item.modified}</div>
                    </div>
                  })}
                </div>
              </div>}
              
              {this.props.showFileMode == 1 && 
                <div className="file_list_view">
                  <table class="table table-bordered ">
                    <thead>
                    <tr>
                        <th className="bg-primary text-white">
                          <i className="fa fa-book  font-weight-bold"> Name&nbsp;&nbsp;</i>
                          <i className="fa fa-long-arrow-up  font-weight-bold">&nbsp;&nbsp;</i>
                          <i className="fa fa-angle-down  font-weight-bold"></i>
                        </th>
                        <th className="bg-primary text-white">Modified</th>
                        <th className="bg-primary text-white">Sharing</th>
                        <th className="bg-primary text-white">Size</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.fileList.map((item, index) => {
                      return <tr className={"file_list" + (this.state.selectedFileIndex == index ? " active" : "")} onClick={() => {
                        this.setState({
                          ...this.state,
                          selectedFileIndex : index
                        })
                      }}>
                        <td><div className="file_details_title"><i className="fa fa-folder"></i>&nbsp;&nbsp;{item.fileName}</div></td>
                        <td><div className="file_details_subtitle">{item.modified}</div></td>
                        <td><div className="file_details_subtitle">{item.sharing}</div></td>
                        <td><div className="file_details_subtitle">{item.size}</div></td>
                      </tr>
                    })}
                    </tbody>
                  </table>
                </div>
              }
            </div>
            <div className="col-md-3 text-dark file_details">
              <div className="p-2">
                <div className="d-flex justify-content-center align-items-center" style={{height: "100px"}}>Preview</div>
                <div className="d-flex justify-content-between align-items-center p-2">
                  <div className="d-flex align-items-center">
                    <div><i className="fa fa-file-word-o text-primary" style={{fontSize:"2rem"}}></i></div>
                    <div className="ml-2">
                      <div className="file_details_title">Montageservice rutin.docx</div>
                      <div className="file_details_subtitle">190KB - 20 Jan</div>
                    </div>
                  </div>
                  <div><i className="fa fa-bell text-primary" style={{fontSize:"1.5rem"}}></i></div>
                </div>
                <div className="mt-2 mb-2">
                  <input type="text" placeholder="Add a description" className="form-control"/>
                </div>
                <div className="mt-2 mb-2 file_details_title1">
                  Has Access
                </div>
                <div className="mt-2 mb-2 file_details_title">
                  <i className="fa fa-user" style={{color:"white", backgroundColor:"#0f6fc6", borderRadius:"25px", fontSize:"3rem", width:"50px", textAlign:"center"}}></i>
                </div>
                <div className="mt-2 mb-2 file_details_subtitle">
                  This item has not been shared
                </div>
                <div className="mt-2 mb-2 file_details_subtitle">
                  <a>Manage Access</a>
                </div>
                <div className="mt-2 mb-2 file_details_title1">
                  Information
                </div>
                <div className="mt-2 mb-2 file_details_subtitle">
                  Type
                </div>
                <div className="mt-2 mb-2 file_details_title">
                  Microsoft Word Document
                </div>
                <div className="mt-2 mb-2 file_details_subtitle">
                  Modified
                </div>
                <div className="mt-2 mb-2 file_details_title">
                  20/01/2019 17:14
                </div>
                <div className="mt-2 mb-2 file_details_subtitle">
                  Added
                </div>
                <div className="mt-2 mb-2 file_details_title">
                  Nicklas Juhlin Rosen
                </div>
                <div className="mt-2 mb-2 file_details_subtitle">
                  Date Created
                </div>
                <div className="mt-2 mb-2 file_details_title">
                  20/01/2019 17:14
                </div>
                <div className="mt-2 mb-2 file_details_subtitle">
                  Path
                </div>
                <div className="mt-2 mb-2 file_details_title">
                  Files > Montageservice rutin
                </div>
                <div className="mt-2 mb-2 file_details_subtitle">
                  Size
                </div>
                <div className="mt-2 mb-2 file_details_title">
                  190KB
                </div>
              </div>
            </div>
          </div>
        </StyledContainer>
    );
  }
}
export default FileList
