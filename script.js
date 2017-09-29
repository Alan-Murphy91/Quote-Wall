var action;
var action2;
var action3;
var url = "https://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?";

var getQuote = function(data) {
  $('#quote1').text(data.quoteText + "-" + data.quoteAuthor);
};

var getQuote2 = function(data) {
  $('#quote2').text(data.quoteText + "-" + data.quoteAuthor);
};

var getQuote3 = function(data) {
  $('#quote3').text(data.quoteText + "-" + data.quoteAuthor);
};

var getQuote4 = function(data) {
  $('#quote4').text(data.quoteText + "-" + data.quoteAuthor);
};

var getQuote5 = function(data) {
  $('#quote5').text(data.quoteText + "-" + data.quoteAuthor);
};

var getQuote6 = function(data) {
  $('#quote6').text(data.quoteText + "-" + data.quoteAuthor);
};

var getQuote7 = function(data) {
  $('#quote7').text(data.quoteText + "-" + data.quoteAuthor);
};

var getQuote8 = function(data) {
  $('#quote8').text(data.quoteText + "-" + data.quoteAuthor);
};

var getQuote9 = function(data) {
  $('#quote9').text(data.quoteText + "-" + data.quoteAuthor);
};

var getQuote10 = function(data) {
  $('#quote10').text(data.quoteText + "-" + data.quoteAuthor);
};

$(document).ready(function(){
    $('.twitter-box').css('display', 'none');
      
    $('.inspire').click(function(){

      $('.flex-container3').css('display', 'none');
       $('.twitter-box').css('display', 'flex');
      
      $.getJSON(url, getQuote, 'jsonp');
      $.getJSON(url, getQuote2, 'jsonp');
      $.getJSON(url, getQuote3, 'jsonp');
      $.getJSON(url, getQuote4, 'jsonp');
      $.getJSON(url, getQuote5, 'jsonp');
      $.getJSON(url, getQuote6, 'jsonp');
      $.getJSON(url, getQuote7, 'jsonp');
      $.getJSON(url, getQuote8, 'jsonp');
      $.getJSON(url, getQuote9, 'jsonp');
      $.getJSON(url, getQuote10, 'jsonp');
      
      //display quotes
    $('#quote1').fadeIn('slow');
    $('#quote2').fadeIn('slow');
    $('#quote3').fadeIn('slow');
    $('#quote4').fadeIn('slow');
    $('#quote5').fadeIn('slow');
    
    //yeah yeah , never repeat yourself and all that.
    $('#quote1').draggable();
    $('#quote2').draggable();
    $('#quote3').draggable();
    $('#quote4').draggable();
    $('#quote5').draggable();
    $('#quote6').draggable();
    $('#quote7').draggable();
    $('#quote8').draggable();
    $('#quote9').draggable();
    $('#quote10').draggable();
      
    $('.dragged-tweet').droppable({
      drop: function(event, ui){
        $(this).find('p').remove();
        $('<p></p>').text(ui.draggable.text()).appendTo(this);
        $('#pic').addClass('brighten');
        $('#pic').click(function(){
        window.open('https://twitter.com/intent/tweet?text=' + ui.draggable.text());
        history.go(0);
        });
        
      }
    });
    
      
    
    //randomise the confines of their top position
    $('#quote1').css({'top' : 60});
    $('#quote2').css({'top' : 120});
    $('#quote3').css({'top' : 240});
    $('#quote4').css({'top' : 360});
    $('#quote5').css({'top' : 480});
    
    $('#quote6').css({'top' : 90});
    $('#quote7').css({'top' : 175});
    $('#quote8').css({'top' : 285});
    $('#quote9').css({'top' : 400});
    $('#quote10').css({'top' : 545});
    
    //move right
    moveRight();
    secondGroup();
      
    });
  
    
  
 });


                    //functions


//move quotes right
function moveRight(){
  action = setInterval(function(){
    
    
    $('#quote1').css('left' , $('#quote1').position().left + 1.8);
    $('#quote2').css('left' , $('#quote2').position().left + 2.6);
    $('#quote3').css('left' , $('#quote3').position().left + 1.7);
    $('#quote4').css('left' , $('#quote4').position().left + 3.7);
    $('#quote5').css('left' , $('#quote5').position().left + 3.2);
    
    //if a quote leaves the screen, restart from the left be changing 'left'
    if($('#quote1').position().left > $('.flex-container2').width()){
      $('#quote1').css({'left' : -3000});
      $.getJSON(url, getQuote, 'jsonp');
    }
    
    if($('#quote2').position().left > $('.flex-container2').width()){
      $('#quote2').css({'left' : -1400});
      $.getJSON(url, getQuote2, 'jsonp');
    }
    
    if($('#quote3').position().left > $('.flex-container2').width()){
      $('#quote3').css({'left' : -1400});
      $.getJSON(url, getQuote3, 'jsonp');
    }
    
    if($('#quote4').position().left > $('.flex-container2').width()){
      $('#quote4').css({'left' : -1400});
      $.getJSON(url, getQuote4, 'jsonp');
    }
    
    if($('#quote5').position().left > $('.flex-container2').width()){
      $('#quote5').css({'left' : -1400});
      $.getJSON(url, getQuote5, 'jsonp');
    }
    
  }, 50);
}


function secondGroup() {
  //set a delay for the interval of the second group to fadeIn and slide across screen
  action2 = setTimeout(function(){
    action3 = setInterval(function(){
      
    $('#quote6').fadeIn('slow');
    $('#quote7').fadeIn('slow');
    $('#quote8').fadeIn('slow');
    $('#quote9').fadeIn('slow');
    $('#quote10').fadeIn('slow');
     
    $('#quote6').css('left' , $('#quote6').position().left + 1.8);
    $('#quote7').css('left' , $('#quote7').position().left + 2.6);
    $('#quote8').css('left' , $('#quote8').position().left + 1.7);
    $('#quote9').css('left' , $('#quote9').position().left + 3.7);
    $('#quote10').css('left' , $('#quote10').position().left + 3.2);
    
    //if a quote leaves the screen, restart from the left be changing 'left'
    if($('#quote6').position().left > $('.flex-container2').width()){
      $('#quote6').css({'left' : -1400});
      $.getJSON(url, getQuote6, 'jsonp');
    }
    
    if($('#quote7').position().left > $('.flex-container2').width()){
      $('#quote7').css({'left' : -1400});
      $.getJSON(url, getQuote7, 'jsonp');
    }
    
    if($('#quote8').position().left > $('.flex-container2').width()){
      $('#quote8').css({'left' : -1400});
      $.getJSON(url, getQuote8, 'jsonp');
    }
    
    if($('#quote9').position().left > $('.flex-container2').width()){
      $('#quote9').css({'left' : -1400});
      $.getJSON(url, getQuote9, 'jsonp');
    }
    
    if($('#quote10').position().left > $('.flex-container2').width()){
      $('#quote10').css({'left' : -1400});
      $.getJSON(url, getQuote10, 'jsonp');
    }
    
  }, 50);
    
  }, 10000);
}

