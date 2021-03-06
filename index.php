<?php
    If($_POST){
        /* this code templated from: https://www.tutorialrepublic.com/php-tutorial/php-mysql-insert-query.php
        Attempt MySQL server connection. Assuming you are running MySQL
        server with default setting (user 'root' with no password) */

        // local server connect string
        // $link = mysqli_connect("localhost", "root", "", "packup");
        // $link = mysqli_connect("localhost", "root", "46c62c7d-f0cf-468d-a4b4-f1b0fd741540", "getpacku_packup");
        // crocweb connect string
        $link = mysqli_connect("localhost", "getpacku_root", "46c62c7d-f0cf-468d-a4b4-f1b0fd741540", "getpacku_packup");
        
        // Check connection

        if($link === false){
            // console.log('connect error message');
            echo "<h2>failed to connect</h2>";
            die("ERROR: Could not connect. " . mysqli_connect_error());
        }
        
        // Escape user inputs for security
        $first_name = mysqli_real_escape_string($link, $_REQUEST['first_name']);
        $last_name = mysqli_real_escape_string($link, $_REQUEST['last_name']);
        $email = mysqli_real_escape_string($link, $_REQUEST['email']);
        $response = "pending";
 
        // Attempt insert query execution
        $sql = "INSERT INTO register (fname, lname, email) VALUES ('$first_name', '$last_name', '$email')";
        if(mysqli_query($link, $sql)){
            // pending kel find
            // echo "<script type='text/javascript'>
            // $(document).ready(function(){
            //     $('#myModal'.modal('show'); 
            // });
            // </script>";

            // pending paul attempt
            // echo "<script type='text/javascript'>
            //     alert('Thank you, your email has been received! We will be in contact with more information in the near future.');
            //     // openModal();
            // </script>";
            echo "<script type='text/javascript'>
                $(document).ready(function(){
                $('#myModal').modal('show');
                });
            </script>";

            // copied from tutorial republic
            // echo "Records added successfully.";
        } else{
            echo "ERROR: Unable to execute $sql. " . mysqli_error($link);
        }
        
        // Close connection
        mysqli_close($link);
    }
?><!DOCTYPE html>
<html lang="en">

<head>
    <title>GetPackUP</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="keywords"
        content="packing, outdoors, ski touring, hiking, backpacking, canoeing, kayaking, Canada, rockies, coast mountains, east coast, Newfoundland, British Columbia, BC, Alberta, AB, hiking packing, packing for hiking, packing for backpacking, packing for ski touring, wapta, wapta app, packing list app, pack app">

 
    <!--font(s)-->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Krona+One&display=swap">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto">


    <!--vendor style(s)-->
    <link rel="stylesheet" href="./vendor/bootstrap-4.5.0-dist/css/bootstrap.css">

    <!--style(s)-->
    <!-- <link rel="stylesheet" href="./css/styles_TypewriterText.css"> -->
    <link rel="stylesheet" href="./css/styles_hamburgerMenu.css">
    <link rel="stylesheet" href="./css/styles_modal.css">
    <link rel="stylesheet" href="./css/styles_main.css">
    <link rel="stylesheet" href="./css/styles_mediaOver600.css">

    <!--vendor script(s)-->
    <script src="https://kit.fontawesome.com/673fcdb345.js" crossorigin="anonymous"></script>
    <script type="text/javascript" src="./vendor/jquery/jquery-development-edition.js"></script>
    <script type="text/javascript" src="./vendor/bootstrap-4.5.0-dist/js/bootstrap.js"></script>

    <!--script(s)-->
    <script type="text/javascript" src="./js/scripts_TypewriterText.js"></script>
    <script type="text/javascript" src="./js/scripts.js" defer></script>


</head>

<body>
    <!-- Hamburger Menu -->
    <nav role='navigation'>
        <div id="menuToggle">
            <!-- Hidden checkbox used to expand menu with 'ischecked' selector -->
            <input type="checkbox" />

            <!-- Spans to mimic as a hamburger -->
            <span></span>
            <span></span>
            <span></span>

            <ul id="menu">
                <a href="#" class="flex-grow-1 bd-highlight">
                    <li>Home</li>
                </a>
                <a href="./blog.html" class="bd-highlight">
                    <li>Blog</li>
                </a>
                <a href="#Article1" class="bd-highlight">
                    <li>About</li>
                </a>
                <a href="#formEmail" class="bd-highlight">
                    <li>Register</li>
                </a>

            </ul>
        </div>
    </nav>

    <!-- jumbotron -->
    <div class="jumbotron" id="Jumbotron">
        <p id="logoPackup">
            <span id="logoPack">PACK</span>
            <span id="logoUp">UP</span>
        </p>
        <div class="jumbotronHeadings">NEVER FORGET YOUR</div>

        <h2 class="TypeWriterTextContainer">
            <div class="TypewriterText" id="TypewriterText">
            </div>
        </h2>

        <div class="jumbotronHeadings">AGAIN</div>
        <p id="SignUpBelow">Sign up below to become an early adopter</p>
        <a class="btn btn-primary btn-" href="#formEmail" role="button">sign me up</a>

    </div>

  
    <section id="Section1">

        <article id="Article1">
            <div class="articleHeadings">SPEND MORE TIME OUTSIDE DOING WHAT YOU LOVE.</div>

            <img src="./img/IPhone7pic.jpg" alt="IPhone 7 Pic" id="IPhone7Pic">
            <div class="articleHeadings">PACK WITH CONFIDENCE USING OUR TRIP GENERATOR</div>
            <p>Take the guesswork out of packing by following and customizing comprehensive packing lists that are
                tailored to your excursion type, making sure you have everything necessary for what you’re doing and
                where you're staying.</p>
        </article>

        </article>

        <article id=Article3>
            <div class="articleHeadings">CREATE AND SHARE COLLABORATIVE PACKING LISTS</div>
            <p>Create collaborative packing lists that will help your group ensure everyone has their share of essential
                items, and that nothing gets left behind (or double packed).</p>
        </article>

    </section>


    <section id="Section2">

        <article id="Article4">
            <div class="articleHeadings">LEARN FROM OTHERS AND VIEW THE TRIPS THEY PACKED FOR</div>
            <p>See what other professionals and enthusiasts are packing for their excursions, improving and refining
                your own personal packing lists.</p>
        </article>

        <!-- <form id="formEmail" action="#formEmail" method="post"> -->
        <form id="formEmail" method="post">
        <!-- <form id="formEmail" method="post"> -->
            <img src="./img/bouncing-arrow.gif" alt="Bouncing Down Arrow" id="BouncingArrow">
            <div class="formHeadings">Enter your email to be the first to know when the PackUp app is live!</div>
            <div class="formFields">
                <input type="text" name="first_name" id="FName" placeholder="First Name" required><br>
                <input type="text" name="last_name" id="LName" placeholder="Last Name" required><br>
                <input type="email" name="email" id="emailField" placeholder="Email Address"
                    pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9_-]+\.[a-zA-Z0-9-.]{2,61}$" required><br>
            </div>
            <input type="submit" id="submitButton" value="SUBMIT">
        </form>



 <!-- MODAL ************************************************* -->

<!-- Trigger/Open The Modal -->
<!-- <button id="modalBtn">Open Modal</button> -->

<!-- The Modal -->
<div id="myModal" class="modal">

  <!-- Modal content -->
  <div class="modal-content">
    <div class="modal-header">
      <span class="close">&times;</span>
      <h2></h2>
    </div>
    <div class="modal-body">
      <strong>Thank you, your email has been received!</strong>
      <p>We will be in contact with more information in the near future.</p>
    </div>
    <div class="modal-footer">
        <button type="button" class="btn btn-secondary" id="modalClose"  data-dismiss="close">Close</button>
        <!-- <h3>Modal Footer</h3> -->
    </div>
  </div>

</div>


        <!-- END MODAL ************************************************* -->

        <article id="TRANSPARENT-Article">
            <!--  Transparent, empty container -->
        </article>


        <img id='inline-collage' src='./img/Outdoorsman_Collage.jpg'>


        <article id="Article6">
            <p class="articleHeadings">What is PackUp?</p>
            <p>During a complex multi-day ski traverse on the Wapta Ice Field the idea for our app originally
                sparked.
                We wanted to build an app that could help others refine their flow when it comes to packing and
                organization. Our goal is to help you become more organized and prepared on your outdoor adventures.
                We
                appreciate you taking the time to learn more about our app, we can't wait to share his with you!
            </p>
            <p>-Taylor & Mack</p>
        </article>

        <article id="Article7">
            <article class="testimonials">
                <img class="make-circular" src="./img/hamishGuyLookingOut.png" alt="Sitting Guy Looking Out">
                <p class="testimonial-instance"></p>
                "This app is going to be a game changer. I can't wait to use it on upcoming hiking trips!"
                </p>
                <p>
                    Hamish, British Columbia
                </p>

            </article>
            <article class="testimonials">
                <img class="make-circular" src="./img/hayleyGirlOnRocks.png" alt="Sitting Guy Looking Out">
                <p class="testimonial-instance">
                    "I'm looking forward to creating collaborative lists with my friends. Tracking who is bringing
                    what
                    has always been an issue."
                </p>
                <p>
                    Hayley, Ontario
                </p>
            </article>
        </article>
    </section>

    <footer id="footerId">
        <p>PackUp 2020. All Rights Reserved. </p>
        <p></p>
        <p>Available soon on the App Store and Google Play.</p>
    </footer>

</body>

</html>