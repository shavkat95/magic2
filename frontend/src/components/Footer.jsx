import React from "react";
/* import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn,
} from "mdb-react-ui-kit"; */

export default function Footer() {
  return (
    /* <footer id="about">
      <ul className="footer_list">
        <li>
          <a href="https://github.com/anhtruong225">Anh</a>
        </li>
        <li>
          <a href="https://github.com/shavkat95">Shavkat</a>
        </li>
        <li>
          <a href="https://github.com/CallMeMo29">Mo</a>
        </li>
        <li>
          <a href="https://github.com/Phil-star1984">Phil</a>
        </li>
        <li>
          <a href="https://github.com/Phil-star1984/Magical_Places">Git Repo</a>
        </li>
      </ul>
    </footer> */

    <footer className="page-footer font-small blue pt-4">
      <div className="container-fluid text-center text-md-left">
        <div className="row">
          <div className="col-md-6 mt-md-0 mt-3">
            <h5 className="text-uppercase">
              Where2Go is one of the leading companys in travelling experience.
              Our aim is to create a more colorful world.
            </h5>
            <p>
              Here you can use rows and columns to organize your footer content.
            </p>
          </div>

          <hr className="clearfix w-100 d-md-none pb-0" />

          <div className="col-md-3 mb-md-0 mb-3">
            <h5 className="text-uppercase">COMPANY</h5>
            <ul className="list-unstyled">
              <li>
                <a href="https://github.com/anhtruong225" target="_blank">
                  Anh the Cool
                </a>
              </li>
              <li>
                <a href="https://github.com/shavkat95" target="_blank">
                  Shaffi Shavkat
                </a>
              </li>
              <li>
                <a href="https://github.com/CallMeMo29" target="_blank">
                  Mo with the Flow
                </a>
              </li>
              <li>
                <a href="http://millionpainter.de/" target="_blank">
                  Philly Phil
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-3 mb-md-0 mb-3">
            <h5 className="text-uppercase">Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#!">Good2Go</a>
              </li>
              <li>
                <a href="#!">2FarAway</a>
              </li>
              <li>
                <a href="#!">2AndaHalf</a>
              </li>
              <li>
                <a href="#!">WeGo2</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-copyright text-center py-3">
        © 2023 Copyright:
        <a href="https://mdbootstrap.com/"> WHERE2GO.com</a>
      </div>
    </footer>
  );
}
