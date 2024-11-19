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
    <!-- Ajoute ici les 8 carreaux -->
    <div class="tile" data-order="1" style="background-image: url('image/1.PNG');"></div>
    <div class="tile" data-order="2" style="background-image: url('image/2.PNG');"></div>
    <div class="tile" data-order="3" style="background-image: url('image/3.PNG');"></div>
    <div class="tile" data-order="4" style="background-image: url('image/4.PNG');"></div>
    <div class="tile" data-order="5" style="background-image: url('image/5.PNG');"></div>
    <div class="tile" data-order="6" style="background-image: url('image/6.PNG');"></div>
    <div class="tile" data-order="7" style="background-image: url('image/7.PNG');"></div>
    <div class="tile" data-order="8" style="background-image: url('image/8.PNG');"></div>
    <!-- Cette div représente la case vide -->
    <div class="tile empty" data-order="9"></div>
  </div>
  <button id="restartButton">Recommencer</button>
  <div id="message" class="message"></div>
</body>
</html>