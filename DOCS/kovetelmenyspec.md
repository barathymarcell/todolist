# ToDo Webalkalmazás Követelményspecifikáció

## Áttekintés

Ez a dokumentum azt ismerteti, hogy a webalkalmazásunk milyen követelményeket tartalmaz. Az alkalmazás egy egyszerű To-Do lista más néven egy kis jegyzet/emlékeztető ami segítségével a felhasználó könnyedén fejben tudja tartani a fontosabb eseményeit illetve dolgait. A listához hozzáadni eseményt illetve törölni is tud a felhasználó. Letisztult, egyszerű, felhasználóbarát kezelúfelületet biztosít, így a használata végtelenül egyszerű.

## Adaptáló Felület

- Az alkalmazásnak, a különböző eszközökön (például telefonok, táblagépek) is könnyen használhassák, reszponzív dizájnt kell alkalmazni.

## Tesztelés

- Az alkalmazást funkcionalitás és biztonság szempontjából alaposan le kell tesztelni.
- A tesztelés során számos különböző felhasználói esetet kell szimulálni, mint például hibás adatok megadása, vagy hálózati hiba.

## Dokumentáció

- Rendelkeznie kell az alkalmazásnak dokumentációval mint a felhasználók illetve fejlesztők számára, beleértve az API-dokumentációt valamint alkalmazás használatának lépéseit is.

## Kivételkezelések

- Már a listában létező elem ismételt hozzáadása esetén egy hibaüzenet ugrik fel, amely a felhasználó tájékoztatja a felhasználót az elem létezéséről.
- Üres elem hozzáadása esetén szinten hibaüzenetnek kell felugrania.

## Felhasználói Funkciók

- Feladatok hozzáadása: A felhasználó új feladatokat adhat a listához. Minden feladatnak rendelkeznie kell egy címmel és egy leírással.
- Feladatok szerkesztése: A felhasználó módosíthatja egy már meglévő feladatot.
- Feladatok törlése: A felhasználó törölheti a már létrehozott, de nem szükséges feladatokat.
- Feladatok megjelenítése: A felhasználó láthatja az általa létrehozott feladatokat a listában.
- Feladatok státuszának változása: A felhasználó megjelölhet a létrehozott feladatot "elvégzett"-nek vagy "nem elvégzett"-nek.
- Feladatok rendezése: A felhasználó különböző szempontok szerint rendezheti a már korábban létrehozott feladatokat.
- Keresés és szűrés: A felhasználó szűrési és keresési lehetőséget alkalmazhat a feladat listán, például kulcsszavak alapján.
- Prioritás beállítása: A felhasználó beállíthat prioritást a feladatokhoz.

## Színvakbarát Felület

- Az alkalmazás felületén megfelelő színeket kell alkalmazni, hogy színvak felhasználók számára is könnyen kezelhető legyen.
- A különböző funkciók és elemek megkülönböztetése ne csak a színekre épüljön, hanem egyéb vizuális jelzésekre is.
- Az alkalmazás kialakításakor kerülni kell, hogy a fonstos információk kizárólag színkódokkal legyenek ábrázolva.

## Cél

Cégünk célja egy egyszerú, letisztult és hatékony ToDo alkalmazás fejlesztése, amely megkönnyíti a felhasználók számára feladataik egyszerű tervezését, rendezését és nyomon követését. Az alkalmazás lehetőséget biztosít majd teendők létrehozására, szerkesztésére, törlésére, valamint a feladatok státuszának követésére.

## Megjegyzések

Ez a követelményspecifikáció átfogó képet ad az alkalmazás funkcionalitásáról és működéséről. A tervezési és fejlesztési folyamat során részletes tervezési dokumentáció és tesztelési terv is készül majd, amelyek pontosan meghatározzák a részletes követelményeket és funkciókat. A fejlesztés során figyelmet kell fordítani a felhasználói élményre és a megbízható működésre.