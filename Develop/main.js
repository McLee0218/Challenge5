onclick="document.getElementById('currentDay').innerHTML = Date()"

const storageInput = document.querySelector(".store");
        const text = document.querySelector(".textarea");
        // const save = document.querySelector(".save");

        storageInput.addEventListener("click", letter => {
          console.log("button");
            text.textContent = letter.target.value
        })  