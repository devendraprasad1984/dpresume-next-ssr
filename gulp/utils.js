import chalk from 'chalk'

export function throwError(msg) {
    throw new Error(chalk.red(chalk.bold(msg)))
}

export function leftJustify(text) {
    // Replace all leading whitespace per line
    return text.replace(/^[ \t]+/gm, '')
}
