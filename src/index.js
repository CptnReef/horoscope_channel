import React from 'react'
import ReactDom from 'react-dom'

function BookList() {
  return (
      <Book/>
    </section>
    );
}

      <section className="backgroundclr">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-xs-12 tpbanner_align">
              <a href="#" className="header_border1 hidden-xs font12">Advertise With Us</a>
              <div className="header_border hidden-xs font12">Language:
                <ul>
                  <li className="dropdown lang_dropdown">
                    <a href="#" data-toggle="dropdown" className="dropdown-toggle">EN <span className="caret" /></a>
                    <ul className="dropdown-menu">
                      <li><a href="#">Hindi</a></li>
                      <li><a href="#">English</a></li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="clearfix visible-xs-block" />
              <span className="header_border header_text hidden-xs font12">Follow Us</span>
              <span className="head_icons"><a href="#"><i className="fa fa-facebook-square header_icons fa-lg" /></a>
                <a href="#"><i className="fa fa-twitter-square header_icons fa-lg" /></a>
                <a href="#"><i className="fa fa-google-plus-square header_icons fa-lg" aria-hidden="true" /></a>
              </span>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <div className="row text-right">
          <div className="col-md-5 col-sm-2" />
          <div className="col-md-7 col-sm-10 col-xs-12">
            <div className="clearfix visible-sm-block" />
            <div className="row">
              <div className="col-sm-2 col-xs-2 head_signs">
                <a href="vasthu.html">
                  <div className="bg-info header_bg center-block">
                    <img src="./files/images/home1.png" alt="Image missing" />
                  </div>
                  <div className="text-center info1 font13 hidden-xs">Vasthu Shasthra</div>
                </a>
              </div>
              <div className="col-sm-2 col-xs-2 text-center head_signs">
                <a href="#">
                  <div className="bg-info header_bg center-block">
                    <img src="./files/images/calendar.png" alt="Image missing" />
                  </div>
                  <div className="text-center info1 font13 hidden-xs">Appointment</div>
                </a>
              </div>
              <div className="col-sm-2 col-xs-2 text-center head_signs">
                <a href="#">
                  <div className="bg-info header_bg center-block">
                    <img src="./files/images/heart.png" alt="Image missing" />
                  </div>
                  <div className="text-center info1 font13 hidden-xs">Love Tarot</div>
                </a>
              </div>
              <div className="col-sm-2 col-xs-2 text-center head_signs">
                <a href="#">
                  <div className="bg-info header_bg center-block">
                    <img src="./files/images/man-with-tie.png" alt="Image missing" />
                  </div>
                  <div className="text-center info1 font13 hidden-xs">Career Match</div>
                </a>
              </div>
              <div className="col-sm-2 col-xs-2 text-center head_signs">
                <a href="#">
                  <div className="bg-info header_bg center-block">
                    <img src="./files/images/yin-and-yang.png" alt="Image missing" />
                  </div>
                  <div className="text-center info1 font13 hidden-xs">Ying Yang</div>
                </a>
              </div>
              <div className="col-sm-2 col-xs-2 text-center head_signs">
                <a href="#">
                  <div className="bg-info header_bg center-block">
                    <img src="./files/images/calendar.png" alt="Image missing" />
                  </div>
                  <div className="text-center info1 font13 hidden-xs">Daily Tarot</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <header>
        <nav className="navbar">
          <div className="container">
            <div className="row">
              <div className="navbar-header col-md-4 col-sm-5 col-xs-12 nav_head">
                <button type="button" className="navbar-toggle m-t-20 font18" data-toggle="collapse" data-target="#myNavbar">
                  <span>
                    <i className="fa fa-bars" aria-hidden="true" />
                  </span>
                </button>
                <a href="index.html">
                  <img src="./files/images/leo-sign1.png" alt="logo missing" className="brand_name" /> <span className="text-info font42">Astrology</span>
                </a>
                <p className="brand_name text-primary font12 head_info">KNOW YOUR SIGN</p>
              </div>
              <div className="navbar-collapse collapse col-md-8 col-sm-7 col-xs-12 nav navbar-right nav_menubar" id="myNavbar">
                <ul className="nav navbar-nav header_nav">
                  <li className="header_li active">
                    <a href="index.html" className="text-info">
                      <i className="fa fa-home" aria-hidden="true" />
                    </a>
                  </li>
                  <li className="header_li">
                    <a href="signs.html" className="text-info">Astrology Signs</a>
                  </li>
                  <li className="header_li">
                    <a href="gemstones.html" className="text-info">Gemstones</a>
                  </li>
                  <li className="header_li">
                    <a href="love_compatibility.html" className="text-info"><i className="fa fa-heart" />  Compatibility</a>
                  </li>
                  <li className="header_li">
                    <a href="games.html" className="text-info">Games</a>
                  </li>
                  <li className="header_li">
                    <a href="blog.html" className="text-info">Blog</a>
                  </li>
                  <li className="dropdown dropdown_modified">
                    <a data-toggle="dropdown" href="#" className="text-info dropdown-toggle">Pages <span className="caret" /></a>
                    <ul className="dropdown-menu dropdown_mod" data-dropdown-in="fadeInUp" data-dropdown-out="fadeOut">
                      <li><a href="index2.html">Home Page2</a></li>
                      <li><a href="blog_single.html">Blog Single Post</a></li>
                      <li><a href="blog_category.html">Blog Category</a></li>
                      <li><a href="signs_single_post.html">Signs Single Page</a></li>
                      <li><a href="gemstones_single.html">Gemstones Single Page</a></li>
                      <li><a href="love_compatibility_result.html">Love Compatibility Result</a></li>
                      <li><a href="elements.html">Elements</a></li>
                    </ul>
                  </li>
                  <li className="header_li">
                    <a href="contact_us.html" className="text-info">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <section className="home_revolution_slider">
        <div className="tp-banner-container rev_slider_wrapper fullwidthbanner-container" data-alias="news-hero72">
          <div className="tp-banner-slider">
            <ul>
              <li data-index="rs-1" data-transition="random-premium" data-slotamount="default" data-easein="Power4.easeInOut" data-easeout="Power4.easeInOut" data-masterspeed={1000} data-rotate={0}>
                <img src="./files/images/astro_slider_bg1.jpg" alt="image-missing" data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax={10} data-no-retina data-kenburns="on" data-duration={12000} data-ease="Linear.easeNone" data-scalestart={100} data-scaleend={112} data-rotatestart={0} data-rotateend={0} data-offsetstart="0 0" data-offsetend="0 0" />
                {/* LAYER NR. 3 */}
                <div className="tp-caption home_subtitle sft tp-resizeme rs-parallaxlevel-7 hidden-xs" data-x="center" data-hoffset={0} data-y={-20} data-voffset={-140} data-speed={1000} data-start={3500} data-easing="Power4.easeInOut" data-endeasing="power1.easeIn" data-splitin="words" data-splitout="none" data-elementdelay="0.1" data-endelementdelay="0.1" data-endspeed={300} style={{zIndex: 3, whiteSpace: 'nowrap', color: '#ffffff', fontWeight: 700, fontSize: 24, fontFamily: '"hind", sans-serif', lineHeight: '30pt'}}>Welcome to
                </div>
                {/* LAYER NR. 2 */}
                <div className="tp-caption customin customout tp-resizeme" data-x="center" data-hoffset={0} data-y={20} data-voffset={-100} data-customin="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0;scaleY:0;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;" data-customout="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0.75;scaleY:0.75;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;" data-speed={1000} data-start={4500} data-easing="Back.easeOut" data-endspeed={300} style={{zIndex: 4, color: '#fff', fontSize: 40, fontWeight: 700, fontFamily: '"montserrat", sans-serif'}}>The Best Astrology Template
                </div>
                <div className="tp-caption zoomIn" data-x="center" data-hoffset={0} data-y={-10} data-speed={2500} data-start={1000} data-easing="Power4.easeOut" data-endspeed={400} data-endeasing="Power1.easeIn" style={{zIndex: 11}}><img src="./files/images/sun.png" alt="image-missing" />
                </div>
                <div className="tp-caption lfb hidden-xs" data-x={680} data-hoffset={0} data-y={317} data-speed={2500} data-start={1500} data-easing="Power4.easeOut" data-endspeed={400} data-endeasing="Power1.easeIn" style={{zIndex: 11}}><img src="./files/images/4.PNG" alt="image-missing" />
                </div>
                <div className="tp-caption lfb hidden-xs" data-x={390} data-hoffset={0} data-y={300} data-speed={2500} data-start={2000} data-easing="Power4.easeOut" data-endspeed={400} data-endeasing="Power1.easeIn" style={{zIndex: 11}}><img src="./files/images/6.PNG" alt="image-missing" />
                </div>
                <div className="tp-caption lft hidden-xs" data-x={760} data-hoffset={0} data-y={315} data-speed={2500} data-start={2500} data-easing="Power4.easeOut" data-endspeed={400} data-endeasing="Power1.easeIn" style={{zIndex: 11}}><img src="./files/images/5.PNG" alt="image-missing" />
                </div>
                <div className="tp-caption lfr hidden-xs" data-x={300} data-hoffset={0} data-y={350} data-speed={2500} data-start={3000} data-easing="Power4.easeOut" data-endspeed={400} data-endeasing="Power1.easeIn" style={{zIndex: 11}}><img src="./files/images/2.PNG" alt="image-missing" />
                </div>
                <div className="tp-caption lft hidden-xs" data-x={900} data-hoffset={0} data-y={300} data-speed={2500} data-start={3000} data-easing="Power4.easeOut" data-endspeed={400} data-endeasing="Power1.easeIn" style={{zIndex: 11}}><img src="./files/images/8.PNG" alt="image-missing" />
                </div>
                <div className="tp-caption lfr hidden-xs" data-x={50} data-hoffset={0} data-y={290} data-speed={2500} data-start={1500} data-easing="Power4.easeOut" data-endspeed={400} data-endeasing="Power1.easeIn" style={{zIndex: 11}}><img src="./files/images/3.PNG" alt="image-missing" />
                </div>
                <div className="tp-caption lfr hidden-xs" data-x={240} data-hoffset={0} data-y={440} data-speed={2500} data-start={2000} data-easing="Power4.easeOut" data-endspeed={400} data-endeasing="Power1.easeIn" style={{zIndex: 11}}><img src="./files/images/7.PNG" alt="image-missing" />
                </div>
                <div className="tp-caption lfb hidden-md hidden-xs hidden-sm" data-x={800} data-hoffset={0} data-y={195} data-speed={2500} data-start={2500} data-easing="Power4.easeOut" data-endspeed={400} data-endeasing="Power1.easeIn" style={{zIndex: 11}}><img src="./files/images/6.PNG" alt="image-missing" />
                </div>
              </li>
              <li data-index="rs-2" data-transition="random-premium" data-slotamount="default" data-easein="Power4.easeInOut" data-easeout="Power4.easeInOut" data-masterspeed={1000} data-rotate={0}>
                <img src="./files/images/astro_slider2.jpg" alt="image-missing" data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax={10} data-no-retina data-kenburns="on" data-duration={12000} data-ease="Linear.easeNone" data-scalestart={100} data-scaleend={112} data-rotatestart={0} data-rotateend={0} data-offsetstart="0 0" data-offsetend="0 0" />
                {/* LAYER NR. 1 */}
                <div className="tp-caption zoomIn" data-x="center" data-y={0} data-speed={2500} data-start={1000} data-easing="Power4.easeOut" data-endspeed={400} data-endeasing="Power1.easeIn" style={{zIndex: 11}}><img src="./files/images/leo-sign1.png" alt="image-missing" />
                </div>
                <div className="tp-caption home_title sfl tp-resizeme" data-x="center" data-y={50} data-splitin="chars" data-speed={300} data-start={2000} data-easing="Power3.easeInOut" data-elementdelay="0.1" data-endelementdelay="0.1" data-endspeed={300} style={{zIndex: 3, color: '#fff', fontSize: 38, letterSpacing: 2, fontFamily: '"Montserrat",sans-serif', fontWeight: 700}}>Know Your Astrology
                </div>
                <div className="tp-caption skewfromleftshort hidden-xs" data-x="center" data-hoffset={0} data-y={125} data-speed={800} data-start={5000} data-easing="Power4.easeOut" data-endspeed={300} data-endeasing="Power1.easeIn" data-captionhidden="off" style={{zIndex: 6, color: '#fff', fontSize: 24}}>"The unreal has no existence; the real never ceases to be.
                </div>
                <div className="tp-caption skewfromrightshort hidden-xs" data-x="center" data-hoffset={0} data-y={160} data-speed={800} data-start={5000} data-splitin="chars" data-easing="Power4.easeOut" data-endspeed={300} data-endeasing="Power1.easeIn" data-captionhidden="off" style={{zIndex: 6, color: '#fff', fontSize: 24}}>Knowers of truth have realized this."
                </div>
                {/* LAYER NR. 2 */}
                <div className="tp-caption lfb" data-x={-105} data-hoffset={0} data-y={345} data-speed={2500} data-start={3400} data-easing="Power4.easeOut" data-endspeed={400} data-endeasing="Power1.easeIn" style={{zIndex: 11}}><img src="./files/images/background.PNG" alt="image-missing" width={1342} />
                </div>
                {/* LAYER NR. 3 */}
                <div className="tp-caption grey_heavy_72 sfr tp-resizeme rs-parallaxlevel-0 hidden-xs" data-x="center" data-y={240} data-speed={2000} data-start={5500} data-easing="Power3.easeInOut" data-splitout="none" data-elementdelay="0.1" data-endelementdelay="0.1" style={{zIndex: 5, color: '#fff', fontFamily: '"Montserrat",sans-serif'}}>
                  <a href="https://themeforest.net/item/astrology-bootstrap-html-template/18153621?s_rank=4" className="btn btn-danger btn-md text-center button_hover" style={{zIndex: 5, fontSize: 18, color: '#111', padding: '5px 15px', borderColor: '#fff', borderWidth: 3, backgroundColor: '#fff'}}>Purchase Now</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/*=============== Revolution slider Start ===============*/}
      <section className="home_bg">
        <div className="container">
          <div className="row home_alignment">
            <div className="col-md-12 text-center">
              <div className="bg-white button_margin pic_margin">
                <h1 className="text-primary font35 home_padding">Free
                  Daily Horoscopes</h1>
                <div className="home_head center-block" />
                <p className="elements_desc">What kind of day will it be for you today? Use your free horoscope to plan your day, every day -
                  instantly!</p>
                <div className="row home_align">
                  <div className="col-md-2 col-sm-4 col-xs-6 wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.1s">
                    <div className="sign_circle bg-aries">
                      <img src="./files/images/aries-sign.png" alt="image-missing" className="rotate" />
                    </div>
                    <a href="signs_single_post.html" className="main">
                      <div className="sign_card text-center signs_bg">
                        <span className="text-aries signs_clr font16">Aries</span><br />
                        <span className="signtext_clr font12">Mar 21 - Apr 19</span>
                      </div>
                    </a>
                  </div>
                  <div className="col-md-2 col-sm-4 col-xs-6 wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.1s">
                    <div className="sign_circle bg-taurus">
                      <img src="./files/images/taurus.png" alt="image-missing" className="rotate" />
                    </div>
                    <a href="signs_single_post.html" className="main">
                      <div className="sign_card text-center signs_bg">
                        <span className="text-taurus signs_clr font16">Taurus</span><br />
                        <span className="signtext_clr font12">Apr 20 - May 20</span>
                      </div>
                    </a>
                  </div>
                  <div className="clearfix visible-xs-block" />
                  <div className="col-md-2 col-sm-4 col-xs-6 wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.1s">
                    <div className="sign_circle bg-gemini">
                      <img src="./files/images/gemini.png" alt="image-missing" className="rotate" />
                    </div>
                    <a href="signs_single_post.html" className="main">
                      <div className="sign_card text-center signs_bg">
                        <span className="text-gemini signs_clr font16">Gemini</span><br />
                        <span className="signtext_clr font12">May 21 - Jun 20</span>
                      </div>
                    </a>
                  </div>
                  <div className="clearfix visible-sm-block" />
                  <div className="col-md-2 col-sm-4 col-xs-6 wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.1s">
                    <div className="sign_circle bg-cancer">
                      <img src="./files/images/cancer.png" alt="image-missing" className="rotate" />
                    </div>
                    <a href="signs_single_post.html" className="main">
                      <div className="sign_card text-center signs_bg">
                        <span className="text-cancer signs_clr font16">Cancer</span><br />
                        <span className="signtext_clr font12">Jun 21 - Jul 22</span>
                      </div>
                    </a>
                  </div>
                  <div className="clearfix visible-xs-block" />
                  <div className="col-md-2 col-sm-4 col-xs-6 wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.1s">
                    <div className="sign_circle bg-leo">
                      <img src="./files/images/leo.png" alt="image-missing" className="rotate" />
                    </div>
                    <a href="signs_single_post.html" className="main">
                      <div className="sign_card text-center signs_bg">
                        <span className="text-leo signs_clr font16">Leo</span><br />
                        <span className="signtext_clr font12">Jul 23 - Aug 22</span>
                      </div>
                    </a>
                  </div>
                  <div className="col-md-2 col-sm-4 col-xs-6 wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.1s">
                    <div className="sign_circle bg-virgo">
                      <img src="./files/images/virgo.png" alt="image-missing" className="rotate" />
                    </div>
                    <a href="signs_single_post.html" className="main">
                      <div className="sign_card text-center signs_bg">
                        <span className="text-virgo signs_clr font16">Virgo</span><br />
                        <span className="signtext_clr font12">Aug 23 - Sep 22</span>
                      </div>
                    </a>
                  </div>
                  <div className="clearfix visible-xs-block" />
                  <div className="col-md-2 col-sm-4 col-xs-6 wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.2s">
                    <div className="sign_circle bg-libra">
                      <img src="./files/images/libra.png" alt="image-missing" className="rotate" />
                    </div>
                    <a href="signs_single_post.html" className="main">
                      <div className="sign_card text-center signs_bg">
                        <span className="text-libra signs_clr font16">Libra</span><br />
                        <span className="signtext_clr font12">Sep 23 - Oct 22</span>
                      </div>
                    </a>
                  </div>
                  <div className="col-md-2 col-sm-4 col-xs-6 wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.2s">
                    <div className="sign_circle bg-scorpio">
                      <img src="./files/images/scorpio.png" alt="image-missing" className="rotate" />
                    </div>
                    <a href="signs_single_post.html" className="main">
                      <div className="sign_card text-center signs_bg">
                        <span className="text-scorpio signs_clr font16">Scorpio</span><br />
                        <span className="signtext_clr font12">Oct 23 - Nov 21</span>
                      </div>
                    </a>
                  </div>
                  <div className="clearfix visible-xs-block" />
                  <div className="col-md-2 col-sm-4 col-xs-6 wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.2s">
                    <div className="sign_circle bg-sagittarius">
                      <img src="./files/images/sagittarius.png" alt="image-missing" className="rotate" />
                    </div>
                    <a href="signs_single_post.html" className="main">
                      <div className="sign_card text-center signs_bg">
                        <span className="text-sagittarius signs_clr font16">Sagittarius</span><br />
                        <span className="signtext_clr font12">Nov 22 - Dec 21</span>
                      </div>
                    </a>
                  </div>
                  <div className="clearfix visible-sm-block" />
                  <div className="col-md-2 col-sm-4 col-xs-6 wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.2s">
                    <div className="sign_circle bg-capricorn">
                      <img src="./files/images/capricorn.png" alt="image-missing" className="rotate" />
                    </div>
                    <a href="signs_single_post.html" className="main">
                      <div className="sign_card text-center signs_bg">
                        <span className="text-capricorn signs_clr font16">Capricorn</span><br />
                        <span className="signtext_clr font12">Dec 22 - Jan 19</span>
                      </div>
                    </a>
                  </div>
                  <div className="clearfix visible-xs-block" />
                  <div className="col-md-2 col-sm-4 col-xs-6 wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.2s">
                    <div className="sign_circle bg-aquarius">
                      <img src="./files/images/aquarius.png" alt="image-missing" className="rotate" />
                    </div>
                    <a href="signs_single_post.html" className="main">
                      <div className="sign_card text-center signs_bg">
                        <span className="text-aquarius signs_clr font16">Aquarius</span><br />
                        <span className="signtext_clr font12">Jan 20 - Feb 18</span>
                      </div>
                    </a>
                  </div>
                  <div className="col-md-2 col-sm-4 col-xs-6 wow fadeInDown pic_margin" data-wow-duration="1s" data-wow-delay="0.2s">
                    <div className="sign_circle bg-pisces">
                      <img src="./files/images/pisces.png" alt="image-missing" className="rotate" />
                    </div>
                    <a href="signs_single_post.html" className="main">
                      <div className="sign_card text-center signs_bg">
                        <span className="text-pisces signs_clr font16">Pisces</span><br />
                        <span className="signtext_clr font12">Feb 19 - Mar 20</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-info">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 home_margin">
              <h2 className="text-white font35">We Reveal Your
                Life Partner</h2>
              <div className="row">
                <div className="col-md-4 col-sm-3 elements_desc">
                  <label className="text-white font18" htmlFor="name">I am a:</label>
                  <input type="text" id="name" className="bg-white form-control" placeholder="Woman looking for a man" />
                </div>
                <div className="col-md-2 col-sm-2 elements_desc">
                  <label className="text-white font18" htmlFor="zip">Near ZIP:</label>
                  <input type="text" id="zip" className="bg-white form-control" />
                </div>
                <div className="col-md-2 home_dob col-sm-3 elements_desc">
                  <label className="text-white font18">My Birthday:</label>
                  <select className="home_select form-control bg-white">
                    <option value>Choose</option>
                    <option>January</option>
                    <option>February</option>
                    <option>March</option>
                    <option>April</option>
                    <option>May</option>
                    <option>June</option>
                    <option>July</option>
                    <option>August</option>
                    <option>September</option>
                    <option>October</option>
                    <option>November</option>
                    <option>December</option>
                  </select>
                </div>
                <div className="col-md-2 col-sm-2 home_dob elements_desc home_date">
      
                  <select className="home_select1 form-control bg-white">
                    <option value>Choose</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                    <option>13</option>
                    <option>14</option>
                    <option>15</option>
                    <option>16</option>
                    <option>17</option>
                    <option>18</option>
                    <option>19</option>
                    <option>20</option>
                    <option>21</option>
                    <option>22</option>
                    <option>23</option>
                    <option>24</option>
                    <option>25</option>
                    <option>26</option>
                    <option>27</option>
                    <option>28</option>
                    <option>29</option>
                    <option>30</option>
                    <option>31</option>
                  </select>
                </div>
                <div className="col-md-2 col-sm-2 home_dob elements_desc home_date">

                  <select className="home_select2 form-control bg-white">
                    <option value>Choose</option>
                    <option>1990</option>
                    <option>1991</option>
                    <option>1992</option>
                    <option>1993</option>
                    <option>1994</option>
                    <option>1995</option>
                    <option>1996</option>
                    <option>1997</option>
                    <option>1998</option>
                    <option>1999</option>
                    <option>2000</option>
                    <option>2001</option>
                  </select>
                </div>
              </div>
              <div className="row">
                <div className="col-md-3 col-sm-4 col-xs-12">
                  <div className="btn_adjust">
                    <a href="index.html" className="btn btn-info btn-md btn_align">Show My Matches
                      <i className="fa fa-search btn_icon" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-4 m-t-40">
              <h1 className="wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.1s">Top Stories</h1>
              <hr className="hr_margin" />
              <div className="row common_margin">
                <div className="col-xs-12 font16">
                  <p className="wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.1s">
                    <i className="fa fa-circle text-libra font14" aria-hidden="true" /> &nbsp;
                    <span className="text-libra">Libra</span>:
                    <span className="text-info">Signs a Libra hates you</span>
                  </p>
                  <hr className="hr_margin" />
                  <p className="wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.2s">
                    <i className="fa fa-circle text-taurus font14" aria-hidden="true" /> &nbsp;
                    <span className="text-taurus">Taurus</span>:
                    <span className="text-info">Ease Taurus's Financial Stress</span>
                  </p>
                  <hr className="hr_margin" />
                  <p className="wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.3s">
                    <i className="fa fa-circle text-gemini font14" aria-hidden="true" /> &nbsp;
                    <span className="text-gemini">Gemini</span>:
                    <span className="text-info">Summer Love for Gemini</span>
                  </p>
                  <hr className="hr_margin" />
                  <p className="wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.4s">
                    <i className="fa fa-circle text-aries font14" aria-hidden="true" /> &nbsp;
                    <span className="text-aries">Aries</span>:
                    <span className="text-info">Aries Should Explore</span>
                  </p>
                  <hr className="hr_margin" />
                  <p className="wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.5s">
                    <i className="fa fa-circle text-cancer font14" aria-hidden="true" /> &nbsp;
                    <span className="text-cancer">Cancer</span>:
                    <span className="text-info">The Smartest Investments</span>
                  </p>
                  <hr className="hr_margin" />
                  <p className="wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.6s">
                    <i className="fa fa-circle text-virgo font14" aria-hidden="true" /> &nbsp;
                    <span className="text-virgo">Virgo</span>:
                    <span className="text-info">Virgo's Own Mistakes</span>
                  </p>
                  <hr className="hr_margin" />
                  <p className="wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.7s">
                    <i className="fa fa-circle text-sagittarius font14" aria-hidden="true" /> &nbsp;
                    <span className="text-sagittarius">Sagittarius</span>:
                    <span className="text-info">Always Aiming High</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 m-t-40">
              <h1 className="wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.1s">Card of the Day</h1>
              <hr />
              <div className="row common_margin">
                <div className="col-md-4 col-sm-3 col-xs-4 wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.2s">
                  <img src="./files/images/card.jpg" className="img-responsive p-t-5" alt="card missing" />
                </div>
                <div className="col-md-8 col-sm-9 col-xs-8 games_content_align">
                  <h4 className="wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.3s">THE CHARIOT</h4>
                  <p className="text-info wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.3s"> As a priest,
                    the Pope or the best Hierophant, represents all those
                    traditional values and morals of development. He is the wisely teacher / counselor
                    guiding the ones who won’t give up or the ones who are not the...
                  </p>
                  <a href="signs_single_post.html" className="text-primary home_view">Read More</a>
                </div>
              </div>
            </div>
            <div className="col-md-4 m-t-40">
              <div>
                <h1 className="wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.1s">Popular Quizes</h1>
              </div>
              <div className="arrows_align">
                <a href="#"><i className="fa fa-long-arrow-left previous-arrow text-info" aria-hidden="true" /></a>
                &nbsp;&nbsp;<a href="#"><i className="fa fa-long-arrow-right next-arrow text-info" aria-hidden="true" /></a>
              </div>
              <hr className="hr_margin" />
              <div className="row common_margin">
                <div className="col-xs-12 first-set">
                  <div className="swiper-container love-swiper">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <p className="font16 wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.2s">
                          <a href="#" className="text-info color-info">What Sign Should You Date?</a><br />
                          <small className="text-cancer font13">10 Questions</small>
                        </p>
                        <hr className="hr_margin" />
                        <p className="font16 wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.3s">
                          <a href="#" className="text-info color-info">What intuitive power do You Have?</a><br />
                          <small className="text-cancer font13">12 Questions</small>
                        </p>
                        <hr className="hr_margin" />
                        <p className="font16 wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.4s">
                          <a href="#" className="text-info color-info">What element are you?</a><br />
                          <small className="text-cancer font13">8 Questions</small>
                        </p>
                        <hr className="hr_margin" />
                        <p className="font16 wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.5s">
                          <a href="#" className="text-info color-info">What's your real top priority in life?</a><br />
                          <small className="text-cancer font13">11 Questions</small>
                        </p>
                        <hr className="hr_margin" />
                        <p className="font16 wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.6s">
                          <a href="#" className="text-info color-info">What's In Your Immediate Future?</a><br />
                          <small className="text-cancer font13">15 Questions</small>
                        </p>
                      </div>
                      <div className="swiper-slide">
                        <p className="font16">
                          <a href="#" className="text-info color-info">What Sign Should You Date?</a><br />
                          <small className="text-cancer font13">12 Questions</small>
                        </p>
                        <hr className="hr_margin" />
                        <p className="font16">
                          <a href="#" className="text-info color-info">What intuitive power do You Have?</a><br />
                          <small className="text-cancer font13">8 Questions</small>
                        </p>
                        <hr className="hr_margin" />
                        <p className="font16">
                          <a href="#" className="text-info color-info">What element are you?</a><br />
                          <small className="text-cancer font13">10 Questions</small>
                        </p>
                        <hr className="hr_margin" />
                        <p className="font16">
                          <a href="#" className="text-info color-info">What's your real top priority in life?</a><br />
                          <small className="text-cancer font13">15 Questions</small>
                        </p>
                        <hr className="hr_margin" />
                        <p className="font16">
                          <a href="#" className="text-info color-info">What's In Your Immediate Future?</a><br />
                          <small className="text-cancer font13">11 Questions</small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

  )
}

ReactDom.render(<Astrology/>,document.getElementById('root'))