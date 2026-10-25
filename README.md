<!-- Generated from data/resources.yml by scripts/build-readme.mjs. Do not edit by hand. -->

# Awesome Albania [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> A curated list of Albanian datasets, tools, communities and developer resources.

Albanian-language data, NLP models, open government data, maps, localization and the people building tech in Albania, Kosovo and the diaspora. Every link is checked weekly. Browse and search it at **[0xgitpushpray.github.io/awesome-albania](https://0xgitpushpray.github.io/awesome-albania)**.

🇦🇱 Albania · 🇽🇰 Kosovo · no flag = global or multilingual

## Contents

- [Datasets](#datasets)
- [Language & NLP](#language--nlp)
- [Open Data](#open-data)
- [Maps & Geo](#maps--geo)
- [Developer Tools](#developer-tools)
- [Localization](#localization)
- [Communities](#communities)
- [Learning & Reference](#learning--reference)

## Datasets

*Të dhëna*. Corpora and labelled data with Albanian in them.

### Text corpora

- [CulturaX](https://huggingface.co/datasets/uonlp/CulturaX) - Cleaned, deduplicated multilingual web corpus for LLM training with a sizeable Albanian split.
- [FineWeb-2](https://huggingface.co/datasets/HuggingFaceFW/fineweb-2) - Hugging Face's filtered web corpus in 1,000+ languages; Albanian lives under als_Latn.
- [HPLT Datasets](https://hplt-project.org/datasets/v2.0) - High Performance Language Technologies web-crawl corpora, with cleaned Albanian monolingual text.
- [OSCAR](https://oscar-project.org/) - Open Super-large Crawled Aggregated coRpus, Common Crawl text sorted by language, Albanian included.
- [CC-100](https://data.statmt.org/cc-100/) - Monolingual Common Crawl text used to train XLM-R, downloadable per language (sq).
- [MaCoCu Albanian web corpus](https://www.clarin.si/repository/xmlui/handle/11356/1804) - Albanian web corpus crawled from .al and Albanian-language sites by the MaCoCu project.
- [Leipzig Corpora Collection](https://wortschatz.uni-leipzig.de/en/download/Albanian) - Sentence-split Albanian news, web and Wikipedia corpora in sizes from 10K to millions of sentences.
- [Albanian Wikipedia dumps](https://dumps.wikimedia.org/sqwiki/) - Full XML and SQL dumps of sq.wikipedia.org, refreshed twice a month.
- [Bujku newspaper archive](https://huggingface.co/datasets/Kushtrim/bujku) 🇽🇰 - Segmented articles and embeddings from the Kosovo daily Bujku, 1991–1998.

### Parallel

- [OPUS](https://opus.nlpl.eu/) - The largest open collection of parallel corpora, with dozens of Albanian–X language pairs.
- [Tatoeba](https://tatoeba.org/en/sentences/show_all_in/sqi/none) - Crowdsourced example sentences in Albanian with translations into many languages.
- [Tatoeba Translation Challenge](https://huggingface.co/datasets/Helsinki-NLP/tatoeba_mt) - Benchmark test sets for machine translation, Albanian pairs included.
- [FLORES+](https://huggingface.co/datasets/openlanguagedata/flores_plus) - Professionally translated MT evaluation benchmark covering 200+ languages, including Albanian (als_Latn).

### Labelled

- [Belebele](https://huggingface.co/datasets/facebook/belebele) - Multiple-choice reading comprehension benchmark in 122 language variants, Albanian among them.
- [SIB-200](https://huggingface.co/datasets/Davlan/sib200) - Topic classification benchmark built on FLORES-200 sentences, with an Albanian split.
- [WikiANN](https://huggingface.co/datasets/unimelb-nlp/wikiann) - Silver-standard named entity recognition (PER, LOC, ORG) data, with an Albanian (sq) configuration.
- [Shaj](https://huggingface.co/datasets/strombergnlp/shaj) - Albanian social media posts annotated for offensive language and hate speech, OffensEval style.
- [AlbNews](https://lindat.mff.cuni.cz/repository/xmlui/handle/11234/1-5411) - Albanian news headlines labelled by topic (politics, culture, economy, sport) for topic modelling.
- [EduSenti](https://github.com/plandes/edusenti) - Sentiment-annotated Albanian education reviews with baseline models.
- [UD Albanian TSA](https://universaldependencies.org/treebanks/sq_tsa/index.html) - Universal Dependencies treebank of Albanian Wikipedia sentences with POS, morphology and syntax.
- [UD Albanian STAF](https://universaldependencies.org/treebanks/sq_staf/index.html) - Hand-corrected Universal Dependencies treebank of sentences from Albanian fiction, 1963–2004.

### Speech

- [Common Voice Albanian](https://commonvoice.mozilla.org/sq) - Mozilla's crowdsourced voice dataset. Record or validate Albanian clips, then download the corpus.

### Indexes

- [Hugging Face · Albanian datasets](https://huggingface.co/datasets?language=language:sq) - Every Hugging Face dataset tagged Albanian. Also try the als (Tosk) and aln (Gheg) tags.
- [Hugging Face · Albanian models](https://huggingface.co/models?language=sq) - Every model on the Hugging Face Hub tagged as supporting Albanian.

## Language & NLP

*Gjuha*. Models and tools that read, write, speak or translate Albanian.

### Models

- [HPLT BERT for Albanian](https://huggingface.co/HPLT/hplt_bert_base_2_0_als-Latn) - Monolingual Albanian encoder model trained on HPLT 2.0 data, ready for fine-tuning.
- [XLM-RoBERTa](https://huggingface.co/FacebookAI/xlm-roberta-base) - Multilingual encoder pretrained on 100 languages including Albanian; a strong default baseline.
- [fastText word vectors](https://fasttext.cc/docs/en/crawl-vectors.html) - Pretrained 300-dimension word vectors for Albanian (cc.sq.300) trained on Common Crawl and Wikipedia.

### Translation

- [OPUS-MT English→Albanian](https://huggingface.co/Helsinki-NLP/opus-mt-en-sq) - Small, fast open translation model from English to Albanian, trained on OPUS.
- [OPUS-MT Albanian→English](https://huggingface.co/Helsinki-NLP/opus-mt-sq-en) - The reverse direction, a compact Marian model that translates Albanian into English.
- [NLLB-200](https://huggingface.co/facebook/nllb-200-distilled-600M) - Meta's No Language Left Behind translation model; translates to and from Albanian (als_Latn).

### Speech

- [Whisper](https://github.com/openai/whisper) - OpenAI's open speech recognition model, which transcribes and translates Albanian audio.
- [MMS TTS Albanian](https://huggingface.co/facebook/mms-tts-sqi) - Meta's Massively Multilingual Speech text-to-speech model for Albanian.
- [eSpeak NG](https://github.com/espeak-ng/espeak-ng) - Compact open-source speech synthesizer with an Albanian voice and phonemizer.

### Spelling & OCR

- [Tesseract Albanian model](https://github.com/tesseract-ocr/tessdata_best) - Trained LSTM models for Tesseract OCR; sqi.traineddata reads Albanian text, diacritics included.
- [Hunspell Albanian dictionary](https://packages.fedoraproject.org/pkgs/hunspell-sq/hunspell-sq/) - The sq_AL Hunspell spelling dictionary used by LibreOffice, Firefox and Linux distributions.

### Libraries

- [spaCy](https://spacy.io/usage/models#languages) - Industrial NLP library with Albanian language data (tokenizer, stop words) but no trained pipeline yet. Bring your own.
- [albanianlanguage](https://pypi.org/project/albanianlanguage/) - Python package giving access to Albanian words and their linguistic details.
- [Vithkuqi transliteration](https://github.com/willborici/veqilharxhi-transliteration) - Transliterates between the Latin Albanian alphabet and the historical Vithkuqi (Veqilharxhi) script.

## Open Data

*Të dhëna të hapura*. Official statistics, registers and public-sector data.

### Portals

- [Albania Open Data Portal](https://opendata.gov.al/) 🇦🇱 - The national open data portal, with CSV/XML downloads, DCAT-AP metadata and a SPARQL endpoint.
- [Kosovo Customs open data](https://dogana.rks-gov.net/OpenData) 🇽🇰 - Import, export and revenue data published by Kosovo Customs. The national portal is offline while it's rebuilt.
- [Humanitarian Data Exchange · Albania](https://data.humdata.org/group/alb) 🇦🇱 - OCHA's catalogue of Albania datasets, covering population, boundaries, health and infrastructure.

### Statistics

- [INSTAT](https://www.instat.gov.al/) 🇦🇱 - Albania's Institute of Statistics, publisher of census, labour, prices and trade statistics.
- [Kosovo Agency of Statistics](https://ask.rks-gov.net/) 🇽🇰 - Official statistics for Kosovo, covering population, economy, agriculture and social indicators.
- [ASK Data](https://askdata.rks-gov.net/) 🇽🇰 - The Kosovo Agency of Statistics' PxWeb database, with queryable tables and an API.
- [Bank of Albania statistics](https://www.bankofalbania.org/Statistics/) 🇦🇱 - Exchange rates, monetary, banking and balance-of-payments series from Albania's central bank.
- [World Bank · Albania](https://data.worldbank.org/country/albania) 🇦🇱 - Long-run development indicators for Albania, available via the World Bank API.
- [World Bank · Kosovo](https://data.worldbank.org/country/kosovo) 🇽🇰 - Development indicators for Kosovo (country code XKX in the World Bank API).

### Registers

- [National Business Center (QKB)](https://qkb.gov.al/) 🇦🇱 - Albania's business register, used to search companies and NIPT tax numbers.
- [Kosovo Business Registration Agency](https://arbk.rks-gov.net/) 🇽🇰 - Kosovo's official business register (ARBK), used to search registered companies.
- [Open Procurement Albania](https://openprocurement.al/) 🇦🇱 - Searchable public procurement data for Albania, by the Albanian Institute of Science.

### Elections

- [Central Election Commission (Albania)](https://kqz.gov.al/) 🇦🇱 - Official results and voter data for Albanian elections (KQZ).
- [Central Election Commission (Kosovo)](https://kqz-ks.org/) 🇽🇰 - Official results and statistics for Kosovo elections (KQZ).

## Maps & Geo

*Harta*. Map data, boundaries and geospatial services.

### OpenStreetMap

- [OpenStreetMap · Albania](https://wiki.openstreetmap.org/wiki/Albania) 🇦🇱 - The OSM wiki hub for Albania, covering tagging conventions, imports, ongoing projects and contacts.
- [OpenStreetMap · Kosovo](https://wiki.openstreetmap.org/wiki/Kosovo) 🇽🇰 - The OSM wiki hub for Kosovo mappers, with conventions, projects and the local community.

### Geoportals

- [ASIG Geoportal](https://geoportal.asig.gov.al/) 🇦🇱 - Albania's national spatial data infrastructure, offering orthophotos, cadastre and WMS/WFS services.
- [Kosovo Geoportal](https://geoportal.rks-gov.net/) 🇽🇰 - Kosovo Cadastral Agency's geoportal, with base maps, cadastre and spatial services.

### Extracts

- [Geofabrik · Albania extract](https://download.geofabrik.de/europe/albania.html) 🇦🇱 - Daily OpenStreetMap extracts of Albania in .osm.pbf and shapefile formats.
- [Geofabrik · Kosovo extract](https://download.geofabrik.de/europe/kosovo.html) 🇽🇰 - Daily OpenStreetMap extracts of Kosovo in .osm.pbf and shapefile formats.

## Developer Tools

*Vegla*. Locale data, validators and the gotchas of building for the region.

### Locale

- [holidays (Python)](https://github.com/vacanza/holidays) - Public holiday calendars for Python with Albania (AL) and Kosovo (XK) built in.
- [Day.js Albanian locale](https://github.com/iamkun/dayjs/blob/dev/src/locale/sq.js) - Albanian (sq) month names, weekdays and relative time strings for Day.js.
- [Laravel Lang · Albanian](https://github.com/Laravel-Lang/lang/tree/main/locales/sq) - Community Albanian translations of Laravel's validation, auth and pagination messages.
- [Unicode CLDR · Albanian](https://github.com/unicode-org/cldr/blob/main/common/main/sq.xml) - The locale data behind Intl and ICU, giving sq, sq-AL, sq-XK and sq-MK number, date and plural rules.

### Validation

- [python-stdnum NIPT](https://github.com/arthurdejong/python-stdnum/blob/master/stdnum/al/nipt.py) 🇦🇱 - Validates and formats Albanian NIPT (VAT and tax identification) numbers in Python.

### Scripts & fonts

- [Noto Sans Vithkuqi](https://fonts.google.com/noto/specimen/Noto+Sans+Vithkuqi) - Open font for the Vithkuqi script, the 19th-century Albanian alphabet encoded in Unicode 14.
- [Unicode Vithkuqi block](https://www.unicode.org/charts/PDF/U10570.pdf) - The official Unicode code chart for Vithkuqi (U+10570–U+105BF).

### Gotchas

- [XK, Kosovo's country code](https://en.wikipedia.org/wiki/XK_(user_assigned_code)) 🇽🇰 - Kosovo has no ISO 3166 code; most systems use the user-assigned XK/XKX. Read this before building country pickers.
- [Albanian language codes](https://iso639-3.sil.org/code/sqi) - sq/sqi is the macrolanguage; Tosk is als and Gheg is aln. Datasets use all of them, so search for every code.
- [AKEP · .al domains](https://akep.al/) 🇦🇱 - Albania's electronic communications regulator, which administers the .al country-code top-level domain.

## Localization

*Përkthime*. Where Albanian translations of open-source software happen.

### Platforms

- [Mozilla Pontoon · Albanian](https://pontoon.mozilla.org/sq/) - Translate Firefox, Thunderbird and other Mozilla products into Albanian.
- [Hosted Weblate · Albanian](https://hosted.weblate.org/languages/sq/) - Hundreds of libre software projects that accept Albanian translations on Weblate.
- [translatewiki.net · Albanian](https://translatewiki.net/wiki/Portal:Sq) - Localizes MediaWiki, OpenStreetMap and other projects into Albanian.

### Projects

- [GNOME Albanian team](https://l10n.gnome.org/languages/sq/) - Translation status and team page for the GNOME desktop in Albanian.
- [LibreOffice · Albanian](https://translations.documentfoundation.org/languages/sq/) - Help translate the LibreOffice suite and its help pages into Albanian.

## Communities

*Komuniteti*. People, hackerspaces, meetups and conferences.

### Hackerspaces

- [~~Open Labs Hackerspace~~](https://opencollective.com/openlabs) 🇦🇱 - Tirana hackerspace that ran OSCAL, Wiki Weekend and FOSS Camp from 2012. Now archived, but its people are still around. *(archived)*
- [BONEVET](https://bonevet.org/) 🇽🇰 - Makerspaces and coding classes for kids and adults in Gjakova, Prishtina, Kaçanik, Kamenica and Mitrovica.
- [FLOSSK](https://flossk.org/) 🇽🇰 - Free Libre Open Source Software Kosova, a Prishtina NGO running a hackerspace, workshops and events since 2009.

### Conferences

- [Software Freedom Kosova](https://sfk.flossk.org/) 🇽🇰 - FLOSSK's annual international conference on free software and open knowledge in Prishtina.

### Meetups

- [GDG Tirana](https://gdg.community.dev/gdg-tirana/) 🇦🇱 - Google Developer Group in Tirana, running meetups, study jams and DevFest.
- [GDG Prishtina](https://gdg.community.dev/gdg-prishtina/) 🇽🇰 - Google Developer Group in Prishtina, running meetups and DevFest Kosovo.
- [Wikimedians of Albanian Language](https://meta.wikimedia.org/wiki/Wikimedians_of_Albanian_Language_User_Group) - The user group behind Albanian Wikipedia editathons, Wiki Loves Monuments and open-knowledge projects.

### Ecosystem

- [Innovation Centre Kosovo](https://ickosovo.com/) 🇽🇰 - Prishtina incubator and coworking hub for startups, tech training and the local ecosystem.
- [STIKK](https://stikk.org/) 🇽🇰 - Kosovo ICT Association, which publishes industry research and connects local tech companies.

## Learning & Reference

*Mësim*. Reading material and references for working in Albanian.

### Encyclopedias

- [Albanian Wikipedia](https://sq.wikipedia.org/) - Wikipedia in Albanian, with 100,000+ articles and a corpus and knowledge source anyone can edit.

### Dictionaries

- [Albanian Wiktionary](https://sq.wiktionary.org/) - Free multilingual dictionary in Albanian, with definitions, inflections and etymologies.

### Research

- [Glottolog · Albanian](https://glottolog.org/resource/languoid/id/alba1267) - The Albanian language family in Glottolog, with its varieties, codes and an extensive bibliography.
- [NLP for Albanian, a survey](https://ijece.iaescore.com/index.php/IJECE/article/view/28729) - A state-of-the-art survey of Albanian NLP research (2022) and a good map of what exists and what's missing.
- [Detecting Abusive Albanian](https://arxiv.org/abs/2107.13592) - The paper behind the Shaj dataset, on offensive language detection in Albanian social media.

## Contributing

Know a resource that belongs here? [Suggest it with the issue form](https://github.com/0xgitpushpray/awesome-albania/issues/new?template=suggest-resource.yml), or add it to [`data/resources.yml`](data/resources.yml) and open a pull request. See [CONTRIBUTING.md](CONTRIBUTING.md).

## License

[![CC0](https://licensebuttons.net/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)

To the extent possible under law, the contributors have waived all copyright and related rights to this list. The website source code is [MIT](LICENSE).
