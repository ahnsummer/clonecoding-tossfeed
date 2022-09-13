import { useState } from "react";
import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { ScriptKind } from "typescript";

const List = () => {
  const params = useParams();

  const [dummy, setDummy] = useState<{ [key:string]: string[] }>({
    news: [
      "뉴스 카테고리 입니다.",
      "뉴스 제목 입니다.",
      "뉴스 내용 입니다.",
      "뉴스 날짜 입니다."
    ],
    library: [
      "라이브러리 카테고리 입니다.",
      "라이브러리 제목 입니다.",
      "라이브러리 내용 입니다.",
      "라이브러리 날짜 입니다.",
    ],
    life: [
      "라이프 카테고리 입니다.",
      "라이프 제목 입니다.",
      "라이프 내용 입니다.",
      "라이프 날짜 입니다.",
    ],
    video: [
      "비디오 카테고리 입니다.",
      "비디오 제목 입니다.",
      "비디오 내용 입니다.",
      "비디오 날짜 입니다.",
    ],
    interview: [
      "인터뷰 카테고리 입니다.",
      "인터뷰 제목 입니다.",
      "인터뷰 내용 입니다.",
      "인터뷰 날짜 입니다.",
    ],
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