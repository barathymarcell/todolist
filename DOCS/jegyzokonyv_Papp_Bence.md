## Tesztelési jegyzőkönyv

1. Webalkalmazás backend elindítása és futásának ellenőrzése:

A backend megfelelően fut, hibaüzenetet nem kapunk



2. Webalkalmazás frontend és backend együttes futásának ellenőrzése a localhost:5000-es porton

A backend és frontend együttesen megfelelően működik, fut a localhoston és megjeleníti a frontendet



3. CSS-ben leírtak szerint jelenik-e meg a webalkalmazás frontend része, nincs-e elcsúszás, megfelelő css tesztelése

A webalkalmazás letisztult, a css-ben leírtak szerint minden a helyén van, sehol nincs elcsúszás és kinézetbeli hiba



4. A ToDo webalkalmazás bemenetének tesztelése

A ToDo webalkalmazás bemenete tökéletesen működik,belekattintva és standard állapotba lehet bele írni, kikattintás esetén eltűnik a bemenet jel


5. Add ToDo gomb letesztelése, funkcionalitásnak megfelelően működik-e

Az "Add ToDo" gomb megfelelően működik, bemenet esetén a listánkba rakja az elemet és megjelenik a frontenden


6. Üres string esetén elfogadja-e a bemenetet az Add ToDo gombra kattintva

Üres string megadása esetén nem fogja belerakni a listánkba


7. Már szereplő elemet beletudunk rakni a listába tesztelése


Duplikálódott elemet nem fog belerakni a listába



8. Hibaüzenetet dob-e üres string addolása esetén

Hibaüzenet felugrik üres string esetén, ha nem írtunk semmit a bemenetbe és úgy akarjuk hozzáadni a todo-t

9. Hibaüzenetet dob-e duplikált hozzáadás esetén

Hibaüzenetet dob minden egyes olyan elemnél, amely már szerepel a listánkban


10. Elmenti-e a json backendbe a lista elemeit tesztelése

Leteszteltem, 10 elemmel

- cicát fürdetni
- kutyát sétáltatni
- kukát kidobni
- lefürdeni
- bankba menni
- autót mosni
- főzni
- projekten dolgozni
- edzeni
- olvasni

látható, hogy beletette az elemeket a json backendre

```
{
      "todo_text": "cicát fürdetni",
      "id": 1
    },{
      "todo_text": "kutyát sétáltatni",
      "id": 2
    },{
      "todo_text": "kukát kidobni",
      "id": 3
    },{
      "todo_text": "bankba menni",
      "id": 4
    },{
      "todo_text": "autót mosni",
      "id": 5
    },{
      "todo_text": "főzni",
      "id": 6
    },{
      "todo_text": "projekten dolgozni",
      "id": 7
    },{
      "todo_text": "edzeni",
      "id": 8
    },{
      "todo_text": "befizetni a számlákat",
      "id": 9
    },{
      "todo_text": "olvasni",
      "id": 10
    }
```

11. Törlés gomb tesztelése

Funkcionalitásának megfelelően működik, az adott listából eltűnik az elem


12. Módosítás gomb tesztelése

Funkcionalitásának megfelelően működik, módosítás esetén módosul az adott elem a listában

13. Módosítás üres stringre

Hibaüzenetet dob az üres string elemre és nem engedi a módosítást


14. Módosítás már létező elemre

Hibaüzenetet dob a már létező elemre és nem engedi a módosítást


15. Törlés megjelenése a backend json-ben

A törlés végrehajtásakor a backenden is látszik, hogy a törölt elem eltűnt


16. Módosítás megjelenése a backend json-ben

A módosítás végrehajtásakor a backenden is látszik, hogy a módosított elem módosult.


17. Sort A-Z-ig tesztelése


18. Sort Z-A-ig tesztelése


19. Különböző operációs rendszereken való tesztelés

-Windows

Megfelelően működött a windows rendszeren, de a fejlesztés is windows rendszeren történt

-MacOS

Megfelelően működött a MacOS rendszeren is, ugyanúgy mint windows rendszeren


20. Különböző böngészőkben való tesztelés

Az alábbi listában látható böngészőkben teszteltük és futott a webalkalmazásunk. Megfelelő működést mutattak

-Google Chrome

-Opera

-Safari

-Mozilla Firefox

-Microsoft Edge

## Végszó

A fenti tesztek sikeresek voltak, így kiadható az alkalmazásunk !

