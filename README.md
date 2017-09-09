# restapi
Uppgift 1 digital infrastruktur.

Ett RESTful API som hanterar meddelanden som visas på en [webbsida](http://nile16.nu/mess). Meddelandena lagras med CouchDB. API:et realiseras av en node.js server. Webbsidan använder PouchDB. 

## API beskrivning.

### Läs ett meddelande
GET    http://nile16.nu:1250/{id}  
Om {id} utelämnas skickas alla meddelanden  
Exempel: GET http://nile16.nu:1250/12

### Lägg till ett meddelande
POST   http://nile16.nu:1250/{id}/{title}/{prio}/{message}/{author}  
Exempel: POST http://nile16.nu:1250/123/Warning/2/Snökaos att vänta/Vägverket

### Ändra ett meddelande
PUT    http://nile16.nu:1250/{id}/{title}/{prio}/{message}/{author}  
Exempel: PUT http://nile16.nu:1250/123//1/Snökaos och kyla att vänta//

### Ta bort ett meddelande
DELETE http://nile16.nu:1250/{id}  
Exempel: DELETE http://nile16.nu:1250/123/
