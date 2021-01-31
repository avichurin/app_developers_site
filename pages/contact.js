import  React, {Component} from "react";
import Header from "./header";
import ThemeStyle from "../styles/theme";
import Media from "../styles/media";
import Footer from "./footer";
import Form from "./components/form";
class Contact extends Component {
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
                                    <h1 className="mb-fs-24">Let’s create progress together</h1>
                                </div>
                            </div>
                        </div>
                       <Form/>
                    </div>
                </div>
                <Footer/>
                <ThemeStyle/>
                <Media/>
            </div>
        );
    }
}
export default Contact;