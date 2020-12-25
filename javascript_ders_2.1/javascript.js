function fun1(){
    let select = document.getElementById('myFavoritFruits').selectedIndex;
    let options = document.getElementById('myFavoritFruits').options;
    alert('My Choice: ' + options[select].text);
    
}
