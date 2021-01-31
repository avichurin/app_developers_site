import  React, {Component} from "react";
import Header from "./header";
import ThemeStyle from "../styles/theme";
import Media from "../styles/media";
import Footer from "./footer";
import Link from "next/link";
class Privacy extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className= "main flex column">
                    <div className="container z-1 ps-rel pl-pr-20">
                        <div className="main-back">
                            <div className="main-back-1"> </div>
                            <div className="main-back-2"> </div>
                            <div className="main-back-3"> </div>
                            <div className="main-back-4"> </div>
                        </div>
                        <div className="can-do flex">
                            <div className="vertical-line vertical-line-medium"/>
                            <div className="can-do-text">
                                <h3 className="can-do-title">Privacy Policy</h3>
                                <div className="horizontal-line-small"></div>
                                <div className="text-back"> Conditions </div>
                            </div>
                        </div>
                        <div className="us-n">
                            <p>This Privacy Policy governs the manner in which Wellplexx collects, uses, maintains and discloses information collected from users (each, a “User”) of the wellplexx.com website (“Site”). This privacy policy applies to the Site and all products and services offered by Wellplexx.</p>

                            <p><b>Personal identification information</b></p>
                            We may collect personal identification information from Users in a variety of ways, including, but not limited to, when Users visit our site, subscribe to the newsletter, and in connection with other activities, services, features or resources we make available on our Site. Users may be asked for, as appropriate, email address, phone number. We will collect personal identification information from Users only if they voluntarily submit such information to us. Users can always refuse to supply personally identification information, except that it may prevent them from engaging in certain Site related activities.

                            <p><b>Non-personal identification information</b></p>
                            We may collect non-personal identification information about Users whenever they interact our Site. Non-personal identification information may include the browser name, the type of computer and technical information about Users means of connection to our Site, such as the operating system and the Internet service providers utilized and other similar information.

                            <p><b>Web browser cookies</b></p>
                            Our Site may use “cookies” to enhance User experience. User’s web browser places cookies on their hard drive for record-keeping purposes and sometimes to track information about them. User may choose to set their web browser to refuse cookies, or to alert you when cookies are being sent. If they do so, note that some parts of the Site may not function properly.

                            <p><b>How we use collected information</b></p>
                            Wellplexx collects and uses Users personal information for the following purposes:

                            <p>To improve our Site </p>
                            — We continually strive to improve our website offerings based on the information and feedback we receive from you.

                            <p>To send periodic emails </p>
                            — If User decides to opt-in to our mailing list, they will receive emails that may include company news, updates, related product or service information, etc. If at any time the User would like to unsubscribe from receiving future emails, we include detailed unsubscribe instructions at the bottom of each email.

                            <p><b>How we protect your information</b></p>
                            We adopt appropriate data collection, storage and processing practices and security measures to protect against unauthorized access, alteration, disclosure or destruction of your personal information, username, password, transaction information and data stored on our Site.

                            <p><b>Sharing your personal information</b></p>
                            We do not sell, trade, or rent Users personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners, trusted affiliates and advertisers for the purposes outlined above.We may use third party service providers to help us operate our business and the Site or administer activities on our behalf, such as sending out newsletters or surveys. We may share your information with these third parties for those limited purposes provided that you have given us your permission.

                            <p><b>Third-party websites</b></p>
                            Users may find advertising or other content on our Site that link to the sites and services of our partners, suppliers, advertisers, sponsors, licensors and other third parties. We do not control the content or links that appear on these sites and are not responsible for the practices employed by websites linked to or from our Site. In addition, these sites or services, including their content and links, may be constantly changing. These sites and services may have their own privacy policies and customer service policies. Browsing and interaction on any other website, including websites which have a link to our Site, is subject to that website’s own terms and policies.

                            <p><b>Changes to this Privacy Policy</b></p>
                            Wellplexx has the discretion to update this privacy policy at any time. When we do, we will revise the updated date at the bottom of this page. We encourage Users to frequently check this page for any changes to stay informed about how we are helping to protect the personal information we collect. You acknowledge and agree that it is your responsibility to review this privacy policy periodically and become aware of modifications.

                            <p><b>Your acceptance of these terms</b></p>
                            By using this Site, you signify your acceptance of this policy and terms of service. If you do not agree to this policy, please do not use our Site. Your continued use of the Site following the posting of changes to this policy will be deemed your acceptance of those changes.

                            <p><b>Contacting us</b></p>
                            If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please contact us at: <a style={{display: "inline-block"}} href="mailto:admin@wellplexx.com" className="p">admin@wellplexx.com</a>
                        </div>
                        <div className="flex jc-c mt-70">
                            <div className="links-bottom flex jc-sb ai-c">
                                <Link href="/privacy"><a className="headerLink headerLinks" href="/privacy">Privacy Policy</a></Link>
                                <Link href="/refund"><a className="headerLink headerLinks" href="/refund">Refund</a></Link>
                                <Link href="/terms"><a className="headerLink headerLinks" href="/terms">Terms of Use</a></Link>

                            </div>
                        </div>
                    </div>

                </div>
                <Footer/>
                <ThemeStyle/>
                <Media/>
            </div>
        );
    }
}
export default Privacy;