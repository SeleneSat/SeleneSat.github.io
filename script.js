function main()
{
  $("#openmenu_container").mousenter(function(){
$("#sidebar").css("left","0px");
$("#openmenu_container").css("left","-200px");
$("#sidebar").mouseleave(function(){
$("#sidebar").css("left","-200px");
$("#openmenu_container").css("left","40px");});
}
$(window).load(main);
