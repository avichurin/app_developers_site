import React, { Component } from "react";
import Header from "./header";
import ThemeStyle from "../styles/theme";
import Media from "../styles/media";
import Footer from "./footer";
import ChatBlock from "./components/ChatBlock";
class About extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="main flex column">
                    <div className="container z-1 ps-rel">
                        <div className="main-back">
                            <div className="main-back-1"> </div>
                            <div className="main-back-2"> </div>
                            <div className="main-back-3"> </div>
                            <div className="main-back-4"> </div>
                        </div>
                        <div className="mt-100 flex jc-sb mb-mt-50">
                            <div className="dev flex w-50 mb-mt-50">
                                <div className="vertical-line vertical-line-work" />
                                <div className="column w-99 z-2">
                                    <h1 className="mb-fs-24 about-kek">
                                        About us & our services
                                    </h1>
                                    <p className="item-about item-about-1 pl-35 mb-fs-14 mb-lh-12">
                                        Wellplexx is a digital agency. Our
                                        headquarters are located in the USA,
                                        Utah state, Salt Lake City. We have a
                                        big team of professionals. Wellplexx's
                                        main goal is to achieve success with
                                        client projects and to help them improve
                                        their business. The team consist of
                                        onsite members as well as with remote
                                        workers. That make our price more
                                        affordable for our clients. Go through a
                                        new project with us to your next level
                                        in business - we know how to make things
                                        happen!
                                    </p>
                                </div>
                            </div>
                            <div className="ml-130 w-50 flex mb-mt-0">
                                <div className="services-round">
                                    <img src="../static/images/about.png" />
                                </div>
                            </div>
                        </div>
                        <div className="column flex">
                            <div className="can-do flex w-50 mb-mt-10">
                                <div className="vertical-line vertical-line-medium" />
                                <div className="can-do-text">
                                    <h3 className="can-do-title">Design</h3>
                                    <div className="horizontal-line-small horizontal-line-work" />
                                    <div className="text-back">
                                        {" "}
                                        Web & mobile
                                    </div>
                                </div>
                            </div>
                            <div className="w-50">
                                <p className="item-about pl-35 mb-lh-12 mb-mt-10 item-about-1">
                                    {" "}
                                    Design - that's what make your product
                                    beautiful! Here in Wellplexx we are
                                    client-oriented. What can make a website
                                    users more happier than a great experience?
                                    Improve your clients experience with
                                    incredible view. Our design services
                                    contains next parts:
                                </p>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="services-content flex w-100 mb-m-0a">
                                <div className="services-name flex column mr-20 mb-mt-0">
                                    <div className="list packs-name">
                                        <div className="round">
                                            <div className="round-in" />
                                        </div>
                                        <span>
                                            UI/UX Design
                                        </span>
                                    </div>
                                    <div className="list packs-name">
                                        <div className="round">
                                            <div className="round-in" />
                                        </div>
                                        <span>Websites design</span>
                                    </div>
                                    <div className="list packs-name">
                                        <div className="round">
                                            <div className="round-in" />
                                        </div>
                                        <span>Mobile design</span>
                                    </div>
                                </div>
                                <div className="services-name flex column">
                                    <div className="list packs-name">
                                        <div className="round flex">
                                            <div className="round-in" />
                                        </div>
                                        <span>
                                            Service mockups, warframes
                                        </span>
                                    </div>
                                    <div className="list packs-name">
                                        <div className="round">
                                            <div className="round-in" />
                                        </div>
                                        <span>
                                            Illustrations & Iconography
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column flex">
                            <div className="can-do flex w-50 mb-mt-10 mt-70">
                                <div className="vertical-line vertical-line-medium" />
                                <div className="can-do-text">
                                    <h3 className="can-do-title">
                                        Website development
                                    </h3>
                                    <div className="horizontal-line-small horizontal-line-work" />
                                    <div className="text-back">
                                        Design & code
                                    </div>
                                </div>
                            </div>
                            <div style={{width: "80%"}}>
                                <p className="item-about pl-35 mb-lh-12 mb-mt-10">
                                    Make right layout, develop good structure,
                                    make right administration tools. It may be
                                    challenging for some one, but not for us! We
                                    have a ton of experience with wide
                                    technology stack. Make your bird fly long
                                    distance on low fuel is our approach. Your
                                    clients will notice your new website level!
                                </p>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="services-content flex w-100 mb-m-0a">
                                <div className="services-name flex column mr-20 mb-mt-0">
                                    <div className="list packs-name">
                                        <div className="round">
                                            <div className="round-in" />
                                        </div>
                                        <span>
                                            Websites development
                                        </span>
                                    </div>
                                    <div className="list packs-name">
                                        <div className="round">
                                            <div className="round-in" />
                                        </div>
                                        <span>Front-End Development</span>
                                    </div>
                                    <div className="list packs-name">
                                        <div className="round">
                                            <div className="round-in" />
                                        </div>
                                        <span>Prototyping & Interactions</span>
                                    </div>
                                </div>
                                <div className="services-name flex column">
                                    <div className="list packs-name">
                                        <div className="round">
                                            <div className="round-in" />
                                        </div>
                                        <span>
                                            CMS integration
                                        </span>
                                    </div>
                                    <div className="list packs-name">
                                        <div className="round">
                                            <div className="round-in" />
                                        </div>
                                        <span>
                                            Competitive Analysis
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <ChatBlock/>
                    </div>
                </div>
                <Footer />
                <ThemeStyle />
                <Media />
            </div>
        );
    }
}
export default About;
