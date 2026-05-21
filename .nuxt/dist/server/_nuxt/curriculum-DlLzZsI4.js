import { defineComponent, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "CVCard",
  __ssrInlineRender: true,
  props: {
    title: {},
    subtitle: {},
    description: {},
    pdf: {},
    preview: {},
    tags: {}
  },
  setup(__props) {
    const props = __props;
    const downloadFilename = props.pdf.split("/").pop() ?? "cv.pdf";
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/10 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10" }, _attrs))}><div class="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none"></div><div class="flex flex-col gap-6"><div class="space-y-3"><p class="text-xs uppercase tracking-[0.3em] text-slate-500">Currículum</p><h3 class="text-2xl font-semibold text-white">${ssrInterpolate(props.title)}</h3><p class="text-sm text-slate-400">${ssrInterpolate(props.subtitle)}</p></div><div class="overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-950/70"><img${ssrRenderAttr("src", props.preview)}${ssrRenderAttr("alt", `Preview del CV ${props.title}`)} class="h-64 w-full object-cover object-center transition duration-500 group-hover:scale-105"></div><p class="text-sm leading-7 text-slate-300">${ssrInterpolate(props.description)}</p><div class="flex flex-wrap gap-2"><!--[-->`);
      ssrRenderList(props.tags, (tag) => {
        _push(`<span class="rounded-full border border-slate-700/80 bg-slate-950/60 px-3 py-1 text-xs font-medium text-slate-300">${ssrInterpolate(tag)}</span>`);
      });
      _push(`<!--]--></div><div class="grid gap-3 sm:grid-cols-2"><a${ssrRenderAttr("href", props.pdf)} target="_blank" rel="noreferrer noopener" class="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/20 hover:bg-white/15"> Veure CV </a><a${ssrRenderAttr("href", props.pdf)}${ssrRenderAttr("download", unref(downloadFilename))} class="inline-flex items-center justify-center rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"> Descarregar PDF </a></div></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cv/CVCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const curriculums = [
  {
    id: "fullstack",
    title: "Full Stack Developer",
    subtitle: "Frontend + Backend + APIs + arquitectura moderna",
    description: "Disseny i desenvolupament d’aplicacions web completes, arquitectures escalables i fluxos de treball optimitzats per productes digitals moderns.",
    pdf: "/cv/fullstack.pdf",
    preview: "/images/cv/fullstack-preview.jpg",
    tags: ["Vue", "Nuxt", "Laravel", "Node.js"]
  },
  {
    id: "ai-systems",
    title: "AI Systems Engineer",
    subtitle: "LLMs, Multi-Agent Systems i automatització IA",
    description: "Creació de sistemes d’intel·ligència artificial orientats a producte amb agents col·laboratius, automatització intel·ligent i fluxos de dades avançats.",
    pdf: "/cv/ai-systems.pdf",
    preview: "/images/cv/ai-systems-preview.jpg",
    tags: ["LLM", "Multi-Agent", "Python", "Automation"]
  },
  {
    id: "database-admin",
    title: "Database Administrator",
    subtitle: "SQL, PostgreSQL, MySQL i optimització de dades",
    description: "Administració de bases de dades robusta, optimització de rendiment i models de dades fiables per aplicacions empresarials i serveis en producció.",
    pdf: "/cv/database-administrator.pdf",
    preview: "/images/cv/database-admin-preview.svg",
    tags: ["PostgreSQL", "MySQL", "SQL", "Data Modeling"]
  },
  {
    id: "systems-admin",
    title: "Systems Administrator",
    subtitle: "Linux, Docker, networking i infraestructura",
    description: "Infraestructura senzilla i segura, deploys automatitzats i manteniment de sistemes amb enfoc en disponibilitat, escalabilitat i fiabilitat.",
    pdf: "/cv/systems-administrator.pdf",
    preview: "/images/cv/systems-admin-preview.svg",
    tags: ["Linux", "Docker", "Kubernetes", "DevOps"]
  },
  {
    id: "it-technician",
    title: "IT Technician",
    subtitle: "Suport tècnic, hardware, software i manteniment",
    description: "Gestió d’equips, resolució d’incidències i monitoratge proactiu per mantenir operatives les infraestructures i l’experiència dels usuaris.",
    pdf: "/cv/it-technician.pdf",
    preview: "/images/cv/it-technician-preview.svg",
    tags: ["Support", "Hardware", "Software", "Maintenance"]
  }
];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "curriculum",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CVCard = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid gap-12" }, _attrs))}><div class="grid gap-4"><h1 class="text-4xl font-bold text-white">Curriculum Vitae</h1><p class="text-slate-400"> Versions especialitzades del meu currículum per diferents rols professionals. </p></div><div class="grid gap-8 lg:grid-cols-2"><!--[-->`);
      ssrRenderList(unref(curriculums), (cv) => {
        _push(ssrRenderComponent(_component_CVCard, mergeProps({
          key: cv.id
        }, { ref_for: true }, cv), null, _parent));
      });
      _push(`<!--]--></div><div class="rounded-lg border border-slate-800 p-6"><h3 class="text-lg font-semibold text-white mb-4">Informació Addicional</h3><div class="grid gap-4 text-sm text-slate-300"><p> Els currículums inclouen experiència professional detallada, projectes destacats, tecnologies dominades i certificacions rellevants. </p><p> Disponible per a versions personalitzades segons requisits específics de posició o empresa. </p></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/curriculum.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=curriculum-DlLzZsI4.js.map
