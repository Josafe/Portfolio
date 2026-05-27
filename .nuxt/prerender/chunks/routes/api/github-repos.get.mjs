import { defineEventHandler } from 'file://C:/Users/josaf/Desktop/Projectes/Portfolio/node_modules/h3/dist/index.mjs';
import { k as useRuntimeConfig } from '../../_/nitro.mjs';
import 'file://C:/Users/josaf/Desktop/Projectes/Portfolio/node_modules/ufo/dist/index.mjs';
import 'file://C:/Users/josaf/Desktop/Projectes/Portfolio/node_modules/destr/dist/index.mjs';
import 'file://C:/Users/josaf/Desktop/Projectes/Portfolio/node_modules/hookable/dist/index.mjs';
import 'file://C:/Users/josaf/Desktop/Projectes/Portfolio/node_modules/ofetch/dist/node.mjs';
import 'file://C:/Users/josaf/Desktop/Projectes/Portfolio/node_modules/node-mock-http/dist/index.mjs';
import 'file://C:/Users/josaf/Desktop/Projectes/Portfolio/node_modules/klona/dist/index.mjs';
import 'file://C:/Users/josaf/Desktop/Projectes/Portfolio/node_modules/defu/dist/defu.mjs';
import 'file://C:/Users/josaf/Desktop/Projectes/Portfolio/node_modules/scule/dist/index.mjs';
import 'file://C:/Users/josaf/Desktop/Projectes/Portfolio/node_modules/radix3/dist/index.mjs';
import 'file://C:/Users/josaf/Desktop/Projectes/Portfolio/node_modules/vue-router/vue-router.node.mjs';
import 'file://C:/Users/josaf/Desktop/Projectes/Portfolio/node_modules/unstorage/dist/index.mjs';
import 'file://C:/Users/josaf/Desktop/Projectes/Portfolio/node_modules/unstorage/drivers/fs.mjs';
import 'file:///C:/Users/josaf/Desktop/Projectes/Portfolio/node_modules/@nuxt/nitro-server/dist/runtime/utils/cache-driver.js';
import 'file://C:/Users/josaf/Desktop/Projectes/Portfolio/node_modules/unstorage/drivers/fs-lite.mjs';
import 'node:fs';
import 'node:url';
import 'file://C:/Users/josaf/Desktop/Projectes/Portfolio/node_modules/pathe/dist/index.mjs';
import 'file://C:/Users/josaf/Desktop/Projectes/Portfolio/node_modules/ohash/dist/index.mjs';

const githubRepos_get = defineEventHandler(async () => {
  const config = useRuntimeConfig();
  const headers = {
    Accept: "application/vnd.github+json"
  };
  if (config.githubToken) {
    headers.Authorization = `Bearer ${config.githubToken}`;
  }
  return await $fetch(`https://api.github.com/users/${config.public.githubUser}/repos`, {
    query: {
      sort: "updated",
      per_page: 12
    },
    headers
  });
});

export { githubRepos_get as default };
//# sourceMappingURL=github-repos.get.mjs.map
