const nameVal = document.querySelector (".name");
const submitBtn = document.querySelector (".submit");
const resultR = document.querySelector (".result");

let name = '';

nameVal.addEventListener('input', function() {
   name = this.value;
})

submitBtn.addEventListener("click", runFunction)

nameVal.addEventListener("keydown", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    runFunction();
  }
});

function runFunction (){
  resultR.innerHTML = `Your name is ${name}`;

}

