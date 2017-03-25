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
	$(window).scroll(function(){
		// dynamic menu highlight
		var k = 10; // divide menu section to k slices
		var idx = getIndexOfSubsection($('section.menu'), k);
		if (!(idx > (k-4)/2 && idx < (k+4)/2+1)) return;
		idx = idx - (k-4)/2;
	    $('.overview-list > a:nth-child(' + idx + ')').css("background-color", "green");
	    $('.overview-list > a:not(.overview-list > a:nth-child(' + idx + '))').css("background-color", "black");
	    
	    // update images and titles
	    var menuTypes = ['appetizer', 'pasta', 'meat', 'dessert'];
	    var menuNames = [
	    ['Bruschette with Tomatoes', 'Green Rolls', 'Eggplants', 'Bruschette', 'Meatballs', 'Spicy Beans'],
	    ['Carls Pasta', 'Italian Pasta', 'Semolina Pasta', 'Pasta con Broccoli', 'Crawfish Pasta', 'Taco Pasta'],
	    ['Duck Confit', 'Baked Fish', 'Steak', 'Crawfish', 'Veggie Beef', 'Chicken'],
	    ['Tiramisu', 'Cheesecake', 'Cannoli', 'Ice Cream', 'Mille-feuille', 'Mafia'],
	    ];
	    for (var i = 0; i < 6; i++) {
	    	var row = Math.floor(i / 2) + 1;
	    	var col = i % 2 + 1;
	    	var imageName = menuTypes[idx-1] + '-' + i + '.jpg';
	    	var viewContent = '.imageview > section.row:nth-child(' + row + ') > section:nth-of-type(' + col + ') > .view-content';
		    $(viewContent).css('background-image', 'url(../../images/'+ imageName);
		    $(viewContent + ' a').text(menuNames[idx-1][i]);	
		    var j = i + 1;
		    $('section > .modal:nth-child(' + j + ') figure').css('background-image', 'url(../../images/'+ imageName);
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
});
