//query selectors
var selectionForm = document.querySelector('.selection-form');
var messageForm = document.querySelector('.message-form');
var altBtnsSection = document.querySelector('.alt-btns')
var radioInputs = document.querySelectorAll('input[name="choice"]');
var receiveMessageBtn = document.querySelector('.receive-message');
var outputBox = document.querySelector('.output-box');
var allBtns = document.querySelectorAll('.btn');
var backBtn = document.querySelector('.back');
var deleteBtn = document.querySelector('.delete');
var messageFormBtn = document.querySelector('.message-form-btn');
var entryType = document.querySelectorAll('input[name="entry-type"]');
var messageEntry = document.querySelector('.message-entry');
var addMessageBtn = document.querySelector('.add-message-btn');
var meditationBox = document.querySelector('.meditation-box');
var meditationIcon = document.querySelector('.meditation-icon');


var affirmations = ["I forgive myself and set myself free", "I believe I can be all that I want to be.", "I am in the process of becoming the best version of myself.", "I have the freedom & power to create the life I desire.", "I choose to be kind to myself and love myself unconditionally.", "My possibilities are endless.", "I am worthy of my dreams.", "I am enough.", "I deserve to be healthy and feel good.", "I am full of energy and vitality and my mind is calm and peaceful.", "Every day I am getting healthier and stronger.", "I honor my body by trusting the signals that it sends me.", "I manifest perfect health by making smart choices."]

var mantras = ["Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.", "Don’t let yesterday take up too much of today.", "Every day is a second chance.", "Tell the truth and love everyone.", "I am free from sadness.", "I am enough.", "In the beginning it is you, in the middle it is you and in the end it is you.", "I love myself.", "I am present now.", "Inhale the future, exhale the past.", "This too shall pass.", "Yesterday is not today.", "The only constant is change.", "Onward and upward.", "I am the sky, the rest is weather."]

//event listeners

receiveMessageBtn.addEventListener('click', loadRandomMessage)
backBtn.addEventListener('click', removeOutput)
deleteBtn.addEventListener('click', deletePhrase)
messageFormBtn.addEventListener('click', showForm)
addMessageBtn.addEventListener('click', loadInputMessage)

//functions

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function returnMessage() {
  for (var i = 0; i < radioInputs.length; i++) {
    if (radioInputs[i].value === 'affirmations' && radioInputs[i].checked) {
      formatRandomOutput();
      return outputBox.innerHTML =`<p class="output">${affirmations[getRandomIndex(affirmations)]}</div>` ;
    } else if (radioInputs[i].value === 'mantras' && radioInputs[i].checked) {
      formatRandomOutput();
      return outputBox.innerText += mantras[getRandomIndex(mantras)];
    }
  }

  return alert('YOU DIDNT CLICK A BUTTON!!! I HAVE NO PURPOSE!!!')
}

function loadRandomMessage(event) {
  event.preventDefault();
  meditationIcon.classList.add("jiggle");
  tempDisableBtns();
  setTimeout(returnMessage, 6500);
}

function formatRandomOutput() {
  selectionForm.classList.add('hidden');
  meditationBox.classList.add("hidden");
  outputBox.classList.remove("hidden");
  altBtnsSection.classList.remove('hidden');
}

function hideAltBtns() {
  altBtnsSection.classList.add('hidden');
}

function removeOutput() {
  hideAltBtns();
  outputBox.classList.add("hidden");
  altBtnsSection.classList.add('hidden');
  selectionForm.classList.remove('hidden');
  meditationBox.classList.remove("hidden");
  meditationIcon.classList.remove("jiggle");
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

function showForm () {
  selectionForm.classList.add('hidden');
  outputBox.classList.add('hidden');
  messageForm.classList.remove('hidden');
  meditationBox.classList.remove('hidden');
  meditationIcon.classList.remove("jiggle");
  hideAltBtns();
}

function returnFromForm() {
  altBtnsSection.classList.remove('hidden');
  outputBox.classList.remove('hidden');
  messageForm.classList.add('hidden');
  meditationBox.classList.add('hidden');
}

function addToAffirmations() {
  affirmations.push(messageEntry.value);
  outputBox.innerText = messageEntry.value;
  returnFromForm();
  return 
}

function addToMantras() {
  mantras.push(messageEntry.value);
  outputBox.innerText = messageEntry.value;
  returnFromForm();
  return 
}

function addMessage() {
  for (var i = 0; i < radioInputs.length; i++) {
    if (entryType[i].value === 'affirmations' && entryType[i].checked) {
      addToAffirmations();
      return entryType[i].checked = false;
    } else if (entryType[i].value === 'mantras' && entryType[i].checked) {
      addToMantras();
      return entryType[i].checked = false;
    }
  }

  alert('Missing an input, plz fix.');
}

function loadInputMessage(event) {
  event.preventDefault();
  meditationIcon.classList.add("jiggle");
  tempDisableBtns()
  setTimeout(addMessage, 6500);
}

function tempDisableBtns() {
  for (var i = 0; i < allBtns.length; i++) {
    allBtns[i].disabled = true;
    setTimeout (restartBtns, 6500);
  }
}

function restartBtns() {
  for (var i = 0; i < allBtns.length; i++) {
    allBtns[i].disabled = false;
  }
}