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
            var artistName = prompt("Artistaaaaaaaa", "Air");
            var artistAlbum = prompt("Albummmmmmm", "Air");
            $.ajax({
                url: "http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=08963bdec6bde5d6189e3d7dc86fa6ac&artist="+artistName+"&album="+artistAlbum+"&format=json"
            }).then(function(data) {
               $('.lasf-fm-album-name').show().append(data.album.name);
               $('.lasf-fm-album-artist').show().append(data.album.artist);
               $('.lasf-fm-album-playcount').show().append(data.album.playcount);
               $('.lasf-fm-album-listeners').show().append(data.album.listeners);
               $('.lasf-fm-album-img').show().append("<img src="+data.album.image[4]["#text"]+" />");
               $("img[src='"+data.album.image[4]["#text"]+"']").addClass("img-responsive");
               $("#botaorodar").hide();
               $("#botaoresetar").show();
               $(".nohr").show();
            });
        }

        $('#botaoresetar').click(function() {
            location.reload();
        });

// JQuery rest api test flickr
(function() {
          var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
          $.getJSON( flickerAPI, {
            tags: "mount rainier",
            tagmode: "any",
            format: "json"
          })
            .done(function( data ) {
              $.each( data.items, function( i, item ) {
                $( "<img>" ).attr( "src", item.media.m ).appendTo( "#images" );
                if ( i === 3 ) {
                  return false;
                }
              });
            });
        })();


        // JQuery rest api test name

        function myFunctionName() {
            var person = prompt("Nomeeeeeee", "Harry Potter");
            if (person != null) {
                document.getElementById("nameUser").innerHTML =
                "Olááááá " + person + "! Tainha, vinho e muita @#%$";
            }
        }

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