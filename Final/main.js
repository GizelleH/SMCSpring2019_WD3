// optional
    $('#recipeCarousel').carousel({
        interval: 2500
    });



    
      

       






$(document).ready(function() {

 
  // If Mobile, add background color when toggler is clicked
  $(".navbar-toggler").click(function() {
    if (!$(".navbar-collapse").hasClass("show")) {
      $(".navbar").addClass("bg-dark");
    } else {
      if ($(window).scrollTop() < 56) {
        $(".navbar").removeClass("bg-dark");
      } else {
      }
    }
  });

  $('#addCart').click(function(e){
                e.preventDefault();
                var acceptableValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
                var count = $('#Count').val();
                var currentCount = $('.cart-count').text();
                if(currentCount !== ""){
                    currentCount = parseInt(currentCount);
                }
                else {
                    currentCount = 0;
                }
                if(count !== ""){
                    console.log(parseInt(currentCount));
                    console.log(parseInt(count));
                    $('.cart-count').text(parseInt(currentCount)+parseInt(count));
                }
            })

});





  