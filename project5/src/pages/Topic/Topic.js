import { useEffect, useState } from "react";
import { topicRequest } from "../../services/topicServices";
import { NavLink } from "react-router-dom";

function Topic() {
  const [topic, setTopic] = useState([]);
  useEffect(() => {
    const getApi = async () => {
      const res = await topicRequest();
      setTopic(res);
    };
    getApi();
  }, []);

  return (
    <>
      {topic.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Ten chu de</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {topic.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>
                  <NavLink to={"/quiz/"+item.id}>Lam bai</NavLink>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}

export default Topic;
