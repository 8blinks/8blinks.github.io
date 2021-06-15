let particles = document.querySelectorAll(".particle");

particles.forEach(function (particle) {
	let animate = Math.floor(Math.random() * (25 - 5) + 5);
	let left = Math.floor(Math.random() * 100);
	let dimensions = Math.floor(Math.random() * (100 - 40) + 40);
	let delay = Math.floor(Math.random() * (3 - 1) + 1);

	particle.style.left = left + "%";
	particle.style.setProperty("--animation-time", animate + "s");
	particle.style.width = dimensions + "px";
	particle.style.height = dimensions + "px";
	particle.style.animationDelay = delay + "s";
});

$(function () {
	$(".menu-toggle").click(function (e) {
		e.preventDefault();

		$(this).toggleClass("active");
		$("nav").toggleClass("active");
	});
	$("header nav ul li a").click(function (e) {
		// if ($(this).data("scroll")) {
		// e.preventDefault();
		$("body,html").animate(
			{
				scrollTop: $($(this).attr("href")).offset().top,
			},
			1000
		);
		// }
	});
	if ($(".sec-what-is-insurance .owl-carousel").length > 0) {
		$(".sec-what-is-insurance .owl-carousel").owlCarousel({
			loop: true,
			margin: 10,
			autoplayHoverPause: true,
			items: 1,
			dots: true,
			autoplay: true,
			autoplayTimeout: 5000,
			autoplaySpeed: 1000,
			dotsSpeed: 1000,
			responsive: {
				0: {
					items: 1,
				},
				768: {
					items: 2,
					margin: 40,
				},
				1200: {
					items: 1,
				},
			},
		});
	}
	if ($(".feedback .owl-carousel").length > 0) {
		$(".feedback .owl-carousel").owlCarousel({
			loop: true,
			margin: 10,
			items: 1,
			dots: false,
			nav: true,
			autoplay: true,
			autoplayTimeout: 8000,
			autoplaySpeed: 2000,
			navSpeed: 2000,
		});
	}
});
