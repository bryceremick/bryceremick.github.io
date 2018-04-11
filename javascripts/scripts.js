$(document).ready(function () {


	var windowWidth = $(window).width();
	var ua = window.navigator.userAgent;
	var iOS = !!ua.match(/iPad/i) || !!ua.match(/iPhone/i);
	var webkit = !!ua.match(/WebKit/i);
	var iOSSafari = iOS && webkit && !ua.match(/CriOS/i);

	feather.replace({
		'height': 25,
		'width': 25,
		'stroke-width': 1.5
	});

	$(".knowledge").click(function () {
		$('html,body').animate({
				scrollTop: $(".grid-container2").offset().top
			},
			'slow');
	});
	$(".code").click(function () {
		$('html,body').animate({
				scrollTop: $(".grid-container3").offset().top
			},
			'slow');
	});
	$(".message").click(function () {
		$('html,body').animate({
				scrollTop: $(".grid-container4").offset().top
			},
			'slow');
	});
	$(".graph-bar").each(function () {
		$(this).css("border-right", "10px solid " + color_rand());
	});


	var rotated = false;
	$('.box').hover(function () {
		if (iOSSafari) {
			if (!rotated) {
				$(this).find(".content").css({
					"transform": "rotateX(180deg)"
				});
				rotated = true;
			} else {
				$(this).find(".content").css({
					"transform": "rotateX(0deg)"
				});
				rotated = false;
			}
		}
	});

	$(document).scroll(function (e) {
		var scrollAmount = $(window).scrollTop();
		var documentHeight = $(document).height();
		var windowHeight = $(window).height();

		var scrollPercent = (scrollAmount / (documentHeight - windowHeight)) * 100;
		var roundScroll = Math.round(scrollPercent);

		if (scrollPercent <= 3) {
			$(".message").css("visibility", "initial");
			$(".code").css("visibility", "initial");
			$(".knowledge").css("visibility", "initial");
			$(".icon").css("opacity", "1");
		} else if (scrollPercent > 3 && scrollPercent <= 36) {
			$(".message").css("visibility", "initial");
			$(".code").css("visibility", "hidden");
			$(".knowledge").css("visibility", "hidden");
			if (windowWidth >= 0 && windowWidth <= 599)
				$(".message").css("opacity", ".9");
		} else if (scrollPercent > 36 && scrollPercent < 70) {
			$(".message").css("visibility", "initial");
			$(".code").css("visibility", "hidden");
			$(".knowledge").css("visibility", "hidden");
			if (windowWidth >= 0 && windowWidth <= 599)
				$(".message").css("opacity", ".9");
		} else {
			$(".message").css("visibility", "hidden");
			$(".code").css("visibility", "hidden");
			$(".knowledge").css("visibility", "hidden");
			if (windowWidth >= 0 && windowWidth <= 599)
				$(".message").css("opacity", ".9");
		}

		if (scrollPercent > 8 && scrollPercent <= 36) {
			move_graph_bars();
		}

	});
	//Random color
	function color_rand() {
		var CSS_COLOR_NAMES = ["Aqua", "Aquamarine", "Black", "Blue", "BlueViolet", "Brown", "CadetBlue", "Chartreuse", "Chocolate", "Coral", "CornflowerBlue", "Crimson", "Cyan", "DarkBlue", "DarkCyan", "DarkGoldenRod", "DarkGray", "DarkGrey", "DarkGreen", "DarkKhaki", "DarkMagenta", "DarkOliveGreen", "Darkorange", "DarkOrchid", "DarkRed", "DarkSalmon", "DarkSeaGreen", "DarkSlateBlue", "DarkSlateGray", "DarkSlateGrey", "DarkTurquoise", "DarkViolet", "DeepPink", "DeepSkyBlue", "DimGray", "DimGrey", "DodgerBlue", "FireBrick", "ForestGreen", "Fuchsia", "Gold", "GoldenRod", "Gray", "Grey", "Green", "GreenYellow", "HotPink", "IndianRed", "Indigo", "Khaki", "LawnGreen", "LightBlue", "LightCoral", "LightCyan", "LightGray", "LightGrey", "LightGreen", "LightPink", "LightSalmon", "LightSeaGreen", "LightSkyBlue", "LightSlateGray", "LightSlateGrey", "LightSteelBlue", "Lime", "LimeGreen", "Magenta", "Maroon", "MediumAquaMarine", "MediumBlue", "MediumOrchid", "MediumPurple", "MediumSeaGreen", "MediumSlateBlue", "MediumSpringGreen", "MediumTurquoise", "MediumVioletRed", "MidnightBlue", "MistyRose", "Moccasin", "NavajoWhite", "Navy", "Olive", "OliveDrab", "Orange", "OrangeRed", "Orchid", "PaleGoldenRod", "PaleGreen", "PaleTurquoise", "PaleVioletRed", "PeachPuff", "Peru", "Pink", "Plum", "PowderBlue", "Purple", "Red", "RosyBrown", "RoyalBlue", "SaddleBrown", "Salmon", "SandyBrown", "SeaGreen", "Sienna", "Silver", "SkyBlue", "SlateBlue", "SlateGray", "SlateGrey", "SpringGreen", "SteelBlue", "Tan", "Teal", "Thistle", "Tomato", "Turquoise", "Violet", "Wheat", "Yellow", "YellowGreen"];

		var color;
		var num = Math.floor(Math.random() * 121) + 1;
		var i = 0;
		for (i = 0; i < num; i++) {
			color = CSS_COLOR_NAMES[i];
		}
		//console.log(i + " " + color);
		return color;
	}

	function move_graph_bars() {
		/*html*/
		$(".bar-2 .graph-bar").css("width", "75%");
		/*css*/
		$(".bar-3 .graph-bar").css("width", "70%");
		/*js*/
		$(".bar-4 .graph-bar").css("width", "35%");
		/*c++*/
		$(".bar-5 .graph-bar").css("width", "60%");
		/*git*/
		$(".bar-6 .graph-bar").css("width", "65%");
		/*php*/
		$(".bar-7 .graph-bar").css("width", "12%");
		/*sql*/
		$(".bar-8 .graph-bar").css("width", "28%");
		/*jquery*/
		$(".bar-9 .graph-bar").css("width", "30%");
		/*sass*/
		$(".bar-10 .graph-bar").css("width", "65%");
		/*bootstrap*/
		$(".bar-11 .graph-bar").css("width", "20%");
		/*graph skillz*/
		$(".bar-12 .graph-bar").css("width", "85%");
	}











});