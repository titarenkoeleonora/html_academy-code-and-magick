'use strict';

(function () {
  var WIZARD_COAT = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var WIZARD__EYES = ['black', 'red', 'blue', 'yellow', 'green'];
  var WIZARD_FIREBALL = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  window.wizard = {
    WIZARD_COAT: WIZARD_COAT,
    WIZARD__EYES: WIZARD__EYES,
    WIZARD_FIREBALL: WIZARD_FIREBALL
  };

  var setupWizard = document.querySelector('.setup-wizard');
  var setupPlayer = document.querySelector('.setup-player');
  var wizardCoat = document.querySelector('.wizard-coat');
  var wizardEyes = document.querySelector('.wizard-eyes');
  var wizardFireball = document.querySelector('.setup-fireball-wrap');

  var getRandomElement = function (arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  };

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
})();
