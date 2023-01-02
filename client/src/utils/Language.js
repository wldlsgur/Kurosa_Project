import WarringDataKor from "./WarringDataKor";
import talkDataKr from "./TalkDataKor";
import WarringDataJp from "./WarringDataJp";
import talkDataJp from "./TalkDataJp";
import ResultDataKor from "./ResultDataKor";
import ResultDataJp from "./ResultDataJp";
import QnaDataKor from "./QnaDataKor";
import QnaDataJp from "./QnaDataJp";
import ProducersKor from "./ProducersDataKor";
import ProducersJp from "./ProducersDataJp";

const kor = {
  warring: WarringDataKor,
  talk: talkDataKr,
  result: ResultDataKor,
  qna: QnaDataKor,
  producers: ProducersKor,
};
const jp = {
  warring: WarringDataJp,
  talk: talkDataJp,
  result: ResultDataJp,
  qna: QnaDataJp,
  producers: ProducersJp,
};
export { kor, jp };
