var vowels = [
  'а', 'е', 'ё', 'и', 'о', 'у', 'ы', 'э', 'ю', 'я'
];

var consonants = [
  'б', 'в', 'г', 'д', 'ж', 'з', 'й', 'к', 'л', 'м',
  'н', 'п', 'р', 'с', 'т', 'ф', 'ц', 'ч', 'х', 'ш', 'щ'
];

var complexSyllables = ['дз'];

var special = ['ъ', 'ь'];

function syllable (word) {
  var arr = word.split('');

  var syllables = [];
  var currentSyllable = [];

  function endSyllable () {
    syllables.push(currentSyllable.join(''));
    currentSyllable = [];
  }

  function addLetter (letter) {
    currentSyllable.push(letter);
  }

  arr.forEach(function (letter, index, item) {
    if (vowels.indexOf(letter) !== -1) {
      // гласная всегда заканчивает слог
      addLetter(letter);
      endSyllable();
    } else if (
      consonants.indexOf(letter) !== -1
      && complexSyllables.indexOf(currentSyllable.join('') + letter) !== -1
    ) {
      // если согласная, и уже есть другие буквы в слоге, проверяем на сложный слог
      addLetter(letter);
    } else if (
      consonants.indexOf(letter) !== -1
      && currentSyllable.length !== 0 
    ) {
      // если согласная, и уже есть буквы в слоге
      if (
        currentSyllable[0] === letter
        && syllables.length === 0
      ) {
        return;
      }
      // заканчиваем прошлый слог
      endSyllable();
      addLetter(letter);
    } else if (
      consonants.indexOf(letter) !== -1
      && currentSyllable.length === 0
    ) {
      // если согласная, и нет букв в слоге, добавляем в слог
      addLetter(letter);
    } else if (special.indexOf(letter) !== -1) {
      // твердый и мягкий знаки обрывают слог
      endSyllable();
    }
  });

  if (currentSyllable.length) {
    endSyllable();
  }

  return syllables;
}

module.exports = syllable;
