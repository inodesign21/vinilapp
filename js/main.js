// Accordion Toggle Icon
  function toggleChevron(e) {
      $(e.target)
          .prev('.panel-heading')
          .find("i.indicator")
          .toggleClass('glyphicon-chevron-down glyphicon-chevron-up');
  }
  $('#accordion').on('hidden.bs.collapse', toggleChevron);
  $('#accordion').on('shown.bs.collapse', toggleChevron);

// JQuery rest api test last.fm
  $("#botaoresetar").hide();
  $(".lasf-fm-album-name").hide();
  $(".lasf-fm-album-artist").hide();
  $(".lasf-fm-album-playcount").hide();
  $(".lasf-fm-album-listeners").hide();
  $(".lasf-fm-album-img").hide();
  $(".nohr").hide();

  function myFunctionRodar() {
      var artistName = $('input[name=artistNameItem]').val();
      var artistAlbum = $('input[name=artistAlbumItem]').val();
      $.ajax({
          url: "http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=08963bdec6bde5d6189e3d7dc86fa6ac&artist="+artistName+"&album="+artistAlbum+"&format=json"
      }).then(function(data) {
         $('.lasf-fm-album-name').show().append("<p>"+data.album.name+"</p>");
         $('.lasf-fm-album-artist').show().append("<p>"+data.album.artist+"</p>");
         $('.lasf-fm-album-playcount').show().append("<p>"+data.album.playcount+"</p>");
         $('.lasf-fm-album-listeners').show().append("<p>"+data.album.listeners+"</p>");
         $('.lasf-fm-album-img').show().append("<img src="+data.album.image[4]["#text"]+" />");
         $("img[src='"+data.album.image[4]["#text"]+"']").addClass("img-responsive");
         $("#botaoresetar").show();
         $(".nohr").show();
         $('input[name=artistNameItem]').val('');
         $('input[name=artistAlbumItem]').val('');
      });
  }

  $('#botaoresetar').click(function() {
      location.reload();
  });


// JQuery effect
$( ".panel-heading" )
  .on( "mouseenter", function() {
    var styles = {
      opacity: 0.3
    };
    $( this ).css( styles );
  })
  .on( "mouseleave", function() {
    $(this).css({'opacity' : ''});
  });

/*
  $(document).ready(function(){

  $('div').hover(
    function(){
     $(this).addClass('active');
    },
    function(){
      $(this).removeClass('active');   
    }
  );

});

*/