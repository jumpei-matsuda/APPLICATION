import feature001 from 'images/feature_001.jpg';
import feature002 from 'images/feature_002.jpg';
import feature003 from 'images/feature_003.jpg';

export type HeaderSourceList = {
  id: number;
  content: string;
  url: string;
};
export const headerSourceList: HeaderSourceList[] = [
  { id: 1, content: 'コース案内', url: '/introduction' },
  { id: 2, content: '店舗紹介', url: '/store' },
  { id: 3, content: 'お問い合わせ', url: '/contact' },
];

export type FatureSource = {
  id: number;
  title: string;
  discription: string;
  image: string;
  alt: string;
  reverce?: boolean;
};
export const featureSourceList: FatureSource[] = [
  {
    id: 1,
    title: '1 - 現場目線での徹底指導',
    discription:
      'ここにテキストが表示されます。ここにテキストが表示されます。ここにテキストが表示されます。ここにテキストが表示されます。ここにテキストが表示されます。ここにテキストが表示されます。ここにテキストが表示されます。ここにテキストが表示されます。',
    image: feature001,
    alt: 'feature_001',
  },
  {
    id: 2,
    title: '2 - 実際に企業でも使われているカリキュラムを採用',
    discription:
      'ここにテキストが表示されます。ここにテキストが表示されます。ここにテキストが表示されます。ここにテキストが表示されます。ここにテキストが表示されます。ここにテキストが表示されます。ここにテキストが表示されます。ここにテキストが表示されます。',
    image: feature002,
    alt: 'feature_002',
    reverce: true,
  },
  {
    id: 3,
    title: '3 - 充実の就職サポート',
    discription:
      'ここにテキストが表示されます。ここにテキストが表示されます。ここにテキストが表示されます。ここにテキストが表示されます。ここにテキストが表示されます。ここにテキストが表示されます。ここにテキストが表示されます。ここにテキストが表示されます。',
    image: feature003,
    alt: 'feature_003',
  },
];
type CourseSourceTitleList = {
  forStudent: string;
  detail: string;
  skills: string;
  price: string;
};
export const courseSourceTitleList: CourseSourceTitleList = {
  forStudent: '受講がおすすめの方',
  detail: 'コース詳細',
  skills: '身につくスキル',
  price: '料金',
};

type CourseSourceDetailList = {
  id: number;
  title: string;
  forStudent: string;
  detail: string;
  skills: string;
  price: string;
};
export const courseSourceDetailList: CourseSourceDetailList[] = [
  {
    id: 1,
    title: 'エンジニアコース',
    forStudent: '今後エンジニア転職をお考えの方',
    detail:
      '実際のエンジニアのお仕事で必要なスキルを一から学んでいただき、即戦力で活躍できる人材を目指したコースです。/r/nPCに関する基礎知識を学んで頂いたのちに、Webアプリケーションを実際に作成しながらプログラミングスキルを身に着けて頂きます。',
    skills:
      '・IT基礎知識(ITパスポート相当)/r/n・プログラミングスキル(Java・HTML・CSS)',
    price: '330,000円(税込)',
  },
  {
    id: 2,
    title: 'Webデザイナーコース',
    forStudent:
      '今後Webデザイナー転職をお考えの方・副業としてWebデザインをしていきたい方',
    detail:
      'Webページの仕組みやデザイン、コーディングを学び、自身でWebページを作成できるスキルを身に着けられるコースです。',
    skills:
      '・IT基礎知識(ITパスポート相当)/r/n・プログラミングスキル(HTML・CSS・JavaScript)',
    price: '285,000円(税込)',
  },
  {
    id: 3,
    title: '一般教養コース',
    forStudent: 'アプリやWebページの仕組みを理解したい方',
    detail:
      '普段何気なく使用しているアプリや、閲覧しているホームページがどのようにして作成され、皆さんのもとに届いているのかを学習できます。/r/nIT化が進む現代で必要な知識を身に着けたい方におすすめです。',
    skills:
      '・IT基礎知識(ITパスポート相当)/r/n・ホームページ、アプリの仕組みに関する知識',
    price: '55,000円(税込)',
  },
];

type StoreList = {
  id: number;
  storeName: string;
  adress: string;
  tel: string;
};
export const storeList: StoreList[] = [
  {
    id: 1,
    storeName: '新宿校',
    adress: '東京都新宿区1-1-1',
    tel: '030-1111-2222',
  },
  {
    id: 2,
    storeName: '渋谷校',
    adress: '東京都渋谷区1-1-1',
    tel: '030-3333-4444',
  },
  {
    id: 3,
    storeName: '大阪校',
    adress: '大阪府大阪市北区2-2-2',
    tel: '060-5555-6666',
  },
  {
    id: 4,
    storeName: '名古屋校',
    adress: '愛知県名古屋市3-3-3',
    tel: '080-7777-8888',
  },
];
