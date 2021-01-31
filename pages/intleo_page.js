import  React, {Component} from "react";
import Header from "./header";
import Footer from "./footer";
import ThemeStyle from "../styles/theme";
import Media from "../styles/media";
import {Slider} from "./components/slider";
import Cases from "./components/Cases";

class Meteor extends Component {
    componentDidMount(){
        Slider()
    }
    render() {
        return (
            <div>
                <Header/>
                <div className= "main flex column">
                    <div className="container z-2">
                        <div className="main-back">
                            <div className="main-back-1 h-103"> </div>
                            <div className="main-back-2 h-110"> </div>
                            <div className="main-back-3 h-110"> </div>
                            <div className="main-back-4 h-110"> </div>
                        </div>
                        <div className="StartContent StartContent-2 flex">
                            <div className="dev flex mb-w-100">
                                <div className="column flex">
                                    <div className="project-logo"><img src="../static/images/project-logo.png"/> </div>
                                    <div className="can-do flex w-50 mb-mt-10 project-name">
                                        <div className="vertical-line vertical-line-medium"></div>
                                        <div className="can-do-text">
                                            <h3 className="can-do-title">Intleo language</h3>
                                            <div className="horizontal-line-small horizontal-line-work"></div>
                                            <div className="text-back">Intleo language</div>
                                        </div>
                                    </div>
                                    <div className="w-50 w-80 project-desc">
                                        <p className="item-about-1 pl-35 mb-lh-12 mb-mt-10">Learn english with big international
                                            community. Lists, cards, material.
                                            Things that each new user can use to
                                            improve foreign language skills on
                                            his own with the application's help.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="dev-img-2">
                                <img src="../static/images/english_1.png" className="Mob-img z-1" alt="meteor" />
                            </div>
                        </div>
                    </div>
                    <div className="container z-1 mb-mt-110">
                        <div className="main-back h-110">
                            <div className="main-back-1"> </div>
                            <div className="main-back-2"> </div>
                            <div className="main-back-3"> </div>
                            <div className="main-back-4"> </div>
                        </div>
                        <div className="column flex">
                            <div className="can-do flex w-50 mb-mt-10">
                                <div className="vertical-line vertical-line-medium"></div>
                                <div className="can-do-text">
                                    <h3 className="can-do-title">Services</h3>
                                    <div className="horizontal-line-small horizontal-line-work"></div>
                                    <div className="text-back"> Services</div>
                                </div>
                            </div>
                            <div className="w-50">
                                <p className="item-about-1 pl-35 mb-lh-12 mb-mt-10">Cross Platform solution for the project allowed users to work with the application 
                                on Android, IOS, MacOS, Web, windows</p>
                            </div>
                        </div>
                        <div className ="flex">
                            <div className="services-content flex w-100 mb-m-0a">
                                <div className="services-name flex column mr-20 mb-mt-0">
                                    <div className="list packs-name">
                                        <div className="round flex ai-c jc-c">
                                            <div className="round-in_1"></div>
                                        </div>
                                        <span>Website development</span>
                                    </div>
                                    <div className="list packs-name">
                                        <div className="round flex ai-c jc-c">
                                            <div className="round-in_1"></div>
                                        </div>
                                        <span>Mobile app development</span>
                                    </div>
                                </div>
                                <div className="services-name flex column mr-20 mb-mt-0">
                                    <div className="list packs-name ">
                                        <div className="round flex ai-c jc-c">
                                            <div className="round-in_1"></div>
                                        </div>
                                        <span>Payments and security</span>
                                    </div>
                                    <div className="list packs-name">
                                        <div className="round flex ai-c jc-c">
                                            <div className="round-in_1"></div>
                                        </div>
                                        <span>Branding & UI/UX Design</span>
                                    </div>
                                </div>
                                <div className="services-name flex column">
                                    <div className="list packs-name ">
                                        <div className="round flex ai-c jc-c">
                                            <div className="round-in_1"></div>
                                        </div>
                                        <span>Backend with Nodejs and GraphQL endpoints</span>
                                    </div>
                                    <div className="list packs-name">
                                        <div className="round flex ai-c jc-c">
                                            <div className="round-in_1"></div>
                                        </div>
                                        <span>Frontend with Angular and ElectronJS</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container mt-100 z-1 mb-mt-50 mb-w-100">
                        <div className="main-back h-110">
                            <div className="main-back-1"> </div>
                            <div className="main-back-2"> </div>
                            <div className="main-back-3"> </div>
                            <div className="main-back-4"> </div>
                        </div>
                        <div className="can-do flex">
                            <div className="vertical-line vertical-line-medium"></div>
                            <div className="can-do-text">
                                <h3 className="can-do-title">Screens</h3>
                                <div className="horizontal-line-small horizontal-line-work"></div>
                                <div className="text-back"> App pages </div>
                            </div>
                        </div>
                        <p className="drug ta-c">DRAG FOR SCROLL</p>
                        <div className="drug-content m-0a flex column">
                            <div className="drug-line flex jc-c">
                                <div className="drug-circle"></div>
                                <div className="drug-dote"><img src="../static/images/dote-line.png"/> </div>
                                <div className="drug-circle"></div>
                            </div>

                            <div className="drug-hand flex jc-c"><img src="../static/images/drug-hand.png"/> </div>
                        </div>
                    </div>
                    <div className="grid-item mt-70 z-1">
                        <div className="items flex jc-sb">
                            <div className="item item-1 flex">
                                <img src="../static/images/intleo_2.png"/>
                            </div>
                            <div className="item item-1 flex">
                                <img src="../static/images/intleo_3.png"/>
                            </div>
                            <div className="item item-1 flex">
                                <img src="../static/images/intleo_4.png"/>
                            </div>
                            <div className="item flex">
                                <img src="../static/images/intleo_5.png"/>
                            </div>
                            <div className="item flex">
                                <img src="../static/images/intleo_6.png"/>
                            </div>
                        </div>
                    </div>
                    <Cases></Cases>
                </div>
                <Footer/>
                <ThemeStyle/>
                <Media/>
            </div>
        );
    }
}
export default Meteor;