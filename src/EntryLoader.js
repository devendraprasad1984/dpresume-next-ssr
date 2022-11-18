// NOTE: This file MUST NOT import any other files as this is one of the first
//       files loaded for our applications.

function toDashCase(str) {
    return str.replace(/([A-Z])/g, g => `-${g[0].toLowerCase()}`)
}

export default class EntryLoader {
    static style= {
        width: '100vw',
        height: '100vh',
        position: 'absolute',
        top: '0',
        left: '0',
        textAlign: 'center',
        verticalAlign: 'middle',
        lineHeight: '100vh',
        background: `#${'f0f2f5'}`, // skirt rule against hardcoded css colors
        fontSize: '14px',
        fontFamily: 'sans-serif',
        fontWeight: 300,
        color: `rgba(${'0,0,0,0.65'})`, // skirt rule against hardcoded css colors
    }

    constructor(doc) {
        const container = doc.createElement('div')
        const style = Object.keys(EntryLoader.style)
            .reduce((prev, key) => {
                prev.push(`${toDashCase(key)}:${EntryLoader.style[key]}`)
                return prev
            }, [])
            .join(';')

        container.setAttribute('style', style)
        doc.body.appendChild(container)

        this.doc = doc
        this.container = container
    }

    destroy() {
        this.doc.body.removeChild(this.container)
    }

    setMessage(msg) {
        this.container.innerText = msg
    }
}
