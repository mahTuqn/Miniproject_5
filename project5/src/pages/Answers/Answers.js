import { useEffect, useState } from "react";
import { getUserAnswer } from "../../services/answerServices";
import { getTopic, topicRequest } from "../../services/topicServices";
import { NavLink } from "react-router-dom";

function Answers() {
  const [dataAnswer, setDataAnswer] = useState();

  useEffect(() => {
    const fetchAPi = async () => {
      const answers = await getUserAnswer();
      const topic = await topicRequest();
      // console.log(topic);
      let res = [];
      for (var i = 0; i < answers.length; i++) {
        res.push({
          ...topic.find((item) => item.id == answers[i].topicId),
          ...answers[i],
        });
      }
      res.reverse();
      setDataAnswer(res);
    };
    fetchAPi();
  }, []);
  // console.log(dataAnswer);

  return (
    <>
      <h2>Danh sach bai da luyen tap</h2>
      {dataAnswer && (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Ten chu de</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {dataAnswer.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>
                  <NavLink to={"/result/" + item.id}>Xem chi tiet</NavLink>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}

export default Answers;
