import { defineComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
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
  __name: "SocialLinks",
  __ssrInlineRender: true,
  setup(__props) {
    const socialLinks = [
      { label: "GitHub", href: "https://github.com/Josafe" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/joan-sabater-ferré-2b4169115" },
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SocialLinks.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "about",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "About Me · Josafe.com",
      description: "Presentació professional de Josafe: Desenvolupador Full Stack i AI Systems Engineer especialitzat en solucions escalables i intel·ligència artificial."
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SocialLinks = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid gap-16" }, _attrs))}><section class="grid gap-7"><div class="grid gap-4"><br><p class="text-sm font-semibold uppercase tracking-[0.2em] text-brand-500">Sobre Mi</p><h1 class="max-w-4xl text-4xl font-bold leading-tight text-white md:text-6xl"> Desenvolupador Full Stack i AI Systems Engineer </h1></div><p class="max-w-3xl text-base leading-relaxed text-slate-300 md:text-lg"> Sóc enginyer de sistemes AI i desenvolupador full stack orientat a construir solucions escalables, mantenibles i orientades a negoci. Tinc experiència en ecosistemes Laravel/Vue, integracions cloud i sistemes multiagent. </p></section><section class="grid gap-8 md:grid-cols-2"><div class="grid gap-4"><h2 class="text-2xl font-semibold text-white">Especialitzacions</h2><div class="grid gap-3"><div class="rounded-lg border border-slate-800 p-4"><h3 class="font-semibold text-white">Full Stack Development</h3><p class="mt-1 text-sm text-slate-400">Laravel, Vue.js, Node.js, bases de dades relacionals i NoSQL</p></div><div class="rounded-lg border border-slate-800 p-4"><h3 class="font-semibold text-white">AI Systems &amp; Multi-Agent</h3><p class="mt-1 text-sm text-slate-400">Sistemes d&#39;intel·ligència artificial, agents multiagent, automatització</p></div><div class="rounded-lg border border-slate-800 p-4"><h3 class="font-semibold text-white">Arquitectura Escalable</h3><p class="mt-1 text-sm text-slate-400">Disseny de sistemes escalables, microserveis, integracions cloud</p></div></div></div><div class="grid gap-4"><h2 class="text-2xl font-semibold text-white">Interessos Professionals</h2><div class="grid gap-3"><div class="rounded-lg border border-slate-800 p-4"><h3 class="font-semibold text-white">Projectes d&#39;Impacte</h3><p class="mt-1 text-sm text-slate-400">Aplicacions web modernes, SaaS, productes digitals escalables</p></div><div class="rounded-lg border border-slate-800 p-4"><h3 class="font-semibold text-white">Innovació AI</h3><p class="mt-1 text-sm text-slate-400">Sistemes intel·ligents, automatitzacions, agents conversacionals</p></div><div class="rounded-lg border border-slate-800 p-4"><h3 class="font-semibold text-white">Col·laboracions Tècniques</h3><p class="mt-1 text-sm text-slate-400">Equips multidisciplinars, consultoria, mentorització</p></div></div></div></section><section class="grid gap-6"><h2 class="text-2xl font-semibold text-white">Filosofia de Treball</h2><div class="max-w-4xl"><p class="text-slate-300 leading-relaxed"> Crec en el poder de la tecnologia per transformar negocis i millorar vides. El meu enfocament combina enginyeria de software sòlida amb innovació en IA, sempre prioritzant la qualitat del codi, l&#39;experiència d&#39;usuari i l&#39;impacte real. Treballo amb metodologies àgils, enfocades en resultats mesurables i solucions sostenibles a llarg termini. </p></div></section><section class="grid gap-6"><h2 class="text-2xl font-semibold text-white">Contacte</h2><p class="text-slate-300"> Disponible per a projectes de desenvolupament web, consultoria AI i col·laboracions tècniques. </p><div class="flex flex-wrap gap-4"><a href="mailto:josafesf2@gmail.co" class="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-950 hover:bg-slate-200"> josafesf2@gmail.com </a>`);
      _push(ssrRenderComponent(_component_SocialLinks, null, null, _parent));
      _push(`</div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=about-DRUqhhMg.js.map
