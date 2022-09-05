import { useState } from "react";
import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { ScriptKind } from "typescript";

const List = () => {
  const params = useParams();

  const [dummy, setDummy] = useState<{ [key:string]: string[]}>({
    news: [
      "뉴스",
      "더미데이터",
      "입니다"
    ],
    life: [
      "라이프",
      "더미데이터"
    ]
  })

  useEffect(() => {
    const values = Object.values(dummy);
    const all = values.reduce((prev, curr) => {
      prev = [...prev, ...curr];
      return prev;
    }, []);
    console.log(all);
    setDummy({
      ...dummy,
      all
    })
  }, []);

  useEffect(() => {
    console.log(params);
  }, [params]);

  return (
    <ul>
      {
        dummy[params.category || "all"]?.map((d, i) => (
          <li key={i}>{d}</li>
        ))
      }
    </ul>
  )
}
export default List;