//1.Loading button with alert
var $body = $("body");
var $elem = createButton();
$body.append($elem);

function createButton(data) {

  var button = $('<div id="my-button">button</div>')
    // .css({

    //  }).append($('<a>').attr({
    //    'target' : '_blank',
    //    'rel' : 'nofollow'
    //  }).append($('<image src="css/images/Facebook-icon.png">').css({

    //  })));

//2

     button.click(function () {
        alert("A better version of Simple Tasks...2.0!")
     });

     return button;     
}

//3.Random color on hover
$(document).ready(function(){
  $("#container").hover(function(){
      var r = Math.floor(Math.random() * 255);
      var g = Math.floor(Math.random() * 255);
      var b = Math.floor(Math.random() * 255);
      var color = "rgb("+r+","+g+","+b+")"
      $(this).css("background-color", color);
  });
});

//4.Random color on text
// $(document).ready(function() {
    
//     $('text').randomizeColor({
//         speed : 500,
//         property : "backgroundColor",
//         infinite : true,
//         definedColors : ["#FF8000", "#AA0070"],
//     });
// });

//5.Add button on click
var x=1
function appendRow()
{
   var d = document.getElementById('div');
   d.innerHTML += "dominique ";
}

//Six
$(document).ready(function() {
    var array = ['Bria', '<br>', 'William','<br>', 'Andre','<br>', 'Kim','<br>', 'Cocheta','<br>', 'Daisy','<br>', 'Kennedy','<br>', 'Sydney','<br>', 'Liam','<br>', 'Shari'];

    var el = $.map(array, function(val, i) {
      return "<span>" + val + "</span>";
    });
    
    $(".element").html(el.join(""));
});

//Seven