module.exports = prepareDoubles;

function prepareDoubles (syllable, index, syllables) {
  if (
    singlesConsonants.indexOf(syllable) !== -1
    && doubleConsonants.indexOf(syllable) === -1
  ) {
    return '+';
  }
  return syllable;
}

var singlesConsonants = [
  'б',
  'в',
  'г',
  'д',
  'з',
  'й',
  'к',
  'м',
  'н',
  'п',
  'р',
  'с',
  'т',
  'ф',
  'ц',
  'ч',
  'х',
  'щ',
  'ш'
];

var doubleConsonants = ['н', 'м'];
