  const container = document.querySelector("#array");
  const buttons = document.querySelectorAll("button");
  const generateArrayButton = buttons[0];
  const bubbleSortButton = buttons[1];
  const selectionSortButton = buttons[2];
  const insertionSortButton = buttons[3];
  const heading = document.querySelector("h1");

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
// event listener for buttons

  generateArrayButton.addEventListener("click", function () {
    container.textContent = "";

    heading.textContent="Algo - Game";
    // generateArrayButton.disabled = true;
    enableButton();
    generateArray();
  })

  bubbleSortButton.addEventListener("click", function () {
    heading.textContent="Bubble Sort ";
    disableButton();
    bubbleSort();
  })

  selectionSortButton.addEventListener("click", function() {
    heading.textContent="Selection Sort ";
    disableButton();
    SelectionSort();
  })

  insertionSortButton.addEventListener("click", function() {
    heading.textContent="Insertion Sort ";
    disableButton();
    InsertionSort();
  })

  //enable all buttons
  function enableButton () {
    bubbleSortButton.disabled = false;
    selectionSortButton.disabled = false;
    insertionSortButton.disabled = false;
  }

  //to disable all the buttons
  function disableButton () {
    bubbleSortButton.disabled = true;
    selectionSortButton.disabled = true;
    insertionSortButton.disabled = true;
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
    heading.textContent="Sorted!!!!!";

  }

  // asynchronous function to perform "Selection Sort"
  async function SelectionSort(delay = 300) {
    let blocks = document.querySelectorAll(".block");
    // Assign 0 to min_idx
     let min_idx = 0;
     for (let i = 0; i < blocks.length; i += 1) {

      // Assign i to min_idx
      min_idx = i;

      // Provide darkblue color to the ith bar
      blocks[i].style.backgroundColor = "darkblue";
      for (let j = i + 1; j < blocks.length; j += 1) {

        // Provide red color to the jth bar
        blocks[j].style.backgroundColor = "red";

        // To pause the execution of code for 300 milliseconds
        await new Promise((resolve) =>
          setTimeout(() => {
            resolve();
          }, 300)
        );

        // To store the integer value of jth bar to var1
        let val1 = Number(blocks[j].childNodes[0].innerHTML);

        // To store the integer value of (min_idx)th bar to var2
        let val2 = Number(blocks[min_idx].childNodes[0].innerHTML);

        // Compare val1 & val2
        if (val1 < val2) {
          if (min_idx !== i) {

            // Provide skyblue color to the (min-idx)th bar
            blocks[min_idx].style.backgroundColor = "  rgb(24, 190, 255)";
          }
          min_idx = j;
        } else {

          // Provide skyblue color to the jth bar
          blocks[j].style.backgroundColor = "  rgb(24, 190, 255)";
        }
      }

      // To swap ith and (min_idx)th bar
      let temp1 = blocks[min_idx].style.height;
      let temp2 = blocks[min_idx].childNodes[0].innerText;
      blocks[min_idx].style.height = blocks[i].style.height;
      blocks[i].style.height = temp1;
      blocks[min_idx].childNodes[0].innerText = blocks[i].childNodes[0].innerText;
      blocks[i].childNodes[0].innerText = temp2;

      // To pause the execution of code for 300 milliseconds
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 300)
      );

      // Provide skyblue color to the (min-idx)th bar
      blocks[min_idx].style.backgroundColor = "  rgb(24, 190, 255)";

      // Provide lightgreen color to the ith bar
      blocks[i].style.backgroundColor = " rgb(49, 226, 13)";
    }
    heading.textContent="Sorted!!!!!";
}

// Asynchronous function to perform "Insertion Sort"
  async function InsertionSort(delay = 600) {
  let blocks = document.querySelectorAll(".block");

  // Provide lightgreen colour to 0th bar
  blocks[0].style.backgroundColor = " rgb(49, 226, 13)";
  for (let i = 1; i < blocks.length; i += 1) {

    // Assign i-1 to j
    let j = i - 1;

    // To store the integer value of ith bar to key
    let key =
    parseInt(blocks[i].childNodes[0].innerHTML);

    // To store the ith bar height to height
    let height = blocks[i].style.height;



    // // For dynamically Updating the selected element
    //   barval.innerHTML=
    //   `<h3>Element Selected is :${key}</h3>`;

    //Provide darkblue color to the ith bar
    blocks[i].style.backgroundColor = "darkblue";

    // To pause the execution of code for 600 milliseconds
    await new Promise((resolve) =>
    setTimeout(() => {
      resolve();
    }, 600)
  );

    // For placing selected element at its correct position
    while (j >= 0 && parseInt(blocks[j].childNodes[0].innerHTML) > key) {

      // Provide darkblue color to the jth bar
      blocks[j].style.backgroundColor = "darkblue";

      // For placing jth element over (j+1)th element
      blocks[j + 1].style.height = blocks[j].style.height;
      blocks[j + 1].childNodes[0].innerText =
      blocks[j].childNodes[0].innerText;

      // Assign j-1 to j
      j = j - 1;

      // To pause the execution of code for 600 milliseconds
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 600)
      );

      // Provide lightgreen color to the sorted part
      for(let k=i;k>=0;k--){
        blocks[k].style.backgroundColor = " rgb(49, 226, 13)";
      }
    }

    // Placing the selected element to its correct position
    blocks[j + 1].style.height = height;
    blocks[j + 1].childNodes[0].innerHTML = key;

    // To pause the execution of code for 600 milliseconds
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, 600)
    );

    // Provide light green color to the ith bar
    blocks[i].style.backgroundColor = " rgb(49, 226, 13)";
  }
  heading.textContent="Sorted!!!!!";
    // barval.innerHTML="<h3>Sorted!!!</h3>";

  // To enable the button
  // "Generate New Array" after final(sorted)
  // document.getElementById("Button1")
  // .disabled = false;
  // document.getElementById("Button1")
  // .style.backgroundColor = "#6f459e";
  //
  // // To enable the button
  // // "Insertion Sort" after final(sorted)
  // document.getElementById("Button2")
  // .disabled = false;
  // document.getElementById("Button2")
  // .style.backgroundColor = "#6f459e";
}
