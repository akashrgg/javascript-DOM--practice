function myFunction() {
    document.getElementById("hello").innerHTML="I am Akash";
}

let demo = document.getElementById("de-mo");

function display(num)
{
     demo.value += num;
    
}
function Clear () 
{
    demo.value = "";
}
function Calculate()
{
    try{
      demo.value = eval(demo.value);
    }

    catch(err){
        alert("invalid")
    }
}
function del(){
    demo.value = demo.value. slice( 0, -1);

}

const atr = document.querySelector(".yy")
 function getattri () {
    atr.innerHTML="clear";
 }
 function clearatt(){
    atr.innerHTML="wecome";
 }


function akash( ){
     let a = 5;
     let b = 8;
     const c = a+b ;
     document.getElementById("hel").innerHTML = "" + c;
     
     
     };

     var img = document.querySelector("img");
     img.onclick = function(){
        var src= img.getAttribute("src");
        if(src== "DIODE.jpg")
        {
            img.setAttribute("src","DOIDE.jpg");
         
        }
        else{
            img.setAttribute("src","DIODE.jpg");
        }
        
        
     
     
     }

     var image= document.querySelector(".im-g");
     image.onclick = function(){

        var src= image.getAttribute("src");
        if(src == "images.jpg")
        {
            image.setAttribute("src","current.jpg");
        }
        else{
            image.setAttribute("src","images.jpg");
        }

    }

    var btn = document.querySelector("#but-ton");
    btn.onclick = function (){

        var title = document.querySelector("h1");
        var cls = title.getAttribute("class");
        if(cls == "red" ){
            title.classList.remove("red");
            title.classList.add("blue");
        }
        else{
            title.classList.remove("blue");       
            title.classList.add("red");
        }
        }

    var btn = document.querySelector("#bu-tton");
    btn.onclick = function(){
            var div = document.createElement("div");
            div.innerHTML = generate();
            document.getElementById("box").appendChild(div);
    
    }
    
function generate()
   {
    return "<input type = 'text' style = 'padding-left= 50px'> <button onclick ='remove(this)'>remove it</button>";


  }

  function remove(btn){
     document.getElementById("box").removeChild(btn.parentNode);

  }


var btnn = document.querySelector("#butto-n");
btnn.onclick = function(){
    var div = document.createElement("div");
    div.innerHTML= generateit();
    document.getElementById("circle").appendChild(div);

}

function generateit(){
    return "<img src = 'img3.jpg' width = '360px'> <button onclick = 'removeit(this)'> delete </button>";

}

function removeit(btt)
{
    document.getElementById("circle").removeChild(btt.parentNode);

}
  
var dog = document.querySelector("#do-g");
dog.onclick = function(){

    var sett = document.querySelector(".son");
    var site = sett.document.querySelector("class");
    if(site == "son")
    {
        sett.classList.remove("son");
        sett.classList.add("mom");
    }
    else{
        sett.classList.remove("mom");
        sett.classList.add("son");
    }


}

 var btn = document.querySelector(".b-utton");
 btn.onclick = function(){
 document.getElementById("v-an").innerHTML=  Math.floor(Math.random()*100);

 }   

 