## To-Do Alkalmazás Rendszerterv - Leírás

## 1. Bevezetés:
A Todo List alkalmazás egy felhasználóbarát feladatkezelő rendszer, amelyet úgy alkottak meg, hogy mind az egyének, mind a csapatok számára segítséget nyújtson a napi tevékenységek racionalizálásában és optimalizálásában. A mai rohanó világban a szervezettség megőrzése kiemelkedő fontosságú, és ez az alkalmazás megbízható szövetségesként szolgál ebben a törekvésben. Az egyszerűségre és hatékonyságra összpontosítva, architektúráját gondosan átgondolták, hogy zökkenőmentes felhasználói élményt nyújtson.

A rendszer lényege, hogy bonyolult, mégis intuitív kialakítással büszkélkedhet (különösen a színvakok számára barátságos), amely lehetővé teszi a felhasználók számára, hogy könnyedén kezeljék feladataikat és felelősségi köreiket. Az alkalmazás több kulcsfontosságú összetevőre tagolódik, amelyek együttesen működnek a maximális hatékonyság érdekében. Ezek az összetevők közé tartozik a felhasználóbarát kezelőfelület, egy robusztus feladat létrehozási és kezelési rendszer, egy értesítési rendszer, amely tájékoztatja a felhasználókat a közelgő feladataikról, valamint egy együttműködési funkció, amely megkönnyíti a csapatmunkát és a projektmenedzsmentet.

A felhasználóbarát felületet a hozzáférhetőség és a könnyű használat szem előtt tartásával tervezték, így minden technológiai háttérrel rendelkező felhasználó számára alkalmas. Lehetővé teszi a felhasználók számára a feladatok gyors létrehozását, kategorizálását és rangsorolását mindössze néhány kattintással vagy koppintással. Emellett az alkalmazás testreszabási lehetőségeket kínál, így a felhasználók egyedi igényeikhez és preferenciáikhoz igazíthatják feladatlistáikat.

A Todo List alkalmazás egyik kiemelkedő jellemzője az értesítési rendszer. A felhasználók emlékeztetőket állíthatnak be a fontos feladatokra, határidőkre és találkozókra, így biztosítva, hogy semmi se maradjon ki a rostán.

Az alkalmazás ráadásul ösztönzi a csapattagok közötti együttműködést. A csapatok közös feladatlistákat hozhatnak létre, feladatokat rendelhetnek ki konkrét csapattagokhoz, és közösen követhetik nyomon az előrehaladást. Ez elősegíti a hatékony kommunikációt és javítja a projektmenedzsment képességeket, így felbecsülhetetlen értékű eszköz a kis és nagy csapatok számára egyaránt.

## 2. Rendszerarchitektúra:
A Todo List alkalmazás ügyfél-kiszolgáló architektúrát követ, amely a következő fő komponensekből áll:

- 2.1. Ügyfél-oldal:

Felhasználói felület (UI): A Todo List alkalmazás rendszerarchitektúráját úgy tervezték meg, hogy a felhasználók számára kivételes és felhasználóbarát felületet biztosítson, amely az alkalmazás használhatóságának és vonzerejének középpontjában áll. Az architektúra nagy hangsúlyt fektet a frontendre, amely a felhasználói felület (UI) megjelenítéséért és az összes felhasználói interakció kezeléséért felelős.

## Felhasználói felület (UI):

- **Navigációs sáv:** A webalkalmazás felső részén található egy navigációs sáv, ahol a felhasználók különböző műveleteket tudnak választani.

- **Feladatok listázása:** A fő tartalomterületen a feladatok listája jelenik meg. Minden feladatot a címükkel és egyéb részletekkel jelenítünk meg (pl. határidő, státusz).

- **Műveletek gombok:** Minden feladat mellett elérhetőek műveletek gombok, például "Töröl," "Módosít," és "Hozzáad." Ezek a gombok lehetővé teszik a felhasználók számára, hogy az adott feladattal kapcsolatos műveleteket végezzenek.

## Feladatok kezelése:

- **Feladat hozzáadása:** A "Hozzáad" gombra kattintva a felhasználó új feladatot adhat hozzá a rendszerhez. Egy párbeszédablakban megjelenik egy űrlap, amelyen kitölti a feladat részleteit, például a címet és a határidőt.

- **Feladat törlése:** A "Töröl" gombra kattintva a felhasználó törölheti a kiválasztott feladatot. A rendszer megerősítést kérhet a törlés előtt.

- **Feladat módosítása:** A "Módosít" gombra kattintva a felhasználó módosíthatja a kiválasztott feladat adatait. Egy űrlap jelenik meg, amely lehetővé teszi a cím és a határidő módosítását.



## Kommunikáció a backenddel:

- A frontend kommunikál a backend szerverrel, hogy elmentse, módosítsa és törölje a feladatokat. A backend végzi a feladatok adatbázisba történő mentését és frissítését, majd visszaküldi a frissített adatokat a frontendnek.

### Kommunikáció a Webalkalmazás Komponensei Között

1. **Felhasználói felület (User Interface, UI):**
   - Az első réteg a webalkalmazásban a felhasználói felület, amelyet a böngésző rendszerében jelenít meg.
   - A felhasználói felület interaktív elemeket tartalmaz, mint például gombok, szöveges mezők, és listák.
   - A felhasználói felület az emberi felhasználóval való interakciót szolgálja, és a felhasználó által végzett műveletek (kattintások, bevitel, stb.) itt indulnak.

2. **Böngésző (Browser):**
   - A böngésző felelős a weboldal megjelenítéséért és a felhasználói interakció kezeléséért.
   - A böngésző tartalmazza a Rendering Engine-t, ami felelős a HTML, CSS és JavaScript kód megjelenítéséért a képernyőn.
   - A böngésző a HTTP kéréseket küldi és fogadja a válaszokat a szerverrel való kommunikációhoz.

3. **Rendering Engine:**
   - A Rendering Engine felelős a weboldalak vizuális megjelenítéséért.
   - A HTML és CSS kódok alapján rendezi és rajzolja ki a weboldalt a képernyőn.
   - A JavaScript kód futtatásához szükséges interakciókat is kezeli, például események kezelését és DOM manipulációt.

4. **Network (Hálózat):**
   - A Network réteg felelős a hálózati kommunikációért, különösen az adatkérések és válaszok elküldéséért és fogadásáért a szerverrel.
   - Ez a réteg HTTP kéréseket küld a szervernek, például az adatlekérésekhez vagy frissítésekhez.

5. **JavaScript Interpreter:**
   - A JavaScript Interpreter felelős a JavaScript kód futtatásáért a böngészőben.
   - Ez a réteg értelmezi és végrehajtja a JavaScript kódot, ami lehetővé teszi az interaktivitást és a dinamikus viselkedést az alkalmazásban.
   - A JavaScript Interpreter kommunikál a böngésző más részeivel, például a DOM-mal (Document Object Model) és a Network réteggel.

6. **UI Backend:**
   - Az UI Backend egy háttérkomponens, amely segíti a UI-t a háttérben lévő folyamatok kezelésében.
   - Például, ha a felhasználó egy új ToDo elemet ad hozzá, az UI Backend feladata lehet az adatok mentése a perzisztens adatbázisban, például egy szerveren vagy böngészőben tárolt helyi adatbázisban.

7. **Perzisztens adat (Persistent Data):**
   - A perzisztens adatok olyan adatok, amelyek hosszú távra tárolódnak, és általában a felhasználó által létrehozott vagy módosított információkat tartalmazzák.
   - Ezek az adatok az alkalmazás szempontjából kulcsfontosságúak, mivel hosszú távra tárolják a felhasználók ToDo elemeket, például egy szerveren vagy a böngészőben tárolt helyi adatbázisban.


Az ábra ezen komponensei és azok közötti kommunikáció lehetővé teszik a webalkalmazások működését, a felhasználók interakcióit, a dinamikus tartalom kezelését, és az adatok hosszú távú tárolását. A felhasználói műveletek (pl. új ToDo hozzáadása vagy törlése) az UI-n keresztül indulnak, majd a JavaScript Interpreter, Network és UI Backend rétegek közreműködésével érintik a perzisztens adatokat. A Rendering Engine pedig az UI-t frissíti a változások megjelenítéséhez a felhasználónak.


A frontend komponens gondosan kidolgozott, hogy zökkenőmentes és intuitív felhasználói élményt biztosítson. Különböző elemekből és funkciókból áll, amelyek együttesen járulnak hozzá a hatékonyságához:

Felhasználóbarát kialakítás: A felhasználói felület tiszta és felhasználóbarát tervezési filozófia alapján készült. Minimalista, mégis vizuálisan vonzó elrendezést alkalmaz, amely minimalizálja a rendetlenséget és maximalizálja a felhasználó feladataira való összpontosítást. A világos tipográfia, az intuitív ikonok és a színek kiegyensúlyozott használata fokozza az olvashatóságot és a használhatóságot.

Feladatkezelési műszerfal: A fő műszerfal a felhasználók számára a feladatok megtekintésére és kezelésére szolgáló központi csomópont. Egy pillanat alatt áttekintést nyújt a feladatlistákról, a közelgő határidőkről és az értesítésekről. A felhasználók erről a központi helyről könnyedén hozzáférhetnek a feladatlistáikhoz, rangsorolhatják a feladatokat, és újakat adhatnak hozzá.

Feladat létrehozása és szerkesztése: A feladatok létrehozása és szerkesztése egyszerű folyamat. A felhasználók gyorsan hozzáadhatnak új feladatokat, kijelölhetik az esedékességi dátumokat, prioritásokat állíthatnak be, és listákba kategorizálhatják a feladatokat. A gazdag szövegszerkesztési lehetőségek lehetővé teszik a felhasználók számára, hogy részletes leírásokat és jegyzeteket adjanak a feladatokhoz.

Testreszabási lehetőségek: A felhasználói felület testreszabási lehetőségeket kínál az egyéni preferenciáknak megfelelően. A felhasználók személyre szabhatják a témát, kiválaszthatják a megjelenítési preferenciákat és beállíthatják az értesítési beállításokat, hogy az alkalmazást saját igényeikhez igazítsák.

Visszajelzési mechanizmus: A felhasználói felület tartalmaz egy visszajelzési mechanizmust, amely lehetővé teszi a felhasználók számára, hogy közvetlenül az alkalmazáson belül adjanak be információkat, jelentsenek problémákat és javasoljanak fejlesztéseket. Ez biztosítja, hogy a felhasználói visszajelzéseket aktívan összegyűjtik és figyelembe veszik a jövőbeli fejlesztéseknél.

- 2.2. Szerveroldali:

A Todo List alkalmazás szerveroldali komponense kritikus szerepet játszik a rendszer megbízhatóságának, biztonságának és teljesítményének biztosításában. Ez szolgál a gerincként, amely az ügyfelek (frontendek) és a backend-szolgáltatások közötti adattárolást, feldolgozást és kommunikációt kezeli. Íme a szerveroldali architektúra részletes bontása:

Webkiszolgáló: Egy webkiszolgálót, például JSON-t alkalmaznak az ügyfelektől érkező HTTP-kérések kezelésére. Közvetítőként működik a frontend és a backend között, és a kéréseket a megfelelő backend-szolgáltatásokhoz irányítja.

API-réteg: Az API-réteg olyan végpontokat tesz közzé, amelyek lehetővé teszik, hogy a frontend interakcióba lépjen a backend szolgáltatásokkal. A RESTful vagy GraphQL API-kat általában a feladatok, listák és felhasználói fiókok CRUD (Create, Read, Update, Delete) műveleteinek lehetővé tételére használják. Az API végpontok kezelik a felhasználói hitelesítést és engedélyezést is, biztosítva az adatokhoz való biztonságos hozzáférést.

Üzleti logika: A kiszolgálóoldali logika tartalmazza az alkalmazás alapvető funkcióit. Ez olyan feladatokat foglal magában, mint a feladat létrehozása, módosítása, feladatkiosztás, listaszervezés és az értesítések ütemezése. Az üzleti logika biztosítja, hogy az alkalmazás a felhasználói elvárásoknak és az üzleti szabályoknak megfelelően működjön.

Skálázhatóság és terheléskiegyenlítés: Az architektúrát úgy tervezték, hogy skálázható legyen a megnövekedett felhasználói terhelések kezeléséhez. A terheléselosztók a bejövő forgalmat több szerverpéldány között osztják szét a magas rendelkezésre állás és a kérések egyenletes elosztása érdekében.

Biztonsági mentés és katasztrófa-helyreállítás: Az adatbázis és az alkalmazási adatok rendszeres biztonsági mentése elengedhetetlen. A katasztrófa-helyreállítási tervek biztosítják az adatok sértetlenségét és rendelkezésre állását előre nem látható események esetén.

## 3. Fő jellemzők:

- 3.2 Feladatkezelés:

A Todo List alkalmauás rendszerarhitektúrájának feladatkezelési része a rendszer funkcionalitásának középpontjában áll. Különböző komponenseket és folyamatokat foglal magába, amelyek lehetővé teszik a felhasználók számára a hatékony létrehozást, rendszerezést, nyomon követést és interaktálást a létrehozott feladatokkal. Az alábbiakban részletesen bemutatjuk az architectúra feladatkezekési aspektusát.

Feladat adatszerkezet: A feladatkezelési rendszer középpontjában egy jól meghatározott adaszerkezet áll, amely a feladatokat reprezentálja. Minden deladat jellemzően olyan attribútomokat tartalmaz, mint a cím, leírás, az esedékesség dátuma, a prioritási szint, a kategória vagy a címkék, illetve a státusz (pl.: befejezett vagy függőben lévő).

Feladat létrehozása és módosítása: A felhasználók új feladatokat hozhatnak létre a frontend felületen keresztül. Amikor egy feladatok létrehoznak, az API-hívásokon keresztül elküldik a backendnek, valamint az adatbázisban tárolják. A felhasználók a meglévő feladatokat is módosíthatják, frissíthetik az olyan attribútumokat, mint az esedékesség, a prioritások vagy a leírások.

Feladatlisták és kategóriák: A feladatlisták vagy kategóriák lehetőséget biztosítanak a felhasználók számára a feladataik rendszerezésére. A felhasználók több listát is létrehozhatnak a személyes és a munkával kapcsolatos feladatok elkülönítésére, ami megfelel az igényeiknek. Ez a funkció javítja a szervezést, és segít a felhasználóknak a feladatok meghatározott csoportjaira öszpontosítani.

Feladatok rendszerezése és szűrése: Annak érdekében, hogy a felhasználók megjegyzéseket és jegyzeteket adhatnak a feladatokhoz, hogy további kontextust vagy részleteket adjanak meg. Ez a funkció segíti a csapatokon belüli kommunikációt, és biztosítja a feladatban érintetteknek, hogy egy oldalon álljanak.

Feladatteljesítés és előzmények: A felhasználók megjelölhetik a feladatokat befejezettként. A befejezett feladatok általában archiválásra kerülnek, vagy egy külön részbe kerülnek, így a felhasználókáttekinthetik a feladattörténetüket, és tisztán tarthatják a feladatlistát.

Adatszinkronizálás: A kollaboratív beállításoknál az adatok szinkronizálása kulcsfontosságú. Az architectúre biztosítja, hogy a feladatok és a frissítések szinkronizálása valós időben vagy közel valós időben történjen a csapattagok közötti konzisztencia fenntartása érdekében.

- 3.3 Szervezeti lista:

Lista adatszerkezet: A listaszervezés egy jól meghatározott adatszerkezettel kezdődik, amely a feladatlistákat reprezentálja. Minda lista jellemzően olyan attribútumokat tartalmaz, mint a név, a leírás, a létrehozás dátuma és a jogosultságok (pl.: privát vagy megosztott).

Lista létrehozása és módosítása: A felhasználó új feladatlistákat hozhatnak létre a frontend felületen keresztül. Amikor egy lista létrejön, az a backend-adatbázisban tárolódik a hozzá tartozó metaadatokkal együtt. A felhasználók a meglévő listákat is módosíthatják, frissítve az olyan attribútomokat, mint a lista neve vagy leírása.

A listák rendezése és szűrése: Az alkalmazás rendezési és szűrési lehetőségeket kínál a listálhoz, hogy a felhasználók könnyebben megtalálják és kezeljék azokat. A felhasználók a listákat név, létrehozás dátuma vagy más egyéni kritériumok alapján rendezhetik. A szűrés lehetővé teszi a felhasználók számára, hogy kategóriák, címkék vagy jogosultságok alapján meghatározott listakészleteket jelenítség meg.

Listák archiválása: Idővel a felhasználók nagyszámú listát halmozhatnak fel. A tiszta és rendezett munkaterület fenntartása érdekében az alkalmazás listák archiválását kínálhatja. A felhasználók archiválhatják azokat a listákat, amelyeket már nem használnak aktívan, így azok kikerülnek a fő nézetből, de referenciaként továbbra is elérhetőek maradnak.

Listaszervezési eszközök: A felhasználók átrendezhetik a listák sorrendjét, csoportosítva azokat preferenciák szerint. A drag-and-drop funkció lehetővé teszi a listák egyszerű átrendezését, így a felhasználók szükség szerint rangsorolhatják és rendezhetik azokat.

Listák együttműködési funkciói: A megosztott listákon együttműködési funkciók állnak rendelkezlsre. A felhasználók a listán belül feladatokat rendezhetnek a csapattagokhoz, megjegyzéseket adhatnak a listaelemekhez, és közösen követhetik nyomon a feladatok előrehaladását. Ezek a funkciók elősegítik a hatékony csapatmunkát és projektmenedzsmentet.

Integráció a feladatkezeléssel: A listaszervezés szorosan integrálódik a  feladatkezeléssel. A felhasználók könnyedén létrehozhatnak feladatokat az egyes listákon belül, és a feladatok a szülőlistákhoz kapcsolódnak. Ez a kapcsolat biztosítja a feladatok megfelelő szervezését és kategorizálását.

Adatok szinkronizálása: Együttműködési környezetben az adatok szinkronizálása létfontosságú annak biztosításához, hogy a listaváltozások valós időben vagy közel valós időben tükröződjenek a csapat minden tagja számára.

- 3.4 Értesítések:

Feladattal kapcsolatos értesítések: A feladattal kapcsolatos értesítéseket olyan műveletek váltják ki, mint például a feladat létrehozása, az esedékességi időpontok kijelölése, a feladat befejezése vagy a feladat másoknak történő kijelölése. Amikor egy felhasználó létrehoz vagy módosít egy feladatot, az értesítési rendszer megfelelő értesítéseket küld a kijelöl címzetteknek.

Értesítési sablonok: Az értesítési üzeneteket gyakran sablonok segítségével előre definiálják. Ezek a sablonok lehetővé teszik az üzenetek egységes formázását és tartalmát. A sablonok testre szabhatók, hogy tartalmazzák a feladat részletei, az esedékességi dátumokat és egyéb releváns információkat.

Értesítési előzmények: A felhasználók hozzáférhetnek a kapott értesítések előzményeihez. Ez a funkció nyilvántartást biztosít a korábbi értesítésekről és emlékeztetőkről, ami hasznos lehet a hivatkozás és a nyomon követés szempontjából.

Értesítési beállítások tárolása: A felhasználói értesítési preferenciák biztonságosan tárolódnak a backend adatbázisban. A felhasználók ezeket a beállításokat bármikor frissíthetik az alkalmazás beállításain keresztül.

Értesítési naplók és nyomon követés: Az értesítések állapotának nyomon követésére részletes naplók és felügyeleti eszközök állnak rendelkezésre. Ez segít a rendszergazdáknak azonosítani és kezelni az értesítési rendszerrel kapcsolatos problémákat, biztosítva az értesítések megbízható kézbesítését.

Értesítési kézbesítési jelentések: Kritikus értesítések esetén kézbesítesi jelentések készíthetők. Ezek a jelentések megerősítik, hogy az értesítések sikeresen elküldésre és fogadásran kerültek-e. A kézbesítési jelentések hasznosak lehetnek a fontos frissítések nyomon követéséhez és a felhasználók tájékoztatásának biztosításához.

Hibakezelési és újraporóbálási mechanizmusok:Az architectúra tartalmaz  hibakezelési és újrakezelési mechanizmusokat az értesítések kézbesítési hibáinak kezelésére. Ha egy értesítést nem lehet azonnal kézbesíteni (pl.: hálózati problémák miatt), a rendszer újra megkíséreli a kézbesítést, hogy a felhasználók megkapják az információt.

