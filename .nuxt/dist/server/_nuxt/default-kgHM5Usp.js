import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "C:/Users/josaf/Desktop/Projectes/Portfolio/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "C:/Users/josaf/Desktop/Projectes/Portfolio/node_modules/hookable/dist/index.mjs";
import "C:/Users/josaf/Desktop/Projectes/Portfolio/node_modules/unctx/dist/index.mjs";
import "C:/Users/josaf/Desktop/Projectes/Portfolio/node_modules/h3/dist/index.mjs";
import "vue-router";
import "C:/Users/josaf/Desktop/Projectes/Portfolio/node_modules/defu/dist/defu.mjs";
import "C:/Users/josaf/Desktop/Projectes/Portfolio/node_modules/ufo/dist/index.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-slate-950 text-slate-100 antialiased" }, _attrs))}><main class="mx-auto w-[min(1120px,92vw)] py-10 sm:py-14">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</main></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  _default as default
};
//# sourceMappingURL=default-kgHM5Usp.js.map
