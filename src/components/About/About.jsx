export default function About(){
    return (
        <>
  <section id="about" className="about">
    <div className="section-heading text-center">
      <h2>about me</h2>
    </div>
    <div className="container">
      <div className="about-content">
        <div className="row">
          <div className="col-sm-6">
            <div className="single-about-txt">
              <h3>
              I’m a junior frontend developer with a solid foundation in web development, gained through intensive studies at SoftUni.
              </h3>
              <p>
              My passion for building user-friendly and efficient applications has driven me to develop projects using React and Angular, integrating them with databases like MongoDB, Firebase, and MySQL.

I’m eager to grow in a dynamic environment where I can apply my skills and continue learning. Working on challenging projects that combine creativity and technical expertise is my goal, and I look forward to contributing to a dedicated team.
              </p>
              <div className="row">
                <div className="col-sm-4">
                  <div className="single-about-add-info">
                    <h3>phone</h3>
                    <p>+359 897 625 888</p>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="single-about-add-info">
                    <h3>email</h3>
                    <p>stiliyan.gospodinov95@gmail.com</p>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="single-about-add-info">
                    <h3>website</h3>
                    <p>https://portfolio-a4676.web.app/</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-offset-1 col-sm-5">
            <div className="single-about-img">
              <img
                src="assets/images/about/picture.png"
                alt="profile_image"
              />
              <div className="about-list-icon">
                <ul>
                  <li>
                    <a href="https://www.facebook.com/stiliyan.gospodinof">
                      <i className="fab fa-facebook" aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/stiliyan.gospodinov/">
                      <i className="fab fa-instagram" aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/stiliyan-gospodinov-22b8a0332/">
                      <i className="fab fa-linkedin" aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/stiliyangospodinov">
                      <i className="fab fa-github" aria-hidden="true" />
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