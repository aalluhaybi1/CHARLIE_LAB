$(document).ready(function () {
  console.log(
    "Top: " + $("img").position().top + " Left: " + $("img").position().left
  );

  // alert("Top: " + $("img").position().top + " Left: " + $("img").position().left);


  $(document).ready(function() {
    // Make the dogePic draggable within the containment-wrapper
    $("#dogePic").draggable({ containment: "#containment-wrapper" });
  });


      // if( img is far right side  then ) user wins.

      let dogeLeft = $("img").position().left;

      if (dogeLeft > 300) {
        console.log("we above 300", dogeLeft);

        $("p").text("you won. good for you.");

        $("img").attr("src", "https://picsum.photos/200/300");
        // $("#my_image").attr("src","second.jpg");
      } else {
        console.log("we NOT above 500");
      }
    },
  );

  //TODO: if position is on the far rihgt side, tell user they won
;