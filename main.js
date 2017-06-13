// === assignment with gifs ====
//creating a variable for the 
   var topics = ["jimmy fallon","Chelsea Handler","jimmy kimmel","james corden","letterman",
   "trevor noah","chris rock","john oliver","whoopi Goldber","will ferrel","john stewart",
   "jonah hill","seinfeld","kevin hurt","Conan O'Brien"];
   //gif api key
   var ApiKey = "dc6zaTOxFJmzC";
   // create a function that will display our content on the html with the
   function displaySoccerClub(){
    //$("#clubs-view").empty();
    var groups = $(this).attr("data-name");
      // Constructing a queryURL using the topics name
      var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
      groups + "&api_key=dc6zaTOxFJmzC&limit=10";
      // Performing an AJAX request with the queryURL
      $.ajax({
        url: queryURL,
        method: "GET"
      }) .done(function(response) {
          //getting the data from the response
          var result = response.data;
          //creating a div that will hpold pur variable
          var gifDiv = $("<div class='newDiv'>");
          //looping through our variable
          for(var i = 0; i < result.length; i++){
            var p = $("<p>").text("Rating: " + result[i].rating);
            var img = $("<img>");
            img.attr("src", result[i].images.fixed_height.url);
            gifDiv.prepend(p);
            gifDiv.prepend(img);
            $("#gifs-appear-here").prepend(gifDiv);
          }

        });
      
    }

// lets create a button for our function.
    function createBtn(){
      // lets empty our content before we create new one
         $("#comedian-view").empty();
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
        // The movie from the textbox is then added to our array
        topics.push(comedian);
        // Calling renderButtons which handles the processing of our movie array
        createBtn();
      });

// Adding click event listeners to all elements with a class of "movie"
$(document).on("click",".comedian", displaySoccerClub);
$(document).on('click',gifState);
      // Calling the renderButtons function to display the intial buttons
      createBtn();
