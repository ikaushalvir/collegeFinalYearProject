  const container = document.querySelector("#array");
  const buttons = document.querySelectorAll("button");
  const generateArrayButton = buttons[0];
  const bubbleSortButton = buttons[1];

  generateArrayButton.addEventListener("click", function () {
    container.textContent = "";
    // generateArrayButton.disabled = true;
    bubbleSortButton.disabled = false;
    generateArray();
  })

  bubbleSortButton.addEventListener("click", function () {
    bubbleSortButton.disabled = true;
    bubbleSort();
  })

  // to generate arrays
  function generateArray() {
    for (let i = 0; i < 20; i++) {

      // return a value between 1 and 100 (both inclusive)
      let value = Math.ceil(Math.random() * 100);

      // creating element div
      let array_ele = document.createElement("div");

      //adding class 'block' to div
      array_ele.classList.add("block");

      //adding style to div
      array_ele.style.height = `${value*3}px`;
      array_ele.style.transform = `translate(${i * 30}px)`;

      //creating label element for displaying size of particular block;
      let array_ele_label = document.createElement("label");
      array_ele_label.classList.add("block_id");
      array_ele_label.innerText = value;


      //appending created element to the div "container"
      array_ele.appendChild(array_ele_label);
      container.appendChild(array_ele);





    }
  }
  // promise to swap two value
  function swap(element1, element2) {
    return new Promise((resolve) => {
      let temp = element1.style.transform;
      element1.style.transform = element2.style.transform;
      element2.style.transform = temp;
       window.requestAnimationFrame(function() {

          // For waiting for .25 sec
          setTimeout(() => {

            container.insertBefore(element2, element1);
            resolve();

          }, 250);
        });


    })
  }

  //bubble Sort
  async function bubbleSort(delay = 100) {
    let blocks = document.querySelectorAll(".block");

    //Bubblesort Algorithm
    for (let i = 0; i < blocks.length; i++) {
      for (let j = 0; j < blocks.length - i - 1; j++) {
        //to change background color of blocks to be compared
        blocks[j].style.backgroundColor = "#FF4949";
        blocks[j + 1].style.backgroundColor = "#FF4949";

        //to wait for the 0.1second 'delay'
        await new Promise((resolve) =>
          setTimeout(() => {
            resolve();
          }, delay)
        );

        console.log("run");
        let value1 = Number(blocks[j].childNodes[0].innerHTML);
        let value2 = Number(blocks[j + 1].childNodes[0].innerHTML);

        //to compare value of two blocks
        if (value1 > value2) {
          await swap(blocks[j], blocks[j + 1] );
          blocks = document.querySelectorAll(".block");

        }

        // changing color back to previous;
        blocks[j].style.backgroundColor = "#6b5b95";
        blocks[j + 1].style.backgroundColor = "#6b5b95";
      }
      blocks[blocks.length - i - 1].style.backgroundColor = "#13CE66";
    }
    // generateArrayButton.disabled = false;

  }



  // bubbleSort();
