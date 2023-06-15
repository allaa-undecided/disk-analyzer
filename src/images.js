const { invoke } = window.__TAURI__.tauri;
const cont = document.getElementsByClassName("container")[0];
async function load(){
    var images = await invoke("images", {targetDirectory: "/Users/adhamelkhouly/Desktop"});
    console.log("weewoo");
    console.log(images);
    var ul = document.createElement("ul");
    //ul.className = "list-view";
    cont.appendChild(ul);
    var table= '<table align="center"><thead><tr><th>Index</th><th>Image</th><th>Size></thead><tbody>';
    var i = 1;
    for (var child of images){
        var childEl = document.getElementById("text");
        console.log(child);
        table+= '<tr><td>' + i + '</td><td>' + child.name + '</td><td>'+ child.size.toString() + " Bytes" +'</td><tr>';
        i = i +1;
        ul.appendChild(childEl);
    }

    var images = await invoke("images", {targetDirectory: "/Users/adhamelkhouly/Downloads"});
    var i = 1;
    for (var child of images){
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

