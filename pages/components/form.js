import React from "react";
import axios from "axios";

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            services: {
                appDesign: false,
                wireFrames: false,
                brand: false,
                ios: false,
                android: false,
                web: false
            },
            name: "",
            email: "",
            phone: "",
            company: "",
            budget: "",
            message: "",
            submitted: false,
            onButton: false
        };

        this.changeInput = this.changeInput.bind(this);
        this.sendInfo = this.sendInfo.bind(this);

        this.onButton = this.onButton.bind(this);
    }

    changeInput(e) {
        if (e.target.type === "checkbox") {
            let services = this.state.services;
            services[e.target.name] = e.target.checked;
            this.setState({
                services
            });
        } else {
            this.setState({
                [e.target.name]: e.target.value
            });
        }
    }

    sendInfo(event) {
        event.preventDefault();

        const {
            services,
            name,
            email,
            phone,
            company,
            budget,
            message
        } = this.state;

        const body = {
            services,
            name,
            email,
            phone,
            company,
            budget,
            message
        };

        console.log(body);

        axios
            .post("https://post.wellplexx.com", body)
            .then(res => {
                this.setState({ submitted: true });
            })
            .catch(err => {
                alert(
                    "Some error while request, please try again or contact us with email: admin@wellplexx.com"
                );
            });
    }

    onButton(status) {
        this.setState({
            onButton: status
        });
    }

    render() {
        const {
            services,
            name,
            email,
            phone,
            company,
            budget,
            message,
            submitted
        } = this.state;

        if (submitted) {
            return (
                <div style={{ textAlign: "center", padding: "100px 0" }}>
                    <img
                        src="/static/images/ok.png"
                        style={{ height: "80px" }}
                    />
                    <h2>Request has been submitted successfully!</h2>
                </div>
            );
        } else {
            return (
                <form onSubmit={this.sendInfo}>
                    <div className="mobile-hidden">
                        <legend className="item-about pl-42 mt-40">
                            Services
                        </legend>
                        <div className="flex mb-jc-c">
                            <div className="pt-0 mt-20 mb-fd-c">
                                <div className="services-name mr-20 d-ib mb-d-b">
                                    <div className="list-pack packs-contact">
                                        <input
                                            type="checkbox"
                                            id="design"
                                            name="appDesign"
                                            defaultChecked={services.appDesign}
                                            onChange={this.changeInput}
                                        />
                                        <label
                                            htmlFor="design"
                                            className="label"
                                        >
                                            <span>Web / Mobile Design</span>
                                        </label>
                                    </div>
                                    <div className="list-pack packs-contact">
                                        <input
                                            type="checkbox"
                                            id="web"
                                            name="web"
                                            defaultChecked={services.web}
                                            onChange={this.changeInput}
                                        />
                                        <label htmlFor="web" className="label">
                                            <span>Website development</span>
                                        </label>
                                    </div>
                                </div>

                                <div className="services-name mr-20 d-ib mb-d-b">
                                    <div className="list-pack packs-contact">
                                        <input
                                            type="checkbox"
                                            id="android"
                                            name="android"
                                            defaultChecked={services.android}
                                            onChange={this.changeInput}
                                        />
                                        <label
                                            htmlFor="android"
                                            className="label"
                                        >
                                            <span>Android app development</span>
                                        </label>
                                    </div>

                                    <div className="list-pack packs-contact">
                                        <input
                                            type="checkbox"
                                            id="ios"
                                            name="ios"
                                            defaultChecked={services.ios}
                                            onChange={this.changeInput}
                                        />
                                        <label htmlFor="ios" className="label">
                                            <span>
                                                iPhone/iPad app development
                                            </span>
                                        </label>
                                    </div>
                                </div>
                                <div className="services-name mr-20 d-ib mb-d-b">
                                    <div className="list-pack packs-contact">
                                        <input
                                            type="checkbox"
                                            id="wireframes"
                                            name="wireFrames"
                                            defaultChecked={services.wireFrames}
                                            onChange={this.changeInput}
                                        />
                                        <label
                                            htmlFor="wireframes"
                                            className="label"
                                        >
                                            <span>Wireframes</span>
                                        </label>
                                    </div>
                                    <div className="list-pack packs-contact">
                                        <input
                                            type="checkbox"
                                            id="brand"
                                            name="brand"
                                            defaultChecked={services.brand}
                                            onChange={this.changeInput}
                                        />
                                        <label
                                            htmlFor="brand"
                                            className="label"
                                        >
                                            <span>Branding & UI/UX Design</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex input-group mt-20 column w-50">
                        <div className="flex jc-sb mb-fd-c">
                            <div className="flex column w-50 mr-50 mb-w-80">
                                <div className="flex input-item">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="* Your name"
                                        maxLength="50"
                                        value={name}
                                        onChange={this.changeInput}
                                        required
                                    />
                                </div>
                                <div className="flex input-item">
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="* Phone number"
                                        maxLength="30"
                                        value={phone}
                                        onChange={this.changeInput}
                                        required
                                    />
                                </div>
                                <div className="styled-select">
                                    <select
                                        className="input-item"
                                        name="budget"
                                        value={budget}
                                        onChange={this.changeInput}
                                    >
                                        <option>Select your budget</option>
                                        <option value="less_3000">
                                            Less then $3,000
                                        </option>
                                        <option value="3000_5000">
                                            $3,000 - $5,000
                                        </option>
                                        <option value="5000_10000">
                                            $5,000 - $10,000
                                        </option>
                                        <option value="10000_20000">
                                            $10,000 - $20,000
                                        </option>
                                        <option value="20000_50000">
                                            $20,000 - $50,000
                                        </option>
                                        <option value="4">
                                            {" "}
                                            More then $50,000
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <div className="flex column w-50 mb-w-80">
                                <div className="flex input-item">
                                    <input
                                        type="text"
                                        name="company"
                                        placeholder="Company name"
                                        maxLength="60"
                                        value={company}
                                        onChange={this.changeInput}
                                    />
                                </div>
                                <div className="flex input-item">
                                    <input
                                        name="email"
                                        type="email"
                                        value={email}
                                        placeholder="* E-mail"
                                        maxLength="50"
                                        onChange={this.changeInput}
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex input-item">
                            <textarea
                                name="message"
                                placeholder="Project description"
                                value={message}
                                onChange={this.changeInput}
                                rows={4}
                            />
                        </div>
                    </div>
                    <div
                        className="services-link flex ai-c mt-40"
                        style={{ marginLeft: "30px" }}
                    >
                        <button
                            className={
                                "services-button " +
                                (this.state.onButton
                                    ? "services-button_over"
                                    : "")
                            }
                            onMouseOver={() => this.onButton(true)}
                            onMouseOut={() => this.onButton(false)}
                        >
                            <div className="flex but-text">
                                <div className="services-button-text">
                                    GO, Send it now
                                </div>
                                <div className="services-start">
                                    <img src="../../static/images/button-right-arrow.png" />
                                </div>
                            </div>
                        </button>
                    </div>
                </form>
            );
        }
    }
}

export default Form;
