

    var message = "console master >  HELLO __________ .<br/> I your your assistent Mogambo.";
var showText = function (target, message, index, interval) {    
    if (index <= message.length && $(target).is(':visible')) { 
        $(target).html(message.substr(0, index++)); 
        setTimeout(function () { showText(target, message, index, interval); }, interval); 
    } 
}
$(function () { 
 
  showText("#mycontent", message, 0, 100);    
 
}); 



