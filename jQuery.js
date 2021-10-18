$(document).ready(function () {
  // Here goes my jQuery

  $("img").css({
    width: "250px",
    height: "300px",
    border: "2px solid #d3d3d3",
  });
  $("button").css({
    fontSize: "30px",
    textAlign: "center",
    backgroundColor: "rgb(12, 12, 56)",
    padding: "10px",
    color: "#fff",
    margin: "20px auto",
    boxShadow: "5px 5px 7px #d9d9d9",
  });
  $("h3").css({
    color: "#fff",
    fontSize: "25px",
  });

  //creating a click button
  $(".getting").on("click", () => {
    //getting a random number
    const randomNum = Math.floor(Math.random() * 88);
    //getting the json to the API
    $.get(
      `https://akabab.github.io/starwars-api/api/id/${randomNum}.json`,
      function (data) {
        console.log(data);
        $("#id").html(data["id"]);
        $("#name").html(data["name"]);
        $("#high").html(data["height"]);
        $("#mass").html(data["mass"]);
        $("#specie").html(data["species"]);
        $("#image").attr("src", data["image"]);
      }
    );
  });
  // Getting the other Character to the API
  $(".getting").on("click", () => {
    //getting a random number
    const randomNum = Math.floor(Math.random() * 88);
    //getting the json to the API
    $.get(
      `https://akabab.github.io/starwars-api/api/id/${randomNum}.json`,
      function (data) {
        console.log(data);
        $("#id1").html(data["id"]);
        $("#name1").html(data["name"]);
        $("#high1").html(data["height"]);
        $("#mass1").html(data["mass"]);
        $("#specie1").html(data["species"]);
        $("#image1").attr("src", data["image"]);
      }
    );
  });
  // Hover in & out
  const hoverOrLeave = "";
  if (
    hoverOrLeave ==
    $(".getting").on("mouseenter", function () {
      console.warn("Is hovering me");
    })
  ) {
  } else if (
    hoverOrLeave ==
    $(".getting").on("mouseleave", function () {
      console.error("Is leaving me");
    })
  ) {
  }
  // Adding animation
  $(".getting").on("click", function () {
    $(".animaton").hide(300);
    $(".animaton").slideDown(500);
  });

  // Changing attr
  $("#passW").attr("type", "password");
  // Showing focus & blur

  $("input")
    .on("focus", () => {
      console.log("It's Focus in this area");
    })
    .on("blur", () => {
      console.log("It's Blur of this area");
    });

  //   // here is the final of my jQuery
});
