import React, { Component } from "react";

class SetPercent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeItem: 3,
            activeWidth: 70,
        };

        this.intId = null;

        this.selectEfficiency = this.selectEfficiency.bind(this);
    }

    selectEfficiency(itemNum, width) {
        this.setState({ activeItem: itemNum });

        setEfficiency(this, this.state.activeWidth, width);
    }

    render() {
        let { activeItem, activeWidth } = this.state;

        return (
            <div>
                <div>
                    <div>
                        <div className="flex column mt-95p mb-mt-50">
                            <div className="flex jc-sb" id="buttons">
                                <div className="flex jc-sa w-50 butt-row mr-15">
                                    <div className="packs-button ai-c jc-c mr-15" onClick={() => this.selectEfficiency(1, 35)}>
                                        <div className={activeItem === 1 ? 'inside' : ''}>
                                            <div className="pt-17">Base</div>
                                        </div>
                                    </div>
                                    <div className="packs-button ai-c jc-c" onClick={() => this.selectEfficiency(2, 55)}>
                                        <div className={activeItem === 2 ? 'inside' : ''}>
                                            <div className="pt-17">Advanced</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex jc-sa w-50 butt-row mr-15">
                                    <div className="packs-button ai-c jc-c mr-15" onClick={() => this.selectEfficiency(3, 70)}>
                                        <div className={activeItem === 3 ? 'inside' : ''}>
                                            <div className="pt-17">Profi</div>
                                        </div>
                                    </div>
                                    <div className="packs-button ai-c jc-c" onClick={() => this.selectEfficiency(4, 100)}>
                                        <div className={activeItem === 4 ? 'inside' : ''}>
                                            <div className="pt-17">Individual</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="flex column mt-95p mb-mt-50">
                    <p className="efficiency mb-fs-14">Efficiency<span className="percent mb-fs-24">{activeWidth === 0 ? '' : `${activeWidth}%`}</span></p>
                    <div className="progress">
                        <div className='progress-line' style={{ width: `${activeWidth}%` }} />
                    </div>
                </div>
                <div className="packs-contain flex">
                    <div className="services-content services-content-2 flex jc-sa w-100">
                        <div className="services-name services-name-1 flex column mobile-hidden">
                            <div className="list packs-name">
                                <div className="round">
                                    <div className={activeItem ? 'round-in' : ''} />
                                </div>
                                <span>Make technical task</span>
                            </div>
                            <div className="list packs-name">
                                <div className="round">
                                    <div className={activeItem ? 'round-in' : ''} />
                                </div>
                                <span>Audit, competitors analyse</span>
                            </div>
                            <div className="list packs-name">
                                <div className="round">
                                    <div className={activeItem ? 'round-in' : ''} />
                                </div>
                                <span>Behavior script</span>
                            </div>
                            <div className="list packs-name">
                                <div className="round">
                                    <div className={activeItem ? 'round-in' : ''} />
                                </div>
                                <span>User interface development</span>
                            </div>
                            <div className="list packs-name">
                                <div className="round">
                                    <div className={activeItem === 2 || activeItem === 3 || activeItem === 4 ? 'round-in' : ''} />
                                </div>
                                <span>Animated prototype</span>
                            </div>
                            <div className="list packs-name">
                                <div className="round">
                                    <div className={activeItem === 2 || activeItem === 3 || activeItem === 4 ? 'round-in' : ''} />
                                </div>
                                <span>UI mockups</span>
                            </div>
                        </div>
                        <div className="services-name services-name-2 flex column">
                            <div className="list packs-name">
                                <div className="round">
                                    <div className={activeItem === 3 || activeItem === 4 ? 'round-in' : ''} />
                                </div>
                                <span>Web design, UI/UX</span>
                            </div>
                            <div className="list packs-name">
                                <div className="round">
                                    <div className={activeItem === 3 || activeItem === 4 ? 'round-in' : ''} />
                                </div>
                                <span>Frontend & Backend development</span>
                            </div>
                            <div className="list packs-name">
                                <div className="round">
                                    <div className={activeItem === 3 || activeItem === 4 ? 'round-in' : ''} />
                                </div>
                                <span>Testing</span>
                            </div>
                            <div className="list packs-name">
                                <div className="round">
                                    <div className={activeItem === 3 || activeItem === 4 ? 'round-in' : ''} />
                                </div>
                                <span>Fixes and optimization</span>
                            </div>
                            <div className="list packs-name">
                                <div className="round">
                                    <div className={activeItem === 3 || activeItem === 4 ? 'round-in' : ''} />
                                </div>
                                <span>Metrics and analytics tools</span>
                            </div>
                        </div>
                        <div className="services-name services-name-3 flex column mobile-hidden">
                            <div className="list packs-name">
                                <div className="round">
                                    <div className={activeItem === 4 ? 'round-in' : ''} />
                                </div>
                                <span>App store optimization</span>
                            </div>
                            <div className="list packs-name">
                                <div className="round">
                                    <div className={activeItem === 4 ? 'round-in' : ''} />
                                </div>
                                <span>Store boosting</span>
                            </div>
                            <div className="list packs-name">
                                <div className="round">
                                    <div className={activeItem === 4 ? 'round-in' : ''} />
                                </div>
                                <span>Advertising campaign</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SetPercent;

function setEfficiency(obj, curWidth, nextWidth) {

    if (curWidth !== nextWidth) {
        clearInterval(obj.intId);

        const mmTime = 500;
        let difference = 0, step = 0;

        if (curWidth < nextWidth) {
            difference = nextWidth - curWidth;

            step = mmTime / difference;

            obj.intId = setInterval(() => {
                if (obj.state.activeWidth >= nextWidth) {
                    clearInterval(obj.intId);
                    obj.setState({ activeWidth: nextWidth });
                } else {
                    obj.setState({ activeWidth: (obj.state.activeWidth + 1) });
                }
            }, step);
        } else {
            difference = curWidth - nextWidth;

            step = mmTime / difference;

            obj.intId = setInterval(() => {
                if (obj.state.activeWidth <= nextWidth) {
                    clearInterval(obj.intId);
                    obj.setState({ activeWidth: nextWidth });
                } else {
                    obj.setState({ activeWidth: (obj.state.activeWidth - 1) });
                }
            }, step);
        }
    }
}