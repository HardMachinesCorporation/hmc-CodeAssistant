import { cosmiconfigSync } from "cosmiconfig";
import * as process from "node:process";

export default (options: Record<string, any>) => {
  console.log("Loading custom config");
  const fineName = "hmc";

  const explorer = cosmiconfigSync(fineName);
  console.log("explorer setup", explorer);

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const searchPaths: any = options?.searchPaths || [process.cwd()];
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  console.log("searchPaths", ...searchPaths);

  try {
    const result = explorer.search();
    console.log("result", result);
    if (result) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      return result.config;
    } else {
      // return default config
      return {
        url: "http:localhost:11343",
        model: "llma2",
        requestOptions: {
          useMMap: true, // use_mmap 1
          numThread: 6, // num_thread 6
          numGpu: 1, //num_gpu 1
        },
        database: {
          tableName: "documents",
          columnName: "match_documents",
        },
        extensions: [".ts", ".js", ".json", ".jsonc", ".md"],
      };
    }
  } catch (e) {
    console.error(e);
  }
};
