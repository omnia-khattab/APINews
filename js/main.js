let links=document.getElementsByClassName("nav-link");
let myData;

getData("general");

function getData(cateogry){ 
    myData=[];
    let http=new XMLHttpRequest();

http.open("GET","https://newsapi.org/v2/top-headlines?country=eg&category="+cateogry+"&apiKey=65ef9f2f7d7c4886b723a70cb36873af");
http.send();
http.addEventListener("readystatechange",function(){
    if(http.readyState==4 && http.status==200){

        myData=JSON.parse(http.response).articles;
        displayData();
    }
});
}


for(let i=0;i<links.length;i++){

    links[i].addEventListener("click",function(eventInfo){
        getData(eventInfo.target.text);
    });
    }

function displayData(){
    let dataContainer=``;
    for(let i=0;i<myData.length;i++){
        dataContainer +=`<div id="dataCont" class='col-md-4 mb-4'>
            <div class="ml-3">
                <h5 class="font-weight-bold">`+myData[i].title+`</h5>
                <img src=`+myData[i].urlToImage+`>
                <p>`+myData[i].description+`</p>
                <a class='btn btn-dark mb-2 'target="_blank" href="`+myData[i].url+`">Source</a>
            </div>
        </div>`
    }
    document.getElementById("resultRow").innerHTML=dataContainer;
}