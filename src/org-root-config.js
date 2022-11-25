import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@org/vite-example",
  app: () => System.import("@org/vite-single-spa-example"),
  activeWhen: ["/"],
});

start({
  urlRerouteOnly: true,
});
