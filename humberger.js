(()=>{
  'use strit';

  $(function(){
    $('.menu-trigger').on('click',function(){
      $('.bar1,.bar2,.bar3').toggleClass('active');
$('#global-nav').toggleClass('active');
    });
  });

})();
