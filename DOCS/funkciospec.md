# Funkcionális Követelmények az alkalmazásban

## Felhasználói Felület

- Az alkalmazás közepén helyezkedik el egy téglalap/négyzet, amely tartalmazza a todo-lista funkciókat.
- Az alakzat felső részében található egy input mező, ahol a felhasználók tevékenységeket írhatnak be.
- Az input mező alatt megjelennek a beírt tevékenységek listája egymás alatt és ezt menti is.

## Tevékenységek Kezelése

- A felhasználók csak akkor tudják hozzáadni a tevékenységeket, ha az input mező nem üres.
- Az alkalmazás nem engedi a duplikált tevékenységek hozzáadását, azaz nem lehet két azonos nevű tevékenységet hozzáadni.
- Minden tevékenység mellett található egy kuka ikon, amely segítségével törölhetők a tevékenységek.
- A törölt tevékenységeket az alkalmazás eltávolítja a listából.

## Rendezés

- A felhasználók a tevékenységeket sorrendezhetik az alkalmazásban.
- A sorrendezés lehetőséget ad a tevékenységek név, dátum vagy prioritás alapján történő rendezésére.

## Háttérrendszer

- Az alkalmazás egy JSON backendet használ a tevékenységek tárolására és kezelésére.
- A tevékenységek a háttérrendszerben tárolódnak, és az alkalmazás betölti őket a kezdőképernyőn.

## Üres Lista

- Abban az esetben, ha az alkalmazásban egyetlen tevékenység sem szerepel megjelenik a "Nincs ToDo" felirat a háttérben.

## Nem Funkcionális Követelmények

- Az alkalmazásnak intuitív és felhasználóbarát platformmal kell rendelkeznie.
- Az alkalmazásnak gyorsan illetve stabilan kell működnie.
- Az alkalmazásnak biztonságosnak kell lennie, valamint a felhasználói adatokat bizalmasan kell kezelnie.