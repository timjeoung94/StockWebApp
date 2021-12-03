import React from 'react';
import Plot from 'react-plotly.js';


class Chart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stockChartXValues: [],
            stockChartYValues: []
        }
    }

componentDidMount() {
    this.fetchQuote();
}

fetchQuote() {

    
    const pointerToThis = this;
    const API_KEY = '6E5Q5TAGOPFBUB9I';
    let Symbol = 'AAPL';
    let API_CALL =`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${Symbol}&apikey=${API_KEY}`;
    let stockChartXValuesFunction = [];
    let stockChartYValuesFunction = [];
    

    fetch(API_CALL)
        .then(
            function(response) {
                return response.json();
            }
        )
        .then(
             function(data) {
                console.log(data);

                for (var key in data['Time Series (Daily)']) {
                    stockChartXValuesFunction.push(key);
                    stockChartYValuesFunction.push(data['Time Series (Daily)']
                    [key]['4. close']);
                }

            pointerToThis.setState({
                stockChartXValues: stockChartXValuesFunction,
                stockChartYValues: stockChartYValuesFunction
            });
        }
    )
}

render() {
    return (
        <div>
            <h1> Closing Price</h1>
            <Plot
             data={[
            {
                x: this.state.stockChartXValues,
                y: this.state.stockChartYValues,
                type: 'scatter',
                mode: 'lines+markers',
                marker: {color: 'blue'},
             },
        ]}
        layout={{width: 720, height: 440, title: 'Apple inc. Closing Price Chart'}}
      />
        </div>
    )
}
}
export default Chart;
