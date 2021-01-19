import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';
import { Footer } from './Footer';
import AOS from 'aos';

export class Layout extends Component {
    static displayName = Layout.name;

    constructor(props, context) {
        super(props, context);
        AOS.init();
    }

    render() {
        return (
            <React.Fragment>
                {/*Preload start*/}
                <div id="thompson-preload" className="thompson-preload" >
                    <div className="cssload-thecube">
                        <div className="cssload-cube cssload-c1"></div>
                        <div className="cssload-cube cssload-c2"></div>
                        <div className="cssload-cube cssload-c3"></div>
                        <div className="cssload-cube cssload-c4"></div>
                    </div>
                </div>
                {/*Preload end */}
                {/*Mobile menu start*/}
                <div id="mobile-menu-wrapper" className="mobile-menu-wrapper">
                    <h2 className="mobile-menu-title">menu
        <i id="mobile-menu-close" className="fa fa-remove"></i>
                    </h2>
                    <div className="scrollbar-inner"></div>
                </div>
                {/*Mobile menu end */}
                <div className="content-wrapper">
                    <NavMenu />
                    {/*<Container>*/}
                    {this.props.children}
                    {/* </Container>*/}

                    <Footer />
                </div>
            </React.Fragment>
        );
    }
}
