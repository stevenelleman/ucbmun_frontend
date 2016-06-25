$(document).ready(function() {
    $('#fullpage').fullpage();
});

/*$(document).ready(function() {
    $('#fullpage').fullpage({
        //Navigation
        menu: '#menu',
        lockAnchors: false,
        anchors:['about', 'committee', 'info', 'attraction'],
        navigation: false,
        navigationPosition: 'right',
        navigationTooltips: [],
        showActiveTooltip: false,
        slidesNavigation: true,
        slidesNavPosition: 'bottom',

        //Scrolling
        css3: true,
        scrollingSpeed: 700,
        autoScrolling: true,
        fitToSection: true,
        fitToSectionDelay: 1000,
        scrollBar: false,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: true,
        continuousVertical: false,
        normalScrollElements: '#element1, .element2',
        scrollOverflow: false,
        scrollOverflowOptions: null,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,

        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,

        //Design
        controlArrows: true,
        verticalCentered: true,
        sectionsColor : ['#ccc', '#fff'],
        paddingTop: '3em',
        paddingBottom: '10px',
        fixedElements: '#header, .footer',
        responsiveWidth: 0,
        responsiveHeight: 0,

        //Custom selectors
        sectionSelector: '.section',
        slideSelector: '.slide',

        //events
        onLeave: function(index, nextIndex, direction){},
        afterLoad: function(anchorLink, index){},
        afterRender: function(){},
        afterResize: function(){},
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
        onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
    });
});
*/
/* Nav Bar Active */
$(document).ready(
  $(window).on("hashchange", function(){
    var hash = window.location.hash.substring(1);
    var current = $("#navigation");
    var links = $("#links");
    var logo = $(".logo_container");
    console.log(current);
    if (hash === "home"){
      console.log("Nav Bar Active")
      current.removeClass("nav-bar");
      current.addClass("nav-bar-active");
      links.removeClass("links");
      links.addClass("links-active");
      logo.removeClass("logo-hidden");

    } else {
      console.log("Nav Bar Inactive")
      current.removeClass("nav-bar-active");
      current.addClass("nav-bar");
      links.removeClass("links-active");
      links.addClass("links");
      logo.addClass("logo-hidden");
    }
  })
);



/* Change highlight class */
$(document).ready(
  $(window).on("hashchange", function(){
  var hash = window.location.hash.substring(1);
  console.log("Hash Event Fired")
  console.log("Current hash: " + hash);
    $(".home-link").removeClass("underline");
    $(".about-link").removeClass("underline");
    $(".committee-link").removeClass("underline");
    $(".info-link").removeClass("underline");
    $(".attraction-link").removeClass("underline");
    switch (hash) {
      case "home":
        $(".home-link").addClass("underline");
        break;
      case "about":
        $(".about-link").addClass("underline");
        break;
      case "committee":
        $(".committee-link").addClass("underline");
        break;
      case "info":
        $(".info-link").addClass("underline");
        break;
      case "attraction":
        $(".attraction-link").addClass("underline");
        break;
    };
  })
);
