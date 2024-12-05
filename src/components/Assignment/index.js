import './index.css'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FaChevronRight} from 'react-icons/fa'
import {MdArrowOutward} from 'react-icons/md'
import {MdArrowBackIosNew} from 'react-icons/md'
import {MdArrowForwardIos} from 'react-icons/md'
import {MdOutlineArrowOutward} from 'react-icons/md'
import {AiOutlineCopyrightCircle} from 'react-icons/ai'
import {FaChevronLeft} from 'react-icons/fa6'
import {FaInstagram} from 'react-icons/fa'
import {FaYoutube} from 'react-icons/fa'
import {CiLinkedin} from 'react-icons/ci'
import {IoCall} from 'react-icons/io5'
const Assignment = () => {
  return (
    <div className="app-container">
      <div className="header-container">
        <div className="image-container">
          <img
            src="https://i.ibb.co/cxxD7bD/favicon.png"
            className="favicon-image"
          />
          <h1 className="spacio-heading">
            SPACIO <br />
            TECHTONICS&#8482;
          </h1>
        </div>
        <div className="images-container2">
          <h1 className="work-para">OUR WORK</h1>
          <h1 className="why-para">WHY US?</h1>
          <button className="appointment-button">BOOK AN APPOINTMENT</button>
          <GiHamburgerMenu className="navbar" />
        </div>
      </div>
      <div className="facedas-container">
        <div className="simplify-container">
          <div>
            <p className="facedes-para">
              Simplifying <span className="span1">facedes</span> from <br />
              <span className="span2">conception to construction</span> <br />
              using custom-programmed digital-tools
            </p>
          </div>
          <div>
            <FaChevronRight className="direction" />
          </div>
        </div>
        <button className="book-button">
          BOOK AN APPOINTMENT <MdArrowOutward className="arrow-icon" />
        </button>
        <p className="spacio-para">
          <AiOutlineCopyrightCircle />
          SPACIO TECHTONICS|
          <span className="spacio-span">all rights reserved</span>
        </p>
      </div>
      <div className="tech-container">
        <div className="first-container">
          <div className="red-container">
            <p className="red-para">
              We are <br />
              Spacio Techtonics
            </p>
          </div>
          <div class="card">
            <div class="text">
              MORE ON OUR
              <br />
              EXPERTISE
            </div>
            <MdArrowOutward className="arrow" />
          </div>
        </div>
        <div className="second-container">
          <p className="innovation-para">
            Innovation and technology should make life simple—not the other way
            around.
          </p>
          <p className="built-para">
            We built Spacio Techtonics to help architects and engineers build
            their dreams and realise them with
            <span class="emphasis">custom - programmed digital tools.</span>
          </p>
          <p className="built-para1">
            With diverse backgrounds of engineers with professional experience
            and projects across India, we offer
            <span class="emphasis1">
              facade architecture, engineering and advisory services
            </span>
          </p>
          <p className="built-para3">
            to you to realise your dreams with confidence.
          </p>
          <p class="highlight">
            Make your dreams grow with innovation that flows.
          </p>
        </div>
      </div>
      <p className="spacio-para1">
        <AiOutlineCopyrightCircle />
        SPACIO TECHTONICS|
        <span className="spacio-span1">all rights reserved</span>
      </p>
      <div className="facedas-container2">
        <div className="slider-container">
          <MdArrowBackIosNew className="left-arrow" />
          <p className="delivered-para">
            Exceptioanal <br />
            facedes delivered
          </p>
          <MdArrowForwardIos className="right-arrow" />
        </div>
        <p className="spacio-para2">
          <AiOutlineCopyrightCircle />
          SPACIO TECHTONICS|
          <span className="spacio-span2">all rights reserved</span>
        </p>
      </div>
      <div className="map-container">
        <div className="map-container2">
          <div className="presence-container">
            <div className="our-container">
              <p className="presence-para">Our presence</p>
            </div>
            <p className="foot-para">
              We have our footprint throughout India and have work going on in
              the leading cities of India -
            </p>
            <ul className="dotted-list">
              <li>Delhi</li>
              <li>Mumbai</li>
              <li>Hyderbad</li>
              <li>Bengaluru</li>
              <li>Coimbatore</li>
              <li>Chennai</li>
            </ul>
            <div className="shadow-container">
              <div className="one-container">
                <h1 className="number-heading">100000</h1>
                <div className="row-container">
                  <p className="first-para">
                    SQFT.OF FACADE
                    <br />
                    BUILT SO FAR
                  </p>
                  <MdOutlineArrowOutward className="icon" />
                </div>
              </div>
              <div className="two-container">
                <h1 className="number-heading1">6+</h1>
                <div className="row-container1">
                  <p className="first-para1">
                    CITIES WITH
                    <br />
                    ACTIVE PROJECTS
                  </p>
                  <MdOutlineArrowOutward className="icon" />
                </div>
              </div>
              <div className="third-container">
                <h1 className="number-heading2">6+</h1>
                <div className="row-container2">
                  <p className="first-para2">
                    CITIES WITH
                    <br />
                    ACTIVE PROJECTS
                  </p>
                  <MdOutlineArrowOutward className="icon" />
                </div>
              </div>
            </div>
          </div>
          <img src="https://i.ibb.co/CzsCdPZ/map.png" className="map-image" />
        </div>
        <p className="spacio-para3">
          <AiOutlineCopyrightCircle />
          SPACIO TECHTONICS|
          <span className="spacio-span3">all rights reserved</span>
        </p>
      </div>
      <div className="latest-container">
        <div className="our-container1">
          <p className="presence-para1">Latest Work</p>
        </div>
        <div className="images-containers">
          <div className="first-image-container">
            <img
              src="https://i.ibb.co/q9YNCK1/Screenshot-2024-12-05-192322.png"
              className="screenshot-image1"
            />
            <p className="marbled-para">
              MARBLED, DELHI <MdOutlineArrowOutward />
            </p>
          </div>
          <div className="second-image-container">
            <img
              src="https://i.ibb.co/bQr4KFR/Screenshot-2024-12-05-192351.png"
              className="screenshot-image2"
            />
            <p className="hospice-para">
              HOSPICE, COIMBATORE <MdOutlineArrowOutward />
            </p>
          </div>
        </div>
        <p className="spacio-para4">
          <AiOutlineCopyrightCircle />
          SPACIO TECHTONICS|
          <span className="spacio-span4">all rights reserved</span>
        </p>
      </div>
      <div className="insights-continer">
        <div className="our-container2">
          <p className="presence-para2">Insights</p>
        </div>
        <div className="linkedin-container">
          <FaChevronLeft className="left-arrows" />
          <div className="column-container">
            <div className="linked-container1">
              <div className="inner-container">
                <p className="in-para">in</p>
              </div>
            </div>
            <p className="director-para">
              Our director has recieved the ‘Top <br />
              AEC Industry Voice’ on LinkedIN
            </p>
            <p className="date">2024-06-01</p>
          </div>
          <div className="column-container1">
            <div className="linked-container2">
              <div className="inner-container1">
                <p className="in-para1">in</p>
              </div>
            </div>
            <p className="director-para1">
              Our director has recieved the ‘Top AEC Industry Voice’
            </p>
            <p className="date1">2024-06-01</p>
          </div>
          <div className="column-container2">
            <div className="linked-container3">
              <div className="inner-container2">
                <p className="in-para2">in</p>
              </div>
            </div>
            <p className="director-para2">
              Our director has recieved the ‘Top AEC Industry Voice’
            </p>
            <p className="date2">2024-06-01</p>
          </div>
          <FaChevronRight className="direction1" />
        </div>
        <p className="spacio-para5">
          <AiOutlineCopyrightCircle />
          SPACIO TECHTONICS|
          <span className="spacio-span5">all rights reserved</span>
        </p>
      </div>
      <div className="new-container">
        <div className="header-container1">
          <div className="image-container4">
            <img
              src="https://i.ibb.co/cxxD7bD/favicon.png"
              className="favicon-image"
            />
            <h1 className="spacio-heading1">
              SPACIO <br />
              TECHTONICS&#8482;
            </h1>
          </div>
          <div className="images-container3">
            <h1 className="work-para1">projects</h1>
            <h1 className="why-para1">services</h1>
            <h1 className="career">carrers</h1>
            <GiHamburgerMenu className="navbar" />
          </div>
        </div>
        <div className="innovative-row-container">
          <div className="with-container">
            <h1 className="innovative-heading">Innovative With Us</h1>
            <p className="contact-para">contact@spaciotechtonics.info</p>
            <p className="number-para">+91 94863 19871</p>
            <p className="carrer-para">
              If you’re looking for a career with us click here to apply
            </p>
            <div className="social-container">
              <div>
                <p className="contact-para">GET SOCIAL</p>
              </div>
              <div className="insta-container">
                <FaInstagram className="insta-icon" />
                <FaYoutube className="you-iocn" />
                <CiLinkedin className="link-icon" />
              </div>
            </div>
          </div>
          <div className="email-container">
            <h1 className="touch-para">Keep in touch</h1>
            <p className="get-para">to get updates and get contacted by us</p>
            <div className="adress-container">
              <div className="adress-container1">
                <p className="email-para">EMAIL-ADDRESS</p>
              </div>
              <div className="signup-container">
                <p className="sign-para">SIGN UP</p>
                <MdOutlineArrowOutward className="iconic" />
              </div>
            </div>
          </div>
        </div>
        <p className="spacio-para6">
          <AiOutlineCopyrightCircle />
          SPACIO TECHTONICS|
          <span className="spacio-span6">all rights reserved</span>
        </p>
      </div>
      <div className="black-container">
        <div className="first-column-container">
          <div className="image-container5">
            <img
              src="https://i.ibb.co/cxxD7bD/favicon.png"
              className="favicon-image1"
            />
            <h1 className="spacio-heading2">
              SPACIO <br />
              TECHTONICS&#8482;
            </h1>
          </div>
          <p className="spacio-para7">
            <AiOutlineCopyrightCircle />
            SPACIO TECHTONICS|
            <span className="spacio-span7">all rights reserved</span>
          </p>
        </div>
        <div className="second-column-container">
          <p className="company-heading">Company Links</p>
          <p className="policy-para">Privacy Policy</p>
          <p className="condition-para">Terms & Conditions</p>
          <p className="us-para">Contact Us</p>
        </div>
        <div className="callus-container">
          <p className="callus-para">CALL US</p>
          <IoCall className="call-icon" />
        </div>
      </div>
    </div>
  )
}
export default Assignment
// css
