(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([
  "object" == typeof document ? document.currentScript : void 0,
  {
    805914: (e) => {
      "use strict";
      let t;
      e.s({ W3mFrameProvider: () => af }, 805914);
      var a,
        r,
        n,
        s,
        i = e.i(188274),
        o = e.i(605726),
        l = e.i(351667),
        d = e.i(905379);
      !(function (e) {
        (e.assertEqual = (e) => e),
          (e.assertIs = function (e) {}),
          (e.assertNever = function (e) {
            throw Error();
          }),
          (e.arrayToEnum = (e) => {
            let t = {};
            for (let a of e) t[a] = a;
            return t;
          }),
          (e.getValidEnumValues = (t) => {
            let a = e.objectKeys(t).filter((e) => "number" != typeof t[t[e]]),
              r = {};
            for (let e of a) r[e] = t[e];
            return e.objectValues(r);
          }),
          (e.objectValues = (t) =>
            e.objectKeys(t).map(function (e) {
              return t[e];
            })),
          (e.objectKeys =
            "function" == typeof Object.keys
              ? (e) => Object.keys(e)
              : (e) => {
                  let t = [];
                  for (let a in e)
                    Object.prototype.hasOwnProperty.call(e, a) && t.push(a);
                  return t;
                }),
          (e.find = (e, t) => {
            for (let a of e) if (t(a)) return a;
          }),
          (e.isInteger =
            "function" == typeof Number.isInteger
              ? (e) => Number.isInteger(e)
              : (e) =>
                  "number" == typeof e && isFinite(e) && Math.floor(e) === e),
          (e.joinValues = function (e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : " | ";
            return e
              .map((e) => ("string" == typeof e ? "'".concat(e, "'") : e))
              .join(t);
          }),
          (e.jsonStringifyReplacer = (e, t) =>
            "bigint" == typeof t ? t.toString() : t);
      })(a || (a = {})),
        ((r || (r = {})).mergeShapes = (e, t) => ({ ...e, ...t }));
      let c = a.arrayToEnum([
          "string",
          "nan",
          "number",
          "integer",
          "float",
          "boolean",
          "date",
          "bigint",
          "symbol",
          "function",
          "undefined",
          "null",
          "array",
          "object",
          "unknown",
          "promise",
          "void",
          "never",
          "map",
          "set",
        ]),
        u = (e) => {
          switch (typeof e) {
            case "undefined":
              return c.undefined;
            case "string":
              return c.string;
            case "number":
              return isNaN(e) ? c.nan : c.number;
            case "boolean":
              return c.boolean;
            case "function":
              return c.function;
            case "bigint":
              return c.bigint;
            case "symbol":
              return c.symbol;
            case "object":
              if (Array.isArray(e)) return c.array;
              if (null === e) return c.null;
              if (
                e.then &&
                "function" == typeof e.then &&
                e.catch &&
                "function" == typeof e.catch
              )
                return c.promise;
              if ("undefined" != typeof Map && e instanceof Map) return c.map;
              if ("undefined" != typeof Set && e instanceof Set) return c.set;
              if ("undefined" != typeof Date && e instanceof Date)
                return c.date;
              return c.object;
            default:
              return c.unknown;
          }
        },
        p = a.arrayToEnum([
          "invalid_type",
          "invalid_literal",
          "custom",
          "invalid_union",
          "invalid_union_discriminator",
          "invalid_enum_value",
          "unrecognized_keys",
          "invalid_arguments",
          "invalid_return_type",
          "invalid_date",
          "invalid_string",
          "too_small",
          "too_big",
          "invalid_intersection_types",
          "not_multiple_of",
          "not_finite",
        ]);
      class m extends Error {
        get errors() {
          return this.issues;
        }
        format(e) {
          let t =
              e ||
              function (e) {
                return e.message;
              },
            a = { _errors: [] },
            r = (e) => {
              for (let n of e.issues)
                if ("invalid_union" === n.code) n.unionErrors.map(r);
                else if ("invalid_return_type" === n.code) r(n.returnTypeError);
                else if ("invalid_arguments" === n.code) r(n.argumentsError);
                else if (0 === n.path.length) a._errors.push(t(n));
                else {
                  let e = a,
                    r = 0;
                  for (; r < n.path.length; ) {
                    let a = n.path[r];
                    r === n.path.length - 1
                      ? ((e[a] = e[a] || { _errors: [] }),
                        e[a]._errors.push(t(n)))
                      : (e[a] = e[a] || { _errors: [] }),
                      (e = e[a]),
                      r++;
                  }
                }
            };
          return r(this), a;
        }
        toString() {
          return this.message;
        }
        get message() {
          return JSON.stringify(this.issues, a.jsonStringifyReplacer, 2);
        }
        get isEmpty() {
          return 0 === this.issues.length;
        }
        flatten() {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : (e) => e.message,
            t = {},
            a = [];
          for (let r of this.issues)
            r.path.length > 0
              ? ((t[r.path[0]] = t[r.path[0]] || []), t[r.path[0]].push(e(r)))
              : a.push(e(r));
          return { formErrors: a, fieldErrors: t };
        }
        get formErrors() {
          return this.flatten();
        }
        constructor(e) {
          var t;
          super(),
            (t = this),
            (this.issues = []),
            (this.addIssue = (e) => {
              this.issues = [...this.issues, e];
            }),
            (this.addIssues = function () {
              let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : [];
              t.issues = [...t.issues, ...e];
            });
          let a = new.target.prototype;
          Object.setPrototypeOf
            ? Object.setPrototypeOf(this, a)
            : (this.__proto__ = a),
            (this.name = "ZodError"),
            (this.issues = e);
        }
      }
      m.create = (e) => new m(e);
      let h = (e, t) => {
          let r;
          switch (e.code) {
            case p.invalid_type:
              r =
                e.received === c.undefined
                  ? "Required"
                  : "Expected "
                      .concat(e.expected, ", received ")
                      .concat(e.received);
              break;
            case p.invalid_literal:
              r = "Invalid literal value, expected ".concat(
                JSON.stringify(e.expected, a.jsonStringifyReplacer)
              );
              break;
            case p.unrecognized_keys:
              r = "Unrecognized key(s) in object: ".concat(
                a.joinValues(e.keys, ", ")
              );
              break;
            case p.invalid_union:
              r = "Invalid input";
              break;
            case p.invalid_union_discriminator:
              r = "Invalid discriminator value. Expected ".concat(
                a.joinValues(e.options)
              );
              break;
            case p.invalid_enum_value:
              r = "Invalid enum value. Expected "
                .concat(a.joinValues(e.options), ", received '")
                .concat(e.received, "'");
              break;
            case p.invalid_arguments:
              r = "Invalid function arguments";
              break;
            case p.invalid_return_type:
              r = "Invalid function return type";
              break;
            case p.invalid_date:
              r = "Invalid date";
              break;
            case p.invalid_string:
              "object" == typeof e.validation
                ? "includes" in e.validation
                  ? ((r = 'Invalid input: must include "'.concat(
                      e.validation.includes,
                      '"'
                    )),
                    "number" == typeof e.validation.position &&
                      (r = ""
                        .concat(
                          r,
                          " at one or more positions greater than or equal to "
                        )
                        .concat(e.validation.position)))
                  : "startsWith" in e.validation
                  ? (r = 'Invalid input: must start with "'.concat(
                      e.validation.startsWith,
                      '"'
                    ))
                  : "endsWith" in e.validation
                  ? (r = 'Invalid input: must end with "'.concat(
                      e.validation.endsWith,
                      '"'
                    ))
                  : a.assertNever(e.validation)
                : (r =
                    "regex" !== e.validation
                      ? "Invalid ".concat(e.validation)
                      : "Invalid");
              break;
            case p.too_small:
              r =
                "array" === e.type
                  ? "Array must contain "
                      .concat(
                        e.exact
                          ? "exactly"
                          : e.inclusive
                          ? "at least"
                          : "more than",
                        " "
                      )
                      .concat(e.minimum, " element(s)")
                  : "string" === e.type
                  ? "String must contain "
                      .concat(
                        e.exact ? "exactly" : e.inclusive ? "at least" : "over",
                        " "
                      )
                      .concat(e.minimum, " character(s)")
                  : "number" === e.type
                  ? "Number must be "
                      .concat(
                        e.exact
                          ? "exactly equal to "
                          : e.inclusive
                          ? "greater than or equal to "
                          : "greater than "
                      )
                      .concat(e.minimum)
                  : "date" === e.type
                  ? "Date must be "
                      .concat(
                        e.exact
                          ? "exactly equal to "
                          : e.inclusive
                          ? "greater than or equal to "
                          : "greater than "
                      )
                      .concat(new Date(Number(e.minimum)))
                  : "Invalid input";
              break;
            case p.too_big:
              r =
                "array" === e.type
                  ? "Array must contain "
                      .concat(
                        e.exact
                          ? "exactly"
                          : e.inclusive
                          ? "at most"
                          : "less than",
                        " "
                      )
                      .concat(e.maximum, " element(s)")
                  : "string" === e.type
                  ? "String must contain "
                      .concat(
                        e.exact ? "exactly" : e.inclusive ? "at most" : "under",
                        " "
                      )
                      .concat(e.maximum, " character(s)")
                  : "number" === e.type
                  ? "Number must be "
                      .concat(
                        e.exact
                          ? "exactly"
                          : e.inclusive
                          ? "less than or equal to"
                          : "less than",
                        " "
                      )
                      .concat(e.maximum)
                  : "bigint" === e.type
                  ? "BigInt must be "
                      .concat(
                        e.exact
                          ? "exactly"
                          : e.inclusive
                          ? "less than or equal to"
                          : "less than",
                        " "
                      )
                      .concat(e.maximum)
                  : "date" === e.type
                  ? "Date must be "
                      .concat(
                        e.exact
                          ? "exactly"
                          : e.inclusive
                          ? "smaller than or equal to"
                          : "smaller than",
                        " "
                      )
                      .concat(new Date(Number(e.maximum)))
                  : "Invalid input";
              break;
            case p.custom:
              r = "Invalid input";
              break;
            case p.invalid_intersection_types:
              r = "Intersection results could not be merged";
              break;
            case p.not_multiple_of:
              r = "Number must be a multiple of ".concat(e.multipleOf);
              break;
            case p.not_finite:
              r = "Number must be finite";
              break;
            default:
              (r = t.defaultError), a.assertNever(e);
          }
          return { message: r };
        },
        _ = h;
      function g() {
        return _;
      }
      let y = (e) => {
        let { data: t, path: a, errorMaps: r, issueData: n } = e,
          s = [...a, ...(n.path || [])],
          i = { ...n, path: s },
          o = "";
        for (let e of r
          .filter((e) => !!e)
          .slice()
          .reverse())
          o = e(i, { data: t, defaultError: o }).message;
        return { ...n, path: s, message: n.message || o };
      };
      function f(e, t) {
        let a = y({
          issueData: t,
          data: e.data,
          path: e.path,
          errorMaps: [
            e.common.contextualErrorMap,
            e.schemaErrorMap,
            g(),
            h,
          ].filter((e) => !!e),
        });
        e.common.issues.push(a);
      }
      class v {
        dirty() {
          "valid" === this.value && (this.value = "dirty");
        }
        abort() {
          "aborted" !== this.value && (this.value = "aborted");
        }
        static mergeArray(e, t) {
          let a = [];
          for (let r of t) {
            if ("aborted" === r.status) return E;
            "dirty" === r.status && e.dirty(), a.push(r.value);
          }
          return { status: e.value, value: a };
        }
        static async mergeObjectAsync(e, t) {
          let a = [];
          for (let e of t) a.push({ key: await e.key, value: await e.value });
          return v.mergeObjectSync(e, a);
        }
        static mergeObjectSync(e, t) {
          let a = {};
          for (let r of t) {
            let { key: t, value: n } = r;
            if ("aborted" === t.status || "aborted" === n.status) return E;
            "dirty" === t.status && e.dirty(),
              "dirty" === n.status && e.dirty(),
              "__proto__" !== t.value &&
                (void 0 !== n.value || r.alwaysSet) &&
                (a[t.value] = n.value);
          }
          return { status: e.value, value: a };
        }
        constructor() {
          this.value = "valid";
        }
      }
      let E = Object.freeze({ status: "aborted" }),
        C = (e) => ({ status: "dirty", value: e }),
        b = (e) => ({ status: "valid", value: e }),
        R = (e) => "aborted" === e.status,
        A = (e) => "dirty" === e.status,
        T = (e) => "valid" === e.status,
        w = (e) => "undefined" != typeof Promise && e instanceof Promise;
      !(function (e) {
        (e.errToObj = (e) => ("string" == typeof e ? { message: e } : e || {})),
          (e.toString = (e) =>
            "string" == typeof e ? e : null == e ? void 0 : e.message);
      })(n || (n = {}));
      class S {
        get path() {
          return (
            this._cachedPath.length ||
              (this._key instanceof Array
                ? this._cachedPath.push(...this._path, ...this._key)
                : this._cachedPath.push(...this._path, this._key)),
            this._cachedPath
          );
        }
        constructor(e, t, a, r) {
          (this._cachedPath = []),
            (this.parent = e),
            (this.data = t),
            (this._path = a),
            (this._key = r);
        }
      }
      let x = (e, t) => {
        if (T(t)) return { success: !0, data: t.value };
        if (!e.common.issues.length)
          throw Error("Validation failed but no issues detected.");
        return {
          success: !1,
          get error() {
            if (this._error) return this._error;
            let t = new m(e.common.issues);
            return (this._error = t), this._error;
          },
        };
      };
      function P(e) {
        if (!e) return {};
        let {
          errorMap: t,
          invalid_type_error: a,
          required_error: r,
          description: n,
        } = e;
        if (t && (a || r))
          throw Error(
            'Can\'t use "invalid_type_error" or "required_error" in conjunction with custom error map.'
          );
        return t
          ? { errorMap: t, description: n }
          : {
              errorMap: (e, t) =>
                "invalid_type" !== e.code
                  ? { message: t.defaultError }
                  : void 0 === t.data
                  ? { message: null != r ? r : t.defaultError }
                  : { message: null != a ? a : t.defaultError },
              description: n,
            };
      }
      class N {
        get description() {
          return this._def.description;
        }
        _getType(e) {
          return u(e.data);
        }
        _getOrReturnCtx(e, t) {
          return (
            t || {
              common: e.parent.common,
              data: e.data,
              parsedType: u(e.data),
              schemaErrorMap: this._def.errorMap,
              path: e.path,
              parent: e.parent,
            }
          );
        }
        _processInputParams(e) {
          return {
            status: new v(),
            ctx: {
              common: e.parent.common,
              data: e.data,
              parsedType: u(e.data),
              schemaErrorMap: this._def.errorMap,
              path: e.path,
              parent: e.parent,
            },
          };
        }
        _parseSync(e) {
          let t = this._parse(e);
          if (w(t)) throw Error("Synchronous parse encountered promise.");
          return t;
        }
        _parseAsync(e) {
          return Promise.resolve(this._parse(e));
        }
        parse(e, t) {
          let a = this.safeParse(e, t);
          if (a.success) return a.data;
          throw a.error;
        }
        safeParse(e, t) {
          var a;
          let r = {
              common: {
                issues: [],
                async: null != (a = null == t ? void 0 : t.async) && a,
                contextualErrorMap: null == t ? void 0 : t.errorMap,
              },
              path: (null == t ? void 0 : t.path) || [],
              schemaErrorMap: this._def.errorMap,
              parent: null,
              data: e,
              parsedType: u(e),
            },
            n = this._parseSync({ data: e, path: r.path, parent: r });
          return x(r, n);
        }
        async parseAsync(e, t) {
          let a = await this.safeParseAsync(e, t);
          if (a.success) return a.data;
          throw a.error;
        }
        async safeParseAsync(e, t) {
          let a = {
              common: {
                issues: [],
                contextualErrorMap: null == t ? void 0 : t.errorMap,
                async: !0,
              },
              path: (null == t ? void 0 : t.path) || [],
              schemaErrorMap: this._def.errorMap,
              parent: null,
              data: e,
              parsedType: u(e),
            },
            r = this._parse({ data: e, path: a.path, parent: a });
          return x(a, await (w(r) ? r : Promise.resolve(r)));
        }
        refine(e, t) {
          return this._refinement((a, r) => {
            let n = e(a),
              s = () =>
                r.addIssue({
                  code: p.custom,
                  ...("string" == typeof t || void 0 === t
                    ? { message: t }
                    : "function" == typeof t
                    ? t(a)
                    : t),
                });
            return "undefined" != typeof Promise && n instanceof Promise
              ? n.then((e) => !!e || (s(), !1))
              : !!n || (s(), !1);
          });
        }
        refinement(e, t) {
          return this._refinement(
            (a, r) =>
              !!e(a) || (r.addIssue("function" == typeof t ? t(a, r) : t), !1)
          );
        }
        _refinement(e) {
          return new eh({
            schema: this,
            typeName: s.ZodEffects,
            effect: { type: "refinement", refinement: e },
          });
        }
        superRefine(e) {
          return this._refinement(e);
        }
        optional() {
          return e_.create(this, this._def);
        }
        nullable() {
          return eg.create(this, this._def);
        }
        nullish() {
          return this.nullable().optional();
        }
        array() {
          return J.create(this, this._def);
        }
        promise() {
          return em.create(this, this._def);
        }
        or(e) {
          return X.create([this, e], this._def);
        }
        and(e) {
          return ea.create(this, e, this._def);
        }
        transform(e) {
          return new eh({
            ...P(this._def),
            schema: this,
            typeName: s.ZodEffects,
            effect: { type: "transform", transform: e },
          });
        }
        default(e) {
          return new ey({
            ...P(this._def),
            innerType: this,
            defaultValue: "function" == typeof e ? e : () => e,
            typeName: s.ZodDefault,
          });
        }
        brand() {
          return new eC({
            typeName: s.ZodBranded,
            type: this,
            ...P(this._def),
          });
        }
        catch(e) {
          return new ef({
            ...P(this._def),
            innerType: this,
            catchValue: "function" == typeof e ? e : () => e,
            typeName: s.ZodCatch,
          });
        }
        describe(e) {
          return new this.constructor({ ...this._def, description: e });
        }
        pipe(e) {
          return eb.create(this, e);
        }
        readonly() {
          return eR.create(this);
        }
        isOptional() {
          return this.safeParse(void 0).success;
        }
        isNullable() {
          return this.safeParse(null).success;
        }
        constructor(e) {
          (this.spa = this.safeParseAsync),
            (this._def = e),
            (this.parse = this.parse.bind(this)),
            (this.safeParse = this.safeParse.bind(this)),
            (this.parseAsync = this.parseAsync.bind(this)),
            (this.safeParseAsync = this.safeParseAsync.bind(this)),
            (this.spa = this.spa.bind(this)),
            (this.refine = this.refine.bind(this)),
            (this.refinement = this.refinement.bind(this)),
            (this.superRefine = this.superRefine.bind(this)),
            (this.optional = this.optional.bind(this)),
            (this.nullable = this.nullable.bind(this)),
            (this.nullish = this.nullish.bind(this)),
            (this.array = this.array.bind(this)),
            (this.promise = this.promise.bind(this)),
            (this.or = this.or.bind(this)),
            (this.and = this.and.bind(this)),
            (this.transform = this.transform.bind(this)),
            (this.brand = this.brand.bind(this)),
            (this.default = this.default.bind(this)),
            (this.catch = this.catch.bind(this)),
            (this.describe = this.describe.bind(this)),
            (this.pipe = this.pipe.bind(this)),
            (this.readonly = this.readonly.bind(this)),
            (this.isNullable = this.isNullable.bind(this)),
            (this.isOptional = this.isOptional.bind(this));
        }
      }
      let k = /^c[^\s-]{8,}$/i,
        O = /^[a-z][a-z0-9]*$/,
        I = /^[0-9A-HJKMNP-TV-Z]{26}$/,
        F =
          /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
        L =
          /^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,
        j =
          /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,
        U =
          /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,
        Z = (e) => {
          if (e.precision)
            if (e.offset)
              return new RegExp(
                "^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{".concat(
                  e.precision,
                  "}(([+-]\\d{2}(:?\\d{2})?)|Z)$"
                )
              );
            else
              return new RegExp(
                "^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{".concat(
                  e.precision,
                  "}Z$"
                )
              );
          if (0 === e.precision)
            if (e.offset)
              return RegExp(
                "^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$"
              );
            else return RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$");
          return e.offset
            ? RegExp(
                "^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$"
              )
            : RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");
        };
      class M extends N {
        _parse(e) {
          let r;
          if (
            (this._def.coerce && (e.data = String(e.data)),
            this._getType(e) !== c.string)
          ) {
            let t = this._getOrReturnCtx(e);
            return (
              f(t, {
                code: p.invalid_type,
                expected: c.string,
                received: t.parsedType,
              }),
              E
            );
          }
          let n = new v();
          for (let o of this._def.checks)
            if ("min" === o.kind)
              e.data.length < o.value &&
                (f((r = this._getOrReturnCtx(e, r)), {
                  code: p.too_small,
                  minimum: o.value,
                  type: "string",
                  inclusive: !0,
                  exact: !1,
                  message: o.message,
                }),
                n.dirty());
            else if ("max" === o.kind)
              e.data.length > o.value &&
                (f((r = this._getOrReturnCtx(e, r)), {
                  code: p.too_big,
                  maximum: o.value,
                  type: "string",
                  inclusive: !0,
                  exact: !1,
                  message: o.message,
                }),
                n.dirty());
            else if ("length" === o.kind) {
              let t = e.data.length > o.value,
                a = e.data.length < o.value;
              (t || a) &&
                ((r = this._getOrReturnCtx(e, r)),
                t
                  ? f(r, {
                      code: p.too_big,
                      maximum: o.value,
                      type: "string",
                      inclusive: !0,
                      exact: !0,
                      message: o.message,
                    })
                  : a &&
                    f(r, {
                      code: p.too_small,
                      minimum: o.value,
                      type: "string",
                      inclusive: !0,
                      exact: !0,
                      message: o.message,
                    }),
                n.dirty());
            } else if ("email" === o.kind)
              L.test(e.data) ||
                (f((r = this._getOrReturnCtx(e, r)), {
                  validation: "email",
                  code: p.invalid_string,
                  message: o.message,
                }),
                n.dirty());
            else if ("emoji" === o.kind)
              t ||
                (t = RegExp(
                  "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$",
                  "u"
                )),
                t.test(e.data) ||
                  (f((r = this._getOrReturnCtx(e, r)), {
                    validation: "emoji",
                    code: p.invalid_string,
                    message: o.message,
                  }),
                  n.dirty());
            else if ("uuid" === o.kind)
              F.test(e.data) ||
                (f((r = this._getOrReturnCtx(e, r)), {
                  validation: "uuid",
                  code: p.invalid_string,
                  message: o.message,
                }),
                n.dirty());
            else if ("cuid" === o.kind)
              k.test(e.data) ||
                (f((r = this._getOrReturnCtx(e, r)), {
                  validation: "cuid",
                  code: p.invalid_string,
                  message: o.message,
                }),
                n.dirty());
            else if ("cuid2" === o.kind)
              O.test(e.data) ||
                (f((r = this._getOrReturnCtx(e, r)), {
                  validation: "cuid2",
                  code: p.invalid_string,
                  message: o.message,
                }),
                n.dirty());
            else if ("ulid" === o.kind)
              I.test(e.data) ||
                (f((r = this._getOrReturnCtx(e, r)), {
                  validation: "ulid",
                  code: p.invalid_string,
                  message: o.message,
                }),
                n.dirty());
            else if ("url" === o.kind)
              try {
                new URL(e.data);
              } catch (t) {
                f((r = this._getOrReturnCtx(e, r)), {
                  validation: "url",
                  code: p.invalid_string,
                  message: o.message,
                }),
                  n.dirty();
              }
            else if ("regex" === o.kind)
              (o.regex.lastIndex = 0),
                o.regex.test(e.data) ||
                  (f((r = this._getOrReturnCtx(e, r)), {
                    validation: "regex",
                    code: p.invalid_string,
                    message: o.message,
                  }),
                  n.dirty());
            else if ("trim" === o.kind) e.data = e.data.trim();
            else if ("includes" === o.kind)
              e.data.includes(o.value, o.position) ||
                (f((r = this._getOrReturnCtx(e, r)), {
                  code: p.invalid_string,
                  validation: { includes: o.value, position: o.position },
                  message: o.message,
                }),
                n.dirty());
            else if ("toLowerCase" === o.kind) e.data = e.data.toLowerCase();
            else if ("toUpperCase" === o.kind) e.data = e.data.toUpperCase();
            else if ("startsWith" === o.kind)
              e.data.startsWith(o.value) ||
                (f((r = this._getOrReturnCtx(e, r)), {
                  code: p.invalid_string,
                  validation: { startsWith: o.value },
                  message: o.message,
                }),
                n.dirty());
            else if ("endsWith" === o.kind)
              e.data.endsWith(o.value) ||
                (f((r = this._getOrReturnCtx(e, r)), {
                  code: p.invalid_string,
                  validation: { endsWith: o.value },
                  message: o.message,
                }),
                n.dirty());
            else if ("datetime" === o.kind)
              Z(o).test(e.data) ||
                (f((r = this._getOrReturnCtx(e, r)), {
                  code: p.invalid_string,
                  validation: "datetime",
                  message: o.message,
                }),
                n.dirty());
            else if ("ip" === o.kind) {
              var s, i;
              (s = e.data),
                !(
                  (("v4" === (i = o.version) || !i) && j.test(s)) ||
                  (("v6" === i || !i) && U.test(s))
                ) &&
                  1 &&
                  (f((r = this._getOrReturnCtx(e, r)), {
                    validation: "ip",
                    code: p.invalid_string,
                    message: o.message,
                  }),
                  n.dirty());
            } else a.assertNever(o);
          return { status: n.value, value: e.data };
        }
        _regex(e, t, a) {
          return this.refinement((t) => e.test(t), {
            validation: t,
            code: p.invalid_string,
            ...n.errToObj(a),
          });
        }
        _addCheck(e) {
          return new M({ ...this._def, checks: [...this._def.checks, e] });
        }
        email(e) {
          return this._addCheck({ kind: "email", ...n.errToObj(e) });
        }
        url(e) {
          return this._addCheck({ kind: "url", ...n.errToObj(e) });
        }
        emoji(e) {
          return this._addCheck({ kind: "emoji", ...n.errToObj(e) });
        }
        uuid(e) {
          return this._addCheck({ kind: "uuid", ...n.errToObj(e) });
        }
        cuid(e) {
          return this._addCheck({ kind: "cuid", ...n.errToObj(e) });
        }
        cuid2(e) {
          return this._addCheck({ kind: "cuid2", ...n.errToObj(e) });
        }
        ulid(e) {
          return this._addCheck({ kind: "ulid", ...n.errToObj(e) });
        }
        ip(e) {
          return this._addCheck({ kind: "ip", ...n.errToObj(e) });
        }
        datetime(e) {
          var t;
          return "string" == typeof e
            ? this._addCheck({
                kind: "datetime",
                precision: null,
                offset: !1,
                message: e,
              })
            : this._addCheck({
                kind: "datetime",
                precision:
                  void 0 === (null == e ? void 0 : e.precision)
                    ? null
                    : null == e
                    ? void 0
                    : e.precision,
                offset: null != (t = null == e ? void 0 : e.offset) && t,
                ...n.errToObj(null == e ? void 0 : e.message),
              });
        }
        regex(e, t) {
          return this._addCheck({ kind: "regex", regex: e, ...n.errToObj(t) });
        }
        includes(e, t) {
          return this._addCheck({
            kind: "includes",
            value: e,
            position: null == t ? void 0 : t.position,
            ...n.errToObj(null == t ? void 0 : t.message),
          });
        }
        startsWith(e, t) {
          return this._addCheck({
            kind: "startsWith",
            value: e,
            ...n.errToObj(t),
          });
        }
        endsWith(e, t) {
          return this._addCheck({
            kind: "endsWith",
            value: e,
            ...n.errToObj(t),
          });
        }
        min(e, t) {
          return this._addCheck({ kind: "min", value: e, ...n.errToObj(t) });
        }
        max(e, t) {
          return this._addCheck({ kind: "max", value: e, ...n.errToObj(t) });
        }
        length(e, t) {
          return this._addCheck({ kind: "length", value: e, ...n.errToObj(t) });
        }
        nonempty(e) {
          return this.min(1, n.errToObj(e));
        }
        trim() {
          return new M({
            ...this._def,
            checks: [...this._def.checks, { kind: "trim" }],
          });
        }
        toLowerCase() {
          return new M({
            ...this._def,
            checks: [...this._def.checks, { kind: "toLowerCase" }],
          });
        }
        toUpperCase() {
          return new M({
            ...this._def,
            checks: [...this._def.checks, { kind: "toUpperCase" }],
          });
        }
        get isDatetime() {
          return !!this._def.checks.find((e) => "datetime" === e.kind);
        }
        get isEmail() {
          return !!this._def.checks.find((e) => "email" === e.kind);
        }
        get isURL() {
          return !!this._def.checks.find((e) => "url" === e.kind);
        }
        get isEmoji() {
          return !!this._def.checks.find((e) => "emoji" === e.kind);
        }
        get isUUID() {
          return !!this._def.checks.find((e) => "uuid" === e.kind);
        }
        get isCUID() {
          return !!this._def.checks.find((e) => "cuid" === e.kind);
        }
        get isCUID2() {
          return !!this._def.checks.find((e) => "cuid2" === e.kind);
        }
        get isULID() {
          return !!this._def.checks.find((e) => "ulid" === e.kind);
        }
        get isIP() {
          return !!this._def.checks.find((e) => "ip" === e.kind);
        }
        get minLength() {
          let e = null;
          for (let t of this._def.checks)
            "min" === t.kind && (null === e || t.value > e) && (e = t.value);
          return e;
        }
        get maxLength() {
          let e = null;
          for (let t of this._def.checks)
            "max" === t.kind && (null === e || t.value < e) && (e = t.value);
          return e;
        }
      }
      M.create = (e) => {
        var t;
        return new M({
          checks: [],
          typeName: s.ZodString,
          coerce: null != (t = null == e ? void 0 : e.coerce) && t,
          ...P(e),
        });
      };
      class D extends N {
        _parse(e) {
          let t;
          if (
            (this._def.coerce && (e.data = Number(e.data)),
            this._getType(e) !== c.number)
          ) {
            let t = this._getOrReturnCtx(e);
            return (
              f(t, {
                code: p.invalid_type,
                expected: c.number,
                received: t.parsedType,
              }),
              E
            );
          }
          let r = new v();
          for (let n of this._def.checks)
            "int" === n.kind
              ? a.isInteger(e.data) ||
                (f((t = this._getOrReturnCtx(e, t)), {
                  code: p.invalid_type,
                  expected: "integer",
                  received: "float",
                  message: n.message,
                }),
                r.dirty())
              : "min" === n.kind
              ? (n.inclusive ? e.data < n.value : e.data <= n.value) &&
                (f((t = this._getOrReturnCtx(e, t)), {
                  code: p.too_small,
                  minimum: n.value,
                  type: "number",
                  inclusive: n.inclusive,
                  exact: !1,
                  message: n.message,
                }),
                r.dirty())
              : "max" === n.kind
              ? (n.inclusive ? e.data > n.value : e.data >= n.value) &&
                (f((t = this._getOrReturnCtx(e, t)), {
                  code: p.too_big,
                  maximum: n.value,
                  type: "number",
                  inclusive: n.inclusive,
                  exact: !1,
                  message: n.message,
                }),
                r.dirty())
              : "multipleOf" === n.kind
              ? 0 !==
                  (function (e, t) {
                    let a = (e.toString().split(".")[1] || "").length,
                      r = (t.toString().split(".")[1] || "").length,
                      n = a > r ? a : r;
                    return (
                      (parseInt(e.toFixed(n).replace(".", "")) %
                        parseInt(t.toFixed(n).replace(".", ""))) /
                      Math.pow(10, n)
                    );
                  })(e.data, n.value) &&
                (f((t = this._getOrReturnCtx(e, t)), {
                  code: p.not_multiple_of,
                  multipleOf: n.value,
                  message: n.message,
                }),
                r.dirty())
              : "finite" === n.kind
              ? Number.isFinite(e.data) ||
                (f((t = this._getOrReturnCtx(e, t)), {
                  code: p.not_finite,
                  message: n.message,
                }),
                r.dirty())
              : a.assertNever(n);
          return { status: r.value, value: e.data };
        }
        gte(e, t) {
          return this.setLimit("min", e, !0, n.toString(t));
        }
        gt(e, t) {
          return this.setLimit("min", e, !1, n.toString(t));
        }
        lte(e, t) {
          return this.setLimit("max", e, !0, n.toString(t));
        }
        lt(e, t) {
          return this.setLimit("max", e, !1, n.toString(t));
        }
        setLimit(e, t, a, r) {
          return new D({
            ...this._def,
            checks: [
              ...this._def.checks,
              { kind: e, value: t, inclusive: a, message: n.toString(r) },
            ],
          });
        }
        _addCheck(e) {
          return new D({ ...this._def, checks: [...this._def.checks, e] });
        }
        int(e) {
          return this._addCheck({ kind: "int", message: n.toString(e) });
        }
        positive(e) {
          return this._addCheck({
            kind: "min",
            value: 0,
            inclusive: !1,
            message: n.toString(e),
          });
        }
        negative(e) {
          return this._addCheck({
            kind: "max",
            value: 0,
            inclusive: !1,
            message: n.toString(e),
          });
        }
        nonpositive(e) {
          return this._addCheck({
            kind: "max",
            value: 0,
            inclusive: !0,
            message: n.toString(e),
          });
        }
        nonnegative(e) {
          return this._addCheck({
            kind: "min",
            value: 0,
            inclusive: !0,
            message: n.toString(e),
          });
        }
        multipleOf(e, t) {
          return this._addCheck({
            kind: "multipleOf",
            value: e,
            message: n.toString(t),
          });
        }
        finite(e) {
          return this._addCheck({ kind: "finite", message: n.toString(e) });
        }
        safe(e) {
          return this._addCheck({
            kind: "min",
            inclusive: !0,
            value: Number.MIN_SAFE_INTEGER,
            message: n.toString(e),
          })._addCheck({
            kind: "max",
            inclusive: !0,
            value: Number.MAX_SAFE_INTEGER,
            message: n.toString(e),
          });
        }
        get minValue() {
          let e = null;
          for (let t of this._def.checks)
            "min" === t.kind && (null === e || t.value > e) && (e = t.value);
          return e;
        }
        get maxValue() {
          let e = null;
          for (let t of this._def.checks)
            "max" === t.kind && (null === e || t.value < e) && (e = t.value);
          return e;
        }
        get isInt() {
          return !!this._def.checks.find(
            (e) =>
              "int" === e.kind ||
              ("multipleOf" === e.kind && a.isInteger(e.value))
          );
        }
        get isFinite() {
          let e = null,
            t = null;
          for (let a of this._def.checks)
            if (
              "finite" === a.kind ||
              "int" === a.kind ||
              "multipleOf" === a.kind
            )
              return !0;
            else
              "min" === a.kind
                ? (null === t || a.value > t) && (t = a.value)
                : "max" === a.kind &&
                  (null === e || a.value < e) &&
                  (e = a.value);
          return Number.isFinite(t) && Number.isFinite(e);
        }
        constructor() {
          super(...arguments),
            (this.min = this.gte),
            (this.max = this.lte),
            (this.step = this.multipleOf);
        }
      }
      D.create = (e) =>
        new D({
          checks: [],
          typeName: s.ZodNumber,
          coerce: (null == e ? void 0 : e.coerce) || !1,
          ...P(e),
        });
      class W extends N {
        _parse(e) {
          let t;
          if (
            (this._def.coerce && (e.data = BigInt(e.data)),
            this._getType(e) !== c.bigint)
          ) {
            let t = this._getOrReturnCtx(e);
            return (
              f(t, {
                code: p.invalid_type,
                expected: c.bigint,
                received: t.parsedType,
              }),
              E
            );
          }
          let r = new v();
          for (let n of this._def.checks)
            "min" === n.kind
              ? (n.inclusive ? e.data < n.value : e.data <= n.value) &&
                (f((t = this._getOrReturnCtx(e, t)), {
                  code: p.too_small,
                  type: "bigint",
                  minimum: n.value,
                  inclusive: n.inclusive,
                  message: n.message,
                }),
                r.dirty())
              : "max" === n.kind
              ? (n.inclusive ? e.data > n.value : e.data >= n.value) &&
                (f((t = this._getOrReturnCtx(e, t)), {
                  code: p.too_big,
                  type: "bigint",
                  maximum: n.value,
                  inclusive: n.inclusive,
                  message: n.message,
                }),
                r.dirty())
              : "multipleOf" === n.kind
              ? e.data % n.value !== BigInt(0) &&
                (f((t = this._getOrReturnCtx(e, t)), {
                  code: p.not_multiple_of,
                  multipleOf: n.value,
                  message: n.message,
                }),
                r.dirty())
              : a.assertNever(n);
          return { status: r.value, value: e.data };
        }
        gte(e, t) {
          return this.setLimit("min", e, !0, n.toString(t));
        }
        gt(e, t) {
          return this.setLimit("min", e, !1, n.toString(t));
        }
        lte(e, t) {
          return this.setLimit("max", e, !0, n.toString(t));
        }
        lt(e, t) {
          return this.setLimit("max", e, !1, n.toString(t));
        }
        setLimit(e, t, a, r) {
          return new W({
            ...this._def,
            checks: [
              ...this._def.checks,
              { kind: e, value: t, inclusive: a, message: n.toString(r) },
            ],
          });
        }
        _addCheck(e) {
          return new W({ ...this._def, checks: [...this._def.checks, e] });
        }
        positive(e) {
          return this._addCheck({
            kind: "min",
            value: BigInt(0),
            inclusive: !1,
            message: n.toString(e),
          });
        }
        negative(e) {
          return this._addCheck({
            kind: "max",
            value: BigInt(0),
            inclusive: !1,
            message: n.toString(e),
          });
        }
        nonpositive(e) {
          return this._addCheck({
            kind: "max",
            value: BigInt(0),
            inclusive: !0,
            message: n.toString(e),
          });
        }
        nonnegative(e) {
          return this._addCheck({
            kind: "min",
            value: BigInt(0),
            inclusive: !0,
            message: n.toString(e),
          });
        }
        multipleOf(e, t) {
          return this._addCheck({
            kind: "multipleOf",
            value: e,
            message: n.toString(t),
          });
        }
        get minValue() {
          let e = null;
          for (let t of this._def.checks)
            "min" === t.kind && (null === e || t.value > e) && (e = t.value);
          return e;
        }
        get maxValue() {
          let e = null;
          for (let t of this._def.checks)
            "max" === t.kind && (null === e || t.value < e) && (e = t.value);
          return e;
        }
        constructor() {
          super(...arguments), (this.min = this.gte), (this.max = this.lte);
        }
      }
      W.create = (e) => {
        var t;
        return new W({
          checks: [],
          typeName: s.ZodBigInt,
          coerce: null != (t = null == e ? void 0 : e.coerce) && t,
          ...P(e),
        });
      };
      class B extends N {
        _parse(e) {
          if (
            (this._def.coerce && (e.data = !!e.data),
            this._getType(e) !== c.boolean)
          ) {
            let t = this._getOrReturnCtx(e);
            return (
              f(t, {
                code: p.invalid_type,
                expected: c.boolean,
                received: t.parsedType,
              }),
              E
            );
          }
          return b(e.data);
        }
      }
      B.create = (e) =>
        new B({
          typeName: s.ZodBoolean,
          coerce: (null == e ? void 0 : e.coerce) || !1,
          ...P(e),
        });
      class K extends N {
        _parse(e) {
          let t;
          if (
            (this._def.coerce && (e.data = new Date(e.data)),
            this._getType(e) !== c.date)
          ) {
            let t = this._getOrReturnCtx(e);
            return (
              f(t, {
                code: p.invalid_type,
                expected: c.date,
                received: t.parsedType,
              }),
              E
            );
          }
          if (isNaN(e.data.getTime()))
            return f(this._getOrReturnCtx(e), { code: p.invalid_date }), E;
          let r = new v();
          for (let n of this._def.checks)
            "min" === n.kind
              ? e.data.getTime() < n.value &&
                (f((t = this._getOrReturnCtx(e, t)), {
                  code: p.too_small,
                  message: n.message,
                  inclusive: !0,
                  exact: !1,
                  minimum: n.value,
                  type: "date",
                }),
                r.dirty())
              : "max" === n.kind
              ? e.data.getTime() > n.value &&
                (f((t = this._getOrReturnCtx(e, t)), {
                  code: p.too_big,
                  message: n.message,
                  inclusive: !0,
                  exact: !1,
                  maximum: n.value,
                  type: "date",
                }),
                r.dirty())
              : a.assertNever(n);
          return { status: r.value, value: new Date(e.data.getTime()) };
        }
        _addCheck(e) {
          return new K({ ...this._def, checks: [...this._def.checks, e] });
        }
        min(e, t) {
          return this._addCheck({
            kind: "min",
            value: e.getTime(),
            message: n.toString(t),
          });
        }
        max(e, t) {
          return this._addCheck({
            kind: "max",
            value: e.getTime(),
            message: n.toString(t),
          });
        }
        get minDate() {
          let e = null;
          for (let t of this._def.checks)
            "min" === t.kind && (null === e || t.value > e) && (e = t.value);
          return null != e ? new Date(e) : null;
        }
        get maxDate() {
          let e = null;
          for (let t of this._def.checks)
            "max" === t.kind && (null === e || t.value < e) && (e = t.value);
          return null != e ? new Date(e) : null;
        }
      }
      K.create = (e) =>
        new K({
          checks: [],
          coerce: (null == e ? void 0 : e.coerce) || !1,
          typeName: s.ZodDate,
          ...P(e),
        });
      class V extends N {
        _parse(e) {
          if (this._getType(e) !== c.symbol) {
            let t = this._getOrReturnCtx(e);
            return (
              f(t, {
                code: p.invalid_type,
                expected: c.symbol,
                received: t.parsedType,
              }),
              E
            );
          }
          return b(e.data);
        }
      }
      V.create = (e) => new V({ typeName: s.ZodSymbol, ...P(e) });
      class Y extends N {
        _parse(e) {
          if (this._getType(e) !== c.undefined) {
            let t = this._getOrReturnCtx(e);
            return (
              f(t, {
                code: p.invalid_type,
                expected: c.undefined,
                received: t.parsedType,
              }),
              E
            );
          }
          return b(e.data);
        }
      }
      Y.create = (e) => new Y({ typeName: s.ZodUndefined, ...P(e) });
      class H extends N {
        _parse(e) {
          if (this._getType(e) !== c.null) {
            let t = this._getOrReturnCtx(e);
            return (
              f(t, {
                code: p.invalid_type,
                expected: c.null,
                received: t.parsedType,
              }),
              E
            );
          }
          return b(e.data);
        }
      }
      H.create = (e) => new H({ typeName: s.ZodNull, ...P(e) });
      class z extends N {
        _parse(e) {
          return b(e.data);
        }
        constructor() {
          super(...arguments), (this._any = !0);
        }
      }
      z.create = (e) => new z({ typeName: s.ZodAny, ...P(e) });
      class G extends N {
        _parse(e) {
          return b(e.data);
        }
        constructor() {
          super(...arguments), (this._unknown = !0);
        }
      }
      G.create = (e) => new G({ typeName: s.ZodUnknown, ...P(e) });
      class q extends N {
        _parse(e) {
          let t = this._getOrReturnCtx(e);
          return (
            f(t, {
              code: p.invalid_type,
              expected: c.never,
              received: t.parsedType,
            }),
            E
          );
        }
      }
      q.create = (e) => new q({ typeName: s.ZodNever, ...P(e) });
      class $ extends N {
        _parse(e) {
          if (this._getType(e) !== c.undefined) {
            let t = this._getOrReturnCtx(e);
            return (
              f(t, {
                code: p.invalid_type,
                expected: c.void,
                received: t.parsedType,
              }),
              E
            );
          }
          return b(e.data);
        }
      }
      $.create = (e) => new $({ typeName: s.ZodVoid, ...P(e) });
      class J extends N {
        _parse(e) {
          let { ctx: t, status: a } = this._processInputParams(e),
            r = this._def;
          if (t.parsedType !== c.array)
            return (
              f(t, {
                code: p.invalid_type,
                expected: c.array,
                received: t.parsedType,
              }),
              E
            );
          if (null !== r.exactLength) {
            let e = t.data.length > r.exactLength.value,
              n = t.data.length < r.exactLength.value;
            (e || n) &&
              (f(t, {
                code: e ? p.too_big : p.too_small,
                minimum: n ? r.exactLength.value : void 0,
                maximum: e ? r.exactLength.value : void 0,
                type: "array",
                inclusive: !0,
                exact: !0,
                message: r.exactLength.message,
              }),
              a.dirty());
          }
          if (
            (null !== r.minLength &&
              t.data.length < r.minLength.value &&
              (f(t, {
                code: p.too_small,
                minimum: r.minLength.value,
                type: "array",
                inclusive: !0,
                exact: !1,
                message: r.minLength.message,
              }),
              a.dirty()),
            null !== r.maxLength &&
              t.data.length > r.maxLength.value &&
              (f(t, {
                code: p.too_big,
                maximum: r.maxLength.value,
                type: "array",
                inclusive: !0,
                exact: !1,
                message: r.maxLength.message,
              }),
              a.dirty()),
            t.common.async)
          )
            return Promise.all(
              [...t.data].map((e, a) =>
                r.type._parseAsync(new S(t, e, t.path, a))
              )
            ).then((e) => v.mergeArray(a, e));
          let n = [...t.data].map((e, a) =>
            r.type._parseSync(new S(t, e, t.path, a))
          );
          return v.mergeArray(a, n);
        }
        get element() {
          return this._def.type;
        }
        min(e, t) {
          return new J({
            ...this._def,
            minLength: { value: e, message: n.toString(t) },
          });
        }
        max(e, t) {
          return new J({
            ...this._def,
            maxLength: { value: e, message: n.toString(t) },
          });
        }
        length(e, t) {
          return new J({
            ...this._def,
            exactLength: { value: e, message: n.toString(t) },
          });
        }
        nonempty(e) {
          return this.min(1, e);
        }
      }
      J.create = (e, t) =>
        new J({
          type: e,
          minLength: null,
          maxLength: null,
          exactLength: null,
          typeName: s.ZodArray,
          ...P(t),
        });
      class Q extends N {
        _getCached() {
          if (null !== this._cached) return this._cached;
          let e = this._def.shape(),
            t = a.objectKeys(e);
          return (this._cached = { shape: e, keys: t });
        }
        _parse(e) {
          if (this._getType(e) !== c.object) {
            let t = this._getOrReturnCtx(e);
            return (
              f(t, {
                code: p.invalid_type,
                expected: c.object,
                received: t.parsedType,
              }),
              E
            );
          }
          let { status: t, ctx: a } = this._processInputParams(e),
            { shape: r, keys: n } = this._getCached(),
            s = [];
          if (
            !(
              this._def.catchall instanceof q &&
              "strip" === this._def.unknownKeys
            )
          )
            for (let e in a.data) n.includes(e) || s.push(e);
          let i = [];
          for (let e of n) {
            let t = r[e],
              n = a.data[e];
            i.push({
              key: { status: "valid", value: e },
              value: t._parse(new S(a, n, a.path, e)),
              alwaysSet: e in a.data,
            });
          }
          if (this._def.catchall instanceof q) {
            let e = this._def.unknownKeys;
            if ("passthrough" === e)
              for (let e of s)
                i.push({
                  key: { status: "valid", value: e },
                  value: { status: "valid", value: a.data[e] },
                });
            else if ("strict" === e)
              s.length > 0 &&
                (f(a, { code: p.unrecognized_keys, keys: s }), t.dirty());
            else if ("strip" === e);
            else
              throw Error(
                "Internal ZodObject error: invalid unknownKeys value."
              );
          } else {
            let e = this._def.catchall;
            for (let t of s) {
              let r = a.data[t];
              i.push({
                key: { status: "valid", value: t },
                value: e._parse(new S(a, r, a.path, t)),
                alwaysSet: t in a.data,
              });
            }
          }
          return a.common.async
            ? Promise.resolve()
                .then(async () => {
                  let e = [];
                  for (let t of i) {
                    let a = await t.key;
                    e.push({
                      key: a,
                      value: await t.value,
                      alwaysSet: t.alwaysSet,
                    });
                  }
                  return e;
                })
                .then((e) => v.mergeObjectSync(t, e))
            : v.mergeObjectSync(t, i);
        }
        get shape() {
          return this._def.shape();
        }
        strict(e) {
          return (
            n.errToObj,
            new Q({
              ...this._def,
              unknownKeys: "strict",
              ...(void 0 !== e
                ? {
                    errorMap: (t, a) => {
                      var r, s, i, o;
                      let l =
                        null !=
                        (i =
                          null == (s = (r = this._def).errorMap)
                            ? void 0
                            : s.call(r, t, a).message)
                          ? i
                          : a.defaultError;
                      return "unrecognized_keys" === t.code
                        ? {
                            message:
                              null != (o = n.errToObj(e).message) ? o : l,
                          }
                        : { message: l };
                    },
                  }
                : {}),
            })
          );
        }
        strip() {
          return new Q({ ...this._def, unknownKeys: "strip" });
        }
        passthrough() {
          return new Q({ ...this._def, unknownKeys: "passthrough" });
        }
        extend(e) {
          return new Q({
            ...this._def,
            shape: () => ({ ...this._def.shape(), ...e }),
          });
        }
        merge(e) {
          return new Q({
            unknownKeys: e._def.unknownKeys,
            catchall: e._def.catchall,
            shape: () => ({ ...this._def.shape(), ...e._def.shape() }),
            typeName: s.ZodObject,
          });
        }
        setKey(e, t) {
          return this.augment({ [e]: t });
        }
        catchall(e) {
          return new Q({ ...this._def, catchall: e });
        }
        pick(e) {
          let t = {};
          return (
            a.objectKeys(e).forEach((a) => {
              e[a] && this.shape[a] && (t[a] = this.shape[a]);
            }),
            new Q({ ...this._def, shape: () => t })
          );
        }
        omit(e) {
          let t = {};
          return (
            a.objectKeys(this.shape).forEach((a) => {
              e[a] || (t[a] = this.shape[a]);
            }),
            new Q({ ...this._def, shape: () => t })
          );
        }
        deepPartial() {
          return (function e(t) {
            if (t instanceof Q) {
              let a = {};
              for (let r in t.shape) {
                let n = t.shape[r];
                a[r] = e_.create(e(n));
              }
              return new Q({ ...t._def, shape: () => a });
            }
            if (t instanceof J) return new J({ ...t._def, type: e(t.element) });
            if (t instanceof e_) return e_.create(e(t.unwrap()));
            if (t instanceof eg) return eg.create(e(t.unwrap()));
            if (t instanceof er) return er.create(t.items.map((t) => e(t)));
            else return t;
          })(this);
        }
        partial(e) {
          let t = {};
          return (
            a.objectKeys(this.shape).forEach((a) => {
              let r = this.shape[a];
              e && !e[a] ? (t[a] = r) : (t[a] = r.optional());
            }),
            new Q({ ...this._def, shape: () => t })
          );
        }
        required(e) {
          let t = {};
          return (
            a.objectKeys(this.shape).forEach((a) => {
              if (e && !e[a]) t[a] = this.shape[a];
              else {
                let e = this.shape[a];
                for (; e instanceof e_; ) e = e._def.innerType;
                t[a] = e;
              }
            }),
            new Q({ ...this._def, shape: () => t })
          );
        }
        keyof() {
          return ec(a.objectKeys(this.shape));
        }
        constructor() {
          super(...arguments),
            (this._cached = null),
            (this.nonstrict = this.passthrough),
            (this.augment = this.extend);
        }
      }
      (Q.create = (e, t) =>
        new Q({
          shape: () => e,
          unknownKeys: "strip",
          catchall: q.create(),
          typeName: s.ZodObject,
          ...P(t),
        })),
        (Q.strictCreate = (e, t) =>
          new Q({
            shape: () => e,
            unknownKeys: "strict",
            catchall: q.create(),
            typeName: s.ZodObject,
            ...P(t),
          })),
        (Q.lazycreate = (e, t) =>
          new Q({
            shape: e,
            unknownKeys: "strip",
            catchall: q.create(),
            typeName: s.ZodObject,
            ...P(t),
          }));
      class X extends N {
        _parse(e) {
          let { ctx: t } = this._processInputParams(e),
            a = this._def.options;
          if (t.common.async)
            return Promise.all(
              a.map(async (e) => {
                let a = {
                  ...t,
                  common: { ...t.common, issues: [] },
                  parent: null,
                };
                return {
                  result: await e._parseAsync({
                    data: t.data,
                    path: t.path,
                    parent: a,
                  }),
                  ctx: a,
                };
              })
            ).then(function (e) {
              for (let t of e) if ("valid" === t.result.status) return t.result;
              for (let a of e)
                if ("dirty" === a.result.status)
                  return t.common.issues.push(...a.ctx.common.issues), a.result;
              let a = e.map((e) => new m(e.ctx.common.issues));
              return f(t, { code: p.invalid_union, unionErrors: a }), E;
            });
          {
            let e,
              r = [];
            for (let n of a) {
              let a = {
                  ...t,
                  common: { ...t.common, issues: [] },
                  parent: null,
                },
                s = n._parseSync({ data: t.data, path: t.path, parent: a });
              if ("valid" === s.status) return s;
              "dirty" !== s.status || e || (e = { result: s, ctx: a }),
                a.common.issues.length && r.push(a.common.issues);
            }
            if (e)
              return t.common.issues.push(...e.ctx.common.issues), e.result;
            let n = r.map((e) => new m(e));
            return f(t, { code: p.invalid_union, unionErrors: n }), E;
          }
        }
        get options() {
          return this._def.options;
        }
      }
      X.create = (e, t) => new X({ options: e, typeName: s.ZodUnion, ...P(t) });
      let ee = (e) => {
        if (e instanceof el) return ee(e.schema);
        if (e instanceof eh) return ee(e.innerType());
        if (e instanceof ed) return [e.value];
        if (e instanceof eu) return e.options;
        if (e instanceof ep) return Object.keys(e.enum);
        else if (e instanceof ey) return ee(e._def.innerType);
        else if (e instanceof Y) return [void 0];
        else if (e instanceof H) return [null];
        else return null;
      };
      class et extends N {
        _parse(e) {
          let { ctx: t } = this._processInputParams(e);
          if (t.parsedType !== c.object)
            return (
              f(t, {
                code: p.invalid_type,
                expected: c.object,
                received: t.parsedType,
              }),
              E
            );
          let a = this.discriminator,
            r = t.data[a],
            n = this.optionsMap.get(r);
          return n
            ? t.common.async
              ? n._parseAsync({ data: t.data, path: t.path, parent: t })
              : n._parseSync({ data: t.data, path: t.path, parent: t })
            : (f(t, {
                code: p.invalid_union_discriminator,
                options: Array.from(this.optionsMap.keys()),
                path: [a],
              }),
              E);
        }
        get discriminator() {
          return this._def.discriminator;
        }
        get options() {
          return this._def.options;
        }
        get optionsMap() {
          return this._def.optionsMap;
        }
        static create(e, t, a) {
          let r = new Map();
          for (let a of t) {
            let t = ee(a.shape[e]);
            if (!t)
              throw Error(
                "A discriminator value for key `".concat(
                  e,
                  "` could not be extracted from all schema options"
                )
              );
            for (let n of t) {
              if (r.has(n))
                throw Error(
                  "Discriminator property "
                    .concat(String(e), " has duplicate value ")
                    .concat(String(n))
                );
              r.set(n, a);
            }
          }
          return new et({
            typeName: s.ZodDiscriminatedUnion,
            discriminator: e,
            options: t,
            optionsMap: r,
            ...P(a),
          });
        }
      }
      class ea extends N {
        _parse(e) {
          let { status: t, ctx: r } = this._processInputParams(e),
            n = (e, n) => {
              if (R(e) || R(n)) return E;
              let s = (function e(t, r) {
                let n = u(t),
                  s = u(r);
                if (t === r) return { valid: !0, data: t };
                if (n === c.object && s === c.object) {
                  let n = a.objectKeys(r),
                    s = a.objectKeys(t).filter((e) => -1 !== n.indexOf(e)),
                    i = { ...t, ...r };
                  for (let a of s) {
                    let n = e(t[a], r[a]);
                    if (!n.valid) return { valid: !1 };
                    i[a] = n.data;
                  }
                  return { valid: !0, data: i };
                }
                if (n === c.array && s === c.array) {
                  if (t.length !== r.length) return { valid: !1 };
                  let a = [];
                  for (let n = 0; n < t.length; n++) {
                    let s = e(t[n], r[n]);
                    if (!s.valid) return { valid: !1 };
                    a.push(s.data);
                  }
                  return { valid: !0, data: a };
                }
                if (n === c.date && s === c.date && +t == +r)
                  return { valid: !0, data: t };
                return { valid: !1 };
              })(e.value, n.value);
              return s.valid
                ? ((A(e) || A(n)) && t.dirty(),
                  { status: t.value, value: s.data })
                : (f(r, { code: p.invalid_intersection_types }), E);
            };
          return r.common.async
            ? Promise.all([
                this._def.left._parseAsync({
                  data: r.data,
                  path: r.path,
                  parent: r,
                }),
                this._def.right._parseAsync({
                  data: r.data,
                  path: r.path,
                  parent: r,
                }),
              ]).then((e) => {
                let [t, a] = e;
                return n(t, a);
              })
            : n(
                this._def.left._parseSync({
                  data: r.data,
                  path: r.path,
                  parent: r,
                }),
                this._def.right._parseSync({
                  data: r.data,
                  path: r.path,
                  parent: r,
                })
              );
        }
      }
      ea.create = (e, t, a) =>
        new ea({ left: e, right: t, typeName: s.ZodIntersection, ...P(a) });
      class er extends N {
        _parse(e) {
          let { status: t, ctx: a } = this._processInputParams(e);
          if (a.parsedType !== c.array)
            return (
              f(a, {
                code: p.invalid_type,
                expected: c.array,
                received: a.parsedType,
              }),
              E
            );
          if (a.data.length < this._def.items.length)
            return (
              f(a, {
                code: p.too_small,
                minimum: this._def.items.length,
                inclusive: !0,
                exact: !1,
                type: "array",
              }),
              E
            );
          !this._def.rest &&
            a.data.length > this._def.items.length &&
            (f(a, {
              code: p.too_big,
              maximum: this._def.items.length,
              inclusive: !0,
              exact: !1,
              type: "array",
            }),
            t.dirty());
          let r = [...a.data]
            .map((e, t) => {
              let r = this._def.items[t] || this._def.rest;
              return r ? r._parse(new S(a, e, a.path, t)) : null;
            })
            .filter((e) => !!e);
          return a.common.async
            ? Promise.all(r).then((e) => v.mergeArray(t, e))
            : v.mergeArray(t, r);
        }
        get items() {
          return this._def.items;
        }
        rest(e) {
          return new er({ ...this._def, rest: e });
        }
      }
      er.create = (e, t) => {
        if (!Array.isArray(e))
          throw Error("You must pass an array of schemas to z.tuple([ ... ])");
        return new er({ items: e, typeName: s.ZodTuple, rest: null, ...P(t) });
      };
      class en extends N {
        get keySchema() {
          return this._def.keyType;
        }
        get valueSchema() {
          return this._def.valueType;
        }
        _parse(e) {
          let { status: t, ctx: a } = this._processInputParams(e);
          if (a.parsedType !== c.object)
            return (
              f(a, {
                code: p.invalid_type,
                expected: c.object,
                received: a.parsedType,
              }),
              E
            );
          let r = [],
            n = this._def.keyType,
            s = this._def.valueType;
          for (let e in a.data)
            r.push({
              key: n._parse(new S(a, e, a.path, e)),
              value: s._parse(new S(a, a.data[e], a.path, e)),
            });
          return a.common.async
            ? v.mergeObjectAsync(t, r)
            : v.mergeObjectSync(t, r);
        }
        get element() {
          return this._def.valueType;
        }
        static create(e, t, a) {
          return new en(
            t instanceof N
              ? { keyType: e, valueType: t, typeName: s.ZodRecord, ...P(a) }
              : {
                  keyType: M.create(),
                  valueType: e,
                  typeName: s.ZodRecord,
                  ...P(t),
                }
          );
        }
      }
      class es extends N {
        get keySchema() {
          return this._def.keyType;
        }
        get valueSchema() {
          return this._def.valueType;
        }
        _parse(e) {
          let { status: t, ctx: a } = this._processInputParams(e);
          if (a.parsedType !== c.map)
            return (
              f(a, {
                code: p.invalid_type,
                expected: c.map,
                received: a.parsedType,
              }),
              E
            );
          let r = this._def.keyType,
            n = this._def.valueType,
            s = [...a.data.entries()].map((e, t) => {
              let [s, i] = e;
              return {
                key: r._parse(new S(a, s, a.path, [t, "key"])),
                value: n._parse(new S(a, i, a.path, [t, "value"])),
              };
            });
          if (a.common.async) {
            let e = new Map();
            return Promise.resolve().then(async () => {
              for (let a of s) {
                let r = await a.key,
                  n = await a.value;
                if ("aborted" === r.status || "aborted" === n.status) return E;
                ("dirty" === r.status || "dirty" === n.status) && t.dirty(),
                  e.set(r.value, n.value);
              }
              return { status: t.value, value: e };
            });
          }
          {
            let e = new Map();
            for (let a of s) {
              let r = a.key,
                n = a.value;
              if ("aborted" === r.status || "aborted" === n.status) return E;
              ("dirty" === r.status || "dirty" === n.status) && t.dirty(),
                e.set(r.value, n.value);
            }
            return { status: t.value, value: e };
          }
        }
      }
      es.create = (e, t, a) =>
        new es({ valueType: t, keyType: e, typeName: s.ZodMap, ...P(a) });
      class ei extends N {
        _parse(e) {
          let { status: t, ctx: a } = this._processInputParams(e);
          if (a.parsedType !== c.set)
            return (
              f(a, {
                code: p.invalid_type,
                expected: c.set,
                received: a.parsedType,
              }),
              E
            );
          let r = this._def;
          null !== r.minSize &&
            a.data.size < r.minSize.value &&
            (f(a, {
              code: p.too_small,
              minimum: r.minSize.value,
              type: "set",
              inclusive: !0,
              exact: !1,
              message: r.minSize.message,
            }),
            t.dirty()),
            null !== r.maxSize &&
              a.data.size > r.maxSize.value &&
              (f(a, {
                code: p.too_big,
                maximum: r.maxSize.value,
                type: "set",
                inclusive: !0,
                exact: !1,
                message: r.maxSize.message,
              }),
              t.dirty());
          let n = this._def.valueType;
          function s(e) {
            let a = new Set();
            for (let r of e) {
              if ("aborted" === r.status) return E;
              "dirty" === r.status && t.dirty(), a.add(r.value);
            }
            return { status: t.value, value: a };
          }
          let i = [...a.data.values()].map((e, t) =>
            n._parse(new S(a, e, a.path, t))
          );
          return a.common.async ? Promise.all(i).then((e) => s(e)) : s(i);
        }
        min(e, t) {
          return new ei({
            ...this._def,
            minSize: { value: e, message: n.toString(t) },
          });
        }
        max(e, t) {
          return new ei({
            ...this._def,
            maxSize: { value: e, message: n.toString(t) },
          });
        }
        size(e, t) {
          return this.min(e, t).max(e, t);
        }
        nonempty(e) {
          return this.min(1, e);
        }
      }
      ei.create = (e, t) =>
        new ei({
          valueType: e,
          minSize: null,
          maxSize: null,
          typeName: s.ZodSet,
          ...P(t),
        });
      class eo extends N {
        _parse(e) {
          let { ctx: t } = this._processInputParams(e);
          if (t.parsedType !== c.function)
            return (
              f(t, {
                code: p.invalid_type,
                expected: c.function,
                received: t.parsedType,
              }),
              E
            );
          function a(e, a) {
            return y({
              data: e,
              path: t.path,
              errorMaps: [
                t.common.contextualErrorMap,
                t.schemaErrorMap,
                g(),
                h,
              ].filter((e) => !!e),
              issueData: { code: p.invalid_arguments, argumentsError: a },
            });
          }
          function r(e, a) {
            return y({
              data: e,
              path: t.path,
              errorMaps: [
                t.common.contextualErrorMap,
                t.schemaErrorMap,
                g(),
                h,
              ].filter((e) => !!e),
              issueData: { code: p.invalid_return_type, returnTypeError: a },
            });
          }
          let n = { errorMap: t.common.contextualErrorMap },
            s = t.data;
          if (this._def.returns instanceof em) {
            let e = this;
            return b(async function () {
              for (var t = arguments.length, i = Array(t), o = 0; o < t; o++)
                i[o] = arguments[o];
              let l = new m([]),
                d = await e._def.args.parseAsync(i, n).catch((e) => {
                  throw (l.addIssue(a(i, e)), l);
                }),
                c = await Reflect.apply(s, this, d);
              return await e._def.returns._def.type
                .parseAsync(c, n)
                .catch((e) => {
                  throw (l.addIssue(r(c, e)), l);
                });
            });
          }
          {
            let e = this;
            return b(function () {
              for (var t = arguments.length, i = Array(t), o = 0; o < t; o++)
                i[o] = arguments[o];
              let l = e._def.args.safeParse(i, n);
              if (!l.success) throw new m([a(i, l.error)]);
              let d = Reflect.apply(s, this, l.data),
                c = e._def.returns.safeParse(d, n);
              if (!c.success) throw new m([r(d, c.error)]);
              return c.data;
            });
          }
        }
        parameters() {
          return this._def.args;
        }
        returnType() {
          return this._def.returns;
        }
        args() {
          for (var e = arguments.length, t = Array(e), a = 0; a < e; a++)
            t[a] = arguments[a];
          return new eo({ ...this._def, args: er.create(t).rest(G.create()) });
        }
        returns(e) {
          return new eo({ ...this._def, returns: e });
        }
        implement(e) {
          return this.parse(e);
        }
        strictImplement(e) {
          return this.parse(e);
        }
        static create(e, t, a) {
          return new eo({
            args: e || er.create([]).rest(G.create()),
            returns: t || G.create(),
            typeName: s.ZodFunction,
            ...P(a),
          });
        }
        constructor() {
          super(...arguments), (this.validate = this.implement);
        }
      }
      class el extends N {
        get schema() {
          return this._def.getter();
        }
        _parse(e) {
          let { ctx: t } = this._processInputParams(e);
          return this._def
            .getter()
            ._parse({ data: t.data, path: t.path, parent: t });
        }
      }
      el.create = (e, t) => new el({ getter: e, typeName: s.ZodLazy, ...P(t) });
      class ed extends N {
        _parse(e) {
          if (e.data !== this._def.value) {
            let t = this._getOrReturnCtx(e);
            return (
              f(t, {
                received: t.data,
                code: p.invalid_literal,
                expected: this._def.value,
              }),
              E
            );
          }
          return { status: "valid", value: e.data };
        }
        get value() {
          return this._def.value;
        }
      }
      function ec(e, t) {
        return new eu({ values: e, typeName: s.ZodEnum, ...P(t) });
      }
      ed.create = (e, t) =>
        new ed({ value: e, typeName: s.ZodLiteral, ...P(t) });
      class eu extends N {
        _parse(e) {
          if ("string" != typeof e.data) {
            let t = this._getOrReturnCtx(e),
              r = this._def.values;
            return (
              f(t, {
                expected: a.joinValues(r),
                received: t.parsedType,
                code: p.invalid_type,
              }),
              E
            );
          }
          if (-1 === this._def.values.indexOf(e.data)) {
            let t = this._getOrReturnCtx(e),
              a = this._def.values;
            return (
              f(t, {
                received: t.data,
                code: p.invalid_enum_value,
                options: a,
              }),
              E
            );
          }
          return b(e.data);
        }
        get options() {
          return this._def.values;
        }
        get enum() {
          let e = {};
          for (let t of this._def.values) e[t] = t;
          return e;
        }
        get Values() {
          let e = {};
          for (let t of this._def.values) e[t] = t;
          return e;
        }
        get Enum() {
          let e = {};
          for (let t of this._def.values) e[t] = t;
          return e;
        }
        extract(e) {
          return eu.create(e);
        }
        exclude(e) {
          return eu.create(this.options.filter((t) => !e.includes(t)));
        }
      }
      eu.create = ec;
      class ep extends N {
        _parse(e) {
          let t = a.getValidEnumValues(this._def.values),
            r = this._getOrReturnCtx(e);
          if (r.parsedType !== c.string && r.parsedType !== c.number) {
            let e = a.objectValues(t);
            return (
              f(r, {
                expected: a.joinValues(e),
                received: r.parsedType,
                code: p.invalid_type,
              }),
              E
            );
          }
          if (-1 === t.indexOf(e.data)) {
            let e = a.objectValues(t);
            return (
              f(r, {
                received: r.data,
                code: p.invalid_enum_value,
                options: e,
              }),
              E
            );
          }
          return b(e.data);
        }
        get enum() {
          return this._def.values;
        }
      }
      ep.create = (e, t) =>
        new ep({ values: e, typeName: s.ZodNativeEnum, ...P(t) });
      class em extends N {
        unwrap() {
          return this._def.type;
        }
        _parse(e) {
          let { ctx: t } = this._processInputParams(e);
          return t.parsedType !== c.promise && !1 === t.common.async
            ? (f(t, {
                code: p.invalid_type,
                expected: c.promise,
                received: t.parsedType,
              }),
              E)
            : b(
                (t.parsedType === c.promise
                  ? t.data
                  : Promise.resolve(t.data)
                ).then((e) =>
                  this._def.type.parseAsync(e, {
                    path: t.path,
                    errorMap: t.common.contextualErrorMap,
                  })
                )
              );
        }
      }
      em.create = (e, t) =>
        new em({ type: e, typeName: s.ZodPromise, ...P(t) });
      class eh extends N {
        innerType() {
          return this._def.schema;
        }
        sourceType() {
          return this._def.schema._def.typeName === s.ZodEffects
            ? this._def.schema.sourceType()
            : this._def.schema;
        }
        _parse(e) {
          let { status: t, ctx: r } = this._processInputParams(e),
            n = this._def.effect || null,
            s = {
              addIssue: (e) => {
                f(r, e), e.fatal ? t.abort() : t.dirty();
              },
              get path() {
                return r.path;
              },
            };
          if (((s.addIssue = s.addIssue.bind(s)), "preprocess" === n.type)) {
            let e = n.transform(r.data, s);
            return r.common.issues.length
              ? { status: "dirty", value: r.data }
              : r.common.async
              ? Promise.resolve(e).then((e) =>
                  this._def.schema._parseAsync({
                    data: e,
                    path: r.path,
                    parent: r,
                  })
                )
              : this._def.schema._parseSync({
                  data: e,
                  path: r.path,
                  parent: r,
                });
          }
          if ("refinement" === n.type) {
            let e = (e) => {
              let t = n.refinement(e, s);
              if (r.common.async) return Promise.resolve(t);
              if (t instanceof Promise)
                throw Error(
                  "Async refinement encountered during synchronous parse operation. Use .parseAsync instead."
                );
              return e;
            };
            if (!1 !== r.common.async)
              return this._def.schema
                ._parseAsync({ data: r.data, path: r.path, parent: r })
                .then((a) =>
                  "aborted" === a.status
                    ? E
                    : ("dirty" === a.status && t.dirty(),
                      e(a.value).then(() => ({
                        status: t.value,
                        value: a.value,
                      })))
                );
            {
              let a = this._def.schema._parseSync({
                data: r.data,
                path: r.path,
                parent: r,
              });
              return "aborted" === a.status
                ? E
                : ("dirty" === a.status && t.dirty(),
                  e(a.value),
                  { status: t.value, value: a.value });
            }
          }
          if ("transform" === n.type)
            if (!1 !== r.common.async)
              return this._def.schema
                ._parseAsync({ data: r.data, path: r.path, parent: r })
                .then((e) =>
                  T(e)
                    ? Promise.resolve(n.transform(e.value, s)).then((e) => ({
                        status: t.value,
                        value: e,
                      }))
                    : e
                );
            else {
              let e = this._def.schema._parseSync({
                data: r.data,
                path: r.path,
                parent: r,
              });
              if (!T(e)) return e;
              let a = n.transform(e.value, s);
              if (a instanceof Promise)
                throw Error(
                  "Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead."
                );
              return { status: t.value, value: a };
            }
          a.assertNever(n);
        }
      }
      (eh.create = (e, t, a) =>
        new eh({ schema: e, typeName: s.ZodEffects, effect: t, ...P(a) })),
        (eh.createWithPreprocess = (e, t, a) =>
          new eh({
            schema: t,
            effect: { type: "preprocess", transform: e },
            typeName: s.ZodEffects,
            ...P(a),
          }));
      class e_ extends N {
        _parse(e) {
          return this._getType(e) === c.undefined
            ? b(void 0)
            : this._def.innerType._parse(e);
        }
        unwrap() {
          return this._def.innerType;
        }
      }
      e_.create = (e, t) =>
        new e_({ innerType: e, typeName: s.ZodOptional, ...P(t) });
      class eg extends N {
        _parse(e) {
          return this._getType(e) === c.null
            ? b(null)
            : this._def.innerType._parse(e);
        }
        unwrap() {
          return this._def.innerType;
        }
      }
      eg.create = (e, t) =>
        new eg({ innerType: e, typeName: s.ZodNullable, ...P(t) });
      class ey extends N {
        _parse(e) {
          let { ctx: t } = this._processInputParams(e),
            a = t.data;
          return (
            t.parsedType === c.undefined && (a = this._def.defaultValue()),
            this._def.innerType._parse({ data: a, path: t.path, parent: t })
          );
        }
        removeDefault() {
          return this._def.innerType;
        }
      }
      ey.create = (e, t) =>
        new ey({
          innerType: e,
          typeName: s.ZodDefault,
          defaultValue:
            "function" == typeof t.default ? t.default : () => t.default,
          ...P(t),
        });
      class ef extends N {
        _parse(e) {
          let { ctx: t } = this._processInputParams(e),
            a = { ...t, common: { ...t.common, issues: [] } },
            r = this._def.innerType._parse({
              data: a.data,
              path: a.path,
              parent: { ...a },
            });
          return w(r)
            ? r.then((e) => ({
                status: "valid",
                value:
                  "valid" === e.status
                    ? e.value
                    : this._def.catchValue({
                        get error() {
                          return new m(a.common.issues);
                        },
                        input: a.data,
                      }),
              }))
            : {
                status: "valid",
                value:
                  "valid" === r.status
                    ? r.value
                    : this._def.catchValue({
                        get error() {
                          return new m(a.common.issues);
                        },
                        input: a.data,
                      }),
              };
        }
        removeCatch() {
          return this._def.innerType;
        }
      }
      ef.create = (e, t) =>
        new ef({
          innerType: e,
          typeName: s.ZodCatch,
          catchValue: "function" == typeof t.catch ? t.catch : () => t.catch,
          ...P(t),
        });
      class ev extends N {
        _parse(e) {
          if (this._getType(e) !== c.nan) {
            let t = this._getOrReturnCtx(e);
            return (
              f(t, {
                code: p.invalid_type,
                expected: c.nan,
                received: t.parsedType,
              }),
              E
            );
          }
          return { status: "valid", value: e.data };
        }
      }
      ev.create = (e) => new ev({ typeName: s.ZodNaN, ...P(e) });
      let eE = Symbol("zod_brand");
      class eC extends N {
        _parse(e) {
          let { ctx: t } = this._processInputParams(e),
            a = t.data;
          return this._def.type._parse({ data: a, path: t.path, parent: t });
        }
        unwrap() {
          return this._def.type;
        }
      }
      class eb extends N {
        _parse(e) {
          let { status: t, ctx: a } = this._processInputParams(e);
          if (a.common.async)
            return (async () => {
              let e = await this._def.in._parseAsync({
                data: a.data,
                path: a.path,
                parent: a,
              });
              return "aborted" === e.status
                ? E
                : "dirty" === e.status
                ? (t.dirty(), C(e.value))
                : this._def.out._parseAsync({
                    data: e.value,
                    path: a.path,
                    parent: a,
                  });
            })();
          {
            let e = this._def.in._parseSync({
              data: a.data,
              path: a.path,
              parent: a,
            });
            return "aborted" === e.status
              ? E
              : "dirty" === e.status
              ? (t.dirty(), { status: "dirty", value: e.value })
              : this._def.out._parseSync({
                  data: e.value,
                  path: a.path,
                  parent: a,
                });
          }
        }
        static create(e, t) {
          return new eb({ in: e, out: t, typeName: s.ZodPipeline });
        }
      }
      class eR extends N {
        _parse(e) {
          let t = this._def.innerType._parse(e);
          return T(t) && (t.value = Object.freeze(t.value)), t;
        }
      }
      eR.create = (e, t) =>
        new eR({ innerType: e, typeName: s.ZodReadonly, ...P(t) });
      let eA = function (e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            a = arguments.length > 2 ? arguments[2] : void 0;
          return e
            ? z.create().superRefine((r, n) => {
                var s, i;
                if (!e(r)) {
                  let e =
                      "function" == typeof t
                        ? t(r)
                        : "string" == typeof t
                        ? { message: t }
                        : t,
                    o = null == (i = null != (s = e.fatal) ? s : a) || i,
                    l = "string" == typeof e ? { message: e } : e;
                  n.addIssue({ code: "custom", ...l, fatal: o });
                }
              })
            : z.create();
        },
        eT = { object: Q.lazycreate };
      !(function (e) {
        (e.ZodString = "ZodString"),
          (e.ZodNumber = "ZodNumber"),
          (e.ZodNaN = "ZodNaN"),
          (e.ZodBigInt = "ZodBigInt"),
          (e.ZodBoolean = "ZodBoolean"),
          (e.ZodDate = "ZodDate"),
          (e.ZodSymbol = "ZodSymbol"),
          (e.ZodUndefined = "ZodUndefined"),
          (e.ZodNull = "ZodNull"),
          (e.ZodAny = "ZodAny"),
          (e.ZodUnknown = "ZodUnknown"),
          (e.ZodNever = "ZodNever"),
          (e.ZodVoid = "ZodVoid"),
          (e.ZodArray = "ZodArray"),
          (e.ZodObject = "ZodObject"),
          (e.ZodUnion = "ZodUnion"),
          (e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion"),
          (e.ZodIntersection = "ZodIntersection"),
          (e.ZodTuple = "ZodTuple"),
          (e.ZodRecord = "ZodRecord"),
          (e.ZodMap = "ZodMap"),
          (e.ZodSet = "ZodSet"),
          (e.ZodFunction = "ZodFunction"),
          (e.ZodLazy = "ZodLazy"),
          (e.ZodLiteral = "ZodLiteral"),
          (e.ZodEnum = "ZodEnum"),
          (e.ZodEffects = "ZodEffects"),
          (e.ZodNativeEnum = "ZodNativeEnum"),
          (e.ZodOptional = "ZodOptional"),
          (e.ZodNullable = "ZodNullable"),
          (e.ZodDefault = "ZodDefault"),
          (e.ZodCatch = "ZodCatch"),
          (e.ZodPromise = "ZodPromise"),
          (e.ZodBranded = "ZodBranded"),
          (e.ZodPipeline = "ZodPipeline"),
          (e.ZodReadonly = "ZodReadonly");
      })(s || (s = {}));
      let ew = M.create,
        eS = D.create,
        ex = ev.create,
        eP = W.create,
        eN = B.create,
        ek = K.create,
        eO = V.create,
        eI = Y.create,
        eF = H.create,
        eL = z.create,
        ej = G.create,
        eU = q.create,
        eZ = $.create,
        eM = J.create,
        eD = Q.create,
        eW = Q.strictCreate,
        eB = X.create,
        eK = et.create,
        eV = ea.create,
        eY = er.create,
        eH = en.create,
        ez = es.create,
        eG = ei.create,
        eq = eo.create,
        e$ = el.create,
        eJ = ed.create,
        eQ = eu.create,
        eX = ep.create,
        e0 = em.create,
        e3 = eh.create,
        e1 = e_.create,
        e5 = eg.create,
        e2 = eh.createWithPreprocess,
        e4 = eb.create;
      var e9 = Object.freeze({
        __proto__: null,
        defaultErrorMap: h,
        setErrorMap: function (e) {
          _ = e;
        },
        getErrorMap: g,
        makeIssue: y,
        EMPTY_PATH: [],
        addIssueToContext: f,
        ParseStatus: v,
        INVALID: E,
        DIRTY: C,
        OK: b,
        isAborted: R,
        isDirty: A,
        isValid: T,
        isAsync: w,
        get util() {
          return a;
        },
        get objectUtil() {
          return r;
        },
        ZodParsedType: c,
        getParsedType: u,
        ZodType: N,
        ZodString: M,
        ZodNumber: D,
        ZodBigInt: W,
        ZodBoolean: B,
        ZodDate: K,
        ZodSymbol: V,
        ZodUndefined: Y,
        ZodNull: H,
        ZodAny: z,
        ZodUnknown: G,
        ZodNever: q,
        ZodVoid: $,
        ZodArray: J,
        ZodObject: Q,
        ZodUnion: X,
        ZodDiscriminatedUnion: et,
        ZodIntersection: ea,
        ZodTuple: er,
        ZodRecord: en,
        ZodMap: es,
        ZodSet: ei,
        ZodFunction: eo,
        ZodLazy: el,
        ZodLiteral: ed,
        ZodEnum: eu,
        ZodNativeEnum: ep,
        ZodPromise: em,
        ZodEffects: eh,
        ZodTransformer: eh,
        ZodOptional: e_,
        ZodNullable: eg,
        ZodDefault: ey,
        ZodCatch: ef,
        ZodNaN: ev,
        BRAND: eE,
        ZodBranded: eC,
        ZodPipeline: eb,
        ZodReadonly: eR,
        custom: eA,
        Schema: N,
        ZodSchema: N,
        late: eT,
        get ZodFirstPartyTypeKind() {
          return s;
        },
        coerce: {
          string: (e) => M.create({ ...e, coerce: !0 }),
          number: (e) => D.create({ ...e, coerce: !0 }),
          boolean: (e) => B.create({ ...e, coerce: !0 }),
          bigint: (e) => W.create({ ...e, coerce: !0 }),
          date: (e) => K.create({ ...e, coerce: !0 }),
        },
        any: eL,
        array: eM,
        bigint: eP,
        boolean: eN,
        date: ek,
        discriminatedUnion: eK,
        effect: e3,
        enum: eQ,
        function: eq,
        instanceof: function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : { message: "Input not instance of ".concat(e.name) };
          return eA((t) => t instanceof e, t);
        },
        intersection: eV,
        lazy: e$,
        literal: eJ,
        map: ez,
        nan: ex,
        nativeEnum: eX,
        never: eU,
        null: eF,
        nullable: e5,
        number: eS,
        object: eD,
        oboolean: () => eN().optional(),
        onumber: () => eS().optional(),
        optional: e1,
        ostring: () => ew().optional(),
        pipeline: e4,
        preprocess: e2,
        promise: e0,
        record: eH,
        set: eG,
        strictObject: eW,
        string: ew,
        symbol: eO,
        transformer: e3,
        tuple: eY,
        undefined: eI,
        union: eB,
        unknown: ej,
        void: eZ,
        NEVER: E,
        ZodIssueCode: p,
        quotelessJson: (e) =>
          JSON.stringify(e, null, 2).replace(/"([^"]+)":/g, "$1:"),
        ZodError: m,
      });
      let e6 = e9.object({ message: e9.string() });
      function e7(e) {
        return e9.literal(l.W3mFrameConstants[e]);
      }
      let e8 = e9.object({
        serializedMessage: e9.string().optional(),
        accountAddress: e9.string(),
        chainId: e9.string(),
        notBefore: e9.string().optional(),
        domain: e9.string(),
        uri: e9.string(),
        version: e9.string(),
        nonce: e9.string(),
        statement: e9.string().optional(),
        resources: e9.array(e9.string()).optional(),
        requestId: e9.string().optional(),
        issuedAt: e9.string().optional(),
        expirationTime: e9.string().optional(),
      });
      e9.object({
        accessList: e9.array(e9.string()),
        blockHash: e9.string().nullable(),
        blockNumber: e9.string().nullable(),
        chainId: e9.string().or(e9.number()),
        from: e9.string(),
        gas: e9.string(),
        hash: e9.string(),
        input: e9.string().nullable(),
        maxFeePerGas: e9.string(),
        maxPriorityFeePerGas: e9.string(),
        nonce: e9.string(),
        r: e9.string(),
        s: e9.string(),
        to: e9.string(),
        transactionIndex: e9.string().nullable(),
        type: e9.string(),
        v: e9.string(),
        value: e9.string(),
      });
      let te = e9.object({
          chainId: e9.string().or(e9.number()),
          rpcUrl: e9.optional(e9.string()),
        }),
        tt = e9.object({ email: e9.string().email() }),
        ta = e9.object({ otp: e9.string() }),
        tr = e9.object({
          uri: e9.string(),
          preferredAccountType: e9.optional(e9.string()),
          chainId: e9.optional(e9.string().or(e9.number())),
          siwxMessage: e9.optional(e8),
          rpcUrl: e9.optional(e9.string()),
        }),
        tn = e9.object({
          chainId: e9.optional(e9.string().or(e9.number())),
          preferredAccountType: e9.optional(e9.string()),
          socialUri: e9.optional(e9.string()),
          siwxMessage: e9.optional(e8),
          rpcUrl: e9.optional(e9.string()),
        }),
        ts = e9.object({
          provider: e9.enum([
            "google",
            "github",
            "apple",
            "facebook",
            "x",
            "discord",
          ]),
        }),
        ti = e9.object({ email: e9.string().email() }),
        to = e9.object({ otp: e9.string() }),
        tl = e9.object({ otp: e9.string() }),
        td = e9.object({
          themeMode: e9.optional(e9.enum(["light", "dark"])),
          themeVariables: e9.optional(
            e9.record(e9.string(), e9.string().or(e9.number()))
          ),
          w3mThemeVariables: e9.optional(e9.record(e9.string(), e9.string())),
        }),
        tc = e9.object({
          metadata: e9
            .object({
              name: e9.string(),
              description: e9.string(),
              url: e9.string(),
              icons: e9.array(e9.string()),
            })
            .optional(),
          sdkVersion: e9.string().optional(),
          sdkType: e9.string().optional(),
          projectId: e9.string(),
        }),
        tu = e9.object({ type: e9.string() }),
        tp = e9.object({
          action: e9.enum(["VERIFY_DEVICE", "VERIFY_OTP", "CONNECT"]),
        }),
        tm = e9.object({ url: e9.string() }),
        th = e9.object({ userName: e9.string() }),
        t_ = e9.object({
          email: e9.string().optional().nullable(),
          address: e9.string(),
          chainId: e9.string().or(e9.number()),
          accounts: e9
            .array(
              e9.object({
                address: e9.string(),
                type: e9.enum([
                  l.W3mFrameRpcConstants.ACCOUNT_TYPES.EOA,
                  l.W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT,
                ]),
              })
            )
            .optional(),
          userName: e9.string().optional().nullable(),
          preferredAccountType: e9.optional(e9.string()),
          signature: e9.string().optional(),
          message: e9.string().optional(),
          siwxMessage: e9.optional(e8),
        }),
        tg = e9.object({
          action: e9.enum(["VERIFY_PRIMARY_OTP", "VERIFY_SECONDARY_OTP"]),
        }),
        ty = e9.object({
          email: e9.string().email().optional().nullable(),
          address: e9.string(),
          chainId: e9.string().or(e9.number()),
          smartAccountDeployed: e9.optional(e9.boolean()),
          accounts: e9
            .array(
              e9.object({
                address: e9.string(),
                type: e9.enum([
                  l.W3mFrameRpcConstants.ACCOUNT_TYPES.EOA,
                  l.W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT,
                ]),
              })
            )
            .optional(),
          preferredAccountType: e9.optional(e9.string()),
          signature: e9.string().optional(),
          message: e9.string().optional(),
          siwxMessage: e9.optional(e8),
        }),
        tf = e9.object({ uri: e9.string() }),
        tv = e9.object({ isConnected: e9.boolean() }),
        tE = e9.object({ chainId: e9.string().or(e9.number()) }),
        tC = e9.object({ chainId: e9.string().or(e9.number()) }),
        tb = e9.object({ newEmail: e9.string().email() }),
        tR = e9.object({ smartAccountEnabledNetworks: e9.array(e9.number()) });
      e9.object({ address: e9.string(), isDeployed: e9.boolean() });
      let tA = e9.object({ version: e9.string().optional() }),
        tT = e9.object({ type: e9.string(), address: e9.string() }),
        tw = e9.any(),
        tS = e9.object({ method: e9.literal("eth_accounts") }),
        tx = e9.object({ method: e9.literal("eth_blockNumber") }),
        tP = e9.object({
          method: e9.literal("eth_call"),
          params: e9.array(e9.any()),
        }),
        tN = e9.object({ method: e9.literal("eth_chainId") }),
        tk = e9.object({
          method: e9.literal("eth_estimateGas"),
          params: e9.array(e9.any()),
        }),
        tO = e9.object({
          method: e9.literal("eth_feeHistory"),
          params: e9.array(e9.any()),
        }),
        tI = e9.object({ method: e9.literal("eth_gasPrice") }),
        tF = e9.object({
          method: e9.literal("eth_getAccount"),
          params: e9.array(e9.any()),
        }),
        tL = e9.object({
          method: e9.literal("eth_getBalance"),
          params: e9.array(e9.any()),
        }),
        tj = e9.object({
          method: e9.literal("eth_getBlockByHash"),
          params: e9.array(e9.any()),
        }),
        tU = e9.object({
          method: e9.literal("eth_getBlockByNumber"),
          params: e9.array(e9.any()),
        }),
        tZ = e9.object({
          method: e9.literal("eth_getBlockReceipts"),
          params: e9.array(e9.any()),
        }),
        tM = e9.object({
          method: e9.literal("eth_getBlockTransactionCountByHash"),
          params: e9.array(e9.any()),
        }),
        tD = e9.object({
          method: e9.literal("eth_getBlockTransactionCountByNumber"),
          params: e9.array(e9.any()),
        }),
        tW = e9.object({
          method: e9.literal("eth_getCode"),
          params: e9.array(e9.any()),
        }),
        tB = e9.object({
          method: e9.literal("eth_getFilterChanges"),
          params: e9.array(e9.any()),
        }),
        tK = e9.object({
          method: e9.literal("eth_getFilterLogs"),
          params: e9.array(e9.any()),
        }),
        tV = e9.object({
          method: e9.literal("eth_getLogs"),
          params: e9.array(e9.any()),
        }),
        tY = e9.object({
          method: e9.literal("eth_getProof"),
          params: e9.array(e9.any()),
        }),
        tH = e9.object({
          method: e9.literal("eth_getStorageAt"),
          params: e9.array(e9.any()),
        }),
        tz = e9.object({
          method: e9.literal("eth_getTransactionByBlockHashAndIndex"),
          params: e9.array(e9.any()),
        }),
        tG = e9.object({
          method: e9.literal("eth_getTransactionByBlockNumberAndIndex"),
          params: e9.array(e9.any()),
        }),
        tq = e9.object({
          method: e9.literal("eth_getTransactionByHash"),
          params: e9.array(e9.any()),
        }),
        t$ = e9.object({
          method: e9.literal("eth_getTransactionCount"),
          params: e9.array(e9.any()),
        }),
        tJ = e9.object({
          method: e9.literal("eth_getTransactionReceipt"),
          params: e9.array(e9.any()),
        }),
        tQ = e9.object({
          method: e9.literal("eth_getUncleCountByBlockHash"),
          params: e9.array(e9.any()),
        }),
        tX = e9.object({
          method: e9.literal("eth_getUncleCountByBlockNumber"),
          params: e9.array(e9.any()),
        }),
        t0 = e9.object({ method: e9.literal("eth_maxPriorityFeePerGas") }),
        t3 = e9.object({ method: e9.literal("eth_newBlockFilter") }),
        t1 = e9.object({
          method: e9.literal("eth_newFilter"),
          params: e9.array(e9.any()),
        }),
        t5 = e9.object({
          method: e9.literal("eth_newPendingTransactionFilter"),
        }),
        t2 = e9.object({
          method: e9.literal("eth_sendRawTransaction"),
          params: e9.array(e9.any()),
        }),
        t4 = e9.object({
          method: e9.literal("eth_syncing"),
          params: e9.array(e9.any()),
        }),
        t9 = e9.object({
          method: e9.literal("eth_uninstallFilter"),
          params: e9.array(e9.any()),
        }),
        t6 = e9.object({
          method: e9.literal("personal_sign"),
          params: e9.array(e9.any()),
        }),
        t7 = e9.object({
          method: e9.literal("eth_signTypedData_v4"),
          params: e9.array(e9.any()),
        }),
        t8 = e9.object({
          method: e9.literal("eth_sendTransaction"),
          params: e9.array(e9.any()),
        }),
        ae = e9.object({
          method: e9.literal("solana_signMessage"),
          params: e9.object({ message: e9.string(), pubkey: e9.string() }),
        }),
        at = e9.object({
          method: e9.literal("solana_signTransaction"),
          params: e9.object({ transaction: e9.string() }),
        }),
        aa = e9.object({
          method: e9.literal("solana_signAllTransactions"),
          params: e9.object({ transactions: e9.array(e9.string()) }),
        }),
        ar = e9.object({
          method: e9.literal("solana_signAndSendTransaction"),
          params: e9.object({
            transaction: e9.string(),
            options: e9
              .object({
                skipPreflight: e9.boolean().optional(),
                preflightCommitment: e9
                  .enum([
                    "processed",
                    "confirmed",
                    "finalized",
                    "recent",
                    "single",
                    "singleGossip",
                    "root",
                    "max",
                  ])
                  .optional(),
                maxRetries: e9.number().optional(),
                minContextSlot: e9.number().optional(),
              })
              .optional(),
          }),
        }),
        an = e9.object({
          method: e9.literal("wallet_sendCalls"),
          params: e9.array(
            e9.object({
              chainId: e9.string().or(e9.number()).optional(),
              from: e9.string().optional(),
              version: e9.string().optional(),
              capabilities: e9.any().optional(),
              calls: e9.array(
                e9.object({
                  to: e9.string().startsWith("0x"),
                  data: e9.string().startsWith("0x").optional(),
                  value: e9.string().optional(),
                })
              ),
            })
          ),
        }),
        as = e9.object({
          method: e9.literal("wallet_getCallsStatus"),
          params: e9.array(e9.string()),
        }),
        ai = e9.object({
          method: e9.literal("wallet_getCapabilities"),
          params: e9.array(e9.string().or(e9.number()).optional()).optional(),
        }),
        ao = e9.object({
          method: e9.literal("wallet_grantPermissions"),
          params: e9.array(e9.any()),
        }),
        al = e9.object({
          method: e9.literal("wallet_revokePermissions"),
          params: e9.any(),
        }),
        ad = e9.object({
          method: e9.literal("wallet_getAssets"),
          params: e9.any(),
        }),
        ac = e9.object({ token: e9.string() }),
        au = e9.object({ id: e9.string().optional() }),
        ap = {
          appEvent: au
            .extend({ type: e7("APP_SWITCH_NETWORK"), payload: te })
            .or(au.extend({ type: e7("APP_CONNECT_EMAIL"), payload: tt }))
            .or(au.extend({ type: e7("APP_CONNECT_DEVICE") }))
            .or(au.extend({ type: e7("APP_CONNECT_OTP"), payload: ta }))
            .or(au.extend({ type: e7("APP_CONNECT_SOCIAL"), payload: tr }))
            .or(au.extend({ type: e7("APP_GET_FARCASTER_URI") }))
            .or(au.extend({ type: e7("APP_CONNECT_FARCASTER") }))
            .or(
              au.extend({ type: e7("APP_GET_USER"), payload: e9.optional(tn) })
            )
            .or(
              au.extend({
                type: e7("APP_GET_SOCIAL_REDIRECT_URI"),
                payload: ts,
              })
            )
            .or(au.extend({ type: e7("APP_SIGN_OUT") }))
            .or(
              au.extend({
                type: e7("APP_IS_CONNECTED"),
                payload: e9.optional(ac),
              })
            )
            .or(au.extend({ type: e7("APP_GET_CHAIN_ID") }))
            .or(
              au.extend({ type: e7("APP_GET_SMART_ACCOUNT_ENABLED_NETWORKS") })
            )
            .or(au.extend({ type: e7("APP_INIT_SMART_ACCOUNT") }))
            .or(
              au.extend({ type: e7("APP_SET_PREFERRED_ACCOUNT"), payload: tu })
            )
            .or(
              au.extend({
                type: e7("APP_RPC_REQUEST"),
                payload: t6
                  .or(ad)
                  .or(tS)
                  .or(tx)
                  .or(tP)
                  .or(tN)
                  .or(tk)
                  .or(tO)
                  .or(tI)
                  .or(tF)
                  .or(tL)
                  .or(tj)
                  .or(tU)
                  .or(tZ)
                  .or(tM)
                  .or(tD)
                  .or(tW)
                  .or(tB)
                  .or(tK)
                  .or(tV)
                  .or(tY)
                  .or(tH)
                  .or(tz)
                  .or(tG)
                  .or(tq)
                  .or(t$)
                  .or(tJ)
                  .or(tQ)
                  .or(tX)
                  .or(t0)
                  .or(t3)
                  .or(t1)
                  .or(t5)
                  .or(t2)
                  .or(t4)
                  .or(t9)
                  .or(t6)
                  .or(t7)
                  .or(t8)
                  .or(ae)
                  .or(at)
                  .or(aa)
                  .or(ar)
                  .or(as)
                  .or(an)
                  .or(ai)
                  .or(ao)
                  .or(al)
                  .and(
                    e9.object({
                      chainId: e9.string().or(e9.number()).optional(),
                      chainNamespace: e9
                        .enum([
                          "eip155",
                          "solana",
                          "polkadot",
                          "bip122",
                          "cosmos",
                        ])
                        .optional(),
                      rpcUrl: e9.string().optional(),
                    })
                  ),
              })
            )
            .or(au.extend({ type: e7("APP_UPDATE_EMAIL"), payload: ti }))
            .or(
              au.extend({
                type: e7("APP_UPDATE_EMAIL_PRIMARY_OTP"),
                payload: to,
              })
            )
            .or(
              au.extend({
                type: e7("APP_UPDATE_EMAIL_SECONDARY_OTP"),
                payload: tl,
              })
            )
            .or(au.extend({ type: e7("APP_SYNC_THEME"), payload: td }))
            .or(au.extend({ type: e7("APP_SYNC_DAPP_DATA"), payload: tc }))
            .or(au.extend({ type: e7("APP_RELOAD") }))
            .or(au.extend({ type: e7("APP_RPC_ABORT") })),
          frameEvent: au
            .extend({ type: e7("FRAME_SWITCH_NETWORK_ERROR"), payload: e6 })
            .or(
              au.extend({
                type: e7("FRAME_SWITCH_NETWORK_SUCCESS"),
                payload: tC,
              })
            )
            .or(
              au.extend({
                type: e7("FRAME_CONNECT_EMAIL_SUCCESS"),
                payload: tp,
              })
            )
            .or(
              au.extend({ type: e7("FRAME_CONNECT_EMAIL_ERROR"), payload: e6 })
            )
            .or(
              au.extend({
                type: e7("FRAME_GET_FARCASTER_URI_SUCCESS"),
                payload: tm,
              })
            )
            .or(
              au.extend({
                type: e7("FRAME_GET_FARCASTER_URI_ERROR"),
                payload: e6,
              })
            )
            .or(
              au.extend({
                type: e7("FRAME_CONNECT_FARCASTER_SUCCESS"),
                payload: th,
              })
            )
            .or(
              au.extend({
                type: e7("FRAME_CONNECT_FARCASTER_ERROR"),
                payload: e6,
              })
            )
            .or(au.extend({ type: e7("FRAME_CONNECT_OTP_ERROR"), payload: e6 }))
            .or(au.extend({ type: e7("FRAME_CONNECT_OTP_SUCCESS") }))
            .or(
              au.extend({ type: e7("FRAME_CONNECT_DEVICE_ERROR"), payload: e6 })
            )
            .or(au.extend({ type: e7("FRAME_CONNECT_DEVICE_SUCCESS") }))
            .or(
              au.extend({
                type: e7("FRAME_CONNECT_SOCIAL_SUCCESS"),
                payload: t_,
              })
            )
            .or(
              au.extend({ type: e7("FRAME_CONNECT_SOCIAL_ERROR"), payload: e6 })
            )
            .or(au.extend({ type: e7("FRAME_GET_USER_ERROR"), payload: e6 }))
            .or(au.extend({ type: e7("FRAME_GET_USER_SUCCESS"), payload: ty }))
            .or(
              au.extend({
                type: e7("FRAME_GET_SOCIAL_REDIRECT_URI_ERROR"),
                payload: e6,
              })
            )
            .or(
              au.extend({
                type: e7("FRAME_GET_SOCIAL_REDIRECT_URI_SUCCESS"),
                payload: tf,
              })
            )
            .or(au.extend({ type: e7("FRAME_SIGN_OUT_ERROR"), payload: e6 }))
            .or(au.extend({ type: e7("FRAME_SIGN_OUT_SUCCESS") }))
            .or(
              au.extend({ type: e7("FRAME_IS_CONNECTED_ERROR"), payload: e6 })
            )
            .or(
              au.extend({ type: e7("FRAME_IS_CONNECTED_SUCCESS"), payload: tv })
            )
            .or(
              au.extend({ type: e7("FRAME_GET_CHAIN_ID_ERROR"), payload: e6 })
            )
            .or(
              au.extend({ type: e7("FRAME_GET_CHAIN_ID_SUCCESS"), payload: tE })
            )
            .or(au.extend({ type: e7("FRAME_RPC_REQUEST_ERROR"), payload: e6 }))
            .or(
              au.extend({ type: e7("FRAME_RPC_REQUEST_SUCCESS"), payload: tw })
            )
            .or(au.extend({ type: e7("FRAME_SESSION_UPDATE"), payload: ac }))
            .or(
              au.extend({ type: e7("FRAME_UPDATE_EMAIL_ERROR"), payload: e6 })
            )
            .or(
              au.extend({ type: e7("FRAME_UPDATE_EMAIL_SUCCESS"), payload: tg })
            )
            .or(
              au.extend({
                type: e7("FRAME_UPDATE_EMAIL_PRIMARY_OTP_ERROR"),
                payload: e6,
              })
            )
            .or(
              au.extend({ type: e7("FRAME_UPDATE_EMAIL_PRIMARY_OTP_SUCCESS") })
            )
            .or(
              au.extend({
                type: e7("FRAME_UPDATE_EMAIL_SECONDARY_OTP_ERROR"),
                payload: e6,
              })
            )
            .or(
              au.extend({
                type: e7("FRAME_UPDATE_EMAIL_SECONDARY_OTP_SUCCESS"),
                payload: tb,
              })
            )
            .or(au.extend({ type: e7("FRAME_SYNC_THEME_ERROR"), payload: e6 }))
            .or(au.extend({ type: e7("FRAME_SYNC_THEME_SUCCESS") }))
            .or(
              au.extend({ type: e7("FRAME_SYNC_DAPP_DATA_ERROR"), payload: e6 })
            )
            .or(au.extend({ type: e7("FRAME_SYNC_DAPP_DATA_SUCCESS") }))
            .or(
              au.extend({
                type: e7("FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS"),
                payload: tR,
              })
            )
            .or(
              au.extend({
                type: e7("FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR"),
                payload: e6,
              })
            )
            .or(
              au.extend({
                type: e7("FRAME_INIT_SMART_ACCOUNT_ERROR"),
                payload: e6,
              })
            )
            .or(
              au.extend({
                type: e7("FRAME_SET_PREFERRED_ACCOUNT_SUCCESS"),
                payload: tT,
              })
            )
            .or(
              au.extend({
                type: e7("FRAME_SET_PREFERRED_ACCOUNT_ERROR"),
                payload: e6,
              })
            )
            .or(au.extend({ type: e7("FRAME_READY"), payload: tA }))
            .or(au.extend({ type: e7("FRAME_RELOAD_ERROR"), payload: e6 }))
            .or(au.extend({ type: e7("FRAME_RELOAD_SUCCESS") })),
        };
      function am(e) {
        var t;
        let a =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return (
          "string" == typeof (null == a ? void 0 : a.type) &&
          (null == a || null == (t = a.type) ? void 0 : t.includes(e))
        );
      }
      class ah {
        get networks() {
          return Object.assign(
            {},
            ...[
              "eip155:1",
              "eip155:5",
              "eip155:11155111",
              "eip155:10",
              "eip155:420",
              "eip155:42161",
              "eip155:421613",
              "eip155:137",
              "eip155:80001",
              "eip155:42220",
              "eip155:1313161554",
              "eip155:1313161555",
              "eip155:56",
              "eip155:97",
              "eip155:43114",
              "eip155:43113",
              "eip155:324",
              "eip155:280",
              "eip155:100",
              "eip155:8453",
              "eip155:84531",
              "eip155:84532",
              "eip155:7777777",
              "eip155:999",
              "solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",
              "solana:4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z",
              "solana:EtWTRABZaYq6iMfeYKouRu166VU2xqa1",
            ].map((e) => ({
              [e]: {
                rpcUrl: ""
                  .concat(this.rpcUrl, "/v1/?chainId=")
                  .concat(e, "&projectId=")
                  .concat(this.projectId),
                chainId: e,
              },
            }))
          );
        }
        constructor({
          projectId: e,
          isAppClient: t = !1,
          chainId: a = "eip155:1",
          enableLogger: r = !0,
          rpcUrl: n = o.ConstantsUtil.BLOCKCHAIN_API_RPC_URL,
        }) {
          if (
            ((this.iframe = null),
            (this.iframeIsReady = !1),
            (this.initFrame = () => {
              let e = document.getElementById("w3m-iframe");
              this.iframe && !e && document.body.appendChild(this.iframe);
            }),
            (this.events = {
              registerFrameEventHandler: (e, t, a) => {
                function r(a) {
                  var n;
                  let { data: s } = a;
                  if (!am(l.W3mFrameConstants.FRAME_EVENT_KEY, s)) return;
                  let i = ap.frameEvent.safeParse(s);
                  if (!i.success)
                    return void console.warn(
                      "W3mFrame: invalid frame event",
                      i.error.message
                    );
                  (null == (n = i.data) ? void 0 : n.id) === e &&
                    (t(i.data), window.removeEventListener("message", r));
                }
                d.W3mFrameHelpers.isClient &&
                  (window.addEventListener("message", r),
                  a.addEventListener("abort", () => {
                    window.removeEventListener("message", r);
                  }));
              },
              onFrameEvent: (e) => {
                d.W3mFrameHelpers.isClient &&
                  window.addEventListener("message", (t) => {
                    let { data: a } = t;
                    if (!am(l.W3mFrameConstants.FRAME_EVENT_KEY, a)) return;
                    let r = ap.frameEvent.safeParse(a);
                    r.success
                      ? e(r.data)
                      : console.warn(
                          "W3mFrame: invalid frame event",
                          r.error.message
                        );
                  });
              },
              onAppEvent: (e) => {
                d.W3mFrameHelpers.isClient &&
                  window.addEventListener("message", (t) => {
                    let { data: a } = t;
                    if (!am(l.W3mFrameConstants.APP_EVENT_KEY, a)) return;
                    let r = ap.appEvent.safeParse(a);
                    r.success ||
                      console.warn(
                        "W3mFrame: invalid app event",
                        r.error.message
                      ),
                      e(a);
                  });
              },
              postAppEvent: (e) => {
                if (d.W3mFrameHelpers.isClient) {
                  var t;
                  if (!(null == (t = this.iframe) ? void 0 : t.contentWindow))
                    throw Error("W3mFrame: iframe is not set");
                  this.iframe.contentWindow.postMessage(e, "*");
                }
              },
              postFrameEvent: (e) => {
                if (d.W3mFrameHelpers.isClient) {
                  if (!parent) throw Error("W3mFrame: parent is not set");
                  parent.postMessage(e, "*");
                }
              },
            }),
            (this.projectId = e),
            (this.frameLoadPromise = new Promise((e, t) => {
              this.frameLoadPromiseResolver = { resolve: e, reject: t };
            })),
            (this.rpcUrl = n),
            t &&
              ((this.frameLoadPromise = new Promise((e, t) => {
                this.frameLoadPromiseResolver = { resolve: e, reject: t };
              })),
              d.W3mFrameHelpers.isClient))
          ) {
            let t = document.createElement("iframe");
            (t.id = "w3m-iframe"),
              (t.src = (function (e) {
                let {
                    projectId: t,
                    chainId: a,
                    version: r,
                    enableLogger: n,
                    rpcUrl: s = o.ConstantsUtil.BLOCKCHAIN_API_RPC_URL,
                  } = e,
                  i = new URL(l.SECURE_SITE_SDK);
                return (
                  i.searchParams.set("projectId", t),
                  i.searchParams.set("chainId", String(a)),
                  i.searchParams.set("version", r),
                  i.searchParams.set("enableLogger", String(n)),
                  i.searchParams.set("rpcUrl", s),
                  i.toString()
                );
              })({
                projectId: e,
                chainId: a,
                version: l.SECURE_SITE_SDK_VERSION,
                enableLogger: r,
                rpcUrl: this.rpcUrl,
              })),
              (t.name = "w3m-secure-iframe"),
              (t.style.position = "fixed"),
              (t.style.zIndex = "999999"),
              (t.style.display = "none"),
              (t.style.border = "none"),
              (t.style.animationDelay = "0s, 50ms"),
              (t.style.borderBottomLeftRadius =
                "clamp(0px, var(--wui-border-radius-l), 44px)"),
              (t.style.borderBottomRightRadius =
                "clamp(0px, var(--wui-border-radius-l), 44px)"),
              (this.iframe = t),
              (this.iframe.onerror = () => {
                var e;
                null == (e = this.frameLoadPromiseResolver) ||
                  e.reject("Unable to load email login dependency");
              }),
              this.events.onFrameEvent((e) => {
                if ("@w3m-frame/READY" === e.type) {
                  var t;
                  (this.iframeIsReady = !0),
                    null == (t = this.frameLoadPromiseResolver) ||
                      t.resolve(void 0);
                }
              });
          }
        }
      }
      e.i(973439);
      var a_ = e.i(251909);
      class ag {
        constructor(e) {
          var t;
          let a = (0, a_.getDefaultLoggerOptions)({
              level: l.DEFAULT_LOG_LEVEL,
            }),
            { logger: r, chunkLoggerController: n } = (0,
            a_.generatePlatformLogger)({ opts: a });
          (this.logger = (0, a_.generateChildLogger)(r, this.constructor.name)),
            (this.chunkLoggerController = n),
            "undefined" != typeof window &&
              (null == (t = this.chunkLoggerController)
                ? void 0
                : t.downloadLogsBlobInBrowser) &&
              (window.downloadAppKitLogsBlob ||
                (window.downloadAppKitLogsBlob = {}),
              (window.downloadAppKitLogsBlob.sdk = () => {
                var t;
                (null == (t = this.chunkLoggerController)
                  ? void 0
                  : t.downloadLogsBlobInBrowser) &&
                  this.chunkLoggerController.downloadLogsBlobInBrowser({
                    projectId: e,
                  });
              }));
        }
      }
      var ay = e.i(444158);
      class af {
        async createFrame() {
          this.w3mFrame.initFrame(),
            (this.initPromise = new Promise((e) => {
              this.w3mFrame.events.onFrameEvent((t) => {
                t.type === l.W3mFrameConstants.FRAME_READY &&
                  setTimeout(() => {
                    e();
                  }, 500);
              });
            })),
            await this.initPromise,
            (this.isInitialized = !0),
            (this.initPromise = void 0);
        }
        async init() {
          if (!this.isInitialized) {
            if (this.initPromise) return void (await this.initPromise);
            await this.createFrame();
          }
        }
        getLoginEmailUsed() {
          return !!ay.W3mFrameStorage.get(
            l.W3mFrameConstants.EMAIL_LOGIN_USED_KEY
          );
        }
        getEmail() {
          return ay.W3mFrameStorage.get(l.W3mFrameConstants.EMAIL);
        }
        getUsername() {
          return ay.W3mFrameStorage.get(l.W3mFrameConstants.SOCIAL_USERNAME);
        }
        async reload() {
          try {
            await this.appEvent({ type: l.W3mFrameConstants.APP_RELOAD });
          } catch (t) {
            var e;
            throw (
              (null == (e = this.w3mLogger) ||
                e.logger.error({ error: t }, "Error reloading iframe"),
              t)
            );
          }
        }
        async connectEmail(e) {
          try {
            d.W3mFrameHelpers.checkIfAllowedToTriggerEmail(), await this.init();
            let t = await this.appEvent({
              type: l.W3mFrameConstants.APP_CONNECT_EMAIL,
              payload: e,
            });
            return this.setNewLastEmailLoginTime(), t;
          } catch (e) {
            var t;
            throw (
              (null == (t = this.w3mLogger) ||
                t.logger.error({ error: e }, "Error connecting email"),
              e)
            );
          }
        }
        async connectDevice() {
          try {
            return this.appEvent({
              type: l.W3mFrameConstants.APP_CONNECT_DEVICE,
            });
          } catch (t) {
            var e;
            throw (
              (null == (e = this.w3mLogger) ||
                e.logger.error({ error: t }, "Error connecting device"),
              t)
            );
          }
        }
        async connectOtp(e) {
          try {
            return this.appEvent({
              type: l.W3mFrameConstants.APP_CONNECT_OTP,
              payload: e,
            });
          } catch (e) {
            var t;
            throw (
              (null == (t = this.w3mLogger) ||
                t.logger.error({ error: e }, "Error connecting otp"),
              e)
            );
          }
        }
        async isConnected() {
          try {
            if (!this.getLoginEmailUsed()) return { isConnected: !1 };
            let e = await this.appEvent({
              type: l.W3mFrameConstants.APP_IS_CONNECTED,
            });
            return (
              (null == e ? void 0 : e.isConnected) ||
                this.deleteAuthLoginCache(),
              e
            );
          } catch (t) {
            var e;
            throw (
              (this.deleteAuthLoginCache(),
              null == (e = this.w3mLogger) ||
                e.logger.error({ error: t }, "Error checking connection"),
              t)
            );
          }
        }
        async getChainId() {
          try {
            let e = await this.appEvent({
              type: l.W3mFrameConstants.APP_GET_CHAIN_ID,
            });
            return this.setLastUsedChainId(e.chainId), e;
          } catch (t) {
            var e;
            throw (
              (null == (e = this.w3mLogger) ||
                e.logger.error({ error: t }, "Error getting chain id"),
              t)
            );
          }
        }
        async getSocialRedirectUri(e) {
          try {
            return (
              await this.init(),
              this.appEvent({
                type: l.W3mFrameConstants.APP_GET_SOCIAL_REDIRECT_URI,
                payload: e,
              })
            );
          } catch (e) {
            var t;
            throw (
              (null == (t = this.w3mLogger) ||
                t.logger.error(
                  { error: e },
                  "Error getting social redirect uri"
                ),
              e)
            );
          }
        }
        async updateEmail(e) {
          try {
            let t = await this.appEvent({
              type: l.W3mFrameConstants.APP_UPDATE_EMAIL,
              payload: e,
            });
            return this.setNewLastEmailLoginTime(), t;
          } catch (e) {
            var t;
            throw (
              (null == (t = this.w3mLogger) ||
                t.logger.error({ error: e }, "Error updating email"),
              e)
            );
          }
        }
        async updateEmailPrimaryOtp(e) {
          try {
            return this.appEvent({
              type: l.W3mFrameConstants.APP_UPDATE_EMAIL_PRIMARY_OTP,
              payload: e,
            });
          } catch (e) {
            var t;
            throw (
              (null == (t = this.w3mLogger) ||
                t.logger.error(
                  { error: e },
                  "Error updating email primary otp"
                ),
              e)
            );
          }
        }
        async updateEmailSecondaryOtp(e) {
          try {
            let t = await this.appEvent({
              type: l.W3mFrameConstants.APP_UPDATE_EMAIL_SECONDARY_OTP,
              payload: e,
            });
            return this.setLoginSuccess(t.newEmail), t;
          } catch (e) {
            var t;
            throw (
              (null == (t = this.w3mLogger) ||
                t.logger.error(
                  { error: e },
                  "Error updating email secondary otp"
                ),
              e)
            );
          }
        }
        async syncTheme(e) {
          try {
            return this.appEvent({
              type: l.W3mFrameConstants.APP_SYNC_THEME,
              payload: e,
            });
          } catch (e) {
            var t;
            throw (
              (null == (t = this.w3mLogger) ||
                t.logger.error({ error: e }, "Error syncing theme"),
              e)
            );
          }
        }
        async syncDappData(e) {
          try {
            return this.appEvent({
              type: l.W3mFrameConstants.APP_SYNC_DAPP_DATA,
              payload: e,
            });
          } catch (e) {
            var t;
            throw (
              (null == (t = this.w3mLogger) ||
                t.logger.error({ error: e }, "Error syncing dapp data"),
              e)
            );
          }
        }
        async getSmartAccountEnabledNetworks() {
          try {
            let e = await this.appEvent({
              type: l.W3mFrameConstants.APP_GET_SMART_ACCOUNT_ENABLED_NETWORKS,
            });
            return (
              this.persistSmartAccountEnabledNetworks(
                e.smartAccountEnabledNetworks
              ),
              e
            );
          } catch (t) {
            var e;
            throw (
              (this.persistSmartAccountEnabledNetworks([]),
              null == (e = this.w3mLogger) ||
                e.logger.error(
                  { error: t },
                  "Error getting smart account enabled networks"
                ),
              t)
            );
          }
        }
        async setPreferredAccount(e) {
          try {
            return this.appEvent({
              type: l.W3mFrameConstants.APP_SET_PREFERRED_ACCOUNT,
              payload: { type: e },
            });
          } catch (e) {
            var t;
            throw (
              (null == (t = this.w3mLogger) ||
                t.logger.error({ error: e }, "Error setting preferred account"),
              e)
            );
          }
        }
        async connect(e) {
          var t, a;
          if (null == e ? void 0 : e.socialUri)
            try {
              await this.init();
              let t = this.getRpcUrl(e.chainId),
                a = await this.appEvent({
                  type: l.W3mFrameConstants.APP_CONNECT_SOCIAL,
                  payload: {
                    uri: e.socialUri,
                    preferredAccountType: e.preferredAccountType,
                    chainId: e.chainId,
                    siwxMessage: e.siwxMessage,
                    rpcUrl: t,
                  },
                });
              return (
                a.userName && this.setSocialLoginSuccess(a.userName),
                this.setLoginSuccess(a.email),
                this.setLastUsedChainId(a.chainId),
                (this.user = a),
                a
              );
            } catch (e) {
              throw (
                (null == (t = this.w3mLogger) ||
                  t.logger.error({ error: e }, "Error connecting social"),
                e)
              );
            }
          try {
            let t =
                (null == e ? void 0 : e.chainId) ||
                this.getLastUsedChainId() ||
                1,
              a = await this.getUser({
                chainId: t,
                preferredAccountType:
                  null == e ? void 0 : e.preferredAccountType,
                siwxMessage: null == e ? void 0 : e.siwxMessage,
                rpcUrl: this.getRpcUrl(t),
              });
            return (
              this.setLoginSuccess(a.email),
              this.setLastUsedChainId(a.chainId),
              (this.user = a),
              a
            );
          } catch (e) {
            throw (
              (null == (a = this.w3mLogger) ||
                a.logger.error({ error: e }, "Error connecting"),
              e)
            );
          }
        }
        async getUser(e) {
          try {
            await this.init();
            let t =
                (null == e ? void 0 : e.chainId) ||
                this.getLastUsedChainId() ||
                1,
              a = await this.appEvent({
                type: l.W3mFrameConstants.APP_GET_USER,
                payload: { ...e, chainId: t },
              });
            return (this.user = a), a;
          } catch (e) {
            var t;
            throw (
              (null == (t = this.w3mLogger) ||
                t.logger.error({ error: e }, "Error connecting"),
              e)
            );
          }
        }
        async connectSocial(e) {
          let { uri: t, chainId: a, preferredAccountType: r } = e;
          try {
            await this.init();
            let e = this.getRpcUrl(a),
              n = await this.appEvent({
                type: l.W3mFrameConstants.APP_CONNECT_SOCIAL,
                payload: {
                  uri: t,
                  chainId: a,
                  rpcUrl: e,
                  preferredAccountType: r,
                },
              });
            return n.userName && this.setSocialLoginSuccess(n.userName), n;
          } catch (e) {
            var n;
            throw (
              (null == (n = this.w3mLogger) ||
                n.logger.error({ error: e }, "Error connecting social"),
              e)
            );
          }
        }
        async getFarcasterUri() {
          try {
            return (
              await this.init(),
              await this.appEvent({
                type: l.W3mFrameConstants.APP_GET_FARCASTER_URI,
              })
            );
          } catch (t) {
            var e;
            throw (
              (null == (e = this.w3mLogger) ||
                e.logger.error({ error: t }, "Error getting farcaster uri"),
              t)
            );
          }
        }
        async connectFarcaster() {
          try {
            let e = await this.appEvent({
              type: l.W3mFrameConstants.APP_CONNECT_FARCASTER,
            });
            return e.userName && this.setSocialLoginSuccess(e.userName), e;
          } catch (t) {
            var e;
            throw (
              (null == (e = this.w3mLogger) ||
                e.logger.error({ error: t }, "Error connecting farcaster"),
              t)
            );
          }
        }
        async switchNetwork(e) {
          let { chainId: t } = e;
          try {
            let e = this.getRpcUrl(t),
              a = await this.appEvent({
                type: l.W3mFrameConstants.APP_SWITCH_NETWORK,
                payload: { chainId: t, rpcUrl: e },
              });
            return this.setLastUsedChainId(a.chainId), a;
          } catch (e) {
            var a;
            throw (
              (null == (a = this.w3mLogger) ||
                a.logger.error({ error: e }, "Error switching network"),
              e)
            );
          }
        }
        async disconnect() {
          try {
            return (
              this.deleteAuthLoginCache(),
              await new Promise(async (e) => {
                let t = setTimeout(() => {
                  e();
                }, 3e3);
                await this.appEvent({ type: l.W3mFrameConstants.APP_SIGN_OUT }),
                  clearTimeout(t),
                  e();
              })
            );
          } catch (t) {
            var e;
            throw (
              (null == (e = this.w3mLogger) ||
                e.logger.error({ error: t }, "Error disconnecting"),
              t)
            );
          }
        }
        async request(e) {
          var t, a, r, n, s;
          try {
            if (l.W3mFrameRpcConstants.GET_CHAIN_ID === e.method)
              return this.getLastUsedChainId();
            let n = e.chainNamespace || "eip155",
              s = null == (t = this.getActiveCaipNetwork(n)) ? void 0 : t.id;
            (e.chainNamespace = n),
              (e.chainId = s),
              (e.rpcUrl = this.getRpcUrl(s)),
              null == (a = this.rpcRequestHandler) || a.call(this, e);
            let i = await this.appEvent({
              type: l.W3mFrameConstants.APP_RPC_REQUEST,
              payload: e,
            });
            return (
              null == (r = this.rpcSuccessHandler) || r.call(this, i, e), i
            );
          } catch (t) {
            throw (
              (null == (n = this.rpcErrorHandler) || n.call(this, t, e),
              null == (s = this.w3mLogger) ||
                s.logger.error({ error: t }, "Error requesting"),
              t)
            );
          }
        }
        onRpcRequest(e) {
          this.rpcRequestHandler = e;
        }
        onRpcSuccess(e) {
          this.rpcSuccessHandler = e;
        }
        onRpcError(e) {
          this.rpcErrorHandler = e;
        }
        onIsConnected(e) {
          this.w3mFrame.events.onFrameEvent((t) => {
            t.type === l.W3mFrameConstants.FRAME_IS_CONNECTED_SUCCESS &&
              t.payload.isConnected &&
              e();
          });
        }
        onNotConnected(e) {
          this.w3mFrame.events.onFrameEvent((t) => {
            t.type === l.W3mFrameConstants.FRAME_IS_CONNECTED_ERROR && e(),
              t.type !== l.W3mFrameConstants.FRAME_IS_CONNECTED_SUCCESS ||
                t.payload.isConnected ||
                e();
          });
        }
        onConnect(e) {
          this.w3mFrame.events.onFrameEvent((t) => {
            t.type === l.W3mFrameConstants.FRAME_GET_USER_SUCCESS &&
              e(t.payload);
          });
        }
        onSocialConnected(e) {
          this.w3mFrame.events.onFrameEvent((t) => {
            t.type === l.W3mFrameConstants.FRAME_CONNECT_SOCIAL_SUCCESS &&
              e(t.payload);
          });
        }
        async getCapabilities() {
          try {
            return (
              (await this.request({ method: "wallet_getCapabilities" })) || {}
            );
          } catch (e) {
            return {};
          }
        }
        onSetPreferredAccount(e) {
          this.w3mFrame.events.onFrameEvent((t) => {
            t.type === l.W3mFrameConstants.FRAME_SET_PREFERRED_ACCOUNT_SUCCESS
              ? e(t.payload)
              : t.type ===
                  l.W3mFrameConstants.FRAME_SET_PREFERRED_ACCOUNT_ERROR &&
                e({ type: l.W3mFrameRpcConstants.ACCOUNT_TYPES.EOA });
          });
        }
        getAvailableChainIds() {
          return Object.keys(this.w3mFrame.networks);
        }
        async rejectRpcRequests() {
          try {
            await Promise.all(
              this.openRpcRequests.map(async (e) => {
                let { abortController: t, method: a } = e;
                l.W3mFrameRpcConstants.SAFE_RPC_METHODS.includes(a) ||
                  t.abort(),
                  await this.appEvent({
                    type: l.W3mFrameConstants.APP_RPC_ABORT,
                  });
              })
            ),
              (this.openRpcRequests = []);
          } catch (t) {
            var e;
            null == (e = this.w3mLogger) ||
              e.logger.error({ error: t }, "Error aborting RPC request");
          }
        }
        async appEvent(e) {
          let t, a;
          function r(e) {
            return e.replace("@w3m-app/", "");
          }
          let n = [
              l.W3mFrameConstants.APP_SYNC_DAPP_DATA,
              l.W3mFrameConstants.APP_SYNC_THEME,
              l.W3mFrameConstants.APP_SET_PREFERRED_ACCOUNT,
            ],
            s = r(e.type);
          return (
            this.w3mFrame.iframeIsReady ||
              n.includes(e.type) ||
              (a = setTimeout(() => {
                var e;
                null == (e = this.onTimeout) ||
                  e.call(this, "iframe_load_failed"),
                  this.abortController.abort();
              }, 2e4)),
            await this.w3mFrame.frameLoadPromise,
            clearTimeout(a),
            [
              l.W3mFrameConstants.APP_CONNECT_EMAIL,
              l.W3mFrameConstants.APP_CONNECT_DEVICE,
              l.W3mFrameConstants.APP_CONNECT_OTP,
              l.W3mFrameConstants.APP_CONNECT_SOCIAL,
              l.W3mFrameConstants.APP_GET_SOCIAL_REDIRECT_URI,
            ]
              .map(r)
              .includes(s) &&
              (t = setTimeout(() => {
                var e;
                null == (e = this.onTimeout) ||
                  e.call(this, "iframe_request_timeout"),
                  this.abortController.abort();
              }, 12e4)),
            new Promise((r, n) => {
              var i, o, l;
              let d = Math.random().toString(36).substring(7);
              null == (o = this.w3mLogger) ||
                null == (i = (l = o.logger).info) ||
                i.call(l, { event: e, id: d }, "Sending app event"),
                this.w3mFrame.events.postAppEvent({ ...e, id: d });
              let c = new AbortController();
              "RPC_REQUEST" === s &&
                (this.openRpcRequests = [
                  ...this.openRpcRequests,
                  { ...e.payload, abortController: c },
                ]),
                c.signal.addEventListener("abort", () => {
                  "RPC_REQUEST" === s
                    ? n(Error("Request was aborted"))
                    : "GET_FARCASTER_URI" !== s &&
                      n(Error("Something went wrong"));
                }),
                this.w3mFrame.events.registerFrameEventHandler(
                  d,
                  (e) => {
                    var i, o, l, c;
                    return (
                      (i = this.w3mLogger),
                      void (
                        e.id === d &&
                        (null == i ||
                          null == (o = (l = i.logger).info) ||
                          o.call(
                            l,
                            { framEvent: e, id: d },
                            "Received frame response"
                          ),
                        e.type === "@w3m-frame/".concat(s, "_SUCCESS")
                          ? (t && clearTimeout(t),
                            a && clearTimeout(a),
                            "payload" in e && r(e.payload),
                            r(void 0))
                          : e.type === "@w3m-frame/".concat(s, "_ERROR") &&
                            (t && clearTimeout(t),
                            a && clearTimeout(a),
                            "payload" in e &&
                              n(
                                Error(
                                  (null == (c = e.payload)
                                    ? void 0
                                    : c.message) || "An error occurred"
                                )
                              ),
                            n(Error("An error occurred"))))
                      )
                    );
                  },
                  this.abortController.signal
                );
            })
          );
        }
        setNewLastEmailLoginTime() {
          ay.W3mFrameStorage.set(
            l.W3mFrameConstants.LAST_EMAIL_LOGIN_TIME,
            Date.now().toString()
          );
        }
        setSocialLoginSuccess(e) {
          ay.W3mFrameStorage.set(l.W3mFrameConstants.SOCIAL_USERNAME, e);
        }
        setLoginSuccess(e) {
          e && ay.W3mFrameStorage.set(l.W3mFrameConstants.EMAIL, e),
            ay.W3mFrameStorage.set(
              l.W3mFrameConstants.EMAIL_LOGIN_USED_KEY,
              "true"
            ),
            ay.W3mFrameStorage.delete(
              l.W3mFrameConstants.LAST_EMAIL_LOGIN_TIME
            );
        }
        deleteAuthLoginCache() {
          ay.W3mFrameStorage.delete(l.W3mFrameConstants.EMAIL_LOGIN_USED_KEY),
            ay.W3mFrameStorage.delete(l.W3mFrameConstants.EMAIL),
            ay.W3mFrameStorage.delete(l.W3mFrameConstants.LAST_USED_CHAIN_KEY),
            ay.W3mFrameStorage.delete(l.W3mFrameConstants.SOCIAL_USERNAME);
        }
        setLastUsedChainId(e) {
          e &&
            ay.W3mFrameStorage.set(
              l.W3mFrameConstants.LAST_USED_CHAIN_KEY,
              String(e)
            );
        }
        getLastUsedChainId() {
          var e;
          let t =
              null !=
              (e = ay.W3mFrameStorage.get(
                l.W3mFrameConstants.LAST_USED_CHAIN_KEY
              ))
                ? e
                : void 0,
            a = Number(t);
          return isNaN(a) ? t : a;
        }
        persistSmartAccountEnabledNetworks(e) {
          ay.W3mFrameStorage.set(
            l.W3mFrameConstants.SMART_ACCOUNT_ENABLED_NETWORKS,
            e.join(",")
          );
        }
        getRpcUrl(e) {
          var t, a;
          let r = void 0 === e ? void 0 : "eip155";
          "string" == typeof e &&
            (r = e.includes(":")
              ? null == (a = i.ParseUtil.parseCaipNetworkId(e))
                ? void 0
                : a.chainNamespace
              : Number.isInteger(Number(e))
              ? "eip155"
              : "solana");
          let n = this.getActiveCaipNetwork(r);
          return null == n || null == (t = n.rpcUrls.default.http)
            ? void 0
            : t[0];
        }
        constructor({
          projectId: e,
          chainId: t,
          enableLogger: a = !0,
          onTimeout: r,
          abortController: n,
          getActiveCaipNetwork: s,
        }) {
          (this.openRpcRequests = []),
            (this.isInitialized = !1),
            a && (this.w3mLogger = new ag(e)),
            (this.abortController = n),
            (this.getActiveCaipNetwork = s);
          let i = this.getRpcUrl(t);
          (this.w3mFrame = new ah({
            projectId: e,
            isAppClient: !0,
            chainId: t,
            enableLogger: a,
            rpcUrl: i,
          })),
            (this.onTimeout = r),
            this.getLoginEmailUsed() && this.createFrame();
        }
      }
    },
  },
]);

//# sourceMappingURL=484fee12a20b16ea.js.map
