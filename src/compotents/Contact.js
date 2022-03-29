import { useState, useEffect } from 'react';
import contactData from './contactData';

function Contact() {

    let [contact, setContact] = useState(contactData);

    return (
        <>
            <div className="secTitle s04">
                <p>Contact</p>
                <span className="moveBorder"></span>
            </div>
            <div className="subTitle">
                <p>활동 커뮤니티 및 연락처</p>
            </div>
            <div className="listWrap contactPage">
                <div className="row">
                    <div className="contactList">
                        {
                            contact.map((contact, index) => {
                                return (
                                    <div className="contact" title={contact.infoTitle} key={index}>
                                        <i className={contact.infoTitle}></i>
                                        <a href={contact.link} target={"_blank"}>{contact.info}</a>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;