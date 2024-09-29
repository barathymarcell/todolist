# ToDo Webalkalmazás Tesztelési Jegyzőkönyv

## Bevezetés

Ez a tesztelési jegyzőkönyv dokumentálja a ToDo webalkalmazás funkcionális tesztelési folyamatát és eredményeit. A tesztelés célja az alkalmazás funkcionalitásának ellenőrzése és a követelményspecifikációban meghatározott követelmények teljesítése.

## Tesztek Listája

### 1. Új feladat hozzáadása

**Cselekvés:** Új feladatot adunk hozzá a cím és leírás megadásával.

**Várt eredmény:** A feladat megjelenik a feladatlistában.

### 2. Üres mezővel új feladat hozzáadása

**Cselekvés:** Megpróbálunk egy új feladatot hozzáadni üres mezőkkel.

**Várt eredmény:** Hibaüzenet jelenik meg, és a feladat nem kerül hozzáadásra.

### 3. Duplikált feladat hozzáadása

**Cselekvés:** Megpróbálunk egy már létező feladatot újra hozzáadni.

**Várt eredmény:** Hibaüzenet jelenik meg, és a feladat nem kerül hozzáadásra.

### 4. Feladat szerkesztése

**Cselekvés:** Egy meglévő feladat címét és leírását szerkesztjük.

**Várt eredmény:** A feladat a módosított adatokkal jelenik meg a feladatlistában.

### 5. Feladat törlése

**Cselekvés:** Egy meglévő feladatot törölünk.

**Várt eredmény:** A feladat eltűnik a feladatlistából.

### 6. Feladatok rendezése név alapján

**Cselekvés:** A feladatokat név szerint rendezzük.

**Várt eredmény:** A feladatok a cím alapján növekvő sorrendben jelennek meg a feladatlistában.

## Tesztelési Eredmények

| Teszteset száma | Cselekvés | Eredmény |
|-----------------|-----------|----------|
| 1               | Siker     | Siker    |
| 2               | Hiba      | Siker    |
| 3               | Siker     | Siker    |
| 4               | Siker     | Siker    |
| 5               | Siker     | Siker    |
| 6               | Siker     | Siker    |


## Tesztelési Megjegyzések

- Az összes teszt sikeresen lefutott.
- A hibaüzenet megjelenik üres mezővel új feladat hozzáadása esetén.
- A rendezés és a törlés is hibátlanul működik.

## Tesztelési Jelentés

Az alkalmazás sikeresen teljesítette a funkcionalitását ellenőrző teszteket, és minden követelménynek megfelel. A hibás cselekvések esetén megfelelő hibaüzenetek jelennek meg. Az alkalmazás megfelel a követelményeknek és a felhasználói elvárásoknak.
