import React, { Component } from "react";
import ThemeStyle from "../styles/theme";
import Media from "../styles/media";
import SetPercent from "./components/onclick";
import { Slider } from "./components/slider";
import Link from "next/link";
import { Link as ReactLink, Element } from "react-scroll";
import ChatBlock from "./components/ChatBlock";

class Home extends Component {
    constructor(props) {
        super(props);

        //02 Apr, 2019

        this.state = {
            onButton: false
        };

        this.onButton = this.onButton.bind(this);
    }

    componentDidMount() {
        Slider();
    }

    onButton(status) {
        this.setState({
            onButton: status
        });
    }

    render() {
        return (
            <div>
                <div className="main flex column">
                    <div className="container z-2">
                        <div className="main-back">
                            <div className="main-back-1 h-103"> </div>
                            <div className="main-back-2 h-110"> </div>
                            <div className="main-back-3 h-110"> </div>
                            <div className="main-back-4 h-110"> </div>
                        </div>

                        <div className="StartContent StartContent-1 flex mt-300">
                            <div className="dev dev-1 flex mb-w-100">
                                <div className="vertical-line" />
                                <div className="column w-99 z-2 mb-w-100">
                                    <h1 className="mb-fs-24">
                                        All sides of design. Web & mobile
                                        development
                                    </h1>
                                    <p className="dev-text mb-fs-14">
                                        Websites, design, mobile applications,
                                        desktop applications, complex solutions{" "}
                                    </p>
                                </div>
                            </div>
                            <div className="dev-img-1">
                                <img
                                    src="../static/images/dev.png"
                                    className="Mob-img z-1"
                                    alt="development"
                                />
                            </div>
                        </div>
                        <Link href="/contact">
                            <a href="/contact">
                                <button className="startButton mb-button mb-button-1">
                                    START PROJECT
                                </button>
                            </a>
                        </Link>

                        <ReactLink
                            to="next"
                            spy={true}
                            smooth={true}
                            offset={50}
                            duration={500}
                        >
                            <div className="m-0a switch">
                                <div className="switch-dote" />
                            </div>
                        </ReactLink>
                    </div>
                    <div className="flex jc-fe chat">
                        <div className="main-chat flex column">
                            <div className="chat-header flex ai-c">
                                <div className="chat-round">
                                    <div className="ok-round-small" />
                                </div>
                                <div className="chat-bot flex column">
                                    <div className="bot-name">John Dick</div>
                                    <div className="bot-role">
                                        Your pathfinder
                                    </div>
                                </div>
                            </div>
                            <div className="chat-body-main flex column z-1">
                                <div className="bot-hello flex ai-c mt-10 pl-20">
                                    Hello!
                                </div>
                                <div className="bot-invite mt-10">
                                    <p className="pl-20">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit, sed do eiusmod tempor
                                    </p>
                                </div>
                                <div className="bot-input flex column">
                                    <div className="bot-hi flex ai-c pl-20">
                                        Say hi mofucka
                                    </div>
                                    <div className="bot-enter ml-20 flex ai-c">
                                        <input placeholder="Enter HI Motherfucker" />
                                    </div>
                                </div>
                                <hr className="mt-175" />
                                <div className="write flex ai-c">
                                    <input placeholder="Type a message" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container mt-175 z-1 mb-mt-50">
                        <Element name="next" style={{ marginBottom: "50px" }} />
                        <div className="main-back h-110">
                            <div className="main-back-1"> </div>
                            <div className="main-back-2"> </div>
                            <div className="main-back-3"> </div>
                            <div className="main-back-4"> </div>
                        </div>

                        <div name="next" className="can-do flex">
                            <div className="vertical-line vertical-line-medium" />
                            <div className="can-do-text">
                                <h3 className="can-do-title">What we can do</h3>
                                <div className="horizontal-line-small" />
                                <div className="text-back"> Services </div>
                            </div>
                        </div>
                        <div className="services flex mt-150 mb-mt-50">
                            <div className="services-img">
                                <div className="services-round">
                                    <div className="services-bg-1" />
                                    <div className="services-bg-2" />
                                    <div className="services-bg-3" />
                                    <img src="../static/images/services.png" />
                                </div>
                            </div>
                            <div className="services-description flex column">
                                <p className="services-about mb-fs-14">
                                    Wellplexx offers excellent services for
                                    Design, Web Development, Mobile development,
                                    Web design, Brand Identity and Marketing.
                                    Our professionals will ensure your work is
                                    done right and that you will be loving the
                                    end result. We always try to make job as
                                    well as it possible!
                                </p>
                                <p className="provided">Services Provided by</p>
                                <div className="services-content services-content-1 flex jc-sb">
                                    <div className="services-name flex column">
                                        <div className="list">
                                            ● UI/UX Design
                                        </div>
                                        <div className="list">
                                            ● Web, mobile design
                                        </div>
                                        <div className="list">
                                            ● Illustrations & Iconography
                                        </div>
                                        <div className="list">
                                            ● Maintenance & Growth
                                        </div>
                                        <div className="list">
                                            ● Front-End Development
                                        </div>
                                        <div className="list">● Website</div>
                                    </div>
                                    <div className="services-name flex column mobile-hidden">
                                        <div className="list">
                                            ● Web, mobile development
                                        </div>
                                        <div className="list">
                                            ● Content Strategy
                                        </div>
                                        <div className="list">
                                            ● Research & discovery
                                        </div>
                                        <div className="list">
                                            ● Prototyping & Interactions
                                        </div>
                                        <div className="list">
                                            ● Competitive Analysis
                                        </div>
                                        <div className="list">
                                            ● Product management
                                        </div>
                                    </div>
                                </div>
                                <Link href="/contact">
                                    <a href="/contact">
                                        <div
                                            className="services-link flex ai-c"
                                            onMouseOver={() =>
                                                this.onButton(true)
                                            }
                                            onMouseOut={() =>
                                                this.onButton(false)
                                            }
                                        >
                                            <button
                                                className={
                                                    "services-button " +
                                                    (this.state.onButton
                                                        ? "services-button_over"
                                                        : "")
                                                }
                                            >
                                                <div className="flex but-text">
                                                    <div className="services-button-text">
                                                        Start your project
                                                    </div>
                                                    <div className="services-start">
                                                        <img src="../static/images/button-right-arrow.png" />
                                                    </div>
                                                </div>
                                            </button>
                                        </div>
                                    </a>
                                </Link>
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
                            <div className="vertical-line vertical-line-medium" />
                            <div className="can-do-text">
                                <h3 className="can-do-title">Our work</h3>
                                <div className="horizontal-line-small horizontal-line-work" />
                                <div className="text-back">
                                    {" "}
                                    Featured project{" "}
                                </div>
                            </div>
                        </div>
                        <p className="drug ta-c">DRAG FOR SCROLL</p>
                        <div className="drug-content m-0a flex column">
                            <div className="drug-line flex jc-c">
                                <div className="drug-circle" />
                                <div className="drug-dote">
                                    <img src="../static/images/dote-line.png" />{" "}
                                </div>
                                <div className="drug-circle" />
                            </div>

                            <div className="drug-hand flex jc-c">
                                <img src="../static/images/drug-hand.png" />{" "}
                            </div>
                        </div>
                    </div>
                    <div className="grid-item mt-100 z-1">
                        <div className="items flex jc-sb">
                            <div className="item item1 ibg flex column mobile-hidden">
                                <div className="item-img">
                                    <img src="../static/images/item_1.jpg" />
                                </div>
                                <div className="mb-w-50 br-25-0 mb-w-70">
                                    <h2 className="mt-20 fs-24 pl-25 mb-mt-00">
                                        Wellplexx
                                    </h2>
                                    <div>
                                        <p className="item-about pl-25 pr-25">
                                            Team of young professionals in
                                            web-design and apps development. We
                                            keep modern features included into
                                            our projects up to date.
                                        </p>
                                        <Link href="/contact">
                                            <a href="/contact" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="item item2 ibg flex column jc-sb mobile-hidden">
                                <div className="top-img">
                                    <img src="../static/images/item_2_1.jpg" />
                                </div>
                                <div className="bottom-img">
                                    <img src="../static/images/item_2_2.jpg" />
                                </div>
                            </div>
                            <div className="item item3 ibg flex column">
                                <div className="item-img">
                                    <img src="../static/images/meteor_cover.png" />
                                </div>
                                <div className="mb-w-50 br-25-0 mb-w-70">
                                    <h2 className="mt-20 fs-24 pl-25 mb-mt-00">
                                        Meteor Boost
                                    </h2>
                                    <div>
                                        <p className="item-about pl-25 pr-25">
                                            SMM related mobile application. Want
                                            to improve your social media
                                            conversion? You are welcome to use
                                            the top 1 app in the field. Our team
                                            created both: backend & frontend for
                                            the application!
                                        </p>
                                        <Link href="/meteor_page">
                                            <a
                                                href="/meteor_page"
                                                className="button-large mb-w-156 flex jc-c ai-c"
                                            >
                                                View full work
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="item item4 ibg flex column">
                                <div className="item-img">
                                    <img src="../static/images/wayne_cover.png" />
                                </div>
                                <div className="mb-w-50 br-25-0 mb-w-70">
                                    <h2 className="mt-20 fs-24 pl-25 mb-mt-00">
                                        Wayne inc
                                    </h2>
                                    <div>
                                        <p className="item-about pl-25 pr-25">
                                            Website for game-developing company.
                                            Arcades, casual, 3d games were
                                            created by the Wayne inc company.
                                            CMS was used in the case to make
                                            things work easier for owners.
                                        </p>
                                        <a
                                            href="http://lp.wellplexx.com/wayne"
                                            className="button-large mb-w-156 flex jc-c ai-c"
                                        >
                                            View full work
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="item item1 ibg flex column">
                                <div className="item-img">
                                    <img src="../static/images/english_cover.png" />
                                </div>
                                <div className="mb-w-50 br-25-0 mb-w-70">
                                    <h2 className="mt-20 fs-24 pl-25 mb-mt-00">
                                        Intleo language
                                    </h2>
                                    <div>
                                        <p className="item-about pl-25 pr-25">
                                            Learn english with big international
                                            community. Lists, cards, material.
                                            Things that each new user can use to
                                            improve foreign language skills on
                                            his own with the application's help.
                                        </p>
                                        <Link href="/intleo_page">
                                            <a
                                                href="/intleo_page"
                                                className="button-large mb-w-156 flex jc-c ai-c"
                                            >
                                                View full work
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="item item1 ibg flex column">
                                <div className="item-img">
                                    <img src="../static/images/mercury_cover.png" />
                                </div>
                                <div className="mb-w-50 br-25-0 mb-w-70">
                                    <h2 className="mt-20 fs-24 pl-25 mb-mt-00">
                                        Merkury Security
                                    </h2>
                                    <div>
                                        <p className="item-about pl-25 pr-25">
                                            Merkury understood the value of
                                            security from our inception. We
                                            invested heavily, from day one, in
                                            building a software framework to
                                            create, manage and orchestrate
                                            security.
                                        </p>
                                        <a
                                            href="http://lp.wellplexx.com/merkury"
                                            className="button-large mb-w-156 flex jc-c ai-c"
                                        >
                                            View full work
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container mt-100 z-1">
                        <div className="main-back h-165">
                            <div className="main-back-1"> </div>
                            <div className="main-back-2"> </div>
                            <div className="main-back-3"> </div>
                            <div className="main-back-4"> </div>
                        </div>
                        <div className="can-do flex">
                            <div className="vertical-line vertical-line-medium" />
                            <div className="can-do-text">
                                <h3 className="can-do-title">Project packs</h3>
                                <div className="horizontal-line-small horizontal-line-packs" />
                                <div className="text-back">Build your app</div>
                            </div>
                        </div>
                        <p className="services-about ta-c packs mb-fs-14">
                            Set up your new project with prepared service packs.
                            Wellplexx can provide wide range of services. We
                            have a lot of experience in these fields:
                            web-design, web-sites development, mobile
                            development, complex solutions, design, marketing.
                            Pick your set and let's start to work together!{" "}
                        </p>

                        <SetPercent />

                        <ChatBlock />
                    </div>
                </div>

                <ThemeStyle />

                <Media />
            </div>
        );
    }
}
export default Home;
