$(document).ready(function() {
    $('#fullpage').fullpage();
});

/*
$(document).ready(function() {
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
});*/


/* Nav Bar Active */
/*
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
);*/
/* Nav Bar Active */
var currentHash = window.location.hash.substring(1);
var lastHash = "none";

$(document).ready(function(){
  $(window).on("hashchange", function() {
    lastHash = currentHash;
    currentHash = window.location.hash.substring(1);
    console.log("LastHash: " + lastHash);
  });
  $(window).on("hashchange", function(){
    var hash = window.location.hash.substring(1);
    var current = $("#navigation");
    var links = $("#links");
    var logo = $(".logo_container");
    if (hash === "home") {
      if (lastHash !== "home") {
        console.log("Nav Bar Active")
        current.removeClass("nav-bar");
        current.addClass("nav-bar-active");
        links.removeClass("links");
        links.addClass("links-active");
        logo.removeClass("logo-hidden");
      }
    }
    else if (hash !== "home") {
      if (lastHash === "home") {
        console.log("Nav Bar Inactive")
        current.removeClass("nav-bar-active");
        current.addClass("nav-bar");
        links.removeClass("links-active");
        links.addClass("links");
        logo.addClass("logo-hidden");
      }
      }
    });
  });



/* Change highlight class */
$(document).ready(
  $(window).on("hashchange", function(){
  var hash = window.location.hash.substring(1);
  var secretariat = $("#secretariat-title");
  $(".home-link").removeClass("underline");
  $(".about-link").removeClass("underline");
  $(".committee-link").removeClass("underline");
  $(".info-link").removeClass("underline");
  $(".attraction-link").removeClass("underline");

  /*secretariat.addClass("secretariat-title");
  secretariat.removeClass("secretariat-title-active");*/
  switch (hash) {
    case "home":

      secretariat.addClass("secretariat-title");
      secretariat.removeClass("secretariat-title-active");
      $(".home-link").addClass("underline");
      break;
    case "about":
      secretariat.addClass("secretariat-title");
      secretariat.removeClass("secretariat-title-active");
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
    case "about/1":
      console.log("Secretariat Triggered")
      secretariat.addClass("secretariat-title-active");
      secretariat.removeClass("secretariat-title");
    };
})
);

/* Secretariat Resize */
/*
$(window).on('resize', function() {
	if ($(window).width()  < 600) {
		$('.secretariat-container').css("width", "99.5%");
	} else if ($(window).width()  < 1200) {
		$('.secretariat-container').css("width", "49.5%");
	} else if ($(window).width() < 1800) {
		$('.secretariat-container').css("width", "32.7%");
	} else {
		$('.secretariat-container').css("width", "24.8%");
	}
});

$(document).ready(function() {
	if ($(window).width()  < 600) {
		$('.secretariat-container').css("width", "99.5%");
	} else if ($(window).width()  < 1200) {
		$('.secretariat-container').css("width", "49.5%");
	} else if ($(window).width() < 1800) {
		$('.secretariat-container').css("width", "32.7%");
	} else {
		$('.secretariat-container').css("width", "24.8%");
	}
});
*/

/* Secretariat Contact */

/*
$(".secretariat-container").onclick(
    var contact = this.closest(".secretariat-contact");
    var contact_active = this.closest(".secretariat-contact-active");
    contact.removeClass("secretariat-contact");
    contact.addClass("secretariat-contact-active");
    contact_active.removeClass("secretariat-contact-active");
    contact_active.addClass("secretariat-contact");

)*/
