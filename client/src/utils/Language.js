import WarringDataKor from "./WarringDataKor";
import talkDataKr from "./TalkDataKor";
import WarringDataJp from "./WarringDataJp";
import talkDataJp from "./TalkDataJp";
import ResultDataKor from "./ResultDataKor";
import ResultDataJp from "./ResultDataJp";
import QnaDataKor from "./QnaDataKor";
import QnaDataJp from "./QnaDataJp";

const kor = {
  warring: WarringDataKor,
  talk: talkDataKr,
  result: ResultDataKor,
  qna: QnaDataKor,
};
const jp = {
  warring: WarringDataJp,
  talk: talkDataJp,
  result: ResultDataJp,
  qna: QnaDataJp,
};
export { kor, jp };
