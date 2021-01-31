import React, { Component } from "react";
class FooterStyle extends Component {
    render() {
        return (
            <style jsx=" true" global="true">{`
                    .footer {
                        background-color: #14151A;
                        height: 360px;
                        color: #FAFAFA;
                        font-family: 'Roboto Regular', sans-serif;
                        flex-direction: column;
                        align-items: center;
                        justify-content: flex-end;
                    }
                    .footer-logo{
                        margin-bottom: 60px;
                    }
                    .socials {
                        display: flex;
                        flex-direction: row;
                        justify-content: center;
                        align-items: center;
                        margin-bottom: 20px;
                    }
                    .socials a{
                        width: 45px;
                        height: 45px;
                        background: #1d1f26;
                        border-radius: 100%;
                        margin: 0 25px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                    .socials a:hover{
                        background: #383C4A;
                    }
                    .socials .insta{
                        width: 20px;
                    }
                    .socials .fb{
                        width: 8px;
                    }
                    .socials .twitter{
                        width: 19px;
                    }
                    .footer-bottom{
                        width: 100%;
                        display: flex;
                        flex-direction: row;
                        justify-content: center;
                        align-items: center;
                        margin-bottom: 50px;
                    }
                    .agency {
                        color: #4b4d59;
                        font-size: 14px;
                        text-align: center;
                        margin-right: 80px;
                    }
                    .links-bottom{
                        padding-right: 15px;
                    }
                    .links-bottom a{
                        margin-right: 10px;
                    }
                    .links-bottom a:last-child{
                        margin: 0;
                    }
                `}</style>
        );
    }
}
export default FooterStyle;