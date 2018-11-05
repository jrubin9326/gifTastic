
      // Initial array of animals
      var animals = ["Cat", "Dog", "Zebra", "Lion"];

      
      function alertMovieName() {
        var animalName = $(this).attr("data-name");
        alert(animalName); 
 
      }

      // Function for rendering buttons to page
      function createButtons() {

        $("#buttons-view").empty();

        // Looping through the array of movies
        for (var i = 0; i < animals.length; i++) {

          // Then dynamicaly generating buttons for each movie in the array
          var a = $("<button>");
          a.addClass("animal");
          a.attr("data-name",animals[i]);
          a.text(animals[i]);
          $("#buttons-view").append(a);
        }
      }

      