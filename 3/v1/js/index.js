$(document).ready(function() {
	$(".idFinder").hover(function(){
		var currentID = this.id;
		$(this).siblings().each(function(){
			var currentClass = $(this).attr("class");
			if ($(this).is("." + currentID + "")) {
				$(this).attr('class', "" + currentClass +  " addOpac");
			} else if (!$(this).is("." + currentID + "")) {
				$(this).attr('class',"" + currentClass + " removeOpac");
			}
		});
	}, function() {
		var currentID = this.id;
		$(this).siblings().each(function(){
			var currentClass = $(this).attr("class");
			var remove = currentClass.replace(" removeOpac", '');
			var originalClass = currentClass.replace(" addOpac", '');
			if ($(this).is("." + currentID + "")) {
				$(this).attr('class', "" + originalClass + "");
			} else if (!$(this).is("." + currentID + "")) {
				$(this).attr('class', "" + remove + "");
			}
		});
	});
});
