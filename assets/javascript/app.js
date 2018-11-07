
      // Initial array of animals
      var animals = ["Cat", "Dog", "Zebra", "Lion"];
      const APIkey = "Xh77ZakqrTb0oj9MNEtgN8pyWM7hqHJo"
      var limit = 10
      
// function for getting gifs of animals
$("#buttonsAdded").on("click", function() {
    var animalName = $(this).attr("data-name")
    console.log(animalName)

    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=" + APIkey + "&q="+ animalName +"&limit=" + limit + "&rating=pg"
    console.log(queryURL)
    $.ajax({
        url:queryURL, 
        method:"GET",
  
    }).then(function(response){
        for(i = 0; i < response.data.length; i++) {
        
        var animalDiv = $("<div class = 'animalGif'>"); 
        // var rating = response.data.rating
        console.log(response)
        // var ratingDisplay = $("<p>").text("Rating: "+ rating); 
        // animalDiv.append(ratingDisplay); 
        var imgURL = response.data[i].images.fixed_height_still.url
        var image = $("<img>").attr("src",imgURL);
        animalDiv.append(image); 
        $("#animalContent").append(animalDiv); 
        }

    })
})
       // Function for rendering buttons to page
      function createButtons() {

        $("#buttonsAdded").empty();
        for (var i = 0; i < animals.length; i++) {

          // dynamicaly generating buttons for each movie in the array
          var a = $("<button>");
          a.addClass("animal");
          a.attr("data-name",animals[i]);
          a.text(animals[i]);
          $("#buttonsAdded").append(a);
        }
      }
// add on click event to push new animals to array
      $("#add-animal").on("click", function(event) {
        event.preventDefault();
    
        var inputAnimal = $("#animal-input").val().trim();


        animals.push(inputAnimal);

        
        createButtons();

      });

    
      