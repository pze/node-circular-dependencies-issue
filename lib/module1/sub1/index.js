import builder from "./builder";

export default {
  async handler() {
    await builder().runner;
  },
};
