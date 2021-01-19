(function ( $ ) {
    'use strict';
    $( 'document' ).ready( function () {

        var 
        	$contact_form = $( '#contact-form' ),
        	$titlebar = $( '#titlebar' ),
        	$grid = $( '.grid' ),
        	$team = $( '#team' ),
        	$sticked_widget	= $( '#sticked-widget', '#sidebar' ),
        	$testimonials = $( '#testimonials' ),
        	$background = $( '[data-background="image"]' ),
        	$industry_insights = $( '#industry-insights' ),
        	$insight_item_images = $( '#insight-item-images' ),
        	$related_posts = $( '#related-posts' ),
        	$filter_button_group = $( '.filter-button-group' ),
        	$industries_images = $( '#industries-images' ),
        	$featured_insights = $( '#featured-insights' ),
        	$mobile_menu_wrapper = $( '#mobile-menu-wrapper' ),
        	$menu_scrollbar = $( '.scrollbar-inner', $mobile_menu_wrapper ),
        	$header_search = $( '#header-search' ),
        	$header_search_icon = $( '#search-icon' ),
        	$header_search_icon_close = $( '#search-icon-close' ),
        	$partners = $( '#partners' ),
        	$latest_news = $( '#latest-news' ),
            $site_menu = $( '> ul', $( '#site-menu' ) ),
            $site_menu_li = $( 'li', $site_menu );

		// Contact form validation
		$contact_form.validate( {
			debug: true,
			errorClass: "label-form-error",
			rules: {
				"comment-name": "required",
				"comment-message": "required",
				"comment-email": {
					required: true,
					email: true
				},
			},
			invalidHandler: function ( event, validator ) {
				var errors = validator.numberOfInvalids(),
					$result = $( '.contacts-form-result' );
				if ( errors ) {
					var message = errors == 1 ? 'You missed 1 field. It has been highlighted.' : 'You missed ' + errors + ' fields. They have been highlighted.';
					$result.html( message );
					$result.show();
				} else {
					$result.hide();
				}
			},
			submitHandler: function () {
				var $result = $( '.contacts-form-result' );
				$.ajax( {
					method: 'POST',
					url: 'email.php',
					data: {
						name: $( 'input[name="comment-name"]', $contact_form ).val(),
						email: $( 'input[name="comment-email"]', $contact_form ).val(),
						message: $( 'textarea[name="comment-message"]', $contact_form ).val(),
					}
				} )
				.done( function ( msg ) {
					$result.html( '<p>' + msg + '</p>' ).show();
				} )
				.fail( function () {
					$result.html( '<p>Fail...</p>' ).show();
				} );
			}
		} );	

		$( '#thompson-wrapper' ).imagesLoaded().done( function () {
			$( '#thompson-preload' ).fadeOut();
		} );

        $('iframe[src*="youtube"],iframe[src*="vimeo"]').parent().fitVids();

		// $('#contacts-send-message').on( 'click', function(e) {
		// 	e.preventDefault();
		// 	// processEmail();
		// 	$.ajax( {
		// 		method: 'POST',
		// 		url: 'email.php',
		// 		data: {
		// 			name: $( '#add-comment-name' ).val(),
		// 			email: $( '#add-comment-email' ).val(),
		// 			message: $( '#add-comment-message' ).val(),
		// 		}
		// 	} )
		// 	.done( function ( msg ) {
		// 		$( '#add-comment-result' ).html( '<p>' + msg + '</p>' );
		// 	} )
		// 	.fail( function () {
		// 		$( '#add-comment-result' ).html( '<p>Fail...</p>' );
		// 	} );
		// });

        // Background
        for ( var i = 0; i < $background.length; i++ ) {
        	var $elem = $background.eq( i ),
        		$img = $( 'img.data-background-image', $elem );
        	$elem.css( 'background-image', 'url(' + $img.attr( 'src' ) + ')' );
        	$img.hide();
        }

        // Testimonials
        $testimonials.owlCarousel( {
			loop: true,
	        nav: true,
			navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
	        navContainer: '#testimonials-nav',
			dots: false,
		    responsive:{
		        0:{
		            items:1
		        },
		        1100:{
		            items:2
		        }
    		}
        } );

        // Team
        $team.owlCarousel( {
			loop: true,
	        nav: true,
			navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
	        navContainer: '#team-nav',
			dots: false,
			margin: 0,
			// margin: 40,
		    responsive:{
		        0:{
		            items:1
		        },
		        1100:{
		            items:2
		        }
    		}
        } );

        // Insight images
        $insight_item_images.owlCarousel( {
			loop: true,
	        nav: false,
	        dotsContainer: '#insight-item-images-dots',
			dots: true,
			items: 1
        } );

        // Related posts
        $related_posts.owlCarousel( {
			loop: true,
	        nav: true,
			navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
	        navContainer: '#related-posts-nav',
			dots: false,
		    responsive:{
		        0:{
		            items:1
		        },
		        900:{
		            items:2
		        },
		        1200:{
		            items:3
		        }
    		}
        } );

        // Grid filtering
        $grid.isotope( {
        	itemSelector: '.grid-item',
        } );
		$filter_button_group.on( 'click', 'button', function() {
			var $this = $( this ),
				$buttons = $( 'button', $filter_button_group ),
				filterValue = $this.attr('data-filter');
			$buttons.removeClass( 'btn-primary' );
			$this.addClass( 'btn-primary' );
			$grid.isotope({ filter: filterValue });
		});
		$filter_button_group.find( 'button' ).first().trigger( 'click' );

        // Titlebar
        $titlebar.css( 'background-image', 'url(' + $( 'img', $titlebar ).hide().attr( 'src' ) + ')' );

        // Lightbox
        $( '.lightbox-image' ).magnificPopup( {
       		type: 'image'
        } );
        $( '.lightbox-gallery' ).magnificPopup( {
        	delegate: 'a',
        	type: 'image'
        } );
        $( '.lightbox-video' ).magnificPopup( {
        	type: 'iframe'
        } );

        // Mobile menu
        $mobile_menu_wrapper.hide();
        $site_menu.clone().appendTo( $menu_scrollbar );
        $menu_scrollbar.scrollbar();
        $( '#mobile-menu-close', $mobile_menu_wrapper ).on( 'click', function () {
        	$mobile_menu_wrapper.fadeOut();
        } );
        $( '#mobile-menu-icon' ).on( 'click', function ( e ) {
        	e.preventDefault();
        	$mobile_menu_wrapper.fadeIn();
        } );

        // Header search
        $header_search.hide();
        $header_search_icon.on( 'click', function ( e ) {
        	e.preventDefault();
        	$( this ).hide();
        	$header_search.fadeIn();
        } );
        $header_search_icon_close.on( 'click', function () {
        	$header_search_icon.fadeIn();
        	$header_search.hide();
        } );

        // Sticky header
        $( '#sticky-header' ).sticky( {
        		topSpacing: 0,
        		zIndex: 10,
        	} );

        $sticked_widget.sticky( {
        	topSpacing: 40,
        	zIndex: 10,
        } );

		// Site menu
		$( '#site-menu' ).rtMega( { megaContent: '#rt-mega' } );
		for ( var i = 0; i < $site_menu_li.length; i++ ) {
			var $item = $site_menu_li.eq( i );
			if ( $( '> ul', $item ).length ) {
				$item.addClass( 'has-children' );
			}
		}
		$site_menu_li.on( 'mouseenter', function () {
			$( '> ul', $( this ) ).stop( true, true ).fadeIn();
		} ).on( 'mouseleave', function () {
			$( '> ul', $( this ) ).stop( true, true ).fadeOut();
		} );

		// Partners
		$partners.owlCarousel( {
			loop: true,
	        nav: false,
	        dotsContainer: '#partners-dots',
			dots: true,
			margin: 120,
			onInitialized : function ( event ) {
				var $items = $( event.target ).find( '.partner-item' ),
					h = 0;
				for ( var i = 0; i < $items.length; i++ ) {
					if ( $items.eq( i ).height() > h ) {
						h = $items.eq( i ).height();
					}
				}
				$items.height( h );
			},
		    responsive:{
		        0:{
		            items:2
		        },
		        900:{
		            items:3
		        },
		        1200:{
		            items:5
		        }
    		}
		} );

		// Latest news
		$latest_news.owlCarousel( {
			loop: true,
	        nav: true,
	        navContainer: '#latest-news-nav',
			navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
			dots: false,
			items: 1
		} );

		// Insights
		$industry_insights.owlCarousel( {
			loop: true,
	        nav: true,
	        navContainer: '#industry-insights-nav',
			navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
			dots: false,
		    responsive:{
		        0:{
		            items:1
		        },
		        600:{
		            items:1
		        },
		        800:{
		            items:2
		        },
    		},
    		onInitialized: function ( event ) {
    			var $items = $( '.owl-item', $( event.target ) );
		        $( '.lightbox-image', $items ).magnificPopup( {
		       		type: 'image'
		        } );
		        $( '.lightbox-gallery', $items ).magnificPopup( {
		        	delegate: 'a',
		        	type: 'image'
		        } );
		        $( '.lightbox-video', $items ).magnificPopup( {
		        	type: 'iframe'
		        } );
    		}
		} );
		$featured_insights.owlCarousel( {
			loop: true,
	        nav: true,
	        navContainer: '#featured-insights-nav',
			navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
			dots: false,
			margin: 0,
		    responsive:{
		        0:{
		            items:1
		        },
		        600:{
		            items:1
		        },
		        800:{
		            items:2
		        },
		        1200:{
		            items:3
		        }
    		},
    		onInitialized: function ( event ) {
    			var $items = $( '.owl-item', $( event.target ) );
		        $( '.lightbox-image', $items ).magnificPopup( {
		       		type: 'image'
		        } );
		        $( '.lightbox-gallery', $items ).magnificPopup( {
		        	delegate: 'a',
		        	type: 'image'
		        } );
		        $( '.lightbox-video', $items ).magnificPopup( {
		        	type: 'iframe'
		        } );
    		}
		} );

		// Industries
		$industries_images.owlCarousel( {
			loop: true,
	        nav: true,
			animateOut: 'fadeOut',
            animateIn: 'fadeIn',
	        navContainer: '#industries-nav',
			navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
			dots: false,
			items: 1
		} );

		// To the top
		$( "#to-the-top" ).on( 'click', function() {
			$( "html, body" ).animate( {
				scrollTop: 0
			},
			"slow" );
			return false;
		});

    } );
} ( jQuery ) );


$(function() {
	var INDEX = 0;
	$("#chat-submit").click(function(e) {
	  e.preventDefault();
	  var msg = $("#chat-input").val(); 
	  if(msg.trim() == ''){
		return false;
	  }
	  generate_message(msg, 'self');
	  var buttons = [
		  {
			name: 'Existing User',
			value: 'existing'
		  },
		  {
			name: 'New User',
			value: 'new'
		  }
		];
	  setTimeout(function() {      
		generate_message(msg, 'user');  
	  }, 1000)
	  
	})
	
	function generate_message(msg, type) {
	  INDEX++;
	  var str="";
	  str += "<div id='cm-msg-"+INDEX+"' class=\"chat-msg "+type+"\">";
	  str += "          <span class=\"msg-avatar\">";
	//   str += "            <img src=./Content/images/insights/user.jpg />";
	  str += "            <img src=\"https:\/\/image.crisp.im\/avatar\/operator\/196af8cc-f6ad-4ef7-afd1-c45d5231387c\/240\/?1483361727745\">";
	  str += "          <\/span>";
	  str += "          <div class=\"cm-msg-text\">";
	  str += msg;
	  str += "          <\/div>";
	  str += "        <\/div>";
	  $(".chat-logs").append(str);
	  $("#cm-msg-"+INDEX).hide().fadeIn(300);
	  if(type == 'self'){
	   $("#chat-input").val(''); 
	  }    
	  $(".chat-logs").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight}, 1000);    
	}  
	
	function generate_button_message(msg, buttons){    
	  /* Buttons should be object array 
		[
		  {
			name: 'Existing User',
			value: 'existing'
		  },
		  {
			name: 'New User',
			value: 'new'
		  }
		]
	  */
	  INDEX++;
	  var btn_obj = buttons.map(function(button) {
		 return  "              <li class=\"button\"><a href=\"javascript:;\" class=\"btn btn-primary chat-btn\" chat-value=\""+button.value+"\">"+button.name+"<\/a><\/li>";
	  }).join('');
	  var str="";
	  str += "<div id='cm-msg-"+INDEX+"' class=\"chat-msg user\">";
	  str += "          <span class=\"msg-avatar\">";
	  str += "            <img src=\"https:\/\/image.crisp.im\/avatar\/operator\/196af8cc-f6ad-4ef7-afd1-c45d5231387c\/240\/?1483361727745\">";
	  str += "          <\/span>";
	  str += "          <div class=\"cm-msg-text\">";
	  str += msg;
	  str += "          <\/div>";
	  str += "          <div class=\"cm-msg-button\">";
	  str += "            <ul>";   
	  str += btn_obj;
	  str += "            <\/ul>";
	  str += "          <\/div>";
	  str += "        <\/div>";
	  $(".chat-logs").append(str);
	  $("#cm-msg-"+INDEX).hide().fadeIn(300);   
	  $(".chat-logs").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight}, 1000);
	  $("#chat-input").attr("disabled", true);
	}
	
	$(document).delegate(".chat-btn", "click", function() {
	  var value = $(this).attr("chat-value");
	  var name = $(this).html();
	  $("#chat-input").attr("disabled", false);
	  generate_message(name, 'self');
	})
	
	$("#chat-circle").click(function() {    
	  $("#chat-circle").toggle('scale');
	  $(".chat-box").toggle('scale');
	})
	
	$(".chat-box-toggle").click(function() {
	  $("#chat-circle").toggle('scale');
	  $(".chat-box").toggle('scale');
	})
	
  })





/*
 * Google Maps init function
 */
function initMap () {
	var 
		// Your geo coordinates
		uluru = {lat: -37.817037, lng: 144.955709},
		// Google Maps style (see https://snazzymaps.com/ for more syles)
		styles = [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#878787"},{"visibility":"on"}]}],
		options = {
			// Center position for Google Maps
			center: {
				lat: -37.817037,
				lng: 144.955709
			},
			zoom: 15,
			disableDefaultUI: false,
			scrollwheel: true,
			draggable: true,
			maxZoom: 20,
			minZoom: 10,
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			zoomControlOptions: {
				position: google.maps.ControlPosition.LEFT_BOTTOM,
				style: google.maps.ZoomControlStyle.DEFAULT
			},
			panControlOptions: {
				position: google.maps.ControlPosition.LEFT_BOTTOM
			},
			styles: styles
		},
		map, marker,
		container = document.getElementById('map-canvas');
		if ( container !== null ) {
			map = new google.maps.Map(container, options);
			marker = new google.maps.Marker({
				position: uluru,
				map: map
			});
		}
}

