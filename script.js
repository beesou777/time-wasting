let count = document.querySelector(".count")
let progress = document.querySelector(".progress-bar")
let progressRight = document.querySelector(".progress-right")
let progressTop = document.querySelector(".progress-top")
let progressLeft = document.querySelector(".progress-left")
let message = document.querySelector("h1")
let countDiv = document.querySelector("h2")
let background = document.querySelector(".container")

window.document.addEventListener("click",()=>{
    let currentWidthTop = parseInt(progressTop.style.width) || 0 //top
    let currentHeightRight = parseInt(progressRight.style.height) || 0 //right
    let currentWidth = parseInt(progress.style.width) || 0 //bottom
    let currentHeight = parseInt(progressLeft.style.height) || 0 // left
    count.textContent++
    // bottom
    if(currentWidth <=99){
        progress.style.width = (currentWidth + 1) +"vw"
    }

      // // top
      if(currentHeightRight >=99 && currentWidthTop <=99){
        progressTop.style.width = (currentWidthTop + 1) +"vw"
    }

    // right
    if(currentWidth >=99 && currentHeightRight <=99){
        progressRight.style.height = (currentHeightRight + 1) +"vh"
    }

    // left
    if(currentWidthTop >=99 && currentHeight <=99){
        progressLeft.style.height = (currentHeight + 1) +"vh"
    }

    if(currentHeight >= 99){
        message.textContent = "Utilizing time is crucial, so it should not be wasted."
        countDiv.remove()
        background.style.background = "#1b4fe1c4"

    }


})

