var blackpics=["https://s-media-cache-ak0.pinimg.com/236x/6b/71/d0/6b71d0d369e644933bdd6ca0e56b9426.jpg","https://s-media-cache-ak0.pinimg.com/originals/6e/99/f2/6e99f23999ee189fe146ed1a873ae3c4.jpg","http://static.highsnobiety.com/wp-content/uploads/2016/02/23121108/black-panthers-influence-music-fashion-01-960x640.jpg","http://static.highsnobiety.com/wp-content/uploads/2016/02/01174714/Black-Panther-Main-1200x800.jpg"]
var current=0;
setInterval(function(){
	if (current == blackpics.length-1){
		current = 0;
		$("#photoscroll img").attr("src", blackpics[current]);
	}else{
		current++;
		console.log(current);
		$("#photoscroll img").attr("src", blackpics[current]);
	}
},5000); 