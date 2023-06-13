import { useState, useEffect } from "react";

import { Grid, Paper } from "@material-ui/core";

import { useGetDataQuery } from "../../services/appApi";
import { Article } from "../../types/dataType";
import { datetimeFormatter } from "../../utils";

import "./style.scss";

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
      <Grid container spacing={2}>
        {articles.map((article) => {
          const thumbnailId = article.related.thumbnail.default[0];
          const thumbnail = article.references[thumbnailId]?.link.media;
          const datetime = datetimeFormatter(article.date.updated);
          return (
            <Grid item md={6} className="article__box">
              <Paper className="article" key={article.id}>
                <h3>
                  <a href={article.link.canonical} target="_blank">
                    {article.headline.default}
                  </a>
                </h3>
                <p>
                  <b>Updated:</b> {datetime}
                </p>
                <Grid container spacing={1}>
                  <Grid item xs={4} md={3}>
                    <img
                      src={thumbnail}
                      alt={`Thumbnail image - ${article.headline.default}`}
                      className="article__thumbnail"
                    />
                  </Grid>
                  <Grid item xs={8} md={9}>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: article.standfirst.default,
                      }}
                      className="article__standfirst"
                    />
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}

export default List;
