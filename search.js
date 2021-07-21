const container = document.querySelector("#array");
const buttons = document.querySelectorAll("button");
const heading = document.querySelector("h1");
const generateArrayButton = buttons[0];
const linearSearchButton = buttons[1];


// function to generate array of blocks
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

// linear Search
// Asynchronous LinearSearch function
async function linearSearch(delay = 300) {
  let blocks = document.querySelectorAll(".block");

  //Extracting the value entered by the user
  let num = document.querySelector("#fname").value;

  //Changing the color of all the blocks to voilet
  for (var i = 0; i < blocks.length; i += 1) {
    blocks[i].style.backgroundColor = "#6b5b95";
  }

  // output.innerText = "";

  var flag = 0;
  // LinearSearch Algorithum
  for (var i = 0; i < blocks.length; i += 1) {
    //Changing the color of current block to red
    blocks[i].style.backgroundColor = "#FF4949";

    // To wait for .1 sec
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, delay)
    );

    //Extracting the value of current block
    var value = Number(blocks[i].childNodes[0].innerHTML);

    // To compare block value with entered value
    if (value == num) {
      flag = 1;

      blocks[i].style.backgroundColor = "#13CE66";
      break;
    } else {
      // Changing the color to the previous one
      blocks[i].style.backgroundColor = "#6b5b95";
    }
  }


}




function enableButton() {
  linearSearchButton.disabled = false;


}

function disableButton() {
  linearSearchButton.disabled = true;


}
//addEventListener
generateArrayButton.addEventListener("click", function () {
  container.textContent = "";

  heading.textContent="Algo - Game";
  // generateArrayButton.disabled = true;
  enableButton();
  generateArray();
})

linearSearchButton.addEventListener("click", function() {
  heading.textContent = "Linear Search";
  disableButton();
  linearSearch();
})
