# VIAN Sentiment Analysis

Costruire per capire: un modello di **sentiment analysis in italiano** addestrato con i dati raccolti dagli studenti sulla propria scuola.

Il progetto nasce dal corso pomeridiano di intelligenza artificiale del progetto **#vienialvian.yesweSTEM** (fondi PNRR DM65/2023), tenuto tra l'IIS "Guglielmo Marconi" di Civitavecchia e il Liceo Scientifico "Ignazio Vian" di Bracciano. È stato presentato a **Didamatica 2026** (Padova, 7-8 ottobre 2026) nell'intervento *"Costruire per capire: insegnare l'etica dell'IA attraverso il fine tuning di un modello"*, di Claudio Capobianco e Tania Fantozzi.

## Link utili

- 🎮 **Demo online**: [Space su Hugging Face](https://huggingface.co/spaces/wbigger/VIAN-sentiment-analysis)
- 🤖 **Modello fine-tuned**: [wbigger/sentiment-analysis-test](https://huggingface.co/wbigger/sentiment-analysis-test)
- 📊 **Dataset**: [wbigger/sentiment-analysis-test](https://huggingface.co/datasets/wbigger/sentiment-analysis-test)
- 📑 **Presentazione a Didamatica 2026**: [PDF su Google Drive](https://drive.google.com/file/d/1k7QlizSQzh2-3Xkj0UMb-2rhz0UyQbqT/view?usp=drive_link)

## Di cosa si tratta

La *sentiment analysis* insegna a un programma a riconoscere se un testo esprime un giudizio **positivo**, **neutro** o **negativo**. È una tecnica usata per analizzare recensioni, commenti e questionari di gradimento.

L'abbiamo scelta perché ha etichette semplici, usa un contesto vicino agli studenti (la loro scuola) e il fine tuning è alla portata di un corso scolastico. L'idea didattica è che **costruendo il modello emergono da soli gli aspetti etici**: ogni scelta fatta durante il lavoro (come si scrivono le domande, come si raccolgono i dati, come si trasformano le stelle in etichette) lascia un segno nel risultato. Il modello non è mai del tutto neutrale.

## Cosa abbiamo fatto

1. **Raccolta dati**: un questionario sulla scuola con valutazioni a stelle e commenti liberi, compilato tramite un sito ospitato su Google Apps Script.
2. **Preprocessing**: le stelle sono state ricodificate in tre classi (negativa, neutra, positiva) e il dataset è stato diviso in train e test (80/20).
3. **Fine tuning**: partendo da un modello italiano già addestrato sul sentiment ([`cardiffnlp/xlm-roberta-base-tweet-sentiment-it`](https://huggingface.co/cardiffnlp/xlm-roberta-base-tweet-sentiment-it)) lo abbiamo ulteriormente addestrato con i nostri dati su Google Colab.
4. **Valutazione**: confronto tra modello originale e modello fine-tuned, con frasi di prova, accuratezza e matrici di confusione.
5. **Interfaccia**: una piccola app Gradio pubblicata come Space su Hugging Face.

## Contenuto del repository

| File | A cosa serve |
|---|---|
| `index.html`, `Codice.gs` | Sito per la raccolta dei dati (Google Apps Script) |
| `logo.webp` | Logo usato dal sito |
| `Sentiment_Analysis.ipynb` | Costruisce il dataset dai file CSV raccolti, lo divide in train/test e lo pubblica su Hugging Face |
| `sentiment_analysis_training.ipynb` | Fine tuning del modello, pubblicazione sull'Hub, prova del modello e interfaccia Gradio |

## Come riprodurre il lavoro

1. Apri i notebook in [Google Colab](https://colab.research.google.com/) (per il training serve una GPU, ad esempio la T4 gratuita).
2. In Colab, crea un **secret** chiamato `gh_username` con il tuo username Hugging Face e abilita l'accesso al notebook.
3. Opzionale: esegui `Sentiment_Analysis.ipynb` per creare e pubblicare il dataset partendo dai csv delle risposte (non incluse in questo repository).
4. Esegui `sentiment_analysis_training.ipynb` per addestrare e pubblicare il modello.
5. Per pubblicare il modello e il dataset serve effettuare il login su Hugging Face con un token con permesso di scrittura.

## Risultati e limiti

Il modello fine-tuned sembra migliorare in accuratezza, ma la **F1 macro peggiora**: nel test tutti gli 8 casi neutri vengono previsti come positivi. È un risultato istruttivo, non un difetto del corso.

Va letto con cautela:

- il corso non era concepito come studio di ricerca;
- il dataset è piccolo e la valutazione è retrospettiva, ricostruita a posteriori;
- il campione è autoselezionato e non rappresentativo, con poche scuole delle zone di Bracciano e Civitavecchia;
- il corso è stato frequentato e completato da quindici studenti.

## Sviluppi futuri

Una replica più strutturata prevede test di apprendimento prima e dopo il corso, la valutazione del modello pianificata fin dall'inizio, una griglia per valutare il ragionamento etico degli studenti (DigComp 3.0) e il coinvolgimento di altri istituti per la compilazione del questionario.

## Autori

Claudio Capobianco (IIS "G. Marconi", Civitavecchia) e Tania Fantozzi (Liceo Scientifico "I. Vian", Bracciano).
