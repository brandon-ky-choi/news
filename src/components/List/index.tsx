import { useState, useEffect } from "react";
import { useGetDataQuery } from "../../services/appApi";
import { Article } from "../../types/dataType";
import Paper from "@material-ui/core/Paper";

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
          <Paper key={article.id}>
            <h3>
              <a href={article.link.canonical} target="_blank">
                {article.headline.default}
              </a>
            </h3>
            <p>
              <b>Updated:</b> {article.date.updated}
            </p>
            <div
              dangerouslySetInnerHTML={{ __html: article.standfirst.default }}
            />
            <img
              src={`https://content.api.news/v3/images/bin/${article.related.thumbnail.default[0]}`}
            />
          </Paper>
        );
      })}
    </>
  );
}

export default List;
