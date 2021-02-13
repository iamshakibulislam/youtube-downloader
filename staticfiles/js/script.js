function waitSeconds(iMilliSeconds) {
    var counter= 0
        , start = new Date().getTime()
        , end = 0;
    while (counter < iMilliSeconds) {
        end = new Date().getTime();
        counter = end - start;
    }
};



$(document).ready(function(){
  var p=[];
  var c=0;
  var d=[];
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
    


    }) //end of ajax done function
    .fail(function(){alert('something went wrong,try again later')})

    ;}

});

/*



var id;
var download_url;
var pro_url;
$(document).on('click','.dload',function(){
var pr;

var lnk=$(this).prev().prev().val();
var format=$(this).prev().val();

if(lnk=='' || format==''){alert('something wrong')}else{

$(this).text(' wait 30sec downloading.......');



$.ajax({
  url:'https://loader.to/ajax/download.php?start=1&end=20&format='+format+'&url='+lnk,
  dataType:'json',
  type:'GET',

})

.done(function(data){

  var pr='https://loader.to/ajax/progress.php?id='+data['id'];
//nesetd ajax
  
do{

  $.ajax({
    url:pr,
    async: false,
    dataType:'json',
    type:'GET'
  })
  .done(function(datat){
  
  waitSeconds(3000);
   p.push(datat['text']);

   d.push(datat['download_url']);
   
   

  }); }while(p[p.length-1] != 'Finished');


     //nested ajax ends

  
window.location.replace(d[d.length-1]);


  
})

.fail(function(){
  alert('something went wrong');
});

*/



/*

$.getJSON("https://loader.to/ajax/download.php?start=1&end=20&format="+format+"&url="+lnk, function(result){

  var id=result['id'];
  waitSeconds(10000);
  window.location.replace('https://ann5353.loader.to/api/get.php?id='+id);

  


}) ;//geting json obj */

/*

$.getJSON('https://loader.to/ajax/progress.php?id='+id,function(data){
        
   console.log(id);
   console.log(data);
   console.log(pro_url);
        

    });//end of getJson;


*/





/*

$.ajax({
  dataType:'json',
      data:{'link':lnk,'format':format},
      type:'GET',
      url:'/download/'

})
.done(function(data){




 $('button').text('Download');
 var id=data.id;
 window.location.replace(data.link);


}) //

.fail(function(){
  alert('failed,try again');
}) */



//} //end of else function



//}); //end of clicking download function


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