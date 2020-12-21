function clickOnNav(){
    var nav = document.getElementsByClassName('dropContent')[0];
    if(nav.style.display == "block"){
        nav.style.display = "none"
    }
    else{
        nav.style.display = "block"
    }
}