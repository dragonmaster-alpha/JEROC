import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

const StyledContainer = styled.div`
    .article_text{
        font-size: 0.9rem;
    }
    .article_sub_text{
        font-size: 0.7rem;
    }
    .article_uploading_img{
        font-size: 3rem;   
    }
    .article_uploading_title{
        font-size: 0.7rem;
    }
    .article_uploading_text{
        font-size: 0.5rem;
    }
    td{
        padding: 0px!important;
    }
`;
class NewArticle extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
          viewMode: 1,  // 0 : List, 1 : Directory, 2 : Org Chart

      };
    }
    componentDidMount(){
    }
  
    componentDidUpdate(prevProps){
    }
  
    render() {
        return (
            <StyledContainer className="ml-3 mr-3">
                <div className="text-primary"><h4>Create New Article</h4></div>
                <div className="border">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="d-flex p-2 justify-content-between">
                                <div className="w-100 bg-white text-dark border m-2 p-2">
                                    <div className="article_text">New Article Is</div>
                                    <div className="mt-2">
                                        <div className="btn btn-default">Item</div>
                                        <div className="btn btn-default">Service</div>
                                        <div className="btn btn-default">Fee</div>
                                    </div>
                                </div>
                                <div className="w-100 bg-white text-dark border m-2 p-2">
                                    <div className="article_text">Product Status</div>
                                    <div className="mt-2">
                                        <select className="form-control">
                                            <option>Draft</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="w-100 bg-white text-dark border m-2 p-2">            
                                    <div className="article_text">Article List</div>
                                    <div className="mt-2">
                                        <select className="form-control">
                                            <option>Bauhaus</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex p-1 bg-white text-dark m-3">
                                <div className="w-100 m-2 p-2">
                                    <div className="article_sub_text">Article Name</div>
                                    <div className="">
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="article_sub_text mt-2">Description</div>
                                    <div className="">
                                        <textarea className="form-control"></textarea>
                                    </div>
                                </div>
                                <div className="w-100 bg-white text-dark m-2 p-2">
                                   <div className="">
                                        <div className="article_text">Article Photos</div>
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
                            <div className="p-3 bg-white text-dark m-3">
                                <div className="article_text font-weight-bold mb-2">Vendor & Inventory</div>
                                <div className="d-flex">
                                    <div className="m-1">
                                        <div className="article_sub_text mb-1">Manufacturer</div>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="m-1">
                                        <div className="article_sub_text mb-1">Manufacturer Sku</div>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="m-1">
                                        <div className="article_sub_text mb-1">Vendor</div>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="m-1">
                                        <div className="article_sub_text mb-1">Vendor SKU</div>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="m-1">
                                        <div className="article_sub_text mb-1">Barcode</div>
                                        <input type="text" className="form-control" />
                                    </div>
                                </div>
                                <div className="d-flex mt-2">
                                    <div className="m-1">
                                        <div className="article_sub_text mb-1">Our SKU (Stock Keeping Unit / Article No)</div>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="m-1 ml-3">
                                        <div className="article_sub_text mb-1">Available quantity</div>
                                        <input type="text" className="form-control" />
                                    </div>
                                </div>
                            </div>
                            
                            <div className="p-3 bg-white text-dark m-3">
                                <div className="article_text font-weight-bold mb-2">Pricing</div>
                                <div className="d-flex">
                                    <div className="m-2">
                                        <div className="article_sub_text mb-1">Buy in Price</div>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="m-2">
                                        <div className="article_sub_text mb-1">Recommended seller Price</div>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="m-2">
                                        <div className="article_sub_text mb-1">Article Unint</div>
                                        <select className="form-control">
                                            <option>Hours</option>
                                        </select>
                                    </div>
                                    <div className="m-2">
                                        <div className="article_sub_text mb-1">&nbsp;</div>
                                        <div className="article_sub_text mb-1">
                                            Margin<br/>
                                            100%
                                        </div>
                                    </div>
                                    <div className="m-2">
                                        <div className="article_sub_text mb-1">&nbsp;</div>
                                        <div className="article_sub_text mb-1">
                                            Profit<br/>
                                            100.00kr
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex mt-2">
                                    <div className="d-flex align-items-center p-2">
                                        <input type="checkbox"/>
                                        <div className="ml-2">Charge tax on this product</div>
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <div className="m-2">
                                        <div className="article_sub_text mb-1">VAT</div>
                                        <input type="text" className="form-control" placeholder="25%"/>
                                    </div>
                                    <div className="m-2">
                                        <div className="article_sub_text mb-1">&nbsp;</div>
                                        <input type="text" className="form-control" placeholder="Service"/>
                                    </div>
                                </div>
                                <div className="d-flex mt-2">
                                    <div className="d-flex align-items-center p-2">
                                        <input type="checkbox"/>
                                        <div className="ml-2">Eligble for reverse VAT</div>
                                    </div>
                                </div>
                                <div className="d-flex mt-2">
                                    <div className="d-flex align-items-center p-2">
                                        <input type="checkbox"/>
                                        <div className="ml-2">Use Staffing prices</div>
                                    </div>
                                </div>
                                <table className="table">
                                    <thead>
                                        <tr className="">
                                            <th className="bg-light article_sub_text font-weight-bold">Staffling Trigger</th>
                                            <th className="bg-light article_sub_text font-weight-bold">Buy in Price</th>
                                            <th className="bg-light article_sub_text font-weight-bold">Use Pricelist</th>
                                            <th className="bg-light article_sub_text font-weight-bold">Pricelist Sell a price</th>
                                            <th className="bg-light article_sub_text font-weight-bold">Price Adjustment</th>
                                            <th className="bg-light article_sub_text font-weight-bold">Price after adjust</th>
                                            <th className="bg-light article_sub_text font-weight-bold">Margin & / SEK</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="text-dark"><input type="text" className="form-control" /></td>
                                            <td className="text-dark"><input type="text" className="form-control" /></td>
                                            <td className="text-dark"><input type="number" className="form-control" /></td>
                                            <td className="text-dark"><input type="text" className="form-control" /></td>
                                            <td className="text-dark">
                                                <div className="d-flex">
                                                    <input type="number" className="form-control" style={{width:"60px"}}/>
                                                    <input type="text" className="form-control" style={{width:"100px"}}/>
                                                    <input type="number" className="form-control" style={{width:"60px"}}/>
                                                </div>
                                            </td>
                                            <td className="text-dark"><input type="text" className="form-control" /></td>
                                            <td className="text-dark">
                                                <div className="border rounded text-success article_sub_text text-right">+100.00%</div>
                                                <div className="border rounded text-success article_sub_text text-right">+10000.00SKU</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-dark"><input type="text" className="form-control" /></td>
                                            <td className="text-dark"><input type="text" className="form-control" /></td>
                                            <td className="text-dark"><input type="number" className="form-control" /></td>
                                            <td className="text-dark"><input type="text" className="form-control" /></td>
                                            <td className="text-dark">
                                                <div className="d-flex">
                                                    <input type="number" className="form-control" style={{width:"60px"}}/>
                                                    <input type="text" className="form-control" style={{width:"100px"}}/>
                                                    <input type="number" className="form-control" style={{width:"60px"}}/>
                                                </div>
                                            </td>
                                            <td className="text-dark"><input type="text" className="form-control" /></td>
                                            <td className="text-dark">
                                                <div className="border rounded text-warning article_sub_text text-right">+100.00%</div>
                                                <div className="border rounded text-warning article_sub_text text-right">+10000.00SKU</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-dark"><input type="text" className="form-control" /></td>
                                            <td className="text-dark"><input type="text" className="form-control" /></td>
                                            <td className="text-dark"><input type="number" className="form-control" /></td>
                                            <td className="text-dark"><input type="text" className="form-control" /></td>
                                            <td className="text-dark">
                                                <div className="d-flex">
                                                    <input type="number" className="form-control" style={{width:"60px"}}/>
                                                    <input type="text" className="form-control" style={{width:"100px"}}/>
                                                    <input type="number" className="form-control" style={{width:"60px"}}/>
                                                </div>
                                            </td>
                                            <td className="text-dark"><input type="text" className="form-control" /></td>
                                            <td className="text-dark">
                                                <div className="border rounded text-danger article_sub_text text-right">+100.00%</div>
                                                <div className="border rounded text-danger article_sub_text text-right">+10000.00SKU</div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="p-3 bg-white text-dark m-3">
                                <div className="article_text font-weight-bold mb-2">Service & RoT info</div>
                                <div className="d-flex">
                                    <div className="m-2">
                                        <div className="article_sub_text mb-1">Service Category for Rot</div>
                                        <select className="form-control">
                                            <option>Plumbing</option>
                                        </select>
                                    </div>
                                    <div className="d-flex align-items-center p-2 mt-3">
                                        <input type="checkbox"/>
                                        <div className="ml-2">This Service is a Fixed price Service</div>
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <div className="m-2">
                                        <div className="article_sub_text mb-1">Time Duration</div>
                                        <input type="text" className="form-control" />
                                        <div className="article_sub_text">
                                            This Time is not showed or billed to the customer, it is only used for submitting RoT to skatteverket. For fixed price jobs, put in the avrage time for the work, if this article is a running job and the unit is hour. Choose "mirror quantity amount"
                                        </div>
                                    </div>
                                    
                                    <div className="m-2">
                                        <div className="article_sub_text mb-1">Material cost (Only for fixed price jobs if material is included in price)</div>
                                        <input type="text" className="form-control" />
                                        <div className="article_sub_text">
                                        This cost is not showed or billied to the customer, it is only used for submitting RoT to Skatteverket. It is for fixed price jobs where material is included in the job, for example changing a toilet including the accessories to get it in place, small fittings etc. Then put in this average material cost here.
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-light p-3" style={{width:"350px"}}>
                                    <div className="article_text font-weight-bold mb-2">Required competens and certifications</div>
                                    <input className="mb-2" type="form-control" placeholder="Search for collections..."/>
                                    <div className="d-flex justify-content-between border-bottom pb-2">
                                        <div className="article_text">Plumbing</div>
                                        <div className="article_text"><i className="fa fa-times"></i></div>
                                    </div>
                                    <div className="d-flex justify-content-between border-bottom pb-2">
                                        <div className="article_text">Heta Arbetan</div>
                                        <div className="article_text"><i className="fa fa-times"></i></div>
                                    </div>
                                </div>
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
                        <div className="col-md-3">
                            <div className="p-3 m-3 border">
                                <div className="article_text font-weight-bold">Organization</div>
                                <div className="article_text mb-2 mt-3">Product Type</div>
                                <div className="mb-4">
                                    <select className="form-control">
                                        <option>Product Type1</option>
                                        <option>Product Type2</option>
                                        <option>Product Type3</option>
                                    </select>
                                </div>
                                <div className="article_text mb-2 mt-3">Collections</div>
                                <div className="mb-2">
                                    <input type="text" className="form-control" placeholder="Search..." />
                                </div>
                                <div className="article_sub_text mb-4">Add this production to a collection so it's easy to find in your store.</div>
                                <div className="d-flex justify-content-between">
                                    <div className="article_text">Tags</div>
                                    <div className="article_sub_text"><a href="#">View All Tags</a></div>
                                </div>                            
                                <div className="mt-2">
                                    <input type="text" className="form-control" placeholder="Cotton, Summer..." />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </StyledContainer>

        );
    }
};

export default NewArticle
