  let container = document.querySelector("#array");

  // to generate arrays
  function generateArray() {
    for(let i=0; i<20; i++) {

      // return a value between 1 and 100 (both inclusive)
      let value = Math.ceil(Math.random()*100);

      // creating element div
      let array_ele = document.createElement("div");

      //adding class 'block' to div
      array_ele.classList.add("block");

      //adding style to div
      array_ele.style.height = `${value*3}px`;
      array_ele.style.transform = `translate(${i * 30}px)`;




    }
  }

generateArray();
