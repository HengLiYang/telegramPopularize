$(function () {
   $(".copy-statement").click(function () {
       var text = document.getElementsByClassName('leftMathRandomCode')[0];
       if (document.body.createTextRange) {
           var range = document.body.createTextRange();
           range.moveToElementText(text);
           range.select();
       } else if (window.getSelection) {
           var selection = window.getSelection();
           var range = document.createRange();
           range.selectNodeContents(text);
           selection.removeAllRanges();
           selection.addRange(range);
       } else {
           console.log("none");
       }
       document.execCommand('Copy','false',text);
       $(".copy-success-tip").show();
       clearTimeout(timer);
       var timer = setTimeout(function () {
           $(".copy-success-tip").hide();
       },3000)
   })
});