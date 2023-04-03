import Koa from 'koa';
import { createServer } from 'vite';
import connect from 'koa-connect';
import getApis from "./utils/getApis";
import text from './utils/text';
import log from './utils/formatLog';

export default () => {
    log(`${text.logo}   ${text.dev}`);
    async function startServer() {
        const app = new Koa();
    
        // 创建Vite实例
        const vite = await createServer({
            // Vite的配置选项
            configFile: './src/frontend/vite.config.ts',
            root: './src/frontend/',
            server: { middlewareMode: true },
        });
    
        // 使用koa-connect将Vite中间件转换为Koa中间件
        app.use(connect(vite.middlewares));
        const apis = await getApis();
        // 启动Koa服务器
        app.listen(3000, () => {
            log(text.tip(`Server: ${text.url("http://localhost:3000")}`));
            log(text.tip(`Loaded ${text.num(apis.length)} Apis!`));
            log(text.tip(`Backend ${text.hot("HOT")} Reload is ready!`));
            process.exit()
        });
    }
    startServer();
}