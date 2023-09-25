const technologies = document.querySelectorAll(".icons")


technologies.forEach( t => {
    t.addEventListener("mouseover", () => {

        const description =  t.getAttribute("title");

        let child =  document.createElement("div");
        child.className = "description";

        let paragraph = document.createElement("p");
        paragraph.textContent = description; 

        child.appendChild(paragraph);
        
        t.appendChild(child)

        t.addEventListener("mouseout", () =>{
            t.removeChild(child)
        })
    })
})