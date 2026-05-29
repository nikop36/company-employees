# Company Employees — Advansys test

Živjo! Tu je moja rešitev za AngularJS developer test.

## Kako zagnati

```bash
npm install
npm run build:css
npm run serve
```

Nato odpri [http://localhost:8080](http://localhost:8080).

> Če želiš sproti videti spremembe, zamenjaj `build:css` z `npm run watch:css` v ločenem terminalu — samodejno bo rebuilda style-e ob vsaki spremembi.

## Kaj sem naredil

- Tabela zaposlenih, ki podatke potegne iz JSONPlaceholder API-ja prek factory-ja
- Klik na vrstico jo označi in odpre panel z **podrobnostmi uporabnika** (AngularJS komponenta z `ng-if`)
- Označevanje vrstice dela z `ng-class` — modra barva za izbrano vrstico, izmenjevanje barv za ostale
- V panelu je gumb za brisanje, ki sproži potrditveni dialog
- Tako panel z detajli kot potrditveni dialog uporabljata isto `popup` komponento — tu pride do izraza `ng-transclude`
- `onLongPress` direktiva na vsaki vrstici — drži 600ms in poglej browser konzolo
- Stilizirano s Tailwind CSS (CLI build, brez CDN-ja)

## Struktura

```
app/
  app.module.js
  app.controller.js
  factories/       ← API klic je tukaj
  directives/      ← onLongPress direktiva
  components/
    popup/         ← ponovna uporabna modalna komponenta z ng-transclude
    user-details/  ← panel z detajli + potrditveni dialog za brisanje
```
