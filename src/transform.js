module.exports = transform;

var replace = require('./filters/replace');
var syllable = require('./filters/syllable');

var katakanize = require('./filters/katakanize');
var prepareDoubles = require('./filters/prepare_doubles');

function transform (word, smart) {
  var opts = {
    smart: smart
  };

  var chain = [word];

  // разбиение на слоги
  var syllables = syllable(word);
  chain.push(syllables.join('-'));

  // трансформация под произношение
  syllables = syllables.map(replace, opts);
  syllables = flat(syllables);
  chain.push(syllables.join('-'));

  // обработка для катаканизации
  var prepared = syllables.map(prepareDoubles, opts);
  chain.push(prepared.join('-'));

  // катаканизация
  var katakana = prepared.map(katakanize, opts);
  chain.push(katakana.join(''));

  return [katakana, syllables, chain];
}

function flat (syllables) {
  var result = [];
  syllables.forEach(function (syllable) {
    if (typeof syllable === 'string') {
      return result.push(syllable);
    }

    syllable.forEach(function (newSyllable) {
      return result.push(newSyllable);
    });
  });

  return result;
}
