import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Social from './Social';

class Notfound extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="container-fluid pt-5 pb-5">
                    <div className="text-center">
                        <img src={require('../images/error404.jpg')} className="mx-auto img-fluid d-block " alt="" />
                    </div>
                </div>
                <Footer />
                <Social />
            </div>
        )
    }
}

export default Notfound;