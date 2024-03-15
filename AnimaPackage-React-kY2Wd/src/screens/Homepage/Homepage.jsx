import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const Homepage = () => {
  return (
    <div className="homepage">
      <div className="div-2">
        <div className="frame-wrapper">
          <img className="frame" alt="Frame" src="/img/frame.svg" />
        </div>
        <p className="text-wrapper-24">
          We’re mobilizing individuals aged 12-19 to take action, fostering Rare Disease Consciousness
        </p>
        <p className="text-wrapper-25">Join Our Movement to combat the world’s biggest overlooked problem</p>
        <p className="text-wrapper-26">
          Re-Defining an Age Old Movement, Facilitating a New Era of progress by Empowering Upcoming Youth Changemakers
        </p>
        <div className="overlap-group-wrapper">
          <div className="overlap-group-3">
            <div className="text-wrapper-27">872</div>
            <div className="text-wrapper-28">4,000+</div>
            <div className="text-wrapper-29">47+</div>
            <div className="text-wrapper-30">Active Members</div>
            <p className="text-wrapper-31">Diseases Represented on Our Network</p>
            <div className="text-wrapper-32">Global Chapters</div>
          </div>
        </div>
        <div className="overlap-8">
          <div className="group-3">
            <div className="overlap-9">
              <div className="text-wrapper-33">Youth Engagement</div>
              <p className="text-wrapper-34">
                By focusing on the global youth demographic we aim to create a broad spectrum of change encompassing
                every individuals unique strengths
              </p>
              <div className="group-4" />
            </div>
            <div className="overlap-10">
              <div className="text-wrapper-35">Global Disease Network Hub</div>
              <p className="text-wrapper-36">
                RareGen is consolidating all rare disease information into one single place, aiming to build the largest
                database of rare disease support, and progress tracking resources eliminating the lack of information
                that comes with rare diseases
              </p>
              <div className="group-5" />
            </div>
            <div className="overlap-11">
              <div className="text-wrapper-37">Regional Empowerment Program</div>
              <p className="text-wrapper-38">
                Many organizations lay hidden from the online world, stopping their potential for growth. RareGen is
                changing this by using grassroots investigation to bring these crucial groups online.
              </p>
              <div className="group-6" />
            </div>
          </div>
          <img className="image-3" alt="Image" src="/img/image-15.png" />
          <img className="image-4" alt="Image" src="/img/image-17.png" />
        </div>
        <div className="overlap-12">
          <div className="overlap-wrapper">
            <div className="overlap-13">
              <div className="rectangle-3" />
              <Link className="group-7" to="/login">
                <div className="overlap-group-4">
                  <div className="text-wrapper-39">Get Started</div>
                </div>
              </Link>
              <img className="frame-2" alt="Frame" src="/img/frame-1.svg" />
            </div>
          </div>
          <div className="group-8">
            <div className="text-wrapper-40">Join the Movement</div>
            <div className="text-wrapper-41">Launch a Chapter</div>
            <p className="text-wrapper-42">Contibute to our Network Hub</p>
            <div className="text-wrapper-43">Partner</div>
            <p className="text-wrapper-44">There are multiple ways to get involved</p>
            <p className="text-wrapper-45">
              If you are a passionate youth from ages 12-19, apply to start a chapter in your area
            </p>
            <p className="text-wrapper-46">
              If you are a organziation in the health or advocacy sector, consider partnering with us
            </p>
            <div className="megaphone-wrapper">
              <img className="megaphone" alt="Megaphone" src="/img/megaphone-1.svg" />
            </div>
            <div className="ellipse" />
            <div className="rocket-launch-wrapper">
              <img className="rocket-launch" alt="Rocket launch" src="/img/rocket-launch-1.svg" />
            </div>
          </div>
          <p className="text-wrapper-47">
            Update any information on our network with new resources and developments to further progress our cause
          </p>
          <img className="image-5" alt="Image" src="/img/image-18.png" />
        </div>
        <div className="footer-2" />
        <div className="overlap-14">
          <img className="mask-group" alt="Mask group" src="/img/mask-group.png" />
          <div className="rectangle-4" />
          <div className="group-9">
            <div className="overlap-15">
              <p className="text-wrapper-48">
                470 Million Individuals Across the World Suffer from Rare Diseases, and are forced to ignore their pain
                as society overlooks the challenges they face
              </p>
            </div>
          </div>
        </div>
        <div className="header-menu-2">
          <div className="overlap-16">
            <div className="navbar">
              <div className="text-wrapper-49">The Movement</div>
              <Link className="text-wrapper-50" to="/re-direct">
                Global Disease Network Hub
              </Link>
              <Link className="text-wrapper-51" to="/our-team">
                Our Team
              </Link>
              <Link className="text-wrapper-52" to="/re-direct">
                Regional Empowerment Program
              </Link>
            </div>
            <Link className="group-10" to="/login">
              <div className="overlap-17">
                <div className="text-wrapper-53">Log In</div>
              </div>
              <div className="overlap-group-5">
                <div className="text-wrapper-53">Sign up</div>
              </div>
            </Link>
            <div className="rectangle-5" />
            <img className="raregen-2" alt="Raregen" src="/img/raregen-1.png" />
          </div>
        </div>
        <div className="group-11">
          <div className="overlap-18">
            <div className="group-12">
              <img className="image-6" alt="Image" src="/img/image-7.png" />
              <img className="image-7" alt="Image" src="/img/image-14.png" />
              <img className="image-8" alt="Image" src="/img/image-8.png" />
              <img className="image-9" alt="Image" src="/img/image-9.png" />
              <img className="image-10" alt="Image" src="/img/image-10.png" />
              <img className="image-11" alt="Image" src="/img/image-11.png" />
              <img className="image-12" alt="Image" src="/img/image-12.png" />
              <img className="image-13" alt="Image" src="/img/image-13.png" />
            </div>
            <div className="frame-3" />
            <div className="frame-4" />
          </div>
        </div>
        <p className="text-wrapper-54">
          More than 400 million people worldwide are living with a rare disease, and approximately 50 percent are
          children. (World Health Organization)
        </p>
      </div>
    </div>
  );
};
