export type Question = {
  id: string;
  questionNumber?: string | null; // 質問番号
  questionTitle?: string | null; // 質問タイトル
  questionSentence: string; // 質問文
  qaFormat: QAFormat; // 質問フォーマット
  answer?: Answer | null; // 回答
};

export enum QAFormat {
  TEXT = "TEXT", // フリーテキスト
  DATE = "DATE", // 日付(yyyyMMdd)
  DATE_YYYY_MM = "DATE_YYYY_MM", // 月(yyyyMM)
  DATE_YYYY = "DATE_YYYY", // 年(yyyy)
  NUMBER = "NUMBER", // 数値
  RADIO = "RADIO", // ラジオボタン
  CHECKBOX = "CHECKBOX", // チェックボックス
  GRID = "GRID", // グリッド
  FILE = "FILE", // ファイル
}

export type Answer = {
  textFormat?: string | null; // テキストフォーマットの回答
};
