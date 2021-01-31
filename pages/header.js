import React, { Component } from "react";
import Helmet from 'react-helmet'
import Link from 'next/link';
import HeaderStyle from "../styles/header";
import Media from "../styles/media";
class Header extends Component {
    render() {
        return (
            <div>
                <header className="App-header flex">
                    <div className="container flex jc-sb ai-c z-1000">
                        <Link href="/"><a href="/"><img src="../static/images/logo.png" className="App-logo" alt="logo" /></a></Link>
                        <div className="links flex jc-sa ai-c">
                            <Link href="/works"><a className="headerLink" href="/works">Our work</a></Link>
                            <Link href="/about"><a className="headerLink" href="/about">Services</a></Link>
                            <Link href="/contact"><a className="headerLink" href="/contact">Contact</a></Link>
                            <Link href="/contact"><button className="startButton">START PROJECT</button></Link>
                        </div>
                    </div>
                </header>
                <Link href="/"><a href="/" className="App-link"><img src="../static/images/logo.png" className="App-logo" alt="logo" /></a></Link>
                <div className="mobile-menu">
                    <input id="hamburger" className="hamburger" type="checkbox" />
                    <label className="hamburger" htmlFor="hamburger">
                        <i></i>
                    </label>
                    <section className="drawer-list">
                        <ul>
                            <Link href="/works"><a className="jc-c" href="/works">Our work</a></Link>
                            <Link href="/about"><a className="jc-c" href="/about">Services</a></Link>
                            <Link href="/contact"><a className="jc-c" href="/contact">Contact</a></Link>
                        </ul>
                    </section>
                </div>
                
                <HeaderStyle />

                <Media />
            </div>
        );
    }
}
export default Header;