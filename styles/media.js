import React, { Component } from "react";
class Media extends Component {
    render() {
        return (

            <style jsx="true"  global="true">{`
                    @media (max-width: 820px) {
                        .footer-bottom {
                            margin-bottom: 50px !important;
                            flex-direction: column-reverse !important;
                        }
                        .links-bottom{
                            margin: 15px 0;
                            padding: 0;
                        }
                        .agency{
                            margin: 0 !important;
                        }
                    }
                    @media (min-width: 768px) {
                    
                    .mobile-menu, .App-link, .mb-button {
                        display: none;
                    }
                    }
                    .App-link {
                        top: 30px;
                        left: 20px;
                    }
                     .App-link img{
                       width:60%;
                       height: 100%;
                    }
                    @media (max-width: 767px) {
                        .mobile-hidden{
                            display: none!important;
                        }
                    .App-header {
                        display: none !important;
                        }
                    .project-name{
                        width: 100%;
                        text-align: left;
                    }
                    .project-desc{
                       
                        text-align: left;
                    }
                    .main {
                        margin-top: -1px;
                        }
                    .main-back, .vertical-line, .services-bg-1, .services-bg-2, .services-bg-3,
                     .pre-chat, .project-card-img{
                        display: none !important;
                        }
                     .mb-button {
                        margin: 0 auto 20px auto !important;
                        display: block !important;
                    }
                    .StartContent-1 {
                        margin-top: 150px !important;
                        height: 32vh !important;
                        margin-bottom: 70px !important;
                    }
                    .item-about-1 {
                        width: 136% !important;
                        text-align: left;
                     }
                    .inside {
                        text-align: center !important;
                        padding-top: 17px !important;
                        font-size: 38px !important;
                        letter-spacing: -2.5px !important;
                    }
                    .dev h1 {
                        margin: 0 0 0 0 !important;
                        padding 10px;
                        text-align: center;
                    }
                    .dev-text {
                        margin: 25px 0 0 25px !important;
                        width: 80% !important;
                    }
                    .text-back {
                        font-size: 66px !important;
                      }
                    .services {
                        flex-direction: column;
                        margin-top:0;
                    }
                    .services-img {
                        padding: 10px;
                    }
                    .services-description {
                        width: 80% !important;
                        margin: 0 auto;
                    }
                    .provided {
                        margin-top: 0px;
                    }
                    .services-content {
                        flex-direction: column;
                    }
                    .list {
                         max-width: 320px !important;
                    }
                    .packs-name span {
                        font-size: 14px!important;
                    }
                    .item {
                        flex-direction: row-reverse !important;
                        padding: 20px 0;
                    }
                    .items {
                        padding-left: 0 !important;
                    }
                    .item-img {
                        border-radius: 0!important;
                    }
                    .item-img img {
                        border-radius: 0!important;
                    }
                    .packs-button {
                        display: inline-flex;
                        width: 190px !important;
                        font-size: 14px !important;
                    }
                    .packs {
                        width: 80% !important;
                        margin: 0 auto !important;
                    }
                    .packs-button {
                        margin: 5px!important;
                    }
                    .packs-contain {
                        margin-top: 0 !important;
                        justify-content: center;
                    }
                    .services-content {
                        width: 92% !important;
                    }
                    .progress {
                        width: 95% !important;
                        margin: 0 auto;
                    }
                    .chat-card {
                        width: 225px !important;
                    }
                    .hello-text h3, .ok-text h3 {
                        font-size: 18px !important;
                        padding: 0px 15px !important;
                    }
                    .hello-text {
                        margin: 0 5px 0 0 !important;
                        border-radius: 15px !important;
                    }
                    .chat-propose {
                        font-size: 14px !important;
                    }
                    .chat-propose-icon img {
                         width: 30px !important;
                    }
                     .chat-propose {
                        padding: 0px 15px !important;
                    }
                     .hello {
                        left: 70px !important;
                    }
                     .ok-round {
                        width: 35px !important;
                        height: 30px !important;
                        margin: 0px 5px 0 0 !important;
                    }
                    .ok-round-small {
                        width: 18px !important;
                        height: 18px !important;
                        left: 15px !important;
                        top: 15px !important;
                        border-radius: 15px !important;
                    }
                    .ok {
                        left: -37px !important;
                    }
                    .robold {
                        margin: -26px auto 50px auto !important;
                    }
                    .bottom-img {
                        margin-right: 15px !important;
                        margin-top: 0 !important;
                        height: 96% !important;
                    }
                    .top-img {
                        margin-left: -35px !important;
                        margin-right: 35px!important;
                        height: 96% !important;
                    }
                    .bottom-img img, .top-img img {
                        height: 100%!important;
                    }
                    .headerLink {
                        font-size: 12px!important;
                        margin-right: 10px!important;
                    }
                    .project-card {
                        margin: 10px !important;
                        width: 80% !important;
                    }
                    .card-text {
                        line-height: 1.2!important;
                    }
                    .about-kek {
                        margin: 44px 0 0 35px important;
                    }
                    .item-about {
                        margin-top: 0;
                    }
                    .dev-img-1 img {
                        width: 70%;
                        display: block;
                        margin: 0 auto;
                    }
                    .dev-1 {
                        margin-top: 100px !important;
                    }
                    .dev-img-2 img {
                        width: 60%;
                    }
                    .dev-img-2 {
                        right: -42vw !important;
                        top: -11vh !important;
                        z-index: -1;
                        opacity: .5;
                    }
                    .case-content {
                        margin: 0 auto;
                    }
                    .case-title {
                        font-size: 18px !important;;
                        padding-left:10px !important;
                    }
                    .icon img {
                        width: 40px;
                        height: 40px;
                    }
                    .br-25-0 {
                        border-radius: 25px;
                    }

                    .input-group, .offer {
                       width: 320px !important;
                       margin: 0 auto !important;
                    }
                    .input-item {
                       padding-left: 20px !important;
                    }
                    .dev {
                       width: 80% !important;
                       text-align: center;
                    }
                    .main-chat {
                       bottom: -349px !important;
                       width: 320px !important;
                       right: 0px !important;
                    }
                    #buttons {
                       flex-direction: column !important;
                    }
                    .butt-row {
                       width: 100% !important;
                       justify-content: center !important;
                    }
                    .mb-w-100 {
                       width: 100% !important;
                    }
                    .mb-w-80 {
                       width: 80% !important;
                    }
                    .mb-w-90 {
                       width: 90% !important;
                    }
                    .mb-w-50 {
                       width: 50% !important;
                    }
                    .mb-w-70 {
                        width: 70% !important;
                     }
                    .mb-w-156 {
                       width: 156px !important;
                    }
                    .mb-fs-24 {
                       font-size: 24px !important;
                    }
                    .mb-fs-14{
                       font-size: 14px !important;
                    }
                    .mb-mt-50{
                       margin-top: 50px !important;
                    }
                    .mb-mt-0{
                       margin: 0 !important;
                    }
                    .mb-mt-00{
                       margin-top: 0 !important;
                    }
                    .mb-mt-10{
                       margin-top: 10px !important;
                    }
                    .mb-mt-20{
                       margin-top: 20px !important;
                    }
                    .mb-mt-110{
                       margin-top: 110px !important;
                    }
                    .mb-pl-20{
                       padding-left: 20px !important;
                    }
                    .mb-m-0a{
                       margin: 0 auto!important;
                    }
                    .mb-fd-c{
                       flex-direction: column !important;
                    }
                    .mb-ai-c{
                       align-items: center !important;
                    }
                    .mb-jc-c{
                       justify-content: center !important;
                    }
                    .mb-lh-12{
                       line-height: 1.2 !important;
                    }
                    .mb-pt-0 {
                        padding-top: 0 !important;
                    }
                    .mb-d-b {
                        display: block !important;
                    }
                    }
                    @media screen and (min-device-width : 320px) and (max-device-width : 820px) and (min-device-height : 320px) and (max-device-height : 415px) {
                    .StartContent-1 {
                        margin-top: 0px !important;
                        margin-bottom: 95px !important;
                    }
                    .dev-1 {
                        margin-top: 30px !important;
                        width: 78% !important;
                        margin: 0 auto;
                    }
                    .main-chat {
                        bottom: -349px !important;
                    }
                    .mb-mt-10{
                        margin-top: 10px !important;
                    }
                        }
                    @media screen and (min-device-width : 864px) and (max-device-width : 900px) and (min-device-height : 1024px) and (max-device-height : 1280px) {
                    .dev-img-1 {
                        right: -38vw !important;
                    }
                    .dev-1 {
                        margin-top: 91px !important;
                    }
                    .StartContent {
                        margin-top: 155px !important;
                    }
                    .item-about-1 {
                        width: 132%;
                    }
                    .StartContent-1 {
                        margin-top: 0!important;
                    }
                    .w-80{
                        width: 80%  !important;
                    }
                    .dev-img-2 img{
                        width: 60% !important;
                    }
                    .dev-img-2 {
                        right: -17vw !important;
                    }
                    }
                    @media screen and (min-device-width : 768px) and (max-device-width : 820px) and (min-device-height : 1024px) and (max-device-height : 1280px) {
                    .item-about-1 {
                        width: 132%;
                    }
                    .packs-name span {
                        font-size: 15px!important;
                    }
                    .w-80{
                        width: 80%  !important;
                    }
                    .dev-img-2 img{
                        width: 60% !important;
                    }
                    .dev-img-2 {
                        right: -17vw !important;
                    }
                    }
                    @media screen and (min-width: 320px) and (max-width: 374px) {
                    .label:after {
                            left: 12.5px !important;
                    }
                    .packs-button {
                        width:135px !important;
                    }
                    .inside {
                        font-size: 28px !important;
                    }
                    }
                    @media screen and (min-width: 375px) and (max-width: 413px) {
                    .label:after {
                            left: 13px !important;
                    }
                    .packs-button {
                        width:170px !important;
                    }
                    .inside {
                        font-size: 34px !important;
                    }
                    .StartContent-1 {
                        margin-top: 200px !important;
                    }
                    }
                    @media screen and (min-width: 412px) and (max-width: 767px) {
                    .label:after {
                            left: 12.5px !important;
                    }
                    }
                    @media screen and (min-width: 768px) and (max-width: 900px) {
                    .label:after {
                            left: 13px !important;
                            top: -4px !important;;
                    }
                    }
                   @media screen and (min-width: 901px) and (max-width: 1023px) {
                    .label:after {
                            left: 13px !important;
                    }
                    }
                    @media screen and (min-width: 1024px) and (max-width: 1166px) {
                    .label:after {
                            left: 13px !important;
                    }
                    }
                    @media screen and (min-width: 1167px) and (max-width: 1300px) {
                    .label:after {
                            left: 13px !important;
                    }
                    }
                    @media screen and (min-width: 1301px) and (max-width: 1400px) {
                    .label:after {
                            left: 13px !important;
                            top: -4px !important;
                    }
                    }
                    @media screen and (min-width: 1401px) and (max-width: 1500px) {
                    .label:after {
                             top: -4px !important;
                             left: 13px !important;
                    }
                    }
                    @media screen and (min-width: 1501px) and (max-width: 1600px) {
                    .label:after {
                             left: 13.5px !important;
                             top: -4px !important;
                    }
                    }
                    @media screen and (min-width: 1601px) and (max-width: 1920px) {
                    .label:after {
                             left: 13.2px !important;
                    }
                    }
                    @media screen and (min-width: 768px) and (max-width: 1023px) {
                    .t-jc-c {
                        justify-content: center !important;
                    }
                    .cards {
                        flex-direction: column !important;
                    }
                    .project-card {
                        width: 100% !important;
                        max-width: 610px !important;
                    }
                    .mb-ai-c{
                        align-items: center !important;
                    }
                    .project-card-1, .project-card-3, .project-card-5 {
                        margin: 0 0 15px 0 !important;
                    }
                    .item-about-1 {
                        width: 138%;
                    }
                    .t-fd-c {
                        flex-direction: column !important;
                    }
                    .links {
                        width: 70%;
                    }
                    .services {
                        flex-direction: column;
                        margin-top: 40px !important;
                    }
                    .mb-mt-10{
                        margin-top: 10px !important;
                    }
                    .services-description {
                        width: 95% !important;
                    }
                    .services-content-1 {
                        width: 75% !important;
                        justify-content: space-around !important;
                    }
                    .services-content-2 {
                        flex-direction: column !important;
                         display: block !important;
                    }
                    .services-name-1{
                        display: block !important;
                        width: 49% !important;
                        float: left;
                    }
                    .services-name-2{
                        display: block !important;
                        width: 49% !important;
                        float: right;
                    }
                    .services-name-3{
                        display: block !important;
                        width: 49% !important;
                        float: left !important;
                        clear: both;
                    }
                    .packs {
                        width: auto !important;
                    }
                    #buttons {
                        flex-direction: column !important;
                    }
                    .butt-row {
                        width: 100% !important;
                        justify-content: center !important;
                        margin-bottom: 15px !important;
                    }
                    .packs-button-1, .packs-button-3 {
                        margin-right: 15px !important;
                    }
                    .list {
                        max-width: 320px !important;
                    }
                    .packs-name span {
                         font-size: 15px !important;
                    }
                    .links-bottom {
                        width: 50% !important;
                        }
                    .dev {
                        width: 80% !important;
                    }
                         }
                    @media screen and (min-width: 1024px) and (max-width: 1279px) {
                    .inside {
                        font-size: 44px !important;
                    }
                    .links {
                        width: 55% !important;
                    }
                    .dev h1 {
                        font-size: 38px !important;
                    }
                    .dev-text {
                        font-size: 18px !important;
                    }
                    .services-description {
                        width: 68% !important;
                    }
                    .packs {
                        width: 93% !important;
                    }
                    .packs-name span{
                        padding-right: 10px !important;
                    }
                    .packs-button-1,  .packs-button-2, .packs-button-3{
                        margin-right: 15px !important;
                    }
                    .services-name-1, .services-name-2 {
                        margin-right: 15px !important;
                    }
                    .switch {
                        z-index: 10 !important;
                    }
                    .StartContent-2 {
                        height: 40vh !important;
                    }
                    .mb-mt-10{
                        margin-top: 10px !important;
                    }
                    .dev-img-2 img {
                         width: 65% !important;
                    }
                    .dev.can-do {
                         width: 70%!important;
                    }
                    .w-80{
                         width: 80%  !important;
                    }
                    }
                    @media screen and (min-width: 1280px) and (max-width: 1600px) {
                    .StartContent {
                        margin-top: 200px!important;
                    }
                    }
                    @media screen and (device-width: 1024px) and (device-height: 768px) {
                    .label:after {
                        left: 12.7px !important;
                    }
                     .StartContent-2 {
                        height: 47vh !important;
                        margin-top: 0 !important;
                    }
                    }
                    @media screen and (device-width: 768px) and (device-height: 1024px) {
                    .StartContent-2 {
                        height: 37vh !important;
                    }
                    }
                    @media screen and (device-width: 320px) and (device-height: 568px) {
                    .dev-1 {
                        margin-top: 60px !important;
                    }
                    }
                    @media screen and (device-width: 1024px) and (device-height: 1366px) {
                    .StartContent {
                        margin-top: 200px!important;
                    }
                    .label:after {
                        left: 13px !important;
                    }
                    .dev-img-1 {
                        top: -12vh !important;
                    }
                    }
                     @media screen and (min-width: 576px)  {
                    .container, .main-back {
                    width: 540px;
                    }
                    }
                    @media screen and (min-width: 768px)  {
                    .container, .main-back {
                    width: 720px;
                    }
                    }
                    @media screen and (min-width: 992px)  {
                    .container, .main-back {
                    width: 960px;
                    }
                    }
                    @media screen and (min-width: 1200px)  {
                    .container, .main-back {
                    width: 1160px;
                    }
                    }
                `}</style>
        );
    }
}
export default Media;
