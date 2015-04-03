function main()
{
$("#openmenu").click(function(){$("#sidebar").css("left","0px");
$("#openmenu").css("left","-300px");});
$("#close_menu").click(function(){$("#sidebar").css("left","-200px");
$("#openmenu").css("left","auto");});
}
$(window).load(main);
