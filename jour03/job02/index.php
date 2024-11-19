<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="style.css">
  <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
  <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js"></script>
  <link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
  <script src="script.js"></script>
</head>
<body>
  <div class="container" id="puzzle">
    <div class="dropzone" data-order="1"><img src="piece-arc/arc1.png" class="image" data-order="1" alt="1"></div>
    <div class="dropzone" data-order="2"><img src="piece-arc/arc2.png" class="image" data-order="2" alt="2"></div>
    <div class="dropzone" data-order="3"><img src="piece-arc/arc3.png" class="image" data-order="3" alt="3"></div>
    <div class="dropzone" data-order="4"><img src="piece-arc/arc4.png" class="image" data-order="4" alt="4"></div>
    <div class="dropzone" data-order="5"><img src="piece-arc/arc5.png" class="image" data-order="5" alt="5"></div>
    <div class="dropzone" data-order="6"><img src="piece-arc/arc6.png" class="image" data-order="6" alt="6"></div>
  </div>
  <button id="shuffleButton">Mélanger</button>
  <button id="checkButton">Vérifier</button>
  <div id="message" class="message"></div>
</body>
