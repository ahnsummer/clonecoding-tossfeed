import { useState } from "react";
import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { ScriptKind } from "typescript";

interface IArticle {
  category: string;
  title: string;
  content: string;
  date: string;
}

// class Article {
//   category: string;
//   title: string;
//   content: string;
//   date: string;

//   constructor(a, b, c, d) {
//     this.category = a;
//     this.title = b;
//     this.content = c;
//     this.date = d;
//   }
// }

const List = () => {
  const params = useParams();

  const [dummy, setDummy] = useState<{ [key: string]: Array<IArticle> }>({
    news: [
      {
        category: "뉴스 카테고리 입니다.",
        title: "뉴스 제목 입니다.",
        content: "뉴스 내용 입니다.",
        date: "뉴스 날짜 입니다."
      },
    ],
    library: [
      {
        category: "라이브러리 카테고리 입니다.",
        title: "라이브러리 제목 입니다.",
        content: "라이브러리 내용 입니다.",
        date: "라이브러리 날짜 입니다."
      },
    ],
    life: [
      {
        category: "라이프 카테고리 입니다.",
        title: "라이프 제목 입니다.",
        content: "라이프 내용 입니다.",
        date: "라이프 날짜 입니다."
      },
    ],
    video: [
      {
        category: "비디오 카테고리 입니다.",
        title: "비디오 제목 입니다.",
        content: "비디오 내용 입니다.",
        date: "비디오 날짜 입니다."
      },
    ],
    interview: [
      {
        category: "인터뷰 카테고리 입니다.",
        title: "인터뷰 제목 입니다.",
        content: "인터뷰 내용 입니다.",
        date: "인터뷰 날짜 입니다."
      },
    ],
  })

  useEffect(() => {
    const values = Object.values(dummy);
    const all = values.reduce((prev, curr) => {
      prev = [...prev, ...curr];
      return prev;
    }, []);
    // console.log(all);
    setDummy({
      ...dummy,
      all
    })
  }, []); // useEffect에서 설정한 함수가 컴포넌트가 화면에 처음 렌더링 될 때만 실행되고 업데이트 할 경우에는 실행할 필요가 없는경우, 함수의 두번째 파라미터로 비어있는 배열을 넣어준다.

  useEffect(() => {
    // console.log(params);
  }, [params]);
  
  console.log(dummy.news[0]);

  return (
    <div className="w-full">
      <ul className="container">
        {
          dummy[params.category || "all"]?.map((d, i) => (
            <>
              <li className="" key={i}>{d.category}</li>
              <li key={i}>{d.title}</li>
              <li key={i}>{d.content}</li>
              <li key={i}>{d.date}</li>
            </>
          ))
        }
      </ul>
    </div>
    
  )
}
export default List;