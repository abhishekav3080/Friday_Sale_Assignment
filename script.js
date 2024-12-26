document.addEventListener("DOMContentLoaded", function () {
  const boxes = document.querySelectorAll(".box");

  boxes.forEach((box) => {
    const checkbox = box.querySelector(".circle-checkbox");

    box.addEventListener("mouseenter", function () {
      checkbox.checked = true;
    });

    box.addEventListener("mouseleave", function () {
      checkbox.checked = false;
    });

    box.addEventListener("click", function () {
      
      this.classList.toggle("expanded");

     
      boxes.forEach((otherBox) => {
        if (otherBox !== this) {
          otherBox.classList.remove("expanded");
        }
      });
    });
  });
});
