type HTML = string;

export interface Member {
  name: string;
  charge: HTML; // 担当
  profile: HTML; // 自己紹介
}

const sakamotop =
  {
    name: 'さかもとP',
    charge: 'なばかりプロデューサー兼テイジゴビールタイマー',
    profile: 'ビール大好き！！！！！！',
  };

const noBeerK =
  {
    name: 'ビール飲まない社員K',
    charge: `人の褌や自分の褌で相撲を取ったりする
<br>
（主にトラックメーカー）`,
    profile: `ビールじゃなくてハイボールなら飲みます。
<br>
定時後ハイボールタイム、よろしこ`,
  };

const yukizo =
{
  name: 'yokizo',
  charge: `えらそーにする`,
  profile: 'リハビリ中で戦力になれないので、えらそーにしてます。',
}

const nishio =
{
  name: '社長',
  charge: `Protooler`,
  profile: 'コネをフル活用して良い作品作ります',
}

const mako =
{
  name: '管理人MAKO',
  charge: 'サイトの管理とお茶汲み',
  profile: `サイトの管理人です。
<br>
音楽作れないのでホムペ担当になりました。
<br>
昔懐かしい雰囲気のサイトを作って行きたいと思います！`,
}

export const members: Member[] = [
  sakamotop,
  noBeerK,
  yukizo,
  nishio,
  mako,
];

export default members;