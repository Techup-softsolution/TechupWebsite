(function ($) {
    'use strict';
    var Tabs = function (elm, options) {
        var self,
            bodyWidth,
            $this = $( elm ),
            $titles = $( '.titles', $this ),
            $li_titles = $( 'ul li', $titles ),
            $content = $( '.content', $this ),
            $items = $( '.content-item', $content ),
            $select = $( '<select></select>' ).addClass( 'form-control' ).appendTo( $( '.titles', $this ) ),
            titlesWidth = ( $titles.data( 'rt-tabs-width' ) === undefined ) ? '30%' : $titles.data( 'rt-tabs-width' ),
            contentWidth = ( $content.data( 'rt-tabs-width' ) === undefined ) ? '70%' : $content.data( 'rt-tabs-width' ),
            createSelect = function () {
                for ( var i = 0; i< $li_titles.length; i++ ) {
                    $( '<option value="' + $li_titles.eq( i ).data( 'key' ) + '">' + $li_titles.eq( i ).text() + '</option>' ).appendTo( $select );
                }
                $select.on( 'change', function () {
                    contentItems( $( this ).val() );
                } );
            },
            makeResponsive = function () {
                bodyWidth = $( 'body' ).width();
                if ( bodyWidth < 992 ) {
                    $this.addClass( 'responsive' );
                } else {
                    $this.removeClass( 'responsive' );
                    resize( titlesWidth, contentWidth );
                }
            },
            resize = function ( titlesWidth, contentWidth ) {
                if ( options.type == 'vertical' ) {
                    $titles.css( 'width', titlesWidth );
                    $content.css( 'width', contentWidth );
                }
            },
            titles = function () {
                $li_titles.eq( options.active ).addClass( 'active' ).end().on( 'click', function () {
                    var $this = $( this );
                    if ( !$this.hasClass( 'active' ) ) {
                        $li_titles.filter( '.active' ).removeClass( 'active' );
                        $this.addClass( 'active' );
                        contentItems( $this.data('key') );
                    }
                } );
            },
            contentItems = function ( val ) {
                $items.removeClass( 'active' ).filter( '[data-value="' + val + '"]' ).addClass( 'active' );
            },
            init = function () {
                makeResponsive();
                createSelect();
                titles(),
                $items.eq( options.active ).addClass( 'active' );
                $( window ).resize( makeResponsive ).trigger( 'resize' );
            };
        self = {
            init: init
        };
        return self;
    };
    $.fn.rtTabs = function (opt) {
        return this.each(function () {
            var tabs;
            if (!$(this).data('rtTabs')) {
                tabs = new Tabs(this, $.extend(true, {
                    active: ( $(this).data('rt-tabs-active') === undefined ) ? 0 : $(this).data('rt-tabs-active') - 1,
                    type: ( $(this).data('rt-tabs-type') === undefined ) ? 'horizontal' : $(this).data('rt-tabs-type')
                }, opt));
                tabs.init();
                $(this).data('rtTabs', tabs);
            }
        });
    };
    var $rtTabs = $( '[data-rt-tabs]' );
    if ( $rtTabs.length ) {
        $rtTabs.rtTabs();
    }
}(jQuery));
(function ($) {
    'use strict';
    var Mega = function (elm, options) {
        var self,
            bodyWidth,
            moved = false,
            $this = $( elm ),
            $mobile = $( options.mobileMenu ),
            $hover = $( '[data-rt-mega]', $this ),
            $hoverMobile,
            $content = $( '[data-rt-mega-content]', options.megaContent ),
            init = function () {
                $hover.data( 'rt-mega-tap', 'off' ).on( 'mouseenter', function () {
                    $content.filter( '[data-rt-mega-content="' + $( this ).data( 'rt-mega' ) + '"]').stop( true, true ).fadeIn();
                } ).on( 'mouseleave', function () {
                    $content.filter( '[data-rt-mega-content="' + $( this ).data( 'rt-mega' ) + '"]').hide();
                } ).on( 'taphold', function ( e ) {
                    var $this = $( this );
                    e.preventDefault();
                    $content.hide();
                    if ( $this.data( 'rt-mega-tap' ) == 'on' ) {
                        $content.filter( '[data-rt-mega-content="' + $this.data( 'rt-mega' ) + '"]').stop( true, true ).fadeOut();
                        $this.data( 'rt-mega-tap', 'off' );
                        $content.hide();
                    } else {
                        $content.filter( '[data-rt-mega-content="' + $this.data( 'rt-mega' ) + '"]').stop( true, true ).fadeIn();
                        $this.data( 'rt-mega-tap', 'on' );
                    }
                } ).on( 'singletap', function() {
                    $content.hide();
                } );

                $content.on( 'mouseenter', function () {
                    $( this ).show();
                    console.log( $( this ).data( 'rt-mega-content' ) );
                    $hover.filter( '[data-rt-mega="' + $( this ).data( 'rt-mega-content' ) + '"]').addClass( 'hover' );
                } ).on( 'mouseleave', function () {
                    $( this ).hide();
                    $hover.filter( '[data-rt-mega="' + $( this ).data( 'rt-mega-content' ) + '"]').removeClass( 'hover' );
                } );
            };
        self = {
            init: init
        };
        return self;
    };
    $.fn.rtMega = function (opt) {
        return this.each(function () {
            var mega;
            if (!$(this).data('rtMega')) {
                mega = new Mega(this, $.extend(true, {
                }, opt));
                mega.init();
                $(this).data('rtMega', mega);
            }
        });
    };
}(jQuery));
(function ($) {
    'use strict';
    var Accordion = function (elm, options) {
        var self,
            $this = $( elm ),
            $items = $( '[data-rt-accordion-item]', $this ),
            $header = $( 'header', $items ),
            slideItem = function ( direction, $item ) {
                if ( direction == 'up' ) {
                    $item.removeClass( 'active' ).find( '.content' ).slideUp().end().find( 'header i' ).removeClass( 'fa-minus' );
                } else if ( direction == 'down' ) {
                     if ( options.toggle ) {
                        $items.removeClass( 'active' ).find( '.content' ).slideUp().end().find( 'header i' ).removeClass( 'fa-minus' );
                     }
                     $item.addClass( 'active' ).find( '.content' ).slideDown().end().find( 'header i' ).addClass( 'fa-minus' );
               }
            },
            init = function () {
                $items.find( '.content' ).hide();
                $( '<i class="fa fa-plus"></i>' ).prependTo( $header.find( ':first-child' ) );
                if ( options.active ) {
                    $items.eq( options.active ).addClass( 'active' ).find( '.content' ).show().end().find( 'header i' ).addClass( 'fa-minus' );
                }
                $header.on( 'click', function () {
                    var $item = $( this ).parents( '[data-rt-accordion-item]' );
                    if ( $item.hasClass( 'active' ) ) {
                        slideItem( 'up', $item );
                    } else {
                        slideItem( 'down', $item );
                    }
                } );
            };
        self = {
            init: init
        };
        return self;
    };
    $.fn.rtAccordion = function (opt) {
        return this.each(function () {
            var accordion;
            if (!$(this).data('rtAccordion')) {
                accordion = new Accordion(this, $.extend(true, {
                    active: ( $(this).data('rt-active') === undefined ) ? 0 : $(this).data('rt-active') - 1,
                    toggle: ( $(this).data('rt-accordion-toggle') === undefined ) ? 0 : $(this).data('rt-accordion-toggle'),
                }, opt));
                accordion.init();
                $(this).data('rtAccordion', accordion);
            }
        });
    };
    var $rtAccordion = $( '[data-rt-accordion]' );
    if ( $rtAccordion.length ) {
        $rtAccordion.rtAccordion();
    }
}(jQuery));
(function ($) {
    'use strict';
    var Slider = function (elm, options) {
        var self,
            $this = $( elm ),
            $images = $( '.slider-images', $this ).addClass( 'owl-carousel owl-theme' ),
            $content = $( '.slider-content', $this ).addClass( 'owl-carousel owl-theme' ),
            $items = $( '.slider-item', $content ),
            $dots = $( '.slider-dots', $this ),
            images_change_position = function ( event ) {
                $images.trigger( 'to.owl.carousel', [ event.item.index, 500 ] );
            },
            init = function () {
                for ( var i = 0; i < $items.length; i++ ) {
                    var $img = $( 'img', $items.eq(i) );
                    $( '<div class="slider-images-item"></div>' ).css( 'background-image', 'url(' + $img.attr( 'src' ) + ')' ).appendTo( $images );
                    $img.remove().detach();
                }
                $images.owlCarousel( {
                    mouseDrag: false,
                    touchDrag: false,
                    loop: false,
                    animateOut: 'fadeOut',
                    animateIn: 'fadeIn',
                    dots: false,
                    nav: false,
                    // autoplay: true,
                    // autoplayTimeout: 3000,
                    items:1
                } );
                $content.owlCarousel( {
                    loop: false,
                    autoHeight: true,
                    margin:10,
                    nav: false,
                    animateOut: 'fadeOut',
                    animateIn: 'flipInY',
                    dots: true,
                    dotsContainer: $dots,
                    onChanged: images_change_position,
                    items:1
                } );
            };
        self = {
            init: init
        };
        return self;
    };
    $.fn.thompslider = function (opt) {
        return this.each(function () {
            var slider;
            if (!$(this).data('thompslider')) {
                slider = new Slider(this, $.extend(true, {}, opt));
                slider.init();
                $(this).data('thompslider', slider);
            }
        });
    };
    var $homepage_slider = $( '#homepage-slider' );
    if ( $homepage_slider.length ) {
        $homepage_slider.thompslider();
    }
}(jQuery));
"use strict";

/* Email Ajax Response */

var xmlHttp = createXmlHttpRequestObject(),
	source;

function createXmlHttpRequestObject() {
	var xmlHttp;
	if(window.ActiveXObject) {
		try {
			xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
		} catch (e) {
			xmlHttp = false;
		}
	} else {
		try {
			xmlHttp = new XMLHttpRequest();
		} catch (e) {
			xmlHttp = false;
		}
	}
	if (!xmlHttp) {
		alert("Error on XMLHttpRequest object creation.");
	} else {
		return xmlHttp;
	}
}

function processEmail() {
	if (xmlHttp.readyState == 4 || xmlHttp.readyState == 0) {
		source = 'contacts';
		var name = encodeURIComponent(document.getElementById("add-comment-name").value),
			email = encodeURIComponent(document.getElementById("add-comment-email").value),
			message = encodeURIComponent(document.getElementById("add-comment-message").value);
		xmlHttp.open("POST", "email.php?name=" + name + '&email=' + email + '&message=' + message, true);
		xmlHttp.onreadystatechange = handleServerResponse;
		xmlHttp.send(null);
	}
}

function handleServerResponse() {
	var target;
	console.log( 'xmlHttp.readyState: ' + xmlHttp.readyState );
	if (xmlHttp.readyState == 4) {
		if (xmlHttp.status == 200) {
			xmlResponse = xmlHttp.responseText;
			target = 'add-comment-result';
			document.getElementById( target ).innerHTML = '<p>' + xmlResponse + '</p>';
		} else {
			alert("There is a problem during server connection: " + xmlHttp.statusText);
		}
	}
}