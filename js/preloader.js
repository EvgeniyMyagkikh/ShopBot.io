document.body.onload = function (){
    setTimeout(function (){
        const preloader = document.getElementById("preloader");
        if (!preloader.classList.contains("_done")){
            preloader.classList.add("_done");
        }
    }, 1000);
}