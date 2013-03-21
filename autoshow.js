

$(function() {

$(".autoshow").each(function(){
    $('>div:gt(0)', this).hide();
})

$('.autoshow').each(function(){
  var t = this
  var period = $(t).attr('data-period') || 4400;
  setInterval(function() { 
   $('>div:first', t)
    .fadeOut(800)
    .next()
    .fadeIn(1200)
    .end()
    .appendTo(t);
},  period);
  });


})

