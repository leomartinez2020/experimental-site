const octavo = ['ASHLEY', 'JOSE', 'CLEIDY', 'JOSE CASTRO', 'CAMILO', 'ISABEL', 'ANAJULITH', 
    'SAMUEL FONTALVO', 'GABRIELLA', 'MARIA DE LOS ÁNGELES', 'CRISTIAN', 'SAMUEL GUTIÉRREZ',
    'STEVEN', 'NOEL', 'MAINE', 'YULIANIS', 'KARLA', 'JAILYTH', 'MANUELLA', 'SEBASTIAN',
    'VALENTINA', 'JUAN', 'MARIA GABRIELA', 'ANA SOFÍA', 'SANTIAGO', 'LUIS', 'DIEGO',
    'JESUS', 'ESTEFANY', 'NATALIA'];

const noveno = ['DANIELA SOFÍA', 'JOSÉ RAFAEL', 'VINCENT', 'MARCO', 'ZAIDA',
    'ORIANA ISABEL', 'SANTIAGO', 'ISABELLA MARÍA', 'MAYURI LUZIEL', 'THAYS', 'NATALIA',
    'JESÚS ANDRÉS', 'SUSANA', 'MARYAM', 'SANTIAGO JOSÉ', 'DANNA ISABEL', 'ISSHA',
    'JESUS FERNANDO', 'LUIS ARTURO', 'JUAN FELIPE', 'CAMILO ANDRÉS'];

const undecimo = ['JUAN DIEGO', 'VALENTINA', 'NATASHA',
    'SHARON NICOLL', 'JHON JAIRO', 'DIEGO ANDRES',
    'CRISTIAN ANDRRES', 'OSCAR EDUARDO', 'YAMEL ENRIQUE',
    'ABIGAIL SARAY', 'LUISA FERNANDA', 'VALENTINA ANDREA',
    'SEBASTIAN ANDRES'];

const decimo = ['JUAN CAMILO', 'JAIME',
    'ALEJANDRO', 'JESUS DAVID', 'JHON KEINER',
    'FRANCESCA', 'MARIA JOSE', 'SEBASTIAN',
    'KAMILA', 'MARIA LUISA', 'JHOSTIN DANIEL',
    'AMELIE', 'EYLEEN', 'DARIO'];

const selectElement = document.querySelector('#students');

function getGroup(valor) {
    let lista = null;
    switch (valor) {
        case 'octavo':
            lista = octavo;
            break;
        case 'noveno':
            lista = noveno;
            break;
        case 'decimo':
            lista = decimo;
            break;
        case 'undecimo':
            lista = undecimo;
            break;
        default:
          lista = null;
    }
    return lista;
}

let escogido = '';
let listado = getGroup('octavo');
listado = shuffle(listado);
const placeStudent = document.getElementById('elegido');

selectElement.addEventListener('change', (event) => {
    escogido = `${event.target.value}`;
    listado = getGroup(escogido);
    listado = shuffle(listado);
    placeStudent.innerHTML = 'Estudiante';
});


const boton = document.getElementById('boton1');
boton.addEventListener('click', function() {
    // let studentIndex = Math.floor(Math.random() * listado.length);
    let student = listado.pop();
    placeStudent.innerHTML = student;
});

// Shuffle an array in JavaScript
function shuffle(array) {
    var m = array.length, temp, i;
  
    // Check if there's still elements remaining
    while (m) {
  
      // Pick remaining element
      i = Math.floor(Math.random() * m--);
  
      // Swap it with the current element
      temp = array[m];
      array[m] = array[i];
      array[i] = temp;
    }
  
    return array;
}
