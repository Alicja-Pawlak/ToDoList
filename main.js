// const form = document.querySelector('form');
// const ul = document.querySelector('ul');
// const taskNumber = document.querySelector('h1 span');
// const listItems = document.getElementsByClassName('task');
// const input = document.querySelector('input');

// const removeTask = (e) => {
//  e.target.parentNode.remove();
//  taskNumber.textContent = listItems.length;
// }


// const addTask = (e) => {
//  e.preventDefault()
//  const titleTask = input.value;
//  if (titleTask === "") return;
//  const task = document.createElement('li');
//  task.className = 'task';
//  task.innerHTML = titleTask + "<button>Usuń</button>";
//  ul.appendChild(task);
//  input.value = "";
//  // const liItems = document.querySelectorAll('li.task').length;
//  taskNumber.textContent = listItems.length;
//  task.querySelector('button').addEventListener('click', removeTask);

// }
// form.addEventListener('submit', addTask)

const input = document.querySelector('input');
const form = document.querySelector('form');
const span = document.querySelector('span');
const ol = document.querySelector('ol');
//byClassName, bo pobiera za każdym razem dane
const li = document.getElementsByClassName('task');

//search
const search = document.getElementById('search');



const removeTask = (e) => {
    //usunięcie buttona razem z li
    console.log(e.target.parentNode)
    e.target.parentNode.parentNode.remove();
    //aktualizacja liczby zadań
    span.textContent = `${li.length}`
}
const createLi = document.createElement('li');
const addTask = (e) => {
    //żeby nie odświeżało strony po kliknięciu
    e.preventDefault();
    
    const createLi = document.createElement('li');
    const removeButton = " <button><i></i></button>";
    if (input.value !== ""){
        //do tego li wpisać
        createLi.innerHTML = "<div>"+"<input type='checkbox'>" + input.value + "</div>"+ removeButton;
        //stworzenie klasy, żeby móć zrobić GetElementByClassName
        createLi.className = 'task';
        //dodawanie li z przypisaną wartością (wpisanym inputem) i buttonem
        ol.appendChild(createLi);
        //wyczyszczenie inputa
        input.value = "";
        //dodawanie usuwania do utowrzonego buttona
        createLi.querySelector('i').addEventListener('click', removeTask);
        createLi.querySelector('button').className='removeButton';
        createLi.querySelector('i').className='fas fa-lg fa-trash-alt';
        createLi.querySelector('input').className='checkbox';
        //liczba zadań
        span.textContent = `${li.length}`
        
    }
    
}

const searchTask = (e) => {
    

    e.preventDefault();
    let searchText = e.target.value.toLowerCase();
    let searched = [...li];
    console.log(searched[0].textContent.toLowerCase())
    searched = searched.filter(searched => searched.textContent.toLowerCase().includes(searchText));
    [...li].forEach(e => e.style.display = 'none')
    searched.forEach(e => e.style.display = 'flex')
    
    
}

form.addEventListener('submit',addTask);
search.addEventListener('input',searchTask);
