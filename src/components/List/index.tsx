import { useState, useEffect } from "react";
import { useGetDataQuery } from "../../services/appApi";
import { Article } from "../../types/dataType";

function List() {
  const [articles, setArticles] = useState<Article[]>([]);
  const { data, isLoading, isSuccess } = useGetDataQuery("");

  useEffect(() => {
    if (data && isSuccess) {
      setArticles(data.results);
    }
  }, [data, isSuccess]);

  return (
    <>
      {articles.map((article) => {
        return (
          <div key={article.id}>
            <h3>{article.headline.default}</h3>
          </div>
        );
      })}
    </>
  );
}

export default List;
