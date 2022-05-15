export default class kanbanAPI {
    static getItems(columnID) {
        const column = read().find(column => column.id == columnID);

        if(!column) {
            return [];
        }

        return column.items;
    }
}





function read() {
    const json = localStorage.getItem("kanban-board-item");

    if(!json) {
        return [{
            id: 1,
            items: []
        },

        {
            id: 2,
            items: []
        },

        {
            id: 3,
            items: []
        }];

    }

    return JSON.parse(json);
}

function save(data) {
    localStorage.setItem("kanban-board-data", JSON.stringify(data));
}

