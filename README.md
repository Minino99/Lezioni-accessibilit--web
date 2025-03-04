# ARIA Properties Cheatsheet

## Introduzione
ARIA (Accessible Rich Internet Applications) è un insieme di attributi che definiscono modi per rendere i contenuti web e le applicazioni web più accessibili alle persone con disabilità. Questa guida rapida copre le proprietà ARIA più comuni e il loro utilizzo.

## Ruoli ARIA fondamentali

| Ruolo | Descrizione | Esempio |
|-------|-------------|---------|
| `role="button"` | Indica che l'elemento dovrebbe essere trattato come un pulsante | `<div role="button" tabindex="0">Clicca qui</div>` |
| `role="link"` | Indica che l'elemento è un collegamento | `<span role="link" tabindex="0">Vai alla pagina</span>` |
| `role="checkbox"` | Indica una casella di controllo | `<div role="checkbox" aria-checked="false"></div>` |
| `role="tab"` | Parte di un'interfaccia a schede | `<div role="tab" aria-selected="true">Scheda 1</div>` |
| `role="tabpanel"` | Contenuto associato a una scheda | `<div role="tabpanel" aria-labelledby="tab1">Contenuto</div>` |
| `role="dialog"` | Finestra di dialogo o modale | `<div role="dialog" aria-labelledby="title">...</div>` |
| `role="alert"` | Messaggio di avviso importante | `<div role="alert">Errore di connessione</div>` |
| `role="navigation"` | Regione con link di navigazione | `<nav role="navigation">...</nav>` |

## Proprietà ARIA comuni

### Stati e proprietà

| Attributo | Descrizione | Valori possibili | Esempio |
|-----------|-------------|------------------|---------|
| `aria-label` | Etichetta accessibile per un elemento | Testo | `<button aria-label="Chiudi">X</button>` |
| `aria-labelledby` | Riferimento a un elemento che fornisce l'etichetta | ID | `<div aria-labelledby="title">...</div>` |
| `aria-describedby` | Riferimento a un elemento che fornisce una descrizione | ID | `<input aria-describedby="hint">` |
| `aria-hidden` | Nasconde elementi agli screen reader | true/false | `<div aria-hidden="true">...</div>` |
| `aria-expanded` | Indica se un elemento è espanso | true/false | `<button aria-expanded="false">...</button>` |
| `aria-checked` | Stato di selezione | true/false/mixed | `<div role="checkbox" aria-checked="true">...</div>` |
| `aria-selected` | Stato di selezione | true/false | `<div role="option" aria-selected="true">...</div>` |
| `aria-disabled` | Indica che un elemento è disabilitato | true/false | `<button aria-disabled="true">...</button>` |
| `aria-required` | Indica un campo obbligatorio | true/false | `<input aria-required="true">` |
| `aria-haspopup` | Indica che l'elemento apre un popup | true/dialog/menu/listbox/tree/grid | `<button aria-haspopup="true">...</button>` |
| `aria-controls` | Riferimento a un elemento controllato | ID | `<button aria-controls="panel1">...</button>` |
| `aria-live` | Indica una regione dinamica | off/polite/assertive | `<div aria-live="polite">...</div>` |

## Regioni e struttura della pagina

| Ruolo | Descrizione | Esempio |
|-------|-------------|---------|
| `role="banner"` | Intestazione principale (header) | `<header role="banner">...</header>` |
| `role="main"` | Contenuto principale della pagina | `<main role="main">...</main>` |
| `role="contentinfo"` | Informazioni sul documento (footer) | `<footer role="contentinfo">...</footer>` |
| `role="complementary"` | Contenuto supplementare (sidebar) | `<aside role="complementary">...</aside>` |
| `role="search"` | Sezione di ricerca | `<div role="search">...</div>` |

## Best Practices

1. **Usa HTML nativo quando possibile**: Gli elementi HTML nativi hanno già ruoli ARIA impliciti (ad es. `<button>` ha implicitamente `role="button"`).

2. **No ARIA è meglio di cattivo ARIA**: Usa ARIA solo quando necessario e quando comprendi il suo utilizzo.

3. **Mantieni sincronizzati gli stati ARIA**: Aggiorna gli attributi ARIA (come `aria-expanded`) quando cambia lo stato dell'interfaccia.

4. **Testa con screen reader**: Verifica sempre l'accessibilità con tecnologie assistive reali.

5. **Assicura la navigazione da tastiera**: Elementi interattivi dovrebbero essere raggiungibili e utilizzabili con la tastiera.

## Esempi di pattern comuni

### Menu a tendina

```html
<div>
  <button aria-haspopup="true" aria-expanded="false" aria-controls="menu1">Menu</button>
  <ul id="menu1" role="menu" aria-hidden="true">
    <li role="menuitem" tabindex="-1">Opzione 1</li>
    <li role="menuitem" tabindex="-1">Opzione 2</li>
  </ul>
</div>
```

### Tab interface

```html
<div role="tablist">
  <button role="tab" aria-selected="true" aria-controls="panel1" id="tab1">Tab 1</button>
  <button role="tab" aria-selected="false" aria-controls="panel2" id="tab2">Tab 2</button>
</div>
<div id="panel1" role="tabpanel" aria-labelledby="tab1">Contenuto tab 1</div>
<div id="panel2" role="tabpanel" aria-labelledby="tab2" hidden>Contenuto tab 2</div>
```

### Finestra di dialogo modale

```html
<div role="dialog" aria-labelledby="dialog-title" aria-describedby="dialog-desc">
  <h2 id="dialog-title">Titolo della finestra</h2>
  <p id="dialog-desc">Descrizione della finestra di dialogo.</p>
  <button aria-label="Chiudi">X</button>
</div>
```
