( function () {

  $('.hamburger-menu').on('click', function() {

      $( '.bar' ).toggleClass( 'animate' );
      $( '.bar' ).toggleClass( "on" );
      $( "nav ul" ).toggleClass( 'hidden' );

  } );

} )();