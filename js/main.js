$(document).ready(function(){
    $('.navbar-toggler').click(function(){
      $('nav').addClass('add-nav')

    })

     
    $('.center').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: false,
      arrows: true,
      dots: true,
      autoplaySpeed: 2000,

      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });




      // masonry grid
       // init Isotope after all images have loaded
       var $grid = $('.list').isotope({
        itemSelector: '.list-item',
        masonry: {
        horizontalOrder: false,
        verticalOrder: true,
        }
        });
    
   
     // filter items on button click
      $('.filter-btn').on( 'click', 'button', function() {
          var filterValue = $(this).attr('data-filter');
          $grid.isotope({ filter: filterValue });
          $( '.filter-btn button' ).removeClass( 'is-active' );
          $( this ).addClass( 'is-active' );
        });

        // $('a[href^="#"]').on('click',function (e) {
        //   e.preventDefault();
        //   var target = this.hash;
        //   var $target = $(target);
        //   $('html, body').stop().animate({
        //       'scrollTop': $target.offset().top
        //   }, 900, 'swing', function () {
        //       window.location.hash = target;
        //   });
  
        // });

});

$(window).scroll(function(){
  if($(this).scrollTop() > 1){
      $('nav').addClass('add-nav')
  }
  else{
    $('nav').removeClass('add-nav')
  }
 
})


var $animation_elements = $('.starting');
      var $window = $(window);

      function check_if_in_view() {
        var window_height = $window.height();
        var window_top_position = $window.scrollTop() + 700;
        var window_bottom_position = (window_top_position + window_height);

        $.each($animation_elements, function() {
          var $element = $(this);
          var element_height = $element.outerHeight();
          var element_top_position = $element.offset().top + 800;
          var element_bottom_position = (element_top_position + element_height);

          //check to see if this current container is within viewport
          if ((element_bottom_position >= window_top_position) &&
          (element_top_position <= window_bottom_position)) {
          $element.addClass('in-view');
        } else {
          $element.removeClass('in-view');
        }

        });
      }
      $window.on('scroll resize', check_if_in_view);
      $window.trigger('scroll', check_if_in_view);




