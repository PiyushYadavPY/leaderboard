const scoreMainContainer = document.getElementById("scoreMainContainer");
const addDetailsButton = document.getElementById("addDetailsButton");
// console.log(addDetailsButton);

addDetailsButton.addEventListener("click", () => {
  const fname = document.getElementById("fname");
  const lname = document.getElementById("lname");
  const country = document.getElementById("country");
  const score = document.getElementById("score");

  const scoreBoard = document.createElement("div");

  scoreBoard.classList.add("scoreBoard");

  scoreBoard.innerHTML = `
    <p class="playerName">${fname.value} ${lname.value}</p>
    <p class="country">${country.value}</p>
    <p class="score">${score.value}</p>
    <p class="deleteIcon">&#x1f5d1;</p>

    `;
  scoreMainContainer.appendChild(scoreBoard);

  fname.value = "";
  lname.value = "";
  country.value = "";
  score.value = "";

  sortBoard();
  deleteElement();
});

function sortBoard() {
  const scoreBoard = document.querySelectorAll(".scoreBoard");
  const arr = [];
  scoreBoard.forEach((ele) => { arr.push(ele)});

    const sortedArray = arr.map((ele) => {
        return ele;
      })
      .sort((a, b) => {
        console.log(a)
        console.log(b)
        let runOfMan1 = parseInt(a.children[2].textContent)
        let runOfMan2 = parseInt(b.children[2].textContent)

        if(runOfMan1 > runOfMan2){
            return -1
        };
        if(runOfMan1 < runOfMan2) {
            return 1
        };

      });
      console.log(sortedArray)

      sortedArray.forEach((ele) => {
        scoreMainContainer.append(ele);
      })
}

function deleteElement(){
        const deleteIcon = document.querySelectorAll(".deleteIcon");
        deleteIcon.forEach((ele) =>{
            ele.addEventListener("click" , (e)=> {
                console.log(e.target.parentElement);
                return e.target.parentElement.remove();
            })
        })
      }