import React, {Component,Fragment} from 'react';
import '../../asset/css/custom.css'
import '../../asset/css/bootstrap.min.css'
import {Nav, Navbar, NavDropdown} from "react-bootstrap";
import whiteLogo from '../../asset/image/navlogo.svg'
import blueLogo from '../../asset/image/navlogoScroll.svg'
import {NavLink} from "react-router-dom";

class TopNavigation extends Component {
    constructor(props){
        super();
        this.state={
            navBarTitle:"navTitle",
            navBarLogo:[whiteLogo],
            navVariant:"dark",
            navBarBack:"navBackground",
            navBarItem:"navItem",
            pageTitle:props.title
        }
    }
    onScroll=()=>{
        if(window.scrollY>100){
            this.setState({navVariant:'light', navBarTitle:'navTitleScroll', navBarLogo:[blueLogo], navBarBack:'navBackgroundScroll',navBarItem:'navItemScroll'})
        }
        else if(window.scrollY<100){
            this.setState({navVariant:'dark',navBarTitle:'navTitle',navBarLogo:[whiteLogo],navBarBack:'navBackground',navBarItem:'navItem'})
        }
    }
    componentDidMount() {
        window.addEventListener('scroll',this.onScroll)
    }
    render() {
        return (
            <Fragment>
                <title>{this.state.pageTitle}</title>
                <Navbar variant={this.state.navVariant} className={this.state.navBarBack} fixed="top" collapseOnSelect expand="lg">
                    <Navbar.Brand className={this.state.navBarTitle}><img src={this.state.navBarLogo}/>Momentio</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                        </Nav>
                        <Nav>
                            <Nav.Link><NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navBarItem} to="/momentio">HOME</NavLink></Nav.Link>
                            <Nav.Link><NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navBarItem} to="/momentio/service">SERVICES</NavLink></Nav.Link>
                            <Nav.Link><NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navBarItem} to="/momentio/course">COURSES</NavLink></Nav.Link>
                            <Nav.Link><NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navBarItem} to="/momentio/portfolio">PORTFOLIO</NavLink></Nav.Link>
                            <Nav.Link><NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navBarItem} to="/momentio/contact">CONTACT</NavLink></Nav.Link>
                            <Nav.Link><NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navBarItem} to="/momentio/about">ABOUT</NavLink></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Fragment>
        );
    }
}
export default TopNavigation;