// ==UserScript==
// @name       Acfun BigHeadPhoto
// @namespace  http://acfun.tv/
// @version    0.4
// @description  mouse over head photo to enlarge
// @match      http://*.acfun.com/*
// @match      http://*.acfun.tv/*
// @match      http://*.ranktv.cn/*
// @copyright  Zheng Fan
// @require  http://code.jquery.com/jquery-1.9.1.js
// ==/UserScript==

//alert("load");

//$("div.area-comment-left").load(function() {
//    $(this).data('height', 200);
//   $(this).data('width', 200);
//});

//$("a.thumb").load(function() {
//  $(this).data('height', 180);
//$(this).data('width', 180);
//});


//$("img.avatar").load(function() {
//  $(this).data('height', 180);
//$(this).data('width', 180);
//});
function enlargeOne() {
$("img.avatar").mouseover(function(){
//    alert("mouseover");
    $(this).parent().parent().parent().css({'min-height' : '250px'});
    $(this).parent().parent().css({'width' : '200px' , 'height' : '200px' , 'vertical-align': 'bottom'});
    $(this).parent().css({'width' : '180px' , 'height' : '180px'});
    $(this).css({'width' : '180px' , 'height' : '180px'});
    $(this).parent().parent().parent().children("div.area-comment-right:first").css({'margin-left' : '190px'});
}).mouse;
}

//$( document ).ajaxComplete(function() {
//  enlargeOne();
//});

$("#btn-top-shortcut").mouseover(function(){
//    alert("mouseover");
    $("div.item-comment.item-comment-first").css({'min-height' : '250px'});
    $("div.area-comment-left").css({'width' : '200px' , 'height' : '200px' , 'vertical-align': 'bottom'});
    $("a.thumb").css({'width' : '180px' , 'height' : '180px'});
    $("img.avatar").css({'width' : '180px' , 'height' : '180px'});
    $("div.area-comment-right").css({'margin-left' : '190px'});
}).mouse;

function addBtn() {    
    $("div.area-comment-left").each(
        function () {          
            $(this).append("<input type='button' value='Auto Grind' id='autoGrind'>");
            $('autoGrind').click(autoGrind());
        }
    );    
}

var myVar=setTimeout(function () {enlargeOne()}, 2000);

var myVar2=setTimeout(function () {enlargeOne()}, 5000);

var myVar3=setTimeout(function () {enlargeOne()}, 10000);

var myVar3=setTimeout(function () {enlargeOne()}, 20000);

