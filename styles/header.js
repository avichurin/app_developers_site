import  React, {Component} from "react";
//import "../static/style.css";
class HeaderStyle extends Component {
    render() {
        return (
                <style jsx=" true"  global="true">{`
                    .App-header {
                        background-color: #16171C;
                        height: 120px;
                        padding: 20px;
                        color: #FAFAFA !important;
                        font-family: 'Roboto Regular', sans-serif;
                    }
                    .App-logo {
                        height: 53px;
                        z-index: 10;
                    }
                    a {
                        display: flex;
                        text-decoration: none;
                        text-transform: uppercase;
                        font-size: 14px;
                        color: #FAFAFA!important;
                    }
                    a:hover {
                        color: #F42162!important;
                    }
                    @import url('https://fonts.googleapis.com/css?family=Roboto');
                    .startButton {
                        width: 180px;
                        height: 50px;
                        border-radius: 25px;
                        border: 1px solid #F42162;
                        color: #fafafa;
                        font-size: 14px;
                        background: #F42162;
                        text-transform: uppercase;
                        cursor: pointer;
                    }
                    .startButton:hover {
                        background:#E21756!important;
                    }
                    .links {
                        width:45%;
                    }
                    //mobile menu
                    ul {
                        list-style: none;
                        margin: 0;
                        padding: 0;
                    }
                     li {
                        width: 100%;
                        text-align: center;
                        padding: .25em;
                    }
                    ul a{
                         font-size: 24px;
                         padding-top: 10px;
                    }
                    .drawer-list {
                        position: fixed;
                        right: 0;
                        top: 0;
                        height: 100vh;
                        width: 100vw;
                        transform: translate(100vw, 0);
                        z-index: 9000;
                        /* ie workaround */
                        -ms-transform: translatex(-100vw);
                        box-sizing: border-box;
                        pointer-events: none;
                        padding-top: 15px;
                        transition: width 475ms ease-out, transform 450ms ease, border-radius .8s .1s ease;
                        border-bottom-left-radius: 100vw;
                        background-color: #3d88ce;
                        background-color: rgba(22, 23, 28, 0.9);
                    }
                    .drawer-list ul {
                        height: 100%;
                        width: 100%;
                        margin: 0;
                        padding: 20px 0 0 0;
                        overflow: auto;
                        overflow-x: hidden;
                        pointer-events: auto;
                    }
                    .drawer-list a:hover {
                        cursor: pointer;
                        background-color: #88c2f8;
                        background-color: rgba(17, 132, 240, 0.5);
                    }
                    input.hamburger {
                        display: none;
                    }
                    input.hamburger:checked ~ .drawer-list {
                        transform: translatex(0);
                        border-bottom-left-radius: 0;
                    }
                    input.hamburger:checked ~ .drawer-list li {
                        transform: translatex(0);
                    }
                    input.hamburger:checked ~ .drawer-list li:nth-child(1) {
                        transition: transform 1s 0.08s cubic-bezier(0.29, 1.4, 0.44, 0.96);
                    }
                    input.hamburger:checked ~ .drawer-list li:nth-child(2) {
                        transition: transform 1s 0.16s cubic-bezier(0.29, 1.4, 0.44, 0.96);
                    }
                    input.hamburger:checked ~ .drawer-list li:nth-child(3) {
                        transition: transform 1s 0.24s cubic-bezier(0.29, 1.4, 0.44, 0.96);
                    }
                    input.hamburger:checked ~ .drawer-list li:nth-child(4) {
                        transition: transform 1s 0.32s cubic-bezier(0.29, 1.4, 0.44, 0.96);
                    }
                    input.hamburger:checked ~ .drawer-list li:nth-child(5) {
                        transition: transform 1s 0.4s cubic-bezier(0.29, 1.4, 0.44, 0.96);
                    }
                    input.hamburger:checked ~ .drawer-list li:nth-child(6) {
                        transition: transform 1s 0.48s cubic-bezier(0.29, 1.4, 0.44, 0.96);
                    }
                    input.hamburger:checked ~ .drawer-list li:nth-child(7) {
                        transition: transform 1s 0.56s cubic-bezier(0.29, 1.4, 0.44, 0.96);
                    }
                    input.hamburger:checked ~ .drawer-list li:nth-child(8) {
                        transition: transform 1s 0.64s cubic-bezier(0.29, 1.4, 0.44, 0.96);
                    }
                    input.hamburger:checked ~ .drawer-list li:nth-child(9) {
                        transition: transform 1s 0.72s cubic-bezier(0.29, 1.4, 0.44, 0.96);
                    }
                    input.hamburger:checked ~ .drawer-list li:nth-child(10) {
                        transition: transform 1s 0.8s cubic-bezier(0.29, 1.4, 0.44, 0.96);
                    }
                    input.hamburger:checked ~ .drawer-list li:nth-child(11) {
                        transition: transform 1s 0.88s cubic-bezier(0.29, 1.4, 0.44, 0.96);
                    }
                    input.hamburger:checked ~ .drawer-list li:nth-child(12) {
                        transition: transform 1s 0.96s cubic-bezier(0.29, 1.4, 0.44, 0.96);
                    }
                    input.hamburger:checked ~ .drawer-list li:nth-child(13) {
                        transition: transform 1s 1.04s cubic-bezier(0.29, 1.4, 0.44, 0.96);
                    }
                    input.hamburger:checked ~ .drawer-list li:nth-child(14) {
                        transition: transform 1s 1.12s cubic-bezier(0.29, 1.4, 0.44, 0.96);
                    }
                    input.hamburger:checked ~ .drawer-list li:nth-child(15) {
                        transition: transform 1s 1.2s cubic-bezier(0.29, 1.4, 0.44, 0.96);
                    }
                    input.hamburger:checked ~ .drawer-list li:nth-child(16) {
                        transition: transform 1s 1.28s cubic-bezier(0.29, 1.4, 0.44, 0.96);
                    }
                    input.hamburger:checked ~ .drawer-list li:nth-child(17) {
                        transition: transform 1s 1.36s cubic-bezier(0.29, 1.4, 0.44, 0.96);
                    }
                    input.hamburger:checked ~ .drawer-list li:nth-child(18) {
                        transition: transform 1s 1.44s cubic-bezier(0.29, 1.4, 0.44, 0.96);
                    }
                    input.hamburger:checked ~ .drawer-list li:nth-child(19) {
                        transition: transform 1s 1.52s cubic-bezier(0.29, 1.4, 0.44, 0.96);
                    }
                    input.hamburger:checked ~ .drawer-list li:nth-child(20) {
                        transition: transform 1s 1.6s cubic-bezier(0.29, 1.4, 0.44, 0.96);
                    }
                    input.hamburger:checked ~ .drawer-list li:nth-child(21) {
                        transition: transform 1s 1.68s cubic-bezier(0.29, 1.4, 0.44, 0.96);
                    }
                    input.hamburger:checked ~ .drawer-list li:nth-child(22) {
                        transition: transform 1s 1.76s cubic-bezier(0.29, 1.4, 0.44, 0.96);
                    }
                    input.hamburger:checked ~ .drawer-list li:nth-child(23) {
                        transition: transform 1s 1.84s cubic-bezier(0.29, 1.4, 0.44, 0.96);
                    }
                    input.hamburger:checked ~ .drawer-list li:nth-child(24) {
                        transition: transform 1s 1.92s cubic-bezier(0.29, 1.4, 0.44, 0.96);
                    }
                    input.hamburger:checked ~ .drawer-list li:nth-child(25) {
                        transition: transform 1s 2s cubic-bezier(0.29, 1.4, 0.44, 0.96);
                    }
                    input.hamburger:checked ~ .drawer-list li:nth-child(26) {
                        transition: transform 1s 2.08s cubic-bezier(0.29, 1.4, 0.44, 0.96);
                    }
                    input.hamburger:checked ~ .drawer-list li:nth-child(27) {
                        transition: transform 1s 2.16s cubic-bezier(0.29, 1.4, 0.44, 0.96);
                    }
                    input.hamburger:checked ~ .drawer-list li:nth-child(28) {
                        transition: transform 1s 2.24s cubic-bezier(0.29, 1.4, 0.44, 0.96);
                    }
                    input.hamburger:checked ~ .drawer-list li:nth-child(29) {
                        transition: transform 1s 2.32s cubic-bezier(0.29, 1.4, 0.44, 0.96);
                    }
                    input.hamburger:checked ~ .drawer-list li:nth-child(30) {
                        transition: transform 1s 2.4s cubic-bezier(0.29, 1.4, 0.44, 0.96);
                    }
                    input.hamburger:checked ~ .drawer-list li:nth-child(31) {
                        transition: transform 1s 2.48s cubic-bezier(0.29, 1.4, 0.44, 0.96);
                    }
                    input.hamburger:checked ~ .drawer-list li:nth-child(32) {
                        transition: transform 1s 2.56s cubic-bezier(0.29, 1.4, 0.44, 0.96);
                    }
                    input.hamburger:checked ~ .drawer-list li:nth-child(33) {
                        transition: transform 1s 2.64s cubic-bezier(0.29, 1.4, 0.44, 0.96);
                    }
                    input.hamburger:checked ~ .drawer-list li:nth-child(34) {
                        transition: transform 1s 2.72s cubic-bezier(0.29, 1.4, 0.44, 0.96);
                    }
                    input.hamburger:checked ~ .drawer-list li:nth-child(35) {
                        transition: transform 1s 2.8s cubic-bezier(0.29, 1.4, 0.44, 0.96);
                    }
                    input.hamburger:checked ~ .drawer-list li:nth-child(36) {
                        transition: transform 1s 2.88s cubic-bezier(0.29, 1.4, 0.44, 0.96);
                    }
                    input.hamburger:checked ~ .drawer-list li:nth-child(37) {
                        transition: transform 1s 2.96s cubic-bezier(0.29, 1.4, 0.44, 0.96);
                    }
                    input.hamburger:checked ~ .drawer-list li:nth-child(38) {
                        transition: transform 1s 3.04s cubic-bezier(0.29, 1.4, 0.44, 0.96);
                    }
                    input.hamburger:checked ~ .drawer-list li:nth-child(39) {
                        transition: transform 1s 3.12s cubic-bezier(0.29, 1.4, 0.44, 0.96);
                    }
                    input.hamburger:checked ~ .drawer-list li:nth-child(40) {
                        transition: transform 1s 3.2s cubic-bezier(0.29, 1.4, 0.44, 0.96);
                    }
                    input.hamburger:checked ~ .drawer-list li:nth-child(41) {
                        transition: transform 1s 3.28s cubic-bezier(0.29, 1.4, 0.44, 0.96);
                    }
                    input.hamburger:checked ~ .drawer-list li:nth-child(42) {
                        transition: transform 1s 3.36s cubic-bezier(0.29, 1.4, 0.44, 0.96);
                    }
                    input.hamburger:checked ~ .drawer-list li:nth-child(43) {
                        transition: transform 1s 3.44s cubic-bezier(0.29, 1.4, 0.44, 0.96);
                    }
                    input.hamburger:checked ~ .drawer-list li:nth-child(44) {
                        transition: transform 1s 3.52s cubic-bezier(0.29, 1.4, 0.44, 0.96);
                    }
                    input.hamburger:checked ~ .drawer-list li:nth-child(45) {
                        transition: transform 1s 3.6s cubic-bezier(0.29, 1.4, 0.44, 0.96);
                    }
                    input.hamburger:checked ~ .drawer-list li:nth-child(46) {
                        transition: transform 1s 3.68s cubic-bezier(0.29, 1.4, 0.44, 0.96);
                    }
                    input.hamburger:checked ~ .drawer-list li:nth-child(47) {
                        transition: transform 1s 3.76s cubic-bezier(0.29, 1.4, 0.44, 0.96);
                    }
                    input.hamburger:checked ~ .drawer-list li:nth-child(48) {
                        transition: transform 1s 3.84s cubic-bezier(0.29, 1.4, 0.44, 0.96);
                    }
                    input.hamburger:checked ~ .drawer-list li:nth-child(49) {
                        transition: transform 1s 3.92s cubic-bezier(0.29, 1.4, 0.44, 0.96);
                    }
                    input.hamburger:checked ~ .drawer-list li:nth-child(50) {
                        transition: transform 1s 4s cubic-bezier(0.29, 1.4, 0.44, 0.96);
                    }
                    input.hamburger:checked ~ .drawer-list li a {
                        padding-right: 15px;
                    }
                    input.hamburger:checked ~ label.hamburger > i {
                        background-color: transparent;
                        transform: rotate(90deg);
                    }
                    input.hamburger:checked ~ label.hamburger > i:before {
                        transform: translate(-50%, -105%) rotate(315deg);
                    }
                    input.hamburger:checked ~ label.hamburger > i:after {
                        transform: translate(-50%, 125%) rotate(-315deg);
                    }
                    label.hamburger {
                        z-index: 9999;
                        position: relative;
                        display: block;
                        height: 50px;
                        width: 35px;
                    }
                    label.hamburger:hover {
                        cursor: pointer;
                    }
                    label.hamburger > i {
                        position: absolute;
                        width: 24px;
                        height: 4px;
                        top: 50%;
                        background-color: #FEFEFE;
                        pointer-events: auto;
                        transition-duration: .35s;
                        transition-delay: .35s;
                    }
                    label.hamburger > i:before, label.hamburger > i:after {
                        position: absolute;
                        display: block;
                        width: 24px;
                        height: 4px;
                        left: 50%;
                        background-color: #FEFEFE;
                        content: "";
                        transition: transform 0.35s;
                        transform-origin: 50% 50%;
                    }
                    label.hamburger > i:before {
                        transform: translate(-50%, -14px);
                        top: 5px;
                    }
                    label.hamburger > i:after {
                        transform: translate(-50%, 14px);
                         top: -5px;
                    }

                    label.hamburger {
                        position: fixed !important;
                        top: 15px;
                        right: 15px;
                    }
                    label.hamburger:before, label.hamburger:after {
                        display: none;
                    }
                    .App-link{
                        position: absolute;
                        top: 10px;
                        left: 10px;
                    }
                    .mobile-menu {
                        height: 53px;
                        background: #16171C;
                    }
                `}</style>
        );
    }
}
export default HeaderStyle;