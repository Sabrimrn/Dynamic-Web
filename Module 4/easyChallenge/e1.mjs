class Student{
    constructor(naam, vakken) {
        this.naam = naam;
        this.vakken = vakken;
        this.punten = {};
    }


voegPuntToe(vak, punt) {
    //Als het vak nog niet bestaat, voeg het toe aan de vakkenlijst
    if(!this.vakken.includes(vak)) {
        this.vakken.push(vak);
    }

    //Sla het punt op
    this.punten[vak] = punt;
    return `Punt ${punt} toegevoegd voor ${vak}`;
}

gemiddelde() {
    //Bereken gemiddelde
    let totaal = 0;
    let aantalVakken = 0;

    for (const vak in this.punten) {
        totaal += this.punten[vak];
        aantalVakken++;
    }

    return aantalVakken > 0 ? totaal / aantalVakken : 0;
}

toonRapport(){
    //Schrijf html template hier
    let rapport = `<h2>Rapport vor ${this.naam}<h2>`;
    rapport +=`<ul>`;

    for(const vak in this.punten) {
        rapport += `<li>${vak}: ${this.punten[vak]}/20</li>`;
    }

    rapport += `</ul>`;
    rapport += `<p>Gemiddelde: ${this.gemiddelde().toFixed(1)}/20</p>`;

    return rapport;
}

}

//Studenten aanmaken
const student1 = new Student("Jef", ["Wiskunde", "Nederlands", "Frans"]);
const student2 = new Student("Milan", ["Nederlands", "Engels"]);

//Punten toevoegen
student1.voegPuntToe("Nederlands", 15);
student1.voegPuntToe("Wiskunde", 11);
student1.voegPuntToe("Frans", 17);
student2.voegPuntToe("Engels", 18);
student2.voegPuntToe("Nederlands", 11);

// Rapport van elke student tonen in de 'output' div
const outputDiv = document.getElementById('output');
outputDiv.innerHTML = student1.toonRapport() + "<hr>" + student2.toonRapport();