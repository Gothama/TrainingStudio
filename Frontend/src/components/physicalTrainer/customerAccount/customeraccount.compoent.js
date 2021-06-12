import React, { Component } from 'react'
import Header from './header.component'
import TrainerNav from '../trainerNav.component';
import InternalNavbar from './internalnavbar.component';

export default class Customeraccount extends Component {
    render() {
        return (
            <div>
                <TrainerNav />
                <div style={{ backgroundColor: "#14213d", paddingBottom: "100px", paddingTop: "100px" }} >

                    <div className="container" style={{ paddingBottom: "100px" }}>
                        <Header />
                        <InternalNavbar id={this.props.match.params.id}/>
                    </div>
                </div>
            </div>
        )
    }
}
