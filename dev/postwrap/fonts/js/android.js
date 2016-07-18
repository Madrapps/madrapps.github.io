function downloadDisplayFonts() {
    var fontUrlArray = new Array("https://fonts.google.com/download?family=Galada|Poiret%20One|Bangers|Monoton|Finger%20Paint|Love%20Ya%20Like%20A%20Sister|Caesar%20Dressing|Fredericka%20the%20Great");
    Android.download(fontUrlArray, "Display Fonts");
}

function downloadHandwritingFonts() {
    var fontUrlArray = new Array("https://fonts.google.com/download?family=Pacifico|Amatic%20SC|Dancing%20Script|Courgette|Satisfy|Sacramento|Merienda%20One|Clicker%20Script");
    Android.download(fontUrlArray, "Handwriting Fonts");
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
    Android.download(fontUrlArray, "Language Fonts");
}