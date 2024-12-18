# bibliotheque-ts
bibliotheque med typescript


#install:
npm init -y
npm install typescript --save-dev
npm install lite-server --save-dev

npm init -y
npm install typescript ts-node @types-node --save-dev
npx tsc --init
npx tsc


#compiling:
tsc // compile all ts files 
tsc src/main.ts    

node dist/main.js
tsc && node dist/main.js

Beskrivning av mappar och filer:
src/: Källkod för applikationen.

index.html: HTML-struktur för hela applikationen.
main.ts: Huvudskript som importerar och hanterar alla moduler.
interfaces/: Innehåller alla datatyper definierade som TypeScript-interfacen.
Book.ts: Definierar hur bokdatan ska se ut.
components/: Varje komponent har sin egen modul, uppdelad efter funktionalitet.
BookList.ts: Funktioner för att hämta och rendera boklistan.
BookDetails.ts: Funktioner för att visa detaljerad information om en bok.
SearchBar.ts: Funktioner för att skapa sökfältet och hantera sökningar.
styles/: CSS-filer för att styla applikationen.
styles.css: Grundläggande stilar för applikationen.
dist/: Här placeras de kompilerade JavaScript-filerna. Genereras automatiskt av TypeScript-kompilatorn.

tsconfig.json: Konfigurationsfil för TypeScript-kompilatorn.

package.json: Innehåller projektets beroenden och skript för att starta projektet.

package-lock.json: Skapas automatiskt och låser exakta versioner av beroenden.



mini-library/
│
├── src/
│   ├── index.html               # Huvudfil för HTML-strukturen
│   ├── main.ts                  # Huvudfil för applikationens logik
│   ├── interfaces/              # För interfaces
│   │   └── Book.ts              # Interface för bokdata
│   ├── components/              # För komponenter
│   │   ├── BookList.ts          # Lista alla böcker
│   │   ├── BookDetails.ts       # Visa bokdetaljer
│   │   └── SearchBar.ts         # Sökfält
│   └── styles/                  # För CSS-stilar
│       └── styles.css           # Grundläggande stilar
│
├── dist/                        # Kompilerad output från TypeScript (genereras automatiskt)
│
├── tsconfig.json                # TypeScript-konfiguration
├── package.json                 # NPM-konfiguration
└── package-lock.json            # Låser beroenden


Slutresultat
Lista alla böcker: Visar böcker med information om titel, författare, förlag och målgrupp.
Detaljvy: Klicka på en bok för att se mer information.
Sökfunktion: Sök efter böcker via titel.



Kan detta automatiseras?
Ja! Det finns några sätt att undvika att manuellt lägga till .js i TypeScript-importer:

1. Använd en bundler som Vite, Webpack eller Parcel
En bundler hanterar importvägar automatiskt och sammanfogar moduler till en enda fil (eller ett fåtal filer). Då behöver du inte tänka på .js i dina importer.

2. TypeScript-alternativ för Node.js (om serverbaserat)
Om du bara kör i en Node.js-miljö, kan du använda "moduleResolution": "node" i din tsconfig.json. Men detta fungerar inte i webbläsaren utan en bundler.

Slutsats
Du behöver lägga till .js i importvägar i TypeScript för att möta webbläsarens krav på ES-moduler. Det är inte något TypeScript kräver, utan ett krav från webbläsarens modulladdare. Genom att använda en bundler kan du eliminera detta krav helt. 



