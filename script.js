let modal = document.getElementById("modal-content")
let button = document.getElementById("openModal")
let closeButton = document.querySelector(".close-modal")
let modalClass = document.querySelector("modal")

modal.style.display = "none";

button.onclick = ()=>{
	modal.style.display = "flex";
	modal.style.justify
}
closeButton.onclick = () =>{
	modal.style.display = "none";
}

 window.onclick = (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    };