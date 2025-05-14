import { Fragment } from "react";
const bio_ = `<p>
<strong>Hello! I’m True Bliss.</strong>
Full stack, Blockchain Engineer. Rich experience in web3 project and building and customization, also I am good at Solidity & Rust. I love to talk with you about your vision and idea.
</p>`;
const AboutMe = ({ bio }) => {
  return (
    <Fragment>
      <div className="content about">
        {/* title */}
        <div className="title">
          <span className="first-word">About</span> Me
        </div>
        {/* content */}
        <div className="row">
          <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
            <div
              className="text-box"
              dangerouslySetInnerHTML={{ __html: bio ? bio : bio_ }}
            ></div>
          </div>
          <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
            <div className="info-list">
              <ul>
                <li>
                  <strong>Age . . . . . . . . . . . </strong> 28
                </li>
                <li>
                  <strong>Gender . . . . .</strong> Male
                </li>
                <li>
                  <strong>Freelance . . . . .</strong> Available
                </li>
              </ul>
            </div>
          </div>
          <div className="clear" />
        </div>
      </div>
    </Fragment>
  );
};
export default AboutMe;
