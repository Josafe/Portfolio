import { defineComponent, ref, withAsyncContext, computed, mergeProps, unref, useSSRContext } from 'file://C:/Users/josaf/Desktop/Projectes/Portfolio/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderClass, ssrRenderList, ssrRenderComponent, ssrRenderAttr } from 'file://C:/Users/josaf/Desktop/Projectes/Portfolio/node_modules/vue/server-renderer/index.mjs';
import { b as useI18n, g as useSeoMeta } from './server.mjs';
import 'file://C:/Users/josaf/Desktop/Projectes/Portfolio/node_modules/ofetch/dist/node.mjs';
import '../_/nitro.mjs';
import 'file://C:/Users/josaf/Desktop/Projectes/Portfolio/node_modules/h3/dist/index.mjs';
import 'file://C:/Users/josaf/Desktop/Projectes/Portfolio/node_modules/ufo/dist/index.mjs';
import 'file://C:/Users/josaf/Desktop/Projectes/Portfolio/node_modules/destr/dist/index.mjs';
import 'file://C:/Users/josaf/Desktop/Projectes/Portfolio/node_modules/hookable/dist/index.mjs';
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
import 'file://C:/Users/josaf/Desktop/Projectes/Portfolio/node_modules/unctx/dist/index.mjs';
import 'file://C:/Users/josaf/Desktop/Projectes/Portfolio/node_modules/nuxt/node_modules/cookie-es/dist/index.mjs';
import 'file://C:/Users/josaf/Desktop/Projectes/Portfolio/node_modules/vue-devtools-stub/dist/index.mjs';
import '../_/renderer.mjs';
import 'file://C:/Users/josaf/Desktop/Projectes/Portfolio/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://C:/Users/josaf/Desktop/Projectes/Portfolio/node_modules/unhead/dist/server.mjs';
import 'node:async_hooks';
import 'file://C:/Users/josaf/Desktop/Projectes/Portfolio/node_modules/devalue/index.js';
import 'file://C:/Users/josaf/Desktop/Projectes/Portfolio/node_modules/unhead/dist/plugins.mjs';
import 'file://C:/Users/josaf/Desktop/Projectes/Portfolio/node_modules/unhead/dist/utils.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ProjectCard",
  __ssrInlineRender: true,
  props: {
    project: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        initial: { opacity: 0, y: 16 },
        enter: { opacity: 1, y: 0 },
        duration: 450,
        as: "article",
        class: "group rounded-2xl border border-slate-800 bg-slate-900/50 p-5 shadow-soft backdrop-blur transition-transform duration-200 hover:-translate-y-1"
      }, _attrs))}><div class="mb-3 flex items-start justify-between gap-3"><h3 class="text-lg font-semibold text-white">${ssrInterpolate(__props.project.title)}</h3>`);
      if (__props.project.featured) {
        _push(`<span class="rounded-full border border-brand-500/40 bg-brand-500/10 px-2 py-1 text-xs text-brand-50"> Featured </span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><p class="mb-4 text-sm leading-relaxed text-slate-300">${ssrInterpolate(__props.project.description)}</p><ul class="mb-5 flex flex-wrap gap-2"><!--[-->`);
      ssrRenderList(__props.project.stack, (tech) => {
        _push(`<li class="rounded-full border border-slate-700 px-2.5 py-1 text-xs text-slate-300">${ssrInterpolate(tech)}</li>`);
      });
      _push(`<!--]--></ul><div class="flex gap-3 text-sm font-medium">`);
      if (__props.project.github) {
        _push(`<a${ssrRenderAttr("href", __props.project.github)} target="_blank" rel="noreferrer" class="text-brand-50 hover:text-white">GitHub</a>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.project.url) {
        _push(`<a${ssrRenderAttr("href", __props.project.url)} target="_blank" rel="noreferrer" class="text-brand-50 hover:text-white">Live</a>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProjectCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const projects = [
  {
    title: "AGC Padel Academy",
    description: "Plataforma web per a l'acad\xE8mia amb enfocament comercial i experi\xE8ncia premium per alumnes i staff.",
    stack: [
      "Laravel",
      "Vue",
      "MySQL"
    ],
    url: "https://agcpadelacademy.com/",
    github: "",
    type: "deployed",
    featured: true
  },
  {
    title: "Chatbot Multiagent System",
    description: "Sistema amb m\xFAltiples agents AI per a resoluci\xF3 de tasques complexes i coordinaci\xF3 contextual.",
    stack: [
      "Python",
      "LLMs",
      "Agent Orchestration"
    ],
    url: "",
    github: "https://github.com/Josafe/TFM-Sistema-Chatbot-Multiagent",
    type: "github",
    featured: true
  }
];
const useProjects = () => {
  return computed(() => projects);
};
const useGithubRepos = async () => {
  const repos = await $fetch("/api/github-repos");
  return repos.filter((repo) => !repo.fork).slice(0, 6).map(
    (repo) => ({
      title: repo.name,
      description: repo.description || "Repositori p\xFAblic de GitHub.",
      stack: [repo.language || "Code", `\u2B50 ${repo.stargazers_count}`],
      github: repo.html_url,
      url: ""
    })
  );
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "projects",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { t } = useI18n();
    useSeoMeta({
      title: t("meta.projects.title"),
      description: t("meta.projects.description")
    });
    const staticProjects = useProjects();
    const githubProjects = ref([]);
    try {
      githubProjects.value = ([__temp, __restore] = withAsyncContext(() => useGithubRepos()), __temp = await __temp, __restore(), __temp);
    } catch {
      githubProjects.value = [];
    }
    const deployedProjects = computed(
      () => staticProjects.value.filter((p) => p.type === "deployed")
    );
    const githubStaticProjects = computed(
      () => staticProjects.value.filter((p) => p.type === "github")
    );
    const allGithubProjects = computed(() => [
      ...githubStaticProjects.value,
      ...githubProjects.value.map((repo) => ({
        title: repo.name,
        description: repo.description || "Sense descripci\xF3",
        stack: repo.language ? [repo.language] : [],
        github: repo.html_url,
        type: "github",
        featured: false
      }))
    ]);
    const activeTab = ref("deployed");
    const currentProjects = computed(() => {
      return activeTab.value === "deployed" ? deployedProjects.value : allGithubProjects.value;
    });
    const selectedTech = ref("");
    const availableTechs = computed(() => {
      const techs = /* @__PURE__ */ new Set();
      currentProjects.value.forEach((project) => {
        project.stack.forEach((tech) => techs.add(tech));
      });
      return Array.from(techs).sort();
    });
    const filteredProjects = computed(() => {
      if (!selectedTech.value) return currentProjects.value;
      return currentProjects.value.filter(
        (project) => project.stack.includes(selectedTech.value)
      );
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ProjectCard = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid gap-8" }, _attrs))}><div class="grid gap-4"><br><h1 class="text-4xl font-bold text-white">${ssrInterpolate(unref(t)("projects.title"))}</h1><p class="text-slate-400">${ssrInterpolate(unref(t)("projects.description"))}</p></div><div class="flex gap-1 rounded-lg border border-slate-800 p-1"><button class="${ssrRenderClass([
        "flex-1 rounded-md px-4 py-2 text-sm font-medium transition-colors",
        unref(activeTab) === "deployed" ? "bg-white text-slate-950" : "text-slate-400 hover:text-white"
      ])}">${ssrInterpolate(unref(t)("projects.tabs.deployed"))} (${ssrInterpolate(unref(deployedProjects).length)}) </button><button class="${ssrRenderClass([
        "flex-1 rounded-md px-4 py-2 text-sm font-medium transition-colors",
        unref(activeTab) === "github" ? "bg-white text-slate-950" : "text-slate-400 hover:text-white"
      ])}">${ssrInterpolate(unref(t)("projects.tabs.github"))} (${ssrInterpolate(unref(allGithubProjects).length)}) </button></div><div class="flex flex-wrap gap-2"><button class="${ssrRenderClass([
        "rounded-full px-3 py-1 text-sm transition-colors",
        !unref(selectedTech) ? "bg-white text-slate-950" : "border border-slate-700 text-slate-400 hover:text-white"
      ])}">${ssrInterpolate(unref(t)("projects.filter.all"))}</button><!--[-->`);
      ssrRenderList(unref(availableTechs), (tech) => {
        _push(`<button class="${ssrRenderClass([
          "rounded-full px-3 py-1 text-sm transition-colors",
          unref(selectedTech) === tech ? "bg-white text-slate-950" : "border border-slate-700 text-slate-400 hover:text-white"
        ])}">${ssrInterpolate(tech)}</button>`);
      });
      _push(`<!--]--></div><div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"><!--[-->`);
      ssrRenderList(unref(filteredProjects), (project) => {
        _push(ssrRenderComponent(_component_ProjectCard, {
          key: `${project.title}-${project.github || project.url}`,
          project
        }, null, _parent));
      });
      _push(`<!--]--></div>`);
      if (unref(filteredProjects).length === 0) {
        _push(`<div class="text-center py-12"><p class="text-slate-400">${ssrInterpolate(unref(t)("projects.empty"))}</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projects.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=projects-Ds4H-atI.mjs.map
