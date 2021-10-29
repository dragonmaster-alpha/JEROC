import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

const StyledContainer = styled.div`
    .navbar-top-text{
        text-align: right;
        margin-right: 20px;
        font-size: 0.7rem;
        font-weight: bold;
        width: 100%;
        margin-top: 5px;
    }
    .navbar-left-menu{      
        display: flex;
        align-items: center;        
        font-size: 0.7rem;
        font-weight: bold;
    }
    .navbar-left-menu-item .logo{
        width: 150px;
        margin-top: -5px;
    }  
    .navbar-left-menu-item{
        margin-left: 5px;
        margin-right: 5px;
    }
    .navbar-left-menu-item a{
        color: black;
    }
    .navbar-left-menu-item.active a{
        margin-left: 5px;
        margin-right: 5px;        
        color: #0f6fc6;
    }
    .navbar-search{
        border: none;
    }
    .avatar{
        width: 50px;
    }
    .navbar-search{    
        width: 100px;
        font-size: 0.8rem;
    }
    .navbar-nav .icon-menu {
        padding: 10px 5px;
    }
    .avatar-panel{
        font-size: 0.6rem;
        display: flex;
        margin-right: 10px;
        align-items: center;
    }
    .avatar-img{
        img{
            border: none;
        }
    }
    .avatar-info{
        margin-left: 5px;
    }
    .avatar-name{
        font-weight: bold;
        margin-bottom: 5px;
        color: #0f6fc6;
    }
    .avatar-role{
        font-size: 0.55rem;   
    }
    .navbar-icon{
        font-size: 1.2rem;
        font-weight: bold;
        color: #0f6fc6;
    }
`;

const Header = ({ toggleMegamenu, isMegaMenu, toggleNotificationBar, toggleSearchBar, setOffcanvas, offcanvas }) => {

    return (
        <StyledContainer>
            <nav className="navbar top-navbar">
                <div className="navbar-top-text">
                    JEROC EL & Fastighetstjanst AB 
                    <i className="fa fa-chevron-down"></i>
                </div>
                <div className="container-fluid">
                    <div className="navbar-left">
                        <div className="navbar-left-menu">                            
                            <div className="navbar-left-menu-item navbar-left-menu-item-first">
                                <img src="../assets/images/logo.png" alt="Jeroc Logo" className="logo" />
                            </div>
                            <div className="navbar-left-menu-item"><Link to="/">HOME</Link></div>|
                            <div className="navbar-left-menu-item active"><Link to="/customer">Customer</Link></div>|
                            <div className="navbar-left-menu-item"><Link to="/product">Products</Link></div>|
                            <div className="navbar-left-menu-item"><Link to="/employee">Employee</Link></div>|
                            <div className="navbar-left-menu-item"><Link to="/workorder">Work Order</Link></div>|
                            {/* <div className="navbar-left-menu-item"><Link to="/arebeten">ARBETEN</Link></div>| */}
                            <div className="navbar-left-menu-item"><Link to="/newArticle">Article</Link></div>|
                            <div className="navbar-left-menu-item"><Link to="/karta">KARTA</Link></div>|
                            <div className="navbar-left-menu-item"><Link to="/tidrapprotering">TIDRAPPORTERING</Link></div>|
                            <div className="navbar-left-menu-item"><Link to="/ekonomi">EKONOMI</Link></div>|
                            <div className="navbar-left-menu-item"><Link to="/butikandlager">BUTIK & LAGER</Link></div>|
                            {/* <div className="navbar-left-menu-item"><Link to="/inventarier">INVENTARIER</Link></div>| */}
                            <div className="navbar-left-menu-item navbar-left-menu-item-last"><Link to="/kundcenter">KUNDCENTER</Link></div>
                        </div>
                    </div>

                    <div className="navbar-right">                        
                        
                        <div id="navbar-menu">
                            <ul className="nav navbar-nav">
                                <li>
                                    <input type="text" className="form-control navbar-search" placeholder="Search..." />
                                </li>
                                <li><span className="right_toggle icon-menu" title="Right Menu"><i className="icon-magnifier" style={{fontSize:"0.8rem", marginRight:"10px"}}></i></span></li>
                                <li><span className="right_toggle icon-menu" title="Right Menu"><i className="navbar-icon icon-earphones"></i></span></li>
                                <li><span className="right_toggle icon-menu" title="Right Menu"><i className="navbar-icon fa fa-envelope"></i></span></li>
                                <li><span className="right_toggle icon-menu" title="Right Menu"><i className="navbar-icon fa fa-bell"></i></span></li>
                                <li>
                                    <div className="right_toggle icon-menu avatar-panel" title="Right Menu">
                                        <div className="avatar-img">
                                            <img src="../assets/images/sm/avatar1.jpg" className="img-thumbnail rounded-circle avatar" alt="avatar" />
                                        </div>
                                        <div className="avatar-info">
                                            <div className="avatar-name">
                                                Jordan J.
                                            </div>
                                            <div className="avatar-role">
                                                Administrator
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </StyledContainer>
    );
}
export default Header;