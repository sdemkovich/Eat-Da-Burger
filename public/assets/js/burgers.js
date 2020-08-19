$(function () {
    // Add burger on click
    $("#add-burger").click(function (event) {
        event.preventDefault();

        // Name of burger will be input field
        var newBurger = {
            name: $("#burger-text").val(),
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("Created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    // Add burger on enter keypress
    $("#burger-text").keypress(function (e) {
        if (e.which == 13) {
            $('#add-burger').click();
        }
    });

    // Update burger to devoured on click
    $(".devour").on("click", function (event) {
        var burgerID = $(this).data("id");

        // Send the PUT request.
        $.ajax("/api/burgers/" + burgerID, {
            type: "PUT",
            data: burgerID
        }).then(
            function () {
                console.log("Devoured burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".delete").on("click", function (event) {
        var burgerID = $(this).data("id");

        // Send the PUT request.
        $.ajax("/api/burgers/" + burgerID, {
            type: "DELETE",
            data: burgerID
        }).then(
            function () {
                console.log("Deleted burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});