import ScrollEffect from "../../../components/ScrollEffect/ScrollEffect";
import src from '../../../assets/contact.svg';
import { useState } from "react";
import './ContactUs.css';
import toast from "react-hot-toast";

const ContactUs = () => {

    const [userInput, setUserInput] = useState({ name: '', email: '', number: '', message: '' });

    const changeHandler = (e) => {
        setUserInput(prev => ({ ...prev, [e.target.name]: e.target.value }));
    }
    const submitHandler=(e)=>{
        e.preventDefault();
        toast.success('Form Submitted!!');
        setUserInput({name:'',email:'',number:'',message:''});
        {/** Api call to server */}
    }

    return (
        <section id='contact-us'>
        <ScrollEffect className='contact-container' classNameInner='contact-wrapper'>
            <div className="contact-details">
                <h1>Contact Us</h1>
                <p>
                    Let's talk about everything! Write us a message and we will reach you!
                </p>
                <img src={src} alt='contact' />
            </div>
            <form onSubmit={submitHandler}>
                <input
                    type='text'
                    name='name'
                    placeholder="Name"
                    value={userInput.name}
                    onChange={changeHandler}
                    required
                    autoComplete="on"
                />
                <input
                    type='email'
                    name='email'
                    placeholder="Email"
                    value={userInput.email}
                    onChange={changeHandler}
                    required
                    autoComplete="on"
                />
                <input
                    type='number'
                    name='number'
                    placeholder="Phone Number"
                    value={userInput.number}
                    onChange={changeHandler}
                    required
                    autoComplete="on"
                />
                <textarea
                    rows='10'
                    cols='10'
                    name="message"
                    value={userInput.message}
                    onChange={changeHandler}
                    placeholder="Your Message"
                >
                </textarea>
                <button type='submit'>Send Message</button>
            </form>
        </ScrollEffect>
        </section>
    );
}
export default ContactUs;