import express from "express";
import { resolve } from "path";

const isProduction = process.env.NODE_ENV === "production";
const codeEnvironment = isProduction ? "production" : "development";
const { PORT_1 = 8082 } = process.env;

async function main() {
  const port: number = Number(PORT_1);
  const app = express;
  const frontEnd: string = resolve(__dirname, "public");

  app.get("/*", (_: express.Request, res: express.Response) => {
    res.sendFile(resolve(frontEnd, "index.html"));
  });

  app.listen(port, () =>
    console.info(
      `Server listening on port http://localhost:${port} (in ${codeEnvironment} mode)`
    )
  );
}
