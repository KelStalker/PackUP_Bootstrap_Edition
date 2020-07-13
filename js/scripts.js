// NAME: BACK TO TOP
$(document).ready(function () {
  {
    if ($(this).scrollTop() > 50) {
      $("#back-to-top").fadeIn();
    } else {
      $("#back-to-top").fadeOut();
    }
  }
  // scroll body to 0px on click
  $("#back-to-top").click(function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      400
    );
    return false;
  });
});

// Source:https://html-online.com/articles/dynamic-scroll-back-top-page-button-javascript/

/*Scroll to top when arrow up clicked BEGIN*/
$(window).scroll(function () {
  var height = $(window).scrollTop();
  if (height > 100) {
    $("#back2Top").fadeIn();
  } else {
    $("#back2Top").fadeOut();
  }
});
$(document).ready(function () {
  $("#back2Top").click(function (event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });
});
/*Scroll to top when arrow up clicked END*/




//     ***************))*********************
//     *****     Start Modal Script     *****
//     *****************((*******************

// Get the modal
  var modal = document.getElementById("myModal");

// Get the button that opens the modal
  var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
  btn.onclick = function () {
    modal.style.display = "block";
  };

// When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  };

// When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

//     ************************************
//     *****     End Modal Script     *****
//     ************************************
