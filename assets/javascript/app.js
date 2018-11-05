
      // Initial array of animals
      var animals = ["Cat", "Dog", "Zebra", "Lion"];

      
      function alertMovieName() {
        var animalName = $(this).attr("data-name");
        alert(animalName); 
 
      }

      // Function for rendering buttons to page
      function createButtons() {

        // $("#buttonsAdded").empty();
        for (var i = 0; i < animals.length; i++) {

          // dynamicaly generating buttons for each movie in the array
          var a = $("<button>");
          a.addClass("animal");
          a.attr("data-name",animals[i]);
          a.text(animals[i]);
          $("#buttonsAdded").append(a);
        }
      }

      $("#add-animal").on("click", function(event) {
        event.preventDefault();
    
        var animal = $("#animal-input").val().trim();


        animals.push(animal);

        
        createButtons();

      });
      