module.exports = replace;

function replace (syllable, index, syllables) {
  if (
    singlesConsonants[syllable]
    && !(
      syllables.length > index + 1
      && syllables[index + 1][0] === syllable
      )
  ) {
    // нет удвоения, заменяем на полный слог
    return replace.call(this, singlesConsonants[syllable], index, syllables);
  }

  if (this.smart && smartPairs[syllable]) {
    return smartPairs[syllable];
  }

  if (pairs[syllable]) {
    return pairs[syllable];
  }

  var result = syllable;
  for (var searchChars in replacePairs) {
    if (replacePairs.hasOwnProperty(searchChars)) {
      result = result.replace(
        new RegExp(searchChars, 'g'),
        replacePairs[searchChars]
      );
    }
  }
  return result;
}

var pairs = {
  'мы': ['му', 'и'],
  'ху': 'фу',
  'фу': 'фу',
  'цы': 'цу',
  'чи': 'чи',
  'ча': 'тя',
  'чу': 'тю',
  'чо': 'тё',
  'ти': 'чи',
  'ту': 'цу',
  'цу': 'цу',
  'ди': 'дзи',
  'ду': 'зу',
  'жу': 'зю',
  'жо': 'зё',
  'жа': 'дзя',
  'зя': 'дзя',
  'зю': 'дзю',
  'зё': 'дзё',
  'жэ': 'зэ',
  'ша': 'ся',
  'ща': 'ся',
  'шу': 'сю',
  'щу': 'сю',
  'щи': 'щи',
  'ши': 'щи',
  'си': 'щи',
  'що': 'сё',
  'шо': 'сё'
};

var smartPairs = {
  'ва': 'ва',
  'ви': 'ви',
  'ву': 'ву',
  'ве': 'ве',
  'во': 'во',
  'сы': 'сы',
  'ты': 'ты',
  'цы': 'цы',
  'фа': 'фа',
  'фи': 'фи',
  'фэ': 'фэ',
  'фо': 'фо',
  'ца': 'ца',
  'ци': 'ци',
  'цо': 'цо',
  'це': 'цэ',
  'цэ': 'цэ',
  'че': 'чэ',
  'ди': 'ди',
  'ду': 'ду',
  'ти': 'ти',
  'ту': 'ту',
  'жа': 'жа',
  'жэ': 'жэ',
  'щэ': 'шэ',
  'шэ': 'шэ',
  'ще': 'шэ',
  'ше': 'шэ'
};

var replacePairs = {
  'щ': 'с',
  'ш': 'с',
  'йо': 'ё',
  'йу': 'ю',
  'йа': 'я',
  'в': 'б',
  'л': 'р',
  'ы': 'у',
  'ь': 'и',
  'е': 'э',
  'ц': 'т',
  'ч': 'т',
  'ф': 'б',
  'ж': 'з'
};

var singlesConsonants = {
  'б': 'бу',
  'в': 'ву',
  'г': 'гу',
  'д': 'до',
  'ж': 'зу',
  'з': 'зу',
  'й': 'и',
  'к': 'ку',
  'л': 'лу',
  'м': 'му',
  'п': 'пу',
  'р': 'ру',
  'с': 'су',
  'т': 'то',
  'ф': 'фу',
  'ц': 'цу',
  'ч': 'чи',
  'х': 'хо',
  'ш': 'щи',
  'щ': 'щи'
};
