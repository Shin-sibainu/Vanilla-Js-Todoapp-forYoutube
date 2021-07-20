export function escapeSpecialChars(str) {
    return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
}

/**
 * ただのHTML文字列からHTML要素を作成して返す
 * @param {string} html 
 */
export function htmlToElement(html){
    const template = document.createElement("template");
    template.innerHTML = html;

    return template.content.firstElementChild;
}

/**
 * HTML文字列からDOM Nodeを作成して返すタグ関数
 * @returns {Element}
 */
export function element(strings, ...values) {
    const htmlString = strings.reduce((result, str, i) => {
        const value = values[i - 1];

        if(typeof value === "string"){
            return result + escapeSpecialChars(value) + str;
        }
        else {
            return result + String(value) + str;
        }
    });
    return htmlToElement(htmlString);
}
