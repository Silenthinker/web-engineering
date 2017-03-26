function getIndexOfSubsection(elem, k) {
    var $elem = $(elem);

    // Get the scroll position of the page.
    var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');
    var viewportTop = $(scrollElem).scrollTop();
    var viewportMiddle = viewportTop + $(window).height() / 2.0;
    // Get the position of the element on the page.
    var elemTop = $elem.offset().top;
    var elemBottom = elemTop + $elem.innerHeight();
    var size = $elem.innerHeight() / k;
    if ((elemBottom <= viewportMiddle) || (elemTop >= viewportMiddle)) return -1;
    // console.log(elemTop - viewportMiddle);
    var idx = Math.ceil((viewportMiddle - elemTop) / size);
    return idx;
}

$(document).ready(function(){
	var menuTypes = ['appetizer', 'pasta', 'meat', 'dessert'];
    var menuNames = [
    ['Bruschette with Tomatoes', 'Green Rolls', 'Eggplants', 'Bruschette', 'Meatballs', 'Spicy Beans'],
    ['Home-made Carls Pasta', 'Italian Pasta', 'Semo Pasta', 'Veggie Pasta', 'Craw Pasta', 'Taco Pasta'],
    ['Special Duck Confit', 'Baked Fish', 'Swiss Steak', 'Crawfish', 'Veggie Beef', 'Asian Chicken'],
    ['Recommended Tiramisu', 'Cheesecake', 'Fired Cannoli', 'Ice Cream', 'Mille-feuille', 'Sweet Mafia'],
    ];
	$(window).scroll(function(){
		// dynamic menu highlight
		var k = 10; // divide menu section to k slices
		var idx = getIndexOfSubsection($('section.menu'), k);
		if (!(idx > (k-4)/2 && idx < (k+4)/2+1)) return;
		idx = idx - (k-4)/2;
		$('.menu .overview h3').text($('.overview-list > a:nth-child(' + idx + ')').text());
	    $('.overview-list > a:nth-child(' + idx + ')').css("background-color", "green").data("focused", 'true');
	    $('.overview-list > a:not(.overview-list > a:nth-child(' + idx + '))').css("background-color", "black").data("focused", "false");
	    // update images and titles
	    for (var i = 0; i < 6; i++) {
	    	var row = Math.floor(i / 2) + 1;
	    	var col = i % 2 + 1;
	    	var imageName = menuTypes[idx-1] + '-' + i + '.jpg';
	    	var viewContent = '.imageview > section.row:nth-child(' + row + ') > section:nth-of-type(' + col + ') > .view-content';
		    $(viewContent).css('background-image', 'url(./images/'+ imageName);
		    $(viewContent + ' a').text(menuNames[idx-1][i]);	
		    var j = i + 1;
		    $('section > .modal:nth-child(' + j + ') figure').css('background-image', 'url(./images/'+ imageName);
		    $('section > .modal:nth-child(' + j + ') h2').text(menuNames[idx-1][i]);
	    }
	});
	// disable scrolling in case of popup
	var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');
	var scrollTop;
	$('.front > a').click(function () {
		scrollTop = $(scrollElem).scrollTop();
		$('body').css({'position': 'fixed'}).css({top: -1*scrollTop});
	});
	$('.popup .closebtn').click(function () {
		$('body').css({'position': 'static'});
		$(window).scrollTop(scrollTop);
	});

	// highlight menu when hover
	function changeImgText(idx) {
		for (var k = 0; k < 6; k++) {
	    	var row = Math.floor(k / 2) + 1;
	    	var col = k % 2 + 1;
	    	var imageName = menuTypes[idx-1] + '-' + k + '.jpg';
	    	var viewContent = '.imageview > section.row:nth-child(' + row + ') > section:nth-of-type(' + col + ') > .view-content';
		    $(viewContent).css('background-image', 'url(./images/'+ imageName);
		    $(viewContent + ' a').text(menuNames[idx-1][k]);	
		}
	}

	$('.overview-list > a').hover(
		function () {
			$(this).css("background-color", "green");
			var idx;
			for (var j = 1; j < 5; j++) {
				if ($(this).attr("alt") == menuTypes[j-1]) {
					idx = j;
				}
			}
			changeImgText(idx);
		},
		function () {
			if ($(this).data("focused") == 'false') {
				$(this).css("background-color", "black");
				for (var i = 1; i < 5; i++) {
					var item = $('.overview-list > a:nth-child(' + i + ')'), focusedItem;
					if (item.data("focused") == "true") {
						focusedItem = item;
					}
				}
				for (var j = 1; j < 5; j++) {
					if (focusedItem.attr("alt") == menuTypes[j-1]) {
						idx = j;
					}
				}
				changeImgText(idx);
			}
		}
	)
});
