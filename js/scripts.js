console.log("hello");

// array where all my jokes live.
var jokes = [
    "To the person who stole my calendar...", "Mark my words, your days are numbered.",
    "Can a kangaroo jump higher than the Empire State Building?", "Of course. The Empire State Building can't jump",
    "When does a joke become a 'dad' joke?", "When it becomes apparent.",
    "What do you call a cow with no legs", "Ground Beef",
    "How did the Butcher introduce his wife?", "Meet Patty"]

// the variable $jokeParagraph will target the div .joke 
// and then target the p tag within the joke. This points
// to the location I want the text to be replaced
var $jokeParagraph = $(".joke > p");
// array starts at zero rather than 1. So setting the 
// var to zero is telling it to start with the 
// first item in the array.
// then we target the html and the div joke and tell it
// to show the current joke. Using ++ is shorthand rather than
// writing curentJoke + 1. Used for looping, because once we hit
// the end of the array we need to start from the beginning.
var currentJoke = 0
$jokeParagraph.html(jokes[currentJoke++]);

// targets the joke paragraph, when user clicks, event starts
// current joke displays. Use an if statement to tell the
// function to start at the beginning of the array when we hit
// the end of the array. using jokes.length means we can
// add more jokes to the array, rather than having to do the math
// and updating how big the array is every time.
$jokeParagraph.on("click", function (e) {
    $jokeParagraph.html(jokes[currentJoke++])
// >= means greater than or equal to. So if the current joke
// is greater than or equal to the length of the array containing
// the jokes, loop and start at the beginning of the array.
// if not using jokes.length and instead put in the exact 
// number of jokes, would have to set currentJoke to -1 for it
// to truely start back at the beginning of array.
    if (currentJoke >= jokes.length) {
        currentJoke = 0
    }
})

//2 colors. Blue for Joke, Pink for Answer.
var colors = [ '#4158D0', '#C850C0']
//target body
var $colorBox = $('body')
var currentColor = 0
$colorBox.css("background-color", colors[currentColor++]);

$colorBox.on("click", function(e) {
	$colorBox.css("background-color", colors[currentColor++]);
			if (currentColor >= colors.length) {
				currentColor = 0
	}
})