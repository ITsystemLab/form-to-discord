function getForm(e) {
  
  // フォーム内容
  var formResponses = e.response.getItemResponses();

  // メールアドレスを取得 (フォームの設定で、メールアドレスを収集するをオンにしている場合のみ)
  var email = e.response.getRespondentEmail();

  // もし、メールアドレスが取得できなかったら
  if(email == null){

    // 質問の最初の答えを回答者名にする
    email = formResponses[0];
  }

  // 送信内容
  var contents = "\n";

  // 質問数を取得
  var size = formResponses.length;
 
  // 項目を繰り返す
  for (var i = 0; i < size; i++) {

    // 質問等を取得
    var itemResponse = formResponses[i];

    try{

      // 質問
      var question = itemResponse.getItem().getTitle();

      // 回答
      var answer = itemResponse.getResponse();

      // 「質問:回答」を追加 (\nで改行)
      contents += question + " : "+ answer + "\n";
    }
    catch(e){
      console.log(i+"でエラーが発生しました。")
      console.log(e)
    }
  }

  // webhookURLを定義
  var webhookURL = ""; // ここにDiscordのWebhookのURLを貼り付ける

  // 送信メッセージの初期値を定義
  var message = "";

  // タイトルを定義
  var title = email+"からフォームの入力がありました。\n";

  // タイトルを送信メッセージに追加
  message += title;

  // 装飾用に送信メッセージに追加
  message += "```";

  // 「質問:回答」送信メッセージに追加
  message += contents;

  // 装飾用に送信メッセージに追加
  message += "```";

  // オプションを作成
  var options = {

    // メッセージを入れる
    "content" : message
  };

  // データを作って投げる
  UrlFetchApp.fetch(

    webhookURL, // 投げ先のURL
    {
      method: "POST", //投げ方
      contentType: "application/json", //投げるコンテンツの型
      payload: JSON.stringify(options), // オプションをJson型に変換
      muteHttpExceptions: true, // 失敗してもエラーを吐かないようにする
    }
  );
}
