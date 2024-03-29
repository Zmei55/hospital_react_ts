import { api } from "app/redux";
import { IService } from "entities/Service";

export const serviceByIdApi = api.injectEndpoints({
  endpoints: builder => ({
    fetchServiceById: builder.query<IService, string | number>({
      query: _id => ({
        url: `/api/services/${_id}`,
        method: "GET",
      }),
      providesTags: ["Services"],
      transformResponse: (response: { data: IService }) => response.data,
    }),
  }),
});

export const { useLazyFetchServiceByIdQuery } = serviceByIdApi;
