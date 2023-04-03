import cac from "cac";
import dev from "./dev";
import log from "./utils/formatLog";
import text from "./utils/text";
var cli = cac();

cli.command("[act]").action((act) => {
    if(act == "dev") dev();
    else {
        log(`${text.logo}`);
        log(text.tip(`use ${text.code("feoh3 dev")} to run your app in dev mode`))
    }
})

cli.help()
cli.parse()