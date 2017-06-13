// === assignment with gifs ====
//creating array that will be changed later to button
var topics = ["jimmy fallon","Chelsea Handler","jimmy kimmel","james corden","letterman",
"trevor noah","chris rock","john oliver","whoopi Goldber","will ferrel","john stewart",
"jonah hill","seinfeld","kevin hart","Conan O'Brien"];
   //gif api key
   var ApiKey = "dc6zaTOxFJmzC";
   // create a function that will display our content on the html with the
   function displaySoccerClub(){
    $("#gifs-appear-here").empty();
    var comics = $(this).attr("data-name");
      // Constructing a queryURL using the topics name
      var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
      comics + "&api_key=dc6zaTOxFJmzC&limit=10";
      // Performing an AJAX request with the queryURL
      $.ajax({
        url: queryURL,
        method: "GET"
      }) .done(function(response) {
          //getting the data from the response
          var result = response.data;
          //creating a div that will hpold our variable
          var newDiv = $("<div>");
          //looping through our variable
          for(var i = 0; i < result.length; i++){
            // create a paragraph to hold our rating variable
            var p = $("<p>");
            // show our rating 
            p.text("Rating: " + result[i].rating);
            //create an image tag
            var img = $("<img>");
            //add class to our image
            img.addClass("picture");
            // show our image
            img.attr("src", result[i].images.fixed_height.url);
            // prepend the paragraph a
            newDiv.prepend(p);
            // prepend the image
            newDiv.prepend(img);
            // dump this to our html
            $("#gifs-appear-here").prepend(newDiv);
          }

        });
      
    }

    // if ( #comedy-input == "null") {
    //   alert("please enter your a comedian");

    // };

// lets create a button for our function.
function createBtn(){
      // lets empty our content before we create new one
      $("#comedian-view").empty();
      //loop through our topics variable
      for (var i = 0; i < topics.length; i++) {
        
        var newBtn = $("<button>");
        newBtn.addClass("comedian ");
        newBtn.attr("data-name",topics[i]);
        newBtn.text(topics[i]);
        $("#comedian-view").append(newBtn);
      }
    }

    function gifState () {
      var state = $(this).attr('data-name');

      if (state == 'still'){
        $(this).attr('src', $(this).data('animate'));
        $(this).attr('data-name', 'animate');
      }else{
        $(this).attr('src', $(this).data('still'));
        $(this).attr('data-name', 'still');
      }
    };

//a function that will add a club when a button is clicked
$("#add-comedian").on("click", function(event) {
  event.preventDefault();
        // This line of code will grab the input from the textbox
        var comedian = $("#comedy-input").val();
        // lets added our comedians
        topics.push(comedian);
        // Calling createBtns which handles our array
        createBtn();
      });

// Adding click event listeners to all elements with a class of "movie"
$(document).on("click",".comedian", displaySoccerClub);
//$(document).on('click',gifState);
      // Calling the renderButtons function to display the intial buttons
      createBtn();
