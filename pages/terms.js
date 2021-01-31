import  React, {Component} from "react";
import Header from "./header";
import ThemeStyle from "../styles/theme";
import Media from "../styles/media";
import Footer from "./footer";
import Link from "next/link";
class Refund extends Component {
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
                                <h3 className="can-do-title">Terms of Use</h3>
                                <div className="horizontal-line-small"></div>
                                <div className="text-back"> Conditions </div>
                            </div>
                        </div>
                        <div className="us-n">
                            <p><b>Notice</b></p>
                            By accessing and using Wellplexx′s website (www.wellplexx.com) or by downloading materials from Wellplexx website or using any of the services we offer, you agree to abide by the terms and conditions of use detailed below. If you do not agree to be bound by these terms and conditions of use, please refrain from using Wellplexx website or our services.

                            <p><b>Use Of The Site and our Services</b></p>
                            References to “we”, “us” or “our” throughout this Website (‘the Site’) pertains to Wellplexx which operates the Site.

                            <p>We reserve the right to modify these terms and conditions from time to time without any prior notice, after which the use of our website will be governed by that revised version. You are hence, recommended to check the terms and conditions on the website regularly. Keep in mind that use of Wellplexx’s services is also subject to, and controlled by, the Agreement subscribed to by the User; and the use of the website is also subject to the Privacy Policy notified on the website.</p>

                            <p><b>General Terms</b></p>
                            Wellplexx is an IT services company based in USA and the project execution(design/development/SEO/SEM activities)of all the projects we undertake will be taken place at our development centers in USA. Our normal working hours are from 9 AM to 9 PM, mountain time, from Monday to Friday. All Sundays and alternative Saturdays (Second &amp; Fourth) will be off for the company. All public holidays in USA or in the state of Utah will also be holidays for the company.

                            <p><b>Use Of The Site</b></p>
                            There is no charge imposed by us for accessing the Site but you are liable to pay the cost of the communications link you used to visit the Site.

                            <p>Access to the Site may be suspended, restricted or terminated any time. We cannot guarantee that the Site will be error-free and we are not to be held liable for unavailability of the same.</p>

                            <p>The content of the pages on the website are for general information and use only. It is subject to change without notice.</p>

                            <p>Neither Wellplexx nor any third party provides any warranty or guarantee to the accuracy, timeliness, performance, completeness or suitability of the information and materials found or offered on the website for any particular purpose.</p>

                            <p>Wellplexx shall not be in any way liable for any inaccuracy, error, defect or fault related to the information and materials found or offered on the website.</p>

                            <p>Use of any information or materials on the website is entirely at User’s own risk, for which Wellplexx shall not be liable.</p>

                            <p>It shall be User’s own responsibility to ensure that any product, service or information available through the website meets the User’s requirements.</p>

                            <p>Unauthorised use of the website may give rise to claim for damages and/or it will be a criminal offence punishable under the applicable penal law.</p>

                            <p><b>Links to other websites</b></p>
                            Wellplexx makes no representation of any other websites that you may access through Wellplexx′s website or which may be linked to Wellplexx′s website. We are not responsible for the privacy practices of other websites linked from Wellplexx′s website. Users are required to read the privacy policies or statements of other such websites they visit. Any concern regarding any external link should be directed to the website administrator of the site concerned.

                            <p><b>Intellectual Property</b></p>
                            All rights related to the web design, text, graphics and other content, the selection and arrangements are licensed to Wellplexx. The content of this website is protected by international copyright laws and other intellectual property rights. All company names and logos mentioned in this website are the trademarks, service-marks or trading names of their respective owners, including us. You may not modify, copy, reproduce, republish, upload, post, transmit or distribute by any means or in any manner, any material or information on the website or downloaded from this website including but not limited to text, graphics, video, messages, code and/or software without our prior written consent, except where expressly invited to do so.

                            <p>Wellplexx respects the intellectual property of others. If you believe that your work has been copied in a way that constitutes copyright infringement, please contact us by e-mail at <a style={{display: "inline-block"}} href="mailto:admin@wellplexx.com" className="p">admin@wellplexx.com</a>

                            </p><p><b>Advertising &amp; Sponsorship</b></p>
                            The Site may contain advertising and sponsorship. Advertisers and sponsors are responsible for ensuring that material submitted for inclusion in the Site complies with international and national laws. We will not be held responsible for any error or inaccuracy in advertising material.

                            <p><b>Confidentiality</b></p>
                            We understand the importance of confidentiality to the successful planning, establishment and running of your business. Therefore, we will not use, divulge or communicate to any person, except as may be required by law or any legal or regulatory authority, any confidential information concerning the business or affairs of any customer, prospective customer, or supplier of Wellplexx, or any of our international distributors. All of us shall endeavor our best to prevent the publication or disclosure of any confidential information concerning such matters.

                            <p><b>Applicability Of Materials</b></p>
                            We have done our best to ensure that our website complies with international laws. However, we make no representations that the materials on our website are appropriate or available for use in all international locations. Those who visit our website from other locations do so, on their own initiative and are responsible to comply with all applicable laws. If you use our website, browse it or use any material or content or services offered through our website violating any applicable law in your jurisdiction(s), you are not authorized to view or use our website and you must exit immediately.

                            <p><b>Access To Password Protected Areas</b></p>
                            Access to and use of specific areas of this website requiring a password is restricted to authorized users only. These areas are regulated by a separate legal agreement between Wellplexx and the user. Unauthorized access will be prosecuted.

                            <p><b>User Information</b></p>
                            We encourage feedback on how to improve this website. Feedback may be e-mailed to gmail.com Any feedback hence received shall be deemed to be non-confidential and Wellplexx has the right to use such information in any way we deem to be fit. Users therefore agree that any information provided to us shall not contain defamatory, offensive, threatening, obscene, harassing, infringing or otherwise unlawful material or proprietary material. We shall not be held liable for any such material and we reserve the exclusive rights to remove it from the website without liability.

                            <p><b>Disabling Devices</b></p>
                            If the user wants to post any content on the website, he/she should refrain from uploading any posting or postings which contain any viruses or other contaminating or destructive devices. We strive to ensure that our website is free from any such viruses/ devices or features but we give no warranty to that effect and will accept no liability whatsoever for any loss or damage suffered by the user.

                            <p><b>Governing Law</b></p>
                            Use of this website and any dispute arising out of its use are subject to the laws of State of Utah in USA. Any legal action or proceedings related to or arising out of this Terms and Conditions shall be settled in the courts and/or tribunals in Salt Lake City in the State of Utah in USA.
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
export default Refund;