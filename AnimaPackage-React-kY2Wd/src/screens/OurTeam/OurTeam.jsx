import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const OurTeam = () => {
  return (
    <div className="our-team">
      <div className="div">
        <div className="overlap">
          <img className="rectangle" alt="Rectangle" src="/img/rectangle-56.svg" />
          <p className="viraj-kamath-co">
            Viraj Kamath <br />
            Co Founder, COO
          </p>
          <p className="khartik-uppalapati">
            Khartik Uppalapati <br /> Co Founder, CEO
          </p>
          <p className="viraj-kamath-is-a">
            Viraj Kamath is a leader and highly passionate individual who is on a mission to give back to his community.
            Viraj comes form humble beginnings, being born with&nbsp;&nbsp;a rare liver disease known as PFIC, and
            having to move continents to the US in order to be treated for his disease. Viraj recognizing the resources
            he has been blessed with, made it a mission to provide back to those that seek need. He believes in the
            power of community and works to connect and support those facing similar struggles. Through his leadership,
            Viraj aims to create a more caring and inclusive society for everyone.
          </p>
          <p className="text-wrapper">
            Khartik Uppalapati is a dedicated leader committed to making a difference in his community. In 2021, he was
            diagnosed with chronic lymphedema, a condition that hasn&#39;t deterred his passion for positive change. As
            CEO of RareGen, Khartik brings a wealth of determination and drive to his role. Despite facing health
            challenges, he remains focused on giving back and supporting those in need. With a strong belief in fairness
            and inclusivity, Khartik advocates for equal opportunities for all. He understands the importance of
            community and works tirelessly to connect and empower individuals facing similar struggles. Through his
            leadership, Khartik is determined to build a more compassionate and inclusive society for everyone.
          </p>
          <img className="fullsizerender" alt="Fullsizerender" src="/img/fullsizerender-1.png" />
          <img className="image" alt="Image" src="/img/image-6.png" />
        </div>
        <div className="overlap-group">
          <div className="overlap-2">
            <p className="daniel-kang-is-a">
              Daniel Kang is&nbsp;&nbsp;a Materials Science and Nanotechnology student at Stanford University, leading
              an&nbsp;&nbsp;island wide initiative across Guam to provide an annual symposium for rare disease patients
              to connect and advocate for their rights by advocating for crucial legislation to be passed. His academic
              achievements in Materials Science have led him to win the Best of Category award at the Intel ISEF Science
              Fair, as well as being named one of the top 300 STS scholars in the nation, having his own planet, <br />
              Minor Planet (34490) &#34;Danielkang&#34; , named after him by the MIT Lincoln Laboratories for his
              achievements
            </p>
            <p className="p">Sahil Sood - Harvard RareGen</p>
            <p className="text-wrapper-2">Daniel Kang - Stanford RareGen</p>
          </div>
          <p className="sahil-sood-is-a">
            Sahil Sood is a distinguished molecular biology student at Harvard University as well as a researcher at the
            prestigious Harvard/MIT BROAD Institute where he works in developing therapeutics for rare diseases..
            Sahil’s Ground Breaking Research has&nbsp;&nbsp;led him to be chosen as a Teen Titan, being featured in
            Forbes, for his work leading his 501c(3) HYPE that performs grassroots healthcare equity work across
            Georgia.
          </p>
        </div>
        <div className="text-wrapper-3">Executive Board</div>
        <div className="text-wrapper-4">Collegiate Board</div>
        <div className="text-wrapper-5">Regional Board</div>
        <p className="text-wrapper-6">Neil Deshmukh - US East</p>
        <p className="zhong-shen-canada"> Zhong Shen - Canada East</p>
        <div className="overlap-3">
          <p className="text-wrapper-7">Prabuv Bandella - India South</p>
          <p className="text-wrapper-8">Ryon Cheema - Canada West East</p>
        </div>
        <div className="overlap-4">
          <p className="text-wrapper-9">Safiyari Elijah Habyarimana-Sentongo  - Uganda</p>
          <p className="text-wrapper-10">James Philippson - UK England</p>
        </div>
        <div className="overlap-5">
          <p className="text-wrapper-11">Albert McNeil - UK Scotland</p>
          <p className="text-wrapper-12"> Naija Amelija Balcerzak - Poland</p>
          <p className="text-wrapper-13">Rohan Veerdi - UK Wales</p>
        </div>
        <div className="overlap-6">
          <p className="text-wrapper-14">Shreesht Mehta - India North</p>
          <p className="text-wrapper-15">Rayyan Al-Nuaimi - UAE Rural</p>
          <p className="text-wrapper-16">Hammad Rashid - UAE Urban</p>
        </div>
        <p className="text-wrapper-17">Sayida Mahmoud - US South</p>
        <p className="text-wrapper-18">Abesalom Webb - US West</p>
        <div className="header-menu">
          <div className="overlap-7">
            <div className="group">
              <Link className="text-wrapper-19" to="/homepage">
                The Movement
              </Link>
              <Link className="text-wrapper-20" to="/re-direct">
                Global Disease Network Hub
              </Link>
              <Link className="text-wrapper-21" to="/re-direct">
                Regional Empowerment Program
              </Link>
            </div>
            <Link
              className="group-2"
              to="/login"
              onMouseEnter={() => {
                window.location.href = "/login";
              }}
            >
              <div className="div-wrapper">
                <div className="text-wrapper-22">Log In</div>
              </div>
              <div className="overlap-group-2">
                <div className="text-wrapper-22">Sign up</div>
              </div>
            </Link>
            <div className="rectangle-2" />
            <div className="text-wrapper-23">Our Team</div>
            <img className="raregen" alt="Raregen" src="/img/raregen-1.png" />
          </div>
        </div>
        <img className="img" alt="Image" src="/img/image-3.png" />
        <img className="image-2" alt="Image" src="/img/image-5.png" />
        <div className="footer" />
      </div>
    </div>
  );
};
