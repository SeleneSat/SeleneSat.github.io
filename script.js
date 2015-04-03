function main()
{
$("#openmenu_container").click(function(){$("#sidebar").css("left","0px");
$("#openmenu_container").css("left","-300px");});
$("#close_menu").click(function(){$("#sidebar").css("left","-200px");
$("#openmenu_container").css("left","40px");});
}
$(window).load(main);
