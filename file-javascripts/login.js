const inputNodes = document.querySelectorAll('input');
const loginButtonNode = document.querySelector('.login-button button');
const alertLoginNode = document.querySelector('.login-form .alertLogin');
let accountList = JSON.parse(localStorage.getItem('accountList'));
if(accountList === null) accountList = [];
let conditionLogin = JSON.parse(localStorage.getItem('conditionLogin'));
if(conditionLogin === null) conditionLogin = false;
let nameUser = '';
const LoginUser = function(user,password,name) {
    this.user = user;
    this.password = password;
    this.name = name;
}
const checkValidAccount = function(acc,pass) {
    for(let i = 0; i < accountList.length; i += 1)
        if(accountList[i].user === acc && accountList[i].password === pass) {
            nameUser = `${accountList[i].name}`;
            return true;
        }
    return false;
}
const checkUserName = function(input) {
    input.parentElement.children[2].classList.add('hidden');
    return true;
}
const checkPassword = function(input) {
    input.parentElement.children[2].classList.add('hidden');
    return true;
}
const checkLogin = function(inputUser,inputPass) {
    if(checkValidAccount(inputUser.value,inputPass.value) === false) {
        alertLoginNode.classList.remove('hidden');
        alertLoginNode.textContent = `Không Tìm Thấy Tài Khoản`;
        return false;
    }
    return true;
}
loginButtonNode.addEventListener('click',(event)=>{
    event.preventDefault();
    inputNodes[0].parentElement.children[2].classList.add('hidden');
    inputNodes[1].parentElement.children[2].classList.add('hidden');
    alertLoginNode.classList.add('hidden');
    let isValid = true;
    while(isValid) {
        if(checkUserName(inputNodes[0]) === false) {
            isValid = false;
            break;
        }
        if(checkPassword(inputNodes[1]) === false) {
            isValid = false;
            break;
        }
        if(checkLogin(inputNodes[0],inputNodes[1]) === false) {
            isValid = false;
            break;
        }
        break;
    }
    if(isValid) {
        alertLoginNode.classList.remove('hidden');
        alertLoginNode.textContent = `Đăng Nhập Thành Công`;
        conditionLogin = true;
        localStorage.setItem('conditionLogin',JSON.stringify(conditionLogin));
        const loginUser = new LoginUser(inputNodes[0].value,inputNodes[1].value,nameUser);
        localStorage.setItem('LoginUser',JSON.stringify(loginUser));
        setTimeout(()=>{
            window.location = "index.html";
        },500);
    }
});