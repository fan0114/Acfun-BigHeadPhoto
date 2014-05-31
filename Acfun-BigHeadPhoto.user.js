// ==UserScript==
// @name       Acfun BigHeadPhoto
// @namespace  http://acfun.com/
// @version    0.2
// @description  mouse over the up-zhu's head
// @match      http://*.acfun.com/*
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

$("img.avatar").mouseover(function(){
//    alert("mouseover");
    $("div.item-comment.item-comment-first").css({'height' : '250px'});
    $("div.area-comment-left").css({'width' : '200px' , 'height' : '200px' , 'vertical-align': 'bottom'});
    $("a.thumb").css({'width' : '180px' , 'height' : '180px'});
    $("img.avatar").css({'width' : '180px' , 'height' : '180px'});
    $("div.area-comment-right").css({'margin-left' : '190px'});
}).mouse;



