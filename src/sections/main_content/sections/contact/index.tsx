import Template from "src/sections/main_content/components/template";
import style from "./index.sass"
import {useEffect, useState} from "react";

function Contact() {
    const [contactData, setContactData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })

    type objType = {
        name?: string,
        email?: string,
        subject?: string,
        message?: string

    }

    const setContactDataValue = (obj: objType) => {
        setContactData(prev => ({...prev, ...obj}))
    }

    const contactFormSubmitHandler = () => {
        // TODO: send email
    }

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
                        <div className={style.inputWrapper}>
                            <label>Name</label>
                            <input
                                type="text"
                                onChange={e => {
                                    setContactDataValue({name: e.target.value})
                                }}/>
                        </div>

                        <div className={style.inputWrapper}>
                            <label>Email</label>
                            <input
                                type="email"
                                onChange={e => {
                                    setContactDataValue({email: e.target.value})
                                }}/>
                        </div>

                        <div className={style.inputWrapper}>
                            <label>Subject</label>
                            <input
                                type="text"
                                onChange={e => {
                                    setContactDataValue({subject: e.target.value})
                                }}/>
                        </div>

                        <div className={style.inputWrapper}>
                            <label>Message</label>
                            <textarea
                                rows={7}
                                onChange={e => {
                                    setContactDataValue({message: e.target.value})
                                }}/>
                        </div>

                        <button type="submit">
                            Send Message
                        </button>
                    </form>
                </div>
            </Template>
        </div>
    );
}

export default Contact;