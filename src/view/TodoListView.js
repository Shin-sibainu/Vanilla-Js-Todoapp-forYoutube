import { element } from "./html-util.js"; 
import { TodoItemView, TodoItemView } from "./TodoItemView.js";
export class TodoListView {
    createElement(todoItems, { onUpdateTodo, onDeleteTodo }) {
        const todoListElement = element`<ul />`;

        todoItems.forEach(todoItem => {
            const todoItemView = new TodoItemView();
            const todoItemElement = todoItemView.createElement(todoItem, {
                onUpdateTodo,
                onDeleteTodo
            });
            todoListElement.append(todoItemElement);
        })
        return todoListElement;
    }
}