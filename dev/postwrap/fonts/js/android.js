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
    var fontUrlArray = new Array("https://fonts.google.com/download?family=Pacifico|Amatic%20SC|Dancing%20Script|Courgette|Satisfy|Sacramento|Merienda%20One|Clicker%20Script|Indie%20Flower");
    Android.download(fontUrlArray, "Handwriting Fonts", "fonts.zip");
}

function downloadHandwritingIFonts() {
    var fontUrlArray = new Array("https://fonts.google.com/download?family=Molle|Yellowtail|Cookie|Great%20Vibes|Tangerine|Pinyon%20Script|Parisienne|Grand%20Hotel|Niconne|Rochester");
    Android.download(fontUrlArray, "Handwriting I Fonts", "fonts.zip");
}

function downloadHandwritingIIFonts() {
    var fontUrlArray = new Array("https://fonts.google.com/download?family=Gloria%20Hallelujah|Shadows%20Into%20Light|Handlee|Damion|Shadows%20Into%20Light%20Two|Homemade%20Apple|Rancho|Reenie%20Beanie|Allura");
    Android.download(fontUrlArray, "Handwriting II Fonts", "fonts.zip");
}

function downloadArabicFonts() {
    var fontUrlArray = new Array("https://fonts.google.com/download?family=Lateef|Jomhuria|Lalezar|Rakkas|Scheherazade|Katibeh|Harmattan");
    Android.download(fontUrlArray, "Arabic Fonts", "fonts.zip");
}

function downloadHindiFonts() {
    var fontUrlArray = new Array("https://fonts.google.com/download?family=Kurale|Rozha%20One|Dekko|Asar|Yatra%20One|Hind");
    Android.download(fontUrlArray, "Hindi Fonts", "fonts.zip");
}

function downloadThaiFonts() {
    var fontUrlArray = new Array("https://fonts.google.com/download?family=Chonburi|Pattaya|Sriracha|Itim|Athiti");
    Android.download(fontUrlArray, "Thai Fonts", "fonts.zip");
}

function downloadTeluguFonts() {
    var fontUrlArray = new Array("https://fonts.google.com/download?family=Sree%20Krushnadevaraya|NTR|Mallanna|Gurajada|Mandali|Gidugu");
    Android.download(fontUrlArray, "Telugu Fonts", "fonts.zip");
}

function downloadTamilFonts() {
    var fontUrlArray = new Array("https://fonts.google.com/download?family=Baloo%20Thambi|Kavivanar|Pavanam|Meera%20Inimai|Hind%20Madurai");
    Android.download(fontUrlArray, "Tamil Fonts", "fonts.zip");
}

function downloadHebrewFonts() {
    var fontUrlArray = new Array("https://fonts.google.com/download?family=Amatica%20SC|Varela%20Round|Arimo|Alef");
    Android.download(fontUrlArray, "Hebrew Fonts", "fonts.zip");
}

function downloadGreekFonts() {
    var fontUrlArray = new Array("https://fonts.google.com/download?family=Ubuntu%20Condensed|Didact%20Gothic|GFS%20Didot|Nova%20Mono");
    Android.download(fontUrlArray, "Greek Fonts", "fonts.zip");
}

function downloadBengaliFonts() {
    var fontUrlArray = new Array("https://fonts.google.com/download?family=Hind%20Siliguri|Atma");
    Android.download(fontUrlArray, "Bengali Fonts", "fonts.zip");
}

function downloadCyrillicFonts() {
    var fontUrlArray = new Array("https://fonts.google.com/download?family=Kelly%20Slab|Ledger|Yeseva%20One|Tenor%20Sans|Neucha");
    Android.download(fontUrlArray, "Cyrillic Fonts", "fonts.zip");
}
