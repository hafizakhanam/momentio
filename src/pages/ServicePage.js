import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import Services from "../components/Services/Services";
import Footer from "../components/Footer/Footer";
import Contact from "../components/Contact/Contact";

class ServicePage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation title="Service" />
                <PageTop pagetitle="Our Services"/>
                <Services/>
                <Contact/>
                <Footer/>
            </Fragment>
        );
    }
}

export default ServicePage;