function tv(l, s) {
  for (var r = 0; r < s.length; r++) {
    const c = s[r];
    if (typeof c != "string" && !Array.isArray(c)) {
      for (const f in c)
        if (f !== "default" && !(f in l)) {
          const d = Object.getOwnPropertyDescriptor(c, f);
          d &&
            Object.defineProperty(
              l,
              f,
              d.get ? d : { enumerable: !0, get: () => c[f] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(l, Symbol.toStringTag, { value: "Module" }),
  );
}
(function () {
  const s = document.createElement("link").relList;
  if (s && s.supports && s.supports("modulepreload")) return;
  for (const f of document.querySelectorAll('link[rel="modulepreload"]')) c(f);
  new MutationObserver((f) => {
    for (const d of f)
      if (d.type === "childList")
        for (const p of d.addedNodes)
          p.tagName === "LINK" && p.rel === "modulepreload" && c(p);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(f) {
    const d = {};
    return (
      f.integrity && (d.integrity = f.integrity),
      f.referrerPolicy && (d.referrerPolicy = f.referrerPolicy),
      f.crossOrigin === "use-credentials"
        ? (d.credentials = "include")
        : f.crossOrigin === "anonymous"
          ? (d.credentials = "omit")
          : (d.credentials = "same-origin"),
      d
    );
  }
  function c(f) {
    if (f.ep) return;
    f.ep = !0;
    const d = r(f);
    fetch(f.href, d);
  }
})();
function _0(l) {
  return l && l.__esModule && Object.prototype.hasOwnProperty.call(l, "default")
    ? l.default
    : l;
}
var Bc = { exports: {} },
  vs = {};
var Rh;
function nv() {
  if (Rh) return vs;
  Rh = 1;
  var l = Symbol.for("react.transitional.element"),
    s = Symbol.for("react.fragment");
  function r(c, f, d) {
    var p = null;
    if (
      (d !== void 0 && (p = "" + d),
      f.key !== void 0 && (p = "" + f.key),
      "key" in f)
    ) {
      d = {};
      for (var y in f) y !== "key" && (d[y] = f[y]);
    } else d = f;
    return (
      (f = d.ref),
      { $$typeof: l, type: c, key: p, ref: f !== void 0 ? f : null, props: d }
    );
  }
  return ((vs.Fragment = s), (vs.jsx = r), (vs.jsxs = r), vs);
}
var Mh;
function lv() {
  return (Mh || ((Mh = 1), (Bc.exports = nv())), Bc.exports);
}
var u = lv(),
  qc = { exports: {} },
  bs = {},
  Gc = { exports: {} },
  Xc = {};
var _h;
function av() {
  return (
    _h ||
      ((_h = 1),
      (function (l) {
        function s(C, G) {
          var V = C.length;
          C.push(G);
          e: for (; 0 < V; ) {
            var se = (V - 1) >>> 1,
              b = C[se];
            if (0 < f(b, G)) ((C[se] = G), (C[V] = b), (V = se));
            else break e;
          }
        }
        function r(C) {
          return C.length === 0 ? null : C[0];
        }
        function c(C) {
          if (C.length === 0) return null;
          var G = C[0],
            V = C.pop();
          if (V !== G) {
            C[0] = V;
            e: for (var se = 0, b = C.length, B = b >>> 1; se < B; ) {
              var J = 2 * (se + 1) - 1,
                P = C[J],
                le = J + 1,
                re = C[le];
              if (0 > f(P, V))
                le < b && 0 > f(re, P)
                  ? ((C[se] = re), (C[le] = V), (se = le))
                  : ((C[se] = P), (C[J] = V), (se = J));
              else if (le < b && 0 > f(re, V))
                ((C[se] = re), (C[le] = V), (se = le));
              else break e;
            }
          }
          return G;
        }
        function f(C, G) {
          var V = C.sortIndex - G.sortIndex;
          return V !== 0 ? V : C.id - G.id;
        }
        if (
          ((l.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var d = performance;
          l.unstable_now = function () {
            return d.now();
          };
        } else {
          var p = Date,
            y = p.now();
          l.unstable_now = function () {
            return p.now() - y;
          };
        }
        var v = [],
          h = [],
          g = 1,
          N = null,
          j = 3,
          M = !1,
          U = !1,
          O = !1,
          _ = !1,
          q = typeof setTimeout == "function" ? setTimeout : null,
          Y = typeof clearTimeout == "function" ? clearTimeout : null,
          X = typeof setImmediate < "u" ? setImmediate : null;
        function Z(C) {
          for (var G = r(h); G !== null; ) {
            if (G.callback === null) c(h);
            else if (G.startTime <= C)
              (c(h), (G.sortIndex = G.expirationTime), s(v, G));
            else break;
            G = r(h);
          }
        }
        function Q(C) {
          if (((O = !1), Z(C), !U))
            if (r(v) !== null) ((U = !0), F || ((F = !0), de()));
            else {
              var G = r(h);
              G !== null && fe(Q, G.startTime - C);
            }
        }
        var F = !1,
          $ = -1,
          K = 5,
          ce = -1;
        function ye() {
          return _ ? !0 : !(l.unstable_now() - ce < K);
        }
        function be() {
          if (((_ = !1), F)) {
            var C = l.unstable_now();
            ce = C;
            var G = !0;
            try {
              e: {
                ((U = !1), O && ((O = !1), Y($), ($ = -1)), (M = !0));
                var V = j;
                try {
                  t: {
                    for (
                      Z(C), N = r(v);
                      N !== null && !(N.expirationTime > C && ye());
                    ) {
                      var se = N.callback;
                      if (typeof se == "function") {
                        ((N.callback = null), (j = N.priorityLevel));
                        var b = se(N.expirationTime <= C);
                        if (((C = l.unstable_now()), typeof b == "function")) {
                          ((N.callback = b), Z(C), (G = !0));
                          break t;
                        }
                        (N === r(v) && c(v), Z(C));
                      } else c(v);
                      N = r(v);
                    }
                    if (N !== null) G = !0;
                    else {
                      var B = r(h);
                      (B !== null && fe(Q, B.startTime - C), (G = !1));
                    }
                  }
                  break e;
                } finally {
                  ((N = null), (j = V), (M = !1));
                }
                G = void 0;
              }
            } finally {
              G ? de() : (F = !1);
            }
          }
        }
        var de;
        if (typeof X == "function")
          de = function () {
            X(be);
          };
        else if (typeof MessageChannel < "u") {
          var Se = new MessageChannel(),
            W = Se.port2;
          ((Se.port1.onmessage = be),
            (de = function () {
              W.postMessage(null);
            }));
        } else
          de = function () {
            q(be, 0);
          };
        function fe(C, G) {
          $ = q(function () {
            C(l.unstable_now());
          }, G);
        }
        ((l.unstable_IdlePriority = 5),
          (l.unstable_ImmediatePriority = 1),
          (l.unstable_LowPriority = 4),
          (l.unstable_NormalPriority = 3),
          (l.unstable_Profiling = null),
          (l.unstable_UserBlockingPriority = 2),
          (l.unstable_cancelCallback = function (C) {
            C.callback = null;
          }),
          (l.unstable_forceFrameRate = function (C) {
            0 > C || 125 < C
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (K = 0 < C ? Math.floor(1e3 / C) : 5);
          }),
          (l.unstable_getCurrentPriorityLevel = function () {
            return j;
          }),
          (l.unstable_next = function (C) {
            switch (j) {
              case 1:
              case 2:
              case 3:
                var G = 3;
                break;
              default:
                G = j;
            }
            var V = j;
            j = G;
            try {
              return C();
            } finally {
              j = V;
            }
          }),
          (l.unstable_requestPaint = function () {
            _ = !0;
          }),
          (l.unstable_runWithPriority = function (C, G) {
            switch (C) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                C = 3;
            }
            var V = j;
            j = C;
            try {
              return G();
            } finally {
              j = V;
            }
          }),
          (l.unstable_scheduleCallback = function (C, G, V) {
            var se = l.unstable_now();
            switch (
              (typeof V == "object" && V !== null
                ? ((V = V.delay),
                  (V = typeof V == "number" && 0 < V ? se + V : se))
                : (V = se),
              C)
            ) {
              case 1:
                var b = -1;
                break;
              case 2:
                b = 250;
                break;
              case 5:
                b = 1073741823;
                break;
              case 4:
                b = 1e4;
                break;
              default:
                b = 5e3;
            }
            return (
              (b = V + b),
              (C = {
                id: g++,
                callback: G,
                priorityLevel: C,
                startTime: V,
                expirationTime: b,
                sortIndex: -1,
              }),
              V > se
                ? ((C.sortIndex = V),
                  s(h, C),
                  r(v) === null &&
                    C === r(h) &&
                    (O ? (Y($), ($ = -1)) : (O = !0), fe(Q, V - se)))
                : ((C.sortIndex = b),
                  s(v, C),
                  U || M || ((U = !0), F || ((F = !0), de()))),
              C
            );
          }),
          (l.unstable_shouldYield = ye),
          (l.unstable_wrapCallback = function (C) {
            var G = j;
            return function () {
              var V = j;
              j = G;
              try {
                return C.apply(this, arguments);
              } finally {
                j = V;
              }
            };
          }));
      })(Xc)),
    Xc
  );
}
var Dh;
function sv() {
  return (Dh || ((Dh = 1), (Gc.exports = av())), Gc.exports);
}
var Yc = { exports: {} },
  me = {};
var zh;
function iv() {
  if (zh) return me;
  zh = 1;
  var l = Symbol.for("react.transitional.element"),
    s = Symbol.for("react.portal"),
    r = Symbol.for("react.fragment"),
    c = Symbol.for("react.strict_mode"),
    f = Symbol.for("react.profiler"),
    d = Symbol.for("react.consumer"),
    p = Symbol.for("react.context"),
    y = Symbol.for("react.forward_ref"),
    v = Symbol.for("react.suspense"),
    h = Symbol.for("react.memo"),
    g = Symbol.for("react.lazy"),
    N = Symbol.iterator;
  function j(b) {
    return b === null || typeof b != "object"
      ? null
      : ((b = (N && b[N]) || b["@@iterator"]),
        typeof b == "function" ? b : null);
  }
  var M = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    U = Object.assign,
    O = {};
  function _(b, B, J) {
    ((this.props = b),
      (this.context = B),
      (this.refs = O),
      (this.updater = J || M));
  }
  ((_.prototype.isReactComponent = {}),
    (_.prototype.setState = function (b, B) {
      if (typeof b != "object" && typeof b != "function" && b != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, b, B, "setState");
    }),
    (_.prototype.forceUpdate = function (b) {
      this.updater.enqueueForceUpdate(this, b, "forceUpdate");
    }));
  function q() {}
  q.prototype = _.prototype;
  function Y(b, B, J) {
    ((this.props = b),
      (this.context = B),
      (this.refs = O),
      (this.updater = J || M));
  }
  var X = (Y.prototype = new q());
  ((X.constructor = Y), U(X, _.prototype), (X.isPureReactComponent = !0));
  var Z = Array.isArray,
    Q = { H: null, A: null, T: null, S: null, V: null },
    F = Object.prototype.hasOwnProperty;
  function $(b, B, J, P, le, re) {
    return (
      (J = re.ref),
      { $$typeof: l, type: b, key: B, ref: J !== void 0 ? J : null, props: re }
    );
  }
  function K(b, B) {
    return $(b.type, B, void 0, void 0, void 0, b.props);
  }
  function ce(b) {
    return typeof b == "object" && b !== null && b.$$typeof === l;
  }
  function ye(b) {
    var B = { "=": "=0", ":": "=2" };
    return (
      "$" +
      b.replace(/[=:]/g, function (J) {
        return B[J];
      })
    );
  }
  var be = /\/+/g;
  function de(b, B) {
    return typeof b == "object" && b !== null && b.key != null
      ? ye("" + b.key)
      : B.toString(36);
  }
  function Se() {}
  function W(b) {
    switch (b.status) {
      case "fulfilled":
        return b.value;
      case "rejected":
        throw b.reason;
      default:
        switch (
          (typeof b.status == "string"
            ? b.then(Se, Se)
            : ((b.status = "pending"),
              b.then(
                function (B) {
                  b.status === "pending" &&
                    ((b.status = "fulfilled"), (b.value = B));
                },
                function (B) {
                  b.status === "pending" &&
                    ((b.status = "rejected"), (b.reason = B));
                },
              )),
          b.status)
        ) {
          case "fulfilled":
            return b.value;
          case "rejected":
            throw b.reason;
        }
    }
    throw b;
  }
  function fe(b, B, J, P, le) {
    var re = typeof b;
    (re === "undefined" || re === "boolean") && (b = null);
    var ne = !1;
    if (b === null) ne = !0;
    else
      switch (re) {
        case "bigint":
        case "string":
        case "number":
          ne = !0;
          break;
        case "object":
          switch (b.$$typeof) {
            case l:
            case s:
              ne = !0;
              break;
            case g:
              return ((ne = b._init), fe(ne(b._payload), B, J, P, le));
          }
      }
    if (ne)
      return (
        (le = le(b)),
        (ne = P === "" ? "." + de(b, 0) : P),
        Z(le)
          ? ((J = ""),
            ne != null && (J = ne.replace(be, "$&/") + "/"),
            fe(le, B, J, "", function (Ae) {
              return Ae;
            }))
          : le != null &&
            (ce(le) &&
              (le = K(
                le,
                J +
                  (le.key == null || (b && b.key === le.key)
                    ? ""
                    : ("" + le.key).replace(be, "$&/") + "/") +
                  ne,
              )),
            B.push(le)),
        1
      );
    ne = 0;
    var Ue = P === "" ? "." : P + ":";
    if (Z(b))
      for (var je = 0; je < b.length; je++)
        ((P = b[je]), (re = Ue + de(P, je)), (ne += fe(P, B, J, re, le)));
    else if (((je = j(b)), typeof je == "function"))
      for (b = je.call(b), je = 0; !(P = b.next()).done; )
        ((P = P.value), (re = Ue + de(P, je++)), (ne += fe(P, B, J, re, le)));
    else if (re === "object") {
      if (typeof b.then == "function") return fe(W(b), B, J, P, le);
      throw (
        (B = String(b)),
        Error(
          "Objects are not valid as a React child (found: " +
            (B === "[object Object]"
              ? "object with keys {" + Object.keys(b).join(", ") + "}"
              : B) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    }
    return ne;
  }
  function C(b, B, J) {
    if (b == null) return b;
    var P = [],
      le = 0;
    return (
      fe(b, P, "", "", function (re) {
        return B.call(J, re, le++);
      }),
      P
    );
  }
  function G(b) {
    if (b._status === -1) {
      var B = b._result;
      ((B = B()),
        B.then(
          function (J) {
            (b._status === 0 || b._status === -1) &&
              ((b._status = 1), (b._result = J));
          },
          function (J) {
            (b._status === 0 || b._status === -1) &&
              ((b._status = 2), (b._result = J));
          },
        ),
        b._status === -1 && ((b._status = 0), (b._result = B)));
    }
    if (b._status === 1) return b._result.default;
    throw b._result;
  }
  var V =
    typeof reportError == "function"
      ? reportError
      : function (b) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var B = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof b == "object" &&
                b !== null &&
                typeof b.message == "string"
                  ? String(b.message)
                  : String(b),
              error: b,
            });
            if (!window.dispatchEvent(B)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", b);
            return;
          }
          console.error(b);
        };
  function se() {}
  return (
    (me.Children = {
      map: C,
      forEach: function (b, B, J) {
        C(
          b,
          function () {
            B.apply(this, arguments);
          },
          J,
        );
      },
      count: function (b) {
        var B = 0;
        return (
          C(b, function () {
            B++;
          }),
          B
        );
      },
      toArray: function (b) {
        return (
          C(b, function (B) {
            return B;
          }) || []
        );
      },
      only: function (b) {
        if (!ce(b))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return b;
      },
    }),
    (me.Component = _),
    (me.Fragment = r),
    (me.Profiler = f),
    (me.PureComponent = Y),
    (me.StrictMode = c),
    (me.Suspense = v),
    (me.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Q),
    (me.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (b) {
        return Q.H.useMemoCache(b);
      },
    }),
    (me.cache = function (b) {
      return function () {
        return b.apply(null, arguments);
      };
    }),
    (me.cloneElement = function (b, B, J) {
      if (b == null)
        throw Error(
          "The argument must be a React element, but you passed " + b + ".",
        );
      var P = U({}, b.props),
        le = b.key,
        re = void 0;
      if (B != null)
        for (ne in (B.ref !== void 0 && (re = void 0),
        B.key !== void 0 && (le = "" + B.key),
        B))
          !F.call(B, ne) ||
            ne === "key" ||
            ne === "__self" ||
            ne === "__source" ||
            (ne === "ref" && B.ref === void 0) ||
            (P[ne] = B[ne]);
      var ne = arguments.length - 2;
      if (ne === 1) P.children = J;
      else if (1 < ne) {
        for (var Ue = Array(ne), je = 0; je < ne; je++)
          Ue[je] = arguments[je + 2];
        P.children = Ue;
      }
      return $(b.type, le, void 0, void 0, re, P);
    }),
    (me.createContext = function (b) {
      return (
        (b = {
          $$typeof: p,
          _currentValue: b,
          _currentValue2: b,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (b.Provider = b),
        (b.Consumer = { $$typeof: d, _context: b }),
        b
      );
    }),
    (me.createElement = function (b, B, J) {
      var P,
        le = {},
        re = null;
      if (B != null)
        for (P in (B.key !== void 0 && (re = "" + B.key), B))
          F.call(B, P) &&
            P !== "key" &&
            P !== "__self" &&
            P !== "__source" &&
            (le[P] = B[P]);
      var ne = arguments.length - 2;
      if (ne === 1) le.children = J;
      else if (1 < ne) {
        for (var Ue = Array(ne), je = 0; je < ne; je++)
          Ue[je] = arguments[je + 2];
        le.children = Ue;
      }
      if (b && b.defaultProps)
        for (P in ((ne = b.defaultProps), ne))
          le[P] === void 0 && (le[P] = ne[P]);
      return $(b, re, void 0, void 0, null, le);
    }),
    (me.createRef = function () {
      return { current: null };
    }),
    (me.forwardRef = function (b) {
      return { $$typeof: y, render: b };
    }),
    (me.isValidElement = ce),
    (me.lazy = function (b) {
      return { $$typeof: g, _payload: { _status: -1, _result: b }, _init: G };
    }),
    (me.memo = function (b, B) {
      return { $$typeof: h, type: b, compare: B === void 0 ? null : B };
    }),
    (me.startTransition = function (b) {
      var B = Q.T,
        J = {};
      Q.T = J;
      try {
        var P = b(),
          le = Q.S;
        (le !== null && le(J, P),
          typeof P == "object" &&
            P !== null &&
            typeof P.then == "function" &&
            P.then(se, V));
      } catch (re) {
        V(re);
      } finally {
        Q.T = B;
      }
    }),
    (me.unstable_useCacheRefresh = function () {
      return Q.H.useCacheRefresh();
    }),
    (me.use = function (b) {
      return Q.H.use(b);
    }),
    (me.useActionState = function (b, B, J) {
      return Q.H.useActionState(b, B, J);
    }),
    (me.useCallback = function (b, B) {
      return Q.H.useCallback(b, B);
    }),
    (me.useContext = function (b) {
      return Q.H.useContext(b);
    }),
    (me.useDebugValue = function () {}),
    (me.useDeferredValue = function (b, B) {
      return Q.H.useDeferredValue(b, B);
    }),
    (me.useEffect = function (b, B, J) {
      var P = Q.H;
      if (typeof J == "function")
        throw Error(
          "useEffect CRUD overload is not enabled in this build of React.",
        );
      return P.useEffect(b, B);
    }),
    (me.useId = function () {
      return Q.H.useId();
    }),
    (me.useImperativeHandle = function (b, B, J) {
      return Q.H.useImperativeHandle(b, B, J);
    }),
    (me.useInsertionEffect = function (b, B) {
      return Q.H.useInsertionEffect(b, B);
    }),
    (me.useLayoutEffect = function (b, B) {
      return Q.H.useLayoutEffect(b, B);
    }),
    (me.useMemo = function (b, B) {
      return Q.H.useMemo(b, B);
    }),
    (me.useOptimistic = function (b, B) {
      return Q.H.useOptimistic(b, B);
    }),
    (me.useReducer = function (b, B, J) {
      return Q.H.useReducer(b, B, J);
    }),
    (me.useRef = function (b) {
      return Q.H.useRef(b);
    }),
    (me.useState = function (b) {
      return Q.H.useState(b);
    }),
    (me.useSyncExternalStore = function (b, B, J) {
      return Q.H.useSyncExternalStore(b, B, J);
    }),
    (me.useTransition = function () {
      return Q.H.useTransition();
    }),
    (me.version = "19.1.0"),
    me
  );
}
var Uh;
function dr() {
  return (Uh || ((Uh = 1), (Yc.exports = iv())), Yc.exports);
}
var Qc = { exports: {} },
  at = {};
var kh;
function rv() {
  if (kh) return at;
  kh = 1;
  var l = dr();
  function s(v) {
    var h = "https://react.dev/errors/" + v;
    if (1 < arguments.length) {
      h += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var g = 2; g < arguments.length; g++)
        h += "&args[]=" + encodeURIComponent(arguments[g]);
    }
    return (
      "Minified React error #" +
      v +
      "; visit " +
      h +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function r() {}
  var c = {
      d: {
        f: r,
        r: function () {
          throw Error(s(522));
        },
        D: r,
        C: r,
        L: r,
        m: r,
        X: r,
        S: r,
        M: r,
      },
      p: 0,
      findDOMNode: null,
    },
    f = Symbol.for("react.portal");
  function d(v, h, g) {
    var N =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: f,
      key: N == null ? null : "" + N,
      children: v,
      containerInfo: h,
      implementation: g,
    };
  }
  var p = l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function y(v, h) {
    if (v === "font") return "";
    if (typeof h == "string") return h === "use-credentials" ? h : "";
  }
  return (
    (at.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = c),
    (at.createPortal = function (v, h) {
      var g =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!h || (h.nodeType !== 1 && h.nodeType !== 9 && h.nodeType !== 11))
        throw Error(s(299));
      return d(v, h, null, g);
    }),
    (at.flushSync = function (v) {
      var h = p.T,
        g = c.p;
      try {
        if (((p.T = null), (c.p = 2), v)) return v();
      } finally {
        ((p.T = h), (c.p = g), c.d.f());
      }
    }),
    (at.preconnect = function (v, h) {
      typeof v == "string" &&
        (h
          ? ((h = h.crossOrigin),
            (h =
              typeof h == "string"
                ? h === "use-credentials"
                  ? h
                  : ""
                : void 0))
          : (h = null),
        c.d.C(v, h));
    }),
    (at.prefetchDNS = function (v) {
      typeof v == "string" && c.d.D(v);
    }),
    (at.preinit = function (v, h) {
      if (typeof v == "string" && h && typeof h.as == "string") {
        var g = h.as,
          N = y(g, h.crossOrigin),
          j = typeof h.integrity == "string" ? h.integrity : void 0,
          M = typeof h.fetchPriority == "string" ? h.fetchPriority : void 0;
        g === "style"
          ? c.d.S(v, typeof h.precedence == "string" ? h.precedence : void 0, {
              crossOrigin: N,
              integrity: j,
              fetchPriority: M,
            })
          : g === "script" &&
            c.d.X(v, {
              crossOrigin: N,
              integrity: j,
              fetchPriority: M,
              nonce: typeof h.nonce == "string" ? h.nonce : void 0,
            });
      }
    }),
    (at.preinitModule = function (v, h) {
      if (typeof v == "string")
        if (typeof h == "object" && h !== null) {
          if (h.as == null || h.as === "script") {
            var g = y(h.as, h.crossOrigin);
            c.d.M(v, {
              crossOrigin: g,
              integrity: typeof h.integrity == "string" ? h.integrity : void 0,
              nonce: typeof h.nonce == "string" ? h.nonce : void 0,
            });
          }
        } else h == null && c.d.M(v);
    }),
    (at.preload = function (v, h) {
      if (
        typeof v == "string" &&
        typeof h == "object" &&
        h !== null &&
        typeof h.as == "string"
      ) {
        var g = h.as,
          N = y(g, h.crossOrigin);
        c.d.L(v, g, {
          crossOrigin: N,
          integrity: typeof h.integrity == "string" ? h.integrity : void 0,
          nonce: typeof h.nonce == "string" ? h.nonce : void 0,
          type: typeof h.type == "string" ? h.type : void 0,
          fetchPriority:
            typeof h.fetchPriority == "string" ? h.fetchPriority : void 0,
          referrerPolicy:
            typeof h.referrerPolicy == "string" ? h.referrerPolicy : void 0,
          imageSrcSet:
            typeof h.imageSrcSet == "string" ? h.imageSrcSet : void 0,
          imageSizes: typeof h.imageSizes == "string" ? h.imageSizes : void 0,
          media: typeof h.media == "string" ? h.media : void 0,
        });
      }
    }),
    (at.preloadModule = function (v, h) {
      if (typeof v == "string")
        if (h) {
          var g = y(h.as, h.crossOrigin);
          c.d.m(v, {
            as: typeof h.as == "string" && h.as !== "script" ? h.as : void 0,
            crossOrigin: g,
            integrity: typeof h.integrity == "string" ? h.integrity : void 0,
          });
        } else c.d.m(v);
    }),
    (at.requestFormReset = function (v) {
      c.d.r(v);
    }),
    (at.unstable_batchedUpdates = function (v, h) {
      return v(h);
    }),
    (at.useFormState = function (v, h, g) {
      return p.H.useFormState(v, h, g);
    }),
    (at.useFormStatus = function () {
      return p.H.useHostTransitionStatus();
    }),
    (at.version = "19.1.0"),
    at
  );
}
var Hh;
function D0() {
  if (Hh) return Qc.exports;
  Hh = 1;
  function l() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l);
      } catch (s) {
        console.error(s);
      }
  }
  return (l(), (Qc.exports = rv()), Qc.exports);
}
var Lh;
function ov() {
  if (Lh) return bs;
  Lh = 1;
  var l = sv(),
    s = dr(),
    r = D0();
  function c(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    }
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function f(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function d(e) {
    var t = e,
      n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do ((t = e), (t.flags & 4098) !== 0 && (n = t.return), (e = t.return));
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function p(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function y(e) {
    if (d(e) !== e) throw Error(c(188));
  }
  function v(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = d(e)), t === null)) throw Error(c(188));
      return t !== e ? null : e;
    }
    for (var n = e, a = t; ; ) {
      var i = n.return;
      if (i === null) break;
      var o = i.alternate;
      if (o === null) {
        if (((a = i.return), a !== null)) {
          n = a;
          continue;
        }
        break;
      }
      if (i.child === o.child) {
        for (o = i.child; o; ) {
          if (o === n) return (y(i), e);
          if (o === a) return (y(i), t);
          o = o.sibling;
        }
        throw Error(c(188));
      }
      if (n.return !== a.return) ((n = i), (a = o));
      else {
        for (var m = !1, x = i.child; x; ) {
          if (x === n) {
            ((m = !0), (n = i), (a = o));
            break;
          }
          if (x === a) {
            ((m = !0), (a = i), (n = o));
            break;
          }
          x = x.sibling;
        }
        if (!m) {
          for (x = o.child; x; ) {
            if (x === n) {
              ((m = !0), (n = o), (a = i));
              break;
            }
            if (x === a) {
              ((m = !0), (a = o), (n = i));
              break;
            }
            x = x.sibling;
          }
          if (!m) throw Error(c(189));
        }
      }
      if (n.alternate !== a) throw Error(c(190));
    }
    if (n.tag !== 3) throw Error(c(188));
    return n.stateNode.current === n ? e : t;
  }
  function h(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (((t = h(e)), t !== null)) return t;
      e = e.sibling;
    }
    return null;
  }
  var g = Object.assign,
    N = Symbol.for("react.element"),
    j = Symbol.for("react.transitional.element"),
    M = Symbol.for("react.portal"),
    U = Symbol.for("react.fragment"),
    O = Symbol.for("react.strict_mode"),
    _ = Symbol.for("react.profiler"),
    q = Symbol.for("react.provider"),
    Y = Symbol.for("react.consumer"),
    X = Symbol.for("react.context"),
    Z = Symbol.for("react.forward_ref"),
    Q = Symbol.for("react.suspense"),
    F = Symbol.for("react.suspense_list"),
    $ = Symbol.for("react.memo"),
    K = Symbol.for("react.lazy"),
    ce = Symbol.for("react.activity"),
    ye = Symbol.for("react.memo_cache_sentinel"),
    be = Symbol.iterator;
  function de(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (be && e[be]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var Se = Symbol.for("react.client.reference");
  function W(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === Se ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case U:
        return "Fragment";
      case _:
        return "Profiler";
      case O:
        return "StrictMode";
      case Q:
        return "Suspense";
      case F:
        return "SuspenseList";
      case ce:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case M:
          return "Portal";
        case X:
          return (e.displayName || "Context") + ".Provider";
        case Y:
          return (e._context.displayName || "Context") + ".Consumer";
        case Z:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case $:
          return (
            (t = e.displayName || null),
            t !== null ? t : W(e.type) || "Memo"
          );
        case K:
          ((t = e._payload), (e = e._init));
          try {
            return W(e(t));
          } catch {}
      }
    return null;
  }
  var fe = Array.isArray,
    C = s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    G = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    V = { pending: !1, data: null, method: null, action: null },
    se = [],
    b = -1;
  function B(e) {
    return { current: e };
  }
  function J(e) {
    0 > b || ((e.current = se[b]), (se[b] = null), b--);
  }
  function P(e, t) {
    (b++, (se[b] = e.current), (e.current = t));
  }
  var le = B(null),
    re = B(null),
    ne = B(null),
    Ue = B(null);
  function je(e, t) {
    switch ((P(ne, t), P(re, e), P(le, null), t.nodeType)) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? ah(e) : 0;
        break;
      default:
        if (((e = t.tagName), (t = t.namespaceURI)))
          ((t = ah(t)), (e = sh(t, e)));
        else
          switch (e) {
            case "svg":
              e = 1;
              break;
            case "math":
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    (J(le), P(le, e));
  }
  function Ae() {
    (J(le), J(re), J(ne));
  }
  function Sn(e) {
    e.memoizedState !== null && P(Ue, e);
    var t = le.current,
      n = sh(t, e.type);
    t !== n && (P(re, e), P(le, n));
  }
  function Ut(e) {
    (re.current === e && (J(le), J(re)),
      Ue.current === e && (J(Ue), (hs._currentValue = V)));
  }
  var Qt = Object.prototype.hasOwnProperty,
    jt = l.unstable_scheduleCallback,
    Nn = l.unstable_cancelCallback,
    Dx = l.unstable_shouldYield,
    zx = l.unstable_requestPaint,
    Vt = l.unstable_now,
    Ux = l.unstable_getCurrentPriorityLevel,
    Hu = l.unstable_ImmediatePriority,
    Lu = l.unstable_UserBlockingPriority,
    zs = l.unstable_NormalPriority,
    kx = l.unstable_LowPriority,
    Bu = l.unstable_IdlePriority,
    Hx = l.log,
    Lx = l.unstable_setDisableYieldValue,
    Sa = null,
    ht = null;
  function En(e) {
    if (
      (typeof Hx == "function" && Lx(e),
      ht && typeof ht.setStrictMode == "function")
    )
      try {
        ht.setStrictMode(Sa, e);
      } catch {}
  }
  var pt = Math.clz32 ? Math.clz32 : Gx,
    Bx = Math.log,
    qx = Math.LN2;
  function Gx(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((Bx(e) / qx) | 0)) | 0);
  }
  var Us = 256,
    ks = 4194304;
  function il(e) {
    var t = e & 42;
    if (t !== 0) return t;
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function Hs(e, t, n) {
    var a = e.pendingLanes;
    if (a === 0) return 0;
    var i = 0,
      o = e.suspendedLanes,
      m = e.pingedLanes;
    e = e.warmLanes;
    var x = a & 134217727;
    return (
      x !== 0
        ? ((a = x & ~o),
          a !== 0
            ? (i = il(a))
            : ((m &= x),
              m !== 0
                ? (i = il(m))
                : n || ((n = x & ~e), n !== 0 && (i = il(n)))))
        : ((x = a & ~o),
          x !== 0
            ? (i = il(x))
            : m !== 0
              ? (i = il(m))
              : n || ((n = a & ~e), n !== 0 && (i = il(n)))),
      i === 0
        ? 0
        : t !== 0 &&
            t !== i &&
            (t & o) === 0 &&
            ((o = i & -i),
            (n = t & -t),
            o >= n || (o === 32 && (n & 4194048) !== 0))
          ? t
          : i
    );
  }
  function Na(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function Xx(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function qu() {
    var e = Us;
    return ((Us <<= 1), (Us & 4194048) === 0 && (Us = 256), e);
  }
  function Gu() {
    var e = ks;
    return ((ks <<= 1), (ks & 62914560) === 0 && (ks = 4194304), e);
  }
  function Tr(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Ea(e, t) {
    ((e.pendingLanes |= t),
      t !== 268435456 &&
        ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0)));
  }
  function Yx(e, t, n, a, i, o) {
    var m = e.pendingLanes;
    ((e.pendingLanes = n),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.warmLanes = 0),
      (e.expiredLanes &= n),
      (e.entangledLanes &= n),
      (e.errorRecoveryDisabledLanes &= n),
      (e.shellSuspendCounter = 0));
    var x = e.entanglements,
      S = e.expirationTimes,
      R = e.hiddenUpdates;
    for (n = m & ~n; 0 < n; ) {
      var k = 31 - pt(n),
        L = 1 << k;
      ((x[k] = 0), (S[k] = -1));
      var D = R[k];
      if (D !== null)
        for (R[k] = null, k = 0; k < D.length; k++) {
          var z = D[k];
          z !== null && (z.lane &= -536870913);
        }
      n &= ~L;
    }
    (a !== 0 && Xu(e, a, 0),
      o !== 0 && i === 0 && e.tag !== 0 && (e.suspendedLanes |= o & ~(m & ~t)));
  }
  function Xu(e, t, n) {
    ((e.pendingLanes |= t), (e.suspendedLanes &= ~t));
    var a = 31 - pt(t);
    ((e.entangledLanes |= t),
      (e.entanglements[a] = e.entanglements[a] | 1073741824 | (n & 4194090)));
  }
  function Yu(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var a = 31 - pt(n),
        i = 1 << a;
      ((i & t) | (e[a] & t) && (e[a] |= t), (n &= ~i));
    }
  }
  function Or(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function Cr(e) {
    return (
      (e &= -e),
      2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function Qu() {
    var e = G.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : Eh(e.type));
  }
  function Qx(e, t) {
    var n = G.p;
    try {
      return ((G.p = e), t());
    } finally {
      G.p = n;
    }
  }
  var jn = Math.random().toString(36).slice(2),
    nt = "__reactFiber$" + jn,
    rt = "__reactProps$" + jn,
    Rl = "__reactContainer$" + jn,
    Rr = "__reactEvents$" + jn,
    Vx = "__reactListeners$" + jn,
    Zx = "__reactHandles$" + jn,
    Vu = "__reactResources$" + jn,
    ja = "__reactMarker$" + jn;
  function Mr(e) {
    (delete e[nt], delete e[rt], delete e[Rr], delete e[Vx], delete e[Zx]);
  }
  function Ml(e) {
    var t = e[nt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[Rl] || n[nt])) {
        if (
          ((n = t.alternate),
          t.child !== null || (n !== null && n.child !== null))
        )
          for (e = ch(e); e !== null; ) {
            if ((n = e[nt])) return n;
            e = ch(e);
          }
        return t;
      }
      ((e = n), (n = e.parentNode));
    }
    return null;
  }
  function _l(e) {
    if ((e = e[nt] || e[Rl])) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function Aa(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(c(33));
  }
  function Dl(e) {
    var t = e[Vu];
    return (
      t ||
        (t = e[Vu] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      t
    );
  }
  function Fe(e) {
    e[ja] = !0;
  }
  var Zu = new Set(),
    Ku = {};
  function rl(e, t) {
    (zl(e, t), zl(e + "Capture", t));
  }
  function zl(e, t) {
    for (Ku[e] = t, e = 0; e < t.length; e++) Zu.add(t[e]);
  }
  var Kx = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
    ),
    Pu = {},
    Fu = {};
  function Px(e) {
    return Qt.call(Fu, e)
      ? !0
      : Qt.call(Pu, e)
        ? !1
        : Kx.test(e)
          ? (Fu[e] = !0)
          : ((Pu[e] = !0), !1);
  }
  function Ls(e, t, n) {
    if (Px(t))
      if (n === null) e.removeAttribute(t);
      else {
        switch (typeof n) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var a = t.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, "" + n);
      }
  }
  function Bs(e, t, n) {
    if (n === null) e.removeAttribute(t);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, "" + n);
    }
  }
  function nn(e, t, n, a) {
    if (a === null) e.removeAttribute(n);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(n);
          return;
      }
      e.setAttributeNS(t, n, "" + a);
    }
  }
  var _r, Ju;
  function Ul(e) {
    if (_r === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        ((_r = (t && t[1]) || ""),
          (Ju =
            -1 <
            n.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < n.stack.indexOf("@")
                ? "@unknown:0:0"
                : ""));
      }
    return (
      `
` +
      _r +
      e +
      Ju
    );
  }
  var Dr = !1;
  function zr(e, t) {
    if (!e || Dr) return "";
    Dr = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var L = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(L.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(L, []);
                } catch (z) {
                  var D = z;
                }
                Reflect.construct(e, [], L);
              } else {
                try {
                  L.call();
                } catch (z) {
                  D = z;
                }
                e.call(L.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (z) {
                D = z;
              }
              (L = e()) &&
                typeof L.catch == "function" &&
                L.catch(function () {});
            }
          } catch (z) {
            if (z && D && typeof z.stack == "string") return [z.stack, D.stack];
          }
          return [null, null];
        },
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var i = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name",
      );
      i &&
        i.configurable &&
        Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var o = a.DetermineComponentFrameRoot(),
        m = o[0],
        x = o[1];
      if (m && x) {
        var S = m.split(`
`),
          R = x.split(`
`);
        for (
          i = a = 0;
          a < S.length && !S[a].includes("DetermineComponentFrameRoot");
        )
          a++;
        for (; i < R.length && !R[i].includes("DetermineComponentFrameRoot"); )
          i++;
        if (a === S.length || i === R.length)
          for (
            a = S.length - 1, i = R.length - 1;
            1 <= a && 0 <= i && S[a] !== R[i];
          )
            i--;
        for (; 1 <= a && 0 <= i; a--, i--)
          if (S[a] !== R[i]) {
            if (a !== 1 || i !== 1)
              do
                if ((a--, i--, 0 > i || S[a] !== R[i])) {
                  var k =
                    `
` + S[a].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      k.includes("<anonymous>") &&
                      (k = k.replace("<anonymous>", e.displayName)),
                    k
                  );
                }
              while (1 <= a && 0 <= i);
            break;
          }
      }
    } finally {
      ((Dr = !1), (Error.prepareStackTrace = n));
    }
    return (n = e ? e.displayName || e.name : "") ? Ul(n) : "";
  }
  function Fx(e) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Ul(e.type);
      case 16:
        return Ul("Lazy");
      case 13:
        return Ul("Suspense");
      case 19:
        return Ul("SuspenseList");
      case 0:
      case 15:
        return zr(e.type, !1);
      case 11:
        return zr(e.type.render, !1);
      case 1:
        return zr(e.type, !0);
      case 31:
        return Ul("Activity");
      default:
        return "";
    }
  }
  function $u(e) {
    try {
      var t = "";
      do ((t += Fx(e)), (e = e.return));
      while (e);
      return t;
    } catch (n) {
      return (
        `
Error generating stack: ` +
        n.message +
        `
` +
        n.stack
      );
    }
  }
  function At(e) {
    switch (typeof e) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function Wu(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function Jx(e) {
    var t = Wu(e) ? "checked" : "value",
      n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      a = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof n < "u" &&
      typeof n.get == "function" &&
      typeof n.set == "function"
    ) {
      var i = n.get,
        o = n.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return i.call(this);
          },
          set: function (m) {
            ((a = "" + m), o.call(this, m));
          },
        }),
        Object.defineProperty(e, t, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return a;
          },
          setValue: function (m) {
            a = "" + m;
          },
          stopTracking: function () {
            ((e._valueTracker = null), delete e[t]);
          },
        }
      );
    }
  }
  function qs(e) {
    e._valueTracker || (e._valueTracker = Jx(e));
  }
  function Iu(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      a = "";
    return (
      e && (a = Wu(e) ? (e.checked ? "true" : "false") : e.value),
      (e = a),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function Gs(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var $x = /[\n"\\]/g;
  function Tt(e) {
    return e.replace($x, function (t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function Ur(e, t, n, a, i, o, m, x) {
    ((e.name = ""),
      m != null &&
      typeof m != "function" &&
      typeof m != "symbol" &&
      typeof m != "boolean"
        ? (e.type = m)
        : e.removeAttribute("type"),
      t != null
        ? m === "number"
          ? ((t === 0 && e.value === "") || e.value != t) &&
            (e.value = "" + At(t))
          : e.value !== "" + At(t) && (e.value = "" + At(t))
        : (m !== "submit" && m !== "reset") || e.removeAttribute("value"),
      t != null
        ? kr(e, m, At(t))
        : n != null
          ? kr(e, m, At(n))
          : a != null && e.removeAttribute("value"),
      i == null && o != null && (e.defaultChecked = !!o),
      i != null &&
        (e.checked = i && typeof i != "function" && typeof i != "symbol"),
      x != null &&
      typeof x != "function" &&
      typeof x != "symbol" &&
      typeof x != "boolean"
        ? (e.name = "" + At(x))
        : e.removeAttribute("name"));
  }
  function ef(e, t, n, a, i, o, m, x) {
    if (
      (o != null &&
        typeof o != "function" &&
        typeof o != "symbol" &&
        typeof o != "boolean" &&
        (e.type = o),
      t != null || n != null)
    ) {
      if (!((o !== "submit" && o !== "reset") || t != null)) return;
      ((n = n != null ? "" + At(n) : ""),
        (t = t != null ? "" + At(t) : n),
        x || t === e.value || (e.value = t),
        (e.defaultValue = t));
    }
    ((a = a ?? i),
      (a = typeof a != "function" && typeof a != "symbol" && !!a),
      (e.checked = x ? e.checked : !!a),
      (e.defaultChecked = !!a),
      m != null &&
        typeof m != "function" &&
        typeof m != "symbol" &&
        typeof m != "boolean" &&
        (e.name = m));
  }
  function kr(e, t, n) {
    (t === "number" && Gs(e.ownerDocument) === e) ||
      e.defaultValue === "" + n ||
      (e.defaultValue = "" + n);
  }
  function kl(e, t, n, a) {
    if (((e = e.options), t)) {
      t = {};
      for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
      for (n = 0; n < e.length; n++)
        ((i = t.hasOwnProperty("$" + e[n].value)),
          e[n].selected !== i && (e[n].selected = i),
          i && a && (e[n].defaultSelected = !0));
    } else {
      for (n = "" + At(n), t = null, i = 0; i < e.length; i++) {
        if (e[i].value === n) {
          ((e[i].selected = !0), a && (e[i].defaultSelected = !0));
          return;
        }
        t !== null || e[i].disabled || (t = e[i]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function tf(e, t, n) {
    if (
      t != null &&
      ((t = "" + At(t)), t !== e.value && (e.value = t), n == null)
    ) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = n != null ? "" + At(n) : "";
  }
  function nf(e, t, n, a) {
    if (t == null) {
      if (a != null) {
        if (n != null) throw Error(c(92));
        if (fe(a)) {
          if (1 < a.length) throw Error(c(93));
          a = a[0];
        }
        n = a;
      }
      (n == null && (n = ""), (t = n));
    }
    ((n = At(t)),
      (e.defaultValue = n),
      (a = e.textContent),
      a === n && a !== "" && a !== null && (e.value = a));
  }
  function Hl(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Wx = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " ",
    ),
  );
  function lf(e, t, n) {
    var a = t.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === ""
      ? a
        ? e.setProperty(t, "")
        : t === "float"
          ? (e.cssFloat = "")
          : (e[t] = "")
      : a
        ? e.setProperty(t, n)
        : typeof n != "number" || n === 0 || Wx.has(t)
          ? t === "float"
            ? (e.cssFloat = n)
            : (e[t] = ("" + n).trim())
          : (e[t] = n + "px");
  }
  function af(e, t, n) {
    if (t != null && typeof t != "object") throw Error(c(62));
    if (((e = e.style), n != null)) {
      for (var a in n)
        !n.hasOwnProperty(a) ||
          (t != null && t.hasOwnProperty(a)) ||
          (a.indexOf("--") === 0
            ? e.setProperty(a, "")
            : a === "float"
              ? (e.cssFloat = "")
              : (e[a] = ""));
      for (var i in t)
        ((a = t[i]), t.hasOwnProperty(i) && n[i] !== a && lf(e, i, a));
    } else for (var o in t) t.hasOwnProperty(o) && lf(e, o, t[o]);
  }
  function Hr(e) {
    if (e.indexOf("-") === -1) return !1;
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Ix = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    ey =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Xs(e) {
    return ey.test("" + e)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e;
  }
  var Lr = null;
  function Br(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Ll = null,
    Bl = null;
  function sf(e) {
    var t = _l(e);
    if (t && (e = t.stateNode)) {
      var n = e[rt] || null;
      e: switch (((e = t.stateNode), t.type)) {
        case "input":
          if (
            (Ur(
              e,
              n.value,
              n.defaultValue,
              n.defaultValue,
              n.checked,
              n.defaultChecked,
              n.type,
              n.name,
            ),
            (t = n.name),
            n.type === "radio" && t != null)
          ) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll(
                'input[name="' + Tt("" + t) + '"][type="radio"]',
              ),
                t = 0;
              t < n.length;
              t++
            ) {
              var a = n[t];
              if (a !== e && a.form === e.form) {
                var i = a[rt] || null;
                if (!i) throw Error(c(90));
                Ur(
                  a,
                  i.value,
                  i.defaultValue,
                  i.defaultValue,
                  i.checked,
                  i.defaultChecked,
                  i.type,
                  i.name,
                );
              }
            }
            for (t = 0; t < n.length; t++)
              ((a = n[t]), a.form === e.form && Iu(a));
          }
          break e;
        case "textarea":
          tf(e, n.value, n.defaultValue);
          break e;
        case "select":
          ((t = n.value), t != null && kl(e, !!n.multiple, t, !1));
      }
    }
  }
  var qr = !1;
  function rf(e, t, n) {
    if (qr) return e(t, n);
    qr = !0;
    try {
      var a = e(t);
      return a;
    } finally {
      if (
        ((qr = !1),
        (Ll !== null || Bl !== null) &&
          (Ti(), Ll && ((t = Ll), (e = Bl), (Bl = Ll = null), sf(t), e)))
      )
        for (t = 0; t < e.length; t++) sf(e[t]);
    }
  }
  function Ta(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var a = n[rt] || null;
    if (a === null) return null;
    n = a[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        ((a = !a.disabled) ||
          ((e = e.type),
          (a = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !a));
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(c(231, t, typeof n));
    return n;
  }
  var ln = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    Gr = !1;
  if (ln)
    try {
      var Oa = {};
      (Object.defineProperty(Oa, "passive", {
        get: function () {
          Gr = !0;
        },
      }),
        window.addEventListener("test", Oa, Oa),
        window.removeEventListener("test", Oa, Oa));
    } catch {
      Gr = !1;
    }
  var An = null,
    Xr = null,
    Ys = null;
  function of() {
    if (Ys) return Ys;
    var e,
      t = Xr,
      n = t.length,
      a,
      i = "value" in An ? An.value : An.textContent,
      o = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++);
    var m = n - e;
    for (a = 1; a <= m && t[n - a] === i[o - a]; a++);
    return (Ys = i.slice(e, 1 < a ? 1 - a : void 0));
  }
  function Qs(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Vs() {
    return !0;
  }
  function cf() {
    return !1;
  }
  function ot(e) {
    function t(n, a, i, o, m) {
      ((this._reactName = n),
        (this._targetInst = i),
        (this.type = a),
        (this.nativeEvent = o),
        (this.target = m),
        (this.currentTarget = null));
      for (var x in e)
        e.hasOwnProperty(x) && ((n = e[x]), (this[x] = n ? n(o) : o[x]));
      return (
        (this.isDefaultPrevented = (
          o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
        )
          ? Vs
          : cf),
        (this.isPropagationStopped = cf),
        this
      );
    }
    return (
      g(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = Vs));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = Vs));
        },
        persist: function () {},
        isPersistent: Vs,
      }),
      t
    );
  }
  var ol = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Zs = ot(ol),
    Ca = g({}, ol, { view: 0, detail: 0 }),
    ty = ot(Ca),
    Yr,
    Qr,
    Ra,
    Ks = g({}, Ca, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Zr,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== Ra &&
              (Ra && e.type === "mousemove"
                ? ((Yr = e.screenX - Ra.screenX), (Qr = e.screenY - Ra.screenY))
                : (Qr = Yr = 0),
              (Ra = e)),
            Yr);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : Qr;
      },
    }),
    uf = ot(Ks),
    ny = g({}, Ks, { dataTransfer: 0 }),
    ly = ot(ny),
    ay = g({}, Ca, { relatedTarget: 0 }),
    Vr = ot(ay),
    sy = g({}, ol, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    iy = ot(sy),
    ry = g({}, ol, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    oy = ot(ry),
    cy = g({}, ol, { data: 0 }),
    ff = ot(cy),
    uy = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    fy = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
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
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    dy = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function my(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = dy[e])
        ? !!t[e]
        : !1;
  }
  function Zr() {
    return my;
  }
  var hy = g({}, Ca, {
      key: function (e) {
        if (e.key) {
          var t = uy[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = Qs(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
            ? fy[e.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Zr,
      charCode: function (e) {
        return e.type === "keypress" ? Qs(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? Qs(e)
          : e.type === "keydown" || e.type === "keyup"
            ? e.keyCode
            : 0;
      },
    }),
    py = ot(hy),
    xy = g({}, Ks, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    df = ot(xy),
    yy = g({}, Ca, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Zr,
    }),
    gy = ot(yy),
    vy = g({}, ol, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    by = ot(vy),
    wy = g({}, Ks, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
            ? -e.wheelDeltaX
            : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
            ? -e.wheelDeltaY
            : "wheelDelta" in e
              ? -e.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    Sy = ot(wy),
    Ny = g({}, ol, { newState: 0, oldState: 0 }),
    Ey = ot(Ny),
    jy = [9, 13, 27, 32],
    Kr = ln && "CompositionEvent" in window,
    Ma = null;
  ln && "documentMode" in document && (Ma = document.documentMode);
  var Ay = ln && "TextEvent" in window && !Ma,
    mf = ln && (!Kr || (Ma && 8 < Ma && 11 >= Ma)),
    hf = " ",
    pf = !1;
  function xf(e, t) {
    switch (e) {
      case "keyup":
        return jy.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function yf(e) {
    return (
      (e = e.detail),
      typeof e == "object" && "data" in e ? e.data : null
    );
  }
  var ql = !1;
  function Ty(e, t) {
    switch (e) {
      case "compositionend":
        return yf(t);
      case "keypress":
        return t.which !== 32 ? null : ((pf = !0), hf);
      case "textInput":
        return ((e = t.data), e === hf && pf ? null : e);
      default:
        return null;
    }
  }
  function Oy(e, t) {
    if (ql)
      return e === "compositionend" || (!Kr && xf(e, t))
        ? ((e = of()), (Ys = Xr = An = null), (ql = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return mf && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Cy = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function gf(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Cy[e.type] : t === "textarea";
  }
  function vf(e, t, n, a) {
    (Ll ? (Bl ? Bl.push(a) : (Bl = [a])) : (Ll = a),
      (t = Di(t, "onChange")),
      0 < t.length &&
        ((n = new Zs("onChange", "change", null, n, a)),
        e.push({ event: n, listeners: t })));
  }
  var _a = null,
    Da = null;
  function Ry(e) {
    Im(e, 0);
  }
  function Ps(e) {
    var t = Aa(e);
    if (Iu(t)) return e;
  }
  function bf(e, t) {
    if (e === "change") return t;
  }
  var wf = !1;
  if (ln) {
    var Pr;
    if (ln) {
      var Fr = "oninput" in document;
      if (!Fr) {
        var Sf = document.createElement("div");
        (Sf.setAttribute("oninput", "return;"),
          (Fr = typeof Sf.oninput == "function"));
      }
      Pr = Fr;
    } else Pr = !1;
    wf = Pr && (!document.documentMode || 9 < document.documentMode);
  }
  function Nf() {
    _a && (_a.detachEvent("onpropertychange", Ef), (Da = _a = null));
  }
  function Ef(e) {
    if (e.propertyName === "value" && Ps(Da)) {
      var t = [];
      (vf(t, Da, e, Br(e)), rf(Ry, t));
    }
  }
  function My(e, t, n) {
    e === "focusin"
      ? (Nf(), (_a = t), (Da = n), _a.attachEvent("onpropertychange", Ef))
      : e === "focusout" && Nf();
  }
  function _y(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Ps(Da);
  }
  function Dy(e, t) {
    if (e === "click") return Ps(t);
  }
  function zy(e, t) {
    if (e === "input" || e === "change") return Ps(t);
  }
  function Uy(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var xt = typeof Object.is == "function" ? Object.is : Uy;
  function za(e, t) {
    if (xt(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var n = Object.keys(e),
      a = Object.keys(t);
    if (n.length !== a.length) return !1;
    for (a = 0; a < n.length; a++) {
      var i = n[a];
      if (!Qt.call(t, i) || !xt(e[i], t[i])) return !1;
    }
    return !0;
  }
  function jf(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Af(e, t) {
    var n = jf(e);
    e = 0;
    for (var a; n; ) {
      if (n.nodeType === 3) {
        if (((a = e + n.textContent.length), e <= t && a >= t))
          return { node: n, offset: t - e };
        e = a;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = jf(n);
    }
  }
  function Tf(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? Tf(e, t.parentNode)
            : "contains" in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function Of(e) {
    e =
      e != null &&
      e.ownerDocument != null &&
      e.ownerDocument.defaultView != null
        ? e.ownerDocument.defaultView
        : window;
    for (var t = Gs(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Gs(e.document);
    }
    return t;
  }
  function Jr(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  var ky = ln && "documentMode" in document && 11 >= document.documentMode,
    Gl = null,
    $r = null,
    Ua = null,
    Wr = !1;
  function Cf(e, t, n) {
    var a =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Wr ||
      Gl == null ||
      Gl !== Gs(a) ||
      ((a = Gl),
      "selectionStart" in a && Jr(a)
        ? (a = { start: a.selectionStart, end: a.selectionEnd })
        : ((a = (
            (a.ownerDocument && a.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (a = {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset,
          })),
      (Ua && za(Ua, a)) ||
        ((Ua = a),
        (a = Di($r, "onSelect")),
        0 < a.length &&
          ((t = new Zs("onSelect", "select", null, t, n)),
          e.push({ event: t, listeners: a }),
          (t.target = Gl))));
  }
  function cl(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n["Webkit" + e] = "webkit" + t),
      (n["Moz" + e] = "moz" + t),
      n
    );
  }
  var Xl = {
      animationend: cl("Animation", "AnimationEnd"),
      animationiteration: cl("Animation", "AnimationIteration"),
      animationstart: cl("Animation", "AnimationStart"),
      transitionrun: cl("Transition", "TransitionRun"),
      transitionstart: cl("Transition", "TransitionStart"),
      transitioncancel: cl("Transition", "TransitionCancel"),
      transitionend: cl("Transition", "TransitionEnd"),
    },
    Ir = {},
    Rf = {};
  ln &&
    ((Rf = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Xl.animationend.animation,
      delete Xl.animationiteration.animation,
      delete Xl.animationstart.animation),
    "TransitionEvent" in window || delete Xl.transitionend.transition);
  function ul(e) {
    if (Ir[e]) return Ir[e];
    if (!Xl[e]) return e;
    var t = Xl[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in Rf) return (Ir[e] = t[n]);
    return e;
  }
  var Mf = ul("animationend"),
    _f = ul("animationiteration"),
    Df = ul("animationstart"),
    Hy = ul("transitionrun"),
    Ly = ul("transitionstart"),
    By = ul("transitioncancel"),
    zf = ul("transitionend"),
    Uf = new Map(),
    eo =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  eo.push("scrollEnd");
  function kt(e, t) {
    (Uf.set(e, t), rl(t, [e]));
  }
  var kf = new WeakMap();
  function Ot(e, t) {
    if (typeof e == "object" && e !== null) {
      var n = kf.get(e);
      return n !== void 0
        ? n
        : ((t = { value: e, source: t, stack: $u(t) }), kf.set(e, t), t);
    }
    return { value: e, source: t, stack: $u(t) };
  }
  var Ct = [],
    Yl = 0,
    to = 0;
  function Fs() {
    for (var e = Yl, t = (to = Yl = 0); t < e; ) {
      var n = Ct[t];
      Ct[t++] = null;
      var a = Ct[t];
      Ct[t++] = null;
      var i = Ct[t];
      Ct[t++] = null;
      var o = Ct[t];
      if (((Ct[t++] = null), a !== null && i !== null)) {
        var m = a.pending;
        (m === null ? (i.next = i) : ((i.next = m.next), (m.next = i)),
          (a.pending = i));
      }
      o !== 0 && Hf(n, i, o);
    }
  }
  function Js(e, t, n, a) {
    ((Ct[Yl++] = e),
      (Ct[Yl++] = t),
      (Ct[Yl++] = n),
      (Ct[Yl++] = a),
      (to |= a),
      (e.lanes |= a),
      (e = e.alternate),
      e !== null && (e.lanes |= a));
  }
  function no(e, t, n, a) {
    return (Js(e, t, n, a), $s(e));
  }
  function Ql(e, t) {
    return (Js(e, null, null, t), $s(e));
  }
  function Hf(e, t, n) {
    e.lanes |= n;
    var a = e.alternate;
    a !== null && (a.lanes |= n);
    for (var i = !1, o = e.return; o !== null; )
      ((o.childLanes |= n),
        (a = o.alternate),
        a !== null && (a.childLanes |= n),
        o.tag === 22 &&
          ((e = o.stateNode), e === null || e._visibility & 1 || (i = !0)),
        (e = o),
        (o = o.return));
    return e.tag === 3
      ? ((o = e.stateNode),
        i &&
          t !== null &&
          ((i = 31 - pt(n)),
          (e = o.hiddenUpdates),
          (a = e[i]),
          a === null ? (e[i] = [t]) : a.push(t),
          (t.lane = n | 536870912)),
        o)
      : null;
  }
  function $s(e) {
    if (50 < is) throw ((is = 0), (cc = null), Error(c(185)));
    for (var t = e.return; t !== null; ) ((e = t), (t = e.return));
    return e.tag === 3 ? e.stateNode : null;
  }
  var Vl = {};
  function qy(e, t, n, a) {
    ((this.tag = e),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = a),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function yt(e, t, n, a) {
    return new qy(e, t, n, a);
  }
  function lo(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function an(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = yt(e.tag, t, e.key, e.mode)),
          (n.elementType = e.elementType),
          (n.type = e.type),
          (n.stateNode = e.stateNode),
          (n.alternate = e),
          (e.alternate = n))
        : ((n.pendingProps = t),
          (n.type = e.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = e.flags & 65011712),
      (n.childLanes = e.childLanes),
      (n.lanes = e.lanes),
      (n.child = e.child),
      (n.memoizedProps = e.memoizedProps),
      (n.memoizedState = e.memoizedState),
      (n.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (n.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (n.sibling = e.sibling),
      (n.index = e.index),
      (n.ref = e.ref),
      (n.refCleanup = e.refCleanup),
      n
    );
  }
  function Lf(e, t) {
    e.flags &= 65011714;
    var n = e.alternate;
    return (
      n === null
        ? ((e.childLanes = 0),
          (e.lanes = t),
          (e.child = null),
          (e.subtreeFlags = 0),
          (e.memoizedProps = null),
          (e.memoizedState = null),
          (e.updateQueue = null),
          (e.dependencies = null),
          (e.stateNode = null))
        : ((e.childLanes = n.childLanes),
          (e.lanes = n.lanes),
          (e.child = n.child),
          (e.subtreeFlags = 0),
          (e.deletions = null),
          (e.memoizedProps = n.memoizedProps),
          (e.memoizedState = n.memoizedState),
          (e.updateQueue = n.updateQueue),
          (e.type = n.type),
          (t = n.dependencies),
          (e.dependencies =
            t === null
              ? null
              : { lanes: t.lanes, firstContext: t.firstContext })),
      e
    );
  }
  function Ws(e, t, n, a, i, o) {
    var m = 0;
    if (((a = e), typeof e == "function")) lo(e) && (m = 1);
    else if (typeof e == "string")
      m = Xg(e, n, le.current)
        ? 26
        : e === "html" || e === "head" || e === "body"
          ? 27
          : 5;
    else
      e: switch (e) {
        case ce:
          return (
            (e = yt(31, n, t, i)),
            (e.elementType = ce),
            (e.lanes = o),
            e
          );
        case U:
          return fl(n.children, i, o, t);
        case O:
          ((m = 8), (i |= 24));
          break;
        case _:
          return (
            (e = yt(12, n, t, i | 2)),
            (e.elementType = _),
            (e.lanes = o),
            e
          );
        case Q:
          return ((e = yt(13, n, t, i)), (e.elementType = Q), (e.lanes = o), e);
        case F:
          return ((e = yt(19, n, t, i)), (e.elementType = F), (e.lanes = o), e);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case q:
              case X:
                m = 10;
                break e;
              case Y:
                m = 9;
                break e;
              case Z:
                m = 11;
                break e;
              case $:
                m = 14;
                break e;
              case K:
                ((m = 16), (a = null));
                break e;
            }
          ((m = 29),
            (n = Error(c(130, e === null ? "null" : typeof e, ""))),
            (a = null));
      }
    return (
      (t = yt(m, n, t, i)),
      (t.elementType = e),
      (t.type = a),
      (t.lanes = o),
      t
    );
  }
  function fl(e, t, n, a) {
    return ((e = yt(7, e, a, t)), (e.lanes = n), e);
  }
  function ao(e, t, n) {
    return ((e = yt(6, e, null, t)), (e.lanes = n), e);
  }
  function so(e, t, n) {
    return (
      (t = yt(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  var Zl = [],
    Kl = 0,
    Is = null,
    ei = 0,
    Rt = [],
    Mt = 0,
    dl = null,
    sn = 1,
    rn = "";
  function ml(e, t) {
    ((Zl[Kl++] = ei), (Zl[Kl++] = Is), (Is = e), (ei = t));
  }
  function Bf(e, t, n) {
    ((Rt[Mt++] = sn), (Rt[Mt++] = rn), (Rt[Mt++] = dl), (dl = e));
    var a = sn;
    e = rn;
    var i = 32 - pt(a) - 1;
    ((a &= ~(1 << i)), (n += 1));
    var o = 32 - pt(t) + i;
    if (30 < o) {
      var m = i - (i % 5);
      ((o = (a & ((1 << m) - 1)).toString(32)),
        (a >>= m),
        (i -= m),
        (sn = (1 << (32 - pt(t) + i)) | (n << i) | a),
        (rn = o + e));
    } else ((sn = (1 << o) | (n << i) | a), (rn = e));
  }
  function io(e) {
    e.return !== null && (ml(e, 1), Bf(e, 1, 0));
  }
  function ro(e) {
    for (; e === Is; )
      ((Is = Zl[--Kl]), (Zl[Kl] = null), (ei = Zl[--Kl]), (Zl[Kl] = null));
    for (; e === dl; )
      ((dl = Rt[--Mt]),
        (Rt[Mt] = null),
        (rn = Rt[--Mt]),
        (Rt[Mt] = null),
        (sn = Rt[--Mt]),
        (Rt[Mt] = null));
  }
  var st = null,
    Le = null,
    Ee = !1,
    hl = null,
    Zt = !1,
    oo = Error(c(519));
  function pl(e) {
    var t = Error(c(418, ""));
    throw (La(Ot(t, e)), oo);
  }
  function qf(e) {
    var t = e.stateNode,
      n = e.type,
      a = e.memoizedProps;
    switch (((t[nt] = e), (t[rt] = a), n)) {
      case "dialog":
        (ve("cancel", t), ve("close", t));
        break;
      case "iframe":
      case "object":
      case "embed":
        ve("load", t);
        break;
      case "video":
      case "audio":
        for (n = 0; n < os.length; n++) ve(os[n], t);
        break;
      case "source":
        ve("error", t);
        break;
      case "img":
      case "image":
      case "link":
        (ve("error", t), ve("load", t));
        break;
      case "details":
        ve("toggle", t);
        break;
      case "input":
        (ve("invalid", t),
          ef(
            t,
            a.value,
            a.defaultValue,
            a.checked,
            a.defaultChecked,
            a.type,
            a.name,
            !0,
          ),
          qs(t));
        break;
      case "select":
        ve("invalid", t);
        break;
      case "textarea":
        (ve("invalid", t), nf(t, a.value, a.defaultValue, a.children), qs(t));
    }
    ((n = a.children),
      (typeof n != "string" && typeof n != "number" && typeof n != "bigint") ||
      t.textContent === "" + n ||
      a.suppressHydrationWarning === !0 ||
      lh(t.textContent, n)
        ? (a.popover != null && (ve("beforetoggle", t), ve("toggle", t)),
          a.onScroll != null && ve("scroll", t),
          a.onScrollEnd != null && ve("scrollend", t),
          a.onClick != null && (t.onclick = zi),
          (t = !0))
        : (t = !1),
      t || pl(e));
  }
  function Gf(e) {
    for (st = e.return; st; )
      switch (st.tag) {
        case 5:
        case 13:
          Zt = !1;
          return;
        case 27:
        case 3:
          Zt = !0;
          return;
        default:
          st = st.return;
      }
  }
  function ka(e) {
    if (e !== st) return !1;
    if (!Ee) return (Gf(e), (Ee = !0), !1);
    var t = e.tag,
      n;
    if (
      ((n = t !== 3 && t !== 27) &&
        ((n = t === 5) &&
          ((n = e.type),
          (n =
            !(n !== "form" && n !== "button") || jc(e.type, e.memoizedProps))),
        (n = !n)),
      n && Le && pl(e),
      Gf(e),
      t === 13)
    ) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(c(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8)
            if (((n = e.data), n === "/$")) {
              if (t === 0) {
                Le = Lt(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
          e = e.nextSibling;
        }
        Le = null;
      }
    } else
      t === 27
        ? ((t = Le), Xn(e.type) ? ((e = Cc), (Cc = null), (Le = e)) : (Le = t))
        : (Le = st ? Lt(e.stateNode.nextSibling) : null);
    return !0;
  }
  function Ha() {
    ((Le = st = null), (Ee = !1));
  }
  function Xf() {
    var e = hl;
    return (
      e !== null &&
        (ft === null ? (ft = e) : ft.push.apply(ft, e), (hl = null)),
      e
    );
  }
  function La(e) {
    hl === null ? (hl = [e]) : hl.push(e);
  }
  var co = B(null),
    xl = null,
    on = null;
  function Tn(e, t, n) {
    (P(co, t._currentValue), (t._currentValue = n));
  }
  function cn(e) {
    ((e._currentValue = co.current), J(co));
  }
  function uo(e, t, n) {
    for (; e !== null; ) {
      var a = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), a !== null && (a.childLanes |= t))
          : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t),
        e === n)
      )
        break;
      e = e.return;
    }
  }
  function fo(e, t, n, a) {
    var i = e.child;
    for (i !== null && (i.return = e); i !== null; ) {
      var o = i.dependencies;
      if (o !== null) {
        var m = i.child;
        o = o.firstContext;
        e: for (; o !== null; ) {
          var x = o;
          o = i;
          for (var S = 0; S < t.length; S++)
            if (x.context === t[S]) {
              ((o.lanes |= n),
                (x = o.alternate),
                x !== null && (x.lanes |= n),
                uo(o.return, n, e),
                a || (m = null));
              break e;
            }
          o = x.next;
        }
      } else if (i.tag === 18) {
        if (((m = i.return), m === null)) throw Error(c(341));
        ((m.lanes |= n),
          (o = m.alternate),
          o !== null && (o.lanes |= n),
          uo(m, n, e),
          (m = null));
      } else m = i.child;
      if (m !== null) m.return = i;
      else
        for (m = i; m !== null; ) {
          if (m === e) {
            m = null;
            break;
          }
          if (((i = m.sibling), i !== null)) {
            ((i.return = m.return), (m = i));
            break;
          }
          m = m.return;
        }
      i = m;
    }
  }
  function Ba(e, t, n, a) {
    e = null;
    for (var i = t, o = !1; i !== null; ) {
      if (!o) {
        if ((i.flags & 524288) !== 0) o = !0;
        else if ((i.flags & 262144) !== 0) break;
      }
      if (i.tag === 10) {
        var m = i.alternate;
        if (m === null) throw Error(c(387));
        if (((m = m.memoizedProps), m !== null)) {
          var x = i.type;
          xt(i.pendingProps.value, m.value) ||
            (e !== null ? e.push(x) : (e = [x]));
        }
      } else if (i === Ue.current) {
        if (((m = i.alternate), m === null)) throw Error(c(387));
        m.memoizedState.memoizedState !== i.memoizedState.memoizedState &&
          (e !== null ? e.push(hs) : (e = [hs]));
      }
      i = i.return;
    }
    (e !== null && fo(t, e, n, a), (t.flags |= 262144));
  }
  function ti(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!xt(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function yl(e) {
    ((xl = e),
      (on = null),
      (e = e.dependencies),
      e !== null && (e.firstContext = null));
  }
  function lt(e) {
    return Yf(xl, e);
  }
  function ni(e, t) {
    return (xl === null && yl(e), Yf(e, t));
  }
  function Yf(e, t) {
    var n = t._currentValue;
    if (((t = { context: t, memoizedValue: n, next: null }), on === null)) {
      if (e === null) throw Error(c(308));
      ((on = t),
        (e.dependencies = { lanes: 0, firstContext: t }),
        (e.flags |= 524288));
    } else on = on.next = t;
    return n;
  }
  var Gy =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var e = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (n, a) {
                  e.push(a);
                },
              });
            this.abort = function () {
              ((t.aborted = !0),
                e.forEach(function (n) {
                  return n();
                }));
            };
          },
    Xy = l.unstable_scheduleCallback,
    Yy = l.unstable_NormalPriority,
    Ve = {
      $$typeof: X,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function mo() {
    return { controller: new Gy(), data: new Map(), refCount: 0 };
  }
  function qa(e) {
    (e.refCount--,
      e.refCount === 0 &&
        Xy(Yy, function () {
          e.controller.abort();
        }));
  }
  var Ga = null,
    ho = 0,
    Pl = 0,
    Fl = null;
  function Qy(e, t) {
    if (Ga === null) {
      var n = (Ga = []);
      ((ho = 0),
        (Pl = xc()),
        (Fl = {
          status: "pending",
          value: void 0,
          then: function (a) {
            n.push(a);
          },
        }));
    }
    return (ho++, t.then(Qf, Qf), t);
  }
  function Qf() {
    if (--ho === 0 && Ga !== null) {
      Fl !== null && (Fl.status = "fulfilled");
      var e = Ga;
      ((Ga = null), (Pl = 0), (Fl = null));
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function Vy(e, t) {
    var n = [],
      a = {
        status: "pending",
        value: null,
        reason: null,
        then: function (i) {
          n.push(i);
        },
      };
    return (
      e.then(
        function () {
          ((a.status = "fulfilled"), (a.value = t));
          for (var i = 0; i < n.length; i++) (0, n[i])(t);
        },
        function (i) {
          for (a.status = "rejected", a.reason = i, i = 0; i < n.length; i++)
            (0, n[i])(void 0);
        },
      ),
      a
    );
  }
  var Vf = C.S;
  C.S = function (e, t) {
    (typeof t == "object" &&
      t !== null &&
      typeof t.then == "function" &&
      Qy(e, t),
      Vf !== null && Vf(e, t));
  };
  var gl = B(null);
  function po() {
    var e = gl.current;
    return e !== null ? e : ze.pooledCache;
  }
  function li(e, t) {
    t === null ? P(gl, gl.current) : P(gl, t.pool);
  }
  function Zf() {
    var e = po();
    return e === null ? null : { parent: Ve._currentValue, pool: e };
  }
  var Xa = Error(c(460)),
    Kf = Error(c(474)),
    ai = Error(c(542)),
    xo = { then: function () {} };
  function Pf(e) {
    return ((e = e.status), e === "fulfilled" || e === "rejected");
  }
  function si() {}
  function Ff(e, t, n) {
    switch (
      ((n = e[n]),
      n === void 0 ? e.push(t) : n !== t && (t.then(si, si), (t = n)),
      t.status)
    ) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw ((e = t.reason), $f(e), e);
      default:
        if (typeof t.status == "string") t.then(si, si);
        else {
          if (((e = ze), e !== null && 100 < e.shellSuspendCounter))
            throw Error(c(482));
          ((e = t),
            (e.status = "pending"),
            e.then(
              function (a) {
                if (t.status === "pending") {
                  var i = t;
                  ((i.status = "fulfilled"), (i.value = a));
                }
              },
              function (a) {
                if (t.status === "pending") {
                  var i = t;
                  ((i.status = "rejected"), (i.reason = a));
                }
              },
            ));
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw ((e = t.reason), $f(e), e);
        }
        throw ((Ya = t), Xa);
    }
  }
  var Ya = null;
  function Jf() {
    if (Ya === null) throw Error(c(459));
    var e = Ya;
    return ((Ya = null), e);
  }
  function $f(e) {
    if (e === Xa || e === ai) throw Error(c(483));
  }
  var On = !1;
  function yo(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function go(e, t) {
    ((e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          callbacks: null,
        }));
  }
  function Cn(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function Rn(e, t, n) {
    var a = e.updateQueue;
    if (a === null) return null;
    if (((a = a.shared), (Te & 2) !== 0)) {
      var i = a.pending;
      return (
        i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
        (a.pending = t),
        (t = $s(e)),
        Hf(e, null, n),
        t
      );
    }
    return (Js(e, a, t, n), $s(e));
  }
  function Qa(e, t, n) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194048) !== 0))
    ) {
      var a = t.lanes;
      ((a &= e.pendingLanes), (n |= a), (t.lanes = n), Yu(e, n));
    }
  }
  function vo(e, t) {
    var n = e.updateQueue,
      a = e.alternate;
    if (a !== null && ((a = a.updateQueue), n === a)) {
      var i = null,
        o = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var m = {
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: null,
            next: null,
          };
          (o === null ? (i = o = m) : (o = o.next = m), (n = n.next));
        } while (n !== null);
        o === null ? (i = o = t) : (o = o.next = t);
      } else i = o = t;
      ((n = {
        baseState: a.baseState,
        firstBaseUpdate: i,
        lastBaseUpdate: o,
        shared: a.shared,
        callbacks: a.callbacks,
      }),
        (e.updateQueue = n));
      return;
    }
    ((e = n.lastBaseUpdate),
      e === null ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t));
  }
  var bo = !1;
  function Va() {
    if (bo) {
      var e = Fl;
      if (e !== null) throw e;
    }
  }
  function Za(e, t, n, a) {
    bo = !1;
    var i = e.updateQueue;
    On = !1;
    var o = i.firstBaseUpdate,
      m = i.lastBaseUpdate,
      x = i.shared.pending;
    if (x !== null) {
      i.shared.pending = null;
      var S = x,
        R = S.next;
      ((S.next = null), m === null ? (o = R) : (m.next = R), (m = S));
      var k = e.alternate;
      k !== null &&
        ((k = k.updateQueue),
        (x = k.lastBaseUpdate),
        x !== m &&
          (x === null ? (k.firstBaseUpdate = R) : (x.next = R),
          (k.lastBaseUpdate = S)));
    }
    if (o !== null) {
      var L = i.baseState;
      ((m = 0), (k = R = S = null), (x = o));
      do {
        var D = x.lane & -536870913,
          z = D !== x.lane;
        if (z ? (we & D) === D : (a & D) === D) {
          (D !== 0 && D === Pl && (bo = !0),
            k !== null &&
              (k = k.next =
                {
                  lane: 0,
                  tag: x.tag,
                  payload: x.payload,
                  callback: null,
                  next: null,
                }));
          e: {
            var ue = e,
              ie = x;
            D = t;
            var Me = n;
            switch (ie.tag) {
              case 1:
                if (((ue = ie.payload), typeof ue == "function")) {
                  L = ue.call(Me, L, D);
                  break e;
                }
                L = ue;
                break e;
              case 3:
                ue.flags = (ue.flags & -65537) | 128;
              case 0:
                if (
                  ((ue = ie.payload),
                  (D = typeof ue == "function" ? ue.call(Me, L, D) : ue),
                  D == null)
                )
                  break e;
                L = g({}, L, D);
                break e;
              case 2:
                On = !0;
            }
          }
          ((D = x.callback),
            D !== null &&
              ((e.flags |= 64),
              z && (e.flags |= 8192),
              (z = i.callbacks),
              z === null ? (i.callbacks = [D]) : z.push(D)));
        } else
          ((z = {
            lane: D,
            tag: x.tag,
            payload: x.payload,
            callback: x.callback,
            next: null,
          }),
            k === null ? ((R = k = z), (S = L)) : (k = k.next = z),
            (m |= D));
        if (((x = x.next), x === null)) {
          if (((x = i.shared.pending), x === null)) break;
          ((z = x),
            (x = z.next),
            (z.next = null),
            (i.lastBaseUpdate = z),
            (i.shared.pending = null));
        }
      } while (!0);
      (k === null && (S = L),
        (i.baseState = S),
        (i.firstBaseUpdate = R),
        (i.lastBaseUpdate = k),
        o === null && (i.shared.lanes = 0),
        (Ln |= m),
        (e.lanes = m),
        (e.memoizedState = L));
    }
  }
  function Wf(e, t) {
    if (typeof e != "function") throw Error(c(191, e));
    e.call(t);
  }
  function If(e, t) {
    var n = e.callbacks;
    if (n !== null)
      for (e.callbacks = null, e = 0; e < n.length; e++) Wf(n[e], t);
  }
  var Jl = B(null),
    ii = B(0);
  function ed(e, t) {
    ((e = xn), P(ii, e), P(Jl, t), (xn = e | t.baseLanes));
  }
  function wo() {
    (P(ii, xn), P(Jl, Jl.current));
  }
  function So() {
    ((xn = ii.current), J(Jl), J(ii));
  }
  var Mn = 0,
    he = null,
    Ce = null,
    Ye = null,
    ri = !1,
    $l = !1,
    vl = !1,
    oi = 0,
    Ka = 0,
    Wl = null,
    Zy = 0;
  function Ge() {
    throw Error(c(321));
  }
  function No(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!xt(e[n], t[n])) return !1;
    return !0;
  }
  function Eo(e, t, n, a, i, o) {
    return (
      (Mn = o),
      (he = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (C.H = e === null || e.memoizedState === null ? Hd : Ld),
      (vl = !1),
      (o = n(a, i)),
      (vl = !1),
      $l && (o = nd(t, n, a, i)),
      td(e),
      o
    );
  }
  function td(e) {
    C.H = hi;
    var t = Ce !== null && Ce.next !== null;
    if (((Mn = 0), (Ye = Ce = he = null), (ri = !1), (Ka = 0), (Wl = null), t))
      throw Error(c(300));
    e === null ||
      Je ||
      ((e = e.dependencies), e !== null && ti(e) && (Je = !0));
  }
  function nd(e, t, n, a) {
    he = e;
    var i = 0;
    do {
      if (($l && (Wl = null), (Ka = 0), ($l = !1), 25 <= i))
        throw Error(c(301));
      if (((i += 1), (Ye = Ce = null), e.updateQueue != null)) {
        var o = e.updateQueue;
        ((o.lastEffect = null),
          (o.events = null),
          (o.stores = null),
          o.memoCache != null && (o.memoCache.index = 0));
      }
      ((C.H = Iy), (o = t(n, a)));
    } while ($l);
    return o;
  }
  function Ky() {
    var e = C.H,
      t = e.useState()[0];
    return (
      (t = typeof t.then == "function" ? Pa(t) : t),
      (e = e.useState()[0]),
      (Ce !== null ? Ce.memoizedState : null) !== e && (he.flags |= 1024),
      t
    );
  }
  function jo() {
    var e = oi !== 0;
    return ((oi = 0), e);
  }
  function Ao(e, t, n) {
    ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~n));
  }
  function To(e) {
    if (ri) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        (t !== null && (t.pending = null), (e = e.next));
      }
      ri = !1;
    }
    ((Mn = 0), (Ye = Ce = he = null), ($l = !1), (Ka = oi = 0), (Wl = null));
  }
  function ct() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (Ye === null ? (he.memoizedState = Ye = e) : (Ye = Ye.next = e), Ye);
  }
  function Qe() {
    if (Ce === null) {
      var e = he.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ce.next;
    var t = Ye === null ? he.memoizedState : Ye.next;
    if (t !== null) ((Ye = t), (Ce = e));
    else {
      if (e === null)
        throw he.alternate === null ? Error(c(467)) : Error(c(310));
      ((Ce = e),
        (e = {
          memoizedState: Ce.memoizedState,
          baseState: Ce.baseState,
          baseQueue: Ce.baseQueue,
          queue: Ce.queue,
          next: null,
        }),
        Ye === null ? (he.memoizedState = Ye = e) : (Ye = Ye.next = e));
    }
    return Ye;
  }
  function Oo() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Pa(e) {
    var t = Ka;
    return (
      (Ka += 1),
      Wl === null && (Wl = []),
      (e = Ff(Wl, e, t)),
      (t = he),
      (Ye === null ? t.memoizedState : Ye.next) === null &&
        ((t = t.alternate),
        (C.H = t === null || t.memoizedState === null ? Hd : Ld)),
      e
    );
  }
  function ci(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Pa(e);
      if (e.$$typeof === X) return lt(e);
    }
    throw Error(c(438, String(e)));
  }
  function Co(e) {
    var t = null,
      n = he.updateQueue;
    if ((n !== null && (t = n.memoCache), t == null)) {
      var a = he.alternate;
      a !== null &&
        ((a = a.updateQueue),
        a !== null &&
          ((a = a.memoCache),
          a != null &&
            (t = {
              data: a.data.map(function (i) {
                return i.slice();
              }),
              index: 0,
            })));
    }
    if (
      (t == null && (t = { data: [], index: 0 }),
      n === null && ((n = Oo()), (he.updateQueue = n)),
      (n.memoCache = t),
      (n = t.data[t.index]),
      n === void 0)
    )
      for (n = t.data[t.index] = Array(e), a = 0; a < e; a++) n[a] = ye;
    return (t.index++, n);
  }
  function un(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function ui(e) {
    var t = Qe();
    return Ro(t, Ce, e);
  }
  function Ro(e, t, n) {
    var a = e.queue;
    if (a === null) throw Error(c(311));
    a.lastRenderedReducer = n;
    var i = e.baseQueue,
      o = a.pending;
    if (o !== null) {
      if (i !== null) {
        var m = i.next;
        ((i.next = o.next), (o.next = m));
      }
      ((t.baseQueue = i = o), (a.pending = null));
    }
    if (((o = e.baseState), i === null)) e.memoizedState = o;
    else {
      t = i.next;
      var x = (m = null),
        S = null,
        R = t,
        k = !1;
      do {
        var L = R.lane & -536870913;
        if (L !== R.lane ? (we & L) === L : (Mn & L) === L) {
          var D = R.revertLane;
          if (D === 0)
            (S !== null &&
              (S = S.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: R.action,
                  hasEagerState: R.hasEagerState,
                  eagerState: R.eagerState,
                  next: null,
                }),
              L === Pl && (k = !0));
          else if ((Mn & D) === D) {
            ((R = R.next), D === Pl && (k = !0));
            continue;
          } else
            ((L = {
              lane: 0,
              revertLane: R.revertLane,
              action: R.action,
              hasEagerState: R.hasEagerState,
              eagerState: R.eagerState,
              next: null,
            }),
              S === null ? ((x = S = L), (m = o)) : (S = S.next = L),
              (he.lanes |= D),
              (Ln |= D));
          ((L = R.action),
            vl && n(o, L),
            (o = R.hasEagerState ? R.eagerState : n(o, L)));
        } else
          ((D = {
            lane: L,
            revertLane: R.revertLane,
            action: R.action,
            hasEagerState: R.hasEagerState,
            eagerState: R.eagerState,
            next: null,
          }),
            S === null ? ((x = S = D), (m = o)) : (S = S.next = D),
            (he.lanes |= L),
            (Ln |= L));
        R = R.next;
      } while (R !== null && R !== t);
      if (
        (S === null ? (m = o) : (S.next = x),
        !xt(o, e.memoizedState) && ((Je = !0), k && ((n = Fl), n !== null)))
      )
        throw n;
      ((e.memoizedState = o),
        (e.baseState = m),
        (e.baseQueue = S),
        (a.lastRenderedState = o));
    }
    return (i === null && (a.lanes = 0), [e.memoizedState, a.dispatch]);
  }
  function Mo(e) {
    var t = Qe(),
      n = t.queue;
    if (n === null) throw Error(c(311));
    n.lastRenderedReducer = e;
    var a = n.dispatch,
      i = n.pending,
      o = t.memoizedState;
    if (i !== null) {
      n.pending = null;
      var m = (i = i.next);
      do ((o = e(o, m.action)), (m = m.next));
      while (m !== i);
      (xt(o, t.memoizedState) || (Je = !0),
        (t.memoizedState = o),
        t.baseQueue === null && (t.baseState = o),
        (n.lastRenderedState = o));
    }
    return [o, a];
  }
  function ld(e, t, n) {
    var a = he,
      i = Qe(),
      o = Ee;
    if (o) {
      if (n === void 0) throw Error(c(407));
      n = n();
    } else n = t();
    var m = !xt((Ce || i).memoizedState, n);
    (m && ((i.memoizedState = n), (Je = !0)), (i = i.queue));
    var x = id.bind(null, a, i, e);
    if (
      (Fa(2048, 8, x, [e]),
      i.getSnapshot !== t || m || (Ye !== null && Ye.memoizedState.tag & 1))
    ) {
      if (
        ((a.flags |= 2048),
        Il(9, fi(), sd.bind(null, a, i, n, t), null),
        ze === null)
      )
        throw Error(c(349));
      o || (Mn & 124) !== 0 || ad(a, t, n);
    }
    return n;
  }
  function ad(e, t, n) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = he.updateQueue),
      t === null
        ? ((t = Oo()), (he.updateQueue = t), (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
  }
  function sd(e, t, n, a) {
    ((t.value = n), (t.getSnapshot = a), rd(t) && od(e));
  }
  function id(e, t, n) {
    return n(function () {
      rd(t) && od(e);
    });
  }
  function rd(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !xt(e, n);
    } catch {
      return !0;
    }
  }
  function od(e) {
    var t = Ql(e, 2);
    t !== null && St(t, e, 2);
  }
  function _o(e) {
    var t = ct();
    if (typeof e == "function") {
      var n = e;
      if (((e = n()), vl)) {
        En(!0);
        try {
          n();
        } finally {
          En(!1);
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = e),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: un,
        lastRenderedState: e,
      }),
      t
    );
  }
  function cd(e, t, n, a) {
    return ((e.baseState = n), Ro(e, Ce, typeof a == "function" ? a : un));
  }
  function Py(e, t, n, a, i) {
    if (mi(e)) throw Error(c(485));
    if (((e = t.action), e !== null)) {
      var o = {
        payload: i,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (m) {
          o.listeners.push(m);
        },
      };
      (C.T !== null ? n(!0) : (o.isTransition = !1),
        a(o),
        (n = t.pending),
        n === null
          ? ((o.next = t.pending = o), ud(t, o))
          : ((o.next = n.next), (t.pending = n.next = o)));
    }
  }
  function ud(e, t) {
    var n = t.action,
      a = t.payload,
      i = e.state;
    if (t.isTransition) {
      var o = C.T,
        m = {};
      C.T = m;
      try {
        var x = n(i, a),
          S = C.S;
        (S !== null && S(m, x), fd(e, t, x));
      } catch (R) {
        Do(e, t, R);
      } finally {
        C.T = o;
      }
    } else
      try {
        ((o = n(i, a)), fd(e, t, o));
      } catch (R) {
        Do(e, t, R);
      }
  }
  function fd(e, t, n) {
    n !== null && typeof n == "object" && typeof n.then == "function"
      ? n.then(
          function (a) {
            dd(e, t, a);
          },
          function (a) {
            return Do(e, t, a);
          },
        )
      : dd(e, t, n);
  }
  function dd(e, t, n) {
    ((t.status = "fulfilled"),
      (t.value = n),
      md(t),
      (e.state = n),
      (t = e.pending),
      t !== null &&
        ((n = t.next),
        n === t ? (e.pending = null) : ((n = n.next), (t.next = n), ud(e, n))));
  }
  function Do(e, t, n) {
    var a = e.pending;
    if (((e.pending = null), a !== null)) {
      a = a.next;
      do ((t.status = "rejected"), (t.reason = n), md(t), (t = t.next));
      while (t !== a);
    }
    e.action = null;
  }
  function md(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function hd(e, t) {
    return t;
  }
  function pd(e, t) {
    if (Ee) {
      var n = ze.formState;
      if (n !== null) {
        e: {
          var a = he;
          if (Ee) {
            if (Le) {
              t: {
                for (var i = Le, o = Zt; i.nodeType !== 8; ) {
                  if (!o) {
                    i = null;
                    break t;
                  }
                  if (((i = Lt(i.nextSibling)), i === null)) {
                    i = null;
                    break t;
                  }
                }
                ((o = i.data), (i = o === "F!" || o === "F" ? i : null));
              }
              if (i) {
                ((Le = Lt(i.nextSibling)), (a = i.data === "F!"));
                break e;
              }
            }
            pl(a);
          }
          a = !1;
        }
        a && (t = n[0]);
      }
    }
    return (
      (n = ct()),
      (n.memoizedState = n.baseState = t),
      (a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: hd,
        lastRenderedState: t,
      }),
      (n.queue = a),
      (n = zd.bind(null, he, a)),
      (a.dispatch = n),
      (a = _o(!1)),
      (o = Lo.bind(null, he, !1, a.queue)),
      (a = ct()),
      (i = { state: t, dispatch: null, action: e, pending: null }),
      (a.queue = i),
      (n = Py.bind(null, he, i, o, n)),
      (i.dispatch = n),
      (a.memoizedState = e),
      [t, n, !1]
    );
  }
  function xd(e) {
    var t = Qe();
    return yd(t, Ce, e);
  }
  function yd(e, t, n) {
    if (
      ((t = Ro(e, t, hd)[0]),
      (e = ui(un)[0]),
      typeof t == "object" && t !== null && typeof t.then == "function")
    )
      try {
        var a = Pa(t);
      } catch (m) {
        throw m === Xa ? ai : m;
      }
    else a = t;
    t = Qe();
    var i = t.queue,
      o = i.dispatch;
    return (
      n !== t.memoizedState &&
        ((he.flags |= 2048), Il(9, fi(), Fy.bind(null, i, n), null)),
      [a, o, e]
    );
  }
  function Fy(e, t) {
    e.action = t;
  }
  function gd(e) {
    var t = Qe(),
      n = Ce;
    if (n !== null) return yd(t, n, e);
    (Qe(), (t = t.memoizedState), (n = Qe()));
    var a = n.queue.dispatch;
    return ((n.memoizedState = e), [t, a, !1]);
  }
  function Il(e, t, n, a) {
    return (
      (e = { tag: e, create: n, deps: a, inst: t, next: null }),
      (t = he.updateQueue),
      t === null && ((t = Oo()), (he.updateQueue = t)),
      (n = t.lastEffect),
      n === null
        ? (t.lastEffect = e.next = e)
        : ((a = n.next), (n.next = e), (e.next = a), (t.lastEffect = e)),
      e
    );
  }
  function fi() {
    return { destroy: void 0, resource: void 0 };
  }
  function vd() {
    return Qe().memoizedState;
  }
  function di(e, t, n, a) {
    var i = ct();
    ((a = a === void 0 ? null : a),
      (he.flags |= e),
      (i.memoizedState = Il(1 | t, fi(), n, a)));
  }
  function Fa(e, t, n, a) {
    var i = Qe();
    a = a === void 0 ? null : a;
    var o = i.memoizedState.inst;
    Ce !== null && a !== null && No(a, Ce.memoizedState.deps)
      ? (i.memoizedState = Il(t, o, n, a))
      : ((he.flags |= e), (i.memoizedState = Il(1 | t, o, n, a)));
  }
  function bd(e, t) {
    di(8390656, 8, e, t);
  }
  function wd(e, t) {
    Fa(2048, 8, e, t);
  }
  function Sd(e, t) {
    return Fa(4, 2, e, t);
  }
  function Nd(e, t) {
    return Fa(4, 4, e, t);
  }
  function Ed(e, t) {
    if (typeof t == "function") {
      e = e();
      var n = t(e);
      return function () {
        typeof n == "function" ? n() : t(null);
      };
    }
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function jd(e, t, n) {
    ((n = n != null ? n.concat([e]) : null), Fa(4, 4, Ed.bind(null, t, e), n));
  }
  function zo() {}
  function Ad(e, t) {
    var n = Qe();
    t = t === void 0 ? null : t;
    var a = n.memoizedState;
    return t !== null && No(t, a[1]) ? a[0] : ((n.memoizedState = [e, t]), e);
  }
  function Td(e, t) {
    var n = Qe();
    t = t === void 0 ? null : t;
    var a = n.memoizedState;
    if (t !== null && No(t, a[1])) return a[0];
    if (((a = e()), vl)) {
      En(!0);
      try {
        e();
      } finally {
        En(!1);
      }
    }
    return ((n.memoizedState = [a, t]), a);
  }
  function Uo(e, t, n) {
    return n === void 0 || (Mn & 1073741824) !== 0
      ? (e.memoizedState = t)
      : ((e.memoizedState = n), (e = Rm()), (he.lanes |= e), (Ln |= e), n);
  }
  function Od(e, t, n, a) {
    return xt(n, t)
      ? n
      : Jl.current !== null
        ? ((e = Uo(e, n, a)), xt(e, t) || (Je = !0), e)
        : (Mn & 42) === 0
          ? ((Je = !0), (e.memoizedState = n))
          : ((e = Rm()), (he.lanes |= e), (Ln |= e), t);
  }
  function Cd(e, t, n, a, i) {
    var o = G.p;
    G.p = o !== 0 && 8 > o ? o : 8;
    var m = C.T,
      x = {};
    ((C.T = x), Lo(e, !1, t, n));
    try {
      var S = i(),
        R = C.S;
      if (
        (R !== null && R(x, S),
        S !== null && typeof S == "object" && typeof S.then == "function")
      ) {
        var k = Vy(S, a);
        Ja(e, t, k, wt(e));
      } else Ja(e, t, a, wt(e));
    } catch (L) {
      Ja(e, t, { then: function () {}, status: "rejected", reason: L }, wt());
    } finally {
      ((G.p = o), (C.T = m));
    }
  }
  function Jy() {}
  function ko(e, t, n, a) {
    if (e.tag !== 5) throw Error(c(476));
    var i = Rd(e).queue;
    Cd(
      e,
      i,
      t,
      V,
      n === null
        ? Jy
        : function () {
            return (Md(e), n(a));
          },
    );
  }
  function Rd(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: V,
      baseState: V,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: un,
        lastRenderedState: V,
      },
      next: null,
    };
    var n = {};
    return (
      (t.next = {
        memoizedState: n,
        baseState: n,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: un,
          lastRenderedState: n,
        },
        next: null,
      }),
      (e.memoizedState = t),
      (e = e.alternate),
      e !== null && (e.memoizedState = t),
      t
    );
  }
  function Md(e) {
    var t = Rd(e).next.queue;
    Ja(e, t, {}, wt());
  }
  function Ho() {
    return lt(hs);
  }
  function _d() {
    return Qe().memoizedState;
  }
  function Dd() {
    return Qe().memoizedState;
  }
  function $y(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var n = wt();
          e = Cn(n);
          var a = Rn(t, e, n);
          (a !== null && (St(a, t, n), Qa(a, t, n)),
            (t = { cache: mo() }),
            (e.payload = t));
          return;
      }
      t = t.return;
    }
  }
  function Wy(e, t, n) {
    var a = wt();
    ((n = {
      lane: a,
      revertLane: 0,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      mi(e)
        ? Ud(t, n)
        : ((n = no(e, t, n, a)), n !== null && (St(n, e, a), kd(n, t, a))));
  }
  function zd(e, t, n) {
    var a = wt();
    Ja(e, t, n, a);
  }
  function Ja(e, t, n, a) {
    var i = {
      lane: a,
      revertLane: 0,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (mi(e)) Ud(t, i);
    else {
      var o = e.alternate;
      if (
        e.lanes === 0 &&
        (o === null || o.lanes === 0) &&
        ((o = t.lastRenderedReducer), o !== null)
      )
        try {
          var m = t.lastRenderedState,
            x = o(m, n);
          if (((i.hasEagerState = !0), (i.eagerState = x), xt(x, m)))
            return (Js(e, t, i, 0), ze === null && Fs(), !1);
        } catch {}
      if (((n = no(e, t, i, a)), n !== null))
        return (St(n, e, a), kd(n, t, a), !0);
    }
    return !1;
  }
  function Lo(e, t, n, a) {
    if (
      ((a = {
        lane: 2,
        revertLane: xc(),
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      mi(e))
    ) {
      if (t) throw Error(c(479));
    } else ((t = no(e, n, a, 2)), t !== null && St(t, e, 2));
  }
  function mi(e) {
    var t = e.alternate;
    return e === he || (t !== null && t === he);
  }
  function Ud(e, t) {
    $l = ri = !0;
    var n = e.pending;
    (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t));
  }
  function kd(e, t, n) {
    if ((n & 4194048) !== 0) {
      var a = t.lanes;
      ((a &= e.pendingLanes), (n |= a), (t.lanes = n), Yu(e, n));
    }
  }
  var hi = {
      readContext: lt,
      use: ci,
      useCallback: Ge,
      useContext: Ge,
      useEffect: Ge,
      useImperativeHandle: Ge,
      useLayoutEffect: Ge,
      useInsertionEffect: Ge,
      useMemo: Ge,
      useReducer: Ge,
      useRef: Ge,
      useState: Ge,
      useDebugValue: Ge,
      useDeferredValue: Ge,
      useTransition: Ge,
      useSyncExternalStore: Ge,
      useId: Ge,
      useHostTransitionStatus: Ge,
      useFormState: Ge,
      useActionState: Ge,
      useOptimistic: Ge,
      useMemoCache: Ge,
      useCacheRefresh: Ge,
    },
    Hd = {
      readContext: lt,
      use: ci,
      useCallback: function (e, t) {
        return ((ct().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: lt,
      useEffect: bd,
      useImperativeHandle: function (e, t, n) {
        ((n = n != null ? n.concat([e]) : null),
          di(4194308, 4, Ed.bind(null, t, e), n));
      },
      useLayoutEffect: function (e, t) {
        return di(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        di(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = ct();
        t = t === void 0 ? null : t;
        var a = e();
        if (vl) {
          En(!0);
          try {
            e();
          } finally {
            En(!1);
          }
        }
        return ((n.memoizedState = [a, t]), a);
      },
      useReducer: function (e, t, n) {
        var a = ct();
        if (n !== void 0) {
          var i = n(t);
          if (vl) {
            En(!0);
            try {
              n(t);
            } finally {
              En(!1);
            }
          }
        } else i = t;
        return (
          (a.memoizedState = a.baseState = i),
          (e = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: i,
          }),
          (a.queue = e),
          (e = e.dispatch = Wy.bind(null, he, e)),
          [a.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = ct();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: function (e) {
        e = _o(e);
        var t = e.queue,
          n = zd.bind(null, he, t);
        return ((t.dispatch = n), [e.memoizedState, n]);
      },
      useDebugValue: zo,
      useDeferredValue: function (e, t) {
        var n = ct();
        return Uo(n, e, t);
      },
      useTransition: function () {
        var e = _o(!1);
        return (
          (e = Cd.bind(null, he, e.queue, !0, !1)),
          (ct().memoizedState = e),
          [!1, e]
        );
      },
      useSyncExternalStore: function (e, t, n) {
        var a = he,
          i = ct();
        if (Ee) {
          if (n === void 0) throw Error(c(407));
          n = n();
        } else {
          if (((n = t()), ze === null)) throw Error(c(349));
          (we & 124) !== 0 || ad(a, t, n);
        }
        i.memoizedState = n;
        var o = { value: n, getSnapshot: t };
        return (
          (i.queue = o),
          bd(id.bind(null, a, o, e), [e]),
          (a.flags |= 2048),
          Il(9, fi(), sd.bind(null, a, o, n, t), null),
          n
        );
      },
      useId: function () {
        var e = ct(),
          t = ze.identifierPrefix;
        if (Ee) {
          var n = rn,
            a = sn;
          ((n = (a & ~(1 << (32 - pt(a) - 1))).toString(32) + n),
            (t = "«" + t + "R" + n),
            (n = oi++),
            0 < n && (t += "H" + n.toString(32)),
            (t += "»"));
        } else ((n = Zy++), (t = "«" + t + "r" + n.toString(32) + "»"));
        return (e.memoizedState = t);
      },
      useHostTransitionStatus: Ho,
      useFormState: pd,
      useActionState: pd,
      useOptimistic: function (e) {
        var t = ct();
        t.memoizedState = t.baseState = e;
        var n = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (t.queue = n),
          (t = Lo.bind(null, he, !0, n)),
          (n.dispatch = t),
          [e, t]
        );
      },
      useMemoCache: Co,
      useCacheRefresh: function () {
        return (ct().memoizedState = $y.bind(null, he));
      },
    },
    Ld = {
      readContext: lt,
      use: ci,
      useCallback: Ad,
      useContext: lt,
      useEffect: wd,
      useImperativeHandle: jd,
      useInsertionEffect: Sd,
      useLayoutEffect: Nd,
      useMemo: Td,
      useReducer: ui,
      useRef: vd,
      useState: function () {
        return ui(un);
      },
      useDebugValue: zo,
      useDeferredValue: function (e, t) {
        var n = Qe();
        return Od(n, Ce.memoizedState, e, t);
      },
      useTransition: function () {
        var e = ui(un)[0],
          t = Qe().memoizedState;
        return [typeof e == "boolean" ? e : Pa(e), t];
      },
      useSyncExternalStore: ld,
      useId: _d,
      useHostTransitionStatus: Ho,
      useFormState: xd,
      useActionState: xd,
      useOptimistic: function (e, t) {
        var n = Qe();
        return cd(n, Ce, e, t);
      },
      useMemoCache: Co,
      useCacheRefresh: Dd,
    },
    Iy = {
      readContext: lt,
      use: ci,
      useCallback: Ad,
      useContext: lt,
      useEffect: wd,
      useImperativeHandle: jd,
      useInsertionEffect: Sd,
      useLayoutEffect: Nd,
      useMemo: Td,
      useReducer: Mo,
      useRef: vd,
      useState: function () {
        return Mo(un);
      },
      useDebugValue: zo,
      useDeferredValue: function (e, t) {
        var n = Qe();
        return Ce === null ? Uo(n, e, t) : Od(n, Ce.memoizedState, e, t);
      },
      useTransition: function () {
        var e = Mo(un)[0],
          t = Qe().memoizedState;
        return [typeof e == "boolean" ? e : Pa(e), t];
      },
      useSyncExternalStore: ld,
      useId: _d,
      useHostTransitionStatus: Ho,
      useFormState: gd,
      useActionState: gd,
      useOptimistic: function (e, t) {
        var n = Qe();
        return Ce !== null
          ? cd(n, Ce, e, t)
          : ((n.baseState = e), [e, n.queue.dispatch]);
      },
      useMemoCache: Co,
      useCacheRefresh: Dd,
    },
    ea = null,
    $a = 0;
  function pi(e) {
    var t = $a;
    return (($a += 1), ea === null && (ea = []), Ff(ea, e, t));
  }
  function Wa(e, t) {
    ((t = t.props.ref), (e.ref = t !== void 0 ? t : null));
  }
  function xi(e, t) {
    throw t.$$typeof === N
      ? Error(c(525))
      : ((e = Object.prototype.toString.call(t)),
        Error(
          c(
            31,
            e === "[object Object]"
              ? "object with keys {" + Object.keys(t).join(", ") + "}"
              : e,
          ),
        ));
  }
  function Bd(e) {
    var t = e._init;
    return t(e._payload);
  }
  function qd(e) {
    function t(A, E) {
      if (e) {
        var T = A.deletions;
        T === null ? ((A.deletions = [E]), (A.flags |= 16)) : T.push(E);
      }
    }
    function n(A, E) {
      if (!e) return null;
      for (; E !== null; ) (t(A, E), (E = E.sibling));
      return null;
    }
    function a(A) {
      for (var E = new Map(); A !== null; )
        (A.key !== null ? E.set(A.key, A) : E.set(A.index, A), (A = A.sibling));
      return E;
    }
    function i(A, E) {
      return ((A = an(A, E)), (A.index = 0), (A.sibling = null), A);
    }
    function o(A, E, T) {
      return (
        (A.index = T),
        e
          ? ((T = A.alternate),
            T !== null
              ? ((T = T.index), T < E ? ((A.flags |= 67108866), E) : T)
              : ((A.flags |= 67108866), E))
          : ((A.flags |= 1048576), E)
      );
    }
    function m(A) {
      return (e && A.alternate === null && (A.flags |= 67108866), A);
    }
    function x(A, E, T, H) {
      return E === null || E.tag !== 6
        ? ((E = ao(T, A.mode, H)), (E.return = A), E)
        : ((E = i(E, T)), (E.return = A), E);
    }
    function S(A, E, T, H) {
      var I = T.type;
      return I === U
        ? k(A, E, T.props.children, H, T.key)
        : E !== null &&
            (E.elementType === I ||
              (typeof I == "object" &&
                I !== null &&
                I.$$typeof === K &&
                Bd(I) === E.type))
          ? ((E = i(E, T.props)), Wa(E, T), (E.return = A), E)
          : ((E = Ws(T.type, T.key, T.props, null, A.mode, H)),
            Wa(E, T),
            (E.return = A),
            E);
    }
    function R(A, E, T, H) {
      return E === null ||
        E.tag !== 4 ||
        E.stateNode.containerInfo !== T.containerInfo ||
        E.stateNode.implementation !== T.implementation
        ? ((E = so(T, A.mode, H)), (E.return = A), E)
        : ((E = i(E, T.children || [])), (E.return = A), E);
    }
    function k(A, E, T, H, I) {
      return E === null || E.tag !== 7
        ? ((E = fl(T, A.mode, H, I)), (E.return = A), E)
        : ((E = i(E, T)), (E.return = A), E);
    }
    function L(A, E, T) {
      if (
        (typeof E == "string" && E !== "") ||
        typeof E == "number" ||
        typeof E == "bigint"
      )
        return ((E = ao("" + E, A.mode, T)), (E.return = A), E);
      if (typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case j:
            return (
              (T = Ws(E.type, E.key, E.props, null, A.mode, T)),
              Wa(T, E),
              (T.return = A),
              T
            );
          case M:
            return ((E = so(E, A.mode, T)), (E.return = A), E);
          case K:
            var H = E._init;
            return ((E = H(E._payload)), L(A, E, T));
        }
        if (fe(E) || de(E))
          return ((E = fl(E, A.mode, T, null)), (E.return = A), E);
        if (typeof E.then == "function") return L(A, pi(E), T);
        if (E.$$typeof === X) return L(A, ni(A, E), T);
        xi(A, E);
      }
      return null;
    }
    function D(A, E, T, H) {
      var I = E !== null ? E.key : null;
      if (
        (typeof T == "string" && T !== "") ||
        typeof T == "number" ||
        typeof T == "bigint"
      )
        return I !== null ? null : x(A, E, "" + T, H);
      if (typeof T == "object" && T !== null) {
        switch (T.$$typeof) {
          case j:
            return T.key === I ? S(A, E, T, H) : null;
          case M:
            return T.key === I ? R(A, E, T, H) : null;
          case K:
            return ((I = T._init), (T = I(T._payload)), D(A, E, T, H));
        }
        if (fe(T) || de(T)) return I !== null ? null : k(A, E, T, H, null);
        if (typeof T.then == "function") return D(A, E, pi(T), H);
        if (T.$$typeof === X) return D(A, E, ni(A, T), H);
        xi(A, T);
      }
      return null;
    }
    function z(A, E, T, H, I) {
      if (
        (typeof H == "string" && H !== "") ||
        typeof H == "number" ||
        typeof H == "bigint"
      )
        return ((A = A.get(T) || null), x(E, A, "" + H, I));
      if (typeof H == "object" && H !== null) {
        switch (H.$$typeof) {
          case j:
            return (
              (A = A.get(H.key === null ? T : H.key) || null),
              S(E, A, H, I)
            );
          case M:
            return (
              (A = A.get(H.key === null ? T : H.key) || null),
              R(E, A, H, I)
            );
          case K:
            var xe = H._init;
            return ((H = xe(H._payload)), z(A, E, T, H, I));
        }
        if (fe(H) || de(H))
          return ((A = A.get(T) || null), k(E, A, H, I, null));
        if (typeof H.then == "function") return z(A, E, T, pi(H), I);
        if (H.$$typeof === X) return z(A, E, T, ni(E, H), I);
        xi(E, H);
      }
      return null;
    }
    function ue(A, E, T, H) {
      for (
        var I = null, xe = null, ae = E, oe = (E = 0), We = null;
        ae !== null && oe < T.length;
        oe++
      ) {
        ae.index > oe ? ((We = ae), (ae = null)) : (We = ae.sibling);
        var Ne = D(A, ae, T[oe], H);
        if (Ne === null) {
          ae === null && (ae = We);
          break;
        }
        (e && ae && Ne.alternate === null && t(A, ae),
          (E = o(Ne, E, oe)),
          xe === null ? (I = Ne) : (xe.sibling = Ne),
          (xe = Ne),
          (ae = We));
      }
      if (oe === T.length) return (n(A, ae), Ee && ml(A, oe), I);
      if (ae === null) {
        for (; oe < T.length; oe++)
          ((ae = L(A, T[oe], H)),
            ae !== null &&
              ((E = o(ae, E, oe)),
              xe === null ? (I = ae) : (xe.sibling = ae),
              (xe = ae)));
        return (Ee && ml(A, oe), I);
      }
      for (ae = a(ae); oe < T.length; oe++)
        ((We = z(ae, A, oe, T[oe], H)),
          We !== null &&
            (e &&
              We.alternate !== null &&
              ae.delete(We.key === null ? oe : We.key),
            (E = o(We, E, oe)),
            xe === null ? (I = We) : (xe.sibling = We),
            (xe = We)));
      return (
        e &&
          ae.forEach(function (Kn) {
            return t(A, Kn);
          }),
        Ee && ml(A, oe),
        I
      );
    }
    function ie(A, E, T, H) {
      if (T == null) throw Error(c(151));
      for (
        var I = null, xe = null, ae = E, oe = (E = 0), We = null, Ne = T.next();
        ae !== null && !Ne.done;
        oe++, Ne = T.next()
      ) {
        ae.index > oe ? ((We = ae), (ae = null)) : (We = ae.sibling);
        var Kn = D(A, ae, Ne.value, H);
        if (Kn === null) {
          ae === null && (ae = We);
          break;
        }
        (e && ae && Kn.alternate === null && t(A, ae),
          (E = o(Kn, E, oe)),
          xe === null ? (I = Kn) : (xe.sibling = Kn),
          (xe = Kn),
          (ae = We));
      }
      if (Ne.done) return (n(A, ae), Ee && ml(A, oe), I);
      if (ae === null) {
        for (; !Ne.done; oe++, Ne = T.next())
          ((Ne = L(A, Ne.value, H)),
            Ne !== null &&
              ((E = o(Ne, E, oe)),
              xe === null ? (I = Ne) : (xe.sibling = Ne),
              (xe = Ne)));
        return (Ee && ml(A, oe), I);
      }
      for (ae = a(ae); !Ne.done; oe++, Ne = T.next())
        ((Ne = z(ae, A, oe, Ne.value, H)),
          Ne !== null &&
            (e &&
              Ne.alternate !== null &&
              ae.delete(Ne.key === null ? oe : Ne.key),
            (E = o(Ne, E, oe)),
            xe === null ? (I = Ne) : (xe.sibling = Ne),
            (xe = Ne)));
      return (
        e &&
          ae.forEach(function (ev) {
            return t(A, ev);
          }),
        Ee && ml(A, oe),
        I
      );
    }
    function Me(A, E, T, H) {
      if (
        (typeof T == "object" &&
          T !== null &&
          T.type === U &&
          T.key === null &&
          (T = T.props.children),
        typeof T == "object" && T !== null)
      ) {
        switch (T.$$typeof) {
          case j:
            e: {
              for (var I = T.key; E !== null; ) {
                if (E.key === I) {
                  if (((I = T.type), I === U)) {
                    if (E.tag === 7) {
                      (n(A, E.sibling),
                        (H = i(E, T.props.children)),
                        (H.return = A),
                        (A = H));
                      break e;
                    }
                  } else if (
                    E.elementType === I ||
                    (typeof I == "object" &&
                      I !== null &&
                      I.$$typeof === K &&
                      Bd(I) === E.type)
                  ) {
                    (n(A, E.sibling),
                      (H = i(E, T.props)),
                      Wa(H, T),
                      (H.return = A),
                      (A = H));
                    break e;
                  }
                  n(A, E);
                  break;
                } else t(A, E);
                E = E.sibling;
              }
              T.type === U
                ? ((H = fl(T.props.children, A.mode, H, T.key)),
                  (H.return = A),
                  (A = H))
                : ((H = Ws(T.type, T.key, T.props, null, A.mode, H)),
                  Wa(H, T),
                  (H.return = A),
                  (A = H));
            }
            return m(A);
          case M:
            e: {
              for (I = T.key; E !== null; ) {
                if (E.key === I)
                  if (
                    E.tag === 4 &&
                    E.stateNode.containerInfo === T.containerInfo &&
                    E.stateNode.implementation === T.implementation
                  ) {
                    (n(A, E.sibling),
                      (H = i(E, T.children || [])),
                      (H.return = A),
                      (A = H));
                    break e;
                  } else {
                    n(A, E);
                    break;
                  }
                else t(A, E);
                E = E.sibling;
              }
              ((H = so(T, A.mode, H)), (H.return = A), (A = H));
            }
            return m(A);
          case K:
            return ((I = T._init), (T = I(T._payload)), Me(A, E, T, H));
        }
        if (fe(T)) return ue(A, E, T, H);
        if (de(T)) {
          if (((I = de(T)), typeof I != "function")) throw Error(c(150));
          return ((T = I.call(T)), ie(A, E, T, H));
        }
        if (typeof T.then == "function") return Me(A, E, pi(T), H);
        if (T.$$typeof === X) return Me(A, E, ni(A, T), H);
        xi(A, T);
      }
      return (typeof T == "string" && T !== "") ||
        typeof T == "number" ||
        typeof T == "bigint"
        ? ((T = "" + T),
          E !== null && E.tag === 6
            ? (n(A, E.sibling), (H = i(E, T)), (H.return = A), (A = H))
            : (n(A, E), (H = ao(T, A.mode, H)), (H.return = A), (A = H)),
          m(A))
        : n(A, E);
    }
    return function (A, E, T, H) {
      try {
        $a = 0;
        var I = Me(A, E, T, H);
        return ((ea = null), I);
      } catch (ae) {
        if (ae === Xa || ae === ai) throw ae;
        var xe = yt(29, ae, null, A.mode);
        return ((xe.lanes = H), (xe.return = A), xe);
      }
    };
  }
  var ta = qd(!0),
    Gd = qd(!1),
    _t = B(null),
    Kt = null;
  function _n(e) {
    var t = e.alternate;
    (P(Ze, Ze.current & 1),
      P(_t, e),
      Kt === null &&
        (t === null || Jl.current !== null || t.memoizedState !== null) &&
        (Kt = e));
  }
  function Xd(e) {
    if (e.tag === 22) {
      if ((P(Ze, Ze.current), P(_t, e), Kt === null)) {
        var t = e.alternate;
        t !== null && t.memoizedState !== null && (Kt = e);
      }
    } else Dn();
  }
  function Dn() {
    (P(Ze, Ze.current), P(_t, _t.current));
  }
  function fn(e) {
    (J(_t), Kt === e && (Kt = null), J(Ze));
  }
  var Ze = B(0);
  function yi(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (
          n !== null &&
          ((n = n.dehydrated), n === null || n.data === "$?" || Oc(n))
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        ((t.child.return = t), (t = t.child));
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
    return null;
  }
  function Bo(e, t, n, a) {
    ((t = e.memoizedState),
      (n = n(a, t)),
      (n = n == null ? t : g({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n));
  }
  var qo = {
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var a = wt(),
        i = Cn(a);
      ((i.payload = t),
        n != null && (i.callback = n),
        (t = Rn(e, i, a)),
        t !== null && (St(t, e, a), Qa(t, e, a)));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var a = wt(),
        i = Cn(a);
      ((i.tag = 1),
        (i.payload = t),
        n != null && (i.callback = n),
        (t = Rn(e, i, a)),
        t !== null && (St(t, e, a), Qa(t, e, a)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = wt(),
        a = Cn(n);
      ((a.tag = 2),
        t != null && (a.callback = t),
        (t = Rn(e, a, n)),
        t !== null && (St(t, e, n), Qa(t, e, n)));
    },
  };
  function Yd(e, t, n, a, i, o, m) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(a, o, m)
        : t.prototype && t.prototype.isPureReactComponent
          ? !za(n, a) || !za(i, o)
          : !0
    );
  }
  function Qd(e, t, n, a) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(n, a),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(n, a),
      t.state !== e && qo.enqueueReplaceState(t, t.state, null));
  }
  function bl(e, t) {
    var n = t;
    if ("ref" in t) {
      n = {};
      for (var a in t) a !== "ref" && (n[a] = t[a]);
    }
    if ((e = e.defaultProps)) {
      n === t && (n = g({}, n));
      for (var i in e) n[i] === void 0 && (n[i] = e[i]);
    }
    return n;
  }
  var gi =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var t = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof e == "object" &&
                e !== null &&
                typeof e.message == "string"
                  ? String(e.message)
                  : String(e),
              error: e,
            });
            if (!window.dispatchEvent(t)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", e);
            return;
          }
          console.error(e);
        };
  function Vd(e) {
    gi(e);
  }
  function Zd(e) {
    console.error(e);
  }
  function Kd(e) {
    gi(e);
  }
  function vi(e, t) {
    try {
      var n = e.onUncaughtError;
      n(t.value, { componentStack: t.stack });
    } catch (a) {
      setTimeout(function () {
        throw a;
      });
    }
  }
  function Pd(e, t, n) {
    try {
      var a = e.onCaughtError;
      a(n.value, {
        componentStack: n.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null,
      });
    } catch (i) {
      setTimeout(function () {
        throw i;
      });
    }
  }
  function Go(e, t, n) {
    return (
      (n = Cn(n)),
      (n.tag = 3),
      (n.payload = { element: null }),
      (n.callback = function () {
        vi(e, t);
      }),
      n
    );
  }
  function Fd(e) {
    return ((e = Cn(e)), (e.tag = 3), e);
  }
  function Jd(e, t, n, a) {
    var i = n.type.getDerivedStateFromError;
    if (typeof i == "function") {
      var o = a.value;
      ((e.payload = function () {
        return i(o);
      }),
        (e.callback = function () {
          Pd(t, n, a);
        }));
    }
    var m = n.stateNode;
    m !== null &&
      typeof m.componentDidCatch == "function" &&
      (e.callback = function () {
        (Pd(t, n, a),
          typeof i != "function" &&
            (Bn === null ? (Bn = new Set([this])) : Bn.add(this)));
        var x = a.stack;
        this.componentDidCatch(a.value, {
          componentStack: x !== null ? x : "",
        });
      });
  }
  function eg(e, t, n, a, i) {
    if (
      ((n.flags |= 32768),
      a !== null && typeof a == "object" && typeof a.then == "function")
    ) {
      if (
        ((t = n.alternate),
        t !== null && Ba(t, n, i, !0),
        (n = _t.current),
        n !== null)
      ) {
        switch (n.tag) {
          case 13:
            return (
              Kt === null ? fc() : n.alternate === null && Be === 0 && (Be = 3),
              (n.flags &= -257),
              (n.flags |= 65536),
              (n.lanes = i),
              a === xo
                ? (n.flags |= 16384)
                : ((t = n.updateQueue),
                  t === null ? (n.updateQueue = new Set([a])) : t.add(a),
                  mc(e, a, i)),
              !1
            );
          case 22:
            return (
              (n.flags |= 65536),
              a === xo
                ? (n.flags |= 16384)
                : ((t = n.updateQueue),
                  t === null
                    ? ((t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([a]),
                      }),
                      (n.updateQueue = t))
                    : ((n = t.retryQueue),
                      n === null ? (t.retryQueue = new Set([a])) : n.add(a)),
                  mc(e, a, i)),
              !1
            );
        }
        throw Error(c(435, n.tag));
      }
      return (mc(e, a, i), fc(), !1);
    }
    if (Ee)
      return (
        (t = _t.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = i),
            a !== oo && ((e = Error(c(422), { cause: a })), La(Ot(e, n))))
          : (a !== oo && ((t = Error(c(423), { cause: a })), La(Ot(t, n))),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (i &= -i),
            (e.lanes |= i),
            (a = Ot(a, n)),
            (i = Go(e.stateNode, a, i)),
            vo(e, i),
            Be !== 4 && (Be = 2)),
        !1
      );
    var o = Error(c(520), { cause: a });
    if (
      ((o = Ot(o, n)),
      ss === null ? (ss = [o]) : ss.push(o),
      Be !== 4 && (Be = 2),
      t === null)
    )
      return !0;
    ((a = Ot(a, n)), (n = t));
    do {
      switch (n.tag) {
        case 3:
          return (
            (n.flags |= 65536),
            (e = i & -i),
            (n.lanes |= e),
            (e = Go(n.stateNode, a, e)),
            vo(n, e),
            !1
          );
        case 1:
          if (
            ((t = n.type),
            (o = n.stateNode),
            (n.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == "function" ||
                (o !== null &&
                  typeof o.componentDidCatch == "function" &&
                  (Bn === null || !Bn.has(o)))))
          )
            return (
              (n.flags |= 65536),
              (i &= -i),
              (n.lanes |= i),
              (i = Fd(i)),
              Jd(i, e, n, a),
              vo(n, i),
              !1
            );
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var $d = Error(c(461)),
    Je = !1;
  function Ie(e, t, n, a) {
    t.child = e === null ? Gd(t, null, n, a) : ta(t, e.child, n, a);
  }
  function Wd(e, t, n, a, i) {
    n = n.render;
    var o = t.ref;
    if ("ref" in a) {
      var m = {};
      for (var x in a) x !== "ref" && (m[x] = a[x]);
    } else m = a;
    return (
      yl(t),
      (a = Eo(e, t, n, m, o, i)),
      (x = jo()),
      e !== null && !Je
        ? (Ao(e, t, i), dn(e, t, i))
        : (Ee && x && io(t), (t.flags |= 1), Ie(e, t, a, i), t.child)
    );
  }
  function Id(e, t, n, a, i) {
    if (e === null) {
      var o = n.type;
      return typeof o == "function" &&
        !lo(o) &&
        o.defaultProps === void 0 &&
        n.compare === null
        ? ((t.tag = 15), (t.type = o), em(e, t, o, a, i))
        : ((e = Ws(n.type, null, a, t, t.mode, i)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((o = e.child), !Fo(e, i))) {
      var m = o.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : za), n(m, a) && e.ref === t.ref)
      )
        return dn(e, t, i);
    }
    return (
      (t.flags |= 1),
      (e = an(o, a)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function em(e, t, n, a, i) {
    if (e !== null) {
      var o = e.memoizedProps;
      if (za(o, a) && e.ref === t.ref)
        if (((Je = !1), (t.pendingProps = a = o), Fo(e, i)))
          (e.flags & 131072) !== 0 && (Je = !0);
        else return ((t.lanes = e.lanes), dn(e, t, i));
    }
    return Xo(e, t, n, a, i);
  }
  function tm(e, t, n) {
    var a = t.pendingProps,
      i = a.children,
      o = e !== null ? e.memoizedState : null;
    if (a.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (((a = o !== null ? o.baseLanes | n : n), e !== null)) {
          for (i = t.child = e.child, o = 0; i !== null; )
            ((o = o | i.lanes | i.childLanes), (i = i.sibling));
          t.childLanes = o & ~a;
        } else ((t.childLanes = 0), (t.child = null));
        return nm(e, t, a, n);
      }
      if ((n & 536870912) !== 0)
        ((t.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && li(t, o !== null ? o.cachePool : null),
          o !== null ? ed(t, o) : wo(),
          Xd(t));
      else
        return (
          (t.lanes = t.childLanes = 536870912),
          nm(e, t, o !== null ? o.baseLanes | n : n, n)
        );
    } else
      o !== null
        ? (li(t, o.cachePool), ed(t, o), Dn(), (t.memoizedState = null))
        : (e !== null && li(t, null), wo(), Dn());
    return (Ie(e, t, i, n), t.child);
  }
  function nm(e, t, n, a) {
    var i = po();
    return (
      (i = i === null ? null : { parent: Ve._currentValue, pool: i }),
      (t.memoizedState = { baseLanes: n, cachePool: i }),
      e !== null && li(t, null),
      wo(),
      Xd(t),
      e !== null && Ba(e, t, a, !0),
      null
    );
  }
  function bi(e, t) {
    var n = t.ref;
    if (n === null) e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof n != "function" && typeof n != "object") throw Error(c(284));
      (e === null || e.ref !== n) && (t.flags |= 4194816);
    }
  }
  function Xo(e, t, n, a, i) {
    return (
      yl(t),
      (n = Eo(e, t, n, a, void 0, i)),
      (a = jo()),
      e !== null && !Je
        ? (Ao(e, t, i), dn(e, t, i))
        : (Ee && a && io(t), (t.flags |= 1), Ie(e, t, n, i), t.child)
    );
  }
  function lm(e, t, n, a, i, o) {
    return (
      yl(t),
      (t.updateQueue = null),
      (n = nd(t, a, n, i)),
      td(e),
      (a = jo()),
      e !== null && !Je
        ? (Ao(e, t, o), dn(e, t, o))
        : (Ee && a && io(t), (t.flags |= 1), Ie(e, t, n, o), t.child)
    );
  }
  function am(e, t, n, a, i) {
    if ((yl(t), t.stateNode === null)) {
      var o = Vl,
        m = n.contextType;
      (typeof m == "object" && m !== null && (o = lt(m)),
        (o = new n(a, o)),
        (t.memoizedState =
          o.state !== null && o.state !== void 0 ? o.state : null),
        (o.updater = qo),
        (t.stateNode = o),
        (o._reactInternals = t),
        (o = t.stateNode),
        (o.props = a),
        (o.state = t.memoizedState),
        (o.refs = {}),
        yo(t),
        (m = n.contextType),
        (o.context = typeof m == "object" && m !== null ? lt(m) : Vl),
        (o.state = t.memoizedState),
        (m = n.getDerivedStateFromProps),
        typeof m == "function" && (Bo(t, n, m, a), (o.state = t.memoizedState)),
        typeof n.getDerivedStateFromProps == "function" ||
          typeof o.getSnapshotBeforeUpdate == "function" ||
          (typeof o.UNSAFE_componentWillMount != "function" &&
            typeof o.componentWillMount != "function") ||
          ((m = o.state),
          typeof o.componentWillMount == "function" && o.componentWillMount(),
          typeof o.UNSAFE_componentWillMount == "function" &&
            o.UNSAFE_componentWillMount(),
          m !== o.state && qo.enqueueReplaceState(o, o.state, null),
          Za(t, a, o, i),
          Va(),
          (o.state = t.memoizedState)),
        typeof o.componentDidMount == "function" && (t.flags |= 4194308),
        (a = !0));
    } else if (e === null) {
      o = t.stateNode;
      var x = t.memoizedProps,
        S = bl(n, x);
      o.props = S;
      var R = o.context,
        k = n.contextType;
      ((m = Vl), typeof k == "object" && k !== null && (m = lt(k)));
      var L = n.getDerivedStateFromProps;
      ((k =
        typeof L == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function"),
        (x = t.pendingProps !== x),
        k ||
          (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
            typeof o.componentWillReceiveProps != "function") ||
          ((x || R !== m) && Qd(t, o, a, m)),
        (On = !1));
      var D = t.memoizedState;
      ((o.state = D),
        Za(t, a, o, i),
        Va(),
        (R = t.memoizedState),
        x || D !== R || On
          ? (typeof L == "function" && (Bo(t, n, L, a), (R = t.memoizedState)),
            (S = On || Yd(t, n, S, a, D, R, m))
              ? (k ||
                  (typeof o.UNSAFE_componentWillMount != "function" &&
                    typeof o.componentWillMount != "function") ||
                  (typeof o.componentWillMount == "function" &&
                    o.componentWillMount(),
                  typeof o.UNSAFE_componentWillMount == "function" &&
                    o.UNSAFE_componentWillMount()),
                typeof o.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof o.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = a),
                (t.memoizedState = R)),
            (o.props = a),
            (o.state = R),
            (o.context = m),
            (a = S))
          : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
            (a = !1)));
    } else {
      ((o = t.stateNode),
        go(e, t),
        (m = t.memoizedProps),
        (k = bl(n, m)),
        (o.props = k),
        (L = t.pendingProps),
        (D = o.context),
        (R = n.contextType),
        (S = Vl),
        typeof R == "object" && R !== null && (S = lt(R)),
        (x = n.getDerivedStateFromProps),
        (R =
          typeof x == "function" ||
          typeof o.getSnapshotBeforeUpdate == "function") ||
          (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
            typeof o.componentWillReceiveProps != "function") ||
          ((m !== L || D !== S) && Qd(t, o, a, S)),
        (On = !1),
        (D = t.memoizedState),
        (o.state = D),
        Za(t, a, o, i),
        Va());
      var z = t.memoizedState;
      m !== L ||
      D !== z ||
      On ||
      (e !== null && e.dependencies !== null && ti(e.dependencies))
        ? (typeof x == "function" && (Bo(t, n, x, a), (z = t.memoizedState)),
          (k =
            On ||
            Yd(t, n, k, a, D, z, S) ||
            (e !== null && e.dependencies !== null && ti(e.dependencies)))
            ? (R ||
                (typeof o.UNSAFE_componentWillUpdate != "function" &&
                  typeof o.componentWillUpdate != "function") ||
                (typeof o.componentWillUpdate == "function" &&
                  o.componentWillUpdate(a, z, S),
                typeof o.UNSAFE_componentWillUpdate == "function" &&
                  o.UNSAFE_componentWillUpdate(a, z, S)),
              typeof o.componentDidUpdate == "function" && (t.flags |= 4),
              typeof o.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof o.componentDidUpdate != "function" ||
                (m === e.memoizedProps && D === e.memoizedState) ||
                (t.flags |= 4),
              typeof o.getSnapshotBeforeUpdate != "function" ||
                (m === e.memoizedProps && D === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = a),
              (t.memoizedState = z)),
          (o.props = a),
          (o.state = z),
          (o.context = S),
          (a = k))
        : (typeof o.componentDidUpdate != "function" ||
            (m === e.memoizedProps && D === e.memoizedState) ||
            (t.flags |= 4),
          typeof o.getSnapshotBeforeUpdate != "function" ||
            (m === e.memoizedProps && D === e.memoizedState) ||
            (t.flags |= 1024),
          (a = !1));
    }
    return (
      (o = a),
      bi(e, t),
      (a = (t.flags & 128) !== 0),
      o || a
        ? ((o = t.stateNode),
          (n =
            a && typeof n.getDerivedStateFromError != "function"
              ? null
              : o.render()),
          (t.flags |= 1),
          e !== null && a
            ? ((t.child = ta(t, e.child, null, i)),
              (t.child = ta(t, null, n, i)))
            : Ie(e, t, n, i),
          (t.memoizedState = o.state),
          (e = t.child))
        : (e = dn(e, t, i)),
      e
    );
  }
  function sm(e, t, n, a) {
    return (Ha(), (t.flags |= 256), Ie(e, t, n, a), t.child);
  }
  var Yo = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function Qo(e) {
    return { baseLanes: e, cachePool: Zf() };
  }
  function Vo(e, t, n) {
    return ((e = e !== null ? e.childLanes & ~n : 0), t && (e |= Dt), e);
  }
  function im(e, t, n) {
    var a = t.pendingProps,
      i = !1,
      o = (t.flags & 128) !== 0,
      m;
    if (
      ((m = o) ||
        (m =
          e !== null && e.memoizedState === null ? !1 : (Ze.current & 2) !== 0),
      m && ((i = !0), (t.flags &= -129)),
      (m = (t.flags & 32) !== 0),
      (t.flags &= -33),
      e === null)
    ) {
      if (Ee) {
        if ((i ? _n(t) : Dn(), Ee)) {
          var x = Le,
            S;
          if ((S = x)) {
            e: {
              for (S = x, x = Zt; S.nodeType !== 8; ) {
                if (!x) {
                  x = null;
                  break e;
                }
                if (((S = Lt(S.nextSibling)), S === null)) {
                  x = null;
                  break e;
                }
              }
              x = S;
            }
            x !== null
              ? ((t.memoizedState = {
                  dehydrated: x,
                  treeContext: dl !== null ? { id: sn, overflow: rn } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (S = yt(18, null, null, 0)),
                (S.stateNode = x),
                (S.return = t),
                (t.child = S),
                (st = t),
                (Le = null),
                (S = !0))
              : (S = !1);
          }
          S || pl(t);
        }
        if (
          ((x = t.memoizedState),
          x !== null && ((x = x.dehydrated), x !== null))
        )
          return (Oc(x) ? (t.lanes = 32) : (t.lanes = 536870912), null);
        fn(t);
      }
      return (
        (x = a.children),
        (a = a.fallback),
        i
          ? (Dn(),
            (i = t.mode),
            (x = wi({ mode: "hidden", children: x }, i)),
            (a = fl(a, i, n, null)),
            (x.return = t),
            (a.return = t),
            (x.sibling = a),
            (t.child = x),
            (i = t.child),
            (i.memoizedState = Qo(n)),
            (i.childLanes = Vo(e, m, n)),
            (t.memoizedState = Yo),
            a)
          : (_n(t), Zo(t, x))
      );
    }
    if (
      ((S = e.memoizedState), S !== null && ((x = S.dehydrated), x !== null))
    ) {
      if (o)
        t.flags & 256
          ? (_n(t), (t.flags &= -257), (t = Ko(e, t, n)))
          : t.memoizedState !== null
            ? (Dn(), (t.child = e.child), (t.flags |= 128), (t = null))
            : (Dn(),
              (i = a.fallback),
              (x = t.mode),
              (a = wi({ mode: "visible", children: a.children }, x)),
              (i = fl(i, x, n, null)),
              (i.flags |= 2),
              (a.return = t),
              (i.return = t),
              (a.sibling = i),
              (t.child = a),
              ta(t, e.child, null, n),
              (a = t.child),
              (a.memoizedState = Qo(n)),
              (a.childLanes = Vo(e, m, n)),
              (t.memoizedState = Yo),
              (t = i));
      else if ((_n(t), Oc(x))) {
        if (((m = x.nextSibling && x.nextSibling.dataset), m)) var R = m.dgst;
        ((m = R),
          (a = Error(c(419))),
          (a.stack = ""),
          (a.digest = m),
          La({ value: a, source: null, stack: null }),
          (t = Ko(e, t, n)));
      } else if (
        (Je || Ba(e, t, n, !1), (m = (n & e.childLanes) !== 0), Je || m)
      ) {
        if (
          ((m = ze),
          m !== null &&
            ((a = n & -n),
            (a = (a & 42) !== 0 ? 1 : Or(a)),
            (a = (a & (m.suspendedLanes | n)) !== 0 ? 0 : a),
            a !== 0 && a !== S.retryLane))
        )
          throw ((S.retryLane = a), Ql(e, a), St(m, e, a), $d);
        (x.data === "$?" || fc(), (t = Ko(e, t, n)));
      } else
        x.data === "$?"
          ? ((t.flags |= 192), (t.child = e.child), (t = null))
          : ((e = S.treeContext),
            (Le = Lt(x.nextSibling)),
            (st = t),
            (Ee = !0),
            (hl = null),
            (Zt = !1),
            e !== null &&
              ((Rt[Mt++] = sn),
              (Rt[Mt++] = rn),
              (Rt[Mt++] = dl),
              (sn = e.id),
              (rn = e.overflow),
              (dl = t)),
            (t = Zo(t, a.children)),
            (t.flags |= 4096));
      return t;
    }
    return i
      ? (Dn(),
        (i = a.fallback),
        (x = t.mode),
        (S = e.child),
        (R = S.sibling),
        (a = an(S, { mode: "hidden", children: a.children })),
        (a.subtreeFlags = S.subtreeFlags & 65011712),
        R !== null ? (i = an(R, i)) : ((i = fl(i, x, n, null)), (i.flags |= 2)),
        (i.return = t),
        (a.return = t),
        (a.sibling = i),
        (t.child = a),
        (a = i),
        (i = t.child),
        (x = e.child.memoizedState),
        x === null
          ? (x = Qo(n))
          : ((S = x.cachePool),
            S !== null
              ? ((R = Ve._currentValue),
                (S = S.parent !== R ? { parent: R, pool: R } : S))
              : (S = Zf()),
            (x = { baseLanes: x.baseLanes | n, cachePool: S })),
        (i.memoizedState = x),
        (i.childLanes = Vo(e, m, n)),
        (t.memoizedState = Yo),
        a)
      : (_n(t),
        (n = e.child),
        (e = n.sibling),
        (n = an(n, { mode: "visible", children: a.children })),
        (n.return = t),
        (n.sibling = null),
        e !== null &&
          ((m = t.deletions),
          m === null ? ((t.deletions = [e]), (t.flags |= 16)) : m.push(e)),
        (t.child = n),
        (t.memoizedState = null),
        n);
  }
  function Zo(e, t) {
    return (
      (t = wi({ mode: "visible", children: t }, e.mode)),
      (t.return = e),
      (e.child = t)
    );
  }
  function wi(e, t) {
    return (
      (e = yt(22, e, null, t)),
      (e.lanes = 0),
      (e.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null,
      }),
      e
    );
  }
  function Ko(e, t, n) {
    return (
      ta(t, e.child, null, n),
      (e = Zo(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function rm(e, t, n) {
    e.lanes |= t;
    var a = e.alternate;
    (a !== null && (a.lanes |= t), uo(e.return, t, n));
  }
  function Po(e, t, n, a, i) {
    var o = e.memoizedState;
    o === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: a,
          tail: n,
          tailMode: i,
        })
      : ((o.isBackwards = t),
        (o.rendering = null),
        (o.renderingStartTime = 0),
        (o.last = a),
        (o.tail = n),
        (o.tailMode = i));
  }
  function om(e, t, n) {
    var a = t.pendingProps,
      i = a.revealOrder,
      o = a.tail;
    if ((Ie(e, t, a.children, n), (a = Ze.current), (a & 2) !== 0))
      ((a = (a & 1) | 2), (t.flags |= 128));
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && rm(e, n, t);
          else if (e.tag === 19) rm(e, n, t);
          else if (e.child !== null) {
            ((e.child.return = e), (e = e.child));
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          ((e.sibling.return = e.return), (e = e.sibling));
        }
      a &= 1;
    }
    switch ((P(Ze, a), i)) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          ((e = n.alternate),
            e !== null && yi(e) === null && (i = n),
            (n = n.sibling));
        ((n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          Po(t, !1, i, n, o));
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && yi(e) === null)) {
            t.child = i;
            break;
          }
          ((e = i.sibling), (i.sibling = n), (n = i), (i = e));
        }
        Po(t, !0, n, null, o);
        break;
      case "together":
        Po(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function dn(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (Ln |= t.lanes),
      (n & t.childLanes) === 0)
    )
      if (e !== null) {
        if ((Ba(e, t, n, !1), (n & t.childLanes) === 0)) return null;
      } else return null;
    if (e !== null && t.child !== e.child) throw Error(c(153));
    if (t.child !== null) {
      for (
        e = t.child, n = an(e, e.pendingProps), t.child = n, n.return = t;
        e.sibling !== null;
      )
        ((e = e.sibling),
          (n = n.sibling = an(e, e.pendingProps)),
          (n.return = t));
      n.sibling = null;
    }
    return t.child;
  }
  function Fo(e, t) {
    return (e.lanes & t) !== 0
      ? !0
      : ((e = e.dependencies), !!(e !== null && ti(e)));
  }
  function tg(e, t, n) {
    switch (t.tag) {
      case 3:
        (je(t, t.stateNode.containerInfo),
          Tn(t, Ve, e.memoizedState.cache),
          Ha());
        break;
      case 27:
      case 5:
        Sn(t);
        break;
      case 4:
        je(t, t.stateNode.containerInfo);
        break;
      case 10:
        Tn(t, t.type, t.memoizedProps.value);
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null)
          return a.dehydrated !== null
            ? (_n(t), (t.flags |= 128), null)
            : (n & t.child.childLanes) !== 0
              ? im(e, t, n)
              : (_n(t), (e = dn(e, t, n)), e !== null ? e.sibling : null);
        _n(t);
        break;
      case 19:
        var i = (e.flags & 128) !== 0;
        if (
          ((a = (n & t.childLanes) !== 0),
          a || (Ba(e, t, n, !1), (a = (n & t.childLanes) !== 0)),
          i)
        ) {
          if (a) return om(e, t, n);
          t.flags |= 128;
        }
        if (
          ((i = t.memoizedState),
          i !== null &&
            ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
          P(Ze, Ze.current),
          a)
        )
          break;
        return null;
      case 22:
      case 23:
        return ((t.lanes = 0), tm(e, t, n));
      case 24:
        Tn(t, Ve, e.memoizedState.cache);
    }
    return dn(e, t, n);
  }
  function cm(e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps) Je = !0;
      else {
        if (!Fo(e, n) && (t.flags & 128) === 0) return ((Je = !1), tg(e, t, n));
        Je = (e.flags & 131072) !== 0;
      }
    else ((Je = !1), Ee && (t.flags & 1048576) !== 0 && Bf(t, ei, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        e: {
          e = t.pendingProps;
          var a = t.elementType,
            i = a._init;
          if (((a = i(a._payload)), (t.type = a), typeof a == "function"))
            lo(a)
              ? ((e = bl(a, e)), (t.tag = 1), (t = am(null, t, a, e, n)))
              : ((t.tag = 0), (t = Xo(null, t, a, e, n)));
          else {
            if (a != null) {
              if (((i = a.$$typeof), i === Z)) {
                ((t.tag = 11), (t = Wd(null, t, a, e, n)));
                break e;
              } else if (i === $) {
                ((t.tag = 14), (t = Id(null, t, a, e, n)));
                break e;
              }
            }
            throw ((t = W(a) || a), Error(c(306, t, "")));
          }
        }
        return t;
      case 0:
        return Xo(e, t, t.type, t.pendingProps, n);
      case 1:
        return ((a = t.type), (i = bl(a, t.pendingProps)), am(e, t, a, i, n));
      case 3:
        e: {
          if ((je(t, t.stateNode.containerInfo), e === null))
            throw Error(c(387));
          a = t.pendingProps;
          var o = t.memoizedState;
          ((i = o.element), go(e, t), Za(t, a, null, n));
          var m = t.memoizedState;
          if (
            ((a = m.cache),
            Tn(t, Ve, a),
            a !== o.cache && fo(t, [Ve], n, !0),
            Va(),
            (a = m.element),
            o.isDehydrated)
          )
            if (
              ((o = { element: a, isDehydrated: !1, cache: m.cache }),
              (t.updateQueue.baseState = o),
              (t.memoizedState = o),
              t.flags & 256)
            ) {
              t = sm(e, t, a, n);
              break e;
            } else if (a !== i) {
              ((i = Ot(Error(c(424)), t)), La(i), (t = sm(e, t, a, n)));
              break e;
            } else
              for (
                e = t.stateNode.containerInfo,
                  e.nodeType === 9
                    ? (e = e.body)
                    : (e = e.nodeName === "HTML" ? e.ownerDocument.body : e),
                  Le = Lt(e.firstChild),
                  st = t,
                  Ee = !0,
                  hl = null,
                  Zt = !0,
                  n = Gd(t, null, a, n),
                  t.child = n;
                n;
              )
                ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
          else {
            if ((Ha(), a === i)) {
              t = dn(e, t, n);
              break e;
            }
            Ie(e, t, a, n);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          bi(e, t),
          e === null
            ? (n = mh(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = n)
              : Ee ||
                ((n = t.type),
                (e = t.pendingProps),
                (a = Ui(ne.current).createElement(n)),
                (a[nt] = t),
                (a[rt] = e),
                tt(a, n, e),
                Fe(a),
                (t.stateNode = a))
            : (t.memoizedState = mh(
                t.type,
                e.memoizedProps,
                t.pendingProps,
                e.memoizedState,
              )),
          null
        );
      case 27:
        return (
          Sn(t),
          e === null &&
            Ee &&
            ((a = t.stateNode = uh(t.type, t.pendingProps, ne.current)),
            (st = t),
            (Zt = !0),
            (i = Le),
            Xn(t.type) ? ((Cc = i), (Le = Lt(a.firstChild))) : (Le = i)),
          Ie(e, t, t.pendingProps.children, n),
          bi(e, t),
          e === null && (t.flags |= 4194304),
          t.child
        );
      case 5:
        return (
          e === null &&
            Ee &&
            ((i = a = Le) &&
              ((a = Cg(a, t.type, t.pendingProps, Zt)),
              a !== null
                ? ((t.stateNode = a),
                  (st = t),
                  (Le = Lt(a.firstChild)),
                  (Zt = !1),
                  (i = !0))
                : (i = !1)),
            i || pl(t)),
          Sn(t),
          (i = t.type),
          (o = t.pendingProps),
          (m = e !== null ? e.memoizedProps : null),
          (a = o.children),
          jc(i, o) ? (a = null) : m !== null && jc(i, m) && (t.flags |= 32),
          t.memoizedState !== null &&
            ((i = Eo(e, t, Ky, null, null, n)), (hs._currentValue = i)),
          bi(e, t),
          Ie(e, t, a, n),
          t.child
        );
      case 6:
        return (
          e === null &&
            Ee &&
            ((e = n = Le) &&
              ((n = Rg(n, t.pendingProps, Zt)),
              n !== null
                ? ((t.stateNode = n), (st = t), (Le = null), (e = !0))
                : (e = !1)),
            e || pl(t)),
          null
        );
      case 13:
        return im(e, t, n);
      case 4:
        return (
          je(t, t.stateNode.containerInfo),
          (a = t.pendingProps),
          e === null ? (t.child = ta(t, null, a, n)) : Ie(e, t, a, n),
          t.child
        );
      case 11:
        return Wd(e, t, t.type, t.pendingProps, n);
      case 7:
        return (Ie(e, t, t.pendingProps, n), t.child);
      case 8:
        return (Ie(e, t, t.pendingProps.children, n), t.child);
      case 12:
        return (Ie(e, t, t.pendingProps.children, n), t.child);
      case 10:
        return (
          (a = t.pendingProps),
          Tn(t, t.type, a.value),
          Ie(e, t, a.children, n),
          t.child
        );
      case 9:
        return (
          (i = t.type._context),
          (a = t.pendingProps.children),
          yl(t),
          (i = lt(i)),
          (a = a(i)),
          (t.flags |= 1),
          Ie(e, t, a, n),
          t.child
        );
      case 14:
        return Id(e, t, t.type, t.pendingProps, n);
      case 15:
        return em(e, t, t.type, t.pendingProps, n);
      case 19:
        return om(e, t, n);
      case 31:
        return (
          (a = t.pendingProps),
          (n = t.mode),
          (a = { mode: a.mode, children: a.children }),
          e === null
            ? ((n = wi(a, n)),
              (n.ref = t.ref),
              (t.child = n),
              (n.return = t),
              (t = n))
            : ((n = an(e.child, a)),
              (n.ref = t.ref),
              (t.child = n),
              (n.return = t),
              (t = n)),
          t
        );
      case 22:
        return tm(e, t, n);
      case 24:
        return (
          yl(t),
          (a = lt(Ve)),
          e === null
            ? ((i = po()),
              i === null &&
                ((i = ze),
                (o = mo()),
                (i.pooledCache = o),
                o.refCount++,
                o !== null && (i.pooledCacheLanes |= n),
                (i = o)),
              (t.memoizedState = { parent: a, cache: i }),
              yo(t),
              Tn(t, Ve, i))
            : ((e.lanes & n) !== 0 && (go(e, t), Za(t, null, null, n), Va()),
              (i = e.memoizedState),
              (o = t.memoizedState),
              i.parent !== a
                ? ((i = { parent: a, cache: a }),
                  (t.memoizedState = i),
                  t.lanes === 0 &&
                    (t.memoizedState = t.updateQueue.baseState = i),
                  Tn(t, Ve, a))
                : ((a = o.cache),
                  Tn(t, Ve, a),
                  a !== i.cache && fo(t, [Ve], n, !0))),
          Ie(e, t, t.pendingProps.children, n),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(c(156, t.tag));
  }
  function mn(e) {
    e.flags |= 4;
  }
  function um(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (((e.flags |= 16777216), !gh(t))) {
      if (
        ((t = _t.current),
        t !== null &&
          ((we & 4194048) === we
            ? Kt !== null
            : ((we & 62914560) !== we && (we & 536870912) === 0) || t !== Kt))
      )
        throw ((Ya = xo), Kf);
      e.flags |= 8192;
    }
  }
  function Si(e, t) {
    (t !== null && (e.flags |= 4),
      e.flags & 16384 &&
        ((t = e.tag !== 22 ? Gu() : 536870912), (e.lanes |= t), (sa |= t)));
  }
  function Ia(e, t) {
    if (!Ee)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; t !== null; )
            (t.alternate !== null && (n = t), (t = t.sibling));
          n === null ? (e.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = e.tail;
          for (var a = null; n !== null; )
            (n.alternate !== null && (a = n), (n = n.sibling));
          a === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (a.sibling = null);
      }
  }
  function He(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      n = 0,
      a = 0;
    if (t)
      for (var i = e.child; i !== null; )
        ((n |= i.lanes | i.childLanes),
          (a |= i.subtreeFlags & 65011712),
          (a |= i.flags & 65011712),
          (i.return = e),
          (i = i.sibling));
    else
      for (i = e.child; i !== null; )
        ((n |= i.lanes | i.childLanes),
          (a |= i.subtreeFlags),
          (a |= i.flags),
          (i.return = e),
          (i = i.sibling));
    return ((e.subtreeFlags |= a), (e.childLanes = n), t);
  }
  function ng(e, t, n) {
    var a = t.pendingProps;
    switch ((ro(t), t.tag)) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (He(t), null);
      case 1:
        return (He(t), null);
      case 3:
        return (
          (n = t.stateNode),
          (a = null),
          e !== null && (a = e.memoizedState.cache),
          t.memoizedState.cache !== a && (t.flags |= 2048),
          cn(Ve),
          Ae(),
          n.pendingContext &&
            ((n.context = n.pendingContext), (n.pendingContext = null)),
          (e === null || e.child === null) &&
            (ka(t)
              ? mn(t)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), Xf())),
          He(t),
          null
        );
      case 26:
        return (
          (n = t.memoizedState),
          e === null
            ? (mn(t),
              n !== null ? (He(t), um(t, n)) : (He(t), (t.flags &= -16777217)))
            : n
              ? n !== e.memoizedState
                ? (mn(t), He(t), um(t, n))
                : (He(t), (t.flags &= -16777217))
              : (e.memoizedProps !== a && mn(t), He(t), (t.flags &= -16777217)),
          null
        );
      case 27:
        (Ut(t), (n = ne.current));
        var i = t.type;
        if (e !== null && t.stateNode != null) e.memoizedProps !== a && mn(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(c(166));
            return (He(t), null);
          }
          ((e = le.current),
            ka(t) ? qf(t) : ((e = uh(i, a, n)), (t.stateNode = e), mn(t)));
        }
        return (He(t), null);
      case 5:
        if ((Ut(t), (n = t.type), e !== null && t.stateNode != null))
          e.memoizedProps !== a && mn(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(c(166));
            return (He(t), null);
          }
          if (((e = le.current), ka(t))) qf(t);
          else {
            switch (((i = Ui(ne.current)), e)) {
              case 1:
                e = i.createElementNS("http://www.w3.org/2000/svg", n);
                break;
              case 2:
                e = i.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                break;
              default:
                switch (n) {
                  case "svg":
                    e = i.createElementNS("http://www.w3.org/2000/svg", n);
                    break;
                  case "math":
                    e = i.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      n,
                    );
                    break;
                  case "script":
                    ((e = i.createElement("div")),
                      (e.innerHTML = "<script><\/script>"),
                      (e = e.removeChild(e.firstChild)));
                    break;
                  case "select":
                    ((e =
                      typeof a.is == "string"
                        ? i.createElement("select", { is: a.is })
                        : i.createElement("select")),
                      a.multiple
                        ? (e.multiple = !0)
                        : a.size && (e.size = a.size));
                    break;
                  default:
                    e =
                      typeof a.is == "string"
                        ? i.createElement(n, { is: a.is })
                        : i.createElement(n);
                }
            }
            ((e[nt] = t), (e[rt] = a));
            e: for (i = t.child; i !== null; ) {
              if (i.tag === 5 || i.tag === 6) e.appendChild(i.stateNode);
              else if (i.tag !== 4 && i.tag !== 27 && i.child !== null) {
                ((i.child.return = i), (i = i.child));
                continue;
              }
              if (i === t) break e;
              for (; i.sibling === null; ) {
                if (i.return === null || i.return === t) break e;
                i = i.return;
              }
              ((i.sibling.return = i.return), (i = i.sibling));
            }
            t.stateNode = e;
            e: switch ((tt(e, n, a), n)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                e = !!a.autoFocus;
                break e;
              case "img":
                e = !0;
                break e;
              default:
                e = !1;
            }
            e && mn(t);
          }
        }
        return (He(t), (t.flags &= -16777217), null);
      case 6:
        if (e && t.stateNode != null) e.memoizedProps !== a && mn(t);
        else {
          if (typeof a != "string" && t.stateNode === null) throw Error(c(166));
          if (((e = ne.current), ka(t))) {
            if (
              ((e = t.stateNode),
              (n = t.memoizedProps),
              (a = null),
              (i = st),
              i !== null)
            )
              switch (i.tag) {
                case 27:
                case 5:
                  a = i.memoizedProps;
              }
            ((e[nt] = t),
              (e = !!(
                e.nodeValue === n ||
                (a !== null && a.suppressHydrationWarning === !0) ||
                lh(e.nodeValue, n)
              )),
              e || pl(t));
          } else
            ((e = Ui(e).createTextNode(a)), (e[nt] = t), (t.stateNode = e));
        }
        return (He(t), null);
      case 13:
        if (
          ((a = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (((i = ka(t)), a !== null && a.dehydrated !== null)) {
            if (e === null) {
              if (!i) throw Error(c(318));
              if (
                ((i = t.memoizedState),
                (i = i !== null ? i.dehydrated : null),
                !i)
              )
                throw Error(c(317));
              i[nt] = t;
            } else
              (Ha(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            (He(t), (i = !1));
          } else
            ((i = Xf()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = i),
              (i = !0));
          if (!i) return t.flags & 256 ? (fn(t), t) : (fn(t), null);
        }
        if ((fn(t), (t.flags & 128) !== 0)) return ((t.lanes = n), t);
        if (
          ((n = a !== null), (e = e !== null && e.memoizedState !== null), n)
        ) {
          ((a = t.child),
            (i = null),
            a.alternate !== null &&
              a.alternate.memoizedState !== null &&
              a.alternate.memoizedState.cachePool !== null &&
              (i = a.alternate.memoizedState.cachePool.pool));
          var o = null;
          (a.memoizedState !== null &&
            a.memoizedState.cachePool !== null &&
            (o = a.memoizedState.cachePool.pool),
            o !== i && (a.flags |= 2048));
        }
        return (
          n !== e && n && (t.child.flags |= 8192),
          Si(t, t.updateQueue),
          He(t),
          null
        );
      case 4:
        return (Ae(), e === null && bc(t.stateNode.containerInfo), He(t), null);
      case 10:
        return (cn(t.type), He(t), null);
      case 19:
        if ((J(Ze), (i = t.memoizedState), i === null)) return (He(t), null);
        if (((a = (t.flags & 128) !== 0), (o = i.rendering), o === null))
          if (a) Ia(i, !1);
          else {
            if (Be !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((o = yi(e)), o !== null)) {
                  for (
                    t.flags |= 128,
                      Ia(i, !1),
                      e = o.updateQueue,
                      t.updateQueue = e,
                      Si(t, e),
                      t.subtreeFlags = 0,
                      e = n,
                      n = t.child;
                    n !== null;
                  )
                    (Lf(n, e), (n = n.sibling));
                  return (P(Ze, (Ze.current & 1) | 2), t.child);
                }
                e = e.sibling;
              }
            i.tail !== null &&
              Vt() > ji &&
              ((t.flags |= 128), (a = !0), Ia(i, !1), (t.lanes = 4194304));
          }
        else {
          if (!a)
            if (((e = yi(o)), e !== null)) {
              if (
                ((t.flags |= 128),
                (a = !0),
                (e = e.updateQueue),
                (t.updateQueue = e),
                Si(t, e),
                Ia(i, !0),
                i.tail === null &&
                  i.tailMode === "hidden" &&
                  !o.alternate &&
                  !Ee)
              )
                return (He(t), null);
            } else
              2 * Vt() - i.renderingStartTime > ji &&
                n !== 536870912 &&
                ((t.flags |= 128), (a = !0), Ia(i, !1), (t.lanes = 4194304));
          i.isBackwards
            ? ((o.sibling = t.child), (t.child = o))
            : ((e = i.last),
              e !== null ? (e.sibling = o) : (t.child = o),
              (i.last = o));
        }
        return i.tail !== null
          ? ((t = i.tail),
            (i.rendering = t),
            (i.tail = t.sibling),
            (i.renderingStartTime = Vt()),
            (t.sibling = null),
            (e = Ze.current),
            P(Ze, a ? (e & 1) | 2 : e & 1),
            t)
          : (He(t), null);
      case 22:
      case 23:
        return (
          fn(t),
          So(),
          (a = t.memoizedState !== null),
          e !== null
            ? (e.memoizedState !== null) !== a && (t.flags |= 8192)
            : a && (t.flags |= 8192),
          a
            ? (n & 536870912) !== 0 &&
              (t.flags & 128) === 0 &&
              (He(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : He(t),
          (n = t.updateQueue),
          n !== null && Si(t, n.retryQueue),
          (n = null),
          e !== null &&
            e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (n = e.memoizedState.cachePool.pool),
          (a = null),
          t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (a = t.memoizedState.cachePool.pool),
          a !== n && (t.flags |= 2048),
          e !== null && J(gl),
          null
        );
      case 24:
        return (
          (n = null),
          e !== null && (n = e.memoizedState.cache),
          t.memoizedState.cache !== n && (t.flags |= 2048),
          cn(Ve),
          He(t),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(c(156, t.tag));
  }
  function lg(e, t) {
    switch ((ro(t), t.tag)) {
      case 1:
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          cn(Ve),
          Ae(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((t.flags = (e & -65537) | 128), t)
            : null
        );
      case 26:
      case 27:
      case 5:
        return (Ut(t), null);
      case 13:
        if (
          (fn(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(c(340));
          Ha();
        }
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return (J(Ze), null);
      case 4:
        return (Ae(), null);
      case 10:
        return (cn(t.type), null);
      case 22:
      case 23:
        return (
          fn(t),
          So(),
          e !== null && J(gl),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 24:
        return (cn(Ve), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function fm(e, t) {
    switch ((ro(t), t.tag)) {
      case 3:
        (cn(Ve), Ae());
        break;
      case 26:
      case 27:
      case 5:
        Ut(t);
        break;
      case 4:
        Ae();
        break;
      case 13:
        fn(t);
        break;
      case 19:
        J(Ze);
        break;
      case 10:
        cn(t.type);
        break;
      case 22:
      case 23:
        (fn(t), So(), e !== null && J(gl));
        break;
      case 24:
        cn(Ve);
    }
  }
  function es(e, t) {
    try {
      var n = t.updateQueue,
        a = n !== null ? n.lastEffect : null;
      if (a !== null) {
        var i = a.next;
        n = i;
        do {
          if ((n.tag & e) === e) {
            a = void 0;
            var o = n.create,
              m = n.inst;
            ((a = o()), (m.destroy = a));
          }
          n = n.next;
        } while (n !== i);
      }
    } catch (x) {
      De(t, t.return, x);
    }
  }
  function zn(e, t, n) {
    try {
      var a = t.updateQueue,
        i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var o = i.next;
        a = o;
        do {
          if ((a.tag & e) === e) {
            var m = a.inst,
              x = m.destroy;
            if (x !== void 0) {
              ((m.destroy = void 0), (i = t));
              var S = n,
                R = x;
              try {
                R();
              } catch (k) {
                De(i, S, k);
              }
            }
          }
          a = a.next;
        } while (a !== o);
      }
    } catch (k) {
      De(t, t.return, k);
    }
  }
  function dm(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var n = e.stateNode;
      try {
        If(t, n);
      } catch (a) {
        De(e, e.return, a);
      }
    }
  }
  function mm(e, t, n) {
    ((n.props = bl(e.type, e.memoizedProps)), (n.state = e.memoizedState));
    try {
      n.componentWillUnmount();
    } catch (a) {
      De(e, t, a);
    }
  }
  function ts(e, t) {
    try {
      var n = e.ref;
      if (n !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var a = e.stateNode;
            break;
          case 30:
            a = e.stateNode;
            break;
          default:
            a = e.stateNode;
        }
        typeof n == "function" ? (e.refCleanup = n(a)) : (n.current = a);
      }
    } catch (i) {
      De(e, t, i);
    }
  }
  function Pt(e, t) {
    var n = e.ref,
      a = e.refCleanup;
    if (n !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (i) {
          De(e, t, i);
        } finally {
          ((e.refCleanup = null),
            (e = e.alternate),
            e != null && (e.refCleanup = null));
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (i) {
          De(e, t, i);
        }
      else n.current = null;
  }
  function hm(e) {
    var t = e.type,
      n = e.memoizedProps,
      a = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          n.autoFocus && a.focus();
          break e;
        case "img":
          n.src ? (a.src = n.src) : n.srcSet && (a.srcset = n.srcSet);
      }
    } catch (i) {
      De(e, e.return, i);
    }
  }
  function Jo(e, t, n) {
    try {
      var a = e.stateNode;
      (Eg(a, e.type, n, t), (a[rt] = t));
    } catch (i) {
      De(e, e.return, i);
    }
  }
  function pm(e) {
    return (
      e.tag === 5 ||
      e.tag === 3 ||
      e.tag === 26 ||
      (e.tag === 27 && Xn(e.type)) ||
      e.tag === 4
    );
  }
  function $o(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || pm(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
      ) {
        if (
          (e.tag === 27 && Xn(e.type)) ||
          e.flags & 2 ||
          e.child === null ||
          e.tag === 4
        )
          continue e;
        ((e.child.return = e), (e = e.child));
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Wo(e, t, n) {
    var a = e.tag;
    if (a === 5 || a === 6)
      ((e = e.stateNode),
        t
          ? (n.nodeType === 9
              ? n.body
              : n.nodeName === "HTML"
                ? n.ownerDocument.body
                : n
            ).insertBefore(e, t)
          : ((t =
              n.nodeType === 9
                ? n.body
                : n.nodeName === "HTML"
                  ? n.ownerDocument.body
                  : n),
            t.appendChild(e),
            (n = n._reactRootContainer),
            n != null || t.onclick !== null || (t.onclick = zi)));
    else if (
      a !== 4 &&
      (a === 27 && Xn(e.type) && ((n = e.stateNode), (t = null)),
      (e = e.child),
      e !== null)
    )
      for (Wo(e, t, n), e = e.sibling; e !== null; )
        (Wo(e, t, n), (e = e.sibling));
  }
  function Ni(e, t, n) {
    var a = e.tag;
    if (a === 5 || a === 6)
      ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
    else if (
      a !== 4 &&
      (a === 27 && Xn(e.type) && (n = e.stateNode), (e = e.child), e !== null)
    )
      for (Ni(e, t, n), e = e.sibling; e !== null; )
        (Ni(e, t, n), (e = e.sibling));
  }
  function xm(e) {
    var t = e.stateNode,
      n = e.memoizedProps;
    try {
      for (var a = e.type, i = t.attributes; i.length; )
        t.removeAttributeNode(i[0]);
      (tt(t, a, n), (t[nt] = e), (t[rt] = n));
    } catch (o) {
      De(e, e.return, o);
    }
  }
  var hn = !1,
    Xe = !1,
    Io = !1,
    ym = typeof WeakSet == "function" ? WeakSet : Set,
    $e = null;
  function ag(e, t) {
    if (((e = e.containerInfo), (Nc = Gi), (e = Of(e)), Jr(e))) {
      if ("selectionStart" in e)
        var n = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          n = ((n = e.ownerDocument) && n.defaultView) || window;
          var a = n.getSelection && n.getSelection();
          if (a && a.rangeCount !== 0) {
            n = a.anchorNode;
            var i = a.anchorOffset,
              o = a.focusNode;
            a = a.focusOffset;
            try {
              (n.nodeType, o.nodeType);
            } catch {
              n = null;
              break e;
            }
            var m = 0,
              x = -1,
              S = -1,
              R = 0,
              k = 0,
              L = e,
              D = null;
            t: for (;;) {
              for (
                var z;
                L !== n || (i !== 0 && L.nodeType !== 3) || (x = m + i),
                  L !== o || (a !== 0 && L.nodeType !== 3) || (S = m + a),
                  L.nodeType === 3 && (m += L.nodeValue.length),
                  (z = L.firstChild) !== null;
              )
                ((D = L), (L = z));
              for (;;) {
                if (L === e) break t;
                if (
                  (D === n && ++R === i && (x = m),
                  D === o && ++k === a && (S = m),
                  (z = L.nextSibling) !== null)
                )
                  break;
                ((L = D), (D = L.parentNode));
              }
              L = z;
            }
            n = x === -1 || S === -1 ? null : { start: x, end: S };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      Ec = { focusedElem: e, selectionRange: n }, Gi = !1, $e = t;
      $e !== null;
    )
      if (
        ((t = $e), (e = t.child), (t.subtreeFlags & 1024) !== 0 && e !== null)
      )
        ((e.return = t), ($e = e));
      else
        for (; $e !== null; ) {
          switch (((t = $e), (o = t.alternate), (e = t.flags), t.tag)) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && o !== null) {
                ((e = void 0),
                  (n = t),
                  (i = o.memoizedProps),
                  (o = o.memoizedState),
                  (a = n.stateNode));
                try {
                  var ue = bl(n.type, i, n.elementType === n.type);
                  ((e = a.getSnapshotBeforeUpdate(ue, o)),
                    (a.__reactInternalSnapshotBeforeUpdate = e));
                } catch (ie) {
                  De(n, n.return, ie);
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (
                  ((e = t.stateNode.containerInfo), (n = e.nodeType), n === 9)
                )
                  Tc(e);
                else if (n === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Tc(e);
                      break;
                    default:
                      e.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((e & 1024) !== 0) throw Error(c(163));
          }
          if (((e = t.sibling), e !== null)) {
            ((e.return = t.return), ($e = e));
            break;
          }
          $e = t.return;
        }
  }
  function gm(e, t, n) {
    var a = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        (Un(e, n), a & 4 && es(5, n));
        break;
      case 1:
        if ((Un(e, n), a & 4))
          if (((e = n.stateNode), t === null))
            try {
              e.componentDidMount();
            } catch (m) {
              De(n, n.return, m);
            }
          else {
            var i = bl(n.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              e.componentDidUpdate(i, t, e.__reactInternalSnapshotBeforeUpdate);
            } catch (m) {
              De(n, n.return, m);
            }
          }
        (a & 64 && dm(n), a & 512 && ts(n, n.return));
        break;
      case 3:
        if ((Un(e, n), a & 64 && ((e = n.updateQueue), e !== null))) {
          if (((t = null), n.child !== null))
            switch (n.child.tag) {
              case 27:
              case 5:
                t = n.child.stateNode;
                break;
              case 1:
                t = n.child.stateNode;
            }
          try {
            If(e, t);
          } catch (m) {
            De(n, n.return, m);
          }
        }
        break;
      case 27:
        t === null && a & 4 && xm(n);
      case 26:
      case 5:
        (Un(e, n), t === null && a & 4 && hm(n), a & 512 && ts(n, n.return));
        break;
      case 12:
        Un(e, n);
        break;
      case 13:
        (Un(e, n),
          a & 4 && wm(e, n),
          a & 64 &&
            ((e = n.memoizedState),
            e !== null &&
              ((e = e.dehydrated),
              e !== null && ((n = mg.bind(null, n)), Mg(e, n)))));
        break;
      case 22:
        if (((a = n.memoizedState !== null || hn), !a)) {
          ((t = (t !== null && t.memoizedState !== null) || Xe), (i = hn));
          var o = Xe;
          ((hn = a),
            (Xe = t) && !o ? kn(e, n, (n.subtreeFlags & 8772) !== 0) : Un(e, n),
            (hn = i),
            (Xe = o));
        }
        break;
      case 30:
        break;
      default:
        Un(e, n);
    }
  }
  function vm(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), vm(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((t = e.stateNode), t !== null && Mr(t)),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  var ke = null,
    ut = !1;
  function pn(e, t, n) {
    for (n = n.child; n !== null; ) (bm(e, t, n), (n = n.sibling));
  }
  function bm(e, t, n) {
    if (ht && typeof ht.onCommitFiberUnmount == "function")
      try {
        ht.onCommitFiberUnmount(Sa, n);
      } catch {}
    switch (n.tag) {
      case 26:
        (Xe || Pt(n, t),
          pn(e, t, n),
          n.memoizedState
            ? n.memoizedState.count--
            : n.stateNode && ((n = n.stateNode), n.parentNode.removeChild(n)));
        break;
      case 27:
        Xe || Pt(n, t);
        var a = ke,
          i = ut;
        (Xn(n.type) && ((ke = n.stateNode), (ut = !1)),
          pn(e, t, n),
          us(n.stateNode),
          (ke = a),
          (ut = i));
        break;
      case 5:
        Xe || Pt(n, t);
      case 6:
        if (
          ((a = ke),
          (i = ut),
          (ke = null),
          pn(e, t, n),
          (ke = a),
          (ut = i),
          ke !== null)
        )
          if (ut)
            try {
              (ke.nodeType === 9
                ? ke.body
                : ke.nodeName === "HTML"
                  ? ke.ownerDocument.body
                  : ke
              ).removeChild(n.stateNode);
            } catch (o) {
              De(n, t, o);
            }
          else
            try {
              ke.removeChild(n.stateNode);
            } catch (o) {
              De(n, t, o);
            }
        break;
      case 18:
        ke !== null &&
          (ut
            ? ((e = ke),
              oh(
                e.nodeType === 9
                  ? e.body
                  : e.nodeName === "HTML"
                    ? e.ownerDocument.body
                    : e,
                n.stateNode,
              ),
              gs(e))
            : oh(ke, n.stateNode));
        break;
      case 4:
        ((a = ke),
          (i = ut),
          (ke = n.stateNode.containerInfo),
          (ut = !0),
          pn(e, t, n),
          (ke = a),
          (ut = i));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (Xe || zn(2, n, t), Xe || zn(4, n, t), pn(e, t, n));
        break;
      case 1:
        (Xe ||
          (Pt(n, t),
          (a = n.stateNode),
          typeof a.componentWillUnmount == "function" && mm(n, t, a)),
          pn(e, t, n));
        break;
      case 21:
        pn(e, t, n);
        break;
      case 22:
        ((Xe = (a = Xe) || n.memoizedState !== null), pn(e, t, n), (Xe = a));
        break;
      default:
        pn(e, t, n);
    }
  }
  function wm(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate),
      e !== null &&
        ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
    )
      try {
        gs(e);
      } catch (n) {
        De(t, t.return, n);
      }
  }
  function sg(e) {
    switch (e.tag) {
      case 13:
      case 19:
        var t = e.stateNode;
        return (t === null && (t = e.stateNode = new ym()), t);
      case 22:
        return (
          (e = e.stateNode),
          (t = e._retryCache),
          t === null && (t = e._retryCache = new ym()),
          t
        );
      default:
        throw Error(c(435, e.tag));
    }
  }
  function ec(e, t) {
    var n = sg(e);
    t.forEach(function (a) {
      var i = hg.bind(null, e, a);
      n.has(a) || (n.add(a), a.then(i, i));
    });
  }
  function gt(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var a = 0; a < n.length; a++) {
        var i = n[a],
          o = e,
          m = t,
          x = m;
        e: for (; x !== null; ) {
          switch (x.tag) {
            case 27:
              if (Xn(x.type)) {
                ((ke = x.stateNode), (ut = !1));
                break e;
              }
              break;
            case 5:
              ((ke = x.stateNode), (ut = !1));
              break e;
            case 3:
            case 4:
              ((ke = x.stateNode.containerInfo), (ut = !0));
              break e;
          }
          x = x.return;
        }
        if (ke === null) throw Error(c(160));
        (bm(o, m, i),
          (ke = null),
          (ut = !1),
          (o = i.alternate),
          o !== null && (o.return = null),
          (i.return = null));
      }
    if (t.subtreeFlags & 13878)
      for (t = t.child; t !== null; ) (Sm(t, e), (t = t.sibling));
  }
  var Ht = null;
  function Sm(e, t) {
    var n = e.alternate,
      a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (gt(t, e),
          vt(e),
          a & 4 && (zn(3, e, e.return), es(3, e), zn(5, e, e.return)));
        break;
      case 1:
        (gt(t, e),
          vt(e),
          a & 512 && (Xe || n === null || Pt(n, n.return)),
          a & 64 &&
            hn &&
            ((e = e.updateQueue),
            e !== null &&
              ((a = e.callbacks),
              a !== null &&
                ((n = e.shared.hiddenCallbacks),
                (e.shared.hiddenCallbacks = n === null ? a : n.concat(a))))));
        break;
      case 26:
        var i = Ht;
        if (
          (gt(t, e),
          vt(e),
          a & 512 && (Xe || n === null || Pt(n, n.return)),
          a & 4)
        ) {
          var o = n !== null ? n.memoizedState : null;
          if (((a = e.memoizedState), n === null))
            if (a === null)
              if (e.stateNode === null) {
                e: {
                  ((a = e.type),
                    (n = e.memoizedProps),
                    (i = i.ownerDocument || i));
                  t: switch (a) {
                    case "title":
                      ((o = i.getElementsByTagName("title")[0]),
                        (!o ||
                          o[ja] ||
                          o[nt] ||
                          o.namespaceURI === "http://www.w3.org/2000/svg" ||
                          o.hasAttribute("itemprop")) &&
                          ((o = i.createElement(a)),
                          i.head.insertBefore(
                            o,
                            i.querySelector("head > title"),
                          )),
                        tt(o, a, n),
                        (o[nt] = e),
                        Fe(o),
                        (a = o));
                      break e;
                    case "link":
                      var m = xh("link", "href", i).get(a + (n.href || ""));
                      if (m) {
                        for (var x = 0; x < m.length; x++)
                          if (
                            ((o = m[x]),
                            o.getAttribute("href") ===
                              (n.href == null || n.href === ""
                                ? null
                                : n.href) &&
                              o.getAttribute("rel") ===
                                (n.rel == null ? null : n.rel) &&
                              o.getAttribute("title") ===
                                (n.title == null ? null : n.title) &&
                              o.getAttribute("crossorigin") ===
                                (n.crossOrigin == null ? null : n.crossOrigin))
                          ) {
                            m.splice(x, 1);
                            break t;
                          }
                      }
                      ((o = i.createElement(a)),
                        tt(o, a, n),
                        i.head.appendChild(o));
                      break;
                    case "meta":
                      if (
                        (m = xh("meta", "content", i).get(
                          a + (n.content || ""),
                        ))
                      ) {
                        for (x = 0; x < m.length; x++)
                          if (
                            ((o = m[x]),
                            o.getAttribute("content") ===
                              (n.content == null ? null : "" + n.content) &&
                              o.getAttribute("name") ===
                                (n.name == null ? null : n.name) &&
                              o.getAttribute("property") ===
                                (n.property == null ? null : n.property) &&
                              o.getAttribute("http-equiv") ===
                                (n.httpEquiv == null ? null : n.httpEquiv) &&
                              o.getAttribute("charset") ===
                                (n.charSet == null ? null : n.charSet))
                          ) {
                            m.splice(x, 1);
                            break t;
                          }
                      }
                      ((o = i.createElement(a)),
                        tt(o, a, n),
                        i.head.appendChild(o));
                      break;
                    default:
                      throw Error(c(468, a));
                  }
                  ((o[nt] = e), Fe(o), (a = o));
                }
                e.stateNode = a;
              } else yh(i, e.type, e.stateNode);
            else e.stateNode = ph(i, a, e.memoizedProps);
          else
            o !== a
              ? (o === null
                  ? n.stateNode !== null &&
                    ((n = n.stateNode), n.parentNode.removeChild(n))
                  : o.count--,
                a === null
                  ? yh(i, e.type, e.stateNode)
                  : ph(i, a, e.memoizedProps))
              : a === null &&
                e.stateNode !== null &&
                Jo(e, e.memoizedProps, n.memoizedProps);
        }
        break;
      case 27:
        (gt(t, e),
          vt(e),
          a & 512 && (Xe || n === null || Pt(n, n.return)),
          n !== null && a & 4 && Jo(e, e.memoizedProps, n.memoizedProps));
        break;
      case 5:
        if (
          (gt(t, e),
          vt(e),
          a & 512 && (Xe || n === null || Pt(n, n.return)),
          e.flags & 32)
        ) {
          i = e.stateNode;
          try {
            Hl(i, "");
          } catch (z) {
            De(e, e.return, z);
          }
        }
        (a & 4 &&
          e.stateNode != null &&
          ((i = e.memoizedProps), Jo(e, i, n !== null ? n.memoizedProps : i)),
          a & 1024 && (Io = !0));
        break;
      case 6:
        if ((gt(t, e), vt(e), a & 4)) {
          if (e.stateNode === null) throw Error(c(162));
          ((a = e.memoizedProps), (n = e.stateNode));
          try {
            n.nodeValue = a;
          } catch (z) {
            De(e, e.return, z);
          }
        }
        break;
      case 3:
        if (
          ((Li = null),
          (i = Ht),
          (Ht = ki(t.containerInfo)),
          gt(t, e),
          (Ht = i),
          vt(e),
          a & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            gs(t.containerInfo);
          } catch (z) {
            De(e, e.return, z);
          }
        Io && ((Io = !1), Nm(e));
        break;
      case 4:
        ((a = Ht),
          (Ht = ki(e.stateNode.containerInfo)),
          gt(t, e),
          vt(e),
          (Ht = a));
        break;
      case 12:
        (gt(t, e), vt(e));
        break;
      case 13:
        (gt(t, e),
          vt(e),
          e.child.flags & 8192 &&
            (e.memoizedState !== null) !=
              (n !== null && n.memoizedState !== null) &&
            (ic = Vt()),
          a & 4 &&
            ((a = e.updateQueue),
            a !== null && ((e.updateQueue = null), ec(e, a))));
        break;
      case 22:
        i = e.memoizedState !== null;
        var S = n !== null && n.memoizedState !== null,
          R = hn,
          k = Xe;
        if (
          ((hn = R || i),
          (Xe = k || S),
          gt(t, e),
          (Xe = k),
          (hn = R),
          vt(e),
          a & 8192)
        )
          e: for (
            t = e.stateNode,
              t._visibility = i ? t._visibility & -2 : t._visibility | 1,
              i && (n === null || S || hn || Xe || wl(e)),
              n = null,
              t = e;
            ;
          ) {
            if (t.tag === 5 || t.tag === 26) {
              if (n === null) {
                S = n = t;
                try {
                  if (((o = S.stateNode), i))
                    ((m = o.style),
                      typeof m.setProperty == "function"
                        ? m.setProperty("display", "none", "important")
                        : (m.display = "none"));
                  else {
                    x = S.stateNode;
                    var L = S.memoizedProps.style,
                      D =
                        L != null && L.hasOwnProperty("display")
                          ? L.display
                          : null;
                    x.style.display =
                      D == null || typeof D == "boolean" ? "" : ("" + D).trim();
                  }
                } catch (z) {
                  De(S, S.return, z);
                }
              }
            } else if (t.tag === 6) {
              if (n === null) {
                S = t;
                try {
                  S.stateNode.nodeValue = i ? "" : S.memoizedProps;
                } catch (z) {
                  De(S, S.return, z);
                }
              }
            } else if (
              ((t.tag !== 22 && t.tag !== 23) ||
                t.memoizedState === null ||
                t === e) &&
              t.child !== null
            ) {
              ((t.child.return = t), (t = t.child));
              continue;
            }
            if (t === e) break e;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) break e;
              (n === t && (n = null), (t = t.return));
            }
            (n === t && (n = null),
              (t.sibling.return = t.return),
              (t = t.sibling));
          }
        a & 4 &&
          ((a = e.updateQueue),
          a !== null &&
            ((n = a.retryQueue),
            n !== null && ((a.retryQueue = null), ec(e, n))));
        break;
      case 19:
        (gt(t, e),
          vt(e),
          a & 4 &&
            ((a = e.updateQueue),
            a !== null && ((e.updateQueue = null), ec(e, a))));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        (gt(t, e), vt(e));
    }
  }
  function vt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var n, a = e.return; a !== null; ) {
          if (pm(a)) {
            n = a;
            break;
          }
          a = a.return;
        }
        if (n == null) throw Error(c(160));
        switch (n.tag) {
          case 27:
            var i = n.stateNode,
              o = $o(e);
            Ni(e, o, i);
            break;
          case 5:
            var m = n.stateNode;
            n.flags & 32 && (Hl(m, ""), (n.flags &= -33));
            var x = $o(e);
            Ni(e, x, m);
            break;
          case 3:
          case 4:
            var S = n.stateNode.containerInfo,
              R = $o(e);
            Wo(e, R, S);
            break;
          default:
            throw Error(c(161));
        }
      } catch (k) {
        De(e, e.return, k);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Nm(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        (Nm(t),
          t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
          (e = e.sibling));
      }
  }
  function Un(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) (gm(e, t.alternate, t), (t = t.sibling));
  }
  function wl(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (zn(4, t, t.return), wl(t));
          break;
        case 1:
          Pt(t, t.return);
          var n = t.stateNode;
          (typeof n.componentWillUnmount == "function" && mm(t, t.return, n),
            wl(t));
          break;
        case 27:
          us(t.stateNode);
        case 26:
        case 5:
          (Pt(t, t.return), wl(t));
          break;
        case 22:
          t.memoizedState === null && wl(t);
          break;
        case 30:
          wl(t);
          break;
        default:
          wl(t);
      }
      e = e.sibling;
    }
  }
  function kn(e, t, n) {
    for (n = n && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var a = t.alternate,
        i = e,
        o = t,
        m = o.flags;
      switch (o.tag) {
        case 0:
        case 11:
        case 15:
          (kn(i, o, n), es(4, o));
          break;
        case 1:
          if (
            (kn(i, o, n),
            (a = o),
            (i = a.stateNode),
            typeof i.componentDidMount == "function")
          )
            try {
              i.componentDidMount();
            } catch (R) {
              De(a, a.return, R);
            }
          if (((a = o), (i = a.updateQueue), i !== null)) {
            var x = a.stateNode;
            try {
              var S = i.shared.hiddenCallbacks;
              if (S !== null)
                for (i.shared.hiddenCallbacks = null, i = 0; i < S.length; i++)
                  Wf(S[i], x);
            } catch (R) {
              De(a, a.return, R);
            }
          }
          (n && m & 64 && dm(o), ts(o, o.return));
          break;
        case 27:
          xm(o);
        case 26:
        case 5:
          (kn(i, o, n), n && a === null && m & 4 && hm(o), ts(o, o.return));
          break;
        case 12:
          kn(i, o, n);
          break;
        case 13:
          (kn(i, o, n), n && m & 4 && wm(i, o));
          break;
        case 22:
          (o.memoizedState === null && kn(i, o, n), ts(o, o.return));
          break;
        case 30:
          break;
        default:
          kn(i, o, n);
      }
      t = t.sibling;
    }
  }
  function tc(e, t) {
    var n = null;
    (e !== null &&
      e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (n = e.memoizedState.cachePool.pool),
      (e = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (e = t.memoizedState.cachePool.pool),
      e !== n && (e != null && e.refCount++, n != null && qa(n)));
  }
  function nc(e, t) {
    ((e = null),
      t.alternate !== null && (e = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== e && (t.refCount++, e != null && qa(e)));
  }
  function Ft(e, t, n, a) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) (Em(e, t, n, a), (t = t.sibling));
  }
  function Em(e, t, n, a) {
    var i = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (Ft(e, t, n, a), i & 2048 && es(9, t));
        break;
      case 1:
        Ft(e, t, n, a);
        break;
      case 3:
        (Ft(e, t, n, a),
          i & 2048 &&
            ((e = null),
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== e && (t.refCount++, e != null && qa(e))));
        break;
      case 12:
        if (i & 2048) {
          (Ft(e, t, n, a), (e = t.stateNode));
          try {
            var o = t.memoizedProps,
              m = o.id,
              x = o.onPostCommit;
            typeof x == "function" &&
              x(
                m,
                t.alternate === null ? "mount" : "update",
                e.passiveEffectDuration,
                -0,
              );
          } catch (S) {
            De(t, t.return, S);
          }
        } else Ft(e, t, n, a);
        break;
      case 13:
        Ft(e, t, n, a);
        break;
      case 23:
        break;
      case 22:
        ((o = t.stateNode),
          (m = t.alternate),
          t.memoizedState !== null
            ? o._visibility & 2
              ? Ft(e, t, n, a)
              : ns(e, t)
            : o._visibility & 2
              ? Ft(e, t, n, a)
              : ((o._visibility |= 2),
                na(e, t, n, a, (t.subtreeFlags & 10256) !== 0)),
          i & 2048 && tc(m, t));
        break;
      case 24:
        (Ft(e, t, n, a), i & 2048 && nc(t.alternate, t));
        break;
      default:
        Ft(e, t, n, a);
    }
  }
  function na(e, t, n, a, i) {
    for (i = i && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; ) {
      var o = e,
        m = t,
        x = n,
        S = a,
        R = m.flags;
      switch (m.tag) {
        case 0:
        case 11:
        case 15:
          (na(o, m, x, S, i), es(8, m));
          break;
        case 23:
          break;
        case 22:
          var k = m.stateNode;
          (m.memoizedState !== null
            ? k._visibility & 2
              ? na(o, m, x, S, i)
              : ns(o, m)
            : ((k._visibility |= 2), na(o, m, x, S, i)),
            i && R & 2048 && tc(m.alternate, m));
          break;
        case 24:
          (na(o, m, x, S, i), i && R & 2048 && nc(m.alternate, m));
          break;
        default:
          na(o, m, x, S, i);
      }
      t = t.sibling;
    }
  }
  function ns(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var n = e,
          a = t,
          i = a.flags;
        switch (a.tag) {
          case 22:
            (ns(n, a), i & 2048 && tc(a.alternate, a));
            break;
          case 24:
            (ns(n, a), i & 2048 && nc(a.alternate, a));
            break;
          default:
            ns(n, a);
        }
        t = t.sibling;
      }
  }
  var ls = 8192;
  function la(e) {
    if (e.subtreeFlags & ls)
      for (e = e.child; e !== null; ) (jm(e), (e = e.sibling));
  }
  function jm(e) {
    switch (e.tag) {
      case 26:
        (la(e),
          e.flags & ls &&
            e.memoizedState !== null &&
            Qg(Ht, e.memoizedState, e.memoizedProps));
        break;
      case 5:
        la(e);
        break;
      case 3:
      case 4:
        var t = Ht;
        ((Ht = ki(e.stateNode.containerInfo)), la(e), (Ht = t));
        break;
      case 22:
        e.memoizedState === null &&
          ((t = e.alternate),
          t !== null && t.memoizedState !== null
            ? ((t = ls), (ls = 16777216), la(e), (ls = t))
            : la(e));
        break;
      default:
        la(e);
    }
  }
  function Am(e) {
    var t = e.alternate;
    if (t !== null && ((e = t.child), e !== null)) {
      t.child = null;
      do ((t = e.sibling), (e.sibling = null), (e = t));
      while (e !== null);
    }
  }
  function as(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var a = t[n];
          (($e = a), Om(a, e));
        }
      Am(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) (Tm(e), (e = e.sibling));
  }
  function Tm(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        (as(e), e.flags & 2048 && zn(9, e, e.return));
        break;
      case 3:
        as(e);
        break;
      case 12:
        as(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null &&
        t._visibility & 2 &&
        (e.return === null || e.return.tag !== 13)
          ? ((t._visibility &= -3), Ei(e))
          : as(e);
        break;
      default:
        as(e);
    }
  }
  function Ei(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var a = t[n];
          (($e = a), Om(a, e));
        }
      Am(e);
    }
    for (e = e.child; e !== null; ) {
      switch (((t = e), t.tag)) {
        case 0:
        case 11:
        case 15:
          (zn(8, t, t.return), Ei(t));
          break;
        case 22:
          ((n = t.stateNode),
            n._visibility & 2 && ((n._visibility &= -3), Ei(t)));
          break;
        default:
          Ei(t);
      }
      e = e.sibling;
    }
  }
  function Om(e, t) {
    for (; $e !== null; ) {
      var n = $e;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          zn(8, n, t);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var a = n.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          qa(n.memoizedState.cache);
      }
      if (((a = n.child), a !== null)) ((a.return = n), ($e = a));
      else
        e: for (n = e; $e !== null; ) {
          a = $e;
          var i = a.sibling,
            o = a.return;
          if ((vm(a), a === n)) {
            $e = null;
            break e;
          }
          if (i !== null) {
            ((i.return = o), ($e = i));
            break e;
          }
          $e = o;
        }
    }
  }
  var ig = {
      getCacheForType: function (e) {
        var t = lt(Ve),
          n = t.data.get(e);
        return (n === void 0 && ((n = e()), t.data.set(e, n)), n);
      },
    },
    rg = typeof WeakMap == "function" ? WeakMap : Map,
    Te = 0,
    ze = null,
    ge = null,
    we = 0,
    Oe = 0,
    bt = null,
    Hn = !1,
    aa = !1,
    lc = !1,
    xn = 0,
    Be = 0,
    Ln = 0,
    Sl = 0,
    ac = 0,
    Dt = 0,
    sa = 0,
    ss = null,
    ft = null,
    sc = !1,
    ic = 0,
    ji = 1 / 0,
    Ai = null,
    Bn = null,
    et = 0,
    qn = null,
    ia = null,
    ra = 0,
    rc = 0,
    oc = null,
    Cm = null,
    is = 0,
    cc = null;
  function wt() {
    if ((Te & 2) !== 0 && we !== 0) return we & -we;
    if (C.T !== null) {
      var e = Pl;
      return e !== 0 ? e : xc();
    }
    return Qu();
  }
  function Rm() {
    Dt === 0 && (Dt = (we & 536870912) === 0 || Ee ? qu() : 536870912);
    var e = _t.current;
    return (e !== null && (e.flags |= 32), Dt);
  }
  function St(e, t, n) {
    (((e === ze && (Oe === 2 || Oe === 9)) || e.cancelPendingCommit !== null) &&
      (oa(e, 0), Gn(e, we, Dt, !1)),
      Ea(e, n),
      ((Te & 2) === 0 || e !== ze) &&
        (e === ze &&
          ((Te & 2) === 0 && (Sl |= n), Be === 4 && Gn(e, we, Dt, !1)),
        Jt(e)));
  }
  function Mm(e, t, n) {
    if ((Te & 6) !== 0) throw Error(c(327));
    var a = (!n && (t & 124) === 0 && (t & e.expiredLanes) === 0) || Na(e, t),
      i = a ? ug(e, t) : dc(e, t, !0),
      o = a;
    do {
      if (i === 0) {
        aa && !a && Gn(e, t, 0, !1);
        break;
      } else {
        if (((n = e.current.alternate), o && !og(n))) {
          ((i = dc(e, t, !1)), (o = !1));
          continue;
        }
        if (i === 2) {
          if (((o = t), e.errorRecoveryDisabledLanes & o)) var m = 0;
          else
            ((m = e.pendingLanes & -536870913),
              (m = m !== 0 ? m : m & 536870912 ? 536870912 : 0));
          if (m !== 0) {
            t = m;
            e: {
              var x = e;
              i = ss;
              var S = x.current.memoizedState.isDehydrated;
              if ((S && (oa(x, m).flags |= 256), (m = dc(x, m, !1)), m !== 2)) {
                if (lc && !S) {
                  ((x.errorRecoveryDisabledLanes |= o), (Sl |= o), (i = 4));
                  break e;
                }
                ((o = ft),
                  (ft = i),
                  o !== null &&
                    (ft === null ? (ft = o) : ft.push.apply(ft, o)));
              }
              i = m;
            }
            if (((o = !1), i !== 2)) continue;
          }
        }
        if (i === 1) {
          (oa(e, 0), Gn(e, t, 0, !0));
          break;
        }
        e: {
          switch (((a = e), (o = i), o)) {
            case 0:
            case 1:
              throw Error(c(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              Gn(a, t, Dt, !Hn);
              break e;
            case 2:
              ft = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(c(329));
          }
          if ((t & 62914560) === t && ((i = ic + 300 - Vt()), 10 < i)) {
            if ((Gn(a, t, Dt, !Hn), Hs(a, 0, !0) !== 0)) break e;
            a.timeoutHandle = ih(
              _m.bind(null, a, n, ft, Ai, sc, t, Dt, Sl, sa, Hn, o, 2, -0, 0),
              i,
            );
            break e;
          }
          _m(a, n, ft, Ai, sc, t, Dt, Sl, sa, Hn, o, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    Jt(e);
  }
  function _m(e, t, n, a, i, o, m, x, S, R, k, L, D, z) {
    if (
      ((e.timeoutHandle = -1),
      (L = t.subtreeFlags),
      (L & 8192 || (L & 16785408) === 16785408) &&
        ((ms = { stylesheets: null, count: 0, unsuspend: Yg }),
        jm(t),
        (L = Vg()),
        L !== null))
    ) {
      ((e.cancelPendingCommit = L(
        Bm.bind(null, e, t, o, n, a, i, m, x, S, k, 1, D, z),
      )),
        Gn(e, o, m, !R));
      return;
    }
    Bm(e, t, o, n, a, i, m, x, S);
  }
  function og(e) {
    for (var t = e; ; ) {
      var n = t.tag;
      if (
        (n === 0 || n === 11 || n === 15) &&
        t.flags & 16384 &&
        ((n = t.updateQueue), n !== null && ((n = n.stores), n !== null))
      )
        for (var a = 0; a < n.length; a++) {
          var i = n[a],
            o = i.getSnapshot;
          i = i.value;
          try {
            if (!xt(o(), i)) return !1;
          } catch {
            return !1;
          }
        }
      if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
        ((n.return = t), (t = n));
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
    }
    return !0;
  }
  function Gn(e, t, n, a) {
    ((t &= ~ac),
      (t &= ~Sl),
      (e.suspendedLanes |= t),
      (e.pingedLanes &= ~t),
      a && (e.warmLanes |= t),
      (a = e.expirationTimes));
    for (var i = t; 0 < i; ) {
      var o = 31 - pt(i),
        m = 1 << o;
      ((a[o] = -1), (i &= ~m));
    }
    n !== 0 && Xu(e, n, t);
  }
  function Ti() {
    return (Te & 6) === 0 ? (rs(0), !1) : !0;
  }
  function uc() {
    if (ge !== null) {
      if (Oe === 0) var e = ge.return;
      else ((e = ge), (on = xl = null), To(e), (ea = null), ($a = 0), (e = ge));
      for (; e !== null; ) (fm(e.alternate, e), (e = e.return));
      ge = null;
    }
  }
  function oa(e, t) {
    var n = e.timeoutHandle;
    (n !== -1 && ((e.timeoutHandle = -1), Ag(n)),
      (n = e.cancelPendingCommit),
      n !== null && ((e.cancelPendingCommit = null), n()),
      uc(),
      (ze = e),
      (ge = n = an(e.current, null)),
      (we = t),
      (Oe = 0),
      (bt = null),
      (Hn = !1),
      (aa = Na(e, t)),
      (lc = !1),
      (sa = Dt = ac = Sl = Ln = Be = 0),
      (ft = ss = null),
      (sc = !1),
      (t & 8) !== 0 && (t |= t & 32));
    var a = e.entangledLanes;
    if (a !== 0)
      for (e = e.entanglements, a &= t; 0 < a; ) {
        var i = 31 - pt(a),
          o = 1 << i;
        ((t |= e[i]), (a &= ~o));
      }
    return ((xn = t), Fs(), n);
  }
  function Dm(e, t) {
    ((he = null),
      (C.H = hi),
      t === Xa || t === ai
        ? ((t = Jf()), (Oe = 3))
        : t === Kf
          ? ((t = Jf()), (Oe = 4))
          : (Oe =
              t === $d
                ? 8
                : t !== null &&
                    typeof t == "object" &&
                    typeof t.then == "function"
                  ? 6
                  : 1),
      (bt = t),
      ge === null && ((Be = 1), vi(e, Ot(t, e.current))));
  }
  function zm() {
    var e = C.H;
    return ((C.H = hi), e === null ? hi : e);
  }
  function Um() {
    var e = C.A;
    return ((C.A = ig), e);
  }
  function fc() {
    ((Be = 4),
      Hn || ((we & 4194048) !== we && _t.current !== null) || (aa = !0),
      ((Ln & 134217727) === 0 && (Sl & 134217727) === 0) ||
        ze === null ||
        Gn(ze, we, Dt, !1));
  }
  function dc(e, t, n) {
    var a = Te;
    Te |= 2;
    var i = zm(),
      o = Um();
    ((ze !== e || we !== t) && ((Ai = null), oa(e, t)), (t = !1));
    var m = Be;
    e: do
      try {
        if (Oe !== 0 && ge !== null) {
          var x = ge,
            S = bt;
          switch (Oe) {
            case 8:
              (uc(), (m = 6));
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              _t.current === null && (t = !0);
              var R = Oe;
              if (((Oe = 0), (bt = null), ca(e, x, S, R), n && aa)) {
                m = 0;
                break e;
              }
              break;
            default:
              ((R = Oe), (Oe = 0), (bt = null), ca(e, x, S, R));
          }
        }
        (cg(), (m = Be));
        break;
      } catch (k) {
        Dm(e, k);
      }
    while (!0);
    return (
      t && e.shellSuspendCounter++,
      (on = xl = null),
      (Te = a),
      (C.H = i),
      (C.A = o),
      ge === null && ((ze = null), (we = 0), Fs()),
      m
    );
  }
  function cg() {
    for (; ge !== null; ) km(ge);
  }
  function ug(e, t) {
    var n = Te;
    Te |= 2;
    var a = zm(),
      i = Um();
    ze !== e || we !== t
      ? ((Ai = null), (ji = Vt() + 500), oa(e, t))
      : (aa = Na(e, t));
    e: do
      try {
        if (Oe !== 0 && ge !== null) {
          t = ge;
          var o = bt;
          t: switch (Oe) {
            case 1:
              ((Oe = 0), (bt = null), ca(e, t, o, 1));
              break;
            case 2:
            case 9:
              if (Pf(o)) {
                ((Oe = 0), (bt = null), Hm(t));
                break;
              }
              ((t = function () {
                ((Oe !== 2 && Oe !== 9) || ze !== e || (Oe = 7), Jt(e));
              }),
                o.then(t, t));
              break e;
            case 3:
              Oe = 7;
              break e;
            case 4:
              Oe = 5;
              break e;
            case 7:
              Pf(o)
                ? ((Oe = 0), (bt = null), Hm(t))
                : ((Oe = 0), (bt = null), ca(e, t, o, 7));
              break;
            case 5:
              var m = null;
              switch (ge.tag) {
                case 26:
                  m = ge.memoizedState;
                case 5:
                case 27:
                  var x = ge;
                  if (!m || gh(m)) {
                    ((Oe = 0), (bt = null));
                    var S = x.sibling;
                    if (S !== null) ge = S;
                    else {
                      var R = x.return;
                      R !== null ? ((ge = R), Oi(R)) : (ge = null);
                    }
                    break t;
                  }
              }
              ((Oe = 0), (bt = null), ca(e, t, o, 5));
              break;
            case 6:
              ((Oe = 0), (bt = null), ca(e, t, o, 6));
              break;
            case 8:
              (uc(), (Be = 6));
              break e;
            default:
              throw Error(c(462));
          }
        }
        fg();
        break;
      } catch (k) {
        Dm(e, k);
      }
    while (!0);
    return (
      (on = xl = null),
      (C.H = a),
      (C.A = i),
      (Te = n),
      ge !== null ? 0 : ((ze = null), (we = 0), Fs(), Be)
    );
  }
  function fg() {
    for (; ge !== null && !Dx(); ) km(ge);
  }
  function km(e) {
    var t = cm(e.alternate, e, xn);
    ((e.memoizedProps = e.pendingProps), t === null ? Oi(e) : (ge = t));
  }
  function Hm(e) {
    var t = e,
      n = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = lm(n, t, t.pendingProps, t.type, void 0, we);
        break;
      case 11:
        t = lm(n, t, t.pendingProps, t.type.render, t.ref, we);
        break;
      case 5:
        To(t);
      default:
        (fm(n, t), (t = ge = Lf(t, xn)), (t = cm(n, t, xn)));
    }
    ((e.memoizedProps = e.pendingProps), t === null ? Oi(e) : (ge = t));
  }
  function ca(e, t, n, a) {
    ((on = xl = null), To(t), (ea = null), ($a = 0));
    var i = t.return;
    try {
      if (eg(e, i, t, n, we)) {
        ((Be = 1), vi(e, Ot(n, e.current)), (ge = null));
        return;
      }
    } catch (o) {
      if (i !== null) throw ((ge = i), o);
      ((Be = 1), vi(e, Ot(n, e.current)), (ge = null));
      return;
    }
    t.flags & 32768
      ? (Ee || a === 1
          ? (e = !0)
          : aa || (we & 536870912) !== 0
            ? (e = !1)
            : ((Hn = e = !0),
              (a === 2 || a === 9 || a === 3 || a === 6) &&
                ((a = _t.current),
                a !== null && a.tag === 13 && (a.flags |= 16384))),
        Lm(t, e))
      : Oi(t);
  }
  function Oi(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        Lm(t, Hn);
        return;
      }
      e = t.return;
      var n = ng(t.alternate, t, xn);
      if (n !== null) {
        ge = n;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        ge = t;
        return;
      }
      ge = t = e;
    } while (t !== null);
    Be === 0 && (Be = 5);
  }
  function Lm(e, t) {
    do {
      var n = lg(e.alternate, e);
      if (n !== null) {
        ((n.flags &= 32767), (ge = n));
        return;
      }
      if (
        ((n = e.return),
        n !== null &&
          ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
        !t && ((e = e.sibling), e !== null))
      ) {
        ge = e;
        return;
      }
      ge = e = n;
    } while (e !== null);
    ((Be = 6), (ge = null));
  }
  function Bm(e, t, n, a, i, o, m, x, S) {
    e.cancelPendingCommit = null;
    do Ci();
    while (et !== 0);
    if ((Te & 6) !== 0) throw Error(c(327));
    if (t !== null) {
      if (t === e.current) throw Error(c(177));
      if (
        ((o = t.lanes | t.childLanes),
        (o |= to),
        Yx(e, n, o, m, x, S),
        e === ze && ((ge = ze = null), (we = 0)),
        (ia = t),
        (qn = e),
        (ra = n),
        (rc = o),
        (oc = i),
        (Cm = a),
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
          ? ((e.callbackNode = null),
            (e.callbackPriority = 0),
            pg(zs, function () {
              return (Qm(), null);
            }))
          : ((e.callbackNode = null), (e.callbackPriority = 0)),
        (a = (t.flags & 13878) !== 0),
        (t.subtreeFlags & 13878) !== 0 || a)
      ) {
        ((a = C.T), (C.T = null), (i = G.p), (G.p = 2), (m = Te), (Te |= 4));
        try {
          ag(e, t, n);
        } finally {
          ((Te = m), (G.p = i), (C.T = a));
        }
      }
      ((et = 1), qm(), Gm(), Xm());
    }
  }
  function qm() {
    if (et === 1) {
      et = 0;
      var e = qn,
        t = ia,
        n = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || n) {
        ((n = C.T), (C.T = null));
        var a = G.p;
        G.p = 2;
        var i = Te;
        Te |= 4;
        try {
          Sm(t, e);
          var o = Ec,
            m = Of(e.containerInfo),
            x = o.focusedElem,
            S = o.selectionRange;
          if (
            m !== x &&
            x &&
            x.ownerDocument &&
            Tf(x.ownerDocument.documentElement, x)
          ) {
            if (S !== null && Jr(x)) {
              var R = S.start,
                k = S.end;
              if ((k === void 0 && (k = R), "selectionStart" in x))
                ((x.selectionStart = R),
                  (x.selectionEnd = Math.min(k, x.value.length)));
              else {
                var L = x.ownerDocument || document,
                  D = (L && L.defaultView) || window;
                if (D.getSelection) {
                  var z = D.getSelection(),
                    ue = x.textContent.length,
                    ie = Math.min(S.start, ue),
                    Me = S.end === void 0 ? ie : Math.min(S.end, ue);
                  !z.extend && ie > Me && ((m = Me), (Me = ie), (ie = m));
                  var A = Af(x, ie),
                    E = Af(x, Me);
                  if (
                    A &&
                    E &&
                    (z.rangeCount !== 1 ||
                      z.anchorNode !== A.node ||
                      z.anchorOffset !== A.offset ||
                      z.focusNode !== E.node ||
                      z.focusOffset !== E.offset)
                  ) {
                    var T = L.createRange();
                    (T.setStart(A.node, A.offset),
                      z.removeAllRanges(),
                      ie > Me
                        ? (z.addRange(T), z.extend(E.node, E.offset))
                        : (T.setEnd(E.node, E.offset), z.addRange(T)));
                  }
                }
              }
            }
            for (L = [], z = x; (z = z.parentNode); )
              z.nodeType === 1 &&
                L.push({ element: z, left: z.scrollLeft, top: z.scrollTop });
            for (
              typeof x.focus == "function" && x.focus(), x = 0;
              x < L.length;
              x++
            ) {
              var H = L[x];
              ((H.element.scrollLeft = H.left), (H.element.scrollTop = H.top));
            }
          }
          ((Gi = !!Nc), (Ec = Nc = null));
        } finally {
          ((Te = i), (G.p = a), (C.T = n));
        }
      }
      ((e.current = t), (et = 2));
    }
  }
  function Gm() {
    if (et === 2) {
      et = 0;
      var e = qn,
        t = ia,
        n = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || n) {
        ((n = C.T), (C.T = null));
        var a = G.p;
        G.p = 2;
        var i = Te;
        Te |= 4;
        try {
          gm(e, t.alternate, t);
        } finally {
          ((Te = i), (G.p = a), (C.T = n));
        }
      }
      et = 3;
    }
  }
  function Xm() {
    if (et === 4 || et === 3) {
      ((et = 0), zx());
      var e = qn,
        t = ia,
        n = ra,
        a = Cm;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
        ? (et = 5)
        : ((et = 0), (ia = qn = null), Ym(e, e.pendingLanes));
      var i = e.pendingLanes;
      if (
        (i === 0 && (Bn = null),
        Cr(n),
        (t = t.stateNode),
        ht && typeof ht.onCommitFiberRoot == "function")
      )
        try {
          ht.onCommitFiberRoot(Sa, t, void 0, (t.current.flags & 128) === 128);
        } catch {}
      if (a !== null) {
        ((t = C.T), (i = G.p), (G.p = 2), (C.T = null));
        try {
          for (var o = e.onRecoverableError, m = 0; m < a.length; m++) {
            var x = a[m];
            o(x.value, { componentStack: x.stack });
          }
        } finally {
          ((C.T = t), (G.p = i));
        }
      }
      ((ra & 3) !== 0 && Ci(),
        Jt(e),
        (i = e.pendingLanes),
        (n & 4194090) !== 0 && (i & 42) !== 0
          ? e === cc
            ? is++
            : ((is = 0), (cc = e))
          : (is = 0),
        rs(0));
    }
  }
  function Ym(e, t) {
    (e.pooledCacheLanes &= t) === 0 &&
      ((t = e.pooledCache), t != null && ((e.pooledCache = null), qa(t)));
  }
  function Ci(e) {
    return (qm(), Gm(), Xm(), Qm());
  }
  function Qm() {
    if (et !== 5) return !1;
    var e = qn,
      t = rc;
    rc = 0;
    var n = Cr(ra),
      a = C.T,
      i = G.p;
    try {
      ((G.p = 32 > n ? 32 : n), (C.T = null), (n = oc), (oc = null));
      var o = qn,
        m = ra;
      if (((et = 0), (ia = qn = null), (ra = 0), (Te & 6) !== 0))
        throw Error(c(331));
      var x = Te;
      if (
        ((Te |= 4),
        Tm(o.current),
        Em(o, o.current, m, n),
        (Te = x),
        rs(0, !1),
        ht && typeof ht.onPostCommitFiberRoot == "function")
      )
        try {
          ht.onPostCommitFiberRoot(Sa, o);
        } catch {}
      return !0;
    } finally {
      ((G.p = i), (C.T = a), Ym(e, t));
    }
  }
  function Vm(e, t, n) {
    ((t = Ot(n, t)),
      (t = Go(e.stateNode, t, 2)),
      (e = Rn(e, t, 2)),
      e !== null && (Ea(e, 2), Jt(e)));
  }
  function De(e, t, n) {
    if (e.tag === 3) Vm(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Vm(t, e, n);
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof a.componentDidCatch == "function" &&
              (Bn === null || !Bn.has(a)))
          ) {
            ((e = Ot(n, e)),
              (n = Fd(2)),
              (a = Rn(t, n, 2)),
              a !== null && (Jd(n, a, t, e), Ea(a, 2), Jt(a)));
            break;
          }
        }
        t = t.return;
      }
  }
  function mc(e, t, n) {
    var a = e.pingCache;
    if (a === null) {
      a = e.pingCache = new rg();
      var i = new Set();
      a.set(t, i);
    } else ((i = a.get(t)), i === void 0 && ((i = new Set()), a.set(t, i)));
    i.has(n) ||
      ((lc = !0), i.add(n), (e = dg.bind(null, e, t, n)), t.then(e, e));
  }
  function dg(e, t, n) {
    var a = e.pingCache;
    (a !== null && a.delete(t),
      (e.pingedLanes |= e.suspendedLanes & n),
      (e.warmLanes &= ~n),
      ze === e &&
        (we & n) === n &&
        (Be === 4 || (Be === 3 && (we & 62914560) === we && 300 > Vt() - ic)
          ? (Te & 2) === 0 && oa(e, 0)
          : (ac |= n),
        sa === we && (sa = 0)),
      Jt(e));
  }
  function Zm(e, t) {
    (t === 0 && (t = Gu()), (e = Ql(e, t)), e !== null && (Ea(e, t), Jt(e)));
  }
  function mg(e) {
    var t = e.memoizedState,
      n = 0;
    (t !== null && (n = t.retryLane), Zm(e, n));
  }
  function hg(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var a = e.stateNode,
          i = e.memoizedState;
        i !== null && (n = i.retryLane);
        break;
      case 19:
        a = e.stateNode;
        break;
      case 22:
        a = e.stateNode._retryCache;
        break;
      default:
        throw Error(c(314));
    }
    (a !== null && a.delete(t), Zm(e, n));
  }
  function pg(e, t) {
    return jt(e, t);
  }
  var Ri = null,
    ua = null,
    hc = !1,
    Mi = !1,
    pc = !1,
    Nl = 0;
  function Jt(e) {
    (e !== ua &&
      e.next === null &&
      (ua === null ? (Ri = ua = e) : (ua = ua.next = e)),
      (Mi = !0),
      hc || ((hc = !0), yg()));
  }
  function rs(e, t) {
    if (!pc && Mi) {
      pc = !0;
      do
        for (var n = !1, a = Ri; a !== null; ) {
          if (e !== 0) {
            var i = a.pendingLanes;
            if (i === 0) var o = 0;
            else {
              var m = a.suspendedLanes,
                x = a.pingedLanes;
              ((o = (1 << (31 - pt(42 | e) + 1)) - 1),
                (o &= i & ~(m & ~x)),
                (o = o & 201326741 ? (o & 201326741) | 1 : o ? o | 2 : 0));
            }
            o !== 0 && ((n = !0), Jm(a, o));
          } else
            ((o = we),
              (o = Hs(
                a,
                a === ze ? o : 0,
                a.cancelPendingCommit !== null || a.timeoutHandle !== -1,
              )),
              (o & 3) === 0 || Na(a, o) || ((n = !0), Jm(a, o)));
          a = a.next;
        }
      while (n);
      pc = !1;
    }
  }
  function xg() {
    Km();
  }
  function Km() {
    Mi = hc = !1;
    var e = 0;
    Nl !== 0 && (jg() && (e = Nl), (Nl = 0));
    for (var t = Vt(), n = null, a = Ri; a !== null; ) {
      var i = a.next,
        o = Pm(a, t);
      (o === 0
        ? ((a.next = null),
          n === null ? (Ri = i) : (n.next = i),
          i === null && (ua = n))
        : ((n = a), (e !== 0 || (o & 3) !== 0) && (Mi = !0)),
        (a = i));
    }
    rs(e);
  }
  function Pm(e, t) {
    for (
      var n = e.suspendedLanes,
        a = e.pingedLanes,
        i = e.expirationTimes,
        o = e.pendingLanes & -62914561;
      0 < o;
    ) {
      var m = 31 - pt(o),
        x = 1 << m,
        S = i[m];
      (S === -1
        ? ((x & n) === 0 || (x & a) !== 0) && (i[m] = Xx(x, t))
        : S <= t && (e.expiredLanes |= x),
        (o &= ~x));
    }
    if (
      ((t = ze),
      (n = we),
      (n = Hs(
        e,
        e === t ? n : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
      )),
      (a = e.callbackNode),
      n === 0 ||
        (e === t && (Oe === 2 || Oe === 9)) ||
        e.cancelPendingCommit !== null)
    )
      return (
        a !== null && a !== null && Nn(a),
        (e.callbackNode = null),
        (e.callbackPriority = 0)
      );
    if ((n & 3) === 0 || Na(e, n)) {
      if (((t = n & -n), t === e.callbackPriority)) return t;
      switch ((a !== null && Nn(a), Cr(n))) {
        case 2:
        case 8:
          n = Lu;
          break;
        case 32:
          n = zs;
          break;
        case 268435456:
          n = Bu;
          break;
        default:
          n = zs;
      }
      return (
        (a = Fm.bind(null, e)),
        (n = jt(n, a)),
        (e.callbackPriority = t),
        (e.callbackNode = n),
        t
      );
    }
    return (
      a !== null && a !== null && Nn(a),
      (e.callbackPriority = 2),
      (e.callbackNode = null),
      2
    );
  }
  function Fm(e, t) {
    if (et !== 0 && et !== 5)
      return ((e.callbackNode = null), (e.callbackPriority = 0), null);
    var n = e.callbackNode;
    if (Ci() && e.callbackNode !== n) return null;
    var a = we;
    return (
      (a = Hs(
        e,
        e === ze ? a : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
      )),
      a === 0
        ? null
        : (Mm(e, a, t),
          Pm(e, Vt()),
          e.callbackNode != null && e.callbackNode === n
            ? Fm.bind(null, e)
            : null)
    );
  }
  function Jm(e, t) {
    if (Ci()) return null;
    Mm(e, t, !0);
  }
  function yg() {
    Tg(function () {
      (Te & 6) !== 0 ? jt(Hu, xg) : Km();
    });
  }
  function xc() {
    return (Nl === 0 && (Nl = qu()), Nl);
  }
  function $m(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean"
      ? null
      : typeof e == "function"
        ? e
        : Xs("" + e);
  }
  function Wm(e, t) {
    var n = t.ownerDocument.createElement("input");
    return (
      (n.name = t.name),
      (n.value = t.value),
      e.id && n.setAttribute("form", e.id),
      t.parentNode.insertBefore(n, t),
      (e = new FormData(e)),
      n.parentNode.removeChild(n),
      e
    );
  }
  function gg(e, t, n, a, i) {
    if (t === "submit" && n && n.stateNode === i) {
      var o = $m((i[rt] || null).action),
        m = a.submitter;
      m &&
        ((t = (t = m[rt] || null)
          ? $m(t.formAction)
          : m.getAttribute("formAction")),
        t !== null && ((o = t), (m = null)));
      var x = new Zs("action", "action", null, a, i);
      e.push({
        event: x,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (a.defaultPrevented) {
                if (Nl !== 0) {
                  var S = m ? Wm(i, m) : new FormData(i);
                  ko(
                    n,
                    { pending: !0, data: S, method: i.method, action: o },
                    null,
                    S,
                  );
                }
              } else
                typeof o == "function" &&
                  (x.preventDefault(),
                  (S = m ? Wm(i, m) : new FormData(i)),
                  ko(
                    n,
                    { pending: !0, data: S, method: i.method, action: o },
                    o,
                    S,
                  ));
            },
            currentTarget: i,
          },
        ],
      });
    }
  }
  for (var yc = 0; yc < eo.length; yc++) {
    var gc = eo[yc],
      vg = gc.toLowerCase(),
      bg = gc[0].toUpperCase() + gc.slice(1);
    kt(vg, "on" + bg);
  }
  (kt(Mf, "onAnimationEnd"),
    kt(_f, "onAnimationIteration"),
    kt(Df, "onAnimationStart"),
    kt("dblclick", "onDoubleClick"),
    kt("focusin", "onFocus"),
    kt("focusout", "onBlur"),
    kt(Hy, "onTransitionRun"),
    kt(Ly, "onTransitionStart"),
    kt(By, "onTransitionCancel"),
    kt(zf, "onTransitionEnd"),
    zl("onMouseEnter", ["mouseout", "mouseover"]),
    zl("onMouseLeave", ["mouseout", "mouseover"]),
    zl("onPointerEnter", ["pointerout", "pointerover"]),
    zl("onPointerLeave", ["pointerout", "pointerover"]),
    rl(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    rl(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    rl("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    rl(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    rl(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    rl(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var os =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    wg = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(os),
    );
  function Im(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var a = e[n],
        i = a.event;
      a = a.listeners;
      e: {
        var o = void 0;
        if (t)
          for (var m = a.length - 1; 0 <= m; m--) {
            var x = a[m],
              S = x.instance,
              R = x.currentTarget;
            if (((x = x.listener), S !== o && i.isPropagationStopped()))
              break e;
            ((o = x), (i.currentTarget = R));
            try {
              o(i);
            } catch (k) {
              gi(k);
            }
            ((i.currentTarget = null), (o = S));
          }
        else
          for (m = 0; m < a.length; m++) {
            if (
              ((x = a[m]),
              (S = x.instance),
              (R = x.currentTarget),
              (x = x.listener),
              S !== o && i.isPropagationStopped())
            )
              break e;
            ((o = x), (i.currentTarget = R));
            try {
              o(i);
            } catch (k) {
              gi(k);
            }
            ((i.currentTarget = null), (o = S));
          }
      }
    }
  }
  function ve(e, t) {
    var n = t[Rr];
    n === void 0 && (n = t[Rr] = new Set());
    var a = e + "__bubble";
    n.has(a) || (eh(t, e, 2, !1), n.add(a));
  }
  function vc(e, t, n) {
    var a = 0;
    (t && (a |= 4), eh(n, e, a, t));
  }
  var _i = "_reactListening" + Math.random().toString(36).slice(2);
  function bc(e) {
    if (!e[_i]) {
      ((e[_i] = !0),
        Zu.forEach(function (n) {
          n !== "selectionchange" && (wg.has(n) || vc(n, !1, e), vc(n, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[_i] || ((t[_i] = !0), vc("selectionchange", !1, t));
    }
  }
  function eh(e, t, n, a) {
    switch (Eh(t)) {
      case 2:
        var i = Pg;
        break;
      case 8:
        i = Fg;
        break;
      default:
        i = zc;
    }
    ((n = i.bind(null, t, n, e)),
      (i = void 0),
      !Gr ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (i = !0),
      a
        ? i !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: i })
          : e.addEventListener(t, n, !0)
        : i !== void 0
          ? e.addEventListener(t, n, { passive: i })
          : e.addEventListener(t, n, !1));
  }
  function wc(e, t, n, a, i) {
    var o = a;
    if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
      e: for (;;) {
        if (a === null) return;
        var m = a.tag;
        if (m === 3 || m === 4) {
          var x = a.stateNode.containerInfo;
          if (x === i) break;
          if (m === 4)
            for (m = a.return; m !== null; ) {
              var S = m.tag;
              if ((S === 3 || S === 4) && m.stateNode.containerInfo === i)
                return;
              m = m.return;
            }
          for (; x !== null; ) {
            if (((m = Ml(x)), m === null)) return;
            if (((S = m.tag), S === 5 || S === 6 || S === 26 || S === 27)) {
              a = o = m;
              continue e;
            }
            x = x.parentNode;
          }
        }
        a = a.return;
      }
    rf(function () {
      var R = o,
        k = Br(n),
        L = [];
      e: {
        var D = Uf.get(e);
        if (D !== void 0) {
          var z = Zs,
            ue = e;
          switch (e) {
            case "keypress":
              if (Qs(n) === 0) break e;
            case "keydown":
            case "keyup":
              z = py;
              break;
            case "focusin":
              ((ue = "focus"), (z = Vr));
              break;
            case "focusout":
              ((ue = "blur"), (z = Vr));
              break;
            case "beforeblur":
            case "afterblur":
              z = Vr;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              z = uf;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              z = ly;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              z = gy;
              break;
            case Mf:
            case _f:
            case Df:
              z = iy;
              break;
            case zf:
              z = by;
              break;
            case "scroll":
            case "scrollend":
              z = ty;
              break;
            case "wheel":
              z = Sy;
              break;
            case "copy":
            case "cut":
            case "paste":
              z = oy;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              z = df;
              break;
            case "toggle":
            case "beforetoggle":
              z = Ey;
          }
          var ie = (t & 4) !== 0,
            Me = !ie && (e === "scroll" || e === "scrollend"),
            A = ie ? (D !== null ? D + "Capture" : null) : D;
          ie = [];
          for (var E = R, T; E !== null; ) {
            var H = E;
            if (
              ((T = H.stateNode),
              (H = H.tag),
              (H !== 5 && H !== 26 && H !== 27) ||
                T === null ||
                A === null ||
                ((H = Ta(E, A)), H != null && ie.push(cs(E, H, T))),
              Me)
            )
              break;
            E = E.return;
          }
          0 < ie.length &&
            ((D = new z(D, ue, null, n, k)),
            L.push({ event: D, listeners: ie }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((D = e === "mouseover" || e === "pointerover"),
            (z = e === "mouseout" || e === "pointerout"),
            D &&
              n !== Lr &&
              (ue = n.relatedTarget || n.fromElement) &&
              (Ml(ue) || ue[Rl]))
          )
            break e;
          if (
            (z || D) &&
            ((D =
              k.window === k
                ? k
                : (D = k.ownerDocument)
                  ? D.defaultView || D.parentWindow
                  : window),
            z
              ? ((ue = n.relatedTarget || n.toElement),
                (z = R),
                (ue = ue ? Ml(ue) : null),
                ue !== null &&
                  ((Me = d(ue)),
                  (ie = ue.tag),
                  ue !== Me || (ie !== 5 && ie !== 27 && ie !== 6)) &&
                  (ue = null))
              : ((z = null), (ue = R)),
            z !== ue)
          ) {
            if (
              ((ie = uf),
              (H = "onMouseLeave"),
              (A = "onMouseEnter"),
              (E = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((ie = df),
                (H = "onPointerLeave"),
                (A = "onPointerEnter"),
                (E = "pointer")),
              (Me = z == null ? D : Aa(z)),
              (T = ue == null ? D : Aa(ue)),
              (D = new ie(H, E + "leave", z, n, k)),
              (D.target = Me),
              (D.relatedTarget = T),
              (H = null),
              Ml(k) === R &&
                ((ie = new ie(A, E + "enter", ue, n, k)),
                (ie.target = T),
                (ie.relatedTarget = Me),
                (H = ie)),
              (Me = H),
              z && ue)
            )
              t: {
                for (ie = z, A = ue, E = 0, T = ie; T; T = fa(T)) E++;
                for (T = 0, H = A; H; H = fa(H)) T++;
                for (; 0 < E - T; ) ((ie = fa(ie)), E--);
                for (; 0 < T - E; ) ((A = fa(A)), T--);
                for (; E--; ) {
                  if (ie === A || (A !== null && ie === A.alternate)) break t;
                  ((ie = fa(ie)), (A = fa(A)));
                }
                ie = null;
              }
            else ie = null;
            (z !== null && th(L, D, z, ie, !1),
              ue !== null && Me !== null && th(L, Me, ue, ie, !0));
          }
        }
        e: {
          if (
            ((D = R ? Aa(R) : window),
            (z = D.nodeName && D.nodeName.toLowerCase()),
            z === "select" || (z === "input" && D.type === "file"))
          )
            var I = bf;
          else if (gf(D))
            if (wf) I = zy;
            else {
              I = _y;
              var xe = My;
            }
          else
            ((z = D.nodeName),
              !z ||
              z.toLowerCase() !== "input" ||
              (D.type !== "checkbox" && D.type !== "radio")
                ? R && Hr(R.elementType) && (I = bf)
                : (I = Dy));
          if (I && (I = I(e, R))) {
            vf(L, I, n, k);
            break e;
          }
          (xe && xe(e, D, R),
            e === "focusout" &&
              R &&
              D.type === "number" &&
              R.memoizedProps.value != null &&
              kr(D, "number", D.value));
        }
        switch (((xe = R ? Aa(R) : window), e)) {
          case "focusin":
            (gf(xe) || xe.contentEditable === "true") &&
              ((Gl = xe), ($r = R), (Ua = null));
            break;
          case "focusout":
            Ua = $r = Gl = null;
            break;
          case "mousedown":
            Wr = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((Wr = !1), Cf(L, n, k));
            break;
          case "selectionchange":
            if (ky) break;
          case "keydown":
          case "keyup":
            Cf(L, n, k);
        }
        var ae;
        if (Kr)
          e: {
            switch (e) {
              case "compositionstart":
                var oe = "onCompositionStart";
                break e;
              case "compositionend":
                oe = "onCompositionEnd";
                break e;
              case "compositionupdate":
                oe = "onCompositionUpdate";
                break e;
            }
            oe = void 0;
          }
        else
          ql
            ? xf(e, n) && (oe = "onCompositionEnd")
            : e === "keydown" &&
              n.keyCode === 229 &&
              (oe = "onCompositionStart");
        (oe &&
          (mf &&
            n.locale !== "ko" &&
            (ql || oe !== "onCompositionStart"
              ? oe === "onCompositionEnd" && ql && (ae = of())
              : ((An = k),
                (Xr = "value" in An ? An.value : An.textContent),
                (ql = !0))),
          (xe = Di(R, oe)),
          0 < xe.length &&
            ((oe = new ff(oe, e, null, n, k)),
            L.push({ event: oe, listeners: xe }),
            ae
              ? (oe.data = ae)
              : ((ae = yf(n)), ae !== null && (oe.data = ae)))),
          (ae = Ay ? Ty(e, n) : Oy(e, n)) &&
            ((oe = Di(R, "onBeforeInput")),
            0 < oe.length &&
              ((xe = new ff("onBeforeInput", "beforeinput", null, n, k)),
              L.push({ event: xe, listeners: oe }),
              (xe.data = ae))),
          gg(L, e, R, n, k));
      }
      Im(L, t);
    });
  }
  function cs(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Di(e, t) {
    for (var n = t + "Capture", a = []; e !== null; ) {
      var i = e,
        o = i.stateNode;
      if (
        ((i = i.tag),
        (i !== 5 && i !== 26 && i !== 27) ||
          o === null ||
          ((i = Ta(e, n)),
          i != null && a.unshift(cs(e, i, o)),
          (i = Ta(e, t)),
          i != null && a.push(cs(e, i, o))),
        e.tag === 3)
      )
        return a;
      e = e.return;
    }
    return [];
  }
  function fa(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function th(e, t, n, a, i) {
    for (var o = t._reactName, m = []; n !== null && n !== a; ) {
      var x = n,
        S = x.alternate,
        R = x.stateNode;
      if (((x = x.tag), S !== null && S === a)) break;
      ((x !== 5 && x !== 26 && x !== 27) ||
        R === null ||
        ((S = R),
        i
          ? ((R = Ta(n, o)), R != null && m.unshift(cs(n, R, S)))
          : i || ((R = Ta(n, o)), R != null && m.push(cs(n, R, S)))),
        (n = n.return));
    }
    m.length !== 0 && e.push({ event: t, listeners: m });
  }
  var Sg = /\r\n?/g,
    Ng = /\u0000|\uFFFD/g;
  function nh(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        Sg,
        `
`,
      )
      .replace(Ng, "");
  }
  function lh(e, t) {
    return ((t = nh(t)), nh(e) === t);
  }
  function zi() {}
  function Re(e, t, n, a, i, o) {
    switch (n) {
      case "children":
        typeof a == "string"
          ? t === "body" || (t === "textarea" && a === "") || Hl(e, a)
          : (typeof a == "number" || typeof a == "bigint") &&
            t !== "body" &&
            Hl(e, "" + a);
        break;
      case "className":
        Bs(e, "class", a);
        break;
      case "tabIndex":
        Bs(e, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Bs(e, n, a);
        break;
      case "style":
        af(e, a, o);
        break;
      case "data":
        if (t !== "object") {
          Bs(e, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (t !== "a" || n !== "href")) {
          e.removeAttribute(n);
          break;
        }
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "symbol" ||
          typeof a == "boolean"
        ) {
          e.removeAttribute(n);
          break;
        }
        ((a = Xs("" + a)), e.setAttribute(n, a));
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          e.setAttribute(
            n,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof o == "function" &&
            (n === "formAction"
              ? (t !== "input" && Re(e, t, "name", i.name, i, null),
                Re(e, t, "formEncType", i.formEncType, i, null),
                Re(e, t, "formMethod", i.formMethod, i, null),
                Re(e, t, "formTarget", i.formTarget, i, null))
              : (Re(e, t, "encType", i.encType, i, null),
                Re(e, t, "method", i.method, i, null),
                Re(e, t, "target", i.target, i, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          e.removeAttribute(n);
          break;
        }
        ((a = Xs("" + a)), e.setAttribute(n, a));
        break;
      case "onClick":
        a != null && (e.onclick = zi);
        break;
      case "onScroll":
        a != null && ve("scroll", e);
        break;
      case "onScrollEnd":
        a != null && ve("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(c(61));
          if (((n = a.__html), n != null)) {
            if (i.children != null) throw Error(c(60));
            e.innerHTML = n;
          }
        }
        break;
      case "multiple":
        e.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        e.muted = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "boolean" ||
          typeof a == "symbol"
        ) {
          e.removeAttribute("xlink:href");
          break;
        }
        ((n = Xs("" + a)),
          e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n));
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol"
          ? e.setAttribute(n, "" + a)
          : e.removeAttribute(n);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        a && typeof a != "function" && typeof a != "symbol"
          ? e.setAttribute(n, "")
          : e.removeAttribute(n);
        break;
      case "capture":
      case "download":
        a === !0
          ? e.setAttribute(n, "")
          : a !== !1 &&
              a != null &&
              typeof a != "function" &&
              typeof a != "symbol"
            ? e.setAttribute(n, a)
            : e.removeAttribute(n);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null &&
        typeof a != "function" &&
        typeof a != "symbol" &&
        !isNaN(a) &&
        1 <= a
          ? e.setAttribute(n, a)
          : e.removeAttribute(n);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a)
          ? e.removeAttribute(n)
          : e.setAttribute(n, a);
        break;
      case "popover":
        (ve("beforetoggle", e), ve("toggle", e), Ls(e, "popover", a));
        break;
      case "xlinkActuate":
        nn(e, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
        break;
      case "xlinkArcrole":
        nn(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
        break;
      case "xlinkRole":
        nn(e, "http://www.w3.org/1999/xlink", "xlink:role", a);
        break;
      case "xlinkShow":
        nn(e, "http://www.w3.org/1999/xlink", "xlink:show", a);
        break;
      case "xlinkTitle":
        nn(e, "http://www.w3.org/1999/xlink", "xlink:title", a);
        break;
      case "xlinkType":
        nn(e, "http://www.w3.org/1999/xlink", "xlink:type", a);
        break;
      case "xmlBase":
        nn(e, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
        break;
      case "xmlLang":
        nn(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
        break;
      case "xmlSpace":
        nn(e, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
        break;
      case "is":
        Ls(e, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < n.length) ||
          (n[0] !== "o" && n[0] !== "O") ||
          (n[1] !== "n" && n[1] !== "N")) &&
          ((n = Ix.get(n) || n), Ls(e, n, a));
    }
  }
  function Sc(e, t, n, a, i, o) {
    switch (n) {
      case "style":
        af(e, a, o);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(c(61));
          if (((n = a.__html), n != null)) {
            if (i.children != null) throw Error(c(60));
            e.innerHTML = n;
          }
        }
        break;
      case "children":
        typeof a == "string"
          ? Hl(e, a)
          : (typeof a == "number" || typeof a == "bigint") && Hl(e, "" + a);
        break;
      case "onScroll":
        a != null && ve("scroll", e);
        break;
      case "onScrollEnd":
        a != null && ve("scrollend", e);
        break;
      case "onClick":
        a != null && (e.onclick = zi);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Ku.hasOwnProperty(n))
          e: {
            if (
              n[0] === "o" &&
              n[1] === "n" &&
              ((i = n.endsWith("Capture")),
              (t = n.slice(2, i ? n.length - 7 : void 0)),
              (o = e[rt] || null),
              (o = o != null ? o[n] : null),
              typeof o == "function" && e.removeEventListener(t, o, i),
              typeof a == "function")
            ) {
              (typeof o != "function" &&
                o !== null &&
                (n in e
                  ? (e[n] = null)
                  : e.hasAttribute(n) && e.removeAttribute(n)),
                e.addEventListener(t, a, i));
              break e;
            }
            n in e
              ? (e[n] = a)
              : a === !0
                ? e.setAttribute(n, "")
                : Ls(e, n, a);
          }
    }
  }
  function tt(e, t, n) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        (ve("error", e), ve("load", e));
        var a = !1,
          i = !1,
          o;
        for (o in n)
          if (n.hasOwnProperty(o)) {
            var m = n[o];
            if (m != null)
              switch (o) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  i = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(c(137, t));
                default:
                  Re(e, t, o, m, n, null);
              }
          }
        (i && Re(e, t, "srcSet", n.srcSet, n, null),
          a && Re(e, t, "src", n.src, n, null));
        return;
      case "input":
        ve("invalid", e);
        var x = (o = m = i = null),
          S = null,
          R = null;
        for (a in n)
          if (n.hasOwnProperty(a)) {
            var k = n[a];
            if (k != null)
              switch (a) {
                case "name":
                  i = k;
                  break;
                case "type":
                  m = k;
                  break;
                case "checked":
                  S = k;
                  break;
                case "defaultChecked":
                  R = k;
                  break;
                case "value":
                  o = k;
                  break;
                case "defaultValue":
                  x = k;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (k != null) throw Error(c(137, t));
                  break;
                default:
                  Re(e, t, a, k, n, null);
              }
          }
        (ef(e, o, x, S, R, m, i, !1), qs(e));
        return;
      case "select":
        (ve("invalid", e), (a = m = o = null));
        for (i in n)
          if (n.hasOwnProperty(i) && ((x = n[i]), x != null))
            switch (i) {
              case "value":
                o = x;
                break;
              case "defaultValue":
                m = x;
                break;
              case "multiple":
                a = x;
              default:
                Re(e, t, i, x, n, null);
            }
        ((t = o),
          (n = m),
          (e.multiple = !!a),
          t != null ? kl(e, !!a, t, !1) : n != null && kl(e, !!a, n, !0));
        return;
      case "textarea":
        (ve("invalid", e), (o = i = a = null));
        for (m in n)
          if (n.hasOwnProperty(m) && ((x = n[m]), x != null))
            switch (m) {
              case "value":
                a = x;
                break;
              case "defaultValue":
                i = x;
                break;
              case "children":
                o = x;
                break;
              case "dangerouslySetInnerHTML":
                if (x != null) throw Error(c(91));
                break;
              default:
                Re(e, t, m, x, n, null);
            }
        (nf(e, a, i, o), qs(e));
        return;
      case "option":
        for (S in n)
          n.hasOwnProperty(S) &&
            ((a = n[S]), a != null) &&
            (S === "selected"
              ? (e.selected =
                  a && typeof a != "function" && typeof a != "symbol")
              : Re(e, t, S, a, n, null));
        return;
      case "dialog":
        (ve("beforetoggle", e),
          ve("toggle", e),
          ve("cancel", e),
          ve("close", e));
        break;
      case "iframe":
      case "object":
        ve("load", e);
        break;
      case "video":
      case "audio":
        for (a = 0; a < os.length; a++) ve(os[a], e);
        break;
      case "image":
        (ve("error", e), ve("load", e));
        break;
      case "details":
        ve("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        (ve("error", e), ve("load", e));
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (R in n)
          if (n.hasOwnProperty(R) && ((a = n[R]), a != null))
            switch (R) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(c(137, t));
              default:
                Re(e, t, R, a, n, null);
            }
        return;
      default:
        if (Hr(t)) {
          for (k in n)
            n.hasOwnProperty(k) &&
              ((a = n[k]), a !== void 0 && Sc(e, t, k, a, n, void 0));
          return;
        }
    }
    for (x in n)
      n.hasOwnProperty(x) && ((a = n[x]), a != null && Re(e, t, x, a, n, null));
  }
  function Eg(e, t, n, a) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var i = null,
          o = null,
          m = null,
          x = null,
          S = null,
          R = null,
          k = null;
        for (z in n) {
          var L = n[z];
          if (n.hasOwnProperty(z) && L != null)
            switch (z) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                S = L;
              default:
                a.hasOwnProperty(z) || Re(e, t, z, null, a, L);
            }
        }
        for (var D in a) {
          var z = a[D];
          if (((L = n[D]), a.hasOwnProperty(D) && (z != null || L != null)))
            switch (D) {
              case "type":
                o = z;
                break;
              case "name":
                i = z;
                break;
              case "checked":
                R = z;
                break;
              case "defaultChecked":
                k = z;
                break;
              case "value":
                m = z;
                break;
              case "defaultValue":
                x = z;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (z != null) throw Error(c(137, t));
                break;
              default:
                z !== L && Re(e, t, D, z, a, L);
            }
        }
        Ur(e, m, x, S, R, k, o, i);
        return;
      case "select":
        z = m = x = D = null;
        for (o in n)
          if (((S = n[o]), n.hasOwnProperty(o) && S != null))
            switch (o) {
              case "value":
                break;
              case "multiple":
                z = S;
              default:
                a.hasOwnProperty(o) || Re(e, t, o, null, a, S);
            }
        for (i in a)
          if (
            ((o = a[i]),
            (S = n[i]),
            a.hasOwnProperty(i) && (o != null || S != null))
          )
            switch (i) {
              case "value":
                D = o;
                break;
              case "defaultValue":
                x = o;
                break;
              case "multiple":
                m = o;
              default:
                o !== S && Re(e, t, i, o, a, S);
            }
        ((t = x),
          (n = m),
          (a = z),
          D != null
            ? kl(e, !!n, D, !1)
            : !!a != !!n &&
              (t != null ? kl(e, !!n, t, !0) : kl(e, !!n, n ? [] : "", !1)));
        return;
      case "textarea":
        z = D = null;
        for (x in n)
          if (
            ((i = n[x]),
            n.hasOwnProperty(x) && i != null && !a.hasOwnProperty(x))
          )
            switch (x) {
              case "value":
                break;
              case "children":
                break;
              default:
                Re(e, t, x, null, a, i);
            }
        for (m in a)
          if (
            ((i = a[m]),
            (o = n[m]),
            a.hasOwnProperty(m) && (i != null || o != null))
          )
            switch (m) {
              case "value":
                D = i;
                break;
              case "defaultValue":
                z = i;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (i != null) throw Error(c(91));
                break;
              default:
                i !== o && Re(e, t, m, i, a, o);
            }
        tf(e, D, z);
        return;
      case "option":
        for (var ue in n)
          ((D = n[ue]),
            n.hasOwnProperty(ue) &&
              D != null &&
              !a.hasOwnProperty(ue) &&
              (ue === "selected"
                ? (e.selected = !1)
                : Re(e, t, ue, null, a, D)));
        for (S in a)
          ((D = a[S]),
            (z = n[S]),
            a.hasOwnProperty(S) &&
              D !== z &&
              (D != null || z != null) &&
              (S === "selected"
                ? (e.selected =
                    D && typeof D != "function" && typeof D != "symbol")
                : Re(e, t, S, D, a, z)));
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var ie in n)
          ((D = n[ie]),
            n.hasOwnProperty(ie) &&
              D != null &&
              !a.hasOwnProperty(ie) &&
              Re(e, t, ie, null, a, D));
        for (R in a)
          if (
            ((D = a[R]),
            (z = n[R]),
            a.hasOwnProperty(R) && D !== z && (D != null || z != null))
          )
            switch (R) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (D != null) throw Error(c(137, t));
                break;
              default:
                Re(e, t, R, D, a, z);
            }
        return;
      default:
        if (Hr(t)) {
          for (var Me in n)
            ((D = n[Me]),
              n.hasOwnProperty(Me) &&
                D !== void 0 &&
                !a.hasOwnProperty(Me) &&
                Sc(e, t, Me, void 0, a, D));
          for (k in a)
            ((D = a[k]),
              (z = n[k]),
              !a.hasOwnProperty(k) ||
                D === z ||
                (D === void 0 && z === void 0) ||
                Sc(e, t, k, D, a, z));
          return;
        }
    }
    for (var A in n)
      ((D = n[A]),
        n.hasOwnProperty(A) &&
          D != null &&
          !a.hasOwnProperty(A) &&
          Re(e, t, A, null, a, D));
    for (L in a)
      ((D = a[L]),
        (z = n[L]),
        !a.hasOwnProperty(L) ||
          D === z ||
          (D == null && z == null) ||
          Re(e, t, L, D, a, z));
  }
  var Nc = null,
    Ec = null;
  function Ui(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function ah(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function sh(e, t) {
    if (e === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && t === "foreignObject" ? 0 : e;
  }
  function jc(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      typeof t.children == "bigint" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Ac = null;
  function jg() {
    var e = window.event;
    return e && e.type === "popstate"
      ? e === Ac
        ? !1
        : ((Ac = e), !0)
      : ((Ac = null), !1);
  }
  var ih = typeof setTimeout == "function" ? setTimeout : void 0,
    Ag = typeof clearTimeout == "function" ? clearTimeout : void 0,
    rh = typeof Promise == "function" ? Promise : void 0,
    Tg =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof rh < "u"
          ? function (e) {
              return rh.resolve(null).then(e).catch(Og);
            }
          : ih;
  function Og(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Xn(e) {
    return e === "head";
  }
  function oh(e, t) {
    var n = t,
      a = 0,
      i = 0;
    do {
      var o = n.nextSibling;
      if ((e.removeChild(n), o && o.nodeType === 8))
        if (((n = o.data), n === "/$")) {
          if (0 < a && 8 > a) {
            n = a;
            var m = e.ownerDocument;
            if ((n & 1 && us(m.documentElement), n & 2 && us(m.body), n & 4))
              for (n = m.head, us(n), m = n.firstChild; m; ) {
                var x = m.nextSibling,
                  S = m.nodeName;
                (m[ja] ||
                  S === "SCRIPT" ||
                  S === "STYLE" ||
                  (S === "LINK" && m.rel.toLowerCase() === "stylesheet") ||
                  n.removeChild(m),
                  (m = x));
              }
          }
          if (i === 0) {
            (e.removeChild(o), gs(t));
            return;
          }
          i--;
        } else
          n === "$" || n === "$?" || n === "$!"
            ? i++
            : (a = n.charCodeAt(0) - 48);
      else a = 0;
      n = o;
    } while (n);
    gs(t);
  }
  function Tc(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var n = t;
      switch (((t = t.nextSibling), n.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          (Tc(n), Mr(n));
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (n.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(n);
    }
  }
  function Cg(e, t, n, a) {
    for (; e.nodeType === 1; ) {
      var i = n;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!a && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
      } else if (a) {
        if (!e[ja])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (
                ((o = e.getAttribute("rel")),
                o === "stylesheet" && e.hasAttribute("data-precedence"))
              )
                break;
              if (
                o !== i.rel ||
                e.getAttribute("href") !==
                  (i.href == null || i.href === "" ? null : i.href) ||
                e.getAttribute("crossorigin") !==
                  (i.crossOrigin == null ? null : i.crossOrigin) ||
                e.getAttribute("title") !== (i.title == null ? null : i.title)
              )
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (
                ((o = e.getAttribute("src")),
                (o !== (i.src == null ? null : i.src) ||
                  e.getAttribute("type") !== (i.type == null ? null : i.type) ||
                  e.getAttribute("crossorigin") !==
                    (i.crossOrigin == null ? null : i.crossOrigin)) &&
                  o &&
                  e.hasAttribute("async") &&
                  !e.hasAttribute("itemprop"))
              )
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var o = i.name == null ? null : "" + i.name;
        if (i.type === "hidden" && e.getAttribute("name") === o) return e;
      } else return e;
      if (((e = Lt(e.nextSibling)), e === null)) break;
    }
    return null;
  }
  function Rg(e, t, n) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") &&
          !n) ||
        ((e = Lt(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function Oc(e) {
    return (
      e.data === "$!" ||
      (e.data === "$?" && e.ownerDocument.readyState === "complete")
    );
  }
  function Mg(e, t) {
    var n = e.ownerDocument;
    if (e.data !== "$?" || n.readyState === "complete") t();
    else {
      var a = function () {
        (t(), n.removeEventListener("DOMContentLoaded", a));
      };
      (n.addEventListener("DOMContentLoaded", a), (e._reactRetry = a));
    }
  }
  function Lt(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (
          ((t = e.data),
          t === "$" || t === "$!" || t === "$?" || t === "F!" || t === "F")
        )
          break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  var Cc = null;
  function ch(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (t === 0) return e;
          t--;
        } else n === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function uh(e, t, n) {
    switch (((t = Ui(n)), e)) {
      case "html":
        if (((e = t.documentElement), !e)) throw Error(c(452));
        return e;
      case "head":
        if (((e = t.head), !e)) throw Error(c(453));
        return e;
      case "body":
        if (((e = t.body), !e)) throw Error(c(454));
        return e;
      default:
        throw Error(c(451));
    }
  }
  function us(e) {
    for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
    Mr(e);
  }
  var zt = new Map(),
    fh = new Set();
  function ki(e) {
    return typeof e.getRootNode == "function"
      ? e.getRootNode()
      : e.nodeType === 9
        ? e
        : e.ownerDocument;
  }
  var yn = G.d;
  G.d = { f: _g, r: Dg, D: zg, C: Ug, L: kg, m: Hg, X: Bg, S: Lg, M: qg };
  function _g() {
    var e = yn.f(),
      t = Ti();
    return e || t;
  }
  function Dg(e) {
    var t = _l(e);
    t !== null && t.tag === 5 && t.type === "form" ? Md(t) : yn.r(e);
  }
  var da = typeof document > "u" ? null : document;
  function dh(e, t, n) {
    var a = da;
    if (a && typeof t == "string" && t) {
      var i = Tt(t);
      ((i = 'link[rel="' + e + '"][href="' + i + '"]'),
        typeof n == "string" && (i += '[crossorigin="' + n + '"]'),
        fh.has(i) ||
          (fh.add(i),
          (e = { rel: e, crossOrigin: n, href: t }),
          a.querySelector(i) === null &&
            ((t = a.createElement("link")),
            tt(t, "link", e),
            Fe(t),
            a.head.appendChild(t))));
    }
  }
  function zg(e) {
    (yn.D(e), dh("dns-prefetch", e, null));
  }
  function Ug(e, t) {
    (yn.C(e, t), dh("preconnect", e, t));
  }
  function kg(e, t, n) {
    yn.L(e, t, n);
    var a = da;
    if (a && e && t) {
      var i = 'link[rel="preload"][as="' + Tt(t) + '"]';
      t === "image" && n && n.imageSrcSet
        ? ((i += '[imagesrcset="' + Tt(n.imageSrcSet) + '"]'),
          typeof n.imageSizes == "string" &&
            (i += '[imagesizes="' + Tt(n.imageSizes) + '"]'))
        : (i += '[href="' + Tt(e) + '"]');
      var o = i;
      switch (t) {
        case "style":
          o = ma(e);
          break;
        case "script":
          o = ha(e);
      }
      zt.has(o) ||
        ((e = g(
          {
            rel: "preload",
            href: t === "image" && n && n.imageSrcSet ? void 0 : e,
            as: t,
          },
          n,
        )),
        zt.set(o, e),
        a.querySelector(i) !== null ||
          (t === "style" && a.querySelector(fs(o))) ||
          (t === "script" && a.querySelector(ds(o))) ||
          ((t = a.createElement("link")),
          tt(t, "link", e),
          Fe(t),
          a.head.appendChild(t)));
    }
  }
  function Hg(e, t) {
    yn.m(e, t);
    var n = da;
    if (n && e) {
      var a = t && typeof t.as == "string" ? t.as : "script",
        i =
          'link[rel="modulepreload"][as="' + Tt(a) + '"][href="' + Tt(e) + '"]',
        o = i;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          o = ha(e);
      }
      if (
        !zt.has(o) &&
        ((e = g({ rel: "modulepreload", href: e }, t)),
        zt.set(o, e),
        n.querySelector(i) === null)
      ) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(ds(o))) return;
        }
        ((a = n.createElement("link")),
          tt(a, "link", e),
          Fe(a),
          n.head.appendChild(a));
      }
    }
  }
  function Lg(e, t, n) {
    yn.S(e, t, n);
    var a = da;
    if (a && e) {
      var i = Dl(a).hoistableStyles,
        o = ma(e);
      t = t || "default";
      var m = i.get(o);
      if (!m) {
        var x = { loading: 0, preload: null };
        if ((m = a.querySelector(fs(o)))) x.loading = 5;
        else {
          ((e = g({ rel: "stylesheet", href: e, "data-precedence": t }, n)),
            (n = zt.get(o)) && Rc(e, n));
          var S = (m = a.createElement("link"));
          (Fe(S),
            tt(S, "link", e),
            (S._p = new Promise(function (R, k) {
              ((S.onload = R), (S.onerror = k));
            })),
            S.addEventListener("load", function () {
              x.loading |= 1;
            }),
            S.addEventListener("error", function () {
              x.loading |= 2;
            }),
            (x.loading |= 4),
            Hi(m, t, a));
        }
        ((m = { type: "stylesheet", instance: m, count: 1, state: x }),
          i.set(o, m));
      }
    }
  }
  function Bg(e, t) {
    yn.X(e, t);
    var n = da;
    if (n && e) {
      var a = Dl(n).hoistableScripts,
        i = ha(e),
        o = a.get(i);
      o ||
        ((o = n.querySelector(ds(i))),
        o ||
          ((e = g({ src: e, async: !0 }, t)),
          (t = zt.get(i)) && Mc(e, t),
          (o = n.createElement("script")),
          Fe(o),
          tt(o, "link", e),
          n.head.appendChild(o)),
        (o = { type: "script", instance: o, count: 1, state: null }),
        a.set(i, o));
    }
  }
  function qg(e, t) {
    yn.M(e, t);
    var n = da;
    if (n && e) {
      var a = Dl(n).hoistableScripts,
        i = ha(e),
        o = a.get(i);
      o ||
        ((o = n.querySelector(ds(i))),
        o ||
          ((e = g({ src: e, async: !0, type: "module" }, t)),
          (t = zt.get(i)) && Mc(e, t),
          (o = n.createElement("script")),
          Fe(o),
          tt(o, "link", e),
          n.head.appendChild(o)),
        (o = { type: "script", instance: o, count: 1, state: null }),
        a.set(i, o));
    }
  }
  function mh(e, t, n, a) {
    var i = (i = ne.current) ? ki(i) : null;
    if (!i) throw Error(c(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string"
          ? ((t = ma(n.href)),
            (n = Dl(i).hoistableStyles),
            (a = n.get(t)),
            a ||
              ((a = { type: "style", instance: null, count: 0, state: null }),
              n.set(t, a)),
            a)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          n.rel === "stylesheet" &&
          typeof n.href == "string" &&
          typeof n.precedence == "string"
        ) {
          e = ma(n.href);
          var o = Dl(i).hoistableStyles,
            m = o.get(e);
          if (
            (m ||
              ((i = i.ownerDocument || i),
              (m = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              o.set(e, m),
              (o = i.querySelector(fs(e))) &&
                !o._p &&
                ((m.instance = o), (m.state.loading = 5)),
              zt.has(e) ||
                ((n = {
                  rel: "preload",
                  as: "style",
                  href: n.href,
                  crossOrigin: n.crossOrigin,
                  integrity: n.integrity,
                  media: n.media,
                  hrefLang: n.hrefLang,
                  referrerPolicy: n.referrerPolicy,
                }),
                zt.set(e, n),
                o || Gg(i, e, n, m.state))),
            t && a === null)
          )
            throw Error(c(528, ""));
          return m;
        }
        if (t && a !== null) throw Error(c(529, ""));
        return null;
      case "script":
        return (
          (t = n.async),
          (n = n.src),
          typeof n == "string" &&
          t &&
          typeof t != "function" &&
          typeof t != "symbol"
            ? ((t = ha(n)),
              (n = Dl(i).hoistableScripts),
              (a = n.get(t)),
              a ||
                ((a = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                n.set(t, a)),
              a)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(c(444, e));
    }
  }
  function ma(e) {
    return 'href="' + Tt(e) + '"';
  }
  function fs(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function hh(e) {
    return g({}, e, { "data-precedence": e.precedence, precedence: null });
  }
  function Gg(e, t, n, a) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]")
      ? (a.loading = 1)
      : ((t = e.createElement("link")),
        (a.preload = t),
        t.addEventListener("load", function () {
          return (a.loading |= 1);
        }),
        t.addEventListener("error", function () {
          return (a.loading |= 2);
        }),
        tt(t, "link", n),
        Fe(t),
        e.head.appendChild(t));
  }
  function ha(e) {
    return '[src="' + Tt(e) + '"]';
  }
  function ds(e) {
    return "script[async]" + e;
  }
  function ph(e, t, n) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case "style":
          var a = e.querySelector('style[data-href~="' + Tt(n.href) + '"]');
          if (a) return ((t.instance = a), Fe(a), a);
          var i = g({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null,
          });
          return (
            (a = (e.ownerDocument || e).createElement("style")),
            Fe(a),
            tt(a, "style", i),
            Hi(a, n.precedence, e),
            (t.instance = a)
          );
        case "stylesheet":
          i = ma(n.href);
          var o = e.querySelector(fs(i));
          if (o) return ((t.state.loading |= 4), (t.instance = o), Fe(o), o);
          ((a = hh(n)),
            (i = zt.get(i)) && Rc(a, i),
            (o = (e.ownerDocument || e).createElement("link")),
            Fe(o));
          var m = o;
          return (
            (m._p = new Promise(function (x, S) {
              ((m.onload = x), (m.onerror = S));
            })),
            tt(o, "link", a),
            (t.state.loading |= 4),
            Hi(o, n.precedence, e),
            (t.instance = o)
          );
        case "script":
          return (
            (o = ha(n.src)),
            (i = e.querySelector(ds(o)))
              ? ((t.instance = i), Fe(i), i)
              : ((a = n),
                (i = zt.get(o)) && ((a = g({}, n)), Mc(a, i)),
                (e = e.ownerDocument || e),
                (i = e.createElement("script")),
                Fe(i),
                tt(i, "link", a),
                e.head.appendChild(i),
                (t.instance = i))
          );
        case "void":
          return null;
        default:
          throw Error(c(443, t.type));
      }
    else
      t.type === "stylesheet" &&
        (t.state.loading & 4) === 0 &&
        ((a = t.instance), (t.state.loading |= 4), Hi(a, n.precedence, e));
    return t.instance;
  }
  function Hi(e, t, n) {
    for (
      var a = n.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]',
        ),
        i = a.length ? a[a.length - 1] : null,
        o = i,
        m = 0;
      m < a.length;
      m++
    ) {
      var x = a[m];
      if (x.dataset.precedence === t) o = x;
      else if (o !== i) break;
    }
    o
      ? o.parentNode.insertBefore(e, o.nextSibling)
      : ((t = n.nodeType === 9 ? n.head : n), t.insertBefore(e, t.firstChild));
  }
  function Rc(e, t) {
    (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.title == null && (e.title = t.title));
  }
  function Mc(e, t) {
    (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.integrity == null && (e.integrity = t.integrity));
  }
  var Li = null;
  function xh(e, t, n) {
    if (Li === null) {
      var a = new Map(),
        i = (Li = new Map());
      i.set(n, a);
    } else ((i = Li), (a = i.get(n)), a || ((a = new Map()), i.set(n, a)));
    if (a.has(e)) return a;
    for (
      a.set(e, null), n = n.getElementsByTagName(e), i = 0;
      i < n.length;
      i++
    ) {
      var o = n[i];
      if (
        !(
          o[ja] ||
          o[nt] ||
          (e === "link" && o.getAttribute("rel") === "stylesheet")
        ) &&
        o.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var m = o.getAttribute(t) || "";
        m = e + m;
        var x = a.get(m);
        x ? x.push(o) : a.set(m, [o]);
      }
    }
    return a;
  }
  function yh(e, t, n) {
    ((e = e.ownerDocument || e),
      e.head.insertBefore(
        n,
        t === "title" ? e.querySelector("head > title") : null,
      ));
  }
  function Xg(e, t, n) {
    if (n === 1 || t.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof t.precedence != "string" ||
          typeof t.href != "string" ||
          t.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof t.rel != "string" ||
          typeof t.href != "string" ||
          t.href === "" ||
          t.onLoad ||
          t.onError
        )
          break;
        return t.rel === "stylesheet"
          ? ((e = t.disabled), typeof t.precedence == "string" && e == null)
          : !0;
      case "script":
        if (
          t.async &&
          typeof t.async != "function" &&
          typeof t.async != "symbol" &&
          !t.onLoad &&
          !t.onError &&
          t.src &&
          typeof t.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function gh(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  var ms = null;
  function Yg() {}
  function Qg(e, t, n) {
    if (ms === null) throw Error(c(475));
    var a = ms;
    if (
      t.type === "stylesheet" &&
      (typeof n.media != "string" || matchMedia(n.media).matches !== !1) &&
      (t.state.loading & 4) === 0
    ) {
      if (t.instance === null) {
        var i = ma(n.href),
          o = e.querySelector(fs(i));
        if (o) {
          ((e = o._p),
            e !== null &&
              typeof e == "object" &&
              typeof e.then == "function" &&
              (a.count++, (a = Bi.bind(a)), e.then(a, a)),
            (t.state.loading |= 4),
            (t.instance = o),
            Fe(o));
          return;
        }
        ((o = e.ownerDocument || e),
          (n = hh(n)),
          (i = zt.get(i)) && Rc(n, i),
          (o = o.createElement("link")),
          Fe(o));
        var m = o;
        ((m._p = new Promise(function (x, S) {
          ((m.onload = x), (m.onerror = S));
        })),
          tt(o, "link", n),
          (t.instance = o));
      }
      (a.stylesheets === null && (a.stylesheets = new Map()),
        a.stylesheets.set(t, e),
        (e = t.state.preload) &&
          (t.state.loading & 3) === 0 &&
          (a.count++,
          (t = Bi.bind(a)),
          e.addEventListener("load", t),
          e.addEventListener("error", t)));
    }
  }
  function Vg() {
    if (ms === null) throw Error(c(475));
    var e = ms;
    return (
      e.stylesheets && e.count === 0 && _c(e, e.stylesheets),
      0 < e.count
        ? function (t) {
            var n = setTimeout(function () {
              if ((e.stylesheets && _c(e, e.stylesheets), e.unsuspend)) {
                var a = e.unsuspend;
                ((e.unsuspend = null), a());
              }
            }, 6e4);
            return (
              (e.unsuspend = t),
              function () {
                ((e.unsuspend = null), clearTimeout(n));
              }
            );
          }
        : null
    );
  }
  function Bi() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) _c(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        ((this.unsuspend = null), e());
      }
    }
  }
  var qi = null;
  function _c(e, t) {
    ((e.stylesheets = null),
      e.unsuspend !== null &&
        (e.count++,
        (qi = new Map()),
        t.forEach(Zg, e),
        (qi = null),
        Bi.call(e)));
  }
  function Zg(e, t) {
    if (!(t.state.loading & 4)) {
      var n = qi.get(e);
      if (n) var a = n.get(null);
      else {
        ((n = new Map()), qi.set(e, n));
        for (
          var i = e.querySelectorAll(
              "link[data-precedence],style[data-precedence]",
            ),
            o = 0;
          o < i.length;
          o++
        ) {
          var m = i[o];
          (m.nodeName === "LINK" || m.getAttribute("media") !== "not all") &&
            (n.set(m.dataset.precedence, m), (a = m));
        }
        a && n.set(null, a);
      }
      ((i = t.instance),
        (m = i.getAttribute("data-precedence")),
        (o = n.get(m) || a),
        o === a && n.set(null, i),
        n.set(m, i),
        this.count++,
        (a = Bi.bind(this)),
        i.addEventListener("load", a),
        i.addEventListener("error", a),
        o
          ? o.parentNode.insertBefore(i, o.nextSibling)
          : ((e = e.nodeType === 9 ? e.head : e),
            e.insertBefore(i, e.firstChild)),
        (t.state.loading |= 4));
    }
  }
  var hs = {
    $$typeof: X,
    Provider: null,
    Consumer: null,
    _currentValue: V,
    _currentValue2: V,
    _threadCount: 0,
  };
  function Kg(e, t, n, a, i, o, m, x) {
    ((this.tag = 1),
      (this.containerInfo = e),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = Tr(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Tr(0)),
      (this.hiddenUpdates = Tr(null)),
      (this.identifierPrefix = a),
      (this.onUncaughtError = i),
      (this.onCaughtError = o),
      (this.onRecoverableError = m),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = x),
      (this.incompleteTransitions = new Map()));
  }
  function vh(e, t, n, a, i, o, m, x, S, R, k, L) {
    return (
      (e = new Kg(e, t, n, m, x, S, R, L)),
      (t = 1),
      o === !0 && (t |= 24),
      (o = yt(3, null, null, t)),
      (e.current = o),
      (o.stateNode = e),
      (t = mo()),
      t.refCount++,
      (e.pooledCache = t),
      t.refCount++,
      (o.memoizedState = { element: a, isDehydrated: n, cache: t }),
      yo(o),
      e
    );
  }
  function bh(e) {
    return e ? ((e = Vl), e) : Vl;
  }
  function wh(e, t, n, a, i, o) {
    ((i = bh(i)),
      a.context === null ? (a.context = i) : (a.pendingContext = i),
      (a = Cn(t)),
      (a.payload = { element: n }),
      (o = o === void 0 ? null : o),
      o !== null && (a.callback = o),
      (n = Rn(e, a, t)),
      n !== null && (St(n, e, t), Qa(n, e, t)));
  }
  function Sh(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Dc(e, t) {
    (Sh(e, t), (e = e.alternate) && Sh(e, t));
  }
  function Nh(e) {
    if (e.tag === 13) {
      var t = Ql(e, 67108864);
      (t !== null && St(t, e, 67108864), Dc(e, 67108864));
    }
  }
  var Gi = !0;
  function Pg(e, t, n, a) {
    var i = C.T;
    C.T = null;
    var o = G.p;
    try {
      ((G.p = 2), zc(e, t, n, a));
    } finally {
      ((G.p = o), (C.T = i));
    }
  }
  function Fg(e, t, n, a) {
    var i = C.T;
    C.T = null;
    var o = G.p;
    try {
      ((G.p = 8), zc(e, t, n, a));
    } finally {
      ((G.p = o), (C.T = i));
    }
  }
  function zc(e, t, n, a) {
    if (Gi) {
      var i = Uc(a);
      if (i === null) (wc(e, t, a, Xi, n), jh(e, a));
      else if ($g(i, e, t, n, a)) a.stopPropagation();
      else if ((jh(e, a), t & 4 && -1 < Jg.indexOf(e))) {
        for (; i !== null; ) {
          var o = _l(i);
          if (o !== null)
            switch (o.tag) {
              case 3:
                if (((o = o.stateNode), o.current.memoizedState.isDehydrated)) {
                  var m = il(o.pendingLanes);
                  if (m !== 0) {
                    var x = o;
                    for (x.pendingLanes |= 2, x.entangledLanes |= 2; m; ) {
                      var S = 1 << (31 - pt(m));
                      ((x.entanglements[1] |= S), (m &= ~S));
                    }
                    (Jt(o), (Te & 6) === 0 && ((ji = Vt() + 500), rs(0)));
                  }
                }
                break;
              case 13:
                ((x = Ql(o, 2)), x !== null && St(x, o, 2), Ti(), Dc(o, 2));
            }
          if (((o = Uc(a)), o === null && wc(e, t, a, Xi, n), o === i)) break;
          i = o;
        }
        i !== null && a.stopPropagation();
      } else wc(e, t, a, null, n);
    }
  }
  function Uc(e) {
    return ((e = Br(e)), kc(e));
  }
  var Xi = null;
  function kc(e) {
    if (((Xi = null), (e = Ml(e)), e !== null)) {
      var t = d(e);
      if (t === null) e = null;
      else {
        var n = t.tag;
        if (n === 13) {
          if (((e = p(t)), e !== null)) return e;
          e = null;
        } else if (n === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return ((Xi = e), null);
  }
  function Eh(e) {
    switch (e) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Ux()) {
          case Hu:
            return 2;
          case Lu:
            return 8;
          case zs:
          case kx:
            return 32;
          case Bu:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Hc = !1,
    Yn = null,
    Qn = null,
    Vn = null,
    ps = new Map(),
    xs = new Map(),
    Zn = [],
    Jg =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " ",
      );
  function jh(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Yn = null;
        break;
      case "dragenter":
      case "dragleave":
        Qn = null;
        break;
      case "mouseover":
      case "mouseout":
        Vn = null;
        break;
      case "pointerover":
      case "pointerout":
        ps.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        xs.delete(t.pointerId);
    }
  }
  function ys(e, t, n, a, i, o) {
    return e === null || e.nativeEvent !== o
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: a,
          nativeEvent: o,
          targetContainers: [i],
        }),
        t !== null && ((t = _l(t)), t !== null && Nh(t)),
        e)
      : ((e.eventSystemFlags |= a),
        (t = e.targetContainers),
        i !== null && t.indexOf(i) === -1 && t.push(i),
        e);
  }
  function $g(e, t, n, a, i) {
    switch (t) {
      case "focusin":
        return ((Yn = ys(Yn, e, t, n, a, i)), !0);
      case "dragenter":
        return ((Qn = ys(Qn, e, t, n, a, i)), !0);
      case "mouseover":
        return ((Vn = ys(Vn, e, t, n, a, i)), !0);
      case "pointerover":
        var o = i.pointerId;
        return (ps.set(o, ys(ps.get(o) || null, e, t, n, a, i)), !0);
      case "gotpointercapture":
        return (
          (o = i.pointerId),
          xs.set(o, ys(xs.get(o) || null, e, t, n, a, i)),
          !0
        );
    }
    return !1;
  }
  function Ah(e) {
    var t = Ml(e.target);
    if (t !== null) {
      var n = d(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = p(n)), t !== null)) {
            ((e.blockedOn = t),
              Qx(e.priority, function () {
                if (n.tag === 13) {
                  var a = wt();
                  a = Or(a);
                  var i = Ql(n, a);
                  (i !== null && St(i, n, a), Dc(n, a));
                }
              }));
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Yi(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Uc(e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var a = new n.constructor(n.type, n);
        ((Lr = a), n.target.dispatchEvent(a), (Lr = null));
      } else return ((t = _l(n)), t !== null && Nh(t), (e.blockedOn = n), !1);
      t.shift();
    }
    return !0;
  }
  function Th(e, t, n) {
    Yi(e) && n.delete(t);
  }
  function Wg() {
    ((Hc = !1),
      Yn !== null && Yi(Yn) && (Yn = null),
      Qn !== null && Yi(Qn) && (Qn = null),
      Vn !== null && Yi(Vn) && (Vn = null),
      ps.forEach(Th),
      xs.forEach(Th));
  }
  function Qi(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Hc ||
        ((Hc = !0),
        l.unstable_scheduleCallback(l.unstable_NormalPriority, Wg)));
  }
  var Vi = null;
  function Oh(e) {
    Vi !== e &&
      ((Vi = e),
      l.unstable_scheduleCallback(l.unstable_NormalPriority, function () {
        Vi === e && (Vi = null);
        for (var t = 0; t < e.length; t += 3) {
          var n = e[t],
            a = e[t + 1],
            i = e[t + 2];
          if (typeof a != "function") {
            if (kc(a || n) === null) continue;
            break;
          }
          var o = _l(n);
          o !== null &&
            (e.splice(t, 3),
            (t -= 3),
            ko(o, { pending: !0, data: i, method: n.method, action: a }, a, i));
        }
      }));
  }
  function gs(e) {
    function t(S) {
      return Qi(S, e);
    }
    (Yn !== null && Qi(Yn, e),
      Qn !== null && Qi(Qn, e),
      Vn !== null && Qi(Vn, e),
      ps.forEach(t),
      xs.forEach(t));
    for (var n = 0; n < Zn.length; n++) {
      var a = Zn[n];
      a.blockedOn === e && (a.blockedOn = null);
    }
    for (; 0 < Zn.length && ((n = Zn[0]), n.blockedOn === null); )
      (Ah(n), n.blockedOn === null && Zn.shift());
    if (((n = (e.ownerDocument || e).$$reactFormReplay), n != null))
      for (a = 0; a < n.length; a += 3) {
        var i = n[a],
          o = n[a + 1],
          m = i[rt] || null;
        if (typeof o == "function") m || Oh(n);
        else if (m) {
          var x = null;
          if (o && o.hasAttribute("formAction")) {
            if (((i = o), (m = o[rt] || null))) x = m.formAction;
            else if (kc(i) !== null) continue;
          } else x = m.action;
          (typeof x == "function" ? (n[a + 1] = x) : (n.splice(a, 3), (a -= 3)),
            Oh(n));
        }
      }
  }
  function Lc(e) {
    this._internalRoot = e;
  }
  ((Zi.prototype.render = Lc.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(c(409));
      var n = t.current,
        a = wt();
      wh(n, a, e, t, null, null);
    }),
    (Zi.prototype.unmount = Lc.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (wh(e.current, 2, null, e, null, null), Ti(), (t[Rl] = null));
        }
      }));
  function Zi(e) {
    this._internalRoot = e;
  }
  Zi.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Qu();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Zn.length && t !== 0 && t < Zn[n].priority; n++);
      (Zn.splice(n, 0, e), n === 0 && Ah(e));
    }
  };
  var Ch = s.version;
  if (Ch !== "19.1.0") throw Error(c(527, Ch, "19.1.0"));
  G.findDOMNode = function (e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function"
        ? Error(c(188))
        : ((e = Object.keys(e).join(",")), Error(c(268, e)));
    return (
      (e = v(t)),
      (e = e !== null ? h(e) : null),
      (e = e === null ? null : e.stateNode),
      e
    );
  };
  var Ig = {
    bundleType: 0,
    version: "19.1.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: C,
    reconcilerVersion: "19.1.0",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ki = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ki.isDisabled && Ki.supportsFiber)
      try {
        ((Sa = Ki.inject(Ig)), (ht = Ki));
      } catch {}
  }
  return (
    (bs.createRoot = function (e, t) {
      if (!f(e)) throw Error(c(299));
      var n = !1,
        a = "",
        i = Vd,
        o = Zd,
        m = Kd,
        x = null;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (a = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (i = t.onUncaughtError),
          t.onCaughtError !== void 0 && (o = t.onCaughtError),
          t.onRecoverableError !== void 0 && (m = t.onRecoverableError),
          t.unstable_transitionCallbacks !== void 0 &&
            (x = t.unstable_transitionCallbacks)),
        (t = vh(e, 1, !1, null, null, n, a, i, o, m, x, null)),
        (e[Rl] = t.current),
        bc(e),
        new Lc(t)
      );
    }),
    (bs.hydrateRoot = function (e, t, n) {
      if (!f(e)) throw Error(c(299));
      var a = !1,
        i = "",
        o = Vd,
        m = Zd,
        x = Kd,
        S = null,
        R = null;
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (a = !0),
          n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
          n.onUncaughtError !== void 0 && (o = n.onUncaughtError),
          n.onCaughtError !== void 0 && (m = n.onCaughtError),
          n.onRecoverableError !== void 0 && (x = n.onRecoverableError),
          n.unstable_transitionCallbacks !== void 0 &&
            (S = n.unstable_transitionCallbacks),
          n.formState !== void 0 && (R = n.formState)),
        (t = vh(e, 1, !0, t, n ?? null, a, i, o, m, x, S, R)),
        (t.context = bh(null)),
        (n = t.current),
        (a = wt()),
        (a = Or(a)),
        (i = Cn(a)),
        (i.callback = null),
        Rn(n, i, a),
        (n = a),
        (t.current.lanes = n),
        Ea(t, n),
        Jt(t),
        (e[Rl] = t.current),
        bc(e),
        new Zi(t)
      );
    }),
    (bs.version = "19.1.0"),
    bs
  );
}
var Bh;
function cv() {
  if (Bh) return qc.exports;
  Bh = 1;
  function l() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l);
      } catch (s) {
        console.error(s);
      }
  }
  return (l(), (qc.exports = ov()), qc.exports);
}
var uv = cv();
function fv(l, s) {
  if (l instanceof RegExp) return { keys: !1, pattern: l };
  var r,
    c,
    f,
    d,
    p = [],
    y = "",
    v = l.split("/");
  for (v[0] || v.shift(); (f = v.shift()); )
    ((r = f[0]),
      r === "*"
        ? (p.push(r), (y += f[1] === "?" ? "(?:/(.*))?" : "/(.*)"))
        : r === ":"
          ? ((c = f.indexOf("?", 1)),
            (d = f.indexOf(".", 1)),
            p.push(f.substring(1, ~c ? c : ~d ? d : f.length)),
            (y += ~c && !~d ? "(?:/([^/]+?))?" : "/([^/]+?)"),
            ~d && (y += (~c ? "?" : "") + "\\" + f.substring(d)))
          : (y += "/" + f));
  return {
    keys: p,
    pattern: new RegExp("^" + y + (s ? "(?=$|/)" : "/?$"), "i"),
  };
}
var w = dr();
const Wn = _0(w),
  hu = tv({ __proto__: null, default: Wn }, [w]);
var Vc = { exports: {} },
  Zc = {};
var qh;
function dv() {
  if (qh) return Zc;
  qh = 1;
  var l = dr();
  function s(N, j) {
    return (N === j && (N !== 0 || 1 / N === 1 / j)) || (N !== N && j !== j);
  }
  var r = typeof Object.is == "function" ? Object.is : s,
    c = l.useState,
    f = l.useEffect,
    d = l.useLayoutEffect,
    p = l.useDebugValue;
  function y(N, j) {
    var M = j(),
      U = c({ inst: { value: M, getSnapshot: j } }),
      O = U[0].inst,
      _ = U[1];
    return (
      d(
        function () {
          ((O.value = M), (O.getSnapshot = j), v(O) && _({ inst: O }));
        },
        [N, M, j],
      ),
      f(
        function () {
          return (
            v(O) && _({ inst: O }),
            N(function () {
              v(O) && _({ inst: O });
            })
          );
        },
        [N],
      ),
      p(M),
      M
    );
  }
  function v(N) {
    var j = N.getSnapshot;
    N = N.value;
    try {
      var M = j();
      return !r(N, M);
    } catch {
      return !0;
    }
  }
  function h(N, j) {
    return j();
  }
  var g =
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
      ? h
      : y;
  return (
    (Zc.useSyncExternalStore =
      l.useSyncExternalStore !== void 0 ? l.useSyncExternalStore : g),
    Zc
  );
}
var Gh;
function mv() {
  return (Gh || ((Gh = 1), (Vc.exports = dv())), Vc.exports);
}
var hv = mv();
const pv = hu.useInsertionEffect,
  xv =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  yv = xv ? w.useLayoutEffect : w.useEffect,
  gv = pv || yv,
  z0 = (l) => {
    const s = w.useRef([l, (...r) => s[0](...r)]).current;
    return (
      gv(() => {
        s[0] = l;
      }),
      s[1]
    );
  },
  vv = "popstate",
  pu = "pushState",
  xu = "replaceState",
  bv = "hashchange",
  Xh = [vv, pu, xu, bv],
  wv = (l) => {
    for (const s of Xh) addEventListener(s, l);
    return () => {
      for (const s of Xh) removeEventListener(s, l);
    };
  },
  U0 = (l, s) => hv.useSyncExternalStore(wv, l, s),
  Yh = () => location.search,
  Sv = ({ ssrSearch: l } = {}) => U0(Yh, l != null ? () => l : Yh),
  Qh = () => location.pathname,
  Nv = ({ ssrPath: l } = {}) => U0(Qh, l != null ? () => l : Qh),
  Ev = (l, { replace: s = !1, state: r = null } = {}) =>
    history[s ? xu : pu](r, "", l),
  jv = (l = {}) => [Nv(l), Ev],
  Vh = Symbol.for("wouter_v3");
if (typeof history < "u" && typeof window[Vh] > "u") {
  for (const l of [pu, xu]) {
    const s = history[l];
    history[l] = function () {
      const r = s.apply(this, arguments),
        c = new Event(l);
      return ((c.arguments = arguments), dispatchEvent(c), r);
    };
  }
  Object.defineProperty(window, Vh, { value: !0 });
}
const Av = (l, s) =>
    s.toLowerCase().indexOf(l.toLowerCase())
      ? "~" + s
      : s.slice(l.length) || "/",
  k0 = (l = "") => (l === "/" ? "" : l),
  Tv = (l, s) => (l[0] === "~" ? l.slice(1) : k0(s) + l),
  Ov = (l = "", s) => Av(Zh(k0(l)), Zh(s)),
  Zh = (l) => {
    try {
      return decodeURI(l);
    } catch {
      return l;
    }
  },
  H0 = {
    hook: jv,
    searchHook: Sv,
    parser: fv,
    base: "",
    ssrPath: void 0,
    ssrSearch: void 0,
    ssrContext: void 0,
    hrefs: (l) => l,
    aroundNav: (l, s, r) => l(s, r),
  },
  L0 = w.createContext(H0),
  Cs = () => w.useContext(L0),
  B0 = {},
  q0 = w.createContext(B0),
  Cv = () => w.useContext(q0),
  mr = (l) => {
    const [s, r] = l.hook(l);
    return [Ov(l.base, s), z0((c, f) => l.aroundNav(r, Tv(c, l.base), f))];
  },
  G0 = () => mr(Cs()),
  X0 = (l, s, r, c) => {
    const { pattern: f, keys: d } =
        s instanceof RegExp ? { keys: !1, pattern: s } : l(s || "*", c),
      p = f.exec(r) || [],
      [y, ...v] = p;
    return y !== void 0
      ? [
          !0,
          (() => {
            const h =
              d !== !1
                ? Object.fromEntries(d.map((N, j) => [N, v[j]]))
                : p.groups;
            let g = { ...v };
            return (h && Object.assign(g, h), g);
          })(),
          ...(c ? [y] : []),
        ]
      : [!1, null];
  },
  Y0 = ({ children: l, ...s }) => {
    const r = Cs(),
      c = s.hook ? H0 : r;
    let f = c;
    const [d, p = s.ssrSearch ?? ""] = s.ssrPath?.split("?") ?? [];
    (d && ((s.ssrSearch = p), (s.ssrPath = d)),
      (s.hrefs = s.hrefs ?? s.hook?.hrefs),
      (s.searchHook = s.searchHook ?? s.hook?.searchHook));
    let y = w.useRef({}),
      v = y.current,
      h = v;
    for (let g in c) {
      const N = g === "base" ? c[g] + (s[g] ?? "") : (s[g] ?? c[g]);
      (v === h && N !== h[g] && (y.current = h = { ...h }),
        (h[g] = N),
        (N !== c[g] || N !== f[g]) && (f = h));
    }
    return w.createElement(L0.Provider, { value: f, children: l });
  },
  Kh = ({ children: l, component: s }, r) =>
    s ? w.createElement(s, { params: r }) : typeof l == "function" ? l(r) : l,
  Rv = (l) => {
    let s = w.useRef(B0);
    const r = s.current;
    return (s.current =
      Object.keys(l).length !== Object.keys(r).length ||
      Object.entries(l).some(([c, f]) => f !== r[c])
        ? l
        : r);
  },
  Pn = ({ path: l, nest: s, match: r, ...c }) => {
    const f = Cs(),
      [d] = mr(f),
      [p, y, v] = r ?? X0(f.parser, l, d, s),
      h = Rv({ ...Cv(), ...y });
    if (!p) return null;
    const g = v ? w.createElement(Y0, { base: v }, Kh(c, h)) : Kh(c, h);
    return w.createElement(q0.Provider, { value: h, children: g });
  },
  $t = w.forwardRef((l, s) => {
    const r = Cs(),
      [c, f] = mr(r),
      {
        to: d = "",
        href: p = d,
        onClick: y,
        asChild: v,
        children: h,
        className: g,
        replace: N,
        state: j,
        transition: M,
        ...U
      } = l,
      O = z0((q) => {
        q.ctrlKey ||
          q.metaKey ||
          q.altKey ||
          q.shiftKey ||
          q.button !== 0 ||
          (y?.(q), q.defaultPrevented || (q.preventDefault(), f(p, l)));
      }),
      _ = r.hrefs(p[0] === "~" ? p.slice(1) : r.base + p, r);
    return v && w.isValidElement(h)
      ? w.cloneElement(h, { onClick: O, href: _ })
      : w.createElement("a", {
          ...U,
          onClick: O,
          href: _,
          className: g?.call ? g(c === p) : g,
          children: h,
          ref: s,
        });
  }),
  Q0 = (l) =>
    Array.isArray(l)
      ? l.flatMap((s) => Q0(s && s.type === w.Fragment ? s.props.children : s))
      : [l],
  Mv = ({ children: l, location: s }) => {
    const r = Cs(),
      [c] = mr(r);
    for (const f of Q0(l)) {
      let d = 0;
      if (
        w.isValidElement(f) &&
        (d = X0(r.parser, f.props.path, s || c, f.props.nest))[0]
      )
        return w.cloneElement(f, { match: d });
    }
    return null;
  };
var hr = class {
    constructor() {
      ((this.listeners = new Set()),
        (this.subscribe = this.subscribe.bind(this)));
    }
    subscribe(l) {
      return (
        this.listeners.add(l),
        this.onSubscribe(),
        () => {
          (this.listeners.delete(l), this.onUnsubscribe());
        }
      );
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
  },
  _v = {
    setTimeout: (l, s) => setTimeout(l, s),
    clearTimeout: (l) => clearTimeout(l),
    setInterval: (l, s) => setInterval(l, s),
    clearInterval: (l) => clearInterval(l),
  },
  Dv = class {
    #e = _v;
    #n = !1;
    setTimeoutProvider(l) {
      this.#e = l;
    }
    setTimeout(l, s) {
      return this.#e.setTimeout(l, s);
    }
    clearTimeout(l) {
      this.#e.clearTimeout(l);
    }
    setInterval(l, s) {
      return this.#e.setInterval(l, s);
    }
    clearInterval(l) {
      this.#e.clearInterval(l);
    }
  },
  eu = new Dv();
function zv(l) {
  setTimeout(l, 0);
}
var pr = typeof window > "u" || "Deno" in globalThis;
function Bt() {}
function Uv(l, s) {
  return typeof l == "function" ? l(s) : l;
}
function kv(l) {
  return typeof l == "number" && l >= 0 && l !== 1 / 0;
}
function Hv(l, s) {
  return Math.max(l + (s || 0) - Date.now(), 0);
}
function tu(l, s) {
  return typeof l == "function" ? l(s) : l;
}
function Lv(l, s) {
  return typeof l == "function" ? l(s) : l;
}
function Ph(l, s) {
  const {
    type: r = "all",
    exact: c,
    fetchStatus: f,
    predicate: d,
    queryKey: p,
    stale: y,
  } = l;
  if (p) {
    if (c) {
      if (s.queryHash !== yu(p, s.options)) return !1;
    } else if (!Ts(s.queryKey, p)) return !1;
  }
  if (r !== "all") {
    const v = s.isActive();
    if ((r === "active" && !v) || (r === "inactive" && v)) return !1;
  }
  return !(
    (typeof y == "boolean" && s.isStale() !== y) ||
    (f && f !== s.state.fetchStatus) ||
    (d && !d(s))
  );
}
function Fh(l, s) {
  const { exact: r, status: c, predicate: f, mutationKey: d } = l;
  if (d) {
    if (!s.options.mutationKey) return !1;
    if (r) {
      if (As(s.options.mutationKey) !== As(d)) return !1;
    } else if (!Ts(s.options.mutationKey, d)) return !1;
  }
  return !((c && s.state.status !== c) || (f && !f(s)));
}
function yu(l, s) {
  return (s?.queryKeyHashFn || As)(l);
}
function As(l) {
  return JSON.stringify(l, (s, r) =>
    nu(r)
      ? Object.keys(r)
          .sort()
          .reduce((c, f) => ((c[f] = r[f]), c), {})
      : r,
  );
}
function Ts(l, s) {
  return l === s
    ? !0
    : typeof l != typeof s
      ? !1
      : l && s && typeof l == "object" && typeof s == "object"
        ? Object.keys(s).every((r) => Ts(l[r], s[r]))
        : !1;
}
var Bv = Object.prototype.hasOwnProperty;
function V0(l, s, r = 0) {
  if (l === s) return l;
  if (r > 500) return s;
  const c = Jh(l) && Jh(s);
  if (!c && !(nu(l) && nu(s))) return s;
  const d = (c ? l : Object.keys(l)).length,
    p = c ? s : Object.keys(s),
    y = p.length,
    v = c ? new Array(y) : {};
  let h = 0;
  for (let g = 0; g < y; g++) {
    const N = c ? g : p[g],
      j = l[N],
      M = s[N];
    if (j === M) {
      ((v[N] = j), (c ? g < d : Bv.call(l, N)) && h++);
      continue;
    }
    if (
      j === null ||
      M === null ||
      typeof j != "object" ||
      typeof M != "object"
    ) {
      v[N] = M;
      continue;
    }
    const U = V0(j, M, r + 1);
    ((v[N] = U), U === j && h++);
  }
  return d === y && h === d ? l : v;
}
function Jh(l) {
  return Array.isArray(l) && l.length === Object.keys(l).length;
}
function nu(l) {
  if (!$h(l)) return !1;
  const s = l.constructor;
  if (s === void 0) return !0;
  const r = s.prototype;
  return !(
    !$h(r) ||
    !r.hasOwnProperty("isPrototypeOf") ||
    Object.getPrototypeOf(l) !== Object.prototype
  );
}
function $h(l) {
  return Object.prototype.toString.call(l) === "[object Object]";
}
function qv(l) {
  return new Promise((s) => {
    eu.setTimeout(s, l);
  });
}
function Gv(l, s, r) {
  return typeof r.structuralSharing == "function"
    ? r.structuralSharing(l, s)
    : r.structuralSharing !== !1
      ? V0(l, s)
      : s;
}
function Xv(l, s, r = 0) {
  const c = [...l, s];
  return r && c.length > r ? c.slice(1) : c;
}
function Yv(l, s, r = 0) {
  const c = [s, ...l];
  return r && c.length > r ? c.slice(0, -1) : c;
}
var gu = Symbol();
function Z0(l, s) {
  return !l.queryFn && s?.initialPromise
    ? () => s.initialPromise
    : !l.queryFn || l.queryFn === gu
      ? () => Promise.reject(new Error(`Missing queryFn: '${l.queryHash}'`))
      : l.queryFn;
}
function Qv(l, s, r) {
  let c = !1,
    f;
  return (
    Object.defineProperty(l, "signal", {
      enumerable: !0,
      get: () => (
        (f ??= s()),
        c ||
          ((c = !0),
          f.aborted ? r() : f.addEventListener("abort", r, { once: !0 })),
        f
      ),
    }),
    l
  );
}
var Vv = class extends hr {
    #e;
    #n;
    #t;
    constructor() {
      (super(),
        (this.#t = (l) => {
          if (!pr && window.addEventListener) {
            const s = () => l();
            return (
              window.addEventListener("visibilitychange", s, !1),
              () => {
                window.removeEventListener("visibilitychange", s);
              }
            );
          }
        }));
    }
    onSubscribe() {
      this.#n || this.setEventListener(this.#t);
    }
    onUnsubscribe() {
      this.hasListeners() || (this.#n?.(), (this.#n = void 0));
    }
    setEventListener(l) {
      ((this.#t = l),
        this.#n?.(),
        (this.#n = l((s) => {
          typeof s == "boolean" ? this.setFocused(s) : this.onFocus();
        })));
    }
    setFocused(l) {
      this.#e !== l && ((this.#e = l), this.onFocus());
    }
    onFocus() {
      const l = this.isFocused();
      this.listeners.forEach((s) => {
        s(l);
      });
    }
    isFocused() {
      return typeof this.#e == "boolean"
        ? this.#e
        : globalThis.document?.visibilityState !== "hidden";
    }
  },
  K0 = new Vv();
function Zv() {
  let l, s;
  const r = new Promise((f, d) => {
    ((l = f), (s = d));
  });
  ((r.status = "pending"), r.catch(() => {}));
  function c(f) {
    (Object.assign(r, f), delete r.resolve, delete r.reject);
  }
  return (
    (r.resolve = (f) => {
      (c({ status: "fulfilled", value: f }), l(f));
    }),
    (r.reject = (f) => {
      (c({ status: "rejected", reason: f }), s(f));
    }),
    r
  );
}
var Kv = zv;
function Pv() {
  let l = [],
    s = 0,
    r = (y) => {
      y();
    },
    c = (y) => {
      y();
    },
    f = Kv;
  const d = (y) => {
      s
        ? l.push(y)
        : f(() => {
            r(y);
          });
    },
    p = () => {
      const y = l;
      ((l = []),
        y.length &&
          f(() => {
            c(() => {
              y.forEach((v) => {
                r(v);
              });
            });
          }));
    };
  return {
    batch: (y) => {
      let v;
      s++;
      try {
        v = y();
      } finally {
        (s--, s || p());
      }
      return v;
    },
    batchCalls:
      (y) =>
      (...v) => {
        d(() => {
          y(...v);
        });
      },
    schedule: d,
    setNotifyFunction: (y) => {
      r = y;
    },
    setBatchNotifyFunction: (y) => {
      c = y;
    },
    setScheduler: (y) => {
      f = y;
    },
  };
}
var it = Pv(),
  Fv = class extends hr {
    #e = !0;
    #n;
    #t;
    constructor() {
      (super(),
        (this.#t = (l) => {
          if (!pr && window.addEventListener) {
            const s = () => l(!0),
              r = () => l(!1);
            return (
              window.addEventListener("online", s, !1),
              window.addEventListener("offline", r, !1),
              () => {
                (window.removeEventListener("online", s),
                  window.removeEventListener("offline", r));
              }
            );
          }
        }));
    }
    onSubscribe() {
      this.#n || this.setEventListener(this.#t);
    }
    onUnsubscribe() {
      this.hasListeners() || (this.#n?.(), (this.#n = void 0));
    }
    setEventListener(l) {
      ((this.#t = l), this.#n?.(), (this.#n = l(this.setOnline.bind(this))));
    }
    setOnline(l) {
      this.#e !== l &&
        ((this.#e = l),
        this.listeners.forEach((r) => {
          r(l);
        }));
    }
    isOnline() {
      return this.#e;
    }
  },
  ar = new Fv();
function Jv(l) {
  return Math.min(1e3 * 2 ** l, 3e4);
}
function P0(l) {
  return (l ?? "online") === "online" ? ar.isOnline() : !0;
}
var lu = class extends Error {
  constructor(l) {
    (super("CancelledError"),
      (this.revert = l?.revert),
      (this.silent = l?.silent));
  }
};
function F0(l) {
  let s = !1,
    r = 0,
    c;
  const f = Zv(),
    d = () => f.status !== "pending",
    p = (O) => {
      if (!d()) {
        const _ = new lu(O);
        (j(_), l.onCancel?.(_));
      }
    },
    y = () => {
      s = !0;
    },
    v = () => {
      s = !1;
    },
    h = () =>
      K0.isFocused() &&
      (l.networkMode === "always" || ar.isOnline()) &&
      l.canRun(),
    g = () => P0(l.networkMode) && l.canRun(),
    N = (O) => {
      d() || (c?.(), f.resolve(O));
    },
    j = (O) => {
      d() || (c?.(), f.reject(O));
    },
    M = () =>
      new Promise((O) => {
        ((c = (_) => {
          (d() || h()) && O(_);
        }),
          l.onPause?.());
      }).then(() => {
        ((c = void 0), d() || l.onContinue?.());
      }),
    U = () => {
      if (d()) return;
      let O;
      const _ = r === 0 ? l.initialPromise : void 0;
      try {
        O = _ ?? l.fn();
      } catch (q) {
        O = Promise.reject(q);
      }
      Promise.resolve(O)
        .then(N)
        .catch((q) => {
          if (d()) return;
          const Y = l.retry ?? (pr ? 0 : 3),
            X = l.retryDelay ?? Jv,
            Z = typeof X == "function" ? X(r, q) : X,
            Q =
              Y === !0 ||
              (typeof Y == "number" && r < Y) ||
              (typeof Y == "function" && Y(r, q));
          if (s || !Q) {
            j(q);
            return;
          }
          (r++,
            l.onFail?.(r, q),
            qv(Z)
              .then(() => (h() ? void 0 : M()))
              .then(() => {
                s ? j(q) : U();
              }));
        });
    };
  return {
    promise: f,
    status: () => f.status,
    cancel: p,
    continue: () => (c?.(), f),
    cancelRetry: y,
    continueRetry: v,
    canStart: g,
    start: () => (g() ? U() : M().then(U), f),
  };
}
var J0 = class {
    #e;
    destroy() {
      this.clearGcTimeout();
    }
    scheduleGc() {
      (this.clearGcTimeout(),
        kv(this.gcTime) &&
          (this.#e = eu.setTimeout(() => {
            this.optionalRemove();
          }, this.gcTime)));
    }
    updateGcTime(l) {
      this.gcTime = Math.max(this.gcTime || 0, l ?? (pr ? 1 / 0 : 300 * 1e3));
    }
    clearGcTimeout() {
      this.#e && (eu.clearTimeout(this.#e), (this.#e = void 0));
    }
  },
  $v = class extends J0 {
    #e;
    #n;
    #t;
    #a;
    #l;
    #i;
    #r;
    constructor(l) {
      (super(),
        (this.#r = !1),
        (this.#i = l.defaultOptions),
        this.setOptions(l.options),
        (this.observers = []),
        (this.#a = l.client),
        (this.#t = this.#a.getQueryCache()),
        (this.queryKey = l.queryKey),
        (this.queryHash = l.queryHash),
        (this.#e = Ih(this.options)),
        (this.state = l.state ?? this.#e),
        this.scheduleGc());
    }
    get meta() {
      return this.options.meta;
    }
    get promise() {
      return this.#l?.promise;
    }
    setOptions(l) {
      if (
        ((this.options = { ...this.#i, ...l }),
        this.updateGcTime(this.options.gcTime),
        this.state && this.state.data === void 0)
      ) {
        const s = Ih(this.options);
        s.data !== void 0 &&
          (this.setState(Wh(s.data, s.dataUpdatedAt)), (this.#e = s));
      }
    }
    optionalRemove() {
      !this.observers.length &&
        this.state.fetchStatus === "idle" &&
        this.#t.remove(this);
    }
    setData(l, s) {
      const r = Gv(this.state.data, l, this.options);
      return (
        this.#s({
          data: r,
          type: "success",
          dataUpdatedAt: s?.updatedAt,
          manual: s?.manual,
        }),
        r
      );
    }
    setState(l, s) {
      this.#s({ type: "setState", state: l, setStateOptions: s });
    }
    cancel(l) {
      const s = this.#l?.promise;
      return (this.#l?.cancel(l), s ? s.then(Bt).catch(Bt) : Promise.resolve());
    }
    destroy() {
      (super.destroy(), this.cancel({ silent: !0 }));
    }
    reset() {
      (this.destroy(), this.setState(this.#e));
    }
    isActive() {
      return this.observers.some((l) => Lv(l.options.enabled, this) !== !1);
    }
    isDisabled() {
      return this.getObserversCount() > 0
        ? !this.isActive()
        : this.options.queryFn === gu ||
            this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
    }
    isStatic() {
      return this.getObserversCount() > 0
        ? this.observers.some((l) => tu(l.options.staleTime, this) === "static")
        : !1;
    }
    isStale() {
      return this.getObserversCount() > 0
        ? this.observers.some((l) => l.getCurrentResult().isStale)
        : this.state.data === void 0 || this.state.isInvalidated;
    }
    isStaleByTime(l = 0) {
      return this.state.data === void 0
        ? !0
        : l === "static"
          ? !1
          : this.state.isInvalidated
            ? !0
            : !Hv(this.state.dataUpdatedAt, l);
    }
    onFocus() {
      (this.observers
        .find((s) => s.shouldFetchOnWindowFocus())
        ?.refetch({ cancelRefetch: !1 }),
        this.#l?.continue());
    }
    onOnline() {
      (this.observers
        .find((s) => s.shouldFetchOnReconnect())
        ?.refetch({ cancelRefetch: !1 }),
        this.#l?.continue());
    }
    addObserver(l) {
      this.observers.includes(l) ||
        (this.observers.push(l),
        this.clearGcTimeout(),
        this.#t.notify({ type: "observerAdded", query: this, observer: l }));
    }
    removeObserver(l) {
      this.observers.includes(l) &&
        ((this.observers = this.observers.filter((s) => s !== l)),
        this.observers.length ||
          (this.#l &&
            (this.#r ? this.#l.cancel({ revert: !0 }) : this.#l.cancelRetry()),
          this.scheduleGc()),
        this.#t.notify({ type: "observerRemoved", query: this, observer: l }));
    }
    getObserversCount() {
      return this.observers.length;
    }
    invalidate() {
      this.state.isInvalidated || this.#s({ type: "invalidate" });
    }
    async fetch(l, s) {
      if (
        this.state.fetchStatus !== "idle" &&
        this.#l?.status() !== "rejected"
      ) {
        if (this.state.data !== void 0 && s?.cancelRefetch)
          this.cancel({ silent: !0 });
        else if (this.#l) return (this.#l.continueRetry(), this.#l.promise);
      }
      if ((l && this.setOptions(l), !this.options.queryFn)) {
        const y = this.observers.find((v) => v.options.queryFn);
        y && this.setOptions(y.options);
      }
      const r = new AbortController(),
        c = (y) => {
          Object.defineProperty(y, "signal", {
            enumerable: !0,
            get: () => ((this.#r = !0), r.signal),
          });
        },
        f = () => {
          const y = Z0(this.options, s),
            h = (() => {
              const g = {
                client: this.#a,
                queryKey: this.queryKey,
                meta: this.meta,
              };
              return (c(g), g);
            })();
          return (
            (this.#r = !1),
            this.options.persister ? this.options.persister(y, h, this) : y(h)
          );
        },
        p = (() => {
          const y = {
            fetchOptions: s,
            options: this.options,
            queryKey: this.queryKey,
            client: this.#a,
            state: this.state,
            fetchFn: f,
          };
          return (c(y), y);
        })();
      (this.options.behavior?.onFetch(p, this),
        (this.#n = this.state),
        (this.state.fetchStatus === "idle" ||
          this.state.fetchMeta !== p.fetchOptions?.meta) &&
          this.#s({ type: "fetch", meta: p.fetchOptions?.meta }),
        (this.#l = F0({
          initialPromise: s?.initialPromise,
          fn: p.fetchFn,
          onCancel: (y) => {
            (y instanceof lu &&
              y.revert &&
              this.setState({ ...this.#n, fetchStatus: "idle" }),
              r.abort());
          },
          onFail: (y, v) => {
            this.#s({ type: "failed", failureCount: y, error: v });
          },
          onPause: () => {
            this.#s({ type: "pause" });
          },
          onContinue: () => {
            this.#s({ type: "continue" });
          },
          retry: p.options.retry,
          retryDelay: p.options.retryDelay,
          networkMode: p.options.networkMode,
          canRun: () => !0,
        })));
      try {
        const y = await this.#l.start();
        if (y === void 0)
          throw new Error(`${this.queryHash} data is undefined`);
        return (
          this.setData(y),
          this.#t.config.onSuccess?.(y, this),
          this.#t.config.onSettled?.(y, this.state.error, this),
          y
        );
      } catch (y) {
        if (y instanceof lu) {
          if (y.silent) return this.#l.promise;
          if (y.revert) {
            if (this.state.data === void 0) throw y;
            return this.state.data;
          }
        }
        throw (
          this.#s({ type: "error", error: y }),
          this.#t.config.onError?.(y, this),
          this.#t.config.onSettled?.(this.state.data, y, this),
          y
        );
      } finally {
        this.scheduleGc();
      }
    }
    #s(l) {
      const s = (r) => {
        switch (l.type) {
          case "failed":
            return {
              ...r,
              fetchFailureCount: l.failureCount,
              fetchFailureReason: l.error,
            };
          case "pause":
            return { ...r, fetchStatus: "paused" };
          case "continue":
            return { ...r, fetchStatus: "fetching" };
          case "fetch":
            return {
              ...r,
              ...Wv(r.data, this.options),
              fetchMeta: l.meta ?? null,
            };
          case "success":
            const c = {
              ...r,
              ...Wh(l.data, l.dataUpdatedAt),
              dataUpdateCount: r.dataUpdateCount + 1,
              ...(!l.manual && {
                fetchStatus: "idle",
                fetchFailureCount: 0,
                fetchFailureReason: null,
              }),
            };
            return ((this.#n = l.manual ? c : void 0), c);
          case "error":
            const f = l.error;
            return {
              ...r,
              error: f,
              errorUpdateCount: r.errorUpdateCount + 1,
              errorUpdatedAt: Date.now(),
              fetchFailureCount: r.fetchFailureCount + 1,
              fetchFailureReason: f,
              fetchStatus: "idle",
              status: "error",
              isInvalidated: !0,
            };
          case "invalidate":
            return { ...r, isInvalidated: !0 };
          case "setState":
            return { ...r, ...l.state };
        }
      };
      ((this.state = s(this.state)),
        it.batch(() => {
          (this.observers.forEach((r) => {
            r.onQueryUpdate();
          }),
            this.#t.notify({ query: this, type: "updated", action: l }));
        }));
    }
  };
function Wv(l, s) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: P0(s.networkMode) ? "fetching" : "paused",
    ...(l === void 0 && { error: null, status: "pending" }),
  };
}
function Wh(l, s) {
  return {
    data: l,
    dataUpdatedAt: s ?? Date.now(),
    error: null,
    isInvalidated: !1,
    status: "success",
  };
}
function Ih(l) {
  const s =
      typeof l.initialData == "function" ? l.initialData() : l.initialData,
    r = s !== void 0,
    c = r
      ? typeof l.initialDataUpdatedAt == "function"
        ? l.initialDataUpdatedAt()
        : l.initialDataUpdatedAt
      : 0;
  return {
    data: s,
    dataUpdateCount: 0,
    dataUpdatedAt: r ? (c ?? Date.now()) : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: r ? "success" : "pending",
    fetchStatus: "idle",
  };
}
function e0(l) {
  return {
    onFetch: (s, r) => {
      const c = s.options,
        f = s.fetchOptions?.meta?.fetchMore?.direction,
        d = s.state.data?.pages || [],
        p = s.state.data?.pageParams || [];
      let y = { pages: [], pageParams: [] },
        v = 0;
      const h = async () => {
        let g = !1;
        const N = (U) => {
            Qv(
              U,
              () => s.signal,
              () => (g = !0),
            );
          },
          j = Z0(s.options, s.fetchOptions),
          M = async (U, O, _) => {
            if (g) return Promise.reject();
            if (O == null && U.pages.length) return Promise.resolve(U);
            const Y = (() => {
                const F = {
                  client: s.client,
                  queryKey: s.queryKey,
                  pageParam: O,
                  direction: _ ? "backward" : "forward",
                  meta: s.options.meta,
                };
                return (N(F), F);
              })(),
              X = await j(Y),
              { maxPages: Z } = s.options,
              Q = _ ? Yv : Xv;
            return {
              pages: Q(U.pages, X, Z),
              pageParams: Q(U.pageParams, O, Z),
            };
          };
        if (f && d.length) {
          const U = f === "backward",
            O = U ? Iv : t0,
            _ = { pages: d, pageParams: p },
            q = O(c, _);
          y = await M(_, q, U);
        } else {
          const U = l ?? d.length;
          do {
            const O = v === 0 ? (p[0] ?? c.initialPageParam) : t0(c, y);
            if (v > 0 && O == null) break;
            ((y = await M(y, O)), v++);
          } while (v < U);
        }
        return y;
      };
      s.options.persister
        ? (s.fetchFn = () =>
            s.options.persister?.(
              h,
              {
                client: s.client,
                queryKey: s.queryKey,
                meta: s.options.meta,
                signal: s.signal,
              },
              r,
            ))
        : (s.fetchFn = h);
    },
  };
}
function t0(l, { pages: s, pageParams: r }) {
  const c = s.length - 1;
  return s.length > 0 ? l.getNextPageParam(s[c], s, r[c], r) : void 0;
}
function Iv(l, { pages: s, pageParams: r }) {
  return s.length > 0 ? l.getPreviousPageParam?.(s[0], s, r[0], r) : void 0;
}
var eb = class extends J0 {
  #e;
  #n;
  #t;
  #a;
  constructor(l) {
    (super(),
      (this.#e = l.client),
      (this.mutationId = l.mutationId),
      (this.#t = l.mutationCache),
      (this.#n = []),
      (this.state = l.state || tb()),
      this.setOptions(l.options),
      this.scheduleGc());
  }
  setOptions(l) {
    ((this.options = l), this.updateGcTime(this.options.gcTime));
  }
  get meta() {
    return this.options.meta;
  }
  addObserver(l) {
    this.#n.includes(l) ||
      (this.#n.push(l),
      this.clearGcTimeout(),
      this.#t.notify({ type: "observerAdded", mutation: this, observer: l }));
  }
  removeObserver(l) {
    ((this.#n = this.#n.filter((s) => s !== l)),
      this.scheduleGc(),
      this.#t.notify({ type: "observerRemoved", mutation: this, observer: l }));
  }
  optionalRemove() {
    this.#n.length ||
      (this.state.status === "pending"
        ? this.scheduleGc()
        : this.#t.remove(this));
  }
  continue() {
    return this.#a?.continue() ?? this.execute(this.state.variables);
  }
  async execute(l) {
    const s = () => {
        this.#l({ type: "continue" });
      },
      r = {
        client: this.#e,
        meta: this.options.meta,
        mutationKey: this.options.mutationKey,
      };
    this.#a = F0({
      fn: () =>
        this.options.mutationFn
          ? this.options.mutationFn(l, r)
          : Promise.reject(new Error("No mutationFn found")),
      onFail: (d, p) => {
        this.#l({ type: "failed", failureCount: d, error: p });
      },
      onPause: () => {
        this.#l({ type: "pause" });
      },
      onContinue: s,
      retry: this.options.retry ?? 0,
      retryDelay: this.options.retryDelay,
      networkMode: this.options.networkMode,
      canRun: () => this.#t.canRun(this),
    });
    const c = this.state.status === "pending",
      f = !this.#a.canStart();
    try {
      if (c) s();
      else {
        (this.#l({ type: "pending", variables: l, isPaused: f }),
          this.#t.config.onMutate &&
            (await this.#t.config.onMutate(l, this, r)));
        const p = await this.options.onMutate?.(l, r);
        p !== this.state.context &&
          this.#l({ type: "pending", context: p, variables: l, isPaused: f });
      }
      const d = await this.#a.start();
      return (
        await this.#t.config.onSuccess?.(d, l, this.state.context, this, r),
        await this.options.onSuccess?.(d, l, this.state.context, r),
        await this.#t.config.onSettled?.(
          d,
          null,
          this.state.variables,
          this.state.context,
          this,
          r,
        ),
        await this.options.onSettled?.(d, null, l, this.state.context, r),
        this.#l({ type: "success", data: d }),
        d
      );
    } catch (d) {
      try {
        await this.#t.config.onError?.(d, l, this.state.context, this, r);
      } catch (p) {
        Promise.reject(p);
      }
      try {
        await this.options.onError?.(d, l, this.state.context, r);
      } catch (p) {
        Promise.reject(p);
      }
      try {
        await this.#t.config.onSettled?.(
          void 0,
          d,
          this.state.variables,
          this.state.context,
          this,
          r,
        );
      } catch (p) {
        Promise.reject(p);
      }
      try {
        await this.options.onSettled?.(void 0, d, l, this.state.context, r);
      } catch (p) {
        Promise.reject(p);
      }
      throw (this.#l({ type: "error", error: d }), d);
    } finally {
      this.#t.runNext(this);
    }
  }
  #l(l) {
    const s = (r) => {
      switch (l.type) {
        case "failed":
          return { ...r, failureCount: l.failureCount, failureReason: l.error };
        case "pause":
          return { ...r, isPaused: !0 };
        case "continue":
          return { ...r, isPaused: !1 };
        case "pending":
          return {
            ...r,
            context: l.context,
            data: void 0,
            failureCount: 0,
            failureReason: null,
            error: null,
            isPaused: l.isPaused,
            status: "pending",
            variables: l.variables,
            submittedAt: Date.now(),
          };
        case "success":
          return {
            ...r,
            data: l.data,
            failureCount: 0,
            failureReason: null,
            error: null,
            status: "success",
            isPaused: !1,
          };
        case "error":
          return {
            ...r,
            data: void 0,
            error: l.error,
            failureCount: r.failureCount + 1,
            failureReason: l.error,
            isPaused: !1,
            status: "error",
          };
      }
    };
    ((this.state = s(this.state)),
      it.batch(() => {
        (this.#n.forEach((r) => {
          r.onMutationUpdate(l);
        }),
          this.#t.notify({ mutation: this, type: "updated", action: l }));
      }));
  }
};
function tb() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0,
    submittedAt: 0,
  };
}
var nb = class extends hr {
  constructor(l = {}) {
    (super(),
      (this.config = l),
      (this.#e = new Set()),
      (this.#n = new Map()),
      (this.#t = 0));
  }
  #e;
  #n;
  #t;
  build(l, s, r) {
    const c = new eb({
      client: l,
      mutationCache: this,
      mutationId: ++this.#t,
      options: l.defaultMutationOptions(s),
      state: r,
    });
    return (this.add(c), c);
  }
  add(l) {
    this.#e.add(l);
    const s = Pi(l);
    if (typeof s == "string") {
      const r = this.#n.get(s);
      r ? r.push(l) : this.#n.set(s, [l]);
    }
    this.notify({ type: "added", mutation: l });
  }
  remove(l) {
    if (this.#e.delete(l)) {
      const s = Pi(l);
      if (typeof s == "string") {
        const r = this.#n.get(s);
        if (r)
          if (r.length > 1) {
            const c = r.indexOf(l);
            c !== -1 && r.splice(c, 1);
          } else r[0] === l && this.#n.delete(s);
      }
    }
    this.notify({ type: "removed", mutation: l });
  }
  canRun(l) {
    const s = Pi(l);
    if (typeof s == "string") {
      const c = this.#n.get(s)?.find((f) => f.state.status === "pending");
      return !c || c === l;
    } else return !0;
  }
  runNext(l) {
    const s = Pi(l);
    return typeof s == "string"
      ? (this.#n
          .get(s)
          ?.find((c) => c !== l && c.state.isPaused)
          ?.continue() ?? Promise.resolve())
      : Promise.resolve();
  }
  clear() {
    it.batch(() => {
      (this.#e.forEach((l) => {
        this.notify({ type: "removed", mutation: l });
      }),
        this.#e.clear(),
        this.#n.clear());
    });
  }
  getAll() {
    return Array.from(this.#e);
  }
  find(l) {
    const s = { exact: !0, ...l };
    return this.getAll().find((r) => Fh(s, r));
  }
  findAll(l = {}) {
    return this.getAll().filter((s) => Fh(l, s));
  }
  notify(l) {
    it.batch(() => {
      this.listeners.forEach((s) => {
        s(l);
      });
    });
  }
  resumePausedMutations() {
    const l = this.getAll().filter((s) => s.state.isPaused);
    return it.batch(() => Promise.all(l.map((s) => s.continue().catch(Bt))));
  }
};
function Pi(l) {
  return l.options.scope?.id;
}
var lb = class extends hr {
    constructor(l = {}) {
      (super(), (this.config = l), (this.#e = new Map()));
    }
    #e;
    build(l, s, r) {
      const c = s.queryKey,
        f = s.queryHash ?? yu(c, s);
      let d = this.get(f);
      return (
        d ||
          ((d = new $v({
            client: l,
            queryKey: c,
            queryHash: f,
            options: l.defaultQueryOptions(s),
            state: r,
            defaultOptions: l.getQueryDefaults(c),
          })),
          this.add(d)),
        d
      );
    }
    add(l) {
      this.#e.has(l.queryHash) ||
        (this.#e.set(l.queryHash, l), this.notify({ type: "added", query: l }));
    }
    remove(l) {
      const s = this.#e.get(l.queryHash);
      s &&
        (l.destroy(),
        s === l && this.#e.delete(l.queryHash),
        this.notify({ type: "removed", query: l }));
    }
    clear() {
      it.batch(() => {
        this.getAll().forEach((l) => {
          this.remove(l);
        });
      });
    }
    get(l) {
      return this.#e.get(l);
    }
    getAll() {
      return [...this.#e.values()];
    }
    find(l) {
      const s = { exact: !0, ...l };
      return this.getAll().find((r) => Ph(s, r));
    }
    findAll(l = {}) {
      const s = this.getAll();
      return Object.keys(l).length > 0 ? s.filter((r) => Ph(l, r)) : s;
    }
    notify(l) {
      it.batch(() => {
        this.listeners.forEach((s) => {
          s(l);
        });
      });
    }
    onFocus() {
      it.batch(() => {
        this.getAll().forEach((l) => {
          l.onFocus();
        });
      });
    }
    onOnline() {
      it.batch(() => {
        this.getAll().forEach((l) => {
          l.onOnline();
        });
      });
    }
  },
  ab = class {
    #e;
    #n;
    #t;
    #a;
    #l;
    #i;
    #r;
    #s;
    constructor(l = {}) {
      ((this.#e = l.queryCache || new lb()),
        (this.#n = l.mutationCache || new nb()),
        (this.#t = l.defaultOptions || {}),
        (this.#a = new Map()),
        (this.#l = new Map()),
        (this.#i = 0));
    }
    mount() {
      (this.#i++,
        this.#i === 1 &&
          ((this.#r = K0.subscribe(async (l) => {
            l && (await this.resumePausedMutations(), this.#e.onFocus());
          })),
          (this.#s = ar.subscribe(async (l) => {
            l && (await this.resumePausedMutations(), this.#e.onOnline());
          }))));
    }
    unmount() {
      (this.#i--,
        this.#i === 0 &&
          (this.#r?.(), (this.#r = void 0), this.#s?.(), (this.#s = void 0)));
    }
    isFetching(l) {
      return this.#e.findAll({ ...l, fetchStatus: "fetching" }).length;
    }
    isMutating(l) {
      return this.#n.findAll({ ...l, status: "pending" }).length;
    }
    getQueryData(l) {
      const s = this.defaultQueryOptions({ queryKey: l });
      return this.#e.get(s.queryHash)?.state.data;
    }
    ensureQueryData(l) {
      const s = this.defaultQueryOptions(l),
        r = this.#e.build(this, s),
        c = r.state.data;
      return c === void 0
        ? this.fetchQuery(l)
        : (l.revalidateIfStale &&
            r.isStaleByTime(tu(s.staleTime, r)) &&
            this.prefetchQuery(s),
          Promise.resolve(c));
    }
    getQueriesData(l) {
      return this.#e.findAll(l).map(({ queryKey: s, state: r }) => {
        const c = r.data;
        return [s, c];
      });
    }
    setQueryData(l, s, r) {
      const c = this.defaultQueryOptions({ queryKey: l }),
        d = this.#e.get(c.queryHash)?.state.data,
        p = Uv(s, d);
      if (p !== void 0)
        return this.#e.build(this, c).setData(p, { ...r, manual: !0 });
    }
    setQueriesData(l, s, r) {
      return it.batch(() =>
        this.#e
          .findAll(l)
          .map(({ queryKey: c }) => [c, this.setQueryData(c, s, r)]),
      );
    }
    getQueryState(l) {
      const s = this.defaultQueryOptions({ queryKey: l });
      return this.#e.get(s.queryHash)?.state;
    }
    removeQueries(l) {
      const s = this.#e;
      it.batch(() => {
        s.findAll(l).forEach((r) => {
          s.remove(r);
        });
      });
    }
    resetQueries(l, s) {
      const r = this.#e;
      return it.batch(
        () => (
          r.findAll(l).forEach((c) => {
            c.reset();
          }),
          this.refetchQueries({ type: "active", ...l }, s)
        ),
      );
    }
    cancelQueries(l, s = {}) {
      const r = { revert: !0, ...s },
        c = it.batch(() => this.#e.findAll(l).map((f) => f.cancel(r)));
      return Promise.all(c).then(Bt).catch(Bt);
    }
    invalidateQueries(l, s = {}) {
      return it.batch(
        () => (
          this.#e.findAll(l).forEach((r) => {
            r.invalidate();
          }),
          l?.refetchType === "none"
            ? Promise.resolve()
            : this.refetchQueries(
                { ...l, type: l?.refetchType ?? l?.type ?? "active" },
                s,
              )
        ),
      );
    }
    refetchQueries(l, s = {}) {
      const r = { ...s, cancelRefetch: s.cancelRefetch ?? !0 },
        c = it.batch(() =>
          this.#e
            .findAll(l)
            .filter((f) => !f.isDisabled() && !f.isStatic())
            .map((f) => {
              let d = f.fetch(void 0, r);
              return (
                r.throwOnError || (d = d.catch(Bt)),
                f.state.fetchStatus === "paused" ? Promise.resolve() : d
              );
            }),
        );
      return Promise.all(c).then(Bt);
    }
    fetchQuery(l) {
      const s = this.defaultQueryOptions(l);
      s.retry === void 0 && (s.retry = !1);
      const r = this.#e.build(this, s);
      return r.isStaleByTime(tu(s.staleTime, r))
        ? r.fetch(s)
        : Promise.resolve(r.state.data);
    }
    prefetchQuery(l) {
      return this.fetchQuery(l).then(Bt).catch(Bt);
    }
    fetchInfiniteQuery(l) {
      return ((l.behavior = e0(l.pages)), this.fetchQuery(l));
    }
    prefetchInfiniteQuery(l) {
      return this.fetchInfiniteQuery(l).then(Bt).catch(Bt);
    }
    ensureInfiniteQueryData(l) {
      return ((l.behavior = e0(l.pages)), this.ensureQueryData(l));
    }
    resumePausedMutations() {
      return ar.isOnline()
        ? this.#n.resumePausedMutations()
        : Promise.resolve();
    }
    getQueryCache() {
      return this.#e;
    }
    getMutationCache() {
      return this.#n;
    }
    getDefaultOptions() {
      return this.#t;
    }
    setDefaultOptions(l) {
      this.#t = l;
    }
    setQueryDefaults(l, s) {
      this.#a.set(As(l), { queryKey: l, defaultOptions: s });
    }
    getQueryDefaults(l) {
      const s = [...this.#a.values()],
        r = {};
      return (
        s.forEach((c) => {
          Ts(l, c.queryKey) && Object.assign(r, c.defaultOptions);
        }),
        r
      );
    }
    setMutationDefaults(l, s) {
      this.#l.set(As(l), { mutationKey: l, defaultOptions: s });
    }
    getMutationDefaults(l) {
      const s = [...this.#l.values()],
        r = {};
      return (
        s.forEach((c) => {
          Ts(l, c.mutationKey) && Object.assign(r, c.defaultOptions);
        }),
        r
      );
    }
    defaultQueryOptions(l) {
      if (l._defaulted) return l;
      const s = {
        ...this.#t.queries,
        ...this.getQueryDefaults(l.queryKey),
        ...l,
        _defaulted: !0,
      };
      return (
        s.queryHash || (s.queryHash = yu(s.queryKey, s)),
        s.refetchOnReconnect === void 0 &&
          (s.refetchOnReconnect = s.networkMode !== "always"),
        s.throwOnError === void 0 && (s.throwOnError = !!s.suspense),
        !s.networkMode && s.persister && (s.networkMode = "offlineFirst"),
        s.queryFn === gu && (s.enabled = !1),
        s
      );
    }
    defaultMutationOptions(l) {
      return l?._defaulted
        ? l
        : {
            ...this.#t.mutations,
            ...(l?.mutationKey && this.getMutationDefaults(l.mutationKey)),
            ...l,
            _defaulted: !0,
          };
    }
    clear() {
      (this.#e.clear(), this.#n.clear());
    }
  },
  sb = w.createContext(void 0),
  ib = ({ client: l, children: s }) => (
    w.useEffect(
      () => (
        l.mount(),
        () => {
          l.unmount();
        }
      ),
      [l],
    ),
    u.jsx(sb.Provider, { value: l, children: s })
  );
const rb = 1,
  ob = 1e6;
let Kc = 0;
function cb() {
  return ((Kc = (Kc + 1) % Number.MAX_SAFE_INTEGER), Kc.toString());
}
const Pc = new Map(),
  n0 = (l) => {
    if (Pc.has(l)) return;
    const s = setTimeout(() => {
      (Pc.delete(l), Ss({ type: "REMOVE_TOAST", toastId: l }));
    }, ob);
    Pc.set(l, s);
  },
  ub = (l, s) => {
    switch (s.type) {
      case "ADD_TOAST":
        return { ...l, toasts: [s.toast, ...l.toasts].slice(0, rb) };
      case "UPDATE_TOAST":
        return {
          ...l,
          toasts: l.toasts.map((r) =>
            r.id === s.toast.id ? { ...r, ...s.toast } : r,
          ),
        };
      case "DISMISS_TOAST": {
        const { toastId: r } = s;
        return (
          r
            ? n0(r)
            : l.toasts.forEach((c) => {
                n0(c.id);
              }),
          {
            ...l,
            toasts: l.toasts.map((c) =>
              c.id === r || r === void 0 ? { ...c, open: !1 } : c,
            ),
          }
        );
      }
      case "REMOVE_TOAST":
        return s.toastId === void 0
          ? { ...l, toasts: [] }
          : { ...l, toasts: l.toasts.filter((r) => r.id !== s.toastId) };
    }
  },
  tr = [];
let nr = { toasts: [] };
function Ss(l) {
  ((nr = ub(nr, l)),
    tr.forEach((s) => {
      s(nr);
    }));
}
function fb({ ...l }) {
  const s = cb(),
    r = (f) => Ss({ type: "UPDATE_TOAST", toast: { ...f, id: s } }),
    c = () => Ss({ type: "DISMISS_TOAST", toastId: s });
  return (
    Ss({
      type: "ADD_TOAST",
      toast: {
        ...l,
        id: s,
        open: !0,
        onOpenChange: (f) => {
          f || c();
        },
      },
    }),
    { id: s, dismiss: c, update: r }
  );
}
function db() {
  const [l, s] = w.useState(nr);
  return (
    w.useEffect(
      () => (
        tr.push(s),
        () => {
          const r = tr.indexOf(s);
          r > -1 && tr.splice(r, 1);
        }
      ),
      [l],
    ),
    {
      ...l,
      toast: fb,
      dismiss: (r) => Ss({ type: "DISMISS_TOAST", toastId: r }),
    }
  );
}
var xr = D0();
const mb = _0(xr);
function Pe(l, s, { checkForDefaultPrevented: r = !0 } = {}) {
  return function (f) {
    if ((l?.(f), r === !1 || !f.defaultPrevented)) return s?.(f);
  };
}
function l0(l, s) {
  if (typeof l == "function") return l(s);
  l != null && (l.current = s);
}
function vu(...l) {
  return (s) => {
    let r = !1;
    const c = l.map((f) => {
      const d = l0(f, s);
      return (!r && typeof d == "function" && (r = !0), d);
    });
    if (r)
      return () => {
        for (let f = 0; f < c.length; f++) {
          const d = c[f];
          typeof d == "function" ? d() : l0(l[f], null);
        }
      };
  };
}
function Gt(...l) {
  return w.useCallback(vu(...l), l);
}
function yr(l, s = []) {
  let r = [];
  function c(d, p) {
    const y = w.createContext(p),
      v = r.length;
    r = [...r, p];
    const h = (N) => {
      const { scope: j, children: M, ...U } = N,
        O = j?.[l]?.[v] || y,
        _ = w.useMemo(() => U, Object.values(U));
      return u.jsx(O.Provider, { value: _, children: M });
    };
    h.displayName = d + "Provider";
    function g(N, j) {
      const M = j?.[l]?.[v] || y,
        U = w.useContext(M);
      if (U) return U;
      if (p !== void 0) return p;
      throw new Error(`\`${N}\` must be used within \`${d}\``);
    }
    return [h, g];
  }
  const f = () => {
    const d = r.map((p) => w.createContext(p));
    return function (y) {
      const v = y?.[l] || d;
      return w.useMemo(() => ({ [`__scope${l}`]: { ...y, [l]: v } }), [y, v]);
    };
  };
  return ((f.scopeName = l), [c, hb(f, ...s)]);
}
function hb(...l) {
  const s = l[0];
  if (l.length === 1) return s;
  const r = () => {
    const c = l.map((f) => ({ useScope: f(), scopeName: f.scopeName }));
    return function (d) {
      const p = c.reduce((y, { useScope: v, scopeName: h }) => {
        const N = v(d)[`__scope${h}`];
        return { ...y, ...N };
      }, {});
      return w.useMemo(() => ({ [`__scope${s.scopeName}`]: p }), [p]);
    };
  };
  return ((r.scopeName = s.scopeName), r);
}
function au(l) {
  const s = pb(l),
    r = w.forwardRef((c, f) => {
      const { children: d, ...p } = c,
        y = w.Children.toArray(d),
        v = y.find(yb);
      if (v) {
        const h = v.props.children,
          g = y.map((N) =>
            N === v
              ? w.Children.count(h) > 1
                ? w.Children.only(null)
                : w.isValidElement(h)
                  ? h.props.children
                  : null
              : N,
          );
        return u.jsx(s, {
          ...p,
          ref: f,
          children: w.isValidElement(h) ? w.cloneElement(h, void 0, g) : null,
        });
      }
      return u.jsx(s, { ...p, ref: f, children: d });
    });
  return ((r.displayName = `${l}.Slot`), r);
}
function pb(l) {
  const s = w.forwardRef((r, c) => {
    const { children: f, ...d } = r;
    if (w.isValidElement(f)) {
      const p = vb(f),
        y = gb(d, f.props);
      return (
        f.type !== w.Fragment && (y.ref = c ? vu(c, p) : p),
        w.cloneElement(f, y)
      );
    }
    return w.Children.count(f) > 1 ? w.Children.only(null) : null;
  });
  return ((s.displayName = `${l}.SlotClone`), s);
}
var $0 = Symbol("radix.slottable");
function xb(l) {
  const s = ({ children: r }) => u.jsx(u.Fragment, { children: r });
  return ((s.displayName = `${l}.Slottable`), (s.__radixId = $0), s);
}
function yb(l) {
  return (
    w.isValidElement(l) &&
    typeof l.type == "function" &&
    "__radixId" in l.type &&
    l.type.__radixId === $0
  );
}
function gb(l, s) {
  const r = { ...s };
  for (const c in s) {
    const f = l[c],
      d = s[c];
    /^on[A-Z]/.test(c)
      ? f && d
        ? (r[c] = (...y) => {
            const v = d(...y);
            return (f(...y), v);
          })
        : f && (r[c] = f)
      : c === "style"
        ? (r[c] = { ...f, ...d })
        : c === "className" && (r[c] = [f, d].filter(Boolean).join(" "));
  }
  return { ...l, ...r };
}
function vb(l) {
  let s = Object.getOwnPropertyDescriptor(l.props, "ref")?.get,
    r = s && "isReactWarning" in s && s.isReactWarning;
  return r
    ? l.ref
    : ((s = Object.getOwnPropertyDescriptor(l, "ref")?.get),
      (r = s && "isReactWarning" in s && s.isReactWarning),
      r ? l.props.ref : l.props.ref || l.ref);
}
function bb(l) {
  const s = l + "CollectionProvider",
    [r, c] = yr(s),
    [f, d] = r(s, { collectionRef: { current: null }, itemMap: new Map() }),
    p = (O) => {
      const { scope: _, children: q } = O,
        Y = Wn.useRef(null),
        X = Wn.useRef(new Map()).current;
      return u.jsx(f, { scope: _, itemMap: X, collectionRef: Y, children: q });
    };
  p.displayName = s;
  const y = l + "CollectionSlot",
    v = au(y),
    h = Wn.forwardRef((O, _) => {
      const { scope: q, children: Y } = O,
        X = d(y, q),
        Z = Gt(_, X.collectionRef);
      return u.jsx(v, { ref: Z, children: Y });
    });
  h.displayName = y;
  const g = l + "CollectionItemSlot",
    N = "data-radix-collection-item",
    j = au(g),
    M = Wn.forwardRef((O, _) => {
      const { scope: q, children: Y, ...X } = O,
        Z = Wn.useRef(null),
        Q = Gt(_, Z),
        F = d(g, q);
      return (
        Wn.useEffect(
          () => (
            F.itemMap.set(Z, { ref: Z, ...X }),
            () => {
              F.itemMap.delete(Z);
            }
          ),
        ),
        u.jsx(j, { [N]: "", ref: Q, children: Y })
      );
    });
  M.displayName = g;
  function U(O) {
    const _ = d(l + "CollectionConsumer", O);
    return Wn.useCallback(() => {
      const Y = _.collectionRef.current;
      if (!Y) return [];
      const X = Array.from(Y.querySelectorAll(`[${N}]`));
      return Array.from(_.itemMap.values()).sort(
        (F, $) => X.indexOf(F.ref.current) - X.indexOf($.ref.current),
      );
    }, [_.collectionRef, _.itemMap]);
  }
  return [{ Provider: p, Slot: h, ItemSlot: M }, U, c];
}
var wb = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "select",
    "span",
    "svg",
    "ul",
  ],
  dt = wb.reduce((l, s) => {
    const r = au(`Primitive.${s}`),
      c = w.forwardRef((f, d) => {
        const { asChild: p, ...y } = f,
          v = p ? r : s;
        return (
          typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
          u.jsx(v, { ...y, ref: d })
        );
      });
    return ((c.displayName = `Primitive.${s}`), { ...l, [s]: c });
  }, {});
function W0(l, s) {
  l && xr.flushSync(() => l.dispatchEvent(s));
}
function el(l) {
  const s = w.useRef(l);
  return (
    w.useEffect(() => {
      s.current = l;
    }),
    w.useMemo(
      () =>
        (...r) =>
          s.current?.(...r),
      [],
    )
  );
}
function Sb(l, s = globalThis?.document) {
  const r = el(l);
  w.useEffect(() => {
    const c = (f) => {
      f.key === "Escape" && r(f);
    };
    return (
      s.addEventListener("keydown", c, { capture: !0 }),
      () => s.removeEventListener("keydown", c, { capture: !0 })
    );
  }, [r, s]);
}
var Nb = "DismissableLayer",
  su = "dismissableLayer.update",
  Eb = "dismissableLayer.pointerDownOutside",
  jb = "dismissableLayer.focusOutside",
  a0,
  I0 = w.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  bu = w.forwardRef((l, s) => {
    const {
        disableOutsidePointerEvents: r = !1,
        onEscapeKeyDown: c,
        onPointerDownOutside: f,
        onFocusOutside: d,
        onInteractOutside: p,
        onDismiss: y,
        ...v
      } = l,
      h = w.useContext(I0),
      [g, N] = w.useState(null),
      j = g?.ownerDocument ?? globalThis?.document,
      [, M] = w.useState({}),
      U = Gt(s, ($) => N($)),
      O = Array.from(h.layers),
      [_] = [...h.layersWithOutsidePointerEventsDisabled].slice(-1),
      q = O.indexOf(_),
      Y = g ? O.indexOf(g) : -1,
      X = h.layersWithOutsidePointerEventsDisabled.size > 0,
      Z = Y >= q,
      Q = Tb(($) => {
        const K = $.target,
          ce = [...h.branches].some((ye) => ye.contains(K));
        !Z || ce || (f?.($), p?.($), $.defaultPrevented || y?.());
      }, j),
      F = Ob(($) => {
        const K = $.target;
        [...h.branches].some((ye) => ye.contains(K)) ||
          (d?.($), p?.($), $.defaultPrevented || y?.());
      }, j);
    return (
      Sb(($) => {
        Y === h.layers.size - 1 &&
          (c?.($), !$.defaultPrevented && y && ($.preventDefault(), y()));
      }, j),
      w.useEffect(() => {
        if (g)
          return (
            r &&
              (h.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((a0 = j.body.style.pointerEvents),
                (j.body.style.pointerEvents = "none")),
              h.layersWithOutsidePointerEventsDisabled.add(g)),
            h.layers.add(g),
            s0(),
            () => {
              r &&
                h.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (j.body.style.pointerEvents = a0);
            }
          );
      }, [g, j, r, h]),
      w.useEffect(
        () => () => {
          g &&
            (h.layers.delete(g),
            h.layersWithOutsidePointerEventsDisabled.delete(g),
            s0());
        },
        [g, h],
      ),
      w.useEffect(() => {
        const $ = () => M({});
        return (
          document.addEventListener(su, $),
          () => document.removeEventListener(su, $)
        );
      }, []),
      u.jsx(dt.div, {
        ...v,
        ref: U,
        style: {
          pointerEvents: X ? (Z ? "auto" : "none") : void 0,
          ...l.style,
        },
        onFocusCapture: Pe(l.onFocusCapture, F.onFocusCapture),
        onBlurCapture: Pe(l.onBlurCapture, F.onBlurCapture),
        onPointerDownCapture: Pe(
          l.onPointerDownCapture,
          Q.onPointerDownCapture,
        ),
      })
    );
  });
bu.displayName = Nb;
var Ab = "DismissableLayerBranch",
  ep = w.forwardRef((l, s) => {
    const r = w.useContext(I0),
      c = w.useRef(null),
      f = Gt(s, c);
    return (
      w.useEffect(() => {
        const d = c.current;
        if (d)
          return (
            r.branches.add(d),
            () => {
              r.branches.delete(d);
            }
          );
      }, [r.branches]),
      u.jsx(dt.div, { ...l, ref: f })
    );
  });
ep.displayName = Ab;
function Tb(l, s = globalThis?.document) {
  const r = el(l),
    c = w.useRef(!1),
    f = w.useRef(() => {});
  return (
    w.useEffect(() => {
      const d = (y) => {
          if (y.target && !c.current) {
            let v = function () {
              tp(Eb, r, h, { discrete: !0 });
            };
            const h = { originalEvent: y };
            y.pointerType === "touch"
              ? (s.removeEventListener("click", f.current),
                (f.current = v),
                s.addEventListener("click", f.current, { once: !0 }))
              : v();
          } else s.removeEventListener("click", f.current);
          c.current = !1;
        },
        p = window.setTimeout(() => {
          s.addEventListener("pointerdown", d);
        }, 0);
      return () => {
        (window.clearTimeout(p),
          s.removeEventListener("pointerdown", d),
          s.removeEventListener("click", f.current));
      };
    }, [s, r]),
    { onPointerDownCapture: () => (c.current = !0) }
  );
}
function Ob(l, s = globalThis?.document) {
  const r = el(l),
    c = w.useRef(!1);
  return (
    w.useEffect(() => {
      const f = (d) => {
        d.target &&
          !c.current &&
          tp(jb, r, { originalEvent: d }, { discrete: !1 });
      };
      return (
        s.addEventListener("focusin", f),
        () => s.removeEventListener("focusin", f)
      );
    }, [s, r]),
    {
      onFocusCapture: () => (c.current = !0),
      onBlurCapture: () => (c.current = !1),
    }
  );
}
function s0() {
  const l = new CustomEvent(su);
  document.dispatchEvent(l);
}
function tp(l, s, r, { discrete: c }) {
  const f = r.originalEvent.target,
    d = new CustomEvent(l, { bubbles: !1, cancelable: !0, detail: r });
  (s && f.addEventListener(l, s, { once: !0 }),
    c ? W0(f, d) : f.dispatchEvent(d));
}
var Cb = bu,
  Rb = ep,
  tl = globalThis?.document ? w.useLayoutEffect : () => {},
  Mb = "Portal",
  wu = w.forwardRef((l, s) => {
    const { container: r, ...c } = l,
      [f, d] = w.useState(!1);
    tl(() => d(!0), []);
    const p = r || (f && globalThis?.document?.body);
    return p ? mb.createPortal(u.jsx(dt.div, { ...c, ref: s }), p) : null;
  });
wu.displayName = Mb;
function _b(l, s) {
  return w.useReducer((r, c) => s[r][c] ?? r, l);
}
var gr = (l) => {
  const { present: s, children: r } = l,
    c = Db(s),
    f =
      typeof r == "function" ? r({ present: c.isPresent }) : w.Children.only(r),
    d = Gt(c.ref, zb(f));
  return typeof r == "function" || c.isPresent
    ? w.cloneElement(f, { ref: d })
    : null;
};
gr.displayName = "Presence";
function Db(l) {
  const [s, r] = w.useState(),
    c = w.useRef(null),
    f = w.useRef(l),
    d = w.useRef("none"),
    p = l ? "mounted" : "unmounted",
    [y, v] = _b(p, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    w.useEffect(() => {
      const h = Fi(c.current);
      d.current = y === "mounted" ? h : "none";
    }, [y]),
    tl(() => {
      const h = c.current,
        g = f.current;
      if (g !== l) {
        const j = d.current,
          M = Fi(h);
        (l
          ? v("MOUNT")
          : M === "none" || h?.display === "none"
            ? v("UNMOUNT")
            : v(g && j !== M ? "ANIMATION_OUT" : "UNMOUNT"),
          (f.current = l));
      }
    }, [l, v]),
    tl(() => {
      if (s) {
        let h;
        const g = s.ownerDocument.defaultView ?? window,
          N = (M) => {
            const O = Fi(c.current).includes(CSS.escape(M.animationName));
            if (M.target === s && O && (v("ANIMATION_END"), !f.current)) {
              const _ = s.style.animationFillMode;
              ((s.style.animationFillMode = "forwards"),
                (h = g.setTimeout(() => {
                  s.style.animationFillMode === "forwards" &&
                    (s.style.animationFillMode = _);
                })));
            }
          },
          j = (M) => {
            M.target === s && (d.current = Fi(c.current));
          };
        return (
          s.addEventListener("animationstart", j),
          s.addEventListener("animationcancel", N),
          s.addEventListener("animationend", N),
          () => {
            (g.clearTimeout(h),
              s.removeEventListener("animationstart", j),
              s.removeEventListener("animationcancel", N),
              s.removeEventListener("animationend", N));
          }
        );
      } else v("ANIMATION_END");
    }, [s, v]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(y),
      ref: w.useCallback((h) => {
        ((c.current = h ? getComputedStyle(h) : null), r(h));
      }, []),
    }
  );
}
function Fi(l) {
  return l?.animationName || "none";
}
function zb(l) {
  let s = Object.getOwnPropertyDescriptor(l.props, "ref")?.get,
    r = s && "isReactWarning" in s && s.isReactWarning;
  return r
    ? l.ref
    : ((s = Object.getOwnPropertyDescriptor(l, "ref")?.get),
      (r = s && "isReactWarning" in s && s.isReactWarning),
      r ? l.props.ref : l.props.ref || l.ref);
}
var Ub = hu[" useInsertionEffect ".trim().toString()] || tl;
function kb({ prop: l, defaultProp: s, onChange: r = () => {}, caller: c }) {
  const [f, d, p] = Hb({ defaultProp: s, onChange: r }),
    y = l !== void 0,
    v = y ? l : f;
  {
    const g = w.useRef(l !== void 0);
    w.useEffect(() => {
      const N = g.current;
      (N !== y &&
        console.warn(
          `${c} is changing from ${N ? "controlled" : "uncontrolled"} to ${y ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`,
        ),
        (g.current = y));
    }, [y, c]);
  }
  const h = w.useCallback(
    (g) => {
      if (y) {
        const N = Lb(g) ? g(l) : g;
        N !== l && p.current?.(N);
      } else d(g);
    },
    [y, l, d, p],
  );
  return [v, h];
}
function Hb({ defaultProp: l, onChange: s }) {
  const [r, c] = w.useState(l),
    f = w.useRef(r),
    d = w.useRef(s);
  return (
    Ub(() => {
      d.current = s;
    }, [s]),
    w.useEffect(() => {
      f.current !== r && (d.current?.(r), (f.current = r));
    }, [r, f]),
    [r, c, d]
  );
}
function Lb(l) {
  return typeof l == "function";
}
var Bb = Object.freeze({
    position: "absolute",
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal",
  }),
  qb = "VisuallyHidden",
  vr = w.forwardRef((l, s) =>
    u.jsx(dt.span, { ...l, ref: s, style: { ...Bb, ...l.style } }),
  );
vr.displayName = qb;
var Gb = vr,
  Su = "ToastProvider",
  [Nu, Xb, Yb] = bb("Toast"),
  [np] = yr("Toast", [Yb]),
  [Qb, br] = np(Su),
  lp = (l) => {
    const {
        __scopeToast: s,
        label: r = "Notification",
        duration: c = 5e3,
        swipeDirection: f = "right",
        swipeThreshold: d = 50,
        children: p,
      } = l,
      [y, v] = w.useState(null),
      [h, g] = w.useState(0),
      N = w.useRef(!1),
      j = w.useRef(!1);
    return (
      r.trim() ||
        console.error(
          `Invalid prop \`label\` supplied to \`${Su}\`. Expected non-empty \`string\`.`,
        ),
      u.jsx(Nu.Provider, {
        scope: s,
        children: u.jsx(Qb, {
          scope: s,
          label: r,
          duration: c,
          swipeDirection: f,
          swipeThreshold: d,
          toastCount: h,
          viewport: y,
          onViewportChange: v,
          onToastAdd: w.useCallback(() => g((M) => M + 1), []),
          onToastRemove: w.useCallback(() => g((M) => M - 1), []),
          isFocusedToastEscapeKeyDownRef: N,
          isClosePausedRef: j,
          children: p,
        }),
      })
    );
  };
lp.displayName = Su;
var ap = "ToastViewport",
  Vb = ["F8"],
  iu = "toast.viewportPause",
  ru = "toast.viewportResume",
  sp = w.forwardRef((l, s) => {
    const {
        __scopeToast: r,
        hotkey: c = Vb,
        label: f = "Notifications ({hotkey})",
        ...d
      } = l,
      p = br(ap, r),
      y = Xb(r),
      v = w.useRef(null),
      h = w.useRef(null),
      g = w.useRef(null),
      N = w.useRef(null),
      j = Gt(s, N, p.onViewportChange),
      M = c.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
      U = p.toastCount > 0;
    (w.useEffect(() => {
      const _ = (q) => {
        c.length !== 0 &&
          c.every((X) => q[X] || q.code === X) &&
          N.current?.focus();
      };
      return (
        document.addEventListener("keydown", _),
        () => document.removeEventListener("keydown", _)
      );
    }, [c]),
      w.useEffect(() => {
        const _ = v.current,
          q = N.current;
        if (U && _ && q) {
          const Y = () => {
              if (!p.isClosePausedRef.current) {
                const F = new CustomEvent(iu);
                (q.dispatchEvent(F), (p.isClosePausedRef.current = !0));
              }
            },
            X = () => {
              if (p.isClosePausedRef.current) {
                const F = new CustomEvent(ru);
                (q.dispatchEvent(F), (p.isClosePausedRef.current = !1));
              }
            },
            Z = (F) => {
              !_.contains(F.relatedTarget) && X();
            },
            Q = () => {
              _.contains(document.activeElement) || X();
            };
          return (
            _.addEventListener("focusin", Y),
            _.addEventListener("focusout", Z),
            _.addEventListener("pointermove", Y),
            _.addEventListener("pointerleave", Q),
            window.addEventListener("blur", Y),
            window.addEventListener("focus", X),
            () => {
              (_.removeEventListener("focusin", Y),
                _.removeEventListener("focusout", Z),
                _.removeEventListener("pointermove", Y),
                _.removeEventListener("pointerleave", Q),
                window.removeEventListener("blur", Y),
                window.removeEventListener("focus", X));
            }
          );
        }
      }, [U, p.isClosePausedRef]));
    const O = w.useCallback(
      ({ tabbingDirection: _ }) => {
        const Y = y().map((X) => {
          const Z = X.ref.current,
            Q = [Z, ...a1(Z)];
          return _ === "forwards" ? Q : Q.reverse();
        });
        return (_ === "forwards" ? Y.reverse() : Y).flat();
      },
      [y],
    );
    return (
      w.useEffect(() => {
        const _ = N.current;
        if (_) {
          const q = (Y) => {
            const X = Y.altKey || Y.ctrlKey || Y.metaKey;
            if (Y.key === "Tab" && !X) {
              const Q = document.activeElement,
                F = Y.shiftKey;
              if (Y.target === _ && F) {
                h.current?.focus();
                return;
              }
              const ce = O({ tabbingDirection: F ? "backwards" : "forwards" }),
                ye = ce.findIndex((be) => be === Q);
              Fc(ce.slice(ye + 1))
                ? Y.preventDefault()
                : F
                  ? h.current?.focus()
                  : g.current?.focus();
            }
          };
          return (
            _.addEventListener("keydown", q),
            () => _.removeEventListener("keydown", q)
          );
        }
      }, [y, O]),
      u.jsxs(Rb, {
        ref: v,
        role: "region",
        "aria-label": f.replace("{hotkey}", M),
        tabIndex: -1,
        style: { pointerEvents: U ? void 0 : "none" },
        children: [
          U &&
            u.jsx(ou, {
              ref: h,
              onFocusFromOutsideViewport: () => {
                const _ = O({ tabbingDirection: "forwards" });
                Fc(_);
              },
            }),
          u.jsx(Nu.Slot, {
            scope: r,
            children: u.jsx(dt.ol, { tabIndex: -1, ...d, ref: j }),
          }),
          U &&
            u.jsx(ou, {
              ref: g,
              onFocusFromOutsideViewport: () => {
                const _ = O({ tabbingDirection: "backwards" });
                Fc(_);
              },
            }),
        ],
      })
    );
  });
sp.displayName = ap;
var ip = "ToastFocusProxy",
  ou = w.forwardRef((l, s) => {
    const { __scopeToast: r, onFocusFromOutsideViewport: c, ...f } = l,
      d = br(ip, r);
    return u.jsx(vr, {
      tabIndex: 0,
      ...f,
      ref: s,
      style: { position: "fixed" },
      onFocus: (p) => {
        const y = p.relatedTarget;
        !d.viewport?.contains(y) && c();
      },
    });
  });
ou.displayName = ip;
var Rs = "Toast",
  Zb = "toast.swipeStart",
  Kb = "toast.swipeMove",
  Pb = "toast.swipeCancel",
  Fb = "toast.swipeEnd",
  rp = w.forwardRef((l, s) => {
    const { forceMount: r, open: c, defaultOpen: f, onOpenChange: d, ...p } = l,
      [y, v] = kb({ prop: c, defaultProp: f ?? !0, onChange: d, caller: Rs });
    return u.jsx(gr, {
      present: r || y,
      children: u.jsx(Wb, {
        open: y,
        ...p,
        ref: s,
        onClose: () => v(!1),
        onPause: el(l.onPause),
        onResume: el(l.onResume),
        onSwipeStart: Pe(l.onSwipeStart, (h) => {
          h.currentTarget.setAttribute("data-swipe", "start");
        }),
        onSwipeMove: Pe(l.onSwipeMove, (h) => {
          const { x: g, y: N } = h.detail.delta;
          (h.currentTarget.setAttribute("data-swipe", "move"),
            h.currentTarget.style.setProperty(
              "--radix-toast-swipe-move-x",
              `${g}px`,
            ),
            h.currentTarget.style.setProperty(
              "--radix-toast-swipe-move-y",
              `${N}px`,
            ));
        }),
        onSwipeCancel: Pe(l.onSwipeCancel, (h) => {
          (h.currentTarget.setAttribute("data-swipe", "cancel"),
            h.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
            h.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
            h.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
            h.currentTarget.style.removeProperty("--radix-toast-swipe-end-y"));
        }),
        onSwipeEnd: Pe(l.onSwipeEnd, (h) => {
          const { x: g, y: N } = h.detail.delta;
          (h.currentTarget.setAttribute("data-swipe", "end"),
            h.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
            h.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
            h.currentTarget.style.setProperty(
              "--radix-toast-swipe-end-x",
              `${g}px`,
            ),
            h.currentTarget.style.setProperty(
              "--radix-toast-swipe-end-y",
              `${N}px`,
            ),
            v(!1));
        }),
      }),
    });
  });
rp.displayName = Rs;
var [Jb, $b] = np(Rs, { onClose() {} }),
  Wb = w.forwardRef((l, s) => {
    const {
        __scopeToast: r,
        type: c = "foreground",
        duration: f,
        open: d,
        onClose: p,
        onEscapeKeyDown: y,
        onPause: v,
        onResume: h,
        onSwipeStart: g,
        onSwipeMove: N,
        onSwipeCancel: j,
        onSwipeEnd: M,
        ...U
      } = l,
      O = br(Rs, r),
      [_, q] = w.useState(null),
      Y = Gt(s, (W) => q(W)),
      X = w.useRef(null),
      Z = w.useRef(null),
      Q = f || O.duration,
      F = w.useRef(0),
      $ = w.useRef(Q),
      K = w.useRef(0),
      { onToastAdd: ce, onToastRemove: ye } = O,
      be = el(() => {
        (_?.contains(document.activeElement) && O.viewport?.focus(), p());
      }),
      de = w.useCallback(
        (W) => {
          !W ||
            W === 1 / 0 ||
            (window.clearTimeout(K.current),
            (F.current = new Date().getTime()),
            (K.current = window.setTimeout(be, W)));
        },
        [be],
      );
    (w.useEffect(() => {
      const W = O.viewport;
      if (W) {
        const fe = () => {
            (de($.current), h?.());
          },
          C = () => {
            const G = new Date().getTime() - F.current;
            (($.current = $.current - G),
              window.clearTimeout(K.current),
              v?.());
          };
        return (
          W.addEventListener(iu, C),
          W.addEventListener(ru, fe),
          () => {
            (W.removeEventListener(iu, C), W.removeEventListener(ru, fe));
          }
        );
      }
    }, [O.viewport, Q, v, h, de]),
      w.useEffect(() => {
        d && !O.isClosePausedRef.current && de(Q);
      }, [d, Q, O.isClosePausedRef, de]),
      w.useEffect(() => (ce(), () => ye()), [ce, ye]));
    const Se = w.useMemo(() => (_ ? hp(_) : null), [_]);
    return O.viewport
      ? u.jsxs(u.Fragment, {
          children: [
            Se &&
              u.jsx(Ib, {
                __scopeToast: r,
                role: "status",
                "aria-live": c === "foreground" ? "assertive" : "polite",
                children: Se,
              }),
            u.jsx(Jb, {
              scope: r,
              onClose: be,
              children: xr.createPortal(
                u.jsx(Nu.ItemSlot, {
                  scope: r,
                  children: u.jsx(Cb, {
                    asChild: !0,
                    onEscapeKeyDown: Pe(y, () => {
                      (O.isFocusedToastEscapeKeyDownRef.current || be(),
                        (O.isFocusedToastEscapeKeyDownRef.current = !1));
                    }),
                    children: u.jsx(dt.li, {
                      tabIndex: 0,
                      "data-state": d ? "open" : "closed",
                      "data-swipe-direction": O.swipeDirection,
                      ...U,
                      ref: Y,
                      style: {
                        userSelect: "none",
                        touchAction: "none",
                        ...l.style,
                      },
                      onKeyDown: Pe(l.onKeyDown, (W) => {
                        W.key === "Escape" &&
                          (y?.(W.nativeEvent),
                          W.nativeEvent.defaultPrevented ||
                            ((O.isFocusedToastEscapeKeyDownRef.current = !0),
                            be()));
                      }),
                      onPointerDown: Pe(l.onPointerDown, (W) => {
                        W.button === 0 &&
                          (X.current = { x: W.clientX, y: W.clientY });
                      }),
                      onPointerMove: Pe(l.onPointerMove, (W) => {
                        if (!X.current) return;
                        const fe = W.clientX - X.current.x,
                          C = W.clientY - X.current.y,
                          G = !!Z.current,
                          V = ["left", "right"].includes(O.swipeDirection),
                          se = ["left", "up"].includes(O.swipeDirection)
                            ? Math.min
                            : Math.max,
                          b = V ? se(0, fe) : 0,
                          B = V ? 0 : se(0, C),
                          J = W.pointerType === "touch" ? 10 : 2,
                          P = { x: b, y: B },
                          le = { originalEvent: W, delta: P };
                        G
                          ? ((Z.current = P), Ji(Kb, N, le, { discrete: !1 }))
                          : i0(P, O.swipeDirection, J)
                            ? ((Z.current = P),
                              Ji(Zb, g, le, { discrete: !1 }),
                              W.target.setPointerCapture(W.pointerId))
                            : (Math.abs(fe) > J || Math.abs(C) > J) &&
                              (X.current = null);
                      }),
                      onPointerUp: Pe(l.onPointerUp, (W) => {
                        const fe = Z.current,
                          C = W.target;
                        if (
                          (C.hasPointerCapture(W.pointerId) &&
                            C.releasePointerCapture(W.pointerId),
                          (Z.current = null),
                          (X.current = null),
                          fe)
                        ) {
                          const G = W.currentTarget,
                            V = { originalEvent: W, delta: fe };
                          (i0(fe, O.swipeDirection, O.swipeThreshold)
                            ? Ji(Fb, M, V, { discrete: !0 })
                            : Ji(Pb, j, V, { discrete: !0 }),
                            G.addEventListener(
                              "click",
                              (se) => se.preventDefault(),
                              { once: !0 },
                            ));
                        }
                      }),
                    }),
                  }),
                }),
                O.viewport,
              ),
            }),
          ],
        })
      : null;
  }),
  Ib = (l) => {
    const { __scopeToast: s, children: r, ...c } = l,
      f = br(Rs, s),
      [d, p] = w.useState(!1),
      [y, v] = w.useState(!1);
    return (
      n1(() => p(!0)),
      w.useEffect(() => {
        const h = window.setTimeout(() => v(!0), 1e3);
        return () => window.clearTimeout(h);
      }, []),
      y
        ? null
        : u.jsx(wu, {
            asChild: !0,
            children: u.jsx(vr, {
              ...c,
              children:
                d && u.jsxs(u.Fragment, { children: [f.label, " ", r] }),
            }),
          })
    );
  },
  e1 = "ToastTitle",
  op = w.forwardRef((l, s) => {
    const { __scopeToast: r, ...c } = l;
    return u.jsx(dt.div, { ...c, ref: s });
  });
op.displayName = e1;
var t1 = "ToastDescription",
  cp = w.forwardRef((l, s) => {
    const { __scopeToast: r, ...c } = l;
    return u.jsx(dt.div, { ...c, ref: s });
  });
cp.displayName = t1;
var up = "ToastAction",
  fp = w.forwardRef((l, s) => {
    const { altText: r, ...c } = l;
    return r.trim()
      ? u.jsx(mp, {
          altText: r,
          asChild: !0,
          children: u.jsx(Eu, { ...c, ref: s }),
        })
      : (console.error(
          `Invalid prop \`altText\` supplied to \`${up}\`. Expected non-empty \`string\`.`,
        ),
        null);
  });
fp.displayName = up;
var dp = "ToastClose",
  Eu = w.forwardRef((l, s) => {
    const { __scopeToast: r, ...c } = l,
      f = $b(dp, r);
    return u.jsx(mp, {
      asChild: !0,
      children: u.jsx(dt.button, {
        type: "button",
        ...c,
        ref: s,
        onClick: Pe(l.onClick, f.onClose),
      }),
    });
  });
Eu.displayName = dp;
var mp = w.forwardRef((l, s) => {
  const { __scopeToast: r, altText: c, ...f } = l;
  return u.jsx(dt.div, {
    "data-radix-toast-announce-exclude": "",
    "data-radix-toast-announce-alt": c || void 0,
    ...f,
    ref: s,
  });
});
function hp(l) {
  const s = [];
  return (
    Array.from(l.childNodes).forEach((c) => {
      if (
        (c.nodeType === c.TEXT_NODE && c.textContent && s.push(c.textContent),
        l1(c))
      ) {
        const f = c.ariaHidden || c.hidden || c.style.display === "none",
          d = c.dataset.radixToastAnnounceExclude === "";
        if (!f)
          if (d) {
            const p = c.dataset.radixToastAnnounceAlt;
            p && s.push(p);
          } else s.push(...hp(c));
      }
    }),
    s
  );
}
function Ji(l, s, r, { discrete: c }) {
  const f = r.originalEvent.currentTarget,
    d = new CustomEvent(l, { bubbles: !0, cancelable: !0, detail: r });
  (s && f.addEventListener(l, s, { once: !0 }),
    c ? W0(f, d) : f.dispatchEvent(d));
}
var i0 = (l, s, r = 0) => {
  const c = Math.abs(l.x),
    f = Math.abs(l.y),
    d = c > f;
  return s === "left" || s === "right" ? d && c > r : !d && f > r;
};
function n1(l = () => {}) {
  const s = el(l);
  tl(() => {
    let r = 0,
      c = 0;
    return (
      (r = window.requestAnimationFrame(
        () => (c = window.requestAnimationFrame(s)),
      )),
      () => {
        (window.cancelAnimationFrame(r), window.cancelAnimationFrame(c));
      }
    );
  }, [s]);
}
function l1(l) {
  return l.nodeType === l.ELEMENT_NODE;
}
function a1(l) {
  const s = [],
    r = document.createTreeWalker(l, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (c) => {
        const f = c.tagName === "INPUT" && c.type === "hidden";
        return c.disabled || c.hidden || f
          ? NodeFilter.FILTER_SKIP
          : c.tabIndex >= 0
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP;
      },
    });
  for (; r.nextNode(); ) s.push(r.currentNode);
  return s;
}
function Fc(l) {
  const s = document.activeElement;
  return l.some((r) =>
    r === s ? !0 : (r.focus(), document.activeElement !== s),
  );
}
var s1 = lp,
  pp = sp,
  xp = rp,
  yp = op,
  gp = cp,
  vp = fp,
  bp = Eu;
function wp(l) {
  var s,
    r,
    c = "";
  if (typeof l == "string" || typeof l == "number") c += l;
  else if (typeof l == "object")
    if (Array.isArray(l)) {
      var f = l.length;
      for (s = 0; s < f; s++)
        l[s] && (r = wp(l[s])) && (c && (c += " "), (c += r));
    } else for (r in l) l[r] && (c && (c += " "), (c += r));
  return c;
}
function Sp() {
  for (var l, s, r = 0, c = "", f = arguments.length; r < f; r++)
    (l = arguments[r]) && (s = wp(l)) && (c && (c += " "), (c += s));
  return c;
}
const r0 = (l) => (typeof l == "boolean" ? `${l}` : l === 0 ? "0" : l),
  o0 = Sp,
  Np = (l, s) => (r) => {
    var c;
    if (s?.variants == null) return o0(l, r?.class, r?.className);
    const { variants: f, defaultVariants: d } = s,
      p = Object.keys(f).map((h) => {
        const g = r?.[h],
          N = d?.[h];
        if (g === null) return null;
        const j = r0(g) || r0(N);
        return f[h][j];
      }),
      y =
        r &&
        Object.entries(r).reduce((h, g) => {
          let [N, j] = g;
          return (j === void 0 || (h[N] = j), h);
        }, {}),
      v =
        s == null || (c = s.compoundVariants) === null || c === void 0
          ? void 0
          : c.reduce((h, g) => {
              let { class: N, className: j, ...M } = g;
              return Object.entries(M).every((U) => {
                let [O, _] = U;
                return Array.isArray(_)
                  ? _.includes({ ...d, ...y }[O])
                  : { ...d, ...y }[O] === _;
              })
                ? [...h, N, j]
                : h;
            }, []);
    return o0(l, p, v, r?.class, r?.className);
  };
const i1 = (l) => l.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  r1 = (l) =>
    l.replace(/^([A-Z])|[\s-_]+(\w)/g, (s, r, c) =>
      c ? c.toUpperCase() : r.toLowerCase(),
    ),
  c0 = (l) => {
    const s = r1(l);
    return s.charAt(0).toUpperCase() + s.slice(1);
  },
  Ep = (...l) =>
    l
      .filter((s, r, c) => !!s && s.trim() !== "" && c.indexOf(s) === r)
      .join(" ")
      .trim(),
  o1 = (l) => {
    for (const s in l)
      if (s.startsWith("aria-") || s === "role" || s === "title") return !0;
  };
var c1 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
const u1 = w.forwardRef(
  (
    {
      color: l = "currentColor",
      size: s = 24,
      strokeWidth: r = 2,
      absoluteStrokeWidth: c,
      className: f = "",
      children: d,
      iconNode: p,
      ...y
    },
    v,
  ) =>
    w.createElement(
      "svg",
      {
        ref: v,
        ...c1,
        width: s,
        height: s,
        stroke: l,
        strokeWidth: c ? (Number(r) * 24) / Number(s) : r,
        className: Ep("lucide", f),
        ...(!d && !o1(y) && { "aria-hidden": "true" }),
        ...y,
      },
      [
        ...p.map(([h, g]) => w.createElement(h, g)),
        ...(Array.isArray(d) ? d : [d]),
      ],
    ),
);
const _e = (l, s) => {
  const r = w.forwardRef(({ className: c, ...f }, d) =>
    w.createElement(u1, {
      ref: d,
      iconNode: s,
      className: Ep(`lucide-${i1(c0(l))}`, `lucide-${l}`, c),
      ...f,
    }),
  );
  return ((r.displayName = c0(l)), r);
};
const f1 = [
    [
      "path",
      {
        d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",
        key: "169zse",
      },
    ],
  ],
  d1 = _e("activity", f1);
const m1 = [
    ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
    ["path", { d: "M19 12H5", key: "x3x0zl" }],
  ],
  h1 = _e("arrow-left", m1);
const p1 = [
    [
      "path",
      {
        d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
        key: "1yiouv",
      },
    ],
    ["circle", { cx: "12", cy: "8", r: "6", key: "1vp47v" }],
  ],
  x1 = _e("award", p1);
const y1 = [
    ["path", { d: "M5 21v-6", key: "1hz6c0" }],
    ["path", { d: "M12 21V3", key: "1lcnhd" }],
    ["path", { d: "M19 21V9", key: "unv183" }],
  ],
  jp = _e("chart-no-axes-column", y1);
const g1 = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
    ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }],
  ],
  v1 = _e("circle-alert", g1);
const b1 = [
    ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
    ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }],
  ],
  pa = _e("circle-check-big", b1);
const w1 = [
    ["path", { d: "M12 6v6l4 2", key: "mmk7yg" }],
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ],
  u0 = _e("clock", w1);
const S1 = [
    ["circle", { cx: "8", cy: "8", r: "6", key: "3yglwk" }],
    ["path", { d: "M18.09 10.37A6 6 0 1 1 10.34 18", key: "t5s6rm" }],
    ["path", { d: "M7 6h1v4", key: "1obek4" }],
    ["path", { d: "m16.71 13.88.7.71-2.82 2.82", key: "1rbuyh" }],
  ],
  Ap = _e("coins", S1);
const N1 = [
    [
      "rect",
      { width: "20", height: "14", x: "2", y: "5", rx: "2", key: "ynyp8z" },
    ],
    ["line", { x1: "2", x2: "22", y1: "10", y2: "10", key: "1b3vmo" }],
  ],
  E1 = _e("credit-card", N1);
const j1 = [
    [
      "path",
      {
        d: "M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",
        key: "1vdc57",
      },
    ],
    ["path", { d: "M5 21h14", key: "11awu3" }],
  ],
  qt = _e("crown", j1);
const A1 = [
    ["line", { x1: "12", x2: "12", y1: "2", y2: "22", key: "7eqyqh" }],
    [
      "path",
      { d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6", key: "1b0p4s" },
    ],
  ],
  T1 = _e("dollar-sign", A1);
const O1 = [
    ["path", { d: "M21.54 15H17a2 2 0 0 0-2 2v4.54", key: "1djwo0" }],
    [
      "path",
      {
        d: "M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17",
        key: "1tzkfa",
      },
    ],
    [
      "path",
      {
        d: "M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05",
        key: "14pb5j",
      },
    ],
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ],
  C1 = _e("earth", O1);
const R1 = [
    [
      "path",
      {
        d: "M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4",
        key: "1slcih",
      },
    ],
  ],
  M1 = _e("flame", R1);
const _1 = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    [
      "path",
      { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" },
    ],
    ["path", { d: "M2 12h20", key: "9i4pu4" }],
  ],
  wr = _e("globe", _1);
const D1 = [
    ["path", { d: "M10 18v-7", key: "wt116b" }],
    [
      "path",
      {
        d: "M11.12 2.198a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949z",
        key: "1m329m",
      },
    ],
    ["path", { d: "M14 18v-7", key: "vav6t3" }],
    ["path", { d: "M18 18v-7", key: "aexdmj" }],
    ["path", { d: "M3 22h18", key: "8prr45" }],
    ["path", { d: "M6 18v-7", key: "1ivflk" }],
  ],
  z1 = _e("landmark", D1);
const U1 = [
    ["path", { d: "M4 5h16", key: "1tepv9" }],
    ["path", { d: "M4 12h16", key: "1lakjw" }],
    ["path", { d: "M4 19h16", key: "1djgab" }],
  ],
  k1 = _e("menu", U1);
const H1 = [
    [
      "path",
      {
        d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",
        key: "1sd12s",
      },
    ],
  ],
  It = _e("message-circle", H1);
const L1 = [
    [
      "path",
      {
        d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
        key: "9njp5v",
      },
    ],
  ],
  nl = _e("phone", L1);
const B1 = [
    [
      "path",
      {
        d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",
        key: "v9h5vc",
      },
    ],
    ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
    [
      "path",
      {
        d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",
        key: "3uifl3",
      },
    ],
    ["path", { d: "M8 16H3v5", key: "1cv678" }],
  ],
  Tp = _e("refresh-cw", B1);
const q1 = [
    [
      "path",
      {
        d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
        key: "1ffxy3",
      },
    ],
    ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }],
  ],
  Op = _e("send", q1);
const G1 = [
    [
      "path",
      {
        d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
        key: "oel41y",
      },
    ],
  ],
  Tl = _e("shield", G1);
const X1 = [
    [
      "path",
      {
        d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
        key: "r04s7s",
      },
    ],
  ],
  ju = _e("star", X1);
const Y1 = [
    ["path", { d: "M16 17h6v-6", key: "t6n2it" }],
    ["path", { d: "m22 17-8.5-8.5-5 5L2 7", key: "x473p" }],
  ],
  Ns = _e("trending-down", Y1);
const Q1 = [
    ["path", { d: "M16 7h6v6", key: "box55l" }],
    ["path", { d: "m22 7-8.5 8.5-5-5L2 17", key: "1t1m79" }],
  ],
  In = _e("trending-up", Q1);
const V1 = [
    ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
    ["path", { d: "M16 3.128a4 4 0 0 1 0 7.744", key: "16gr8j" }],
    ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
    ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ],
  Cp = _e("users", V1);
const Z1 = [
    ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
    ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }],
  ],
  K1 = _e("user", Z1);
const P1 = [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ],
  Rp = _e("x", P1);
const F1 = [
    [
      "path",
      {
        d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
        key: "1xq2db",
      },
    ],
  ],
  J1 = _e("zap", F1),
  $1 = (l, s) => {
    const r = new Array(l.length + s.length);
    for (let c = 0; c < l.length; c++) r[c] = l[c];
    for (let c = 0; c < s.length; c++) r[l.length + c] = s[c];
    return r;
  },
  W1 = (l, s) => ({ classGroupId: l, validator: s }),
  Mp = (l = new Map(), s = null, r) => ({
    nextPart: l,
    validators: s,
    classGroupId: r,
  }),
  sr = "-",
  f0 = [],
  I1 = "arbitrary..",
  ew = (l) => {
    const s = nw(l),
      { conflictingClassGroups: r, conflictingClassGroupModifiers: c } = l;
    return {
      getClassGroupId: (p) => {
        if (p.startsWith("[") && p.endsWith("]")) return tw(p);
        const y = p.split(sr),
          v = y[0] === "" && y.length > 1 ? 1 : 0;
        return _p(y, v, s);
      },
      getConflictingClassGroupIds: (p, y) => {
        if (y) {
          const v = c[p],
            h = r[p];
          return v ? (h ? $1(h, v) : v) : h || f0;
        }
        return r[p] || f0;
      },
    };
  },
  _p = (l, s, r) => {
    if (l.length - s === 0) return r.classGroupId;
    const f = l[s],
      d = r.nextPart.get(f);
    if (d) {
      const h = _p(l, s + 1, d);
      if (h) return h;
    }
    const p = r.validators;
    if (p === null) return;
    const y = s === 0 ? l.join(sr) : l.slice(s).join(sr),
      v = p.length;
    for (let h = 0; h < v; h++) {
      const g = p[h];
      if (g.validator(y)) return g.classGroupId;
    }
  },
  tw = (l) =>
    l.slice(1, -1).indexOf(":") === -1
      ? void 0
      : (() => {
          const s = l.slice(1, -1),
            r = s.indexOf(":"),
            c = s.slice(0, r);
          return c ? I1 + c : void 0;
        })(),
  nw = (l) => {
    const { theme: s, classGroups: r } = l;
    return lw(r, s);
  },
  lw = (l, s) => {
    const r = Mp();
    for (const c in l) {
      const f = l[c];
      Au(f, r, c, s);
    }
    return r;
  },
  Au = (l, s, r, c) => {
    const f = l.length;
    for (let d = 0; d < f; d++) {
      const p = l[d];
      aw(p, s, r, c);
    }
  },
  aw = (l, s, r, c) => {
    if (typeof l == "string") {
      sw(l, s, r);
      return;
    }
    if (typeof l == "function") {
      iw(l, s, r, c);
      return;
    }
    rw(l, s, r, c);
  },
  sw = (l, s, r) => {
    const c = l === "" ? s : Dp(s, l);
    c.classGroupId = r;
  },
  iw = (l, s, r, c) => {
    if (ow(l)) {
      Au(l(c), s, r, c);
      return;
    }
    (s.validators === null && (s.validators = []), s.validators.push(W1(r, l)));
  },
  rw = (l, s, r, c) => {
    const f = Object.entries(l),
      d = f.length;
    for (let p = 0; p < d; p++) {
      const [y, v] = f[p];
      Au(v, Dp(s, y), r, c);
    }
  },
  Dp = (l, s) => {
    let r = l;
    const c = s.split(sr),
      f = c.length;
    for (let d = 0; d < f; d++) {
      const p = c[d];
      let y = r.nextPart.get(p);
      (y || ((y = Mp()), r.nextPart.set(p, y)), (r = y));
    }
    return r;
  },
  ow = (l) => "isThemeGetter" in l && l.isThemeGetter === !0,
  cw = (l) => {
    if (l < 1) return { get: () => {}, set: () => {} };
    let s = 0,
      r = Object.create(null),
      c = Object.create(null);
    const f = (d, p) => {
      ((r[d] = p), s++, s > l && ((s = 0), (c = r), (r = Object.create(null))));
    };
    return {
      get(d) {
        let p = r[d];
        if (p !== void 0) return p;
        if ((p = c[d]) !== void 0) return (f(d, p), p);
      },
      set(d, p) {
        d in r ? (r[d] = p) : f(d, p);
      },
    };
  },
  cu = "!",
  d0 = ":",
  uw = [],
  m0 = (l, s, r, c, f) => ({
    modifiers: l,
    hasImportantModifier: s,
    baseClassName: r,
    maybePostfixModifierPosition: c,
    isExternal: f,
  }),
  fw = (l) => {
    const { prefix: s, experimentalParseClassName: r } = l;
    let c = (f) => {
      const d = [];
      let p = 0,
        y = 0,
        v = 0,
        h;
      const g = f.length;
      for (let O = 0; O < g; O++) {
        const _ = f[O];
        if (p === 0 && y === 0) {
          if (_ === d0) {
            (d.push(f.slice(v, O)), (v = O + 1));
            continue;
          }
          if (_ === "/") {
            h = O;
            continue;
          }
        }
        _ === "[" ? p++ : _ === "]" ? p-- : _ === "(" ? y++ : _ === ")" && y--;
      }
      const N = d.length === 0 ? f : f.slice(v);
      let j = N,
        M = !1;
      N.endsWith(cu)
        ? ((j = N.slice(0, -1)), (M = !0))
        : N.startsWith(cu) && ((j = N.slice(1)), (M = !0));
      const U = h && h > v ? h - v : void 0;
      return m0(d, M, j, U);
    };
    if (s) {
      const f = s + d0,
        d = c;
      c = (p) =>
        p.startsWith(f) ? d(p.slice(f.length)) : m0(uw, !1, p, void 0, !0);
    }
    if (r) {
      const f = c;
      c = (d) => r({ className: d, parseClassName: f });
    }
    return c;
  },
  dw = (l) => {
    const s = new Map();
    return (
      l.orderSensitiveModifiers.forEach((r, c) => {
        s.set(r, 1e6 + c);
      }),
      (r) => {
        const c = [];
        let f = [];
        for (let d = 0; d < r.length; d++) {
          const p = r[d],
            y = p[0] === "[",
            v = s.has(p);
          y || v
            ? (f.length > 0 && (f.sort(), c.push(...f), (f = [])), c.push(p))
            : f.push(p);
        }
        return (f.length > 0 && (f.sort(), c.push(...f)), c);
      }
    );
  },
  mw = (l) => ({
    cache: cw(l.cacheSize),
    parseClassName: fw(l),
    sortModifiers: dw(l),
    ...ew(l),
  }),
  hw = /\s+/,
  pw = (l, s) => {
    const {
        parseClassName: r,
        getClassGroupId: c,
        getConflictingClassGroupIds: f,
        sortModifiers: d,
      } = s,
      p = [],
      y = l.trim().split(hw);
    let v = "";
    for (let h = y.length - 1; h >= 0; h -= 1) {
      const g = y[h],
        {
          isExternal: N,
          modifiers: j,
          hasImportantModifier: M,
          baseClassName: U,
          maybePostfixModifierPosition: O,
        } = r(g);
      if (N) {
        v = g + (v.length > 0 ? " " + v : v);
        continue;
      }
      let _ = !!O,
        q = c(_ ? U.substring(0, O) : U);
      if (!q) {
        if (!_) {
          v = g + (v.length > 0 ? " " + v : v);
          continue;
        }
        if (((q = c(U)), !q)) {
          v = g + (v.length > 0 ? " " + v : v);
          continue;
        }
        _ = !1;
      }
      const Y = j.length === 0 ? "" : j.length === 1 ? j[0] : d(j).join(":"),
        X = M ? Y + cu : Y,
        Z = X + q;
      if (p.indexOf(Z) > -1) continue;
      p.push(Z);
      const Q = f(q, _);
      for (let F = 0; F < Q.length; ++F) {
        const $ = Q[F];
        p.push(X + $);
      }
      v = g + (v.length > 0 ? " " + v : v);
    }
    return v;
  },
  xw = (...l) => {
    let s = 0,
      r,
      c,
      f = "";
    for (; s < l.length; )
      (r = l[s++]) && (c = zp(r)) && (f && (f += " "), (f += c));
    return f;
  },
  zp = (l) => {
    if (typeof l == "string") return l;
    let s,
      r = "";
    for (let c = 0; c < l.length; c++)
      l[c] && (s = zp(l[c])) && (r && (r += " "), (r += s));
    return r;
  },
  yw = (l, ...s) => {
    let r, c, f, d;
    const p = (v) => {
        const h = s.reduce((g, N) => N(g), l());
        return (
          (r = mw(h)),
          (c = r.cache.get),
          (f = r.cache.set),
          (d = y),
          y(v)
        );
      },
      y = (v) => {
        const h = c(v);
        if (h) return h;
        const g = pw(v, r);
        return (f(v, g), g);
      };
    return ((d = p), (...v) => d(xw(...v)));
  },
  gw = [],
  Ke = (l) => {
    const s = (r) => r[l] || gw;
    return ((s.isThemeGetter = !0), s);
  },
  Up = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
  kp = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
  vw = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,
  bw = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  ww =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  Sw = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
  Nw = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  Ew =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  Fn = (l) => vw.test(l),
  pe = (l) => !!l && !Number.isNaN(Number(l)),
  Jn = (l) => !!l && Number.isInteger(Number(l)),
  Jc = (l) => l.endsWith("%") && pe(l.slice(0, -1)),
  gn = (l) => bw.test(l),
  Hp = () => !0,
  jw = (l) => ww.test(l) && !Sw.test(l),
  Tu = () => !1,
  Aw = (l) => Nw.test(l),
  Tw = (l) => Ew.test(l),
  Ow = (l) => !ee(l) && !te(l),
  Cw = (l) => sl(l, qp, Tu),
  ee = (l) => Up.test(l),
  El = (l) => sl(l, Gp, jw),
  h0 = (l) => sl(l, Hw, pe),
  Rw = (l) => sl(l, Yp, Hp),
  Mw = (l) => sl(l, Xp, Tu),
  p0 = (l) => sl(l, Lp, Tu),
  _w = (l) => sl(l, Bp, Tw),
  $i = (l) => sl(l, Qp, Aw),
  te = (l) => kp.test(l),
  ws = (l) => Cl(l, Gp),
  Dw = (l) => Cl(l, Xp),
  x0 = (l) => Cl(l, Lp),
  zw = (l) => Cl(l, qp),
  Uw = (l) => Cl(l, Bp),
  Wi = (l) => Cl(l, Qp, !0),
  kw = (l) => Cl(l, Yp, !0),
  sl = (l, s, r) => {
    const c = Up.exec(l);
    return c ? (c[1] ? s(c[1]) : r(c[2])) : !1;
  },
  Cl = (l, s, r = !1) => {
    const c = kp.exec(l);
    return c ? (c[1] ? s(c[1]) : r) : !1;
  },
  Lp = (l) => l === "position" || l === "percentage",
  Bp = (l) => l === "image" || l === "url",
  qp = (l) => l === "length" || l === "size" || l === "bg-size",
  Gp = (l) => l === "length",
  Hw = (l) => l === "number",
  Xp = (l) => l === "family-name",
  Yp = (l) => l === "number" || l === "weight",
  Qp = (l) => l === "shadow",
  Lw = () => {
    const l = Ke("color"),
      s = Ke("font"),
      r = Ke("text"),
      c = Ke("font-weight"),
      f = Ke("tracking"),
      d = Ke("leading"),
      p = Ke("breakpoint"),
      y = Ke("container"),
      v = Ke("spacing"),
      h = Ke("radius"),
      g = Ke("shadow"),
      N = Ke("inset-shadow"),
      j = Ke("text-shadow"),
      M = Ke("drop-shadow"),
      U = Ke("blur"),
      O = Ke("perspective"),
      _ = Ke("aspect"),
      q = Ke("ease"),
      Y = Ke("animate"),
      X = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      Z = () => [
        "center",
        "top",
        "bottom",
        "left",
        "right",
        "top-left",
        "left-top",
        "top-right",
        "right-top",
        "bottom-right",
        "right-bottom",
        "bottom-left",
        "left-bottom",
      ],
      Q = () => [...Z(), te, ee],
      F = () => ["auto", "hidden", "clip", "visible", "scroll"],
      $ = () => ["auto", "contain", "none"],
      K = () => [te, ee, v],
      ce = () => [Fn, "full", "auto", ...K()],
      ye = () => [Jn, "none", "subgrid", te, ee],
      be = () => ["auto", { span: ["full", Jn, te, ee] }, Jn, te, ee],
      de = () => [Jn, "auto", te, ee],
      Se = () => ["auto", "min", "max", "fr", te, ee],
      W = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
        "baseline",
        "center-safe",
        "end-safe",
      ],
      fe = () => [
        "start",
        "end",
        "center",
        "stretch",
        "center-safe",
        "end-safe",
      ],
      C = () => ["auto", ...K()],
      G = () => [
        Fn,
        "auto",
        "full",
        "dvw",
        "dvh",
        "lvw",
        "lvh",
        "svw",
        "svh",
        "min",
        "max",
        "fit",
        ...K(),
      ],
      V = () => [
        Fn,
        "screen",
        "full",
        "dvw",
        "lvw",
        "svw",
        "min",
        "max",
        "fit",
        ...K(),
      ],
      se = () => [
        Fn,
        "screen",
        "full",
        "lh",
        "dvh",
        "lvh",
        "svh",
        "min",
        "max",
        "fit",
        ...K(),
      ],
      b = () => [l, te, ee],
      B = () => [...Z(), x0, p0, { position: [te, ee] }],
      J = () => ["no-repeat", { repeat: ["", "x", "y", "space", "round"] }],
      P = () => ["auto", "cover", "contain", zw, Cw, { size: [te, ee] }],
      le = () => [Jc, ws, El],
      re = () => ["", "none", "full", h, te, ee],
      ne = () => ["", pe, ws, El],
      Ue = () => ["solid", "dashed", "dotted", "double"],
      je = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      Ae = () => [pe, Jc, x0, p0],
      Sn = () => ["", "none", U, te, ee],
      Ut = () => ["none", pe, te, ee],
      Qt = () => ["none", pe, te, ee],
      jt = () => [pe, te, ee],
      Nn = () => [Fn, "full", ...K()];
    return {
      cacheSize: 500,
      theme: {
        animate: ["spin", "ping", "pulse", "bounce"],
        aspect: ["video"],
        blur: [gn],
        breakpoint: [gn],
        color: [Hp],
        container: [gn],
        "drop-shadow": [gn],
        ease: ["in", "out", "in-out"],
        font: [Ow],
        "font-weight": [
          "thin",
          "extralight",
          "light",
          "normal",
          "medium",
          "semibold",
          "bold",
          "extrabold",
          "black",
        ],
        "inset-shadow": [gn],
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
        perspective: [
          "dramatic",
          "near",
          "normal",
          "midrange",
          "distant",
          "none",
        ],
        radius: [gn],
        shadow: [gn],
        spacing: ["px", pe],
        text: [gn],
        "text-shadow": [gn],
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"],
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", Fn, ee, te, _] }],
        container: ["container"],
        columns: [{ columns: [pe, ee, te, y] }],
        "break-after": [{ "break-after": X() }],
        "break-before": [{ "break-before": X() }],
        "break-inside": [
          { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
        ],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        sr: ["sr-only", "not-sr-only"],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          { object: ["contain", "cover", "fill", "none", "scale-down"] },
        ],
        "object-position": [{ object: Q() }],
        overflow: [{ overflow: F() }],
        "overflow-x": [{ "overflow-x": F() }],
        "overflow-y": [{ "overflow-y": F() }],
        overscroll: [{ overscroll: $() }],
        "overscroll-x": [{ "overscroll-x": $() }],
        "overscroll-y": [{ "overscroll-y": $() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: ce() }],
        "inset-x": [{ "inset-x": ce() }],
        "inset-y": [{ "inset-y": ce() }],
        start: [{ "inset-s": ce(), start: ce() }],
        end: [{ "inset-e": ce(), end: ce() }],
        "inset-bs": [{ "inset-bs": ce() }],
        "inset-be": [{ "inset-be": ce() }],
        top: [{ top: ce() }],
        right: [{ right: ce() }],
        bottom: [{ bottom: ce() }],
        left: [{ left: ce() }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: [Jn, "auto", te, ee] }],
        basis: [{ basis: [Fn, "full", "auto", y, ...K()] }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["nowrap", "wrap", "wrap-reverse"] }],
        flex: [{ flex: [pe, Fn, "auto", "initial", "none", ee] }],
        grow: [{ grow: ["", pe, te, ee] }],
        shrink: [{ shrink: ["", pe, te, ee] }],
        order: [{ order: [Jn, "first", "last", "none", te, ee] }],
        "grid-cols": [{ "grid-cols": ye() }],
        "col-start-end": [{ col: be() }],
        "col-start": [{ "col-start": de() }],
        "col-end": [{ "col-end": de() }],
        "grid-rows": [{ "grid-rows": ye() }],
        "row-start-end": [{ row: be() }],
        "row-start": [{ "row-start": de() }],
        "row-end": [{ "row-end": de() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": Se() }],
        "auto-rows": [{ "auto-rows": Se() }],
        gap: [{ gap: K() }],
        "gap-x": [{ "gap-x": K() }],
        "gap-y": [{ "gap-y": K() }],
        "justify-content": [{ justify: [...W(), "normal"] }],
        "justify-items": [{ "justify-items": [...fe(), "normal"] }],
        "justify-self": [{ "justify-self": ["auto", ...fe()] }],
        "align-content": [{ content: ["normal", ...W()] }],
        "align-items": [{ items: [...fe(), { baseline: ["", "last"] }] }],
        "align-self": [{ self: ["auto", ...fe(), { baseline: ["", "last"] }] }],
        "place-content": [{ "place-content": W() }],
        "place-items": [{ "place-items": [...fe(), "baseline"] }],
        "place-self": [{ "place-self": ["auto", ...fe()] }],
        p: [{ p: K() }],
        px: [{ px: K() }],
        py: [{ py: K() }],
        ps: [{ ps: K() }],
        pe: [{ pe: K() }],
        pbs: [{ pbs: K() }],
        pbe: [{ pbe: K() }],
        pt: [{ pt: K() }],
        pr: [{ pr: K() }],
        pb: [{ pb: K() }],
        pl: [{ pl: K() }],
        m: [{ m: C() }],
        mx: [{ mx: C() }],
        my: [{ my: C() }],
        ms: [{ ms: C() }],
        me: [{ me: C() }],
        mbs: [{ mbs: C() }],
        mbe: [{ mbe: C() }],
        mt: [{ mt: C() }],
        mr: [{ mr: C() }],
        mb: [{ mb: C() }],
        ml: [{ ml: C() }],
        "space-x": [{ "space-x": K() }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": K() }],
        "space-y-reverse": ["space-y-reverse"],
        size: [{ size: G() }],
        "inline-size": [{ inline: ["auto", ...V()] }],
        "min-inline-size": [{ "min-inline": ["auto", ...V()] }],
        "max-inline-size": [{ "max-inline": ["none", ...V()] }],
        "block-size": [{ block: ["auto", ...se()] }],
        "min-block-size": [{ "min-block": ["auto", ...se()] }],
        "max-block-size": [{ "max-block": ["none", ...se()] }],
        w: [{ w: [y, "screen", ...G()] }],
        "min-w": [{ "min-w": [y, "screen", "none", ...G()] }],
        "max-w": [
          { "max-w": [y, "screen", "none", "prose", { screen: [p] }, ...G()] },
        ],
        h: [{ h: ["screen", "lh", ...G()] }],
        "min-h": [{ "min-h": ["screen", "lh", "none", ...G()] }],
        "max-h": [{ "max-h": ["screen", "lh", ...G()] }],
        "font-size": [{ text: ["base", r, ws, El] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [{ font: [c, kw, Rw] }],
        "font-stretch": [
          {
            "font-stretch": [
              "ultra-condensed",
              "extra-condensed",
              "condensed",
              "semi-condensed",
              "normal",
              "semi-expanded",
              "expanded",
              "extra-expanded",
              "ultra-expanded",
              Jc,
              ee,
            ],
          },
        ],
        "font-family": [{ font: [Dw, Mw, s] }],
        "font-features": [{ "font-features": [ee] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [{ tracking: [f, te, ee] }],
        "line-clamp": [{ "line-clamp": [pe, "none", te, h0] }],
        leading: [{ leading: [d, ...K()] }],
        "list-image": [{ "list-image": ["none", te, ee] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "list-style-type": [{ list: ["disc", "decimal", "none", te, ee] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "placeholder-color": [{ placeholder: b() }],
        "text-color": [{ text: b() }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...Ue(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: [pe, "from-font", "auto", te, El] },
        ],
        "text-decoration-color": [{ decoration: b() }],
        "underline-offset": [{ "underline-offset": [pe, "auto", te, ee] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: K() }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              te,
              ee,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces",
            ],
          },
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        wrap: [{ wrap: ["break-word", "anywhere", "normal"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", te, ee] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: B() }],
        "bg-repeat": [{ bg: J() }],
        "bg-size": [{ bg: P() }],
        "bg-image": [
          {
            bg: [
              "none",
              {
                linear: [
                  { to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
                  Jn,
                  te,
                  ee,
                ],
                radial: ["", te, ee],
                conic: [Jn, te, ee],
              },
              Uw,
              _w,
            ],
          },
        ],
        "bg-color": [{ bg: b() }],
        "gradient-from-pos": [{ from: le() }],
        "gradient-via-pos": [{ via: le() }],
        "gradient-to-pos": [{ to: le() }],
        "gradient-from": [{ from: b() }],
        "gradient-via": [{ via: b() }],
        "gradient-to": [{ to: b() }],
        rounded: [{ rounded: re() }],
        "rounded-s": [{ "rounded-s": re() }],
        "rounded-e": [{ "rounded-e": re() }],
        "rounded-t": [{ "rounded-t": re() }],
        "rounded-r": [{ "rounded-r": re() }],
        "rounded-b": [{ "rounded-b": re() }],
        "rounded-l": [{ "rounded-l": re() }],
        "rounded-ss": [{ "rounded-ss": re() }],
        "rounded-se": [{ "rounded-se": re() }],
        "rounded-ee": [{ "rounded-ee": re() }],
        "rounded-es": [{ "rounded-es": re() }],
        "rounded-tl": [{ "rounded-tl": re() }],
        "rounded-tr": [{ "rounded-tr": re() }],
        "rounded-br": [{ "rounded-br": re() }],
        "rounded-bl": [{ "rounded-bl": re() }],
        "border-w": [{ border: ne() }],
        "border-w-x": [{ "border-x": ne() }],
        "border-w-y": [{ "border-y": ne() }],
        "border-w-s": [{ "border-s": ne() }],
        "border-w-e": [{ "border-e": ne() }],
        "border-w-bs": [{ "border-bs": ne() }],
        "border-w-be": [{ "border-be": ne() }],
        "border-w-t": [{ "border-t": ne() }],
        "border-w-r": [{ "border-r": ne() }],
        "border-w-b": [{ "border-b": ne() }],
        "border-w-l": [{ "border-l": ne() }],
        "divide-x": [{ "divide-x": ne() }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": ne() }],
        "divide-y-reverse": ["divide-y-reverse"],
        "border-style": [{ border: [...Ue(), "hidden", "none"] }],
        "divide-style": [{ divide: [...Ue(), "hidden", "none"] }],
        "border-color": [{ border: b() }],
        "border-color-x": [{ "border-x": b() }],
        "border-color-y": [{ "border-y": b() }],
        "border-color-s": [{ "border-s": b() }],
        "border-color-e": [{ "border-e": b() }],
        "border-color-bs": [{ "border-bs": b() }],
        "border-color-be": [{ "border-be": b() }],
        "border-color-t": [{ "border-t": b() }],
        "border-color-r": [{ "border-r": b() }],
        "border-color-b": [{ "border-b": b() }],
        "border-color-l": [{ "border-l": b() }],
        "divide-color": [{ divide: b() }],
        "outline-style": [{ outline: [...Ue(), "none", "hidden"] }],
        "outline-offset": [{ "outline-offset": [pe, te, ee] }],
        "outline-w": [{ outline: ["", pe, ws, El] }],
        "outline-color": [{ outline: b() }],
        shadow: [{ shadow: ["", "none", g, Wi, $i] }],
        "shadow-color": [{ shadow: b() }],
        "inset-shadow": [{ "inset-shadow": ["none", N, Wi, $i] }],
        "inset-shadow-color": [{ "inset-shadow": b() }],
        "ring-w": [{ ring: ne() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: b() }],
        "ring-offset-w": [{ "ring-offset": [pe, El] }],
        "ring-offset-color": [{ "ring-offset": b() }],
        "inset-ring-w": [{ "inset-ring": ne() }],
        "inset-ring-color": [{ "inset-ring": b() }],
        "text-shadow": [{ "text-shadow": ["none", j, Wi, $i] }],
        "text-shadow-color": [{ "text-shadow": b() }],
        opacity: [{ opacity: [pe, te, ee] }],
        "mix-blend": [
          { "mix-blend": [...je(), "plus-darker", "plus-lighter"] },
        ],
        "bg-blend": [{ "bg-blend": je() }],
        "mask-clip": [
          {
            "mask-clip": [
              "border",
              "padding",
              "content",
              "fill",
              "stroke",
              "view",
            ],
          },
          "mask-no-clip",
        ],
        "mask-composite": [
          { mask: ["add", "subtract", "intersect", "exclude"] },
        ],
        "mask-image-linear-pos": [{ "mask-linear": [pe] }],
        "mask-image-linear-from-pos": [{ "mask-linear-from": Ae() }],
        "mask-image-linear-to-pos": [{ "mask-linear-to": Ae() }],
        "mask-image-linear-from-color": [{ "mask-linear-from": b() }],
        "mask-image-linear-to-color": [{ "mask-linear-to": b() }],
        "mask-image-t-from-pos": [{ "mask-t-from": Ae() }],
        "mask-image-t-to-pos": [{ "mask-t-to": Ae() }],
        "mask-image-t-from-color": [{ "mask-t-from": b() }],
        "mask-image-t-to-color": [{ "mask-t-to": b() }],
        "mask-image-r-from-pos": [{ "mask-r-from": Ae() }],
        "mask-image-r-to-pos": [{ "mask-r-to": Ae() }],
        "mask-image-r-from-color": [{ "mask-r-from": b() }],
        "mask-image-r-to-color": [{ "mask-r-to": b() }],
        "mask-image-b-from-pos": [{ "mask-b-from": Ae() }],
        "mask-image-b-to-pos": [{ "mask-b-to": Ae() }],
        "mask-image-b-from-color": [{ "mask-b-from": b() }],
        "mask-image-b-to-color": [{ "mask-b-to": b() }],
        "mask-image-l-from-pos": [{ "mask-l-from": Ae() }],
        "mask-image-l-to-pos": [{ "mask-l-to": Ae() }],
        "mask-image-l-from-color": [{ "mask-l-from": b() }],
        "mask-image-l-to-color": [{ "mask-l-to": b() }],
        "mask-image-x-from-pos": [{ "mask-x-from": Ae() }],
        "mask-image-x-to-pos": [{ "mask-x-to": Ae() }],
        "mask-image-x-from-color": [{ "mask-x-from": b() }],
        "mask-image-x-to-color": [{ "mask-x-to": b() }],
        "mask-image-y-from-pos": [{ "mask-y-from": Ae() }],
        "mask-image-y-to-pos": [{ "mask-y-to": Ae() }],
        "mask-image-y-from-color": [{ "mask-y-from": b() }],
        "mask-image-y-to-color": [{ "mask-y-to": b() }],
        "mask-image-radial": [{ "mask-radial": [te, ee] }],
        "mask-image-radial-from-pos": [{ "mask-radial-from": Ae() }],
        "mask-image-radial-to-pos": [{ "mask-radial-to": Ae() }],
        "mask-image-radial-from-color": [{ "mask-radial-from": b() }],
        "mask-image-radial-to-color": [{ "mask-radial-to": b() }],
        "mask-image-radial-shape": [{ "mask-radial": ["circle", "ellipse"] }],
        "mask-image-radial-size": [
          {
            "mask-radial": [
              { closest: ["side", "corner"], farthest: ["side", "corner"] },
            ],
          },
        ],
        "mask-image-radial-pos": [{ "mask-radial-at": Z() }],
        "mask-image-conic-pos": [{ "mask-conic": [pe] }],
        "mask-image-conic-from-pos": [{ "mask-conic-from": Ae() }],
        "mask-image-conic-to-pos": [{ "mask-conic-to": Ae() }],
        "mask-image-conic-from-color": [{ "mask-conic-from": b() }],
        "mask-image-conic-to-color": [{ "mask-conic-to": b() }],
        "mask-mode": [{ mask: ["alpha", "luminance", "match"] }],
        "mask-origin": [
          {
            "mask-origin": [
              "border",
              "padding",
              "content",
              "fill",
              "stroke",
              "view",
            ],
          },
        ],
        "mask-position": [{ mask: B() }],
        "mask-repeat": [{ mask: J() }],
        "mask-size": [{ mask: P() }],
        "mask-type": [{ "mask-type": ["alpha", "luminance"] }],
        "mask-image": [{ mask: ["none", te, ee] }],
        filter: [{ filter: ["", "none", te, ee] }],
        blur: [{ blur: Sn() }],
        brightness: [{ brightness: [pe, te, ee] }],
        contrast: [{ contrast: [pe, te, ee] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", M, Wi, $i] }],
        "drop-shadow-color": [{ "drop-shadow": b() }],
        grayscale: [{ grayscale: ["", pe, te, ee] }],
        "hue-rotate": [{ "hue-rotate": [pe, te, ee] }],
        invert: [{ invert: ["", pe, te, ee] }],
        saturate: [{ saturate: [pe, te, ee] }],
        sepia: [{ sepia: ["", pe, te, ee] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none", te, ee] }],
        "backdrop-blur": [{ "backdrop-blur": Sn() }],
        "backdrop-brightness": [{ "backdrop-brightness": [pe, te, ee] }],
        "backdrop-contrast": [{ "backdrop-contrast": [pe, te, ee] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": ["", pe, te, ee] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [pe, te, ee] }],
        "backdrop-invert": [{ "backdrop-invert": ["", pe, te, ee] }],
        "backdrop-opacity": [{ "backdrop-opacity": [pe, te, ee] }],
        "backdrop-saturate": [{ "backdrop-saturate": [pe, te, ee] }],
        "backdrop-sepia": [{ "backdrop-sepia": ["", pe, te, ee] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": K() }],
        "border-spacing-x": [{ "border-spacing-x": K() }],
        "border-spacing-y": [{ "border-spacing-y": K() }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          {
            transition: [
              "",
              "all",
              "colors",
              "opacity",
              "shadow",
              "transform",
              "none",
              te,
              ee,
            ],
          },
        ],
        "transition-behavior": [{ transition: ["normal", "discrete"] }],
        duration: [{ duration: [pe, "initial", te, ee] }],
        ease: [{ ease: ["linear", "initial", q, te, ee] }],
        delay: [{ delay: [pe, te, ee] }],
        animate: [{ animate: ["none", Y, te, ee] }],
        backface: [{ backface: ["hidden", "visible"] }],
        perspective: [{ perspective: [O, te, ee] }],
        "perspective-origin": [{ "perspective-origin": Q() }],
        rotate: [{ rotate: Ut() }],
        "rotate-x": [{ "rotate-x": Ut() }],
        "rotate-y": [{ "rotate-y": Ut() }],
        "rotate-z": [{ "rotate-z": Ut() }],
        scale: [{ scale: Qt() }],
        "scale-x": [{ "scale-x": Qt() }],
        "scale-y": [{ "scale-y": Qt() }],
        "scale-z": [{ "scale-z": Qt() }],
        "scale-3d": ["scale-3d"],
        skew: [{ skew: jt() }],
        "skew-x": [{ "skew-x": jt() }],
        "skew-y": [{ "skew-y": jt() }],
        transform: [{ transform: [te, ee, "", "none", "gpu", "cpu"] }],
        "transform-origin": [{ origin: Q() }],
        "transform-style": [{ transform: ["3d", "flat"] }],
        translate: [{ translate: Nn() }],
        "translate-x": [{ "translate-x": Nn() }],
        "translate-y": [{ "translate-y": Nn() }],
        "translate-z": [{ "translate-z": Nn() }],
        "translate-none": ["translate-none"],
        accent: [{ accent: b() }],
        appearance: [{ appearance: ["none", "auto"] }],
        "caret-color": [{ caret: b() }],
        "color-scheme": [
          {
            scheme: [
              "normal",
              "dark",
              "light",
              "light-dark",
              "only-dark",
              "only-light",
            ],
          },
        ],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              te,
              ee,
            ],
          },
        ],
        "field-sizing": [{ "field-sizing": ["fixed", "content"] }],
        "pointer-events": [{ "pointer-events": ["auto", "none"] }],
        resize: [{ resize: ["none", "", "y", "x"] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": K() }],
        "scroll-mx": [{ "scroll-mx": K() }],
        "scroll-my": [{ "scroll-my": K() }],
        "scroll-ms": [{ "scroll-ms": K() }],
        "scroll-me": [{ "scroll-me": K() }],
        "scroll-mbs": [{ "scroll-mbs": K() }],
        "scroll-mbe": [{ "scroll-mbe": K() }],
        "scroll-mt": [{ "scroll-mt": K() }],
        "scroll-mr": [{ "scroll-mr": K() }],
        "scroll-mb": [{ "scroll-mb": K() }],
        "scroll-ml": [{ "scroll-ml": K() }],
        "scroll-p": [{ "scroll-p": K() }],
        "scroll-px": [{ "scroll-px": K() }],
        "scroll-py": [{ "scroll-py": K() }],
        "scroll-ps": [{ "scroll-ps": K() }],
        "scroll-pe": [{ "scroll-pe": K() }],
        "scroll-pbs": [{ "scroll-pbs": K() }],
        "scroll-pbe": [{ "scroll-pbe": K() }],
        "scroll-pt": [{ "scroll-pt": K() }],
        "scroll-pr": [{ "scroll-pr": K() }],
        "scroll-pb": [{ "scroll-pb": K() }],
        "scroll-pl": [{ "scroll-pl": K() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [
          {
            "will-change": ["auto", "scroll", "contents", "transform", te, ee],
          },
        ],
        fill: [{ fill: ["none", ...b()] }],
        "stroke-w": [{ stroke: [pe, ws, El, h0] }],
        stroke: [{ stroke: ["none", ...b()] }],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "inset-bs",
          "inset-be",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pbs", "pbe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mbs", "mbe", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-x",
          "border-w-y",
          "border-w-s",
          "border-w-e",
          "border-w-bs",
          "border-w-be",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-x",
          "border-color-y",
          "border-color-s",
          "border-color-e",
          "border-color-bs",
          "border-color-be",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        translate: ["translate-x", "translate-y", "translate-none"],
        "translate-none": [
          "translate",
          "translate-x",
          "translate-y",
          "translate-z",
        ],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mbs",
          "scroll-mbe",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pbs",
          "scroll-pbe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
      orderSensitiveModifiers: [
        "*",
        "**",
        "after",
        "backdrop",
        "before",
        "details-content",
        "file",
        "first-letter",
        "first-line",
        "marker",
        "placeholder",
        "selection",
      ],
    };
  },
  Bw = yw(Lw);
function mt(...l) {
  return Bw(Sp(l));
}
const qw = s1,
  Vp = w.forwardRef(({ className: l, ...s }, r) =>
    u.jsx(pp, {
      ref: r,
      className: mt(
        "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
        l,
      ),
      ...s,
    }),
  );
Vp.displayName = pp.displayName;
const Gw = Np(
    "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
    {
      variants: {
        variant: {
          default: "border bg-background text-foreground",
          destructive:
            "destructive group border-destructive bg-destructive text-destructive-foreground",
        },
      },
      defaultVariants: { variant: "default" },
    },
  ),
  Zp = w.forwardRef(({ className: l, variant: s, ...r }, c) =>
    u.jsx(xp, { ref: c, className: mt(Gw({ variant: s }), l), ...r }),
  );
Zp.displayName = xp.displayName;
const Xw = w.forwardRef(({ className: l, ...s }, r) =>
  u.jsx(vp, {
    ref: r,
    className: mt(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
      l,
    ),
    ...s,
  }),
);
Xw.displayName = vp.displayName;
const Kp = w.forwardRef(({ className: l, ...s }, r) =>
  u.jsx(bp, {
    ref: r,
    className: mt(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      l,
    ),
    "toast-close": "",
    ...s,
    children: u.jsx(Rp, { className: "h-4 w-4" }),
  }),
);
Kp.displayName = bp.displayName;
const Pp = w.forwardRef(({ className: l, ...s }, r) =>
  u.jsx(yp, { ref: r, className: mt("text-sm font-semibold", l), ...s }),
);
Pp.displayName = yp.displayName;
const Fp = w.forwardRef(({ className: l, ...s }, r) =>
  u.jsx(gp, { ref: r, className: mt("text-sm opacity-90", l), ...s }),
);
Fp.displayName = gp.displayName;
function Yw() {
  const { toasts: l } = db();
  return u.jsxs(qw, {
    children: [
      l.map(function ({ id: s, title: r, description: c, action: f, ...d }) {
        return u.jsxs(
          Zp,
          {
            ...d,
            children: [
              u.jsxs("div", {
                className: "grid gap-1",
                children: [
                  r && u.jsx(Pp, { children: r }),
                  c && u.jsx(Fp, { children: c }),
                ],
              }),
              f,
              u.jsx(Kp, {}),
            ],
          },
          s,
        );
      }),
      u.jsx(Vp, {}),
    ],
  });
}
const Qw = ["top", "right", "bottom", "left"],
  ll = Math.min,
  Nt = Math.max,
  ir = Math.round,
  Ii = Math.floor,
  en = (l) => ({ x: l, y: l }),
  Vw = { left: "right", right: "left", bottom: "top", top: "bottom" };
function uu(l, s, r) {
  return Nt(l, ll(s, r));
}
function vn(l, s) {
  return typeof l == "function" ? l(s) : l;
}
function bn(l) {
  return l.split("-")[0];
}
function ba(l) {
  return l.split("-")[1];
}
function Ou(l) {
  return l === "x" ? "y" : "x";
}
function Cu(l) {
  return l === "y" ? "height" : "width";
}
function Wt(l) {
  const s = l[0];
  return s === "t" || s === "b" ? "y" : "x";
}
function Ru(l) {
  return Ou(Wt(l));
}
function Zw(l, s, r) {
  r === void 0 && (r = !1);
  const c = ba(l),
    f = Ru(l),
    d = Cu(f);
  let p =
    f === "x"
      ? c === (r ? "end" : "start")
        ? "right"
        : "left"
      : c === "start"
        ? "bottom"
        : "top";
  return (s.reference[d] > s.floating[d] && (p = rr(p)), [p, rr(p)]);
}
function Kw(l) {
  const s = rr(l);
  return [fu(l), s, fu(s)];
}
function fu(l) {
  return l.includes("start")
    ? l.replace("start", "end")
    : l.replace("end", "start");
}
const y0 = ["left", "right"],
  g0 = ["right", "left"],
  Pw = ["top", "bottom"],
  Fw = ["bottom", "top"];
function Jw(l, s, r) {
  switch (l) {
    case "top":
    case "bottom":
      return r ? (s ? g0 : y0) : s ? y0 : g0;
    case "left":
    case "right":
      return s ? Pw : Fw;
    default:
      return [];
  }
}
function $w(l, s, r, c) {
  const f = ba(l);
  let d = Jw(bn(l), r === "start", c);
  return (
    f && ((d = d.map((p) => p + "-" + f)), s && (d = d.concat(d.map(fu)))),
    d
  );
}
function rr(l) {
  const s = bn(l);
  return Vw[s] + l.slice(s.length);
}
function Ww(l) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...l };
}
function Jp(l) {
  return typeof l != "number"
    ? Ww(l)
    : { top: l, right: l, bottom: l, left: l };
}
function or(l) {
  const { x: s, y: r, width: c, height: f } = l;
  return {
    width: c,
    height: f,
    top: r,
    left: s,
    right: s + c,
    bottom: r + f,
    x: s,
    y: r,
  };
}
function v0(l, s, r) {
  let { reference: c, floating: f } = l;
  const d = Wt(s),
    p = Ru(s),
    y = Cu(p),
    v = bn(s),
    h = d === "y",
    g = c.x + c.width / 2 - f.width / 2,
    N = c.y + c.height / 2 - f.height / 2,
    j = c[y] / 2 - f[y] / 2;
  let M;
  switch (v) {
    case "top":
      M = { x: g, y: c.y - f.height };
      break;
    case "bottom":
      M = { x: g, y: c.y + c.height };
      break;
    case "right":
      M = { x: c.x + c.width, y: N };
      break;
    case "left":
      M = { x: c.x - f.width, y: N };
      break;
    default:
      M = { x: c.x, y: c.y };
  }
  switch (ba(s)) {
    case "start":
      M[p] -= j * (r && h ? -1 : 1);
      break;
    case "end":
      M[p] += j * (r && h ? -1 : 1);
      break;
  }
  return M;
}
async function Iw(l, s) {
  var r;
  s === void 0 && (s = {});
  const { x: c, y: f, platform: d, rects: p, elements: y, strategy: v } = l,
    {
      boundary: h = "clippingAncestors",
      rootBoundary: g = "viewport",
      elementContext: N = "floating",
      altBoundary: j = !1,
      padding: M = 0,
    } = vn(s, l),
    U = Jp(M),
    _ = y[j ? (N === "floating" ? "reference" : "floating") : N],
    q = or(
      await d.getClippingRect({
        element:
          (r = await (d.isElement == null ? void 0 : d.isElement(_))) == null ||
          r
            ? _
            : _.contextElement ||
              (await (d.getDocumentElement == null
                ? void 0
                : d.getDocumentElement(y.floating))),
        boundary: h,
        rootBoundary: g,
        strategy: v,
      }),
    ),
    Y =
      N === "floating"
        ? { x: c, y: f, width: p.floating.width, height: p.floating.height }
        : p.reference,
    X = await (d.getOffsetParent == null
      ? void 0
      : d.getOffsetParent(y.floating)),
    Z = (await (d.isElement == null ? void 0 : d.isElement(X)))
      ? (await (d.getScale == null ? void 0 : d.getScale(X))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    Q = or(
      d.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await d.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: y,
            rect: Y,
            offsetParent: X,
            strategy: v,
          })
        : Y,
    );
  return {
    top: (q.top - Q.top + U.top) / Z.y,
    bottom: (Q.bottom - q.bottom + U.bottom) / Z.y,
    left: (q.left - Q.left + U.left) / Z.x,
    right: (Q.right - q.right + U.right) / Z.x,
  };
}
const e2 = 50,
  t2 = async (l, s, r) => {
    const {
        placement: c = "bottom",
        strategy: f = "absolute",
        middleware: d = [],
        platform: p,
      } = r,
      y = p.detectOverflow ? p : { ...p, detectOverflow: Iw },
      v = await (p.isRTL == null ? void 0 : p.isRTL(s));
    let h = await p.getElementRects({ reference: l, floating: s, strategy: f }),
      { x: g, y: N } = v0(h, c, v),
      j = c,
      M = 0;
    const U = {};
    for (let O = 0; O < d.length; O++) {
      const _ = d[O];
      if (!_) continue;
      const { name: q, fn: Y } = _,
        {
          x: X,
          y: Z,
          data: Q,
          reset: F,
        } = await Y({
          x: g,
          y: N,
          initialPlacement: c,
          placement: j,
          strategy: f,
          middlewareData: U,
          rects: h,
          platform: y,
          elements: { reference: l, floating: s },
        });
      ((g = X ?? g),
        (N = Z ?? N),
        (U[q] = { ...U[q], ...Q }),
        F &&
          M < e2 &&
          (M++,
          typeof F == "object" &&
            (F.placement && (j = F.placement),
            F.rects &&
              (h =
                F.rects === !0
                  ? await p.getElementRects({
                      reference: l,
                      floating: s,
                      strategy: f,
                    })
                  : F.rects),
            ({ x: g, y: N } = v0(h, j, v))),
          (O = -1)));
    }
    return { x: g, y: N, placement: j, strategy: f, middlewareData: U };
  },
  n2 = (l) => ({
    name: "arrow",
    options: l,
    async fn(s) {
      const {
          x: r,
          y: c,
          placement: f,
          rects: d,
          platform: p,
          elements: y,
          middlewareData: v,
        } = s,
        { element: h, padding: g = 0 } = vn(l, s) || {};
      if (h == null) return {};
      const N = Jp(g),
        j = { x: r, y: c },
        M = Ru(f),
        U = Cu(M),
        O = await p.getDimensions(h),
        _ = M === "y",
        q = _ ? "top" : "left",
        Y = _ ? "bottom" : "right",
        X = _ ? "clientHeight" : "clientWidth",
        Z = d.reference[U] + d.reference[M] - j[M] - d.floating[U],
        Q = j[M] - d.reference[M],
        F = await (p.getOffsetParent == null ? void 0 : p.getOffsetParent(h));
      let $ = F ? F[X] : 0;
      (!$ || !(await (p.isElement == null ? void 0 : p.isElement(F)))) &&
        ($ = y.floating[X] || d.floating[U]);
      const K = Z / 2 - Q / 2,
        ce = $ / 2 - O[U] / 2 - 1,
        ye = ll(N[q], ce),
        be = ll(N[Y], ce),
        de = ye,
        Se = $ - O[U] - be,
        W = $ / 2 - O[U] / 2 + K,
        fe = uu(de, W, Se),
        C =
          !v.arrow &&
          ba(f) != null &&
          W !== fe &&
          d.reference[U] / 2 - (W < de ? ye : be) - O[U] / 2 < 0,
        G = C ? (W < de ? W - de : W - Se) : 0;
      return {
        [M]: j[M] + G,
        data: {
          [M]: fe,
          centerOffset: W - fe - G,
          ...(C && { alignmentOffset: G }),
        },
        reset: C,
      };
    },
  }),
  l2 = function (l) {
    return (
      l === void 0 && (l = {}),
      {
        name: "flip",
        options: l,
        async fn(s) {
          var r, c;
          const {
              placement: f,
              middlewareData: d,
              rects: p,
              initialPlacement: y,
              platform: v,
              elements: h,
            } = s,
            {
              mainAxis: g = !0,
              crossAxis: N = !0,
              fallbackPlacements: j,
              fallbackStrategy: M = "bestFit",
              fallbackAxisSideDirection: U = "none",
              flipAlignment: O = !0,
              ..._
            } = vn(l, s);
          if ((r = d.arrow) != null && r.alignmentOffset) return {};
          const q = bn(f),
            Y = Wt(y),
            X = bn(y) === y,
            Z = await (v.isRTL == null ? void 0 : v.isRTL(h.floating)),
            Q = j || (X || !O ? [rr(y)] : Kw(y)),
            F = U !== "none";
          !j && F && Q.push(...$w(y, O, U, Z));
          const $ = [y, ...Q],
            K = await v.detectOverflow(s, _),
            ce = [];
          let ye = ((c = d.flip) == null ? void 0 : c.overflows) || [];
          if ((g && ce.push(K[q]), N)) {
            const W = Zw(f, p, Z);
            ce.push(K[W[0]], K[W[1]]);
          }
          if (
            ((ye = [...ye, { placement: f, overflows: ce }]),
            !ce.every((W) => W <= 0))
          ) {
            var be, de;
            const W = (((be = d.flip) == null ? void 0 : be.index) || 0) + 1,
              fe = $[W];
            if (
              fe &&
              (!(N === "alignment" ? Y !== Wt(fe) : !1) ||
                ye.every((V) =>
                  Wt(V.placement) === Y ? V.overflows[0] > 0 : !0,
                ))
            )
              return {
                data: { index: W, overflows: ye },
                reset: { placement: fe },
              };
            let C =
              (de = ye
                .filter((G) => G.overflows[0] <= 0)
                .sort((G, V) => G.overflows[1] - V.overflows[1])[0]) == null
                ? void 0
                : de.placement;
            if (!C)
              switch (M) {
                case "bestFit": {
                  var Se;
                  const G =
                    (Se = ye
                      .filter((V) => {
                        if (F) {
                          const se = Wt(V.placement);
                          return se === Y || se === "y";
                        }
                        return !0;
                      })
                      .map((V) => [
                        V.placement,
                        V.overflows
                          .filter((se) => se > 0)
                          .reduce((se, b) => se + b, 0),
                      ])
                      .sort((V, se) => V[1] - se[1])[0]) == null
                      ? void 0
                      : Se[0];
                  G && (C = G);
                  break;
                }
                case "initialPlacement":
                  C = y;
                  break;
              }
            if (f !== C) return { reset: { placement: C } };
          }
          return {};
        },
      }
    );
  };
function b0(l, s) {
  return {
    top: l.top - s.height,
    right: l.right - s.width,
    bottom: l.bottom - s.height,
    left: l.left - s.width,
  };
}
function w0(l) {
  return Qw.some((s) => l[s] >= 0);
}
const a2 = function (l) {
    return (
      l === void 0 && (l = {}),
      {
        name: "hide",
        options: l,
        async fn(s) {
          const { rects: r, platform: c } = s,
            { strategy: f = "referenceHidden", ...d } = vn(l, s);
          switch (f) {
            case "referenceHidden": {
              const p = await c.detectOverflow(s, {
                  ...d,
                  elementContext: "reference",
                }),
                y = b0(p, r.reference);
              return {
                data: { referenceHiddenOffsets: y, referenceHidden: w0(y) },
              };
            }
            case "escaped": {
              const p = await c.detectOverflow(s, { ...d, altBoundary: !0 }),
                y = b0(p, r.floating);
              return { data: { escapedOffsets: y, escaped: w0(y) } };
            }
            default:
              return {};
          }
        },
      }
    );
  },
  $p = new Set(["left", "top"]);
async function s2(l, s) {
  const { placement: r, platform: c, elements: f } = l,
    d = await (c.isRTL == null ? void 0 : c.isRTL(f.floating)),
    p = bn(r),
    y = ba(r),
    v = Wt(r) === "y",
    h = $p.has(p) ? -1 : 1,
    g = d && v ? -1 : 1,
    N = vn(s, l);
  let {
    mainAxis: j,
    crossAxis: M,
    alignmentAxis: U,
  } = typeof N == "number"
    ? { mainAxis: N, crossAxis: 0, alignmentAxis: null }
    : {
        mainAxis: N.mainAxis || 0,
        crossAxis: N.crossAxis || 0,
        alignmentAxis: N.alignmentAxis,
      };
  return (
    y && typeof U == "number" && (M = y === "end" ? U * -1 : U),
    v ? { x: M * g, y: j * h } : { x: j * h, y: M * g }
  );
}
const i2 = function (l) {
    return (
      l === void 0 && (l = 0),
      {
        name: "offset",
        options: l,
        async fn(s) {
          var r, c;
          const { x: f, y: d, placement: p, middlewareData: y } = s,
            v = await s2(s, l);
          return p === ((r = y.offset) == null ? void 0 : r.placement) &&
            (c = y.arrow) != null &&
            c.alignmentOffset
            ? {}
            : { x: f + v.x, y: d + v.y, data: { ...v, placement: p } };
        },
      }
    );
  },
  r2 = function (l) {
    return (
      l === void 0 && (l = {}),
      {
        name: "shift",
        options: l,
        async fn(s) {
          const { x: r, y: c, placement: f, platform: d } = s,
            {
              mainAxis: p = !0,
              crossAxis: y = !1,
              limiter: v = {
                fn: (q) => {
                  let { x: Y, y: X } = q;
                  return { x: Y, y: X };
                },
              },
              ...h
            } = vn(l, s),
            g = { x: r, y: c },
            N = await d.detectOverflow(s, h),
            j = Wt(bn(f)),
            M = Ou(j);
          let U = g[M],
            O = g[j];
          if (p) {
            const q = M === "y" ? "top" : "left",
              Y = M === "y" ? "bottom" : "right",
              X = U + N[q],
              Z = U - N[Y];
            U = uu(X, U, Z);
          }
          if (y) {
            const q = j === "y" ? "top" : "left",
              Y = j === "y" ? "bottom" : "right",
              X = O + N[q],
              Z = O - N[Y];
            O = uu(X, O, Z);
          }
          const _ = v.fn({ ...s, [M]: U, [j]: O });
          return {
            ..._,
            data: { x: _.x - r, y: _.y - c, enabled: { [M]: p, [j]: y } },
          };
        },
      }
    );
  },
  o2 = function (l) {
    return (
      l === void 0 && (l = {}),
      {
        options: l,
        fn(s) {
          const { x: r, y: c, placement: f, rects: d, middlewareData: p } = s,
            { offset: y = 0, mainAxis: v = !0, crossAxis: h = !0 } = vn(l, s),
            g = { x: r, y: c },
            N = Wt(f),
            j = Ou(N);
          let M = g[j],
            U = g[N];
          const O = vn(y, s),
            _ =
              typeof O == "number"
                ? { mainAxis: O, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...O };
          if (v) {
            const X = j === "y" ? "height" : "width",
              Z = d.reference[j] - d.floating[X] + _.mainAxis,
              Q = d.reference[j] + d.reference[X] - _.mainAxis;
            M < Z ? (M = Z) : M > Q && (M = Q);
          }
          if (h) {
            var q, Y;
            const X = j === "y" ? "width" : "height",
              Z = $p.has(bn(f)),
              Q =
                d.reference[N] -
                d.floating[X] +
                ((Z && ((q = p.offset) == null ? void 0 : q[N])) || 0) +
                (Z ? 0 : _.crossAxis),
              F =
                d.reference[N] +
                d.reference[X] +
                (Z ? 0 : ((Y = p.offset) == null ? void 0 : Y[N]) || 0) -
                (Z ? _.crossAxis : 0);
            U < Q ? (U = Q) : U > F && (U = F);
          }
          return { [j]: M, [N]: U };
        },
      }
    );
  },
  c2 = function (l) {
    return (
      l === void 0 && (l = {}),
      {
        name: "size",
        options: l,
        async fn(s) {
          var r, c;
          const { placement: f, rects: d, platform: p, elements: y } = s,
            { apply: v = () => {}, ...h } = vn(l, s),
            g = await p.detectOverflow(s, h),
            N = bn(f),
            j = ba(f),
            M = Wt(f) === "y",
            { width: U, height: O } = d.floating;
          let _, q;
          N === "top" || N === "bottom"
            ? ((_ = N),
              (q =
                j ===
                ((await (p.isRTL == null ? void 0 : p.isRTL(y.floating)))
                  ? "start"
                  : "end")
                  ? "left"
                  : "right"))
            : ((q = N), (_ = j === "end" ? "top" : "bottom"));
          const Y = O - g.top - g.bottom,
            X = U - g.left - g.right,
            Z = ll(O - g[_], Y),
            Q = ll(U - g[q], X),
            F = !s.middlewareData.shift;
          let $ = Z,
            K = Q;
          if (
            ((r = s.middlewareData.shift) != null && r.enabled.x && (K = X),
            (c = s.middlewareData.shift) != null && c.enabled.y && ($ = Y),
            F && !j)
          ) {
            const ye = Nt(g.left, 0),
              be = Nt(g.right, 0),
              de = Nt(g.top, 0),
              Se = Nt(g.bottom, 0);
            M
              ? (K =
                  U -
                  2 * (ye !== 0 || be !== 0 ? ye + be : Nt(g.left, g.right)))
              : ($ =
                  O -
                  2 * (de !== 0 || Se !== 0 ? de + Se : Nt(g.top, g.bottom)));
          }
          await v({ ...s, availableWidth: K, availableHeight: $ });
          const ce = await p.getDimensions(y.floating);
          return U !== ce.width || O !== ce.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function Sr() {
  return typeof window < "u";
}
function wa(l) {
  return Wp(l) ? (l.nodeName || "").toLowerCase() : "#document";
}
function Et(l) {
  var s;
  return (
    (l == null || (s = l.ownerDocument) == null ? void 0 : s.defaultView) ||
    window
  );
}
function tn(l) {
  var s;
  return (s = (Wp(l) ? l.ownerDocument : l.document) || window.document) == null
    ? void 0
    : s.documentElement;
}
function Wp(l) {
  return Sr() ? l instanceof Node || l instanceof Et(l).Node : !1;
}
function Xt(l) {
  return Sr() ? l instanceof Element || l instanceof Et(l).Element : !1;
}
function wn(l) {
  return Sr() ? l instanceof HTMLElement || l instanceof Et(l).HTMLElement : !1;
}
function S0(l) {
  return !Sr() || typeof ShadowRoot > "u"
    ? !1
    : l instanceof ShadowRoot || l instanceof Et(l).ShadowRoot;
}
function Ms(l) {
  const { overflow: s, overflowX: r, overflowY: c, display: f } = Yt(l);
  return (
    /auto|scroll|overlay|hidden|clip/.test(s + c + r) &&
    f !== "inline" &&
    f !== "contents"
  );
}
function u2(l) {
  return /^(table|td|th)$/.test(wa(l));
}
function Nr(l) {
  try {
    if (l.matches(":popover-open")) return !0;
  } catch {}
  try {
    return l.matches(":modal");
  } catch {
    return !1;
  }
}
const f2 = /transform|translate|scale|rotate|perspective|filter/,
  d2 = /paint|layout|strict|content/,
  jl = (l) => !!l && l !== "none";
let $c;
function Mu(l) {
  const s = Xt(l) ? Yt(l) : l;
  return (
    jl(s.transform) ||
    jl(s.translate) ||
    jl(s.scale) ||
    jl(s.rotate) ||
    jl(s.perspective) ||
    (!_u() && (jl(s.backdropFilter) || jl(s.filter))) ||
    f2.test(s.willChange || "") ||
    d2.test(s.contain || "")
  );
}
function m2(l) {
  let s = al(l);
  for (; wn(s) && !ya(s); ) {
    if (Mu(s)) return s;
    if (Nr(s)) return null;
    s = al(s);
  }
  return null;
}
function _u() {
  return (
    $c == null &&
      ($c =
        typeof CSS < "u" &&
        CSS.supports &&
        CSS.supports("-webkit-backdrop-filter", "none")),
    $c
  );
}
function ya(l) {
  return /^(html|body|#document)$/.test(wa(l));
}
function Yt(l) {
  return Et(l).getComputedStyle(l);
}
function Er(l) {
  return Xt(l)
    ? { scrollLeft: l.scrollLeft, scrollTop: l.scrollTop }
    : { scrollLeft: l.scrollX, scrollTop: l.scrollY };
}
function al(l) {
  if (wa(l) === "html") return l;
  const s = l.assignedSlot || l.parentNode || (S0(l) && l.host) || tn(l);
  return S0(s) ? s.host : s;
}
function Ip(l) {
  const s = al(l);
  return ya(s)
    ? l.ownerDocument
      ? l.ownerDocument.body
      : l.body
    : wn(s) && Ms(s)
      ? s
      : Ip(s);
}
function Os(l, s, r) {
  var c;
  (s === void 0 && (s = []), r === void 0 && (r = !0));
  const f = Ip(l),
    d = f === ((c = l.ownerDocument) == null ? void 0 : c.body),
    p = Et(f);
  if (d) {
    const y = du(p);
    return s.concat(
      p,
      p.visualViewport || [],
      Ms(f) ? f : [],
      y && r ? Os(y) : [],
    );
  } else return s.concat(f, Os(f, [], r));
}
function du(l) {
  return l.parent && Object.getPrototypeOf(l.parent) ? l.frameElement : null;
}
function ex(l) {
  const s = Yt(l);
  let r = parseFloat(s.width) || 0,
    c = parseFloat(s.height) || 0;
  const f = wn(l),
    d = f ? l.offsetWidth : r,
    p = f ? l.offsetHeight : c,
    y = ir(r) !== d || ir(c) !== p;
  return (y && ((r = d), (c = p)), { width: r, height: c, $: y });
}
function Du(l) {
  return Xt(l) ? l : l.contextElement;
}
function xa(l) {
  const s = Du(l);
  if (!wn(s)) return en(1);
  const r = s.getBoundingClientRect(),
    { width: c, height: f, $: d } = ex(s);
  let p = (d ? ir(r.width) : r.width) / c,
    y = (d ? ir(r.height) : r.height) / f;
  return (
    (!p || !Number.isFinite(p)) && (p = 1),
    (!y || !Number.isFinite(y)) && (y = 1),
    { x: p, y }
  );
}
const h2 = en(0);
function tx(l) {
  const s = Et(l);
  return !_u() || !s.visualViewport
    ? h2
    : { x: s.visualViewport.offsetLeft, y: s.visualViewport.offsetTop };
}
function p2(l, s, r) {
  return (s === void 0 && (s = !1), !r || (s && r !== Et(l)) ? !1 : s);
}
function Ol(l, s, r, c) {
  (s === void 0 && (s = !1), r === void 0 && (r = !1));
  const f = l.getBoundingClientRect(),
    d = Du(l);
  let p = en(1);
  s && (c ? Xt(c) && (p = xa(c)) : (p = xa(l)));
  const y = p2(d, r, c) ? tx(d) : en(0);
  let v = (f.left + y.x) / p.x,
    h = (f.top + y.y) / p.y,
    g = f.width / p.x,
    N = f.height / p.y;
  if (d) {
    const j = Et(d),
      M = c && Xt(c) ? Et(c) : c;
    let U = j,
      O = du(U);
    for (; O && c && M !== U; ) {
      const _ = xa(O),
        q = O.getBoundingClientRect(),
        Y = Yt(O),
        X = q.left + (O.clientLeft + parseFloat(Y.paddingLeft)) * _.x,
        Z = q.top + (O.clientTop + parseFloat(Y.paddingTop)) * _.y;
      ((v *= _.x),
        (h *= _.y),
        (g *= _.x),
        (N *= _.y),
        (v += X),
        (h += Z),
        (U = Et(O)),
        (O = du(U)));
    }
  }
  return or({ width: g, height: N, x: v, y: h });
}
function jr(l, s) {
  const r = Er(l).scrollLeft;
  return s ? s.left + r : Ol(tn(l)).left + r;
}
function nx(l, s) {
  const r = l.getBoundingClientRect(),
    c = r.left + s.scrollLeft - jr(l, r),
    f = r.top + s.scrollTop;
  return { x: c, y: f };
}
function x2(l) {
  let { elements: s, rect: r, offsetParent: c, strategy: f } = l;
  const d = f === "fixed",
    p = tn(c),
    y = s ? Nr(s.floating) : !1;
  if (c === p || (y && d)) return r;
  let v = { scrollLeft: 0, scrollTop: 0 },
    h = en(1);
  const g = en(0),
    N = wn(c);
  if ((N || (!N && !d)) && ((wa(c) !== "body" || Ms(p)) && (v = Er(c)), N)) {
    const M = Ol(c);
    ((h = xa(c)), (g.x = M.x + c.clientLeft), (g.y = M.y + c.clientTop));
  }
  const j = p && !N && !d ? nx(p, v) : en(0);
  return {
    width: r.width * h.x,
    height: r.height * h.y,
    x: r.x * h.x - v.scrollLeft * h.x + g.x + j.x,
    y: r.y * h.y - v.scrollTop * h.y + g.y + j.y,
  };
}
function y2(l) {
  return Array.from(l.getClientRects());
}
function g2(l) {
  const s = tn(l),
    r = Er(l),
    c = l.ownerDocument.body,
    f = Nt(s.scrollWidth, s.clientWidth, c.scrollWidth, c.clientWidth),
    d = Nt(s.scrollHeight, s.clientHeight, c.scrollHeight, c.clientHeight);
  let p = -r.scrollLeft + jr(l);
  const y = -r.scrollTop;
  return (
    Yt(c).direction === "rtl" && (p += Nt(s.clientWidth, c.clientWidth) - f),
    { width: f, height: d, x: p, y }
  );
}
const N0 = 25;
function v2(l, s) {
  const r = Et(l),
    c = tn(l),
    f = r.visualViewport;
  let d = c.clientWidth,
    p = c.clientHeight,
    y = 0,
    v = 0;
  if (f) {
    ((d = f.width), (p = f.height));
    const g = _u();
    (!g || (g && s === "fixed")) && ((y = f.offsetLeft), (v = f.offsetTop));
  }
  const h = jr(c);
  if (h <= 0) {
    const g = c.ownerDocument,
      N = g.body,
      j = getComputedStyle(N),
      M =
        (g.compatMode === "CSS1Compat" &&
          parseFloat(j.marginLeft) + parseFloat(j.marginRight)) ||
        0,
      U = Math.abs(c.clientWidth - N.clientWidth - M);
    U <= N0 && (d -= U);
  } else h <= N0 && (d += h);
  return { width: d, height: p, x: y, y: v };
}
function b2(l, s) {
  const r = Ol(l, !0, s === "fixed"),
    c = r.top + l.clientTop,
    f = r.left + l.clientLeft,
    d = wn(l) ? xa(l) : en(1),
    p = l.clientWidth * d.x,
    y = l.clientHeight * d.y,
    v = f * d.x,
    h = c * d.y;
  return { width: p, height: y, x: v, y: h };
}
function E0(l, s, r) {
  let c;
  if (s === "viewport") c = v2(l, r);
  else if (s === "document") c = g2(tn(l));
  else if (Xt(s)) c = b2(s, r);
  else {
    const f = tx(l);
    c = { x: s.x - f.x, y: s.y - f.y, width: s.width, height: s.height };
  }
  return or(c);
}
function lx(l, s) {
  const r = al(l);
  return r === s || !Xt(r) || ya(r)
    ? !1
    : Yt(r).position === "fixed" || lx(r, s);
}
function w2(l, s) {
  const r = s.get(l);
  if (r) return r;
  let c = Os(l, [], !1).filter((y) => Xt(y) && wa(y) !== "body"),
    f = null;
  const d = Yt(l).position === "fixed";
  let p = d ? al(l) : l;
  for (; Xt(p) && !ya(p); ) {
    const y = Yt(p),
      v = Mu(p);
    (!v && y.position === "fixed" && (f = null),
      (
        d
          ? !v && !f
          : (!v &&
              y.position === "static" &&
              !!f &&
              (f.position === "absolute" || f.position === "fixed")) ||
            (Ms(p) && !v && lx(l, p))
      )
        ? (c = c.filter((g) => g !== p))
        : (f = y),
      (p = al(p)));
  }
  return (s.set(l, c), c);
}
function S2(l) {
  let { element: s, boundary: r, rootBoundary: c, strategy: f } = l;
  const p = [
      ...(r === "clippingAncestors"
        ? Nr(s)
          ? []
          : w2(s, this._c)
        : [].concat(r)),
      c,
    ],
    y = E0(s, p[0], f);
  let v = y.top,
    h = y.right,
    g = y.bottom,
    N = y.left;
  for (let j = 1; j < p.length; j++) {
    const M = E0(s, p[j], f);
    ((v = Nt(M.top, v)),
      (h = ll(M.right, h)),
      (g = ll(M.bottom, g)),
      (N = Nt(M.left, N)));
  }
  return { width: h - N, height: g - v, x: N, y: v };
}
function N2(l) {
  const { width: s, height: r } = ex(l);
  return { width: s, height: r };
}
function E2(l, s, r) {
  const c = wn(s),
    f = tn(s),
    d = r === "fixed",
    p = Ol(l, !0, d, s);
  let y = { scrollLeft: 0, scrollTop: 0 };
  const v = en(0);
  function h() {
    v.x = jr(f);
  }
  if (c || (!c && !d))
    if (((wa(s) !== "body" || Ms(f)) && (y = Er(s)), c)) {
      const M = Ol(s, !0, d, s);
      ((v.x = M.x + s.clientLeft), (v.y = M.y + s.clientTop));
    } else f && h();
  d && !c && f && h();
  const g = f && !c && !d ? nx(f, y) : en(0),
    N = p.left + y.scrollLeft - v.x - g.x,
    j = p.top + y.scrollTop - v.y - g.y;
  return { x: N, y: j, width: p.width, height: p.height };
}
function Wc(l) {
  return Yt(l).position === "static";
}
function j0(l, s) {
  if (!wn(l) || Yt(l).position === "fixed") return null;
  if (s) return s(l);
  let r = l.offsetParent;
  return (tn(l) === r && (r = r.ownerDocument.body), r);
}
function ax(l, s) {
  const r = Et(l);
  if (Nr(l)) return r;
  if (!wn(l)) {
    let f = al(l);
    for (; f && !ya(f); ) {
      if (Xt(f) && !Wc(f)) return f;
      f = al(f);
    }
    return r;
  }
  let c = j0(l, s);
  for (; c && u2(c) && Wc(c); ) c = j0(c, s);
  return c && ya(c) && Wc(c) && !Mu(c) ? r : c || m2(l) || r;
}
const j2 = async function (l) {
  const s = this.getOffsetParent || ax,
    r = this.getDimensions,
    c = await r(l.floating);
  return {
    reference: E2(l.reference, await s(l.floating), l.strategy),
    floating: { x: 0, y: 0, width: c.width, height: c.height },
  };
};
function A2(l) {
  return Yt(l).direction === "rtl";
}
const T2 = {
  convertOffsetParentRelativeRectToViewportRelativeRect: x2,
  getDocumentElement: tn,
  getClippingRect: S2,
  getOffsetParent: ax,
  getElementRects: j2,
  getClientRects: y2,
  getDimensions: N2,
  getScale: xa,
  isElement: Xt,
  isRTL: A2,
};
function sx(l, s) {
  return (
    l.x === s.x && l.y === s.y && l.width === s.width && l.height === s.height
  );
}
function O2(l, s) {
  let r = null,
    c;
  const f = tn(l);
  function d() {
    var y;
    (clearTimeout(c), (y = r) == null || y.disconnect(), (r = null));
  }
  function p(y, v) {
    (y === void 0 && (y = !1), v === void 0 && (v = 1), d());
    const h = l.getBoundingClientRect(),
      { left: g, top: N, width: j, height: M } = h;
    if ((y || s(), !j || !M)) return;
    const U = Ii(N),
      O = Ii(f.clientWidth - (g + j)),
      _ = Ii(f.clientHeight - (N + M)),
      q = Ii(g),
      X = {
        rootMargin: -U + "px " + -O + "px " + -_ + "px " + -q + "px",
        threshold: Nt(0, ll(1, v)) || 1,
      };
    let Z = !0;
    function Q(F) {
      const $ = F[0].intersectionRatio;
      if ($ !== v) {
        if (!Z) return p();
        $
          ? p(!1, $)
          : (c = setTimeout(() => {
              p(!1, 1e-7);
            }, 1e3));
      }
      ($ === 1 && !sx(h, l.getBoundingClientRect()) && p(), (Z = !1));
    }
    try {
      r = new IntersectionObserver(Q, { ...X, root: f.ownerDocument });
    } catch {
      r = new IntersectionObserver(Q, X);
    }
    r.observe(l);
  }
  return (p(!0), d);
}
function C2(l, s, r, c) {
  c === void 0 && (c = {});
  const {
      ancestorScroll: f = !0,
      ancestorResize: d = !0,
      elementResize: p = typeof ResizeObserver == "function",
      layoutShift: y = typeof IntersectionObserver == "function",
      animationFrame: v = !1,
    } = c,
    h = Du(l),
    g = f || d ? [...(h ? Os(h) : []), ...(s ? Os(s) : [])] : [];
  g.forEach((q) => {
    (f && q.addEventListener("scroll", r, { passive: !0 }),
      d && q.addEventListener("resize", r));
  });
  const N = h && y ? O2(h, r) : null;
  let j = -1,
    M = null;
  p &&
    ((M = new ResizeObserver((q) => {
      let [Y] = q;
      (Y &&
        Y.target === h &&
        M &&
        s &&
        (M.unobserve(s),
        cancelAnimationFrame(j),
        (j = requestAnimationFrame(() => {
          var X;
          (X = M) == null || X.observe(s);
        }))),
        r());
    })),
    h && !v && M.observe(h),
    s && M.observe(s));
  let U,
    O = v ? Ol(l) : null;
  v && _();
  function _() {
    const q = Ol(l);
    (O && !sx(O, q) && r(), (O = q), (U = requestAnimationFrame(_)));
  }
  return (
    r(),
    () => {
      var q;
      (g.forEach((Y) => {
        (f && Y.removeEventListener("scroll", r),
          d && Y.removeEventListener("resize", r));
      }),
        N?.(),
        (q = M) == null || q.disconnect(),
        (M = null),
        v && cancelAnimationFrame(U));
    }
  );
}
const R2 = i2,
  M2 = r2,
  _2 = l2,
  D2 = c2,
  z2 = a2,
  A0 = n2,
  U2 = o2,
  k2 = (l, s, r) => {
    const c = new Map(),
      f = { platform: T2, ...r },
      d = { ...f.platform, _c: c };
    return t2(l, s, { ...f, platform: d });
  };
var H2 = typeof document < "u",
  L2 = function () {},
  lr = H2 ? w.useLayoutEffect : L2;
function cr(l, s) {
  if (l === s) return !0;
  if (typeof l != typeof s) return !1;
  if (typeof l == "function" && l.toString() === s.toString()) return !0;
  let r, c, f;
  if (l && s && typeof l == "object") {
    if (Array.isArray(l)) {
      if (((r = l.length), r !== s.length)) return !1;
      for (c = r; c-- !== 0; ) if (!cr(l[c], s[c])) return !1;
      return !0;
    }
    if (((f = Object.keys(l)), (r = f.length), r !== Object.keys(s).length))
      return !1;
    for (c = r; c-- !== 0; ) if (!{}.hasOwnProperty.call(s, f[c])) return !1;
    for (c = r; c-- !== 0; ) {
      const d = f[c];
      if (!(d === "_owner" && l.$$typeof) && !cr(l[d], s[d])) return !1;
    }
    return !0;
  }
  return l !== l && s !== s;
}
function ix(l) {
  return typeof window > "u"
    ? 1
    : (l.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function T0(l, s) {
  const r = ix(l);
  return Math.round(s * r) / r;
}
function Ic(l) {
  const s = w.useRef(l);
  return (
    lr(() => {
      s.current = l;
    }),
    s
  );
}
function B2(l) {
  l === void 0 && (l = {});
  const {
      placement: s = "bottom",
      strategy: r = "absolute",
      middleware: c = [],
      platform: f,
      elements: { reference: d, floating: p } = {},
      transform: y = !0,
      whileElementsMounted: v,
      open: h,
    } = l,
    [g, N] = w.useState({
      x: 0,
      y: 0,
      strategy: r,
      placement: s,
      middlewareData: {},
      isPositioned: !1,
    }),
    [j, M] = w.useState(c);
  cr(j, c) || M(c);
  const [U, O] = w.useState(null),
    [_, q] = w.useState(null),
    Y = w.useCallback((V) => {
      V !== F.current && ((F.current = V), O(V));
    }, []),
    X = w.useCallback((V) => {
      V !== $.current && (($.current = V), q(V));
    }, []),
    Z = d || U,
    Q = p || _,
    F = w.useRef(null),
    $ = w.useRef(null),
    K = w.useRef(g),
    ce = v != null,
    ye = Ic(v),
    be = Ic(f),
    de = Ic(h),
    Se = w.useCallback(() => {
      if (!F.current || !$.current) return;
      const V = { placement: s, strategy: r, middleware: j };
      (be.current && (V.platform = be.current),
        k2(F.current, $.current, V).then((se) => {
          const b = { ...se, isPositioned: de.current !== !1 };
          W.current &&
            !cr(K.current, b) &&
            ((K.current = b),
            xr.flushSync(() => {
              N(b);
            }));
        }));
    }, [j, s, r, be, de]);
  lr(() => {
    h === !1 &&
      K.current.isPositioned &&
      ((K.current.isPositioned = !1), N((V) => ({ ...V, isPositioned: !1 })));
  }, [h]);
  const W = w.useRef(!1);
  (lr(
    () => (
      (W.current = !0),
      () => {
        W.current = !1;
      }
    ),
    [],
  ),
    lr(() => {
      if ((Z && (F.current = Z), Q && ($.current = Q), Z && Q)) {
        if (ye.current) return ye.current(Z, Q, Se);
        Se();
      }
    }, [Z, Q, Se, ye, ce]));
  const fe = w.useMemo(
      () => ({ reference: F, floating: $, setReference: Y, setFloating: X }),
      [Y, X],
    ),
    C = w.useMemo(() => ({ reference: Z, floating: Q }), [Z, Q]),
    G = w.useMemo(() => {
      const V = { position: r, left: 0, top: 0 };
      if (!C.floating) return V;
      const se = T0(C.floating, g.x),
        b = T0(C.floating, g.y);
      return y
        ? {
            ...V,
            transform: "translate(" + se + "px, " + b + "px)",
            ...(ix(C.floating) >= 1.5 && { willChange: "transform" }),
          }
        : { position: r, left: se, top: b };
    }, [r, y, C.floating, g.x, g.y]);
  return w.useMemo(
    () => ({ ...g, update: Se, refs: fe, elements: C, floatingStyles: G }),
    [g, Se, fe, C, G],
  );
}
const q2 = (l) => {
    function s(r) {
      return {}.hasOwnProperty.call(r, "current");
    }
    return {
      name: "arrow",
      options: l,
      fn(r) {
        const { element: c, padding: f } = typeof l == "function" ? l(r) : l;
        return c && s(c)
          ? c.current != null
            ? A0({ element: c.current, padding: f }).fn(r)
            : {}
          : c
            ? A0({ element: c, padding: f }).fn(r)
            : {};
      },
    };
  },
  G2 = (l, s) => {
    const r = R2(l);
    return { name: r.name, fn: r.fn, options: [l, s] };
  },
  X2 = (l, s) => {
    const r = M2(l);
    return { name: r.name, fn: r.fn, options: [l, s] };
  },
  Y2 = (l, s) => ({ fn: U2(l).fn, options: [l, s] }),
  Q2 = (l, s) => {
    const r = _2(l);
    return { name: r.name, fn: r.fn, options: [l, s] };
  },
  V2 = (l, s) => {
    const r = D2(l);
    return { name: r.name, fn: r.fn, options: [l, s] };
  },
  Z2 = (l, s) => {
    const r = z2(l);
    return { name: r.name, fn: r.fn, options: [l, s] };
  },
  K2 = (l, s) => {
    const r = q2(l);
    return { name: r.name, fn: r.fn, options: [l, s] };
  };
var P2 = "Arrow",
  rx = w.forwardRef((l, s) => {
    const { children: r, width: c = 10, height: f = 5, ...d } = l;
    return u.jsx(dt.svg, {
      ...d,
      ref: s,
      width: c,
      height: f,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: l.asChild ? r : u.jsx("polygon", { points: "0,0 30,0 15,10" }),
    });
  });
rx.displayName = P2;
var F2 = rx;
function J2(l) {
  const [s, r] = w.useState(void 0);
  return (
    tl(() => {
      if (l) {
        r({ width: l.offsetWidth, height: l.offsetHeight });
        const c = new ResizeObserver((f) => {
          if (!Array.isArray(f) || !f.length) return;
          const d = f[0];
          let p, y;
          if ("borderBoxSize" in d) {
            const v = d.borderBoxSize,
              h = Array.isArray(v) ? v[0] : v;
            ((p = h.inlineSize), (y = h.blockSize));
          } else ((p = l.offsetWidth), (y = l.offsetHeight));
          r({ width: p, height: y });
        });
        return (c.observe(l, { box: "border-box" }), () => c.unobserve(l));
      } else r(void 0);
    }, [l]),
    s
  );
}
var ox = "Popper",
  [cx, ux] = yr(ox),
  [wN, fx] = cx(ox),
  dx = "PopperAnchor",
  mx = w.forwardRef((l, s) => {
    const { __scopePopper: r, virtualRef: c, ...f } = l,
      d = fx(dx, r),
      p = w.useRef(null),
      y = Gt(s, p),
      v = w.useRef(null);
    return (
      w.useEffect(() => {
        const h = v.current;
        ((v.current = c?.current || p.current),
          h !== v.current && d.onAnchorChange(v.current));
      }),
      c ? null : u.jsx(dt.div, { ...f, ref: y })
    );
  });
mx.displayName = dx;
var zu = "PopperContent",
  [$2, W2] = cx(zu),
  hx = w.forwardRef((l, s) => {
    const {
        __scopePopper: r,
        side: c = "bottom",
        sideOffset: f = 0,
        align: d = "center",
        alignOffset: p = 0,
        arrowPadding: y = 0,
        avoidCollisions: v = !0,
        collisionBoundary: h = [],
        collisionPadding: g = 0,
        sticky: N = "partial",
        hideWhenDetached: j = !1,
        updatePositionStrategy: M = "optimized",
        onPlaced: U,
        ...O
      } = l,
      _ = fx(zu, r),
      [q, Y] = w.useState(null),
      X = Gt(s, (Ue) => Y(Ue)),
      [Z, Q] = w.useState(null),
      F = J2(Z),
      $ = F?.width ?? 0,
      K = F?.height ?? 0,
      ce = c + (d !== "center" ? "-" + d : ""),
      ye =
        typeof g == "number"
          ? g
          : { top: 0, right: 0, bottom: 0, left: 0, ...g },
      be = Array.isArray(h) ? h : [h],
      de = be.length > 0,
      Se = { padding: ye, boundary: be.filter(eS), altBoundary: de },
      {
        refs: W,
        floatingStyles: fe,
        placement: C,
        isPositioned: G,
        middlewareData: V,
      } = B2({
        strategy: "fixed",
        placement: ce,
        whileElementsMounted: (...Ue) =>
          C2(...Ue, { animationFrame: M === "always" }),
        elements: { reference: _.anchor },
        middleware: [
          G2({ mainAxis: f + K, alignmentAxis: p }),
          v &&
            X2({
              mainAxis: !0,
              crossAxis: !1,
              limiter: N === "partial" ? Y2() : void 0,
              ...Se,
            }),
          v && Q2({ ...Se }),
          V2({
            ...Se,
            apply: ({
              elements: Ue,
              rects: je,
              availableWidth: Ae,
              availableHeight: Sn,
            }) => {
              const { width: Ut, height: Qt } = je.reference,
                jt = Ue.floating.style;
              (jt.setProperty("--radix-popper-available-width", `${Ae}px`),
                jt.setProperty("--radix-popper-available-height", `${Sn}px`),
                jt.setProperty("--radix-popper-anchor-width", `${Ut}px`),
                jt.setProperty("--radix-popper-anchor-height", `${Qt}px`));
            },
          }),
          Z && K2({ element: Z, padding: y }),
          tS({ arrowWidth: $, arrowHeight: K }),
          j && Z2({ strategy: "referenceHidden", ...Se }),
        ],
      }),
      [se, b] = yx(C),
      B = el(U);
    tl(() => {
      G && B?.();
    }, [G, B]);
    const J = V.arrow?.x,
      P = V.arrow?.y,
      le = V.arrow?.centerOffset !== 0,
      [re, ne] = w.useState();
    return (
      tl(() => {
        q && ne(window.getComputedStyle(q).zIndex);
      }, [q]),
      u.jsx("div", {
        ref: W.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...fe,
          transform: G ? fe.transform : "translate(0, -200%)",
          minWidth: "max-content",
          zIndex: re,
          "--radix-popper-transform-origin": [
            V.transformOrigin?.x,
            V.transformOrigin?.y,
          ].join(" "),
          ...(V.hide?.referenceHidden && {
            visibility: "hidden",
            pointerEvents: "none",
          }),
        },
        dir: l.dir,
        children: u.jsx($2, {
          scope: r,
          placedSide: se,
          onArrowChange: Q,
          arrowX: J,
          arrowY: P,
          shouldHideArrow: le,
          children: u.jsx(dt.div, {
            "data-side": se,
            "data-align": b,
            ...O,
            ref: X,
            style: { ...O.style, animation: G ? void 0 : "none" },
          }),
        }),
      })
    );
  });
hx.displayName = zu;
var px = "PopperArrow",
  I2 = { top: "bottom", right: "left", bottom: "top", left: "right" },
  xx = w.forwardRef(function (s, r) {
    const { __scopePopper: c, ...f } = s,
      d = W2(px, c),
      p = I2[d.placedSide];
    return u.jsx("span", {
      ref: d.onArrowChange,
      style: {
        position: "absolute",
        left: d.arrowX,
        top: d.arrowY,
        [p]: 0,
        transformOrigin: {
          top: "",
          right: "0 0",
          bottom: "center 0",
          left: "100% 0",
        }[d.placedSide],
        transform: {
          top: "translateY(100%)",
          right: "translateY(50%) rotate(90deg) translateX(-50%)",
          bottom: "rotate(180deg)",
          left: "translateY(50%) rotate(-90deg) translateX(50%)",
        }[d.placedSide],
        visibility: d.shouldHideArrow ? "hidden" : void 0,
      },
      children: u.jsx(F2, {
        ...f,
        ref: r,
        style: { ...f.style, display: "block" },
      }),
    });
  });
xx.displayName = px;
function eS(l) {
  return l !== null;
}
var tS = (l) => ({
  name: "transformOrigin",
  options: l,
  fn(s) {
    const { placement: r, rects: c, middlewareData: f } = s,
      p = f.arrow?.centerOffset !== 0,
      y = p ? 0 : l.arrowWidth,
      v = p ? 0 : l.arrowHeight,
      [h, g] = yx(r),
      N = { start: "0%", center: "50%", end: "100%" }[g],
      j = (f.arrow?.x ?? 0) + y / 2,
      M = (f.arrow?.y ?? 0) + v / 2;
    let U = "",
      O = "";
    return (
      h === "bottom"
        ? ((U = p ? N : `${j}px`), (O = `${-v}px`))
        : h === "top"
          ? ((U = p ? N : `${j}px`), (O = `${c.floating.height + v}px`))
          : h === "right"
            ? ((U = `${-v}px`), (O = p ? N : `${M}px`))
            : h === "left" &&
              ((U = `${c.floating.width + v}px`), (O = p ? N : `${M}px`)),
      { data: { x: U, y: O } }
    );
  },
});
function yx(l) {
  const [s, r = "center"] = l.split("-");
  return [s, r];
}
var nS = mx,
  lS = hx,
  aS = xx,
  [Ar] = yr("Tooltip", [ux]),
  Uu = ux(),
  gx = "TooltipProvider",
  sS = 700,
  O0 = "tooltip.open",
  [iS, vx] = Ar(gx),
  bx = (l) => {
    const {
        __scopeTooltip: s,
        delayDuration: r = sS,
        skipDelayDuration: c = 300,
        disableHoverableContent: f = !1,
        children: d,
      } = l,
      p = w.useRef(!0),
      y = w.useRef(!1),
      v = w.useRef(0);
    return (
      w.useEffect(() => {
        const h = v.current;
        return () => window.clearTimeout(h);
      }, []),
      u.jsx(iS, {
        scope: s,
        isOpenDelayedRef: p,
        delayDuration: r,
        onOpen: w.useCallback(() => {
          (window.clearTimeout(v.current), (p.current = !1));
        }, []),
        onClose: w.useCallback(() => {
          (window.clearTimeout(v.current),
            (v.current = window.setTimeout(() => (p.current = !0), c)));
        }, [c]),
        isPointerInTransitRef: y,
        onPointerInTransitChange: w.useCallback((h) => {
          y.current = h;
        }, []),
        disableHoverableContent: f,
        children: d,
      })
    );
  };
bx.displayName = gx;
var wx = "Tooltip",
  [SN, _s] = Ar(wx),
  mu = "TooltipTrigger",
  rS = w.forwardRef((l, s) => {
    const { __scopeTooltip: r, ...c } = l,
      f = _s(mu, r),
      d = vx(mu, r),
      p = Uu(r),
      y = w.useRef(null),
      v = Gt(s, y, f.onTriggerChange),
      h = w.useRef(!1),
      g = w.useRef(!1),
      N = w.useCallback(() => (h.current = !1), []);
    return (
      w.useEffect(
        () => () => document.removeEventListener("pointerup", N),
        [N],
      ),
      u.jsx(nS, {
        asChild: !0,
        ...p,
        children: u.jsx(dt.button, {
          "aria-describedby": f.open ? f.contentId : void 0,
          "data-state": f.stateAttribute,
          ...c,
          ref: v,
          onPointerMove: Pe(l.onPointerMove, (j) => {
            j.pointerType !== "touch" &&
              !g.current &&
              !d.isPointerInTransitRef.current &&
              (f.onTriggerEnter(), (g.current = !0));
          }),
          onPointerLeave: Pe(l.onPointerLeave, () => {
            (f.onTriggerLeave(), (g.current = !1));
          }),
          onPointerDown: Pe(l.onPointerDown, () => {
            (f.open && f.onClose(),
              (h.current = !0),
              document.addEventListener("pointerup", N, { once: !0 }));
          }),
          onFocus: Pe(l.onFocus, () => {
            h.current || f.onOpen();
          }),
          onBlur: Pe(l.onBlur, f.onClose),
          onClick: Pe(l.onClick, f.onClose),
        }),
      })
    );
  });
rS.displayName = mu;
var ku = "TooltipPortal",
  [oS, cS] = Ar(ku, { forceMount: void 0 }),
  Sx = (l) => {
    const { __scopeTooltip: s, forceMount: r, children: c, container: f } = l,
      d = _s(ku, s);
    return u.jsx(oS, {
      scope: s,
      forceMount: r,
      children: u.jsx(gr, {
        present: r || d.open,
        children: u.jsx(wu, { asChild: !0, container: f, children: c }),
      }),
    });
  };
Sx.displayName = ku;
var ga = "TooltipContent",
  Nx = w.forwardRef((l, s) => {
    const r = cS(ga, l.__scopeTooltip),
      { forceMount: c = r.forceMount, side: f = "top", ...d } = l,
      p = _s(ga, l.__scopeTooltip);
    return u.jsx(gr, {
      present: c || p.open,
      children: p.disableHoverableContent
        ? u.jsx(Ex, { side: f, ...d, ref: s })
        : u.jsx(uS, { side: f, ...d, ref: s }),
    });
  }),
  uS = w.forwardRef((l, s) => {
    const r = _s(ga, l.__scopeTooltip),
      c = vx(ga, l.__scopeTooltip),
      f = w.useRef(null),
      d = Gt(s, f),
      [p, y] = w.useState(null),
      { trigger: v, onClose: h } = r,
      g = f.current,
      { onPointerInTransitChange: N } = c,
      j = w.useCallback(() => {
        (y(null), N(!1));
      }, [N]),
      M = w.useCallback(
        (U, O) => {
          const _ = U.currentTarget,
            q = { x: U.clientX, y: U.clientY },
            Y = pS(q, _.getBoundingClientRect()),
            X = xS(q, Y),
            Z = yS(O.getBoundingClientRect()),
            Q = vS([...X, ...Z]);
          (y(Q), N(!0));
        },
        [N],
      );
    return (
      w.useEffect(() => () => j(), [j]),
      w.useEffect(() => {
        if (v && g) {
          const U = (_) => M(_, g),
            O = (_) => M(_, v);
          return (
            v.addEventListener("pointerleave", U),
            g.addEventListener("pointerleave", O),
            () => {
              (v.removeEventListener("pointerleave", U),
                g.removeEventListener("pointerleave", O));
            }
          );
        }
      }, [v, g, M, j]),
      w.useEffect(() => {
        if (p) {
          const U = (O) => {
            const _ = O.target,
              q = { x: O.clientX, y: O.clientY },
              Y = v?.contains(_) || g?.contains(_),
              X = !gS(q, p);
            Y ? j() : X && (j(), h());
          };
          return (
            document.addEventListener("pointermove", U),
            () => document.removeEventListener("pointermove", U)
          );
        }
      }, [v, g, p, h, j]),
      u.jsx(Ex, { ...l, ref: d })
    );
  }),
  [fS, dS] = Ar(wx, { isInside: !1 }),
  mS = xb("TooltipContent"),
  Ex = w.forwardRef((l, s) => {
    const {
        __scopeTooltip: r,
        children: c,
        "aria-label": f,
        onEscapeKeyDown: d,
        onPointerDownOutside: p,
        ...y
      } = l,
      v = _s(ga, r),
      h = Uu(r),
      { onClose: g } = v;
    return (
      w.useEffect(
        () => (
          document.addEventListener(O0, g),
          () => document.removeEventListener(O0, g)
        ),
        [g],
      ),
      w.useEffect(() => {
        if (v.trigger) {
          const N = (j) => {
            j.target?.contains(v.trigger) && g();
          };
          return (
            window.addEventListener("scroll", N, { capture: !0 }),
            () => window.removeEventListener("scroll", N, { capture: !0 })
          );
        }
      }, [v.trigger, g]),
      u.jsx(bu, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: d,
        onPointerDownOutside: p,
        onFocusOutside: (N) => N.preventDefault(),
        onDismiss: g,
        children: u.jsxs(lS, {
          "data-state": v.stateAttribute,
          ...h,
          ...y,
          ref: s,
          style: {
            ...y.style,
            "--radix-tooltip-content-transform-origin":
              "var(--radix-popper-transform-origin)",
            "--radix-tooltip-content-available-width":
              "var(--radix-popper-available-width)",
            "--radix-tooltip-content-available-height":
              "var(--radix-popper-available-height)",
            "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-tooltip-trigger-height":
              "var(--radix-popper-anchor-height)",
          },
          children: [
            u.jsx(mS, { children: c }),
            u.jsx(fS, {
              scope: r,
              isInside: !0,
              children: u.jsx(Gb, {
                id: v.contentId,
                role: "tooltip",
                children: f || c,
              }),
            }),
          ],
        }),
      })
    );
  });
Nx.displayName = ga;
var jx = "TooltipArrow",
  hS = w.forwardRef((l, s) => {
    const { __scopeTooltip: r, ...c } = l,
      f = Uu(r);
    return dS(jx, r).isInside ? null : u.jsx(aS, { ...f, ...c, ref: s });
  });
hS.displayName = jx;
function pS(l, s) {
  const r = Math.abs(s.top - l.y),
    c = Math.abs(s.bottom - l.y),
    f = Math.abs(s.right - l.x),
    d = Math.abs(s.left - l.x);
  switch (Math.min(r, c, f, d)) {
    case d:
      return "left";
    case f:
      return "right";
    case r:
      return "top";
    case c:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function xS(l, s, r = 5) {
  const c = [];
  switch (s) {
    case "top":
      c.push({ x: l.x - r, y: l.y + r }, { x: l.x + r, y: l.y + r });
      break;
    case "bottom":
      c.push({ x: l.x - r, y: l.y - r }, { x: l.x + r, y: l.y - r });
      break;
    case "left":
      c.push({ x: l.x + r, y: l.y - r }, { x: l.x + r, y: l.y + r });
      break;
    case "right":
      c.push({ x: l.x - r, y: l.y - r }, { x: l.x - r, y: l.y + r });
      break;
  }
  return c;
}
function yS(l) {
  const { top: s, right: r, bottom: c, left: f } = l;
  return [
    { x: f, y: s },
    { x: r, y: s },
    { x: r, y: c },
    { x: f, y: c },
  ];
}
function gS(l, s) {
  const { x: r, y: c } = l;
  let f = !1;
  for (let d = 0, p = s.length - 1; d < s.length; p = d++) {
    const y = s[d],
      v = s[p],
      h = y.x,
      g = y.y,
      N = v.x,
      j = v.y;
    g > c != j > c && r < ((N - h) * (c - g)) / (j - g) + h && (f = !f);
  }
  return f;
}
function vS(l) {
  const s = l.slice();
  return (
    s.sort((r, c) =>
      r.x < c.x ? -1 : r.x > c.x ? 1 : r.y < c.y ? -1 : r.y > c.y ? 1 : 0,
    ),
    bS(s)
  );
}
function bS(l) {
  if (l.length <= 1) return l.slice();
  const s = [];
  for (let c = 0; c < l.length; c++) {
    const f = l[c];
    for (; s.length >= 2; ) {
      const d = s[s.length - 1],
        p = s[s.length - 2];
      if ((d.x - p.x) * (f.y - p.y) >= (d.y - p.y) * (f.x - p.x)) s.pop();
      else break;
    }
    s.push(f);
  }
  s.pop();
  const r = [];
  for (let c = l.length - 1; c >= 0; c--) {
    const f = l[c];
    for (; r.length >= 2; ) {
      const d = r[r.length - 1],
        p = r[r.length - 2];
      if ((d.x - p.x) * (f.y - p.y) >= (d.y - p.y) * (f.x - p.x)) r.pop();
      else break;
    }
    r.push(f);
  }
  return (
    r.pop(),
    s.length === 1 && r.length === 1 && s[0].x === r[0].x && s[0].y === r[0].y
      ? s
      : s.concat(r)
  );
}
var wS = bx,
  SS = Sx,
  Ax = Nx;
const NS = wS,
  ES = w.forwardRef(({ className: l, sideOffset: s = 4, ...r }, c) =>
    u.jsx(SS, {
      children: u.jsx(Ax, {
        ref: c,
        sideOffset: s,
        className: mt(
          "z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-tooltip-content-transform-origin]",
          l,
        ),
        ...r,
      }),
    }),
  );
ES.displayName = Ax.displayName;
var jS = Symbol.for("react.lazy"),
  ur = hu[" use ".trim().toString()];
function AS(l) {
  return typeof l == "object" && l !== null && "then" in l;
}
function Tx(l) {
  return (
    l != null &&
    typeof l == "object" &&
    "$$typeof" in l &&
    l.$$typeof === jS &&
    "_payload" in l &&
    AS(l._payload)
  );
}
function TS(l) {
  const s = CS(l),
    r = w.forwardRef((c, f) => {
      let { children: d, ...p } = c;
      Tx(d) && typeof ur == "function" && (d = ur(d._payload));
      const y = w.Children.toArray(d),
        v = y.find(MS);
      if (v) {
        const h = v.props.children,
          g = y.map((N) =>
            N === v
              ? w.Children.count(h) > 1
                ? w.Children.only(null)
                : w.isValidElement(h)
                  ? h.props.children
                  : null
              : N,
          );
        return u.jsx(s, {
          ...p,
          ref: f,
          children: w.isValidElement(h) ? w.cloneElement(h, void 0, g) : null,
        });
      }
      return u.jsx(s, { ...p, ref: f, children: d });
    });
  return ((r.displayName = `${l}.Slot`), r);
}
var OS = TS("Slot");
function CS(l) {
  const s = w.forwardRef((r, c) => {
    let { children: f, ...d } = r;
    if (
      (Tx(f) && typeof ur == "function" && (f = ur(f._payload)),
      w.isValidElement(f))
    ) {
      const p = DS(f),
        y = _S(d, f.props);
      return (
        f.type !== w.Fragment && (y.ref = c ? vu(c, p) : p),
        w.cloneElement(f, y)
      );
    }
    return w.Children.count(f) > 1 ? w.Children.only(null) : null;
  });
  return ((s.displayName = `${l}.SlotClone`), s);
}
var RS = Symbol("radix.slottable");
function MS(l) {
  return (
    w.isValidElement(l) &&
    typeof l.type == "function" &&
    "__radixId" in l.type &&
    l.type.__radixId === RS
  );
}
function _S(l, s) {
  const r = { ...s };
  for (const c in s) {
    const f = l[c],
      d = s[c];
    /^on[A-Z]/.test(c)
      ? f && d
        ? (r[c] = (...y) => {
            const v = d(...y);
            return (f(...y), v);
          })
        : f && (r[c] = f)
      : c === "style"
        ? (r[c] = { ...f, ...d })
        : c === "className" && (r[c] = [f, d].filter(Boolean).join(" "));
  }
  return { ...l, ...r };
}
function DS(l) {
  let s = Object.getOwnPropertyDescriptor(l.props, "ref")?.get,
    r = s && "isReactWarning" in s && s.isReactWarning;
  return r
    ? l.ref
    : ((s = Object.getOwnPropertyDescriptor(l, "ref")?.get),
      (r = s && "isReactWarning" in s && s.isReactWarning),
      r ? l.props.ref : l.props.ref || l.ref);
}
const zS = Np(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover-elevate active-elevate-2",
    {
      variants: {
        variant: {
          default:
            "bg-primary text-primary-foreground border border-primary-border",
          destructive:
            "bg-destructive text-destructive-foreground shadow-sm border-destructive-border",
          outline:
            " border [border-color:var(--button-outline)] shadow-xs active:shadow-none ",
          secondary:
            "border bg-secondary text-secondary-foreground border border-secondary-border ",
          ghost: "border border-transparent",
          link: "text-primary underline-offset-4 hover:underline",
        },
        size: {
          default: "min-h-9 px-4 py-2",
          sm: "min-h-8 rounded-md px-3 text-xs",
          lg: "min-h-10 rounded-md px-8",
          icon: "h-9 w-9",
        },
      },
      defaultVariants: { variant: "default", size: "default" },
    },
  ),
  qe = w.forwardRef(
    ({ className: l, variant: s, size: r, asChild: c = !1, ...f }, d) => {
      const p = c ? OS : "button";
      return u.jsx(p, {
        className: mt(zS({ variant: s, size: r, className: l })),
        ref: d,
        ...f,
      });
    },
  );
qe.displayName = "Button";
const C0 = [
  { href: "/", label: "الرئيسية" },
  { href: "/markets", label: "الأسواق" },
  { href: "/charts", label: "📊 الرسوم البيانية" },
  { href: "/packages", label: "الباقات الاستثمارية" },
  { href: "/about", label: "عن الشركة" },
  { href: "/register", label: "التسجيل" },
  { href: "/contact", label: "تواصل معنا" },
];
function US() {
  const [l, s] = w.useState(!1),
    [r] = G0();
  return u.jsxs("nav", {
    className:
      "fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-yellow-500/20",
    children: [
      u.jsx("div", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
        children: u.jsxs("div", {
          className: "flex items-center justify-between h-16",
          children: [
            u.jsxs($t, {
              href: "/",
              className: "flex items-center gap-2",
              children: [
                u.jsx(qt, {
                  className:
                    "w-7 h-7 sm:w-8 sm:h-8 text-yellow-400 glow-animate flex-shrink-0",
                }),
                u.jsxs("div", {
                  children: [
                    u.jsx("div", {
                      className:
                        "text-sm sm:text-base font-black shimmer-text leading-tight",
                      children: "  كوانتكس",
                    }),
                    u.jsx("div", {
                      className:
                        "text-[10px] sm:text-xs text-yellow-400/70 leading-tight",
                      children: "💼✨ منصة استثمارية للأسهم الفوركس والعملات الرقمية. 📊💰",
                    }),
                  ],
                }),
              ],
            }),
            u.jsx("div", {
              className: "hidden lg:flex items-center gap-1",
              children: C0.map((c) =>
                u.jsx(
                  $t,
                  {
                    href: c.href,
                    children: u.jsx("span", {
                      className: `px-3 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer hover:text-yellow-400 hover:bg-yellow-400/10 ${r === c.href ? "text-yellow-400 bg-yellow-400/10" : "text-white/80"}`,
                      children: c.label,
                    }),
                  },
                  c.href,
                ),
              ),
            }),
            u.jsxs("div", {
              className: "hidden md:flex items-center gap-2",
              children: [
                u.jsx("a", {
                  href: "https://t.me/A_M_ut",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  children: u.jsxs(qe, {
                    size: "sm",
                    variant: "outline",
                    className:
                      "border-yellow-500/50 text-yellow-400 hover:bg-yellow-400 hover:text-black gap-1",
                    children: [u.jsx(It, { className: "w-4 h-4" }), "تيليغرام"],
                  }),
                }),
                u.jsx("a", {
                  href: "https://wa.me/966563718419",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  children: u.jsxs(qe, {
                    size: "sm",
                    className:
                      "bg-yellow-500 hover:bg-yellow-400 text-black font-bold gap-1",
                    children: [u.jsx(nl, { className: "w-4 h-4" }), "واتساب"],
                  }),
                }),
              ],
            }),
            u.jsx("button", {
              className: "lg:hidden text-white",
              onClick: () => s(!l),
              children: l
                ? u.jsx(Rp, { className: "w-6 h-6" })
                : u.jsx(k1, { className: "w-6 h-6" }),
            }),
          ],
        }),
      }),
      l &&
        u.jsxs("div", {
          className:
            "lg:hidden bg-black/95 border-t border-yellow-500/20 px-4 py-4 space-y-2",
          children: [
            C0.map((c) =>
              u.jsx(
                $t,
                {
                  href: c.href,
                  children: u.jsx("span", {
                    className: `block px-4 py-3 rounded-lg text-sm font-medium cursor-pointer transition-all ${r === c.href ? "text-yellow-400 bg-yellow-400/10" : "text-white/80 hover:text-yellow-400 hover:bg-yellow-400/5"}`,
                    onClick: () => s(!1),
                    children: c.label,
                  }),
                },
                c.href,
              ),
            ),
            u.jsxs("div", {
              className: "flex gap-2 pt-2",
              children: [
                u.jsx("a", {
                  href: "https://t.me/A_M_ut",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "flex-1",
                  children: u.jsxs(qe, {
                    className: "w-full",
                    variant: "outline",
                    size: "sm",
                    children: [
                      u.jsx(It, { className: "w-4 h-4 mr-1" }),
                      " تيليغرام",
                    ],
                  }),
                }),
                u.jsx("a", {
                  href: "https://wa.me/966563718419",
                  className: "flex-1",
                  children: u.jsxs(qe, {
                    className:
                      "w-full bg-yellow-500 hover:bg-yellow-400 text-black font-bold",
                    size: "sm",
                    children: [
                      u.jsx(nl, { className: "w-4 h-4 mr-1" }),
                      " واتساب",
                    ],
                  }),
                }),
              ],
            }),
          ],
        }),
    ],
  });
}
function kS() {
  return u.jsx("footer", {
    className: "bg-black border-t border-yellow-500/20 pt-12 pb-6",
    children: u.jsxs("div", {
      className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
      children: [
        u.jsxs("div", {
          className:
            "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10",
          children: [
            u.jsxs("div", {
              className: "lg:col-span-2",
              children: [
                u.jsxs("div", {
                  className: "flex items-center gap-3 mb-4",
                  children: [
                    u.jsx(qt, { className: "w-10 h-10 text-yellow-400" }),
                    u.jsxs("div", {
                      children: [
                        u.jsx("div", {
                          className: "text-xl font-black shimmer-text",
                          children: "  كوانتكس",
                        }),
                        u.jsx("div", {
                          className: "text-sm text-yellow-400/70",
                          children: "بامبات وتداول الأسهم الحلال",
                        }),
                      ],
                    }),
                  ],
                }),
                u.jsx("p", {
                  className: "text-white/60 text-sm leading-relaxed mb-4",
                  children:
                    "منصة استثمارية موثوقة تقدم فرص الاستثمار الحلال في العملات الرقمية والأسهم العربية بأعلى المعايير المهنية والشرعية.",
                }),
                u.jsxs("div", {
                  className: "flex gap-3",
                  children: [
                    u.jsxs("a", {
                      href: "https://t.me/A_M_ut",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className:
                        "flex items-center gap-2 text-sm text-yellow-400 hover:text-yellow-300 transition-colors",
                      children: [
                        u.jsx(It, { className: "w-4 h-4" }),
                        "@A_M_ut",
                      ],
                    }),
                    u.jsxs("a", {
                      href: "https://wa.me/966563718419",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className:
                        "flex items-center gap-2 text-sm text-yellow-400 hover:text-yellow-300 transition-colors",
                      children: [
                        u.jsx(nl, { className: "w-4 h-4" }),
                        "+966563718419",
                      ],
                    }),
                  ],
                }),
              ],
            }),
            u.jsxs("div", {
              children: [
                u.jsx("h3", {
                  className: "text-yellow-400 font-bold mb-4",
                  children: "روابط سريعة",
                }),
                u.jsx("ul", {
                  className: "space-y-2 text-sm text-white/60",
                  children: [
                    "الرئيسية",
                    "الأسواق",
                    "الباقات الاستثمارية",
                    "عن الشركة",
                    "التسجيل",
                    "تواصل معنا",
                  ].map((l) =>
                    u.jsx(
                      "li",
                      {
                        className:
                          "hover:text-yellow-400 cursor-pointer transition-colors",
                        children: l,
                      },
                      l,
                    ),
                  ),
                }),
              ],
            }),
            u.jsxs("div", {
              children: [
                u.jsx("h3", {
                  className: "text-yellow-400 font-bold mb-4",
                  children: "لماذا نحن؟",
                }),
                u.jsx("ul", {
                  className: "space-y-2 text-sm text-white/60",
                  children: [
                    { icon: Tl, text: "استثمار حلال 100%" },
                    { icon: pa, text: "أرباح يومية مضمونة" },
                    { icon: pa, text: "شفافية كاملة" },
                    { icon: pa, text: "دعم على مدار الساعة" },
                    { icon: Tl, text: "رأس المال محمي" },
                  ].map(({ icon: l, text: s }) =>
                    u.jsxs(
                      "li",
                      {
                        className: "flex items-center gap-2",
                        children: [
                          u.jsx(l, {
                            className: "w-4 h-4 text-green-400 flex-shrink-0",
                          }),
                          s,
                        ],
                      },
                      s,
                    ),
                  ),
                }),
              ],
            }),
          ],
        }),
        u.jsxs("div", {
          className:
            "border-t border-yellow-500/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4",
          children: [
            u.jsx("p", {
              className: "text-white/40 text-xs text-center",
              children:
                "© 2024  كوانتكس 👑 - بامبات وفرص حلال . جميع الحقوق محفوظة. الاستثمار ينطوي على مخاطر.",
            }),
            u.jsxs("div", {
              className: "flex items-center gap-2 text-xs text-white/40",
              children: [
                u.jsx(Tl, { className: "w-3 h-3 text-green-400" }),
                u.jsx("span", { children: "منصة آمنة ومعتمدة" }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
const $n = {
    BTC: 68500,
    ETH: 3420,
    BNB: 580,
    SOL: 175,
    ADA: 0.45,
    XRP: 0.58,
    DOGE: 0.12,
    AVAX: 38,
  },
  Al = {
    ARAMCO: 28.5,
    STC: 118,
    EMAAR: 8.95,
    FAB: 13.8,
    ADNOC: 4.42,
    ALDAR: 2.58,
    DFM: 1.95,
  };
function va() {
  return [
    {
      symbol: "BTC",
      name: "Bitcoin",
      nameAr: "بيتكوين",
      price: $n.BTC * (1 + (Math.random() - 0.5) * 0.02),
      change: (Math.random() - 0.4) * 1500,
      changePercent: (Math.random() - 0.4) * 3,
      volume: "$28.5B",
      marketCap: "$1.35T",
    },
    {
      symbol: "ETH",
      name: "Ethereum",
      nameAr: "إيثيريوم",
      price: $n.ETH * (1 + (Math.random() - 0.5) * 0.02),
      change: (Math.random() - 0.4) * 80,
      changePercent: (Math.random() - 0.4) * 3,
      volume: "$12.3B",
      marketCap: "$410B",
    },
    {
      symbol: "BNB",
      name: "BNB",
      nameAr: "بي إن بي",
      price: $n.BNB * (1 + (Math.random() - 0.5) * 0.02),
      change: (Math.random() - 0.4) * 15,
      changePercent: (Math.random() - 0.4) * 3,
      volume: "$2.1B",
      marketCap: "$87B",
    },
    {
      symbol: "SOL",
      name: "Solana",
      nameAr: "سولانا",
      price: $n.SOL * (1 + (Math.random() - 0.5) * 0.02),
      change: (Math.random() - 0.4) * 5,
      changePercent: (Math.random() - 0.4) * 3,
      volume: "$3.2B",
      marketCap: "$80B",
    },
    {
      symbol: "XRP",
      name: "XRP",
      nameAr: "إكس آر بي",
      price: $n.XRP * (1 + (Math.random() - 0.5) * 0.02),
      change: (Math.random() - 0.4) * 0.02,
      changePercent: (Math.random() - 0.4) * 3,
      volume: "$1.5B",
      marketCap: "$32B",
    },
    {
      symbol: "ADA",
      name: "Cardano",
      nameAr: "كاردانو",
      price: $n.ADA * (1 + (Math.random() - 0.5) * 0.02),
      change: (Math.random() - 0.4) * 0.015,
      changePercent: (Math.random() - 0.4) * 3,
      volume: "$420M",
      marketCap: "$16B",
    },
    {
      symbol: "DOGE",
      name: "Dogecoin",
      nameAr: "دوجكوين",
      price: $n.DOGE * (1 + (Math.random() - 0.5) * 0.02),
      change: (Math.random() - 0.4) * 0.005,
      changePercent: (Math.random() - 0.4) * 3,
      volume: "$1.1B",
      marketCap: "$17B",
    },
    {
      symbol: "AVAX",
      name: "Avalanche",
      nameAr: "أفالانش",
      price: $n.AVAX * (1 + (Math.random() - 0.5) * 0.02),
      change: (Math.random() - 0.4) * 1.2,
      changePercent: (Math.random() - 0.4) * 3,
      volume: "$520M",
      marketCap: "$16B",
    },
  ];
}
function fr() {
  return [
    {
      symbol: "2222",
      name: "Saudi Aramco",
      nameAr: "أرامكو السعودية",
      price: Al.ARAMCO * (1 + (Math.random() - 0.5) * 0.01),
      change: (Math.random() - 0.4) * 0.3,
      changePercent: (Math.random() - 0.4) * 1.5,
      exchange: "تداول",
    },
    {
      symbol: "7010",
      name: "STC",
      nameAr: "الاتصالات السعودية",
      price: Al.STC * (1 + (Math.random() - 0.5) * 0.01),
      change: (Math.random() - 0.4) * 1.5,
      changePercent: (Math.random() - 0.4) * 1.5,
      exchange: "تداول",
    },
    {
      symbol: "1180",
      name: "Al Rajhi Bank",
      nameAr: "مصرف الراجحي",
      price: 92.5 * (1 + (Math.random() - 0.5) * 0.01),
      change: (Math.random() - 0.4) * 1.2,
      changePercent: (Math.random() - 0.4) * 1.5,
      exchange: "تداول",
    },
    {
      symbol: "EMAAR",
      name: "Emaar Properties",
      nameAr: "إعمار العقارية",
      price: Al.EMAAR * (1 + (Math.random() - 0.5) * 0.01),
      change: (Math.random() - 0.4) * 0.15,
      changePercent: (Math.random() - 0.4) * 1.5,
      exchange: "دبي",
    },
    {
      symbol: "FAB",
      name: "FAB Bank",
      nameAr: "بنك أبوظبي الأول",
      price: Al.FAB * (1 + (Math.random() - 0.5) * 0.01),
      change: (Math.random() - 0.4) * 0.2,
      changePercent: (Math.random() - 0.4) * 1.5,
      exchange: "أبوظبي",
    },
    {
      symbol: "ADNOC",
      name: "ADNOC Distribution",
      nameAr: "توزيع أدنوك",
      price: Al.ADNOC * (1 + (Math.random() - 0.5) * 0.01),
      change: (Math.random() - 0.4) * 0.05,
      changePercent: (Math.random() - 0.4) * 1.5,
      exchange: "أبوظبي",
    },
    {
      symbol: "ALDAR",
      name: "Aldar Properties",
      nameAr: "الدار العقارية",
      price: Al.ALDAR * (1 + (Math.random() - 0.5) * 0.01),
      change: (Math.random() - 0.4) * 0.04,
      changePercent: (Math.random() - 0.4) * 1.5,
      exchange: "أبوظبي",
    },
    {
      symbol: "DFM",
      name: "Dubai Financial Market",
      nameAr: "سوق دبي المالي",
      price: Al.DFM * (1 + (Math.random() - 0.5) * 0.01),
      change: (Math.random() - 0.4) * 0.03,
      changePercent: (Math.random() - 0.4) * 1.5,
      exchange: "دبي",
    },
  ];
}
function Es(l, s = 2) {
  return l >= 1e3
    ? l.toLocaleString("ar-SA", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })
    : l.toFixed(s);
}
function R0(l) {
  return `${l >= 0 ? "+" : ""}${l.toFixed(2)}`;
}
function js(l) {
  return `${l >= 0 ? "+" : ""}${l.toFixed(2)}%`;
}
function HS() {
  const [l, s] = w.useState(va());
  w.useEffect(() => {
    const c = setInterval(() => {
      s(va());
    }, 4e3);
    return () => clearInterval(c);
  }, []);
  const r = l.slice(0, 6);
  return u.jsx("div", {
    className:
      "bg-black/80 border-b border-yellow-500/30 overflow-hidden py-1.5 backdrop-blur-sm",
    children: u.jsx("div", {
      className: "flex",
      children: u.jsx("div", {
        className: "ticker-animate flex gap-8 px-4",
        children: [...r, ...r, ...r].map((c, f) =>
          u.jsxs(
            "div",
            {
              className: "flex items-center gap-1.5 text-xs flex-shrink-0",
              children: [
                u.jsx("span", {
                  className: "text-yellow-400 font-bold font-mono",
                  children: c.symbol,
                }),
                u.jsx("span", {
                  className: "text-white font-mono",
                  children: Es(c.price),
                }),
                u.jsxs("span", {
                  className: `flex items-center gap-0.5 ${c.changePercent >= 0 ? "text-green-400" : "text-red-400"}`,
                  children: [
                    c.changePercent >= 0
                      ? u.jsx(In, { className: "w-2.5 h-2.5" })
                      : u.jsx(Ns, { className: "w-2.5 h-2.5" }),
                    js(c.changePercent),
                  ],
                }),
              ],
            },
            f,
          ),
        ),
      }),
    }),
  });
}
function LS() {
  const [l, s] = w.useState(va()),
    [r, c] = w.useState(fr()),
    [f, d] = w.useState("crypto"),
    [p, y] = w.useState(new Date());
  w.useEffect(() => {
    const h = setInterval(() => {
      (s(va()), c(fr()), y(new Date()));
    }, 5e3);
    return () => clearInterval(h);
  }, []);
  const v = (f === "crypto" ? l : r).slice(0, 6);
  return u.jsxs("div", {
    className:
      "bg-card border border-yellow-500/20 rounded-2xl overflow-hidden shadow-xl",
    children: [
      u.jsxs("div", {
        className:
          "flex items-center justify-between px-3 py-2.5 border-b border-yellow-500/10 bg-black/40",
        children: [
          u.jsxs("div", {
            className: "flex gap-1.5",
            children: [
              u.jsx("button", {
                onClick: () => d("crypto"),
                className: `px-3 py-1 rounded-lg text-xs font-bold transition-all ${f === "crypto" ? "bg-yellow-500 text-black" : "text-white/60 hover:text-yellow-400"}`,
                children: "عملات رقمية",
              }),
              u.jsx("button", {
                onClick: () => d("stocks"),
                className: `px-3 py-1 rounded-lg text-xs font-bold transition-all ${f === "stocks" ? "bg-yellow-500 text-black" : "text-white/60 hover:text-yellow-400"}`,
                children: "أسهم عربية",
              }),
            ],
          }),
          u.jsxs("div", {
            className: "flex items-center gap-1 text-xs text-green-400",
            children: [
              u.jsx(Tp, { className: "w-3 h-3 animate-spin" }),
              u.jsx("span", {
                className: "hidden sm:inline",
                children: "مباشر",
              }),
            ],
          }),
        ],
      }),
      u.jsx("div", {
        className: "divide-y divide-white/5",
        children: v.map((h) => {
          const g = h.changePercent,
            N = g >= 0;
          return u.jsxs(
            "div",
            {
              className:
                "flex items-center justify-between px-3 py-2.5 hover:bg-yellow-400/5 transition-colors",
              children: [
                u.jsxs("div", {
                  className: "flex items-center gap-2 min-w-0",
                  children: [
                    u.jsx("span", {
                      className:
                        "font-mono font-black text-yellow-400 text-sm flex-shrink-0",
                      children: h.symbol,
                    }),
                    u.jsx("span", {
                      className:
                        "text-white/60 text-xs truncate hidden sm:block",
                      children: h.nameAr,
                    }),
                  ],
                }),
                u.jsxs("div", {
                  className: "flex items-center gap-3 flex-shrink-0",
                  children: [
                    u.jsx("span", {
                      className: "font-mono font-semibold text-white text-sm",
                      children: Es(h.price),
                    }),
                    u.jsxs("span", {
                      className: `flex items-center gap-0.5 text-xs font-mono font-bold px-1.5 py-0.5 rounded-lg ${N ? "bg-green-500/15 text-green-400" : "bg-red-500/15 text-red-400"}`,
                      children: [
                        N
                          ? u.jsx(In, { className: "w-3 h-3" })
                          : u.jsx(Ns, { className: "w-3 h-3" }),
                        js(g),
                      ],
                    }),
                  ],
                }),
              ],
            },
            h.symbol,
          );
        }),
      }),
      u.jsxs("div", {
        className:
          "px-3 py-2 text-xs text-white/30 border-t border-white/5 text-center",
        children: ["آخر تحديث: ", p.toLocaleTimeString("ar-SA")],
      }),
    ],
  });
}
const BS = [
    {
      icon: Tl,
      title: "استثمار حلال 100%",
      desc: "نلتزم بأحكام الشريعة الإسلامية في جميع معاملاتنا",
    },
    {
      icon: In,
      title: "أرباح يومية مضمونة",
      desc: "احصل على أرباحك يومياً بضمان كامل لرأس المال",
    },
    {
      icon: J1,
      title: "عوائد فورية",
      desc: "تُحوَّل أرباحك إلى محفظتك أو حسابك البنكي فوراً",
    },
    {
      icon: wr,
      title: "4 دول عربية",
      desc: "نخدم الكويت والإمارات وقطر والسعودية بعملاتها المحلية",
    },
  ],
  qS = [
    {
      flag: "🇸🇦",
      country: "السعودية",
      capital: "5,000",
      daily: "1,800",
      currency: "ريال",
    },
    {
      flag: "🇦🇪",
      country: "الإمارات",
      capital: "5,000",
      daily: "1,650",
      currency: "درهم",
    },
    {
      flag: "🇶🇦",
      country: "قطر",
      capital: "5,000",
      daily: "3,250",
      currency: "ريال",
    },
    {
      flag: "🇰🇼",
      country: "الكويت",
      capital: "575",
      daily: "210",
      currency: "دينار",
    },
  ];
function GS() {
  const [l, s] = w.useState(0);
  return (
    w.useEffect(() => {
      let r = 0;
      const c = 80,
        f = setInterval(() => {
          ((r += c), r >= 5e3 ? (s(5e3), clearInterval(f)) : s(r));
        }, 20);
      return () => clearInterval(f);
    }, []),
    u.jsxs("div", {
      className: "min-h-screen",
      children: [
        u.jsxs("section", {
          className:
            "hero-bg min-h-screen flex items-end sm:items-center relative overflow-hidden",
          children: [
            u.jsx("div", {
              className: "absolute inset-0 pointer-events-none overflow-hidden",
              children: [...Array(14)].map((r, c) =>
                u.jsx(
                  "div",
                  {
                    className: "absolute rounded-full opacity-20 float-animate",
                    style: {
                      width: Math.random() * 5 + 2 + "px",
                      height: Math.random() * 5 + 2 + "px",
                      background: c % 2 === 0 ? "#FFD700" : "#00ff88",
                      left: Math.random() * 100 + "%",
                      top: Math.random() * 100 + "%",
                      animationDelay: Math.random() * 3 + "s",
                      animationDuration: Math.random() * 2 + 2 + "s",
                    },
                  },
                  c,
                ),
              ),
            }),
            u.jsx("div", {
              className:
                "relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-6 sm:pt-28 sm:pb-16",
              children: u.jsxs("div", {
                className:
                  "flex flex-col lg:grid lg:grid-cols-2 gap-8 items-center",
                children: [
                  u.jsxs("div", {
                    className: "order-1 text-center lg:text-right",
                    children: [
                      u.jsxs("div", {
                        className:
                          "inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full px-3 py-1.5 mb-4 text-xs sm:text-sm",
                        children: [
                          u.jsx(qt, {
                            className:
                              "w-3.5 h-3.5 text-yellow-400 flex-shrink-0",
                          }),
                          u.jsx("span", {
                            className: "text-yellow-400 font-medium",
                            children: "الاستثمار الحلال الأول في العالم العربي",
                          }),
                        ],
                      }),
                      u.jsxs("h1", {
                        className:
                          "text-4xl sm:text-5xl xl:text-6xl font-black text-white leading-tight mb-2",
                        children: [
                          u.jsx("span", {
                            className: "shimmer-text",
                            children: "QUANTX",
                          }),
                          u.jsx("br", {}),
                          u.jsx("span", {
                            className: "text-white",
                            children: " كوانتكس 👑 ",
                          }),
                        ],
                      }),
                      u.jsx("p", {
                        className:
                          "text-lg sm:text-xl text-yellow-400 font-bold mb-3",
                        children: "بامبات وتداول الأسهم الحلال 👑",
                      }),
                      u.jsxs("p", {
                        className:
                          "text-white/70 text-sm sm:text-base leading-relaxed mb-6 max-w-md mx-auto lg:mx-0",
                        children: [
                          "دخـولك لعالم الاستثمار يبدا من هنا",
                          u.jsx("br", { className: "hidden sm:block" }),
                          "تابع فرص الأسهم الفوركس الذهب والعملات الرقمية عبر تجربة حديثة.تساعدك تشوف السوق بصورة اوضح وتتحرك بثقة اكبر 📊�,
                        ],
                      }),
                      u.jsxs("div", {
                        className:
                          "flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-5",
                        children: [
                          u.jsx($t, {
                            href: "/packages",
                            children: u.jsxs(qe, {
                              size: "lg",
                              className:
                                "w-full sm:w-auto bg-yellow-500 hover:bg-yellow-400 text-black font-black text-base px-7 glow-animate",
                              children: [
                                u.jsx(qt, { className: "w-4 h-4 mr-1" }),
                                " ابدأ الاستثمار الآن",
                              ],
                            }),
                          }),
                          u.jsx($t, {
                            href: "/markets",
                            children: u.jsx(qe, {
                              size: "lg",
                              variant: "outline",
                              className:
                                "w-full sm:w-auto border-yellow-500/50 text-yellow-400 hover:bg-yellow-400/10 font-bold text-base px-7",
                              children: "استعرض الأسواق",
                            }),
                          }),
                        ],
                      }),
                      u.jsxs("div", {
                        className:
                          "flex flex-wrap gap-4 justify-center lg:justify-start text-sm",
                        children: [
                          u.jsxs("a", {
                            href: "https://t.me/M_M_FJ",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className:
                              "flex items-center gap-1.5 text-white/70 hover:text-yellow-400 transition-colors",
                            children: [
                              u.jsx(It, { className: "w-4 h-4 text-blue-400" }),
                              " @A_M_ut",
                            ],
                          }),
                          u.jsxs("a", {
                            href: "https://wa.me/966 56 371 8419",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className:
                              "flex items-center gap-1.5 text-white/70 hover:text-yellow-400 transition-colors",
                            children: [
                              u.jsx(nl, {
                                className: "w-4 h-4 text-green-400",
                              }),
                              " +966563718419",
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  u.jsx("div", {
                    className: "order-2 w-full",
                    children: u.jsx(LS, {}),
                  }),
                ],
              }),
            }),
          ],
        }),
        u.jsx("section", {
          className: "py-8 sm:py-12 bg-black border-y border-yellow-500/20",
          children: u.jsx("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: u.jsx("div", {
              className: "grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8",
              children: [
                { value: `${l.toLocaleString()}+`, label: "مستثمر نشط" },
                { value: "172M+", label: "درهم أرباح موزعة" },
                { value: "4", label: "دول عربية" },
                { value: "99.9%", label: "نسبة الرضا" },
              ].map((r, c) =>
                u.jsxs(
                  "div",
                  {
                    className: "text-center p-3",
                    children: [
                      u.jsx("div", {
                        className:
                          "text-2xl sm:text-4xl font-black shimmer-text mb-1",
                        children: r.value,
                      }),
                      u.jsx("div", {
                        className: "text-white/60 text-xs sm:text-sm",
                        children: r.label,
                      }),
                    ],
                  },
                  c,
                ),
              ),
            }),
          }),
        }),
        u.jsx("section", {
          className: "py-12 sm:py-20 section-bg",
          children: u.jsxs("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [
              u.jsxs("div", {
                className: "text-center mb-8 sm:mb-12",
                children: [
                  u.jsxs("h2", {
                    className:
                      "text-2xl sm:text-4xl font-black text-white mb-3",
                    children: [
                      "لماذا ",
                      u.jsx("span", {
                        className: "shimmer-text",
                        children: "  كوانتكس 👑 - بامبات وفرص حلال ",
                      }),
                    ],
                  }),
                  u.jsx("p", {
                    className:
                      "text-white/60 text-sm sm:text-base max-w-xl mx-auto",
                    children:
                      "نؤمن بأن الاستثمار الحلال حق الجميع. منصتنا توفر لك فرصة حقيقية للنمو المالي وفق الضوابط الشرعية.",
                  }),
                ],
              }),
              u.jsx("div", {
                className: "grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6",
                children: BS.map((r, c) =>
                  u.jsxs(
                    "div",
                    {
                      className:
                        "bg-card border border-yellow-500/20 rounded-2xl p-4 sm:p-6 card-glow text-center",
                      children: [
                        u.jsx("div", {
                          className:
                            "w-10 h-10 sm:w-14 sm:h-14 bg-yellow-500/10 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3",
                          children: u.jsx(r.icon, {
                            className: "w-5 h-5 sm:w-7 sm:h-7 text-yellow-400",
                          }),
                        }),
                        u.jsx("h3", {
                          className:
                            "text-white font-bold text-xs sm:text-base mb-1.5",
                          children: r.title,
                        }),
                        u.jsx("p", {
                          className:
                            "text-white/50 text-xs leading-relaxed hidden sm:block",
                          children: r.desc,
                        }),
                      ],
                    },
                    c,
                  ),
                ),
              }),
            ],
          }),
        }),
        u.jsx("section", {
          className: "py-12 sm:py-20 bg-black",
          children: u.jsxs("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [
              u.jsxs("div", {
                className: "text-center mb-8",
                children: [
                  u.jsx("h2", {
                    className:
                      "text-2xl sm:text-4xl font-black text-white mb-3",
                    children: u.jsx("span", {
                      className: "shimmer-text",
                      children: "باقاتنا الاستثمارية",
                    }),
                  }),
                  u.jsx("p", {
                    className: "text-white/60 text-sm sm:text-base",
                    children: "اختر الباقة التي تناسبك وابدأ رحلتك نحو الثراء",
                  }),
                ],
              }),
              u.jsx("div", {
                className:
                  "grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8",
                children: qS.map((r, c) =>
                  u.jsxs(
                    "div",
                    {
                      className:
                        "bg-gradient-to-b from-yellow-500/10 to-transparent border border-yellow-500/30 rounded-2xl p-4 text-center card-glow",
                      children: [
                        u.jsx("div", {
                          className: "text-3xl sm:text-4xl mb-1.5",
                          children: r.flag,
                        }),
                        u.jsx("div", {
                          className: "text-yellow-400 font-bold text-xs mb-2",
                          children: r.country,
                        }),
                        u.jsx("div", {
                          className: "text-white/50 text-xs mb-0.5",
                          children: "رأس المال",
                        }),
                        u.jsxs("div", {
                          className:
                            "text-white font-black text-base sm:text-xl mb-2",
                          children: [
                            r.capital,
                            " ",
                            u.jsx("span", {
                              className: "text-xs font-normal",
                              children: r.currency,
                            }),
                          ],
                        }),
                        u.jsxs("div", {
                          className:
                            "bg-green-500/10 border border-green-500/30 rounded-xl p-2",
                          children: [
                            u.jsx("div", {
                              className: "text-green-400 text-xs",
                              children: "ربح يومي",
                            }),
                            u.jsx("div", {
                              className:
                                "text-green-400 font-black text-sm sm:text-lg",
                              children: r.daily,
                            }),
                            u.jsx("div", {
                              className: "text-green-400/70 text-xs",
                              children: r.currency,
                            }),
                          ],
                        }),
                      ],
                    },
                    c,
                  ),
                ),
              }),
              u.jsx("div", {
                className: "text-center",
                children: u.jsx($t, {
                  href: "/packages",
                  children: u.jsxs(qe, {
                    size: "lg",
                    className:
                      "bg-yellow-500 hover:bg-yellow-400 text-black font-black text-sm sm:text-base px-8",
                    children: [
                      "عرض جميع الباقات ",
                      u.jsx(h1, { className: "w-4 h-4 mr-1" }),
                    ],
                  }),
                }),
              }),
            ],
          }),
        }),
        u.jsxs("section", {
          className: "py-14 sm:py-20 relative overflow-hidden",
          children: [
            u.jsx("div", {
              className:
                "absolute inset-0 bg-gradient-to-r from-yellow-500/10 via-transparent to-green-500/10",
            }),
            u.jsxs("div", {
              className: "relative max-w-2xl mx-auto px-4 text-center",
              children: [
                u.jsx(qt, {
                  className:
                    "w-12 h-12 sm:w-16 sm:h-16 text-yellow-400 mx-auto mb-5 float-animate",
                }),
                u.jsx("h2", {
                  className: "text-2xl sm:text-4xl font-black text-white mb-4",
                  children: "جاهز لتبدأ رحلتك الاستثمارية؟",
                }),
                u.jsx("p", {
                  className: "text-white/70 text-sm sm:text-lg mb-6",
                  children:
                    "انضم إلى آلاف المستثمرين الناجحين الآن. التسجيل سريع!",
                }),
                u.jsxs("div", {
                  className: "flex flex-col sm:flex-row gap-3 justify-center",
                  children: [
                    u.jsx($t, {
                      href: "/register",
                      children: u.jsx(qe, {
                        size: "lg",
                        className:
                          "w-full sm:w-auto bg-yellow-500 hover:bg-yellow-400 text-black font-black text-base px-10 glow-animate",
                        children: "سجّل الآن",
                      }),
                    }),
                    u.jsx("a", {
                      href: "https://t.me/M_M_FJ",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      children: u.jsxs(qe, {
                        size: "lg",
                        variant: "outline",
                        className:
                          "w-full sm:w-auto border-blue-400/50 text-blue-400 hover:bg-blue-400/10 font-bold text-base px-8",
                        children: [
                          u.jsx(It, { className: "w-5 h-5 mr-2" }),
                          " تواصل عبر تيليغرام",
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    })
  );
}
const XS = [
  {
    name: "تداول - البورصة السعودية",
    nameEn: "Saudi Exchange",
    flag: "🇸🇦",
    color: "text-green-400",
    link: "https://saudiexchange.sa",
  },
  {
    name: "سوق دبي المالي",
    nameEn: "Dubai Financial Market",
    flag: "🇦🇪",
    color: "text-red-400",
    link: "https://dfm.ae",
  },
  {
    name: "بورصة أبوظبي ADX",
    nameEn: "Abu Dhabi Securities Exchange",
    flag: "🇦🇪",
    color: "text-yellow-400",
    link: "https://adx.ae",
  },
  {
    name: "Investing.com",
    nameEn: "Crypto & Markets",
    flag: "🌐",
    color: "text-blue-400",
    link: "https://sa.investing.com/crypto",
  },
  {
    name: "Plus500",
    nameEn: "CFD Trading Platform",
    flag: "🌐",
    color: "text-purple-400",
    link: "https://plus500.com",
  },
];
function M0() {
  return [
    {
      nameAr: "تاسي",
      nameEn: "TASI",
      flag: "🇸🇦",
      price: 12450 + (Math.random() - 0.5) * 200,
      changePercent: (Math.random() - 0.4) * 0.8,
    },
    {
      nameAr: "دبي العام",
      nameEn: "DFMGI",
      flag: "🇦🇪",
      price: 4180 + (Math.random() - 0.5) * 80,
      changePercent: (Math.random() - 0.4) * 0.8,
    },
    {
      nameAr: "أبوظبي",
      nameEn: "ADX",
      flag: "🇦🇪",
      price: 9320 + (Math.random() - 0.5) * 100,
      changePercent: (Math.random() - 0.4) * 0.8,
    },
    {
      nameAr: "الكويت الكل",
      nameEn: "KSX",
      flag: "🇰🇼",
      price: 7890 + (Math.random() - 0.5) * 120,
      changePercent: (Math.random() - 0.4) * 0.8,
    },
    {
      nameAr: "قطر",
      nameEn: "QSI",
      flag: "🇶🇦",
      price: 10200 + (Math.random() - 0.5) * 150,
      changePercent: (Math.random() - 0.4) * 0.8,
    },
  ];
}
function YS() {
  const [l, s] = w.useState(va()),
    [r, c] = w.useState(fr()),
    [f, d] = w.useState(M0()),
    [p, y] = w.useState("crypto"),
    [v, h] = w.useState(new Date());
  return (
    w.useEffect(() => {
      const g = setInterval(() => {
        (s(va()), c(fr()), d(M0()), h(new Date()));
      }, 4e3);
      return () => clearInterval(g);
    }, []),
    u.jsxs("div", {
      className: "min-h-screen pt-16",
      children: [
        u.jsx("div", {
          className: "py-8 sm:py-12 bg-black border-b border-yellow-500/20",
          children: u.jsxs("div", {
            className: "max-w-7xl mx-auto px-4 text-center",
            children: [
              u.jsxs("h1", {
                className: "text-3xl sm:text-5xl font-black text-white mb-2",
                children: [
                  u.jsx("span", {
                    className: "shimmer-text",
                    children: "الأسواق المالية",
                  }),
                  " المباشرة",
                ],
              }),
              u.jsx("p", {
                className: "text-white/60 text-sm sm:text-base",
                children:
                  "أسعار حية لحظة بلحظة من أبرز الأسواق العربية والعالمية",
              }),
              u.jsxs("div", {
                className:
                  "flex items-center justify-center gap-2 mt-2 text-green-400 text-xs sm:text-sm",
                children: [
                  u.jsx(Tp, { className: "w-3.5 h-3.5 animate-spin" }),
                  u.jsxs("span", {
                    children: ["تحديث مستمر • ", v.toLocaleTimeString("ar-SA")],
                  }),
                ],
              }),
            ],
          }),
        }),
        u.jsxs("div", {
          className: "max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-10",
          children: [
            u.jsx("div", {
              className: "flex gap-2 mb-6 overflow-x-auto",
              children: [
                { id: "crypto", icon: Ap, label: "عملات رقمية" },
                { id: "stocks", icon: jp, label: "أسهم عربية" },
                { id: "indices", icon: wr, label: "المؤشرات" },
              ].map(({ id: g, icon: N, label: j }) =>
                u.jsxs(
                  "button",
                  {
                    onClick: () => y(g),
                    className: `flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex-shrink-0 ${p === g ? "bg-yellow-500 text-black" : "bg-card border border-white/10 text-white/60 hover:text-yellow-400"}`,
                    children: [u.jsx(N, { className: "w-3.5 h-3.5" }), " ", j],
                  },
                  g,
                ),
              ),
            }),
            u.jsx("div", {
              className:
                "bg-card border border-yellow-500/20 rounded-2xl overflow-hidden shadow-xl mb-8 sm:mb-12",
              children: u.jsx("div", {
                className: "overflow-x-auto",
                children: u.jsxs("table", {
                  className: "w-full text-xs sm:text-sm min-w-[480px]",
                  children: [
                    u.jsx("thead", {
                      children: u.jsxs("tr", {
                        className:
                          "bg-black/40 text-white/40 border-b border-white/5",
                        children: [
                          u.jsx("th", {
                            className:
                              "text-right px-3 sm:px-5 py-2.5 font-medium",
                            children: "#",
                          }),
                          u.jsx("th", {
                            className:
                              "text-right px-3 sm:px-5 py-2.5 font-medium",
                            children: "الرمز",
                          }),
                          u.jsx("th", {
                            className:
                              "text-right px-3 sm:px-5 py-2.5 font-medium",
                            children: "الاسم",
                          }),
                          u.jsx("th", {
                            className:
                              "text-right px-3 sm:px-5 py-2.5 font-medium",
                            children: "السعر",
                          }),
                          u.jsx("th", {
                            className:
                              "text-right px-3 sm:px-5 py-2.5 font-medium",
                            children: "التغيير",
                          }),
                          u.jsx("th", {
                            className:
                              "text-right px-3 sm:px-5 py-2.5 font-medium",
                            children: "%",
                          }),
                          p === "crypto" &&
                            u.jsx("th", {
                              className:
                                "text-right px-3 sm:px-5 py-2.5 font-medium hidden md:table-cell",
                              children: "الحجم",
                            }),
                          p === "stocks" &&
                            u.jsx("th", {
                              className:
                                "text-right px-3 sm:px-5 py-2.5 font-medium",
                              children: "البورصة",
                            }),
                          p === "indices" &&
                            u.jsx("th", {
                              className:
                                "text-right px-3 sm:px-5 py-2.5 font-medium",
                              children: "الدولة",
                            }),
                        ],
                      }),
                    }),
                    u.jsxs("tbody", {
                      children: [
                        p === "crypto" &&
                          l.map((g, N) =>
                            u.jsxs(
                              "tr",
                              {
                                className:
                                  "border-b border-white/5 hover:bg-yellow-400/5 transition-colors",
                                children: [
                                  u.jsx("td", {
                                    className:
                                      "px-3 sm:px-5 py-3 text-white/30",
                                    children: N + 1,
                                  }),
                                  u.jsx("td", {
                                    className: "px-3 sm:px-5 py-3",
                                    children: u.jsx("span", {
                                      className:
                                        "font-mono font-black text-yellow-400",
                                      children: g.symbol,
                                    }),
                                  }),
                                  u.jsx("td", {
                                    className:
                                      "px-3 sm:px-5 py-3 text-white/70",
                                    children: g.nameAr,
                                  }),
                                  u.jsx("td", {
                                    className:
                                      "px-3 sm:px-5 py-3 font-mono font-bold text-white",
                                    children: Es(g.price),
                                  }),
                                  u.jsx("td", {
                                    className: `px-3 sm:px-5 py-3 font-mono ${g.change >= 0 ? "text-green-400" : "text-red-400"}`,
                                    children: R0(g.change),
                                  }),
                                  u.jsx("td", {
                                    className: `px-3 sm:px-5 py-3 ${g.changePercent >= 0 ? "text-green-400" : "text-red-400"}`,
                                    children: u.jsxs("span", {
                                      className:
                                        "flex items-center gap-0.5 font-mono",
                                      children: [
                                        g.changePercent >= 0
                                          ? u.jsx(In, { className: "w-3 h-3" })
                                          : u.jsx(Ns, { className: "w-3 h-3" }),
                                        js(g.changePercent),
                                      ],
                                    }),
                                  }),
                                  u.jsx("td", {
                                    className:
                                      "px-3 sm:px-5 py-3 text-white/40 hidden md:table-cell",
                                    children: g.volume,
                                  }),
                                ],
                              },
                              g.symbol,
                            ),
                          ),
                        p === "stocks" &&
                          r.map((g, N) =>
                            u.jsxs(
                              "tr",
                              {
                                className:
                                  "border-b border-white/5 hover:bg-yellow-400/5 transition-colors",
                                children: [
                                  u.jsx("td", {
                                    className:
                                      "px-3 sm:px-5 py-3 text-white/30",
                                    children: N + 1,
                                  }),
                                  u.jsx("td", {
                                    className: "px-3 sm:px-5 py-3",
                                    children: u.jsx("span", {
                                      className:
                                        "font-mono font-black text-yellow-400",
                                      children: g.symbol,
                                    }),
                                  }),
                                  u.jsx("td", {
                                    className:
                                      "px-3 sm:px-5 py-3 text-white/70",
                                    children: g.nameAr,
                                  }),
                                  u.jsx("td", {
                                    className:
                                      "px-3 sm:px-5 py-3 font-mono font-bold text-white",
                                    children: Es(g.price),
                                  }),
                                  u.jsx("td", {
                                    className: `px-3 sm:px-5 py-3 font-mono ${g.change >= 0 ? "text-green-400" : "text-red-400"}`,
                                    children: R0(g.change),
                                  }),
                                  u.jsx("td", {
                                    className: `px-3 sm:px-5 py-3 ${g.changePercent >= 0 ? "text-green-400" : "text-red-400"}`,
                                    children: u.jsxs("span", {
                                      className:
                                        "flex items-center gap-0.5 font-mono",
                                      children: [
                                        g.changePercent >= 0
                                          ? u.jsx(In, { className: "w-3 h-3" })
                                          : u.jsx(Ns, { className: "w-3 h-3" }),
                                        js(g.changePercent),
                                      ],
                                    }),
                                  }),
                                  u.jsx("td", {
                                    className:
                                      "px-3 sm:px-5 py-3 text-white/60",
                                    children: g.exchange,
                                  }),
                                ],
                              },
                              g.symbol,
                            ),
                          ),
                        p === "indices" &&
                          f.map((g, N) =>
                            u.jsxs(
                              "tr",
                              {
                                className:
                                  "border-b border-white/5 hover:bg-yellow-400/5 transition-colors",
                                children: [
                                  u.jsx("td", {
                                    className:
                                      "px-3 sm:px-5 py-3 text-white/30",
                                    children: N + 1,
                                  }),
                                  u.jsx("td", {
                                    className: "px-3 sm:px-5 py-3",
                                    children: u.jsx("span", {
                                      className:
                                        "font-mono font-black text-yellow-400",
                                      children: g.nameEn,
                                    }),
                                  }),
                                  u.jsx("td", {
                                    className:
                                      "px-3 sm:px-5 py-3 text-white/70",
                                    children: g.nameAr,
                                  }),
                                  u.jsx("td", {
                                    className:
                                      "px-3 sm:px-5 py-3 font-mono font-bold text-white",
                                    children: Es(g.price, 0),
                                  }),
                                  u.jsxs("td", {
                                    className: `px-3 sm:px-5 py-3 font-mono ${g.changePercent >= 0 ? "text-green-400" : "text-red-400"}`,
                                    children: [
                                      g.changePercent >= 0 ? "+" : "",
                                      (
                                        (g.price * g.changePercent) /
                                        100
                                      ).toFixed(1),
                                    ],
                                  }),
                                  u.jsx("td", {
                                    className: `px-3 sm:px-5 py-3 ${g.changePercent >= 0 ? "text-green-400" : "text-red-400"}`,
                                    children: u.jsxs("span", {
                                      className:
                                        "flex items-center gap-0.5 font-mono",
                                      children: [
                                        g.changePercent >= 0
                                          ? u.jsx(In, { className: "w-3 h-3" })
                                          : u.jsx(Ns, { className: "w-3 h-3" }),
                                        js(g.changePercent),
                                      ],
                                    }),
                                  }),
                                  u.jsx("td", {
                                    className: "px-3 sm:px-5 py-3 text-xl",
                                    children: g.flag,
                                  }),
                                ],
                              },
                              g.nameEn,
                            ),
                          ),
                      ],
                    }),
                  ],
                }),
              }),
            }),
            u.jsx("h2", {
              className: "text-lg sm:text-xl font-black text-white mb-4",
              children: "البورصات والمنصات الشريكة",
            }),
            u.jsx("div", {
              className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3",
              children: XS.map((g) =>
                u.jsxs(
                  "a",
                  {
                    href: g.link,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className:
                      "bg-card border border-white/10 rounded-xl p-3.5 flex items-center gap-3 hover:border-yellow-500/40 hover:bg-yellow-400/5 transition-all",
                    children: [
                      u.jsx("span", {
                        className: "text-2xl flex-shrink-0",
                        children: g.flag,
                      }),
                      u.jsxs("div", {
                        className: "min-w-0",
                        children: [
                          u.jsx("div", {
                            className: `font-bold text-sm truncate ${g.color}`,
                            children: g.name,
                          }),
                          u.jsx("div", {
                            className: "text-white/40 text-xs",
                            children: g.nameEn,
                          }),
                        ],
                      }),
                    ],
                  },
                  g.nameEn,
                ),
              ),
            }),
          ],
        }),
      ],
    })
  );
}
const QS = [
  {
    flag: "🇦🇪",
    country: "الإمارات العربية المتحدة",
    countryEn: "UAE",
    color: "from-red-500/10 to-transparent",
    borderColor: "border-red-500/30",
    glowColor: "hover:border-red-400/60",
    packages: [
      { capital: "3,000", daily: "1,100", currency: "درهم" },
      { capital: "5,000", daily: "1,650", currency: "درهم" },
      { capital: "7,000", daily: "2,000", currency: "درهم" },
      { capital: "10,000", daily: "3,900", currency: "درهم" },
      { capital: "15,000", daily: "5,750", currency: "درهم" },
    ],
  },
  {
    flag: "🇰🇼",
    country: "الكويت",
    countryEn: "Kuwait",
    color: "from-green-500/10 to-transparent",
    borderColor: "border-green-500/30",
    glowColor: "hover:border-green-400/60",
    packages: [
      { capital: "410", daily: "180", currency: "دينار", period: "شهرين" },
      { capital: "575", daily: "210", currency: "دينار", period: "شهرين" },
      { capital: "822", daily: "350", currency: "دينار", period: "شهرين" },
      { capital: "1,230", daily: "500", currency: "دينار", period: "شهرين" },
    ],
  },
  {
    flag: "🇶🇦",
    country: "قطر",
    countryEn: "Qatar",
    color: "from-purple-500/10 to-transparent",
    borderColor: "border-purple-500/30",
    glowColor: "hover:border-purple-400/60",
    packages: [
      { capital: "3,000", daily: "1,680", currency: "ريال" },
      { capital: "4,000", daily: "2,400", currency: "ريال" },
      { capital: "5,000", daily: "3,250", currency: "ريال" },
      { capital: "10,000", daily: "4,900", currency: "ريال" },
      { capital: "15,000", daily: "7,200", currency: "ريال" },
    ],
  },
  {
    flag: "🇸🇦",
    country: "المملكة العربية السعودية",
    countryEn: "Saudi Arabia",
    color: "from-yellow-500/10 to-transparent",
    borderColor: "border-yellow-500/30",
    glowColor: "hover:border-yellow-400/60",
    packages: [
      { capital: "3,000", daily: "1,000", currency: "ريال" },
      { capital: "5,000", daily: "1,800", currency: "ريال" },
      { capital: "7,000", daily: "2,200", currency: "ريال" },
      { capital: "10,000", daily: "3,700", currency: "ريال" },
      { capital: "15,000", daily: "4,750", currency: "ريال" },
    ],
  },
];
function VS(l) {
  return l.reduce((s, r) => {
    const c = parseFloat(r.daily.replace(",", ""));
    return c > s ? c : s;
  }, 0);
}
function ZS() {
  return u.jsxs("div", {
    className: "min-h-screen pt-16",
    children: [
      u.jsx("div", {
        className:
          "bg-gradient-to-b from-black to-background py-10 sm:py-16 border-b border-yellow-500/20",
        children: u.jsxs("div", {
          className: "max-w-3xl mx-auto px-4 text-center",
          children: [
            u.jsxs("div", {
              className:
                "inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full px-3 py-1.5 mb-5 text-xs sm:text-sm",
              children: [
                u.jsx(ju, { className: "w-3.5 h-3.5 text-yellow-400" }),
                u.jsx("span", {
                  className: "text-yellow-400 font-medium",
                  children: "باقات حصرية لأهل الخليج",
                }),
              ],
            }),
            u.jsxs("h1", {
              className: "text-3xl sm:text-5xl font-black text-white mb-3",
              children: [
                u.jsx("span", {
                  className: "shimmer-text",
                  children: "الباقات الاستثمارية",
                }),
                u.jsx("br", { className: "hidden sm:block" }),
                " المميزة",
              ],
            }),
            u.jsx("p", {
              className: "text-white/60 text-sm sm:text-base max-w-xl mx-auto",
              children:
                "اختر الباقة المناسبة لك وابدأ في تحقيق أرباح يومية مضمونة. استثمار حلال 100% وفق أحكام الشريعة الإسلامية.",
            }),
          ],
        }),
      }),
      u.jsx("div", {
        className:
          "bg-yellow-500/5 border-b border-yellow-500/10 py-3 overflow-x-auto",
        children: u.jsx("div", {
          className:
            "flex justify-start sm:justify-center gap-4 sm:gap-8 px-4 text-xs sm:text-sm text-white/70 whitespace-nowrap",
          children: [
            { icon: Tl, text: "رأس المال محمي" },
            { icon: u0, text: "أرباح يومية" },
            { icon: pa, text: "استثمار حلال 100%" },
            { icon: qt, text: "استثمار شهرين" },
          ].map(({ icon: l, text: s }) =>
            u.jsxs(
              "div",
              {
                className: "flex items-center gap-1.5 flex-shrink-0",
                children: [
                  u.jsx(l, { className: "w-3.5 h-3.5 text-yellow-400" }),
                  " ",
                  s,
                ],
              },
              s,
            ),
          ),
        }),
      }),
      u.jsx("div", {
        className: "max-w-3xl mx-auto px-4 pt-8",
        children: u.jsxs("div", {
          className:
            "flex items-start gap-3 bg-purple-500/10 border border-purple-500/40 rounded-2xl px-4 py-4",
          children: [
            u.jsx("span", { className: "text-2xl mt-0.5", children: "⚠️" }),
            u.jsx("p", {
              className:
                "text-purple-300 text-sm sm:text-base leading-relaxed font-medium",
              children:
                "تنبيه: الأرباح المعروضة ليست ثابتة — ترتفع وتزيد تبعاً لارتفاع الصفقات وأداء السوق. الأرقام المذكورة هي الحد الأدنى المتوقع.",
            }),
          ],
        }),
      }),
      u.jsx("div", {
        className: "py-10 sm:py-16",
        children: u.jsx("div", {
          className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12",
          children: QS.map((l) => {
            const s = VS(l.packages);
            return u.jsxs(
              "div",
              {
                children: [
                  u.jsxs("div", {
                    className: "flex items-center gap-3 mb-5",
                    children: [
                      u.jsx("span", {
                        className: "text-4xl sm:text-5xl",
                        children: l.flag,
                      }),
                      u.jsxs("div", {
                        children: [
                          u.jsx("h2", {
                            className:
                              "text-xl sm:text-2xl font-black text-white",
                            children: l.country,
                          }),
                          u.jsxs("p", {
                            className: "text-yellow-400 text-xs sm:text-sm",
                            children: [
                              "✅ عروض الباقة المميزة",
                              l.packages[0].period &&
                                ` • مدة الاستثمار: ${l.packages[0].period}`,
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  u.jsx("div", {
                    className:
                      "flex gap-3 overflow-x-auto pb-3 sm:grid sm:grid-cols-3 lg:grid-cols-5 sm:overflow-visible snap-x snap-mandatory",
                    children: l.packages.map((r, c) => {
                      const f = parseFloat(r.daily.replace(",", "")) === s;
                      return u.jsxs(
                        "div",
                        {
                          className: `relative flex-shrink-0 w-44 sm:w-auto snap-start bg-gradient-to-b ${l.color} border ${l.borderColor} ${l.glowColor} rounded-2xl p-4 text-center transition-all duration-300 ${f ? "ring-2 ring-yellow-400/50" : ""}`,
                          children: [
                            f &&
                              u.jsx("div", {
                                className:
                                  "absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-500 text-black text-xs font-black px-2.5 py-0.5 rounded-full whitespace-nowrap",
                                children: "الأعلى ربحاً ⭐",
                              }),
                            u.jsx("div", {
                              className: "text-white/50 text-xs mb-0.5",
                              children: "رأس المال",
                            }),
                            u.jsx("div", {
                              className:
                                "text-white font-black text-xl sm:text-2xl",
                              children: r.capital,
                            }),
                            u.jsx("div", {
                              className: "text-white/50 text-xs mb-3",
                              children: r.currency,
                            }),
                            u.jsxs("div", {
                              className:
                                "bg-green-500/10 border border-green-500/20 rounded-xl p-2.5 mb-3",
                              children: [
                                u.jsx("div", {
                                  className: "text-green-400 text-xs mb-0.5",
                                  children: "الربح اليومي",
                                }),
                                u.jsx("div", {
                                  className:
                                    "text-green-400 font-black text-lg",
                                  children: r.daily,
                                }),
                                u.jsx("div", {
                                  className: "text-green-400/70 text-xs",
                                  children: r.currency,
                                }),
                              ],
                            }),
                            r.period &&
                              u.jsxs("div", {
                                className:
                                  "text-yellow-400/70 text-xs mb-2.5 flex items-center justify-center gap-1",
                                children: [
                                  u.jsx(u0, { className: "w-3 h-3" }),
                                  " مدة ",
                                  r.period,
                                ],
                              }),
                            u.jsx($t, {
                              href: "/register",
                              children: u.jsx(qe, {
                                size: "sm",
                                className:
                                  "w-full bg-yellow-500 hover:bg-yellow-400 text-black font-bold text-xs h-8",
                                children: "اشترك الآن",
                              }),
                            }),
                          ],
                        },
                        c,
                      );
                    }),
                  }),
                ],
              },
              l.countryEn,
            );
          }),
        }),
      }),
      u.jsx("div", {
        className: "py-12 sm:py-16 bg-black",
        children: u.jsx("div", {
          className: "max-w-2xl mx-auto px-4",
          children: u.jsxs("div", {
            className:
              "border border-yellow-500/30 rounded-3xl p-6 sm:p-8 bg-yellow-500/5",
            children: [
              u.jsxs("h2", {
                className:
                  "text-xl sm:text-2xl font-black text-white text-center mb-6",
                children: [
                  "✨ ",
                  u.jsx("span", {
                    className: "shimmer-text",
                    children: "شروط الاشتراك",
                  }),
                ],
              }),
              u.jsx("p", {
                className: "text-white/70 text-center text-sm mb-5 font-medium",
                children: "أول خطوة: زوّدنا بالبيانات التالية",
              }),
              u.jsx("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 gap-3 mb-7",
                children: [
                  { icon: "👤", label: "اسمك الكامل" },
                  { icon: "🌍", label: "الدولة" },
                  { icon: "📱", label: "رقم الهاتف" },
                  { icon: "💳", label: "عنوان محفظتك أو رقم حسابك البنكي" },
                ].map((l) =>
                  u.jsxs(
                    "div",
                    {
                      className:
                        "flex items-center gap-3 bg-black/40 rounded-xl p-3.5 border border-white/10",
                      children: [
                        u.jsx("span", {
                          className: "text-xl flex-shrink-0",
                          children: l.icon,
                        }),
                        u.jsx("span", {
                          className: "text-white text-sm font-medium",
                          children: l.label,
                        }),
                      ],
                    },
                    l.label,
                  ),
                ),
              }),
              u.jsx("p", {
                className: "text-white/50 text-xs text-center mb-4",
                children: "أرسل بياناتك عبر:",
              }),
              u.jsxs("div", {
                className: "flex flex-col sm:flex-row gap-3 justify-center",
                children: [
                  u.jsx("a", {
                    href: "https://t.me/A_M_ut",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: u.jsxs(qe, {
                      size: "lg",
                      className:
                        "w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white font-bold",
                      children: [
                        u.jsx(It, { className: "w-4 h-4 mr-1" }),
                        " تيليغرام: @A_M_ut",
                      ],
                    }),
                  }),
                  u.jsx("a", {
                    href: "https://wa.me/966563718419",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: u.jsxs(qe, {
                      size: "lg",
                      className:
                        "w-full sm:w-auto bg-green-600 hover:bg-green-500 text-white font-bold",
                      children: [
                        u.jsx(nl, { className: "w-4 h-4 mr-1" }),
                        " +966563718419",
                      ],
                    }),
                  }),
                ],
              }),
              u.jsx("div", {
                className: "text-center mt-4",
                children: u.jsx($t, {
                  href: "/register",
                  children: u.jsxs(qe, {
                    size: "lg",
                    className:
                      "bg-yellow-500 hover:bg-yellow-400 text-black font-black px-8 glow-animate",
                    children: [
                      u.jsx(qt, { className: "w-4 h-4 mr-1" }),
                      " أو سجّل عبر الموقع",
                    ],
                  }),
                }),
              }),
            ],
          }),
        }),
      }),
    ],
  });
}
const KS = [
    { icon: Tl, title: "الأمانة والشفافية", desc: "شفافية كاملة في كل معاملة" },
    {
      icon: ju,
      title: "الالتزام الشرعي",
      desc: "مراجعة شرعية معتمدة لكل استثمار",
    },
    { icon: Cp, title: "خدمة العميل", desc: "رضاك غايتنا دائماً" },
    { icon: In, title: "نمو مستدام", desc: "عوائد مستقرة واستراتيجيات مدروسة" },
  ],
  PS = [
    { year: "2020", event: "تأسيس المنصة بهدف تقديم استثمار حلال" },
    { year: "2022", event: "توسع إلى السوق السعودي والإماراتي" },
    { year: "2023", event: "إطلاق الباقات الكويتية والقطرية" },
    { year: "2024", event: "تجاوزنا 4,195 مستثمر نشط" },
    { year: "2025", event: "أكثر من  6,253 مستثمر وتوزيع 172M+ أرباح" },
  ];
function FS() {
  return u.jsxs("div", {
    className: "min-h-screen pt-16",
    children: [
      u.jsxs("div", {
        className:
          "relative bg-gradient-to-b from-black to-background py-12 sm:py-20 border-b border-yellow-500/20 text-center px-4",
        children: [
          u.jsx(qt, {
            className:
              "w-12 h-12 sm:w-16 sm:h-16 text-yellow-400 mx-auto mb-4 float-animate",
          }),
          u.jsxs("h1", {
            className: "text-3xl sm:text-5xl font-black text-white mb-3",
            children: [
              "عن ",
              u.jsx("span", {
                className: "shimmer-text",
                children: "كوانتكس 👑 - بامبات وفرص حلال ",
              }),
            ],
          }),
          u.jsx("p", {
            className: "text-white/60 text-sm sm:text-lg max-w-xl mx-auto",
            children:
              " منصة متخصصة في الاستثمار والتداول بالأسهم، الفوركس، الذهب والعملات الرقمية. 📊💰",
          }),
        ],
      }),
      u.jsx("div", {
        className: "py-10 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
        children: u.jsxs("div", {
          className: "grid lg:grid-cols-2 gap-8 sm:gap-12 items-center",
          children: [
            u.jsxs("div", {
              children: [
                u.jsxs("h2", {
                  className: "text-2xl sm:text-3xl font-black text-white mb-4",
                  children: [
                    "رسالتنا ",
                    u.jsx("span", {
                      className: "shimmer-text",
                      children: "وقيمنا",
                    }),
                  ],
                }),
                u.jsx("p", {
                  className:
                    "text-white/70 text-sm sm:text-base leading-relaxed mb-4",
                  children:
                    "نؤمن بأن كل مسلم يستحق الوصول إلى فرص استثمار حلالة وحقيقية. انطلقنا من مبدأ واضح: تقديم عوائد استثمارية مضمونة وفق أحكام الشريعة الإسلامية مع الحفاظ التام على رأس المال.",
                }),
                u.jsx("p", {
                  className:
                    "text-white/70 text-sm sm:text-base leading-relaxed mb-6",
                  children:
                    "فريقنا يضم خبراء في الأسواق المالية ومستشارين شرعيين معتمدين يعملون معاً لضمان أن كل استثمار يتم بطريقة شرعية ومربحة.",
                }),
                u.jsx("div", {
                  className: "flex flex-wrap gap-2",
                  children: [
                    "استثمار حلال",
                    "أرباح يومية",
                    "رأس مال محمي",
                    "شفافية كاملة",
                  ].map((l) =>
                    u.jsxs(
                      "span",
                      {
                        className:
                          "flex items-center gap-1 bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-xs px-2.5 py-1 rounded-full",
                        children: [u.jsx(pa, { className: "w-3 h-3" }), " ", l],
                      },
                      l,
                    ),
                  ),
                }),
              ],
            }),
            u.jsx("div", {
              className: "grid grid-cols-2 gap-3",
              children: KS.map(({ icon: l, title: s, desc: r }) =>
                u.jsxs(
                  "div",
                  {
                    className:
                      "bg-card border border-yellow-500/20 rounded-2xl p-4 card-glow",
                    children: [
                      u.jsx(l, {
                        className: "w-6 h-6 sm:w-8 sm:h-8 text-yellow-400 mb-2",
                      }),
                      u.jsx("h3", {
                        className:
                          "text-white font-bold text-xs sm:text-sm mb-1",
                        children: s,
                      }),
                      u.jsx("p", {
                        className: "text-white/50 text-xs leading-relaxed",
                        children: r,
                      }),
                    ],
                  },
                  s,
                ),
              ),
            }),
          ],
        }),
      }),
      u.jsx("div", {
        className: "py-8 sm:py-12 bg-black border-y border-yellow-500/20",
        children: u.jsx("div", {
          className: "max-w-7xl mx-auto px-4",
          children: u.jsx("div", {
            className: "grid grid-cols-2 sm:grid-cols-4 gap-4 text-center",
            children: [
              { icon: Cp, value: "6,253+", label: "مستثمر نشط" },
              { icon: wr, value: "4", label: "دولة عربية" },
              { icon: x1, value: "172M+", label: "أرباح موزعة" },
              { icon: ju, value: "5+", label: "سنوات خبرة" },
            ].map(({ icon: l, value: s, label: r }) =>
              u.jsxs(
                "div",
                {
                  className: "p-3",
                  children: [
                    u.jsx(l, {
                      className:
                        "w-6 h-6 sm:w-8 sm:h-8 text-yellow-400 mx-auto mb-1.5",
                    }),
                    u.jsx("div", {
                      className:
                        "text-2xl sm:text-3xl font-black shimmer-text mb-0.5",
                      children: s,
                    }),
                    u.jsx("div", {
                      className: "text-white/60 text-xs sm:text-sm",
                      children: r,
                    }),
                  ],
                },
                r,
              ),
            ),
          }),
        }),
      }),
      u.jsxs("div", {
        className: "py-10 sm:py-16 max-w-2xl mx-auto px-4",
        children: [
          u.jsxs("h2", {
            className:
              "text-2xl sm:text-3xl font-black text-white text-center mb-8",
            children: [
              "مسيرتنا ",
              u.jsx("span", {
                className: "shimmer-text",
                children: "عبر السنين",
              }),
            ],
          }),
          u.jsxs("div", {
            className: "relative",
            children: [
              u.jsx("div", {
                className:
                  "absolute right-6 top-0 bottom-0 w-0.5 bg-yellow-500/20",
              }),
              u.jsx("div", {
                className: "space-y-5",
                children: PS.map(({ year: l, event: s }) =>
                  u.jsxs(
                    "div",
                    {
                      className: "flex items-start gap-4 pr-6 relative",
                      children: [
                        u.jsx("div", {
                          className:
                            "absolute right-4 top-1.5 w-4 h-4 rounded-full bg-yellow-500 ring-4 ring-yellow-500/20 flex-shrink-0",
                        }),
                        u.jsxs("div", {
                          className:
                            "flex-1 bg-card border border-yellow-500/10 rounded-xl p-3.5 mr-2",
                          children: [
                            u.jsx("div", {
                              className:
                                "text-yellow-400 font-black text-xs mb-1",
                              children: l,
                            }),
                            u.jsx("div", {
                              className: "text-white/80 text-sm",
                              children: s,
                            }),
                          ],
                        }),
                      ],
                    },
                    l,
                  ),
                ),
              }),
            ],
          }),
        ],
      }),
      u.jsxs("div", {
        className:
          "py-10 sm:py-14 bg-black border-t border-yellow-500/20 text-center px-4",
        children: [
          u.jsx("h2", {
            className: "text-xl sm:text-2xl font-black text-white mb-3",
            children: "انضم إلى عائلة  كوانتكس 👑 ",
          }),
          u.jsx("p", {
            className: "text-white/60 text-sm mb-6",
            children:
              "كن جزءاً من مجتمع المستثمرين الناجحين وابدأ رحلتك المالية اليوم",
          }),
          u.jsx($t, {
            href: "/register",
            children: u.jsxs(qe, {
              size: "lg",
              className:
                "bg-yellow-500 hover:bg-yellow-400 text-black font-black px-10 glow-animate",
              children: [
                u.jsx(qt, { className: "w-4 h-4 mr-1.5" }),
                " سجّل الآن",
              ],
            }),
          }),
        ],
      }),
    ],
  });
}
const Ox = "/api";
async function Cx() {
  const l = [
    async () => {
      const r = await (
        await fetch(
          "https://ip-api.com/json/?fields=status,country,countryCode,city,isp,query&lang=ar",
          { signal: AbortSignal.timeout(4e3) },
        )
      ).json();
      if (r.status !== "success") throw new Error("failed");
      return {
        country: r.country,
        countryCode: r.countryCode,
        city: r.city,
        isp: r.isp,
        ip: r.query,
      };
    },
    async () => {
      const r = await (
        await fetch("https://ipapi.co/json/", {
          signal: AbortSignal.timeout(4e3),
        })
      ).json();
      return {
        country: r.country_name || r.country,
        countryCode: r.country_code,
        city: r.city,
        isp: r.org,
        ip: r.ip,
      };
    },
    async () => {
      const r = await (
        await fetch("https://freeipapi.com/api/json", {
          signal: AbortSignal.timeout(4e3),
        })
      ).json();
      return {
        country: r.countryName,
        countryCode: r.countryCode,
        city: r.cityName,
        isp: null,
        ip: r.ipAddress,
      };
    },
  ];
  for (const s of l)
    try {
      return await s();
    } catch {}
  return null;
}
function Rx() {
  const l = navigator.userAgent,
    s = /Mobi|Android|iPhone|iPad/i.test(l) ? "جوال 📱" : "كمبيوتر 💻";
  let r = "غير معروف";
  /Chrome\//.test(l) && !/Edg\//.test(l)
    ? (r = "Chrome")
    : /Safari\//.test(l) && !/Chrome/.test(l)
      ? (r = "Safari")
      : /Firefox\//.test(l)
        ? (r = "Firefox")
        : /Edg\//.test(l) && (r = "Edge");
  let c = "غير معروف";
  return (
    /Windows/.test(l)
      ? (c = "Windows")
      : /Mac OS X/.test(l)
        ? (c = "macOS")
        : /Android/.test(l)
          ? (c = "Android")
          : /iPhone|iPad/.test(l)
            ? (c = "iOS")
            : /Linux/.test(l) && (c = "Linux"),
    { device: s, browser: r, os: c }
  );
}
async function JS(l) {
  try {
    const [s, r] = await Promise.all([Cx(), Promise.resolve(Rx())]);
    await fetch(`${Ox}/track/visit`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        page: l,
        referrer: document.referrer || null,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        ...s,
        ...r,
      }),
    });
  } catch {}
}
async function $S(l) {
  try {
    const [s, r] = await Promise.all([Cx(), Promise.resolve(Rx())]);
    await fetch(`${Ox}/track/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...l, ...s, device: r.device }),
    });
  } catch {}
}
const WS = [
    "المملكة العربية السعودية 🇸🇦",
    "الإمارات العربية المتحدة 🇦🇪",
    "الكويت 🇰🇼",
    "قطر 🇶🇦",
    "البحرين 🇧🇭",
    "عُمان 🇴🇲",
    "الأردن 🇯🇴",
    "مصر 🇪🇬",
    "العراق 🇮🇶",
    "دولة أخرى",
  ],
  IS = {
    "المملكة العربية السعودية 🇸🇦": [
      "3,000 ريال — ربح يومي 1,000 ريال",
      "5,000 ريال — ربح يومي 1,800 ريال",
      "7,000 ريال — ربح يومي 2,200 ريال",
      "10,000 ريال — ربح يومي 3,700 ريال",
      "15,000 ريال — ربح يومي 4,750 ريال",
    ],
    "الإمارات العربية المتحدة 🇦🇪": [
      "3,000 درهم — ربح يومي 1,100 درهم",
      "5,000 درهم — ربح يومي 1,650 درهم",
      "7,000 درهم — ربح يومي 2,000 درهم",
      "10,000 درهم — ربح يومي 3,900 درهم",
      "15,000 درهم — ربح يومي 5,750 درهم",
    ],
    "الكويت 🇰🇼": [
      "410 دينار — ربح يومي 180 دينار",
      "575 دينار — ربح يومي 210 دينار",
      "822 دينار — ربح يومي 350 دينار",
      "1,230 دينار — ربح يومي 500 دينار",
    ],
    "قطر 🇶🇦": [
      "3,000 ريال — ربح يومي 1,680 ريال",
      "4,000 ريال — ربح يومي 2,400 ريال",
      "5,000 ريال — ربح يومي 3,250 ريال",
      "10,000 ريال — ربح يومي 4,900 ريال",
      "15,000 ريال — ربح يومي 7,200 ريال",
    ],
  };
function eN() {
  const [l, s] = w.useState({
      name: "",
      country: "",
      phone: "",
      wallet: "",
      package: "",
      telegramUsername: "",
    }),
    [r, c] = w.useState(!1),
    [f, d] = w.useState({}),
    p = IS[l.country] || [],
    y = () => {
      const h = {};
      return (
        l.name.trim() || (h.name = "الاسم مطلوب"),
        l.country || (h.country = "الدولة مطلوبة"),
        l.phone.trim() || (h.phone = "رقم الهاتف مطلوب"),
        l.wallet.trim() || (h.wallet = "رقم الحساب أو المحفظة مطلوب"),
        p.length > 0 && !l.package && (h.package = "اختر الباقة المناسبة"),
        d(h),
        Object.keys(h).length === 0
      );
    },
    v = (h) => {
      if ((h.preventDefault(), !y())) return;
      const g = encodeURIComponent(
        `🌟 طلب اشتراك جديد —  كوانتكس 👑 - بامبات وفرص حلال  

👤 الاسم: ${l.name}
🌍 الدولة: ${l.country}
📱 الهاتف: ${l.phone}
💳 المحفظة/الحساب: ${l.wallet}
📦 الباقة: ${l.package || "لم تحدد"}
` +
          (l.telegramUsername
            ? `📲 تيليغرام: @${l.telegramUsername}
`
            : ""),
      );
      ($S({
        name: l.name,
        country: l.country,
        phone: l.phone,
        wallet: l.wallet,
        packageSelected: l.package,
        telegramUsername: l.telegramUsername,
      }),
        window.open(`https://t.me/M_M_FJ?text=${g}`, "_blank"),
        c(!0));
    };
  return r
    ? u.jsx("div", {
        className: "min-h-screen pt-16 flex items-center justify-center px-4",
        children: u.jsx("div", {
          className: "max-w-sm w-full text-center",
          children: u.jsxs("div", {
            className: "bg-card border border-green-500/30 rounded-3xl p-8",
            children: [
              u.jsx(pa, { className: "w-16 h-16 text-green-400 mx-auto mb-4" }),
              u.jsx("h2", {
                className: "text-xl font-black text-white mb-3",
                children: "تم إرسال طلبك! 🎉",
              }),
              u.jsx("p", {
                className: "text-white/60 text-sm mb-6",
                children:
                  "سيتواصل معك فريقنا في أقرب وقت ممكن لتأكيد الاشتراك وبدء رحلتك الاستثمارية.",
              }),
              u.jsxs("div", {
                className: "space-y-2",
                children: [
                  u.jsx("a", {
                    href: "https://t.me/M_M_FJ",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: u.jsxs(qe, {
                      className:
                        "w-full bg-blue-600 hover:bg-blue-500 text-white font-bold",
                      children: [
                        u.jsx(It, { className: "w-4 h-4 mr-1" }),
                        " تابع عبر تيليغرام",
                      ],
                    }),
                  }),
                  u.jsx(qe, {
                    onClick: () => {
                      (c(!1),
                        s({
                          name: "",
                          country: "",
                          phone: "",
                          wallet: "",
                          package: "",
                          telegramUsername: "",
                        }));
                    },
                    variant: "outline",
                    className: "w-full border-yellow-500/30 text-yellow-400",
                    children: "تسجيل آخر",
                  }),
                ],
              }),
            ],
          }),
        }),
      })
    : u.jsxs("div", {
        className: "min-h-screen pt-16",
        children: [
          u.jsx("div", {
            className: "py-8 sm:py-12 bg-black border-b border-yellow-500/20",
            children: u.jsxs("div", {
              className: "max-w-xl mx-auto px-4 text-center",
              children: [
                u.jsx(qt, {
                  className:
                    "w-10 h-10 sm:w-14 sm:h-14 text-yellow-400 mx-auto mb-3 float-animate",
                }),
                u.jsxs("h1", {
                  className: "text-3xl sm:text-4xl font-black text-white mb-2",
                  children: [
                    u.jsx("span", {
                      className: "shimmer-text",
                      children: "سجّل معنا",
                    }),
                    " الآن",
                  ],
                }),
                u.jsx("p", {
                  className: "text-white/60 text-sm",
                  children:
                    "ابدأ رحلتك الاستثمارية مع  كوانتكس 👑 - بامبات وفرص حلال . التسجيل سريع.",
                }),
              ],
            }),
          }),
          u.jsx("div", {
            className: "max-w-xl mx-auto px-4 py-8 sm:py-12",
            children: u.jsxs("div", {
              className:
                "bg-card border border-yellow-500/20 rounded-3xl p-5 sm:p-8",
              children: [
                u.jsx("div", {
                  className:
                    "mb-5 p-3 bg-yellow-500/5 border border-yellow-500/20 rounded-2xl text-center",
                  children: u.jsx("p", {
                    className: "text-yellow-400 text-sm font-medium",
                    children: "✨ شروط الاشتراك — زوّدنا بالبيانات التالية",
                  }),
                }),
                u.jsxs("form", {
                  onSubmit: v,
                  className: "space-y-4",
                  children: [
                    u.jsxs("div", {
                      children: [
                        u.jsxs("label", {
                          className:
                            "block text-white/80 text-sm font-medium mb-1.5",
                          children: [
                            u.jsx(K1, { className: "w-3.5 h-3.5 inline ml-1" }),
                            "+ اسمك الكامل ",
                            u.jsx("span", {
                              className: "text-red-400",
                              children: "*",
                            }),
                          ],
                        }),
                        u.jsx("input", {
                          type: "text",
                          value: l.name,
                          onChange: (h) => s({ ...l, name: h.target.value }),
                          placeholder: "مثال:أحمد محمد أحمد ",
                          className:
                            "w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-yellow-500/60 text-sm",
                        }),
                        f.name &&
                          u.jsx("p", {
                            className: "text-red-400 text-xs mt-1",
                            children: f.name,
                          }),
                      ],
                    }),
                    u.jsxs("div", {
                      children: [
                        u.jsxs("label", {
                          className:
                            "block text-white/80 text-sm font-medium mb-1.5",
                          children: [
                            u.jsx(wr, { className: "w-3.5 h-3.5 inline ml-1" }),
                            "+ الدولة ",
                            u.jsx("span", {
                              className: "text-red-400",
                              children: "*",
                            }),
                          ],
                        }),
                        u.jsxs("select", {
                          value: l.country,
                          onChange: (h) =>
                            s({ ...l, country: h.target.value, package: "" }),
                          className:
                            "w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-500/60 text-sm appearance-none",
                          children: [
                            u.jsx("option", {
                              value: "",
                              className: "bg-gray-900",
                              children: "-- اختر دولتك --",
                            }),
                            WS.map((h) =>
                              u.jsx(
                                "option",
                                {
                                  value: h,
                                  className: "bg-gray-900",
                                  children: h,
                                },
                                h,
                              ),
                            ),
                          ],
                        }),
                        f.country &&
                          u.jsx("p", {
                            className: "text-red-400 text-xs mt-1",
                            children: f.country,
                          }),
                      ],
                    }),
                    u.jsxs("div", {
                      children: [
                        u.jsxs("label", {
                          className:
                            "block text-white/80 text-sm font-medium mb-1.5",
                          children: [
                            u.jsx(nl, { className: "w-3.5 h-3.5 inline ml-1" }),
                            "+ رقم الهاتف ",
                            u.jsx("span", {
                              className: "text-red-400",
                              children: "*",
                            }),
                          ],
                        }),
                        u.jsx("input", {
                          type: "tel",
                          value: l.phone,
                          onChange: (h) => s({ ...l, phone: h.target.value }),
                          placeholder: "+966563718419",
                          className:
                            "w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-yellow-500/60 text-sm",
                          dir: "ltr",
                        }),
                        f.phone &&
                          u.jsx("p", {
                            className: "text-red-400 text-xs mt-1",
                            children: f.phone,
                          }),
                      ],
                    }),
                    u.jsxs("div", {
                      children: [
                        u.jsxs("label", {
                          className:
                            "block text-white/80 text-sm font-medium mb-1.5",
                          children: [
                            u.jsx(E1, { className: "w-3.5 h-3.5 inline ml-1" }),
                            "+ عنوان المحفظة أو رقم الحساب البنكي ",
                            u.jsx("span", {
                              className: "text-red-400",
                              children: "*",
                            }),
                          ],
                        }),
                        u.jsx("input", {
                          type: "text",
                          value: l.wallet,
                          onChange: (h) => s({ ...l, wallet: h.target.value }),
                          placeholder: "الحساب الذي تريد إيداع الأرباح فيه",
                          className:
                            "w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-yellow-500/60 text-sm",
                        }),
                        f.wallet &&
                          u.jsx("p", {
                            className: "text-red-400 text-xs mt-1",
                            children: f.wallet,
                          }),
                      ],
                    }),
                    u.jsxs("div", {
                      children: [
                        u.jsx("label", {
                          className:
                            "block text-white/80 text-sm font-medium mb-1.5",
                          children: "📦 اختر الباقة الاستثمارية",
                        }),
                        l.country && p.length > 0
                          ? u.jsx("div", {
                              className: "space-y-2",
                              children: p.map((h) =>
                                u.jsxs(
                                  "label",
                                  {
                                    className: `flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all text-sm ${l.package === h ? "border-yellow-500/60 bg-yellow-500/10" : "border-white/10 hover:border-yellow-500/30 hover:bg-white/2"}`,
                                    children: [
                                      u.jsx("input", {
                                        type: "radio",
                                        name: "package",
                                        value: h,
                                        checked: l.package === h,
                                        onChange: (g) =>
                                          s({ ...l, package: g.target.value }),
                                        className: "hidden",
                                      }),
                                      u.jsx("div", {
                                        className: `w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${l.package === h ? "border-yellow-500 bg-yellow-500" : "border-white/30"}`,
                                        children:
                                          l.package === h &&
                                          u.jsx("div", {
                                            className:
                                              "w-1.5 h-1.5 rounded-full bg-white",
                                          }),
                                      }),
                                      u.jsx("span", {
                                        className: "text-white",
                                        children: h,
                                      }),
                                    ],
                                  },
                                  h,
                                ),
                              ),
                            })
                          : l.country
                            ? u.jsx("div", {
                                className:
                                  "p-3 bg-black/40 border border-white/10 rounded-xl text-white/40 text-sm text-center",
                                children:
                                  "تواصل معنا لمعرفة الباقات المتاحة لدولتك",
                              })
                            : u.jsx("div", {
                                className:
                                  "p-3 bg-black/40 border border-white/10 rounded-xl text-white/40 text-sm text-center",
                                children:
                                  "اختر الدولة أولاً لعرض الباقات المتاحة",
                              }),
                        f.package &&
                          u.jsx("p", {
                            className: "text-red-400 text-xs mt-1",
                            children: f.package,
                          }),
                      ],
                    }),
                    u.jsxs("div", {
                      children: [
                        u.jsxs("label", {
                          className:
                            "block text-white/70 text-sm font-medium mb-1.5",
                          children: [
                            u.jsx(It, { className: "w-3.5 h-3.5 inline ml-1" }),
                            "معرّف تيليغرام ",
                            u.jsx("span", {
                              className: "text-white/40 font-normal",
                              children: "(اختياري)",
                            }),
                          ],
                        }),
                        u.jsx("input", {
                          type: "text",
                          value: l.telegramUsername,
                          onChange: (h) =>
                            s({
                              ...l,
                              telegramUsername: h.target.value.replace("@", ""),
                            }),
                          placeholder: "@Username",
                          className:
                            "w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-yellow-500/60 text-sm",
                          dir: "ltr",
                        }),
                      ],
                    }),
                    u.jsxs(qe, {
                      type: "submit",
                      size: "lg",
                      className:
                        "w-full bg-yellow-500 hover:bg-yellow-400 text-black font-black text-base py-3.5 glow-animate",
                      children: [
                        u.jsx(Op, { className: "w-4 h-4 mr-2" }),
                        " إرسال طلب الاشتراك",
                      ],
                    }),
                    u.jsx("p", {
                      className: "text-white/40 text-xs text-center",
                      children:
                        "سيتم فتح تيليغرام لإرسال بياناتك مباشرةً لفريقنا",
                    }),
                    u.jsxs("div", {
                      className:
                        "pt-2 border-t border-white/5 flex flex-col sm:flex-row gap-2",
                      children: [
                        u.jsx("a", {
                          href: "https://t.me/A_M_ut",
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className: "flex-1",
                          children: u.jsxs(qe, {
                            variant: "outline",
                            className:
                              "w-full border-blue-500/40 text-blue-400 text-xs h-9",
                            children: [
                              u.jsx(It, { className: "w-3.5 h-3.5 mr-1" }),
                              " تيليغرام مباشر",
                            ],
                          }),
                        }),
                        u.jsx("a", {
                          href: "https://wa.me/966563718419",
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className: "flex-1",
                          children: u.jsxs(qe, {
                            variant: "outline",
                            className:
                              "w-full border-green-500/40 text-green-400 text-xs h-9",
                            children: [
                              u.jsx(nl, { className: "w-3.5 h-3.5 mr-1" }),
                              " واتساب",
                            ],
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      });
}
function tN() {
  const [l, s] = w.useState({ name: "", phone: "", message: "" }),
    [r, c] = w.useState(!1),
    f = (d) => {
      d.preventDefault();
      const p = encodeURIComponent(`👋 استفسار من: ${l.name}
📱 ${l.phone}

💬 ${l.message}`);
      (window.open(`https://t.me/M_M_FJ?text=${p}`, "_blank"), c(!0));
    };
  return u.jsxs("div", {
    className: "min-h-screen pt-16",
    children: [
      u.jsxs("div", {
        className:
          "py-8 sm:py-12 bg-black border-b border-yellow-500/20 text-center px-4",
        children: [
          u.jsx("h1", {
            className: "text-3xl sm:text-4xl font-black text-white mb-2",
            children: u.jsx("span", {
              className: "shimmer-text",
              children: "تواصل معنا",
            }),
          }),
          u.jsx("p", {
            className: "text-white/60 text-sm",
            children: "فريقنا متاح على مدار 24/7 الساعة لمساعدتك",
          }),
        ],
      }),
      u.jsx("div", {
        className: "max-w-3xl mx-auto px-4 py-8 sm:py-12",
        children: u.jsxs("div", {
          className: "grid sm:grid-cols-2 gap-4 sm:gap-6",
          children: [
            u.jsxs("div", {
              className: "space-y-4",
              children: [
                u.jsxs("div", {
                  className:
                    "bg-card border border-yellow-500/20 rounded-2xl p-5",
                  children: [
                    u.jsx("h2", {
                      className: "text-base font-black text-white mb-4",
                      children: "قنوات التواصل",
                    }),
                    u.jsxs("div", {
                      className: "space-y-3",
                      children: [
                        u.jsxs("a", {
                          href: "https://t.me/A_M_ut",
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className:
                            "flex items-center gap-3 p-3.5 bg-blue-600/10 border border-blue-500/30 rounded-xl hover:bg-blue-600/20 transition-all",
                          children: [
                            u.jsx("div", {
                              className:
                                "w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0",
                              children: u.jsx(It, {
                                className: "w-5 h-5 text-white",
                              }),
                            }),
                            u.jsxs("div", {
                              children: [
                                u.jsx("div", {
                                  className: "text-white font-bold text-sm",
                                  children: "تيليغرام",
                                }),
                                u.jsx("div", {
                                  className: "text-blue-400 text-xs",
                                  children: "@A_M_ut",
                                }),
                              ],
                            }),
                          ],
                        }),
                        u.jsxs("a", {
                          href: "https://wa.me/966563718419",
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className:
                            "flex items-center gap-3 p-3.5 bg-green-600/10 border border-green-500/30 rounded-xl hover:bg-green-600/20 transition-all",
                          children: [
                            u.jsx("div", {
                              className:
                                "w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center flex-shrink-0",
                              children: u.jsx(nl, {
                                className: "w-5 h-5 text-white",
                              }),
                            }),
                            u.jsxs("div", {
                              children: [
                                u.jsx("div", {
                                  className: "text-white font-bold text-sm",
                                  children: "واتساب",
                                }),
                                u.jsx("div", {
                                  className: "text-green-400 text-xs",
                                  dir: "ltr",
                                  children: "+966563718419",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                u.jsxs("div", {
                  className:
                    "bg-card border border-yellow-500/20 rounded-2xl p-4",
                  children: [
                    u.jsx("h3", {
                      className: "text-white font-bold text-sm mb-3",
                      children: "مواعيد العمل",
                    }),
                    u.jsx("div", {
                      className: "space-y-2 text-xs",
                      children: [
                        { day: "الأحد — الخميس", hours: "8ص — 12م" },
                        { day: "الجمعة — السبت", hours: "10ص — 10م" },
                        { day: "الدعم الإلكتروني", hours: "24/7" },
                      ].map(({ day: d, hours: p }) =>
                        u.jsxs(
                          "div",
                          {
                            className: "flex justify-between",
                            children: [
                              u.jsx("span", {
                                className: "text-white/60",
                                children: d,
                              }),
                              u.jsx("span", {
                                className: "text-yellow-400 font-medium",
                                children: p,
                              }),
                            ],
                          },
                          d,
                        ),
                      ),
                    }),
                  ],
                }),
                u.jsxs("div", {
                  className:
                    "bg-gradient-to-br from-yellow-500/10 to-transparent border border-yellow-500/30 rounded-2xl p-4",
                  children: [
                    u.jsx(qt, { className: "w-7 h-7 text-yellow-400 mb-2" }),
                    u.jsx("h3", {
                      className: "text-white font-bold text-sm mb-1",
                      children: "ضمان الاستجابة السريعة",
                    }),
                    u.jsx("p", {
                      className: "text-white/60 text-xs",
                      children:
                        "نرد على استفساراتك في أقرب وقت ممكن عبر تيليغرام.",
                    }),
                  ],
                }),
              ],
            }),
            u.jsx("div", {
              className: "bg-card border border-yellow-500/20 rounded-2xl p-5",
              children: r
                ? u.jsxs("div", {
                    className:
                      "h-full flex flex-col items-center justify-center text-center py-8",
                    children: [
                      u.jsx("div", {
                        className:
                          "w-14 h-14 bg-green-500/20 rounded-full flex items-center justify-center mb-3",
                        children: u.jsx(Tl, {
                          className: "w-7 h-7 text-green-400",
                        }),
                      }),
                      u.jsx("h3", {
                        className: "text-lg font-black text-white mb-2",
                        children: "تم الإرسال!",
                      }),
                      u.jsx("p", {
                        className: "text-white/60 text-sm mb-4",
                        children: "سيتواصل معك فريقنا قريباً.",
                      }),
                      u.jsx(qe, {
                        onClick: () => c(!1),
                        variant: "outline",
                        className:
                          "border-yellow-500/30 text-yellow-400 text-sm",
                        children: "إرسال رسالة أخرى",
                      }),
                    ],
                  })
                : u.jsxs(u.Fragment, {
                    children: [
                      u.jsx("h2", {
                        className: "text-base font-black text-white mb-4",
                        children: "أرسل رسالتك",
                      }),
                      u.jsxs("form", {
                        onSubmit: f,
                        className: "space-y-3",
                        children: [
                          u.jsxs("div", {
                            children: [
                              u.jsx("label", {
                                className: "block text-white/70 text-xs mb-1.5",
                                children: "اسمك",
                              }),
                              u.jsx("input", {
                                type: "text",
                                required: !0,
                                value: l.name,
                                onChange: (d) =>
                                  s({ ...l, name: d.target.value }),
                                placeholder: "اسمك الكامل",
                                className:
                                  "w-full bg-black/40 border border-white/10 rounded-xl px-3.5 py-2.5 text-white placeholder:text-white/30 focus:outline-none focus:border-yellow-500/60 text-sm",
                              }),
                            ],
                          }),
                          u.jsxs("div", {
                            children: [
                              u.jsx("label", {
                                className: "block text-white/70 text-xs mb-1.5",
                                children: "رقم الهاتف",
                              }),
                              u.jsx("input", {
                                type: "tel",
                                value: l.phone,
                                onChange: (d) =>
                                  s({ ...l, phone: d.target.value }),
                                placeholder: "+966xxxxxxxxx",
                                className:
                                  "w-full bg-black/40 border border-white/10 rounded-xl px-3.5 py-2.5 text-white placeholder:text-white/30 focus:outline-none focus:border-yellow-500/60 text-sm",
                                dir: "ltr",
                              }),
                            ],
                          }),
                          u.jsxs("div", {
                            children: [
                              u.jsx("label", {
                                className: "block text-white/70 text-xs mb-1.5",
                                children: "رسالتك",
                              }),
                              u.jsx("textarea", {
                                required: !0,
                                value: l.message,
                                onChange: (d) =>
                                  s({ ...l, message: d.target.value }),
                                placeholder: "اكتب استفسارك هنا...",
                                rows: 4,
                                className:
                                  "w-full bg-black/40 border border-white/10 rounded-xl px-3.5 py-2.5 text-white placeholder:text-white/30 focus:outline-none focus:border-yellow-500/60 text-sm resize-none",
                              }),
                            ],
                          }),
                          u.jsxs(qe, {
                            type: "submit",
                            size: "lg",
                            className:
                              "w-full bg-yellow-500 hover:bg-yellow-400 text-black font-black",
                            children: [
                              u.jsx(Op, { className: "w-4 h-4 mr-1.5" }),
                              " إرسال عبر تيليغرام",
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
            }),
          ],
        }),
      }),
    ],
  });
}
function Ds(l, s, r, c = []) {
  w.useEffect(() => {
    if (!l.current) return;
    l.current.innerHTML = "";
    const f = document.createElement("div");
    ((f.className = "tradingview-widget-container__widget"),
      (f.style.cssText = "height:calc(100% - 4px);width:100%"),
      l.current.appendChild(f));
    const d = document.createElement("script");
    return (
      (d.src = s),
      (d.async = !0),
      (d.type = "text/javascript"),
      (d.innerHTML = JSON.stringify(r)),
      l.current.appendChild(d),
      () => {
        l.current && (l.current.innerHTML = "");
      }
    );
  }, c);
}
function nN({ id: l, symbol: s, interval: r = "60", height: c = 380 }) {
  const f = w.useRef(null);
  return (
    Ds(
      f,
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js",
      {
        autosize: !0,
        symbol: s,
        interval: r,
        timezone: "Asia/Riyadh",
        theme: "dark",
        style: "1",
        locale: "ar_AE",
        allow_symbol_change: !0,
        calendar: !1,
        hide_top_toolbar: !1,
        hide_legend: !1,
        save_image: !1,
        hide_side_toolbar: !0,
        withdateranges: !0,
        backgroundColor: "rgba(10,15,30,1)",
        gridColor: "rgba(255,215,0,0.05)",
      },
      [l],
    ),
    u.jsx("div", {
      ref: f,
      className: "tradingview-widget-container",
      style: { height: c, width: "100%" },
    })
  );
}
function lN({ id: l }) {
  const s = w.useRef(null);
  return (
    Ds(
      s,
      "https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js",
      {
        colorTheme: "dark",
        dateRange: "12M",
        showChart: !0,
        locale: "ar_AE",
        largeChartUrl: "",
        isTransparent: !0,
        showSymbolLogo: !0,
        showFloatingTooltip: !0,
        width: "100%",
        height: "660",
        plotLineColorGrowing: "#22c55e",
        plotLineColorFalling: "#ef4444",
        gridLineColor: "rgba(255,215,0,0.05)",
        scaleFontColor: "rgba(255,255,255,0.5)",
        belowLineFillColorGrowing: "rgba(34,197,94,0.1)",
        belowLineFillColorFalling: "rgba(239,68,68,0.1)",
        belowLineFillColorGrowingBottom: "rgba(34,197,94,0)",
        belowLineFillColorFallingBottom: "rgba(239,68,68,0)",
        symbolActiveColor: "rgba(255,215,0,0.1)",
        tabs: [
          {
            title: "الذهب والنفط",
            symbols: [
              { s: "XAUUSD", d: "الذهب" },
              { s: "XAGUSD", d: "الفضة" },
              { s: "USOIL", d: "نفط WTI" },
              { s: "UKOIL", d: "نفط برنت" },
              { s: "NGAS", d: "الغاز" },
              { s: "XPTUSD", d: "البلاتين" },
            ],
          },
          {
            title: "العملات الرقمية",
            symbols: [
              { s: "BINANCE:BTCUSDT", d: "بيتكوين" },
              { s: "BINANCE:ETHUSDT", d: "إيثيريوم" },
              { s: "BINANCE:BNBUSDT", d: "BNB" },
              { s: "BINANCE:SOLUSDT", d: "سولانا" },
              { s: "BINANCE:XRPUSDT", d: "ريبل" },
              { s: "BINANCE:ADAUSDT", d: "كاردانو" },
            ],
          },
          {
            title: "الفوركس",
            symbols: [
              { s: "FX:EURUSD", d: "يورو/دولار" },
              { s: "FX:GBPUSD", d: "جنيه/دولار" },
              { s: "FX:USDJPY", d: "دولار/ين" },
              { s: "FX:USDCHF", d: "دولار/فرنك" },
              { s: "FX:AUDUSD", d: "أسترالي/دولار" },
              { s: "FX:USDCAD", d: "دولار/كندي" },
            ],
          },
          {
            title: "المؤشرات",
            symbols: [
              { s: "FOREXCOM:SPXUSD", d: "S&P 500" },
              { s: "NASDAQ:NDX", d: "ناسداك" },
              { s: "FOREXCOM:DJI", d: "داو جونز" },
              { s: "INDEX:DAX", d: "داكس" },
              { s: "SPREADEX:FTSE", d: "فوتسي" },
            ],
          },
        ],
      },
      [l],
    ),
    u.jsx("div", {
      ref: s,
      className: "tradingview-widget-container",
      style: { height: 660, width: "100%" },
    })
  );
}
function aN() {
  const l = w.useRef(null);
  return (
    Ds(
      l,
      "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js",
      {
        symbols: [
          { proName: "XAUUSD", title: "🥇 الذهب" },
          { proName: "USOIL", title: "🛢 نفط WTI" },
          { proName: "UKOIL", title: "🛢 برنت" },
          { proName: "BINANCE:BTCUSDT", title: "₿ بيتكوين" },
          { proName: "BINANCE:ETHUSDT", title: "Ξ إيثيريوم" },
          { proName: "FX:EURUSD", title: "EUR/USD" },
          { proName: "FX:GBPUSD", title: "GBP/USD" },
          { proName: "FX:USDJPY", title: "USD/JPY" },
          { proName: "FOREXCOM:SPXUSD", title: "S&P 500" },
          { proName: "NASDAQ:NDX", title: "ناسداك" },
          { proName: "XAGUSD", title: "🥈 الفضة" },
          { proName: "NGAS", title: "⛽ الغاز" },
        ],
        showSymbolLogo: !0,
        isTransparent: !0,
        displayMode: "adaptive",
        colorTheme: "dark",
        locale: "ar_AE",
      },
      [],
    ),
    u.jsx("div", { ref: l, className: "tradingview-widget-container w-full" })
  );
}
function sN() {
  const l = w.useRef(null);
  return (
    Ds(
      l,
      "https://s3.tradingview.com/external-embedding/embed-widget-screener.js",
      {
        width: "100%",
        height: 500,
        defaultColumn: "overview",
        defaultScreen: "most_capitalized",
        market: "crypto",
        showToolbar: !0,
        colorTheme: "dark",
        locale: "ar_AE",
        isTransparent: !0,
      },
      [],
    ),
    u.jsx("div", {
      ref: l,
      className: "tradingview-widget-container",
      style: { height: 500 },
    })
  );
}
function iN() {
  const l = w.useRef(null);
  return (
    Ds(
      l,
      "https://s3.tradingview.com/external-embedding/embed-widget-screener.js",
      {
        width: "100%",
        height: 500,
        defaultColumn: "overview",
        defaultScreen: "top_gainers",
        market: "forex",
        showToolbar: !0,
        colorTheme: "dark",
        locale: "ar_AE",
        isTransparent: !0,
      },
      [],
    ),
    u.jsx("div", {
      ref: l,
      className: "tradingview-widget-container",
      style: { height: 500 },
    })
  );
}
const rN = [
    {
      id: "gold",
      symbol: "XAUUSD",
      name: "الذهب",
      color: "text-yellow-400",
      border: "border-yellow-500/30",
    },
    {
      id: "silver",
      symbol: "XAGUSD",
      name: "الفضة",
      color: "text-gray-300",
      border: "border-gray-400/30",
    },
    {
      id: "wti",
      symbol: "USOIL",
      name: "نفط خام WTI",
      color: "text-orange-400",
      border: "border-orange-500/30",
    },
    {
      id: "brent",
      symbol: "UKOIL",
      name: "نفط برنت",
      color: "text-orange-300",
      border: "border-orange-400/30",
    },
    {
      id: "ngas",
      symbol: "NGAS",
      name: "الغاز الطبيعي",
      color: "text-blue-300",
      border: "border-blue-400/30",
    },
    {
      id: "platinum",
      symbol: "XPTUSD",
      name: "البلاتين",
      color: "text-purple-300",
      border: "border-purple-400/30",
    },
  ],
  oN = [
    {
      id: "btc",
      symbol: "BINANCE:BTCUSDT",
      name: "بيتكوين BTC",
      color: "text-orange-400",
      border: "border-orange-500/30",
    },
    {
      id: "eth",
      symbol: "BINANCE:ETHUSDT",
      name: "إيثيريوم ETH",
      color: "text-purple-400",
      border: "border-purple-500/30",
    },
    {
      id: "bnb",
      symbol: "BINANCE:BNBUSDT",
      name: "بي إن بي BNB",
      color: "text-yellow-400",
      border: "border-yellow-500/30",
    },
    {
      id: "sol",
      symbol: "BINANCE:SOLUSDT",
      name: "سولانا SOL",
      color: "text-green-400",
      border: "border-green-500/30",
    },
    {
      id: "xrp",
      symbol: "BINANCE:XRPUSDT",
      name: "ريبل XRP",
      color: "text-blue-400",
      border: "border-blue-500/30",
    },
    {
      id: "ada",
      symbol: "BINANCE:ADAUSDT",
      name: "كاردانو ADA",
      color: "text-sky-400",
      border: "border-sky-500/30",
    },
  ],
  cN = [
    {
      id: "eurusd",
      symbol: "FX:EURUSD",
      name: "يورو / دولار",
      color: "text-blue-400",
      border: "border-blue-500/30",
    },
    {
      id: "gbpusd",
      symbol: "FX:GBPUSD",
      name: "جنيه / دولار",
      color: "text-red-400",
      border: "border-red-500/30",
    },
    {
      id: "usdjpy",
      symbol: "FX:USDJPY",
      name: "دولار / ين",
      color: "text-pink-400",
      border: "border-pink-500/30",
    },
    {
      id: "usdchf",
      symbol: "FX:USDCHF",
      name: "دولار / فرنك",
      color: "text-white",
      border: "border-white/20",
    },
    {
      id: "audusd",
      symbol: "FX:AUDUSD",
      name: "أسترالي / دولار",
      color: "text-green-400",
      border: "border-green-500/30",
    },
    {
      id: "usdcad",
      symbol: "FX:USDCAD",
      name: "دولار / كندي",
      color: "text-red-300",
      border: "border-red-400/30",
    },
  ],
  uN = [
    {
      id: "spx",
      symbol: "FOREXCOM:SPXUSD",
      name: "S&P 500",
      color: "text-blue-400",
      border: "border-blue-500/30",
    },
    {
      id: "ndx",
      symbol: "NASDAQ:NDX",
      name: "ناسداك 100",
      color: "text-green-400",
      border: "border-green-500/30",
    },
    {
      id: "dji",
      symbol: "FOREXCOM:DJI",
      name: "داو جونز",
      color: "text-yellow-400",
      border: "border-yellow-500/30",
    },
  ];
function er({ charts: l }) {
  return u.jsx("div", {
    className: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4",
    children: l.map((s) =>
      u.jsxs(
        "div",
        {
          className: `bg-card border ${s.border} rounded-2xl overflow-hidden`,
          children: [
            u.jsxs("div", {
              className:
                "px-3 pt-2.5 pb-1 border-b border-white/5 flex items-center gap-1.5",
              children: [
                u.jsx("span", {
                  className: `text-xs font-bold ${s.color}`,
                  children: s.name,
                }),
                u.jsxs("span", {
                  className:
                    "ml-auto text-green-400 text-[10px] flex items-center gap-0.5",
                  children: [
                    u.jsx("span", {
                      className:
                        "w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse inline-block",
                    }),
                    " مباشر",
                  ],
                }),
              ],
            }),
            u.jsx(nN, { id: s.id, symbol: s.symbol, height: 340 }),
          ],
        },
        s.id,
      ),
    ),
  });
}
function fN() {
  return u.jsxs("div", {
    className: "min-h-screen pt-16 bg-background",
    children: [
      u.jsxs("div", {
        className:
          "py-6 sm:py-10 bg-black border-b border-yellow-500/20 text-center px-4",
        children: [
          u.jsxs("h1", {
            className: "text-2xl sm:text-4xl font-black text-white mb-2",
            children: [
              u.jsx(jp, {
                className:
                  "inline-block w-7 h-7 sm:w-9 sm:h-9 text-yellow-400 ml-2 mb-1",
              }),
              u.jsx("span", {
                className: "shimmer-text",
                children: "لوحة التحليل المباشر",
              }),
            ],
          }),
          u.jsx("p", {
            className: "text-white/60 text-sm sm:text-base max-w-2xl mx-auto",
            children:
              "أسعار ورسوم بيانية حقيقية لحظة بلحظة — الذهب، النفط، الفوركس، العملات الرقمية، المؤشرات العالمية",
          }),
          u.jsxs("div", {
            className:
              "flex items-center justify-center gap-2 mt-2 text-green-400 text-xs",
            children: [
              u.jsx("span", {
                className:
                  "inline-block w-2 h-2 rounded-full bg-green-400 animate-pulse",
              }),
              "بيانات حية مدعومة من TradingView",
            ],
          }),
        ],
      }),
      u.jsx("div", {
        className: "bg-black/70 border-b border-yellow-500/10",
        children: u.jsx(aN, {}),
      }),
      u.jsxs("div", {
        className:
          "max-w-screen-2xl mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-12",
        children: [
          u.jsxs("section", {
            children: [
              u.jsxs("div", {
                className: "flex items-center gap-2 mb-4",
                children: [
                  u.jsx(C1, { className: "w-5 h-5 text-yellow-400" }),
                  u.jsx("h2", {
                    className: "text-lg sm:text-xl font-black text-white",
                    children: "نظرة شاملة على الأسواق",
                  }),
                ],
              }),
              u.jsx("div", {
                className:
                  "bg-card border border-yellow-500/20 rounded-2xl overflow-hidden",
                children: u.jsx(lN, { id: "overview" }),
              }),
            ],
          }),
          u.jsxs("section", {
            children: [
              u.jsxs("div", {
                className: "flex items-center gap-2 mb-4",
                children: [
                  u.jsx(M1, { className: "w-5 h-5 text-yellow-400" }),
                  u.jsx("h2", {
                    className: "text-lg sm:text-xl font-black text-white",
                    children: "الذهب والمعادن والنفط",
                  }),
                ],
              }),
              u.jsx(er, { charts: rN }),
            ],
          }),
          u.jsxs("section", {
            children: [
              u.jsxs("div", {
                className: "flex items-center gap-2 mb-4",
                children: [
                  u.jsx(Ap, { className: "w-5 h-5 text-purple-400" }),
                  u.jsx("h2", {
                    className: "text-lg sm:text-xl font-black text-white",
                    children: "العملات الرقمية",
                  }),
                ],
              }),
              u.jsx(er, { charts: oN }),
            ],
          }),
          u.jsxs("section", {
            children: [
              u.jsxs("div", {
                className: "flex items-center gap-2 mb-4",
                children: [
                  u.jsx(d1, { className: "w-5 h-5 text-orange-400" }),
                  u.jsx("h2", {
                    className: "text-lg sm:text-xl font-black text-white",
                    children: "فاحص العملات الرقمية",
                  }),
                ],
              }),
              u.jsx("div", {
                className:
                  "bg-card border border-orange-500/20 rounded-2xl overflow-hidden",
                children: u.jsx(sN, {}),
              }),
            ],
          }),
          u.jsxs("section", {
            children: [
              u.jsxs("div", {
                className: "flex items-center gap-2 mb-4",
                children: [
                  u.jsx(T1, { className: "w-5 h-5 text-blue-400" }),
                  u.jsx("h2", {
                    className: "text-lg sm:text-xl font-black text-white",
                    children: "الفوركس — أزواج العملات",
                  }),
                ],
              }),
              u.jsx(er, { charts: cN }),
            ],
          }),
          u.jsxs("section", {
            children: [
              u.jsxs("div", {
                className: "flex items-center gap-2 mb-4",
                children: [
                  u.jsx(In, { className: "w-5 h-5 text-green-400" }),
                  u.jsx("h2", {
                    className: "text-lg sm:text-xl font-black text-white",
                    children: "فاحص الفوركس",
                  }),
                ],
              }),
              u.jsx("div", {
                className:
                  "bg-card border border-green-500/20 rounded-2xl overflow-hidden",
                children: u.jsx(iN, {}),
              }),
            ],
          }),
          u.jsxs("section", {
            children: [
              u.jsxs("div", {
                className: "flex items-center gap-2 mb-4",
                children: [
                  u.jsx(z1, { className: "w-5 h-5 text-green-400" }),
                  u.jsx("h2", {
                    className: "text-lg sm:text-xl font-black text-white",
                    children: "المؤشرات العالمية الكبرى",
                  }),
                ],
              }),
              u.jsx(er, { charts: uN }),
            ],
          }),
        ],
      }),
    ],
  });
}
const Mx = w.forwardRef(({ className: l, ...s }, r) =>
  u.jsx("div", {
    ref: r,
    className: mt("rounded-xl border bg-card text-card-foreground shadow", l),
    ...s,
  }),
);
Mx.displayName = "Card";
const dN = w.forwardRef(({ className: l, ...s }, r) =>
  u.jsx("div", {
    ref: r,
    className: mt("flex flex-col space-y-1.5 p-6", l),
    ...s,
  }),
);
dN.displayName = "CardHeader";
const mN = w.forwardRef(({ className: l, ...s }, r) =>
  u.jsx("div", {
    ref: r,
    className: mt("font-semibold leading-none tracking-tight", l),
    ...s,
  }),
);
mN.displayName = "CardTitle";
const hN = w.forwardRef(({ className: l, ...s }, r) =>
  u.jsx("div", {
    ref: r,
    className: mt("text-sm text-muted-foreground", l),
    ...s,
  }),
);
hN.displayName = "CardDescription";
const _x = w.forwardRef(({ className: l, ...s }, r) =>
  u.jsx("div", { ref: r, className: mt("p-6 pt-0", l), ...s }),
);
_x.displayName = "CardContent";
const pN = w.forwardRef(({ className: l, ...s }, r) =>
  u.jsx("div", {
    ref: r,
    className: mt("flex items-center p-6 pt-0", l),
    ...s,
  }),
);
pN.displayName = "CardFooter";
function xN() {
  return u.jsx("div", {
    className:
      "min-h-screen w-full flex items-center justify-center bg-gray-50",
    children: u.jsx(Mx, {
      className: "w-full max-w-md mx-4",
      children: u.jsxs(_x, {
        className: "pt-6",
        children: [
          u.jsxs("div", {
            className: "flex mb-4 gap-2",
            children: [
              u.jsx(v1, { className: "h-8 w-8 text-red-500" }),
              u.jsx("h1", {
                className: "text-2xl font-bold text-gray-900",
                children: "404 Page Not Found",
              }),
            ],
          }),
          u.jsx("p", {
            className: "mt-4 text-sm text-gray-600",
            children: "Did you forget to add the page to the router?",
          }),
        ],
      }),
    }),
  });
}
const yN = new ab();
function gN() {
  const [l] = G0();
  return (
    w.useEffect(() => {
      JS(l);
    }, [l]),
    null
  );
}
function vN() {
  return u.jsxs(u.Fragment, {
    children: [
      u.jsx(gN, {}),
      u.jsx(HS, {}),
      u.jsx(US, {}),
      u.jsxs(Mv, {
        children: [
          u.jsx(Pn, { path: "/", component: GS }),
          u.jsx(Pn, { path: "/markets", component: YS }),
          u.jsx(Pn, { path: "/charts", component: fN }),
          u.jsx(Pn, { path: "/packages", component: ZS }),
          u.jsx(Pn, { path: "/about", component: FS }),
          u.jsx(Pn, { path: "/register", component: eN }),
          u.jsx(Pn, { path: "/contact", component: tN }),
          u.jsx(Pn, { component: xN }),
        ],
      }),
      u.jsx(kS, {}),
    ],
  });
}
function bN() {
  return u.jsx(ib, {
    client: yN,
    children: u.jsxs(NS, {
      children: [
        u.jsx(Y0, { base: "/".replace(/\/$/, ""), children: u.jsx(vN, {}) }),
        u.jsx(Yw, {}),
      ],
    }),
  });
}
uv.createRoot(document.getElementById("root")).render(u.jsx(bN, {}));
