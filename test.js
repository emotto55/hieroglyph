var hiero=["𓄿","𓃀","𓊃","𓂧","𓇌","𓆑","𓎼","𓉔","𓇋","𓆓","𓎡","𓃭","𓅓","𓈖","𓍯","𓊪","𓏘","𓂋","𓋴","𓏏","𓍢","𓆑","𓅱","𓎡𓋴","𓇋","𓊃"]

var alpha=["A","B","C(Z)","D","E","F(V)","G","H","I(Y)","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]


const ITree = {
  𓄿: 'ア', i: 'イ', u: 'ウ', 𓇌: 'エ', o: 'オ',
  k: {
    𓄿: 'カ', i: 'キ', u: 'ク', 𓇌: 'ケ', o: 'コ',
    y: { 𓄿: 'キャ', i: 'キィ', u: 'キュ', 𓇌: 'キェ', o: 'キョ' },
  },
  s: {
    𓄿: 'サ', i: 'シ', u: 'ス', 𓇌: 'セ', o: 'ソ',
    𓉔: { 𓄿: 'シャ', i: 'シ', u: 'シュ', 𓇌: 'シェ', o: 'ショ' },
    y: { 𓄿: 'シャ', i: 'シィ', u: 'シュ', 𓇌: 'シェ', o: 'ショ' },
  },
  t: {
    𓄿: 'タ', i: 'チ', u: 'ツ', 𓇌: 'テ', o: 'ト',
    𓉔: { 𓄿: 'テャ', i: 'ティ', u: 'テュ', 𓇌: 'テェ', o: 'テョ' },
    y: { 𓄿: 'チャ', i: 'チィ', u: 'チュ', 𓇌: 'チェ', o: 'チョ' },
    s: { 𓄿: 'ツァ', i: 'ツィ', u: 'ツ', 𓇌: 'ツェ', o: 'ツォ' },
  },
  𓊃: {
    𓄿: 'カ', i: 'シ', u: 'ク', 𓇌: 'セ', o: 'コ',
    𓉔: { 𓄿: 'チャ', i: 'チ', u: 'チュ', 𓇌: 'チェ', o: 'チョ' },
    y: { 𓄿: 'チャ', i: 'チィ', u: 'チュ', 𓇌: 'チェ', o: 'チョ' },
  },
  q: {
    𓄿: 'クァ', i: 'クィ', u: 'ク', 𓇌: 'クェ', o: 'クォ',
  },
  n: {
    𓄿: 'ナ', i: 'ニ', u: 'ヌ', 𓇌: 'ネ', o: 'ノ', n: 'ン',
    y: { 𓄿: 'ニャ', i: 'ニィ', u: 'ニュ', 𓇌: 'ニェ', o: 'ニョ' },
  },
  𓉔: {
    𓄿: 'ハ', i: 'ヒ', u: 'フ', 𓇌: 'ヘ', o: 'ホ',
    y: { 𓄿: 'ヒャ', i: 'ヒィ', u: 'ヒュ', 𓇌: 'ヒェ', o: 'ヒョ' },
  },
  𓆑: {
    𓄿: 'ファ', i: 'フィ', u: 'フ', 𓇌: 'フェ', o: 'フォ',
    y: { 𓄿: 'フャ', u: 'フュ', o: 'フョ' },
  },
  m: {
    𓄿: 'マ', i: 'ミ', u: 'ム', 𓇌: 'メ', o: 'モ',
    y: { 𓄿: 'ミャ', i: 'ミィ', u: 'ミュ', 𓇌: 'ミェ', o: 'ミョ' },
  },
  y: { 𓄿: 'ヤ', i: 'イ', u: 'ユ', 𓇌: 'イェ', o: 'ヨ' },
  r: {
    𓄿: 'ラ', i: 'リ', u: 'ル', 𓇌: 'レ', o: 'ロ',
    y: { 𓄿: 'リャ', i: 'リィ', u: 'リュ', 𓇌: 'リェ', o: 'リョ' },
  },
  w: { 𓄿: 'ワ', i: 'ウィ', u: 'ウ', 𓇌: 'ウェ', o: 'ヲ' },
  𓎼: {
    𓄿: 'ガ', i: 'ギ', u: 'グ', 𓇌: 'ゲ', o: 'ゴ',
    y: { 𓄿: 'ギャ', i: 'ギィ', u: 'ギュ', 𓇌: 'ギェ', o: 'ギョ' },
  },
  z: {
    𓄿: 'ザ', i: 'ジ', u: 'ズ', 𓇌: 'ゼ', o: 'ゾ',
    y: { 𓄿: 'ジャ', i: 'ジィ', u: 'ジュ', 𓇌: 'ジェ', o: 'ジョ' },
  },
  j: {
    𓄿: 'ジャ', i: 'ジ', u: 'ジュ', 𓇌: 'ジェ', o: 'ジョ',
    y: { 𓄿: 'ジャ', i: 'ジィ', u: 'ジュ', 𓇌: 'ジェ', o: 'ジョ' },
  },
  𓂧: {
    𓄿: 'ダ', i: 'ヂ', u: 'ヅ', 𓇌: 'デ', o: 'ド',
    𓉔: { 𓄿: 'デャ', i: 'ディ', u: 'デュ', 𓇌: 'デェ', o: 'デョ' },
    y: { 𓄿: 'ヂャ', i: 'ヂィ', u: 'ヂュ', 𓇌: 'ヂェ', o: 'ヂョ' },
  },
  𓃀: {
    𓄿: 'バ', i: 'ビ', u: 'ブ', 𓇌: 'ベ', o: 'ボ',
    y: { 𓄿: 'ビャ', i: 'ビィ', u: 'ビュ', 𓇌: 'ビェ', o: 'ビョ' },
  },
  v: {
    𓄿: 'ヴァ', i: 'ヴィ', u: 'ヴ', 𓇌: 'ヴェ', o: 'ヴォ',
    y: { 𓄿: 'ヴャ', i: 'ヴィ', u: 'ヴュ', 𓇌: 'ヴェ', o: 'ヴョ' },
  },
  p: {
    𓄿: 'パ', i: 'ピ', u: 'プ', 𓇌: 'ペ', o: 'ポ',
    y: { 𓄿: 'ピャ', i: 'ピィ', u: 'ピュ', 𓇌: 'ピェ', o: 'ピョ' },
  },
  x: {
    𓄿: 'ァ', i: 'ィ', u: 'ゥ', 𓇌: 'ェ', o: 'ォ',
    y: {
      𓄿: 'ャ', i: 'ィ', u: 'ュ', 𓇌: 'ェ', o: 'ョ',
    },
    t: {
      u: 'ッ',
      s: {
        u: 'ッ',
      },
    },
  },
  l: {
    𓄿: 'ァ', i: 'ィ', u: 'ゥ', 𓇌: 'ェ', o: 'ォ',
    y: {
      𓄿: 'ャ', i: 'ィ', u: 'ュ', 𓇌: 'ェ', o: 'ョ',
    },
    t: {
      u: 'ッ',
      s: {
        u: 'ッ',
      },
    },
  },
};



function characterConverter(){
  var alpha_text = document.getElementById("input_area").value;
  var kana_text = document.getElementById("input_area").value;

  var hiero_len = hiero.length;
  var i;
  var re;
  for(i = 0; i < hiero_len; i++){
  	if(hiero[i]!==""){
  		re = new RegExp(hiero[i], "g");
  		alpha_text = alpha_text.replace(re, alpha[i]);
  	}
  }
  
  //console.log(text);
  document.getElementById("alpha_area").textContent = alpha_text;
  document.getElementById("kana_area").textContent = convertToKana(kana_text);
}

function clearInputArea(){
  document.getElementById("input_area").value = "";
}

function convertToKana(original) {
  const str = original.replace(/[Ａ-Ｚａ-ｚ]/, s => String.fromCharCode(s.charCodeAt(0) - 65248)).toLowerCase(); // 全角→半角→小文字
  let result = '';
  let tmp = '';
  let index = 0;
  const len = str.length;
  let node = ITree;
  const push = (char, toRoot = true) => {
    result += char;
    tmp = '';
    node = toRoot ? ITree : node;
  };
  console.log("str1:" + str);
  
  while (index < len) {
    //const char = str.charAt(index);
    const char = String.fromCodePoint(str.codePointAt(index));
    console.log("char:" + char);
    //if (char.match(/[a-z]/)) { // 英数字以外は考慮しない
      if (char in node) {
        const next = node[char];
        if (typeof next === 'string') {
          push(next);
        } else {
          tmp += original.charAt(index);
          node = next;
        }
        index++;
        continue;
      }
      const prev = str.charAt(index - 1);
      if (prev && (prev === 'n' || prev === char)) { // 促音やnへの対応
        push(prev === 'n' ? 'ン' : 'ッ', false);
      }
      if (node !== ITree && char in ITree) { // 今のノードがルート以外だった場合、仕切り直してチェックする
        push(tmp);
        continue;
      }
    //}
    push(tmp + char);
    index++;
  }
  tmp = tmp.replace(/n$/, 'ン'); // 末尾のnは変換する
  push(tmp);
  return result;
}

function convertToKana2(input) {
	let result = ''  // 変換結果の出力文字列
	let state = ITree  // 解析の状態
	let pending = ''  // 変換保留中の文字
	let dual = false  // 同じ文字が連続して入力されたか
	let offset = 0  // 入力文字列内での位置
	const size = input.length
	while (offset < size) {
		const char = input[offset]
		// 現在の解析状態で一致する文字が存在する場合
		if (char in state) {
			const value = state[char]
			// 変換確定
			if (typeof value === 'string') {
				if (dual) {
					result += 'っ'
					dual = false
				}
				result += value
				pending = ''
				state = ITree
			}
			// 変換途中
			else {
				state = value
				pending = char
			}
			offset += 1
			continue
		}
		// 現在の解析状態で一致する文字が存在しない場合
		// 連続する同じ文字に続けて入力された文字の場合
		if (dual) {
			result += pending + pending
			pending = ''
			state = ITree
			dual = false
			continue
		}
		// 直前の文字との厳密等価判定
		switch (pending) {
		case char:
			dual = true
			state = ITree
			continue
		case 'n':
			result += 'ん'
			pending = ''
			state = ITree
			continue
		case '':
			result += char
			offset += 1
			continue
		}
		// 該当なし
		result += pending
		pending = ''
		state = ITree
		continue
	}
	// 末尾の未確定な入力
	if (dual) {
		pending += pending
	}
	return result + pending
}
