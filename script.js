
$(document).ready(function () {

    console.log("jQuery is ready!");

    $("#changeText").click(function () {
        $("#myId").text("ID changed!");
        $(".myClass").html("<b>Class changed!</b>");
        $("h1").css("color", "green");
    });

    $("#hideBtn").click(function () {
        $("#message").hide();
    });

    $("#showBtn").click(function () {
        $("#message").show();
    });

    $("#toggleBtn").click(function () {
        $("#message").toggle();
    });

    $("#fadeOutBtn").click(function () {
        $("#fadeImage").fadeOut();
    });

    $("#fadeInBtn").click(function () {
        $("#fadeImage").fadeIn();
    });

    $("#fadeToggleBtn").click(function () {
        $("#fadeImage").fadeToggle();
    });

    $("#slideUpBtn").click(function () {
        $("#panel").slideUp();
    });

    $("#slideDownBtn").click(function () {
        $("#panel").slideDown();
    });

    $("#slideToggleBtn").click(function () {
        $("#panel").slideToggle();
    });

    let count = 1;

    $("#addBtn").click(function () {
        count++;
        $("#myList").append("<li>Item " + count + "</li>");
    });

    $("#prependBtn").click(function () {
        count++;
        $("#myList").prepend("<li>Item " + count + "</li>");
    });

    $("#removeBtn").click(function () {
        $("#myList li:last").remove();
    });

    $("#imageBtn").click(function () {
        $("#changeImage").attr("src",
            "https://picsum.photos/id/30/250/150");
    });

    $("#linkBtn").click(function () {
        $("#myLink").attr("href", "https://github.com");
        $("#myLink").text("Visit GitHub");
    });

    $("#name").on("input", function () {
        $("#nameResult").text("Name: " + $("#name").val());
    });

    $("#email").on("input", function () {
        $("#emailResult").text("Email: " + $("#email").val());
    });

    $("#myForm").submit(function (event) {
        event.preventDefault();
    });

    $("#basicBtn").click(function () {
        $("#box1").stop(true, true).animate({
            left: "150px",
            width: "100px",
            height: "100px"
        }, 1000);
    });

    $("#resetBasic").click(function () {
        $("#box1").stop(true, true).css({
            left: "0px",
            width: "60px",
            height: "60px"
        });
    });

    $("#sequenceBtn").click(function () {
        $("#box2").stop(true, true).css({
            left: "0px",
            top: "0px",
            width: "60px",
            height: "60px"
        });

        $("#box2")
            .animate({left: "150px"}, 500)
            .animate({top: "100px"}, 500)
            .animate({width: "30px", height: "30px"}, 500)
            .animate({
                left: "0px",
                top: "0px",
                width: "60px",
                height: "60px"
            }, 500);
    });

    $("#combinedBtn").click(function () {
        $("#box3").stop(true, true).animate({
            left: "150px",
            width: "120px",
            height: "120px",
            opacity: 0.4
        }, 1000);
    });

    $("#resetCombined").click(function () {
        $("#box3").stop(true, true).css({
            left: "0px",
            width: "60px",
            height: "60px",
            opacity: 1
        });
    });

    $(".question").click(function () {
        $(".answer").not($(this).next()).slideUp();
        $(this).next().slideToggle();
    });

});
