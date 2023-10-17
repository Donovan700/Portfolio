import React from "react";
import './CSS/Contact.css';
import { Facebook, Linkedin, Mailbox, Skype, Whatsapp, X, PencilSquare } from 'react-bootstrap-icons';  // Assurez-vous d'importer les icônes Bootstrap nécessaires

function Contact() {
    return (
        <div className="footer-container" id="contact">
            <h2 className="display-4">Contact</h2><br/><br/>
            <div className="row">
                <div className="col"><a href="https://www.linkedin.com/in/bryan-rakoto-sedson-007842234/" target={"_blank"}><Linkedin style={{ fontSize: '2rem' }} /></a></div>
                <div className="col"><a href="https://www.facebook.com/bryan.sedson/" target={"_blank"}><Facebook style={{ fontSize: '2em'}} /></a></div>
                <div className="col"><a href="https://twitter.com/BryanRo86854301" target={"_blank"}><X style={{ fontSize: '2em'}} /></a></div>
                <div className="col"><a href="mailto:bryanrakotosedson@gmail.com"><Mailbox style={{ fontSize: '2em'}} /></a></div>
            </div><br/>
            <div className="row">
                <div className="col"><a href="https://api.whatsapp.com/send?phone=+261345902939&text=Hello%20Bryan" target={"_blank"}><Whatsapp style={{ fontSize: '2em'}} /></a></div>
                <div className="col"><a href="https://github.com/Donovan700" target={"_blank"}><img src="OIP.jpeg" alt="icone" style={{ width: '2em', height: '2em' }} /></a></div>
                <div className="col"><a href="https://join.skype.com/invite/ORbWtqhHlc7c" target={"_blank"}><Skype style={{ fontSize: '2em' }} /></a></div>
                <div className="col"><a href="#"><img src="FAQ.jpeg" alt="icon" style={{ width: '2em' }} /></a></div>
            </div><br/>
            <div className="row">
                <span className="col"></span>
                <a href="Docs/MyCV.pdf" target={"_blank"}><button className="btn btn-secondary" id="get">Get CV</button></a>
                <span className="col"></span>
            </div>
            <h3 className="display-20" style={{ bottom: '0', left: '0', color: 'gray', textAlign: 'left', opacity: '40%' }}>
                All rights reserved &copy;
            </h3>
        </div>
    )
}
export default Contact;
