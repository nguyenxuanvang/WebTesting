const inputNodes = document.querySelectorAll('input');
const btnFnd = document.querySelector('button');
const noticeNode = document.querySelector('.notice');
const alertAcademic = document.querySelector('.alert-Academic');
let kc = [];
const checkNull = function(inputs) {
    isNull = false;
    inputs.forEach(item => {
        if(item.value === '')
            isNull = true;
    })
    return isNull;
}
const checkAcademic = function(t,v,a,tb) {
    kc = [];
    let arr = [t,v,a];
    if(tb >= 9) {
        for(let i = 0; i < arr.length; i += 1)
            if(arr[i] < 7.5) kc.push(i);
    }
    else {
        if(tb >= 8) {
            for(let i = 0; i < arr.length; i += 1)
                if(arr[i] < 6.5) kc.push(i);
        }        
        else {
            if(tb >= 7) {
                for(let i = 0; i < arr.length; i += 1)
                    if(arr[i] < 5.5) kc.push(i);
            }
            else {
                if(tb >= 6) {
                    for(let i = 0; i < arr.length; i += 1)
                        if(arr[i] < 4.5) kc.push(i);
                }
                else {
                    if(tb >= 5) {
                        for(let i = 0; i < arr.length; i += 1)
                            if(arr[i] < 3.5) kc.push(i);
                    }
                    else {
                        if(tb >= 4) {
                            for(let i = 0; i < arr.length; i += 1)
                                if(arr[i] < 2.5) kc.push(i);
                        }
                    }
                }
            }
        }
    }
    return kc;
}
btnFnd.addEventListener('click',() => {
    if(checkNull(inputNodes)) {
        noticeNode.textContent = `Input Not Null`;
        noticeNode.classList.remove('hidden');
    }
    else {
        let isUncontrol = false;
        let subUncontrolList = [];
        let subUncontrol;
        toan = Number(inputNodes[0].value);
        van = Number(inputNodes[1].value);
        anh = Number(inputNodes[2].value);
        tb = Number(inputNodes[3].value);
        alertAcademic.textContent = `Điểm của bạn: Toán: ${toan}, Văn: ${van}, Anh: ${anh}, TB: ${tb}`;
        alertAcademic.classList.remove('hidden');
        kc = checkAcademic(toan,van,anh,tb);
        if(kc.length === 0) isUncontrol = false;
        else {
            isUncontrol = true;
            kc.forEach(item => {
                if(item === 0) {
                    subUncontrol = 'Math';
                    subUncontrolList.push(subUncontrol);
                }
                if(item === 1) {
                    subUncontrol = 'Literature';
                    subUncontrolList.push(subUncontrol);
                }
                if(item === 2) {
                    subUncontrol = 'English';
                    subUncontrolList.push(subUncontrol);
                }
            })
        }
        if(isUncontrol) {
            if(tb >= 9) {
                noticeNode.textContent = `Rank: Good (Subject Control: ${subUncontrolList})`;
                noticeNode.classList.remove('hidden');
            }
            else {
                if(tb >= 8) {
                    noticeNode.textContent = `Rank: Rather (Subject Control: ${subUncontrolList})`;
                    noticeNode.classList.remove('hidden');
                }
                else {
                    if(tb >= 7) {
                        noticeNode.textContent = `Rank: Improvement (Subject Control: ${subUncontrolList})`;
                        noticeNode.classList.remove('hidden');
                    }
                    else {
                        if(tb >= 6) {
                            noticeNode.textContent = `Rank: Medium (Subject Control: ${subUncontrolList})`;
                            noticeNode.classList.remove('hidden');
                        }
                        else {
                            if(tb >= 5) {
                                noticeNode.textContent = `Rank: Bad (Subject Control: ${subUncontrolList})`;
                                noticeNode.classList.remove('hidden');
                            }
                            else {
                                if(tb >= 4) {
                                    noticeNode.textContent = `Rank: Weak (Subject Control: ${subUncontrolList})`;
                                    noticeNode.classList.remove('hidden');
                                }
                                else {
                                    noticeNode.textContent = `Rank: Weak`;
                                    noticeNode.classList.remove('hidden');
                                }
                            }
                        }
                    }
                }
            }
        }
        else {
            if(tb >= 9) {
                noticeNode.textContent = `Rank: Excellent`;
                noticeNode.classList.remove('hidden');
            }
            else {
                if(tb >= 8) {
                    noticeNode.textContent = `Rank: Good`;
                    noticeNode.classList.remove('hidden');
                }
                else {
                    if(tb >= 7) {
                        noticeNode.textContent = `Rank: Rather`;
                        noticeNode.classList.remove('hidden');
                    }
                    else {
                        if(tb >= 6) {
                            noticeNode.textContent = `Rank: Improvement`;
                            noticeNode.classList.remove('hidden');
                        }
                        else {
                            if(tb >= 5) {
                                noticeNode.textContent = `Rank: Medium`;
                                noticeNode.classList.remove('hidden');
                            }
                            else {
                                if(tb >= 4) {
                                    noticeNode.textContent = `Rank: Bad`;
                                    noticeNode.classList.remove('hidden');
                                }
                                else {
                                    noticeNode.textContent = `Rank: Weak`;
                                    noticeNode.classList.remove('hidden');
                                }
                            }
                        }
                    }
                }
            }
        }
    }
});