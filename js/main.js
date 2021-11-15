var sections= ["splash","home","pedido","helados","Check","lista_direcciones","direcciones","newAddress","newAddress2"];
const delay = ms => new Promise(res => setTimeout(res, ms));
var last = 0;
function changeSplash(numSource, numDestino){
    setTimeout(function(){
        changeSection(numSource, numDestino);
    },1000);
}



function changeSection(numSource, numDestino){
    var sectionSource = document.getElementById(sections[numSource]);
    var sectionDestino = document.getElementById(sections[numDestino]);
    setTimeout(function(){
        sectionSource.classList.add("oculto");
        sectionDestino.classList.remove("oculto");
    },500);
}

var sabores = ["vainilla", "Arequipe", "chocolate","mora"]
function changeIceCream(){
    var elements = document.getElementsByClassName("deleteSabor");
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }


    var body = document.getElementById("selectHelado");
    var fragmento = document.createDocumentFragment();
    var select = document.getElementById('iceCream').selectedIndex;
    if(select == 2) cont = 1;
    else cont = 0;
    for (var i = 0; i <= cont; i++) {
        var fragmento2 = document.createDocumentFragment();

        var newSelect = document.createElement("select");
        newSelect.classList.add("boton");
        newSelect.classList.add("boton3");
        newSelect.classList.add("deleteSabor");
        newSelect.name = "Sabor1";

        for(var j = 0; j < 3; j++){
            var optionN = document.createElement("option");
            optionN.value = j+1;
            if(select == 2 || select == 3){
                optionN.textContent = sabores[j+1]
            }else{
                optionN.textContent = sabores[j]
            }
            fragmento2.appendChild(optionN);
        }
        newSelect.appendChild(fragmento2);
        fragmento.appendChild(newSelect);
     }
     body.appendChild(fragmento);
}

function saveIceCream(){
    var select = parseInt(document.getElementById('iceCream').value);
    var totalMoney = document.getElementById("total_money");
    totalMoney.innerHTML = "$"+(select+1000);
    changeSection(3,2);
}


function saveAddress(num){
    var nameAddress = document.getElementById("nameAddress"+num).value;
    var nameBarrio = document.getElementById("nameBarrio"+num).value;
    var inputAddress =  document.getElementById("inputAddress"+num).value;


    var newDiv = [document.createElement("div"),document.createElement("div")];
    for(var i = 0; i < 2; i++){
        var fragmento = document.createDocumentFragment();
        newDiv[i].classList.add("direccion");
        if(i==1){
            newDiv[i].setAttribute("onclick","changeColor(this)");
        }

        var newDiv2 = document.createElement("div")
        var fragmento2 = document.createDocumentFragment();

        var title = document.createElement("h1");
        title.classList.add("title");
        title.textContent = nameAddress;
        fragmento2.appendChild(title);
        var barrio = document.createElement("p");
        barrio.classList.add("letter");
        barrio.textContent = nameBarrio;
        fragmento2.appendChild(barrio);
        var address = document.createElement("p");
        address.classList.add("letter");
        address.textContent = inputAddress;
        fragmento2.appendChild(address);

        newDiv2.appendChild(fragmento2);
        fragmento.appendChild(newDiv2);

        var eliminar = document.createElement("h1");
        eliminar.classList.add("boton","delete")
        eliminar.setAttribute("onclick","eliminar(this)");
        eliminar.textContent = "X";

        fragmento.appendChild(eliminar);
        newDiv[i].appendChild(fragmento);
    }

    var list = document.getElementById("listAddress");
    list.prepend(newDiv[0]);

    var list2 = document.getElementById("listAddress2");
    list2.prepend(newDiv[1]);

    if(num == 1 ) changeSection(7,5);
    else if(num == 2 ) changeSection(8,6);
}
var seleccionado;
var contador = 0;
function changeColor(el){
    if(contador == 1){
        seleccionado.classList.remove("changeColor");
    }
    el.classList.add("changeColor")
    seleccionado= el;
    contador=1;
}


function eliminar(el){
    var objet = el.parentNode;
    if (objet.parentNode) {
        objet.parentNode.removeChild(objet);
    }
}