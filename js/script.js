
    var allProducts = document.querySelectorAll(".products div");
    var div1 = document.querySelector("#div5")
    var btn1 = document.querySelector("#showPrice")
    var totalPrice = 0
var name='';
    allProducts.forEach(function (item) {
        item.onclick = function (){
            totalPrice +=  +(item.getAttribute("price"))
           var name1=item.getAttribute('name') + " ";
            div1.innerHTML += item.textContent + " "
            div1.innerHTML +=name1 +" : "+ item.getAttribute("price"); 
            // item.innerHTML+=name;
            if (div1.innerHTML != ""){
                btn1.style.display = "block"
                btn1.style.width = "140px"
                btn1.style.height = "40px"
                btn1.style.backgroundColor = "blue"
                btn1.style.color = "white"
                btn1.style.fontSize = "20px"
            }
   
        }
    })

    btn1.onclick = function (){
        console.log(totalPrice)
        div1.innerHTML +=" total price="+totalPrice;
        div1.innerHTML +=name; 
        
        alert(totalPrice)
    }




 