const synth = window.speechSynthesis;

const inputBox = document.querySelector('#input-box');
const listContainer = document.querySelector('#list-container');

inputBox.addEventListener('keypress', function (e){
  if(e.key === "Enter"){
    addTask()
  }
})

function addTask(){
  if(inputBox.value === ''){
    alert('You must write something.');
  }
  else{
    let li = document.createElement('li');
    li.innerHTML = inputBox.value;
    listContainer.append(li);
    let span = document.createElement('span');
    span.innerHTML = '🗑️';
    li.appendChild(span)
  }
  inputBox.value = '';
  saveData()
}
listContainer.addEventListener('click', function(e){
  if(e.target.tagName === 'LI'){
    e.target.classList.toggle('checked');
    saveData();
  }
  else if(e.target.tagName === 'SPAN'){
    e.target.parentElement.remove();
    let yellThis = new SpeechSynthesisUtterance('Good job!');
    synth.speak(yellThis);
    saveData();
  }
}, false)

function saveData(){
  localStorage.setItem('data', listContainer.innerHTML)
}
function showTask(){
  listContainer.innerHTML = localStorage.getItem('data');
}
showTask();