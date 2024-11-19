$(document).ready(function() {
  function isSolvable(tiles) {
    let inversions = 0;
    let tileArray = tiles.map(function() { return $(this).data('order'); }).get();
    
    for (let i = 0; i < tileArray.length - 1; i++) {
      for (let j = i + 1; j < tileArray.length; j++) {
        if (tileArray[i] > tileArray[j]) {
          inversions++;
        }
      }
    }

    // Si le nombre d'inversions est pair, le puzzle est solvable
    return inversions % 2 === 0;
  }

  function shuffle() {
    let tiles = $('#puzzle .tile').not('.empty');

    do {
      tiles.sort(function() {
        return Math.random() - 0.5;
      }).appendTo('#puzzle');
    } while (!isSolvable(tiles));

    $('#puzzle').append($('.empty'));  // Assure que la case vide reste en dernière position
  }

  function checkWin() {
    let win = true;
    $('#puzzle .tile').each(function(index, tile) {
      if ($(tile).data('order') != index + 1) {
        win = false;
        return false;
      }
    });
    if (win) {
      $('#message').text('Vous avez gagné!').css('display', 'block');
      $('.tile').off('click');
    }
  }

  function moveTile() {
    let emptyTile = $('.empty');
    let emptyIndex = emptyTile.index();
    let clickedTile = $(this);
    let clickedIndex = clickedTile.index();

    let isAdjacent = (function() {
      let emptyRow = Math.floor(emptyIndex / 3);
      let emptyCol = emptyIndex % 3;
      let clickedRow = Math.floor(clickedIndex / 3);
      let clickedCol = clickedIndex % 3;

      return (
        (emptyRow === clickedRow && Math.abs(emptyCol - clickedCol) === 1) ||
        (emptyCol === clickedCol && Math.abs(emptyRow - clickedRow) === 1)
      );
    })();

    if (isAdjacent) {
      emptyTile.before(clickedTile.clone(true));
      clickedTile.before(emptyTile);
      clickedTile.remove();
      checkWin();
    }
  }

  $('#puzzle').on('click', '.tile', moveTile);
  $('#restartButton').on('click', function() {
    shuffle();
    $('#message').css('display', 'none');
    $('#puzzle .tile').on('click', moveTile);
  });

  shuffle();
});
