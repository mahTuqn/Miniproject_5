import { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { getIdAnswer } from "../../services/answerServices";
import { getQuestion } from "../../services/questionServices";
import "./Result.css";
function Result() {
  const params = useParams();
  const navigate = useNavigate();
  const [dataResult, setDataResult] = useState([]);
  const [topicId, setTopicId] = useState();
  useEffect(() => {
    const getAnswer = async () => {
      const resAnswers = await getIdAnswer(params.id);
      const resQuestions = await getQuestion(resAnswers.topicId);
      setTopicId(resAnswers.topicId);
      //   console.log(resAnswers.answers);
      //   console.log(resQuestions);

      const lastResult = [];

      for (var i = 0; i < resQuestions.length; i++) {
        lastResult.push({
          ...resQuestions[i],
          ...resAnswers.answers.find(
            (item) => item.questionId == resQuestions[i].id,
          ),
        });
      }
      setDataResult(lastResult);
    };
    getAnswer();
  }, []);

  console.log(dataResult);

  const handleSubmit = (e) => {
    console.log(topicId);
    e.preventDefault();
    navigate(`/quiz/${topicId}`);
  };

  return (
    <>
      <h2> Ket qua: </h2>
      <form onSubmit={handleSubmit}>
        {dataResult &&
          dataResult.map((item, index) => (
            <div key={item.id}>
              <div className="result">
                <b>
                  Cau {index + 1}: {item.question}
                </b>
                {item.answer == item.correctAnswer ? (
                  <span className="correct">Dung</span>
                ) : (
                  <span className="inCorrect">Sai</span>
                )}
              </div>
              {item.answers.map((itemQ, indexQ) => {
                let isChecked = false;
                let className = "";
                if (item.answer == indexQ) {
                  isChecked = true;
                  if (item.answer == item.correctAnswer) {
                    className = "correct";
                  } else {
                    className = "inCorrect";
                  }
                }

                return (
                  <>
                    <div key={indexQ}>
                      <input
                        type="radio"
                        name={item.id}
                        value={indexQ}
                        checked={isChecked}
                        disabled
                      />

                      <label className={className}>{itemQ}</label>
                    </div>
                  </>
                );
              })}
            </div>
          ))}
        <button type="submit">Lam lai quiz</button>
      </form>
    </>
  );
}

export default Result;
