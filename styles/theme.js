import React, { Component } from "react";
class ThemeStyle extends Component {
  render() {
    return (
      <style jsx=" true" global="true">{`
                    @font-face  {
                      font-family: "GothamProBlack";
                      src: url("../static/fonts/GothamProBlack.ttf") format("truetype"), 
                      url("../static/fonts/GothamProBlack.otf") format("embedded-opentype"),
                      url("../static/fonts/GothamProBlack.etf") format("opentype"),
                      url("../static/fonts/GothamProBlack.woff") format("woff");
                      font-weight: bold;
                    }
                     @import url('https://fonts.googleapis.com/css?family=Roboto');
                    body, html {
                        padding:0;
                        margin:0;
                        color: #FAFAFA;
                        overflow-x: hidden;
                        font-family: 'Roboto Regular', sans-serif;
                    }
                    .main {
                        background-color: #16171C;
                        background-image:url('../static/images/hzsho.png');
                        background-repeat: repeat-y;
                        margin-top: -1px;
                        background-position-y: 5%;
                        padding-bottom: 60px;
                    }
                    .StartContent {
                        height: 65vh;
                        margin-top: 155px;
                        position:relative;
                    }
                    .StartContent-1 {
                        height: 50vh;
                    }
                    .ibg {
                        background: #1C1D24;
                        border-radius: 25px;
                    }
                    .headerLinks {
                        color: #F42162!important;
                    }
                    .us-n {
                           user-select: none;
                    }
                    .p {
                    cursor:pointer;
                    }
                    .item-img {
                        border-radius: 25px 25px 0 0;
                        width: 360px;
                    }
                    .item-img img {
                        width: 100%;
                        border-radius: 25px 25px 0 0;
                    }
                    .pack-in{
                        position: absolute;
                        color: #fff;
                        font-family: 'GothamProBlack', "Arial Black", sans-serif;
                        font-size: 18px;
                        font-weight: 600;
                        top: 40%;
                        left: 43%;
                         user-select: none;
                    }
                    /*.pack-out{
                        display: block;
                        text-align: center;
                         user-select: none;
                    }*/
                    .fs-24 {
                        font-size:24px !important;
                        font-family: 'GothamProBlack', "Arial Black", sans-serif;
                    }
                    .button-large{
                        position: relative;
                        height: 50px;
                        border: 1px solid #F42162;
                        border-radius: 25px;
                        background: #F42162;
                        cursor: pointer;
                        font-family: 'Roboto Bold', sans-serif;
                        font-size:16px;
                        color:#F1F2F8;
                        font-weight: 600;
                        width: 320px;
                        margin: 0 auto 20px auto;
                        text-transform: none !important;
                    }
                    .button-large:hover {
                        color:#CFD2D8 !important;
                    }
                    .top-img img, .bottom-img img {
                        border-radius: 25px;
                    }
                    .bottom-img {
                        margin-top: 15px;
                    }
                    .item-about-1 {
                        font-size: 16px;
                        color: #F1F2F8;
                        line-height: 1.4;
                        padding-left: 48px;
                    }
                    .vertical-line {
                        height:240px;
                        width: 5px;
                        background: #F81350;
                    }
                    .vertical-line-work {
                        height:160px;
                        width: 5px;
                        background: #F81350;
                    }
                    .dev-img img {
                        width: 100%;
                    }
                    .dev-img {
                        position: absolute;
                        right: -8vw;
                    }
                    .dev-img-1 {
                        position: absolute;
                        right: -18vw;
                        top: -24vh;
                        opacity: .6;
                        z-index: -1;
                    }
                    .dev-img-2 {
                        position: absolute;
                        right: 0;
                        top: 0;
                        z-index: -1;
                    }
                    .dev-text {
                        font-size: 20px;
                        color: #FAFAFA;
                        line-height: 1.5;
                        margin: 25px 0 0 35px;
                        width: 80%;
                    }
                    .dev {
                        width: 75%;
                    }
                    .container {
                        margin: 0 auto;
                    }
                    .dev h1 {
                        font-size:48px;
                        font-family: "GothamProBlack","Arial Black";
                        margin: 20px 0 0 35px;
                    }
                    .switch {
                         width: 25px;
                         height: 40px;
                         border: 1px solid #FAFAFA;
                         border-radius: 12px;
                         cursor: pointer;
                    }
                    .switch:hover {
                        transform: scale(0.95);
                    }
                    .switch-dote {
                         height:8px;
                         width: 4px;
                         background: #FAFAFA;
                         border-radius: 2px;
                         margin: 10px auto;
                    }
                    .go-chat {
                         height:90px;
                         border-radius: 25px 25px 0 0;
                         border: 1px solid transparent;
                         right: 35px;
                         position: absolute;
                         width: 350px;
                    }
                    .chat-go {
                         width: 45px;
                         background: #F7F7F7;
                         color: #000;
                         border-radius: 0 25px 0 0;
                         border: 1px solid transparent;
                         cursor: pointer;
                    }
                    .chat-text {
                         background: #fff;
                    }
                    .chat-text {
                         color: #000;
                         border-radius: 25px 0 0 0;
                         border: 1px solid transparent;
                    }
                    .chat-text .icon {
                         margin:7px 0 0 10px;
                    }
                    .invite {
                        font-size: 16px;
                        font-family: 'Roboto Medium', sans-serif;
                        padding-right: 15px;
                        padding-left: 5px;
                    }
                    .vertical-line-medium {
                        height:77px;
                    }
                    .can-do-title {
                        font-size: 30px;
                        font-family: 'Roboto Black', sans-serif;
                        padding-left: 35px;
                    }
                    .horizontal-line-small {
                        height:11px;
                        width: 45px;
                        position: absolute;
                        right: -4px;
                        bottom: 32px;
                        z-index: -1;
                        background: #FC2958;
                    }
                    .can-do-text {
                        position: relative;
                        z-index: 1;
                    }
                    .services-round img {
                        width: 100%;
                    }
                    .services-round {
                        background: #1C1D24;
                        border-radius: 50%;
                        width: 100%;
                        position: relative;
                    }
                    .services-img {
                        padding: 0 50px 0 10px;
                    }
                    .services-bg-1 {
                        position: absolute;
                        height:900px;
                        width: 900px;
                        border: 2px solid #1C1D24;
                        border-radius: 50%;
                        bottom: -11vh;
                        left: -7vw;
                        z-index: -1;
                    }
                    .services-bg-2 {
                        position: absolute;
                        height:1346px;
                        width: 1346px;
                        border: 2px solid #1C1D24;
                        border-radius: 50%;
                        bottom: -32vh;
                        left: -18vw;
                        z-index: -1;
                    }
                    .services-bg-3 {
                        position: absolute;
                        height:1941px;
                        width: 1941px;
                        border: 2px solid #1C1D24;
                        border-radius: 50%;
                        bottom: -61vh;
                        left: -34vw;
                        z-index: -1;
                    }
                    .services-about {
                        font-size: 18px;
                        color: #F1F2F8;
                        line-height:2;
                    }
                    .provided {
                        font-size: 16px;
                        color: #F1F2F8;
                        font-family: 'Roboto Medium', sans-serif;
                    }
                    .services-description {
                        width:40%;
                    }
                    .list, .list-pack {
                         font-size:16px;
                         margin-bottom:35px;
                    }
                    .list:first-letter {
                     font-size:16px;
                     color: #FC2958;
                     vertical-align: text-bottom;
                    }
                    .services-content {
                        padding-top:25px;
                        width: 93%;
                    }
                    .services-link{
                      position: relative;
                    }
                    .services-button {
                        width: 100px;
                        height: 50px;
                        border: 1px solid #F42162;
                        border-radius: 25px;
                        background: #F42162;
                        cursor: pointer;
                        font-family: 'Roboto Bold', sans-serif;
                        font-size:16px;
                        color:#F1F2F8;
                        font-weight: 600;
                        text-transform: none !important;
                        -webkit-transition: width 0.5s ease-in-out;
                        -moz-transition: width 0.5s ease-in-out;
                        -o-transition: width 0.5s ease-in-out;
                        transition: width 0.5s ease-in-out;
                    }
                    .services-button_over{
                      width: 200px;
                    }
                    .services-button-text:hover {
                        color:#CFD2D8 !important;
                    }
                    .services-block {
                        text-transform:none;
                        text-decoration:none;
                    }
                    .services-button-text {
                        font-family: 'Roboto Bold', sans-serif;
                        font-size:16px;
                        color:#F1F2F8;
                        margin-left: -70px;
                        margin-right: 10px;
                        font-weight: 600;
                        margin-top: 2px;
                    }
                    .services-start {
                        margin-top: 3px;
                    }
                    .horizontal-line-work{
                        width: 80px;
                        right: -4px;
                    }
                    .horizontal-line-packs{
                       width:90px;
                       right: -4px;
                    }
                    .item-text h2 {
                       font-size:48px;
                       font-family: "GothamProBlack","Arial Black";
                       margin-bottom: -30px;
                    }
                    .services-button-large {
                       width:190px;
                       margin-top: 55px;
                       margin-left: 55px;
                       text-transform: none !important;
                    }
                    .services-button-large:hover {
                        color:#CFD2D8 !important;
                    }
                    .grid-item{
                        padding: 0;
                        overflow: hidden;
                        touch-action: manipulation;
                    }
                     .items {
                        position: relative;
                        width: auto;
                        overflow: hidden;
                        transition: all 0.2s;
                        transform: scale(0.99);
                        padding-left: 15%;
                        cursor: pointer;
                        user-select: none;
                    }
                    .items.active {
                        cursor: grabbing;
                        cursor: -webkit-grabbing;
                        transform: scale(1);
                    }
                    .item {
                        margin-right: 20px;
                    }
                    .item-about {
                        font-size: 16px;
                        color: #F1F2F8;
                        line-height:2;
                        padding-left: 48px;
                    }
                    .item-text {
                      width: 395px;
                    }
                    .item-back {
                      background: #1C1D24;
                      padding-top: 48px;
                      padding-bottom: 40px;
                      margin-left: 33px;
                    }
                    .packs {
                      display:block;
                      width:58%;
                      margin: 80px auto 0 auto;
                    }
                    .inside {
                     position: absolute;
                       user-select: none;
                     width:100%;
                     height:100%;
                     display:block;
                     top: 0;
                     left: 0;
                     text-align: center!important;
                     font-family: 'GothamProBlack',"Arial Black", sans-serif;
                     font-size:48px;
                     font-weight:600;
                     color:#4673FD;
                     padding-top: 10px;
                     background: linear-gradient(to top, #2246F7, #1C66FF);
                     box-sizing: border-box;
                      z-index: -1;
                     cursor:pointer !important;
                    // padding-top: 8px !important;
                    -webkit-transition: all 0.5s ease;
                    -moz-transition: all 0.5s ease;
                    -o-transition: all 0.5s ease;
                    transition: all 0.5s ease;
                    }
                    .inside div {
                      padding-top: 0 !important;
                    }
                    .packs-button {
                      width:275px;
                      height:75px;
                      background:#23242B;
                      cursor: pointer;
                      position: relative;
                      z-index: 100;
                       user-select: none;
                    }
                    .packs-button {
                      color:#fff;
                      font-family: 'GothamProBlack',"Arial Black", sans-serif;
                      font-size:18px;
                      font-weight:600;
                      z-index: 1;
                    }
                    .packs-button div{
                      height: 100%;
                    }
                    .pt-17 {
                      padding-top: 27px;
                      text-align: center;
                    }
                    .packs-button span {
                       user-select: none;
                    }
                      .base{
                        color: #fff;
                        font-family: 'GothamProBlack',"Arial Black",sans-serif;
                        font-size: 18px;
                        font-weight: 600;
                        z-index: 1;
                        position: absolute;
                        top: 29px;
                        left: 118px;
                        display: block !important;
                    }
/*                    input {
    background-color:#16171C !important;
    border: 0px solid !important;
    height: 30px;
    border-radius: 14px;
    padding-left: 15px;

}
input:focus {
    outline:0 !important;
     outline-offset: 0!important;
    background-color:#16171C !important;
}
input:-internal-autofill-selected{
  background-color:#16171C !important;
    border: 0px solid !important;
     color:# FAFAFA!important;
}
input:active, input:hover, input:focus {
    outline: 0!important;
    outline-offset: 0!important;
    background-color:#16171C !important;
}*/
                    .adv{
                        color: #fff;
                        font-family: 'GothamProBlack',"Arial Black",sans-serif;
                        font-size: 18px;
                        font-weight: 600;
                        z-index: 1;
                        position: absolute;
                        top: 29px;
                        left: 90px;
                        display: block !important;
                    }
                    .pro{
                        color: #fff;
                        font-family: 'GothamProBlack',"Arial Black",sans-serif;
                        font-size: 18px;
                        font-weight: 600;
                        z-index: 1;
                        position: absolute;
                        top: 29px;
                        left: 118px;
                        display: block !important;
                    }
                    .ind{
                        color: #fff;
                        font-family: 'GothamProBlack',"Arial Black",sans-serif;
                        font-size: 18px;
                        font-weight: 600;
                        z-index: 1;
                        position: absolute;
                        top: 29px;
                        left: 118px;
                        display: block !important;
                    }
                    .hide  {
                        display: none;
                    }
                    .s-hide span {
                        display: none;
                    }
                     /* .packs-button-3:hover {
                      background:url('../static/images/professional.png');
                      background-size:100% 100%;
                       background-repeat: no-repeat;
                    }
                    .packs-button-4:hover {
                      background:url('../static/images/individual.png');
                     background-size:100% 100%;
                       background-repeat: no-repeat;
                    }*/
                    .progress {
                      background:url('../static/images/prog.png');
                      height:23px;
                      background-repeat: no-repeat;
                      background-size: cover;
                      border-radius: 10px;
                    }
                    .percent {
                      font-family: 'GothamProBlack',"Arial Black", sans-serif;
                      font-size:36px;
                      padding-left:10px;
                    }
                    .efficiency{
                      text-transform: uppercase;
                      width: 70%;
                      text-align: right;
                      padding-top:45px;
                    }
                    .progress-line {
                      background: linear-gradient(to right, #F42162, #F4213A);
                      width: 0%;
                      height: 100%;
                      border-radius: 10px;
                    }
                    .packs-contain {
                      margin-top: 75px;
                    }
                    .packs-name {
                      background:#23242B;
                      height:55px;
                      border-radius:25px;
                      margin-bottom: 10px;
                      display: flex;
                      flex-direction: row;
                      justify-content: flex-start;
                      align-items: center;
                    }
                    .packs-contact {
                      display: flex;
                      flex-direction: row;
                      justify-content: flex-start;
                      align-items: center;
                      background:#23242B;
                      height:55px;
                      border-radius:25px;
                      margin-bottom: 10px;
                    }
                    .text-back {
                      white-space: nowrap;
                      font-size: 72px;
                      position: absolute;
                      top: -9px;
                      left: 5px;
                      letter-spacing: 2px;
                      opacity: .1;
                      font-family: 'GothamProBlack',"Arial Black", sans-serif;
                    }
                    .packs-name span{
                      padding-right:10px;
                      display: inline-block;
                      float:left;
                    }
                    .packs-contact span{
                      margin-top: 2px;
                      padding-right:10px;
                      padding-left:5px;
                    }
                    .round {
                      box-sizing:border-box;
                      width: 22px;
                      height: 22px;
                      background:transparent;
                      border:3px solid #F42162;
                      border-radius:50%;
                      margin: 0 10px;
                      display: flex;
                      justify-content: center;
                      align-items: center;
                    }
                    .round-in {
                      width: 10px;
                      height: 10px;
                      background: #F42162;
                      border-radius:50%;
                      -webkit-transition: all 0.5s ease;
                      -moz-transition: all 0.5s ease;
                      -o-transition: all 0.5s ease;
                      transition: all 0.5s ease;
                    }
                    .round-in_1 {
                      width: 10px;
                      height: 10px;
                      background: #F42162;
                      border-radius:50%;
                     }
                    .horizontal-line-chat {
                      width: 65px;
                      right: 141px;
                    }
                    .drug-circle {
                        width: 20px;
                      height: 20px;
                       background: transparent;
                       border:3px solid #fff;
                       border-radius:50%;
                    }
                    .drug {
                      margin:90px 0 5px 0;
                      text-transform:uppercase;
                    }
                    .drug-hand img {
                        margin-left: 168px;
                        margin-top: 5px;
                    }
                    .chat-content {
                        margin-top:200px;
                        display: flex;
                        justify-content: center;
                        position: relative;
                    }
                    .chat-card {
                    width:300px;
                    border-radius:25px;
                    }
                    .chat-header {
                    height:70px;
                    border-radius:25px 25px 0 0;
                    background: #24252E;
                    }
                    .chat-body {
                    border-radius:0 0 25px 25px;
                    background: #1C1D24;
                    position:relative;
                    height:320px;
                    }
                    .chat-body-main {
                    background: #fff;
                    position:relative;
                    height: 100%;
                    }
                    .date {
                    color:#363845;
                    text-align:center;
                    }
                    .chat-round-red{
                     width: 14px;
                     height: 14px;
                     margin-left:20px;
                     border-radius:50%;
                    background: #E53333;
                    }
                    .chat-round-yellow{
                     width: 14px;
                     height: 14px;
                     margin-left:12px;
                     border-radius:50%;
                     background: #FFA019;
                    }
                    .hello-text {
                      background: linear-gradient(to right top, #8F40FB, #8B39F9, #7921F0);
                      border-radius:25px;
                       margin-right: 10px;
                    }
                    .ok-text {
                      background: linear-gradient(to right top, #3E59FF, #2947FF);
                      border-radius:25px;
                      width: 80%;
                    }
                    .chat-propose{
                      padding:0 25px;
                      font-size:18px;
                      color:#fff;
                      margin-top:0;
                    }
                    .hello-text h3, .ok-text h3{
                      padding-left:25px;
                      margin-bottom:0;
                      margin-top:15px;
                    }
                    .hello{
                      position: absolute;
                      left:117px;
                       width:85%;
                    }
                    .ok{
                      position: absolute;
                      left: -66px;
                      top: 185px;
                    }
                    .ok-round {
                    width: 50px;
                     height: 44px;
                    position:relative;
                     border-radius:50%;
                     background: linear-gradient(to right top, #3E59FF, #2947FF);
                     margin-right:10px;
                    }
                    .chat-round {
                    width: 44px;
                     height: 44px;
                    position:relative;
                     border-radius:10px;
                     background: #F933BF;
                     margin: 13px 10px 13px 20px;
                    }
                    .bot-name {
                     font-family:'Roboto Medium', sans-serif;
                    font-size: 16px;
                    }
                    .bot-role, .bot-hello, .bot-hi {
                     font-family:'Roboto Regular', sans-serif;
                    font-size: 14px;
                    }
                    .bot-hello {
                     background: #E8EAEC;
                     color: #6B6D6E;
                     height: 44px;
                     border-radius:0 15px 15px 15px;
                     margin: 0 20px 0 10px;
                    }
                    .main-chat {
                    width:350px;
                    position: absolute;
                    right: 36px;
                    bottom: -109px;
                    display:none !important;
                    }
                    .chat {
                    z-index:2;
                    }
                    .bot-invite {
                     background: linear-gradient(to right top, #3E59FF, #2947FF);
                     border-radius: 15px 0 15px 15px;
                     margin: 0 10px 0 20px;
                    }
                    .bot-input {
                     border: 1px solid #E8EAEC;
                     border-radius: 0 15px 10px 10px;
                     margin: 10px 20px 0 10px;
                     color: #6B6D6E;
                    }
                    .bot-hi {
                     background: #E8EAEC;
                      height: 44px;
                      border-radius: 0 15px 0 0;
                    }
                    .bot-enter {
                      height: 90px;
                    }
                    .write input{
                     padding: 25px 20px;
                    }
                    .bot-enter input, .write input{
                      border: none;
                       font-family:'Roboto Regular', sans-serif;
                        font-size: 16px;
                    }
                    .bot-enter input::-moz-placeholder, .write input::-moz-placeholder {
                        color: #CECFD1;
                    }
                    .bot-enter input::-webkit-input-placeholder, .write input::-webkit-input-placeholder {
                        color: #CECFD1;
                    }
                    button, input, select, textarea{
                        outline: none !important
                        }
                    hr {
                        background-color: #CECFD1 !important;
                        border: none;
                         color: #CECFD1 !important;
                         height:1px;
                         width: 100%;
                    }
                    .ok-round-small{
                         width: 21px;
                         height: 21px;
                         border:4px solid #16171C;
                         border-radius:50%;
                         background: #3DFF2E;
                         box-sizing: border-box;
                         position: absolute;
                         left: 27px;
                         top: 27px;
                    }
                    .robold {
                        font-family:'Roboto Bold', sans-serif;
                        font-size:15px;
                        font-weight:600;
                        margin-top: -26px;
                        z-index: 1;
                        margin-bottom:230px;
                    }
                    .main-back-1, .main-back-2, .main-back-3, .main-back-4 {
                        height: 100%;
                        width: 2px;
                        position: absolute;
                        background: #1D1E23;
                    }
                    .main-back {
                        height: 100%;
                        position: absolute;
                        z-index: -1;
                    }
                    .main-back-1 {
                         z-index: -1;
                    }
                    .main-back-2 {
                         left:34%;
                    }
                    .main-back-3 {
                         left:68%;
                    }
                    .main-back-4 {
                         right:0;
                    }
                    .fly {
                          background:url('../static/images/fly.png');
                          background-repeat: no-repeat;
                          background-size: contain;
                    }
                    .project-card-img{
                          overflow: hidden;
                          background-size: contain!important;
                          background-repeat: no-repeat!important;
                          width: 50%;
                    }
                    .project-card-img-1{
                          background:url('../static/images/meteor_1.png');
                    }
                    .project-card-img-2{
                          background:url('../static/images/sneakers_preview.png');
                          margin-right: -30px;
                          background-size: cover!important;
                          height: 200px;
                          width: 100%;
                    }
                    .project-card-img-3{
                          background:url('../static/images/merkury_preview.png');
                          margin-right: -30px;
                          background-size: cover!important;
                          height: 200px;
                          width: 100%;
                    }
                    .project-card-img-4{
                          background:url('../static/images/english_1.png');
                    }
                    .project-card-img-5{
                          background:url('../static/images/meteor_1.png');
                    }
                    .project-card-img-6{
                          background:url('../static/images/meteor_1.png');
                    }
                    .project-logo{
                         margin-top: 20px;
                    }
                    .app-type{
                      color: white;
                    }
                    .project-card-img img{
                         width:100%;
                    }
                    .project-card {
                     border-radius:25px;
                     padding: 30px 30px 0 30px;
                     box-sizing: border-box;
                    }
                    .card-content {
                    padding-bottom:30px;
                    padding-right:20px;
                    width: 100%;
                    }
                    .project-card-1 {
                     background: linear-gradient(to right top, #682BCE, #1E1EBF);
                    }
                    .project-card-2 {
                     background: linear-gradient(to right top, #2B96CE, #2E7EEB);
                    }
                    .project-card-3 {
                     background: linear-gradient(to right top, #E12F98, #F5287A);
                    }
                    .project-card-4 {
                     background: #fff;
                    }
                    .project-card-5 {
                     background: linear-gradient(to right top, #FF3F2B, #F37E1F);
                    }
                    .project-card-6 {
                     background: linear-gradient(to right top, #35C42A, #05FFB5);
                    }
                    .card-title {
                        font-size: 30px;
                        font-family: 'GothamProBlack',"Arial Black", sans-serif;
                         margin: 20px 0 10px 0;
                    }
                    .card-text {
                            font-size: 16px;
                            color: #F1F2F8;
                            line-height: 2;
                    }
                    .card-button {
                            font-size: 16px;
                            width: 210px;
                            height: 50px;
                            border-radius: 25px;
                            background: #FFF;
                            margin: 25px 0 0 0;
                            border:none;
                            font-family:'Roboto Medium', sans-serif;
                            cursor: pointer;
                            text-transform: none !important;
                    }
                    .card-button:hover {
                         transform: scale(0.99);
                    }
                    .card-button-1, .card-button-3,  .card-button-5{
                        color:#2820C1 !important;
                    }
                    .card-button-2, .card-button-6 {
                        color:#2820C1 !important;
                    }
                    .card-button-4 {
                        color:#2820C1  !important;
                        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 3px 10px rgba(0,0,0,0.22);
                    }
                    .input-group input, .input-group textarea, .input-group select {
                        background: #16171C;
                        border: none;
                        font-size: 16px;
                        color:#fafafa;
                        font-family:'Roboto Regular', sans-serif;
                    }
                    .input-group input:focus, input-group input:active, input-group input:selected{
                        background: #16171C;
                        border: none;
                        height:35px;
                        border-radius: 15px;
                        font-size: 16px;
                        color:#fafafa;
                        font-family:'Roboto Regular', sans-serif;
                    }
                    input:-internal-autofill-selected {
                      background: #16171C !important;
                      border-radius: 15px;
                      height:35px;
                      padding-left: 15px;
                      width: 220px;
                    }
                     .input-group input::-moz-placeholder,  textarea::-moz-placeholder {
                        color: #fafafa;
                    }
                    .input-group input::-webkit-input-placeholder, textarea::-webkit-input-placeholder {
                        color: #fafafa;
                    }
                    .input-item {
                        border-bottom: 3px solid #23242B !important;
                        padding-top: 50px;
                        padding-bottom: 10px;
                        width: 100%;
                    }
                   select:active, select:focus{
                        outline:none
                        }
                    select option {
                        padding-left: 15px;
                        color: #fafafa;
                        background: #23242B;
                        border: none !important;
                        -moz-outline: none !important;
                        -webkit-outline: none !important;
                         -webkit-border:none !important;
                          -moz-border:none !important;
                    }

                    .input-group textarea ::-webkit-resizer {
                      -webkit-appearance: none:
                    }
                    .styled-select select {
                       -webkit-appearance: none;
                       }
                       textarea {
                          resize: none;
                          width: 100%;
                        }
                       .styled-select {
                       background: url(../static/images/arrow.png) no-repeat 95% 74%;
                       }
                    .but-text {
                         position: absolute;
                         left: 85px;
                         top: 15px;
                          white-space: nowrap;
                          cursor: pointer;
                    }
                    .case-title {
                        font-size: 24px;
                        color:#fafafa;
                        font-family:'Roboto Black', sans-serif;
                    }
                    .case-content {
                         width: 90%;
                    }
                    .black {
                        color: black;
                    }
                    .flex {
                      display: flex;
                    }
                    .ps-rel {
                        position: relative;
                    }
                    .z-1 {
                        z-index: 1;
                    }
                    .z-2 {
                        z-index: 2;
                    }
                    .h-165 {
                        height: 165%;
                    }
                    .jc-fe {
                        justify-content: flex-end;
                    }
                    .jc-c {
                        justify-content: center;
                    }
                    .jc-r {
                        justify-content: right;
                    }
                    .jc-sa {
                      justify-content: space-around;
                    }
                    .jc-sb {
                      justify-content: space-between;
                    }
                    .ai-c {
                      align-items: center;
                    }
                    .ai-b {
                      align-items: baseline;
                    }
                    .ta-c {
                      text-align: center;
                    }
                    .w-35 {
                      width: 35% !important;
                       background: linear-gradient(to right, #F42162, #F4213A);
                      width: 70%;
                      height: 100%;
                      border-radius: 10px;
                    }
                    .w-55 {
                      width: 55% !important;
                       background: linear-gradient(to right, #F42162, #F4213A);
                      width: 70%;
                      height: 100%;
                      border-radius: 10px;
                    }
                    .w-70 {
                      width: 70% !important;
                       background: linear-gradient(to right, #F42162, #F4213A);
                      width: 70%;
                      height: 100%;
                      border-radius: 10px;
                    }
                    .w-100per {
                      width: 100% !important;
                       background: linear-gradient(to right, #F42162, #F4213A);
                      width: 70%;
                      height: 100%;
                      border-radius: 10px;
                    }
                    .w-50 {
                      width: 50%;
                    }
                    .w-100 {
                      width: 100%;
                    }
                    .w-99 {
                      width: 99%;
                    }
                    .ml-130 {
                     margin-left: 130px;
                    }
                    .m-0a {
                      margin: 0 auto;
                    }
                    .m-0 {
                      margin: 0;
                    }
                    .mt-95p {
                      margin-top:95px;
                    }
                    .mt-10 {
                      margin-top:10px;
                    }
                    .mt-70 {
                      margin-top:70px;
                    }
                    .mt-160m {
                      margin-top:-160px;
                    }
                    .mt-100 {
                      margin-top: 100px;
                    }
                    .mt-130 {
                    margin-top: 130px;
                    }
                    .mt-300 {
                    margin-top: 300px;
                    }
                    .mt-40 {
                    margin-top: 40px;
                    }
                    .mt-10 {
                    margin-top: 10px;
                    }
                    .mt-20 {
                    margin-top: 20px;
                    }
                    .mt-175 {
                    margin-top: 175px;
                    }
                    .ml-20 {
                    margin-left: 20px;
                    }
                    .ml-50 {
                    margin-left: 50px;
                    }
                    .mt-150 {
                    margin-top: 150px;
                    }
                    .mr-15 {
                    margin-right: 15px;
                    }
                    .mr-20 {
                    margin-right: 20px;
                    }
                    .mr-50 {
                    margin-right: 50px;
                    }
                    .mb-100 {
                    margin-bottom: 100px;
                    }
                    .z-1000 {
                    z-index: 1000;
                    }
                    .pl-42 {
                    padding-left: 42px;
                    }
                    .pt-0 {
                    padding-top: 0;
                    }
                    .pl-pr-20 {
                    padding-left: 20px;
                    padding-right: 20px;
                    }
                    .pl-20 {
                    padding-left: 20px;
                    }
                    .pl-25 {
                    padding-left: 25px;
                    }
                    .pr-25 {
                    padding-right: 25px;
                    }
                    .pl-35 {
                    padding-left: 35px;
                    }
                    .fs-48 {
                    font-size: 48px !important;
                    }
                    .d-ib {
                    display: inline-block;
                    }
                    .h-110 {
                    height: 110%;
                    }
                    .h-11 3{
                    height: 103.3%;
                    }
                    .column {
                    flex-direction: column;
                    }
                    /* Base for label styling */
                    [type="checkbox"]:not(:checked),
                    [type="checkbox"]:checked {
                      position: absolute;
                      left: -9999px;
                    }
                    [type="checkbox"]:not(:checked) + label,
                    [type="checkbox"]:checked + label {
                      position: relative;
                      padding-left: 1.95em;
                      cursor: pointer;
                    }
                    /* checkbox aspect */
                    .label:before {
                      content: '';
                      box-sizing: border-box;
                      position: absolute;
                      left: 9px;
                      width: 22px; height: 22px;
                      border: 3px solid #F42162;
                       border-radius:50%;
                      background: transparent;
                      box-shadow: inset 0 1px 3px rgba(0,0,0,.1);
                      float: left;
                    }
                    /* checked mark aspect */
                    .label:after {
                      content: '●';
                      position: absolute;
                      top: -4px;
                      left: 13px;
                      font-size: 1.5em;
                      color: #F42162;
                      transition: all .2s;
                    }
                    .label span {
                        padding-right: 20px;
                        padding-left: 15px;
                        display:block;
                    }
                    .label-plus:after {
                       left: 12.5px;
                    }
                    .label-2:after {
                       left: 2.8px;
                    }
                    .label-3:after {
                       left: 3px;
                    }
                    /* checked mark aspect changes */
                    [type="checkbox"]:not(:checked) + label:after {
                      opacity: 0;
                      transform: scale(0);
                    }
                    [type="checkbox"]:checked + label:after {
                      opacity: 1;
                      transform: scale(1);
                    }
                    .packs-contact label {
                    margin-left:10px;
                        margin-top: 0px;
                    }
                `}</style>
    );
  }
}
export default ThemeStyle;
