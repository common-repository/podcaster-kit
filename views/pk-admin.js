(function () {
  'use strict';

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _createSuper(Derived) {
    return function () {
      var Super = _getPrototypeOf(Derived),
          result;

      if (_isNativeReflectConstruct()) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf(object);
      if (object === null) break;
    }

    return object;
  }

  function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get;
    } else {
      _get = function _get(target, property, receiver) {
        var base = _superPropBase(target, property);

        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.get) {
          return desc.get.call(receiver);
        }

        return desc.value;
      };
    }

    return _get(target, property, receiver || target);
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
  }

  function _iterableToArrayLimit(arr, i) {
    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function noop() {}

  function assign(tar, src) {
    // @ts-ignore
    for (var k in src) {
      tar[k] = src[k];
    }

    return tar;
  }

  function add_location(element, file, line, column, char) {
    element.__svelte_meta = {
      loc: {
        file: file,
        line: line,
        column: column,
        char: char
      }
    };
  }

  function run(fn) {
    return fn();
  }

  function blank_object() {
    return Object.create(null);
  }

  function run_all(fns) {
    fns.forEach(run);
  }

  function is_function(thing) {
    return typeof thing === 'function';
  }

  function safe_not_equal(a, b) {
    return a != a ? b == b : a !== b || a && _typeof(a) === 'object' || typeof a === 'function';
  }

  function create_slot(definition, ctx, $$scope, fn) {
    if (definition) {
      var slot_ctx = get_slot_context(definition, ctx, $$scope, fn);
      return definition[0](slot_ctx);
    }
  }

  function get_slot_context(definition, ctx, $$scope, fn) {
    return definition[1] && fn ? assign($$scope.ctx.slice(), definition[1](fn(ctx))) : $$scope.ctx;
  }

  function get_slot_changes(definition, $$scope, dirty, fn) {
    if (definition[2] && fn) {
      var lets = definition[2](fn(dirty));

      if ($$scope.dirty === undefined) {
        return lets;
      }

      if (_typeof(lets) === 'object') {
        var merged = [];
        var len = Math.max($$scope.dirty.length, lets.length);

        for (var i = 0; i < len; i += 1) {
          merged[i] = $$scope.dirty[i] | lets[i];
        }

        return merged;
      }

      return $$scope.dirty | lets;
    }

    return $$scope.dirty;
  }

  function null_to_empty(value) {
    return value == null ? '' : value;
  }

  function append(target, node) {
    target.appendChild(node);
  }

  function insert(target, node, anchor) {
    target.insertBefore(node, anchor || null);
  }

  function detach(node) {
    node.parentNode.removeChild(node);
  }

  function destroy_each(iterations, detaching) {
    for (var i = 0; i < iterations.length; i += 1) {
      if (iterations[i]) iterations[i].d(detaching);
    }
  }

  function element(name) {
    return document.createElement(name);
  }

  function svg_element(name) {
    return document.createElementNS('http://www.w3.org/2000/svg', name);
  }

  function text(data) {
    return document.createTextNode(data);
  }

  function space() {
    return text(' ');
  }

  function listen(node, event, handler, options) {
    node.addEventListener(event, handler, options);
    return function () {
      return node.removeEventListener(event, handler, options);
    };
  }

  function prevent_default(fn) {
    return function (event) {
      event.preventDefault(); // @ts-ignore

      return fn.call(this, event);
    };
  }

  function stop_propagation(fn) {
    return function (event) {
      event.stopPropagation(); // @ts-ignore

      return fn.call(this, event);
    };
  }

  function attr(node, attribute, value) {
    if (value == null) node.removeAttribute(attribute);else if (node.getAttribute(attribute) !== value) node.setAttribute(attribute, value);
  }

  function children(element) {
    return Array.from(element.childNodes);
  }

  function set_style(node, key, value, important) {
    node.style.setProperty(key, value, important ? 'important' : '');
  }

  function toggle_class(element, name, toggle) {
    element.classList[toggle ? 'add' : 'remove'](name);
  }

  function custom_event(type, detail) {
    var e = document.createEvent('CustomEvent');
    e.initCustomEvent(type, false, false, detail);
    return e;
  }

  var HtmlTag = /*#__PURE__*/function () {
    function HtmlTag(html) {
      var anchor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      _classCallCheck(this, HtmlTag);

      this.e = element('div');
      this.a = anchor;
      this.u(html);
    }

    _createClass(HtmlTag, [{
      key: "m",
      value: function m(target) {
        var anchor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

        for (var i = 0; i < this.n.length; i += 1) {
          insert(target, this.n[i], anchor);
        }

        this.t = target;
      }
    }, {
      key: "u",
      value: function u(html) {
        this.e.innerHTML = html;
        this.n = Array.from(this.e.childNodes);
      }
    }, {
      key: "p",
      value: function p(html) {
        this.d();
        this.u(html);
        this.m(this.t, this.a);
      }
    }, {
      key: "d",
      value: function d() {
        this.n.forEach(detach);
      }
    }]);

    return HtmlTag;
  }();

  var current_component;

  function set_current_component(component) {
    current_component = component;
  }

  function get_current_component() {
    if (!current_component) throw new Error("Function called outside component initialization");
    return current_component;
  }

  function onMount(fn) {
    get_current_component().$$.on_mount.push(fn);
  }

  function createEventDispatcher() {
    var component = get_current_component();
    return function (type, detail) {
      var callbacks = component.$$.callbacks[type];

      if (callbacks) {
        // TODO are there situations where events could be dispatched
        // in a server (non-DOM) environment?
        var event = custom_event(type, detail);
        callbacks.slice().forEach(function (fn) {
          fn.call(component, event);
        });
      }
    };
  }

  var dirty_components = [];
  var binding_callbacks = [];
  var render_callbacks = [];
  var flush_callbacks = [];
  var resolved_promise = Promise.resolve();
  var update_scheduled = false;

  function schedule_update() {
    if (!update_scheduled) {
      update_scheduled = true;
      resolved_promise.then(flush);
    }
  }

  function add_render_callback(fn) {
    render_callbacks.push(fn);
  }

  function add_flush_callback(fn) {
    flush_callbacks.push(fn);
  }

  var flushing = false;
  var seen_callbacks = new Set();

  function flush() {
    if (flushing) return;
    flushing = true;

    do {
      // first, call beforeUpdate functions
      // and update components
      for (var i = 0; i < dirty_components.length; i += 1) {
        var component = dirty_components[i];
        set_current_component(component);
        update(component.$$);
      }

      dirty_components.length = 0;

      while (binding_callbacks.length) {
        binding_callbacks.pop()();
      } // then, once components are updated, call
      // afterUpdate functions. This may cause
      // subsequent updates...


      for (var _i = 0; _i < render_callbacks.length; _i += 1) {
        var callback = render_callbacks[_i];

        if (!seen_callbacks.has(callback)) {
          // ...so guard against infinite loops
          seen_callbacks.add(callback);
          callback();
        }
      }

      render_callbacks.length = 0;
    } while (dirty_components.length);

    while (flush_callbacks.length) {
      flush_callbacks.pop()();
    }

    update_scheduled = false;
    flushing = false;
    seen_callbacks.clear();
  }

  function update($$) {
    if ($$.fragment !== null) {
      $$.update();
      run_all($$.before_update);
      var dirty = $$.dirty;
      $$.dirty = [-1];
      $$.fragment && $$.fragment.p($$.ctx, dirty);
      $$.after_update.forEach(add_render_callback);
    }
  }

  var outroing = new Set();
  var outros;

  function transition_in(block, local) {
    if (block && block.i) {
      outroing.delete(block);
      block.i(local);
    }
  }

  function transition_out(block, local, detach, callback) {
    if (block && block.o) {
      if (outroing.has(block)) return;
      outroing.add(block);
      outros.c.push(function () {
        outroing.delete(block);

        if (callback) {
          if (detach) block.d(1);
          callback();
        }
      });
      block.o(local);
    }
  }

  var globals = typeof window !== 'undefined' ? window : global;

  function bind(component, name, callback) {
    var index = component.$$.props[name];

    if (index !== undefined) {
      component.$$.bound[index] = callback;
      callback(component.$$.ctx[index]);
    }
  }

  function create_component(block) {
    block && block.c();
  }

  function mount_component(component, target, anchor) {
    var _component$$$ = component.$$,
        fragment = _component$$$.fragment,
        on_mount = _component$$$.on_mount,
        on_destroy = _component$$$.on_destroy,
        after_update = _component$$$.after_update;
    fragment && fragment.m(target, anchor); // onMount happens before the initial afterUpdate

    add_render_callback(function () {
      var new_on_destroy = on_mount.map(run).filter(is_function);

      if (on_destroy) {
        on_destroy.push.apply(on_destroy, _toConsumableArray(new_on_destroy));
      } else {
        // Edge case - component was destroyed immediately,
        // most likely as a result of a binding initialising
        run_all(new_on_destroy);
      }

      component.$$.on_mount = [];
    });
    after_update.forEach(add_render_callback);
  }

  function destroy_component(component, detaching) {
    var $$ = component.$$;

    if ($$.fragment !== null) {
      run_all($$.on_destroy);
      $$.fragment && $$.fragment.d(detaching); // TODO null out other refs, including component.$$ (but need to
      // preserve final state?)

      $$.on_destroy = $$.fragment = null;
      $$.ctx = [];
    }
  }

  function make_dirty(component, i) {
    if (component.$$.dirty[0] === -1) {
      dirty_components.push(component);
      schedule_update();
      component.$$.dirty.fill(0);
    }

    component.$$.dirty[i / 31 | 0] |= 1 << i % 31;
  }

  function init(component, options, instance, create_fragment, not_equal, props) {
    var dirty = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : [-1];
    var parent_component = current_component;
    set_current_component(component);
    var prop_values = options.props || {};
    var $$ = component.$$ = {
      fragment: null,
      ctx: null,
      // state
      props: props,
      update: noop,
      not_equal: not_equal,
      bound: blank_object(),
      // lifecycle
      on_mount: [],
      on_destroy: [],
      before_update: [],
      after_update: [],
      context: new Map(parent_component ? parent_component.$$.context : []),
      // everything else
      callbacks: blank_object(),
      dirty: dirty
    };
    var ready = false;
    $$.ctx = instance ? instance(component, prop_values, function (i, ret) {
      var value = (arguments.length <= 2 ? 0 : arguments.length - 2) ? arguments.length <= 2 ? undefined : arguments[2] : ret;

      if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
        if ($$.bound[i]) $$.bound[i](value);
        if (ready) make_dirty(component, i);
      }

      return ret;
    }) : [];
    $$.update();
    ready = true;
    run_all($$.before_update); // `false` as a special case of no DOM component

    $$.fragment = create_fragment ? create_fragment($$.ctx) : false;

    if (options.target) {
      if (options.hydrate) {
        var nodes = children(options.target); // eslint-disable-next-line @typescript-eslint/no-non-null-assertion

        $$.fragment && $$.fragment.l(nodes);
        nodes.forEach(detach);
      } else {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        $$.fragment && $$.fragment.c();
      }

      if (options.intro) transition_in(component.$$.fragment);
      mount_component(component, options.target, options.anchor);
      flush();
    }

    set_current_component(parent_component);
  }

  var SvelteComponent = /*#__PURE__*/function () {
    function SvelteComponent() {
      _classCallCheck(this, SvelteComponent);
    }

    _createClass(SvelteComponent, [{
      key: "$destroy",
      value: function $destroy() {
        destroy_component(this, 1);
        this.$destroy = noop;
      }
    }, {
      key: "$on",
      value: function $on(type, callback) {
        var callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
        callbacks.push(callback);
        return function () {
          var index = callbacks.indexOf(callback);
          if (index !== -1) callbacks.splice(index, 1);
        };
      }
    }, {
      key: "$set",
      value: function $set() {// overridden by instance, if it has props
      }
    }]);

    return SvelteComponent;
  }();

  function dispatch_dev(type, detail) {
    document.dispatchEvent(custom_event(type, Object.assign({
      version: '3.20.1'
    }, detail)));
  }

  function append_dev(target, node) {
    dispatch_dev("SvelteDOMInsert", {
      target: target,
      node: node
    });
    append(target, node);
  }

  function insert_dev(target, node, anchor) {
    dispatch_dev("SvelteDOMInsert", {
      target: target,
      node: node,
      anchor: anchor
    });
    insert(target, node, anchor);
  }

  function detach_dev(node) {
    dispatch_dev("SvelteDOMRemove", {
      node: node
    });
    detach(node);
  }

  function listen_dev(node, event, handler, options, has_prevent_default, has_stop_propagation) {
    var modifiers = options === true ? ["capture"] : options ? Array.from(Object.keys(options)) : [];
    if (has_prevent_default) modifiers.push('preventDefault');
    if (has_stop_propagation) modifiers.push('stopPropagation');
    dispatch_dev("SvelteDOMAddEventListener", {
      node: node,
      event: event,
      handler: handler,
      modifiers: modifiers
    });
    var dispose = listen(node, event, handler, options);
    return function () {
      dispatch_dev("SvelteDOMRemoveEventListener", {
        node: node,
        event: event,
        handler: handler,
        modifiers: modifiers
      });
      dispose();
    };
  }

  function attr_dev(node, attribute, value) {
    attr(node, attribute, value);
    if (value == null) dispatch_dev("SvelteDOMRemoveAttribute", {
      node: node,
      attribute: attribute
    });else dispatch_dev("SvelteDOMSetAttribute", {
      node: node,
      attribute: attribute,
      value: value
    });
  }

  function prop_dev(node, property, value) {
    node[property] = value;
    dispatch_dev("SvelteDOMSetProperty", {
      node: node,
      property: property,
      value: value
    });
  }

  function set_data_dev(text, data) {
    data = '' + data;
    if (text.data === data) return;
    dispatch_dev("SvelteDOMSetData", {
      node: text,
      data: data
    });
    text.data = data;
  }

  function validate_each_argument(arg) {
    if (typeof arg !== 'string' && !(arg && _typeof(arg) === 'object' && 'length' in arg)) {
      var msg = '{#each} only iterates over array-like objects.';

      if (typeof Symbol === 'function' && arg && Symbol.iterator in arg) {
        msg += ' You can use a spread to convert this iterable into an array.';
      }

      throw new Error(msg);
    }
  }

  function validate_slots(name, slot, keys) {
    for (var _i2 = 0, _Object$keys = Object.keys(slot); _i2 < _Object$keys.length; _i2++) {
      var slot_key = _Object$keys[_i2];

      if (!~keys.indexOf(slot_key)) {
        console.warn("<".concat(name, "> received an unexpected slot \"").concat(slot_key, "\"."));
      }
    }
  }

  var SvelteComponentDev = /*#__PURE__*/function (_SvelteComponent) {
    _inherits(SvelteComponentDev, _SvelteComponent);

    var _super2 = _createSuper(SvelteComponentDev);

    function SvelteComponentDev(options) {
      _classCallCheck(this, SvelteComponentDev);

      if (!options || !options.target && !options.$$inline) {
        throw new Error("'target' is a required option");
      }

      return _super2.call(this);
    }

    _createClass(SvelteComponentDev, [{
      key: "$destroy",
      value: function $destroy() {
        _get(_getPrototypeOf(SvelteComponentDev.prototype), "$destroy", this).call(this);

        this.$destroy = function () {
          console.warn("Component was already destroyed"); // eslint-disable-line no-console
        };
      }
    }, {
      key: "$capture_state",
      value: function $capture_state() {}
    }, {
      key: "$inject_state",
      value: function $inject_state() {}
    }]);

    return SvelteComponentDev;
  }(SvelteComponent);

  var file = "views/pk-slider.svelte";

  function add_css() {
    var style = element("style");
    style.id = "svelte-p0c3s2-style";
    style.textContent = ".pk-slider.svelte-p0c3s2.svelte-p0c3s2{width:100%;height:11px;position:relative;touch-action:pan-y;cursor:pointer}.pk-track.svelte-p0c3s2.svelte-p0c3s2{height:4px;background-color:grey;width:100%;position:absolute;left:0;top:4px;pointer-events:none}.pk-passed-track.svelte-p0c3s2.svelte-p0c3s2{height:4px;background-color:#fff;opacity:0.9;position:absolute;width:auto;left:0;right:100%;top:4px;pointer-events:none}.pk-lock-track.svelte-p0c3s2.svelte-p0c3s2{height:4px;position:absolute;width:auto;top:4px;pointer-events:none;background:repeating-linear-gradient( -45deg, #555, #555 7px, transparent 7px, transparent 12px )}.pk-thumb.svelte-p0c3s2.svelte-p0c3s2{width:10px;height:10px;background-color:#fff;opacity:0.9;border-radius:50%;position:absolute;left:0;top:1px;pointer-events:none;transition-duration:0.12s;transition-property:transform, background-color, border, -webkit-transform;transition-timing-function:ease;z-index:2;display:none}.pk-slider.svelte-p0c3s2:hover .pk-passed-track.svelte-p0c3s2,.pk-slider.svelte-p0c3s2:hover .pk-thumb.svelte-p0c3s2{opacity:1}.pk-slider.svelte-p0c3s2:hover .pk-thumb.svelte-p0c3s2,.pk-slider_dragging.svelte-p0c3s2 .pk-thumb.svelte-p0c3s2{display:block}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGstc2xpZGVyLnN2ZWx0ZSIsInNvdXJjZXMiOlsicGstc2xpZGVyLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxuaW1wb3J0IHsgY3JlYXRlRXZlbnREaXNwYXRjaGVyIH0gZnJvbSAnc3ZlbHRlJztcblxuY29uc3QgZGlzcGF0Y2ggPSBjcmVhdGVFdmVudERpc3BhdGNoZXIoKTtcbiAgICBcbmV4cG9ydCBsZXQgbWF4VmFsdWUgPSAxMDA7XG5leHBvcnQgbGV0IGN1cnJlbnRWYWx1ZSA9IDA7XG5leHBvcnQgbGV0IGxvY2tWYWx1ZSA9IG51bGw7XG5sZXQgc2xpZGVyU3R5bGUgPSAnJztcbmV4cG9ydCB7c2xpZGVyU3R5bGUgYXMgc3R5bGV9O1xuZXhwb3J0IGxldCBpc1RodW1iT25Ib3ZlciA9IHRydWU7XG5cbmxldCBzbGlkZXJFbGVtZW50ID0gbnVsbDtcbmxldCBjdXJyZW50VmFsdWVJblBlcmNlbnRzID0gMDtcbmxldCBsb2NrVmFsdWVJblBlcmNlbnRzID0gMTAwO1xubGV0IHRodW1iVmFsdWVJblBlcmNlbnRzID0gMDtcbiQ6IHtcbiAgICBjdXJyZW50VmFsdWVJblBlcmNlbnRzID0gKChjdXJyZW50VmFsdWUgLyBtYXhWYWx1ZSkgKiAxMDApLnRvRml4ZWQoNCk7XG4gICAgdGh1bWJWYWx1ZUluUGVyY2VudHMgPSAoKChjdXJyZW50VmFsdWUgLSA1KSAvIG1heFZhbHVlKSAqIDEwMCkudG9GaXhlZCg0KTtcbiAgICBsb2NrVmFsdWVJblBlcmNlbnRzID0gKChsb2NrVmFsdWUgLyBtYXhWYWx1ZSkgKiAxMDApLnRvRml4ZWQoNCk7XG59XG5cbmxldCBpc0RyYWdNb2RlT24gPSBmYWxzZTtcblxuZnVuY3Rpb24gc2V0Q3VycmVudFZhbHVlKHZhbHVlKSB7XG4gICAgaWYgKG51bGwgIT09IGxvY2tWYWx1ZSAmJiB2YWx1ZSA+IGxvY2tWYWx1ZSkge1xuICAgICAgICB2YWx1ZSA9IGxvY2tWYWx1ZTtcbiAgICB9XG4gICAgaWYgKHZhbHVlID4gbWF4VmFsdWUpIHtcbiAgICAgICAgdmFsdWUgPSBtYXhWYWx1ZTtcbiAgICB9IGVsc2UgaWYgKHZhbHVlIDwgMCkge1xuICAgICAgICB2YWx1ZSA9IDA7XG4gICAgfVxuICAgIGlmICggY3VycmVudFZhbHVlICE9IHZhbHVlICkge1xuICAgICAgICBjdXJyZW50VmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgZGlzcGF0Y2goJ3ZhbHVlY2hhbmdlZCcsIHsgY3VycmVudFZhbHVlOiBjdXJyZW50VmFsdWUgfSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBvbk1vdXNlRG93bk9uVHJhY2soZSkge1xuICAgIGxldCB2YWx1ZSA9IChtYXhWYWx1ZSAqIGUub2Zmc2V0WCkgLyBlLnRhcmdldC5jbGllbnRXaWR0aDtcbiAgICBpc0RyYWdNb2RlT24gPSB0cnVlO1xuICAgIHNldEN1cnJlbnRWYWx1ZSh2YWx1ZSk7XG59XG5mdW5jdGlvbiB0dXJuT2ZmRHJhZ01vZGUoKSB7XG4gICAgaXNEcmFnTW9kZU9uID0gZmFsc2U7XG59XG5mdW5jdGlvbiBvbk1vdXNlTW92ZShlKSB7XG4gICAgaWYgKGlzRHJhZ01vZGVPbikge1xuXG4gICAgICAgIGxldCB4ID0gZS5zY3JlZW5YO1xuICAgICAgICBsZXQgc2xpZGVyU2l6ZXMgPSBzbGlkZXJFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgICAgIGlmICggeCA8ICh3aW5kb3cuc2Nyb2xsWCArIHNsaWRlclNpemVzLmxlZnQpICkge1xuICAgICAgICAgICAgeCA9IDA7XG4gICAgICAgIH0gZWxzZSBpZiAoIHggPiAod2luZG93LnNjcm9sbFggKyBzbGlkZXJTaXplcy5yaWdodCkgKSB7XG4gICAgICAgICAgICB4ID0gc2xpZGVyU2l6ZXMucmlnaHQgLSBzbGlkZXJTaXplcy5sZWZ0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgeCA9IHggLSAoc2xpZGVyU2l6ZXMubGVmdCArIHdpbmRvdy5zY3JvbGxYKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgdmFsdWUgPSAobWF4VmFsdWUgKiB4KSAvIChzbGlkZXJTaXplcy5yaWdodCAtIHNsaWRlclNpemVzLmxlZnQpO1xuICAgICAgICBzZXRDdXJyZW50VmFsdWUodmFsdWUpO1xuICAgIH1cbn1cbjwvc2NyaXB0PlxuXG48c3R5bGU+XG4ucGstc2xpZGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDExcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvdWNoLWFjdGlvbjogcGFuLXk7XG4gICAgLyogY29udGFpbjogc2l6ZSBsYXlvdXQgc3R5bGU7ICovXG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnBrLXRyYWNrIHtcbiAgICBoZWlnaHQ6IDRweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogNHB4O1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuLnBrLXBhc3NlZC10cmFjayB7XG4gICAgaGVpZ2h0OiA0cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBvcGFjaXR5OiAwLjk7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDEwMCU7XG4gICAgdG9wOiA0cHg7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG4ucGstbG9jay10cmFjayB7XG4gICAgaGVpZ2h0OiA0cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIHRvcDogNHB4O1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIGJhY2tncm91bmQ6IHJlcGVhdGluZy1saW5lYXItZ3JhZGllbnQoIC00NWRlZywgIzU1NSwgIzU1NSA3cHgsIHRyYW5zcGFyZW50IDdweCwgdHJhbnNwYXJlbnQgMTJweCApO1xufVxuLnBrLXRodW1iIHtcbiAgICB3aWR0aDogMTBweDtcbiAgICBoZWlnaHQ6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBvcGFjaXR5OiAwLjk7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMXB4O1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMTJzO1xuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybSwgYmFja2dyb3VuZC1jb2xvciwgYm9yZGVyLCAtd2Via2l0LXRyYW5zZm9ybTtcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZTtcbiAgICB6LWluZGV4OiAyO1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG4ucGstc2xpZGVyOmhvdmVyIC5way1wYXNzZWQtdHJhY2ssIC5way1zbGlkZXI6aG92ZXIgLnBrLXRodW1iIHsgb3BhY2l0eTogMTsgfVxuLnBrLXNsaWRlcjpob3ZlciAucGstdGh1bWIsIC5way1zbGlkZXJfZHJhZ2dpbmcgLnBrLXRodW1iIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cbjwvc3R5bGU+XG5cbjxzdmVsdGU6Ym9keSBcbiAgICBvbjptb3VzZW1vdmU9e29uTW91c2VNb3ZlfVxuICAgIG9uOm1vdXNlbGVhdmU9e3R1cm5PZmZEcmFnTW9kZX1cbiAgICBvbjptb3VzZXVwPXt0dXJuT2ZmRHJhZ01vZGV9Lz5cblxuPGRpdiBjbGFzcz1cInBrLXNsaWRlclwiIGNsYXNzOnBrLXNsaWRlcl9kcmFnZ2luZz17aXNEcmFnTW9kZU9ufSBcbiAgICBzdHlsZT1cIntzbGlkZXJTdHlsZX1cIiBvbjptb3VzZWRvd258c3RvcFByb3BhZ2F0aW9uPXtvbk1vdXNlRG93bk9uVHJhY2t9XG4gICAgYmluZDp0aGlzPXtzbGlkZXJFbGVtZW50fT5cbiAgICA8ZGl2IGNsYXNzPVwicGstdHJhY2tcIj48L2Rpdj5cbiAgICB7I2lmIG51bGwgIT0gbG9ja1ZhbHVlfVxuICAgIDxkaXYgY2xhc3M9XCJway1sb2NrLXRyYWNrXCIgc3R5bGU9XCJsZWZ0OiB7bG9ja1ZhbHVlSW5QZXJjZW50c30lOyByaWdodDogMDtcIj48L2Rpdj5cbiAgICB7L2lmfVxuICAgIDxkaXYgY2xhc3M9XCJway1wYXNzZWQtdHJhY2tcIiBzdHlsZT1cInJpZ2h0OiB7MTAwIC0gY3VycmVudFZhbHVlSW5QZXJjZW50c30lO1wiPjwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJway10aHVtYlwiIHN0eWxlPVwibGVmdDogY2FsYyh7Y3VycmVudFZhbHVlSW5QZXJjZW50c30lIC0gNnB4KTsge2lzVGh1bWJPbkhvdmVyID8gJycgOiAnZGlzcGxheTogYmxvY2s7J31cIj48L2Rpdj5cbjwvZGl2PlxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1FQSxVQUFVLDRCQUFDLENBQUMsQUFDUixLQUFLLENBQUUsSUFBSSxDQUNYLE1BQU0sQ0FBRSxJQUFJLENBQ1osUUFBUSxDQUFFLFFBQVEsQ0FDbEIsWUFBWSxDQUFFLEtBQUssQ0FFbkIsTUFBTSxDQUFFLE9BQU8sQUFDbkIsQ0FBQyxBQUNELFNBQVMsNEJBQUMsQ0FBQyxBQUNQLE1BQU0sQ0FBRSxHQUFHLENBQ1gsZ0JBQWdCLENBQUUsSUFBSSxDQUN0QixLQUFLLENBQUUsSUFBSSxDQUNYLFFBQVEsQ0FBRSxRQUFRLENBQ2xCLElBQUksQ0FBRSxDQUFDLENBQ1AsR0FBRyxDQUFFLEdBQUcsQ0FDUixjQUFjLENBQUUsSUFBSSxBQUN4QixDQUFDLEFBQ0QsZ0JBQWdCLDRCQUFDLENBQUMsQUFDZCxNQUFNLENBQUUsR0FBRyxDQUNYLGdCQUFnQixDQUFFLElBQUksQ0FDdEIsT0FBTyxDQUFFLEdBQUcsQ0FDWixRQUFRLENBQUUsUUFBUSxDQUNsQixLQUFLLENBQUUsSUFBSSxDQUNYLElBQUksQ0FBRSxDQUFDLENBQ1AsS0FBSyxDQUFFLElBQUksQ0FDWCxHQUFHLENBQUUsR0FBRyxDQUNSLGNBQWMsQ0FBRSxJQUFJLEFBQ3hCLENBQUMsQUFDRCxjQUFjLDRCQUFDLENBQUMsQUFDWixNQUFNLENBQUUsR0FBRyxDQUNYLFFBQVEsQ0FBRSxRQUFRLENBQ2xCLEtBQUssQ0FBRSxJQUFJLENBQ1gsR0FBRyxDQUFFLEdBQUcsQ0FDUixjQUFjLENBQUUsSUFBSSxDQUNwQixVQUFVLENBQUUsMkJBQTJCLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxBQUN0RyxDQUFDLEFBQ0QsU0FBUyw0QkFBQyxDQUFDLEFBQ1AsS0FBSyxDQUFFLElBQUksQ0FDWCxNQUFNLENBQUUsSUFBSSxDQUNaLGdCQUFnQixDQUFFLElBQUksQ0FDdEIsT0FBTyxDQUFFLEdBQUcsQ0FDWixhQUFhLENBQUUsR0FBRyxDQUNsQixRQUFRLENBQUUsUUFBUSxDQUNsQixJQUFJLENBQUUsQ0FBQyxDQUNQLEdBQUcsQ0FBRSxHQUFHLENBQ1IsY0FBYyxDQUFFLElBQUksQ0FDcEIsbUJBQW1CLENBQUUsS0FBSyxDQUMxQixtQkFBbUIsQ0FBRSxTQUFTLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLGlCQUFpQixDQUMzRSwwQkFBMEIsQ0FBRSxJQUFJLENBQ2hDLE9BQU8sQ0FBRSxDQUFDLENBQ1YsT0FBTyxDQUFFLElBQUksQUFDakIsQ0FBQyxBQUNELHdCQUFVLE1BQU0sQ0FBQyw4QkFBZ0IsQ0FBRSx3QkFBVSxNQUFNLENBQUMsU0FBUyxjQUFDLENBQUMsQUFBQyxPQUFPLENBQUUsQ0FBQyxBQUFFLENBQUMsQUFDN0Usd0JBQVUsTUFBTSxDQUFDLHVCQUFTLENBQUUsaUNBQW1CLENBQUMsU0FBUyxjQUFDLENBQUMsQUFDdkQsT0FBTyxDQUFFLEtBQUssQUFDbEIsQ0FBQyJ9 */";
    append_dev(document.head, style);
  } // (135:4) {#if null != lockValue}


  function create_if_block(ctx) {
    var div;
    var block = {
      c: function create() {
        div = element("div");
        attr_dev(div, "class", "pk-lock-track svelte-p0c3s2");
        set_style(div, "left",
        /*lockValueInPercents*/
        ctx[5] + "%");
        set_style(div, "right", "0");
        add_location(div, file, 135, 4, 3419);
      },
      m: function mount(target, anchor) {
        insert_dev(target, div, anchor);
      },
      p: function update(ctx, dirty) {
        if (dirty &
        /*lockValueInPercents*/
        32) {
          set_style(div, "left",
          /*lockValueInPercents*/
          ctx[5] + "%");
        }
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(div);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_if_block.name,
      type: "if",
      source: "(135:4) {#if null != lockValue}",
      ctx: ctx
    });
    return block;
  }

  function create_fragment(ctx) {
    var t0;
    var div3;
    var div0;
    var t1;
    var t2;
    var div1;
    var t3;
    var div2;
    var div2_style_value;
    var dispose;
    var if_block = null !=
    /*lockValue*/
    ctx[0] && create_if_block(ctx);
    var block = {
      c: function create() {
        t0 = space();
        div3 = element("div");
        div0 = element("div");
        t1 = space();
        if (if_block) if_block.c();
        t2 = space();
        div1 = element("div");
        t3 = space();
        div2 = element("div");
        attr_dev(div0, "class", "pk-track svelte-p0c3s2");
        add_location(div0, file, 133, 4, 3358);
        attr_dev(div1, "class", "pk-passed-track svelte-p0c3s2");
        set_style(div1, "right", 100 -
        /*currentValueInPercents*/
        ctx[4] + "%");
        add_location(div1, file, 137, 4, 3515);
        attr_dev(div2, "class", "pk-thumb svelte-p0c3s2");
        attr_dev(div2, "style", div2_style_value = "left: calc(" +
        /*currentValueInPercents*/
        ctx[4] + "% - 6px); " + (
        /*isThumbOnHover*/
        ctx[2] ? "" : "display: block;"));
        add_location(div2, file, 138, 4, 3603);
        attr_dev(div3, "class", "pk-slider svelte-p0c3s2");
        attr_dev(div3, "style",
        /*sliderStyle*/
        ctx[1]);
        toggle_class(div3, "pk-slider_dragging",
        /*isDragModeOn*/
        ctx[6]);
        add_location(div3, file, 130, 0, 3183);
      },
      l: function claim(nodes) {
        throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
      },
      m: function mount(target, anchor, remount) {
        insert_dev(target, t0, anchor);
        insert_dev(target, div3, anchor);
        append_dev(div3, div0);
        append_dev(div3, t1);
        if (if_block) if_block.m(div3, null);
        append_dev(div3, t2);
        append_dev(div3, div1);
        append_dev(div3, t3);
        append_dev(div3, div2);
        /*div3_binding*/

        ctx[15](div3);
        if (remount) run_all(dispose);
        dispose = [listen_dev(document.body, "mousemove",
        /*onMouseMove*/
        ctx[9], false, false, false), listen_dev(document.body, "mouseleave",
        /*turnOffDragMode*/
        ctx[8], false, false, false), listen_dev(document.body, "mouseup",
        /*turnOffDragMode*/
        ctx[8], false, false, false), listen_dev(div3, "mousedown", stop_propagation(
        /*onMouseDownOnTrack*/
        ctx[7]), false, false, true)];
      },
      p: function update(ctx, _ref) {
        var _ref2 = _slicedToArray(_ref, 1),
            dirty = _ref2[0];

        if (null !=
        /*lockValue*/
        ctx[0]) {
          if (if_block) {
            if_block.p(ctx, dirty);
          } else {
            if_block = create_if_block(ctx);
            if_block.c();
            if_block.m(div3, t2);
          }
        } else if (if_block) {
          if_block.d(1);
          if_block = null;
        }

        if (dirty &
        /*currentValueInPercents*/
        16) {
          set_style(div1, "right", 100 -
          /*currentValueInPercents*/
          ctx[4] + "%");
        }

        if (dirty &
        /*currentValueInPercents, isThumbOnHover*/
        20 && div2_style_value !== (div2_style_value = "left: calc(" +
        /*currentValueInPercents*/
        ctx[4] + "% - 6px); " + (
        /*isThumbOnHover*/
        ctx[2] ? "" : "display: block;"))) {
          attr_dev(div2, "style", div2_style_value);
        }

        if (dirty &
        /*sliderStyle*/
        2) {
          attr_dev(div3, "style",
          /*sliderStyle*/
          ctx[1]);
        }

        if (dirty &
        /*isDragModeOn*/
        64) {
          toggle_class(div3, "pk-slider_dragging",
          /*isDragModeOn*/
          ctx[6]);
        }
      },
      i: noop,
      o: noop,
      d: function destroy(detaching) {
        if (detaching) detach_dev(t0);
        if (detaching) detach_dev(div3);
        if (if_block) if_block.d();
        /*div3_binding*/

        ctx[15](null);
        run_all(dispose);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_fragment.name,
      type: "component",
      source: "",
      ctx: ctx
    });
    return block;
  }

  function instance($$self, $$props, $$invalidate) {
    var dispatch = createEventDispatcher();
    var _$$props$maxValue = $$props.maxValue,
        maxValue = _$$props$maxValue === void 0 ? 100 : _$$props$maxValue;
    var _$$props$currentValue = $$props.currentValue,
        currentValue = _$$props$currentValue === void 0 ? 0 : _$$props$currentValue;
    var _$$props$lockValue = $$props.lockValue,
        lockValue = _$$props$lockValue === void 0 ? null : _$$props$lockValue;
    var _$$props$style = $$props.style,
        sliderStyle = _$$props$style === void 0 ? "" : _$$props$style;
    var _$$props$isThumbOnHov = $$props.isThumbOnHover,
        isThumbOnHover = _$$props$isThumbOnHov === void 0 ? true : _$$props$isThumbOnHov;
    var sliderElement = null;
    var currentValueInPercents = 0;
    var lockValueInPercents = 100;
    var thumbValueInPercents = 0;
    var isDragModeOn = false;

    function setCurrentValue(value) {
      if (null !== lockValue && value > lockValue) {
        value = lockValue;
      }

      if (value > maxValue) {
        value = maxValue;
      } else if (value < 0) {
        value = 0;
      }

      if (currentValue != value) {
        $$invalidate(10, currentValue = value);
        dispatch("valuechanged", {
          currentValue: currentValue
        });
      }
    }

    function onMouseDownOnTrack(e) {
      var value = maxValue * e.offsetX / e.target.clientWidth;
      $$invalidate(6, isDragModeOn = true);
      setCurrentValue(value);
    }

    function turnOffDragMode() {
      $$invalidate(6, isDragModeOn = false);
    }

    function onMouseMove(e) {
      if (isDragModeOn) {
        var x = e.screenX;
        var sliderSizes = sliderElement.getBoundingClientRect();

        if (x < window.scrollX + sliderSizes.left) {
          x = 0;
        } else if (x > window.scrollX + sliderSizes.right) {
          x = sliderSizes.right - sliderSizes.left;
        } else {
          x = x - (sliderSizes.left + window.scrollX);
        }

        var value = maxValue * x / (sliderSizes.right - sliderSizes.left);
        setCurrentValue(value);
      }
    }

    var writable_props = ["maxValue", "currentValue", "lockValue", "style", "isThumbOnHover"];
    Object.keys($$props).forEach(function (key) {
      if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Pk_slider> was created with unknown prop '".concat(key, "'"));
    });
    var _$$props$$$slots = $$props.$$slots,
        $$slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
        $$scope = $$props.$$scope;
    validate_slots("Pk_slider", $$slots, []);

    function div3_binding($$value) {
      binding_callbacks[$$value ? "unshift" : "push"](function () {
        $$invalidate(3, sliderElement = $$value);
      });
    }

    $$self.$set = function ($$props) {
      if ("maxValue" in $$props) $$invalidate(11, maxValue = $$props.maxValue);
      if ("currentValue" in $$props) $$invalidate(10, currentValue = $$props.currentValue);
      if ("lockValue" in $$props) $$invalidate(0, lockValue = $$props.lockValue);
      if ("style" in $$props) $$invalidate(1, sliderStyle = $$props.style);
      if ("isThumbOnHover" in $$props) $$invalidate(2, isThumbOnHover = $$props.isThumbOnHover);
    };

    $$self.$capture_state = function () {
      return {
        createEventDispatcher: createEventDispatcher,
        dispatch: dispatch,
        maxValue: maxValue,
        currentValue: currentValue,
        lockValue: lockValue,
        sliderStyle: sliderStyle,
        isThumbOnHover: isThumbOnHover,
        sliderElement: sliderElement,
        currentValueInPercents: currentValueInPercents,
        lockValueInPercents: lockValueInPercents,
        thumbValueInPercents: thumbValueInPercents,
        isDragModeOn: isDragModeOn,
        setCurrentValue: setCurrentValue,
        onMouseDownOnTrack: onMouseDownOnTrack,
        turnOffDragMode: turnOffDragMode,
        onMouseMove: onMouseMove
      };
    };

    $$self.$inject_state = function ($$props) {
      if ("maxValue" in $$props) $$invalidate(11, maxValue = $$props.maxValue);
      if ("currentValue" in $$props) $$invalidate(10, currentValue = $$props.currentValue);
      if ("lockValue" in $$props) $$invalidate(0, lockValue = $$props.lockValue);
      if ("sliderStyle" in $$props) $$invalidate(1, sliderStyle = $$props.sliderStyle);
      if ("isThumbOnHover" in $$props) $$invalidate(2, isThumbOnHover = $$props.isThumbOnHover);
      if ("sliderElement" in $$props) $$invalidate(3, sliderElement = $$props.sliderElement);
      if ("currentValueInPercents" in $$props) $$invalidate(4, currentValueInPercents = $$props.currentValueInPercents);
      if ("lockValueInPercents" in $$props) $$invalidate(5, lockValueInPercents = $$props.lockValueInPercents);
      if ("thumbValueInPercents" in $$props) thumbValueInPercents = $$props.thumbValueInPercents;
      if ("isDragModeOn" in $$props) $$invalidate(6, isDragModeOn = $$props.isDragModeOn);
    };

    if ($$props && "$$inject" in $$props) {
      $$self.$inject_state($$props.$$inject);
    }

    $$self.$$.update = function () {
      if ($$self.$$.dirty &
      /*currentValue, maxValue, lockValue*/
      3073) {
         {
          $$invalidate(4, currentValueInPercents = (currentValue / maxValue * 100).toFixed(4));
          thumbValueInPercents = ((currentValue - 5) / maxValue * 100).toFixed(4);
          $$invalidate(5, lockValueInPercents = (lockValue / maxValue * 100).toFixed(4));
        }
      }
    };

    return [lockValue, sliderStyle, isThumbOnHover, sliderElement, currentValueInPercents, lockValueInPercents, isDragModeOn, onMouseDownOnTrack, turnOffDragMode, onMouseMove, currentValue, maxValue, thumbValueInPercents, dispatch, setCurrentValue, div3_binding];
  }

  var Pk_slider = /*#__PURE__*/function (_SvelteComponentDev) {
    _inherits(Pk_slider, _SvelteComponentDev);

    var _super = _createSuper(Pk_slider);

    function Pk_slider(options) {
      var _this;

      _classCallCheck(this, Pk_slider);

      _this = _super.call(this, options);
      if (!document.getElementById("svelte-p0c3s2-style")) add_css();
      init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {
        maxValue: 11,
        currentValue: 10,
        lockValue: 0,
        style: 1,
        isThumbOnHover: 2
      });
      dispatch_dev("SvelteRegisterComponent", {
        component: _assertThisInitialized(_this),
        tagName: "Pk_slider",
        options: options,
        id: create_fragment.name
      });
      return _this;
    }

    _createClass(Pk_slider, [{
      key: "maxValue",
      get: function get() {
        throw new Error("<Pk_slider>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      },
      set: function set(value) {
        throw new Error("<Pk_slider>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      }
    }, {
      key: "currentValue",
      get: function get() {
        throw new Error("<Pk_slider>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      },
      set: function set(value) {
        throw new Error("<Pk_slider>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      }
    }, {
      key: "lockValue",
      get: function get() {
        throw new Error("<Pk_slider>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      },
      set: function set(value) {
        throw new Error("<Pk_slider>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      }
    }, {
      key: "style",
      get: function get() {
        throw new Error("<Pk_slider>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      },
      set: function set(value) {
        throw new Error("<Pk_slider>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      }
    }, {
      key: "isThumbOnHover",
      get: function get() {
        throw new Error("<Pk_slider>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      },
      set: function set(value) {
        throw new Error("<Pk_slider>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      }
    }]);

    return Pk_slider;
  }(SvelteComponentDev);

  var document_1 = globals.document,
      window_1 = globals.window;
  var file$1 = "views/pk-player.svelte";

  function add_css$1() {
    var style = element("style");
    style.id = "svelte-19ql4i0-style";
    style.textContent = ".pk-player.svelte-19ql4i0.svelte-19ql4i0{background-color:#27303C;width:100%;box-sizing:border-box;padding:10px 15px;display:flex;flex-direction:column;border-radius:6px;box-shadow:inset 0 0 3px rgba(0,0,0, 0.4), 0 0 1px rgba(255, 255, 255, 0.2)\n}.pk-button.svelte-19ql4i0.svelte-19ql4i0{padding:0;margin:0;background-color:transparent;border:none;cursor:pointer;line-height:0}.pk-button.svelte-19ql4i0:hover svg.svelte-19ql4i0{fill-opacity:0.8}.pk-button.svelte-19ql4i0:active svg.svelte-19ql4i0{fill-opacity:0.5;transform:scale(0.95)}.pk-button.svelte-19ql4i0.svelte-19ql4i0:focus{outline:none}.pk-player__volume.svelte-19ql4i0.svelte-19ql4i0{width:fit-content;display:flex;align-items:center;width:80px}.pk-player__time.svelte-19ql4i0.svelte-19ql4i0{font-family:Arial, Helvetica, sans-serif;font-size:14px;line-height:1em;font-weight:none;color:#fff;margin-bottom:10px}.pk-player__times.svelte-19ql4i0.svelte-19ql4i0{display:flex;justify-content:space-between}.pk-player__controls.svelte-19ql4i0.svelte-19ql4i0{display:flex;justify-content:space-between;align-items:center}.pk-player__controls.svelte-19ql4i0>button.svelte-19ql4i0,.pk-player__controls.svelte-19ql4i0>div.svelte-19ql4i0{margin-left:20px}.pk-player__controls.svelte-19ql4i0>button.svelte-19ql4i0:first-child{margin-left:0}.pk-speed-button.svelte-19ql4i0.svelte-19ql4i0{margin-left:auto !important;text-align:right}@keyframes svelte-19ql4i0-pk-slidein__bottom{from{bottom:-140px}to{bottom:0}}@keyframes svelte-19ql4i0-pk-slideout__bottom{from{bottom:0}to{bottom:-140px}}.pk-player__mini.svelte-19ql4i0.svelte-19ql4i0{position:fixed;z-index:99999;width:auto;left:50%;border-bottom-left-radius:0;border-bottom-right-radius:0;transform:translateX(-50%)}.pk-player__mini--slidein.svelte-19ql4i0.svelte-19ql4i0{bottom:0;animation-duration:1s;animation-name:svelte-19ql4i0-pk-slidein__bottom}.pk-player__mini--slideout.svelte-19ql4i0.svelte-19ql4i0{bottom:-140px;animation-duration:0.2s;animation-name:svelte-19ql4i0-pk-slideout__bottom}.pk-player__mini.svelte-19ql4i0 .pk-player__time.svelte-19ql4i0{display:none}.pk-player__mini.svelte-19ql4i0 .pk-speed-button.svelte-19ql4i0{flex-grow:0;text-align:center}@media all and (max-width: 480px){.pk-player__mini.svelte-19ql4i0.svelte-19ql4i0{width:100%}.pk-player__mini.svelte-19ql4i0 .pk-player__volume.svelte-19ql4i0,.pk-player.svelte-19ql4i0 .pk-player__volume.svelte-19ql4i0{display:none}.pk-speed-button.svelte-19ql4i0.svelte-19ql4i0{flex-grow:0;text-align:center}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGstcGxheWVyLnN2ZWx0ZSIsInNvdXJjZXMiOlsicGstcGxheWVyLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxuaW1wb3J0IHsgb25Nb3VudCB9IGZyb20gJ3N2ZWx0ZSc7XG5pbXBvcnQgU2xpZGVyIGZyb20gJy4vcGstc2xpZGVyLnN2ZWx0ZSc7XG5cbmV4cG9ydCBsZXQgYXVkaW9VUkwgPSBudWxsO1xuZXhwb3J0IGxldCBsb2NrQXVkaW9VUkwgPSBudWxsO1xuZXhwb3J0IGxldCBsb2NrVGltZUluU2Vjb25kcyA9IG51bGw7XG5leHBvcnQgbGV0IHRleHRUcmFuc2xhdGlvbnMgPSB7fTtcblxubGV0IHBsYXllclN0eWxlID0gJyc7XG5leHBvcnQge3BsYXllclN0eWxlIGFzIHN0eWxlfTtcbmV4cG9ydCBsZXQgcGxheWVyTWluaU9mZiA9IGZhbHNlO1xubGV0IGlzUGxheWVyTWluaSA9IGZhbHNlO1xubGV0IGlzUGxheWVyTWluaVNob3duID0gZmFsc2U7XG5sZXQgaXNQbGF5U3RhcnRlZCA9IGZhbHNlO1xuXG5leHBvcnQgbGV0IGN1cnJlbnRUaW1lSW5TZWNvbmRzID0gMDtcblxubGV0IGVuZFRpbWVJblNlY29uZHMgPSAwO1xubGV0IGF1ZGlvU3BlZWQgPSAxO1xubGV0IGF1ZGlvVm9sdW1lID0gMTtcbmxldCBpc1BsYXlpbmcgPSBmYWxzZTtcblxubGV0IGN1cnJlbnRUaW1lU3RyaW5nO1xubGV0IGVuZFRpbWVTdHJpbmc7XG4kOiB7XG4gICAgZW5kVGltZVN0cmluZyA9IHNlY29uZHNUb1RpbWUoZW5kVGltZUluU2Vjb25kcyk7XG4gICAgY3VycmVudFRpbWVTdHJpbmcgPSBzZWNvbmRzVG9UaW1lKGN1cnJlbnRUaW1lSW5TZWNvbmRzKTtcbn1cblxubGV0IHBsYXllcldyYXBwZXJFbGVtZW50ID0gbnVsbDtcbmxldCBwbGF5ZXJFbGVtZW50ID0gbnVsbDtcbmxldCBhdWRpb0VsZW1lbnQgPSBudWxsO1xubGV0IGxvY2tBdWRpb0VsZW1lbnQgPSBudWxsO1xuXG5vbk1vdW50KCgpID0+IHtcblxuICAgIGF1ZGlvRWxlbWVudCA9IHBsYXllcldyYXBwZXJFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5way1wbGF5ZXJfX2F1ZGlvJyk7XG4gICAgaWYgKCBudWxsICE9PSBsb2NrQXVkaW9VUkwgJiYgJycgIT09IGxvY2tBdWRpb1VSTCApIHtcbiAgICAgICAgbG9ja0F1ZGlvRWxlbWVudCA9IHBsYXllcldyYXBwZXJFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5way1wbGF5ZXJfX2xvY2stYXVkaW8nKTtcbiAgICB9XG4gICAgY2hlY2tJc1BsYXllckhhc1RvQmVNaW5pKCk7XG59KTtcblxubGV0IGlzTG9ja1BsYXlNb2RlT24gPSBmYWxzZTtcblxuZXhwb3J0IGZ1bmN0aW9uIHBsYXlJZlBhdXNlZCgpIHtcbiAgICBpZiAoICFpc1BsYXlpbmcgKSB7XG4gICAgICAgIHBsYXlPclBhdXNlQXVkaW8oIHRydWUgKTtcbiAgICB9XG59XG5mdW5jdGlvbiBwbGF5T3JQYXVzZUF1ZGlvKGlzUGxheVBhdXNlQnV0dG9uUHJlc3NlZCA9IHRydWUpIHsgXG5cbiAgICBpZiAoIGlzTG9ja1BsYXlNb2RlT24gKSB7XG5cbiAgICAgICAgaWYgKCBpc1BsYXlpbmcgICYmICFpc1BsYXlQYXVzZUJ1dHRvblByZXNzZWQgKSB7XG5cbiAgICAgICAgICAgIC8vIHN0YXJ0IHBsYXlpbmcgbG9jayBhdWRpbyBhbmQgY29udGludWUgaWYgY3VycmVudCB0aW1lIG9mIHJlYWwgYXVkaW8gc3RpbCBjaGFuZ2luZ1xuICAgICAgICAgICAgYXVkaW9FbGVtZW50LnBhdXNlKCk7XG4gICAgICAgICAgICBpc1BsYXlpbmcgPSBmYWxzZTtcblxuICAgICAgICAgICAgaWYgKCBudWxsICE9PSBsb2NrQXVkaW9FbGVtZW50ICkge1xuXG4gICAgICAgICAgICAgICAgaWYgKCBsb2NrQXVkaW9FbGVtZW50LnBhdXNlZCApIHtcbiAgICAgICAgICAgICAgICAgICAgbG9ja0F1ZGlvRWxlbWVudC5wbGF5KCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaXNQbGF5aW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9IGVsc2UgaWYgKCBudWxsID09PSBsb2NrQXVkaW9FbGVtZW50ICkge1xuXG4gICAgICAgICAgICBpc1BsYXlpbmcgPSBmYWxzZTtcblxuICAgICAgICB9IGVsc2UgaWYgKCBpc1BsYXlpbmcgKSB7XG5cbiAgICAgICAgICAgIGxvY2tBdWRpb0VsZW1lbnQucGF1c2UoKTtcbiAgICAgICAgICAgIGlzUGxheWluZyA9IGZhbHNlO1xuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIGxvY2tBdWRpb0VsZW1lbnQucGxheSgpO1xuICAgICAgICAgICAgaXNQbGF5aW5nID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgXG4gICAgfSBlbHNlIHtcblxuICAgICAgICBpZiAoIGlzUGxheWluZyAmJiBudWxsICE9PSBsb2NrQXVkaW9FbGVtZW50ICYmICFsb2NrQXVkaW9FbGVtZW50LnBhdXNlZCApIHtcblxuICAgICAgICAgICAgbG9ja0F1ZGlvRWxlbWVudC5wYXVzZSgpO1xuICAgICAgICAgICAgbG9ja0F1ZGlvRWxlbWVudC5jdXJyZW50VGltZSA9IDA7XG5cbiAgICAgICAgICAgIGF1ZGlvRWxlbWVudC5wbGF5KCk7XG4gICAgICAgICAgICBpc1BsYXlpbmcgPSB0cnVlO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoIGlzUGxheWluZyApIHtcbiAgICAgICAgICAgIGF1ZGlvRWxlbWVudC5wYXVzZSgpO1xuICAgICAgICAgICAgaXNQbGF5aW5nID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhdWRpb0VsZW1lbnQucGxheSgpO1xuICAgICAgICAgICAgaXNQbGF5aW5nID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoICFpc1BsYXlTdGFydGVkICYmIGlzUGxheWluZyApIHtcbiAgICAgICAgaXNQbGF5U3RhcnRlZCA9IHRydWU7XG4gICAgICAgIGNoZWNrSXNQbGF5ZXJIYXNUb0JlTWluaSgpO1xuICAgIH1cbn1cblxubGV0IGlzTG9ja1BsYXlNb2RlT25DaGFuZ2VkID0gZmFsc2U7XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVQbGF5ZXJDdXJyZW50VGltZShuZXdUaW1lSW5TZWNvbmRzLCBpc0Zyb21BdWRpbyA9IGZhbHNlKSB7XG5cbiAgICBuZXdUaW1lSW5TZWNvbmRzID0gTnVtYmVyKCBuZXdUaW1lSW5TZWNvbmRzICk7XG5cbiAgICBpZiAoICFpc05hTihuZXdUaW1lSW5TZWNvbmRzKSApIHtcblxuICAgICAgICBpZiAobnVsbCAhPT0gbG9ja1RpbWVJblNlY29uZHMgJiYgbmV3VGltZUluU2Vjb25kcyA+IGxvY2tUaW1lSW5TZWNvbmRzKSB7XG5cbiAgICAgICAgICAgIGN1cnJlbnRUaW1lSW5TZWNvbmRzID0gbG9ja1RpbWVJblNlY29uZHM7XG4gICAgICAgICAgICBhdWRpb0VsZW1lbnQuY3VycmVudFRpbWUgPSBjdXJyZW50VGltZUluU2Vjb25kcztcblxuICAgICAgICB9IGVsc2UgaWYgKG5ld1RpbWVJblNlY29uZHMgPiBlbmRUaW1lSW5TZWNvbmRzKSB7XG4gICAgXG4gICAgICAgICAgICBjdXJyZW50VGltZUluU2Vjb25kcyA9IGVuZFRpbWVJblNlY29uZHM7XG4gICAgICAgICAgICBhdWRpb0VsZW1lbnQuY3VycmVudFRpbWUgPSBjdXJyZW50VGltZUluU2Vjb25kcztcblxuICAgICAgICB9IGVsc2UgaWYgKG5ld1RpbWVJblNlY29uZHMgPCAwKSB7XG5cbiAgICAgICAgICAgIGN1cnJlbnRUaW1lSW5TZWNvbmRzID0gMDtcbiAgICAgICAgICAgIGF1ZGlvRWxlbWVudC5jdXJyZW50VGltZSA9IGN1cnJlbnRUaW1lSW5TZWNvbmRzO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjdXJyZW50VGltZUluU2Vjb25kcyA9IG5ld1RpbWVJblNlY29uZHM7XG4gICAgICAgICAgICBpZiAoICFpc0Zyb21BdWRpbyApIHtcbiAgICAgICAgICAgICAgICBhdWRpb0VsZW1lbnQuY3VycmVudFRpbWUgPSBjdXJyZW50VGltZUluU2Vjb25kcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlzTG9ja1BsYXlNb2RlT25DaGFuZ2VkID0gaXNMb2NrUGxheU1vZGVPbiAhPT0gKCBudWxsICE9PSBsb2NrVGltZUluU2Vjb25kcyAmJlxuICAgICAgICAgICAgY3VycmVudFRpbWVJblNlY29uZHMgPj0gbG9ja1RpbWVJblNlY29uZHMgKTtcblxuICAgICAgICBpc0xvY2tQbGF5TW9kZU9uID0gaXNMb2NrUGxheU1vZGVPbkNoYW5nZWQgPyAhaXNMb2NrUGxheU1vZGVPbiA6IGlzTG9ja1BsYXlNb2RlT247XG4gICAgICAgIFxuICAgICAgICBpZiAoaXNQbGF5aW5nICYmIChjdXJyZW50VGltZUluU2Vjb25kcyA+PSBlbmRUaW1lSW5TZWNvbmRzIHx8IFxuICAgICAgICAgICAgKG51bGwgIT09IGxvY2tUaW1lSW5TZWNvbmRzICYmIGN1cnJlbnRUaW1lSW5TZWNvbmRzID49IGxvY2tUaW1lSW5TZWNvbmRzKSB8fFxuICAgICAgICAgICAgaXNMb2NrUGxheU1vZGVPbkNoYW5nZWQgKSApIHtcblxuICAgICAgICAgICAgcGxheU9yUGF1c2VBdWRpbyhmYWxzZSk7IFxuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBzZWNvbmRzVG9UaW1lKCBzZWNzICkge1xuICAgIHNlY3MgPSBNYXRoLnJvdW5kKHNlY3MpO1xuICAgIGxldCBob3VycyA9IE1hdGguZmxvb3Ioc2VjcyAvICg2MCAqIDYwKSk7XG5cbiAgICBsZXQgZGl2aXNvckZvck1pbnV0ZXMgPSBzZWNzICUgKDYwICogNjApO1xuICAgIGxldCBtaW51dGVzID0gTWF0aC5mbG9vcihkaXZpc29yRm9yTWludXRlcyAvIDYwKTtcblxuICAgIGxldCBkaXZpc29yRm9yU2Vjb25kcyA9IGRpdmlzb3JGb3JNaW51dGVzICUgNjA7XG4gICAgbGV0IHNlY29uZHMgPSBNYXRoLmNlaWwoZGl2aXNvckZvclNlY29uZHMpO1xuXG4gICAgbGV0IHJlc3VsdCA9ICcnO1xuICAgIGlmICgwIDwgaG91cnMpIHtcbiAgICAgICAgcmVzdWx0ID0gKDEwID4gaG91cnMgPyAnMCcgOiAnJykgKyBob3VycyArICc6JztcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQgPSAnMDA6JztcbiAgICB9XG4gICAgcmVzdWx0ICs9ICgxMCA+IG1pbnV0ZXMgPyAnMCcgOiAnJykgKyBtaW51dGVzICsgJzonICsgKDEwID4gc2Vjb25kcyA/ICcwJyA6ICcnKSArIHNlY29uZHM7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gb25TcGVlZENsaWNrKCkge1xuICAgIGlmICgxID09IGF1ZGlvU3BlZWQpIHtcbiAgICAgICAgYXVkaW9TcGVlZCA9IDEuMjU7XG4gICAgfSBlbHNlIGlmICgxLjI1ID09IGF1ZGlvU3BlZWQpIHtcbiAgICAgICAgYXVkaW9TcGVlZCA9IDEuNTtcbiAgICB9IGVsc2UgaWYgKDEuNSA9PSBhdWRpb1NwZWVkKSB7XG4gICAgICAgIGF1ZGlvU3BlZWQgPSAxLjc1O1xuICAgIH0gZWxzZSBpZiAoMS43NSA9PSBhdWRpb1NwZWVkKSB7XG4gICAgICAgIGF1ZGlvU3BlZWQgPSAyO1xuICAgIH0gZWxzZSBpZiAoMiA9PSBhdWRpb1NwZWVkKSB7XG4gICAgICAgIGF1ZGlvU3BlZWQgPSAxO1xuICAgIH1cbiAgICBhdWRpb0VsZW1lbnQucGxheWJhY2tSYXRlID0gYXVkaW9TcGVlZDtcbn1cblxuZnVuY3Rpb24gb25Wb2x1bWVTbGlkZXJDaGFuZ2VkKGUpIHtcbiAgICBpZiAoYXVkaW9Wb2x1bWUgIT0gZS5kZXRhaWwuY3VycmVudFZhbHVlKSB7XG4gICAgICAgIGF1ZGlvVm9sdW1lID0gZS5kZXRhaWwuY3VycmVudFZhbHVlO1xuICAgICAgICBhdWRpb0VsZW1lbnQudm9sdW1lID0gYXVkaW9Wb2x1bWU7XG4gICAgICAgIGlmIChudWxsICE9PSBsb2NrQXVkaW9FbGVtZW50KSB7XG4gICAgICAgICAgICBsb2NrQXVkaW9FbGVtZW50LnZvbHVtZSA9IGF1ZGlvVm9sdW1lO1xuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gb25Wb2x1bWVCdXR0b25DbGljaygpIHtcbiAgICBpZiAoIDAgPT0gYXVkaW9Wb2x1bWUgKSB7XG4gICAgICAgIGF1ZGlvVm9sdW1lID0gMTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBhdWRpb1ZvbHVtZSA9IDA7XG4gICAgfVxuICAgIGF1ZGlvRWxlbWVudC52b2x1bWUgPSBhdWRpb1ZvbHVtZTtcbiAgICBpZiAobnVsbCAhPT0gbG9ja0F1ZGlvRWxlbWVudCkge1xuICAgICAgICBsb2NrQXVkaW9FbGVtZW50LnZvbHVtZSA9IGF1ZGlvVm9sdW1lO1xuICAgIH1cbn1cblxubGV0IGlzUGFnZVNjcm9sbGVkVG9Cb3R0b20gPSBmYWxzZTtcbmZ1bmN0aW9uIGNoZWNrSXNQbGF5ZXJIYXNUb0JlTWluaSgpIHtcblxuICAgIGlmICggIXBsYXllck1pbmlPZmYgJiYgaXNQbGF5U3RhcnRlZCApIHtcblxuICAgICAgICBsZXQgcG9zaXRpb24gPSBwbGF5ZXJXcmFwcGVyRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgbGV0IHZpZXdIZWlnaHQgPSBNYXRoLm1heChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0LCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xuICAgICAgICBpc1BsYXllck1pbmkgPSAocG9zaXRpb24uYm90dG9tIDwgMCB8fCBwb3NpdGlvbi50b3AgLSB2aWV3SGVpZ2h0ID49IDApO1xuXG4gICAgICAgIGxldCBkb2N1bWVudEhlaWdodCA9IE1hdGgubWF4KCBkb2N1bWVudC5ib2R5LnNjcm9sbEhlaWdodCwgZG9jdW1lbnQuYm9keS5vZmZzZXRIZWlnaHQsIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQsIFxuICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodCwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Lm9mZnNldEhlaWdodCApO1xuICAgICAgICBpc1BhZ2VTY3JvbGxlZFRvQm90dG9tID0gKHZpZXdIZWlnaHQgKyB3aW5kb3cuc2Nyb2xsWSArIDIwKSA+PSBkb2N1bWVudEhlaWdodDtcbiAgICB9XG59XG5cbjwvc2NyaXB0PlxuXG48c3R5bGU+XG4ucGstcGxheWVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjczMDNDO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDNweCByZ2JhKDAsMCwwLCAwLjQpLCAwIDAgMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKVxufVxuLnBrLWJ1dHRvbiB7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBsaW5lLWhlaWdodDogMDtcbn1cbi5way1idXR0b246aG92ZXIgc3ZnIHtcbiAgICBmaWxsLW9wYWNpdHk6IDAuODtcbn1cbi5way1idXR0b246YWN0aXZlIHN2ZyB7XG4gICAgZmlsbC1vcGFjaXR5OiAwLjU7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcbn1cbi8qKiBUT0RPOiDQtNC70Y8g0YTQvtC60YPRgdCwINC/0L7RgdC70LUg0L3QsNC20LDRgtC40Y8g0L3QsCDQutC70LDQstC1INC90LDQtNC+INGA0LDQvNC60YMg0L/QvtC60LDQt9GL0LLQsNGC0YwgXG7RgtC/0LjRh9C90YPRjiDQstC+0LrRgNGD0LMg0Y3Qu9C10LzQtdC90YLQvtCyINCwINC/0L7RgdC70LUg0LrQu9C40LrQsCDQvNGL0YjQutC+0Lkg0LjQu9C4INGC0LDRh9CwINC/0YDRj9GC0LDRgtGMICovXG4ucGstYnV0dG9uOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuLnBrLXBsYXllcl9fdm9sdW1lIHsgd2lkdGg6IGZpdC1jb250ZW50OyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyB3aWR0aDogODBweDsgfVxuXG4ucGstcGxheWVyX190aW1lIHtcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDFlbTtcbiAgICBmb250LXdlaWdodDogbm9uZTtcbiAgICBjb2xvcjogI2ZmZjsgXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5way1wbGF5ZXJfX3RpbWVzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5way1wbGF5ZXJfX2NvbnRyb2xzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnBrLXBsYXllcl9fY29udHJvbHMgPiBidXR0b24sIC5way1wbGF5ZXJfX2NvbnRyb2xzID4gZGl2IHsgbWFyZ2luLWxlZnQ6IDIwcHg7IH1cbi5way1wbGF5ZXJfX2NvbnRyb2xzID4gYnV0dG9uOmZpcnN0LWNoaWxkIHsgbWFyZ2luLWxlZnQ6IDA7IH1cblxuLnBrLXNwZWVkLWJ1dHRvbiB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG8gIWltcG9ydGFudDtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuQGtleWZyYW1lcyBway1zbGlkZWluX19ib3R0b20ge1xuICAgIGZyb20ge1xuICAgICAgICBib3R0b206IC0xNDBweDtcbiAgICB9XG4gICAgdG8ge1xuICAgICAgICBib3R0b206IDA7XG4gICAgfVxufVxuQGtleWZyYW1lcyBway1zbGlkZW91dF9fYm90dG9tIHtcbiAgICBmcm9tIHtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgIH1cbiAgICB0byB7XG4gICAgICAgIGJvdHRvbTogLTE0MHB4O1xuICAgIH1cbn1cblxuLnBrLXBsYXllcl9fbWluaSB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHotaW5kZXg6IDk5OTk5O1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGxlZnQ6IDUwJTtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbn1cbi5way1wbGF5ZXJfX21pbmktLXNsaWRlaW4ge1xuICAgIGJvdHRvbTogMDtcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xuICAgIGFuaW1hdGlvbi1uYW1lOiBway1zbGlkZWluX19ib3R0b207XG59XG4ucGstcGxheWVyX19taW5pLS1zbGlkZW91dCB7XG4gICAgYm90dG9tOiAtMTQwcHg7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjJzO1xuICAgIGFuaW1hdGlvbi1uYW1lOiBway1zbGlkZW91dF9fYm90dG9tO1xufVxuLnBrLXBsYXllcl9fbWluaSAucGstcGxheWVyX190aW1lIHsgZGlzcGxheTogbm9uZTsgfVxuLnBrLXBsYXllcl9fbWluaSAucGstc3BlZWQtYnV0dG9uIHsgZmxleC1ncm93OiAwOyB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cblxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgICAucGstcGxheWVyX19taW5pIHsgd2lkdGg6IDEwMCU7IH1cbiAgICAucGstcGxheWVyX19taW5pIC5way1wbGF5ZXJfX3ZvbHVtZSxcbiAgICAucGstcGxheWVyIC5way1wbGF5ZXJfX3ZvbHVtZSB7IGRpc3BsYXk6IG5vbmU7IH1cbiAgICAucGstc3BlZWQtYnV0dG9uIHsgZmxleC1ncm93OiAwOyB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cbn1cbjwvc3R5bGU+XG5cbjxzdmVsdGU6d2luZG93IG9uOnNjcm9sbHxjYXB0dXJlPXtjaGVja0lzUGxheWVySGFzVG9CZU1pbml9Lz5cblxuPGRpdiBjbGFzcz1cInBrLXBsYXllci13cmFwcGVyXCIgYmluZDp0aGlzPXtwbGF5ZXJXcmFwcGVyRWxlbWVudH0gc3R5bGU9XCJ7cGxheWVyU3R5bGV9bWluLWhlaWdodDogMTA0cHg7IHdpZHRoOiAxMDAlOyBtYXJnaW46IDMwcHggYXV0bzsgYm94LXNpemluZzogYm9yZGVyLWJveDtcIj5cbiAgICA8ZGl2IGJpbmQ6dGhpcz17cGxheWVyRWxlbWVudH0gXG4gICAgICAgIGNsYXNzPVwicGstcGxheWVyIHtpc1BsYXllck1pbmkgPyAncGstcGxheWVyX19taW5pIHBrLXBsYXllcl9fbWluaS0tc2xpZGVpbicgOiAoaXNQbGF5ZXJNaW5pU2hvd24gPyAncGstcGxheWVyX19taW5pIHBrLXBsYXllcl9fbWluaS0tc2xpZGVvdXQnIDogJycgKX1cIiBcbiAgICAgICAgc3R5bGU9XCJkaXNwbGF5OiB7aXNQYWdlU2Nyb2xsZWRUb0JvdHRvbSA/ICdub25lJyA6ICdmbGV4J307XCJcbiAgICAgICAgb246YW5pbWF0aW9uZW5kPVwieyhlKT0+eyBcbiAgICAgICAgICAgIGlmIChpc1BsYXllck1pbmkpIHsgXG4gICAgICAgICAgICAgICAgaXNQbGF5ZXJNaW5pU2hvd24gPSB0cnVlOyBcbiAgICAgICAgICAgIH0gZWxzZSB7IFxuICAgICAgICAgICAgICAgIGlzUGxheWVyTWluaVNob3duID0gZmFsc2U7IFxuICAgICAgICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ3BrLXBsYXllcl9fbWluaScsICdway1wbGF5ZXJfX21pbmktLXNsaWRlb3V0Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH19XCI+XG5cbiAgICAgICAgPGF1ZGlvIGNsYXNzPVwicGstcGxheWVyX19hdWRpb1wiIHNyYz1cInthdWRpb1VSTH1cIiBwcmVsb2FkPVwiYXV0b1wiXG4gICAgICAgICAgICBvbjp0aW1ldXBkYXRlPXsgKCk9Pnt1cGRhdGVQbGF5ZXJDdXJyZW50VGltZShhdWRpb0VsZW1lbnQuY3VycmVudFRpbWUsIHRydWUpO30gfSBcbiAgICAgICAgICAgIG9uOmxvYWRlZG1ldGFkYXRhPXsgKCk9PntlbmRUaW1lSW5TZWNvbmRzID0gYXVkaW9FbGVtZW50LmR1cmF0aW9uO30gfT5cbiAgICAgICAgPC9hdWRpbz5cbiAgICAgICAgeyNpZiBudWxsICE9PSBsb2NrQXVkaW9VUkwgJiYgJycgIT09IGxvY2tBdWRpb1VSTH1cbiAgICAgICAgPGF1ZGlvIGNsYXNzPVwicGstcGxheWVyX19sb2NrLWF1ZGlvXCIgc3JjPVwie2xvY2tBdWRpb1VSTH1cIiBwcmVsb2FkPVwiYXV0b1wiPjwvYXVkaW8+XG4gICAgICAgIHsvaWZ9XG4gICAgICAgIDxTbGlkZXIgc3R5bGU9XCJtYXJnaW4tYm90dG9tOiA1cHg7XCIgXG4gICAgICAgICAgY3VycmVudFZhbHVlPXtjdXJyZW50VGltZUluU2Vjb25kc30gXG4gICAgICAgICAgbWF4VmFsdWU9e2VuZFRpbWVJblNlY29uZHN9IFxuICAgICAgICAgIG9uOnZhbHVlY2hhbmdlZD17IChlKT0+e3VwZGF0ZVBsYXllckN1cnJlbnRUaW1lKGUuZGV0YWlsLmN1cnJlbnRWYWx1ZSk7fSB9IFxuICAgICAgICAgIGxvY2tWYWx1ZT17bG9ja1RpbWVJblNlY29uZHN9Lz5cbiAgICAgICAgPGRpdiBjbGFzcz1cInBrLXBsYXllcl9fdGltZXNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJway1wbGF5ZXJfX3RpbWVcIiBzdHlsZT1cInRleHQtYWxpZ246IGxlZnQ7XCI+e2N1cnJlbnRUaW1lU3RyaW5nfTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBrLXBsYXllcl9fdGltZVwiIHN0eWxlPVwidGV4dC1hbGlnbjogcmlnaHQ7XCI+e2VuZFRpbWVTdHJpbmd9PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJway1wbGF5ZXJfX2NvbnRyb2xzXCI+XG5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJway1idXR0b25cIiB0aXRsZT1cInt0ZXh0VHJhbnNsYXRpb25zLmJhY2t3YXJkfVwiXG4gICAgICAgICAgICAgICAgb246Y2xpY2t8cHJldmVudERlZmF1bHR8c3RvcFByb3BhZ2F0aW9uPXsgKCk9Pnt1cGRhdGVQbGF5ZXJDdXJyZW50VGltZShjdXJyZW50VGltZUluU2Vjb25kcyAtIDE1KTt9IH0+XG4gICAgICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjM2XCIgaGVpZ2h0PVwiNDBcIiB2aWV3Qm94PVwiMCAwIDM2IDQwXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGQ9XCJNMTcuOTMgNDBDOC4wNzQgNDAgLjA5MSAzMi4wMTcuMDkxIDIyLjE2SDQuNTVjMCA3LjM4MSA1Ljk5OSAxMy4zODEgMTMuMzggMTMuMzgxIDcuMzgyIDAgMTMuMzc5LTYgMTMuMzc5LTEzLjM4MVMyNS4zMTIgOC43ODEgMTcuOTMgOC43ODF2NC40NTlMOS45ODUgNi41NTEgMTcuOTMgMHY0LjMyYzkuODU3IDAgMTcuODQgNy45ODQgMTcuODQgMTcuODQgMCA5Ljg1Ny03Ljk4MyAxNy44NC0xNy44NCAxNy44NHptMy44NDItMTAuNzkzYy0xLjEyMyAwLTIuMDM4LS4zMDEtMi43NDYtLjkwNC0uNzA4LS42MDMtMS4xMzMtMS40MTQtMS4yNzEtMi40MzJsMi4zMjQtLjI0MmMuMDY2LjUyNi4yNjMuOTQzLjU5IDEuMjUuMzI2LjMwNy43MDIuNDYxIDEuMTI5LjQ2MS40ODcgMCAuODk4LS4xOTggMS4yMzYtLjU5NC4zMzctLjM5Ni41MDgtLjk5Mi41MDgtMS43ODkgMC0uNzQ3LS4xNjctMS4zMDYtLjUwMi0xLjY4LS4zMzUtLjM3My0uNzcyLS41Ni0xLjMwOS0uNTYtLjY2OSAwLTEuMjY5LjI5Ni0xLjgwMS44ODhsLTEuODkyLS4yNzUgMS4xOTUtNi4zMzRoNi4xNjh2Mi4xODRoLTQuNGwtLjM2NiAyLjA2NmMuNTIxLS4yNiAxLjA1Mi0uMzg5IDEuNTk0LS4zODkgMS4wMzUgMCAxLjkxMi4zNzcgMi42MzEgMS4xMjkuNzE5Ljc1MyAxLjA4IDEuNzI5IDEuMDggMi45MyAwIDEuMDAyLS4yOSAxLjg5Ni0uODcxIDIuNjgyLS43OTEgMS4wNzMtMS44OTEgMS42MDktMy4yOTcgMS42MDl6TTExLjkwMyAyOXYtOC43OTFjLS44NTIuNzk3LTEuODU3IDEuMzg2LTMuMDE0IDEuNzY4di0yLjExNmMuNjA5LS4xOTkgMS4yNzEtLjU3NiAxLjk4NS0xLjEzMi43MTQtLjU1NyAxLjIwMy0xLjIwNiAxLjQ2OS0xLjk0OGgxLjg5MlYyOWgtMi4zMzJ6XCIgZmlsbD1cIiNmZmZcIi8+PC9zdmc+XG4gICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInBrLWJ1dHRvblwiIHRpdGxlPVwie2lzUGxheWluZyA/IHRleHRUcmFuc2xhdGlvbnMucGF1c2UgOiB0ZXh0VHJhbnNsYXRpb25zLnBsYXl9XCJcbiAgICAgICAgICAgICAgICBzdHlsZT1cIndpZHRoOiAyOHB4O1wiXG4gICAgICAgICAgICAgICAgb246Y2xpY2t8cHJldmVudERlZmF1bHR8c3RvcFByb3BhZ2F0aW9uPXsoKT0+e3BsYXlPclBhdXNlQXVkaW8odHJ1ZSk7fSB9PlxuICAgICAgICAgICAgICAgIHsjaWYgaXNQbGF5aW5nfVxuICAgICAgICAgICAgICAgIDxzdmcgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjM1XCIgdmlld0JveD1cIjAgMCAyNyA0MFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwiTTAgMGgxMC4xMjV2NDBIMHptMTYuODc1IDBIMjd2NDBIMTYuODc1em0wIDBcIiBmaWxsPVwiI2ZmZlwiLz48L3N2Zz5cbiAgICAgICAgICAgICAgICB7OmVsc2V9XG4gICAgICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjI4XCIgaGVpZ2h0PVwiMzVcIiB2aWV3Qm94PVwiMCAwIDMyIDQwXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGQ9XCJNLjU2MS41NTZ2MzguODg4TDMxLjQzOCAyMHpcIiBmaWxsPVwiI2ZmZlwiLz48L3N2Zz5cbiAgICAgICAgICAgICAgICB7L2lmfVxuICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJway1idXR0b25cIiB0aXRsZT1cInt0ZXh0VHJhbnNsYXRpb25zLmZvcndhcmR9XCJcbiAgICAgICAgICAgICAgICBvbjpjbGlja3xwcmV2ZW50RGVmYXVsdHxzdG9wUHJvcGFnYXRpb249eyAoKT0+e3VwZGF0ZVBsYXllckN1cnJlbnRUaW1lKGN1cnJlbnRUaW1lSW5TZWNvbmRzICsgNjApO30gfT5cbiAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMzZcIiBoZWlnaHQ9XCI0MFwiIHZpZXdCb3g9XCIwIDAgMzYgNDBcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZD1cIk0xNy45MyA0MEM4LjA3NCA0MCAuMDkxIDMyLjAxNi4wOTEgMjIuMTZTOC4wNzQgNC4zMiAxNy45MyA0LjMyVjBsNy45NDQgNi41NTEtNy45NDQgNi42ODlWOC43ODFjLTcuMzgxIDAtMTMuMzggNS45OTgtMTMuMzggMTMuMzc5IDAgNy4zODEgNS45OTkgMTMuMzgxIDEzLjM4IDEzLjM4MSA3LjM4MSAwIDEzLjM3OS02IDEzLjM3OS0xMy4zODFoNC40NjFjMCA5Ljg1Ni03Ljk4MyAxNy44NC0xNy44NCAxNy44NHptLTQuNDQ1LTExLjI5M2MtMS4yMjkgMC0yLjI0LS40NzctMy4wMzEtMS40MzItLjc5Mi0uOTU0LTEuMTg2LTIuNTE4LTEuMTg2LTQuNjkzIDAtMi4yMy40MTItMy44MzkgMS4yMzctNC44MjQuODI0LS45ODUgMS44OTUtMS40NzcgMy4yMTMtMS40NzcuOTI0IDAgMS42ODguMjU4IDIuMjk0Ljc3Ni42MDYuNTE3Ljk5MyAxLjI2OSAxLjE1OSAyLjI1NGwtMi4yNTguMjVjLS4wNTYtLjQ2NS0uMTk5LS44MDgtLjQzMi0xLjAzLS4yMzItLjIyMS0uNTM1LS4zMzItLjkwNi0uMzMyLS40OTMgMC0uOTA4LjIyMi0xLjI0OC42NjQtLjM0MS40NDMtLjU1NiAxLjM2NC0uNjQ1IDIuNzY0LjU4MS0uNjg2IDEuMzA1LTEuMDI5IDIuMTY4LTEuMDI5Ljk3NCAwIDEuODA4LjM3MSAyLjUwMiAxLjExMy42OTUuNzQyIDEuMDQxIDEuNjk4IDEuMDQxIDIuODcxIDAgMS4yNDUtLjM2NSAyLjI0NC0xLjA5NSAyLjk5Ni0uNzMxLjc1My0xLjY2NyAxLjEyOS0yLjgxMyAxLjEyOXptOS4xOCAwYy0xLjE4NSAwLTIuMTM5LS40NTUtMi44NjMtMS4zNjUtLjcyNS0uOTEtMS4wODgtMi41MzQtMS4wODgtNC44NjkgMC0yLjI5MS4zOTgtMy45MzggMS4xOTUtNC45NDYuNjU4LS44MyAxLjU3Ny0xLjI0NiAyLjc1Ni0xLjI0NiAxLjE3OSAwIDIuMDk5LjQyMSAyLjc2MyAxLjI2Mi43OTIuOTk2IDEuMTg4IDIuNjQ3IDEuMTg4IDQuOTU1IDAgMi4zMDItLjM5OCAzLjk1OC0xLjE5NSA0Ljk2NS0uNjU5LjgzLTEuNTc3IDEuMjQ0LTIuNzU2IDEuMjQ0ek0xMy42IDI2Ljc3M2MuNDMyIDAgLjc5My0uMTY4IDEuMDgtLjUwNS4yODgtLjMzOC40MzItLjg5MS40MzItMS42NjEgMC0uNzkxLS4xNTUtMS4zNzItLjQ2NS0xLjc0LS4zMS0uMzY4LS42OTctLjU1MS0xLjE2Mi0uNTUxLS40NDggMC0uODI5LjE3Ni0xLjEzOS41MjgtLjMxLjM1MS0uNDY0Ljg2OC0uNDY0IDEuNTU0IDAgLjc1OS4xNzQgMS4zNDQuNTIzIDEuNzU2LjM0OS40MTMuNzQ3LjYxOSAxLjE5NS42MTl6bTkuMDY1IDBjLjI4MiAwIC41MzQtLjA4OS43NTYtLjI2OS4yMjEtLjE4LjM5Mi0uNTAyLjUxMy0uOTY3LjE2MS0uNTk4LjI0My0xLjYxMS4yNDMtMy4wMzkgMC0xLjQyOC0uMDczLTIuNDA3LS4yMTctMi45NDEtLjE0NC0uNTM0LS4zMjUtLjg5My0uNTQzLTEuMDczLS4yMTktLjE3OS0uNDctLjI2OS0uNzUyLS4yNjktLjI4MyAwLS41MzUuMDktLjc1Ni4yNjktLjIyMS4xOC0uMzkyLjUwNC0uNTE0Ljk2OS0uMTYuNjAzLS4yNCAxLjYxNy0uMjQgMy4wNDVzLjA3MSAyLjQwOS4yMTUgMi45NDNjLjE0NC41MzQuMzI2Ljg5LjU0NSAxLjA2Ny4yMTguMTc3LjQ2Ny4yNjUuNzUuMjY1elwiIGZpbGw9XCIjZmZmXCIvPjwvc3ZnPlxuICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJway1zcGVlZC1idXR0b24gcGstYnV0dG9uXCIgdGl0bGU9XCJ7dGV4dFRyYW5zbGF0aW9ucy5zcGVlZH1cIlxuICAgICAgICAgICAgICAgIG9uOmNsaWNrfHByZXZlbnREZWZhdWx0fHN0b3BQcm9wYWdhdGlvbj17b25TcGVlZENsaWNrfT5cbiAgICAgICAgICAgICAgICB7I2lmIDEgPT0gYXVkaW9TcGVlZH1cbiAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMzhcIiBoZWlnaHQ9XCIxN1wiIHZpZXdCb3g9XCIwIDAgMzggMTdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZD1cIk0yNC45MzUgOC4wNzhsMS42ODYtMy4yMDFoMy43NmwtMy4wNjIgNS42NjEgMy4yMTIgNS45NjJIMjYuNzVsLTEuODI2LTMuNDM3TDIzLjEzIDE2LjVoLTMuODAzbDMuMjIzLTUuOTYyLTMuMDUxLTUuNjYxaDMuODAzek0xNS40NDkgMTYuNWgtMy42MzFWNC45NDFMOC4yNTIgNS45ODN2LTIuNzVMMTUuMTE2Ljg1OWguMzMzelwiIGZpbGw9XCIjZmZmXCIvPjwvc3ZnPlxuICAgICAgICAgICAgICAgIHs6ZWxzZSBpZiAxLjI1ID09IGF1ZGlvU3BlZWR9XG4gICAgICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjM4XCIgaGVpZ2h0PVwiMTdcIiB2aWV3Qm94PVwiMCAwIDM4IDE3XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGQ9XCJNMzEuODE5IDguMDc4bDEuNjg3LTMuMjAxaDMuNzZsLTMuMDYyIDUuNjYxIDMuMjEyIDUuOTYyaC0zLjc4MWwtMS44MjYtMy40MzctMS43OTQgMy40MzdoLTMuODAzbDMuMjIzLTUuOTYyLTMuMDUxLTUuNjYxaDMuODAzek0yNS40NDQgMTYuNUgxNC41M3YtMi4zNjNsNS4wMjctNS4yODVjMS4yMzktMS40MTEgMS44NTgtMi41MzIgMS44NTgtMy4zNjMgMC0uNjczLS4xNDYtMS4xODUtLjQ0LTEuNTM2LS4yOTQtLjM1MS0uNzItLjUyNi0xLjI3OC0uNTI2LS41NTIgMC0uOTk5LjIzNC0xLjM0My43MDNzLS41MTYgMS4wNTUtLjUxNiAxLjc1N2gtMy42MzFjMC0uOTYuMjQtMS44NDYuNzItMi42NTkuNDgtLjgxMyAxLjE0Ni0xLjQ0OCAxLjk5OC0xLjkwNy44NTItLjQ1OCAxLjgwNS0uNjg3IDIuODU4LS42ODcgMS42OSAwIDIuOTkxLjM5IDMuOTA0IDEuMTcxLjkxMy43OCAxLjM3IDEuOTAxIDEuMzcgMy4zNjIgMCAuNjE2LS4xMTUgMS4yMTYtLjM0NCAxLjc5OS0uMjI5LjU4NC0uNTg1IDEuMTk2LTEuMDY5IDEuODM3LS40ODMuNjQxLTEuMjYyIDEuNDk5LTIuMzM2IDIuNTczbC0yLjAyIDIuMzMxaDYuMTU2em0tMTQuMTY1LTMuNTEzYy41NzMgMCAxLjA0OS4xNyAxLjQyOS41MTEuMzc5LjM0LjU2OS43NzUuNTY5IDEuMzA1IDAgLjUzLS4xOS45NjUtLjU2OSAxLjMwNS0uMzguMzQtLjg1Ni41MS0xLjQyOS41MS0uNTggMC0xLjA1OC0uMTcyLTEuNDM0LS41MTUtLjM3Ni0uMzQ0LS41NjQtLjc3Ny0uNTY0LTEuM3MuMTg4LS45NTYuNTY0LTEuM2MuMzc2LS4zNDQuODU0LS41MTYgMS40MzQtLjUxNnpNNy41NjQgMTYuNWgtMy42M1Y0Ljk0MUwuMzY3IDUuOTgzdi0yLjc1TDcuMjMxLjg1OWguMzMzelwiIGZpbGw9XCIjZmZmXCIvPjwvc3ZnPlxuICAgICAgICAgICAgICAgIHs6ZWxzZSBpZiAxLjUgPT0gYXVkaW9TcGVlZH1cbiAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMzhcIiBoZWlnaHQ9XCIxN1wiIHZpZXdCb3g9XCIwIDAgMzggMTdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZD1cIk0zMS44MTkgOC4wNzhsMS42ODctMy4yMDFoMy43NmwtMy4wNjIgNS42NjEgMy4yMTIgNS45NjJoLTMuNzgxbC0xLjgyNi0zLjQzNy0xLjc5NCAzLjQzN2gtMy44MDNsMy4yMjMtNS45NjItMy4wNTEtNS42NjFoMy44MDN6bS0xNi44NTUuNzc0bC45NTctNy45OTNoOS4xNDF2Mi44MTVoLTYuMTk4bC0uMzU1IDMuMTA0Yy4yNTgtLjE1LjU5Ny0uMjgzIDEuMDE2LS4zOTcuNDE4LS4xMTUuODI4LS4xNzIgMS4yMy0uMTcyIDEuNTU0IDAgMi43NDguNDYgMy41ODIgMS4zOC44MzQuOTIxIDEuMjUxIDIuMjExIDEuMjUxIDMuODczIDAgMS4wMDMtLjIyMyAxLjkxLS42NzEgMi43MjMtLjQ0Ny44MTMtMS4wNzYgMS40MzgtMS44ODUgMS44NzUtLjgwOS40MzYtMS43NjUuNjU1LTIuODY4LjY1NS0uOTgxIDAtMS45MDItLjIwMi0yLjc2MS0uNjA3LS44NTktLjQwNS0xLjUzMy0uOTYtMi4wMi0xLjY2NS0uNDg3LS43MDYtLjcyNi0xLjUwMi0uNzE5LTIuMzloMy42MzFjLjAzNS41NzMuMjE4IDEuMDI3LjU0NyAxLjM2NC4zMy4zMzcuNzYzLjUwNSAxLjMuNTA1IDEuMjE4IDAgMS44MjYtLjkwMiAxLjgyNi0yLjcwNyAwLTEuNjY5LS43NDQtMi41MDMtMi4yMzQtMi41MDMtLjg0NSAwLTEuNDc1LjI3Mi0xLjg5MS44MTZ6bS0zLjI0NSA0LjEzNWMuNTczIDAgMS4wNDkuMTcgMS40MjkuNTExLjM3OS4zNC41NjkuNzc1LjU2OSAxLjMwNSAwIC41My0uMTkuOTY1LS41NjkgMS4zMDUtLjM4LjM0LS44NTYuNTEtMS40MjkuNTEtLjU4IDAtMS4wNTgtLjE3Mi0xLjQzNC0uNTE1LS4zNzYtLjM0NC0uNTY0LS43NzctLjU2NC0xLjNzLjE4OC0uOTU2LjU2NC0xLjNjLjM3Ni0uMzQ0Ljg1NC0uNTE2IDEuNDM0LS41MTZ6TTcuNTY0IDE2LjVoLTMuNjNWNC45NDFMLjM2NyA1Ljk4M3YtMi43NUw3LjIzMS44NTloLjMzM3pcIiBmaWxsPVwiI2ZmZlwiLz48L3N2Zz5cbiAgICAgICAgICAgICAgICB7OmVsc2UgaWYgMS43NSA9PSBhdWRpb1NwZWVkfVxuICAgICAgICAgICAgICAgIDxzdmcgd2lkdGg9XCIzOFwiIGhlaWdodD1cIjE3XCIgdmlld0JveD1cIjAgMCAzOCAxN1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwiTTMxLjg3OSA4LjA3OGwxLjY4Ny0zLjIwMWgzLjc2bC0zLjA2MiA1LjY2MSAzLjIxMiA1Ljk2MmgtMy43ODFsLTEuODI2LTMuNDM3LTEuNzk0IDMuNDM3aC0zLjgwM2wzLjIyMy01Ljk2Mi0zLjA1MS01LjY2MWgzLjgwM3ptLTYuNjM4LTUuMjg1TDE5LjM5NyAxNi41aC0zLjgyNGw1Ljg1NC0xMi44NDhoLTcuNDU1Vi44NTloMTEuMjY5ek0xMS4zMzkgMTIuOTg3Yy41NzMgMCAxLjA0OS4xNyAxLjQyOS41MTEuMzc5LjM0LjU2OS43NzUuNTY5IDEuMzA1IDAgLjUzLS4xOS45NjUtLjU2OSAxLjMwNS0uMzguMzQtLjg1Ni41MS0xLjQyOS41MS0uNTggMC0xLjA1OC0uMTcyLTEuNDM0LS41MTUtLjM3Ni0uMzQ0LS41NjQtLjc3Ny0uNTY0LTEuM3MuMTg4LS45NTYuNTY0LTEuM2MuMzc2LS4zNDQuODU0LS41MTYgMS40MzQtLjUxNnpNNy42MjQgMTYuNWgtMy42M1Y0Ljk0MUwuNDI3IDUuOTgzdi0yLjc1TDcuMjkxLjg1OWguMzMzelwiIGZpbGw9XCIjZmZmXCIvPjwvc3ZnPlxuICAgICAgICAgICAgICAgIHs6ZWxzZX1cbiAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMzhcIiBoZWlnaHQ9XCIxN1wiIHZpZXdCb3g9XCIwIDAgMzggMTdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZD1cIk0yNS40MzUgOC4wNzhsMS42ODYtMy4yMDFoMy43NmwtMy4wNjIgNS42NjEgMy4yMTIgNS45NjJIMjcuMjVsLTEuODI2LTMuNDM3TDIzLjYzIDE2LjVoLTMuODAzbDMuMjIzLTUuOTYyLTMuMDUxLTUuNjYxaDMuODAzek0xOC44MzkgMTYuNUg3LjkyNXYtMi4zNjNsNS4wMjctNS4yODVjMS4yMzktMS40MTEgMS44NTktMi41MzIgMS44NTktMy4zNjMgMC0uNjczLS4xNDctMS4xODUtLjQ0MS0xLjUzNi0uMjk0LS4zNTEtLjcyLS41MjYtMS4yNzgtLjUyNi0uNTUyIDAtLjk5OS4yMzQtMS4zNDMuNzAzcy0uNTE2IDEuMDU1LS41MTYgMS43NTdoLTMuNjNjMC0uOTYuMjM5LTEuODQ2LjcxOS0yLjY1OS40OC0uODEzIDEuMTQ2LTEuNDQ4IDEuOTk4LTEuOTA3Ljg1My0uNDU4IDEuODA1LS42ODcgMi44NTgtLjY4NyAxLjY5IDAgMi45OTEuMzkgMy45MDUgMS4xNzEuOTEzLjc4IDEuMzY5IDEuOTAxIDEuMzY5IDMuMzYyIDAgLjYxNi0uMTE0IDEuMjE2LS4zNDQgMS43OTktLjIyOS41ODQtLjU4NSAxLjE5Ni0xLjA2OCAxLjgzNy0uNDg0LjY0MS0xLjI2MyAxLjQ5OS0yLjMzNyAyLjU3M2wtMi4wMTkgMi4zMzFoNi4xNTV6XCIgZmlsbD1cIiNmZmZcIi8+PC9zdmc+XG4gICAgICAgICAgICAgICAgey9pZn1cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGstcGxheWVyX192b2x1bWVcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwicGstYnV0dG9uXCIgdGl0bGU9XCJ7dGV4dFRyYW5zbGF0aW9ucy52b2x1bWV9XCJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJtYXJnaW4tcmlnaHQ6IDEwcHg7XCIgXG4gICAgICAgICAgICAgICAgICAgIG9uOmNsaWNrfHByZXZlbnREZWZhdWx0fHN0b3BQcm9wYWdhdGlvbj17b25Wb2x1bWVCdXR0b25DbGlja30+XG4gICAgICAgICAgICAgICAgICAgIHsjaWYgMCA8IGF1ZGlvVm9sdW1lfVxuICAgICAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMjJcIiBoZWlnaHQ9XCIyMlwiIHZpZXdCb3g9XCIwIDAgMjIgMjJcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZD1cIk0wIDcuMzMzdjcuMzM0aDQuODg5TDExIDIwLjc3OFYxLjIyMkw0Ljg4OSA3LjMzM0gwek0xNi41IDExYzAtMi4xNjMtMS4yNDctNC4wMjEtMy4wNTYtNC45MjZ2OS44MzljMS44MDktLjg5MiAzLjA1Ni0yLjc1IDMuMDU2LTQuOTEzek0xMy40NDQuMjgxdjIuNTE4QzE2Ljk3NiAzLjg1IDE5LjU1NiA3LjEyNiAxOS41NTYgMTFjMCAzLjg3NC0yLjU4IDcuMTUtNi4xMTIgOC4yMDF2Mi41MThDMTguMzQ1IDIwLjYwNyAyMiAxNi4yMzEgMjIgMTFjMC01LjIzMS0zLjY1NS05LjYwNy04LjU1Ni0xMC43MTl6XCIgZmlsbD1cIiNmZmZcIi8+PC9zdmc+XG4gICAgICAgICAgICAgICAgICAgIHs6ZWxzZX1cbiAgICAgICAgICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjIyXCIgaGVpZ2h0PVwiMjJcIiB2aWV3Qm94PVwiMCAwIDIyIDIyXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGQ9XCJNMTYuNSAxMWMwLTIuMTYzLTEuMjQ3LTQuMDIxLTMuMDU2LTQuOTI2djIuNzAybDIuOTk1IDIuOTk0Yy4wMzYtLjI0NC4wNjEtLjUwMS4wNjEtLjc3em0zLjA1NiAwYzAgMS4xNDktLjI0NSAyLjIyNC0uNjYxIDMuMjI3bDEuODQ2IDEuODQ1QzIxLjU0OCAxNC41NTcgMjIgMTIuODMzIDIyIDExYzAtNS4yMzEtMy42NTUtOS42MDctOC41NTYtMTAuNzE5djIuNTE4QzE2Ljk3NiAzLjg1IDE5LjU1NiA3LjEyNiAxOS41NTYgMTF6TTEuNTUyIDBMMCAxLjU1Mmw1Ljc4MSA1Ljc4MUgwdjcuMzM0aDQuODg5TDExIDIwLjc3OHYtOC4yMjZsNS4xOTQgNS4xOTVjLS44MTkuNjM1LTEuNzM1IDEuMTM2LTIuNzUgMS40NDJ2Mi41MThjMS42ODctLjM3OSAzLjIxNS0xLjE2MSA0LjUxLTIuMjEzTDIwLjQ0OCAyMiAyMiAyMC40NDhsLTExLTExTDEuNTUyIDB6TTExIDEuMjIyTDguNDQ1IDMuNzc3IDExIDYuMzMxVjEuMjIyelwiIGZpbGw9XCIjZmZmXCIvPjwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICB7L2lmfVxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxTbGlkZXIgaXNUaHVtYk9uSG92ZXI9e2ZhbHNlfSBjdXJyZW50VmFsdWU9e2F1ZGlvVm9sdW1lfSBtYXhWYWx1ZT17MX0gb246dmFsdWVjaGFuZ2VkPXtvblZvbHVtZVNsaWRlckNoYW5nZWR9Lz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHNsb3Q+PC9zbG90PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvZGl2PiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtT0EsVUFBVSw4QkFBQyxDQUFDLEFBQ1IsZ0JBQWdCLENBQUUsT0FBTyxDQUN6QixLQUFLLENBQUUsSUFBSSxDQUNYLFVBQVUsQ0FBRSxVQUFVLENBQ3RCLE9BQU8sQ0FBRSxJQUFJLENBQUMsSUFBSSxDQUNsQixPQUFPLENBQUUsSUFBSSxDQUNiLGNBQWMsQ0FB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 */";
    append_dev(document_1.head, style);
  } // (351:8) {#if null !== lockAudioURL && '' !== lockAudioURL}


  function create_if_block_6(ctx) {
    var audio;
    var audio_src_value;
    var block = {
      c: function create() {
        audio = element("audio");
        attr_dev(audio, "class", "pk-player__lock-audio");
        if (audio.src !== (audio_src_value =
        /*lockAudioURL*/
        ctx[2])) attr_dev(audio, "src", audio_src_value);
        attr_dev(audio, "preload", "auto");
        add_location(audio, file$1, 351, 8, 9728);
      },
      m: function mount(target, anchor) {
        insert_dev(target, audio, anchor);
      },
      p: function update(ctx, dirty) {
        if (dirty[0] &
        /*lockAudioURL*/
        4 && audio.src !== (audio_src_value =
        /*lockAudioURL*/
        ctx[2])) {
          attr_dev(audio, "src", audio_src_value);
        }
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(audio);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_if_block_6.name,
      type: "if",
      source: "(351:8) {#if null !== lockAudioURL && '' !== lockAudioURL}",
      ctx: ctx
    });
    return block;
  } // (376:16) {:else}


  function create_else_block_2(ctx) {
    var svg;
    var path;
    var block = {
      c: function create() {
        svg = svg_element("svg");
        path = svg_element("path");
        attr_dev(path, "d", "M.561.556v38.888L31.438 20z");
        attr_dev(path, "fill", "#fff");
        add_location(path, file$1, 376, 99, 12132);
        attr_dev(svg, "width", "28");
        attr_dev(svg, "height", "35");
        attr_dev(svg, "viewBox", "0 0 32 40");
        attr_dev(svg, "xmlns", "http://www.w3.org/2000/svg");
        attr_dev(svg, "class", "svelte-19ql4i0");
        add_location(svg, file$1, 376, 16, 12049);
      },
      m: function mount(target, anchor) {
        insert_dev(target, svg, anchor);
        append_dev(svg, path);
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(svg);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_else_block_2.name,
      type: "else",
      source: "(376:16) {:else}",
      ctx: ctx
    });
    return block;
  } // (374:16) {#if isPlaying}


  function create_if_block_5(ctx) {
    var svg;
    var path;
    var block = {
      c: function create() {
        svg = svg_element("svg");
        path = svg_element("path");
        attr_dev(path, "d", "M0 0h10.125v40H0zm16.875 0H27v40H16.875zm0 0");
        attr_dev(path, "fill", "#fff");
        add_location(path, file$1, 374, 99, 11934);
        attr_dev(svg, "width", "24");
        attr_dev(svg, "height", "35");
        attr_dev(svg, "viewBox", "0 0 27 40");
        attr_dev(svg, "xmlns", "http://www.w3.org/2000/svg");
        attr_dev(svg, "class", "svelte-19ql4i0");
        add_location(svg, file$1, 374, 16, 11851);
      },
      m: function mount(target, anchor) {
        insert_dev(target, svg, anchor);
        append_dev(svg, path);
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(svg);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_if_block_5.name,
      type: "if",
      source: "(374:16) {#if isPlaying}",
      ctx: ctx
    });
    return block;
  } // (396:16) {:else}


  function create_else_block_1(ctx) {
    var svg;
    var path;
    var block = {
      c: function create() {
        svg = svg_element("svg");
        path = svg_element("path");
        attr_dev(path, "d", "M25.435 8.078l1.686-3.201h3.76l-3.062 5.661 3.212 5.962H27.25l-1.826-3.437L23.63 16.5h-3.803l3.223-5.962-3.051-5.661h3.803zM18.839 16.5H7.925v-2.363l5.027-5.285c1.239-1.411 1.859-2.532 1.859-3.363 0-.673-.147-1.185-.441-1.536-.294-.351-.72-.526-1.278-.526-.552 0-.999.234-1.343.703s-.516 1.055-.516 1.757h-3.63c0-.96.239-1.846.719-2.659.48-.813 1.146-1.448 1.998-1.907.853-.458 1.805-.687 2.858-.687 1.69 0 2.991.39 3.905 1.171.913.78 1.369 1.901 1.369 3.362 0 .616-.114 1.216-.344 1.799-.229.584-.585 1.196-1.068 1.837-.484.641-1.263 1.499-2.337 2.573l-2.019 2.331h6.155z");
        attr_dev(path, "fill", "#fff");
        add_location(path, file$1, 396, 99, 17488);
        attr_dev(svg, "width", "38");
        attr_dev(svg, "height", "17");
        attr_dev(svg, "viewBox", "0 0 38 17");
        attr_dev(svg, "xmlns", "http://www.w3.org/2000/svg");
        attr_dev(svg, "class", "svelte-19ql4i0");
        add_location(svg, file$1, 396, 16, 17405);
      },
      m: function mount(target, anchor) {
        insert_dev(target, svg, anchor);
        append_dev(svg, path);
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(svg);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_else_block_1.name,
      type: "else",
      source: "(396:16) {:else}",
      ctx: ctx
    });
    return block;
  } // (394:45) 


  function create_if_block_4(ctx) {
    var svg;
    var path;
    var block = {
      c: function create() {
        svg = svg_element("svg");
        path = svg_element("path");
        attr_dev(path, "d", "M31.879 8.078l1.687-3.201h3.76l-3.062 5.661 3.212 5.962h-3.781l-1.826-3.437-1.794 3.437h-3.803l3.223-5.962-3.051-5.661h3.803zm-6.638-5.285L19.397 16.5h-3.824l5.854-12.848h-7.455V.859h11.269zM11.339 12.987c.573 0 1.049.17 1.429.511.379.34.569.775.569 1.305 0 .53-.19.965-.569 1.305-.38.34-.856.51-1.429.51-.58 0-1.058-.172-1.434-.515-.376-.344-.564-.777-.564-1.3s.188-.956.564-1.3c.376-.344.854-.516 1.434-.516zM7.624 16.5h-3.63V4.941L.427 5.983v-2.75L7.291.859h.333z");
        attr_dev(path, "fill", "#fff");
        add_location(path, file$1, 394, 99, 16868);
        attr_dev(svg, "width", "38");
        attr_dev(svg, "height", "17");
        attr_dev(svg, "viewBox", "0 0 38 17");
        attr_dev(svg, "xmlns", "http://www.w3.org/2000/svg");
        attr_dev(svg, "class", "svelte-19ql4i0");
        add_location(svg, file$1, 394, 16, 16785);
      },
      m: function mount(target, anchor) {
        insert_dev(target, svg, anchor);
        append_dev(svg, path);
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(svg);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_if_block_4.name,
      type: "if",
      source: "(394:45) ",
      ctx: ctx
    });
    return block;
  } // (392:44) 


  function create_if_block_3(ctx) {
    var svg;
    var path;
    var block = {
      c: function create() {
        svg = svg_element("svg");
        path = svg_element("path");
        attr_dev(path, "d", "M31.819 8.078l1.687-3.201h3.76l-3.062 5.661 3.212 5.962h-3.781l-1.826-3.437-1.794 3.437h-3.803l3.223-5.962-3.051-5.661h3.803zm-16.855.774l.957-7.993h9.141v2.815h-6.198l-.355 3.104c.258-.15.597-.283 1.016-.397.418-.115.828-.172 1.23-.172 1.554 0 2.748.46 3.582 1.38.834.921 1.251 2.211 1.251 3.873 0 1.003-.223 1.91-.671 2.723-.447.813-1.076 1.438-1.885 1.875-.809.436-1.765.655-2.868.655-.981 0-1.902-.202-2.761-.607-.859-.405-1.533-.96-2.02-1.665-.487-.706-.726-1.502-.719-2.39h3.631c.035.573.218 1.027.547 1.364.33.337.763.505 1.3.505 1.218 0 1.826-.902 1.826-2.707 0-1.669-.744-2.503-2.234-2.503-.845 0-1.475.272-1.891.816zm-3.245 4.135c.573 0 1.049.17 1.429.511.379.34.569.775.569 1.305 0 .53-.19.965-.569 1.305-.38.34-.856.51-1.429.51-.58 0-1.058-.172-1.434-.515-.376-.344-.564-.777-.564-1.3s.188-.956.564-1.3c.376-.344.854-.516 1.434-.516zM7.564 16.5h-3.63V4.941L.367 5.983v-2.75L7.231.859h.333z");
        attr_dev(path, "fill", "#fff");
        add_location(path, file$1, 392, 99, 15791);
        attr_dev(svg, "width", "38");
        attr_dev(svg, "height", "17");
        attr_dev(svg, "viewBox", "0 0 38 17");
        attr_dev(svg, "xmlns", "http://www.w3.org/2000/svg");
        attr_dev(svg, "class", "svelte-19ql4i0");
        add_location(svg, file$1, 392, 16, 15708);
      },
      m: function mount(target, anchor) {
        insert_dev(target, svg, anchor);
        append_dev(svg, path);
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(svg);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_if_block_3.name,
      type: "if",
      source: "(392:44) ",
      ctx: ctx
    });
    return block;
  } // (390:45) 


  function create_if_block_2(ctx) {
    var svg;
    var path;
    var block = {
      c: function create() {
        svg = svg_element("svg");
        path = svg_element("path");
        attr_dev(path, "d", "M31.819 8.078l1.687-3.201h3.76l-3.062 5.661 3.212 5.962h-3.781l-1.826-3.437-1.794 3.437h-3.803l3.223-5.962-3.051-5.661h3.803zM25.444 16.5H14.53v-2.363l5.027-5.285c1.239-1.411 1.858-2.532 1.858-3.363 0-.673-.146-1.185-.44-1.536-.294-.351-.72-.526-1.278-.526-.552 0-.999.234-1.343.703s-.516 1.055-.516 1.757h-3.631c0-.96.24-1.846.72-2.659.48-.813 1.146-1.448 1.998-1.907.852-.458 1.805-.687 2.858-.687 1.69 0 2.991.39 3.904 1.171.913.78 1.37 1.901 1.37 3.362 0 .616-.115 1.216-.344 1.799-.229.584-.585 1.196-1.069 1.837-.483.641-1.262 1.499-2.336 2.573l-2.02 2.331h6.156zm-14.165-3.513c.573 0 1.049.17 1.429.511.379.34.569.775.569 1.305 0 .53-.19.965-.569 1.305-.38.34-.856.51-1.429.51-.58 0-1.058-.172-1.434-.515-.376-.344-.564-.777-.564-1.3s.188-.956.564-1.3c.376-.344.854-.516 1.434-.516zM7.564 16.5h-3.63V4.941L.367 5.983v-2.75L7.231.859h.333z");
        attr_dev(path, "fill", "#fff");
        add_location(path, file$1, 390, 99, 14771);
        attr_dev(svg, "width", "38");
        attr_dev(svg, "height", "17");
        attr_dev(svg, "viewBox", "0 0 38 17");
        attr_dev(svg, "xmlns", "http://www.w3.org/2000/svg");
        attr_dev(svg, "class", "svelte-19ql4i0");
        add_location(svg, file$1, 390, 16, 14688);
      },
      m: function mount(target, anchor) {
        insert_dev(target, svg, anchor);
        append_dev(svg, path);
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(svg);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_if_block_2.name,
      type: "if",
      source: "(390:45) ",
      ctx: ctx
    });
    return block;
  } // (388:16) {#if 1 == audioSpeed}


  function create_if_block_1(ctx) {
    var svg;
    var path;
    var block = {
      c: function create() {
        svg = svg_element("svg");
        path = svg_element("path");
        attr_dev(path, "d", "M24.935 8.078l1.686-3.201h3.76l-3.062 5.661 3.212 5.962H26.75l-1.826-3.437L23.13 16.5h-3.803l3.223-5.962-3.051-5.661h3.803zM15.449 16.5h-3.631V4.941L8.252 5.983v-2.75L15.116.859h.333z");
        attr_dev(path, "fill", "#fff");
        add_location(path, file$1, 388, 99, 14412);
        attr_dev(svg, "width", "38");
        attr_dev(svg, "height", "17");
        attr_dev(svg, "viewBox", "0 0 38 17");
        attr_dev(svg, "xmlns", "http://www.w3.org/2000/svg");
        attr_dev(svg, "class", "svelte-19ql4i0");
        add_location(svg, file$1, 388, 16, 14329);
      },
      m: function mount(target, anchor) {
        insert_dev(target, svg, anchor);
        append_dev(svg, path);
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(svg);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_if_block_1.name,
      type: "if",
      source: "(388:16) {#if 1 == audioSpeed}",
      ctx: ctx
    });
    return block;
  } // (407:20) {:else}


  function create_else_block(ctx) {
    var svg;
    var path;
    var block = {
      c: function create() {
        svg = svg_element("svg");
        path = svg_element("path");
        attr_dev(path, "d", "M16.5 11c0-2.163-1.247-4.021-3.056-4.926v2.702l2.995 2.994c.036-.244.061-.501.061-.77zm3.056 0c0 1.149-.245 2.224-.661 3.227l1.846 1.845C21.548 14.557 22 12.833 22 11c0-5.231-3.655-9.607-8.556-10.719v2.518C16.976 3.85 19.556 7.126 19.556 11zM1.552 0L0 1.552l5.781 5.781H0v7.334h4.889L11 20.778v-8.226l5.194 5.195c-.819.635-1.735 1.136-2.75 1.442v2.518c1.687-.379 3.215-1.161 4.51-2.213L20.448 22 22 20.448l-11-11L1.552 0zM11 1.222L8.445 3.777 11 6.331V1.222z");
        attr_dev(path, "fill", "#fff");
        add_location(path, file$1, 407, 103, 18979);
        attr_dev(svg, "width", "22");
        attr_dev(svg, "height", "22");
        attr_dev(svg, "viewBox", "0 0 22 22");
        attr_dev(svg, "xmlns", "http://www.w3.org/2000/svg");
        attr_dev(svg, "class", "svelte-19ql4i0");
        add_location(svg, file$1, 407, 20, 18896);
      },
      m: function mount(target, anchor) {
        insert_dev(target, svg, anchor);
        append_dev(svg, path);
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(svg);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_else_block.name,
      type: "else",
      source: "(407:20) {:else}",
      ctx: ctx
    });
    return block;
  } // (405:20) {#if 0 < audioVolume}


  function create_if_block$1(ctx) {
    var svg;
    var path;
    var block = {
      c: function create() {
        svg = svg_element("svg");
        path = svg_element("path");
        attr_dev(path, "d", "M0 7.333v7.334h4.889L11 20.778V1.222L4.889 7.333H0zM16.5 11c0-2.163-1.247-4.021-3.056-4.926v9.839c1.809-.892 3.056-2.75 3.056-4.913zM13.444.281v2.518C16.976 3.85 19.556 7.126 19.556 11c0 3.874-2.58 7.15-6.112 8.201v2.518C18.345 20.607 22 16.231 22 11c0-5.231-3.655-9.607-8.556-10.719z");
        attr_dev(path, "fill", "#fff");
        add_location(path, file$1, 405, 103, 18533);
        attr_dev(svg, "width", "22");
        attr_dev(svg, "height", "22");
        attr_dev(svg, "viewBox", "0 0 22 22");
        attr_dev(svg, "xmlns", "http://www.w3.org/2000/svg");
        attr_dev(svg, "class", "svelte-19ql4i0");
        add_location(svg, file$1, 405, 20, 18450);
      },
      m: function mount(target, anchor) {
        insert_dev(target, svg, anchor);
        append_dev(svg, path);
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(svg);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_if_block$1.name,
      type: "if",
      source: "(405:20) {#if 0 < audioVolume}",
      ctx: ctx
    });
    return block;
  }

  function create_fragment$1(ctx) {
    var div6;
    var div5;
    var audio;
    var audio_src_value;
    var t0;
    var t1;
    var t2;
    var div2;
    var div0;
    var t3;
    var t4;
    var div1;
    var t5;
    var t6;
    var div4;
    var button0;
    var svg0;
    var path0;
    var button0_title_value;
    var t7;
    var button1;
    var button1_title_value;
    var t8;
    var button2;
    var svg1;
    var path1;
    var button2_title_value;
    var t9;
    var button3;
    var button3_title_value;
    var t10;
    var div3;
    var button4;
    var button4_title_value;
    var t11;
    var t12;
    var div5_class_value;
    var div6_style_value;
    var current;
    var dispose;
    var if_block0 = null !==
    /*lockAudioURL*/
    ctx[2] && "" !==
    /*lockAudioURL*/
    ctx[2] && create_if_block_6(ctx);
    var slider0 = new Pk_slider({
      props: {
        style: "margin-bottom: 5px;",
        currentValue:
        /*currentTimeInSeconds*/
        ctx[0],
        maxValue:
        /*endTimeInSeconds*/
        ctx[9],
        lockValue:
        /*lockTimeInSeconds*/
        ctx[3]
      },
      $$inline: true
    });
    slider0.$on("valuechanged",
    /*valuechanged_handler*/
    ctx[34]);

    function select_block_type(ctx, dirty) {
      if (
      /*isPlaying*/
      ctx[12]) return create_if_block_5;
      return create_else_block_2;
    }

    var current_block_type = select_block_type(ctx);
    var if_block1 = current_block_type(ctx);

    function select_block_type_1(ctx, dirty) {
      if (1 ==
      /*audioSpeed*/
      ctx[10]) return create_if_block_1;
      if (1.25 ==
      /*audioSpeed*/
      ctx[10]) return create_if_block_2;
      if (1.5 ==
      /*audioSpeed*/
      ctx[10]) return create_if_block_3;
      if (1.75 ==
      /*audioSpeed*/
      ctx[10]) return create_if_block_4;
      return create_else_block_1;
    }

    var current_block_type_1 = select_block_type_1(ctx);
    var if_block2 = current_block_type_1(ctx);

    function select_block_type_2(ctx, dirty) {
      if (0 <
      /*audioVolume*/
      ctx[11]) return create_if_block$1;
      return create_else_block;
    }

    var current_block_type_2 = select_block_type_2(ctx);
    var if_block3 = current_block_type_2(ctx);
    var slider1 = new Pk_slider({
      props: {
        isThumbOnHover: false,
        currentValue:
        /*audioVolume*/
        ctx[11],
        maxValue: 1
      },
      $$inline: true
    });
    slider1.$on("valuechanged",
    /*onVolumeSliderChanged*/
    ctx[21]);
    var default_slot_template =
    /*$$slots*/
    ctx[31].default;
    var default_slot = create_slot(default_slot_template, ctx,
    /*$$scope*/
    ctx[30], null);
    var block = {
      c: function create() {
        div6 = element("div");
        div5 = element("div");
        audio = element("audio");
        t0 = space();
        if (if_block0) if_block0.c();
        t1 = space();
        create_component(slider0.$$.fragment);
        t2 = space();
        div2 = element("div");
        div0 = element("div");
        t3 = text(
        /*currentTimeString*/
        ctx[13]);
        t4 = space();
        div1 = element("div");
        t5 = text(
        /*endTimeString*/
        ctx[14]);
        t6 = space();
        div4 = element("div");
        button0 = element("button");
        svg0 = svg_element("svg");
        path0 = svg_element("path");
        t7 = space();
        button1 = element("button");
        if_block1.c();
        t8 = space();
        button2 = element("button");
        svg1 = svg_element("svg");
        path1 = svg_element("path");
        t9 = space();
        button3 = element("button");
        if_block2.c();
        t10 = space();
        div3 = element("div");
        button4 = element("button");
        if_block3.c();
        t11 = space();
        create_component(slider1.$$.fragment);
        t12 = space();
        if (default_slot) default_slot.c();
        attr_dev(audio, "class", "pk-player__audio");
        if (audio.src !== (audio_src_value =
        /*audioURL*/
        ctx[1])) attr_dev(audio, "src", audio_src_value);
        attr_dev(audio, "preload", "auto");
        add_location(audio, file$1, 346, 8, 9403);
        attr_dev(div0, "class", "pk-player__time svelte-19ql4i0");
        set_style(div0, "text-align", "left");
        add_location(div0, file$1, 359, 12, 10134);
        attr_dev(div1, "class", "pk-player__time svelte-19ql4i0");
        set_style(div1, "text-align", "right");
        add_location(div1, file$1, 360, 12, 10227);
        attr_dev(div2, "class", "pk-player__times svelte-19ql4i0");
        add_location(div2, file$1, 358, 8, 10091);
        attr_dev(path0, "d", "M17.93 40C8.074 40 .091 32.017.091 22.16H4.55c0 7.381 5.999 13.381 13.38 13.381 7.382 0 13.379-6 13.379-13.381S25.312 8.781 17.93 8.781v4.459L9.985 6.551 17.93 0v4.32c9.857 0 17.84 7.984 17.84 17.84 0 9.857-7.983 17.84-17.84 17.84zm3.842-10.793c-1.123 0-2.038-.301-2.746-.904-.708-.603-1.133-1.414-1.271-2.432l2.324-.242c.066.526.263.943.59 1.25.326.307.702.461 1.129.461.487 0 .898-.198 1.236-.594.337-.396.508-.992.508-1.789 0-.747-.167-1.306-.502-1.68-.335-.373-.772-.56-1.309-.56-.669 0-1.269.296-1.801.888l-1.892-.275 1.195-6.334h6.168v2.184h-4.4l-.366 2.066c.521-.26 1.052-.389 1.594-.389 1.035 0 1.912.377 2.631 1.129.719.753 1.08 1.729 1.08 2.93 0 1.002-.29 1.896-.871 2.682-.791 1.073-1.891 1.609-3.297 1.609zM11.903 29v-8.791c-.852.797-1.857 1.386-3.014 1.768v-2.116c.609-.199 1.271-.576 1.985-1.132.714-.557 1.203-1.206 1.469-1.948h1.892V29h-2.332z");
        attr_dev(path0, "fill", "#fff");
        add_location(path0, file$1, 367, 99, 10656);
        attr_dev(svg0, "width", "36");
        attr_dev(svg0, "height", "40");
        attr_dev(svg0, "viewBox", "0 0 36 40");
        attr_dev(svg0, "xmlns", "http://www.w3.org/2000/svg");
        attr_dev(svg0, "class", "svelte-19ql4i0");
        add_location(svg0, file$1, 367, 16, 10573);
        attr_dev(button0, "class", "pk-button svelte-19ql4i0");
        attr_dev(button0, "title", button0_title_value =
        /*textTranslations*/
        ctx[4].backward);
        add_location(button0, file$1, 365, 12, 10376);
        attr_dev(button1, "class", "pk-button svelte-19ql4i0");
        attr_dev(button1, "title", button1_title_value =
        /*isPlaying*/
        ctx[12] ?
        /*textTranslations*/
        ctx[4].pause :
        /*textTranslations*/
        ctx[4].play);
        set_style(button1, "width", "28px");
        add_location(button1, file$1, 370, 12, 11581);
        attr_dev(path1, "d", "M17.93 40C8.074 40 .091 32.016.091 22.16S8.074 4.32 17.93 4.32V0l7.944 6.551-7.944 6.689V8.781c-7.381 0-13.38 5.998-13.38 13.379 0 7.381 5.999 13.381 13.38 13.381 7.381 0 13.379-6 13.379-13.381h4.461c0 9.856-7.983 17.84-17.84 17.84zm-4.445-11.293c-1.229 0-2.24-.477-3.031-1.432-.792-.954-1.186-2.518-1.186-4.693 0-2.23.412-3.839 1.237-4.824.824-.985 1.895-1.477 3.213-1.477.924 0 1.688.258 2.294.776.606.517.993 1.269 1.159 2.254l-2.258.25c-.056-.465-.199-.808-.432-1.03-.232-.221-.535-.332-.906-.332-.493 0-.908.222-1.248.664-.341.443-.556 1.364-.645 2.764.581-.686 1.305-1.029 2.168-1.029.974 0 1.808.371 2.502 1.113.695.742 1.041 1.698 1.041 2.871 0 1.245-.365 2.244-1.095 2.996-.731.753-1.667 1.129-2.813 1.129zm9.18 0c-1.185 0-2.139-.455-2.863-1.365-.725-.91-1.088-2.534-1.088-4.869 0-2.291.398-3.938 1.195-4.946.658-.83 1.577-1.246 2.756-1.246 1.179 0 2.099.421 2.763 1.262.792.996 1.188 2.647 1.188 4.955 0 2.302-.398 3.958-1.195 4.965-.659.83-1.577 1.244-2.756 1.244zM13.6 26.773c.432 0 .793-.168 1.08-.505.288-.338.432-.891.432-1.661 0-.791-.155-1.372-.465-1.74-.31-.368-.697-.551-1.162-.551-.448 0-.829.176-1.139.528-.31.351-.464.868-.464 1.554 0 .759.174 1.344.523 1.756.349.413.747.619 1.195.619zm9.065 0c.282 0 .534-.089.756-.269.221-.18.392-.502.513-.967.161-.598.243-1.611.243-3.039 0-1.428-.073-2.407-.217-2.941-.144-.534-.325-.893-.543-1.073-.219-.179-.47-.269-.752-.269-.283 0-.535.09-.756.269-.221.18-.392.504-.514.969-.16.603-.24 1.617-.24 3.045s.071 2.409.215 2.943c.144.534.326.89.545 1.067.218.177.467.265.75.265z");
        attr_dev(path1, "fill", "#fff");
        add_location(path1, file$1, 382, 99, 12526);
        attr_dev(svg1, "width", "36");
        attr_dev(svg1, "height", "40");
        attr_dev(svg1, "viewBox", "0 0 36 40");
        attr_dev(svg1, "xmlns", "http://www.w3.org/2000/svg");
        attr_dev(svg1, "class", "svelte-19ql4i0");
        add_location(svg1, file$1, 382, 16, 12443);
        attr_dev(button2, "class", "pk-button svelte-19ql4i0");
        attr_dev(button2, "title", button2_title_value =
        /*textTranslations*/
        ctx[4].forward);
        add_location(button2, file$1, 380, 12, 12247);
        attr_dev(button3, "class", "pk-speed-button pk-button svelte-19ql4i0");
        attr_dev(button3, "title", button3_title_value =
        /*textTranslations*/
        ctx[4].speed);
        add_location(button3, file$1, 385, 12, 14128);
        attr_dev(button4, "class", "pk-button svelte-19ql4i0");
        attr_dev(button4, "title", button4_title_value =
        /*textTranslations*/
        ctx[4].volume);
        set_style(button4, "margin-right", "10px");
        add_location(button4, file$1, 401, 16, 18196);
        attr_dev(div3, "class", "pk-player__volume svelte-19ql4i0");
        add_location(div3, file$1, 400, 12, 18148);
        attr_dev(div4, "class", "pk-player__controls svelte-19ql4i0");
        add_location(div4, file$1, 363, 8, 10329);
        attr_dev(div5, "class", div5_class_value = "pk-player " + (
        /*isPlayerMini*/
        ctx[7] ? "pk-player__mini pk-player__mini--slidein" :
        /*isPlayerMiniShown*/
        ctx[8] ? "pk-player__mini pk-player__mini--slideout" : "") + " svelte-19ql4i0");
        set_style(div5, "display",
        /*isPageScrolledToBottom*/
        ctx[18] ? "none" : "flex");
        add_location(div5, file$1, 334, 4, 8838);
        attr_dev(div6, "class", "pk-player-wrapper svelte-19ql4i0");
        attr_dev(div6, "style", div6_style_value = "" + (
        /*playerStyle*/
        ctx[5] + "min-height: 104px; width: 100%; margin: 30px auto; box-sizing: border-box;"));
        add_location(div6, file$1, 333, 0, 8673);
      },
      l: function claim(nodes) {
        throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
      },
      m: function mount(target, anchor, remount) {
        insert_dev(target, div6, anchor);
        append_dev(div6, div5);
        append_dev(div5, audio);
        append_dev(div5, t0);
        if (if_block0) if_block0.m(div5, null);
        append_dev(div5, t1);
        mount_component(slider0, div5, null);
        append_dev(div5, t2);
        append_dev(div5, div2);
        append_dev(div2, div0);
        append_dev(div0, t3);
        append_dev(div2, t4);
        append_dev(div2, div1);
        append_dev(div1, t5);
        append_dev(div5, t6);
        append_dev(div5, div4);
        append_dev(div4, button0);
        append_dev(button0, svg0);
        append_dev(svg0, path0);
        append_dev(div4, t7);
        append_dev(div4, button1);
        if_block1.m(button1, null);
        append_dev(div4, t8);
        append_dev(div4, button2);
        append_dev(button2, svg1);
        append_dev(svg1, path1);
        append_dev(div4, t9);
        append_dev(div4, button3);
        if_block2.m(button3, null);
        append_dev(div4, t10);
        append_dev(div4, div3);
        append_dev(div3, button4);
        if_block3.m(button4, null);
        append_dev(div3, t11);
        mount_component(slider1, div3, null);
        append_dev(div4, t12);

        if (default_slot) {
          default_slot.m(div4, null);
        }
        /*div5_binding*/


        ctx[38](div5);
        /*div6_binding*/

        ctx[40](div6);
        current = true;
        if (remount) run_all(dispose);
        dispose = [listen_dev(window_1, "scroll",
        /*checkIsPlayerHasToBeMini*/
        ctx[23], true, false, false), listen_dev(audio, "timeupdate",
        /*timeupdate_handler*/
        ctx[32], false, false, false), listen_dev(audio, "loadedmetadata",
        /*loadedmetadata_handler*/
        ctx[33], false, false, false), listen_dev(button0, "click", stop_propagation(prevent_default(
        /*click_handler*/
        ctx[35])), false, true, true), listen_dev(button1, "click", stop_propagation(prevent_default(
        /*click_handler_1*/
        ctx[36])), false, true, true), listen_dev(button2, "click", stop_propagation(prevent_default(
        /*click_handler_2*/
        ctx[37])), false, true, true), listen_dev(button3, "click", stop_propagation(prevent_default(
        /*onSpeedClick*/
        ctx[20])), false, true, true), listen_dev(button4, "click", stop_propagation(prevent_default(
        /*onVolumeButtonClick*/
        ctx[22])), false, true, true), listen_dev(div5, "animationend",
        /*animationend_handler*/
        ctx[39], false, false, false)];
      },
      p: function update(ctx, dirty) {
        if (!current || dirty[0] &
        /*audioURL*/
        2 && audio.src !== (audio_src_value =
        /*audioURL*/
        ctx[1])) {
          attr_dev(audio, "src", audio_src_value);
        }

        if (null !==
        /*lockAudioURL*/
        ctx[2] && "" !==
        /*lockAudioURL*/
        ctx[2]) {
          if (if_block0) {
            if_block0.p(ctx, dirty);
          } else {
            if_block0 = create_if_block_6(ctx);
            if_block0.c();
            if_block0.m(div5, t1);
          }
        } else if (if_block0) {
          if_block0.d(1);
          if_block0 = null;
        }

        var slider0_changes = {};
        if (dirty[0] &
        /*currentTimeInSeconds*/
        1) slider0_changes.currentValue =
        /*currentTimeInSeconds*/
        ctx[0];
        if (dirty[0] &
        /*endTimeInSeconds*/
        512) slider0_changes.maxValue =
        /*endTimeInSeconds*/
        ctx[9];
        if (dirty[0] &
        /*lockTimeInSeconds*/
        8) slider0_changes.lockValue =
        /*lockTimeInSeconds*/
        ctx[3];
        slider0.$set(slider0_changes);
        if (!current || dirty[0] &
        /*currentTimeString*/
        8192) set_data_dev(t3,
        /*currentTimeString*/
        ctx[13]);
        if (!current || dirty[0] &
        /*endTimeString*/
        16384) set_data_dev(t5,
        /*endTimeString*/
        ctx[14]);

        if (!current || dirty[0] &
        /*textTranslations*/
        16 && button0_title_value !== (button0_title_value =
        /*textTranslations*/
        ctx[4].backward)) {
          attr_dev(button0, "title", button0_title_value);
        }

        if (current_block_type !== (current_block_type = select_block_type(ctx))) {
          if_block1.d(1);
          if_block1 = current_block_type(ctx);

          if (if_block1) {
            if_block1.c();
            if_block1.m(button1, null);
          }
        }

        if (!current || dirty[0] &
        /*isPlaying, textTranslations*/
        4112 && button1_title_value !== (button1_title_value =
        /*isPlaying*/
        ctx[12] ?
        /*textTranslations*/
        ctx[4].pause :
        /*textTranslations*/
        ctx[4].play)) {
          attr_dev(button1, "title", button1_title_value);
        }

        if (!current || dirty[0] &
        /*textTranslations*/
        16 && button2_title_value !== (button2_title_value =
        /*textTranslations*/
        ctx[4].forward)) {
          attr_dev(button2, "title", button2_title_value);
        }

        if (current_block_type_1 !== (current_block_type_1 = select_block_type_1(ctx))) {
          if_block2.d(1);
          if_block2 = current_block_type_1(ctx);

          if (if_block2) {
            if_block2.c();
            if_block2.m(button3, null);
          }
        }

        if (!current || dirty[0] &
        /*textTranslations*/
        16 && button3_title_value !== (button3_title_value =
        /*textTranslations*/
        ctx[4].speed)) {
          attr_dev(button3, "title", button3_title_value);
        }

        if (current_block_type_2 !== (current_block_type_2 = select_block_type_2(ctx))) {
          if_block3.d(1);
          if_block3 = current_block_type_2(ctx);

          if (if_block3) {
            if_block3.c();
            if_block3.m(button4, null);
          }
        }

        if (!current || dirty[0] &
        /*textTranslations*/
        16 && button4_title_value !== (button4_title_value =
        /*textTranslations*/
        ctx[4].volume)) {
          attr_dev(button4, "title", button4_title_value);
        }

        var slider1_changes = {};
        if (dirty[0] &
        /*audioVolume*/
        2048) slider1_changes.currentValue =
        /*audioVolume*/
        ctx[11];
        slider1.$set(slider1_changes);

        if (default_slot) {
          if (default_slot.p && dirty[0] &
          /*$$scope*/
          1073741824) {
            default_slot.p(get_slot_context(default_slot_template, ctx,
            /*$$scope*/
            ctx[30], null), get_slot_changes(default_slot_template,
            /*$$scope*/
            ctx[30], dirty, null));
          }
        }

        if (!current || dirty[0] &
        /*isPlayerMini, isPlayerMiniShown*/
        384 && div5_class_value !== (div5_class_value = "pk-player " + (
        /*isPlayerMini*/
        ctx[7] ? "pk-player__mini pk-player__mini--slidein" :
        /*isPlayerMiniShown*/
        ctx[8] ? "pk-player__mini pk-player__mini--slideout" : "") + " svelte-19ql4i0")) {
          attr_dev(div5, "class", div5_class_value);
        }

        if (!current || dirty[0] &
        /*isPageScrolledToBottom*/
        262144) {
          set_style(div5, "display",
          /*isPageScrolledToBottom*/
          ctx[18] ? "none" : "flex");
        }

        if (!current || dirty[0] &
        /*playerStyle*/
        32 && div6_style_value !== (div6_style_value = "" + (
        /*playerStyle*/
        ctx[5] + "min-height: 104px; width: 100%; margin: 30px auto; box-sizing: border-box;"))) {
          attr_dev(div6, "style", div6_style_value);
        }
      },
      i: function intro(local) {
        if (current) return;
        transition_in(slider0.$$.fragment, local);
        transition_in(slider1.$$.fragment, local);
        transition_in(default_slot, local);
        current = true;
      },
      o: function outro(local) {
        transition_out(slider0.$$.fragment, local);
        transition_out(slider1.$$.fragment, local);
        transition_out(default_slot, local);
        current = false;
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(div6);
        if (if_block0) if_block0.d();
        destroy_component(slider0);
        if_block1.d();
        if_block2.d();
        if_block3.d();
        destroy_component(slider1);
        if (default_slot) default_slot.d(detaching);
        /*div5_binding*/

        ctx[38](null);
        /*div6_binding*/

        ctx[40](null);
        run_all(dispose);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_fragment$1.name,
      type: "component",
      source: "",
      ctx: ctx
    });
    return block;
  }

  function secondsToTime(secs) {
    secs = Math.round(secs);
    var hours = Math.floor(secs / (60 * 60));
    var divisorForMinutes = secs % (60 * 60);
    var minutes = Math.floor(divisorForMinutes / 60);
    var divisorForSeconds = divisorForMinutes % 60;
    var seconds = Math.ceil(divisorForSeconds);
    var result = "";

    if (0 < hours) {
      result = (10 > hours ? "0" : "") + hours + ":";
    } else {
      result = "00:";
    }

    result += (10 > minutes ? "0" : "") + minutes + ":" + (10 > seconds ? "0" : "") + seconds;
    return result;
  }

  function instance$1($$self, $$props, $$invalidate) {
    var _$$props$audioURL = $$props.audioURL,
        audioURL = _$$props$audioURL === void 0 ? null : _$$props$audioURL;
    var _$$props$lockAudioURL = $$props.lockAudioURL,
        lockAudioURL = _$$props$lockAudioURL === void 0 ? null : _$$props$lockAudioURL;
    var _$$props$lockTimeInSe = $$props.lockTimeInSeconds,
        lockTimeInSeconds = _$$props$lockTimeInSe === void 0 ? null : _$$props$lockTimeInSe;
    var _$$props$textTranslat = $$props.textTranslations,
        textTranslations = _$$props$textTranslat === void 0 ? {} : _$$props$textTranslat;
    var _$$props$style = $$props.style,
        playerStyle = _$$props$style === void 0 ? "" : _$$props$style;
    var _$$props$playerMiniOf = $$props.playerMiniOff,
        playerMiniOff = _$$props$playerMiniOf === void 0 ? false : _$$props$playerMiniOf;
    var isPlayerMini = false;
    var isPlayerMiniShown = false;
    var isPlayStarted = false;
    var _$$props$currentTimeI = $$props.currentTimeInSeconds,
        currentTimeInSeconds = _$$props$currentTimeI === void 0 ? 0 : _$$props$currentTimeI;
    var endTimeInSeconds = 0;
    var audioSpeed = 1;
    var audioVolume = 1;
    var isPlaying = false;
    var currentTimeString;
    var endTimeString;
    var playerWrapperElement = null;
    var playerElement = null;
    var audioElement = null;
    var lockAudioElement = null;
    onMount(function () {
      $$invalidate(17, audioElement = playerWrapperElement.querySelector(".pk-player__audio"));

      if (null !== lockAudioURL && "" !== lockAudioURL) {
        lockAudioElement = playerWrapperElement.querySelector(".pk-player__lock-audio");
      }

      checkIsPlayerHasToBeMini();
    });
    var isLockPlayModeOn = false;

    function playIfPaused() {
      if (!isPlaying) {
        playOrPauseAudio(true);
      }
    }

    function playOrPauseAudio() {
      var isPlayPauseButtonPressed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      if (isLockPlayModeOn) {
        if (isPlaying && !isPlayPauseButtonPressed) {
          // start playing lock audio and continue if current time of real audio stil changing
          audioElement.pause();
          $$invalidate(12, isPlaying = false);

          if (null !== lockAudioElement) {
            if (lockAudioElement.paused) {
              lockAudioElement.play();
            }

            $$invalidate(12, isPlaying = true);
          }
        } else if (null === lockAudioElement) {
          $$invalidate(12, isPlaying = false);
        } else if (isPlaying) {
          lockAudioElement.pause();
          $$invalidate(12, isPlaying = false);
        } else {
          lockAudioElement.play();
          $$invalidate(12, isPlaying = true);
        }
      } else {
        if (isPlaying && null !== lockAudioElement && !lockAudioElement.paused) {
          lockAudioElement.pause();
          lockAudioElement.currentTime = 0;
          audioElement.play();
          $$invalidate(12, isPlaying = true);
        } else if (isPlaying) {
          audioElement.pause();
          $$invalidate(12, isPlaying = false);
        } else {
          audioElement.play();
          $$invalidate(12, isPlaying = true);
        }
      }

      if (!isPlayStarted && isPlaying) {
        isPlayStarted = true;
        checkIsPlayerHasToBeMini();
      }
    }

    var isLockPlayModeOnChanged = false;

    function updatePlayerCurrentTime(newTimeInSeconds) {
      var isFromAudio = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      newTimeInSeconds = Number(newTimeInSeconds);

      if (!isNaN(newTimeInSeconds)) {
        if (null !== lockTimeInSeconds && newTimeInSeconds > lockTimeInSeconds) {
          $$invalidate(0, currentTimeInSeconds = lockTimeInSeconds);
          $$invalidate(17, audioElement.currentTime = currentTimeInSeconds, audioElement);
        } else if (newTimeInSeconds > endTimeInSeconds) {
          $$invalidate(0, currentTimeInSeconds = endTimeInSeconds);
          $$invalidate(17, audioElement.currentTime = currentTimeInSeconds, audioElement);
        } else if (newTimeInSeconds < 0) {
          $$invalidate(0, currentTimeInSeconds = 0);
          $$invalidate(17, audioElement.currentTime = currentTimeInSeconds, audioElement);
        } else {
          $$invalidate(0, currentTimeInSeconds = newTimeInSeconds);

          if (!isFromAudio) {
            $$invalidate(17, audioElement.currentTime = currentTimeInSeconds, audioElement);
          }
        }

        isLockPlayModeOnChanged = isLockPlayModeOn !== (null !== lockTimeInSeconds && currentTimeInSeconds >= lockTimeInSeconds);
        isLockPlayModeOn = isLockPlayModeOnChanged ? !isLockPlayModeOn : isLockPlayModeOn;

        if (isPlaying && (currentTimeInSeconds >= endTimeInSeconds || null !== lockTimeInSeconds && currentTimeInSeconds >= lockTimeInSeconds || isLockPlayModeOnChanged)) {
          playOrPauseAudio(false);
        }
      }
    }

    function onSpeedClick() {
      if (1 == audioSpeed) {
        $$invalidate(10, audioSpeed = 1.25);
      } else if (1.25 == audioSpeed) {
        $$invalidate(10, audioSpeed = 1.5);
      } else if (1.5 == audioSpeed) {
        $$invalidate(10, audioSpeed = 1.75);
      } else if (1.75 == audioSpeed) {
        $$invalidate(10, audioSpeed = 2);
      } else if (2 == audioSpeed) {
        $$invalidate(10, audioSpeed = 1);
      }

      $$invalidate(17, audioElement.playbackRate = audioSpeed, audioElement);
    }

    function onVolumeSliderChanged(e) {
      if (audioVolume != e.detail.currentValue) {
        $$invalidate(11, audioVolume = e.detail.currentValue);
        $$invalidate(17, audioElement.volume = audioVolume, audioElement);

        if (null !== lockAudioElement) {
          lockAudioElement.volume = audioVolume;
        }
      }
    }

    function onVolumeButtonClick() {
      if (0 == audioVolume) {
        $$invalidate(11, audioVolume = 1);
      } else {
        $$invalidate(11, audioVolume = 0);
      }

      $$invalidate(17, audioElement.volume = audioVolume, audioElement);

      if (null !== lockAudioElement) {
        lockAudioElement.volume = audioVolume;
      }
    }

    var isPageScrolledToBottom = false;

    function checkIsPlayerHasToBeMini() {
      if (!playerMiniOff && isPlayStarted) {
        var position = playerWrapperElement.getBoundingClientRect();
        var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
        $$invalidate(7, isPlayerMini = position.bottom < 0 || position.top - viewHeight >= 0);
        var documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
        $$invalidate(18, isPageScrolledToBottom = viewHeight + window.scrollY + 20 >= documentHeight);
      }
    }

    var writable_props = ["audioURL", "lockAudioURL", "lockTimeInSeconds", "textTranslations", "style", "playerMiniOff", "currentTimeInSeconds"];
    Object.keys($$props).forEach(function (key) {
      if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Pk_player> was created with unknown prop '".concat(key, "'"));
    });
    var _$$props$$$slots = $$props.$$slots,
        $$slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
        $$scope = $$props.$$scope;
    validate_slots("Pk_player", $$slots, ['default']);

    var timeupdate_handler = function timeupdate_handler() {
      updatePlayerCurrentTime(audioElement.currentTime, true);
    };

    var loadedmetadata_handler = function loadedmetadata_handler() {
      $$invalidate(9, endTimeInSeconds = audioElement.duration);
    };

    var valuechanged_handler = function valuechanged_handler(e) {
      updatePlayerCurrentTime(e.detail.currentValue);
    };

    var click_handler = function click_handler() {
      updatePlayerCurrentTime(currentTimeInSeconds - 15);
    };

    var click_handler_1 = function click_handler_1() {
      playOrPauseAudio(true);
    };

    var click_handler_2 = function click_handler_2() {
      updatePlayerCurrentTime(currentTimeInSeconds + 60);
    };

    function div5_binding($$value) {
      binding_callbacks[$$value ? "unshift" : "push"](function () {
        $$invalidate(16, playerElement = $$value);
      });
    }

    var animationend_handler = function animationend_handler(e) {
      if (isPlayerMini) {
        $$invalidate(8, isPlayerMiniShown = true);
      } else {
        $$invalidate(8, isPlayerMiniShown = false);
        e.target.classList.remove("pk-player__mini", "pk-player__mini--slideout");
      }
    };

    function div6_binding($$value) {
      binding_callbacks[$$value ? "unshift" : "push"](function () {
        $$invalidate(15, playerWrapperElement = $$value);
      });
    }

    $$self.$set = function ($$props) {
      if ("audioURL" in $$props) $$invalidate(1, audioURL = $$props.audioURL);
      if ("lockAudioURL" in $$props) $$invalidate(2, lockAudioURL = $$props.lockAudioURL);
      if ("lockTimeInSeconds" in $$props) $$invalidate(3, lockTimeInSeconds = $$props.lockTimeInSeconds);
      if ("textTranslations" in $$props) $$invalidate(4, textTranslations = $$props.textTranslations);
      if ("style" in $$props) $$invalidate(5, playerStyle = $$props.style);
      if ("playerMiniOff" in $$props) $$invalidate(24, playerMiniOff = $$props.playerMiniOff);
      if ("currentTimeInSeconds" in $$props) $$invalidate(0, currentTimeInSeconds = $$props.currentTimeInSeconds);
      if ("$$scope" in $$props) $$invalidate(30, $$scope = $$props.$$scope);
    };

    $$self.$capture_state = function () {
      return {
        onMount: onMount,
        Slider: Pk_slider,
        audioURL: audioURL,
        lockAudioURL: lockAudioURL,
        lockTimeInSeconds: lockTimeInSeconds,
        textTranslations: textTranslations,
        playerStyle: playerStyle,
        playerMiniOff: playerMiniOff,
        isPlayerMini: isPlayerMini,
        isPlayerMiniShown: isPlayerMiniShown,
        isPlayStarted: isPlayStarted,
        currentTimeInSeconds: currentTimeInSeconds,
        endTimeInSeconds: endTimeInSeconds,
        audioSpeed: audioSpeed,
        audioVolume: audioVolume,
        isPlaying: isPlaying,
        currentTimeString: currentTimeString,
        endTimeString: endTimeString,
        playerWrapperElement: playerWrapperElement,
        playerElement: playerElement,
        audioElement: audioElement,
        lockAudioElement: lockAudioElement,
        isLockPlayModeOn: isLockPlayModeOn,
        playIfPaused: playIfPaused,
        playOrPauseAudio: playOrPauseAudio,
        isLockPlayModeOnChanged: isLockPlayModeOnChanged,
        updatePlayerCurrentTime: updatePlayerCurrentTime,
        secondsToTime: secondsToTime,
        onSpeedClick: onSpeedClick,
        onVolumeSliderChanged: onVolumeSliderChanged,
        onVolumeButtonClick: onVolumeButtonClick,
        isPageScrolledToBottom: isPageScrolledToBottom,
        checkIsPlayerHasToBeMini: checkIsPlayerHasToBeMini
      };
    };

    $$self.$inject_state = function ($$props) {
      if ("audioURL" in $$props) $$invalidate(1, audioURL = $$props.audioURL);
      if ("lockAudioURL" in $$props) $$invalidate(2, lockAudioURL = $$props.lockAudioURL);
      if ("lockTimeInSeconds" in $$props) $$invalidate(3, lockTimeInSeconds = $$props.lockTimeInSeconds);
      if ("textTranslations" in $$props) $$invalidate(4, textTranslations = $$props.textTranslations);
      if ("playerStyle" in $$props) $$invalidate(5, playerStyle = $$props.playerStyle);
      if ("playerMiniOff" in $$props) $$invalidate(24, playerMiniOff = $$props.playerMiniOff);
      if ("isPlayerMini" in $$props) $$invalidate(7, isPlayerMini = $$props.isPlayerMini);
      if ("isPlayerMiniShown" in $$props) $$invalidate(8, isPlayerMiniShown = $$props.isPlayerMiniShown);
      if ("isPlayStarted" in $$props) isPlayStarted = $$props.isPlayStarted;
      if ("currentTimeInSeconds" in $$props) $$invalidate(0, currentTimeInSeconds = $$props.currentTimeInSeconds);
      if ("endTimeInSeconds" in $$props) $$invalidate(9, endTimeInSeconds = $$props.endTimeInSeconds);
      if ("audioSpeed" in $$props) $$invalidate(10, audioSpeed = $$props.audioSpeed);
      if ("audioVolume" in $$props) $$invalidate(11, audioVolume = $$props.audioVolume);
      if ("isPlaying" in $$props) $$invalidate(12, isPlaying = $$props.isPlaying);
      if ("currentTimeString" in $$props) $$invalidate(13, currentTimeString = $$props.currentTimeString);
      if ("endTimeString" in $$props) $$invalidate(14, endTimeString = $$props.endTimeString);
      if ("playerWrapperElement" in $$props) $$invalidate(15, playerWrapperElement = $$props.playerWrapperElement);
      if ("playerElement" in $$props) $$invalidate(16, playerElement = $$props.playerElement);
      if ("audioElement" in $$props) $$invalidate(17, audioElement = $$props.audioElement);
      if ("lockAudioElement" in $$props) lockAudioElement = $$props.lockAudioElement;
      if ("isLockPlayModeOn" in $$props) isLockPlayModeOn = $$props.isLockPlayModeOn;
      if ("isLockPlayModeOnChanged" in $$props) isLockPlayModeOnChanged = $$props.isLockPlayModeOnChanged;
      if ("isPageScrolledToBottom" in $$props) $$invalidate(18, isPageScrolledToBottom = $$props.isPageScrolledToBottom);
    };

    if ($$props && "$$inject" in $$props) {
      $$self.$inject_state($$props.$$inject);
    }

    $$self.$$.update = function () {
      if ($$self.$$.dirty[0] &
      /*endTimeInSeconds, currentTimeInSeconds*/
      513) {
         {
          $$invalidate(14, endTimeString = secondsToTime(endTimeInSeconds));
          $$invalidate(13, currentTimeString = secondsToTime(currentTimeInSeconds));
        }
      }
    };

    return [currentTimeInSeconds, audioURL, lockAudioURL, lockTimeInSeconds, textTranslations, playerStyle, updatePlayerCurrentTime, isPlayerMini, isPlayerMiniShown, endTimeInSeconds, audioSpeed, audioVolume, isPlaying, currentTimeString, endTimeString, playerWrapperElement, playerElement, audioElement, isPageScrolledToBottom, playOrPauseAudio, onSpeedClick, onVolumeSliderChanged, onVolumeButtonClick, checkIsPlayerHasToBeMini, playerMiniOff, playIfPaused, isPlayStarted, lockAudioElement, isLockPlayModeOn, isLockPlayModeOnChanged, $$scope, $$slots, timeupdate_handler, loadedmetadata_handler, valuechanged_handler, click_handler, click_handler_1, click_handler_2, div5_binding, animationend_handler, div6_binding];
  }

  var Pk_player = /*#__PURE__*/function (_SvelteComponentDev) {
    _inherits(Pk_player, _SvelteComponentDev);

    var _super = _createSuper(Pk_player);

    function Pk_player(options) {
      var _this;

      _classCallCheck(this, Pk_player);

      _this = _super.call(this, options);
      if (!document_1.getElementById("svelte-19ql4i0-style")) add_css$1();
      init(_assertThisInitialized(_this), options, instance$1, create_fragment$1, safe_not_equal, {
        audioURL: 1,
        lockAudioURL: 2,
        lockTimeInSeconds: 3,
        textTranslations: 4,
        style: 5,
        playerMiniOff: 24,
        currentTimeInSeconds: 0,
        playIfPaused: 25,
        updatePlayerCurrentTime: 6
      }, [-1, -1]);
      dispatch_dev("SvelteRegisterComponent", {
        component: _assertThisInitialized(_this),
        tagName: "Pk_player",
        options: options,
        id: create_fragment$1.name
      });
      return _this;
    }

    _createClass(Pk_player, [{
      key: "audioURL",
      get: function get() {
        throw new Error("<Pk_player>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      },
      set: function set(value) {
        throw new Error("<Pk_player>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      }
    }, {
      key: "lockAudioURL",
      get: function get() {
        throw new Error("<Pk_player>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      },
      set: function set(value) {
        throw new Error("<Pk_player>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      }
    }, {
      key: "lockTimeInSeconds",
      get: function get() {
        throw new Error("<Pk_player>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      },
      set: function set(value) {
        throw new Error("<Pk_player>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      }
    }, {
      key: "textTranslations",
      get: function get() {
        throw new Error("<Pk_player>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      },
      set: function set(value) {
        throw new Error("<Pk_player>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      }
    }, {
      key: "style",
      get: function get() {
        throw new Error("<Pk_player>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      },
      set: function set(value) {
        throw new Error("<Pk_player>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      }
    }, {
      key: "playerMiniOff",
      get: function get() {
        throw new Error("<Pk_player>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      },
      set: function set(value) {
        throw new Error("<Pk_player>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      }
    }, {
      key: "currentTimeInSeconds",
      get: function get() {
        throw new Error("<Pk_player>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      },
      set: function set(value) {
        throw new Error("<Pk_player>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      }
    }, {
      key: "playIfPaused",
      get: function get() {
        return this.$$.ctx[25];
      },
      set: function set(value) {
        throw new Error("<Pk_player>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      }
    }, {
      key: "updatePlayerCurrentTime",
      get: function get() {
        return this.$$.ctx[6];
      },
      set: function set(value) {
        throw new Error("<Pk_player>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      }
    }]);

    return Pk_player;
  }(SvelteComponentDev);

  var console_1 = globals.console,
      document_1$1 = globals.document;
  var file$2 = "views/pk-admin-options.svelte";

  function add_css$2() {
    var style = element("style");
    style.id = "svelte-1nxih9c-style";
    style.textContent = ".pk-admin-options.svelte-1nxih9c.svelte-1nxih9c{display:grid;align-items:start;grid-template-columns:200px 20px auto;grid-template-rows:55px auto;grid-template-areas:\"logo - options\"\n    \"menu - options\";margin:20px 15px 20px 0}.pk-admin-options.svelte-1nxih9c p.svelte-1nxih9c,.pk-admin-options__about-tab.svelte-1nxih9c li.svelte-1nxih9c{font-size:15px;line-height:1.5em;margin:0 0 20px 0}.pk-admin-options__about-tab.svelte-1nxih9c ul.svelte-1nxih9c{margin:0 0 20px 30px}.pk-admin-options__about-tab.svelte-1nxih9c li.svelte-1nxih9c{list-style-type:disc;margin:0 0 10px 0}.pk-admin-options.svelte-1nxih9c hr.svelte-1nxih9c{margin-bottom:15px}.pk-admin-options.svelte-1nxih9c h3.svelte-1nxih9c{margin:0 0 15px}.pk-admin-options__logo.svelte-1nxih9c.svelte-1nxih9c{grid-area:logo;margin:10px 0 15px}.pk-admin-options__logo.svelte-1nxih9c img.svelte-1nxih9c{width:200px;height:33px}.pk-admin-options__menu.svelte-1nxih9c.svelte-1nxih9c{grid-area:menu;width:200px;display:flex;flex-direction:column}.pk-admin-options__menu.svelte-1nxih9c button.svelte-1nxih9c,.pk-admin-options__menu.svelte-1nxih9c a.svelte-1nxih9c{font-size:16px;font-weight:bold;line-height:1.2em;border:none;border-radius:30px;background-color:transparent;padding:10px 5px;margin-bottom:5px;cursor:pointer;text-decoration:none;color:inherit;text-align:center}.pk-admin-options__menu.svelte-1nxih9c button.svelte-1nxih9c:focus,.pk-admin-options__menu.svelte-1nxih9c a.svelte-1nxih9c:focus{outline:none;box-shadow:none}.pk-admin-options__menu.svelte-1nxih9c button.active.svelte-1nxih9c{background-color:#59BF19 !important;color:#fff}.pk-admin-options__menu.svelte-1nxih9c button.svelte-1nxih9c:hover,.pk-admin-options__menu.svelte-1nxih9c a.svelte-1nxih9c:hover{background-color:#afd9a3}.pk-admin-options__panel.svelte-1nxih9c.svelte-1nxih9c{grid-area:options;padding:15px 20px;background-color:#fff;border-radius:2px;border:1px solid #ccd0d4;box-shadow:0 1px 1px rgba(0,0,0,.04);box-sizing:border-box}.pk-admin-options__panel--slide-out.svelte-1nxih9c.svelte-1nxih9c{transition:all 300ms ease-out;transform:translateX(215px)}.pk-admin-options__panel--slide-in.svelte-1nxih9c.svelte-1nxih9c{transition:all 300ms ease-out;transform:translateX(0)}.pk-admin-options__menu-icon.svelte-1nxih9c.svelte-1nxih9c{display:none;border:none;background:none;outline:0;padding:10px 0;cursor:pointer;position:absolute;top:15px;left:20px}.pk-admin-options__menu-icon.svelte-1nxih9c span.svelte-1nxih9c{display:block;width:30px;height:4px;background:#000;position:relative;transition:all 300ms ease-out}.pk-admin-options__menu-icon.svelte-1nxih9c span.svelte-1nxih9c:before,.pk-admin-options__menu-icon.svelte-1nxih9c span.svelte-1nxih9c:after{display:block;width:inherit;height:4px;position:absolute;background:inherit;left:0;content:'';transition:all 300ms ease-out}.pk-admin-options__menu-icon.svelte-1nxih9c span.svelte-1nxih9c:before{bottom:200%}.pk-admin-options__menu-icon.svelte-1nxih9c span.svelte-1nxih9c:after{top:200%}.pk-admin-options__menu-icon--to-arrow.svelte-1nxih9c.svelte-1nxih9c{transform:rotate(180deg)}.pk-admin-options__menu-icon--to-arrow.svelte-1nxih9c.svelte-1nxih9c:before{transform:rotate(45deg);margin:-8.8% 50%;width:60% !important}.pk-admin-options__menu-icon--to-arrow.svelte-1nxih9c.svelte-1nxih9c:after{transform:rotate(-45deg);margin:-8.8% 50%;width:60% !important}.pk-admin-options__menu-icon--from-arrow.svelte-1nxih9c.svelte-1nxih9c{transform:rotate(-180deg)}.pk-admin-options__menu-icon--from-arrow.svelte-1nxih9c.svelte-1nxih9c:before{transform:rotate(0deg);margin:0;width:100%}.pk-admin-options__menu-icon--from-arrow.svelte-1nxih9c.svelte-1nxih9c:after{transform:rotate(0deg);margin:0;width:100%}h2.svelte-1nxih9c.svelte-1nxih9c{margin:3px 0 15px 0;font-weight:bold}@media all and (max-width: 768px){.pk-admin-options.svelte-1nxih9c.svelte-1nxih9c{display:flex;flex-direction:column;margin:15px 10px 15px 0;position:relative}.pk-admin-options__logo.svelte-1nxih9c.svelte-1nxih9c{align-self:center}.pk-admin-options__logo.svelte-1nxih9c img.svelte-1nxih9c{width:300px;height:49px;align-self:center}.pk-admin-options__menu.svelte-1nxih9c.svelte-1nxih9c{position:absolute;top:75px}.pk-admin-options__panel.svelte-1nxih9c.svelte-1nxih9c{position:absolute;top:75px;left:0;width:100%}.pk-admin-options__menu-icon.svelte-1nxih9c.svelte-1nxih9c{display:block}.pk-admin-options__panel.svelte-1nxih9c h2.svelte-1nxih9c{margin-left:45px}}.pk-pricing-plan.svelte-1nxih9c.svelte-1nxih9c{display:flex;align-items:center;flex-wrap:nowrap}.pk-podcast-categories__level.svelte-1nxih9c.svelte-1nxih9c{margin-top:6px;margin-left:35px}@media screen and (max-width: 480px){.pk-pricing-plan.svelte-1nxih9c.svelte-1nxih9c{flex-wrap:wrap}.pk-podcast-categories__level.svelte-1nxih9c.svelte-1nxih9c{margin-left:5px}}.pk-pricing-plan-list.svelte-1nxih9c.svelte-1nxih9c{max-height:700px;overflow-y:auto}.pk-podcast-lock-audio.svelte-1nxih9c.svelte-1nxih9c{border:1px solid #bbb;margin-right:10px;background-color:#fff;border-radius:2px;overflow:hidden;direction:rtl;white-space:nowrap;flex-grow:1}.pk-button.svelte-1nxih9c.svelte-1nxih9c{margin:0}.pk-button__submit.svelte-1nxih9c.svelte-1nxih9c{display:block;margin-left:auto;background-color:#59BF19;color:#fff;border-color:#59BF19}.pk-button__submit.svelte-1nxih9c.svelte-1nxih9c:hover{background-color:#56BA19;border-color:#56BA19;cursor:pointer}.pk-checkbox.svelte-1nxih9c.svelte-1nxih9c{display:flex;min-height:25px;align-items:center;position:relative;padding-left:35px;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.pk-checkbox.svelte-1nxih9c input.svelte-1nxih9c{position:absolute;opacity:0;cursor:pointer;height:0;width:0}.pk-checkbox__checkmark.svelte-1nxih9c.svelte-1nxih9c{position:absolute;top:0;left:0;height:25px;width:25px;background-color:#eee}.pk-checkbox input:checked~.pk-checkbox__checkmark.svelte-1nxih9c.svelte-1nxih9c{background-color:#27303C}.pk-checkbox__checkmark.svelte-1nxih9c.svelte-1nxih9c:after{content:\"\";position:absolute;display:none}.pk-checkbox input:checked~.pk-checkbox__checkmark.svelte-1nxih9c.svelte-1nxih9c:after{display:block}.pk-checkbox.svelte-1nxih9c .pk-checkbox__checkmark.svelte-1nxih9c:after{left:9px;top:5px;width:5px;height:10px;border:solid white;border-width:0 3px 3px 0;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg)}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGstYWRtaW4tb3B0aW9ucy5zdmVsdGUiLCJzb3VyY2VzIjpbInBrLWFkbWluLW9wdGlvbnMuc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG5pbXBvcnQgUGxheWVyIGZyb20gJy4vcGstcGxheWVyLnN2ZWx0ZSc7XG5cbmV4cG9ydCBsZXQgcGtOb25jZSA9IG51bGw7XG5leHBvcnQgbGV0IGFkbWluQWN0aW9uVVJMID0gbnVsbDtcbmV4cG9ydCBsZXQgcGtJbWFnZXNVUkwgPSBudWxsO1xuXG5leHBvcnQgbGV0IHByaWNpbmdQbGFuc09wdGlvbnMgPSBbXTtcblxuZXhwb3J0IGxldCBwb2RjYXN0TG9ja0F1ZGlvSWQgPSBudWxsO1xuZXhwb3J0IGxldCBwb2RjYXN0TG9ja0F1ZGlvVVJMID0gbnVsbDtcbmV4cG9ydCBsZXQgcG9kY2FzdExvY2tNZXNzYWdlID0gJyc7XG5cbmV4cG9ydCBsZXQgdGV4dFRyYW5zbGF0aW9ucyA9IHt9O1xuXG5sZXQgcG9kY2FzdFVwbG9hZGVyO1xubGV0IHBrQWRtaW5PcHRpb25zO1xubGV0IHBvZGNhc3RMb2NrTWVzc2FnZUVkaXRvciA9IG51bGw7XG5cbmxldCBhZG1pbk9wdGlvbnNFbGVtZW50O1xubGV0IG1lbnVFbGVtZW50O1xubGV0IHBhbmVsRWxlbWVudDtcbmxldCBpc01lbnVPcGVuID0gbnVsbDtcbmxldCB0b3VjaFN0YXJ0WCA9IG51bGw7XG5cbmZ1bmN0aW9uIGNoYW5nZU9wdGlvbnNQYW5lbChlKSB7XG4gICAgbGV0IG1lbnVJdGVtcyA9IG1lbnVFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbicpO1xuXG4gICAgZm9yKCBsZXQgaSA9IDA7IGkgPCBtZW51SXRlbXMubGVuZ3RoOyBpKysgKSB7XG5cbiAgICAgICAgaWYgKCBlLnRhcmdldCA9PSBtZW51SXRlbXNbaV0gKSB7XG5cbiAgICAgICAgICAgIG1lbnVJdGVtc1tpXS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtjb25zb2xlLmxvZyhwYW5lbEVsZW1lbnQuY2hpbGRyZW5baSsxXSk7XG4gICAgICAgICAgICBwYW5lbEVsZW1lbnQuY2hpbGRyZW5bIGkgKyAxIF0uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9ICd0YWInICsgKGkgKyAxKTtcbiAgICAgICAgICAgIGFkbWluQWN0aW9uVVJMID0gYWRtaW5BY3Rpb25VUkwgKyB3aW5kb3cubG9jYXRpb24uaGFzaDtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWVudUl0ZW1zW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgcGFuZWxFbGVtZW50LmNoaWxkcmVuWyBpICsgMSBdLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNoZWNrRWRkRG93bmxvYWQoZSkge1xuXG4gICAgbGV0IGlucHV0ID0gZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJudW1iZXJcIl0nKTtcbiAgICBsZXQgYnV0dG9uID0gZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbicpO1xuXG4gICAgaW5wdXQuZGlzYWJsZWQgPSBidXR0b24uZGlzYWJsZWQgPSAhZS50YXJnZXQuY2hlY2tlZDtcbn1cbmZ1bmN0aW9uIHNob3dIaWRlUHJpY2luZ1BsYW5DYXRlZ29yaWVzKGUpIHtcblxuICAgIGxldCBjdXJyZW50Q2F0ZWdvcmllcyA9IGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKCcucGstcG9kY2FzdC1jYXRlZ29yaWVzJyk7XG4gICAgbGV0IGFsbENhdGVnb3JpZXMgPSBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yQWxsKCcucGstcG9kY2FzdC1jYXRlZ29yaWVzJyk7XG5cbiAgICBmb3IobGV0IGk9MDsgaSA8IGFsbENhdGVnb3JpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGN1cnJlbnRDYXRlZ29yaWVzID09IGFsbENhdGVnb3JpZXNbaV0pIHtcbiAgICAgICAgICAgIGFsbENhdGVnb3JpZXNbaV0uc3R5bGUuZGlzcGxheSA9ICgnZmxleCcgPT0gYWxsQ2F0ZWdvcmllc1tpXS5zdHlsZS5kaXNwbGF5ID8gJ25vbmUnIDogJ2ZsZXgnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFsbENhdGVnb3JpZXNbaV0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gaGFuZGxlUG9kY2FzdFNldHVwKGUpIHtcblxuICAgIGlmICggbnVsbCAhPT0gcG9kY2FzdExvY2tBdWRpb1VSTCApIHtcblxuICAgICAgICBwb2RjYXN0TG9ja0F1ZGlvSWQgPSBudWxsO1xuICAgICAgICBwb2RjYXN0TG9ja0F1ZGlvVVJMID0gbnVsbDtcblxuICAgIH0gZWxzZSB7XG5cbiAgICAgICAgaWYgKCBwb2RjYXN0VXBsb2FkZXIgKSB7IC8vIElmIHRoZSBtZWRpYSBmcmFtZSBhbHJlYWR5IGV4aXN0cywgcmVvcGVuIGl0LlxuICAgICAgICAgICAgcG9kY2FzdFVwbG9hZGVyLm9wZW4oKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHBvZGNhc3RVcGxvYWRlciA9IHdwLm1lZGlhKHtcbiAgICAgICAgICAgICAgICB0aXRsZTogdGV4dFRyYW5zbGF0aW9ucy5zZWxlY3RMb2NrQXVkaW8sXG4gICAgICAgICAgICAgICAgZnJhbWU6ICdzZWxlY3QnLFxuICAgICAgICAgICAgICAgIGxpYnJhcnk6IHsgdHlwZSA6ICdhdWRpbycgfSxcbiAgICAgICAgICAgICAgICBidXR0b246IHsgdGV4dDogdGV4dFRyYW5zbGF0aW9ucy5zZWxlY3RMb2NrQXVkaW8gfSxcbiAgICAgICAgICAgICAgICBtdWx0aXBsZTogZmFsc2UgXG4gICAgICAgICAgICB9KS5vbignc2VsZWN0JywgZnVuY3Rpb24oKSB7IC8vIGl0IGFsc28gaGFzIFwib3BlblwiIGFuZCBcImNsb3NlXCIgZXZlbnRzIFxuICAgICAgICAgICAgICAgIGxldCBhdHRhY2htZW50ID0gcG9kY2FzdFVwbG9hZGVyLnN0YXRlKCkuZ2V0KCdzZWxlY3Rpb24nKS5maXJzdCgpLnRvSlNPTigpO1xuICAgICAgICAgICAgICAgIHBvZGNhc3RMb2NrQXVkaW9VUkwgPSBhdHRhY2htZW50LnVybDtcbiAgICAgICAgICAgICAgICBwb2RjYXN0TG9ja0F1ZGlvSWQgPSBhdHRhY2htZW50LmlkO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5vcGVuKCk7XG4gICAgfVxufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24oKSB7IFxuICAgIHdwLmVkaXRvci5pbml0aWFsaXplKCdway1wb2RjYXN0LWxvY2stbWVzc2FnZScsIHtcbiAgICAgICAgICAgIHRpbnltY2U6IHtcbiAgICAgICAgICAgICAgICB3cGF1dG9wOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB0b29sYmFyMTogJ2Zvcm1hdHNlbGVjdCxib2xkLGl0YWxpYyxidWxsaXN0LG51bWxpc3QsYmxvY2txdW90ZSxocixhbGlnbmxlZnQsYWxpZ25jZW50ZXIsYWxpZ25yaWdodCxsaW5rLHVubGluayxmb3JlY29sb3IscmVtb3ZlZm9ybWF0JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBxdWlja3RhZ3M6IHRydWUsXG4gICAgICAgICAgICBtZWRpYUJ1dHRvbnM6IHRydWVcbiAgICAgICAgfSk7XG59LCBmYWxzZSk7XG5cbmZ1bmN0aW9uIHByZXBhcmVQb2RjYXN0TG9ja01lc3NhZ2VGb3JTdWJtaXQoKSB7XG4gICAgaWYgKG51bGwgPT09IHBvZGNhc3RMb2NrTWVzc2FnZUVkaXRvcikge1xuICAgICAgICBwb2RjYXN0TG9ja01lc3NhZ2VFZGl0b3IgPSB0aW55bWNlLmdldCgncGstcG9kY2FzdC1sb2NrLW1lc3NhZ2UnKTtcbiAgICB9XG4gICAgcG9kY2FzdExvY2tNZXNzYWdlRWRpdG9yLnNhdmUoKTtcbn1cblxuZnVuY3Rpb24gZW5kT3B0aW9uc1BhbmVsVG91Y2hNb3ZlKGUpIHtcblxuICAgIGxldCBjdXJyZW50WCA9IHBhcnNlSW50KGUuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WCk7XG4gICAgbGV0IG1vdmVEaXN0YW5jZSA9IGN1cnJlbnRYIC0gdG91Y2hTdGFydFg7XG4gICAgaWYgKDEwIDwgbW92ZURpc3RhbmNlKSB7XG4gICAgICAgIHBhbmVsRWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSBudWxsO1xuICAgICAgICBwYW5lbEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgncGstYWRtaW4tb3B0aW9uc19fcGFuZWwtLXNsaWRlLWluJyk7XG4gICAgICAgIHBhbmVsRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdway1hZG1pbi1vcHRpb25zX19wYW5lbC0tc2xpZGUtb3V0Jyk7XG4gICAgICAgIGlzTWVudU9wZW4gPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAoLTEwID4gbW92ZURpc3RhbmNlKSB7XG4gICAgICAgIHBhbmVsRWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSBudWxsO1xuICAgICAgICBwYW5lbEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgncGstYWRtaW4tb3B0aW9uc19fcGFuZWwtLXNsaWRlLW91dCcpO1xuICAgICAgICBwYW5lbEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgncGstYWRtaW4tb3B0aW9uc19fcGFuZWwtLXNsaWRlLWluJyk7XG4gICAgICAgIGlzTWVudU9wZW4gPSBmYWxzZTtcbiAgICB9XG59XG5cbjwvc2NyaXB0PlxuXG48c3R5bGU+XG5cbi5way1hZG1pbi1vcHRpb25zIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwMHB4IDIwcHggYXV0bztcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDU1cHggYXV0bztcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcbiAgICBcImxvZ28gLSBvcHRpb25zXCJcbiAgICBcIm1lbnUgLSBvcHRpb25zXCI7XG4gICAgbWFyZ2luOiAyMHB4IDE1cHggMjBweCAwO1xufVxuLnBrLWFkbWluLW9wdGlvbnMgcCwgLnBrLWFkbWluLW9wdGlvbnNfX2Fib3V0LXRhYiBsaSB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjVlbTtcbiAgICBtYXJnaW46IDAgMCAyMHB4IDA7XG59XG4ucGstYWRtaW4tb3B0aW9uc19fYWJvdXQtdGFiIHVsIHtcbiAgICBtYXJnaW46IDAgMCAyMHB4IDMwcHg7XG59XG4ucGstYWRtaW4tb3B0aW9uc19fYWJvdXQtdGFiIGxpIHtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IGRpc2M7XG4gICAgbWFyZ2luOiAwIDAgMTBweCAwO1xufVxuLnBrLWFkbWluLW9wdGlvbnMgaHIgeyBtYXJnaW4tYm90dG9tOiAxNXB4OyB9XG4ucGstYWRtaW4tb3B0aW9ucyBoMyB7IG1hcmdpbjogMCAwIDE1cHg7IH1cblxuLnBrLWFkbWluLW9wdGlvbnNfX2xvZ28geyBncmlkLWFyZWE6IGxvZ287IG1hcmdpbjogMTBweCAwIDE1cHg7IH1cbi5way1hZG1pbi1vcHRpb25zX19sb2dvIGltZyB7IHdpZHRoOiAyMDBweDsgaGVpZ2h0OiAzM3B4OyB9XG5cbi5way1hZG1pbi1vcHRpb25zX19tZW51IHtcbiAgICBncmlkLWFyZWE6IG1lbnU7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5way1hZG1pbi1vcHRpb25zX19tZW51IGJ1dHRvbiwgLnBrLWFkbWluLW9wdGlvbnNfX21lbnUgYSB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjJlbTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBwYWRkaW5nOiAxMHB4IDVweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ucGstYWRtaW4tb3B0aW9uc19fbWVudSBidXR0b246Zm9jdXMsXG4ucGstYWRtaW4tb3B0aW9uc19fbWVudSBhOmZvY3VzIHsgb3V0bGluZTogbm9uZTsgYm94LXNoYWRvdzogbm9uZTsgfVxuLnBrLWFkbWluLW9wdGlvbnNfX21lbnUgYnV0dG9uLmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU5QkYxOSAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjZmZmO1xufVxuLnBrLWFkbWluLW9wdGlvbnNfX21lbnUgYnV0dG9uOmhvdmVyLCAucGstYWRtaW4tb3B0aW9uc19fbWVudSBhOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWZkOWEzO1xufVxuXG4ucGstYWRtaW4tb3B0aW9uc19fcGFuZWwge1xuICAgIGdyaWQtYXJlYTogb3B0aW9ucztcbiAgICBwYWRkaW5nOiAxNXB4IDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjZDBkNDtcbiAgICBib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLDAsMCwuMDQpO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4ucGstYWRtaW4tb3B0aW9uc19fcGFuZWwtLXNsaWRlLW91dCB7XG4gICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGVhc2Utb3V0O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMTVweCk7XG59XG4ucGstYWRtaW4tb3B0aW9uc19fcGFuZWwtLXNsaWRlLWluIHtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgZWFzZS1vdXQ7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xufVxuXG4ucGstYWRtaW4tb3B0aW9uc19fbWVudS1pY29uIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIG91dGxpbmU6IDA7XG4gICAgcGFkZGluZzogMTBweCAwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxNXB4O1xuICAgIGxlZnQ6IDIwcHg7XG59XG4ucGstYWRtaW4tb3B0aW9uc19fbWVudS1pY29uIHNwYW4ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogNHB4O1xuICAgIGJhY2tncm91bmQ6ICMwMDA7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlLW91dDtcbn1cbi5way1hZG1pbi1vcHRpb25zX19tZW51LWljb24gc3BhbjpiZWZvcmUsIC5way1hZG1pbi1vcHRpb25zX19tZW51LWljb24gc3BhbjphZnRlciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IGluaGVyaXQ7XG4gICAgaGVpZ2h0OiA0cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XG4gICAgbGVmdDogMDtcbiAgICBjb250ZW50OiAnJztcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgZWFzZS1vdXQ7XG59XG4ucGstYWRtaW4tb3B0aW9uc19fbWVudS1pY29uIHNwYW46YmVmb3JlIHsgYm90dG9tOiAyMDAlOyB9XG4ucGstYWRtaW4tb3B0aW9uc19fbWVudS1pY29uIHNwYW46YWZ0ZXIgeyB0b3A6IDIwMCU7IH1cblxuLnBrLWFkbWluLW9wdGlvbnNfX21lbnUtaWNvbi0tdG8tYXJyb3cge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG59XG4ucGstYWRtaW4tb3B0aW9uc19fbWVudS1pY29uLS10by1hcnJvdzpiZWZvcmUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICBtYXJnaW46IC04LjglIDUwJTtcbiAgICB3aWR0aDogNjAlICFpbXBvcnRhbnQ7XG59XG4ucGstYWRtaW4tb3B0aW9uc19fbWVudS1pY29uLS10by1hcnJvdzphZnRlciB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgICBtYXJnaW46IC04LjglIDUwJTtcbiAgICB3aWR0aDogNjAlICFpbXBvcnRhbnQ7XG59XG5cbi5way1hZG1pbi1vcHRpb25zX19tZW51LWljb24tLWZyb20tYXJyb3cge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC0xODBkZWcpO1xufVxuLnBrLWFkbWluLW9wdGlvbnNfX21lbnUtaWNvbi0tZnJvbS1hcnJvdzpiZWZvcmUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIG1hcmdpbjogMDtcbiAgICB3aWR0aDogMTAwJTtcbn1cbi5way1hZG1pbi1vcHRpb25zX19tZW51LWljb24tLWZyb20tYXJyb3c6YWZ0ZXIge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIG1hcmdpbjogMDtcbiAgICB3aWR0aDogMTAwJTtcbn1cbmgyIHsgbWFyZ2luOiAzcHggMCAxNXB4IDA7IGZvbnQtd2VpZ2h0OiBib2xkOyB9XG5cbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG5cbiAgICAucGstYWRtaW4tb3B0aW9ucyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIG1hcmdpbjogMTVweCAxMHB4IDE1cHggMDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIH1cbiAgICAucGstYWRtaW4tb3B0aW9uc19fbG9nbyB7IGFsaWduLXNlbGY6IGNlbnRlcjsgfVxuICAgIC5way1hZG1pbi1vcHRpb25zX19sb2dvIGltZyB7IHdpZHRoOiAzMDBweDsgaGVpZ2h0OiA0OXB4OyBhbGlnbi1zZWxmOiBjZW50ZXI7IH1cbiAgICAucGstYWRtaW4tb3B0aW9uc19fbWVudSB7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOiA3NXB4OyB9XG4gICAgLnBrLWFkbWluLW9wdGlvbnNfX3BhbmVsIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDc1cHg7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICAucGstYWRtaW4tb3B0aW9uc19fbWVudS1pY29uIHsgZGlzcGxheTogYmxvY2s7IH1cbiAgICAucGstYWRtaW4tb3B0aW9uc19fcGFuZWwgaDIgeyBtYXJnaW4tbGVmdDogNDVweDsgfVxufVxuXG5cbi5way1wcmljaW5nLXBsYW4ge1xuICAgIGRpc3BsYXk6IGZsZXg7IFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC13cmFwOiBub3dyYXA7XG59XG4ucGstcG9kY2FzdC1jYXRlZ29yaWVzX19sZXZlbCB7XG4gICAgbWFyZ2luLXRvcDogNnB4O1xuICAgIG1hcmdpbi1sZWZ0OiAzNXB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgIC5way1wcmljaW5nLXBsYW4ge1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgfVxuICAgIC5way1wb2RjYXN0LWNhdGVnb3JpZXNfX2xldmVsIHtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xufVxufVxuLnBrLXByaWNpbmctcGxhbi1saXN0IHtcbiAgICBtYXgtaGVpZ2h0OiA3MDBweDtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4ucGstcG9kY2FzdC1sb2NrLWF1ZGlvIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYmJiO1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuOyBcbiAgICBkaXJlY3Rpb246IHJ0bDsgXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBmbGV4LWdyb3c6IDE7XG59XG4ucGstYnV0dG9uIHsgbWFyZ2luOiAwOyB9XG5cbi5way1idXR0b25fX3N1Ym1pdCB7IGRpc3BsYXk6IGJsb2NrOyBtYXJnaW4tbGVmdDogYXV0bzsgYmFja2dyb3VuZC1jb2xvcjogIzU5QkYxOTsgY29sb3I6ICNmZmY7IGJvcmRlci1jb2xvcjogIzU5QkYxOTsgfVxuLnBrLWJ1dHRvbl9fc3VibWl0OmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTZCQTE5O1xuICAgIGJvcmRlci1jb2xvcjogIzU2QkExOTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5way1jaGVja2JveCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtaW4taGVpZ2h0OiAyNXB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmctbGVmdDogMzVweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLnBrLWNoZWNrYm94IGlucHV0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgb3BhY2l0eTogMDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgaGVpZ2h0OiAwO1xuICAgIHdpZHRoOiAwO1xufVxuXG4ucGstY2hlY2tib3hfX2NoZWNrbWFyayB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGhlaWdodDogMjVweDtcbiAgICB3aWR0aDogMjVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xufVxuXG4ucGstY2hlY2tib3ggaW5wdXQ6Y2hlY2tlZCB+IC5way1jaGVja2JveF9fY2hlY2ttYXJrIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjczMDNDO1xufVxuXG4ucGstY2hlY2tib3hfX2NoZWNrbWFyazphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLnBrLWNoZWNrYm94IGlucHV0OmNoZWNrZWQgfiAucGstY2hlY2tib3hfX2NoZWNrbWFyazphZnRlciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5way1jaGVja2JveCAucGstY2hlY2tib3hfX2NoZWNrbWFyazphZnRlciB7XG4gICAgbGVmdDogOXB4O1xuICAgIHRvcDogNXB4O1xuICAgIHdpZHRoOiA1cHg7XG4gICAgaGVpZ2h0OiAxMHB4O1xuICAgIGJvcmRlcjogc29saWQgd2hpdGU7XG4gICAgYm9yZGVyLXdpZHRoOiAwIDNweCAzcHggMDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbn1cbjwvc3R5bGU+XG5cbjxkaXYgY2xhc3M9XCJway1hZG1pbi1vcHRpb25zXCIgYmluZDp0aGlzPXthZG1pbk9wdGlvbnNFbGVtZW50fT5cbiAgICA8aDEgY2xhc3M9XCJway1hZG1pbi1vcHRpb25zX19sb2dvXCI+PGltZyBzcmM9XCJ7cGtJbWFnZXNVUkx9cGstbG9nby5zdmdcIiBhbHQ9XCJQb2RjYXN0ZXIgS2l0XCIvPjwvaDE+XG4gICAgPG5hdiBjbGFzcz1cInBrLWFkbWluLW9wdGlvbnNfX21lbnVcIiBiaW5kOnRoaXM9e21lbnVFbGVtZW50fT5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInsnI3RhYjInICE9PSB3aW5kb3cubG9jYXRpb24uaGFzaCA/ICdhY3RpdmUnIDogJycgfVwiIFxuICAgICAgICAgICAgICAgIG9uOmNsaWNrfHByZXZlbnREZWZhdWx0fHN0b3BQcm9wYWdhdGlvbj1cIntjaGFuZ2VPcHRpb25zUGFuZWx9XCI+e3RleHRUcmFuc2xhdGlvbnMuYWJvdXRQbHVnaW59PC9idXR0b24+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJ7JyN0YWIyJyA9PT0gd2luZG93LmxvY2F0aW9uLmhhc2ggPyAnYWN0aXZlJyA6ICcnIH1cIiBcbiAgICAgICAgICAgICAgICBvbjpjbGlja3xwcmV2ZW50RGVmYXVsdHxzdG9wUHJvcGFnYXRpb249XCJ7Y2hhbmdlT3B0aW9uc1BhbmVsfVwiPnt0ZXh0VHJhbnNsYXRpb25zLm1vbmV0aXphdGlvbn08L2J1dHRvbj5cbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vaWNvbnRlbnRvcmd1aWxkLmNvbS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj57dGV4dFRyYW5zbGF0aW9ucy5wbHVnaW5XZWJzaXRlfTwvYT5cbiAgICA8L25hdj5cbiAgICA8ZGl2IGNsYXNzPVwicGstYWRtaW4tb3B0aW9uc19fcGFuZWwge251bGwgPT09IGlzTWVudU9wZW4gPyAnJyA6IChpc01lbnVPcGVuID8gJ3BrLWFkbWluLW9wdGlvbnNfX3BhbmVsLS1zbGlkZS1vdXQnIDogJ3BrLWFkbWluLW9wdGlvbnNfX3BhbmVsLS1zbGlkZS1pbicpfVwiIFxuICAgICAgICBiaW5kOnRoaXM9e3BhbmVsRWxlbWVudH1cbiAgICAgICAgb246dG91Y2hzdGFydD17KGUpID0+IHt0b3VjaFN0YXJ0WCA9IHBhcnNlSW50KGUuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WCk7fX1cbiAgICAgICAgb246dG91Y2htb3ZlPXsoZSkgPT4ge1xuICAgICAgICAgICAgbGV0IGN1cnJlbnRYID0gcGFyc2VJbnQoZS5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYKTtcbiAgICAgICAgICAgIGxldCBtb3ZlRGlzdGFuY2UgPSBjdXJyZW50WCAtIHRvdWNoU3RhcnRYO1xuICAgICAgICAgICAgaWYgKDEwIDwgbW92ZURpc3RhbmNlKSB7XG4gICAgICAgICAgICAgICAgcGFuZWxFbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKCcgKyBtb3ZlRGlzdGFuY2UgKyAncHgpJztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoLTEwID4gbW92ZURpc3RhbmNlKSB7XG4gICAgICAgICAgICAgICAgcGFuZWxFbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKCcgKyAoMjE1ICsgbW92ZURpc3RhbmNlKSArICdweCknO1xuICAgICAgICAgICAgfVxuICAgICAgICB9fVxuICAgICAgICBvbjp0b3VjaGVuZD17ZW5kT3B0aW9uc1BhbmVsVG91Y2hNb3ZlfVxuICAgICAgICBvbjp0b3VjaGNhbmNlbD17ZW5kT3B0aW9uc1BhbmVsVG91Y2hNb3ZlfT5cblxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwicGstYWRtaW4tb3B0aW9uc19fbWVudS1pY29uXCJcbiAgICAgICAgICAgIG9uOmNsaWNrfHByZXZlbnREZWZhdWx0fHN0b3BQcm9wYWdhdGlvbj17KCkgPT4ge2lzTWVudU9wZW4gPSBudWxsID09IGlzTWVudU9wZW4gPyB0cnVlIDogIWlzTWVudU9wZW47fX0+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInsgbnVsbCA9PT0gaXNNZW51T3BlbiA/ICcnIDogKGlzTWVudU9wZW4gPyBcbiAgICAgICAgICAgICAgICAncGstYWRtaW4tb3B0aW9uc19fbWVudS1pY29uLS10by1hcnJvdycgOiAncGstYWRtaW4tb3B0aW9uc19fbWVudS1pY29uLS1mcm9tLWFycm93Jyl9XCI+PC9zcGFuPlxuICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwicGstYWRtaW4tb3B0aW9uc19fYWJvdXQtdGFiXCIgc3R5bGU9XCJkaXNwbGF5OiB7JyN0YWIyJyAhPT0gd2luZG93LmxvY2F0aW9uLmhhc2ggPyAnYmxvY2snIDogJ25vbmUnfVwiPlxuICAgICAgICAgICAgPGgyPnt0ZXh0VHJhbnNsYXRpb25zLmFib3V0UGx1Z2lufTwvaDI+PGhyLz5cbiAgICAgICAgICAgIDxwPlBvZGNhc3RlcktpdCBpcyBhIHBsdWdpbiBmb3IgcG9kY2FzdCBtb25ldGl6YXRpb24uIEl0IGxldHMgeW91ciBmYW5zIGxpc3RlbiB0byBwYXJ0IG9mIHlvdXIgcG9kY2FzdCBmb3IgZnJlZSBhbmQgb3BlbiB0aGUgcmVzdCBhZnRlciBwYXltZW50LiBBbGwgcGF5bWVudHMgYXJlIHByb2Nlc3NlZCBieSB0aGUgZnJlZSBwbHVnaW4gPGEgaHJlZj1cImh0dHBzOi8vZWFzeWRpZ2l0YWxkb3dubG9hZHMuY29tL1wiIHRhcmdldD1cIl9ibGFua1wiPkVhc3kgRGlnaXRhbCBEb3dubG9hZHM8L2E+LjwvcD5cbiAgICAgICAgICAgIDxwPkFsbCBkb2N1bWVudGF0aW9uIG9mIHRoZSBQb2RjYXN0ZXJLaXQgeW91IGNhbiBmaW5kIG9uIHRoZSA8YSBocmVmPVwiaHR0cHM6Ly9pY29udGVudG9yZ3VpbGQuY29tL2RvY3VtZW50YXRpb24vXCIgdGFyZ2V0PVwiX2JsYW5rXCI+aWNvbnRlbnRvcmd1aWxkLmNvbTwvYT48L3A+XG4gICAgICAgICAgICA8aDM+MS4wLjAsIFNlcHRlbWJlciAxLCAyMDIwPC9oMz5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICA8bGk+QWRkZWQgcG9kY2FzdCBhdWRpbyBwbGF5ZXIuPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+QWRkZWQgc2hvcnRjb2RlIGZvciBib29rbWFya3MgaW4gcG9kY2FzdCdzIHN1bW1hcnkuIE5vdyBsaXN0ZW5lciBjYW4gcHVzaCBidXR0b24gb24gcG9kY2FzdCBwbGF5ZXIgdG8ganVtcCB0byB0aGUgY29ycmVzcG9uZGluZyBwbGFjZSBpbiBzdW1tYXJ5LjwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPkFkZGVkIHBvc3NpYmlsaXR5IHRvIGxvY2sgc29tZSBwYXJ0IG9mIHBvZGNhc3QgYW5kIHBsYXkgc3BlY2lhbCBhdWRpbyBtZXNzYWdlIGZvciBpdCBhcyB3ZWxsIGFzIHNob3cgc3BlY2lhbCB0ZXh0IG1lc3NhZ2UgaW4gc3VtbWFyeS48L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5BZGRlZCBwb3NzaWJpbGl0eSB0byBzZXQgYWNjZXNzIHJ1bGVzIGFmdGVyIHBheW1lbnQgdGhyb3VnaCBFYXN5IERpZ2l0YWwgRG93bmxvYWQgcGx1Z2luIGZvciBsb2NrZWQgcG9kY2FzdHMgYnkgY2F0ZWdvcmllcyBhbmQgY2VydGFpbiBwZXJpb2Qgb2YgdGltZS48L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICAgICA8ZGl2IHN0eWxlPVwiZGlzcGxheTogeycjdGFiMicgPT09IHdpbmRvdy5sb2NhdGlvbi5oYXNoID8gJ2Jsb2NrJyA6ICdub25lJ31cIj5cbiAgICAgICAgICAgIDxoMj57dGV4dFRyYW5zbGF0aW9ucy5tb25ldGl6YXRpb259PC9oMj48aHIvPlxuICAgICAgICAgICAgPGZvcm0gbWV0aG9kPVwicG9zdFwiIGFjdGlvbj1cInthZG1pbkFjdGlvblVSTH1cIj5cbiAgICAgICAgICAgICAgICA8aDM+e3RleHRUcmFuc2xhdGlvbnMuYWNjZXNzUnVsZXN9PC9oMz5cblxuICAgICAgICAgICAgICAgIHsjaWYgMCA9PT0gcHJpY2luZ1BsYW5zT3B0aW9ucy5sZW5ndGh9XG5cbiAgICAgICAgICAgICAgICA8cD57QGh0bWwgdGV4dFRyYW5zbGF0aW9ucy5hY3RpdmF0ZUVERH08L3A+XG5cbiAgICAgICAgICAgICAgICB7OmVsc2V9XG5cbiAgICAgICAgICAgICAgICA8cD57dGV4dFRyYW5zbGF0aW9ucy5hY2Nlc3NSdWxlc0Rlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJway1wcmljaW5nLXBsYW4tbGlzdFwiIHN0eWxlPVwibWFyZ2luLWJvdHRvbTogMzBweDtcIj5cbiAgICAgICAgICAgICAgICB7I2VhY2ggcHJpY2luZ1BsYW5zT3B0aW9ucyBhcyBlZGREb3dubG9hZH1cbiAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBrLXByaWNpbmctcGxhblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cInBrLWNoZWNrYm94XCIgc3R5bGU9XCJmbGV4LWdyb3c6IDE7IG1hcmdpbi1yaWdodDogNXB4O1wiPntlZGREb3dubG9hZC5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgb246Y2hhbmdlPVwie2NoZWNrRWRkRG93bmxvYWR9XCIgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cInBrX2VkZF9kb3dubG9hZHNfdXNlZFt7ZWRkRG93bmxvYWQuaWR9XVt7ZWRkRG93bmxvYWQucHJpY2VJZH1dXCIgY2hlY2tlZD1cIntlZGREb3dubG9hZC51c2VkfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInBrLWNoZWNrYm94X19jaGVja21hcmtcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIG5hbWU9XCJwa19lZGRfZG93bmxvYWRzX2RheXNbe2VkZERvd25sb2FkLmlkfV1be2VkZERvd25sb2FkLnByaWNlSWR9XVwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIntlZGREb3dubG9hZC5kYXlzfVwiIGRpc2FibGVkPVwieyFlZGREb3dubG9hZC51c2VkfVwiIG1pbj1cIjBcIiBtYXg9XCIzNjUwMFwiIHN0eWxlPVwid2lkdGg6IDcwcHg7IHBhZGRpbmctbGVmdDogNXB4OyBwYWRkaW5nLXJpZ2h0OiA1cHg7IG1hcmdpbi1yaWdodDogNXB4O1wiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT1cIm1hcmdpbi1yaWdodDogNXB4O1wiPnt0ZXh0VHJhbnNsYXRpb25zLmRheXN9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb246Y2xpY2t8cHJldmVudERlZmF1bHR8c3RvcFByb3BhZ2F0aW9uPVwie3Nob3dIaWRlUHJpY2luZ1BsYW5DYXRlZ29yaWVzfVwiIGRpc2FibGVkPVwieyFlZGREb3dubG9hZC51c2VkfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwicGstYnV0dG9uIGJ1dHRvblwiPnt0ZXh0VHJhbnNsYXRpb25zLnRvQ2F0ZWdvcmllc308L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGstcG9kY2FzdC1jYXRlZ29yaWVzXCIgc3R5bGU9XCJkaXNwbGF5OiBub25lO1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cInBrLXBvZGNhc3QtY2F0ZWdvcmllc19fbGV2ZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7I2VhY2ggZWRkRG93bmxvYWQuY2F0ZWdvcmllcyBhcyBjYXRlZ29yeUxldmVsMH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwicGstY2hlY2tib3hcIiBzdHlsZT1cImZsZXgtZ3JvdzogMTsgbWFyZ2luLXJpZ2h0OiA1cHg7XCI+e2NhdGVnb3J5TGV2ZWwwLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJwa19lZGRfZG93bmxvYWRzX2NhdGVnb3JpZXNbe2VkZERvd25sb2FkLmlkfV1be2VkZERvd25sb2FkLnByaWNlSWR9XVt7Y2F0ZWdvcnlMZXZlbDAuaWR9XVwiIGNoZWNrZWQ9XCJ7Y2F0ZWdvcnlMZXZlbDAudXNlZH1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInBrLWNoZWNrYm94X19jaGVja21hcmtcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyNpZiAwIDwgY2F0ZWdvcnlMZXZlbDAuY2hpbGRyZW4ubGVuZ3RofVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cInBrLXBvZGNhc3QtY2F0ZWdvcmllc19fbGV2ZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7I2VhY2ggY2F0ZWdvcnlMZXZlbDAuY2hpbGRyZW4gYXMgY2F0ZWdvcnlMZXZlbDF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cInBrLWNoZWNrYm94XCIgc3R5bGU9XCJmbGV4LWdyb3c6IDE7IG1hcmdpbi1yaWdodDogNXB4O1wiPntjYXRlZ29yeUxldmVsMS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwicGtfZWRkX2Rvd25sb2Fkc19jYXRlZ29yaWVzW3tlZGREb3dubG9hZC5pZH1dW3tlZGREb3dubG9hZC5wcmljZUlkfV1be2NhdGVnb3J5TGV2ZWwxLmlkfV1cIiBjaGVja2VkPVwie2NhdGVnb3J5TGV2ZWwxLnVzZWR9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJway1jaGVja2JveF9fY2hlY2ttYXJrXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsjaWYgMCA8IGNhdGVnb3J5TGV2ZWwxLmNoaWxkcmVuLmxlbmd0aH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJway1wb2RjYXN0LWNhdGVnb3JpZXNfX2xldmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyNlYWNoIGNhdGVnb3J5TGV2ZWwxLmNoaWxkcmVuIGFzIGNhdGVnb3J5TGV2ZWwyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJway1jaGVja2JveFwiIHN0eWxlPVwiZmxleC1ncm93OiAxOyBtYXJnaW4tcmlnaHQ6IDVweDtcIj57Y2F0ZWdvcnlMZXZlbDIubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cInBrX2VkZF9kb3dubG9hZHNfY2F0ZWdvcmllc1t7ZWRkRG93bmxvYWQuaWR9XVt7ZWRkRG93bmxvYWQucHJpY2VJZH1dW3tjYXRlZ29yeUxldmVsMi5pZH1dXCIgY2hlY2tlZD1cIntjYXRlZ29yeUxldmVsMi51c2VkfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicGstY2hlY2tib3hfX2NoZWNrbWFya1wiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey9lYWNofVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7L2lmfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvZWFjaH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey9pZn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7L2VhY2h9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIHsvZWFjaH1cbiAgICAgICAgICAgICAgICA8L3VsPlxuXG4gICAgICAgICAgICAgICAgey9pZn1cblxuICAgICAgICAgICAgICAgIDxoMz57dGV4dFRyYW5zbGF0aW9ucy5sb2NrQXVkaW9NZXNzYWdlfTwvaDM+XG4gICAgICAgICAgICAgICAgPHA+e3RleHRUcmFuc2xhdGlvbnMubG9ja0F1ZGlvRGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBtYXJnaW4tYm90dG9tOiAyNXB4O1wiPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cInBrLXBvZGNhc3QtbG9jay1hdWRpb1wiIHZhbHVlPVwie251bGwgPT09IHBvZGNhc3RMb2NrQXVkaW9VUkwgPyAnJyA6IHBvZGNhc3RMb2NrQXVkaW9VUkx9XCIgZGlzYWJsZWQvPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwicGstYnV0dG9uIGJ1dHRvblwiIG9uOmNsaWNrfHByZXZlbnREZWZhdWx0fHN0b3BQcm9wYWdhdGlvbj17aGFuZGxlUG9kY2FzdFNldHVwfT57bnVsbCA9PT0gcG9kY2FzdExvY2tBdWRpb1VSTCA/IHRleHRUcmFuc2xhdGlvbnMuYWRkTG9ja0F1ZGlvIDogdGV4dFRyYW5zbGF0aW9ucy5yZW1vdmVsb2NrQXVkaW99PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPFBsYXllciBhdWRpb1VSTD17cG9kY2FzdExvY2tBdWRpb1VSTH0gcGxheWVyTWluaU9mZj1cInt0cnVlfVwiIHN0eWxlPVwibWFyZ2luLXRvcDogMTVweDt7bnVsbCA9PSBwb2RjYXN0TG9ja0F1ZGlvVVJMID8gJ2Rpc3BsYXk6IG5vbmU7JyA6ICcnfVwiPjwvUGxheWVyPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cInBrX3BvZGNhc3RfbG9ja19hdWRpb19pZFwiIHZhbHVlPVwie3BvZGNhc3RMb2NrQXVkaW9JZH1cIj5cblxuICAgICAgICAgICAgICAgIDxoMz57dGV4dFRyYW5zbGF0aW9ucy5sb2NrVGV4dE1lc3NhZ2V9PC9oMz5cbiAgICAgICAgICAgICAgICA8cD57dGV4dFRyYW5zbGF0aW9ucy5sb2NrVGV4dERlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgICA8dGV4dGFyZWEgaWQ9XCJway1wb2RjYXN0LWxvY2stbWVzc2FnZVwiIG5hbWU9XCJwa19wb2RjYXN0X2xvY2tfbWVzc2FnZVwiIHJvd3M9XCIxNVwiIHN0eWxlPVwid2lkdGg6IDEwMCU7XCI+e3BvZGNhc3RMb2NrTWVzc2FnZX08L3RleHRhcmVhPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHtAaHRtbCBwa05vbmNlfVxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cImFjdGlvblwiIHZhbHVlPVwicGtfc2F2ZV9tb25ldGlzYXRpb25fb3B0aW9uc1wiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJway1idXR0b25fX3N1Ym1pdCBidXR0b25cIiB0eXBlPVwic3VibWl0XCIgc3R5bGU9XCJtYXJnaW4tdG9wOiAyMHB4O1wiXG4gICAgICAgICAgICAgICAgICAgIG9uOmNsaWNrPXtwcmVwYXJlUG9kY2FzdExvY2tNZXNzYWdlRm9yU3VibWl0fT57dGV4dFRyYW5zbGF0aW9ucy5zYXZlT3B0aW9uc308L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG5cbiAgICA8L2Rpdj5cbjwvZGl2PiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxSUEsaUJBQWlCLDhCQUFDLENBQUMsQUFDZixPQUFPLENBQUUsSUFBSSxDQUNiLFdBQVcsQ0FBRSxLQUFLLENBQ2xCLHFCQUFxQixDQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUN0QyxrQkFBa0IsQ0FBRSxJQUFJLENBQUMsSUFBSSxDQUM3QixtQkFBbUIsQ0FDbkIsZ0JBQWdCO0lBQ2hCLGdCQUFnQixDQUNoQixNQUFNLENBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxBQUM1QixDQUFDLEFBQ0QsZ0NBQWlCLENBQUMsZ0JBQUMsQ0FBRSwyQ0FBNEIsQ0FBQyxFQUFFLGVBQUMsQ0FBQyxBQUNsRCxTQUFTLENBQUUsSUFBSSxDQUNmLFdBQVcsQ0FBRSxLQUFLLENBQ2xCLE1BQU0sQ0FBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEFBQ3RCLENBQUMsQUFDRCwyQ0FBNEIsQ0FBQyxFQUFFLGVBQUMsQ0FBQyxBQUM3QixNQUFNLENBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxBQUN6QixDQUFDLEFBQ0QsMkNBQTRCLENBQUMsRUFBRSxlQUFDLENBQUMsQUFDN0IsZUFBZSxDQUFFLElBQUksQ0FDckIsTUFBTSxDQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQUFDdEIsQ0FBQyxBQUNELGdDQUFpQixDQUFDLEVBQUUsZUFBQyxDQUFDLEFBQUMsYUFBYSxDQUFFLElBQUksQUFBRSxDQUFDLEFBQzdDLGdDQUFpQixDQUFDLEVBQUUsZUFBQyxDQUFDLEFBQUMsTUFBTSxDQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxBQUFFLENBQUMsQUFFMUMsdUJBQXVCLDhCQUFDLENBQUMsQUFBQyxTQUFTLENBQUUsSUFBSSxDQUFFLE1BQU0sQ0FBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQUFBRSxDQUFDLEFBQ2pFLHNDQUF1QixDQUFDLEdBQUcsZUFBQyxDQUFDLEFBQUMsS0FBSyxDQUFFLEtBQUssQ0FBRSxNQUFNLENBQUUsSUFBSSxBQUFFLENBQUMsQUFFM0QsdUJBQXVCLDhCQUFDLENBQUMsQUFDckIsU0FBUyxDQUFFLElBQUksQ0FDZixLQUFLLENBQUUsS0FBSyxDQUNaLE9BQU8sQ0FBRSxJQUFJLENBQ2IsY0FBYyxDQUFFLE1BQU0sQUFDMUIsQ0FBQyxBQUNELHNDQUF1QixDQUFDLHFCQUFNLENBQUUsc0NBQXVCLENBQUMsQ0FBQyxlQUFDLENBQUMsQUFDdkQsU0FBUyxDQUFFLElBQUksQ0FDZixXQUFXLENBQUUsSUFBSSxDQUNqQixXQUFXLENBQUUsS0FBSyxDQUNsQixNQUFNLENBQUUsSUFBSSxDQUNaLGFBQWEsQ0FBRSxJQUFJLENBQ25CLGdCQUFnQixDQUFFLFdBQVcsQ0FDN0IsT0FBTyxDQUFFLElBQUksQ0FBQyxHQUFHLENBQ2pCLGFBQWEsQ0FBRSxHQUFHLENBQ2xCLE1BQU0sQ0FBRSxPQUFPLENBQ2YsZUFBZSxDQUFFLElBQUksQ0FDckIsS0FBSyxDQUFFLE9BQU8sQ0FDZCxVQUFVLENBQUUsTUFBTSxBQUN0QixDQUFDLEFBQ0Qsc0NBQXVCLENBQUMscUJBQU0sTUFBTSxDQUNwQyxzQ0FBdUIsQ0FBQyxnQkFBQyxNQUFNLEFBQUMsQ0FBQyxBQUFDLE9BQU8sQ0FBRSxJQUFJLENBQUUsVUFBVSxDQUFFLElBQUksQUFBRSxDQUFDLEFBQ3BFLHNDQUF1QixDQUFDLE1BQU0sT0FBTyxlQUFDLENBQUMsQUFDbkMsZ0JBQWdCLENBQUUsT0FBTyxDQUFDLFVBQVUsQ0FDcEMsS0FBSyxDQUFFLElBQUksQUFDZixDQUFDLEFBQ0Qsc0NBQXVCLENBQUMscUJBQU0sTUFBTSxDQUFFLHNDQUF1QixDQUFDLGdCQUFDLE1BQU0sQUFBQyxDQUFDLEFBQ25FLGdCQUFnQixDQUFFLE9BQU8sQUFDN0IsQ0FBQyxBQUVELHdCQUF3Qiw4QkFBQyxDQUFDLEFBQ3RCLFNBQVMsQ0FBRSxPQUFPLENBQ2xCLE9BQU8sQ0FBRSxJQUFJLENBQUMsSUFBSSxDQUNsQixnQkFBZ0IsQ0FBRSxJQUFJLENBQ3RCLGFBQWEsQ0FBRSxHQUFHLENBQ2xCLE1BQU0sQ0FBRSxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FDekIsVUFBVSxDQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQ3JDLFVBQVUsQ0FBRSxVQUFVLEFBQzFCLENBQUMsQUFDRCxtQ0FBbUMsOEJBQUMsQ0FBQyxBQUNqQyxVQUFVLENBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQzlCLFNBQVMsQ0FBRSxXQUFXLEtBQUssQ0FBQyxBQUNoQyxDQUFDLEFBQ0Qsa0NBQWtDLDhCQUFDLENBQUMsQUFDaEMsVUFBVSxDQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUM5QixTQUFTLENBQUUsV0FBVyxDQUFDLENBQUMsQUFDNUIsQ0FBQyxBQUVELDRCQUE0Qiw4QkFBQyxDQUFDLEFBQzFCLE9BQU8sQ0FBRSxJQUFJLENBQ2IsTUFBTSxDQUFFLElBQUksQ0FDWixVQUFVLENBQUUsSUFBSSxDQUNoQixPQUFPLENBQUUsQ0FBQyxDQUNWLE9BQU8sQ0FBRSxJQUFJLENBQUMsQ0FBQyxDQUNmLE1BQU0sQ0FBRSxPQUFPLENBQ2YsUUFBUSxDQUFFLFFBQVEsQ0FDbEIsR0FBRyxDQUFFLElBQUksQ0FDVCxJQUFJLENBQUUsSUFBSSxBQUNkLENBQUMsQUFDRCwyQ0FBNEIsQ0FBQyxJQUFJLGVBQUMsQ0FBQyxBQUMvQixPQUFPLENBQUUsS0FBSyxDQUNkLEtBQUssQ0FBRSxJQUFJLENBQ1gsTUFBTSxDQUFFLEdBQUcsQ0FDWCxVQUFVLENBQUUsSUFBSSxDQUNoQixRQUFRLENBQUUsUUFBUSxDQUNsQixVQUFVLENBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUFRLEFBQ2xDLENBQUMsQUFDRCwyQ0FBNEIsQ0FBQyxtQkFBSSxPQUFPLENBQUUsMkNBQTRCLENBQUMsbUJBQUksTUFBTSxBQUFDLENBQUMsQUFDL0UsT0FBTyxDQUFFLEtBQUssQ0FDZCxLQUFLLENBQUUsT0FBTyxDQUNkLE1BQU0sQ0FBRSxHQUFHLENBQ1gsUUFBUSxDQUFFLFFBQVEsQ0FDbEIsVUFBVSxDQUFFLE9BQU8sQ0FDbkIsSUFBSSxDQUFFLENBQUMsQ0FDUCxPQUFPLENBQUUsRUFBRSxDQUNYLFVBQVUsQ0FBRSxHQUFHLENBQUMsS0FBSyxDQUFDLFFBQVEsQUFDbEMsQ0FBQyxBQUNELDJDQUE0QixDQUFDLG1CQUFJLE9BQU8sQUFBQyxDQUFDLEFBQUMsTUFBTSxDQUFFLElBQUksQUFBRSxDQUFDLEFBQzFELDJDQUE0QixDQUFDLG1CQUFJLE1BQU0sQUFBQyxDQUFDLEFBQUMsR0FBRyxDQUFFLElBQUksQUFBRSxDQUFDLEFBRXRELHNDQUFzQyw4QkFBQyxDQUFDLEFBQ3BDLFNBQVMsQ0FBRSxPQUFPLE1BQU0sQ0FBQyxBQUM3QixDQUFDLEFBQ0Qsb0VBQXNDLE9BQU8sQUFBQyxDQUFDLEFBQzNDLFNBQVMsQ0FBRSxPQUFPLEtBQUssQ0FBQyxDQUN4QixNQUFNLENBQUUsS0FBSyxDQUFDLEdBQUcsQ0FDakIsS0FBSyxDQUFFLEdBQUcsQ0FBQyxVQUFVLEFBQ3pCLENBQUMsQUFDRCxvRUFBc0MsTUFBTSxBQUFDLENBQUMsQUFDMUMsU0FBUyxDQUFFLE9BQU8sTUFBTSxDQUFDLENBQ3pCLE1BQU0sQ0FBRSxLQUFLLENBQUMsR0FBRyxDQUNqQixLQUFLLENBQUUsR0FBRyxDQUFDLFVBQVUsQUFDekIsQ0FBQyxBQUVELHdDQUF3Qyw4QkFBQyxDQUFDLEFBQ3RDLFNBQVMsQ0FBRSxPQUFPLE9BQU8sQ0FBQyxBQUM5QixDQUFDLEFBQ0Qsc0VBQXdDLE9BQU8sQUFBQyxDQUFDLEFBQzdDLFNBQVMsQ0FBRSxPQUFPLElBQUksQ0FBQyxDQUN2QixNQUFNLENBQUUsQ0FBQyxDQUNULEtBQUssQ0FBRSxJQUFJLEFBQ2YsQ0FBQyxBQUNELHNFQUF3QyxNQUFNLEFBQUMsQ0FBQyxBQUM1QyxTQUFTLENBQUUsT0FBTyxJQUFJLENBQUMsQ0FDdkIsTUFBTSxDQUFFLENBQUMsQ0FDVCxLQUFLLENBQUUsSUFBSSxBQUNmLENBQUMsQUFDRCxFQUFFLDhCQUFDLENBQUMsQUFBQyxNQUFNLENBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFFLFdBQVcsQ0FBRSxJQUFJLEFBQUUsQ0FBQyxBQUUvQyxPQUFPLEdBQUcsQ0FBQyxHQUFHLENBQUMsWUFBWSxLQUFLLENBQUMsQUFBQyxDQUFDLEFBRS9CLGlCQUFpQiw4QkFBQyxDQUFDLEFBQ2YsT0FBTyxDQUFFLElBQUksQ0FDYixjQUFjLENBQUUsTUFBTSxDQUN0QixNQUFNLENBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUN4QixRQUFRLENBQUUsUUFBUSxBQUN0QixDQUFDLEFBQ0QsdUJBQXVCLDhCQUFDLENBQUMsQUFBQyxVQUFVLENBQUUsTUFBTSxBQUFFLENBQUMsQUFDL0Msc0NBQXVCLENBQUMsR0FBRyxlQUFDLENBQUMsQUFBQyxLQUFLLENBQUUsS0FBSyxDQUFFLE1BQU0sQ0FBRSxJQUFJLENBQUUsVUFBVSxDQUFFLE1BQU0sQUFBRSxDQUFDLEFBQy9FLHVCQUF1Qiw4QkFBQyxDQUFDLEFBQUMsUUFBUSxDQUFFLFFBQVEsQ0FBRSxHQUFHLENBQUUsSUFBSSxBQUFFLENBQUMsQUFDMUQsd0JBQXdCLDhCQUFDLENBQUMsQUFDdEIsUUFBUSxDQUFFLFFBQVEsQ0FDbEIsR0FBRyxDQUFFLElBQUksQ0FDVCxJQUFJLENBQUUsQ0FBQyxDQUNQLEtBQUssQ0FBRSxJQUFJLEFBQ2YsQ0FBQyxBQUNELDRCQUE0Qiw4QkFBQyxDQUFDLEFBQUMsT0FBTyxDQUFFLEtBQUssQUFBRSxDQUFDLEFBQ2hELHVDQUF3QixDQUFDLEVBQUUsZUFBQyxDQUFDLEFBQUMsV0FBVyxDQUFFLElBQUksQUFBRSxDQUFDLEFBQ3RELENBQUMsQUFHRCxnQkFBZ0IsOEJBQUMsQ0FBQyxBQUNkLE9BQU8sQ0FBRSxJQUFJLENBQ2IsV0FBVyxDQUFFLE1BQU0sQ0FDbkIsU0FBUyxDQUFFLE1BQU0sQUFDckIsQ0FBQyxBQUNELDZCQUE2Qiw4QkFBQyxDQUFDLEFBQzNCLFVBQVUsQ0FBRSxHQUFHLENBQ2YsV0FBVyxDQUFFLElBQUksQUFDckIsQ0FBQyxBQUVELE9BQU8sTUFBTSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEtBQUssQ0FBQyxBQUFDLENBQUMsQUFDbEMsZ0JBQWdCLDhCQUFDLENBQUMsQUFDZCxTQUFTLENBQUUsSUFBSSxBQUNuQixDQUFDLEFBQ0QsNkJBQTZCLDhCQUFDLENBQUMsQUFDL0IsV0FBVyxDQUFFLEdBQUcsQUFDcEIsQ0FBQyxBQUNELENBQUMsQUFDRCxxQkFBcUIsOEJBQUMsQ0FBQyxBQUNuQixVQUFVLENBQUUsS0FBSyxDQUNqQixVQUFVLENBQUUsSUFBSSxBQUNwQixDQUFDLEFBRUQsc0JBQXNCLDhCQUFDLENBQUMsQUFDcEIsTUFBTSxDQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUN0QixZQUFZLENBQUUsSUFBSSxDQUNsQixnQkFBZ0IsQ0FBRSxJQUFJLENBQ3RCLGFBQWEsQ0FBRSxHQUFHLENBQ2xCLFFBQVEsQ0FBRSxNQUFNLENBQ2hCLFNBQVMsQ0FBRSxHQUFHLENBQ2QsV0FBVyxDQUFFLE1BQU0sQ0FDbkIsU0FBUyxDQUFFLENBQUMsQUFDaEIsQ0FBQyxBQUNELFVBQVUsOEJBQUMsQ0FBQyxBQUFDLE1BQU0sQ0FBRSxDQUFDLEFBQUUsQ0FBQyxBQUV6QixrQkFBa0IsOEJBQUMsQ0FBQyxBQUFDLE9BQU8sQ0FBRSxLQUFLLENBQUUsV0FBVyxDQUFFLElBQUksQ0FBRSxnQkFBZ0IsQ0FBRSxPQUFPLENBQUUsS0FBSyxDQUFFLElBQUksQ0FBRSxZQUFZLENBQUUsT0FBTyxBQUFFLENBQUMsQUFDeEgsZ0RBQWtCLE1BQU0sQUFBQyxDQUFDLEFBQ3RCLGdCQUFnQixDQUFFLE9BQU8sQ0FDekIsWUFBWSxDQUFFLE9BQU8sQ0FDckIsTUFBTSxDQUFFLE9BQU8sQUFDbkIsQ0FBQyxBQUVELFlBQVksOEJBQUMsQ0FBQyxBQUNWLE9BQU8sQ0FBRSxJQUFJLENBQ2IsVUFBVSxDQUFFLElBQUksQ0FDaEIsV0FBVyxDQUFFLE1BQU0sQ0FDbkIsUUFBUSxDQUFFLFFBQVEsQ0FDbEIsWUFBWSxDQUFFLElBQUksQ0FDbEIsTUFBTSxDQUFFLE9BQU8sQ0FDZixtQkFBbUIsQ0FBRSxJQUFJLENBQ3pCLGdCQUFnQixDQUFFLElBQUksQ0FDdEIsZUFBZSxDQUFFLElBQUksQ0FDckIsV0FBVyxDQUFFLElBQUksQUFDckIsQ0FBQyxBQUVELDJCQUFZLENBQUMsS0FBSyxlQUFDLENBQUMsQUFDaEIsUUFBUSxDQUFFLFFBQVEsQ0FDbEIsT0FBTyxDQUFFLENBQUMsQ0FDVixNQUFNLENBQUUsT0FBTyxDQUNmLE1BQU0sQ0FBRSxDQUFDLENBQ1QsS0FBSyxDQUFFLENBQUMsQUFDWixDQUFDLEFBRUQsdUJBQXVCLDhCQUFDLENBQUMsQUFDckIsUUFBUSxDQUFFLFFBQVEsQ0FDbEIsR0FBRyxDQUFFLENBQUMsQ0FDTixJQUFJLENBQUUsQ0FBQyxDQUNQLE1BQU0sQ0FBRSxJQUFJLENBQ1osS0FBSyxDQUFFLElBQUksQ0FDWCxnQkFBZ0IsQ0FBRSxJQUFJLEFBQzFCLENBQUMsQUFFRCxZQUFZLENBQUMsS0FBSyxRQUFRLENBQUcsdUJBQXVCLDhCQUFDLENBQUMsQUFDbEQsZ0JBQWdCLENBQUUsT0FBTyxBQUM3QixDQUFDLEFBRUQscURBQXVCLE1BQU0sQUFBQyxDQUFDLEFBQzNCLE9BQU8sQ0FBRSxFQUFFLENBQ1gsUUFBUSxDQUFFLFFBQVEsQ0FDbEIsT0FBTyxDQUFFLElBQUksQUFDakIsQ0FBQyxBQUVELFlBQVksQ0FBQyxLQUFLLFFBQVEsQ0FBRyxxREFBdUIsTUFBTSxBQUFDLENBQUMsQUFDeEQsT0FBTyxDQUFFLEtBQUssQUFDbEIsQ0FBQyxBQUVELDJCQUFZLENBQUMsc0NBQXVCLE1BQU0sQUFBQyxDQUFDLEFBQ3hDLElBQUksQ0FBRSxHQUFHLENBQ1QsR0FBRyxDQUFFLEdBQUcsQ0FDUixLQUFLLENBQUUsR0FBRyxDQUNWLE1BQU0sQ0FBRSxJQUFJLENBQ1osTUFBTSxDQUFFLEtBQUssQ0FBQyxLQUFLLENBQ25CLFlBQVksQ0FBRSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQ3pCLGlCQUFpQixDQUFFLE9BQU8sS0FBSyxDQUFDLENBQ2hDLGFBQWEsQ0FBRSxPQUFPLEtBQUssQ0FBQyxDQUM1QixTQUFTLENBQUUsT0FBTyxLQUFLLENBQUMsQUFDNUIsQ0FBQyJ9 */";
    append_dev(document_1$1.head, style);
  }

  function get_each_context_3(ctx, list, i) {
    var child_ctx = ctx.slice();
    child_ctx[35] = list[i];
    return child_ctx;
  }

  function get_each_context_2(ctx, list, i) {
    var child_ctx = ctx.slice();
    child_ctx[32] = list[i];
    return child_ctx;
  }

  function get_each_context_1(ctx, list, i) {
    var child_ctx = ctx.slice();
    child_ctx[29] = list[i];
    return child_ctx;
  }

  function get_each_context(ctx, list, i) {
    var child_ctx = ctx.slice();
    child_ctx[26] = list[i];
    return child_ctx;
  } // (444:16) {:else}


  function create_else_block$1(ctx) {
    var p;
    var t0_value =
    /*textTranslations*/
    ctx[7].accessRulesDescription + "";
    var t0;
    var t1;
    var ul;
    var each_value =
    /*pricingPlansOptions*/
    ctx[5];
    validate_each_argument(each_value);
    var each_blocks = [];

    for (var i = 0; i < each_value.length; i += 1) {
      each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
    }

    var block = {
      c: function create() {
        p = element("p");
        t0 = text(t0_value);
        t1 = space();
        ul = element("ul");

        for (var _i = 0; _i < each_blocks.length; _i += 1) {
          each_blocks[_i].c();
        }

        attr_dev(p, "class", "svelte-1nxih9c");
        add_location(p, file$2, 445, 16, 13766);
        attr_dev(ul, "class", "pk-pricing-plan-list svelte-1nxih9c");
        set_style(ul, "margin-bottom", "30px");
        add_location(ul, file$2, 446, 16, 13831);
      },
      m: function mount(target, anchor) {
        insert_dev(target, p, anchor);
        append_dev(p, t0);
        insert_dev(target, t1, anchor);
        insert_dev(target, ul, anchor);

        for (var _i2 = 0; _i2 < each_blocks.length; _i2 += 1) {
          each_blocks[_i2].m(ul, null);
        }
      },
      p: function update(ctx, dirty) {
        if (dirty[0] &
        /*textTranslations*/
        128 && t0_value !== (t0_value =
        /*textTranslations*/
        ctx[7].accessRulesDescription + "")) set_data_dev(t0, t0_value);

        if (dirty[0] &
        /*pricingPlansOptions, textTranslations*/
        160) {
          each_value =
          /*pricingPlansOptions*/
          ctx[5];
          validate_each_argument(each_value);

          var _i3;

          for (_i3 = 0; _i3 < each_value.length; _i3 += 1) {
            var child_ctx = get_each_context(ctx, each_value, _i3);

            if (each_blocks[_i3]) {
              each_blocks[_i3].p(child_ctx, dirty);
            } else {
              each_blocks[_i3] = create_each_block(child_ctx);

              each_blocks[_i3].c();

              each_blocks[_i3].m(ul, null);
            }
          }

          for (; _i3 < each_blocks.length; _i3 += 1) {
            each_blocks[_i3].d(1);
          }

          each_blocks.length = each_value.length;
        }
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(p);
        if (detaching) detach_dev(t1);
        if (detaching) detach_dev(ul);
        destroy_each(each_blocks, detaching);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_else_block$1.name,
      type: "else",
      source: "(444:16) {:else}",
      ctx: ctx
    });
    return block;
  } // (440:16) {#if 0 === pricingPlansOptions.length}


  function create_if_block$2(ctx) {
    var p;
    var raw_value =
    /*textTranslations*/
    ctx[7].activateEDD + "";
    var block = {
      c: function create() {
        p = element("p");
        attr_dev(p, "class", "svelte-1nxih9c");
        add_location(p, file$2, 441, 16, 13680);
      },
      m: function mount(target, anchor) {
        insert_dev(target, p, anchor);
        p.innerHTML = raw_value;
      },
      p: function update(ctx, dirty) {
        if (dirty[0] &
        /*textTranslations*/
        128 && raw_value !== (raw_value =
        /*textTranslations*/
        ctx[7].activateEDD + "")) p.innerHTML = raw_value;
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(p);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_if_block$2.name,
      type: "if",
      source: "(440:16) {#if 0 === pricingPlansOptions.length}",
      ctx: ctx
    });
    return block;
  } // (470:36) {#if 0 < categoryLevel0.children.length}


  function create_if_block_1$1(ctx) {
    var ul;
    var each_value_2 =
    /*categoryLevel0*/
    ctx[29].children;
    validate_each_argument(each_value_2);
    var each_blocks = [];

    for (var i = 0; i < each_value_2.length; i += 1) {
      each_blocks[i] = create_each_block_2(get_each_context_2(ctx, each_value_2, i));
    }

    var block = {
      c: function create() {
        ul = element("ul");

        for (var _i4 = 0; _i4 < each_blocks.length; _i4 += 1) {
          each_blocks[_i4].c();
        }

        attr_dev(ul, "class", "pk-podcast-categories__level svelte-1nxih9c");
        add_location(ul, file$2, 470, 40, 15954);
      },
      m: function mount(target, anchor) {
        insert_dev(target, ul, anchor);

        for (var _i5 = 0; _i5 < each_blocks.length; _i5 += 1) {
          each_blocks[_i5].m(ul, null);
        }
      },
      p: function update(ctx, dirty) {
        if (dirty[0] &
        /*pricingPlansOptions*/
        32) {
          each_value_2 =
          /*categoryLevel0*/
          ctx[29].children;
          validate_each_argument(each_value_2);

          var _i6;

          for (_i6 = 0; _i6 < each_value_2.length; _i6 += 1) {
            var child_ctx = get_each_context_2(ctx, each_value_2, _i6);

            if (each_blocks[_i6]) {
              each_blocks[_i6].p(child_ctx, dirty);
            } else {
              each_blocks[_i6] = create_each_block_2(child_ctx);

              each_blocks[_i6].c();

              each_blocks[_i6].m(ul, null);
            }
          }

          for (; _i6 < each_blocks.length; _i6 += 1) {
            each_blocks[_i6].d(1);
          }

          each_blocks.length = each_value_2.length;
        }
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(ul);
        destroy_each(each_blocks, detaching);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_if_block_1$1.name,
      type: "if",
      source: "(470:36) {#if 0 < categoryLevel0.children.length}",
      ctx: ctx
    });
    return block;
  } // (478:48) {#if 0 < categoryLevel1.children.length}


  function create_if_block_2$1(ctx) {
    var ul;
    var each_value_3 =
    /*categoryLevel1*/
    ctx[32].children;
    validate_each_argument(each_value_3);
    var each_blocks = [];

    for (var i = 0; i < each_value_3.length; i += 1) {
      each_blocks[i] = create_each_block_3(get_each_context_3(ctx, each_value_3, i));
    }

    var block = {
      c: function create() {
        ul = element("ul");

        for (var _i7 = 0; _i7 < each_blocks.length; _i7 += 1) {
          each_blocks[_i7].c();
        }

        attr_dev(ul, "class", "pk-podcast-categories__level svelte-1nxih9c");
        add_location(ul, file$2, 478, 52, 16773);
      },
      m: function mount(target, anchor) {
        insert_dev(target, ul, anchor);

        for (var _i8 = 0; _i8 < each_blocks.length; _i8 += 1) {
          each_blocks[_i8].m(ul, null);
        }
      },
      p: function update(ctx, dirty) {
        if (dirty[0] &
        /*pricingPlansOptions*/
        32) {
          each_value_3 =
          /*categoryLevel1*/
          ctx[32].children;
          validate_each_argument(each_value_3);

          var _i9;

          for (_i9 = 0; _i9 < each_value_3.length; _i9 += 1) {
            var child_ctx = get_each_context_3(ctx, each_value_3, _i9);

            if (each_blocks[_i9]) {
              each_blocks[_i9].p(child_ctx, dirty);
            } else {
              each_blocks[_i9] = create_each_block_3(child_ctx);

              each_blocks[_i9].c();

              each_blocks[_i9].m(ul, null);
            }
          }

          for (; _i9 < each_blocks.length; _i9 += 1) {
            each_blocks[_i9].d(1);
          }

          each_blocks.length = each_value_3.length;
        }
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(ul);
        destroy_each(each_blocks, detaching);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_if_block_2$1.name,
      type: "if",
      source: "(478:48) {#if 0 < categoryLevel1.children.length}",
      ctx: ctx
    });
    return block;
  } // (480:52) {#each categoryLevel1.children as categoryLevel2}


  function create_each_block_3(ctx) {
    var li;
    var label;
    var t0_value =
    /*categoryLevel2*/
    ctx[35].name + "";
    var t0;
    var t1;
    var input;
    var input_name_value;
    var input_checked_value;
    var t2;
    var span;
    var t3;
    var block = {
      c: function create() {
        li = element("li");
        label = element("label");
        t0 = text(t0_value);
        t1 = space();
        input = element("input");
        t2 = space();
        span = element("span");
        t3 = space();
        attr_dev(input, "type", "checkbox");
        attr_dev(input, "name", input_name_value = "pk_edd_downloads_categories[" +
        /*eddDownload*/
        ctx[26].id + "][" +
        /*eddDownload*/
        ctx[26].priceId + "][" +
        /*categoryLevel2*/
        ctx[35].id + "]");
        input.checked = input_checked_value =
        /*categoryLevel2*/
        ctx[35].used;
        attr_dev(input, "class", "svelte-1nxih9c");
        add_location(input, file$2, 482, 64, 17192);
        attr_dev(span, "class", "pk-checkbox__checkmark svelte-1nxih9c");
        add_location(span, file$2, 483, 64, 17409);
        attr_dev(label, "class", "pk-checkbox svelte-1nxih9c");
        set_style(label, "flex-grow", "1");
        set_style(label, "margin-right", "5px");
        add_location(label, file$2, 481, 60, 17038);
        add_location(li, file$2, 480, 56, 16973);
      },
      m: function mount(target, anchor) {
        insert_dev(target, li, anchor);
        append_dev(li, label);
        append_dev(label, t0);
        append_dev(label, t1);
        append_dev(label, input);
        append_dev(label, t2);
        append_dev(label, span);
        append_dev(li, t3);
      },
      p: function update(ctx, dirty) {
        if (dirty[0] &
        /*pricingPlansOptions*/
        32 && t0_value !== (t0_value =
        /*categoryLevel2*/
        ctx[35].name + "")) set_data_dev(t0, t0_value);

        if (dirty[0] &
        /*pricingPlansOptions*/
        32 && input_name_value !== (input_name_value = "pk_edd_downloads_categories[" +
        /*eddDownload*/
        ctx[26].id + "][" +
        /*eddDownload*/
        ctx[26].priceId + "][" +
        /*categoryLevel2*/
        ctx[35].id + "]")) {
          attr_dev(input, "name", input_name_value);
        }

        if (dirty[0] &
        /*pricingPlansOptions*/
        32 && input_checked_value !== (input_checked_value =
        /*categoryLevel2*/
        ctx[35].used)) {
          prop_dev(input, "checked", input_checked_value);
        }
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(li);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_each_block_3.name,
      type: "each",
      source: "(480:52) {#each categoryLevel1.children as categoryLevel2}",
      ctx: ctx
    });
    return block;
  } // (472:40) {#each categoryLevel0.children as categoryLevel1}


  function create_each_block_2(ctx) {
    var li;
    var label;
    var t0_value =
    /*categoryLevel1*/
    ctx[32].name + "";
    var t0;
    var t1;
    var input;
    var input_name_value;
    var input_checked_value;
    var t2;
    var span;
    var t3;
    var t4;
    var if_block = 0 <
    /*categoryLevel1*/
    ctx[32].children.length && create_if_block_2$1(ctx);
    var block = {
      c: function create() {
        li = element("li");
        label = element("label");
        t0 = text(t0_value);
        t1 = space();
        input = element("input");
        t2 = space();
        span = element("span");
        t3 = space();
        if (if_block) if_block.c();
        t4 = space();
        attr_dev(input, "type", "checkbox");
        attr_dev(input, "name", input_name_value = "pk_edd_downloads_categories[" +
        /*eddDownload*/
        ctx[26].id + "][" +
        /*eddDownload*/
        ctx[26].priceId + "][" +
        /*categoryLevel1*/
        ctx[32].id + "]");
        input.checked = input_checked_value =
        /*categoryLevel1*/
        ctx[32].used;
        attr_dev(input, "class", "svelte-1nxih9c");
        add_location(input, file$2, 474, 52, 16325);
        attr_dev(span, "class", "pk-checkbox__checkmark svelte-1nxih9c");
        add_location(span, file$2, 475, 52, 16530);
        attr_dev(label, "class", "pk-checkbox svelte-1nxih9c");
        set_style(label, "flex-grow", "1");
        set_style(label, "margin-right", "5px");
        add_location(label, file$2, 473, 48, 16183);
        add_location(li, file$2, 472, 44, 16130);
      },
      m: function mount(target, anchor) {
        insert_dev(target, li, anchor);
        append_dev(li, label);
        append_dev(label, t0);
        append_dev(label, t1);
        append_dev(label, input);
        append_dev(label, t2);
        append_dev(label, span);
        append_dev(li, t3);
        if (if_block) if_block.m(li, null);
        append_dev(li, t4);
      },
      p: function update(ctx, dirty) {
        if (dirty[0] &
        /*pricingPlansOptions*/
        32 && t0_value !== (t0_value =
        /*categoryLevel1*/
        ctx[32].name + "")) set_data_dev(t0, t0_value);

        if (dirty[0] &
        /*pricingPlansOptions*/
        32 && input_name_value !== (input_name_value = "pk_edd_downloads_categories[" +
        /*eddDownload*/
        ctx[26].id + "][" +
        /*eddDownload*/
        ctx[26].priceId + "][" +
        /*categoryLevel1*/
        ctx[32].id + "]")) {
          attr_dev(input, "name", input_name_value);
        }

        if (dirty[0] &
        /*pricingPlansOptions*/
        32 && input_checked_value !== (input_checked_value =
        /*categoryLevel1*/
        ctx[32].used)) {
          prop_dev(input, "checked", input_checked_value);
        }

        if (0 <
        /*categoryLevel1*/
        ctx[32].children.length) {
          if (if_block) {
            if_block.p(ctx, dirty);
          } else {
            if_block = create_if_block_2$1(ctx);
            if_block.c();
            if_block.m(li, t4);
          }
        } else if (if_block) {
          if_block.d(1);
          if_block = null;
        }
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(li);
        if (if_block) if_block.d();
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_each_block_2.name,
      type: "each",
      source: "(472:40) {#each categoryLevel0.children as categoryLevel1}",
      ctx: ctx
    });
    return block;
  } // (464:28) {#each eddDownload.categories as categoryLevel0}


  function create_each_block_1(ctx) {
    var li;
    var label;
    var t0_value =
    /*categoryLevel0*/
    ctx[29].name + "";
    var t0;
    var t1;
    var input;
    var input_name_value;
    var input_checked_value;
    var t2;
    var span;
    var t3;
    var t4;
    var if_block = 0 <
    /*categoryLevel0*/
    ctx[29].children.length && create_if_block_1$1(ctx);
    var block = {
      c: function create() {
        li = element("li");
        label = element("label");
        t0 = text(t0_value);
        t1 = space();
        input = element("input");
        t2 = space();
        span = element("span");
        t3 = space();
        if (if_block) if_block.c();
        t4 = space();
        attr_dev(input, "type", "checkbox");
        attr_dev(input, "name", input_name_value = "pk_edd_downloads_categories[" +
        /*eddDownload*/
        ctx[26].id + "][" +
        /*eddDownload*/
        ctx[26].priceId + "][" +
        /*categoryLevel0*/
        ctx[29].id + "]");
        input.checked = input_checked_value =
        /*categoryLevel0*/
        ctx[29].used;
        attr_dev(input, "class", "svelte-1nxih9c");
        add_location(input, file$2, 466, 40, 15554);
        attr_dev(span, "class", "pk-checkbox__checkmark svelte-1nxih9c");
        add_location(span, file$2, 467, 40, 15747);
        attr_dev(label, "class", "pk-checkbox svelte-1nxih9c");
        set_style(label, "flex-grow", "1");
        set_style(label, "margin-right", "5px");
        add_location(label, file$2, 465, 36, 15424);
        add_location(li, file$2, 464, 32, 15383);
      },
      m: function mount(target, anchor) {
        insert_dev(target, li, anchor);
        append_dev(li, label);
        append_dev(label, t0);
        append_dev(label, t1);
        append_dev(label, input);
        append_dev(label, t2);
        append_dev(label, span);
        append_dev(li, t3);
        if (if_block) if_block.m(li, null);
        append_dev(li, t4);
      },
      p: function update(ctx, dirty) {
        if (dirty[0] &
        /*pricingPlansOptions*/
        32 && t0_value !== (t0_value =
        /*categoryLevel0*/
        ctx[29].name + "")) set_data_dev(t0, t0_value);

        if (dirty[0] &
        /*pricingPlansOptions*/
        32 && input_name_value !== (input_name_value = "pk_edd_downloads_categories[" +
        /*eddDownload*/
        ctx[26].id + "][" +
        /*eddDownload*/
        ctx[26].priceId + "][" +
        /*categoryLevel0*/
        ctx[29].id + "]")) {
          attr_dev(input, "name", input_name_value);
        }

        if (dirty[0] &
        /*pricingPlansOptions*/
        32 && input_checked_value !== (input_checked_value =
        /*categoryLevel0*/
        ctx[29].used)) {
          prop_dev(input, "checked", input_checked_value);
        }

        if (0 <
        /*categoryLevel0*/
        ctx[29].children.length) {
          if (if_block) {
            if_block.p(ctx, dirty);
          } else {
            if_block = create_if_block_1$1(ctx);
            if_block.c();
            if_block.m(li, t4);
          }
        } else if (if_block) {
          if_block.d(1);
          if_block = null;
        }
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(li);
        if (if_block) if_block.d();
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_each_block_1.name,
      type: "each",
      source: "(464:28) {#each eddDownload.categories as categoryLevel0}",
      ctx: ctx
    });
    return block;
  } // (448:16) {#each pricingPlansOptions as eddDownload}


  function create_each_block(ctx) {
    var li;
    var div0;
    var label;
    var t0_value =
    /*eddDownload*/
    ctx[26].name + "";
    var t0;
    var t1;
    var input0;
    var input0_name_value;
    var input0_checked_value;
    var t2;
    var span0;
    var t3;
    var input1;
    var input1_name_value;
    var input1_value_value;
    var input1_disabled_value;
    var t4;
    var span1;
    var t5_value =
    /*textTranslations*/
    ctx[7].days + "";
    var t5;
    var t6;
    var button;
    var t7_value =
    /*textTranslations*/
    ctx[7].toCategories + "";
    var t7;
    var button_disabled_value;
    var t8;
    var div1;
    var ul;
    var t9;
    var dispose;
    var each_value_1 =
    /*eddDownload*/
    ctx[26].categories;
    validate_each_argument(each_value_1);
    var each_blocks = [];

    for (var i = 0; i < each_value_1.length; i += 1) {
      each_blocks[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
    }

    var block = {
      c: function create() {
        li = element("li");
        div0 = element("div");
        label = element("label");
        t0 = text(t0_value);
        t1 = space();
        input0 = element("input");
        t2 = space();
        span0 = element("span");
        t3 = space();
        input1 = element("input");
        t4 = space();
        span1 = element("span");
        t5 = text(t5_value);
        t6 = space();
        button = element("button");
        t7 = text(t7_value);
        t8 = space();
        div1 = element("div");
        ul = element("ul");

        for (var _i10 = 0; _i10 < each_blocks.length; _i10 += 1) {
          each_blocks[_i10].c();
        }

        t9 = space();
        attr_dev(input0, "type", "checkbox");
        attr_dev(input0, "name", input0_name_value = "pk_edd_downloads_used[" +
        /*eddDownload*/
        ctx[26].id + "][" +
        /*eddDownload*/
        ctx[26].priceId + "]");
        input0.checked = input0_checked_value =
        /*eddDownload*/
        ctx[26].used;
        attr_dev(input0, "class", "svelte-1nxih9c");
        add_location(input0, file$2, 451, 32, 14179);
        attr_dev(span0, "class", "pk-checkbox__checkmark svelte-1nxih9c");
        add_location(span0, file$2, 452, 32, 14365);
        attr_dev(label, "class", "pk-checkbox svelte-1nxih9c");
        set_style(label, "flex-grow", "1");
        set_style(label, "margin-right", "5px");
        add_location(label, file$2, 450, 28, 14060);
        attr_dev(input1, "type", "number");
        attr_dev(input1, "name", input1_name_value = "pk_edd_downloads_days[" +
        /*eddDownload*/
        ctx[26].id + "][" +
        /*eddDownload*/
        ctx[26].priceId + "]");
        input1.value = input1_value_value =
        /*eddDownload*/
        ctx[26].days;
        input1.disabled = input1_disabled_value = !
        /*eddDownload*/
        ctx[26].used;
        attr_dev(input1, "min", "0");
        attr_dev(input1, "max", "36500");
        set_style(input1, "width", "70px");
        set_style(input1, "padding-left", "5px");
        set_style(input1, "padding-right", "5px");
        set_style(input1, "margin-right", "5px");
        add_location(input1, file$2, 454, 28, 14475);
        set_style(span1, "margin-right", "5px");
        add_location(span1, file$2, 456, 28, 14786);
        button.disabled = button_disabled_value = !
        /*eddDownload*/
        ctx[26].used;
        attr_dev(button, "class", "pk-button button svelte-1nxih9c");
        add_location(button, file$2, 457, 28, 14878);
        attr_dev(div0, "class", "pk-pricing-plan svelte-1nxih9c");
        add_location(div0, file$2, 449, 24, 14002);
        attr_dev(ul, "class", "pk-podcast-categories__level svelte-1nxih9c");
        add_location(ul, file$2, 462, 28, 15232);
        attr_dev(div1, "class", "pk-podcast-categories");
        set_style(div1, "display", "none");
        add_location(div1, file$2, 461, 24, 15145);
        add_location(li, file$2, 448, 20, 13973);
      },
      m: function mount(target, anchor, remount) {
        insert_dev(target, li, anchor);
        append_dev(li, div0);
        append_dev(div0, label);
        append_dev(label, t0);
        append_dev(label, t1);
        append_dev(label, input0);
        append_dev(label, t2);
        append_dev(label, span0);
        append_dev(div0, t3);
        append_dev(div0, input1);
        append_dev(div0, t4);
        append_dev(div0, span1);
        append_dev(span1, t5);
        append_dev(div0, t6);
        append_dev(div0, button);
        append_dev(button, t7);
        append_dev(li, t8);
        append_dev(li, div1);
        append_dev(div1, ul);

        for (var _i11 = 0; _i11 < each_blocks.length; _i11 += 1) {
          each_blocks[_i11].m(ul, null);
        }

        append_dev(li, t9);
        if (remount) run_all(dispose);
        dispose = [listen_dev(input0, "change", checkEddDownload, false, false, false), listen_dev(button, "click", stop_propagation(prevent_default(showHidePricingPlanCategories)), false, true, true)];
      },
      p: function update(ctx, dirty) {
        if (dirty[0] &
        /*pricingPlansOptions*/
        32 && t0_value !== (t0_value =
        /*eddDownload*/
        ctx[26].name + "")) set_data_dev(t0, t0_value);

        if (dirty[0] &
        /*pricingPlansOptions*/
        32 && input0_name_value !== (input0_name_value = "pk_edd_downloads_used[" +
        /*eddDownload*/
        ctx[26].id + "][" +
        /*eddDownload*/
        ctx[26].priceId + "]")) {
          attr_dev(input0, "name", input0_name_value);
        }

        if (dirty[0] &
        /*pricingPlansOptions*/
        32 && input0_checked_value !== (input0_checked_value =
        /*eddDownload*/
        ctx[26].used)) {
          prop_dev(input0, "checked", input0_checked_value);
        }

        if (dirty[0] &
        /*pricingPlansOptions*/
        32 && input1_name_value !== (input1_name_value = "pk_edd_downloads_days[" +
        /*eddDownload*/
        ctx[26].id + "][" +
        /*eddDownload*/
        ctx[26].priceId + "]")) {
          attr_dev(input1, "name", input1_name_value);
        }

        if (dirty[0] &
        /*pricingPlansOptions*/
        32 && input1_value_value !== (input1_value_value =
        /*eddDownload*/
        ctx[26].days)) {
          prop_dev(input1, "value", input1_value_value);
        }

        if (dirty[0] &
        /*pricingPlansOptions*/
        32 && input1_disabled_value !== (input1_disabled_value = !
        /*eddDownload*/
        ctx[26].used)) {
          prop_dev(input1, "disabled", input1_disabled_value);
        }

        if (dirty[0] &
        /*textTranslations*/
        128 && t5_value !== (t5_value =
        /*textTranslations*/
        ctx[7].days + "")) set_data_dev(t5, t5_value);
        if (dirty[0] &
        /*textTranslations*/
        128 && t7_value !== (t7_value =
        /*textTranslations*/
        ctx[7].toCategories + "")) set_data_dev(t7, t7_value);

        if (dirty[0] &
        /*pricingPlansOptions*/
        32 && button_disabled_value !== (button_disabled_value = !
        /*eddDownload*/
        ctx[26].used)) {
          prop_dev(button, "disabled", button_disabled_value);
        }

        if (dirty[0] &
        /*pricingPlansOptions*/
        32) {
          each_value_1 =
          /*eddDownload*/
          ctx[26].categories;
          validate_each_argument(each_value_1);

          var _i12;

          for (_i12 = 0; _i12 < each_value_1.length; _i12 += 1) {
            var child_ctx = get_each_context_1(ctx, each_value_1, _i12);

            if (each_blocks[_i12]) {
              each_blocks[_i12].p(child_ctx, dirty);
            } else {
              each_blocks[_i12] = create_each_block_1(child_ctx);

              each_blocks[_i12].c();

              each_blocks[_i12].m(ul, null);
            }
          }

          for (; _i12 < each_blocks.length; _i12 += 1) {
            each_blocks[_i12].d(1);
          }

          each_blocks.length = each_value_1.length;
        }
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(li);
        destroy_each(each_blocks, detaching);
        run_all(dispose);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_each_block.name,
      type: "each",
      source: "(448:16) {#each pricingPlansOptions as eddDownload}",
      ctx: ctx
    });
    return block;
  }

  function create_fragment$2(ctx) {
    var div4;
    var h1;
    var img;
    var img_src_value;
    var t0;
    var nav;
    var button0;
    var t1_value =
    /*textTranslations*/
    ctx[7].aboutPlugin + "";
    var t1;
    var button0_class_value;
    var t2;
    var button1;
    var t3_value =
    /*textTranslations*/
    ctx[7].monetization + "";
    var t3;
    var button1_class_value;
    var t4;
    var a0;
    var t5_value =
    /*textTranslations*/
    ctx[7].pluginWebsite + "";
    var t5;
    var t6;
    var div3;
    var button2;
    var span;
    var span_class_value;
    var t7;
    var div0;
    var h20;
    var t8_value =
    /*textTranslations*/
    ctx[7].aboutPlugin + "";
    var t8;
    var hr0;
    var t9;
    var p0;
    var t10;
    var a1;
    var t12;
    var t13;
    var p1;
    var t14;
    var a2;
    var t16;
    var h30;
    var t18;
    var ul;
    var li0;
    var t20;
    var li1;
    var t22;
    var li2;
    var t24;
    var li3;
    var t26;
    var div2;
    var h21;
    var t27_value =
    /*textTranslations*/
    ctx[7].monetization + "";
    var t27;
    var hr1;
    var t28;
    var form;
    var h31;
    var t29_value =
    /*textTranslations*/
    ctx[7].accessRules + "";
    var t29;
    var t30;
    var t31;
    var h32;
    var t32_value =
    /*textTranslations*/
    ctx[7].lockAudioMessage + "";
    var t32;
    var t33;
    var p2;
    var t34_value =
    /*textTranslations*/
    ctx[7].lockAudioDescription + "";
    var t34;
    var t35;
    var div1;
    var input0;
    var input0_value_value;
    var t36;
    var button3;
    var t37_value = (null ===
    /*podcastLockAudioURL*/
    ctx[2] ?
    /*textTranslations*/
    ctx[7].addLockAudio :
    /*textTranslations*/
    ctx[7].removelockAudio) + "";
    var t37;
    var t38;
    var t39;
    var input1;
    var t40;
    var h33;
    var t41_value =
    /*textTranslations*/
    ctx[7].lockTextMessage + "";
    var t41;
    var t42;
    var p3;
    var t43_value =
    /*textTranslations*/
    ctx[7].lockTextDescription + "";
    var t43;
    var t44;
    var textarea;
    var t45;
    var html_tag;
    var t46;
    var input2;
    var t47;
    var button4;
    var t48_value =
    /*textTranslations*/
    ctx[7].saveOptions + "";
    var t48;
    var div3_class_value;
    var current;
    var dispose;

    function select_block_type(ctx, dirty) {
      if (0 ===
      /*pricingPlansOptions*/
      ctx[5].length) return create_if_block$2;
      return create_else_block$1;
    }

    var current_block_type = select_block_type(ctx);
    var if_block = current_block_type(ctx);
    var player = new Pk_player({
      props: {
        audioURL:
        /*podcastLockAudioURL*/
        ctx[2],
        playerMiniOff: true,
        style: "margin-top: 15px;" + (null ==
        /*podcastLockAudioURL*/
        ctx[2] ? "display: none;" : "")
      },
      $$inline: true
    });
    var block = {
      c: function create() {
        div4 = element("div");
        h1 = element("h1");
        img = element("img");
        t0 = space();
        nav = element("nav");
        button0 = element("button");
        t1 = text(t1_value);
        t2 = space();
        button1 = element("button");
        t3 = text(t3_value);
        t4 = space();
        a0 = element("a");
        t5 = text(t5_value);
        t6 = space();
        div3 = element("div");
        button2 = element("button");
        span = element("span");
        t7 = space();
        div0 = element("div");
        h20 = element("h2");
        t8 = text(t8_value);
        hr0 = element("hr");
        t9 = space();
        p0 = element("p");
        t10 = text("PodcasterKit is a plugin for podcast monetization. It lets your fans listen to part of your podcast for free and open the rest after payment. All payments are processed by the free plugin ");
        a1 = element("a");
        a1.textContent = "Easy Digital Downloads";
        t12 = text(".");
        t13 = space();
        p1 = element("p");
        t14 = text("All documentation of the PodcasterKit you can find on the ");
        a2 = element("a");
        a2.textContent = "icontentorguild.com";
        t16 = space();
        h30 = element("h3");
        h30.textContent = "1.0.0, September 1, 2020";
        t18 = space();
        ul = element("ul");
        li0 = element("li");
        li0.textContent = "Added podcast audio player.";
        t20 = space();
        li1 = element("li");
        li1.textContent = "Added shortcode for bookmarks in podcast's summary. Now listener can push button on podcast player to jump to the corresponding place in summary.";
        t22 = space();
        li2 = element("li");
        li2.textContent = "Added possibility to lock some part of podcast and play special audio message for it as well as show special text message in summary.";
        t24 = space();
        li3 = element("li");
        li3.textContent = "Added possibility to set access rules after payment through Easy Digital Download plugin for locked podcasts by categories and certain period of time.";
        t26 = space();
        div2 = element("div");
        h21 = element("h2");
        t27 = text(t27_value);
        hr1 = element("hr");
        t28 = space();
        form = element("form");
        h31 = element("h3");
        t29 = text(t29_value);
        t30 = space();
        if_block.c();
        t31 = space();
        h32 = element("h3");
        t32 = text(t32_value);
        t33 = space();
        p2 = element("p");
        t34 = text(t34_value);
        t35 = space();
        div1 = element("div");
        input0 = element("input");
        t36 = space();
        button3 = element("button");
        t37 = text(t37_value);
        t38 = space();
        create_component(player.$$.fragment);
        t39 = space();
        input1 = element("input");
        t40 = space();
        h33 = element("h3");
        t41 = text(t41_value);
        t42 = space();
        p3 = element("p");
        t43 = text(t43_value);
        t44 = space();
        textarea = element("textarea");
        t45 = space();
        t46 = space();
        input2 = element("input");
        t47 = space();
        button4 = element("button");
        t48 = text(t48_value);
        if (img.src !== (img_src_value = "" + (
        /*pkImagesURL*/
        ctx[4] + "pk-logo.svg"))) attr_dev(img, "src", img_src_value);
        attr_dev(img, "alt", "Podcaster Kit");
        attr_dev(img, "class", "svelte-1nxih9c");
        add_location(img, file$2, 392, 39, 10226);
        attr_dev(h1, "class", "pk-admin-options__logo svelte-1nxih9c");
        add_location(h1, file$2, 392, 4, 10191);
        attr_dev(button0, "class", button0_class_value = "" + (null_to_empty("#tab2" !== window.location.hash ? "active" : "") + " svelte-1nxih9c"));
        add_location(button0, file$2, 394, 8, 10362);
        attr_dev(button1, "class", button1_class_value = "" + (null_to_empty("#tab2" === window.location.hash ? "active" : "") + " svelte-1nxih9c"));
        add_location(button1, file$2, 396, 8, 10558);
        attr_dev(a0, "href", "https://icontentorguild.com/");
        attr_dev(a0, "target", "_blank");
        attr_dev(a0, "class", "svelte-1nxih9c");
        add_location(a0, file$2, 398, 8, 10755);
        attr_dev(nav, "class", "pk-admin-options__menu svelte-1nxih9c");
        add_location(nav, file$2, 393, 4, 10293);
        attr_dev(span, "class", span_class_value = "" + (null_to_empty(null ===
        /*isMenuOpen*/
        ctx[11] ? "" :
        /*isMenuOpen*/
        ctx[11] ? "pk-admin-options__menu-icon--to-arrow" : "pk-admin-options__menu-icon--from-arrow") + " svelte-1nxih9c"));
        add_location(span, file$2, 417, 12, 11855);
        attr_dev(button2, "class", "pk-admin-options__menu-icon svelte-1nxih9c");
        add_location(button2, file$2, 415, 8, 11682);
        attr_dev(h20, "class", "svelte-1nxih9c");
        add_location(h20, file$2, 422, 12, 12175);
        attr_dev(hr0, "class", "svelte-1nxih9c");
        add_location(hr0, file$2, 422, 51, 12214);
        attr_dev(a1, "href", "https://easydigitaldownloads.com/");
        attr_dev(a1, "target", "_blank");
        add_location(a1, file$2, 423, 203, 12423);
        attr_dev(p0, "class", "svelte-1nxih9c");
        add_location(p0, file$2, 423, 12, 12232);
        attr_dev(a2, "href", "https://icontentorguild.com/documentation/");
        attr_dev(a2, "target", "_blank");
        add_location(a2, file$2, 424, 73, 12588);
        attr_dev(p1, "class", "svelte-1nxih9c");
        add_location(p1, file$2, 424, 12, 12527);
        attr_dev(h30, "class", "svelte-1nxih9c");
        add_location(h30, file$2, 425, 12, 12697);
        attr_dev(li0, "class", "svelte-1nxih9c");
        add_location(li0, file$2, 427, 16, 12764);
        attr_dev(li1, "class", "svelte-1nxih9c");
        add_location(li1, file$2, 428, 16, 12817);
        attr_dev(li2, "class", "svelte-1nxih9c");
        add_location(li2, file$2, 429, 16, 12988);
        attr_dev(li3, "class", "svelte-1nxih9c");
        add_location(li3, file$2, 430, 16, 13147);
        attr_dev(ul, "class", "svelte-1nxih9c");
        add_location(ul, file$2, 426, 12, 12743);
        attr_dev(div0, "class", "pk-admin-options__about-tab svelte-1nxih9c");
        set_style(div0, "display", "#tab2" !== window.location.hash ? "block" : "none");
        add_location(div0, file$2, 421, 8, 12050);
        attr_dev(h21, "class", "svelte-1nxih9c");
        add_location(h21, file$2, 435, 12, 13446);
        attr_dev(hr1, "class", "svelte-1nxih9c");
        add_location(hr1, file$2, 435, 52, 13486);
        attr_dev(h31, "class", "svelte-1nxih9c");
        add_location(h31, file$2, 437, 16, 13567);
        attr_dev(h32, "class", "svelte-1nxih9c");
        add_location(h32, file$2, 503, 16, 18194);
        attr_dev(p2, "class", "svelte-1nxih9c");
        add_location(p2, file$2, 504, 16, 18255);
        attr_dev(input0, "type", "text");
        attr_dev(input0, "class", "pk-podcast-lock-audio svelte-1nxih9c");
        input0.value = input0_value_value = null ===
        /*podcastLockAudioURL*/
        ctx[2] ? "" :
        /*podcastLockAudioURL*/
        ctx[2];
        input0.disabled = true;
        add_location(input0, file$2, 506, 20, 18409);
        attr_dev(button3, "class", "pk-button button svelte-1nxih9c");
        add_location(button3, file$2, 507, 20, 18555);
        set_style(div1, "display", "flex");
        set_style(div1, "align-items", "center");
        set_style(div1, "margin-bottom", "25px");
        add_location(div1, file$2, 505, 16, 18318);
        attr_dev(input1, "type", "hidden");
        attr_dev(input1, "name", "pk_podcast_lock_audio_id");
        input1.value =
        /*podcastLockAudioId*/
        ctx[1];
        add_location(input1, file$2, 510, 16, 18962);
        attr_dev(h33, "class", "svelte-1nxih9c");
        add_location(h33, file$2, 512, 16, 19062);
        attr_dev(p3, "class", "svelte-1nxih9c");
        add_location(p3, file$2, 513, 16, 19122);
        attr_dev(textarea, "id", "pk-podcast-lock-message");
        attr_dev(textarea, "name", "pk_podcast_lock_message");
        attr_dev(textarea, "rows", "15");
        set_style(textarea, "width", "100%");
        textarea.value =
        /*podcastLockMessage*/
        ctx[6];
        add_location(textarea, file$2, 514, 16, 19184);
        html_tag = new HtmlTag(
        /*pkNonce*/
        ctx[3], t46);
        attr_dev(input2, "type", "hidden");
        attr_dev(input2, "name", "action");
        input2.value = "pk_save_monetisation_options";
        add_location(input2, file$2, 517, 16, 19382);
        attr_dev(button4, "class", "pk-button__submit button svelte-1nxih9c");
        attr_dev(button4, "type", "submit");
        set_style(button4, "margin-top", "20px");
        add_location(button4, file$2, 518, 16, 19471);
        attr_dev(form, "method", "post");
        attr_dev(form, "action",
        /*adminActionURL*/
        ctx[0]);
        add_location(form, file$2, 436, 12, 13504);
        set_style(div2, "display", "#tab2" === window.location.hash ? "block" : "none");
        add_location(div2, file$2, 434, 8, 13357);
        attr_dev(div3, "class", div3_class_value = "pk-admin-options__panel " + (null ===
        /*isMenuOpen*/
        ctx[11] ? "" :
        /*isMenuOpen*/
        ctx[11] ? "pk-admin-options__panel--slide-out" : "pk-admin-options__panel--slide-in") + " svelte-1nxih9c");
        add_location(div3, file$2, 400, 4, 10862);
        attr_dev(div4, "class", "pk-admin-options svelte-1nxih9c");
        add_location(div4, file$2, 391, 0, 10124);
      },
      l: function claim(nodes) {
        throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
      },
      m: function mount(target, anchor, remount) {
        insert_dev(target, div4, anchor);
        append_dev(div4, h1);
        append_dev(h1, img);
        append_dev(div4, t0);
        append_dev(div4, nav);
        append_dev(nav, button0);
        append_dev(button0, t1);
        append_dev(nav, t2);
        append_dev(nav, button1);
        append_dev(button1, t3);
        append_dev(nav, t4);
        append_dev(nav, a0);
        append_dev(a0, t5);
        /*nav_binding*/

        ctx[20](nav);
        append_dev(div4, t6);
        append_dev(div4, div3);
        append_dev(div3, button2);
        append_dev(button2, span);
        append_dev(div3, t7);
        append_dev(div3, div0);
        append_dev(div0, h20);
        append_dev(h20, t8);
        append_dev(div0, hr0);
        append_dev(div0, t9);
        append_dev(div0, p0);
        append_dev(p0, t10);
        append_dev(p0, a1);
        append_dev(p0, t12);
        append_dev(div0, t13);
        append_dev(div0, p1);
        append_dev(p1, t14);
        append_dev(p1, a2);
        append_dev(div0, t16);
        append_dev(div0, h30);
        append_dev(div0, t18);
        append_dev(div0, ul);
        append_dev(ul, li0);
        append_dev(ul, t20);
        append_dev(ul, li1);
        append_dev(ul, t22);
        append_dev(ul, li2);
        append_dev(ul, t24);
        append_dev(ul, li3);
        append_dev(div3, t26);
        append_dev(div3, div2);
        append_dev(div2, h21);
        append_dev(h21, t27);
        append_dev(div2, hr1);
        append_dev(div2, t28);
        append_dev(div2, form);
        append_dev(form, h31);
        append_dev(h31, t29);
        append_dev(form, t30);
        if_block.m(form, null);
        append_dev(form, t31);
        append_dev(form, h32);
        append_dev(h32, t32);
        append_dev(form, t33);
        append_dev(form, p2);
        append_dev(p2, t34);
        append_dev(form, t35);
        append_dev(form, div1);
        append_dev(div1, input0);
        append_dev(div1, t36);
        append_dev(div1, button3);
        append_dev(button3, t37);
        append_dev(form, t38);
        mount_component(player, form, null);
        append_dev(form, t39);
        append_dev(form, input1);
        append_dev(form, t40);
        append_dev(form, h33);
        append_dev(h33, t41);
        append_dev(form, t42);
        append_dev(form, p3);
        append_dev(p3, t43);
        append_dev(form, t44);
        append_dev(form, textarea);
        append_dev(form, t45);
        html_tag.m(form);
        append_dev(form, t46);
        append_dev(form, input2);
        append_dev(form, t47);
        append_dev(form, button4);
        append_dev(button4, t48);
        /*div3_binding*/

        ctx[22](div3);
        /*div4_binding*/

        ctx[25](div4);
        current = true;
        if (remount) run_all(dispose);
        dispose = [listen_dev(button0, "click", stop_propagation(prevent_default(
        /*changeOptionsPanel*/
        ctx[13])), false, true, true), listen_dev(button1, "click", stop_propagation(prevent_default(
        /*changeOptionsPanel*/
        ctx[13])), false, true, true), listen_dev(button2, "click", stop_propagation(prevent_default(
        /*click_handler*/
        ctx[21])), false, true, true), listen_dev(button3, "click", stop_propagation(prevent_default(
        /*handlePodcastSetup*/
        ctx[14])), false, true, true), listen_dev(button4, "click",
        /*preparePodcastLockMessageForSubmit*/
        ctx[15], false, false, false), listen_dev(div3, "touchstart",
        /*touchstart_handler*/
        ctx[23], false, false, false), listen_dev(div3, "touchmove",
        /*touchmove_handler*/
        ctx[24], false, false, false), listen_dev(div3, "touchend",
        /*endOptionsPanelTouchMove*/
        ctx[16], false, false, false), listen_dev(div3, "touchcancel",
        /*endOptionsPanelTouchMove*/
        ctx[16], false, false, false)];
      },
      p: function update(ctx, dirty) {
        if (!current || dirty[0] &
        /*pkImagesURL*/
        16 && img.src !== (img_src_value = "" + (
        /*pkImagesURL*/
        ctx[4] + "pk-logo.svg"))) {
          attr_dev(img, "src", img_src_value);
        }

        if ((!current || dirty[0] &
        /*textTranslations*/
        128) && t1_value !== (t1_value =
        /*textTranslations*/
        ctx[7].aboutPlugin + "")) set_data_dev(t1, t1_value);
        if ((!current || dirty[0] &
        /*textTranslations*/
        128) && t3_value !== (t3_value =
        /*textTranslations*/
        ctx[7].monetization + "")) set_data_dev(t3, t3_value);
        if ((!current || dirty[0] &
        /*textTranslations*/
        128) && t5_value !== (t5_value =
        /*textTranslations*/
        ctx[7].pluginWebsite + "")) set_data_dev(t5, t5_value);

        if (!current || dirty[0] &
        /*isMenuOpen*/
        2048 && span_class_value !== (span_class_value = "" + (null_to_empty(null ===
        /*isMenuOpen*/
        ctx[11] ? "" :
        /*isMenuOpen*/
        ctx[11] ? "pk-admin-options__menu-icon--to-arrow" : "pk-admin-options__menu-icon--from-arrow") + " svelte-1nxih9c"))) {
          attr_dev(span, "class", span_class_value);
        }

        if ((!current || dirty[0] &
        /*textTranslations*/
        128) && t8_value !== (t8_value =
        /*textTranslations*/
        ctx[7].aboutPlugin + "")) set_data_dev(t8, t8_value);
        if ((!current || dirty[0] &
        /*textTranslations*/
        128) && t27_value !== (t27_value =
        /*textTranslations*/
        ctx[7].monetization + "")) set_data_dev(t27, t27_value);
        if ((!current || dirty[0] &
        /*textTranslations*/
        128) && t29_value !== (t29_value =
        /*textTranslations*/
        ctx[7].accessRules + "")) set_data_dev(t29, t29_value);

        if (current_block_type === (current_block_type = select_block_type(ctx)) && if_block) {
          if_block.p(ctx, dirty);
        } else {
          if_block.d(1);
          if_block = current_block_type(ctx);

          if (if_block) {
            if_block.c();
            if_block.m(form, t31);
          }
        }

        if ((!current || dirty[0] &
        /*textTranslations*/
        128) && t32_value !== (t32_value =
        /*textTranslations*/
        ctx[7].lockAudioMessage + "")) set_data_dev(t32, t32_value);
        if ((!current || dirty[0] &
        /*textTranslations*/
        128) && t34_value !== (t34_value =
        /*textTranslations*/
        ctx[7].lockAudioDescription + "")) set_data_dev(t34, t34_value);

        if (!current || dirty[0] &
        /*podcastLockAudioURL*/
        4 && input0_value_value !== (input0_value_value = null ===
        /*podcastLockAudioURL*/
        ctx[2] ? "" :
        /*podcastLockAudioURL*/
        ctx[2]) && input0.value !== input0_value_value) {
          prop_dev(input0, "value", input0_value_value);
        }

        if ((!current || dirty[0] &
        /*podcastLockAudioURL, textTranslations*/
        132) && t37_value !== (t37_value = (null ===
        /*podcastLockAudioURL*/
        ctx[2] ?
        /*textTranslations*/
        ctx[7].addLockAudio :
        /*textTranslations*/
        ctx[7].removelockAudio) + "")) set_data_dev(t37, t37_value);
        var player_changes = {};
        if (dirty[0] &
        /*podcastLockAudioURL*/
        4) player_changes.audioURL =
        /*podcastLockAudioURL*/
        ctx[2];
        if (dirty[0] &
        /*podcastLockAudioURL*/
        4) player_changes.style = "margin-top: 15px;" + (null ==
        /*podcastLockAudioURL*/
        ctx[2] ? "display: none;" : "");
        player.$set(player_changes);

        if (!current || dirty[0] &
        /*podcastLockAudioId*/
        2) {
          prop_dev(input1, "value",
          /*podcastLockAudioId*/
          ctx[1]);
        }

        if ((!current || dirty[0] &
        /*textTranslations*/
        128) && t41_value !== (t41_value =
        /*textTranslations*/
        ctx[7].lockTextMessage + "")) set_data_dev(t41, t41_value);
        if ((!current || dirty[0] &
        /*textTranslations*/
        128) && t43_value !== (t43_value =
        /*textTranslations*/
        ctx[7].lockTextDescription + "")) set_data_dev(t43, t43_value);

        if (!current || dirty[0] &
        /*podcastLockMessage*/
        64) {
          prop_dev(textarea, "value",
          /*podcastLockMessage*/
          ctx[6]);
        }

        if (!current || dirty[0] &
        /*pkNonce*/
        8) html_tag.p(
        /*pkNonce*/
        ctx[3]);
        if ((!current || dirty[0] &
        /*textTranslations*/
        128) && t48_value !== (t48_value =
        /*textTranslations*/
        ctx[7].saveOptions + "")) set_data_dev(t48, t48_value);

        if (!current || dirty[0] &
        /*adminActionURL*/
        1) {
          attr_dev(form, "action",
          /*adminActionURL*/
          ctx[0]);
        }

        if (!current || dirty[0] &
        /*isMenuOpen*/
        2048 && div3_class_value !== (div3_class_value = "pk-admin-options__panel " + (null ===
        /*isMenuOpen*/
        ctx[11] ? "" :
        /*isMenuOpen*/
        ctx[11] ? "pk-admin-options__panel--slide-out" : "pk-admin-options__panel--slide-in") + " svelte-1nxih9c")) {
          attr_dev(div3, "class", div3_class_value);
        }
      },
      i: function intro(local) {
        if (current) return;
        transition_in(player.$$.fragment, local);
        current = true;
      },
      o: function outro(local) {
        transition_out(player.$$.fragment, local);
        current = false;
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(div4);
        /*nav_binding*/

        ctx[20](null);
        if_block.d();
        destroy_component(player);
        /*div3_binding*/

        ctx[22](null);
        /*div4_binding*/

        ctx[25](null);
        run_all(dispose);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_fragment$2.name,
      type: "component",
      source: "",
      ctx: ctx
    });
    return block;
  }

  function checkEddDownload(e) {
    var input = e.target.parentNode.parentNode.querySelector("input[type=\"number\"]");
    var button = e.target.parentNode.parentNode.querySelector("button");
    input.disabled = button.disabled = !e.target.checked;
  }

  function showHidePricingPlanCategories(e) {
    var currentCategories = e.target.parentNode.parentNode.querySelector(".pk-podcast-categories");
    var allCategories = e.target.parentNode.parentNode.parentNode.querySelectorAll(".pk-podcast-categories");

    for (var i = 0; i < allCategories.length; i++) {
      if (currentCategories == allCategories[i]) {
        allCategories[i].style.display = "flex" == allCategories[i].style.display ? "none" : "flex";
      } else {
        allCategories[i].style.display = "none";
      }
    }
  }

  function instance$2($$self, $$props, $$invalidate) {
    var _$$props$pkNonce = $$props.pkNonce,
        pkNonce = _$$props$pkNonce === void 0 ? null : _$$props$pkNonce;
    var _$$props$adminActionU = $$props.adminActionURL,
        adminActionURL = _$$props$adminActionU === void 0 ? null : _$$props$adminActionU;
    var _$$props$pkImagesURL = $$props.pkImagesURL,
        pkImagesURL = _$$props$pkImagesURL === void 0 ? null : _$$props$pkImagesURL;
    var _$$props$pricingPlans = $$props.pricingPlansOptions,
        pricingPlansOptions = _$$props$pricingPlans === void 0 ? [] : _$$props$pricingPlans;
    var _$$props$podcastLockA = $$props.podcastLockAudioId,
        podcastLockAudioId = _$$props$podcastLockA === void 0 ? null : _$$props$podcastLockA;
    var _$$props$podcastLockA2 = $$props.podcastLockAudioURL,
        podcastLockAudioURL = _$$props$podcastLockA2 === void 0 ? null : _$$props$podcastLockA2;
    var _$$props$podcastLockM = $$props.podcastLockMessage,
        podcastLockMessage = _$$props$podcastLockM === void 0 ? "" : _$$props$podcastLockM;
    var _$$props$textTranslat = $$props.textTranslations,
        textTranslations = _$$props$textTranslat === void 0 ? {} : _$$props$textTranslat;
    var podcastUploader;
    var pkAdminOptions;
    var podcastLockMessageEditor = null;
    var adminOptionsElement;
    var menuElement;
    var panelElement;
    var isMenuOpen = null;
    var touchStartX = null;

    function changeOptionsPanel(e) {
      var menuItems = menuElement.querySelectorAll("button");

      for (var i = 0; i < menuItems.length; i++) {
        if (e.target == menuItems[i]) {
          menuItems[i].classList.add("active");
          console.log(panelElement.children[i + 1]);
          $$invalidate(10, panelElement.children[i + 1].style.display = "block", panelElement);
          window.location.hash = "tab" + (i + 1);
          $$invalidate(0, adminActionURL = adminActionURL + window.location.hash);
        } else {
          menuItems[i].classList.remove("active");
          $$invalidate(10, panelElement.children[i + 1].style.display = "none", panelElement);
        }
      }
    }

    function handlePodcastSetup(e) {
      if (null !== podcastLockAudioURL) {
        $$invalidate(1, podcastLockAudioId = null);
        $$invalidate(2, podcastLockAudioURL = null);
      } else {
        if (podcastUploader) {
          // If the media frame already exists, reopen it.
          podcastUploader.open();
          return;
        }

        podcastUploader = wp.media({
          title: textTranslations.selectLockAudio,
          frame: "select",
          library: {
            type: "audio"
          },
          button: {
            text: textTranslations.selectLockAudio
          },
          multiple: false
        }).on("select", function () {
          // it also has "open" and "close" events 
          var attachment = podcastUploader.state().get("selection").first().toJSON();
          $$invalidate(2, podcastLockAudioURL = attachment.url);
          $$invalidate(1, podcastLockAudioId = attachment.id);
        }).open();
      }
    }

    document.addEventListener("DOMContentLoaded", function () {
      wp.editor.initialize("pk-podcast-lock-message", {
        tinymce: {
          wpautop: false,
          toolbar1: "formatselect,bold,italic,bullist,numlist,blockquote,hr,alignleft,aligncenter,alignright,link,unlink,forecolor,removeformat"
        },
        quicktags: true,
        mediaButtons: true
      });
    }, false);

    function preparePodcastLockMessageForSubmit() {
      if (null === podcastLockMessageEditor) {
        podcastLockMessageEditor = tinymce.get("pk-podcast-lock-message");
      }

      podcastLockMessageEditor.save();
    }

    function endOptionsPanelTouchMove(e) {
      var currentX = parseInt(e.changedTouches[0].clientX);
      var moveDistance = currentX - touchStartX;

      if (10 < moveDistance) {
        $$invalidate(10, panelElement.style.transform = null, panelElement);
        panelElement.classList.remove("pk-admin-options__panel--slide-in");
        panelElement.classList.add("pk-admin-options__panel--slide-out");
        $$invalidate(11, isMenuOpen = true);
      } else if (-10 > moveDistance) {
        $$invalidate(10, panelElement.style.transform = null, panelElement);
        panelElement.classList.remove("pk-admin-options__panel--slide-out");
        panelElement.classList.add("pk-admin-options__panel--slide-in");
        $$invalidate(11, isMenuOpen = false);
      }
    }

    var writable_props = ["pkNonce", "adminActionURL", "pkImagesURL", "pricingPlansOptions", "podcastLockAudioId", "podcastLockAudioURL", "podcastLockMessage", "textTranslations"];
    Object.keys($$props).forEach(function (key) {
      if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn("<Pk_admin_options> was created with unknown prop '".concat(key, "'"));
    });
    var _$$props$$$slots = $$props.$$slots,
        $$slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
        $$scope = $$props.$$scope;
    validate_slots("Pk_admin_options", $$slots, []);

    function nav_binding($$value) {
      binding_callbacks[$$value ? "unshift" : "push"](function () {
        $$invalidate(9, menuElement = $$value);
      });
    }

    var click_handler = function click_handler() {
      $$invalidate(11, isMenuOpen = null == isMenuOpen ? true : !isMenuOpen);
    };

    function div3_binding($$value) {
      binding_callbacks[$$value ? "unshift" : "push"](function () {
        $$invalidate(10, panelElement = $$value);
      });
    }

    var touchstart_handler = function touchstart_handler(e) {
      $$invalidate(12, touchStartX = parseInt(e.changedTouches[0].clientX));
    };

    var touchmove_handler = function touchmove_handler(e) {
      var currentX = parseInt(e.changedTouches[0].clientX);
      var moveDistance = currentX - touchStartX;

      if (10 < moveDistance) {
        $$invalidate(10, panelElement.style.transform = "translateX(" + moveDistance + "px)", panelElement);
      } else if (-10 > moveDistance) {
        $$invalidate(10, panelElement.style.transform = "translateX(" + (215 + moveDistance) + "px)", panelElement);
      }
    };

    function div4_binding($$value) {
      binding_callbacks[$$value ? "unshift" : "push"](function () {
        $$invalidate(8, adminOptionsElement = $$value);
      });
    }

    $$self.$set = function ($$props) {
      if ("pkNonce" in $$props) $$invalidate(3, pkNonce = $$props.pkNonce);
      if ("adminActionURL" in $$props) $$invalidate(0, adminActionURL = $$props.adminActionURL);
      if ("pkImagesURL" in $$props) $$invalidate(4, pkImagesURL = $$props.pkImagesURL);
      if ("pricingPlansOptions" in $$props) $$invalidate(5, pricingPlansOptions = $$props.pricingPlansOptions);
      if ("podcastLockAudioId" in $$props) $$invalidate(1, podcastLockAudioId = $$props.podcastLockAudioId);
      if ("podcastLockAudioURL" in $$props) $$invalidate(2, podcastLockAudioURL = $$props.podcastLockAudioURL);
      if ("podcastLockMessage" in $$props) $$invalidate(6, podcastLockMessage = $$props.podcastLockMessage);
      if ("textTranslations" in $$props) $$invalidate(7, textTranslations = $$props.textTranslations);
    };

    $$self.$capture_state = function () {
      return {
        Player: Pk_player,
        pkNonce: pkNonce,
        adminActionURL: adminActionURL,
        pkImagesURL: pkImagesURL,
        pricingPlansOptions: pricingPlansOptions,
        podcastLockAudioId: podcastLockAudioId,
        podcastLockAudioURL: podcastLockAudioURL,
        podcastLockMessage: podcastLockMessage,
        textTranslations: textTranslations,
        podcastUploader: podcastUploader,
        pkAdminOptions: pkAdminOptions,
        podcastLockMessageEditor: podcastLockMessageEditor,
        adminOptionsElement: adminOptionsElement,
        menuElement: menuElement,
        panelElement: panelElement,
        isMenuOpen: isMenuOpen,
        touchStartX: touchStartX,
        changeOptionsPanel: changeOptionsPanel,
        checkEddDownload: checkEddDownload,
        showHidePricingPlanCategories: showHidePricingPlanCategories,
        handlePodcastSetup: handlePodcastSetup,
        preparePodcastLockMessageForSubmit: preparePodcastLockMessageForSubmit,
        endOptionsPanelTouchMove: endOptionsPanelTouchMove
      };
    };

    $$self.$inject_state = function ($$props) {
      if ("pkNonce" in $$props) $$invalidate(3, pkNonce = $$props.pkNonce);
      if ("adminActionURL" in $$props) $$invalidate(0, adminActionURL = $$props.adminActionURL);
      if ("pkImagesURL" in $$props) $$invalidate(4, pkImagesURL = $$props.pkImagesURL);
      if ("pricingPlansOptions" in $$props) $$invalidate(5, pricingPlansOptions = $$props.pricingPlansOptions);
      if ("podcastLockAudioId" in $$props) $$invalidate(1, podcastLockAudioId = $$props.podcastLockAudioId);
      if ("podcastLockAudioURL" in $$props) $$invalidate(2, podcastLockAudioURL = $$props.podcastLockAudioURL);
      if ("podcastLockMessage" in $$props) $$invalidate(6, podcastLockMessage = $$props.podcastLockMessage);
      if ("textTranslations" in $$props) $$invalidate(7, textTranslations = $$props.textTranslations);
      if ("podcastUploader" in $$props) podcastUploader = $$props.podcastUploader;
      if ("pkAdminOptions" in $$props) pkAdminOptions = $$props.pkAdminOptions;
      if ("podcastLockMessageEditor" in $$props) podcastLockMessageEditor = $$props.podcastLockMessageEditor;
      if ("adminOptionsElement" in $$props) $$invalidate(8, adminOptionsElement = $$props.adminOptionsElement);
      if ("menuElement" in $$props) $$invalidate(9, menuElement = $$props.menuElement);
      if ("panelElement" in $$props) $$invalidate(10, panelElement = $$props.panelElement);
      if ("isMenuOpen" in $$props) $$invalidate(11, isMenuOpen = $$props.isMenuOpen);
      if ("touchStartX" in $$props) $$invalidate(12, touchStartX = $$props.touchStartX);
    };

    if ($$props && "$$inject" in $$props) {
      $$self.$inject_state($$props.$$inject);
    }

    return [adminActionURL, podcastLockAudioId, podcastLockAudioURL, pkNonce, pkImagesURL, pricingPlansOptions, podcastLockMessage, textTranslations, adminOptionsElement, menuElement, panelElement, isMenuOpen, touchStartX, changeOptionsPanel, handlePodcastSetup, preparePodcastLockMessageForSubmit, endOptionsPanelTouchMove, podcastUploader, podcastLockMessageEditor, pkAdminOptions, nav_binding, click_handler, div3_binding, touchstart_handler, touchmove_handler, div4_binding];
  }

  var Pk_admin_options = /*#__PURE__*/function (_SvelteComponentDev) {
    _inherits(Pk_admin_options, _SvelteComponentDev);

    var _super = _createSuper(Pk_admin_options);

    function Pk_admin_options(options) {
      var _this;

      _classCallCheck(this, Pk_admin_options);

      _this = _super.call(this, options);
      if (!document_1$1.getElementById("svelte-1nxih9c-style")) add_css$2();
      init(_assertThisInitialized(_this), options, instance$2, create_fragment$2, safe_not_equal, {
        pkNonce: 3,
        adminActionURL: 0,
        pkImagesURL: 4,
        pricingPlansOptions: 5,
        podcastLockAudioId: 1,
        podcastLockAudioURL: 2,
        podcastLockMessage: 6,
        textTranslations: 7
      }, [-1, -1]);
      dispatch_dev("SvelteRegisterComponent", {
        component: _assertThisInitialized(_this),
        tagName: "Pk_admin_options",
        options: options,
        id: create_fragment$2.name
      });
      return _this;
    }

    _createClass(Pk_admin_options, [{
      key: "pkNonce",
      get: function get() {
        throw new Error("<Pk_admin_options>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      },
      set: function set(value) {
        throw new Error("<Pk_admin_options>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      }
    }, {
      key: "adminActionURL",
      get: function get() {
        throw new Error("<Pk_admin_options>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      },
      set: function set(value) {
        throw new Error("<Pk_admin_options>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      }
    }, {
      key: "pkImagesURL",
      get: function get() {
        throw new Error("<Pk_admin_options>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      },
      set: function set(value) {
        throw new Error("<Pk_admin_options>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      }
    }, {
      key: "pricingPlansOptions",
      get: function get() {
        throw new Error("<Pk_admin_options>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      },
      set: function set(value) {
        throw new Error("<Pk_admin_options>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      }
    }, {
      key: "podcastLockAudioId",
      get: function get() {
        throw new Error("<Pk_admin_options>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      },
      set: function set(value) {
        throw new Error("<Pk_admin_options>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      }
    }, {
      key: "podcastLockAudioURL",
      get: function get() {
        throw new Error("<Pk_admin_options>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      },
      set: function set(value) {
        throw new Error("<Pk_admin_options>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      }
    }, {
      key: "podcastLockMessage",
      get: function get() {
        throw new Error("<Pk_admin_options>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      },
      set: function set(value) {
        throw new Error("<Pk_admin_options>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      }
    }, {
      key: "textTranslations",
      get: function get() {
        throw new Error("<Pk_admin_options>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      },
      set: function set(value) {
        throw new Error("<Pk_admin_options>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      }
    }]);

    return Pk_admin_options;
  }(SvelteComponentDev);

  var document_1$2 = globals.document;
  var file$3 = "views/pk-admin-editor.svelte";

  function add_css$3() {
    var style = element("style");
    style.id = "svelte-uh4s2a-style";
    style.textContent = ".pk-admin-editor.svelte-uh4s2a.svelte-uh4s2a{padding:10px 0;text-align:center}.pk-podcast-file.svelte-uh4s2a.svelte-uh4s2a{overflow:hidden;direction:rtl;white-space:nowrap;line-height:2em;height:2em;margin-right:15px;text-overflow:ellipsis;flex-grow:2;text-align:left}.pk-button.svelte-uh4s2a.svelte-uh4s2a{padding:0;margin:0;background-color:transparent;border:none;cursor:pointer;line-height:0}.pk-button.svelte-uh4s2a:hover svg.svelte-uh4s2a{fill-opacity:0.8}.pk-button.svelte-uh4s2a:active svg.svelte-uh4s2a{fill-opacity:0.5;transform:scale(0.95)}.pk-button.svelte-uh4s2a.svelte-uh4s2a:focus{outline:none}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGstYWRtaW4tZWRpdG9yLnN2ZWx0ZSIsInNvdXJjZXMiOlsicGstYWRtaW4tZWRpdG9yLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxuaW1wb3J0IHsgb25Nb3VudCB9IGZyb20gJ3N2ZWx0ZSc7XG5pbXBvcnQgUGxheWVyIGZyb20gJy4vcGstcGxheWVyLnN2ZWx0ZSc7XG5cbmV4cG9ydCBsZXQgcGtOb25jZSA9IG51bGw7XG5leHBvcnQgbGV0IHBvZGNhc3RVUkwgPSBudWxsO1xuZXhwb3J0IGxldCBwb2RjYXN0SWQgPSBudWxsO1xubGV0IGN1cnJlbnRUaW1lSW5TZWNvbmRzID0gMDtcbmV4cG9ydCBsZXQgbG9ja1RpbWVJblNlY29uZHMgPSBudWxsO1xuZXhwb3J0IGxldCBwb2RjYXN0TG9ja0F1ZGlvVVJMID0gbnVsbDtcblxuZXhwb3J0IGxldCBpY29uQWRkUG9kY2FzdCA9ICcnO1xuZXhwb3J0IGxldCB0ZXh0VHJhbnNsYXRpb25zID0ge307XG5cbmxldCBwb2RjYXN0VXBsb2FkZXI7XG5cbmZ1bmN0aW9uIGhhbmRsZVBvZGNhc3RTZXR1cChlKSB7XG5cbiAgICBpZiAoIG51bGwgIT09IHBvZGNhc3RVUkwgKSB7XG5cbiAgICAgICAgcG9kY2FzdElkID0gbnVsbDtcbiAgICAgICAgcG9kY2FzdFVSTCA9IG51bGw7XG5cbiAgICB9IGVsc2Uge1xuXG4gICAgICAgIGlmICggcG9kY2FzdFVwbG9hZGVyICkgeyAvLyBJZiB0aGUgbWVkaWEgZnJhbWUgYWxyZWFkeSBleGlzdHMsIHJlb3BlbiBpdC5cbiAgICAgICAgICAgIHBvZGNhc3RVcGxvYWRlci5vcGVuKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBwb2RjYXN0VXBsb2FkZXIgPSB3cC5tZWRpYSh7XG4gICAgICAgICAgICAgICAgdGl0bGU6IHBrU2NyaXB0RGF0YS50ZXh0QWRkUG9kY2FzdCxcbiAgICAgICAgICAgICAgICBmcmFtZTogJ3NlbGVjdCcsXG4gICAgICAgICAgICAgICAgbGlicmFyeToge1x0dHlwZSA6ICdhdWRpbycgfSxcbiAgICAgICAgICAgICAgICBidXR0b246IHsgdGV4dDogcGtTY3JpcHREYXRhLnRleHRBZGRQb2RjYXN0IH0sXG4gICAgICAgICAgICAgICAgbXVsdGlwbGU6IGZhbHNlIFxuICAgICAgICAgICAgfSkub24oJ3NlbGVjdCcsIGZ1bmN0aW9uKCkgeyAvLyBpdCBhbHNvIGhhcyBcIm9wZW5cIiBhbmQgXCJjbG9zZVwiIGV2ZW50cyBcbiAgICAgICAgICAgICAgICBsZXQgYXR0YWNobWVudCA9IHBvZGNhc3RVcGxvYWRlci5zdGF0ZSgpLmdldCgnc2VsZWN0aW9uJykuZmlyc3QoKS50b0pTT04oKTtcbiAgICAgICAgICAgICAgICBwb2RjYXN0VVJMID0gYXR0YWNobWVudC51cmw7XG4gICAgICAgICAgICAgICAgcG9kY2FzdElkID0gYXR0YWNobWVudC5pZDtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAub3BlbigpO1xuICAgIH1cbn1cblxubGV0IHdvcmRwcmVzc0VkaXRvckVsZW1lbnQ7XG5sZXQgbGFzdEN1cnNvclBvc2l0aW9uID0gMDtcbmxldCBhZGRCb29rTWFya0J1dHRvbjtcblxub25Nb3VudCgoKSA9PiB7XG5cbiAgICB3b3JkcHJlc3NFZGl0b3JFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dwLWNvbnRlbnQtZWRpdG9yLWNvbnRhaW5lciAud3AtZWRpdG9yLWFyZWEnKTtcblxuICAgIGlmIChudWxsICE9PSB3b3JkcHJlc3NFZGl0b3JFbGVtZW50KSB7XG4gICAgICAgIHdvcmRwcmVzc0VkaXRvckVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNvdXQnLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBpZiAoYWRkQm9va01hcmtCdXR0b24gPT0gZS5yZWxhdGVkVGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgbGFzdEN1cnNvclBvc2l0aW9uID0gd29yZHByZXNzRWRpdG9yRWxlbWVudC5zZWxlY3Rpb25TdGFydDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufSk7XG5mdW5jdGlvbiBnZXRTaG9ydGNvZGVUZXh0KCkge1xuXG4gICAgbGV0IHNlY3MgPSBNYXRoLnJvdW5kKGN1cnJlbnRUaW1lSW5TZWNvbmRzKTtcbiAgICBsZXQgaG91cnMgPSBNYXRoLmZsb29yKHNlY3MgLyAoNjAgKiA2MCkpO1xuXG4gICAgbGV0IGRpdmlzb3JGb3JNaW51dGVzID0gc2VjcyAlICg2MCAqIDYwKTtcbiAgICBsZXQgbWludXRlcyA9IE1hdGguZmxvb3IoZGl2aXNvckZvck1pbnV0ZXMgLyA2MCk7XG5cbiAgICBsZXQgZGl2aXNvckZvclNlY29uZHMgPSBkaXZpc29yRm9yTWludXRlcyAlIDYwO1xuICAgIGxldCBzZWNvbmRzID0gTWF0aC5jZWlsKGRpdmlzb3JGb3JTZWNvbmRzKTtcblxuICAgIHJldHVybiAnW3BrX3BvZGNhc3RfYm9va21hcmsgdGltZT1cIicraG91cnMrJzonK21pbnV0ZXMrJzonK3NlY29uZHMrJ1wiXSc7XG59XG5cbi8vIHVzZSB0aGlzIHdoZW4gZ3V0ZW5iZXJnIGlzIGFjdGl2ZVxuZnVuY3Rpb24gY29weVNob3J0Y29kZVRleHRUb0NsaXBib2FyZCgpIHtcbiAgICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7ICBcbiAgICBlbC52YWx1ZSA9IGdldFNob3J0Y29kZVRleHQoKTtcbiAgICBlbC5zZXRBdHRyaWJ1dGUoJ3JlYWRvbmx5JywgJycpO1xuICAgIGVsLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJzsgICAgICAgICAgICAgICAgIFxuICAgIGVsLnN0eWxlLmxlZnQgPSAnLTk5OTlweCc7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbCk7XG4gICAgY29uc3Qgc2VsZWN0ZWQgPSBkb2N1bWVudC5nZXRTZWxlY3Rpb24oKS5yYW5nZUNvdW50ID4gMCA/IGRvY3VtZW50LmdldFNlbGVjdGlvbigpLmdldFJhbmdlQXQoMCkgOiBmYWxzZTtcbiAgICBlbC5zZWxlY3QoKTtcbiAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnY29weScpO1xuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZWwpO1xuICAgIGlmIChzZWxlY3RlZCkge1xuICAgICAgICBkb2N1bWVudC5nZXRTZWxlY3Rpb24oKS5yZW1vdmVBbGxSYW5nZXMoKTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0U2VsZWN0aW9uKCkuYWRkUmFuZ2Uoc2VsZWN0ZWQpO1xuICAgIH1cbn07XG5cbmZ1bmN0aW9uIGlzR3V0ZW5iZXJnQWN0aXZlKCkge1xuICAgIHJldHVybiB0eXBlb2Ygd3AgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB3cC5ibG9ja3MgIT09ICd1bmRlZmluZWQnO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTaG9ydENvZGVUb0VkaXRvcigpIHtcblxuICAgIGlmIChpc0d1dGVuYmVyZ0FjdGl2ZSgpKSB7XG4gICAgICAgIGNvcHlTaG9ydGNvZGVUZXh0VG9DbGlwYm9hcmQoKTtcbiAgICB9IGVsc2UgaWYgKG51bGwgIT09IHdvcmRwcmVzc0VkaXRvckVsZW1lbnQgJiYgJ25vbmUnICE9PSB3b3JkcHJlc3NFZGl0b3JFbGVtZW50LnN0eWxlLmRpc3BsYXkpIHtcblxuICAgICAgICBsZXQgdGV4dEluRWRpdG9yID0gd29yZHByZXNzRWRpdG9yRWxlbWVudC52YWx1ZTtcbiAgICAgICAgbGV0IGJlZm9yZSA9IHRleHRJbkVkaXRvci5zdWJzdHJpbmcoMCwgbGFzdEN1cnNvclBvc2l0aW9uKTtcbiAgICAgICAgbGV0IGFmdGVyICA9IHRleHRJbkVkaXRvci5zdWJzdHJpbmcobGFzdEN1cnNvclBvc2l0aW9uLCB0ZXh0SW5FZGl0b3IubGVuZ3RoKTtcblxuICAgICAgICB3b3JkcHJlc3NFZGl0b3JFbGVtZW50LnZhbHVlID0gKGJlZm9yZSArIGdldFNob3J0Y29kZVRleHQoKSArIGFmdGVyKTtcbiAgICAgICAgd29yZHByZXNzRWRpdG9yRWxlbWVudC5zZWxlY3Rpb25TdGFydCA9IHdvcmRwcmVzc0VkaXRvckVsZW1lbnQuc2VsZWN0aW9uRW5kID0gbGFzdEN1cnNvclBvc2l0aW9uICsgc2hvcnRDb2RlVGV4dC5sZW5ndGg7XG4gICAgICAgIHdvcmRwcmVzc0VkaXRvckVsZW1lbnQuZm9jdXMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aW55bWNlLmFjdGl2ZUVkaXRvci5leGVjQ29tbWFuZCgnbWNlSW5zZXJ0Q29udGVudCcsIGZhbHNlLCBnZXRTaG9ydGNvZGVUZXh0KCkpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gc2V0UG9kY2FzdExvY2tUaW1lKCkge1xuICAgIGlmIChudWxsID09PSBsb2NrVGltZUluU2Vjb25kcykge1xuICAgICAgICBsb2NrVGltZUluU2Vjb25kcyA9IE1hdGgucm91bmQoY3VycmVudFRpbWVJblNlY29uZHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGxvY2tUaW1lSW5TZWNvbmRzID0gbnVsbDtcbiAgICB9XG59XG5cbjwvc2NyaXB0PlxuXG48c3R5bGU+XG4ucGstYWRtaW4tZWRpdG9yIHtcbiAgcGFkZGluZzogMTBweCAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ucGstcG9kY2FzdC1maWxlIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuOyBcbiAgICBkaXJlY3Rpb246IHJ0bDsgXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDsgXG4gICAgbGluZS1oZWlnaHQ6IDJlbTsgXG4gICAgaGVpZ2h0OiAyZW07IFxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBmbGV4LWdyb3c6IDI7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5way1idXR0b24ge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDA7XG59XG4ucGstYnV0dG9uOmhvdmVyIHN2ZyB7XG4gICAgZmlsbC1vcGFjaXR5OiAwLjg7XG59XG4ucGstYnV0dG9uOmFjdGl2ZSBzdmcge1xuICAgIGZpbGwtb3BhY2l0eTogMC41O1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XG59XG4vKiogVE9ETzog0LTQu9GPINGE0L7QutGD0YHQsCDQv9C+0YHQu9C1INC90LDQttCw0YLQuNGPINC90LAg0LrQu9Cw0LLQtSDQvdCw0LTQviDRgNCw0LzQutGDINC/0L7QutCw0LfRi9Cy0LDRgtGMIFxu0YLQv9C40YfQvdGD0Y4g0LLQvtC60YDRg9CzINGN0LvQtdC80LXQvdGC0L7QsiDQsCDQv9C+0YHQu9C1INC60LvQuNC60LAg0LzRi9GI0LrQvtC5INC40LvQuCDRgtCw0YfQsCDQv9GA0Y/RgtCw0YLRjCAqL1xuLnBrLWJ1dHRvbjpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbn1cblxuPC9zdHlsZT5cblxuPGRpdiBjbGFzcz1cInBrLWFkbWluLWVkaXRvclwiPlxuICAgIHsjaWYgbnVsbCA9PT0gcG9kY2FzdFVSTH1cbiAgICAgICAgPGltZyBzcmM9XCJ7aWNvbkFkZFBvZGNhc3R9XCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBzdHlsZT1cIm1hcmdpbjogMCBhdXRvIDIwcHggYXV0bztcIiBhbHQ9XCJ7dGV4dFRyYW5zbGF0aW9ucy5hZGRQb2RjYXN0fVwiPlxuICAgIHsvaWZ9XG4gICAgPGRpdiBzdHlsZT1cImRpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogY2VudGVyOyBhbGlnbi1pdGVtczogY2VudGVyO1wiPlxuICAgICAgICB7I2lmIG51bGwgIT09IHBvZGNhc3RVUkx9XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInBrLXBvZGNhc3QtZmlsZVwiPntwb2RjYXN0VVJMfTwvc3Bhbj5cbiAgICAgICAgey9pZn1cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvblwiIFxuICAgICAgICAgICAgb246Y2xpY2t8cHJldmVudERlZmF1bHR8c3RvcFByb3BhZ2F0aW9uPXtoYW5kbGVQb2RjYXN0U2V0dXB9PlxuICAgICAgICAgICAge251bGwgPT09IHBvZGNhc3RVUkwgPyB0ZXh0VHJhbnNsYXRpb25zLmFkZFBvZGNhc3QgOiB0ZXh0VHJhbnNsYXRpb25zLnJlbW92ZVBvZGNhc3R9XG4gICAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICAgIDxQbGF5ZXIgYXVkaW9VUkw9e3BvZGNhc3RVUkx9IGxvY2tUaW1lSW5TZWNvbmRzPXtsb2NrVGltZUluU2Vjb25kc30gbG9ja0F1ZGlvVVJMPXtwb2RjYXN0TG9ja0F1ZGlvVVJMfVxuICAgICAgICB0ZXh0VHJhbnNsYXRpb25zPXt0ZXh0VHJhbnNsYXRpb25zfSBiaW5kOmN1cnJlbnRUaW1lSW5TZWNvbmRzPXtjdXJyZW50VGltZUluU2Vjb25kc31cbiAgICAgICAgc3R5bGU9XCJtYXJnaW4tdG9wOiAxNXB4O3tudWxsID09IHBvZGNhc3RVUkwgPyAnZGlzcGxheTogbm9uZTsnIDogJyd9XCI+XG5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInBrLWJ1dHRvblwiIGJpbmQ6dGhpcz17YWRkQm9va01hcmtCdXR0b259IHRpdGxlPXt0ZXh0VHJhbnNsYXRpb25zLmFkZEJvb2ttYXJrfVxuICAgICAgICAgICAgb246Y2xpY2t8cHJldmVudERlZmF1bHR8c3RvcFByb3BhZ2F0aW9uPXtpbnNlcnRTaG9ydENvZGVUb0VkaXRvcn0gXG4gICAgICAgICAgICBzdHlsZT1cIm1hcmdpbi1sZWZ0OiAxNXB4O1wiPlxuICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjMyXCIgaGVpZ2h0PVwiMzJcIiB2aWV3Qm94PVwiMCAwIDMyIDMyXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGQ9XCJNMCAzMnYtMy45OTJsMzEuOTk0LS4wMDJMMzEuOTkyIDMySDB6bTMxLjk5Ni02Ljk5NkwwIDI1di00bDMxLjk5Ni4wMDR2NHpNMCAxOVYwaDE1djE5bC03LjUtNC4wNzJMMCAxOXptMTgtMXYtNGgxNHY0SDE4ek02IDEyaDNWOS4wMDJMMTIgOVY2SDlWMy4wMDJINmwtLjAwMiAzTDMgNnYzbDIuOTk4LjAwMkw2IDEyem0xMS45OTQtLjk5NHYtNGgxNHY0aC0xNHptLjAwMi03LjAwMnYtNGwxMy45OTYuMDA0LjAwNCAzLjk5NmgtMTR6XCIgZmlsbD1cIiNmZmZcIi8+PC9zdmc+XG4gICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJway1idXR0b25cIiBzdHlsZT1cIm1hcmdpbi1sZWZ0OiAxNXB4O1wiIHRpdGxlPXtudWxsID09PSBsb2NrVGltZUluU2Vjb25kcyA/IHRleHRUcmFuc2xhdGlvbnMubG9ja1BvZGNhc3QgOiB0ZXh0VHJhbnNsYXRpb25zLnVubG9ja1BvZGNhc3R9XG4gICAgICAgICAgICBvbjpjbGlja3xwcmV2ZW50RGVmYXVsdHxzdG9wUHJvcGFnYXRpb249e3NldFBvZGNhc3RMb2NrVGltZX0+XG4gICAgICAgICAgICB7I2lmIG51bGwgPT09IGxvY2tUaW1lSW5TZWNvbmRzfVxuICAgICAgICAgICAgICAgIDxzdmcgd2lkdGg9XCIzMlwiIGhlaWdodD1cIjMyXCIgdmlld0JveD1cIjAgMCAzMiAzMlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwiTTkuMzgyIDMyYy0zLjk0My0uMDEtNy4xMzctMy4yMDQtNy4xNDctNy4xNDd2LTcuNjA1QzIuMjQgMTUuNDU2IDMuNjkxIDE0LjAwNCA1LjQ4MyAxNGgyMS4wMzRjMS43OTIuMDA0IDMuMjQzIDEuNDU2IDMuMjQ4IDMuMjQ4djcuNjA1Yy0uMDEgMy45NDMtMy4yMDQgNy4xMzctNy4xNDcgNy4xNDdIOS4zODJ6TTE2IDI2LjQ0MWMuNTg1IDAgMS4wNTktLjQ3NCAxLjA1OS0xLjA1OXYtMi4wNzVjMS4xNDktLjUwMSAxLjc4OC0xLjc0IDEuNTMyLTIuOTY3UzE3LjI1MyAxOC4yMzQgMTYgMTguMjM0Yy0xLjI1MyAwLTIuMzM1Ljg3OS0yLjU5MSAyLjEwNi0uMjU2IDEuMjI3LjM4MyAyLjQ2NiAxLjUzMiAyLjk2N3YyLjA3NWMwIC41ODUuNDc0IDEuMDU5IDEuMDU5IDEuMDU5ek00LjkyMyAxNHYtMy40OEM0LjkyMyA0LjczNSA5LjkzOC4wNTggMTYgLjA1OGM1Ljc5IDAgMTAuNjI2IDQuMjY4IDExLjA0NyA5LjY5MmgtMy43OTJjLS42NDgtMy40MTYtMy42NS02LTcuMjU1LTYtNC4wNzggMC03LjM4NSAzLjMwNi03LjM4NSA3LjM4NVYxNEg0LjkyM3pcIiBmaWxsPVwiI2ZmZlwiLz48L3N2Zz5cbiAgICAgICAgICAgIHs6ZWxzZX1cbiAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMzJcIiBoZWlnaHQ9XCIzMlwiIHZpZXdCb3g9XCIwIDAgMzIgMzJcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZD1cIk05LjM4MiAzMmMtMy45NDMtLjAxLTcuMTM3LTMuMjA0LTcuMTQ3LTcuMTQ3di03LjYwNUMyLjI0IDE1LjQ1NiAzLjY5MSAxNC4wMDQgNS40ODMgMTRoMjEuMDM0YzEuNzkyLjAwNCAzLjI0MyAxLjQ1NiAzLjI0OCAzLjI0OHY3LjYwNWMtLjAxMSAzLjk0My0zLjIwNCA3LjEzNy03LjE0NyA3LjE0N0g5LjM4MnptNi4wODItMS4xODZoMS4yOHYtMS45MzZjLjQ5MS0uMDMyLjk2NS0uMTIgMS40MjQtLjI2NC40NTktLjE0NC44NjctLjM1NyAxLjIyNC0uNjQuMzU3LS4yODMuNjQ1LS42NDUuODY0LTEuMDg4LjIxOC0uNDQyLjMyOC0uOTc5LjMyOC0xLjYwOCAwLS41MzQtLjA4LS45ODctLjI0LTEuMzYtLjE2LS4zNzMtLjM4OS0uNjkxLS42ODgtLjk1Mi0uMjk4LS4yNjItLjY1OS0uNDg4LTEuMDgtLjY4LS40MjEtLjE5Mi0uODkzLS4zNjgtMS40MTYtLjUyOGE1LjMzMjMgNS4zMzIzIDAgMDEtLjMzNi0uMTA0IDIuNTE1IDIuNTE1IDAgMDAtLjMwNC0uMDg4di0xLjQ0Yy4yOTkuMDUzLjU5NS4xMzEuODg4LjIzMi4yOTMuMTAxLjU1Ny4yMTEuNzkyLjMyOC4yNzcuMTI4LjUzNC4yNjcuNzY4LjQxNmwxLjM0NC0yLjU3NmMtLjIyNC0uMTA3LS40NjktLjIyMS0uNzM2LS4zNDQtLjI2Ny0uMTIzLS41NTItLjI0LS44NTYtLjM1Mi0uMzA0LS4xMTItLjYyMS0uMjEtLjk1Mi0uMjk2LS4zMzEtLjA4NS0uNjcyLS4xNS0xLjAyNC0uMTkyVjE1LjcxaC0xLjI4djEuNjE2Yy0uNTAyLjA1NC0uOTc0LjE3Ni0xLjQxNi4zNjgtLjQ0My4xOTItLjgyOS40NDgtMS4xNi43NjgtLjMzMS4zMi0uNTkyLjcwMS0uNzg0IDEuMTQ0LS4xOTIuNDQzLS4yODguOTUyLS4yODggMS41MjggMCAuNDE2LjA1Ni43ODQuMTY4IDEuMTA0LjExMi4zMi4yODUuNjA2LjUyLjg1Ni4yMzUuMjUxLjUzMy40NzUuODk2LjY3Mi4zNjMuMTk3Ljc5NS4zODEgMS4yOTYuNTUyLjMzMS4xMTcuNjYxLjIxOS45OTIuMzA0djEuNDA4Yy0uMzg0LS4wNTQtLjc2LS4xNDctMS4xMjgtLjI4LS4zNjgtLjEzMy0uNjktLjI3LS45NjgtLjQwOC0uMzMtLjE2LS42NC0uMzMxLS45MjgtLjUxMmwtMS4zNDQgMi43MzZjLjU3Ni4zNDEgMS4yMjcuNjI0IDEuOTUyLjg0OC43MjUuMjI0IDEuNDU2LjM2OCAyLjE5Mi40MzJ2MS45Njh6bTEuMDU2LTQuNzM2di0xLjE4NGMuMjEzLjA4NS4zODQuMTg0LjUxMi4yOTYuMTI4LjExMi4xOTIuMjQzLjE5Mi4zOTIgMCAuMTM5LS4wNTMuMjUxLS4xNi4zMzYtLjEwNy4wODUtLjI4OC4xMzktLjU0NC4xNnptLS44MzItNC43ODRjLS4yMTMtLjA4NS0uMzczLS4xNzktLjQ4LS4yOC0uMTA3LS4xMDEtLjE2LS4yMzItLjE2LS4zOTIgMC0uMzA5LjIxMy0uNDkxLjY0LS41NDR2MS4yMTZ6TTQuOTIzIDE0di0zLjQ4MUM0LjkyMyA0LjczNSA5LjkzOC4wNTggMTYgLjA1OHMxMS4wNzcgNC42NzcgMTEuMDc3IDEwLjQ2MVYxNGgtMy42OTJ2LTIuODY1YzAtNC4wNzktMy4zMDctNy4zODUtNy4zODUtNy4zODUtNC4wNzggMC03LjM4NSAzLjMwNi03LjM4NSA3LjM4NVYxNEg0LjkyM3pcIiBmaWxsPVwiI2ZmZlwiLz48L3N2Zz5cbiAgICAgICAgICAgIHsvaWZ9XG4gICAgICAgIDwvYnV0dG9uPlxuXG4gICAgPC9QbGF5ZXI+XG4gICAge0BodG1sIHBrTm9uY2V9XG4gICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwicGtfcG9kY2FzdF9pZFwiIHZhbHVlPVwie3BvZGNhc3RJZH1cIj5cbiAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJwa19wb2RjYXN0X2xvY2tfdGltZVwiIHZhbHVlPVwie2xvY2tUaW1lSW5TZWNvbmRzfVwiPlxuPC9kaXY+Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThIQSxnQkFBZ0IsNEJBQUMsQ0FBQyxBQUNoQixPQUFPLENBQUUsSUFBSSxDQUFDLENBQUMsQ0FDZixVQUFVLENBQUUsTUFBTSxBQUNwQixDQUFDLEFBQ0QsZ0JBQWdCLDRCQUFDLENBQUMsQUFDZCxRQUFRLENBQUUsTUFBTSxDQUNoQixTQUFTLENBQUUsR0FBRyxDQUNkLFdBQVcsQ0FBRSxNQUFNLENBQ25CLFdBQVcsQ0FBRSxHQUFHLENBQ2hCLE1BQU0sQ0FBRSxHQUFHLENBQ1gsWUFBWSxDQUFFLElBQUksQ0FDbEIsYUFBYSxDQUFFLFFBQVEsQ0FDdkIsU0FBUyxDQUFFLENBQUMsQ0FDWixVQUFVLENBQUUsSUFBSSxBQUNwQixDQUFDLEFBQ0QsVUFBVSw0QkFBQyxDQUFDLEFBQ1YsT0FBTyxDQUFFLENBQUMsQ0FDVixNQUFNLENBQUUsQ0FBQyxDQUNULGdCQUFnQixDQUFFLFdBQVcsQ0FDN0IsTUFBTSxDQUFFLElBQUksQ0FDWixNQUFNLENBQUUsT0FBTyxDQUNmLFdBQVcsQ0FBRSxDQUFDLEFBQ2hCLENBQUMsQUFDRCx3QkFBVSxNQUFNLENBQUMsR0FBRyxjQUFDLENBQUMsQUFDbEIsWUFBWSxDQUFFLEdBQUcsQUFDckIsQ0FBQyxBQUNELHdCQUFVLE9BQU8sQ0FBQyxHQUFHLGNBQUMsQ0FBQyxBQUNuQixZQUFZLENBQUUsR0FBRyxDQUNqQixTQUFTLENBQUUsTUFBTSxJQUFJLENBQUMsQUFDMUIsQ0FBQyxBQUdELHNDQUFVLE1BQU0sQUFBQyxDQUFDLEFBQ2QsT0FBTyxDQUFFLElBQUksQUFDakIsQ0FBQyJ9 */";
    append_dev(document_1$2.head, style);
  } // (166:4) {#if null === podcastURL}


  function create_if_block_2$2(ctx) {
    var img;
    var img_src_value;
    var img_alt_value;
    var block = {
      c: function create() {
        img = element("img");
        if (img.src !== (img_src_value =
        /*iconAddPodcast*/
        ctx[5])) attr_dev(img, "src", img_src_value);
        attr_dev(img, "width", "100");
        attr_dev(img, "height", "100");
        set_style(img, "margin", "0 auto 20px auto");
        attr_dev(img, "alt", img_alt_value =
        /*textTranslations*/
        ctx[6].addPodcast);
        add_location(img, file$3, 166, 8, 4655);
      },
      m: function mount(target, anchor) {
        insert_dev(target, img, anchor);
      },
      p: function update(ctx, dirty) {
        if (dirty &
        /*iconAddPodcast*/
        32 && img.src !== (img_src_value =
        /*iconAddPodcast*/
        ctx[5])) {
          attr_dev(img, "src", img_src_value);
        }

        if (dirty &
        /*textTranslations*/
        64 && img_alt_value !== (img_alt_value =
        /*textTranslations*/
        ctx[6].addPodcast)) {
          attr_dev(img, "alt", img_alt_value);
        }
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(img);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_if_block_2$2.name,
      type: "if",
      source: "(166:4) {#if null === podcastURL}",
      ctx: ctx
    });
    return block;
  } // (170:8) {#if null !== podcastURL}


  function create_if_block_1$2(ctx) {
    var span;
    var t;
    var block = {
      c: function create() {
        span = element("span");
        t = text(
        /*podcastURL*/
        ctx[0]);
        attr_dev(span, "class", "pk-podcast-file svelte-uh4s2a");
        add_location(span, file$3, 170, 12, 4914);
      },
      m: function mount(target, anchor) {
        insert_dev(target, span, anchor);
        append_dev(span, t);
      },
      p: function update(ctx, dirty) {
        if (dirty &
        /*podcastURL*/
        1) set_data_dev(t,
        /*podcastURL*/
        ctx[0]);
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(span);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_if_block_1$2.name,
      type: "if",
      source: "(170:8) {#if null !== podcastURL}",
      ctx: ctx
    });
    return block;
  } // (192:12) {:else}


  function create_else_block$2(ctx) {
    var svg;
    var path;
    var block = {
      c: function create() {
        svg = svg_element("svg");
        path = svg_element("path");
        attr_dev(path, "d", "M9.382 32c-3.943-.01-7.137-3.204-7.147-7.147v-7.605C2.24 15.456 3.691 14.004 5.483 14h21.034c1.792.004 3.243 1.456 3.248 3.248v7.605c-.011 3.943-3.204 7.137-7.147 7.147H9.382zm6.082-1.186h1.28v-1.936c.491-.032.965-.12 1.424-.264.459-.144.867-.357 1.224-.64.357-.283.645-.645.864-1.088.218-.442.328-.979.328-1.608 0-.534-.08-.987-.24-1.36-.16-.373-.389-.691-.688-.952-.298-.262-.659-.488-1.08-.68-.421-.192-.893-.368-1.416-.528a5.3323 5.3323 0 01-.336-.104 2.515 2.515 0 00-.304-.088v-1.44c.299.053.595.131.888.232.293.101.557.211.792.328.277.128.534.267.768.416l1.344-2.576c-.224-.107-.469-.221-.736-.344-.267-.123-.552-.24-.856-.352-.304-.112-.621-.21-.952-.296-.331-.085-.672-.15-1.024-.192V15.71h-1.28v1.616c-.502.054-.974.176-1.416.368-.443.192-.829.448-1.16.768-.331.32-.592.701-.784 1.144-.192.443-.288.952-.288 1.528 0 .416.056.784.168 1.104.112.32.285.606.52.856.235.251.533.475.896.672.363.197.795.381 1.296.552.331.117.661.219.992.304v1.408c-.384-.054-.76-.147-1.128-.28-.368-.133-.69-.27-.968-.408-.33-.16-.64-.331-.928-.512l-1.344 2.736c.576.341 1.227.624 1.952.848.725.224 1.456.368 2.192.432v1.968zm1.056-4.736v-1.184c.213.085.384.184.512.296.128.112.192.243.192.392 0 .139-.053.251-.16.336-.107.085-.288.139-.544.16zm-.832-4.784c-.213-.085-.373-.179-.48-.28-.107-.101-.16-.232-.16-.392 0-.309.213-.491.64-.544v1.216zM4.923 14v-3.481C4.923 4.735 9.938.058 16 .058s11.077 4.677 11.077 10.461V14h-3.692v-2.865c0-4.079-3.307-7.385-7.385-7.385-4.078 0-7.385 3.306-7.385 7.385V14H4.923z");
        attr_dev(path, "fill", "#fff");
        add_location(path, file$3, 192, 99, 7160);
        attr_dev(svg, "width", "32");
        attr_dev(svg, "height", "32");
        attr_dev(svg, "viewBox", "0 0 32 32");
        attr_dev(svg, "xmlns", "http://www.w3.org/2000/svg");
        attr_dev(svg, "class", "svelte-uh4s2a");
        add_location(svg, file$3, 192, 16, 7077);
      },
      m: function mount(target, anchor) {
        insert_dev(target, svg, anchor);
        append_dev(svg, path);
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(svg);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_else_block$2.name,
      type: "else",
      source: "(192:12) {:else}",
      ctx: ctx
    });
    return block;
  } // (190:12) {#if null === lockTimeInSeconds}


  function create_if_block$3(ctx) {
    var svg;
    var path;
    var block = {
      c: function create() {
        svg = svg_element("svg");
        path = svg_element("path");
        attr_dev(path, "d", "M9.382 32c-3.943-.01-7.137-3.204-7.147-7.147v-7.605C2.24 15.456 3.691 14.004 5.483 14h21.034c1.792.004 3.243 1.456 3.248 3.248v7.605c-.01 3.943-3.204 7.137-7.147 7.147H9.382zM16 26.441c.585 0 1.059-.474 1.059-1.059v-2.075c1.149-.501 1.788-1.74 1.532-2.967S17.253 18.234 16 18.234c-1.253 0-2.335.879-2.591 2.106-.256 1.227.383 2.466 1.532 2.967v2.075c0 .585.474 1.059 1.059 1.059zM4.923 14v-3.48C4.923 4.735 9.938.058 16 .058c5.79 0 10.626 4.268 11.047 9.692h-3.792c-.648-3.416-3.65-6-7.255-6-4.078 0-7.385 3.306-7.385 7.385V14H4.923z");
        attr_dev(path, "fill", "#fff");
        add_location(path, file$3, 190, 99, 6477);
        attr_dev(svg, "width", "32");
        attr_dev(svg, "height", "32");
        attr_dev(svg, "viewBox", "0 0 32 32");
        attr_dev(svg, "xmlns", "http://www.w3.org/2000/svg");
        attr_dev(svg, "class", "svelte-uh4s2a");
        add_location(svg, file$3, 190, 16, 6394);
      },
      m: function mount(target, anchor) {
        insert_dev(target, svg, anchor);
        append_dev(svg, path);
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(svg);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_if_block$3.name,
      type: "if",
      source: "(190:12) {#if null === lockTimeInSeconds}",
      ctx: ctx
    });
    return block;
  } // (178:4) <Player audioURL={podcastURL} lockTimeInSeconds={lockTimeInSeconds} lockAudioURL={podcastLockAudioURL}         textTranslations={textTranslations} bind:currentTimeInSeconds={currentTimeInSeconds}         style="margin-top: 15px;{null == podcastURL ? 'display: none;' : ''}">


  function create_default_slot(ctx) {
    var button0;
    var svg;
    var path;
    var button0_title_value;
    var t;
    var button1;
    var button1_title_value;
    var dispose;

    function select_block_type(ctx, dirty) {
      if (null ===
      /*lockTimeInSeconds*/
      ctx[2]) return create_if_block$3;
      return create_else_block$2;
    }

    var current_block_type = select_block_type(ctx);
    var if_block = current_block_type(ctx);
    var block = {
      c: function create() {
        button0 = element("button");
        svg = svg_element("svg");
        path = svg_element("path");
        t = space();
        button1 = element("button");
        if_block.c();
        attr_dev(path, "d", "M0 32v-3.992l31.994-.002L31.992 32H0zm31.996-6.996L0 25v-4l31.996.004v4zM0 19V0h15v19l-7.5-4.072L0 19zm18-1v-4h14v4H18zM6 12h3V9.002L12 9V6H9V3.002H6l-.002 3L3 6v3l2.998.002L6 12zm11.994-.994v-4h14v4h-14zm.002-7.002v-4l13.996.004.004 3.996h-14z");
        attr_dev(path, "fill", "#fff");
        add_location(path, file$3, 184, 95, 5805);
        attr_dev(svg, "width", "32");
        attr_dev(svg, "height", "32");
        attr_dev(svg, "viewBox", "0 0 32 32");
        attr_dev(svg, "xmlns", "http://www.w3.org/2000/svg");
        attr_dev(svg, "class", "svelte-uh4s2a");
        add_location(svg, file$3, 184, 12, 5722);
        attr_dev(button0, "class", "pk-button svelte-uh4s2a");
        attr_dev(button0, "title", button0_title_value =
        /*textTranslations*/
        ctx[6].addBookmark);
        set_style(button0, "margin-left", "15px");
        add_location(button0, file$3, 181, 8, 5498);
        attr_dev(button1, "class", "pk-button svelte-uh4s2a");
        set_style(button1, "margin-left", "15px");
        attr_dev(button1, "title", button1_title_value = null ===
        /*lockTimeInSeconds*/
        ctx[2] ?
        /*textTranslations*/
        ctx[6].lockPodcast :
        /*textTranslations*/
        ctx[6].unlockPodcast);
        add_location(button1, file$3, 187, 8, 6107);
      },
      m: function mount(target, anchor, remount) {
        insert_dev(target, button0, anchor);
        append_dev(button0, svg);
        append_dev(svg, path);
        /*button0_binding*/

        ctx[17](button0);
        insert_dev(target, t, anchor);
        insert_dev(target, button1, anchor);
        if_block.m(button1, null);
        if (remount) run_all(dispose);
        dispose = [listen_dev(button0, "click", stop_propagation(prevent_default(
        /*insertShortCodeToEditor*/
        ctx[10])), false, true, true), listen_dev(button1, "click", stop_propagation(prevent_default(
        /*setPodcastLockTime*/
        ctx[11])), false, true, true)];
      },
      p: function update(ctx, dirty) {
        if (dirty &
        /*textTranslations*/
        64 && button0_title_value !== (button0_title_value =
        /*textTranslations*/
        ctx[6].addBookmark)) {
          attr_dev(button0, "title", button0_title_value);
        }

        if (current_block_type !== (current_block_type = select_block_type(ctx))) {
          if_block.d(1);
          if_block = current_block_type(ctx);

          if (if_block) {
            if_block.c();
            if_block.m(button1, null);
          }
        }

        if (dirty &
        /*lockTimeInSeconds, textTranslations*/
        68 && button1_title_value !== (button1_title_value = null ===
        /*lockTimeInSeconds*/
        ctx[2] ?
        /*textTranslations*/
        ctx[6].lockPodcast :
        /*textTranslations*/
        ctx[6].unlockPodcast)) {
          attr_dev(button1, "title", button1_title_value);
        }
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(button0);
        /*button0_binding*/

        ctx[17](null);
        if (detaching) detach_dev(t);
        if (detaching) detach_dev(button1);
        if_block.d();
        run_all(dispose);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_default_slot.name,
      type: "slot",
      source: "(178:4) <Player audioURL={podcastURL} lockTimeInSeconds={lockTimeInSeconds} lockAudioURL={podcastLockAudioURL}         textTranslations={textTranslations} bind:currentTimeInSeconds={currentTimeInSeconds}         style=\\\"margin-top: 15px;{null == podcastURL ? 'display: none;' : ''}\\\">",
      ctx: ctx
    });
    return block;
  }

  function create_fragment$3(ctx) {
    var div1;
    var t0;
    var div0;
    var t1;
    var button;
    var t2_value = (null ===
    /*podcastURL*/
    ctx[0] ?
    /*textTranslations*/
    ctx[6].addPodcast :
    /*textTranslations*/
    ctx[6].removePodcast) + "";
    var t2;
    var t3;
    var updating_currentTimeInSeconds;
    var t4;
    var html_tag;
    var t5;
    var input0;
    var t6;
    var input1;
    var current;
    var dispose;
    var if_block0 = null ===
    /*podcastURL*/
    ctx[0] && create_if_block_2$2(ctx);
    var if_block1 = null !==
    /*podcastURL*/
    ctx[0] && create_if_block_1$2(ctx);

    function player_currentTimeInSeconds_binding(value) {
      /*player_currentTimeInSeconds_binding*/
      ctx[18].call(null, value);
    }

    var player_props = {
      audioURL:
      /*podcastURL*/
      ctx[0],
      lockTimeInSeconds:
      /*lockTimeInSeconds*/
      ctx[2],
      lockAudioURL:
      /*podcastLockAudioURL*/
      ctx[4],
      textTranslations:
      /*textTranslations*/
      ctx[6],
      style: "margin-top: 15px;" + (null ==
      /*podcastURL*/
      ctx[0] ? "display: none;" : ""),
      $$slots: {
        default: [create_default_slot]
      },
      $$scope: {
        ctx: ctx
      }
    };

    if (
    /*currentTimeInSeconds*/
    ctx[7] !== void 0) {
      player_props.currentTimeInSeconds =
      /*currentTimeInSeconds*/
      ctx[7];
    }

    var player = new Pk_player({
      props: player_props,
      $$inline: true
    });
    binding_callbacks.push(function () {
      return bind(player, "currentTimeInSeconds", player_currentTimeInSeconds_binding);
    });
    var block = {
      c: function create() {
        div1 = element("div");
        if (if_block0) if_block0.c();
        t0 = space();
        div0 = element("div");
        if (if_block1) if_block1.c();
        t1 = space();
        button = element("button");
        t2 = text(t2_value);
        t3 = space();
        create_component(player.$$.fragment);
        t4 = space();
        t5 = space();
        input0 = element("input");
        t6 = space();
        input1 = element("input");
        attr_dev(button, "class", "button");
        add_location(button, file$3, 172, 8, 4986);
        set_style(div0, "display", "flex");
        set_style(div0, "justify-content", "center");
        set_style(div0, "align-items", "center");
        add_location(div0, file$3, 168, 4, 4793);
        html_tag = new HtmlTag(
        /*pkNonce*/
        ctx[3], t5);
        attr_dev(input0, "type", "hidden");
        attr_dev(input0, "name", "pk_podcast_id");
        input0.value =
        /*podcastId*/
        ctx[1];
        add_location(input0, file$3, 198, 4, 8761);
        attr_dev(input1, "type", "hidden");
        attr_dev(input1, "name", "pk_podcast_lock_time");
        input1.value =
        /*lockTimeInSeconds*/
        ctx[2];
        add_location(input1, file$3, 199, 4, 8828);
        attr_dev(div1, "class", "pk-admin-editor svelte-uh4s2a");
        add_location(div1, file$3, 164, 0, 4587);
      },
      l: function claim(nodes) {
        throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
      },
      m: function mount(target, anchor, remount) {
        insert_dev(target, div1, anchor);
        if (if_block0) if_block0.m(div1, null);
        append_dev(div1, t0);
        append_dev(div1, div0);
        if (if_block1) if_block1.m(div0, null);
        append_dev(div0, t1);
        append_dev(div0, button);
        append_dev(button, t2);
        append_dev(div1, t3);
        mount_component(player, div1, null);
        append_dev(div1, t4);
        html_tag.m(div1);
        append_dev(div1, t5);
        append_dev(div1, input0);
        append_dev(div1, t6);
        append_dev(div1, input1);
        current = true;
        if (remount) dispose();
        dispose = listen_dev(button, "click", stop_propagation(prevent_default(
        /*handlePodcastSetup*/
        ctx[9])), false, true, true);
      },
      p: function update(ctx, _ref) {
        var _ref2 = _slicedToArray(_ref, 1),
            dirty = _ref2[0];

        if (null ===
        /*podcastURL*/
        ctx[0]) {
          if (if_block0) {
            if_block0.p(ctx, dirty);
          } else {
            if_block0 = create_if_block_2$2(ctx);
            if_block0.c();
            if_block0.m(div1, t0);
          }
        } else if (if_block0) {
          if_block0.d(1);
          if_block0 = null;
        }

        if (null !==
        /*podcastURL*/
        ctx[0]) {
          if (if_block1) {
            if_block1.p(ctx, dirty);
          } else {
            if_block1 = create_if_block_1$2(ctx);
            if_block1.c();
            if_block1.m(div0, t1);
          }
        } else if (if_block1) {
          if_block1.d(1);
          if_block1 = null;
        }

        if ((!current || dirty &
        /*podcastURL, textTranslations*/
        65) && t2_value !== (t2_value = (null ===
        /*podcastURL*/
        ctx[0] ?
        /*textTranslations*/
        ctx[6].addPodcast :
        /*textTranslations*/
        ctx[6].removePodcast) + "")) set_data_dev(t2, t2_value);
        var player_changes = {};
        if (dirty &
        /*podcastURL*/
        1) player_changes.audioURL =
        /*podcastURL*/
        ctx[0];
        if (dirty &
        /*lockTimeInSeconds*/
        4) player_changes.lockTimeInSeconds =
        /*lockTimeInSeconds*/
        ctx[2];
        if (dirty &
        /*podcastLockAudioURL*/
        16) player_changes.lockAudioURL =
        /*podcastLockAudioURL*/
        ctx[4];
        if (dirty &
        /*textTranslations*/
        64) player_changes.textTranslations =
        /*textTranslations*/
        ctx[6];
        if (dirty &
        /*podcastURL*/
        1) player_changes.style = "margin-top: 15px;" + (null ==
        /*podcastURL*/
        ctx[0] ? "display: none;" : "");

        if (dirty &
        /*$$scope, lockTimeInSeconds, textTranslations, addBookMarkButton*/
        524612) {
          player_changes.$$scope = {
            dirty: dirty,
            ctx: ctx
          };
        }

        if (!updating_currentTimeInSeconds && dirty &
        /*currentTimeInSeconds*/
        128) {
          updating_currentTimeInSeconds = true;
          player_changes.currentTimeInSeconds =
          /*currentTimeInSeconds*/
          ctx[7];
          add_flush_callback(function () {
            return updating_currentTimeInSeconds = false;
          });
        }

        player.$set(player_changes);
        if (!current || dirty &
        /*pkNonce*/
        8) html_tag.p(
        /*pkNonce*/
        ctx[3]);

        if (!current || dirty &
        /*podcastId*/
        2) {
          prop_dev(input0, "value",
          /*podcastId*/
          ctx[1]);
        }

        if (!current || dirty &
        /*lockTimeInSeconds*/
        4) {
          prop_dev(input1, "value",
          /*lockTimeInSeconds*/
          ctx[2]);
        }
      },
      i: function intro(local) {
        if (current) return;
        transition_in(player.$$.fragment, local);
        current = true;
      },
      o: function outro(local) {
        transition_out(player.$$.fragment, local);
        current = false;
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(div1);
        if (if_block0) if_block0.d();
        if (if_block1) if_block1.d();
        destroy_component(player);
        dispose();
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_fragment$3.name,
      type: "component",
      source: "",
      ctx: ctx
    });
    return block;
  }

  function isGutenbergActive() {
    return typeof wp !== "undefined" && typeof wp.blocks !== "undefined";
  }

  function instance$3($$self, $$props, $$invalidate) {
    var _$$props$pkNonce = $$props.pkNonce,
        pkNonce = _$$props$pkNonce === void 0 ? null : _$$props$pkNonce;
    var _$$props$podcastURL = $$props.podcastURL,
        podcastURL = _$$props$podcastURL === void 0 ? null : _$$props$podcastURL;
    var _$$props$podcastId = $$props.podcastId,
        podcastId = _$$props$podcastId === void 0 ? null : _$$props$podcastId;
    var currentTimeInSeconds = 0;
    var _$$props$lockTimeInSe = $$props.lockTimeInSeconds,
        lockTimeInSeconds = _$$props$lockTimeInSe === void 0 ? null : _$$props$lockTimeInSe;
    var _$$props$podcastLockA = $$props.podcastLockAudioURL,
        podcastLockAudioURL = _$$props$podcastLockA === void 0 ? null : _$$props$podcastLockA;
    var _$$props$iconAddPodca = $$props.iconAddPodcast,
        iconAddPodcast = _$$props$iconAddPodca === void 0 ? "" : _$$props$iconAddPodca;
    var _$$props$textTranslat = $$props.textTranslations,
        textTranslations = _$$props$textTranslat === void 0 ? {} : _$$props$textTranslat;
    var podcastUploader;

    function handlePodcastSetup(e) {
      if (null !== podcastURL) {
        $$invalidate(1, podcastId = null);
        $$invalidate(0, podcastURL = null);
      } else {
        if (podcastUploader) {
          // If the media frame already exists, reopen it.
          podcastUploader.open();
          return;
        }

        podcastUploader = wp.media({
          title: pkScriptData.textAddPodcast,
          frame: "select",
          library: {
            type: "audio"
          },
          button: {
            text: pkScriptData.textAddPodcast
          },
          multiple: false
        }).on("select", function () {
          // it also has "open" and "close" events 
          var attachment = podcastUploader.state().get("selection").first().toJSON();
          $$invalidate(0, podcastURL = attachment.url);
          $$invalidate(1, podcastId = attachment.id);
        }).open();
      }
    }

    var wordpressEditorElement;
    var lastCursorPosition = 0;
    var addBookMarkButton;
    onMount(function () {
      wordpressEditorElement = document.querySelector("#wp-content-editor-container .wp-editor-area");

      if (null !== wordpressEditorElement) {
        wordpressEditorElement.addEventListener("focusout", function (e) {
          if (addBookMarkButton == e.relatedTarget) {
            lastCursorPosition = wordpressEditorElement.selectionStart;
          }
        });
      }
    });

    function getShortcodeText() {
      var secs = Math.round(currentTimeInSeconds);
      var hours = Math.floor(secs / (60 * 60));
      var divisorForMinutes = secs % (60 * 60);
      var minutes = Math.floor(divisorForMinutes / 60);
      var divisorForSeconds = divisorForMinutes % 60;
      var seconds = Math.ceil(divisorForSeconds);
      return "[pk_podcast_bookmark time=\"" + hours + ":" + minutes + ":" + seconds + "\"]";
    } // use this when gutenberg is active


    function copyShortcodeTextToClipboard() {
      var el = document.createElement("textarea");
      el.value = getShortcodeText();
      el.setAttribute("readonly", "");
      el.style.position = "absolute";
      el.style.left = "-9999px";
      document.body.appendChild(el);
      var selected = document.getSelection().rangeCount > 0 ? document.getSelection().getRangeAt(0) : false;
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);

      if (selected) {
        document.getSelection().removeAllRanges();
        document.getSelection().addRange(selected);
      }
    }

    function insertShortCodeToEditor() {
      if (isGutenbergActive()) {
        copyShortcodeTextToClipboard();
      } else if (null !== wordpressEditorElement && "none" !== wordpressEditorElement.style.display) {
        var textInEditor = wordpressEditorElement.value;
        var before = textInEditor.substring(0, lastCursorPosition);
        var after = textInEditor.substring(lastCursorPosition, textInEditor.length);
        wordpressEditorElement.value = before + getShortcodeText() + after;
        wordpressEditorElement.selectionStart = wordpressEditorElement.selectionEnd = lastCursorPosition + shortCodeText.length;
        wordpressEditorElement.focus();
      } else {
        tinymce.activeEditor.execCommand("mceInsertContent", false, getShortcodeText());
      }
    }

    function setPodcastLockTime() {
      if (null === lockTimeInSeconds) {
        $$invalidate(2, lockTimeInSeconds = Math.round(currentTimeInSeconds));
      } else {
        $$invalidate(2, lockTimeInSeconds = null);
      }
    }

    var writable_props = ["pkNonce", "podcastURL", "podcastId", "lockTimeInSeconds", "podcastLockAudioURL", "iconAddPodcast", "textTranslations"];
    Object.keys($$props).forEach(function (key) {
      if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Pk_admin_editor> was created with unknown prop '".concat(key, "'"));
    });
    var _$$props$$$slots = $$props.$$slots,
        $$slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
        $$scope = $$props.$$scope;
    validate_slots("Pk_admin_editor", $$slots, []);

    function button0_binding($$value) {
      binding_callbacks[$$value ? "unshift" : "push"](function () {
        $$invalidate(8, addBookMarkButton = $$value);
      });
    }

    function player_currentTimeInSeconds_binding(value) {
      currentTimeInSeconds = value;
      $$invalidate(7, currentTimeInSeconds);
    }

    $$self.$set = function ($$props) {
      if ("pkNonce" in $$props) $$invalidate(3, pkNonce = $$props.pkNonce);
      if ("podcastURL" in $$props) $$invalidate(0, podcastURL = $$props.podcastURL);
      if ("podcastId" in $$props) $$invalidate(1, podcastId = $$props.podcastId);
      if ("lockTimeInSeconds" in $$props) $$invalidate(2, lockTimeInSeconds = $$props.lockTimeInSeconds);
      if ("podcastLockAudioURL" in $$props) $$invalidate(4, podcastLockAudioURL = $$props.podcastLockAudioURL);
      if ("iconAddPodcast" in $$props) $$invalidate(5, iconAddPodcast = $$props.iconAddPodcast);
      if ("textTranslations" in $$props) $$invalidate(6, textTranslations = $$props.textTranslations);
    };

    $$self.$capture_state = function () {
      return {
        onMount: onMount,
        Player: Pk_player,
        pkNonce: pkNonce,
        podcastURL: podcastURL,
        podcastId: podcastId,
        currentTimeInSeconds: currentTimeInSeconds,
        lockTimeInSeconds: lockTimeInSeconds,
        podcastLockAudioURL: podcastLockAudioURL,
        iconAddPodcast: iconAddPodcast,
        textTranslations: textTranslations,
        podcastUploader: podcastUploader,
        handlePodcastSetup: handlePodcastSetup,
        wordpressEditorElement: wordpressEditorElement,
        lastCursorPosition: lastCursorPosition,
        addBookMarkButton: addBookMarkButton,
        getShortcodeText: getShortcodeText,
        copyShortcodeTextToClipboard: copyShortcodeTextToClipboard,
        isGutenbergActive: isGutenbergActive,
        insertShortCodeToEditor: insertShortCodeToEditor,
        setPodcastLockTime: setPodcastLockTime
      };
    };

    $$self.$inject_state = function ($$props) {
      if ("pkNonce" in $$props) $$invalidate(3, pkNonce = $$props.pkNonce);
      if ("podcastURL" in $$props) $$invalidate(0, podcastURL = $$props.podcastURL);
      if ("podcastId" in $$props) $$invalidate(1, podcastId = $$props.podcastId);
      if ("currentTimeInSeconds" in $$props) $$invalidate(7, currentTimeInSeconds = $$props.currentTimeInSeconds);
      if ("lockTimeInSeconds" in $$props) $$invalidate(2, lockTimeInSeconds = $$props.lockTimeInSeconds);
      if ("podcastLockAudioURL" in $$props) $$invalidate(4, podcastLockAudioURL = $$props.podcastLockAudioURL);
      if ("iconAddPodcast" in $$props) $$invalidate(5, iconAddPodcast = $$props.iconAddPodcast);
      if ("textTranslations" in $$props) $$invalidate(6, textTranslations = $$props.textTranslations);
      if ("podcastUploader" in $$props) podcastUploader = $$props.podcastUploader;
      if ("wordpressEditorElement" in $$props) wordpressEditorElement = $$props.wordpressEditorElement;
      if ("lastCursorPosition" in $$props) lastCursorPosition = $$props.lastCursorPosition;
      if ("addBookMarkButton" in $$props) $$invalidate(8, addBookMarkButton = $$props.addBookMarkButton);
    };

    if ($$props && "$$inject" in $$props) {
      $$self.$inject_state($$props.$$inject);
    }

    return [podcastURL, podcastId, lockTimeInSeconds, pkNonce, podcastLockAudioURL, iconAddPodcast, textTranslations, currentTimeInSeconds, addBookMarkButton, handlePodcastSetup, insertShortCodeToEditor, setPodcastLockTime, podcastUploader, wordpressEditorElement, lastCursorPosition, getShortcodeText, copyShortcodeTextToClipboard, button0_binding, player_currentTimeInSeconds_binding];
  }

  var Pk_admin_editor = /*#__PURE__*/function (_SvelteComponentDev) {
    _inherits(Pk_admin_editor, _SvelteComponentDev);

    var _super = _createSuper(Pk_admin_editor);

    function Pk_admin_editor(options) {
      var _this;

      _classCallCheck(this, Pk_admin_editor);

      _this = _super.call(this, options);
      if (!document_1$2.getElementById("svelte-uh4s2a-style")) add_css$3();
      init(_assertThisInitialized(_this), options, instance$3, create_fragment$3, safe_not_equal, {
        pkNonce: 3,
        podcastURL: 0,
        podcastId: 1,
        lockTimeInSeconds: 2,
        podcastLockAudioURL: 4,
        iconAddPodcast: 5,
        textTranslations: 6
      });
      dispatch_dev("SvelteRegisterComponent", {
        component: _assertThisInitialized(_this),
        tagName: "Pk_admin_editor",
        options: options,
        id: create_fragment$3.name
      });
      return _this;
    }

    _createClass(Pk_admin_editor, [{
      key: "pkNonce",
      get: function get() {
        throw new Error("<Pk_admin_editor>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      },
      set: function set(value) {
        throw new Error("<Pk_admin_editor>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      }
    }, {
      key: "podcastURL",
      get: function get() {
        throw new Error("<Pk_admin_editor>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      },
      set: function set(value) {
        throw new Error("<Pk_admin_editor>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      }
    }, {
      key: "podcastId",
      get: function get() {
        throw new Error("<Pk_admin_editor>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      },
      set: function set(value) {
        throw new Error("<Pk_admin_editor>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      }
    }, {
      key: "lockTimeInSeconds",
      get: function get() {
        throw new Error("<Pk_admin_editor>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      },
      set: function set(value) {
        throw new Error("<Pk_admin_editor>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      }
    }, {
      key: "podcastLockAudioURL",
      get: function get() {
        throw new Error("<Pk_admin_editor>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      },
      set: function set(value) {
        throw new Error("<Pk_admin_editor>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      }
    }, {
      key: "iconAddPodcast",
      get: function get() {
        throw new Error("<Pk_admin_editor>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      },
      set: function set(value) {
        throw new Error("<Pk_admin_editor>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      }
    }, {
      key: "textTranslations",
      get: function get() {
        throw new Error("<Pk_admin_editor>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      },
      set: function set(value) {
        throw new Error("<Pk_admin_editor>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      }
    }]);

    return Pk_admin_editor;
  }(SvelteComponentDev);

  var pkApp;

  if ('pk-admin-editor-view' === pkScriptData.currentPkView) {
    pkApp = new Pk_admin_editor({
      target: document.getElementById('pk-admin-editor-view'),
      props: {
        pkNonce: pkScriptData.pkNonce,
        podcastId: pkScriptData.podcastId,
        podcastURL: pkScriptData.podcastURL,
        lockTimeInSeconds: pkScriptData.podcastLockTime,
        podcastLockAudioURL: pkScriptData.podcastLockAudioURL,
        iconAddPodcast: pkScriptData.iconAddPodcast,
        textTranslations: pkScriptData.textTranslations
      }
    });
  } else if ('pk-admin-options-view' === pkScriptData.currentPkView) {
    pkApp = new Pk_admin_options({
      target: document.getElementById('pk-admin-options-view'),
      props: {
        adminActionURL: pkScriptData.adminActionURL,
        pkNonce: pkScriptData.pkNonce,
        pkImagesURL: pkScriptData.pkImagesURL,
        podcastLockAudioId: pkScriptData.podcastLockAudioId,
        podcastLockAudioURL: pkScriptData.podcastLockAudioURL,
        podcastLockMessage: pkScriptData.podcastLockMessage,
        pricingPlansOptions: pkScriptData.pricingPlansOptions,
        textTranslations: pkScriptData.textTranslations
      }
    });
  }

}());
