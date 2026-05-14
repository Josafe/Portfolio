import { defineComponent, mergeProps, ref, withAsyncContext, computed, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { b as useRuntimeConfig, _ as _export_sfc } from './server.mjs';
import { u as useSeoMeta } from './v3-Bwa_H9bM.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import 'vue-router';

const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "SocialLinks",
  __ssrInlineRender: true,
  setup(__props) {
    const socialLinks = [
      { label: "GitHub", href: "https://github.com/Josafe" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/joan-sabater-ferr\xE9-2b4169115" },
      { label: "Instagram", href: "https://www.instagram.com/josafesf/" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-wrap gap-3" }, _attrs))}><!--[-->`);
      ssrRenderList(socialLinks, (link) => {
        _push(`<a${ssrRenderAttr("href", link.href)} target="_blank" rel="noreferrer" class="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2 text-sm font-medium text-slate-200 hover:border-brand-500 hover:text-white">${ssrInterpolate(link.label)}</a>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SocialLinks.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  const _component_SocialLinks = _sfc_main$6;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "grid gap-7 border-b border-slate-800 pb-12" }, _attrs))}><p class="text-sm font-semibold uppercase tracking-[0.2em] text-brand-500">Josafe.com</p><h1 class="max-w-4xl text-4xl font-bold leading-tight text-white md:text-6xl"> Desenvolupador Full Stack i AI Systems Engineer. </h1><p class="max-w-3xl text-base leading-relaxed text-slate-300 md:text-lg"> Dissenyo experi\xE8ncies digitals modernes combinant enginyeria de software, arquitectura web i intel\xB7lig\xE8ncia artificial aplicada a producte real. </p><div class="flex flex-wrap items-center gap-4"><a href="https://github.com/Josafe" target="_blank" rel="noreferrer" class="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-950 hover:bg-slate-200"> Veure GitHub </a>`);
  _push(ssrRenderComponent(_component_SocialLinks, null, null, _parent));
  _push(`</div></section>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("sections/HeroSection.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$4 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "grid gap-4 border-b border-slate-800 py-12" }, _attrs))}><h2 class="text-2xl font-semibold text-white">About me</h2><p class="max-w-4xl text-slate-300"> S\xF3c enginyer de sistemes AI i desenvolupador full stack orientat a construir solucions escalables, mantenibles i orientades a negoci. Tinc experi\xE8ncia en ecosistemes Laravel/Vue, integracions cloud i sistemes multiagent. </p></section>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("sections/AboutSection.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
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
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProjectCard.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
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
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ProjectsSection",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const staticProjects = useProjects();
    const githubProjects = ref([]);
    try {
      githubProjects.value = ([__temp, __restore] = withAsyncContext(() => useGithubRepos()), __temp = await __temp, __restore(), __temp);
    } catch {
      githubProjects.value = [];
    }
    const allProjects = computed(() => {
      return [...staticProjects.value, ...githubProjects.value];
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ProjectCard = _sfc_main$3;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "grid gap-5 border-b border-slate-800 py-12" }, _attrs))}><div class="flex flex-wrap items-end justify-between gap-3"><h2 class="text-2xl font-semibold text-white">Projectes</h2><p class="text-sm text-slate-400">Importaci\xF3 autom\xE0tica de GitHub + projectes manuals en JSON</p></div><div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"><!--[-->`);
      ssrRenderList(unref(allProjects), (project) => {
        _push(ssrRenderComponent(_component_ProjectCard, {
          key: `${project.title}-${project.github || project.url}`,
          project
        }, null, _parent));
      });
      _push(`<!--]--></div></section>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("sections/ProjectsSection.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_SocialLinks = _sfc_main$6;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "grid gap-4 pt-12" }, _attrs))}><h2 class="text-2xl font-semibold text-white">Contacte</h2><p class="text-slate-300">Disponible per a projectes de desenvolupament web, consultoria AI i col\xB7laboracions t\xE8cniques.</p>`);
  _push(ssrRenderComponent(_component_SocialLinks, null, null, _parent));
  _push(`</section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("sections/ContactSection.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const config = useRuntimeConfig();
    useSeoMeta({
      title: "Josafe.com \xB7 Portfolio Full Stack & AI Systems",
      description: "Portfolio modern de Josafe amb projectes web i intel\xB7lig\xE8ncia artificial. Connexi\xF3 directa amb GitHub, LinkedIn i Instagram.",
      ogTitle: "Josafe.com \xB7 Portfolio Full Stack & AI Systems",
      ogDescription: "Projectes destacats com AGC Padel Academy i Chatbot Multiagent System amb importaci\xF3 autom\xE0tica de repositoris GitHub.",
      ogUrl: config.public.siteUrl,
      twitterCard: "summary_large_image"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HeroSection = __nuxt_component_0;
      const _component_AboutSection = __nuxt_component_1;
      const _component_ProjectsSection = _sfc_main$2;
      const _component_ContactSection = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid gap-2" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_HeroSection, null, null, _parent));
      _push(ssrRenderComponent(_component_AboutSection, null, null, _parent));
      _push(ssrRenderComponent(_component_ProjectsSection, null, null, _parent));
      _push(ssrRenderComponent(_component_ContactSection, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-u67fxOAQ.mjs.map
