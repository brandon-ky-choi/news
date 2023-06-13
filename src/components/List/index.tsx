import { useState, useEffect } from "react";
import { useGetDataQuery } from "../../services/appApi";
import { Article, ArticleImage } from "../../types/dataType";
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
        const thumbnailId = article.related.thumbnail.default[0];
        const thumbnail = article.references[thumbnailId]?.link.media;
        const datetime = new Date(article.date.updated).toLocaleString(
          "en-AU",
          {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
            timeZoneName: "short",
          }
        );
        return (
          <Paper key={article.id}>
            <h3>
              <a href={article.link.canonical} target="_blank">
                {article.headline.default}
              </a>
            </h3>
            <p>
              <b>Updated:</b> {datetime}
            </p>
            <div
              dangerouslySetInnerHTML={{ __html: article.standfirst.default }}
            />
            <img
              src={thumbnail}
              alt={`Thumbnail image - ${article.headline.default}`}
            />
          </Paper>
        );
      })}
    </>
  );
}

export default List;
