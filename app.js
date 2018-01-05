$(document).ready(function (){


  $('#sidebarCollapse').on('click', function (){
    $('#sidebar').toggleClass('active');
    $('#logo').toggleClass('hidden')
  });

  $("#go-tools").click(function(){
    $("#info-content").load("/src/parts.html");
    $('#navigator').text(": : Sax Tools : :")
    $('#side-nav-hom').toggleClass('active');
    $('#side-nav-fin').addClass('active');
  });

  $('#go-home').click(function(){
    goHome();
  });
  $('#side-nav-hom').click(function(){
    goHome();
  });

  function goHome(){
    location.href="index.html";
    $('#navigator').text(": : Home : :");
  }

});
