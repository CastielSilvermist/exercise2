console.log("hello");

var $one = $("#j1");
var $two = $("#a1");

var $three = $("#j2");
var $four = $("#a2");

var $five = $("#j3");
var $six = $("#a3");



// There must be an easier way. Replace text rather than que
// variables. Maybe an array? Unsure how to replace text on click.


$(".joke").on("click", function() {
	$one.hide();
	$two.show();

	$(".joke").on("click", function() {

		$two.hide();
		$three.show();

			$(".joke").on("click", function() {

				$three.hide();
				$four.show();
					$(".joke").on("click", function() {

						$four.hide();
						$five.show();
							
							$(".joke").on("click", function() {

							$five.hide();
							$six.show();
										
							});	
							
					});

			});
	});
	
});



