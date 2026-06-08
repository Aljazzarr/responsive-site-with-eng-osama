/*Global */
$(function () {
  "use strict";
  $(".info-list li").click(function () {
    $(this).addClass("sellected").siblings("li").removeClass("sellected");
    $(".info-content div").hide();
    $("." + $(this).data("class")).fadeIn();
  });
});
