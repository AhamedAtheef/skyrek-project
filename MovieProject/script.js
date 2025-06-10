let key="bc1d472"

function search(){
    let rlt=document.getElementById("rlt")
    let movie_name=rlt.value

    let url="http://www.omdbapi.com/?apikey="+key+"&t="+movie_name
    
    let httpRequest = new XMLHttpRequest();
    httpRequest.open("GET", url);
    httpRequest.responseType = "json";
    httpRequest.send();
    
    httpRequest.onload = function() {
        let movie = httpRequest.response;

        let titleTag = document.getElementById("title");
        titleTag.innerHTML = movie.Title;
        
        let yearTag = document.getElementById("year");
        yearTag.innerHTML = movie.Year;
        
        let posterTag = document.getElementById("poster");
        posterTag.src = movie.Poster;
        
        let plotTag = document.getElementById("plot");
        plotTag.innerHTML = movie.Plot;
        
        

    }
    

    console.log("Searching..")
}