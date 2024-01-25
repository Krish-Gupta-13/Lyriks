// import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

// // const options = {
// //     method: 'GET',
// //     headers: {
// //       'X-RapidAPI-Key': 'd47d936ae4mshbd0530fbe1b5b51p1540a0jsn30a3e2667240',
// //       'X-RapidAPI-Host': 'shazam-api7.p.rapidapi.com'
// //     }
// //   };
  
// //   fetch('https://shazam-api7.p.rapidapi.com/charts/get-top-songs-in-world', options)
// //     .then(response => response.json())
// //     .then(response => console.log(response))
// //     .catch(err => console.error(err));

// export const shazamCoreApi = createApi({
//     reducerPath: 'shazamCoreApi',
//     baseQuery: fetchBaseQuery({
//         baseUrl: 'https://shazam-core.p.rapidapi.com/',
//         prepareHeaders: (headers)=>{
//             headers.set('X-RapidAPI-Key', 'd47d936ae4mshbd0530fbe1b5b51p1540a0jsn30a3e2667240');
//             return headers;
//         },
//     }),
//     endpoints: (builder)=>({
//         getTopCharts: builder.query({query: ()=> 'v1/charts/world'}),
//     }),
// });

// export const{
//     useGetTopChartsQuery,
// } = shazamCoreApi;




import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam.p.rapidapi.com',
        prepareHeaders: (headers)=>{
            headers.set('X-RapidAPI-Key', 'd47d936ae4mshbd0530fbe1b5b51p1540a0jsn30a3e2667240');
            return headers;
        },
    }),
    endpoints: (builder)=>({
        getTopCharts: builder.query({query: ()=> '/charts/track'}),
        getSongDetails: builder.query({query: ({songid}) => `/songs/get-details?key=${songid}`}),
        // getSongByCountry: builder.query({query: (countrycode) => `/charts/country?country_code=${countrycode}`}),
        getSongByCountry: builder.query({query: (countrycode) => '/songs/list-artist-top-tracks'}),
        // getSongRelated: builder.query({query: ({songid})=> `/songs/list-artist-top-tracks?id=${songid}` })
        getSongRelated: builder.query({query: ({songid})=> `/songs/list-recommendations?key=${songid}` })
    }),
});

export const{
    useGetTopChartsQuery,
    useGetSongDetailsQuery,
    useGetSongByCountryQuery,
    useGetSongRelatedQuery,
} = shazamCoreApi;