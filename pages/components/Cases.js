import React from "react";

export default function Cases() {
    return (
        <div className="container mt-100 z-1">
            <div className="can-do flex">
                <div className="vertical-line vertical-line-medium" />
                <div className="can-do-text">
                    <h3 className="can-do-title">Result & cases</h3>
                    <div className="horizontal-line-small horizontal-line-packs" />
                    <div className="text-back">Total success</div>
                </div>
            </div>
            <div className="case-content column flex">
                <div className="flex mb-fd-c">
                    <div className="flex mr-20" style={{ flexBasis: "50%" }}>
                        <div className="icon flex ai-b">
                            <img src="../static/images/icon_1.png" />
                        </div>
                        <div className="flex column">
                            <h4 className="case-title m-0 pl-20">
                                Good design less problems
                            </h4>
                            <p className="item-about pl-20 mb-fs-14 mb-lh-12 mt-10 mb-w-90 mb-mt-10">
                                We use the most advanced technologies in order
                                to place spectacular animations into the
                                website’s production. This allows you to use the
                                product with just the same feeling, which
                                designer has put into it. Moreover, it is quite
                                effective from the perspective of getting more
                                attention to a particular area of the website.
                                This in itself leads to a strong conversion
                                increase.
                            </p>
                        </div>
                    </div>
                    <div className="flex mb-mt-20" style={{ flexBasis: "50%" }}>
                        <div className="icon flex ai-b">
                            <img src="../static/images/icon_1.png" />
                        </div>
                        <div className="flex column">
                            <h4 className="case-title m-0 pl-20">
                                Professional developers
                            </h4>
                            <p className="item-about pl-20 mb-fs-14 mb-lh-12 mt-10 mb-w-90 mb-mt-10">
                                Team of young professionals in web-design and
                                apps development. We keep modern features
                                included into our projects up to date.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex mt-95p mb-fd-c mb-mt-20">
                    <div className="flex mr-20" style={{ flexBasis: "50%" }}>
                        <div className="icon flex ai-b">
                            <img src="../static/images/icon_1.png" />
                        </div>
                        <div className="flex column">
                            <h4 className="case-title m-0 pl-20">
                                Wide profile
                            </h4>
                            <p className="item-about pl-20 mb-fs-14 mb-lh-12 mt-10 mb-w-90 mb-mt-10">
                                Wellplexx offers excellent services for Design,
                                Web Development, Mobile development, Web design,
                                Brand Identity and Marketing. Our professionals
                                will ensure your work is done right and that you
                                will be loving the end result. We always try to
                                make job as well as it possible!
                            </p>
                        </div>
                    </div>
                    <div
                        className="flex  mb-mt-20"
                        style={{ flexBasis: "50%" }}
                    >
                        <div className="icon flex ai-b">
                            <img src="../static/images/icon_1.png" />
                        </div>
                        <div className="flex column">
                            <h4 className="case-title m-0 pl-20">
                                Support and contact
                            </h4>
                            <p className="item-about pl-20 mb-fs-14 mb-lh-12 mt-10 mb-w-90 mb-mt-10">
                                Our support team would like to help you with any
                                questions related to a project. Contact the
                                Wellplexx team, and by using our joint effort we
                                will create the website, which will strengthen
                                your business and build upon your revenue!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
