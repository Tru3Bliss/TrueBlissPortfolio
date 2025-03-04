import ActiveSection from "../activeSection";

const BlogPostNew = () => {
  return (
    <div
      className={`blog blog-post ${ActiveSection("blog-post")}`}
      id="blog-card"
    >
      <div className="card-wrap">
        {/*
        Blog Single
      */}
        <div className="content blog-single">
          {/* title */}
          <div className="title">Blog Post</div>
          {/* content */}
          <div className="row border-line-v">
            <div className="col col-m-12 col-t-12 col-d-12">
              <div className="post-box">
                {/* blog detail */}
                <h1 className="h-title">
                  Procuring Education on Consulted Assurance in Do
                </h1>
                <div className="blog-detail">
                  <span className="date">April 28, 2020</span>
                  <span className="cat-links">
                    <a href="#">Design</a>, <a href="#">Music</a>
                  </span>
                  <span className="byline">
                    {" "}
                    by{" "}
                    <span className="author">
                      <a href="#">admin</a>
                    </span>
                  </span>
                </div>
                {/* blog image */}
                <div className="blog-image">
                  <img src="images/blog/blog1.jpg" alt="" />
                </div>
                {/* blog content */}
                <div className="blog-content">
                  <p>
                    So striking at of to welcomed resolved. Northward by
                    described up household therefore attention. Excellence
                    decisively nay man yet impression for contrasted remarkably.
                  </p>
                  <p>
                    Forfeited you engrossed but gay sometimes explained. Another
                    as studied it to evident. Merry sense given he be arise.
                    Conduct at an replied removal an amongst. Remaining
                    determine few her two cordially admitting old.
                  </p>
                  <blockquote>
                    Vestibulum ante ipsum primis in faucibus orci luctus et
                    ultrices posuere cubilia Curae; Pellentesque suscipit.
                  </blockquote>
                  <p>
                    Tiled say decay spoil now walls meant house. My mr interest
                    thoughts screened of outweigh removing. Evening society
                    musical besides inhabit ye my. Lose hill well up will he
                    over on. Increasing sufficient everything men him admiration
                    unpleasing sex.
                  </p>
                  <ul className="list-style">
                    <li>Greatest properly off ham exercise all.</li>
                    <li>Unsatiable invitation its possession nor off.</li>
                    <li>
                      All difficulty estimating unreserved increasing the
                      solicitude.
                    </li>
                  </ul>
                  <p>
                    Unpleasant astonished an diminution up partiality. Noisy an
                    their of meant. Death means up civil do an offer wound of.
                  </p>
                </div>
                <div className="post-text-bottom">
                  <div className="social-share">
                    <span>Share</span>
                    <a
                      className="share-btn share-btn-facebook"
                      title="Share on Facebook"
                    >
                      <i className="ion ion-social-facebook" />
                    </a>
                    <a
                      className="share-btn share-btn-twitter"
                      title="Share on Twitter"
                    >
                      <i className="ion ion-social-twitter" />
                    </a>
                    <a
                      className="share-btn share-btn-linkedin"
                      title="Share on Linkedin"
                    >
                      <i className="ion ion-social-linkedin" />
                    </a>
                    <a
                      className="share-btn share-btn-reddit"
                      title="Share on Reddit"
                    >
                      <i className="ion ion-social-reddit" />
                    </a>
                    <a
                      className="share-btn share-btn-pinterest"
                      title="Share on Pinterest"
                    >
                      <i className="ion ion-social-pinterest" />
                    </a>
                  </div>
                  <span className="tags-links">
                    Taggs: <a href="#">code</a>
                    <a href="#">html</a>
                    <a href="#">plugin</a>
                    <a href="#">wordpress</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <nav className="navigation post-navigation">
            <div className="nav-links">
              <div className="nav-previous">
                <a href="#">
                  <span className="post-nav-next post-nav-text">Prev</span>
                </a>
              </div>
              <div className="nav-next">
                <a href="#">
                  <span className="post-nav-prev post-nav-text">Next</span>
                </a>
              </div>
            </div>
          </nav>
          <div className="post-comments">
            <div className="title">
              <div className="title_inner">3 Comments</div>
            </div>
            <div className="row border-line-v comments-row">
              <div className="col col-m-12 col-t-12 col-d-12">
                <ul className="comments">
                  <li className="comment post-comment">
                    <div className="comment">
                      <div className="comment-image image">
                        <img
                          src="images/man1.jpg"
                          className="avatar"
                          height={80}
                          width={80}
                          alt=""
                        />
                      </div>
                      <div className="comment-desc desc">
                        <div className="comment-name name">
                          <span className="comment-author">John Doe</span>
                          <span className="comment-time">8:16 pm</span>
                          <span className="comment-date">April 28, 2020</span>
                          <span className="comment-reply">
                            <a className="comment-reply-link" href="#">
                              Reply
                            </a>
                          </span>
                        </div>
                        <div className="comment-text">
                          <p>
                            An has alterum nominavi. Nam at elitr veritus
                            voluptaria. Cu eum regione tacimates
                            vituperatoribus, ut mutat delenit est.
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <ul className="children">
                    <li className="comment post-comment">
                      <div className="comment">
                        <div className="comment-image image">
                          <img
                            src="images/man1.jpg"
                            className="avatar"
                            height={80}
                            width={80}
                            alt=""
                          />
                        </div>
                        <div className="comment-desc desc">
                          <div className="comment-name name">
                            <span className="comment-author">John Doe</span>
                            <span className="comment-time">8:16 pm</span>
                            <span className="comment-date">April 28, 2020</span>
                            <span className="comment-reply">
                              <a className="comment-reply-link" href="#">
                                Reply
                              </a>
                            </span>
                          </div>
                          <div className="comment-text">
                            <p>
                              An has alterum nominavi. Nam at elitr veritus
                              voluptaria. Cu eum regione tacimates
                              vituperatoribus, ut mutat delenit est.
                            </p>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <li className="comment post-comment">
                    <div className="comment">
                      <div className="comment-image image">
                        <img
                          src="images/man1.jpg"
                          className="avatar"
                          height={80}
                          width={80}
                          alt=""
                        />
                      </div>
                      <div className="comment-desc desc">
                        <div className="comment-name name">
                          <span className="comment-author">John Doe</span>
                          <span className="comment-time">8:16 pm</span>
                          <span className="comment-date">April 28, 2020</span>
                          <span className="comment-reply">
                            <a className="comment-reply-link" href="#">
                              Reply
                            </a>
                          </span>
                        </div>
                        <div className="comment-text">
                          <p>
                            An has alterum nominavi. Nam at elitr veritus
                            voluptaria. Cu eum regione tacimates
                            vituperatoribus, ut mutat delenit est.
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="post-comments">
            <div className="title">Leave a Comment</div>
            <div className="row border-line-v">
              <div className="col col-m-12 col-t-12 col-d-12">
                <div className="post-box">
                  <form id="cform" method="post">
                    <div className="row">
                      <div className="col col-d-12 col-t-12 col-m-12">
                        <div className="group-val">
                          <input
                            type="text"
                            name="name"
                            placeholder="Full Name"
                          />
                        </div>
                      </div>
                      <div className="col col-d-12 col-t-12 col-m-12">
                        <div className="group-val">
                          <textarea
                            name="message"
                            placeholder="Your Message"
                            defaultValue={""}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="align-left">
                      <a href="#" className="button">
                        <span className="text">Add Comment</span>
                        <span className="arrow" />
                      </a>
                    </div>
                  </form>
                  <div className="alert-success">
                    <p>Thanks, your message is sent successfully.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BlogPostNew;

export const BlogPostClassic = () => {
  return (
    <div className="card-inner blog blog-post animated" id="blog-card">
      <div className="card-wrap">
        {/*
						Blog Single
					*/}
        <div className="content blog-single">
          {/* title */}
          <div className="title">Blog Post</div>
          {/* content */}
          <div className="row border-line-v">
            <div className="col col-m-12 col-t-12 col-d-12">
              <div className="post-box">
                {/* blog detail */}
                <h1>Procuring Education on Consulted Assurance in Do</h1>
                <div className="blog-detail">Posted 12 June 2016</div>
                {/* blog image */}
                <div className="blog-image">
                  <img src="images/blog/blog1.jpg" alt="" />
                </div>
                {/* blog content */}
                <div className="blog-content">
                  <p>
                    So striking at of to welcomed resolved. Northward by
                    described up household therefore attention. Excellence
                    decisively nay man yet impression for contrasted remarkably.
                  </p>
                  <p>
                    Forfeited you engrossed but gay sometimes explained. Another
                    as studied it to evident. Merry sense given he be arise.
                    Conduct at an replied removal an amongst. Remaining
                    determine few her two cordially admitting old.
                  </p>
                  <blockquote>
                    Vestibulum ante ipsum primis in faucibus orci luctus et
                    ultrices posuere cubilia Curae; Pellentesque suscipit.
                  </blockquote>
                  <p>
                    Tiled say decay spoil now walls meant house. My mr interest
                    thoughts screened of outweigh removing. Evening society
                    musical besides inhabit ye my. Lose hill well up will he
                    over on. Increasing sufficient everything men him admiration
                    unpleasing sex.
                  </p>
                  <ul className="list-style">
                    <li>Greatest properly off ham exercise all.</li>
                    <li>Unsatiable invitation its possession nor off.</li>
                    <li>
                      All difficulty estimating unreserved increasing the
                      solicitude.
                    </li>
                  </ul>
                  <p>
                    Unpleasant astonished an diminution up partiality. Noisy an
                    their of meant. Death means up civil do an offer wound of.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* title */}
          <div className="title">Comments</div>
          {/* comments */}
          <div className="row border-line-v">
            <div className="col col-m-12 col-t-12 col-d-12">
              <div className="post-box">
                {/* comments items */}
                <div className="col-md-12">
                  <ul className="post-comments">
                    {/* comment item */}
                    <li>
                      <img src="images/man1.jpg" alt="" />
                      <div className="comment-info">
                        <div className="name">
                          <h6>
                            John Doe <span>1 hour ago</span>
                          </h6>
                          <a href="#">Reply</a>
                        </div>
                        <p>
                          Kept in sent gave feel will oh it we. Has pleasure
                          procured men laughing shutters nay.
                        </p>
                      </div>
                    </li>
                    {/* comment item */}
                    <li>
                      <img src="images/man1.jpg" alt="" />
                      <div className="comment-info">
                        <div className="name">
                          <h6>
                            John Doe <span>3 hour ago</span>
                          </h6>
                          <a href="#">Reply</a>
                        </div>
                        <p>
                          Kept in sent gave feel will oh it we. Has pleasure
                          procured men laughing shutters nay.
                        </p>
                      </div>
                    </li>
                    {/* comment item */}
                    <li>
                      <img src="images/man1.jpg" alt="" />
                      <div className="comment-info">
                        <div className="name">
                          <h6>
                            John Doe <span>6 hour ago</span>
                          </h6>
                          <a href="#">Reply</a>
                        </div>
                        <p>
                          Kept in sent gave feel will oh it we. Has pleasure
                          procured men laughing shutters nay.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* title */}
          <div className="title">Leave a Comment</div>
          {/* comments */}
          <div className="row border-line-v">
            <div className="col col-m-12 col-t-12 col-d-12">
              <div className="post-box">
                {/* comment form */}
                <form id="cform" method="post">
                  <div className="row">
                    <div className="col col-d-12 col-t-12 col-m-12">
                      <div className="group-val">
                        <input
                          type="text"
                          name="name"
                          placeholder="Full Name"
                        />
                      </div>
                    </div>
                    <div className="col col-d-12 col-t-12 col-m-12">
                      <div className="group-val">
                        <textarea
                          name="message"
                          placeholder="Your Message"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="align-left">
                    <a href="#" className="button">
                      <span className="text">Add Comment</span>
                      <span className="arrow" />
                    </a>
                  </div>
                </form>
                <div className="alert-success">
                  <p>Thanks, your message is sent successfully.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
