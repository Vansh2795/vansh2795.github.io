 // -----------------Main JS File-----------------------------------------


 // -----------------Preloader-----------------------------------------

 $(document).ready(function () {
   jQuery("#pre-status").fadeOut();
   jQuery("#tt-preloader").delay(300).fadeOut('slow');
 });

//----------------------Animated Text----------------------------------
var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 40) || 4000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 500;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { min-width:1150px; border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};

// ---------------------------- Sticky nav----------------------------------

$(document).ready(function(){
		var showHeaderAt = 150;
		var win = $(window),
				body = $('body');
		// Show the fixed header only on larger screen devices
		if(win.width() > 600){
			// When we scroll more than 150px down, we set the
			// "fixed" class on the body element.
			win.on('scroll', function(e){
				if(win.scrollTop() > showHeaderAt) {
					body.addClass('fixed');
				}
				else {
					body.removeClass('fixed');
				}
			});
		}
});

// ------------------smoothscroll.js---------------------------------

var scroll = new SmoothScroll('a[href*="#"]',{

	speed: 500,
}

);

// -------------wow.js------------------------

$(function () {

	new window.WOW({
		boxClass:          'wow'       //  animated element css class (default is wow)
		, animateClass:    'animated'  //  animation css class (default is animated)
		, offset:          0           //  distance to the element when triggering the animation (default is 0)
		, mobile:          true        //  trigger animations on mobile devices (default is true)
		, live:            true        //  act on asynchronously loaded content (default is true)
		, scrollContainer: null        //  optional scroll container selector, otherwise use window,
		, resetAnimation:  false       //  reset animation on end (default is true)
		, callback: function (box) {
				//  the callback is fired every time an animation is started
				//  the argument that is passed in is the DOM node being animated
				//  console.log('WOW: animating <' + box.tagName.toLowerCase() + '>');
				//  console.log('WOW: animating box:', box.tagName.toLowerCase() + '.' + box.className);
			}
	}).init();


});


// --------------------------- SKILL PRGRESS BAR--------------------------------------------------------
$(function() {
	$('.skill-progress').bind('inview', function (event, visible, visiblePartX, visiblePartY) {
		$.each($('div.progress-bar'), function () {
			$(this).css('width', 0)
				.css('width', $(this).attr('aria-valuenow') + '%');
		});
});
});


// ---------------------------------More skills pie charts------------------------------------------------


$('.more-skill').bind('inview', function (event, visible, visiblePartX, visiblePartY) {
  if (visible) {
  $('.chart').easyPieChart({

    scaleColor: false,
    lineWidth: 8,
		delay:      3500,
    barColor: '#1abc9c',
    trackColor:	"#414647",
    size: 140,
    animate: 500,
		animate: {
				duration:  5000
				, enabled: true
			},
			onStep: function (from, to, percent) {
					this.el.children[0].innerHTML = Math.round(percent);
				}
  });
}
});

	//----------------------------------- Particle.js------------------------------------------------------

function styleDefault(){
	$('#particles-js').css("background-color", "rgb(208, 211, 216)");
	particlesJS("particles-js", {
		"particles": {
		"number": {
			"value": 50,
			"density": {
			"enable": true,
			"value_area": 800
			}
		},
		"color": {
			"value": "#1051bc"
		},
		"shape": {
			"type": "circle",
			"stroke": {
			"width": 0,
			"color": "#000000"
			},
			"polygon": {
			"nb_sides": 5
		},

		},
		"opacity": {
			"value": 0.5,
			"random": false,
			"anim": {
			"enable": false,
			"speed": 1,
			"opacity_min": 0.1,
			"sync": false
			}
		},
		"size": {
			"value": 3,
			"random": true,
			"anim": {
			"enable": false,
			"speed": 40,
			"size_min": 0.1,
			"sync": false
			}
		},
		"line_linked": {
			"enable": false,
			"distance": 200,
			"color": "#000000",
			"opacity": 0.4,
			"width": 1
		},
		"move": {
			"enable": true,
			"speed": 6,
			"direction": "none",
			"random": false,
			"straight": false,
			"out_mode": "out",
			"bounce": false,
			"attract": {
			"enable": true,
			"rotateX": 600,
			"rotateY": 1200
			}
		}
		},
		"interactivity": {
		"detect_on": "canvas",
		"events": {
			"onhover": {
			"enable": true,
			"mode": "grab"
			},
			"onclick": {
			"enable": true,
			"mode": "push"
			},
			"resize": true
		},
		"modes": {
			"grab": {
			"distance": 400,
			"line_linked": {
				"opacity": 1
			}
			},
			"bubble": {
			"distance": 400,
			"size": 40,
			"duration": 2,
			"opacity": 8,
			"speed": 3
			},
			"repulse": {
			"distance": 200,
			"duration": 0.4
			},
			"push": {
			"particles_nb": 4
			},
			"remove": {
			"particles_nb": 2
			}
		}
		},
		"retina_detect": true
	});
};
