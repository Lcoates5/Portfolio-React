import './contact.css';

function Contact() {
    return (
        <section>
            <h2>Contact</h2>
            <form>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text"  id="name" name="name" />
            </div>
            <div>
                <label htmlFor="email">Email:</label> 
                <input type="text" id="email" name="email" />
            </div>
            <div>
            <label htmlFor="email">Message:</label> 
                <textarea id="message" name="message" />
            </div>
            <button type="submit">Submit</button>
            </form>
        </section>
    );
}

export default Contact;