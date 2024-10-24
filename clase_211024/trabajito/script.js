const list = document.getElementById('lis');
const cues = document.getElementById('en');

cues.addEventListener('click', () => {
    const inputhtml = document.getElementById('a').value;

    if (inputhtml.trim() !== '') {
        const lista = document.createElement('li');
        lista.innerHTML = `${inputhtml} <button class="botondeborrar">Eliminar</button>`;
        list.appendChild(lista);

        lista.querySelector('.botondeborrar').addEventListener('click', function() {
            list.removeChild(lista);
        });

        document.getElementById('a').value = '';
    }
    
    //console.log('agregao');
});

