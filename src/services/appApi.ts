import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { DataResponse } from "../types/dataType";

export const appApi = createApi({
  reducerPath: "appApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/data/" }),
  endpoints: (builder) => ({
    getData: builder.query<DataResponse, "">({
      query: () => `capi.json`,
    }),
  }),
});

export const { useGetDataQuery } = appApi;
