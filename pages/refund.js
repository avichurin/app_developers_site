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
                                <h3 className="can-do-title">Refund</h3>
                                <div className="horizontal-line-small"></div>
                                <div className="text-back"> Conditions </div>
                            </div>
                        </div>
                        <div className="us-n">
                            <p>Our refund policy has been devised to define the situations under which Wellplexx will provide a refund, the procedure for claiming a refund and the responsibility of Wellplexx in circumstances resulting in such a claim. By registering for any of our services you are declaring that you accept and agree with all the terms and conditions outlined in the refund policy.</p>

                            <p>All the information that we collect is utilized for bettering our web site’s content, to notify the clients about our website updates or to look into the problem with their request. In case you do not want to receive any email from us in the future, please inform us by writing in to us either through e-mail or letter.</p>

                            <p><b>Coverage &amp; Scope</b></p>
                            Our refund policy covers the refunds by Wellplexx and/or a website owned and managed by Wellplexx a creative digital agency in USA.

                            <p>This policy does not have any application for companies which are not owned or controlled by Wellplexx or for persons not employed or managed by Wellplexx. This includes any third party service and / or product providers bound by contract and also, any third-party websites to which Wellplexx’s website link.

                            </p><p><b>Filing a Complaint</b></p>
                            At Wellplexx we take every project with the final product in sight. It is as much our responsibility as the client’s. So, we believe that every effort should be made to reach a solution that is fully acceptable reciprocally in case of any situation where dissatisfaction related to services comes. Only when things are completely out of hand that refund should be considered.

                            <p>Our final aim is to come to a mutually acceptable solution. Even then if for some reason you are not satisfied and think about going for a refund claim, it is our request that you take out a few precious minutes to write to us at <a style={{display: "inline-block"}} href="mailto:admin@wellplexx.com" className="p">admin@wellplexx.com</a> for a final dialogue prior to requesting a refund.

                            </p><p>Only if we are unable to reach a common ground with you after talks should a refund claim be filed.

                        </p><p><b>Eligibility for refund</b></p>
                            At Wellplexx every project is important to us and we make sure that we handle each project with utmost care and professionalism. Our aim is to provide the results as per the terms and conditions of the proposal. However, despite every measure if the client is not satisfied with the results and chooses to go for the dispute resolution process, we consider refund requests as per the following program in which our services and refund policy related to each service is very clearly listed:

                            <p><b>Website</b></p>

                            <p><b>Web / Graphic design</b></p>

                            <p><b>Delivery Time</b></p>

                            <p>Full refund: In cases where the project has not been started or if the initial design style has not been approved. The Full Refund policy will initiate after receive the upfront payment date and will take 180 Days to refund the amount.</p>

                            <p>Partial refund: If there is a failure to deliver as per our delivery policy after the approval of the initial design style. The partial refund will be in proportion to the work completed.</p>

                            <p>No refunds: If the project has been completed and uploaded on the server.</p>

                            <p><b>Logo design / brochure design</b></p>

                            <p>Full refund: In cases where the project has not been started or if the initial design style has not been approved.</p>

                            <p>Partial refund: If there is a failure to deliver as per our delivery policy after the approval of the initial design style. The partial refund will be in proportion to the work completed.</p>

                            <p>No refunds: If the project has been completed and uploaded on the server.</p>

                            <p><b>Web programming</b></p>

                            <p>Full refund: If the project has not been initiated.</p>

                            <p>There is an agreement for every web programming project. However, if there is no agreement and no clear discussion of refund policy, the following delivery policy will hold true.</p>

                            <p>Partial refund will be issued as per the judgement of the service provider if we fail to complete the project in accordance with the delivery policy and contract of agreement. The amount will be calculated by Wellplexx taking into account the proportion of the project completed and the proportion yet to be completed as per the pre-defined scope of the project.</p>

                            <p>Dedicated Hiring (Offshore staffing solution)
                                NOTE: Wellplexx’s delivery commitment is subject to:</p>

                            <p>Full refund: If the project has not been initiated by the programmer/ designer/ content writer/ SEO expert or any other resource and/or staff.</p>

                            <p>Proportionate refund: In accordance with the amount of work done till the time client decides to cancel the order.</p>

                            <p>No refund: For the time that the services have already been provided. If the client is not satisfied with any level of work, he must immediately bring it to the notice of our project manager and ask for any discounts for the work loss. Any negotiations at a later date will not be entertained.</p>

                            <p><b>Applicability of the Delivery Policy</b></p>
                            NOTE: Wellplexx’s delivery commitment is subject to:

                            <p>A project is not taken to be void unless the agreed upon payments are clear.</p>

                            <p>Refund policy is not applicable if the required information for the successful completion of the project is not given to us at proper time. If there is delay or failure in completion of the project due to improper communication from client, it cannot be attributed to Wellplexx.</p>

                            <p>If the information provided by the client is incomplete and/or complete information regarding the project is not provided at the initiation of the project, Wellplexx is not liable to follow its delivery or refund commitments.</p>

                            <p>There is no provision for compensation for the delay of delivery under any conditions, until and unless there is an agreement signed with a penalty clause for delay in delivery.</p>

                            <p><b>Limitation of Liability</b></p>
                            Wellplexx’s liability is bound by the value of the chunk of the project (as per our proposal) which remains incomplete at a given point point of time. Wellplexx is not obligated for losses due to the services provided/ not provided or the delay in the same at any point of time. The liability to refund holds only if the project has been cancelled by the client and such cancellation has been communicated toWellplexx in writing.

                            <p><b>Processing of Refunds</b></p>
                            The partial refunds will be processed and mailed within 180 business days of the date of cancellation and will be brought about using the method of payment agreed upon in the beginning of the project ie; refund by check or refund by credit card.

                            <p>And The full refunds will be processed and mailed within 50 business days of the date of cancellation and will be brought about using the method of payment agreed upon in the beginning of the project ie; refund by check or refund by credit card.</p>

                            <p><b>Changes</b></p>
                            Wellplexx may at any time, without prior notice under its sole discretion, amend this policy from time to time. You are therefore requested to review this policy periodically. Your continued use of Wellplexx website after any such amendments automatically implies your acceptance of the same thereof.<p></p>

                            <p><b>Contacting us regarding our refund policy</b></p>
                            If you have queries or suggestions regarding our refund policies kindly e–mail us at <a style={{display: "inline-block"}} href="mailto:admin@wellplexx.com" className="p">admin@wellplexx.com</a>
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