//index.html

const popin = document.querySelectorAll(".pop-in")

setTimeout(() => {
  popin.forEach(element => element.classList.add("show"));
}, 500);

const popin2 = document.querySelectorAll(".pop-in2")

setTimeout(() => {
  popin2.forEach(element => element.classList.add("show"));
}, 750);

const popup = document.querySelectorAll(".pop-up")

setTimeout(() => {
  popup.forEach(element => element.classList.add("show"));
}, 400);



//resume.html



const url = 'Jason-Garcia-Resume.pdf';
const canvas = document.getElementById("pdf-canvas");
const context = canvas.getContext('2d')

pdfjsLib.getDocument(url).promise.then(pdf => {
  pdf.getPage(1).then(page => {
    const scale = 1.3;
    const viewport = page.getViewport({ scale });

    canvas.width = viewport.width;
    canvas.height = viewport.height;

    page.render({
      canvasContext: context,
      viewport: viewport
    })
  })
})