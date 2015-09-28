var assert = require('assert');

var Katakana = require('../');

function convert (word, smart) {
  var res = Katakana(word, smart);
  return [
    res[0].join(''),
    res[1].join('')
  ];
}

var equal = assert.deepStrictEqual.bind(assert);

describe('Конвертер', function () {
  it('должен преобразовывать основные слоги', function () {
    equal(convert('а'), ['ア', 'а']);
    equal(convert('и'), ['イ', 'и']);
    equal(convert('у'), ['ウ', 'у']);
    equal(convert('е'), ['エ', 'э']);
    equal(convert('э'), ['エ', 'э']);
    equal(convert('о'), ['オ', 'о']);

    equal(convert('ка'), ['カ', 'ка']);
    equal(convert('ки'), ['キ', 'ки']);
    equal(convert('ку'), ['ク', 'ку']);
    equal(convert('ке'), ['ケ', 'кэ']);
    equal(convert('кэ'), ['ケ', 'кэ']);
    equal(convert('ко'), ['コ', 'ко']);

    equal(convert('са'), ['サ', 'са']);
    equal(convert('си'), ['シ', 'щи']);
    equal(convert('щи'), ['シ', 'щи']);
    equal(convert('су'), ['ス', 'су']);
    equal(convert('се'), ['セ', 'сэ']);
    equal(convert('сэ'), ['セ', 'сэ']);
    equal(convert('со'), ['ソ', 'со']);

    equal(convert('та'), ['タ', 'та']);
    equal(convert('чи'), ['チ', 'чи']);
    equal(convert('цу'), ['ツ', 'цу']);
    equal(convert('тэ'), ['テ', 'тэ']);
    equal(convert('то'), ['ト', 'то']);

    equal(convert('на'), ['ナ', 'на']);
    equal(convert('ни'), ['ニ', 'ни']);
    equal(convert('ну'), ['ヌ', 'ну']);
    equal(convert('нэ'), ['ネ', 'нэ']);
    equal(convert('но'), ['ノ', 'но']);

    equal(convert('ха'), ['ハ', 'ха']);
    equal(convert('хи'), ['ヒ', 'хи']);
    equal(convert('фу'), ['フ', 'фу']);
    equal(convert('хэ'), ['ヘ', 'хэ']);
    equal(convert('хо'), ['ホ', 'хо']);

    equal(convert('ма'), ['マ', 'ма']);
    equal(convert('ми'), ['ミ', 'ми']);
    equal(convert('му'), ['ム', 'му']);
    equal(convert('мэ'), ['メ', 'мэ']);
    equal(convert('мо'), ['モ', 'мо']);

    equal(convert('я'), ['ヤ', 'я']);
    equal(convert('ю'), ['ユ', 'ю']);
    equal(convert('ё'), ['ヨ', 'ё']);

    equal(convert('ра'), ['ラ', 'ра']);
    equal(convert('ри'), ['リ', 'ри']);
    equal(convert('ру'), ['ル', 'ру']);
    equal(convert('рэ'), ['レ', 'рэ']);
    equal(convert('ро'), ['ロ', 'ро']);

    equal(convert('па'), ['パ', 'па']);
    equal(convert('пи'), ['ピ', 'пи']);
    equal(convert('пу'), ['プ', 'пу']);
    equal(convert('пэ'), ['ペ', 'пэ']);
    equal(convert('по'), ['ポ', 'по']);

    equal(convert('ба'), ['バ', 'ба']);
    equal(convert('би'), ['ビ', 'би']);
    equal(convert('бу'), ['ブ', 'бу']);
    equal(convert('бэ'), ['ベ', 'бэ']);
    equal(convert('бо'), ['ボ', 'бо']);

    equal(convert('да'), ['ダ', 'да']);
    equal(convert('дзи'), ['ヂ', 'дзи']);
    equal(convert('дзу'), ['ヅ', 'дзу']);
    equal(convert('дэ'), ['デ', 'дэ']);
    equal(convert('до'), ['ド', 'до']);

    equal(convert('за'), ['ザ', 'за']);
    equal(convert('зи'), ['ジ', 'зи']);
    equal(convert('зу'), ['ズ', 'зу']);
    equal(convert('зэ'), ['ゼ', 'зэ']);
    equal(convert('зо'), ['ゾ', 'зо']);

    equal(convert('га'), ['ガ', 'га']);
    equal(convert('ги'), ['ギ', 'ги']);
    equal(convert('гу'), ['グ', 'гу']);
    equal(convert('гэ'), ['ゲ', 'гэ']);
    equal(convert('го'), ['ゴ', 'го']);

    equal(convert('н'), ['ン', 'н']);

    equal(convert('кя'), ['キャ', 'кя']);
    equal(convert('кю'), ['キュ', 'кю']);
    equal(convert('кё'), ['キョ', 'кё']);

    equal(convert('ся'), ['シャ', 'ся']);
    equal(convert('сю'), ['シュ', 'сю']);
    equal(convert('сё'), ['ショ', 'сё']);

    equal(convert('тя'), ['チャ', 'тя']);
    equal(convert('тю'), ['チュ', 'тю']);
    equal(convert('тё'), ['チョ', 'тё']);

    equal(convert('ня'), ['ニャ', 'ня']);
    equal(convert('ню'), ['ニュ', 'ню']);
    equal(convert('нё'), ['ニョ', 'нё']);

    equal(convert('хя'), ['ヒャ', 'хя']);
    equal(convert('хю'), ['ヒュ', 'хю']);
    equal(convert('хё'), ['ヒョ', 'хё']);

    equal(convert('мя'), ['ミャ', 'мя']);
    equal(convert('мю'), ['ミュ', 'мю']);
    equal(convert('мё'), ['ミョ', 'мё']);

    equal(convert('ря'), ['リャ', 'ря']);
    equal(convert('рю'), ['リュ', 'рю']);
    equal(convert('рё'), ['リョ', 'рё']);

    equal(convert('пя'), ['ピャ', 'пя']);
    equal(convert('пю'), ['ピュ', 'пю']);
    equal(convert('пё'), ['ピョ', 'пё']);

    equal(convert('бя'), ['ビャ', 'бя']);
    equal(convert('бю'), ['ビュ', 'бю']);
    equal(convert('бё'), ['ビョ', 'бё']);

    equal(convert('дя'), ['ヂャ', 'дя']);
    equal(convert('дю'), ['ヂュ', 'дю']);
    equal(convert('дё'), ['ヂョ', 'дё']);

    equal(convert('дзя'), ['ジャ', 'дзя']);
    equal(convert('дзю'), ['ジュ', 'дзю']);
    equal(convert('дзё'), ['ジョ', 'дзё']);

    equal(convert('гя'), ['ギャ', 'гя']);
    equal(convert('гю'), ['ギュ', 'гю']);
    equal(convert('гё'), ['ギョ', 'гё']);
  });

  it('должен преобразовывать распространенные имена', function () {
    equal(convert('алексей'), ['アレクセイ', 'арэкусэи']);
    equal(convert('лёша'), ['リョシャ', 'рёся']);
    equal(convert('александр'), ['アレクサンドル', 'арэкусандору']);
    equal(convert('анатолий'), ['アナトリイ', 'анатории']);
    equal(convert('аркадий'), ['アルカヂイ', 'арукадзии']);
    equal(convert('аркаша'), ['アルカシャ', 'арукася']);
    equal(convert('толя'), ['トリャ', 'торя']);
    equal(convert('андрей'), ['アンドレイ', 'андорэи']);
    equal(convert('валентин'), ['バレンチン', 'барэнчин']);
    equal(convert('василий'), ['バシリイ', 'бащирии']);
    equal(convert('вася'), ['バシャ', 'бася']);
    equal(convert('виталий'), ['ビタリイ', 'битарии']);
    equal(convert('владимир'), ['ブラヂミル', 'бурадзимиру']);
    equal(convert('володя'), ['ボロヂャ', 'бородя']);
    equal(convert('вячеслав'), ['ビャテスラブ', 'бятэсурабу']);
    equal(convert('слава'), ['スラバ', 'сураба']);
    equal(convert('евгений'), ['エブゲニイ', 'эбугэнии']);
    equal(convert('леонид'), ['レオニド', 'рэонидо']);
    equal(convert('лёня'), ['リョニャ', 'рёня']);
    equal(convert('михаил'), ['ミハイル', 'михаиру']);
    equal(convert('миша'), ['ミシャ', 'мися']);
    equal(convert('николай'), ['ニコライ', 'никораи']);
    equal(convert('коля'), ['コリャ', 'коря']);
    equal(convert('пётр'), ['ピョトル', 'пётору']);
    equal(convert('сергей'), ['セルゲイ', 'сэругэи']);
    equal(convert('серёжа'), ['セリョジャ', 'сэрёдзя']);
    equal(convert('яков'), ['ヤコブ', 'якобу']);
    equal(convert('петя'), ['ペチャ', 'пэтя']);
    equal(convert('ярослав'), ['ヤロスラブ', 'яросурабу']);
    equal(convert('роман'), ['ロマン', 'роман']);
    equal(convert('тимофей'), ['チモベイ', 'чимобэи']);
    equal(convert('фома'), ['ボマ', 'бома']);
    equal(convert('юлиан'), ['ユリアン', 'юриан']);
    equal(convert('юрий'), ['ユリイ', 'юрии']);
    equal(convert('юра'), ['ユラ', 'юра']);

    equal(convert('александра'), ['アレクサンドラ', 'арэкусандора']);
    equal(convert('алина'), ['アリナ', 'арина']);
    equal(convert('анита'), ['アニタ', 'анита']);
    equal(convert('анна'), ['アンナ', 'анна']);
    equal(convert('аня'), ['アニャ', 'аня']);
    equal(convert('арина'), ['アリナ', 'арина']);
    equal(convert('валентина'), ['バレンチナ', 'барэнчина']);
    equal(convert('вера'), ['ベラ', 'бэра']);
    equal(convert('галина'), ['ガリナ', 'гарина']);
    equal(convert('галя'), ['ガリャ', 'гаря']);
    equal(convert('дана'), ['ダナ', 'дана']);
    equal(convert('евгения'), ['エブゲニヤ', 'эбугэния']);
    equal(convert('люба'), ['リュバ', 'рюба']);
    equal(convert('любовь'), ['リュボビ', 'рюбоби']);
    equal(convert('карина'), ['カリナ', 'карина']);
    equal(convert('маргарита'), ['マルガリタ', 'маругарита']);
    equal(convert('марина'), ['マリナ', 'марина']);
    equal(convert('мария'), ['マリヤ', 'мария']);
    equal(convert('надежда'), ['ナデズダ', 'надэзуда']);
    equal(convert('надя'), ['ナヂャ', 'надя']);
    equal(convert('наталия'), ['ナタリヤ', 'натария']);
    equal(convert('наташа'), ['ナタシャ', 'натася']);
    equal(convert('оксана'), ['オクサナ', 'окусана']);
    equal(convert('ольга'), ['オリガ', 'орига']);
    equal(convert('полина'), ['ポリナ', 'порина']);
    equal(convert('поля'), ['ポリャ', 'поря']);
    equal(convert('рита'), ['リタ', 'рита']);
    equal(convert('светлана'), ['スベトラナ', 'субэторана']);
    equal(convert('света'), ['スベタ', 'субэта']);
    equal(convert('соня'), ['ソニャ', 'соня']);
    equal(convert('татьяна'), ['タチヤナ', 'тачияна']);
    equal(convert('фаина'), ['バイナ', 'баина']);
    equal(convert('юлия'), ['ユリヤ', 'юрия']);
    equal(convert('юля'), ['ユリャ', 'юря']);
    equal(convert('яна'), ['ヤナ', 'яна']);

    equal(convert('валя'), ['バリャ', 'баря']);
    equal(convert('женя'), ['ゼニャ', 'зэня']);
    equal(convert('саша'), ['サシャ', 'сася']);
  });
});
