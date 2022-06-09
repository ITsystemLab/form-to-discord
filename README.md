# Google Formの送信内容をDiscordへ通知


こちらのコードは 「GoogleForm」と「Discord」を使用します。

・[GoogleForm](https://docs.google.com/forms/)<br>
・[Discord](https://discord.com/)

Googleフォームにて回答が送信された時、Discordの所定のチャンネルにて通知を送信することができます。


> ITシステムラボ : https://www.itsystem-lab.com/
```
©︎Copyright All Rights Reserved ITsystemLab
```

## 設定方法

### 1, Googleフォームを作成
まず、新しい[Googleフォーム](https://docs.google.com/forms/)を作成してください。<br>
<img width="1055" alt="Googleフォームを作成" src="https://user-images.githubusercontent.com/87808547/172774076-99a07035-0e12-4b17-941a-c1bf98949143.png">


### 2, スクリプトエディタを開く
新しいGoogleフォームの画面を開いたら、画面右上の【︙】-> 【スクリプトエディタ】の順番でクリックして、スクリプトエディタ(GoogleAppsScript)を開いてください。<br>
<img width="297" alt="スクリプトエディタを開く" src="https://user-images.githubusercontent.com/87808547/172775520-4aaa79a1-ad05-43cd-abc8-938c87d2c1e2.png">


### 3, ソースコードを書く
スクリプトエディタの画面を開けたら、下の画像のオレンジ枠の中にソースコードを入力してください。<br>
<img width="1440" alt="ソースコードを書く" src="https://user-images.githubusercontent.com/87808547/172780523-0569dbd4-5e1e-4adb-a4d0-e11304138f7f.png">

### 4 保存する
ソースコードが書けたらいずれかの方法で保存してください。<br>
<ul>
  <li>下の画像のオレンジ枠のボタンを押す</li>
  <li>Crtl + S</li>
  <li>Cmd + S</li>
</ul>
<img width="1120" alt="スクリーンショット 2022-06-09 15 41 00" src="https://user-images.githubusercontent.com/87808547/172781993-a0129c4a-2cc7-4118-95ac-fd006a72a34a.png">

### 5 トリガー追加画面を開く
保存できたら以下の順番でクリックし、トリガー追加画面を開いてください。<br>
<ol>
  <li>左のサイドバーの中の「トリガー」(⏰時計マーク)をクリックしてください。</li>
  <li>画面右下の「＋ トリガーを追加」をクリックしてください。</li>
</ol>
<img width="1439" alt="スクリーンショット 2022-06-09 15 52 17" src="https://user-images.githubusercontent.com/87808547/172790329-e6e6b237-0a76-4b77-9369-7525fa07eb67.png">

### 6 トリガーを設定する
トリガー追加画面を開けたら、以下のように設定し、「保存」を押してください。<br>
```
実行する関数を選択 : そのまま
実行するデプロイを選択 : そのまま
イベントのソースを選択 : フォームから
イベントの種類を選択 : フォーム送信時
エラー通知設定 : そのまま
```
<img width="707" alt="スクリーンショット 2022-06-09 16 44 52" src="https://user-images.githubusercontent.com/87808547/172793736-b6ec2b6d-72b8-49e3-8112-0f02618e0b29.png">

### 7 Googleの認証

<img width="707" alt="スクリーンショット 2022-06-09 16 44 52" src="https://user-images.githubusercontent.com/87808547/172793736-b6ec2b6d-72b8-49e3-8112-0f02618e0b29.png">人
<img width="707" alt="スクリーンショット 2022-06-09 16 44 52" src="https://user-images.githubusercontent.com/87808547/172793736-b6ec2b6d-72b8-49e3-8112-0f02618e0b29.png">
