$("a").on("click", function (e) {
  e.preventDefault();
  let dataprice = $(this).closest(".card").attr("data-price");
  let prices = `<p>${dataprice}هزار تومن</p>`;
  $(this).after(prices);
  $(this).remove();
});

$("img").on("click", function () {
  $(this).next().animate(
    {
      height: 45,
    },
    2000
  );
});


$("button.eur").on("click" , function(e){
    $(e.target).addClass("active");
    $("button.usa").removeClass("active");
    $(".card").filter(".usa").css({opacity:".4"})
    $(".card").filter(".eur").css({opacity:"1"})

})

$("button.usa").on("click" , function(e){
    $(e.target).addClass("active");
    $("button.eur").removeClass("active");

    $(".card").filter(".usa").css({opacity:"1"})
    $(".card").filter(".eur").css({opacity:".4"})

})