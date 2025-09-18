// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  externals,
  distDir,
  publicUrl,
  devServer
) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        if (externals[name]) {
          return externals[name];
        }
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  // INSERT_LOAD_HERE

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });
    }
  }
})({"bbsMS":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SERVER_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "3d505ad1f1733000";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_SERVER_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_SERVER_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ , bundleNotFound = false;
function getHostname() {
    return HMR_HOST || (typeof location !== 'undefined' && location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || (typeof location !== 'undefined' ? location.port : HMR_SERVER_PORT);
}
// eslint-disable-next-line no-redeclare
let WebSocket = globalThis.WebSocket;
if (!WebSocket && typeof module.bundle.root === 'function') try {
    // eslint-disable-next-line no-global-assign
    WebSocket = module.bundle.root('ws');
} catch  {
// ignore.
}
var hostname = getHostname();
var port = getPort();
var protocol = HMR_SECURE || typeof location !== 'undefined' && location.protocol === 'https:' && ![
    'localhost',
    '127.0.0.1',
    '0.0.0.0'
].includes(hostname) ? 'wss' : 'ws';
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if (!parent || !parent.isParcelRequire) {
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        // If we're running in the dev server's node runner, listen for messages on the parent port.
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) {
            parentPort.on('message', async (message)=>{
                try {
                    await handleMessage(message);
                    parentPort.postMessage('updated');
                } catch  {
                    parentPort.postMessage('restart');
                }
            });
            // After the bundle has finished running, notify the dev server that the HMR update is complete.
            queueMicrotask(()=>parentPort.postMessage('ready'));
        }
    } catch  {
        if (typeof WebSocket !== 'undefined') try {
            ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
        } catch (err) {
            // Ignore cloudflare workers error.
            if (err.message && !err.message.includes('Disallowed operation called within global scope')) console.error(err.message);
        }
    }
    if (ws) {
        // $FlowFixMe
        ws.onmessage = async function(event /*: {data: string, ...} */ ) {
            var data /*: HMRMessage */  = JSON.parse(event.data);
            await handleMessage(data);
        };
        if (ws instanceof WebSocket) {
            ws.onerror = function(e) {
                if (e.message) console.error(e.message);
            };
            ws.onclose = function() {
                console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
            };
        }
    }
}
async function handleMessage(data /*: HMRMessage */ ) {
    checkedAssets = {} /*: {|[string]: boolean|} */ ;
    disposedAssets = {} /*: {|[string]: boolean|} */ ;
    assetsToAccept = [];
    assetsToDispose = [];
    bundleNotFound = false;
    if (data.type === 'reload') fullReload();
    else if (data.type === 'update') {
        // Remove error overlay if there is one
        if (typeof document !== 'undefined') removeErrorOverlay();
        let assets = data.assets;
        // Handle HMR Update
        let handled = assets.every((asset)=>{
            return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        });
        // Dispatch a custom event in case a bundle was not found. This might mean
        // an asset on the server changed and we should reload the page. This event
        // gives the client an opportunity to refresh without losing state
        // (e.g. via React Server Components). If e.preventDefault() is not called,
        // we will trigger a full page reload.
        if (handled && bundleNotFound && assets.some((a)=>a.envHash !== HMR_ENV_HASH) && typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') handled = !window.dispatchEvent(new CustomEvent('parcelhmrreload', {
            cancelable: true
        }));
        if (handled) {
            console.clear();
            // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
            if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
            await hmrApplyUpdates(assets);
            hmrDisposeQueue();
            // Run accept callbacks. This will also re-execute other disposed assets in topological order.
            let processedAssets = {};
            for(let i = 0; i < assetsToAccept.length; i++){
                let id = assetsToAccept[i][1];
                if (!processedAssets[id]) {
                    hmrAccept(assetsToAccept[i][0], id);
                    processedAssets[id] = true;
                }
            }
        } else fullReload();
    }
    if (data.type === 'error') {
        // Log parcel errors to console
        for (let ansiDiagnostic of data.diagnostics.ansi){
            let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
            console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
        }
        if (typeof document !== 'undefined') {
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="${protocol === 'wss' ? 'https' : 'http'}://${hostname}:${port}/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if (typeof location !== 'undefined' && 'reload' in location) location.reload();
    else if (typeof extCtx !== 'undefined' && extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
    else try {
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) parentPort.postMessage('restart');
    } catch (err) {
        console.error("[parcel] \u26A0\uFE0F An HMR update was not accepted. Please restart the process.");
    }
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout || typeof document === 'undefined') return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    checkedAssets = {};
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else if (a !== null) {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) {
            bundleNotFound = true;
            return true;
        }
        return hmrAcceptCheckOne(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return null;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    if (!cached) return true;
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
    return false;
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"l8yka":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _alpinejs = require("alpinejs");
var _alpinejsDefault = parcelHelpers.interopDefault(_alpinejs);
var _focus = require("@alpinejs/focus");
var _focusDefault = parcelHelpers.interopDefault(_focus);
var _fancybox = require("@fancyapps/ui/dist/fancybox");
var _carousel = require("@fancyapps/ui/dist/carousel");
var _carouselArrows = require("@fancyapps/ui/dist/carousel/carousel.arrows");
var _carouselLazyload = require("@fancyapps/ui/dist/carousel/carousel.lazyload");
var _carouselThumbs = require("@fancyapps/ui/dist/carousel/carousel.thumbs");
var _alpineOverrides = require("./alpine-overrides");
window.Arrows = (0, _carouselArrows.Arrows);
window.Carousel = (0, _carousel.Carousel);
window.Fancybox = (0, _fancybox.Fancybox);
window.Lazyload = (0, _carouselLazyload.Lazyload);
window.Thumbs = (0, _carouselThumbs.Thumbs);
(0, _alpinejsDefault.default).plugin([
    (0, _focusDefault.default)
]);
(0, _alpineOverrides.initOverrides)();
(0, _alpinejsDefault.default).start();

},{"alpinejs":"69hXP","@alpinejs/focus":"iY8M2","@fancyapps/ui/dist/fancybox":"44R1B","@fancyapps/ui/dist/carousel":"29NKY","@fancyapps/ui/dist/carousel/carousel.arrows":"4gaNo","@fancyapps/ui/dist/carousel/carousel.lazyload":"lIfuM","@fancyapps/ui/dist/carousel/carousel.thumbs":"i9Umc","./alpine-overrides":"4G3QT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"69hXP":[function(require,module,exports,__globalThis) {
// packages/alpinejs/src/scheduler.js
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Alpine", ()=>src_default);
parcelHelpers.export(exports, "default", ()=>module_default);
var flushPending = false;
var flushing = false;
var queue = [];
var lastFlushedIndex = -1;
function scheduler(callback) {
    queueJob(callback);
}
function queueJob(job) {
    if (!queue.includes(job)) queue.push(job);
    queueFlush();
}
function dequeueJob(job) {
    let index = queue.indexOf(job);
    if (index !== -1 && index > lastFlushedIndex) queue.splice(index, 1);
}
function queueFlush() {
    if (!flushing && !flushPending) {
        flushPending = true;
        queueMicrotask(flushJobs);
    }
}
function flushJobs() {
    flushPending = false;
    flushing = true;
    for(let i = 0; i < queue.length; i++){
        queue[i]();
        lastFlushedIndex = i;
    }
    queue.length = 0;
    lastFlushedIndex = -1;
    flushing = false;
}
// packages/alpinejs/src/reactivity.js
var reactive;
var effect;
var release;
var raw;
var shouldSchedule = true;
function disableEffectScheduling(callback) {
    shouldSchedule = false;
    callback();
    shouldSchedule = true;
}
function setReactivityEngine(engine) {
    reactive = engine.reactive;
    release = engine.release;
    effect = (callback)=>engine.effect(callback, {
            scheduler: (task)=>{
                if (shouldSchedule) scheduler(task);
                else task();
            }
        });
    raw = engine.raw;
}
function overrideEffect(override) {
    effect = override;
}
function elementBoundEffect(el) {
    let cleanup2 = ()=>{};
    let wrappedEffect = (callback)=>{
        let effectReference = effect(callback);
        if (!el._x_effects) {
            el._x_effects = /* @__PURE__ */ new Set();
            el._x_runEffects = ()=>{
                el._x_effects.forEach((i)=>i());
            };
        }
        el._x_effects.add(effectReference);
        cleanup2 = ()=>{
            if (effectReference === void 0) return;
            el._x_effects.delete(effectReference);
            release(effectReference);
        };
        return effectReference;
    };
    return [
        wrappedEffect,
        ()=>{
            cleanup2();
        }
    ];
}
function watch(getter, callback) {
    let firstTime = true;
    let oldValue;
    let effectReference = effect(()=>{
        let value = getter();
        JSON.stringify(value);
        if (!firstTime) queueMicrotask(()=>{
            callback(value, oldValue);
            oldValue = value;
        });
        else oldValue = value;
        firstTime = false;
    });
    return ()=>release(effectReference);
}
// packages/alpinejs/src/mutation.js
var onAttributeAddeds = [];
var onElRemoveds = [];
var onElAddeds = [];
function onElAdded(callback) {
    onElAddeds.push(callback);
}
function onElRemoved(el, callback) {
    if (typeof callback === "function") {
        if (!el._x_cleanups) el._x_cleanups = [];
        el._x_cleanups.push(callback);
    } else {
        callback = el;
        onElRemoveds.push(callback);
    }
}
function onAttributesAdded(callback) {
    onAttributeAddeds.push(callback);
}
function onAttributeRemoved(el, name, callback) {
    if (!el._x_attributeCleanups) el._x_attributeCleanups = {};
    if (!el._x_attributeCleanups[name]) el._x_attributeCleanups[name] = [];
    el._x_attributeCleanups[name].push(callback);
}
function cleanupAttributes(el, names) {
    if (!el._x_attributeCleanups) return;
    Object.entries(el._x_attributeCleanups).forEach(([name, value])=>{
        if (names === void 0 || names.includes(name)) {
            value.forEach((i)=>i());
            delete el._x_attributeCleanups[name];
        }
    });
}
function cleanupElement(el) {
    el._x_effects?.forEach(dequeueJob);
    while(el._x_cleanups?.length)el._x_cleanups.pop()();
}
var observer = new MutationObserver(onMutate);
var currentlyObserving = false;
function startObservingMutations() {
    observer.observe(document, {
        subtree: true,
        childList: true,
        attributes: true,
        attributeOldValue: true
    });
    currentlyObserving = true;
}
function stopObservingMutations() {
    flushObserver();
    observer.disconnect();
    currentlyObserving = false;
}
var queuedMutations = [];
function flushObserver() {
    let records = observer.takeRecords();
    queuedMutations.push(()=>records.length > 0 && onMutate(records));
    let queueLengthWhenTriggered = queuedMutations.length;
    queueMicrotask(()=>{
        if (queuedMutations.length === queueLengthWhenTriggered) while(queuedMutations.length > 0)queuedMutations.shift()();
    });
}
function mutateDom(callback) {
    if (!currentlyObserving) return callback();
    stopObservingMutations();
    let result = callback();
    startObservingMutations();
    return result;
}
var isCollecting = false;
var deferredMutations = [];
function deferMutations() {
    isCollecting = true;
}
function flushAndStopDeferringMutations() {
    isCollecting = false;
    onMutate(deferredMutations);
    deferredMutations = [];
}
function onMutate(mutations) {
    if (isCollecting) {
        deferredMutations = deferredMutations.concat(mutations);
        return;
    }
    let addedNodes = [];
    let removedNodes = /* @__PURE__ */ new Set();
    let addedAttributes = /* @__PURE__ */ new Map();
    let removedAttributes = /* @__PURE__ */ new Map();
    for(let i = 0; i < mutations.length; i++){
        if (mutations[i].target._x_ignoreMutationObserver) continue;
        if (mutations[i].type === "childList") {
            mutations[i].removedNodes.forEach((node)=>{
                if (node.nodeType !== 1) return;
                if (!node._x_marker) return;
                removedNodes.add(node);
            });
            mutations[i].addedNodes.forEach((node)=>{
                if (node.nodeType !== 1) return;
                if (removedNodes.has(node)) {
                    removedNodes.delete(node);
                    return;
                }
                if (node._x_marker) return;
                addedNodes.push(node);
            });
        }
        if (mutations[i].type === "attributes") {
            let el = mutations[i].target;
            let name = mutations[i].attributeName;
            let oldValue = mutations[i].oldValue;
            let add2 = ()=>{
                if (!addedAttributes.has(el)) addedAttributes.set(el, []);
                addedAttributes.get(el).push({
                    name,
                    value: el.getAttribute(name)
                });
            };
            let remove = ()=>{
                if (!removedAttributes.has(el)) removedAttributes.set(el, []);
                removedAttributes.get(el).push(name);
            };
            if (el.hasAttribute(name) && oldValue === null) add2();
            else if (el.hasAttribute(name)) {
                remove();
                add2();
            } else remove();
        }
    }
    removedAttributes.forEach((attrs, el)=>{
        cleanupAttributes(el, attrs);
    });
    addedAttributes.forEach((attrs, el)=>{
        onAttributeAddeds.forEach((i)=>i(el, attrs));
    });
    for (let node of removedNodes){
        if (addedNodes.some((i)=>i.contains(node))) continue;
        onElRemoveds.forEach((i)=>i(node));
    }
    for (let node of addedNodes){
        if (!node.isConnected) continue;
        onElAddeds.forEach((i)=>i(node));
    }
    addedNodes = null;
    removedNodes = null;
    addedAttributes = null;
    removedAttributes = null;
}
// packages/alpinejs/src/scope.js
function scope(node) {
    return mergeProxies(closestDataStack(node));
}
function addScopeToNode(node, data2, referenceNode) {
    node._x_dataStack = [
        data2,
        ...closestDataStack(referenceNode || node)
    ];
    return ()=>{
        node._x_dataStack = node._x_dataStack.filter((i)=>i !== data2);
    };
}
function closestDataStack(node) {
    if (node._x_dataStack) return node._x_dataStack;
    if (typeof ShadowRoot === "function" && node instanceof ShadowRoot) return closestDataStack(node.host);
    if (!node.parentNode) return [];
    return closestDataStack(node.parentNode);
}
function mergeProxies(objects) {
    return new Proxy({
        objects
    }, mergeProxyTrap);
}
var mergeProxyTrap = {
    ownKeys ({ objects }) {
        return Array.from(new Set(objects.flatMap((i)=>Object.keys(i))));
    },
    has ({ objects }, name) {
        if (name == Symbol.unscopables) return false;
        return objects.some((obj)=>Object.prototype.hasOwnProperty.call(obj, name) || Reflect.has(obj, name));
    },
    get ({ objects }, name, thisProxy) {
        if (name == "toJSON") return collapseProxies;
        return Reflect.get(objects.find((obj)=>Reflect.has(obj, name)) || {}, name, thisProxy);
    },
    set ({ objects }, name, value, thisProxy) {
        const target = objects.find((obj)=>Object.prototype.hasOwnProperty.call(obj, name)) || objects[objects.length - 1];
        const descriptor = Object.getOwnPropertyDescriptor(target, name);
        if (descriptor?.set && descriptor?.get) return descriptor.set.call(thisProxy, value) || true;
        return Reflect.set(target, name, value);
    }
};
function collapseProxies() {
    let keys = Reflect.ownKeys(this);
    return keys.reduce((acc, key)=>{
        acc[key] = Reflect.get(this, key);
        return acc;
    }, {});
}
// packages/alpinejs/src/interceptor.js
function initInterceptors(data2) {
    let isObject2 = (val)=>typeof val === "object" && !Array.isArray(val) && val !== null;
    let recurse = (obj, basePath = "")=>{
        Object.entries(Object.getOwnPropertyDescriptors(obj)).forEach(([key, { value, enumerable }])=>{
            if (enumerable === false || value === void 0) return;
            if (typeof value === "object" && value !== null && value.__v_skip) return;
            let path = basePath === "" ? key : `${basePath}.${key}`;
            if (typeof value === "object" && value !== null && value._x_interceptor) obj[key] = value.initialize(data2, path, key);
            else if (isObject2(value) && value !== obj && !(value instanceof Element)) recurse(value, path);
        });
    };
    return recurse(data2);
}
function interceptor(callback, mutateObj = ()=>{}) {
    let obj = {
        initialValue: void 0,
        _x_interceptor: true,
        initialize (data2, path, key) {
            return callback(this.initialValue, ()=>get(data2, path), (value)=>set(data2, path, value), path, key);
        }
    };
    mutateObj(obj);
    return (initialValue)=>{
        if (typeof initialValue === "object" && initialValue !== null && initialValue._x_interceptor) {
            let initialize = obj.initialize.bind(obj);
            obj.initialize = (data2, path, key)=>{
                let innerValue = initialValue.initialize(data2, path, key);
                obj.initialValue = innerValue;
                return initialize(data2, path, key);
            };
        } else obj.initialValue = initialValue;
        return obj;
    };
}
function get(obj, path) {
    return path.split(".").reduce((carry, segment)=>carry[segment], obj);
}
function set(obj, path, value) {
    if (typeof path === "string") path = path.split(".");
    if (path.length === 1) obj[path[0]] = value;
    else if (path.length === 0) throw error;
    else {
        if (obj[path[0]]) return set(obj[path[0]], path.slice(1), value);
        else {
            obj[path[0]] = {};
            return set(obj[path[0]], path.slice(1), value);
        }
    }
}
// packages/alpinejs/src/magics.js
var magics = {};
function magic(name, callback) {
    magics[name] = callback;
}
function injectMagics(obj, el) {
    let memoizedUtilities = getUtilities(el);
    Object.entries(magics).forEach(([name, callback])=>{
        Object.defineProperty(obj, `$${name}`, {
            get () {
                return callback(el, memoizedUtilities);
            },
            enumerable: false
        });
    });
    return obj;
}
function getUtilities(el) {
    let [utilities, cleanup2] = getElementBoundUtilities(el);
    let utils = {
        interceptor,
        ...utilities
    };
    onElRemoved(el, cleanup2);
    return utils;
}
// packages/alpinejs/src/utils/error.js
function tryCatch(el, expression, callback, ...args) {
    try {
        return callback(...args);
    } catch (e) {
        handleError(e, el, expression);
    }
}
function handleError(error2, el, expression) {
    error2 = Object.assign(error2 ?? {
        message: "No error message given."
    }, {
        el,
        expression
    });
    console.warn(`Alpine Expression Error: ${error2.message}

${expression ? 'Expression: "' + expression + '"\n\n' : ""}`, el);
    setTimeout(()=>{
        throw error2;
    }, 0);
}
// packages/alpinejs/src/evaluator.js
var shouldAutoEvaluateFunctions = true;
function dontAutoEvaluateFunctions(callback) {
    let cache = shouldAutoEvaluateFunctions;
    shouldAutoEvaluateFunctions = false;
    let result = callback();
    shouldAutoEvaluateFunctions = cache;
    return result;
}
function evaluate(el, expression, extras = {}) {
    let result;
    evaluateLater(el, expression)((value)=>result = value, extras);
    return result;
}
function evaluateLater(...args) {
    return theEvaluatorFunction(...args);
}
var theEvaluatorFunction = normalEvaluator;
function setEvaluator(newEvaluator) {
    theEvaluatorFunction = newEvaluator;
}
function normalEvaluator(el, expression) {
    let overriddenMagics = {};
    injectMagics(overriddenMagics, el);
    let dataStack = [
        overriddenMagics,
        ...closestDataStack(el)
    ];
    let evaluator = typeof expression === "function" ? generateEvaluatorFromFunction(dataStack, expression) : generateEvaluatorFromString(dataStack, expression, el);
    return tryCatch.bind(null, el, expression, evaluator);
}
function generateEvaluatorFromFunction(dataStack, func) {
    return (receiver = ()=>{}, { scope: scope2 = {}, params = [], context } = {})=>{
        let result = func.apply(mergeProxies([
            scope2,
            ...dataStack
        ]), params);
        runIfTypeOfFunction(receiver, result);
    };
}
var evaluatorMemo = {};
function generateFunctionFromString(expression, el) {
    if (evaluatorMemo[expression]) return evaluatorMemo[expression];
    let AsyncFunction = Object.getPrototypeOf(async function() {}).constructor;
    let rightSideSafeExpression = /^[\n\s]*if.*\(.*\)/.test(expression.trim()) || /^(let|const)\s/.test(expression.trim()) ? `(async()=>{ ${expression} })()` : expression;
    const safeAsyncFunction = ()=>{
        try {
            let func2 = new AsyncFunction([
                "__self",
                "scope"
            ], `with (scope) { __self.result = ${rightSideSafeExpression} }; __self.finished = true; return __self.result;`);
            Object.defineProperty(func2, "name", {
                value: `[Alpine] ${expression}`
            });
            return func2;
        } catch (error2) {
            handleError(error2, el, expression);
            return Promise.resolve();
        }
    };
    let func = safeAsyncFunction();
    evaluatorMemo[expression] = func;
    return func;
}
function generateEvaluatorFromString(dataStack, expression, el) {
    let func = generateFunctionFromString(expression, el);
    return (receiver = ()=>{}, { scope: scope2 = {}, params = [], context } = {})=>{
        func.result = void 0;
        func.finished = false;
        let completeScope = mergeProxies([
            scope2,
            ...dataStack
        ]);
        if (typeof func === "function") {
            let promise = func.call(context, func, completeScope).catch((error2)=>handleError(error2, el, expression));
            if (func.finished) {
                runIfTypeOfFunction(receiver, func.result, completeScope, params, el);
                func.result = void 0;
            } else promise.then((result)=>{
                runIfTypeOfFunction(receiver, result, completeScope, params, el);
            }).catch((error2)=>handleError(error2, el, expression)).finally(()=>func.result = void 0);
        }
    };
}
function runIfTypeOfFunction(receiver, value, scope2, params, el) {
    if (shouldAutoEvaluateFunctions && typeof value === "function") {
        let result = value.apply(scope2, params);
        if (result instanceof Promise) result.then((i)=>runIfTypeOfFunction(receiver, i, scope2, params)).catch((error2)=>handleError(error2, el, value));
        else receiver(result);
    } else if (typeof value === "object" && value instanceof Promise) value.then((i)=>receiver(i));
    else receiver(value);
}
// packages/alpinejs/src/directives.js
var prefixAsString = "x-";
function prefix(subject = "") {
    return prefixAsString + subject;
}
function setPrefix(newPrefix) {
    prefixAsString = newPrefix;
}
var directiveHandlers = {};
function directive(name, callback) {
    directiveHandlers[name] = callback;
    return {
        before (directive2) {
            if (!directiveHandlers[directive2]) {
                console.warn(String.raw`Cannot find directive \`${directive2}\`. \`${name}\` will use the default order of execution`);
                return;
            }
            const pos = directiveOrder.indexOf(directive2);
            directiveOrder.splice(pos >= 0 ? pos : directiveOrder.indexOf("DEFAULT"), 0, name);
        }
    };
}
function directiveExists(name) {
    return Object.keys(directiveHandlers).includes(name);
}
function directives(el, attributes, originalAttributeOverride) {
    attributes = Array.from(attributes);
    if (el._x_virtualDirectives) {
        let vAttributes = Object.entries(el._x_virtualDirectives).map(([name, value])=>({
                name,
                value
            }));
        let staticAttributes = attributesOnly(vAttributes);
        vAttributes = vAttributes.map((attribute)=>{
            if (staticAttributes.find((attr)=>attr.name === attribute.name)) return {
                name: `x-bind:${attribute.name}`,
                value: `"${attribute.value}"`
            };
            return attribute;
        });
        attributes = attributes.concat(vAttributes);
    }
    let transformedAttributeMap = {};
    let directives2 = attributes.map(toTransformedAttributes((newName, oldName)=>transformedAttributeMap[newName] = oldName)).filter(outNonAlpineAttributes).map(toParsedDirectives(transformedAttributeMap, originalAttributeOverride)).sort(byPriority);
    return directives2.map((directive2)=>{
        return getDirectiveHandler(el, directive2);
    });
}
function attributesOnly(attributes) {
    return Array.from(attributes).map(toTransformedAttributes()).filter((attr)=>!outNonAlpineAttributes(attr));
}
var isDeferringHandlers = false;
var directiveHandlerStacks = /* @__PURE__ */ new Map();
var currentHandlerStackKey = Symbol();
function deferHandlingDirectives(callback) {
    isDeferringHandlers = true;
    let key = Symbol();
    currentHandlerStackKey = key;
    directiveHandlerStacks.set(key, []);
    let flushHandlers = ()=>{
        while(directiveHandlerStacks.get(key).length)directiveHandlerStacks.get(key).shift()();
        directiveHandlerStacks.delete(key);
    };
    let stopDeferring = ()=>{
        isDeferringHandlers = false;
        flushHandlers();
    };
    callback(flushHandlers);
    stopDeferring();
}
function getElementBoundUtilities(el) {
    let cleanups = [];
    let cleanup2 = (callback)=>cleanups.push(callback);
    let [effect3, cleanupEffect] = elementBoundEffect(el);
    cleanups.push(cleanupEffect);
    let utilities = {
        Alpine: alpine_default,
        effect: effect3,
        cleanup: cleanup2,
        evaluateLater: evaluateLater.bind(evaluateLater, el),
        evaluate: evaluate.bind(evaluate, el)
    };
    let doCleanup = ()=>cleanups.forEach((i)=>i());
    return [
        utilities,
        doCleanup
    ];
}
function getDirectiveHandler(el, directive2) {
    let noop = ()=>{};
    let handler4 = directiveHandlers[directive2.type] || noop;
    let [utilities, cleanup2] = getElementBoundUtilities(el);
    onAttributeRemoved(el, directive2.original, cleanup2);
    let fullHandler = ()=>{
        if (el._x_ignore || el._x_ignoreSelf) return;
        handler4.inline && handler4.inline(el, directive2, utilities);
        handler4 = handler4.bind(handler4, el, directive2, utilities);
        isDeferringHandlers ? directiveHandlerStacks.get(currentHandlerStackKey).push(handler4) : handler4();
    };
    fullHandler.runCleanups = cleanup2;
    return fullHandler;
}
var startingWith = (subject, replacement)=>({ name, value })=>{
        if (name.startsWith(subject)) name = name.replace(subject, replacement);
        return {
            name,
            value
        };
    };
var into = (i)=>i;
function toTransformedAttributes(callback = ()=>{}) {
    return ({ name, value })=>{
        let { name: newName, value: newValue } = attributeTransformers.reduce((carry, transform)=>{
            return transform(carry);
        }, {
            name,
            value
        });
        if (newName !== name) callback(newName, name);
        return {
            name: newName,
            value: newValue
        };
    };
}
var attributeTransformers = [];
function mapAttributes(callback) {
    attributeTransformers.push(callback);
}
function outNonAlpineAttributes({ name }) {
    return alpineAttributeRegex().test(name);
}
var alpineAttributeRegex = ()=>new RegExp(`^${prefixAsString}([^:^.]+)\\b`);
function toParsedDirectives(transformedAttributeMap, originalAttributeOverride) {
    return ({ name, value })=>{
        let typeMatch = name.match(alpineAttributeRegex());
        let valueMatch = name.match(/:([a-zA-Z0-9\-_:]+)/);
        let modifiers = name.match(/\.[^.\]]+(?=[^\]]*$)/g) || [];
        let original = originalAttributeOverride || transformedAttributeMap[name] || name;
        return {
            type: typeMatch ? typeMatch[1] : null,
            value: valueMatch ? valueMatch[1] : null,
            modifiers: modifiers.map((i)=>i.replace(".", "")),
            expression: value,
            original
        };
    };
}
var DEFAULT = "DEFAULT";
var directiveOrder = [
    "ignore",
    "ref",
    "data",
    "id",
    "anchor",
    "bind",
    "init",
    "for",
    "model",
    "modelable",
    "transition",
    "show",
    "if",
    DEFAULT,
    "teleport"
];
function byPriority(a, b) {
    let typeA = directiveOrder.indexOf(a.type) === -1 ? DEFAULT : a.type;
    let typeB = directiveOrder.indexOf(b.type) === -1 ? DEFAULT : b.type;
    return directiveOrder.indexOf(typeA) - directiveOrder.indexOf(typeB);
}
// packages/alpinejs/src/utils/dispatch.js
function dispatch(el, name, detail = {}) {
    el.dispatchEvent(new CustomEvent(name, {
        detail,
        bubbles: true,
        // Allows events to pass the shadow DOM barrier.
        composed: true,
        cancelable: true
    }));
}
// packages/alpinejs/src/utils/walk.js
function walk(el, callback) {
    if (typeof ShadowRoot === "function" && el instanceof ShadowRoot) {
        Array.from(el.children).forEach((el2)=>walk(el2, callback));
        return;
    }
    let skip = false;
    callback(el, ()=>skip = true);
    if (skip) return;
    let node = el.firstElementChild;
    while(node){
        walk(node, callback, false);
        node = node.nextElementSibling;
    }
}
// packages/alpinejs/src/utils/warn.js
function warn(message, ...args) {
    console.warn(`Alpine Warning: ${message}`, ...args);
}
// packages/alpinejs/src/lifecycle.js
var started = false;
function start() {
    if (started) warn("Alpine has already been initialized on this page. Calling Alpine.start() more than once can cause problems.");
    started = true;
    if (!document.body) warn("Unable to initialize. Trying to load Alpine before `<body>` is available. Did you forget to add `defer` in Alpine's `<script>` tag?");
    dispatch(document, "alpine:init");
    dispatch(document, "alpine:initializing");
    startObservingMutations();
    onElAdded((el)=>initTree(el, walk));
    onElRemoved((el)=>destroyTree(el));
    onAttributesAdded((el, attrs)=>{
        directives(el, attrs).forEach((handle)=>handle());
    });
    let outNestedComponents = (el)=>!closestRoot(el.parentElement, true);
    Array.from(document.querySelectorAll(allSelectors().join(","))).filter(outNestedComponents).forEach((el)=>{
        initTree(el);
    });
    dispatch(document, "alpine:initialized");
    setTimeout(()=>{
        warnAboutMissingPlugins();
    });
}
var rootSelectorCallbacks = [];
var initSelectorCallbacks = [];
function rootSelectors() {
    return rootSelectorCallbacks.map((fn)=>fn());
}
function allSelectors() {
    return rootSelectorCallbacks.concat(initSelectorCallbacks).map((fn)=>fn());
}
function addRootSelector(selectorCallback) {
    rootSelectorCallbacks.push(selectorCallback);
}
function addInitSelector(selectorCallback) {
    initSelectorCallbacks.push(selectorCallback);
}
function closestRoot(el, includeInitSelectors = false) {
    return findClosest(el, (element)=>{
        const selectors = includeInitSelectors ? allSelectors() : rootSelectors();
        if (selectors.some((selector)=>element.matches(selector))) return true;
    });
}
function findClosest(el, callback) {
    if (!el) return;
    if (callback(el)) return el;
    if (el._x_teleportBack) el = el._x_teleportBack;
    if (!el.parentElement) return;
    return findClosest(el.parentElement, callback);
}
function isRoot(el) {
    return rootSelectors().some((selector)=>el.matches(selector));
}
var initInterceptors2 = [];
function interceptInit(callback) {
    initInterceptors2.push(callback);
}
var markerDispenser = 1;
function initTree(el, walker = walk, intercept = ()=>{}) {
    if (findClosest(el, (i)=>i._x_ignore)) return;
    deferHandlingDirectives(()=>{
        walker(el, (el2, skip)=>{
            if (el2._x_marker) return;
            intercept(el2, skip);
            initInterceptors2.forEach((i)=>i(el2, skip));
            directives(el2, el2.attributes).forEach((handle)=>handle());
            if (!el2._x_ignore) el2._x_marker = markerDispenser++;
            el2._x_ignore && skip();
        });
    });
}
function destroyTree(root, walker = walk) {
    walker(root, (el)=>{
        cleanupElement(el);
        cleanupAttributes(el);
        delete el._x_marker;
    });
}
function warnAboutMissingPlugins() {
    let pluginDirectives = [
        [
            "ui",
            "dialog",
            [
                "[x-dialog], [x-popover]"
            ]
        ],
        [
            "anchor",
            "anchor",
            [
                "[x-anchor]"
            ]
        ],
        [
            "sort",
            "sort",
            [
                "[x-sort]"
            ]
        ]
    ];
    pluginDirectives.forEach(([plugin2, directive2, selectors])=>{
        if (directiveExists(directive2)) return;
        selectors.some((selector)=>{
            if (document.querySelector(selector)) {
                warn(`found "${selector}", but missing ${plugin2} plugin`);
                return true;
            }
        });
    });
}
// packages/alpinejs/src/nextTick.js
var tickStack = [];
var isHolding = false;
function nextTick(callback = ()=>{}) {
    queueMicrotask(()=>{
        isHolding || setTimeout(()=>{
            releaseNextTicks();
        });
    });
    return new Promise((res)=>{
        tickStack.push(()=>{
            callback();
            res();
        });
    });
}
function releaseNextTicks() {
    isHolding = false;
    while(tickStack.length)tickStack.shift()();
}
function holdNextTicks() {
    isHolding = true;
}
// packages/alpinejs/src/utils/classes.js
function setClasses(el, value) {
    if (Array.isArray(value)) return setClassesFromString(el, value.join(" "));
    else if (typeof value === "object" && value !== null) return setClassesFromObject(el, value);
    else if (typeof value === "function") return setClasses(el, value());
    return setClassesFromString(el, value);
}
function setClassesFromString(el, classString) {
    let split = (classString2)=>classString2.split(" ").filter(Boolean);
    let missingClasses = (classString2)=>classString2.split(" ").filter((i)=>!el.classList.contains(i)).filter(Boolean);
    let addClassesAndReturnUndo = (classes)=>{
        el.classList.add(...classes);
        return ()=>{
            el.classList.remove(...classes);
        };
    };
    classString = classString === true ? classString = "" : classString || "";
    return addClassesAndReturnUndo(missingClasses(classString));
}
function setClassesFromObject(el, classObject) {
    let split = (classString)=>classString.split(" ").filter(Boolean);
    let forAdd = Object.entries(classObject).flatMap(([classString, bool])=>bool ? split(classString) : false).filter(Boolean);
    let forRemove = Object.entries(classObject).flatMap(([classString, bool])=>!bool ? split(classString) : false).filter(Boolean);
    let added = [];
    let removed = [];
    forRemove.forEach((i)=>{
        if (el.classList.contains(i)) {
            el.classList.remove(i);
            removed.push(i);
        }
    });
    forAdd.forEach((i)=>{
        if (!el.classList.contains(i)) {
            el.classList.add(i);
            added.push(i);
        }
    });
    return ()=>{
        removed.forEach((i)=>el.classList.add(i));
        added.forEach((i)=>el.classList.remove(i));
    };
}
// packages/alpinejs/src/utils/styles.js
function setStyles(el, value) {
    if (typeof value === "object" && value !== null) return setStylesFromObject(el, value);
    return setStylesFromString(el, value);
}
function setStylesFromObject(el, value) {
    let previousStyles = {};
    Object.entries(value).forEach(([key, value2])=>{
        previousStyles[key] = el.style[key];
        if (!key.startsWith("--")) key = kebabCase(key);
        el.style.setProperty(key, value2);
    });
    setTimeout(()=>{
        if (el.style.length === 0) el.removeAttribute("style");
    });
    return ()=>{
        setStyles(el, previousStyles);
    };
}
function setStylesFromString(el, value) {
    let cache = el.getAttribute("style", value);
    el.setAttribute("style", value);
    return ()=>{
        el.setAttribute("style", cache || "");
    };
}
function kebabCase(subject) {
    return subject.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}
// packages/alpinejs/src/utils/once.js
function once(callback, fallback = ()=>{}) {
    let called = false;
    return function() {
        if (!called) {
            called = true;
            callback.apply(this, arguments);
        } else fallback.apply(this, arguments);
    };
}
// packages/alpinejs/src/directives/x-transition.js
directive("transition", (el, { value, modifiers, expression }, { evaluate: evaluate2 })=>{
    if (typeof expression === "function") expression = evaluate2(expression);
    if (expression === false) return;
    if (!expression || typeof expression === "boolean") registerTransitionsFromHelper(el, modifiers, value);
    else registerTransitionsFromClassString(el, expression, value);
});
function registerTransitionsFromClassString(el, classString, stage) {
    registerTransitionObject(el, setClasses, "");
    let directiveStorageMap = {
        "enter": (classes)=>{
            el._x_transition.enter.during = classes;
        },
        "enter-start": (classes)=>{
            el._x_transition.enter.start = classes;
        },
        "enter-end": (classes)=>{
            el._x_transition.enter.end = classes;
        },
        "leave": (classes)=>{
            el._x_transition.leave.during = classes;
        },
        "leave-start": (classes)=>{
            el._x_transition.leave.start = classes;
        },
        "leave-end": (classes)=>{
            el._x_transition.leave.end = classes;
        }
    };
    directiveStorageMap[stage](classString);
}
function registerTransitionsFromHelper(el, modifiers, stage) {
    registerTransitionObject(el, setStyles);
    let doesntSpecify = !modifiers.includes("in") && !modifiers.includes("out") && !stage;
    let transitioningIn = doesntSpecify || modifiers.includes("in") || [
        "enter"
    ].includes(stage);
    let transitioningOut = doesntSpecify || modifiers.includes("out") || [
        "leave"
    ].includes(stage);
    if (modifiers.includes("in") && !doesntSpecify) modifiers = modifiers.filter((i, index)=>index < modifiers.indexOf("out"));
    if (modifiers.includes("out") && !doesntSpecify) modifiers = modifiers.filter((i, index)=>index > modifiers.indexOf("out"));
    let wantsAll = !modifiers.includes("opacity") && !modifiers.includes("scale");
    let wantsOpacity = wantsAll || modifiers.includes("opacity");
    let wantsScale = wantsAll || modifiers.includes("scale");
    let opacityValue = wantsOpacity ? 0 : 1;
    let scaleValue = wantsScale ? modifierValue(modifiers, "scale", 95) / 100 : 1;
    let delay = modifierValue(modifiers, "delay", 0) / 1e3;
    let origin = modifierValue(modifiers, "origin", "center");
    let property = "opacity, transform";
    let durationIn = modifierValue(modifiers, "duration", 150) / 1e3;
    let durationOut = modifierValue(modifiers, "duration", 75) / 1e3;
    let easing = `cubic-bezier(0.4, 0.0, 0.2, 1)`;
    if (transitioningIn) {
        el._x_transition.enter.during = {
            transformOrigin: origin,
            transitionDelay: `${delay}s`,
            transitionProperty: property,
            transitionDuration: `${durationIn}s`,
            transitionTimingFunction: easing
        };
        el._x_transition.enter.start = {
            opacity: opacityValue,
            transform: `scale(${scaleValue})`
        };
        el._x_transition.enter.end = {
            opacity: 1,
            transform: `scale(1)`
        };
    }
    if (transitioningOut) {
        el._x_transition.leave.during = {
            transformOrigin: origin,
            transitionDelay: `${delay}s`,
            transitionProperty: property,
            transitionDuration: `${durationOut}s`,
            transitionTimingFunction: easing
        };
        el._x_transition.leave.start = {
            opacity: 1,
            transform: `scale(1)`
        };
        el._x_transition.leave.end = {
            opacity: opacityValue,
            transform: `scale(${scaleValue})`
        };
    }
}
function registerTransitionObject(el, setFunction, defaultValue = {}) {
    if (!el._x_transition) el._x_transition = {
        enter: {
            during: defaultValue,
            start: defaultValue,
            end: defaultValue
        },
        leave: {
            during: defaultValue,
            start: defaultValue,
            end: defaultValue
        },
        in (before = ()=>{}, after = ()=>{}) {
            transition(el, setFunction, {
                during: this.enter.during,
                start: this.enter.start,
                end: this.enter.end
            }, before, after);
        },
        out (before = ()=>{}, after = ()=>{}) {
            transition(el, setFunction, {
                during: this.leave.during,
                start: this.leave.start,
                end: this.leave.end
            }, before, after);
        }
    };
}
window.Element.prototype._x_toggleAndCascadeWithTransitions = function(el, value, show, hide) {
    const nextTick2 = document.visibilityState === "visible" ? requestAnimationFrame : setTimeout;
    let clickAwayCompatibleShow = ()=>nextTick2(show);
    if (value) {
        if (el._x_transition && (el._x_transition.enter || el._x_transition.leave)) el._x_transition.enter && (Object.entries(el._x_transition.enter.during).length || Object.entries(el._x_transition.enter.start).length || Object.entries(el._x_transition.enter.end).length) ? el._x_transition.in(show) : clickAwayCompatibleShow();
        else el._x_transition ? el._x_transition.in(show) : clickAwayCompatibleShow();
        return;
    }
    el._x_hidePromise = el._x_transition ? new Promise((resolve, reject)=>{
        el._x_transition.out(()=>{}, ()=>resolve(hide));
        el._x_transitioning && el._x_transitioning.beforeCancel(()=>reject({
                isFromCancelledTransition: true
            }));
    }) : Promise.resolve(hide);
    queueMicrotask(()=>{
        let closest = closestHide(el);
        if (closest) {
            if (!closest._x_hideChildren) closest._x_hideChildren = [];
            closest._x_hideChildren.push(el);
        } else nextTick2(()=>{
            let hideAfterChildren = (el2)=>{
                let carry = Promise.all([
                    el2._x_hidePromise,
                    ...(el2._x_hideChildren || []).map(hideAfterChildren)
                ]).then(([i])=>i?.());
                delete el2._x_hidePromise;
                delete el2._x_hideChildren;
                return carry;
            };
            hideAfterChildren(el).catch((e)=>{
                if (!e.isFromCancelledTransition) throw e;
            });
        });
    });
};
function closestHide(el) {
    let parent = el.parentNode;
    if (!parent) return;
    return parent._x_hidePromise ? parent : closestHide(parent);
}
function transition(el, setFunction, { during, start: start2, end } = {}, before = ()=>{}, after = ()=>{}) {
    if (el._x_transitioning) el._x_transitioning.cancel();
    if (Object.keys(during).length === 0 && Object.keys(start2).length === 0 && Object.keys(end).length === 0) {
        before();
        after();
        return;
    }
    let undoStart, undoDuring, undoEnd;
    performTransition(el, {
        start () {
            undoStart = setFunction(el, start2);
        },
        during () {
            undoDuring = setFunction(el, during);
        },
        before,
        end () {
            undoStart();
            undoEnd = setFunction(el, end);
        },
        after,
        cleanup () {
            undoDuring();
            undoEnd();
        }
    });
}
function performTransition(el, stages) {
    let interrupted, reachedBefore, reachedEnd;
    let finish = once(()=>{
        mutateDom(()=>{
            interrupted = true;
            if (!reachedBefore) stages.before();
            if (!reachedEnd) {
                stages.end();
                releaseNextTicks();
            }
            stages.after();
            if (el.isConnected) stages.cleanup();
            delete el._x_transitioning;
        });
    });
    el._x_transitioning = {
        beforeCancels: [],
        beforeCancel (callback) {
            this.beforeCancels.push(callback);
        },
        cancel: once(function() {
            while(this.beforeCancels.length)this.beforeCancels.shift()();
            finish();
        }),
        finish
    };
    mutateDom(()=>{
        stages.start();
        stages.during();
    });
    holdNextTicks();
    requestAnimationFrame(()=>{
        if (interrupted) return;
        let duration = Number(getComputedStyle(el).transitionDuration.replace(/,.*/, "").replace("s", "")) * 1e3;
        let delay = Number(getComputedStyle(el).transitionDelay.replace(/,.*/, "").replace("s", "")) * 1e3;
        if (duration === 0) duration = Number(getComputedStyle(el).animationDuration.replace("s", "")) * 1e3;
        mutateDom(()=>{
            stages.before();
        });
        reachedBefore = true;
        requestAnimationFrame(()=>{
            if (interrupted) return;
            mutateDom(()=>{
                stages.end();
            });
            releaseNextTicks();
            setTimeout(el._x_transitioning.finish, duration + delay);
            reachedEnd = true;
        });
    });
}
function modifierValue(modifiers, key, fallback) {
    if (modifiers.indexOf(key) === -1) return fallback;
    const rawValue = modifiers[modifiers.indexOf(key) + 1];
    if (!rawValue) return fallback;
    if (key === "scale") {
        if (isNaN(rawValue)) return fallback;
    }
    if (key === "duration" || key === "delay") {
        let match = rawValue.match(/([0-9]+)ms/);
        if (match) return match[1];
    }
    if (key === "origin") {
        if ([
            "top",
            "right",
            "left",
            "center",
            "bottom"
        ].includes(modifiers[modifiers.indexOf(key) + 2])) return [
            rawValue,
            modifiers[modifiers.indexOf(key) + 2]
        ].join(" ");
    }
    return rawValue;
}
// packages/alpinejs/src/clone.js
var isCloning = false;
function skipDuringClone(callback, fallback = ()=>{}) {
    return (...args)=>isCloning ? fallback(...args) : callback(...args);
}
function onlyDuringClone(callback) {
    return (...args)=>isCloning && callback(...args);
}
var interceptors = [];
function interceptClone(callback) {
    interceptors.push(callback);
}
function cloneNode(from, to) {
    interceptors.forEach((i)=>i(from, to));
    isCloning = true;
    dontRegisterReactiveSideEffects(()=>{
        initTree(to, (el, callback)=>{
            callback(el, ()=>{});
        });
    });
    isCloning = false;
}
var isCloningLegacy = false;
function clone(oldEl, newEl) {
    if (!newEl._x_dataStack) newEl._x_dataStack = oldEl._x_dataStack;
    isCloning = true;
    isCloningLegacy = true;
    dontRegisterReactiveSideEffects(()=>{
        cloneTree(newEl);
    });
    isCloning = false;
    isCloningLegacy = false;
}
function cloneTree(el) {
    let hasRunThroughFirstEl = false;
    let shallowWalker = (el2, callback)=>{
        walk(el2, (el3, skip)=>{
            if (hasRunThroughFirstEl && isRoot(el3)) return skip();
            hasRunThroughFirstEl = true;
            callback(el3, skip);
        });
    };
    initTree(el, shallowWalker);
}
function dontRegisterReactiveSideEffects(callback) {
    let cache = effect;
    overrideEffect((callback2, el)=>{
        let storedEffect = cache(callback2);
        release(storedEffect);
        return ()=>{};
    });
    callback();
    overrideEffect(cache);
}
// packages/alpinejs/src/utils/bind.js
function bind(el, name, value, modifiers = []) {
    if (!el._x_bindings) el._x_bindings = reactive({});
    el._x_bindings[name] = value;
    name = modifiers.includes("camel") ? camelCase(name) : name;
    switch(name){
        case "value":
            bindInputValue(el, value);
            break;
        case "style":
            bindStyles(el, value);
            break;
        case "class":
            bindClasses(el, value);
            break;
        case "selected":
        case "checked":
            bindAttributeAndProperty(el, name, value);
            break;
        default:
            bindAttribute(el, name, value);
            break;
    }
}
function bindInputValue(el, value) {
    if (isRadio(el)) {
        if (el.attributes.value === void 0) el.value = value;
        if (window.fromModel) {
            if (typeof value === "boolean") el.checked = safeParseBoolean(el.value) === value;
            else el.checked = checkedAttrLooseCompare(el.value, value);
        }
    } else if (isCheckbox(el)) {
        if (Number.isInteger(value)) el.value = value;
        else if (!Array.isArray(value) && typeof value !== "boolean" && ![
            null,
            void 0
        ].includes(value)) el.value = String(value);
        else if (Array.isArray(value)) el.checked = value.some((val)=>checkedAttrLooseCompare(val, el.value));
        else el.checked = !!value;
    } else if (el.tagName === "SELECT") updateSelect(el, value);
    else {
        if (el.value === value) return;
        el.value = value === void 0 ? "" : value;
    }
}
function bindClasses(el, value) {
    if (el._x_undoAddedClasses) el._x_undoAddedClasses();
    el._x_undoAddedClasses = setClasses(el, value);
}
function bindStyles(el, value) {
    if (el._x_undoAddedStyles) el._x_undoAddedStyles();
    el._x_undoAddedStyles = setStyles(el, value);
}
function bindAttributeAndProperty(el, name, value) {
    bindAttribute(el, name, value);
    setPropertyIfChanged(el, name, value);
}
function bindAttribute(el, name, value) {
    if ([
        null,
        void 0,
        false
    ].includes(value) && attributeShouldntBePreservedIfFalsy(name)) el.removeAttribute(name);
    else {
        if (isBooleanAttr(name)) value = name;
        setIfChanged(el, name, value);
    }
}
function setIfChanged(el, attrName, value) {
    if (el.getAttribute(attrName) != value) el.setAttribute(attrName, value);
}
function setPropertyIfChanged(el, propName, value) {
    if (el[propName] !== value) el[propName] = value;
}
function updateSelect(el, value) {
    const arrayWrappedValue = [].concat(value).map((value2)=>{
        return value2 + "";
    });
    Array.from(el.options).forEach((option)=>{
        option.selected = arrayWrappedValue.includes(option.value);
    });
}
function camelCase(subject) {
    return subject.toLowerCase().replace(/-(\w)/g, (match, char)=>char.toUpperCase());
}
function checkedAttrLooseCompare(valueA, valueB) {
    return valueA == valueB;
}
function safeParseBoolean(rawValue) {
    if ([
        1,
        "1",
        "true",
        "on",
        "yes",
        true
    ].includes(rawValue)) return true;
    if ([
        0,
        "0",
        "false",
        "off",
        "no",
        false
    ].includes(rawValue)) return false;
    return rawValue ? Boolean(rawValue) : null;
}
var booleanAttributes = /* @__PURE__ */ new Set([
    "allowfullscreen",
    "async",
    "autofocus",
    "autoplay",
    "checked",
    "controls",
    "default",
    "defer",
    "disabled",
    "formnovalidate",
    "inert",
    "ismap",
    "itemscope",
    "loop",
    "multiple",
    "muted",
    "nomodule",
    "novalidate",
    "open",
    "playsinline",
    "readonly",
    "required",
    "reversed",
    "selected",
    "shadowrootclonable",
    "shadowrootdelegatesfocus",
    "shadowrootserializable"
]);
function isBooleanAttr(attrName) {
    return booleanAttributes.has(attrName);
}
function attributeShouldntBePreservedIfFalsy(name) {
    return ![
        "aria-pressed",
        "aria-checked",
        "aria-expanded",
        "aria-selected"
    ].includes(name);
}
function getBinding(el, name, fallback) {
    if (el._x_bindings && el._x_bindings[name] !== void 0) return el._x_bindings[name];
    return getAttributeBinding(el, name, fallback);
}
function extractProp(el, name, fallback, extract = true) {
    if (el._x_bindings && el._x_bindings[name] !== void 0) return el._x_bindings[name];
    if (el._x_inlineBindings && el._x_inlineBindings[name] !== void 0) {
        let binding = el._x_inlineBindings[name];
        binding.extract = extract;
        return dontAutoEvaluateFunctions(()=>{
            return evaluate(el, binding.expression);
        });
    }
    return getAttributeBinding(el, name, fallback);
}
function getAttributeBinding(el, name, fallback) {
    let attr = el.getAttribute(name);
    if (attr === null) return typeof fallback === "function" ? fallback() : fallback;
    if (attr === "") return true;
    if (isBooleanAttr(name)) return !![
        name,
        "true"
    ].includes(attr);
    return attr;
}
function isCheckbox(el) {
    return el.type === "checkbox" || el.localName === "ui-checkbox" || el.localName === "ui-switch";
}
function isRadio(el) {
    return el.type === "radio" || el.localName === "ui-radio";
}
// packages/alpinejs/src/utils/debounce.js
function debounce(func, wait) {
    let timeout;
    return function() {
        const context = this, args = arguments;
        const later = function() {
            timeout = null;
            func.apply(context, args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}
// packages/alpinejs/src/utils/throttle.js
function throttle(func, limit) {
    let inThrottle;
    return function() {
        let context = this, args = arguments;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(()=>inThrottle = false, limit);
        }
    };
}
// packages/alpinejs/src/entangle.js
function entangle({ get: outerGet, set: outerSet }, { get: innerGet, set: innerSet }) {
    let firstRun = true;
    let outerHash;
    let innerHash;
    let reference = effect(()=>{
        let outer = outerGet();
        let inner = innerGet();
        if (firstRun) {
            innerSet(cloneIfObject(outer));
            firstRun = false;
        } else {
            let outerHashLatest = JSON.stringify(outer);
            let innerHashLatest = JSON.stringify(inner);
            if (outerHashLatest !== outerHash) innerSet(cloneIfObject(outer));
            else if (outerHashLatest !== innerHashLatest) outerSet(cloneIfObject(inner));
        }
        outerHash = JSON.stringify(outerGet());
        innerHash = JSON.stringify(innerGet());
    });
    return ()=>{
        release(reference);
    };
}
function cloneIfObject(value) {
    return typeof value === "object" ? JSON.parse(JSON.stringify(value)) : value;
}
// packages/alpinejs/src/plugin.js
function plugin(callback) {
    let callbacks = Array.isArray(callback) ? callback : [
        callback
    ];
    callbacks.forEach((i)=>i(alpine_default));
}
// packages/alpinejs/src/store.js
var stores = {};
var isReactive = false;
function store(name, value) {
    if (!isReactive) {
        stores = reactive(stores);
        isReactive = true;
    }
    if (value === void 0) return stores[name];
    stores[name] = value;
    initInterceptors(stores[name]);
    if (typeof value === "object" && value !== null && value.hasOwnProperty("init") && typeof value.init === "function") stores[name].init();
}
function getStores() {
    return stores;
}
// packages/alpinejs/src/binds.js
var binds = {};
function bind2(name, bindings) {
    let getBindings = typeof bindings !== "function" ? ()=>bindings : bindings;
    if (name instanceof Element) return applyBindingsObject(name, getBindings());
    else binds[name] = getBindings;
    return ()=>{};
}
function injectBindingProviders(obj) {
    Object.entries(binds).forEach(([name, callback])=>{
        Object.defineProperty(obj, name, {
            get () {
                return (...args)=>{
                    return callback(...args);
                };
            }
        });
    });
    return obj;
}
function applyBindingsObject(el, obj, original) {
    let cleanupRunners = [];
    while(cleanupRunners.length)cleanupRunners.pop()();
    let attributes = Object.entries(obj).map(([name, value])=>({
            name,
            value
        }));
    let staticAttributes = attributesOnly(attributes);
    attributes = attributes.map((attribute)=>{
        if (staticAttributes.find((attr)=>attr.name === attribute.name)) return {
            name: `x-bind:${attribute.name}`,
            value: `"${attribute.value}"`
        };
        return attribute;
    });
    directives(el, attributes, original).map((handle)=>{
        cleanupRunners.push(handle.runCleanups);
        handle();
    });
    return ()=>{
        while(cleanupRunners.length)cleanupRunners.pop()();
    };
}
// packages/alpinejs/src/datas.js
var datas = {};
function data(name, callback) {
    datas[name] = callback;
}
function injectDataProviders(obj, context) {
    Object.entries(datas).forEach(([name, callback])=>{
        Object.defineProperty(obj, name, {
            get () {
                return (...args)=>{
                    return callback.bind(context)(...args);
                };
            },
            enumerable: false
        });
    });
    return obj;
}
// packages/alpinejs/src/alpine.js
var Alpine = {
    get reactive () {
        return reactive;
    },
    get release () {
        return release;
    },
    get effect () {
        return effect;
    },
    get raw () {
        return raw;
    },
    version: "3.15.0",
    flushAndStopDeferringMutations,
    dontAutoEvaluateFunctions,
    disableEffectScheduling,
    startObservingMutations,
    stopObservingMutations,
    setReactivityEngine,
    onAttributeRemoved,
    onAttributesAdded,
    closestDataStack,
    skipDuringClone,
    onlyDuringClone,
    addRootSelector,
    addInitSelector,
    interceptClone,
    addScopeToNode,
    deferMutations,
    mapAttributes,
    evaluateLater,
    interceptInit,
    setEvaluator,
    mergeProxies,
    extractProp,
    findClosest,
    onElRemoved,
    closestRoot,
    destroyTree,
    interceptor,
    // INTERNAL: not public API and is subject to change without major release.
    transition,
    // INTERNAL
    setStyles,
    // INTERNAL
    mutateDom,
    directive,
    entangle,
    throttle,
    debounce,
    evaluate,
    initTree,
    nextTick,
    prefixed: prefix,
    prefix: setPrefix,
    plugin,
    magic,
    store,
    start,
    clone,
    // INTERNAL
    cloneNode,
    // INTERNAL
    bound: getBinding,
    $data: scope,
    watch,
    walk,
    data,
    bind: bind2
};
var alpine_default = Alpine;
// node_modules/@vue/shared/dist/shared.esm-bundler.js
function makeMap(str, expectsLowerCase) {
    const map = /* @__PURE__ */ Object.create(null);
    const list = str.split(",");
    for(let i = 0; i < list.length; i++)map[list[i]] = true;
    return expectsLowerCase ? (val)=>!!map[val.toLowerCase()] : (val)=>!!map[val];
}
var specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
var isBooleanAttr2 = /* @__PURE__ */ makeMap(specialBooleanAttrs + `,async,autofocus,autoplay,controls,default,defer,disabled,hidden,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected`);
var EMPTY_OBJ = Object.freeze({});
var EMPTY_ARR = Object.freeze([]);
var hasOwnProperty = Object.prototype.hasOwnProperty;
var hasOwn = (val, key)=>hasOwnProperty.call(val, key);
var isArray = Array.isArray;
var isMap = (val)=>toTypeString(val) === "[object Map]";
var isString = (val)=>typeof val === "string";
var isSymbol = (val)=>typeof val === "symbol";
var isObject = (val)=>val !== null && typeof val === "object";
var objectToString = Object.prototype.toString;
var toTypeString = (value)=>objectToString.call(value);
var toRawType = (value)=>{
    return toTypeString(value).slice(8, -1);
};
var isIntegerKey = (key)=>isString(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
var cacheStringFunction = (fn)=>{
    const cache = /* @__PURE__ */ Object.create(null);
    return (str)=>{
        const hit = cache[str];
        return hit || (cache[str] = fn(str));
    };
};
var camelizeRE = /-(\w)/g;
var camelize = cacheStringFunction((str)=>{
    return str.replace(camelizeRE, (_, c)=>c ? c.toUpperCase() : "");
});
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cacheStringFunction((str)=>str.replace(hyphenateRE, "-$1").toLowerCase());
var capitalize = cacheStringFunction((str)=>str.charAt(0).toUpperCase() + str.slice(1));
var toHandlerKey = cacheStringFunction((str)=>str ? `on${capitalize(str)}` : ``);
var hasChanged = (value, oldValue)=>value !== oldValue && (value === value || oldValue === oldValue);
// node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var targetMap = /* @__PURE__ */ new WeakMap();
var effectStack = [];
var activeEffect;
var ITERATE_KEY = Symbol("iterate");
var MAP_KEY_ITERATE_KEY = Symbol("Map key iterate");
function isEffect(fn) {
    return fn && fn._isEffect === true;
}
function effect2(fn, options = EMPTY_OBJ) {
    if (isEffect(fn)) fn = fn.raw;
    const effect3 = createReactiveEffect(fn, options);
    if (!options.lazy) effect3();
    return effect3;
}
function stop(effect3) {
    if (effect3.active) {
        cleanup(effect3);
        if (effect3.options.onStop) effect3.options.onStop();
        effect3.active = false;
    }
}
var uid = 0;
function createReactiveEffect(fn, options) {
    const effect3 = function reactiveEffect() {
        if (!effect3.active) return fn();
        if (!effectStack.includes(effect3)) {
            cleanup(effect3);
            try {
                enableTracking();
                effectStack.push(effect3);
                activeEffect = effect3;
                return fn();
            } finally{
                effectStack.pop();
                resetTracking();
                activeEffect = effectStack[effectStack.length - 1];
            }
        }
    };
    effect3.id = uid++;
    effect3.allowRecurse = !!options.allowRecurse;
    effect3._isEffect = true;
    effect3.active = true;
    effect3.raw = fn;
    effect3.deps = [];
    effect3.options = options;
    return effect3;
}
function cleanup(effect3) {
    const { deps } = effect3;
    if (deps.length) {
        for(let i = 0; i < deps.length; i++)deps[i].delete(effect3);
        deps.length = 0;
    }
}
var shouldTrack = true;
var trackStack = [];
function pauseTracking() {
    trackStack.push(shouldTrack);
    shouldTrack = false;
}
function enableTracking() {
    trackStack.push(shouldTrack);
    shouldTrack = true;
}
function resetTracking() {
    const last = trackStack.pop();
    shouldTrack = last === void 0 ? true : last;
}
function track(target, type, key) {
    if (!shouldTrack || activeEffect === void 0) return;
    let depsMap = targetMap.get(target);
    if (!depsMap) targetMap.set(target, depsMap = /* @__PURE__ */ new Map());
    let dep = depsMap.get(key);
    if (!dep) depsMap.set(key, dep = /* @__PURE__ */ new Set());
    if (!dep.has(activeEffect)) {
        dep.add(activeEffect);
        activeEffect.deps.push(dep);
        if (activeEffect.options.onTrack) activeEffect.options.onTrack({
            effect: activeEffect,
            target,
            type,
            key
        });
    }
}
function trigger(target, type, key, newValue, oldValue, oldTarget) {
    const depsMap = targetMap.get(target);
    if (!depsMap) return;
    const effects = /* @__PURE__ */ new Set();
    const add2 = (effectsToAdd)=>{
        if (effectsToAdd) effectsToAdd.forEach((effect3)=>{
            if (effect3 !== activeEffect || effect3.allowRecurse) effects.add(effect3);
        });
    };
    if (type === "clear") depsMap.forEach(add2);
    else if (key === "length" && isArray(target)) depsMap.forEach((dep, key2)=>{
        if (key2 === "length" || key2 >= newValue) add2(dep);
    });
    else {
        if (key !== void 0) add2(depsMap.get(key));
        switch(type){
            case "add":
                if (!isArray(target)) {
                    add2(depsMap.get(ITERATE_KEY));
                    if (isMap(target)) add2(depsMap.get(MAP_KEY_ITERATE_KEY));
                } else if (isIntegerKey(key)) add2(depsMap.get("length"));
                break;
            case "delete":
                if (!isArray(target)) {
                    add2(depsMap.get(ITERATE_KEY));
                    if (isMap(target)) add2(depsMap.get(MAP_KEY_ITERATE_KEY));
                }
                break;
            case "set":
                if (isMap(target)) add2(depsMap.get(ITERATE_KEY));
                break;
        }
    }
    const run = (effect3)=>{
        if (effect3.options.onTrigger) effect3.options.onTrigger({
            effect: effect3,
            target,
            key,
            type,
            newValue,
            oldValue,
            oldTarget
        });
        if (effect3.options.scheduler) effect3.options.scheduler(effect3);
        else effect3();
    };
    effects.forEach(run);
}
var isNonTrackableKeys = /* @__PURE__ */ makeMap(`__proto__,__v_isRef,__isVue`);
var builtInSymbols = new Set(Object.getOwnPropertyNames(Symbol).map((key)=>Symbol[key]).filter(isSymbol));
var get2 = /* @__PURE__ */ createGetter();
var readonlyGet = /* @__PURE__ */ createGetter(true);
var arrayInstrumentations = /* @__PURE__ */ createArrayInstrumentations();
function createArrayInstrumentations() {
    const instrumentations = {};
    [
        "includes",
        "indexOf",
        "lastIndexOf"
    ].forEach((key)=>{
        instrumentations[key] = function(...args) {
            const arr = toRaw(this);
            for(let i = 0, l = this.length; i < l; i++)track(arr, "get", i + "");
            const res = arr[key](...args);
            if (res === -1 || res === false) return arr[key](...args.map(toRaw));
            else return res;
        };
    });
    [
        "push",
        "pop",
        "shift",
        "unshift",
        "splice"
    ].forEach((key)=>{
        instrumentations[key] = function(...args) {
            pauseTracking();
            const res = toRaw(this)[key].apply(this, args);
            resetTracking();
            return res;
        };
    });
    return instrumentations;
}
function createGetter(isReadonly = false, shallow = false) {
    return function get3(target, key, receiver) {
        if (key === "__v_isReactive") return !isReadonly;
        else if (key === "__v_isReadonly") return isReadonly;
        else if (key === "__v_raw" && receiver === (isReadonly ? shallow ? shallowReadonlyMap : readonlyMap : shallow ? shallowReactiveMap : reactiveMap).get(target)) return target;
        const targetIsArray = isArray(target);
        if (!isReadonly && targetIsArray && hasOwn(arrayInstrumentations, key)) return Reflect.get(arrayInstrumentations, key, receiver);
        const res = Reflect.get(target, key, receiver);
        if (isSymbol(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) return res;
        if (!isReadonly) track(target, "get", key);
        if (shallow) return res;
        if (isRef(res)) {
            const shouldUnwrap = !targetIsArray || !isIntegerKey(key);
            return shouldUnwrap ? res.value : res;
        }
        if (isObject(res)) return isReadonly ? readonly(res) : reactive2(res);
        return res;
    };
}
var set2 = /* @__PURE__ */ createSetter();
function createSetter(shallow = false) {
    return function set3(target, key, value, receiver) {
        let oldValue = target[key];
        if (!shallow) {
            value = toRaw(value);
            oldValue = toRaw(oldValue);
            if (!isArray(target) && isRef(oldValue) && !isRef(value)) {
                oldValue.value = value;
                return true;
            }
        }
        const hadKey = isArray(target) && isIntegerKey(key) ? Number(key) < target.length : hasOwn(target, key);
        const result = Reflect.set(target, key, value, receiver);
        if (target === toRaw(receiver)) {
            if (!hadKey) trigger(target, "add", key, value);
            else if (hasChanged(value, oldValue)) trigger(target, "set", key, value, oldValue);
        }
        return result;
    };
}
function deleteProperty(target, key) {
    const hadKey = hasOwn(target, key);
    const oldValue = target[key];
    const result = Reflect.deleteProperty(target, key);
    if (result && hadKey) trigger(target, "delete", key, void 0, oldValue);
    return result;
}
function has(target, key) {
    const result = Reflect.has(target, key);
    if (!isSymbol(key) || !builtInSymbols.has(key)) track(target, "has", key);
    return result;
}
function ownKeys(target) {
    track(target, "iterate", isArray(target) ? "length" : ITERATE_KEY);
    return Reflect.ownKeys(target);
}
var mutableHandlers = {
    get: get2,
    set: set2,
    deleteProperty,
    has,
    ownKeys
};
var readonlyHandlers = {
    get: readonlyGet,
    set (target, key) {
        console.warn(`Set operation on key "${String(key)}" failed: target is readonly.`, target);
        return true;
    },
    deleteProperty (target, key) {
        console.warn(`Delete operation on key "${String(key)}" failed: target is readonly.`, target);
        return true;
    }
};
var toReactive = (value)=>isObject(value) ? reactive2(value) : value;
var toReadonly = (value)=>isObject(value) ? readonly(value) : value;
var toShallow = (value)=>value;
var getProto = (v)=>Reflect.getPrototypeOf(v);
function get$1(target, key, isReadonly = false, isShallow = false) {
    target = target["__v_raw"];
    const rawTarget = toRaw(target);
    const rawKey = toRaw(key);
    if (key !== rawKey) !isReadonly && track(rawTarget, "get", key);
    !isReadonly && track(rawTarget, "get", rawKey);
    const { has: has2 } = getProto(rawTarget);
    const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
    if (has2.call(rawTarget, key)) return wrap(target.get(key));
    else if (has2.call(rawTarget, rawKey)) return wrap(target.get(rawKey));
    else if (target !== rawTarget) target.get(key);
}
function has$1(key, isReadonly = false) {
    const target = this["__v_raw"];
    const rawTarget = toRaw(target);
    const rawKey = toRaw(key);
    if (key !== rawKey) !isReadonly && track(rawTarget, "has", key);
    !isReadonly && track(rawTarget, "has", rawKey);
    return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
}
function size(target, isReadonly = false) {
    target = target["__v_raw"];
    !isReadonly && track(toRaw(target), "iterate", ITERATE_KEY);
    return Reflect.get(target, "size", target);
}
function add(value) {
    value = toRaw(value);
    const target = toRaw(this);
    const proto = getProto(target);
    const hadKey = proto.has.call(target, value);
    if (!hadKey) {
        target.add(value);
        trigger(target, "add", value, value);
    }
    return this;
}
function set$1(key, value) {
    value = toRaw(value);
    const target = toRaw(this);
    const { has: has2, get: get3 } = getProto(target);
    let hadKey = has2.call(target, key);
    if (!hadKey) {
        key = toRaw(key);
        hadKey = has2.call(target, key);
    } else checkIdentityKeys(target, has2, key);
    const oldValue = get3.call(target, key);
    target.set(key, value);
    if (!hadKey) trigger(target, "add", key, value);
    else if (hasChanged(value, oldValue)) trigger(target, "set", key, value, oldValue);
    return this;
}
function deleteEntry(key) {
    const target = toRaw(this);
    const { has: has2, get: get3 } = getProto(target);
    let hadKey = has2.call(target, key);
    if (!hadKey) {
        key = toRaw(key);
        hadKey = has2.call(target, key);
    } else checkIdentityKeys(target, has2, key);
    const oldValue = get3 ? get3.call(target, key) : void 0;
    const result = target.delete(key);
    if (hadKey) trigger(target, "delete", key, void 0, oldValue);
    return result;
}
function clear() {
    const target = toRaw(this);
    const hadItems = target.size !== 0;
    const oldTarget = isMap(target) ? new Map(target) : new Set(target);
    const result = target.clear();
    if (hadItems) trigger(target, "clear", void 0, void 0, oldTarget);
    return result;
}
function createForEach(isReadonly, isShallow) {
    return function forEach(callback, thisArg) {
        const observed = this;
        const target = observed["__v_raw"];
        const rawTarget = toRaw(target);
        const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
        !isReadonly && track(rawTarget, "iterate", ITERATE_KEY);
        return target.forEach((value, key)=>{
            return callback.call(thisArg, wrap(value), wrap(key), observed);
        });
    };
}
function createIterableMethod(method, isReadonly, isShallow) {
    return function(...args) {
        const target = this["__v_raw"];
        const rawTarget = toRaw(target);
        const targetIsMap = isMap(rawTarget);
        const isPair = method === "entries" || method === Symbol.iterator && targetIsMap;
        const isKeyOnly = method === "keys" && targetIsMap;
        const innerIterator = target[method](...args);
        const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
        !isReadonly && track(rawTarget, "iterate", isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY);
        return {
            // iterator protocol
            next () {
                const { value, done } = innerIterator.next();
                return done ? {
                    value,
                    done
                } : {
                    value: isPair ? [
                        wrap(value[0]),
                        wrap(value[1])
                    ] : wrap(value),
                    done
                };
            },
            // iterable protocol
            [Symbol.iterator] () {
                return this;
            }
        };
    };
}
function createReadonlyMethod(type) {
    return function(...args) {
        {
            const key = args[0] ? `on key "${args[0]}" ` : ``;
            console.warn(`${capitalize(type)} operation ${key}failed: target is readonly.`, toRaw(this));
        }
        return type === "delete" ? false : this;
    };
}
function createInstrumentations() {
    const mutableInstrumentations2 = {
        get (key) {
            return get$1(this, key);
        },
        get size () {
            return size(this);
        },
        has: has$1,
        add,
        set: set$1,
        delete: deleteEntry,
        clear,
        forEach: createForEach(false, false)
    };
    const shallowInstrumentations2 = {
        get (key) {
            return get$1(this, key, false, true);
        },
        get size () {
            return size(this);
        },
        has: has$1,
        add,
        set: set$1,
        delete: deleteEntry,
        clear,
        forEach: createForEach(false, true)
    };
    const readonlyInstrumentations2 = {
        get (key) {
            return get$1(this, key, true);
        },
        get size () {
            return size(this, true);
        },
        has (key) {
            return has$1.call(this, key, true);
        },
        add: createReadonlyMethod("add"),
        set: createReadonlyMethod("set"),
        delete: createReadonlyMethod("delete"),
        clear: createReadonlyMethod("clear"),
        forEach: createForEach(true, false)
    };
    const shallowReadonlyInstrumentations2 = {
        get (key) {
            return get$1(this, key, true, true);
        },
        get size () {
            return size(this, true);
        },
        has (key) {
            return has$1.call(this, key, true);
        },
        add: createReadonlyMethod("add"),
        set: createReadonlyMethod("set"),
        delete: createReadonlyMethod("delete"),
        clear: createReadonlyMethod("clear"),
        forEach: createForEach(true, true)
    };
    const iteratorMethods = [
        "keys",
        "values",
        "entries",
        Symbol.iterator
    ];
    iteratorMethods.forEach((method)=>{
        mutableInstrumentations2[method] = createIterableMethod(method, false, false);
        readonlyInstrumentations2[method] = createIterableMethod(method, true, false);
        shallowInstrumentations2[method] = createIterableMethod(method, false, true);
        shallowReadonlyInstrumentations2[method] = createIterableMethod(method, true, true);
    });
    return [
        mutableInstrumentations2,
        readonlyInstrumentations2,
        shallowInstrumentations2,
        shallowReadonlyInstrumentations2
    ];
}
var [mutableInstrumentations, readonlyInstrumentations, shallowInstrumentations, shallowReadonlyInstrumentations] = /* @__PURE__ */ createInstrumentations();
function createInstrumentationGetter(isReadonly, shallow) {
    const instrumentations = shallow ? isReadonly ? shallowReadonlyInstrumentations : shallowInstrumentations : isReadonly ? readonlyInstrumentations : mutableInstrumentations;
    return (target, key, receiver)=>{
        if (key === "__v_isReactive") return !isReadonly;
        else if (key === "__v_isReadonly") return isReadonly;
        else if (key === "__v_raw") return target;
        return Reflect.get(hasOwn(instrumentations, key) && key in target ? instrumentations : target, key, receiver);
    };
}
var mutableCollectionHandlers = {
    get: /* @__PURE__ */ createInstrumentationGetter(false, false)
};
var readonlyCollectionHandlers = {
    get: /* @__PURE__ */ createInstrumentationGetter(true, false)
};
function checkIdentityKeys(target, has2, key) {
    const rawKey = toRaw(key);
    if (rawKey !== key && has2.call(target, rawKey)) {
        const type = toRawType(target);
        console.warn(`Reactive ${type} contains both the raw and reactive versions of the same object${type === `Map` ? ` as keys` : ``}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`);
    }
}
var reactiveMap = /* @__PURE__ */ new WeakMap();
var shallowReactiveMap = /* @__PURE__ */ new WeakMap();
var readonlyMap = /* @__PURE__ */ new WeakMap();
var shallowReadonlyMap = /* @__PURE__ */ new WeakMap();
function targetTypeMap(rawType) {
    switch(rawType){
        case "Object":
        case "Array":
            return 1;
        case "Map":
        case "Set":
        case "WeakMap":
        case "WeakSet":
            return 2;
        default:
            return 0;
    }
}
function getTargetType(value) {
    return value["__v_skip"] || !Object.isExtensible(value) ? 0 : targetTypeMap(toRawType(value));
}
function reactive2(target) {
    if (target && target["__v_isReadonly"]) return target;
    return createReactiveObject(target, false, mutableHandlers, mutableCollectionHandlers, reactiveMap);
}
function readonly(target) {
    return createReactiveObject(target, true, readonlyHandlers, readonlyCollectionHandlers, readonlyMap);
}
function createReactiveObject(target, isReadonly, baseHandlers, collectionHandlers, proxyMap) {
    if (!isObject(target)) {
        console.warn(`value cannot be made reactive: ${String(target)}`);
        return target;
    }
    if (target["__v_raw"] && !(isReadonly && target["__v_isReactive"])) return target;
    const existingProxy = proxyMap.get(target);
    if (existingProxy) return existingProxy;
    const targetType = getTargetType(target);
    if (targetType === 0) return target;
    const proxy = new Proxy(target, targetType === 2 ? collectionHandlers : baseHandlers);
    proxyMap.set(target, proxy);
    return proxy;
}
function toRaw(observed) {
    return observed && toRaw(observed["__v_raw"]) || observed;
}
function isRef(r) {
    return Boolean(r && r.__v_isRef === true);
}
// packages/alpinejs/src/magics/$nextTick.js
magic("nextTick", ()=>nextTick);
// packages/alpinejs/src/magics/$dispatch.js
magic("dispatch", (el)=>dispatch.bind(dispatch, el));
// packages/alpinejs/src/magics/$watch.js
magic("watch", (el, { evaluateLater: evaluateLater2, cleanup: cleanup2 })=>(key, callback)=>{
        let evaluate2 = evaluateLater2(key);
        let getter = ()=>{
            let value;
            evaluate2((i)=>value = i);
            return value;
        };
        let unwatch = watch(getter, callback);
        cleanup2(unwatch);
    });
// packages/alpinejs/src/magics/$store.js
magic("store", getStores);
// packages/alpinejs/src/magics/$data.js
magic("data", (el)=>scope(el));
// packages/alpinejs/src/magics/$root.js
magic("root", (el)=>closestRoot(el));
// packages/alpinejs/src/magics/$refs.js
magic("refs", (el)=>{
    if (el._x_refs_proxy) return el._x_refs_proxy;
    el._x_refs_proxy = mergeProxies(getArrayOfRefObject(el));
    return el._x_refs_proxy;
});
function getArrayOfRefObject(el) {
    let refObjects = [];
    findClosest(el, (i)=>{
        if (i._x_refs) refObjects.push(i._x_refs);
    });
    return refObjects;
}
// packages/alpinejs/src/ids.js
var globalIdMemo = {};
function findAndIncrementId(name) {
    if (!globalIdMemo[name]) globalIdMemo[name] = 0;
    return ++globalIdMemo[name];
}
function closestIdRoot(el, name) {
    return findClosest(el, (element)=>{
        if (element._x_ids && element._x_ids[name]) return true;
    });
}
function setIdRoot(el, name) {
    if (!el._x_ids) el._x_ids = {};
    if (!el._x_ids[name]) el._x_ids[name] = findAndIncrementId(name);
}
// packages/alpinejs/src/magics/$id.js
magic("id", (el, { cleanup: cleanup2 })=>(name, key = null)=>{
        let cacheKey = `${name}${key ? `-${key}` : ""}`;
        return cacheIdByNameOnElement(el, cacheKey, cleanup2, ()=>{
            let root = closestIdRoot(el, name);
            let id = root ? root._x_ids[name] : findAndIncrementId(name);
            return key ? `${name}-${id}-${key}` : `${name}-${id}`;
        });
    });
interceptClone((from, to)=>{
    if (from._x_id) to._x_id = from._x_id;
});
function cacheIdByNameOnElement(el, cacheKey, cleanup2, callback) {
    if (!el._x_id) el._x_id = {};
    if (el._x_id[cacheKey]) return el._x_id[cacheKey];
    let output = callback();
    el._x_id[cacheKey] = output;
    cleanup2(()=>{
        delete el._x_id[cacheKey];
    });
    return output;
}
// packages/alpinejs/src/magics/$el.js
magic("el", (el)=>el);
// packages/alpinejs/src/magics/index.js
warnMissingPluginMagic("Focus", "focus", "focus");
warnMissingPluginMagic("Persist", "persist", "persist");
function warnMissingPluginMagic(name, magicName, slug) {
    magic(magicName, (el)=>warn(`You can't use [$${magicName}] without first installing the "${name}" plugin here: https://alpinejs.dev/plugins/${slug}`, el));
}
// packages/alpinejs/src/directives/x-modelable.js
directive("modelable", (el, { expression }, { effect: effect3, evaluateLater: evaluateLater2, cleanup: cleanup2 })=>{
    let func = evaluateLater2(expression);
    let innerGet = ()=>{
        let result;
        func((i)=>result = i);
        return result;
    };
    let evaluateInnerSet = evaluateLater2(`${expression} = __placeholder`);
    let innerSet = (val)=>evaluateInnerSet(()=>{}, {
            scope: {
                "__placeholder": val
            }
        });
    let initialValue = innerGet();
    innerSet(initialValue);
    queueMicrotask(()=>{
        if (!el._x_model) return;
        el._x_removeModelListeners["default"]();
        let outerGet = el._x_model.get;
        let outerSet = el._x_model.set;
        let releaseEntanglement = entangle({
            get () {
                return outerGet();
            },
            set (value) {
                outerSet(value);
            }
        }, {
            get () {
                return innerGet();
            },
            set (value) {
                innerSet(value);
            }
        });
        cleanup2(releaseEntanglement);
    });
});
// packages/alpinejs/src/directives/x-teleport.js
directive("teleport", (el, { modifiers, expression }, { cleanup: cleanup2 })=>{
    if (el.tagName.toLowerCase() !== "template") warn("x-teleport can only be used on a <template> tag", el);
    let target = getTarget(expression);
    let clone2 = el.content.cloneNode(true).firstElementChild;
    el._x_teleport = clone2;
    clone2._x_teleportBack = el;
    el.setAttribute("data-teleport-template", true);
    clone2.setAttribute("data-teleport-target", true);
    if (el._x_forwardEvents) el._x_forwardEvents.forEach((eventName)=>{
        clone2.addEventListener(eventName, (e)=>{
            e.stopPropagation();
            el.dispatchEvent(new e.constructor(e.type, e));
        });
    });
    addScopeToNode(clone2, {}, el);
    let placeInDom = (clone3, target2, modifiers2)=>{
        if (modifiers2.includes("prepend")) target2.parentNode.insertBefore(clone3, target2);
        else if (modifiers2.includes("append")) target2.parentNode.insertBefore(clone3, target2.nextSibling);
        else target2.appendChild(clone3);
    };
    mutateDom(()=>{
        placeInDom(clone2, target, modifiers);
        skipDuringClone(()=>{
            initTree(clone2);
        })();
    });
    el._x_teleportPutBack = ()=>{
        let target2 = getTarget(expression);
        mutateDom(()=>{
            placeInDom(el._x_teleport, target2, modifiers);
        });
    };
    cleanup2(()=>mutateDom(()=>{
            clone2.remove();
            destroyTree(clone2);
        }));
});
var teleportContainerDuringClone = document.createElement("div");
function getTarget(expression) {
    let target = skipDuringClone(()=>{
        return document.querySelector(expression);
    }, ()=>{
        return teleportContainerDuringClone;
    })();
    if (!target) warn(`Cannot find x-teleport element for selector: "${expression}"`);
    return target;
}
// packages/alpinejs/src/directives/x-ignore.js
var handler = ()=>{};
handler.inline = (el, { modifiers }, { cleanup: cleanup2 })=>{
    modifiers.includes("self") ? el._x_ignoreSelf = true : el._x_ignore = true;
    cleanup2(()=>{
        modifiers.includes("self") ? delete el._x_ignoreSelf : delete el._x_ignore;
    });
};
directive("ignore", handler);
// packages/alpinejs/src/directives/x-effect.js
directive("effect", skipDuringClone((el, { expression }, { effect: effect3 })=>{
    effect3(evaluateLater(el, expression));
}));
// packages/alpinejs/src/utils/on.js
function on(el, event, modifiers, callback) {
    let listenerTarget = el;
    let handler4 = (e)=>callback(e);
    let options = {};
    let wrapHandler = (callback2, wrapper)=>(e)=>wrapper(callback2, e);
    if (modifiers.includes("dot")) event = dotSyntax(event);
    if (modifiers.includes("camel")) event = camelCase2(event);
    if (modifiers.includes("passive")) options.passive = true;
    if (modifiers.includes("capture")) options.capture = true;
    if (modifiers.includes("window")) listenerTarget = window;
    if (modifiers.includes("document")) listenerTarget = document;
    if (modifiers.includes("debounce")) {
        let nextModifier = modifiers[modifiers.indexOf("debounce") + 1] || "invalid-wait";
        let wait = isNumeric(nextModifier.split("ms")[0]) ? Number(nextModifier.split("ms")[0]) : 250;
        handler4 = debounce(handler4, wait);
    }
    if (modifiers.includes("throttle")) {
        let nextModifier = modifiers[modifiers.indexOf("throttle") + 1] || "invalid-wait";
        let wait = isNumeric(nextModifier.split("ms")[0]) ? Number(nextModifier.split("ms")[0]) : 250;
        handler4 = throttle(handler4, wait);
    }
    if (modifiers.includes("prevent")) handler4 = wrapHandler(handler4, (next, e)=>{
        e.preventDefault();
        next(e);
    });
    if (modifiers.includes("stop")) handler4 = wrapHandler(handler4, (next, e)=>{
        e.stopPropagation();
        next(e);
    });
    if (modifiers.includes("once")) handler4 = wrapHandler(handler4, (next, e)=>{
        next(e);
        listenerTarget.removeEventListener(event, handler4, options);
    });
    if (modifiers.includes("away") || modifiers.includes("outside")) {
        listenerTarget = document;
        handler4 = wrapHandler(handler4, (next, e)=>{
            if (el.contains(e.target)) return;
            if (e.target.isConnected === false) return;
            if (el.offsetWidth < 1 && el.offsetHeight < 1) return;
            if (el._x_isShown === false) return;
            next(e);
        });
    }
    if (modifiers.includes("self")) handler4 = wrapHandler(handler4, (next, e)=>{
        e.target === el && next(e);
    });
    if (isKeyEvent(event) || isClickEvent(event)) handler4 = wrapHandler(handler4, (next, e)=>{
        if (isListeningForASpecificKeyThatHasntBeenPressed(e, modifiers)) return;
        next(e);
    });
    listenerTarget.addEventListener(event, handler4, options);
    return ()=>{
        listenerTarget.removeEventListener(event, handler4, options);
    };
}
function dotSyntax(subject) {
    return subject.replace(/-/g, ".");
}
function camelCase2(subject) {
    return subject.toLowerCase().replace(/-(\w)/g, (match, char)=>char.toUpperCase());
}
function isNumeric(subject) {
    return !Array.isArray(subject) && !isNaN(subject);
}
function kebabCase2(subject) {
    if ([
        " ",
        "_"
    ].includes(subject)) return subject;
    return subject.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/[_\s]/, "-").toLowerCase();
}
function isKeyEvent(event) {
    return [
        "keydown",
        "keyup"
    ].includes(event);
}
function isClickEvent(event) {
    return [
        "contextmenu",
        "click",
        "mouse"
    ].some((i)=>event.includes(i));
}
function isListeningForASpecificKeyThatHasntBeenPressed(e, modifiers) {
    let keyModifiers = modifiers.filter((i)=>{
        return ![
            "window",
            "document",
            "prevent",
            "stop",
            "once",
            "capture",
            "self",
            "away",
            "outside",
            "passive",
            "preserve-scroll"
        ].includes(i);
    });
    if (keyModifiers.includes("debounce")) {
        let debounceIndex = keyModifiers.indexOf("debounce");
        keyModifiers.splice(debounceIndex, isNumeric((keyModifiers[debounceIndex + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1);
    }
    if (keyModifiers.includes("throttle")) {
        let debounceIndex = keyModifiers.indexOf("throttle");
        keyModifiers.splice(debounceIndex, isNumeric((keyModifiers[debounceIndex + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1);
    }
    if (keyModifiers.length === 0) return false;
    if (keyModifiers.length === 1 && keyToModifiers(e.key).includes(keyModifiers[0])) return false;
    const systemKeyModifiers = [
        "ctrl",
        "shift",
        "alt",
        "meta",
        "cmd",
        "super"
    ];
    const selectedSystemKeyModifiers = systemKeyModifiers.filter((modifier)=>keyModifiers.includes(modifier));
    keyModifiers = keyModifiers.filter((i)=>!selectedSystemKeyModifiers.includes(i));
    if (selectedSystemKeyModifiers.length > 0) {
        const activelyPressedKeyModifiers = selectedSystemKeyModifiers.filter((modifier)=>{
            if (modifier === "cmd" || modifier === "super") modifier = "meta";
            return e[`${modifier}Key`];
        });
        if (activelyPressedKeyModifiers.length === selectedSystemKeyModifiers.length) {
            if (isClickEvent(e.type)) return false;
            if (keyToModifiers(e.key).includes(keyModifiers[0])) return false;
        }
    }
    return true;
}
function keyToModifiers(key) {
    if (!key) return [];
    key = kebabCase2(key);
    let modifierToKeyMap = {
        "ctrl": "control",
        "slash": "/",
        "space": " ",
        "spacebar": " ",
        "cmd": "meta",
        "esc": "escape",
        "up": "arrow-up",
        "down": "arrow-down",
        "left": "arrow-left",
        "right": "arrow-right",
        "period": ".",
        "comma": ",",
        "equal": "=",
        "minus": "-",
        "underscore": "_"
    };
    modifierToKeyMap[key] = key;
    return Object.keys(modifierToKeyMap).map((modifier)=>{
        if (modifierToKeyMap[modifier] === key) return modifier;
    }).filter((modifier)=>modifier);
}
// packages/alpinejs/src/directives/x-model.js
directive("model", (el, { modifiers, expression }, { effect: effect3, cleanup: cleanup2 })=>{
    let scopeTarget = el;
    if (modifiers.includes("parent")) scopeTarget = el.parentNode;
    let evaluateGet = evaluateLater(scopeTarget, expression);
    let evaluateSet;
    if (typeof expression === "string") evaluateSet = evaluateLater(scopeTarget, `${expression} = __placeholder`);
    else if (typeof expression === "function" && typeof expression() === "string") evaluateSet = evaluateLater(scopeTarget, `${expression()} = __placeholder`);
    else evaluateSet = ()=>{};
    let getValue = ()=>{
        let result;
        evaluateGet((value)=>result = value);
        return isGetterSetter(result) ? result.get() : result;
    };
    let setValue = (value)=>{
        let result;
        evaluateGet((value2)=>result = value2);
        if (isGetterSetter(result)) result.set(value);
        else evaluateSet(()=>{}, {
            scope: {
                "__placeholder": value
            }
        });
    };
    if (typeof expression === "string" && el.type === "radio") mutateDom(()=>{
        if (!el.hasAttribute("name")) el.setAttribute("name", expression);
    });
    let event = el.tagName.toLowerCase() === "select" || [
        "checkbox",
        "radio"
    ].includes(el.type) || modifiers.includes("lazy") ? "change" : "input";
    let removeListener = isCloning ? ()=>{} : on(el, event, modifiers, (e)=>{
        setValue(getInputValue(el, modifiers, e, getValue()));
    });
    if (modifiers.includes("fill")) {
        if ([
            void 0,
            null,
            ""
        ].includes(getValue()) || isCheckbox(el) && Array.isArray(getValue()) || el.tagName.toLowerCase() === "select" && el.multiple) setValue(getInputValue(el, modifiers, {
            target: el
        }, getValue()));
    }
    if (!el._x_removeModelListeners) el._x_removeModelListeners = {};
    el._x_removeModelListeners["default"] = removeListener;
    cleanup2(()=>el._x_removeModelListeners["default"]());
    if (el.form) {
        let removeResetListener = on(el.form, "reset", [], (e)=>{
            nextTick(()=>el._x_model && el._x_model.set(getInputValue(el, modifiers, {
                    target: el
                }, getValue())));
        });
        cleanup2(()=>removeResetListener());
    }
    el._x_model = {
        get () {
            return getValue();
        },
        set (value) {
            setValue(value);
        }
    };
    el._x_forceModelUpdate = (value)=>{
        if (value === void 0 && typeof expression === "string" && expression.match(/\./)) value = "";
        window.fromModel = true;
        mutateDom(()=>bind(el, "value", value));
        delete window.fromModel;
    };
    effect3(()=>{
        let value = getValue();
        if (modifiers.includes("unintrusive") && document.activeElement.isSameNode(el)) return;
        el._x_forceModelUpdate(value);
    });
});
function getInputValue(el, modifiers, event, currentValue) {
    return mutateDom(()=>{
        if (event instanceof CustomEvent && event.detail !== void 0) return event.detail !== null && event.detail !== void 0 ? event.detail : event.target.value;
        else if (isCheckbox(el)) {
            if (Array.isArray(currentValue)) {
                let newValue = null;
                if (modifiers.includes("number")) newValue = safeParseNumber(event.target.value);
                else if (modifiers.includes("boolean")) newValue = safeParseBoolean(event.target.value);
                else newValue = event.target.value;
                return event.target.checked ? currentValue.includes(newValue) ? currentValue : currentValue.concat([
                    newValue
                ]) : currentValue.filter((el2)=>!checkedAttrLooseCompare2(el2, newValue));
            } else return event.target.checked;
        } else if (el.tagName.toLowerCase() === "select" && el.multiple) {
            if (modifiers.includes("number")) return Array.from(event.target.selectedOptions).map((option)=>{
                let rawValue = option.value || option.text;
                return safeParseNumber(rawValue);
            });
            else if (modifiers.includes("boolean")) return Array.from(event.target.selectedOptions).map((option)=>{
                let rawValue = option.value || option.text;
                return safeParseBoolean(rawValue);
            });
            return Array.from(event.target.selectedOptions).map((option)=>{
                return option.value || option.text;
            });
        } else {
            let newValue;
            if (isRadio(el)) {
                if (event.target.checked) newValue = event.target.value;
                else newValue = currentValue;
            } else newValue = event.target.value;
            if (modifiers.includes("number")) return safeParseNumber(newValue);
            else if (modifiers.includes("boolean")) return safeParseBoolean(newValue);
            else if (modifiers.includes("trim")) return newValue.trim();
            else return newValue;
        }
    });
}
function safeParseNumber(rawValue) {
    let number = rawValue ? parseFloat(rawValue) : null;
    return isNumeric2(number) ? number : rawValue;
}
function checkedAttrLooseCompare2(valueA, valueB) {
    return valueA == valueB;
}
function isNumeric2(subject) {
    return !Array.isArray(subject) && !isNaN(subject);
}
function isGetterSetter(value) {
    return value !== null && typeof value === "object" && typeof value.get === "function" && typeof value.set === "function";
}
// packages/alpinejs/src/directives/x-cloak.js
directive("cloak", (el)=>queueMicrotask(()=>mutateDom(()=>el.removeAttribute(prefix("cloak")))));
// packages/alpinejs/src/directives/x-init.js
addInitSelector(()=>`[${prefix("init")}]`);
directive("init", skipDuringClone((el, { expression }, { evaluate: evaluate2 })=>{
    if (typeof expression === "string") return !!expression.trim() && evaluate2(expression, {}, false);
    return evaluate2(expression, {}, false);
}));
// packages/alpinejs/src/directives/x-text.js
directive("text", (el, { expression }, { effect: effect3, evaluateLater: evaluateLater2 })=>{
    let evaluate2 = evaluateLater2(expression);
    effect3(()=>{
        evaluate2((value)=>{
            mutateDom(()=>{
                el.textContent = value;
            });
        });
    });
});
// packages/alpinejs/src/directives/x-html.js
directive("html", (el, { expression }, { effect: effect3, evaluateLater: evaluateLater2 })=>{
    let evaluate2 = evaluateLater2(expression);
    effect3(()=>{
        evaluate2((value)=>{
            mutateDom(()=>{
                el.innerHTML = value;
                el._x_ignoreSelf = true;
                initTree(el);
                delete el._x_ignoreSelf;
            });
        });
    });
});
// packages/alpinejs/src/directives/x-bind.js
mapAttributes(startingWith(":", into(prefix("bind:"))));
var handler2 = (el, { value, modifiers, expression, original }, { effect: effect3, cleanup: cleanup2 })=>{
    if (!value) {
        let bindingProviders = {};
        injectBindingProviders(bindingProviders);
        let getBindings = evaluateLater(el, expression);
        getBindings((bindings)=>{
            applyBindingsObject(el, bindings, original);
        }, {
            scope: bindingProviders
        });
        return;
    }
    if (value === "key") return storeKeyForXFor(el, expression);
    if (el._x_inlineBindings && el._x_inlineBindings[value] && el._x_inlineBindings[value].extract) return;
    let evaluate2 = evaluateLater(el, expression);
    effect3(()=>evaluate2((result)=>{
            if (result === void 0 && typeof expression === "string" && expression.match(/\./)) result = "";
            mutateDom(()=>bind(el, value, result, modifiers));
        }));
    cleanup2(()=>{
        el._x_undoAddedClasses && el._x_undoAddedClasses();
        el._x_undoAddedStyles && el._x_undoAddedStyles();
    });
};
handler2.inline = (el, { value, modifiers, expression })=>{
    if (!value) return;
    if (!el._x_inlineBindings) el._x_inlineBindings = {};
    el._x_inlineBindings[value] = {
        expression,
        extract: false
    };
};
directive("bind", handler2);
function storeKeyForXFor(el, expression) {
    el._x_keyExpression = expression;
}
// packages/alpinejs/src/directives/x-data.js
addRootSelector(()=>`[${prefix("data")}]`);
directive("data", (el, { expression }, { cleanup: cleanup2 })=>{
    if (shouldSkipRegisteringDataDuringClone(el)) return;
    expression = expression === "" ? "{}" : expression;
    let magicContext = {};
    injectMagics(magicContext, el);
    let dataProviderContext = {};
    injectDataProviders(dataProviderContext, magicContext);
    let data2 = evaluate(el, expression, {
        scope: dataProviderContext
    });
    if (data2 === void 0 || data2 === true) data2 = {};
    injectMagics(data2, el);
    let reactiveData = reactive(data2);
    initInterceptors(reactiveData);
    let undo = addScopeToNode(el, reactiveData);
    reactiveData["init"] && evaluate(el, reactiveData["init"]);
    cleanup2(()=>{
        reactiveData["destroy"] && evaluate(el, reactiveData["destroy"]);
        undo();
    });
});
interceptClone((from, to)=>{
    if (from._x_dataStack) {
        to._x_dataStack = from._x_dataStack;
        to.setAttribute("data-has-alpine-state", true);
    }
});
function shouldSkipRegisteringDataDuringClone(el) {
    if (!isCloning) return false;
    if (isCloningLegacy) return true;
    return el.hasAttribute("data-has-alpine-state");
}
// packages/alpinejs/src/directives/x-show.js
directive("show", (el, { modifiers, expression }, { effect: effect3 })=>{
    let evaluate2 = evaluateLater(el, expression);
    if (!el._x_doHide) el._x_doHide = ()=>{
        mutateDom(()=>{
            el.style.setProperty("display", "none", modifiers.includes("important") ? "important" : void 0);
        });
    };
    if (!el._x_doShow) el._x_doShow = ()=>{
        mutateDom(()=>{
            if (el.style.length === 1 && el.style.display === "none") el.removeAttribute("style");
            else el.style.removeProperty("display");
        });
    };
    let hide = ()=>{
        el._x_doHide();
        el._x_isShown = false;
    };
    let show = ()=>{
        el._x_doShow();
        el._x_isShown = true;
    };
    let clickAwayCompatibleShow = ()=>setTimeout(show);
    let toggle = once((value)=>value ? show() : hide(), (value)=>{
        if (typeof el._x_toggleAndCascadeWithTransitions === "function") el._x_toggleAndCascadeWithTransitions(el, value, show, hide);
        else value ? clickAwayCompatibleShow() : hide();
    });
    let oldValue;
    let firstTime = true;
    effect3(()=>evaluate2((value)=>{
            if (!firstTime && value === oldValue) return;
            if (modifiers.includes("immediate")) value ? clickAwayCompatibleShow() : hide();
            toggle(value);
            oldValue = value;
            firstTime = false;
        }));
});
// packages/alpinejs/src/directives/x-for.js
directive("for", (el, { expression }, { effect: effect3, cleanup: cleanup2 })=>{
    let iteratorNames = parseForExpression(expression);
    let evaluateItems = evaluateLater(el, iteratorNames.items);
    let evaluateKey = evaluateLater(el, // the x-bind:key expression is stored for our use instead of evaluated.
    el._x_keyExpression || "index");
    el._x_prevKeys = [];
    el._x_lookup = {};
    effect3(()=>loop(el, iteratorNames, evaluateItems, evaluateKey));
    cleanup2(()=>{
        Object.values(el._x_lookup).forEach((el2)=>mutateDom(()=>{
                destroyTree(el2);
                el2.remove();
            }));
        delete el._x_prevKeys;
        delete el._x_lookup;
    });
});
function loop(el, iteratorNames, evaluateItems, evaluateKey) {
    let isObject2 = (i)=>typeof i === "object" && !Array.isArray(i);
    let templateEl = el;
    evaluateItems((items)=>{
        if (isNumeric3(items) && items >= 0) items = Array.from(Array(items).keys(), (i)=>i + 1);
        if (items === void 0) items = [];
        let lookup = el._x_lookup;
        let prevKeys = el._x_prevKeys;
        let scopes = [];
        let keys = [];
        if (isObject2(items)) items = Object.entries(items).map(([key, value])=>{
            let scope2 = getIterationScopeVariables(iteratorNames, value, key, items);
            evaluateKey((value2)=>{
                if (keys.includes(value2)) warn("Duplicate key on x-for", el);
                keys.push(value2);
            }, {
                scope: {
                    index: key,
                    ...scope2
                }
            });
            scopes.push(scope2);
        });
        else for(let i = 0; i < items.length; i++){
            let scope2 = getIterationScopeVariables(iteratorNames, items[i], i, items);
            evaluateKey((value)=>{
                if (keys.includes(value)) warn("Duplicate key on x-for", el);
                keys.push(value);
            }, {
                scope: {
                    index: i,
                    ...scope2
                }
            });
            scopes.push(scope2);
        }
        let adds = [];
        let moves = [];
        let removes = [];
        let sames = [];
        for(let i = 0; i < prevKeys.length; i++){
            let key = prevKeys[i];
            if (keys.indexOf(key) === -1) removes.push(key);
        }
        prevKeys = prevKeys.filter((key)=>!removes.includes(key));
        let lastKey = "template";
        for(let i = 0; i < keys.length; i++){
            let key = keys[i];
            let prevIndex = prevKeys.indexOf(key);
            if (prevIndex === -1) {
                prevKeys.splice(i, 0, key);
                adds.push([
                    lastKey,
                    i
                ]);
            } else if (prevIndex !== i) {
                let keyInSpot = prevKeys.splice(i, 1)[0];
                let keyForSpot = prevKeys.splice(prevIndex - 1, 1)[0];
                prevKeys.splice(i, 0, keyForSpot);
                prevKeys.splice(prevIndex, 0, keyInSpot);
                moves.push([
                    keyInSpot,
                    keyForSpot
                ]);
            } else sames.push(key);
            lastKey = key;
        }
        for(let i = 0; i < removes.length; i++){
            let key = removes[i];
            if (!(key in lookup)) continue;
            mutateDom(()=>{
                destroyTree(lookup[key]);
                lookup[key].remove();
            });
            delete lookup[key];
        }
        for(let i = 0; i < moves.length; i++){
            let [keyInSpot, keyForSpot] = moves[i];
            let elInSpot = lookup[keyInSpot];
            let elForSpot = lookup[keyForSpot];
            let marker = document.createElement("div");
            mutateDom(()=>{
                if (!elForSpot) warn(`x-for ":key" is undefined or invalid`, templateEl, keyForSpot, lookup);
                elForSpot.after(marker);
                elInSpot.after(elForSpot);
                elForSpot._x_currentIfEl && elForSpot.after(elForSpot._x_currentIfEl);
                marker.before(elInSpot);
                elInSpot._x_currentIfEl && elInSpot.after(elInSpot._x_currentIfEl);
                marker.remove();
            });
            elForSpot._x_refreshXForScope(scopes[keys.indexOf(keyForSpot)]);
        }
        for(let i = 0; i < adds.length; i++){
            let [lastKey2, index] = adds[i];
            let lastEl = lastKey2 === "template" ? templateEl : lookup[lastKey2];
            if (lastEl._x_currentIfEl) lastEl = lastEl._x_currentIfEl;
            let scope2 = scopes[index];
            let key = keys[index];
            let clone2 = document.importNode(templateEl.content, true).firstElementChild;
            let reactiveScope = reactive(scope2);
            addScopeToNode(clone2, reactiveScope, templateEl);
            clone2._x_refreshXForScope = (newScope)=>{
                Object.entries(newScope).forEach(([key2, value])=>{
                    reactiveScope[key2] = value;
                });
            };
            mutateDom(()=>{
                lastEl.after(clone2);
                skipDuringClone(()=>initTree(clone2))();
            });
            if (typeof key === "object") warn("x-for key cannot be an object, it must be a string or an integer", templateEl);
            lookup[key] = clone2;
        }
        for(let i = 0; i < sames.length; i++)lookup[sames[i]]._x_refreshXForScope(scopes[keys.indexOf(sames[i])]);
        templateEl._x_prevKeys = keys;
    });
}
function parseForExpression(expression) {
    let forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
    let stripParensRE = /^\s*\(|\)\s*$/g;
    let forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;
    let inMatch = expression.match(forAliasRE);
    if (!inMatch) return;
    let res = {};
    res.items = inMatch[2].trim();
    let item = inMatch[1].replace(stripParensRE, "").trim();
    let iteratorMatch = item.match(forIteratorRE);
    if (iteratorMatch) {
        res.item = item.replace(forIteratorRE, "").trim();
        res.index = iteratorMatch[1].trim();
        if (iteratorMatch[2]) res.collection = iteratorMatch[2].trim();
    } else res.item = item;
    return res;
}
function getIterationScopeVariables(iteratorNames, item, index, items) {
    let scopeVariables = {};
    if (/^\[.*\]$/.test(iteratorNames.item) && Array.isArray(item)) {
        let names = iteratorNames.item.replace("[", "").replace("]", "").split(",").map((i)=>i.trim());
        names.forEach((name, i)=>{
            scopeVariables[name] = item[i];
        });
    } else if (/^\{.*\}$/.test(iteratorNames.item) && !Array.isArray(item) && typeof item === "object") {
        let names = iteratorNames.item.replace("{", "").replace("}", "").split(",").map((i)=>i.trim());
        names.forEach((name)=>{
            scopeVariables[name] = item[name];
        });
    } else scopeVariables[iteratorNames.item] = item;
    if (iteratorNames.index) scopeVariables[iteratorNames.index] = index;
    if (iteratorNames.collection) scopeVariables[iteratorNames.collection] = items;
    return scopeVariables;
}
function isNumeric3(subject) {
    return !Array.isArray(subject) && !isNaN(subject);
}
// packages/alpinejs/src/directives/x-ref.js
function handler3() {}
handler3.inline = (el, { expression }, { cleanup: cleanup2 })=>{
    let root = closestRoot(el);
    if (!root._x_refs) root._x_refs = {};
    root._x_refs[expression] = el;
    cleanup2(()=>delete root._x_refs[expression]);
};
directive("ref", handler3);
// packages/alpinejs/src/directives/x-if.js
directive("if", (el, { expression }, { effect: effect3, cleanup: cleanup2 })=>{
    if (el.tagName.toLowerCase() !== "template") warn("x-if can only be used on a <template> tag", el);
    let evaluate2 = evaluateLater(el, expression);
    let show = ()=>{
        if (el._x_currentIfEl) return el._x_currentIfEl;
        let clone2 = el.content.cloneNode(true).firstElementChild;
        addScopeToNode(clone2, {}, el);
        mutateDom(()=>{
            el.after(clone2);
            skipDuringClone(()=>initTree(clone2))();
        });
        el._x_currentIfEl = clone2;
        el._x_undoIf = ()=>{
            mutateDom(()=>{
                destroyTree(clone2);
                clone2.remove();
            });
            delete el._x_currentIfEl;
        };
        return clone2;
    };
    let hide = ()=>{
        if (!el._x_undoIf) return;
        el._x_undoIf();
        delete el._x_undoIf;
    };
    effect3(()=>evaluate2((value)=>{
            value ? show() : hide();
        }));
    cleanup2(()=>el._x_undoIf && el._x_undoIf());
});
// packages/alpinejs/src/directives/x-id.js
directive("id", (el, { expression }, { evaluate: evaluate2 })=>{
    let names = evaluate2(expression);
    names.forEach((name)=>setIdRoot(el, name));
});
interceptClone((from, to)=>{
    if (from._x_ids) to._x_ids = from._x_ids;
});
// packages/alpinejs/src/directives/x-on.js
mapAttributes(startingWith("@", into(prefix("on:"))));
directive("on", skipDuringClone((el, { value, modifiers, expression }, { cleanup: cleanup2 })=>{
    let evaluate2 = expression ? evaluateLater(el, expression) : ()=>{};
    if (el.tagName.toLowerCase() === "template") {
        if (!el._x_forwardEvents) el._x_forwardEvents = [];
        if (!el._x_forwardEvents.includes(value)) el._x_forwardEvents.push(value);
    }
    let removeListener = on(el, value, modifiers, (e)=>{
        evaluate2(()=>{}, {
            scope: {
                "$event": e
            },
            params: [
                e
            ]
        });
    });
    cleanup2(()=>removeListener());
}));
// packages/alpinejs/src/directives/index.js
warnMissingPluginDirective("Collapse", "collapse", "collapse");
warnMissingPluginDirective("Intersect", "intersect", "intersect");
warnMissingPluginDirective("Focus", "trap", "focus");
warnMissingPluginDirective("Mask", "mask", "mask");
function warnMissingPluginDirective(name, directiveName, slug) {
    directive(directiveName, (el)=>warn(`You can't use [x-${directiveName}] without first installing the "${name}" plugin here: https://alpinejs.dev/plugins/${slug}`, el));
}
// packages/alpinejs/src/index.js
alpine_default.setEvaluator(normalEvaluator);
alpine_default.setReactivityEngine({
    reactive: reactive2,
    effect: effect2,
    release: stop,
    raw: toRaw
});
var src_default = alpine_default;
// packages/alpinejs/builds/module.js
var module_default = src_default;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"iY8M2":[function(require,module,exports,__globalThis) {
// node_modules/tabbable/dist/index.esm.js
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>module_default) /*! Bundled license information:

tabbable/dist/index.esm.js:
  (*!
  * tabbable 5.3.3
  * @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
  *)

focus-trap/dist/focus-trap.esm.js:
  (*!
  * focus-trap 6.9.4
  * @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
  *)
*/ ;
parcelHelpers.export(exports, "focus", ()=>src_default);
var candidateSelectors = [
    "input",
    "select",
    "textarea",
    "a[href]",
    "button",
    "[tabindex]:not(slot)",
    "audio[controls]",
    "video[controls]",
    '[contenteditable]:not([contenteditable="false"])',
    "details>summary:first-of-type",
    "details"
];
var candidateSelector = /* @__PURE__ */ candidateSelectors.join(",");
var NoElement = typeof Element === "undefined";
var matches = NoElement ? function() {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
var getRootNode = !NoElement && Element.prototype.getRootNode ? function(element) {
    return element.getRootNode();
} : function(element) {
    return element.ownerDocument;
};
var getCandidates = function getCandidates2(el, includeContainer, filter) {
    var candidates = Array.prototype.slice.apply(el.querySelectorAll(candidateSelector));
    if (includeContainer && matches.call(el, candidateSelector)) candidates.unshift(el);
    candidates = candidates.filter(filter);
    return candidates;
};
var getCandidatesIteratively = function getCandidatesIteratively2(elements, includeContainer, options) {
    var candidates = [];
    var elementsToCheck = Array.from(elements);
    while(elementsToCheck.length){
        var element = elementsToCheck.shift();
        if (element.tagName === "SLOT") {
            var assigned = element.assignedElements();
            var content = assigned.length ? assigned : element.children;
            var nestedCandidates = getCandidatesIteratively2(content, true, options);
            if (options.flatten) candidates.push.apply(candidates, nestedCandidates);
            else candidates.push({
                scope: element,
                candidates: nestedCandidates
            });
        } else {
            var validCandidate = matches.call(element, candidateSelector);
            if (validCandidate && options.filter(element) && (includeContainer || !elements.includes(element))) candidates.push(element);
            var shadowRoot = element.shadowRoot || // check for an undisclosed shadow
            typeof options.getShadowRoot === "function" && options.getShadowRoot(element);
            var validShadowRoot = !options.shadowRootFilter || options.shadowRootFilter(element);
            if (shadowRoot && validShadowRoot) {
                var _nestedCandidates = getCandidatesIteratively2(shadowRoot === true ? element.children : shadowRoot.children, true, options);
                if (options.flatten) candidates.push.apply(candidates, _nestedCandidates);
                else candidates.push({
                    scope: element,
                    candidates: _nestedCandidates
                });
            } else elementsToCheck.unshift.apply(elementsToCheck, element.children);
        }
    }
    return candidates;
};
var getTabindex = function getTabindex2(node, isScope) {
    if (node.tabIndex < 0) {
        if ((isScope || /^(AUDIO|VIDEO|DETAILS)$/.test(node.tagName) || node.isContentEditable) && isNaN(parseInt(node.getAttribute("tabindex"), 10))) return 0;
    }
    return node.tabIndex;
};
var sortOrderedTabbables = function sortOrderedTabbables2(a, b) {
    return a.tabIndex === b.tabIndex ? a.documentOrder - b.documentOrder : a.tabIndex - b.tabIndex;
};
var isInput = function isInput2(node) {
    return node.tagName === "INPUT";
};
var isHiddenInput = function isHiddenInput2(node) {
    return isInput(node) && node.type === "hidden";
};
var isDetailsWithSummary = function isDetailsWithSummary2(node) {
    var r = node.tagName === "DETAILS" && Array.prototype.slice.apply(node.children).some(function(child) {
        return child.tagName === "SUMMARY";
    });
    return r;
};
var getCheckedRadio = function getCheckedRadio2(nodes, form) {
    for(var i = 0; i < nodes.length; i++){
        if (nodes[i].checked && nodes[i].form === form) return nodes[i];
    }
};
var isTabbableRadio = function isTabbableRadio2(node) {
    if (!node.name) return true;
    var radioScope = node.form || getRootNode(node);
    var queryRadios = function queryRadios2(name) {
        return radioScope.querySelectorAll('input[type="radio"][name="' + name + '"]');
    };
    var radioSet;
    if (typeof window !== "undefined" && typeof window.CSS !== "undefined" && typeof window.CSS.escape === "function") radioSet = queryRadios(window.CSS.escape(node.name));
    else try {
        radioSet = queryRadios(node.name);
    } catch (err) {
        console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", err.message);
        return false;
    }
    var checked = getCheckedRadio(radioSet, node.form);
    return !checked || checked === node;
};
var isRadio = function isRadio2(node) {
    return isInput(node) && node.type === "radio";
};
var isNonTabbableRadio = function isNonTabbableRadio2(node) {
    return isRadio(node) && !isTabbableRadio(node);
};
var isZeroArea = function isZeroArea2(node) {
    var _node$getBoundingClie = node.getBoundingClientRect(), width = _node$getBoundingClie.width, height = _node$getBoundingClie.height;
    return width === 0 && height === 0;
};
var isHidden = function isHidden2(node, _ref) {
    var displayCheck = _ref.displayCheck, getShadowRoot = _ref.getShadowRoot;
    if (getComputedStyle(node).visibility === "hidden") return true;
    var isDirectSummary = matches.call(node, "details>summary:first-of-type");
    var nodeUnderDetails = isDirectSummary ? node.parentElement : node;
    if (matches.call(nodeUnderDetails, "details:not([open]) *")) return true;
    var nodeRootHost = getRootNode(node).host;
    var nodeIsAttached = (nodeRootHost === null || nodeRootHost === void 0 ? void 0 : nodeRootHost.ownerDocument.contains(nodeRootHost)) || node.ownerDocument.contains(node);
    if (!displayCheck || displayCheck === "full") {
        if (typeof getShadowRoot === "function") {
            var originalNode = node;
            while(node){
                var parentElement = node.parentElement;
                var rootNode = getRootNode(node);
                if (parentElement && !parentElement.shadowRoot && getShadowRoot(parentElement) === true) return isZeroArea(node);
                else if (node.assignedSlot) node = node.assignedSlot;
                else if (!parentElement && rootNode !== node.ownerDocument) node = rootNode.host;
                else node = parentElement;
            }
            node = originalNode;
        }
        if (nodeIsAttached) return !node.getClientRects().length;
    } else if (displayCheck === "non-zero-area") return isZeroArea(node);
    return false;
};
var isDisabledFromFieldset = function isDisabledFromFieldset2(node) {
    if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(node.tagName)) {
        var parentNode = node.parentElement;
        while(parentNode){
            if (parentNode.tagName === "FIELDSET" && parentNode.disabled) {
                for(var i = 0; i < parentNode.children.length; i++){
                    var child = parentNode.children.item(i);
                    if (child.tagName === "LEGEND") return matches.call(parentNode, "fieldset[disabled] *") ? true : !child.contains(node);
                }
                return true;
            }
            parentNode = parentNode.parentElement;
        }
    }
    return false;
};
var isNodeMatchingSelectorFocusable = function isNodeMatchingSelectorFocusable2(options, node) {
    if (node.disabled || isHiddenInput(node) || isHidden(node, options) || // For a details element with a summary, the summary element gets the focus
    isDetailsWithSummary(node) || isDisabledFromFieldset(node)) return false;
    return true;
};
var isNodeMatchingSelectorTabbable = function isNodeMatchingSelectorTabbable2(options, node) {
    if (isNonTabbableRadio(node) || getTabindex(node) < 0 || !isNodeMatchingSelectorFocusable(options, node)) return false;
    return true;
};
var isValidShadowRootTabbable = function isValidShadowRootTabbable2(shadowHostNode) {
    var tabIndex = parseInt(shadowHostNode.getAttribute("tabindex"), 10);
    if (isNaN(tabIndex) || tabIndex >= 0) return true;
    return false;
};
var sortByOrder = function sortByOrder2(candidates) {
    var regularTabbables = [];
    var orderedTabbables = [];
    candidates.forEach(function(item, i) {
        var isScope = !!item.scope;
        var element = isScope ? item.scope : item;
        var candidateTabindex = getTabindex(element, isScope);
        var elements = isScope ? sortByOrder2(item.candidates) : element;
        if (candidateTabindex === 0) isScope ? regularTabbables.push.apply(regularTabbables, elements) : regularTabbables.push(element);
        else orderedTabbables.push({
            documentOrder: i,
            tabIndex: candidateTabindex,
            item,
            isScope,
            content: elements
        });
    });
    return orderedTabbables.sort(sortOrderedTabbables).reduce(function(acc, sortable) {
        sortable.isScope ? acc.push.apply(acc, sortable.content) : acc.push(sortable.content);
        return acc;
    }, []).concat(regularTabbables);
};
var tabbable = function tabbable2(el, options) {
    options = options || {};
    var candidates;
    if (options.getShadowRoot) candidates = getCandidatesIteratively([
        el
    ], options.includeContainer, {
        filter: isNodeMatchingSelectorTabbable.bind(null, options),
        flatten: false,
        getShadowRoot: options.getShadowRoot,
        shadowRootFilter: isValidShadowRootTabbable
    });
    else candidates = getCandidates(el, options.includeContainer, isNodeMatchingSelectorTabbable.bind(null, options));
    return sortByOrder(candidates);
};
var focusable = function focusable2(el, options) {
    options = options || {};
    var candidates;
    if (options.getShadowRoot) candidates = getCandidatesIteratively([
        el
    ], options.includeContainer, {
        filter: isNodeMatchingSelectorFocusable.bind(null, options),
        flatten: true,
        getShadowRoot: options.getShadowRoot
    });
    else candidates = getCandidates(el, options.includeContainer, isNodeMatchingSelectorFocusable.bind(null, options));
    return candidates;
};
var isTabbable = function isTabbable2(node, options) {
    options = options || {};
    if (!node) throw new Error("No node provided");
    if (matches.call(node, candidateSelector) === false) return false;
    return isNodeMatchingSelectorTabbable(options, node);
};
var focusableCandidateSelector = /* @__PURE__ */ candidateSelectors.concat("iframe").join(",");
var isFocusable = function isFocusable2(node, options) {
    options = options || {};
    if (!node) throw new Error("No node provided");
    if (matches.call(node, focusableCandidateSelector) === false) return false;
    return isNodeMatchingSelectorFocusable(options, node);
};
// node_modules/focus-trap/dist/focus-trap.esm.js
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread2(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
var activeFocusTraps = function() {
    var trapQueue = [];
    return {
        activateTrap: function activateTrap(trap) {
            if (trapQueue.length > 0) {
                var activeTrap = trapQueue[trapQueue.length - 1];
                if (activeTrap !== trap) activeTrap.pause();
            }
            var trapIndex = trapQueue.indexOf(trap);
            if (trapIndex === -1) trapQueue.push(trap);
            else {
                trapQueue.splice(trapIndex, 1);
                trapQueue.push(trap);
            }
        },
        deactivateTrap: function deactivateTrap(trap) {
            var trapIndex = trapQueue.indexOf(trap);
            if (trapIndex !== -1) trapQueue.splice(trapIndex, 1);
            if (trapQueue.length > 0) trapQueue[trapQueue.length - 1].unpause();
        }
    };
}();
var isSelectableInput = function isSelectableInput2(node) {
    return node.tagName && node.tagName.toLowerCase() === "input" && typeof node.select === "function";
};
var isEscapeEvent = function isEscapeEvent2(e) {
    return e.key === "Escape" || e.key === "Esc" || e.keyCode === 27;
};
var isTabEvent = function isTabEvent2(e) {
    return e.key === "Tab" || e.keyCode === 9;
};
var delay = function delay2(fn) {
    return setTimeout(fn, 0);
};
var findIndex = function findIndex2(arr, fn) {
    var idx = -1;
    arr.every(function(value, i) {
        if (fn(value)) {
            idx = i;
            return false;
        }
        return true;
    });
    return idx;
};
var valueOrHandler = function valueOrHandler2(value) {
    for(var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++)params[_key - 1] = arguments[_key];
    return typeof value === "function" ? value.apply(void 0, params) : value;
};
var getActualTarget = function getActualTarget2(event) {
    return event.target.shadowRoot && typeof event.composedPath === "function" ? event.composedPath()[0] : event.target;
};
var createFocusTrap = function createFocusTrap2(elements, userOptions) {
    var doc = (userOptions === null || userOptions === void 0 ? void 0 : userOptions.document) || document;
    var config = _objectSpread2({
        returnFocusOnDeactivate: true,
        escapeDeactivates: true,
        delayInitialFocus: true
    }, userOptions);
    var state = {
        // containers given to createFocusTrap()
        // @type {Array<HTMLElement>}
        containers: [],
        // list of objects identifying tabbable nodes in `containers` in the trap
        // NOTE: it's possible that a group has no tabbable nodes if nodes get removed while the trap
        //  is active, but the trap should never get to a state where there isn't at least one group
        //  with at least one tabbable node in it (that would lead to an error condition that would
        //  result in an error being thrown)
        // @type {Array<{
        //   container: HTMLElement,
        //   tabbableNodes: Array<HTMLElement>, // empty if none
        //   focusableNodes: Array<HTMLElement>, // empty if none
        //   firstTabbableNode: HTMLElement|null,
        //   lastTabbableNode: HTMLElement|null,
        //   nextTabbableNode: (node: HTMLElement, forward: boolean) => HTMLElement|undefined
        // }>}
        containerGroups: [],
        // same order/length as `containers` list
        // references to objects in `containerGroups`, but only those that actually have
        //  tabbable nodes in them
        // NOTE: same order as `containers` and `containerGroups`, but __not necessarily__
        //  the same length
        tabbableGroups: [],
        nodeFocusedBeforeActivation: null,
        mostRecentlyFocusedNode: null,
        active: false,
        paused: false,
        // timer ID for when delayInitialFocus is true and initial focus in this trap
        //  has been delayed during activation
        delayInitialFocusTimer: void 0
    };
    var trap;
    var getOption = function getOption2(configOverrideOptions, optionName, configOptionName) {
        return configOverrideOptions && configOverrideOptions[optionName] !== void 0 ? configOverrideOptions[optionName] : config[configOptionName || optionName];
    };
    var findContainerIndex = function findContainerIndex2(element) {
        return state.containerGroups.findIndex(function(_ref) {
            var container = _ref.container, tabbableNodes = _ref.tabbableNodes;
            return container.contains(element) || // fall back to explicit tabbable search which will take into consideration any
            //  web components if the `tabbableOptions.getShadowRoot` option was used for
            //  the trap, enabling shadow DOM support in tabbable (`Node.contains()` doesn't
            //  look inside web components even if open)
            tabbableNodes.find(function(node) {
                return node === element;
            });
        });
    };
    var getNodeForOption = function getNodeForOption2(optionName) {
        var optionValue = config[optionName];
        if (typeof optionValue === "function") {
            for(var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++)params[_key2 - 1] = arguments[_key2];
            optionValue = optionValue.apply(void 0, params);
        }
        if (optionValue === true) optionValue = void 0;
        if (!optionValue) {
            if (optionValue === void 0 || optionValue === false) return optionValue;
            throw new Error("`".concat(optionName, "` was specified but was not a node, or did not return a node"));
        }
        var node = optionValue;
        if (typeof optionValue === "string") {
            node = doc.querySelector(optionValue);
            if (!node) throw new Error("`".concat(optionName, "` as selector refers to no known node"));
        }
        return node;
    };
    var getInitialFocusNode = function getInitialFocusNode2() {
        var node = getNodeForOption("initialFocus");
        if (node === false) return false;
        if (node === void 0) {
            if (findContainerIndex(doc.activeElement) >= 0) node = doc.activeElement;
            else {
                var firstTabbableGroup = state.tabbableGroups[0];
                var firstTabbableNode = firstTabbableGroup && firstTabbableGroup.firstTabbableNode;
                node = firstTabbableNode || getNodeForOption("fallbackFocus");
            }
        }
        if (!node) throw new Error("Your focus-trap needs to have at least one focusable element");
        return node;
    };
    var updateTabbableNodes = function updateTabbableNodes2() {
        state.containerGroups = state.containers.map(function(container) {
            var tabbableNodes = tabbable(container, config.tabbableOptions);
            var focusableNodes = focusable(container, config.tabbableOptions);
            return {
                container,
                tabbableNodes,
                focusableNodes,
                firstTabbableNode: tabbableNodes.length > 0 ? tabbableNodes[0] : null,
                lastTabbableNode: tabbableNodes.length > 0 ? tabbableNodes[tabbableNodes.length - 1] : null,
                /**
         * Finds the __tabbable__ node that follows the given node in the specified direction,
         *  in this container, if any.
         * @param {HTMLElement} node
         * @param {boolean} [forward] True if going in forward tab order; false if going
         *  in reverse.
         * @returns {HTMLElement|undefined} The next tabbable node, if any.
         */ nextTabbableNode: function nextTabbableNode(node) {
                    var forward = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
                    var nodeIdx = focusableNodes.findIndex(function(n) {
                        return n === node;
                    });
                    if (nodeIdx < 0) return void 0;
                    if (forward) return focusableNodes.slice(nodeIdx + 1).find(function(n) {
                        return isTabbable(n, config.tabbableOptions);
                    });
                    return focusableNodes.slice(0, nodeIdx).reverse().find(function(n) {
                        return isTabbable(n, config.tabbableOptions);
                    });
                }
            };
        });
        state.tabbableGroups = state.containerGroups.filter(function(group) {
            return group.tabbableNodes.length > 0;
        });
        if (state.tabbableGroups.length <= 0 && !getNodeForOption("fallbackFocus")) throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");
    };
    var tryFocus = function tryFocus2(node) {
        if (node === false) return;
        if (node === doc.activeElement) return;
        if (!node || !node.focus) {
            tryFocus2(getInitialFocusNode());
            return;
        }
        node.focus({
            preventScroll: !!config.preventScroll
        });
        state.mostRecentlyFocusedNode = node;
        if (isSelectableInput(node)) node.select();
    };
    var getReturnFocusNode = function getReturnFocusNode2(previousActiveElement) {
        var node = getNodeForOption("setReturnFocus", previousActiveElement);
        return node ? node : node === false ? false : previousActiveElement;
    };
    var checkPointerDown = function checkPointerDown2(e) {
        var target = getActualTarget(e);
        if (findContainerIndex(target) >= 0) return;
        if (valueOrHandler(config.clickOutsideDeactivates, e)) {
            trap.deactivate({
                // if, on deactivation, we should return focus to the node originally-focused
                //  when the trap was activated (or the configured `setReturnFocus` node),
                //  then assume it's also OK to return focus to the outside node that was
                //  just clicked, causing deactivation, as long as that node is focusable;
                //  if it isn't focusable, then return focus to the original node focused
                //  on activation (or the configured `setReturnFocus` node)
                // NOTE: by setting `returnFocus: false`, deactivate() will do nothing,
                //  which will result in the outside click setting focus to the node
                //  that was clicked, whether it's focusable or not; by setting
                //  `returnFocus: true`, we'll attempt to re-focus the node originally-focused
                //  on activation (or the configured `setReturnFocus` node)
                returnFocus: config.returnFocusOnDeactivate && !isFocusable(target, config.tabbableOptions)
            });
            return;
        }
        if (valueOrHandler(config.allowOutsideClick, e)) return;
        e.preventDefault();
    };
    var checkFocusIn = function checkFocusIn2(e) {
        var target = getActualTarget(e);
        var targetContained = findContainerIndex(target) >= 0;
        if (targetContained || target instanceof Document) {
            if (targetContained) state.mostRecentlyFocusedNode = target;
        } else {
            e.stopImmediatePropagation();
            tryFocus(state.mostRecentlyFocusedNode || getInitialFocusNode());
        }
    };
    var checkTab = function checkTab2(e) {
        var target = getActualTarget(e);
        updateTabbableNodes();
        var destinationNode = null;
        if (state.tabbableGroups.length > 0) {
            var containerIndex = findContainerIndex(target);
            var containerGroup = containerIndex >= 0 ? state.containerGroups[containerIndex] : void 0;
            if (containerIndex < 0) {
                if (e.shiftKey) destinationNode = state.tabbableGroups[state.tabbableGroups.length - 1].lastTabbableNode;
                else destinationNode = state.tabbableGroups[0].firstTabbableNode;
            } else if (e.shiftKey) {
                var startOfGroupIndex = findIndex(state.tabbableGroups, function(_ref2) {
                    var firstTabbableNode = _ref2.firstTabbableNode;
                    return target === firstTabbableNode;
                });
                if (startOfGroupIndex < 0 && (containerGroup.container === target || isFocusable(target, config.tabbableOptions) && !isTabbable(target, config.tabbableOptions) && !containerGroup.nextTabbableNode(target, false))) startOfGroupIndex = containerIndex;
                if (startOfGroupIndex >= 0) {
                    var destinationGroupIndex = startOfGroupIndex === 0 ? state.tabbableGroups.length - 1 : startOfGroupIndex - 1;
                    var destinationGroup = state.tabbableGroups[destinationGroupIndex];
                    destinationNode = destinationGroup.lastTabbableNode;
                }
            } else {
                var lastOfGroupIndex = findIndex(state.tabbableGroups, function(_ref3) {
                    var lastTabbableNode = _ref3.lastTabbableNode;
                    return target === lastTabbableNode;
                });
                if (lastOfGroupIndex < 0 && (containerGroup.container === target || isFocusable(target, config.tabbableOptions) && !isTabbable(target, config.tabbableOptions) && !containerGroup.nextTabbableNode(target))) lastOfGroupIndex = containerIndex;
                if (lastOfGroupIndex >= 0) {
                    var _destinationGroupIndex = lastOfGroupIndex === state.tabbableGroups.length - 1 ? 0 : lastOfGroupIndex + 1;
                    var _destinationGroup = state.tabbableGroups[_destinationGroupIndex];
                    destinationNode = _destinationGroup.firstTabbableNode;
                }
            }
        } else destinationNode = getNodeForOption("fallbackFocus");
        if (destinationNode) {
            e.preventDefault();
            tryFocus(destinationNode);
        }
    };
    var checkKey = function checkKey2(e) {
        if (isEscapeEvent(e) && valueOrHandler(config.escapeDeactivates, e) !== false) {
            e.preventDefault();
            trap.deactivate();
            return;
        }
        if (isTabEvent(e)) {
            checkTab(e);
            return;
        }
    };
    var checkClick = function checkClick2(e) {
        var target = getActualTarget(e);
        if (findContainerIndex(target) >= 0) return;
        if (valueOrHandler(config.clickOutsideDeactivates, e)) return;
        if (valueOrHandler(config.allowOutsideClick, e)) return;
        e.preventDefault();
        e.stopImmediatePropagation();
    };
    var addListeners = function addListeners2() {
        if (!state.active) return;
        activeFocusTraps.activateTrap(trap);
        state.delayInitialFocusTimer = config.delayInitialFocus ? delay(function() {
            tryFocus(getInitialFocusNode());
        }) : tryFocus(getInitialFocusNode());
        doc.addEventListener("focusin", checkFocusIn, true);
        doc.addEventListener("mousedown", checkPointerDown, {
            capture: true,
            passive: false
        });
        doc.addEventListener("touchstart", checkPointerDown, {
            capture: true,
            passive: false
        });
        doc.addEventListener("click", checkClick, {
            capture: true,
            passive: false
        });
        doc.addEventListener("keydown", checkKey, {
            capture: true,
            passive: false
        });
        return trap;
    };
    var removeListeners = function removeListeners2() {
        if (!state.active) return;
        doc.removeEventListener("focusin", checkFocusIn, true);
        doc.removeEventListener("mousedown", checkPointerDown, true);
        doc.removeEventListener("touchstart", checkPointerDown, true);
        doc.removeEventListener("click", checkClick, true);
        doc.removeEventListener("keydown", checkKey, true);
        return trap;
    };
    trap = {
        get active () {
            return state.active;
        },
        get paused () {
            return state.paused;
        },
        activate: function activate(activateOptions) {
            if (state.active) return this;
            var onActivate = getOption(activateOptions, "onActivate");
            var onPostActivate = getOption(activateOptions, "onPostActivate");
            var checkCanFocusTrap = getOption(activateOptions, "checkCanFocusTrap");
            if (!checkCanFocusTrap) updateTabbableNodes();
            state.active = true;
            state.paused = false;
            state.nodeFocusedBeforeActivation = doc.activeElement;
            if (onActivate) onActivate();
            var finishActivation = function finishActivation2() {
                if (checkCanFocusTrap) updateTabbableNodes();
                addListeners();
                if (onPostActivate) onPostActivate();
            };
            if (checkCanFocusTrap) {
                checkCanFocusTrap(state.containers.concat()).then(finishActivation, finishActivation);
                return this;
            }
            finishActivation();
            return this;
        },
        deactivate: function deactivate(deactivateOptions) {
            if (!state.active) return this;
            var options = _objectSpread2({
                onDeactivate: config.onDeactivate,
                onPostDeactivate: config.onPostDeactivate,
                checkCanReturnFocus: config.checkCanReturnFocus
            }, deactivateOptions);
            clearTimeout(state.delayInitialFocusTimer);
            state.delayInitialFocusTimer = void 0;
            removeListeners();
            state.active = false;
            state.paused = false;
            activeFocusTraps.deactivateTrap(trap);
            var onDeactivate = getOption(options, "onDeactivate");
            var onPostDeactivate = getOption(options, "onPostDeactivate");
            var checkCanReturnFocus = getOption(options, "checkCanReturnFocus");
            var returnFocus = getOption(options, "returnFocus", "returnFocusOnDeactivate");
            if (onDeactivate) onDeactivate();
            var finishDeactivation = function finishDeactivation2() {
                delay(function() {
                    if (returnFocus) tryFocus(getReturnFocusNode(state.nodeFocusedBeforeActivation));
                    if (onPostDeactivate) onPostDeactivate();
                });
            };
            if (returnFocus && checkCanReturnFocus) {
                checkCanReturnFocus(getReturnFocusNode(state.nodeFocusedBeforeActivation)).then(finishDeactivation, finishDeactivation);
                return this;
            }
            finishDeactivation();
            return this;
        },
        pause: function pause() {
            if (state.paused || !state.active) return this;
            state.paused = true;
            removeListeners();
            return this;
        },
        unpause: function unpause() {
            if (!state.paused || !state.active) return this;
            state.paused = false;
            updateTabbableNodes();
            addListeners();
            return this;
        },
        updateContainerElements: function updateContainerElements(containerElements) {
            var elementsAsArray = [].concat(containerElements).filter(Boolean);
            state.containers = elementsAsArray.map(function(element) {
                return typeof element === "string" ? doc.querySelector(element) : element;
            });
            if (state.active) updateTabbableNodes();
            return this;
        }
    };
    trap.updateContainerElements(elements);
    return trap;
};
// packages/focus/src/index.js
function src_default(Alpine) {
    let lastFocused;
    let currentFocused;
    window.addEventListener("focusin", ()=>{
        lastFocused = currentFocused;
        currentFocused = document.activeElement;
    });
    Alpine.magic("focus", (el)=>{
        let within = el;
        return {
            __noscroll: false,
            __wrapAround: false,
            within (el2) {
                within = el2;
                return this;
            },
            withoutScrolling () {
                this.__noscroll = true;
                return this;
            },
            noscroll () {
                this.__noscroll = true;
                return this;
            },
            withWrapAround () {
                this.__wrapAround = true;
                return this;
            },
            wrap () {
                return this.withWrapAround();
            },
            focusable (el2) {
                return isFocusable(el2);
            },
            previouslyFocused () {
                return lastFocused;
            },
            lastFocused () {
                return lastFocused;
            },
            focused () {
                return currentFocused;
            },
            focusables () {
                if (Array.isArray(within)) return within;
                return focusable(within, {
                    displayCheck: "none"
                });
            },
            all () {
                return this.focusables();
            },
            isFirst (el2) {
                let els = this.all();
                return els[0] && els[0].isSameNode(el2);
            },
            isLast (el2) {
                let els = this.all();
                return els.length && els.slice(-1)[0].isSameNode(el2);
            },
            getFirst () {
                return this.all()[0];
            },
            getLast () {
                return this.all().slice(-1)[0];
            },
            getNext () {
                let list = this.all();
                let current = document.activeElement;
                if (list.indexOf(current) === -1) return;
                if (this.__wrapAround && list.indexOf(current) === list.length - 1) return list[0];
                return list[list.indexOf(current) + 1];
            },
            getPrevious () {
                let list = this.all();
                let current = document.activeElement;
                if (list.indexOf(current) === -1) return;
                if (this.__wrapAround && list.indexOf(current) === 0) return list.slice(-1)[0];
                return list[list.indexOf(current) - 1];
            },
            first () {
                this.focus(this.getFirst());
            },
            last () {
                this.focus(this.getLast());
            },
            next () {
                this.focus(this.getNext());
            },
            previous () {
                this.focus(this.getPrevious());
            },
            prev () {
                return this.previous();
            },
            focus (el2) {
                if (!el2) return;
                setTimeout(()=>{
                    if (!el2.hasAttribute("tabindex")) el2.setAttribute("tabindex", "0");
                    el2.focus({
                        preventScroll: this.__noscroll
                    });
                });
            }
        };
    });
    Alpine.directive("trap", Alpine.skipDuringClone((el, { expression, modifiers }, { effect, evaluateLater, cleanup })=>{
        let evaluator = evaluateLater(expression);
        let oldValue = false;
        let options = {
            escapeDeactivates: false,
            allowOutsideClick: true,
            fallbackFocus: ()=>el
        };
        let undoInert = ()=>{};
        if (modifiers.includes("noautofocus")) options.initialFocus = false;
        else {
            let autofocusEl = el.querySelector("[autofocus]");
            if (autofocusEl) options.initialFocus = autofocusEl;
        }
        if (modifiers.includes("inert")) options.onPostActivate = ()=>{
            Alpine.nextTick(()=>{
                undoInert = setInert(el);
            });
        };
        let trap = createFocusTrap(el, options);
        let undoDisableScrolling = ()=>{};
        const releaseFocus = ()=>{
            undoInert();
            undoInert = ()=>{};
            undoDisableScrolling();
            undoDisableScrolling = ()=>{};
            trap.deactivate({
                returnFocus: !modifiers.includes("noreturn")
            });
        };
        effect(()=>evaluator((value)=>{
                if (oldValue === value) return;
                if (value && !oldValue) {
                    if (modifiers.includes("noscroll")) undoDisableScrolling = disableScrolling();
                    setTimeout(()=>{
                        trap.activate();
                    }, 15);
                }
                if (!value && oldValue) releaseFocus();
                oldValue = !!value;
            }));
        cleanup(releaseFocus);
    }, // When cloning, we only want to add aria-hidden attributes to the
    // DOM and not try to actually trap, as trapping can mess with the
    // live DOM and isn't just isolated to the cloned DOM.
    (el, { expression, modifiers }, { evaluate })=>{
        if (modifiers.includes("inert") && evaluate(expression)) setInert(el);
    }));
}
function setInert(el) {
    let undos = [];
    crawlSiblingsUp(el, (sibling)=>{
        let cache = sibling.hasAttribute("aria-hidden");
        sibling.setAttribute("aria-hidden", "true");
        undos.push(()=>cache || sibling.removeAttribute("aria-hidden"));
    });
    return ()=>{
        while(undos.length)undos.pop()();
    };
}
function crawlSiblingsUp(el, callback) {
    if (el.isSameNode(document.body) || !el.parentNode) return;
    Array.from(el.parentNode.children).forEach((sibling)=>{
        if (sibling.isSameNode(el)) crawlSiblingsUp(el.parentNode, callback);
        else callback(sibling);
    });
}
function disableScrolling() {
    let overflow = document.documentElement.style.overflow;
    let paddingRight = document.documentElement.style.paddingRight;
    let scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.documentElement.style.overflow = "hidden";
    document.documentElement.style.paddingRight = `${scrollbarWidth}px`;
    return ()=>{
        document.documentElement.style.overflow = overflow;
        document.documentElement.style.paddingRight = paddingRight;
    };
}
// packages/focus/builds/module.js
var module_default = src_default;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"44R1B":[function(require,module,exports,__globalThis) {
/*! License details at fancyapps.com/license */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Fancybox", ()=>(0, _fancyboxJs.Fancybox));
parcelHelpers.export(exports, "FancyboxState", ()=>(0, _fancyboxJs.FancyboxState));
parcelHelpers.export(exports, "PANZOOM_DEFAULT_POS", ()=>(0, _panzoomJs.PANZOOM_DEFAULT_POS));
parcelHelpers.export(exports, "Panzoom", ()=>(0, _panzoomJs.Panzoom));
parcelHelpers.export(exports, "PanzoomAction", ()=>(0, _panzoomJs.PanzoomAction));
parcelHelpers.export(exports, "PanzoomZoomLevel", ()=>(0, _panzoomJs.PanzoomZoomLevel));
parcelHelpers.export(exports, "Carousel", ()=>(0, _carouselJs.Carousel));
parcelHelpers.export(exports, "Zoomable", ()=>(0, _carouselZoomableJs.Zoomable));
parcelHelpers.export(exports, "Sync", ()=>(0, _carouselSyncJs.Sync));
parcelHelpers.export(exports, "Lazyload", ()=>(0, _carouselLazyloadJs.Lazyload));
parcelHelpers.export(exports, "Arrows", ()=>(0, _carouselArrowsJs.Arrows));
parcelHelpers.export(exports, "Toolbar", ()=>(0, _carouselToolbarJs.Toolbar));
parcelHelpers.export(exports, "ToolbarColumn", ()=>(0, _carouselToolbarJs.ToolbarColumn));
parcelHelpers.export(exports, "Autoplay", ()=>(0, _carouselAutoplayJs.Autoplay));
parcelHelpers.export(exports, "Thumbs", ()=>(0, _carouselThumbsJs.Thumbs));
parcelHelpers.export(exports, "Html", ()=>(0, _carouselHtmlJs.Html));
parcelHelpers.export(exports, "Video", ()=>(0, _carouselVideoJs.Video));
parcelHelpers.export(exports, "Fullscreen", ()=>(0, _carouselFullscreenJs.Fullscreen));
var _fancyboxJs = require("./fancybox.js");
var _panzoomJs = require("../panzoom/panzoom.js");
var _carouselJs = require("../carousel/carousel.js");
var _carouselZoomableJs = require("../carousel/carousel.zoomable.js");
var _carouselSyncJs = require("../carousel/carousel.sync.js");
var _carouselLazyloadJs = require("../carousel/carousel.lazyload.js");
var _carouselArrowsJs = require("../carousel/carousel.arrows.js");
var _carouselToolbarJs = require("../carousel/carousel.toolbar.js");
var _carouselAutoplayJs = require("../carousel/carousel.autoplay.js");
var _carouselThumbsJs = require("../carousel/carousel.thumbs.js");
var _carouselHtmlJs = require("../carousel/carousel.html.js");
var _carouselVideoJs = require("../carousel/carousel.video.js");
var _carouselFullscreenJs = require("../carousel/carousel.fullscreen.js");

},{"./fancybox.js":"aDVzd","../panzoom/panzoom.js":"fzhNf","../carousel/carousel.js":"aEcLD","../carousel/carousel.zoomable.js":"cvQyE","../carousel/carousel.sync.js":"aMNI3","../carousel/carousel.lazyload.js":"lIfuM","../carousel/carousel.arrows.js":"4gaNo","../carousel/carousel.toolbar.js":"1mbIc","../carousel/carousel.autoplay.js":"f4AIL","../carousel/carousel.thumbs.js":"i9Umc","../carousel/carousel.html.js":"fvWRD","../carousel/carousel.video.js":"kkH5x","../carousel/carousel.fullscreen.js":"6XULk","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aDVzd":[function(require,module,exports,__globalThis) {
/*! License details at fancyapps.com/license */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Panzoom", ()=>(0, _panzoomJs.Panzoom));
parcelHelpers.export(exports, "PanzoomAction", ()=>(0, _panzoomJs.PanzoomAction));
parcelHelpers.export(exports, "PanzoomZoomLevel", ()=>(0, _panzoomJs.PanzoomZoomLevel));
parcelHelpers.export(exports, "ToolbarColumn", ()=>(0, _carouselToolbarJs.ToolbarColumn));
parcelHelpers.export(exports, "Arrows", ()=>(0, _carouselArrowsJs.Arrows));
parcelHelpers.export(exports, "Autoplay", ()=>(0, _carouselAutoplayJs.Autoplay));
parcelHelpers.export(exports, "Carousel", ()=>(0, _carouselJs.Carousel));
parcelHelpers.export(exports, "Fancybox", ()=>H);
parcelHelpers.export(exports, "FancyboxState", ()=>k);
parcelHelpers.export(exports, "Fullscreen", ()=>(0, _carouselFullscreenJs.Fullscreen));
parcelHelpers.export(exports, "Html", ()=>(0, _carouselHtmlJs.Html));
parcelHelpers.export(exports, "Lazyload", ()=>(0, _carouselLazyloadJs.Lazyload));
parcelHelpers.export(exports, "PANZOOM_DEFAULT_POS", ()=>(0, _panzoomJs.PANZOOM_DEFAULT_POS));
parcelHelpers.export(exports, "Sync", ()=>(0, _carouselSyncJs.Sync));
parcelHelpers.export(exports, "Thumbs", ()=>(0, _carouselThumbsJs.Thumbs));
parcelHelpers.export(exports, "Toolbar", ()=>(0, _carouselToolbarJs.Toolbar));
parcelHelpers.export(exports, "Video", ()=>(0, _carouselVideoJs.Video));
parcelHelpers.export(exports, "Zoomable", ()=>(0, _carouselZoomableJs.Zoomable));
var _isPlainObjectJs = require("../utils/isPlainObject.js");
var _isStringJs = require("../utils/isString.js");
var _isNodeJs = require("../utils/isNode.js");
var _strToHtmlJs = require("../utils/strToHtml.js");
var _getScrollableParentJs = require("../utils/getScrollableParent.js");
var _scrollLockJs = require("../utils/scrollLock.js");
var _extendJs = require("../utils/extend.js");
var _canUseDOMJs = require("../utils/canUseDOM.js");
var _mapJs = require("../utils/map.js");
var _addClassJs = require("../utils/addClass.js");
var _panzoomJs = require("../panzoom/panzoom.js");
var _carouselJs = require("../carousel/carousel.js");
var _carouselZoomableJs = require("../carousel/carousel.zoomable.js");
var _carouselSyncJs = require("../carousel/carousel.sync.js");
var _carouselLazyloadJs = require("../carousel/carousel.lazyload.js");
var _carouselArrowsJs = require("../carousel/carousel.arrows.js");
var _carouselToolbarJs = require("../carousel/carousel.toolbar.js");
var _carouselAutoplayJs = require("../carousel/carousel.autoplay.js");
var _carouselThumbsJs = require("../carousel/carousel.thumbs.js");
var _carouselHtmlJs = require("../carousel/carousel.html.js");
var _carouselVideoJs = require("../carousel/carousel.video.js");
var _carouselFullscreenJs = require("../carousel/carousel.fullscreen.js");
var _fancyboxHashJs = require("./fancybox.hash.js");
var _tweenJs = require("../libs/tween.js");
var _enENJs = require("./l10n/en_EN.js");
var _gesturesJs = require("../libs/gestures.js");
var _removeClassJs = require("../utils/removeClass.js");
var _toggleClassJs = require("../utils/toggleClass.js");
const T = '<button class="f-button" title="{{CLOSE}}" data-fancybox-close><svg><path d="M19.286 4.714 4.714 19.286M4.714 4.714l14.572 14.572" /></svg></button>';
(0, _carouselToolbarJs.Toolbar)().add("close", {
    tpl: T
});
const A = (e)=>{
    e && e.dispatchEvent(new CustomEvent("animationend", {
        bubbles: !1,
        cancelable: !0,
        currentTarget: e
    }));
}, M = (e = null, t = "", n)=>{
    if (!e || !e.parentElement || !t) return void (n && n());
    A(e);
    const o = (i)=>{
        i.target === e && e.dataset.animationName && (e.removeEventListener("animationend", o), delete e.dataset.animationName, n && n(), e.classList.remove(t));
    };
    e.dataset.animationName = t, e.addEventListener("animationend", o), (0, _addClassJs.addClass)(e, t);
};
var k;
!function(e) {
    e[e.Init = 0] = "Init", e[e.Ready = 1] = "Ready", e[e.Closing = 2] = "Closing", e[e.Destroyed = 3] = "Destroyed";
}(k || (k = {}));
const _ = {
    ajax: null,
    backdropClick: "close",
    Carousel: {},
    closeButton: "auto",
    closeExisting: !1,
    delegateEl: void 0,
    dragToClose: !0,
    fadeEffect: !0,
    groupAll: !1,
    groupAttr: "data-fancybox",
    hideClass: "f-fadeOut",
    hideScrollbar: !0,
    id: void 0,
    idle: !1,
    keyboard: {
        Escape: "close",
        Delete: "close",
        Backspace: "close",
        PageUp: "next",
        PageDown: "prev",
        ArrowUp: "prev",
        ArrowDown: "next",
        ArrowRight: "next",
        ArrowLeft: "prev"
    },
    l10n: (0, _enENJs.en_EN),
    mainClass: "",
    mainStyle: {},
    mainTpl: '<dialog class="fancybox__dialog">\n    <div class="fancybox__container" tabindex="0" aria-label="{{MODAL}}">\n      <div class="fancybox__backdrop"></div>\n      <div class="fancybox__carousel"></div>\n    </div>\n  </dialog>',
    on: {},
    parentEl: void 0,
    placeFocusBack: !0,
    showClass: "f-zoomInUp",
    startIndex: 0,
    sync: void 0,
    theme: "dark",
    triggerEl: void 0,
    triggerEvent: void 0,
    zoomEffect: !0
}, O = new Map;
let D = 0;
const R = "with-fancybox", I = ()=>{
    let r, w, j, I, z, B = k.Init, N = Object.assign({}, _), q = -1, V = {}, F = [], W = !1, $ = !0, K = 0;
    function U(e, ...t) {
        let n = N[e];
        return n && "function" == typeof n ? n(Se, ...t) : n;
    }
    function X(e, t = []) {
        const n = U("l10n") || {};
        e = String(e).replace(/\{\{(\w+)\}\}/g, (e, t)=>n[t] || e);
        for(let n = 0; n < t.length; n++)e = e.split(t[n][0]).join(t[n][1]);
        return e = e.replace(/\{\{(.*?)\}\}/g, (e, t)=>t);
    }
    const G = new Map;
    function Y(e, ...t) {
        const n = [
            ...G.get(e) || []
        ];
        for (const [t, o] of Object.entries(N.on || {}))(t === e || t.split(" ").indexOf(e) > -1) && n.push(o);
        for (const e of n)e && "function" == typeof e && e(Se, ...t);
        "*" !== e && Y("*", e, ...t);
    }
    function Z(t = [], n = {}) {
        B !== k.Init && (Se.destroy(), B = k.Init), N = (0, _extendJs.extend)({}, _, n), q = U("id") || "fancybox-" + ++D;
        const a = O.get(q);
        if (a && a.destroy(), O.set(q, Se), Y("init"), function() {
            for (const [e, t] of Object.entries(Object.assign(Object.assign({}, H.Plugins), N.plugins || {})))if (e && !V[e] && t instanceof Function) {
                const n = t();
                n.init(Se), V[e] = n;
            }
            Y("initPlugins");
        }(), function(e = []) {
            Y("initSlides", e), F = [
                ...e
            ];
        }(t), function() {
            const t = U("parentEl") || document.body;
            if (!(t && t instanceof HTMLElement)) return;
            const n = X(U("mainTpl") || "");
            if (r = (0, _strToHtmlJs.stringToHtml)(n) || void 0, !r) return;
            if (w = r.querySelector(".fancybox__container"), !(w && w instanceof HTMLElement)) return;
            const s = U("mainClass");
            s && (0, _addClassJs.addClass)(w, s);
            const a = U("mainStyle");
            if (a && (0, _isPlainObjectJs.isPlainObject)(a)) for (const [e, t] of Object.entries(a))w.style.setProperty(e, t);
            const u = U("theme"), d = "auto" === u ? window.matchMedia("(prefers-color-scheme:light)").matches : "light" === u;
            w.setAttribute("theme", d ? "light" : "dark"), r.setAttribute("id", `${q}`), r.addEventListener("keydown", (e)=>{
                "Escape" === e.key && e.preventDefault();
            }), r.addEventListener("wheel", (e)=>{
                const t = e.target;
                let n = U("wheel", e);
                t.closest(".f-thumbs") && (n = "slide");
                const o = "slide" === n, l = [
                    -e.deltaX || 0,
                    -e.deltaY || 0,
                    -e.detail || 0
                ].reduce(function(e, t) {
                    return Math.abs(t) > Math.abs(e) ? t : e;
                }), s = Math.max(-1, Math.min(1, l)), r = Date.now();
                K && r - K < 300 ? o && e.preventDefault() : (K = r, Y("wheel", e, s), e.defaultPrevented || ("close" === n ? Le(e) : "slide" === n && I && !(0, _getScrollableParentJs.getScrollableParent)(t) && (e.preventDefault(), I[s > 0 ? "prev" : "next"]())));
            }, {
                capture: !0,
                passive: !1
            }), r.addEventListener("cancel", (e)=>{
                Le(e);
            }), t.append(r), 1 === O.size && (U("hideScrollbar") && (0, _scrollLockJs.scrollLock)(!0), document.documentElement.classList.add(R));
            r instanceof HTMLDialogElement && r.showModal();
            Y("initLayout");
        }(), function() {
            if (j = (null == r ? void 0 : r.querySelector(".fancybox__carousel")) || void 0, !j) return;
            j.fancybox = Se;
            const e = (0, _extendJs.extend)({}, {
                Autoplay: {
                    autoStart: !1,
                    pauseOnHover: !1,
                    progressbarParentEl: (e)=>{
                        const t = e.getContainer();
                        return (null == t ? void 0 : t.querySelector(".f-carousel__toolbar [data-autoplay-action]")) || t;
                    }
                },
                Fullscreen: {
                    el: w
                },
                Toolbar: {
                    absolute: !0,
                    items: {
                        counter: {
                            tpl: '<div class="f-counter"><span data-fancybox-page></span>/<span data-fancybox-pages></span></div>'
                        }
                    },
                    display: {
                        left: [
                            "counter"
                        ],
                        right: [
                            "toggleFull",
                            "autoplay",
                            "fullscreen",
                            "thumbs",
                            "close"
                        ]
                    }
                },
                Video: {
                    autoplay: !0
                },
                Thumbs: {
                    minCount: 2,
                    Carousel: {
                        classes: {
                            container: "fancybox__thumbs"
                        }
                    }
                },
                classes: {
                    container: "fancybox__carousel",
                    viewport: "fancybox__viewport",
                    slide: "fancybox__slide"
                },
                spinnerTpl: '<div class="f-spinner" data-fancybox-close></div>',
                dragFree: !1,
                slidesPerPage: 1,
                plugins: {
                    Sync: (0, _carouselSyncJs.Sync),
                    Arrows: (0, _carouselArrowsJs.Arrows),
                    Lazyload: (0, _carouselLazyloadJs.Lazyload),
                    Zoomable: (0, _carouselZoomableJs.Zoomable),
                    Html: (0, _carouselHtmlJs.Html),
                    Video: (0, _carouselVideoJs.Video),
                    Autoplay: (0, _carouselAutoplayJs.Autoplay),
                    Fullscreen: (0, _carouselFullscreenJs.Fullscreen),
                    Thumbs: (0, _carouselThumbsJs.Thumbs),
                    Toolbar: (0, _carouselToolbarJs.Toolbar)
                }
            }, U("Carousel") || {}, {
                slides: F,
                enabled: !0,
                initialPage: U("startIndex") || 0,
                l10n: U("l10n")
            });
            I = (0, _carouselJs.Carousel)(j, e), Y("initCarousel", I), I.on("*", (e, t, ...n)=>{
                Y(`Carousel.${t}`, e, ...n);
            }), I.on("attachSlideEl", Q), I.on("detachSlideEl", ee), I.on("contentReady", le), I.on("ready", oe), I.on("change", ne), I.on("settle", ie), I.on("thumbs:ready", se), I.on("thumbs:destroy", se), I.init();
        }(), r && w) {
            if (U("closeExisting")) for (const [e, t] of O.entries())e !== q && t.close();
            U("fadeEffect") ? (setTimeout(()=>{
                J();
            }, 500), (0, _addClassJs.addClass)(w, "is-revealing")) : J(), w.classList.add("is-ready"), B = k.Ready, Y("ready");
        }
    }
    function J() {
        (0, _removeClassJs.removeClass)(w, "is-revealing");
        try {
            if (document.activeElement === r) ((null == w ? void 0 : w.querySelector("[autofocus]")) || w).focus();
        } catch (e) {}
    }
    function Q(e, n) {
        var o;
        fe(n), re(), null === (o = n.el) || void 0 === o || o.addEventListener("click", te), "inline" !== n.type && "clone" !== n.type || function(e) {
            if (!I || !e || !e.el) return;
            let n = null;
            if ((0, _isStringJs.isString)(e.src)) {
                const t = e.src.split("#", 2).pop();
                n = t ? document.getElementById(t) : null;
            }
            if (n) {
                if ((0, _addClassJs.addClass)(n, "f-html"), "clone" === e.type || n.closest(".fancybox__carousel")) {
                    n = n.cloneNode(!0);
                    const t = n.dataset.animationName;
                    t && (n.classList.remove(t), delete n.dataset.animationName);
                    let o = n.getAttribute("id");
                    o = o ? `${o}--clone` : `clone-${q}-${e.index}`, n.setAttribute("id", o);
                } else if (n.parentNode) {
                    const t = document.createElement("div");
                    t.inert = !0, n.parentNode.insertBefore(t, n), e.placeholderEl = t;
                }
                e.htmlEl = n, (0, _addClassJs.addClass)(e.el, "has-html"), e.el.prepend(n), n.classList.remove("hidden"), "none" === n.style.display && (n.style.display = ""), "none" === getComputedStyle(n).getPropertyValue("display") && (n.style.display = n.dataset.display || "flex"), null == I || I.emit("contentReady", e);
            } else null == I || I.showError(e, "{{ELEMENT_NOT_FOUND}}");
        }(n), "ajax" === n.type && function(e) {
            const t = e.el;
            if (!t) return;
            if (e.htmlEl || e.xhr) return;
            null == I || I.showLoading(e), e.state = 0;
            const n = new XMLHttpRequest;
            n.onreadystatechange = function() {
                if (n.readyState === XMLHttpRequest.DONE && B === k.Ready) {
                    if (null == I || I.hideLoading(e), e.state = 1, 200 === n.status) {
                        let o = n.responseText + "", i = null, l = null;
                        if (e.filter) {
                            const t = document.createElement("div");
                            t.innerHTML = o, l = t.querySelector(e.filter + "");
                        }
                        l && l instanceof HTMLElement ? i = l : (i = document.createElement("div"), i.innerHTML = o), i.classList.add("f-html"), e.htmlEl = i, t.classList.add("has-html"), t.classList.add("has-ajax"), t.prepend(i), null == I || I.emit("contentReady", e);
                    } else null == I || I.showError(e);
                }
            };
            const o = U("ajax") || null;
            n.open(o ? "POST" : "GET", e.src + ""), n.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), n.setRequestHeader("X-Requested-With", "XMLHttpRequest"), n.send(o), e.xhr = n;
        }(n);
    }
    function ee(e, t) {
        var n;
        !function(e) {
            e.closeButtonEl && (e.closeButtonEl.remove(), e.closeButtonEl = void 0);
        }(t), null === (n = t.el) || void 0 === n || n.removeEventListener("click", te), "inline" !== t.type && "clone" !== t.type || function(e) {
            const t = e.htmlEl, n = e.placeholderEl;
            t && ("none" !== getComputedStyle(t).getPropertyValue("display") && (t.style.display = "none"), t.offsetHeight);
            n && (t && n.parentNode && n.parentNode.insertBefore(t, n), n.remove());
            e.htmlEl = void 0, e.placeholderEl = void 0;
        }(t), t.xhr && (t.xhr.abort(), t.xhr = void 0);
    }
    function te(e) {
        if (!pe()) return;
        if (B !== k.Ready) return e.preventDefault(), void e.stopPropagation();
        if (e.defaultPrevented) return;
        if (!(0, _gesturesJs.Gestures).isClickAllowed()) return;
        const t = e.composedPath()[0];
        t.closest(".fancybox__carousel") && t.classList.contains("fancybox__slide") && ae(e);
    }
    function ne() {
        $ = !1, w && I && w.classList.remove("is-revealing"), re();
        const e = U("sync");
        if (I && e) {
            const t = e.getPageIndex(I.getPageIndex()) || 0;
            e.goTo(t, {
                transition: !1
            });
        }
    }
    function oe() {
        var e;
        if (B !== k.Ready) return;
        me(ge()), function() {
            if (!U("dragToClose")) return;
            if (!I) return;
            const e = I.getViewport();
            if (!e) return;
            const t = (0, _gesturesJs.Gestures)(e).init();
            if (!t) return;
            let n = 0, o = 0, l = (0, _tweenJs.Tween)().on("step", (e)=>{
                n = e.y;
                const t = null == I ? void 0 : I.getViewport();
                if (w && t) {
                    const e = (0, _mapJs.map)(Math.abs(n), 0, .5 * t.getBoundingClientRect().height, 1, .5);
                    w.style.setProperty("--f-drag-opacity", e + ""), w.style.setProperty("--f-drag-offset", n + "px");
                }
            }).on("end", ()=>{
                if (!n) {
                    w && w.style.removeProperty("--f-opacity");
                    const e = null == I ? void 0 : I.getViewport();
                    e && (e.style.transform = "");
                }
            });
            t.on("start", function() {
                l.pause();
            }).on("panstart", (e)=>{
                var t;
                const n = e.srcEvent.target;
                n && !(0, _getScrollableParentJs.getScrollableParent)(n) && (null === (t = null == I ? void 0 : I.getViewport()) || void 0 === t || t.classList.add("is-dragging"));
            }).on("pan", function(e) {
                const t = e.srcEvent.target;
                if (t && (0, _getScrollableParentJs.getScrollableParent)(t)) return;
                (null == I ? void 0 : I.getViewport()) && "y" === e.axis && (o += e.deltaY, l.spring({
                    clamp: !0,
                    mass: 1,
                    tension: 860,
                    friction: 17,
                    restDelta: .01,
                    restSpeed: .01
                }).from({
                    y: n
                }).to({
                    y: o
                }).start());
            }).on("end", function(e) {
                l.pause(), "y" === e.axis && Math.abs(e.velocityY) > 5 && Math.abs(o) > 0 && (Le(e.srcEvent, "f-throwOut" + (e.velocityY > 0 ? "Down" : "Up")), B === k.Closing) || 0 !== o && (o = 0, l.spring({
                    clamp: !0,
                    mass: 1,
                    tension: 140,
                    friction: 25,
                    restDelta: .1,
                    restSpeed: .1,
                    maxSpeed: 1 / 0
                }).from({
                    y: n
                }).to({
                    y: o
                }).start());
            });
        }(), document.body.addEventListener("click", de), document.body.addEventListener("keydown", ue, {
            passive: !1,
            capture: !0
        }), re(), be();
        const t = U("sync");
        t && (null === (e = t.getTween()) || void 0 === e || e.start());
    }
    function ie() {
        (null == I ? void 0 : I.canGoNext()) ? be() : we();
    }
    function le(e, t) {
        fe(t), me(t);
    }
    function se() {
        var e;
        const t = null == I ? void 0 : I.getPlugins().Thumbs;
        (0, _toggleClassJs.toggleClass)(w, "has-thumbs", (null == t ? void 0 : t.isEnabled()) || !1), (0, _toggleClassJs.toggleClass)(w, "has-vertical-thumbs", (null === (e = null == t ? void 0 : t.getCarousel()) || void 0 === e ? void 0 : e.isVertical()) || !1);
    }
    function re() {
        if (w) {
            const e = (null == I ? void 0 : I.getPages()) || [], t = (null == I ? void 0 : I.getPageIndex()) || 0;
            for (const e of w.querySelectorAll("[data-fancybox-index]"))e.innerHTML = t + "";
            for (const e of w.querySelectorAll("[data-fancybox-page]"))e.innerHTML = t + 1 + "";
            for (const t of w.querySelectorAll("[data-fancybox-pages]"))t.innerHTML = e.length + "";
        }
    }
    function ae(e) {
        if (!!e.composedPath()[0].closest("[data-fancybox-close]")) return void Le(e);
        if (Y("backdropClick", e), e.defaultPrevented) return;
        U("backdropClick") && Le(e);
    }
    function ce() {
        xe();
    }
    function ue(e) {
        if (!pe()) return;
        if (B !== k.Ready) return;
        const t = e.key, o = U("keyboard");
        if (!o) return;
        if (e.ctrlKey || e.altKey || e.shiftKey) return;
        const i = e.composedPath()[0];
        if (!(0, _isNodeJs.isNode)(i)) return;
        if ("Escape" !== t && ((e)=>{
            const t = [
                "input",
                "textarea",
                "select",
                "option",
                "video",
                "iframe",
                "[contenteditable]",
                "[data-selectable]",
                "[data-draggable]"
            ].join(",");
            return e.matches(t) || e.closest(t);
        })(i)) return;
        if (Y("keydown", e), e.defaultPrevented) return;
        const l = o[t];
        if (l) switch(l){
            case "close":
                Le(e);
                break;
            case "next":
                e.preventDefault(), null == I || I.next();
                break;
            case "prev":
                e.preventDefault(), null == I || I.prev();
        }
    }
    function de(e) {
        if (!pe()) return;
        if (B !== k.Ready) return;
        if (xe(), e.defaultPrevented) return;
        const t = e.composedPath()[0], n = !!t.closest("[data-fancybox-close]"), o = t.classList.contains("fancybox__backdrop");
        (n || o) && ae(e);
    }
    function fe(e) {
        var t;
        const { el: n, htmlEl: i, closeButtonEl: l } = e;
        if (!n || !i || l) return;
        let s = U("closeButton");
        if ("auto" === s && (s = !0 !== (null === (t = null == I ? void 0 : I.getPlugins().Toolbar) || void 0 === t ? void 0 : t.isEnabled())), s) {
            const t = (0, _strToHtmlJs.stringToHtml)(X(T));
            t && (e.closeButtonEl = i.insertAdjacentElement("afterbegin", t), n.classList.add("has-close-btn"));
        }
    }
    function me(e) {
        if (!($ && I && 1 === I.getState() && e && e.index === I.getOptions().initialPage && e.el && e.el.parentElement)) return;
        if (void 0 !== e.state && 1 !== e.state) return;
        $ = !1;
        const t = e.panzoomRef, n = null == t ? void 0 : t.getTween(), o = U("zoomEffect") && n ? ye(e) : void 0;
        if (t && n && o) {
            const { x: e, y: i, scale: l } = t.getStartPosition();
            return void n.spring({
                tension: 225,
                friction: 25,
                restDelta: .001,
                restSpeed: .001,
                maxSpeed: 1 / 0
            }).from(o).to({
                x: e,
                y: i,
                scale: l
            }).start();
        }
        const i = (null == t ? void 0 : t.getContent()) || e.htmlEl;
        i && M(i, U("showClass", e));
    }
    function pe() {
        var e;
        return (null === (e = H.getInstance()) || void 0 === e ? void 0 : e.getId()) === q;
    }
    function ge() {
        var e;
        return null === (e = null == I ? void 0 : I.getPage()) || void 0 === e ? void 0 : e.slides[0];
    }
    function ve() {
        const e = ge();
        return e ? e.triggerEl || U("triggerEl") : void 0;
    }
    function ye(e) {
        var t, n;
        const o = e.thumbEl;
        if (!o || !((e)=>{
            const t = e.getBoundingClientRect(), n = e.closest("[style]"), o = null == n ? void 0 : n.parentElement;
            if (n && n.style.transform && o) {
                const e = o.getBoundingClientRect();
                if (t.left < e.left || t.left > e.left + e.width - t.width) return !1;
                if (t.top < e.top || t.top > e.top + e.height - t.height) return !1;
            }
            const i = Math.max(document.documentElement.clientHeight, window.innerHeight), l = Math.max(document.documentElement.clientWidth, window.innerWidth);
            return !(t.bottom < 0 || t.top - i >= 0 || t.right < 0 || t.left - l >= 0);
        })(o)) return;
        const i = null === (n = null === (t = e.panzoomRef) || void 0 === t ? void 0 : t.getWrapper()) || void 0 === n ? void 0 : n.getBoundingClientRect(), l = null == i ? void 0 : i.width, s = null == i ? void 0 : i.height;
        if (!l || !s) return;
        const r = o.getBoundingClientRect();
        let a = r.width, c = r.height, u = r.left, d = r.top;
        if (!r || !a || !c) return;
        if (o instanceof HTMLImageElement) {
            const e = window.getComputedStyle(o).getPropertyValue("object-fit");
            if ("contain" === e || "scale-down" === e) {
                const { width: t, height: n } = ((e, t, n, o, i = "contain")=>{
                    if ("contain" === i || e > n || t > o) {
                        const i = n / e, l = o / t, s = Math.min(i, l);
                        e *= s, t *= s;
                    }
                    return {
                        width: e,
                        height: t
                    };
                })(o.naturalWidth, o.naturalHeight, a, c, e);
                u += .5 * (a - t), d += .5 * (c - n), a = t, c = n;
            }
        }
        if (Math.abs(l / s - a / c) > .1) return;
        return {
            x: u + .5 * a - (i.left + .5 * l),
            y: d + .5 * c - (i.top + .5 * s),
            scale: a / l
        };
    }
    function he() {
        z && clearTimeout(z), z = void 0, document.removeEventListener("mousemove", ce);
    }
    function be() {
        if (W) return;
        if (z) return;
        const e = U("idle");
        e && (z = setTimeout(Ee, e));
    }
    function Ee() {
        w && (he(), (0, _addClassJs.addClass)(w, "is-idle"), document.addEventListener("mousemove", ce), W = !0);
    }
    function xe() {
        W && (we(), be());
    }
    function we() {
        he(), null == w || w.classList.remove("is-idle"), W = !1;
    }
    function Le(e, t) {
        var n, o, i, l, r, a;
        if (B === k.Closing || B === k.Destroyed) return;
        const c = new Event("shouldClose", {
            bubbles: !0,
            cancelable: !0
        });
        if (Y("shouldClose", c, e), c.defaultPrevented) return;
        if (he(), e) {
            if (e.defaultPrevented) return;
            e.cancelable && e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation();
        }
        if (B = k.Closing, I) {
            null === (n = I.getGestures()) || void 0 === n || n.destroy(), null === (o = I.getTween()) || void 0 === o || o.pause();
            const e = ge(), t = null == e ? void 0 : e.panzoomRef;
            e && t && (0, _extendJs.extend)(t.getOptions(), {
                clickAction: !1,
                wheelAction: !1,
                bounds: !1,
                minScale: 0,
                maxScale: 1 / 0
            });
            for (const e of I.getSlides())null === (l = null === (i = e.panzoomRef) || void 0 === i ? void 0 : i.getGestures()) || void 0 === l || l.destroy(), null === (a = null === (r = e.panzoomRef) || void 0 === r ? void 0 : r.getTween()) || void 0 === a || a.pause();
        }
        const u = null == I ? void 0 : I.getPlugins().fullscreen;
        u && u.inFullscreen() ? Promise.resolve(u.exit()).then(()=>{
            setTimeout(()=>{
                je(e, t);
            }, 150);
        }) : je(e, t);
    }
    function je(e, t) {
        var n, o, i, l, s;
        if (B !== k.Closing) return;
        if (Y("close", e), U("placeFocusBack")) {
            const e = ve();
            !e || (s = e.getBoundingClientRect()).bottom > 0 && s.right > 0 && s.left < (window.innerWidth || document.documentElement.clientWidth) && s.top < (window.innerHeight || document.documentElement.clientHeight) || e.scrollIntoView({
                behavior: "instant",
                block: "center",
                inline: "center"
            });
        }
        U("fadeEffect") && (null == w || w.classList.remove("is-ready"), null == w || w.classList.add("is-hiding")), null == w || w.classList.add("is-closing");
        const r = ge(), a = null == r ? void 0 : r.panzoomRef, c = null === (n = null == r ? void 0 : r.panzoomRef) || void 0 === n ? void 0 : n.getTween(), d = t || U("hideClass");
        let f = !1, m = !1;
        if (I && r && a && c) {
            let e;
            U("zoomEffect") && ((null === (i = null === (o = I.getTween()) || void 0 === o ? void 0 : o.getCurrentVelocities()) || void 0 === i ? void 0 : i.pos) || 0) < 700 && 1 === r.state && (e = ye(r)), e && (f = !0, I.on("refresh", ()=>{
                const e = ye(r);
                e && c.to(Object.assign(Object.assign({}, (0, _panzoomJs.PANZOOM_DEFAULT_POS)), e));
            }), c.easing((0, _tweenJs.Tween).Easings.EaseOut).duration(350).from(Object.assign({}, a.getTransform())).to(Object.assign(Object.assign({}, (0, _panzoomJs.PANZOOM_DEFAULT_POS)), e)).start());
        }
        const p = (null == r ? void 0 : r.htmlEl) || (null === (l = null == r ? void 0 : r.panzoomRef) || void 0 === l ? void 0 : l.getWrapper());
        p && A(p), !f && d && p && (m = !0, M(p, d, ()=>{
            Pe();
        })), f || m ? setTimeout(()=>{
            Pe();
        }, 350) : Pe();
    }
    function Pe() {
        var e, t, n, o, i, s;
        if (B === k.Destroyed) return;
        B = k.Destroyed, document.body.removeEventListener("click", de), document.body.removeEventListener("keydown", ue, {
            passive: !1,
            capture: !0
        });
        const a = ve();
        Y("destroy"), null === (t = null === (e = U("sync")) || void 0 === e ? void 0 : e.getPlugins().Autoplay) || void 0 === t || t.resume(), null === (o = null === (n = U("sync")) || void 0 === n ? void 0 : n.getPlugins().Autoscroll) || void 0 === o || o.resume(), r instanceof HTMLDialogElement && r.close(), null === (i = null == I ? void 0 : I.getContainer()) || void 0 === i || i.classList.remove("is-idle"), null == I || I.destroy();
        for (const e of Object.values(V))null == e || e.destroy();
        if (V = {}, null == r || r.remove(), r = void 0, w = void 0, I = void 0, O.delete(q), !O.size) {
            if ((0, _scrollLockJs.scrollLock)(!1), document.documentElement.classList.remove(R), U("placeFocusBack")) try {
                null == a || a.focus({
                    preventScroll: !0
                });
            } catch (e) {}
            else null === (s = document.activeElement) || void 0 === s || s.blur();
        }
    }
    const Se = {
        close: Le,
        destroy: Pe,
        getCarousel: function() {
            return I;
        },
        getContainer: function() {
            return w;
        },
        getId: function() {
            return q;
        },
        getOptions: function() {
            return N;
        },
        getPlugins: function() {
            return V;
        },
        getSlide: function() {
            return ge();
        },
        getState: function() {
            return B;
        },
        init: function(e = [], t = {}) {
            return Z(e, t), Se;
        },
        isCurrentSlide: function(e) {
            const t = ge();
            return !(!e || !t) && t.index === e.index;
        },
        isTopMost: function() {
            return pe();
        },
        off: function(e, t) {
            return G.has(e) && G.set(e, G.get(e).filter((e)=>e !== t)), Se;
        },
        on: function(e, t) {
            return G.set(e, [
                ...G.get(e) || [],
                t
            ]), Se;
        },
        toggleIdle (e) {
            (W || !0 === e) && Ee(), W && !1 !== e || we();
        }
    };
    return Se;
};
const H = {
    Plugins: {
        Hash: (0, _fancyboxHashJs.Hash)
    },
    version: "6.0.29",
    openers: new Map,
    bind: function(e, n, o) {
        if (!(0, _canUseDOMJs.canUseDOM)()) return;
        let i = document.body, l = "[data-fancybox]", s = {};
        if ((0, _isStringJs.isString)(e) ? (i = document.body, l = e, "object" == typeof n && (s = n || {})) : e instanceof Element && (i = e, (0, _isStringJs.isString)(n) && (l = n), "object" == typeof o && (s = o || {})), !(i && i instanceof Element && l)) return !1;
        const a = H.openers.get(i) || new Map;
        if (a.set(l, s), H.openers.set(i, a), 1 === a.size) {
            i.addEventListener("click", H.fromEvent);
            for (const e of Object.values(H.Plugins)){
                const t = e.setup;
                "function" == typeof t && t(H);
            }
        }
        return !0;
    },
    close: function(e = !0, ...t) {
        if (e) for (const e of O.values())e.close(...t);
        else {
            const e = H.getInstance();
            e && e.close(...t);
        }
    },
    destroy: function() {
        let e;
        for(; e = H.getInstance();)e.destroy();
        for (const e of H.openers.keys())e.removeEventListener("click", H.fromEvent);
        H.openers.clear();
    },
    fromEvent: function(e) {
        var t, n, o;
        if (e.defaultPrevented) return;
        if (e.button && 0 !== e.button) return;
        if (e.ctrlKey || e.metaKey || e.shiftKey) return;
        let i = e.composedPath()[0];
        if (i.closest(".fancybox__container.is-hiding")) return e.preventDefault(), void e.stopPropagation();
        const l = i.closest("[data-fancybox-delegate]") || void 0;
        if (l) {
            const e = l.dataset.fancyboxDelegate || "", t = document.querySelectorAll(`[data-fancybox="${e}"]`);
            i = t[parseInt(l.dataset.fancyboxIndex || "", 10) || 0] || t[0];
        }
        if (!(i && i instanceof Element)) return;
        let r, a, c = {};
        for (const [e, t] of H.openers)if (t && e.contains(i)) for (const [n, o] of t){
            let t = null;
            try {
                t = i.closest(n);
            } catch (e) {}
            t && (i = t, r = e, a = n, (0, _extendJs.extend)(c, o || {}));
        }
        if (!r || !a) return;
        e.preventDefault();
        const u = (0, _extendJs.extend)({}, _, {
            triggerEvent: e,
            triggerEl: i,
            delegateEl: l
        }, c), d = u.groupAll, f = u.groupAttr, m = f && i ? i.getAttribute(`${f}`) : "";
        let p = [];
        const g = null === (t = i.closest(".f-carousel")) || void 0 === t ? void 0 : t.carousel;
        if (g) {
            const e = [];
            for (const t of null == g ? void 0 : g.getSlides()){
                const n = t.el;
                n && (n.matches(a) ? e.push(n) : e.push(...[].slice.call(n.querySelectorAll(a))));
            }
            e.length && (p = [
                ...e
            ], null === (n = g.getPlugins().Autoplay) || void 0 === n || n.pause(), null === (o = g.getPlugins().Autoscroll) || void 0 === o || o.pause(), u.sync = g);
        } else (!i || m || d) && (p = [].slice.call(r.querySelectorAll(a)));
        if (i && !d && (p = f && m ? p.filter((e)=>e.getAttribute(`${f}`) === m) : [
            i
        ]), !p.length) return;
        const v = H.getInstance();
        if (v) {
            const e = v.getOptions().triggerEl;
            if (e && p.indexOf(e) > -1) return;
        }
        return Object.assign({}, u.Carousel || {}).rtl && (p = p.reverse()), i && (u.startIndex = p.indexOf(i)), H.fromNodes(p, u);
    },
    fromNodes: function(e, t) {
        t = (0, _extendJs.extend)({}, _, t || {});
        const n = [], o = (e)=>e instanceof HTMLImageElement ? e : e instanceof HTMLElement ? e.querySelector("img:not([aria-hidden])") : void 0;
        for (const i of e){
            const l = i.dataset || {}, s = t.delegateEl && e.indexOf(i) === t.startIndex ? t.delegateEl : void 0, r = o(s) || o(i) || void 0, a = l.src || i.getAttribute("href") || i.getAttribute("currentSrc") || i.getAttribute("src") || void 0, c = l.thumb || l.thumbSrc || (null == r ? void 0 : r.getAttribute("currentSrc")) || (null == r ? void 0 : r.getAttribute("src")) || (null == r ? void 0 : r.dataset.lazySrc) || void 0, u = {
                src: a,
                alt: l.alt || (null == r ? void 0 : r.getAttribute("alt")) || void 0,
                thumbSrc: c,
                thumbEl: r,
                triggerEl: i,
                delegateEl: s
            };
            for(const e in l){
                let t = l[e] + "";
                t = "false" !== t && ("true" === t || t), u[e] = t;
            }
            n.push(u);
        }
        return H.show(n, t);
    },
    fromSelector: function(e, n, o) {
        let i = document.body, l = "", r = {};
        if ((0, _isStringJs.isString)(e) ? l = e : e instanceof Element && (i = e, (0, _isStringJs.isString)(n) && (l = n), "object" == typeof o && (r = o || {})), !(i && i instanceof Element && l)) return;
        const a = H.openers.get(i);
        return a ? (r = (0, _extendJs.extend)({}, a.get(l) || {}, r), r ? H.fromNodes(Array.from(i.querySelectorAll(l)), r) : void 0) : void 0;
    },
    getCarousel: function() {
        var e;
        return (null === (e = H.getInstance()) || void 0 === e ? void 0 : e.getCarousel()) || void 0;
    },
    getDefaults: function() {
        return _;
    },
    getInstance: function(e) {
        if (e) {
            const t = O.get(e);
            return t && t.getState() !== k.Destroyed ? t : void 0;
        }
        return Array.from(O.values()).reverse().find((e)=>{
            if (e.getState() !== k.Destroyed) return e;
        }) || void 0;
    },
    getSlide: function() {
        var e;
        return (null === (e = H.getInstance()) || void 0 === e ? void 0 : e.getSlide()) || void 0;
    },
    show: function(e = [], t = {}) {
        return I().init(e, t);
    },
    unbind: function(e, n) {
        let o = document.body, i = "";
        if ((0, _isStringJs.isString)(e) ? i = e : e instanceof Element && (o = e, (0, _isStringJs.isString)(n) && (i = n)), o) {
            const e = H.openers.get(o);
            e && i && e.delete(i), (null == e ? void 0 : e.size) && i || H.openers.delete(o), o.removeEventListener("click", H.fromEvent);
        }
    }
};

},{"../utils/isPlainObject.js":"ecEyv","../utils/isString.js":"9P3iT","../utils/isNode.js":"hlbcb","../utils/strToHtml.js":"jH4Nk","../utils/getScrollableParent.js":"2MCad","../utils/scrollLock.js":"5PTBp","../utils/extend.js":"ke5NQ","../utils/canUseDOM.js":"gR4Lu","../utils/map.js":"2Cp1k","../utils/addClass.js":"f0d1w","../panzoom/panzoom.js":"fzhNf","../carousel/carousel.js":"aEcLD","../carousel/carousel.zoomable.js":"cvQyE","../carousel/carousel.sync.js":"aMNI3","../carousel/carousel.lazyload.js":"lIfuM","../carousel/carousel.arrows.js":"4gaNo","../carousel/carousel.toolbar.js":"1mbIc","../carousel/carousel.autoplay.js":"f4AIL","../carousel/carousel.thumbs.js":"i9Umc","../carousel/carousel.html.js":"fvWRD","../carousel/carousel.video.js":"kkH5x","../carousel/carousel.fullscreen.js":"6XULk","./fancybox.hash.js":"jDeJS","../libs/tween.js":"fL6Bw","./l10n/en_EN.js":"58UxB","../libs/gestures.js":"bbqaR","../utils/removeClass.js":"f3yei","../utils/toggleClass.js":"iomoI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ecEyv":[function(require,module,exports,__globalThis) {
/*! License details at fancyapps.com/license */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isPlainObject", ()=>t);
const t = (t)=>"object" == typeof t && null !== t && t.constructor === Object && "[object Object]" === Object.prototype.toString.call(t);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9P3iT":[function(require,module,exports,__globalThis) {
/*! License details at fancyapps.com/license */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isString", ()=>t);
const t = (t)=>"string" == typeof t;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hlbcb":[function(require,module,exports,__globalThis) {
/*! License details at fancyapps.com/license */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isNode", ()=>n);
const n = (n)=>n && null !== n && n instanceof Element && "nodeType" in n;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jH4Nk":[function(require,module,exports,__globalThis) {
/*! License details at fancyapps.com/license */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "stringToHtml", ()=>e);
const e = function(e) {
    var t = (new DOMParser).parseFromString(e, "text/html").body;
    if (t.childElementCount > 1) {
        for(var n = document.createElement("div"); t.firstChild;)n.appendChild(t.firstChild);
        return n;
    }
    let r = t.firstChild;
    return !r || r instanceof HTMLElement ? r : ((n = document.createElement("div")).appendChild(r), n);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2MCad":[function(require,module,exports,__globalThis) {
/*! License details at fancyapps.com/license */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getScrollableParent", ()=>n);
parcelHelpers.export(exports, "isScrollable", ()=>e);
const e = function(e) {
    if (!(e && e instanceof Element && e.offsetParent)) return !1;
    const n = e.scrollHeight > e.clientHeight, t = window.getComputedStyle(e).overflowY, o = -1 !== t.indexOf("hidden"), i = -1 !== t.indexOf("visible");
    return n && !o && !i;
}, n = function(t, o) {
    return !t || t === document.body || o && t === o ? null : e(t) ? t : n(t.parentElement, o);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5PTBp":[function(require,module,exports,__globalThis) {
/*! License details at fancyapps.com/license */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scrollLock", ()=>t);
const t = (t = !0, e = "--f-scrollbar-compensate", s = "--f-body-margin", o = "hide-scrollbar")=>{
    const n = document, r = n.body, l = n.documentElement;
    if (t) {
        if (r.classList.contains(o)) return;
        let t = window.innerWidth - l.getBoundingClientRect().width;
        t < 0 && (t = 0), l.style.setProperty(e, `${t}px`);
        const n = parseFloat(window.getComputedStyle(r).marginRight);
        n && r.style.setProperty(s, `${n}px`), r.classList.add(o);
    } else r.classList.remove(o), r.style.setProperty(s, ""), n.documentElement.style.setProperty(e, "");
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ke5NQ":[function(require,module,exports,__globalThis) {
/*! License details at fancyapps.com/license */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "extend", ()=>r);
var _isPlainObjectJs = require("./isPlainObject.js");
const r = (t, ...e)=>{
    const n = e.length;
    for(let c = 0; c < n; c++){
        const n = e[c] || {};
        Object.entries(n).forEach(([e, n])=>{
            const c = Array.isArray(n) ? [] : {};
            t[e] || Object.assign(t, {
                [e]: c
            }), (0, _isPlainObjectJs.isPlainObject)(n) ? Object.assign(t[e], r(t[e], n)) : Array.isArray(n) ? Object.assign(t, {
                [e]: [
                    ...n
                ]
            }) : Object.assign(t, {
                [e]: n
            });
        });
    }
    return t;
};

},{"./isPlainObject.js":"ecEyv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gR4Lu":[function(require,module,exports,__globalThis) {
/*! License details at fancyapps.com/license */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "canUseDOM", ()=>e);
function e() {
    return !("undefined" == typeof window || !window.document || !window.document.createElement);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2Cp1k":[function(require,module,exports,__globalThis) {
/*! License details at fancyapps.com/license */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "map", ()=>t);
var _clampJs = require("./clamp.js");
const t = function(t = 0, n = 0, r = 0, c = 0, m = 0, p = !1) {
    const s = (t - n) / (r - n) * (m - c) + c;
    return p ? c < m ? (0, _clampJs.clamp)(c, s, m) : (0, _clampJs.clamp)(m, s, c) : s;
};

},{"./clamp.js":"9oF9v","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9oF9v":[function(require,module,exports,__globalThis) {
/*! License details at fancyapps.com/license */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "clamp", ()=>t);
const t = function(t = 0, n = 0, a = 0) {
    return Math.max(Math.min(n, a), t);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"f0d1w":[function(require,module,exports,__globalThis) {
/*! License details at fancyapps.com/license */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "addClass", ()=>s);
const s = (s, t = "")=>{
    s && s.classList && t.split(" ").forEach((t)=>{
        t && s.classList.add(t);
    });
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fzhNf":[function(require,module,exports,__globalThis) {
/*! License details at fancyapps.com/license */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "PANZOOM_DEFAULT_POS", ()=>b);
parcelHelpers.export(exports, "Panzoom", ()=>k);
parcelHelpers.export(exports, "PanzoomAction", ()=>p);
parcelHelpers.export(exports, "PanzoomZoomLevel", ()=>v);
var _isStringJs = require("../utils/isString.js");
var _isNodeJs = require("../utils/isNode.js");
var _getScrollableParentJs = require("../utils/getScrollableParent.js");
var _strToHtmlJs = require("../utils/strToHtml.js");
var _clampJs = require("../utils/clamp.js");
var _tweenJs = require("../libs/tween.js");
var _gesturesJs = require("../libs/gestures.js");
var _enENJs = require("./l10n/en_EN.js");
var _addClassJs = require("../utils/addClass.js");
var _removeClassJs = require("../utils/removeClass.js");
var _toggleClassJs = require("../utils/toggleClass.js");
const g = (e)=>{
    e.cancelable && e.preventDefault();
}, h = (e, t = 1e4)=>(e = parseFloat(e + "") || 0, Math.round((e + Number.EPSILON) * t) / t), m = (e)=>e instanceof HTMLImageElement;
var p, v;
!function(e) {
    e.Reset = "reset", e.Zoom = "zoom", e.ZoomIn = "zoomIn", e.ZoomOut = "zoomOut", e.ZoomTo = "zoomTo", e.ToggleCover = "toggleCover", e.ToggleFull = "toggleFull", e.ToggleMax = "toggleMax", e.IterateZoom = "iterateZoom", e.Pan = "pan", e.Swipe = "swipe", e.Move = "move", e.MoveLeft = "moveLeft", e.MoveRight = "moveRight", e.MoveUp = "moveUp", e.MoveDown = "moveDown", e.RotateCCW = "rotateCCW", e.RotateCW = "rotateCW", e.FlipX = "flipX", e.FlipY = "flipY";
}(p || (p = {})), function(e) {
    e.Cover = "cover", e.Full = "full", e.Max = "max";
}(v || (v = {}));
const b = {
    x: 0,
    y: 0,
    scale: 1,
    angle: 0,
    flipX: 1,
    flipY: 1
}, y = {
    bounds: !0,
    classes: {
        container: "f-panzoom",
        wrapper: "f-panzoom__wrapper",
        content: "f-panzoom__content",
        viewport: "f-panzoom__viewport"
    },
    clickAction: p.ToggleFull,
    dblClickAction: !1,
    gestures: {},
    height: "auto",
    l10n: (0, _enENJs.en_EN),
    maxScale: 4,
    minScale: 1,
    mouseMoveFactor: 1,
    panMode: "drag",
    protected: !1,
    singleClickAction: !1,
    spinnerTpl: '<div class="f-spinner"></div>',
    wheelAction: p.Zoom,
    width: "auto"
};
let x, w = 0, M = 0, j = 0;
const k = (c, v = {}, k = {})=>{
    let E, C, O, A, S, T, F, Z, L = 0, X = Object.assign(Object.assign({}, y), v), Y = {}, R = Object.assign({}, b), P = Object.assign({}, b);
    const z = [];
    function D(e) {
        let t = X[e];
        return t && "function" == typeof t ? t(xe) : t;
    }
    function I() {
        return c && c.parentElement && E && 3 === L;
    }
    const W = new Map;
    function H(e, ...t) {
        const n = [
            ...W.get(e) || []
        ];
        X.on && n.push(X.on[e]);
        for (const e of n)e && e instanceof Function && e(xe, ...t);
        "*" !== e && H("*", e, ...t);
    }
    function q(e) {
        if (!I()) return;
        const t = e.target;
        if ((0, _getScrollableParentJs.getScrollableParent)(t)) return;
        const i = Date.now(), a = [
            -e.deltaX || 0,
            -e.deltaY || 0,
            -e.detail || 0
        ].reduce(function(e, t) {
            return Math.abs(t) > Math.abs(e) ? t : e;
        }), s = (0, _clampJs.clamp)(-1, a, 1);
        H("wheel", e, s);
        const r = D("wheelAction");
        if (!r) return;
        if (e.defaultPrevented) return;
        const l = P.scale;
        let c = l * (s > 0 ? 1.5 : .5);
        if (r === p.Zoom) {
            const t = Math.abs(e.deltaY) < 100 && Math.abs(e.deltaX) < 100;
            if (i - M < (t ? 200 : 45)) return void g(e);
            M = i;
            const n = te(), a = ae();
            if (h(c) < h(n) && h(l) <= h(n) ? (j += Math.abs(s), c = n) : h(c) > h(a) && h(l) >= h(a) ? (j += Math.abs(s), c = a) : (j = 0, c = (0, _clampJs.clamp)(n, c, a)), j > 7) return;
        }
        switch(g(e), r){
            case p.Pan:
                ce(r, {
                    srcEvent: e,
                    deltaX: 2 * -e.deltaX,
                    deltaY: 2 * -e.deltaY
                });
                break;
            case p.Zoom:
                ce(p.ZoomTo, {
                    srcEvent: e,
                    scale: c,
                    center: {
                        x: e.clientX,
                        y: e.clientY
                    }
                });
                break;
            default:
                ce(r, {
                    srcEvent: e
                });
        }
    }
    function $(e) {
        var n, i;
        const o = e.composedPath()[0];
        if (!(0, _gesturesJs.Gestures).isClickAllowed()) return;
        if (!(0, _isNodeJs.isNode)(o) || e.defaultPrevented) return;
        if (!(null == c ? void 0 : c.contains(o))) return;
        if (o.hasAttribute("disabled") || o.hasAttribute("aria-disabled")) return;
        const a = o.closest("[data-panzoom-action]"), s = null === (n = null == a ? void 0 : a.dataset) || void 0 === n ? void 0 : n.panzoomAction, r = (null === (i = null == a ? void 0 : a.dataset) || void 0 === i ? void 0 : i.panzoomValue) || "";
        if (s) {
            switch(s){
                case p.ZoomTo:
                case p.ZoomIn:
                case p.ZoomOut:
                    ce(s, {
                        scale: parseFloat(r || "") || void 0
                    });
                    break;
                case p.MoveLeft:
                case p.MoveRight:
                    ce(s, {
                        deltaX: parseFloat(r || "") || void 0
                    });
                    break;
                case p.MoveUp:
                case p.MoveDown:
                    ce(s, {
                        deltaY: parseFloat(r || "") || void 0
                    });
                    break;
                default:
                    ce(s);
            }
            return;
        }
        if (!(null == E ? void 0 : E.contains(o))) return;
        const u = {
            srcEvent: e
        };
        if (ce(D("clickAction"), u), D("dblClickAction")) {
            const e = Date.now(), t = e - (w || e);
            w = e, t > 0 && t <= 250 ? (x && (clearTimeout(x), x = void 0), ce(D("dblClickAction"), u)) : x = setTimeout(()=>{
                ce(D("singleClickAction"), u);
            }, 250);
        }
    }
    function _(e) {
        if (Z = e, !I() || !K()) return;
        if (R.scale <= 1 || P.scale <= 1) return;
        if (((null == E ? void 0 : E.dataset.animationName) || "").indexOf("zoom") > -1) return;
        const t = Q(P.scale);
        if (!t) return;
        const { x: n, y: i } = t;
        ce(p.Pan, {
            deltaX: n - P.x,
            deltaY: i - P.y
        });
    }
    function B() {
        var e;
        c && ((0, _removeClassJs.removeClass)(c, "is-loading"), null === (e = c.querySelector(".f-spinner")) || void 0 === e || e.remove());
    }
    function N() {
        if (!c || !C) return;
        if (B(), m(C) && (!C.complete || !C.naturalWidth)) return L = 2, null == E || E.classList.add("has-error"), void H("error");
        H("loaded");
        const { width: e, height: t } = G();
        m(C) && (C.setAttribute("width", e + ""), C.setAttribute("height", t + "")), E && ((0, _removeClassJs.removeClass)(E, "has-error"), m(C) && (E.setAttribute("width", e + ""), E.setAttribute("height", t + ""), E.style.aspectRatio = `${e / t || ""}`)), T = (0, _tweenJs.Tween)().on("start", (e, t)=>{
            P = Object.assign(Object.assign({}, b), t), void 0 !== t.angle && (t.angle = 90 * Math.round(t.angle / 90)), void 0 !== t.flipX && (t.flipX = t.flipX > 0 ? 1 : -1), void 0 !== t.flipY && (t.flipY = t.flipY > 0 ? 1 : -1), le(), H("animationStart");
        }).on("pause", (e)=>{
            P = Object.assign(Object.assign({}, b), e);
        }).on("step", (e)=>{
            if (!I()) return void (null == T || T.end());
            if (R = Object.assign(Object.assign({}, b), e), K() || !D("bounds") || ve() || P.scale > R.scale || P.scale < ne()) return void ue();
            const t = se(P.scale);
            let n = !1, i = !1, a = !1, s = !1;
            R.x < t.x[0] && (n = !0), R.x > t.x[1] && (i = !0), R.y < t.y[0] && (s = !0), R.y > t.y[1] && (a = !0);
            let r = !1, l = !1, c = !1, u = !1;
            P.x < t.x[0] && (r = !0), P.x > t.x[1] && (l = !0), P.y < t.y[0] && (u = !0), P.y > t.y[1] && (c = !0);
            let d = !1;
            (i && l || n && r) && (P.x = (0, _clampJs.clamp)(t.x[0], P.x, t.x[1]), d = !0), (a && c || s && u) && (P.y = (0, _clampJs.clamp)(t.y[0], P.y, t.y[1]), d = !0), d && T && T.spring({
                tension: 94,
                friction: 17,
                maxSpeed: 555 * P.scale,
                restDelta: .1,
                restSpeed: .1,
                velocity: T.getCurrentVelocities()
            }).from(R).to(P).start(), ue();
        }).on("end", ()=>{
            re(), (null == T ? void 0 : T.isRunning()) || (le(), H("animationEnd"));
        }), function() {
            const e = D("gestures");
            e && A && C && (S = (0, _gesturesJs.Gestures)(A, e).on("start", (e)=>{
                if (!T) return;
                const t = e.srcEvent;
                K() || ((R.scale > 1 || e.currentTouch.length > 1) && (null == t || t.stopPropagation(), T.pause()), 1 === e.currentTouch.length && H("touchStart"));
            }).on("move", (e)=>{
                K() || (1 !== P.scale || e.currentTouch.length > 1) && (e.srcEvent.preventDefault(), e.srcEvent.stopPropagation());
            }).on("pan", (e)=>{
                if (!I() || K()) return;
                const t = e.srcEvent;
                (1 !== P.scale || e.currentTouch.length > 1) && (g(t), ce(p.Pan, e));
            }).on("swipe", (e)=>{
                I() && !K() && P.scale > 1 && ce(p.Swipe, e);
            }).on("tap", (e)=>{
                H("click", e);
            }).on("singleTap", (e)=>{
                H("singleClick", e);
            }).on("doubleTap", (e)=>{
                H("dblClick", e);
            }).on("pinch", (e)=>{
                K() || (e.scale > ne() ? ce(p.ZoomIn, e) : e.scale < ne() ? ce(p.ZoomOut, e) : ce(p.Pan, e));
            }).on("end", (e)=>{
                K() || (e.currentTouch.length ? (e.srcEvent.stopPropagation(), g(e.srcEvent), null == T || T.end()) : (le(), re(), H("touchEnd")));
            }).init());
        }(), A && (A.addEventListener("wheel", q, {
            passive: !1
        }), z.push(()=>{
            null == A || A.removeEventListener("wheel", q, {
                passive: !1
            });
        })), null == c || c.addEventListener("click", $), null === document || void 0 === document || document.addEventListener("mousemove", _), z.push(()=>{
            null == c || c.removeEventListener("click", $), null === document || void 0 === document || document.removeEventListener("mousemove", _);
        });
        const n = V();
        R = Object.assign({}, n), P = Object.assign({}, n), L = 3, ue(), le(), H("ready"), requestAnimationFrame(()=>{
            B(), A && (A.style.visibility = "");
        });
    }
    function V() {
        const e = Object.assign({}, D("startPos") || {});
        let t = e.scale, n = 1;
        n = "string" == typeof t ? ee(t) : "number" == typeof t ? t : ne();
        const i = Object.assign(Object.assign(Object.assign({}, b), e), {
            scale: n
        }), o = K() ? Q(n) : void 0;
        if (o) {
            const { x: e, y: t } = o;
            i.x = e, i.y = t;
        }
        return i;
    }
    function U() {
        const e = {
            top: 0,
            left: 0,
            width: 0,
            height: 0
        };
        if (E) {
            const t = E.getBoundingClientRect();
            P.angle % 180 == 90 ? (e.top = t.top + .5 * t.height - .5 * t.width, e.left = t.left + .5 * t.width - .5 * t.height, e.width = t.height, e.height = t.width) : (e.top = t.top, e.left = t.left, e.width = t.width, e.height = t.height);
        }
        return e;
    }
    function G() {
        let t = D("width"), n = D("height");
        if (C && "auto" === t) {
            const e = C.getAttribute("width");
            t = e ? parseFloat(e + "") : void 0 !== C.dataset.width ? parseFloat(C.dataset.width + "") : m(A) ? A.naturalWidth : m(C) ? C.naturalWidth : C.getBoundingClientRect().width;
        } else t = (0, _isStringJs.isString)(t) ? parseFloat(t) : t;
        if (C && "auto" === n) {
            const e = C.getAttribute("height");
            n = e ? parseFloat(e + "") : void 0 !== C.dataset.height ? parseFloat(C.dataset.height + "") : m(A) ? A.naturalHeight : m(C) ? C.naturalHeight : C.getBoundingClientRect().height;
        } else n = (0, _isStringJs.isString)(n) ? parseFloat(n) : n;
        return {
            width: t,
            height: n
        };
    }
    function J() {
        const e = U();
        return {
            width: e.width,
            height: e.height
        };
    }
    function K() {
        return "mousemove" === D("panMode") && matchMedia("(hover: hover)").matches;
    }
    function Q(e) {
        const t = Z || D("event"), n = null == E ? void 0 : E.getBoundingClientRect();
        if (!t || !n || e <= 1) return {
            x: 0,
            y: 0
        };
        const i = (t.clientX || 0) - n.left, a = (t.clientY || 0) - n.top, { width: s, height: r } = J(), l = se(e);
        if (e > 1) {
            const t = D("mouseMoveFactor");
            t > 1 && (e *= t);
        }
        let c = s * e, u = r * e, d = .5 * (c - s) - i / s * 100 / 100 * (c - s), f = .5 * (u - r) - a / r * 100 / 100 * (u - r);
        return d = (0, _clampJs.clamp)(l.x[0], d, l.x[1]), f = (0, _clampJs.clamp)(l.y[0], f, l.y[1]), {
            x: d,
            y: f
        };
    }
    function ee(e = "base") {
        if (!c) return 1;
        const t = c.getBoundingClientRect(), n = U(), { width: i, height: a } = G(), s = (e)=>{
            if ("number" == typeof e) return e;
            switch(e){
                case "min":
                case "base":
                    return 1;
                case "cover":
                    return Math.max(t.height / n.height, t.width / n.width) || 1;
                case "full":
                case "max":
                    {
                        const e = P.angle % 180 == 90 ? a : i;
                        return e && n.width ? e / n.width : 1;
                    }
            }
        }, r = D("minScale"), l = D("maxScale"), u = Math.min(s("full"), s(r)), d = "number" == typeof l ? s("full") * l : Math.min(s("full"), s(l));
        switch(e){
            case "min":
                return u;
            case "base":
                return (0, _clampJs.clamp)(u, 1, d);
            case "cover":
                return s("cover");
            case "full":
                return Math.min(d, s("full"));
            case "max":
                return d;
        }
    }
    function te() {
        return ee("min");
    }
    function ne() {
        return ee("base");
    }
    function ie() {
        return ee("cover");
    }
    function oe() {
        return ee("full");
    }
    function ae() {
        return ee("max");
    }
    function se(e) {
        const t = {
            x: [
                0,
                0
            ],
            y: [
                0,
                0
            ]
        }, n = null == c ? void 0 : c.getBoundingClientRect();
        if (!n) return t;
        const i = U(), o = n.width, a = n.height;
        let s = i.width, r = i.height, l = e = void 0 === e ? P.scale : e, u = e;
        if (K() && e > 1) {
            const t = D("mouseMoveFactor");
            t > 1 && (s * e > o + .01 && (l *= t), r * e > a + .01 && (u *= t));
        }
        return s *= l, r *= u, e > 1 && (s > o && (t.x[0] = .5 * (o - s), t.x[1] = .5 * (s - o)), t.x[0] -= .5 * (i.left - n.left), t.x[1] -= .5 * (i.left - n.left), t.x[0] -= .5 * (i.left + i.width - n.right), t.x[1] -= .5 * (i.left + i.width - n.right), r > a && (t.y[0] = .5 * (a - r), t.y[1] = .5 * (r - a)), t.y[0] -= .5 * (i.top - n.top), t.y[1] -= .5 * (i.top - n.top), t.y[0] -= .5 * (i.top + i.height - n.bottom), t.y[1] -= .5 * (i.top + i.height - n.bottom)), t;
    }
    function re() {
        if (!I()) return;
        if (!D("bounds")) return;
        if (!T) return;
        const e = te(), t = ae(), n = (0, _clampJs.clamp)(e, P.scale, t);
        if (P.scale < e - .01 || P.scale > t + .01) return void ce(p.ZoomTo, {
            scale: n
        });
        if (T.isRunning()) return;
        if (ve()) return;
        const i = se(n);
        P.x < i.x[0] || P.x > i.x[1] || P.y < i.y[0] || P.y > i.y[1] ? (P.x = (0, _clampJs.clamp)(i.x[0], P.x, i.x[1]), P.y = (0, _clampJs.clamp)(i.y[0], P.y, i.y[1]), T.spring({
            tension: 170,
            friction: 17,
            restDelta: .001,
            restSpeed: .001,
            maxSpeed: 1 / 0,
            velocity: T.getCurrentVelocities()
        }), T.from(R).to(P).start()) : ue();
    }
    function le() {
        if (!I()) return;
        const e = pe(), t = ve(), n = be(), i = ye(), o = fe(), a = ge();
        (0, _toggleClassJs.toggleClass)(E, "is-fullsize", i), (0, _toggleClassJs.toggleClass)(E, "is-expanded", n), (0, _toggleClassJs.toggleClass)(E, "is-dragging", t), (0, _toggleClassJs.toggleClass)(E, "can-drag", e), (0, _toggleClassJs.toggleClass)(E, "will-zoom-in", o), (0, _toggleClassJs.toggleClass)(E, "will-zoom-out", a);
        const s = he(), r = me(), l = !I();
        for (const e of (null == c ? void 0 : c.querySelectorAll("[data-panzoom-action]")) || []){
            const t = e.dataset.panzoomAction;
            let n = !1;
            if (l) n = !0;
            else switch(t){
                case p.ZoomIn:
                    s || (n = !0);
                    break;
                case p.ZoomOut:
                    r || (n = !0);
                    break;
                case p.ToggleFull:
                    s || r || (n = !0);
                    const t1 = e.querySelector("g");
                    t1 && (t1.style.display = i ? "none" : "");
                    break;
                case p.ToggleCover:
                case p.ToggleMax:
                    s || r || (n = !0);
            }
            n ? (e.setAttribute("aria-disabled", ""), e.setAttribute("tabindex", "-1")) : (e.removeAttribute("aria-disabled"), e.removeAttribute("tabindex"));
        }
    }
    function ce(e, t) {
        var n;
        if (!c || !C || !T) return;
        if (e === p.Swipe && Math.abs(T.getCurrentVelocities().scale) > .01) return;
        let i = Object.assign({}, P), a = se(K() ? P.scale : R.scale);
        const l = T.getCurrentVelocities(), u = U(), d = ((null === (n = (t = t || {}).currentTouch) || void 0 === n ? void 0 : n.length) || 0) > 1, f = t.velocityX || 0, g = t.velocityY || 0;
        let h = t.center;
        !h && t.srcEvent && (h = (0, _gesturesJs.getMidpoint)((0, _gesturesJs.getChangedPosition)(t.srcEvent)));
        let m = t.deltaX || 0, v = t.deltaY || 0;
        switch(e){
            case p.MoveRight:
                m = t.deltaX || 100;
                break;
            case p.MoveLeft:
                m = t.deltaX || -100;
                break;
            case p.MoveUp:
                v = t.deltaY || -100;
                break;
            case p.MoveDown:
                v = t.deltaY || 100;
        }
        let y = [];
        switch(e){
            case p.Reset:
                P = Object.assign({}, b), P.scale = ne();
                break;
            case p.Pan:
            case p.Move:
            case p.MoveLeft:
            case p.MoveRight:
            case p.MoveUp:
            case p.MoveDown:
                if (ve()) {
                    let e = 1, t = 1;
                    P.x <= a.x[0] && f <= 0 && (e = Math.max(.01, 1 - Math.abs(1 / u.width * Math.abs(P.x - a.x[0]))), e *= .2), P.x >= a.x[1] && f >= 0 && (e = Math.max(.01, 1 - Math.abs(1 / u.width * Math.abs(P.x - a.x[1]))), e *= .2), P.y <= a.y[0] && g <= 0 && (t = Math.max(.01, 1 - Math.abs(1 / u.height * Math.abs(P.y - a.y[0]))), t *= .2), P.y >= a.y[1] && g >= 0 && (t = Math.max(.01, 1 - Math.abs(1 / u.height * Math.abs(P.y - a.y[1]))), t *= .2), P.x += m * e, P.y += v * t;
                } else P.x = (0, _clampJs.clamp)(a.x[0], P.x + m, a.x[1]), P.y = (0, _clampJs.clamp)(a.y[0], P.y + v, a.y[1]);
                break;
            case p.Swipe:
                const e1 = (e = 0)=>Math.sign(e) * Math.pow(Math.abs(e), 1.5);
                P.x += (0, _clampJs.clamp)(-1000, e1(f), 1e3), P.y += (0, _clampJs.clamp)(-1000, e1(g), 1e3), g && !f && (P.x = (0, _clampJs.clamp)(a.x[0], P.x, a.x[1])), !g && f && (P.y = (0, _clampJs.clamp)(a.y[0], P.y, a.y[1])), l.x = f, l.y = g;
                break;
            case p.ZoomTo:
                P.scale = t.scale || 1;
                break;
            case p.ZoomIn:
                P.scale = P.scale * (t.scale || 2), d || (P.scale = Math.min(P.scale, ae()));
                break;
            case p.ZoomOut:
                P.scale = P.scale * (t.scale || .5), d || (P.scale = Math.max(P.scale, te()));
                break;
            case p.ToggleCover:
                y = [
                    ne(),
                    ie()
                ];
                break;
            case p.ToggleFull:
                y = [
                    ne(),
                    oe()
                ];
                break;
            case p.ToggleMax:
                y = [
                    ne(),
                    ae()
                ];
                break;
            case p.IterateZoom:
                y = [
                    ne(),
                    oe(),
                    ae()
                ];
                break;
            case p.Zoom:
                const n1 = oe();
                P.scale >= n1 - .05 ? P.scale = ne() : P.scale = Math.min(n1, P.scale * (t.scale || 2));
                break;
            case p.RotateCW:
                P.angle += 90;
                break;
            case p.RotateCCW:
                P.angle -= 90;
                break;
            case p.FlipX:
                P.flipX *= -1;
                break;
            case p.FlipY:
                P.flipY *= -1;
        }
        if (void 0 !== R.angle && Math.abs(R.angle) >= 360 && (P.angle -= 360 * Math.floor(R.angle / 360), R.angle -= 360 * Math.floor(R.angle / 360)), y.length) {
            const e = y.findIndex((e)=>e > P.scale + 1e-4);
            P.scale = y[e] || y[0];
        }
        if (d && (P.scale = (0, _clampJs.clamp)(te() * (d ? .8 : 1), P.scale, ae() * (d ? 1.6 : 1))), K()) {
            const e = Q(P.scale);
            if (e) {
                const { x: t, y: n } = e;
                P.x = t, P.y = n;
            }
        } else if (P.scale !== i.scale) {
            let e = 0, t = 0;
            if (h) e = h.x, t = h.y;
            else {
                const n = c.getBoundingClientRect();
                e = n.x + .5 * n.width, t = n.y + .5 * n.height;
            }
            let n = e - u.left, s = t - u.top;
            n -= .5 * u.width, s -= .5 * u.height;
            const r = (n - i.x) / i.scale, l = (s - i.y) / i.scale;
            P.x = n - r * P.scale, P.y = s - l * P.scale, !d && D("bounds") && (a = se(), P.x = (0, _clampJs.clamp)(a.x[0], P.x, a.x[1]), P.y = (0, _clampJs.clamp)(a.y[0], P.y, a.y[1]));
        }
        if (e === p.Swipe) {
            let e = 94, t = 17, n = 500 * P.scale, i = l;
            T.spring({
                tension: e,
                friction: t,
                maxSpeed: n,
                restDelta: .1,
                restSpeed: .1,
                velocity: i
            });
        } else e === p.Pan || d ? T.spring({
            tension: 900,
            friction: 17,
            restDelta: .01,
            restSpeed: .01,
            maxSpeed: 1
        }) : T.spring({
            tension: 170,
            friction: 17,
            restDelta: .001,
            restSpeed: .001,
            maxSpeed: 1 / 0,
            velocity: l
        });
        e === p.Reset || 0 === t.velocity ? R = Object.assign({}, P) : T.from(R).to(P).start(), H("action", e);
    }
    function ue() {
        if (!C) return;
        if (E) {
            const { width: e, height: t } = G();
            E.style.maxWidth = `min(${e}px, 100%)`, E.style.maxHeight = `min(${t}px, 100%)`;
        }
        let { x: e, y: t, scale: n, angle: i, flipX: o, flipY: a } = R;
        const s = function() {
            const { width: e, height: t } = G(), { width: n, height: i } = J();
            if (!c) return {
                x: 0,
                y: 0,
                width: 0,
                height: 0,
                scale: 0,
                flipX: 0,
                flipY: 0,
                angle: 0,
                fitWidth: n,
                fitHeight: i,
                fullWidth: e,
                fullHeight: t
            };
            let { x: o, y: a, scale: s, angle: r, flipX: l, flipY: u } = R, d = 1 / oe(), f = e, g = t, h = R.scale * d, m = P.scale * d;
            const p = Math.max(n, i), v = Math.min(n, i);
            e > t ? (f = p, g = v) : (f = v, g = p);
            h = e > t ? p * s / e || 1 : p * s / t || 1;
            let b = f ? e * m : 0, y = g ? t * m : 0;
            return o = o + .5 * f - .5 * b, a = a + .5 * g - .5 * y, {
                x: o,
                y: a,
                width: b,
                height: y,
                scale: f && g ? e * h / b : 0,
                flipX: l,
                flipY: u,
                angle: r,
                fitWidth: n,
                fitHeight: i,
                fullWidth: e,
                fullHeight: t
            };
        }();
        if (s) {
            const { x: e, y: t, width: n, height: o, scale: a, flipX: r, flipY: l } = s;
            let c = `translate(${h(e)}px, ${h(t)}px)`;
            c += 1 !== r || 1 !== l ? ` scaleX(${h(a * r)}) scaleY(${h(a * l)})` : ` scale(${h(a)})`, 0 !== i && (c += ` rotate(${i}deg)`), A && (A.style.width = `${h(n)}px`, A.style.height = `${h(o)}px`, A.style.transform = `${c}`);
        }
        H("render");
    }
    function de() {
        let e = P.scale;
        const t = D("clickAction");
        let n = ne();
        if (t) {
            let i = [];
            switch(t){
                case p.ZoomIn:
                    n = 2 * e;
                    break;
                case p.ZoomOut:
                    n = .5 * e;
                    break;
                case p.ToggleCover:
                    i = [
                        ne(),
                        ie()
                    ];
                    break;
                case p.ToggleFull:
                    i = [
                        ne(),
                        oe()
                    ];
                    break;
                case p.ToggleMax:
                    i = [
                        ne(),
                        ae()
                    ];
                    break;
                case p.IterateZoom:
                    i = [
                        ne(),
                        oe(),
                        ae()
                    ];
                    break;
                case p.Zoom:
                    const t1 = oe();
                    n = e >= t1 - .05 ? ne() : Math.min(t1, 2 * e);
            }
            if (i.length) {
                const t = i.findIndex((t)=>t > e + 1e-4);
                n = i[t] || ne();
            }
        }
        return n = (0, _clampJs.clamp)(te(), n, ae()), n;
    }
    function fe() {
        return !!(I() && de() > P.scale);
    }
    function ge() {
        return !!(I() && de() < P.scale);
    }
    function he() {
        return !!(I() && P.scale < ae());
    }
    function me() {
        return !!(I() && P.scale > te());
    }
    function pe() {
        return !(!(I() && be() && S) || K());
    }
    function ve() {
        return !(!I() || !(null == S ? void 0 : S.isPointerDown()) || K());
    }
    function be() {
        return !!(I() && P.scale > ne());
    }
    function ye() {
        return !!(I() && P.scale >= oe());
    }
    const xe = {
        canDrag: pe,
        canZoomIn: he,
        canZoomOut: me,
        destroy: function() {
            H("destroy");
            for (const e of Object.values(Y))null == e || e.destroy(xe);
            for (const e of z)e();
            return E && (E.style.aspectRatio = "", E.style.maxWidth = "", E.style.maxHeight = ""), A && (A.style.width = "", A.style.height = "", A.style.transform = ""), E = void 0, C = void 0, A = void 0, R = Object.assign({}, b), P = Object.assign({}, b), null == T || T.destroy(), T = void 0, null == S || S.destroy(), S = void 0, L = 4, xe;
        },
        emit: H,
        execute: ce,
        getBoundaries: se,
        getContainer: function() {
            return c;
        },
        getContent: function() {
            return C;
        },
        getFullDim: G,
        getGestures: function() {
            return S;
        },
        getMousemovePos: Q,
        getOptions: function() {
            return X;
        },
        getScale: ee,
        getStartPosition: V,
        getState: function() {
            return L;
        },
        getTransform: function(e) {
            return !0 === e ? P : R;
        },
        getTween: function() {
            return T;
        },
        getViewport: function() {
            return A;
        },
        getWrapper: function() {
            return E;
        },
        init: function() {
            return L = 0, H("init"), function() {
                for (const [e, t] of Object.entries(Object.assign(Object.assign({}, k), X.plugins || {})))if (e && !Y[e] && t instanceof Function) {
                    const n = t();
                    n.init(xe), Y[e] = n;
                }
                H("initPlugins");
            }(), function() {
                const e = Object.assign(Object.assign({}, y.classes), D("classes"));
                if (!c) return;
                if ((0, _addClassJs.addClass)(c, e.container), C = c.querySelector("." + e.content), !C) return;
                C.setAttribute("draggable", "false"), E = c.querySelector("." + e.wrapper), E || (E = document.createElement("div"), (0, _addClassJs.addClass)(E, e.wrapper), C.insertAdjacentElement("beforebegin", E), E.insertAdjacentElement("afterbegin", C));
                A = c.querySelector("." + e.viewport), A || (A = document.createElement("div"), (0, _addClassJs.addClass)(A, e.viewport), A.insertAdjacentElement("afterbegin", C), E.insertAdjacentElement("beforeend", A));
                O = C.cloneNode(!0), O.removeAttribute("id"), E.insertAdjacentElement("afterbegin", O), C instanceof HTMLPictureElement && (C = C.querySelector("img"));
                O instanceof HTMLPictureElement && (O = O.querySelector("img"));
                A instanceof HTMLPictureElement && (A = A.querySelector("img"));
                if (A && (A.style.visibility = "hidden", D("protected"))) {
                    A.addEventListener("contextmenu", (e)=>{
                        e.preventDefault();
                    });
                    const e = document.createElement("div");
                    (0, _addClassJs.addClass)(e, "f-panzoom__protected"), A.appendChild(e);
                }
                H("initLayout");
            }(), function() {
                if (c && E && !F) {
                    let e = null;
                    F = new ResizeObserver(()=>{
                        I() && (e = e || requestAnimationFrame(()=>{
                            I() && (le(), re(), H("refresh")), e = null;
                        }));
                    }), F.observe(E), z.push(()=>{
                        null == F || F.disconnect(), F = void 0, e && (cancelAnimationFrame(e), e = null);
                    });
                }
            }(), function() {
                if (!c || !C) return;
                if (!m(C) || !m(O)) return void N();
                const e = ()=>{
                    C && m(C) && C.decode().then(()=>{
                        N();
                    }).catch(()=>{
                        N();
                    });
                };
                if (L = 1, c.classList.add("is-loading"), H("loading"), O.src && O.complete) return void e();
                (function() {
                    if (!c) return;
                    if (null == c ? void 0 : c.querySelector(".f-spinner")) return;
                    const e = D("spinnerTpl"), t = (0, _strToHtmlJs.stringToHtml)(e);
                    t && (t.classList.add("f-spinner"), c.classList.add("is-loading"), null == E || E.insertAdjacentElement("afterbegin", t));
                })(), O.addEventListener("load", e, !1), O.addEventListener("error", e, !1), z.push(()=>{
                    null == O || O.removeEventListener("load", e, !1), null == O || O.removeEventListener("error", e, !1);
                });
            }(), xe;
        },
        isDragging: ve,
        isExpanded: be,
        isFullsize: ye,
        localize: function(e, t = []) {
            const n = D("l10n") || {};
            e = String(e).replace(/\{\{(\w+)\}\}/g, (e, t)=>n[t] || e);
            for(let n = 0; n < t.length; n++)e = e.split(t[n][0]).join(t[n][1]);
            return e = e.replace(/\{\{(.*?)\}\}/g, (e, t)=>t);
        },
        off: function(e, t) {
            for (const n of e instanceof Array ? e : [
                e
            ])W.has(n) && W.set(n, W.get(n).filter((e)=>e !== t));
            return xe;
        },
        on: function(e, t) {
            for (const n of e instanceof Array ? e : [
                e
            ])W.set(n, [
                ...W.get(n) || [],
                t
            ]);
            return xe;
        },
        version: "6.0.29",
        willZoomIn: fe,
        willZoomOut: ge
    };
    return xe;
};
k.l10n = {
    en_EN: (0, _enENJs.en_EN)
}, k.getDefaults = ()=>y;

},{"../utils/isString.js":"9P3iT","../utils/isNode.js":"hlbcb","../utils/getScrollableParent.js":"2MCad","../utils/strToHtml.js":"jH4Nk","../utils/clamp.js":"9oF9v","../libs/tween.js":"fL6Bw","../libs/gestures.js":"bbqaR","./l10n/en_EN.js":"6Tg2o","../utils/addClass.js":"f0d1w","../utils/removeClass.js":"f3yei","../utils/toggleClass.js":"iomoI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fL6Bw":[function(require,module,exports,__globalThis) {
/*! License details at fancyapps.com/license */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Tween", ()=>c);
parcelHelpers.export(exports, "TweenRepeatType", ()=>r);
parcelHelpers.export(exports, "TweenState", ()=>i);
var _clampJs = require("../utils/clamp.js");
var _isEqualJs = require("../utils/isEqual.js");
const e = function(n) {
    for (const t of s)t.getState() === i.Running && t.tick(a ? n - a : 0);
    a = n, u = window.requestAnimationFrame(e);
};
var i, o, r;
!function(n) {
    n[n.Initializing = 0] = "Initializing", n[n.Running = 1] = "Running", n[n.Paused = 2] = "Paused", n[n.Completed = 3] = "Completed", n[n.Destroyed = 4] = "Destroyed";
}(i || (i = {})), function(n) {
    n[n.Spring = 0] = "Spring", n[n.Ease = 1] = "Ease";
}(o || (o = {})), function(n) {
    n[n.Loop = 0] = "Loop", n[n.Reverse = 1] = "Reverse";
}(r || (r = {}));
const s = new Set;
let u = null, a = 0;
function c() {
    let a = i.Initializing, f = o.Ease, l = 0, g = 0, p = c.Easings.Linear, m = 500, d = 0, b = 0, S = 0, h = 0, y = 1 / 0, E = .01, R = .01, M = !1, j = {}, w = null, v = {}, O = {}, C = {}, L = 0, I = 0, D = r.Loop, z = c.Easings.Linear;
    const N = new Map;
    function V(n, ...t) {
        for (const e of N.get(n) || [])e(...t);
    }
    function q(n) {
        return g = 0, n ? w = setTimeout(()=>{
            x();
        }, n) : x(), F;
    }
    function x() {
        a = i.Running, V("start", v, O);
    }
    function A() {
        if (a = i.Completed, C = {}, V("end", v), a === i.Completed) {
            if (l < L) {
                if (l++, D === r.Reverse) {
                    const n = Object.assign({}, j);
                    j = Object.assign({}, O), O = n;
                }
                q(I);
            } else l = 0;
        }
        return F;
    }
    const F = {
        getState: function() {
            return a;
        },
        easing: function(n) {
            return p = n, f = o.Ease, C = {}, F;
        },
        duration: function(n) {
            return m = n, F;
        },
        spring: function(n = {}) {
            f = o.Spring;
            const t = {
                velocity: 0,
                mass: 1,
                tension: 170,
                friction: 26,
                restDelta: .1,
                restSpeed: .1,
                maxSpeed: 1 / 0,
                clamp: !0
            }, { velocity: e, mass: i, tension: r, friction: s, restDelta: u, restSpeed: a, maxSpeed: c, clamp: l } = Object.assign(Object.assign({}, t), n);
            return d = e, b = i, S = r, h = s, R = u, E = a, y = c, M = l, C = {}, F;
        },
        isRunning: function() {
            return a === i.Running;
        },
        isSpring: function() {
            return f === o.Spring;
        },
        from: function(n) {
            return v = Object.assign({}, n), F;
        },
        to: function(n) {
            return O = n, F;
        },
        repeat: function(n, t = 0, e = r.Loop, i) {
            return L = n, I = t, D = e, z = i || p, F;
        },
        on: function(n, t) {
            var e, i;
            return e = n, i = t, N.set(e, [
                ...N.get(e) || [],
                i
            ]), F;
        },
        off: function(n, t) {
            var e, i;
            return e = n, i = t, N.has(e) && N.set(e, N.get(e).filter((n)=>n !== i)), F;
        },
        start: function(n) {
            return a = i.Initializing, j = Object.assign({}, v), (0, _isEqualJs.isEqual)(j, O) || (s.add(this), u || (u = window.requestAnimationFrame(e)), q(n)), F;
        },
        pause: function() {
            return w && (clearTimeout(w), w = null), a === i.Running && (a = i.Paused, V("pause", v)), F;
        },
        end: A,
        tick: function(e) {
            e > 50 && (e = 50), g += e;
            let s = 0, u = !1;
            if (a !== i.Running) return F;
            if (f === o.Ease) {
                s = (0, _clampJs.clamp)(0, g / m, 1), u = 1 === s;
                const t = D === r.Reverse ? z : p;
                for(const n in v)v[n] = j[n] + (O[n] - j[n]) * t(s);
            }
            if (f === o.Spring) {
                const t = .001 * e;
                let i = 0;
                for(const e in v){
                    const o = O[e];
                    let r = v[e];
                    if ("number" != typeof o || isNaN(o) || "number" != typeof r || isNaN(r)) continue;
                    if (Math.abs(o - r) <= R) {
                        v[e] = o, C[e] = 0;
                        continue;
                    }
                    C[e] || ("object" == typeof d && "number" == typeof d[e] ? C[e] = d[e] : C[e] = "number" == typeof d ? d : 0);
                    let s = C[e];
                    s = (0, _clampJs.clamp)(-1 * Math.abs(y), s, Math.abs(y));
                    const u = s * b * h;
                    s += ((r > o ? -1 : 1) * (Math.abs(o - r) * S) - u) / b * t, r += s * t;
                    const a = v[e] > o ? r < o : r > o;
                    let c = Math.abs(s) < E && Math.abs(o - r) <= R;
                    M && a && (c = !0), c ? (r = o, s = 0) : i++, v[e] = r, C[e] = s;
                }
                u = !i;
            }
            const c = Object.assign({}, O);
            return V("step", v, j, O, s), u && a === i.Running && (0, _isEqualJs.isEqual)(O, c) && (a = i.Completed, A()), F;
        },
        getStartValues: function() {
            return j;
        },
        getCurrentValues: function() {
            return v;
        },
        getCurrentVelocities: function() {
            return C;
        },
        getEndValues: function() {
            return O;
        },
        destroy: function() {
            a = i.Destroyed, w && (clearTimeout(w), w = null), j = v = O = {}, s.delete(this);
        }
    };
    return F;
}
c.destroy = ()=>{
    for (const n of s)n.destroy();
    u && (cancelAnimationFrame(u), u = null);
}, c.Easings = {
    Linear: function(n) {
        return n;
    },
    EaseIn: function(n) {
        return 0 === n ? 0 : Math.pow(2, 10 * n - 10);
    },
    EaseOut: function(n) {
        return 1 === n ? 1 : 1 - Math.pow(2, -10 * n);
    },
    EaseInOut: function(n) {
        return 0 === n ? 0 : 1 === n ? 1 : n < .5 ? Math.pow(2, 20 * n - 10) / 2 : (2 - Math.pow(2, -20 * n + 10)) / 2;
    }
};

},{"../utils/clamp.js":"9oF9v","../utils/isEqual.js":"7UHV2","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7UHV2":[function(require,module,exports,__globalThis) {
/*! License details at fancyapps.com/license */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isEqual", ()=>n);
var _isPlainObjectJs = require("./isPlainObject.js");
function e(e) {
    return (0, _isPlainObjectJs.isPlainObject)(e) || Array.isArray(e);
}
function n(t, r) {
    const o = Object.keys(t), c = Object.keys(r);
    return o.length === c.length && o.every((o)=>{
        const c = t[o], i = r[o];
        return "function" == typeof c ? `${c}` == `${i}` : e(c) && e(i) ? n(c, i) : c === i;
    });
}

},{"./isPlainObject.js":"ecEyv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bbqaR":[function(require,module,exports,__globalThis) {
/*! License details at fancyapps.com/license */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Gestures", ()=>u);
parcelHelpers.export(exports, "getChangedPosition", ()=>t);
parcelHelpers.export(exports, "getCurrentPosition", ()=>e);
parcelHelpers.export(exports, "getDistance", ()=>o);
parcelHelpers.export(exports, "getMidpoint", ()=>n);
function e(e) {
    const t = [], n = "undefined" != typeof TouchEvent && e instanceof TouchEvent ? e.touches : e instanceof MouseEvent && "mouseup" !== e.type ? [
        e
    ] : [];
    for (const e of n)t.push({
        x: e.clientX,
        y: e.clientY,
        ts: Date.now()
    });
    return t;
}
function t(e) {
    const t = [], n = "undefined" != typeof TouchEvent && e instanceof TouchEvent ? e.changedTouches : e instanceof MouseEvent ? [
        e
    ] : [];
    for (const e of n)t.push({
        x: e.clientX,
        y: e.clientY,
        ts: Date.now()
    });
    return t;
}
function n(e) {
    const t = e[0], n = e[1] || t;
    return {
        x: (t.x + n.x) / 2,
        y: (t.y + n.y) / 2,
        ts: n.ts
    };
}
function o(e) {
    const t = e[0], n = e[1] || e[0];
    return t && n ? -1 * Math.sqrt((n.x - t.x) * (n.x - t.x) + (n.y - t.y) * (n.y - t.y)) : 0;
}
const s = (e)=>{
    e.cancelable && e.preventDefault();
}, i = {
    passive: !1
}, c = {
    panThreshold: 5,
    swipeThreshold: 3,
    ignore: [
        "textarea",
        "input",
        "select",
        "[contenteditable]",
        "[data-selectable]",
        "[data-draggable]"
    ]
};
let a = !1, r = !0;
const u = (u, l)=>{
    let d, f, h, v = Object.assign(Object.assign({}, c), l), p = [], m = [], E = [], g = !1, w = !1, y = !1, T = 0, b = 0, M = 0, x = 0, L = 0, P = 0, D = 0, X = 0, Y = 0, j = [], k = 0, R = 0;
    const z = new Map;
    function A(e) {
        const t = o(m), n = o(E), s = t && n ? t / n : 0, i = Math.abs(D) > Math.abs(X) ? D : X, c = {
            srcEvent: d,
            isPanRecognized: g,
            isSwipeRecognized: w,
            firstTouch: p,
            previousTouch: E,
            currentTouch: m,
            deltaX: M,
            deltaY: x,
            offsetX: L,
            offsetY: P,
            velocityX: D,
            velocityY: X,
            velocity: i,
            angle: Y,
            axis: h,
            scale: s,
            center: f
        };
        for (const t of z.get(e) || [])t(c);
    }
    function O(e) {
        const t = Date.now();
        j = j.filter((e)=>!e.ts || e.ts > t - 100), e && j.push(e);
    }
    function S() {
        if (D = 0, X = 0, j.length > 3) {
            const e = j[0], t = j[j.length - 1];
            if (e && t) {
                const n = t.x - e.x, o = t.y - e.y, s = e.ts && t.ts ? t.ts - e.ts : 0;
                s > 0 && (D = Math.abs(n) > 3 ? n / (s / 30) : 0, X = Math.abs(o) > 3 ? o / (s / 30) : 0);
            }
        }
    }
    function q(t) {
        if (t instanceof MouseEvent) {
            if (a) return;
        } else a = !0;
        const o = t.composedPath()[0], i = v.ignore.join(",");
        if (o.matches(i) || o.closest(i)) return;
        if ("undefined" != typeof MouseEvent && t instanceof MouseEvent && (!t.buttons || 0 !== t.button)) return;
        t instanceof MouseEvent && s(t);
        const c = Date.now(), r = c - (T || c);
        y = r > 0 && r <= 250, T = c, clearTimeout(k), d = t, t instanceof MouseEvent && (window.addEventListener("mousemove", C), window.addEventListener("mouseup", I)), window.addEventListener("blur", B), m = e(t), p = [
            ...m
        ], E = [], b = m.length, f = n(m), 1 === b && (g = !1, w = !1), b && O(n(m)), A("start");
    }
    function C(t) {
        var s;
        if (!p.length) return;
        if (t.defaultPrevented) return;
        d = t, E = [
            ...m
        ], m = e(t), b = m.length, f = n(m);
        const i = f, c = n(E);
        if (M = i.x - c.x, x = i.y - c.y, O(i), S(), A("move"), m.length > 1) {
            const e = o(m), t = o(E);
            Math.abs(e - t) >= .1 && A("pinch");
        }
        if (!g && p.length) {
            const e = n(p);
            L = i.x - e.x, P = i.y - e.y, g = Math.abs(L) > v.panThreshold || Math.abs(P) > v.panThreshold, g && (r = !1, clearTimeout(R), R = 0, Y = Math.abs(180 * Math.atan2(P, L) / Math.PI), h = Y > 45 && Y < 135 ? "y" : "x", p = [
                ...m
            ], E = [
                ...m
            ], null === (s = window.getSelection()) || void 0 === s || s.removeAllRanges(), A("panstart"));
        }
        g && (M || x) && A("pan");
    }
    function I(o) {
        if (d = o, !p.length) return;
        const s = e(o), i = t(o);
        if (b = s.length, f = n(i), i.length && O(n(i)), S(), E = [
            ...m
        ], m = [
            ...s
        ], p = [
            ...s
        ], s.length > 0) A("end"), g = !1, w = !1, j = [];
        else {
            const e = v.swipeThreshold;
            (Math.abs(D) > e || Math.abs(X) > e) && (w = !0), g && A("panend"), w && A("swipe"), g || w || (A("tap"), y ? A("doubleTap") : k = setTimeout(function() {
                A("singleTap");
            }, 250)), A("end"), F();
        }
    }
    function B() {
        clearTimeout(k), F(), g && A("panend"), A("end");
    }
    function F() {
        g = !1, w = !1, y = !1, b = 0, j = [], m = [], E = [], p = [], M = 0, x = 0, L = 0, P = 0, D = 0, X = 0, Y = 0, h = void 0, window.removeEventListener("mousemove", C), window.removeEventListener("mouseup", I), window.removeEventListener("blur", B), r || R || (R = setTimeout(()=>{
            r = !0, R = 0;
        }, 100));
    }
    function G(e) {
        const t = e.target;
        a = !1, t && !e.defaultPrevented && (r || (s(e), e.stopPropagation()));
    }
    const H = {
        init: function() {
            if (u) return u.addEventListener("click", G, i), u.addEventListener("mousedown", q, i), u.addEventListener("touchstart", q, i), u.addEventListener("touchmove", C, i), u.addEventListener("touchend", I), u.addEventListener("touchcancel", I), H;
        },
        on: function(e, t) {
            return function(e, t) {
                z.set(e, [
                    ...z.get(e) || [],
                    t
                ]);
            }(e, t), H;
        },
        off: function(e, t) {
            return z.has(e) && z.set(e, z.get(e).filter((e)=>e !== t)), H;
        },
        isPointerDown: ()=>b > 0,
        destroy: function() {
            clearTimeout(k), clearTimeout(R), R = 0, u && (u.removeEventListener("click", G, i), u.removeEventListener("mousedown", q, i), u.removeEventListener("touchstart", q, i), u.removeEventListener("touchmove", C, i), u.removeEventListener("touchend", I), u.removeEventListener("touchcancel", I)), u = null, F();
        }
    };
    return H;
};
u.isClickAllowed = ()=>r;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6Tg2o":[function(require,module,exports,__globalThis) {
/*! License details at fancyapps.com/license */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "en_EN", ()=>o);
const o = {
    IMAGE_ERROR: "This image couldn't be loaded. <br /> Please try again later.",
    MOVE_UP: "Move up",
    MOVE_DOWN: "Move down",
    MOVE_LEFT: "Move left",
    MOVE_RIGHT: "Move right",
    ZOOM_IN: "Zoom in",
    ZOOM_OUT: "Zoom out",
    TOGGLE_FULL: "Toggle zoom level",
    TOGGLE_1TO1: "Toggle zoom level",
    ITERATE_ZOOM: "Toggle zoom level",
    ROTATE_CCW: "Rotate counterclockwise",
    ROTATE_CW: "Rotate clockwise",
    FLIP_X: "Flip horizontally",
    FLIP_Y: "Flip vertically",
    RESET: "Reset"
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"f3yei":[function(require,module,exports,__globalThis) {
/*! License details at fancyapps.com/license */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "removeClass", ()=>s);
const s = (s, t = "")=>{
    s && s.classList && t.split(" ").forEach((t)=>{
        t && s.classList.remove(t);
    });
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iomoI":[function(require,module,exports,__globalThis) {
/*! License details at fancyapps.com/license */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "toggleClass", ()=>s);
const s = (s, t = "", c)=>{
    s && s.classList && t.split(" ").forEach((t)=>{
        t && s.classList.toggle(t, c || !1);
    });
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aEcLD":[function(require,module,exports,__globalThis) {
/*! License details at fancyapps.com/license */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Carousel", ()=>E);
var _isPlainObjectJs = require("../utils/isPlainObject.js");
var _isNodeJs = require("../utils/isNode.js");
var _isStringJs = require("../utils/isString.js");
var _getScrollableParentJs = require("../utils/getScrollableParent.js");
var _getDirectChildrenJs = require("../utils/getDirectChildren.js");
var _extendJs = require("../utils/extend.js");
var _mapJs = require("../utils/map.js");
var _strToHtmlJs = require("../utils/strToHtml.js");
var _clampJs = require("../utils/clamp.js");
var _addClassJs = require("../utils/addClass.js");
var _removeClassJs = require("../utils/removeClass.js");
var _toggleClassJs = require("../utils/toggleClass.js");
var _tweenJs = require("../libs/tween.js");
var _gesturesJs = require("../libs/gestures.js");
var _enENJs = require("./l10n/en_EN.js");
const g = (e)=>{
    e.cancelable && e.preventDefault();
}, m = {
    adaptiveHeight: !1,
    center: !0,
    classes: {
        container: "f-carousel",
        isEnabled: "is-enabled",
        isLTR: "is-ltr",
        isRTL: "is-rtl",
        isHorizontal: "is-horizontal",
        isVertical: "is-vertical",
        hasAdaptiveHeight: "has-adaptive-height",
        viewport: "f-carousel__viewport",
        slide: "f-carousel__slide",
        isSelected: "is-selected"
    },
    dragFree: !1,
    enabled: !0,
    errorTpl: '<div class="f-html">{{ERROR}}</div>',
    fill: !1,
    infinite: !0,
    initialPage: 0,
    l10n: (0, _enENJs.en_EN),
    rtl: !1,
    slides: [],
    slidesPerPage: "auto",
    spinnerTpl: '<div class="f-spinner"></div>',
    transition: "fade",
    tween: {
        clamp: !0,
        mass: 1,
        tension: 160,
        friction: 25,
        restDelta: 1,
        restSpeed: 1,
        velocity: 0
    },
    vertical: !1
};
let h, b = 0;
const E = (p, x = {}, y = {})=>{
    b++;
    let w, M, S, j, P, L = 0, A = Object.assign({}, m), O = Object.assign({}, m), T = {}, R = null, V = null, C = !1, H = !1, D = !1, $ = !1, z = "height", q = 0, F = !0, I = 0, k = 0, B = 0, N = 0, _ = "*", G = [], X = [];
    const Y = new Set;
    let W = [], J = [], K = 0, Q = 0, U = 0;
    function Z(e, ...t) {
        let n = O[e];
        return n && n instanceof Function ? n(He, ...t) : n;
    }
    function ee(e, t = []) {
        const n = Z("l10n") || {};
        e = String(e).replace(/\{\{(\w+)\}\}/g, (e, t)=>n[t] || e);
        for(let n = 0; n < t.length; n++)e = e.split(t[n][0]).join(t[n][1]);
        return e = e.replace(/\{\{(.*?)\}\}/g, (e, t)=>t);
    }
    const te = new Map;
    function ne(e, ...t) {
        const n = [
            ...te.get(e) || []
        ];
        O.on && n.push(O.on[e]);
        for (const e of n)e && e instanceof Function && e(He, ...t);
        "*" !== e && ne("*", e, ...t);
    }
    function ie() {
        var t, n;
        const i = (0, _extendJs.extend)({}, m, A);
        (0, _extendJs.extend)(i, m, A);
        let r = "";
        const l = A.breakpoints || {};
        if (l) for (const [e, t] of Object.entries(l))window.matchMedia(e).matches && (r += e, (0, _extendJs.extend)(i, t));
        if (void 0 === P || r !== P) {
            if (P = r, 0 !== L) {
                let e = null === (n = null === (t = J[I]) || void 0 === t ? void 0 : t.slides[0]) || void 0 === n ? void 0 : n.index;
                void 0 === e && (e = O.initialSlide), i.initialSlide = e, i.slides = [];
                for (const e of G)e.isVirtual && i.slides.push(e);
            }
            Re(), O = i, !1 !== O.enabled && (L = 0, ne("init"), function() {
                for (const [e, t] of Object.entries(Object.assign(Object.assign({}, y), O.plugins || {})))if (e && !T[e] && t instanceof Function) {
                    const n = t();
                    n.init(He, E), T[e] = n;
                }
                ne("initPlugins");
            }(), function() {
                if (!R) return;
                const t = Z("classes") || {};
                (0, _addClassJs.addClass)(R, t.container);
                const n = Z("style");
                if (n && (0, _isPlainObjectJs.isPlainObject)(n)) for (const [e, t] of Object.entries(n))R.style.setProperty(e, t);
                V = R.querySelector(`.${t.viewport}`), V || (V = document.createElement("div"), (0, _addClassJs.addClass)(V, t.viewport), V.append(...(0, _getDirectChildrenJs.getDirectChildren)(R, `.${t.slide}`)), R.insertAdjacentElement("afterbegin", V)), R.carousel = He, ne("initLayout");
            }(), function() {
                if (!V) return;
                const e = Z("classes") || {};
                G = [], [
                    ...(0, _getDirectChildrenJs.getDirectChildren)(V, `.${e.slide}`)
                ].forEach((e)=>{
                    e.parentElement && G.push(me(Object.assign({
                        el: e,
                        isVirtual: !1
                    }, e.dataset || {})));
                }), ge(Z("slides"));
                for (const e of G)ne("addSlide", e);
                for (const e of G){
                    const t = e.el;
                    (null == t ? void 0 : t.parentElement) && ((0, _addClassJs.addClass)(t, O.classes.slide), (0, _addClassJs.addClass)(t, e.class), Ae(e), ne("attachSlideEl", e));
                }
                ne("initSlides");
            }(), ye(), function() {
                if (R && (R.addEventListener("click", je, {
                    passive: !1
                }), document.addEventListener("mousemove", oe), !S)) {
                    let e = null;
                    S = new ResizeObserver((t)=>{
                        e || (e = requestAnimationFrame(()=>{
                            !function(e) {
                                var t;
                                if (!R) return;
                                if (0 === L) {
                                    const n = null === (t = e[0]) || void 0 === t ? void 0 : t.contentBoxSize[0], i = (null == n ? void 0 : n.blockSize) || 0, o = (null == n ? void 0 : n.inlineSize) || 0;
                                    return K = i, Q = o, L = 1, (0, _addClassJs.addClass)(R, (Z("classes") || {}).isEnabled), Te(), M = (0, _tweenJs.Tween)().on("start", ()=>{
                                        w && w.isPointerDown() || (le(), Te());
                                    }).on("step", (e)=>{
                                        const t = q;
                                        q = e.pos, q !== t && (F = !1, Te());
                                    }).on("end", (e)=>{
                                        (null == w ? void 0 : w.isPointerDown()) || (q = e.pos, M && !H && (q < B || q > N) ? M.spring({
                                            clamp: !0,
                                            mass: 1,
                                            tension: 200,
                                            friction: 25,
                                            velocity: 0,
                                            restDelta: 1,
                                            restSpeed: 1
                                        }).from({
                                            pos: q
                                        }).to({
                                            pos: (0, _clampJs.clamp)(B, q, N)
                                        }).start() : F || (F = !0, ne("settle")));
                                    }), se(), ae(), void ne("ready");
                                }
                                if (1 !== L) return;
                                const n = J.length;
                                ye(), se();
                                const i = R.getBoundingClientRect(), o = i.height, s = i.width;
                                n > 1 && ($ && Math.abs(o - K) < .5 || !$ && Math.abs(s - Q) < .5) || (K = o, Q = s, $ && !o || !$ && !s || R && V && (n === J.length && (null == w ? void 0 : w.isPointerDown()) || (Z("dragFree") && (H || q > B && q < N) ? (le(), Te()) : Oe(I, {
                                    transition: !1
                                }))));
                            }(t), e = null;
                        }));
                    }), S.observe(R);
                }
            }());
        }
    }
    function oe(e) {
        h = e;
    }
    function se() {
        if (!V) return;
        const e = Z("gestures");
        !1 !== e ? w || (w = (0, _gesturesJs.Gestures)(V, e).on("start", (e)=>{
            var t, n;
            if (!M) return;
            const { srcEvent: o } = e;
            $ && (0, _getScrollableParentJs.getScrollableParent)(o.target), M.pause(), M.getCurrentVelocities().pos = 0;
            const s = null === (t = J[I]) || void 0 === t ? void 0 : t.slides[0];
            if (s && Y.has(s.index) && s.el && (q = s.offset || 0, q += (function(e) {
                const t = window.getComputedStyle(e), n = new DOMMatrixReadOnly(t.transform);
                return {
                    width: n.m41 || 0,
                    height: n.m42 || 0
                };
            }(s.el)[z] || 0) * (D && !$ ? 1 : -1)), Me(), !H) (q < B || q > N) && M.spring({
                clamp: !0,
                mass: 1,
                tension: 500,
                friction: 25,
                velocity: (null === (n = M.getCurrentVelocities()) || void 0 === n ? void 0 : n.pos) || 0,
                restDelta: 1,
                restSpeed: 1
            }).from({
                pos: q
            }).to({
                pos: (0, _clampJs.clamp)(B, q, N)
            }).start();
        }).on("move", (e)=>{
            const { srcEvent: t, axis: n } = e, o = e.srcEvent.target;
            o && (0, _getScrollableParentJs.getScrollableParent)(o) || (n || (t.stopPropagation(), t.stopImmediatePropagation()), ("y" === n && $ || "x" === n && !$) && (g(t), t.stopPropagation()));
        }).on("panstart", (e)=>{
            (null == e ? void 0 : e.axis) === ($ ? "y" : "x") && (0, _addClassJs.addClass)(V, "is-dragging");
        }).on("panend", ()=>{
            (0, _removeClassJs.removeClass)(V, "is-dragging");
        }).on("pan", (e)=>{
            var t;
            const { deltaX: n, deltaY: i, currentTouch: o, axis: s } = e;
            if (!M) return;
            if (o.length > 1) return;
            if ("y" === s && !$ || "x" === s && $) return;
            const r = D && !$ ? 1 : -1;
            let l = $ ? i : n, a = (null == M ? void 0 : M.isRunning()) ? M.getEndValues().pos : q, c = 1;
            H || (a <= B && l * r < 0 ? (c = Math.max(.01, 1 - Math.abs(1 / fe() * Math.abs(a - B))), c *= .2) : a >= N && l * r > 0 && (c = Math.max(.01, 1 - Math.abs(1 / fe() * Math.abs(a - N))), c *= .2)), a += l * c * r, M.spring({
                clamp: !0,
                mass: 1,
                tension: 700,
                friction: 25,
                velocity: (null === (t = M.getCurrentVelocities()) || void 0 === t ? void 0 : t.pos) || 0,
                restDelta: 1,
                restSpeed: 1
            }).from({
                pos: q
            }).to({
                pos: a
            }).start();
        }).on("end", (e)=>{
            var t, n;
            const { axis: i, velocityX: o, velocityY: s, currentTouch: r } = e, l = J.length, c = Z("dragFree");
            if (r.length > 0 || !M) return;
            if (!l) return;
            const d = Z("vertical") ? s : o;
            let u = (null == M ? void 0 : M.isRunning()) ? M.getEndValues().pos : q;
            const f = D && !$ ? 1 : -1;
            if (u += d * (c ? 5 : 1) * f, !H && (d * f <= 0 && u < B || d * f >= 0 && u > N)) {
                let e = 0;
                return Math.abs(d) > 0 && (e = 2 * Math.abs(d), e = Math.min(.3 * fe(), e)), u = (0, _clampJs.clamp)(B + -1 * e, u, N + e), void M.spring({
                    clamp: !0,
                    mass: 1,
                    tension: 380,
                    friction: 25,
                    velocity: -1 * d,
                    restDelta: 1,
                    restSpeed: 1
                }).from({
                    pos: q
                }).to({
                    pos: u
                }).start();
            }
            if (c || (null === (t = T.Autoscroll) || void 0 === t ? void 0 : t.isEnabled())) return void (Math.abs(d) > 10 ? M.spring({
                clamp: !0,
                mass: 1,
                tension: 150,
                friction: 25,
                velocity: -1 * d,
                restDelta: 1,
                restSpeed: 1
            }).from({
                pos: q
            }).to({
                pos: u
            }).start() : M.isRunning() || F || (F = !0, ne("settle")));
            if (!c && !(null === (n = T.Autoscroll) || void 0 === n ? void 0 : n.isEnabled()) && (!e.offsetX && !e.offsetY || "y" === i && !$ || "x" === i && $)) return void Oe(I, {
                transition: "tween"
            });
            let v = de(u);
            Math.abs(d) > 10 && v === I && (v += d > 0 ? D && !$ ? 1 : -1 : D && !$ ? -1 : 1), Oe(v, {
                transition: "tween",
                tween: {
                    velocity: -1 * d
                }
            });
        }).init()) : w && (w.destroy(), w = void 0);
    }
    function re(e = "*") {
        var t;
        const n = [];
        for (const i of G)("*" === e || i.class && i.class.includes(e) || i.el && (null === (t = i.el) || void 0 === t ? void 0 : t.classList.contains(e))) && n.push(i);
        j = void 0, _ = e, X = [
            ...n
        ];
    }
    function le() {
        if (!M) return;
        const e = de((null == M ? void 0 : M.isRunning()) ? M.getEndValues().pos : q);
        e !== I && (j = I, I = e, Ae(), ae(), ce(), ne("change", I, j));
    }
    function ae() {
        var e;
        if (!R) return;
        (0, _toggleClassJs.toggleClass)(V, "is-draggable", !!w && J.length > 0);
        for (const e of R.querySelectorAll("[data-carousel-index]"))e.innerHTML = I + "";
        for (const e of R.querySelectorAll("[data-carousel-page]"))e.innerHTML = I + 1 + "";
        for (const e of R.querySelectorAll("[data-carousel-pages]"))e.innerHTML = J.length + "";
        for (const e of R.querySelectorAll("[data-carousel-go-prev]"))e.toggleAttribute("aria-disabled", !Ve()), Ve() ? e.removeAttribute("tabindex") : e.setAttribute("tabindex", "-1");
        for (const e of R.querySelectorAll("[data-carousel-go-next]"))e.toggleAttribute("aria-disabled", !Ce()), Ce() ? e.removeAttribute("tabindex") : e.setAttribute("tabindex", "-1");
        let t = !1;
        const n = null === (e = J[I]) || void 0 === e ? void 0 : e.slides[0];
        n && (n.downloadSrc || "image" === n.type && n.src) && (t = !0);
        for (const e of R.querySelectorAll("[data-carousel-download]"))e.toggleAttribute("aria-disabled", !t);
    }
    function ce(e) {
        var t;
        e || (e = null === (t = J[I]) || void 0 === t ? void 0 : t.slides[0]);
        const n = e.el;
        if (n) for (const t of n.querySelectorAll("[data-slide-index]"))t.innerHTML = e.index + 1 + "";
    }
    function de(e) {
        var t, n, i;
        if (!J.length || !M) return 0;
        const o = ve();
        let s = e;
        H ? s -= Math.floor((e - (null === (t = J[0]) || void 0 === t ? void 0 : t.pos)) / o) * o : s = (0, _clampJs.clamp)(null === (n = J[0]) || void 0 === n ? void 0 : n.pos, e, null === (i = J[J.length - 1]) || void 0 === i ? void 0 : i.pos);
        const r = new Map;
        let l = 0;
        for (const e of J){
            const t = Math.abs(e.pos - s), n = Math.abs(e.pos - s - o), i = Math.abs(e.pos - s + o), a = Math.min(t, n, i);
            r.set(l, a), l++;
        }
        const c = r.size > 0 ? [
            ...r.entries()
        ].reduce((e, t)=>t[1] < e[1] ? t : e) : [
            I,
            0
        ];
        return parseInt(c[0]);
    }
    function ue() {
        return U;
    }
    function fe() {
        return V && V.getBoundingClientRect()[z] || 0;
    }
    function ve(e = !0) {
        return X.reduce((e, t)=>e + t.dim, 0) + (X.length - (H && e ? 0 : 1)) * U;
    }
    function pe(e) {
        const t = ve();
        let n = fe();
        if (!V) return [];
        const i = [];
        if (!t || !n) return [];
        e = void 0 === e ? q : e, H && (e -= Math.floor(e / t) * t);
        let o = 0, s = 0;
        if (C) {
            const e = V.getBoundingClientRect();
            o = Math.abs(e.left), s = Math.abs(window.innerWidth - e.right);
        }
        let r = 0;
        for (let l of X){
            const a = (t = 0)=>{
                i.indexOf(l) > -1 || (l.pos = r - e + t || 0, l.offset + t > e - l.dim - o + .51 && l.offset + t < e + n + s - .51 && i.push(l));
            };
            l.offset = r, H && (a(t), a(-1 * t)), a(), r += l.dim + U;
        }
        return i;
    }
    function ge(e, t) {
        const n = [];
        for (const t of Array.isArray(e) ? e : [
            e
        ]){
            const e = me(Object.assign(Object.assign({}, t), {
                isVirtual: !0
            }));
            n.push(e);
        }
        G.splice(void 0 === t ? G.length : t, 0, ...n), xe();
        for (const e of n)he(e);
        return re(_), n;
    }
    function me(e) {
        return ((0, _isStringJs.isString)(e) || e instanceof HTMLElement) && (e = {
            html: e
        }), Object.assign({
            index: -1,
            el: void 0,
            class: "",
            isVirtual: !0,
            dim: 0,
            pos: 0,
            offset: 0,
            html: "",
            src: ""
        }, e);
    }
    function he(e) {
        if (!e) return;
        let t = e.el;
        t || (t = document.createElement("div"), e.el = t);
        const n = e.html ? e.html instanceof HTMLElement ? e.html : (0, _strToHtmlJs.stringToHtml)(e.html) : void 0;
        n && ((0, _addClassJs.addClass)(n, "f-html"), e.htmlEl = n, (0, _addClassJs.addClass)(t, "has-html"), t.append(n), ne("contentReady", e));
    }
    function be(e) {
        if (!V || !e) return;
        let t = e.el;
        if (t) {
            if (t.setAttribute("index", e.index + ""), t.parentElement !== V) {
                let n;
                (0, _addClassJs.addClass)(t, O.classes.slide), (0, _addClassJs.addClass)(t, e.class), Ae(e);
                for (const t of G)if (t.index > e.index) {
                    n = t.el;
                    break;
                }
                V.insertBefore(t, n && V.contains(n) ? n : null), ne("attachSlideEl", e);
            }
            return ce(e), t;
        }
    }
    function Ee(e) {
        const t = null == e ? void 0 : e.el;
        t && (t.remove(), we(t), ne("detachSlideEl", e));
    }
    function xe() {
        for(let e = 0; e < G.length; e++){
            const t = G[e], n = t.el;
            n && (t.index !== e && we(n), n.setAttribute("index", `${e}`)), t.index = e;
        }
    }
    function ye() {
        var e, n, i, o, s;
        if (!R || !V) return;
        D = Z("rtl"), $ = Z("vertical"), z = $ ? "height" : "width";
        const r = Z("classes");
        (0, _toggleClassJs.toggleClass)(R, r.isLTR, !D), (0, _toggleClassJs.toggleClass)(R, r.isRTL, D), (0, _toggleClassJs.toggleClass)(R, r.isHorizontal, !$), (0, _toggleClassJs.toggleClass)(R, r.isVertical, $), (0, _toggleClassJs.toggleClass)(R, r.hasAdaptiveHeight, Z("adaptiveHeight")), C = "visible" === window.getComputedStyle(V).getPropertyValue("overflow-" + ($ ? "y" : "x"));
        const l = V.getBoundingClientRect();
        if (!l.width && !l.height) return;
        U = V && parseFloat(getComputedStyle(V).getPropertyValue("--f-carousel-gap")) || 0;
        const d = function() {
            let e = 0;
            if (V) {
                let t = document.createElement("div");
                (0, _addClassJs.addClass)(t, O.classes.slide), V.appendChild(t), e = t.getBoundingClientRect()[z], t.remove(), t = void 0;
            }
            return e;
        }();
        for (const n of X){
            const i = n.el;
            let o = 0;
            if (!n.isVirtual && i && (0, _isNodeJs.isNode)(i)) {
                let t = !1;
                i.parentElement && i.parentElement === V || (V.appendChild(i), t = !0), o = i.getBoundingClientRect()[z], t && (null === (e = i.parentElement) || void 0 === e || e.removeChild(i));
            } else o = d;
            n.dim = o;
        }
        if (H = !1, Z("infinite")) {
            H = !0;
            const e = ve();
            let t = fe();
            if (C) {
                const e = V.getBoundingClientRect();
                t += e.left, t += e.right - e.width;
            }
            for(let i = 0; i < X.length; i++){
                const o = (null === (n = X[i]) || void 0 === n ? void 0 : n.dim) + U;
                if (e - o < t && e - o - t < o) {
                    H = !1;
                    break;
                }
            }
        }
        if (function() {
            var e;
            if (!R) return;
            xe();
            const t = fe(), n = ve(!1);
            let i = Z("slidesPerPage");
            i = "auto" === i ? 1 / 0 : parseFloat(i + ""), J = [];
            let o = 0, s = 0;
            for (const n of X)(!J.length || o + n.dim - t > .05 || s >= i) && (J.push({
                index: J.length,
                slides: [],
                dim: 0,
                offset: 0,
                pos: 0
            }), o = 0, s = 0), null === (e = J[J.length - 1]) || void 0 === e || e.slides.push(n), o += n.dim + U, s++;
            const r = Z("center"), l = Z("fill");
            let c = 0;
            for (const e of J){
                e.dim = (e.slides.length - 1) * U;
                for (const t of e.slides)e.dim += t.dim;
                e.offset = c, e.pos = c, !1 !== r && (e.pos -= .5 * (t - e.dim)), l && !H && n > t && (e.pos = (0, _clampJs.clamp)(0, e.pos, n - t)), c += e.dim + U;
            }
            const d = [];
            let u;
            for (const e of J){
                const t = Object.assign({}, e);
                u && Math.abs(t.pos - u.pos) < .1 ? (u.dim += t.dim, u.slides = [
                    ...u.slides,
                    ...t.slides
                ]) : (u = t, t.index = d.length, d.push(t));
            }
            J = d, ae();
        }(), B = (null === (i = J[0]) || void 0 === i ? void 0 : i.pos) || 0, N = (null === (o = J[J.length - 1]) || void 0 === o ? void 0 : o.pos) || 0, 0 === L) !function() {
            var e;
            j = void 0, I = Z("initialPage");
            const t = Z("initialSlide") || void 0;
            void 0 !== t && (I = He.getPageIndex(t) || 0), I = (0, _clampJs.clamp)(0, I, J.length - 1), q = (null === (e = J[I]) || void 0 === e ? void 0 : e.pos) || 0, k = q;
        }();
        else {
            const e = (null == M ? void 0 : M.isRunning()) ? M.getEndValues().pos : q;
            (e < B || e > N) && (I = (0, _clampJs.clamp)(0, I, J.length - 1), k = (null === (s = J[I || 0]) || void 0 === s ? void 0 : s.pos) || 0);
        }
        ne("refresh");
    }
    function we(e) {
        if (!e || !(0, _isNodeJs.isNode)(e)) return;
        const n = parseInt(e.getAttribute("index") || "-1");
        let i = "";
        for (const t of Array.from(e.classList)){
            const e = t.match(/^f-(\w+)(Out|In)$/);
            e && e[1] && (i = e[1] + "");
        }
        if (!e || !i) return;
        const o = [
            `f-${i}Out`,
            `f-${i}In`,
            "to-prev",
            "to-next",
            "from-prev",
            "from-next"
        ];
        e.removeEventListener("animationend", Se), (0, _removeClassJs.removeClass)(e, o.join(" ")), Y.delete(n);
    }
    function Me() {
        if (!V) return;
        const e = Y.size;
        for (const e of X)we(e.el);
        Y.clear(), e && Te();
    }
    function Se(e) {
        "f-" === e.animationName.substring(0, 2) && (we(e.target), Y.size || ((0, _removeClassJs.removeClass)(R, "in-transition"), !F && Math.abs(He.getPosition(!0) - k) < .5 && (F = !0, ne("settle"))), Te());
    }
    function je(e) {
        var t;
        if (e.defaultPrevented) return;
        const n = e.composedPath()[0];
        if (n.closest("[data-carousel-go-prev]")) return g(e), void He.prev();
        if (n.closest("[data-carousel-go-next]")) return g(e), void He.next();
        const i = n.closest("[data-carousel-go-to]");
        if (i) return g(e), void He.goTo(parseFloat(i.dataset.carouselGoTo || "") || 0);
        if (n.closest("[data-carousel-download]")) {
            g(e);
            const n = null === (t = J[I]) || void 0 === t ? void 0 : t.slides[0];
            if (n && (n.downloadSrc || "image" === n.type && n.src)) {
                const e = n.downloadFilename, t = document.createElement("a"), i = n.downloadSrc || n.src || "";
                t.href = i, t.target = "_blank", t.download = e || i, t.click();
            }
        } else ne("click", e);
    }
    function Pe(e) {
        var t;
        const n = e.el;
        n && (null === (t = n.querySelector(".f-spinner")) || void 0 === t || t.remove());
    }
    function Le(e) {
        var t;
        const n = e.el;
        n && (null === (t = n.querySelector(".f-html.is-error")) || void 0 === t || t.remove(), (0, _removeClassJs.removeClass)(n, "has-error"));
    }
    function Ae(e) {
        var t;
        e || (e = null === (t = J[I]) || void 0 === t ? void 0 : t.slides[0]);
        const i = null == e ? void 0 : e.el;
        if (!i) return;
        let o = Z("formatCaption", e);
        void 0 === o && (o = e.caption), o = o || "";
        const s = Z("captionEl");
        if (s && s instanceof HTMLElement) {
            if (e.index !== I) return;
            if ((0, _isStringJs.isString)(o) && (s.innerHTML = ee(o + "")), o instanceof HTMLElement) {
                if (o.parentElement === s) return;
                s.innerHTML = "", o.parentElement && (o = o.cloneNode(!0)), s.append(o);
            }
            return;
        }
        if (!o) return;
        let r = e.captionEl || i.querySelector(".f-caption");
        !r && o instanceof HTMLElement && o.classList.contains("f-caption") && (r = o), r || (r = document.createElement("div"), (0, _addClassJs.addClass)(r, "f-caption"), (0, _isStringJs.isString)(o) ? r.innerHTML = ee(o + "") : o instanceof HTMLElement && (o.parentElement && (o = o.cloneNode(!0)), r.append(o)));
        const l = `f-caption-${b}_${e.index}`;
        r.setAttribute("id", l), r.dataset.selectable = "true", (0, _addClassJs.addClass)(i, "has-caption"), i.setAttribute("aria-labelledby", l), e.captionEl = r, i.insertAdjacentElement("beforeend", r);
    }
    function Oe(t, i = {}) {
        var o, r;
        let { transition: l, tween: u } = Object.assign({
            transition: O.transition,
            tween: O.tween
        }, i || {});
        if (!R || !M) return;
        const f = J.length;
        if (!f) return;
        if (function(e, t) {
            var i, o, s, r;
            if (!(R && M && t && (0, _isStringJs.isString)(t) && "tween" !== t)) return !1;
            if ((null === (i = J[I]) || void 0 === i ? void 0 : i.slides.length) > 1) return !1;
            const l = J.length;
            let u = e > I ? 1 : -1;
            e = H ? (e % l + l) % l : (0, _clampJs.clamp)(0, e, l - 1), D && (u *= -1);
            const f = null === (o = J[I]) || void 0 === o ? void 0 : o.slides[0], v = null == f ? void 0 : f.index, p = null === (s = J[e]) || void 0 === s ? void 0 : s.slides[0], g = null == p ? void 0 : p.index, m = null === (r = J[e]) || void 0 === r ? void 0 : r.pos;
            if (void 0 === g || void 0 === v || v === g || q === m || Math.abs(fe() - ((null == p ? void 0 : p.dim) || 0)) > 1) return !1;
            F = !1, M.pause(), Me(), (0, _addClassJs.addClass)(R, "in-transition"), q = k = m;
            const h = be(f), b = be(p);
            return le(), h && (Y.add(v), h.style.transform = "", h.addEventListener("animationend", Se), (0, _removeClassJs.removeClass)(h, O.classes.isSelected), h.inert = !1, (0, _addClassJs.addClass)(h, `f-${t}Out to-${u > 0 ? "next" : "prev"}`)), b && (Y.add(g), b.style.transform = "", b.addEventListener("animationend", Se), (0, _addClassJs.addClass)(b, O.classes.isSelected), b.inert = !1, (0, _addClassJs.addClass)(b, `f-${t}In from-${u > 0 ? "prev" : "next"}`)), Te(), !0;
        }(t, l)) return;
        t = H ? (t % f + f) % f : (0, _clampJs.clamp)(0, t, f - 1), k = (null === (o = J[t || 0]) || void 0 === o ? void 0 : o.pos) || 0;
        const v = M.isRunning() ? M.getEndValues().pos : q;
        if (Math.abs(k - v) < 1) return q = k, I !== t && (Ae(), ae(), ce(), j = I, I = t, ne("change", I, j)), Te(), void (F || (F = !0, ne("settle")));
        if (M.pause(), Me(), H) {
            const e = ve(), t = Math.floor((v - (null === (r = J[0]) || void 0 === r ? void 0 : r.pos)) / e), n = k + t * e;
            k = [
                n + e,
                n,
                n - e
            ].reduce(function(e, t) {
                return Math.abs(t - v) < Math.abs(e - v) ? t : e;
            });
        }
        !1 !== l && (0, _isPlainObjectJs.isPlainObject)(u) ? M.spring((0, _extendJs.extend)({}, O.tween, u)).from({
            pos: q
        }).to({
            pos: k
        }).start() : (q = k, le(), Te(), F || (F = !0, ne("settle")));
    }
    function Te() {
        var e;
        if (!R || !V) return;
        const t = J[I];
        W = pe();
        const n = new Set;
        let i;
        const s = [];
        for (const o of X){
            if (o.isVirtual && !Y.has(o.index) && W.indexOf(o) < 0) continue;
            let r = be(o);
            if (!r) continue;
            s.push(o);
            const l = (null === (e = null == t ? void 0 : t.slides) || void 0 === e ? void 0 : e.indexOf(o)) > -1;
            if (l && n.add(r), Z("adaptiveHeight") && l) {
                const e = (r.firstElementChild || r).getBoundingClientRect().height;
                i = null == i ? e : Math.max(i, e);
            }
        }
        V && i && (V.style.height = `${i}px`), [
            ...(0, _getDirectChildrenJs.getDirectChildren)(V, `.${O.classes.slide}`)
        ].forEach((e)=>{
            const t = parseInt(e.getAttribute("index") || "-1"), i = G[t];
            i || e.remove();
            const o = n.has(e);
            if ((0, _toggleClassJs.toggleClass)(e, O.classes.isSelected, o), e.inert = W.indexOf(i) < 0, i.isVirtual && !Y.has(i.index) && W.indexOf(i) < 0) return void Ee(i);
            let s = i.pos ? Math.round(1e4 * i.pos) / 1e4 : 0, l = 0, a = 0, c = 0, d = 0, f = O.setTransform || void 0;
            Y.has(i.index) || (l = $ ? 0 : D ? -1 * s : s, a = $ ? s : 0, c = (0, _mapJs.map)(l, 0, i.dim, 0, 100), d = (0, _mapJs.map)(a, 0, i.dim, 0, 100)), f instanceof Function && !Y.has(i.index) ? f(He, i, {
                x: l,
                y: a,
                xPercent: c,
                yPercent: d
            }) : e.style.transform = l || a ? `translate3d(${c}%, ${d}%,0)` : "";
        }), ne("render", s);
    }
    function Re() {
        var e;
        null == R || R.removeEventListener("click", je), Me(), document.removeEventListener("mousemove", oe), null == S || S.disconnect(), S = void 0;
        for (const n of G)n.el && (0, _isNodeJs.isNode)(n.el) && (n.state = void 0, Pe(n), Le(n), Ee(n), n.isVirtual ? (null === (e = n.el) || void 0 === e || e.remove(), n.el = void 0) : (n.el.style.transform = "", null == V || V.appendChild(n.el)));
        for (const e of Object.values(T))null == e || e.destroy();
        T = {}, null == w || w.destroy(), w = void 0, null == M || M.destroy(), M = void 0;
        for (const [e, t] of Object.entries(O.classes || {}))"container" !== e && (0, _removeClassJs.removeClass)(R, t);
        (0, _removeClassJs.removeClass)(V, "is-draggable");
    }
    function Ve() {
        return H || I > 0;
    }
    function Ce() {
        return H || I < J.length - 1;
    }
    const He = {
        add: function(e, t) {
            var n, i;
            let o = q;
            const s = I, r = ve(), l = (null == M ? void 0 : M.isRunning()) ? M.getEndValues().pos : q, a = Math.floor((l - (null === (n = J[0]) || void 0 === n ? void 0 : n.pos)) / r), c = ge(e, t);
            for (const e of c)ne("addSlide", e);
            return re(_), ye(), M && (s === I && (o -= a * r), k = (null === (i = J[I || 0]) || void 0 === i ? void 0 : i.pos) || 0, o === k ? q = k : M.spring({
                clamp: !0,
                mass: 1,
                tension: 300,
                friction: 25,
                restDelta: 1,
                restSpeed: 1
            }).from({
                pos: o
            }).to({
                pos: k
            }).start()), Te(), He;
        },
        canGoPrev: Ve,
        canGoNext: Ce,
        destroy: function() {
            return ne("destroy"), window.removeEventListener("resize", ie), Re(), te.clear(), R = null, J = [], G = [], O = Object.assign({}, m), T = {}, X = [], P = "", _ = "*", L = 2, He;
        },
        emit: ne,
        filter: function(e = "*") {
            return re(e), ye(), Te(), ne("filter", e), He;
        },
        getContainer: function() {
            return R;
        },
        getGapDim: ue,
        getGestures: function() {
            return w;
        },
        getLastMouseMove: function() {
            return h;
        },
        getOption: function(e) {
            return Z(e);
        },
        getOptions: function() {
            return O;
        },
        getPage: function() {
            return J[I];
        },
        getPageIndex: function(e) {
            if (void 0 !== e) {
                for (const t of J || [])for (const n of t.slides)if (n.index === e) return t.index;
                return -1;
            }
            return I;
        },
        getPageProgress: function(e, t) {
            var n;
            void 0 === e && (e = I);
            const i = J[e];
            if (!i) return e > I ? -1 : 1;
            const o = ve(), s = ue();
            let r = i.pos, l = He.getPosition();
            if (H && !0 !== t) {
                const e = Math.floor((l - (null === (n = J[0]) || void 0 === n ? void 0 : n.pos)) / o);
                l -= e * o, r = [
                    r + o,
                    r,
                    r - o
                ].reduce(function(e, t) {
                    return Math.abs(t - l) < Math.abs(e - l) ? t : e;
                });
            }
            return (l - r) / (i.dim + s);
        },
        getPageVisibility: function(e) {
            var t;
            void 0 === e && (e = I);
            const n = J[e];
            if (!n) return e > I ? -1 : 1;
            const i = He.getPosition(), o = fe();
            let s = n.pos;
            if (H) {
                const e = He.getPosition(), n = ve(), i = s + Math.floor((e - (null === (t = J[0]) || void 0 === t ? void 0 : t.pos)) / n) * n;
                s = [
                    i + n,
                    i,
                    i - n
                ].reduce(function(t, n) {
                    return Math.abs(n - e) < Math.abs(t - e) ? n : t;
                });
            }
            return s > i && s + n.dim < i + o ? 1 : s < i ? (s + n.dim - i) / n.dim : s + n.dim > i + o ? (i + o - s) / n.dim : 0;
        },
        getPages: function() {
            return J;
        },
        getPlugins: function() {
            return T;
        },
        getPosition: function(e) {
            var t;
            let n = q;
            if (H && !0 !== e) {
                const e = ve();
                n -= Math.floor((q - (null === (t = J[0]) || void 0 === t ? void 0 : t.pos) || 0) / e) * e;
            }
            return n;
        },
        getSlides: function() {
            return G;
        },
        getState: function() {
            return L;
        },
        getTotalSlideDim: ve,
        getTween: function() {
            return M;
        },
        getViewport: function() {
            return V;
        },
        getViewportDim: fe,
        getVisibleSlides: function(e) {
            return void 0 === e ? W : pe(e);
        },
        goTo: Oe,
        hasNavigated: function() {
            return void 0 !== j;
        },
        hideError: Le,
        hideLoading: Pe,
        init: function() {
            if (!p || !(0, _isNodeJs.isNode)(p)) throw new Error("No Element found");
            return 0 !== L && (Re(), L = 0), R = p, A = x, window.removeEventListener("resize", ie), A.breakpoints && window.addEventListener("resize", ie), ie(), He;
        },
        isInfinite: function() {
            return H;
        },
        isInTransition: function() {
            return Y.size > 0;
        },
        isRTL: function() {
            return D;
        },
        isSettled: function() {
            return F;
        },
        isVertical: function() {
            return $;
        },
        localize: function(e, t = []) {
            return ee(e, t);
        },
        next: function(e = {}) {
            return Oe(I + 1, e), He;
        },
        off: function(e, t) {
            for (const n of e instanceof Array ? e : [
                e
            ])te.has(n) && te.set(n, te.get(n).filter((e)=>e !== t));
            return He;
        },
        on: function(e, t) {
            for (const n of e instanceof Array ? e : [
                e
            ])te.set(n, [
                ...te.get(n) || [],
                t
            ]);
            return He;
        },
        prev: function(e = {}) {
            return Oe(I - 1, e), He;
        },
        remove: function(e) {
            void 0 === e && (e = G.length - 1);
            const t = G[e];
            return t && (ne("removeSlide", t), t.el && (we(t.el), t.el.remove(), t.el = void 0), G.splice(e, 1), re(_), ye(), Te()), He;
        },
        setPosition: function(e) {
            q = e, le(), Te();
        },
        showError: function(e, t) {
            Pe(e), Le(e);
            const n = e.el;
            if (n) {
                const i = document.createElement("div");
                (0, _addClassJs.addClass)(i, "f-html"), (0, _addClassJs.addClass)(i, "is-error"), i.innerHTML = ee(t || "<p>{{ERROR}}</p>"), e.htmlEl = i, (0, _addClassJs.addClass)(n, "has-html"), (0, _addClassJs.addClass)(n, "has-error"), n.insertAdjacentElement("afterbegin", i), ne("contentReady", e);
            }
            return He;
        },
        showLoading: function(e) {
            const t = e.el, n = null == t ? void 0 : t.querySelector(".f-spinner");
            if (!t || n) return He;
            const i = Z("spinnerTpl"), o = (0, _strToHtmlJs.stringToHtml)(i);
            return o && ((0, _addClassJs.addClass)(o, "f-spinner"), t.insertAdjacentElement("beforeend", o)), He;
        },
        version: "6.0.29"
    };
    return He;
};
E.l10n = {
    en_EN: (0, _enENJs.en_EN)
}, E.getDefaults = ()=>m;

},{"../utils/isPlainObject.js":"ecEyv","../utils/isNode.js":"hlbcb","../utils/isString.js":"9P3iT","../utils/getScrollableParent.js":"2MCad","../utils/getDirectChildren.js":"50wKJ","../utils/extend.js":"ke5NQ","../utils/map.js":"2Cp1k","../utils/strToHtml.js":"jH4Nk","../utils/clamp.js":"9oF9v","../utils/addClass.js":"f0d1w","../utils/removeClass.js":"f3yei","../utils/toggleClass.js":"iomoI","../libs/tween.js":"fL6Bw","../libs/gestures.js":"bbqaR","./l10n/en_EN.js":"56OOv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"50wKJ":[function(require,module,exports,__globalThis) {
/*! License details at fancyapps.com/license */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getDirectChildren", ()=>e);
const e = (e, o)=>{
    let t = [];
    return e.childNodes.forEach((e)=>{
        e.nodeType !== Node.ELEMENT_NODE || o && !e.matches(o) || t.push(e);
    }), t;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"56OOv":[function(require,module,exports,__globalThis) {
/*! License details at fancyapps.com/license */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "en_EN", ()=>o);
var _enENJs = require("../../panzoom/l10n/en_EN.js");
const o = Object.assign(Object.assign({}, (0, _enENJs.en_EN)), {
    ERROR: "Something went wrong. <br /> Please try again later.",
    NEXT: "Next page",
    PREV: "Previous page",
    GOTO: "Go to page #%d",
    DOWNLOAD: "Download",
    TOGGLE_FULLSCREEN: "Toggle full-screen mode",
    TOGGLE_EXPAND: "Toggle full-size mode",
    TOGGLE_THUMBS: "Toggle thumbnails",
    TOGGLE_AUTOPLAY: "Toggle slideshow"
});

},{"../../panzoom/l10n/en_EN.js":"6Tg2o","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cvQyE":[function(require,module,exports,__globalThis) {
/*! License details at fancyapps.com/license */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Zoomable", ()=>s);
var _isPlainObjectJs = require("../utils/isPlainObject.js");
var _isStringJs = require("../utils/isString.js");
var _replaceAllJs = require("../utils/replaceAll.js");
var _panzoomJs = require("../panzoom/panzoom.js");
const a = {
    tpl: (t)=>`<img class="f-panzoom__content" \n    ${t.srcset ? 'data-lazy-srcset="{{srcset}}"' : ""} \n    ${t.sizes ? 'data-lazy-sizes="{{sizes}}"' : ""} \n    data-lazy-src="{{src}}" alt="{{alt}}" />`
}, s = ()=>{
    let s;
    function l(e, o) {
        const n = null == s ? void 0 : s.getOptions().Zoomable;
        let i = ((0, _isPlainObjectJs.isPlainObject)(n) ? Object.assign(Object.assign({}, a), n) : a)[e];
        return i && "function" == typeof i && o ? i(o) : i;
    }
    function c() {
        s && (s.on("addSlide", u), s.on("removeSlide", f), s.on("attachSlideEl", m), s.on("click", d), s.on("change", r));
    }
    function r() {
        g();
    }
    function d(t, e) {
        const o = e.target;
        o && !e.defaultPrevented && o.dataset.panzoomAction && p(o.dataset.panzoomAction);
    }
    function u(t, i) {
        if (!s) return;
        const a = i.el;
        if (!a) return;
        const c = i.src || i.lazySrc || "", r = i.alt || i.caption || `Image #${i.index}`, d = i.srcset || i.lazySrcset || "", u = i.sizes || i.lazySizes || "";
        if (c && (0, _isStringJs.isString)(c) && !i.html && (!i.type || "image" === i.type)) {
            i.type = "image", i.thumbSrc = i.thumbSrc || c;
            let t = l("tpl", i);
            t = (0, _replaceAllJs.replaceAll)(t, "{{src}}", c + ""), t = (0, _replaceAllJs.replaceAll)(t, "{{alt}}", r + ""), t = (0, _replaceAllJs.replaceAll)(t, "{{srcset}}", d + ""), t = (0, _replaceAllJs.replaceAll)(t, "{{sizes}}", u + ""), a.insertAdjacentHTML("afterbegin", t);
        }
        if (!a.querySelector(".f-panzoom__content")) return;
        const f = i.width && "auto" !== i.width ? parseFloat(i.width + "") : "auto", m = i.height && "auto" !== i.height ? parseFloat(i.height + "") : "auto", p = (0, _panzoomJs.Panzoom)(a, Object.assign({
            width: f,
            height: m,
            classes: {
                container: "f-zoomable"
            },
            event: ()=>null == s ? void 0 : s.getLastMouseMove(),
            spinnerTpl: ()=>(null == s ? void 0 : s.getOption("spinnerTpl")) || ""
        }, l("Panzoom")));
        p.on("*", (t, e, ...o)=>{
            s && ("loading" === e && (i.state = 0), "loaded" === e && (i.state = 1), "error" === e && (i.state = 2, null == s || s.showError(i, "{{IMAGE_ERROR}}")), s.emit(`panzoom:${e}`, i, ...o), "ready" === e && s.emit("contentReady", i), i.index === (null == s ? void 0 : s.getPageIndex()) && g());
        }), i.panzoomRef = p;
    }
    function f(t, e) {
        e.panzoomRef && (e.panzoomRef.destroy(), e.panzoomRef = void 0);
    }
    function m(t, e) {
        const o = e.panzoomRef;
        if (o) switch(o.getState()){
            case 0:
                o.init();
                break;
            case 3:
                o.execute((0, _panzoomJs.PanzoomAction).ZoomTo, Object.assign(Object.assign({}, o.getStartPosition()), {
                    velocity: 0
                }));
        }
    }
    function g() {
        var t;
        const e = null == s ? void 0 : s.getContainer();
        if (!e) return;
        const o = null === (t = null == s ? void 0 : s.getPage()) || void 0 === t ? void 0 : t.slides[0].panzoomRef, n = (null == o ? void 0 : o.canZoomIn()) || !1, a = (null == o ? void 0 : o.canZoomOut()) || !1, l = (null == o ? void 0 : o.isFullsize()) || !1, c = !o || 3 !== (null == o ? void 0 : o.getState());
        for (const t of (null == e ? void 0 : e.querySelectorAll("[data-panzoom-action]")) || []){
            const e = t.dataset.panzoomAction;
            let o = !1;
            if (c) o = !0;
            else switch(e){
                case (0, _panzoomJs.PanzoomAction).ZoomIn:
                    n || (o = !0);
                    break;
                case (0, _panzoomJs.PanzoomAction).ZoomOut:
                    a || (o = !0);
                    break;
                case (0, _panzoomJs.PanzoomAction).ToggleFull:
                    n || a || (o = !0);
                    const e1 = t.querySelector("g");
                    e1 && (e1.style.display = l ? "none" : "");
                    break;
                case (0, _panzoomJs.PanzoomAction).ToggleCover:
                case (0, _panzoomJs.PanzoomAction).ToggleMax:
                    n || a || (o = !0);
            }
            o ? (t.setAttribute("aria-disabled", ""), t.setAttribute("tabindex", "-1")) : (t.removeAttribute("aria-disabled"), t.removeAttribute("tabindex"));
        }
    }
    function p(t, ...e) {
        var o;
        null === (o = null == s ? void 0 : s.getPage().slides[0].panzoomRef) || void 0 === o || o.execute(t, ...e);
    }
    return {
        init: function(t) {
            s = t, !1 !== s.getOptions().Zoomable && s.on("initPlugins", c);
        },
        destroy: function() {
            if (s) {
                s.off("addSlide", u), s.off("removeSlide", f), s.off("attachSlideEl", m), s.off("click", d), s.off("change", r);
                for (const t of s.getSlides())f(0, t);
            }
            s = void 0;
        },
        execute: p
    };
};

},{"../utils/isPlainObject.js":"ecEyv","../utils/isString.js":"9P3iT","../utils/replaceAll.js":"iW7fG","../panzoom/panzoom.js":"fzhNf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iW7fG":[function(require,module,exports,__globalThis) {
/*! License details at fancyapps.com/license */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "replaceAll", ()=>n);
const n = function(n = "", t = "", o = "") {
    return n.split(t).join(o);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aMNI3":[function(require,module,exports,__globalThis) {
/*! License details at fancyapps.com/license */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Sync", ()=>i);
var _isPlainObjectJs = require("../utils/isPlainObject.js");
const e = {
    syncOnChange: !1,
    syncOnClick: !0,
    syncOnHover: !1
}, i = ()=>{
    let i, t;
    function o() {
        const t = null == i ? void 0 : i.getOptions().Sync;
        return (0, _isPlainObjectJs.isPlainObject)(t) ? Object.assign(Object.assign({}, e), t) : e;
    }
    function s(n) {
        var e, s, l;
        i && n && (t = n, i.getOptions().classes = Object.assign(Object.assign({}, i.getOptions().classes), {
            isSelected: ""
        }), i.getOptions().initialSlide = (null === (s = null === (e = t.getPage()) || void 0 === e ? void 0 : e.slides[0]) || void 0 === s ? void 0 : s.index) || 0, o().syncOnChange && i.on("change", c), o().syncOnClick && i.on("click", g), o().syncOnHover && (null === (l = i.getViewport()) || void 0 === l || l.addEventListener("mouseover", u)), function() {
            if (!i || !t) return;
            i.on("ready", d), i.on("refresh", a), t.on("change", r), t.on("filter", f);
        }());
    }
    function l() {
        const n = o().target;
        i && n && s(n);
    }
    function d() {
        v();
    }
    function c() {
        var n;
        if (i && t) {
            const e = (null === (n = i.getPage()) || void 0 === n ? void 0 : n.slides) || [], o = t.getPageIndex(e[0].index || 0);
            o > -1 && t.goTo(o, i.hasNavigated() ? void 0 : {
                tween: !1,
                transition: !1
            }), v();
        }
    }
    function r() {
        var n;
        if (i && t) {
            const e = i.getPageIndex((null === (n = t.getPage()) || void 0 === n ? void 0 : n.slides[0].index) || 0);
            e > -1 && i.goTo(e, t.hasNavigated() ? void 0 : {
                tween: !1,
                transition: !1
            }), v();
        }
    }
    function g(n, e) {
        var o;
        if (!i || !t) return;
        if (null === (o = i.getTween()) || void 0 === o ? void 0 : o.isRunning()) return;
        const s = null == i ? void 0 : i.getOptions().classes.slide;
        if (!s) return;
        const l = s ? e.target.closest(`.${s}`) : null;
        if (l) {
            const n = parseInt(l.getAttribute("index") || "") || 0, e = t.getPageIndex(n);
            t.goTo(e);
        }
    }
    function u(n) {
        i && g(0, n);
    }
    function a() {
        var n;
        if (i && t) {
            const e = i.getPageIndex((null === (n = t.getPage()) || void 0 === n ? void 0 : n.slides[0].index) || 0);
            e > -1 && i.goTo(e, {
                tween: !1,
                transition: !1
            }), v();
        }
    }
    function f(n, e) {
        i && t && (i.filter(e), r());
    }
    function v() {
        var n, e, o;
        if (!t) return;
        const s = (null === (e = null === (n = t.getPage()) || void 0 === n ? void 0 : n.slides[0]) || void 0 === e ? void 0 : e.index) || 0;
        for (const n of (null == i ? void 0 : i.getSlides()) || [])null === (o = n.el) || void 0 === o || o.classList.toggle("is-selected", n.index === s);
    }
    return {
        init: function(n) {
            i = n, i.on("initSlides", l);
        },
        destroy: function() {
            var n;
            null == i || i.off("ready", d), null == i || i.off("refresh", a), null == i || i.off("change", c), null == i || i.off("click", g), null === (n = null == i ? void 0 : i.getViewport()) || void 0 === n || n.removeEventListener("mouseover", u), null == t || t.off("change", r), null == t || t.off("filter", f), t = void 0, null == i || i.off("initSlides", l), i = void 0;
        },
        getTarget: function() {
            return t;
        }
    };
};

},{"../utils/isPlainObject.js":"ecEyv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lIfuM":[function(require,module,exports,__globalThis) {
/*! License details at fancyapps.com/license */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Lazyload", ()=>l);
var _isPlainObjectJs = require("../utils/isPlainObject.js");
const t = {
    showLoading: !0,
    preload: 1
}, a = "is-lazyloading", s = "is-lazyloaded", l = ()=>{
    let l;
    function n() {
        const a = null == l ? void 0 : l.getOptions().Lazyload;
        return (0, _isPlainObjectJs.isPlainObject)(a) ? Object.assign(Object.assign({}, t), a) : t;
    }
    function o(e) {
        var t;
        const o = e.el;
        if (!o) return;
        const i = "[data-lazy-src],[data-lazy-srcset],[data-lazy-bg]", d = Array.from(o.querySelectorAll(i));
        o.matches(i) && d.push(o);
        for (const o of d){
            const i = o.dataset.lazySrc, d = o.dataset.lazySrcset, r = o.dataset.lazySizes, c = o.dataset.lazyBg, u = (o instanceof HTMLImageElement || o instanceof HTMLSourceElement) && (i || d), f = o instanceof HTMLElement && c;
            if (!u && !f) continue;
            const m = i || d || c;
            if (m) {
                if (u && m) {
                    const c = null === (t = o.parentElement) || void 0 === t ? void 0 : t.classList.contains("f-panzoom__wrapper");
                    n().showLoading && (null == l || l.showLoading(e)), o.addEventListener("load", ()=>{
                        null == l || l.hideLoading(e), o instanceof HTMLImageElement ? o.decode().then(()=>{
                            o.classList.remove(a), o.classList.add(s);
                        }) : (o.classList.remove(a), o.classList.add(s)), c || null == l || l.emit("lazyLoad:loaded", e, o, m);
                    }), o.addEventListener("error", ()=>{
                        null == l || l.hideLoading(e), o.classList.remove(a), o.classList.add("has-lazyerror"), c || null == l || l.emit("lazyLoad:error", e, o, m);
                    }), o.classList.add("f-lazyload"), o.classList.add(a), c || null == l || l.emit("lazyLoad:load", e, o, m), i && (o.src = i), d && (o.srcset = d), r && (o.sizes = r);
                } else if (f) {
                    if (!document.body.contains(o)) document.createElement("img").src = c;
                    o.style.backgroundImage = `url('${c}')`;
                }
                delete o.dataset.lazySrc, delete o.dataset.lazySrcset, delete o.dataset.lazySizes, delete o.dataset.lazyBg;
            }
        }
    }
    function i() {
        if (!l) return;
        const e = [
            ...l.getVisibleSlides()
        ], t = n().preload;
        if (t > 0) {
            const a = l.getPosition(), s = l.getViewportDim();
            e.push(...l.getVisibleSlides(a + s * t), ...l.getVisibleSlides(a - s * t));
        }
        for (const t of e)o(t);
    }
    return {
        init: function(e) {
            l = e, l.on("render", i);
        },
        destroy: function() {
            null == l || l.off("render", i), l = void 0;
        }
    };
};

},{"../utils/isPlainObject.js":"ecEyv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4gaNo":[function(require,module,exports,__globalThis) {
/*! License details at fancyapps.com/license */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Arrows", ()=>s);
var _addClassJs = require("../utils/addClass.js");
var _isPlainObjectJs = require("../utils/isPlainObject.js");
var _strToHtmlJs = require("../utils/strToHtml.js");
var _toggleClassJs = require("../utils/toggleClass.js");
const r = {
    prevTpl: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M15 3l-9 9 9 9"></path></svg>',
    nextTpl: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M9 3l9 9-9 9"></path></svg>'
}, s = ()=>{
    let s, i, l;
    function a() {
        const t = null == s ? void 0 : s.getOptions().Arrows;
        return (0, _isPlainObjectJs.isPlainObject)(t) ? Object.assign(Object.assign({}, r), t) : r;
    }
    function u(e) {
        if (!s) return;
        const o = `<button data-carousel-go-${e} tabindex="0" class="f-button is-arrow is-${e}" title="{{${e.toUpperCase()}}}">` + a()[`${e}Tpl`] + "</button", r = (0, _strToHtmlJs.stringToHtml)(s.localize(o)) || void 0;
        return r && (0, _addClassJs.addClass)(r, a()[`${e}Class`]), r;
    }
    function g() {
        var t;
        null == i || i.remove(), i = void 0, null == l || l.remove(), l = void 0, null === (t = null == s ? void 0 : s.getContainer()) || void 0 === t || t.classList.remove("has-arrows");
    }
    function c() {
        s && !1 !== s.getOptions().Arrows && s.getPages().length > 1 ? (!function() {
            if (!s) return;
            const t = s.getViewport();
            t && (i || (i = u("prev"), i && t.insertAdjacentElement("beforebegin", i)), l || (l = u("next"), l && t.insertAdjacentElement("afterend", l)), (0, _toggleClassJs.toggleClass)(s.getContainer(), "has-arrows", !(!i && !l)));
        }(), s && (null == i || i.toggleAttribute("aria-disabled", !s.canGoPrev()), null == l || l.toggleAttribute("aria-disabled", !s.canGoNext()))) : g();
    }
    return {
        init: function(t) {
            s = t.on([
                "change",
                "refresh"
            ], c);
        },
        destroy: function() {
            g(), null == s || s.off([
                "change",
                "refresh"
            ], c), s = void 0;
        }
    };
};

},{"../utils/addClass.js":"f0d1w","../utils/isPlainObject.js":"ecEyv","../utils/strToHtml.js":"jH4Nk","../utils/toggleClass.js":"iomoI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1mbIc":[function(require,module,exports,__globalThis) {
/*! License details at fancyapps.com/license */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Toolbar", ()=>r);
parcelHelpers.export(exports, "ToolbarColumn", ()=>l);
var _isPlainObjectJs = require("../utils/isPlainObject.js");
var _isStringJs = require("../utils/isString.js");
var _strToHtmlJs = require("../utils/strToHtml.js");
var _buttonsJs = require("../shared/buttons.js");
var _extendJs = require("../utils/extend.js");
var l;
!function(t) {
    t.Left = "left", t.middle = "middle", t.right = "right";
}(l || (l = {}));
const s = Object.assign({
    counter: {
        tpl: '<div class="f-counter"><span data-carousel-page></span>/<span data-carousel-pages></span></div>'
    },
    download: {
        tpl: '<button data-carousel-download class="f-button" title="{{DOWNLOAD}}"><svg><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2M7 11l5 5 5-5M12 4v12"/></svg></button>'
    },
    autoplay: {
        tpl: '<button data-autoplay-action="toggle" class="f-button" title="{{TOGGLE_AUTOPLAY}}"><svg><g><path d="M5 3.5 19 12 5 20.5Z"/></g><g><path d="M8 4v15M17 4v15"/></g></svg></button>'
    },
    thumbs: {
        tpl: '<button data-thumbs-action="toggle" class="f-button" title="{{TOGGLE_THUMBS}}"><svg><rect width="18" height="14" x="3" y="3" rx="2"/><path d="M4 21h1M9 21h1M14 21h1M19 21h1"/></svg></button>'
    }
}, (0, _buttonsJs.PanzoomButtons)), a = {
    absolute: !1,
    display: {
        left: [],
        middle: [
            "zoomIn",
            "zoomOut",
            "toggle1to1",
            "rotateCCW",
            "rotateCW",
            "flipX",
            "flipY",
            "reset"
        ],
        right: []
    },
    enabled: "auto",
    items: {}
}, r = ()=>{
    let l, r;
    function u(e) {
        const o = null == l ? void 0 : l.getOptions().Toolbar;
        let n = ((0, _isPlainObjectJs.isPlainObject)(o) ? Object.assign(Object.assign({}, a), o) : a)[e];
        return n && "function" == typeof n && l ? n(l) : n;
    }
    function d() {
        var t, a, d, c;
        if (!(null == l ? void 0 : l.getOptions().Toolbar)) return;
        if (!l || r) return;
        let f = u("enabled");
        if (!f) return;
        const g = u("absolute"), p = l.getSlides().length > 1;
        let b = !1, m = !1;
        for (const t of l.getSlides())t.panzoomRef && (b = !0), (t.downloadSrc || "image" === t.type && t.src) && (m = !0);
        const v = (null === (t = l.getPlugins().Thumbs) || void 0 === t ? void 0 : t.isEnabled()) || !1, h = p && l.getPlugins().Autoplay || !1, y = l.getPlugins().Fullscreen && (document.fullscreenEnabled || document.webkitFullscreenEnabled);
        if ("auto" === f && (f = b), !f) return;
        r = (null === (a = l.getContainer()) || void 0 === a ? void 0 : a.querySelector(".f-carousel__toolbar")) || void 0, r || (r = document.createElement("div"), r.classList.add("f-carousel__toolbar"));
        const E = u("display"), j = (0, _extendJs.extend)({}, s, u("items"));
        for (const t of [
            "left",
            "middle",
            "right"
        ]){
            const i = E[t] || [], s = document.createElement("div");
            s.classList.add("f-carousel__toolbar__column"), s.classList.add(`is-${t}`);
            for (const t of i){
                let i;
                if ((0, _isStringJs.isString)(t)) {
                    if ("counter" === t && !p) continue;
                    if ("autoplay" === t && !h) continue;
                    if ((0, _buttonsJs.PanzoomButtons)[t] && !b) continue;
                    if ("fullscreen" === t && !y) continue;
                    if ("thumbs" === t && !v) continue;
                    if ("download" === t && !m) continue;
                    i = j[t];
                }
                if ("object" == typeof t && (i = t), i && i.tpl) {
                    let t = l.localize(i.tpl);
                    t = t.split("<svg>").join('<svg tabindex="-1" width="24" height="24" viewBox="0 0 24 24">');
                    const e = (0, _strToHtmlJs.stringToHtml)(t);
                    e && ("function" == typeof i.click && l && e.addEventListener("click", (t)=>{
                        t.preventDefault(), t.stopPropagation(), "function" == typeof i.click && l && i.click(l, t);
                    }), s.append(e));
                }
            }
            r.append(s);
        }
        if (r.childElementCount && (!0 === g && r.classList.add("is-absolute"), null === (d = l.getContainer()) || void 0 === d || d.classList.add("has-toolbar"), !r.parentElement)) {
            const t = u("parentEl");
            t ? t.insertAdjacentElement("afterbegin", r) : null === (c = l.getViewport()) || void 0 === c || c.insertAdjacentElement("beforebegin", r);
        }
    }
    return {
        init: function(t) {
            l = t, l.on("initSlides", d);
        },
        destroy: function() {
            var t;
            null == l || l.off("initSlides", d), null === (t = null == l ? void 0 : l.getContainer()) || void 0 === t || t.classList.remove("has-toolbar"), null == r || r.remove(), r = void 0;
        },
        add: function(t, e) {
            s[t] = e;
        },
        isEnabled: function() {
            return !!r;
        }
    };
};

},{"../utils/isPlainObject.js":"ecEyv","../utils/isString.js":"9P3iT","../utils/strToHtml.js":"jH4Nk","../shared/buttons.js":"kXSIM","../utils/extend.js":"ke5NQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kXSIM":[function(require,module,exports,__globalThis) {
/*! License details at fancyapps.com/license */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "PanzoomButtons", ()=>t);
const t = {
    moveLeft: {
        tpl: '<button data-panzoom-action="moveLeft" class="f-button" title="{{MOVE_LEFT}}"><svg><path d="M5 12h14M5 12l6 6M5 12l6-6"/></svg></button>'
    },
    moveRight: {
        tpl: '<button data-panzoom-action="moveRight" class="f-button" title="{{MOVE_RIGHT}}"><svg><path d="M5 12h14M13 18l6-6M13 6l6 6"/></svg></button>'
    },
    moveUp: {
        tpl: '<button data-panzoom-action="moveUp" class="f-button" title="{{MOVE_UP}}"><svg><path d="M12 5v14M18 11l-6-6M6 11l6-6"/></svg></button>'
    },
    moveDown: {
        tpl: '<button data-panzoom-action="moveDown" class="f-button" title="{{MOVE_DOWN}}"><svg><path d="M12 5v14M18 13l-6 6M6 13l6 6"/></svg></button>'
    },
    zoomIn: {
        tpl: '<button data-panzoom-action="zoomIn" class="f-button" title="{{ZOOM_IN}}"><svg><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M11 8v6M8 11h6"/></svg></button>'
    },
    zoomOut: {
        tpl: '<button data-panzoom-action="zoomOut" class="f-button" title="{{ZOOM_OUT}}"><svg><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M8 11h6"/></svg></button>'
    },
    toggle1to1: {
        tpl: '<button data-panzoom-action="toggleFull" class="f-button" title="{{TOGGLE_FULL}}"><svg><path d="M3.51 3.07c5.74.02 11.48-.02 17.22.02 1.37.1 2.34 1.64 2.18 3.13 0 4.08.02 8.16 0 12.23-.1 1.54-1.47 2.64-2.79 2.46-5.61-.01-11.24.02-16.86-.01-1.36-.12-2.33-1.65-2.17-3.14 0-4.07-.02-8.16 0-12.23.1-1.36 1.22-2.48 2.42-2.46Z"/><path d="M5.65 8.54h1.49v6.92m8.94-6.92h1.49v6.92M11.5 9.4v.02m0 5.18v0"/></svg></button>'
    },
    toggleFull: {
        tpl: '<button data-panzoom-action="toggleFull" class="f-button" title="{{TOGGLE_FULL}}"><svg><g><line x1="11" y1="8" x2="11" y2="14"></line></g><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M8 11h6"/></svg></button>'
    },
    rotateCCW: {
        tpl: '<button data-panzoom-action="rotateCCW" class="f-button" title="{{ROTATE_CCW}}"><svg><path d="M15 4.55a8 8 0 0 0-6 14.9M9 15v5H4M18.37 7.16v.01M13 19.94v.01M16.84 18.37v.01M19.37 15.1v.01M19.94 11v.01"/></svg></button>'
    },
    rotateCW: {
        tpl: '<button data-panzoom-action="rotateCW" class="f-button" title="{{ROTATE_CW}}"><svg><path d="M9 4.55a8 8 0 0 1 6 14.9M15 15v5h5M5.63 7.16v.01M4.06 11v.01M4.63 15.1v.01M7.16 18.37v.01M11 19.94v.01"/></svg></button>'
    },
    flipX: {
        tpl: '<button data-panzoom-action="flipX" class="f-button" title="{{FLIP_X}}"><svg><path d="M12 3v18M16 7v10h5L16 7M8 7v10H3L8 7"/></svg></button>'
    },
    flipY: {
        tpl: '<button data-panzoom-action="flipY" class="f-button" title="{{FLIP_Y}}"><svg><path d="M3 12h18M7 16h10L7 21v-5M7 8h10L7 3v5"/></svg></button>'
    },
    reset: {
        tpl: '<button data-panzoom-action="reset" class="f-button" title="{{RESET}}"><svg><path d="M20 11A8.1 8.1 0 0 0 4.5 9M4 5v4h4M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4"/></svg></button>'
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"f4AIL":[function(require,module,exports,__globalThis) {
/*! License details at fancyapps.com/license */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Autoplay", ()=>n);
var _isPlainObjectJs = require("../utils/isPlainObject.js");
const e = {
    autoStart: !0,
    pauseOnHover: !0,
    showProgressbar: !0,
    timeout: 2e3
}, n = ()=>{
    let n, o, i = !1, a = !1, l = !1, s = null;
    function r(o) {
        const i = null == n ? void 0 : n.getOptions().Autoplay;
        let a = ((0, _isPlainObjectJs.isPlainObject)(i) ? Object.assign(Object.assign({}, e), i) : e)[o];
        return a && "function" == typeof a && n ? a(n) : a;
    }
    function u() {
        var t;
        const e = (null === (t = null == n ? void 0 : n.getPage()) || void 0 === t ? void 0 : t.slides) || [];
        for (const t of e)if (0 === t.state) return !0;
        return !1;
    }
    function d() {
        clearTimeout(o), o = void 0;
    }
    function g() {
        if (o) return;
        if (l) return;
        if (u()) return;
        if (!(null == n ? void 0 : n.isSettled())) return;
        !function() {
            var t, e, o, i;
            if (!n) return;
            if (v(), !r("showProgressbar")) return;
            let a = r("progressbarParentEl");
            !a && (null === (t = n.getPlugins().Toolbar) || void 0 === t ? void 0 : t.isEnabled()) && (a = n.getContainer());
            if (!a && !0 !== (null === (e = n.getPlugins().Toolbar) || void 0 === e ? void 0 : e.isEnabled())) {
                const t = (null === (o = n.getPages()[0]) || void 0 === o ? void 0 : o.slides) || [], e = (null === (i = n.getPage()) || void 0 === i ? void 0 : i.slides) || [];
                1 === t.length && 1 === e.length && (a = e[0].el);
            }
            a || (a = n.getViewport());
            if (!a) return;
            s = document.createElement("div"), s.classList.add("f-progressbar"), a.prepend(s);
            const l = r("timeout") || 1e3;
            s.style.animationDuration = `${l}ms`;
        }();
        const t = r("timeout");
        o = setTimeout(()=>{
            n && i && !a && (n.isInfinite() || n.getPageIndex() !== n.getPages().length - 1 ? n.next() : n.goTo(0));
        }, t);
    }
    function f() {
        var t, e;
        if (!n || n.getPages().length < 2 || !1 === n.getOptions().Autoplay) return;
        if (i) return;
        i = !0, n.emit("autoplay:start", r("timeout")), null === (t = n.getContainer()) || void 0 === t || t.classList.add("has-autoplay"), null === (e = n.getTween()) || void 0 === e || e.on("start", b);
        const o = null == n ? void 0 : n.getContainer();
        o && r("pauseOnHover") && matchMedia("(hover: hover)").matches && (o.addEventListener("mouseenter", E, !1), o.addEventListener("mouseleave", x, !1)), n.on("change", h), n.on("settle", y), n.on("contentReady", p), n.on("panzoom:animationStart", c), n.isSettled() && g();
    }
    function c() {
        var t, e;
        if (d(), v(), i && n) {
            n.emit("autoplay:end"), null === (t = n.getContainer()) || void 0 === t || t.classList.remove("has-autoplay"), null === (e = n.getTween()) || void 0 === e || e.off("start", b);
            const o = null == n ? void 0 : n.getContainer();
            o && (o.removeEventListener("mouseenter", E, !1), o.removeEventListener("mouseleave", x, !1));
        }
        n && (n.off("change", h), n.off("settle", y), n.off("contentReady", p), n.off("panzoom:animationStart", c)), i = !1, a = !1;
    }
    function v() {
        s && (s.remove(), s = null);
    }
    function m() {
        n && n.getPages().length > 1 && r("autoStart") && f();
    }
    function p(t) {
        n && n.getPageIndex(t.index) === n.getPageIndex() && (!i || l || u() || g());
    }
    function P(t, e) {
        const n = e.target;
        n && !e.defaultPrevented && "toggle" === n.dataset.autoplayAction && L.toggle();
    }
    function h() {
        !n || !(null == n ? void 0 : n.isInfinite()) && n.getPageIndex() === n.getPages().length - 1 ? c() : (v(), d());
    }
    function y() {
        !i || l || a || g();
    }
    function b() {
        d(), v();
    }
    function E() {
        l = !0, i && (v(), d());
    }
    function x() {
        l = !1, i && !a && (null == n ? void 0 : n.isSettled()) && g();
    }
    const L = {
        init: function(t) {
            n = t, n.on("ready", m), n.on("click", P);
        },
        destroy: function() {
            c(), null == n || n.off("ready", m), null == n || n.off("click", P), n = void 0;
        },
        isEnabled: ()=>i,
        pause: function() {
            a = !0, d();
        },
        resume: function() {
            a = !1, i && !l && g();
        },
        start () {
            f();
        },
        stop () {
            c();
        },
        toggle () {
            i ? c() : f();
        }
    };
    return L;
};

},{"../utils/isPlainObject.js":"ecEyv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"i9Umc":[function(require,module,exports,__globalThis) {
/*! License details at fancyapps.com/license */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Thumbs", ()=>a);
var _isPlainObjectJs = require("../utils/isPlainObject.js");
var _extendJs = require("../utils/extend.js");
var _replaceAllJs = require("../utils/replaceAll.js");
var _clampJs = require("../utils/clamp.js");
var _carouselSyncJs = require("./carousel.sync.js");
var _carouselLazyloadJs = require("./carousel.lazyload.js");
var _addClassJs = require("../utils/addClass.js");
const r = {
    Carousel: {
        Lazyload: {
            showLoading: !1
        }
    },
    minCount: 2,
    showOnStart: !0,
    thumbTpl: '<button aria-label="Slide to #{{page}}"><img draggable="false" alt="{{alt}}" data-lazy-src="{{src}}" /></button>',
    type: "modern"
};
let u;
const a = ()=>{
    let a, d, c, f = 0, m = 0, g = !0;
    function h(e) {
        const n = null == a ? void 0 : a.getOptions().Thumbs;
        let i = ((0, _isPlainObjectJs.isPlainObject)(n) ? Object.assign(Object.assign({}, r), n) : r)[e];
        return i && "function" == typeof i && a ? i(a) : i;
    }
    function v() {
        if (!a) return !1;
        if (!1 === (null == a ? void 0 : a.getOptions().Thumbs)) return !1;
        let t = 0;
        for (const e of a.getSlides())e.thumbSrc && t++;
        return t >= h("minCount");
    }
    function p() {
        return "modern" === h("type");
    }
    function b(t = !1) {
        var e;
        const n = null == a ? void 0 : a.getContainer();
        if (!a || !n || c) return;
        if (!v()) return;
        if (!c) {
            const t = n.nextElementSibling;
            (null == t ? void 0 : t.classList.contains("f-thumbs")) && (c = t);
        }
        if (!c) {
            c = document.createElement("div");
            const t = h("parentEl");
            t ? t.insertAdjacentElement("beforeend", c) : n.insertAdjacentElement("afterend", c);
        }
        const i = null === (e = h("Carousel")) || void 0 === e ? void 0 : e.classes;
        (null == i ? void 0 : i.container) && (0, _addClassJs.addClass)(c, i.container), (0, _addClassJs.addClass)(c, "f-thumbs"), (0, _addClassJs.addClass)(c, `is-${h("type")}`), (0, _addClassJs.addClass)(c, "is-syncing"), t && (c.style.maxHeight = "0px");
    }
    function y(t) {
        const e = t.thumb ? t.thumb instanceof HTMLImageElement ? t.thumb.src : t.thumb : t.thumbSrc || void 0, i = void 0 === t.thumbAlt ? `Thumbnail #${t.index}` : t.thumbAlt + "";
        let o = h("thumbTpl");
        return o = (0, _replaceAllJs.replaceAll)(o, "{{alt}}", i), o = (0, _replaceAllJs.replaceAll)(o, "{{src}}", e + ""), o = (0, _replaceAllJs.replaceAll)(o, "{{index}}", `${t.index}`), o = (0, _replaceAllJs.replaceAll)(o, "{{page}}", `${t.index || 1}`), {
            html: o,
            class: t.thumbClass
        };
    }
    function S() {
        var t;
        if (!u) return;
        if (!a || !c || d) return;
        const n = [];
        for (const t of a.getSlides())n.push(y(t));
        n.length && (d = u(c, (0, _extendJs.extend)({}, {
            Sync: {
                target: a
            },
            Lazyload: {
                preload: 1
            },
            slides: n,
            classes: {
                container: "f-thumbs",
                viewport: "f-thumbs__viewport",
                slide: "f-thumbs__slide"
            },
            initialSlide: a.getOptions().initialPage,
            center: !0,
            fill: !p(),
            infinite: !1,
            dragFree: !0,
            rtl: a.getOptions().rtl || !1,
            slidesPerPage: (t)=>{
                let e = 0;
                return p() && (!function() {
                    if (!p()) return;
                    if (!c) return;
                    const t = (t)=>c && parseFloat(getComputedStyle(c).getPropertyValue("--f-thumb-" + t)) || 0;
                    f = t("width"), m = t("clip-width");
                }(), e = 4 * (f - m)), t && t.getTotalSlideDim() <= t.getViewportDim() - e ? 1 / 0 : 1;
            }
        }, r.Carousel || {}, h("Carousel") || {}), {
            Sync: (0, _carouselSyncJs.Sync),
            Lazyload: (0, _carouselLazyloadJs.Lazyload)
        }), d.on("ready", ()=>{
            null == a || a.emit("thumbs:ready");
        }), d.on("destroy", ()=>{
            null == a || a.emit("thumbs:destroy");
        }), d.init(), null === (t = d.getGestures()) || void 0 === t || t.on("start", ()=>{
            g = !1;
        }), d.on("click", (t, e)=>{
            const n = e.target;
            if (n) {
                const t = n.matches("button") ? n : n.firstElementChild;
                t && t.matches("button") && (e.preventDefault(), t.focus({
                    preventScroll: !0
                }));
            }
        }), (0, _addClassJs.addClass)(a.getContainer(), "has-thumbs"), L());
    }
    function x() {
        v() && h("showOnStart") && (b(), S());
    }
    function C() {
        var t;
        v() && (null == a || a.on("addSlide", E), null == a || a.on("click", T), null === (t = null == a ? void 0 : a.getGestures()) || void 0 === t || t.on("start", P));
    }
    function P() {
        var t, e;
        g = !0;
        (null === (t = document.activeElement) || void 0 === t ? void 0 : t.closest(".f-thumbs")) && (null === (e = document.activeElement) || void 0 === e || e.blur());
    }
    function j() {
        var t, e;
        null == c || c.classList.toggle("is-syncing", !1 === (null == a ? void 0 : a.hasNavigated()) || (null === (t = null == a ? void 0 : a.getTween()) || void 0 === t ? void 0 : t.isRunning())), L(), (null === (e = null == a ? void 0 : a.getGestures()) || void 0 === e ? void 0 : e.isPointerDown()) && function() {
            if (!p()) return;
            if (!a || !d) return;
            if (!g) return;
            const t = d.getTween(), e = d.getPages(), n = a.getPageIndex() || 0, o = a.getPageProgress() || 0;
            if (!(a && e && e[n] && t)) return;
            const l = t.isRunning() ? t.getCurrentValues().pos : d.getPosition();
            if (void 0 === l) return;
            let s = e[n].pos + o * (f - m);
            s = (0, _clampJs.clamp)(e[0].pos, s, e[e.length - 1].pos), t.from({
                pos: l
            }).to({
                pos: s
            }).start();
        }();
    }
    function w() {
        g = !0;
    }
    function E(t, e) {
        null == d || d.add(y(e), e.index);
    }
    function T(t, e) {
        const n = e.target;
        n && !e.defaultPrevented && "toggle" === n.dataset.thumbsAction && function() {
            if (c || (b(!0), S()), !c) return;
            const t = (null == d ? void 0 : d.isVertical()) ? "maxWidth" : "maxHeight", e = c.style[t];
            c.style[t] = e ? "" : "0px";
        }();
    }
    function L() {
        if (!p()) return;
        if (!a || !d) return;
        const t = (null == d ? void 0 : d.getSlides()) || [];
        let e = -0.5 * f;
        for (const n of t){
            const t = n.el;
            if (!t) continue;
            let i = a.getPageProgress(n.index) || 0;
            i = Math.max(-1, Math.min(1, i)), i > -1 && i < 1 && (e += .5 * f * (1 - Math.abs(i))), i = Math.round(1e4 * i) / 1e4, e = Math.round(1e4 * e) / 1e4, t.style.setProperty("--progress", `${Math.abs(i)}`), t.style.setProperty("--shift", `${(null == a ? void 0 : a.isRTL()) ? -1 * e : e}px`), i > -1 && i < 1 && (e += .5 * f * (1 - Math.abs(i)));
        }
    }
    return {
        init: function(t, e) {
            u = e, a = t, a.on("ready", C), a.on("initSlides", x), a.on("render", j), a.on("change", w);
        },
        destroy: function() {
            var t, e;
            null == a || a.off("ready", C), null == a || a.off("initSlides", x), null == a || a.off("render", j), null == a || a.off("change", w), null == a || a.off("addSlide", E), null == a || a.off("click", T), null === (t = null == a ? void 0 : a.getGestures()) || void 0 === t || t.off("start", P), null === (e = null == a ? void 0 : a.getContainer()) || void 0 === e || e.classList.remove("has-thumbs"), a = void 0, null == d || d.destroy(), d = void 0, null == c || c.remove(), c = void 0;
        },
        getCarousel: function() {
            return d;
        },
        getContainer: function() {
            return c;
        },
        isEnabled: function() {
            return v();
        }
    };
};

},{"../utils/isPlainObject.js":"ecEyv","../utils/extend.js":"ke5NQ","../utils/replaceAll.js":"iW7fG","../utils/clamp.js":"9oF9v","./carousel.sync.js":"aMNI3","./carousel.lazyload.js":"lIfuM","../utils/addClass.js":"f0d1w","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fvWRD":[function(require,module,exports,__globalThis) {
/*! License details at fancyapps.com/license */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Html", ()=>i);
var _isPlainObjectJs = require("../utils/isPlainObject.js");
var _isStringJs = require("../utils/isString.js");
const a = {
    iframeAttr: {
        allow: "autoplay; fullscreen",
        scrolling: "auto"
    }
}, i = ()=>{
    let i;
    function l(t, a) {
        let i = a.src;
        if (!(0, _isStringJs.isString)(i)) return;
        let l = a.type;
        if (!l) {
            if (l || ("#" === i.charAt(0) ? l = "inline" : i.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.((a)?png|avif|gif|jp(g|eg)|pjp(eg)?|jfif|svg|webp|bmp|ico|tif(f)?)((\?|#).*)?$)/i) ? l = "image" : i.match(/\.(pdf)((\?|#).*)?$/i) ? l = "pdf" : i.match(/\.(html|php)((\?|#).*)?$/i) && (l = "iframe")), !l) {
                const t = i.match(/(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:(?:(?:maps\/(?:place\/(?:.*)\/)?\@(.*),(\d+.?\d+?)z))|(?:\?ll=))(.*)?/i);
                t && (i = `https://maps.google.${t[1]}/?ll=${(t[2] ? t[2] + "&z=" + Math.floor(parseFloat(t[3])) + (t[4] ? t[4].replace(/^\//, "&") : "") : t[4] + "").replace(/\?/, "&")}&output=${t[4] && t[4].indexOf("layer=c") > 0 ? "svembed" : "embed"}`, l = "gmap");
            }
            if (!l) {
                const t = i.match(/(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:maps\/search\/)(.*)/i);
                t && (i = `https://maps.google.${t[1]}/maps?q=${t[2].replace("query=", "q=").replace("api=1", "")}&output=embed`, l = "gmap");
            }
            a.src = i, a.type = l;
        }
    }
    function o(e, l) {
        "iframe" !== l.type && "pdf" !== l.type && "gmap" !== l.type || function(e) {
            if (!i || !e.el || !e.src) return;
            const l = document.createElement("iframe");
            l.classList.add("f-iframe");
            for (const [e, o] of Object.entries(function() {
                const e = null == i ? void 0 : i.getOptions().Html;
                return (0, _isPlainObjectJs.isPlainObject)(e) ? Object.assign(Object.assign({}, a), e) : a;
            }().iframeAttr || {}))l.setAttribute(e, o);
            l.onerror = ()=>{
                i && 1 === i.getState() && i.showError(e, "{{IFRAME_ERROR}}");
            }, l.src = e.src;
            const o = document.createElement("div");
            if (o.classList.add("f-html"), o.append(l), e.width) {
                let t = `${e.width}`;
                t.match(/^\d+$/) && (t += "px"), o.style.maxWidth = `${t}`;
            }
            if (e.height) {
                let t = `${e.height}`;
                t.match(/^\d+$/) && (t += "px"), o.style.maxHeight = `${t}`;
            }
            if (e.aspectRatio) {
                const t = e.el.getBoundingClientRect();
                o.style.aspectRatio = `${e.aspectRatio}`, o.style[t.width > t.height ? "width" : "height"] = "auto", o.style[t.width > t.height ? "maxWidth" : "maxHeight"] = "none";
            }
            e.contentEl = l, e.htmlEl = o, e.el.classList.add("has-html"), e.el.classList.add("has-iframe"), e.el.classList.add(`has-${e.type}`), e.el.prepend(o), i.emit("contentReady", e);
        }(l);
    }
    function n(t, e) {
        var a, l;
        "iframe" !== e.type && "pdf" !== e.type && "gmap" !== e.type || (null == i || i.hideError(e), null === (a = e.contentEl) || void 0 === a || a.remove(), e.contentEl = void 0, null === (l = e.htmlEl) || void 0 === l || l.remove(), e.htmlEl = void 0);
    }
    return {
        init: function(t) {
            i = t, i.on("addSlide", l), i.on("attachSlideEl", o), i.on("detachSlideEl", n);
        },
        destroy: function() {
            null == i || i.off("addSlide", l), null == i || i.off("attachSlideEl", o), null == i || i.off("detachSlideEl", n), i = void 0;
        }
    };
};

},{"../utils/isPlainObject.js":"ecEyv","../utils/isString.js":"9P3iT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kkH5x":[function(require,module,exports,__globalThis) {
/*! License details at fancyapps.com/license */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Video", ()=>l);
var _isPlainObjectJs = require("../utils/isPlainObject.js");
var _isStringJs = require("../utils/isString.js");
var _strToHtmlJs = require("../utils/strToHtml.js");
const n = (t, e = {})=>{
    const o = new URL(t), n = new URLSearchParams(o.search), i = new URLSearchParams;
    for (const [t, o] of [
        ...n,
        ...Object.entries(e)
    ]){
        let e = o + "";
        if ("t" === t) {
            let t = e.match(/((\d*)m)?(\d*)s?/);
            t && i.set("start", 60 * parseInt(t[2] || "0") + parseInt(t[3] || "0") + "");
        } else i.set(t, e);
    }
    let l = i + "", s = t.match(/#t=((.*)?\d+s)/);
    return s && (l += `#t=${s[1]}`), l;
}, i = {
    autoplay: !1,
    html5videoTpl: '<video class="f-html5video" playsinline controls controlsList="nodownload" poster="{{poster}}">\n    <source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos.</video>',
    iframeAttr: {
        allow: "autoplay; fullscreen",
        scrolling: "auto",
        credentialless: ""
    },
    vimeo: {
        byline: 1,
        color: "00adef",
        controls: 1,
        dnt: 1,
        muted: 0
    },
    youtube: {
        controls: 1,
        enablejsapi: 1,
        nocookie: 1,
        rel: 0,
        fs: 1
    }
}, l = ()=>{
    let l, s = !1;
    function a() {
        const e = null == l ? void 0 : l.getOptions().Video;
        return (0, _isPlainObjectJs.isPlainObject)(e) ? Object.assign(Object.assign({}, i), e) : i;
    }
    function r() {
        var t;
        return null === (t = null == l ? void 0 : l.getPage()) || void 0 === t ? void 0 : t.slides[0];
    }
    const c = (t)=>{
        var e;
        try {
            let o = JSON.parse(t.data);
            if ("https://player.vimeo.com" === t.origin) {
                if ("ready" === o.event) for (let o of Array.from((null === (e = null == l ? void 0 : l.getContainer()) || void 0 === e ? void 0 : e.getElementsByClassName("f-iframe")) || []))o instanceof HTMLIFrameElement && o.contentWindow === t.source && (o.dataset.ready = "true");
            } else if (t.origin.match(/^https:\/\/(www.)?youtube(-nocookie)?.com$/) && "onReady" === o.event) {
                const t = document.getElementById(o.id);
                t && (t.dataset.ready = "true");
            }
        } catch (t) {}
    };
    function d(t, o) {
        const i = o.src;
        if (!(0, _isStringJs.isString)(i)) return;
        let l = o.type;
        if (!l || "html5video" === l) {
            const t = i.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i);
            t && (l = "html5video", o.html5videoFormat = o.html5videoFormat || "video/" + ("ogv" === t[1] ? "ogg" : t[1]));
        }
        if (!l || "youtube" === l) {
            const t = i.match(/(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(?:watch\?(?:.*&)?v=|v\/|u\/|shorts\/|embed\/?)?(videoseries\?list=(?:.*)|[\w-]{11}|\?listType=(?:.*)&list=(?:.*))(?:.*)/i);
            if (t) {
                const e = Object.assign(Object.assign({}, a().youtube), o.youtube || {}), s = `www.youtube${e.nocookie ? "-nocookie" : ""}.com`, r = n(i, e), c = encodeURIComponent(t[2]);
                o.videoId = c, o.src = `https://${s}/embed/${c}?${r}`, o.thumb = o.thumb || `https://i.ytimg.com/vi/${c}/mqdefault.jpg`, l = "youtube";
            }
        }
        if (!l || "vimeo" === l) {
            const t = i.match(/^.+vimeo.com\/(?:\/)?(video\/)?([\d]+)((\/|\?h=)([a-z0-9]+))?(.*)?/);
            if (t) {
                const e = Object.assign(Object.assign({}, a().vimeo), o.vimeo || {}), s = n(i, e), r = encodeURIComponent(t[2]), c = t[5] || "";
                o.videoId = r, o.src = `https://player.vimeo.com/video/${r}?${c ? `h=${c}${s ? "&" : ""}` : ""}${s}`, l = "vimeo";
            }
        }
        o.type = l;
    }
    function u(t, n) {
        "html5video" === n.type && function(t) {
            if (!l || !t.el || !t.src) return;
            const { el: n, src: i } = t;
            if (!n || !i) return;
            const s = t.html5videoTpl || a().html5videoTpl, r = t.html5videoFormat || a().html5videoFormat;
            if (!s) return;
            const c = t.poster || (t.thumb && (0, _isStringJs.isString)(t.thumb) ? t.thumb : ""), d = (0, _strToHtmlJs.stringToHtml)(s.replace(/\{\{src\}\}/gi, i + "").replace(/\{\{format\}\}/gi, r || "").replace(/\{\{poster\}\}/gi, c + ""));
            if (!d) return;
            const u = document.createElement("div");
            u.classList.add("f-html"), u.append(d), t.contentEl = d, t.htmlEl = u, n.classList.add(`has-${t.type}`), n.prepend(u), h(t), l.emit("contentReady", t);
        }(n), "youtube" !== n.type && "vimeo" !== n.type || function(t) {
            if (!l || !t.el || !t.src) return;
            const e = document.createElement("iframe");
            e.classList.add("f-iframe"), e.setAttribute("id", `f-iframe_${t.videoId}`);
            for (const [t, o] of Object.entries(a().iframeAttr || {}))e.setAttribute(t, o);
            e.onload = ()=>{
                var o;
                l && 1 === l.getState() && "youtube" === t.type && (null === (o = e.contentWindow) || void 0 === o || o.postMessage(JSON.stringify({
                    event: "listening",
                    id: e.getAttribute("id")
                }), "*"));
            }, e.onerror = ()=>{
                l && 1 === l.getState() && (null == l || l.showError(t, "{{IFRAME_ERROR}}"));
            }, e.src = t.src;
            const o = document.createElement("div");
            o.classList.add("f-html"), o.append(e), t.contentEl = e, t.htmlEl = o, t.el.classList.add("has-html"), t.el.classList.add("has-iframe"), t.el.classList.add(`has-${t.type}`), t.el.prepend(o), h(t), l.emit("contentReady", t);
        }(n);
    }
    function m(t, e) {
        var o, n;
        "html5video" !== e.type && "youtube" !== e.type && "vimeo" !== e.type || (null === (o = e.contentEl) || void 0 === o || o.remove(), e.contentEl = void 0, null === (n = e.htmlEl) || void 0 === n || n.remove(), e.htmlEl = void 0), e.poller && clearTimeout(e.poller);
    }
    function f() {
        s = !1;
    }
    function p() {
        if (s) return;
        s = !0;
        const t = r();
        (t && void 0 !== t.autoplay ? t.autoplay : a().autoplay) && (function() {
            var t;
            const e = r(), o = null == e ? void 0 : e.el;
            if (o && "html5video" === (null == e ? void 0 : e.type)) try {
                const t = o.querySelector("video");
                if (t) {
                    const e = t.play();
                    void 0 !== e && e.then(()=>{}).catch((e)=>{
                        t.muted = !0, t.play();
                    });
                }
            } catch (t) {}
            const n = null == e ? void 0 : e.htmlEl;
            n instanceof HTMLIFrameElement && (null === (t = n.contentWindow) || void 0 === t || t.postMessage('{"event":"command","func":"stopVideo","args":""}', "*"));
        }(), function() {
            const t = r(), e = null == t ? void 0 : t.type;
            if (!(null == t ? void 0 : t.el) || "youtube" !== e && "vimeo" !== e) return;
            const o = ()=>{
                if (t.contentEl && t.contentEl instanceof HTMLIFrameElement && t.contentEl.contentWindow) {
                    let e;
                    if ("true" === t.contentEl.dataset.ready) return e = "youtube" === t.type ? {
                        event: "command",
                        func: "playVideo"
                    } : {
                        method: "play",
                        value: "true"
                    }, e && t.contentEl.contentWindow.postMessage(JSON.stringify(e), "*"), void (t.poller = void 0);
                    "youtube" === t.type && (e = {
                        event: "listening",
                        id: t.contentEl.getAttribute("id")
                    }, t.contentEl.contentWindow.postMessage(JSON.stringify(e), "*"));
                }
                t.poller = setTimeout(o, 250);
            };
            o();
        }());
    }
    function h(t) {
        const e = null == t ? void 0 : t.htmlEl;
        if (t && e && ("html5video" === t.type || "youtube" === t.type || "vimeo" === t.type)) {
            if (e.style.aspectRatio = "", e.style.width = "", e.style.height = "", e.style.maxWidth = "", e.style.maxHeight = "", t.width) {
                let o = `${t.width}`;
                o.match(/^\d+$/) && (o += "px"), e.style.maxWidth = `${o}`;
            }
            if (t.height) {
                let o = `${t.height}`;
                o.match(/^\d+$/) && (o += "px"), e.style.maxHeight = `${o}`;
            }
            if (t.aspectRatio) {
                const o = t.aspectRatio.split("/"), n = parseFloat(o[0].trim()), i = o[1] ? parseFloat(o[1].trim()) : 0, l = n && i ? n / i : n;
                e.offsetHeight;
                const s = e.getBoundingClientRect(), a = l < (s.width || 1) / (s.height || 1);
                e.style.aspectRatio = `${t.aspectRatio}`, e.style.width = a ? "auto" : "", e.style.height = a ? "" : "auto";
            }
        }
    }
    function v() {
        h(r());
    }
    return {
        init: function(t) {
            l = t, l.on("addSlide", d), l.on("attachSlideEl", u), l.on("detachSlideEl", m), l.on("ready", p), l.on("change", f), l.on("settle", p), l.on("refresh", v), window.addEventListener("message", c);
        },
        destroy: function() {
            null == l || l.off("addSlide", d), null == l || l.off("attachSlideEl", u), null == l || l.off("detachSlideEl", m), null == l || l.off("ready", p), null == l || l.off("change", f), null == l || l.off("settle", p), null == l || l.off("refresh", v), window.removeEventListener("message", c), l = void 0;
        }
    };
};

},{"../utils/isPlainObject.js":"ecEyv","../utils/isString.js":"9P3iT","../utils/strToHtml.js":"jH4Nk","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6XULk":[function(require,module,exports,__globalThis) {
/*! License details at fancyapps.com/license */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Fullscreen", ()=>l);
var _isPlainObjectJs = require("../utils/isPlainObject.js");
const n = {
    autoStart: !1,
    btnTpl: '<button data-fullscreen-action="toggle" class="f-button" title="{{TOGGLE_FULLSCREEN}}"><svg><g><path d="M8 3H5a2 2 0 0 0-2 2v3M21 8V5a2 2 0 0 0-2-2h-3M3 16v3a2 2 0 0 0 2 2h3M16 21h3a2 2 0 0 0 2-2v-3"/></g><g><path d="M15 19v-2a2 2 0 0 1 2-2h2M15 5v2a2 2 0 0 0 2 2h2M5 15h2a2 2 0 0 1 2 2v2M5 9h2a2 2 0 0 0 2-2V5"/></g></svg></button>'
}, t = "in-fullscreen-mode", l = ()=>{
    let l;
    function u(t) {
        const u = null == l ? void 0 : l.getOptions().Fullscreen;
        let o = ((0, _isPlainObjectJs.isPlainObject)(u) ? Object.assign(Object.assign({}, n), u) : n)[t];
        return o && "function" == typeof o && l ? o(l) : o;
    }
    function o() {
        var e;
        null === (e = null == l ? void 0 : l.getPlugins().Toolbar) || void 0 === e || e.add("fullscreen", {
            tpl: u("btnTpl")
        });
    }
    function c() {
        if (u("autoStart")) {
            const e = r();
            e && d(e);
        }
    }
    function i(e, n) {
        const t = n.target;
        t && !n.defaultPrevented && "toggle" === t.dataset.fullscreenAction && b();
    }
    function s(e) {
        r() && "Escape" === e.key && !e.defaultPrevented && b();
    }
    function r() {
        return u("el") || (null == l ? void 0 : l.getContainer()) || void 0;
    }
    function a() {
        const e = document;
        return e.fullscreenEnabled ? !!e.fullscreenElement : !!e.webkitFullscreenEnabled && !!e.webkitFullscreenElement;
    }
    function d(e) {
        const n = document;
        let l;
        return e || (e = n.documentElement), n.fullscreenEnabled ? l = e.requestFullscreen() : n.webkitFullscreenEnabled && (l = e.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)), l && l.then(()=>{
            e.classList.add(t);
        }), l;
    }
    function f() {
        const e = document;
        let n;
        return e.fullscreenEnabled ? n = e.fullscreenElement && e.exitFullscreen() : e.webkitFullscreenEnabled && (n = e.webkitFullscreenElement && e.webkitExitFullscreen()), n && n.then(()=>{
            var e;
            null === (e = r()) || void 0 === e || e.classList.remove(t);
        }), n;
    }
    function b() {
        const e = r();
        e && (a() ? f() : d(e));
    }
    return {
        init: function(e) {
            l = e, l.on("initPlugins", o), l.on("ready", c), l.on("click", i);
        },
        destroy: function() {
            null == l || l.off("initPlugins", o), null == l || l.off("ready", c), null == l || l.off("click", i), document.removeEventListener("keydown", s, !0);
        },
        exit: f,
        inFullscreen: a,
        request: d,
        toggle: b
    };
};

},{"../utils/isPlainObject.js":"ecEyv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jDeJS":[function(require,module,exports,__globalThis) {
/*! License details at fancyapps.com/license */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Hash", ()=>u);
var _canUseDOMJs = require("../utils/canUseDOM.js");
let n, e = !1, o = !1, i = !1, r = !1;
const a = ()=>{
    const t = new URL(document.URL).hash, n = t.slice(1).split("-"), e = n[n.length - 1], o = e && /^\+?\d+$/.test(e) && parseInt(n.pop() || "1", 10) || 1;
    return {
        hash: t,
        slug: n.join("-"),
        index: o
    };
}, s = ()=>{
    if (!n || n.getInstance()) return;
    const { slug: t, index: e } = a();
    if (!t) return;
    if (!n || n.getInstance()) return;
    const o = document.querySelectorAll(`[data-fancybox="${t}"]`);
    if (!o.length) return;
    const i = o[e - 1];
    i && i.dispatchEvent(new CustomEvent("click", {
        bubbles: !0,
        cancelable: !0
    }));
}, l = ()=>{
    var t, e;
    if (!n) return;
    if (i) return;
    const o = null == n ? void 0 : n.getInstance();
    if (!1 === (null == o ? void 0 : o.getOptions().Hash)) return;
    const { slug: l, index: c } = a(), u = (null === (t = null == o ? void 0 : o.getSlide()) || void 0 === t ? void 0 : t.fancybox) || void 0;
    o && u && (l === u ? null === (e = o.getCarousel()) || void 0 === e || e.goTo(c - 1) : (r = !0, o.close(), r = !1)), s();
}, c = ()=>{
    n && setTimeout(()=>{
        e = !0, s(), e = !1, window.addEventListener("hashchange", l, !1);
    }, 300);
}, u = ()=>{
    let t, n = "auto", s = "";
    function l() {
        var i, r;
        if (!t || !t.isTopMost()) return;
        if (!1 === t.getOptions().Hash) return;
        const l = t.getCarousel();
        if (!l) return;
        const { hash: u, slug: d } = a(), f = t.getSlide();
        if (!f) return;
        let h = f.fancybox || "", w = parseInt(f.index + "", 10) + 1;
        if (!h) return;
        let g = `#${h}-${w}`;
        if (((null === (r = null === (i = t.getCarousel()) || void 0 === i ? void 0 : i.getPages()) || void 0 === r ? void 0 : r.length) || 0) < 2 && (g = `#${h}`), u !== g && (s = u), history.scrollRestoration && (n = history.scrollRestoration, history.scrollRestoration = "manual"), l.on("change", c), !e) {
            if (h === d) try {
                window.history.replaceState({}, document.title, window.location.pathname + window.location.search + g);
            } catch (t) {}
            else try {
                window.history.pushState({}, document.title, window.location.pathname + window.location.search + g), o = !0;
            } catch (t) {}
        }
    }
    function c() {
        if (!t || !t.isTopMost()) return;
        if (!1 === t.getOptions().Hash) return;
        const { slug: n } = a(), e = t.getSlide();
        if (!e) return;
        let o = e.fancybox || "", r = `#${o}-${e.index + 1}`;
        if (o === n) {
            i = !0;
            try {
                window.history.replaceState({}, document.title, window.location.pathname + window.location.search + r);
            } catch (t) {}
            i = !1;
        }
    }
    function u() {
        if (r) return;
        if (!t || !t.isTopMost()) return;
        if (!1 === t.getOptions().Hash) return;
        const n = t.getSlide();
        if (!n) return;
        if (n.fancybox || "") {
            i = !0;
            try {
                !o || e || function() {
                    if (window.parent === window) return !1;
                    try {
                        var t = window.frameElement;
                    } catch (n) {
                        t = null;
                    }
                    return null === t ? "data:" === location.protocol : t.hasAttribute("sandbox");
                }() ? window.history.replaceState({}, document.title, window.location.pathname + window.location.search + s) : window.history.back();
            } catch (t) {}
            i = !1;
        }
    }
    return {
        init: function(n) {
            t = n, t.on("ready", l), t.on("close", u);
        },
        destroy: function() {
            null == t || t.off("ready", l), null == t || t.off("close", u);
            const e = null == t ? void 0 : t.getCarousel();
            e && e.off("change", c), t = void 0, history.scrollRestoration && n && (history.scrollRestoration = n);
        }
    };
};
u.startFromUrl = s, u.setup = function(e) {
    n || (n = e, (0, _canUseDOMJs.canUseDOM)() && (/complete|interactive|loaded/.test(document.readyState) ? c() : document.addEventListener("DOMContentLoaded", c)));
};

},{"../utils/canUseDOM.js":"gR4Lu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"58UxB":[function(require,module,exports,__globalThis) {
/*! License details at fancyapps.com/license */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "en_EN", ()=>o);
var _enENJs = require("../../carousel/l10n/en_EN.js");
const o = Object.assign(Object.assign({}, (0, _enENJs.en_EN)), {
    CLOSE: "Close",
    NEXT: "Next",
    PREV: "Previous",
    MODAL: "You can close this modal content with the ESC key",
    ELEMENT_NOT_FOUND: "HTML Element Not Found",
    IFRAME_ERROR: "Error Loading Page"
});

},{"../../carousel/l10n/en_EN.js":"56OOv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"29NKY":[function(require,module,exports,__globalThis) {
/*! License details at fancyapps.com/license */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Carousel", ()=>(0, _carouselJs.Carousel));
var _carouselJs = require("./carousel.js");

},{"./carousel.js":"aEcLD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4G3QT":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initOverrides", ()=>initOverrides);
var _alpinejs = require("alpinejs");
var _alpinejsDefault = parcelHelpers.interopDefault(_alpinejs);
const startingWith = (subject, replacement)=>({ name, value })=>{
        if (name.startsWith(subject)) name = name.replace(subject, replacement);
        return {
            name,
            value
        };
    };
const initOverrides = ()=>{
    (0, _alpinejsDefault.default).prefix("data-js-");
    (0, _alpinejsDefault.default).mapAttributes(startingWith("data-js-alt", (0, _alpinejsDefault.default).prefixed("bind:alt")));
    (0, _alpinejsDefault.default).mapAttributes(startingWith("data-js-fancybox", (0, _alpinejsDefault.default).prefixed("bind:data-fancybox")));
    (0, _alpinejsDefault.default).mapAttributes(startingWith("data-js-href", (0, _alpinejsDefault.default).prefixed("bind:href")));
    (0, _alpinejsDefault.default).mapAttributes(startingWith("data-js-key", (0, _alpinejsDefault.default).prefixed("bind:key")));
    // Alpine.mapAttributes(
    //   startingWith("data-js-model", Alpine.prefixed("bind:model"))
    // );
    (0, _alpinejsDefault.default).mapAttributes(startingWith("data-js-style", (0, _alpinejsDefault.default).prefixed("bind:style")));
    (0, _alpinejsDefault.default).mapAttributes(startingWith("data-js-src", (0, _alpinejsDefault.default).prefixed("bind:src")));
    (0, _alpinejsDefault.default).mapAttributes(startingWith("data-js-class", (0, _alpinejsDefault.default).prefixed("bind:class")));
    (0, _alpinejsDefault.default).mapAttributes(startingWith("data-js-click", (0, _alpinejsDefault.default).prefixed("on:click")));
    (0, _alpinejsDefault.default).mapAttributes(startingWith("data-js-swipe-left", (0, _alpinejsDefault.default).prefixed("swipe:left")));
    (0, _alpinejsDefault.default).mapAttributes(startingWith("data-js-submit", (0, _alpinejsDefault.default).prefixed("on:submit")));
};

},{"alpinejs":"69hXP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["bbsMS","l8yka"], "l8yka", "parcelRequireea44", {})

//# sourceMappingURL=init.js.map
