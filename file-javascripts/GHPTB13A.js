const inputNodes = document.querySelectorAll('input');
const kqNode = document.querySelector('.btn-kq');
const resetNode = document.querySelector('.btn-reset');
const noticeNodes = document.querySelectorAll('.notice');
const resultNoticeNode = document.querySelector('.result-notice');
const characterNode = document.querySelector('.character2');
let a11,a12,a13,a21,a22,a23,a31,a32,a33,b1,b2,b3,x,y,z,d,dx,dy,dz;
kqNode.addEventListener('click',() => {
    if(inputNodes[0].value === '' || inputNodes[1].value === '' || inputNodes[2].value === '' || inputNodes[3].value === ''|| inputNodes[4].value === '' || inputNodes[5].value === ''
        || inputNodes[6].value === '' || inputNodes[7].value === "" || inputNodes[8].value === '' || inputNodes[9].value === "" || inputNodes[10].value === '' || inputNodes[11].value === '') {
        resultNoticeNode.classList.remove('hidden');
        resultNoticeNode.textContent = `Input Not Null`;
    }
    else {
        a11 = inputNodes[0].value;
        a12 = inputNodes[1].value;
        a13 = inputNodes[2].value;
        b1 = inputNodes[3].value;
        a21 = inputNodes[4].value;
        a22 = inputNodes[5].value;
        a23 = inputNodes[6].value;
        b2 = inputNodes[7].value;
        a31 = inputNodes[8].value;
        a32 = inputNodes[9].value;
        a33 = inputNodes[10].value;
        b3 = inputNodes[11].value;
        if(a12 >= 0)
            if(a13 >= 0) 
                noticeNodes[0].textContent = `${a11}x+${a12}y+${a13}= ${b1}`;
            else
                noticeNodes[0].textContent = `${a11}x+${a12}${a13}= ${b1}`;
        else
            if(a13 >= 0) 
                noticeNodes[0].textContent = `${a11}x${a12}y+${a13}= ${b1}`;
            else
                noticeNodes[0].textContent = `${a11}x${a12}${a13}= ${b1}`;
        if(a22 >= 0)
            if(a23 >= 0) 
                noticeNodes[1].textContent = `${a21}x+${a22}y+${a23}= ${b2}`;
            else
                noticeNodes[1].textContent = `${a21}x+${a22}${a23}= ${b2}`;
        else
            if(a23 >= 0) 
                noticeNodes[1].textContent = `${a21}x${a22}y+${a23}= ${b2}`;
            else
                noticeNodes[1].textContent = `${a21}x${a22}${a23}= ${b2}`;
        if(a32 >= 0)
            if(a33 >= 0) 
                noticeNodes[2].textContent = `${a31}x+${a32}y+${a33}= ${b3}`;
            else
                noticeNodes[2].textContent = `${a31}x+${a32}${a33}= ${b3}`;
        else
            if(a33 >= 0) 
                noticeNodes[2].textContent = `${a31}x${a32}y+${a33}= ${b3}`;
            else
                noticeNodes[2].textContent = `${a31}x${a32}${a33}= ${b3}`;
        noticeNodes[0].classList.remove('hidden');
        noticeNodes[1].classList.remove('hidden');
        noticeNodes[2].classList.remove('hidden');
        characterNode.classList.remove('hidden');
        d = a11*a22*a33 + a12*a23*a31 + a21*a32*a13 - a13*a22*a31 - a12*a21*a33 - a11*a32*a23;
        dx = b1*a22*a33 + a12*a23*b3 + b2*a32*a13 - a13*a22*b3 - a12*b2*a33 - a23*a32*b1;
        dy = a11*b2*a33 + b1*a23*a31 + a21*b3*a13 - a13*b2*a31 - b1*a21*a33 - a23*b3*a11;
        dz = a11*a22*b3 + a12*b2*a31 + a21*a32*b1 - b1*a22*a31 - a12*a21*b3 - b2*a32*a11;
        if(d === 0) {
            if((dx === 0) && (dy === 0) && (dz === 0)) {
                resultNoticeNode.textContent = `Hệ phương trình vô số nghiệm`;
                resultNoticeNode.classList.remove('hidden');
            }
            else {
                resultNoticeNode.textContent = `Hệ phương trình vô nghiệm`;
                resultNoticeNode.classList.remove('hidden');
            }
        }
        else {
            resultNoticeNode.textContent = `Hệ phương trình có nghiệm: x = ${dx/d}, y = ${dy / d}, z = ${dz / d}`;
            resultNoticeNode.classList.remove('hidden'); 
        }
    }     
});
resetNode.addEventListener('click',() => {
    inputNodes[0].value = '';
    inputNodes[1].value = '';
    inputNodes[2].value = '';
    inputNodes[3].value = '';
    inputNodes[4].value = '';
    inputNodes[5].value = '';
    inputNodes[6].value = '';
    inputNodes[7].value = '';
    inputNodes[8].value = '';
    inputNodes[9].value = '';
    inputNodes[10].value = '';
    inputNodes[11].value = '';
    noticeNodes[0].classList.add('hidden');
    noticeNodes[1].classList.add('hidden');
    noticeNodes[2].classList.add('hidden');
    resultNoticeNode.classList.add('hidden');
    characterNode.classList.add('hidden');
});