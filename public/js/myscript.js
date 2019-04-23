function showFigure() {
    $("#myFigure").show();
    var trace1 = {
        x: [0, 5, 10],
        y: [0, 1, 0],
        type: 'scatter',
        name: "System Range"
    };

    var trace2 = {
        x: [0, 3, 10],
        y: [0, 1, 0],
        type: 'scatter',
        name: "Design Range"
    };
    var trace3 = {
        x: [7, 8.5, 10],
        y: [0, 0.55, 0],
        type: 'scatter',
        fill: 'tozeroy',
        name: "Common Area"
    };

    var data = [trace1, trace2,trace3];

    Plotly.newPlot('myDiv', data);
}