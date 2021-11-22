const elm = []
const btnStyle = `button{
    background-color: green;
    color: white;
    font-size: 20px;
}`
const btn2 = `#btn2{
    background-color: tomato;
    color: white;
    font-size: 20px;
}`
elm.push('<div>')
elm.push(`<style>${btnStyle} ${btn2}</style>`)
elm.push('<h1>Hello Test-A</h1>')
elm.push(`<div>
        <button id='btn1'>click me</button>
        <button id='btn2'>danger</button>
    </div>`
);
elm.push('</div>')


class Test extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = elm.join('')
        this.querySelector('#btn1').addEventListener('click', () => {
            alert('ohh, i am clicked')
        })
        this.querySelector('#btn2').addEventListener('click', () => {
            alert('ohh, i am clicked - its dangerous')
        })
    }
}

window.customElements.define('test-a', Test)