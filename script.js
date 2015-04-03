function main()
{
console.log("document ready, Javascript running");
  $(".openmenu_container").mouseover(function mouseoverfunc (){
console.log("mouseover triggered");
$(".sidebar").css("left","0px");
$(".openmenu_container").css("left","-200px"););
  $(".sidebar").mouseleave(function mouseoutfunc (){
console.log("mouseout triggered");
$(".sidebar").css("left","-200px");
$(".openmenu_container").css("left","40px");});
}
}
$(document).ready(main);
