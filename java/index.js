let mybars = document.querySelector(".bars");

let myNav = document.querySelector(".navigation");
let links = document.querySelector("header nav")


mybars.addEventListener("click", () => {
    myNav.classList.toggle("open")
})

links.addEventListener("click", () => {
        if(myNav.classList.contains("open")){
            myNav.classList.toggle("open")
        }
        
})