export function appendToBody(tag, content, count) {
    for (let i = 0; i < count; i++) {
        let elem = document.createElement(tag);
        elem.innerHTML = content;
        document.body.appendChild(elem);
        appendToBody(tag, content);
    }
}

export function generateTree(childrenCount, level, currLevel = 1) {
    let div = document.createElement('div');
    div.setAttribute('class', 'item_' + currLevel);
    if (currLevel < level) {
        for (let i = 0; i < childrenCount; i++) {
            div.appendChild(generateTree(childrenCount, level, currLevel + 1));
        }
    }
    return div;
}

export function replaceNodes() {
    let tree = generateTree(2, 3);
    for (let elem of tree.getElementsByClassName('item_2')) {
        let section = document.createElement('section');
        section.setAttribute('class', 'item_2');
        while (elem.firstChild) {
            section.appendChild(elem.firstChild);
        }
        elem.parentNode.replaceChild(section, elem);
    }
    return tree;
}
