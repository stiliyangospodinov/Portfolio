export default function Contact(){
    return (
        <>
  <section id="contact" className="contact">
    <div className="section-heading text-center">
      <h2>contact me</h2>
    </div>
    <div className="container">
      <div className="contact-content">
        <div className="row">
          <div className="col-md-offset-1 col-md-5 col-sm-6">
            <div className="single-contact-box">
              <div className="contact-form">
                <form>
                  <div className="row">
                    <div className="col-sm-6 col-xs-12">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="Name*"
                          name="name"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6 col-xs-12">
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="Email*"
                          name="email"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="subject"
                          placeholder="Subject"
                          name="subject"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="form-group">
                        <textarea
                          className="form-control"
                          rows={8}
                          id="comment"
                          placeholder="Message"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="single-contact-btn">
                        <a className="contact-btn" href="#" role="button">
                          submit
                        </a>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-offset-1 col-md-5 col-sm-6">
            <div className="single-contact-box">
              <div className="contact-adress">
                <div className="contact-add-head">
                  <h3>Stiliyan Gospodinov</h3>
                  <p>Frontend developer</p>
                </div>
                <div className="contact-add-info">
                  <div className="single-contact-add-info">
                    <h3>phone</h3>
                    <p>+359 897 625 888</p>
                  </div>
                  <div className="single-contact-add-info">
                    <h3>email</h3>
                    <p>stiliyan.gospodinov95@gmail.com</p>
                  </div>
                  <div className="single-contact-add-info">
                    <h3>website</h3>
                    <p>https://portfolio-a4676.web.app</p>
                  </div>
                </div>
              </div>              <div className="hm-foot-icon">
                <ul>
                  <li>
                    <a href="https://www.facebook.com/stiliyan.gospodinof">
                      <i className="fab fa-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/stiliyan.gospodinov/">
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/stiliyan-gospodinov-22b8a0332/">
                      <i className="fab fa-linkedin" />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/stiliyangospodinov">
                      <i className="fab fa-github" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</>

    )
}