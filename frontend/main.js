window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
})

const functionAPIUrl = "https://getresumecounterfloohp.azurewebsites.net/api/GetResumeCounter?code=0k6rqjY2RgvqYJ20HV7ACOOP5zmCqvwn3J5s25_2CNXeAzFuZj5vsQ=="
const localfunctionAPI = 'http://localhost:7071/api/GetResumeCounter';

const getVisitCount = () => {
    let count = 30;
    fetch(functionAPIUrl).then(response => {
        return response.json()
    }).then(response =>{
        console.log("Website called function API.")
        count = response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    })
    return count;
}