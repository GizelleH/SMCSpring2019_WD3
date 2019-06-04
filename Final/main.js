// optional
    $('#recipeCarousel').carousel({
        interval: 2500
    });



        $(document).ready(function(){
            $('#exampleModal').modal({
                show:false,
                backdrop:false
            });
            console.log($('Document is now ready.'));
        });



$('#playButton').click(function () {
    $('#turrellcarousel').carousel('cycle');
});
$('#pauseButton').click(function () {
    $('#turrellcarousel').carousel('pause');
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


    

  $(document).ready(function(){

          $("input[type=submit]").attr("disabled", "disabled");
            $('.form-control').blur(function(){
                    var alertMessage = '<p>Please fill out field.</p>';
                    if( $(this).val().length === 0 ) {
                        $(this).parent().append(alertMessage);
                    }
                    if( $('#name' && '#email' && '#message').val().length > 0){
                        $('#submitBtn').removeAttr('disabled');
                    };
            });
    })
    













  