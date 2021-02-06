//var globalDataset = "bla";
var globalDataset;

$.getJSON("https://data.nasa.gov/resource/y77d-th95.json", function(myDataset) {
  //console.log(myDataset);
  globalDataset = myDataset;
});

function showmeteorite() {
  let startdate = new Date(document.getElementById("startdate").value);
  let enddate = new Date(document.getElementById("enddate").value);

  if (startdate == "" || enddate == "") {
    alert("Empty date");
  } else {
    /*
    console.log(startdate + " " + enddate);
    console.log(this.globalDataset);
    */
    let results = 0;
    for (const meteorit of this.globalDataset) {
      let meteoritdate = new Date(meteorit.year);
      if (
        startdate.getTime() <= meteoritdate.getTime() &&
        meteoritdate.getTime() <= enddate.getTime()
      ) {
        console.log(meteorit);
        /* add to div "data" */
        let meteordiv = document.createElement("div");
        //meteordiv.append(document.createTextNode(meteorit.name))
        meteordiv.setAttribute("class", "meteorit");
        meteordiv.innerHTML = "<h5>" + meteorit.name + "</h5";
        meteordiv.innerHTML += "<ul>"
        meteordiv.innerHTML += "<li>Mass : " + meteorit.mass + "</li>"
        meteordiv.innerHTML += "<li>Fell date : " + meteorit.year + "</li>"
        meteordiv.innerHTML += "</ul>"        
        let datadiv = document.getElementById("data");
        datadiv.appendChild(meteordiv);
        results = results + 1;
      }
    }
    alert(results + " of " + this.globalDataset.length);
    
  }
}
