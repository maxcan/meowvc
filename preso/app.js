$(function() { 
  Reveal.initialize({
    controls: true,
    progress: true,
    history: true,
    center: true,

    theme: Reveal.getQueryHash().theme, // available themes are in /css/theme
    transition: Reveal.getQueryHash().transition || 'default', // default/cube/page/concave/zoom/linear/fade/none

    // Optional libraries used to extend on reveal.js
    dependencies: [
      { src: 'reveal.js/lib/js/classList.js', condition: function() { return !document.body.classList; } },
      // { src: 'plugin/markdown/showdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
      // { src: 'plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
      { src: 'reveal.js/plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },
      { src: 'reveal.js/plugin/zoom-js/zoom.js', async: true, condition: function() { return !!document.body.classList; } },
      { src: 'reveal.js/plugin/notes/notes.js', async: true, condition: function() { return !!document.body.classList; } }
      // { src: 'plugin/remotes/remotes.js', async: true, condition: function() { return !!document.body.classList; } }
    ]
  });

  Reveal.addEventListener( 'slidechanged', function( event ) {
      // event.previousSlide, event.currentSlide, event.indexh, event.indexv
    try {
      if (event.currentSlide.id === 'show_comp') {
        $('#show_comp .iframe-wrapper').html('<iframe width="66%" height="66%" src="http://www.youtube.com/embed/PVho5vtXm0c?start=19&autoplay=1" frameborder="0" allowfullscreen></iframe>');
      } else {
        $('#show_comp .iframe-wrapper').html('');
      }
      
      if (event.currentSlide.id === 'show_climb') {
        $('#show_climb .iframe-wrapper').html('<iframe width="66%" height="66%" src="http://www.youtube.com/embed/GZr7jGa0ltM?start=19&autoplay=1" frameborder="0" allowfullscreen></iframe>');
      } else {
        $('#show_climb .iframe-wrapper').html('');
      }
      if (event.currentSlide.id === 'show_maru') {
        $('#show_maru .iframe-wrapper').html('<iframe width="66%" height="66%" src="http://www.youtube.com/embed/z_AbfPXTKms?start=265&autoplay=1" frameborder="0" allowfullscreen></iframe>');
      } else {
        $('#show_maru .iframe-wrapper').html('');
      }

    } catch (e) {
      console.log(e);
    }
  } );


});
