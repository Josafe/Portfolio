import { _ as __nuxt_component_0 } from './nuxt-link-CuWyGe-0.mjs';
import { defineComponent, mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'file://C:/Users/josaf/Desktop/Projectes/Portfolio/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'file://C:/Users/josaf/Desktop/Projectes/Portfolio/node_modules/vue/server-renderer/index.mjs';
import { b as useI18n, g as useSeoMeta } from './server.mjs';
import 'file://C:/Users/josaf/Desktop/Projectes/Portfolio/node_modules/ufo/dist/index.mjs';
import 'file://C:/Users/josaf/Desktop/Projectes/Portfolio/node_modules/ofetch/dist/node.mjs';
import '../_/nitro.mjs';
import 'file://C:/Users/josaf/Desktop/Projectes/Portfolio/node_modules/h3/dist/index.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "future-projects",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    useSeoMeta({
      title: t("meta.future.title"),
      description: t("meta.future.description")
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid gap-12" }, _attrs))}><div class="grid gap-4"><br><h1 class="text-4xl font-bold text-white">${ssrInterpolate(unref(t)("future.header.title"))}</h1><p class="text-slate-400">${ssrInterpolate(unref(t)("future.header.description"))}</p></div><div class="grid gap-8"><section class="grid gap-6"><h2 class="text-2xl font-semibold text-white">Idees SaaS</h2><div class="grid gap-4 md:grid-cols-2"><div class="rounded-lg border border-slate-800 p-6"><h3 class="text-lg font-semibold text-white mb-2">Plataforma d&#39;Automatitzaci\xF3 per Pimes</h3><p class="text-sm text-slate-400 mb-4"> SaaS que combina IA i automatitzaci\xF3 per ajudar petites empreses a optimitzar processos interns. </p><div class="flex flex-wrap gap-2"><span class="rounded-full bg-slate-800 px-2 py-1 text-xs text-slate-300">Vue.js</span><span class="rounded-full bg-slate-800 px-2 py-1 text-xs text-slate-300">Laravel</span><span class="rounded-full bg-slate-800 px-2 py-1 text-xs text-slate-300">AI Integration</span></div></div><div class="rounded-lg border border-slate-800 p-6"><h3 class="text-lg font-semibold text-white mb-2">Marketplace de Serveis Digitals</h3><p class="text-sm text-slate-400 mb-4"> Plataforma que connecta professionals digitals amb empreses que necessiten serveis especialitzats. </p><div class="flex flex-wrap gap-2"><span class="rounded-full bg-slate-800 px-2 py-1 text-xs text-slate-300">Next.js</span><span class="rounded-full bg-slate-800 px-2 py-1 text-xs text-slate-300">Stripe</span><span class="rounded-full bg-slate-800 px-2 py-1 text-xs text-slate-300">Real-time</span></div></div></div></section><section class="grid gap-6"><h2 class="text-2xl font-semibold text-white">Automatitzacions IA</h2><div class="grid gap-4 md:grid-cols-2"><div class="rounded-lg border border-slate-800 p-6"><h3 class="text-lg font-semibold text-white mb-2">Agent de Gesti\xF3 de Continguts</h3><p class="text-sm text-slate-400 mb-4"> Sistema multiagent que genera, optimitza i distribueix contingut per a xarxes socials i blogs. </p><div class="flex flex-wrap gap-2"><span class="rounded-full bg-slate-800 px-2 py-1 text-xs text-slate-300">Python</span><span class="rounded-full bg-slate-800 px-2 py-1 text-xs text-slate-300">LLMs</span><span class="rounded-full bg-slate-800 px-2 py-1 text-xs text-slate-300">Multi-Agent</span></div></div><div class="rounded-lg border border-slate-800 p-6"><h3 class="text-lg font-semibold text-white mb-2">Sistema d&#39;An\xE0lisi Predictiva</h3><p class="text-sm text-slate-400 mb-4"> IA que analitza dades empresarials per proporcionar insights predictius i recomanacions accionables. </p><div class="flex flex-wrap gap-2"><span class="rounded-full bg-slate-800 px-2 py-1 text-xs text-slate-300">Machine Learning</span><span class="rounded-full bg-slate-800 px-2 py-1 text-xs text-slate-300">Data Science</span><span class="rounded-full bg-slate-800 px-2 py-1 text-xs text-slate-300">APIs</span></div></div></div></section><section class="grid gap-6"><h2 class="text-2xl font-semibold text-white">Sistemes Multiagent Avan\xE7ats</h2><div class="grid gap-4 md:grid-cols-2"><div class="rounded-lg border border-slate-800 p-6"><h3 class="text-lg font-semibold text-white mb-2">Framework de Coordinaci\xF3 d&#39;Agents</h3><p class="text-sm text-slate-400 mb-4"> Framework obert per desenvolupar i coordinar sistemes d&#39;agents IA en entorns complexos. </p><div class="flex flex-wrap gap-2"><span class="rounded-full bg-slate-800 px-2 py-1 text-xs text-slate-300">Python</span><span class="rounded-full bg-slate-800 px-2 py-1 text-xs text-slate-300">Distributed Systems</span><span class="rounded-full bg-slate-800 px-2 py-1 text-xs text-slate-300">Open Source</span></div></div><div class="rounded-lg border border-slate-800 p-6"><h3 class="text-lg font-semibold text-white mb-2">Agent d&#39;Optimitzaci\xF3 Empresarial</h3><p class="text-sm text-slate-400 mb-4"> Agent intel\xB7ligent que optimitza processos empresarials mitjan\xE7ant aprenentatge continu i adaptaci\xF3. </p><div class="flex flex-wrap gap-2"><span class="rounded-full bg-slate-800 px-2 py-1 text-xs text-slate-300">Reinforcement Learning</span><span class="rounded-full bg-slate-800 px-2 py-1 text-xs text-slate-300">Business Intelligence</span><span class="rounded-full bg-slate-800 px-2 py-1 text-xs text-slate-300">APIs</span></div></div></div></section><section class="grid gap-6"><h2 class="text-2xl font-semibold text-white">Projectes d&#39;Investigaci\xF3</h2><div class="grid gap-4 md:grid-cols-2"><div class="rounded-lg border border-slate-800 p-6"><h3 class="text-lg font-semibold text-white mb-2">IA per a Sostenibilitat</h3><p class="text-sm text-slate-400 mb-4"> Recerca en aplicacions d&#39;IA per a la transici\xF3 energ\xE8tica i sostenibilitat ambiental. </p><div class="flex flex-wrap gap-2"><span class="rounded-full bg-slate-800 px-2 py-1 text-xs text-slate-300">Research</span><span class="rounded-full bg-slate-800 px-2 py-1 text-xs text-slate-300">Sustainability</span><span class="rounded-full bg-slate-800 px-2 py-1 text-xs text-slate-300">IoT</span></div></div><div class="rounded-lg border border-slate-800 p-6"><h3 class="text-lg font-semibold text-white mb-2">Interf\xEDcies Hum\xE0-Agent</h3><p class="text-sm text-slate-400 mb-4"> Disseny d&#39;interf\xEDcies intu\xEFtives per a la interacci\xF3 amb sistemes d&#39;agents complexos. </p><div class="flex flex-wrap gap-2"><span class="rounded-full bg-slate-800 px-2 py-1 text-xs text-slate-300">UX Research</span><span class="rounded-full bg-slate-800 px-2 py-1 text-xs text-slate-300">HCI</span><span class="rounded-full bg-slate-800 px-2 py-1 text-xs text-slate-300">Frontend</span></div></div></div></section></div><div class="rounded-lg border border-slate-800 p-6 text-center"><h3 class="text-lg font-semibold text-white mb-2">${ssrInterpolate(unref(t)("future.cta.title"))}</h3><p class="text-slate-400 mb-4">${ssrInterpolate(unref(t)("future.cta.description"))}</p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/about",
        class: "inline-block rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-950 hover:bg-slate-200"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("future.cta.cta"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("future.cta.cta")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/future-projects.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=future-projects-D-helkN-.mjs.map
