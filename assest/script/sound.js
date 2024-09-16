const sound = new Audio("./assest/sound/water_drop.mp3");

document.addEventListener("click",function(){
    sound.play();
});

document.querySelectorAll("a").forEach(links => {
    links.addEventListener("click",function(event){
        event.preventDefault();
        sound.play();
        setTimeout(() => {
            window.location.href=this.href;
        }, 300);
    }
    )})