/* function that takes two arguments: div element EL, containing five <div> circles and a number N. then changes the background color of first N circles in EL */
function changeColor(el, n) {
    console.log(el)
    for (let i = 0; i < n; i++) {
        el.children[i].style.backgroundColor = '#ffda4d';
    }
}