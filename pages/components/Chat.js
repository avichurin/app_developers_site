import React from "react";

export default function Chat() {
    return (
        <div className="flex jc-fe z-2 pre-chat">
            <div className="go-chat flex">
                <div className="chat-text flex ai-c">
                    <div className="icon flex ai-c">
                        <img src="../static/images/chat.png" />
                    </div>
                    <p className="invite">
                        Ready to discuss the project?
                        <br /> Write us in chat
                    </p>
                </div>
                <div className="chat-go flex ai-c jc-c">
                    <span className="arrow-right">
                        <img src="../static/images/right-arrow.png" />{" "}
                    </span>
                </div>
            </div>
        </div>
    );
}
