import React, { Component } from 'react';
import Head from 'next/head';
// import Router from 'next/router';
// import NProgress from 'nprogress';

import Footer from '../Footer/Footer';
import HeaderBar from '../Header/HeaderBar';
// import MobileMenu from '../Header/MobileMenu';

// For Smooth Scroll
// import AnchorLink from 'react-anchor-link-smooth-scroll';

// Adding Load Bar + Spinner when Routing (removing MAY increase speed of loading)
// Router.onRouteChangeStart = (url) => {
// console.log(url); // checking path routed to
// Start NProgress loaders on route change
//   NProgress.start();
// };

// check when route change is complete, then end NProgress
// Router.onRouteChangeComplete = () => NProgress.done();
// also check for errors and stop the progress bar if there is one
// Router.onRouteChangeError = () => NProgress.done();

class Layout extends Component {
  state = {
    // isShow: false,
    // offsetTop: 350,
    // ready: true
  };

  // componentDidMount() {
  //   window.addEventListener('scroll', this.scrollFunction);
  // }

  // componentWillUnmount() {
  //   // prevent event listener from trying to listen to this event and hence
  //   // changing state or setting state when this component mounts causes memory leaks
  //   window.removeEventListener('scroll', this.scrollFunction);
  // }

  // scrollFunction = () => {
  //   if (
  //     (document.body.scrollTop > this.state.offsetTop &&
  //       this.state.ready === true) ||
  //     (document.documentElement.scrollTop > this.state.offsetTop &&
  //       this.state.ready === true)
  //   ) {
  //     this.setState({
  //       isShow: true,
  //       ready: false
  //     });
  //   }
  // };

  // handleHideBackToTop = () => {
  //   setTimeout(() => {
  //     this.setState({ isShow: false, ready: true });
  //   }, 800);
  // };

  render() {
    // const classShow = this.state.isShow ? 'show' : '';
    // console.log(this.props.title);

    // google translate temp
    // new google.translate.TranslateElement(
    //   {
    //     pageLanguage: 'zh-TW',
    //     includedLanguages: 'en,ja,zh-TW',
    //     layout: google.translate.TranslateElement.InlineLayout.SIMPLE
    //   },
    //   'google_translate_element'
    // );

    return (
      <React.Fragment>
        <Head>
          {/* Dynamic version placed in ContentLayout for now */}
          <title>石門水庫</title>
          <link
            href="/static/img/favicon.png"
            rel="shortcut icon"
            type="image/x-icon"
          />
        </Head>

        <div id="page-wrap">
          <noscript>
            您的瀏覽器已關閉Javascript語法，開啟後即可正常瀏覽！ JavaScript has
            been deactivated on your browser, once turned on, you can browse
            normally!
          </noscript>
          <a
            href="#C"
            id="gotocenter"
            title="跳到主要內容"
            tabIndex="1"
            className="sr-only sr-only-focusable"
          >
            跳到主要內容
          </a>
          <HeaderBar />
          {/* Header Component */}
          {this.props.children}

          {/* Footer Component */}
          <Footer />

          {/* Back to Top Anchor */}
          {/* <div className={`back-to-top ${classShow}`}> */}
          {/* hide back to top button on click*/}
          {/* <AnchorLink
              id="return-top"
              href="#header-bar"
              title="回到最上方"
              onClick={this.handleHideBackToTop}
            >
              <img src="/static/img/image/Topping.svg" alt="" />
            </AnchorLink> */}
          {/* </div> */}
        </div>
      </React.Fragment>
    );
  }
}

export default Layout;
