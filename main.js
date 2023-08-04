$(document).ready(() =>{
    $('.menu-button').on('mouseenter', () => {
        $('.nav-menu').show();
        $('.menu-button').animate({
            fontSize: '22px'
          }, 200);
        $('.menu-button').addClass('button-active'); 
      });  
    $('.nav-menu').on('mouseleave', () => {
        $('.nav-menu').hide();        
      });

      
      $('.menu-button').on('mouseleave', () => {
        $('.menu-button').animate({
            fontSize: '18px'
          }, 200);
          $('.menu-button').removeClass('button-active');
      })

    $('.signUp-button').on('mouseenter', () =>{
        $('.signUp-button').animate({
            fontSize: '22px'
          }, 200);
        $('.signUp-button').addClass('button-active');
    });
    $('.signUp-button').on('mouseleave', () =>{
        $('.signUp-button').animate({
            fontSize: '18px'
          }, 200);
        $('.signUp-button').removeClass('button-active');  
    });

    $('.login-button').on('mouseenter', () =>{
        $('.login-button').animate({
            fontSize: '22px'
          }, 200);
        $('.login-button').addClass('button-active');
    });
    $('.login-button').on('mouseleave', () =>{
        $('.login-button').animate({
            fontSize: '18px'
          }, 200);
        $('.login-button').removeClass('button-active');  
    });
     
});