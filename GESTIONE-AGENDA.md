# Gestione autonoma dell’agenda

La pagina `agenda.html` è stata predisposta per due modalità di aggiornamento.

## Modalità consigliata: Pages CMS + GitHub + Cloudflare Pages

Questa soluzione permette a Valentina di aggiornare l’agenda da un’interfaccia grafica, senza modificare HTML o CSS.

### Come funziona

1. Il sito viene conservato in un repository GitHub.
2. Cloudflare Pages viene collegato al repository mediante **Git integration**.
3. Pages CMS legge il file `.pages.yml` presente nella cartella principale.
4. Valentina apre l’editor, seleziona **Agenda corrente**, carica la nuova locandina, aggiorna titolo, data e date in breve, quindi salva.
5. Pages CMS registra la modifica nel repository; Cloudflare Pages pubblica automaticamente la nuova versione.

### Accesso per Valentina

Può essere invitata come collaboratrice tramite email. Non deve conoscere Git e può limitarsi alla schermata dell’agenda e alla libreria immagini.

### Importante per Cloudflare Pages

Il progetto va creato con collegamento GitHub. Se il sito fosse già stato creato come progetto **Direct Upload**, Cloudflare non consente di convertirlo successivamente in Git integration: in quel caso conviene creare un nuovo progetto collegato al repository e assegnargli il dominio.

## Campi modificabili dall’editor

- pubblicazione o sospensione temporanea dell’agenda;
- titolo, per esempio `Agenda di ottobre`;
- breve descrizione;
- immagine della locandina;
- testo alternativo per l’accessibilità;
- data dell’ultimo aggiornamento;
- nota aggiuntiva;
- elenco sintetico delle date, attività e località.

Il sito legge questi dati da:

```text
data/agenda.json
```

Le immagini caricate vengono salvate in:

```text
assets/agenda/
```

## Preparazione consigliata della locandina

Per una resa nitida e professionale:

- esportare direttamente dal programma con cui è stata creata, evitando fotografie dello schermo;
- usare JPG, PNG o WebP;
- mantenere il formato verticale originale;
- usare almeno 1.200–1.600 pixel sul lato lungo;
- evitare testi troppo piccoli;
- mantenere il file sotto circa 3 MB, salvo esigenze particolari;
- inserire anche le date nel campo **Date in breve**, così l’informazione resta leggibile e accessibile anche su smartphone.

## Aggiornamento manuale alternativo

Senza CMS, è possibile:

1. copiare la nuova immagine in `assets/agenda/`;
2. aprire `data/agenda.json` con un editor di testo;
3. sostituire il valore di `image` con il nuovo percorso;
4. aggiornare titolo, descrizione, data, nota ed elenco degli eventi;
5. pubblicare nuovamente la cartella del sito.

## Comportamento della pagina

- la locandina non viene mai deformata;
- sul desktop non viene ingrandita oltre la dimensione utile;
- il pulsante **Apri a schermo intero** mostra l’immagine in un dialog dedicato;
- la colonna **Date in breve** rende il calendario leggibile anche senza zoom;
- impostando `published` su `false`, la pagina mostra automaticamente “Nuove date in arrivo”.
