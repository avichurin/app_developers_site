import React from "react";
import Link from "next/link";

export default function ChatBlock() {
    const monthNames = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ];
    let dt = new Date();
    let day = dt.getDate();
    if (day < 10) {
        day = "0" + day;
    }

    let date = `${day} ${monthNames[dt.getMonth()]}, ${dt.getFullYear()}`;

    return (
        <div>
            <div className="can-do flex mt-175 mb-mt-50">
                <div className="vertical-line vertical-line-medium" />
                <div className="can-do-text">
                    <h3 className="can-do-title">Just chat with us?</h3>
                    <div className="horizontal-line-small horizontal-line-chat" />
                    <div className="text-back">Let's get to work?</div>
                </div>
            </div>
            <div className="chat-content mb-mt-10">
                <div className="main-back fly">
                    <div className="main-back-1"> </div>
                    <div className="main-back-2"> </div>
                    <div className="main-back-3"> </div>
                    <div className="main-back-4"> </div>
                </div>
                <div className="chat-card flex column">
                    <div className="chat-header flex ai-c">
                        <div className="chat-round-red" />
                        <div className="chat-round-yellow" />
                    </div>
                    <div className="chat-body">
                        <p className="date">{date}</p>
                        <div className="hello flex">
                            <div className="hello-text">
                                <h3 className="can-do-title">Hello,</h3>
                                <p className="chat-propose">
                                    {" "}
                                    I have an idea for a mobile app!
                                </p>
                            </div>
                            <div className="chat-propose-icon">
                                <img src="../static/images/chat-icon.png" />{" "}
                            </div>
                        </div>
                        <div className="ok flex">
                            <div className="ok-round">
                                <div className="ok-round-small" />
                            </div>
                            <div className="ok-text">
                                <h3 className="can-do-title">Ok,</h3>
                                <p className="chat-propose"> Let’s do it!</p>
                            </div>
                        </div>
                    </div>
                    <Link href="/contact">
                        <a href="/contact">
                            <button className="services-button services-button-large flex jc-c ai-c robold">
                                Get in touch
                            </button>
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    );
}
