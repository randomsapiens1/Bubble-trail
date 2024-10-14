const bodyEl = document.querySelector("body")

bodyEl.addEventListener("mousemove", (event)=> {
    const xPos = event.clientX;    
    const yPos = event.clientY;   
    
    
    const divEl = document.createElement("div");
    divEl.className = "bubble";
    divEl.style.top = xPos + "px";
    divEl.style.left = yPos + "px";

    const size = Math.random()*30 + 10;
    divEl.style.height = size + "px";
    divEl.style.width= size + "px";

    bodyEl.appendChild(divEl);

    setTimeout(()=> {
        divEl.remove();
    }, 2000);
    
});