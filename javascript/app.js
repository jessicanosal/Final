$(document).ready(function(){
	// when the user scrolls
	var initialScrollPos = 0;

	// height() gives up height in pixels
	var heightOfViewport = $('body').height()/5;

	// array of colors 
	var colors=["#324058", "#cc9d8f", "#dd4a6b", "#95bec3", "#2e3131"];
	var bannerText = ["Is School over yet?", "Section 2", "Section 3", "section 4", "section 5"]
	// var imgArray=["media/pavilion/zen.jpg","media/drawings/space.jpg"];
	// var newImg= $("<img src=" + imgArray[imgCounter] + ">");
	// var imgCounter = 0;
	var sectionIndex= 0;


	$(window). on('scroll',function(){
		var currentScrollPos = $(this).scrollTop();
		console.log(currentScrollPos);

		// initialScrollPos - how far up/down had you scrolled?
		// currentScrollPos - how far up/down are you currently scrolled?

		// numbers are going up - I'm scrolling down
		if(currentScrollPos > initialScrollPos){
			console.log("yeah im scrolling down");
			// if i enter this if statement, user is entering a new section
			if($(window).scrollTop() > heightOfViewport*(sectionIndex+1)){
				console.log("new section");
				sectionIndex += 1;
				// imgCounter += 1;
				// $(".image").append(newImg);
				$("body").css("background", colors[sectionIndex]);
				// $("body").css("background", "linear-gradient(to left, red, blue)")


			}
		// else statement tells us user is scrolling up 
		}else{
			// if i enter this statement the user is going back a section 
			if($(window).scrollTop() <= heightOfViewport*(sectionIndex)){
				sectionIndex -= 1;
				// $(".banner").html(bannerText[sectionIndex]);
				$("body").css("background", colors[sectionIndex]);	
			}
			console.log("UPPPP")
		}

		initialScrollPos = currentScrollPos;


	})
})