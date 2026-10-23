# Valentina · Percorsi di Relazione — V5

Sito statico multipagina responsive. Per l'anteprima su Windows, estrai lo ZIP e avvia `APRI-ANTEPRIMA.bat`.

## Aggiornamenti V5
- nuova immagine AI per la consulenza online;
- immagini AI in trasparenza nei sei box dei percorsi individuali e della consulenza online;
- immagini AI nei quattro box del trekking educativo;
- immagini AI nei due box “Il cane” e “La persona” della ricerca su traccia;
- nuova immagine AI nella sezione “Strumenti e quotidianità”;
- numerazione serif grande e coerente nelle card, nei processi e nella homepage;
- social e messaggi WhatsApp preimpostati.

## Prima della pubblicazione
- sostituire `DOMINIO-DA-INSERIRE` in HTML, robots.txt e sitemap.xml;
- verificare la privacy con il provider di hosting;
- validare il copy operativo con Valentina;
- aggiungere il link Google Business Profile quando disponibile.

## Aggiornamenti V5.1 — homepage
- rimosso il marchio completo sovradimensionato dal footer e sostituito con una firma tipografica compatta;
- rimossa la cornice sfalsata intorno alla fotografia principale;
- rimossi i tre bullet informativi sotto le CTA della hero;
- fascia-citazione ripristinata su gradiente verde;
- sezione “Percorsi e attività” riportata a un layout ampio, editoriale e con descrizioni;
- sezione “Metodo di lavoro” riportata a due colonne, mantenendo la numerazione grande;
- sezione “Modalità” resa più scura e con fotografia a sinistra su desktop;
- sfondo dell’agenda sostituito con una sorgente più nitida;
- aggiunta `agenda.html`, che pubblica un’immagine facilmente sostituibile.

### Come aggiornare l’agenda
Sostituisci il file `assets/agenda-corrente.jpg` con la nuova locandina, mantenendo esattamente lo stesso nome. Non è necessario modificare l’HTML; è consigliato usare un JPG verticale di buona qualità, indicativamente tra 900 e 1400 px di larghezza.
## Aggiornamento V5.2 — homepage finalizzata
- ampliata la testata della sezione “Dove lavoro”, con titolo stabilizzato su due righe negli schermi desktop;
- applicato un gradiente verde orizzontale, più scuro sul lato del titolo e progressivamente più chiaro verso il testo introduttivo;
- contrassegnata la homepage come baseline approvata: nelle prossime iterazioni si interviene esclusivamente sulle pagine di dettaglio, salvo richiesta esplicita.


## Integrazione pagina 404 — V5.2.1

La pagina `404.html` è stata sostituita con la versione illustrata del cane al bivio.
Header, navigazione, footer, contatti e profili social sono gli stessi della baseline V5.2.
Gli stili specifici sono isolati in `404.css`: `index.html` e `styles.css` della homepage approvata non sono stati modificati.

## Aggiornamento V5.3 — pagina Percorsi individuali
- rimossa la cornice sfalsata dalla fotografia della hero della pagina;
- unificata la sezione “Quando può essere utile”, eliminando la separazione cromatica artificiale tra introduzione e card;
- integrate le sei immagini fornite nei riquadri, con dissolvenza fotografica da sinistra verso destra e numerazione serif verde;
- ravvicinati i riquadri e ridotta la distanza dall’introduzione;
- sostituita la fotografia di “Strumenti e quotidianità” con una nuova immagine dedicata al lavoro con il clicker;
- applicati fondi gradientati, distinti ma coerenti, alle sezioni “Strumenti e quotidianità”, FAQ e “Primo contatto”;
- aggiunto `percorsi-individuali.css`, isolando tutte le modifiche dalla homepage e dalla pagina 404 congelate.

## Correzione V5.3.1 — immagini decorative nelle card

I percorsi delle immagini usate tramite la variabile CSS `--card-image` sono espressi rispetto al foglio `styles.css`, che si trova nella cartella principale. La forma corretta è quindi `assets/nome-file.webp`, non `../assets/nome-file.webp`.

La correzione consente di visualizzare le fotografie sia tramite server locale/hosting sia aprendo direttamente i file HTML dal computer.

## Aggiornamento V5.4 — Classi di comunicazione

- sostituita l’immagine ripetuta del riquadro “In natura” con una nuova scena AI dedicata;
- rimossa dalla hero della pagina la cornice sfalsata che interferiva con la didascalia;
- introdotti gradienti coerenti con `/percorsi-individuali/` nelle sezioni introduttiva, contesti, processo, FAQ e primo contatto;
- sostituita l’immagine “Strumenti e quotidianità” con una versione AI più nitida e con varianti responsive ad alta qualità;
- aggiunto il foglio isolato `classi-di-comunicazione.css`, così da non alterare la homepage o la pagina 404.

## Aggiornamento V5.4.1 — Classi di comunicazione

- mantenuti i riquadri “In natura” e “In città” nello stesso ambiente cromatico caldo;
- uniformate altezza e proporzioni delle due card;
- inserita l’immagine ottimizzata fornita per il riquadro “In natura”.

## Aggiornamento V5.5 — gradienti e gerarchia delle pagine di dettaglio

### Classi di comunicazione

- la sezione “Come si svolge” torna su un gradiente verde bosco–salvia, coerente con il processo della pagina Percorsi individuali;
- la sezione Natura/Città resta sul fondo caldo già approvato, così i due blocchi risultano chiaramente distinti.

### Ricerca su traccia

- rimossa la cornice sfalsata dalla fotografia della hero;
- unificate visivamente introduzione e card “Il cane / La persona” con un passaggio crema–beige;
- applicato il gradiente verde alla sezione “Come si svolge”;
- applicato un gradiente salvia–crema–argilla alle informazioni pratiche;
- differenziate FAQ e primo contatto con gli stessi sistemi cromatici approvati;
- aggiunto `ricerca-su-traccia.css` per isolare le modifiche.

### Trekking educativo

- rimossa la cornice sfalsata dalla fotografia della hero;
- avvicinate introduzione e quattro card attraverso un unico passaggio cromatico caldo;
- applicato il gradiente verde alla sezione “Come si svolge”;
- inserita la card delle esperienze in acqua in una sezione salvia–crema distinta;
- differenziate FAQ e primo contatto;
- aggiunto `trekking-educativo.css`.

### Consulenza cinofila online

- rimossa la cornice sfalsata dalla fotografia della hero;
- unificate visivamente introduzione e sei situazioni possibili;
- applicato il gradiente verde alla sezione “Come si svolge”;
- applicato un passaggio salvia–crema–argilla alla sezione sui limiti dell’online;
- differenziate FAQ e primo contatto;
- aggiunto `consulenza-cinofila-online.css`.

Homepage, pagina 404, Percorsi individuali, `styles.css` e `script.js` restano invariati rispetto alla V5.4.1.
