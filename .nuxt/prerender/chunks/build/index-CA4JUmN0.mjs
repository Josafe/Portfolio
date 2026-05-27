import { _ as __nuxt_component_0 } from './nuxt-link-CuWyGe-0.mjs';
import { defineComponent, resolveComponent, mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'file://C:/Users/josaf/Desktop/Projectes/Portfolio/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderClass } from 'file://C:/Users/josaf/Desktop/Projectes/Portfolio/node_modules/vue/server-renderer/index.mjs';
import { p as publicAssetsURL } from '../_/nitro.mjs';
import { b as useI18n, g as useSeoMeta, f as useRuntimeConfig } from './server.mjs';
import 'file://C:/Users/josaf/Desktop/Projectes/Portfolio/node_modules/ufo/dist/index.mjs';
import 'file://C:/Users/josaf/Desktop/Projectes/Portfolio/node_modules/h3/dist/index.mjs';
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

const _imports_0 = publicAssetsURL("/images/cv/fullstack-preview.jpg");
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "HeroSection",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative min-w-0 overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 sm:p-8 lg:p-10" }, _attrs))}><div class="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.18),transparent_45%)]"></div><div class="pointer-events-none absolute -left-8 top-16 h-40 w-40 rounded-full bg-brand-500/10 blur-3xl"></div><div class="pointer-events-none absolute right-0 bottom-0 h-52 w-52 rounded-full bg-sky-500/10 blur-3xl"></div><div class="relative grid w-full min-w-0 gap-10 xl:grid-cols-[1.1fr_0.9fr] xl:items-center"><div class="space-y-8 min-w-0"><div class="inline-flex max-w-max items-center gap-3 rounded-full border border-brand-500/30 bg-white/5 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-brand-300 shadow-[0_0_0_1px_rgba(255,255,255,0.04)]"><span class="h-2.5 w-2.5 rounded-full bg-brand-500 shadow-[0_0_16px_rgba(99,102,241,0.4)]"></span> ${ssrInterpolate(unref(t)("index.hero.badge"))}</div><div class="space-y-6"><h1 class="break-words text-4xl font-semibold leading-[1.05] tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl xl:text-7xl">${ssrInterpolate(unref(t)("index.hero.heading"))}</h1><p class="max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base lg:text-lg">${ssrInterpolate(unref(t)("index.hero.paragraph"))}</p></div><div class="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/projects",
        class: "inline-flex w-full justify-center whitespace-nowrap rounded-full bg-gradient-to-r from-brand-500 via-violet-500 to-sky-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_18px_50px_rgba(99,102,241,0.22)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_80px_rgba(99,102,241,0.28)] sm:w-auto"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("index.hero.projects"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("index.hero.projects")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/about",
        class: "inline-flex w-full justify-center whitespace-nowrap rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition duration-300 hover:border-brand-400 hover:bg-white/10 sm:w-auto"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("index.hero.about"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("index.hero.about")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="grid gap-3 sm:grid-cols-2 xl:grid-cols-4"><article class="rounded-3xl border border-white/10 bg-slate-900/80 p-4 text-center shadow-soft backdrop-blur transition hover:-translate-y-0.5 hover:border-brand-400/30"><p class="text-2xl font-semibold text-white">10+</p><p class="mt-2 text-xs uppercase tracking-[0.2em] text-slate-400">${ssrInterpolate(unref(t)("index.hero.stats.projects"))}</p></article><article class="rounded-3xl border border-white/10 bg-slate-900/80 p-4 text-center shadow-soft backdrop-blur transition hover:-translate-y-0.5 hover:border-violet-400/30"><p class="text-2xl font-semibold text-white">AI Systems</p><p class="mt-2 text-xs uppercase tracking-[0.2em] text-slate-400">${ssrInterpolate(unref(t)("index.hero.stats.ai"))}</p></article><article class="rounded-3xl border border-white/10 bg-slate-900/80 p-4 text-center shadow-soft backdrop-blur transition hover:-translate-y-0.5 hover:border-sky-400/30"><p class="text-2xl font-semibold text-white">Full Stack</p><p class="mt-2 text-xs uppercase tracking-[0.2em] text-slate-400">${ssrInterpolate(unref(t)("index.hero.stats.fullStack"))}</p></article><article class="rounded-3xl border border-white/10 bg-slate-900/80 p-4 text-center shadow-soft backdrop-blur transition hover:-translate-y-0.5 hover:border-brand-400/30"><p class="text-2xl font-semibold text-white">Cloud</p><p class="mt-2 text-xs uppercase tracking-[0.2em] text-slate-400">${ssrInterpolate(unref(t)("index.hero.stats.cloud"))}</p></article></div><div class="flex flex-wrap gap-2"><span class="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.17em] text-slate-200 transition hover:border-brand-400/30 hover:bg-white/10">Vue</span><span class="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.17em] text-slate-200 transition hover:border-brand-400/30 hover:bg-white/10">Nuxt</span><span class="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.17em] text-slate-200 transition hover:border-brand-400/30 hover:bg-white/10">TypeScript</span><span class="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.17em] text-slate-200 transition hover:border-brand-400/30 hover:bg-white/10">AI Systems</span><span class="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.17em] text-slate-200 transition hover:border-brand-400/30 hover:bg-white/10">Docker</span></div></div><div class="relative min-w-0"><div class="relative mx-auto max-w-lg"><div class="absolute -left-8 -top-6 h-32 w-32 rounded-full bg-brand-500/10 blur-3xl"></div><div class="absolute right-0 top-12 h-28 w-28 rounded-full bg-sky-500/10 blur-3xl"></div><div class="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/95 shadow-[0_40px_120px_rgba(15,23,42,0.35)] transition duration-500 hover:-translate-y-1"><img${ssrRenderAttr("src", _imports_0)} alt="Professional portrait" class="aspect-[4/5] w-full object-cover"></div><div class="mt-6 grid gap-4 sm:grid-cols-2"><div class="rounded-3xl border border-white/10 bg-slate-900/80 p-4 shadow-soft backdrop-blur transition hover:-translate-y-0.5 hover:border-brand-400/30"><p class="text-xs uppercase tracking-[0.18em] text-slate-400">${ssrInterpolate(unref(t)("index.hero.featuredStackLabel"))}</p><p class="mt-3 text-sm font-semibold text-white">${ssrInterpolate(unref(t)("index.hero.featuredStackText"))}</p></div><div class="rounded-3xl border border-white/10 bg-slate-900/80 p-4 shadow-soft backdrop-blur transition hover:-translate-y-0.5 hover:border-sky-400/30"><p class="text-xs uppercase tracking-[0.18em] text-slate-400">${ssrInterpolate(unref(t)("index.hero.liveConceptLabel"))}</p><p class="mt-3 text-sm font-semibold text-white">${ssrInterpolate(unref(t)("index.hero.liveConceptText"))}</p></div></div></div></div></div></section>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("sections/HeroSection.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "SocialLinks",
  __ssrInlineRender: true,
  setup(__props) {
    const socialLinks = [
      {
        label: "GitHub",
        href: "https://github.com/Josafe",
        icon: "M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.79.61-3.38-1.34-3.38-1.34-.45-1.16-1.1-1.47-1.1-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.04 1.53 1.04.89 1.52 2.33 1.08 2.9.83.09-.65.35-1.08.64-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.26.1-2.62 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.8a9.56 9.56 0 0 1 2.5.34c1.91-1.3 2.75-1.02 2.75-1.02.55 1.36.2 2.37.1 2.62.64.7 1.03 1.6 1.03 2.68 0 3.86-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85 0 1.34-.01 2.43-.01 2.75 0 .27.18.59.69.49A10.02 10.02 0 0 0 22 12c0-5.52-4.48-10-10-10z"
      },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/joan-sabater-ferr\xE9-2b4169115",
        icon: "M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19ZM8.34 17.11V10.91H6.16V17.11H8.34ZM7.25 9.85C8.03 9.85 8.65 9.25 8.65 8.47C8.65 7.69 8.03 7.1 7.25 7.1C6.47 7.1 5.85 7.69 5.85 8.47C5.85 9.25 6.47 9.85 7.25 9.85ZM17.84 17.11V13.4C17.84 11.98 17.29 11.05 16.1 11.05C15.25 11.05 14.72 11.57 14.47 12.03H14.42V10.91H12.25C12.27 11.58 12.25 17.11 12.25 17.11H14.42V13.94C14.42 13.28 14.51 12.72 15.13 12.72C15.74 12.72 15.76 13.34 15.76 13.98V17.11H17.84Z"
      },
      {
        label: "Instagram",
        href: "https://www.instagram.com/josafesf/",
        icon: "M7 2C4.243 2 2 4.243 2 7V17C2 19.757 4.243 22 7 22H17C19.757 22 22 19.757 22 17V7C22 4.243 19.757 2 17 2H7ZM16.5 6.5C16.5 7.328 15.828 8 15 8C14.172 8 13.5 7.328 13.5 6.5C13.5 5.672 14.172 5 15 5C15.828 5 16.5 5.672 16.5 6.5ZM12 8.8C14.322 8.8 16.2 10.678 16.2 13C16.2 15.322 14.322 17.2 12 17.2C9.678 17.2 7.8 15.322 7.8 13C7.8 10.678 9.678 8.8 12 8.8ZM12 10.1C10.624 10.1 9.5 11.224 9.5 12.6C9.5 13.976 10.624 15.1 12 15.1C13.376 15.1 14.5 13.976 14.5 12.6C14.5 11.224 13.376 10.1 12 10.1Z"
      },
      {
        label: "Email",
        href: "mailto:josafesf2@gmail.com",
        icon: "M3 5.25C3 4.007 4.007 3 5.25 3H18.75C19.993 3 21 4.007 21 5.25V18.75C21 19.993 19.993 21 18.75 21H5.25C4.007 21 3 19.993 3 18.75V5.25ZM19.5 7.03L12 11.85L4.5 7.03V5.25L12 10.07L19.5 5.25V7.03Z"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid gap-3 sm:grid-cols-2" }, _attrs))}><!--[-->`);
      ssrRenderList(socialLinks, (link) => {
        _push(`<a${ssrRenderAttr("href", link.href)} target="_blank" rel="noreferrer" class="group flex w-full min-w-0 items-center gap-3 overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 px-4 py-4 text-sm text-slate-200 transition duration-300 hover:-translate-y-1 hover:border-brand-400/30 hover:bg-slate-900/90"><span class="inline-flex h-10 w-10 min-w-[2.5rem] items-center justify-center rounded-2xl bg-white/5 text-brand-400 transition group-hover:bg-brand-500/15"><svg viewBox="0 0 24 24" class="h-4.5 w-4.5 fill-current"><path${ssrRenderAttr("d", link.icon)}></path></svg></span><span class="flex-1 min-w-0"><span class="block text-sm font-semibold text-white">${ssrInterpolate(link.label)}</span><span class="block truncate text-xs text-slate-400">${ssrInterpolate(link.href.replace(/https?:\/\//, ""))}</span></span></a>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/SocialLinks.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TechStack",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const stackCategories = [
      {
        title: "Frontend Engineering",
        description: "Modern UI frameworks and component architecture",
        icon: "M3 5a2 2 0 0 1 2-2h3.28a1 1 0 0 1 .948.684l1.498 4.493a1 1 0 0 1-.502 1.21l-2.257 1.13a11.042 11.042 0 0 0 5.516 5.516l1.13-2.257a1 1 0 0 1 1.21-.502l4.493 1.498a1 1 0 0 1 .684.949V19a2 2 0 0 1-2 2h-1C9.716 21 3 14.284 3 6V5z",
        color: "from-blue-500/20 to-cyan-500/20",
        items: ["Vue", "Nuxt", "TypeScript", "JavaScript", "TailwindCSS"]
      },
      {
        title: "Backend & APIs",
        description: "Scalable server architectures and integrations",
        icon: "M5 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM12 2a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm7 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-7 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM5 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm0 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7-7a1 1 0 1 1 0-2 1 1 0 0 1 0 2z",
        color: "from-violet-500/20 to-purple-500/20",
        items: ["Laravel", "Node.js", "Java", "Python", "REST APIs"]
      },
      {
        title: "AI & Automation",
        description: "Intelligent systems and multi-agent architectures",
        icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z",
        color: "from-amber-500/20 to-orange-500/20",
        items: ["AI Systems", "LLMs", "Multi-Agent Systems", "Automation", "Python AI"]
      },
      {
        title: "Databases",
        description: "Data modeling and query optimization",
        icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4m0 0V5c0-2.21-3.582-4-8-4S4 2.79 4 5v2m16 4.5v5c0 2.21-3.582 4-8 4s-8-1.79-8-4v-5",
        color: "from-emerald-500/20 to-teal-500/20",
        items: ["PostgreSQL", "SQLite", "SQL Server", "MySQL", "NoSQL"]
      },
      {
        title: "Cloud & Infrastructure",
        description: "Distributed systems and edge computing",
        icon: "M3 15a4 4 0 0 0 4 4h9a5 5 0 1 0-.1-9.999 5.002 5.002 0 1 0-9.78 2.052A4.002 4.002 0 0 0 3 15z",
        color: "from-sky-500/20 to-blue-500/20",
        items: ["AWS", "Azure", "Linux", "Networking", "CDN"]
      },
      {
        title: "DevOps & Containers",
        description: "Deployment pipelines and infrastructure automation",
        icon: "M13 10V3L4 14h7v7l9-11h-7z",
        color: "from-rose-500/20 to-pink-500/20",
        items: ["Docker", "Kubernetes", "CI/CD", "Git", "GitHub Actions"]
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full min-w-0 space-y-8" }, _attrs))}><div class="rounded-[2rem] border border-white/10 bg-slate-900/80 p-5 sm:p-6 shadow-soft backdrop-blur-xl overflow-hidden"><div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"><div class="min-w-0"><p class="text-sm uppercase tracking-[0.11em] text-slate-400">${ssrInterpolate(unref(t)("index.tech.title"))}</p><h2 class="mt-3 text-lg font-semibold text-white">${ssrInterpolate(unref(t)("index.tech.subtitle"))}</h2></div><div class="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-500/10 text-brand-200"><span class="text-sm font-semibold">\u2192</span></div></div></div><div class="grid gap-5 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"><!--[-->`);
      ssrRenderList(stackCategories, (category, idx) => {
        _push(`<div class="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70 p-5 sm:p-6 transition duration-300 hover:border-white/20 hover:bg-slate-900/90"><div class="${ssrRenderClass(`absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-br ${category.color} opacity-0 blur-2xl transition-all duration-300 group-hover:opacity-100`)}"></div><div class="relative space-y-5"><div class="flex items-start justify-between gap-4"><div class="min-w-0 flex-1"><h3 class="text-base font-semibold text-white">${ssrInterpolate(category.title)}</h3><p class="mt-2 text-sm text-slate-400">${ssrInterpolate(category.description)}</p></div><div class="inline-flex h-10 w-10 min-w-[2.5rem] items-center justify-center rounded-xl bg-white/5 text-slate-300 transition-all group-hover:bg-white/10"><svg viewBox="0 0 24 24" class="h-5 w-5 fill-current"><path${ssrRenderAttr("d", category.icon)}></path></svg></div></div><div class="flex flex-wrap gap-2"><!--[-->`);
        ssrRenderList(category.items, (tech) => {
          _push(`<span class="inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-200 transition duration-200 hover:border-white/20 hover:bg-white/10">${ssrInterpolate(tech)}</span>`);
        });
        _push(`<!--]--></div></div></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/TechStack.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const config = useRuntimeConfig();
    useSeoMeta({
      title: t("meta.index.title"),
      description: t("meta.index.description"),
      ogTitle: t("meta.index.ogTitle"),
      ogDescription: t("meta.index.ogDescription"),
      ogUrl: config.public.siteUrl,
      twitterCard: "summary_large_image"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BackgroundEffects = resolveComponent("BackgroundEffects");
      const _component_HeroSection = _sfc_main$3;
      const _component_HomeSocialLinks = _sfc_main$2;
      const _component_HomeTechStack = _sfc_main$1;
      const _component_NavigationCards = resolveComponent("NavigationCards");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative overflow-hidden bg-slate-950 text-white min-w-0" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_BackgroundEffects, null, null, _parent));
      _push(`<main class="relative mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">`);
      _push(ssrRenderComponent(_component_HeroSection, null, null, _parent));
      _push(`<section class="mt-16 grid gap-8 grid-cols-1 xl:grid-cols-[1fr_0.9fr]"><div class="space-y-6 min-w-0"><div class="w-full min-w-0 overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/70 p-5 sm:p-6 shadow-soft backdrop-blur-xl"><div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"><div class="min-w-0"><p class="text-sm uppercase tracking-[0.11em] sm:tracking-[0.14em] text-slate-400">${ssrInterpolate(unref(t)("index.connect.label"))}</p><h2 class="mt-3 text-2xl font-semibold text-white break-words">${ssrInterpolate(unref(t)("index.connect.title"))}</h2></div></div><div class="mt-6">`);
      _push(ssrRenderComponent(_component_HomeSocialLinks, null, null, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(_component_HomeTechStack, null, null, _parent));
      _push(`</div><div class="min-w-0">`);
      _push(ssrRenderComponent(_component_NavigationCards, null, null, _parent));
      _push(`</div></section></main></div>`);
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
//# sourceMappingURL=index-CA4JUmN0.mjs.map
