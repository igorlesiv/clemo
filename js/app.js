$(function() {

    // NAVIGATION TOGGLE
    (function navigationToggle(){
      var button = $( '#navToggle' );
      var navigation = $( '.mainNavigation ul' );

      button.click(function(){
        button.toggleClass("is-active");
        navigation.toggleClass("active");
      });

    })();

    // CAROUSELS INIT
    (function carouselsInit(){
      // Reviews Slider
      var reviewsSlider = $( '.reviewsSlider' );

      reviewsSlider.owlCarousel({
        singleItem: true,
        lazyLoad:true,
        autoHeight:true,
        responsiveClass:true,
        scrollPerPage:true
      });

      //Team Members Slider
      var teamsSlider = $( '.teamSlider' );

      teamsSlider.owlCarousel({
        lazyLoad:true,
        autoHeight:true,
        responsiveClass:true,
        scrollPerPage:true,
        items : 3,
        itemsDesktop : [1200,2],
        itemsDesktopSmall : [992,2],
        itemsTablet: [767,1],
        itemsMobile : false
      });

      // Custom Navigation for Team Members Slider
      var leftArrow = $( '.arrows .left' );
      var rightArrow = $( '.arrows .right' );

      leftArrow.click(function(){
        teamsSlider.trigger( 'owl.prev' );
      });

      rightArrow.click(function(){
        teamsSlider.trigger('owl.next');
      });

    })();

});
