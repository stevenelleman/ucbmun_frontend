/*var insta_user_token = "3138978259.1677ed0.e24f8f02074641b7b89f27fc9b75ec04";
var insta_http = "https://api.instagram.com/v1/users/self/media/recent/?access_token=";
var insta_http += insta_token;*/

$(document).ready(function() {
    $('#fullpage').fullpage();
    $(window).trigger('resize');
    $('body').css('display', 'block');
});

/* Nav Bar Active */

function navActive() {
  $("#navigation").removeClass("nav-bar");
  $("#navigation").addClass("nav-bar-active");
  $("#links").removeClass("links");
  $("#links").addClass("links-active");
  $(".logo_container").removeClass("logo-hidden");
}

function navDisable() {
  $("#navigation").removeClass("nav-bar-active");
  $("#navigation").addClass("nav-bar");
  $("#links").removeClass("links-active");
  $("#links").addClass("links");
  $(".logo_container").addClass("logo-hidden");
}

$(document).ready(function(){
  hash = window.location.hash.substring(1)
  if (hash == "") {
    console.log("correct!");
  }
  if (hash != "home" & hash != "") {
    navDisable();
  }
  $(window).on("hashchange", function(){
    hash = window.location.hash.substring(1)
    if (hash == "home") {
      navActive();
    } else {
      navDisable();
    }
  });
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




/* Change highlight class */
$(document).ready(
  $(window).on("hashchange", function(){
  var hash = window.location.hash.substring(1);
  var secretariat = $("#secretariat-title");
  var ob = $("#ob-title");
  var sb = $("#sb-title");
  var cc = $("#cc-title");
  var jcc = $("#jcc-title");
  var welcome = $("#welcome-title");
  var logistics = $("#logistics-title");
  var sponsor = $("#sponsor-title");
  var insta = $("#instagram-title");
  var explore = $("#explore-title");

  $(".home-link").removeClass("underline");
  $(".about-link").removeClass("underline");
  $(".committee-link").removeClass("underline");
  $(".info-link").removeClass("underline");
  $(".attraction-link").removeClass("underline");

  /* Set to Normal */
  secretariat.removeClass("secretariat-title-active");
  secretariat.addClass("secretariat-title");
  ob.removeClass("ob-active");
  ob.addClass("ob-title");
  sb.removeClass("sb-title-active");
  sb.addClass("sb-title");
  cc.removeClass("cc-title-active");
  cc.addClass("cc-title");
  jcc.removeClass("jcc-title-active");
  jcc.addClass("jcc-title");
  welcome.removeClass("welcome-title-active");
  welcome.addClass("welcome-title");
  logistics.removeClass("logistics-title-active");
  logistics.addClass("logistics-title");
  sponsor.removeClass("sponsor-title-active");
  sponsor.addClass("sponsor-title");
  insta.removeClass("instagram-title-active");
  insta.addClass("instagram-title");
  explore.removeClass("explore-title-active");
  explore.addClass("explore-title");


  /* Activate Title */
  switch (hash) {
    case "home":
      $(".home-link").addClass("underline");
      break;
    /* welcome */
    case "about":
      $(".about-link").addClass("underline");
      welcome.addClass("welcome-title-active");
      welcome.removeClass("welcome-title");
      break;
    /* secretariat */
    case "about/1":
      secretariat.removeClass("secretariat-title");
      secretariat.addClass("secretariat-title-active");
      $(".about-link").addClass("underline");
      break;
    /* ob */
    case "about/2":
      ob.addClass("ob-active");
      ob.removeClass("ob-title");
      $(".about-link").addClass("underline");
      break;
    /* sb */
    case "committee":
      sb.addClass("sb-title-active");
      sb.removeClass("sb-title");
      $(".committee-link").addClass("underline");
      break;
    /* cc */
    case "committee/1":
      cc.addClass("cc-title-active");
      cc.removeClass("cc-title");
      $(".committee-link").addClass("underline");
      break;
    /* jcc */
    case "committee/2":
      jcc.addClass("jcc-title-active");
      jcc.removeClass("jcc-title");
      $(".committee-link").addClass("underline");
      break;
    /* logistics */
    case "info":
      logistics.addClass("logistics-title-active");
      logistics.removeClass("logistics-title");
      $(".info-link").addClass("underline");
      break;
    /* sponsor */
    case "info/1":
      sponsor.addClass("sponsor-title-active");
      sponsor.removeClass("sponsor-title");
      $(".info-link").addClass("underline");
      break;
    case "attraction":
      insta.addClass("instagram-title-active");
      insta.removeClass("instagram-title");
      $(".attraction-link").addClass("underline");
      break;
    case "attraction/1":
      explore.addClass("explore-title-active");
      explore.removeClass("explore-title");
      $(".attraction-link").addClass("underline");
      break;
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
$(document).ready(
  $(".secretariat-container").click(function() {
      console.log("got here")
      var contact = this.closest(".secretariat-contact");
      var contact_active = this.closest(".secretariat-contact-active");
      contact.removeClass("secretariat-contact");
      contact.addClass("secretariat-contact-active");
      contact_active.removeClass("secretariat-contact-active");
      contact_active.addClass("secretariat-contact");
    })
  );*/

  function contactSecretariat(el) {
    var contact = el.find("#secretariat-contact");
    if (contact.hasClass("secretariat-contact")) {
      contact.removeClass("secretariat-contact");
      contact.addClass("secretariat-contact-active");
    }
    else if (contact.hasClass("secretariat-contact-active")) {
      contact.removeClass("secretariat-contact-active");
      contact.addClass("secretariat-contact");
    }
  };

  function contactCommittee(el) {
    var contact = el.find("#contact");
    if (contact.hasClass("cc-contact")) {
      contact.removeClass("cc-contact");
      contact.addClass("cc-contact-active");
    }
    else if (contact.hasClass("cc-contact-active")) {
      contact.removeClass("cc-contact-active");
      contact.addClass("cc-contact");
    }
  };

  /* Resize Contents to 100% of Nav to Window Bottom */
$(document).ready(function(){
  $(document).on("resize", function(){
    var header = $(".nav-bar");
    var contents = $(".secretariat-contents-container");
    var header_height = header.height;
    var window_height = $(window).height;
    contents.css("height", window_height - header_height + "px")
  });
});

/* Open/Close Information sections */
function closeAll() {
  $(".schedule-contents").css("display", "none");
  $(".fee-contents").css("display", "none");
  $(".registration-contents").css("display", "none");
  $(".location-contents").css("display", "none");
  $(".resource-contents").css("display", "none");
}

$(document).ready(function(){
  $(".info-container").onclick(function(){
    var id = $(this).id;
    console.log(id);
    closeAll();
    var class_name = id + "-contents";
    $("." + class_name).css("display", "block");
  });
});
