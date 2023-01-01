const inputNodes = document.querySelectorAll('input');
const kqNode = document.querySelector('.btn-kq');
const resetNode = document.querySelector('.btn-reset');
const noticeNode = document.querySelector('.notice');
const resultNoticeNode = document.querySelector('.result-notice');
let a,b,c,x1,x2,x3;
kqNode.addEventListener('click',() => {
    if(inputNodes[0].value === '' || inputNodes[1].value === '' || inputNodes[2].value === '' || inputNodes[3].value === '') {
        resultNoticeNode.classList.remove('hidden');
        resultNoticeNode.textContent = `Input Not Null`;
    }
    else {
        a = inputNodes[0].value;
        b = inputNodes[1].value;
        c = inputNodes[2].value;
        d = inputNodes[3].value;
        let delta = b*b-3*a*c;
        let k = ((9*a*b*c) - (2*b*b*b) - (27*a*a*d)) / (2*Math.sqrt(Math.abs(delta)*Math.abs(delta)*Math.abs(delta)));
        if(b >= 0)
            if(c >= 0)
                if(d >= 0)
                    noticeNode.textContent = `${a}x³+${b}x²+${c}x+${d} = 0`;
                else
                    noticeNode.textContent = `${a}x³+${b}x²+${c}x${d} = 0`;
            else
                if(d >= 0)
                    noticeNode.textContent = `${a}x³+${b}x²${c}x+${d} = 0`;
                else
                    noticeNode.textContent = `${a}x³+${b}x²${c}x${d} = 0`;
        else
            if(c >= 0)
                if(d >= 0)
                    noticeNode.textContent = `${a}x³${b}x²+${c}x+${d} = 0`;
                else
                    noticeNode.textContent = `${a}x³${b}x²+${c}x${d} = 0`;
            else
                if(d >= 0)
                    noticeNode.textContent = `${a}x³${b}x²${c}x+${d} = 0`;
                else
                    noticeNode.textContent = `${a}x³${b}x²${c}x${d} = 0`;
        noticeNode.classList.remove('hidden');
        if(delta > 0)
            if(Math.abs(k) <= 1) {
                x1 = ((2*Math.sqrt(delta)*Math.cos(Math.acos(k)/3)) - b) / (3*a);
                x2 = ((2*Math.sqrt(delta)*Math.cos((Math.acos(k)/3)-(2*Math.PI/3))) - b) / (3*a);
                x3 = ((2*Math.sqrt(delta)*Math.cos((Math.acos(k)/3)+(2*Math.PI/3))) - b) / (3*a);
                resultNoticeNode.textContent = `Phương trình có 3 nghiệm: X₁ = ${x1.toFixed(2)}, X₂ = ${x2.toFixed(2)}, X₃ = ${x3.toFixed(2)}`;
                resultNoticeNode.classList.remove('hidden');
            }
            else {
                x1 = (Math.sqrt(delta)*Math.abs(k)/(3*a*k))*((Math.pow(Math.abs(k)+Math.sqrt(k*k-1)),1/3)+(Math.pow(Math.abs(k)-Math.sqrt(k*k-1)),1/3)) - b/(3*a);
                resultNoticeNode.textContent = `Phương trình có một nghiệm duy nhất: X = ${x1.toFixed(2)}`;
                resultNoticeNode.classList.remove('hidden');
            }
        else
            if(delta === 0) {
                x1 = (-b + Math.pow(((b*b*b)-(27*a*a*d)),1/3))/(3*a);
                resultNoticeNode.textContent = `Phương trình có một nghiệm bội: X = ${x1.toFixed(2)}`;
                resultNoticeNode.classList.remove('hidden');
            }
            else {
                x1 = ((Math.sqrt(Math.abs(delta)) / (3*a))) * ((Math.pow(Math.abs(k)+Math.sqrt(k*k-1)),1/3)+(Math.pow(Math.abs(k)-Math.sqrt(k*k-1)),1/3)) - b/(3*a);
                resultNoticeNode.textContent = `Phương trình có một nghiệm duy nhất: X = ${x1.toFixed(2)}`;
                resultNoticeNode.classList.remove('hidden');
            }
    }     
});
resetNode.addEventListener('click',() => {
    inputNodes[0].value = '';
    inputNodes[1].value = '';
    inputNodes[2].value = '';
    inputNodes[3].value = '';
    noticeNode.classList.add('hidden');
    resultNoticeNode.classList.add('hidden');
});