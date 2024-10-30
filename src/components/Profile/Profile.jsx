import '@fortawesome/fontawesome-free/css/all.min.css';
export default function Profile(){
    return (
        <>
  <section id="profiles" className="profiles">
    <div className="profiles-details">
      <div className="section-heading text-center">
        <h2>profiles</h2>
      </div>
      <div className="container">
        <div className="profiles-content">
          <div className="row" style={{ justifyContent: 'center', display: 'flex' }}>
            <div className="col-sm-3">
              <div className="single-profile">
                <div className="profile-txt">
                  <a href="">
                    <i className="fab fa-facebook" />
                  </a>
                  <div className="profile-icon-name">Facebook</div>
                </div>
                <div className="single-profile-overlay">
                  <div className="profile-txt">
                    <a href="https://www.facebook.com/stiliyan.gospodinof">
                      <i className="fab fa-facebook" />
                    </a>
                    <div className="profile-icon-name">Facebook</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="single-profile">
                <div className="profile-txt">
                  <a href="">
                    <i className="fab fa-instagram" />
                  </a>
                  <div className="profile-icon-name">Instagram</div>
                </div>
                <div className="single-profile-overlay">
                  <div className="profile-txt">
                    <a href="https://www.instagram.com/stiliyan.gospodinov/">
                      <i className="fab fa-instagram" />
                    </a>
                    <div className="profile-icon-name">Instagram</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row" style={{ justifyContent: 'center', display: 'flex' }}>
            <div className="col-sm-3">
              <div className="single-profile">
                <div className="profile-txt">
                  <a href="">
                    <i className="flaticon-github-logo" />
                  </a>
                  <div className="profile-icon-name">Github</div>
                </div>
                <div className="single-profile-overlay">
                  <div className="profile-txt">
                    <a href="https://github.com/stiliyangospodinov">
                      <i className="flaticon-github-logo" />
                    </a>
                    <div className="profile-icon-name">Github</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="single-profile">
                <div className="profile-txt">
                  <a href="">
                    <i className="fab fa-linkedin" />
                  </a>
                  <div className="profile-icon-name">LinkedIn</div>
                </div>
                <div className="single-profile-overlay">
                  <div className="profile-txt">
                    <a href="https://www.linkedin.com/in/stiliyan-gospodinov-22b8a0332/">
                      <i className="fab fa-linkedin" />
                    </a>
                    <div className="profile-icon-name">LinkendIn</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>
  {/*/.profiles*/}
</>

    )
}