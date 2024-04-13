import Template from "src/sections/main_content/components/template";
import style from "./index.sass"
import {useEffect, useState} from "react";
import emailjs from '@emailjs/browser';
import cls from "src/utils/class_names";
import zigzagImg from "src/assets/images/shapes/zigzag.png";
import ZigzagAnimation from "src/components/zigzagAnimation";

function Contact() {
    const [contactData, setContactData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [isLoading, setIsLoading] = useState(false);
    const [messageStatus, setMessageStatus] = useState(null);

    type objType = {
        name?: string,
        email?: string,
        subject?: string,
        message?: string

    }

    const setContactDataValue = (obj: objType) => {
        setContactData(prev => ({...prev, ...obj}))
    }

    const contactFormSubmitHandler = (e: any) => {
        e.preventDefault();
        e.target.classList.remove(style.invalid);
        const serviceId = 'service_aa436to';
        const templateId = 'template_9n5r43i';

        if (contactData.name && contactData.email) {
            setIsLoading(true);

            emailjs.send(serviceId, templateId, contactData)
                .then((result) => {
                    setIsLoading(false);
                    setMessageStatus('success')

                    setTimeout(() => {
                        setMessageStatus(null);
                    }, 5000);
                }, (error) => {
                    setIsLoading(false);
                    setMessageStatus('wrong')

                    setTimeout(() => {
                        setMessageStatus(null);
                    }, 5000);
                });

            setContactData({
                name: '',
                email: '',
                subject: '',
                message: ''
            })
        } else {
            e.target.classList.add(style.invalid);
        }
    }

    useEffect(() => {
        emailjs.init('VfT4-hFCfe-cPKKb4')
    }, [])

    return (
        <div className={style.contactContainer}>
            <Template title='Contact' color='lightPurple' direction='ltr'>
                <div className={style.contact}>
                    <h3>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus fugit harum nihil
                    </h3>

                    <p>
                        Self-motivated and creative Web Designer and Front-end Developer. Interested in learning,
                        programming, web design, artwork and problem solving.
                    </p>

                    <form
                        className={style.contactForm}
                        onSubmit={contactFormSubmitHandler}
                    >
                        <div className={cls(style.inputWrapper, contactData.name || style.required)}>
                            <label>Name</label>
                            <input
                                type="text"
                                value={contactData.name}
                                onChange={e => {
                                    setContactDataValue({name: e.target.value})
                                }}/>
                        </div>

                        <div className={cls(style.inputWrapper, contactData.email || style.required)}>
                            <label>Email</label>
                            <input
                                type="email"
                                value={contactData.email}
                                onChange={e => {
                                    setContactDataValue({email: e.target.value})
                                }}/>
                        </div>

                        <div className={style.inputWrapper}>
                            <label>Subject</label>
                            <input
                                type="text"
                                value={contactData.subject}
                                onChange={e => {
                                    setContactDataValue({subject: e.target.value})
                                }}/>
                        </div>

                        <div className={style.inputWrapper}>
                            <label>Message</label>
                            <textarea
                                rows={7}
                                value={contactData.message}
                                onChange={e => {
                                    setContactDataValue({message: e.target.value})
                                }}/>
                        </div>

                        <button type="submit">
                            {
                                isLoading ? (
                                    <div className={style.loader}/>
                                ) : (
                                    <span> Send Message </span>
                                )
                            }
                        </button>

                        <div
                            className={cls(style.messageStatus, messageStatus && style.show, messageStatus && style[messageStatus])}>
                            {messageStatus === 'success'
                                ? 'Thank you for your message. It has been sent.'
                                : messageStatus === 'wrong'
                                    ? 'Something went wrong, please try again later.'
                                    : null}
                        </div>
                    </form>
                </div>
            </Template>

            <ZigzagAnimation right={43} bottom={55}/>
        </div>
    );
}

export default Contact;