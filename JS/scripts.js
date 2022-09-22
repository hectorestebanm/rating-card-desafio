var span = document.querySelector(".card-end__p1__span");
var buttons = document.querySelectorAll(".card__button");
var submit = document.querySelector(".card__submit");
var cardRating = document.querySelector(".card-rating");
var cardEnd = document.querySelector(".card-end");

buttons.forEach(function(number)
{
    number.addEventListener("click", function()
    {
        span.innerHTML = number.innerHTML;
    });
});

submit.addEventListener("click", function()
{
    cardRating.style.display = "none";
    cardEnd.style.display = "flex";
});
