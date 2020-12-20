import React, {Component, Fragment} from 'react';
import {Route, Switch} from "react-router-dom"
import HomePage from "../pages/HomePage";
import ServicePage from "../pages/ServicePage";
import CoursesPage from "../pages/CoursesPage";
import PortfolioPage from "../pages/PortfolioPage";
import ContactPage from "../pages/ContactPage";
import AboutPage from "../pages/AboutPage";
import RefundPage from "../pages/RefundPage";
import TermsPage from "../pages/TermsPage";
import PrivacyPage from "../pages/PrivacyPage";
import ProjectDetailsPage from "../pages/ProjectDetailsPage";
import CourseDetailsPage from "../pages/CourseDetailsPage";

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
                    <Route exact path="/momentio/refund" component={RefundPage} />
                    <Route exact path="/momentio/terms" component={TermsPage} />
                    <Route exact path="/momentio/privacy" component={PrivacyPage} />
                    <Route exact path="/momentio/projectDetails" component={ProjectDetailsPage} />
                    <Route exact path="/momentio/categoryDetails" component={CourseDetailsPage} />
                </Switch>
            </Fragment>
        );
    }
}

export default AppRoute;