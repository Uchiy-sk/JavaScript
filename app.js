// // 関数 呼び出し

// // メイン部分
// let alertString;

// // 作成した関数を呼び出し、変数へ格納
// alertString = addString("WebCamp");

// //変数の中身をアラートで表示する
// alert(alertString);

// // 作成した関数
// function addString(strA){
//   let addStr = "Hello " + strA;
//   return addStr;
// }


// // 複数関数での表示
// let promptStr = prompt('何か好きな文字を入力してください。');

// alert(promptStr);


// じゃんけんプログラム

// じゃんけんの手を入力してもらうプロンプト欄を生成
let flag = false
let user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');

while (flag == false) {
  alert('グー・チョキ・パーのいずれかを入力してください')
  user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');
  flag = FlagHand(user_hand)
}

// じゃんけんの手をランダムに作成する関数を呼び出す
let js_hand = getJShand();

// ユーザの手とJavaScriptのじゃんけんの手を比べる関数を呼び出し、結果をjudgeに入れる
let judge = winLose(user_hand, js_hand);

if (flag == null) {
  alert('またチャレンジしてね')
} else {
  // 結果を表示する
  alert('あなたの選んだ手は' + user_hand + 'です。\nJavaScriptの選んだ手は' + js_hand + 'です。\n結果は' + judge + 'です。');
}


// ランダムでじゃんけんの手を作成する関数
function getJShand(){
  let js_hand_num = Math.floor( Math.random() * 3 );
  let hand_name;

  if(js_hand_num == 0){
    hand_name = "グー";
  } else if(js_hand_num == 1){
    hand_name = "チョキ";
  } else if(js_hand_num == 2){
    hand_name = "パー";
  }

  return hand_name;
}

// ユーザの手とJavaScriptのじゃんけんの手を比べる関数
function winLose(user, js){
  let winLoseStr;

  if(user == "グー"){
    if(js == "グー"){
      winLoseStr = "あいこ";
    } else if(js == "チョキ"){
      winLoseStr = "勝ち";
    } else if(js == "パー"){
      winLoseStr = "負け";
    }
  } else if(user == "チョキ"){
    if(js == "グー"){
      winLoseStr = "負け";
    } else if(js == "チョキ"){
      winLoseStr = "あいこ";
    } else if(js == "パー"){
      winLoseStr = "勝ち";
    }
  } else if(user == "パー"){
    if(js == "グー"){
      winLoseStr = "勝ち";
    } else if(js == "チョキ"){
      winLoseStr = "負け";
    } else if(js == "パー"){
      winLoseStr = "あいこ";
    }
  }

  return winLoseStr;
}

function FlagHand(user_hand){
  let flag = false
  if (user_hand == "グー" || user_hand == "チョキ" || user_hand == "パー"){
    flag = true
  } else if(user_hand == null) {
    flag = null
  }
  return flag
}