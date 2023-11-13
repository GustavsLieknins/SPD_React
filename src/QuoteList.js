import Quote from "./Quote.js"
import { useEffect, useState } from "react";

function QuoteList() {
    const [datas, setDatas] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        async function getQuotes(){
            const response = await fetch("https://dummyjson.com/quotes");
            const data = await response.json();
            setDatas(data.quotes);
            setLoading(false);
        }
        getQuotes();
        
    }, []);

    const quotes = datas.map((data, i) => {
        return <Quote key={i} author={data.author} quote={data.quote} />;
    });

    return (
        <>
            {loading ? <p>Loading...</p> : quotes}
        </>
    );
  }
  
  export default QuoteList;
  