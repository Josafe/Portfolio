import { _ as __nuxt_component_0 } from './nuxt-link-CuWyGe-0.mjs';
import { defineComponent, mergeProps, ref, withCtx, createTextVNode, unref, useSSRContext } from 'file://C:/Users/josaf/Desktop/Projectes/Portfolio/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from 'file://C:/Users/josaf/Desktop/Projectes/Portfolio/node_modules/vue/server-renderer/index.mjs';
import { b as useI18n, u as useHead } from './server.mjs';
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

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Navbar",
  __ssrInlineRender: true,
  setup(__props) {
    const isOpen = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<nav${ssrRenderAttrs(mergeProps({ class: "fixed top-0 z-50 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur-sm" }, _attrs))}><div class="mx-auto w-[min(1120px,92vw)] px-4 py-4"><div class="flex items-center justify-between">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "text-lg font-semibold text-white hover:text-slate-300"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Josafe `);
          } else {
            return [
              createTextVNode(" Josafe ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="hidden space-x-8 md:flex">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "text-slate-300 hover:text-white transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Home `);
          } else {
            return [
              createTextVNode(" Home ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/about",
        class: "text-slate-300 hover:text-white transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` About `);
          } else {
            return [
              createTextVNode(" About ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/projects",
        class: "text-slate-300 hover:text-white transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Projects `);
          } else {
            return [
              createTextVNode(" Projects ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/curriculum",
        class: "text-slate-300 hover:text-white transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Curriculum `);
          } else {
            return [
              createTextVNode(" Curriculum ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/future-projects",
        class: "text-slate-300 hover:text-white transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Future `);
          } else {
            return [
              createTextVNode(" Future ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><button class="md:hidden text-slate-300 hover:text-white"><svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">`);
      if (!unref(isOpen)) {
        _push(`<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>`);
      } else {
        _push(`<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>`);
      }
      _push(`</svg></button></div>`);
      if (unref(isOpen)) {
        _push(`<div class="mt-4 space-y-4 md:hidden">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/",
          onClick: ($event) => isOpen.value = false,
          class: "block text-slate-300 hover:text-white transition-colors"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Home `);
            } else {
              return [
                createTextVNode(" Home ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/about",
          onClick: ($event) => isOpen.value = false,
          class: "block text-slate-300 hover:text-white transition-colors"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` About `);
            } else {
              return [
                createTextVNode(" About ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/projects",
          onClick: ($event) => isOpen.value = false,
          class: "block text-slate-300 hover:text-white transition-colors"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Projects `);
            } else {
              return [
                createTextVNode(" Projects ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/curriculum",
          onClick: ($event) => isOpen.value = false,
          class: "block text-slate-300 hover:text-white transition-colors"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Curriculum `);
            } else {
              return [
                createTextVNode(" Curriculum ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/future-projects",
          onClick: ($event) => isOpen.value = false,
          class: "block text-slate-300 hover:text-white transition-colors"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Future `);
            } else {
              return [
                createTextVNode(" Future ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></nav>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Navbar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const { locale } = useI18n();
    useHead({ htmlAttrs: { lang: locale.value } });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Navbar = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen overflow-x-hidden bg-slate-950 text-slate-100 antialiased" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_Navbar, null, null, _parent));
      _push(`<main class="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-14 pt-24">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-CneQPgth.mjs.map
