import chalk from "chalk"

export default {
    tip: (str: string) => chalk.greenBright.bold(' → ')+str,
    logo: chalk.blueBright.bold("🚀 Fe(OH)₃"),
    dev: chalk.blueBright.bold("running in DEV MODE"),
    url: chalk.green.underline,
    num: chalk.greenBright.bold,
    hot: chalk.redBright.bold,
    code: chalk.bold.blackBright.bgGray
}