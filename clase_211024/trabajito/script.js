const list = document.getElementById('lis');
const form = document.getElementById('en');

form.addEventListener('click', () => {
    const taskValue = document.getElementById('a').value;

    if (taskValue.trim() !== '') {
        const listItem = document.createElement('li');
        listItem.innerHTML = `${taskValue} <button class="delete-btn">Eliminar</button>`;
        list.appendChild(listItem);

        listItem.querySelector('.delete-btn').addEventListener('click', function() {
            list.removeChild(listItem);
        });

        document.getElementById('a').value = '';
    }
    
    console.log('Elemento añadido a la lista');
});

