document.addEventListener("DOMContentLoaded", function() {
    var button = document.querySelector(".get-started-btn");
  
    if (button) {
      button.addEventListener("click", function() {
        document.getElementById("service-section").scrollIntoView({ behavior: "smooth" });
      });
    }
  });
  