# Tesztelési Jegyzőkönyv

1. **Üres Todo hozzáadása**:  
   - Üres ToDo-t nem lehet hozzáadni a listához. Ha az "Add todo" gombra kattintunk, megjelenik egy "You cannot add an empty todo!" figyelmeztetési ablak.

2. **Új Todo hozzáadása**:  
   - Ha beírunk egy új ToDo-t és rákattintunk a "Add todo" gombra, akkor hozzá lesz adva a ToDo a listához.

3. **Duplikált Todo hozzáadása**:  
   - Ha megpróbálunk hozzáadni egy olyan ToDo-t, ami már szerepel a listán, akkor megjelenik a "Duplicate Todo" figyelmeztetési ablak.
   - Ha az "Add Anyway" gombra kattintunk, akkor hozzáadja a listához a ToDo-t.

4. **Todo törlése megerősítéssel**:  
   - Ha egy ToDo-t szeretnék törölni a "Delete" ikonnal, akkor kér megerősítést, amit az "OK" gombbal tudunk megerősíteni. A ToDo eltűnik a listáról.

5. **Todo törlése megerősítés nélkül**:  
   - Ha egy ToDo-t szeretnék törölni a "Delete" ikonnal, akkor kér megerősítést, de ha a "Cancel" gombra kattintunk a ToDo nem lesz törölve a listáról.

6. **Todo szerkesztése megerősítéssel**:  
   - Ha szerkeszteni szeretnénk egy már meglévő ToDo-t, akkor megerősítést kér és az "OK" gombbal tudjuk elfogadni. 
   - Új szöveg beírása esetén és az "Enter" billentyű lenyomása után a ToDo szövege módosul a listán.

7. **Todo szerkesztése megerősítés nélkül**:  
   - Ha szerkesztés során a megerősítésnél a "Cancel" gombra kattintunk, akkor a ToDo szövege nem módosul a listán.

8. **ToDo lista rendezése A-Z**:  
   - A "Sort A-Z" gombra kattintva a ToDo-k A-tól Z-ig sorrendben jelennek meg.

9. **ToDo lista rendezése Z-A**:  
   - A "Sort Z-A" gombra kattintva a ToDo-k Z-től A-ig sorrendben jelennek meg.

10. **ToDo lista betöltése**:  
    - A ToDo-k megfelelően betöltődnek-e a lista kezdeti betöltésekor, amikor a komponens elindul.

11. **Backend hívások sikeresek**:  
    - A HTTP kérések a backend szerver felé sikeresen megtörténnek, és a válaszok megfelelő adatokat tartalmaznak.

12. **Szöveg bevitele és Enter lenyomása**:  
    - Ha egy szöveget beírunk az "Enter" billentyű lenyomásával hozzá adja a ToDo-t a listához.

13. **"Add ToDo" gomb működése**:
    - A ToDo-t az "Add ToDo" gomb segítségével hozzá tudjuk adni a listához.

14. **Backend elindítása és futása**:
    - A backend megfelelően fut és nem kapunk hibaüzenetet.

15. **CSS ellenőrzése**:
    - A webalkalmazás a CSS-ben leírtak szerint működik. Nincs sem kinézetbeli hiba, sem elcsúszás.

16. **Törlés megjelenése a backend json-ben**:
    - A törlés végrehajtásakor látható a backendben, hogy a törölni kívánt elem valóban törölve lett.

17. **Különböző böngészőkben való tesztelés**:
    - A webalkalmazás az alábbi böngészőkben megfelelő működést mutatott:
      - Mozilla Firefox
      - Microsoft Edge
      - Google Chrome
      - Opera

**Összegzés**: Az alkalmazás az összes tesztnél megfelelő működést mutatott. Megfelel a követelményeknek és a felhasználói elvárásoknak egyaránt.
