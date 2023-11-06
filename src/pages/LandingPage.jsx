import { useSearchParams } from "react-router-dom";
import { MoviesGrid } from "../components/MoviesGrid";
import { Search } from "../components/Search";

export function LandingPage()
{
    const [params] = useSearchParams();
    const search = params.get("search")
    return( 
        <>
            <Search/>
            <MoviesGrid key = {search} search = {search}/>
      </>
        
    )
}