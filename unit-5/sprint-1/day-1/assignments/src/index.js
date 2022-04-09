
import "./index.css";
import logo from "./image/download.jpg"

const root = document.querySelector("#root");

const imagebox = document.createElement("div");
imagebox.setAttribute("class","imagebox");

const img = document.createElement("img");
img.setAttribute("src",logo);
img.setAttribute("class","LogoImage");

const form = document.createElement("form");
form.setAttribute("class","form");

const textcontent = document.createElement("input");
textcontent.setAttribute("class","textcontent");
textcontent.placeholder = "Enter Some Note....."

const table = document.createElement("table");
table.setAttribute("class","table");
const thead = document.createElement("thead");
thead.setAttribute("class","thead");
const tr = document.createElement("tr");
tr.setAttribute("class","tr");
const th1 = document.createElement("th");
th1.setAttribute("class","th1");
th1.innerHTML = "simple note";
const th2 = document.createElement("th");
th2.setAttribute("class","th2");
th2.innerHTML = "Delete"
const tbody = document.createElement("tbody");
tbody.setAttribute("class","tbody");

const submit = document.createElement("input");
submit.setAttribute("type","submit");
submit.setAttribute("class","submit");
submit.value = "SUBMIT"

root.append(imagebox,form,table);
imagebox.append(img);
form.append(textcontent,submit);
table.append(thead,tbody);
thead.append(tr)
tr.append(th1,th2);

form.addEventListener("submit",todoList);
var object = JSON.parse(localStorage.getItem("TodoInput")) || [];

window.addEventListener("load",function()
{
    Table(object);
})

function todoList(event)
{
    event.preventDefault();

    var item = textcontent.value;
    var task = 
    {
        TodoInput : item
    }
    object.push(task);
    localStorage.setItem("TodoInput",JSON.stringify(object))

    Table(object);
}

function Table(object)
{
    console.log(object);

    tbody.innerHTML = "";
    object.map(function(element,index)
    {
        var tr = document.createElement("tr");
        var td1 = document.createElement("td");
        td1.setAttribute("class","td1");
        td1.textContent = element.TodoInput;
        var td3 = document.createElement("button");
        td3.setAttribute("class","td2");
        td3.textContent = "Delete";
        td3.addEventListener("click",function()
        {
            deleteItem(index);
        })
        tr.append(td1,td3);
        tbody.append(tr);
    });

    function deleteItem(index)
    {
        object.splice(index,1);
        console.log(object);
        localStorage.setItem("TodoInput",JSON.stringify(object));
        Table(object);
    }
}