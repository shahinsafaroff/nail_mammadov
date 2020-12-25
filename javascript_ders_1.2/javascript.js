function fun1() {
    let radio=document.getElementsByName('r1');
    for (let i=0; i<radio.length; i++){
        if (radio[i].checked) {
            alert('Selected '+i+' radio element');
        }
    }
}