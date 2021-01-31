import  React, {Component} from "react";
import Header from "./header";
import ThemeStyle from "../styles/theme";
import Media from "../styles/media";
import Footer from "./footer";
import Link from 'next/link';
import ChatBlock from "./components/ChatBlock";

class Works extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className= "main flex column">
                    <div className="container z-1 ps-rel">
                        <div className="main-back">
                            <div className="main-back-1"> </div>
                            <div className="main-back-2"> </div>
                            <div className="main-back-3"> </div>
                            <div className="main-back-4"> </div>
                        </div>
                        <div className="mt-100 flex jc-sb mb-mt-50">
                            <div className="dev flex w-50">
                                <div className="vertical-line vertical-line-work"></div>
                                <div className="column w-99 z-2">
                                    <h1 className="mb-fs-24">Featured client  projects</h1>
                                </div>
                            </div>
                        </div>
                        <div className="column flex mt-100 mb-mt-50">
                            <div className="flex mb-fd-c mb-ai-c cards">
                                <div className="project-card project-card-1 w-50 flex mr-20">
                                    <div className="card-content ">
                                    <p className="app-type m-0">Mobile app</p>
                                    <div className="project-logo"><img src="../static/images/project-logo.png"/> </div>
                                    <h3 className="card-title">Meteor Boost</h3>
                                    <p className="card-text m-0"> SMM related mobile application. Want
                                            to improve your social media
                                            conversion? You are welcome to use
                                            the top 1 app in the field. Our team
                                            created both: backend & frontend for
                                            the application!</p>
                                    <Link href="/meteor_page"><a className="card-button card-button-1 flex jc-c ai-c" href="/meteor_page">View case study</a></Link>
                                    </div>
                                    <div className="project-card-img project-card-img-1"></div>
                                </div>
                                <div className="project-card project-card-2 w-50 flex">
                                    <div className="card-content">
                                    <p className="app-type m-0">Website</p>
                                    <div className="project-logo"></div>
                                    <h3 className="card-title">Sneakers customs</h3>
                                    <p className="card-text m-0"> The website sells beautifully designed sneakers and offers to create your own design. 
                                    Customers immediately noticed a handy tool that allows the customer to freely choose their own design for their sneakers.</p>
                                    <a href="http://lp.wellplexx.com/sneakerscustoms" className="card-button card-button-3 flex jc-c ai-c">View case study</a>
                                    </div>
                                    <div className="project-card-img project-card-img-2"></div>
                                </div>
                            </div>
                            <div className="flex mb-fd-c mt-20 mb-ai-c mb-mt-0 cards">
                                <div className="project-card project-card-3 w-50 flex mr-20">
                                    <div className="card-content ">
                                    <p className="app-type m-0">Website</p>
                                    <div className="project-logo"></div>
                                    <h3 className="card-title">Merkury Security</h3>
                                    <p className="card-text m-0"> Merkury understood the value of
                                            security from our inception. We
                                            invested heavily, from day one, in
                                            building a software framework to
                                            create, manage and orchestrate
                                            security.</p>
                                    <a href="http://lp.wellplexx.com/merkury" className="card-button card-button-3 flex jc-c ai-c">View case study</a>
                                    </div>
                                    <div className="project-card-img project-card-img-3"></div>
                                </div>
                                <div className="project-card project-card-4 w-50 flex">
                                    <div className="card-content">
                                    <p className="app-type m-0 black">Mobile app</p>
                                    <div className="project-logo"><img src="../static/images/english_logo.png"/> </div>
                                    <h3 className="card-title black">Intleo language</h3>
                                    <p className="card-text m-0 black">Learn english with big international
                                            community. Lists, cards, material.
                                            Things that each new user can use to
                                            improve foreign language skills on
                                            his own with the application's help.</p>
                                    <Link href="/intleo_page"><a className="card-button card-button-4 flex jc-c ai-c" href="/meteor_page">View case study</a></Link>
                                    </div>
                                    <div className="project-card-img project-card-img-4"></div>
                                </div>
                            </div>
                        </div>
                        <ChatBlock/>
                    </div>
                </div>
                <Footer/>
                <ThemeStyle/>
                <Media/>
            </div>
        );
    }
}
export default Works;