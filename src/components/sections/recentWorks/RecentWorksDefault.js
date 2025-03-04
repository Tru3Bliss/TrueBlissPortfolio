import Isotope from "isotope-layout";
import { Fragment, useEffect, useRef, useState } from "react";
const RecentWorksDefault = () => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  const [filterData, setFilterData] = useState([]);
  // useEffect(() => {
  //   setTimeout(() => {
  //     isotope.current = new Isotope(".grid-items", {
  //       itemSelector: ".grid-item",
  //       //    layoutMode: "fitRows",
  //       percentPosition: true,
  //       masonry: {
  //         columnWidth: ".grid-item",
  //       },
  //       animationOptions: {
  //         duration: 750,
  //         easing: "linear",
  //         queue: false,
  //       },
  //     });
  //   }, 1000);
  //   //     return () => isotope.current.destroy();
  // }, []);

  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  const activeBtn = (value) => (value === filterKey ? "active" : "");

  useEffect(()=>{
    console.log("fliterdata", filterData)
  },[filterData])


  useEffect(()=>{

    if(filterKey){
      const result = projectData.filter((item) => (filterKey === "*"? item:item.type === filterKey))
      console.log(result)
      setFilterData(result);
    }
  },[filterKey])

  return (
    <Fragment>
      <div className="content works">
        {/* title */}
        <div>
          <div className="title">Recent Works</div>
          {/* filters */}
          <div className="filter-menu filter-button-group">
            <div
              className={`f_btn ${activeBtn("*")}`}
              onClick={handleFilterKeyChange("*")}
            >
              <label>
                <input type="radio" name="fl_radio" defaultValue="grid-item" />
                All
              </label>
            </div>
            <div
              className={`f_btn ${activeBtn("market")}`}
              onClick={handleFilterKeyChange("market")}
            >
              <label>
                <input type="radio" name="fl_radio" defaultValue="market" />
                Market
              </label>
            </div>
            <div
              className={`f_btn ${activeBtn("socialfi")}`}
              onClick={handleFilterKeyChange("socialfi")}
            >
              <label>
                <input type="radio" name="fl_radio" defaultValue="socialfi" />
                SocialFi
              </label>
            </div>
            <div
              className={`f_btn ${activeBtn("game")}`}
              onClick={handleFilterKeyChange("game")}
            >
              <label>
                <input type="radio" name="fl_radio" defaultValue="game" />
                Game
              </label>
            </div>
            <div
              className={`f_btn ${activeBtn("nft")}`}
              onClick={handleFilterKeyChange("nft")}
            >
              <label>
                <input type="radio" name="fl_radio" defaultValue="nft" />
                NFT
              </label>
            </div>
            <div
              className={`f_btn ${activeBtn("web2")}`}
              onClick={handleFilterKeyChange("web2")}
            >
              <label>
                <input type="radio" name="fl_radio" defaultValue="web2" />
                Web & App
              </label>
            </div>
          </div>
        </div>
        {/* content */}
        <div
          className="row grid-items border-line-v"
          style={{ maxHeight: "500px" }}
        >
          {filterData.map((data, index) => {
            return(
              <div
              className="col col-d-6 col-t-6 col-m-12 grid-item border-line-h"
              key={index}
            >
              <div
                className="box-item"
                style={{
                  minHeight: "300px",
                  background: "#1c1c1c",
                  borderRadius: "2px",
                  padding: "5px",
                }}
              >
                <div className="" style={{ width: "100%" }}>
                  <img
                    src={data.imgUrl}
                    alt=""
                    style={{
                      width: "100%",
                      height: "150px",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <p style={{ fontSize: "13px" }}>{data.content}</p>
                <div className="">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={data.siteUrl}
                    className="name"
                    style={{ duration: "300", transition: "0.5s" }}
                  >
                    View Site
                  </a>
                </div>
              </div>
            </div>
            )
          }

          )}
        </div>
      </div>
    </Fragment>
  );
};
export default RecentWorksDefault;

const projectData = [
  {
    type: "market",
    imgUrl: "images/works/work18.png",
    content:
      "Prediction Market with NFT Reward",
    siteUrl: "https://www.solbookie.com/",
  },
  {
    type: "socialfi",
    imgUrl: "images/works/work17.png",
    content:
      "Web 3 Blogging platform on Solana like Mirror.xyz.",
    siteUrl: "https://wordeet-front-end.vercel.app/",
  },
  {
    type: "nft",
    imgUrl: "images/works/work16.png",
    content:
      "NFT Mint Project : 15% of the mint cost is shared with NFT holders.",
    siteUrl: "https://sneakylabs.art/",
  },
  {
    type: "nft",
    imgUrl: "images/works/work1.jpg",
    content:
      "NFT Mint Project : 15% of the mint cost is shared with NFT holders.",
    siteUrl: "https://flaregods.xyz/",
  },
  {
    type: "nft",
    imgUrl: "images/works/work12.jpg",
    content: "Cobalt NFT Minting",
    siteUrl: "https://cobalt.shop/",
  },
  {
    type: "game",
    imgUrl: "images/works/work9.jpg",
    content: "DegenTaxi - Car Crash Game (Solana)",
    siteUrl: "https://degentaxi.io/",
  },
  {
    type: "game",
    imgUrl: "images/works/work11.jpg",
    content: "Crypto Legions Game",
    siteUrl: "https://cryptolegions.app/",
  },
  {
    type: "nft",
    imgUrl: "images/works/work7.jpg",
    content: "BeastiyBit NFT",
    siteUrl: "https://beastybits.com/",
  },
  {
    type: "nft",
    imgUrl: "images/works/work8.jpg",
    content: "CuteInsane NFT Minting | Staking",
    siteUrl: "https://cutetoinsane.online/",
  },
  {
    type: "nft",
    imgUrl: "images/works/work5.jpg",
    content: "Solarmy | NFT Game | NFT Staking | Fusion",
    siteUrl: "https://game.solarmy.io/",
  },
  {
    type: "nft",
    imgUrl: "images/works/work3.png",
    content: "NFT Marketplace (Songbird Network)",
    siteUrl: "https://market.doodcats.net/",
  },
  {
    type: "nft",
    imgUrl: "images/works/work4.jpg",
    content: "NFT Staking (Songbird Network)",
    siteUrl: "https://doodcats.net/",
  },
  {
    type: "nft",
    imgUrl: "images/works/work2.jpg",
    content: "NFT Minting | Staking",
    siteUrl: "https://doodlebunnyflr.live/",
  },
  {
    type: "web2",
    imgUrl: "images/works/work13.jpg",
    content: "Di Bruno Bros E-Commerce",
    siteUrl: "https://dibruno.com/",
  },
  {
    type: "web2",
    imgUrl: "images/works/work14.jpg",
    content: "Co-Go-Fly Landing Page",
    siteUrl: "https://www.cogofly.com/",
  },
  {
    type: "web2",
    imgUrl: "images/works/work15.jpg",
    content: "Littlespoon E-Commerce",
    siteUrl: "https://dibruno.com/",
  },
];
