import { EventEmitter } from "../EventEmitter.js";

export class TodoListModel extends EventEmitter {
    constructor(items = []) {
        super();
        this.items = items;
    }

    /**
     * 表示できるTodoItemの配列を返す
     * @returns {TodoItemModel[]}
     */
    getTotalCount() {
        return this.items.length;
    }

    /**
     * 表示できるTodoItemの配列を返す
     * @returns {TodoItemsModel[]}
     */
    getTodoItems(){
        return this.items;
    }

    /**
     * TodoListの状態が更新されたときに呼び出されるリスナー関数を登録する
     * @param {} listener 
     */
     onChange(listener) {
        this.addEvenetListener("change", listener);
    }

    /**
     * 状態が変更されたときに呼ぶ。登録済みのリスナー関数を呼び出す
     * 要はここで変更（追加、更新、削除）したよ！と通知を受け取っている
     */
    emitChange() {
        this.emit("change");
    }

    /**
     * TodoItemを追加する
     * @param {TodoItemModel} todoItem 
     */
    addTodo(todoItem) {
        this.items.push(todoItem);
        this.emitChange();
    }

    updateTodo({id, completed}) {
        const todoItem = this.items.find(todo => todo.id === id);
        if(!todoItem) {
            return;
        }
        todoItem.completed = completed;
        this.emitChange();
    }

    deleteTodo({id}) {
        this.items = this.items.filter(todo => {
            //IDがあっていなければtrueを返す＝配列として残す。
            return todo.id !== id
        });
        this.emitChange();
    }
}