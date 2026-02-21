$(document).ready(function() {
    $("#west .content").click(function() {
      $("#west-overlay").addClass("animate__animated animate__fadeInLeft open")
        .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            $(this).removeClass("animate__animated animate__fadeInLeft");
        });
      $("#west-overlay .product-content").addClass("animate__animated animate__flipInY")
        .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            $(this).removeClass("animate__animated animate__flipInY");
        });
    });
  
    $("#west-overlay .close-icon").click(function() {
      $("#west-overlay").addClass("animate__animated animate__flipOutY")
        .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            $(this).removeClass("animate__animated animate__flipOutY open");
        });
    });
  
    $("#east .content").click(function() {
      $("#east-overlay").addClass("animate__animated animate__fadeInRight open")
        .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            $(this).removeClass("animate__animated animate__fadeInRight");
        });
      $("#east-overlay .product-content").addClass("animate__animated animate__flipInY")
        .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            $(this).removeClass("animate__animated animate__flipInY");
        });
    });
  
    $("#east-overlay .close-icon").click(function() {
      $("#east-overlay").addClass("animate__animated animate__flipOutY")
        .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            $(this).removeClass("animate__animated animate__flipOutY open");
        });
    });
  });
  