export type ListItemType = {
  id: number;
  content: string;
  url?: string;
  name?: string;
};
export const conditionList: ListItemType[] = [
  { id: 1, content: '家紋で絞る', url: '/#crest', name: 'crest' },
  { id: 2, content: '名前で絞る', url: '/#name', name: 'name' },
  { id: 3, content: '出身地で絞る', url: '/#place', name: 'place' },
];
export const naviList: ListItemType[] = [
  { id: 1, content: 'ログイン', url: '/login' },
  { id: 2, content: '新規登録', url: '/insert' },
];
export const headerIdList = {
  crest: 'crest',
  name: 'name',
  place: 'place',
  login: 'login',
  insert: 'insert',
};

export const kanaList: ListItemType[] = [
  { id: 1, content: 'あ行' },
  { id: 2, content: 'か行' },
  { id: 3, content: 'さ行' },
  { id: 4, content: 'た行' },
  { id: 5, content: 'な行' },
  { id: 6, content: 'は行' },
  { id: 7, content: 'ま行' },
  { id: 8, content: 'や行' },
  { id: 9, content: 'ら行' },
  { id: 10, content: 'わ行' },
];
export const shapeList: ListItemType[] = [
  { id: 1, content: '自然紋' },
  { id: 2, content: '植物紋' },
  { id: 3, content: '動物紋' },
  { id: 4, content: '建築紋' },
  { id: 5, content: '器物紋' },
  { id: 6, content: '幾何紋' },
  { id: 7, content: '文字紋' },
];

export const regionList = [
  { id: 1, contentn: '北海道', color: '#B6CE90' },
  { id: 2, contentn: '東北', color: '#F8ED98' },
  { id: 3, contentn: '関東', color: '#DBACA3' },
  { id: 4, contentn: '北陸', color: '#9C6C84' },
  { id: 5, contentn: '東海', color: '#B4CFE2' },
  { id: 6, contentn: '近畿', color: '#E6A56B' },
  { id: 7, contentn: '中国', color: '#DCDE9E' },
  { id: 8, contentn: '四国', color: '#D6B2C4' },
  { id: 9, contentn: '九州', color: '#8999C5' },
  { id: 10, contentn: '沖縄', color: '#648F74' },
];
export type Prefecture = {
  id: number;
  content: string;
  region: number;
};
export const prefectureList: Prefecture[] = [
  { id: 1, content: '北海道', region: 1 },
  { id: 2, content: '青森県', region: 2 },
  { id: 3, content: '岩手県', region: 2 },
  { id: 4, content: '宮城県', region: 2 },
  { id: 5, content: '秋田県', region: 2 },
  { id: 6, content: '山形県', region: 2 },
  { id: 7, content: '福島県', region: 2 },
  { id: 8, content: '茨城県', region: 3 },
  { id: 9, content: '栃木県', region: 3 },
  { id: 10, content: '群馬県', region: 3 },
  { id: 11, content: '埼玉県', region: 3 },
  { id: 12, content: '千葉県', region: 3 },
  { id: 13, content: '東京都', region: 3 },
  { id: 14, content: '神奈川県', region: 3 },
  { id: 15, content: '新潟県', region: 4 },
  { id: 16, content: '富山県', region: 4 },
  { id: 17, content: '石川県', region: 4 },
  { id: 18, content: '福井県', region: 4 },
  { id: 19, content: '山梨県', region: 5 },
  { id: 20, content: '長野県', region: 5 },
  { id: 21, content: '岐阜県', region: 5 },
  { id: 22, content: '静岡県', region: 5 },
  { id: 23, content: '愛知県', region: 5 },
  { id: 24, content: '三重県', region: 5 },
  { id: 25, content: '滋賀県', region: 6 },
  { id: 26, content: '京都府', region: 6 },
  { id: 27, content: '大阪府', region: 6 },
  { id: 28, content: '兵庫県', region: 6 },
  { id: 29, content: '奈良県', region: 6 },
  { id: 30, content: '和歌山県', region: 6 },
  { id: 31, content: '鳥取県', region: 7 },
  { id: 32, content: '島根県', region: 7 },
  { id: 33, content: '岡山県', region: 7 },
  { id: 34, content: '広島県', region: 7 },
  { id: 35, content: '山口県', region: 7 },
  { id: 36, content: '徳島県', region: 8 },
  { id: 37, content: '香川県', region: 8 },
  { id: 38, content: '愛媛県', region: 8 },
  { id: 39, content: '高知県', region: 8 },
  { id: 40, content: '福岡県', region: 9 },
  { id: 41, content: '佐賀県', region: 9 },
  { id: 42, content: '長崎県', region: 9 },
  { id: 43, content: '熊本県', region: 9 },
  { id: 44, content: '大分県', region: 9 },
  { id: 45, content: '宮崎県', region: 9 },
  { id: 46, content: '鹿児島県', region: 9 },
  { id: 47, content: '沖縄県', region: 10 },
];
