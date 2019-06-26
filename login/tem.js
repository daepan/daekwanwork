$(function(){
    var userId = getCookie("Cookie_userid");
    $("#userId").val(userId);

    if($("#userId").val() != "")
        $("#saveId").attr("checked", true);
});

function loginProcess(){
    var id = document.getElementById('userId');
    var pw = document.getElementById('userPw');
    var loginForm = document.getElementById('loginForm');

    if(id.value==""){
        alert("Enter ID");
        id.focus();
        return false;
    }else if(password.value==""){
        alert("Enter password");
        password.focus();
        return false;
    }else if($("#saveId").is(":checked")){
        var userId = $("#userId").val();
        setCookie("Cookie_userid", userId, 30);
        loginForm.submit();
    }else{
        deleteCookie("Cookie_userid");
        loginForm.submit();
    }
}
