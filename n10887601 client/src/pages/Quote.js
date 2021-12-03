import React, {useState, useEffect} from "react";

import { AgGridReact} from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

import { Button, Badge } from "reactstrap";

// Apple Function

export default function Apple () {
    const [rowData, setRowData] = useState([]);

    const columns = [
        { headerName: "Date", field: "date", sortable: true,},
        { headerName: "Open", field: "open", sortable: true, filter: "agNumberColumnFilter"},
        { headerName: "High", field: "high", sortable: true, filter: "agNumberColumnFilter"},
        { headerName: "Low", field: "low", sortable: true, filter: "agNumberColumnFilter"}, 
        { headerName: "Close", field: "close", sortable: true, filter: "agNumberColumnFilter"},
        { headerName: "Volume", field: "volume", sortable: true, filter: "agNumberColumnFilter"},
 
    ];

    useEffect(() => {
        fetch("https://financialmodelingprep.com/api/v3/historical-price-full/AAPL?apikey=22b90c2994b618e19ed83ab207a32d5b")
        .then(response => response.json())
        .then(quotesArray => quotesArray.historical.map(quote => {
            return {
                date: quote.date,
                open: quote.open,
                high: quote.high,
                low: quote.low,
                close: quote.close,
                volume: quote.volume,
            }
        }))
        .then(mappedArray => mappedArray.filter(quote => {
            const limitDate = Date.parse("2021-01-01");
            const currentDate = Date.parse(quote.date);

            return currentDate > limitDate;
        }))
        .then(quotes => setRowData(quotes));
    }, [])


 return (
    <div className="container">
        <h1> Apple inc. Stocks</h1>
        <p>
            <Badge color="success">{rowData.length}</Badge> AAPL
        </p>
    <div 
        className="ag-theme-balham"
        style={{
            height: "300px",
            width: "1000px"
    }}
    >
    <AgGridReact
        columnDefs={columns}
        rowData={rowData}
        pagination={true}
        paginationPageSize={10}
        />
    </div>
    <Button
    color="info"
    size="sm"
    className="mt-3"
    href="https://financialmodelingprep.com/api/v3/historical-price-full/AAPL?apikey=22b90c2994b618e19ed83ab207a32d5b"
    target="_blank"
    >
    Go to Open Library API    
    </Button>
    </div>
    );
}



//Amazon function

// function Amazon () {
//     const [amznData, amznRowData] = useState({});

//     const columns = [
//         { headerName: "Date", field: "date", sortable: true,},
//         { headerName: "Open", field: "open", sortable: true, filter: "agNumberColumnFilter"},
//         { headerName: "High", field: "high", sortable: true, filter: "agNumberColumnFilter"},
//         { headerName: "Low", field: "low", sortable: true, filter: "agNumberColumnFilter"}, 
//         { headerName: "Close", field: "close", sortable: true, filter: "agNumberColumnFilter"},
//         { headerName: "Volume", field: "volume", sortable: true, filter: "agNumberColumnFilter"},
 
//     ];
//     useEffect(() => {
//         fetch("https://financialmodelingprep.com/api/v3/historical-price-full/AMZN?apikey=22b90c2994b618e19ed83ab207a32d5b")
//         .then(response => response.json())
//         .then(quotesArray => quotesArray.historical.map(quote => {
//             return {
//                 date: quote.date,
//                 open: quote.open,
//                 high: quote.high,
//                 low: quote.low,
//                 close: quote.close,
//                 volume: quote.volume,
//             }
//         }))
//         .then(mappedArray => mappedArray.filter(quote => {
//             const limitDate = Date.parse("2021-01-01");
//             const currentDate = Date.parse(quote.date);

//             return currentDate > limitDate;
//         }))
//         .then(quotes => amznRowData(quotes));
//     }, []) 

//  return (
//     <div className="container">
//         <h1> Amazon Stocks</h1>
//         <p>
//             <Badge color="success">{amznData.length}</Badge> AMZN
//         </p>
//     <div 
//         className="ag-theme-balham"
//         style={{
//             height: "300px",
//             width: "1000px"
//     }}
//     >
//     <AgGridReact
//         columnDefs={columns}
//         amznData={amznData}
//         pagination={true}
//         paginationPageSize={10}
//         />
//     </div>
//     <Button
//     color="info"
//     size="sm"
//     className="mt-3"
//     href="https://financialmodelingprep.com/api/v3/historical-price-full/AMZN?apikey=22b90c2994b618e19ed83ab207a32d5b"
//     target="_blank"
//     >
//     Go to Open Library API    
//     </Button>
//     </div>
//     );
// }