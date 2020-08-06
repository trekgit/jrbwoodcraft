jQuery(function($){
	
  	resizeWindow();
  		
 	$(window).resize(resizeWindow);
	
	// navigation
	$('#nav li a').click(function(e){
		e.preventDefault();
		var $this = $(this);
		var rel = $(this).attr('rel');
		$('html, body').animate({scrollTop: $('#' + rel).offset().top}, 1000, function() {
			$('#nav li').removeClass('active');
			$this.parent('li').addClass('active');																			   
		});
	});
	
	// mobile nav
	$('#mobile_toggle').click(function() {
		$('#mobile_nav').slideToggle(300);
	});
	  
	// waypoints
	var wp_overview = new Waypoint({
		element: $('#overview'),
		handler: function() {
			$('#nav li').removeClass('active');
			$('#nav li.wp_overview').addClass('active');
		},
		offset: '-50px'
	});
	var wp_amenities = new Waypoint({
		element: $('#amenities'),
		handler: function() {
			$('#nav li').removeClass('active');
			$('#nav li.wp_amenities').addClass('active');
		},
		offset: '-50px'
	});
	var wp_interiors = new Waypoint({
		element: $('#interiors'),
		handler: function() {
			$('#nav li').removeClass('active');
			$('#nav li.wp_interiors').addClass('active');
		},
		offset: '-50px'
	});
	var wp_location = new Waypoint({
		element: $('#location'),
		handler: function() {
			$('#nav li').removeClass('active');
			$('#nav li.wp_location').addClass('active');
		},
		offset: '-50px'
	});
	var wp_contact = new Waypoint({
		element: $('#contact'),
		handler: function() {
			$('#nav li').removeClass('active');
			$('#nav li.wp_contact').addClass('active');
		},
		offset: '50px'
	});
	
	// mailchimp
	$('.mailchimp').each(function() {
		var $this = $(this);
		$.validator.addMethod('defaultInvalid', function(value, element) {
			switch (element.value) {
				case 'Email Address':
					if (element.name == 'cemail') return false;
					break;
				default: return true; 
					break;
			}
		},$.validator.messages.required);
		$this.validate({
			debug: false,
			rules: {
				cemail: {
					required: true,
					defaultInvalid: true,
					email: true
				},
			},
			submitHandler: function(form) {
				$this.parent('.formwrap').next('.loading').show();
				$.post(ajax_dir + 'mailchimp/subscribe.php', $this.serialize(), function(data) {
					$this.html(data).fadeIn();
					$this.parent('.formwrap').next('.loading').hide();
				});
			}
		});
	});
				
});

function resizeWindow() {
	
	var ww = $(window).width();
	var wh = $(window).height();
  
	if ($('#splash').length) {
				
		//if (ww > 1024) {
					
			$('#splashPad').css({'margin-top':wh+'px'});
			$('#splashPad').show();
			//$('#splash .logo').show();
			$('#splash').css({
			  'position' : 'relative',
			  'top' : '0',
			  'height' : '100%',
			});
			//$('.main-content').css('margin-top','30px');
			
		  
		/*} else {
		  
			var splashHeight = wh / 2;

			$('#splashPad').hide();
			$('#splash .logo').hide();
			$('#splash').css({
			  'position' : 'relative',
			  'top' : 'auto',
			  'height' : splashHeight + 'px',
			});
		  
			if (ww > 768) {
				$('.main-content').css('margin-top','84px');
			} else {
				$('.main-content').css('margin-top','0');
			}
		  
		}*/
				
	}
		  
}
