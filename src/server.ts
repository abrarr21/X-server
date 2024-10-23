import { startServer } from "./app";

const init = async () => {
  const app = await startServer();
  app.listen(6969, () => {
    console.log(`Server is running at PORT: 6969`);
  });
};

init();
