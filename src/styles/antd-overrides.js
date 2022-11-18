module.exports = () => {
    const dpxyzPrimary = '#16bc9c'
    const dpxyzWarn = '#f0ad44'
    const dpxyzError = '#e74330'
    const dpxyzLink = '#5b87f2'

    const baseAntd = {
        // Border Radius
        'border-radius-base': '4px',

        // Colors
        'primary-color': dpxyzPrimary,
        'green-6': dpxyzPrimary,
        'warning-color': dpxyzWarn,
        'success-color': '@primary-color',
        'processing-color': '@primary-color',
        'error-color': dpxyzError,
        'highlight-color': '@error-color',
        'normal-color': '#bbb5c3',

        // Form
        'form-vertical-label-padding': '0 0 2px',

        /* Links */
        'link-color': dpxyzLink,
        'link-hover-color': '#2c64ee',
        'link-active-color': 'color(@link-color, 7)',
        /* Icons Font */
        // 'icon-url': 'TODO',

        'btn-font-weight': 300,

        /* Fonts */
        // 'line-height-base': '1',
        'font-family-no-number': 'Museo-Sans, Arial, Helvetica, sans-serif',
        'font-family': 'Museo-Sans, Arial, Helvetica, sans-serif',

        /* Tabs */
        // This impacts the whole application
        'tabs-horizontal-margin': '0',
    }

    const antdMobile = {
        'brand-primary': dpxyzPrimary,
        'brand-primary-tap': '#109b80', // Slightly darker than primary
        'brand-success': dpxyzPrimary,
        'brand-warning': dpxyzWarn,
        'brand-error': dpxyzError,
        'brand-wait': dpxyzPrimary,
        'color-link': dpxyzLink,
    }

    return Object.assign({}, baseAntd, antdMobile)
}
