const butt = document.querySelectorAll(".but");
const reset = document.querySelector("#reset");
reset.addEventListener("click" ,() => {
console.log("aszx")
localStorage.removeItem('one');
localStorage.removeItem('two');
localStorage.removeItem('three');
localStorage.removeItem('count');
localStorage.removeItem('todo1');
localStorage.removeItem('todo2');
localStorage.removeItem('todo3');
location.reload();
})
const circul = document.querySelectorAll(".circul");


const inputField = document.querySelector('#card'); // Select an input field
inputField.addEventListener('input', () => {
  document.querySelector('#error').innerText = '';
});

const oneT = localStorage.getItem('one');
document.querySelector('#onet').value = oneT;
const towT = localStorage.getItem('two');
document.querySelector('#twot').value = towT;
const threeT = localStorage.getItem('three');
document.querySelector('#threet').value = threeT;
// console.log(retrievedValue);
const count = localStorage.getItem('count');
if(count==null){
    localStorage.setItem('count', 0);
}
greenbar()

// localStorage.setItem('count', count);
// count=0;
document.addEventListener("DOMContentLoaded", () => {
    
    const circul1 = document.querySelector("#circul1");
    const circul2 = document.querySelector("#circul2");
    const circul3 = document.querySelector("#circul3");
    const text = document.querySelectorAll(".textinput");
    // const bar = document.querySelector("#bar");
    const onet = document.querySelector("#onet");
    const twot = document.querySelector("#twot");
    const threet = document.querySelector("#threet");
    onet.addEventListener('input', () => {
        localStorage.setItem('one', onet.value);
        if(onet.value==""){
          const tick = document.querySelector("#tick1");
          
          tick.style.display = "none"; // Hide the element
          circul1.style.backgroundColor = "white";
          localStorage.setItem('todo1', false);
          const count = localStorage.getItem('count');
          localStorage.setItem('count', +count-1);
          greenbar()
        }
      });
      twot.addEventListener('input', () => {
        localStorage.setItem('two', twot.value);
        if(twot.value==""){
          const tick = document.querySelector("#tick2");
          
          tick.style.display = "none"; // Hide the element
          circul2.style.backgroundColor = "white";
          localStorage.setItem('todo2', false);
          const count = localStorage.getItem('count');
          localStorage.setItem('count', +count-1);
          greenbar()
        }
      });
      threet.addEventListener('input', () => {
        localStorage.setItem('three', threet.value);
        if(threet.value==""){
          const tick = document.querySelector("#tick3");
         
          tick.style.display = "none"; // Hide the element
          circul3.style.backgroundColor = "white";
          localStorage.setItem('todo3', false);
          const count = localStorage.getItem('count');
          localStorage.setItem('count', +count-1);
          greenbar()
        }
      });
    



const todo1 = localStorage.getItem('todo1');
console.log("A")
const tick1 = document.querySelector("#tick1");
if(todo1=="true"){
    tick1.style.display = "block";
    circul1.style.backgroundColor = "green";
   
}
const todo2 = localStorage.getItem('todo2');
const tick2 = document.querySelector("#tick2");
if(todo2=="true"){
    tick2.style.display = "block";
    circul2.style.backgroundColor = "green";
   
}
const todo3 = localStorage.getItem('todo3');
const tick3 = document.querySelector("#tick3");
if(todo3=="true"){
    tick3.style.display = "block";
    circul3.style.backgroundColor = "green";
   
}


  if (circul1) {
    
    circul1.addEventListener("click", () => {
        
        if(text[0].value=="" ||text[1].value=="" ||text[2].value==""){
            document.querySelector("#error").innerText = "Please set all the 3 goals!"
            console.log("asdf")

        }
        else{
            document.querySelector("#error").innerText = "";
            const ticks = document.querySelectorAll("#tick1");

      ticks.forEach((tick) => {
        if (tick.style.display === "none") {
          tick.style.display = "block"; // Show the element
          circul1.style.backgroundColor = "green";
          localStorage.setItem('todo1', true);
         
          const count = localStorage.getItem('count');
          localStorage.setItem('count', +count+1);
          greenbar()
          

        } else {
          tick.style.display = "none"; // Hide the element
          circul1.style.backgroundColor = "white";
          localStorage.setItem('todo1', false);
          const count = localStorage.getItem('count');
          localStorage.setItem('count', +count-1);
          greenbar()
        }
      });
        }

      
    });
  } 
  if(circul2){
    circul2.addEventListener("click", () => {
        if(text[0].value=="" ||text[1].value=="" ||text[2].value==""){
            document.querySelector("#error").innerText = "Please set all the 3 goals!"
            console.log("asdf")

        }
        else{
            document.querySelector("#error").innerText = ""
            const ticks = document.querySelectorAll("#tick2");

      ticks.forEach((tick) => {
        if (tick.style.display === "none") {
          tick.style.display = "block"; // Show the element
          circul2.style.backgroundColor = "green";
          localStorage.setItem('todo2', true);
          const count = localStorage.getItem('count');
          localStorage.setItem('count', +count+1);
          greenbar()
        } else {
          tick.style.display = "none"; // Hide the element
          circul2.style.backgroundColor = "white";
          localStorage.setItem('todo2', false);
          const count = localStorage.getItem('count');
          localStorage.setItem('count', +count-1);
          greenbar()
        }
      });
        }
      
    });
  }
   if(circul3){
    circul3.addEventListener("click", () => {
        if(text[0].value=="" ||text[1].value=="" ||text[2].value==""){
            document.querySelector("#error").innerText = "Please set all the 3 goals!"
            console.log("asdf")

        }
        else{
            document.querySelector("#error").innerText = ""
            const ticks = document.querySelectorAll("#tick3");

      ticks.forEach((tick) => {
        if (tick.style.display === "none") {
          tick.style.display = "block"; // Show the element
          circul3.style.backgroundColor = "green";
          localStorage.setItem('todo3', true);
          const count = localStorage.getItem('count');
          localStorage.setItem('count', +count+1);
          greenbar()
        } else {
          tick.style.display = "none"; // Hide the element
          circul3.style.backgroundColor = "white";
          localStorage.setItem('todo3', false);
          const count = localStorage.getItem('count');
          localStorage.setItem('count', +count-1);
          greenbar()
        }
      });
        }
      
    });
  }
});

function greenbar(){
    const count = localStorage.getItem('count');
    if(+count==0){
        bar.style.background = "linear-gradient(to right, green 0%, #ddd 0% 100%)";
    }
    if(+count==1){
        bar.style.background = "linear-gradient(to right, green 33%, #ddd 33% 100%)";
    }
    if(+count==2){
        bar.style.background = "linear-gradient(to right, green 66%, #ddd 66% 100%)";
    }
    if(+count==3){
        bar.style.background = "linear-gradient(to right, green 100%, #ddd 100% 100%)";
    }
}
