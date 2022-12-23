import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Social from './Social';
import firebase from 'firebase';

class Contact extends Component {
   
    addMessage(e) {
        e.preventDefault();
        // Your web app's Firebase configuration
        var firebaseConfig = {
            // apiKey: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
            // authDomain: "XXXXXXXXXXXXXXXXXX",
            // databaseURL: "XXXXXXXXXXXXXXXXXX",
            // projectId: "XXXXXXXXXXXXXXXXXX",
            // storageBucket: "XXXXXXXXXXXXXXXXXXXXXX",
            // messagingSenderId: "XXXXXXXXXXXXXXX",
            // appId: "XXXXXXXXXXXXXXXXXXXXXXX",
            // measurementId: "XXXXXXXXXXXX"
    apiKey: "AIzaSyBaAXmU3KU2EiMRUinqq9svxQtI65wwxpA",
    authDomain: "formdata-b7401.firebaseapp.com",
    databaseURL: "https://formdata-b7401-default-rtdb.firebaseio.com",
    projectId: "formdata-b7401",
    storageBucket: "formdata-b7401.appspot.com",
    messagingSenderId: "44569804899",
    appId: "1:44569804899:web:ffe6af4efafd322d09b856",
    measurementId: "G-00MKQ4TZZQ"
        };
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
        firebase.analytics();
        // Get values
        var title = "Contact form for resume";
        var name = document.getElementById("name").value;
        var date=Date();
        var email = document.getElementById("email").value;
        var phone = document.getElementById("phone").value;
        var message = document.getElementById("message").value;
        var messagesRef = firebase.database().ref('messages');
        // console.log(messagesRef);
        var newMessageRef = messagesRef.push();
        newMessageRef.set({
            title: title,date:date,
            name: name,
            email: email,
            phone: phone,
            message: message
        });
        document.querySelector('.alert').style.display = 'block';
        // Hide alert after 3 seconds
        setTimeout(function () {
            document.querySelector('.alert').style.display = 'none';
        }, 1800);
        // Clear form
        document.getElementById('contactForm').reset();
    }
    render() {  console.log("starCountRef");
        return (
            <div>
                <Navbar />
                <div>
                    <div className="container contact-form pt-5 pb-5">
                        <div className="contact-image">
                            <img src={require('../images/rocket.png')} className="rounded-circle mx-auto img-fluid d-block" style={{ width: "200px", height: "200px" }} alt="" />
                        </div>
                        <form onSubmit={this.addMessage} id="contactForm">
                            <h3 className="mb-3">Drop a Message</h3>
                            <div className="alert">Your message has been sent</div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="text" name="name" className="form-control" placeholder="Name" id="name" required />
                                    </div>
                                    <div className="form-group">
                                        <input type="email" name="email" className="form-control" placeholder="Email" id="email" required />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" name="phone" className="form-control" placeholder="Phone Number" id="phone" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <textarea name="message" class="form-control" placeholder="Message" id="message" style={{ width: "100%", height: "150px" }}></textarea>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="form-group">
                                    <button type="submit" name="submit" className="btn btn-primary" >Send Message</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <Footer />
                <Social />
            </div>
        )
    }
}

export default Contact;
