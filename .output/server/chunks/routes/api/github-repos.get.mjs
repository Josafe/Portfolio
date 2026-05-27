import { m as defineEventHandler, R as useRuntimeConfig } from '../../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'vue-router';
import 'node:fs';
import 'node:path';
import 'node:url';
import 'node:crypto';

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
