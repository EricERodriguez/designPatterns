// Patrón adaptador: Este patrón nos permite convertir la interfaz de una clase en otra que se adapte a nuestras necesidades, consiguiendo de esta forma que ambas clases puedan convivir sin problema.

(async () => {
    /* ------------------------------ */
    class oldClass {
        constructor() {
            this.url = '';
        }
        setURL(url) {
            this.url = url;
        }
        call(cb) {
            const xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                const readyState = this.readyState;
                const status = this.status;
                if (readyState === 4 && status === 200) {
                    cb(JSON.parse(this.responseText));
                }
            };
            xhttp.open("GET", this.url, true);
            xhttp.send();        
        }
    }
    oldC.setURL('https://swapi.dev/api/');
    oldC.call((data) => console.log('Old class', data));
    /* ------------------------------ */
    /* ------------------------------ */
    class newClass {
        constructor() {
            this.url = '';
        }
        setURL(url) {
            debugger;
            this.url = url;
        }
        async call() {
            debugger;
            return await (await fetch(this.url)).json();
        }
    }
    const newC = new newClass();
    newC.setURL('https://swapi.dev/api/');
    const data = await newC.call();
    console.log('New class', data);
    /* ------------------------------ */
    /* ------------------------------ */
    class adapterClass {
        constructor() {
            debugger;
            this.url = '';
            this.newClass = new newClass();
        }
        setURL(url) {
            debugger;
            this.newClass.setURL(url);
        }
        async call(cb) {
            debugger;
            const result = await this.newClass.call();
            cb(result);
        }
    }
    const adapterC = new adapterClass();
    // Tenemos la sintaxis de la clase antigua, pero con la lógica adaptada de la nueva clase
    adapterC.setURL('https://swapi.dev/api/');
    adapterC.call((data) => console.log('Adapter', data));
    /* ------------------------------ */
})();