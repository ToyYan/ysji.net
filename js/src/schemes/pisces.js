$(document).ready(function(){var t=$(".sidebar-inner"),a=CONFIG.sidebar.offset?CONFIG.sidebar.offset:12;function i(){var e=$(".header-inner").height()+a,i=function(){var e=$(".footer-inner"),i=e.outerHeight(!0)-e.outerHeight();return e.outerHeight(!0)+i}();e+($("#sidebar").height()+NexT.utils.getSidebarb2tHeight())<$("#content").height()&&(t.affix({offset:{top:e-a,bottom:i}}),t.affix("checkPosition")),$("#sidebar").css({"margin-top":e,"margin-left":"initial"})}i(),window.matchMedia("(min-width: 992px)").addListener(function(e){e.matches&&($(window).off(".affix"),t.removeData("bs.affix").removeClass("affix affix-top affix-bottom"),i())})});