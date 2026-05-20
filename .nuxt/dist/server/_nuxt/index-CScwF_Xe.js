import { _ as __nuxt_component_0 } from "./nuxt-link-ChSQVg0f.js";
import { defineComponent, mergeProps, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { u as useRuntimeConfig } from "../server.mjs";
import { a as useSeoMeta } from "./v3-Bwa_H9bM.js";
import "C:/Users/josaf/Desktop/Projectes/Portfolio/node_modules/ufo/dist/index.mjs";
import "C:/Users/josaf/Desktop/Projectes/Portfolio/node_modules/defu/dist/defu.mjs";
import "C:/Users/josaf/Desktop/Projectes/Portfolio/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "C:/Users/josaf/Desktop/Projectes/Portfolio/node_modules/hookable/dist/index.mjs";
import "C:/Users/josaf/Desktop/Projectes/Portfolio/node_modules/unctx/dist/index.mjs";
import "C:/Users/josaf/Desktop/Projectes/Portfolio/node_modules/h3/dist/index.mjs";
import "vue-router";
import "C:/Users/josaf/Desktop/Projectes/Portfolio/node_modules/@unhead/vue/dist/index.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const config = useRuntimeConfig();
    useSeoMeta({
      title: "Josafe.com · Portfolio Full Stack & AI Systems",
      description: "Portfolio modern de Josafe amb projectes web i intel·ligència artificial. Connexió directa amb GitHub, LinkedIn i Instagram.",
      ogTitle: "Josafe.com · Portfolio Full Stack & AI Systems",
      ogDescription: "Projectes destacats com AGC Padel Academy i Chatbot Multiagent System amb importació automàtica de repositoris GitHub.",
      ogUrl: config.public.siteUrl,
      twitterCard: "summary_large_image"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid gap-16" }, _attrs))}><section class="grid gap-7 text-center"><p class="text-sm font-semibold uppercase tracking-[0.2em] text-brand-500">Josafe.com</p><h1 class="mx-auto max-w-4xl text-4xl font-bold leading-tight text-white md:text-6xl"> Desenvolupador Full Stack i AI Systems Engineer. </h1><p class="mx-auto max-w-3xl text-base leading-relaxed text-slate-300 md:text-lg"> Dissenyo experiències digitals modernes combinant enginyeria de software, arquitectura web i intel·ligència artificial aplicada a producte real. </p><div class="flex flex-wrap items-center justify-center gap-4">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/projects",
        class: "rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-950 hover:bg-slate-200"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Veure Projectes `);
          } else {
            return [
              createTextVNode(" Veure Projectes ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/about",
        class: "rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-800"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Sobre Mi `);
          } else {
            return [
              createTextVNode(" Sobre Mi ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section><section class="grid gap-8 md:grid-cols-2 lg:grid-cols-4">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/about",
        class: "group rounded-lg border border-slate-800 p-6 hover:border-slate-700 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h3 class="text-lg font-semibold text-white group-hover:text-slate-300"${_scopeId}>About Me</h3><p class="mt-2 text-sm text-slate-400"${_scopeId}>Presentació professional i especialitzacions</p>`);
          } else {
            return [
              createVNode("h3", { class: "text-lg font-semibold text-white group-hover:text-slate-300" }, "About Me"),
              createVNode("p", { class: "mt-2 text-sm text-slate-400" }, "Presentació professional i especialitzacions")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/projects",
        class: "group rounded-lg border border-slate-800 p-6 hover:border-slate-700 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h3 class="text-lg font-semibold text-white group-hover:text-slate-300"${_scopeId}>Projects</h3><p class="mt-2 text-sm text-slate-400"${_scopeId}>Projectes desplegats i repositoris GitHub</p>`);
          } else {
            return [
              createVNode("h3", { class: "text-lg font-semibold text-white group-hover:text-slate-300" }, "Projects"),
              createVNode("p", { class: "mt-2 text-sm text-slate-400" }, "Projectes desplegats i repositoris GitHub")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/curriculum",
        class: "group rounded-lg border border-slate-800 p-6 hover:border-slate-700 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h3 class="text-lg font-semibold text-white group-hover:text-slate-300"${_scopeId}>Curriculum</h3><p class="mt-2 text-sm text-slate-400"${_scopeId}>CVs professionals i descàrregues</p>`);
          } else {
            return [
              createVNode("h3", { class: "text-lg font-semibold text-white group-hover:text-slate-300" }, "Curriculum"),
              createVNode("p", { class: "mt-2 text-sm text-slate-400" }, "CVs professionals i descàrregues")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/future-projects",
        class: "group rounded-lg border border-slate-800 p-6 hover:border-slate-700 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h3 class="text-lg font-semibold text-white group-hover:text-slate-300"${_scopeId}>Future Projects</h3><p class="mt-2 text-sm text-slate-400"${_scopeId}>Idees i roadmap professional</p>`);
          } else {
            return [
              createVNode("h3", { class: "text-lg font-semibold text-white group-hover:text-slate-300" }, "Future Projects"),
              createVNode("p", { class: "mt-2 text-sm text-slate-400" }, "Idees i roadmap professional")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-CScwF_Xe.js.map
