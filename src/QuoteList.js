import Quote from "./Quote.js";
import { useEffect, useState } from "react";

function QuoteList() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        async function getQuotes(){
            const response = await fetch("https://dummyjson.com/quotes");
            const dataFromApi = await response.json();
            setData(dataFromApi.quotes);
            setLoading(false);
        }
        getQuotes();
        
    }, []);

    const quotesJSX = data.map((data, i) => {
        return <Quote key={i} author={data.author} quote={data.quote} />;
    });

    return (
        <>
            <h1>Quotes</h1>
            {loading ? <p>Loading...</p> : quotesJSX}
        </>
    );
  }
  
  export default QuoteList;
  