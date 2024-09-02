import './contact.css';

function Contact() {
    return (
        <section>
            <h2>Contact</h2>
            <p>
                Name: 
                <input type="text" name="name" />
            </p>
            <p>
                Email: 
                <input type="text" name="email" />
            </p>
            <p>
                Message: 
                <textarea name="message" />
            </p>
            <button>Submit</button>
        </section>
    );
}

export default Contact;