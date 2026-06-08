const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "C:\\Users\\linus\\Code\\web-projects\\first-website\\images\\download.jpg") {
    myImage.setAttribute("src", "https://charlotteslivelykitchen.com/wp-content/uploads/2016/07/Butter-11.jpg");
  } else {
    myImage.setAttribute("src", "C:\\Users\\linus\\Code\\web-projects\\first-website\\images\\download.jpg");
  }
});