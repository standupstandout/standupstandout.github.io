// var pics= ["http://2.bp.blogspot.com/-ZKlWKerByIA/TlarDZ747NI/AAAAAAAAAFs/4KbhzioapF0/s1600/hippie1.jpg","http://cdn3.volusion.com/xmxml.hphyl/v/vspfiles/photos/P3552-2.jpg?1425292216","http://news.bbc.co.uk/media/images/39894000/jpg/_39894984_redgrave_238.jpg","https://upload.wikimedia.org/wikipedia/en/5/52/Flower_Power_by_Bernie_Boston.jpg"]
$('h1').on("click", function(){
	$("h1").hide();
});

    $('#photoscroll>img:gt(0)').hide();

    setInterval(function()
    {
        $('#photoscroll :first-child').fadeOut(1000)
            .next().fadeIn(1000).end().appendTo('#photoscroll');
    },5000);        
}