//Arrow function maak bestelling
const maakBestelling = (drank = "cola", snack = "chips") => {
    return {
        drank,
        snack,
        timestamp: new Date().toLocaleString()
    };
};

// Bestellingen testen
const output = document.getElementById('bestelling');

const bestelling1 = maakBestelling();
const bestelling2 = maakBestelling("fanta");
const bestelling3 = maakBestelling("sprite", "nootjes");

output.innerHTML += `
    <div class="bestelling">
        Bestelling 1: ${bestelling1.drank} en ${bestelling1.snack}
    </div>
    <div class="bestelling">
        Bestelling 2: ${bestelling2.drank} en ${bestelling2.snack}
    </div>
    <div class="bestelling">
        Bestelling 3: ${bestelling3.drank} en ${bestelling3.snack}
    </div>
    `;

