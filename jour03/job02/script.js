function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

$(document).ready(function() {
  function makeImagesDraggable() {
    $(".image").draggable({
      revert: "invalid",
      start: function(event, ui) {
        $(this).css("opacity", 0.5);
      },
      stop: function(event, ui) {
        $(this).css("opacity", "");
      }
    });

    $(".dropzone").droppable({
      accept: ".image",
      drop: function(event, ui) {
        $(this).append(ui.draggable);
        ui.draggable.css({
          top: 0,
          left: 0
        });
      }
    });
  }

  $("#shuffleButton").click(function() {
    let container = $("#puzzle");
    let images = container.find(".image").toArray();
    images = shuffle(images);
    container.empty();
    $.each(images, function(index, img) {
      let dropzone = $("<div>").addClass("dropzone").attr("data-order", $(img).data("order"));
      dropzone.append(img);
      container.append(dropzone);
    });
    makeImagesDraggable();
  });

  $("#checkButton").click(function() {
    let correct = true;
    $(".dropzone").each(function() {
      let img = $(this).find(".image");
      if (img.length === 0 || img.data("order") != $(this).data("order")) {
        correct = false;
      }
    });

    if (correct) {
      $("#message").text("Vous avez gagné").css("color", "green");
    } else {
      $("#message").text("Vous avez perdu").css("color", "red");
    }
  });

  makeImagesDraggable();
});