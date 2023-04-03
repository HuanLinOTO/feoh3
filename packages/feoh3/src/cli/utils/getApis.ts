import fs from "fs/promises"
export default async () => {
    return await fs.readdir("./src/backend/apis");
}