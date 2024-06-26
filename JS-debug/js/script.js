$(function () {
  // Enterを押せなくする
  $(document).on("keypress", "input:not(.allow_submit)", function (event) {
    return event.which !== 13;
  });

  // let 追記
  let trials = 0;
  let ran = Math.round(Math.random() * 9);

  $('.jquery-form [name=input-number]').change(function () {

    // 試行回数
    trials++;
    $('.trials').html(trials);  // trial -> trials

    const VAL_NUMBER = $(this).val();
    let val = Number(VAL_NUMBER) || 0; // NaNのとき0にする
    const RESULT = Math.abs(val - ran); //数字がどのぐらい離れているか // run->ran

    //判定処理
    if (val < 0 || val > 9) { // 大小反対
      $('.result-text').html("範囲内で入力してね！");
    } else if (RESULT == 0) {
      $('.result-text').html("正解!");
    } else if (RESULT <= 2) {
      $('.result-text').html("惜しいね！");
    } else {
      $('.result-text').html("違うよ！");
    }
  });
})