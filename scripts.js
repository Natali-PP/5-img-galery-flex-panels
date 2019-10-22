const panels = document.querySelectorAll(".panel");

function changeSize(){
    this.classList.toggle("open");
};

function openActive(e){
    if (e.propertyName.includes('flex-grow')){
        this.classList.toggle("open-active");
    };
};

panels.forEach(panel => panel.addEventListener('click', changeSize));

panels.forEach( panel => panel.addEventListener("transitionend", openActive));