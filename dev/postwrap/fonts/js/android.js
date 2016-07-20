CURRENT_VERSION_CODE = 2005

window.onload = function() {
    stringQuery = getUrlParams();
    var versionCode = stringQuery["versionCode"];
    var versionName = stringQuery["versionName"];

    if ((typeof versionCode !== "undefined") && (versionCode !== null)){
        if(parseInt(versionCode) < CURRENT_VERSION_CODE){
            // The user has an older version of the app
            var upgradeElement = document.getElementById('upgrade');
            upgradeElement.style.display = 'block';
            upgradeElement.style.visibility = 'visible';
        }
    }
};


function getUrlParams() {
  // This function is anonymous, is executed immediately and
  // the return value is assigned to QueryString!
  var query_string = {};
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i=0;i<vars.length;i++) {
    var pair = vars[i].split("=");
        // If first entry with this name
    if (typeof query_string[pair[0]] === "undefined") {
      query_string[pair[0]] = decodeURIComponent(pair[1]);
        // If second entry with this name
    } else if (typeof query_string[pair[0]] === "string") {
      var arr = [ query_string[pair[0]],decodeURIComponent(pair[1]) ];
      query_string[pair[0]] = arr;
        // If third or later entry with this name
    } else {
      query_string[pair[0]].push(decodeURIComponent(pair[1]));
    }
  }
  return query_string;
};

function downloadDisplayFonts() {
    var fontUrlArray = new Array("https://fonts.google.com/download?family=Galada|Poiret%20One|Bangers|Monoton|Finger%20Paint|Love%20Ya%20Like%20A%20Sister|Caesar%20Dressing|Fredericka%20the%20Great");
    Android.download(fontUrlArray, "Display Fonts","fonts.zip");
}

function downloadHandwritingFonts() {
    var fontUrlArray = new Array("https://fonts.google.com/download?family=Pacifico|Amatic%20SC|Dancing%20Script|Courgette|Satisfy|Sacramento|Merienda%20One|Clicker%20Script");
    Android.download(fontUrlArray, "Handwriting Fonts", "fonts.zip");
}

function downloadLanguageFonts() {
    var fontUrlArray = [
        "https://fonts.google.com/download?family=Catamaran",
        "https://fonts.google.com/download?family=Hind%20Madurai",
        "https://fonts.google.com/download?family=Arima%20Madurai",
        "https://fonts.google.com/download?family=El%20Messiri",
        "https://fonts.google.com/download?family=Mirza",
        "https://fonts.google.com/download?family=Lemonada",
        "https://fonts.google.com/download?family=Cairo",
        "https://fonts.google.com/download?family=Changa",
        "https://fonts.google.com/download?family=Rakkas",
        "https://fonts.google.com/download?family=Lalezar",
        "https://fonts.google.com/download?family=Katibeh"
    ];
    Android.download(fontUrlArray, "Language Fonts", "fonts.zip");
}

function downloadTTFFont(){
    var fontUrlArray = [
        "http://www5.miele.nl/apps/vg/nl/miele/mielea02.nsf/0e87ea0c369c2704c12568ac005c1831/07583f73269e053ac1257274003344e0/$FILE/arial.ttf"
    ];
    Android.download(fontUrlArray, "Language Fonts", "arial.ttf");
}