$(document).ready(function () {

    $(document).on("keyup", "#newburger", function(event) { // Alows the user to press enter instead of clicking the button.
        event.preventDefault();
        if (event.keyCode === 13) {
            addBurger();
        }
    })

    $(document).on("click", "#addburger", function() {
        addBurger();
    });

    $(document).on("click", ".eat", function() {
        $.ajax({
            url: "api/burgers/" + $(this).attr("data-id"),
            method: "PUT",
            data: {eaten: true}
        }).then(function () {
            location.href = "/";
        });
    });

    $(document).on("click", ".delete", function() {
        $.ajax({
            url: "api/burgers/" + $(this).attr("data-id"),
            method: "DELETE"
        }).then(function() {
            location.href = "/"
        });
    });
});

function addBurger() {
    let newBurger = {
        name: $("#newburger").val().trim(),
        eaten: false
    };
    $.post("/api/burgers", newBurger, function() {
        $("#newburger").val("");
        location.href = "/";
    });
}