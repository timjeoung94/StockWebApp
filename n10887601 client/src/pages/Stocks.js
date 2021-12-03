import React, {useState, useEffect} from "react";

import { AgGridReact} from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

import { Button, Badge } from "reactstrap";


export default function Stocks () {
    const [rowData, setRowData] = useState([]);

    const columns = [
            { headerName: "Symbol", field: "symbol", sortable: true },
            { headerName: "Name", field: "name", sortable: true},
            { headerName: "Sector", field: "sector", sortable: true}
     ];
     
    useEffect(() => {
        fetch("https://financialmodelingprep.com/api/v3/nasdaq_constituent?apikey=22b90c2994b618e19ed83ab207a32d5b")
        .then(response => response.json())
        .then(stocksArray => stocksArray.map(stock => {
            return {
                symbol: stock.symbol,
                name: stock.name,
                sector: stock.sector,
            }
        }))
        .then(stocks => setRowData(stocks));
    }, [])

    return (
    <div className="container">
        <h1> NASDAQ Stocks</h1>
        <p>
            <Badge color="success">{rowData.length}</Badge> NASDAQ Companies
        </p>
    <div 
        className="ag-theme-balham"
        style={{
            height: "600px",
            width: "600px"
    }}
    >
    <AgGridReact
        columnDefs={columns}
        rowData={rowData}
        pagination={true}
        paginationPageSize={50}
        />
    </div>
    <Button
    color="info"
    size="sm"
    className="mt-3"
    href="https://financialmodelingprep.com/api/v3/nasdaq_constituent?apikey=22b90c2994b618e19ed83ab207a32d5b"
    target="_blank"
    >
    Go to Open Library API    
    </Button>
    </div>
    );
}
