// === assignment with gifs ====
//creating array that will be changed later to button
var topics = ["jimmy Fallon","Chelsea Handler","jimmy kimmel","james corden","letterman",
"Trevor Noah","Chris rock","john oliver","whoopi Goldberg","will ferrel","john stewart",
"Jonah hill","Seinfeld","kevin hart","Conan O'Brien"];
   //giphy api key
   var ApiKey = "dc6zaTOxFJmzC";
   // create a function that will display our content on the html with the
   function showComics(){
    $("#giphy").empty();
    var comics = $(this).attr("data-name");
      // Constructing a queryURL using the topics name
      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      comics + "&api_key=dc6zaTOxFJmzC&limit=10";
      // Performing an AJAX request with the queryURL
      $.ajax({
        url: queryURL,
        method: "GET"
      }) .done(function(response) {
        console.log(response);
          //getting the data from the response
          var result = response.data;
          //creating a div that will hold our variable
          var newDiv = $("<div>");
          //looping through our variable
          for(var i = 0; i < result.length; i++){
            // create a paragraph to hold our rating variable
            var p = $("<p>");
            p.addClass("rating-holder");
            // show our rating 
            p.html("Rating: " + result[i].rating);
            // since we have to show our solution in the form of animation
            var animated = response.data[i].images.fixed_height.url;
             // create a variable for the still image
             var still = response.data[i].images.fixed_height_still.url;
            //create an image tag
            var img = $("<img>");
            //add class to our image
            img.addClass("picture");
            // show where you will get stil 
            img.attr("data-still",still);
            // this will get us data from data animated
            img.attr("data-animate",animated);
            // string state
            img.attr('data-state', 'still');
            // image source
            img.attr('src', still);
            // append the paragraph a
            newDiv.append(p);
            // append the image
            newDiv.append(img);
            // dump this to our html
            $("#giphy").append(newDiv);
          }

        });
      
    }

// Function for starting and stoping the giphy sound
function startAndStop () {
  var state = $(this).attr("data-state");

  if (state == "still"){
    $(this).attr('src', $(this).data('animate'));
    $(this).attr("data-state","animate");
  }else{
    $(this).attr('src', $(this).data('still'));
    $(this).attr("data-state","still");
  }
};
    

// lets create a button for our function.
function createBtn(){
      // lets empty our content before we create new one
      $("#comedian-view").empty();
      //loop through our topics variable
      for (var i = 0; i < topics.length; i++) {
        // create button
        var newBtn = $("<button>");
        //add class to button
        newBtn.addClass("comedian ");
        //attirbutes to new button
        newBtn.attr("data-name",topics[i]);
        //add text to new button
        newBtn.text(topics[i]);
        //append the button
        $("#comedian-view").append(newBtn);
      }
    }

    
//a function that will add a picture when a button is clicked
$("#add-comedian").on("click", function(event) {
  event.preventDefault();
  // if ( #comedy-input == 0) {
  //     alert("please enter your a comedian");

  //   };
        // This line of code will grab the input from the textbox
        var comedian = $("#comedy-input").val();
        // lets added our comedians
        topics.push(comedian);
        // Calling createBtns which handles our array
        createBtn();
      });

// Adding click event listeners to all elements with a class of "movie"
$(document).on("click",".comedian", showComics);
$(document).on("click", ".picture", startAndStop);
// $(document).on('click',gifState);
      // Calling the renderButtons function to display the intial buttons
      createBtn();
