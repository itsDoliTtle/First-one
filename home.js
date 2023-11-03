const carousel =document.querySelector(".ul");

let isDragging = false;

const dragStart = () => {
    isDragging = true;
}

const dragging = (e) => {
    if(!isDragging) return;
    carousel.scrollLeft = e.pageX;
}

carousel.addEventListener('mousemove', dragStart);
carousel.addEventListener('mousemove', dragging);