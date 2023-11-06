const urlApi =  import.meta.env.VITE_API; 
const key = import.meta.env.VITE_API_TOKEN;


export function getMovies(url){

  return  fetch(urlApi + url, {
            headers:{
                 Authorization: 'Bearer ' + key,
                 'accept':'application/json'
            },
        }).then((result)=>result.json());

}