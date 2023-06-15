// const { invoke } = window.__TAURI__.tauri;

// var paths = ["/Users/adhamelkhouly/Desktop", "/Users/adhamelkhouly/Downloads", "/Users/adhamelkhouly/Documents", "/Users/adhamelkhouly/Pictures"]
// var names = ["Desktop", "Downloads", "Documents", "Pictures"]
// async function getData(){
//     let desktop = await invoke("for_chart", {fileName: paths[0]});
//     let downloads = await invoke("for_chart", {fileName: paths[1]});
//     let documents = await invoke("for_chart", {fileName: paths[2]});
//    // let pictures = await invoke("for_chart", {fileName: paths[3]});
//     let data = [{x: names[0], value: desktop.size}, {x: names[1], value: downloads.size}, {x: names[2], value: documents.size}/*,{x: names[3], value: pictures.size*/];
//     return data;
// }

// async function createChart  (){
//     let data = await getData();
//     // create the chart
//     var chart = anychart.pie();
  
//     // set the chart title
//     chart.title("Percentage of Each File Type");
  
//     // add the data
//     chart.data(data);
  
//     // display the chart in the container
//     chart.container('container');
//     chart.draw();
// }
// anychart.onDocumentReady(createChart);
anychart.onDocumentReady(function() {

    // set the data
    var data = [
        {x: "Desktop", value: 4.73},
        {x: "Downloads", value: 4.63},
        {x: "Documents", value: 2.2},
        {x: "Pictures", value: 0.55001},
        //{x: "Applications", value: 540013},
        // {x: "Some Other Race", value: 19107368},
        // {x: "Two or More Races", value: 9009073}
    ];
  
    // create the chart
    var chart = anychart.pie();
  
    // set the chart title
    chart.title("Memory Percentage of Files");
  
    // add the data
    chart.data(data);
  
    // display the chart in the container
    chart.container('container');
    chart.draw();
  
  });