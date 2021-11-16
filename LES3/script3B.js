window.onload = function () {
    //let searchValue = document.getElementById('form').value;
    searchInput();
}

function searchInput() {
    fetch('http://www.omdbapi.com/?t=parasite&y=2019&apikey=16d9c436&')
        .then(result => result.json())
        .then(data => {
            console.log(data);
            showMovie(data)
        })


};

function showMovie(data) {


    let movie = `
        <div class="row no-gutters">
            <div class="col-md-4">
                <img src="${data.Poster}" class="card-img" alt="...">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">${data.Title}</h5>
                    <p class = "card-text"> Year: ${data.Year}, </br> Director: ${data.Director} </br> Runtime: ${data.Runtime}</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    <button id= "addHours" class="btn btn-primary" > + </button>
                </div>
            </div>
        </div>`

    document.getElementById("film-card").innerHTML = movie;
    addRuntime(data.Runtime)
}

function addRuntime(RT) {
    let movieRT = RT;
    document.getElementById('addHours').addEventListener('click', function () {
            console.log(movieRT)
            let totalruntime = 0;
            totalruntime += movieRT


            let runtimeHTML = `Total watch hours: ${totalruntime}`
            document.getElementById("counter").innerHTML = runtimeHTML;
        }



    )
}