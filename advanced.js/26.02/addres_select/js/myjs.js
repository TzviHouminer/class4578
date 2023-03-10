const cityUrl = "https://data.gov.il/api/3/action/datastore_search?resource_id=5c78e9fa-c2e2-4771-93ff-7f400a12f7ba&limit=1300"
var cities = [];
var cityData = fetch(cityUrl)
.then((response) => response.json())
.then((data) => {
    cities = data.result.records;
    citiesList = "<option disabled selected hidden>Choose city</option>";
    cities.map((cityObj) => citiesList += `<option>${cityObj['שם_ישוב']}</option>`);
    document.getElementById("cityListUser").innerHTML = citiesList;
});

var streets = [];
const chooseStreet = (city) => {
    var chosenCity = document.getElementById("cityListUser").value;
    var streetUrl = "https://data.gov.il/api/3/action/datastore_search?resource_id=9ad3862c-8391-4b2f-84a4-2d4c68625f4b&limit=10000&q=" + chosenCity;
    var streetData = fetch(streetUrl)
    .then((response) => response.json())
    .then((data) => {
        streets = data.result.records;
        console.log(streets);
        streetsList = "<option disabled selected hidden>Choose street</option>";
        streets.map((streetObj) => streetsList += `<option>${streetObj['שם_רחוב']}</option>`);
        document.getElementById("streetListUser").innerHTML = streetsList;
    });
};

const showChosen = () => {
    var chosen = document.getElementById("streetListUser").value;
    console.log(chosen);
};