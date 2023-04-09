import React, { useState, useEffect } from "react";
import { AiOutlineUser } from "react-icons/ai";

const HeroCarousal = () => {
  const pairs = [
    {
      one: "https://res.cloudinary.com/practicaldev/image/fetch/s--MZvaMEOV--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/qll2w5atklv13ljmqope.png",
      two: "https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(35).webp",
      three:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0lNjzZ2lBLx_TU0HvpyPWqQDl9yVA-BdrknG2zbcil-cJjsbXloY3CyWJ55PVPST4D50&usqp=CAU",
    },
    {
      one: "https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(35).webp",
      two: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0lNjzZ2lBLx_TU0HvpyPWqQDl9yVA-BdrknG2zbcil-cJjsbXloY3CyWJ55PVPST4D50&usqp=CAU",
      three:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--MZvaMEOV--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/qll2w5atklv13ljmqope.png",
    },
    {
      one: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0lNjzZ2lBLx_TU0HvpyPWqQDl9yVA-BdrknG2zbcil-cJjsbXloY3CyWJ55PVPST4D50&usqp=CAU",
      two: "https://res.cloudinary.com/practicaldev/image/fetch/s--MZvaMEOV--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/qll2w5atklv13ljmqope.png",
      three: "https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(35).webp",
    },
  ];

  let allDesc = [
    {
      p: "President of Rss Party",
      t: "Narendra Modi",
    },
    {
      p: "Vice Leader of Rss Party",
      t: "Amit Shah",
    },
    {
      p: "Hello world",
      t: "Zerror Studios",
    },
  ];
  const [desc, setDesc] = useState(allDesc[0]);
  const [show, setShow] = useState(true);

  const [imgset, setImgset] = useState(pairs[0]);
  const [animate, setAnimate] = useState(false);
  const [slide, setSlide] = useState(false);

  const timeToAnimate = 1400;
  const timeToStay = 2000;
  const timeToShow = 500;
  const timeToHide = 500;

  useEffect(() => {
    let func = () => {
      setTimeout(() => {
        setAnimate(true);
      }, timeToStay);
      setTimeout(() => {
        setShow(false);
      }, timeToStay + timeToHide);

      setTimeout(() => {
        setImgset(pairs[1]);
        setAnimate(false);
      }, timeToAnimate + timeToStay);
      setTimeout(() => {
        setDesc(allDesc[1]);
        setShow(true);
      }, timeToAnimate + timeToStay);
      setTimeout(() => {
        setAnimate(true);
      }, timeToAnimate + 2 * timeToStay);

      setTimeout(() => {
        setShow(false);
      }, timeToAnimate + 2 * timeToStay + timeToHide);
      setTimeout(() => {
        setImgset(pairs[2]);
        setAnimate(false);
      }, 2 * timeToAnimate + 2 * timeToStay);
      setTimeout(() => {
        setDesc(allDesc[2]);
        setShow(true);
      }, 2 * timeToAnimate + 2 * timeToStay);
      setTimeout(() => {
        setAnimate(true);
      }, 2 * timeToAnimate + 3 * timeToStay);
      setTimeout(() => {
        setShow(false);
      }, 2 * timeToAnimate + 3 * timeToStay + timeToHide);
      setTimeout(() => {
        setImgset(pairs[0]);
        setAnimate(false);
      }, 3 * timeToAnimate + 3 * timeToStay);

      setTimeout(() => {
        setDesc(allDesc[0]);
        setShow(true);
      }, 3 * timeToAnimate + 3 * timeToStay);

      setTimeout(() => {
        func();
      }, 3 * timeToAnimate + 3 * timeToStay);
    };
    func();

    let slidefunc = () => {
      setSlide(true);
      setTimeout(() => {
        setSlide(false);
      }, timeToStay);
      setTimeout(() => {
        slidefunc();
      }, timeToAnimate + timeToStay);
    };
    slidefunc();

    let activefunc = () => {
      setActiveSlide(0);
      setTimeout(() => {
        setActiveSlide(1);
      }, timeToStay + timeToAnimate);
      setTimeout(() => {
        setActiveSlide(2);
      }, 2 * timeToStay + 2 * timeToAnimate);
      setTimeout(() => {
        activefunc();
      }, 3 * timeToStay + 3 * timeToAnimate);
    };

    activefunc();
  }, []);

  let nos = [1, 2, 3];
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <>
      <div className="pos">
        <div className="md-navbar">
          <div className="md-nav-rel">
            <div className="md-left">RSS PARTY</div>
            <div className="md-mid">
              <div className="md">Home</div>
              <div className="md">Organization</div>
              <div className="md">Join the movement</div>
              <div className="md">Contact</div>
            </div>
            <div className="md-right">
              <div className="login-icon">
                <AiOutlineUser />
              </div>
              <div className="lc">Aa | अ</div>
            </div>
          </div>
          <div className="md-line"></div>
        </div>
        <div className="slider-count-cont">
          <div className="no-cont">
            {nos.map((no, index) => {
              return (
                <div
                  className={`no ${activeSlide == index ? "active" : null}`}
                  key={index}
                >
                  {"0" + no}
                </div>
              );
            })}
          </div>
          <div className="slider-width-cont">
            <div className={`slider-width ${slide ? "slide" : null}`}></div>
          </div>
        </div>
        <div className="first">
          <div className="hero-name-cont">
            <div className="c1-parent">
              <div className={`c1 ${show ? "c1-show" : null}`}>
                <div className="span-line"></div>
                {desc.p}
              </div>
            </div>
            <div className="c2-parent">
              <div className={`c2 ${show ? "c2-show" : null}`}>{desc.t}</div>
            </div>
          </div>

          <img src={imgset.one} alt="#" />
        </div>
        <div className={`second ${animate ? "second-animate" : null}`}>
          <div className="two-rel">
            <div className="two-img-rel">
              <img src={imgset.two} alt="#" />
            </div>
          </div>
        </div>
        <div className={`third ${animate ? "third-animate" : null}`}>
          <div className="third-rel">
            <img className="third-img" alt="#" src={imgset.three} />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroCarousal;
