const inputNodes = document.querySelectorAll('input');
const btnFnd = document.querySelector('button');
const alerYourBirthdayNode = document.querySelector('.alert-your-birthday');
const noticeNode = document.querySelector('.notice');
let day,month,year,gender;
let check = function(gender,d,m,y,) {
    let isValid = false;
    const time = new Date();
    if(gender) {
        let age = time.getFullYear() - y;
        if(age > 20) isValid = true;
        if(age === 20 && m >= time.getMonth() && d >= time.getDate()) isValid = true;
    }
    else {
        let age = time.getFullYear() - y;
        if(age > 18) isValid = true;
        if(age === 18 && m >= time.getMonth() && d >= time.getDate()) isValid = true;
    }
    return isValid;
}
inputNodes.forEach(item => {
    item.addEventListener('input',()=>{
        alerYourBirthdayNode.classList.add('hidden');
        noticeNode.classList.add('hidden');
    })
})
btnFnd.addEventListener('click',() => {
    if(inputNodes[0].checked === false && inputNodes[1].checked === false) {
        noticeNode.textContent = `Chưa Chọn Giới Tính`;
        noticeNode.classList.remove('hidden');
    }
    else {
        if(inputNodes[2].value === '' || inputNodes[3].value === '' || inputNodes[4].value === '') {
            noticeNode.textContent = `Không Được Để Trống`;
            noticeNode.classList.remove('hidden');
        }
        else {
            gender = inputNodes[0].checked;
            day = Number(inputNodes[2].value);
            month = Number(inputNodes[3].value);
            year = Number(inputNodes[4].value);
            alerYourBirthdayNode.textContent = `Bạn Sinh Ngày ${day} Tháng ${month} Năm ${year}`;
            alerYourBirthdayNode.classList.remove('hidden');
            if(check(gender,day,month,year)) {
                noticeNode.textContent = `Bạn Đã Đủ Tuổi Kết Hôn`;
                noticeNode.classList.remove('hidden');
            }
            else {
                noticeNode.textContent = `Bạn Chưa Được Phép Kết Hôn`;
                noticeNode.classList.remove('hidden');
            }
        }
    }
});