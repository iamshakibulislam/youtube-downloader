

$(document).ready(function(){

$(document).on('click','#download',function(){

    var url=$('#link').val();

    if(url==''){alert('url field can not be empty')}else{
      $('#loading_image').css('display','block');



    $.ajax({
      dataType:'json',
      data:{'link':url},
      type:'GET',
      url:'/urlsubmit/'

    })
    .done(function(data){
      $('#loading_image').css('display','none');
      $('.thumb').empty();
      $('.thumb').append(data.thumbnail);
      $('#output').css('display','block');
      $('.title').empty();
      $('.title').append(data.title);
      $('.downloadhd').empty();
      $('.downloadhd').append(data.hd);
      $('.downloadhd a').attr('class','btn btn-success btn-lg');
      $('.downloadtable').empty();
      $('.downloadtable').append(data.table);


    }) //end of ajax done function
    .fail(function(){alert('something went wrong,try again later')})

    ;}

});


})































// ---------Responsive-navbar-active-animation-----------
function test(){
  var tabsNewAnim = $('#navbarSupportedContent');
  var selectorNewAnim = $('#navbarSupportedContent').find('li').length;
  var activeItemNewAnim = tabsNewAnim.find('.active');
  var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
  var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
  var itemPosNewAnimTop = activeItemNewAnim.position();
  var itemPosNewAnimLeft = activeItemNewAnim.position();
  $(".hori-selector").css({
    "top":itemPosNewAnimTop.top + "px", 
    "left":itemPosNewAnimLeft.left + "px",
    "height": activeWidthNewAnimHeight + "px",
    "width": activeWidthNewAnimWidth + "px"
  });
  $("#navbarSupportedContent").on("click","li",function(e){
    $('#navbarSupportedContent ul li').removeClass("active");
    $(this).addClass('active');
    var activeWidthNewAnimHeight = $(this).innerHeight();
    var activeWidthNewAnimWidth = $(this).innerWidth();
    var itemPosNewAnimTop = $(this).position();
    var itemPosNewAnimLeft = $(this).position();
    $(".hori-selector").css({
      "top":itemPosNewAnimTop.top + "px", 
      "left":itemPosNewAnimLeft.left + "px",
      "height": activeWidthNewAnimHeight + "px",
      "width": activeWidthNewAnimWidth + "px"
    });
  });
}
$(document).ready(function(){
  setTimeout(function(){ test(); });
});
$(window).on('resize', function(){
  setTimeout(function(){ test(); }, 500);
});
$(".navbar-toggler").click(function(){
  setTimeout(function(){ test(); });
});