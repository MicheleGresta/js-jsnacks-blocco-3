const listaNum = [2,3,4,5,6,7,8,9,8,7,6,5,4,3,2,1];
const divRosso = document.querySelector(".rosso");
const divVerde = document.querySelector(".verde");

for (i = 0; i < listaNum.length; i++) {
    if ( i % 2 === 0) {
        divVerde.append(listaNum[i]);
    } else {
        divRosso.append(listaNum[i]);
    }
}