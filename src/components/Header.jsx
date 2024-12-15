import { ArrowLeft, ArrowRight, Search, LogoFull } from "../services/svg.service";

import { useEffect } from "react";

export default function Header() {

  useEffect(() => {
    const header = document.querySelector('.main-header');
    const nav = document.querySelector('.main-header-nav');

    const headerObserver = new IntersectionObserver(onHeaderObserved, {
      rootMargin: "-91px 0px 0px",
    });
    
    headerObserver.observe(header);
    
    function onHeaderObserved(entries) {
      entries.forEach((entry) => {
        nav.style.position = entry.isIntersecting ? 'static' : 'fixed';
      });
    }
  }, []); 



  return (

    // <header className="main-header full" ref="header">
    <header className="main-header full">
      <div className="main-header-logo"><LogoFull /></div>
      {/* <nav className="main-header-nav" ref="nav" v-bind:style="{ position: stickyNav ? 'fixed' : 'static' }"> */}
      <nav className="main-header-nav">
        <ul className="main-nav clean-list flex">
          <li><a href="#">About us</a></li>
          <li><a href="#">services</a></li>
          <li><a href="#">Brands</a></li>
          <li><a href="#">References</a></li>
          <li><a href="#" className="active">Contact</a></li>
        </ul>
        <a href="#" className="lang-switch btn-dark">en</a>
        <button className="main-header-search btn-dark"><Search /></button>
      </nav>
      <img
        src="/images/header1920.jpg"
        alt=""
        className="main-header-image full"
      />
      <div className="main-header-case">
        <span className="case-title"> Museum of Modern Art Moma </span>
        <span className="case-city">New York</span>
        <a href="#" className="btn">Case study</a>
      </div>
      <div className="main-header-slide-info slide-info">
        <span className="slide-name vertical-text">Light consulting & sales</span>
        <span className="slide-pager vertical-text">1/5</span>
        <span className="slide-pager-controler">
          <button className="pager prev btn-dark"><ArrowLeft /></button>
          <button className="pager next btn-dark"><ArrowRight /></button>
        </span>
      </div>
    </header>
  )
}


{/* <script>
// ICONS


export default {
  name: "home",

  methods: {
    onHeaderObserved(entries) {
      entries.forEach((entry) => {
        this.stickyNav = entry.isIntersecting ? false : true;
      });
    },
  },

  mounted() {
    this.headerObserver = new IntersectionObserver(this.onHeaderObserved, {
      rootMargin: "-91px 0px 0px",
    });
    this.headerObserver.observe(this.$refs.header);
  },

  data: () => {
    return {
      logo: logos.logoFull,
      search: miscellaneous.search,
      arrowRight: miscellaneous.arrowRight,
      arrowLeft: miscellaneous.arrowLeft,
      headerObserver: null,
      stickyNav: false,
    };
  },
};
</script> */}
