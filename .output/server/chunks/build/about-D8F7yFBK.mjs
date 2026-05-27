import { defineComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { b as useI18n, g as useSeoMeta } from './server.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'vue-router';
import 'node:fs';
import 'node:path';
import 'node:url';
import 'node:crypto';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
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
    const { t } = useI18n();
    useSeoMeta({
      title: t("meta.about.title"),
      description: t("meta.about.description")
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SocialLinks = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid gap-16" }, _attrs))}><section class="grid gap-7"><div class="grid gap-4"><br><p class="text-sm font-semibold uppercase tracking-[0.2em] text-brand-500">${ssrInterpolate(unref(t)("about.hero.label"))}</p><h1 class="max-w-4xl text-4xl font-bold leading-tight text-white md:text-6xl">${ssrInterpolate(unref(t)("about.hero.heading"))}</h1></div><h2 class="text-2xl font-semibold text-white">About me</h2><p class="max-w-4xl text-slate-300"> S\xF3c enginyer de sistemes AI i desenvolupador full stack orientat a construir solucions escalables, mantenibles i orientades a negoci. Tinc experi\xE8ncia en ecosistemes Laravel/Vue, integracions cloud i sistemes multiagent. </p></section><section class="grid gap-8 md:grid-cols-2"><div class="grid gap-4"><h2 class="text-2xl font-semibold text-white">${ssrInterpolate(unref(t)("about.specializations.title"))}</h2><div class="grid gap-3"><div class="rounded-lg border border-slate-800 p-4"><h3 class="font-semibold text-white">${ssrInterpolate(unref(t)("about.specializations.fullStack.title"))}</h3><p class="mt-1 text-sm text-slate-400">${ssrInterpolate(unref(t)("about.specializations.fullStack.description"))}</p></div><div class="rounded-lg border border-slate-800 p-4"><h3 class="font-semibold text-white">${ssrInterpolate(unref(t)("about.specializations.ai.title"))}</h3><p class="mt-1 text-sm text-slate-400">${ssrInterpolate(unref(t)("about.specializations.ai.description"))}</p></div><div class="rounded-lg border border-slate-800 p-4"><h3 class="font-semibold text-white">${ssrInterpolate(unref(t)("about.specializations.architecture.title"))}</h3><p class="mt-1 text-sm text-slate-400">${ssrInterpolate(unref(t)("about.specializations.architecture.description"))}</p></div></div></div><div class="grid gap-4"><h2 class="text-2xl font-semibold text-white">${ssrInterpolate(unref(t)("about.interests.title"))}</h2><div class="grid gap-3"><div class="rounded-lg border border-slate-800 p-4"><h3 class="font-semibold text-white">${ssrInterpolate(unref(t)("about.interests.impact.title"))}</h3><p class="mt-1 text-sm text-slate-400">${ssrInterpolate(unref(t)("about.interests.impact.description"))}</p></div><div class="rounded-lg border border-slate-800 p-4"><h3 class="font-semibold text-white">${ssrInterpolate(unref(t)("about.interests.innovation.title"))}</h3><p class="mt-1 text-sm text-slate-400">${ssrInterpolate(unref(t)("about.interests.innovation.description"))}</p></div><div class="rounded-lg border border-slate-800 p-4"><h3 class="font-semibold text-white">${ssrInterpolate(unref(t)("about.interests.collaboration.title"))}</h3><p class="mt-1 text-sm text-slate-400">${ssrInterpolate(unref(t)("about.interests.collaboration.description"))}</p></div></div></div></section><section class="grid gap-6"><h2 class="text-2xl font-semibold text-white">${ssrInterpolate(unref(t)("about.philosophy.title"))}</h2><div class="max-w-4xl"><p class="text-slate-300 leading-relaxed">${ssrInterpolate(unref(t)("about.philosophy.text"))}</p></div></section><section class="grid gap-6"><h2 class="text-2xl font-semibold text-white">${ssrInterpolate(unref(t)("about.contact.title"))}</h2><p class="text-slate-300">${ssrInterpolate(unref(t)("about.contact.text"))}</p><div class="flex flex-wrap gap-4"><a href="mailto:josafesf2@gmail.co" class="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-950 hover:bg-slate-200">${ssrInterpolate(unref(t)("about.contact.email"))}</a>`);
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

export { _sfc_main as default };
//# sourceMappingURL=about-D8F7yFBK.mjs.map
