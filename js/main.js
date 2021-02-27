const divContenedor = document.getElementById("divcontenedor");
function crearChecksLabels(){
var newElement = {
    radio : document.createElement('input'),
    label : document.createElement('label'),
        }
var todos = document.createElement('button');
todos.innerText = "Todos";
todos.setAttribute("onclick","selectAll()");
const divContenedor = document.getElementById("divcontenedor");
divContenedor.appendChild(todos)
divContenedor.appendChild(document.createElement('br'))
    for(var i=1;i<=72;i++){
            newElement.radio = document.createElement('input');
            newElement.radio.setAttribute("type","checkbox");
            newElement.radio.setAttribute("id","checkbox"+i);
            newElement.label = document.createElement("label");
            newElement.label.setAttribute("for","checkbox"+i);
            newElement.label.innerHTML = i;
            divContenedor.appendChild(newElement.radio);
            divContenedor.appendChild(newElement.label);
        if(i%5 == 0){
            divContenedor.appendChild(document.createElement('br'));
        }
    }

}