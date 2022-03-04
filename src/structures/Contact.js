export default function Contact(){
    return (
        <section className="contact">

    <h1 className="heading"> <span>contact</span> us </h1>

    <div className="row">

    <iframe className = "map"src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d232101.96322935045!2d44.359003275921765!3d40.151433463657945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406aa2dab8fc8b5b%3A0x3d1479ae87da526a!2sYerevan%2C%20Armenia!5e0!3m2!1sen!2sin!4v1646247898172!5m2!1sen!2sin" allowFullScreen="" loading="lazy"></iframe>
        <form action="">
            <h3>get in touch</h3>
            <div className="inputBox">
                <input type="text" placeholder="name"/>
            </div>
            <div className="inputBox">
                <input type="email" placeholder="email"/>
            </div>
            <div className="inputBox">
                <input type="text" placeholder="Phone"/>
            </div>
                <button className="btn">contact Now</button>
         </form>

    </div>

</section>
    )
}