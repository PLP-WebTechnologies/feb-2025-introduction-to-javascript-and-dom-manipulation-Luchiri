function changeText() {
    const text = document.getElementById("dynamic-text");
    text.textContent = "The text has been updated dynamically!";
    text.style.color = "red";
    text.style.fontWeight = "bold";
  }
  
  function toggleParagraph() {
    const container = document.getElementById("paragraph-container");
    const existing = document.getElementById("new-paragraph");
  
    if (existing) {
      container.removeChild(existing);
    } else {
      const newPara = document.createElement("p");
      newPara.id = "new-paragraph";
      newPara.textContent = "This paragraph was added dynamically!";
      container.appendChild(newPara);
    }
  }
  