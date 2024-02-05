
var firebaseConfig = {
  apiKey: "AIzaSyCFAlpxUK26XJqZ86kBYhofJlapxh6Ajds",
  authDomain: "maxrat-5d14a.firebaseapp.com",
  databaseURL: "https://maxrat-5d14a-default-rtdb.firebaseio.com",
  projectId: "maxrat-5d14a",
  storageBucket: "maxrat-5d14a.appspot.com",
  messagingSenderId: "908892453787",
  appId: "1:908892453787:web:abe94d1faea8b80ef1bf3e",
  measurementId: "G-E9BP785SF5"
};


      window.location.href = 'shopos.html';

firebase.initializeApp(firebaseConfig);

    var database = firebase.database();

console.log("TEST");
const updateRef = database.ref('/fortschritt/update');

  updateRef.on('value', (snapshot) => {
    const updateValue = snapshot.val();

    // Überprüfen, ob der Wert "true" ist
    if (updateValue === true) {
      // Weiterleitung zur update.html-Seite
      window.location.href = 'update.html';
    }
  });
const einRef = database.ref('/nicht');

  einRef.on('value', (snapshot) => {
    const einValue = snapshot.val();

    // Überprüfen, ob der Wert "true" ist
    if (einValue === true) {
      // Weiterleitung zur update.html-Seite
      window.location.href = 'shopos.html';
    }
  });
    var ref = database.ref("disruptions");

    var index = 0;

    function updateBar() {

      // Die Störungen aus der Datenbank lesen
      ref.once("value", function(snapshot) {
        // Die Störungen in ein Array umwandeln
        var disruptions = snapshot.val();


        var length = disruptions.length;

        // Die aktuelle Störung aus dem Array holen
        var disruption = disruptions[index];

        // Die Leiste mit der Störung füllen
        bar.innerHTML = disruption;

        // Die Leiste animieren
        bar.classList.add("animate");

        // Den Index um eins erhöhen
        index++;

        // Wenn der Index das Ende des Arrays erreicht hat, wieder von vorne anfangen
        if (index == length) {
          index = 0;
        }

          bar.classList.remove("animate");

      });
    }


    // Die Funktion zum ersten Mal aufrufen
    updateBar();
    // Die Funktion alle 2 Sekunden wiederholen
    setInterval(updateBar, 5000);
	
console.log("TEST");
