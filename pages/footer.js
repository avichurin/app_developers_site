import React, { Component, Fragment } from "react"
import FooterStyle from "../styles/footer";
import Media from "../styles/media";
import Link from 'next/link';

class Footer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <footer className="footer flex">
                    <div className='footer-logo'>
                        <img src='../static/images/logo.png' />
                    </div>
                    <div className="socials">
                        <Link href="https://www.instagram.com/wellplexx/"><a target="_blank"><img className='insta' src='../static/images/insta.png' /></a></Link>
                        <Link href="https://www.facebook.com/wellplexx"><a target="_blank"><img className='fb' src='../static/images/fb.png' /></a></Link>
                        <Link href="https://twitter.com/wellplexx"><a target="_blank"><img className='twitter' src='../static/images/twitter.png' /></a></Link>
                    </div>
                    <div className='footer-bottom'>
                        <div className="agency">
                            <p>Wellplexx | USA | Copyright © 2019 all rights reserved</p>
                        </div>
                        <div className="links-bottom flex jc-sb ai-c">
                            <Link href="/works"><a className="headerLink" href="/works">Our work</a></Link>
                            <Link href="/about"><a className="headerLink" href="/services">Services</a></Link>
                            <Link href="/contact"><a className="headerLink" href="/contact">Contact</a></Link>
                            <Link href="/privacy"><a className="headerLink" href="/privacy">Conditions</a></Link>
                        </div>
                    </div>
                </footer>
                <FooterStyle />
                <Media />
            </Fragment>
        );
    }
}
export default Footer;