//index.html

const popin = document.querySelectorAll(".pop-in")

setTimeout(() => {
  popin.forEach(element => element.classList.add("show"));
}, 500);

const popup = document.querySelectorAll(".pop-up")

setTimeout(() => {
  popup.forEach(element => element.classList.add("show"));
}, 400);



//resume.html



const url = 'Jason-Garcia resume.pdf';
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



//projects.html
//bubble sort

async function bubblesort(bars){
  let n = bars.length
  
  for(let i = 0; i < n; i++){
    for(let j = 0; j < n - i - 1; j++){

    }
  }
}