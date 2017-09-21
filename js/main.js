jQuery(document).ready(function($){

	$('body').addClass('js');
	var $menu = $('#menu'),
	$menulink = $('.menu-link');
  
	$menulink.click(function() {
		$menulink.toggleClass('active');
		$menu.toggleClass('active');
		return false;
	});

	$(".search-icon").click(function(e){
		e.preventDefault();
		$("#header input").slideToggle("slow", "linear", function(){
		});
	});

	$('.quick-icons').hide();

	$('.quick-filter-item').click(function(){
		$this = $('.quick-filter').find('a.selected');
		$this.removeClass('selected').children('img').attr('src', $this.children("img").data("src"));
		$(this).children('a').addClass('selected');
	});

	$(".thumbnail").click(function(e){
		$path = $(this).children("img").attr('src');
		e.preventDefault();
		$(".product-preview").children("img").attr('src', $path);
	});

	$(".submit-shipping-info").click(function(e){
		e.preventDefault();
		$(".shipping-details").hide();
		$(".submit-shipping-info").hide();
		$(".order-checkout").show();
		$(".checkout-action").show();
	});

	$(".back-shipping").click(function(e){
		e.preventDefault();
		$(".order-checkout").hide();
		$(".submit-shipping-info").show();
		$(".shipping-details").show();
		$(".checkout-action").hide();
	});

	$(".print-doc").click(function(e){
		e.preventDefault();
		window.print();
	});

	$("#nav-new").click(function(e){
		e.preventDefault();
		$("#best-product").hide();
		$("#featured-product").hide();
		$("#new-product").show();

		$("#nav-featured").removeClass("selected");
		$("#nav-best").removeClass("selected");
		$("#nav-new").addClass("selected");
	});

	$("#nav-featured").click(function(e){
		e.preventDefault();
		$("#best-product").hide();
		$("#new-product").hide();
		$("#featured-product").show();

		$("#nav-new").removeClass("selected");
		$("#nav-best").removeClass("selected");
		$("#nav-featured").addClass("selected");
	});

	$("#nav-best").click(function(e){
		e.preventDefault();
		$("#new-product").hide();
		$("#featured-product").hide();
		$("#new-product").show();

		$("#nav-new").removeClass("selected");
		$("#nav-featured").removeClass("selected");
		$("#nav-best").addClass("selected");
	});

	$("#add").click(function(e){
		e.preventDefault();
		value = parseInt($("#quantity").text());
		$("#quantity").html(value + 1);
	});

	$("#subtract").click(function(e){
		e.preventDefault();
		value = parseInt($("#quantity").text());
		if(value > 0) {
			$("#quantity").html(value - 1);
		}
	});

	$("#add-1").click(function(e){
		e.preventDefault();
		value = parseInt($("#quantity-1").text());
		$("#quantity-1").html(value + 1);
	});

	$("#subtract-1").click(function(e){
		e.preventDefault();
		value = parseInt($("#quantity-1").text());
		if(value > 0) {
			$("#quantity-1").html(value - 1);
		}
	});

	if(window.matchMedia("(min-width: 768px)").matches){
	  $(".product-teaser-product, .catalog-item, .quick-filter-item, .quick-links li").hover(function(){
		$(this).children('a').not('.selected').children("img").attr('src', $(this).children('a').children("img").data("hover"));
		$(this).children(".quick-icons").slideDown("ease", "linear", function(){
		  });
		},
		function(){
			$(this).children('a').not('.selected').children("img").attr('src', $(this).children('a').children("img").data("src"));
			$(this).children(".quick-icons").slideUp("ease", "linear", function(){
			  });
		});
	}
	else{
		$(".product-teaser-product, .catalog-item, .quick-filter-item, .quick-links li").unbind('mouseenter mouseleave');
	}

});

