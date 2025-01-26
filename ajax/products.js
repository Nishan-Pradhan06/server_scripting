$(document).ready(function () {
    //when the button is clicked
    $("#showProductList").click(function () {
        $.ajax({
            url: "get_products.php",
            type: "GET",
            success: function (data) {
                $("#productsList").html(data);
            },
            error: function () {
                $("#productsList").html("An error occurred!, Could not get products");
            }
        })
    });
});