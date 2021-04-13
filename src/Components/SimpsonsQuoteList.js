import React from "react"
import QuoteCard from "./QuoteCard";


function SimpsonsQuoteList(){
    const [quotes, setQuotes ]= React.useState([]);

    function fetchQuotes(quoteCount){
        fetch(`https://thesimpsonsquoteapi.glitch.me/quotes?count=${quoteCount}`)
        .then((response)=> response.json())
        .then((data)=> setQuotes(data))
        .catch((error)=> console.log(error));
    }

    return(
        <div style={{ border: "2px solid blue" }}>
            <h1>Quotes List </h1>
            <button  onClick={()=> fetchQuotes(4)}>Fetch Quotes </button>
            {quotes.map(function(item, index){
                return <QuoteCard key={index} {...item}/>
            })}
        </div>
    )


}



export default SimpsonsQuoteList