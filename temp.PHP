    <!-- php in index test -->
<?php
    If(!$_POST){
        /* this code templated from: https://www.tutorialrepublic.com/php-tutorial/php-mysql-insert-query.php
        Attempt MySQL server connection. Assuming you are running MySQL
        server with default setting (user 'root' with no password) */

        // local server connect string
        // $link = mysqli_connect("localhost", "root", "", "packup");
        $link = mysqli_connect("localhost", "root", "46c62c7d-f0cf-468d-a4b4-f1b0fd741540", "packup");
        // crocweb connect string
        // $link = mysqli_connect("localhost", "getpacku_root", "A46c62c7d-f0cf-468d-a4b4-f1b0fd741540", "getpacku_packup");
        
        // Check connection

        if($link === false){
            // console.log('connect error message');
            echo "<h2>PHP is Fun!</h2>";
            die("ERROR: Could not connect. " . mysqli_connect_error());
        }
        
        // Escape user inputs for security
        $first_name = mysqli_real_escape_string($link, $_REQUEST['first_name']);
        $last_name = mysqli_real_escape_string($link, $_REQUEST['last_name']);
        $email = mysqli_real_escape_string($link, $_REQUEST['email']);
 
        // Attempt insert query execution
        $sql = "INSERT INTO register (fname, lname, email) VALUES ('$first_name', '$last_name', '$email')";
        if(mysqli_query($link, $sql)){
            echo '<style type="text/css">
            .modal-body {
                display: block;
            }
            </style>';
            echo "Records added successfully.";
        } else{
            echo "ERROR: Unable to execute $sql. " . mysqli_error($link);
        }
        
        // Close connection
        mysqli_close($link);
    }
?>
