document.on("click", ".eat .delete", function() {
    $.get("/")
});

document.on("click", ".eat", function() {
    $.put("/api/burgers/" + $(this).attr("data-id"))
})