// variables
var searchButton = $(".searchButton");
var apiKey = "b8ecb570e32c2e5042581abd004b71bb";

// for loop for adding data to HTML page

for (var i = 0; i < localStorage.length; i++) {

    var city = localStorage.getItem(i);
    
    var cityName = $(".list-group").addClass("list-group-item");

    cityName.append("<li>" + city + "</li>");

}
// key count for local storage
var keyCount = 0;
// search button click event
searchButton.click(function(){

    var searchInput = $(".searchInput").val();

    //Variable for current weather working
    var urlCurrent = "https://api.openweathermap.org/data/2.5/weather?q=" + searchInput + "&Appid=" + apiKey + "&units=imperial";
    // Variable for 5 dy forecast working
    var urlFiveDay = "https://api.openweathermap.org/data/2.5/forecast?q=" + searchInput + "&Appid=" + apiKey + "&units=imperial";

    if (searchInput == ""){
        console.log(searchInput);
    }else{
        $.ajax({
            url: urlCurrent,
            method: "GET"
        }).then(function(response){
            //list group append an li w/ set text
            //console.log (response.name)
            
        })
    }


})