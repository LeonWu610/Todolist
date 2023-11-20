const todos = [];
function addItems(){
    const items = document.querySelector('.js-input').value;
    const date = document.querySelector('.js-date').value;
    todos.push({
        items,
        date
    });
    document.querySelector('.js-input').value = '';
    showItems();
}

function showItems(){
    let arrayItems = '';

    todos.forEach((todoObject, index) => {
        const {items, date} = todoObject;
        const html = `
            <div>${items}</div>
            <div>${date}</div>
            <button onclick="
                todos.splice(${index}, 1);
                showItems();
            " class = 'delete-button'
            >delete</button>
            `;
        arrayItems += html;
    })

    document.querySelector('.js-show').innerHTML = arrayItems;
}

function enter(event){
    if(event.key === 'Enter'){
        addItems();
    }
}