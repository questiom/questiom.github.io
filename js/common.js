$(function() {

	document.oncontextmenu=new Function("return false;");

	$('.popup-with-zoom-anim').magnificPopup({
		type: 'inline',
		tClose: 'Закрыть (Esc)',

		fixedContentPos: true,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,

		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-zoom-in'
	});

	$(".whrite-otziv form").submit(function() {
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "../mail.php",
			data: th.serialize()
		}).done(function() {
			$(".whrite-otziv-callback").css("display" , "grid");
			setTimeout(function() {
				th.trigger("reset");
				$(".whrite-otziv-callback").css("display" , "none");
			}, 4000)
		});
		return false
	});

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});