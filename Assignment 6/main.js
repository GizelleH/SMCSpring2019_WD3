$(document).ready(function(){

	$(".carousel").carousel({

		interval: 	3000,
		keyboard:  	true

	});

	$(document).ready(function(){
  $('.modal').modal('show');
});

	

	$(".carousel-pauser").click(function() {


			$(".carousel").carousel("pause");


	});

	$(".carousel").on("slid.bs.carousel",function(event){


		console.log(event);
	});

	$(".modal-popper").click(function(){


		$(".modal").modal({


		backdrop: "static"
		
	});

	});

});