$(document).ready(function () {
    // Toggle menu when hamburger icon is clicked (only show/hide, don't auto-close)
    $(".menu-icon").click(function (e) {
        e.stopPropagation(); // Prevent click from bubbling up
        $(".navbar ul").slideToggle(300);
    });

    // Ensure clicking a menu item closes the mobile menu
    $(".nav-item").click(function () {
        $(".gallery, .page-content, .info-box").hide();
        $("#home-image").hide();

        // Only close the menu if on a small screen
        if ($(window).width() < 768) {
            $(".navbar ul").slideUp(300);
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

    // Clicking anywhere outside the menu should close it (on mobile)
    $(document).click(function (e) {
        if ($(window).width() < 768) {
            if (!$(".navbar").is(e.target) && $(".navbar").has(e.target).length === 0) {
                $(".navbar ul").slideUp(300);
            }
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
        var closeButton = $('<button class="close-button">&times;</button>');

        overlay.append(largeImage).append(closeButton);
        $('body').append(overlay);
     
        // Prevent scrolling when overlay is open
        $('body').css('overflow', 'hidden');

        function closeOverlay() {
            overlay.remove();
            $('body').css('overflow', '');
        }

        closeButton.click(closeOverlay);

        overlay.click(function(e) {
            if (e.target === this) {
                closeOverlay();
            }
        });
    }
});
