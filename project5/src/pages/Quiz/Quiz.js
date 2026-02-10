import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getTopic } from "../../services/topicServices";
import { getQuestion } from "../../services/questionServices";
import { getCookie } from "../../cookieUtils/cookieUtils";
import { postAnswer } from "../../services/answerServices";
function Quiz() {
  const params = useParams();
  const navigate = useNavigate();
  const [dataTopic, setDataTopic] = useState();
  const [dataQuestion, setDataQuestion] = useState();

  useEffect(() => {
    const fetchAPi = async () => {
      const res = await getTopic(params.id);
      setDataTopic(res);
    };
    fetchAPi();
  }, []);

  useEffect(() => {
    const fetchAPi = async () => {
      const res = await getQuestion(params.id);
      setDataQuestion(res);
    };
    fetchAPi();
  }, []);

  const handleSubmit = async(e) => {
    e.preventDefault();

    const selectedAnswer = [];
    for (var i = 0; i < e.target.elements.length; i++) {
      if (e.target.elements[i].checked) {
        const name = e.target.elements[i].name;
        const value = e.target.elements[i].value;

        selectedAnswer.push({
          questionId: parseInt(name),
          answer: parseInt(value),
        });
      }
    }
    const options = {
      userId: parseInt(getCookie("id")),
      topicId: parseInt(params.id),
      answers: selectedAnswer,
    };

    const res=await postAnswer(options);
    navigate(`/result/`+res.id);
    // console.log(res);
  };

  return (
    <>
      <h2>Bai quizz chu de: {dataTopic && <>{dataTopic.name}</>}</h2>
      <form onSubmit={handleSubmit}>
        {dataQuestion &&
          dataQuestion.map((item, index) => (
            <div key={item.id}>
              <div className="question">
                <b>
                  Cau {index + 1}: {item.question}
                </b>
              </div>
              {item.answers.map((itemQ, indexQ) => (
                <div key={indexQ}>
                  <input
                    type="radio"
                    name={item.id}
                    value={indexQ}
                    id={`quiz-${item.id}-${indexQ}`}
                  />
                  <label htmlFor={`quiz-${item.id}-${indexQ}`}>{itemQ}</label>
                </div>
              ))}
            </div>
          ))}
        <button type="submit">Nop bai</button>
      </form>
    </>
  );
}

export default Quiz;
