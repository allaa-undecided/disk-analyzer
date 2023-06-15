const { invoke } = window.__TAURI__.tauri;
const cont = document.getElementsByClassName("container")[0];
async function load(){
    var downloads = await invoke("view_and_sort", {targetDirectory: "/Users/adhamelkhouly/Downloads"});
    console.log("weewoo");
    console.log(downloads);
    var ul = document.createElement("ul");
    ul.className = "list-view";
    cont.appendChild(ul);
    var table= '<table align="center"><thead><tr><th>Index</th><th>Image</th><th>Size></thead><tbody>';
    var i = 1;
    for (var child of downloads){
        var childEl = document.getElementById("text");
        console.log(child);
        table+= '<tr><td>' + i + '</td><td>' + child.name + '</td><td>'+ child.size.toString() + " Bytes" +'</td><tr>';
        i = i +1;
        ul.appendChild(childEl);
    }
    table+='</tbody></table>';
    text.innerHTML=table;
};







document.addEventListener("DOMContentLoaded", load);
