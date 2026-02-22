$(document).ready(function() {
    // Helper to open an overlay
    function openOverlay(triggerId, overlayId, animClass) {
      $(triggerId + " .content").click(function() {
        $(overlayId).addClass("animate__animated " + animClass + " open")
          .one('animationend', function() {
              $(this).removeClass("animate__animated " + animClass);
          });
        $(overlayId + " .product-content").addClass("animate__animated animate__flipInY")
          .one('animationend', function() {
              $(this).removeClass("animate__animated animate__flipInY");
          });
      });
    }

    // Helper to close an overlay
    function closeOverlay(overlayId) {
      $(overlayId + " .close-icon").click(function() {
        $(overlayId).addClass("animate__animated animate__flipOutY")
          .one('animationend', function() {
              $(this).removeClass("animate__animated animate__flipOutY open");
          });
      });
    }

    // Python
    openOverlay("#proj-python", "#proj-python-overlay", "animate__fadeInLeft");
    closeOverlay("#proj-python-overlay");

    // R
    openOverlay("#proj-r", "#proj-r-overlay", "animate__fadeInRight");
    closeOverlay("#proj-r-overlay");

    // Power BI
    openOverlay("#proj-bi", "#proj-bi-overlay", "animate__fadeInRight");
    closeOverlay("#proj-bi-overlay");

    // SQL
    openOverlay("#proj-sql", "#proj-sql-overlay", "animate__fadeInLeft");
    closeOverlay("#proj-sql-overlay");

    // Excel certification
    openOverlay("#proj-excel", "#proj-excel-overlay", "animate__fadeInRight");
    closeOverlay("#proj-excel-overlay");

    // Lightbox: click overlay images to zoom
    $("#p3 .overlay img").click(function() {
      var src = $(this).attr("src");
      var lightbox = $('<div class="img-lightbox"><img src="' + src + '"></div>');
      $("body").append(lightbox);
      lightbox.click(function() {
        $(this).remove();
      });
    });
  });
