$(function () {
    // 点击获取验证码展示倒计时
    var countDown = 60 ;
    $(".getNoteCode-container").click(function () {
        // var telReg = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\\d{8}$/ ;
        var telReg =/^[1][3,4,5,7,8][0-9]{9}$/;
        var mobilephoneVal = $("#mobilephone").val();
        if (mobilephoneVal === '') {
            $(".nofix-tip-statement").text("手机号码不能为空").css("cssText","color:red !important;");
            return false
        }
        else if(!telReg.test(mobilephoneVal)) {
            $(".nofix-tip-statement").text("手机号码格式错误").css("cssText","color:red !important;");
            return false
        }
        $(".nofix-tip-statement").text("每手机号绑定成功后不可修改，请仔细确认").css("cssText","color:#938E8E !important;");
        console.log(111)
        var obj = $(this);
        settime(obj);
    });
    function settime(obj) { //发送验证码倒计时
        if (countDown == 0) {
            obj.attr('disabled',false);
            obj.val("获取验证码");
            obj.css({color: '#FF5208'});
            countDown = 60;
            return;
        } else {
            obj.attr('disabled',true);
            obj.val(countDown + "s后重新发送");
            obj.css({color: '#8E8E93'});
            countDown--;
        }
        setTimeout(function() {
            settime(obj)
        },1000)
    }
});


