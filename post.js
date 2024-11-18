class Post {
    constructor(titolo, contenuto, immagine, tags) {
        this.titolo = titolo;
        this.contenuto = contenuto;
        this.immagine = immagine;
        this.tags = tags
    }
}

const ciambellone = new Post("Ciambellone", "RicettaCiambellone", "./img/ciambellone.jpg", ["dolce", "leggero",]);
const cracker_barbabietola = new Post("Cracker alla barbabietola", "RicettaCrackerBarbabietola", "./img/cracker_barbabietola", ["salato", "naturale"]);
const pane_fritto_dolce = new Post("Pane fritto dolce", "RicettaPaneFrittoDolce", "./img/pane_fritto_dolce", ["dolce"]);
const pasta_barbabietola = new Post("Pasta alla barbabietola", "RicettaPastaBarbabietola", "./img/pasta_barbabietola", ["salato", "naturale"]);
const torta_paesana = new Post("Torta paesana", "RicettaTortaPaesana", "./img/torta_paesana", ["dolce"]);

const posts = [ciambellone, cracker_barbabietola, pane_fritto_dolce, pasta_barbabietola, torta_paesana];

//console.log(posts);
module.exports = posts;