(function () {
  'use strict';

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

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
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

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function noop() { }
  function assign(tar, src) {
      // @ts-ignore
      for (const k in src)
          tar[k] = src[k];
      return tar;
  }
  function add_location(element, file, line, column, char) {
      element.__svelte_meta = {
          loc: { file, line, column, char }
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
      return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
  }
  function create_slot(definition, ctx, $$scope, fn) {
      if (definition) {
          const slot_ctx = get_slot_context(definition, ctx, $$scope, fn);
          return definition[0](slot_ctx);
      }
  }
  function get_slot_context(definition, ctx, $$scope, fn) {
      return definition[1] && fn
          ? assign($$scope.ctx.slice(), definition[1](fn(ctx)))
          : $$scope.ctx;
  }
  function get_slot_changes(definition, $$scope, dirty, fn) {
      if (definition[2] && fn) {
          const lets = definition[2](fn(dirty));
          if ($$scope.dirty === undefined) {
              return lets;
          }
          if (typeof lets === 'object') {
              const merged = [];
              const len = Math.max($$scope.dirty.length, lets.length);
              for (let i = 0; i < len; i += 1) {
                  merged[i] = $$scope.dirty[i] | lets[i];
              }
              return merged;
          }
          return $$scope.dirty | lets;
      }
      return $$scope.dirty;
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
  function empty() {
      return text('');
  }
  function listen(node, event, handler, options) {
      node.addEventListener(event, handler, options);
      return () => node.removeEventListener(event, handler, options);
  }
  function prevent_default(fn) {
      return function (event) {
          event.preventDefault();
          // @ts-ignore
          return fn.call(this, event);
      };
  }
  function stop_propagation(fn) {
      return function (event) {
          event.stopPropagation();
          // @ts-ignore
          return fn.call(this, event);
      };
  }
  function attr(node, attribute, value) {
      if (value == null)
          node.removeAttribute(attribute);
      else if (node.getAttribute(attribute) !== value)
          node.setAttribute(attribute, value);
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
      const e = document.createEvent('CustomEvent');
      e.initCustomEvent(type, false, false, detail);
      return e;
  }

  let current_component;
  function set_current_component(component) {
      current_component = component;
  }
  function get_current_component() {
      if (!current_component)
          throw new Error(`Function called outside component initialization`);
      return current_component;
  }
  function onMount(fn) {
      get_current_component().$$.on_mount.push(fn);
  }
  function createEventDispatcher() {
      const component = get_current_component();
      return (type, detail) => {
          const callbacks = component.$$.callbacks[type];
          if (callbacks) {
              // TODO are there situations where events could be dispatched
              // in a server (non-DOM) environment?
              const event = custom_event(type, detail);
              callbacks.slice().forEach(fn => {
                  fn.call(component, event);
              });
          }
      };
  }

  const dirty_components = [];
  const binding_callbacks = [];
  const render_callbacks = [];
  const flush_callbacks = [];
  const resolved_promise = Promise.resolve();
  let update_scheduled = false;
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
  let flushing = false;
  const seen_callbacks = new Set();
  function flush() {
      if (flushing)
          return;
      flushing = true;
      do {
          // first, call beforeUpdate functions
          // and update components
          for (let i = 0; i < dirty_components.length; i += 1) {
              const component = dirty_components[i];
              set_current_component(component);
              update(component.$$);
          }
          dirty_components.length = 0;
          while (binding_callbacks.length)
              binding_callbacks.pop()();
          // then, once components are updated, call
          // afterUpdate functions. This may cause
          // subsequent updates...
          for (let i = 0; i < render_callbacks.length; i += 1) {
              const callback = render_callbacks[i];
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
          const dirty = $$.dirty;
          $$.dirty = [-1];
          $$.fragment && $$.fragment.p($$.ctx, dirty);
          $$.after_update.forEach(add_render_callback);
      }
  }
  const outroing = new Set();
  let outros;
  function transition_in(block, local) {
      if (block && block.i) {
          outroing.delete(block);
          block.i(local);
      }
  }
  function transition_out(block, local, detach, callback) {
      if (block && block.o) {
          if (outroing.has(block))
              return;
          outroing.add(block);
          outros.c.push(() => {
              outroing.delete(block);
              if (callback) {
                  if (detach)
                      block.d(1);
                  callback();
              }
          });
          block.o(local);
      }
  }

  const globals = (typeof window !== 'undefined' ? window : global);

  function bind(component, name, callback) {
      const index = component.$$.props[name];
      if (index !== undefined) {
          component.$$.bound[index] = callback;
          callback(component.$$.ctx[index]);
      }
  }
  function create_component(block) {
      block && block.c();
  }
  function mount_component(component, target, anchor) {
      const { fragment, on_mount, on_destroy, after_update } = component.$$;
      fragment && fragment.m(target, anchor);
      // onMount happens before the initial afterUpdate
      add_render_callback(() => {
          const new_on_destroy = on_mount.map(run).filter(is_function);
          if (on_destroy) {
              on_destroy.push(...new_on_destroy);
          }
          else {
              // Edge case - component was destroyed immediately,
              // most likely as a result of a binding initialising
              run_all(new_on_destroy);
          }
          component.$$.on_mount = [];
      });
      after_update.forEach(add_render_callback);
  }
  function destroy_component(component, detaching) {
      const $$ = component.$$;
      if ($$.fragment !== null) {
          run_all($$.on_destroy);
          $$.fragment && $$.fragment.d(detaching);
          // TODO null out other refs, including component.$$ (but need to
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
      component.$$.dirty[(i / 31) | 0] |= (1 << (i % 31));
  }
  function init(component, options, instance, create_fragment, not_equal, props, dirty = [-1]) {
      const parent_component = current_component;
      set_current_component(component);
      const prop_values = options.props || {};
      const $$ = component.$$ = {
          fragment: null,
          ctx: null,
          // state
          props,
          update: noop,
          not_equal,
          bound: blank_object(),
          // lifecycle
          on_mount: [],
          on_destroy: [],
          before_update: [],
          after_update: [],
          context: new Map(parent_component ? parent_component.$$.context : []),
          // everything else
          callbacks: blank_object(),
          dirty
      };
      let ready = false;
      $$.ctx = instance
          ? instance(component, prop_values, (i, ret, ...rest) => {
              const value = rest.length ? rest[0] : ret;
              if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
                  if ($$.bound[i])
                      $$.bound[i](value);
                  if (ready)
                      make_dirty(component, i);
              }
              return ret;
          })
          : [];
      $$.update();
      ready = true;
      run_all($$.before_update);
      // `false` as a special case of no DOM component
      $$.fragment = create_fragment ? create_fragment($$.ctx) : false;
      if (options.target) {
          if (options.hydrate) {
              const nodes = children(options.target);
              // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
              $$.fragment && $$.fragment.l(nodes);
              nodes.forEach(detach);
          }
          else {
              // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
              $$.fragment && $$.fragment.c();
          }
          if (options.intro)
              transition_in(component.$$.fragment);
          mount_component(component, options.target, options.anchor);
          flush();
      }
      set_current_component(parent_component);
  }
  class SvelteComponent {
      $destroy() {
          destroy_component(this, 1);
          this.$destroy = noop;
      }
      $on(type, callback) {
          const callbacks = (this.$$.callbacks[type] || (this.$$.callbacks[type] = []));
          callbacks.push(callback);
          return () => {
              const index = callbacks.indexOf(callback);
              if (index !== -1)
                  callbacks.splice(index, 1);
          };
      }
      $set() {
          // overridden by instance, if it has props
      }
  }

  function dispatch_dev(type, detail) {
      document.dispatchEvent(custom_event(type, Object.assign({ version: '3.20.1' }, detail)));
  }
  function append_dev(target, node) {
      dispatch_dev("SvelteDOMInsert", { target, node });
      append(target, node);
  }
  function insert_dev(target, node, anchor) {
      dispatch_dev("SvelteDOMInsert", { target, node, anchor });
      insert(target, node, anchor);
  }
  function detach_dev(node) {
      dispatch_dev("SvelteDOMRemove", { node });
      detach(node);
  }
  function listen_dev(node, event, handler, options, has_prevent_default, has_stop_propagation) {
      const modifiers = options === true ? ["capture"] : options ? Array.from(Object.keys(options)) : [];
      if (has_prevent_default)
          modifiers.push('preventDefault');
      if (has_stop_propagation)
          modifiers.push('stopPropagation');
      dispatch_dev("SvelteDOMAddEventListener", { node, event, handler, modifiers });
      const dispose = listen(node, event, handler, options);
      return () => {
          dispatch_dev("SvelteDOMRemoveEventListener", { node, event, handler, modifiers });
          dispose();
      };
  }
  function attr_dev(node, attribute, value) {
      attr(node, attribute, value);
      if (value == null)
          dispatch_dev("SvelteDOMRemoveAttribute", { node, attribute });
      else
          dispatch_dev("SvelteDOMSetAttribute", { node, attribute, value });
  }
  function set_data_dev(text, data) {
      data = '' + data;
      if (text.data === data)
          return;
      dispatch_dev("SvelteDOMSetData", { node: text, data });
      text.data = data;
  }
  function validate_slots(name, slot, keys) {
      for (const slot_key of Object.keys(slot)) {
          if (!~keys.indexOf(slot_key)) {
              console.warn(`<${name}> received an unexpected slot "${slot_key}".`);
          }
      }
  }
  class SvelteComponentDev extends SvelteComponent {
      constructor(options) {
          if (!options || (!options.target && !options.$$inline)) {
              throw new Error(`'target' is a required option`);
          }
          super();
      }
      $destroy() {
          super.$destroy();
          this.$destroy = () => {
              console.warn(`Component was already destroyed`); // eslint-disable-line no-console
          };
      }
      $capture_state() { }
      $inject_state() { }
  }

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
    style.textContent = ".pk-player.svelte-19ql4i0.svelte-19ql4i0{background-color:#27303C;width:100%;box-sizing:border-box;padding:10px 15px;display:flex;flex-direction:column;border-radius:6px;box-shadow:inset 0 0 3px rgba(0,0,0, 0.4), 0 0 1px rgba(255, 255, 255, 0.2)\n}.pk-button.svelte-19ql4i0.svelte-19ql4i0{padding:0;margin:0;background-color:transparent;border:none;cursor:pointer;line-height:0}.pk-button.svelte-19ql4i0:hover svg.svelte-19ql4i0{fill-opacity:0.8}.pk-button.svelte-19ql4i0:active svg.svelte-19ql4i0{fill-opacity:0.5;transform:scale(0.95)}.pk-button.svelte-19ql4i0.svelte-19ql4i0:focus{outline:none}.pk-player__volume.svelte-19ql4i0.svelte-19ql4i0{width:fit-content;display:flex;align-items:center;width:80px}.pk-player__time.svelte-19ql4i0.svelte-19ql4i0{font-family:Arial, Helvetica, sans-serif;font-size:14px;line-height:1em;font-weight:none;color:#fff;margin-bottom:10px}.pk-player__times.svelte-19ql4i0.svelte-19ql4i0{display:flex;justify-content:space-between}.pk-player__controls.svelte-19ql4i0.svelte-19ql4i0{display:flex;justify-content:space-between;align-items:center}.pk-player__controls.svelte-19ql4i0>button.svelte-19ql4i0,.pk-player__controls.svelte-19ql4i0>div.svelte-19ql4i0{margin-left:20px}.pk-player__controls.svelte-19ql4i0>button.svelte-19ql4i0:first-child{margin-left:0}.pk-speed-button.svelte-19ql4i0.svelte-19ql4i0{margin-left:auto !important;text-align:right}@keyframes svelte-19ql4i0-pk-slidein__bottom{from{bottom:-140px}to{bottom:0}}@keyframes svelte-19ql4i0-pk-slideout__bottom{from{bottom:0}to{bottom:-140px}}.pk-player__mini.svelte-19ql4i0.svelte-19ql4i0{position:fixed;z-index:99999;width:auto;left:50%;border-bottom-left-radius:0;border-bottom-right-radius:0;transform:translateX(-50%)}.pk-player__mini--slidein.svelte-19ql4i0.svelte-19ql4i0{bottom:0;animation-duration:1s;animation-name:svelte-19ql4i0-pk-slidein__bottom}.pk-player__mini--slideout.svelte-19ql4i0.svelte-19ql4i0{bottom:-140px;animation-duration:0.2s;animation-name:svelte-19ql4i0-pk-slideout__bottom}.pk-player__mini.svelte-19ql4i0 .pk-player__time.svelte-19ql4i0{display:none}.pk-player__mini.svelte-19ql4i0 .pk-speed-button.svelte-19ql4i0{flex-grow:0;text-align:center}@media all and (max-width: 480px){.pk-player__mini.svelte-19ql4i0.svelte-19ql4i0{width:100%}.pk-player__mini.svelte-19ql4i0 .pk-player__volume.svelte-19ql4i0,.pk-player.svelte-19ql4i0 .pk-player__volume.svelte-19ql4i0{display:none}.pk-speed-button.svelte-19ql4i0.svelte-19ql4i0{flex-grow:0;text-align:center}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGstcGxheWVyLnN2ZWx0ZSIsInNvdXJjZXMiOlsicGstcGxheWVyLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxuaW1wb3J0IHsgb25Nb3VudCB9IGZyb20gJ3N2ZWx0ZSc7XG5pbXBvcnQgU2xpZGVyIGZyb20gJy4vcGstc2xpZGVyLnN2ZWx0ZSc7XG5cbmV4cG9ydCBsZXQgYXVkaW9VUkwgPSBudWxsO1xuZXhwb3J0IGxldCBsb2NrQXVkaW9VUkwgPSBudWxsO1xuZXhwb3J0IGxldCBsb2NrVGltZUluU2Vjb25kcyA9IG51bGw7XG5leHBvcnQgbGV0IHRleHRUcmFuc2xhdGlvbnMgPSB7fTtcblxubGV0IHBsYXllclN0eWxlID0gJyc7XG5leHBvcnQge3BsYXllclN0eWxlIGFzIHN0eWxlfTtcbmV4cG9ydCBsZXQgcGxheWVyTWluaU9mZiA9IGZhbHNlO1xubGV0IGlzUGxheWVyTWluaSA9IGZhbHNlO1xubGV0IGlzUGxheWVyTWluaVNob3duID0gZmFsc2U7XG5sZXQgaXNQbGF5U3RhcnRlZCA9IGZhbHNlO1xuXG5leHBvcnQgbGV0IGN1cnJlbnRUaW1lSW5TZWNvbmRzID0gMDtcblxubGV0IGVuZFRpbWVJblNlY29uZHMgPSAwO1xubGV0IGF1ZGlvU3BlZWQgPSAxO1xubGV0IGF1ZGlvVm9sdW1lID0gMTtcbmxldCBpc1BsYXlpbmcgPSBmYWxzZTtcblxubGV0IGN1cnJlbnRUaW1lU3RyaW5nO1xubGV0IGVuZFRpbWVTdHJpbmc7XG4kOiB7XG4gICAgZW5kVGltZVN0cmluZyA9IHNlY29uZHNUb1RpbWUoZW5kVGltZUluU2Vjb25kcyk7XG4gICAgY3VycmVudFRpbWVTdHJpbmcgPSBzZWNvbmRzVG9UaW1lKGN1cnJlbnRUaW1lSW5TZWNvbmRzKTtcbn1cblxubGV0IHBsYXllcldyYXBwZXJFbGVtZW50ID0gbnVsbDtcbmxldCBwbGF5ZXJFbGVtZW50ID0gbnVsbDtcbmxldCBhdWRpb0VsZW1lbnQgPSBudWxsO1xubGV0IGxvY2tBdWRpb0VsZW1lbnQgPSBudWxsO1xuXG5vbk1vdW50KCgpID0+IHtcblxuICAgIGF1ZGlvRWxlbWVudCA9IHBsYXllcldyYXBwZXJFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5way1wbGF5ZXJfX2F1ZGlvJyk7XG4gICAgaWYgKCBudWxsICE9PSBsb2NrQXVkaW9VUkwgJiYgJycgIT09IGxvY2tBdWRpb1VSTCApIHtcbiAgICAgICAgbG9ja0F1ZGlvRWxlbWVudCA9IHBsYXllcldyYXBwZXJFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5way1wbGF5ZXJfX2xvY2stYXVkaW8nKTtcbiAgICB9XG4gICAgY2hlY2tJc1BsYXllckhhc1RvQmVNaW5pKCk7XG59KTtcblxubGV0IGlzTG9ja1BsYXlNb2RlT24gPSBmYWxzZTtcblxuZXhwb3J0IGZ1bmN0aW9uIHBsYXlJZlBhdXNlZCgpIHtcbiAgICBpZiAoICFpc1BsYXlpbmcgKSB7XG4gICAgICAgIHBsYXlPclBhdXNlQXVkaW8oIHRydWUgKTtcbiAgICB9XG59XG5mdW5jdGlvbiBwbGF5T3JQYXVzZUF1ZGlvKGlzUGxheVBhdXNlQnV0dG9uUHJlc3NlZCA9IHRydWUpIHsgXG5cbiAgICBpZiAoIGlzTG9ja1BsYXlNb2RlT24gKSB7XG5cbiAgICAgICAgaWYgKCBpc1BsYXlpbmcgICYmICFpc1BsYXlQYXVzZUJ1dHRvblByZXNzZWQgKSB7XG5cbiAgICAgICAgICAgIC8vIHN0YXJ0IHBsYXlpbmcgbG9jayBhdWRpbyBhbmQgY29udGludWUgaWYgY3VycmVudCB0aW1lIG9mIHJlYWwgYXVkaW8gc3RpbCBjaGFuZ2luZ1xuICAgICAgICAgICAgYXVkaW9FbGVtZW50LnBhdXNlKCk7XG4gICAgICAgICAgICBpc1BsYXlpbmcgPSBmYWxzZTtcblxuICAgICAgICAgICAgaWYgKCBudWxsICE9PSBsb2NrQXVkaW9FbGVtZW50ICkge1xuXG4gICAgICAgICAgICAgICAgaWYgKCBsb2NrQXVkaW9FbGVtZW50LnBhdXNlZCApIHtcbiAgICAgICAgICAgICAgICAgICAgbG9ja0F1ZGlvRWxlbWVudC5wbGF5KCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaXNQbGF5aW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9IGVsc2UgaWYgKCBudWxsID09PSBsb2NrQXVkaW9FbGVtZW50ICkge1xuXG4gICAgICAgICAgICBpc1BsYXlpbmcgPSBmYWxzZTtcblxuICAgICAgICB9IGVsc2UgaWYgKCBpc1BsYXlpbmcgKSB7XG5cbiAgICAgICAgICAgIGxvY2tBdWRpb0VsZW1lbnQucGF1c2UoKTtcbiAgICAgICAgICAgIGlzUGxheWluZyA9IGZhbHNlO1xuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIGxvY2tBdWRpb0VsZW1lbnQucGxheSgpO1xuICAgICAgICAgICAgaXNQbGF5aW5nID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgXG4gICAgfSBlbHNlIHtcblxuICAgICAgICBpZiAoIGlzUGxheWluZyAmJiBudWxsICE9PSBsb2NrQXVkaW9FbGVtZW50ICYmICFsb2NrQXVkaW9FbGVtZW50LnBhdXNlZCApIHtcblxuICAgICAgICAgICAgbG9ja0F1ZGlvRWxlbWVudC5wYXVzZSgpO1xuICAgICAgICAgICAgbG9ja0F1ZGlvRWxlbWVudC5jdXJyZW50VGltZSA9IDA7XG5cbiAgICAgICAgICAgIGF1ZGlvRWxlbWVudC5wbGF5KCk7XG4gICAgICAgICAgICBpc1BsYXlpbmcgPSB0cnVlO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoIGlzUGxheWluZyApIHtcbiAgICAgICAgICAgIGF1ZGlvRWxlbWVudC5wYXVzZSgpO1xuICAgICAgICAgICAgaXNQbGF5aW5nID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhdWRpb0VsZW1lbnQucGxheSgpO1xuICAgICAgICAgICAgaXNQbGF5aW5nID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoICFpc1BsYXlTdGFydGVkICYmIGlzUGxheWluZyApIHtcbiAgICAgICAgaXNQbGF5U3RhcnRlZCA9IHRydWU7XG4gICAgICAgIGNoZWNrSXNQbGF5ZXJIYXNUb0JlTWluaSgpO1xuICAgIH1cbn1cblxubGV0IGlzTG9ja1BsYXlNb2RlT25DaGFuZ2VkID0gZmFsc2U7XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVQbGF5ZXJDdXJyZW50VGltZShuZXdUaW1lSW5TZWNvbmRzLCBpc0Zyb21BdWRpbyA9IGZhbHNlKSB7XG5cbiAgICBuZXdUaW1lSW5TZWNvbmRzID0gTnVtYmVyKCBuZXdUaW1lSW5TZWNvbmRzICk7XG5cbiAgICBpZiAoICFpc05hTihuZXdUaW1lSW5TZWNvbmRzKSApIHtcblxuICAgICAgICBpZiAobnVsbCAhPT0gbG9ja1RpbWVJblNlY29uZHMgJiYgbmV3VGltZUluU2Vjb25kcyA+IGxvY2tUaW1lSW5TZWNvbmRzKSB7XG5cbiAgICAgICAgICAgIGN1cnJlbnRUaW1lSW5TZWNvbmRzID0gbG9ja1RpbWVJblNlY29uZHM7XG4gICAgICAgICAgICBhdWRpb0VsZW1lbnQuY3VycmVudFRpbWUgPSBjdXJyZW50VGltZUluU2Vjb25kcztcblxuICAgICAgICB9IGVsc2UgaWYgKG5ld1RpbWVJblNlY29uZHMgPiBlbmRUaW1lSW5TZWNvbmRzKSB7XG4gICAgXG4gICAgICAgICAgICBjdXJyZW50VGltZUluU2Vjb25kcyA9IGVuZFRpbWVJblNlY29uZHM7XG4gICAgICAgICAgICBhdWRpb0VsZW1lbnQuY3VycmVudFRpbWUgPSBjdXJyZW50VGltZUluU2Vjb25kcztcblxuICAgICAgICB9IGVsc2UgaWYgKG5ld1RpbWVJblNlY29uZHMgPCAwKSB7XG5cbiAgICAgICAgICAgIGN1cnJlbnRUaW1lSW5TZWNvbmRzID0gMDtcbiAgICAgICAgICAgIGF1ZGlvRWxlbWVudC5jdXJyZW50VGltZSA9IGN1cnJlbnRUaW1lSW5TZWNvbmRzO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjdXJyZW50VGltZUluU2Vjb25kcyA9IG5ld1RpbWVJblNlY29uZHM7XG4gICAgICAgICAgICBpZiAoICFpc0Zyb21BdWRpbyApIHtcbiAgICAgICAgICAgICAgICBhdWRpb0VsZW1lbnQuY3VycmVudFRpbWUgPSBjdXJyZW50VGltZUluU2Vjb25kcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlzTG9ja1BsYXlNb2RlT25DaGFuZ2VkID0gaXNMb2NrUGxheU1vZGVPbiAhPT0gKCBudWxsICE9PSBsb2NrVGltZUluU2Vjb25kcyAmJlxuICAgICAgICAgICAgY3VycmVudFRpbWVJblNlY29uZHMgPj0gbG9ja1RpbWVJblNlY29uZHMgKTtcblxuICAgICAgICBpc0xvY2tQbGF5TW9kZU9uID0gaXNMb2NrUGxheU1vZGVPbkNoYW5nZWQgPyAhaXNMb2NrUGxheU1vZGVPbiA6IGlzTG9ja1BsYXlNb2RlT247XG4gICAgICAgIFxuICAgICAgICBpZiAoaXNQbGF5aW5nICYmIChjdXJyZW50VGltZUluU2Vjb25kcyA+PSBlbmRUaW1lSW5TZWNvbmRzIHx8IFxuICAgICAgICAgICAgKG51bGwgIT09IGxvY2tUaW1lSW5TZWNvbmRzICYmIGN1cnJlbnRUaW1lSW5TZWNvbmRzID49IGxvY2tUaW1lSW5TZWNvbmRzKSB8fFxuICAgICAgICAgICAgaXNMb2NrUGxheU1vZGVPbkNoYW5nZWQgKSApIHtcblxuICAgICAgICAgICAgcGxheU9yUGF1c2VBdWRpbyhmYWxzZSk7IFxuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBzZWNvbmRzVG9UaW1lKCBzZWNzICkge1xuICAgIHNlY3MgPSBNYXRoLnJvdW5kKHNlY3MpO1xuICAgIGxldCBob3VycyA9IE1hdGguZmxvb3Ioc2VjcyAvICg2MCAqIDYwKSk7XG5cbiAgICBsZXQgZGl2aXNvckZvck1pbnV0ZXMgPSBzZWNzICUgKDYwICogNjApO1xuICAgIGxldCBtaW51dGVzID0gTWF0aC5mbG9vcihkaXZpc29yRm9yTWludXRlcyAvIDYwKTtcblxuICAgIGxldCBkaXZpc29yRm9yU2Vjb25kcyA9IGRpdmlzb3JGb3JNaW51dGVzICUgNjA7XG4gICAgbGV0IHNlY29uZHMgPSBNYXRoLmNlaWwoZGl2aXNvckZvclNlY29uZHMpO1xuXG4gICAgbGV0IHJlc3VsdCA9ICcnO1xuICAgIGlmICgwIDwgaG91cnMpIHtcbiAgICAgICAgcmVzdWx0ID0gKDEwID4gaG91cnMgPyAnMCcgOiAnJykgKyBob3VycyArICc6JztcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQgPSAnMDA6JztcbiAgICB9XG4gICAgcmVzdWx0ICs9ICgxMCA+IG1pbnV0ZXMgPyAnMCcgOiAnJykgKyBtaW51dGVzICsgJzonICsgKDEwID4gc2Vjb25kcyA/ICcwJyA6ICcnKSArIHNlY29uZHM7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gb25TcGVlZENsaWNrKCkge1xuICAgIGlmICgxID09IGF1ZGlvU3BlZWQpIHtcbiAgICAgICAgYXVkaW9TcGVlZCA9IDEuMjU7XG4gICAgfSBlbHNlIGlmICgxLjI1ID09IGF1ZGlvU3BlZWQpIHtcbiAgICAgICAgYXVkaW9TcGVlZCA9IDEuNTtcbiAgICB9IGVsc2UgaWYgKDEuNSA9PSBhdWRpb1NwZWVkKSB7XG4gICAgICAgIGF1ZGlvU3BlZWQgPSAxLjc1O1xuICAgIH0gZWxzZSBpZiAoMS43NSA9PSBhdWRpb1NwZWVkKSB7XG4gICAgICAgIGF1ZGlvU3BlZWQgPSAyO1xuICAgIH0gZWxzZSBpZiAoMiA9PSBhdWRpb1NwZWVkKSB7XG4gICAgICAgIGF1ZGlvU3BlZWQgPSAxO1xuICAgIH1cbiAgICBhdWRpb0VsZW1lbnQucGxheWJhY2tSYXRlID0gYXVkaW9TcGVlZDtcbn1cblxuZnVuY3Rpb24gb25Wb2x1bWVTbGlkZXJDaGFuZ2VkKGUpIHtcbiAgICBpZiAoYXVkaW9Wb2x1bWUgIT0gZS5kZXRhaWwuY3VycmVudFZhbHVlKSB7XG4gICAgICAgIGF1ZGlvVm9sdW1lID0gZS5kZXRhaWwuY3VycmVudFZhbHVlO1xuICAgICAgICBhdWRpb0VsZW1lbnQudm9sdW1lID0gYXVkaW9Wb2x1bWU7XG4gICAgICAgIGlmIChudWxsICE9PSBsb2NrQXVkaW9FbGVtZW50KSB7XG4gICAgICAgICAgICBsb2NrQXVkaW9FbGVtZW50LnZvbHVtZSA9IGF1ZGlvVm9sdW1lO1xuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gb25Wb2x1bWVCdXR0b25DbGljaygpIHtcbiAgICBpZiAoIDAgPT0gYXVkaW9Wb2x1bWUgKSB7XG4gICAgICAgIGF1ZGlvVm9sdW1lID0gMTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBhdWRpb1ZvbHVtZSA9IDA7XG4gICAgfVxuICAgIGF1ZGlvRWxlbWVudC52b2x1bWUgPSBhdWRpb1ZvbHVtZTtcbiAgICBpZiAobnVsbCAhPT0gbG9ja0F1ZGlvRWxlbWVudCkge1xuICAgICAgICBsb2NrQXVkaW9FbGVtZW50LnZvbHVtZSA9IGF1ZGlvVm9sdW1lO1xuICAgIH1cbn1cblxubGV0IGlzUGFnZVNjcm9sbGVkVG9Cb3R0b20gPSBmYWxzZTtcbmZ1bmN0aW9uIGNoZWNrSXNQbGF5ZXJIYXNUb0JlTWluaSgpIHtcblxuICAgIGlmICggIXBsYXllck1pbmlPZmYgJiYgaXNQbGF5U3RhcnRlZCApIHtcblxuICAgICAgICBsZXQgcG9zaXRpb24gPSBwbGF5ZXJXcmFwcGVyRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgbGV0IHZpZXdIZWlnaHQgPSBNYXRoLm1heChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0LCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xuICAgICAgICBpc1BsYXllck1pbmkgPSAocG9zaXRpb24uYm90dG9tIDwgMCB8fCBwb3NpdGlvbi50b3AgLSB2aWV3SGVpZ2h0ID49IDApO1xuXG4gICAgICAgIGxldCBkb2N1bWVudEhlaWdodCA9IE1hdGgubWF4KCBkb2N1bWVudC5ib2R5LnNjcm9sbEhlaWdodCwgZG9jdW1lbnQuYm9keS5vZmZzZXRIZWlnaHQsIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQsIFxuICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodCwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Lm9mZnNldEhlaWdodCApO1xuICAgICAgICBpc1BhZ2VTY3JvbGxlZFRvQm90dG9tID0gKHZpZXdIZWlnaHQgKyB3aW5kb3cuc2Nyb2xsWSArIDIwKSA+PSBkb2N1bWVudEhlaWdodDtcbiAgICB9XG59XG5cbjwvc2NyaXB0PlxuXG48c3R5bGU+XG4ucGstcGxheWVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjczMDNDO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDNweCByZ2JhKDAsMCwwLCAwLjQpLCAwIDAgMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKVxufVxuLnBrLWJ1dHRvbiB7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBsaW5lLWhlaWdodDogMDtcbn1cbi5way1idXR0b246aG92ZXIgc3ZnIHtcbiAgICBmaWxsLW9wYWNpdHk6IDAuODtcbn1cbi5way1idXR0b246YWN0aXZlIHN2ZyB7XG4gICAgZmlsbC1vcGFjaXR5OiAwLjU7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcbn1cbi8qKiBUT0RPOiDQtNC70Y8g0YTQvtC60YPRgdCwINC/0L7RgdC70LUg0L3QsNC20LDRgtC40Y8g0L3QsCDQutC70LDQstC1INC90LDQtNC+INGA0LDQvNC60YMg0L/QvtC60LDQt9GL0LLQsNGC0YwgXG7RgtC/0LjRh9C90YPRjiDQstC+0LrRgNGD0LMg0Y3Qu9C10LzQtdC90YLQvtCyINCwINC/0L7RgdC70LUg0LrQu9C40LrQsCDQvNGL0YjQutC+0Lkg0LjQu9C4INGC0LDRh9CwINC/0YDRj9GC0LDRgtGMICovXG4ucGstYnV0dG9uOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuLnBrLXBsYXllcl9fdm9sdW1lIHsgd2lkdGg6IGZpdC1jb250ZW50OyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyB3aWR0aDogODBweDsgfVxuXG4ucGstcGxheWVyX190aW1lIHtcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDFlbTtcbiAgICBmb250LXdlaWdodDogbm9uZTtcbiAgICBjb2xvcjogI2ZmZjsgXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5way1wbGF5ZXJfX3RpbWVzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5way1wbGF5ZXJfX2NvbnRyb2xzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnBrLXBsYXllcl9fY29udHJvbHMgPiBidXR0b24sIC5way1wbGF5ZXJfX2NvbnRyb2xzID4gZGl2IHsgbWFyZ2luLWxlZnQ6IDIwcHg7IH1cbi5way1wbGF5ZXJfX2NvbnRyb2xzID4gYnV0dG9uOmZpcnN0LWNoaWxkIHsgbWFyZ2luLWxlZnQ6IDA7IH1cblxuLnBrLXNwZWVkLWJ1dHRvbiB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG8gIWltcG9ydGFudDtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuQGtleWZyYW1lcyBway1zbGlkZWluX19ib3R0b20ge1xuICAgIGZyb20ge1xuICAgICAgICBib3R0b206IC0xNDBweDtcbiAgICB9XG4gICAgdG8ge1xuICAgICAgICBib3R0b206IDA7XG4gICAgfVxufVxuQGtleWZyYW1lcyBway1zbGlkZW91dF9fYm90dG9tIHtcbiAgICBmcm9tIHtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgIH1cbiAgICB0byB7XG4gICAgICAgIGJvdHRvbTogLTE0MHB4O1xuICAgIH1cbn1cblxuLnBrLXBsYXllcl9fbWluaSB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHotaW5kZXg6IDk5OTk5O1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGxlZnQ6IDUwJTtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbn1cbi5way1wbGF5ZXJfX21pbmktLXNsaWRlaW4ge1xuICAgIGJvdHRvbTogMDtcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xuICAgIGFuaW1hdGlvbi1uYW1lOiBway1zbGlkZWluX19ib3R0b207XG59XG4ucGstcGxheWVyX19taW5pLS1zbGlkZW91dCB7XG4gICAgYm90dG9tOiAtMTQwcHg7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjJzO1xuICAgIGFuaW1hdGlvbi1uYW1lOiBway1zbGlkZW91dF9fYm90dG9tO1xufVxuLnBrLXBsYXllcl9fbWluaSAucGstcGxheWVyX190aW1lIHsgZGlzcGxheTogbm9uZTsgfVxuLnBrLXBsYXllcl9fbWluaSAucGstc3BlZWQtYnV0dG9uIHsgZmxleC1ncm93OiAwOyB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cblxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgICAucGstcGxheWVyX19taW5pIHsgd2lkdGg6IDEwMCU7IH1cbiAgICAucGstcGxheWVyX19taW5pIC5way1wbGF5ZXJfX3ZvbHVtZSxcbiAgICAucGstcGxheWVyIC5way1wbGF5ZXJfX3ZvbHVtZSB7IGRpc3BsYXk6IG5vbmU7IH1cbiAgICAucGstc3BlZWQtYnV0dG9uIHsgZmxleC1ncm93OiAwOyB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cbn1cbjwvc3R5bGU+XG5cbjxzdmVsdGU6d2luZG93IG9uOnNjcm9sbHxjYXB0dXJlPXtjaGVja0lzUGxheWVySGFzVG9CZU1pbml9Lz5cblxuPGRpdiBjbGFzcz1cInBrLXBsYXllci13cmFwcGVyXCIgYmluZDp0aGlzPXtwbGF5ZXJXcmFwcGVyRWxlbWVudH0gc3R5bGU9XCJ7cGxheWVyU3R5bGV9bWluLWhlaWdodDogMTA0cHg7IHdpZHRoOiAxMDAlOyBtYXJnaW46IDMwcHggYXV0bzsgYm94LXNpemluZzogYm9yZGVyLWJveDtcIj5cbiAgICA8ZGl2IGJpbmQ6dGhpcz17cGxheWVyRWxlbWVudH0gXG4gICAgICAgIGNsYXNzPVwicGstcGxheWVyIHtpc1BsYXllck1pbmkgPyAncGstcGxheWVyX19taW5pIHBrLXBsYXllcl9fbWluaS0tc2xpZGVpbicgOiAoaXNQbGF5ZXJNaW5pU2hvd24gPyAncGstcGxheWVyX19taW5pIHBrLXBsYXllcl9fbWluaS0tc2xpZGVvdXQnIDogJycgKX1cIiBcbiAgICAgICAgc3R5bGU9XCJkaXNwbGF5OiB7aXNQYWdlU2Nyb2xsZWRUb0JvdHRvbSA/ICdub25lJyA6ICdmbGV4J307XCJcbiAgICAgICAgb246YW5pbWF0aW9uZW5kPVwieyhlKT0+eyBcbiAgICAgICAgICAgIGlmIChpc1BsYXllck1pbmkpIHsgXG4gICAgICAgICAgICAgICAgaXNQbGF5ZXJNaW5pU2hvd24gPSB0cnVlOyBcbiAgICAgICAgICAgIH0gZWxzZSB7IFxuICAgICAgICAgICAgICAgIGlzUGxheWVyTWluaVNob3duID0gZmFsc2U7IFxuICAgICAgICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ3BrLXBsYXllcl9fbWluaScsICdway1wbGF5ZXJfX21pbmktLXNsaWRlb3V0Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH19XCI+XG5cbiAgICAgICAgPGF1ZGlvIGNsYXNzPVwicGstcGxheWVyX19hdWRpb1wiIHNyYz1cInthdWRpb1VSTH1cIiBwcmVsb2FkPVwiYXV0b1wiXG4gICAgICAgICAgICBvbjp0aW1ldXBkYXRlPXsgKCk9Pnt1cGRhdGVQbGF5ZXJDdXJyZW50VGltZShhdWRpb0VsZW1lbnQuY3VycmVudFRpbWUsIHRydWUpO30gfSBcbiAgICAgICAgICAgIG9uOmxvYWRlZG1ldGFkYXRhPXsgKCk9PntlbmRUaW1lSW5TZWNvbmRzID0gYXVkaW9FbGVtZW50LmR1cmF0aW9uO30gfT5cbiAgICAgICAgPC9hdWRpbz5cbiAgICAgICAgeyNpZiBudWxsICE9PSBsb2NrQXVkaW9VUkwgJiYgJycgIT09IGxvY2tBdWRpb1VSTH1cbiAgICAgICAgPGF1ZGlvIGNsYXNzPVwicGstcGxheWVyX19sb2NrLWF1ZGlvXCIgc3JjPVwie2xvY2tBdWRpb1VSTH1cIiBwcmVsb2FkPVwiYXV0b1wiPjwvYXVkaW8+XG4gICAgICAgIHsvaWZ9XG4gICAgICAgIDxTbGlkZXIgc3R5bGU9XCJtYXJnaW4tYm90dG9tOiA1cHg7XCIgXG4gICAgICAgICAgY3VycmVudFZhbHVlPXtjdXJyZW50VGltZUluU2Vjb25kc30gXG4gICAgICAgICAgbWF4VmFsdWU9e2VuZFRpbWVJblNlY29uZHN9IFxuICAgICAgICAgIG9uOnZhbHVlY2hhbmdlZD17IChlKT0+e3VwZGF0ZVBsYXllckN1cnJlbnRUaW1lKGUuZGV0YWlsLmN1cnJlbnRWYWx1ZSk7fSB9IFxuICAgICAgICAgIGxvY2tWYWx1ZT17bG9ja1RpbWVJblNlY29uZHN9Lz5cbiAgICAgICAgPGRpdiBjbGFzcz1cInBrLXBsYXllcl9fdGltZXNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJway1wbGF5ZXJfX3RpbWVcIiBzdHlsZT1cInRleHQtYWxpZ246IGxlZnQ7XCI+e2N1cnJlbnRUaW1lU3RyaW5nfTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBrLXBsYXllcl9fdGltZVwiIHN0eWxlPVwidGV4dC1hbGlnbjogcmlnaHQ7XCI+e2VuZFRpbWVTdHJpbmd9PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJway1wbGF5ZXJfX2NvbnRyb2xzXCI+XG5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJway1idXR0b25cIiB0aXRsZT1cInt0ZXh0VHJhbnNsYXRpb25zLmJhY2t3YXJkfVwiXG4gICAgICAgICAgICAgICAgb246Y2xpY2t8cHJldmVudERlZmF1bHR8c3RvcFByb3BhZ2F0aW9uPXsgKCk9Pnt1cGRhdGVQbGF5ZXJDdXJyZW50VGltZShjdXJyZW50VGltZUluU2Vjb25kcyAtIDE1KTt9IH0+XG4gICAgICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjM2XCIgaGVpZ2h0PVwiNDBcIiB2aWV3Qm94PVwiMCAwIDM2IDQwXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGQ9XCJNMTcuOTMgNDBDOC4wNzQgNDAgLjA5MSAzMi4wMTcuMDkxIDIyLjE2SDQuNTVjMCA3LjM4MSA1Ljk5OSAxMy4zODEgMTMuMzggMTMuMzgxIDcuMzgyIDAgMTMuMzc5LTYgMTMuMzc5LTEzLjM4MVMyNS4zMTIgOC43ODEgMTcuOTMgOC43ODF2NC40NTlMOS45ODUgNi41NTEgMTcuOTMgMHY0LjMyYzkuODU3IDAgMTcuODQgNy45ODQgMTcuODQgMTcuODQgMCA5Ljg1Ny03Ljk4MyAxNy44NC0xNy44NCAxNy44NHptMy44NDItMTAuNzkzYy0xLjEyMyAwLTIuMDM4LS4zMDEtMi43NDYtLjkwNC0uNzA4LS42MDMtMS4xMzMtMS40MTQtMS4yNzEtMi40MzJsMi4zMjQtLjI0MmMuMDY2LjUyNi4yNjMuOTQzLjU5IDEuMjUuMzI2LjMwNy43MDIuNDYxIDEuMTI5LjQ2MS40ODcgMCAuODk4LS4xOTggMS4yMzYtLjU5NC4zMzctLjM5Ni41MDgtLjk5Mi41MDgtMS43ODkgMC0uNzQ3LS4xNjctMS4zMDYtLjUwMi0xLjY4LS4zMzUtLjM3My0uNzcyLS41Ni0xLjMwOS0uNTYtLjY2OSAwLTEuMjY5LjI5Ni0xLjgwMS44ODhsLTEuODkyLS4yNzUgMS4xOTUtNi4zMzRoNi4xNjh2Mi4xODRoLTQuNGwtLjM2NiAyLjA2NmMuNTIxLS4yNiAxLjA1Mi0uMzg5IDEuNTk0LS4zODkgMS4wMzUgMCAxLjkxMi4zNzcgMi42MzEgMS4xMjkuNzE5Ljc1MyAxLjA4IDEuNzI5IDEuMDggMi45MyAwIDEuMDAyLS4yOSAxLjg5Ni0uODcxIDIuNjgyLS43OTEgMS4wNzMtMS44OTEgMS42MDktMy4yOTcgMS42MDl6TTExLjkwMyAyOXYtOC43OTFjLS44NTIuNzk3LTEuODU3IDEuMzg2LTMuMDE0IDEuNzY4di0yLjExNmMuNjA5LS4xOTkgMS4yNzEtLjU3NiAxLjk4NS0xLjEzMi43MTQtLjU1NyAxLjIwMy0xLjIwNiAxLjQ2OS0xLjk0OGgxLjg5MlYyOWgtMi4zMzJ6XCIgZmlsbD1cIiNmZmZcIi8+PC9zdmc+XG4gICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInBrLWJ1dHRvblwiIHRpdGxlPVwie2lzUGxheWluZyA/IHRleHRUcmFuc2xhdGlvbnMucGF1c2UgOiB0ZXh0VHJhbnNsYXRpb25zLnBsYXl9XCJcbiAgICAgICAgICAgICAgICBzdHlsZT1cIndpZHRoOiAyOHB4O1wiXG4gICAgICAgICAgICAgICAgb246Y2xpY2t8cHJldmVudERlZmF1bHR8c3RvcFByb3BhZ2F0aW9uPXsoKT0+e3BsYXlPclBhdXNlQXVkaW8odHJ1ZSk7fSB9PlxuICAgICAgICAgICAgICAgIHsjaWYgaXNQbGF5aW5nfVxuICAgICAgICAgICAgICAgIDxzdmcgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjM1XCIgdmlld0JveD1cIjAgMCAyNyA0MFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwiTTAgMGgxMC4xMjV2NDBIMHptMTYuODc1IDBIMjd2NDBIMTYuODc1em0wIDBcIiBmaWxsPVwiI2ZmZlwiLz48L3N2Zz5cbiAgICAgICAgICAgICAgICB7OmVsc2V9XG4gICAgICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjI4XCIgaGVpZ2h0PVwiMzVcIiB2aWV3Qm94PVwiMCAwIDMyIDQwXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGQ9XCJNLjU2MS41NTZ2MzguODg4TDMxLjQzOCAyMHpcIiBmaWxsPVwiI2ZmZlwiLz48L3N2Zz5cbiAgICAgICAgICAgICAgICB7L2lmfVxuICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJway1idXR0b25cIiB0aXRsZT1cInt0ZXh0VHJhbnNsYXRpb25zLmZvcndhcmR9XCJcbiAgICAgICAgICAgICAgICBvbjpjbGlja3xwcmV2ZW50RGVmYXVsdHxzdG9wUHJvcGFnYXRpb249eyAoKT0+e3VwZGF0ZVBsYXllckN1cnJlbnRUaW1lKGN1cnJlbnRUaW1lSW5TZWNvbmRzICsgNjApO30gfT5cbiAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMzZcIiBoZWlnaHQ9XCI0MFwiIHZpZXdCb3g9XCIwIDAgMzYgNDBcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZD1cIk0xNy45MyA0MEM4LjA3NCA0MCAuMDkxIDMyLjAxNi4wOTEgMjIuMTZTOC4wNzQgNC4zMiAxNy45MyA0LjMyVjBsNy45NDQgNi41NTEtNy45NDQgNi42ODlWOC43ODFjLTcuMzgxIDAtMTMuMzggNS45OTgtMTMuMzggMTMuMzc5IDAgNy4zODEgNS45OTkgMTMuMzgxIDEzLjM4IDEzLjM4MSA3LjM4MSAwIDEzLjM3OS02IDEzLjM3OS0xMy4zODFoNC40NjFjMCA5Ljg1Ni03Ljk4MyAxNy44NC0xNy44NCAxNy44NHptLTQuNDQ1LTExLjI5M2MtMS4yMjkgMC0yLjI0LS40NzctMy4wMzEtMS40MzItLjc5Mi0uOTU0LTEuMTg2LTIuNTE4LTEuMTg2LTQuNjkzIDAtMi4yMy40MTItMy44MzkgMS4yMzctNC44MjQuODI0LS45ODUgMS44OTUtMS40NzcgMy4yMTMtMS40NzcuOTI0IDAgMS42ODguMjU4IDIuMjk0Ljc3Ni42MDYuNTE3Ljk5MyAxLjI2OSAxLjE1OSAyLjI1NGwtMi4yNTguMjVjLS4wNTYtLjQ2NS0uMTk5LS44MDgtLjQzMi0xLjAzLS4yMzItLjIyMS0uNTM1LS4zMzItLjkwNi0uMzMyLS40OTMgMC0uOTA4LjIyMi0xLjI0OC42NjQtLjM0MS40NDMtLjU1NiAxLjM2NC0uNjQ1IDIuNzY0LjU4MS0uNjg2IDEuMzA1LTEuMDI5IDIuMTY4LTEuMDI5Ljk3NCAwIDEuODA4LjM3MSAyLjUwMiAxLjExMy42OTUuNzQyIDEuMDQxIDEuNjk4IDEuMDQxIDIuODcxIDAgMS4yNDUtLjM2NSAyLjI0NC0xLjA5NSAyLjk5Ni0uNzMxLjc1My0xLjY2NyAxLjEyOS0yLjgxMyAxLjEyOXptOS4xOCAwYy0xLjE4NSAwLTIuMTM5LS40NTUtMi44NjMtMS4zNjUtLjcyNS0uOTEtMS4wODgtMi41MzQtMS4wODgtNC44NjkgMC0yLjI5MS4zOTgtMy45MzggMS4xOTUtNC45NDYuNjU4LS44MyAxLjU3Ny0xLjI0NiAyLjc1Ni0xLjI0NiAxLjE3OSAwIDIuMDk5LjQyMSAyLjc2MyAxLjI2Mi43OTIuOTk2IDEuMTg4IDIuNjQ3IDEuMTg4IDQuOTU1IDAgMi4zMDItLjM5OCAzLjk1OC0xLjE5NSA0Ljk2NS0uNjU5LjgzLTEuNTc3IDEuMjQ0LTIuNzU2IDEuMjQ0ek0xMy42IDI2Ljc3M2MuNDMyIDAgLjc5My0uMTY4IDEuMDgtLjUwNS4yODgtLjMzOC40MzItLjg5MS40MzItMS42NjEgMC0uNzkxLS4xNTUtMS4zNzItLjQ2NS0xLjc0LS4zMS0uMzY4LS42OTctLjU1MS0xLjE2Mi0uNTUxLS40NDggMC0uODI5LjE3Ni0xLjEzOS41MjgtLjMxLjM1MS0uNDY0Ljg2OC0uNDY0IDEuNTU0IDAgLjc1OS4xNzQgMS4zNDQuNTIzIDEuNzU2LjM0OS40MTMuNzQ3LjYxOSAxLjE5NS42MTl6bTkuMDY1IDBjLjI4MiAwIC41MzQtLjA4OS43NTYtLjI2OS4yMjEtLjE4LjM5Mi0uNTAyLjUxMy0uOTY3LjE2MS0uNTk4LjI0My0xLjYxMS4yNDMtMy4wMzkgMC0xLjQyOC0uMDczLTIuNDA3LS4yMTctMi45NDEtLjE0NC0uNTM0LS4zMjUtLjg5My0uNTQzLTEuMDczLS4yMTktLjE3OS0uNDctLjI2OS0uNzUyLS4yNjktLjI4MyAwLS41MzUuMDktLjc1Ni4yNjktLjIyMS4xOC0uMzkyLjUwNC0uNTE0Ljk2OS0uMTYuNjAzLS4yNCAxLjYxNy0uMjQgMy4wNDVzLjA3MSAyLjQwOS4yMTUgMi45NDNjLjE0NC41MzQuMzI2Ljg5LjU0NSAxLjA2Ny4yMTguMTc3LjQ2Ny4yNjUuNzUuMjY1elwiIGZpbGw9XCIjZmZmXCIvPjwvc3ZnPlxuICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJway1zcGVlZC1idXR0b24gcGstYnV0dG9uXCIgdGl0bGU9XCJ7dGV4dFRyYW5zbGF0aW9ucy5zcGVlZH1cIlxuICAgICAgICAgICAgICAgIG9uOmNsaWNrfHByZXZlbnREZWZhdWx0fHN0b3BQcm9wYWdhdGlvbj17b25TcGVlZENsaWNrfT5cbiAgICAgICAgICAgICAgICB7I2lmIDEgPT0gYXVkaW9TcGVlZH1cbiAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMzhcIiBoZWlnaHQ9XCIxN1wiIHZpZXdCb3g9XCIwIDAgMzggMTdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZD1cIk0yNC45MzUgOC4wNzhsMS42ODYtMy4yMDFoMy43NmwtMy4wNjIgNS42NjEgMy4yMTIgNS45NjJIMjYuNzVsLTEuODI2LTMuNDM3TDIzLjEzIDE2LjVoLTMuODAzbDMuMjIzLTUuOTYyLTMuMDUxLTUuNjYxaDMuODAzek0xNS40NDkgMTYuNWgtMy42MzFWNC45NDFMOC4yNTIgNS45ODN2LTIuNzVMMTUuMTE2Ljg1OWguMzMzelwiIGZpbGw9XCIjZmZmXCIvPjwvc3ZnPlxuICAgICAgICAgICAgICAgIHs6ZWxzZSBpZiAxLjI1ID09IGF1ZGlvU3BlZWR9XG4gICAgICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjM4XCIgaGVpZ2h0PVwiMTdcIiB2aWV3Qm94PVwiMCAwIDM4IDE3XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGQ9XCJNMzEuODE5IDguMDc4bDEuNjg3LTMuMjAxaDMuNzZsLTMuMDYyIDUuNjYxIDMuMjEyIDUuOTYyaC0zLjc4MWwtMS44MjYtMy40MzctMS43OTQgMy40MzdoLTMuODAzbDMuMjIzLTUuOTYyLTMuMDUxLTUuNjYxaDMuODAzek0yNS40NDQgMTYuNUgxNC41M3YtMi4zNjNsNS4wMjctNS4yODVjMS4yMzktMS40MTEgMS44NTgtMi41MzIgMS44NTgtMy4zNjMgMC0uNjczLS4xNDYtMS4xODUtLjQ0LTEuNTM2LS4yOTQtLjM1MS0uNzItLjUyNi0xLjI3OC0uNTI2LS41NTIgMC0uOTk5LjIzNC0xLjM0My43MDNzLS41MTYgMS4wNTUtLjUxNiAxLjc1N2gtMy42MzFjMC0uOTYuMjQtMS44NDYuNzItMi42NTkuNDgtLjgxMyAxLjE0Ni0xLjQ0OCAxLjk5OC0xLjkwNy44NTItLjQ1OCAxLjgwNS0uNjg3IDIuODU4LS42ODcgMS42OSAwIDIuOTkxLjM5IDMuOTA0IDEuMTcxLjkxMy43OCAxLjM3IDEuOTAxIDEuMzcgMy4zNjIgMCAuNjE2LS4xMTUgMS4yMTYtLjM0NCAxLjc5OS0uMjI5LjU4NC0uNTg1IDEuMTk2LTEuMDY5IDEuODM3LS40ODMuNjQxLTEuMjYyIDEuNDk5LTIuMzM2IDIuNTczbC0yLjAyIDIuMzMxaDYuMTU2em0tMTQuMTY1LTMuNTEzYy41NzMgMCAxLjA0OS4xNyAxLjQyOS41MTEuMzc5LjM0LjU2OS43NzUuNTY5IDEuMzA1IDAgLjUzLS4xOS45NjUtLjU2OSAxLjMwNS0uMzguMzQtLjg1Ni41MS0xLjQyOS41MS0uNTggMC0xLjA1OC0uMTcyLTEuNDM0LS41MTUtLjM3Ni0uMzQ0LS41NjQtLjc3Ny0uNTY0LTEuM3MuMTg4LS45NTYuNTY0LTEuM2MuMzc2LS4zNDQuODU0LS41MTYgMS40MzQtLjUxNnpNNy41NjQgMTYuNWgtMy42M1Y0Ljk0MUwuMzY3IDUuOTgzdi0yLjc1TDcuMjMxLjg1OWguMzMzelwiIGZpbGw9XCIjZmZmXCIvPjwvc3ZnPlxuICAgICAgICAgICAgICAgIHs6ZWxzZSBpZiAxLjUgPT0gYXVkaW9TcGVlZH1cbiAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMzhcIiBoZWlnaHQ9XCIxN1wiIHZpZXdCb3g9XCIwIDAgMzggMTdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZD1cIk0zMS44MTkgOC4wNzhsMS42ODctMy4yMDFoMy43NmwtMy4wNjIgNS42NjEgMy4yMTIgNS45NjJoLTMuNzgxbC0xLjgyNi0zLjQzNy0xLjc5NCAzLjQzN2gtMy44MDNsMy4yMjMtNS45NjItMy4wNTEtNS42NjFoMy44MDN6bS0xNi44NTUuNzc0bC45NTctNy45OTNoOS4xNDF2Mi44MTVoLTYuMTk4bC0uMzU1IDMuMTA0Yy4yNTgtLjE1LjU5Ny0uMjgzIDEuMDE2LS4zOTcuNDE4LS4xMTUuODI4LS4xNzIgMS4yMy0uMTcyIDEuNTU0IDAgMi43NDguNDYgMy41ODIgMS4zOC44MzQuOTIxIDEuMjUxIDIuMjExIDEuMjUxIDMuODczIDAgMS4wMDMtLjIyMyAxLjkxLS42NzEgMi43MjMtLjQ0Ny44MTMtMS4wNzYgMS40MzgtMS44ODUgMS44NzUtLjgwOS40MzYtMS43NjUuNjU1LTIuODY4LjY1NS0uOTgxIDAtMS45MDItLjIwMi0yLjc2MS0uNjA3LS44NTktLjQwNS0xLjUzMy0uOTYtMi4wMi0xLjY2NS0uNDg3LS43MDYtLjcyNi0xLjUwMi0uNzE5LTIuMzloMy42MzFjLjAzNS41NzMuMjE4IDEuMDI3LjU0NyAxLjM2NC4zMy4zMzcuNzYzLjUwNSAxLjMuNTA1IDEuMjE4IDAgMS44MjYtLjkwMiAxLjgyNi0yLjcwNyAwLTEuNjY5LS43NDQtMi41MDMtMi4yMzQtMi41MDMtLjg0NSAwLTEuNDc1LjI3Mi0xLjg5MS44MTZ6bS0zLjI0NSA0LjEzNWMuNTczIDAgMS4wNDkuMTcgMS40MjkuNTExLjM3OS4zNC41NjkuNzc1LjU2OSAxLjMwNSAwIC41My0uMTkuOTY1LS41NjkgMS4zMDUtLjM4LjM0LS44NTYuNTEtMS40MjkuNTEtLjU4IDAtMS4wNTgtLjE3Mi0xLjQzNC0uNTE1LS4zNzYtLjM0NC0uNTY0LS43NzctLjU2NC0xLjNzLjE4OC0uOTU2LjU2NC0xLjNjLjM3Ni0uMzQ0Ljg1NC0uNTE2IDEuNDM0LS41MTZ6TTcuNTY0IDE2LjVoLTMuNjNWNC45NDFMLjM2NyA1Ljk4M3YtMi43NUw3LjIzMS44NTloLjMzM3pcIiBmaWxsPVwiI2ZmZlwiLz48L3N2Zz5cbiAgICAgICAgICAgICAgICB7OmVsc2UgaWYgMS43NSA9PSBhdWRpb1NwZWVkfVxuICAgICAgICAgICAgICAgIDxzdmcgd2lkdGg9XCIzOFwiIGhlaWdodD1cIjE3XCIgdmlld0JveD1cIjAgMCAzOCAxN1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwiTTMxLjg3OSA4LjA3OGwxLjY4Ny0zLjIwMWgzLjc2bC0zLjA2MiA1LjY2MSAzLjIxMiA1Ljk2MmgtMy43ODFsLTEuODI2LTMuNDM3LTEuNzk0IDMuNDM3aC0zLjgwM2wzLjIyMy01Ljk2Mi0zLjA1MS01LjY2MWgzLjgwM3ptLTYuNjM4LTUuMjg1TDE5LjM5NyAxNi41aC0zLjgyNGw1Ljg1NC0xMi44NDhoLTcuNDU1Vi44NTloMTEuMjY5ek0xMS4zMzkgMTIuOTg3Yy41NzMgMCAxLjA0OS4xNyAxLjQyOS41MTEuMzc5LjM0LjU2OS43NzUuNTY5IDEuMzA1IDAgLjUzLS4xOS45NjUtLjU2OSAxLjMwNS0uMzguMzQtLjg1Ni41MS0xLjQyOS41MS0uNTggMC0xLjA1OC0uMTcyLTEuNDM0LS41MTUtLjM3Ni0uMzQ0LS41NjQtLjc3Ny0uNTY0LTEuM3MuMTg4LS45NTYuNTY0LTEuM2MuMzc2LS4zNDQuODU0LS41MTYgMS40MzQtLjUxNnpNNy42MjQgMTYuNWgtMy42M1Y0Ljk0MUwuNDI3IDUuOTgzdi0yLjc1TDcuMjkxLjg1OWguMzMzelwiIGZpbGw9XCIjZmZmXCIvPjwvc3ZnPlxuICAgICAgICAgICAgICAgIHs6ZWxzZX1cbiAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMzhcIiBoZWlnaHQ9XCIxN1wiIHZpZXdCb3g9XCIwIDAgMzggMTdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZD1cIk0yNS40MzUgOC4wNzhsMS42ODYtMy4yMDFoMy43NmwtMy4wNjIgNS42NjEgMy4yMTIgNS45NjJIMjcuMjVsLTEuODI2LTMuNDM3TDIzLjYzIDE2LjVoLTMuODAzbDMuMjIzLTUuOTYyLTMuMDUxLTUuNjYxaDMuODAzek0xOC44MzkgMTYuNUg3LjkyNXYtMi4zNjNsNS4wMjctNS4yODVjMS4yMzktMS40MTEgMS44NTktMi41MzIgMS44NTktMy4zNjMgMC0uNjczLS4xNDctMS4xODUtLjQ0MS0xLjUzNi0uMjk0LS4zNTEtLjcyLS41MjYtMS4yNzgtLjUyNi0uNTUyIDAtLjk5OS4yMzQtMS4zNDMuNzAzcy0uNTE2IDEuMDU1LS41MTYgMS43NTdoLTMuNjNjMC0uOTYuMjM5LTEuODQ2LjcxOS0yLjY1OS40OC0uODEzIDEuMTQ2LTEuNDQ4IDEuOTk4LTEuOTA3Ljg1My0uNDU4IDEuODA1LS42ODcgMi44NTgtLjY4NyAxLjY5IDAgMi45OTEuMzkgMy45MDUgMS4xNzEuOTEzLjc4IDEuMzY5IDEuOTAxIDEuMzY5IDMuMzYyIDAgLjYxNi0uMTE0IDEuMjE2LS4zNDQgMS43OTktLjIyOS41ODQtLjU4NSAxLjE5Ni0xLjA2OCAxLjgzNy0uNDg0LjY0MS0xLjI2MyAxLjQ5OS0yLjMzNyAyLjU3M2wtMi4wMTkgMi4zMzFoNi4xNTV6XCIgZmlsbD1cIiNmZmZcIi8+PC9zdmc+XG4gICAgICAgICAgICAgICAgey9pZn1cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGstcGxheWVyX192b2x1bWVcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwicGstYnV0dG9uXCIgdGl0bGU9XCJ7dGV4dFRyYW5zbGF0aW9ucy52b2x1bWV9XCJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJtYXJnaW4tcmlnaHQ6IDEwcHg7XCIgXG4gICAgICAgICAgICAgICAgICAgIG9uOmNsaWNrfHByZXZlbnREZWZhdWx0fHN0b3BQcm9wYWdhdGlvbj17b25Wb2x1bWVCdXR0b25DbGlja30+XG4gICAgICAgICAgICAgICAgICAgIHsjaWYgMCA8IGF1ZGlvVm9sdW1lfVxuICAgICAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMjJcIiBoZWlnaHQ9XCIyMlwiIHZpZXdCb3g9XCIwIDAgMjIgMjJcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZD1cIk0wIDcuMzMzdjcuMzM0aDQuODg5TDExIDIwLjc3OFYxLjIyMkw0Ljg4OSA3LjMzM0gwek0xNi41IDExYzAtMi4xNjMtMS4yNDctNC4wMjEtMy4wNTYtNC45MjZ2OS44MzljMS44MDktLjg5MiAzLjA1Ni0yLjc1IDMuMDU2LTQuOTEzek0xMy40NDQuMjgxdjIuNTE4QzE2Ljk3NiAzLjg1IDE5LjU1NiA3LjEyNiAxOS41NTYgMTFjMCAzLjg3NC0yLjU4IDcuMTUtNi4xMTIgOC4yMDF2Mi41MThDMTguMzQ1IDIwLjYwNyAyMiAxNi4yMzEgMjIgMTFjMC01LjIzMS0zLjY1NS05LjYwNy04LjU1Ni0xMC43MTl6XCIgZmlsbD1cIiNmZmZcIi8+PC9zdmc+XG4gICAgICAgICAgICAgICAgICAgIHs6ZWxzZX1cbiAgICAgICAgICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjIyXCIgaGVpZ2h0PVwiMjJcIiB2aWV3Qm94PVwiMCAwIDIyIDIyXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGQ9XCJNMTYuNSAxMWMwLTIuMTYzLTEuMjQ3LTQuMDIxLTMuMDU2LTQuOTI2djIuNzAybDIuOTk1IDIuOTk0Yy4wMzYtLjI0NC4wNjEtLjUwMS4wNjEtLjc3em0zLjA1NiAwYzAgMS4xNDktLjI0NSAyLjIyNC0uNjYxIDMuMjI3bDEuODQ2IDEuODQ1QzIxLjU0OCAxNC41NTcgMjIgMTIuODMzIDIyIDExYzAtNS4yMzEtMy42NTUtOS42MDctOC41NTYtMTAuNzE5djIuNTE4QzE2Ljk3NiAzLjg1IDE5LjU1NiA3LjEyNiAxOS41NTYgMTF6TTEuNTUyIDBMMCAxLjU1Mmw1Ljc4MSA1Ljc4MUgwdjcuMzM0aDQuODg5TDExIDIwLjc3OHYtOC4yMjZsNS4xOTQgNS4xOTVjLS44MTkuNjM1LTEuNzM1IDEuMTM2LTIuNzUgMS40NDJ2Mi41MThjMS42ODctLjM3OSAzLjIxNS0xLjE2MSA0LjUxLTIuMjEzTDIwLjQ0OCAyMiAyMiAyMC40NDhsLTExLTExTDEuNTUyIDB6TTExIDEuMjIyTDguNDQ1IDMuNzc3IDExIDYuMzMxVjEuMjIyelwiIGZpbGw9XCIjZmZmXCIvPjwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICB7L2lmfVxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxTbGlkZXIgaXNUaHVtYk9uSG92ZXI9e2ZhbHNlfSBjdXJyZW50VmFsdWU9e2F1ZGlvVm9sdW1lfSBtYXhWYWx1ZT17MX0gb246dmFsdWVjaGFuZ2VkPXtvblZvbHVtZVNsaWRlckNoYW5nZWR9Lz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHNsb3Q+PC9zbG90PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvZGl2PiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtT0EsVUFBVSw4QkFBQyxDQUFDLEFBQ1IsZ0JBQWdCLENBQUUsT0FBTyxDQUN6QixLQUFLLENBQUUsSUFBSSxDQUNYLFVBQVUsQ0FBRSxVQUFVLENBQ3RCLE9BQU8sQ0FBRSxJQUFJLENBQUMsSUFBSSxDQUNsQixPQUFPLENBQUUsSUFBSSxDQUNiLGNBQWMsQ0FBRSxNQUFNLENBQ3RCLGFBQWEsQ0FBRSxHQUFHLENBQ2xCLFVBQVUsQ0FBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUM7QUFDaEYsQ0FBQyxBQUNELFVBQVUsOEJBQUMsQ0FBQyxBQUNSLE9BQU8sQ0FBRSxDQUFDLENBQ1YsTUFBTSxDQUFFLENBQUMsQ0FDVCxnQkFBZ0IsQ0FBRSxXQUFXLENBQzdCLE1BQU0sQ0FBRSxJQUFJLENBQ1osTUFBTSxDQUFFLE9BQU8sQ0FDZixXQUFXLENBQUUsQ0FBQyxBQUNsQixDQUFDLEFBQ0QseUJBQVUsTUFBTSxDQUFDLEdBQUcsZUFBQyxDQUFDLEFBQ2xCLFlBQVksQ0FBRSxHQUFHLEFBQ3JCLENBQUMsQUFDRCx5QkFBVSxPQUFPLENBQUMsR0FBRyxlQUFDLENBQUMsQUFDbkIsWUFBWSxDQUFFLEdBQUcsQ0FDakIsU0FBUyxDQUFFLE1BQU0sSUFBSSxDQUFDLEFBQzFCLENBQUMsQUFHRCx3Q0FBVSxNQUFNLEFBQUMsQ0FBQyxBQUNkLE9BQU8sQ0FBRSxJQUFJLEFBQ2pCLENBQUMsQUFDRCxrQkFBa0IsOEJBQUMsQ0FBQyxBQUFDLEtBQUssQ0FBRSxXQUFXLENBQUUsT0FBTyxDQUFFLElBQUksQ0FBRSxXQUFXLENBQUUsTUFBTSxDQUFFLEtBQUssQ0FBRSxJQUFJLEFBQUUsQ0FBQyxBQUUzRixnQkFBZ0IsOEJBQUMsQ0FBQyxBQUNkLFdBQVcsQ0FBRSxLQUFLLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxVQUFVLENBQ3pDLFNBQVMsQ0FBRSxJQUFJLENBQ2YsV0FBVyxDQUFFLEdBQUcsQ0FDaEIsV0FBVyxDQUFFLElBQUksQ0FDakIsS0FBSyxDQUFFLElBQUksQ0FDWCxhQUFhLENBQUUsSUFBSSxBQUN2QixDQUFDLEFBQ0QsaUJBQWlCLDhCQUFDLENBQUMsQUFDZixPQUFPLENBQUUsSUFBSSxDQUNiLGVBQWUsQ0FBRSxhQUFhLEFBQ2xDLENBQUMsQUFDRCxvQkFBb0IsOEJBQUMsQ0FBQyxBQUNsQixPQUFPLENBQUUsSUFBSSxDQUNiLGVBQWUsQ0FBRSxhQUFhLENBQzlCLFdBQVcsQ0FBRSxNQUFNLEFBQ3ZCLENBQUMsQUFDRCxtQ0FBb0IsQ0FBRyxxQkFBTSxDQUFFLG1DQUFvQixDQUFHLEdBQUcsZUFBQyxDQUFDLEFBQUMsV0FBVyxDQUFFLElBQUksQUFBRSxDQUFDLEFBQ2hGLG1DQUFvQixDQUFHLHFCQUFNLFlBQVksQUFBQyxDQUFDLEFBQUMsV0FBVyxDQUFFLENBQUMsQUFBRSxDQUFDLEFBRTdELGdCQUFnQiw4QkFBQyxDQUFDLEFBQ2QsV0FBVyxDQUFFLElBQUksQ0FBQyxVQUFVLENBQzVCLFVBQVUsQ0FBRSxLQUFLLEFBQ3JCLENBQUMsQUFFRCxXQUFXLGlDQUFtQixDQUFDLEFBQzNCLElBQUksQUFBQyxDQUFDLEFBQ0YsTUFBTSxDQUFFLE1BQU0sQUFDbEIsQ0FBQyxBQUNELEVBQUUsQUFBQyxDQUFDLEFBQ0EsTUFBTSxDQUFFLENBQUMsQUFDYixDQUFDLEFBQ0wsQ0FBQyxBQUNELFdBQVcsa0NBQW9CLENBQUMsQUFDNUIsSUFBSSxBQUFDLENBQUMsQUFDRixNQUFNLENBQUUsQ0FBQyxBQUNiLENBQUMsQUFDRCxFQUFFLEFBQUMsQ0FBQyxBQUNBLE1BQU0sQ0FBRSxNQUFNLEFBQ2xCLENBQUMsQUFDTCxDQUFDLEFBRUQsZ0JBQWdCLDhCQUFDLENBQUMsQUFDZCxRQUFRLENBQUUsS0FBSyxDQUNmLE9BQU8sQ0FBRSxLQUFLLENBQ2QsS0FBSyxDQUFFLElBQUksQ0FDWCxJQUFJLENBQUUsR0FBRyxDQUNULHlCQUF5QixDQUFFLENBQUMsQ0FDNUIsMEJBQTBCLENBQUUsQ0FBQyxDQUM3QixTQUFTLENBQUUsV0FBVyxJQUFJLENBQUMsQUFDL0IsQ0FBQyxBQUNELHlCQUF5Qiw4QkFBQyxDQUFDLEFBQ3ZCLE1BQU0sQ0FBRSxDQUFDLENBQ1Qsa0JBQWtCLENBQUUsRUFBRSxDQUN0QixjQUFjLENBQUUsaUNBQ3BCLENBQUMsQUFDRCwwQkFBMEIsOEJBQUMsQ0FBQyxBQUN4QixNQUFNLENBQUUsTUFBTSxDQUNkLGtCQUFrQixDQUFFLElBQUksQ0FDeEIsY0FBYyxDQUFFLGtDQUNwQixDQUFDLEFBQ0QsK0JBQWdCLENBQUMsZ0JBQWdCLGVBQUMsQ0FBQyxBQUFDLE9BQU8sQ0FBRSxJQUFJLEFBQUUsQ0FBQyxBQUNwRCwrQkFBZ0IsQ0FBQyxnQkFBZ0IsZUFBQyxDQUFDLEFBQUMsU0FBUyxDQUFFLENBQUMsQ0FBRSxVQUFVLENBQUUsTUFBTSxBQUFFLENBQUMsQUFFdkUsT0FBTyxHQUFHLENBQUMsR0FBRyxDQUFDLFlBQVksS0FBSyxDQUFDLEFBQUMsQ0FBQyxBQUMvQixnQkFBZ0IsOEJBQUMsQ0FBQyxBQUFDLEtBQUssQ0FBRSxJQUFJLEFBQUUsQ0FBQyxBQUNqQywrQkFBZ0IsQ0FBQyxpQ0FBa0IsQ0FDbkMseUJBQVUsQ0FBQyxrQkFBa0IsZUFBQyxDQUFDLEFBQUMsT0FBTyxDQUFFLElBQUksQUFBRSxDQUFDLEFBQ2hELGdCQUFnQiw4QkFBQyxDQUFDLEFBQUMsU0FBUyxDQUFFLENBQUMsQ0FBRSxVQUFVLENBQUUsTUFBTSxBQUFFLENBQUMsQUFDMUQsQ0FBQyJ9 */";
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

  var document_1$1 = globals.document;
  var file$2 = "views/pk-frontend-player.svelte";

  function add_css$2() {
    var style = element("style");
    style.id = "svelte-1iosxkz-style";
    style.textContent = ".pk-button.svelte-1iosxkz.svelte-1iosxkz{padding:0;margin:0;background-color:transparent;border:none;cursor:pointer;line-height:0}.pk-button.svelte-1iosxkz:hover svg.svelte-1iosxkz{fill-opacity:0.8}.pk-button.svelte-1iosxkz:active svg.svelte-1iosxkz{fill-opacity:0.5;transform:scale(0.95)}.pk-button.svelte-1iosxkz.svelte-1iosxkz:focus{outline:none}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGstZnJvbnRlbmQtcGxheWVyLnN2ZWx0ZSIsInNvdXJjZXMiOlsicGstZnJvbnRlbmQtcGxheWVyLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxuaW1wb3J0IHsgb25Nb3VudCB9IGZyb20gJ3N2ZWx0ZSc7XG5pbXBvcnQgUGxheWVyIGZyb20gJy4vcGstcGxheWVyLnN2ZWx0ZSc7XG5cbmV4cG9ydCBsZXQgcG9kY2FzdFVSTCA9IG51bGw7XG5leHBvcnQgbGV0IGxvY2tUaW1lSW5TZWNvbmRzID0gbnVsbDtcbmV4cG9ydCBsZXQgcG9kY2FzdExvY2tBdWRpb1VSTCA9IG51bGw7XG5leHBvcnQgbGV0IHRleHRUcmFuc2xhdGlvbnMgPSB7fTtcblxubGV0IHBsYXllckNvbXBvbmVudDtcbmxldCBjdXJyZW50VGltZUluU2Vjb25kcztcblxubGV0IGJvb2ttYXJrcyA9IFtdO1xubGV0IGJvb2ttYXJrVGltZXMgPSBbXTtcblxub25Nb3VudCgoKSA9PiB7XG5cbiAgICBib29rbWFya3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGstcG9kY2FzdC1ib29rbWFyaycpO1xuICAgIGlmICggMCAhPT0gYm9va21hcmtzLmxlbmd0aCApIHtcbiAgICAgICAgZm9yKCBsZXQgaSA9IDA7IGkgPCBib29rbWFya3MubGVuZ3RoOyBpKysgKSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmICggTnVtYmVyLmlzSW50ZWdlciggcGFyc2VJbnQoYm9va21hcmtzW2ldLmRhdGFzZXQudGltZSkgKSApIHtcbiAgICAgICAgICAgICAgICBib29rbWFya1RpbWVzLnB1c2goIHBhcnNlSW50KGJvb2ttYXJrc1tpXS5kYXRhc2V0LnRpbWUpICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGJvb2ttYXJrc1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcblxuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoIE51bWJlci5pc0ludGVnZXIoIHBhcnNlSW50KHRoaXMuZGF0YXNldC50aW1lKSApICkge1xuICAgICAgICAgICAgICAgICAgICBwbGF5ZXJDb21wb25lbnQudXBkYXRlUGxheWVyQ3VycmVudFRpbWUodGhpcy5kYXRhc2V0LnRpbWUpO1xuICAgICAgICAgICAgICAgICAgICBwbGF5ZXJDb21wb25lbnQucGxheUlmUGF1c2VkKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge2NhcHR1cmU6IHRydWV9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJvb2ttYXJrVGltZXMuc29ydCggKGEsIGIpID0+IHsgcmV0dXJuIGIgLSBhOyB9ICk7XG4gICAgfVxufSk7XG5cbmZ1bmN0aW9uIGp1bXBUb0Jvb2ttYXJrKCkge1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBib29rbWFya1RpbWVzLmxlbmd0aDsgaSsrICkge1xuICAgICAgICBpZiAoIGN1cnJlbnRUaW1lSW5TZWNvbmRzID49IGJvb2ttYXJrVGltZXNbaV0gKSB7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiI1wiK2Jvb2ttYXJrVGltZXNbaV07XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbn1cblxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbi5way1idXR0b24ge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgbGluZS1oZWlnaHQ6IDA7XG59XG4ucGstYnV0dG9uOmhvdmVyIHN2ZyB7XG4gICAgZmlsbC1vcGFjaXR5OiAwLjg7XG59XG4ucGstYnV0dG9uOmFjdGl2ZSBzdmcge1xuICAgIGZpbGwtb3BhY2l0eTogMC41O1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XG59XG4vKiogVE9ETzog0LTQu9GPINGE0L7QutGD0YHQsCDQv9C+0YHQu9C1INC90LDQttCw0YLQuNGPINC90LAg0LrQu9Cw0LLQtSDQvdCw0LTQviDRgNCw0LzQutGDINC/0L7QutCw0LfRi9Cy0LDRgtGMIFxu0YLQv9C40YfQvdGD0Y4g0LLQvtC60YDRg9CzINGN0LvQtdC80LXQvdGC0L7QsiDQsCDQv9C+0YHQu9C1INC60LvQuNC60LAg0LzRi9GI0LrQvtC5INC40LvQuCDRgtCw0YfQsCDQv9GA0Y/RgtCw0YLRjCAqL1xuLnBrLWJ1dHRvbjpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbn1cblxuPC9zdHlsZT5cblxuPFBsYXllciBhdWRpb1VSTD17cG9kY2FzdFVSTH0gbG9ja1RpbWVJblNlY29uZHM9e2xvY2tUaW1lSW5TZWNvbmRzfSBiaW5kOmN1cnJlbnRUaW1lSW5TZWNvbmRzPXtjdXJyZW50VGltZUluU2Vjb25kc31cbiAgICBiaW5kOnRoaXM9e3BsYXllckNvbXBvbmVudH0gbG9ja0F1ZGlvVVJMPXtwb2RjYXN0TG9ja0F1ZGlvVVJMfSBiaW5kOnRleHRUcmFuc2xhdGlvbnM9e3RleHRUcmFuc2xhdGlvbnN9PlxuXG4gICAgeyNpZiBudWxsICE9PSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGstcG9kY2FzdC1ib29rbWFyaycpfVxuXG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJway1idXR0b25cIiB0aXRsZT1cInt0ZXh0VHJhbnNsYXRpb25zLmp1bXBUb0Jvb2ttYXJrfVwiIHN0eWxlPVwibWFyZ2luLWxlZnQ6IDIwcHg7XCJcbiAgICAgICAgICAgIG9uOmNsaWNrfHByZXZlbnREZWZhdWx0fHN0b3BQcm9wYWdhdGlvbj17anVtcFRvQm9va21hcmt9PlxuICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjMyXCIgaGVpZ2h0PVwiMzJcIiB2aWV3Qm94PVwiMCAwIDMyIDMyXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGQ9XCJNMCAzMnYtMy45OTJsMzEuOTk0LS4wMDJMMzEuOTkyIDMySDB6bTAtNi45OTZ2LTRoMzEuOTk2djRIMHptNy45OTgtNi4wMDJMMCAxMWg1TDQuOTk4LjAwMmg2TDExIDExaDVsLTguMDAyIDguMDAyek0xOCAxOHYtNGgxNHY0SDE4em0tLjAwNi02Ljk5NHYtNGgxNHY0aC0xNHptLjAwMi03LjAwMnYtNGwxMy45OTYuMDA0LjAwNCAzLjk5NmgtMTR6XCIgZmlsbD1cIiNmZmZcIi8+PC9zdmc+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgIHsvaWZ9XG48L1BsYXllcj4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcURBLFVBQVUsOEJBQUMsQ0FBQyxBQUNSLE9BQU8sQ0FBRSxDQUFDLENBQ1YsTUFBTSxDQUFFLENBQUMsQ0FDVCxnQkFBZ0IsQ0FBRSxXQUFXLENBQzdCLE1BQU0sQ0FBRSxJQUFJLENBQ1osTUFBTSxDQUFFLE9BQU8sQ0FDZixXQUFXLENBQUUsQ0FBQyxBQUNsQixDQUFDLEFBQ0QseUJBQVUsTUFBTSxDQUFDLEdBQUcsZUFBQyxDQUFDLEFBQ2xCLFlBQVksQ0FBRSxHQUFHLEFBQ3JCLENBQUMsQUFDRCx5QkFBVSxPQUFPLENBQUMsR0FBRyxlQUFDLENBQUMsQUFDbkIsWUFBWSxDQUFFLEdBQUcsQ0FDakIsU0FBUyxDQUFFLE1BQU0sSUFBSSxDQUFDLEFBQzFCLENBQUMsQUFHRCx3Q0FBVSxNQUFNLEFBQUMsQ0FBQyxBQUNkLE9BQU8sQ0FBRSxJQUFJLEFBQ2pCLENBQUMifQ== */";
    append_dev(document_1$1.head, style);
  } // (80:4) {#if null !== document.querySelector('.pk-podcast-bookmark')}


  function create_if_block$2(ctx) {
    var button;
    var svg;
    var path;
    var button_title_value;
    var dispose;
    var block = {
      c: function create() {
        button = element("button");
        svg = svg_element("svg");
        path = svg_element("path");
        attr_dev(path, "d", "M0 32v-3.992l31.994-.002L31.992 32H0zm0-6.996v-4h31.996v4H0zm7.998-6.002L0 11h5L4.998.002h6L11 11h5l-8.002 8.002zM18 18v-4h14v4H18zm-.006-6.994v-4h14v4h-14zm.002-7.002v-4l13.996.004.004 3.996h-14z");
        attr_dev(path, "fill", "#fff");
        add_location(path, file$2, 83, 95, 2380);
        attr_dev(svg, "width", "32");
        attr_dev(svg, "height", "32");
        attr_dev(svg, "viewBox", "0 0 32 32");
        attr_dev(svg, "xmlns", "http://www.w3.org/2000/svg");
        attr_dev(svg, "class", "svelte-1iosxkz");
        add_location(svg, file$2, 83, 12, 2297);
        attr_dev(button, "class", "pk-button svelte-1iosxkz");
        attr_dev(button, "title", button_title_value =
        /*textTranslations*/
        ctx[0].jumpToBookmark);
        set_style(button, "margin-left", "20px");
        add_location(button, file$2, 81, 8, 2120);
      },
      m: function mount(target, anchor, remount) {
        insert_dev(target, button, anchor);
        append_dev(button, svg);
        append_dev(svg, path);
        if (remount) dispose();
        dispose = listen_dev(button, "click", stop_propagation(prevent_default(
        /*jumpToBookmark*/
        ctx[6])), false, true, true);
      },
      p: function update(ctx, dirty) {
        if (dirty &
        /*textTranslations*/
        1 && button_title_value !== (button_title_value =
        /*textTranslations*/
        ctx[0].jumpToBookmark)) {
          attr_dev(button, "title", button_title_value);
        }
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(button);
        dispose();
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_if_block$2.name,
      type: "if",
      source: "(80:4) {#if null !== document.querySelector('.pk-podcast-bookmark')}",
      ctx: ctx
    });
    return block;
  } // (77:0) <Player audioURL={podcastURL} lockTimeInSeconds={lockTimeInSeconds} bind:currentTimeInSeconds={currentTimeInSeconds}     bind:this={playerComponent} lockAudioURL={podcastLockAudioURL} bind:textTranslations={textTranslations}>


  function create_default_slot(ctx) {
    var show_if = null !== document.querySelector(".pk-podcast-bookmark");
    var if_block_anchor;
    var if_block = show_if && create_if_block$2(ctx);
    var block = {
      c: function create() {
        if (if_block) if_block.c();
        if_block_anchor = empty();
      },
      m: function mount(target, anchor) {
        if (if_block) if_block.m(target, anchor);
        insert_dev(target, if_block_anchor, anchor);
      },
      p: function update(ctx, dirty) {
        if (show_if) if_block.p(ctx, dirty);
      },
      d: function destroy(detaching) {
        if (if_block) if_block.d(detaching);
        if (detaching) detach_dev(if_block_anchor);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_default_slot.name,
      type: "slot",
      source: "(77:0) <Player audioURL={podcastURL} lockTimeInSeconds={lockTimeInSeconds} bind:currentTimeInSeconds={currentTimeInSeconds}     bind:this={playerComponent} lockAudioURL={podcastLockAudioURL} bind:textTranslations={textTranslations}>",
      ctx: ctx
    });
    return block;
  }

  function create_fragment$2(ctx) {
    var updating_currentTimeInSeconds;
    var updating_textTranslations;
    var current;

    function player_currentTimeInSeconds_binding(value) {
      /*player_currentTimeInSeconds_binding*/
      ctx[9].call(null, value);
    }

    function player_textTranslations_binding(value) {
      /*player_textTranslations_binding*/
      ctx[11].call(null, value);
    }

    var player_props = {
      audioURL:
      /*podcastURL*/
      ctx[1],
      lockTimeInSeconds:
      /*lockTimeInSeconds*/
      ctx[2],
      lockAudioURL:
      /*podcastLockAudioURL*/
      ctx[3],
      $$slots: {
        default: [create_default_slot]
      },
      $$scope: {
        ctx: ctx
      }
    };

    if (
    /*currentTimeInSeconds*/
    ctx[5] !== void 0) {
      player_props.currentTimeInSeconds =
      /*currentTimeInSeconds*/
      ctx[5];
    }

    if (
    /*textTranslations*/
    ctx[0] !== void 0) {
      player_props.textTranslations =
      /*textTranslations*/
      ctx[0];
    }

    var player = new Pk_player({
      props: player_props,
      $$inline: true
    });
    binding_callbacks.push(function () {
      return bind(player, "currentTimeInSeconds", player_currentTimeInSeconds_binding);
    });
    /*player_binding*/

    ctx[10](player);
    binding_callbacks.push(function () {
      return bind(player, "textTranslations", player_textTranslations_binding);
    });
    var block = {
      c: function create() {
        create_component(player.$$.fragment);
      },
      l: function claim(nodes) {
        throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
      },
      m: function mount(target, anchor) {
        mount_component(player, target, anchor);
        current = true;
      },
      p: function update(ctx, _ref) {
        var _ref2 = _slicedToArray(_ref, 1),
            dirty = _ref2[0];

        var player_changes = {};
        if (dirty &
        /*podcastURL*/
        2) player_changes.audioURL =
        /*podcastURL*/
        ctx[1];
        if (dirty &
        /*lockTimeInSeconds*/
        4) player_changes.lockTimeInSeconds =
        /*lockTimeInSeconds*/
        ctx[2];
        if (dirty &
        /*podcastLockAudioURL*/
        8) player_changes.lockAudioURL =
        /*podcastLockAudioURL*/
        ctx[3];

        if (dirty &
        /*$$scope, textTranslations*/
        4097) {
          player_changes.$$scope = {
            dirty: dirty,
            ctx: ctx
          };
        }

        if (!updating_currentTimeInSeconds && dirty &
        /*currentTimeInSeconds*/
        32) {
          updating_currentTimeInSeconds = true;
          player_changes.currentTimeInSeconds =
          /*currentTimeInSeconds*/
          ctx[5];
          add_flush_callback(function () {
            return updating_currentTimeInSeconds = false;
          });
        }

        if (!updating_textTranslations && dirty &
        /*textTranslations*/
        1) {
          updating_textTranslations = true;
          player_changes.textTranslations =
          /*textTranslations*/
          ctx[0];
          add_flush_callback(function () {
            return updating_textTranslations = false;
          });
        }

        player.$set(player_changes);
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
        /*player_binding*/
        ctx[10](null);
        destroy_component(player, detaching);
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

  function instance$2($$self, $$props, $$invalidate) {
    var _$$props$podcastURL = $$props.podcastURL,
        podcastURL = _$$props$podcastURL === void 0 ? null : _$$props$podcastURL;
    var _$$props$lockTimeInSe = $$props.lockTimeInSeconds,
        lockTimeInSeconds = _$$props$lockTimeInSe === void 0 ? null : _$$props$lockTimeInSe;
    var _$$props$podcastLockA = $$props.podcastLockAudioURL,
        podcastLockAudioURL = _$$props$podcastLockA === void 0 ? null : _$$props$podcastLockA;
    var _$$props$textTranslat = $$props.textTranslations,
        textTranslations = _$$props$textTranslat === void 0 ? {} : _$$props$textTranslat;
    var playerComponent;
    var currentTimeInSeconds;
    var bookmarks = [];
    var bookmarkTimes = [];
    onMount(function () {
      bookmarks = document.querySelectorAll(".pk-podcast-bookmark");

      if (0 !== bookmarks.length) {
        for (var i = 0; i < bookmarks.length; i++) {
          if (Number.isInteger(parseInt(bookmarks[i].dataset.time))) {
            bookmarkTimes.push(parseInt(bookmarks[i].dataset.time));
          }

          bookmarks[i].addEventListener("click", function (e) {
            e.stopPropagation();

            if (Number.isInteger(parseInt(this.dataset.time))) {
              playerComponent.updatePlayerCurrentTime(this.dataset.time);
              playerComponent.playIfPaused();
            }
          }, {
            capture: true
          });
        }

        bookmarkTimes.sort(function (a, b) {
          return b - a;
        });
      }
    });

    function jumpToBookmark() {
      for (var i = 0; i < bookmarkTimes.length; i++) {
        if (currentTimeInSeconds >= bookmarkTimes[i]) {
          window.location.href = "#" + bookmarkTimes[i];
          break;
        }
      }
    }

    var writable_props = ["podcastURL", "lockTimeInSeconds", "podcastLockAudioURL", "textTranslations"];
    Object.keys($$props).forEach(function (key) {
      if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Pk_frontend_player> was created with unknown prop '".concat(key, "'"));
    });
    var _$$props$$$slots = $$props.$$slots,
        $$slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
        $$scope = $$props.$$scope;
    validate_slots("Pk_frontend_player", $$slots, []);

    function player_currentTimeInSeconds_binding(value) {
      currentTimeInSeconds = value;
      $$invalidate(5, currentTimeInSeconds);
    }

    function player_binding($$value) {
      binding_callbacks[$$value ? "unshift" : "push"](function () {
        $$invalidate(4, playerComponent = $$value);
      });
    }

    function player_textTranslations_binding(value) {
      textTranslations = value;
      $$invalidate(0, textTranslations);
    }

    $$self.$set = function ($$props) {
      if ("podcastURL" in $$props) $$invalidate(1, podcastURL = $$props.podcastURL);
      if ("lockTimeInSeconds" in $$props) $$invalidate(2, lockTimeInSeconds = $$props.lockTimeInSeconds);
      if ("podcastLockAudioURL" in $$props) $$invalidate(3, podcastLockAudioURL = $$props.podcastLockAudioURL);
      if ("textTranslations" in $$props) $$invalidate(0, textTranslations = $$props.textTranslations);
    };

    $$self.$capture_state = function () {
      return {
        onMount: onMount,
        Player: Pk_player,
        podcastURL: podcastURL,
        lockTimeInSeconds: lockTimeInSeconds,
        podcastLockAudioURL: podcastLockAudioURL,
        textTranslations: textTranslations,
        playerComponent: playerComponent,
        currentTimeInSeconds: currentTimeInSeconds,
        bookmarks: bookmarks,
        bookmarkTimes: bookmarkTimes,
        jumpToBookmark: jumpToBookmark
      };
    };

    $$self.$inject_state = function ($$props) {
      if ("podcastURL" in $$props) $$invalidate(1, podcastURL = $$props.podcastURL);
      if ("lockTimeInSeconds" in $$props) $$invalidate(2, lockTimeInSeconds = $$props.lockTimeInSeconds);
      if ("podcastLockAudioURL" in $$props) $$invalidate(3, podcastLockAudioURL = $$props.podcastLockAudioURL);
      if ("textTranslations" in $$props) $$invalidate(0, textTranslations = $$props.textTranslations);
      if ("playerComponent" in $$props) $$invalidate(4, playerComponent = $$props.playerComponent);
      if ("currentTimeInSeconds" in $$props) $$invalidate(5, currentTimeInSeconds = $$props.currentTimeInSeconds);
      if ("bookmarks" in $$props) bookmarks = $$props.bookmarks;
      if ("bookmarkTimes" in $$props) bookmarkTimes = $$props.bookmarkTimes;
    };

    if ($$props && "$$inject" in $$props) {
      $$self.$inject_state($$props.$$inject);
    }

    return [textTranslations, podcastURL, lockTimeInSeconds, podcastLockAudioURL, playerComponent, currentTimeInSeconds, jumpToBookmark, bookmarks, bookmarkTimes, player_currentTimeInSeconds_binding, player_binding, player_textTranslations_binding];
  }

  var Pk_frontend_player = /*#__PURE__*/function (_SvelteComponentDev) {
    _inherits(Pk_frontend_player, _SvelteComponentDev);

    var _super = _createSuper(Pk_frontend_player);

    function Pk_frontend_player(options) {
      var _this;

      _classCallCheck(this, Pk_frontend_player);

      _this = _super.call(this, options);
      if (!document_1$1.getElementById("svelte-1iosxkz-style")) add_css$2();
      init(_assertThisInitialized(_this), options, instance$2, create_fragment$2, safe_not_equal, {
        podcastURL: 1,
        lockTimeInSeconds: 2,
        podcastLockAudioURL: 3,
        textTranslations: 0
      });
      dispatch_dev("SvelteRegisterComponent", {
        component: _assertThisInitialized(_this),
        tagName: "Pk_frontend_player",
        options: options,
        id: create_fragment$2.name
      });
      return _this;
    }

    _createClass(Pk_frontend_player, [{
      key: "podcastURL",
      get: function get() {
        throw new Error("<Pk_frontend_player>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      },
      set: function set(value) {
        throw new Error("<Pk_frontend_player>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      }
    }, {
      key: "lockTimeInSeconds",
      get: function get() {
        throw new Error("<Pk_frontend_player>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      },
      set: function set(value) {
        throw new Error("<Pk_frontend_player>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      }
    }, {
      key: "podcastLockAudioURL",
      get: function get() {
        throw new Error("<Pk_frontend_player>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      },
      set: function set(value) {
        throw new Error("<Pk_frontend_player>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      }
    }, {
      key: "textTranslations",
      get: function get() {
        throw new Error("<Pk_frontend_player>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      },
      set: function set(value) {
        throw new Error("<Pk_frontend_player>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      }
    }]);

    return Pk_frontend_player;
  }(SvelteComponentDev);

  var pkApp;

  if ('pk-frontend-player-view' === pkScriptData.currentPkView) {
    pkApp = new Pk_frontend_player({
      target: document.getElementById('pk-frontend-player-view'),
      props: {
        podcastURL: pkScriptData.podcastURL,
        lockTimeInSeconds: pkScriptData.podcastLockTime,
        podcastLockAudioURL: pkScriptData.podcastLockAudioURL,
        textTranslations: pkScriptData.textTranslations
      }
    });
  }

}());
