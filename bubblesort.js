//projects.html
//bubble sort


/**
async function bubblesort(bars){
  n = bars.length;

  for(let i = 0; i < n; i++){
  for(let j = 0; j < n - i - 1; j++){

      let bar1 = bars[j]
      let bar2 = bars[j+1]

      let h1 = parseInt(bar1.style.height);
      let h2 = parseInt(bar2.style.height);

      if (h1 > h2) {
        
      }

    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const bars = Array.from(document.querySelectorAll(bars));
  bubblesort(bars)
})


/**


async function bubblesort(bars){
  n = bars.length;
  
  for(let i = 0; i < n; i++){
    for(let j = 0; j < n - i - 1; j++){

      let bars = document.querySelectorAll(".bars")
      let bar1 = bars[j]
      let bar2 = bars[j+1]

      let h1 = parseInt(bar1.style.height);
      let h2 = parseInt(bar2.style.height);

      if (h1 > h2) {

                await sleep(1000);


        bar1.classList.add("swap");
        bar2.classList.add("swap");

        bar1.style.transform = "translateX(25px)"
        bar2.style.transform = "translateX(-25px)"

        await sleep(500);


    //    bar1.style.height = h2 + "px";
    //    bar2.style.height = h1 + "px";

        bar1.parentNode.insertBefore(bar2, bar1);

        bar1.classList.remove("swap");
        bar2.classList.remove("swap");

        
        bar1.style.transform = "";
        bar2.style.transform = "";
      }
    }
  }
  return bars;
}

function sleep(ms){
  return new Promise(resolve => setTimeout(resolve, ms))
}

document.addEventListener("DOMContentLoaded", () => {
const bars = document.querySelectorAll(".bars");
bubblesort(bars);
console.log(bars.length);
});


**/