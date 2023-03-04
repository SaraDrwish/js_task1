
var city = document.querySelectorAll(".smallBoxes span")
var btn = document.getElementById("btn")
var inp = document.querySelector(".textBox .res")
var res = document.querySelector(".textBox h4")
var tot = 0;
 
city.forEach(function (i) {

    i.onclick = function () {
        tot += +(i.getAttribute("cost"));

        inp.innerHTML += i.textContent + "     --   ";
        }
        
    
        if(btn.innerHTML != "") {
            inp.style.display = "block"
            res.style.display = "block"
        }

    }  
        
);



btn.onclick = function () {
    // console.log(tot)
    res.innerHTML = tot;
}