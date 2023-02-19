import React from 'react'

const Contact = () => {
  return (
    <>
        <section className="contact container">
        <h2>Contact us</h2>
        <article>
          <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2808.530189651408!2d19.848169715720957!3d45.257292279099154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475b1066090a7219%3A0xf05b709a8e7ae221!2z0KLRgNCzINCg0LXQv9GD0LHQu9C40LrQtSAyMCwg0J3QvtCy0Lgg0KHQsNC0IDIxMDAw!5e0!3m2!1ssr!2srs!4v1622578707051!5m2!1ssr!2srs" width="100%" height="500" style={{border:'0'}} allowFullScreen="" loading="lazy"></iframe>
          </div>

          <div>
            <form>
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <textarea cols="30" rows="10" placeholder="Message....."></textarea>
              <button>Send message</button>
            </form>
            <hr />
            <div>
              <span>Find us on:</span>
              <span><a href=""><i className="fab fa-facebook-square"></i></a></span>
              <span><a href=""><i className="fab fa-instagram"></i></a></span>
              <span><a href=""><i className="fab fa-twitter"></i></a></span>
              <span><a href=""><i className="fab fa-pinterest"></i></a></span>
            </div>
          </div>
        </article>
      </section>
    </>
  )
}

export default Contact;