const registrationNode = document.querySelector('.button-registration button');
const inputNodes = document.querySelectorAll('.user-password input');
const alertRegistrationNode = document.querySelector('.alertRegistration');
let accountList = JSON.parse(localStorage.getItem('accountList'));
if(accountList === null) accountList = [];
const Account = function(user,password,name) {
    this.user = user;
    this.password = password;
    this.name = name;
}
const checkAccount = function(acc) {
    for(let i = 0; i < accountList.length; i += 1)
        if(accountList[i].user === acc)
            return false;
    return true;
}
const checkUserName = function(input) {
    if(input.value === '') {
        alertRegistrationNode.classList.remove('hidden');
        alertRegistrationNode.textContent = `Vui Lòng Không Bỏ Trống`;
        return false;
    }
    alertRegistrationNode.classList.add('hidden');
    return true;
}
const checkValidtUserName = function(input) {
    if(checkAccount(input.value) === false) {
        alertRegistrationNode.classList.remove('hidden');
        alertRegistrationNode.textContent = `Tên Đăng Nhập Đã Tồn Tại`;
        return false;
    }
    alertRegistrationNode.classList.add('hidden');
    return true;
}
const checkPasswork = function(input) {
    if(input.value === '') {
        alertRegistrationNode.classList.remove('hidden');
        alertRegistrationNode.textContent = `Vui Lòng Không Bỏ Trống`;
        return false;
    }
    alertRegistrationNode.classList.add('hidden');
    return true;
}
const checkValidPassword = function(input) {
    if(input.value !== inputNodes[1].value) {
        alertRegistrationNode.classList.remove('hidden');
        alertRegistrationNode.textContent = `Mật Khẩu Xác Nhận Không Chính Xác`;
        return false;
    }
    alertRegistrationNode.classList.add('hidden');
    return true;
}
registrationNode.addEventListener('click', () => {
    inputNodes.forEach(item => {
        alertRegistrationNode.classList.add('hidden');
    });
    let isValid = true;
    while(isValid) {
        if(checkUserName(inputNodes[0]) === false) {
            isValid = false;
            break;
        }
        if(checkPasswork(inputNodes[1]) === false) {
            isValid = false;
            break;
        }
        if(checkValidPassword(inputNodes[2]) === false) {
            isValid = false;
            break;
        }
        if(checkValidtUserName(inputNodes[0]) === false) {
            isValid = false;
            break;
        }
        break;
    }
    if(isValid) {
        const account = new Account(inputNodes[0].value,inputNodes[1].value,'');
        accountList.push(account);
        localStorage.setItem('accountList',JSON.stringify(accountList));
        alertRegistrationNode.textContent = `Đăng Ký Thành Công`;
        alertRegistrationNode.classList.remove('hidden');
        window.location = `login.html`;
    }
});