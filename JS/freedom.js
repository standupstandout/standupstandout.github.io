var freedompics=["https://apparatusmag.files.wordpress.com/2016/02/black-history-month.gif","http://artgallery.yale.edu/sites/default/files/event-images/ag-obj-210960_friedlander_woman_hand_on_hip_011917conversation_0.jpg","http://media3.artspace.com/media/bob_henriques/martin_luther_king_speaking_side/bob_henriques_martin_luther_king_speaking_side_320x320_c.jpg","http://americanhistory.si.edu/sites/default/files/A200%20Flyer%252C%201957%20Prayer%20Pilgrimage%20LC%20loan.jpg"]
var current=0
setInterval(function(){
	if (current == freedompics.length-1){
		current = 0;
		$("#photoscroll img").attr("src", freedompics[current]);
	}else{
		current++;
		console.log(current);
		$("#photoscroll img").attr("src", freedompics[current]);
	}
},5000); 