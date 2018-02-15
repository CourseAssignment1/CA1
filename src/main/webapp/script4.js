/* Dynamic UI manipulation 
 */

//a) implements page where a user is requested by id
function getUser(){
    var id; //input
    var output; 
    var url = "https://jsonplaceholder.typicode.com/users/";
    
    //get value of input field
    id = document.getElementById("usernumber").value;
    
    //If input is not valid (NaN or not between 1 and 10)
   if(isNaN(id) || id < 1 || id > 10){
       output = "Input not valid, please try again.";
       document.getElementById("output").innerHTML = output;
   }else{
       url += id;
       fetch(url)
               .then(res => res.json())
               .then(function(data){
                   output = "Name: " + data.name + "<br>"
                   + "Phone: " + data.phone + "<br><br><b>Address</b><br>"
                   + "Street: " + data.address.street + "<br>"
                   + "City: " + data.address.city + "<br>"
                   + "Zip: " + data.address.zipcode + "<br>" 
                   + "Geo (lat,lng): " + data.address.geo.lat + ", " + data.address.geo.lng;
           
                   //output to page
                   document.getElementById("output").innerHTML = output;
                   
       }).catch(err => console.log("UPS!: " + err)); //error message in console if something goes wrong
   }
    
}

//b) Add new button to page, which fetch all persons/users. 
function getAll(){
    var url = "https://jsonplaceholder.typicode.com/users"; //url to get all users
    var output = "";
    
    fetch(url)
            .then(res => res.json())
            .then(function(data){
                //Start table
                output += "<table><tr><th>Name</th><th>Phone</th></tr>";
                
                //Get the Data array, and make a new Array containing some table-html and
                //name and phone for each user in the data array.
                var asTable = data.map(function(user){
                    return "<tr><td>" + user.name + "</td><td>" + user.phone + "</td></tr>";
                });
                
                //Turn the asTable array into a string, which can be added to the output
                output += asTable.join(" ");
                
                //end table
                output += "</table>";
                
                //output to page
                document.getElementById("output").innerHTML = output;
        
    }).catch(err => console.log("UPS!: " + err)); //error message in console if something goes wrong
}
