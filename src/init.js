$(document).ready(function(){
  window.dancers = [];
  var backgroundImages = [
    'http://wallpapercave.com/wp/kSQdCxM.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/All_Gizah_Pyramids.jpg/1920px-All_Gizah_Pyramids.jpg',
    'https://s-media-cache-ak0.pinimg.com/736x/d4/ff/67/d4ff679afc3c57a34b85c36b5b7aace2.jpg',
    'http://scitechdaily.com/images/Scientists-Measure-the-Deformation-of-the-Moon-Due-to-Earths-Gravity.jpg',
    'http://lorenaalexandragomez.com/wp-content/uploads/2014/08/the-jungle-wordpress.jpg'
  ];
  var currentBackgroundIndex = 0;

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name"); // new BlinkyDancer

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName]; // window [makeBlinkyDancer]


    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(), // top
      $("body").width() * Math.random(),  // left
      (Math.random() + .25) * 1000
    );

    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });

  var onChangeBackground = function(event) {
    if (currentBackgroundIndex === backgroundImages.length - 1) {
      currentBackgroundIndex = 0;
    } else {
      currentBackgroundIndex++;
    }
    var url = backgroundImages[currentBackgroundIndex];
    $('body').css('background-image', 'url(' + url + ')');
  };

  $('.backgroundButton').on('click', onChangeBackground);
  onChangeBackground();

  $('.lineUpButton').on('click', function() {
    var newLeft = Math.random() * $('body').width();
    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].lineUp(newLeft);
    }
  });

  $('.nearestNeighborButton').on('click', function() {
    var dancer;
    for (var i = 0; i < window.dancers.length; i++) {
      dancer = window.dancers[i];
      dancer.nearestDancer = dancer.nearestNeighbor();
      dancer.isMovingCloser = true;
      console.log(dancer);
    }
  });
});
