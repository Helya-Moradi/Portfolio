import Template from "src/sections/main_content/components/template";
import style from "./index.sass"

function Contact() {
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

                    <form className={style.contactForm}>
                        <div className={style.inputWrapper}>
                            <label>Name</label>
                            <input type="text"/>
                        </div>

                        <div className={style.inputWrapper}>
                            <label>Email</label>
                            <input type="text"/>
                        </div>

                        <div className={style.inputWrapper}>
                            <label>Subject</label>
                            <input type="text"/>
                        </div>

                        <div className={style.inputWrapper}>
                            <label>Message</label>
                            <textarea/>
                        </div>

                        <button>
                            Send Message
                        </button>
                    </form>
                </div>
            </Template>
        </div>
    );
}

export default Contact;