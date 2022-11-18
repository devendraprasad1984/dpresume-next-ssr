import '~/runtime'
import EntryLoader from '~/core/EntryLoader'
import { getenv, setenv } from '~/settings'

const MESSAGES = {
    LOAD: 'loading',
    START: 'starting up',
    ERROR: 'hmm, something went wrong',
}

export async function init(doc) {
    const loader = new EntryLoader(doc)

    if (typeof window !== 'undefined') {
        if (window.__API_ROOT_URL__) {
            const configUrl = `${window.__API_ROOT_URL__}/api/v1/identity/configuration`
            const response = await fetch(configUrl)
            const config = await response.json()

            setenv({ ...config })
        } else {
            setenv(window.__dpxyz_CONFIG__)
        }
    } else {
        setenv({})
    }

    loader.setMessage(MESSAGES.LOAD)

    // Inject Google Tag Manager script
    /* eslint-disable-next-line */
    const initGTM = function (w, d, s, l, i,) {
        w[l] = w[l] || []
        w[l].push({
            'gtm.start': new Date().getTime(),
            event: 'gtm.js',
        })

        const f = d.body
        const j = d.createElement(s)
        const dl = l !== 'dataLayer' ? `&l=${l}` : ''

        j.async = true
        j.src = j.src = `https://www.googletagmanager.com/gtm.js?id=${i}${dl}`

        if (f) {
            f.appendChild(j)
        }
    }

    const gtmTag = getenv('GTM_ID')

    initGTM(window, document, 'script', 'dataLayer', gtmTag)

    try {
        const appModule = await import('./index')

        const domElem =
            doc.querySelector('[data-role=admin-react-content]') ||
            doc.querySelector('[data-role=react-3dviewer]') ||
            doc.querySelector('[data-role=react-content]')

        loader.setMessage(MESSAGES.START)
        await appModule.init(domElem)
        loader.destroy()
    } catch (error) {
        console.error('Failed to init the bundle:', error) // eslint-disable-line
        loader.setMessage(MESSAGES.ERROR)
        throw error
    }

    return null
}

if (__INIT_APPS__) {
    // Initialize the consumer app
    init(document)
}
