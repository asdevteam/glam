(function($,drupalSettings){

	$(document).ready(function(){
	  //   $('.addbtn input[type=submit]').addClass('btn');
	 	// $('.addbtn-theme input[type=submit]').addClass('btn btn-theme');

	 	if($('.js-add-to-cart')){
	 		
	 		var add_cart = $('.js-add-to-cart').html();
	 		$('.js-add-to-cart').html('');
	 		var cart = $('.js-cart-list').html();
	 		$('.js-cart-list').html( cart + add_cart );

	 	
	 	
	 	} 
	 	  // init Isotope
		  var $grid = $('.grid').isotope({
		    itemSelector: '.grid-item',
		    layoutMode: 'fitRows',
		  });

		  // filter functions
		  var filterFns = {
		    // show if number is greater than 50
		    numberGreaterThan50: function() {
		      var number = $(this).find('.number').text();
		      return parseInt( number, 10 ) > 50;
		    },
		    // show if name ends with -ium
		    ium: function() {
		      var name = $(this).find('.name').text();
		      return name.match( /ium$/ );
		    }
		  };

		  // bind filter button click
		  $('.portfolio-filter').on( 'click', 'div', function() {
		    var filterValue = $( this ).attr('data-filter');
		    // use filterFn if matches value
		    filterValue = filterFns[ filterValue ] || filterValue;
		    $grid.isotope({ filter: filterValue });
		  });


		  // change is-checked class on buttons
		  $('.portfolio-filter').each( function( i, buttonGroup ) {
		    var $buttonGroup = $( buttonGroup );
		    $buttonGroup.on( 'click', 'button', function() {
		      $buttonGroup.find('.is-checked').removeClass('is-checked');
		      $( this ).addClass('is-checked');
		    });
		  });
		  function databgcolor() {
			    $('[data-bg-color]').each(function(index, el) {
			     $(el).css('background-color', $(el).data('bg-color'));  
			    });
			    $('[data-text-color]').each(function(index, el) {
			     $(el).css('color', $(el).data('text-color'));  
			    });
			    $('[data-bg-img]').each(function() {
			    	alert(1);
			     $(this).css('background-image', 'url(' + $(this).data("bg-img") + ')');
			    });
			};

 	});
		// $("li.fullwidth .dropdown-menu:first").addClass("grid-12");	
	 //    $(".dropdown-menu.grid-12").wrapInner('<li class="container"> <div class="row"> </div> </li>' );
	 //   	$(".menu-title").wrap('<div class="col-md-4"><ul class="nav flex-column"> </ul></div>');
		// $(".un-wrap").unwrap();
		// var html = $(".menu-title").text();
		// // $(".menu-title").empty().trim();
		// // $(".menu-title").text(html);
	 //    var baseURL = drupalSettings.path.themeUrl;


})(jQuery, drupalSettings);