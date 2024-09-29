## Tesztelési jegyzőkönyv - Barathy Marcell

## Backend elindítása és futtatása

A backend futása sikeresen végrehajtódik, nem észlelünk hibát a futtatás pillanatában.

## Webalkalmazás kompakt (Front-, egyben Backend) futtatása a localhost:3000-as címen

A felhasználói felület, illetve annak háttértárolása teljes funkcionalítással működik az adott porton, nem észleltem hibát futtatáskor.

## CSS állományban rögzített beállítások utáni futtatása a webalkalmazásnak

A webalkalmazás az elvárásoknak megfelelően működik, stíluselemek, és egyéb komponensek javítva.

## Szöveg rögzítésének kipróbálása

A ToDo webalkalmazás bemenete tökéletesen működik,belekattintva és standard állapotba lehet bele írni, kikattintás esetén eltűnik a bemenet jel
A webalkalmazás sikeresen felveszi a bekért szövegelemet a bemeneten keresztül és rögzíti a JSON alapú adatbázisban.

## 'Add ToDo' gomb működésének tesztelése

Sikeresen hozzáadva az alkalmazás struktúrájához, már képesek vagyunk a gomb segítségével rögzíteni a megadott tartalmakat.

## Nem rögzíthető üres sor követelményének kipróbálása

Üres string megadásával nem vagyunk képesek új elemet rögzíteni az alkalmazásban, ellenben hibaüzenetet kapunk. A funkció sikeresen hozzáadva és alkalmazható!

## Ismételt elem hozzáadása

Duplikálódott elemet nem fog mellérendelni az alkalmazás a listához, ellenben figyelmeztet minket a továbbfolyatásra. Ha mindenképp ragaszkodunk a rögzítéséhez, akkor egy ablakban jóváhagyhatjuk a folyamatot.

## A rögzített elemek valóban tárolva lesznek a lokális eszközön?

Leteszteltem az alkalmazás funkcionalítását és sikeresen rögzíteni tudtam öt elemet, melyeket az alábbi módon adtam meg.
Figyelembe vettem bizonyos karakterek használatát, mint a Unicode által szabványosított magyar ékezetes karaktereket, olyan speciális karaktereket, mint a '-' és a dollár jel. Végezetül több esetben is kipróbáltam a nagybetű érzékenység (case-sensitivity) különböző előfordulásait.
A bekért karakterek részemről a következők voltak:

- kutya
- Macska
- AUTÓ
- zsozso$
- fel-alá

látható, hogy beletette az elemeket a json backendre

```
{
      "todo_text": "kutya",
      "id": 1
    },{
      "todo_text": "Macska",
      "id": 2
    },{
      "todo_text": "AUTÓ",
      "id": 3
    },{
      "todo_text": "zsozsoo$",
      "id": 4
    },{
      "todo_text": "fel-alá",
      "id": 5
    }
```

## Törlés gomb tesztelése

Az elvárásnak megfelelően működött, sikeresen hozzáadva a programhoz.

## Módosítás gomb tesztelése

Az elvárásnak megfelelően működött, sikeresen hozzáadva a programhoz.

## Módosítás üres stringre

Üres sor esetén hibaüzenetet kapunk a folyamat futtatásakor, mivel az alkalmazás nem engedi módosítani az üres stringet.

## Módosítás már létező elemre

Már létező elem esetén hibaüzenetet kapunk a folyamat futtatásakor, mivel az alkalmazás nem enged hozzáadni már létező elemet normális esetben.

## Törlés megjelenése a backend json-ben

A törlés végrehajtásakor visszakövethető a tárolásnál, hogy az adott törölt elem eltűnt, így az alábbi funkció sikeresen hozzáadva a programhoz.

## Módosítás megjelenése a backend json-ben

A törlés végrehajtásakor visszakövethető a tárolásnál, hogy az adott módosult elem sikeresen szerkesztve lett, így az alábbi funkció sikeresen hozzáadva a programhoz.

## A-tól Z-ig történő rendezés futtatása

A rögzített elemek A-tól Z-ig történő rendezése sikeresen végrehajtódik, minden elem esetén szemlélve lesznek a karakteres értékek helye az angol ABC-t követve.

## Z-től A-ig történő rendezés futtatása

A rögzített elemek Z-től A-ig történő rendezése sikeresen végrehajtódik, minden elem esetén szemlélve lesznek a karakteres értékek helye az angol ABC-t követve.

## Windows alapú operációs rendszereken történő tesztelés

Sikeresen végrehajtódott Windows 11 Home alapú operációs rendszeren, egyéb futtatási hiba előfordulása nélkül.


## Zárszó

A Todo Alkalmazás kiemelkedően sikeres és hibamentesen fut, biztosítva ezzel a felhasználók számára zökkenőmentes élményt a feladatok kezelésében. A stabil működés és a rendszeres frissítések révén az alkalmazás minden fontos funkciója könnyen elérhető és megbízható. A felhasználók pozitívan reagálnak az egyszerű használhatóságra és a megbízható teljesítményre, ami hozzájárul az alkalmazás népszerűségéhez és sikeréhez. Az alkalmazás fejlesztői továbbra is elkötelezettek a minőségi működés és a felhasználói elégedettség mellett, így a jövőben is számíthatunk a megbízható és sikeres futásra.
