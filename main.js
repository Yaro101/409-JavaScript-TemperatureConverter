// Fahrenheit-asteesta Celcius-asteeseen: °C = (°F − 32) / 1,8
function fahrenheitToCelsius(lampotila) {
    // Muunna syötetty lämpötila Celsius-asteeksi ja palauta se.
    let celsius = (Number(lampotila) - 32) / 1.8;
    return celsius
}
// Celcius-asteesta Fahrenheit-asteeseen: °F = (°C) · 1,8 + 32
function celsiusToFahrenheit(lampotila) {
    // Muunna syötetty lämpötila Fahrenheit-asteeksi ja palauta se.
    let fahrenheit = (Number(lampotila) * 1.8) + 32;
    return fahrenheit
}

// Set a // Aseta click-event-listener "Muunna" painikkeelle (button).
document.getElementById("muunna").onclick = function(event) {
    event.preventDefault(); // Estää lomakkeen lähettämisen ja sivun päivittämisen.

    let lampotila = document.getElementById("syotaLampotila").value; // Hae tulolämpötilan arvo (input temperature value) ja aseta sen arvoksi 'lampotila'.

    let asteikko = document.getElementById("lämpötila-asteikko").value; // hae valittu lämpötila-asteikko ja aseta sen arvoksi 'asteikko'.
    
    let desimaali = document.querySelector('input[name="desimaali"]:checked').value; // hae valittu desimaalin tarkkaus ja aseta sen arvoksi 'desimaali'.

    let vastaus; // julistaminen 'vastaus' ('undefined')
    let ilmoitus = ""; // alusta 'ilmoitus' tyhjäksi merkkijonoksi

    // absoluuttisen nollarajan julistaminen
    let absoluteZeroCelsius = -273.15;
    let absoluteZeroFahrenheit = -459.67;


    /* Olosuhteet, joilla tarkistetaan valittu lämpötila-asteikko ja desimaalien tarkkuus 'vastaus'-arvon asettamiseksi.
    ToFixed() metodi on JavaScript-metodi, joka ottaa yhden argumentin, joka on numeron pyöristettävien desimaalien määrä, ja palauttaa muotoillun numeron merkkijonoesityksen.
    */
    if (asteikko === "fahrenheit" && desimaali === "Decim1") {
        // Muunna Fahrenheit-asteeksi 1 desimaalin tarkkuudella ja lisää Fahrenheit-symbolilla.
        vastaus = celsiusToFahrenheit(lampotila).toFixed(1);
        if (vastaus <= absoluteZeroFahrenheit) {  // Tarkista, onko absoluuttinen nolla ja anna arvo ilmoitukselle.
            ilmoitus = "Absoluuttinen nolla"
        }
        vastaus = vastaus + "°F";
    } else if (asteikko === "fahrenheit" && desimaali === "Decim2") {
        // Muunna Fahrenheit-asteeksi 2 desimaalin tarkkuudella ja lisää Fahrenheit-symbolilla.
        vastaus = celsiusToFahrenheit(lampotila).toFixed(2);
        if (vastaus <= absoluteZeroFahrenheit) {
            ilmoitus = "Absoluuttinen nolla"
        }
        vastaus = vastaus + "°F";
    } else if (asteikko === "fahrenheit" && desimaali === "Decim3") {
        // Muunna Fahrenheit-asteeksi 3 desimaalin tarkkuudella ja lisää Fahrenheit-symbolilla.
        vastaus = celsiusToFahrenheit(lampotila).toFixed(3);
        if (vastaus <= absoluteZeroFahrenheit) {
            ilmoitus = "Absoluuttinen nolla"
        }
        vastaus = vastaus + "°F";
    } else if (asteikko === "celsius" && desimaali === "Decim1") {
        // Muunna Celsius-asteeksi 1 desimaalin tarkkuudella ja lisää Celsius-symbolilla.
        vastaus = fahrenheitToCelsius(lampotila).toFixed(1);
        if (vastaus <= absoluteZeroCelsius) {
            ilmoitus = "Absoluuttinen nolla"
        }
        vastaus = vastaus + "°C";
    } else if (asteikko === "celsius" && desimaali === "Decim2") {
        // Muunna Celsius-asteeksi 2 desimaalin tarkkuudella ja lisää Celsius-symbolilla.
        vastaus = fahrenheitToCelsius(lampotila).toFixed(2);
        if (vastaus <= absoluteZeroCelsius) {
            ilmoitus = "Absoluuttinen nolla"
        }
        vastaus = vastaus + "°C";
    } else if (asteikko === "celsius" && desimaali === "Decim3") {
        // Muunna Celsius-asteeksi 3 desimaalin tarkkuudella ja lisää Celsius-symbolilla.
        vastaus = fahrenheitToCelsius(lampotila).toFixed(3);
        if (vastaus <= absoluteZeroCelsius) {
            ilmoitus = "Absoluuttinen nolla"
        }
        vastaus = vastaus + "°C";
    }

    // Aseta tulos "vastaus"-labelliin
    document.getElementById("vastaus").innerHTML = vastaus;

    document.getElementById("ilmoitusLabel").innerHTML = ilmoitus;
};