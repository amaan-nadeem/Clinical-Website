
      $(document).ready(function(){
        // Activate Carousel with a specified interval
        $("#myCarousel").carousel({interval: 2000});
              
        // Enable Carousel Indicators
        $(".item1").click(function(){
          $("#myCarousel").carousel(0);
        });
        $(".item2").click(function(){
          $("#myCarousel").carousel(1);
        });
        $(".item3").click(function(){
          $("#myCarousel").carousel(2);
        });
          
        // Enable Carousel Controls
        $(".carousel-control-prev").click(function(){
          $("#myCarousel").carousel("prev");
        });
        $(".carousel-control-next").click(function(){
          $("#myCarousel").carousel("next");
        });
      });


      /* Form Validation */
      $(document).ready(function(){
          var formAction = $("#contactForm").attr("action");
          $("#contactForm").attr("action", formAction + "?thankyou=1");
      });


      ScrollReveal().reveal('.info-col', {delay: 200});
      ScrollReveal().reveal('.contact-form', {delay: 200});
      ScrollReveal().reveal('.services-row', {delay: 200});