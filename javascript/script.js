let a= document.getElementById('ele')
let b=document.getElementById('img')
console.log(a)
console.log(a.textContent)

function change(){
    a.textContent="hi khadar";
    a.style.color="red";
    a.style.backgroundColor="blue";
    a.style.fontSize="100px"
    b.setAttribute("src", "image.png")
    b.setAttribute("width","600px")
    b.setAttribute("height","400px")
    b.setAttribute("title","this is Charvolet Car")
    
}