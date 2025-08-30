document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("readMoreBtn");
  const moreText = document.getElementById("moreText");

  // Exit if the button doesn't exist on the page
  if (!btn || !moreText) {
    return;
  }

  btn.addEventListener("click", () => {
    const isHidden = moreText.style.display === "none";
    
    if (isHidden) {
      moreText.style.display = "inline";
      btn.textContent = "READ LESS";
    } else {
      moreText.style.display = "none";
      btn.textContent = "READ MORE";
    }
  });
});