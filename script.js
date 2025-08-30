let modal = document.querySelector(".modal");
    let button = document.getElementById("openModal");
    let closeButton = document.querySelector(".close-modal");

    // Open modal
    button.onclick = () => {
      modal.style.display = "block";
    };

    // Close modal by button
    closeButton.onclick = () => {
      modal.style.display = "none";
    };

    // Close modal by clicking outside content
    window.onclick = (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    };