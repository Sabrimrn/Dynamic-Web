//Basis voertuig class
class Voertuig {
    constructor(merk, model, jaar, verhuurPrijs) {
        this.merk = merk;
        this.model = model;
        this.jaar = jaar;
        this.verhuurPrijs = verhuurPrijs;
        this.beschikbaar = true;
        this.id = Voertuig.generateId(); //Unieke ID voor elk voertuig
    }

    verhuur() {
        if(!this.beschikbaar) {
            return `Dit ${this.merk} ${this.model} is al verhuurd.`;
        }

        this.beschikbaar = false;
        return `${this.merk} ${this.model} (${this.jaar}) is verhuurd voor ${this.verhuurPrijs}`;
    }

    retourneer() {
        if(this.beschikbaar) {
            return `Dit ${this.merk} ${this.model} was niet verhuurd.`;
        }

        this.beschikbaar = true;
        return `${this.merk} ${this.model} is geretourneerd en weer beschikbaar voor verhuur`;
    }
}

class Auto extends Voertuig {
    constructor(merk, model, jaar, verhuurPrijs, aantalDeuren, brandstofType) {
        super(merk, model, jaar, verhuurPrijs);
        this.aantalDeuren = aantalDeuren;
        this.brandstofType = brandstofType;
    }
}
