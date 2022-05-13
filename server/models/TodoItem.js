let id = 0;

class TodoItem {
    constructor(title, description) {
        this.key = id++;
        this.title = title;
        this.description = description;
        this.date = new Date();
        this.active = true;
    }
}

module.exports = TodoItem;
