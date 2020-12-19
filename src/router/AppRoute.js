import React, {Component, Fragment} from 'react';
import {Route, Switch} from "react-router-dom"
import HomePage from "../pages/HomePage";
import ServicePage from "../pages/ServicePage";
import CoursesPage from "../pages/CoursesPage";
import PortfolioPage from "../pages/PortfolioPage";
import ContactPage from "../pages/ContactPage";
import AboutPage from "../pages/AboutPage";

class AppRoute extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route exact path="/momentio" component={HomePage} />
                    <Route exact path="/momentio/service" component={ServicePage} />
                    <Route exact path="/momentio/category" component={CoursesPage} />
                    <Route exact path="/momentio/portfolio" component={PortfolioPage} />
                    <Route exact path="/momentio/contact" component={ContactPage} />
                    <Route exact path="/momentio/about" component={AboutPage} />
                </Switch>
            </Fragment>
        );
    }
}

export default AppRoute;