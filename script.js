window.py = function(a,b){return Math.sqrt(a**2+b**2)}; 
window.sqrt = Math.sqrt; 
window.rand = function(m, a){return Math.floor(Math.random()*a)+m}; 
window.mean=function(...vars){return vars.reduce((partialSum, a) => partialSum + a, 0)/vars.length};
window.tab=function(a){document.title=a};
window.mad=function(...arr){l=mean(...arr); return mean(...arr.map(a=>Math.abs(l-a)))}; 
window.pi = Math.PI;
let input = document.getElementById("input")
document.getElementById("submit").addEventListener("click", submit)
function submit() {
  if(input.value == "") {input.value = ""}
  try {
  input.value = (new Function("return " + input.value)())
  } catch(e){
    input.value = input.value
  }
}


input.onkeypress =  function(e){
  if(e.code === "Enter"){
    setTimeout(function(){document.getElementById("submit").click()}, 10)
  }
}
