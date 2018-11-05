
      // Initial array of animals
      var animals = ["Cat", "Dog", "Zebra", "Lion"];

      
      
// function for getting gifs of animals
addAnimalGif = () => {
    var animalName = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/" + animalName +"?api_key=Xh77ZakqrTb0oj9MNEtgN8pyWM7hqHJo"

    $.ajax({
        url:queryURL, 
        method:"GET",
    }).then(function(response){
        var animalDiv = $("<div class = 'animalGif'"); 
        var rating = response.Rating;
        var ratingDisplay = $("<p>").text("Rating: "+ rating); 
        animalDiv.append(ratingDisplay); 
        var imgURL = respose.Poster; 
        var image = $("<img>").attr("src",imgURL);
        animalDiv.append(image); 
        $("animalContent").prepend(animalDiv); 
        

    })
}
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

    
      