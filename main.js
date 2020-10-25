//query selectors
var radioInputs = document.querySelectorAll('input[name="choice"]');
var receiveMessageBtn = document.querySelector('.receive-message');
var outputBox = document.querySelector('.output-box');
var allBtns = document.querySelectorAll('.btn');
var backBtn = document.querySelector('.back');
var deleteBtn = document.querySelector('.delete');


var affirmations = ["I forgive myself and set myself free", "I believe I can be all that I want to be.", "I am in the process of becoming the best version of myself.", "I have the freedom & power to create the life I desire.", "I choose to be kind to myself and love myself unconditionally.", "My possibilities are endless.", "I am worthy of my dreams.", "I am enough.", "I deserve to be healthy and feel good.", "I am full of energy and vitality and my mind is calm and peaceful.", "Every day I am getting healthier and stronger.", "I honor my body by trusting the signals that it sends me.", "I manifest perfect health by making smart choices."]

var mantras = ["Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.", "Don’t let yesterday take up too much of today.", "Every day is a second chance.", "Tell the truth and love everyone.", "I am free from sadness.", "I am enough.", "In the beginning it is you, in the middle it is you and in the end it is you.", "I love myself.", "I am present now.", "Inhale the future, exhale the past.", "This too shall pass.", "Yesterday is not today.", "The only constant is change.", "Onward and upward.", "I am the sky, the rest is weather."]

//event listeners

receiveMessageBtn.addEventListener('click', returnMessage)
backBtn.addEventListener('click', removeOutput)
deleteBtn.addEventListener('click', deletePhrase)

//functions

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function returnMessage(event) {
  event.preventDefault();

  for (var i = 0; i < radioInputs.length; i++) {
    if (radioInputs[i].value === 'affirmations' && radioInputs[i].checked) {
      addAltBtns();
      return outputBox.innerText = affirmations[getRandomIndex(affirmations)];
    } else if (radioInputs[i].value === 'mantras' && radioInputs[i].checked) {
      addAltBtns();
      return outputBox.innerText = mantras[getRandomIndex(mantras)];
    }
  }

  return alert('YOU DIDNT CLICK A BUTTON!!! I HAVE NO PURPOSE!!!')
}

function addAltBtns() {
  backBtn.classList.remove('hidden');
  deleteBtn.classList.remove('hidden');
  receiveMessageBtn.classList.add('hidden');
}

function removeAltBtns() {
  backBtn.classList.add('hidden');
  deleteBtn.classList.add('hidden');
  receiveMessageBtn.classList.remove('hidden');
}

function removeOutput() {
  removeAltBtns();

  return outputBox.innerHTML =  '<img class="return-message meditation-icon" src="/Users/matthewdean/turing/1module/projects/self-care-center/assets/meditate.svg" alt="Meditation Icon" title="Meditation Icon"></img>';
}

function deletePhrase () {
  var unwantedPhrase = outputBox.innerText

  for (var i = 0; i < affirmations.length; i++) {
    if (affirmations[i] === unwantedPhrase) {
    affirmations.splice(i, 1);
    } 
  }

  for (var i = 0; i < mantras.length; i++) {
    if (mantras[i] === unwantedPhrase) {
    mantras.splice(i, 1);
    }
  }

  removeOutput();

  alert(`That phrase won't bother you anymore, we sent it away for good.`)
}