const cross = document.getElementById("cross");
const comment = document.querySelector(".float__com");

cross.addEventListener("click", function() {
    comment.classList.add("cmtNone")
})

comment.addEventListener("click", function() {
    comment.classList.add("cmtHeight")
})

// setting sound
const setSounds = document.querySelectorAll(".setSound");
const sound_range = document.querySelector(".sound_range")
setSounds.forEach(element => {
  element.addEventListener("click", function() {
    setSounds.forEach(setSound => {
        setSound.classList.toggle("hidden");
        if(setSound.classList.contains("hidden")){
          sound_range.classList.add("hidden")
        }

        if(!setSound.classList.contains("hidden")){
          sound_range.classList.remove("hidden")
        }
      
        
    });
  });
});

// admin bar
const adminImg = document.querySelector(".adminImg");
const admine = document.querySelector(".admine");
const admin__logs = document.querySelector(".admin__logs");

adminImg.addEventListener("click", function() {
    admin__logs.classList.toggle("transform")
})

const mikeElements = document.querySelectorAll(".mike");
mikeElements.forEach(element => {
  element.addEventListener("click", function() {
    mikeElements.forEach(mikeElement => {
      mikeElement.classList.toggle("hidden");
    });
  });
});


const calls = document.querySelectorAll(".call");
calls.forEach(element => {
  element.addEventListener("click", function() {
    calls.forEach(call => {
      call.classList.toggle("hidden");
    });
  });
});

// settings sound js
const sounds = document.querySelectorAll(".sound");
sounds.forEach(element => {
  element.addEventListener("click", function() {
    sounds.forEach(sound => {
        sound.classList.toggle("hidden");
    });
  });
});

// sidebar js
const sidebar = document.querySelector(".sidebar");
const sidebarBtn = document.querySelector(".sidebarBtn");

const menuOff = document.querySelector(".menuOff")

menuOff.addEventListener("click", function(){
  sidebar.classList.remove("xOn")
  sidebar.classList.add("sideOff")
})

sidebarBtn.addEventListener("click", function() {
        sidebar.classList.toggle("sideOff");
        sidebar.classList.toggle("xOn")
});


// window click js
window.addEventListener("click", function(event) {
  if(!cross.contains(event.target) && !comment.contains(event.target)){
    comment.classList.add("cmtNone")  
  }

  // && !sidebar.contains(event.target)
    if (!sidebarBtn.contains(event.target) ) {
        sidebar.classList.remove("xOn")
      }

    if ((!admine.contains(event.target))  ) {
        admin__logs.classList.remove("transform")
      }
      
});  


