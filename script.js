let string= "";
let buttons= document.querySelectorAll(".button");

Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', (e)=>{
    if (e.target.innerHTML == "="){
      try {
        string = eval(string);
        document.querySelector("input").value= string;
      } catch (error) {
        document.querySelector("input").value= "Invalid expression";
      }
    }
    else if(e.target.innerHTML == "C"){
      string="";
      document.querySelector("input").value= string;
    }
    else if(e.target.innerHTML == "M+"){
      let currentValue = parseFloat(document.querySelector("input").value);
      let previousValue = parseFloat(localStorage.getItem("memory"));
      if (!isNaN(currentValue) && !isNaN(previousValue)) {
        localStorage.setItem("memory", (currentValue + previousValue).toString());
        document.querySelector("input").value= "";
      }
    }
    else if(e.target.innerHTML == "M-"){
      let currentValue = parseFloat(document.querySelector("input").value);
      let previousValue = parseFloat(localStorage.getItem("memory"));
      if (!isNaN(currentValue) && !isNaN(previousValue)) {
        localStorage.setItem("memory", (previousValue - currentValue).toString());
        document.querySelector("input").value= "";
      }
    }
    else if(e.target.innerHTML == "%"){
      let percentage = parseFloat(document.querySelector("input").value) / 100;
      document.querySelector("input").value= percentage;
    }
    else{
      console.log(e.target)
      string = string + e.target.innerHTML;
      document.querySelector("input").value= string;
    }
  });
});
