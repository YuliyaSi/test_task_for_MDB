import React from 'react';
import { FooterTag} from "../styled/Footer_styles";

import {BsFacebook, BsInstagram} from "react-icons/bs";

const Footer = () => {
    return (
        <FooterTag>
            <div className="socials">
                <a href="https://www.facebook.com/julia.domoratzkaya" target={'_blank'} rel="noreferrer"><BsFacebook/></a>
                <a href="https://www.instagram.com/yulia_sidorenko_1102/" target={'_blank'} rel="noreferrer"><BsInstagram/></a>
            </div>
            <div className="copyright">
                <small>&copy; All rights reserved.</small>
            </div>
        </FooterTag>
    );
}

export default Footer;