import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const ReDirect = () => {
  return (
    <div className="re-direct">
      <div className="div-3">
        <div className="overlap-19">
          <img className="rectangle-6" alt="Rectangle" src="/img/rectangle-56-2.svg" />
          <p className="text-wrapper-55">Request will be processed within 48 hours</p>
          <Link className="group-13" to="/login">
            <div className="overlap-20">
              <div className="text-wrapper-56">Sign up</div>
            </div>
          </Link>
          <Link className="group-14" to="/login">
            <div className="overlap-20">
              <div className="text-wrapper-56">Log In</div>
            </div>
          </Link>
        </div>
        <p className="text-wrapper-57">Please Make an Account to Access This Page</p>
        <div className="header-menu-3">
          <div className="raregen-wrapper">
            <img className="raregen-3" alt="Raregen" src="/img/raregen-1.png" />
          </div>
        </div>
        <div className="footer-3" />
      </div>
    </div>
  );
};
