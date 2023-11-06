
  const urlApi =  'https://api.themoviedb.org/3'; 

export function getMovies(url){

  return  fetch(urlApi + url, {
            headers:{
                 Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMTA3N2QxNzM3MTUyZGNkODU5YzI4ZTBmYzYzMDA1NiIsInN1YiI6IjY1M2RhZWQwNTE5YmJiMDBlMThjYWEwZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sdfGUXehgTWuhJ2MZlwOWmU66j8nkJSurAZ_nUsLVWo',
                 'accept':'application/json'
            },
        }).then((result)=>result.json());

}