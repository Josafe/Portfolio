import { defineComponent, mergeProps, useSSRContext, computed, ref, withAsyncContext, unref } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderClass, ssrRenderComponent } from "vue/server-renderer";
import { a as useSeoMeta } from "./v3-Bwa_H9bM.js";
import "C:/Users/josaf/Desktop/Projectes/Portfolio/node_modules/@unhead/vue/dist/index.mjs";
import "../server.mjs";
import "C:/Users/josaf/Desktop/Projectes/Portfolio/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "C:/Users/josaf/Desktop/Projectes/Portfolio/node_modules/hookable/dist/index.mjs";
import "C:/Users/josaf/Desktop/Projectes/Portfolio/node_modules/unctx/dist/index.mjs";
import "C:/Users/josaf/Desktop/Projectes/Portfolio/node_modules/h3/dist/index.mjs";
import "vue-router";
import "C:/Users/josaf/Desktop/Projectes/Portfolio/node_modules/defu/dist/defu.mjs";
import "C:/Users/josaf/Desktop/Projectes/Portfolio/node_modules/ufo/dist/index.mjs";
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
    description: "Plataforma web per a l'acadèmia amb enfocament comercial i experiència premium per alumnes i staff.",
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
    description: "Sistema amb múltiples agents AI per a resolució de tasques complexes i coordinació contextual.",
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
      description: repo.description || "Repositori públic de GitHub.",
      stack: [repo.language || "Code", `⭐ ${repo.stargazers_count}`],
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
    useSeoMeta({
      title: "Projects · Josafe.com",
      description: "Projectes desplegats i repositoris GitHub de Josafe: desenvolupament web, sistemes AI i multi-agent."
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
        description: repo.description || "Sense descripció",
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid gap-8" }, _attrs))}><div class="grid gap-4"><h1 class="text-4xl font-bold text-white">Projectes</h1><p class="text-slate-400"> Una col·lecció de projectes desplegats i repositoris tècnics que mostren el meu treball en desenvolupament web i sistemes d&#39;IA. </p></div><div class="flex gap-1 rounded-lg border border-slate-800 p-1"><button class="${ssrRenderClass([
        "flex-1 rounded-md px-4 py-2 text-sm font-medium transition-colors",
        unref(activeTab) === "deployed" ? "bg-white text-slate-950" : "text-slate-400 hover:text-white"
      ])}"> Projectes Desplegats (${ssrInterpolate(unref(deployedProjects).length)}) </button><button class="${ssrRenderClass([
        "flex-1 rounded-md px-4 py-2 text-sm font-medium transition-colors",
        unref(activeTab) === "github" ? "bg-white text-slate-950" : "text-slate-400 hover:text-white"
      ])}"> Repositoris GitHub (${ssrInterpolate(unref(allGithubProjects).length)}) </button></div><div class="flex flex-wrap gap-2"><button class="${ssrRenderClass([
        "rounded-full px-3 py-1 text-sm transition-colors",
        !unref(selectedTech) ? "bg-white text-slate-950" : "border border-slate-700 text-slate-400 hover:text-white"
      ])}"> Tots </button><!--[-->`);
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
        _push(`<div class="text-center py-12"><p class="text-slate-400">No s&#39;han trobat projectes amb aquest filtre.</p></div>`);
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
export {
  _sfc_main as default
};
//# sourceMappingURL=projects-Bdvr-ORd.js.map
