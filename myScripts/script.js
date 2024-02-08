$(document).ready(function () {
  console.log(
    "Top: " + $("#dogePic").position().top + " Left: " + $("#dogePic").position().left
  );

  $(document).ready(function () {
    // Make the dogePic draggable within the containment-wrapper
    $("#dogePic").draggable({
      containment: "#containment-wrapper",
      stop: function () {
        // if img is far right side then user wins.
        let dogeLeft = $("#dogePic").position().left;

        if (dogeLeft > 300) {
          console.log("we are above 300", dogeLeft);

          $("p").text("you won. good for you.");

          // Optionally, you can update the image source
          // $("#dogePic").attr("src", "https://picsum.photos/200/300");
        } else {
          console.log("we are NOT above 300");
        }
      },
    });
  });
});
