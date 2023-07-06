<!DOCTYPE html>
<html>
    <head>
        <title></title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">

    </head>
    <body>
<!-- Image and text -->
<nav class="navbar navbar-light bg-light">
    <a style="line-height: 50px;" class="navbar-brand" href="#">
      <img src="logo.png" width="50" height="50" class="d-inline-block align-top"
       alt="" loading="lazy">
       <span id="title"> Coder Shiyar</span>
     
    </a>
    <div>
        <button type="button" id="arabic" class="btn btn-outline-success">العربية</button>
        <button type="button" id="english" class="btn btn-outline-danger">English</button>

    </div>
  </nav>

  <div id="welcome-text" class="alert alert-success" role="alert">
    Welcome to website of Coder Shiyar
  </div>

  <main >
    <div style=" justify-content: center; display: flex;" id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
        <div style="max-width: 860px;" class="carousel-inner">
          <div class="carousel-item active">
            <img src="img1.jpg" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="img2.jpg" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="img3.jpg" class="d-block w-100" alt="...">
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>

  </main>
      

        <footer>
            <div class="card text-center">
                <div id="about" class="card-header">
                  About US
                </div>
                <div class="card-body">
                  <p id="about-text" class="card-text">
                       I am a teacher and a Software Developer </p>
                  <a id="contact" href="mailto:team.codershiyar@gmail.com" 
                  class="btn btn-success"> Contact us </a>
                </div>
               
              </div>

        </footer>
        <script src="script.js"></script>

        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
    </body>
</html>