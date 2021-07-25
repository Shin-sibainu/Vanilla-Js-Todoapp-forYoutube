//　一意に決まるIDを管理する変数
let todoIdx = 0;

/**
 * @param {string} title Todoアイテムのタイトル
 * @param {boolean} completed Todoアイテムが完了済ならばtrue, 未完了ならfalse
 */
export class TodoItemModel {
    constructor({title, completed}) {
        this.id = todoIdx++;
        this.title = title;
        this.completed = completed;
    }
}