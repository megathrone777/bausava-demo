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
})({"a3xnY":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SERVER_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "dfc65926181c8956";
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

},{}],"igyjZ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _alpinejs = require("alpinejs");
var _alpinejsDefault = parcelHelpers.interopDefault(_alpinejs);
var _alpineEditor = require("alpine-editor");
var _bootstrapBundleMinJs = require("bootstrap/dist/js/bootstrap.bundle.min.js");
(0, _alpinejsDefault.default).start();

},{"alpinejs":"69hXP","alpine-editor":"8iLGG","bootstrap/dist/js/bootstrap.bundle.min.js":"gCRej","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"69hXP":[function(require,module,exports,__globalThis) {
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

},{}],"8iLGG":[function(require,module,exports,__globalThis) {
var global = arguments[3];
!function(t) {
    "function" == typeof define && define.amd ? define(t) : t();
}(function() {
    "use strict";
    function t(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }
    function e(t, e) {
        for(var n = 0; n < e.length; n++){
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
        }
    }
    function n(t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t;
    }
    function r(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                writable: !0,
                configurable: !0
            }
        }), e && i(t, e);
    }
    function o(t) {
        return (o = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t);
        })(t);
    }
    function i(t, e) {
        return (i = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t;
        })(t, e);
    }
    function s() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
            return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0;
        } catch (t) {
            return !1;
        }
    }
    function a(t, e, n) {
        return (a = s() ? Reflect.construct : function(t, e, n) {
            var r = [
                null
            ];
            r.push.apply(r, e);
            var o = new (Function.bind.apply(t, r));
            return n && i(o, n.prototype), o;
        }).apply(null, arguments);
    }
    function c(t) {
        var e = "function" == typeof Map ? new Map : void 0;
        return (c = function(t) {
            if (null === t || (n = t, -1 === Function.toString.call(n).indexOf("[native code]"))) return t;
            var n;
            if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
            if (void 0 !== e) {
                if (e.has(t)) return e.get(t);
                e.set(t, r);
            }
            function r() {
                return a(t, arguments, o(this).constructor);
            }
            return r.prototype = Object.create(t.prototype, {
                constructor: {
                    value: r,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), i(r, t);
        })(t);
    }
    function h(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t;
    }
    function p(t, e) {
        return !e || "object" != typeof e && "function" != typeof e ? h(t) : e;
    }
    function l(t) {
        var e = s();
        return function() {
            var n, r = o(t);
            if (e) {
                var i = o(this).constructor;
                n = Reflect.construct(r, arguments, i);
            } else n = r.apply(this, arguments);
            return p(this, n);
        };
    }
    function f(t) {
        this.content = t;
    }
    f.prototype = {
        constructor: f,
        find: function(t) {
            for(var e = 0; e < this.content.length; e += 2)if (this.content[e] === t) return e;
            return -1;
        },
        get: function(t) {
            var e = this.find(t);
            return -1 == e ? void 0 : this.content[e + 1];
        },
        update: function(t, e, n) {
            var r = n && n != t ? this.remove(n) : this, o = r.find(t), i = r.content.slice();
            return -1 == o ? i.push(n || t, e) : (i[o + 1] = e, n && (i[o] = n)), new f(i);
        },
        remove: function(t) {
            var e = this.find(t);
            if (-1 == e) return this;
            var n = this.content.slice();
            return n.splice(e, 2), new f(n);
        },
        addToStart: function(t, e) {
            return new f([
                t,
                e
            ].concat(this.remove(t).content));
        },
        addToEnd: function(t, e) {
            var n = this.remove(t).content.slice();
            return n.push(t, e), new f(n);
        },
        addBefore: function(t, e, n) {
            var r = this.remove(e), o = r.content.slice(), i = r.find(t);
            return o.splice(-1 == i ? o.length : i, 0, e, n), new f(o);
        },
        forEach: function(t) {
            for(var e = 0; e < this.content.length; e += 2)t(this.content[e], this.content[e + 1]);
        },
        prepend: function(t) {
            return (t = f.from(t)).size ? new f(t.content.concat(this.subtract(t).content)) : this;
        },
        append: function(t) {
            return (t = f.from(t)).size ? new f(this.subtract(t).content.concat(t.content)) : this;
        },
        subtract: function(t) {
            var e = this;
            t = f.from(t);
            for(var n = 0; n < t.content.length; n += 2)e = e.remove(t.content[n]);
            return e;
        },
        get size () {
            return this.content.length >> 1;
        }
    }, f.from = function(t) {
        if (t instanceof f) return t;
        var e = [];
        if (t) for(var n in t)e.push(n, t[n]);
        return new f(e);
    };
    var u = f;
    function d(t, e, n) {
        for(var r = 0;; r++){
            if (r == t.childCount || r == e.childCount) return t.childCount == e.childCount ? null : n;
            var o = t.child(r), i = e.child(r);
            if (o != i) {
                if (!o.sameMarkup(i)) return n;
                if (o.isText && o.text != i.text) {
                    for(var s = 0; o.text[s] == i.text[s]; s++)n++;
                    return n;
                }
                if (o.content.size || i.content.size) {
                    var a = d(o.content, i.content, n + 1);
                    if (null != a) return a;
                }
                n += o.nodeSize;
            } else n += o.nodeSize;
        }
    }
    function m(t, e, n, r) {
        for(var o = t.childCount, i = e.childCount;;){
            if (0 == o || 0 == i) return o == i ? null : {
                a: n,
                b: r
            };
            var s = t.child(--o), a = e.child(--i), c = s.nodeSize;
            if (s != a) {
                if (!s.sameMarkup(a)) return {
                    a: n,
                    b: r
                };
                if (s.isText && s.text != a.text) {
                    for(var h = 0, p = Math.min(s.text.length, a.text.length); h < p && s.text[s.text.length - h - 1] == a.text[a.text.length - h - 1];)h++, n--, r--;
                    return {
                        a: n,
                        b: r
                    };
                }
                if (s.content.size || a.content.size) {
                    var l = m(s.content, a.content, n - 1, r - 1);
                    if (l) return l;
                }
                n -= c, r -= c;
            } else n -= c, r -= c;
        }
    }
    var v = function(t, e) {
        if (this.content = t, this.size = e || 0, null == e) for(var n = 0; n < t.length; n++)this.size += t[n].nodeSize;
    }, y = {
        firstChild: {
            configurable: !0
        },
        lastChild: {
            configurable: !0
        },
        childCount: {
            configurable: !0
        }
    };
    v.prototype.nodesBetween = function(t, e, n, r, o) {
        void 0 === r && (r = 0);
        for(var i = 0, s = 0; s < e; i++){
            var a = this.content[i], c = s + a.nodeSize;
            if (c > t && !1 !== n(a, r + s, o, i) && a.content.size) {
                var h = s + 1;
                a.nodesBetween(Math.max(0, t - h), Math.min(a.content.size, e - h), n, r + h);
            }
            s = c;
        }
    }, v.prototype.descendants = function(t) {
        this.nodesBetween(0, this.size, t);
    }, v.prototype.textBetween = function(t, e, n, r) {
        var o = "", i = !0;
        return this.nodesBetween(t, e, function(s, a) {
            s.isText ? (o += s.text.slice(Math.max(t, a) - a, e - a), i = !n) : s.isLeaf && r ? (o += r, i = !n) : !i && s.isBlock && (o += n, i = !0);
        }, 0), o;
    }, v.prototype.append = function(t) {
        if (!t.size) return this;
        if (!this.size) return t;
        var e = this.lastChild, n = t.firstChild, r = this.content.slice(), o = 0;
        for(e.isText && e.sameMarkup(n) && (r[r.length - 1] = e.withText(e.text + n.text), o = 1); o < t.content.length; o++)r.push(t.content[o]);
        return new v(r, this.size + t.size);
    }, v.prototype.cut = function(t, e) {
        if (null == e && (e = this.size), 0 == t && e == this.size) return this;
        var n = [], r = 0;
        if (e > t) for(var o = 0, i = 0; i < e; o++){
            var s = this.content[o], a = i + s.nodeSize;
            a > t && ((i < t || a > e) && (s = s.isText ? s.cut(Math.max(0, t - i), Math.min(s.text.length, e - i)) : s.cut(Math.max(0, t - i - 1), Math.min(s.content.size, e - i - 1))), n.push(s), r += s.nodeSize), i = a;
        }
        return new v(n, r);
    }, v.prototype.cutByIndex = function(t, e) {
        return t == e ? v.empty : 0 == t && e == this.content.length ? this : new v(this.content.slice(t, e));
    }, v.prototype.replaceChild = function(t, e) {
        var n = this.content[t];
        if (n == e) return this;
        var r = this.content.slice(), o = this.size + e.nodeSize - n.nodeSize;
        return r[t] = e, new v(r, o);
    }, v.prototype.addToStart = function(t) {
        return new v([
            t
        ].concat(this.content), this.size + t.nodeSize);
    }, v.prototype.addToEnd = function(t) {
        return new v(this.content.concat(t), this.size + t.nodeSize);
    }, v.prototype.eq = function(t) {
        if (this.content.length != t.content.length) return !1;
        for(var e = 0; e < this.content.length; e++)if (!this.content[e].eq(t.content[e])) return !1;
        return !0;
    }, y.firstChild.get = function() {
        return this.content.length ? this.content[0] : null;
    }, y.lastChild.get = function() {
        return this.content.length ? this.content[this.content.length - 1] : null;
    }, y.childCount.get = function() {
        return this.content.length;
    }, v.prototype.child = function(t) {
        var e = this.content[t];
        if (!e) throw new RangeError("Index " + t + " out of range for " + this);
        return e;
    }, v.prototype.maybeChild = function(t) {
        return this.content[t];
    }, v.prototype.forEach = function(t) {
        for(var e = 0, n = 0; e < this.content.length; e++){
            var r = this.content[e];
            t(r, n, e), n += r.nodeSize;
        }
    }, v.prototype.findDiffStart = function(t, e) {
        return void 0 === e && (e = 0), d(this, t, e);
    }, v.prototype.findDiffEnd = function(t, e, n) {
        return void 0 === e && (e = this.size), void 0 === n && (n = t.size), m(this, t, e, n);
    }, v.prototype.findIndex = function(t, e) {
        if (void 0 === e && (e = -1), 0 == t) return w(0, t);
        if (t == this.size) return w(this.content.length, t);
        if (t > this.size || t < 0) throw new RangeError("Position " + t + " outside of fragment (" + this + ")");
        for(var n = 0, r = 0;; n++){
            var o = r + this.child(n).nodeSize;
            if (o >= t) return o == t || e > 0 ? w(n + 1, o) : w(n, r);
            r = o;
        }
    }, v.prototype.toString = function() {
        return "<" + this.toStringInner() + ">";
    }, v.prototype.toStringInner = function() {
        return this.content.join(", ");
    }, v.prototype.toJSON = function() {
        return this.content.length ? this.content.map(function(t) {
            return t.toJSON();
        }) : null;
    }, v.fromJSON = function(t, e) {
        if (!e) return v.empty;
        if (!Array.isArray(e)) throw new RangeError("Invalid input for Fragment.fromJSON");
        return new v(e.map(t.nodeFromJSON));
    }, v.fromArray = function(t) {
        if (!t.length) return v.empty;
        for(var e, n = 0, r = 0; r < t.length; r++){
            var o = t[r];
            n += o.nodeSize, r && o.isText && t[r - 1].sameMarkup(o) ? (e || (e = t.slice(0, r)), e[e.length - 1] = o.withText(e[e.length - 1].text + o.text)) : e && e.push(o);
        }
        return new v(e || t, n);
    }, v.from = function(t) {
        if (!t) return v.empty;
        if (t instanceof v) return t;
        if (Array.isArray(t)) return this.fromArray(t);
        if (t.attrs) return new v([
            t
        ], t.nodeSize);
        throw new RangeError("Can not convert " + t + " to a Fragment" + (t.nodesBetween ? " (looks like multiple versions of prosemirror-model were loaded)" : ""));
    }, Object.defineProperties(v.prototype, y);
    var g = {
        index: 0,
        offset: 0
    };
    function w(t, e) {
        return g.index = t, g.offset = e, g;
    }
    function b(t, e) {
        if (t === e) return !0;
        if (!t || "object" != typeof t || !e || "object" != typeof e) return !1;
        var n = Array.isArray(t);
        if (Array.isArray(e) != n) return !1;
        if (n) {
            if (t.length != e.length) return !1;
            for(var r = 0; r < t.length; r++)if (!b(t[r], e[r])) return !1;
        } else {
            for(var o in t)if (!(o in e) || !b(t[o], e[o])) return !1;
            for(var i in e)if (!(i in t)) return !1;
        }
        return !0;
    }
    v.empty = new v([], 0);
    var k = function(t, e) {
        this.type = t, this.attrs = e;
    };
    function x(t) {
        var e = Error.call(this, t);
        return e.__proto__ = x.prototype, e;
    }
    k.prototype.addToSet = function(t) {
        for(var e, n = !1, r = 0; r < t.length; r++){
            var o = t[r];
            if (this.eq(o)) return t;
            if (this.type.excludes(o.type)) e || (e = t.slice(0, r));
            else {
                if (o.type.excludes(this.type)) return t;
                !n && o.type.rank > this.type.rank && (e || (e = t.slice(0, r)), e.push(this), n = !0), e && e.push(o);
            }
        }
        return e || (e = t.slice()), n || e.push(this), e;
    }, k.prototype.removeFromSet = function(t) {
        for(var e = 0; e < t.length; e++)if (this.eq(t[e])) return t.slice(0, e).concat(t.slice(e + 1));
        return t;
    }, k.prototype.isInSet = function(t) {
        for(var e = 0; e < t.length; e++)if (this.eq(t[e])) return !0;
        return !1;
    }, k.prototype.eq = function(t) {
        return this == t || this.type == t.type && b(this.attrs, t.attrs);
    }, k.prototype.toJSON = function() {
        var t = {
            type: this.type.name
        };
        for(var e in this.attrs){
            t.attrs = this.attrs;
            break;
        }
        return t;
    }, k.fromJSON = function(t, e) {
        if (!e) throw new RangeError("Invalid input for Mark.fromJSON");
        var n = t.marks[e.type];
        if (!n) throw new RangeError("There is no mark type " + e.type + " in this schema");
        return n.create(e.attrs);
    }, k.sameSet = function(t, e) {
        if (t == e) return !0;
        if (t.length != e.length) return !1;
        for(var n = 0; n < t.length; n++)if (!t[n].eq(e[n])) return !1;
        return !0;
    }, k.setFrom = function(t) {
        if (!t || 0 == t.length) return k.none;
        if (t instanceof k) return [
            t
        ];
        var e = t.slice();
        return e.sort(function(t, e) {
            return t.type.rank - e.type.rank;
        }), e;
    }, k.none = [], x.prototype = Object.create(Error.prototype), x.prototype.constructor = x, x.prototype.name = "ReplaceError";
    var S = function(t, e, n) {
        this.content = t, this.openStart = e, this.openEnd = n;
    }, O = {
        size: {
            configurable: !0
        }
    };
    function M(t, e, n) {
        var r = t.findIndex(e), o = r.index, i = r.offset, s = t.maybeChild(o), a = t.findIndex(n), c = a.index, h = a.offset;
        if (i == e || s.isText) {
            if (h != n && !t.child(c).isText) throw new RangeError("Removing non-flat range");
            return t.cut(0, e).append(t.cut(n));
        }
        if (o != c) throw new RangeError("Removing non-flat range");
        return t.replaceChild(o, s.copy(M(s.content, e - i - 1, n - i - 1)));
    }
    function C(t, e, n, r) {
        var o = t.findIndex(e), i = o.index, s = o.offset, a = t.maybeChild(i);
        if (s == e || a.isText) return r && !r.canReplace(i, i, n) ? null : t.cut(0, e).append(n).append(t.cut(e));
        var c = C(a.content, e - s - 1, n);
        return c && t.replaceChild(i, a.copy(c));
    }
    function N(t, e, n) {
        if (n.openStart > t.depth) throw new x("Inserted content deeper than insertion position");
        if (t.depth - n.openStart != e.depth - n.openEnd) throw new x("Inconsistent open depths");
        return T(t, e, n, 0);
    }
    function T(t, e, n, r) {
        var o = t.index(r), i = t.node(r);
        if (o == e.index(r) && r < t.depth - n.openStart) {
            var s = T(t, e, n, r + 1);
            return i.copy(i.content.replaceChild(o, s));
        }
        if (n.content.size) {
            if (n.openStart || n.openEnd || t.depth != r || e.depth != r) {
                var a = function(t, e) {
                    for(var n = e.depth - t.openStart, r = e.node(n).copy(t.content), o = n - 1; o >= 0; o--)r = e.node(o).copy(v.from(r));
                    return {
                        start: r.resolveNoCache(t.openStart + n),
                        end: r.resolveNoCache(r.content.size - t.openEnd - n)
                    };
                }(n, t);
                return I(i, z(t, a.start, a.end, e, r));
            }
            var c = t.parent, h = c.content;
            return I(c, h.cut(0, t.parentOffset).append(n.content).append(h.cut(e.parentOffset)));
        }
        return I(i, P(t, e, r));
    }
    function D(t, e) {
        if (!e.type.compatibleContent(t.type)) throw new x("Cannot join " + e.type.name + " onto " + t.type.name);
    }
    function E(t, e, n) {
        var r = t.node(n);
        return D(r, e.node(n)), r;
    }
    function A(t, e) {
        var n = e.length - 1;
        n >= 0 && t.isText && t.sameMarkup(e[n]) ? e[n] = t.withText(e[n].text + t.text) : e.push(t);
    }
    function R(t, e, n, r) {
        var o = (e || t).node(n), i = 0, s = e ? e.index(n) : o.childCount;
        t && (i = t.index(n), t.depth > n ? i++ : t.textOffset && (A(t.nodeAfter, r), i++));
        for(var a = i; a < s; a++)A(o.child(a), r);
        e && e.depth == n && e.textOffset && A(e.nodeBefore, r);
    }
    function I(t, e) {
        if (!t.type.validContent(e)) throw new x("Invalid content for node " + t.type.name);
        return t.copy(e);
    }
    function z(t, e, n, r, o) {
        var i = t.depth > o && E(t, e, o + 1), s = r.depth > o && E(n, r, o + 1), a = [];
        return R(null, t, o, a), i && s && e.index(o) == n.index(o) ? (D(i, s), A(I(i, z(t, e, n, r, o + 1)), a)) : (i && A(I(i, P(t, e, o + 1)), a), R(e, n, o, a), s && A(I(s, P(n, r, o + 1)), a)), R(r, null, o, a), new v(a);
    }
    function P(t, e, n) {
        var r = [];
        (R(null, t, n, r), t.depth > n) && A(I(E(t, e, n + 1), P(t, e, n + 1)), r);
        return R(e, null, n, r), new v(r);
    }
    O.size.get = function() {
        return this.content.size - this.openStart - this.openEnd;
    }, S.prototype.insertAt = function(t, e) {
        var n = C(this.content, t + this.openStart, e, null);
        return n && new S(n, this.openStart, this.openEnd);
    }, S.prototype.removeBetween = function(t, e) {
        return new S(M(this.content, t + this.openStart, e + this.openStart), this.openStart, this.openEnd);
    }, S.prototype.eq = function(t) {
        return this.content.eq(t.content) && this.openStart == t.openStart && this.openEnd == t.openEnd;
    }, S.prototype.toString = function() {
        return this.content + "(" + this.openStart + "," + this.openEnd + ")";
    }, S.prototype.toJSON = function() {
        if (!this.content.size) return null;
        var t = {
            content: this.content.toJSON()
        };
        return this.openStart > 0 && (t.openStart = this.openStart), this.openEnd > 0 && (t.openEnd = this.openEnd), t;
    }, S.fromJSON = function(t, e) {
        if (!e) return S.empty;
        var n = e.openStart || 0, r = e.openEnd || 0;
        if ("number" != typeof n || "number" != typeof r) throw new RangeError("Invalid input for Slice.fromJSON");
        return new S(v.fromJSON(t, e.content), n, r);
    }, S.maxOpen = function(t, e) {
        void 0 === e && (e = !0);
        for(var n = 0, r = 0, o = t.firstChild; o && !o.isLeaf && (e || !o.type.spec.isolating); o = o.firstChild)n++;
        for(var i = t.lastChild; i && !i.isLeaf && (e || !i.type.spec.isolating); i = i.lastChild)r++;
        return new S(t, n, r);
    }, Object.defineProperties(S.prototype, O), S.empty = new S(v.empty, 0, 0);
    var V = function(t, e, n) {
        this.pos = t, this.path = e, this.depth = e.length / 3 - 1, this.parentOffset = n;
    }, B = {
        parent: {
            configurable: !0
        },
        doc: {
            configurable: !0
        },
        textOffset: {
            configurable: !0
        },
        nodeAfter: {
            configurable: !0
        },
        nodeBefore: {
            configurable: !0
        }
    };
    V.prototype.resolveDepth = function(t) {
        return null == t ? this.depth : t < 0 ? this.depth + t : t;
    }, B.parent.get = function() {
        return this.node(this.depth);
    }, B.doc.get = function() {
        return this.node(0);
    }, V.prototype.node = function(t) {
        return this.path[3 * this.resolveDepth(t)];
    }, V.prototype.index = function(t) {
        return this.path[3 * this.resolveDepth(t) + 1];
    }, V.prototype.indexAfter = function(t) {
        return t = this.resolveDepth(t), this.index(t) + (t != this.depth || this.textOffset ? 1 : 0);
    }, V.prototype.start = function(t) {
        return 0 == (t = this.resolveDepth(t)) ? 0 : this.path[3 * t - 1] + 1;
    }, V.prototype.end = function(t) {
        return t = this.resolveDepth(t), this.start(t) + this.node(t).content.size;
    }, V.prototype.before = function(t) {
        if (!(t = this.resolveDepth(t))) throw new RangeError("There is no position before the top-level node");
        return t == this.depth + 1 ? this.pos : this.path[3 * t - 1];
    }, V.prototype.after = function(t) {
        if (!(t = this.resolveDepth(t))) throw new RangeError("There is no position after the top-level node");
        return t == this.depth + 1 ? this.pos : this.path[3 * t - 1] + this.path[3 * t].nodeSize;
    }, B.textOffset.get = function() {
        return this.pos - this.path[this.path.length - 1];
    }, B.nodeAfter.get = function() {
        var t = this.parent, e = this.index(this.depth);
        if (e == t.childCount) return null;
        var n = this.pos - this.path[this.path.length - 1], r = t.child(e);
        return n ? t.child(e).cut(n) : r;
    }, B.nodeBefore.get = function() {
        var t = this.index(this.depth), e = this.pos - this.path[this.path.length - 1];
        return e ? this.parent.child(t).cut(0, e) : 0 == t ? null : this.parent.child(t - 1);
    }, V.prototype.posAtIndex = function(t, e) {
        e = this.resolveDepth(e);
        for(var n = this.path[3 * e], r = 0 == e ? 0 : this.path[3 * e - 1] + 1, o = 0; o < t; o++)r += n.child(o).nodeSize;
        return r;
    }, V.prototype.marks = function() {
        var t = this.parent, e = this.index();
        if (0 == t.content.size) return k.none;
        if (this.textOffset) return t.child(e).marks;
        var n = t.maybeChild(e - 1), r = t.maybeChild(e);
        if (!n) {
            var o = n;
            n = r, r = o;
        }
        for(var i = n.marks, s = 0; s < i.length; s++)!1 !== i[s].type.spec.inclusive || r && i[s].isInSet(r.marks) || (i = i[s--].removeFromSet(i));
        return i;
    }, V.prototype.marksAcross = function(t) {
        var e = this.parent.maybeChild(this.index());
        if (!e || !e.isInline) return null;
        for(var n = e.marks, r = t.parent.maybeChild(t.index()), o = 0; o < n.length; o++)!1 !== n[o].type.spec.inclusive || r && n[o].isInSet(r.marks) || (n = n[o--].removeFromSet(n));
        return n;
    }, V.prototype.sharedDepth = function(t) {
        for(var e = this.depth; e > 0; e--)if (this.start(e) <= t && this.end(e) >= t) return e;
        return 0;
    }, V.prototype.blockRange = function(t, e) {
        if (void 0 === t && (t = this), t.pos < this.pos) return t.blockRange(this);
        for(var n = this.depth - (this.parent.inlineContent || this.pos == t.pos ? 1 : 0); n >= 0; n--)if (t.pos <= this.end(n) && (!e || e(this.node(n)))) return new j(this, t, n);
    }, V.prototype.sameParent = function(t) {
        return this.pos - this.parentOffset == t.pos - t.parentOffset;
    }, V.prototype.max = function(t) {
        return t.pos > this.pos ? t : this;
    }, V.prototype.min = function(t) {
        return t.pos < this.pos ? t : this;
    }, V.prototype.toString = function() {
        for(var t = "", e = 1; e <= this.depth; e++)t += (t ? "/" : "") + this.node(e).type.name + "_" + this.index(e - 1);
        return t + ":" + this.parentOffset;
    }, V.resolve = function(t, e) {
        if (!(e >= 0 && e <= t.content.size)) throw new RangeError("Position " + e + " out of range");
        for(var n = [], r = 0, o = e, i = t;;){
            var s = i.content.findIndex(o), a = s.index, c = s.offset, h = o - c;
            if (n.push(i, a, r + c), !h) break;
            if ((i = i.child(a)).isText) break;
            o = h - 1, r += c + 1;
        }
        return new V(e, n, o);
    }, V.resolveCached = function(t, e) {
        for(var n = 0; n < $.length; n++){
            var r = $[n];
            if (r.pos == e && r.doc == t) return r;
        }
        var o = $[F] = V.resolve(t, e);
        return F = (F + 1) % _, o;
    }, Object.defineProperties(V.prototype, B);
    var $ = [], F = 0, _ = 12, j = function(t, e, n) {
        this.$from = t, this.$to = e, this.depth = n;
    }, L = {
        start: {
            configurable: !0
        },
        end: {
            configurable: !0
        },
        parent: {
            configurable: !0
        },
        startIndex: {
            configurable: !0
        },
        endIndex: {
            configurable: !0
        }
    };
    L.start.get = function() {
        return this.$from.before(this.depth + 1);
    }, L.end.get = function() {
        return this.$to.after(this.depth + 1);
    }, L.parent.get = function() {
        return this.$from.node(this.depth);
    }, L.startIndex.get = function() {
        return this.$from.index(this.depth);
    }, L.endIndex.get = function() {
        return this.$to.indexAfter(this.depth);
    }, Object.defineProperties(j.prototype, L);
    var J = Object.create(null), q = function(t, e, n, r) {
        this.type = t, this.attrs = e, this.content = n || v.empty, this.marks = r || k.none;
    }, W = {
        nodeSize: {
            configurable: !0
        },
        childCount: {
            configurable: !0
        },
        textContent: {
            configurable: !0
        },
        firstChild: {
            configurable: !0
        },
        lastChild: {
            configurable: !0
        },
        isBlock: {
            configurable: !0
        },
        isTextblock: {
            configurable: !0
        },
        inlineContent: {
            configurable: !0
        },
        isInline: {
            configurable: !0
        },
        isText: {
            configurable: !0
        },
        isLeaf: {
            configurable: !0
        },
        isAtom: {
            configurable: !0
        }
    };
    W.nodeSize.get = function() {
        return this.isLeaf ? 1 : 2 + this.content.size;
    }, W.childCount.get = function() {
        return this.content.childCount;
    }, q.prototype.child = function(t) {
        return this.content.child(t);
    }, q.prototype.maybeChild = function(t) {
        return this.content.maybeChild(t);
    }, q.prototype.forEach = function(t) {
        this.content.forEach(t);
    }, q.prototype.nodesBetween = function(t, e, n, r) {
        void 0 === r && (r = 0), this.content.nodesBetween(t, e, n, r, this);
    }, q.prototype.descendants = function(t) {
        this.nodesBetween(0, this.content.size, t);
    }, W.textContent.get = function() {
        return this.textBetween(0, this.content.size, "");
    }, q.prototype.textBetween = function(t, e, n, r) {
        return this.content.textBetween(t, e, n, r);
    }, W.firstChild.get = function() {
        return this.content.firstChild;
    }, W.lastChild.get = function() {
        return this.content.lastChild;
    }, q.prototype.eq = function(t) {
        return this == t || this.sameMarkup(t) && this.content.eq(t.content);
    }, q.prototype.sameMarkup = function(t) {
        return this.hasMarkup(t.type, t.attrs, t.marks);
    }, q.prototype.hasMarkup = function(t, e, n) {
        return this.type == t && b(this.attrs, e || t.defaultAttrs || J) && k.sameSet(this.marks, n || k.none);
    }, q.prototype.copy = function(t) {
        return void 0 === t && (t = null), t == this.content ? this : new this.constructor(this.type, this.attrs, t, this.marks);
    }, q.prototype.mark = function(t) {
        return t == this.marks ? this : new this.constructor(this.type, this.attrs, this.content, t);
    }, q.prototype.cut = function(t, e) {
        return 0 == t && e == this.content.size ? this : this.copy(this.content.cut(t, e));
    }, q.prototype.slice = function(t, e, n) {
        if (void 0 === e && (e = this.content.size), void 0 === n && (n = !1), t == e) return S.empty;
        var r = this.resolve(t), o = this.resolve(e), i = n ? 0 : r.sharedDepth(e), s = r.start(i), a = r.node(i).content.cut(r.pos - s, o.pos - s);
        return new S(a, r.depth - i, o.depth - i);
    }, q.prototype.replace = function(t, e, n) {
        return N(this.resolve(t), this.resolve(e), n);
    }, q.prototype.nodeAt = function(t) {
        for(var e = this;;){
            var n = e.content.findIndex(t), r = n.index, o = n.offset;
            if (!(e = e.maybeChild(r))) return null;
            if (o == t || e.isText) return e;
            t -= o + 1;
        }
    }, q.prototype.childAfter = function(t) {
        var e = this.content.findIndex(t), n = e.index, r = e.offset;
        return {
            node: this.content.maybeChild(n),
            index: n,
            offset: r
        };
    }, q.prototype.childBefore = function(t) {
        if (0 == t) return {
            node: null,
            index: 0,
            offset: 0
        };
        var e = this.content.findIndex(t), n = e.index, r = e.offset;
        if (r < t) return {
            node: this.content.child(n),
            index: n,
            offset: r
        };
        var o = this.content.child(n - 1);
        return {
            node: o,
            index: n - 1,
            offset: r - o.nodeSize
        };
    }, q.prototype.resolve = function(t) {
        return V.resolveCached(this, t);
    }, q.prototype.resolveNoCache = function(t) {
        return V.resolve(this, t);
    }, q.prototype.rangeHasMark = function(t, e, n) {
        var r = !1;
        return e > t && this.nodesBetween(t, e, function(t) {
            return n.isInSet(t.marks) && (r = !0), !r;
        }), r;
    }, W.isBlock.get = function() {
        return this.type.isBlock;
    }, W.isTextblock.get = function() {
        return this.type.isTextblock;
    }, W.inlineContent.get = function() {
        return this.type.inlineContent;
    }, W.isInline.get = function() {
        return this.type.isInline;
    }, W.isText.get = function() {
        return this.type.isText;
    }, W.isLeaf.get = function() {
        return this.type.isLeaf;
    }, W.isAtom.get = function() {
        return this.type.isAtom;
    }, q.prototype.toString = function() {
        if (this.type.spec.toDebugString) return this.type.spec.toDebugString(this);
        var t = this.type.name;
        return this.content.size && (t += "(" + this.content.toStringInner() + ")"), H(this.marks, t);
    }, q.prototype.contentMatchAt = function(t) {
        var e = this.type.contentMatch.matchFragment(this.content, 0, t);
        if (!e) throw new Error("Called contentMatchAt on a node with invalid content");
        return e;
    }, q.prototype.canReplace = function(t, e, n, r, o) {
        void 0 === n && (n = v.empty), void 0 === r && (r = 0), void 0 === o && (o = n.childCount);
        var i = this.contentMatchAt(t).matchFragment(n, r, o), s = i && i.matchFragment(this.content, e);
        if (!s || !s.validEnd) return !1;
        for(var a = r; a < o; a++)if (!this.type.allowsMarks(n.child(a).marks)) return !1;
        return !0;
    }, q.prototype.canReplaceWith = function(t, e, n, r) {
        if (r && !this.type.allowsMarks(r)) return !1;
        var o = this.contentMatchAt(t).matchType(n), i = o && o.matchFragment(this.content, e);
        return !!i && i.validEnd;
    }, q.prototype.canAppend = function(t) {
        return t.content.size ? this.canReplace(this.childCount, this.childCount, t.content) : this.type.compatibleContent(t.type);
    }, q.prototype.check = function() {
        if (!this.type.validContent(this.content)) throw new RangeError("Invalid content for node " + this.type.name + ": " + this.content.toString().slice(0, 50));
        this.content.forEach(function(t) {
            return t.check();
        });
    }, q.prototype.toJSON = function() {
        var t = {
            type: this.type.name
        };
        for(var e in this.attrs){
            t.attrs = this.attrs;
            break;
        }
        return this.content.size && (t.content = this.content.toJSON()), this.marks.length && (t.marks = this.marks.map(function(t) {
            return t.toJSON();
        })), t;
    }, q.fromJSON = function(t, e) {
        if (!e) throw new RangeError("Invalid input for Node.fromJSON");
        var n = null;
        if (e.marks) {
            if (!Array.isArray(e.marks)) throw new RangeError("Invalid mark data for Node.fromJSON");
            n = e.marks.map(t.markFromJSON);
        }
        if ("text" == e.type) {
            if ("string" != typeof e.text) throw new RangeError("Invalid text node in JSON");
            return t.text(e.text, n);
        }
        var r = v.fromJSON(t, e.content);
        return t.nodeType(e.type).create(e.attrs, r, n);
    }, Object.defineProperties(q.prototype, W);
    var K = function(t) {
        function e(e, n, r, o) {
            if (t.call(this, e, n, null, o), !r) throw new RangeError("Empty text nodes are not allowed");
            this.text = r;
        }
        t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
        var n = {
            textContent: {
                configurable: !0
            },
            nodeSize: {
                configurable: !0
            }
        };
        return e.prototype.toString = function() {
            return this.type.spec.toDebugString ? this.type.spec.toDebugString(this) : H(this.marks, JSON.stringify(this.text));
        }, n.textContent.get = function() {
            return this.text;
        }, e.prototype.textBetween = function(t, e) {
            return this.text.slice(t, e);
        }, n.nodeSize.get = function() {
            return this.text.length;
        }, e.prototype.mark = function(t) {
            return t == this.marks ? this : new e(this.type, this.attrs, this.text, t);
        }, e.prototype.withText = function(t) {
            return t == this.text ? this : new e(this.type, this.attrs, t, this.marks);
        }, e.prototype.cut = function(t, e) {
            return void 0 === t && (t = 0), void 0 === e && (e = this.text.length), 0 == t && e == this.text.length ? this : this.withText(this.text.slice(t, e));
        }, e.prototype.eq = function(t) {
            return this.sameMarkup(t) && this.text == t.text;
        }, e.prototype.toJSON = function() {
            var e = t.prototype.toJSON.call(this);
            return e.text = this.text, e;
        }, Object.defineProperties(e.prototype, n), e;
    }(q);
    function H(t, e) {
        for(var n = t.length - 1; n >= 0; n--)e = t[n].type.name + "(" + e + ")";
        return e;
    }
    var U = function(t) {
        this.validEnd = t, this.next = [], this.wrapCache = [];
    }, G = {
        inlineContent: {
            configurable: !0
        },
        defaultType: {
            configurable: !0
        },
        edgeCount: {
            configurable: !0
        }
    };
    U.parse = function(t, e) {
        var n = new X(t, e);
        if (null == n.next) return U.empty;
        var r = Q(n);
        n.next && n.err("Unexpected trailing text");
        var o = function(t) {
            var e = Object.create(null);
            return n(ot(t, 0));
            function n(r) {
                var o = [];
                r.forEach(function(e) {
                    t[e].forEach(function(e) {
                        var n = e.term, r = e.to;
                        if (n) {
                            var i = o.indexOf(n), s = i > -1 && o[i + 1];
                            ot(t, r).forEach(function(t) {
                                s || o.push(n, s = []), -1 == s.indexOf(t) && s.push(t);
                            });
                        }
                    });
                });
                for(var i = e[r.join(",")] = new U(r.indexOf(t.length - 1) > -1), s = 0; s < o.length; s += 2){
                    var a = o[s + 1].sort(rt);
                    i.next.push(o[s], e[a.join(",")] || n(a));
                }
                return i;
            }
        }(function(t) {
            var e = [
                []
            ];
            return o(i(t, 0), n()), e;
            function n() {
                return e.push([]) - 1;
            }
            function r(t, n, r) {
                var o = {
                    term: r,
                    to: n
                };
                return e[t].push(o), o;
            }
            function o(t, e) {
                t.forEach(function(t) {
                    return t.to = e;
                });
            }
            function i(t, e) {
                if ("choice" == t.type) return t.exprs.reduce(function(t, n) {
                    return t.concat(i(n, e));
                }, []);
                if ("seq" == t.type) for(var s = 0;; s++){
                    var a = i(t.exprs[s], e);
                    if (s == t.exprs.length - 1) return a;
                    o(a, e = n());
                }
                else {
                    if ("star" == t.type) {
                        var c = n();
                        return r(e, c), o(i(t.expr, c), c), [
                            r(c)
                        ];
                    }
                    if ("plus" == t.type) {
                        var h = n();
                        return o(i(t.expr, e), h), o(i(t.expr, h), h), [
                            r(h)
                        ];
                    }
                    if ("opt" == t.type) return [
                        r(e)
                    ].concat(i(t.expr, e));
                    if ("range" == t.type) {
                        for(var p = e, l = 0; l < t.min; l++){
                            var f = n();
                            o(i(t.expr, p), f), p = f;
                        }
                        if (-1 == t.max) o(i(t.expr, p), p);
                        else for(var u = t.min; u < t.max; u++){
                            var d = n();
                            r(p, d), o(i(t.expr, p), d), p = d;
                        }
                        return [
                            r(p)
                        ];
                    }
                    if ("name" == t.type) return [
                        r(e, null, t.value)
                    ];
                }
            }
        }(r));
        return function(t, e) {
            for(var n = 0, r = [
                t
            ]; n < r.length; n++){
                for(var o = r[n], i = !o.validEnd, s = [], a = 0; a < o.next.length; a += 2){
                    var c = o.next[a], h = o.next[a + 1];
                    s.push(c.name), !i || c.isText || c.hasRequiredAttrs() || (i = !1), -1 == r.indexOf(h) && r.push(h);
                }
                i && e.err("Only non-generatable nodes (" + s.join(", ") + ") in a required position (see https://prosemirror.net/docs/guide/#generatable)");
            }
        }(o, n), o;
    }, U.prototype.matchType = function(t) {
        for(var e = 0; e < this.next.length; e += 2)if (this.next[e] == t) return this.next[e + 1];
        return null;
    }, U.prototype.matchFragment = function(t, e, n) {
        void 0 === e && (e = 0), void 0 === n && (n = t.childCount);
        for(var r = this, o = e; r && o < n; o++)r = r.matchType(t.child(o).type);
        return r;
    }, G.inlineContent.get = function() {
        var t = this.next[0];
        return !!t && t.isInline;
    }, G.defaultType.get = function() {
        for(var t = 0; t < this.next.length; t += 2){
            var e = this.next[t];
            if (!e.isText && !e.hasRequiredAttrs()) return e;
        }
    }, U.prototype.compatible = function(t) {
        for(var e = 0; e < this.next.length; e += 2)for(var n = 0; n < t.next.length; n += 2)if (this.next[e] == t.next[n]) return !0;
        return !1;
    }, U.prototype.fillBefore = function(t, e, n) {
        void 0 === e && (e = !1), void 0 === n && (n = 0);
        var r = [
            this
        ];
        return function o(i, s) {
            var a = i.matchFragment(t, n);
            if (a && (!e || a.validEnd)) return v.from(s.map(function(t) {
                return t.createAndFill();
            }));
            for(var c = 0; c < i.next.length; c += 2){
                var h = i.next[c], p = i.next[c + 1];
                if (!h.isText && !h.hasRequiredAttrs() && -1 == r.indexOf(p)) {
                    r.push(p);
                    var l = o(p, s.concat(h));
                    if (l) return l;
                }
            }
        }(this, []);
    }, U.prototype.findWrapping = function(t) {
        for(var e = 0; e < this.wrapCache.length; e += 2)if (this.wrapCache[e] == t) return this.wrapCache[e + 1];
        var n = this.computeWrapping(t);
        return this.wrapCache.push(t, n), n;
    }, U.prototype.computeWrapping = function(t) {
        for(var e = Object.create(null), n = [
            {
                match: this,
                type: null,
                via: null
            }
        ]; n.length;){
            var r = n.shift(), o = r.match;
            if (o.matchType(t)) {
                for(var i = [], s = r; s.type; s = s.via)i.push(s.type);
                return i.reverse();
            }
            for(var a = 0; a < o.next.length; a += 2){
                var c = o.next[a];
                c.isLeaf || c.hasRequiredAttrs() || c.name in e || r.type && !o.next[a + 1].validEnd || (n.push({
                    match: c.contentMatch,
                    type: c,
                    via: r
                }), e[c.name] = !0);
            }
        }
    }, G.edgeCount.get = function() {
        return this.next.length >> 1;
    }, U.prototype.edge = function(t) {
        var e = t << 1;
        if (e >= this.next.length) throw new RangeError("There's no " + t + "th edge in this content match");
        return {
            type: this.next[e],
            next: this.next[e + 1]
        };
    }, U.prototype.toString = function() {
        var t = [];
        return function e(n) {
            t.push(n);
            for(var r = 1; r < n.next.length; r += 2)-1 == t.indexOf(n.next[r]) && e(n.next[r]);
        }(this), t.map(function(e, n) {
            for(var r = n + (e.validEnd ? "*" : " ") + " ", o = 0; o < e.next.length; o += 2)r += (o ? ", " : "") + e.next[o].name + "->" + t.indexOf(e.next[o + 1]);
            return r;
        }).join("\n");
    }, Object.defineProperties(U.prototype, G), U.empty = new U(!0);
    var X = function(t, e) {
        this.string = t, this.nodeTypes = e, this.inline = null, this.pos = 0, this.tokens = t.split(/\s*(?=\b|\W|$)/), "" == this.tokens[this.tokens.length - 1] && this.tokens.pop(), "" == this.tokens[0] && this.tokens.unshift();
    }, Y = {
        next: {
            configurable: !0
        }
    };
    function Q(t) {
        var e = [];
        do e.push(Z(t));
        while (t.eat("|"));
        return 1 == e.length ? e[0] : {
            type: "choice",
            exprs: e
        };
    }
    function Z(t) {
        var e = [];
        do e.push(tt(t));
        while (t.next && ")" != t.next && "|" != t.next);
        return 1 == e.length ? e[0] : {
            type: "seq",
            exprs: e
        };
    }
    function tt(t) {
        for(var e = function(t) {
            if (t.eat("(")) {
                var e = Q(t);
                return t.eat(")") || t.err("Missing closing paren"), e;
            }
            if (!/\W/.test(t.next)) {
                var n = (function(t, e) {
                    var n = t.nodeTypes, r = n[e];
                    if (r) return [
                        r
                    ];
                    var o = [];
                    for(var i in n){
                        var s = n[i];
                        s.groups.indexOf(e) > -1 && o.push(s);
                    }
                    0 == o.length && t.err("No node type or group '" + e + "' found");
                    return o;
                })(t, t.next).map(function(e) {
                    return null == t.inline ? t.inline = e.isInline : t.inline != e.isInline && t.err("Mixing inline and block content"), {
                        type: "name",
                        value: e
                    };
                });
                return t.pos++, 1 == n.length ? n[0] : {
                    type: "choice",
                    exprs: n
                };
            }
            t.err("Unexpected token '" + t.next + "'");
        }(t);;)if (t.eat("+")) e = {
            type: "plus",
            expr: e
        };
        else if (t.eat("*")) e = {
            type: "star",
            expr: e
        };
        else if (t.eat("?")) e = {
            type: "opt",
            expr: e
        };
        else {
            if (!t.eat("{")) break;
            e = nt(t, e);
        }
        return e;
    }
    function et(t) {
        /\D/.test(t.next) && t.err("Expected number, got '" + t.next + "'");
        var e = Number(t.next);
        return t.pos++, e;
    }
    function nt(t, e) {
        var n = et(t), r = n;
        return t.eat(",") && (r = "}" != t.next ? et(t) : -1), t.eat("}") || t.err("Unclosed braced range"), {
            type: "range",
            min: n,
            max: r,
            expr: e
        };
    }
    function rt(t, e) {
        return e - t;
    }
    function ot(t, e) {
        var n = [];
        return function e(r) {
            var o = t[r];
            if (1 == o.length && !o[0].term) return e(o[0].to);
            n.push(r);
            for(var i = 0; i < o.length; i++){
                var s = o[i], a = s.term, c = s.to;
                a || -1 != n.indexOf(c) || e(c);
            }
        }(e), n.sort(rt);
    }
    function it(t) {
        var e = Object.create(null);
        for(var n in t){
            var r = t[n];
            if (!r.hasDefault) return null;
            e[n] = r.default;
        }
        return e;
    }
    function st(t, e) {
        var n = Object.create(null);
        for(var r in t){
            var o = e && e[r];
            if (void 0 === o) {
                var i = t[r];
                if (!i.hasDefault) throw new RangeError("No value supplied for attribute " + r);
                o = i.default;
            }
            n[r] = o;
        }
        return n;
    }
    function at(t) {
        var e = Object.create(null);
        if (t) for(var n in t)e[n] = new pt(t[n]);
        return e;
    }
    Y.next.get = function() {
        return this.tokens[this.pos];
    }, X.prototype.eat = function(t) {
        return this.next == t && (this.pos++ || !0);
    }, X.prototype.err = function(t) {
        throw new SyntaxError(t + " (in content expression '" + this.string + "')");
    }, Object.defineProperties(X.prototype, Y);
    var ct = function(t, e, n) {
        this.name = t, this.schema = e, this.spec = n, this.groups = n.group ? n.group.split(" ") : [], this.attrs = at(n.attrs), this.defaultAttrs = it(this.attrs), this.contentMatch = null, this.markSet = null, this.inlineContent = null, this.isBlock = !(n.inline || "text" == t), this.isText = "text" == t;
    }, ht = {
        isInline: {
            configurable: !0
        },
        isTextblock: {
            configurable: !0
        },
        isLeaf: {
            configurable: !0
        },
        isAtom: {
            configurable: !0
        }
    };
    ht.isInline.get = function() {
        return !this.isBlock;
    }, ht.isTextblock.get = function() {
        return this.isBlock && this.inlineContent;
    }, ht.isLeaf.get = function() {
        return this.contentMatch == U.empty;
    }, ht.isAtom.get = function() {
        return this.isLeaf || this.spec.atom;
    }, ct.prototype.hasRequiredAttrs = function() {
        for(var t in this.attrs)if (this.attrs[t].isRequired) return !0;
        return !1;
    }, ct.prototype.compatibleContent = function(t) {
        return this == t || this.contentMatch.compatible(t.contentMatch);
    }, ct.prototype.computeAttrs = function(t) {
        return !t && this.defaultAttrs ? this.defaultAttrs : st(this.attrs, t);
    }, ct.prototype.create = function(t, e, n) {
        if (this.isText) throw new Error("NodeType.create can't construct text nodes");
        return new q(this, this.computeAttrs(t), v.from(e), k.setFrom(n));
    }, ct.prototype.createChecked = function(t, e, n) {
        if (e = v.from(e), !this.validContent(e)) throw new RangeError("Invalid content for node " + this.name);
        return new q(this, this.computeAttrs(t), e, k.setFrom(n));
    }, ct.prototype.createAndFill = function(t, e, n) {
        if (t = this.computeAttrs(t), (e = v.from(e)).size) {
            var r = this.contentMatch.fillBefore(e);
            if (!r) return null;
            e = r.append(e);
        }
        var o = this.contentMatch.matchFragment(e).fillBefore(v.empty, !0);
        return o ? new q(this, t, e.append(o), k.setFrom(n)) : null;
    }, ct.prototype.validContent = function(t) {
        var e = this.contentMatch.matchFragment(t);
        if (!e || !e.validEnd) return !1;
        for(var n = 0; n < t.childCount; n++)if (!this.allowsMarks(t.child(n).marks)) return !1;
        return !0;
    }, ct.prototype.allowsMarkType = function(t) {
        return null == this.markSet || this.markSet.indexOf(t) > -1;
    }, ct.prototype.allowsMarks = function(t) {
        if (null == this.markSet) return !0;
        for(var e = 0; e < t.length; e++)if (!this.allowsMarkType(t[e].type)) return !1;
        return !0;
    }, ct.prototype.allowedMarks = function(t) {
        if (null == this.markSet) return t;
        for(var e, n = 0; n < t.length; n++)this.allowsMarkType(t[n].type) ? e && e.push(t[n]) : e || (e = t.slice(0, n));
        return e ? e.length ? e : k.empty : t;
    }, ct.compile = function(t, e) {
        var n = Object.create(null);
        t.forEach(function(t, r) {
            return n[t] = new ct(t, e, r);
        });
        var r = e.spec.topNode || "doc";
        if (!n[r]) throw new RangeError("Schema is missing its top node type ('" + r + "')");
        if (!n.text) throw new RangeError("Every schema needs a 'text' type");
        for(var o in n.text.attrs)throw new RangeError("The text node type should not have attributes");
        return n;
    }, Object.defineProperties(ct.prototype, ht);
    var pt = function(t) {
        this.hasDefault = Object.prototype.hasOwnProperty.call(t, "default"), this.default = t.default;
    }, lt = {
        isRequired: {
            configurable: !0
        }
    };
    lt.isRequired.get = function() {
        return !this.hasDefault;
    }, Object.defineProperties(pt.prototype, lt);
    var ft = function(t, e, n, r) {
        this.name = t, this.schema = n, this.spec = r, this.attrs = at(r.attrs), this.rank = e, this.excluded = null;
        var o = it(this.attrs);
        this.instance = o && new k(this, o);
    };
    ft.prototype.create = function(t) {
        return !t && this.instance ? this.instance : new k(this, st(this.attrs, t));
    }, ft.compile = function(t, e) {
        var n = Object.create(null), r = 0;
        return t.forEach(function(t, o) {
            return n[t] = new ft(t, r++, e, o);
        }), n;
    }, ft.prototype.removeFromSet = function(t) {
        for(var e = 0; e < t.length; e++)if (t[e].type == this) return t.slice(0, e).concat(t.slice(e + 1));
        return t;
    }, ft.prototype.isInSet = function(t) {
        for(var e = 0; e < t.length; e++)if (t[e].type == this) return t[e];
    }, ft.prototype.excludes = function(t) {
        return this.excluded.indexOf(t) > -1;
    };
    var ut = function(t) {
        for(var e in this.spec = {}, t)this.spec[e] = t[e];
        this.spec.nodes = u.from(t.nodes), this.spec.marks = u.from(t.marks), this.nodes = ct.compile(this.spec.nodes, this), this.marks = ft.compile(this.spec.marks, this);
        var n = Object.create(null);
        for(var r in this.nodes){
            if (r in this.marks) throw new RangeError(r + " can not be both a node and a mark");
            var o = this.nodes[r], i = o.spec.content || "", s = o.spec.marks;
            o.contentMatch = n[i] || (n[i] = U.parse(i, this.nodes)), o.inlineContent = o.contentMatch.inlineContent, o.markSet = "_" == s ? null : s ? dt(this, s.split(" ")) : "" != s && o.inlineContent ? null : [];
        }
        for(var a in this.marks){
            var c = this.marks[a], h = c.spec.excludes;
            c.excluded = null == h ? [
                c
            ] : "" == h ? [] : dt(this, h.split(" "));
        }
        this.nodeFromJSON = this.nodeFromJSON.bind(this), this.markFromJSON = this.markFromJSON.bind(this), this.topNodeType = this.nodes[this.spec.topNode || "doc"], this.cached = Object.create(null), this.cached.wrappings = Object.create(null);
    };
    function dt(t, e) {
        for(var n = [], r = 0; r < e.length; r++){
            var o = e[r], i = t.marks[o], s = i;
            if (i) n.push(i);
            else for(var a in t.marks){
                var c = t.marks[a];
                ("_" == o || c.spec.group && c.spec.group.split(" ").indexOf(o) > -1) && n.push(s = c);
            }
            if (!s) throw new SyntaxError("Unknown mark type: '" + e[r] + "'");
        }
        return n;
    }
    ut.prototype.node = function(t, e, n, r) {
        if ("string" == typeof t) t = this.nodeType(t);
        else {
            if (!(t instanceof ct)) throw new RangeError("Invalid node type: " + t);
            if (t.schema != this) throw new RangeError("Node type from different schema used (" + t.name + ")");
        }
        return t.createChecked(e, n, r);
    }, ut.prototype.text = function(t, e) {
        var n = this.nodes.text;
        return new K(n, n.defaultAttrs, t, k.setFrom(e));
    }, ut.prototype.mark = function(t, e) {
        return "string" == typeof t && (t = this.marks[t]), t.create(e);
    }, ut.prototype.nodeFromJSON = function(t) {
        return q.fromJSON(this, t);
    }, ut.prototype.markFromJSON = function(t) {
        return k.fromJSON(this, t);
    }, ut.prototype.nodeType = function(t) {
        var e = this.nodes[t];
        if (!e) throw new RangeError("Unknown node type: " + t);
        return e;
    };
    var mt = function(t, e) {
        var n = this;
        this.schema = t, this.rules = e, this.tags = [], this.styles = [], e.forEach(function(t) {
            t.tag ? n.tags.push(t) : t.style && n.styles.push(t);
        }), this.normalizeLists = !this.tags.some(function(e) {
            if (!/^(ul|ol)\b/.test(e.tag) || !e.node) return !1;
            var n = t.nodes[e.node];
            return n.contentMatch.matchType(n);
        });
    };
    mt.prototype.parse = function(t, e) {
        void 0 === e && (e = {});
        var n = new kt(this, e, !1);
        return n.addAll(t, null, e.from, e.to), n.finish();
    }, mt.prototype.parseSlice = function(t, e) {
        void 0 === e && (e = {});
        var n = new kt(this, e, !0);
        return n.addAll(t, null, e.from, e.to), S.maxOpen(n.finish());
    }, mt.prototype.matchTag = function(t, e) {
        for(var n = 0; n < this.tags.length; n++){
            var r = this.tags[n];
            if (St(t, r.tag) && (void 0 === r.namespace || t.namespaceURI == r.namespace) && (!r.context || e.matchesContext(r.context))) {
                if (r.getAttrs) {
                    var o = r.getAttrs(t);
                    if (!1 === o) continue;
                    r.attrs = o;
                }
                return r;
            }
        }
    }, mt.prototype.matchStyle = function(t, e, n) {
        for(var r = 0; r < this.styles.length; r++){
            var o = this.styles[r];
            if (!(0 != o.style.indexOf(t) || o.context && !n.matchesContext(o.context) || o.style.length > t.length && (61 != o.style.charCodeAt(t.length) || o.style.slice(t.length + 1) != e))) {
                if (o.getAttrs) {
                    var i = o.getAttrs(e);
                    if (!1 === i) continue;
                    o.attrs = i;
                }
                return o;
            }
        }
    }, mt.schemaRules = function(t) {
        var e = [];
        function n(t) {
            for(var n = null == t.priority ? 50 : t.priority, r = 0; r < e.length; r++){
                var o = e[r];
                if ((null == o.priority ? 50 : o.priority) < n) break;
            }
            e.splice(r, 0, t);
        }
        var r = function(e) {
            var r = t.marks[e].spec.parseDOM;
            r && r.forEach(function(t) {
                n(t = Ot(t)), t.mark = e;
            });
        };
        for(var o in t.marks)r(o);
        var i;
        for(var s in t.nodes)i = void 0, (i = t.nodes[s].spec.parseDOM) && i.forEach(function(t) {
            n(t = Ot(t)), t.node = s;
        });
        return e;
    }, mt.fromSchema = function(t) {
        return t.cached.domParser || (t.cached.domParser = new mt(t, mt.schemaRules(t)));
    };
    var vt = {
        address: !0,
        article: !0,
        aside: !0,
        blockquote: !0,
        canvas: !0,
        dd: !0,
        div: !0,
        dl: !0,
        fieldset: !0,
        figcaption: !0,
        figure: !0,
        footer: !0,
        form: !0,
        h1: !0,
        h2: !0,
        h3: !0,
        h4: !0,
        h5: !0,
        h6: !0,
        header: !0,
        hgroup: !0,
        hr: !0,
        li: !0,
        noscript: !0,
        ol: !0,
        output: !0,
        p: !0,
        pre: !0,
        section: !0,
        table: !0,
        tfoot: !0,
        ul: !0
    }, yt = {
        head: !0,
        noscript: !0,
        object: !0,
        script: !0,
        style: !0,
        title: !0
    }, gt = {
        ol: !0,
        ul: !0
    };
    function wt(t) {
        return (t ? 1 : 0) | ("full" === t ? 2 : 0);
    }
    var bt = function(t, e, n, r, o, i, s) {
        this.type = t, this.attrs = e, this.solid = o, this.match = i || (4 & s ? null : t.contentMatch), this.options = s, this.content = [], this.marks = n, this.activeMarks = k.none, this.pendingMarks = r, this.stashMarks = [];
    };
    bt.prototype.findWrapping = function(t) {
        if (!this.match) {
            if (!this.type) return [];
            var e = this.type.contentMatch.fillBefore(v.from(t));
            if (!e) {
                var n, r = this.type.contentMatch;
                return (n = r.findWrapping(t.type)) ? (this.match = r, n) : null;
            }
            this.match = this.type.contentMatch.matchFragment(e);
        }
        return this.match.findWrapping(t.type);
    }, bt.prototype.finish = function(t) {
        if (!(1 & this.options)) {
            var e, n = this.content[this.content.length - 1];
            n && n.isText && (e = /[ \t\r\n\u000c]+$/.exec(n.text)) && (n.text.length == e[0].length ? this.content.pop() : this.content[this.content.length - 1] = n.withText(n.text.slice(0, n.text.length - e[0].length)));
        }
        var r = v.from(this.content);
        return !t && this.match && (r = r.append(this.match.fillBefore(v.empty, !0))), this.type ? this.type.create(this.attrs, r, this.marks) : r;
    }, bt.prototype.popFromStashMark = function(t) {
        for(var e = this.stashMarks.length - 1; e >= 0; e--)if (this.stashMarks[e].type == t) return this.stashMarks.splice(e, 1)[0];
    }, bt.prototype.applyPending = function(t) {
        for(var e = 0, n = this.pendingMarks; e < n.length; e++){
            var r = n[e];
            if ((this.type ? this.type.allowsMarkType(r.type) : Mt(r.type, t)) && !r.isInSet(this.activeMarks)) {
                var o = Ct(r, this.activeMarks);
                o && this.stashMarks.push(o), this.activeMarks = r.addToSet(this.activeMarks), this.pendingMarks = r.removeFromSet(this.pendingMarks);
            }
        }
    };
    var kt = function(t, e, n) {
        this.parser = t, this.options = e, this.isOpen = n;
        var r, o = e.topNode, i = wt(e.preserveWhitespace) | (n ? 4 : 0);
        r = o ? new bt(o.type, o.attrs, k.none, k.none, !0, e.topMatch || o.type.contentMatch, i) : new bt(n ? null : t.schema.topNodeType, null, k.none, k.none, !0, null, i), this.nodes = [
            r
        ], this.open = 0, this.find = e.findPositions, this.needsBlock = !1;
    }, xt = {
        top: {
            configurable: !0
        },
        currentPos: {
            configurable: !0
        }
    };
    function St(t, e) {
        return (t.matches || t.msMatchesSelector || t.webkitMatchesSelector || t.mozMatchesSelector).call(t, e);
    }
    function Ot(t) {
        var e = {};
        for(var n in t)e[n] = t[n];
        return e;
    }
    function Mt(t, e) {
        var n = e.schema.nodes, r = function(r) {
            var o = n[r];
            if (o.allowsMarkType(t)) {
                var i = [], s = function(t) {
                    i.push(t);
                    for(var n = 0; n < t.edgeCount; n++){
                        var r = t.edge(n), o = r.type, a = r.next;
                        if (o == e) return !0;
                        if (i.indexOf(a) < 0 && s(a)) return !0;
                    }
                };
                return s(o.contentMatch) ? {
                    v: !0
                } : void 0;
            }
        };
        for(var o in n){
            var i = r(o);
            if (i) return i.v;
        }
    }
    function Ct(t, e) {
        for(var n = 0; n < e.length; n++)if (t.type == e[n].type) return e[n];
    }
    xt.top.get = function() {
        return this.nodes[this.open];
    }, kt.prototype.addDOM = function(t) {
        if (3 == t.nodeType) this.addTextNode(t);
        else if (1 == t.nodeType) {
            var e = t.getAttribute("style"), n = e ? this.readStyles(function(t) {
                var e, n = /\s*([\w-]+)\s*:\s*([^;]+)/g, r = [];
                for(; e = n.exec(t);)r.push(e[1], e[2].trim());
                return r;
            }(e)) : null, r = this.top;
            if (null != n) for(var o = 0; o < n.length; o++)this.addPendingMark(n[o]);
            if (this.addElement(t), null != n) for(var i = 0; i < n.length; i++)this.removePendingMark(n[i], r);
        }
    }, kt.prototype.addTextNode = function(t) {
        var e = t.nodeValue, n = this.top;
        if ((n.type ? n.type.inlineContent : n.content.length && n.content[0].isInline) || /[^ \t\r\n\u000c]/.test(e)) {
            if (1 & n.options) 2 & n.options || (e = e.replace(/\r?\n|\r/g, " "));
            else if (e = e.replace(/[ \t\r\n\u000c]+/g, " "), /^[ \t\r\n\u000c]/.test(e) && this.open == this.nodes.length - 1) {
                var r = n.content[n.content.length - 1], o = t.previousSibling;
                (!r || o && "BR" == o.nodeName || r.isText && /[ \t\r\n\u000c]$/.test(r.text)) && (e = e.slice(1));
            }
            e && this.insertNode(this.parser.schema.text(e)), this.findInText(t);
        } else this.findInside(t);
    }, kt.prototype.addElement = function(t) {
        var e = t.nodeName.toLowerCase();
        gt.hasOwnProperty(e) && this.parser.normalizeLists && function(t) {
            for(var e = t.firstChild, n = null; e; e = e.nextSibling){
                var r = 1 == e.nodeType ? e.nodeName.toLowerCase() : null;
                r && gt.hasOwnProperty(r) && n ? (n.appendChild(e), e = n) : "li" == r ? n = e : r && (n = null);
            }
        }(t);
        var n = this.options.ruleFromNode && this.options.ruleFromNode(t) || this.parser.matchTag(t, this);
        if (n ? n.ignore : yt.hasOwnProperty(e)) this.findInside(t);
        else if (!n || n.skip || n.closeParent) {
            n && n.closeParent ? this.open = Math.max(0, this.open - 1) : n && n.skip.nodeType && (t = n.skip);
            var r, o = this.top, i = this.needsBlock;
            if (vt.hasOwnProperty(e)) r = !0, o.type || (this.needsBlock = !0);
            else if (!t.firstChild) return void this.leafFallback(t);
            this.addAll(t), r && this.sync(o), this.needsBlock = i;
        } else this.addElementByRule(t, n);
    }, kt.prototype.leafFallback = function(t) {
        "BR" == t.nodeName && this.top.type && this.top.type.inlineContent && this.addTextNode(t.ownerDocument.createTextNode("\n"));
    }, kt.prototype.readStyles = function(t) {
        for(var e = k.none, n = 0; n < t.length; n += 2){
            var r = this.parser.matchStyle(t[n], t[n + 1], this);
            if (r) {
                if (r.ignore) return null;
                e = this.parser.schema.marks[r.mark].create(r.attrs).addToSet(e);
            }
        }
        return e;
    }, kt.prototype.addElementByRule = function(t, e) {
        var n, r, o, i = this;
        e.node ? (r = this.parser.schema.nodes[e.node]).isLeaf ? this.insertNode(r.create(e.attrs)) || this.leafFallback(t) : n = this.enter(r, e.attrs, e.preserveWhitespace) : (o = this.parser.schema.marks[e.mark].create(e.attrs), this.addPendingMark(o));
        var s = this.top;
        if (r && r.isLeaf) this.findInside(t);
        else if (e.getContent) this.findInside(t), e.getContent(t, this.parser.schema).forEach(function(t) {
            return i.insertNode(t);
        });
        else {
            var a = e.contentElement;
            "string" == typeof a ? a = t.querySelector(a) : "function" == typeof a && (a = a(t)), a || (a = t), this.findAround(t, a, !0), this.addAll(a, n);
        }
        n && (this.sync(s), this.open--), o && this.removePendingMark(o, s);
    }, kt.prototype.addAll = function(t, e, n, r) {
        for(var o = n || 0, i = n ? t.childNodes[n] : t.firstChild, s = null == r ? null : t.childNodes[r]; i != s; i = i.nextSibling, ++o)this.findAtPoint(t, o), this.addDOM(i), e && vt.hasOwnProperty(i.nodeName.toLowerCase()) && this.sync(e);
        this.findAtPoint(t, o);
    }, kt.prototype.findPlace = function(t) {
        for(var e, n, r = this.open; r >= 0; r--){
            var o = this.nodes[r], i = o.findWrapping(t);
            if (i && (!e || e.length > i.length) && (e = i, n = o, !i.length)) break;
            if (o.solid) break;
        }
        if (!e) return !1;
        this.sync(n);
        for(var s = 0; s < e.length; s++)this.enterInner(e[s], null, !1);
        return !0;
    }, kt.prototype.insertNode = function(t) {
        if (t.isInline && this.needsBlock && !this.top.type) {
            var e = this.textblockFromContext();
            e && this.enterInner(e);
        }
        if (this.findPlace(t)) {
            this.closeExtra();
            var n = this.top;
            n.applyPending(t.type), n.match && (n.match = n.match.matchType(t.type));
            for(var r = n.activeMarks, o = 0; o < t.marks.length; o++)n.type && !n.type.allowsMarkType(t.marks[o].type) || (r = t.marks[o].addToSet(r));
            return n.content.push(t.mark(r)), !0;
        }
        return !1;
    }, kt.prototype.enter = function(t, e, n) {
        var r = this.findPlace(t.create(e));
        return r && this.enterInner(t, e, !0, n), r;
    }, kt.prototype.enterInner = function(t, e, n, r) {
        this.closeExtra();
        var o = this.top;
        o.applyPending(t), o.match = o.match && o.match.matchType(t, e);
        var i = null == r ? -5 & o.options : wt(r);
        4 & o.options && 0 == o.content.length && (i |= 4), this.nodes.push(new bt(t, e, o.activeMarks, o.pendingMarks, n, null, i)), this.open++;
    }, kt.prototype.closeExtra = function(t) {
        var e = this.nodes.length - 1;
        if (e > this.open) {
            for(; e > this.open; e--)this.nodes[e - 1].content.push(this.nodes[e].finish(t));
            this.nodes.length = this.open + 1;
        }
    }, kt.prototype.finish = function() {
        return this.open = 0, this.closeExtra(this.isOpen), this.nodes[0].finish(this.isOpen || this.options.topOpen);
    }, kt.prototype.sync = function(t) {
        for(var e = this.open; e >= 0; e--)if (this.nodes[e] == t) return void (this.open = e);
    }, xt.currentPos.get = function() {
        this.closeExtra();
        for(var t = 0, e = this.open; e >= 0; e--){
            for(var n = this.nodes[e].content, r = n.length - 1; r >= 0; r--)t += n[r].nodeSize;
            e && t++;
        }
        return t;
    }, kt.prototype.findAtPoint = function(t, e) {
        if (this.find) for(var n = 0; n < this.find.length; n++)this.find[n].node == t && this.find[n].offset == e && (this.find[n].pos = this.currentPos);
    }, kt.prototype.findInside = function(t) {
        if (this.find) for(var e = 0; e < this.find.length; e++)null == this.find[e].pos && 1 == t.nodeType && t.contains(this.find[e].node) && (this.find[e].pos = this.currentPos);
    }, kt.prototype.findAround = function(t, e, n) {
        if (t != e && this.find) {
            for(var r = 0; r < this.find.length; r++)if (null == this.find[r].pos && 1 == t.nodeType && t.contains(this.find[r].node)) e.compareDocumentPosition(this.find[r].node) & (n ? 2 : 4) && (this.find[r].pos = this.currentPos);
        }
    }, kt.prototype.findInText = function(t) {
        if (this.find) for(var e = 0; e < this.find.length; e++)this.find[e].node == t && (this.find[e].pos = this.currentPos - (t.nodeValue.length - this.find[e].offset));
    }, kt.prototype.matchesContext = function(t) {
        var e = this;
        if (t.indexOf("|") > -1) return t.split(/\s*\|\s*/).some(this.matchesContext, this);
        var n = t.split("/"), r = this.options.context, o = !(this.isOpen || r && r.parent.type != this.nodes[0].type), i = -(r ? r.depth + 1 : 0) + (o ? 0 : 1), s = function(t, a) {
            for(; t >= 0; t--){
                var c = n[t];
                if ("" == c) {
                    if (t == n.length - 1 || 0 == t) continue;
                    for(; a >= i; a--)if (s(t - 1, a)) return !0;
                    return !1;
                }
                var h = a > 0 || 0 == a && o ? e.nodes[a].type : r && a >= i ? r.node(a - i).type : null;
                if (!h || h.name != c && -1 == h.groups.indexOf(c)) return !1;
                a--;
            }
            return !0;
        };
        return s(n.length - 1, this.open);
    }, kt.prototype.textblockFromContext = function() {
        var t = this.options.context;
        if (t) for(var e = t.depth; e >= 0; e--){
            var n = t.node(e).contentMatchAt(t.indexAfter(e)).defaultType;
            if (n && n.isTextblock && n.defaultAttrs) return n;
        }
        for(var r in this.parser.schema.nodes){
            var o = this.parser.schema.nodes[r];
            if (o.isTextblock && o.defaultAttrs) return o;
        }
    }, kt.prototype.addPendingMark = function(t) {
        var e = Ct(t, this.top.pendingMarks);
        e && this.top.stashMarks.push(e), this.top.pendingMarks = t.addToSet(this.top.pendingMarks);
    }, kt.prototype.removePendingMark = function(t, e) {
        for(var n = this.open; n >= 0; n--){
            var r = this.nodes[n];
            if (r.pendingMarks.lastIndexOf(t) > -1) r.pendingMarks = t.removeFromSet(r.pendingMarks);
            else {
                r.activeMarks = t.removeFromSet(r.activeMarks);
                var o = r.popFromStashMark(t.type);
                o && (r.activeMarks = o.addToSet(r.activeMarks));
            }
            if (r == e) break;
        }
    }, Object.defineProperties(kt.prototype, xt);
    var Nt = function(t, e) {
        this.nodes = t || {}, this.marks = e || {};
    };
    function Tt(t) {
        var e = {};
        for(var n in t){
            var r = t[n].spec.toDOM;
            r && (e[n] = r);
        }
        return e;
    }
    function Dt(t) {
        return t.document || window.document;
    }
    Nt.prototype.serializeFragment = function(t, e, n) {
        var r = this;
        void 0 === e && (e = {}), n || (n = Dt(e).createDocumentFragment());
        var o = n, i = null;
        return t.forEach(function(t) {
            if (i || t.marks.length) {
                i || (i = []);
                for(var n = 0, s = 0; n < i.length && s < t.marks.length;){
                    var a = t.marks[s];
                    if (r.marks[a.type.name]) {
                        if (!a.eq(i[n]) || !1 === a.type.spec.spanning) break;
                        n += 2, s++;
                    } else s++;
                }
                for(; n < i.length;)o = i.pop(), i.pop();
                for(; s < t.marks.length;){
                    var c = t.marks[s++], h = r.serializeMark(c, t.isInline, e);
                    h && (i.push(c, o), o.appendChild(h.dom), o = h.contentDOM || h.dom);
                }
            }
            o.appendChild(r.serializeNode(t, e));
        }), n;
    }, Nt.prototype.serializeNode = function(t, e) {
        void 0 === e && (e = {});
        var n = Nt.renderSpec(Dt(e), this.nodes[t.type.name](t)), r = n.dom, o = n.contentDOM;
        if (o) {
            if (t.isLeaf) throw new RangeError("Content hole not allowed in a leaf node spec");
            e.onContent ? e.onContent(t, o, e) : this.serializeFragment(t.content, e, o);
        }
        return r;
    }, Nt.prototype.serializeNodeAndMarks = function(t, e) {
        void 0 === e && (e = {});
        for(var n = this.serializeNode(t, e), r = t.marks.length - 1; r >= 0; r--){
            var o = this.serializeMark(t.marks[r], t.isInline, e);
            o && ((o.contentDOM || o.dom).appendChild(n), n = o.dom);
        }
        return n;
    }, Nt.prototype.serializeMark = function(t, e, n) {
        void 0 === n && (n = {});
        var r = this.marks[t.type.name];
        return r && Nt.renderSpec(Dt(n), r(t, e));
    }, Nt.renderSpec = function(t, e, n) {
        if (void 0 === n && (n = null), "string" == typeof e) return {
            dom: t.createTextNode(e)
        };
        if (null != e.nodeType) return {
            dom: e
        };
        var r = e[0], o = r.indexOf(" ");
        o > 0 && (n = r.slice(0, o), r = r.slice(o + 1));
        var i = null, s = n ? t.createElementNS(n, r) : t.createElement(r), a = e[1], c = 1;
        if (a && "object" == typeof a && null == a.nodeType && !Array.isArray(a)) {
            for(var h in c = 2, a)if (null != a[h]) {
                var p = h.indexOf(" ");
                p > 0 ? s.setAttributeNS(h.slice(0, p), h.slice(p + 1), a[h]) : s.setAttribute(h, a[h]);
            }
        }
        for(var l = c; l < e.length; l++){
            var f = e[l];
            if (0 === f) {
                if (l < e.length - 1 || l > c) throw new RangeError("Content hole must be the only child of its parent node");
                return {
                    dom: s,
                    contentDOM: s
                };
            }
            var u = Nt.renderSpec(t, f, n), d = u.dom, m = u.contentDOM;
            if (s.appendChild(d), m) {
                if (i) throw new RangeError("Multiple content holes");
                i = m;
            }
        }
        return {
            dom: s,
            contentDOM: i
        };
    }, Nt.fromSchema = function(t) {
        return t.cached.domSerializer || (t.cached.domSerializer = new Nt(this.nodesFromSchema(t), this.marksFromSchema(t)));
    }, Nt.nodesFromSchema = function(t) {
        var e = Tt(t.nodes);
        return e.text || (e.text = function(t) {
            return t.text;
        }), e;
    }, Nt.marksFromSchema = function(t) {
        return Tt(t.marks);
    };
    var Et = Math.pow(2, 16);
    function At(t) {
        return 65535 & t;
    }
    var Rt = function(t, e, n) {
        void 0 === e && (e = !1), void 0 === n && (n = null), this.pos = t, this.deleted = e, this.recover = n;
    }, It = function(t, e) {
        void 0 === e && (e = !1), this.ranges = t, this.inverted = e;
    };
    It.prototype.recover = function(t) {
        var e = 0, n = At(t);
        if (!this.inverted) for(var r = 0; r < n; r++)e += this.ranges[3 * r + 2] - this.ranges[3 * r + 1];
        return this.ranges[3 * n] + e + function(t) {
            return (t - (65535 & t)) / Et;
        }(t);
    }, It.prototype.mapResult = function(t, e) {
        return void 0 === e && (e = 1), this._map(t, e, !1);
    }, It.prototype.map = function(t, e) {
        return void 0 === e && (e = 1), this._map(t, e, !0);
    }, It.prototype._map = function(t, e, n) {
        for(var r = 0, o = this.inverted ? 2 : 1, i = this.inverted ? 1 : 2, s = 0; s < this.ranges.length; s += 3){
            var a = this.ranges[s] - (this.inverted ? r : 0);
            if (a > t) break;
            var c = this.ranges[s + o], h = this.ranges[s + i], p = a + c;
            if (t <= p) {
                var l = a + r + ((c ? t == a ? -1 : t == p ? 1 : e : e) < 0 ? 0 : h);
                if (n) return l;
                var f = t == (e < 0 ? a : p) ? null : s / 3 + (t - a) * Et;
                return new Rt(l, e < 0 ? t != a : t != p, f);
            }
            r += h - c;
        }
        return n ? t + r : new Rt(t + r);
    }, It.prototype.touches = function(t, e) {
        for(var n = 0, r = At(e), o = this.inverted ? 2 : 1, i = this.inverted ? 1 : 2, s = 0; s < this.ranges.length; s += 3){
            var a = this.ranges[s] - (this.inverted ? n : 0);
            if (a > t) break;
            var c = this.ranges[s + o];
            if (t <= a + c && s == 3 * r) return !0;
            n += this.ranges[s + i] - c;
        }
        return !1;
    }, It.prototype.forEach = function(t) {
        for(var e = this.inverted ? 2 : 1, n = this.inverted ? 1 : 2, r = 0, o = 0; r < this.ranges.length; r += 3){
            var i = this.ranges[r], s = i - (this.inverted ? o : 0), a = i + (this.inverted ? 0 : o), c = this.ranges[r + e], h = this.ranges[r + n];
            t(s, s + c, a, a + h), o += h - c;
        }
    }, It.prototype.invert = function() {
        return new It(this.ranges, !this.inverted);
    }, It.prototype.toString = function() {
        return (this.inverted ? "-" : "") + JSON.stringify(this.ranges);
    }, It.offset = function(t) {
        return 0 == t ? It.empty : new It(t < 0 ? [
            0,
            -t,
            0
        ] : [
            0,
            0,
            t
        ]);
    }, It.empty = new It([]);
    var zt = function(t, e, n, r) {
        this.maps = t || [], this.from = n || 0, this.to = null == r ? this.maps.length : r, this.mirror = e;
    };
    function Pt(t) {
        var e = Error.call(this, t);
        return e.__proto__ = Pt.prototype, e;
    }
    zt.prototype.slice = function(t, e) {
        return void 0 === t && (t = 0), void 0 === e && (e = this.maps.length), new zt(this.maps, this.mirror, t, e);
    }, zt.prototype.copy = function() {
        return new zt(this.maps.slice(), this.mirror && this.mirror.slice(), this.from, this.to);
    }, zt.prototype.appendMap = function(t, e) {
        this.to = this.maps.push(t), null != e && this.setMirror(this.maps.length - 1, e);
    }, zt.prototype.appendMapping = function(t) {
        for(var e = 0, n = this.maps.length; e < t.maps.length; e++){
            var r = t.getMirror(e);
            this.appendMap(t.maps[e], null != r && r < e ? n + r : null);
        }
    }, zt.prototype.getMirror = function(t) {
        if (this.mirror) {
            for(var e = 0; e < this.mirror.length; e++)if (this.mirror[e] == t) return this.mirror[e + (e % 2 ? -1 : 1)];
        }
    }, zt.prototype.setMirror = function(t, e) {
        this.mirror || (this.mirror = []), this.mirror.push(t, e);
    }, zt.prototype.appendMappingInverted = function(t) {
        for(var e = t.maps.length - 1, n = this.maps.length + t.maps.length; e >= 0; e--){
            var r = t.getMirror(e);
            this.appendMap(t.maps[e].invert(), null != r && r > e ? n - r - 1 : null);
        }
    }, zt.prototype.invert = function() {
        var t = new zt;
        return t.appendMappingInverted(this), t;
    }, zt.prototype.map = function(t, e) {
        if (void 0 === e && (e = 1), this.mirror) return this._map(t, e, !0);
        for(var n = this.from; n < this.to; n++)t = this.maps[n].map(t, e);
        return t;
    }, zt.prototype.mapResult = function(t, e) {
        return void 0 === e && (e = 1), this._map(t, e, !1);
    }, zt.prototype._map = function(t, e, n) {
        for(var r = !1, o = this.from; o < this.to; o++){
            var i = this.maps[o].mapResult(t, e);
            if (null != i.recover) {
                var s = this.getMirror(o);
                if (null != s && s > o && s < this.to) {
                    o = s, t = this.maps[s].recover(i.recover);
                    continue;
                }
            }
            i.deleted && (r = !0), t = i.pos;
        }
        return n ? t : new Rt(t, r);
    }, Pt.prototype = Object.create(Error.prototype), Pt.prototype.constructor = Pt, Pt.prototype.name = "TransformError";
    var Vt = function(t) {
        this.doc = t, this.steps = [], this.docs = [], this.mapping = new zt;
    }, Bt = {
        before: {
            configurable: !0
        },
        docChanged: {
            configurable: !0
        }
    };
    function $t() {
        throw new Error("Override me");
    }
    Bt.before.get = function() {
        return this.docs.length ? this.docs[0] : this.doc;
    }, Vt.prototype.step = function(t) {
        var e = this.maybeStep(t);
        if (e.failed) throw new Pt(e.failed);
        return this;
    }, Vt.prototype.maybeStep = function(t) {
        var e = t.apply(this.doc);
        return e.failed || this.addStep(t, e.doc), e;
    }, Bt.docChanged.get = function() {
        return this.steps.length > 0;
    }, Vt.prototype.addStep = function(t, e) {
        this.docs.push(this.doc), this.steps.push(t), this.mapping.appendMap(t.getMap()), this.doc = e;
    }, Object.defineProperties(Vt.prototype, Bt);
    var Ft = Object.create(null), _t = function() {};
    _t.prototype.apply = function(t) {
        return $t();
    }, _t.prototype.getMap = function() {
        return It.empty;
    }, _t.prototype.invert = function(t) {
        return $t();
    }, _t.prototype.map = function(t) {
        return $t();
    }, _t.prototype.merge = function(t) {
        return null;
    }, _t.prototype.toJSON = function() {
        return $t();
    }, _t.fromJSON = function(t, e) {
        if (!e || !e.stepType) throw new RangeError("Invalid input for Step.fromJSON");
        var n = Ft[e.stepType];
        if (!n) throw new RangeError("No step type " + e.stepType + " defined");
        return n.fromJSON(t, e);
    }, _t.jsonID = function(t, e) {
        if (t in Ft) throw new RangeError("Duplicate use of step JSON ID " + t);
        return Ft[t] = e, e.prototype.jsonID = t, e;
    };
    var jt = function(t, e) {
        this.doc = t, this.failed = e;
    };
    jt.ok = function(t) {
        return new jt(t, null);
    }, jt.fail = function(t) {
        return new jt(null, t);
    }, jt.fromReplace = function(t, e, n, r) {
        try {
            return jt.ok(t.replace(e, n, r));
        } catch (t) {
            if (t instanceof x) return jt.fail(t.message);
            throw t;
        }
    };
    var Lt = function(t) {
        function e(e, n, r, o) {
            t.call(this), this.from = e, this.to = n, this.slice = r, this.structure = !!o;
        }
        return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.apply = function(t) {
            return this.structure && qt(t, this.from, this.to) ? jt.fail("Structure replace would overwrite content") : jt.fromReplace(t, this.from, this.to, this.slice);
        }, e.prototype.getMap = function() {
            return new It([
                this.from,
                this.to - this.from,
                this.slice.size
            ]);
        }, e.prototype.invert = function(t) {
            return new e(this.from, this.from + this.slice.size, t.slice(this.from, this.to));
        }, e.prototype.map = function(t) {
            var n = t.mapResult(this.from, 1), r = t.mapResult(this.to, -1);
            return n.deleted && r.deleted ? null : new e(n.pos, Math.max(n.pos, r.pos), this.slice);
        }, e.prototype.merge = function(t) {
            if (!(t instanceof e) || t.structure != this.structure) return null;
            if (this.from + this.slice.size != t.from || this.slice.openEnd || t.slice.openStart) {
                if (t.to != this.from || this.slice.openStart || t.slice.openEnd) return null;
                var n = this.slice.size + t.slice.size == 0 ? S.empty : new S(t.slice.content.append(this.slice.content), t.slice.openStart, this.slice.openEnd);
                return new e(t.from, this.to, n, this.structure);
            }
            var r = this.slice.size + t.slice.size == 0 ? S.empty : new S(this.slice.content.append(t.slice.content), this.slice.openStart, t.slice.openEnd);
            return new e(this.from, this.to + (t.to - t.from), r, this.structure);
        }, e.prototype.toJSON = function() {
            var t = {
                stepType: "replace",
                from: this.from,
                to: this.to
            };
            return this.slice.size && (t.slice = this.slice.toJSON()), this.structure && (t.structure = !0), t;
        }, e.fromJSON = function(t, n) {
            if ("number" != typeof n.from || "number" != typeof n.to) throw new RangeError("Invalid input for ReplaceStep.fromJSON");
            return new e(n.from, n.to, S.fromJSON(t, n.slice), !!n.structure);
        }, e;
    }(_t);
    _t.jsonID("replace", Lt);
    var Jt = function(t) {
        function e(e, n, r, o, i, s, a) {
            t.call(this), this.from = e, this.to = n, this.gapFrom = r, this.gapTo = o, this.slice = i, this.insert = s, this.structure = !!a;
        }
        return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.apply = function(t) {
            if (this.structure && (qt(t, this.from, this.gapFrom) || qt(t, this.gapTo, this.to))) return jt.fail("Structure gap-replace would overwrite content");
            var e = t.slice(this.gapFrom, this.gapTo);
            if (e.openStart || e.openEnd) return jt.fail("Gap is not a flat range");
            var n = this.slice.insertAt(this.insert, e.content);
            return n ? jt.fromReplace(t, this.from, this.to, n) : jt.fail("Content does not fit in gap");
        }, e.prototype.getMap = function() {
            return new It([
                this.from,
                this.gapFrom - this.from,
                this.insert,
                this.gapTo,
                this.to - this.gapTo,
                this.slice.size - this.insert
            ]);
        }, e.prototype.invert = function(t) {
            var n = this.gapTo - this.gapFrom;
            return new e(this.from, this.from + this.slice.size + n, this.from + this.insert, this.from + this.insert + n, t.slice(this.from, this.to).removeBetween(this.gapFrom - this.from, this.gapTo - this.from), this.gapFrom - this.from, this.structure);
        }, e.prototype.map = function(t) {
            var n = t.mapResult(this.from, 1), r = t.mapResult(this.to, -1), o = t.map(this.gapFrom, -1), i = t.map(this.gapTo, 1);
            return n.deleted && r.deleted || o < n.pos || i > r.pos ? null : new e(n.pos, r.pos, o, i, this.slice, this.insert, this.structure);
        }, e.prototype.toJSON = function() {
            var t = {
                stepType: "replaceAround",
                from: this.from,
                to: this.to,
                gapFrom: this.gapFrom,
                gapTo: this.gapTo,
                insert: this.insert
            };
            return this.slice.size && (t.slice = this.slice.toJSON()), this.structure && (t.structure = !0), t;
        }, e.fromJSON = function(t, n) {
            if ("number" != typeof n.from || "number" != typeof n.to || "number" != typeof n.gapFrom || "number" != typeof n.gapTo || "number" != typeof n.insert) throw new RangeError("Invalid input for ReplaceAroundStep.fromJSON");
            return new e(n.from, n.to, n.gapFrom, n.gapTo, S.fromJSON(t, n.slice), n.insert, !!n.structure);
        }, e;
    }(_t);
    function qt(t, e, n) {
        for(var r = t.resolve(e), o = n - e, i = r.depth; o > 0 && i > 0 && r.indexAfter(i) == r.node(i).childCount;)i--, o--;
        if (o > 0) for(var s = r.node(i).maybeChild(r.indexAfter(i)); o > 0;){
            if (!s || s.isLeaf) return !0;
            s = s.firstChild, o--;
        }
        return !1;
    }
    function Wt(t, e, n) {
        return (0 == e || t.canReplace(e, t.childCount)) && (n == t.childCount || t.canReplace(0, n));
    }
    function Kt(t) {
        for(var e = t.parent.content.cutByIndex(t.startIndex, t.endIndex), n = t.depth;; --n){
            var r = t.$from.node(n), o = t.$from.index(n), i = t.$to.indexAfter(n);
            if (n < t.depth && r.canReplace(o, i, e)) return n;
            if (0 == n || r.type.spec.isolating || !Wt(r, o, i)) break;
        }
    }
    function Ht(t, e, n, r) {
        void 0 === r && (r = t);
        var o = function(t, e) {
            var n = t.parent, r = t.startIndex, o = t.endIndex, i = n.contentMatchAt(r).findWrapping(e);
            if (!i) return null;
            var s = i.length ? i[0] : e;
            return n.canReplaceWith(r, o, s) ? i : null;
        }(t, e), i = o && function(t, e) {
            var n = t.parent, r = t.startIndex, o = t.endIndex, i = n.child(r), s = e.contentMatch.findWrapping(i.type);
            if (!s) return null;
            for(var a = (s.length ? s[s.length - 1] : e).contentMatch, c = r; a && c < o; c++)a = a.matchType(n.child(c).type);
            if (!a || !a.validEnd) return null;
            return s;
        }(r, e);
        return i ? o.map(Ut).concat({
            type: e,
            attrs: n
        }).concat(i.map(Ut)) : null;
    }
    function Ut(t) {
        return {
            type: t,
            attrs: null
        };
    }
    function Gt(t, e, n, r) {
        void 0 === n && (n = 1);
        var o = t.resolve(e), i = o.depth - n, s = r && r[r.length - 1] || o.parent;
        if (i < 0 || o.parent.type.spec.isolating || !o.parent.canReplace(o.index(), o.parent.childCount) || !s.type.validContent(o.parent.content.cutByIndex(o.index(), o.parent.childCount))) return !1;
        for(var a = o.depth - 1, c = n - 2; a > i; a--, c--){
            var h = o.node(a), p = o.index(a);
            if (h.type.spec.isolating) return !1;
            var l = h.content.cutByIndex(p, h.childCount), f = r && r[c] || h;
            if (f != h && (l = l.replaceChild(0, f.type.create(f.attrs))), !h.canReplace(p + 1, h.childCount) || !f.type.validContent(l)) return !1;
        }
        var u = o.indexAfter(i), d = r && r[0];
        return o.node(i).canReplaceWith(u, u, d ? d.type : o.node(i + 1).type);
    }
    function Xt(t, e) {
        var n = t.resolve(e), r = n.index();
        return Yt(n.nodeBefore, n.nodeAfter) && n.parent.canReplace(r, r + 1);
    }
    function Yt(t, e) {
        return t && e && !t.isLeaf && t.canAppend(e);
    }
    function Qt(t, e, n) {
        void 0 === n && (n = -1);
        for(var r = t.resolve(e), o = r.depth;; o--){
            var i = void 0, s = void 0, a = r.index(o);
            if (o == r.depth ? (i = r.nodeBefore, s = r.nodeAfter) : n > 0 ? (i = r.node(o + 1), a++, s = r.node(o).maybeChild(a)) : (i = r.node(o).maybeChild(a - 1), s = r.node(o + 1)), i && !i.isTextblock && Yt(i, s) && r.node(o).canReplace(a, a + 1)) return e;
            if (0 == o) break;
            e = n < 0 ? r.before(o) : r.after(o);
        }
    }
    function Zt(t, e, n) {
        for(var r = [], o = 0; o < t.childCount; o++){
            var i = t.child(o);
            i.content.size && (i = i.copy(Zt(i.content, e, i))), i.isInline && (i = e(i, n, o)), r.push(i);
        }
        return v.fromArray(r);
    }
    _t.jsonID("replaceAround", Jt), Vt.prototype.lift = function(t, e) {
        for(var n = t.$from, r = t.$to, o = t.depth, i = n.before(o + 1), s = r.after(o + 1), a = i, c = s, h = v.empty, p = 0, l = o, f = !1; l > e; l--)f || n.index(l) > 0 ? (f = !0, h = v.from(n.node(l).copy(h)), p++) : a--;
        for(var u = v.empty, d = 0, m = o, y = !1; m > e; m--)y || r.after(m + 1) < r.end(m) ? (y = !0, u = v.from(r.node(m).copy(u)), d++) : c++;
        return this.step(new Jt(a, c, i, s, new S(h.append(u), p, d), h.size - p, !0));
    }, Vt.prototype.wrap = function(t, e) {
        for(var n = v.empty, r = e.length - 1; r >= 0; r--)n = v.from(e[r].type.create(e[r].attrs, n));
        var o = t.start, i = t.end;
        return this.step(new Jt(o, i, o, i, new S(n, 0, 0), e.length, !0));
    }, Vt.prototype.setBlockType = function(t, e, n, r) {
        var o = this;
        if (void 0 === e && (e = t), !n.isTextblock) throw new RangeError("Type given to setBlockType should be a textblock");
        var i = this.steps.length;
        return this.doc.nodesBetween(t, e, function(t, e) {
            if (t.isTextblock && !t.hasMarkup(n, r) && function(t, e, n) {
                var r = t.resolve(e), o = r.index();
                return r.parent.canReplaceWith(o, o + 1, n);
            }(o.doc, o.mapping.slice(i).map(e), n)) {
                o.clearIncompatible(o.mapping.slice(i).map(e, 1), n);
                var s = o.mapping.slice(i), a = s.map(e, 1), c = s.map(e + t.nodeSize, 1);
                return o.step(new Jt(a, c, a + 1, c - 1, new S(v.from(n.create(r, null, t.marks)), 0, 0), 1, !0)), !1;
            }
        }), this;
    }, Vt.prototype.setNodeMarkup = function(t, e, n, r) {
        var o = this.doc.nodeAt(t);
        if (!o) throw new RangeError("No node at given position");
        e || (e = o.type);
        var i = e.create(n, null, r || o.marks);
        if (o.isLeaf) return this.replaceWith(t, t + o.nodeSize, i);
        if (!e.validContent(o.content)) throw new RangeError("Invalid content for node type " + e.name);
        return this.step(new Jt(t, t + o.nodeSize, t + 1, t + o.nodeSize - 1, new S(v.from(i), 0, 0), 1, !0));
    }, Vt.prototype.split = function(t, e, n) {
        void 0 === e && (e = 1);
        for(var r = this.doc.resolve(t), o = v.empty, i = v.empty, s = r.depth, a = r.depth - e, c = e - 1; s > a; s--, c--){
            o = v.from(r.node(s).copy(o));
            var h = n && n[c];
            i = v.from(h ? h.type.create(h.attrs, i) : r.node(s).copy(i));
        }
        return this.step(new Lt(t, t, new S(o.append(i), e, e), !0));
    }, Vt.prototype.join = function(t, e) {
        void 0 === e && (e = 1);
        var n = new Lt(t - e, t + e, S.empty, !0);
        return this.step(n);
    };
    var te = function(t) {
        function e(e, n, r) {
            t.call(this), this.from = e, this.to = n, this.mark = r;
        }
        return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.apply = function(t) {
            var e = this, n = t.slice(this.from, this.to), r = t.resolve(this.from), o = r.node(r.sharedDepth(this.to)), i = new S(Zt(n.content, function(t, n) {
                return n.type.allowsMarkType(e.mark.type) ? t.mark(e.mark.addToSet(t.marks)) : t;
            }, o), n.openStart, n.openEnd);
            return jt.fromReplace(t, this.from, this.to, i);
        }, e.prototype.invert = function() {
            return new ee(this.from, this.to, this.mark);
        }, e.prototype.map = function(t) {
            var n = t.mapResult(this.from, 1), r = t.mapResult(this.to, -1);
            return n.deleted && r.deleted || n.pos >= r.pos ? null : new e(n.pos, r.pos, this.mark);
        }, e.prototype.merge = function(t) {
            if (t instanceof e && t.mark.eq(this.mark) && this.from <= t.to && this.to >= t.from) return new e(Math.min(this.from, t.from), Math.max(this.to, t.to), this.mark);
        }, e.prototype.toJSON = function() {
            return {
                stepType: "addMark",
                mark: this.mark.toJSON(),
                from: this.from,
                to: this.to
            };
        }, e.fromJSON = function(t, n) {
            if ("number" != typeof n.from || "number" != typeof n.to) throw new RangeError("Invalid input for AddMarkStep.fromJSON");
            return new e(n.from, n.to, t.markFromJSON(n.mark));
        }, e;
    }(_t);
    _t.jsonID("addMark", te);
    var ee = function(t) {
        function e(e, n, r) {
            t.call(this), this.from = e, this.to = n, this.mark = r;
        }
        return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.apply = function(t) {
            var e = this, n = t.slice(this.from, this.to), r = new S(Zt(n.content, function(t) {
                return t.mark(e.mark.removeFromSet(t.marks));
            }), n.openStart, n.openEnd);
            return jt.fromReplace(t, this.from, this.to, r);
        }, e.prototype.invert = function() {
            return new te(this.from, this.to, this.mark);
        }, e.prototype.map = function(t) {
            var n = t.mapResult(this.from, 1), r = t.mapResult(this.to, -1);
            return n.deleted && r.deleted || n.pos >= r.pos ? null : new e(n.pos, r.pos, this.mark);
        }, e.prototype.merge = function(t) {
            if (t instanceof e && t.mark.eq(this.mark) && this.from <= t.to && this.to >= t.from) return new e(Math.min(this.from, t.from), Math.max(this.to, t.to), this.mark);
        }, e.prototype.toJSON = function() {
            return {
                stepType: "removeMark",
                mark: this.mark.toJSON(),
                from: this.from,
                to: this.to
            };
        }, e.fromJSON = function(t, n) {
            if ("number" != typeof n.from || "number" != typeof n.to) throw new RangeError("Invalid input for RemoveMarkStep.fromJSON");
            return new e(n.from, n.to, t.markFromJSON(n.mark));
        }, e;
    }(_t);
    function ne(t, e, n) {
        return !n.openStart && !n.openEnd && t.start() == e.start() && t.parent.canReplace(t.index(), e.index(), n.content);
    }
    _t.jsonID("removeMark", ee), Vt.prototype.addMark = function(t, e, n) {
        var r = this, o = [], i = [], s = null, a = null;
        return this.doc.nodesBetween(t, e, function(r, c, h) {
            if (r.isInline) {
                var p = r.marks;
                if (!n.isInSet(p) && h.type.allowsMarkType(n.type)) {
                    for(var l = Math.max(c, t), f = Math.min(c + r.nodeSize, e), u = n.addToSet(p), d = 0; d < p.length; d++)p[d].isInSet(u) || (s && s.to == l && s.mark.eq(p[d]) ? s.to = f : o.push(s = new ee(l, f, p[d])));
                    a && a.to == l ? a.to = f : i.push(a = new te(l, f, n));
                }
            }
        }), o.forEach(function(t) {
            return r.step(t);
        }), i.forEach(function(t) {
            return r.step(t);
        }), this;
    }, Vt.prototype.removeMark = function(t, e, n) {
        var r = this;
        void 0 === n && (n = null);
        var o = [], i = 0;
        return this.doc.nodesBetween(t, e, function(r, s) {
            if (r.isInline) {
                i++;
                var a = null;
                if (n instanceof ft) {
                    var c = n.isInSet(r.marks);
                    c && (a = [
                        c
                    ]);
                } else n ? n.isInSet(r.marks) && (a = [
                    n
                ]) : a = r.marks;
                if (a && a.length) for(var h = Math.min(s + r.nodeSize, e), p = 0; p < a.length; p++){
                    for(var l = a[p], f = void 0, u = 0; u < o.length; u++){
                        var d = o[u];
                        d.step == i - 1 && l.eq(o[u].style) && (f = d);
                    }
                    f ? (f.to = h, f.step = i) : o.push({
                        style: l,
                        from: Math.max(s, t),
                        to: h,
                        step: i
                    });
                }
            }
        }), o.forEach(function(t) {
            return r.step(new ee(t.from, t.to, t.style));
        }), this;
    }, Vt.prototype.clearIncompatible = function(t, e, n) {
        void 0 === n && (n = e.contentMatch);
        for(var r = this.doc.nodeAt(t), o = [], i = t + 1, s = 0; s < r.childCount; s++){
            var a = r.child(s), c = i + a.nodeSize, h = n.matchType(a.type, a.attrs);
            if (h) {
                n = h;
                for(var p = 0; p < a.marks.length; p++)e.allowsMarkType(a.marks[p].type) || this.step(new ee(i, c, a.marks[p]));
            } else o.push(new Lt(i, c, S.empty));
            i = c;
        }
        if (!n.validEnd) {
            var l = n.fillBefore(v.empty, !0);
            this.replace(i, i, new S(l, 0, 0));
        }
        for(var f = o.length - 1; f >= 0; f--)this.step(o[f]);
        return this;
    }, Vt.prototype.replace = function(t, e, n) {
        void 0 === e && (e = t), void 0 === n && (n = S.empty);
        var r = function(t, e, n, r) {
            if (void 0 === n && (n = e), void 0 === r && (r = S.empty), e == n && !r.size) return null;
            var o = t.resolve(e), i = t.resolve(n);
            return ne(o, i, r) ? new Lt(e, n, r) : new re(o, i, r).fit();
        }(this.doc, t, e, n);
        return r && this.step(r), this;
    }, Vt.prototype.replaceWith = function(t, e, n) {
        return this.replace(t, e, new S(v.from(n), 0, 0));
    }, Vt.prototype.delete = function(t, e) {
        return this.replace(t, e, S.empty);
    }, Vt.prototype.insert = function(t, e) {
        return this.replaceWith(t, t, e);
    };
    var re = function(t, e, n) {
        this.$to = e, this.$from = t, this.unplaced = n, this.frontier = [];
        for(var r = 0; r <= t.depth; r++){
            var o = t.node(r);
            this.frontier.push({
                type: o.type,
                match: o.contentMatchAt(t.indexAfter(r))
            });
        }
        this.placed = v.empty;
        for(var i = t.depth; i > 0; i--)this.placed = v.from(t.node(i).copy(this.placed));
    }, oe = {
        depth: {
            configurable: !0
        }
    };
    function ie(t, e, n) {
        return 0 == e ? t.cutByIndex(n) : t.replaceChild(0, t.firstChild.copy(ie(t.firstChild.content, e - 1, n)));
    }
    function se(t, e, n) {
        return 0 == e ? t.append(n) : t.replaceChild(t.childCount - 1, t.lastChild.copy(se(t.lastChild.content, e - 1, n)));
    }
    function ae(t, e) {
        for(var n = 0; n < e; n++)t = t.firstChild.content;
        return t;
    }
    function ce(t, e, n) {
        if (e <= 0) return t;
        var r = t.content;
        return e > 1 && (r = r.replaceChild(0, ce(r.firstChild, e - 1, 1 == r.childCount ? n - 1 : 0))), e > 0 && (r = t.type.contentMatch.fillBefore(r).append(r), n <= 0 && (r = r.append(t.type.contentMatch.matchFragment(r).fillBefore(v.empty, !0)))), t.copy(r);
    }
    function he(t, e, n, r, o) {
        var i = t.node(e), s = o ? t.indexAfter(e) : t.index(e);
        if (s == i.childCount && !n.compatibleContent(i.type)) return null;
        var a = r.fillBefore(i.content, !0, s);
        return a && !function(t, e, n) {
            for(var r = n; r < e.childCount; r++)if (!t.allowsMarks(e.child(r).marks)) return !0;
            return !1;
        }(n, i.content, s) ? a : null;
    }
    function pe(t, e, n, r, o) {
        if (e < n) {
            var i = t.firstChild;
            t = t.replaceChild(0, i.copy(pe(i.content, e + 1, n, r, i)));
        }
        if (e > r) {
            var s = o.contentMatchAt(0), a = s.fillBefore(t).append(t);
            t = a.append(s.matchFragment(a).fillBefore(v.empty, !0));
        }
        return t;
    }
    function le(t, e) {
        for(var n = [], r = Math.min(t.depth, e.depth); r >= 0; r--){
            var o = t.start(r);
            if (o < t.pos - (t.depth - r) || e.end(r) > e.pos + (e.depth - r) || t.node(r).type.spec.isolating || e.node(r).type.spec.isolating) break;
            o == e.start(r) && n.push(r);
        }
        return n;
    }
    oe.depth.get = function() {
        return this.frontier.length - 1;
    }, re.prototype.fit = function() {
        for(; this.unplaced.size;){
            var t = this.findFittable();
            t ? this.placeNodes(t) : this.openMore() || this.dropNode();
        }
        var e = this.mustMoveInline(), n = this.placed.size - this.depth - this.$from.depth, r = this.$from, o = this.close(e < 0 ? this.$to : r.doc.resolve(e));
        if (!o) return null;
        for(var i = this.placed, s = r.depth, a = o.depth; s && a && 1 == i.childCount;)i = i.firstChild.content, s--, a--;
        var c = new S(i, s, a);
        return e > -1 ? new Jt(r.pos, e, this.$to.pos, this.$to.end(), c, n) : c.size || r.pos != this.$to.pos ? new Lt(r.pos, o.pos, c) : void 0;
    }, re.prototype.findFittable = function() {
        for(var t = 1; t <= 2; t++)for(var e = this.unplaced.openStart; e >= 0; e--)for(var n = void 0, r = (e ? (n = ae(this.unplaced.content, e - 1).firstChild).content : this.unplaced.content).firstChild, o = this.depth; o >= 0; o--){
            var i = this.frontier[o], s = i.type, a = i.match, c = void 0, h = void 0;
            if (1 == t && (r ? a.matchType(r.type) || (h = a.fillBefore(v.from(r), !1)) : s.compatibleContent(n.type))) return {
                sliceDepth: e,
                frontierDepth: o,
                parent: n,
                inject: h
            };
            if (2 == t && r && (c = a.findWrapping(r.type))) return {
                sliceDepth: e,
                frontierDepth: o,
                parent: n,
                wrap: c
            };
            if (n && a.matchType(n.type)) break;
        }
    }, re.prototype.openMore = function() {
        var t = this.unplaced, e = t.content, n = t.openStart, r = t.openEnd, o = ae(e, n);
        return !(!o.childCount || o.firstChild.isLeaf) && (this.unplaced = new S(e, n + 1, Math.max(r, o.size + n >= e.size - r ? n + 1 : 0)), !0);
    }, re.prototype.dropNode = function() {
        var t = this.unplaced, e = t.content, n = t.openStart, r = t.openEnd, o = ae(e, n);
        if (o.childCount <= 1 && n > 0) {
            var i = e.size - n <= n + o.size;
            this.unplaced = new S(ie(e, n - 1, 1), n - 1, i ? n - 1 : r);
        } else this.unplaced = new S(ie(e, n, 1), n, r);
    }, re.prototype.placeNodes = function(t) {
        for(var e = t.sliceDepth, n = t.frontierDepth, r = t.parent, o = t.inject, i = t.wrap; this.depth > n;)this.closeFrontierNode();
        if (i) for(var s = 0; s < i.length; s++)this.openFrontierNode(i[s]);
        var a = this.unplaced, c = r ? r.content : a.content, h = a.openStart - e, p = 0, l = [], f = this.frontier[n], u = f.match, d = f.type;
        if (o) {
            for(var m = 0; m < o.childCount; m++)l.push(o.child(m));
            u = u.matchFragment(o);
        }
        for(var y = c.size + e - (a.content.size - a.openEnd); p < c.childCount;){
            var g = c.child(p), w = u.matchType(g.type);
            if (!w) break;
            (++p > 1 || 0 == h || g.content.size) && (u = w, l.push(ce(g.mark(d.allowedMarks(g.marks)), 1 == p ? h : 0, p == c.childCount ? y : -1)));
        }
        var b = p == c.childCount;
        b || (y = -1), this.placed = se(this.placed, n, v.from(l)), this.frontier[n].match = u, b && y < 0 && r && r.type == this.frontier[this.depth].type && this.frontier.length > 1 && this.closeFrontierNode();
        for(var k = 0, x = c; k < y; k++){
            var O = x.lastChild;
            this.frontier.push({
                type: O.type,
                match: O.contentMatchAt(O.childCount)
            }), x = O.content;
        }
        this.unplaced = b ? 0 == e ? S.empty : new S(ie(a.content, e - 1, 1), e - 1, y < 0 ? a.openEnd : e - 1) : new S(ie(a.content, e, p), a.openStart, a.openEnd);
    }, re.prototype.mustMoveInline = function() {
        if (!this.$to.parent.isTextblock || this.$to.end() == this.$to.pos) return -1;
        var t, e = this.frontier[this.depth];
        if (!e.type.isTextblock || !he(this.$to, this.$to.depth, e.type, e.match, !1) || this.$to.depth == this.depth && (t = this.findCloseLevel(this.$to)) && t.depth == this.depth) return -1;
        for(var n = this.$to.depth, r = this.$to.after(n); n > 1 && r == this.$to.end(--n);)++r;
        return r;
    }, re.prototype.findCloseLevel = function(t) {
        t: for(var e = Math.min(this.depth, t.depth); e >= 0; e--){
            var n = this.frontier[e], r = n.match, o = n.type, i = e < t.depth && t.end(e + 1) == t.pos + (t.depth - (e + 1)), s = he(t, e, o, r, i);
            if (s) {
                for(var a = e - 1; a >= 0; a--){
                    var c = this.frontier[a], h = c.match, p = he(t, a, c.type, h, !0);
                    if (!p || p.childCount) continue t;
                }
                return {
                    depth: e,
                    fit: s,
                    move: i ? t.doc.resolve(t.after(e + 1)) : t
                };
            }
        }
    }, re.prototype.close = function(t) {
        var e = this.findCloseLevel(t);
        if (!e) return null;
        for(; this.depth > e.depth;)this.closeFrontierNode();
        e.fit.childCount && (this.placed = se(this.placed, e.depth, e.fit)), t = e.move;
        for(var n = e.depth + 1; n <= t.depth; n++){
            var r = t.node(n), o = r.type.contentMatch.fillBefore(r.content, !0, t.index(n));
            this.openFrontierNode(r.type, r.attrs, o);
        }
        return t;
    }, re.prototype.openFrontierNode = function(t, e, n) {
        var r = this.frontier[this.depth];
        r.match = r.match.matchType(t), this.placed = se(this.placed, this.depth, v.from(t.create(e, n))), this.frontier.push({
            type: t,
            match: t.contentMatch
        });
    }, re.prototype.closeFrontierNode = function() {
        var t = this.frontier.pop().match.fillBefore(v.empty, !0);
        t.childCount && (this.placed = se(this.placed, this.frontier.length, t));
    }, Object.defineProperties(re.prototype, oe), Vt.prototype.replaceRange = function(t, e, n) {
        if (!n.size) return this.deleteRange(t, e);
        var r = this.doc.resolve(t), o = this.doc.resolve(e);
        if (ne(r, o, n)) return this.step(new Lt(t, e, n));
        var i = le(r, this.doc.resolve(e));
        0 == i[i.length - 1] && i.pop();
        var s = -(r.depth + 1);
        i.unshift(s);
        for(var a = r.depth, c = r.pos - 1; a > 0; a--, c--){
            var h = r.node(a).type.spec;
            if (h.defining || h.isolating) break;
            i.indexOf(a) > -1 ? s = a : r.before(a) == c && i.splice(1, 0, -a);
        }
        for(var p = i.indexOf(s), l = [], f = n.openStart, u = n.content, d = 0;; d++){
            var m = u.firstChild;
            if (l.push(m), d == n.openStart) break;
            u = m.content;
        }
        f > 0 && l[f - 1].type.spec.defining && r.node(p).type != l[f - 1].type ? f -= 1 : f >= 2 && l[f - 1].isTextblock && l[f - 2].type.spec.defining && r.node(p).type != l[f - 2].type && (f -= 2);
        for(var v = n.openStart; v >= 0; v--){
            var y = (v + f + 1) % (n.openStart + 1), g = l[y];
            if (g) for(var w = 0; w < i.length; w++){
                var b = i[(w + p) % i.length], k = !0;
                b < 0 && (k = !1, b = -b);
                var x = r.node(b - 1), O = r.index(b - 1);
                if (x.canReplaceWith(O, O, g.type, g.marks)) return this.replace(r.before(b), k ? o.after(b) : e, new S(pe(n.content, 0, n.openStart, y), y, n.openEnd));
            }
        }
        for(var M = this.steps.length, C = i.length - 1; C >= 0 && (this.replace(t, e, n), !(this.steps.length > M)); C--){
            var N = i[C];
            C < 0 || (t = r.before(N), e = o.after(N));
        }
        return this;
    }, Vt.prototype.replaceRangeWith = function(t, e, n) {
        if (!n.isInline && t == e && this.doc.resolve(t).parent.content.size) {
            var r = function(t, e, n) {
                var r = t.resolve(e);
                if (r.parent.canReplaceWith(r.index(), r.index(), n)) return e;
                if (0 == r.parentOffset) for(var o = r.depth - 1; o >= 0; o--){
                    var i = r.index(o);
                    if (r.node(o).canReplaceWith(i, i, n)) return r.before(o + 1);
                    if (i > 0) return null;
                }
                if (r.parentOffset == r.parent.content.size) for(var s = r.depth - 1; s >= 0; s--){
                    var a = r.indexAfter(s);
                    if (r.node(s).canReplaceWith(a, a, n)) return r.after(s + 1);
                    if (a < r.node(s).childCount) return null;
                }
            }(this.doc, t, n.type);
            null != r && (t = e = r);
        }
        return this.replaceRange(t, e, new S(v.from(n), 0, 0));
    }, Vt.prototype.deleteRange = function(t, e) {
        for(var n = this.doc.resolve(t), r = this.doc.resolve(e), o = le(n, r), i = 0; i < o.length; i++){
            var s = o[i], a = i == o.length - 1;
            if (a && 0 == s || n.node(s).type.contentMatch.validEnd) return this.delete(n.start(s), r.end(s));
            if (s > 0 && (a || n.node(s - 1).canReplace(n.index(s - 1), r.indexAfter(s - 1)))) return this.delete(n.before(s), r.after(s));
        }
        for(var c = 1; c <= n.depth && c <= r.depth; c++)if (t - n.start(c) == n.depth - c && e > n.end(c) && r.end(c) - e != r.depth - c) return this.delete(n.before(c), e);
        return this.delete(t, e);
    };
    var fe = Object.create(null), ue = function(t, e, n) {
        this.ranges = n || [
            new me(t.min(e), t.max(e))
        ], this.$anchor = t, this.$head = e;
    }, de = {
        anchor: {
            configurable: !0
        },
        head: {
            configurable: !0
        },
        from: {
            configurable: !0
        },
        to: {
            configurable: !0
        },
        $from: {
            configurable: !0
        },
        $to: {
            configurable: !0
        },
        empty: {
            configurable: !0
        }
    };
    de.anchor.get = function() {
        return this.$anchor.pos;
    }, de.head.get = function() {
        return this.$head.pos;
    }, de.from.get = function() {
        return this.$from.pos;
    }, de.to.get = function() {
        return this.$to.pos;
    }, de.$from.get = function() {
        return this.ranges[0].$from;
    }, de.$to.get = function() {
        return this.ranges[0].$to;
    }, de.empty.get = function() {
        for(var t = this.ranges, e = 0; e < t.length; e++)if (t[e].$from.pos != t[e].$to.pos) return !1;
        return !0;
    }, ue.prototype.content = function() {
        return this.$from.node(0).slice(this.from, this.to, !0);
    }, ue.prototype.replace = function(t, e) {
        void 0 === e && (e = S.empty);
        for(var n = e.content.lastChild, r = null, o = 0; o < e.openEnd; o++)r = n, n = n.lastChild;
        for(var i = t.steps.length, s = this.ranges, a = 0; a < s.length; a++){
            var c = s[a], h = c.$from, p = c.$to, l = t.mapping.slice(i);
            t.replaceRange(l.map(h.pos), l.map(p.pos), a ? S.empty : e), 0 == a && Se(t, i, (n ? n.isInline : r && r.isTextblock) ? -1 : 1);
        }
    }, ue.prototype.replaceWith = function(t, e) {
        for(var n = t.steps.length, r = this.ranges, o = 0; o < r.length; o++){
            var i = r[o], s = i.$from, a = i.$to, c = t.mapping.slice(n), h = c.map(s.pos), p = c.map(a.pos);
            o ? t.deleteRange(h, p) : (t.replaceRangeWith(h, p, e), Se(t, n, e.isInline ? -1 : 1));
        }
    }, ue.findFrom = function(t, e, n) {
        var r = t.parent.inlineContent ? new ve(t) : xe(t.node(0), t.parent, t.pos, t.index(), e, n);
        if (r) return r;
        for(var o = t.depth - 1; o >= 0; o--){
            var i = e < 0 ? xe(t.node(0), t.node(o), t.before(o + 1), t.index(o), e, n) : xe(t.node(0), t.node(o), t.after(o + 1), t.index(o) + 1, e, n);
            if (i) return i;
        }
    }, ue.near = function(t, e) {
        return void 0 === e && (e = 1), this.findFrom(t, e) || this.findFrom(t, -e) || new be(t.node(0));
    }, ue.atStart = function(t) {
        return xe(t, t, 0, 0, 1) || new be(t);
    }, ue.atEnd = function(t) {
        return xe(t, t, t.content.size, t.childCount, -1) || new be(t);
    }, ue.fromJSON = function(t, e) {
        if (!e || !e.type) throw new RangeError("Invalid input for Selection.fromJSON");
        var n = fe[e.type];
        if (!n) throw new RangeError("No selection type " + e.type + " defined");
        return n.fromJSON(t, e);
    }, ue.jsonID = function(t, e) {
        if (t in fe) throw new RangeError("Duplicate use of selection JSON ID " + t);
        return fe[t] = e, e.prototype.jsonID = t, e;
    }, ue.prototype.getBookmark = function() {
        return ve.between(this.$anchor, this.$head).getBookmark();
    }, Object.defineProperties(ue.prototype, de), ue.prototype.visible = !0;
    var me = function(t, e) {
        this.$from = t, this.$to = e;
    }, ve = function(t) {
        function e(e, n) {
            void 0 === n && (n = e), t.call(this, e, n);
        }
        t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
        var n = {
            $cursor: {
                configurable: !0
            }
        };
        return n.$cursor.get = function() {
            return this.$anchor.pos == this.$head.pos ? this.$head : null;
        }, e.prototype.map = function(n, r) {
            var o = n.resolve(r.map(this.head));
            if (!o.parent.inlineContent) return t.near(o);
            var i = n.resolve(r.map(this.anchor));
            return new e(i.parent.inlineContent ? i : o, o);
        }, e.prototype.replace = function(e, n) {
            if (void 0 === n && (n = S.empty), t.prototype.replace.call(this, e, n), n == S.empty) {
                var r = this.$from.marksAcross(this.$to);
                r && e.ensureMarks(r);
            }
        }, e.prototype.eq = function(t) {
            return t instanceof e && t.anchor == this.anchor && t.head == this.head;
        }, e.prototype.getBookmark = function() {
            return new ye(this.anchor, this.head);
        }, e.prototype.toJSON = function() {
            return {
                type: "text",
                anchor: this.anchor,
                head: this.head
            };
        }, e.fromJSON = function(t, n) {
            if ("number" != typeof n.anchor || "number" != typeof n.head) throw new RangeError("Invalid input for TextSelection.fromJSON");
            return new e(t.resolve(n.anchor), t.resolve(n.head));
        }, e.create = function(t, e, n) {
            void 0 === n && (n = e);
            var r = t.resolve(e);
            return new this(r, n == e ? r : t.resolve(n));
        }, e.between = function(n, r, o) {
            var i = n.pos - r.pos;
            if (o && !i || (o = i >= 0 ? 1 : -1), !r.parent.inlineContent) {
                var s = t.findFrom(r, o, !0) || t.findFrom(r, -o, !0);
                if (!s) return t.near(r, o);
                r = s.$head;
            }
            return n.parent.inlineContent || (0 == i || (n = (t.findFrom(n, -o, !0) || t.findFrom(n, o, !0)).$anchor).pos < r.pos != i < 0) && (n = r), new e(n, r);
        }, Object.defineProperties(e.prototype, n), e;
    }(ue);
    ue.jsonID("text", ve);
    var ye = function(t, e) {
        this.anchor = t, this.head = e;
    };
    ye.prototype.map = function(t) {
        return new ye(t.map(this.anchor), t.map(this.head));
    }, ye.prototype.resolve = function(t) {
        return ve.between(t.resolve(this.anchor), t.resolve(this.head));
    };
    var ge = function(t) {
        function e(e) {
            var n = e.nodeAfter, r = e.node(0).resolve(e.pos + n.nodeSize);
            t.call(this, e, r), this.node = n;
        }
        return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.map = function(n, r) {
            var o = r.mapResult(this.anchor), i = o.deleted, s = o.pos, a = n.resolve(s);
            return i ? t.near(a) : new e(a);
        }, e.prototype.content = function() {
            return new S(v.from(this.node), 0, 0);
        }, e.prototype.eq = function(t) {
            return t instanceof e && t.anchor == this.anchor;
        }, e.prototype.toJSON = function() {
            return {
                type: "node",
                anchor: this.anchor
            };
        }, e.prototype.getBookmark = function() {
            return new we(this.anchor);
        }, e.fromJSON = function(t, n) {
            if ("number" != typeof n.anchor) throw new RangeError("Invalid input for NodeSelection.fromJSON");
            return new e(t.resolve(n.anchor));
        }, e.create = function(t, e) {
            return new this(t.resolve(e));
        }, e.isSelectable = function(t) {
            return !t.isText && !1 !== t.type.spec.selectable;
        }, e;
    }(ue);
    ge.prototype.visible = !1, ue.jsonID("node", ge);
    var we = function(t) {
        this.anchor = t;
    };
    we.prototype.map = function(t) {
        var e = t.mapResult(this.anchor), n = e.deleted, r = e.pos;
        return n ? new ye(r, r) : new we(r);
    }, we.prototype.resolve = function(t) {
        var e = t.resolve(this.anchor), n = e.nodeAfter;
        return n && ge.isSelectable(n) ? new ge(e) : ue.near(e);
    };
    var be = function(t) {
        function e(e) {
            t.call(this, e.resolve(0), e.resolve(e.content.size));
        }
        return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.replace = function(e, n) {
            if (void 0 === n && (n = S.empty), n == S.empty) {
                e.delete(0, e.doc.content.size);
                var r = t.atStart(e.doc);
                r.eq(e.selection) || e.setSelection(r);
            } else t.prototype.replace.call(this, e, n);
        }, e.prototype.toJSON = function() {
            return {
                type: "all"
            };
        }, e.fromJSON = function(t) {
            return new e(t);
        }, e.prototype.map = function(t) {
            return new e(t);
        }, e.prototype.eq = function(t) {
            return t instanceof e;
        }, e.prototype.getBookmark = function() {
            return ke;
        }, e;
    }(ue);
    ue.jsonID("all", be);
    var ke = {
        map: function() {
            return this;
        },
        resolve: function(t) {
            return new be(t);
        }
    };
    function xe(t, e, n, r, o, i) {
        if (e.inlineContent) return ve.create(t, n);
        for(var s = r - (o > 0 ? 0 : 1); o > 0 ? s < e.childCount : s >= 0; s += o){
            var a = e.child(s);
            if (a.isAtom) {
                if (!i && ge.isSelectable(a)) return ge.create(t, n - (o < 0 ? a.nodeSize : 0));
            } else {
                var c = xe(t, a, n + o, o < 0 ? a.childCount : 0, o, i);
                if (c) return c;
            }
            n += a.nodeSize * o;
        }
    }
    function Se(t, e, n) {
        var r = t.steps.length - 1;
        if (!(r < e)) {
            var o, i = t.steps[r];
            if (i instanceof Lt || i instanceof Jt) t.mapping.maps[r].forEach(function(t, e, n, r) {
                null == o && (o = r);
            }), t.setSelection(ue.near(t.doc.resolve(o), n));
        }
    }
    var Oe = function(t) {
        function e(e) {
            t.call(this, e.doc), this.time = Date.now(), this.curSelection = e.selection, this.curSelectionFor = 0, this.storedMarks = e.storedMarks, this.updated = 0, this.meta = Object.create(null);
        }
        t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
        var n = {
            selection: {
                configurable: !0
            },
            selectionSet: {
                configurable: !0
            },
            storedMarksSet: {
                configurable: !0
            },
            isGeneric: {
                configurable: !0
            },
            scrolledIntoView: {
                configurable: !0
            }
        };
        return n.selection.get = function() {
            return this.curSelectionFor < this.steps.length && (this.curSelection = this.curSelection.map(this.doc, this.mapping.slice(this.curSelectionFor)), this.curSelectionFor = this.steps.length), this.curSelection;
        }, e.prototype.setSelection = function(t) {
            if (t.$from.doc != this.doc) throw new RangeError("Selection passed to setSelection must point at the current document");
            return this.curSelection = t, this.curSelectionFor = this.steps.length, this.updated = -3 & (1 | this.updated), this.storedMarks = null, this;
        }, n.selectionSet.get = function() {
            return (1 & this.updated) > 0;
        }, e.prototype.setStoredMarks = function(t) {
            return this.storedMarks = t, this.updated |= 2, this;
        }, e.prototype.ensureMarks = function(t) {
            return k.sameSet(this.storedMarks || this.selection.$from.marks(), t) || this.setStoredMarks(t), this;
        }, e.prototype.addStoredMark = function(t) {
            return this.ensureMarks(t.addToSet(this.storedMarks || this.selection.$head.marks()));
        }, e.prototype.removeStoredMark = function(t) {
            return this.ensureMarks(t.removeFromSet(this.storedMarks || this.selection.$head.marks()));
        }, n.storedMarksSet.get = function() {
            return (2 & this.updated) > 0;
        }, e.prototype.addStep = function(e, n) {
            t.prototype.addStep.call(this, e, n), this.updated = -3 & this.updated, this.storedMarks = null;
        }, e.prototype.setTime = function(t) {
            return this.time = t, this;
        }, e.prototype.replaceSelection = function(t) {
            return this.selection.replace(this, t), this;
        }, e.prototype.replaceSelectionWith = function(t, e) {
            var n = this.selection;
            return !1 !== e && (t = t.mark(this.storedMarks || (n.empty ? n.$from.marks() : n.$from.marksAcross(n.$to) || k.none))), n.replaceWith(this, t), this;
        }, e.prototype.deleteSelection = function() {
            return this.selection.replace(this), this;
        }, e.prototype.insertText = function(t, e, n) {
            void 0 === n && (n = e);
            var r = this.doc.type.schema;
            if (null == e) return t ? this.replaceSelectionWith(r.text(t), !0) : this.deleteSelection();
            if (!t) return this.deleteRange(e, n);
            var o = this.storedMarks;
            if (!o) {
                var i = this.doc.resolve(e);
                o = n == e ? i.marks() : i.marksAcross(this.doc.resolve(n));
            }
            return this.replaceRangeWith(e, n, r.text(t, o)), this.selection.empty || this.setSelection(ue.near(this.selection.$to)), this;
        }, e.prototype.setMeta = function(t, e) {
            return this.meta["string" == typeof t ? t : t.key] = e, this;
        }, e.prototype.getMeta = function(t) {
            return this.meta["string" == typeof t ? t : t.key];
        }, n.isGeneric.get = function() {
            for(var t in this.meta)return !1;
            return !0;
        }, e.prototype.scrollIntoView = function() {
            return this.updated |= 4, this;
        }, n.scrolledIntoView.get = function() {
            return (4 & this.updated) > 0;
        }, Object.defineProperties(e.prototype, n), e;
    }(Vt);
    function Me(t, e) {
        return e && t ? t.bind(e) : t;
    }
    var Ce = function(t, e, n) {
        this.name = t, this.init = Me(e.init, n), this.apply = Me(e.apply, n);
    }, Ne = [
        new Ce("doc", {
            init: function(t) {
                return t.doc || t.schema.topNodeType.createAndFill();
            },
            apply: function(t) {
                return t.doc;
            }
        }),
        new Ce("selection", {
            init: function(t, e) {
                return t.selection || ue.atStart(e.doc);
            },
            apply: function(t) {
                return t.selection;
            }
        }),
        new Ce("storedMarks", {
            init: function(t) {
                return t.storedMarks || null;
            },
            apply: function(t, e, n, r) {
                return r.selection.$cursor ? t.storedMarks : null;
            }
        }),
        new Ce("scrollToSelection", {
            init: function() {
                return 0;
            },
            apply: function(t, e) {
                return t.scrolledIntoView ? e + 1 : e;
            }
        })
    ], Te = function(t, e) {
        var n = this;
        this.schema = t, this.fields = Ne.concat(), this.plugins = [], this.pluginsByKey = Object.create(null), e && e.forEach(function(t) {
            if (n.pluginsByKey[t.key]) throw new RangeError("Adding different instances of a keyed plugin (" + t.key + ")");
            n.plugins.push(t), n.pluginsByKey[t.key] = t, t.spec.state && n.fields.push(new Ce(t.key, t.spec.state, t));
        });
    }, De = function(t) {
        this.config = t;
    }, Ee = {
        schema: {
            configurable: !0
        },
        plugins: {
            configurable: !0
        },
        tr: {
            configurable: !0
        }
    };
    Ee.schema.get = function() {
        return this.config.schema;
    }, Ee.plugins.get = function() {
        return this.config.plugins;
    }, De.prototype.apply = function(t) {
        return this.applyTransaction(t).state;
    }, De.prototype.filterTransaction = function(t, e) {
        void 0 === e && (e = -1);
        for(var n = 0; n < this.config.plugins.length; n++)if (n != e) {
            var r = this.config.plugins[n];
            if (r.spec.filterTransaction && !r.spec.filterTransaction.call(r, t, this)) return !1;
        }
        return !0;
    }, De.prototype.applyTransaction = function(t) {
        if (!this.filterTransaction(t)) return {
            state: this,
            transactions: []
        };
        for(var e = [
            t
        ], n = this.applyInner(t), r = null;;){
            for(var o = !1, i = 0; i < this.config.plugins.length; i++){
                var s = this.config.plugins[i];
                if (s.spec.appendTransaction) {
                    var a = r ? r[i].n : 0, c = r ? r[i].state : this, h = a < e.length && s.spec.appendTransaction.call(s, a ? e.slice(a) : e, c, n);
                    if (h && n.filterTransaction(h, i)) {
                        if (h.setMeta("appendedTransaction", t), !r) {
                            r = [];
                            for(var p = 0; p < this.config.plugins.length; p++)r.push(p < i ? {
                                state: n,
                                n: e.length
                            } : {
                                state: this,
                                n: 0
                            });
                        }
                        e.push(h), n = n.applyInner(h), o = !0;
                    }
                    r && (r[i] = {
                        state: n,
                        n: e.length
                    });
                }
            }
            if (!o) return {
                state: n,
                transactions: e
            };
        }
    }, De.prototype.applyInner = function(t) {
        if (!t.before.eq(this.doc)) throw new RangeError("Applying a mismatched transaction");
        for(var e = new De(this.config), n = this.config.fields, r = 0; r < n.length; r++){
            var o = n[r];
            e[o.name] = o.apply(t, this[o.name], this, e);
        }
        for(var i = 0; i < Ae.length; i++)Ae[i](this, t, e);
        return e;
    }, Ee.tr.get = function() {
        return new Oe(this);
    }, De.create = function(t) {
        for(var e = new Te(t.schema || t.doc.type.schema, t.plugins), n = new De(e), r = 0; r < e.fields.length; r++)n[e.fields[r].name] = e.fields[r].init(t, n);
        return n;
    }, De.prototype.reconfigure = function(t) {
        for(var e = new Te(t.schema || this.schema, t.plugins), n = e.fields, r = new De(e), o = 0; o < n.length; o++){
            var i = n[o].name;
            r[i] = this.hasOwnProperty(i) ? this[i] : n[o].init(t, r);
        }
        return r;
    }, De.prototype.toJSON = function(t) {
        var e = {
            doc: this.doc.toJSON(),
            selection: this.selection.toJSON()
        };
        if (this.storedMarks && (e.storedMarks = this.storedMarks.map(function(t) {
            return t.toJSON();
        })), t && "object" == typeof t) for(var n in t){
            if ("doc" == n || "selection" == n) throw new RangeError("The JSON fields `doc` and `selection` are reserved");
            var r = t[n], o = r.spec.state;
            o && o.toJSON && (e[n] = o.toJSON.call(r, this[r.key]));
        }
        return e;
    }, De.fromJSON = function(t, e, n) {
        if (!e) throw new RangeError("Invalid input for EditorState.fromJSON");
        if (!t.schema) throw new RangeError("Required config field 'schema' missing");
        var r = new Te(t.schema, t.plugins), o = new De(r);
        return r.fields.forEach(function(r) {
            if ("doc" == r.name) o.doc = q.fromJSON(t.schema, e.doc);
            else if ("selection" == r.name) o.selection = ue.fromJSON(o.doc, e.selection);
            else if ("storedMarks" == r.name) e.storedMarks && (o.storedMarks = e.storedMarks.map(t.schema.markFromJSON));
            else {
                if (n) for(var i in n){
                    var s = n[i], a = s.spec.state;
                    if (s.key == r.name && a && a.fromJSON && Object.prototype.hasOwnProperty.call(e, i)) return void (o[r.name] = a.fromJSON.call(s, t, e[i], o));
                }
                o[r.name] = r.init(t, o);
            }
        }), o;
    }, De.addApplyListener = function(t) {
        Ae.push(t);
    }, De.removeApplyListener = function(t) {
        var e = Ae.indexOf(t);
        e > -1 && Ae.splice(e, 1);
    }, Object.defineProperties(De.prototype, Ee);
    var Ae = [];
    function Re(t, e, n) {
        for(var r in t){
            var o = t[r];
            o instanceof Function ? o = o.bind(e) : "handleDOMEvents" == r && (o = Re(o, e, {})), n[r] = o;
        }
        return n;
    }
    var Ie = function(t) {
        this.props = {}, t.props && Re(t.props, this, this.props), this.spec = t, this.key = t.key ? t.key.key : function(t) {
            if (t in ze) return t + "$" + ++ze[t];
            return ze[t] = 0, t + "$";
        }("plugin");
    };
    Ie.prototype.getState = function(t) {
        return t[this.key];
    };
    var ze = Object.create(null);
    var Pe = {};
    if ("undefined" != typeof navigator && "undefined" != typeof document) {
        var Ve = /Edge\/(\d+)/.exec(navigator.userAgent), Be = /MSIE \d/.test(navigator.userAgent), $e = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent);
        Pe.mac = /Mac/.test(navigator.platform);
        var Fe = Pe.ie = !!(Be || $e || Ve);
        Pe.ie_version = Be ? document.documentMode || 6 : $e ? +$e[1] : Ve ? +Ve[1] : null, Pe.gecko = !Fe && /gecko\/(\d+)/i.test(navigator.userAgent), Pe.gecko_version = Pe.gecko && +(/Firefox\/(\d+)/.exec(navigator.userAgent) || [
            0,
            0
        ])[1];
        var _e = !Fe && /Chrome\/(\d+)/.exec(navigator.userAgent);
        Pe.chrome = !!_e, Pe.chrome_version = _e && +_e[1], Pe.ios = !Fe && /AppleWebKit/.test(navigator.userAgent) && /Mobile\/\w+/.test(navigator.userAgent), Pe.android = /Android \d/.test(navigator.userAgent), Pe.webkit = "webkitFontSmoothing" in document.documentElement.style, Pe.safari = /Apple Computer/.test(navigator.vendor), Pe.webkit_version = Pe.webkit && +(/\bAppleWebKit\/(\d+)/.exec(navigator.userAgent) || [
            0,
            0
        ])[1];
    }
    var je = function(t) {
        for(var e = 0;; e++)if (!(t = t.previousSibling)) return e;
    }, Le = function(t) {
        var e = t.parentNode;
        return e && 11 == e.nodeType ? e.host : e;
    }, Je = null, qe = function(t, e, n) {
        var r = Je || (Je = document.createRange());
        return r.setEnd(t, null == n ? t.nodeValue.length : n), r.setStart(t, e || 0), r;
    }, We = function(t, e, n, r) {
        return n && (He(t, e, n, r, -1) || He(t, e, n, r, 1));
    }, Ke = /^(img|br|input|textarea|hr)$/i;
    function He(t, e, n, r, o) {
        for(;;){
            if (t == n && e == r) return !0;
            if (e == (o < 0 ? 0 : Ue(t))) {
                var i = t.parentNode;
                if (1 != i.nodeType || Ge(t) || Ke.test(t.nodeName) || "false" == t.contentEditable) return !1;
                e = je(t) + (o < 0 ? 0 : 1), t = i;
            } else {
                if (1 != t.nodeType) return !1;
                if ("false" == (t = t.childNodes[e + (o < 0 ? -1 : 0)]).contentEditable) return !1;
                e = o < 0 ? Ue(t) : 0;
            }
        }
    }
    function Ue(t) {
        return 3 == t.nodeType ? t.nodeValue.length : t.childNodes.length;
    }
    function Ge(t) {
        for(var e, n = t; n && !(e = n.pmViewDesc); n = n.parentNode);
        return e && e.node && e.node.isBlock && (e.dom == t || e.contentDOM == t);
    }
    var Xe = function(t) {
        var e = t.isCollapsed;
        return e && Pe.chrome && t.rangeCount && !t.getRangeAt(0).collapsed && (e = !1), e;
    };
    function Ye(t, e) {
        var n = document.createEvent("Event");
        return n.initEvent("keydown", !0, !0), n.keyCode = t, n.key = n.code = e, n;
    }
    function Qe(t) {
        return {
            left: 0,
            right: t.documentElement.clientWidth,
            top: 0,
            bottom: t.documentElement.clientHeight
        };
    }
    function Ze(t, e) {
        return "number" == typeof t ? t : t[e];
    }
    function tn(t) {
        var e = t.getBoundingClientRect();
        return {
            left: e.left,
            right: e.left + t.clientWidth,
            top: e.top,
            bottom: e.top + t.clientHeight
        };
    }
    function en(t, e, n) {
        for(var r = t.someProp("scrollThreshold") || 0, o = t.someProp("scrollMargin") || 5, i = t.dom.ownerDocument, s = n || t.dom; s; s = Le(s))if (1 == s.nodeType) {
            var a = s == i.body || 1 != s.nodeType, c = a ? Qe(i) : tn(s), h = 0, p = 0;
            if (e.top < c.top + Ze(r, "top") ? p = -(c.top - e.top + Ze(o, "top")) : e.bottom > c.bottom - Ze(r, "bottom") && (p = e.bottom - c.bottom + Ze(o, "bottom")), e.left < c.left + Ze(r, "left") ? h = -(c.left - e.left + Ze(o, "left")) : e.right > c.right - Ze(r, "right") && (h = e.right - c.right + Ze(o, "right")), h || p) {
                if (a) i.defaultView.scrollBy(h, p);
                else {
                    var l = s.scrollLeft, f = s.scrollTop;
                    p && (s.scrollTop += p), h && (s.scrollLeft += h);
                    var u = s.scrollLeft - l, d = s.scrollTop - f;
                    e = {
                        left: e.left - u,
                        top: e.top - d,
                        right: e.right - u,
                        bottom: e.bottom - d
                    };
                }
            }
            if (a) break;
        }
    }
    function nn(t) {
        for(var e = [], n = t.ownerDocument; t && (e.push({
            dom: t,
            top: t.scrollTop,
            left: t.scrollLeft
        }), t != n); t = Le(t));
        return e;
    }
    function rn(t, e) {
        for(var n = 0; n < t.length; n++){
            var r = t[n], o = r.dom, i = r.top, s = r.left;
            o.scrollTop != i + e && (o.scrollTop = i + e), o.scrollLeft != s && (o.scrollLeft = s);
        }
    }
    var on = null;
    function sn(t, e) {
        for(var n, r, o = 2e8, i = 0, s = e.top, a = e.top, c = t.firstChild, h = 0; c; c = c.nextSibling, h++){
            var p = void 0;
            if (1 == c.nodeType) p = c.getClientRects();
            else {
                if (3 != c.nodeType) continue;
                p = qe(c).getClientRects();
            }
            for(var l = 0; l < p.length; l++){
                var f = p[l];
                if (f.top <= s && f.bottom >= a) {
                    s = Math.max(f.bottom, s), a = Math.min(f.top, a);
                    var u = f.left > e.left ? f.left - e.left : f.right < e.left ? e.left - f.right : 0;
                    if (u < o) {
                        n = c, o = u, r = u && 3 == n.nodeType ? {
                            left: f.right < e.left ? f.right : f.left,
                            top: e.top
                        } : e, 1 == c.nodeType && u && (i = h + (e.left >= (f.left + f.right) / 2 ? 1 : 0));
                        continue;
                    }
                }
                !n && (e.left >= f.right && e.top >= f.top || e.left >= f.left && e.top >= f.bottom) && (i = h + 1);
            }
        }
        return n && 3 == n.nodeType ? function(t, e) {
            for(var n = t.nodeValue.length, r = document.createRange(), o = 0; o < n; o++){
                r.setEnd(t, o + 1), r.setStart(t, o);
                var i = pn(r, 1);
                if (i.top != i.bottom && an(e, i)) return {
                    node: t,
                    offset: o + (e.left >= (i.left + i.right) / 2 ? 1 : 0)
                };
            }
            return {
                node: t,
                offset: 0
            };
        }(n, r) : !n || o && 1 == n.nodeType ? {
            node: t,
            offset: i
        } : sn(n, r);
    }
    function an(t, e) {
        return t.left >= e.left - 1 && t.left <= e.right + 1 && t.top >= e.top - 1 && t.top <= e.bottom + 1;
    }
    function cn(t, e, n) {
        var r = t.childNodes.length;
        if (r && n.top < n.bottom) for(var o = Math.max(0, Math.min(r - 1, Math.floor(r * (e.top - n.top) / (n.bottom - n.top)) - 2)), i = o;;){
            var s = t.childNodes[i];
            if (1 == s.nodeType) for(var a = s.getClientRects(), c = 0; c < a.length; c++){
                var h = a[c];
                if (an(e, h)) return cn(s, e, h);
            }
            if ((i = (i + 1) % r) == o) break;
        }
        return t;
    }
    function hn(t, e) {
        var n, r, o, i, s = t.root;
        if (s.caretPositionFromPoint) try {
            var a = s.caretPositionFromPoint(e.left, e.top);
            a && (o = (n = a).offsetNode, i = n.offset);
        } catch (t) {}
        if (!o && s.caretRangeFromPoint) {
            var c = s.caretRangeFromPoint(e.left, e.top);
            c && (o = (r = c).startContainer, i = r.startOffset);
        }
        var h, p = s.elementFromPoint(e.left, e.top + 1);
        if (!p || !t.dom.contains(1 != p.nodeType ? p.parentNode : p)) {
            var l = t.dom.getBoundingClientRect();
            if (!an(e, l)) return null;
            if (!(p = cn(t.dom, e, l))) return null;
        }
        if (Pe.safari && p.draggable && (o = i = null), p = function(t, e) {
            var n = t.parentNode;
            return n && /^li$/i.test(n.nodeName) && e.left < t.getBoundingClientRect().left ? n : t;
        }(p, e), o) {
            if (Pe.gecko && 1 == o.nodeType && (i = Math.min(i, o.childNodes.length)) < o.childNodes.length) {
                var f, u = o.childNodes[i];
                "IMG" == u.nodeName && (f = u.getBoundingClientRect()).right <= e.left && f.bottom > e.top && i++;
            }
            o == t.dom && i == o.childNodes.length - 1 && 1 == o.lastChild.nodeType && e.top > o.lastChild.getBoundingClientRect().bottom ? h = t.state.doc.content.size : 0 != i && 1 == o.nodeType && "BR" == o.childNodes[i - 1].nodeName || (h = function(t, e, n, r) {
                for(var o = -1, i = e; i != t.dom;){
                    var s = t.docView.nearestDesc(i, !0);
                    if (!s) return null;
                    if (s.node.isBlock && s.parent) {
                        var a = s.dom.getBoundingClientRect();
                        if (a.left > r.left || a.top > r.top) o = s.posBefore;
                        else {
                            if (!(a.right < r.left || a.bottom < r.top)) break;
                            o = s.posAfter;
                        }
                    }
                    i = s.dom.parentNode;
                }
                return o > -1 ? o : t.docView.posFromDOM(e, n);
            }(t, o, i, e));
        }
        null == h && (h = function(t, e, n) {
            var r = sn(e, n), o = r.node, i = r.offset, s = -1;
            if (1 == o.nodeType && !o.firstChild) {
                var a = o.getBoundingClientRect();
                s = a.left != a.right && n.left > (a.left + a.right) / 2 ? 1 : -1;
            }
            return t.docView.posFromDOM(o, i, s);
        }(t, p, e));
        var d = t.docView.nearestDesc(p, !0);
        return {
            pos: h,
            inside: d ? d.posAtStart - d.border : -1
        };
    }
    function pn(t, e) {
        var n = t.getClientRects();
        return n.length ? n[e < 0 ? 0 : n.length - 1] : t.getBoundingClientRect();
    }
    var ln = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/;
    function fn(t, e, n) {
        var r = t.docView.domFromPos(e), o = r.node, i = r.offset, s = t.state.doc.resolve(e), a = s.parent.inlineContent, c = Pe.webkit || Pe.gecko;
        if (3 == o.nodeType && c && ln.test(o.nodeValue)) {
            var h = pn(qe(o, i, i), n);
            if (Pe.gecko && i && /\s/.test(o.nodeValue[i - 1]) && i < o.nodeValue.length) {
                var p = pn(qe(o, i - 1, i - 1), -1);
                if (p.top == h.top) {
                    var l = pn(qe(o, i, i + 1), -1);
                    if (l.top != h.top) return un(l, l.left < p.left);
                }
            }
            return h;
        }
        if (a) {
            for(var f = s.depth ? t.docView.domAfterPos(s.before()) : t.dom; n < 0 && !i && o != f;)i = je(o), o = o.parentNode;
            for(; n >= 0 && i == Ue(o) && o != f;)i = je(o) + 1, o = o.parentNode;
        }
        if (3 == o.nodeType) return n < 0 ? un(pn(qe(o, i - 1, i), 1), !1) : un(pn(qe(o, i, i + 1), -1), !0);
        if (!a) {
            if (i && (n < 0 || i == Ue(o))) {
                var u = o.childNodes[i - 1];
                if (1 == u.nodeType) return dn(u.getBoundingClientRect(), !1);
            }
            if (i < Ue(o)) {
                var d = o.childNodes[i];
                if (1 == d.nodeType) return dn(d.getBoundingClientRect(), !0);
            }
            return dn(o.getBoundingClientRect(), n >= 0);
        }
        if (i && (n < 0 || i == Ue(o))) {
            var m = o.childNodes[i - 1], v = 3 == m.nodeType ? qe(m, Ue(m) - (c ? 0 : 1)) : 1 == m.nodeType && "BR" != m.nodeName ? m : null;
            if (v) return un(pn(v, 1), !1);
        }
        if (i < Ue(o)) {
            var y = o.childNodes[i], g = 3 == y.nodeType ? qe(y, 0, c ? 0 : 1) : 1 == y.nodeType ? y : null;
            if (g) return un(pn(g, -1), !0);
        }
        return un(pn(3 == o.nodeType ? qe(o) : o, -n), n >= 0);
    }
    function un(t, e) {
        if (0 == t.width) return t;
        var n = e ? t.left : t.right;
        return {
            top: t.top,
            bottom: t.bottom,
            left: n,
            right: n
        };
    }
    function dn(t, e) {
        if (0 == t.height) return t;
        var n = e ? t.top : t.bottom;
        return {
            top: n,
            bottom: n,
            left: t.left,
            right: t.right
        };
    }
    function mn(t, e, n) {
        var r = t.state, o = t.root.activeElement;
        r != e && t.updateState(e), o != t.dom && t.focus();
        try {
            return n();
        } finally{
            r != e && t.updateState(r), o != t.dom && o && o.focus();
        }
    }
    var vn = /[\u0590-\u08ac]/;
    var yn = null, gn = null, wn = !1;
    function bn(t, e, n) {
        return yn == e && gn == n ? wn : (yn = e, gn = n, wn = "up" == n || "down" == n ? function(t, e, n) {
            var r = e.selection, o = "up" == n ? r.$anchor.min(r.$head) : r.$anchor.max(r.$head);
            return mn(t, e, function() {
                for(var e = t.docView.domFromPos(o.pos).node;;){
                    var r = t.docView.nearestDesc(e, !0);
                    if (!r) break;
                    if (r.node.isBlock) {
                        e = r.dom;
                        break;
                    }
                    e = r.dom.parentNode;
                }
                for(var i = fn(t, o.pos, 1), s = e.firstChild; s; s = s.nextSibling){
                    var a = void 0;
                    if (1 == s.nodeType) a = s.getClientRects();
                    else {
                        if (3 != s.nodeType) continue;
                        a = qe(s, 0, s.nodeValue.length).getClientRects();
                    }
                    for(var c = 0; c < a.length; c++){
                        var h = a[c];
                        if (h.bottom > h.top && ("up" == n ? h.bottom < i.top + 1 : h.top > i.bottom - 1)) return !1;
                    }
                }
                return !0;
            });
        }(t, e, n) : function(t, e, n) {
            var r = e.selection.$head;
            if (!r.parent.isTextblock) return !1;
            var o = r.parentOffset, i = !o, s = o == r.parent.content.size, a = getSelection();
            return vn.test(r.parent.textContent) && a.modify ? mn(t, e, function() {
                var e = a.getRangeAt(0), o = a.focusNode, i = a.focusOffset, s = a.caretBidiLevel;
                a.modify("move", n, "character");
                var c = !(r.depth ? t.docView.domAfterPos(r.before()) : t.dom).contains(1 == a.focusNode.nodeType ? a.focusNode : a.focusNode.parentNode) || o == a.focusNode && i == a.focusOffset;
                return a.removeAllRanges(), a.addRange(e), null != s && (a.caretBidiLevel = s), c;
            }) : "left" == n || "backward" == n ? i : s;
        }(t, e, n));
    }
    var kn = function(t, e, n, r) {
        this.parent = t, this.children = e, this.dom = n, n.pmViewDesc = this, this.contentDOM = r, this.dirty = 0;
    }, xn = {
        beforePosition: {
            configurable: !0
        },
        size: {
            configurable: !0
        },
        border: {
            configurable: !0
        },
        posBefore: {
            configurable: !0
        },
        posAtStart: {
            configurable: !0
        },
        posAfter: {
            configurable: !0
        },
        posAtEnd: {
            configurable: !0
        },
        contentLost: {
            configurable: !0
        }
    };
    kn.prototype.matchesWidget = function() {
        return !1;
    }, kn.prototype.matchesMark = function() {
        return !1;
    }, kn.prototype.matchesNode = function() {
        return !1;
    }, kn.prototype.matchesHack = function() {
        return !1;
    }, xn.beforePosition.get = function() {
        return !1;
    }, kn.prototype.parseRule = function() {
        return null;
    }, kn.prototype.stopEvent = function() {
        return !1;
    }, xn.size.get = function() {
        for(var t = 0, e = 0; e < this.children.length; e++)t += this.children[e].size;
        return t;
    }, xn.border.get = function() {
        return 0;
    }, kn.prototype.destroy = function() {
        this.parent = null, this.dom.pmViewDesc == this && (this.dom.pmViewDesc = null);
        for(var t = 0; t < this.children.length; t++)this.children[t].destroy();
    }, kn.prototype.posBeforeChild = function(t) {
        for(var e = 0, n = this.posAtStart; e < this.children.length; e++){
            var r = this.children[e];
            if (r == t) return n;
            n += r.size;
        }
    }, xn.posBefore.get = function() {
        return this.parent.posBeforeChild(this);
    }, xn.posAtStart.get = function() {
        return this.parent ? this.parent.posBeforeChild(this) + this.border : 0;
    }, xn.posAfter.get = function() {
        return this.posBefore + this.size;
    }, xn.posAtEnd.get = function() {
        return this.posAtStart + this.size - 2 * this.border;
    }, kn.prototype.localPosFromDOM = function(t, e, n) {
        if (this.contentDOM && this.contentDOM.contains(1 == t.nodeType ? t : t.parentNode)) {
            if (n < 0) {
                var r, o;
                if (t == this.contentDOM) r = t.childNodes[e - 1];
                else {
                    for(; t.parentNode != this.contentDOM;)t = t.parentNode;
                    r = t.previousSibling;
                }
                for(; r && (!(o = r.pmViewDesc) || o.parent != this);)r = r.previousSibling;
                return r ? this.posBeforeChild(o) + o.size : this.posAtStart;
            }
            var i, s;
            if (t == this.contentDOM) i = t.childNodes[e];
            else {
                for(; t.parentNode != this.contentDOM;)t = t.parentNode;
                i = t.nextSibling;
            }
            for(; i && (!(s = i.pmViewDesc) || s.parent != this);)i = i.nextSibling;
            return i ? this.posBeforeChild(s) : this.posAtEnd;
        }
        var a;
        if (this.contentDOM && this.contentDOM != this.dom && this.dom.contains(this.contentDOM)) a = 2 & t.compareDocumentPosition(this.contentDOM);
        else if (this.dom.firstChild) {
            if (0 == e) for(var c = t;; c = c.parentNode){
                if (c == this.dom) {
                    a = !1;
                    break;
                }
                if (c.parentNode.firstChild != c) break;
            }
            if (null == a && e == t.childNodes.length) for(var h = t;; h = h.parentNode){
                if (h == this.dom) {
                    a = !0;
                    break;
                }
                if (h.parentNode.lastChild != h) break;
            }
        }
        return (null == a ? n > 0 : a) ? this.posAtEnd : this.posAtStart;
    }, kn.prototype.nearestDesc = function(t, e) {
        for(var n = !0, r = t; r; r = r.parentNode){
            var o = this.getDesc(r);
            if (o && (!e || o.node)) {
                if (!n || !o.nodeDOM || (1 == o.nodeDOM.nodeType ? o.nodeDOM.contains(1 == t.nodeType ? t : t.parentNode) : o.nodeDOM == t)) return o;
                n = !1;
            }
        }
    }, kn.prototype.getDesc = function(t) {
        for(var e = t.pmViewDesc, n = e; n; n = n.parent)if (n == this) return e;
    }, kn.prototype.posFromDOM = function(t, e, n) {
        for(var r = t; r; r = r.parentNode){
            var o = this.getDesc(r);
            if (o) return o.localPosFromDOM(t, e, n);
        }
        return -1;
    }, kn.prototype.descAt = function(t) {
        for(var e = 0, n = 0; e < this.children.length; e++){
            var r = this.children[e], o = n + r.size;
            if (n == t && o != n) {
                for(; !r.border && r.children.length;)r = r.children[0];
                return r;
            }
            if (t < o) return r.descAt(t - n - r.border);
            n = o;
        }
    }, kn.prototype.domFromPos = function(t) {
        if (!this.contentDOM) return {
            node: this.dom,
            offset: 0
        };
        for(var e = 0, n = 0;; n++){
            if (e == t) {
                for(; n < this.children.length && (this.children[n].beforePosition || this.children[n].dom.parentNode != this.contentDOM);)n++;
                return {
                    node: this.contentDOM,
                    offset: n == this.children.length ? this.contentDOM.childNodes.length : je(this.children[n].dom)
                };
            }
            if (n == this.children.length) throw new Error("Invalid position " + t);
            var r = this.children[n], o = e + r.size;
            if (t < o) return r.domFromPos(t - e - r.border);
            e = o;
        }
    }, kn.prototype.parseRange = function(t, e, n) {
        if (void 0 === n && (n = 0), 0 == this.children.length) return {
            node: this.contentDOM,
            from: t,
            to: e,
            fromOffset: 0,
            toOffset: this.contentDOM.childNodes.length
        };
        for(var r = -1, o = -1, i = n, s = 0;; s++){
            var a = this.children[s], c = i + a.size;
            if (-1 == r && t <= c) {
                var h = i + a.border;
                if (t >= h && e <= c - a.border && a.node && a.contentDOM && this.contentDOM.contains(a.contentDOM)) return a.parseRange(t, e, h);
                t = i;
                for(var p = s; p > 0; p--){
                    var l = this.children[p - 1];
                    if (l.size && l.dom.parentNode == this.contentDOM && !l.emptyChildAt(1)) {
                        r = je(l.dom) + 1;
                        break;
                    }
                    t -= l.size;
                }
                -1 == r && (r = 0);
            }
            if (r > -1 && (c > e || s == this.children.length - 1)) {
                e = c;
                for(var f = s + 1; f < this.children.length; f++){
                    var u = this.children[f];
                    if (u.size && u.dom.parentNode == this.contentDOM && !u.emptyChildAt(-1)) {
                        o = je(u.dom);
                        break;
                    }
                    e += u.size;
                }
                -1 == o && (o = this.contentDOM.childNodes.length);
                break;
            }
            i = c;
        }
        return {
            node: this.contentDOM,
            from: t,
            to: e,
            fromOffset: r,
            toOffset: o
        };
    }, kn.prototype.emptyChildAt = function(t) {
        if (this.border || !this.contentDOM || !this.children.length) return !1;
        var e = this.children[t < 0 ? 0 : this.children.length - 1];
        return 0 == e.size || e.emptyChildAt(t);
    }, kn.prototype.domAfterPos = function(t) {
        var e = this.domFromPos(t), n = e.node, r = e.offset;
        if (1 != n.nodeType || r == n.childNodes.length) throw new RangeError("No node after pos " + t);
        return n.childNodes[r];
    }, kn.prototype.setSelection = function(t, e, n, r) {
        for(var o = Math.min(t, e), i = Math.max(t, e), s = 0, a = 0; s < this.children.length; s++){
            var c = this.children[s], h = a + c.size;
            if (o > a && i < h) return c.setSelection(t - a - c.border, e - a - c.border, n, r);
            a = h;
        }
        var p = this.domFromPos(t), l = this.domFromPos(e), f = n.getSelection(), u = !1;
        if ((Pe.gecko || Pe.safari) && t == e) {
            var d = p.node.childNodes[p.offset - 1];
            u = d && ("BR" == d.nodeName || "false" == d.contentEditable);
        }
        if (r || u && Pe.safari || !We(p.node, p.offset, f.anchorNode, f.anchorOffset) || !We(l.node, l.offset, f.focusNode, f.focusOffset)) {
            var m = !1;
            if ((f.extend || t == e) && !u) {
                f.collapse(p.node, p.offset);
                try {
                    t != e && f.extend(l.node, l.offset), m = !0;
                } catch (t) {
                    if (!(t instanceof DOMException)) throw t;
                }
            }
            if (!m) {
                if (t > e) {
                    var v = p;
                    p = l, l = v;
                }
                var y = document.createRange();
                y.setEnd(l.node, l.offset), y.setStart(p.node, p.offset), f.removeAllRanges(), f.addRange(y);
            }
        }
    }, kn.prototype.ignoreMutation = function(t) {
        return !this.contentDOM && "selection" != t.type;
    }, xn.contentLost.get = function() {
        return this.contentDOM && this.contentDOM != this.dom && !this.dom.contains(this.contentDOM);
    }, kn.prototype.markDirty = function(t, e) {
        for(var n = 0, r = 0; r < this.children.length; r++){
            var o = this.children[r], i = n + o.size;
            if (n == i ? t <= i && e >= n : t < i && e > n) {
                var s = n + o.border, a = i - o.border;
                if (t >= s && e <= a) return this.dirty = t == n || e == i ? 2 : 1, void (t != s || e != a || !o.contentLost && o.dom.parentNode == this.contentDOM ? o.markDirty(t - s, e - s) : o.dirty = 3);
                o.dirty = 3;
            }
            n = i;
        }
        this.dirty = 2;
    }, kn.prototype.markParentsDirty = function() {
        for(var t = 1, e = this.parent; e; e = e.parent, t++){
            var n = 1 == t ? 2 : 1;
            e.dirty < n && (e.dirty = n);
        }
    }, Object.defineProperties(kn.prototype, xn);
    var Sn = [], On = function(t) {
        function e(e, n, r, o) {
            var i, s = n.type.toDOM;
            if ("function" == typeof s && (s = s(r, function() {
                return i ? i.parent ? i.parent.posBeforeChild(i) : void 0 : o;
            })), !n.type.spec.raw) {
                if (1 != s.nodeType) {
                    var a = document.createElement("span");
                    a.appendChild(s), s = a;
                }
                s.contentEditable = !1, s.classList.add("ProseMirror-widget");
            }
            t.call(this, e, Sn, s, null), this.widget = n, i = this;
        }
        t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
        var n = {
            beforePosition: {
                configurable: !0
            }
        };
        return n.beforePosition.get = function() {
            return this.widget.type.side < 0;
        }, e.prototype.matchesWidget = function(t) {
            return 0 == this.dirty && t.type.eq(this.widget.type);
        }, e.prototype.parseRule = function() {
            return {
                ignore: !0
            };
        }, e.prototype.stopEvent = function(t) {
            var e = this.widget.spec.stopEvent;
            return !!e && e(t);
        }, e.prototype.ignoreMutation = function(t) {
            return "selection" != t.type || this.widget.spec.ignoreSelection;
        }, Object.defineProperties(e.prototype, n), e;
    }(kn), Mn = function(t) {
        function e(e, n, r, o) {
            t.call(this, e, Sn, n, null), this.textDOM = r, this.text = o;
        }
        t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
        var n = {
            size: {
                configurable: !0
            }
        };
        return n.size.get = function() {
            return this.text.length;
        }, e.prototype.localPosFromDOM = function(t, e) {
            return t != this.textDOM ? this.posAtStart + (e ? this.size : 0) : this.posAtStart + e;
        }, e.prototype.domFromPos = function(t) {
            return {
                node: this.textDOM,
                offset: t
            };
        }, e.prototype.ignoreMutation = function(t) {
            return "characterData" === t.type && t.target.nodeValue == t.oldValue;
        }, Object.defineProperties(e.prototype, n), e;
    }(kn), Cn = function(t) {
        function e(e, n, r, o) {
            t.call(this, e, [], r, o), this.mark = n;
        }
        return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.create = function(t, n, r, o) {
            var i = o.nodeViews[n.type.name], s = i && i(n, o, r);
            return s && s.dom || (s = Nt.renderSpec(document, n.type.spec.toDOM(n, r))), new e(t, n, s.dom, s.contentDOM || s.dom);
        }, e.prototype.parseRule = function() {
            return {
                mark: this.mark.type.name,
                attrs: this.mark.attrs,
                contentElement: this.contentDOM
            };
        }, e.prototype.matchesMark = function(t) {
            return 3 != this.dirty && this.mark.eq(t);
        }, e.prototype.markDirty = function(e, n) {
            if (t.prototype.markDirty.call(this, e, n), 0 != this.dirty) {
                for(var r = this.parent; !r.node;)r = r.parent;
                r.dirty < this.dirty && (r.dirty = this.dirty), this.dirty = 0;
            }
        }, e.prototype.slice = function(t, n, r) {
            var o = e.create(this.parent, this.mark, !0, r), i = this.children, s = this.size;
            n < s && (i = Jn(i, n, s, r)), t > 0 && (i = Jn(i, 0, t, r));
            for(var a = 0; a < i.length; a++)i[a].parent = o;
            return o.children = i, o;
        }, e;
    }(kn), Nn = function(t) {
        function e(e, n, r, o, i, s, a, c, h) {
            t.call(this, e, n.isLeaf ? Sn : [], i, s), this.nodeDOM = a, this.node = n, this.outerDeco = r, this.innerDeco = o, s && this.updateChildren(c, h);
        }
        t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
        var n = {
            size: {
                configurable: !0
            },
            border: {
                configurable: !0
            }
        };
        return e.create = function(t, n, r, o, i, s) {
            var a, c, h = i.nodeViews[n.type.name], p = h && h(n, i, function() {
                return c ? c.parent ? c.parent.posBeforeChild(c) : void 0 : s;
            }, r), l = p && p.dom, f = p && p.contentDOM;
            if (n.isText) {
                if (l) {
                    if (3 != l.nodeType) throw new RangeError("Text must be rendered as a DOM text node");
                } else l = document.createTextNode(n.text);
            } else l || (l = (a = Nt.renderSpec(document, n.type.spec.toDOM(n))).dom, f = a.contentDOM);
            f || n.isText || "BR" == l.nodeName || (l.hasAttribute("contenteditable") || (l.contentEditable = !1), n.type.spec.draggable && (l.draggable = !0));
            var u = l;
            return l = $n(l, r, n), p ? c = new An(t, n, r, o, l, f, u, p, i, s + 1) : n.isText ? new Dn(t, n, r, o, l, u, i) : new e(t, n, r, o, l, f, u, i, s + 1);
        }, e.prototype.parseRule = function() {
            var t = this;
            if (this.node.type.spec.reparseInView) return null;
            var e = {
                node: this.node.type.name,
                attrs: this.node.attrs
            };
            return this.node.type.spec.code && (e.preserveWhitespace = "full"), this.contentDOM && !this.contentLost ? e.contentElement = this.contentDOM : e.getContent = function() {
                return t.contentDOM ? v.empty : t.node.content;
            }, e;
        }, e.prototype.matchesNode = function(t, e, n) {
            return 0 == this.dirty && t.eq(this.node) && Fn(e, this.outerDeco) && n.eq(this.innerDeco);
        }, n.size.get = function() {
            return this.node.nodeSize;
        }, n.border.get = function() {
            return this.node.isLeaf ? 0 : 1;
        }, e.prototype.updateChildren = function(t, e) {
            var n = this, r = this.node.inlineContent, o = e, i = r && t.composing && this.localCompositionNode(t, e), s = new jn(this, i && i.node);
            !function(t, e, n, r) {
                var o = e.locals(t), i = 0;
                if (0 == o.length) {
                    for(var s = 0; s < t.childCount; s++){
                        var a = t.child(s);
                        r(a, o, e.forChild(i, a), s), i += a.nodeSize;
                    }
                    return;
                }
                for(var c = 0, h = [], p = null, l = 0;;){
                    if (c < o.length && o[c].to == i) {
                        for(var f = o[c++], u = void 0; c < o.length && o[c].to == i;)(u || (u = [
                            f
                        ])).push(o[c++]);
                        if (u) {
                            u.sort(Ln);
                            for(var d = 0; d < u.length; d++)n(u[d], l, !!p);
                        } else n(f, l, !!p);
                    }
                    var m = void 0, v = void 0;
                    if (p) v = -1, m = p, p = null;
                    else {
                        if (!(l < t.childCount)) break;
                        v = l, m = t.child(l++);
                    }
                    for(var y = 0; y < h.length; y++)h[y].to <= i && h.splice(y--, 1);
                    for(; c < o.length && o[c].from <= i && o[c].to > i;)h.push(o[c++]);
                    var g = i + m.nodeSize;
                    if (m.isText) {
                        var w = g;
                        c < o.length && o[c].from < w && (w = o[c].from);
                        for(var b = 0; b < h.length; b++)h[b].to < w && (w = h[b].to);
                        w < g && (p = m.cut(w - i), m = m.cut(0, w - i), g = w, v = -1);
                    }
                    r(m, h.length ? m.isInline && !m.isLeaf ? h.filter(function(t) {
                        return !t.inline;
                    }) : h.slice() : Sn, e.forChild(i, m), v), i = g;
                }
            }(this.node, this.innerDeco, function(e, i, a) {
                e.spec.marks ? s.syncToMarks(e.spec.marks, r, t) : e.type.side >= 0 && !a && s.syncToMarks(i == n.node.childCount ? k.none : n.node.child(i).marks, r, t), s.placeWidget(e, t, o);
            }, function(e, n, i, a) {
                s.syncToMarks(e.marks, r, t), s.findNodeMatch(e, n, i, a) || s.updateNextNode(e, n, i, t, a) || s.addNode(e, n, i, t, o), o += e.nodeSize;
            }), s.syncToMarks(Sn, r, t), this.node.isTextblock && s.addTextblockHacks(), s.destroyRest(), (s.changed || 2 == this.dirty) && (i && this.protectLocalComposition(t, i), Rn(this.contentDOM, this.children, t), Pe.ios && function(t) {
                if ("UL" == t.nodeName || "OL" == t.nodeName) {
                    var e = t.style.cssText;
                    t.style.cssText = e + "; list-style: square !important", window.getComputedStyle(t).listStyle, t.style.cssText = e;
                }
            }(this.dom));
        }, e.prototype.localCompositionNode = function(t, e) {
            var n = t.state.selection, r = n.from, o = n.to;
            if (!(!(t.state.selection instanceof ve) || r < e || o > e + this.node.content.size)) {
                var i = t.root.getSelection(), s = function(t, e) {
                    for(;;){
                        if (3 == t.nodeType) return t;
                        if (1 == t.nodeType && e > 0) {
                            if (t.childNodes.length > e && 3 == t.childNodes[e].nodeType) return t.childNodes[e];
                            e = Ue(t = t.childNodes[e - 1]);
                        } else {
                            if (!(1 == t.nodeType && e < t.childNodes.length)) return null;
                            t = t.childNodes[e], e = 0;
                        }
                    }
                }(i.focusNode, i.focusOffset);
                if (s && this.dom.contains(s.parentNode)) {
                    var a = s.nodeValue, c = function(t, e, n, r) {
                        for(var o = 0, i = 0; o < t.childCount && i <= r;){
                            var s = t.child(o++), a = i;
                            if (i += s.nodeSize, s.isText) {
                                for(var c = s.text; o < t.childCount;){
                                    var h = t.child(o++);
                                    if (i += h.nodeSize, !h.isText) break;
                                    c += h.text;
                                }
                                if (i >= n) {
                                    var p = c.lastIndexOf(e, r - a);
                                    if (p >= 0 && p + e.length + a >= n) return a + p;
                                }
                            }
                        }
                        return -1;
                    }(this.node.content, a, r - e, o - e);
                    return c < 0 ? null : {
                        node: s,
                        pos: c,
                        text: a
                    };
                }
            }
        }, e.prototype.protectLocalComposition = function(t, e) {
            var n = e.node, r = e.pos, o = e.text;
            if (!this.getDesc(n)) {
                for(var i = n; i.parentNode != this.contentDOM; i = i.parentNode){
                    for(; i.previousSibling;)i.parentNode.removeChild(i.previousSibling);
                    for(; i.nextSibling;)i.parentNode.removeChild(i.nextSibling);
                    i.pmViewDesc && (i.pmViewDesc = null);
                }
                var s = new Mn(this, i, n, o);
                t.compositionNodes.push(s), this.children = Jn(this.children, r, r + o.length, t, s);
            }
        }, e.prototype.update = function(t, e, n, r) {
            return !(3 == this.dirty || !t.sameMarkup(this.node)) && (this.updateInner(t, e, n, r), !0);
        }, e.prototype.updateInner = function(t, e, n, r) {
            this.updateOuterDeco(e), this.node = t, this.innerDeco = n, this.contentDOM && this.updateChildren(r, this.posAtStart), this.dirty = 0;
        }, e.prototype.updateOuterDeco = function(t) {
            if (!Fn(t, this.outerDeco)) {
                var e = 1 != this.nodeDOM.nodeType, n = this.dom;
                this.dom = Vn(this.dom, this.nodeDOM, Pn(this.outerDeco, this.node, e), Pn(t, this.node, e)), this.dom != n && (n.pmViewDesc = null, this.dom.pmViewDesc = this), this.outerDeco = t;
            }
        }, e.prototype.selectNode = function() {
            this.nodeDOM.classList.add("ProseMirror-selectednode"), !this.contentDOM && this.node.type.spec.draggable || (this.dom.draggable = !0);
        }, e.prototype.deselectNode = function() {
            this.nodeDOM.classList.remove("ProseMirror-selectednode"), !this.contentDOM && this.node.type.spec.draggable || this.dom.removeAttribute("draggable");
        }, Object.defineProperties(e.prototype, n), e;
    }(kn);
    function Tn(t, e, n, r, o) {
        return $n(r, e, t), new Nn(null, t, e, n, r, r, r, o, 0);
    }
    var Dn = function(t) {
        function e(e, n, r, o, i, s, a) {
            t.call(this, e, n, r, o, i, null, s, a);
        }
        return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.parseRule = function() {
            for(var t = this.nodeDOM.parentNode; t && t != this.dom && !t.pmIsDeco;)t = t.parentNode;
            return {
                skip: t || !0
            };
        }, e.prototype.update = function(t, e, n, r) {
            return !(3 == this.dirty || 0 != this.dirty && !this.inParent() || !t.sameMarkup(this.node)) && (this.updateOuterDeco(e), 0 == this.dirty && t.text == this.node.text || t.text == this.nodeDOM.nodeValue || (this.nodeDOM.nodeValue = t.text, r.trackWrites == this.nodeDOM && (r.trackWrites = null)), this.node = t, this.dirty = 0, !0);
        }, e.prototype.inParent = function() {
            for(var t = this.parent.contentDOM, e = this.nodeDOM; e; e = e.parentNode)if (e == t) return !0;
            return !1;
        }, e.prototype.domFromPos = function(t) {
            return {
                node: this.nodeDOM,
                offset: t
            };
        }, e.prototype.localPosFromDOM = function(e, n, r) {
            return e == this.nodeDOM ? this.posAtStart + Math.min(n, this.node.text.length) : t.prototype.localPosFromDOM.call(this, e, n, r);
        }, e.prototype.ignoreMutation = function(t) {
            return "characterData" != t.type && "selection" != t.type;
        }, e.prototype.slice = function(t, n, r) {
            var o = this.node.cut(t, n), i = document.createTextNode(o.text);
            return new e(this.parent, o, this.outerDeco, this.innerDeco, i, i, r);
        }, e;
    }(Nn), En = function(t) {
        function e() {
            t.apply(this, arguments);
        }
        return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.parseRule = function() {
            return {
                ignore: !0
            };
        }, e.prototype.matchesHack = function() {
            return 0 == this.dirty;
        }, e;
    }(kn), An = function(t) {
        function e(e, n, r, o, i, s, a, c, h, p) {
            t.call(this, e, n, r, o, i, s, a, h, p), this.spec = c;
        }
        return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.update = function(e, n, r, o) {
            if (3 == this.dirty) return !1;
            if (this.spec.update) {
                var i = this.spec.update(e, n);
                return i && this.updateInner(e, n, r, o), i;
            }
            return !(!this.contentDOM && !e.isLeaf) && t.prototype.update.call(this, e, n, r, o);
        }, e.prototype.selectNode = function() {
            this.spec.selectNode ? this.spec.selectNode() : t.prototype.selectNode.call(this);
        }, e.prototype.deselectNode = function() {
            this.spec.deselectNode ? this.spec.deselectNode() : t.prototype.deselectNode.call(this);
        }, e.prototype.setSelection = function(e, n, r, o) {
            this.spec.setSelection ? this.spec.setSelection(e, n, r) : t.prototype.setSelection.call(this, e, n, r, o);
        }, e.prototype.destroy = function() {
            this.spec.destroy && this.spec.destroy(), t.prototype.destroy.call(this);
        }, e.prototype.stopEvent = function(t) {
            return !!this.spec.stopEvent && this.spec.stopEvent(t);
        }, e.prototype.ignoreMutation = function(e) {
            return this.spec.ignoreMutation ? this.spec.ignoreMutation(e) : t.prototype.ignoreMutation.call(this, e);
        }, e;
    }(Nn);
    function Rn(t, e, n) {
        for(var r = t.firstChild, o = !1, i = 0; i < e.length; i++){
            var s = e[i], a = s.dom;
            if (a.parentNode == t) {
                for(; a != r;)r = _n(r), o = !0;
                r = r.nextSibling;
            } else o = !0, t.insertBefore(a, r);
            if (s instanceof Cn) {
                var c = r ? r.previousSibling : t.lastChild;
                Rn(s.contentDOM, s.children, n), r = c ? c.nextSibling : t.firstChild;
            }
        }
        for(; r;)r = _n(r), o = !0;
        o && n.trackWrites == t && (n.trackWrites = null);
    }
    function In(t) {
        t && (this.nodeName = t);
    }
    In.prototype = Object.create(null);
    var zn = [
        new In
    ];
    function Pn(t, e, n) {
        if (0 == t.length) return zn;
        for(var r = n ? zn[0] : new In, o = [
            r
        ], i = 0; i < t.length; i++){
            var s = t[i].type.attrs, a = r;
            if (s) for(var c in s.nodeName && o.push(a = new In(s.nodeName)), s){
                var h = s[c];
                null != h && (n && 1 == o.length && o.push(a = r = new In(e.isInline ? "span" : "div")), "class" == c ? a.class = (a.class ? a.class + " " : "") + h : "style" == c ? a.style = (a.style ? a.style + ";" : "") + h : "nodeName" != c && (a[c] = h));
            }
        }
        return o;
    }
    function Vn(t, e, n, r) {
        if (n == zn && r == zn) return e;
        for(var o = e, i = 0; i < r.length; i++){
            var s = r[i], a = n[i];
            if (i) {
                var c = void 0;
                a && a.nodeName == s.nodeName && o != t && (c = o.parentNode) && c.tagName.toLowerCase() == s.nodeName || ((c = document.createElement(s.nodeName)).pmIsDeco = !0, c.appendChild(o), a = zn[0]), o = c;
            }
            Bn(o, a || zn[0], s);
        }
        return o;
    }
    function Bn(t, e, n) {
        for(var r in e)"class" == r || "style" == r || "nodeName" == r || r in n || t.removeAttribute(r);
        for(var o in n)"class" != o && "style" != o && "nodeName" != o && n[o] != e[o] && t.setAttribute(o, n[o]);
        if (e.class != n.class) {
            for(var i = e.class ? e.class.split(" ") : Sn, s = n.class ? n.class.split(" ") : Sn, a = 0; a < i.length; a++)-1 == s.indexOf(i[a]) && t.classList.remove(i[a]);
            for(var c = 0; c < s.length; c++)-1 == i.indexOf(s[c]) && t.classList.add(s[c]);
        }
        if (e.style != n.style) {
            if (e.style) for(var h, p = /\s*([\w\-\xa1-\uffff]+)\s*:(?:"(?:\\.|[^"])*"|'(?:\\.|[^'])*'|\(.*?\)|[^;])*/g; h = p.exec(e.style);)t.style.removeProperty(h[1]);
            n.style && (t.style.cssText += n.style);
        }
    }
    function $n(t, e, n) {
        return Vn(t, t, zn, Pn(e, n, 1 != t.nodeType));
    }
    function Fn(t, e) {
        if (t.length != e.length) return !1;
        for(var n = 0; n < t.length; n++)if (!t[n].type.eq(e[n].type)) return !1;
        return !0;
    }
    function _n(t) {
        var e = t.nextSibling;
        return t.parentNode.removeChild(t), e;
    }
    var jn = function(t, e) {
        this.top = t, this.lock = e, this.index = 0, this.stack = [], this.changed = !1;
        var n = function(t, e) {
            for(var n = [], r = t.childCount, o = e.length - 1; r > 0 && o >= 0; o--){
                var i = e[o], s = i.node;
                if (s) {
                    if (s != t.child(r - 1)) break;
                    n.push(i), --r;
                }
            }
            return {
                nodes: n.reverse(),
                offset: r
            };
        }(t.node.content, t.children);
        this.preMatched = n.nodes, this.preMatchOffset = n.offset;
    };
    function Ln(t, e) {
        return t.type.side - e.type.side;
    }
    function Jn(t, e, n, r, o) {
        for(var i = [], s = 0, a = 0; s < t.length; s++){
            var c = t[s], h = a, p = a += c.size;
            h >= n || p <= e ? i.push(c) : (h < e && i.push(c.slice(0, e - h, r)), o && (i.push(o), o = null), p > n && i.push(c.slice(n - h, c.size, r)));
        }
        return i;
    }
    function qn(t, e) {
        var n = t.root.getSelection(), r = t.state.doc;
        if (!n.focusNode) return null;
        var o = t.docView.nearestDesc(n.focusNode), i = o && 0 == o.size, s = t.docView.posFromDOM(n.focusNode, n.focusOffset);
        if (s < 0) return null;
        var a, c, h = r.resolve(s);
        if (Xe(n)) {
            for(a = h; o && !o.node;)o = o.parent;
            if (o && o.node.isAtom && ge.isSelectable(o.node) && o.parent && (!o.node.isInline || !function(t, e, n) {
                for(var r = 0 == e, o = e == Ue(t); r || o;){
                    if (t == n) return !0;
                    var i = je(t);
                    if (!(t = t.parentNode)) return !1;
                    r = r && 0 == i, o = o && i == Ue(t);
                }
            }(n.focusNode, n.focusOffset, o.dom))) {
                var p = o.posBefore;
                c = new ge(s == p ? h : r.resolve(p));
            }
        } else {
            var l = t.docView.posFromDOM(n.anchorNode, n.anchorOffset);
            if (l < 0) return null;
            a = r.resolve(l);
        }
        c || (c = Qn(t, a, h, "pointer" == e || t.state.selection.head < h.pos && !i ? 1 : -1));
        return c;
    }
    function Wn(t, e) {
        var n = t.state.selection;
        if (Xn(t, n), t.editable ? t.hasFocus() : Zn(t) && document.activeElement && document.activeElement.contains(t.dom)) {
            if (t.domObserver.disconnectSelection(), t.cursorWrapper) !function(t) {
                var e = t.root.getSelection(), n = document.createRange(), r = t.cursorWrapper.dom, o = "IMG" == r.nodeName;
                o ? n.setEnd(r.parentNode, je(r) + 1) : n.setEnd(r, 0);
                n.collapse(!1), e.removeAllRanges(), e.addRange(n), !o && !t.state.selection.visible && Pe.ie && Pe.ie_version <= 11 && (r.disabled = !0, r.disabled = !1);
            }(t);
            else {
                var r, o, i = n.anchor, s = n.head;
                !Kn || n instanceof ve || (n.$from.parent.inlineContent || (r = Hn(t, n.from)), n.empty || n.$from.parent.inlineContent || (o = Hn(t, n.to))), t.docView.setSelection(i, s, t.root, e), Kn && (r && Gn(r), o && Gn(o)), n.visible ? t.dom.classList.remove("ProseMirror-hideselection") : (t.dom.classList.add("ProseMirror-hideselection"), "onselectionchange" in document && function(t) {
                    var e = t.dom.ownerDocument;
                    e.removeEventListener("selectionchange", t.hideSelectionGuard);
                    var n = t.root.getSelection(), r = n.anchorNode, o = n.anchorOffset;
                    e.addEventListener("selectionchange", t.hideSelectionGuard = function() {
                        n.anchorNode == r && n.anchorOffset == o || (e.removeEventListener("selectionchange", t.hideSelectionGuard), t.dom.classList.remove("ProseMirror-hideselection"));
                    });
                }(t));
            }
            t.domObserver.setCurSelection(), t.domObserver.connectSelection();
        }
    }
    jn.prototype.getPreMatch = function(t) {
        return t >= this.preMatchOffset ? this.preMatched[t - this.preMatchOffset] : null;
    }, jn.prototype.destroyBetween = function(t, e) {
        if (t != e) {
            for(var n = t; n < e; n++)this.top.children[n].destroy();
            this.top.children.splice(t, e - t), this.changed = !0;
        }
    }, jn.prototype.destroyRest = function() {
        this.destroyBetween(this.index, this.top.children.length);
    }, jn.prototype.syncToMarks = function(t, e, n) {
        for(var r = 0, o = this.stack.length >> 1, i = Math.min(o, t.length); r < i && (r == o - 1 ? this.top : this.stack[r + 1 << 1]).matchesMark(t[r]) && !1 !== t[r].type.spec.spanning;)r++;
        for(; r < o;)this.destroyRest(), this.top.dirty = 0, this.index = this.stack.pop(), this.top = this.stack.pop(), o--;
        for(; o < t.length;){
            this.stack.push(this.top, this.index + 1);
            for(var s = -1, a = this.index; a < Math.min(this.index + 3, this.top.children.length); a++)if (this.top.children[a].matchesMark(t[o])) {
                s = a;
                break;
            }
            if (s > -1) s > this.index && (this.changed = !0, this.destroyBetween(this.index, s)), this.top = this.top.children[this.index];
            else {
                var c = Cn.create(this.top, t[o], e, n);
                this.top.children.splice(this.index, 0, c), this.top = c, this.changed = !0;
            }
            this.index = 0, o++;
        }
    }, jn.prototype.findNodeMatch = function(t, e, n, r) {
        var o = -1, i = r < 0 ? void 0 : this.getPreMatch(r), s = this.top.children;
        if (i && i.matchesNode(t, e, n)) o = s.indexOf(i);
        else for(var a = this.index, c = Math.min(s.length, a + 5); a < c; a++){
            var h = s[a];
            if (h.matchesNode(t, e, n) && this.preMatched.indexOf(h) < 0) {
                o = a;
                break;
            }
        }
        return !(o < 0) && (this.destroyBetween(this.index, o), this.index++, !0);
    }, jn.prototype.updateNextNode = function(t, e, n, r, o) {
        for(var i = this.index; i < this.top.children.length; i++){
            var s = this.top.children[i];
            if (s instanceof Nn) {
                var a = this.preMatched.indexOf(s);
                if (a > -1 && a + this.preMatchOffset != o) return !1;
                var c = s.dom;
                if (!(this.lock && (c == this.lock || 1 == c.nodeType && c.contains(this.lock.parentNode)) && !(t.isText && s.node && s.node.isText && s.nodeDOM.nodeValue == t.text && 3 != s.dirty && Fn(e, s.outerDeco))) && s.update(t, e, n, r)) return this.destroyBetween(this.index, i), s.dom != c && (this.changed = !0), this.index++, !0;
                break;
            }
        }
        return !1;
    }, jn.prototype.addNode = function(t, e, n, r, o) {
        this.top.children.splice(this.index++, 0, Nn.create(this.top, t, e, n, r, o)), this.changed = !0;
    }, jn.prototype.placeWidget = function(t, e, n) {
        var r = this.index < this.top.children.length ? this.top.children[this.index] : null;
        if (!r || !r.matchesWidget(t) || t != r.widget && r.widget.type.toDOM.parentNode) {
            var o = new On(this.top, t, e, n);
            this.top.children.splice(this.index++, 0, o), this.changed = !0;
        } else this.index++;
    }, jn.prototype.addTextblockHacks = function() {
        for(var t = this.top.children[this.index - 1]; t instanceof Cn;)t = t.children[t.children.length - 1];
        if (!t || !(t instanceof Dn) || /\n$/.test(t.node.text)) {
            if (this.index < this.top.children.length && this.top.children[this.index].matchesHack()) this.index++;
            else {
                var e = document.createElement("br");
                this.top.children.splice(this.index++, 0, new En(this.top, Sn, e, null)), this.changed = !0;
            }
        }
    };
    var Kn = Pe.safari || Pe.chrome && Pe.chrome_version < 63;
    function Hn(t, e) {
        var n = t.docView.domFromPos(e), r = n.node, o = n.offset, i = o < r.childNodes.length ? r.childNodes[o] : null, s = o ? r.childNodes[o - 1] : null;
        if (Pe.safari && i && "false" == i.contentEditable) return Un(i);
        if (!(i && "false" != i.contentEditable || s && "false" != s.contentEditable)) {
            if (i) return Un(i);
            if (s) return Un(s);
        }
    }
    function Un(t) {
        return t.contentEditable = "true", Pe.safari && t.draggable && (t.draggable = !1, t.wasDraggable = !0), t;
    }
    function Gn(t) {
        t.contentEditable = "false", t.wasDraggable && (t.draggable = !0, t.wasDraggable = null);
    }
    function Xn(t, e) {
        if (e instanceof ge) {
            var n = t.docView.descAt(e.from);
            n != t.lastSelectedViewDesc && (Yn(t), n && n.selectNode(), t.lastSelectedViewDesc = n);
        } else Yn(t);
    }
    function Yn(t) {
        t.lastSelectedViewDesc && (t.lastSelectedViewDesc.parent && t.lastSelectedViewDesc.deselectNode(), t.lastSelectedViewDesc = null);
    }
    function Qn(t, e, n, r) {
        return t.someProp("createSelectionBetween", function(r) {
            return r(t, e, n);
        }) || ve.between(e, n, r);
    }
    function Zn(t) {
        var e = t.root.getSelection();
        if (!e.anchorNode) return !1;
        try {
            return t.dom.contains(3 == e.anchorNode.nodeType ? e.anchorNode.parentNode : e.anchorNode) && (t.editable || t.dom.contains(3 == e.focusNode.nodeType ? e.focusNode.parentNode : e.focusNode));
        } catch (t) {
            return !1;
        }
    }
    function tr(t, e) {
        var n = t.selection, r = n.$anchor, o = n.$head, i = e > 0 ? r.max(o) : r.min(o), s = i.parent.inlineContent ? i.depth ? t.doc.resolve(e > 0 ? i.after() : i.before()) : null : i;
        return s && ue.findFrom(s, e);
    }
    function er(t, e) {
        return t.dispatch(t.state.tr.setSelection(e).scrollIntoView()), !0;
    }
    function nr(t, e, n) {
        var r = t.state.selection;
        if (!(r instanceof ve)) {
            if (r instanceof ge && r.node.isInline) return er(t, new ve(e > 0 ? r.$to : r.$from));
            var o = tr(t.state, e);
            return !!o && er(t, o);
        }
        if (!r.empty || n.indexOf("s") > -1) return !1;
        if (t.endOfTextblock(e > 0 ? "right" : "left")) {
            var i = tr(t.state, e);
            return !!(i && i instanceof ge) && er(t, i);
        }
        if (!(Pe.mac && n.indexOf("m") > -1)) {
            var s, a = r.$head, c = a.textOffset ? null : e < 0 ? a.nodeBefore : a.nodeAfter;
            if (!c || c.isText) return !1;
            var h = e < 0 ? a.pos - c.nodeSize : a.pos;
            return !!(c.isAtom || (s = t.docView.descAt(h)) && !s.contentDOM) && (ge.isSelectable(c) ? er(t, new ge(e < 0 ? t.state.doc.resolve(a.pos - c.nodeSize) : a)) : !!Pe.webkit && er(t, new ve(t.state.doc.resolve(e < 0 ? h : h + c.nodeSize))));
        }
    }
    function rr(t) {
        return 3 == t.nodeType ? t.nodeValue.length : t.childNodes.length;
    }
    function or(t) {
        var e = t.pmViewDesc;
        return e && 0 == e.size && (t.nextSibling || "BR" != t.nodeName);
    }
    function ir(t) {
        var e = t.root.getSelection(), n = e.focusNode, r = e.focusOffset;
        if (n) {
            var o, i, s = !1;
            for(Pe.gecko && 1 == n.nodeType && r < rr(n) && or(n.childNodes[r]) && (s = !0);;)if (r > 0) {
                if (1 != n.nodeType) break;
                var a = n.childNodes[r - 1];
                if (or(a)) o = n, i = --r;
                else {
                    if (3 != a.nodeType) break;
                    r = (n = a).nodeValue.length;
                }
            } else {
                if (ar(n)) break;
                for(var c = n.previousSibling; c && or(c);)o = n.parentNode, i = je(c), c = c.previousSibling;
                if (c) r = rr(n = c);
                else {
                    if ((n = n.parentNode) == t.dom) break;
                    r = 0;
                }
            }
            s ? cr(t, e, n, r) : o && cr(t, e, o, i);
        }
    }
    function sr(t) {
        var e = t.root.getSelection(), n = e.focusNode, r = e.focusOffset;
        if (n) {
            for(var o, i, s = rr(n);;)if (r < s) {
                if (1 != n.nodeType) break;
                if (!or(n.childNodes[r])) break;
                o = n, i = ++r;
            } else {
                if (ar(n)) break;
                for(var a = n.nextSibling; a && or(a);)o = a.parentNode, i = je(a) + 1, a = a.nextSibling;
                if (a) r = 0, s = rr(n = a);
                else {
                    if ((n = n.parentNode) == t.dom) break;
                    r = s = 0;
                }
            }
            o && cr(t, e, o, i);
        }
    }
    function ar(t) {
        var e = t.pmViewDesc;
        return e && e.node && e.node.isBlock;
    }
    function cr(t, e, n, r) {
        if (Xe(e)) {
            var o = document.createRange();
            o.setEnd(n, r), o.setStart(n, r), e.removeAllRanges(), e.addRange(o);
        } else e.extend && e.extend(n, r);
        t.domObserver.setCurSelection();
        var i = t.state;
        setTimeout(function() {
            t.state == i && Wn(t);
        }, 50);
    }
    function hr(t, e, n) {
        var r = t.state.selection;
        if (r instanceof ve && !r.empty || n.indexOf("s") > -1) return !1;
        if (Pe.mac && n.indexOf("m") > -1) return !1;
        var o = r.$from, i = r.$to;
        if (!o.parent.inlineContent || t.endOfTextblock(e < 0 ? "up" : "down")) {
            var s = tr(t.state, e);
            if (s && s instanceof ge) return er(t, s);
        }
        if (!o.parent.inlineContent) {
            var a = ue.findFrom(e < 0 ? o : i, e);
            return !a || er(t, a);
        }
        return !1;
    }
    function pr(t, e) {
        if (!(t.state.selection instanceof ve)) return !0;
        var n = t.state.selection, r = n.$head, o = n.$anchor, i = n.empty;
        if (!r.sameParent(o)) return !0;
        if (!i) return !1;
        if (t.endOfTextblock(e > 0 ? "forward" : "backward")) return !0;
        var s = !r.textOffset && (e < 0 ? r.nodeBefore : r.nodeAfter);
        if (s && !s.isText) {
            var a = t.state.tr;
            return e < 0 ? a.delete(r.pos - s.nodeSize, r.pos) : a.delete(r.pos, r.pos + s.nodeSize), t.dispatch(a), !0;
        }
        return !1;
    }
    function lr(t, e, n) {
        t.domObserver.stop(), e.contentEditable = n, t.domObserver.start();
    }
    function fr(t, e) {
        var n = e.keyCode, r = function(t) {
            var e = "";
            return t.ctrlKey && (e += "c"), t.metaKey && (e += "m"), t.altKey && (e += "a"), t.shiftKey && (e += "s"), e;
        }(e);
        return 8 == n || Pe.mac && 72 == n && "c" == r ? pr(t, -1) || ir(t) : 46 == n || Pe.mac && 68 == n && "c" == r ? pr(t, 1) || sr(t) : 13 == n || 27 == n || (37 == n ? nr(t, -1, r) || ir(t) : 39 == n ? nr(t, 1, r) || sr(t) : 38 == n ? hr(t, -1, r) || ir(t) : 40 == n ? function(t) {
            if (Pe.safari && !(t.state.selection.$head.parentOffset > 0)) {
                var e = t.root.getSelection(), n = e.focusNode, r = e.focusOffset;
                if (n && 1 == n.nodeType && 0 == r && n.firstChild && "false" == n.firstChild.contentEditable) {
                    var o = n.firstChild;
                    lr(t, o, !0), setTimeout(function() {
                        return lr(t, o, !1);
                    }, 20);
                }
            }
        }(t) || hr(t, 1, r) || sr(t) : r == (Pe.mac ? "m" : "c") && (66 == n || 73 == n || 89 == n || 90 == n));
    }
    function ur(t) {
        var e = t.pmViewDesc;
        if (e) return e.parseRule();
        if ("BR" == t.nodeName && t.parentNode) {
            if (Pe.safari && /^(ul|ol)$/i.test(t.parentNode.nodeName)) {
                var n = document.createElement("div");
                return n.appendChild(document.createElement("li")), {
                    skip: n
                };
            }
            if (t.parentNode.lastChild == t || Pe.safari && /^(tr|table)$/i.test(t.parentNode.nodeName)) return {
                ignore: !0
            };
        } else if ("IMG" == t.nodeName && t.getAttribute("mark-placeholder")) return {
            ignore: !0
        };
    }
    function dr(t, e, n, r, o) {
        if (e < 0) {
            var i = t.lastSelectionTime > Date.now() - 50 ? t.lastSelectionOrigin : null, s = qn(t, i);
            if (s && !t.state.selection.eq(s)) {
                var a = t.state.tr.setSelection(s);
                "pointer" == i ? a.setMeta("pointer", !0) : "key" == i && a.scrollIntoView(), t.dispatch(a);
            }
        } else {
            var c = t.state.doc.resolve(e), h = c.sharedDepth(n);
            e = c.before(h + 1), n = t.state.doc.resolve(n).after(h + 1);
            var p, l, f = t.state.selection, u = function(t, e, n) {
                var r = t.docView.parseRange(e, n), o = r.node, i = r.fromOffset, s = r.toOffset, a = r.from, c = r.to, h = t.root.getSelection(), p = null, l = h.anchorNode;
                if (l && t.dom.contains(1 == l.nodeType ? l : l.parentNode) && (p = [
                    {
                        node: l,
                        offset: h.anchorOffset
                    }
                ], Xe(h) || p.push({
                    node: h.focusNode,
                    offset: h.focusOffset
                })), Pe.chrome && 8 === t.lastKeyCode) for(var f = s; f > i; f--){
                    var u = o.childNodes[f - 1], d = u.pmViewDesc;
                    if ("BR" == u.nodeType && !d) {
                        s = f;
                        break;
                    }
                    if (!d || d.size) break;
                }
                var m = t.state.doc, v = t.someProp("domParser") || mt.fromSchema(t.state.schema), y = m.resolve(a), g = null, w = v.parse(o, {
                    topNode: y.parent,
                    topMatch: y.parent.contentMatchAt(y.index()),
                    topOpen: !0,
                    from: i,
                    to: s,
                    preserveWhitespace: !y.parent.type.spec.code || "full",
                    editableContent: !0,
                    findPositions: p,
                    ruleFromNode: ur,
                    context: y
                });
                if (p && null != p[0].pos) {
                    var b = p[0].pos, k = p[1] && p[1].pos;
                    null == k && (k = b), g = {
                        anchor: b + a,
                        head: k + a
                    };
                }
                return {
                    doc: w,
                    sel: g,
                    from: a,
                    to: c
                };
            }(t, e, n), d = t.state.doc, m = d.slice(u.from, u.to);
            8 === t.lastKeyCode && Date.now() - 100 < t.lastKeyCodeTime ? (p = t.state.selection.to, l = "end") : (p = t.state.selection.from, l = "start"), t.lastKeyCode = null;
            var y = function(t, e, n, r, o) {
                var i = t.findDiffStart(e, n);
                if (null == i) return null;
                var s = t.findDiffEnd(e, n + t.size, n + e.size), a = s.a, c = s.b;
                if ("end" == o) r -= a + Math.max(0, i - Math.min(a, c)) - i;
                if (a < i && t.size < e.size) c = (i -= r <= i && r >= a ? i - r : 0) + (c - a), a = i;
                else if (c < i) a = (i -= r <= i && r >= c ? i - r : 0) + (a - c), c = i;
                return {
                    start: i,
                    endA: a,
                    endB: c
                };
            }(m.content, u.doc.content, u.from, p, l);
            if (!y) {
                if (!(r && f instanceof ve && !f.empty && f.$head.sameParent(f.$anchor)) || t.composing || u.sel && u.sel.anchor != u.sel.head) {
                    if (u.sel) {
                        var g = mr(t, t.state.doc, u.sel);
                        g && !g.eq(t.state.selection) && t.dispatch(t.state.tr.setSelection(g));
                    }
                    return;
                }
                y = {
                    start: f.from,
                    endA: f.to,
                    endB: f.to
                };
            }
            t.domChangeCount++, t.state.selection.from < t.state.selection.to && y.start == y.endB && t.state.selection instanceof ve && (y.start > t.state.selection.from && y.start <= t.state.selection.from + 2 ? y.start = t.state.selection.from : y.endA < t.state.selection.to && y.endA >= t.state.selection.to - 2 && (y.endB += t.state.selection.to - y.endA, y.endA = t.state.selection.to)), Pe.ie && Pe.ie_version <= 11 && y.endB == y.start + 1 && y.endA == y.start && y.start > u.from && " \xa0" == u.doc.textBetween(y.start - u.from - 1, y.start - u.from + 1) && (y.start--, y.endA--, y.endB--);
            var w, b = u.doc.resolveNoCache(y.start - u.from), k = u.doc.resolveNoCache(y.endB - u.from), x = b.sameParent(k) && b.parent.inlineContent;
            if ((Pe.ios && t.lastIOSEnter > Date.now() - 225 && (!x || o.some(function(t) {
                return "DIV" == t.nodeName || "P" == t.nodeName;
            })) || !x && b.pos < u.doc.content.size && (w = ue.findFrom(u.doc.resolve(b.pos + 1), 1, !0)) && w.head == k.pos) && t.someProp("handleKeyDown", function(e) {
                return e(t, Ye(13, "Enter"));
            })) t.lastIOSEnter = 0;
            else if (t.state.selection.anchor > y.start && function(t, e, n, r, o) {
                if (!r.parent.isTextblock || n - e <= o.pos - r.pos || vr(r, !0, !1) < o.pos) return !1;
                var i = t.resolve(e);
                if (i.parentOffset < i.parent.content.size || !i.parent.isTextblock) return !1;
                var s = t.resolve(vr(i, !0, !0));
                if (!s.parent.isTextblock || s.pos > n || vr(s, !0, !1) < n) return !1;
                return r.parent.content.cut(r.parentOffset).eq(s.parent.content);
            }(d, y.start, y.endA, b, k) && t.someProp("handleKeyDown", function(e) {
                return e(t, Ye(8, "Backspace"));
            })) Pe.android && Pe.chrome && t.domObserver.suppressSelectionUpdates();
            else {
                Pe.android && !x && b.start() != k.start() && 0 == k.parentOffset && b.depth == k.depth && u.sel && u.sel.anchor == u.sel.head && u.sel.head == y.endA && (y.endB -= 2, k = u.doc.resolveNoCache(y.endB - u.from), setTimeout(function() {
                    t.someProp("handleKeyDown", function(e) {
                        return e(t, Ye(13, "Enter"));
                    });
                }, 20));
                var S, O, M, C, N = y.start, T = y.endA;
                if (x) {
                    if (b.pos == k.pos) Pe.ie && Pe.ie_version <= 11 && 0 == b.parentOffset && (t.domObserver.suppressSelectionUpdates(), setTimeout(function() {
                        return Wn(t);
                    }, 20)), S = t.state.tr.delete(N, T), O = d.resolve(y.start).marksAcross(d.resolve(y.endA));
                    else if (y.endA == y.endB && (C = d.resolve(y.start)) && (M = function(t, e) {
                        for(var n, r, o, i = t.firstChild.marks, s = e.firstChild.marks, a = i, c = s, h = 0; h < s.length; h++)a = s[h].removeFromSet(a);
                        for(var p = 0; p < i.length; p++)c = i[p].removeFromSet(c);
                        if (1 == a.length && 0 == c.length) r = a[0], n = "add", o = function(t) {
                            return t.mark(r.addToSet(t.marks));
                        };
                        else {
                            if (0 != a.length || 1 != c.length) return null;
                            r = c[0], n = "remove", o = function(t) {
                                return t.mark(r.removeFromSet(t.marks));
                            };
                        }
                        for(var l = [], f = 0; f < e.childCount; f++)l.push(o(e.child(f)));
                        if (v.from(l).eq(t)) return {
                            mark: r,
                            type: n
                        };
                    }(b.parent.content.cut(b.parentOffset, k.parentOffset), C.parent.content.cut(C.parentOffset, y.endA - C.start())))) S = t.state.tr, "add" == M.type ? S.addMark(N, T, M.mark) : S.removeMark(N, T, M.mark);
                    else if (b.parent.child(b.index()).isText && b.index() == k.index() - (k.textOffset ? 0 : 1)) {
                        var D = b.parent.textBetween(b.parentOffset, k.parentOffset);
                        if (t.someProp("handleTextInput", function(e) {
                            return e(t, N, T, D);
                        })) return;
                        S = t.state.tr.insertText(D, N, T);
                    }
                }
                if (S || (S = t.state.tr.replace(N, T, u.doc.slice(y.start - u.from, y.endB - u.from))), u.sel) {
                    var E = mr(t, S.doc, u.sel);
                    E && !(Pe.chrome && Pe.android && t.composing && E.empty && (E.head == N || E.head == S.mapping.map(T) - 1) || Pe.ie && E.empty && E.head == N) && S.setSelection(E);
                }
                O && S.ensureMarks(O), t.dispatch(S.scrollIntoView());
            }
        }
    }
    function mr(t, e, n) {
        return Math.max(n.anchor, n.head) > e.content.size ? null : Qn(t, e.resolve(n.anchor), e.resolve(n.head));
    }
    function vr(t, e, n) {
        for(var r = t.depth, o = e ? t.end() : t.pos; r > 0 && (e || t.indexAfter(r) == t.node(r).childCount);)r--, o++, e = !1;
        if (n) for(var i = t.node(r).maybeChild(t.indexAfter(r)); i && !i.isLeaf;)i = i.firstChild, o++;
        return o;
    }
    function yr(t, e) {
        for(var n = [], r = e.content, o = e.openStart, i = e.openEnd; o > 1 && i > 1 && 1 == r.childCount && 1 == r.firstChild.childCount;){
            o--, i--;
            var s = r.firstChild;
            n.push(s.type.name, s.type.hasRequiredAttrs() ? s.attrs : null), r = s.content;
        }
        var a = t.someProp("clipboardSerializer") || Nt.fromSchema(t.state.schema), c = Mr(), h = c.createElement("div");
        h.appendChild(a.serializeFragment(r, {
            document: c
        }));
        for(var p, l = h.firstChild; l && 1 == l.nodeType && (p = Sr[l.nodeName.toLowerCase()]);){
            for(var f = p.length - 1; f >= 0; f--){
                for(var u = c.createElement(p[f]); h.firstChild;)u.appendChild(h.firstChild);
                h.appendChild(u);
            }
            l = h.firstChild;
        }
        return l && 1 == l.nodeType && l.setAttribute("data-pm-slice", o + " " + i + " " + JSON.stringify(n)), {
            dom: h,
            text: t.someProp("clipboardTextSerializer", function(t) {
                return t(e);
            }) || e.content.textBetween(0, e.content.size, "\n\n")
        };
    }
    function gr(t, e, n, r, o) {
        var i, s, a = o.parent.type.spec.code;
        if (!n && !e) return null;
        var c = e && (r || a || !n);
        if (c) {
            if (t.someProp("transformPastedText", function(t) {
                e = t(e, a || r);
            }), a) return new S(v.from(t.state.schema.text(e)), 0, 0);
            var h = t.someProp("clipboardTextParser", function(t) {
                return t(e, o, r);
            });
            h ? s = h : (i = document.createElement("div"), e.trim().split(/(?:\r\n?|\n)+/).forEach(function(t) {
                i.appendChild(document.createElement("p")).textContent = t;
            }));
        } else t.someProp("transformPastedHTML", function(t) {
            n = t(n);
        }), i = function(t) {
            var e = /(\s*<meta [^>]*>)*/.exec(t);
            e && (t = t.slice(e[0].length));
            var n, r = Mr().createElement("div"), o = /(?:<meta [^>]*>)*<([a-z][^>\s]+)/i.exec(t), i = 0;
            (n = o && Sr[o[1].toLowerCase()]) && (t = n.map(function(t) {
                return "<" + t + ">";
            }).join("") + t + n.map(function(t) {
                return "</" + t + ">";
            }).reverse().join(""), i = n.length);
            r.innerHTML = t;
            for(var s = 0; s < i; s++)r = r.firstChild;
            return r;
        }(n);
        var p = i && i.querySelector("[data-pm-slice]"), l = p && /^(\d+) (\d+) (.*)/.exec(p.getAttribute("data-pm-slice"));
        if (!s) {
            var f = t.someProp("clipboardParser") || t.someProp("domParser") || mt.fromSchema(t.state.schema);
            s = f.parseSlice(i, {
                preserveWhitespace: !(!c && !l),
                context: o
            });
        }
        return s = l ? function(t, e) {
            if (!t.size) return t;
            var n, r = t.content.firstChild.type.schema;
            try {
                n = JSON.parse(e);
            } catch (e) {
                return t;
            }
            for(var o = t.content, i = t.openStart, s = t.openEnd, a = n.length - 2; a >= 0; a -= 2){
                var c = r.nodes[n[a]];
                if (!c || c.hasRequiredAttrs()) break;
                o = v.from(c.create(n[a + 1], o)), i++, s++;
            }
            return new S(o, i, s);
        }(function(t, e, n) {
            e < t.openStart && (t = new S(xr(t.content, -1, e, t.openStart, 0, t.openEnd), e, t.openEnd));
            n < t.openEnd && (t = new S(xr(t.content, 1, n, t.openEnd, 0, 0), t.openStart, n));
            return t;
        }(s, +l[1], +l[2]), l[3]) : S.maxOpen(function(t, e) {
            if (t.childCount < 2) return t;
            for(var n = function(n) {
                var r = e.node(n).contentMatchAt(e.index(n)), o = void 0, i = [];
                if (t.forEach(function(t) {
                    if (i) {
                        var e, n = r.findWrapping(t.type);
                        if (!n) return i = null;
                        if (e = i.length && o.length && br(n, o, t, i[i.length - 1], 0)) i[i.length - 1] = e;
                        else {
                            i.length && (i[i.length - 1] = kr(i[i.length - 1], o.length));
                            var s = wr(t, n);
                            i.push(s), r = r.matchType(s.type, s.attrs), o = n;
                        }
                    }
                }), i) return {
                    v: v.from(i)
                };
            }, r = e.depth; r >= 0; r--){
                var o = n(r);
                if (o) return o.v;
            }
            return t;
        }(s.content, o), !1), t.someProp("transformPasted", function(t) {
            s = t(s);
        }), s;
    }
    function wr(t, e, n) {
        void 0 === n && (n = 0);
        for(var r = e.length - 1; r >= n; r--)t = e[r].create(null, v.from(t));
        return t;
    }
    function br(t, e, n, r, o) {
        if (o < t.length && o < e.length && t[o] == e[o]) {
            var i = br(t, e, n, r.lastChild, o + 1);
            if (i) return r.copy(r.content.replaceChild(r.childCount - 1, i));
            if (r.contentMatchAt(r.childCount).matchType(o == t.length - 1 ? n.type : t[o + 1])) return r.copy(r.content.append(v.from(wr(n, t, o + 1))));
        }
    }
    function kr(t, e) {
        if (0 == e) return t;
        var n = t.content.replaceChild(t.childCount - 1, kr(t.lastChild, e - 1)), r = t.contentMatchAt(t.childCount).fillBefore(v.empty, !0);
        return t.copy(n.append(r));
    }
    function xr(t, e, n, r, o, i) {
        var s = e < 0 ? t.firstChild : t.lastChild, a = s.content;
        return o < r - 1 && (a = xr(a, e, n, r, o + 1, i)), o >= n && (a = e < 0 ? s.contentMatchAt(0).fillBefore(a, t.childCount > 1 || i <= o).append(a) : a.append(s.contentMatchAt(s.childCount).fillBefore(v.empty, !0))), t.replaceChild(e < 0 ? 0 : t.childCount - 1, s.copy(a));
    }
    var Sr = {
        thead: [
            "table"
        ],
        tbody: [
            "table"
        ],
        tfoot: [
            "table"
        ],
        caption: [
            "table"
        ],
        colgroup: [
            "table"
        ],
        col: [
            "table",
            "colgroup"
        ],
        tr: [
            "table",
            "tbody"
        ],
        td: [
            "table",
            "tbody",
            "tr"
        ],
        th: [
            "table",
            "tbody",
            "tr"
        ]
    }, Or = null;
    function Mr() {
        return Or || (Or = document.implementation.createHTMLDocument("title"));
    }
    var Cr = {
        childList: !0,
        characterData: !0,
        characterDataOldValue: !0,
        attributes: !0,
        attributeOldValue: !0,
        subtree: !0
    }, Nr = Pe.ie && Pe.ie_version <= 11, Tr = function() {
        this.anchorNode = this.anchorOffset = this.focusNode = this.focusOffset = null;
    };
    Tr.prototype.set = function(t) {
        this.anchorNode = t.anchorNode, this.anchorOffset = t.anchorOffset, this.focusNode = t.focusNode, this.focusOffset = t.focusOffset;
    }, Tr.prototype.eq = function(t) {
        return t.anchorNode == this.anchorNode && t.anchorOffset == this.anchorOffset && t.focusNode == this.focusNode && t.focusOffset == this.focusOffset;
    };
    var Dr = function(t, e) {
        var n = this;
        this.view = t, this.handleDOMChange = e, this.queue = [], this.flushingSoon = -1, this.observer = window.MutationObserver && new window.MutationObserver(function(t) {
            for(var e = 0; e < t.length; e++)n.queue.push(t[e]);
            Pe.ie && Pe.ie_version <= 11 && t.some(function(t) {
                return "childList" == t.type && t.removedNodes.length || "characterData" == t.type && t.oldValue.length > t.target.nodeValue.length;
            }) ? n.flushSoon() : n.flush();
        }), this.currentSelection = new Tr, Nr && (this.onCharData = function(t) {
            n.queue.push({
                target: t.target,
                type: "characterData",
                oldValue: t.prevValue
            }), n.flushSoon();
        }), this.onSelectionChange = this.onSelectionChange.bind(this), this.suppressingSelectionUpdates = !1;
    };
    Dr.prototype.flushSoon = function() {
        var t = this;
        this.flushingSoon < 0 && (this.flushingSoon = window.setTimeout(function() {
            t.flushingSoon = -1, t.flush();
        }, 20));
    }, Dr.prototype.forceFlush = function() {
        this.flushingSoon > -1 && (window.clearTimeout(this.flushingSoon), this.flushingSoon = -1, this.flush());
    }, Dr.prototype.start = function() {
        this.observer && this.observer.observe(this.view.dom, Cr), Nr && this.view.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.connectSelection();
    }, Dr.prototype.stop = function() {
        var t = this;
        if (this.observer) {
            var e = this.observer.takeRecords();
            if (e.length) {
                for(var n = 0; n < e.length; n++)this.queue.push(e[n]);
                window.setTimeout(function() {
                    return t.flush();
                }, 20);
            }
            this.observer.disconnect();
        }
        Nr && this.view.dom.removeEventListener("DOMCharacterDataModified", this.onCharData), this.disconnectSelection();
    }, Dr.prototype.connectSelection = function() {
        this.view.dom.ownerDocument.addEventListener("selectionchange", this.onSelectionChange);
    }, Dr.prototype.disconnectSelection = function() {
        this.view.dom.ownerDocument.removeEventListener("selectionchange", this.onSelectionChange);
    }, Dr.prototype.suppressSelectionUpdates = function() {
        var t = this;
        this.suppressingSelectionUpdates = !0, setTimeout(function() {
            return t.suppressingSelectionUpdates = !1;
        }, 50);
    }, Dr.prototype.onSelectionChange = function() {
        if ((!(t = this.view).editable || t.root.activeElement == t.dom) && Zn(t)) {
            var t;
            if (this.suppressingSelectionUpdates) return Wn(this.view);
            if (Pe.ie && Pe.ie_version <= 11 && !this.view.state.selection.empty) {
                var e = this.view.root.getSelection();
                if (e.focusNode && We(e.focusNode, e.focusOffset, e.anchorNode, e.anchorOffset)) return this.flushSoon();
            }
            this.flush();
        }
    }, Dr.prototype.setCurSelection = function() {
        this.currentSelection.set(this.view.root.getSelection());
    }, Dr.prototype.ignoreSelectionChange = function(t) {
        if (0 == t.rangeCount) return !0;
        var e = t.getRangeAt(0).commonAncestorContainer, n = this.view.docView.nearestDesc(e);
        return n && n.ignoreMutation({
            type: "selection",
            target: 3 == e.nodeType ? e.parentNode : e
        }) ? (this.setCurSelection(), !0) : void 0;
    }, Dr.prototype.flush = function() {
        if (this.view.docView && !(this.flushingSoon > -1)) {
            var t = this.observer ? this.observer.takeRecords() : [];
            this.queue.length && (t = this.queue.concat(t), this.queue.length = 0);
            var e = this.view.root.getSelection(), n = !this.suppressingSelectionUpdates && !this.currentSelection.eq(e) && Zn(this.view) && !this.ignoreSelectionChange(e), r = -1, o = -1, i = !1, s = [];
            if (this.view.editable) for(var a = 0; a < t.length; a++){
                var c = this.registerMutation(t[a], s);
                c && (r = r < 0 ? c.from : Math.min(c.from, r), o = o < 0 ? c.to : Math.max(c.to, o), c.typeOver && (i = !0));
            }
            if (Pe.gecko && s.length > 1) {
                var h = s.filter(function(t) {
                    return "BR" == t.nodeName;
                });
                if (2 == h.length) {
                    var p = h[0], l = h[1];
                    p.parentNode && p.parentNode.parentNode == l.parentNode ? l.remove() : p.remove();
                }
            }
            (r > -1 || n) && (r > -1 && (this.view.docView.markDirty(r, o), function(t) {
                if (Er) return;
                Er = !0, "normal" == getComputedStyle(t.dom).whiteSpace && console.warn("ProseMirror expects the CSS white-space property to be set, preferably to 'pre-wrap'. It is recommended to load style/prosemirror.css from the prosemirror-view package.");
            }(this.view)), this.handleDOMChange(r, o, i, s), this.view.docView.dirty ? this.view.updateState(this.view.state) : this.currentSelection.eq(e) || Wn(this.view));
        }
    }, Dr.prototype.registerMutation = function(t, e) {
        if (e.indexOf(t.target) > -1) return null;
        var n = this.view.docView.nearestDesc(t.target);
        if ("attributes" == t.type && (n == this.view.docView || "contenteditable" == t.attributeName || "style" == t.attributeName && !t.oldValue && !t.target.getAttribute("style"))) return null;
        if (!n || n.ignoreMutation(t)) return null;
        if ("childList" == t.type) {
            var r = t.previousSibling, o = t.nextSibling;
            if (Pe.ie && Pe.ie_version <= 11 && t.addedNodes.length) for(var i = 0; i < t.addedNodes.length; i++){
                var s = t.addedNodes[i], a = s.previousSibling, c = s.nextSibling;
                (!a || Array.prototype.indexOf.call(t.addedNodes, a) < 0) && (r = a), (!c || Array.prototype.indexOf.call(t.addedNodes, c) < 0) && (o = c);
            }
            for(var h = r && r.parentNode == t.target ? je(r) + 1 : 0, p = n.localPosFromDOM(t.target, h, -1), l = o && o.parentNode == t.target ? je(o) : t.target.childNodes.length, f = 0; f < t.addedNodes.length; f++)e.push(t.addedNodes[f]);
            return {
                from: p,
                to: n.localPosFromDOM(t.target, l, 1)
            };
        }
        return "attributes" == t.type ? {
            from: n.posAtStart - n.border,
            to: n.posAtEnd + n.border
        } : {
            from: n.posAtStart,
            to: n.posAtEnd,
            typeOver: t.target.nodeValue == t.oldValue
        };
    };
    var Er = !1;
    var Ar = {}, Rr = {};
    function Ir(t, e) {
        t.lastSelectionOrigin = e, t.lastSelectionTime = Date.now();
    }
    function zr(t) {
        t.someProp("handleDOMEvents", function(e) {
            for(var n in e)t.eventHandlers[n] || t.dom.addEventListener(n, t.eventHandlers[n] = function(e) {
                return Pr(t, e);
            });
        });
    }
    function Pr(t, e) {
        return t.someProp("handleDOMEvents", function(n) {
            var r = n[e.type];
            return !!r && (r(t, e) || e.defaultPrevented);
        });
    }
    function Vr(t) {
        return {
            left: t.clientX,
            top: t.clientY
        };
    }
    function Br(t, e, n, r, o) {
        if (-1 == r) return !1;
        for(var i = t.state.doc.resolve(r), s = function(r) {
            if (t.someProp(e, function(e) {
                return r > i.depth ? e(t, n, i.nodeAfter, i.before(r), o, !0) : e(t, n, i.node(r), i.before(r), o, !1);
            })) return {
                v: !0
            };
        }, a = i.depth + 1; a > 0; a--){
            var c = s(a);
            if (c) return c.v;
        }
        return !1;
    }
    function $r(t, e, n) {
        t.focused || t.focus();
        var r = t.state.tr.setSelection(e);
        "pointer" == n && r.setMeta("pointer", !0), t.dispatch(r);
    }
    function Fr(t, e, n, r, o) {
        return Br(t, "handleClickOn", e, n, r) || t.someProp("handleClick", function(n) {
            return n(t, e, r);
        }) || (o ? function(t, e) {
            if (-1 == e) return !1;
            var n, r, o = t.state.selection;
            o instanceof ge && (n = o.node);
            for(var i = t.state.doc.resolve(e), s = i.depth + 1; s > 0; s--){
                var a = s > i.depth ? i.nodeAfter : i.node(s);
                if (ge.isSelectable(a)) {
                    r = n && o.$from.depth > 0 && s >= o.$from.depth && i.before(o.$from.depth + 1) == o.$from.pos ? i.before(o.$from.depth) : i.before(s);
                    break;
                }
            }
            return null != r && ($r(t, ge.create(t.state.doc, r), "pointer"), !0);
        }(t, n) : function(t, e) {
            if (-1 == e) return !1;
            var n = t.state.doc.resolve(e), r = n.nodeAfter;
            return !!(r && r.isAtom && ge.isSelectable(r)) && ($r(t, new ge(n), "pointer"), !0);
        }(t, n));
    }
    function _r(t, e, n, r) {
        return Br(t, "handleDoubleClickOn", e, n, r) || t.someProp("handleDoubleClick", function(n) {
            return n(t, e, r);
        });
    }
    function jr(t, e, n, r) {
        return Br(t, "handleTripleClickOn", e, n, r) || t.someProp("handleTripleClick", function(n) {
            return n(t, e, r);
        }) || function(t, e) {
            var n = t.state.doc;
            if (-1 == e) return !!n.inlineContent && ($r(t, ve.create(n, 0, n.content.size), "pointer"), !0);
            for(var r = n.resolve(e), o = r.depth + 1; o > 0; o--){
                var i = o > r.depth ? r.nodeAfter : r.node(o), s = r.before(o);
                if (i.inlineContent) $r(t, ve.create(n, s + 1, s + 1 + i.content.size), "pointer");
                else {
                    if (!ge.isSelectable(i)) continue;
                    $r(t, ge.create(n, s), "pointer");
                }
                return !0;
            }
        }(t, n);
    }
    function Lr(t) {
        return Gr(t);
    }
    Rr.keydown = function(t, e) {
        if (t.shiftKey = 16 == e.keyCode || e.shiftKey, !Wr(t, e)) {
            if (t.domObserver.forceFlush(), t.lastKeyCode = e.keyCode, t.lastKeyCodeTime = Date.now(), !Pe.ios || 13 != e.keyCode || e.ctrlKey || e.altKey || e.metaKey) t.someProp("handleKeyDown", function(n) {
                return n(t, e);
            }) || fr(t, e) ? e.preventDefault() : Ir(t, "key");
            else {
                var n = Date.now();
                t.lastIOSEnter = n, t.lastIOSEnterFallbackTimeout = setTimeout(function() {
                    t.lastIOSEnter == n && (t.someProp("handleKeyDown", function(e) {
                        return e(t, Ye(13, "Enter"));
                    }), t.lastIOSEnter = 0);
                }, 200);
            }
        }
    }, Rr.keyup = function(t, e) {
        16 == e.keyCode && (t.shiftKey = !1);
    }, Rr.keypress = function(t, e) {
        if (!(Wr(t, e) || !e.charCode || e.ctrlKey && !e.altKey || Pe.mac && e.metaKey)) {
            if (t.someProp("handleKeyPress", function(n) {
                return n(t, e);
            })) e.preventDefault();
            else {
                var n = t.state.selection;
                if (!(n instanceof ve && n.$from.sameParent(n.$to))) {
                    var r = String.fromCharCode(e.charCode);
                    t.someProp("handleTextInput", function(e) {
                        return e(t, n.$from.pos, n.$to.pos, r);
                    }) || t.dispatch(t.state.tr.insertText(r).scrollIntoView()), e.preventDefault();
                }
            }
        }
    };
    var Jr = Pe.mac ? "metaKey" : "ctrlKey";
    Ar.mousedown = function(t, e) {
        t.shiftKey = e.shiftKey;
        var n = Lr(t), r = Date.now(), o = "singleClick";
        r - t.lastClick.time < 500 && function(t, e) {
            var n = e.x - t.clientX, r = e.y - t.clientY;
            return n * n + r * r < 100;
        }(e, t.lastClick) && !e[Jr] && ("singleClick" == t.lastClick.type ? o = "doubleClick" : "doubleClick" == t.lastClick.type && (o = "tripleClick")), t.lastClick = {
            time: r,
            x: e.clientX,
            y: e.clientY,
            type: o
        };
        var i = t.posAtCoords(Vr(e));
        i && ("singleClick" == o ? t.mouseDown = new qr(t, i, e, n) : ("doubleClick" == o ? _r : jr)(t, i.pos, i.inside, e) ? e.preventDefault() : Ir(t, "pointer"));
    };
    var qr = function(t, e, n, r) {
        var o, i, s = this;
        if (this.view = t, this.startDoc = t.state.doc, this.pos = e, this.event = n, this.flushed = r, this.selectNode = n[Jr], this.allowDefault = n.shiftKey, e.inside > -1) o = t.state.doc.nodeAt(e.inside), i = e.inside;
        else {
            var a = t.state.doc.resolve(e.pos);
            o = a.parent, i = a.depth ? a.before() : 0;
        }
        this.mightDrag = null;
        var c = r ? null : n.target, h = c ? t.docView.nearestDesc(c, !0) : null;
        this.target = h ? h.dom : null, (o.type.spec.draggable && !1 !== o.type.spec.selectable || t.state.selection instanceof ge && i == t.state.selection.from) && (this.mightDrag = {
            node: o,
            pos: i,
            addAttr: this.target && !this.target.draggable,
            setUneditable: this.target && Pe.gecko && !this.target.hasAttribute("contentEditable")
        }), this.target && this.mightDrag && (this.mightDrag.addAttr || this.mightDrag.setUneditable) && (this.view.domObserver.stop(), this.mightDrag.addAttr && (this.target.draggable = !0), this.mightDrag.setUneditable && setTimeout(function() {
            return s.target.setAttribute("contentEditable", "false");
        }, 20), this.view.domObserver.start()), t.root.addEventListener("mouseup", this.up = this.up.bind(this)), t.root.addEventListener("mousemove", this.move = this.move.bind(this)), Ir(t, "pointer");
    };
    function Wr(t, e) {
        return !!t.composing || !!(Pe.safari && Math.abs(e.timeStamp - t.compositionEndedAt) < 500) && (t.compositionEndedAt = -200000000, !0);
    }
    qr.prototype.done = function() {
        this.view.root.removeEventListener("mouseup", this.up), this.view.root.removeEventListener("mousemove", this.move), this.mightDrag && this.target && (this.view.domObserver.stop(), this.mightDrag.addAttr && this.target.removeAttribute("draggable"), this.mightDrag.setUneditable && this.target.removeAttribute("contentEditable"), this.view.domObserver.start()), this.view.mouseDown = null;
    }, qr.prototype.up = function(t) {
        if (this.done(), this.view.dom.contains(3 == t.target.nodeType ? t.target.parentNode : t.target)) {
            var e = this.pos;
            this.view.state.doc != this.startDoc && (e = this.view.posAtCoords(Vr(t))), this.allowDefault || !e ? Ir(this.view, "pointer") : Fr(this.view, e.pos, e.inside, t, this.selectNode) ? t.preventDefault() : this.flushed || Pe.safari && this.mightDrag && !this.mightDrag.node.isAtom || Pe.chrome && !(this.view.state.selection instanceof ve) && (e.pos == this.view.state.selection.from || e.pos == this.view.state.selection.to) ? ($r(this.view, ue.near(this.view.state.doc.resolve(e.pos)), "pointer"), t.preventDefault()) : Ir(this.view, "pointer");
        }
    }, qr.prototype.move = function(t) {
        !this.allowDefault && (Math.abs(this.event.x - t.clientX) > 4 || Math.abs(this.event.y - t.clientY) > 4) && (this.allowDefault = !0), Ir(this.view, "pointer");
    }, Ar.touchdown = function(t) {
        Lr(t), Ir(t, "pointer");
    }, Ar.contextmenu = function(t) {
        return Lr(t);
    };
    var Kr = Pe.android ? 5e3 : -1;
    function Hr(t, e) {
        clearTimeout(t.composingTimeout), e > -1 && (t.composingTimeout = setTimeout(function() {
            return Gr(t);
        }, e));
    }
    function Ur(t) {
        for(t.composing = !1; t.compositionNodes.length > 0;)t.compositionNodes.pop().markParentsDirty();
    }
    function Gr(t, e) {
        if (t.domObserver.forceFlush(), Ur(t), e || t.docView.dirty) {
            var n = qn(t);
            return n && !n.eq(t.state.selection) ? t.dispatch(t.state.tr.setSelection(n)) : t.updateState(t.state), !0;
        }
        return !1;
    }
    Rr.compositionstart = Rr.compositionupdate = function(t) {
        if (!t.composing) {
            t.domObserver.flush();
            var e = t.state, n = e.selection.$from;
            if (e.selection.empty && (e.storedMarks || !n.textOffset && n.parentOffset && n.nodeBefore.marks.some(function(t) {
                return !1 === t.type.spec.inclusive;
            }))) t.markCursor = t.state.storedMarks || n.marks(), Gr(t, !0), t.markCursor = null;
            else if (Gr(t), Pe.gecko && e.selection.empty && n.parentOffset && !n.textOffset && n.nodeBefore.marks.length) for(var r = t.root.getSelection(), o = r.focusNode, i = r.focusOffset; o && 1 == o.nodeType && 0 != i;){
                var s = i < 0 ? o.lastChild : o.childNodes[i - 1];
                if (!s) break;
                if (3 == s.nodeType) {
                    r.collapse(s, s.nodeValue.length);
                    break;
                }
                o = s, i = -1;
            }
            t.composing = !0;
        }
        Hr(t, Kr);
    }, Rr.compositionend = function(t, e) {
        t.composing && (t.composing = !1, t.compositionEndedAt = e.timeStamp, Hr(t, 20));
    };
    var Xr = Pe.ie && Pe.ie_version < 15 || Pe.ios && Pe.webkit_version < 604;
    function Yr(t, e, n, r) {
        var o = gr(t, e, n, t.shiftKey, t.state.selection.$from);
        if (!t.someProp("handlePaste", function(e) {
            return e(t, r, o || S.empty);
        }) && o) {
            var i = function(t) {
                return 0 == t.openStart && 0 == t.openEnd && 1 == t.content.childCount ? t.content.firstChild : null;
            }(o), s = i ? t.state.tr.replaceSelectionWith(i, t.shiftKey) : t.state.tr.replaceSelection(o);
            t.dispatch(s.scrollIntoView().setMeta("paste", !0).setMeta("uiEvent", "paste"));
        }
    }
    Ar.copy = Rr.cut = function(t, e) {
        var n = t.state.selection, r = "cut" == e.type;
        if (!n.empty) {
            var o = Xr ? null : e.clipboardData, i = yr(t, n.content()), s = i.dom, a = i.text;
            o ? (e.preventDefault(), o.clearData(), o.setData("text/html", s.innerHTML), o.setData("text/plain", a)) : function(t, e) {
                if (t.dom.parentNode) {
                    var n = t.dom.parentNode.appendChild(document.createElement("div"));
                    n.appendChild(e), n.style.cssText = "position: fixed; left: -10000px; top: 10px";
                    var r = getSelection(), o = document.createRange();
                    o.selectNodeContents(e), t.dom.blur(), r.removeAllRanges(), r.addRange(o), setTimeout(function() {
                        n.parentNode && n.parentNode.removeChild(n), t.focus();
                    }, 50);
                }
            }(t, s), r && t.dispatch(t.state.tr.deleteSelection().scrollIntoView().setMeta("uiEvent", "cut"));
        }
    }, Rr.paste = function(t, e) {
        var n = Xr ? null : e.clipboardData, r = n && n.getData("text/html"), o = n && n.getData("text/plain");
        n && (r || o || n.files.length) ? (Yr(t, o, r, e), e.preventDefault()) : function(t, e) {
            if (t.dom.parentNode) {
                var n = t.shiftKey || t.state.selection.$from.parent.type.spec.code, r = t.dom.parentNode.appendChild(document.createElement(n ? "textarea" : "div"));
                n || (r.contentEditable = "true"), r.style.cssText = "position: fixed; left: -10000px; top: 10px", r.focus(), setTimeout(function() {
                    t.focus(), r.parentNode && r.parentNode.removeChild(r), n ? Yr(t, r.value, null, e) : Yr(t, r.textContent, r.innerHTML, e);
                }, 50);
            }
        }(t, e);
    };
    var Qr = function(t, e) {
        this.slice = t, this.move = e;
    }, Zr = Pe.mac ? "altKey" : "ctrlKey";
    for(var to in Ar.dragstart = function(t, e) {
        var n = t.mouseDown;
        if (n && n.done(), e.dataTransfer) {
            var r = t.state.selection, o = r.empty ? null : t.posAtCoords(Vr(e));
            if (o && o.pos >= r.from && o.pos <= (r instanceof ge ? r.to - 1 : r.to)) ;
            else if (n && n.mightDrag) t.dispatch(t.state.tr.setSelection(ge.create(t.state.doc, n.mightDrag.pos)));
            else if (e.target && 1 == e.target.nodeType) {
                var i = t.docView.nearestDesc(e.target, !0);
                if (!i || !i.node.type.spec.draggable || i == t.docView) return;
                t.dispatch(t.state.tr.setSelection(ge.create(t.state.doc, i.posBefore)));
            }
            var s = t.state.selection.content(), a = yr(t, s), c = a.dom, h = a.text;
            e.dataTransfer.clearData(), e.dataTransfer.setData(Xr ? "Text" : "text/html", c.innerHTML), Xr || e.dataTransfer.setData("text/plain", h), t.dragging = new Qr(s, !e[Zr]);
        }
    }, Ar.dragend = function(t) {
        var e = t.dragging;
        window.setTimeout(function() {
            t.dragging == e && (t.dragging = null);
        }, 50);
    }, Rr.dragover = Rr.dragenter = function(t, e) {
        return e.preventDefault();
    }, Rr.drop = function(t, e) {
        var n = t.dragging;
        if (t.dragging = null, e.dataTransfer) {
            var r = t.posAtCoords(Vr(e));
            if (r) {
                var o = t.state.doc.resolve(r.pos);
                if (o) {
                    var i = n && n.slice || gr(t, e.dataTransfer.getData(Xr ? "Text" : "text/plain"), Xr ? null : e.dataTransfer.getData("text/html"), !1, o), s = n && !e[Zr];
                    if (t.someProp("handleDrop", function(n) {
                        return n(t, e, i || S.empty, s);
                    })) e.preventDefault();
                    else if (i) {
                        e.preventDefault();
                        var a = i ? function(t, e, n) {
                            var r = t.resolve(e);
                            if (!n.content.size) return e;
                            for(var o = n.content, i = 0; i < n.openStart; i++)o = o.firstChild.content;
                            for(var s = 1; s <= (0 == n.openStart && n.size ? 2 : 1); s++)for(var a = r.depth; a >= 0; a--){
                                var c = a == r.depth ? 0 : r.pos <= (r.start(a + 1) + r.end(a + 1)) / 2 ? -1 : 1, h = r.index(a) + (c > 0 ? 1 : 0);
                                if (1 == s ? r.node(a).canReplace(h, h, o) : r.node(a).contentMatchAt(h).findWrapping(o.firstChild.type)) return 0 == c ? r.pos : c < 0 ? r.before(a + 1) : r.after(a + 1);
                            }
                            return null;
                        }(t.state.doc, o.pos, i) : o.pos;
                        null == a && (a = o.pos);
                        var c = t.state.tr;
                        s && c.deleteSelection();
                        var h = c.mapping.map(a), p = 0 == i.openStart && 0 == i.openEnd && 1 == i.content.childCount, l = c.doc;
                        if (p ? c.replaceRangeWith(h, h, i.content.firstChild) : c.replaceRange(h, h, i), !c.doc.eq(l)) {
                            var f = c.doc.resolve(h);
                            if (p && ge.isSelectable(i.content.firstChild) && f.nodeAfter && f.nodeAfter.sameMarkup(i.content.firstChild)) c.setSelection(new ge(f));
                            else {
                                var u = c.mapping.map(a);
                                c.mapping.maps[c.mapping.maps.length - 1].forEach(function(t, e, n, r) {
                                    return u = r;
                                }), c.setSelection(Qn(t, f, c.doc.resolve(u)));
                            }
                            t.focus(), t.dispatch(c.setMeta("uiEvent", "drop"));
                        }
                    }
                }
            }
        }
    }, Ar.focus = function(t) {
        t.focused || (t.domObserver.stop(), t.dom.classList.add("ProseMirror-focused"), t.domObserver.start(), t.focused = !0, setTimeout(function() {
            t.docView && t.hasFocus() && !t.domObserver.currentSelection.eq(t.root.getSelection()) && Wn(t);
        }, 20));
    }, Ar.blur = function(t) {
        t.focused && (t.domObserver.stop(), t.dom.classList.remove("ProseMirror-focused"), t.domObserver.start(), t.domObserver.currentSelection.set({}), t.focused = !1);
    }, Ar.beforeinput = function(t, e) {
        if (Pe.chrome && Pe.android && "deleteContentBackward" == e.inputType) {
            var n = t.domChangeCount;
            setTimeout(function() {
                if (t.domChangeCount == n && (t.dom.blur(), t.focus(), !t.someProp("handleKeyDown", function(e) {
                    return e(t, Ye(8, "Backspace"));
                }))) {
                    var e = t.state.selection.$cursor;
                    e && e.pos > 0 && t.dispatch(t.state.tr.delete(e.pos - 1, e.pos).scrollIntoView());
                }
            }, 50);
        }
    }, Rr)Ar[to] = Rr[to];
    function eo(t, e) {
        if (t == e) return !0;
        for(var n in t)if (t[n] !== e[n]) return !1;
        for(var r in e)if (!(r in t)) return !1;
        return !0;
    }
    var no = function(t, e) {
        this.spec = e || co, this.side = this.spec.side || 0, this.toDOM = t;
    };
    no.prototype.map = function(t, e, n, r) {
        var o = t.mapResult(e.from + r, this.side < 0 ? -1 : 1), i = o.pos;
        return o.deleted ? null : new io(i - n, i - n, this);
    }, no.prototype.valid = function() {
        return !0;
    }, no.prototype.eq = function(t) {
        return this == t || t instanceof no && (this.spec.key && this.spec.key == t.spec.key || this.toDOM == t.toDOM && eo(this.spec, t.spec));
    };
    var ro = function(t, e) {
        this.spec = e || co, this.attrs = t;
    };
    ro.prototype.map = function(t, e, n, r) {
        var o = t.map(e.from + r, this.spec.inclusiveStart ? -1 : 1) - n, i = t.map(e.to + r, this.spec.inclusiveEnd ? 1 : -1) - n;
        return o >= i ? null : new io(o, i, this);
    }, ro.prototype.valid = function(t, e) {
        return e.from < e.to;
    }, ro.prototype.eq = function(t) {
        return this == t || t instanceof ro && eo(this.attrs, t.attrs) && eo(this.spec, t.spec);
    }, ro.is = function(t) {
        return t.type instanceof ro;
    };
    var oo = function(t, e) {
        this.spec = e || co, this.attrs = t;
    };
    oo.prototype.map = function(t, e, n, r) {
        var o = t.mapResult(e.from + r, 1);
        if (o.deleted) return null;
        var i = t.mapResult(e.to + r, -1);
        return i.deleted || i.pos <= o.pos ? null : new io(o.pos - n, i.pos - n, this);
    }, oo.prototype.valid = function(t, e) {
        var n = t.content.findIndex(e.from), r = n.index, o = n.offset;
        return o == e.from && o + t.child(r).nodeSize == e.to;
    }, oo.prototype.eq = function(t) {
        return this == t || t instanceof oo && eo(this.attrs, t.attrs) && eo(this.spec, t.spec);
    };
    var io = function(t, e, n) {
        this.from = t, this.to = e, this.type = n;
    }, so = {
        spec: {
            configurable: !0
        },
        inline: {
            configurable: !0
        }
    };
    io.prototype.copy = function(t, e) {
        return new io(t, e, this.type);
    }, io.prototype.eq = function(t, e) {
        return void 0 === e && (e = 0), this.type.eq(t.type) && this.from + e == t.from && this.to + e == t.to;
    }, io.prototype.map = function(t, e, n) {
        return this.type.map(t, this, e, n);
    }, io.widget = function(t, e, n) {
        return new io(t, t, new no(e, n));
    }, io.inline = function(t, e, n, r) {
        return new io(t, e, new ro(n, r));
    }, io.node = function(t, e, n, r) {
        return new io(t, e, new oo(n, r));
    }, so.spec.get = function() {
        return this.type.spec;
    }, so.inline.get = function() {
        return this.type instanceof ro;
    }, Object.defineProperties(io.prototype, so);
    var ao = [], co = {}, ho = function(t, e) {
        this.local = t && t.length ? t : ao, this.children = e && e.length ? e : ao;
    };
    ho.create = function(t, e) {
        return e.length ? vo(e, t, 0, co) : po;
    }, ho.prototype.find = function(t, e, n) {
        var r = [];
        return this.findInner(null == t ? 0 : t, null == e ? 1e9 : e, r, 0, n), r;
    }, ho.prototype.findInner = function(t, e, n, r, o) {
        for(var i = 0; i < this.local.length; i++){
            var s = this.local[i];
            s.from <= e && s.to >= t && (!o || o(s.spec)) && n.push(s.copy(s.from + r, s.to + r));
        }
        for(var a = 0; a < this.children.length; a += 3)if (this.children[a] < e && this.children[a + 1] > t) {
            var c = this.children[a] + 1;
            this.children[a + 2].findInner(t - c, e - c, n, r + c, o);
        }
    }, ho.prototype.map = function(t, e, n) {
        return this == po || 0 == t.maps.length ? this : this.mapInner(t, e, 0, 0, n || co);
    }, ho.prototype.mapInner = function(t, e, n, r, o) {
        for(var i, s = 0; s < this.local.length; s++){
            var a = this.local[s].map(t, n, r);
            a && a.type.valid(e, a) ? (i || (i = [])).push(a) : o.onRemove && o.onRemove(this.local[s].spec);
        }
        return this.children.length ? function(t, e, n, r, o, i, s) {
            for(var a = t.slice(), c = function(t, e, n, r) {
                for(var s = 0; s < a.length; s += 3){
                    var c = a[s + 1], h = void 0;
                    -1 == c || t > c + i || (e >= a[s] + i ? a[s + 1] = -1 : n >= o && (h = r - n - (e - t)) && (a[s] += h, a[s + 1] += h));
                }
            }, h = 0; h < n.maps.length; h++)n.maps[h].forEach(c);
            for(var p = !1, l = 0; l < a.length; l += 3)if (-1 == a[l + 1]) {
                var f = n.map(t[l] + i), u = f - o;
                if (u < 0 || u >= r.content.size) {
                    p = !0;
                    continue;
                }
                var d = n.map(t[l + 1] + i, -1) - o, m = r.content.findIndex(u), v = m.index, y = m.offset, g = r.maybeChild(v);
                if (g && y == u && y + g.nodeSize == d) {
                    var w = a[l + 2].mapInner(n, g, f + 1, t[l] + i + 1, s);
                    w != po ? (a[l] = u, a[l + 1] = d, a[l + 2] = w) : (a[l + 1] = -2, p = !0);
                } else p = !0;
            }
            if (p) {
                var b = vo(function(t, e, n, r, o, i, s) {
                    function a(t, e) {
                        for(var i = 0; i < t.local.length; i++){
                            var c = t.local[i].map(r, o, e);
                            c ? n.push(c) : s.onRemove && s.onRemove(t.local[i].spec);
                        }
                        for(var h = 0; h < t.children.length; h += 3)a(t.children[h + 2], t.children[h] + e + 1);
                    }
                    for(var c = 0; c < t.length; c += 3)-1 == t[c + 1] && a(t[c + 2], e[c] + i + 1);
                    return n;
                }(a, t, e || [], n, o, i, s), r, 0, s);
                e = b.local;
                for(var k = 0; k < a.length; k += 3)a[k + 1] < 0 && (a.splice(k, 3), k -= 3);
                for(var x = 0, S = 0; x < b.children.length; x += 3){
                    for(var O = b.children[x]; S < a.length && a[S] < O;)S += 3;
                    a.splice(S, 0, b.children[x], b.children[x + 1], b.children[x + 2]);
                }
            }
            return new ho(e && e.sort(yo), a);
        }(this.children, i, t, e, n, r, o) : i ? new ho(i.sort(yo)) : po;
    }, ho.prototype.add = function(t, e) {
        return e.length ? this == po ? ho.create(t, e) : this.addInner(t, e, 0) : this;
    }, ho.prototype.addInner = function(t, e, n) {
        var r, o = this, i = 0;
        t.forEach(function(t, s) {
            var a, c = s + n;
            if (a = uo(e, t, c)) {
                for(r || (r = o.children.slice()); i < r.length && r[i] < s;)i += 3;
                r[i] == s ? r[i + 2] = r[i + 2].addInner(t, a, c + 1) : r.splice(i, 0, s, s + t.nodeSize, vo(a, t, c + 1, co)), i += 3;
            }
        });
        var s = fo(i ? mo(e) : e, -n);
        return new ho(s.length ? this.local.concat(s).sort(yo) : this.local, r || this.children);
    }, ho.prototype.remove = function(t) {
        return 0 == t.length || this == po ? this : this.removeInner(t, 0);
    }, ho.prototype.removeInner = function(t, e) {
        for(var n = this.children, r = this.local, o = 0; o < n.length; o += 3){
            for(var i = void 0, s = n[o] + e, a = n[o + 1] + e, c = 0, h = void 0; c < t.length; c++)(h = t[c]) && h.from > s && h.to < a && (t[c] = null, (i || (i = [])).push(h));
            if (i) {
                n == this.children && (n = this.children.slice());
                var p = n[o + 2].removeInner(i, s + 1);
                p != po ? n[o + 2] = p : (n.splice(o, 3), o -= 3);
            }
        }
        if (r.length) {
            for(var l = 0, f = void 0; l < t.length; l++)if (f = t[l]) for(var u = 0; u < r.length; u++)r[u].eq(f, e) && (r == this.local && (r = this.local.slice()), r.splice(u--, 1));
        }
        return n == this.children && r == this.local ? this : r.length || n.length ? new ho(r, n) : po;
    }, ho.prototype.forChild = function(t, e) {
        if (this == po) return this;
        if (e.isLeaf) return ho.empty;
        for(var n, r, o = 0; o < this.children.length; o += 3)if (this.children[o] >= t) {
            this.children[o] == t && (n = this.children[o + 2]);
            break;
        }
        for(var i = t + 1, s = i + e.content.size, a = 0; a < this.local.length; a++){
            var c = this.local[a];
            if (c.from < s && c.to > i && c.type instanceof ro) {
                var h = Math.max(i, c.from) - i, p = Math.min(s, c.to) - i;
                h < p && (r || (r = [])).push(c.copy(h, p));
            }
        }
        if (r) {
            var l = new ho(r.sort(yo));
            return n ? new lo([
                l,
                n
            ]) : l;
        }
        return n || po;
    }, ho.prototype.eq = function(t) {
        if (this == t) return !0;
        if (!(t instanceof ho) || this.local.length != t.local.length || this.children.length != t.children.length) return !1;
        for(var e = 0; e < this.local.length; e++)if (!this.local[e].eq(t.local[e])) return !1;
        for(var n = 0; n < this.children.length; n += 3)if (this.children[n] != t.children[n] || this.children[n + 1] != t.children[n + 1] || !this.children[n + 2].eq(t.children[n + 2])) return !1;
        return !0;
    }, ho.prototype.locals = function(t) {
        return go(this.localsInner(t));
    }, ho.prototype.localsInner = function(t) {
        if (this == po) return ao;
        if (t.inlineContent || !this.local.some(ro.is)) return this.local;
        for(var e = [], n = 0; n < this.local.length; n++)this.local[n].type instanceof ro || e.push(this.local[n]);
        return e;
    };
    var po = new ho;
    ho.empty = po, ho.removeOverlap = go;
    var lo = function(t) {
        this.members = t;
    };
    function fo(t, e) {
        if (!e || !t.length) return t;
        for(var n = [], r = 0; r < t.length; r++){
            var o = t[r];
            n.push(new io(o.from + e, o.to + e, o.type));
        }
        return n;
    }
    function uo(t, e, n) {
        if (e.isLeaf) return null;
        for(var r = n + e.nodeSize, o = null, i = 0, s = void 0; i < t.length; i++)(s = t[i]) && s.from > n && s.to < r && ((o || (o = [])).push(s), t[i] = null);
        return o;
    }
    function mo(t) {
        for(var e = [], n = 0; n < t.length; n++)null != t[n] && e.push(t[n]);
        return e;
    }
    function vo(t, e, n, r) {
        var o = [], i = !1;
        e.forEach(function(e, s) {
            var a = uo(t, e, s + n);
            if (a) {
                i = !0;
                var c = vo(a, e, n + s + 1, r);
                c != po && o.push(s, s + e.nodeSize, c);
            }
        });
        for(var s = fo(i ? mo(t) : t, -n).sort(yo), a = 0; a < s.length; a++)s[a].type.valid(e, s[a]) || (r.onRemove && r.onRemove(s[a].spec), s.splice(a--, 1));
        return s.length || o.length ? new ho(s, o) : po;
    }
    function yo(t, e) {
        return t.from - e.from || t.to - e.to;
    }
    function go(t) {
        for(var e = t, n = 0; n < e.length - 1; n++){
            var r = e[n];
            if (r.from != r.to) for(var o = n + 1; o < e.length; o++){
                var i = e[o];
                if (i.from != r.from) {
                    i.from < r.to && (e == t && (e = t.slice()), e[n] = r.copy(r.from, i.from), wo(e, o, r.copy(i.from, r.to)));
                    break;
                }
                i.to != r.to && (e == t && (e = t.slice()), e[o] = i.copy(i.from, r.to), wo(e, o + 1, i.copy(r.to, i.to)));
            }
        }
        return e;
    }
    function wo(t, e, n) {
        for(; e < t.length && yo(n, t[e]) > 0;)e++;
        t.splice(e, 0, n);
    }
    function bo(t) {
        var e = [];
        return t.someProp("decorations", function(n) {
            var r = n(t.state);
            r && r != po && e.push(r);
        }), t.cursorWrapper && e.push(ho.create(t.state.doc, [
            t.cursorWrapper.deco
        ])), lo.from(e);
    }
    lo.prototype.forChild = function(t, e) {
        if (e.isLeaf) return ho.empty;
        for(var n = [], r = 0; r < this.members.length; r++){
            var o = this.members[r].forChild(t, e);
            o != po && (o instanceof lo ? n = n.concat(o.members) : n.push(o));
        }
        return lo.from(n);
    }, lo.prototype.eq = function(t) {
        if (!(t instanceof lo) || t.members.length != this.members.length) return !1;
        for(var e = 0; e < this.members.length; e++)if (!this.members[e].eq(t.members[e])) return !1;
        return !0;
    }, lo.prototype.locals = function(t) {
        for(var e, n = !0, r = 0; r < this.members.length; r++){
            var o = this.members[r].localsInner(t);
            if (o.length) {
                if (e) {
                    n && (e = e.slice(), n = !1);
                    for(var i = 0; i < o.length; i++)e.push(o[i]);
                } else e = o;
            }
        }
        return e ? go(n ? e : e.sort(yo)) : ao;
    }, lo.from = function(t) {
        switch(t.length){
            case 0:
                return po;
            case 1:
                return t[0];
            default:
                return new lo(t);
        }
    };
    var ko = function(t, e) {
        this._props = e, this.state = e.state, this.dispatch = this.dispatch.bind(this), this._root = null, this.focused = !1, this.trackWrites = null, this.dom = t && t.mount || document.createElement("div"), t && (t.appendChild ? t.appendChild(this.dom) : t.apply ? t(this.dom) : t.mount && (this.mounted = !0)), this.editable = Mo(this), this.markCursor = null, this.cursorWrapper = null, Oo(this), this.nodeViews = Co(this), this.docView = Tn(this.state.doc, So(this), bo(this), this.dom, this), this.lastSelectedViewDesc = null, this.dragging = null, function(t) {
            t.shiftKey = !1, t.mouseDown = null, t.lastKeyCode = null, t.lastKeyCodeTime = 0, t.lastClick = {
                time: 0,
                x: 0,
                y: 0,
                type: ""
            }, t.lastSelectionOrigin = null, t.lastSelectionTime = 0, t.lastIOSEnter = 0, t.lastIOSEnterFallbackTimeout = null, t.composing = !1, t.composingTimeout = null, t.compositionNodes = [], t.compositionEndedAt = -200000000, t.domObserver = new Dr(t, function(e, n, r, o) {
                return dr(t, e, n, r, o);
            }), t.domObserver.start(), t.domChangeCount = 0, t.eventHandlers = Object.create(null);
            var e = function(e) {
                var n = Ar[e];
                t.dom.addEventListener(e, t.eventHandlers[e] = function(e) {
                    !function(t, e) {
                        if (!e.bubbles) return !0;
                        if (e.defaultPrevented) return !1;
                        for(var n = e.target; n != t.dom; n = n.parentNode)if (!n || 11 == n.nodeType || n.pmViewDesc && n.pmViewDesc.stopEvent(e)) return !1;
                        return !0;
                    }(t, e) || Pr(t, e) || !t.editable && e.type in Rr || n(t, e);
                });
            };
            for(var n in Ar)e(n);
            Pe.safari && t.dom.addEventListener("input", function() {
                return null;
            }), zr(t);
        }(this), this.pluginViews = [], this.updatePluginViews();
    }, xo = {
        props: {
            configurable: !0
        },
        root: {
            configurable: !0
        }
    };
    function So(t) {
        var e = Object.create(null);
        return e.class = "ProseMirror", e.contenteditable = String(t.editable), t.someProp("attributes", function(n) {
            if ("function" == typeof n && (n = n(t.state)), n) for(var r in n)"class" == r ? e.class += " " + n[r] : e[r] || "contenteditable" == r || "nodeName" == r || (e[r] = String(n[r]));
        }), [
            io.node(0, t.state.doc.content.size, e)
        ];
    }
    function Oo(t) {
        if (t.markCursor) {
            var e = document.createElement("img");
            e.setAttribute("mark-placeholder", "true"), t.cursorWrapper = {
                dom: e,
                deco: io.widget(t.state.selection.head, e, {
                    raw: !0,
                    marks: t.markCursor
                })
            };
        } else t.cursorWrapper = null;
    }
    function Mo(t) {
        return !t.someProp("editable", function(e) {
            return !1 === e(t.state);
        });
    }
    function Co(t) {
        var e = {};
        return t.someProp("nodeViews", function(t) {
            for(var n in t)Object.prototype.hasOwnProperty.call(e, n) || (e[n] = t[n]);
        }), e;
    }
    function No(t, e) {
        return !t.selection.empty && (e && e(t.tr.deleteSelection().scrollIntoView()), !0);
    }
    function To(t, e) {
        for(; t; t = "start" == e ? t.firstChild : t.lastChild)if (t.isTextblock) return !0;
        return !1;
    }
    function Do(t) {
        if (!t.parent.type.spec.isolating) for(var e = t.depth - 1; e >= 0; e--){
            if (t.index(e) > 0) return t.doc.resolve(t.before(e + 1));
            if (t.node(e).type.spec.isolating) break;
        }
        return null;
    }
    function Eo(t) {
        if (!t.parent.type.spec.isolating) for(var e = t.depth - 1; e >= 0; e--){
            var n = t.node(e);
            if (t.index(e) + 1 < n.childCount) return t.doc.resolve(t.after(e + 1));
            if (n.type.spec.isolating) break;
        }
        return null;
    }
    function Ao(t, e) {
        var n, r = t.selection, o = r instanceof ge;
        if (o) {
            if (r.node.isTextblock || !Xt(t.doc, r.from)) return !1;
            n = r.from;
        } else if (null == (n = Qt(t.doc, r.from, -1))) return !1;
        if (e) {
            var i = t.tr.join(n);
            o && i.setSelection(ge.create(i.doc, n - t.doc.resolve(n).nodeBefore.nodeSize)), e(i.scrollIntoView());
        }
        return !0;
    }
    function Ro(t, e) {
        var n, r = t.selection;
        if (r instanceof ge) {
            if (r.node.isTextblock || !Xt(t.doc, r.to)) return !1;
            n = r.to;
        } else if (null == (n = Qt(t.doc, r.to, 1))) return !1;
        return e && e(t.tr.join(n).scrollIntoView()), !0;
    }
    function Io(t, e) {
        var n = t.selection, r = n.$from, o = n.$to, i = r.blockRange(o), s = i && Kt(i);
        return null != s && (e && e(t.tr.lift(i, s).scrollIntoView()), !0);
    }
    function zo(t) {
        for(var e = 0; e < t.edgeCount; e++){
            var n = t.edge(e).type;
            if (n.isTextblock && !n.hasRequiredAttrs()) return n;
        }
        return null;
    }
    function Po(t, e, n) {
        var r, o, i = e.nodeBefore, s = e.nodeAfter;
        if (i.type.spec.isolating || s.type.spec.isolating) return !1;
        if (function(t, e, n) {
            var r = e.nodeBefore, o = e.nodeAfter, i = e.index();
            return !(!(r && o && r.type.compatibleContent(o.type)) || (!r.content.size && e.parent.canReplace(i - 1, i) ? (n && n(t.tr.delete(e.pos - r.nodeSize, e.pos).scrollIntoView()), 0) : !e.parent.canReplace(i, i + 1) || !o.isTextblock && !Xt(t.doc, e.pos) || (n && n(t.tr.clearIncompatible(e.pos, r.type, r.contentMatchAt(r.childCount)).join(e.pos).scrollIntoView()), 0)));
        }(t, e, n)) return !0;
        if (e.parent.canReplace(e.index(), e.index() + 1) && (r = (o = i.contentMatchAt(i.childCount)).findWrapping(s.type)) && o.matchType(r[0] || s.type).validEnd) {
            if (n) {
                for(var a = e.pos + s.nodeSize, c = v.empty, h = r.length - 1; h >= 0; h--)c = v.from(r[h].create(null, c));
                c = v.from(i.copy(c));
                var p = t.tr.step(new Jt(e.pos - 1, a, e.pos, a, new S(c, 1, 0), r.length, !0)), l = a + 2 * r.length;
                Xt(p.doc, l) && p.join(l), n(p.scrollIntoView());
            }
            return !0;
        }
        var f = ue.findFrom(e, 1), u = f && f.$from.blockRange(f.$to), d = u && Kt(u);
        return null != d && d >= e.depth && (n && n(t.tr.lift(u, d).scrollIntoView()), !0);
    }
    function Vo(t, e) {
        return function(n, r) {
            var o = n.selection, i = o.$from, s = o.$to, a = i.blockRange(s), c = a && Ht(a, t, e);
            return !!c && (r && r(n.tr.wrap(a, c).scrollIntoView()), !0);
        };
    }
    function Bo(t, e) {
        return function(n, r) {
            var o = n.selection, i = o.from, s = o.to, a = !1;
            return n.doc.nodesBetween(i, s, function(r, o) {
                if (a) return !1;
                if (r.isTextblock && !r.hasMarkup(t, e)) {
                    if (r.type == t) a = !0;
                    else {
                        var i = n.doc.resolve(o), s = i.index();
                        a = i.parent.canReplaceWith(s, s + 1, t);
                    }
                }
            }), !!a && (r && r(n.tr.setBlockType(i, s, t, e).scrollIntoView()), !0);
        };
    }
    function $o(t, e) {
        return function(n, r) {
            var o = n.selection, i = o.empty, s = o.$cursor, a = o.ranges;
            if (i && !s || !function(t, e, n) {
                for(var r = function(r) {
                    var o = e[r], i = o.$from, s = o.$to, a = 0 == i.depth && t.type.allowsMarkType(n);
                    if (t.nodesBetween(i.pos, s.pos, function(t) {
                        if (a) return !1;
                        a = t.inlineContent && t.type.allowsMarkType(n);
                    }), a) return {
                        v: !0
                    };
                }, o = 0; o < e.length; o++){
                    var i = r(o);
                    if (i) return i.v;
                }
                return !1;
            }(n.doc, a, t)) return !1;
            if (r) {
                if (s) t.isInSet(n.storedMarks || s.marks()) ? r(n.tr.removeStoredMark(t)) : r(n.tr.addStoredMark(t.create(e)));
                else {
                    for(var c = !1, h = n.tr, p = 0; !c && p < a.length; p++){
                        var l = a[p], f = l.$from, u = l.$to;
                        c = n.doc.rangeHasMark(f.pos, u.pos, t);
                    }
                    for(var d = 0; d < a.length; d++){
                        var m = a[d], v = m.$from, y = m.$to;
                        c ? h.removeMark(v.pos, y.pos, t) : h.addMark(v.pos, y.pos, t.create(e));
                    }
                    r(h.scrollIntoView());
                }
            }
            return !0;
        };
    }
    function Fo() {
        for(var t = [], e = arguments.length; e--;)t[e] = arguments[e];
        return function(e, n, r) {
            for(var o = 0; o < t.length; o++)if (t[o](e, n, r)) return !0;
            return !1;
        };
    }
    xo.props.get = function() {
        if (this._props.state != this.state) {
            var t = this._props;
            for(var e in this._props = {}, t)this._props[e] = t[e];
            this._props.state = this.state;
        }
        return this._props;
    }, ko.prototype.update = function(t) {
        t.handleDOMEvents != this._props.handleDOMEvents && zr(this), this._props = t, this.updateStateInner(t.state, !0);
    }, ko.prototype.setProps = function(t) {
        var e = {};
        for(var n in this._props)e[n] = this._props[n];
        for(var r in e.state = this.state, t)e[r] = t[r];
        this.update(e);
    }, ko.prototype.updateState = function(t) {
        this.updateStateInner(t, this.state.plugins != t.plugins);
    }, ko.prototype.updateStateInner = function(t, e) {
        var n = this, r = this.state, o = !1, i = !1;
        if (t.storedMarks && this.composing && (Ur(this), i = !0), this.state = t, e) {
            var s = Co(this);
            (function(t, e) {
                var n = 0, r = 0;
                for(var o in t){
                    if (t[o] != e[o]) return !0;
                    n++;
                }
                for(var i in e)r++;
                return n != r;
            })(s, this.nodeViews) && (this.nodeViews = s, o = !0), zr(this);
        }
        this.editable = Mo(this), Oo(this);
        var a = bo(this), c = So(this), h = e ? "reset" : t.scrollToSelection > r.scrollToSelection ? "to selection" : "preserve", p = o || !this.docView.matchesNode(t.doc, c, a);
        !p && t.selection.eq(r.selection) || (i = !0);
        var l, f, u, d, m, v, y, g, w, b, k, x = "preserve" == h && i && null == this.dom.style.overflowAnchor && function(t) {
            for(var e, n, r = t.dom.getBoundingClientRect(), o = Math.max(0, r.top), i = (r.left + r.right) / 2, s = o + 1; s < Math.min(innerHeight, r.bottom); s += 5){
                var a = t.root.elementFromPoint(i, s);
                if (a != t.dom && t.dom.contains(a)) {
                    var c = a.getBoundingClientRect();
                    if (c.top >= o - 20) {
                        e = a, n = c.top;
                        break;
                    }
                }
            }
            return {
                refDOM: e,
                refTop: n,
                stack: nn(t.dom)
            };
        }(this);
        if (i) {
            this.domObserver.stop();
            var S = p && (Pe.ie || Pe.chrome) && !this.composing && !r.selection.empty && !t.selection.empty && (d = r.selection, m = t.selection, v = Math.min(d.$anchor.sharedDepth(d.head), m.$anchor.sharedDepth(m.head)), d.$anchor.start(v) != m.$anchor.start(v));
            if (p) {
                var O = Pe.chrome ? this.trackWrites = this.root.getSelection().focusNode : null;
                !o && this.docView.update(t.doc, c, a, this) || (this.docView.updateOuterDeco([]), this.docView.destroy(), this.docView = Tn(t.doc, c, a, this.dom, this)), O && !this.trackWrites && (S = !0);
            }
            S || !(this.mouseDown && this.domObserver.currentSelection.eq(this.root.getSelection()) && (l = this, f = l.docView.domFromPos(l.state.selection.anchor), u = l.root.getSelection(), We(f.node, f.offset, u.anchorNode, u.anchorOffset))) ? Wn(this, S) : (Xn(this, t.selection), this.domObserver.setCurSelection()), this.domObserver.start();
        }
        if (this.updatePluginViews(r), "reset" == h) this.dom.scrollTop = 0;
        else if ("to selection" == h) {
            var M = this.root.getSelection().focusNode;
            this.someProp("handleScrollToSelection", function(t) {
                return t(n);
            }) || (t.selection instanceof ge ? en(this, this.docView.domAfterPos(t.selection.from).getBoundingClientRect(), M) : en(this, this.coordsAtPos(t.selection.head, 1), M));
        } else x && (g = (y = x).refDOM, w = y.refTop, b = y.stack, k = g ? g.getBoundingClientRect().top : 0, rn(b, 0 == k ? 0 : k - w));
    }, ko.prototype.destroyPluginViews = function() {
        for(var t; t = this.pluginViews.pop();)t.destroy && t.destroy();
    }, ko.prototype.updatePluginViews = function(t) {
        if (t && t.plugins == this.state.plugins) for(var e = 0; e < this.pluginViews.length; e++){
            var n = this.pluginViews[e];
            n.update && n.update(this, t);
        }
        else {
            this.destroyPluginViews();
            for(var r = 0; r < this.state.plugins.length; r++){
                var o = this.state.plugins[r];
                o.spec.view && this.pluginViews.push(o.spec.view(this));
            }
        }
    }, ko.prototype.someProp = function(t, e) {
        var n, r = this._props && this._props[t];
        if (null != r && (n = e ? e(r) : r)) return n;
        var o = this.state.plugins;
        if (o) for(var i = 0; i < o.length; i++){
            var s = o[i].props[t];
            if (null != s && (n = e ? e(s) : s)) return n;
        }
    }, ko.prototype.hasFocus = function() {
        return this.root.activeElement == this.dom;
    }, ko.prototype.focus = function() {
        this.domObserver.stop(), this.editable && function(t) {
            if (t.setActive) return t.setActive();
            if (on) return t.focus(on);
            var e = nn(t);
            t.focus(null == on ? {
                get preventScroll () {
                    return on = {
                        preventScroll: !0
                    }, !0;
                }
            } : void 0), on || (on = !1, rn(e, 0));
        }(this.dom), Wn(this), this.domObserver.start();
    }, xo.root.get = function() {
        var t = this._root;
        if (null == t) {
            for(var e = this.dom.parentNode; e; e = e.parentNode)if (9 == e.nodeType || 11 == e.nodeType && e.host) return e.getSelection || (Object.getPrototypeOf(e).getSelection = function() {
                return document.getSelection();
            }), this._root = e;
        }
        return t || document;
    }, ko.prototype.posAtCoords = function(t) {
        return hn(this, t);
    }, ko.prototype.coordsAtPos = function(t, e) {
        return void 0 === e && (e = 1), fn(this, t, e);
    }, ko.prototype.domAtPos = function(t) {
        return this.docView.domFromPos(t);
    }, ko.prototype.nodeDOM = function(t) {
        var e = this.docView.descAt(t);
        return e ? e.nodeDOM : null;
    }, ko.prototype.posAtDOM = function(t, e, n) {
        void 0 === n && (n = -1);
        var r = this.docView.posFromDOM(t, e, n);
        if (null == r) throw new RangeError("DOM position not inside the editor");
        return r;
    }, ko.prototype.endOfTextblock = function(t, e) {
        return bn(this, e || this.state, t);
    }, ko.prototype.destroy = function() {
        this.docView && (!function(t) {
            for(var e in t.domObserver.stop(), t.eventHandlers)t.dom.removeEventListener(e, t.eventHandlers[e]);
            clearTimeout(t.composingTimeout), clearTimeout(t.lastIOSEnterFallbackTimeout);
        }(this), this.destroyPluginViews(), this.mounted ? (this.docView.update(this.state.doc, [], bo(this), this), this.dom.textContent = "") : this.dom.parentNode && this.dom.parentNode.removeChild(this.dom), this.docView.destroy(), this.docView = null);
    }, ko.prototype.dispatchEvent = function(t) {
        return function(t, e) {
            Pr(t, e) || !Ar[e.type] || !t.editable && e.type in Rr || Ar[e.type](t, e);
        }(this, t);
    }, ko.prototype.dispatch = function(t) {
        var e = this._props.dispatchTransaction;
        e ? e.call(this, t) : this.updateState(this.state.apply(t));
    }, Object.defineProperties(ko.prototype, xo);
    var _o = Fo(No, function(t, e, n) {
        var r = t.selection.$cursor;
        if (!r || (n ? !n.endOfTextblock("backward", t) : r.parentOffset > 0)) return !1;
        var o = Do(r);
        if (!o) {
            var i = r.blockRange(), s = i && Kt(i);
            return null != s && (e && e(t.tr.lift(i, s).scrollIntoView()), !0);
        }
        var a = o.nodeBefore;
        if (!a.type.spec.isolating && Po(t, o, e)) return !0;
        if (0 == r.parent.content.size && (To(a, "end") || ge.isSelectable(a))) {
            if (e) {
                var c = t.tr.deleteRange(r.before(), r.after());
                c.setSelection(To(a, "end") ? ue.findFrom(c.doc.resolve(c.mapping.map(o.pos, -1)), -1) : ge.create(c.doc, o.pos - a.nodeSize)), e(c.scrollIntoView());
            }
            return !0;
        }
        return !(!a.isAtom || o.depth != r.depth - 1) && (e && e(t.tr.delete(o.pos - a.nodeSize, o.pos).scrollIntoView()), !0);
    }, function(t, e, n) {
        var r = t.selection, o = r.$head, i = o;
        if (!r.empty) return !1;
        if (o.parent.isTextblock) {
            if (n ? !n.endOfTextblock("backward", t) : o.parentOffset > 0) return !1;
            i = Do(o);
        }
        var s = i && i.nodeBefore;
        return !(!s || !ge.isSelectable(s)) && (e && e(t.tr.setSelection(ge.create(t.doc, i.pos - s.nodeSize)).scrollIntoView()), !0);
    }), jo = Fo(No, function(t, e, n) {
        var r = t.selection.$cursor;
        if (!r || (n ? !n.endOfTextblock("forward", t) : r.parentOffset < r.parent.content.size)) return !1;
        var o = Eo(r);
        if (!o) return !1;
        var i = o.nodeAfter;
        if (Po(t, o, e)) return !0;
        if (0 == r.parent.content.size && (To(i, "start") || ge.isSelectable(i))) {
            if (e) {
                var s = t.tr.deleteRange(r.before(), r.after());
                s.setSelection(To(i, "start") ? ue.findFrom(s.doc.resolve(s.mapping.map(o.pos)), 1) : ge.create(s.doc, s.mapping.map(o.pos))), e(s.scrollIntoView());
            }
            return !0;
        }
        return !(!i.isAtom || o.depth != r.depth - 1) && (e && e(t.tr.delete(o.pos, o.pos + i.nodeSize).scrollIntoView()), !0);
    }, function(t, e, n) {
        var r = t.selection, o = r.$head, i = o;
        if (!r.empty) return !1;
        if (o.parent.isTextblock) {
            if (n ? !n.endOfTextblock("forward", t) : o.parentOffset < o.parent.content.size) return !1;
            i = Eo(o);
        }
        var s = i && i.nodeAfter;
        return !(!s || !ge.isSelectable(s)) && (e && e(t.tr.setSelection(ge.create(t.doc, i.pos)).scrollIntoView()), !0);
    }), Lo = {
        Enter: Fo(function(t, e) {
            var n = t.selection, r = n.$head, o = n.$anchor;
            return !(!r.parent.type.spec.code || !r.sameParent(o)) && (e && e(t.tr.insertText("\n").scrollIntoView()), !0);
        }, function(t, e) {
            var n = t.selection, r = n.$from, o = n.$to;
            if (r.parent.inlineContent || o.parent.inlineContent) return !1;
            var i = zo(r.parent.contentMatchAt(o.indexAfter()));
            if (!i || !i.isTextblock) return !1;
            if (e) {
                var s = (!r.parentOffset && o.index() < o.parent.childCount ? r : o).pos, a = t.tr.insert(s, i.createAndFill());
                a.setSelection(ve.create(a.doc, s + 1)), e(a.scrollIntoView());
            }
            return !0;
        }, function(t, e) {
            var n = t.selection.$cursor;
            if (!n || n.parent.content.size) return !1;
            if (n.depth > 1 && n.after() != n.end(-1)) {
                var r = n.before();
                if (Gt(t.doc, r)) return e && e(t.tr.split(r).scrollIntoView()), !0;
            }
            var o = n.blockRange(), i = o && Kt(o);
            return null != i && (e && e(t.tr.lift(o, i).scrollIntoView()), !0);
        }, function(t, e) {
            var n = t.selection, r = n.$from, o = n.$to;
            if (t.selection instanceof ge && t.selection.node.isBlock) return !(!r.parentOffset || !Gt(t.doc, r.pos)) && (e && e(t.tr.split(r.pos).scrollIntoView()), !0);
            if (!r.parent.isBlock) return !1;
            if (e) {
                var i = o.parentOffset == o.parent.content.size, s = t.tr;
                t.selection instanceof ve && s.deleteSelection();
                var a = 0 == r.depth ? null : zo(r.node(-1).contentMatchAt(r.indexAfter(-1))), c = i && a ? [
                    {
                        type: a
                    }
                ] : null, h = Gt(s.doc, s.mapping.map(r.pos), 1, c);
                c || h || !Gt(s.doc, s.mapping.map(r.pos), 1, a && [
                    {
                        type: a
                    }
                ]) || (c = [
                    {
                        type: a
                    }
                ], h = !0), h && (s.split(s.mapping.map(r.pos), 1, c), i || r.parentOffset || r.parent.type == a || !r.node(-1).canReplace(r.index(-1), r.indexAfter(-1), v.from(a.create(), r.parent)) || s.setNodeMarkup(s.mapping.map(r.before()), a)), e(s.scrollIntoView());
            }
            return !0;
        }),
        "Mod-Enter": function(t, e) {
            var n = t.selection, r = n.$head, o = n.$anchor;
            if (!r.parent.type.spec.code || !r.sameParent(o)) return !1;
            var i = r.node(-1), s = r.indexAfter(-1), a = zo(i.contentMatchAt(s));
            if (!i.canReplaceWith(s, s, a)) return !1;
            if (e) {
                var c = r.after(), h = t.tr.replaceWith(c, c, a.createAndFill());
                h.setSelection(ue.near(h.doc.resolve(c), 1)), e(h.scrollIntoView());
            }
            return !0;
        },
        Backspace: _o,
        "Mod-Backspace": _o,
        Delete: jo,
        "Mod-Delete": jo,
        "Mod-a": function(t, e) {
            return e && e(t.tr.setSelection(new be(t.doc))), !0;
        }
    }, Jo = {
        "Ctrl-h": Lo.Backspace,
        "Alt-Backspace": Lo["Mod-Backspace"],
        "Ctrl-d": Lo.Delete,
        "Ctrl-Alt-Backspace": Lo["Mod-Delete"],
        "Alt-Delete": Lo["Mod-Delete"],
        "Alt-d": Lo["Mod-Delete"]
    };
    for(var qo in Lo)Jo[qo] = Lo[qo];
    for(var Wo = ("undefined" != typeof navigator ? /Mac/.test(navigator.platform) : "undefined" != typeof os && "darwin" == os.platform()) ? Jo : Lo, Ko = {
        8: "Backspace",
        9: "Tab",
        10: "Enter",
        12: "NumLock",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        44: "PrintScreen",
        45: "Insert",
        46: "Delete",
        59: ";",
        61: "=",
        91: "Meta",
        92: "Meta",
        106: "*",
        107: "+",
        108: ",",
        109: "-",
        110: ".",
        111: "/",
        144: "NumLock",
        145: "ScrollLock",
        160: "Shift",
        161: "Shift",
        162: "Control",
        163: "Control",
        164: "Alt",
        165: "Alt",
        173: "-",
        186: ";",
        187: "=",
        188: ",",
        189: "-",
        190: ".",
        191: "/",
        192: "`",
        219: "[",
        220: "\\",
        221: "]",
        222: "'",
        229: "q"
    }, Ho = {
        48: ")",
        49: "!",
        50: "@",
        51: "#",
        52: "$",
        53: "%",
        54: "^",
        55: "&",
        56: "*",
        57: "(",
        59: ":",
        61: "+",
        173: "_",
        186: ":",
        187: "+",
        188: "<",
        189: "_",
        190: ">",
        191: "?",
        192: "~",
        219: "{",
        220: "|",
        221: "}",
        222: '"',
        229: "Q"
    }, Uo = "undefined" != typeof navigator && /Chrome\/(\d+)/.exec(navigator.userAgent), Go = "undefined" != typeof navigator && /Apple Computer/.test(navigator.vendor), Xo = "undefined" != typeof navigator && /Gecko\/\d+/.test(navigator.userAgent), Yo = "undefined" != typeof navigator && /Mac/.test(navigator.platform), Qo = "undefined" != typeof navigator && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent), Zo = Uo && (Yo || +Uo[1] < 57) || Xo && Yo, ti = 0; ti < 10; ti++)Ko[48 + ti] = Ko[96 + ti] = String(ti);
    for(ti = 1; ti <= 24; ti++)Ko[ti + 111] = "F" + ti;
    for(ti = 65; ti <= 90; ti++)Ko[ti] = String.fromCharCode(ti + 32), Ho[ti] = String.fromCharCode(ti);
    for(var ei in Ko)Ho.hasOwnProperty(ei) || (Ho[ei] = Ko[ei]);
    var ni = "undefined" != typeof navigator && /Mac/.test(navigator.platform);
    function ri(t) {
        var e, n, r, o, i = t.split(/-(?!$)/), s = i[i.length - 1];
        "Space" == s && (s = " ");
        for(var a = 0; a < i.length - 1; a++){
            var c = i[a];
            if (/^(cmd|meta|m)$/i.test(c)) o = !0;
            else if (/^a(lt)?$/i.test(c)) e = !0;
            else if (/^(c|ctrl|control)$/i.test(c)) n = !0;
            else if (/^s(hift)?$/i.test(c)) r = !0;
            else {
                if (!/^mod$/i.test(c)) throw new Error("Unrecognized modifier name: " + c);
                ni ? o = !0 : n = !0;
            }
        }
        return e && (s = "Alt-" + s), n && (s = "Ctrl-" + s), o && (s = "Meta-" + s), r && (s = "Shift-" + s), s;
    }
    function oi(t, e, n) {
        return e.altKey && (t = "Alt-" + t), e.ctrlKey && (t = "Ctrl-" + t), e.metaKey && (t = "Meta-" + t), !1 !== n && e.shiftKey && (t = "Shift-" + t), t;
    }
    function ii(t) {
        var e = function(t) {
            var e = Object.create(null);
            for(var n in t)e[ri(n)] = t[n];
            return e;
        }(t);
        return function(t, n) {
            var r, o = function(t) {
                var e = !(Zo && (t.ctrlKey || t.altKey || t.metaKey) || (Go || Qo) && t.shiftKey && t.key && 1 == t.key.length) && t.key || (t.shiftKey ? Ho : Ko)[t.keyCode] || t.key || "Unidentified";
                return "Esc" == e && (e = "Escape"), "Del" == e && (e = "Delete"), "Left" == e && (e = "ArrowLeft"), "Up" == e && (e = "ArrowUp"), "Right" == e && (e = "ArrowRight"), "Down" == e && (e = "ArrowDown"), e;
            }(n), i = 1 == o.length && " " != o, s = e[oi(o, n, !i)];
            if (s && s(t.state, t.dispatch, t)) return !0;
            if (i && (n.shiftKey || n.altKey || n.metaKey || o.charCodeAt(0) > 127) && (r = Ko[n.keyCode]) && r != o) {
                var a = e[oi(r, n, !0)];
                if (a && a(t.state, t.dispatch, t)) return !0;
            } else if (i && n.shiftKey) {
                var c = e[oi(o, n, !0)];
                if (c && c(t.state, t.dispatch, t)) return !0;
            }
            return !1;
        };
    }
    var si = function() {
        function e(n, r, o, i) {
            t(this, e), this.menuItemNode = n, this.editorView = r, this.attrs = i, this.options = o, this.type = this.resolveType(o.command), this.registerClickListener();
        }
        return n(e, [
            {
                key: "isActive",
                value: function() {}
            },
            {
                key: "resolveType",
                value: function(t) {}
            },
            {
                key: "update",
                value: function() {}
            },
            {
                key: "exec",
                value: function() {}
            },
            {
                key: "destroy",
                value: function() {
                    this.unregisterClickListener();
                }
            },
            {
                key: "registerClickListener",
                value: function() {
                    this.menuItemNode.addEventListener("mousedown", this.handleClickEvent.bind(this));
                }
            },
            {
                key: "unregisterClickListener",
                value: function() {
                    this.menuItemNode.removeEventListener("mousedown", this.handleClickEvent);
                }
            },
            {
                key: "handleClickEvent",
                value: function(t) {
                    t.preventDefault(), this.exec(), this.editorView.dom.dispatchEvent(new InputEvent("input"));
                }
            },
            {
                key: "state",
                get: function() {
                    return this.editorView.state;
                }
            },
            {
                key: "schema",
                get: function() {
                    return this.state.schema;
                }
            },
            {
                key: "activeClass",
                get: function() {
                    return this.options.hasOwnProperty("activeClass") ? this.options.activeClass : "";
                }
            }
        ]), e;
    }(), ai = function(e) {
        r(i, e);
        var o = l(i);
        function i(e, n) {
            var r, s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            return t(this, i), (r = o.call(this, e, n, s)).run = $o(r.type), r;
        }
        return n(i, [
            {
                key: "resolveType",
                value: function(t) {
                    return this.schema.marks["".concat(t)];
                }
            },
            {
                key: "update",
                value: function() {
                    var t = this.menuItemNode.classList.contains(this.activeClass);
                    !this.isActive() && t && this.menuItemNode.classList.remove(this.activeClass), this.isActive() && !t && this.menuItemNode.classList.add(this.activeClass);
                }
            },
            {
                key: "isActive",
                value: function() {
                    var t = this.type, e = this.state.selection, n = e.from, r = e.$from, o = e.to;
                    return e.empty ? !!t.isInSet(this.state.storedMarks || r.marks()) : this.state.doc.rangeHasMark(n, o, t);
                }
            },
            {
                key: "exec",
                value: function() {
                    this.run(this.state, this.editorView.dispatch);
                }
            }
        ]), i;
    }(si), ci = function(e) {
        r(i, e);
        var o = l(i);
        function i(e, n) {
            var r, s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
            return t(this, i), (r = o.call(this, e, n, s, a)).run = s.run(r.type, a), r;
        }
        return n(i, [
            {
                key: "resolveType",
                value: function(t) {
                    return this.schema.nodes["".concat(t)];
                }
            },
            {
                key: "isActive",
                value: function() {
                    if (this.options.hideable) return this.run(this.state);
                    if (this.options.activatable) {
                        var t = this.state.selection, e = t.$from, n = t.to, r = t.node;
                        return r ? r.hasMarkup(this.type, this.attrs) : n <= e.end() && e.parent.hasMarkup(this.type, this.attrs);
                    }
                }
            },
            {
                key: "update",
                value: function() {
                    if (this.options.hideable) this.menuItemNode.style.display = this.isActive() ? "" : "none";
                    else if (this.options.activatable) {
                        var t = this.menuItemNode.classList.contains(this.activeClass);
                        !this.isActive() && t && this.menuItemNode.classList.remove(this.activeClass), this.isActive() && !t && this.menuItemNode.classList.add(this.activeClass);
                    }
                }
            },
            {
                key: "exec",
                value: function() {
                    this.run(this.state, this.editorView.dispatch);
                }
            }
        ]), i;
    }(si), hi = function(e) {
        r(i, e);
        var o = l(i);
        function i(e, n) {
            var r, s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
            return t(this, i), (r = o.call(this, e, n, s, a)).run = s.run, r;
        }
        return n(i, [
            {
                key: "isActive",
                value: function() {
                    return this.run(this.state);
                }
            },
            {
                key: "update",
                value: function() {
                    this.menuItemNode.style.display = this.isActive() ? "" : "none";
                }
            },
            {
                key: "exec",
                value: function() {
                    return this.run(this.state, this.editorView.dispatch);
                }
            }
        ]), i;
    }(si), pi = [
        "level"
    ], li = [
        "command",
        "activeClass"
    ], fi = function() {
        function e(n, r) {
            t(this, e), this.editor = n, this.editorView = r, this.actionsManager = n.actionsManager, this.commandsManager = n.commandsManager, this.menuItems = [], this.initMenuNode(n.menuNode);
        }
        return n(e, [
            {
                key: "initMenuNode",
                value: function(t) {
                    var e = this;
                    t.querySelectorAll("button[data-command]").forEach(function(t) {
                        var n, r = e.extractNodeAttributes(t), o = e.extractNodeOptionsFromData(t);
                        if (e.schema.marks["".concat(o.command)]) n = new ai(t, e.editorView, o);
                        else if (e.commandsManager.hasCommand(o.command)) {
                            var i = e.commandsManager.getCommand(o.command);
                            o.run = i.action, o.hideable = i.hideable, o.activatable = i.activatable, n = new ci(t, e.editorView, o, r);
                        } else {
                            if (!e.actionsManager.hasAction(o.command)) throw new Error("Could not find Mark, Command or Action for: ".concat(o.command));
                            o.run = e.actionsManager.getAction(o.command), n = new hi(t, e.editorView, o, r);
                        }
                        n.update(), e.menuItems.push(n);
                    });
                }
            },
            {
                key: "extractNodeAttributes",
                value: function(t) {
                    var e = {};
                    return pi.forEach(function(n) {
                        t.dataset.hasOwnProperty(n) && (e[n] = t.dataset[n]);
                    }), e;
                }
            },
            {
                key: "extractNodeOptionsFromData",
                value: function(t) {
                    var e = {};
                    return li.forEach(function(n) {
                        t.dataset.hasOwnProperty(n) && (e[n] = t.dataset[n]);
                    }), e;
                }
            },
            {
                key: "update",
                value: function() {
                    this.menuItems.forEach(function(t) {
                        return t.update();
                    });
                }
            },
            {
                key: "destroy",
                value: function() {
                    this.menuItems.forEach(function(t) {
                        return t.destroy();
                    });
                }
            },
            {
                key: "schema",
                get: function() {
                    return this.editorView.state.schema;
                }
            }
        ]), e;
    }();
    var ui = function() {
        function e() {
            t(this, e), this.actionsRegistry = {};
        }
        return n(e, [
            {
                key: "addAction",
                value: function(t, e) {
                    this.actionsRegistry[t] = e;
                }
            },
            {
                key: "hasAction",
                value: function(t) {
                    return this.actionsRegistry.hasOwnProperty(t);
                }
            },
            {
                key: "getAction",
                value: function(t) {
                    return !!this.hasAction(t) && this.actionsRegistry[t];
                }
            }
        ]), e;
    }(), di = function() {
        function e() {
            t(this, e), this.commandsRegistry = {};
        }
        return n(e, [
            {
                key: "addCommand",
                value: function(t, e) {
                    this.commandsRegistry[t] = e;
                }
            },
            {
                key: "hasCommand",
                value: function(t) {
                    return this.commandsRegistry.hasOwnProperty(t);
                }
            },
            {
                key: "getCommand",
                value: function(t) {
                    return !!this.hasCommand(t) && this.commandsRegistry[t];
                }
            }
        ]), e;
    }();
    function mi(t, e) {
        return function(n, r) {
            var o = n.selection, i = o.$from, s = o.$to, a = i.blockRange(s), c = !1, h = a;
            if (!a) return !1;
            if (a.depth >= 2 && i.node(a.depth - 1).type.compatibleContent(t) && 0 == a.startIndex) {
                if (0 == i.index(a.depth - 1)) return !1;
                var p = n.doc.resolve(a.start - 2);
                h = new j(p, p, a.depth), a.endIndex < a.parent.childCount && (a = new j(i, n.doc.resolve(s.end(a.depth)), a.depth)), c = !0;
            }
            var l = Ht(h, t, e, a);
            return !!l && (r && r((function(t, e, n, r, o) {
                for(var i = v.empty, s = n.length - 1; s >= 0; s--)i = v.from(n[s].type.create(n[s].attrs, i));
                t.step(new Jt(e.start - (r ? 2 : 0), e.end, e.start, e.end, new S(i, 0, 0), n.length, !0));
                for(var a = 0, c = 0; c < n.length; c++)n[c].type == o && (a = c + 1);
                for(var h = n.length - a, p = e.start + n.length - (r ? 2 : 0), l = e.parent, f = e.startIndex, u = e.endIndex, d = !0; f < u; f++, d = !1)!d && Gt(t.doc, p, h) && (t.split(p, h), p += 2 * h), p += l.child(f).nodeSize;
                return t;
            })(n.tr, a, l, c, t).scrollIntoView()), !0);
        };
    }
    function vi(t) {
        var e = typeof t;
        return null != t && ("object" == e || "function" == e);
    }
    var yi = "object" == typeof global && global && global.Object === Object && global, gi = "object" == typeof self && self && self.Object === Object && self, wi = yi || gi || Function("return this")(), bi = function() {
        return wi.Date.now();
    }, ki = wi.Symbol, xi = Object.prototype, Si = xi.hasOwnProperty, Oi = xi.toString, Mi = ki ? ki.toStringTag : void 0;
    var Ci = Object.prototype.toString;
    var Ni = ki ? ki.toStringTag : void 0;
    function Ti(t) {
        return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : Ni && Ni in Object(t) ? function(t) {
            var e = Si.call(t, Mi), n = t[Mi];
            try {
                t[Mi] = void 0;
                var r = !0;
            } catch (t) {}
            var o = Oi.call(t);
            return r && (e ? t[Mi] = n : delete t[Mi]), o;
        }(t) : function(t) {
            return Ci.call(t);
        }(t);
    }
    var Di = /^\s+|\s+$/g, Ei = /^[-+]0x[0-9a-f]+$/i, Ai = /^0b[01]+$/i, Ri = /^0o[0-7]+$/i, Ii = parseInt;
    function zi(t) {
        if ("number" == typeof t) return t;
        if (function(t) {
            return "symbol" == typeof t || function(t) {
                return null != t && "object" == typeof t;
            }(t) && "[object Symbol]" == Ti(t);
        }(t)) return NaN;
        if (vi(t)) {
            var e = "function" == typeof t.valueOf ? t.valueOf() : t;
            t = vi(e) ? e + "" : e;
        }
        if ("string" != typeof t) return 0 === t ? t : +t;
        t = t.replace(Di, "");
        var n = Ai.test(t);
        return n || Ri.test(t) ? Ii(t.slice(2), n ? 2 : 8) : Ei.test(t) ? NaN : +t;
    }
    var Pi = Math.max, Vi = Math.min;
    function Bi(t, e, n) {
        var r, o, i, s, a, c, h = 0, p = !1, l = !1, f = !0;
        if ("function" != typeof t) throw new TypeError("Expected a function");
        function u(e) {
            var n = r, i = o;
            return r = o = void 0, h = e, s = t.apply(i, n);
        }
        function d(t) {
            return h = t, a = setTimeout(v, e), p ? u(t) : s;
        }
        function m(t) {
            var n = t - c;
            return void 0 === c || n >= e || n < 0 || l && t - h >= i;
        }
        function v() {
            var t = bi();
            if (m(t)) return y(t);
            a = setTimeout(v, function(t) {
                var n = e - (t - c);
                return l ? Vi(n, i - (t - h)) : n;
            }(t));
        }
        function y(t) {
            return a = void 0, f && r ? u(t) : (r = o = void 0, s);
        }
        function g() {
            var t = bi(), n = m(t);
            if (r = arguments, o = this, c = t, n) {
                if (void 0 === a) return d(c);
                if (l) return clearTimeout(a), a = setTimeout(v, e), u(c);
            }
            return void 0 === a && (a = setTimeout(v, e)), s;
        }
        return e = zi(e) || 0, vi(n) && (p = !!n.leading, i = (l = "maxWait" in n) ? Pi(zi(n.maxWait) || 0, e) : i, f = "trailing" in n ? !!n.trailing : f), g.cancel = function() {
            void 0 !== a && clearTimeout(a), h = 0, r = c = o = a = void 0;
        }, g.flush = function() {
            return void 0 === a ? s : y(bi());
        }, g;
    }
    var $i = function() {
        function e(n) {
            t(this, e), this.editor = n;
        }
        return n(e, [
            {
                key: "init",
                value: function() {
                    for(var t in this.editor.dataset)this[t] = this.editor.dataset[t];
                }
            }
        ]), e;
    }();
    var Fi = function(e) {
        r(i, e);
        var o = l(i);
        function i() {
            var e;
            return t(this, i), (e = o.call(this)).state = null, e.view = null, e.editorNode = null, e.actionsManager = new ui, e.commandsManager = new di, e.debouncedEventHandler = Bi(e.dispatchCustomInputEvent.bind(h(e)), 250), e;
        }
        return n(i, [
            {
                key: "connectedCallback",
                value: function() {
                    var t = this;
                    setTimeout(function() {
                        t.init();
                    }, 10);
                }
            },
            {
                key: "init",
                value: function() {
                    this.initRootNode(), this.initMenuNode(), this.initConfig(), this.initSchema(), this.initTools(), this.generateEditorState(), this.createEditorView();
                }
            },
            {
                key: "initRootNode",
                value: function() {
                    var t = this.querySelector('div[data-type="editor"]');
                    this.editorNode = t, this.editorNode.innerHTML = this.value;
                }
            },
            {
                key: "initMenuNode",
                value: function() {
                    this.menuNode = this.querySelector('div[data-type="menu"]');
                }
            },
            {
                key: "initConfig",
                value: function() {
                    this.config = new $i(this), this.config.init();
                }
            },
            {
                key: "initSchema",
                value: function() {
                    var t, e, n, r, o, i, s, a, c, h, p, l;
                    this.schema = (e = [
                        "em",
                        0
                    ], n = [
                        "strong",
                        0
                    ], r = [
                        "code",
                        0
                    ], o = [
                        "p",
                        {
                            class: (t = this).config.pClasses
                        },
                        0
                    ], i = [
                        "blockquote",
                        {
                            class: t.config.bqClasses
                        },
                        0
                    ], s = [
                        "hr",
                        {
                            class: t.config.hrClasses
                        }
                    ], a = [
                        "pre",
                        {
                            class: t.config.preClasses
                        },
                        [
                            "code",
                            0
                        ]
                    ], c = [
                        "br"
                    ], h = [
                        "ol",
                        {
                            class: t.config.olClasses
                        },
                        0
                    ], p = [
                        "ul",
                        {
                            class: t.config.ulClasses
                        },
                        0
                    ], l = [
                        "li",
                        {
                            class: t.config.liClasses
                        },
                        0
                    ], new ut({
                        nodes: {
                            doc: {
                                content: "block+"
                            },
                            paragraph: {
                                content: "inline*",
                                group: "block",
                                parseDOM: [
                                    {
                                        tag: "p"
                                    }
                                ],
                                toDOM: function() {
                                    return o;
                                }
                            },
                            blockquote: {
                                content: "block+",
                                group: "block",
                                defining: !0,
                                parseDOM: [
                                    {
                                        tag: "blockquote"
                                    }
                                ],
                                toDOM: function() {
                                    return i;
                                }
                            },
                            horizontal_rule: {
                                group: "block",
                                parseDOM: [
                                    {
                                        tag: "hr"
                                    }
                                ],
                                toDOM: function() {
                                    return s;
                                }
                            },
                            heading: {
                                attrs: {
                                    level: {
                                        default: 1
                                    }
                                },
                                content: "inline*",
                                group: "block",
                                defining: !0,
                                parseDOM: [
                                    {
                                        tag: "h1",
                                        attrs: {
                                            level: 1
                                        }
                                    },
                                    {
                                        tag: "h2",
                                        attrs: {
                                            level: 2
                                        }
                                    },
                                    {
                                        tag: "h3",
                                        attrs: {
                                            level: 3
                                        }
                                    },
                                    {
                                        tag: "h4",
                                        attrs: {
                                            level: 4
                                        }
                                    },
                                    {
                                        tag: "h5",
                                        attrs: {
                                            level: 5
                                        }
                                    },
                                    {
                                        tag: "h6",
                                        attrs: {
                                            level: 6
                                        }
                                    }
                                ],
                                toDOM: function(e) {
                                    return [
                                        "h" + e.attrs.level,
                                        {
                                            class: t.config["h".concat(e.attrs.level, "Classes")]
                                        },
                                        0
                                    ];
                                }
                            },
                            code_block: {
                                content: "text*",
                                marks: "",
                                group: "block",
                                code: !0,
                                defining: !0,
                                parseDOM: [
                                    {
                                        tag: "pre",
                                        preserveWhitespace: "full"
                                    }
                                ],
                                toDOM: function() {
                                    return a;
                                }
                            },
                            text: {
                                group: "inline"
                            },
                            image: {
                                inline: !0,
                                attrs: {
                                    src: {},
                                    alt: {
                                        default: null
                                    },
                                    title: {
                                        default: null
                                    }
                                },
                                group: "inline",
                                draggable: !0,
                                parseDOM: [
                                    {
                                        tag: "img[src]",
                                        getAttrs: function(t) {
                                            return {
                                                src: t.getAttribute("src"),
                                                title: t.getAttribute("title"),
                                                alt: t.getAttribute("alt")
                                            };
                                        }
                                    }
                                ],
                                toDOM: function(t) {
                                    var e = t.attrs;
                                    return [
                                        "img",
                                        {
                                            src: e.src,
                                            alt: e.alt,
                                            title: e.title
                                        }
                                    ];
                                }
                            },
                            hard_break: {
                                inline: !0,
                                group: "inline",
                                selectable: !1,
                                parseDOM: [
                                    {
                                        tag: "br"
                                    }
                                ],
                                toDOM: function() {
                                    return c;
                                }
                            },
                            ordered_list: {
                                content: "list_item+",
                                group: "block",
                                attrs: {
                                    order: {
                                        default: 1
                                    }
                                },
                                parseDOM: [
                                    {
                                        tag: "ol",
                                        getAttrs: function(t) {
                                            return {
                                                order: t.hasAttribute("start") ? +t.getAttribute("start") : 1
                                            };
                                        }
                                    }
                                ],
                                toDOM: function(t) {
                                    return 1 == t.attrs.order ? h : [
                                        "ol",
                                        {
                                            start: t.attrs.order
                                        },
                                        0
                                    ];
                                }
                            },
                            bullet_list: {
                                content: "list_item+",
                                group: "block",
                                parseDOM: [
                                    {
                                        tag: "ul"
                                    }
                                ],
                                toDOM: function() {
                                    return p;
                                }
                            },
                            list_item: {
                                content: "paragraph block*",
                                parseDOM: [
                                    {
                                        tag: "li"
                                    }
                                ],
                                toDOM: function() {
                                    return l;
                                },
                                defining: !0
                            }
                        },
                        marks: {
                            link: {
                                attrs: {
                                    href: {},
                                    title: {
                                        default: null
                                    }
                                },
                                inclusive: !1,
                                parseDOM: [
                                    {
                                        tag: "a[href]",
                                        getAttrs: function(t) {
                                            return {
                                                href: t.getAttribute("href"),
                                                title: t.getAttribute("title")
                                            };
                                        }
                                    }
                                ],
                                toDOM: function(t) {
                                    var e = t.attrs;
                                    return [
                                        "a",
                                        {
                                            href: e.href,
                                            title: e.title
                                        },
                                        0
                                    ];
                                }
                            },
                            em: {
                                parseDOM: [
                                    {
                                        tag: "i"
                                    },
                                    {
                                        tag: "em"
                                    },
                                    {
                                        style: "font-style=italic"
                                    }
                                ],
                                toDOM: function() {
                                    return e;
                                }
                            },
                            strong: {
                                parseDOM: [
                                    {
                                        tag: "strong"
                                    },
                                    {
                                        tag: "b",
                                        getAttrs: function(t) {
                                            return "normal" != t.style.fontWeight && null;
                                        }
                                    },
                                    {
                                        style: "font-weight",
                                        getAttrs: function(t) {
                                            return /^(bold(er)?|[5-9]\d{2,})$/.test(t) && null;
                                        }
                                    }
                                ],
                                toDOM: function() {
                                    return n;
                                }
                            },
                            code: {
                                parseDOM: [
                                    {
                                        tag: "code"
                                    }
                                ],
                                toDOM: function() {
                                    return r;
                                }
                            }
                        }
                    }));
                }
            },
            {
                key: "generateEditorState",
                value: function() {
                    this.state = De.create({
                        doc: mt.fromSchema(this.schema).parse(this.editorNode),
                        plugins: this.getPluginsList(this.menuNode)
                    }), this.editorNode.innerText = "";
                }
            },
            {
                key: "createEditorView",
                value: function() {
                    var t = {};
                    this.dataset.editorClasses && (t.class = this.dataset.editorClasses), this.view = new ko(this.editorNode, {
                        state: this.state,
                        attributes: t
                    }), this.view.dom.addEventListener("input", this.handleInputEvent.bind(this));
                }
            },
            {
                key: "handleInputEvent",
                value: function(t) {
                    t.preventDefault(), t.stopPropagation(), this.debouncedEventHandler();
                }
            },
            {
                key: "dispatchCustomInputEvent",
                value: function() {
                    var t = new CustomEvent("input", {
                        detail: this.editorNode.firstChild.innerHTML,
                        bubbles: !0
                    });
                    this.editorNode.dispatchEvent(t);
                }
            },
            {
                key: "initTools",
                value: function() {
                    var t;
                    (t = this).commandsManager.addCommand("heading", {
                        action: Bo,
                        activatable: !0
                    }), t.commandsManager.addCommand("paragraph", {
                        action: Bo,
                        activatable: !0
                    }), t.commandsManager.addCommand("blockquote", {
                        action: Vo,
                        activatable: !0
                    }), t.commandsManager.addCommand("code_block", {
                        action: Bo,
                        activatable: !0
                    }), t.commandsManager.addCommand("bullet_list", {
                        action: mi,
                        hideable: !0
                    }), t.commandsManager.addCommand("ordered_list", {
                        action: mi,
                        hideable: !0
                    }), t.commandsManager.addCommand("list_item", {
                        action: mi,
                        hideable: !0
                    }), t.actionsManager.addAction("lift", Io), t.actionsManager.addAction("join_up", Ao), t.actionsManager.addAction("join_down", Ro), t.schemaNodeSpec;
                }
            },
            {
                key: "getPluginsList",
                value: function() {
                    var t, e;
                    return [
                        (e = Wo, new Ie({
                            props: {
                                handleKeyDown: ii(e)
                            }
                        })),
                        (t = this, new Ie({
                            view: function(e) {
                                return new fi(t, e);
                            }
                        }))
                    ];
                }
            }
        ]), i;
    }(c(HTMLElement));
    customElements.define("alpine-editor", Fi);
});

},{}],"gCRej":[function(require,module,exports,__globalThis) {
/*!
  * Bootstrap v5.3.8 (https://getbootstrap.com/)
  * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */ !function(t, e) {
    module.exports = e();
}(this, function() {
    "use strict";
    const t = new Map, e = {
        set (e, i, n) {
            t.has(e) || t.set(e, new Map);
            const s = t.get(e);
            s.has(i) || 0 === s.size ? s.set(i, n) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(s.keys())[0]}.`);
        },
        get: (e, i)=>t.has(e) && t.get(e).get(i) || null,
        remove (e, i) {
            if (!t.has(e)) return;
            const n = t.get(e);
            n.delete(i), 0 === n.size && t.delete(e);
        }
    }, i = "transitionend", n = (t)=>(t && window.CSS && window.CSS.escape && (t = t.replace(/#([^\s"#']+)/g, (t, e)=>`#${CSS.escape(e)}`)), t), s = (t)=>null == t ? `${t}` : Object.prototype.toString.call(t).match(/\s([a-z]+)/i)[1].toLowerCase(), o = (t)=>{
        t.dispatchEvent(new Event(i));
    }, r = (t)=>!(!t || "object" != typeof t) && (void 0 !== t.jquery && (t = t[0]), void 0 !== t.nodeType), a = (t)=>r(t) ? t.jquery ? t[0] : t : "string" == typeof t && t.length > 0 ? document.querySelector(n(t)) : null, l = (t)=>{
        if (!r(t) || 0 === t.getClientRects().length) return !1;
        const e = "visible" === getComputedStyle(t).getPropertyValue("visibility"), i = t.closest("details:not([open])");
        if (!i) return e;
        if (i !== t) {
            const e = t.closest("summary");
            if (e && e.parentNode !== i) return !1;
            if (null === e) return !1;
        }
        return e;
    }, c = (t)=>!t || t.nodeType !== Node.ELEMENT_NODE || !!t.classList.contains("disabled") || (void 0 !== t.disabled ? t.disabled : t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled")), h = (t)=>{
        if (!document.documentElement.attachShadow) return null;
        if ("function" == typeof t.getRootNode) {
            const e = t.getRootNode();
            return e instanceof ShadowRoot ? e : null;
        }
        return t instanceof ShadowRoot ? t : t.parentNode ? h(t.parentNode) : null;
    }, d = ()=>{}, u = (t)=>{
        t.offsetHeight;
    }, f = ()=>window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null, p = [], m = ()=>"rtl" === document.documentElement.dir, g = (t)=>{
        var e;
        e = ()=>{
            const e = f();
            if (e) {
                const i = t.NAME, n = e.fn[i];
                e.fn[i] = t.jQueryInterface, e.fn[i].Constructor = t, e.fn[i].noConflict = ()=>(e.fn[i] = n, t.jQueryInterface);
            }
        }, "loading" === document.readyState ? (p.length || document.addEventListener("DOMContentLoaded", ()=>{
            for (const t of p)t();
        }), p.push(e)) : e();
    }, _ = (t, e = [], i = t)=>"function" == typeof t ? t.call(...e) : i, b = (t, e, n = !0)=>{
        if (!n) return void _(t);
        const s = ((t)=>{
            if (!t) return 0;
            let { transitionDuration: e, transitionDelay: i } = window.getComputedStyle(t);
            const n = Number.parseFloat(e), s = Number.parseFloat(i);
            return n || s ? (e = e.split(",")[0], i = i.split(",")[0], 1e3 * (Number.parseFloat(e) + Number.parseFloat(i))) : 0;
        })(e) + 5;
        let r = !1;
        const a = ({ target: n })=>{
            n === e && (r = !0, e.removeEventListener(i, a), _(t));
        };
        e.addEventListener(i, a), setTimeout(()=>{
            r || o(e);
        }, s);
    }, v = (t, e, i, n)=>{
        const s = t.length;
        let o = t.indexOf(e);
        return -1 === o ? !i && n ? t[s - 1] : t[0] : (o += i ? 1 : -1, n && (o = (o + s) % s), t[Math.max(0, Math.min(o, s - 1))]);
    }, y = /[^.]*(?=\..*)\.|.*/, w = /\..*/, A = /::\d+$/, E = {};
    let T = 1;
    const C = {
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, O = new Set([
        "click",
        "dblclick",
        "mouseup",
        "mousedown",
        "contextmenu",
        "mousewheel",
        "DOMMouseScroll",
        "mouseover",
        "mouseout",
        "mousemove",
        "selectstart",
        "selectend",
        "keydown",
        "keypress",
        "keyup",
        "orientationchange",
        "touchstart",
        "touchmove",
        "touchend",
        "touchcancel",
        "pointerdown",
        "pointermove",
        "pointerup",
        "pointerleave",
        "pointercancel",
        "gesturestart",
        "gesturechange",
        "gestureend",
        "focus",
        "blur",
        "change",
        "reset",
        "select",
        "submit",
        "focusin",
        "focusout",
        "load",
        "unload",
        "beforeunload",
        "resize",
        "move",
        "DOMContentLoaded",
        "readystatechange",
        "error",
        "abort",
        "scroll"
    ]);
    function x(t, e) {
        return e && `${e}::${T++}` || t.uidEvent || T++;
    }
    function k(t) {
        const e = x(t);
        return t.uidEvent = e, E[e] = E[e] || {}, E[e];
    }
    function L(t, e, i = null) {
        return Object.values(t).find((t)=>t.callable === e && t.delegationSelector === i);
    }
    function S(t, e, i) {
        const n = "string" == typeof e, s = n ? i : e || i;
        let o = N(t);
        return O.has(o) || (o = t), [
            n,
            s,
            o
        ];
    }
    function D(t, e, i, n, s) {
        if ("string" != typeof e || !t) return;
        let [o, r, a] = S(e, i, n);
        if (e in C) {
            const t = (t)=>function(e) {
                    if (!e.relatedTarget || e.relatedTarget !== e.delegateTarget && !e.delegateTarget.contains(e.relatedTarget)) return t.call(this, e);
                };
            r = t(r);
        }
        const l = k(t), c = l[a] || (l[a] = {}), h = L(c, r, o ? i : null);
        if (h) return void (h.oneOff = h.oneOff && s);
        const d = x(r, e.replace(y, "")), u = o ? function(t, e, i) {
            return function n(s) {
                const o = t.querySelectorAll(e);
                for(let { target: r } = s; r && r !== this; r = r.parentNode)for (const a of o)if (a === r) return j(s, {
                    delegateTarget: r
                }), n.oneOff && P.off(t, s.type, e, i), i.apply(r, [
                    s
                ]);
            };
        }(t, i, r) : function(t, e) {
            return function i(n) {
                return j(n, {
                    delegateTarget: t
                }), i.oneOff && P.off(t, n.type, e), e.apply(t, [
                    n
                ]);
            };
        }(t, r);
        u.delegationSelector = o ? i : null, u.callable = r, u.oneOff = s, u.uidEvent = d, c[d] = u, t.addEventListener(a, u, o);
    }
    function $(t, e, i, n, s) {
        const o = L(e[i], n, s);
        o && (t.removeEventListener(i, o, Boolean(s)), delete e[i][o.uidEvent]);
    }
    function I(t, e, i, n) {
        const s = e[i] || {};
        for (const [o, r] of Object.entries(s))o.includes(n) && $(t, e, i, r.callable, r.delegationSelector);
    }
    function N(t) {
        return t = t.replace(w, ""), C[t] || t;
    }
    const P = {
        on (t, e, i, n) {
            D(t, e, i, n, !1);
        },
        one (t, e, i, n) {
            D(t, e, i, n, !0);
        },
        off (t, e, i, n) {
            if ("string" != typeof e || !t) return;
            const [s, o, r] = S(e, i, n), a = r !== e, l = k(t), c = l[r] || {}, h = e.startsWith(".");
            if (void 0 === o) {
                if (h) for (const i of Object.keys(l))I(t, l, i, e.slice(1));
                for (const [i, n] of Object.entries(c)){
                    const s = i.replace(A, "");
                    a && !e.includes(s) || $(t, l, r, n.callable, n.delegationSelector);
                }
            } else {
                if (!Object.keys(c).length) return;
                $(t, l, r, o, s ? i : null);
            }
        },
        trigger (t, e, i) {
            if ("string" != typeof e || !t) return null;
            const n = f();
            let s = null, o = !0, r = !0, a = !1;
            e !== N(e) && n && (s = n.Event(e, i), n(t).trigger(s), o = !s.isPropagationStopped(), r = !s.isImmediatePropagationStopped(), a = s.isDefaultPrevented());
            const l = j(new Event(e, {
                bubbles: o,
                cancelable: !0
            }), i);
            return a && l.preventDefault(), r && t.dispatchEvent(l), l.defaultPrevented && s && s.preventDefault(), l;
        }
    };
    function j(t, e = {}) {
        for (const [i, n] of Object.entries(e))try {
            t[i] = n;
        } catch (e) {
            Object.defineProperty(t, i, {
                configurable: !0,
                get: ()=>n
            });
        }
        return t;
    }
    function M(t) {
        if ("true" === t) return !0;
        if ("false" === t) return !1;
        if (t === Number(t).toString()) return Number(t);
        if ("" === t || "null" === t) return null;
        if ("string" != typeof t) return t;
        try {
            return JSON.parse(decodeURIComponent(t));
        } catch (e) {
            return t;
        }
    }
    function F(t) {
        return t.replace(/[A-Z]/g, (t)=>`-${t.toLowerCase()}`);
    }
    const H = {
        setDataAttribute (t, e, i) {
            t.setAttribute(`data-bs-${F(e)}`, i);
        },
        removeDataAttribute (t, e) {
            t.removeAttribute(`data-bs-${F(e)}`);
        },
        getDataAttributes (t) {
            if (!t) return {};
            const e = {}, i = Object.keys(t.dataset).filter((t)=>t.startsWith("bs") && !t.startsWith("bsConfig"));
            for (const n of i){
                let i = n.replace(/^bs/, "");
                i = i.charAt(0).toLowerCase() + i.slice(1), e[i] = M(t.dataset[n]);
            }
            return e;
        },
        getDataAttribute: (t, e)=>M(t.getAttribute(`data-bs-${F(e)}`))
    };
    class W {
        static get Default() {
            return {};
        }
        static get DefaultType() {
            return {};
        }
        static get NAME() {
            throw new Error('You have to implement the static method "NAME", for each component!');
        }
        _getConfig(t) {
            return t = this._mergeConfigObj(t), t = this._configAfterMerge(t), this._typeCheckConfig(t), t;
        }
        _configAfterMerge(t) {
            return t;
        }
        _mergeConfigObj(t, e) {
            const i = r(e) ? H.getDataAttribute(e, "config") : {};
            return {
                ...this.constructor.Default,
                ..."object" == typeof i ? i : {},
                ...r(e) ? H.getDataAttributes(e) : {},
                ..."object" == typeof t ? t : {}
            };
        }
        _typeCheckConfig(t, e = this.constructor.DefaultType) {
            for (const [i, n] of Object.entries(e)){
                const e = t[i], o = r(e) ? "element" : s(e);
                if (!new RegExp(n).test(o)) throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${i}" provided type "${o}" but expected type "${n}".`);
            }
        }
    }
    class B extends W {
        constructor(t, i){
            super(), (t = a(t)) && (this._element = t, this._config = this._getConfig(i), e.set(this._element, this.constructor.DATA_KEY, this));
        }
        dispose() {
            e.remove(this._element, this.constructor.DATA_KEY), P.off(this._element, this.constructor.EVENT_KEY);
            for (const t of Object.getOwnPropertyNames(this))this[t] = null;
        }
        _queueCallback(t, e, i = !0) {
            b(t, e, i);
        }
        _getConfig(t) {
            return t = this._mergeConfigObj(t, this._element), t = this._configAfterMerge(t), this._typeCheckConfig(t), t;
        }
        static getInstance(t) {
            return e.get(a(t), this.DATA_KEY);
        }
        static getOrCreateInstance(t, e = {}) {
            return this.getInstance(t) || new this(t, "object" == typeof e ? e : null);
        }
        static get VERSION() {
            return "5.3.8";
        }
        static get DATA_KEY() {
            return `bs.${this.NAME}`;
        }
        static get EVENT_KEY() {
            return `.${this.DATA_KEY}`;
        }
        static eventName(t) {
            return `${t}${this.EVENT_KEY}`;
        }
    }
    const z = (t)=>{
        let e = t.getAttribute("data-bs-target");
        if (!e || "#" === e) {
            let i = t.getAttribute("href");
            if (!i || !i.includes("#") && !i.startsWith(".")) return null;
            i.includes("#") && !i.startsWith("#") && (i = `#${i.split("#")[1]}`), e = i && "#" !== i ? i.trim() : null;
        }
        return e ? e.split(",").map((t)=>n(t)).join(",") : null;
    }, R = {
        find: (t, e = document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(e, t)),
        findOne: (t, e = document.documentElement)=>Element.prototype.querySelector.call(e, t),
        children: (t, e)=>[].concat(...t.children).filter((t)=>t.matches(e)),
        parents (t, e) {
            const i = [];
            let n = t.parentNode.closest(e);
            for(; n;)i.push(n), n = n.parentNode.closest(e);
            return i;
        },
        prev (t, e) {
            let i = t.previousElementSibling;
            for(; i;){
                if (i.matches(e)) return [
                    i
                ];
                i = i.previousElementSibling;
            }
            return [];
        },
        next (t, e) {
            let i = t.nextElementSibling;
            for(; i;){
                if (i.matches(e)) return [
                    i
                ];
                i = i.nextElementSibling;
            }
            return [];
        },
        focusableChildren (t) {
            const e = [
                "a",
                "button",
                "input",
                "textarea",
                "select",
                "details",
                "[tabindex]",
                '[contenteditable="true"]'
            ].map((t)=>`${t}:not([tabindex^="-"])`).join(",");
            return this.find(e, t).filter((t)=>!c(t) && l(t));
        },
        getSelectorFromElement (t) {
            const e = z(t);
            return e && R.findOne(e) ? e : null;
        },
        getElementFromSelector (t) {
            const e = z(t);
            return e ? R.findOne(e) : null;
        },
        getMultipleElementsFromSelector (t) {
            const e = z(t);
            return e ? R.find(e) : [];
        }
    }, q = (t, e = "hide")=>{
        const i = `click.dismiss${t.EVENT_KEY}`, n = t.NAME;
        P.on(document, i, `[data-bs-dismiss="${n}"]`, function(i) {
            if ([
                "A",
                "AREA"
            ].includes(this.tagName) && i.preventDefault(), c(this)) return;
            const s = R.getElementFromSelector(this) || this.closest(`.${n}`);
            t.getOrCreateInstance(s)[e]();
        });
    }, V = ".bs.alert", K = `close${V}`, Q = `closed${V}`;
    class X extends B {
        static get NAME() {
            return "alert";
        }
        close() {
            if (P.trigger(this._element, K).defaultPrevented) return;
            this._element.classList.remove("show");
            const t = this._element.classList.contains("fade");
            this._queueCallback(()=>this._destroyElement(), this._element, t);
        }
        _destroyElement() {
            this._element.remove(), P.trigger(this._element, Q), this.dispose();
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e = X.getOrCreateInstance(this);
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
                    e[t](this);
                }
            });
        }
    }
    q(X, "close"), g(X);
    const Y = '[data-bs-toggle="button"]';
    class U extends B {
        static get NAME() {
            return "button";
        }
        toggle() {
            this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"));
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e = U.getOrCreateInstance(this);
                "toggle" === t && e[t]();
            });
        }
    }
    P.on(document, "click.bs.button.data-api", Y, (t)=>{
        t.preventDefault();
        const e = t.target.closest(Y);
        U.getOrCreateInstance(e).toggle();
    }), g(U);
    const G = ".bs.swipe", J = `touchstart${G}`, Z = `touchmove${G}`, tt = `touchend${G}`, et = `pointerdown${G}`, it = `pointerup${G}`, nt = {
        endCallback: null,
        leftCallback: null,
        rightCallback: null
    }, st = {
        endCallback: "(function|null)",
        leftCallback: "(function|null)",
        rightCallback: "(function|null)"
    };
    class ot extends W {
        constructor(t, e){
            super(), this._element = t, t && ot.isSupported() && (this._config = this._getConfig(e), this._deltaX = 0, this._supportPointerEvents = Boolean(window.PointerEvent), this._initEvents());
        }
        static get Default() {
            return nt;
        }
        static get DefaultType() {
            return st;
        }
        static get NAME() {
            return "swipe";
        }
        dispose() {
            P.off(this._element, G);
        }
        _start(t) {
            this._supportPointerEvents ? this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX) : this._deltaX = t.touches[0].clientX;
        }
        _end(t) {
            this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX - this._deltaX), this._handleSwipe(), _(this._config.endCallback);
        }
        _move(t) {
            this._deltaX = t.touches && t.touches.length > 1 ? 0 : t.touches[0].clientX - this._deltaX;
        }
        _handleSwipe() {
            const t = Math.abs(this._deltaX);
            if (t <= 40) return;
            const e = t / this._deltaX;
            this._deltaX = 0, e && _(e > 0 ? this._config.rightCallback : this._config.leftCallback);
        }
        _initEvents() {
            this._supportPointerEvents ? (P.on(this._element, et, (t)=>this._start(t)), P.on(this._element, it, (t)=>this._end(t)), this._element.classList.add("pointer-event")) : (P.on(this._element, J, (t)=>this._start(t)), P.on(this._element, Z, (t)=>this._move(t)), P.on(this._element, tt, (t)=>this._end(t)));
        }
        _eventIsPointerPenTouch(t) {
            return this._supportPointerEvents && ("pen" === t.pointerType || "touch" === t.pointerType);
        }
        static isSupported() {
            return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0;
        }
    }
    const rt = ".bs.carousel", at = ".data-api", lt = "ArrowLeft", ct = "ArrowRight", ht = "next", dt = "prev", ut = "left", ft = "right", pt = `slide${rt}`, mt = `slid${rt}`, gt = `keydown${rt}`, _t = `mouseenter${rt}`, bt = `mouseleave${rt}`, vt = `dragstart${rt}`, yt = `load${rt}${at}`, wt = `click${rt}${at}`, At = "carousel", Et = "active", Tt = ".active", Ct = ".carousel-item", Ot = Tt + Ct, xt = {
        [lt]: ft,
        [ct]: ut
    }, kt = {
        interval: 5e3,
        keyboard: !0,
        pause: "hover",
        ride: !1,
        touch: !0,
        wrap: !0
    }, Lt = {
        interval: "(number|boolean)",
        keyboard: "boolean",
        pause: "(string|boolean)",
        ride: "(boolean|string)",
        touch: "boolean",
        wrap: "boolean"
    };
    class St extends B {
        constructor(t, e){
            super(t, e), this._interval = null, this._activeElement = null, this._isSliding = !1, this.touchTimeout = null, this._swipeHelper = null, this._indicatorsElement = R.findOne(".carousel-indicators", this._element), this._addEventListeners(), this._config.ride === At && this.cycle();
        }
        static get Default() {
            return kt;
        }
        static get DefaultType() {
            return Lt;
        }
        static get NAME() {
            return "carousel";
        }
        next() {
            this._slide(ht);
        }
        nextWhenVisible() {
            !document.hidden && l(this._element) && this.next();
        }
        prev() {
            this._slide(dt);
        }
        pause() {
            this._isSliding && o(this._element), this._clearInterval();
        }
        cycle() {
            this._clearInterval(), this._updateInterval(), this._interval = setInterval(()=>this.nextWhenVisible(), this._config.interval);
        }
        _maybeEnableCycle() {
            this._config.ride && (this._isSliding ? P.one(this._element, mt, ()=>this.cycle()) : this.cycle());
        }
        to(t) {
            const e = this._getItems();
            if (t > e.length - 1 || t < 0) return;
            if (this._isSliding) return void P.one(this._element, mt, ()=>this.to(t));
            const i = this._getItemIndex(this._getActive());
            if (i === t) return;
            const n = t > i ? ht : dt;
            this._slide(n, e[t]);
        }
        dispose() {
            this._swipeHelper && this._swipeHelper.dispose(), super.dispose();
        }
        _configAfterMerge(t) {
            return t.defaultInterval = t.interval, t;
        }
        _addEventListeners() {
            this._config.keyboard && P.on(this._element, gt, (t)=>this._keydown(t)), "hover" === this._config.pause && (P.on(this._element, _t, ()=>this.pause()), P.on(this._element, bt, ()=>this._maybeEnableCycle())), this._config.touch && ot.isSupported() && this._addTouchEventListeners();
        }
        _addTouchEventListeners() {
            for (const t of R.find(".carousel-item img", this._element))P.on(t, vt, (t)=>t.preventDefault());
            const t = {
                leftCallback: ()=>this._slide(this._directionToOrder(ut)),
                rightCallback: ()=>this._slide(this._directionToOrder(ft)),
                endCallback: ()=>{
                    "hover" === this._config.pause && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout(()=>this._maybeEnableCycle(), 500 + this._config.interval));
                }
            };
            this._swipeHelper = new ot(this._element, t);
        }
        _keydown(t) {
            if (/input|textarea/i.test(t.target.tagName)) return;
            const e = xt[t.key];
            e && (t.preventDefault(), this._slide(this._directionToOrder(e)));
        }
        _getItemIndex(t) {
            return this._getItems().indexOf(t);
        }
        _setActiveIndicatorElement(t) {
            if (!this._indicatorsElement) return;
            const e = R.findOne(Tt, this._indicatorsElement);
            e.classList.remove(Et), e.removeAttribute("aria-current");
            const i = R.findOne(`[data-bs-slide-to="${t}"]`, this._indicatorsElement);
            i && (i.classList.add(Et), i.setAttribute("aria-current", "true"));
        }
        _updateInterval() {
            const t = this._activeElement || this._getActive();
            if (!t) return;
            const e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
            this._config.interval = e || this._config.defaultInterval;
        }
        _slide(t, e = null) {
            if (this._isSliding) return;
            const i = this._getActive(), n = t === ht, s = e || v(this._getItems(), i, n, this._config.wrap);
            if (s === i) return;
            const o = this._getItemIndex(s), r = (e)=>P.trigger(this._element, e, {
                    relatedTarget: s,
                    direction: this._orderToDirection(t),
                    from: this._getItemIndex(i),
                    to: o
                });
            if (r(pt).defaultPrevented) return;
            if (!i || !s) return;
            const a = Boolean(this._interval);
            this.pause(), this._isSliding = !0, this._setActiveIndicatorElement(o), this._activeElement = s;
            const l = n ? "carousel-item-start" : "carousel-item-end", c = n ? "carousel-item-next" : "carousel-item-prev";
            s.classList.add(c), u(s), i.classList.add(l), s.classList.add(l), this._queueCallback(()=>{
                s.classList.remove(l, c), s.classList.add(Et), i.classList.remove(Et, c, l), this._isSliding = !1, r(mt);
            }, i, this._isAnimated()), a && this.cycle();
        }
        _isAnimated() {
            return this._element.classList.contains("slide");
        }
        _getActive() {
            return R.findOne(Ot, this._element);
        }
        _getItems() {
            return R.find(Ct, this._element);
        }
        _clearInterval() {
            this._interval && (clearInterval(this._interval), this._interval = null);
        }
        _directionToOrder(t) {
            return m() ? t === ut ? dt : ht : t === ut ? ht : dt;
        }
        _orderToDirection(t) {
            return m() ? t === dt ? ut : ft : t === dt ? ft : ut;
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e = St.getOrCreateInstance(this, t);
                if ("number" != typeof t) {
                    if ("string" == typeof t) {
                        if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
                        e[t]();
                    }
                } else e.to(t);
            });
        }
    }
    P.on(document, wt, "[data-bs-slide], [data-bs-slide-to]", function(t) {
        const e = R.getElementFromSelector(this);
        if (!e || !e.classList.contains(At)) return;
        t.preventDefault();
        const i = St.getOrCreateInstance(e), n = this.getAttribute("data-bs-slide-to");
        return n ? (i.to(n), void i._maybeEnableCycle()) : "next" === H.getDataAttribute(this, "slide") ? (i.next(), void i._maybeEnableCycle()) : (i.prev(), void i._maybeEnableCycle());
    }), P.on(window, yt, ()=>{
        const t = R.find('[data-bs-ride="carousel"]');
        for (const e of t)St.getOrCreateInstance(e);
    }), g(St);
    const Dt = ".bs.collapse", $t = `show${Dt}`, It = `shown${Dt}`, Nt = `hide${Dt}`, Pt = `hidden${Dt}`, jt = `click${Dt}.data-api`, Mt = "show", Ft = "collapse", Ht = "collapsing", Wt = `:scope .${Ft} .${Ft}`, Bt = '[data-bs-toggle="collapse"]', zt = {
        parent: null,
        toggle: !0
    }, Rt = {
        parent: "(null|element)",
        toggle: "boolean"
    };
    class qt extends B {
        constructor(t, e){
            super(t, e), this._isTransitioning = !1, this._triggerArray = [];
            const i = R.find(Bt);
            for (const t of i){
                const e = R.getSelectorFromElement(t), i = R.find(e).filter((t)=>t === this._element);
                null !== e && i.length && this._triggerArray.push(t);
            }
            this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle();
        }
        static get Default() {
            return zt;
        }
        static get DefaultType() {
            return Rt;
        }
        static get NAME() {
            return "collapse";
        }
        toggle() {
            this._isShown() ? this.hide() : this.show();
        }
        show() {
            if (this._isTransitioning || this._isShown()) return;
            let t = [];
            if (this._config.parent && (t = this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter((t)=>t !== this._element).map((t)=>qt.getOrCreateInstance(t, {
                    toggle: !1
                }))), t.length && t[0]._isTransitioning) return;
            if (P.trigger(this._element, $t).defaultPrevented) return;
            for (const e of t)e.hide();
            const e = this._getDimension();
            this._element.classList.remove(Ft), this._element.classList.add(Ht), this._element.style[e] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0;
            const i = `scroll${e[0].toUpperCase() + e.slice(1)}`;
            this._queueCallback(()=>{
                this._isTransitioning = !1, this._element.classList.remove(Ht), this._element.classList.add(Ft, Mt), this._element.style[e] = "", P.trigger(this._element, It);
            }, this._element, !0), this._element.style[e] = `${this._element[i]}px`;
        }
        hide() {
            if (this._isTransitioning || !this._isShown()) return;
            if (P.trigger(this._element, Nt).defaultPrevented) return;
            const t = this._getDimension();
            this._element.style[t] = `${this._element.getBoundingClientRect()[t]}px`, u(this._element), this._element.classList.add(Ht), this._element.classList.remove(Ft, Mt);
            for (const t of this._triggerArray){
                const e = R.getElementFromSelector(t);
                e && !this._isShown(e) && this._addAriaAndCollapsedClass([
                    t
                ], !1);
            }
            this._isTransitioning = !0, this._element.style[t] = "", this._queueCallback(()=>{
                this._isTransitioning = !1, this._element.classList.remove(Ht), this._element.classList.add(Ft), P.trigger(this._element, Pt);
            }, this._element, !0);
        }
        _isShown(t = this._element) {
            return t.classList.contains(Mt);
        }
        _configAfterMerge(t) {
            return t.toggle = Boolean(t.toggle), t.parent = a(t.parent), t;
        }
        _getDimension() {
            return this._element.classList.contains("collapse-horizontal") ? "width" : "height";
        }
        _initializeChildren() {
            if (!this._config.parent) return;
            const t = this._getFirstLevelChildren(Bt);
            for (const e of t){
                const t = R.getElementFromSelector(e);
                t && this._addAriaAndCollapsedClass([
                    e
                ], this._isShown(t));
            }
        }
        _getFirstLevelChildren(t) {
            const e = R.find(Wt, this._config.parent);
            return R.find(t, this._config.parent).filter((t)=>!e.includes(t));
        }
        _addAriaAndCollapsedClass(t, e) {
            if (t.length) for (const i of t)i.classList.toggle("collapsed", !e), i.setAttribute("aria-expanded", e);
        }
        static jQueryInterface(t) {
            const e = {};
            return "string" == typeof t && /show|hide/.test(t) && (e.toggle = !1), this.each(function() {
                const i = qt.getOrCreateInstance(this, e);
                if ("string" == typeof t) {
                    if (void 0 === i[t]) throw new TypeError(`No method named "${t}"`);
                    i[t]();
                }
            });
        }
    }
    P.on(document, jt, Bt, function(t) {
        ("A" === t.target.tagName || t.delegateTarget && "A" === t.delegateTarget.tagName) && t.preventDefault();
        for (const t of R.getMultipleElementsFromSelector(this))qt.getOrCreateInstance(t, {
            toggle: !1
        }).toggle();
    }), g(qt);
    var Vt = "top", Kt = "bottom", Qt = "right", Xt = "left", Yt = "auto", Ut = [
        Vt,
        Kt,
        Qt,
        Xt
    ], Gt = "start", Jt = "end", Zt = "clippingParents", te = "viewport", ee = "popper", ie = "reference", ne = Ut.reduce(function(t, e) {
        return t.concat([
            e + "-" + Gt,
            e + "-" + Jt
        ]);
    }, []), se = [].concat(Ut, [
        Yt
    ]).reduce(function(t, e) {
        return t.concat([
            e,
            e + "-" + Gt,
            e + "-" + Jt
        ]);
    }, []), oe = "beforeRead", re = "read", ae = "afterRead", le = "beforeMain", ce = "main", he = "afterMain", de = "beforeWrite", ue = "write", fe = "afterWrite", pe = [
        oe,
        re,
        ae,
        le,
        ce,
        he,
        de,
        ue,
        fe
    ];
    function me(t) {
        return t ? (t.nodeName || "").toLowerCase() : null;
    }
    function ge(t) {
        if (null == t) return window;
        if ("[object Window]" !== t.toString()) {
            var e = t.ownerDocument;
            return e && e.defaultView || window;
        }
        return t;
    }
    function _e(t) {
        return t instanceof ge(t).Element || t instanceof Element;
    }
    function be(t) {
        return t instanceof ge(t).HTMLElement || t instanceof HTMLElement;
    }
    function ve(t) {
        return "undefined" != typeof ShadowRoot && (t instanceof ge(t).ShadowRoot || t instanceof ShadowRoot);
    }
    const ye = {
        name: "applyStyles",
        enabled: !0,
        phase: "write",
        fn: function(t) {
            var e = t.state;
            Object.keys(e.elements).forEach(function(t) {
                var i = e.styles[t] || {}, n = e.attributes[t] || {}, s = e.elements[t];
                be(s) && me(s) && (Object.assign(s.style, i), Object.keys(n).forEach(function(t) {
                    var e = n[t];
                    !1 === e ? s.removeAttribute(t) : s.setAttribute(t, !0 === e ? "" : e);
                }));
            });
        },
        effect: function(t) {
            var e = t.state, i = {
                popper: {
                    position: e.options.strategy,
                    left: "0",
                    top: "0",
                    margin: "0"
                },
                arrow: {
                    position: "absolute"
                },
                reference: {}
            };
            return Object.assign(e.elements.popper.style, i.popper), e.styles = i, e.elements.arrow && Object.assign(e.elements.arrow.style, i.arrow), function() {
                Object.keys(e.elements).forEach(function(t) {
                    var n = e.elements[t], s = e.attributes[t] || {}, o = Object.keys(e.styles.hasOwnProperty(t) ? e.styles[t] : i[t]).reduce(function(t, e) {
                        return t[e] = "", t;
                    }, {});
                    be(n) && me(n) && (Object.assign(n.style, o), Object.keys(s).forEach(function(t) {
                        n.removeAttribute(t);
                    }));
                });
            };
        },
        requires: [
            "computeStyles"
        ]
    };
    function we(t) {
        return t.split("-")[0];
    }
    var Ae = Math.max, Ee = Math.min, Te = Math.round;
    function Ce() {
        var t = navigator.userAgentData;
        return null != t && t.brands && Array.isArray(t.brands) ? t.brands.map(function(t) {
            return t.brand + "/" + t.version;
        }).join(" ") : navigator.userAgent;
    }
    function Oe() {
        return !/^((?!chrome|android).)*safari/i.test(Ce());
    }
    function xe(t, e, i) {
        void 0 === e && (e = !1), void 0 === i && (i = !1);
        var n = t.getBoundingClientRect(), s = 1, o = 1;
        e && be(t) && (s = t.offsetWidth > 0 && Te(n.width) / t.offsetWidth || 1, o = t.offsetHeight > 0 && Te(n.height) / t.offsetHeight || 1);
        var r = (_e(t) ? ge(t) : window).visualViewport, a = !Oe() && i, l = (n.left + (a && r ? r.offsetLeft : 0)) / s, c = (n.top + (a && r ? r.offsetTop : 0)) / o, h = n.width / s, d = n.height / o;
        return {
            width: h,
            height: d,
            top: c,
            right: l + h,
            bottom: c + d,
            left: l,
            x: l,
            y: c
        };
    }
    function ke(t) {
        var e = xe(t), i = t.offsetWidth, n = t.offsetHeight;
        return Math.abs(e.width - i) <= 1 && (i = e.width), Math.abs(e.height - n) <= 1 && (n = e.height), {
            x: t.offsetLeft,
            y: t.offsetTop,
            width: i,
            height: n
        };
    }
    function Le(t, e) {
        var i = e.getRootNode && e.getRootNode();
        if (t.contains(e)) return !0;
        if (i && ve(i)) {
            var n = e;
            do {
                if (n && t.isSameNode(n)) return !0;
                n = n.parentNode || n.host;
            }while (n);
        }
        return !1;
    }
    function Se(t) {
        return ge(t).getComputedStyle(t);
    }
    function De(t) {
        return [
            "table",
            "td",
            "th"
        ].indexOf(me(t)) >= 0;
    }
    function $e(t) {
        return ((_e(t) ? t.ownerDocument : t.document) || window.document).documentElement;
    }
    function Ie(t) {
        return "html" === me(t) ? t : t.assignedSlot || t.parentNode || (ve(t) ? t.host : null) || $e(t);
    }
    function Ne(t) {
        return be(t) && "fixed" !== Se(t).position ? t.offsetParent : null;
    }
    function Pe(t) {
        for(var e = ge(t), i = Ne(t); i && De(i) && "static" === Se(i).position;)i = Ne(i);
        return i && ("html" === me(i) || "body" === me(i) && "static" === Se(i).position) ? e : i || function(t) {
            var e = /firefox/i.test(Ce());
            if (/Trident/i.test(Ce()) && be(t) && "fixed" === Se(t).position) return null;
            var i = Ie(t);
            for(ve(i) && (i = i.host); be(i) && [
                "html",
                "body"
            ].indexOf(me(i)) < 0;){
                var n = Se(i);
                if ("none" !== n.transform || "none" !== n.perspective || "paint" === n.contain || -1 !== [
                    "transform",
                    "perspective"
                ].indexOf(n.willChange) || e && "filter" === n.willChange || e && n.filter && "none" !== n.filter) return i;
                i = i.parentNode;
            }
            return null;
        }(t) || e;
    }
    function je(t) {
        return [
            "top",
            "bottom"
        ].indexOf(t) >= 0 ? "x" : "y";
    }
    function Me(t, e, i) {
        return Ae(t, Ee(e, i));
    }
    function Fe(t) {
        return Object.assign({}, {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        }, t);
    }
    function He(t, e) {
        return e.reduce(function(e, i) {
            return e[i] = t, e;
        }, {});
    }
    const We = {
        name: "arrow",
        enabled: !0,
        phase: "main",
        fn: function(t) {
            var e, i = t.state, n = t.name, s = t.options, o = i.elements.arrow, r = i.modifiersData.popperOffsets, a = we(i.placement), l = je(a), c = [
                Xt,
                Qt
            ].indexOf(a) >= 0 ? "height" : "width";
            if (o && r) {
                var h = function(t, e) {
                    return Fe("number" != typeof (t = "function" == typeof t ? t(Object.assign({}, e.rects, {
                        placement: e.placement
                    })) : t) ? t : He(t, Ut));
                }(s.padding, i), d = ke(o), u = "y" === l ? Vt : Xt, f = "y" === l ? Kt : Qt, p = i.rects.reference[c] + i.rects.reference[l] - r[l] - i.rects.popper[c], m = r[l] - i.rects.reference[l], g = Pe(o), _ = g ? "y" === l ? g.clientHeight || 0 : g.clientWidth || 0 : 0, b = p / 2 - m / 2, v = h[u], y = _ - d[c] - h[f], w = _ / 2 - d[c] / 2 + b, A = Me(v, w, y), E = l;
                i.modifiersData[n] = ((e = {})[E] = A, e.centerOffset = A - w, e);
            }
        },
        effect: function(t) {
            var e = t.state, i = t.options.element, n = void 0 === i ? "[data-popper-arrow]" : i;
            null != n && ("string" != typeof n || (n = e.elements.popper.querySelector(n))) && Le(e.elements.popper, n) && (e.elements.arrow = n);
        },
        requires: [
            "popperOffsets"
        ],
        requiresIfExists: [
            "preventOverflow"
        ]
    };
    function Be(t) {
        return t.split("-")[1];
    }
    var ze = {
        top: "auto",
        right: "auto",
        bottom: "auto",
        left: "auto"
    };
    function Re(t) {
        var e, i = t.popper, n = t.popperRect, s = t.placement, o = t.variation, r = t.offsets, a = t.position, l = t.gpuAcceleration, c = t.adaptive, h = t.roundOffsets, d = t.isFixed, u = r.x, f = void 0 === u ? 0 : u, p = r.y, m = void 0 === p ? 0 : p, g = "function" == typeof h ? h({
            x: f,
            y: m
        }) : {
            x: f,
            y: m
        };
        f = g.x, m = g.y;
        var _ = r.hasOwnProperty("x"), b = r.hasOwnProperty("y"), v = Xt, y = Vt, w = window;
        if (c) {
            var A = Pe(i), E = "clientHeight", T = "clientWidth";
            A === ge(i) && "static" !== Se(A = $e(i)).position && "absolute" === a && (E = "scrollHeight", T = "scrollWidth"), (s === Vt || (s === Xt || s === Qt) && o === Jt) && (y = Kt, m -= (d && A === w && w.visualViewport ? w.visualViewport.height : A[E]) - n.height, m *= l ? 1 : -1), s !== Xt && (s !== Vt && s !== Kt || o !== Jt) || (v = Qt, f -= (d && A === w && w.visualViewport ? w.visualViewport.width : A[T]) - n.width, f *= l ? 1 : -1);
        }
        var C, O = Object.assign({
            position: a
        }, c && ze), x = !0 === h ? function(t, e) {
            var i = t.x, n = t.y, s = e.devicePixelRatio || 1;
            return {
                x: Te(i * s) / s || 0,
                y: Te(n * s) / s || 0
            };
        }({
            x: f,
            y: m
        }, ge(i)) : {
            x: f,
            y: m
        };
        return f = x.x, m = x.y, l ? Object.assign({}, O, ((C = {})[y] = b ? "0" : "", C[v] = _ ? "0" : "", C.transform = (w.devicePixelRatio || 1) <= 1 ? "translate(" + f + "px, " + m + "px)" : "translate3d(" + f + "px, " + m + "px, 0)", C)) : Object.assign({}, O, ((e = {})[y] = b ? m + "px" : "", e[v] = _ ? f + "px" : "", e.transform = "", e));
    }
    const qe = {
        name: "computeStyles",
        enabled: !0,
        phase: "beforeWrite",
        fn: function(t) {
            var e = t.state, i = t.options, n = i.gpuAcceleration, s = void 0 === n || n, o = i.adaptive, r = void 0 === o || o, a = i.roundOffsets, l = void 0 === a || a, c = {
                placement: we(e.placement),
                variation: Be(e.placement),
                popper: e.elements.popper,
                popperRect: e.rects.popper,
                gpuAcceleration: s,
                isFixed: "fixed" === e.options.strategy
            };
            null != e.modifiersData.popperOffsets && (e.styles.popper = Object.assign({}, e.styles.popper, Re(Object.assign({}, c, {
                offsets: e.modifiersData.popperOffsets,
                position: e.options.strategy,
                adaptive: r,
                roundOffsets: l
            })))), null != e.modifiersData.arrow && (e.styles.arrow = Object.assign({}, e.styles.arrow, Re(Object.assign({}, c, {
                offsets: e.modifiersData.arrow,
                position: "absolute",
                adaptive: !1,
                roundOffsets: l
            })))), e.attributes.popper = Object.assign({}, e.attributes.popper, {
                "data-popper-placement": e.placement
            });
        },
        data: {}
    };
    var Ve = {
        passive: !0
    };
    const Ke = {
        name: "eventListeners",
        enabled: !0,
        phase: "write",
        fn: function() {},
        effect: function(t) {
            var e = t.state, i = t.instance, n = t.options, s = n.scroll, o = void 0 === s || s, r = n.resize, a = void 0 === r || r, l = ge(e.elements.popper), c = [].concat(e.scrollParents.reference, e.scrollParents.popper);
            return o && c.forEach(function(t) {
                t.addEventListener("scroll", i.update, Ve);
            }), a && l.addEventListener("resize", i.update, Ve), function() {
                o && c.forEach(function(t) {
                    t.removeEventListener("scroll", i.update, Ve);
                }), a && l.removeEventListener("resize", i.update, Ve);
            };
        },
        data: {}
    };
    var Qe = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom"
    };
    function Xe(t) {
        return t.replace(/left|right|bottom|top/g, function(t) {
            return Qe[t];
        });
    }
    var Ye = {
        start: "end",
        end: "start"
    };
    function Ue(t) {
        return t.replace(/start|end/g, function(t) {
            return Ye[t];
        });
    }
    function Ge(t) {
        var e = ge(t);
        return {
            scrollLeft: e.pageXOffset,
            scrollTop: e.pageYOffset
        };
    }
    function Je(t) {
        return xe($e(t)).left + Ge(t).scrollLeft;
    }
    function Ze(t) {
        var e = Se(t), i = e.overflow, n = e.overflowX, s = e.overflowY;
        return /auto|scroll|overlay|hidden/.test(i + s + n);
    }
    function ti(t) {
        return [
            "html",
            "body",
            "#document"
        ].indexOf(me(t)) >= 0 ? t.ownerDocument.body : be(t) && Ze(t) ? t : ti(Ie(t));
    }
    function ei(t, e) {
        var i;
        void 0 === e && (e = []);
        var n = ti(t), s = n === (null == (i = t.ownerDocument) ? void 0 : i.body), o = ge(n), r = s ? [
            o
        ].concat(o.visualViewport || [], Ze(n) ? n : []) : n, a = e.concat(r);
        return s ? a : a.concat(ei(Ie(r)));
    }
    function ii(t) {
        return Object.assign({}, t, {
            left: t.x,
            top: t.y,
            right: t.x + t.width,
            bottom: t.y + t.height
        });
    }
    function ni(t, e, i) {
        return e === te ? ii(function(t, e) {
            var i = ge(t), n = $e(t), s = i.visualViewport, o = n.clientWidth, r = n.clientHeight, a = 0, l = 0;
            if (s) {
                o = s.width, r = s.height;
                var c = Oe();
                (c || !c && "fixed" === e) && (a = s.offsetLeft, l = s.offsetTop);
            }
            return {
                width: o,
                height: r,
                x: a + Je(t),
                y: l
            };
        }(t, i)) : _e(e) ? function(t, e) {
            var i = xe(t, !1, "fixed" === e);
            return i.top = i.top + t.clientTop, i.left = i.left + t.clientLeft, i.bottom = i.top + t.clientHeight, i.right = i.left + t.clientWidth, i.width = t.clientWidth, i.height = t.clientHeight, i.x = i.left, i.y = i.top, i;
        }(e, i) : ii(function(t) {
            var e, i = $e(t), n = Ge(t), s = null == (e = t.ownerDocument) ? void 0 : e.body, o = Ae(i.scrollWidth, i.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0), r = Ae(i.scrollHeight, i.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0), a = -n.scrollLeft + Je(t), l = -n.scrollTop;
            return "rtl" === Se(s || i).direction && (a += Ae(i.clientWidth, s ? s.clientWidth : 0) - o), {
                width: o,
                height: r,
                x: a,
                y: l
            };
        }($e(t)));
    }
    function si(t) {
        var e, i = t.reference, n = t.element, s = t.placement, o = s ? we(s) : null, r = s ? Be(s) : null, a = i.x + i.width / 2 - n.width / 2, l = i.y + i.height / 2 - n.height / 2;
        switch(o){
            case Vt:
                e = {
                    x: a,
                    y: i.y - n.height
                };
                break;
            case Kt:
                e = {
                    x: a,
                    y: i.y + i.height
                };
                break;
            case Qt:
                e = {
                    x: i.x + i.width,
                    y: l
                };
                break;
            case Xt:
                e = {
                    x: i.x - n.width,
                    y: l
                };
                break;
            default:
                e = {
                    x: i.x,
                    y: i.y
                };
        }
        var c = o ? je(o) : null;
        if (null != c) {
            var h = "y" === c ? "height" : "width";
            switch(r){
                case Gt:
                    e[c] = e[c] - (i[h] / 2 - n[h] / 2);
                    break;
                case Jt:
                    e[c] = e[c] + (i[h] / 2 - n[h] / 2);
            }
        }
        return e;
    }
    function oi(t, e) {
        void 0 === e && (e = {});
        var i = e, n = i.placement, s = void 0 === n ? t.placement : n, o = i.strategy, r = void 0 === o ? t.strategy : o, a = i.boundary, l = void 0 === a ? Zt : a, c = i.rootBoundary, h = void 0 === c ? te : c, d = i.elementContext, u = void 0 === d ? ee : d, f = i.altBoundary, p = void 0 !== f && f, m = i.padding, g = void 0 === m ? 0 : m, _ = Fe("number" != typeof g ? g : He(g, Ut)), b = u === ee ? ie : ee, v = t.rects.popper, y = t.elements[p ? b : u], w = function(t, e, i, n) {
            var s = "clippingParents" === e ? function(t) {
                var e = ei(Ie(t)), i = [
                    "absolute",
                    "fixed"
                ].indexOf(Se(t).position) >= 0 && be(t) ? Pe(t) : t;
                return _e(i) ? e.filter(function(t) {
                    return _e(t) && Le(t, i) && "body" !== me(t);
                }) : [];
            }(t) : [].concat(e), o = [].concat(s, [
                i
            ]), r = o[0], a = o.reduce(function(e, i) {
                var s = ni(t, i, n);
                return e.top = Ae(s.top, e.top), e.right = Ee(s.right, e.right), e.bottom = Ee(s.bottom, e.bottom), e.left = Ae(s.left, e.left), e;
            }, ni(t, r, n));
            return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a;
        }(_e(y) ? y : y.contextElement || $e(t.elements.popper), l, h, r), A = xe(t.elements.reference), E = si({
            reference: A,
            element: v,
            placement: s
        }), T = ii(Object.assign({}, v, E)), C = u === ee ? T : A, O = {
            top: w.top - C.top + _.top,
            bottom: C.bottom - w.bottom + _.bottom,
            left: w.left - C.left + _.left,
            right: C.right - w.right + _.right
        }, x = t.modifiersData.offset;
        if (u === ee && x) {
            var k = x[s];
            Object.keys(O).forEach(function(t) {
                var e = [
                    Qt,
                    Kt
                ].indexOf(t) >= 0 ? 1 : -1, i = [
                    Vt,
                    Kt
                ].indexOf(t) >= 0 ? "y" : "x";
                O[t] += k[i] * e;
            });
        }
        return O;
    }
    function ri(t, e) {
        void 0 === e && (e = {});
        var i = e, n = i.placement, s = i.boundary, o = i.rootBoundary, r = i.padding, a = i.flipVariations, l = i.allowedAutoPlacements, c = void 0 === l ? se : l, h = Be(n), d = h ? a ? ne : ne.filter(function(t) {
            return Be(t) === h;
        }) : Ut, u = d.filter(function(t) {
            return c.indexOf(t) >= 0;
        });
        0 === u.length && (u = d);
        var f = u.reduce(function(e, i) {
            return e[i] = oi(t, {
                placement: i,
                boundary: s,
                rootBoundary: o,
                padding: r
            })[we(i)], e;
        }, {});
        return Object.keys(f).sort(function(t, e) {
            return f[t] - f[e];
        });
    }
    const ai = {
        name: "flip",
        enabled: !0,
        phase: "main",
        fn: function(t) {
            var e = t.state, i = t.options, n = t.name;
            if (!e.modifiersData[n]._skip) {
                for(var s = i.mainAxis, o = void 0 === s || s, r = i.altAxis, a = void 0 === r || r, l = i.fallbackPlacements, c = i.padding, h = i.boundary, d = i.rootBoundary, u = i.altBoundary, f = i.flipVariations, p = void 0 === f || f, m = i.allowedAutoPlacements, g = e.options.placement, _ = we(g), b = l || (_ !== g && p ? function(t) {
                    if (we(t) === Yt) return [];
                    var e = Xe(t);
                    return [
                        Ue(t),
                        e,
                        Ue(e)
                    ];
                }(g) : [
                    Xe(g)
                ]), v = [
                    g
                ].concat(b).reduce(function(t, i) {
                    return t.concat(we(i) === Yt ? ri(e, {
                        placement: i,
                        boundary: h,
                        rootBoundary: d,
                        padding: c,
                        flipVariations: p,
                        allowedAutoPlacements: m
                    }) : i);
                }, []), y = e.rects.reference, w = e.rects.popper, A = new Map, E = !0, T = v[0], C = 0; C < v.length; C++){
                    var O = v[C], x = we(O), k = Be(O) === Gt, L = [
                        Vt,
                        Kt
                    ].indexOf(x) >= 0, S = L ? "width" : "height", D = oi(e, {
                        placement: O,
                        boundary: h,
                        rootBoundary: d,
                        altBoundary: u,
                        padding: c
                    }), $ = L ? k ? Qt : Xt : k ? Kt : Vt;
                    y[S] > w[S] && ($ = Xe($));
                    var I = Xe($), N = [];
                    if (o && N.push(D[x] <= 0), a && N.push(D[$] <= 0, D[I] <= 0), N.every(function(t) {
                        return t;
                    })) {
                        T = O, E = !1;
                        break;
                    }
                    A.set(O, N);
                }
                if (E) for(var P = function(t) {
                    var e = v.find(function(e) {
                        var i = A.get(e);
                        if (i) return i.slice(0, t).every(function(t) {
                            return t;
                        });
                    });
                    if (e) return T = e, "break";
                }, j = p ? 3 : 1; j > 0 && "break" !== P(j); j--);
                e.placement !== T && (e.modifiersData[n]._skip = !0, e.placement = T, e.reset = !0);
            }
        },
        requiresIfExists: [
            "offset"
        ],
        data: {
            _skip: !1
        }
    };
    function li(t, e, i) {
        return void 0 === i && (i = {
            x: 0,
            y: 0
        }), {
            top: t.top - e.height - i.y,
            right: t.right - e.width + i.x,
            bottom: t.bottom - e.height + i.y,
            left: t.left - e.width - i.x
        };
    }
    function ci(t) {
        return [
            Vt,
            Qt,
            Kt,
            Xt
        ].some(function(e) {
            return t[e] >= 0;
        });
    }
    const hi = {
        name: "hide",
        enabled: !0,
        phase: "main",
        requiresIfExists: [
            "preventOverflow"
        ],
        fn: function(t) {
            var e = t.state, i = t.name, n = e.rects.reference, s = e.rects.popper, o = e.modifiersData.preventOverflow, r = oi(e, {
                elementContext: "reference"
            }), a = oi(e, {
                altBoundary: !0
            }), l = li(r, n), c = li(a, s, o), h = ci(l), d = ci(c);
            e.modifiersData[i] = {
                referenceClippingOffsets: l,
                popperEscapeOffsets: c,
                isReferenceHidden: h,
                hasPopperEscaped: d
            }, e.attributes.popper = Object.assign({}, e.attributes.popper, {
                "data-popper-reference-hidden": h,
                "data-popper-escaped": d
            });
        }
    }, di = {
        name: "offset",
        enabled: !0,
        phase: "main",
        requires: [
            "popperOffsets"
        ],
        fn: function(t) {
            var e = t.state, i = t.options, n = t.name, s = i.offset, o = void 0 === s ? [
                0,
                0
            ] : s, r = se.reduce(function(t, i) {
                return t[i] = function(t, e, i) {
                    var n = we(t), s = [
                        Xt,
                        Vt
                    ].indexOf(n) >= 0 ? -1 : 1, o = "function" == typeof i ? i(Object.assign({}, e, {
                        placement: t
                    })) : i, r = o[0], a = o[1];
                    return r = r || 0, a = (a || 0) * s, [
                        Xt,
                        Qt
                    ].indexOf(n) >= 0 ? {
                        x: a,
                        y: r
                    } : {
                        x: r,
                        y: a
                    };
                }(i, e.rects, o), t;
            }, {}), a = r[e.placement], l = a.x, c = a.y;
            null != e.modifiersData.popperOffsets && (e.modifiersData.popperOffsets.x += l, e.modifiersData.popperOffsets.y += c), e.modifiersData[n] = r;
        }
    }, ui = {
        name: "popperOffsets",
        enabled: !0,
        phase: "read",
        fn: function(t) {
            var e = t.state, i = t.name;
            e.modifiersData[i] = si({
                reference: e.rects.reference,
                element: e.rects.popper,
                placement: e.placement
            });
        },
        data: {}
    }, fi = {
        name: "preventOverflow",
        enabled: !0,
        phase: "main",
        fn: function(t) {
            var e = t.state, i = t.options, n = t.name, s = i.mainAxis, o = void 0 === s || s, r = i.altAxis, a = void 0 !== r && r, l = i.boundary, c = i.rootBoundary, h = i.altBoundary, d = i.padding, u = i.tether, f = void 0 === u || u, p = i.tetherOffset, m = void 0 === p ? 0 : p, g = oi(e, {
                boundary: l,
                rootBoundary: c,
                padding: d,
                altBoundary: h
            }), _ = we(e.placement), b = Be(e.placement), v = !b, y = je(_), w = "x" === y ? "y" : "x", A = e.modifiersData.popperOffsets, E = e.rects.reference, T = e.rects.popper, C = "function" == typeof m ? m(Object.assign({}, e.rects, {
                placement: e.placement
            })) : m, O = "number" == typeof C ? {
                mainAxis: C,
                altAxis: C
            } : Object.assign({
                mainAxis: 0,
                altAxis: 0
            }, C), x = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null, k = {
                x: 0,
                y: 0
            };
            if (A) {
                if (o) {
                    var L, S = "y" === y ? Vt : Xt, D = "y" === y ? Kt : Qt, $ = "y" === y ? "height" : "width", I = A[y], N = I + g[S], P = I - g[D], j = f ? -T[$] / 2 : 0, M = b === Gt ? E[$] : T[$], F = b === Gt ? -T[$] : -E[$], H = e.elements.arrow, W = f && H ? ke(H) : {
                        width: 0,
                        height: 0
                    }, B = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0
                    }, z = B[S], R = B[D], q = Me(0, E[$], W[$]), V = v ? E[$] / 2 - j - q - z - O.mainAxis : M - q - z - O.mainAxis, K = v ? -E[$] / 2 + j + q + R + O.mainAxis : F + q + R + O.mainAxis, Q = e.elements.arrow && Pe(e.elements.arrow), X = Q ? "y" === y ? Q.clientTop || 0 : Q.clientLeft || 0 : 0, Y = null != (L = null == x ? void 0 : x[y]) ? L : 0, U = I + K - Y, G = Me(f ? Ee(N, I + V - Y - X) : N, I, f ? Ae(P, U) : P);
                    A[y] = G, k[y] = G - I;
                }
                if (a) {
                    var J, Z = "x" === y ? Vt : Xt, tt = "x" === y ? Kt : Qt, et = A[w], it = "y" === w ? "height" : "width", nt = et + g[Z], st = et - g[tt], ot = -1 !== [
                        Vt,
                        Xt
                    ].indexOf(_), rt = null != (J = null == x ? void 0 : x[w]) ? J : 0, at = ot ? nt : et - E[it] - T[it] - rt + O.altAxis, lt = ot ? et + E[it] + T[it] - rt - O.altAxis : st, ct = f && ot ? function(t, e, i) {
                        var n = Me(t, e, i);
                        return n > i ? i : n;
                    }(at, et, lt) : Me(f ? at : nt, et, f ? lt : st);
                    A[w] = ct, k[w] = ct - et;
                }
                e.modifiersData[n] = k;
            }
        },
        requiresIfExists: [
            "offset"
        ]
    };
    function pi(t, e, i) {
        void 0 === i && (i = !1);
        var n, s, o = be(e), r = be(e) && function(t) {
            var e = t.getBoundingClientRect(), i = Te(e.width) / t.offsetWidth || 1, n = Te(e.height) / t.offsetHeight || 1;
            return 1 !== i || 1 !== n;
        }(e), a = $e(e), l = xe(t, r, i), c = {
            scrollLeft: 0,
            scrollTop: 0
        }, h = {
            x: 0,
            y: 0
        };
        return (o || !o && !i) && (("body" !== me(e) || Ze(a)) && (c = (n = e) !== ge(n) && be(n) ? {
            scrollLeft: (s = n).scrollLeft,
            scrollTop: s.scrollTop
        } : Ge(n)), be(e) ? ((h = xe(e, !0)).x += e.clientLeft, h.y += e.clientTop) : a && (h.x = Je(a))), {
            x: l.left + c.scrollLeft - h.x,
            y: l.top + c.scrollTop - h.y,
            width: l.width,
            height: l.height
        };
    }
    function mi(t) {
        var e = new Map, i = new Set, n = [];
        function s(t) {
            i.add(t.name), [].concat(t.requires || [], t.requiresIfExists || []).forEach(function(t) {
                if (!i.has(t)) {
                    var n = e.get(t);
                    n && s(n);
                }
            }), n.push(t);
        }
        return t.forEach(function(t) {
            e.set(t.name, t);
        }), t.forEach(function(t) {
            i.has(t.name) || s(t);
        }), n;
    }
    var gi = {
        placement: "bottom",
        modifiers: [],
        strategy: "absolute"
    };
    function _i() {
        for(var t = arguments.length, e = new Array(t), i = 0; i < t; i++)e[i] = arguments[i];
        return !e.some(function(t) {
            return !(t && "function" == typeof t.getBoundingClientRect);
        });
    }
    function bi(t) {
        void 0 === t && (t = {});
        var e = t, i = e.defaultModifiers, n = void 0 === i ? [] : i, s = e.defaultOptions, o = void 0 === s ? gi : s;
        return function(t, e, i) {
            void 0 === i && (i = o);
            var s, r, a = {
                placement: "bottom",
                orderedModifiers: [],
                options: Object.assign({}, gi, o),
                modifiersData: {},
                elements: {
                    reference: t,
                    popper: e
                },
                attributes: {},
                styles: {}
            }, l = [], c = !1, h = {
                state: a,
                setOptions: function(i) {
                    var s = "function" == typeof i ? i(a.options) : i;
                    d(), a.options = Object.assign({}, o, a.options, s), a.scrollParents = {
                        reference: _e(t) ? ei(t) : t.contextElement ? ei(t.contextElement) : [],
                        popper: ei(e)
                    };
                    var r, c, u = function(t) {
                        var e = mi(t);
                        return pe.reduce(function(t, i) {
                            return t.concat(e.filter(function(t) {
                                return t.phase === i;
                            }));
                        }, []);
                    }((r = [].concat(n, a.options.modifiers), c = r.reduce(function(t, e) {
                        var i = t[e.name];
                        return t[e.name] = i ? Object.assign({}, i, e, {
                            options: Object.assign({}, i.options, e.options),
                            data: Object.assign({}, i.data, e.data)
                        }) : e, t;
                    }, {}), Object.keys(c).map(function(t) {
                        return c[t];
                    })));
                    return a.orderedModifiers = u.filter(function(t) {
                        return t.enabled;
                    }), a.orderedModifiers.forEach(function(t) {
                        var e = t.name, i = t.options, n = void 0 === i ? {} : i, s = t.effect;
                        if ("function" == typeof s) {
                            var o = s({
                                state: a,
                                name: e,
                                instance: h,
                                options: n
                            });
                            l.push(o || function() {});
                        }
                    }), h.update();
                },
                forceUpdate: function() {
                    if (!c) {
                        var t = a.elements, e = t.reference, i = t.popper;
                        if (_i(e, i)) {
                            a.rects = {
                                reference: pi(e, Pe(i), "fixed" === a.options.strategy),
                                popper: ke(i)
                            }, a.reset = !1, a.placement = a.options.placement, a.orderedModifiers.forEach(function(t) {
                                return a.modifiersData[t.name] = Object.assign({}, t.data);
                            });
                            for(var n = 0; n < a.orderedModifiers.length; n++)if (!0 !== a.reset) {
                                var s = a.orderedModifiers[n], o = s.fn, r = s.options, l = void 0 === r ? {} : r, d = s.name;
                                "function" == typeof o && (a = o({
                                    state: a,
                                    options: l,
                                    name: d,
                                    instance: h
                                }) || a);
                            } else a.reset = !1, n = -1;
                        }
                    }
                },
                update: (s = function() {
                    return new Promise(function(t) {
                        h.forceUpdate(), t(a);
                    });
                }, function() {
                    return r || (r = new Promise(function(t) {
                        Promise.resolve().then(function() {
                            r = void 0, t(s());
                        });
                    })), r;
                }),
                destroy: function() {
                    d(), c = !0;
                }
            };
            if (!_i(t, e)) return h;
            function d() {
                l.forEach(function(t) {
                    return t();
                }), l = [];
            }
            return h.setOptions(i).then(function(t) {
                !c && i.onFirstUpdate && i.onFirstUpdate(t);
            }), h;
        };
    }
    var vi = bi(), yi = bi({
        defaultModifiers: [
            Ke,
            ui,
            qe,
            ye
        ]
    }), wi = bi({
        defaultModifiers: [
            Ke,
            ui,
            qe,
            ye,
            di,
            ai,
            fi,
            We,
            hi
        ]
    });
    const Ai = Object.freeze(Object.defineProperty({
        __proto__: null,
        afterMain: he,
        afterRead: ae,
        afterWrite: fe,
        applyStyles: ye,
        arrow: We,
        auto: Yt,
        basePlacements: Ut,
        beforeMain: le,
        beforeRead: oe,
        beforeWrite: de,
        bottom: Kt,
        clippingParents: Zt,
        computeStyles: qe,
        createPopper: wi,
        createPopperBase: vi,
        createPopperLite: yi,
        detectOverflow: oi,
        end: Jt,
        eventListeners: Ke,
        flip: ai,
        hide: hi,
        left: Xt,
        main: ce,
        modifierPhases: pe,
        offset: di,
        placements: se,
        popper: ee,
        popperGenerator: bi,
        popperOffsets: ui,
        preventOverflow: fi,
        read: re,
        reference: ie,
        right: Qt,
        start: Gt,
        top: Vt,
        variationPlacements: ne,
        viewport: te,
        write: ue
    }, Symbol.toStringTag, {
        value: "Module"
    })), Ei = "dropdown", Ti = ".bs.dropdown", Ci = ".data-api", Oi = "ArrowUp", xi = "ArrowDown", ki = `hide${Ti}`, Li = `hidden${Ti}`, Si = `show${Ti}`, Di = `shown${Ti}`, $i = `click${Ti}${Ci}`, Ii = `keydown${Ti}${Ci}`, Ni = `keyup${Ti}${Ci}`, Pi = "show", ji = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)', Mi = `${ji}.${Pi}`, Fi = ".dropdown-menu", Hi = m() ? "top-end" : "top-start", Wi = m() ? "top-start" : "top-end", Bi = m() ? "bottom-end" : "bottom-start", zi = m() ? "bottom-start" : "bottom-end", Ri = m() ? "left-start" : "right-start", qi = m() ? "right-start" : "left-start", Vi = {
        autoClose: !0,
        boundary: "clippingParents",
        display: "dynamic",
        offset: [
            0,
            2
        ],
        popperConfig: null,
        reference: "toggle"
    }, Ki = {
        autoClose: "(boolean|string)",
        boundary: "(string|element)",
        display: "string",
        offset: "(array|string|function)",
        popperConfig: "(null|object|function)",
        reference: "(string|element|object)"
    };
    class Qi extends B {
        constructor(t, e){
            super(t, e), this._popper = null, this._parent = this._element.parentNode, this._menu = R.next(this._element, Fi)[0] || R.prev(this._element, Fi)[0] || R.findOne(Fi, this._parent), this._inNavbar = this._detectNavbar();
        }
        static get Default() {
            return Vi;
        }
        static get DefaultType() {
            return Ki;
        }
        static get NAME() {
            return Ei;
        }
        toggle() {
            return this._isShown() ? this.hide() : this.show();
        }
        show() {
            if (c(this._element) || this._isShown()) return;
            const t = {
                relatedTarget: this._element
            };
            if (!P.trigger(this._element, Si, t).defaultPrevented) {
                if (this._createPopper(), "ontouchstart" in document.documentElement && !this._parent.closest(".navbar-nav")) for (const t of [].concat(...document.body.children))P.on(t, "mouseover", d);
                this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add(Pi), this._element.classList.add(Pi), P.trigger(this._element, Di, t);
            }
        }
        hide() {
            if (c(this._element) || !this._isShown()) return;
            const t = {
                relatedTarget: this._element
            };
            this._completeHide(t);
        }
        dispose() {
            this._popper && this._popper.destroy(), super.dispose();
        }
        update() {
            this._inNavbar = this._detectNavbar(), this._popper && this._popper.update();
        }
        _completeHide(t) {
            if (!P.trigger(this._element, ki, t).defaultPrevented) {
                if ("ontouchstart" in document.documentElement) for (const t of [].concat(...document.body.children))P.off(t, "mouseover", d);
                this._popper && this._popper.destroy(), this._menu.classList.remove(Pi), this._element.classList.remove(Pi), this._element.setAttribute("aria-expanded", "false"), H.removeDataAttribute(this._menu, "popper"), P.trigger(this._element, Li, t);
            }
        }
        _getConfig(t) {
            if ("object" == typeof (t = super._getConfig(t)).reference && !r(t.reference) && "function" != typeof t.reference.getBoundingClientRect) throw new TypeError(`${Ei.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
            return t;
        }
        _createPopper() {
            if (void 0 === Ai) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org/docs/v2/)");
            let t = this._element;
            "parent" === this._config.reference ? t = this._parent : r(this._config.reference) ? t = a(this._config.reference) : "object" == typeof this._config.reference && (t = this._config.reference);
            const e = this._getPopperConfig();
            this._popper = wi(t, this._menu, e);
        }
        _isShown() {
            return this._menu.classList.contains(Pi);
        }
        _getPlacement() {
            const t = this._parent;
            if (t.classList.contains("dropend")) return Ri;
            if (t.classList.contains("dropstart")) return qi;
            if (t.classList.contains("dropup-center")) return "top";
            if (t.classList.contains("dropdown-center")) return "bottom";
            const e = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
            return t.classList.contains("dropup") ? e ? Wi : Hi : e ? zi : Bi;
        }
        _detectNavbar() {
            return null !== this._element.closest(".navbar");
        }
        _getOffset() {
            const { offset: t } = this._config;
            return "string" == typeof t ? t.split(",").map((t)=>Number.parseInt(t, 10)) : "function" == typeof t ? (e)=>t(e, this._element) : t;
        }
        _getPopperConfig() {
            const t = {
                placement: this._getPlacement(),
                modifiers: [
                    {
                        name: "preventOverflow",
                        options: {
                            boundary: this._config.boundary
                        }
                    },
                    {
                        name: "offset",
                        options: {
                            offset: this._getOffset()
                        }
                    }
                ]
            };
            return (this._inNavbar || "static" === this._config.display) && (H.setDataAttribute(this._menu, "popper", "static"), t.modifiers = [
                {
                    name: "applyStyles",
                    enabled: !1
                }
            ]), {
                ...t,
                ..._(this._config.popperConfig, [
                    void 0,
                    t
                ])
            };
        }
        _selectMenuItem({ key: t, target: e }) {
            const i = R.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter((t)=>l(t));
            i.length && v(i, e, t === xi, !i.includes(e)).focus();
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e = Qi.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                    e[t]();
                }
            });
        }
        static clearMenus(t) {
            if (2 === t.button || "keyup" === t.type && "Tab" !== t.key) return;
            const e = R.find(Mi);
            for (const i of e){
                const e = Qi.getInstance(i);
                if (!e || !1 === e._config.autoClose) continue;
                const n = t.composedPath(), s = n.includes(e._menu);
                if (n.includes(e._element) || "inside" === e._config.autoClose && !s || "outside" === e._config.autoClose && s) continue;
                if (e._menu.contains(t.target) && ("keyup" === t.type && "Tab" === t.key || /input|select|option|textarea|form/i.test(t.target.tagName))) continue;
                const o = {
                    relatedTarget: e._element
                };
                "click" === t.type && (o.clickEvent = t), e._completeHide(o);
            }
        }
        static dataApiKeydownHandler(t) {
            const e = /input|textarea/i.test(t.target.tagName), i = "Escape" === t.key, n = [
                Oi,
                xi
            ].includes(t.key);
            if (!n && !i) return;
            if (e && !i) return;
            t.preventDefault();
            const s = this.matches(ji) ? this : R.prev(this, ji)[0] || R.next(this, ji)[0] || R.findOne(ji, t.delegateTarget.parentNode), o = Qi.getOrCreateInstance(s);
            if (n) return t.stopPropagation(), o.show(), void o._selectMenuItem(t);
            o._isShown() && (t.stopPropagation(), o.hide(), s.focus());
        }
    }
    P.on(document, Ii, ji, Qi.dataApiKeydownHandler), P.on(document, Ii, Fi, Qi.dataApiKeydownHandler), P.on(document, $i, Qi.clearMenus), P.on(document, Ni, Qi.clearMenus), P.on(document, $i, ji, function(t) {
        t.preventDefault(), Qi.getOrCreateInstance(this).toggle();
    }), g(Qi);
    const Xi = "backdrop", Yi = "show", Ui = `mousedown.bs.${Xi}`, Gi = {
        className: "modal-backdrop",
        clickCallback: null,
        isAnimated: !1,
        isVisible: !0,
        rootElement: "body"
    }, Ji = {
        className: "string",
        clickCallback: "(function|null)",
        isAnimated: "boolean",
        isVisible: "boolean",
        rootElement: "(element|string)"
    };
    class Zi extends W {
        constructor(t){
            super(), this._config = this._getConfig(t), this._isAppended = !1, this._element = null;
        }
        static get Default() {
            return Gi;
        }
        static get DefaultType() {
            return Ji;
        }
        static get NAME() {
            return Xi;
        }
        show(t) {
            if (!this._config.isVisible) return void _(t);
            this._append();
            const e = this._getElement();
            this._config.isAnimated && u(e), e.classList.add(Yi), this._emulateAnimation(()=>{
                _(t);
            });
        }
        hide(t) {
            this._config.isVisible ? (this._getElement().classList.remove(Yi), this._emulateAnimation(()=>{
                this.dispose(), _(t);
            })) : _(t);
        }
        dispose() {
            this._isAppended && (P.off(this._element, Ui), this._element.remove(), this._isAppended = !1);
        }
        _getElement() {
            if (!this._element) {
                const t = document.createElement("div");
                t.className = this._config.className, this._config.isAnimated && t.classList.add("fade"), this._element = t;
            }
            return this._element;
        }
        _configAfterMerge(t) {
            return t.rootElement = a(t.rootElement), t;
        }
        _append() {
            if (this._isAppended) return;
            const t = this._getElement();
            this._config.rootElement.append(t), P.on(t, Ui, ()=>{
                _(this._config.clickCallback);
            }), this._isAppended = !0;
        }
        _emulateAnimation(t) {
            b(t, this._getElement(), this._config.isAnimated);
        }
    }
    const tn = ".bs.focustrap", en = `focusin${tn}`, nn = `keydown.tab${tn}`, sn = "backward", on = {
        autofocus: !0,
        trapElement: null
    }, rn = {
        autofocus: "boolean",
        trapElement: "element"
    };
    class an extends W {
        constructor(t){
            super(), this._config = this._getConfig(t), this._isActive = !1, this._lastTabNavDirection = null;
        }
        static get Default() {
            return on;
        }
        static get DefaultType() {
            return rn;
        }
        static get NAME() {
            return "focustrap";
        }
        activate() {
            this._isActive || (this._config.autofocus && this._config.trapElement.focus(), P.off(document, tn), P.on(document, en, (t)=>this._handleFocusin(t)), P.on(document, nn, (t)=>this._handleKeydown(t)), this._isActive = !0);
        }
        deactivate() {
            this._isActive && (this._isActive = !1, P.off(document, tn));
        }
        _handleFocusin(t) {
            const { trapElement: e } = this._config;
            if (t.target === document || t.target === e || e.contains(t.target)) return;
            const i = R.focusableChildren(e);
            0 === i.length ? e.focus() : this._lastTabNavDirection === sn ? i[i.length - 1].focus() : i[0].focus();
        }
        _handleKeydown(t) {
            "Tab" === t.key && (this._lastTabNavDirection = t.shiftKey ? sn : "forward");
        }
    }
    const ln = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", cn = ".sticky-top", hn = "padding-right", dn = "margin-right";
    class un {
        constructor(){
            this._element = document.body;
        }
        getWidth() {
            const t = document.documentElement.clientWidth;
            return Math.abs(window.innerWidth - t);
        }
        hide() {
            const t = this.getWidth();
            this._disableOverFlow(), this._setElementAttributes(this._element, hn, (e)=>e + t), this._setElementAttributes(ln, hn, (e)=>e + t), this._setElementAttributes(cn, dn, (e)=>e - t);
        }
        reset() {
            this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, hn), this._resetElementAttributes(ln, hn), this._resetElementAttributes(cn, dn);
        }
        isOverflowing() {
            return this.getWidth() > 0;
        }
        _disableOverFlow() {
            this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden";
        }
        _setElementAttributes(t, e, i) {
            const n = this.getWidth();
            this._applyManipulationCallback(t, (t)=>{
                if (t !== this._element && window.innerWidth > t.clientWidth + n) return;
                this._saveInitialAttribute(t, e);
                const s = window.getComputedStyle(t).getPropertyValue(e);
                t.style.setProperty(e, `${i(Number.parseFloat(s))}px`);
            });
        }
        _saveInitialAttribute(t, e) {
            const i = t.style.getPropertyValue(e);
            i && H.setDataAttribute(t, e, i);
        }
        _resetElementAttributes(t, e) {
            this._applyManipulationCallback(t, (t)=>{
                const i = H.getDataAttribute(t, e);
                null !== i ? (H.removeDataAttribute(t, e), t.style.setProperty(e, i)) : t.style.removeProperty(e);
            });
        }
        _applyManipulationCallback(t, e) {
            if (r(t)) e(t);
            else for (const i of R.find(t, this._element))e(i);
        }
    }
    const fn = ".bs.modal", pn = `hide${fn}`, mn = `hidePrevented${fn}`, gn = `hidden${fn}`, _n = `show${fn}`, bn = `shown${fn}`, vn = `resize${fn}`, yn = `click.dismiss${fn}`, wn = `mousedown.dismiss${fn}`, An = `keydown.dismiss${fn}`, En = `click${fn}.data-api`, Tn = "modal-open", Cn = "show", On = "modal-static", xn = {
        backdrop: !0,
        focus: !0,
        keyboard: !0
    }, kn = {
        backdrop: "(boolean|string)",
        focus: "boolean",
        keyboard: "boolean"
    };
    class Ln extends B {
        constructor(t, e){
            super(t, e), this._dialog = R.findOne(".modal-dialog", this._element), this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._isShown = !1, this._isTransitioning = !1, this._scrollBar = new un, this._addEventListeners();
        }
        static get Default() {
            return xn;
        }
        static get DefaultType() {
            return kn;
        }
        static get NAME() {
            return "modal";
        }
        toggle(t) {
            return this._isShown ? this.hide() : this.show(t);
        }
        show(t) {
            this._isShown || this._isTransitioning || P.trigger(this._element, _n, {
                relatedTarget: t
            }).defaultPrevented || (this._isShown = !0, this._isTransitioning = !0, this._scrollBar.hide(), document.body.classList.add(Tn), this._adjustDialog(), this._backdrop.show(()=>this._showElement(t)));
        }
        hide() {
            this._isShown && !this._isTransitioning && (P.trigger(this._element, pn).defaultPrevented || (this._isShown = !1, this._isTransitioning = !0, this._focustrap.deactivate(), this._element.classList.remove(Cn), this._queueCallback(()=>this._hideModal(), this._element, this._isAnimated())));
        }
        dispose() {
            P.off(window, fn), P.off(this._dialog, fn), this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
        }
        handleUpdate() {
            this._adjustDialog();
        }
        _initializeBackDrop() {
            return new Zi({
                isVisible: Boolean(this._config.backdrop),
                isAnimated: this._isAnimated()
            });
        }
        _initializeFocusTrap() {
            return new an({
                trapElement: this._element
            });
        }
        _showElement(t) {
            document.body.contains(this._element) || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0;
            const e = R.findOne(".modal-body", this._dialog);
            e && (e.scrollTop = 0), u(this._element), this._element.classList.add(Cn), this._queueCallback(()=>{
                this._config.focus && this._focustrap.activate(), this._isTransitioning = !1, P.trigger(this._element, bn, {
                    relatedTarget: t
                });
            }, this._dialog, this._isAnimated());
        }
        _addEventListeners() {
            P.on(this._element, An, (t)=>{
                "Escape" === t.key && (this._config.keyboard ? this.hide() : this._triggerBackdropTransition());
            }), P.on(window, vn, ()=>{
                this._isShown && !this._isTransitioning && this._adjustDialog();
            }), P.on(this._element, wn, (t)=>{
                P.one(this._element, yn, (e)=>{
                    this._element === t.target && this._element === e.target && ("static" !== this._config.backdrop ? this._config.backdrop && this.hide() : this._triggerBackdropTransition());
                });
            });
        }
        _hideModal() {
            this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._backdrop.hide(()=>{
                document.body.classList.remove(Tn), this._resetAdjustments(), this._scrollBar.reset(), P.trigger(this._element, gn);
            });
        }
        _isAnimated() {
            return this._element.classList.contains("fade");
        }
        _triggerBackdropTransition() {
            if (P.trigger(this._element, mn).defaultPrevented) return;
            const t = this._element.scrollHeight > document.documentElement.clientHeight, e = this._element.style.overflowY;
            "hidden" === e || this._element.classList.contains(On) || (t || (this._element.style.overflowY = "hidden"), this._element.classList.add(On), this._queueCallback(()=>{
                this._element.classList.remove(On), this._queueCallback(()=>{
                    this._element.style.overflowY = e;
                }, this._dialog);
            }, this._dialog), this._element.focus());
        }
        _adjustDialog() {
            const t = this._element.scrollHeight > document.documentElement.clientHeight, e = this._scrollBar.getWidth(), i = e > 0;
            if (i && !t) {
                const t = m() ? "paddingLeft" : "paddingRight";
                this._element.style[t] = `${e}px`;
            }
            if (!i && t) {
                const t = m() ? "paddingRight" : "paddingLeft";
                this._element.style[t] = `${e}px`;
            }
        }
        _resetAdjustments() {
            this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
        }
        static jQueryInterface(t, e) {
            return this.each(function() {
                const i = Ln.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === i[t]) throw new TypeError(`No method named "${t}"`);
                    i[t](e);
                }
            });
        }
    }
    P.on(document, En, '[data-bs-toggle="modal"]', function(t) {
        const e = R.getElementFromSelector(this);
        [
            "A",
            "AREA"
        ].includes(this.tagName) && t.preventDefault(), P.one(e, _n, (t)=>{
            t.defaultPrevented || P.one(e, gn, ()=>{
                l(this) && this.focus();
            });
        });
        const i = R.findOne(".modal.show");
        i && Ln.getInstance(i).hide(), Ln.getOrCreateInstance(e).toggle(this);
    }), q(Ln), g(Ln);
    const Sn = ".bs.offcanvas", Dn = ".data-api", $n = `load${Sn}${Dn}`, In = "show", Nn = "showing", Pn = "hiding", jn = ".offcanvas.show", Mn = `show${Sn}`, Fn = `shown${Sn}`, Hn = `hide${Sn}`, Wn = `hidePrevented${Sn}`, Bn = `hidden${Sn}`, zn = `resize${Sn}`, Rn = `click${Sn}${Dn}`, qn = `keydown.dismiss${Sn}`, Vn = {
        backdrop: !0,
        keyboard: !0,
        scroll: !1
    }, Kn = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        scroll: "boolean"
    };
    class Qn extends B {
        constructor(t, e){
            super(t, e), this._isShown = !1, this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._addEventListeners();
        }
        static get Default() {
            return Vn;
        }
        static get DefaultType() {
            return Kn;
        }
        static get NAME() {
            return "offcanvas";
        }
        toggle(t) {
            return this._isShown ? this.hide() : this.show(t);
        }
        show(t) {
            this._isShown || P.trigger(this._element, Mn, {
                relatedTarget: t
            }).defaultPrevented || (this._isShown = !0, this._backdrop.show(), this._config.scroll || (new un).hide(), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add(Nn), this._queueCallback(()=>{
                this._config.scroll && !this._config.backdrop || this._focustrap.activate(), this._element.classList.add(In), this._element.classList.remove(Nn), P.trigger(this._element, Fn, {
                    relatedTarget: t
                });
            }, this._element, !0));
        }
        hide() {
            this._isShown && (P.trigger(this._element, Hn).defaultPrevented || (this._focustrap.deactivate(), this._element.blur(), this._isShown = !1, this._element.classList.add(Pn), this._backdrop.hide(), this._queueCallback(()=>{
                this._element.classList.remove(In, Pn), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._config.scroll || (new un).reset(), P.trigger(this._element, Bn);
            }, this._element, !0)));
        }
        dispose() {
            this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
        }
        _initializeBackDrop() {
            const t = Boolean(this._config.backdrop);
            return new Zi({
                className: "offcanvas-backdrop",
                isVisible: t,
                isAnimated: !0,
                rootElement: this._element.parentNode,
                clickCallback: t ? ()=>{
                    "static" !== this._config.backdrop ? this.hide() : P.trigger(this._element, Wn);
                } : null
            });
        }
        _initializeFocusTrap() {
            return new an({
                trapElement: this._element
            });
        }
        _addEventListeners() {
            P.on(this._element, qn, (t)=>{
                "Escape" === t.key && (this._config.keyboard ? this.hide() : P.trigger(this._element, Wn));
            });
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e = Qn.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
                    e[t](this);
                }
            });
        }
    }
    P.on(document, Rn, '[data-bs-toggle="offcanvas"]', function(t) {
        const e = R.getElementFromSelector(this);
        if ([
            "A",
            "AREA"
        ].includes(this.tagName) && t.preventDefault(), c(this)) return;
        P.one(e, Bn, ()=>{
            l(this) && this.focus();
        });
        const i = R.findOne(jn);
        i && i !== e && Qn.getInstance(i).hide(), Qn.getOrCreateInstance(e).toggle(this);
    }), P.on(window, $n, ()=>{
        for (const t of R.find(jn))Qn.getOrCreateInstance(t).show();
    }), P.on(window, zn, ()=>{
        for (const t of R.find("[aria-modal][class*=show][class*=offcanvas-]"))"fixed" !== getComputedStyle(t).position && Qn.getOrCreateInstance(t).hide();
    }), q(Qn), g(Qn);
    const Xn = {
        "*": [
            "class",
            "dir",
            "id",
            "lang",
            "role",
            /^aria-[\w-]*$/i
        ],
        a: [
            "target",
            "href",
            "title",
            "rel"
        ],
        area: [],
        b: [],
        br: [],
        col: [],
        code: [],
        dd: [],
        div: [],
        dl: [],
        dt: [],
        em: [],
        hr: [],
        h1: [],
        h2: [],
        h3: [],
        h4: [],
        h5: [],
        h6: [],
        i: [],
        img: [
            "src",
            "srcset",
            "alt",
            "title",
            "width",
            "height"
        ],
        li: [],
        ol: [],
        p: [],
        pre: [],
        s: [],
        small: [],
        span: [],
        sub: [],
        sup: [],
        strong: [],
        u: [],
        ul: []
    }, Yn = new Set([
        "background",
        "cite",
        "href",
        "itemtype",
        "longdesc",
        "poster",
        "src",
        "xlink:href"
    ]), Un = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i, Gn = (t, e)=>{
        const i = t.nodeName.toLowerCase();
        return e.includes(i) ? !Yn.has(i) || Boolean(Un.test(t.nodeValue)) : e.filter((t)=>t instanceof RegExp).some((t)=>t.test(i));
    }, Jn = {
        allowList: Xn,
        content: {},
        extraClass: "",
        html: !1,
        sanitize: !0,
        sanitizeFn: null,
        template: "<div></div>"
    }, Zn = {
        allowList: "object",
        content: "object",
        extraClass: "(string|function)",
        html: "boolean",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        template: "string"
    }, ts = {
        entry: "(string|element|function|null)",
        selector: "(string|element)"
    };
    class es extends W {
        constructor(t){
            super(), this._config = this._getConfig(t);
        }
        static get Default() {
            return Jn;
        }
        static get DefaultType() {
            return Zn;
        }
        static get NAME() {
            return "TemplateFactory";
        }
        getContent() {
            return Object.values(this._config.content).map((t)=>this._resolvePossibleFunction(t)).filter(Boolean);
        }
        hasContent() {
            return this.getContent().length > 0;
        }
        changeContent(t) {
            return this._checkContent(t), this._config.content = {
                ...this._config.content,
                ...t
            }, this;
        }
        toHtml() {
            const t = document.createElement("div");
            t.innerHTML = this._maybeSanitize(this._config.template);
            for (const [e, i] of Object.entries(this._config.content))this._setContent(t, i, e);
            const e = t.children[0], i = this._resolvePossibleFunction(this._config.extraClass);
            return i && e.classList.add(...i.split(" ")), e;
        }
        _typeCheckConfig(t) {
            super._typeCheckConfig(t), this._checkContent(t.content);
        }
        _checkContent(t) {
            for (const [e, i] of Object.entries(t))super._typeCheckConfig({
                selector: e,
                entry: i
            }, ts);
        }
        _setContent(t, e, i) {
            const n = R.findOne(i, t);
            n && ((e = this._resolvePossibleFunction(e)) ? r(e) ? this._putElementInTemplate(a(e), n) : this._config.html ? n.innerHTML = this._maybeSanitize(e) : n.textContent = e : n.remove());
        }
        _maybeSanitize(t) {
            return this._config.sanitize ? function(t, e, i) {
                if (!t.length) return t;
                if (i && "function" == typeof i) return i(t);
                const n = (new window.DOMParser).parseFromString(t, "text/html"), s = [].concat(...n.body.querySelectorAll("*"));
                for (const t of s){
                    const i = t.nodeName.toLowerCase();
                    if (!Object.keys(e).includes(i)) {
                        t.remove();
                        continue;
                    }
                    const n = [].concat(...t.attributes), s = [].concat(e["*"] || [], e[i] || []);
                    for (const e of n)Gn(e, s) || t.removeAttribute(e.nodeName);
                }
                return n.body.innerHTML;
            }(t, this._config.allowList, this._config.sanitizeFn) : t;
        }
        _resolvePossibleFunction(t) {
            return _(t, [
                void 0,
                this
            ]);
        }
        _putElementInTemplate(t, e) {
            if (this._config.html) return e.innerHTML = "", void e.append(t);
            e.textContent = t.textContent;
        }
    }
    const is = new Set([
        "sanitize",
        "allowList",
        "sanitizeFn"
    ]), ns = "fade", ss = "show", os = ".tooltip-inner", rs = ".modal", as = "hide.bs.modal", ls = "hover", cs = "focus", hs = "click", ds = {
        AUTO: "auto",
        TOP: "top",
        RIGHT: m() ? "left" : "right",
        BOTTOM: "bottom",
        LEFT: m() ? "right" : "left"
    }, us = {
        allowList: Xn,
        animation: !0,
        boundary: "clippingParents",
        container: !1,
        customClass: "",
        delay: 0,
        fallbackPlacements: [
            "top",
            "right",
            "bottom",
            "left"
        ],
        html: !1,
        offset: [
            0,
            6
        ],
        placement: "top",
        popperConfig: null,
        sanitize: !0,
        sanitizeFn: null,
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        title: "",
        trigger: "hover focus"
    }, fs = {
        allowList: "object",
        animation: "boolean",
        boundary: "(string|element)",
        container: "(string|element|boolean)",
        customClass: "(string|function)",
        delay: "(number|object)",
        fallbackPlacements: "array",
        html: "boolean",
        offset: "(array|string|function)",
        placement: "(string|function)",
        popperConfig: "(null|object|function)",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        selector: "(string|boolean)",
        template: "string",
        title: "(string|element|function)",
        trigger: "string"
    };
    class ps extends B {
        constructor(t, e){
            if (void 0 === Ai) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org/docs/v2/)");
            super(t, e), this._isEnabled = !0, this._timeout = 0, this._isHovered = null, this._activeTrigger = {}, this._popper = null, this._templateFactory = null, this._newContent = null, this.tip = null, this._setListeners(), this._config.selector || this._fixTitle();
        }
        static get Default() {
            return us;
        }
        static get DefaultType() {
            return fs;
        }
        static get NAME() {
            return "tooltip";
        }
        enable() {
            this._isEnabled = !0;
        }
        disable() {
            this._isEnabled = !1;
        }
        toggleEnabled() {
            this._isEnabled = !this._isEnabled;
        }
        toggle() {
            this._isEnabled && (this._isShown() ? this._leave() : this._enter());
        }
        dispose() {
            clearTimeout(this._timeout), P.off(this._element.closest(rs), as, this._hideModalHandler), this._element.getAttribute("data-bs-original-title") && this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title")), this._disposePopper(), super.dispose();
        }
        show() {
            if ("none" === this._element.style.display) throw new Error("Please use show on visible elements");
            if (!this._isWithContent() || !this._isEnabled) return;
            const t = P.trigger(this._element, this.constructor.eventName("show")), e = (h(this._element) || this._element.ownerDocument.documentElement).contains(this._element);
            if (t.defaultPrevented || !e) return;
            this._disposePopper();
            const i = this._getTipElement();
            this._element.setAttribute("aria-describedby", i.getAttribute("id"));
            const { container: n } = this._config;
            if (this._element.ownerDocument.documentElement.contains(this.tip) || (n.append(i), P.trigger(this._element, this.constructor.eventName("inserted"))), this._popper = this._createPopper(i), i.classList.add(ss), "ontouchstart" in document.documentElement) for (const t of [].concat(...document.body.children))P.on(t, "mouseover", d);
            this._queueCallback(()=>{
                P.trigger(this._element, this.constructor.eventName("shown")), !1 === this._isHovered && this._leave(), this._isHovered = !1;
            }, this.tip, this._isAnimated());
        }
        hide() {
            if (this._isShown() && !P.trigger(this._element, this.constructor.eventName("hide")).defaultPrevented) {
                if (this._getTipElement().classList.remove(ss), "ontouchstart" in document.documentElement) for (const t of [].concat(...document.body.children))P.off(t, "mouseover", d);
                this._activeTrigger[hs] = !1, this._activeTrigger[cs] = !1, this._activeTrigger[ls] = !1, this._isHovered = null, this._queueCallback(()=>{
                    this._isWithActiveTrigger() || (this._isHovered || this._disposePopper(), this._element.removeAttribute("aria-describedby"), P.trigger(this._element, this.constructor.eventName("hidden")));
                }, this.tip, this._isAnimated());
            }
        }
        update() {
            this._popper && this._popper.update();
        }
        _isWithContent() {
            return Boolean(this._getTitle());
        }
        _getTipElement() {
            return this.tip || (this.tip = this._createTipElement(this._newContent || this._getContentForTemplate())), this.tip;
        }
        _createTipElement(t) {
            const e = this._getTemplateFactory(t).toHtml();
            if (!e) return null;
            e.classList.remove(ns, ss), e.classList.add(`bs-${this.constructor.NAME}-auto`);
            const i = ((t)=>{
                do t += Math.floor(1e6 * Math.random());
                while (document.getElementById(t));
                return t;
            })(this.constructor.NAME).toString();
            return e.setAttribute("id", i), this._isAnimated() && e.classList.add(ns), e;
        }
        setContent(t) {
            this._newContent = t, this._isShown() && (this._disposePopper(), this.show());
        }
        _getTemplateFactory(t) {
            return this._templateFactory ? this._templateFactory.changeContent(t) : this._templateFactory = new es({
                ...this._config,
                content: t,
                extraClass: this._resolvePossibleFunction(this._config.customClass)
            }), this._templateFactory;
        }
        _getContentForTemplate() {
            return {
                [os]: this._getTitle()
            };
        }
        _getTitle() {
            return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute("data-bs-original-title");
        }
        _initializeOnDelegatedTarget(t) {
            return this.constructor.getOrCreateInstance(t.delegateTarget, this._getDelegateConfig());
        }
        _isAnimated() {
            return this._config.animation || this.tip && this.tip.classList.contains(ns);
        }
        _isShown() {
            return this.tip && this.tip.classList.contains(ss);
        }
        _createPopper(t) {
            const e = _(this._config.placement, [
                this,
                t,
                this._element
            ]), i = ds[e.toUpperCase()];
            return wi(this._element, t, this._getPopperConfig(i));
        }
        _getOffset() {
            const { offset: t } = this._config;
            return "string" == typeof t ? t.split(",").map((t)=>Number.parseInt(t, 10)) : "function" == typeof t ? (e)=>t(e, this._element) : t;
        }
        _resolvePossibleFunction(t) {
            return _(t, [
                this._element,
                this._element
            ]);
        }
        _getPopperConfig(t) {
            const e = {
                placement: t,
                modifiers: [
                    {
                        name: "flip",
                        options: {
                            fallbackPlacements: this._config.fallbackPlacements
                        }
                    },
                    {
                        name: "offset",
                        options: {
                            offset: this._getOffset()
                        }
                    },
                    {
                        name: "preventOverflow",
                        options: {
                            boundary: this._config.boundary
                        }
                    },
                    {
                        name: "arrow",
                        options: {
                            element: `.${this.constructor.NAME}-arrow`
                        }
                    },
                    {
                        name: "preSetPlacement",
                        enabled: !0,
                        phase: "beforeMain",
                        fn: (t)=>{
                            this._getTipElement().setAttribute("data-popper-placement", t.state.placement);
                        }
                    }
                ]
            };
            return {
                ...e,
                ..._(this._config.popperConfig, [
                    void 0,
                    e
                ])
            };
        }
        _setListeners() {
            const t = this._config.trigger.split(" ");
            for (const e of t)if ("click" === e) P.on(this._element, this.constructor.eventName("click"), this._config.selector, (t)=>{
                const e = this._initializeOnDelegatedTarget(t);
                e._activeTrigger[hs] = !(e._isShown() && e._activeTrigger[hs]), e.toggle();
            });
            else if ("manual" !== e) {
                const t = e === ls ? this.constructor.eventName("mouseenter") : this.constructor.eventName("focusin"), i = e === ls ? this.constructor.eventName("mouseleave") : this.constructor.eventName("focusout");
                P.on(this._element, t, this._config.selector, (t)=>{
                    const e = this._initializeOnDelegatedTarget(t);
                    e._activeTrigger["focusin" === t.type ? cs : ls] = !0, e._enter();
                }), P.on(this._element, i, this._config.selector, (t)=>{
                    const e = this._initializeOnDelegatedTarget(t);
                    e._activeTrigger["focusout" === t.type ? cs : ls] = e._element.contains(t.relatedTarget), e._leave();
                });
            }
            this._hideModalHandler = ()=>{
                this._element && this.hide();
            }, P.on(this._element.closest(rs), as, this._hideModalHandler);
        }
        _fixTitle() {
            const t = this._element.getAttribute("title");
            t && (this._element.getAttribute("aria-label") || this._element.textContent.trim() || this._element.setAttribute("aria-label", t), this._element.setAttribute("data-bs-original-title", t), this._element.removeAttribute("title"));
        }
        _enter() {
            this._isShown() || this._isHovered ? this._isHovered = !0 : (this._isHovered = !0, this._setTimeout(()=>{
                this._isHovered && this.show();
            }, this._config.delay.show));
        }
        _leave() {
            this._isWithActiveTrigger() || (this._isHovered = !1, this._setTimeout(()=>{
                this._isHovered || this.hide();
            }, this._config.delay.hide));
        }
        _setTimeout(t, e) {
            clearTimeout(this._timeout), this._timeout = setTimeout(t, e);
        }
        _isWithActiveTrigger() {
            return Object.values(this._activeTrigger).includes(!0);
        }
        _getConfig(t) {
            const e = H.getDataAttributes(this._element);
            for (const t of Object.keys(e))is.has(t) && delete e[t];
            return t = {
                ...e,
                ..."object" == typeof t && t ? t : {}
            }, t = this._mergeConfigObj(t), t = this._configAfterMerge(t), this._typeCheckConfig(t), t;
        }
        _configAfterMerge(t) {
            return t.container = !1 === t.container ? document.body : a(t.container), "number" == typeof t.delay && (t.delay = {
                show: t.delay,
                hide: t.delay
            }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), t;
        }
        _getDelegateConfig() {
            const t = {};
            for (const [e, i] of Object.entries(this._config))this.constructor.Default[e] !== i && (t[e] = i);
            return t.selector = !1, t.trigger = "manual", t;
        }
        _disposePopper() {
            this._popper && (this._popper.destroy(), this._popper = null), this.tip && (this.tip.remove(), this.tip = null);
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e = ps.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                    e[t]();
                }
            });
        }
    }
    g(ps);
    const ms = ".popover-header", gs = ".popover-body", _s = {
        ...ps.Default,
        content: "",
        offset: [
            0,
            8
        ],
        placement: "right",
        template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
        trigger: "click"
    }, bs = {
        ...ps.DefaultType,
        content: "(null|string|element|function)"
    };
    class vs extends ps {
        static get Default() {
            return _s;
        }
        static get DefaultType() {
            return bs;
        }
        static get NAME() {
            return "popover";
        }
        _isWithContent() {
            return this._getTitle() || this._getContent();
        }
        _getContentForTemplate() {
            return {
                [ms]: this._getTitle(),
                [gs]: this._getContent()
            };
        }
        _getContent() {
            return this._resolvePossibleFunction(this._config.content);
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e = vs.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                    e[t]();
                }
            });
        }
    }
    g(vs);
    const ys = ".bs.scrollspy", ws = `activate${ys}`, As = `click${ys}`, Es = `load${ys}.data-api`, Ts = "active", Cs = "[href]", Os = ".nav-link", xs = `${Os}, .nav-item > ${Os}, .list-group-item`, ks = {
        offset: null,
        rootMargin: "0px 0px -25%",
        smoothScroll: !1,
        target: null,
        threshold: [
            .1,
            .5,
            1
        ]
    }, Ls = {
        offset: "(number|null)",
        rootMargin: "string",
        smoothScroll: "boolean",
        target: "element",
        threshold: "array"
    };
    class Ss extends B {
        constructor(t, e){
            super(t, e), this._targetLinks = new Map, this._observableSections = new Map, this._rootElement = "visible" === getComputedStyle(this._element).overflowY ? null : this._element, this._activeTarget = null, this._observer = null, this._previousScrollData = {
                visibleEntryTop: 0,
                parentScrollTop: 0
            }, this.refresh();
        }
        static get Default() {
            return ks;
        }
        static get DefaultType() {
            return Ls;
        }
        static get NAME() {
            return "scrollspy";
        }
        refresh() {
            this._initializeTargetsAndObservables(), this._maybeEnableSmoothScroll(), this._observer ? this._observer.disconnect() : this._observer = this._getNewObserver();
            for (const t of this._observableSections.values())this._observer.observe(t);
        }
        dispose() {
            this._observer.disconnect(), super.dispose();
        }
        _configAfterMerge(t) {
            return t.target = a(t.target) || document.body, t.rootMargin = t.offset ? `${t.offset}px 0px -30%` : t.rootMargin, "string" == typeof t.threshold && (t.threshold = t.threshold.split(",").map((t)=>Number.parseFloat(t))), t;
        }
        _maybeEnableSmoothScroll() {
            this._config.smoothScroll && (P.off(this._config.target, As), P.on(this._config.target, As, Cs, (t)=>{
                const e = this._observableSections.get(t.target.hash);
                if (e) {
                    t.preventDefault();
                    const i = this._rootElement || window, n = e.offsetTop - this._element.offsetTop;
                    if (i.scrollTo) return void i.scrollTo({
                        top: n,
                        behavior: "smooth"
                    });
                    i.scrollTop = n;
                }
            }));
        }
        _getNewObserver() {
            const t = {
                root: this._rootElement,
                threshold: this._config.threshold,
                rootMargin: this._config.rootMargin
            };
            return new IntersectionObserver((t)=>this._observerCallback(t), t);
        }
        _observerCallback(t) {
            const e = (t)=>this._targetLinks.get(`#${t.target.id}`), i = (t)=>{
                this._previousScrollData.visibleEntryTop = t.target.offsetTop, this._process(e(t));
            }, n = (this._rootElement || document.documentElement).scrollTop, s = n >= this._previousScrollData.parentScrollTop;
            this._previousScrollData.parentScrollTop = n;
            for (const o of t){
                if (!o.isIntersecting) {
                    this._activeTarget = null, this._clearActiveClass(e(o));
                    continue;
                }
                const t = o.target.offsetTop >= this._previousScrollData.visibleEntryTop;
                if (s && t) {
                    if (i(o), !n) return;
                } else s || t || i(o);
            }
        }
        _initializeTargetsAndObservables() {
            this._targetLinks = new Map, this._observableSections = new Map;
            const t = R.find(Cs, this._config.target);
            for (const e of t){
                if (!e.hash || c(e)) continue;
                const t = R.findOne(decodeURI(e.hash), this._element);
                l(t) && (this._targetLinks.set(decodeURI(e.hash), e), this._observableSections.set(e.hash, t));
            }
        }
        _process(t) {
            this._activeTarget !== t && (this._clearActiveClass(this._config.target), this._activeTarget = t, t.classList.add(Ts), this._activateParents(t), P.trigger(this._element, ws, {
                relatedTarget: t
            }));
        }
        _activateParents(t) {
            if (t.classList.contains("dropdown-item")) R.findOne(".dropdown-toggle", t.closest(".dropdown")).classList.add(Ts);
            else for (const e of R.parents(t, ".nav, .list-group"))for (const t of R.prev(e, xs))t.classList.add(Ts);
        }
        _clearActiveClass(t) {
            t.classList.remove(Ts);
            const e = R.find(`${Cs}.${Ts}`, t);
            for (const t of e)t.classList.remove(Ts);
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e = Ss.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
                    e[t]();
                }
            });
        }
    }
    P.on(window, Es, ()=>{
        for (const t of R.find('[data-bs-spy="scroll"]'))Ss.getOrCreateInstance(t);
    }), g(Ss);
    const Ds = ".bs.tab", $s = `hide${Ds}`, Is = `hidden${Ds}`, Ns = `show${Ds}`, Ps = `shown${Ds}`, js = `click${Ds}`, Ms = `keydown${Ds}`, Fs = `load${Ds}`, Hs = "ArrowLeft", Ws = "ArrowRight", Bs = "ArrowUp", zs = "ArrowDown", Rs = "Home", qs = "End", Vs = "active", Ks = "fade", Qs = "show", Xs = ".dropdown-toggle", Ys = `:not(${Xs})`, Us = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', Gs = `.nav-link${Ys}, .list-group-item${Ys}, [role="tab"]${Ys}, ${Us}`, Js = `.${Vs}[data-bs-toggle="tab"], .${Vs}[data-bs-toggle="pill"], .${Vs}[data-bs-toggle="list"]`;
    class Zs extends B {
        constructor(t){
            super(t), this._parent = this._element.closest('.list-group, .nav, [role="tablist"]'), this._parent && (this._setInitialAttributes(this._parent, this._getChildren()), P.on(this._element, Ms, (t)=>this._keydown(t)));
        }
        static get NAME() {
            return "tab";
        }
        show() {
            const t = this._element;
            if (this._elemIsActive(t)) return;
            const e = this._getActiveElem(), i = e ? P.trigger(e, $s, {
                relatedTarget: t
            }) : null;
            P.trigger(t, Ns, {
                relatedTarget: e
            }).defaultPrevented || i && i.defaultPrevented || (this._deactivate(e, t), this._activate(t, e));
        }
        _activate(t, e) {
            t && (t.classList.add(Vs), this._activate(R.getElementFromSelector(t)), this._queueCallback(()=>{
                "tab" === t.getAttribute("role") ? (t.removeAttribute("tabindex"), t.setAttribute("aria-selected", !0), this._toggleDropDown(t, !0), P.trigger(t, Ps, {
                    relatedTarget: e
                })) : t.classList.add(Qs);
            }, t, t.classList.contains(Ks)));
        }
        _deactivate(t, e) {
            t && (t.classList.remove(Vs), t.blur(), this._deactivate(R.getElementFromSelector(t)), this._queueCallback(()=>{
                "tab" === t.getAttribute("role") ? (t.setAttribute("aria-selected", !1), t.setAttribute("tabindex", "-1"), this._toggleDropDown(t, !1), P.trigger(t, Is, {
                    relatedTarget: e
                })) : t.classList.remove(Qs);
            }, t, t.classList.contains(Ks)));
        }
        _keydown(t) {
            if (![
                Hs,
                Ws,
                Bs,
                zs,
                Rs,
                qs
            ].includes(t.key)) return;
            t.stopPropagation(), t.preventDefault();
            const e = this._getChildren().filter((t)=>!c(t));
            let i;
            if ([
                Rs,
                qs
            ].includes(t.key)) i = e[t.key === Rs ? 0 : e.length - 1];
            else {
                const n = [
                    Ws,
                    zs
                ].includes(t.key);
                i = v(e, t.target, n, !0);
            }
            i && (i.focus({
                preventScroll: !0
            }), Zs.getOrCreateInstance(i).show());
        }
        _getChildren() {
            return R.find(Gs, this._parent);
        }
        _getActiveElem() {
            return this._getChildren().find((t)=>this._elemIsActive(t)) || null;
        }
        _setInitialAttributes(t, e) {
            this._setAttributeIfNotExists(t, "role", "tablist");
            for (const t of e)this._setInitialAttributesOnChild(t);
        }
        _setInitialAttributesOnChild(t) {
            t = this._getInnerElement(t);
            const e = this._elemIsActive(t), i = this._getOuterElement(t);
            t.setAttribute("aria-selected", e), i !== t && this._setAttributeIfNotExists(i, "role", "presentation"), e || t.setAttribute("tabindex", "-1"), this._setAttributeIfNotExists(t, "role", "tab"), this._setInitialAttributesOnTargetPanel(t);
        }
        _setInitialAttributesOnTargetPanel(t) {
            const e = R.getElementFromSelector(t);
            e && (this._setAttributeIfNotExists(e, "role", "tabpanel"), t.id && this._setAttributeIfNotExists(e, "aria-labelledby", `${t.id}`));
        }
        _toggleDropDown(t, e) {
            const i = this._getOuterElement(t);
            if (!i.classList.contains("dropdown")) return;
            const n = (t, n)=>{
                const s = R.findOne(t, i);
                s && s.classList.toggle(n, e);
            };
            n(Xs, Vs), n(".dropdown-menu", Qs), i.setAttribute("aria-expanded", e);
        }
        _setAttributeIfNotExists(t, e, i) {
            t.hasAttribute(e) || t.setAttribute(e, i);
        }
        _elemIsActive(t) {
            return t.classList.contains(Vs);
        }
        _getInnerElement(t) {
            return t.matches(Gs) ? t : R.findOne(Gs, t);
        }
        _getOuterElement(t) {
            return t.closest(".nav-item, .list-group-item") || t;
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e = Zs.getOrCreateInstance(this);
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
                    e[t]();
                }
            });
        }
    }
    P.on(document, js, Us, function(t) {
        [
            "A",
            "AREA"
        ].includes(this.tagName) && t.preventDefault(), c(this) || Zs.getOrCreateInstance(this).show();
    }), P.on(window, Fs, ()=>{
        for (const t of R.find(Js))Zs.getOrCreateInstance(t);
    }), g(Zs);
    const to = ".bs.toast", eo = `mouseover${to}`, io = `mouseout${to}`, no = `focusin${to}`, so = `focusout${to}`, oo = `hide${to}`, ro = `hidden${to}`, ao = `show${to}`, lo = `shown${to}`, co = "hide", ho = "show", uo = "showing", fo = {
        animation: "boolean",
        autohide: "boolean",
        delay: "number"
    }, po = {
        animation: !0,
        autohide: !0,
        delay: 5e3
    };
    class mo extends B {
        constructor(t, e){
            super(t, e), this._timeout = null, this._hasMouseInteraction = !1, this._hasKeyboardInteraction = !1, this._setListeners();
        }
        static get Default() {
            return po;
        }
        static get DefaultType() {
            return fo;
        }
        static get NAME() {
            return "toast";
        }
        show() {
            P.trigger(this._element, ao).defaultPrevented || (this._clearTimeout(), this._config.animation && this._element.classList.add("fade"), this._element.classList.remove(co), u(this._element), this._element.classList.add(ho, uo), this._queueCallback(()=>{
                this._element.classList.remove(uo), P.trigger(this._element, lo), this._maybeScheduleHide();
            }, this._element, this._config.animation));
        }
        hide() {
            this.isShown() && (P.trigger(this._element, oo).defaultPrevented || (this._element.classList.add(uo), this._queueCallback(()=>{
                this._element.classList.add(co), this._element.classList.remove(uo, ho), P.trigger(this._element, ro);
            }, this._element, this._config.animation)));
        }
        dispose() {
            this._clearTimeout(), this.isShown() && this._element.classList.remove(ho), super.dispose();
        }
        isShown() {
            return this._element.classList.contains(ho);
        }
        _maybeScheduleHide() {
            this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout(()=>{
                this.hide();
            }, this._config.delay)));
        }
        _onInteraction(t, e) {
            switch(t.type){
                case "mouseover":
                case "mouseout":
                    this._hasMouseInteraction = e;
                    break;
                case "focusin":
                case "focusout":
                    this._hasKeyboardInteraction = e;
            }
            if (e) return void this._clearTimeout();
            const i = t.relatedTarget;
            this._element === i || this._element.contains(i) || this._maybeScheduleHide();
        }
        _setListeners() {
            P.on(this._element, eo, (t)=>this._onInteraction(t, !0)), P.on(this._element, io, (t)=>this._onInteraction(t, !1)), P.on(this._element, no, (t)=>this._onInteraction(t, !0)), P.on(this._element, so, (t)=>this._onInteraction(t, !1));
        }
        _clearTimeout() {
            clearTimeout(this._timeout), this._timeout = null;
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e = mo.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                    e[t](this);
                }
            });
        }
    }
    return q(mo), g(mo), {
        Alert: X,
        Button: U,
        Carousel: St,
        Collapse: qt,
        Dropdown: Qi,
        Modal: Ln,
        Offcanvas: Qn,
        Popover: vs,
        ScrollSpy: Ss,
        Tab: Zs,
        Toast: mo,
        Tooltip: ps
    };
});

},{}]},["a3xnY","igyjZ"], "igyjZ", "parcelRequireea44", {})

//# sourceMappingURL=init.js.map
