'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD__EYES = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARD_FIREBALL = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var WIZARDS_COUNT = 4;

var ESC_KEY = 'Escape';
var ENTER_KEY = 'Enter';

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = document.querySelector('.setup-close');

var getRandomElement = function (arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

// Задание 2 (генерация 4 случайных магов)

document.querySelector('.setup-similar').classList.remove('hidden');


var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content.querySelector('.setup-similar-item');

var renderWizard = function () {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = getRandomElement(WIZARD_NAMES) + ' ' + getRandomElement(WIZARD_SURNAMES);
  wizardElement.querySelector('.wizard-coat').style.fill = getRandomElement(WIZARD_COAT);
  wizardElement.querySelector('.wizard-eyes').style.fill = getRandomElement(WIZARD__EYES);

  return wizardElement;
};

var createWizards = function () {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < WIZARDS_COUNT; i++) {
    fragment.appendChild(renderWizard());
  }
  similarListElement.appendChild(fragment);
};

createWizards();

// Открытие и закрытие формы редактирования персонажа

var onPopupEscPress = function (evt) {
  if (evt.key === ESC_KEY) {
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    closePopup();
  }
});

// Изменение персонажа по клику

var setupWizard = document.querySelector('.setup-wizard');
var setupPlayer = document.querySelector('.setup-player');
var wizardCoat = document.querySelector('.wizard-coat');
var wizardEyes = document.querySelector('.wizard-eyes');
var wizardFireball = document.querySelector('.setup-fireball-wrap');

wizardCoat.addEventListener('click', function () {
  var wizardCoatColor = getRandomElement(WIZARD_COAT);
  setupWizard.querySelector('.wizard-coat').style.fill = wizardCoatColor;
  setupPlayer.querySelector('input[name=coat-color]').value = wizardCoatColor;
});

wizardEyes.addEventListener('click', function () {
  var wizardEyesColor = getRandomElement(WIZARD__EYES);
  setupWizard.querySelector('.wizard-eyes').style.fill = wizardEyesColor;
  setupPlayer.querySelector('input[name=eyes-color]').value = wizardEyesColor;
});

wizardFireball.addEventListener('click', function () {
  var wizardFireballColor = getRandomElement(WIZARD_FIREBALL);
  setupPlayer.querySelector('.setup-fireball-wrap').style.background = wizardFireballColor;
  setupPlayer.querySelector('input[name=fireball-color]').value = wizardFireballColor;
});

