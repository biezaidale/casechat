let switchCtn = document.querySelector("#switch-cnt");
let switchC1 = document.querySelector("#switch-c1");
let switchC2 = document.querySelector("#switch-c2");
let switchCircle = document.querySelectorAll(".switch_circle");
let switchBtn = document.querySelectorAll(".switch-btn");
let aContainer = document.querySelector("#a-container");
let bContainer = document.querySelector("#b-container");
let allButtons = document.querySelectorAll(".submit");
let getButtons = (e) => e.preventDefault()
let changeForm = (e) => {
    // 修改类名
    switchCtn.classList.add("is-gx");
    setTimeout(function () {
        switchCtn.classList.remove("is-gx");
        }, 1500)
    switchCtn.classList.toggle("is-txr");
    switchCircle[0].classList.toggle("is-txr");
    switchCircle[1].classList.toggle("is-txr");
    switchC1.classList.toggle("is-hidden");
    switchC2.classList.toggle("is-hidden");
    aContainer.classList.toggle("is-txl");
    bContainer.classList.toggle("is-txl");
    bContainer.classList.toggle("is-z");
}
// 点击切换
let shell = (e) => {
    let i;
    for (i = 0; i < allButtons.length; i++)
        allButtons[i].addEventListener("click", getButtons);
    for (i = 0; i < switchBtn.length; i++)
        switchBtn[i].addEventListener("click", changeForm)
}
window.addEventListener("load", shell);

function $(id){
    return document.getElementById(id);
}

//注册模块
var flag1 = false;
var flag2 = false;
var flag3 = false;
//检查用户名
function checkUsername(){
    $("error_name").innerText = "";
    //1.获取用户名
    var userName = $("username").value;
    //2.判断用户名是否为空
    if(userName == "" || userName == null){
        $("error_name").innerText = "*用户名不能为空";
        //遇到错误就终止 返回
        return;
    }
    //3.长度4~16
    if(userName.length < 4 || userName.length > 16){
        $("error_name").innerText = "*用户名长度在4~16之间";
        return;
    }
    //4.只包含字母、数字及下划线
    var userMatch = /^\w+$/;
    if(!userName.match(userMatch)){
        $("error_name").innerText = "*用户名只包含字母、数字及下划线";
        return;
    }
    flag1 = true;
}

//检查密码
function checkPassword(){
    $("error_pwd").innerText = "";
    //1.获取密码
    var passWord = $("password").value;
    //2.判断密码是否为空
    if(passWord == "" || passWord == null){
        $("error_pwd").innerText = "*密码不能为空";
        return;
    }
    //3.长度6~32
    if(passWord.length < 6 || passWord.length > 16){
        $("error_pwd").innerText = "*密码长度在6~16之间";
        return;
    }
    flag2 = true;
}

//确认密码
function confirmPassword(){
    $("error_confirm").innerText = "";
    var passWord = $("password").value;
    if(passWord == "" || passWord == null){
        $("error_confirm").innerText = "*请先输入符合标准的密码";
        return;
    }
    var confirmPwd = $("confirmPwd").value;
    if(confirmPwd == "" || confirmPwd == null){
        $("error_confirm").innerText = "*确认密码不能为空";
        return;
    }
    if(passWord != confirmPwd){
        $("error_confirm").innerText = "*两次输入的密码不一致";
        return;
    }
    flag3 = true;
}

function signUp(){
    if(flag1 && flag2 && flag3){

    }
}