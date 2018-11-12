
      // Initial array of animals
      var animals = ["Cat", "Dog", "Zebra", "Lion"];
      const APIkey = "Xh77ZakqrTb0oj9MNEtgN8pyWM7hqHJo"
      var limit = 10
      
// function for getting gifs of animals
$("#buttonsAdded").on("click", ".animal",function() {
    var animalName = $(this).attr("data-name")
    
    console.log(animalName); 
    console.log(animalName)

    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=" + APIkey + "&q="+ animalName +"&limit=" + limit + "&rating=pg"
    console.log(queryURL)
    $.ajax({
        url:queryURL, 
        method:"GET",
  
    }).then(function(response){
        for(i = 0; i < response.data.length; i++) {
        
        var animalDiv = $("<div class = 'animalGif'>"); 
        var rating = response.data[i].rating
        console.log(response)
        var ratingDisplay = $("<p>").text("Rating: "+ rating); 
        animalDiv.append(ratingDisplay); 
        var imageURL = response.data[i].images.fixed_height_still.url
        var image = $("<img class = 'state'>")
        image.attr("src", imageURL)
        image.attr("data-still", imageURL); 
        image.attr("data-animate", response.data[i].images.original)
        image.attr("data-state", "still")
        animalDiv.append(image); 
        $("#animalContent").append(animalDiv); 
        }

    })
})

$(document).on("click", ".state", function(){
    var imgState = $(this).attr("data-state");
    
    if (state === "still") {
        $(this).attr("data-state", "animated")} 
        else {
            $(this).attr("data-state", "still");
            $(this).attr("src", $(this).attr("data-still"));
        }
    });
     



       // Function for rendering buttons to page
      function createButtons() {

        $("#buttonsAdded").empty();
        for (var i = 0; i < animals.length; i++) {

          // dynamicaly generating buttons for each movie in the array
          var a = $("<button>");
          a.addClass("animal");
          a.attr("data-name", animals[i]);
          a.text(animals[i]);
          console.log(a)
          $("#buttonsAdded").append(a);
        }
      }
// event for submit button when pressed to push new animals to array
      $("#add-animal").on("click", function(event) {
        event.preventDefault();
    
        var inputAnimal = $("#animal-input").val().trim();


        animals.push(inputAnimal);

        
        createButtons();

      });

    
      