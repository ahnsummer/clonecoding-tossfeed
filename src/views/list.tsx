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
  }, []); // useEffect에서 설정한 함수가 컴포넌트가 화면에 처음 렌더링 될 때만 실행되고 업데이트 할 경우에는 실행할 필요가 없는경우, 함수의 두번째 파라미터로 비어있는 배열을 넣어준다.

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