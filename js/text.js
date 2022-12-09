/*

- Use specific selector for js to find div
- Use data-value to set specific max width before scaling text down
    - If no max width specified, width of parent will be used
        - If no parent…?
- Maybe use js loop to scale text down by 1px until it fits the div
- what about padding?

*/



function textFit() {
    containers = document.querySelectorAll('.text-fit');
    containers.forEach(item => {
        if (item.getAttribute('data-value')) {
            maxWidth = item.getAttribute('data-value');
        } else {
            parent = item.parentNode;
            maxWidth = parent.offsetWidth;
        }
        console.log(maxWidth);
        width = item.scrollWidth;
        if (width > maxWidth) {
            style = window.getComputedStyle(item, null).getPropertyValue('font-size');
            size = parseFloat(style);
            while (width > maxWidth) {
                size -= 1;
                item.style.fontSize = size+'px';
                width = item.scrollWidth;
            }
        }
    })
}

function reset() {
    c = document.querySelector('.text-fit');
    c.style.fontSize = '35px';
}