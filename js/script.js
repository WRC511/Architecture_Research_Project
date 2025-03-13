$(document).ready(function () {
    // Toggle menu when hamburger icon is clicked
    $(".menu-icon").click(function () {
        $(".navbar ul").slideToggle();
    });

    // Handle nav-item clicks
    $(".nav-item").click(function () {
        $(".gallery, .page-content, .info-box").hide();
        $("#home-image").hide();

        // Hide the mobile menu if open (for small screens)
        if ($(window).width() < 768) {
            $(".navbar ul").slideUp();
        }

        if ($(this).data("target")) {
            $("#" + $(this).data("target")).fadeIn();
        } else {
            var galleryId = $(this).attr("id").replace("-btn", "-gallery");
            $("#" + galleryId).fadeIn();
        }
    });

    // Ensure navbar resets when resizing the window
    $(window).resize(function () {
        if ($(window).width() > 768) {
            $(".navbar ul").show();  // Restore navbar on large screens
        } else {
            $(".navbar ul").hide();  // Ensure mobile menu starts hidden
        }
    });

    // Handle Return Home button click
    $(document).on("click", ".return-home", function () {
        $(".gallery, .page-content, .info-box").fadeOut(); // Hide all content
        $("#home-image").fadeIn(); // Show the home image
    });

    // Click on the title to return home
    $("#home-title").click(function () {
        $(".gallery, .page-content, .info-box").fadeOut(); // Hide all content
        $("#home-image").fadeIn(); // Show the home image
    });

    // Clickable images - enlarging
    $('.gallery-image img').click(function() {
        openLargeImage($(this).attr('src'));
    });

    function openLargeImage(src) {
        var overlay = $('<div class="image-overlay"></div>');
        var largeImage = $('<img src="' + src + '" class="large-image">');
        var closeButton = $('<button class="close-button">X</button>');

        overlay.append(largeImage).append(closeButton);
        $('body').append(overlay);

        closeButton.click(function() {
            overlay.remove();
        });

        overlay.click(function(e) {
            if (e.target === this) {
                overlay.remove();
            }
        });
    }
});
$(document).ready(function () {
    // Toggle menu when hamburger icon is clicked
    $(".menu-icon").click(function () {
        $(".navbar ul").slideToggle();
    });

    // Handle nav-item clicks
    $(".nav-item").click(function () {
        $(".gallery, .page-content, .info-box").hide();
        $("#home-image").hide();

        // Hide the mobile menu if open (for small screens)
        if ($(window).width() < 768) {
            $(".navbar ul").slideUp();
        }

        if ($(this).data("target")) {
            $("#" + $(this).data("target")).fadeIn();
        } else {
            var galleryId = $(this).attr("id").replace("-btn", "-gallery");
            $("#" + galleryId).fadeIn();
        }
    });

    // Ensure navbar resets when resizing the window
    $(window).resize(function () {
        if ($(window).width() > 768) {
            $(".navbar ul").show();  // Restore navbar on large screens
        } else {
            $(".navbar ul").hide();  // Ensure mobile menu starts hidden
        }
    });

    // Handle Return Home button click
    $(document).on("click", ".return-home", function () {
        $(".gallery, .page-content, .info-box").fadeOut(); // Hide all content
        $("#home-image").fadeIn(); // Show the home image
    });

    // Click on the title to return home
    $("#home-title").click(function () {
        $(".gallery, .page-content, .info-box").fadeOut(); // Hide all content
        $("#home-image").fadeIn(); // Show the home image
    });

    // Clickable images - enlarging
    $('.gallery-image img').click(function() {
        openLargeImage($(this).attr('src'));
    });

    function openLargeImage(src) {
        var overlay = $('<div class="image-overlay"></div>');
        var largeImage = $('<img src="' + src + '" class="large-image">');
        var closeButton = $('<button class="close-button">X</button>');

        overlay.append(largeImage).append(closeButton);
        $('body').append(overlay);

        closeButton.click(function() {
            overlay.remove();
        });

        overlay.click(function(e) {
            if (e.target === this) {
                overlay.remove();
            }
        });
    }
});
