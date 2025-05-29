import React from "react";
import MainArticle from "../../components/main/MainArticle";
import HorizontalPanelBig from "../../components/panel/HorizontalPanelBig";
import ContactUsLinks from "../../components/contact-us/ContactUsLinks";
import Socials from "../../components/socials/Socials";
import ContactForm from '../../components/contact-form/ContactForm';

const Contact: React.FC = () => {
    return (
        <MainArticle heading="Kontakt">
            <HorizontalPanelBig>
                <ContactUsLinks />
                <Socials />
                <ContactForm/>
            </HorizontalPanelBig>
        </MainArticle>
    );
    }

export default Contact;