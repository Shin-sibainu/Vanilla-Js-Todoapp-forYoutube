export class App {
    constructor(){
    }

    mount() {
        const formElement = document.querySelector("#js-form");
        const inputElement = document.querySelector("#js-form-input");
        formElement.addEventListener("submit", (event) => {
            event.preventDefault();
            console.log(`${inputElement.value}が送信されました `);
        })
    }
}