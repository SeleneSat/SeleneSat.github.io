function main()
{
$("#openmenu").click(function(){$("#sidebar").css("left","0px");});
$("#close_menu").click(function(){$("#sidebar").css("left","-200px");});
}
$(window).load(main);
