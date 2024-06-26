/*---------------------------------
    Plugins Index
    ----------------------
    jquery Appear
    SlickNav
    The Final Countdown
    jQuery Nice Select
    Slick Slider
    Leaflet // Map
    Magnific Popup
    sticky-sidebar
    jQuery ajaxChimp
    Paraxify.js
    Isotope
    AOS Js
    jQuery UI
    Lightgallery
    Zoom 1.7.21
    Appear Js
    imagesLoaded
------------------------------------*/

/*
 * jQuery.appear
 * https://github.com/bas2k/jquery.appear/
 * http://code.google.com/p/jquery-appear/
 * http://bas2k.ru/
 */

!(function (e) {
  (e.fn.appear = function (a, r) {
    var p = e.extend({ data: void 0, one: !0, accX: 0, accY: 0 }, r);
    return this.each(function () {
      var r = e(this);
      if (((r.appeared = !1), a)) {
        var n = e(window),
          t = function () {
            if (r.is(":visible")) {
              var e = n.scrollLeft(),
                a = n.scrollTop(),
                t = r.offset(),
                c = t.left,
                i = t.top,
                o = p.accX,
                f = p.accY,
                s = r.height(),
                l = n.height(),
                h = r.width(),
                d = n.width();
              i + s + f >= a &&
              i <= a + l + f &&
              c + h + o >= e &&
              c <= e + d + o
                ? r.appeared || r.trigger("appear", p.data)
                : (r.appeared = !1);
            } else r.appeared = !1;
          },
          c = function () {
            if (((r.appeared = !0), p.one)) {
              n.unbind("scroll", t);
              var c = e.inArray(t, e.fn.appear.checks);
              c >= 0 && e.fn.appear.checks.splice(c, 1);
            }
            a.apply(this, arguments);
          };
        p.one ? r.one("appear", p.data, c) : r.bind("appear", p.data, c),
          n.scroll(t),
          e.fn.appear.checks.push(t),
          t();
      } else r.trigger("appear", p.data);
    });
  }),
    e.extend(e.fn.appear, {
      checks: [],
      timeout: null,
      checkAll: function () {
        var a = e.fn.appear.checks.length;
        if (a > 0) for (; a--; ) e.fn.appear.checks[a]();
      },
      run: function () {
        e.fn.appear.timeout && clearTimeout(e.fn.appear.timeout),
          (e.fn.appear.timeout = setTimeout(e.fn.appear.checkAll, 20));
      },
    }),
    e.each(
      [
        "append",
        "prepend",
        "after",
        "before",
        "attr",
        "removeAttr",
        "addClass",
        "removeClass",
        "toggleClass",
        "remove",
        "css",
        "show",
        "hide",
      ],
      function (a, r) {
        var p = e.fn[r];
        p &&
          (e.fn[r] = function () {
            var a = p.apply(this, arguments);
            return e.fn.appear.run(), a;
          });
      }
    );
})(jQuery);

/*!
 * SlickNav Responsive Mobile Menu v1.0.10
 * (c) 2016 Josh Cope
 * licensed under MIT
 */
!(function (e, t, n) {
  function a(t, n) {
    (this.element = t),
      (this.settings = e.extend({}, i, n)),
      this.settings.duplicate ||
        n.hasOwnProperty("removeIds") ||
        (this.settings.removeIds = !1),
      (this._defaults = i),
      (this._name = s),
      this.init();
  }
  var i = {
      label: "MENU",
      duplicate: !0,
      duration: 200,
      easingOpen: "swing",
      easingClose: "swing",
      closedSymbol: "&#9658;",
      openedSymbol: "&#9660;",
      prependTo: "body",
      appendTo: "",
      parentTag: "a",
      closeOnClick: !1,
      allowParentLinks: !1,
      nestedParentLinks: !0,
      showChildren: !1,
      removeIds: !0,
      removeClasses: !1,
      removeStyles: !1,
      brand: "",
      animations: "jquery",
      init: function () {},
      beforeOpen: function () {},
      beforeClose: function () {},
      afterOpen: function () {},
      afterClose: function () {},
    },
    s = "slicknav",
    o = "slicknav",
    l = 40,
    r = 13,
    c = 27,
    p = 37,
    d = 39,
    u = 32,
    m = 38;
  (a.prototype.init = function () {
    var n,
      a,
      i = this,
      s = e(this.element),
      h = this.settings;
    if (
      (h.duplicate ? (i.mobileNav = s.clone()) : (i.mobileNav = s),
      h.removeIds &&
        (i.mobileNav.removeAttr("id"),
        i.mobileNav.find("*").each(function (t, n) {
          e(n).removeAttr("id");
        })),
      h.removeClasses &&
        (i.mobileNav.removeAttr("class"),
        i.mobileNav.find("*").each(function (t, n) {
          e(n).removeAttr("class");
        })),
      h.removeStyles &&
        (i.mobileNav.removeAttr("style"),
        i.mobileNav.find("*").each(function (t, n) {
          e(n).removeAttr("style");
        })),
      (n = o + "_icon"),
      "" === h.label && (n += " " + o + "_no-text"),
      "a" == h.parentTag && (h.parentTag = 'a href="#"'),
      i.mobileNav.attr("class", o + "_nav"),
      (a = e('<div class="' + o + '_menu"></div>')),
      "" !== h.brand)
    ) {
      var v = e('<div class="' + o + '_brand">' + h.brand + "</div>");
      e(a).append(v);
    }
    (i.btn = e(
      [
        "<" +
          h.parentTag +
          ' aria-haspopup="true" role="button" tabindex="0" class="' +
          o +
          "_btn " +
          o +
          '_collapsed">',
        '<span class="' + o + '_menutxt">' + h.label + "</span>",
        '<span class="' + n + '">',
        '<span class="' + o + '_icon-bar"></span>',
        '<span class="' + o + '_icon-bar"></span>',
        '<span class="' + o + '_icon-bar"></span>',
        "</span>",
        "</" + h.parentTag + ">",
      ].join("")
    )),
      e(a).append(i.btn),
      "" !== h.appendTo ? e(h.appendTo).append(a) : e(h.prependTo).prepend(a),
      a.append(i.mobileNav);
    var f = i.mobileNav.find("li");
    e(f).each(function () {
      var t = e(this),
        n = {};
      if (
        ((n.children = t.children("ul").attr("role", "menu")),
        t.data("menu", n),
        n.children.length > 0)
      ) {
        var a = t.contents(),
          s = !1,
          l = [];
        e(a).each(function () {
          return (
            !e(this).is("ul") &&
            (l.push(this), void (e(this).is("a") && (s = !0)))
          );
        });
        var r = e(
          "<" +
            h.parentTag +
            ' role="menuitem" aria-haspopup="true" tabindex="-1" class="' +
            o +
            '_item"/>'
        );
        if (h.allowParentLinks && !h.nestedParentLinks && s)
          e(l)
            .wrapAll('<span class="' + o + "_parent-link " + o + '_row"/>')
            .parent();
        else
          e(l)
            .wrapAll(r)
            .parent()
            .addClass(o + "_row");
        h.showChildren ? t.addClass(o + "_open") : t.addClass(o + "_collapsed"),
          t.addClass(o + "_parent");
        var c = e(
          '<span class="' +
            o +
            '_arrow">' +
            (h.showChildren ? h.openedSymbol : h.closedSymbol) +
            "</span>"
        );
        h.allowParentLinks &&
          !h.nestedParentLinks &&
          s &&
          (c = c.wrap(r).parent()),
          e(l).last().after(c);
      } else 0 === t.children().length && t.addClass(o + "_txtnode");
      t
        .children("a")
        .attr("role", "menuitem")
        .click(function (t) {
          h.closeOnClick &&
            !e(t.target)
              .parent()
              .closest("li")
              .hasClass(o + "_parent") &&
            e(i.btn).click();
        }),
        h.closeOnClick &&
          h.allowParentLinks &&
          (t
            .children("a")
            .children("a")
            .click(function (t) {
              e(i.btn).click();
            }),
          t
            .find("." + o + "_parent-link a:not(." + o + "_item)")
            .click(function (t) {
              e(i.btn).click();
            }));
    }),
      e(f).each(function () {
        var t = e(this).data("menu");
        h.showChildren || i._visibilityToggle(t.children, null, !1, null, !0);
      }),
      i._visibilityToggle(i.mobileNav, null, !1, "init", !0),
      i.mobileNav.attr("role", "menu"),
      e(t).mousedown(function () {
        i._outlines(!1);
      }),
      e(t).keyup(function () {
        i._outlines(!0);
      }),
      e(i.btn).click(function (e) {
        e.preventDefault(), i._menuToggle();
      }),
      i.mobileNav.on("click", "." + o + "_item", function (t) {
        t.preventDefault(), i._itemClick(e(this));
      }),
      e(i.btn).keydown(function (t) {
        var n = t || event;
        switch (n.keyCode) {
          case r:
          case u:
          case l:
            t.preventDefault(),
              (n.keyCode === l && e(i.btn).hasClass(o + "_open")) ||
                i._menuToggle(),
              e(i.btn).next().find('[role="menuitem"]').first().focus();
        }
      }),
      i.mobileNav.on("keydown", "." + o + "_item", function (t) {
        switch ((t || event).keyCode) {
          case r:
            t.preventDefault(), i._itemClick(e(t.target));
            break;
          case d:
            t.preventDefault(),
              e(t.target)
                .parent()
                .hasClass(o + "_collapsed") && i._itemClick(e(t.target)),
              e(t.target).next().find('[role="menuitem"]').first().focus();
        }
      }),
      i.mobileNav.on("keydown", '[role="menuitem"]', function (t) {
        switch ((t || event).keyCode) {
          case l:
            t.preventDefault();
            var n =
              (s = (a = e(t.target)
                .parent()
                .parent()
                .children()
                .children('[role="menuitem"]:visible')).index(t.target)) + 1;
            a.length <= n && (n = 0), a.eq(n).focus();
            break;
          case m:
            t.preventDefault();
            var a,
              s = (a = e(t.target)
                .parent()
                .parent()
                .children()
                .children('[role="menuitem"]:visible')).index(t.target);
            a.eq(s - 1).focus();
            break;
          case p:
            if (
              (t.preventDefault(),
              e(t.target)
                .parent()
                .parent()
                .parent()
                .hasClass(o + "_open"))
            ) {
              var r = e(t.target).parent().parent().prev();
              r.focus(), i._itemClick(r);
            } else
              e(t.target)
                .parent()
                .parent()
                .hasClass(o + "_nav") && (i._menuToggle(), e(i.btn).focus());
            break;
          case c:
            t.preventDefault(), i._menuToggle(), e(i.btn).focus();
        }
      }),
      h.allowParentLinks &&
        h.nestedParentLinks &&
        e("." + o + "_item a").click(function (e) {
          e.stopImmediatePropagation();
        });
  }),
    (a.prototype._menuToggle = function (e) {
      var t = this,
        n = t.btn,
        a = t.mobileNav;
      n.hasClass(o + "_collapsed")
        ? (n.removeClass(o + "_collapsed"), n.addClass(o + "_open"))
        : (n.removeClass(o + "_open"), n.addClass(o + "_collapsed")),
        n.addClass(o + "_animating"),
        t._visibilityToggle(a, n.parent(), !0, n);
    }),
    (a.prototype._itemClick = function (e) {
      var t = this,
        n = t.settings,
        a = e.data("menu");
      a ||
        (((a = {}).arrow = e.children("." + o + "_arrow")),
        (a.ul = e.next("ul")),
        (a.parent = e.parent()),
        a.parent.hasClass(o + "_parent-link") &&
          ((a.parent = e.parent().parent()), (a.ul = e.parent().next("ul"))),
        e.data("menu", a)),
        a.parent.hasClass(o + "_collapsed")
          ? (a.arrow.html(n.openedSymbol),
            a.parent.removeClass(o + "_collapsed"),
            a.parent.addClass(o + "_open"),
            a.parent.addClass(o + "_animating"),
            t._visibilityToggle(a.ul, a.parent, !0, e))
          : (a.arrow.html(n.closedSymbol),
            a.parent.addClass(o + "_collapsed"),
            a.parent.removeClass(o + "_open"),
            a.parent.addClass(o + "_animating"),
            t._visibilityToggle(a.ul, a.parent, !0, e));
    }),
    (a.prototype._visibilityToggle = function (t, n, a, i, s) {
      function l(t, n) {
        e(t).removeClass(o + "_animating"),
          e(n).removeClass(o + "_animating"),
          s || p.afterOpen(t);
      }
      function r(n, a) {
        t.attr("aria-hidden", "true"),
          d.attr("tabindex", "-1"),
          c._setVisAttr(t, !0),
          t.hide(),
          e(n).removeClass(o + "_animating"),
          e(a).removeClass(o + "_animating"),
          s ? "init" == n && p.init() : p.afterClose(n);
      }
      var c = this,
        p = c.settings,
        d = c._getActionItems(t),
        u = 0;
      a && (u = p.duration),
        t.hasClass(o + "_hidden")
          ? (t.removeClass(o + "_hidden"),
            s || p.beforeOpen(i),
            "jquery" === p.animations
              ? t.stop(!0, !0).slideDown(u, p.easingOpen, function () {
                  l(i, n);
                })
              : "velocity" === p.animations &&
                t.velocity("finish").velocity("slideDown", {
                  duration: u,
                  easing: p.easingOpen,
                  complete: function () {
                    l(i, n);
                  },
                }),
            t.attr("aria-hidden", "false"),
            d.attr("tabindex", "0"),
            c._setVisAttr(t, !1))
          : (t.addClass(o + "_hidden"),
            s || p.beforeClose(i),
            "jquery" === p.animations
              ? t
                  .stop(!0, !0)
                  .slideUp(u, this.settings.easingClose, function () {
                    r(i, n);
                  })
              : "velocity" === p.animations &&
                t.velocity("finish").velocity("slideUp", {
                  duration: u,
                  easing: p.easingClose,
                  complete: function () {
                    r(i, n);
                  },
                }));
    }),
    (a.prototype._setVisAttr = function (t, n) {
      var a = this,
        i = t
          .children("li")
          .children("ul")
          .not("." + o + "_hidden");
      n
        ? i.each(function () {
            var t = e(this);
            t.attr("aria-hidden", "true"),
              a._getActionItems(t).attr("tabindex", "-1"),
              a._setVisAttr(t, n);
          })
        : i.each(function () {
            var t = e(this);
            t.attr("aria-hidden", "false"),
              a._getActionItems(t).attr("tabindex", "0"),
              a._setVisAttr(t, n);
          });
    }),
    (a.prototype._getActionItems = function (e) {
      var t = e.data("menu");
      if (!t) {
        t = {};
        var n = e.children("li"),
          a = n.find("a");
        (t.links = a.add(n.find("." + o + "_item"))), e.data("menu", t);
      }
      return t.links;
    }),
    (a.prototype._outlines = function (t) {
      t
        ? e("." + o + "_item, ." + o + "_btn").css("outline", "")
        : e("." + o + "_item, ." + o + "_btn").css("outline", "none");
    }),
    (a.prototype.toggle = function () {
      this._menuToggle();
    }),
    (a.prototype.open = function () {
      this.btn.hasClass(o + "_collapsed") && this._menuToggle();
    }),
    (a.prototype.close = function () {
      this.btn.hasClass(o + "_open") && this._menuToggle();
    }),
    (e.fn[s] = function (t) {
      var n,
        i = arguments;
      return void 0 === t || "object" == typeof t
        ? this.each(function () {
            e.data(this, "plugin_" + s) ||
              e.data(this, "plugin_" + s, new a(this, t));
          })
        : "string" == typeof t && "_" !== t[0] && "init" !== t
        ? (this.each(function () {
            var o = e.data(this, "plugin_" + s);
            o instanceof a &&
              "function" == typeof o[t] &&
              (n = o[t].apply(o, Array.prototype.slice.call(i, 1)));
          }),
          void 0 !== n ? n : this)
        : void 0;
    });
})(jQuery, document, window);
// End Slicknav JS

/*!
 * The Final Countdown for jQuery v2.2.0 (http://hilios.github.io/jQuery.countdown/)
 * Copyright (c) 2016 Edson Hilios
 */
!(function (t) {
  "use strict";
  "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery);
})(function (t) {
  "use strict";
  function e(t) {
    var e = t.toString().replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
    return new RegExp(e);
  }
  function s(t) {
    return function (s) {
      var i = s.match(/%(-|!)?[A-Z]{1}(:[^;]+;)?/gi);
      if (i)
        for (var o = 0, a = i.length; o < a; ++o) {
          var l = i[o].match(/%(-|!)?([a-zA-Z]{1})(:[^;]+;)?/),
            r = e(l[0]),
            c = l[1] || "",
            f = l[3] || "",
            u = null;
          (l = l[2]),
            h.hasOwnProperty(l) && ((u = h[l]), (u = Number(t[u]))),
            null !== u &&
              ("!" === c && (u = n(f, u)),
              "" === c && u < 10 && (u = "0" + u.toString()),
              (s = s.replace(r, u.toString())));
        }
      return s.replace(/%%/, "%");
    };
  }
  function n(t, e) {
    var s = "s",
      n = "";
    return (
      t &&
        (1 === (t = t.replace(/(:|;|\s)/gi, "").split(/\,/)).length
          ? (s = t[0])
          : ((n = t[0]), (s = t[1]))),
      Math.abs(e) > 1 ? s : n
    );
  }
  var i = [],
    o = [],
    a = { precision: 100, elapse: !1, defer: !1 };
  o.push(/^[0-9]*$/.source),
    o.push(/([0-9]{1,2}\/){2}[0-9]{4}( [0-9]{1,2}(:[0-9]{2}){2})?/.source),
    o.push(/[0-9]{4}([\/\-][0-9]{1,2}){2}( [0-9]{1,2}(:[0-9]{2}){2})?/.source),
    (o = new RegExp(o.join("|")));
  var h = {
      Y: "years",
      m: "months",
      n: "daysToMonth",
      d: "daysToWeek",
      w: "weeks",
      W: "weeksToMonth",
      H: "hours",
      M: "minutes",
      S: "seconds",
      D: "totalDays",
      I: "totalHours",
      N: "totalMinutes",
      T: "totalSeconds",
    },
    l = function (e, s, n) {
      (this.el = e),
        (this.$el = t(e)),
        (this.interval = null),
        (this.offset = {}),
        (this.options = t.extend({}, a)),
        (this.instanceNumber = i.length),
        i.push(this),
        this.$el.data("countdown-instance", this.instanceNumber),
        n &&
          ("function" == typeof n
            ? (this.$el.on("update.countdown", n),
              this.$el.on("stoped.countdown", n),
              this.$el.on("finish.countdown", n))
            : (this.options = t.extend({}, a, n))),
        this.setFinalDate(s),
        !1 === this.options.defer && this.start();
    };
  t.extend(l.prototype, {
    start: function () {
      null !== this.interval && clearInterval(this.interval);
      var t = this;
      this.update(),
        (this.interval = setInterval(function () {
          t.update.call(t);
        }, this.options.precision));
    },
    stop: function () {
      clearInterval(this.interval),
        (this.interval = null),
        this.dispatchEvent("stoped");
    },
    toggle: function () {
      this.interval ? this.stop() : this.start();
    },
    pause: function () {
      this.stop();
    },
    resume: function () {
      this.start();
    },
    remove: function () {
      this.stop.call(this),
        (i[this.instanceNumber] = null),
        delete this.$el.data().countdownInstance;
    },
    setFinalDate: function (t) {
      this.finalDate = (function (t) {
        if (t instanceof Date) return t;
        if (String(t).match(o))
          return (
            String(t).match(/^[0-9]*$/) && (t = Number(t)),
            String(t).match(/\-/) && (t = String(t).replace(/\-/g, "/")),
            new Date(t)
          );
        throw new Error("Couldn't cast `" + t + "` to a date object.");
      })(t);
    },
    update: function () {
      if (0 !== this.$el.closest("html").length) {
        var e,
          s = void 0 !== t._data(this.el, "events"),
          n = new Date();
        (e = this.finalDate.getTime() - n.getTime()),
          (e = Math.ceil(e / 1e3)),
          (e = !this.options.elapse && e < 0 ? 0 : Math.abs(e)),
          this.totalSecsLeft !== e &&
            s &&
            ((this.totalSecsLeft = e),
            (this.elapsed = n >= this.finalDate),
            (this.offset = {
              seconds: this.totalSecsLeft % 60,
              minutes: Math.floor(this.totalSecsLeft / 60) % 60,
              hours: Math.floor(this.totalSecsLeft / 60 / 60) % 24,
              days: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
              daysToWeek: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
              daysToMonth: Math.floor(
                (this.totalSecsLeft / 60 / 60 / 24) % 30.4368
              ),
              weeks: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7),
              weeksToMonth:
                Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7) % 4,
              months: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 30.4368),
              years: Math.abs(this.finalDate.getFullYear() - n.getFullYear()),
              totalDays: Math.floor(this.totalSecsLeft / 60 / 60 / 24),
              totalHours: Math.floor(this.totalSecsLeft / 60 / 60),
              totalMinutes: Math.floor(this.totalSecsLeft / 60),
              totalSeconds: this.totalSecsLeft,
            }),
            this.options.elapse || 0 !== this.totalSecsLeft
              ? this.dispatchEvent("update")
              : (this.stop(), this.dispatchEvent("finish")));
      } else this.remove();
    },
    dispatchEvent: function (e) {
      var n = t.Event(e + ".countdown");
      (n.finalDate = this.finalDate),
        (n.elapsed = this.elapsed),
        (n.offset = t.extend({}, this.offset)),
        (n.strftime = s(this.offset)),
        this.$el.trigger(n);
    },
  }),
    (t.fn.countdown = function () {
      var e = Array.prototype.slice.call(arguments, 0);
      return this.each(function () {
        var s = t(this).data("countdown-instance");
        if (void 0 !== s) {
          var n = i[s],
            o = e[0];
          l.prototype.hasOwnProperty(o)
            ? n[o].apply(n, e.slice(1))
            : null === String(o).match(/^[$A-Z_][0-9A-Z_$]*$/i)
            ? (n.setFinalDate.call(n, o), n.start())
            : t.error(
                "Method %s does not exist on jQuery.countdown".replace(
                  /\%s/gi,
                  o
                )
              );
        } else new l(this, e[0], e[1]);
      });
    });
});
// End Coundown JS

/*  jQuery Nice Select - v1.0
    https://github.com/hernansartorio/jquery-nice-select
    Made by Hernán Sartorio  */
!(function (e) {
  e.fn.niceSelect = function (t) {
    function s(t) {
      t.after(
        e("<div></div>")
          .addClass("nice-select")
          .addClass(t.attr("class") || "")
          .addClass(t.attr("disabled") ? "disabled" : "")
          .attr("tabindex", t.attr("disabled") ? null : "0")
          .html('<span class="current"></span><ul class="list"></ul>')
      );
      var s = t.next(),
        n = t.find("option"),
        i = t.find("option:selected");
      s.find(".current").html(i.data("display") || i.text()),
        n.each(function (t) {
          var n = e(this),
            i = n.data("display");
          s.find("ul").append(
            e("<li></li>")
              .attr("data-value", n.val())
              .attr("data-display", i || null)
              .addClass(
                "option" +
                  (n.is(":selected") ? " selected" : "") +
                  (n.is(":disabled") ? " disabled" : "")
              )
              .html(n.text())
          );
        });
    }
    if ("string" == typeof t)
      return (
        "update" == t
          ? this.each(function () {
              var t = e(this),
                n = e(this).next(".nice-select"),
                i = n.hasClass("open");
              n.length && (n.remove(), s(t), i && t.next().trigger("click"));
            })
          : "destroy" == t
          ? (this.each(function () {
              var t = e(this),
                s = e(this).next(".nice-select");
              s.length && (s.remove(), t.css("display", ""));
            }),
            0 == e(".nice-select").length && e(document).off(".nice_select"))
          : console.log('Method "' + t + '" does not exist.'),
        this
      );
    this.hide(),
      this.each(function () {
        var t = e(this);
        t.next().hasClass("nice-select") || s(t);
      }),
      e(document).off(".nice_select"),
      e(document).on("click.nice_select", ".nice-select", function (t) {
        var s = e(this);
        e(".nice-select").not(s).removeClass("open"),
          s.toggleClass("open"),
          s.hasClass("open")
            ? (s.find(".option"),
              s.find(".focus").removeClass("focus"),
              s.find(".selected").addClass("focus"))
            : s.focus();
      }),
      e(document).on("click.nice_select", function (t) {
        0 === e(t.target).closest(".nice-select").length &&
          e(".nice-select").removeClass("open").find(".option");
      }),
      e(document).on(
        "click.nice_select",
        ".nice-select .option:not(.disabled)",
        function (t) {
          var s = e(this),
            n = s.closest(".nice-select");
          n.find(".selected").removeClass("selected"), s.addClass("selected");
          var i = s.data("display") || s.text();
          n.find(".current").text(i),
            n.prev("select").val(s.data("value")).trigger("change");
        }
      ),
      e(document).on("keydown.nice_select", ".nice-select", function (t) {
        var s = e(this),
          n = e(s.find(".focus") || s.find(".list .option.selected"));
        if (32 == t.keyCode || 13 == t.keyCode)
          return (
            s.hasClass("open") ? n.trigger("click") : s.trigger("click"), !1
          );
        if (40 == t.keyCode) {
          if (s.hasClass("open")) {
            var i = n.nextAll(".option:not(.disabled)").first();
            i.length > 0 &&
              (s.find(".focus").removeClass("focus"), i.addClass("focus"));
          } else s.trigger("click");
          return !1;
        }
        if (38 == t.keyCode) {
          if (s.hasClass("open")) {
            var l = n.prevAll(".option:not(.disabled)").first();
            l.length > 0 &&
              (s.find(".focus").removeClass("focus"), l.addClass("focus"));
          } else s.trigger("click");
          return !1;
        }
        if (27 == t.keyCode) s.hasClass("open") && s.trigger("click");
        else if (9 == t.keyCode && s.hasClass("open")) return !1;
      });
    var n = document.createElement("a").style;
    return (
      (n.cssText = "pointer-events:auto"),
      "auto" !== n.pointerEvents && e("html").addClass("no-csspointerevents"),
      this
    );
  };
})(jQuery);
// End Nice Select

/*
 Slick Slider
 Version: 1.9.0
 */
!(function (i) {
  "use strict";
  "function" == typeof define && define.amd
    ? define(["jquery"], i)
    : "undefined" != typeof exports
    ? (module.exports = i(require("jquery")))
    : i(jQuery);
})(function (i) {
  "use strict";
  var e = window.Slick || {};
  ((e = (function () {
    var e = 0;
    return function (t, o) {
      var s,
        n = this;
      (n.defaults = {
        accessibility: !0,
        adaptiveHeight: !1,
        appendArrows: i(t),
        appendDots: i(t),
        arrows: !0,
        asNavFor: null,
        prevArrow:
          '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
        nextArrow:
          '<button class="slick-next" aria-label="Next" type="button">Next</button>',
        autoplay: !1,
        autoplaySpeed: 3e3,
        centerMode: !1,
        centerPadding: "50px",
        cssEase: "ease",
        customPaging: function (e, t) {
          return i('<button type="button" />').text(t + 1);
        },
        dots: !1,
        dotsClass: "slick-dots",
        draggable: !0,
        easing: "linear",
        edgeFriction: 0.35,
        fade: !1,
        focusOnSelect: !1,
        focusOnChange: !1,
        infinite: !0,
        initialSlide: 0,
        lazyLoad: "ondemand",
        mobileFirst: !1,
        pauseOnHover: !0,
        pauseOnFocus: !0,
        pauseOnDotsHover: !1,
        respondTo: "window",
        responsive: null,
        rows: 1,
        rtl: !1,
        slide: "",
        slidesPerRow: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        swipe: !0,
        swipeToSlide: !1,
        touchMove: !0,
        touchThreshold: 5,
        useCSS: !0,
        useTransform: !0,
        variableWidth: !1,
        vertical: !1,
        verticalSwiping: !1,
        waitForAnimate: !0,
        zIndex: 1e3,
      }),
        (n.initials = {
          animating: !1,
          dragging: !1,
          autoPlayTimer: null,
          currentDirection: 0,
          currentLeft: null,
          currentSlide: 0,
          direction: 1,
          $dots: null,
          listWidth: null,
          listHeight: null,
          loadIndex: 0,
          $nextArrow: null,
          $prevArrow: null,
          scrolling: !1,
          slideCount: null,
          slideWidth: null,
          $slideTrack: null,
          $slides: null,
          sliding: !1,
          slideOffset: 0,
          swipeLeft: null,
          swiping: !1,
          $list: null,
          touchObject: {},
          transformsEnabled: !1,
          unslicked: !1,
        }),
        i.extend(n, n.initials),
        (n.activeBreakpoint = null),
        (n.animType = null),
        (n.animProp = null),
        (n.breakpoints = []),
        (n.breakpointSettings = []),
        (n.cssTransitions = !1),
        (n.focussed = !1),
        (n.interrupted = !1),
        (n.hidden = "hidden"),
        (n.paused = !0),
        (n.positionProp = null),
        (n.respondTo = null),
        (n.rowCount = 1),
        (n.shouldClick = !0),
        (n.$slider = i(t)),
        (n.$slidesCache = null),
        (n.transformType = null),
        (n.transitionType = null),
        (n.visibilityChange = "visibilitychange"),
        (n.windowWidth = 0),
        (n.windowTimer = null),
        (s = i(t).data("slick") || {}),
        (n.options = i.extend({}, n.defaults, o, s)),
        (n.currentSlide = n.options.initialSlide),
        (n.originalSettings = n.options),
        void 0 !== document.mozHidden
          ? ((n.hidden = "mozHidden"),
            (n.visibilityChange = "mozvisibilitychange"))
          : void 0 !== document.webkitHidden &&
            ((n.hidden = "webkitHidden"),
            (n.visibilityChange = "webkitvisibilitychange")),
        (n.autoPlay = i.proxy(n.autoPlay, n)),
        (n.autoPlayClear = i.proxy(n.autoPlayClear, n)),
        (n.autoPlayIterator = i.proxy(n.autoPlayIterator, n)),
        (n.changeSlide = i.proxy(n.changeSlide, n)),
        (n.clickHandler = i.proxy(n.clickHandler, n)),
        (n.selectHandler = i.proxy(n.selectHandler, n)),
        (n.setPosition = i.proxy(n.setPosition, n)),
        (n.swipeHandler = i.proxy(n.swipeHandler, n)),
        (n.dragHandler = i.proxy(n.dragHandler, n)),
        (n.keyHandler = i.proxy(n.keyHandler, n)),
        (n.instanceUid = e++),
        (n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/),
        n.registerBreakpoints(),
        n.init(!0);
    };
  })()).prototype.activateADA = function () {
    this.$slideTrack
      .find(".slick-active")
      .attr({ "aria-hidden": "false" })
      .find("a, input, button, select")
      .attr({ tabindex: "0" });
  }),
    (e.prototype.addSlide = e.prototype.slickAdd =
      function (e, t, o) {
        var s = this;
        if ("boolean" == typeof t) (o = t), (t = null);
        else if (t < 0 || t >= s.slideCount) return !1;
        s.unload(),
          "number" == typeof t
            ? 0 === t && 0 === s.$slides.length
              ? i(e).appendTo(s.$slideTrack)
              : o
              ? i(e).insertBefore(s.$slides.eq(t))
              : i(e).insertAfter(s.$slides.eq(t))
            : !0 === o
            ? i(e).prependTo(s.$slideTrack)
            : i(e).appendTo(s.$slideTrack),
          (s.$slides = s.$slideTrack.children(this.options.slide)),
          s.$slideTrack.children(this.options.slide).detach(),
          s.$slideTrack.append(s.$slides),
          s.$slides.each(function (e, t) {
            i(t).attr("data-slick-index", e);
          }),
          (s.$slidesCache = s.$slides),
          s.reinit();
      }),
    (e.prototype.animateHeight = function () {
      var i = this;
      if (
        1 === i.options.slidesToShow &&
        !0 === i.options.adaptiveHeight &&
        !1 === i.options.vertical
      ) {
        var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
        i.$list.animate({ height: e }, i.options.speed);
      }
    }),
    (e.prototype.animateSlide = function (e, t) {
      var o = {},
        s = this;
      s.animateHeight(),
        !0 === s.options.rtl && !1 === s.options.vertical && (e = -e),
        !1 === s.transformsEnabled
          ? !1 === s.options.vertical
            ? s.$slideTrack.animate(
                { left: e },
                s.options.speed,
                s.options.easing,
                t
              )
            : s.$slideTrack.animate(
                { top: e },
                s.options.speed,
                s.options.easing,
                t
              )
          : !1 === s.cssTransitions
          ? (!0 === s.options.rtl && (s.currentLeft = -s.currentLeft),
            i({ animStart: s.currentLeft }).animate(
              { animStart: e },
              {
                duration: s.options.speed,
                easing: s.options.easing,
                step: function (i) {
                  (i = Math.ceil(i)),
                    !1 === s.options.vertical
                      ? ((o[s.animType] = "translate(" + i + "px, 0px)"),
                        s.$slideTrack.css(o))
                      : ((o[s.animType] = "translate(0px," + i + "px)"),
                        s.$slideTrack.css(o));
                },
                complete: function () {
                  t && t.call();
                },
              }
            ))
          : (s.applyTransition(),
            (e = Math.ceil(e)),
            !1 === s.options.vertical
              ? (o[s.animType] = "translate3d(" + e + "px, 0px, 0px)")
              : (o[s.animType] = "translate3d(0px," + e + "px, 0px)"),
            s.$slideTrack.css(o),
            t &&
              setTimeout(function () {
                s.disableTransition(), t.call();
              }, s.options.speed));
    }),
    (e.prototype.getNavTarget = function () {
      var e = this.options.asNavFor;
      return e && null !== e && (e = i(e).not(this.$slider)), e;
    }),
    (e.prototype.asNavFor = function (e) {
      var t = this.getNavTarget();
      null !== t &&
        "object" == typeof t &&
        t.each(function () {
          var t = i(this).slick("getSlick");
          t.unslicked || t.slideHandler(e, !0);
        });
    }),
    (e.prototype.applyTransition = function (i) {
      var e = this,
        t = {};
      !1 === e.options.fade
        ? (t[e.transitionType] =
            e.transformType + " " + e.options.speed + "ms " + e.options.cssEase)
        : (t[e.transitionType] =
            "opacity " + e.options.speed + "ms " + e.options.cssEase),
        !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t);
    }),
    (e.prototype.autoPlay = function () {
      var i = this;
      i.autoPlayClear(),
        i.slideCount > i.options.slidesToShow &&
          (i.autoPlayTimer = setInterval(
            i.autoPlayIterator,
            i.options.autoplaySpeed
          ));
    }),
    (e.prototype.autoPlayClear = function () {
      this.autoPlayTimer && clearInterval(this.autoPlayTimer);
    }),
    (e.prototype.autoPlayIterator = function () {
      var i = this,
        e = i.currentSlide + i.options.slidesToScroll;
      i.paused ||
        i.interrupted ||
        i.focussed ||
        (!1 === i.options.infinite &&
          (1 === i.direction && i.currentSlide + 1 === i.slideCount - 1
            ? (i.direction = 0)
            : 0 === i.direction &&
              ((e = i.currentSlide - i.options.slidesToScroll),
              i.currentSlide - 1 == 0 && (i.direction = 1))),
        i.slideHandler(e));
    }),
    (e.prototype.buildArrows = function () {
      var e = this;
      !0 === e.options.arrows &&
        ((e.$prevArrow = i(e.options.prevArrow).addClass("slick-arrow")),
        (e.$nextArrow = i(e.options.nextArrow).addClass("slick-arrow")),
        e.slideCount > e.options.slidesToShow
          ? (e.$prevArrow
              .removeClass("slick-hidden")
              .removeAttr("aria-hidden tabindex"),
            e.$nextArrow
              .removeClass("slick-hidden")
              .removeAttr("aria-hidden tabindex"),
            e.htmlExpr.test(e.options.prevArrow) &&
              e.$prevArrow.prependTo(e.options.appendArrows),
            e.htmlExpr.test(e.options.nextArrow) &&
              e.$nextArrow.appendTo(e.options.appendArrows),
            !0 !== e.options.infinite &&
              e.$prevArrow
                .addClass("slick-disabled")
                .attr("aria-disabled", "true"))
          : e.$prevArrow
              .add(e.$nextArrow)
              .addClass("slick-hidden")
              .attr({ "aria-disabled": "true", tabindex: "-1" }));
    }),
    (e.prototype.buildDots = function () {
      var e,
        t,
        o = this;
      if (!0 === o.options.dots && o.slideCount > o.options.slidesToShow) {
        for (
          o.$slider.addClass("slick-dotted"),
            t = i("<ul />").addClass(o.options.dotsClass),
            e = 0;
          e <= o.getDotCount();
          e += 1
        )
          t.append(i("<li />").append(o.options.customPaging.call(this, o, e)));
        (o.$dots = t.appendTo(o.options.appendDots)),
          o.$dots.find("li").first().addClass("slick-active");
      }
    }),
    (e.prototype.buildOut = function () {
      var e = this;
      (e.$slides = e.$slider
        .children(e.options.slide + ":not(.slick-cloned)")
        .addClass("slick-slide")),
        (e.slideCount = e.$slides.length),
        e.$slides.each(function (e, t) {
          i(t)
            .attr("data-slick-index", e)
            .data("originalStyling", i(t).attr("style") || "");
        }),
        e.$slider.addClass("slick-slider"),
        (e.$slideTrack =
          0 === e.slideCount
            ? i('<div class="slick-track"/>').appendTo(e.$slider)
            : e.$slides.wrapAll('<div class="slick-track"/>').parent()),
        (e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent()),
        e.$slideTrack.css("opacity", 0),
        (!0 !== e.options.centerMode && !0 !== e.options.swipeToSlide) ||
          (e.options.slidesToScroll = 1),
        i("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"),
        e.setupInfinite(),
        e.buildArrows(),
        e.buildDots(),
        e.updateDots(),
        e.setSlideClasses(
          "number" == typeof e.currentSlide ? e.currentSlide : 0
        ),
        !0 === e.options.draggable && e.$list.addClass("draggable");
    }),
    (e.prototype.buildRows = function () {
      var i,
        e,
        t,
        o,
        s,
        n,
        r,
        l = this;
      if (
        ((o = document.createDocumentFragment()),
        (n = l.$slider.children()),
        l.options.rows > 0)
      ) {
        for (
          r = l.options.slidesPerRow * l.options.rows,
            s = Math.ceil(n.length / r),
            i = 0;
          i < s;
          i++
        ) {
          var d = document.createElement("div");
          for (e = 0; e < l.options.rows; e++) {
            var a = document.createElement("div");
            for (t = 0; t < l.options.slidesPerRow; t++) {
              var c = i * r + (e * l.options.slidesPerRow + t);
              n.get(c) && a.appendChild(n.get(c));
            }
            d.appendChild(a);
          }
          o.appendChild(d);
        }
        l.$slider.empty().append(o),
          l.$slider
            .children()
            .children()
            .children()
            .css({
              width: 100 / l.options.slidesPerRow + "%",
              display: "inline-block",
            });
      }
    }),
    (e.prototype.checkResponsive = function (e, t) {
      var o,
        s,
        n,
        r = this,
        l = !1,
        d = r.$slider.width(),
        a = window.innerWidth || i(window).width();
      if (
        ("window" === r.respondTo
          ? (n = a)
          : "slider" === r.respondTo
          ? (n = d)
          : "min" === r.respondTo && (n = Math.min(a, d)),
        r.options.responsive &&
          r.options.responsive.length &&
          null !== r.options.responsive)
      ) {
        for (o in ((s = null), r.breakpoints))
          r.breakpoints.hasOwnProperty(o) &&
            (!1 === r.originalSettings.mobileFirst
              ? n < r.breakpoints[o] && (s = r.breakpoints[o])
              : n > r.breakpoints[o] && (s = r.breakpoints[o]));
        null !== s
          ? null !== r.activeBreakpoint
            ? (s !== r.activeBreakpoint || t) &&
              ((r.activeBreakpoint = s),
              "unslick" === r.breakpointSettings[s]
                ? r.unslick(s)
                : ((r.options = i.extend(
                    {},
                    r.originalSettings,
                    r.breakpointSettings[s]
                  )),
                  !0 === e && (r.currentSlide = r.options.initialSlide),
                  r.refresh(e)),
              (l = s))
            : ((r.activeBreakpoint = s),
              "unslick" === r.breakpointSettings[s]
                ? r.unslick(s)
                : ((r.options = i.extend(
                    {},
                    r.originalSettings,
                    r.breakpointSettings[s]
                  )),
                  !0 === e && (r.currentSlide = r.options.initialSlide),
                  r.refresh(e)),
              (l = s))
          : null !== r.activeBreakpoint &&
            ((r.activeBreakpoint = null),
            (r.options = r.originalSettings),
            !0 === e && (r.currentSlide = r.options.initialSlide),
            r.refresh(e),
            (l = s)),
          e || !1 === l || r.$slider.trigger("breakpoint", [r, l]);
      }
    }),
    (e.prototype.changeSlide = function (e, t) {
      var o,
        s,
        n = this,
        r = i(e.currentTarget);
      switch (
        (r.is("a") && e.preventDefault(),
        r.is("li") || (r = r.closest("li")),
        (o =
          n.slideCount % n.options.slidesToScroll != 0
            ? 0
            : (n.slideCount - n.currentSlide) % n.options.slidesToScroll),
        e.data.message)
      ) {
        case "previous":
          (s = 0 === o ? n.options.slidesToScroll : n.options.slidesToShow - o),
            n.slideCount > n.options.slidesToShow &&
              n.slideHandler(n.currentSlide - s, !1, t);
          break;
        case "next":
          (s = 0 === o ? n.options.slidesToScroll : o),
            n.slideCount > n.options.slidesToShow &&
              n.slideHandler(n.currentSlide + s, !1, t);
          break;
        case "index":
          var l =
            0 === e.data.index
              ? 0
              : e.data.index || r.index() * n.options.slidesToScroll;
          n.slideHandler(n.checkNavigable(l), !1, t),
            r.children().trigger("focus");
          break;
        default:
          return;
      }
    }),
    (e.prototype.checkNavigable = function (i) {
      var e, t;
      if (((t = 0), i > (e = this.getNavigableIndexes())[e.length - 1]))
        i = e[e.length - 1];
      else
        for (var o in e) {
          if (i < e[o]) {
            i = t;
            break;
          }
          t = e[o];
        }
      return i;
    }),
    (e.prototype.cleanUpEvents = function () {
      var e = this;
      e.options.dots &&
        null !== e.$dots &&
        (i("li", e.$dots)
          .off("click.slick", e.changeSlide)
          .off("mouseenter.slick", i.proxy(e.interrupt, e, !0))
          .off("mouseleave.slick", i.proxy(e.interrupt, e, !1)),
        !0 === e.options.accessibility &&
          e.$dots.off("keydown.slick", e.keyHandler)),
        e.$slider.off("focus.slick blur.slick"),
        !0 === e.options.arrows &&
          e.slideCount > e.options.slidesToShow &&
          (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide),
          e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide),
          !0 === e.options.accessibility &&
            (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler),
            e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))),
        e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler),
        e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler),
        e.$list.off("touchend.slick mouseup.slick", e.swipeHandler),
        e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler),
        e.$list.off("click.slick", e.clickHandler),
        i(document).off(e.visibilityChange, e.visibility),
        e.cleanUpSlideEvents(),
        !0 === e.options.accessibility &&
          e.$list.off("keydown.slick", e.keyHandler),
        !0 === e.options.focusOnSelect &&
          i(e.$slideTrack).children().off("click.slick", e.selectHandler),
        i(window).off(
          "orientationchange.slick.slick-" + e.instanceUid,
          e.orientationChange
        ),
        i(window).off("resize.slick.slick-" + e.instanceUid, e.resize),
        i("[draggable!=true]", e.$slideTrack).off(
          "dragstart",
          e.preventDefault
        ),
        i(window).off("load.slick.slick-" + e.instanceUid, e.setPosition);
    }),
    (e.prototype.cleanUpSlideEvents = function () {
      var e = this;
      e.$list.off("mouseenter.slick", i.proxy(e.interrupt, e, !0)),
        e.$list.off("mouseleave.slick", i.proxy(e.interrupt, e, !1));
    }),
    (e.prototype.cleanUpRows = function () {
      var i,
        e = this;
      e.options.rows > 0 &&
        ((i = e.$slides.children().children()).removeAttr("style"),
        e.$slider.empty().append(i));
    }),
    (e.prototype.clickHandler = function (i) {
      !1 === this.shouldClick &&
        (i.stopImmediatePropagation(), i.stopPropagation(), i.preventDefault());
    }),
    (e.prototype.destroy = function (e) {
      var t = this;
      t.autoPlayClear(),
        (t.touchObject = {}),
        t.cleanUpEvents(),
        i(".slick-cloned", t.$slider).detach(),
        t.$dots && t.$dots.remove(),
        t.$prevArrow &&
          t.$prevArrow.length &&
          (t.$prevArrow
            .removeClass("slick-disabled slick-arrow slick-hidden")
            .removeAttr("aria-hidden aria-disabled tabindex")
            .css("display", ""),
          t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()),
        t.$nextArrow &&
          t.$nextArrow.length &&
          (t.$nextArrow
            .removeClass("slick-disabled slick-arrow slick-hidden")
            .removeAttr("aria-hidden aria-disabled tabindex")
            .css("display", ""),
          t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()),
        t.$slides &&
          (t.$slides
            .removeClass(
              "slick-slide slick-active slick-center slick-visible slick-current"
            )
            .removeAttr("aria-hidden")
            .removeAttr("data-slick-index")
            .each(function () {
              i(this).attr("style", i(this).data("originalStyling"));
            }),
          t.$slideTrack.children(this.options.slide).detach(),
          t.$slideTrack.detach(),
          t.$list.detach(),
          t.$slider.append(t.$slides)),
        t.cleanUpRows(),
        t.$slider.removeClass("slick-slider"),
        t.$slider.removeClass("slick-initialized"),
        t.$slider.removeClass("slick-dotted"),
        (t.unslicked = !0),
        e || t.$slider.trigger("destroy", [t]);
    }),
    (e.prototype.disableTransition = function (i) {
      var e = this,
        t = {};
      (t[e.transitionType] = ""),
        !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t);
    }),
    (e.prototype.fadeSlide = function (i, e) {
      var t = this;
      !1 === t.cssTransitions
        ? (t.$slides.eq(i).css({ zIndex: t.options.zIndex }),
          t.$slides
            .eq(i)
            .animate({ opacity: 1 }, t.options.speed, t.options.easing, e))
        : (t.applyTransition(i),
          t.$slides.eq(i).css({ opacity: 1, zIndex: t.options.zIndex }),
          e &&
            setTimeout(function () {
              t.disableTransition(i), e.call();
            }, t.options.speed));
    }),
    (e.prototype.fadeSlideOut = function (i) {
      var e = this;
      !1 === e.cssTransitions
        ? e.$slides
            .eq(i)
            .animate(
              { opacity: 0, zIndex: e.options.zIndex - 2 },
              e.options.speed,
              e.options.easing
            )
        : (e.applyTransition(i),
          e.$slides.eq(i).css({ opacity: 0, zIndex: e.options.zIndex - 2 }));
    }),
    (e.prototype.filterSlides = e.prototype.slickFilter =
      function (i) {
        var e = this;
        null !== i &&
          ((e.$slidesCache = e.$slides),
          e.unload(),
          e.$slideTrack.children(this.options.slide).detach(),
          e.$slidesCache.filter(i).appendTo(e.$slideTrack),
          e.reinit());
      }),
    (e.prototype.focusHandler = function () {
      var e = this;
      e.$slider
        .off("focus.slick blur.slick")
        .on("focus.slick", "*", function (t) {
          var o = i(this);
          setTimeout(function () {
            e.options.pauseOnFocus &&
              o.is(":focus") &&
              ((e.focussed = !0), e.autoPlay());
          }, 0);
        })
        .on("blur.slick", "*", function (t) {
          i(this), e.options.pauseOnFocus && ((e.focussed = !1), e.autoPlay());
        });
    }),
    (e.prototype.getCurrent = e.prototype.slickCurrentSlide =
      function () {
        return this.currentSlide;
      }),
    (e.prototype.getDotCount = function () {
      var i = this,
        e = 0,
        t = 0,
        o = 0;
      if (!0 === i.options.infinite)
        if (i.slideCount <= i.options.slidesToShow) ++o;
        else
          for (; e < i.slideCount; )
            ++o,
              (e = t + i.options.slidesToScroll),
              (t +=
                i.options.slidesToScroll <= i.options.slidesToShow
                  ? i.options.slidesToScroll
                  : i.options.slidesToShow);
      else if (!0 === i.options.centerMode) o = i.slideCount;
      else if (i.options.asNavFor)
        for (; e < i.slideCount; )
          ++o,
            (e = t + i.options.slidesToScroll),
            (t +=
              i.options.slidesToScroll <= i.options.slidesToShow
                ? i.options.slidesToScroll
                : i.options.slidesToShow);
      else
        o =
          1 +
          Math.ceil(
            (i.slideCount - i.options.slidesToShow) / i.options.slidesToScroll
          );
      return o - 1;
    }),
    (e.prototype.getLeft = function (i) {
      var e,
        t,
        o,
        s,
        n = this,
        r = 0;
      return (
        (n.slideOffset = 0),
        (t = n.$slides.first().outerHeight(!0)),
        !0 === n.options.infinite
          ? (n.slideCount > n.options.slidesToShow &&
              ((n.slideOffset = n.slideWidth * n.options.slidesToShow * -1),
              (s = -1),
              !0 === n.options.vertical &&
                !0 === n.options.centerMode &&
                (2 === n.options.slidesToShow
                  ? (s = -1.5)
                  : 1 === n.options.slidesToShow && (s = -2)),
              (r = t * n.options.slidesToShow * s)),
            n.slideCount % n.options.slidesToScroll != 0 &&
              i + n.options.slidesToScroll > n.slideCount &&
              n.slideCount > n.options.slidesToShow &&
              (i > n.slideCount
                ? ((n.slideOffset =
                    (n.options.slidesToShow - (i - n.slideCount)) *
                    n.slideWidth *
                    -1),
                  (r = (n.options.slidesToShow - (i - n.slideCount)) * t * -1))
                : ((n.slideOffset =
                    (n.slideCount % n.options.slidesToScroll) *
                    n.slideWidth *
                    -1),
                  (r = (n.slideCount % n.options.slidesToScroll) * t * -1))))
          : i + n.options.slidesToShow > n.slideCount &&
            ((n.slideOffset =
              (i + n.options.slidesToShow - n.slideCount) * n.slideWidth),
            (r = (i + n.options.slidesToShow - n.slideCount) * t)),
        n.slideCount <= n.options.slidesToShow &&
          ((n.slideOffset = 0), (r = 0)),
        !0 === n.options.centerMode && n.slideCount <= n.options.slidesToShow
          ? (n.slideOffset =
              (n.slideWidth * Math.floor(n.options.slidesToShow)) / 2 -
              (n.slideWidth * n.slideCount) / 2)
          : !0 === n.options.centerMode && !0 === n.options.infinite
          ? (n.slideOffset +=
              n.slideWidth * Math.floor(n.options.slidesToShow / 2) -
              n.slideWidth)
          : !0 === n.options.centerMode &&
            ((n.slideOffset = 0),
            (n.slideOffset +=
              n.slideWidth * Math.floor(n.options.slidesToShow / 2))),
        (e =
          !1 === n.options.vertical
            ? i * n.slideWidth * -1 + n.slideOffset
            : i * t * -1 + r),
        !0 === n.options.variableWidth &&
          ((o =
            n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite
              ? n.$slideTrack.children(".slick-slide").eq(i)
              : n.$slideTrack
                  .children(".slick-slide")
                  .eq(i + n.options.slidesToShow)),
          (e =
            !0 === n.options.rtl
              ? o[0]
                ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width())
                : 0
              : o[0]
              ? -1 * o[0].offsetLeft
              : 0),
          !0 === n.options.centerMode &&
            ((o =
              n.slideCount <= n.options.slidesToShow ||
              !1 === n.options.infinite
                ? n.$slideTrack.children(".slick-slide").eq(i)
                : n.$slideTrack
                    .children(".slick-slide")
                    .eq(i + n.options.slidesToShow + 1)),
            (e =
              !0 === n.options.rtl
                ? o[0]
                  ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width())
                  : 0
                : o[0]
                ? -1 * o[0].offsetLeft
                : 0),
            (e += (n.$list.width() - o.outerWidth()) / 2))),
        e
      );
    }),
    (e.prototype.getOption = e.prototype.slickGetOption =
      function (i) {
        return this.options[i];
      }),
    (e.prototype.getNavigableIndexes = function () {
      var i,
        e = this,
        t = 0,
        o = 0,
        s = [];
      for (
        !1 === e.options.infinite
          ? (i = e.slideCount)
          : ((t = -1 * e.options.slidesToScroll),
            (o = -1 * e.options.slidesToScroll),
            (i = 2 * e.slideCount));
        t < i;

      )
        s.push(t),
          (t = o + e.options.slidesToScroll),
          (o +=
            e.options.slidesToScroll <= e.options.slidesToShow
              ? e.options.slidesToScroll
              : e.options.slidesToShow);
      return s;
    }),
    (e.prototype.getSlick = function () {
      return this;
    }),
    (e.prototype.getSlideCount = function () {
      var e,
        t,
        o,
        s = this;
      return (
        (o = !0 === s.options.centerMode ? Math.floor(s.$list.width() / 2) : 0),
        (t = -1 * s.swipeLeft + o),
        !0 === s.options.swipeToSlide
          ? (s.$slideTrack.find(".slick-slide").each(function (o, n) {
              var r, l;
              if (
                ((r = i(n).outerWidth()),
                (l = n.offsetLeft),
                !0 !== s.options.centerMode && (l += r / 2),
                t < l + r)
              )
                return (e = n), !1;
            }),
            Math.abs(i(e).attr("data-slick-index") - s.currentSlide) || 1)
          : s.options.slidesToScroll
      );
    }),
    (e.prototype.goTo = e.prototype.slickGoTo =
      function (i, e) {
        this.changeSlide({ data: { message: "index", index: parseInt(i) } }, e);
      }),
    (e.prototype.init = function (e) {
      var t = this;
      i(t.$slider).hasClass("slick-initialized") ||
        (i(t.$slider).addClass("slick-initialized"),
        t.buildRows(),
        t.buildOut(),
        t.setProps(),
        t.startLoad(),
        t.loadSlider(),
        t.initializeEvents(),
        t.updateArrows(),
        t.updateDots(),
        t.checkResponsive(!0),
        t.focusHandler()),
        e && t.$slider.trigger("init", [t]),
        !0 === t.options.accessibility && t.initADA(),
        t.options.autoplay && ((t.paused = !1), t.autoPlay());
    }),
    (e.prototype.initADA = function () {
      var e = this,
        t = Math.ceil(e.slideCount / e.options.slidesToShow),
        o = e.getNavigableIndexes().filter(function (i) {
          return i >= 0 && i < e.slideCount;
        });
      e.$slides
        .add(e.$slideTrack.find(".slick-cloned"))
        .attr({ "aria-hidden": "true", tabindex: "-1" })
        .find("a, input, button, select")
        .attr({ tabindex: "-1" }),
        null !== e.$dots &&
          (e.$slides
            .not(e.$slideTrack.find(".slick-cloned"))
            .each(function (t) {
              var s = o.indexOf(t);
              if (
                (i(this).attr({
                  role: "tabpanel",
                  id: "slick-slide" + e.instanceUid + t,
                  tabindex: -1,
                }),
                -1 !== s)
              ) {
                var n = "slick-slide-control" + e.instanceUid + s;
                i("#" + n).length && i(this).attr({ "aria-describedby": n });
              }
            }),
          e.$dots
            .attr("role", "tablist")
            .find("li")
            .each(function (s) {
              var n = o[s];
              i(this).attr({ role: "presentation" }),
                i(this)
                  .find("button")
                  .first()
                  .attr({
                    role: "tab",
                    id: "slick-slide-control" + e.instanceUid + s,
                    "aria-controls": "slick-slide" + e.instanceUid + n,
                    "aria-label": s + 1 + " of " + t,
                    "aria-selected": null,
                    tabindex: "-1",
                  });
            })
            .eq(e.currentSlide)
            .find("button")
            .attr({ "aria-selected": "true", tabindex: "0" })
            .end());
      for (var s = e.currentSlide, n = s + e.options.slidesToShow; s < n; s++)
        e.options.focusOnChange
          ? e.$slides.eq(s).attr({ tabindex: "0" })
          : e.$slides.eq(s).removeAttr("tabindex");
      e.activateADA();
    }),
    (e.prototype.initArrowEvents = function () {
      var i = this;
      !0 === i.options.arrows &&
        i.slideCount > i.options.slidesToShow &&
        (i.$prevArrow
          .off("click.slick")
          .on("click.slick", { message: "previous" }, i.changeSlide),
        i.$nextArrow
          .off("click.slick")
          .on("click.slick", { message: "next" }, i.changeSlide),
        !0 === i.options.accessibility &&
          (i.$prevArrow.on("keydown.slick", i.keyHandler),
          i.$nextArrow.on("keydown.slick", i.keyHandler)));
    }),
    (e.prototype.initDotEvents = function () {
      var e = this;
      !0 === e.options.dots &&
        e.slideCount > e.options.slidesToShow &&
        (i("li", e.$dots).on(
          "click.slick",
          { message: "index" },
          e.changeSlide
        ),
        !0 === e.options.accessibility &&
          e.$dots.on("keydown.slick", e.keyHandler)),
        !0 === e.options.dots &&
          !0 === e.options.pauseOnDotsHover &&
          e.slideCount > e.options.slidesToShow &&
          i("li", e.$dots)
            .on("mouseenter.slick", i.proxy(e.interrupt, e, !0))
            .on("mouseleave.slick", i.proxy(e.interrupt, e, !1));
    }),
    (e.prototype.initSlideEvents = function () {
      var e = this;
      e.options.pauseOnHover &&
        (e.$list.on("mouseenter.slick", i.proxy(e.interrupt, e, !0)),
        e.$list.on("mouseleave.slick", i.proxy(e.interrupt, e, !1)));
    }),
    (e.prototype.initializeEvents = function () {
      var e = this;
      e.initArrowEvents(),
        e.initDotEvents(),
        e.initSlideEvents(),
        e.$list.on(
          "touchstart.slick mousedown.slick",
          { action: "start" },
          e.swipeHandler
        ),
        e.$list.on(
          "touchmove.slick mousemove.slick",
          { action: "move" },
          e.swipeHandler
        ),
        e.$list.on(
          "touchend.slick mouseup.slick",
          { action: "end" },
          e.swipeHandler
        ),
        e.$list.on(
          "touchcancel.slick mouseleave.slick",
          { action: "end" },
          e.swipeHandler
        ),
        e.$list.on("click.slick", e.clickHandler),
        i(document).on(e.visibilityChange, i.proxy(e.visibility, e)),
        !0 === e.options.accessibility &&
          e.$list.on("keydown.slick", e.keyHandler),
        !0 === e.options.focusOnSelect &&
          i(e.$slideTrack).children().on("click.slick", e.selectHandler),
        i(window).on(
          "orientationchange.slick.slick-" + e.instanceUid,
          i.proxy(e.orientationChange, e)
        ),
        i(window).on(
          "resize.slick.slick-" + e.instanceUid,
          i.proxy(e.resize, e)
        ),
        i("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault),
        i(window).on("load.slick.slick-" + e.instanceUid, e.setPosition),
        i(e.setPosition);
    }),
    (e.prototype.initUI = function () {
      var i = this;
      !0 === i.options.arrows &&
        i.slideCount > i.options.slidesToShow &&
        (i.$prevArrow.show(), i.$nextArrow.show()),
        !0 === i.options.dots &&
          i.slideCount > i.options.slidesToShow &&
          i.$dots.show();
    }),
    (e.prototype.keyHandler = function (i) {
      var e = this;
      i.target.tagName.match("TEXTAREA|INPUT|SELECT") ||
        (37 === i.keyCode && !0 === e.options.accessibility
          ? e.changeSlide({
              data: { message: !0 === e.options.rtl ? "next" : "previous" },
            })
          : 39 === i.keyCode &&
            !0 === e.options.accessibility &&
            e.changeSlide({
              data: { message: !0 === e.options.rtl ? "previous" : "next" },
            }));
    }),
    (e.prototype.lazyLoad = function () {
      function e(e) {
        i("img[data-lazy]", e).each(function () {
          var e = i(this),
            t = i(this).attr("data-lazy"),
            o = i(this).attr("data-srcset"),
            s = i(this).attr("data-sizes") || n.$slider.attr("data-sizes"),
            r = document.createElement("img");
          (r.onload = function () {
            e.animate({ opacity: 0 }, 100, function () {
              o && (e.attr("srcset", o), s && e.attr("sizes", s)),
                e.attr("src", t).animate({ opacity: 1 }, 200, function () {
                  e.removeAttr("data-lazy data-srcset data-sizes").removeClass(
                    "slick-loading"
                  );
                }),
                n.$slider.trigger("lazyLoaded", [n, e, t]);
            });
          }),
            (r.onerror = function () {
              e
                .removeAttr("data-lazy")
                .removeClass("slick-loading")
                .addClass("slick-lazyload-error"),
                n.$slider.trigger("lazyLoadError", [n, e, t]);
            }),
            (r.src = t);
        });
      }
      var t,
        o,
        s,
        n = this;
      if (
        (!0 === n.options.centerMode
          ? !0 === n.options.infinite
            ? (s =
                (o = n.currentSlide + (n.options.slidesToShow / 2 + 1)) +
                n.options.slidesToShow +
                2)
            : ((o = Math.max(
                0,
                n.currentSlide - (n.options.slidesToShow / 2 + 1)
              )),
              (s = n.options.slidesToShow / 2 + 1 + 2 + n.currentSlide))
          : ((o = n.options.infinite
              ? n.options.slidesToShow + n.currentSlide
              : n.currentSlide),
            (s = Math.ceil(o + n.options.slidesToShow)),
            !0 === n.options.fade && (o > 0 && o--, s <= n.slideCount && s++)),
        (t = n.$slider.find(".slick-slide").slice(o, s)),
        "anticipated" === n.options.lazyLoad)
      )
        for (
          var r = o - 1, l = s, d = n.$slider.find(".slick-slide"), a = 0;
          a < n.options.slidesToScroll;
          a++
        )
          r < 0 && (r = n.slideCount - 1),
            (t = (t = t.add(d.eq(r))).add(d.eq(l))),
            r--,
            l++;
      e(t),
        n.slideCount <= n.options.slidesToShow
          ? e(n.$slider.find(".slick-slide"))
          : n.currentSlide >= n.slideCount - n.options.slidesToShow
          ? e(n.$slider.find(".slick-cloned").slice(0, n.options.slidesToShow))
          : 0 === n.currentSlide &&
            e(
              n.$slider.find(".slick-cloned").slice(-1 * n.options.slidesToShow)
            );
    }),
    (e.prototype.loadSlider = function () {
      var i = this;
      i.setPosition(),
        i.$slideTrack.css({ opacity: 1 }),
        i.$slider.removeClass("slick-loading"),
        i.initUI(),
        "progressive" === i.options.lazyLoad && i.progressiveLazyLoad();
    }),
    (e.prototype.next = e.prototype.slickNext =
      function () {
        this.changeSlide({ data: { message: "next" } });
      }),
    (e.prototype.orientationChange = function () {
      this.checkResponsive(), this.setPosition();
    }),
    (e.prototype.pause = e.prototype.slickPause =
      function () {
        this.autoPlayClear(), (this.paused = !0);
      }),
    (e.prototype.play = e.prototype.slickPlay =
      function () {
        var i = this;
        i.autoPlay(),
          (i.options.autoplay = !0),
          (i.paused = !1),
          (i.focussed = !1),
          (i.interrupted = !1);
      }),
    (e.prototype.postSlide = function (e) {
      var t = this;
      !t.unslicked &&
        (t.$slider.trigger("afterChange", [t, e]),
        (t.animating = !1),
        t.slideCount > t.options.slidesToShow && t.setPosition(),
        (t.swipeLeft = null),
        t.options.autoplay && t.autoPlay(),
        !0 === t.options.accessibility &&
          (t.initADA(), t.options.focusOnChange)) &&
        i(t.$slides.get(t.currentSlide)).attr("tabindex", 0).focus();
    }),
    (e.prototype.prev = e.prototype.slickPrev =
      function () {
        this.changeSlide({ data: { message: "previous" } });
      }),
    (e.prototype.preventDefault = function (i) {
      i.preventDefault();
    }),
    (e.prototype.progressiveLazyLoad = function (e) {
      e = e || 1;
      var t,
        o,
        s,
        n,
        r,
        l = this,
        d = i("img[data-lazy]", l.$slider);
      d.length
        ? ((t = d.first()),
          (o = t.attr("data-lazy")),
          (s = t.attr("data-srcset")),
          (n = t.attr("data-sizes") || l.$slider.attr("data-sizes")),
          ((r = document.createElement("img")).onload = function () {
            s && (t.attr("srcset", s), n && t.attr("sizes", n)),
              t
                .attr("src", o)
                .removeAttr("data-lazy data-srcset data-sizes")
                .removeClass("slick-loading"),
              !0 === l.options.adaptiveHeight && l.setPosition(),
              l.$slider.trigger("lazyLoaded", [l, t, o]),
              l.progressiveLazyLoad();
          }),
          (r.onerror = function () {
            e < 3
              ? setTimeout(function () {
                  l.progressiveLazyLoad(e + 1);
                }, 500)
              : (t
                  .removeAttr("data-lazy")
                  .removeClass("slick-loading")
                  .addClass("slick-lazyload-error"),
                l.$slider.trigger("lazyLoadError", [l, t, o]),
                l.progressiveLazyLoad());
          }),
          (r.src = o))
        : l.$slider.trigger("allImagesLoaded", [l]);
    }),
    (e.prototype.refresh = function (e) {
      var t,
        o,
        s = this;
      (o = s.slideCount - s.options.slidesToShow),
        !s.options.infinite && s.currentSlide > o && (s.currentSlide = o),
        s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0),
        (t = s.currentSlide),
        s.destroy(!0),
        i.extend(s, s.initials, { currentSlide: t }),
        s.init(),
        e || s.changeSlide({ data: { message: "index", index: t } }, !1);
    }),
    (e.prototype.registerBreakpoints = function () {
      var e,
        t,
        o,
        s = this,
        n = s.options.responsive || null;
      if ("array" === i.type(n) && n.length) {
        for (e in ((s.respondTo = s.options.respondTo || "window"), n))
          if (((o = s.breakpoints.length - 1), n.hasOwnProperty(e))) {
            for (t = n[e].breakpoint; o >= 0; )
              s.breakpoints[o] &&
                s.breakpoints[o] === t &&
                s.breakpoints.splice(o, 1),
                o--;
            s.breakpoints.push(t), (s.breakpointSettings[t] = n[e].settings);
          }
        s.breakpoints.sort(function (i, e) {
          return s.options.mobileFirst ? i - e : e - i;
        });
      }
    }),
    (e.prototype.reinit = function () {
      var e = this;
      (e.$slides = e.$slideTrack
        .children(e.options.slide)
        .addClass("slick-slide")),
        (e.slideCount = e.$slides.length),
        e.currentSlide >= e.slideCount &&
          0 !== e.currentSlide &&
          (e.currentSlide = e.currentSlide - e.options.slidesToScroll),
        e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0),
        e.registerBreakpoints(),
        e.setProps(),
        e.setupInfinite(),
        e.buildArrows(),
        e.updateArrows(),
        e.initArrowEvents(),
        e.buildDots(),
        e.updateDots(),
        e.initDotEvents(),
        e.cleanUpSlideEvents(),
        e.initSlideEvents(),
        e.checkResponsive(!1, !0),
        !0 === e.options.focusOnSelect &&
          i(e.$slideTrack).children().on("click.slick", e.selectHandler),
        e.setSlideClasses(
          "number" == typeof e.currentSlide ? e.currentSlide : 0
        ),
        e.setPosition(),
        e.focusHandler(),
        (e.paused = !e.options.autoplay),
        e.autoPlay(),
        e.$slider.trigger("reInit", [e]);
    }),
    (e.prototype.resize = function () {
      var e = this;
      i(window).width() !== e.windowWidth &&
        (clearTimeout(e.windowDelay),
        (e.windowDelay = window.setTimeout(function () {
          (e.windowWidth = i(window).width()),
            e.checkResponsive(),
            e.unslicked || e.setPosition();
        }, 50)));
    }),
    (e.prototype.removeSlide = e.prototype.slickRemove =
      function (i, e, t) {
        var o = this;
        return (
          "boolean" == typeof i
            ? (i = !0 === (e = i) ? 0 : o.slideCount - 1)
            : (i = !0 === e ? --i : i),
          !(o.slideCount < 1 || i < 0 || i > o.slideCount - 1) &&
            (o.unload(),
            !0 === t
              ? o.$slideTrack.children().remove()
              : o.$slideTrack.children(this.options.slide).eq(i).remove(),
            (o.$slides = o.$slideTrack.children(this.options.slide)),
            o.$slideTrack.children(this.options.slide).detach(),
            o.$slideTrack.append(o.$slides),
            (o.$slidesCache = o.$slides),
            void o.reinit())
        );
      }),
    (e.prototype.setCSS = function (i) {
      var e,
        t,
        o = this,
        s = {};
      !0 === o.options.rtl && (i = -i),
        (e = "left" == o.positionProp ? Math.ceil(i) + "px" : "0px"),
        (t = "top" == o.positionProp ? Math.ceil(i) + "px" : "0px"),
        (s[o.positionProp] = i),
        !1 === o.transformsEnabled
          ? o.$slideTrack.css(s)
          : ((s = {}),
            !1 === o.cssTransitions
              ? ((s[o.animType] = "translate(" + e + ", " + t + ")"),
                o.$slideTrack.css(s))
              : ((s[o.animType] = "translate3d(" + e + ", " + t + ", 0px)"),
                o.$slideTrack.css(s)));
    }),
    (e.prototype.setDimensions = function () {
      var i = this;
      !1 === i.options.vertical
        ? !0 === i.options.centerMode &&
          i.$list.css({ padding: "0px " + i.options.centerPadding })
        : (i.$list.height(
            i.$slides.first().outerHeight(!0) * i.options.slidesToShow
          ),
          !0 === i.options.centerMode &&
            i.$list.css({ padding: i.options.centerPadding + " 0px" })),
        (i.listWidth = i.$list.width()),
        (i.listHeight = i.$list.height()),
        !1 === i.options.vertical && !1 === i.options.variableWidth
          ? ((i.slideWidth = Math.ceil(i.listWidth / i.options.slidesToShow)),
            i.$slideTrack.width(
              Math.ceil(
                i.slideWidth * i.$slideTrack.children(".slick-slide").length
              )
            ))
          : !0 === i.options.variableWidth
          ? i.$slideTrack.width(5e3 * i.slideCount)
          : ((i.slideWidth = Math.ceil(i.listWidth)),
            i.$slideTrack.height(
              Math.ceil(
                i.$slides.first().outerHeight(!0) *
                  i.$slideTrack.children(".slick-slide").length
              )
            ));
      var e = i.$slides.first().outerWidth(!0) - i.$slides.first().width();
      !1 === i.options.variableWidth &&
        i.$slideTrack.children(".slick-slide").width(i.slideWidth - e);
    }),
    (e.prototype.setFade = function () {
      var e,
        t = this;
      t.$slides.each(function (o, s) {
        (e = t.slideWidth * o * -1),
          !0 === t.options.rtl
            ? i(s).css({
                position: "relative",
                right: e,
                top: 0,
                zIndex: t.options.zIndex - 2,
                opacity: 0,
              })
            : i(s).css({
                position: "relative",
                left: e,
                top: 0,
                zIndex: t.options.zIndex - 2,
                opacity: 0,
              });
      }),
        t.$slides
          .eq(t.currentSlide)
          .css({ zIndex: t.options.zIndex - 1, opacity: 1 });
    }),
    (e.prototype.setHeight = function () {
      var i = this;
      if (
        1 === i.options.slidesToShow &&
        !0 === i.options.adaptiveHeight &&
        !1 === i.options.vertical
      ) {
        var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
        i.$list.css("height", e);
      }
    }),
    (e.prototype.setOption = e.prototype.slickSetOption =
      function () {
        var e,
          t,
          o,
          s,
          n,
          r = this,
          l = !1;
        if (
          ("object" === i.type(arguments[0])
            ? ((o = arguments[0]), (l = arguments[1]), (n = "multiple"))
            : "string" === i.type(arguments[0]) &&
              ((o = arguments[0]),
              (s = arguments[1]),
              (l = arguments[2]),
              "responsive" === arguments[0] && "array" === i.type(arguments[1])
                ? (n = "responsive")
                : void 0 !== arguments[1] && (n = "single")),
          "single" === n)
        )
          r.options[o] = s;
        else if ("multiple" === n)
          i.each(o, function (i, e) {
            r.options[i] = e;
          });
        else if ("responsive" === n)
          for (t in s)
            if ("array" !== i.type(r.options.responsive))
              r.options.responsive = [s[t]];
            else {
              for (e = r.options.responsive.length - 1; e >= 0; )
                r.options.responsive[e].breakpoint === s[t].breakpoint &&
                  r.options.responsive.splice(e, 1),
                  e--;
              r.options.responsive.push(s[t]);
            }
        l && (r.unload(), r.reinit());
      }),
    (e.prototype.setPosition = function () {
      var i = this;
      i.setDimensions(),
        i.setHeight(),
        !1 === i.options.fade
          ? i.setCSS(i.getLeft(i.currentSlide))
          : i.setFade(),
        i.$slider.trigger("setPosition", [i]);
    }),
    (e.prototype.setProps = function () {
      var i = this,
        e = document.body.style;
      (i.positionProp = !0 === i.options.vertical ? "top" : "left"),
        "top" === i.positionProp
          ? i.$slider.addClass("slick-vertical")
          : i.$slider.removeClass("slick-vertical"),
        (void 0 === e.WebkitTransition &&
          void 0 === e.MozTransition &&
          void 0 === e.msTransition) ||
          (!0 === i.options.useCSS && (i.cssTransitions = !0)),
        i.options.fade &&
          ("number" == typeof i.options.zIndex
            ? i.options.zIndex < 3 && (i.options.zIndex = 3)
            : (i.options.zIndex = i.defaults.zIndex)),
        void 0 !== e.OTransform &&
          ((i.animType = "OTransform"),
          (i.transformType = "-o-transform"),
          (i.transitionType = "OTransition"),
          void 0 === e.perspectiveProperty &&
            void 0 === e.webkitPerspective &&
            (i.animType = !1)),
        void 0 !== e.MozTransform &&
          ((i.animType = "MozTransform"),
          (i.transformType = "-moz-transform"),
          (i.transitionType = "MozTransition"),
          void 0 === e.perspectiveProperty &&
            void 0 === e.MozPerspective &&
            (i.animType = !1)),
        void 0 !== e.webkitTransform &&
          ((i.animType = "webkitTransform"),
          (i.transformType = "-webkit-transform"),
          (i.transitionType = "webkitTransition"),
          void 0 === e.perspectiveProperty &&
            void 0 === e.webkitPerspective &&
            (i.animType = !1)),
        void 0 !== e.msTransform &&
          ((i.animType = "msTransform"),
          (i.transformType = "-ms-transform"),
          (i.transitionType = "msTransition"),
          void 0 === e.msTransform && (i.animType = !1)),
        void 0 !== e.transform &&
          !1 !== i.animType &&
          ((i.animType = "transform"),
          (i.transformType = "transform"),
          (i.transitionType = "transition")),
        (i.transformsEnabled =
          i.options.useTransform && null !== i.animType && !1 !== i.animType);
    }),
    (e.prototype.setSlideClasses = function (i) {
      var e,
        t,
        o,
        s,
        n = this;
      if (
        ((t = n.$slider
          .find(".slick-slide")
          .removeClass("slick-active slick-center slick-current")
          .attr("aria-hidden", "true")),
        n.$slides.eq(i).addClass("slick-current"),
        !0 === n.options.centerMode)
      ) {
        var r = n.options.slidesToShow % 2 == 0 ? 1 : 0;
        (e = Math.floor(n.options.slidesToShow / 2)),
          !0 === n.options.infinite &&
            (i >= e && i <= n.slideCount - 1 - e
              ? n.$slides
                  .slice(i - e + r, i + e + 1)
                  .addClass("slick-active")
                  .attr("aria-hidden", "false")
              : ((o = n.options.slidesToShow + i),
                t
                  .slice(o - e + 1 + r, o + e + 2)
                  .addClass("slick-active")
                  .attr("aria-hidden", "false")),
            0 === i
              ? t
                  .eq(t.length - 1 - n.options.slidesToShow)
                  .addClass("slick-center")
              : i === n.slideCount - 1 &&
                t.eq(n.options.slidesToShow).addClass("slick-center")),
          n.$slides.eq(i).addClass("slick-center");
      } else
        i >= 0 && i <= n.slideCount - n.options.slidesToShow
          ? n.$slides
              .slice(i, i + n.options.slidesToShow)
              .addClass("slick-active")
              .attr("aria-hidden", "false")
          : t.length <= n.options.slidesToShow
          ? t.addClass("slick-active").attr("aria-hidden", "false")
          : ((s = n.slideCount % n.options.slidesToShow),
            (o = !0 === n.options.infinite ? n.options.slidesToShow + i : i),
            n.options.slidesToShow == n.options.slidesToScroll &&
            n.slideCount - i < n.options.slidesToShow
              ? t
                  .slice(o - (n.options.slidesToShow - s), o + s)
                  .addClass("slick-active")
                  .attr("aria-hidden", "false")
              : t
                  .slice(o, o + n.options.slidesToShow)
                  .addClass("slick-active")
                  .attr("aria-hidden", "false"));
      ("ondemand" !== n.options.lazyLoad &&
        "anticipated" !== n.options.lazyLoad) ||
        n.lazyLoad();
    }),
    (e.prototype.setupInfinite = function () {
      var e,
        t,
        o,
        s = this;
      if (
        (!0 === s.options.fade && (s.options.centerMode = !1),
        !0 === s.options.infinite &&
          !1 === s.options.fade &&
          ((t = null), s.slideCount > s.options.slidesToShow))
      ) {
        for (
          o =
            !0 === s.options.centerMode
              ? s.options.slidesToShow + 1
              : s.options.slidesToShow,
            e = s.slideCount;
          e > s.slideCount - o;
          e -= 1
        )
          (t = e - 1),
            i(s.$slides[t])
              .clone(!0)
              .attr("id", "")
              .attr("data-slick-index", t - s.slideCount)
              .prependTo(s.$slideTrack)
              .addClass("slick-cloned");
        for (e = 0; e < o + s.slideCount; e += 1)
          (t = e),
            i(s.$slides[t])
              .clone(!0)
              .attr("id", "")
              .attr("data-slick-index", t + s.slideCount)
              .appendTo(s.$slideTrack)
              .addClass("slick-cloned");
        s.$slideTrack
          .find(".slick-cloned")
          .find("[id]")
          .each(function () {
            i(this).attr("id", "");
          });
      }
    }),
    (e.prototype.interrupt = function (i) {
      i || this.autoPlay(), (this.interrupted = i);
    }),
    (e.prototype.selectHandler = function (e) {
      var t = this,
        o = i(e.target).is(".slick-slide")
          ? i(e.target)
          : i(e.target).parents(".slick-slide"),
        s = parseInt(o.attr("data-slick-index"));
      return (
        s || (s = 0),
        t.slideCount <= t.options.slidesToShow
          ? void t.slideHandler(s, !1, !0)
          : void t.slideHandler(s)
      );
    }),
    (e.prototype.slideHandler = function (i, e, t) {
      var o,
        s,
        n,
        r,
        l,
        d = null,
        a = this;
      if (
        ((e = e || !1),
        !(
          (!0 === a.animating && !0 === a.options.waitForAnimate) ||
          (!0 === a.options.fade && a.currentSlide === i)
        ))
      )
        return (
          !1 === e && a.asNavFor(i),
          (o = i),
          (d = a.getLeft(o)),
          (r = a.getLeft(a.currentSlide)),
          (a.currentLeft = null === a.swipeLeft ? r : a.swipeLeft),
          !1 === a.options.infinite &&
          !1 === a.options.centerMode &&
          (i < 0 || i > a.getDotCount() * a.options.slidesToScroll)
            ? void (
                !1 === a.options.fade &&
                ((o = a.currentSlide),
                !0 !== t && a.slideCount > a.options.slidesToShow
                  ? a.animateSlide(r, function () {
                      a.postSlide(o);
                    })
                  : a.postSlide(o))
              )
            : !1 === a.options.infinite &&
              !0 === a.options.centerMode &&
              (i < 0 || i > a.slideCount - a.options.slidesToScroll)
            ? void (
                !1 === a.options.fade &&
                ((o = a.currentSlide),
                !0 !== t && a.slideCount > a.options.slidesToShow
                  ? a.animateSlide(r, function () {
                      a.postSlide(o);
                    })
                  : a.postSlide(o))
              )
            : (a.options.autoplay && clearInterval(a.autoPlayTimer),
              (s =
                o < 0
                  ? a.slideCount % a.options.slidesToScroll != 0
                    ? a.slideCount - (a.slideCount % a.options.slidesToScroll)
                    : a.slideCount + o
                  : o >= a.slideCount
                  ? a.slideCount % a.options.slidesToScroll != 0
                    ? 0
                    : o - a.slideCount
                  : o),
              (a.animating = !0),
              a.$slider.trigger("beforeChange", [a, a.currentSlide, s]),
              (n = a.currentSlide),
              (a.currentSlide = s),
              a.setSlideClasses(a.currentSlide),
              a.options.asNavFor &&
                (l = (l = a.getNavTarget()).slick("getSlick")).slideCount <=
                  l.options.slidesToShow &&
                l.setSlideClasses(a.currentSlide),
              a.updateDots(),
              a.updateArrows(),
              !0 === a.options.fade
                ? (!0 !== t
                    ? (a.fadeSlideOut(n),
                      a.fadeSlide(s, function () {
                        a.postSlide(s);
                      }))
                    : a.postSlide(s),
                  void a.animateHeight())
                : void (!0 !== t && a.slideCount > a.options.slidesToShow
                    ? a.animateSlide(d, function () {
                        a.postSlide(s);
                      })
                    : a.postSlide(s)))
        );
    }),
    (e.prototype.startLoad = function () {
      var i = this;
      !0 === i.options.arrows &&
        i.slideCount > i.options.slidesToShow &&
        (i.$prevArrow.hide(), i.$nextArrow.hide()),
        !0 === i.options.dots &&
          i.slideCount > i.options.slidesToShow &&
          i.$dots.hide(),
        i.$slider.addClass("slick-loading");
    }),
    (e.prototype.swipeDirection = function () {
      var i,
        e,
        t,
        o,
        s = this;
      return (
        (i = s.touchObject.startX - s.touchObject.curX),
        (e = s.touchObject.startY - s.touchObject.curY),
        (t = Math.atan2(e, i)),
        (o = Math.round((180 * t) / Math.PI)) < 0 && (o = 360 - Math.abs(o)),
        o <= 45 && o >= 0
          ? !1 === s.options.rtl
            ? "left"
            : "right"
          : o <= 360 && o >= 315
          ? !1 === s.options.rtl
            ? "left"
            : "right"
          : o >= 135 && o <= 225
          ? !1 === s.options.rtl
            ? "right"
            : "left"
          : !0 === s.options.verticalSwiping
          ? o >= 35 && o <= 135
            ? "down"
            : "up"
          : "vertical"
      );
    }),
    (e.prototype.swipeEnd = function (i) {
      var e,
        t,
        o = this;
      if (((o.dragging = !1), (o.swiping = !1), o.scrolling))
        return (o.scrolling = !1), !1;
      if (
        ((o.interrupted = !1),
        (o.shouldClick = !(o.touchObject.swipeLength > 10)),
        void 0 === o.touchObject.curX)
      )
        return !1;
      if (
        (!0 === o.touchObject.edgeHit &&
          o.$slider.trigger("edge", [o, o.swipeDirection()]),
        o.touchObject.swipeLength >= o.touchObject.minSwipe)
      ) {
        switch ((t = o.swipeDirection())) {
          case "left":
          case "down":
            (e = o.options.swipeToSlide
              ? o.checkNavigable(o.currentSlide + o.getSlideCount())
              : o.currentSlide + o.getSlideCount()),
              (o.currentDirection = 0);
            break;
          case "right":
          case "up":
            (e = o.options.swipeToSlide
              ? o.checkNavigable(o.currentSlide - o.getSlideCount())
              : o.currentSlide - o.getSlideCount()),
              (o.currentDirection = 1);
        }
        "vertical" != t &&
          (o.slideHandler(e),
          (o.touchObject = {}),
          o.$slider.trigger("swipe", [o, t]));
      } else
        o.touchObject.startX !== o.touchObject.curX &&
          (o.slideHandler(o.currentSlide), (o.touchObject = {}));
    }),
    (e.prototype.swipeHandler = function (i) {
      var e = this;
      if (
        !(
          !1 === e.options.swipe ||
          ("ontouchend" in document && !1 === e.options.swipe) ||
          (!1 === e.options.draggable && -1 !== i.type.indexOf("mouse"))
        )
      )
        switch (
          ((e.touchObject.fingerCount =
            i.originalEvent && void 0 !== i.originalEvent.touches
              ? i.originalEvent.touches.length
              : 1),
          (e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold),
          !0 === e.options.verticalSwiping &&
            (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold),
          i.data.action)
        ) {
          case "start":
            e.swipeStart(i);
            break;
          case "move":
            e.swipeMove(i);
            break;
          case "end":
            e.swipeEnd(i);
        }
    }),
    (e.prototype.swipeMove = function (i) {
      var e,
        t,
        o,
        s,
        n,
        r,
        l = this;
      return (
        (n = void 0 !== i.originalEvent ? i.originalEvent.touches : null),
        !(!l.dragging || l.scrolling || (n && 1 !== n.length)) &&
          ((e = l.getLeft(l.currentSlide)),
          (l.touchObject.curX = void 0 !== n ? n[0].pageX : i.clientX),
          (l.touchObject.curY = void 0 !== n ? n[0].pageY : i.clientY),
          (l.touchObject.swipeLength = Math.round(
            Math.sqrt(Math.pow(l.touchObject.curX - l.touchObject.startX, 2))
          )),
          (r = Math.round(
            Math.sqrt(Math.pow(l.touchObject.curY - l.touchObject.startY, 2))
          )),
          !l.options.verticalSwiping && !l.swiping && r > 4
            ? ((l.scrolling = !0), !1)
            : (!0 === l.options.verticalSwiping &&
                (l.touchObject.swipeLength = r),
              (t = l.swipeDirection()),
              void 0 !== i.originalEvent &&
                l.touchObject.swipeLength > 4 &&
                ((l.swiping = !0), i.preventDefault()),
              (s =
                (!1 === l.options.rtl ? 1 : -1) *
                (l.touchObject.curX > l.touchObject.startX ? 1 : -1)),
              !0 === l.options.verticalSwiping &&
                (s = l.touchObject.curY > l.touchObject.startY ? 1 : -1),
              (o = l.touchObject.swipeLength),
              (l.touchObject.edgeHit = !1),
              !1 === l.options.infinite &&
                ((0 === l.currentSlide && "right" === t) ||
                  (l.currentSlide >= l.getDotCount() && "left" === t)) &&
                ((o = l.touchObject.swipeLength * l.options.edgeFriction),
                (l.touchObject.edgeHit = !0)),
              !1 === l.options.vertical
                ? (l.swipeLeft = e + o * s)
                : (l.swipeLeft = e + o * (l.$list.height() / l.listWidth) * s),
              !0 === l.options.verticalSwiping && (l.swipeLeft = e + o * s),
              !0 !== l.options.fade &&
                !1 !== l.options.touchMove &&
                (!0 === l.animating
                  ? ((l.swipeLeft = null), !1)
                  : void l.setCSS(l.swipeLeft))))
      );
    }),
    (e.prototype.swipeStart = function (i) {
      var e,
        t = this;
      return (
        (t.interrupted = !0),
        1 !== t.touchObject.fingerCount ||
        t.slideCount <= t.options.slidesToShow
          ? ((t.touchObject = {}), !1)
          : (void 0 !== i.originalEvent &&
              void 0 !== i.originalEvent.touches &&
              (e = i.originalEvent.touches[0]),
            (t.touchObject.startX = t.touchObject.curX =
              void 0 !== e ? e.pageX : i.clientX),
            (t.touchObject.startY = t.touchObject.curY =
              void 0 !== e ? e.pageY : i.clientY),
            void (t.dragging = !0))
      );
    }),
    (e.prototype.unfilterSlides = e.prototype.slickUnfilter =
      function () {
        var i = this;
        null !== i.$slidesCache &&
          (i.unload(),
          i.$slideTrack.children(this.options.slide).detach(),
          i.$slidesCache.appendTo(i.$slideTrack),
          i.reinit());
      }),
    (e.prototype.unload = function () {
      var e = this;
      i(".slick-cloned", e.$slider).remove(),
        e.$dots && e.$dots.remove(),
        e.$prevArrow &&
          e.htmlExpr.test(e.options.prevArrow) &&
          e.$prevArrow.remove(),
        e.$nextArrow &&
          e.htmlExpr.test(e.options.nextArrow) &&
          e.$nextArrow.remove(),
        e.$slides
          .removeClass("slick-slide slick-active slick-visible slick-current")
          .attr("aria-hidden", "true")
          .css("width", "");
    }),
    (e.prototype.unslick = function (i) {
      var e = this;
      e.$slider.trigger("unslick", [e, i]), e.destroy();
    }),
    (e.prototype.updateArrows = function () {
      var i = this;
      Math.floor(i.options.slidesToShow / 2),
        !0 === i.options.arrows &&
          i.slideCount > i.options.slidesToShow &&
          !i.options.infinite &&
          (i.$prevArrow
            .removeClass("slick-disabled")
            .attr("aria-disabled", "false"),
          i.$nextArrow
            .removeClass("slick-disabled")
            .attr("aria-disabled", "false"),
          0 === i.currentSlide
            ? (i.$prevArrow
                .addClass("slick-disabled")
                .attr("aria-disabled", "true"),
              i.$nextArrow
                .removeClass("slick-disabled")
                .attr("aria-disabled", "false"))
            : i.currentSlide >= i.slideCount - i.options.slidesToShow &&
              !1 === i.options.centerMode
            ? (i.$nextArrow
                .addClass("slick-disabled")
                .attr("aria-disabled", "true"),
              i.$prevArrow
                .removeClass("slick-disabled")
                .attr("aria-disabled", "false"))
            : i.currentSlide >= i.slideCount - 1 &&
              !0 === i.options.centerMode &&
              (i.$nextArrow
                .addClass("slick-disabled")
                .attr("aria-disabled", "true"),
              i.$prevArrow
                .removeClass("slick-disabled")
                .attr("aria-disabled", "false")));
    }),
    (e.prototype.updateDots = function () {
      var i = this;
      null !== i.$dots &&
        (i.$dots.find("li").removeClass("slick-active").end(),
        i.$dots
          .find("li")
          .eq(Math.floor(i.currentSlide / i.options.slidesToScroll))
          .addClass("slick-active"));
    }),
    (e.prototype.visibility = function () {
      var i = this;
      i.options.autoplay &&
        (document[i.hidden] ? (i.interrupted = !0) : (i.interrupted = !1));
    }),
    (i.fn.slick = function () {
      var i,
        t,
        o = this,
        s = arguments[0],
        n = Array.prototype.slice.call(arguments, 1),
        r = o.length;
      for (i = 0; i < r; i++)
        if (
          ("object" == typeof s || void 0 === s
            ? (o[i].slick = new e(o[i], s))
            : (t = o[i].slick[s].apply(o[i].slick, n)),
          void 0 !== t)
        )
          return t;
      return o;
    });
});
//End Slick Slider

/* @preserve
 * Leaflet 1.3.4+Detached: 0e566b2ad5e696ba9f79a9d48a7e51c8f4892441.0e566b2, a JS library for interactive maps. http://leafletjs.com
 * (c) 2010-2018 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */
!(function (t, i) {
  "object" == typeof exports && "undefined" != typeof module
    ? i(exports)
    : "function" == typeof define && define.amd
    ? define(["exports"], i)
    : i((t.L = {}));
})(this, function (t) {
  "use strict";
  function i(t) {
    var i, e, n, o;
    for (e = 1, n = arguments.length; e < n; e++)
      for (i in (o = arguments[e])) t[i] = o[i];
    return t;
  }
  function e(t, i) {
    var e = Array.prototype.slice;
    if (t.bind) return t.bind.apply(t, e.call(arguments, 1));
    var n = e.call(arguments, 2);
    return function () {
      return t.apply(i, n.length ? n.concat(e.call(arguments)) : arguments);
    };
  }
  function n(t) {
    return (t._leaflet_id = t._leaflet_id || ++Gt), t._leaflet_id;
  }
  function o(t, i, e) {
    var n, o, s, r;
    return (
      (r = function () {
        (n = !1), o && (s.apply(e, o), (o = !1));
      }),
      (s = function () {
        n
          ? (o = arguments)
          : (t.apply(e, arguments), setTimeout(r, i), (n = !0));
      })
    );
  }
  function s(t, i, e) {
    var n = i[1],
      o = i[0],
      s = n - o;
    return t === n && e ? t : ((((t - o) % s) + s) % s) + o;
  }
  function r() {
    return !1;
  }
  function a(t, i) {
    var e = Math.pow(10, void 0 === i ? 6 : i);
    return Math.round(t * e) / e;
  }
  function h(t) {
    return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
  }
  function u(t) {
    return h(t).split(/\s+/);
  }
  function l(t, i) {
    for (var e in (t.hasOwnProperty("options") ||
      (t.options = t.options ? Vt(t.options) : {}),
    i))
      t.options[e] = i[e];
    return t.options;
  }
  function c(t, i, e) {
    var n = [];
    for (var o in t)
      n.push(
        encodeURIComponent(e ? o.toUpperCase() : o) +
          "=" +
          encodeURIComponent(t[o])
      );
    return (i && -1 !== i.indexOf("?") ? "&" : "?") + n.join("&");
  }
  function _(t, i) {
    return t.replace(Kt, function (t, e) {
      var n = i[e];
      if (void 0 === n) throw new Error("No value provided for variable " + t);
      return "function" == typeof n && (n = n(i)), n;
    });
  }
  function d(t, i) {
    for (var e = 0; e < t.length; e++) if (t[e] === i) return e;
    return -1;
  }
  function p(t) {
    return window["webkit" + t] || window["moz" + t] || window["ms" + t];
  }
  function m(t) {
    var i = +new Date(),
      e = Math.max(0, 16 - (i - Jt));
    return (Jt = i + e), window.setTimeout(t, e);
  }
  function f(t, i, n) {
    if (!n || $t !== m) return $t.call(window, e(t, i));
    t.call(i);
  }
  function g(t) {
    t && Qt.call(window, t);
  }
  function v() {}
  function y(t, i, e) {
    (this.x = e ? Math.round(t) : t), (this.y = e ? Math.round(i) : i);
  }
  function x(t, i, e) {
    return t instanceof y
      ? t
      : Yt(t)
      ? new y(t[0], t[1])
      : null == t
      ? t
      : "object" == typeof t && "x" in t && "y" in t
      ? new y(t.x, t.y)
      : new y(t, i, e);
  }
  function w(t, i) {
    if (t)
      for (var e = i ? [t, i] : t, n = 0, o = e.length; n < o; n++)
        this.extend(e[n]);
  }
  function P(t, i) {
    return !t || t instanceof w ? t : new w(t, i);
  }
  function b(t, i) {
    if (t)
      for (var e = i ? [t, i] : t, n = 0, o = e.length; n < o; n++)
        this.extend(e[n]);
  }
  function T(t, i) {
    return t instanceof b ? t : new b(t, i);
  }
  function z(t, i, e) {
    if (isNaN(t) || isNaN(i))
      throw new Error("Invalid LatLng object: (" + t + ", " + i + ")");
    (this.lat = +t), (this.lng = +i), void 0 !== e && (this.alt = +e);
  }
  function M(t, i, e) {
    return t instanceof z
      ? t
      : Yt(t) && "object" != typeof t[0]
      ? 3 === t.length
        ? new z(t[0], t[1], t[2])
        : 2 === t.length
        ? new z(t[0], t[1])
        : null
      : null == t
      ? t
      : "object" == typeof t && "lat" in t
      ? new z(t.lat, "lng" in t ? t.lng : t.lon, t.alt)
      : void 0 === i
      ? null
      : new z(t, i, e);
  }
  function C(t, i, e, n) {
    if (Yt(t))
      return (
        (this._a = t[0]),
        (this._b = t[1]),
        (this._c = t[2]),
        void (this._d = t[3])
      );
    (this._a = t), (this._b = i), (this._c = e), (this._d = n);
  }
  function S(t, i, e, n) {
    return new C(t, i, e, n);
  }
  function Z(t) {
    return document.createElementNS("http://www.w3.org/2000/svg", t);
  }
  function E(t, i) {
    var e,
      n,
      o,
      s,
      r,
      a,
      h = "";
    for (e = 0, o = t.length; e < o; e++) {
      for (n = 0, s = (r = t[e]).length; n < s; n++)
        h += (n ? "L" : "M") + (a = r[n]).x + " " + a.y;
      h += i ? (Hi ? "z" : "x") : "";
    }
    return h || "M0 0";
  }
  function k(t) {
    return navigator.userAgent.toLowerCase().indexOf(t) >= 0;
  }
  function A(t, i, e, n) {
    return (
      "touchstart" === i
        ? B(t, e, n)
        : "touchmove" === i
        ? (function (t, i, e) {
            var n = function (t) {
              ((t.pointerType !== t.MSPOINTER_TYPE_MOUSE &&
                "mouse" !== t.pointerType) ||
                0 !== t.buttons) &&
                D(t, i);
            };
            (t["_leaflet_touchmove" + e] = n), t.addEventListener(Vi, n, !1);
          })(t, e, n)
        : "touchend" === i &&
          (function (t, i, e) {
            var n = function (t) {
              D(t, i);
            };
            (t["_leaflet_touchend" + e] = n),
              t.addEventListener(Gi, n, !1),
              t.addEventListener(Ki, n, !1);
          })(t, e, n),
      this
    );
  }
  function B(t, i, n) {
    var o = e(function (t) {
      if (
        "mouse" !== t.pointerType &&
        t.MSPOINTER_TYPE_MOUSE &&
        t.pointerType !== t.MSPOINTER_TYPE_MOUSE
      ) {
        if (!(Yi.indexOf(t.target.tagName) < 0)) return;
        gt(t);
      }
      D(t, i);
    });
    (t["_leaflet_touchstart" + n] = o),
      t.addEventListener(Ui, o, !1),
      Ji ||
        (document.documentElement.addEventListener(Ui, I, !0),
        document.documentElement.addEventListener(Vi, O, !0),
        document.documentElement.addEventListener(Gi, R, !0),
        document.documentElement.addEventListener(Ki, R, !0),
        (Ji = !0));
  }
  function I(t) {
    (Xi[t.pointerId] = t), $i++;
  }
  function O(t) {
    Xi[t.pointerId] && (Xi[t.pointerId] = t);
  }
  function R(t) {
    delete Xi[t.pointerId], $i--;
  }
  function D(t, i) {
    for (var e in ((t.touches = []), Xi)) t.touches.push(Xi[e]);
    (t.changedTouches = [t]), i(t);
  }
  function N(t, i, e) {
    function n(t) {
      var i;
      if (Oi) {
        if (!mi || "mouse" === t.pointerType) return;
        i = $i;
      } else i = t.touches.length;
      if (!(i > 1)) {
        var e = Date.now(),
          n = e - (s || e);
        (r = t.touches ? t.touches[0] : t), (a = n > 0 && n <= h), (s = e);
      }
    }
    function o(t) {
      if (a && !r.cancelBubble) {
        if (Oi) {
          if (!mi || "mouse" === t.pointerType) return;
          var e,
            n,
            o = {};
          for (n in r) (e = r[n]), (o[n] = e && e.bind ? e.bind(r) : e);
          r = o;
        }
        (r.type = "dblclick"), i(r), (s = null);
      }
    }
    var s,
      r,
      a = !1,
      h = 250;
    return (
      (t[ie + Qi + e] = n),
      (t[ie + te + e] = o),
      (t[ie + "dblclick" + e] = i),
      t.addEventListener(Qi, n, !1),
      t.addEventListener(te, o, !1),
      t.addEventListener("dblclick", i, !1),
      this
    );
  }
  function j(t, i) {
    var e = t[ie + Qi + i],
      n = t[ie + te + i],
      o = t[ie + "dblclick" + i];
    return (
      t.removeEventListener(Qi, e, !1),
      t.removeEventListener(te, n, !1),
      mi || t.removeEventListener("dblclick", o, !1),
      this
    );
  }
  function W(t) {
    return "string" == typeof t ? document.getElementById(t) : t;
  }
  function H(t, i) {
    var e = t.style[i] || (t.currentStyle && t.currentStyle[i]);
    if ((!e || "auto" === e) && document.defaultView) {
      var n = document.defaultView.getComputedStyle(t, null);
      e = n ? n[i] : null;
    }
    return "auto" === e ? null : e;
  }
  function F(t, i, e) {
    var n = document.createElement(t);
    return (n.className = i || ""), e && e.appendChild(n), n;
  }
  function q(t) {
    var i = t.parentNode;
    i && i.removeChild(t);
  }
  function U(t) {
    for (; t.firstChild; ) t.removeChild(t.firstChild);
  }
  function V(t) {
    var i = t.parentNode;
    i.lastChild !== t && i.appendChild(t);
  }
  function G(t) {
    var i = t.parentNode;
    i.firstChild !== t && i.insertBefore(t, i.firstChild);
  }
  function K(t, i) {
    if (void 0 !== t.classList) return t.classList.contains(i);
    var e = $(t);
    return e.length > 0 && new RegExp("(^|\\s)" + i + "(\\s|$)").test(e);
  }
  function Y(t, i) {
    if (void 0 !== t.classList)
      for (var e = u(i), n = 0, o = e.length; n < o; n++) t.classList.add(e[n]);
    else if (!K(t, i)) {
      var s = $(t);
      J(t, (s ? s + " " : "") + i);
    }
  }
  function X(t, i) {
    void 0 !== t.classList
      ? t.classList.remove(i)
      : J(t, h((" " + $(t) + " ").replace(" " + i + " ", " ")));
  }
  function J(t, i) {
    void 0 === t.className.baseVal
      ? (t.className = i)
      : (t.className.baseVal = i);
  }
  function $(t) {
    return void 0 === t.className.baseVal ? t.className : t.className.baseVal;
  }
  function Q(t, i) {
    "opacity" in t.style
      ? (t.style.opacity = i)
      : "filter" in t.style &&
        (function (t, i) {
          var e = !1,
            n = "DXImageTransform.Microsoft.Alpha";
          try {
            e = t.filters.item(n);
          } catch (t) {
            if (1 === i) return;
          }
          (i = Math.round(100 * i)),
            e
              ? ((e.Enabled = 100 !== i), (e.Opacity = i))
              : (t.style.filter += " progid:" + n + "(opacity=" + i + ")");
        })(t, i);
  }
  function tt(t) {
    for (var i = document.documentElement.style, e = 0; e < t.length; e++)
      if (t[e] in i) return t[e];
    return !1;
  }
  function it(t, i, e) {
    var n = i || new y(0, 0);
    t.style[ee] =
      (Ci
        ? "translate(" + n.x + "px," + n.y + "px)"
        : "translate3d(" + n.x + "px," + n.y + "px,0)") +
      (e ? " scale(" + e + ")" : "");
  }
  function et(t, i) {
    (t._leaflet_pos = i),
      Ei ? it(t, i) : ((t.style.left = i.x + "px"), (t.style.top = i.y + "px"));
  }
  function nt(t) {
    return t._leaflet_pos || new y(0, 0);
  }
  function ot() {
    lt(window, "dragstart", gt);
  }
  function st() {
    ct(window, "dragstart", gt);
  }
  function rt(t) {
    for (; -1 === t.tabIndex; ) t = t.parentNode;
    t.style &&
      (at(),
      (re = t),
      (ae = t.style.outline),
      (t.style.outline = "none"),
      lt(window, "keydown", at));
  }
  function at() {
    re &&
      ((re.style.outline = ae),
      (re = void 0),
      (ae = void 0),
      ct(window, "keydown", at));
  }
  function ht(t) {
    do {
      t = t.parentNode;
    } while (!((t.offsetWidth && t.offsetHeight) || t === document.body));
    return t;
  }
  function ut(t) {
    var i = t.getBoundingClientRect();
    return {
      x: i.width / t.offsetWidth || 1,
      y: i.height / t.offsetHeight || 1,
      boundingClientRect: i,
    };
  }
  function lt(t, i, e, n) {
    if ("object" == typeof i) for (var o in i) _t(t, o, i[o], e);
    else for (var s = 0, r = (i = u(i)).length; s < r; s++) _t(t, i[s], e, n);
    return this;
  }
  function ct(t, i, e, n) {
    if ("object" == typeof i) for (var o in i) dt(t, o, i[o], e);
    else if (i)
      for (var s = 0, r = (i = u(i)).length; s < r; s++) dt(t, i[s], e, n);
    else {
      for (var a in t[le]) dt(t, a, t[le][a]);
      delete t[le];
    }
    return this;
  }
  function _t(t, i, e, o) {
    var s = i + n(e) + (o ? "_" + n(o) : "");
    if (t[le] && t[le][s]) return this;
    var r = function (i) {
        return e.call(o || t, i || window.event);
      },
      a = r;
    Oi && 0 === i.indexOf("touch")
      ? A(t, i, r, s)
      : !Ri || "dblclick" !== i || !N || (Oi && Li)
      ? "addEventListener" in t
        ? "mousewheel" === i
          ? t.addEventListener("onwheel" in t ? "wheel" : "mousewheel", r, !1)
          : "mouseenter" === i || "mouseleave" === i
          ? ((r = function (i) {
              (i = i || window.event), Pt(t, i) && a(i);
            }),
            t.addEventListener(
              "mouseenter" === i ? "mouseover" : "mouseout",
              r,
              !1
            ))
          : ("click" === i &&
              gi &&
              (r = function (t) {
                !(function (t, i) {
                  var e =
                      t.timeStamp ||
                      (t.originalEvent && t.originalEvent.timeStamp),
                    n = he && e - he;
                  (n && n > 100 && n < 500) ||
                  (t.target._simulatedClick && !t._simulated)
                    ? vt(t)
                    : ((he = e), i(t));
                })(t, a);
              }),
            t.addEventListener(i, r, !1))
        : "attachEvent" in t && t.attachEvent("on" + i, r)
      : N(t, r, s),
      (t[le] = t[le] || {}),
      (t[le][s] = r);
  }
  function dt(t, i, e, o) {
    var s = i + n(e) + (o ? "_" + n(o) : ""),
      r = t[le] && t[le][s];
    if (!r) return this;
    Oi && 0 === i.indexOf("touch")
      ? (function (t, i, e) {
          var n = t["_leaflet_" + i + e];
          "touchstart" === i
            ? t.removeEventListener(Ui, n, !1)
            : "touchmove" === i
            ? t.removeEventListener(Vi, n, !1)
            : "touchend" === i &&
              (t.removeEventListener(Gi, n, !1),
              t.removeEventListener(Ki, n, !1));
        })(t, i, s)
      : !Ri || "dblclick" !== i || !j || (Oi && Li)
      ? "removeEventListener" in t
        ? "mousewheel" === i
          ? t.removeEventListener(
              "onwheel" in t ? "wheel" : "mousewheel",
              r,
              !1
            )
          : t.removeEventListener(
              "mouseenter" === i
                ? "mouseover"
                : "mouseleave" === i
                ? "mouseout"
                : i,
              r,
              !1
            )
        : "detachEvent" in t && t.detachEvent("on" + i, r)
      : j(t, s),
      (t[le][s] = null);
  }
  function pt(t) {
    return (
      t.stopPropagation
        ? t.stopPropagation()
        : t.originalEvent
        ? (t.originalEvent._stopped = !0)
        : (t.cancelBubble = !0),
      Lt(t),
      this
    );
  }
  function mt(t) {
    return _t(t, "mousewheel", pt), this;
  }
  function ft(t) {
    return lt(t, "mousedown touchstart dblclick", pt), _t(t, "click", wt), this;
  }
  function gt(t) {
    return t.preventDefault ? t.preventDefault() : (t.returnValue = !1), this;
  }
  function vt(t) {
    return gt(t), pt(t), this;
  }
  function yt(t, i) {
    if (!i) return new y(t.clientX, t.clientY);
    var e = ut(i),
      n = e.boundingClientRect;
    return new y(
      (t.clientX - n.left) / e.x - i.clientLeft,
      (t.clientY - n.top) / e.y - i.clientTop
    );
  }
  function xt(t) {
    return mi
      ? t.wheelDeltaY / 2
      : t.deltaY && 0 === t.deltaMode
      ? -t.deltaY / ce
      : t.deltaY && 1 === t.deltaMode
      ? 20 * -t.deltaY
      : t.deltaY && 2 === t.deltaMode
      ? 60 * -t.deltaY
      : t.deltaX || t.deltaZ
      ? 0
      : t.wheelDelta
      ? (t.wheelDeltaY || t.wheelDelta) / 2
      : t.detail && Math.abs(t.detail) < 32765
      ? 20 * -t.detail
      : t.detail
      ? (t.detail / -32765) * 60
      : 0;
  }
  function wt(t) {
    _e[t.type] = !0;
  }
  function Lt(t) {
    var i = _e[t.type];
    return (_e[t.type] = !1), i;
  }
  function Pt(t, i) {
    var e = i.relatedTarget;
    if (!e) return !0;
    try {
      for (; e && e !== t; ) e = e.parentNode;
    } catch (t) {
      return !1;
    }
    return e !== t;
  }
  function bt(t, i) {
    if (!i || !t.length) return t.slice();
    var e = i * i;
    return (function (t, i) {
      var e = t.length,
        n = new (typeof Uint8Array != void 0 + "" ? Uint8Array : Array)(e);
      (n[0] = n[e - 1] = 1),
        (function t(i, e, n, o, s) {
          var r,
            a,
            h,
            u = 0;
          for (a = o + 1; a <= s - 1; a++)
            (h = Zt(i[a], i[o], i[s], !0)) > u && ((r = a), (u = h));
          u > n && ((e[r] = 1), t(i, e, n, o, r), t(i, e, n, r, s));
        })(t, n, i, 0, e - 1);
      var o,
        s = [];
      for (o = 0; o < e; o++) n[o] && s.push(t[o]);
      return s;
    })(
      (t = (function (t, i) {
        for (var e = [t[0]], n = 1, o = 0, s = t.length; n < s; n++)
          St(t[n], t[o]) > i && (e.push(t[n]), (o = n));
        return o < s - 1 && e.push(t[s - 1]), e;
      })(t, e)),
      e
    );
  }
  function Tt(t, i, e) {
    return Math.sqrt(Zt(t, i, e, !0));
  }
  function zt(t, i, e, n, o) {
    var s,
      r,
      a,
      h = n ? Pe : Ct(t, e),
      u = Ct(i, e);
    for (Pe = u; ; ) {
      if (!(h | u)) return [t, i];
      if (h & u) return !1;
      (a = Ct((r = Mt(t, i, (s = h || u), e, o)), e)),
        s === h ? ((t = r), (h = a)) : ((i = r), (u = a));
    }
  }
  function Mt(t, i, e, n, o) {
    var s,
      r,
      a = i.x - t.x,
      h = i.y - t.y,
      u = n.min,
      l = n.max;
    return (
      8 & e
        ? ((s = t.x + (a * (l.y - t.y)) / h), (r = l.y))
        : 4 & e
        ? ((s = t.x + (a * (u.y - t.y)) / h), (r = u.y))
        : 2 & e
        ? ((s = l.x), (r = t.y + (h * (l.x - t.x)) / a))
        : 1 & e && ((s = u.x), (r = t.y + (h * (u.x - t.x)) / a)),
      new y(s, r, o)
    );
  }
  function Ct(t, i) {
    var e = 0;
    return (
      t.x < i.min.x ? (e |= 1) : t.x > i.max.x && (e |= 2),
      t.y < i.min.y ? (e |= 4) : t.y > i.max.y && (e |= 8),
      e
    );
  }
  function St(t, i) {
    var e = i.x - t.x,
      n = i.y - t.y;
    return e * e + n * n;
  }
  function Zt(t, i, e, n) {
    var o,
      s = i.x,
      r = i.y,
      a = e.x - s,
      h = e.y - r,
      u = a * a + h * h;
    return (
      u > 0 &&
        ((o = ((t.x - s) * a + (t.y - r) * h) / u) > 1
          ? ((s = e.x), (r = e.y))
          : o > 0 && ((s += a * o), (r += h * o))),
      (a = t.x - s),
      (h = t.y - r),
      n ? a * a + h * h : new y(s, r)
    );
  }
  function Et(t) {
    return !Yt(t[0]) || ("object" != typeof t[0][0] && void 0 !== t[0][0]);
  }
  function kt(t) {
    return (
      console.warn(
        "Deprecated use of _flat, please use L.LineUtil.isFlat instead."
      ),
      Et(t)
    );
  }
  function At(t, i, e) {
    var n,
      o,
      s,
      r,
      a,
      h,
      u,
      l,
      c,
      _ = [1, 4, 2, 8];
    for (o = 0, u = t.length; o < u; o++) t[o]._code = Ct(t[o], i);
    for (r = 0; r < 4; r++) {
      for (l = _[r], n = [], o = 0, s = (u = t.length) - 1; o < u; s = o++)
        (a = t[o]),
          (h = t[s]),
          a._code & l
            ? h._code & l ||
              (((c = Mt(h, a, l, i, e))._code = Ct(c, i)), n.push(c))
            : (h._code & l &&
                (((c = Mt(h, a, l, i, e))._code = Ct(c, i)), n.push(c)),
              n.push(a));
      t = n;
    }
    return t;
  }
  function Bt(t, i) {
    var e,
      n,
      o,
      s,
      r = "Feature" === t.type ? t.geometry : t,
      a = r ? r.coordinates : null,
      h = [],
      u = i && i.pointToLayer,
      l = (i && i.coordsToLatLng) || It;
    if (!a && !r) return null;
    switch (r.type) {
      case "Point":
        return (e = l(a)), u ? u(t, e) : new Fe(e);
      case "MultiPoint":
        for (o = 0, s = a.length; o < s; o++)
          (e = l(a[o])), h.push(u ? u(t, e) : new Fe(e));
        return new Ne(h);
      case "LineString":
      case "MultiLineString":
        return (n = Ot(a, "LineString" === r.type ? 0 : 1, l)), new Ge(n, i);
      case "Polygon":
      case "MultiPolygon":
        return (n = Ot(a, "Polygon" === r.type ? 1 : 2, l)), new Ke(n, i);
      case "GeometryCollection":
        for (o = 0, s = r.geometries.length; o < s; o++) {
          var c = Bt(
            {
              geometry: r.geometries[o],
              type: "Feature",
              properties: t.properties,
            },
            i
          );
          c && h.push(c);
        }
        return new Ne(h);
      default:
        throw new Error("Invalid GeoJSON object.");
    }
  }
  function It(t) {
    return new z(t[1], t[0], t[2]);
  }
  function Ot(t, i, e) {
    for (var n, o = [], s = 0, r = t.length; s < r; s++)
      (n = i ? Ot(t[s], i - 1, e) : (e || It)(t[s])), o.push(n);
    return o;
  }
  function Rt(t, i) {
    return (
      (i = "number" == typeof i ? i : 6),
      void 0 !== t.alt
        ? [a(t.lng, i), a(t.lat, i), a(t.alt, i)]
        : [a(t.lng, i), a(t.lat, i)]
    );
  }
  function Dt(t, i, e, n) {
    for (var o = [], s = 0, r = t.length; s < r; s++)
      o.push(i ? Dt(t[s], i - 1, e, n) : Rt(t[s], n));
    return !i && e && o.push(o[0]), o;
  }
  function Nt(t, e) {
    return t.feature ? i({}, t.feature, { geometry: e }) : jt(e);
  }
  function jt(t) {
    return "Feature" === t.type || "FeatureCollection" === t.type
      ? t
      : { type: "Feature", properties: {}, geometry: t };
  }
  function Wt(t, i) {
    return new Ye(t, i);
  }
  function Ht(t, i) {
    return new rn(t, i);
  }
  function Ft(t) {
    return Wi ? new un(t) : null;
  }
  function qt(t) {
    return Hi || Fi ? new dn(t) : null;
  }
  var Ut = Object.freeze;
  Object.freeze = function (t) {
    return t;
  };
  var Vt =
      Object.create ||
      (function () {
        function t() {}
        return function (i) {
          return (t.prototype = i), new t();
        };
      })(),
    Gt = 0,
    Kt = /\{ *([\w_-]+) *\}/g,
    Yt =
      Array.isArray ||
      function (t) {
        return "[object Array]" === Object.prototype.toString.call(t);
      },
    Xt = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=",
    Jt = 0,
    $t = window.requestAnimationFrame || p("RequestAnimationFrame") || m,
    Qt =
      window.cancelAnimationFrame ||
      p("CancelAnimationFrame") ||
      p("CancelRequestAnimationFrame") ||
      function (t) {
        window.clearTimeout(t);
      },
    ti = (Object.freeze || Object)({
      freeze: Ut,
      extend: i,
      create: Vt,
      bind: e,
      lastId: Gt,
      stamp: n,
      throttle: o,
      wrapNum: s,
      falseFn: r,
      formatNum: a,
      trim: h,
      splitWords: u,
      setOptions: l,
      getParamString: c,
      template: _,
      isArray: Yt,
      indexOf: d,
      emptyImageUrl: Xt,
      requestFn: $t,
      cancelFn: Qt,
      requestAnimFrame: f,
      cancelAnimFrame: g,
    });
  (v.extend = function (t) {
    var e = function () {
        this.initialize && this.initialize.apply(this, arguments),
          this.callInitHooks();
      },
      n = (e.__super__ = this.prototype),
      o = Vt(n);
    for (var s in ((o.constructor = e), (e.prototype = o), this))
      this.hasOwnProperty(s) &&
        "prototype" !== s &&
        "__super__" !== s &&
        (e[s] = this[s]);
    return (
      t.statics && (i(e, t.statics), delete t.statics),
      t.includes &&
        ((function (t) {
          if ("undefined" != typeof L && L && L.Mixin) {
            t = Yt(t) ? t : [t];
            for (var i = 0; i < t.length; i++)
              t[i] === L.Mixin.Events &&
                console.warn(
                  "Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",
                  new Error().stack
                );
          }
        })(t.includes),
        i.apply(null, [o].concat(t.includes)),
        delete t.includes),
      o.options && (t.options = i(Vt(o.options), t.options)),
      i(o, t),
      (o._initHooks = []),
      (o.callInitHooks = function () {
        if (!this._initHooksCalled) {
          n.callInitHooks && n.callInitHooks.call(this),
            (this._initHooksCalled = !0);
          for (var t = 0, i = o._initHooks.length; t < i; t++)
            o._initHooks[t].call(this);
        }
      }),
      e
    );
  }),
    (v.include = function (t) {
      return i(this.prototype, t), this;
    }),
    (v.mergeOptions = function (t) {
      return i(this.prototype.options, t), this;
    }),
    (v.addInitHook = function (t) {
      var i = Array.prototype.slice.call(arguments, 1),
        e =
          "function" == typeof t
            ? t
            : function () {
                this[t].apply(this, i);
              };
      return (
        (this.prototype._initHooks = this.prototype._initHooks || []),
        this.prototype._initHooks.push(e),
        this
      );
    });
  var ii = {
    on: function (t, i, e) {
      if ("object" == typeof t) for (var n in t) this._on(n, t[n], i);
      else
        for (var o = 0, s = (t = u(t)).length; o < s; o++) this._on(t[o], i, e);
      return this;
    },
    off: function (t, i, e) {
      if (t)
        if ("object" == typeof t) for (var n in t) this._off(n, t[n], i);
        else
          for (var o = 0, s = (t = u(t)).length; o < s; o++)
            this._off(t[o], i, e);
      else delete this._events;
      return this;
    },
    _on: function (t, i, e) {
      this._events = this._events || {};
      var n = this._events[t];
      n || ((n = []), (this._events[t] = n)), e === this && (e = void 0);
      for (var o = { fn: i, ctx: e }, s = n, r = 0, a = s.length; r < a; r++)
        if (s[r].fn === i && s[r].ctx === e) return;
      s.push(o);
    },
    _off: function (t, i, e) {
      var n, o, s;
      if (this._events && (n = this._events[t]))
        if (i) {
          if ((e === this && (e = void 0), n))
            for (o = 0, s = n.length; o < s; o++) {
              var a = n[o];
              if (a.ctx === e && a.fn === i)
                return (
                  (a.fn = r),
                  this._firingCount && (this._events[t] = n = n.slice()),
                  void n.splice(o, 1)
                );
            }
        } else {
          for (o = 0, s = n.length; o < s; o++) n[o].fn = r;
          delete this._events[t];
        }
    },
    fire: function (t, e, n) {
      if (!this.listens(t, n)) return this;
      var o = i({}, e, {
        type: t,
        target: this,
        sourceTarget: (e && e.sourceTarget) || this,
      });
      if (this._events) {
        var s = this._events[t];
        if (s) {
          this._firingCount = this._firingCount + 1 || 1;
          for (var r = 0, a = s.length; r < a; r++) {
            var h = s[r];
            h.fn.call(h.ctx || this, o);
          }
          this._firingCount--;
        }
      }
      return n && this._propagateEvent(o), this;
    },
    listens: function (t, i) {
      var e = this._events && this._events[t];
      if (e && e.length) return !0;
      if (i)
        for (var n in this._eventParents)
          if (this._eventParents[n].listens(t, i)) return !0;
      return !1;
    },
    once: function (t, i, n) {
      if ("object" == typeof t) {
        for (var o in t) this.once(o, t[o], i);
        return this;
      }
      var s = e(function () {
        this.off(t, i, n).off(t, s, n);
      }, this);
      return this.on(t, i, n).on(t, s, n);
    },
    addEventParent: function (t) {
      return (
        (this._eventParents = this._eventParents || {}),
        (this._eventParents[n(t)] = t),
        this
      );
    },
    removeEventParent: function (t) {
      return this._eventParents && delete this._eventParents[n(t)], this;
    },
    _propagateEvent: function (t) {
      for (var e in this._eventParents)
        this._eventParents[e].fire(
          t.type,
          i({ layer: t.target, propagatedFrom: t.target }, t),
          !0
        );
    },
  };
  (ii.addEventListener = ii.on),
    (ii.removeEventListener = ii.clearAllEventListeners = ii.off),
    (ii.addOneTimeEventListener = ii.once),
    (ii.fireEvent = ii.fire),
    (ii.hasEventListeners = ii.listens);
  var ei = v.extend(ii),
    ni =
      Math.trunc ||
      function (t) {
        return t > 0 ? Math.floor(t) : Math.ceil(t);
      };
  (y.prototype = {
    clone: function () {
      return new y(this.x, this.y);
    },
    add: function (t) {
      return this.clone()._add(x(t));
    },
    _add: function (t) {
      return (this.x += t.x), (this.y += t.y), this;
    },
    subtract: function (t) {
      return this.clone()._subtract(x(t));
    },
    _subtract: function (t) {
      return (this.x -= t.x), (this.y -= t.y), this;
    },
    divideBy: function (t) {
      return this.clone()._divideBy(t);
    },
    _divideBy: function (t) {
      return (this.x /= t), (this.y /= t), this;
    },
    multiplyBy: function (t) {
      return this.clone()._multiplyBy(t);
    },
    _multiplyBy: function (t) {
      return (this.x *= t), (this.y *= t), this;
    },
    scaleBy: function (t) {
      return new y(this.x * t.x, this.y * t.y);
    },
    unscaleBy: function (t) {
      return new y(this.x / t.x, this.y / t.y);
    },
    round: function () {
      return this.clone()._round();
    },
    _round: function () {
      return (this.x = Math.round(this.x)), (this.y = Math.round(this.y)), this;
    },
    floor: function () {
      return this.clone()._floor();
    },
    _floor: function () {
      return (this.x = Math.floor(this.x)), (this.y = Math.floor(this.y)), this;
    },
    ceil: function () {
      return this.clone()._ceil();
    },
    _ceil: function () {
      return (this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), this;
    },
    trunc: function () {
      return this.clone()._trunc();
    },
    _trunc: function () {
      return (this.x = ni(this.x)), (this.y = ni(this.y)), this;
    },
    distanceTo: function (t) {
      var i = (t = x(t)).x - this.x,
        e = t.y - this.y;
      return Math.sqrt(i * i + e * e);
    },
    equals: function (t) {
      return (t = x(t)).x === this.x && t.y === this.y;
    },
    contains: function (t) {
      return (
        (t = x(t)),
        Math.abs(t.x) <= Math.abs(this.x) && Math.abs(t.y) <= Math.abs(this.y)
      );
    },
    toString: function () {
      return "Point(" + a(this.x) + ", " + a(this.y) + ")";
    },
  }),
    (w.prototype = {
      extend: function (t) {
        return (
          (t = x(t)),
          this.min || this.max
            ? ((this.min.x = Math.min(t.x, this.min.x)),
              (this.max.x = Math.max(t.x, this.max.x)),
              (this.min.y = Math.min(t.y, this.min.y)),
              (this.max.y = Math.max(t.y, this.max.y)))
            : ((this.min = t.clone()), (this.max = t.clone())),
          this
        );
      },
      getCenter: function (t) {
        return new y(
          (this.min.x + this.max.x) / 2,
          (this.min.y + this.max.y) / 2,
          t
        );
      },
      getBottomLeft: function () {
        return new y(this.min.x, this.max.y);
      },
      getTopRight: function () {
        return new y(this.max.x, this.min.y);
      },
      getTopLeft: function () {
        return this.min;
      },
      getBottomRight: function () {
        return this.max;
      },
      getSize: function () {
        return this.max.subtract(this.min);
      },
      contains: function (t) {
        var i, e;
        return (
          (t =
            "number" == typeof t[0] || t instanceof y ? x(t) : P(t)) instanceof
          w
            ? ((i = t.min), (e = t.max))
            : (i = e = t),
          i.x >= this.min.x &&
            e.x <= this.max.x &&
            i.y >= this.min.y &&
            e.y <= this.max.y
        );
      },
      intersects: function (t) {
        t = P(t);
        var i = this.min,
          e = this.max,
          n = t.min,
          o = t.max,
          s = o.x >= i.x && n.x <= e.x,
          r = o.y >= i.y && n.y <= e.y;
        return s && r;
      },
      overlaps: function (t) {
        t = P(t);
        var i = this.min,
          e = this.max,
          n = t.min,
          o = t.max,
          s = o.x > i.x && n.x < e.x,
          r = o.y > i.y && n.y < e.y;
        return s && r;
      },
      isValid: function () {
        return !(!this.min || !this.max);
      },
    }),
    (b.prototype = {
      extend: function (t) {
        var i,
          e,
          n = this._southWest,
          o = this._northEast;
        if (t instanceof z) (i = t), (e = t);
        else {
          if (!(t instanceof b)) return t ? this.extend(M(t) || T(t)) : this;
          if (((i = t._southWest), (e = t._northEast), !i || !e)) return this;
        }
        return (
          n || o
            ? ((n.lat = Math.min(i.lat, n.lat)),
              (n.lng = Math.min(i.lng, n.lng)),
              (o.lat = Math.max(e.lat, o.lat)),
              (o.lng = Math.max(e.lng, o.lng)))
            : ((this._southWest = new z(i.lat, i.lng)),
              (this._northEast = new z(e.lat, e.lng))),
          this
        );
      },
      pad: function (t) {
        var i = this._southWest,
          e = this._northEast,
          n = Math.abs(i.lat - e.lat) * t,
          o = Math.abs(i.lng - e.lng) * t;
        return new b(new z(i.lat - n, i.lng - o), new z(e.lat + n, e.lng + o));
      },
      getCenter: function () {
        return new z(
          (this._southWest.lat + this._northEast.lat) / 2,
          (this._southWest.lng + this._northEast.lng) / 2
        );
      },
      getSouthWest: function () {
        return this._southWest;
      },
      getNorthEast: function () {
        return this._northEast;
      },
      getNorthWest: function () {
        return new z(this.getNorth(), this.getWest());
      },
      getSouthEast: function () {
        return new z(this.getSouth(), this.getEast());
      },
      getWest: function () {
        return this._southWest.lng;
      },
      getSouth: function () {
        return this._southWest.lat;
      },
      getEast: function () {
        return this._northEast.lng;
      },
      getNorth: function () {
        return this._northEast.lat;
      },
      contains: function (t) {
        t =
          "number" == typeof t[0] || t instanceof z || "lat" in t ? M(t) : T(t);
        var i,
          e,
          n = this._southWest,
          o = this._northEast;
        return (
          t instanceof b
            ? ((i = t.getSouthWest()), (e = t.getNorthEast()))
            : (i = e = t),
          i.lat >= n.lat && e.lat <= o.lat && i.lng >= n.lng && e.lng <= o.lng
        );
      },
      intersects: function (t) {
        t = T(t);
        var i = this._southWest,
          e = this._northEast,
          n = t.getSouthWest(),
          o = t.getNorthEast(),
          s = o.lat >= i.lat && n.lat <= e.lat,
          r = o.lng >= i.lng && n.lng <= e.lng;
        return s && r;
      },
      overlaps: function (t) {
        t = T(t);
        var i = this._southWest,
          e = this._northEast,
          n = t.getSouthWest(),
          o = t.getNorthEast(),
          s = o.lat > i.lat && n.lat < e.lat,
          r = o.lng > i.lng && n.lng < e.lng;
        return s && r;
      },
      toBBoxString: function () {
        return [
          this.getWest(),
          this.getSouth(),
          this.getEast(),
          this.getNorth(),
        ].join(",");
      },
      equals: function (t, i) {
        return (
          !!t &&
          ((t = T(t)),
          this._southWest.equals(t.getSouthWest(), i) &&
            this._northEast.equals(t.getNorthEast(), i))
        );
      },
      isValid: function () {
        return !(!this._southWest || !this._northEast);
      },
    }),
    (z.prototype = {
      equals: function (t, i) {
        return (
          !!t &&
          ((t = M(t)),
          Math.max(Math.abs(this.lat - t.lat), Math.abs(this.lng - t.lng)) <=
            (void 0 === i ? 1e-9 : i))
        );
      },
      toString: function (t) {
        return "LatLng(" + a(this.lat, t) + ", " + a(this.lng, t) + ")";
      },
      distanceTo: function (t) {
        return si.distance(this, M(t));
      },
      wrap: function () {
        return si.wrapLatLng(this);
      },
      toBounds: function (t) {
        var i = (180 * t) / 40075017,
          e = i / Math.cos((Math.PI / 180) * this.lat);
        return T([this.lat - i, this.lng - e], [this.lat + i, this.lng + e]);
      },
      clone: function () {
        return new z(this.lat, this.lng, this.alt);
      },
    });
  var oi = {
      latLngToPoint: function (t, i) {
        var e = this.projection.project(t),
          n = this.scale(i);
        return this.transformation._transform(e, n);
      },
      pointToLatLng: function (t, i) {
        var e = this.scale(i),
          n = this.transformation.untransform(t, e);
        return this.projection.unproject(n);
      },
      project: function (t) {
        return this.projection.project(t);
      },
      unproject: function (t) {
        return this.projection.unproject(t);
      },
      scale: function (t) {
        return 256 * Math.pow(2, t);
      },
      zoom: function (t) {
        return Math.log(t / 256) / Math.LN2;
      },
      getProjectedBounds: function (t) {
        if (this.infinite) return null;
        var i = this.projection.bounds,
          e = this.scale(t);
        return new w(
          this.transformation.transform(i.min, e),
          this.transformation.transform(i.max, e)
        );
      },
      infinite: !1,
      wrapLatLng: function (t) {
        var i = this.wrapLng ? s(t.lng, this.wrapLng, !0) : t.lng;
        return new z(
          this.wrapLat ? s(t.lat, this.wrapLat, !0) : t.lat,
          i,
          t.alt
        );
      },
      wrapLatLngBounds: function (t) {
        var i = t.getCenter(),
          e = this.wrapLatLng(i),
          n = i.lat - e.lat,
          o = i.lng - e.lng;
        if (0 === n && 0 === o) return t;
        var s = t.getSouthWest(),
          r = t.getNorthEast();
        return new b(new z(s.lat - n, s.lng - o), new z(r.lat - n, r.lng - o));
      },
    },
    si = i({}, oi, {
      wrapLng: [-180, 180],
      R: 6371e3,
      distance: function (t, i) {
        var e = Math.PI / 180,
          n = t.lat * e,
          o = i.lat * e,
          s = Math.sin(((i.lat - t.lat) * e) / 2),
          r = Math.sin(((i.lng - t.lng) * e) / 2),
          a = s * s + Math.cos(n) * Math.cos(o) * r * r,
          h = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return this.R * h;
      },
    }),
    ri = {
      R: 6378137,
      MAX_LATITUDE: 85.0511287798,
      project: function (t) {
        var i = Math.PI / 180,
          e = this.MAX_LATITUDE,
          n = Math.max(Math.min(e, t.lat), -e),
          o = Math.sin(n * i);
        return new y(
          this.R * t.lng * i,
          (this.R * Math.log((1 + o) / (1 - o))) / 2
        );
      },
      unproject: function (t) {
        var i = 180 / Math.PI;
        return new z(
          (2 * Math.atan(Math.exp(t.y / this.R)) - Math.PI / 2) * i,
          (t.x * i) / this.R
        );
      },
      bounds: (function () {
        var t = 6378137 * Math.PI;
        return new w([-t, -t], [t, t]);
      })(),
    };
  C.prototype = {
    transform: function (t, i) {
      return this._transform(t.clone(), i);
    },
    _transform: function (t, i) {
      return (
        (i = i || 1),
        (t.x = i * (this._a * t.x + this._b)),
        (t.y = i * (this._c * t.y + this._d)),
        t
      );
    },
    untransform: function (t, i) {
      return (
        (i = i || 1),
        new y((t.x / i - this._b) / this._a, (t.y / i - this._d) / this._c)
      );
    },
  };
  var ai,
    hi,
    ui,
    li = i({}, si, {
      code: "EPSG:3857",
      projection: ri,
      transformation: (function () {
        var t = 0.5 / (Math.PI * ri.R);
        return S(t, 0.5, -t, 0.5);
      })(),
    }),
    ci = i({}, li, { code: "EPSG:900913" }),
    _i = document.documentElement.style,
    di = "ActiveXObject" in window,
    pi = di && !document.addEventListener,
    mi = "msLaunchUri" in navigator && !("documentMode" in document),
    fi = k("webkit"),
    gi = k("android"),
    vi = k("android 2") || k("android 3"),
    yi = parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1], 10),
    xi = gi && k("Google") && yi < 537 && !("AudioNode" in window),
    wi = !!window.opera,
    Li = k("chrome"),
    Pi = k("gecko") && !fi && !wi && !di,
    bi = !Li && k("safari"),
    Ti = k("phantom"),
    zi = "OTransition" in _i,
    Mi = 0 === navigator.platform.indexOf("Win"),
    Ci = di && "transition" in _i,
    Si =
      "WebKitCSSMatrix" in window &&
      "m11" in new window.WebKitCSSMatrix() &&
      !vi,
    Zi = "MozPerspective" in _i,
    Ei = !window.L_DISABLE_3D && (Ci || Si || Zi) && !zi && !Ti,
    ki = "undefined" != typeof orientation || k("mobile"),
    Ai = ki && fi,
    Bi = ki && Si,
    Ii = !window.PointerEvent && window.MSPointerEvent,
    Oi = !(!window.PointerEvent && !Ii),
    Ri =
      !window.L_NO_TOUCH &&
      (Oi ||
        "ontouchstart" in window ||
        (window.DocumentTouch && document instanceof window.DocumentTouch)),
    Di = ki && wi,
    Ni = ki && Pi,
    ji =
      (window.devicePixelRatio ||
        window.screen.deviceXDPI / window.screen.logicalXDPI) > 1,
    Wi = !!document.createElement("canvas").getContext,
    Hi = !(!document.createElementNS || !Z("svg").createSVGRect),
    Fi =
      !Hi &&
      (function () {
        try {
          var t = document.createElement("div");
          t.innerHTML = '<v:shape adj="1"/>';
          var i = t.firstChild;
          return (
            (i.style.behavior = "url(#default#VML)"),
            i && "object" == typeof i.adj
          );
        } catch (t) {
          return !1;
        }
      })(),
    qi = (Object.freeze || Object)({
      ie: di,
      ielt9: pi,
      edge: mi,
      webkit: fi,
      android: gi,
      android23: vi,
      androidStock: xi,
      opera: wi,
      chrome: Li,
      gecko: Pi,
      safari: bi,
      phantom: Ti,
      opera12: zi,
      win: Mi,
      ie3d: Ci,
      webkit3d: Si,
      gecko3d: Zi,
      any3d: Ei,
      mobile: ki,
      mobileWebkit: Ai,
      mobileWebkit3d: Bi,
      msPointer: Ii,
      pointer: Oi,
      touch: Ri,
      mobileOpera: Di,
      mobileGecko: Ni,
      retina: ji,
      canvas: Wi,
      svg: Hi,
      vml: Fi,
    }),
    Ui = Ii ? "MSPointerDown" : "pointerdown",
    Vi = Ii ? "MSPointerMove" : "pointermove",
    Gi = Ii ? "MSPointerUp" : "pointerup",
    Ki = Ii ? "MSPointerCancel" : "pointercancel",
    Yi = ["INPUT", "SELECT", "OPTION"],
    Xi = {},
    Ji = !1,
    $i = 0,
    Qi = Ii ? "MSPointerDown" : Oi ? "pointerdown" : "touchstart",
    te = Ii ? "MSPointerUp" : Oi ? "pointerup" : "touchend",
    ie = "_leaflet_",
    ee = tt([
      "transform",
      "webkitTransform",
      "OTransform",
      "MozTransform",
      "msTransform",
    ]),
    ne = tt([
      "webkitTransition",
      "transition",
      "OTransition",
      "MozTransition",
      "msTransition",
    ]),
    oe =
      "webkitTransition" === ne || "OTransition" === ne
        ? ne + "End"
        : "transitionend";
  if ("onselectstart" in document)
    (ai = function () {
      lt(window, "selectstart", gt);
    }),
      (hi = function () {
        ct(window, "selectstart", gt);
      });
  else {
    var se = tt([
      "userSelect",
      "WebkitUserSelect",
      "OUserSelect",
      "MozUserSelect",
      "msUserSelect",
    ]);
    (ai = function () {
      if (se) {
        var t = document.documentElement.style;
        (ui = t[se]), (t[se] = "none");
      }
    }),
      (hi = function () {
        se && ((document.documentElement.style[se] = ui), (ui = void 0));
      });
  }
  var re,
    ae,
    he,
    ue = (Object.freeze || Object)({
      TRANSFORM: ee,
      TRANSITION: ne,
      TRANSITION_END: oe,
      get: W,
      getStyle: H,
      create: F,
      remove: q,
      empty: U,
      toFront: V,
      toBack: G,
      hasClass: K,
      addClass: Y,
      removeClass: X,
      setClass: J,
      getClass: $,
      setOpacity: Q,
      testProp: tt,
      setTransform: it,
      setPosition: et,
      getPosition: nt,
      disableTextSelection: ai,
      enableTextSelection: hi,
      disableImageDrag: ot,
      enableImageDrag: st,
      preventOutline: rt,
      restoreOutline: at,
      getSizedParentNode: ht,
      getScale: ut,
    }),
    le = "_leaflet_events",
    ce =
      Mi && Li ? 2 * window.devicePixelRatio : Pi ? window.devicePixelRatio : 1,
    _e = {},
    de = (Object.freeze || Object)({
      on: lt,
      off: ct,
      stopPropagation: pt,
      disableScrollPropagation: mt,
      disableClickPropagation: ft,
      preventDefault: gt,
      stop: vt,
      getMousePosition: yt,
      getWheelDelta: xt,
      fakeStop: wt,
      skipped: Lt,
      isExternalTarget: Pt,
      addListener: lt,
      removeListener: ct,
    }),
    pe = ei.extend({
      run: function (t, i, e, n) {
        this.stop(),
          (this._el = t),
          (this._inProgress = !0),
          (this._duration = e || 0.25),
          (this._easeOutPower = 1 / Math.max(n || 0.5, 0.2)),
          (this._startPos = nt(t)),
          (this._offset = i.subtract(this._startPos)),
          (this._startTime = +new Date()),
          this.fire("start"),
          this._animate();
      },
      stop: function () {
        this._inProgress && (this._step(!0), this._complete());
      },
      _animate: function () {
        (this._animId = f(this._animate, this)), this._step();
      },
      _step: function (t) {
        var i = +new Date() - this._startTime,
          e = 1e3 * this._duration;
        i < e
          ? this._runFrame(this._easeOut(i / e), t)
          : (this._runFrame(1), this._complete());
      },
      _runFrame: function (t, i) {
        var e = this._startPos.add(this._offset.multiplyBy(t));
        i && e._round(), et(this._el, e), this.fire("step");
      },
      _complete: function () {
        g(this._animId), (this._inProgress = !1), this.fire("end");
      },
      _easeOut: function (t) {
        return 1 - Math.pow(1 - t, this._easeOutPower);
      },
    }),
    me = ei.extend({
      options: {
        crs: li,
        center: void 0,
        zoom: void 0,
        minZoom: void 0,
        maxZoom: void 0,
        layers: [],
        maxBounds: void 0,
        renderer: void 0,
        zoomAnimation: !0,
        zoomAnimationThreshold: 4,
        fadeAnimation: !0,
        markerZoomAnimation: !0,
        transform3DLimit: 8388608,
        zoomSnap: 1,
        zoomDelta: 1,
        trackResize: !0,
      },
      initialize: function (t, i) {
        (i = l(this, i)),
          this._initContainer(t),
          this._initLayout(),
          (this._onResize = e(this._onResize, this)),
          this._initEvents(),
          i.maxBounds && this.setMaxBounds(i.maxBounds),
          void 0 !== i.zoom && (this._zoom = this._limitZoom(i.zoom)),
          i.center &&
            void 0 !== i.zoom &&
            this.setView(M(i.center), i.zoom, { reset: !0 }),
          (this._handlers = []),
          (this._layers = {}),
          (this._zoomBoundLayers = {}),
          (this._sizeChanged = !0),
          this.callInitHooks(),
          (this._zoomAnimated = ne && Ei && !Di && this.options.zoomAnimation),
          this._zoomAnimated &&
            (this._createAnimProxy(),
            lt(this._proxy, oe, this._catchTransitionEnd, this)),
          this._addLayers(this.options.layers);
      },
      setView: function (t, e, n) {
        return (
          (e = void 0 === e ? this._zoom : this._limitZoom(e)),
          (t = this._limitCenter(M(t), e, this.options.maxBounds)),
          (n = n || {}),
          this._stop(),
          this._loaded &&
          !n.reset &&
          !0 !== n &&
          (void 0 !== n.animate &&
            ((n.zoom = i({ animate: n.animate }, n.zoom)),
            (n.pan = i({ animate: n.animate, duration: n.duration }, n.pan))),
          this._zoom !== e
            ? this._tryAnimatedZoom && this._tryAnimatedZoom(t, e, n.zoom)
            : this._tryAnimatedPan(t, n.pan))
            ? (clearTimeout(this._sizeTimer), this)
            : (this._resetView(t, e), this)
        );
      },
      setZoom: function (t, i) {
        return this._loaded
          ? this.setView(this.getCenter(), t, { zoom: i })
          : ((this._zoom = t), this);
      },
      zoomIn: function (t, i) {
        return (
          (t = t || (Ei ? this.options.zoomDelta : 1)),
          this.setZoom(this._zoom + t, i)
        );
      },
      zoomOut: function (t, i) {
        return (
          (t = t || (Ei ? this.options.zoomDelta : 1)),
          this.setZoom(this._zoom - t, i)
        );
      },
      setZoomAround: function (t, i, e) {
        var n = this.getZoomScale(i),
          o = this.getSize().divideBy(2),
          s = (t instanceof y ? t : this.latLngToContainerPoint(t))
            .subtract(o)
            .multiplyBy(1 - 1 / n),
          r = this.containerPointToLatLng(o.add(s));
        return this.setView(r, i, { zoom: e });
      },
      _getBoundsCenterZoom: function (t, i) {
        (i = i || {}), (t = t.getBounds ? t.getBounds() : T(t));
        var e = x(i.paddingTopLeft || i.padding || [0, 0]),
          n = x(i.paddingBottomRight || i.padding || [0, 0]),
          o = this.getBoundsZoom(t, !1, e.add(n));
        if (
          (o = "number" == typeof i.maxZoom ? Math.min(i.maxZoom, o) : o) ===
          1 / 0
        )
          return { center: t.getCenter(), zoom: o };
        var s = n.subtract(e).divideBy(2),
          r = this.project(t.getSouthWest(), o),
          a = this.project(t.getNorthEast(), o);
        return {
          center: this.unproject(r.add(a).divideBy(2).add(s), o),
          zoom: o,
        };
      },
      fitBounds: function (t, i) {
        if (!(t = T(t)).isValid()) throw new Error("Bounds are not valid.");
        var e = this._getBoundsCenterZoom(t, i);
        return this.setView(e.center, e.zoom, i);
      },
      fitWorld: function (t) {
        return this.fitBounds(
          [
            [-90, -180],
            [90, 180],
          ],
          t
        );
      },
      panTo: function (t, i) {
        return this.setView(t, this._zoom, { pan: i });
      },
      panBy: function (t, i) {
        if (((i = i || {}), !(t = x(t).round()).x && !t.y))
          return this.fire("moveend");
        if (!0 !== i.animate && !this.getSize().contains(t))
          return (
            this._resetView(
              this.unproject(this.project(this.getCenter()).add(t)),
              this.getZoom()
            ),
            this
          );
        if (
          (this._panAnim ||
            ((this._panAnim = new pe()),
            this._panAnim.on(
              {
                step: this._onPanTransitionStep,
                end: this._onPanTransitionEnd,
              },
              this
            )),
          i.noMoveStart || this.fire("movestart"),
          !1 !== i.animate)
        ) {
          Y(this._mapPane, "leaflet-pan-anim");
          var e = this._getMapPanePos().subtract(t).round();
          this._panAnim.run(
            this._mapPane,
            e,
            i.duration || 0.25,
            i.easeLinearity
          );
        } else this._rawPanBy(t), this.fire("move").fire("moveend");
        return this;
      },
      flyTo: function (t, i, e) {
        function n(t) {
          var i =
              (_ * _ - c * c + (t ? -1 : 1) * m * m * d * d) /
              (2 * (t ? _ : c) * m * d),
            e = Math.sqrt(i * i + 1) - i;
          return e < 1e-9 ? -18 : Math.log(e);
        }
        function o(t) {
          return (Math.exp(t) - Math.exp(-t)) / 2;
        }
        function s(t) {
          return (Math.exp(t) + Math.exp(-t)) / 2;
        }
        function r(t) {
          return (
            (c *
              (s(g) *
                (function (t) {
                  return o(t) / s(t);
                })(g + p * t) -
                o(g))) /
            m
          );
        }
        if (!1 === (e = e || {}).animate || !Ei) return this.setView(t, i, e);
        this._stop();
        var a = this.project(this.getCenter()),
          h = this.project(t),
          u = this.getSize(),
          l = this._zoom;
        (t = M(t)), (i = void 0 === i ? l : i);
        var c = Math.max(u.x, u.y),
          _ = c * this.getZoomScale(l, i),
          d = h.distanceTo(a) || 1,
          p = 1.42,
          m = p * p,
          g = n(0),
          v = Date.now(),
          y = (n(1) - g) / p,
          x = e.duration ? 1e3 * e.duration : 1e3 * y * 0.8;
        return (
          this._moveStart(!0, e.noMoveStart),
          function e() {
            var n = (Date.now() - v) / x,
              o =
                (function (t) {
                  return 1 - Math.pow(1 - t, 1.5);
                })(n) * y;
            n <= 1
              ? ((this._flyToFrame = f(e, this)),
                this._move(
                  this.unproject(a.add(h.subtract(a).multiplyBy(r(o) / d)), l),
                  this.getScaleZoom(
                    c /
                      (function (t) {
                        return c * (s(g) / s(g + p * t));
                      })(o),
                    l
                  ),
                  { flyTo: !0 }
                ))
              : this._move(t, i)._moveEnd(!0);
          }.call(this),
          this
        );
      },
      flyToBounds: function (t, i) {
        var e = this._getBoundsCenterZoom(t, i);
        return this.flyTo(e.center, e.zoom, i);
      },
      setMaxBounds: function (t) {
        return (t = T(t)).isValid()
          ? (this.options.maxBounds &&
              this.off("moveend", this._panInsideMaxBounds),
            (this.options.maxBounds = t),
            this._loaded && this._panInsideMaxBounds(),
            this.on("moveend", this._panInsideMaxBounds))
          : ((this.options.maxBounds = null),
            this.off("moveend", this._panInsideMaxBounds));
      },
      setMinZoom: function (t) {
        var i = this.options.minZoom;
        return (
          (this.options.minZoom = t),
          this._loaded &&
          i !== t &&
          (this.fire("zoomlevelschange"), this.getZoom() < this.options.minZoom)
            ? this.setZoom(t)
            : this
        );
      },
      setMaxZoom: function (t) {
        var i = this.options.maxZoom;
        return (
          (this.options.maxZoom = t),
          this._loaded &&
          i !== t &&
          (this.fire("zoomlevelschange"), this.getZoom() > this.options.maxZoom)
            ? this.setZoom(t)
            : this
        );
      },
      panInsideBounds: function (t, i) {
        this._enforcingBounds = !0;
        var e = this.getCenter(),
          n = this._limitCenter(e, this._zoom, T(t));
        return (
          e.equals(n) || this.panTo(n, i), (this._enforcingBounds = !1), this
        );
      },
      invalidateSize: function (t) {
        if (!this._loaded) return this;
        t = i({ animate: !1, pan: !0 }, !0 === t ? { animate: !0 } : t);
        var n = this.getSize();
        (this._sizeChanged = !0), (this._lastCenter = null);
        var o = this.getSize(),
          s = n.divideBy(2).round(),
          r = o.divideBy(2).round(),
          a = s.subtract(r);
        return a.x || a.y
          ? (t.animate && t.pan
              ? this.panBy(a)
              : (t.pan && this._rawPanBy(a),
                this.fire("move"),
                t.debounceMoveend
                  ? (clearTimeout(this._sizeTimer),
                    (this._sizeTimer = setTimeout(
                      e(this.fire, this, "moveend"),
                      200
                    )))
                  : this.fire("moveend")),
            this.fire("resize", { oldSize: n, newSize: o }))
          : this;
      },
      stop: function () {
        return (
          this.setZoom(this._limitZoom(this._zoom)),
          this.options.zoomSnap || this.fire("viewreset"),
          this._stop()
        );
      },
      locate: function (t) {
        if (
          ((t = this._locateOptions = i({ timeout: 1e4, watch: !1 }, t)),
          !("geolocation" in navigator))
        )
          return (
            this._handleGeolocationError({
              code: 0,
              message: "Geolocation not supported.",
            }),
            this
          );
        var n = e(this._handleGeolocationResponse, this),
          o = e(this._handleGeolocationError, this);
        return (
          t.watch
            ? (this._locationWatchId = navigator.geolocation.watchPosition(
                n,
                o,
                t
              ))
            : navigator.geolocation.getCurrentPosition(n, o, t),
          this
        );
      },
      stopLocate: function () {
        return (
          navigator.geolocation &&
            navigator.geolocation.clearWatch &&
            navigator.geolocation.clearWatch(this._locationWatchId),
          this._locateOptions && (this._locateOptions.setView = !1),
          this
        );
      },
      _handleGeolocationError: function (t) {
        var i = t.code,
          e =
            t.message ||
            (1 === i
              ? "permission denied"
              : 2 === i
              ? "position unavailable"
              : "timeout");
        this._locateOptions.setView && !this._loaded && this.fitWorld(),
          this.fire("locationerror", {
            code: i,
            message: "Geolocation error: " + e + ".",
          });
      },
      _handleGeolocationResponse: function (t) {
        var i = new z(t.coords.latitude, t.coords.longitude),
          e = i.toBounds(2 * t.coords.accuracy),
          n = this._locateOptions;
        if (n.setView) {
          var o = this.getBoundsZoom(e);
          this.setView(i, n.maxZoom ? Math.min(o, n.maxZoom) : o);
        }
        var s = { latlng: i, bounds: e, timestamp: t.timestamp };
        for (var r in t.coords)
          "number" == typeof t.coords[r] && (s[r] = t.coords[r]);
        this.fire("locationfound", s);
      },
      addHandler: function (t, i) {
        if (!i) return this;
        var e = (this[t] = new i(this));
        return this._handlers.push(e), this.options[t] && e.enable(), this;
      },
      remove: function () {
        if (
          (this._initEvents(!0),
          this._containerId !== this._container._leaflet_id)
        )
          throw new Error("Map container is being reused by another instance");
        try {
          delete this._container._leaflet_id, delete this._containerId;
        } catch (t) {
          (this._container._leaflet_id = void 0), (this._containerId = void 0);
        }
        var t;
        for (t in (void 0 !== this._locationWatchId && this.stopLocate(),
        this._stop(),
        q(this._mapPane),
        this._clearControlPos && this._clearControlPos(),
        this._resizeRequest &&
          (g(this._resizeRequest), (this._resizeRequest = null)),
        this._clearHandlers(),
        this._loaded && this.fire("unload"),
        this._layers))
          this._layers[t].remove();
        for (t in this._panes) q(this._panes[t]);
        return (
          (this._layers = []),
          (this._panes = []),
          delete this._mapPane,
          delete this._renderer,
          this
        );
      },
      createPane: function (t, i) {
        var e = F(
          "div",
          "leaflet-pane" +
            (t ? " leaflet-" + t.replace("Pane", "") + "-pane" : ""),
          i || this._mapPane
        );
        return t && (this._panes[t] = e), e;
      },
      getCenter: function () {
        return (
          this._checkIfLoaded(),
          this._lastCenter && !this._moved()
            ? this._lastCenter
            : this.layerPointToLatLng(this._getCenterLayerPoint())
        );
      },
      getZoom: function () {
        return this._zoom;
      },
      getBounds: function () {
        var t = this.getPixelBounds();
        return new b(
          this.unproject(t.getBottomLeft()),
          this.unproject(t.getTopRight())
        );
      },
      getMinZoom: function () {
        return void 0 === this.options.minZoom
          ? this._layersMinZoom || 0
          : this.options.minZoom;
      },
      getMaxZoom: function () {
        return void 0 === this.options.maxZoom
          ? void 0 === this._layersMaxZoom
            ? 1 / 0
            : this._layersMaxZoom
          : this.options.maxZoom;
      },
      getBoundsZoom: function (t, i, e) {
        (t = T(t)), (e = x(e || [0, 0]));
        var n = this.getZoom() || 0,
          o = this.getMinZoom(),
          s = this.getMaxZoom(),
          r = t.getNorthWest(),
          a = t.getSouthEast(),
          h = this.getSize().subtract(e),
          u = P(this.project(a, n), this.project(r, n)).getSize(),
          l = Ei ? this.options.zoomSnap : 1,
          c = h.x / u.x,
          _ = h.y / u.y,
          d = i ? Math.max(c, _) : Math.min(c, _);
        return (
          (n = this.getScaleZoom(d, n)),
          l &&
            ((n = Math.round(n / (l / 100)) * (l / 100)),
            (n = i ? Math.ceil(n / l) * l : Math.floor(n / l) * l)),
          Math.max(o, Math.min(s, n))
        );
      },
      getSize: function () {
        return (
          (this._size && !this._sizeChanged) ||
            ((this._size = new y(
              this._container.clientWidth || 0,
              this._container.clientHeight || 0
            )),
            (this._sizeChanged = !1)),
          this._size.clone()
        );
      },
      getPixelBounds: function (t, i) {
        var e = this._getTopLeftPoint(t, i);
        return new w(e, e.add(this.getSize()));
      },
      getPixelOrigin: function () {
        return this._checkIfLoaded(), this._pixelOrigin;
      },
      getPixelWorldBounds: function (t) {
        return this.options.crs.getProjectedBounds(
          void 0 === t ? this.getZoom() : t
        );
      },
      getPane: function (t) {
        return "string" == typeof t ? this._panes[t] : t;
      },
      getPanes: function () {
        return this._panes;
      },
      getContainer: function () {
        return this._container;
      },
      getZoomScale: function (t, i) {
        var e = this.options.crs;
        return (i = void 0 === i ? this._zoom : i), e.scale(t) / e.scale(i);
      },
      getScaleZoom: function (t, i) {
        var e = this.options.crs;
        i = void 0 === i ? this._zoom : i;
        var n = e.zoom(t * e.scale(i));
        return isNaN(n) ? 1 / 0 : n;
      },
      project: function (t, i) {
        return (
          (i = void 0 === i ? this._zoom : i),
          this.options.crs.latLngToPoint(M(t), i)
        );
      },
      unproject: function (t, i) {
        return (
          (i = void 0 === i ? this._zoom : i),
          this.options.crs.pointToLatLng(x(t), i)
        );
      },
      layerPointToLatLng: function (t) {
        var i = x(t).add(this.getPixelOrigin());
        return this.unproject(i);
      },
      latLngToLayerPoint: function (t) {
        return this.project(M(t))._round()._subtract(this.getPixelOrigin());
      },
      wrapLatLng: function (t) {
        return this.options.crs.wrapLatLng(M(t));
      },
      wrapLatLngBounds: function (t) {
        return this.options.crs.wrapLatLngBounds(T(t));
      },
      distance: function (t, i) {
        return this.options.crs.distance(M(t), M(i));
      },
      containerPointToLayerPoint: function (t) {
        return x(t).subtract(this._getMapPanePos());
      },
      layerPointToContainerPoint: function (t) {
        return x(t).add(this._getMapPanePos());
      },
      containerPointToLatLng: function (t) {
        var i = this.containerPointToLayerPoint(x(t));
        return this.layerPointToLatLng(i);
      },
      latLngToContainerPoint: function (t) {
        return this.layerPointToContainerPoint(this.latLngToLayerPoint(M(t)));
      },
      mouseEventToContainerPoint: function (t) {
        return yt(t, this._container);
      },
      mouseEventToLayerPoint: function (t) {
        return this.containerPointToLayerPoint(
          this.mouseEventToContainerPoint(t)
        );
      },
      mouseEventToLatLng: function (t) {
        return this.layerPointToLatLng(this.mouseEventToLayerPoint(t));
      },
      _initContainer: function (t) {
        var i = (this._container = W(t));
        if (!i) throw new Error("Map container not found.");
        if (i._leaflet_id)
          throw new Error("Map container is already initialized.");
        lt(i, "scroll", this._onScroll, this), (this._containerId = n(i));
      },
      _initLayout: function () {
        var t = this._container;
        (this._fadeAnimated = this.options.fadeAnimation && Ei),
          Y(
            t,
            "leaflet-container" +
              (Ri ? " leaflet-touch" : "") +
              (ji ? " leaflet-retina" : "") +
              (pi ? " leaflet-oldie" : "") +
              (bi ? " leaflet-safari" : "") +
              (this._fadeAnimated ? " leaflet-fade-anim" : "")
          );
        var i = H(t, "position");
        "absolute" !== i &&
          "relative" !== i &&
          "fixed" !== i &&
          (t.style.position = "relative"),
          this._initPanes(),
          this._initControlPos && this._initControlPos();
      },
      _initPanes: function () {
        var t = (this._panes = {});
        (this._paneRenderers = {}),
          (this._mapPane = this.createPane("mapPane", this._container)),
          et(this._mapPane, new y(0, 0)),
          this.createPane("tilePane"),
          this.createPane("shadowPane"),
          this.createPane("overlayPane"),
          this.createPane("markerPane"),
          this.createPane("tooltipPane"),
          this.createPane("popupPane"),
          this.options.markerZoomAnimation ||
            (Y(t.markerPane, "leaflet-zoom-hide"),
            Y(t.shadowPane, "leaflet-zoom-hide"));
      },
      _resetView: function (t, i) {
        et(this._mapPane, new y(0, 0));
        var e = !this._loaded;
        (this._loaded = !0),
          (i = this._limitZoom(i)),
          this.fire("viewprereset");
        var n = this._zoom !== i;
        this._moveStart(n, !1)._move(t, i)._moveEnd(n),
          this.fire("viewreset"),
          e && this.fire("load");
      },
      _moveStart: function (t, i) {
        return t && this.fire("zoomstart"), i || this.fire("movestart"), this;
      },
      _move: function (t, i, e) {
        void 0 === i && (i = this._zoom);
        var n = this._zoom !== i;
        return (
          (this._zoom = i),
          (this._lastCenter = t),
          (this._pixelOrigin = this._getNewPixelOrigin(t)),
          (n || (e && e.pinch)) && this.fire("zoom", e),
          this.fire("move", e)
        );
      },
      _moveEnd: function (t) {
        return t && this.fire("zoomend"), this.fire("moveend");
      },
      _stop: function () {
        return g(this._flyToFrame), this._panAnim && this._panAnim.stop(), this;
      },
      _rawPanBy: function (t) {
        et(this._mapPane, this._getMapPanePos().subtract(t));
      },
      _getZoomSpan: function () {
        return this.getMaxZoom() - this.getMinZoom();
      },
      _panInsideMaxBounds: function () {
        this._enforcingBounds || this.panInsideBounds(this.options.maxBounds);
      },
      _checkIfLoaded: function () {
        if (!this._loaded) throw new Error("Set map center and zoom first.");
      },
      _initEvents: function (t) {
        (this._targets = {}), (this._targets[n(this._container)] = this);
        var i = t ? ct : lt;
        i(
          this._container,
          "click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress",
          this._handleDOMEvent,
          this
        ),
          this.options.trackResize && i(window, "resize", this._onResize, this),
          Ei &&
            this.options.transform3DLimit &&
            (t ? this.off : this.on).call(this, "moveend", this._onMoveEnd);
      },
      _onResize: function () {
        g(this._resizeRequest),
          (this._resizeRequest = f(function () {
            this.invalidateSize({ debounceMoveend: !0 });
          }, this));
      },
      _onScroll: function () {
        (this._container.scrollTop = 0), (this._container.scrollLeft = 0);
      },
      _onMoveEnd: function () {
        var t = this._getMapPanePos();
        Math.max(Math.abs(t.x), Math.abs(t.y)) >=
          this.options.transform3DLimit &&
          this._resetView(this.getCenter(), this.getZoom());
      },
      _findEventTargets: function (t, i) {
        for (
          var e,
            o = [],
            s = "mouseout" === i || "mouseover" === i,
            r = t.target || t.srcElement,
            a = !1;
          r;

        ) {
          if (
            (e = this._targets[n(r)]) &&
            ("click" === i || "preclick" === i) &&
            !t._simulated &&
            this._draggableMoved(e)
          ) {
            a = !0;
            break;
          }
          if (e && e.listens(i, !0)) {
            if (s && !Pt(r, t)) break;
            if ((o.push(e), s)) break;
          }
          if (r === this._container) break;
          r = r.parentNode;
        }
        return o.length || a || s || !Pt(r, t) || (o = [this]), o;
      },
      _handleDOMEvent: function (t) {
        if (this._loaded && !Lt(t)) {
          var i = t.type;
          ("mousedown" !== i && "keypress" !== i) ||
            rt(t.target || t.srcElement),
            this._fireDOMEvent(t, i);
        }
      },
      _mouseEvents: [
        "click",
        "dblclick",
        "mouseover",
        "mouseout",
        "contextmenu",
      ],
      _fireDOMEvent: function (t, e, n) {
        if ("click" === t.type) {
          var o = i({}, t);
          (o.type = "preclick"), this._fireDOMEvent(o, o.type, n);
        }
        if (
          !t._stopped &&
          (n = (n || []).concat(this._findEventTargets(t, e))).length
        ) {
          var s = n[0];
          "contextmenu" === e && s.listens(e, !0) && gt(t);
          var r = { originalEvent: t };
          if ("keypress" !== t.type) {
            var a = s.getLatLng && (!s._radius || s._radius <= 10);
            (r.containerPoint = a
              ? this.latLngToContainerPoint(s.getLatLng())
              : this.mouseEventToContainerPoint(t)),
              (r.layerPoint = this.containerPointToLayerPoint(
                r.containerPoint
              )),
              (r.latlng = a
                ? s.getLatLng()
                : this.layerPointToLatLng(r.layerPoint));
          }
          for (var h = 0; h < n.length; h++)
            if (
              (n[h].fire(e, r, !0),
              r.originalEvent._stopped ||
                (!1 === n[h].options.bubblingMouseEvents &&
                  -1 !== d(this._mouseEvents, e)))
            )
              return;
        }
      },
      _draggableMoved: function (t) {
        return (
          ((t = t.dragging && t.dragging.enabled() ? t : this).dragging &&
            t.dragging.moved()) ||
          (this.boxZoom && this.boxZoom.moved())
        );
      },
      _clearHandlers: function () {
        for (var t = 0, i = this._handlers.length; t < i; t++)
          this._handlers[t].disable();
      },
      whenReady: function (t, i) {
        return (
          this._loaded
            ? t.call(i || this, { target: this })
            : this.on("load", t, i),
          this
        );
      },
      _getMapPanePos: function () {
        return nt(this._mapPane) || new y(0, 0);
      },
      _moved: function () {
        var t = this._getMapPanePos();
        return t && !t.equals([0, 0]);
      },
      _getTopLeftPoint: function (t, i) {
        return (
          t && void 0 !== i
            ? this._getNewPixelOrigin(t, i)
            : this.getPixelOrigin()
        ).subtract(this._getMapPanePos());
      },
      _getNewPixelOrigin: function (t, i) {
        var e = this.getSize()._divideBy(2);
        return this.project(t, i)
          ._subtract(e)
          ._add(this._getMapPanePos())
          ._round();
      },
      _latLngToNewLayerPoint: function (t, i, e) {
        var n = this._getNewPixelOrigin(e, i);
        return this.project(t, i)._subtract(n);
      },
      _latLngBoundsToNewLayerBounds: function (t, i, e) {
        var n = this._getNewPixelOrigin(e, i);
        return P([
          this.project(t.getSouthWest(), i)._subtract(n),
          this.project(t.getNorthWest(), i)._subtract(n),
          this.project(t.getSouthEast(), i)._subtract(n),
          this.project(t.getNorthEast(), i)._subtract(n),
        ]);
      },
      _getCenterLayerPoint: function () {
        return this.containerPointToLayerPoint(this.getSize()._divideBy(2));
      },
      _getCenterOffset: function (t) {
        return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint());
      },
      _limitCenter: function (t, i, e) {
        if (!e) return t;
        var n = this.project(t, i),
          o = this.getSize().divideBy(2),
          s = new w(n.subtract(o), n.add(o)),
          r = this._getBoundsOffset(s, e, i);
        return r.round().equals([0, 0]) ? t : this.unproject(n.add(r), i);
      },
      _limitOffset: function (t, i) {
        if (!i) return t;
        var e = this.getPixelBounds(),
          n = new w(e.min.add(t), e.max.add(t));
        return t.add(this._getBoundsOffset(n, i));
      },
      _getBoundsOffset: function (t, i, e) {
        var n = P(
            this.project(i.getNorthEast(), e),
            this.project(i.getSouthWest(), e)
          ),
          o = n.min.subtract(t.min),
          s = n.max.subtract(t.max);
        return new y(this._rebound(o.x, -s.x), this._rebound(o.y, -s.y));
      },
      _rebound: function (t, i) {
        return t + i > 0
          ? Math.round(t - i) / 2
          : Math.max(0, Math.ceil(t)) - Math.max(0, Math.floor(i));
      },
      _limitZoom: function (t) {
        var i = this.getMinZoom(),
          e = this.getMaxZoom(),
          n = Ei ? this.options.zoomSnap : 1;
        return n && (t = Math.round(t / n) * n), Math.max(i, Math.min(e, t));
      },
      _onPanTransitionStep: function () {
        this.fire("move");
      },
      _onPanTransitionEnd: function () {
        X(this._mapPane, "leaflet-pan-anim"), this.fire("moveend");
      },
      _tryAnimatedPan: function (t, i) {
        var e = this._getCenterOffset(t)._trunc();
        return !(
          (!0 !== (i && i.animate) && !this.getSize().contains(e)) ||
          (this.panBy(e, i), 0)
        );
      },
      _createAnimProxy: function () {
        var t = (this._proxy = F("div", "leaflet-proxy leaflet-zoom-animated"));
        this._panes.mapPane.appendChild(t),
          this.on(
            "zoomanim",
            function (t) {
              var i = ee,
                e = this._proxy.style[i];
              it(
                this._proxy,
                this.project(t.center, t.zoom),
                this.getZoomScale(t.zoom, 1)
              ),
                e === this._proxy.style[i] &&
                  this._animatingZoom &&
                  this._onZoomTransitionEnd();
            },
            this
          ),
          this.on(
            "load moveend",
            function () {
              var t = this.getCenter(),
                i = this.getZoom();
              it(this._proxy, this.project(t, i), this.getZoomScale(i, 1));
            },
            this
          ),
          this._on("unload", this._destroyAnimProxy, this);
      },
      _destroyAnimProxy: function () {
        q(this._proxy), delete this._proxy;
      },
      _catchTransitionEnd: function (t) {
        this._animatingZoom &&
          t.propertyName.indexOf("transform") >= 0 &&
          this._onZoomTransitionEnd();
      },
      _nothingToAnimate: function () {
        return !this._container.getElementsByClassName("leaflet-zoom-animated")
          .length;
      },
      _tryAnimatedZoom: function (t, i, e) {
        if (this._animatingZoom) return !0;
        if (
          ((e = e || {}),
          !this._zoomAnimated ||
            !1 === e.animate ||
            this._nothingToAnimate() ||
            Math.abs(i - this._zoom) > this.options.zoomAnimationThreshold)
        )
          return !1;
        var n = this.getZoomScale(i),
          o = this._getCenterOffset(t)._divideBy(1 - 1 / n);
        return !(
          (!0 !== e.animate && !this.getSize().contains(o)) ||
          (f(function () {
            this._moveStart(!0, !1)._animateZoom(t, i, !0);
          }, this),
          0)
        );
      },
      _animateZoom: function (t, i, n, o) {
        this._mapPane &&
          (n &&
            ((this._animatingZoom = !0),
            (this._animateToCenter = t),
            (this._animateToZoom = i),
            Y(this._mapPane, "leaflet-zoom-anim")),
          this.fire("zoomanim", { center: t, zoom: i, noUpdate: o }),
          setTimeout(e(this._onZoomTransitionEnd, this), 250));
      },
      _onZoomTransitionEnd: function () {
        this._animatingZoom &&
          (this._mapPane && X(this._mapPane, "leaflet-zoom-anim"),
          (this._animatingZoom = !1),
          this._move(this._animateToCenter, this._animateToZoom),
          f(function () {
            this._moveEnd(!0);
          }, this));
      },
    }),
    fe = v.extend({
      options: { position: "topright" },
      initialize: function (t) {
        l(this, t);
      },
      getPosition: function () {
        return this.options.position;
      },
      setPosition: function (t) {
        var i = this._map;
        return (
          i && i.removeControl(this),
          (this.options.position = t),
          i && i.addControl(this),
          this
        );
      },
      getContainer: function () {
        return this._container;
      },
      addTo: function (t) {
        this.remove(), (this._map = t);
        var i = (this._container = this.onAdd(t)),
          e = this.getPosition(),
          n = t._controlCorners[e];
        return (
          Y(i, "leaflet-control"),
          -1 !== e.indexOf("bottom")
            ? n.insertBefore(i, n.firstChild)
            : n.appendChild(i),
          this
        );
      },
      remove: function () {
        return this._map
          ? (q(this._container),
            this.onRemove && this.onRemove(this._map),
            (this._map = null),
            this)
          : this;
      },
      _refocusOnMap: function (t) {
        this._map &&
          t &&
          t.screenX > 0 &&
          t.screenY > 0 &&
          this._map.getContainer().focus();
      },
    }),
    ge = function (t) {
      return new fe(t);
    };
  me.include({
    addControl: function (t) {
      return t.addTo(this), this;
    },
    removeControl: function (t) {
      return t.remove(), this;
    },
    _initControlPos: function () {
      function t(t, o) {
        var s = e + t + " " + e + o;
        i[t + o] = F("div", s, n);
      }
      var i = (this._controlCorners = {}),
        e = "leaflet-",
        n = (this._controlContainer = F(
          "div",
          e + "control-container",
          this._container
        ));
      t("top", "left"),
        t("top", "right"),
        t("bottom", "left"),
        t("bottom", "right");
    },
    _clearControlPos: function () {
      for (var t in this._controlCorners) q(this._controlCorners[t]);
      q(this._controlContainer),
        delete this._controlCorners,
        delete this._controlContainer;
    },
  });
  var ve = fe.extend({
      options: {
        collapsed: !0,
        position: "topright",
        autoZIndex: !0,
        hideSingleBase: !1,
        sortLayers: !1,
        sortFunction: function (t, i, e, n) {
          return e < n ? -1 : n < e ? 1 : 0;
        },
      },
      initialize: function (t, i, e) {
        for (var n in (l(this, e),
        (this._layerControlInputs = []),
        (this._layers = []),
        (this._lastZIndex = 0),
        (this._handlingClick = !1),
        t))
          this._addLayer(t[n], n);
        for (n in i) this._addLayer(i[n], n, !0);
      },
      onAdd: function (t) {
        this._initLayout(),
          this._update(),
          (this._map = t),
          t.on("zoomend", this._checkDisabledLayers, this);
        for (var i = 0; i < this._layers.length; i++)
          this._layers[i].layer.on("add remove", this._onLayerChange, this);
        return this._container;
      },
      addTo: function (t) {
        return fe.prototype.addTo.call(this, t), this._expandIfNotCollapsed();
      },
      onRemove: function () {
        this._map.off("zoomend", this._checkDisabledLayers, this);
        for (var t = 0; t < this._layers.length; t++)
          this._layers[t].layer.off("add remove", this._onLayerChange, this);
      },
      addBaseLayer: function (t, i) {
        return this._addLayer(t, i), this._map ? this._update() : this;
      },
      addOverlay: function (t, i) {
        return this._addLayer(t, i, !0), this._map ? this._update() : this;
      },
      removeLayer: function (t) {
        t.off("add remove", this._onLayerChange, this);
        var i = this._getLayer(n(t));
        return (
          i && this._layers.splice(this._layers.indexOf(i), 1),
          this._map ? this._update() : this
        );
      },
      expand: function () {
        Y(this._container, "leaflet-control-layers-expanded"),
          (this._form.style.height = null);
        var t = this._map.getSize().y - (this._container.offsetTop + 50);
        return (
          t < this._form.clientHeight
            ? (Y(this._form, "leaflet-control-layers-scrollbar"),
              (this._form.style.height = t + "px"))
            : X(this._form, "leaflet-control-layers-scrollbar"),
          this._checkDisabledLayers(),
          this
        );
      },
      collapse: function () {
        return X(this._container, "leaflet-control-layers-expanded"), this;
      },
      _initLayout: function () {
        var t = "leaflet-control-layers",
          i = (this._container = F("div", t)),
          e = this.options.collapsed;
        i.setAttribute("aria-haspopup", !0), ft(i), mt(i);
        var n = (this._form = F("form", t + "-list"));
        e &&
          (this._map.on("click", this.collapse, this),
          gi ||
            lt(
              i,
              { mouseenter: this.expand, mouseleave: this.collapse },
              this
            ));
        var o = (this._layersLink = F("a", t + "-toggle", i));
        (o.href = "#"),
          (o.title = "Layers"),
          Ri
            ? (lt(o, "click", vt), lt(o, "click", this.expand, this))
            : lt(o, "focus", this.expand, this),
          e || this.expand(),
          (this._baseLayersList = F("div", t + "-base", n)),
          (this._separator = F("div", t + "-separator", n)),
          (this._overlaysList = F("div", t + "-overlays", n)),
          i.appendChild(n);
      },
      _getLayer: function (t) {
        for (var i = 0; i < this._layers.length; i++)
          if (this._layers[i] && n(this._layers[i].layer) === t)
            return this._layers[i];
      },
      _addLayer: function (t, i, n) {
        this._map && t.on("add remove", this._onLayerChange, this),
          this._layers.push({ layer: t, name: i, overlay: n }),
          this.options.sortLayers &&
            this._layers.sort(
              e(function (t, i) {
                return this.options.sortFunction(
                  t.layer,
                  i.layer,
                  t.name,
                  i.name
                );
              }, this)
            ),
          this.options.autoZIndex &&
            t.setZIndex &&
            (this._lastZIndex++, t.setZIndex(this._lastZIndex)),
          this._expandIfNotCollapsed();
      },
      _update: function () {
        if (!this._container) return this;
        U(this._baseLayersList),
          U(this._overlaysList),
          (this._layerControlInputs = []);
        var t,
          i,
          e,
          n,
          o = 0;
        for (e = 0; e < this._layers.length; e++)
          (n = this._layers[e]),
            this._addItem(n),
            (i = i || n.overlay),
            (t = t || !n.overlay),
            (o += n.overlay ? 0 : 1);
        return (
          this.options.hideSingleBase &&
            ((t = t && o > 1),
            (this._baseLayersList.style.display = t ? "" : "none")),
          (this._separator.style.display = i && t ? "" : "none"),
          this
        );
      },
      _onLayerChange: function (t) {
        this._handlingClick || this._update();
        var i = this._getLayer(n(t.target)),
          e = i.overlay
            ? "add" === t.type
              ? "overlayadd"
              : "overlayremove"
            : "add" === t.type
            ? "baselayerchange"
            : null;
        e && this._map.fire(e, i);
      },
      _createRadioElement: function (t, i) {
        var e =
            '<input type="radio" class="leaflet-control-layers-selector" name="' +
            t +
            '"' +
            (i ? ' checked="checked"' : "") +
            "/>",
          n = document.createElement("div");
        return (n.innerHTML = e), n.firstChild;
      },
      _addItem: function (t) {
        var i,
          e = document.createElement("label"),
          o = this._map.hasLayer(t.layer);
        t.overlay
          ? (((i = document.createElement("input")).type = "checkbox"),
            (i.className = "leaflet-control-layers-selector"),
            (i.defaultChecked = o))
          : (i = this._createRadioElement("leaflet-base-layers", o)),
          this._layerControlInputs.push(i),
          (i.layerId = n(t.layer)),
          lt(i, "click", this._onInputClick, this);
        var s = document.createElement("span");
        s.innerHTML = " " + t.name;
        var r = document.createElement("div");
        return (
          e.appendChild(r),
          r.appendChild(i),
          r.appendChild(s),
          (t.overlay ? this._overlaysList : this._baseLayersList).appendChild(
            e
          ),
          this._checkDisabledLayers(),
          e
        );
      },
      _onInputClick: function () {
        var t,
          i,
          e = this._layerControlInputs,
          n = [],
          o = [];
        this._handlingClick = !0;
        for (var s = e.length - 1; s >= 0; s--)
          (t = e[s]),
            (i = this._getLayer(t.layerId).layer),
            t.checked ? n.push(i) : t.checked || o.push(i);
        for (s = 0; s < o.length; s++)
          this._map.hasLayer(o[s]) && this._map.removeLayer(o[s]);
        for (s = 0; s < n.length; s++)
          this._map.hasLayer(n[s]) || this._map.addLayer(n[s]);
        (this._handlingClick = !1), this._refocusOnMap();
      },
      _checkDisabledLayers: function () {
        for (
          var t,
            i,
            e = this._layerControlInputs,
            n = this._map.getZoom(),
            o = e.length - 1;
          o >= 0;
          o--
        )
          (t = e[o]),
            (i = this._getLayer(t.layerId).layer),
            (t.disabled =
              (void 0 !== i.options.minZoom && n < i.options.minZoom) ||
              (void 0 !== i.options.maxZoom && n > i.options.maxZoom));
      },
      _expandIfNotCollapsed: function () {
        return this._map && !this.options.collapsed && this.expand(), this;
      },
      _expand: function () {
        return this.expand();
      },
      _collapse: function () {
        return this.collapse();
      },
    }),
    ye = fe.extend({
      options: {
        position: "topleft",
        zoomInText: "+",
        zoomInTitle: "Zoom in",
        zoomOutText: "&#x2212;",
        zoomOutTitle: "Zoom out",
      },
      onAdd: function (t) {
        var i = "leaflet-control-zoom",
          e = F("div", i + " leaflet-bar"),
          n = this.options;
        return (
          (this._zoomInButton = this._createButton(
            n.zoomInText,
            n.zoomInTitle,
            i + "-in",
            e,
            this._zoomIn
          )),
          (this._zoomOutButton = this._createButton(
            n.zoomOutText,
            n.zoomOutTitle,
            i + "-out",
            e,
            this._zoomOut
          )),
          this._updateDisabled(),
          t.on("zoomend zoomlevelschange", this._updateDisabled, this),
          e
        );
      },
      onRemove: function (t) {
        t.off("zoomend zoomlevelschange", this._updateDisabled, this);
      },
      disable: function () {
        return (this._disabled = !0), this._updateDisabled(), this;
      },
      enable: function () {
        return (this._disabled = !1), this._updateDisabled(), this;
      },
      _zoomIn: function (t) {
        !this._disabled &&
          this._map._zoom < this._map.getMaxZoom() &&
          this._map.zoomIn(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1));
      },
      _zoomOut: function (t) {
        !this._disabled &&
          this._map._zoom > this._map.getMinZoom() &&
          this._map.zoomOut(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1));
      },
      _createButton: function (t, i, e, n, o) {
        var s = F("a", e, n);
        return (
          (s.innerHTML = t),
          (s.href = "#"),
          (s.title = i),
          s.setAttribute("role", "button"),
          s.setAttribute("aria-label", i),
          ft(s),
          lt(s, "click", vt),
          lt(s, "click", o, this),
          lt(s, "click", this._refocusOnMap, this),
          s
        );
      },
      _updateDisabled: function () {
        var t = this._map,
          i = "leaflet-disabled";
        X(this._zoomInButton, i),
          X(this._zoomOutButton, i),
          (this._disabled || t._zoom === t.getMinZoom()) &&
            Y(this._zoomOutButton, i),
          (this._disabled || t._zoom === t.getMaxZoom()) &&
            Y(this._zoomInButton, i);
      },
    });
  me.mergeOptions({ zoomControl: !0 }),
    me.addInitHook(function () {
      this.options.zoomControl &&
        ((this.zoomControl = new ye()), this.addControl(this.zoomControl));
    });
  var xe = fe.extend({
      options: {
        position: "bottomleft",
        maxWidth: 100,
        metric: !0,
        imperial: !0,
      },
      onAdd: function (t) {
        var i = F("div", "leaflet-control-scale"),
          e = this.options;
        return (
          this._addScales(e, "leaflet-control-scale-line", i),
          t.on(e.updateWhenIdle ? "moveend" : "move", this._update, this),
          t.whenReady(this._update, this),
          i
        );
      },
      onRemove: function (t) {
        t.off(
          this.options.updateWhenIdle ? "moveend" : "move",
          this._update,
          this
        );
      },
      _addScales: function (t, i, e) {
        t.metric && (this._mScale = F("div", i, e)),
          t.imperial && (this._iScale = F("div", i, e));
      },
      _update: function () {
        var t = this._map,
          i = t.getSize().y / 2,
          e = t.distance(
            t.containerPointToLatLng([0, i]),
            t.containerPointToLatLng([this.options.maxWidth, i])
          );
        this._updateScales(e);
      },
      _updateScales: function (t) {
        this.options.metric && t && this._updateMetric(t),
          this.options.imperial && t && this._updateImperial(t);
      },
      _updateMetric: function (t) {
        var i = this._getRoundNum(t),
          e = i < 1e3 ? i + " m" : i / 1e3 + " km";
        this._updateScale(this._mScale, e, i / t);
      },
      _updateImperial: function (t) {
        var i,
          e,
          n,
          o = 3.2808399 * t;
        o > 5280
          ? ((i = o / 5280),
            (e = this._getRoundNum(i)),
            this._updateScale(this._iScale, e + " mi", e / i))
          : ((n = this._getRoundNum(o)),
            this._updateScale(this._iScale, n + " ft", n / o));
      },
      _updateScale: function (t, i, e) {
        (t.style.width = Math.round(this.options.maxWidth * e) + "px"),
          (t.innerHTML = i);
      },
      _getRoundNum: function (t) {
        var i = Math.pow(10, (Math.floor(t) + "").length - 1),
          e = t / i;
        return (
          i * (e = e >= 10 ? 10 : e >= 5 ? 5 : e >= 3 ? 3 : e >= 2 ? 2 : 1)
        );
      },
    }),
    we = fe.extend({
      options: {
        position: "bottomright",
        prefix:
          '<a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>',
      },
      initialize: function (t) {
        l(this, t), (this._attributions = {});
      },
      onAdd: function (t) {
        for (var i in ((t.attributionControl = this),
        (this._container = F("div", "leaflet-control-attribution")),
        ft(this._container),
        t._layers))
          t._layers[i].getAttribution &&
            this.addAttribution(t._layers[i].getAttribution());
        return this._update(), this._container;
      },
      setPrefix: function (t) {
        return (this.options.prefix = t), this._update(), this;
      },
      addAttribution: function (t) {
        return t
          ? (this._attributions[t] || (this._attributions[t] = 0),
            this._attributions[t]++,
            this._update(),
            this)
          : this;
      },
      removeAttribution: function (t) {
        return t
          ? (this._attributions[t] && (this._attributions[t]--, this._update()),
            this)
          : this;
      },
      _update: function () {
        if (this._map) {
          var t = [];
          for (var i in this._attributions) this._attributions[i] && t.push(i);
          var e = [];
          this.options.prefix && e.push(this.options.prefix),
            t.length && e.push(t.join(", ")),
            (this._container.innerHTML = e.join(" | "));
        }
      },
    });
  me.mergeOptions({ attributionControl: !0 }),
    me.addInitHook(function () {
      this.options.attributionControl && new we().addTo(this);
    }),
    (fe.Layers = ve),
    (fe.Zoom = ye),
    (fe.Scale = xe),
    (fe.Attribution = we),
    (ge.layers = function (t, i, e) {
      return new ve(t, i, e);
    }),
    (ge.zoom = function (t) {
      return new ye(t);
    }),
    (ge.scale = function (t) {
      return new xe(t);
    }),
    (ge.attribution = function (t) {
      return new we(t);
    });
  var Le = v.extend({
    initialize: function (t) {
      this._map = t;
    },
    enable: function () {
      return this._enabled
        ? this
        : ((this._enabled = !0), this.addHooks(), this);
    },
    disable: function () {
      return this._enabled
        ? ((this._enabled = !1), this.removeHooks(), this)
        : this;
    },
    enabled: function () {
      return !!this._enabled;
    },
  });
  Le.addTo = function (t, i) {
    return t.addHandler(i, this), this;
  };
  var Pe,
    be = { Events: ii },
    Te = Ri ? "touchstart mousedown" : "mousedown",
    ze = {
      mousedown: "mouseup",
      touchstart: "touchend",
      pointerdown: "touchend",
      MSPointerDown: "touchend",
    },
    Me = {
      mousedown: "mousemove",
      touchstart: "touchmove",
      pointerdown: "touchmove",
      MSPointerDown: "touchmove",
    },
    Ce = ei.extend({
      options: { clickTolerance: 3 },
      initialize: function (t, i, e, n) {
        l(this, n),
          (this._element = t),
          (this._dragStartTarget = i || t),
          (this._preventOutline = e);
      },
      enable: function () {
        this._enabled ||
          (lt(this._dragStartTarget, Te, this._onDown, this),
          (this._enabled = !0));
      },
      disable: function () {
        this._enabled &&
          (Ce._dragging === this && this.finishDrag(),
          ct(this._dragStartTarget, Te, this._onDown, this),
          (this._enabled = !1),
          (this._moved = !1));
      },
      _onDown: function (t) {
        if (
          !t._simulated &&
          this._enabled &&
          ((this._moved = !1),
          !K(this._element, "leaflet-zoom-anim") &&
            !(
              Ce._dragging ||
              t.shiftKey ||
              (1 !== t.which && 1 !== t.button && !t.touches) ||
              ((Ce._dragging = this),
              this._preventOutline && rt(this._element),
              ot(),
              ai(),
              this._moving)
            ))
        ) {
          this.fire("down");
          var i = t.touches ? t.touches[0] : t,
            e = ht(this._element);
          (this._startPoint = new y(i.clientX, i.clientY)),
            (this._parentScale = ut(e)),
            lt(document, Me[t.type], this._onMove, this),
            lt(document, ze[t.type], this._onUp, this);
        }
      },
      _onMove: function (t) {
        if (!t._simulated && this._enabled)
          if (t.touches && t.touches.length > 1) this._moved = !0;
          else {
            var i = t.touches && 1 === t.touches.length ? t.touches[0] : t,
              e = new y(i.clientX, i.clientY)._subtract(this._startPoint);
            (e.x || e.y) &&
              (Math.abs(e.x) + Math.abs(e.y) < this.options.clickTolerance ||
                ((e.x /= this._parentScale.x),
                (e.y /= this._parentScale.y),
                gt(t),
                this._moved ||
                  (this.fire("dragstart"),
                  (this._moved = !0),
                  (this._startPos = nt(this._element).subtract(e)),
                  Y(document.body, "leaflet-dragging"),
                  (this._lastTarget = t.target || t.srcElement),
                  window.SVGElementInstance &&
                    this._lastTarget instanceof SVGElementInstance &&
                    (this._lastTarget =
                      this._lastTarget.correspondingUseElement),
                  Y(this._lastTarget, "leaflet-drag-target")),
                (this._newPos = this._startPos.add(e)),
                (this._moving = !0),
                g(this._animRequest),
                (this._lastEvent = t),
                (this._animRequest = f(this._updatePosition, this, !0))));
          }
      },
      _updatePosition: function () {
        var t = { originalEvent: this._lastEvent };
        this.fire("predrag", t),
          et(this._element, this._newPos),
          this.fire("drag", t);
      },
      _onUp: function (t) {
        !t._simulated && this._enabled && this.finishDrag();
      },
      finishDrag: function () {
        for (var t in (X(document.body, "leaflet-dragging"),
        this._lastTarget &&
          (X(this._lastTarget, "leaflet-drag-target"),
          (this._lastTarget = null)),
        Me))
          ct(document, Me[t], this._onMove, this),
            ct(document, ze[t], this._onUp, this);
        st(),
          hi(),
          this._moved &&
            this._moving &&
            (g(this._animRequest),
            this.fire("dragend", {
              distance: this._newPos.distanceTo(this._startPos),
            })),
          (this._moving = !1),
          (Ce._dragging = !1);
      },
    }),
    Se = (Object.freeze || Object)({
      simplify: bt,
      pointToSegmentDistance: Tt,
      closestPointOnSegment: function (t, i, e) {
        return Zt(t, i, e);
      },
      clipSegment: zt,
      _getEdgeIntersection: Mt,
      _getBitCode: Ct,
      _sqClosestPointOnSegment: Zt,
      isFlat: Et,
      _flat: kt,
    }),
    Ze = (Object.freeze || Object)({ clipPolygon: At }),
    Ee = {
      project: function (t) {
        return new y(t.lng, t.lat);
      },
      unproject: function (t) {
        return new z(t.y, t.x);
      },
      bounds: new w([-180, -90], [180, 90]),
    },
    ke = {
      R: 6378137,
      R_MINOR: 6356752.314245179,
      bounds: new w(
        [-20037508.34279, -15496570.73972],
        [20037508.34279, 18764656.23138]
      ),
      project: function (t) {
        var i = Math.PI / 180,
          e = this.R,
          n = t.lat * i,
          o = this.R_MINOR / e,
          s = Math.sqrt(1 - o * o),
          r = s * Math.sin(n),
          a =
            Math.tan(Math.PI / 4 - n / 2) / Math.pow((1 - r) / (1 + r), s / 2);
        return (n = -e * Math.log(Math.max(a, 1e-10))), new y(t.lng * i * e, n);
      },
      unproject: function (t) {
        for (
          var i,
            e = 180 / Math.PI,
            n = this.R,
            o = this.R_MINOR / n,
            s = Math.sqrt(1 - o * o),
            r = Math.exp(-t.y / n),
            a = Math.PI / 2 - 2 * Math.atan(r),
            h = 0,
            u = 0.1;
          h < 15 && Math.abs(u) > 1e-7;
          h++
        )
          (i = s * Math.sin(a)),
            (i = Math.pow((1 - i) / (1 + i), s / 2)),
            (a += u = Math.PI / 2 - 2 * Math.atan(r * i) - a);
        return new z(a * e, (t.x * e) / n);
      },
    },
    Ae = (Object.freeze || Object)({
      LonLat: Ee,
      Mercator: ke,
      SphericalMercator: ri,
    }),
    Be = i({}, si, {
      code: "EPSG:3395",
      projection: ke,
      transformation: (function () {
        var t = 0.5 / (Math.PI * ke.R);
        return S(t, 0.5, -t, 0.5);
      })(),
    }),
    Ie = i({}, si, {
      code: "EPSG:4326",
      projection: Ee,
      transformation: S(1 / 180, 1, -1 / 180, 0.5),
    }),
    Oe = i({}, oi, {
      projection: Ee,
      transformation: S(1, 0, -1, 0),
      scale: function (t) {
        return Math.pow(2, t);
      },
      zoom: function (t) {
        return Math.log(t) / Math.LN2;
      },
      distance: function (t, i) {
        var e = i.lng - t.lng,
          n = i.lat - t.lat;
        return Math.sqrt(e * e + n * n);
      },
      infinite: !0,
    });
  (oi.Earth = si),
    (oi.EPSG3395 = Be),
    (oi.EPSG3857 = li),
    (oi.EPSG900913 = ci),
    (oi.EPSG4326 = Ie),
    (oi.Simple = Oe);
  var Re = ei.extend({
    options: {
      pane: "overlayPane",
      attribution: null,
      bubblingMouseEvents: !0,
    },
    addTo: function (t) {
      return t.addLayer(this), this;
    },
    remove: function () {
      return this.removeFrom(this._map || this._mapToAdd);
    },
    removeFrom: function (t) {
      return t && t.removeLayer(this), this;
    },
    getPane: function (t) {
      return this._map.getPane(t ? this.options[t] || t : this.options.pane);
    },
    addInteractiveTarget: function (t) {
      return (this._map._targets[n(t)] = this), this;
    },
    removeInteractiveTarget: function (t) {
      return delete this._map._targets[n(t)], this;
    },
    getAttribution: function () {
      return this.options.attribution;
    },
    _layerAdd: function (t) {
      var i = t.target;
      if (i.hasLayer(this)) {
        if (
          ((this._map = i),
          (this._zoomAnimated = i._zoomAnimated),
          this.getEvents)
        ) {
          var e = this.getEvents();
          i.on(e, this),
            this.once(
              "remove",
              function () {
                i.off(e, this);
              },
              this
            );
        }
        this.onAdd(i),
          this.getAttribution &&
            i.attributionControl &&
            i.attributionControl.addAttribution(this.getAttribution()),
          this.fire("add"),
          i.fire("layeradd", { layer: this });
      }
    },
  });
  me.include({
    addLayer: function (t) {
      if (!t._layerAdd) throw new Error("The provided object is not a Layer.");
      var i = n(t);
      return this._layers[i]
        ? this
        : ((this._layers[i] = t),
          (t._mapToAdd = this),
          t.beforeAdd && t.beforeAdd(this),
          this.whenReady(t._layerAdd, t),
          this);
    },
    removeLayer: function (t) {
      var i = n(t);
      return this._layers[i]
        ? (this._loaded && t.onRemove(this),
          t.getAttribution &&
            this.attributionControl &&
            this.attributionControl.removeAttribution(t.getAttribution()),
          delete this._layers[i],
          this._loaded &&
            (this.fire("layerremove", { layer: t }), t.fire("remove")),
          (t._map = t._mapToAdd = null),
          this)
        : this;
    },
    hasLayer: function (t) {
      return !!t && n(t) in this._layers;
    },
    eachLayer: function (t, i) {
      for (var e in this._layers) t.call(i, this._layers[e]);
      return this;
    },
    _addLayers: function (t) {
      for (var i = 0, e = (t = t ? (Yt(t) ? t : [t]) : []).length; i < e; i++)
        this.addLayer(t[i]);
    },
    _addZoomLimit: function (t) {
      (!isNaN(t.options.maxZoom) && isNaN(t.options.minZoom)) ||
        ((this._zoomBoundLayers[n(t)] = t), this._updateZoomLevels());
    },
    _removeZoomLimit: function (t) {
      var i = n(t);
      this._zoomBoundLayers[i] &&
        (delete this._zoomBoundLayers[i], this._updateZoomLevels());
    },
    _updateZoomLevels: function () {
      var t = 1 / 0,
        i = -1 / 0,
        e = this._getZoomSpan();
      for (var n in this._zoomBoundLayers) {
        var o = this._zoomBoundLayers[n].options;
        (t = void 0 === o.minZoom ? t : Math.min(t, o.minZoom)),
          (i = void 0 === o.maxZoom ? i : Math.max(i, o.maxZoom));
      }
      (this._layersMaxZoom = i === -1 / 0 ? void 0 : i),
        (this._layersMinZoom = t === 1 / 0 ? void 0 : t),
        e !== this._getZoomSpan() && this.fire("zoomlevelschange"),
        void 0 === this.options.maxZoom &&
          this._layersMaxZoom &&
          this.getZoom() > this._layersMaxZoom &&
          this.setZoom(this._layersMaxZoom),
        void 0 === this.options.minZoom &&
          this._layersMinZoom &&
          this.getZoom() < this._layersMinZoom &&
          this.setZoom(this._layersMinZoom);
    },
  });
  var De = Re.extend({
      initialize: function (t, i) {
        var e, n;
        if ((l(this, i), (this._layers = {}), t))
          for (e = 0, n = t.length; e < n; e++) this.addLayer(t[e]);
      },
      addLayer: function (t) {
        var i = this.getLayerId(t);
        return (this._layers[i] = t), this._map && this._map.addLayer(t), this;
      },
      removeLayer: function (t) {
        var i = t in this._layers ? t : this.getLayerId(t);
        return (
          this._map &&
            this._layers[i] &&
            this._map.removeLayer(this._layers[i]),
          delete this._layers[i],
          this
        );
      },
      hasLayer: function (t) {
        return !!t && (t in this._layers || this.getLayerId(t) in this._layers);
      },
      clearLayers: function () {
        return this.eachLayer(this.removeLayer, this);
      },
      invoke: function (t) {
        var i,
          e,
          n = Array.prototype.slice.call(arguments, 1);
        for (i in this._layers) (e = this._layers[i])[t] && e[t].apply(e, n);
        return this;
      },
      onAdd: function (t) {
        this.eachLayer(t.addLayer, t);
      },
      onRemove: function (t) {
        this.eachLayer(t.removeLayer, t);
      },
      eachLayer: function (t, i) {
        for (var e in this._layers) t.call(i, this._layers[e]);
        return this;
      },
      getLayer: function (t) {
        return this._layers[t];
      },
      getLayers: function () {
        var t = [];
        return this.eachLayer(t.push, t), t;
      },
      setZIndex: function (t) {
        return this.invoke("setZIndex", t);
      },
      getLayerId: function (t) {
        return n(t);
      },
    }),
    Ne = De.extend({
      addLayer: function (t) {
        return this.hasLayer(t)
          ? this
          : (t.addEventParent(this),
            De.prototype.addLayer.call(this, t),
            this.fire("layeradd", { layer: t }));
      },
      removeLayer: function (t) {
        return this.hasLayer(t)
          ? (t in this._layers && (t = this._layers[t]),
            t.removeEventParent(this),
            De.prototype.removeLayer.call(this, t),
            this.fire("layerremove", { layer: t }))
          : this;
      },
      setStyle: function (t) {
        return this.invoke("setStyle", t);
      },
      bringToFront: function () {
        return this.invoke("bringToFront");
      },
      bringToBack: function () {
        return this.invoke("bringToBack");
      },
      getBounds: function () {
        var t = new b();
        for (var i in this._layers) {
          var e = this._layers[i];
          t.extend(e.getBounds ? e.getBounds() : e.getLatLng());
        }
        return t;
      },
    }),
    je = v.extend({
      options: { popupAnchor: [0, 0], tooltipAnchor: [0, 0] },
      initialize: function (t) {
        l(this, t);
      },
      createIcon: function (t) {
        return this._createIcon("icon", t);
      },
      createShadow: function (t) {
        return this._createIcon("shadow", t);
      },
      _createIcon: function (t, i) {
        var e = this._getIconUrl(t);
        if (!e) {
          if ("icon" === t)
            throw new Error("iconUrl not set in Icon options (see the docs).");
          return null;
        }
        var n = this._createImg(e, i && "IMG" === i.tagName ? i : null);
        return this._setIconStyles(n, t), n;
      },
      _setIconStyles: function (t, i) {
        var e = this.options,
          n = e[i + "Size"];
        "number" == typeof n && (n = [n, n]);
        var o = x(n),
          s = x(
            ("shadow" === i && e.shadowAnchor) ||
              e.iconAnchor ||
              (o && o.divideBy(2, !0))
          );
        (t.className = "leaflet-marker-" + i + " " + (e.className || "")),
          s &&
            ((t.style.marginLeft = -s.x + "px"),
            (t.style.marginTop = -s.y + "px")),
          o && ((t.style.width = o.x + "px"), (t.style.height = o.y + "px"));
      },
      _createImg: function (t, i) {
        return ((i = i || document.createElement("img")).src = t), i;
      },
      _getIconUrl: function (t) {
        return (ji && this.options[t + "RetinaUrl"]) || this.options[t + "Url"];
      },
    }),
    We = je.extend({
      options: {
        iconUrl: "marker-icon.png",
        iconRetinaUrl: "marker-icon-2x.png",
        shadowUrl: "marker-shadow.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        tooltipAnchor: [16, -28],
        shadowSize: [41, 41],
      },
      _getIconUrl: function (t) {
        return (
          We.imagePath || (We.imagePath = this._detectIconPath()),
          (this.options.imagePath || We.imagePath) +
            je.prototype._getIconUrl.call(this, t)
        );
      },
      _detectIconPath: function () {
        var t = F("div", "leaflet-default-icon-path", document.body),
          i = H(t, "background-image") || H(t, "backgroundImage");
        return (
          document.body.removeChild(t),
          null === i || 0 !== i.indexOf("url")
            ? ""
            : i
                .replace(/^url\(["']?/, "")
                .replace(/marker-icon\.png["']?\)$/, "")
        );
      },
    }),
    He = Le.extend({
      initialize: function (t) {
        this._marker = t;
      },
      addHooks: function () {
        var t = this._marker._icon;
        this._draggable || (this._draggable = new Ce(t, t, !0)),
          this._draggable
            .on(
              {
                dragstart: this._onDragStart,
                predrag: this._onPreDrag,
                drag: this._onDrag,
                dragend: this._onDragEnd,
              },
              this
            )
            .enable(),
          Y(t, "leaflet-marker-draggable");
      },
      removeHooks: function () {
        this._draggable
          .off(
            {
              dragstart: this._onDragStart,
              predrag: this._onPreDrag,
              drag: this._onDrag,
              dragend: this._onDragEnd,
            },
            this
          )
          .disable(),
          this._marker._icon &&
            X(this._marker._icon, "leaflet-marker-draggable");
      },
      moved: function () {
        return this._draggable && this._draggable._moved;
      },
      _adjustPan: function (t) {
        var i = this._marker,
          e = i._map,
          n = this._marker.options.autoPanSpeed,
          o = this._marker.options.autoPanPadding,
          s = nt(i._icon),
          r = e.getPixelBounds(),
          a = e.getPixelOrigin(),
          h = P(r.min._subtract(a).add(o), r.max._subtract(a).subtract(o));
        if (!h.contains(s)) {
          var u = x(
            (Math.max(h.max.x, s.x) - h.max.x) / (r.max.x - h.max.x) -
              (Math.min(h.min.x, s.x) - h.min.x) / (r.min.x - h.min.x),
            (Math.max(h.max.y, s.y) - h.max.y) / (r.max.y - h.max.y) -
              (Math.min(h.min.y, s.y) - h.min.y) / (r.min.y - h.min.y)
          ).multiplyBy(n);
          e.panBy(u, { animate: !1 }),
            this._draggable._newPos._add(u),
            this._draggable._startPos._add(u),
            et(i._icon, this._draggable._newPos),
            this._onDrag(t),
            (this._panRequest = f(this._adjustPan.bind(this, t)));
        }
      },
      _onDragStart: function () {
        (this._oldLatLng = this._marker.getLatLng()),
          this._marker.closePopup().fire("movestart").fire("dragstart");
      },
      _onPreDrag: function (t) {
        this._marker.options.autoPan &&
          (g(this._panRequest),
          (this._panRequest = f(this._adjustPan.bind(this, t))));
      },
      _onDrag: function (t) {
        var i = this._marker,
          e = i._shadow,
          n = nt(i._icon),
          o = i._map.layerPointToLatLng(n);
        e && et(e, n),
          (i._latlng = o),
          (t.latlng = o),
          (t.oldLatLng = this._oldLatLng),
          i.fire("move", t).fire("drag", t);
      },
      _onDragEnd: function (t) {
        g(this._panRequest),
          delete this._oldLatLng,
          this._marker.fire("moveend").fire("dragend", t);
      },
    }),
    Fe = Re.extend({
      options: {
        icon: new We(),
        interactive: !0,
        keyboard: !0,
        title: "",
        alt: "",
        zIndexOffset: 0,
        opacity: 1,
        riseOnHover: !1,
        riseOffset: 250,
        pane: "markerPane",
        bubblingMouseEvents: !1,
        draggable: !1,
        autoPan: !1,
        autoPanPadding: [50, 50],
        autoPanSpeed: 10,
      },
      initialize: function (t, i) {
        l(this, i), (this._latlng = M(t));
      },
      onAdd: function (t) {
        (this._zoomAnimated =
          this._zoomAnimated && t.options.markerZoomAnimation),
          this._zoomAnimated && t.on("zoomanim", this._animateZoom, this),
          this._initIcon(),
          this.update();
      },
      onRemove: function (t) {
        this.dragging &&
          this.dragging.enabled() &&
          ((this.options.draggable = !0), this.dragging.removeHooks()),
          delete this.dragging,
          this._zoomAnimated && t.off("zoomanim", this._animateZoom, this),
          this._removeIcon(),
          this._removeShadow();
      },
      getEvents: function () {
        return { zoom: this.update, viewreset: this.update };
      },
      getLatLng: function () {
        return this._latlng;
      },
      setLatLng: function (t) {
        var i = this._latlng;
        return (
          (this._latlng = M(t)),
          this.update(),
          this.fire("move", { oldLatLng: i, latlng: this._latlng })
        );
      },
      setZIndexOffset: function (t) {
        return (this.options.zIndexOffset = t), this.update();
      },
      setIcon: function (t) {
        return (
          (this.options.icon = t),
          this._map && (this._initIcon(), this.update()),
          this._popup && this.bindPopup(this._popup, this._popup.options),
          this
        );
      },
      getElement: function () {
        return this._icon;
      },
      update: function () {
        if (this._icon && this._map) {
          var t = this._map.latLngToLayerPoint(this._latlng).round();
          this._setPos(t);
        }
        return this;
      },
      _initIcon: function () {
        var t = this.options,
          i = "leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide"),
          e = t.icon.createIcon(this._icon),
          n = !1;
        e !== this._icon &&
          (this._icon && this._removeIcon(),
          (n = !0),
          t.title && (e.title = t.title),
          "IMG" === e.tagName && (e.alt = t.alt || "")),
          Y(e, i),
          t.keyboard && (e.tabIndex = "0"),
          (this._icon = e),
          t.riseOnHover &&
            this.on({
              mouseover: this._bringToFront,
              mouseout: this._resetZIndex,
            });
        var o = t.icon.createShadow(this._shadow),
          s = !1;
        o !== this._shadow && (this._removeShadow(), (s = !0)),
          o && (Y(o, i), (o.alt = "")),
          (this._shadow = o),
          t.opacity < 1 && this._updateOpacity(),
          n && this.getPane().appendChild(this._icon),
          this._initInteraction(),
          o && s && this.getPane("shadowPane").appendChild(this._shadow);
      },
      _removeIcon: function () {
        this.options.riseOnHover &&
          this.off({
            mouseover: this._bringToFront,
            mouseout: this._resetZIndex,
          }),
          q(this._icon),
          this.removeInteractiveTarget(this._icon),
          (this._icon = null);
      },
      _removeShadow: function () {
        this._shadow && q(this._shadow), (this._shadow = null);
      },
      _setPos: function (t) {
        et(this._icon, t),
          this._shadow && et(this._shadow, t),
          (this._zIndex = t.y + this.options.zIndexOffset),
          this._resetZIndex();
      },
      _updateZIndex: function (t) {
        this._icon.style.zIndex = this._zIndex + t;
      },
      _animateZoom: function (t) {
        var i = this._map
          ._latLngToNewLayerPoint(this._latlng, t.zoom, t.center)
          .round();
        this._setPos(i);
      },
      _initInteraction: function () {
        if (
          this.options.interactive &&
          (Y(this._icon, "leaflet-interactive"),
          this.addInteractiveTarget(this._icon),
          He)
        ) {
          var t = this.options.draggable;
          this.dragging &&
            ((t = this.dragging.enabled()), this.dragging.disable()),
            (this.dragging = new He(this)),
            t && this.dragging.enable();
        }
      },
      setOpacity: function (t) {
        return (
          (this.options.opacity = t), this._map && this._updateOpacity(), this
        );
      },
      _updateOpacity: function () {
        var t = this.options.opacity;
        Q(this._icon, t), this._shadow && Q(this._shadow, t);
      },
      _bringToFront: function () {
        this._updateZIndex(this.options.riseOffset);
      },
      _resetZIndex: function () {
        this._updateZIndex(0);
      },
      _getPopupAnchor: function () {
        return this.options.icon.options.popupAnchor;
      },
      _getTooltipAnchor: function () {
        return this.options.icon.options.tooltipAnchor;
      },
    }),
    qe = Re.extend({
      options: {
        stroke: !0,
        color: "#3388ff",
        weight: 3,
        opacity: 1,
        lineCap: "round",
        lineJoin: "round",
        dashArray: null,
        dashOffset: null,
        fill: !1,
        fillColor: null,
        fillOpacity: 0.2,
        fillRule: "evenodd",
        interactive: !0,
        bubblingMouseEvents: !0,
      },
      beforeAdd: function (t) {
        this._renderer = t.getRenderer(this);
      },
      onAdd: function () {
        this._renderer._initPath(this),
          this._reset(),
          this._renderer._addPath(this);
      },
      onRemove: function () {
        this._renderer._removePath(this);
      },
      redraw: function () {
        return this._map && this._renderer._updatePath(this), this;
      },
      setStyle: function (t) {
        return (
          l(this, t), this._renderer && this._renderer._updateStyle(this), this
        );
      },
      bringToFront: function () {
        return this._renderer && this._renderer._bringToFront(this), this;
      },
      bringToBack: function () {
        return this._renderer && this._renderer._bringToBack(this), this;
      },
      getElement: function () {
        return this._path;
      },
      _reset: function () {
        this._project(), this._update();
      },
      _clickTolerance: function () {
        return (
          (this.options.stroke ? this.options.weight / 2 : 0) +
          this._renderer.options.tolerance
        );
      },
    }),
    Ue = qe.extend({
      options: { fill: !0, radius: 10 },
      initialize: function (t, i) {
        l(this, i), (this._latlng = M(t)), (this._radius = this.options.radius);
      },
      setLatLng: function (t) {
        return (
          (this._latlng = M(t)),
          this.redraw(),
          this.fire("move", { latlng: this._latlng })
        );
      },
      getLatLng: function () {
        return this._latlng;
      },
      setRadius: function (t) {
        return (this.options.radius = this._radius = t), this.redraw();
      },
      getRadius: function () {
        return this._radius;
      },
      setStyle: function (t) {
        var i = (t && t.radius) || this._radius;
        return qe.prototype.setStyle.call(this, t), this.setRadius(i), this;
      },
      _project: function () {
        (this._point = this._map.latLngToLayerPoint(this._latlng)),
          this._updateBounds();
      },
      _updateBounds: function () {
        var t = this._radius,
          i = this._radiusY || t,
          e = this._clickTolerance(),
          n = [t + e, i + e];
        this._pxBounds = new w(this._point.subtract(n), this._point.add(n));
      },
      _update: function () {
        this._map && this._updatePath();
      },
      _updatePath: function () {
        this._renderer._updateCircle(this);
      },
      _empty: function () {
        return (
          this._radius && !this._renderer._bounds.intersects(this._pxBounds)
        );
      },
      _containsPoint: function (t) {
        return (
          t.distanceTo(this._point) <= this._radius + this._clickTolerance()
        );
      },
    }),
    Ve = Ue.extend({
      initialize: function (t, e, n) {
        if (
          ("number" == typeof e && (e = i({}, n, { radius: e })),
          l(this, e),
          (this._latlng = M(t)),
          isNaN(this.options.radius))
        )
          throw new Error("Circle radius cannot be NaN");
        this._mRadius = this.options.radius;
      },
      setRadius: function (t) {
        return (this._mRadius = t), this.redraw();
      },
      getRadius: function () {
        return this._mRadius;
      },
      getBounds: function () {
        var t = [this._radius, this._radiusY || this._radius];
        return new b(
          this._map.layerPointToLatLng(this._point.subtract(t)),
          this._map.layerPointToLatLng(this._point.add(t))
        );
      },
      setStyle: qe.prototype.setStyle,
      _project: function () {
        var t = this._latlng.lng,
          i = this._latlng.lat,
          e = this._map,
          n = e.options.crs;
        if (n.distance === si.distance) {
          var o = Math.PI / 180,
            s = this._mRadius / si.R / o,
            r = e.project([i + s, t]),
            a = e.project([i - s, t]),
            h = r.add(a).divideBy(2),
            u = e.unproject(h).lat,
            l =
              Math.acos(
                (Math.cos(s * o) - Math.sin(i * o) * Math.sin(u * o)) /
                  (Math.cos(i * o) * Math.cos(u * o))
              ) / o;
          (isNaN(l) || 0 === l) && (l = s / Math.cos((Math.PI / 180) * i)),
            (this._point = h.subtract(e.getPixelOrigin())),
            (this._radius = isNaN(l) ? 0 : h.x - e.project([u, t - l]).x),
            (this._radiusY = h.y - r.y);
        } else {
          var c = n.unproject(
            n.project(this._latlng).subtract([this._mRadius, 0])
          );
          (this._point = e.latLngToLayerPoint(this._latlng)),
            (this._radius = this._point.x - e.latLngToLayerPoint(c).x);
        }
        this._updateBounds();
      },
    }),
    Ge = qe.extend({
      options: { smoothFactor: 1, noClip: !1 },
      initialize: function (t, i) {
        l(this, i), this._setLatLngs(t);
      },
      getLatLngs: function () {
        return this._latlngs;
      },
      setLatLngs: function (t) {
        return this._setLatLngs(t), this.redraw();
      },
      isEmpty: function () {
        return !this._latlngs.length;
      },
      closestLayerPoint: function (t) {
        for (
          var i, e, n = 1 / 0, o = null, s = Zt, r = 0, a = this._parts.length;
          r < a;
          r++
        )
          for (var h = this._parts[r], u = 1, l = h.length; u < l; u++) {
            var c = s(t, (i = h[u - 1]), (e = h[u]), !0);
            c < n && ((n = c), (o = s(t, i, e)));
          }
        return o && (o.distance = Math.sqrt(n)), o;
      },
      getCenter: function () {
        if (!this._map)
          throw new Error("Must add layer to map before using getCenter()");
        var t,
          i,
          e,
          n,
          o,
          s,
          r,
          a = this._rings[0],
          h = a.length;
        if (!h) return null;
        for (t = 0, i = 0; t < h - 1; t++) i += a[t].distanceTo(a[t + 1]) / 2;
        if (0 === i) return this._map.layerPointToLatLng(a[0]);
        for (t = 0, n = 0; t < h - 1; t++)
          if (((o = a[t]), (s = a[t + 1]), (n += e = o.distanceTo(s)) > i))
            return (
              (r = (n - i) / e),
              this._map.layerPointToLatLng([
                s.x - r * (s.x - o.x),
                s.y - r * (s.y - o.y),
              ])
            );
      },
      getBounds: function () {
        return this._bounds;
      },
      addLatLng: function (t, i) {
        return (
          (i = i || this._defaultShape()),
          (t = M(t)),
          i.push(t),
          this._bounds.extend(t),
          this.redraw()
        );
      },
      _setLatLngs: function (t) {
        (this._bounds = new b()), (this._latlngs = this._convertLatLngs(t));
      },
      _defaultShape: function () {
        return Et(this._latlngs) ? this._latlngs : this._latlngs[0];
      },
      _convertLatLngs: function (t) {
        for (var i = [], e = Et(t), n = 0, o = t.length; n < o; n++)
          e
            ? ((i[n] = M(t[n])), this._bounds.extend(i[n]))
            : (i[n] = this._convertLatLngs(t[n]));
        return i;
      },
      _project: function () {
        var t = new w();
        (this._rings = []), this._projectLatlngs(this._latlngs, this._rings, t);
        var i = this._clickTolerance(),
          e = new y(i, i);
        this._bounds.isValid() &&
          t.isValid() &&
          (t.min._subtract(e), t.max._add(e), (this._pxBounds = t));
      },
      _projectLatlngs: function (t, i, e) {
        var n,
          o,
          s = t[0] instanceof z,
          r = t.length;
        if (s) {
          for (o = [], n = 0; n < r; n++)
            (o[n] = this._map.latLngToLayerPoint(t[n])), e.extend(o[n]);
          i.push(o);
        } else for (n = 0; n < r; n++) this._projectLatlngs(t[n], i, e);
      },
      _clipPoints: function () {
        var t = this._renderer._bounds;
        if (
          ((this._parts = []), this._pxBounds && this._pxBounds.intersects(t))
        )
          if (this.options.noClip) this._parts = this._rings;
          else {
            var i,
              e,
              n,
              o,
              s,
              r,
              a,
              h = this._parts;
            for (i = 0, n = 0, o = this._rings.length; i < o; i++)
              for (e = 0, s = (a = this._rings[i]).length; e < s - 1; e++)
                (r = zt(a[e], a[e + 1], t, e, !0)) &&
                  ((h[n] = h[n] || []),
                  h[n].push(r[0]),
                  (r[1] === a[e + 1] && e !== s - 2) || (h[n].push(r[1]), n++));
          }
      },
      _simplifyPoints: function () {
        for (
          var t = this._parts,
            i = this.options.smoothFactor,
            e = 0,
            n = t.length;
          e < n;
          e++
        )
          t[e] = bt(t[e], i);
      },
      _update: function () {
        this._map &&
          (this._clipPoints(), this._simplifyPoints(), this._updatePath());
      },
      _updatePath: function () {
        this._renderer._updatePoly(this);
      },
      _containsPoint: function (t, i) {
        var e,
          n,
          o,
          s,
          r,
          a,
          h = this._clickTolerance();
        if (!this._pxBounds || !this._pxBounds.contains(t)) return !1;
        for (e = 0, s = this._parts.length; e < s; e++)
          for (n = 0, o = (r = (a = this._parts[e]).length) - 1; n < r; o = n++)
            if ((i || 0 !== n) && Tt(t, a[o], a[n]) <= h) return !0;
        return !1;
      },
    });
  Ge._flat = kt;
  var Ke = Ge.extend({
      options: { fill: !0 },
      isEmpty: function () {
        return !this._latlngs.length || !this._latlngs[0].length;
      },
      getCenter: function () {
        if (!this._map)
          throw new Error("Must add layer to map before using getCenter()");
        var t,
          i,
          e,
          n,
          o,
          s,
          r,
          a,
          h,
          u = this._rings[0],
          l = u.length;
        if (!l) return null;
        for (s = r = a = 0, t = 0, i = l - 1; t < l; i = t++)
          (e = u[t]),
            (n = u[i]),
            (o = e.y * n.x - n.y * e.x),
            (r += (e.x + n.x) * o),
            (a += (e.y + n.y) * o),
            (s += 3 * o);
        return (
          (h = 0 === s ? u[0] : [r / s, a / s]), this._map.layerPointToLatLng(h)
        );
      },
      _convertLatLngs: function (t) {
        var i = Ge.prototype._convertLatLngs.call(this, t),
          e = i.length;
        return (
          e >= 2 && i[0] instanceof z && i[0].equals(i[e - 1]) && i.pop(), i
        );
      },
      _setLatLngs: function (t) {
        Ge.prototype._setLatLngs.call(this, t),
          Et(this._latlngs) && (this._latlngs = [this._latlngs]);
      },
      _defaultShape: function () {
        return Et(this._latlngs[0]) ? this._latlngs[0] : this._latlngs[0][0];
      },
      _clipPoints: function () {
        var t = this._renderer._bounds,
          i = this.options.weight,
          e = new y(i, i);
        if (
          ((t = new w(t.min.subtract(e), t.max.add(e))),
          (this._parts = []),
          this._pxBounds && this._pxBounds.intersects(t))
        )
          if (this.options.noClip) this._parts = this._rings;
          else
            for (var n, o = 0, s = this._rings.length; o < s; o++)
              (n = At(this._rings[o], t, !0)).length && this._parts.push(n);
      },
      _updatePath: function () {
        this._renderer._updatePoly(this, !0);
      },
      _containsPoint: function (t) {
        var i,
          e,
          n,
          o,
          s,
          r,
          a,
          h,
          u = !1;
        if (!this._pxBounds || !this._pxBounds.contains(t)) return !1;
        for (o = 0, a = this._parts.length; o < a; o++)
          for (s = 0, r = (h = (i = this._parts[o]).length) - 1; s < h; r = s++)
            (e = i[s]),
              (n = i[r]),
              e.y > t.y != n.y > t.y &&
                t.x < ((n.x - e.x) * (t.y - e.y)) / (n.y - e.y) + e.x &&
                (u = !u);
        return u || Ge.prototype._containsPoint.call(this, t, !0);
      },
    }),
    Ye = Ne.extend({
      initialize: function (t, i) {
        l(this, i), (this._layers = {}), t && this.addData(t);
      },
      addData: function (t) {
        var i,
          e,
          n,
          o = Yt(t) ? t : t.features;
        if (o) {
          for (i = 0, e = o.length; i < e; i++)
            ((n = o[i]).geometries ||
              n.geometry ||
              n.features ||
              n.coordinates) &&
              this.addData(n);
          return this;
        }
        var s = this.options;
        if (s.filter && !s.filter(t)) return this;
        var r = Bt(t, s);
        return r
          ? ((r.feature = jt(t)),
            (r.defaultOptions = r.options),
            this.resetStyle(r),
            s.onEachFeature && s.onEachFeature(t, r),
            this.addLayer(r))
          : this;
      },
      resetStyle: function (t) {
        return (
          (t.options = i({}, t.defaultOptions)),
          this._setLayerStyle(t, this.options.style),
          this
        );
      },
      setStyle: function (t) {
        return this.eachLayer(function (i) {
          this._setLayerStyle(i, t);
        }, this);
      },
      _setLayerStyle: function (t, i) {
        "function" == typeof i && (i = i(t.feature)),
          t.setStyle && t.setStyle(i);
      },
    }),
    Xe = {
      toGeoJSON: function (t) {
        return Nt(this, {
          type: "Point",
          coordinates: Rt(this.getLatLng(), t),
        });
      },
    };
  Fe.include(Xe),
    Ve.include(Xe),
    Ue.include(Xe),
    Ge.include({
      toGeoJSON: function (t) {
        var i = !Et(this._latlngs);
        return Nt(this, {
          type: (i ? "Multi" : "") + "LineString",
          coordinates: Dt(this._latlngs, i ? 1 : 0, !1, t),
        });
      },
    }),
    Ke.include({
      toGeoJSON: function (t) {
        var i = !Et(this._latlngs),
          e = i && !Et(this._latlngs[0]),
          n = Dt(this._latlngs, e ? 2 : i ? 1 : 0, !0, t);
        return (
          i || (n = [n]),
          Nt(this, { type: (e ? "Multi" : "") + "Polygon", coordinates: n })
        );
      },
    }),
    De.include({
      toMultiPoint: function (t) {
        var i = [];
        return (
          this.eachLayer(function (e) {
            i.push(e.toGeoJSON(t).geometry.coordinates);
          }),
          Nt(this, { type: "MultiPoint", coordinates: i })
        );
      },
      toGeoJSON: function (t) {
        var i =
          this.feature && this.feature.geometry && this.feature.geometry.type;
        if ("MultiPoint" === i) return this.toMultiPoint(t);
        var e = "GeometryCollection" === i,
          n = [];
        return (
          this.eachLayer(function (i) {
            if (i.toGeoJSON) {
              var o = i.toGeoJSON(t);
              if (e) n.push(o.geometry);
              else {
                var s = jt(o);
                "FeatureCollection" === s.type
                  ? n.push.apply(n, s.features)
                  : n.push(s);
              }
            }
          }),
          e
            ? Nt(this, { geometries: n, type: "GeometryCollection" })
            : { type: "FeatureCollection", features: n }
        );
      },
    });
  var Je = Wt,
    $e = Re.extend({
      options: {
        opacity: 1,
        alt: "",
        interactive: !1,
        crossOrigin: !1,
        errorOverlayUrl: "",
        zIndex: 1,
        className: "",
      },
      initialize: function (t, i, e) {
        (this._url = t), (this._bounds = T(i)), l(this, e);
      },
      onAdd: function () {
        this._image ||
          (this._initImage(),
          this.options.opacity < 1 && this._updateOpacity()),
          this.options.interactive &&
            (Y(this._image, "leaflet-interactive"),
            this.addInteractiveTarget(this._image)),
          this.getPane().appendChild(this._image),
          this._reset();
      },
      onRemove: function () {
        q(this._image),
          this.options.interactive && this.removeInteractiveTarget(this._image);
      },
      setOpacity: function (t) {
        return (
          (this.options.opacity = t), this._image && this._updateOpacity(), this
        );
      },
      setStyle: function (t) {
        return t.opacity && this.setOpacity(t.opacity), this;
      },
      bringToFront: function () {
        return this._map && V(this._image), this;
      },
      bringToBack: function () {
        return this._map && G(this._image), this;
      },
      setUrl: function (t) {
        return (this._url = t), this._image && (this._image.src = t), this;
      },
      setBounds: function (t) {
        return (this._bounds = T(t)), this._map && this._reset(), this;
      },
      getEvents: function () {
        var t = { zoom: this._reset, viewreset: this._reset };
        return this._zoomAnimated && (t.zoomanim = this._animateZoom), t;
      },
      setZIndex: function (t) {
        return (this.options.zIndex = t), this._updateZIndex(), this;
      },
      getBounds: function () {
        return this._bounds;
      },
      getElement: function () {
        return this._image;
      },
      _initImage: function () {
        var t = "IMG" === this._url.tagName,
          i = (this._image = t ? this._url : F("img"));
        Y(i, "leaflet-image-layer"),
          this._zoomAnimated && Y(i, "leaflet-zoom-animated"),
          this.options.className && Y(i, this.options.className),
          (i.onselectstart = r),
          (i.onmousemove = r),
          (i.onload = e(this.fire, this, "load")),
          (i.onerror = e(this._overlayOnError, this, "error")),
          (this.options.crossOrigin || "" === this.options.crossOrigin) &&
            (i.crossOrigin =
              !0 === this.options.crossOrigin ? "" : this.options.crossOrigin),
          this.options.zIndex && this._updateZIndex(),
          t
            ? (this._url = i.src)
            : ((i.src = this._url), (i.alt = this.options.alt));
      },
      _animateZoom: function (t) {
        var i = this._map.getZoomScale(t.zoom),
          e = this._map._latLngBoundsToNewLayerBounds(
            this._bounds,
            t.zoom,
            t.center
          ).min;
        it(this._image, e, i);
      },
      _reset: function () {
        var t = this._image,
          i = new w(
            this._map.latLngToLayerPoint(this._bounds.getNorthWest()),
            this._map.latLngToLayerPoint(this._bounds.getSouthEast())
          ),
          e = i.getSize();
        et(t, i.min),
          (t.style.width = e.x + "px"),
          (t.style.height = e.y + "px");
      },
      _updateOpacity: function () {
        Q(this._image, this.options.opacity);
      },
      _updateZIndex: function () {
        this._image &&
          void 0 !== this.options.zIndex &&
          null !== this.options.zIndex &&
          (this._image.style.zIndex = this.options.zIndex);
      },
      _overlayOnError: function () {
        this.fire("error");
        var t = this.options.errorOverlayUrl;
        t && this._url !== t && ((this._url = t), (this._image.src = t));
      },
    }),
    Qe = $e.extend({
      options: { autoplay: !0, loop: !0 },
      _initImage: function () {
        var t = "VIDEO" === this._url.tagName,
          i = (this._image = t ? this._url : F("video"));
        if (
          (Y(i, "leaflet-image-layer"),
          this._zoomAnimated && Y(i, "leaflet-zoom-animated"),
          (i.onselectstart = r),
          (i.onmousemove = r),
          (i.onloadeddata = e(this.fire, this, "load")),
          t)
        ) {
          for (
            var n = i.getElementsByTagName("source"), o = [], s = 0;
            s < n.length;
            s++
          )
            o.push(n[s].src);
          this._url = n.length > 0 ? o : [i.src];
        } else {
          Yt(this._url) || (this._url = [this._url]),
            (i.autoplay = !!this.options.autoplay),
            (i.loop = !!this.options.loop);
          for (var a = 0; a < this._url.length; a++) {
            var h = F("source");
            (h.src = this._url[a]), i.appendChild(h);
          }
        }
      },
    }),
    tn = Re.extend({
      options: { offset: [0, 7], className: "", pane: "popupPane" },
      initialize: function (t, i) {
        l(this, t), (this._source = i);
      },
      onAdd: function (t) {
        (this._zoomAnimated = t._zoomAnimated),
          this._container || this._initLayout(),
          t._fadeAnimated && Q(this._container, 0),
          clearTimeout(this._removeTimeout),
          this.getPane().appendChild(this._container),
          this.update(),
          t._fadeAnimated && Q(this._container, 1),
          this.bringToFront();
      },
      onRemove: function (t) {
        t._fadeAnimated
          ? (Q(this._container, 0),
            (this._removeTimeout = setTimeout(
              e(q, void 0, this._container),
              200
            )))
          : q(this._container);
      },
      getLatLng: function () {
        return this._latlng;
      },
      setLatLng: function (t) {
        return (
          (this._latlng = M(t)),
          this._map && (this._updatePosition(), this._adjustPan()),
          this
        );
      },
      getContent: function () {
        return this._content;
      },
      setContent: function (t) {
        return (this._content = t), this.update(), this;
      },
      getElement: function () {
        return this._container;
      },
      update: function () {
        this._map &&
          ((this._container.style.visibility = "hidden"),
          this._updateContent(),
          this._updateLayout(),
          this._updatePosition(),
          (this._container.style.visibility = ""),
          this._adjustPan());
      },
      getEvents: function () {
        var t = { zoom: this._updatePosition, viewreset: this._updatePosition };
        return this._zoomAnimated && (t.zoomanim = this._animateZoom), t;
      },
      isOpen: function () {
        return !!this._map && this._map.hasLayer(this);
      },
      bringToFront: function () {
        return this._map && V(this._container), this;
      },
      bringToBack: function () {
        return this._map && G(this._container), this;
      },
      _updateContent: function () {
        if (this._content) {
          var t = this._contentNode,
            i =
              "function" == typeof this._content
                ? this._content(this._source || this)
                : this._content;
          if ("string" == typeof i) t.innerHTML = i;
          else {
            for (; t.hasChildNodes(); ) t.removeChild(t.firstChild);
            t.appendChild(i);
          }
          this.fire("contentupdate");
        }
      },
      _updatePosition: function () {
        if (this._map) {
          var t = this._map.latLngToLayerPoint(this._latlng),
            i = x(this.options.offset),
            e = this._getAnchor();
          this._zoomAnimated
            ? et(this._container, t.add(e))
            : (i = i.add(t).add(e));
          var n = (this._containerBottom = -i.y),
            o = (this._containerLeft =
              -Math.round(this._containerWidth / 2) + i.x);
          (this._container.style.bottom = n + "px"),
            (this._container.style.left = o + "px");
        }
      },
      _getAnchor: function () {
        return [0, 0];
      },
    }),
    en = tn.extend({
      options: {
        maxWidth: 300,
        minWidth: 50,
        maxHeight: null,
        autoPan: !0,
        autoPanPaddingTopLeft: null,
        autoPanPaddingBottomRight: null,
        autoPanPadding: [5, 5],
        keepInView: !1,
        closeButton: !0,
        autoClose: !0,
        closeOnEscapeKey: !0,
        className: "",
      },
      openOn: function (t) {
        return t.openPopup(this), this;
      },
      onAdd: function (t) {
        tn.prototype.onAdd.call(this, t),
          t.fire("popupopen", { popup: this }),
          this._source &&
            (this._source.fire("popupopen", { popup: this }, !0),
            this._source instanceof qe || this._source.on("preclick", pt));
      },
      onRemove: function (t) {
        tn.prototype.onRemove.call(this, t),
          t.fire("popupclose", { popup: this }),
          this._source &&
            (this._source.fire("popupclose", { popup: this }, !0),
            this._source instanceof qe || this._source.off("preclick", pt));
      },
      getEvents: function () {
        var t = tn.prototype.getEvents.call(this);
        return (
          (void 0 !== this.options.closeOnClick
            ? this.options.closeOnClick
            : this._map.options.closePopupOnClick) &&
            (t.preclick = this._close),
          this.options.keepInView && (t.moveend = this._adjustPan),
          t
        );
      },
      _close: function () {
        this._map && this._map.closePopup(this);
      },
      _initLayout: function () {
        var t = "leaflet-popup",
          i = (this._container = F(
            "div",
            t + " " + (this.options.className || "") + " leaflet-zoom-animated"
          )),
          e = (this._wrapper = F("div", t + "-content-wrapper", i));
        if (
          ((this._contentNode = F("div", t + "-content", e)),
          ft(e),
          mt(this._contentNode),
          lt(e, "contextmenu", pt),
          (this._tipContainer = F("div", t + "-tip-container", i)),
          (this._tip = F("div", t + "-tip", this._tipContainer)),
          this.options.closeButton)
        ) {
          var n = (this._closeButton = F("a", t + "-close-button", i));
          (n.href = "#close"),
            (n.innerHTML = "&#215;"),
            lt(n, "click", this._onCloseButtonClick, this);
        }
      },
      _updateLayout: function () {
        var t = this._contentNode,
          i = t.style;
        (i.width = ""), (i.whiteSpace = "nowrap");
        var e = t.offsetWidth;
        (e = Math.min(e, this.options.maxWidth)),
          (e = Math.max(e, this.options.minWidth)),
          (i.width = e + 1 + "px"),
          (i.whiteSpace = ""),
          (i.height = "");
        var n = t.offsetHeight,
          o = this.options.maxHeight;
        o && n > o
          ? ((i.height = o + "px"), Y(t, "leaflet-popup-scrolled"))
          : X(t, "leaflet-popup-scrolled"),
          (this._containerWidth = this._container.offsetWidth);
      },
      _animateZoom: function (t) {
        var i = this._map._latLngToNewLayerPoint(
            this._latlng,
            t.zoom,
            t.center
          ),
          e = this._getAnchor();
        et(this._container, i.add(e));
      },
      _adjustPan: function () {
        if (
          !(
            !this.options.autoPan ||
            (this._map._panAnim && this._map._panAnim._inProgress)
          )
        ) {
          var t = this._map,
            i = parseInt(H(this._container, "marginBottom"), 10) || 0,
            e = this._container.offsetHeight + i,
            n = this._containerWidth,
            o = new y(this._containerLeft, -e - this._containerBottom);
          o._add(nt(this._container));
          var s = t.layerPointToContainerPoint(o),
            r = x(this.options.autoPanPadding),
            a = x(this.options.autoPanPaddingTopLeft || r),
            h = x(this.options.autoPanPaddingBottomRight || r),
            u = t.getSize(),
            l = 0,
            c = 0;
          s.x + n + h.x > u.x && (l = s.x + n - u.x + h.x),
            s.x - l - a.x < 0 && (l = s.x - a.x),
            s.y + e + h.y > u.y && (c = s.y + e - u.y + h.y),
            s.y - c - a.y < 0 && (c = s.y - a.y),
            (l || c) && t.fire("autopanstart").panBy([l, c]);
        }
      },
      _onCloseButtonClick: function (t) {
        this._close(), vt(t);
      },
      _getAnchor: function () {
        return x(
          this._source && this._source._getPopupAnchor
            ? this._source._getPopupAnchor()
            : [0, 0]
        );
      },
    });
  me.mergeOptions({ closePopupOnClick: !0 }),
    me.include({
      openPopup: function (t, i, e) {
        return (
          t instanceof en || (t = new en(e).setContent(t)),
          i && t.setLatLng(i),
          this.hasLayer(t)
            ? this
            : (this._popup &&
                this._popup.options.autoClose &&
                this.closePopup(),
              (this._popup = t),
              this.addLayer(t))
        );
      },
      closePopup: function (t) {
        return (
          (t && t !== this._popup) || ((t = this._popup), (this._popup = null)),
          t && this.removeLayer(t),
          this
        );
      },
    }),
    Re.include({
      bindPopup: function (t, i) {
        return (
          t instanceof en
            ? (l(t, i), (this._popup = t), (t._source = this))
            : ((this._popup && !i) || (this._popup = new en(i, this)),
              this._popup.setContent(t)),
          this._popupHandlersAdded ||
            (this.on({
              click: this._openPopup,
              keypress: this._onKeyPress,
              remove: this.closePopup,
              move: this._movePopup,
            }),
            (this._popupHandlersAdded = !0)),
          this
        );
      },
      unbindPopup: function () {
        return (
          this._popup &&
            (this.off({
              click: this._openPopup,
              keypress: this._onKeyPress,
              remove: this.closePopup,
              move: this._movePopup,
            }),
            (this._popupHandlersAdded = !1),
            (this._popup = null)),
          this
        );
      },
      openPopup: function (t, i) {
        if ((t instanceof Re || ((i = t), (t = this)), t instanceof Ne))
          for (var e in this._layers) {
            t = this._layers[e];
            break;
          }
        return (
          i || (i = t.getCenter ? t.getCenter() : t.getLatLng()),
          this._popup &&
            this._map &&
            ((this._popup._source = t),
            this._popup.update(),
            this._map.openPopup(this._popup, i)),
          this
        );
      },
      closePopup: function () {
        return this._popup && this._popup._close(), this;
      },
      togglePopup: function (t) {
        return (
          this._popup &&
            (this._popup._map ? this.closePopup() : this.openPopup(t)),
          this
        );
      },
      isPopupOpen: function () {
        return !!this._popup && this._popup.isOpen();
      },
      setPopupContent: function (t) {
        return this._popup && this._popup.setContent(t), this;
      },
      getPopup: function () {
        return this._popup;
      },
      _openPopup: function (t) {
        var i = t.layer || t.target;
        this._popup &&
          this._map &&
          (vt(t),
          i instanceof qe
            ? this.openPopup(t.layer || t.target, t.latlng)
            : this._map.hasLayer(this._popup) && this._popup._source === i
            ? this.closePopup()
            : this.openPopup(i, t.latlng));
      },
      _movePopup: function (t) {
        this._popup.setLatLng(t.latlng);
      },
      _onKeyPress: function (t) {
        13 === t.originalEvent.keyCode && this._openPopup(t);
      },
    });
  var nn = tn.extend({
    options: {
      pane: "tooltipPane",
      offset: [0, 0],
      direction: "auto",
      permanent: !1,
      sticky: !1,
      interactive: !1,
      opacity: 0.9,
    },
    onAdd: function (t) {
      tn.prototype.onAdd.call(this, t),
        this.setOpacity(this.options.opacity),
        t.fire("tooltipopen", { tooltip: this }),
        this._source && this._source.fire("tooltipopen", { tooltip: this }, !0);
    },
    onRemove: function (t) {
      tn.prototype.onRemove.call(this, t),
        t.fire("tooltipclose", { tooltip: this }),
        this._source &&
          this._source.fire("tooltipclose", { tooltip: this }, !0);
    },
    getEvents: function () {
      var t = tn.prototype.getEvents.call(this);
      return Ri && !this.options.permanent && (t.preclick = this._close), t;
    },
    _close: function () {
      this._map && this._map.closeTooltip(this);
    },
    _initLayout: function () {
      var t =
        "leaflet-tooltip " +
        (this.options.className || "") +
        " leaflet-zoom-" +
        (this._zoomAnimated ? "animated" : "hide");
      this._contentNode = this._container = F("div", t);
    },
    _updateLayout: function () {},
    _adjustPan: function () {},
    _setPosition: function (t) {
      var i = this._map,
        e = this._container,
        n = i.latLngToContainerPoint(i.getCenter()),
        o = i.layerPointToContainerPoint(t),
        s = this.options.direction,
        r = e.offsetWidth,
        a = e.offsetHeight,
        h = x(this.options.offset),
        u = this._getAnchor();
      "top" === s
        ? (t = t.add(x(-r / 2 + h.x, -a + h.y + u.y, !0)))
        : "bottom" === s
        ? (t = t.subtract(x(r / 2 - h.x, -h.y, !0)))
        : "center" === s
        ? (t = t.subtract(x(r / 2 + h.x, a / 2 - u.y + h.y, !0)))
        : "right" === s || ("auto" === s && o.x < n.x)
        ? ((s = "right"), (t = t.add(x(h.x + u.x, u.y - a / 2 + h.y, !0))))
        : ((s = "left"),
          (t = t.subtract(x(r + u.x - h.x, a / 2 - u.y - h.y, !0)))),
        X(e, "leaflet-tooltip-right"),
        X(e, "leaflet-tooltip-left"),
        X(e, "leaflet-tooltip-top"),
        X(e, "leaflet-tooltip-bottom"),
        Y(e, "leaflet-tooltip-" + s),
        et(e, t);
    },
    _updatePosition: function () {
      var t = this._map.latLngToLayerPoint(this._latlng);
      this._setPosition(t);
    },
    setOpacity: function (t) {
      (this.options.opacity = t), this._container && Q(this._container, t);
    },
    _animateZoom: function (t) {
      var i = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center);
      this._setPosition(i);
    },
    _getAnchor: function () {
      return x(
        this._source && this._source._getTooltipAnchor && !this.options.sticky
          ? this._source._getTooltipAnchor()
          : [0, 0]
      );
    },
  });
  me.include({
    openTooltip: function (t, i, e) {
      return (
        t instanceof nn || (t = new nn(e).setContent(t)),
        i && t.setLatLng(i),
        this.hasLayer(t) ? this : this.addLayer(t)
      );
    },
    closeTooltip: function (t) {
      return t && this.removeLayer(t), this;
    },
  }),
    Re.include({
      bindTooltip: function (t, i) {
        return (
          t instanceof nn
            ? (l(t, i), (this._tooltip = t), (t._source = this))
            : ((this._tooltip && !i) || (this._tooltip = new nn(i, this)),
              this._tooltip.setContent(t)),
          this._initTooltipInteractions(),
          this._tooltip.options.permanent &&
            this._map &&
            this._map.hasLayer(this) &&
            this.openTooltip(),
          this
        );
      },
      unbindTooltip: function () {
        return (
          this._tooltip &&
            (this._initTooltipInteractions(!0),
            this.closeTooltip(),
            (this._tooltip = null)),
          this
        );
      },
      _initTooltipInteractions: function (t) {
        if (t || !this._tooltipHandlersAdded) {
          var i = t ? "off" : "on",
            e = { remove: this.closeTooltip, move: this._moveTooltip };
          this._tooltip.options.permanent
            ? (e.add = this._openTooltip)
            : ((e.mouseover = this._openTooltip),
              (e.mouseout = this.closeTooltip),
              this._tooltip.options.sticky && (e.mousemove = this._moveTooltip),
              Ri && (e.click = this._openTooltip)),
            this[i](e),
            (this._tooltipHandlersAdded = !t);
        }
      },
      openTooltip: function (t, i) {
        if ((t instanceof Re || ((i = t), (t = this)), t instanceof Ne))
          for (var e in this._layers) {
            t = this._layers[e];
            break;
          }
        return (
          i || (i = t.getCenter ? t.getCenter() : t.getLatLng()),
          this._tooltip &&
            this._map &&
            ((this._tooltip._source = t),
            this._tooltip.update(),
            this._map.openTooltip(this._tooltip, i),
            this._tooltip.options.interactive &&
              this._tooltip._container &&
              (Y(this._tooltip._container, "leaflet-clickable"),
              this.addInteractiveTarget(this._tooltip._container))),
          this
        );
      },
      closeTooltip: function () {
        return (
          this._tooltip &&
            (this._tooltip._close(),
            this._tooltip.options.interactive &&
              this._tooltip._container &&
              (X(this._tooltip._container, "leaflet-clickable"),
              this.removeInteractiveTarget(this._tooltip._container))),
          this
        );
      },
      toggleTooltip: function (t) {
        return (
          this._tooltip &&
            (this._tooltip._map ? this.closeTooltip() : this.openTooltip(t)),
          this
        );
      },
      isTooltipOpen: function () {
        return this._tooltip.isOpen();
      },
      setTooltipContent: function (t) {
        return this._tooltip && this._tooltip.setContent(t), this;
      },
      getTooltip: function () {
        return this._tooltip;
      },
      _openTooltip: function (t) {
        var i = t.layer || t.target;
        this._tooltip &&
          this._map &&
          this.openTooltip(i, this._tooltip.options.sticky ? t.latlng : void 0);
      },
      _moveTooltip: function (t) {
        var i,
          e,
          n = t.latlng;
        this._tooltip.options.sticky &&
          t.originalEvent &&
          ((i = this._map.mouseEventToContainerPoint(t.originalEvent)),
          (e = this._map.containerPointToLayerPoint(i)),
          (n = this._map.layerPointToLatLng(e))),
          this._tooltip.setLatLng(n);
      },
    });
  var on = je.extend({
    options: {
      iconSize: [12, 12],
      html: !1,
      bgPos: null,
      className: "leaflet-div-icon",
    },
    createIcon: function (t) {
      var i = t && "DIV" === t.tagName ? t : document.createElement("div"),
        e = this.options;
      if (((i.innerHTML = !1 !== e.html ? e.html : ""), e.bgPos)) {
        var n = x(e.bgPos);
        i.style.backgroundPosition = -n.x + "px " + -n.y + "px";
      }
      return this._setIconStyles(i, "icon"), i;
    },
    createShadow: function () {
      return null;
    },
  });
  je.Default = We;
  var sn = Re.extend({
      options: {
        tileSize: 256,
        opacity: 1,
        updateWhenIdle: ki,
        updateWhenZooming: !0,
        updateInterval: 200,
        zIndex: 1,
        bounds: null,
        minZoom: 0,
        maxZoom: void 0,
        maxNativeZoom: void 0,
        minNativeZoom: void 0,
        noWrap: !1,
        pane: "tilePane",
        className: "",
        keepBuffer: 2,
      },
      initialize: function (t) {
        l(this, t);
      },
      onAdd: function () {
        this._initContainer(),
          (this._levels = {}),
          (this._tiles = {}),
          this._resetView(),
          this._update();
      },
      beforeAdd: function (t) {
        t._addZoomLimit(this);
      },
      onRemove: function (t) {
        this._removeAllTiles(),
          q(this._container),
          t._removeZoomLimit(this),
          (this._container = null),
          (this._tileZoom = void 0);
      },
      bringToFront: function () {
        return (
          this._map && (V(this._container), this._setAutoZIndex(Math.max)), this
        );
      },
      bringToBack: function () {
        return (
          this._map && (G(this._container), this._setAutoZIndex(Math.min)), this
        );
      },
      getContainer: function () {
        return this._container;
      },
      setOpacity: function (t) {
        return (this.options.opacity = t), this._updateOpacity(), this;
      },
      setZIndex: function (t) {
        return (this.options.zIndex = t), this._updateZIndex(), this;
      },
      isLoading: function () {
        return this._loading;
      },
      redraw: function () {
        return this._map && (this._removeAllTiles(), this._update()), this;
      },
      getEvents: function () {
        var t = {
          viewprereset: this._invalidateAll,
          viewreset: this._resetView,
          zoom: this._resetView,
          moveend: this._onMoveEnd,
        };
        return (
          this.options.updateWhenIdle ||
            (this._onMove ||
              (this._onMove = o(
                this._onMoveEnd,
                this.options.updateInterval,
                this
              )),
            (t.move = this._onMove)),
          this._zoomAnimated && (t.zoomanim = this._animateZoom),
          t
        );
      },
      createTile: function () {
        return document.createElement("div");
      },
      getTileSize: function () {
        var t = this.options.tileSize;
        return t instanceof y ? t : new y(t, t);
      },
      _updateZIndex: function () {
        this._container &&
          void 0 !== this.options.zIndex &&
          null !== this.options.zIndex &&
          (this._container.style.zIndex = this.options.zIndex);
      },
      _setAutoZIndex: function (t) {
        for (
          var i,
            e = this.getPane().children,
            n = -t(-1 / 0, 1 / 0),
            o = 0,
            s = e.length;
          o < s;
          o++
        )
          (i = e[o].style.zIndex),
            e[o] !== this._container && i && (n = t(n, +i));
        isFinite(n) &&
          ((this.options.zIndex = n + t(-1, 1)), this._updateZIndex());
      },
      _updateOpacity: function () {
        if (this._map && !pi) {
          Q(this._container, this.options.opacity);
          var t = +new Date(),
            i = !1,
            e = !1;
          for (var n in this._tiles) {
            var o = this._tiles[n];
            if (o.current && o.loaded) {
              var s = Math.min(1, (t - o.loaded) / 200);
              Q(o.el, s),
                s < 1
                  ? (i = !0)
                  : (o.active ? (e = !0) : this._onOpaqueTile(o),
                    (o.active = !0));
            }
          }
          e && !this._noPrune && this._pruneTiles(),
            i &&
              (g(this._fadeFrame),
              (this._fadeFrame = f(this._updateOpacity, this)));
        }
      },
      _onOpaqueTile: r,
      _initContainer: function () {
        this._container ||
          ((this._container = F(
            "div",
            "leaflet-layer " + (this.options.className || "")
          )),
          this._updateZIndex(),
          this.options.opacity < 1 && this._updateOpacity(),
          this.getPane().appendChild(this._container));
      },
      _updateLevels: function () {
        var t = this._tileZoom,
          i = this.options.maxZoom;
        if (void 0 !== t) {
          for (var e in this._levels)
            this._levels[e].el.children.length || e === t
              ? ((this._levels[e].el.style.zIndex = i - Math.abs(t - e)),
                this._onUpdateLevel(e))
              : (q(this._levels[e].el),
                this._removeTilesAtZoom(e),
                this._onRemoveLevel(e),
                delete this._levels[e]);
          var n = this._levels[t],
            o = this._map;
          return (
            n ||
              (((n = this._levels[t] = {}).el = F(
                "div",
                "leaflet-tile-container leaflet-zoom-animated",
                this._container
              )),
              (n.el.style.zIndex = i),
              (n.origin = o
                .project(o.unproject(o.getPixelOrigin()), t)
                .round()),
              (n.zoom = t),
              this._setZoomTransform(n, o.getCenter(), o.getZoom()),
              n.el.offsetWidth,
              this._onCreateLevel(n)),
            (this._level = n),
            n
          );
        }
      },
      _onUpdateLevel: r,
      _onRemoveLevel: r,
      _onCreateLevel: r,
      _pruneTiles: function () {
        if (this._map) {
          var t,
            i,
            e = this._map.getZoom();
          if (e > this.options.maxZoom || e < this.options.minZoom)
            this._removeAllTiles();
          else {
            for (t in this._tiles) (i = this._tiles[t]).retain = i.current;
            for (t in this._tiles)
              if ((i = this._tiles[t]).current && !i.active) {
                var n = i.coords;
                this._retainParent(n.x, n.y, n.z, n.z - 5) ||
                  this._retainChildren(n.x, n.y, n.z, n.z + 2);
              }
            for (t in this._tiles) this._tiles[t].retain || this._removeTile(t);
          }
        }
      },
      _removeTilesAtZoom: function (t) {
        for (var i in this._tiles)
          this._tiles[i].coords.z === t && this._removeTile(i);
      },
      _removeAllTiles: function () {
        for (var t in this._tiles) this._removeTile(t);
      },
      _invalidateAll: function () {
        for (var t in this._levels)
          q(this._levels[t].el), this._onRemoveLevel(t), delete this._levels[t];
        this._removeAllTiles(), (this._tileZoom = void 0);
      },
      _retainParent: function (t, i, e, n) {
        var o = Math.floor(t / 2),
          s = Math.floor(i / 2),
          r = e - 1,
          a = new y(+o, +s);
        a.z = +r;
        var h = this._tileCoordsToKey(a),
          u = this._tiles[h];
        return u && u.active
          ? ((u.retain = !0), !0)
          : (u && u.loaded && (u.retain = !0),
            r > n && this._retainParent(o, s, r, n));
      },
      _retainChildren: function (t, i, e, n) {
        for (var o = 2 * t; o < 2 * t + 2; o++)
          for (var s = 2 * i; s < 2 * i + 2; s++) {
            var r = new y(o, s);
            r.z = e + 1;
            var a = this._tileCoordsToKey(r),
              h = this._tiles[a];
            h && h.active
              ? (h.retain = !0)
              : (h && h.loaded && (h.retain = !0),
                e + 1 < n && this._retainChildren(o, s, e + 1, n));
          }
      },
      _resetView: function (t) {
        var i = t && (t.pinch || t.flyTo);
        this._setView(this._map.getCenter(), this._map.getZoom(), i, i);
      },
      _animateZoom: function (t) {
        this._setView(t.center, t.zoom, !0, t.noUpdate);
      },
      _clampZoom: function (t) {
        var i = this.options;
        return void 0 !== i.minNativeZoom && t < i.minNativeZoom
          ? i.minNativeZoom
          : void 0 !== i.maxNativeZoom && i.maxNativeZoom < t
          ? i.maxNativeZoom
          : t;
      },
      _setView: function (t, i, e, n) {
        var o = this._clampZoom(Math.round(i));
        ((void 0 !== this.options.maxZoom && o > this.options.maxZoom) ||
          (void 0 !== this.options.minZoom && o < this.options.minZoom)) &&
          (o = void 0);
        var s = this.options.updateWhenZooming && o !== this._tileZoom;
        (n && !s) ||
          ((this._tileZoom = o),
          this._abortLoading && this._abortLoading(),
          this._updateLevels(),
          this._resetGrid(),
          void 0 !== o && this._update(t),
          e || this._pruneTiles(),
          (this._noPrune = !!e)),
          this._setZoomTransforms(t, i);
      },
      _setZoomTransforms: function (t, i) {
        for (var e in this._levels)
          this._setZoomTransform(this._levels[e], t, i);
      },
      _setZoomTransform: function (t, i, e) {
        var n = this._map.getZoomScale(e, t.zoom),
          o = t.origin
            .multiplyBy(n)
            .subtract(this._map._getNewPixelOrigin(i, e))
            .round();
        Ei ? it(t.el, o, n) : et(t.el, o);
      },
      _resetGrid: function () {
        var t = this._map,
          i = t.options.crs,
          e = (this._tileSize = this.getTileSize()),
          n = this._tileZoom,
          o = this._map.getPixelWorldBounds(this._tileZoom);
        o && (this._globalTileRange = this._pxBoundsToTileRange(o)),
          (this._wrapX = i.wrapLng &&
            !this.options.noWrap && [
              Math.floor(t.project([0, i.wrapLng[0]], n).x / e.x),
              Math.ceil(t.project([0, i.wrapLng[1]], n).x / e.y),
            ]),
          (this._wrapY = i.wrapLat &&
            !this.options.noWrap && [
              Math.floor(t.project([i.wrapLat[0], 0], n).y / e.x),
              Math.ceil(t.project([i.wrapLat[1], 0], n).y / e.y),
            ]);
      },
      _onMoveEnd: function () {
        this._map && !this._map._animatingZoom && this._update();
      },
      _getTiledPixelBounds: function (t) {
        var i = this._map,
          e = i._animatingZoom
            ? Math.max(i._animateToZoom, i.getZoom())
            : i.getZoom(),
          n = i.getZoomScale(e, this._tileZoom),
          o = i.project(t, this._tileZoom).floor(),
          s = i.getSize().divideBy(2 * n);
        return new w(o.subtract(s), o.add(s));
      },
      _update: function (t) {
        var i = this._map;
        if (i) {
          var e = this._clampZoom(i.getZoom());
          if (
            (void 0 === t && (t = i.getCenter()), void 0 !== this._tileZoom)
          ) {
            var n = this._getTiledPixelBounds(t),
              o = this._pxBoundsToTileRange(n),
              s = o.getCenter(),
              r = [],
              a = this.options.keepBuffer,
              h = new w(
                o.getBottomLeft().subtract([a, -a]),
                o.getTopRight().add([a, -a])
              );
            if (
              !(
                isFinite(o.min.x) &&
                isFinite(o.min.y) &&
                isFinite(o.max.x) &&
                isFinite(o.max.y)
              )
            )
              throw new Error("Attempted to load an infinite number of tiles");
            for (var u in this._tiles) {
              var l = this._tiles[u].coords;
              (l.z === this._tileZoom && h.contains(new y(l.x, l.y))) ||
                (this._tiles[u].current = !1);
            }
            if (Math.abs(e - this._tileZoom) > 1) this._setView(t, e);
            else {
              for (var c = o.min.y; c <= o.max.y; c++)
                for (var _ = o.min.x; _ <= o.max.x; _++) {
                  var d = new y(_, c);
                  if (((d.z = this._tileZoom), this._isValidTile(d))) {
                    var p = this._tiles[this._tileCoordsToKey(d)];
                    p ? (p.current = !0) : r.push(d);
                  }
                }
              if (
                (r.sort(function (t, i) {
                  return t.distanceTo(s) - i.distanceTo(s);
                }),
                0 !== r.length)
              ) {
                this._loading || ((this._loading = !0), this.fire("loading"));
                var m = document.createDocumentFragment();
                for (_ = 0; _ < r.length; _++) this._addTile(r[_], m);
                this._level.el.appendChild(m);
              }
            }
          }
        }
      },
      _isValidTile: function (t) {
        var i = this._map.options.crs;
        if (!i.infinite) {
          var e = this._globalTileRange;
          if (
            (!i.wrapLng && (t.x < e.min.x || t.x > e.max.x)) ||
            (!i.wrapLat && (t.y < e.min.y || t.y > e.max.y))
          )
            return !1;
        }
        if (!this.options.bounds) return !0;
        var n = this._tileCoordsToBounds(t);
        return T(this.options.bounds).overlaps(n);
      },
      _keyToBounds: function (t) {
        return this._tileCoordsToBounds(this._keyToTileCoords(t));
      },
      _tileCoordsToNwSe: function (t) {
        var i = this._map,
          e = this.getTileSize(),
          n = t.scaleBy(e),
          o = n.add(e);
        return [i.unproject(n, t.z), i.unproject(o, t.z)];
      },
      _tileCoordsToBounds: function (t) {
        var i = this._tileCoordsToNwSe(t),
          e = new b(i[0], i[1]);
        return this.options.noWrap || (e = this._map.wrapLatLngBounds(e)), e;
      },
      _tileCoordsToKey: function (t) {
        return t.x + ":" + t.y + ":" + t.z;
      },
      _keyToTileCoords: function (t) {
        var i = t.split(":"),
          e = new y(+i[0], +i[1]);
        return (e.z = +i[2]), e;
      },
      _removeTile: function (t) {
        var i = this._tiles[t];
        i &&
          (q(i.el),
          delete this._tiles[t],
          this.fire("tileunload", {
            tile: i.el,
            coords: this._keyToTileCoords(t),
          }));
      },
      _initTile: function (t) {
        Y(t, "leaflet-tile");
        var i = this.getTileSize();
        (t.style.width = i.x + "px"),
          (t.style.height = i.y + "px"),
          (t.onselectstart = r),
          (t.onmousemove = r),
          pi && this.options.opacity < 1 && Q(t, this.options.opacity),
          gi && !vi && (t.style.WebkitBackfaceVisibility = "hidden");
      },
      _addTile: function (t, i) {
        var n = this._getTilePos(t),
          o = this._tileCoordsToKey(t),
          s = this.createTile(this._wrapCoords(t), e(this._tileReady, this, t));
        this._initTile(s),
          this.createTile.length < 2 && f(e(this._tileReady, this, t, null, s)),
          et(s, n),
          (this._tiles[o] = { el: s, coords: t, current: !0 }),
          i.appendChild(s),
          this.fire("tileloadstart", { tile: s, coords: t });
      },
      _tileReady: function (t, i, n) {
        i && this.fire("tileerror", { error: i, tile: n, coords: t });
        var o = this._tileCoordsToKey(t);
        (n = this._tiles[o]) &&
          ((n.loaded = +new Date()),
          this._map._fadeAnimated
            ? (Q(n.el, 0),
              g(this._fadeFrame),
              (this._fadeFrame = f(this._updateOpacity, this)))
            : ((n.active = !0), this._pruneTiles()),
          i ||
            (Y(n.el, "leaflet-tile-loaded"),
            this.fire("tileload", { tile: n.el, coords: t })),
          this._noTilesToLoad() &&
            ((this._loading = !1),
            this.fire("load"),
            pi || !this._map._fadeAnimated
              ? f(this._pruneTiles, this)
              : setTimeout(e(this._pruneTiles, this), 250)));
      },
      _getTilePos: function (t) {
        return t.scaleBy(this.getTileSize()).subtract(this._level.origin);
      },
      _wrapCoords: function (t) {
        var i = new y(
          this._wrapX ? s(t.x, this._wrapX) : t.x,
          this._wrapY ? s(t.y, this._wrapY) : t.y
        );
        return (i.z = t.z), i;
      },
      _pxBoundsToTileRange: function (t) {
        var i = this.getTileSize();
        return new w(
          t.min.unscaleBy(i).floor(),
          t.max.unscaleBy(i).ceil().subtract([1, 1])
        );
      },
      _noTilesToLoad: function () {
        for (var t in this._tiles) if (!this._tiles[t].loaded) return !1;
        return !0;
      },
    }),
    rn = sn.extend({
      options: {
        minZoom: 0,
        maxZoom: 18,
        subdomains: "abc",
        errorTileUrl: "",
        zoomOffset: 0,
        tms: !1,
        zoomReverse: !1,
        detectRetina: !1,
        crossOrigin: !1,
      },
      initialize: function (t, i) {
        (this._url = t),
          (i = l(this, i)).detectRetina &&
            ji &&
            i.maxZoom > 0 &&
            ((i.tileSize = Math.floor(i.tileSize / 2)),
            i.zoomReverse
              ? (i.zoomOffset--, i.minZoom++)
              : (i.zoomOffset++, i.maxZoom--),
            (i.minZoom = Math.max(0, i.minZoom))),
          "string" == typeof i.subdomains &&
            (i.subdomains = i.subdomains.split("")),
          gi || this.on("tileunload", this._onTileRemove);
      },
      setUrl: function (t, i) {
        return (this._url = t), i || this.redraw(), this;
      },
      createTile: function (t, i) {
        var n = document.createElement("img");
        return (
          lt(n, "load", e(this._tileOnLoad, this, i, n)),
          lt(n, "error", e(this._tileOnError, this, i, n)),
          (this.options.crossOrigin || "" === this.options.crossOrigin) &&
            (n.crossOrigin =
              !0 === this.options.crossOrigin ? "" : this.options.crossOrigin),
          (n.alt = ""),
          n.setAttribute("role", "presentation"),
          (n.src = this.getTileUrl(t)),
          n
        );
      },
      getTileUrl: function (t) {
        var e = {
          r: ji ? "@2x" : "",
          s: this._getSubdomain(t),
          x: t.x,
          y: t.y,
          z: this._getZoomForUrl(),
        };
        if (this._map && !this._map.options.crs.infinite) {
          var n = this._globalTileRange.max.y - t.y;
          this.options.tms && (e.y = n), (e["-y"] = n);
        }
        return _(this._url, i(e, this.options));
      },
      _tileOnLoad: function (t, i) {
        pi ? setTimeout(e(t, this, null, i), 0) : t(null, i);
      },
      _tileOnError: function (t, i, e) {
        var n = this.options.errorTileUrl;
        n && i.getAttribute("src") !== n && (i.src = n), t(e, i);
      },
      _onTileRemove: function (t) {
        t.tile.onload = null;
      },
      _getZoomForUrl: function () {
        var t = this._tileZoom,
          i = this.options.maxZoom;
        return (
          this.options.zoomReverse && (t = i - t), t + this.options.zoomOffset
        );
      },
      _getSubdomain: function (t) {
        var i = Math.abs(t.x + t.y) % this.options.subdomains.length;
        return this.options.subdomains[i];
      },
      _abortLoading: function () {
        var t, i;
        for (t in this._tiles)
          this._tiles[t].coords.z !== this._tileZoom &&
            (((i = this._tiles[t].el).onload = r),
            (i.onerror = r),
            i.complete || ((i.src = Xt), q(i), delete this._tiles[t]));
      },
      _removeTile: function (t) {
        var i = this._tiles[t];
        if (i)
          return (
            xi || i.el.setAttribute("src", Xt),
            sn.prototype._removeTile.call(this, t)
          );
      },
      _tileReady: function (t, i, e) {
        if (this._map && (!e || e.getAttribute("src") !== Xt))
          return sn.prototype._tileReady.call(this, t, i, e);
      },
    }),
    an = rn.extend({
      defaultWmsParams: {
        service: "WMS",
        request: "GetMap",
        layers: "",
        styles: "",
        format: "image/jpeg",
        transparent: !1,
        version: "1.1.1",
      },
      options: { crs: null, uppercase: !1 },
      initialize: function (t, e) {
        this._url = t;
        var n = i({}, this.defaultWmsParams);
        for (var o in e) o in this.options || (n[o] = e[o]);
        var s = (e = l(this, e)).detectRetina && ji ? 2 : 1,
          r = this.getTileSize();
        (n.width = r.x * s), (n.height = r.y * s), (this.wmsParams = n);
      },
      onAdd: function (t) {
        (this._crs = this.options.crs || t.options.crs),
          (this._wmsVersion = parseFloat(this.wmsParams.version));
        var i = this._wmsVersion >= 1.3 ? "crs" : "srs";
        (this.wmsParams[i] = this._crs.code), rn.prototype.onAdd.call(this, t);
      },
      getTileUrl: function (t) {
        var i = this._tileCoordsToNwSe(t),
          e = this._crs,
          n = P(e.project(i[0]), e.project(i[1])),
          o = n.min,
          s = n.max,
          r = (
            this._wmsVersion >= 1.3 && this._crs === Ie
              ? [o.y, o.x, s.y, s.x]
              : [o.x, o.y, s.x, s.y]
          ).join(","),
          a = rn.prototype.getTileUrl.call(this, t);
        return (
          a +
          c(this.wmsParams, a, this.options.uppercase) +
          (this.options.uppercase ? "&BBOX=" : "&bbox=") +
          r
        );
      },
      setParams: function (t, e) {
        return i(this.wmsParams, t), e || this.redraw(), this;
      },
    });
  (rn.WMS = an),
    (Ht.wms = function (t, i) {
      return new an(t, i);
    });
  var hn = Re.extend({
      options: { padding: 0.1, tolerance: 0 },
      initialize: function (t) {
        l(this, t), n(this), (this._layers = this._layers || {});
      },
      onAdd: function () {
        this._container ||
          (this._initContainer(),
          this._zoomAnimated && Y(this._container, "leaflet-zoom-animated")),
          this.getPane().appendChild(this._container),
          this._update(),
          this.on("update", this._updatePaths, this);
      },
      onRemove: function () {
        this.off("update", this._updatePaths, this), this._destroyContainer();
      },
      getEvents: function () {
        var t = {
          viewreset: this._reset,
          zoom: this._onZoom,
          moveend: this._update,
          zoomend: this._onZoomEnd,
        };
        return this._zoomAnimated && (t.zoomanim = this._onAnimZoom), t;
      },
      _onAnimZoom: function (t) {
        this._updateTransform(t.center, t.zoom);
      },
      _onZoom: function () {
        this._updateTransform(this._map.getCenter(), this._map.getZoom());
      },
      _updateTransform: function (t, i) {
        var e = this._map.getZoomScale(i, this._zoom),
          n = nt(this._container),
          o = this._map.getSize().multiplyBy(0.5 + this.options.padding),
          s = this._map.project(this._center, i),
          r = this._map.project(t, i).subtract(s),
          a = o.multiplyBy(-e).add(n).add(o).subtract(r);
        Ei ? it(this._container, a, e) : et(this._container, a);
      },
      _reset: function () {
        for (var t in (this._update(),
        this._updateTransform(this._center, this._zoom),
        this._layers))
          this._layers[t]._reset();
      },
      _onZoomEnd: function () {
        for (var t in this._layers) this._layers[t]._project();
      },
      _updatePaths: function () {
        for (var t in this._layers) this._layers[t]._update();
      },
      _update: function () {
        var t = this.options.padding,
          i = this._map.getSize(),
          e = this._map.containerPointToLayerPoint(i.multiplyBy(-t)).round();
        (this._bounds = new w(e, e.add(i.multiplyBy(1 + 2 * t)).round())),
          (this._center = this._map.getCenter()),
          (this._zoom = this._map.getZoom());
      },
    }),
    un = hn.extend({
      getEvents: function () {
        var t = hn.prototype.getEvents.call(this);
        return (t.viewprereset = this._onViewPreReset), t;
      },
      _onViewPreReset: function () {
        this._postponeUpdatePaths = !0;
      },
      onAdd: function () {
        hn.prototype.onAdd.call(this), this._draw();
      },
      _initContainer: function () {
        var t = (this._container = document.createElement("canvas"));
        lt(t, "mousemove", o(this._onMouseMove, 32, this), this),
          lt(
            t,
            "click dblclick mousedown mouseup contextmenu",
            this._onClick,
            this
          ),
          lt(t, "mouseout", this._handleMouseOut, this),
          (this._ctx = t.getContext("2d"));
      },
      _destroyContainer: function () {
        g(this._redrawRequest),
          delete this._ctx,
          q(this._container),
          ct(this._container),
          delete this._container;
      },
      _updatePaths: function () {
        if (!this._postponeUpdatePaths) {
          for (var t in ((this._redrawBounds = null), this._layers))
            this._layers[t]._update();
          this._redraw();
        }
      },
      _update: function () {
        if (!this._map._animatingZoom || !this._bounds) {
          (this._drawnLayers = {}), hn.prototype._update.call(this);
          var t = this._bounds,
            i = this._container,
            e = t.getSize(),
            n = ji ? 2 : 1;
          et(i, t.min),
            (i.width = n * e.x),
            (i.height = n * e.y),
            (i.style.width = e.x + "px"),
            (i.style.height = e.y + "px"),
            ji && this._ctx.scale(2, 2),
            this._ctx.translate(-t.min.x, -t.min.y),
            this.fire("update");
        }
      },
      _reset: function () {
        hn.prototype._reset.call(this),
          this._postponeUpdatePaths &&
            ((this._postponeUpdatePaths = !1), this._updatePaths());
      },
      _initPath: function (t) {
        this._updateDashArray(t), (this._layers[n(t)] = t);
        var i = (t._order = { layer: t, prev: this._drawLast, next: null });
        this._drawLast && (this._drawLast.next = i),
          (this._drawLast = i),
          (this._drawFirst = this._drawFirst || this._drawLast);
      },
      _addPath: function (t) {
        this._requestRedraw(t);
      },
      _removePath: function (t) {
        var i = t._order,
          e = i.next,
          o = i.prev;
        e ? (e.prev = o) : (this._drawLast = o),
          o ? (o.next = e) : (this._drawFirst = e),
          delete this._drawnLayers[t._leaflet_id],
          delete t._order,
          delete this._layers[n(t)],
          this._requestRedraw(t);
      },
      _updatePath: function (t) {
        this._extendRedrawBounds(t),
          t._project(),
          t._update(),
          this._requestRedraw(t);
      },
      _updateStyle: function (t) {
        this._updateDashArray(t), this._requestRedraw(t);
      },
      _updateDashArray: function (t) {
        if ("string" == typeof t.options.dashArray) {
          var i,
            e = t.options.dashArray.split(/[, ]+/),
            n = [];
          for (i = 0; i < e.length; i++) n.push(Number(e[i]));
          t.options._dashArray = n;
        } else t.options._dashArray = t.options.dashArray;
      },
      _requestRedraw: function (t) {
        this._map &&
          (this._extendRedrawBounds(t),
          (this._redrawRequest = this._redrawRequest || f(this._redraw, this)));
      },
      _extendRedrawBounds: function (t) {
        if (t._pxBounds) {
          var i = (t.options.weight || 0) + 1;
          (this._redrawBounds = this._redrawBounds || new w()),
            this._redrawBounds.extend(t._pxBounds.min.subtract([i, i])),
            this._redrawBounds.extend(t._pxBounds.max.add([i, i]));
        }
      },
      _redraw: function () {
        (this._redrawRequest = null),
          this._redrawBounds &&
            (this._redrawBounds.min._floor(), this._redrawBounds.max._ceil()),
          this._clear(),
          this._draw(),
          (this._redrawBounds = null);
      },
      _clear: function () {
        var t = this._redrawBounds;
        if (t) {
          var i = t.getSize();
          this._ctx.clearRect(t.min.x, t.min.y, i.x, i.y);
        } else
          this._ctx.clearRect(
            0,
            0,
            this._container.width,
            this._container.height
          );
      },
      _draw: function () {
        var t,
          i = this._redrawBounds;
        if ((this._ctx.save(), i)) {
          var e = i.getSize();
          this._ctx.beginPath(),
            this._ctx.rect(i.min.x, i.min.y, e.x, e.y),
            this._ctx.clip();
        }
        this._drawing = !0;
        for (var n = this._drawFirst; n; n = n.next)
          (t = n.layer),
            (!i || (t._pxBounds && t._pxBounds.intersects(i))) &&
              t._updatePath();
        (this._drawing = !1), this._ctx.restore();
      },
      _updatePoly: function (t, i) {
        if (this._drawing) {
          var e,
            n,
            o,
            s,
            r = t._parts,
            a = r.length,
            h = this._ctx;
          if (a) {
            for (
              this._drawnLayers[t._leaflet_id] = t, h.beginPath(), e = 0;
              e < a;
              e++
            ) {
              for (n = 0, o = r[e].length; n < o; n++)
                (s = r[e][n]), h[n ? "lineTo" : "moveTo"](s.x, s.y);
              i && h.closePath();
            }
            this._fillStroke(h, t);
          }
        }
      },
      _updateCircle: function (t) {
        if (this._drawing && !t._empty()) {
          var i = t._point,
            e = this._ctx,
            n = Math.max(Math.round(t._radius), 1),
            o = (Math.max(Math.round(t._radiusY), 1) || n) / n;
          (this._drawnLayers[t._leaflet_id] = t),
            1 !== o && (e.save(), e.scale(1, o)),
            e.beginPath(),
            e.arc(i.x, i.y / o, n, 0, 2 * Math.PI, !1),
            1 !== o && e.restore(),
            this._fillStroke(e, t);
        }
      },
      _fillStroke: function (t, i) {
        var e = i.options;
        e.fill &&
          ((t.globalAlpha = e.fillOpacity),
          (t.fillStyle = e.fillColor || e.color),
          t.fill(e.fillRule || "evenodd")),
          e.stroke &&
            0 !== e.weight &&
            (t.setLineDash &&
              t.setLineDash((i.options && i.options._dashArray) || []),
            (t.globalAlpha = e.opacity),
            (t.lineWidth = e.weight),
            (t.strokeStyle = e.color),
            (t.lineCap = e.lineCap),
            (t.lineJoin = e.lineJoin),
            t.stroke());
      },
      _onClick: function (t) {
        for (
          var i,
            e,
            n = this._map.mouseEventToLayerPoint(t),
            o = this._drawFirst;
          o;
          o = o.next
        )
          (i = o.layer).options.interactive &&
            i._containsPoint(n) &&
            !this._map._draggableMoved(i) &&
            (e = i);
        e && (wt(t), this._fireEvent([e], t));
      },
      _onMouseMove: function (t) {
        if (
          this._map &&
          !this._map.dragging.moving() &&
          !this._map._animatingZoom
        ) {
          var i = this._map.mouseEventToLayerPoint(t);
          this._handleMouseHover(t, i);
        }
      },
      _handleMouseOut: function (t) {
        var i = this._hoveredLayer;
        i &&
          (X(this._container, "leaflet-interactive"),
          this._fireEvent([i], t, "mouseout"),
          (this._hoveredLayer = null));
      },
      _handleMouseHover: function (t, i) {
        for (var e, n, o = this._drawFirst; o; o = o.next)
          (e = o.layer).options.interactive && e._containsPoint(i) && (n = e);
        n !== this._hoveredLayer &&
          (this._handleMouseOut(t),
          n &&
            (Y(this._container, "leaflet-interactive"),
            this._fireEvent([n], t, "mouseover"),
            (this._hoveredLayer = n))),
          this._hoveredLayer && this._fireEvent([this._hoveredLayer], t);
      },
      _fireEvent: function (t, i, e) {
        this._map._fireDOMEvent(i, e || i.type, t);
      },
      _bringToFront: function (t) {
        var i = t._order,
          e = i.next,
          n = i.prev;
        e &&
          ((e.prev = n),
          n ? (n.next = e) : e && (this._drawFirst = e),
          (i.prev = this._drawLast),
          (this._drawLast.next = i),
          (i.next = null),
          (this._drawLast = i),
          this._requestRedraw(t));
      },
      _bringToBack: function (t) {
        var i = t._order,
          e = i.next,
          n = i.prev;
        n &&
          ((n.next = e),
          e ? (e.prev = n) : n && (this._drawLast = n),
          (i.prev = null),
          (i.next = this._drawFirst),
          (this._drawFirst.prev = i),
          (this._drawFirst = i),
          this._requestRedraw(t));
      },
    }),
    ln = (function () {
      try {
        return (
          document.namespaces.add("lvml", "urn:schemas-microsoft-com:vml"),
          function (t) {
            return document.createElement("<lvml:" + t + ' class="lvml">');
          }
        );
      } catch (t) {
        return function (t) {
          return document.createElement(
            "<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">'
          );
        };
      }
    })(),
    cn = {
      _initContainer: function () {
        this._container = F("div", "leaflet-vml-container");
      },
      _update: function () {
        this._map._animatingZoom ||
          (hn.prototype._update.call(this), this.fire("update"));
      },
      _initPath: function (t) {
        var i = (t._container = ln("shape"));
        Y(i, "leaflet-vml-shape " + (this.options.className || "")),
          (i.coordsize = "1 1"),
          (t._path = ln("path")),
          i.appendChild(t._path),
          this._updateStyle(t),
          (this._layers[n(t)] = t);
      },
      _addPath: function (t) {
        var i = t._container;
        this._container.appendChild(i),
          t.options.interactive && t.addInteractiveTarget(i);
      },
      _removePath: function (t) {
        var i = t._container;
        q(i), t.removeInteractiveTarget(i), delete this._layers[n(t)];
      },
      _updateStyle: function (t) {
        var i = t._stroke,
          e = t._fill,
          n = t.options,
          o = t._container;
        (o.stroked = !!n.stroke),
          (o.filled = !!n.fill),
          n.stroke
            ? (i || (i = t._stroke = ln("stroke")),
              o.appendChild(i),
              (i.weight = n.weight + "px"),
              (i.color = n.color),
              (i.opacity = n.opacity),
              n.dashArray
                ? (i.dashStyle = Yt(n.dashArray)
                    ? n.dashArray.join(" ")
                    : n.dashArray.replace(/( *, *)/g, " "))
                : (i.dashStyle = ""),
              (i.endcap = n.lineCap.replace("butt", "flat")),
              (i.joinstyle = n.lineJoin))
            : i && (o.removeChild(i), (t._stroke = null)),
          n.fill
            ? (e || (e = t._fill = ln("fill")),
              o.appendChild(e),
              (e.color = n.fillColor || n.color),
              (e.opacity = n.fillOpacity))
            : e && (o.removeChild(e), (t._fill = null));
      },
      _updateCircle: function (t) {
        var i = t._point.round(),
          e = Math.round(t._radius),
          n = Math.round(t._radiusY || e);
        this._setPath(
          t,
          t._empty()
            ? "M0 0"
            : "AL " + i.x + "," + i.y + " " + e + "," + n + " 0,23592600"
        );
      },
      _setPath: function (t, i) {
        t._path.v = i;
      },
      _bringToFront: function (t) {
        V(t._container);
      },
      _bringToBack: function (t) {
        G(t._container);
      },
    },
    _n = Fi ? ln : Z,
    dn = hn.extend({
      getEvents: function () {
        var t = hn.prototype.getEvents.call(this);
        return (t.zoomstart = this._onZoomStart), t;
      },
      _initContainer: function () {
        (this._container = _n("svg")),
          this._container.setAttribute("pointer-events", "none"),
          (this._rootGroup = _n("g")),
          this._container.appendChild(this._rootGroup);
      },
      _destroyContainer: function () {
        q(this._container),
          ct(this._container),
          delete this._container,
          delete this._rootGroup,
          delete this._svgSize;
      },
      _onZoomStart: function () {
        this._update();
      },
      _update: function () {
        if (!this._map._animatingZoom || !this._bounds) {
          hn.prototype._update.call(this);
          var t = this._bounds,
            i = t.getSize(),
            e = this._container;
          (this._svgSize && this._svgSize.equals(i)) ||
            ((this._svgSize = i),
            e.setAttribute("width", i.x),
            e.setAttribute("height", i.y)),
            et(e, t.min),
            e.setAttribute("viewBox", [t.min.x, t.min.y, i.x, i.y].join(" ")),
            this.fire("update");
        }
      },
      _initPath: function (t) {
        var i = (t._path = _n("path"));
        t.options.className && Y(i, t.options.className),
          t.options.interactive && Y(i, "leaflet-interactive"),
          this._updateStyle(t),
          (this._layers[n(t)] = t);
      },
      _addPath: function (t) {
        this._rootGroup || this._initContainer(),
          this._rootGroup.appendChild(t._path),
          t.addInteractiveTarget(t._path);
      },
      _removePath: function (t) {
        q(t._path),
          t.removeInteractiveTarget(t._path),
          delete this._layers[n(t)];
      },
      _updatePath: function (t) {
        t._project(), t._update();
      },
      _updateStyle: function (t) {
        var i = t._path,
          e = t.options;
        i &&
          (e.stroke
            ? (i.setAttribute("stroke", e.color),
              i.setAttribute("stroke-opacity", e.opacity),
              i.setAttribute("stroke-width", e.weight),
              i.setAttribute("stroke-linecap", e.lineCap),
              i.setAttribute("stroke-linejoin", e.lineJoin),
              e.dashArray
                ? i.setAttribute("stroke-dasharray", e.dashArray)
                : i.removeAttribute("stroke-dasharray"),
              e.dashOffset
                ? i.setAttribute("stroke-dashoffset", e.dashOffset)
                : i.removeAttribute("stroke-dashoffset"))
            : i.setAttribute("stroke", "none"),
          e.fill
            ? (i.setAttribute("fill", e.fillColor || e.color),
              i.setAttribute("fill-opacity", e.fillOpacity),
              i.setAttribute("fill-rule", e.fillRule || "evenodd"))
            : i.setAttribute("fill", "none"));
      },
      _updatePoly: function (t, i) {
        this._setPath(t, E(t._parts, i));
      },
      _updateCircle: function (t) {
        var i = t._point,
          e = Math.max(Math.round(t._radius), 1),
          n =
            "a" +
            e +
            "," +
            (Math.max(Math.round(t._radiusY), 1) || e) +
            " 0 1,0 ",
          o = t._empty()
            ? "M0 0"
            : "M" +
              (i.x - e) +
              "," +
              i.y +
              n +
              2 * e +
              ",0 " +
              n +
              2 * -e +
              ",0 ";
        this._setPath(t, o);
      },
      _setPath: function (t, i) {
        t._path.setAttribute("d", i);
      },
      _bringToFront: function (t) {
        V(t._path);
      },
      _bringToBack: function (t) {
        G(t._path);
      },
    });
  Fi && dn.include(cn),
    me.include({
      getRenderer: function (t) {
        var i =
          t.options.renderer ||
          this._getPaneRenderer(t.options.pane) ||
          this.options.renderer ||
          this._renderer;
        return (
          i || (i = this._renderer = this._createRenderer()),
          this.hasLayer(i) || this.addLayer(i),
          i
        );
      },
      _getPaneRenderer: function (t) {
        if ("overlayPane" === t || void 0 === t) return !1;
        var i = this._paneRenderers[t];
        return (
          void 0 === i &&
            ((i = this._createRenderer({ pane: t })),
            (this._paneRenderers[t] = i)),
          i
        );
      },
      _createRenderer: function (t) {
        return (this.options.preferCanvas && Ft(t)) || qt(t);
      },
    });
  var pn = Ke.extend({
    initialize: function (t, i) {
      Ke.prototype.initialize.call(this, this._boundsToLatLngs(t), i);
    },
    setBounds: function (t) {
      return this.setLatLngs(this._boundsToLatLngs(t));
    },
    _boundsToLatLngs: function (t) {
      return [
        (t = T(t)).getSouthWest(),
        t.getNorthWest(),
        t.getNorthEast(),
        t.getSouthEast(),
      ];
    },
  });
  (dn.create = _n),
    (dn.pointsToPath = E),
    (Ye.geometryToLayer = Bt),
    (Ye.coordsToLatLng = It),
    (Ye.coordsToLatLngs = Ot),
    (Ye.latLngToCoords = Rt),
    (Ye.latLngsToCoords = Dt),
    (Ye.getFeature = Nt),
    (Ye.asFeature = jt),
    me.mergeOptions({ boxZoom: !0 });
  var mn = Le.extend({
    initialize: function (t) {
      (this._map = t),
        (this._container = t._container),
        (this._pane = t._panes.overlayPane),
        (this._resetStateTimeout = 0),
        t.on("unload", this._destroy, this);
    },
    addHooks: function () {
      lt(this._container, "mousedown", this._onMouseDown, this);
    },
    removeHooks: function () {
      ct(this._container, "mousedown", this._onMouseDown, this);
    },
    moved: function () {
      return this._moved;
    },
    _destroy: function () {
      q(this._pane), delete this._pane;
    },
    _resetState: function () {
      (this._resetStateTimeout = 0), (this._moved = !1);
    },
    _clearDeferredResetState: function () {
      0 !== this._resetStateTimeout &&
        (clearTimeout(this._resetStateTimeout), (this._resetStateTimeout = 0));
    },
    _onMouseDown: function (t) {
      if (!t.shiftKey || (1 !== t.which && 1 !== t.button)) return !1;
      this._clearDeferredResetState(),
        this._resetState(),
        ai(),
        ot(),
        (this._startPoint = this._map.mouseEventToContainerPoint(t)),
        lt(
          document,
          {
            contextmenu: vt,
            mousemove: this._onMouseMove,
            mouseup: this._onMouseUp,
            keydown: this._onKeyDown,
          },
          this
        );
    },
    _onMouseMove: function (t) {
      this._moved ||
        ((this._moved = !0),
        (this._box = F("div", "leaflet-zoom-box", this._container)),
        Y(this._container, "leaflet-crosshair"),
        this._map.fire("boxzoomstart")),
        (this._point = this._map.mouseEventToContainerPoint(t));
      var i = new w(this._point, this._startPoint),
        e = i.getSize();
      et(this._box, i.min),
        (this._box.style.width = e.x + "px"),
        (this._box.style.height = e.y + "px");
    },
    _finish: function () {
      this._moved && (q(this._box), X(this._container, "leaflet-crosshair")),
        hi(),
        st(),
        ct(
          document,
          {
            contextmenu: vt,
            mousemove: this._onMouseMove,
            mouseup: this._onMouseUp,
            keydown: this._onKeyDown,
          },
          this
        );
    },
    _onMouseUp: function (t) {
      if ((1 === t.which || 1 === t.button) && (this._finish(), this._moved)) {
        this._clearDeferredResetState(),
          (this._resetStateTimeout = setTimeout(e(this._resetState, this), 0));
        var i = new b(
          this._map.containerPointToLatLng(this._startPoint),
          this._map.containerPointToLatLng(this._point)
        );
        this._map.fitBounds(i).fire("boxzoomend", { boxZoomBounds: i });
      }
    },
    _onKeyDown: function (t) {
      27 === t.keyCode && this._finish();
    },
  });
  me.addInitHook("addHandler", "boxZoom", mn),
    me.mergeOptions({ doubleClickZoom: !0 });
  var fn = Le.extend({
    addHooks: function () {
      this._map.on("dblclick", this._onDoubleClick, this);
    },
    removeHooks: function () {
      this._map.off("dblclick", this._onDoubleClick, this);
    },
    _onDoubleClick: function (t) {
      var i = this._map,
        e = i.getZoom(),
        n = i.options.zoomDelta,
        o = t.originalEvent.shiftKey ? e - n : e + n;
      "center" === i.options.doubleClickZoom
        ? i.setZoom(o)
        : i.setZoomAround(t.containerPoint, o);
    },
  });
  me.addInitHook("addHandler", "doubleClickZoom", fn),
    me.mergeOptions({
      dragging: !0,
      inertia: !vi,
      inertiaDeceleration: 3400,
      inertiaMaxSpeed: 1 / 0,
      easeLinearity: 0.2,
      worldCopyJump: !1,
      maxBoundsViscosity: 0,
    });
  var gn = Le.extend({
    addHooks: function () {
      if (!this._draggable) {
        var t = this._map;
        (this._draggable = new Ce(t._mapPane, t._container)),
          this._draggable.on(
            {
              dragstart: this._onDragStart,
              drag: this._onDrag,
              dragend: this._onDragEnd,
            },
            this
          ),
          this._draggable.on("predrag", this._onPreDragLimit, this),
          t.options.worldCopyJump &&
            (this._draggable.on("predrag", this._onPreDragWrap, this),
            t.on("zoomend", this._onZoomEnd, this),
            t.whenReady(this._onZoomEnd, this));
      }
      Y(this._map._container, "leaflet-grab leaflet-touch-drag"),
        this._draggable.enable(),
        (this._positions = []),
        (this._times = []);
    },
    removeHooks: function () {
      X(this._map._container, "leaflet-grab"),
        X(this._map._container, "leaflet-touch-drag"),
        this._draggable.disable();
    },
    moved: function () {
      return this._draggable && this._draggable._moved;
    },
    moving: function () {
      return this._draggable && this._draggable._moving;
    },
    _onDragStart: function () {
      var t = this._map;
      if (
        (t._stop(),
        this._map.options.maxBounds && this._map.options.maxBoundsViscosity)
      ) {
        var i = T(this._map.options.maxBounds);
        (this._offsetLimit = P(
          this._map.latLngToContainerPoint(i.getNorthWest()).multiplyBy(-1),
          this._map
            .latLngToContainerPoint(i.getSouthEast())
            .multiplyBy(-1)
            .add(this._map.getSize())
        )),
          (this._viscosity = Math.min(
            1,
            Math.max(0, this._map.options.maxBoundsViscosity)
          ));
      } else this._offsetLimit = null;
      t.fire("movestart").fire("dragstart"),
        t.options.inertia && ((this._positions = []), (this._times = []));
    },
    _onDrag: function (t) {
      if (this._map.options.inertia) {
        var i = (this._lastTime = +new Date()),
          e = (this._lastPos =
            this._draggable._absPos || this._draggable._newPos);
        this._positions.push(e), this._times.push(i), this._prunePositions(i);
      }
      this._map.fire("move", t).fire("drag", t);
    },
    _prunePositions: function (t) {
      for (; this._positions.length > 1 && t - this._times[0] > 50; )
        this._positions.shift(), this._times.shift();
    },
    _onZoomEnd: function () {
      var t = this._map.getSize().divideBy(2),
        i = this._map.latLngToLayerPoint([0, 0]);
      (this._initialWorldOffset = i.subtract(t).x),
        (this._worldWidth = this._map.getPixelWorldBounds().getSize().x);
    },
    _viscousLimit: function (t, i) {
      return t - (t - i) * this._viscosity;
    },
    _onPreDragLimit: function () {
      if (this._viscosity && this._offsetLimit) {
        var t = this._draggable._newPos.subtract(this._draggable._startPos),
          i = this._offsetLimit;
        t.x < i.min.x && (t.x = this._viscousLimit(t.x, i.min.x)),
          t.y < i.min.y && (t.y = this._viscousLimit(t.y, i.min.y)),
          t.x > i.max.x && (t.x = this._viscousLimit(t.x, i.max.x)),
          t.y > i.max.y && (t.y = this._viscousLimit(t.y, i.max.y)),
          (this._draggable._newPos = this._draggable._startPos.add(t));
      }
    },
    _onPreDragWrap: function () {
      var t = this._worldWidth,
        i = Math.round(t / 2),
        e = this._initialWorldOffset,
        n = this._draggable._newPos.x,
        o = ((n - i + e) % t) + i - e,
        s = ((n + i + e) % t) - i - e,
        r = Math.abs(o + e) < Math.abs(s + e) ? o : s;
      (this._draggable._absPos = this._draggable._newPos.clone()),
        (this._draggable._newPos.x = r);
    },
    _onDragEnd: function (t) {
      var i = this._map,
        e = i.options,
        n = !e.inertia || this._times.length < 2;
      if ((i.fire("dragend", t), n)) i.fire("moveend");
      else {
        this._prunePositions(+new Date());
        var o = this._lastPos.subtract(this._positions[0]),
          s = (this._lastTime - this._times[0]) / 1e3,
          r = e.easeLinearity,
          a = o.multiplyBy(r / s),
          h = a.distanceTo([0, 0]),
          u = Math.min(e.inertiaMaxSpeed, h),
          l = a.multiplyBy(u / h),
          c = u / (e.inertiaDeceleration * r),
          _ = l.multiplyBy(-c / 2).round();
        _.x || _.y
          ? ((_ = i._limitOffset(_, i.options.maxBounds)),
            f(function () {
              i.panBy(_, {
                duration: c,
                easeLinearity: r,
                noMoveStart: !0,
                animate: !0,
              });
            }))
          : i.fire("moveend");
      }
    },
  });
  me.addInitHook("addHandler", "dragging", gn),
    me.mergeOptions({ keyboard: !0, keyboardPanDelta: 80 });
  var vn = Le.extend({
    keyCodes: {
      left: [37],
      right: [39],
      down: [40],
      up: [38],
      zoomIn: [187, 107, 61, 171],
      zoomOut: [189, 109, 54, 173],
    },
    initialize: function (t) {
      (this._map = t),
        this._setPanDelta(t.options.keyboardPanDelta),
        this._setZoomDelta(t.options.zoomDelta);
    },
    addHooks: function () {
      var t = this._map._container;
      t.tabIndex <= 0 && (t.tabIndex = "0"),
        lt(
          t,
          {
            focus: this._onFocus,
            blur: this._onBlur,
            mousedown: this._onMouseDown,
          },
          this
        ),
        this._map.on({ focus: this._addHooks, blur: this._removeHooks }, this);
    },
    removeHooks: function () {
      this._removeHooks(),
        ct(
          this._map._container,
          {
            focus: this._onFocus,
            blur: this._onBlur,
            mousedown: this._onMouseDown,
          },
          this
        ),
        this._map.off({ focus: this._addHooks, blur: this._removeHooks }, this);
    },
    _onMouseDown: function () {
      if (!this._focused) {
        var t = document.body,
          i = document.documentElement,
          e = t.scrollTop || i.scrollTop,
          n = t.scrollLeft || i.scrollLeft;
        this._map._container.focus(), window.scrollTo(n, e);
      }
    },
    _onFocus: function () {
      (this._focused = !0), this._map.fire("focus");
    },
    _onBlur: function () {
      (this._focused = !1), this._map.fire("blur");
    },
    _setPanDelta: function (t) {
      var i,
        e,
        n = (this._panKeys = {}),
        o = this.keyCodes;
      for (i = 0, e = o.left.length; i < e; i++) n[o.left[i]] = [-1 * t, 0];
      for (i = 0, e = o.right.length; i < e; i++) n[o.right[i]] = [t, 0];
      for (i = 0, e = o.down.length; i < e; i++) n[o.down[i]] = [0, t];
      for (i = 0, e = o.up.length; i < e; i++) n[o.up[i]] = [0, -1 * t];
    },
    _setZoomDelta: function (t) {
      var i,
        e,
        n = (this._zoomKeys = {}),
        o = this.keyCodes;
      for (i = 0, e = o.zoomIn.length; i < e; i++) n[o.zoomIn[i]] = t;
      for (i = 0, e = o.zoomOut.length; i < e; i++) n[o.zoomOut[i]] = -t;
    },
    _addHooks: function () {
      lt(document, "keydown", this._onKeyDown, this);
    },
    _removeHooks: function () {
      ct(document, "keydown", this._onKeyDown, this);
    },
    _onKeyDown: function (t) {
      if (!(t.altKey || t.ctrlKey || t.metaKey)) {
        var i,
          e = t.keyCode,
          n = this._map;
        if (e in this._panKeys)
          (n._panAnim && n._panAnim._inProgress) ||
            ((i = this._panKeys[e]),
            t.shiftKey && (i = x(i).multiplyBy(3)),
            n.panBy(i),
            n.options.maxBounds && n.panInsideBounds(n.options.maxBounds));
        else if (e in this._zoomKeys)
          n.setZoom(n.getZoom() + (t.shiftKey ? 3 : 1) * this._zoomKeys[e]);
        else {
          if (27 !== e || !n._popup || !n._popup.options.closeOnEscapeKey)
            return;
          n.closePopup();
        }
        vt(t);
      }
    },
  });
  me.addInitHook("addHandler", "keyboard", vn),
    me.mergeOptions({
      scrollWheelZoom: !0,
      wheelDebounceTime: 40,
      wheelPxPerZoomLevel: 60,
    });
  var yn = Le.extend({
    addHooks: function () {
      lt(this._map._container, "mousewheel", this._onWheelScroll, this),
        (this._delta = 0);
    },
    removeHooks: function () {
      ct(this._map._container, "mousewheel", this._onWheelScroll, this);
    },
    _onWheelScroll: function (t) {
      var i = xt(t),
        n = this._map.options.wheelDebounceTime;
      (this._delta += i),
        (this._lastMousePos = this._map.mouseEventToContainerPoint(t)),
        this._startTime || (this._startTime = +new Date());
      var o = Math.max(n - (+new Date() - this._startTime), 0);
      clearTimeout(this._timer),
        (this._timer = setTimeout(e(this._performZoom, this), o)),
        vt(t);
    },
    _performZoom: function () {
      var t = this._map,
        i = t.getZoom(),
        e = this._map.options.zoomSnap || 0;
      t._stop();
      var n = this._delta / (4 * this._map.options.wheelPxPerZoomLevel),
        o = (4 * Math.log(2 / (1 + Math.exp(-Math.abs(n))))) / Math.LN2,
        s = e ? Math.ceil(o / e) * e : o,
        r = t._limitZoom(i + (this._delta > 0 ? s : -s)) - i;
      (this._delta = 0),
        (this._startTime = null),
        r &&
          ("center" === t.options.scrollWheelZoom
            ? t.setZoom(i + r)
            : t.setZoomAround(this._lastMousePos, i + r));
    },
  });
  me.addInitHook("addHandler", "scrollWheelZoom", yn),
    me.mergeOptions({ tap: !0, tapTolerance: 15 });
  var xn = Le.extend({
    addHooks: function () {
      lt(this._map._container, "touchstart", this._onDown, this);
    },
    removeHooks: function () {
      ct(this._map._container, "touchstart", this._onDown, this);
    },
    _onDown: function (t) {
      if (t.touches) {
        if ((gt(t), (this._fireClick = !0), t.touches.length > 1))
          return (this._fireClick = !1), void clearTimeout(this._holdTimeout);
        var i = t.touches[0],
          n = i.target;
        (this._startPos = this._newPos = new y(i.clientX, i.clientY)),
          n.tagName &&
            "a" === n.tagName.toLowerCase() &&
            Y(n, "leaflet-active"),
          (this._holdTimeout = setTimeout(
            e(function () {
              this._isTapValid() &&
                ((this._fireClick = !1),
                this._onUp(),
                this._simulateEvent("contextmenu", i));
            }, this),
            1e3
          )),
          this._simulateEvent("mousedown", i),
          lt(document, { touchmove: this._onMove, touchend: this._onUp }, this);
      }
    },
    _onUp: function (t) {
      if (
        (clearTimeout(this._holdTimeout),
        ct(document, { touchmove: this._onMove, touchend: this._onUp }, this),
        this._fireClick && t && t.changedTouches)
      ) {
        var i = t.changedTouches[0],
          e = i.target;
        e &&
          e.tagName &&
          "a" === e.tagName.toLowerCase() &&
          X(e, "leaflet-active"),
          this._simulateEvent("mouseup", i),
          this._isTapValid() && this._simulateEvent("click", i);
      }
    },
    _isTapValid: function () {
      return (
        this._newPos.distanceTo(this._startPos) <=
        this._map.options.tapTolerance
      );
    },
    _onMove: function (t) {
      var i = t.touches[0];
      (this._newPos = new y(i.clientX, i.clientY)),
        this._simulateEvent("mousemove", i);
    },
    _simulateEvent: function (t, i) {
      var e = document.createEvent("MouseEvents");
      (e._simulated = !0),
        (i.target._simulatedClick = !0),
        e.initMouseEvent(
          t,
          !0,
          !0,
          window,
          1,
          i.screenX,
          i.screenY,
          i.clientX,
          i.clientY,
          !1,
          !1,
          !1,
          !1,
          0,
          null
        ),
        i.target.dispatchEvent(e);
    },
  });
  Ri && !Oi && me.addInitHook("addHandler", "tap", xn),
    me.mergeOptions({ touchZoom: Ri && !vi, bounceAtZoomLimits: !0 });
  var wn = Le.extend({
    addHooks: function () {
      Y(this._map._container, "leaflet-touch-zoom"),
        lt(this._map._container, "touchstart", this._onTouchStart, this);
    },
    removeHooks: function () {
      X(this._map._container, "leaflet-touch-zoom"),
        ct(this._map._container, "touchstart", this._onTouchStart, this);
    },
    _onTouchStart: function (t) {
      var i = this._map;
      if (
        t.touches &&
        2 === t.touches.length &&
        !i._animatingZoom &&
        !this._zooming
      ) {
        var e = i.mouseEventToContainerPoint(t.touches[0]),
          n = i.mouseEventToContainerPoint(t.touches[1]);
        (this._centerPoint = i.getSize()._divideBy(2)),
          (this._startLatLng = i.containerPointToLatLng(this._centerPoint)),
          "center" !== i.options.touchZoom &&
            (this._pinchStartLatLng = i.containerPointToLatLng(
              e.add(n)._divideBy(2)
            )),
          (this._startDist = e.distanceTo(n)),
          (this._startZoom = i.getZoom()),
          (this._moved = !1),
          (this._zooming = !0),
          i._stop(),
          lt(document, "touchmove", this._onTouchMove, this),
          lt(document, "touchend", this._onTouchEnd, this),
          gt(t);
      }
    },
    _onTouchMove: function (t) {
      if (t.touches && 2 === t.touches.length && this._zooming) {
        var i = this._map,
          n = i.mouseEventToContainerPoint(t.touches[0]),
          o = i.mouseEventToContainerPoint(t.touches[1]),
          s = n.distanceTo(o) / this._startDist;
        if (
          ((this._zoom = i.getScaleZoom(s, this._startZoom)),
          !i.options.bounceAtZoomLimits &&
            ((this._zoom < i.getMinZoom() && s < 1) ||
              (this._zoom > i.getMaxZoom() && s > 1)) &&
            (this._zoom = i._limitZoom(this._zoom)),
          "center" === i.options.touchZoom)
        ) {
          if (((this._center = this._startLatLng), 1 === s)) return;
        } else {
          var r = n._add(o)._divideBy(2)._subtract(this._centerPoint);
          if (1 === s && 0 === r.x && 0 === r.y) return;
          this._center = i.unproject(
            i.project(this._pinchStartLatLng, this._zoom).subtract(r),
            this._zoom
          );
        }
        this._moved || (i._moveStart(!0, !1), (this._moved = !0)),
          g(this._animRequest);
        var a = e(i._move, i, this._center, this._zoom, {
          pinch: !0,
          round: !1,
        });
        (this._animRequest = f(a, this, !0)), gt(t);
      }
    },
    _onTouchEnd: function () {
      this._moved && this._zooming
        ? ((this._zooming = !1),
          g(this._animRequest),
          ct(document, "touchmove", this._onTouchMove),
          ct(document, "touchend", this._onTouchEnd),
          this._map.options.zoomAnimation
            ? this._map._animateZoom(
                this._center,
                this._map._limitZoom(this._zoom),
                !0,
                this._map.options.zoomSnap
              )
            : this._map._resetView(
                this._center,
                this._map._limitZoom(this._zoom)
              ))
        : (this._zooming = !1);
    },
  });
  me.addInitHook("addHandler", "touchZoom", wn),
    (me.BoxZoom = mn),
    (me.DoubleClickZoom = fn),
    (me.Drag = gn),
    (me.Keyboard = vn),
    (me.ScrollWheelZoom = yn),
    (me.Tap = xn),
    (me.TouchZoom = wn),
    (Object.freeze = Ut),
    (t.version = "1.3.4+HEAD.0e566b2"),
    (t.Control = fe),
    (t.control = ge),
    (t.Browser = qi),
    (t.Evented = ei),
    (t.Mixin = be),
    (t.Util = ti),
    (t.Class = v),
    (t.Handler = Le),
    (t.extend = i),
    (t.bind = e),
    (t.stamp = n),
    (t.setOptions = l),
    (t.DomEvent = de),
    (t.DomUtil = ue),
    (t.PosAnimation = pe),
    (t.Draggable = Ce),
    (t.LineUtil = Se),
    (t.PolyUtil = Ze),
    (t.Point = y),
    (t.point = x),
    (t.Bounds = w),
    (t.bounds = P),
    (t.Transformation = C),
    (t.transformation = S),
    (t.Projection = Ae),
    (t.LatLng = z),
    (t.latLng = M),
    (t.LatLngBounds = b),
    (t.latLngBounds = T),
    (t.CRS = oi),
    (t.GeoJSON = Ye),
    (t.geoJSON = Wt),
    (t.geoJson = Je),
    (t.Layer = Re),
    (t.LayerGroup = De),
    (t.layerGroup = function (t, i) {
      return new De(t, i);
    }),
    (t.FeatureGroup = Ne),
    (t.featureGroup = function (t) {
      return new Ne(t);
    }),
    (t.ImageOverlay = $e),
    (t.imageOverlay = function (t, i, e) {
      return new $e(t, i, e);
    }),
    (t.VideoOverlay = Qe),
    (t.videoOverlay = function (t, i, e) {
      return new Qe(t, i, e);
    }),
    (t.DivOverlay = tn),
    (t.Popup = en),
    (t.popup = function (t, i) {
      return new en(t, i);
    }),
    (t.Tooltip = nn),
    (t.tooltip = function (t, i) {
      return new nn(t, i);
    }),
    (t.Icon = je),
    (t.icon = function (t) {
      return new je(t);
    }),
    (t.DivIcon = on),
    (t.divIcon = function (t) {
      return new on(t);
    }),
    (t.Marker = Fe),
    (t.marker = function (t, i) {
      return new Fe(t, i);
    }),
    (t.TileLayer = rn),
    (t.tileLayer = Ht),
    (t.GridLayer = sn),
    (t.gridLayer = function (t) {
      return new sn(t);
    }),
    (t.SVG = dn),
    (t.svg = qt),
    (t.Renderer = hn),
    (t.Canvas = un),
    (t.canvas = Ft),
    (t.Path = qe),
    (t.CircleMarker = Ue),
    (t.circleMarker = function (t, i) {
      return new Ue(t, i);
    }),
    (t.Circle = Ve),
    (t.circle = function (t, i, e) {
      return new Ve(t, i, e);
    }),
    (t.Polyline = Ge),
    (t.polyline = function (t, i) {
      return new Ge(t, i);
    }),
    (t.Polygon = Ke),
    (t.polygon = function (t, i) {
      return new Ke(t, i);
    }),
    (t.Rectangle = pn),
    (t.rectangle = function (t, i) {
      return new pn(t, i);
    }),
    (t.Map = me),
    (t.map = function (t, i) {
      return new me(t, i);
    });
  var Ln = window.L;
  (t.noConflict = function () {
    return (window.L = Ln), this;
  }),
    (window.L = t);
}),
  (L.TileLayer.Grayscale = L.TileLayer.extend({
    options: {
      quotaRed: 21,
      quotaGreen: 71,
      quotaBlue: 8,
      quotaDividerTune: 0,
      quotaDivider: function () {
        return (
          this.quotaRed +
          this.quotaGreen +
          this.quotaBlue +
          this.quotaDividerTune
        );
      },
    },
    initialize: function (t, i) {
      ((i = i || {}).crossOrigin = !0),
        L.TileLayer.prototype.initialize.call(this, t, i),
        this.on("tileload", function (t) {
          this._makeGrayscale(t.tile);
        });
    },
    _createTile: function () {
      var t = L.TileLayer.prototype._createTile.call(this);
      return (t.crossOrigin = "Anonymous"), t;
    },
    _makeGrayscale: function (t) {
      if (!t.getAttribute("data-grayscaled")) {
        t.crossOrigin = "";
        var i = document.createElement("canvas");
        (i.width = t.width), (i.height = t.height);
        var e = i.getContext("2d");
        e.drawImage(t, 0, 0);
        for (
          var n = e.getImageData(0, 0, i.width, i.height),
            o = n.data,
            s = 0,
            r = o.length;
          s < r;
          s += 4
        )
          o[s] =
            o[s + 1] =
            o[s + 2] =
              (this.options.quotaRed * o[s] +
                this.options.quotaGreen * o[s + 1] +
                this.options.quotaBlue * o[s + 2]) /
              this.options.quotaDivider();
        e.putImageData(n, 0, 0),
          t.setAttribute("data-grayscaled", !0),
          (t.src = i.toDataURL());
      }
    },
  })),
  (L.tileLayer.grayscale = function (t, i) {
    return new L.TileLayer.Grayscale(t, i);
  });
// End leaflet map

/*! Magnific Popup - v1.1.0 - 2016-02-20
 * http://dimsemenov.com/plugins/magnific-popup/
 * Copyright (c) 2016 Dmitry Semenov; */
!(function (e) {
  "function" == typeof define && define.amd
    ? define(["jquery"], e)
    : e(
        "object" == typeof exports
          ? require("jquery")
          : window.jQuery || window.Zepto
      );
})(function (e) {
  var t,
    i,
    n,
    o,
    r,
    a,
    s = "Close",
    l = "BeforeClose",
    c = "MarkupParse",
    d = "Open",
    u = "Change",
    p = "mfp",
    f = "." + p,
    m = "mfp-ready",
    g = "mfp-removing",
    v = "mfp-prevent-close",
    h = function () {},
    y = !!window.jQuery,
    C = e(window),
    w = function (e, i) {
      t.ev.on(p + e + f, i);
    },
    b = function (t, i, n, o) {
      var r = document.createElement("div");
      return (
        (r.className = "mfp-" + t),
        n && (r.innerHTML = n),
        o ? i && i.appendChild(r) : ((r = e(r)), i && r.appendTo(i)),
        r
      );
    },
    I = function (i, n) {
      t.ev.triggerHandler(p + i, n),
        t.st.callbacks &&
          ((i = i.charAt(0).toLowerCase() + i.slice(1)),
          t.st.callbacks[i] &&
            t.st.callbacks[i].apply(t, e.isArray(n) ? n : [n]));
    },
    x = function (i) {
      return (
        (i === a && t.currTemplate.closeBtn) ||
          ((t.currTemplate.closeBtn = e(
            t.st.closeMarkup.replace("%title%", t.st.tClose)
          )),
          (a = i)),
        t.currTemplate.closeBtn
      );
    },
    k = function () {
      e.magnificPopup.instance ||
        ((t = new h()).init(), (e.magnificPopup.instance = t));
    };
  (h.prototype = {
    constructor: h,
    init: function () {
      var i = navigator.appVersion;
      (t.isLowIE = t.isIE8 = document.all && !document.addEventListener),
        (t.isAndroid = /android/gi.test(i)),
        (t.isIOS = /iphone|ipad|ipod/gi.test(i)),
        (t.supportsTransition = (function () {
          var e = document.createElement("p").style,
            t = ["ms", "O", "Moz", "Webkit"];
          if (void 0 !== e.transition) return !0;
          for (; t.length; ) if (t.pop() + "Transition" in e) return !0;
          return !1;
        })()),
        (t.probablyMobile =
          t.isAndroid ||
          t.isIOS ||
          /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(
            navigator.userAgent
          )),
        (n = e(document)),
        (t.popupsCache = {});
    },
    open: function (i) {
      var o;
      if (!1 === i.isObj) {
        (t.items = i.items.toArray()), (t.index = 0);
        var a,
          s = i.items;
        for (o = 0; o < s.length; o++)
          if (((a = s[o]).parsed && (a = a.el[0]), a === i.el[0])) {
            t.index = o;
            break;
          }
      } else
        (t.items = e.isArray(i.items) ? i.items : [i.items]),
          (t.index = i.index || 0);
      if (!t.isOpen) {
        (t.types = []),
          (r = ""),
          i.mainEl && i.mainEl.length ? (t.ev = i.mainEl.eq(0)) : (t.ev = n),
          i.key
            ? (t.popupsCache[i.key] || (t.popupsCache[i.key] = {}),
              (t.currTemplate = t.popupsCache[i.key]))
            : (t.currTemplate = {}),
          (t.st = e.extend(!0, {}, e.magnificPopup.defaults, i)),
          (t.fixedContentPos =
            "auto" === t.st.fixedContentPos
              ? !t.probablyMobile
              : t.st.fixedContentPos),
          t.st.modal &&
            ((t.st.closeOnContentClick = !1),
            (t.st.closeOnBgClick = !1),
            (t.st.showCloseBtn = !1),
            (t.st.enableEscapeKey = !1)),
          t.bgOverlay ||
            ((t.bgOverlay = b("bg").on("click" + f, function () {
              t.close();
            })),
            (t.wrap = b("wrap")
              .attr("tabindex", -1)
              .on("click" + f, function (e) {
                t._checkIfClose(e.target) && t.close();
              })),
            (t.container = b("container", t.wrap))),
          (t.contentContainer = b("content")),
          t.st.preloader &&
            (t.preloader = b("preloader", t.container, t.st.tLoading));
        var l = e.magnificPopup.modules;
        for (o = 0; o < l.length; o++) {
          var u = l[o];
          (u = u.charAt(0).toUpperCase() + u.slice(1)), t["init" + u].call(t);
        }
        I("BeforeOpen"),
          t.st.showCloseBtn &&
            (t.st.closeBtnInside
              ? (w(c, function (e, t, i, n) {
                  i.close_replaceWith = x(n.type);
                }),
                (r += " mfp-close-btn-in"))
              : t.wrap.append(x())),
          t.st.alignTop && (r += " mfp-align-top"),
          t.fixedContentPos
            ? t.wrap.css({
                overflow: t.st.overflowY,
                overflowX: "hidden",
                overflowY: t.st.overflowY,
              })
            : t.wrap.css({ top: C.scrollTop(), position: "absolute" }),
          (!1 === t.st.fixedBgPos ||
            ("auto" === t.st.fixedBgPos && !t.fixedContentPos)) &&
            t.bgOverlay.css({ height: n.height(), position: "absolute" }),
          t.st.enableEscapeKey &&
            n.on("keyup" + f, function (e) {
              27 === e.keyCode && t.close();
            }),
          C.on("resize" + f, function () {
            t.updateSize();
          }),
          t.st.closeOnContentClick || (r += " mfp-auto-cursor"),
          r && t.wrap.addClass(r);
        var p = (t.wH = C.height()),
          g = {};
        if (t.fixedContentPos && t._hasScrollBar(p)) {
          var v = t._getScrollbarSize();
          v && (g.marginRight = v);
        }
        t.fixedContentPos &&
          (t.isIE7
            ? e("body, html").css("overflow", "hidden")
            : (g.overflow = "hidden"));
        var h = t.st.mainClass;
        return (
          t.isIE7 && (h += " mfp-ie7"),
          h && t._addClassToMFP(h),
          t.updateItemHTML(),
          I("BuildControls"),
          e("html").css(g),
          t.bgOverlay.add(t.wrap).prependTo(t.st.prependTo || e(document.body)),
          (t._lastFocusedEl = document.activeElement),
          setTimeout(function () {
            t.content
              ? (t._addClassToMFP(m), t._setFocus())
              : t.bgOverlay.addClass(m),
              n.on("focusin" + f, t._onFocusIn);
          }, 16),
          (t.isOpen = !0),
          t.updateSize(p),
          I(d),
          i
        );
      }
      t.updateItemHTML();
    },
    close: function () {
      t.isOpen &&
        (I(l),
        (t.isOpen = !1),
        t.st.removalDelay && !t.isLowIE && t.supportsTransition
          ? (t._addClassToMFP(g),
            setTimeout(function () {
              t._close();
            }, t.st.removalDelay))
          : t._close());
    },
    _close: function () {
      I(s);
      var i = g + " " + m + " ";
      if (
        (t.bgOverlay.detach(),
        t.wrap.detach(),
        t.container.empty(),
        t.st.mainClass && (i += t.st.mainClass + " "),
        t._removeClassFromMFP(i),
        t.fixedContentPos)
      ) {
        var o = { marginRight: "" };
        t.isIE7 ? e("body, html").css("overflow", "") : (o.overflow = ""),
          e("html").css(o);
      }
      n.off("keyup.mfp focusin" + f),
        t.ev.off(f),
        t.wrap.attr("class", "mfp-wrap").removeAttr("style"),
        t.bgOverlay.attr("class", "mfp-bg"),
        t.container.attr("class", "mfp-container"),
        !t.st.showCloseBtn ||
          (t.st.closeBtnInside && !0 !== t.currTemplate[t.currItem.type]) ||
          (t.currTemplate.closeBtn && t.currTemplate.closeBtn.detach()),
        t.st.autoFocusLast && t._lastFocusedEl && e(t._lastFocusedEl).focus(),
        (t.currItem = null),
        (t.content = null),
        (t.currTemplate = null),
        (t.prevHeight = 0),
        I("AfterClose");
    },
    updateSize: function (e) {
      if (t.isIOS) {
        var i = document.documentElement.clientWidth / window.innerWidth,
          n = window.innerHeight * i;
        t.wrap.css("height", n), (t.wH = n);
      } else t.wH = e || C.height();
      t.fixedContentPos || t.wrap.css("height", t.wH), I("Resize");
    },
    updateItemHTML: function () {
      var i = t.items[t.index];
      t.contentContainer.detach(),
        t.content && t.content.detach(),
        i.parsed || (i = t.parseEl(t.index));
      var n = i.type;
      if (
        (I("BeforeChange", [t.currItem ? t.currItem.type : "", n]),
        (t.currItem = i),
        !t.currTemplate[n])
      ) {
        var r = !!t.st[n] && t.st[n].markup;
        I("FirstMarkupParse", r), (t.currTemplate[n] = !r || e(r));
      }
      o && o !== i.type && t.container.removeClass("mfp-" + o + "-holder");
      var a = t["get" + n.charAt(0).toUpperCase() + n.slice(1)](
        i,
        t.currTemplate[n]
      );
      t.appendContent(a, n),
        (i.preloaded = !0),
        I(u, i),
        (o = i.type),
        t.container.prepend(t.contentContainer),
        I("AfterChange");
    },
    appendContent: function (e, i) {
      (t.content = e),
        e
          ? t.st.showCloseBtn && t.st.closeBtnInside && !0 === t.currTemplate[i]
            ? t.content.find(".mfp-close").length || t.content.append(x())
            : (t.content = e)
          : (t.content = ""),
        I("BeforeAppend"),
        t.container.addClass("mfp-" + i + "-holder"),
        t.contentContainer.append(t.content);
    },
    parseEl: function (i) {
      var n,
        o = t.items[i];
      if (
        (o.tagName
          ? (o = { el: e(o) })
          : ((n = o.type), (o = { data: o, src: o.src })),
        o.el)
      ) {
        for (var r = t.types, a = 0; a < r.length; a++)
          if (o.el.hasClass("mfp-" + r[a])) {
            n = r[a];
            break;
          }
        (o.src = o.el.attr("data-mfp-src")),
          o.src || (o.src = o.el.attr("href"));
      }
      return (
        (o.type = n || t.st.type || "inline"),
        (o.index = i),
        (o.parsed = !0),
        (t.items[i] = o),
        I("ElementParse", o),
        t.items[i]
      );
    },
    addGroup: function (e, i) {
      var n = function (n) {
        (n.mfpEl = this), t._openClick(n, e, i);
      };
      i || (i = {});
      var o = "click.magnificPopup";
      (i.mainEl = e),
        i.items
          ? ((i.isObj = !0), e.off(o).on(o, n))
          : ((i.isObj = !1),
            i.delegate
              ? e.off(o).on(o, i.delegate, n)
              : ((i.items = e), e.off(o).on(o, n)));
    },
    _openClick: function (i, n, o) {
      if (
        (void 0 !== o.midClick
          ? o.midClick
          : e.magnificPopup.defaults.midClick) ||
        !(2 === i.which || i.ctrlKey || i.metaKey || i.altKey || i.shiftKey)
      ) {
        var r =
          void 0 !== o.disableOn
            ? o.disableOn
            : e.magnificPopup.defaults.disableOn;
        if (r)
          if (e.isFunction(r)) {
            if (!r.call(t)) return !0;
          } else if (C.width() < r) return !0;
        i.type && (i.preventDefault(), t.isOpen && i.stopPropagation()),
          (o.el = e(i.mfpEl)),
          o.delegate && (o.items = n.find(o.delegate)),
          t.open(o);
      }
    },
    updateStatus: function (e, n) {
      if (t.preloader) {
        i !== e && t.container.removeClass("mfp-s-" + i),
          n || "loading" !== e || (n = t.st.tLoading);
        var o = { status: e, text: n };
        I("UpdateStatus", o),
          (e = o.status),
          (n = o.text),
          t.preloader.html(n),
          t.preloader.find("a").on("click", function (e) {
            e.stopImmediatePropagation();
          }),
          t.container.addClass("mfp-s-" + e),
          (i = e);
      }
    },
    _checkIfClose: function (i) {
      if (!e(i).hasClass(v)) {
        var n = t.st.closeOnContentClick,
          o = t.st.closeOnBgClick;
        if (n && o) return !0;
        if (
          !t.content ||
          e(i).hasClass("mfp-close") ||
          (t.preloader && i === t.preloader[0])
        )
          return !0;
        if (i === t.content[0] || e.contains(t.content[0], i)) {
          if (n) return !0;
        } else if (o && e.contains(document, i)) return !0;
        return !1;
      }
    },
    _addClassToMFP: function (e) {
      t.bgOverlay.addClass(e), t.wrap.addClass(e);
    },
    _removeClassFromMFP: function (e) {
      this.bgOverlay.removeClass(e), t.wrap.removeClass(e);
    },
    _hasScrollBar: function (e) {
      return (
        (t.isIE7 ? n.height() : document.body.scrollHeight) > (e || C.height())
      );
    },
    _setFocus: function () {
      (t.st.focus ? t.content.find(t.st.focus).eq(0) : t.wrap).focus();
    },
    _onFocusIn: function (i) {
      return i.target === t.wrap[0] || e.contains(t.wrap[0], i.target)
        ? void 0
        : (t._setFocus(), !1);
    },
    _parseMarkup: function (t, i, n) {
      var o;
      n.data && (i = e.extend(n.data, i)),
        I(c, [t, i, n]),
        e.each(i, function (i, n) {
          if (void 0 === n || !1 === n) return !0;
          if ((o = i.split("_")).length > 1) {
            var r = t.find(f + "-" + o[0]);
            if (r.length > 0) {
              var a = o[1];
              "replaceWith" === a
                ? r[0] !== n[0] && r.replaceWith(n)
                : "img" === a
                ? r.is("img")
                  ? r.attr("src", n)
                  : r.replaceWith(
                      e("<img>").attr("src", n).attr("class", r.attr("class"))
                    )
                : r.attr(o[1], n);
            }
          } else t.find(f + "-" + i).html(n);
        });
    },
    _getScrollbarSize: function () {
      if (void 0 === t.scrollbarSize) {
        var e = document.createElement("div");
        (e.style.cssText =
          "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;"),
          document.body.appendChild(e),
          (t.scrollbarSize = e.offsetWidth - e.clientWidth),
          document.body.removeChild(e);
      }
      return t.scrollbarSize;
    },
  }),
    (e.magnificPopup = {
      instance: null,
      proto: h.prototype,
      modules: [],
      open: function (t, i) {
        return (
          k(),
          ((t = t ? e.extend(!0, {}, t) : {}).isObj = !0),
          (t.index = i || 0),
          this.instance.open(t)
        );
      },
      close: function () {
        return e.magnificPopup.instance && e.magnificPopup.instance.close();
      },
      registerModule: function (t, i) {
        i.options && (e.magnificPopup.defaults[t] = i.options),
          e.extend(this.proto, i.proto),
          this.modules.push(t);
      },
      defaults: {
        disableOn: 0,
        key: null,
        midClick: !1,
        mainClass: "",
        preloader: !0,
        focus: "",
        closeOnContentClick: !1,
        closeOnBgClick: !0,
        closeBtnInside: !0,
        showCloseBtn: !0,
        enableEscapeKey: !0,
        modal: !1,
        alignTop: !1,
        removalDelay: 0,
        prependTo: null,
        fixedContentPos: "auto",
        fixedBgPos: "auto",
        overflowY: "auto",
        closeMarkup:
          '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
        tClose: "Close (Esc)",
        tLoading: "Loading...",
        autoFocusLast: !0,
      },
    }),
    (e.fn.magnificPopup = function (i) {
      k();
      var n = e(this);
      if ("string" == typeof i)
        if ("open" === i) {
          var o,
            r = y ? n.data("magnificPopup") : n[0].magnificPopup,
            a = parseInt(arguments[1], 10) || 0;
          r.items
            ? (o = r.items[a])
            : ((o = n), r.delegate && (o = o.find(r.delegate)), (o = o.eq(a))),
            t._openClick({ mfpEl: o }, n, r);
        } else
          t.isOpen && t[i].apply(t, Array.prototype.slice.call(arguments, 1));
      else
        (i = e.extend(!0, {}, i)),
          y ? n.data("magnificPopup", i) : (n[0].magnificPopup = i),
          t.addGroup(n, i);
      return n;
    });
  var T,
    _,
    P,
    S = "inline",
    E = function () {
      P && (_.after(P.addClass(T)).detach(), (P = null));
    };
  e.magnificPopup.registerModule(S, {
    options: {
      hiddenClass: "hide",
      markup: "",
      tNotFound: "Content not found",
    },
    proto: {
      initInline: function () {
        t.types.push(S),
          w(s + "." + S, function () {
            E();
          });
      },
      getInline: function (i, n) {
        if ((E(), i.src)) {
          var o = t.st.inline,
            r = e(i.src);
          if (r.length) {
            var a = r[0].parentNode;
            a &&
              a.tagName &&
              (_ || ((T = o.hiddenClass), (_ = b(T)), (T = "mfp-" + T)),
              (P = r.after(_).detach().removeClass(T))),
              t.updateStatus("ready");
          } else t.updateStatus("error", o.tNotFound), (r = e("<div>"));
          return (i.inlineElement = r), r;
        }
        return t.updateStatus("ready"), t._parseMarkup(n, {}, i), n;
      },
    },
  });
  var z,
    O = "ajax",
    M = function () {
      z && e(document.body).removeClass(z);
    },
    B = function () {
      M(), t.req && t.req.abort();
    };
  e.magnificPopup.registerModule(O, {
    options: {
      settings: null,
      cursor: "mfp-ajax-cur",
      tError: '<a href="%url%">The content</a> could not be loaded.',
    },
    proto: {
      initAjax: function () {
        t.types.push(O),
          (z = t.st.ajax.cursor),
          w(s + "." + O, B),
          w("BeforeChange." + O, B);
      },
      getAjax: function (i) {
        z && e(document.body).addClass(z), t.updateStatus("loading");
        var n = e.extend(
          {
            url: i.src,
            success: function (n, o, r) {
              var a = { data: n, xhr: r };
              I("ParseAjax", a),
                t.appendContent(e(a.data), O),
                (i.finished = !0),
                M(),
                t._setFocus(),
                setTimeout(function () {
                  t.wrap.addClass(m);
                }, 16),
                t.updateStatus("ready"),
                I("AjaxContentAdded");
            },
            error: function () {
              M(),
                (i.finished = i.loadError = !0),
                t.updateStatus(
                  "error",
                  t.st.ajax.tError.replace("%url%", i.src)
                );
            },
          },
          t.st.ajax.settings
        );
        return (t.req = e.ajax(n)), "";
      },
    },
  });
  var L,
    H = function (i) {
      if (i.data && void 0 !== i.data.title) return i.data.title;
      var n = t.st.image.titleSrc;
      if (n) {
        if (e.isFunction(n)) return n.call(t, i);
        if (i.el) return i.el.attr(n) || "";
      }
      return "";
    };
  e.magnificPopup.registerModule("image", {
    options: {
      markup:
        '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
      cursor: "mfp-zoom-out-cur",
      titleSrc: "title",
      verticalFit: !0,
      tError: '<a href="%url%">The image</a> could not be loaded.',
    },
    proto: {
      initImage: function () {
        var i = t.st.image,
          n = ".image";
        t.types.push("image"),
          w(d + n, function () {
            "image" === t.currItem.type &&
              i.cursor &&
              e(document.body).addClass(i.cursor);
          }),
          w(s + n, function () {
            i.cursor && e(document.body).removeClass(i.cursor),
              C.off("resize" + f);
          }),
          w("Resize" + n, t.resizeImage),
          t.isLowIE && w("AfterChange", t.resizeImage);
      },
      resizeImage: function () {
        var e = t.currItem;
        if (e && e.img && t.st.image.verticalFit) {
          var i = 0;
          t.isLowIE &&
            (i =
              parseInt(e.img.css("padding-top"), 10) +
              parseInt(e.img.css("padding-bottom"), 10)),
            e.img.css("max-height", t.wH - i);
        }
      },
      _onImageHasSize: function (e) {
        e.img &&
          ((e.hasSize = !0),
          L && clearInterval(L),
          (e.isCheckingImgSize = !1),
          I("ImageHasSize", e),
          e.imgHidden &&
            (t.content && t.content.removeClass("mfp-loading"),
            (e.imgHidden = !1)));
      },
      findImageSize: function (e) {
        var i = 0,
          n = e.img[0],
          o = function (r) {
            L && clearInterval(L),
              (L = setInterval(function () {
                return n.naturalWidth > 0
                  ? void t._onImageHasSize(e)
                  : (i > 200 && clearInterval(L),
                    void (3 === ++i
                      ? o(10)
                      : 40 === i
                      ? o(50)
                      : 100 === i && o(500)));
              }, r));
          };
        o(1);
      },
      getImage: function (i, n) {
        var o = 0,
          r = function () {
            i &&
              (i.img[0].complete
                ? (i.img.off(".mfploader"),
                  i === t.currItem &&
                    (t._onImageHasSize(i), t.updateStatus("ready")),
                  (i.hasSize = !0),
                  (i.loaded = !0),
                  I("ImageLoadComplete"))
                : 200 > ++o
                ? setTimeout(r, 100)
                : a());
          },
          a = function () {
            i &&
              (i.img.off(".mfploader"),
              i === t.currItem &&
                (t._onImageHasSize(i),
                t.updateStatus("error", s.tError.replace("%url%", i.src))),
              (i.hasSize = !0),
              (i.loaded = !0),
              (i.loadError = !0));
          },
          s = t.st.image,
          l = n.find(".mfp-img");
        if (l.length) {
          var c = document.createElement("img");
          (c.className = "mfp-img"),
            i.el &&
              i.el.find("img").length &&
              (c.alt = i.el.find("img").attr("alt")),
            (i.img = e(c).on("load.mfploader", r).on("error.mfploader", a)),
            (c.src = i.src),
            l.is("img") && (i.img = i.img.clone()),
            (c = i.img[0]).naturalWidth > 0
              ? (i.hasSize = !0)
              : c.width || (i.hasSize = !1);
        }
        return (
          t._parseMarkup(n, { title: H(i), img_replaceWith: i.img }, i),
          t.resizeImage(),
          i.hasSize
            ? (L && clearInterval(L),
              i.loadError
                ? (n.addClass("mfp-loading"),
                  t.updateStatus("error", s.tError.replace("%url%", i.src)))
                : (n.removeClass("mfp-loading"), t.updateStatus("ready")),
              n)
            : (t.updateStatus("loading"),
              (i.loading = !0),
              i.hasSize ||
                ((i.imgHidden = !0),
                n.addClass("mfp-loading"),
                t.findImageSize(i)),
              n)
        );
      },
    },
  });
  var A;
  e.magnificPopup.registerModule("zoom", {
    options: {
      enabled: !1,
      easing: "ease-in-out",
      duration: 300,
      opener: function (e) {
        return e.is("img") ? e : e.find("img");
      },
    },
    proto: {
      initZoom: function () {
        var e,
          i = t.st.zoom,
          n = ".zoom";
        if (i.enabled && t.supportsTransition) {
          var o,
            r,
            a = i.duration,
            c = function (e) {
              var t = e
                  .clone()
                  .removeAttr("style")
                  .removeAttr("class")
                  .addClass("mfp-animated-image"),
                n = "all " + i.duration / 1e3 + "s " + i.easing,
                o = {
                  position: "fixed",
                  zIndex: 9999,
                  left: 0,
                  top: 0,
                  "-webkit-backface-visibility": "hidden",
                },
                r = "transition";
              return (
                (o["-webkit-" + r] = o["-moz-" + r] = o["-o-" + r] = o[r] = n),
                t.css(o),
                t
              );
            },
            d = function () {
              t.content.css("visibility", "visible");
            };
          w("BuildControls" + n, function () {
            if (t._allowZoom()) {
              if (
                (clearTimeout(o),
                t.content.css("visibility", "hidden"),
                !(e = t._getItemToZoom()))
              )
                return void d();
              (r = c(e)).css(t._getOffset()),
                t.wrap.append(r),
                (o = setTimeout(function () {
                  r.css(t._getOffset(!0)),
                    (o = setTimeout(function () {
                      d(),
                        setTimeout(function () {
                          r.remove(), (e = r = null), I("ZoomAnimationEnded");
                        }, 16);
                    }, a));
                }, 16));
            }
          }),
            w(l + n, function () {
              if (t._allowZoom()) {
                if ((clearTimeout(o), (t.st.removalDelay = a), !e)) {
                  if (!(e = t._getItemToZoom())) return;
                  r = c(e);
                }
                r.css(t._getOffset(!0)),
                  t.wrap.append(r),
                  t.content.css("visibility", "hidden"),
                  setTimeout(function () {
                    r.css(t._getOffset());
                  }, 16);
              }
            }),
            w(s + n, function () {
              t._allowZoom() && (d(), r && r.remove(), (e = null));
            });
        }
      },
      _allowZoom: function () {
        return "image" === t.currItem.type;
      },
      _getItemToZoom: function () {
        return !!t.currItem.hasSize && t.currItem.img;
      },
      _getOffset: function (i) {
        var n,
          o = (n = i
            ? t.currItem.img
            : t.st.zoom.opener(t.currItem.el || t.currItem)).offset(),
          r = parseInt(n.css("padding-top"), 10),
          a = parseInt(n.css("padding-bottom"), 10);
        o.top -= e(window).scrollTop() - r;
        var s = {
          width: n.width(),
          height: (y ? n.innerHeight() : n[0].offsetHeight) - a - r,
        };
        return (
          void 0 === A &&
            (A = void 0 !== document.createElement("p").style.MozTransform),
          A
            ? (s["-moz-transform"] = s.transform =
                "translate(" + o.left + "px," + o.top + "px)")
            : ((s.left = o.left), (s.top = o.top)),
          s
        );
      },
    },
  });
  var F = "iframe",
    j = function (e) {
      if (t.currTemplate[F]) {
        var i = t.currTemplate[F].find("iframe");
        i.length &&
          (e || (i[0].src = "//about:blank"),
          t.isIE8 && i.css("display", e ? "block" : "none"));
      }
    };
  e.magnificPopup.registerModule(F, {
    options: {
      markup:
        '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
      srcAction: "iframe_src",
      patterns: {
        youtube: {
          index: "youtube.com",
          id: "v=",
          src: "//www.youtube.com/embed/%id%?autoplay=1",
        },
        vimeo: {
          index: "vimeo.com/",
          id: "/",
          src: "//player.vimeo.com/video/%id%?autoplay=1",
        },
        gmaps: { index: "//maps.google.", src: "%id%&output=embed" },
      },
    },
    proto: {
      initIframe: function () {
        t.types.push(F),
          w("BeforeChange", function (e, t, i) {
            t !== i && (t === F ? j() : i === F && j(!0));
          }),
          w(s + "." + F, function () {
            j();
          });
      },
      getIframe: function (i, n) {
        var o = i.src,
          r = t.st.iframe;
        e.each(r.patterns, function () {
          return o.indexOf(this.index) > -1
            ? (this.id &&
                (o =
                  "string" == typeof this.id
                    ? o.substr(
                        o.lastIndexOf(this.id) + this.id.length,
                        o.length
                      )
                    : this.id.call(this, o)),
              (o = this.src.replace("%id%", o)),
              !1)
            : void 0;
        });
        var a = {};
        return (
          r.srcAction && (a[r.srcAction] = o),
          t._parseMarkup(n, a, i),
          t.updateStatus("ready"),
          n
        );
      },
    },
  });
  var N = function (e) {
      var i = t.items.length;
      return e > i - 1 ? e - i : 0 > e ? i + e : e;
    },
    W = function (e, t, i) {
      return e.replace(/%curr%/gi, t + 1).replace(/%total%/gi, i);
    };
  e.magnificPopup.registerModule("gallery", {
    options: {
      enabled: !1,
      arrowMarkup:
        '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
      preload: [0, 2],
      navigateByImgClick: !0,
      arrows: !0,
      tPrev: "Previous (Left arrow key)",
      tNext: "Next (Right arrow key)",
      tCounter: "%curr% of %total%",
    },
    proto: {
      initGallery: function () {
        var i = t.st.gallery,
          o = ".mfp-gallery";
        return (
          (t.direction = !0),
          !(!i || !i.enabled) &&
            ((r += " mfp-gallery"),
            w(d + o, function () {
              i.navigateByImgClick &&
                t.wrap.on("click" + o, ".mfp-img", function () {
                  return t.items.length > 1 ? (t.next(), !1) : void 0;
                }),
                n.on("keydown" + o, function (e) {
                  37 === e.keyCode ? t.prev() : 39 === e.keyCode && t.next();
                });
            }),
            w("UpdateStatus" + o, function (e, i) {
              i.text && (i.text = W(i.text, t.currItem.index, t.items.length));
            }),
            w(c + o, function (e, n, o, r) {
              var a = t.items.length;
              o.counter = a > 1 ? W(i.tCounter, r.index, a) : "";
            }),
            w("BuildControls" + o, function () {
              if (t.items.length > 1 && i.arrows && !t.arrowLeft) {
                var n = i.arrowMarkup,
                  o = (t.arrowLeft = e(
                    n.replace(/%title%/gi, i.tPrev).replace(/%dir%/gi, "left")
                  ).addClass(v)),
                  r = (t.arrowRight = e(
                    n.replace(/%title%/gi, i.tNext).replace(/%dir%/gi, "right")
                  ).addClass(v));
                o.click(function () {
                  t.prev();
                }),
                  r.click(function () {
                    t.next();
                  }),
                  t.container.append(o.add(r));
              }
            }),
            w(u + o, function () {
              t._preloadTimeout && clearTimeout(t._preloadTimeout),
                (t._preloadTimeout = setTimeout(function () {
                  t.preloadNearbyImages(), (t._preloadTimeout = null);
                }, 16));
            }),
            void w(s + o, function () {
              n.off(o),
                t.wrap.off("click" + o),
                (t.arrowRight = t.arrowLeft = null);
            }))
        );
      },
      next: function () {
        (t.direction = !0), (t.index = N(t.index + 1)), t.updateItemHTML();
      },
      prev: function () {
        (t.direction = !1), (t.index = N(t.index - 1)), t.updateItemHTML();
      },
      goTo: function (e) {
        (t.direction = e >= t.index), (t.index = e), t.updateItemHTML();
      },
      preloadNearbyImages: function () {
        var e,
          i = t.st.gallery.preload,
          n = Math.min(i[0], t.items.length),
          o = Math.min(i[1], t.items.length);
        for (e = 1; e <= (t.direction ? o : n); e++)
          t._preloadItem(t.index + e);
        for (e = 1; e <= (t.direction ? n : o); e++)
          t._preloadItem(t.index - e);
      },
      _preloadItem: function (i) {
        if (((i = N(i)), !t.items[i].preloaded)) {
          var n = t.items[i];
          n.parsed || (n = t.parseEl(i)),
            I("LazyLoad", n),
            "image" === n.type &&
              (n.img = e('<img class="mfp-img" />')
                .on("load.mfploader", function () {
                  n.hasSize = !0;
                })
                .on("error.mfploader", function () {
                  (n.hasSize = !0), (n.loadError = !0), I("LazyLoadError", n);
                })
                .attr("src", n.src)),
            (n.preloaded = !0);
        }
      },
    },
  });
  var Z = "retina";
  e.magnificPopup.registerModule(Z, {
    options: {
      replaceSrc: function (e) {
        return e.src.replace(/\.\w+$/, function (e) {
          return "@2x" + e;
        });
      },
      ratio: 1,
    },
    proto: {
      initRetina: function () {
        if (window.devicePixelRatio > 1) {
          var e = t.st.retina,
            i = e.ratio;
          (i = isNaN(i) ? i() : i) > 1 &&
            (w("ImageHasSize." + Z, function (e, t) {
              t.img.css({
                "max-width": t.img[0].naturalWidth / i,
                width: "100%",
              });
            }),
            w("ElementParse." + Z, function (t, n) {
              n.src = e.replaceSrc(n, i);
            }));
        }
      },
    },
  }),
    k();
});
//End Magnific Popup Js

/*
 * sticky-sidebar - A JavaScript plugin for making smart and high performance.
 * @version v3.3.1
 * @link https://github.com/abouolia/sticky-sidebar
 * @author Ahmed Bouhuolia
 * @license The MIT License (MIT)
 * */
!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define(e)
    : (t.StickySidebar = e());
})(this, function () {
  "use strict";
  function t(t) {
    return t &&
      t.__esModule &&
      Object.prototype.hasOwnProperty.call(t, "default")
      ? t.default
      : t;
  }
  function e(t, e) {
    return t((e = { exports: {} }), e.exports), e.exports;
  }
  "undefined" != typeof window
    ? window
    : "undefined" != typeof global
    ? global
    : "undefined" != typeof self && self;
  var i = e(function (t, e) {
    !(function (t) {
      Object.defineProperty(t, "__esModule", { value: !0 });
      var e,
        i,
        n = (function () {
          function t(t, e) {
            for (var i = 0; i < e.length; i++) {
              var n = e[i];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n);
            }
          }
          return function (e, i, n) {
            return i && t(e.prototype, i), n && t(e, n), e;
          };
        })(),
        o =
          ((e = ".stickySidebar"),
          (i = {
            topSpacing: 0,
            bottomSpacing: 0,
            containerSelector: !1,
            innerWrapperSelector: ".inner-wrapper-sticky",
            stickyClass: "is-affixed",
            resizeSensor: !0,
            minWidth: !1,
          }),
          (function () {
            function t(e) {
              var n = this,
                o =
                  1 < arguments.length && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
              if (
                ((function (e, i) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this),
                (this.options = t.extend(i, o)),
                (this.sidebar =
                  "string" == typeof e ? document.querySelector(e) : e),
                void 0 === this.sidebar)
              )
                throw new Error("There is no specific sidebar element.");
              (this.sidebarInner = !1),
                (this.container = this.sidebar.parentElement),
                (this.affixedType = "STATIC"),
                (this.direction = "down"),
                (this.support = { transform: !1, transform3d: !1 }),
                (this._initialized = !1),
                (this._reStyle = !1),
                (this._breakpoint = !1),
                (this.dimensions = {
                  translateY: 0,
                  maxTranslateY: 0,
                  topSpacing: 0,
                  lastTopSpacing: 0,
                  bottomSpacing: 0,
                  lastBottomSpacing: 0,
                  sidebarHeight: 0,
                  sidebarWidth: 0,
                  containerTop: 0,
                  containerHeight: 0,
                  viewportHeight: 0,
                  viewportTop: 0,
                  lastViewportTop: 0,
                }),
                ["handleEvent"].forEach(function (t) {
                  n[t] = n[t].bind(n);
                }),
                this.initialize();
            }
            return (
              n(
                t,
                [
                  {
                    key: "initialize",
                    value: function () {
                      var t = this;
                      if (
                        (this._setSupportFeatures(),
                        this.options.innerWrapperSelector &&
                          ((this.sidebarInner = this.sidebar.querySelector(
                            this.options.innerWrapperSelector
                          )),
                          null === this.sidebarInner &&
                            (this.sidebarInner = !1)),
                        !this.sidebarInner)
                      ) {
                        var e = document.createElement("div");
                        for (
                          e.setAttribute("class", "inner-wrapper-sticky"),
                            this.sidebar.appendChild(e);
                          this.sidebar.firstChild != e;

                        )
                          e.appendChild(this.sidebar.firstChild);
                        this.sidebarInner = this.sidebar.querySelector(
                          ".inner-wrapper-sticky"
                        );
                      }
                      if (this.options.containerSelector) {
                        var i = document.querySelectorAll(
                          this.options.containerSelector
                        );
                        if (
                          ((i = Array.prototype.slice.call(i)).forEach(
                            function (e, i) {
                              e.contains(t.sidebar) && (t.container = e);
                            }
                          ),
                          !i.length)
                        )
                          throw new Error(
                            "The container does not contains on the sidebar."
                          );
                      }
                      "function" != typeof this.options.topSpacing &&
                        (this.options.topSpacing =
                          parseInt(this.options.topSpacing) || 0),
                        "function" != typeof this.options.bottomSpacing &&
                          (this.options.bottomSpacing =
                            parseInt(this.options.bottomSpacing) || 0),
                        this._widthBreakpoint(),
                        this.calcDimensions(),
                        this.stickyPosition(),
                        this.bindEvents(),
                        (this._initialized = !0);
                    },
                  },
                  {
                    key: "bindEvents",
                    value: function () {
                      window.addEventListener("resize", this, {
                        passive: !0,
                        capture: !1,
                      }),
                        window.addEventListener("scroll", this, {
                          passive: !0,
                          capture: !1,
                        }),
                        this.sidebar.addEventListener("update" + e, this),
                        this.options.resizeSensor &&
                          "undefined" != typeof ResizeSensor &&
                          (new ResizeSensor(
                            this.sidebarInner,
                            this.handleEvent
                          ),
                          new ResizeSensor(this.container, this.handleEvent));
                    },
                  },
                  {
                    key: "handleEvent",
                    value: function (t) {
                      this.updateSticky(t);
                    },
                  },
                  {
                    key: "calcDimensions",
                    value: function () {
                      if (!this._breakpoint) {
                        var e = this.dimensions;
                        (e.containerTop = t.offsetRelative(this.container).top),
                          (e.containerHeight = this.container.clientHeight),
                          (e.containerBottom =
                            e.containerTop + e.containerHeight),
                          (e.sidebarHeight = this.sidebarInner.offsetHeight),
                          (e.sidebarWidth = this.sidebarInner.offsetWidth),
                          (e.viewportHeight = window.innerHeight),
                          (e.maxTranslateY =
                            e.containerHeight - e.sidebarHeight),
                          this._calcDimensionsWithScroll();
                      }
                    },
                  },
                  {
                    key: "_calcDimensionsWithScroll",
                    value: function () {
                      var e = this.dimensions;
                      (e.sidebarLeft = t.offsetRelative(this.sidebar).left),
                        (e.viewportTop =
                          document.documentElement.scrollTop ||
                          document.body.scrollTop),
                        (e.viewportBottom = e.viewportTop + e.viewportHeight),
                        (e.viewportLeft =
                          document.documentElement.scrollLeft ||
                          document.body.scrollLeft),
                        (e.topSpacing = this.options.topSpacing),
                        (e.bottomSpacing = this.options.bottomSpacing),
                        "function" == typeof e.topSpacing &&
                          (e.topSpacing =
                            parseInt(e.topSpacing(this.sidebar)) || 0),
                        "function" == typeof e.bottomSpacing &&
                          (e.bottomSpacing =
                            parseInt(e.bottomSpacing(this.sidebar)) || 0),
                        "VIEWPORT-TOP" === this.affixedType
                          ? e.topSpacing < e.lastTopSpacing &&
                            ((e.translateY += e.lastTopSpacing - e.topSpacing),
                            (this._reStyle = !0))
                          : "VIEWPORT-BOTTOM" === this.affixedType &&
                            e.bottomSpacing < e.lastBottomSpacing &&
                            ((e.translateY +=
                              e.lastBottomSpacing - e.bottomSpacing),
                            (this._reStyle = !0)),
                        (e.lastTopSpacing = e.topSpacing),
                        (e.lastBottomSpacing = e.bottomSpacing);
                    },
                  },
                  {
                    key: "isSidebarFitsViewport",
                    value: function () {
                      var t = this.dimensions,
                        e =
                          "down" === this.scrollDirection
                            ? t.lastBottomSpacing
                            : t.lastTopSpacing;
                      return (
                        this.dimensions.sidebarHeight + e <
                        this.dimensions.viewportHeight
                      );
                    },
                  },
                  {
                    key: "observeScrollDir",
                    value: function () {
                      var t = this.dimensions;
                      if (t.lastViewportTop !== t.viewportTop) {
                        var e = "down" === this.direction ? Math.min : Math.max;
                        t.viewportTop === e(t.viewportTop, t.lastViewportTop) &&
                          (this.direction =
                            "down" === this.direction ? "up" : "down");
                      }
                    },
                  },
                  {
                    key: "getAffixType",
                    value: function () {
                      this._calcDimensionsWithScroll();
                      var t = this.dimensions,
                        e = t.viewportTop + t.topSpacing,
                        i = this.affixedType;
                      return (
                        e <= t.containerTop ||
                        t.containerHeight <= t.sidebarHeight
                          ? ((t.translateY = 0), (i = "STATIC"))
                          : (i =
                              "up" === this.direction
                                ? this._getAffixTypeScrollingUp()
                                : this._getAffixTypeScrollingDown()),
                        (t.translateY = Math.max(0, t.translateY)),
                        (t.translateY = Math.min(
                          t.containerHeight,
                          t.translateY
                        )),
                        (t.translateY = Math.round(t.translateY)),
                        (t.lastViewportTop = t.viewportTop),
                        i
                      );
                    },
                  },
                  {
                    key: "_getAffixTypeScrollingDown",
                    value: function () {
                      var t = this.dimensions,
                        e = t.sidebarHeight + t.containerTop,
                        i = t.viewportTop + t.topSpacing,
                        n = t.viewportBottom - t.bottomSpacing,
                        o = this.affixedType;
                      return (
                        this.isSidebarFitsViewport()
                          ? t.sidebarHeight + i >= t.containerBottom
                            ? ((t.translateY = t.containerBottom - e),
                              (o = "CONTAINER-BOTTOM"))
                            : i >= t.containerTop &&
                              ((t.translateY = i - t.containerTop),
                              (o = "VIEWPORT-TOP"))
                          : t.containerBottom <= n
                          ? ((t.translateY = t.containerBottom - e),
                            (o = "CONTAINER-BOTTOM"))
                          : e + t.translateY <= n
                          ? ((t.translateY = n - e), (o = "VIEWPORT-BOTTOM"))
                          : t.containerTop + t.translateY <= i &&
                            0 !== t.translateY &&
                            t.maxTranslateY !== t.translateY &&
                            (o = "VIEWPORT-UNBOTTOM"),
                        o
                      );
                    },
                  },
                  {
                    key: "_getAffixTypeScrollingUp",
                    value: function () {
                      var t = this.dimensions,
                        e = t.sidebarHeight + t.containerTop,
                        i = t.viewportTop + t.topSpacing,
                        n = t.viewportBottom - t.bottomSpacing,
                        o = this.affixedType;
                      return (
                        i <= t.translateY + t.containerTop
                          ? ((t.translateY = i - t.containerTop),
                            (o = "VIEWPORT-TOP"))
                          : t.containerBottom <= n
                          ? ((t.translateY = t.containerBottom - e),
                            (o = "CONTAINER-BOTTOM"))
                          : this.isSidebarFitsViewport() ||
                            (t.containerTop <= i &&
                              0 !== t.translateY &&
                              t.maxTranslateY !== t.translateY &&
                              (o = "VIEWPORT-UNBOTTOM")),
                        o
                      );
                    },
                  },
                  {
                    key: "_getStyle",
                    value: function (e) {
                      if (void 0 !== e) {
                        var i = { inner: {}, outer: {} },
                          n = this.dimensions;
                        switch (e) {
                          case "VIEWPORT-TOP":
                            i.inner = {
                              position: "fixed",
                              top: n.topSpacing,
                              left: n.sidebarLeft - n.viewportLeft,
                              width: n.sidebarWidth,
                            };
                            break;
                          case "VIEWPORT-BOTTOM":
                            i.inner = {
                              position: "fixed",
                              top: "auto",
                              left: n.sidebarLeft,
                              bottom: n.bottomSpacing,
                              width: n.sidebarWidth,
                            };
                            break;
                          case "CONTAINER-BOTTOM":
                          case "VIEWPORT-UNBOTTOM":
                            var o = this._getTranslate(0, n.translateY + "px");
                            i.inner = o
                              ? { transform: o }
                              : {
                                  position: "absolute",
                                  top: n.translateY,
                                  width: n.sidebarWidth,
                                };
                        }
                        switch (e) {
                          case "VIEWPORT-TOP":
                          case "VIEWPORT-BOTTOM":
                          case "VIEWPORT-UNBOTTOM":
                          case "CONTAINER-BOTTOM":
                            i.outer = {
                              height: n.sidebarHeight,
                              position: "relative",
                            };
                        }
                        return (
                          (i.outer = t.extend(
                            { height: "", position: "" },
                            i.outer
                          )),
                          (i.inner = t.extend(
                            {
                              position: "relative",
                              top: "",
                              left: "",
                              bottom: "",
                              width: "",
                              transform: "",
                            },
                            i.inner
                          )),
                          i
                        );
                      }
                    },
                  },
                  {
                    key: "stickyPosition",
                    value: function (i) {
                      if (!this._breakpoint) {
                        (i = this._reStyle || i || !1),
                          this.options.topSpacing,
                          this.options.bottomSpacing;
                        var n = this.getAffixType(),
                          o = this._getStyle(n);
                        if ((this.affixedType != n || i) && n) {
                          var s =
                            "affix." +
                            n.toLowerCase().replace("viewport-", "") +
                            e;
                          for (var r in (t.eventTrigger(this.sidebar, s),
                          "STATIC" === n
                            ? t.removeClass(
                                this.sidebar,
                                this.options.stickyClass
                              )
                            : t.addClass(
                                this.sidebar,
                                this.options.stickyClass
                              ),
                          o.outer)) {
                            var a = "number" == typeof o.outer[r] ? "px" : "";
                            this.sidebar.style[r] = o.outer[r] + a;
                          }
                          for (var p in o.inner) {
                            var c = "number" == typeof o.inner[p] ? "px" : "";
                            this.sidebarInner.style[p] = o.inner[p] + c;
                          }
                          var l =
                            "affixed." +
                            n.toLowerCase().replace("viewport-", "") +
                            e;
                          t.eventTrigger(this.sidebar, l);
                        } else
                          this._initialized &&
                            (this.sidebarInner.style.left = o.inner.left);
                        this.affixedType = n;
                      }
                    },
                  },
                  {
                    key: "_widthBreakpoint",
                    value: function () {
                      window.innerWidth <= this.options.minWidth
                        ? ((this._breakpoint = !0),
                          (this.affixedType = "STATIC"),
                          this.sidebar.removeAttribute("style"),
                          t.removeClass(this.sidebar, this.options.stickyClass),
                          this.sidebarInner.removeAttribute("style"))
                        : (this._breakpoint = !1);
                    },
                  },
                  {
                    key: "updateSticky",
                    value: function () {
                      var t,
                        e = this,
                        i =
                          0 < arguments.length && void 0 !== arguments[0]
                            ? arguments[0]
                            : {};
                      this._running ||
                        ((this._running = !0),
                        (t = i.type),
                        requestAnimationFrame(function () {
                          switch (t) {
                            case "scroll":
                              e._calcDimensionsWithScroll(),
                                e.observeScrollDir(),
                                e.stickyPosition();
                              break;
                            case "resize":
                            default:
                              e._widthBreakpoint(),
                                e.calcDimensions(),
                                e.stickyPosition(!0);
                          }
                          e._running = !1;
                        }));
                    },
                  },
                  {
                    key: "_setSupportFeatures",
                    value: function () {
                      var e = this.support;
                      (e.transform = t.supportTransform()),
                        (e.transform3d = t.supportTransform(!0));
                    },
                  },
                  {
                    key: "_getTranslate",
                    value: function () {
                      var t =
                          0 < arguments.length && void 0 !== arguments[0]
                            ? arguments[0]
                            : 0,
                        e =
                          1 < arguments.length && void 0 !== arguments[1]
                            ? arguments[1]
                            : 0,
                        i =
                          2 < arguments.length && void 0 !== arguments[2]
                            ? arguments[2]
                            : 0;
                      return this.support.transform3d
                        ? "translate3d(" + t + ", " + e + ", " + i + ")"
                        : !!this.support.translate &&
                            "translate(" + t + ", " + e + ")";
                    },
                  },
                  {
                    key: "destroy",
                    value: function () {
                      window.removeEventListener("resize", this, {
                        capture: !1,
                      }),
                        window.removeEventListener("scroll", this, {
                          capture: !1,
                        }),
                        this.sidebar.classList.remove(this.options.stickyClass),
                        (this.sidebar.style.minHeight = ""),
                        this.sidebar.removeEventListener("update" + e, this);
                      var t = { inner: {}, outer: {} };
                      for (var i in ((t.inner = {
                        position: "",
                        top: "",
                        left: "",
                        bottom: "",
                        width: "",
                        transform: "",
                      }),
                      (t.outer = { height: "", position: "" }),
                      t.outer))
                        this.sidebar.style[i] = t.outer[i];
                      for (var n in t.inner)
                        this.sidebarInner.style[n] = t.inner[n];
                      this.options.resizeSensor &&
                        "undefined" != typeof ResizeSensor &&
                        (ResizeSensor.detach(
                          this.sidebarInner,
                          this.handleEvent
                        ),
                        ResizeSensor.detach(this.container, this.handleEvent));
                    },
                  },
                ],
                [
                  {
                    key: "supportTransform",
                    value: function (t) {
                      var e = !1,
                        i = t ? "perspective" : "transform",
                        n = i.charAt(0).toUpperCase() + i.slice(1),
                        o = document.createElement("support").style;
                      return (
                        (
                          i +
                          " " +
                          ["Webkit", "Moz", "O", "ms"].join(n + " ") +
                          n
                        )
                          .split(" ")
                          .forEach(function (t, i) {
                            if (void 0 !== o[t]) return (e = t), !1;
                          }),
                        e
                      );
                    },
                  },
                  {
                    key: "eventTrigger",
                    value: function (t, e, i) {
                      try {
                        var n = new CustomEvent(e, { detail: i });
                      } catch (t) {
                        (n =
                          document.createEvent("CustomEvent")).initCustomEvent(
                          e,
                          !0,
                          !0,
                          i
                        );
                      }
                      t.dispatchEvent(n);
                    },
                  },
                  {
                    key: "extend",
                    value: function (t, e) {
                      var i = {};
                      for (var n in t)
                        void 0 !== e[n] ? (i[n] = e[n]) : (i[n] = t[n]);
                      return i;
                    },
                  },
                  {
                    key: "offsetRelative",
                    value: function (t) {
                      var e = { left: 0, top: 0 };
                      do {
                        var i = t.offsetTop,
                          n = t.offsetLeft;
                        isNaN(i) || (e.top += i),
                          isNaN(n) || (e.left += n),
                          (t =
                            "BODY" === t.tagName
                              ? t.parentElement
                              : t.offsetParent);
                      } while (t);
                      return e;
                    },
                  },
                  {
                    key: "addClass",
                    value: function (e, i) {
                      t.hasClass(e, i) ||
                        (e.classList
                          ? e.classList.add(i)
                          : (e.className += " " + i));
                    },
                  },
                  {
                    key: "removeClass",
                    value: function (e, i) {
                      t.hasClass(e, i) &&
                        (e.classList
                          ? e.classList.remove(i)
                          : (e.className = e.className.replace(
                              new RegExp(
                                "(^|\\b)" + i.split(" ").join("|") + "(\\b|$)",
                                "gi"
                              ),
                              " "
                            )));
                    },
                  },
                  {
                    key: "hasClass",
                    value: function (t, e) {
                      return t.classList
                        ? t.classList.contains(e)
                        : new RegExp("(^| )" + e + "( |$)", "gi").test(
                            t.className
                          );
                    },
                  },
                  {
                    key: "defaults",
                    get: function () {
                      return i;
                    },
                  },
                ]
              ),
              t
            );
          })());
      (t.default = o), (window.StickySidebar = o);
    })(e);
  });
  return (
    t(i),
    t(
      e(function (t, e) {
        !(function (t) {
          var e,
            n = (e = i) && e.__esModule ? e : { default: e };
          !(function () {
            if ("undefined" != typeof window) {
              var t = window.$ || window.jQuery || window.Zepto,
                e = "stickySidebar";
              if (t) {
                (t.fn.stickySidebar = function (i) {
                  return this.each(function () {
                    var o = t(this),
                      s = t(this).data(e);
                    if (
                      (s ||
                        ((s = new n.default(this, "object" == typeof i && i)),
                        o.data(e, s)),
                      "string" == typeof i)
                    ) {
                      if (
                        void 0 === s[i] &&
                        -1 === ["destroy", "updateSticky"].indexOf(i)
                      )
                        throw new Error('No method named "' + i + '"');
                      s[i]();
                    }
                  });
                }),
                  (t.fn.stickySidebar.Constructor = n.default);
                var i = t.fn.stickySidebar;
                t.fn.stickySidebar.noConflict = function () {
                  return (t.fn.stickySidebar = i), this;
                };
              }
            }
          })();
        })();
      })
    )
  );
});
//End Sticky Sidebar

/*!
 * jQuery ajaxChimp 1.3.0
 * MIT License
 */
!(function (a) {
  "use strict";
  (a.ajaxChimp = {
    responses: {
      "We have sent you a confirmation email": 0,
      "Please enter a value": 1,
      "An email address must contain a single @": 2,
      "The domain portion of the email address is invalid (the portion after the @: )": 3,
      "The username portion of the email address is invalid (the portion before the @: )": 4,
      "This email address looks fake or invalid. Please enter a real email address": 5,
    },
    translations: { en: null },
    init: function (e, s) {
      a(e).ajaxChimp(s);
    },
  }),
    (a.fn.ajaxChimp = function (e) {
      return (
        a(this).each(function (s, n) {
          var i = a(n),
            t = i.find("input[type=email]"),
            r = i.find("label[for=" + t.attr("id") + "]"),
            l = a.extend({ url: i.attr("action"), language: "en" }, e),
            o = l.url.replace("/post?", "/post-json?").concat("&c=?");
          i.attr("novalidate", "true"),
            t.attr("name", "EMAIL"),
            i.submit(function () {
              var e;
              var s = {},
                n = i.serializeArray();
              a.each(n, function (a, e) {
                s[e.name] = e.value;
              }),
                a.ajax({
                  url: o,
                  data: s,
                  success: function (s) {
                    if ("success" === s.result)
                      (e = "We have sent you a confirmation email"),
                        r.removeClass("error").addClass("valid"),
                        t.removeClass("error").addClass("valid");
                    else {
                      t.removeClass("valid").addClass("error"),
                        r.removeClass("valid").addClass("error");
                      try {
                        var n = s.msg.split(" - ", 2);
                        void 0 === n[1]
                          ? (e = s.msg)
                          : parseInt(n[0], 10).toString() === n[0]
                          ? (n[0], (e = n[1]))
                          : (e = s.msg);
                      } catch (a) {
                        e = s.msg;
                      }
                    }
                    "en" !== l.language &&
                      void 0 !== a.ajaxChimp.responses[e] &&
                      a.ajaxChimp.translations &&
                      a.ajaxChimp.translations[l.language] &&
                      a.ajaxChimp.translations[l.language][
                        a.ajaxChimp.responses[e]
                      ] &&
                      (e =
                        a.ajaxChimp.translations[l.language][
                          a.ajaxChimp.responses[e]
                        ]),
                      r.html(e),
                      r.show(2e3),
                      l.callback && l.callback(s);
                  },
                  dataType: "jsonp",
                  error: function (a, e) {
                    console.log("mailchimp ajax submit error: " + e);
                  },
                });
              var m = "Submitting...";
              return (
                "en" !== l.language &&
                  a.ajaxChimp.translations &&
                  a.ajaxChimp.translations[l.language] &&
                  a.ajaxChimp.translations[l.language].submit &&
                  (m = a.ajaxChimp.translations[l.language].submit),
                r.html(m).show(2e3),
                !1
              );
            });
        }),
        this
      );
    });
})(jQuery);
// End jQuery ajaxChimp

/*!
 * Paraxify.js-0.1
 */
!(function (e, t, i) {
  "use strict";
  var o;
  (o = function (i, o) {
    var s, n, h, r, f, g;
    return (
      (f = 0),
      (g = 0),
      (n = 0),
      (h = {}),
      (r = []),
      0,
      ((s = function (t, i) {
        for (n in ((this.options = { speed: 1, boost: 0 }), i))
          this.options[n] = i[n];
        if (
          ((this.options.speed < 0 || this.options.speed > 1) &&
            (this.options.speed = 1),
          t || (t = "paraxify"),
          e.getElementsByClassName(t.replace(".", "")))
        )
          this.photos = e.getElementsByClassName(t.replace(".", ""));
        else {
          if (!1 === e.querySelector(t))
            throw new Error(
              "The elements you're trying to select don't exist."
            );
          this.photos = querySelector(t);
        }
        (h = this.options), (r = this.photos), this._init(this);
      }).prototype = {
        update: function () {
          for (g = t.innerHeight, n = 0; n < r.length; )
            (r[n].style.backgroundPosition = "center center"),
              (r[n].url = t
                .getComputedStyle(r[n], !1)
                .backgroundImage.replace(/url\((['"])?(.*?)\1\)/gi, "$2")
                .split(",")[0]),
              r[n].img || (r[n].img = new Image()),
              r[n].url !== r[n].img.src &&
                (this._check(n), (r[n].img.src = r[n].url)),
              n++;
          this._animate();
        },
        _init: function () {
          this.update(),
            (t.onscroll = function () {
              this._animate();
            }.bind(this)),
            (t.onresize = function () {
              this.update();
            }.bind(this));
        },
        _check: function (e) {
          var i, o;
          ((o = r[e]).ok = !0),
            (o.bgSize = t.getComputedStyle(o, !1).backgroundSize),
            (i = g),
            (r[e].img.onload = function () {
              if ("" === o.bgSize || "auto" === o.bgSize) {
                if (this.height < o.offsetHeight)
                  throw (
                    ((o.ok = !1),
                    new Error(
                      "The image " +
                        o.url +
                        " (" +
                        this.height +
                        "px) is too short for that container (" +
                        o.offsetHeight +
                        "px)."
                    ))
                  );
                (i = this.height),
                  this.height < g && (i += (g - o.offsetHeight) * h.speed);
              } else if ("cover" === o.bgSize) {
                if (g < o.offsetHeight)
                  throw (
                    ((o.ok = !1),
                    new Error(
                      "The container (" +
                        o.offsetHeight +
                        "px) can't be bigger than the image (" +
                        g +
                        "px)."
                    ))
                  );
              } else t.getComputedStyle(o, !1).backgroundSize, this._check(e);
              (o.diff = -(i - o.offsetHeight) * h.speed),
                (o.diff = o.diff - o.offsetHeight * h.boost);
            });
        },
        _visible: function (e) {
          return (
            f + g > r[e].offsetTop && f < r[e].offsetTop + r[e].offsetHeight
          );
        },
        _animate: function () {
          var i, o;
          for (
            f =
              void 0 !== t.pageYOffset
                ? t.pageYOffset
                : (e.documentElement || e.body.parentNode || e.body).scrollTop,
              n = 0;
            n < r.length;

          )
            this._check(n),
              r[n].ok &&
              "fixed" === t.getComputedStyle(r[n], !1).backgroundAttachment &&
              this._visible(n)
                ? ((i = (f - r[n].offsetTop + g) / (r[n].offsetHeight + g)),
                  (o = r[n].diff * (i - 0.5)),
                  "cover" !== r[n].bgSize && (o += (g - r[n].img.height) / 2),
                  (o = Math.round(100 * o) / 100))
                : (o = "center"),
              (r[n].style.backgroundPosition = "center " + o + "px"),
              n++;
        },
      }),
      new s(i, o)
    );
  }),
    (t.paraxify = o);
})(document, window);
//End parallax.js

/*!
 * Isotope PACKAGED v3.0.6
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * https://isotope.metafizzy.co
 * Copyright 2010-2018 Metafizzy
 */
!(function (t, e) {
  "function" == typeof define && define.amd
    ? define("jquery-bridget/jquery-bridget", ["jquery"], function (i) {
        return e(t, i);
      })
    : "object" == typeof module && module.exports
    ? (module.exports = e(t, require("jquery")))
    : (t.jQueryBridget = e(t, t.jQuery));
})(window, function (t, e) {
  "use strict";
  function i(i, s, a) {
    (a = a || e || t.jQuery) &&
      (s.prototype.option ||
        (s.prototype.option = function (t) {
          a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t));
        }),
      (a.fn[i] = function (t) {
        return "string" == typeof t
          ? (function (t, e, o) {
              var n,
                s = "$()." + i + '("' + e + '")';
              return (
                t.each(function (t, u) {
                  var h = a.data(u, i);
                  if (h) {
                    var l = h[e];
                    if (l && "_" != e.charAt(0)) {
                      var d = l.apply(h, o);
                      n = void 0 === n ? d : n;
                    } else r(s + " is not a valid method");
                  } else r(i + " not initialized. Cannot call methods, i.e. " + s);
                }),
                void 0 !== n ? n : t
              );
            })(this, t, n.call(arguments, 1))
          : ((function (t, e) {
              t.each(function (t, o) {
                var n = a.data(o, i);
                n
                  ? (n.option(e), n._init())
                  : ((n = new s(o, e)), a.data(o, i, n));
              });
            })(this, t),
            this);
      }),
      o(a));
  }
  function o(t) {
    !t || (t && t.bridget) || (t.bridget = i);
  }
  var n = Array.prototype.slice,
    s = t.console,
    r =
      void 0 === s
        ? function () {}
        : function (t) {
            s.error(t);
          };
  return o(e || t.jQuery), i;
}),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("ev-emitter/ev-emitter", e)
      : "object" == typeof module && module.exports
      ? (module.exports = e())
      : (t.EvEmitter = e());
  })("undefined" != typeof window ? window : this, function () {
    function t() {}
    var e = t.prototype;
    return (
      (e.on = function (t, e) {
        if (t && e) {
          var i = (this._events = this._events || {}),
            o = (i[t] = i[t] || []);
          return -1 == o.indexOf(e) && o.push(e), this;
        }
      }),
      (e.once = function (t, e) {
        if (t && e) {
          this.on(t, e);
          var i = (this._onceEvents = this._onceEvents || {});
          return ((i[t] = i[t] || {})[e] = !0), this;
        }
      }),
      (e.off = function (t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
          var o = i.indexOf(e);
          return -1 != o && i.splice(o, 1), this;
        }
      }),
      (e.emitEvent = function (t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
          (i = i.slice(0)), (e = e || []);
          for (
            var o = this._onceEvents && this._onceEvents[t], n = 0;
            n < i.length;
            n++
          ) {
            var s = i[n];
            o && o[s] && (this.off(t, s), delete o[s]), s.apply(this, e);
          }
          return this;
        }
      }),
      (e.allOff = function () {
        delete this._events, delete this._onceEvents;
      }),
      t
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("get-size/get-size", e)
      : "object" == typeof module && module.exports
      ? (module.exports = e())
      : (t.getSize = e());
  })(window, function () {
    "use strict";
    function t(t) {
      var e = parseFloat(t);
      return -1 == t.indexOf("%") && !isNaN(e) && e;
    }
    function e(t) {
      var e = getComputedStyle(t);
      return (
        e ||
          s(
            "Style returned " +
              e +
              ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"
          ),
        e
      );
    }
    function i() {
      if (!u) {
        u = !0;
        var i = document.createElement("div");
        (i.style.width = "200px"),
          (i.style.padding = "1px 2px 3px 4px"),
          (i.style.borderStyle = "solid"),
          (i.style.borderWidth = "1px 2px 3px 4px"),
          (i.style.boxSizing = "border-box");
        var s = document.body || document.documentElement;
        s.appendChild(i);
        var r = e(i);
        (n = 200 == Math.round(t(r.width))),
          (o.isBoxSizeOuter = n),
          s.removeChild(i);
      }
    }
    function o(o) {
      if (
        (i(),
        "string" == typeof o && (o = document.querySelector(o)),
        o && "object" == typeof o && o.nodeType)
      ) {
        var s = e(o);
        if ("none" == s.display)
          return (function () {
            for (
              var t = {
                  width: 0,
                  height: 0,
                  innerWidth: 0,
                  innerHeight: 0,
                  outerWidth: 0,
                  outerHeight: 0,
                },
                e = 0;
              e < a;
              e++
            )
              t[r[e]] = 0;
            return t;
          })();
        var u = {};
        (u.width = o.offsetWidth), (u.height = o.offsetHeight);
        for (
          var h = (u.isBorderBox = "border-box" == s.boxSizing), l = 0;
          l < a;
          l++
        ) {
          var d = r[l],
            f = s[d],
            c = parseFloat(f);
          u[d] = isNaN(c) ? 0 : c;
        }
        var m = u.paddingLeft + u.paddingRight,
          p = u.paddingTop + u.paddingBottom,
          y = u.marginLeft + u.marginRight,
          g = u.marginTop + u.marginBottom,
          v = u.borderLeftWidth + u.borderRightWidth,
          _ = u.borderTopWidth + u.borderBottomWidth,
          z = h && n,
          I = t(s.width);
        !1 !== I && (u.width = I + (z ? 0 : m + v));
        var x = t(s.height);
        return (
          !1 !== x && (u.height = x + (z ? 0 : p + _)),
          (u.innerWidth = u.width - (m + v)),
          (u.innerHeight = u.height - (p + _)),
          (u.outerWidth = u.width + y),
          (u.outerHeight = u.height + g),
          u
        );
      }
    }
    var n,
      s =
        "undefined" == typeof console
          ? function () {}
          : function (t) {
              console.error(t);
            },
      r = [
        "paddingLeft",
        "paddingRight",
        "paddingTop",
        "paddingBottom",
        "marginLeft",
        "marginRight",
        "marginTop",
        "marginBottom",
        "borderLeftWidth",
        "borderRightWidth",
        "borderTopWidth",
        "borderBottomWidth",
      ],
      a = r.length,
      u = !1;
    return o;
  }),
  (function (t, e) {
    "use strict";
    "function" == typeof define && define.amd
      ? define("desandro-matches-selector/matches-selector", e)
      : "object" == typeof module && module.exports
      ? (module.exports = e())
      : (t.matchesSelector = e());
  })(window, function () {
    "use strict";
    var t = (function () {
      var t = window.Element.prototype;
      if (t.matches) return "matches";
      if (t.matchesSelector) return "matchesSelector";
      for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
        var o = e[i] + "MatchesSelector";
        if (t[o]) return o;
      }
    })();
    return function (e, i) {
      return e[t](i);
    };
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "fizzy-ui-utils/utils",
          ["desandro-matches-selector/matches-selector"],
          function (i) {
            return e(t, i);
          }
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(t, require("desandro-matches-selector")))
      : (t.fizzyUIUtils = e(t, t.matchesSelector));
  })(window, function (t, e) {
    var i = {
        extend: function (t, e) {
          for (var i in e) t[i] = e[i];
          return t;
        },
        modulo: function (t, e) {
          return ((t % e) + e) % e;
        },
      },
      o = Array.prototype.slice;
    (i.makeArray = function (t) {
      return Array.isArray(t)
        ? t
        : null == t
        ? []
        : "object" == typeof t && "number" == typeof t.length
        ? o.call(t)
        : [t];
    }),
      (i.removeFrom = function (t, e) {
        var i = t.indexOf(e);
        -1 != i && t.splice(i, 1);
      }),
      (i.getParent = function (t, i) {
        for (; t.parentNode && t != document.body; )
          if (((t = t.parentNode), e(t, i))) return t;
      }),
      (i.getQueryElement = function (t) {
        return "string" == typeof t ? document.querySelector(t) : t;
      }),
      (i.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t);
      }),
      (i.filterFindElements = function (t, o) {
        t = i.makeArray(t);
        var n = [];
        return (
          t.forEach(function (t) {
            if (t instanceof HTMLElement) {
              if (!o) return void n.push(t);
              e(t, o) && n.push(t);
              for (var i = t.querySelectorAll(o), s = 0; s < i.length; s++)
                n.push(i[s]);
            }
          }),
          n
        );
      }),
      (i.debounceMethod = function (t, e, i) {
        i = i || 100;
        var o = t.prototype[e],
          n = e + "Timeout";
        t.prototype[e] = function () {
          var t = this[n];
          clearTimeout(t);
          var e = arguments,
            s = this;
          this[n] = setTimeout(function () {
            o.apply(s, e), delete s[n];
          }, i);
        };
      }),
      (i.docReady = function (t) {
        var e = document.readyState;
        "complete" == e || "interactive" == e
          ? setTimeout(t)
          : document.addEventListener("DOMContentLoaded", t);
      }),
      (i.toDashed = function (t) {
        return t
          .replace(/(.)([A-Z])/g, function (t, e, i) {
            return e + "-" + i;
          })
          .toLowerCase();
      });
    var n = t.console;
    return (
      (i.htmlInit = function (e, o) {
        i.docReady(function () {
          var s = i.toDashed(o),
            r = "data-" + s,
            a = document.querySelectorAll("[" + r + "]"),
            u = document.querySelectorAll(".js-" + s),
            h = i.makeArray(a).concat(i.makeArray(u)),
            l = r + "-options",
            d = t.jQuery;
          h.forEach(function (t) {
            var i,
              s = t.getAttribute(r) || t.getAttribute(l);
            try {
              i = s && JSON.parse(s);
            } catch (e) {
              return void (
                n &&
                n.error("Error parsing " + r + " on " + t.className + ": " + e)
              );
            }
            var a = new e(t, i);
            d && d.data(t, o, a);
          });
        });
      }),
      i
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "outlayer/item",
          ["ev-emitter/ev-emitter", "get-size/get-size"],
          e
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("ev-emitter"), require("get-size")))
      : ((t.Outlayer = {}), (t.Outlayer.Item = e(t.EvEmitter, t.getSize)));
  })(window, function (t, e) {
    "use strict";
    function i(t, e) {
      t &&
        ((this.element = t),
        (this.layout = e),
        (this.position = { x: 0, y: 0 }),
        this._create());
    }
    var o = document.documentElement.style,
      n = "string" == typeof o.transition ? "transition" : "WebkitTransition",
      s = "string" == typeof o.transform ? "transform" : "WebkitTransform",
      r = {
        WebkitTransition: "webkitTransitionEnd",
        transition: "transitionend",
      }[n],
      a = {
        transform: s,
        transition: n,
        transitionDuration: n + "Duration",
        transitionProperty: n + "Property",
        transitionDelay: n + "Delay",
      },
      u = (i.prototype = Object.create(t.prototype));
    (u.constructor = i),
      (u._create = function () {
        (this._transn = { ingProperties: {}, clean: {}, onEnd: {} }),
          this.css({ position: "absolute" });
      }),
      (u.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t);
      }),
      (u.getSize = function () {
        this.size = e(this.element);
      }),
      (u.css = function (t) {
        var e = this.element.style;
        for (var i in t) {
          e[a[i] || i] = t[i];
        }
      }),
      (u.getPosition = function () {
        var t = getComputedStyle(this.element),
          e = this.layout._getOption("originLeft"),
          i = this.layout._getOption("originTop"),
          o = t[e ? "left" : "right"],
          n = t[i ? "top" : "bottom"],
          s = parseFloat(o),
          r = parseFloat(n),
          a = this.layout.size;
        -1 != o.indexOf("%") && (s = (s / 100) * a.width),
          -1 != n.indexOf("%") && (r = (r / 100) * a.height),
          (s = isNaN(s) ? 0 : s),
          (r = isNaN(r) ? 0 : r),
          (s -= e ? a.paddingLeft : a.paddingRight),
          (r -= i ? a.paddingTop : a.paddingBottom),
          (this.position.x = s),
          (this.position.y = r);
      }),
      (u.layoutPosition = function () {
        var t = this.layout.size,
          e = {},
          i = this.layout._getOption("originLeft"),
          o = this.layout._getOption("originTop"),
          n = i ? "paddingLeft" : "paddingRight",
          s = i ? "left" : "right",
          r = i ? "right" : "left",
          a = this.position.x + t[n];
        (e[s] = this.getXValue(a)), (e[r] = "");
        var u = o ? "paddingTop" : "paddingBottom",
          h = o ? "top" : "bottom",
          l = o ? "bottom" : "top",
          d = this.position.y + t[u];
        (e[h] = this.getYValue(d)),
          (e[l] = ""),
          this.css(e),
          this.emitEvent("layout", [this]);
      }),
      (u.getXValue = function (t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && !e
          ? (t / this.layout.size.width) * 100 + "%"
          : t + "px";
      }),
      (u.getYValue = function (t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && e
          ? (t / this.layout.size.height) * 100 + "%"
          : t + "px";
      }),
      (u._transitionTo = function (t, e) {
        this.getPosition();
        var i = this.position.x,
          o = this.position.y,
          n = t == this.position.x && e == this.position.y;
        if ((this.setPosition(t, e), !n || this.isTransitioning)) {
          var s = t - i,
            r = e - o,
            a = {};
          (a.transform = this.getTranslate(s, r)),
            this.transition({
              to: a,
              onTransitionEnd: { transform: this.layoutPosition },
              isCleaning: !0,
            });
        } else this.layoutPosition();
      }),
      (u.getTranslate = function (t, e) {
        return (
          "translate3d(" +
          (t = this.layout._getOption("originLeft") ? t : -t) +
          "px, " +
          (e = this.layout._getOption("originTop") ? e : -e) +
          "px, 0)"
        );
      }),
      (u.goTo = function (t, e) {
        this.setPosition(t, e), this.layoutPosition();
      }),
      (u.moveTo = u._transitionTo),
      (u.setPosition = function (t, e) {
        (this.position.x = parseFloat(t)), (this.position.y = parseFloat(e));
      }),
      (u._nonTransition = function (t) {
        for (var e in (this.css(t.to),
        t.isCleaning && this._removeStyles(t.to),
        t.onTransitionEnd))
          t.onTransitionEnd[e].call(this);
      }),
      (u.transition = function (t) {
        if (parseFloat(this.layout.options.transitionDuration)) {
          var e = this._transn;
          for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
          for (i in t.to)
            (e.ingProperties[i] = !0), t.isCleaning && (e.clean[i] = !0);
          if (t.from) {
            this.css(t.from);
            this.element.offsetHeight;
            null;
          }
          this.enableTransition(t.to),
            this.css(t.to),
            (this.isTransitioning = !0);
        } else this._nonTransition(t);
      });
    var h =
      "opacity," +
      (function (t) {
        return t.replace(/([A-Z])/g, function (t) {
          return "-" + t.toLowerCase();
        });
      })(s);
    (u.enableTransition = function () {
      if (!this.isTransitioning) {
        var t = this.layout.options.transitionDuration;
        (t = "number" == typeof t ? t + "ms" : t),
          this.css({
            transitionProperty: h,
            transitionDuration: t,
            transitionDelay: this.staggerDelay || 0,
          }),
          this.element.addEventListener(r, this, !1);
      }
    }),
      (u.onwebkitTransitionEnd = function (t) {
        this.ontransitionend(t);
      }),
      (u.onotransitionend = function (t) {
        this.ontransitionend(t);
      });
    var l = { "-webkit-transform": "transform" };
    (u.ontransitionend = function (t) {
      if (t.target === this.element) {
        var e = this._transn,
          i = l[t.propertyName] || t.propertyName;
        if (
          (delete e.ingProperties[i],
          (function (t) {
            for (var e in t) return !1;
            return !0;
          })(e.ingProperties) && this.disableTransition(),
          i in e.clean &&
            ((this.element.style[t.propertyName] = ""), delete e.clean[i]),
          i in e.onEnd)
        )
          e.onEnd[i].call(this), delete e.onEnd[i];
        this.emitEvent("transitionEnd", [this]);
      }
    }),
      (u.disableTransition = function () {
        this.removeTransitionStyles(),
          this.element.removeEventListener(r, this, !1),
          (this.isTransitioning = !1);
      }),
      (u._removeStyles = function (t) {
        var e = {};
        for (var i in t) e[i] = "";
        this.css(e);
      });
    var d = {
      transitionProperty: "",
      transitionDuration: "",
      transitionDelay: "",
    };
    return (
      (u.removeTransitionStyles = function () {
        this.css(d);
      }),
      (u.stagger = function (t) {
        (t = isNaN(t) ? 0 : t), (this.staggerDelay = t + "ms");
      }),
      (u.removeElem = function () {
        this.element.parentNode.removeChild(this.element),
          this.css({ display: "" }),
          this.emitEvent("remove", [this]);
      }),
      (u.remove = function () {
        return n && parseFloat(this.layout.options.transitionDuration)
          ? (this.once("transitionEnd", function () {
              this.removeElem();
            }),
            void this.hide())
          : void this.removeElem();
      }),
      (u.reveal = function () {
        delete this.isHidden, this.css({ display: "" });
        var t = this.layout.options,
          e = {};
        (e[this.getHideRevealTransitionEndProperty("visibleStyle")] =
          this.onRevealTransitionEnd),
          this.transition({
            from: t.hiddenStyle,
            to: t.visibleStyle,
            isCleaning: !0,
            onTransitionEnd: e,
          });
      }),
      (u.onRevealTransitionEnd = function () {
        this.isHidden || this.emitEvent("reveal");
      }),
      (u.getHideRevealTransitionEndProperty = function (t) {
        var e = this.layout.options[t];
        if (e.opacity) return "opacity";
        for (var i in e) return i;
      }),
      (u.hide = function () {
        (this.isHidden = !0), this.css({ display: "" });
        var t = this.layout.options,
          e = {};
        (e[this.getHideRevealTransitionEndProperty("hiddenStyle")] =
          this.onHideTransitionEnd),
          this.transition({
            from: t.visibleStyle,
            to: t.hiddenStyle,
            isCleaning: !0,
            onTransitionEnd: e,
          });
      }),
      (u.onHideTransitionEnd = function () {
        this.isHidden &&
          (this.css({ display: "none" }), this.emitEvent("hide"));
      }),
      (u.destroy = function () {
        this.css({
          position: "",
          left: "",
          right: "",
          top: "",
          bottom: "",
          transition: "",
          transform: "",
        });
      }),
      i
    );
  }),
  (function (t, e) {
    "use strict";
    "function" == typeof define && define.amd
      ? define(
          "outlayer/outlayer",
          [
            "ev-emitter/ev-emitter",
            "get-size/get-size",
            "fizzy-ui-utils/utils",
            "./item",
          ],
          function (i, o, n, s) {
            return e(t, i, o, n, s);
          }
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(
          t,
          require("ev-emitter"),
          require("get-size"),
          require("fizzy-ui-utils"),
          require("./item")
        ))
      : (t.Outlayer = e(
          t,
          t.EvEmitter,
          t.getSize,
          t.fizzyUIUtils,
          t.Outlayer.Item
        ));
  })(window, function (t, e, i, o, n) {
    "use strict";
    function s(t, e) {
      var i = o.getQueryElement(t);
      if (i) {
        (this.element = i),
          u && (this.$element = u(this.element)),
          (this.options = o.extend({}, this.constructor.defaults)),
          this.option(e);
        var n = ++l;
        (this.element.outlayerGUID = n),
          (d[n] = this),
          this._create(),
          this._getOption("initLayout") && this.layout();
      } else a && a.error("Bad element for " + this.constructor.namespace + ": " + (i || t));
    }
    function r(t) {
      function e() {
        t.apply(this, arguments);
      }
      return (
        (e.prototype = Object.create(t.prototype)),
        (e.prototype.constructor = e),
        e
      );
    }
    var a = t.console,
      u = t.jQuery,
      h = function () {},
      l = 0,
      d = {};
    (s.namespace = "outlayer"),
      (s.Item = n),
      (s.defaults = {
        containerStyle: { position: "relative" },
        initLayout: !0,
        originLeft: !0,
        originTop: !0,
        resize: !0,
        resizeContainer: !0,
        transitionDuration: "0.4s",
        hiddenStyle: { opacity: 0, transform: "scale(0.001)" },
        visibleStyle: { opacity: 1, transform: "scale(1)" },
      });
    var f = s.prototype;
    o.extend(f, e.prototype),
      (f.option = function (t) {
        o.extend(this.options, t);
      }),
      (f._getOption = function (t) {
        var e = this.constructor.compatOptions[t];
        return e && void 0 !== this.options[e]
          ? this.options[e]
          : this.options[t];
      }),
      (s.compatOptions = {
        initLayout: "isInitLayout",
        horizontal: "isHorizontal",
        layoutInstant: "isLayoutInstant",
        originLeft: "isOriginLeft",
        originTop: "isOriginTop",
        resize: "isResizeBound",
        resizeContainer: "isResizingContainer",
      }),
      (f._create = function () {
        this.reloadItems(),
          (this.stamps = []),
          this.stamp(this.options.stamp),
          o.extend(this.element.style, this.options.containerStyle),
          this._getOption("resize") && this.bindResize();
      }),
      (f.reloadItems = function () {
        this.items = this._itemize(this.element.children);
      }),
      (f._itemize = function (t) {
        for (
          var e = this._filterFindItemElements(t),
            i = this.constructor.Item,
            o = [],
            n = 0;
          n < e.length;
          n++
        ) {
          var s = new i(e[n], this);
          o.push(s);
        }
        return o;
      }),
      (f._filterFindItemElements = function (t) {
        return o.filterFindElements(t, this.options.itemSelector);
      }),
      (f.getItemElements = function () {
        return this.items.map(function (t) {
          return t.element;
        });
      }),
      (f.layout = function () {
        this._resetLayout(), this._manageStamps();
        var t = this._getOption("layoutInstant"),
          e = void 0 !== t ? t : !this._isLayoutInited;
        this.layoutItems(this.items, e), (this._isLayoutInited = !0);
      }),
      (f._init = f.layout),
      (f._resetLayout = function () {
        this.getSize();
      }),
      (f.getSize = function () {
        this.size = i(this.element);
      }),
      (f._getMeasurement = function (t, e) {
        var o,
          n = this.options[t];
        n
          ? ("string" == typeof n
              ? (o = this.element.querySelector(n))
              : n instanceof HTMLElement && (o = n),
            (this[t] = o ? i(o)[e] : n))
          : (this[t] = 0);
      }),
      (f.layoutItems = function (t, e) {
        (t = this._getItemsForLayout(t)),
          this._layoutItems(t, e),
          this._postLayout();
      }),
      (f._getItemsForLayout = function (t) {
        return t.filter(function (t) {
          return !t.isIgnored;
        });
      }),
      (f._layoutItems = function (t, e) {
        if ((this._emitCompleteOnItems("layout", t), t && t.length)) {
          var i = [];
          t.forEach(function (t) {
            var o = this._getItemLayoutPosition(t);
            (o.item = t), (o.isInstant = e || t.isLayoutInstant), i.push(o);
          }, this),
            this._processLayoutQueue(i);
        }
      }),
      (f._getItemLayoutPosition = function () {
        return { x: 0, y: 0 };
      }),
      (f._processLayoutQueue = function (t) {
        this.updateStagger(),
          t.forEach(function (t, e) {
            this._positionItem(t.item, t.x, t.y, t.isInstant, e);
          }, this);
      }),
      (f.updateStagger = function () {
        var t = this.options.stagger;
        return null == t
          ? void (this.stagger = 0)
          : ((this.stagger = (function (t) {
              if ("number" == typeof t) return t;
              var e = t.match(/(^\d*\.?\d*)(\w*)/),
                i = e && e[1],
                o = e && e[2];
              return i.length ? (i = parseFloat(i)) * (c[o] || 1) : 0;
            })(t)),
            this.stagger);
      }),
      (f._positionItem = function (t, e, i, o, n) {
        o ? t.goTo(e, i) : (t.stagger(n * this.stagger), t.moveTo(e, i));
      }),
      (f._postLayout = function () {
        this.resizeContainer();
      }),
      (f.resizeContainer = function () {
        if (this._getOption("resizeContainer")) {
          var t = this._getContainerSize();
          t &&
            (this._setContainerMeasure(t.width, !0),
            this._setContainerMeasure(t.height, !1));
        }
      }),
      (f._getContainerSize = h),
      (f._setContainerMeasure = function (t, e) {
        if (void 0 !== t) {
          var i = this.size;
          i.isBorderBox &&
            (t += e
              ? i.paddingLeft +
                i.paddingRight +
                i.borderLeftWidth +
                i.borderRightWidth
              : i.paddingBottom +
                i.paddingTop +
                i.borderTopWidth +
                i.borderBottomWidth),
            (t = Math.max(t, 0)),
            (this.element.style[e ? "width" : "height"] = t + "px");
        }
      }),
      (f._emitCompleteOnItems = function (t, e) {
        function i() {
          n.dispatchEvent(t + "Complete", null, [e]);
        }
        function o() {
          ++r == s && i();
        }
        var n = this,
          s = e.length;
        if (e && s) {
          var r = 0;
          e.forEach(function (e) {
            e.once(t, o);
          });
        } else i();
      }),
      (f.dispatchEvent = function (t, e, i) {
        var o = e ? [e].concat(i) : i;
        if ((this.emitEvent(t, o), u))
          if (((this.$element = this.$element || u(this.element)), e)) {
            var n = u.Event(e);
            (n.type = t), this.$element.trigger(n, i);
          } else this.$element.trigger(t, i);
      }),
      (f.ignore = function (t) {
        var e = this.getItem(t);
        e && (e.isIgnored = !0);
      }),
      (f.unignore = function (t) {
        var e = this.getItem(t);
        e && delete e.isIgnored;
      }),
      (f.stamp = function (t) {
        (t = this._find(t)) &&
          ((this.stamps = this.stamps.concat(t)), t.forEach(this.ignore, this));
      }),
      (f.unstamp = function (t) {
        (t = this._find(t)) &&
          t.forEach(function (t) {
            o.removeFrom(this.stamps, t), this.unignore(t);
          }, this);
      }),
      (f._find = function (t) {
        if (t)
          return (
            "string" == typeof t && (t = this.element.querySelectorAll(t)),
            o.makeArray(t)
          );
      }),
      (f._manageStamps = function () {
        this.stamps &&
          this.stamps.length &&
          (this._getBoundingRect(),
          this.stamps.forEach(this._manageStamp, this));
      }),
      (f._getBoundingRect = function () {
        var t = this.element.getBoundingClientRect(),
          e = this.size;
        this._boundingRect = {
          left: t.left + e.paddingLeft + e.borderLeftWidth,
          top: t.top + e.paddingTop + e.borderTopWidth,
          right: t.right - (e.paddingRight + e.borderRightWidth),
          bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth),
        };
      }),
      (f._manageStamp = h),
      (f._getElementOffset = function (t) {
        var e = t.getBoundingClientRect(),
          o = this._boundingRect,
          n = i(t);
        return {
          left: e.left - o.left - n.marginLeft,
          top: e.top - o.top - n.marginTop,
          right: o.right - e.right - n.marginRight,
          bottom: o.bottom - e.bottom - n.marginBottom,
        };
      }),
      (f.handleEvent = o.handleEvent),
      (f.bindResize = function () {
        t.addEventListener("resize", this), (this.isResizeBound = !0);
      }),
      (f.unbindResize = function () {
        t.removeEventListener("resize", this), (this.isResizeBound = !1);
      }),
      (f.onresize = function () {
        this.resize();
      }),
      o.debounceMethod(s, "onresize", 100),
      (f.resize = function () {
        this.isResizeBound && this.needsResizeLayout() && this.layout();
      }),
      (f.needsResizeLayout = function () {
        var t = i(this.element);
        return this.size && t && t.innerWidth !== this.size.innerWidth;
      }),
      (f.addItems = function (t) {
        var e = this._itemize(t);
        return e.length && (this.items = this.items.concat(e)), e;
      }),
      (f.appended = function (t) {
        var e = this.addItems(t);
        e.length && (this.layoutItems(e, !0), this.reveal(e));
      }),
      (f.prepended = function (t) {
        var e = this._itemize(t);
        if (e.length) {
          var i = this.items.slice(0);
          (this.items = e.concat(i)),
            this._resetLayout(),
            this._manageStamps(),
            this.layoutItems(e, !0),
            this.reveal(e),
            this.layoutItems(i);
        }
      }),
      (f.reveal = function (t) {
        if ((this._emitCompleteOnItems("reveal", t), t && t.length)) {
          var e = this.updateStagger();
          t.forEach(function (t, i) {
            t.stagger(i * e), t.reveal();
          });
        }
      }),
      (f.hide = function (t) {
        if ((this._emitCompleteOnItems("hide", t), t && t.length)) {
          var e = this.updateStagger();
          t.forEach(function (t, i) {
            t.stagger(i * e), t.hide();
          });
        }
      }),
      (f.revealItemElements = function (t) {
        var e = this.getItems(t);
        this.reveal(e);
      }),
      (f.hideItemElements = function (t) {
        var e = this.getItems(t);
        this.hide(e);
      }),
      (f.getItem = function (t) {
        for (var e = 0; e < this.items.length; e++) {
          var i = this.items[e];
          if (i.element == t) return i;
        }
      }),
      (f.getItems = function (t) {
        t = o.makeArray(t);
        var e = [];
        return (
          t.forEach(function (t) {
            var i = this.getItem(t);
            i && e.push(i);
          }, this),
          e
        );
      }),
      (f.remove = function (t) {
        var e = this.getItems(t);
        this._emitCompleteOnItems("remove", e),
          e &&
            e.length &&
            e.forEach(function (t) {
              t.remove(), o.removeFrom(this.items, t);
            }, this);
      }),
      (f.destroy = function () {
        var t = this.element.style;
        (t.height = ""),
          (t.position = ""),
          (t.width = ""),
          this.items.forEach(function (t) {
            t.destroy();
          }),
          this.unbindResize();
        var e = this.element.outlayerGUID;
        delete d[e],
          delete this.element.outlayerGUID,
          u && u.removeData(this.element, this.constructor.namespace);
      }),
      (s.data = function (t) {
        var e = (t = o.getQueryElement(t)) && t.outlayerGUID;
        return e && d[e];
      }),
      (s.create = function (t, e) {
        var i = r(s);
        return (
          (i.defaults = o.extend({}, s.defaults)),
          o.extend(i.defaults, e),
          (i.compatOptions = o.extend({}, s.compatOptions)),
          (i.namespace = t),
          (i.data = s.data),
          (i.Item = r(n)),
          o.htmlInit(i, t),
          u && u.bridget && u.bridget(t, i),
          i
        );
      });
    var c = { ms: 1, s: 1e3 };
    return (s.Item = n), s;
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("isotope-layout/js/item", ["outlayer/outlayer"], e)
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("outlayer")))
      : ((t.Isotope = t.Isotope || {}), (t.Isotope.Item = e(t.Outlayer)));
  })(window, function (t) {
    "use strict";
    function e() {
      t.Item.apply(this, arguments);
    }
    var i = (e.prototype = Object.create(t.Item.prototype)),
      o = i._create;
    (i._create = function () {
      (this.id = this.layout.itemGUID++), o.call(this), (this.sortData = {});
    }),
      (i.updateSortData = function () {
        if (!this.isIgnored) {
          (this.sortData.id = this.id),
            (this.sortData["original-order"] = this.id),
            (this.sortData.random = Math.random());
          var t = this.layout.options.getSortData,
            e = this.layout._sorters;
          for (var i in t) {
            var o = e[i];
            this.sortData[i] = o(this.element, this);
          }
        }
      });
    var n = i.destroy;
    return (
      (i.destroy = function () {
        n.apply(this, arguments), this.css({ display: "" });
      }),
      e
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "isotope-layout/js/layout-mode",
          ["get-size/get-size", "outlayer/outlayer"],
          e
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("get-size"), require("outlayer")))
      : ((t.Isotope = t.Isotope || {}),
        (t.Isotope.LayoutMode = e(t.getSize, t.Outlayer)));
  })(window, function (t, e) {
    "use strict";
    function i(t) {
      (this.isotope = t),
        t &&
          ((this.options = t.options[this.namespace]),
          (this.element = t.element),
          (this.items = t.filteredItems),
          (this.size = t.size));
    }
    var o = i.prototype;
    return (
      [
        "_resetLayout",
        "_getItemLayoutPosition",
        "_manageStamp",
        "_getContainerSize",
        "_getElementOffset",
        "needsResizeLayout",
        "_getOption",
      ].forEach(function (t) {
        o[t] = function () {
          return e.prototype[t].apply(this.isotope, arguments);
        };
      }),
      (o.needsVerticalResizeLayout = function () {
        var e = t(this.isotope.element);
        return (
          this.isotope.size &&
          e &&
          e.innerHeight != this.isotope.size.innerHeight
        );
      }),
      (o._getMeasurement = function () {
        this.isotope._getMeasurement.apply(this, arguments);
      }),
      (o.getColumnWidth = function () {
        this.getSegmentSize("column", "Width");
      }),
      (o.getRowHeight = function () {
        this.getSegmentSize("row", "Height");
      }),
      (o.getSegmentSize = function (t, e) {
        var i = t + e,
          o = "outer" + e;
        if ((this._getMeasurement(i, o), !this[i])) {
          var n = this.getFirstItemSize();
          this[i] = (n && n[o]) || this.isotope.size["inner" + e];
        }
      }),
      (o.getFirstItemSize = function () {
        var e = this.isotope.filteredItems[0];
        return e && e.element && t(e.element);
      }),
      (o.layout = function () {
        this.isotope.layout.apply(this.isotope, arguments);
      }),
      (o.getSize = function () {
        this.isotope.getSize(), (this.size = this.isotope.size);
      }),
      (i.modes = {}),
      (i.create = function (t, e) {
        function n() {
          i.apply(this, arguments);
        }
        return (
          (n.prototype = Object.create(o)),
          (n.prototype.constructor = n),
          e && (n.options = e),
          (n.prototype.namespace = t),
          (i.modes[t] = n),
          n
        );
      }),
      i
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "masonry-layout/masonry",
          ["outlayer/outlayer", "get-size/get-size"],
          e
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("outlayer"), require("get-size")))
      : (t.Masonry = e(t.Outlayer, t.getSize));
  })(window, function (t, e) {
    var i = t.create("masonry");
    i.compatOptions.fitWidth = "isFitWidth";
    var o = i.prototype;
    return (
      (o._resetLayout = function () {
        this.getSize(),
          this._getMeasurement("columnWidth", "outerWidth"),
          this._getMeasurement("gutter", "outerWidth"),
          this.measureColumns(),
          (this.colYs = []);
        for (var t = 0; t < this.cols; t++) this.colYs.push(0);
        (this.maxY = 0), (this.horizontalColIndex = 0);
      }),
      (o.measureColumns = function () {
        if ((this.getContainerWidth(), !this.columnWidth)) {
          var t = this.items[0],
            i = t && t.element;
          this.columnWidth = (i && e(i).outerWidth) || this.containerWidth;
        }
        var o = (this.columnWidth += this.gutter),
          n = this.containerWidth + this.gutter,
          s = n / o,
          r = o - (n % o);
        (s = Math[r && r < 1 ? "round" : "floor"](s)),
          (this.cols = Math.max(s, 1));
      }),
      (o.getContainerWidth = function () {
        var t = this._getOption("fitWidth")
            ? this.element.parentNode
            : this.element,
          i = e(t);
        this.containerWidth = i && i.innerWidth;
      }),
      (o._getItemLayoutPosition = function (t) {
        t.getSize();
        var e = t.size.outerWidth % this.columnWidth,
          i = Math[e && e < 1 ? "round" : "ceil"](
            t.size.outerWidth / this.columnWidth
          );
        i = Math.min(i, this.cols);
        for (
          var o = this[
              this.options.horizontalOrder
                ? "_getHorizontalColPosition"
                : "_getTopColPosition"
            ](i, t),
            n = { x: this.columnWidth * o.col, y: o.y },
            s = o.y + t.size.outerHeight,
            r = i + o.col,
            a = o.col;
          a < r;
          a++
        )
          this.colYs[a] = s;
        return n;
      }),
      (o._getTopColPosition = function (t) {
        var e = this._getTopColGroup(t),
          i = Math.min.apply(Math, e);
        return { col: e.indexOf(i), y: i };
      }),
      (o._getTopColGroup = function (t) {
        if (t < 2) return this.colYs;
        for (var e = [], i = this.cols + 1 - t, o = 0; o < i; o++)
          e[o] = this._getColGroupY(o, t);
        return e;
      }),
      (o._getColGroupY = function (t, e) {
        if (e < 2) return this.colYs[t];
        var i = this.colYs.slice(t, t + e);
        return Math.max.apply(Math, i);
      }),
      (o._getHorizontalColPosition = function (t, e) {
        var i = this.horizontalColIndex % this.cols;
        i = t > 1 && i + t > this.cols ? 0 : i;
        var o = e.size.outerWidth && e.size.outerHeight;
        return (
          (this.horizontalColIndex = o ? i + t : this.horizontalColIndex),
          { col: i, y: this._getColGroupY(i, t) }
        );
      }),
      (o._manageStamp = function (t) {
        var i = e(t),
          o = this._getElementOffset(t),
          n = this._getOption("originLeft") ? o.left : o.right,
          s = n + i.outerWidth,
          r = Math.floor(n / this.columnWidth);
        r = Math.max(0, r);
        var a = Math.floor(s / this.columnWidth);
        (a -= s % this.columnWidth ? 0 : 1), (a = Math.min(this.cols - 1, a));
        for (
          var u =
              (this._getOption("originTop") ? o.top : o.bottom) + i.outerHeight,
            h = r;
          h <= a;
          h++
        )
          this.colYs[h] = Math.max(u, this.colYs[h]);
      }),
      (o._getContainerSize = function () {
        this.maxY = Math.max.apply(Math, this.colYs);
        var t = { height: this.maxY };
        return (
          this._getOption("fitWidth") &&
            (t.width = this._getContainerFitWidth()),
          t
        );
      }),
      (o._getContainerFitWidth = function () {
        for (var t = 0, e = this.cols; --e && 0 === this.colYs[e]; ) t++;
        return (this.cols - t) * this.columnWidth - this.gutter;
      }),
      (o.needsResizeLayout = function () {
        var t = this.containerWidth;
        return this.getContainerWidth(), t != this.containerWidth;
      }),
      i
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "isotope-layout/js/layout-modes/masonry",
          ["../layout-mode", "masonry-layout/masonry"],
          e
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(
          require("../layout-mode"),
          require("masonry-layout")
        ))
      : e(t.Isotope.LayoutMode, t.Masonry);
  })(window, function (t, e) {
    "use strict";
    var i = t.create("masonry"),
      o = i.prototype,
      n = { _getElementOffset: !0, layout: !0, _getMeasurement: !0 };
    for (var s in e.prototype) n[s] || (o[s] = e.prototype[s]);
    var r = o.measureColumns;
    o.measureColumns = function () {
      (this.items = this.isotope.filteredItems), r.call(this);
    };
    var a = o._getOption;
    return (
      (o._getOption = function (t) {
        return "fitWidth" == t
          ? void 0 !== this.options.isFitWidth
            ? this.options.isFitWidth
            : this.options.fitWidth
          : a.apply(this.isotope, arguments);
      }),
      i
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("isotope-layout/js/layout-modes/fit-rows", ["../layout-mode"], e)
      : "object" == typeof exports
      ? (module.exports = e(require("../layout-mode")))
      : e(t.Isotope.LayoutMode);
  })(window, function (t) {
    "use strict";
    var e = t.create("fitRows"),
      i = e.prototype;
    return (
      (i._resetLayout = function () {
        (this.x = 0),
          (this.y = 0),
          (this.maxY = 0),
          this._getMeasurement("gutter", "outerWidth");
      }),
      (i._getItemLayoutPosition = function (t) {
        t.getSize();
        var e = t.size.outerWidth + this.gutter,
          i = this.isotope.size.innerWidth + this.gutter;
        0 !== this.x && e + this.x > i && ((this.x = 0), (this.y = this.maxY));
        var o = { x: this.x, y: this.y };
        return (
          (this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight)),
          (this.x += e),
          o
        );
      }),
      (i._getContainerSize = function () {
        return { height: this.maxY };
      }),
      e
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("isotope-layout/js/layout-modes/vertical", ["../layout-mode"], e)
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("../layout-mode")))
      : e(t.Isotope.LayoutMode);
  })(window, function (t) {
    "use strict";
    var e = t.create("vertical", { horizontalAlignment: 0 }),
      i = e.prototype;
    return (
      (i._resetLayout = function () {
        this.y = 0;
      }),
      (i._getItemLayoutPosition = function (t) {
        t.getSize();
        var e =
            (this.isotope.size.innerWidth - t.size.outerWidth) *
            this.options.horizontalAlignment,
          i = this.y;
        return (this.y += t.size.outerHeight), { x: e, y: i };
      }),
      (i._getContainerSize = function () {
        return { height: this.y };
      }),
      e
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          [
            "outlayer/outlayer",
            "get-size/get-size",
            "desandro-matches-selector/matches-selector",
            "fizzy-ui-utils/utils",
            "isotope-layout/js/item",
            "isotope-layout/js/layout-mode",
            "isotope-layout/js/layout-modes/masonry",
            "isotope-layout/js/layout-modes/fit-rows",
            "isotope-layout/js/layout-modes/vertical",
          ],
          function (i, o, n, s, r, a) {
            return e(t, i, o, n, s, r, a);
          }
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(
          t,
          require("outlayer"),
          require("get-size"),
          require("desandro-matches-selector"),
          require("fizzy-ui-utils"),
          require("isotope-layout/js/item"),
          require("isotope-layout/js/layout-mode"),
          require("isotope-layout/js/layout-modes/masonry"),
          require("isotope-layout/js/layout-modes/fit-rows"),
          require("isotope-layout/js/layout-modes/vertical")
        ))
      : (t.Isotope = e(
          t,
          t.Outlayer,
          t.getSize,
          t.matchesSelector,
          t.fizzyUIUtils,
          t.Isotope.Item,
          t.Isotope.LayoutMode
        ));
  })(window, function (t, e, i, o, n, s, r) {
    var a = t.jQuery,
      u = String.prototype.trim
        ? function (t) {
            return t.trim();
          }
        : function (t) {
            return t.replace(/^\s+|\s+$/g, "");
          },
      h = e.create("isotope", {
        layoutMode: "masonry",
        isJQueryFiltering: !0,
        sortAscending: !0,
      });
    (h.Item = s), (h.LayoutMode = r);
    var l = h.prototype;
    (l._create = function () {
      for (var t in ((this.itemGUID = 0),
      (this._sorters = {}),
      this._getSorters(),
      e.prototype._create.call(this),
      (this.modes = {}),
      (this.filteredItems = this.items),
      (this.sortHistory = ["original-order"]),
      r.modes))
        this._initLayoutMode(t);
    }),
      (l.reloadItems = function () {
        (this.itemGUID = 0), e.prototype.reloadItems.call(this);
      }),
      (l._itemize = function () {
        for (
          var t = e.prototype._itemize.apply(this, arguments), i = 0;
          i < t.length;
          i++
        ) {
          t[i].id = this.itemGUID++;
        }
        return this._updateItemsSortData(t), t;
      }),
      (l._initLayoutMode = function (t) {
        var e = r.modes[t],
          i = this.options[t] || {};
        (this.options[t] = e.options ? n.extend(e.options, i) : i),
          (this.modes[t] = new e(this));
      }),
      (l.layout = function () {
        return !this._isLayoutInited && this._getOption("initLayout")
          ? void this.arrange()
          : void this._layout();
      }),
      (l._layout = function () {
        var t = this._getIsInstant();
        this._resetLayout(),
          this._manageStamps(),
          this.layoutItems(this.filteredItems, t),
          (this._isLayoutInited = !0);
      }),
      (l.arrange = function (t) {
        this.option(t), this._getIsInstant();
        var e = this._filter(this.items);
        (this.filteredItems = e.matches),
          this._bindArrangeComplete(),
          this._isInstant
            ? this._noTransition(this._hideReveal, [e])
            : this._hideReveal(e),
          this._sort(),
          this._layout();
      }),
      (l._init = l.arrange),
      (l._hideReveal = function (t) {
        this.reveal(t.needReveal), this.hide(t.needHide);
      }),
      (l._getIsInstant = function () {
        var t = this._getOption("layoutInstant"),
          e = void 0 !== t ? t : !this._isLayoutInited;
        return (this._isInstant = e), e;
      }),
      (l._bindArrangeComplete = function () {
        function t() {
          e &&
            i &&
            o &&
            n.dispatchEvent("arrangeComplete", null, [n.filteredItems]);
        }
        var e,
          i,
          o,
          n = this;
        this.once("layoutComplete", function () {
          (e = !0), t();
        }),
          this.once("hideComplete", function () {
            (i = !0), t();
          }),
          this.once("revealComplete", function () {
            (o = !0), t();
          });
      }),
      (l._filter = function (t) {
        var e = this.options.filter;
        e = e || "*";
        for (
          var i = [], o = [], n = [], s = this._getFilterTest(e), r = 0;
          r < t.length;
          r++
        ) {
          var a = t[r];
          if (!a.isIgnored) {
            var u = s(a);
            u && i.push(a),
              u && a.isHidden ? o.push(a) : u || a.isHidden || n.push(a);
          }
        }
        return { matches: i, needReveal: o, needHide: n };
      }),
      (l._getFilterTest = function (t) {
        return a && this.options.isJQueryFiltering
          ? function (e) {
              return a(e.element).is(t);
            }
          : "function" == typeof t
          ? function (e) {
              return t(e.element);
            }
          : function (e) {
              return o(e.element, t);
            };
      }),
      (l.updateSortData = function (t) {
        var e;
        t ? ((t = n.makeArray(t)), (e = this.getItems(t))) : (e = this.items),
          this._getSorters(),
          this._updateItemsSortData(e);
      }),
      (l._getSorters = function () {
        var t = this.options.getSortData;
        for (var e in t) {
          var i = t[e];
          this._sorters[e] = d(i);
        }
      }),
      (l._updateItemsSortData = function (t) {
        for (var e = t && t.length, i = 0; e && i < e; i++) {
          t[i].updateSortData();
        }
      });
    var d = (function () {
      return function (t) {
        if ("string" != typeof t) return t;
        var e = u(t).split(" "),
          i = e[0],
          o = i.match(/^\[(.+)\]$/),
          n = (function (t, e) {
            return t
              ? function (e) {
                  return e.getAttribute(t);
                }
              : function (t) {
                  var i = t.querySelector(e);
                  return i && i.textContent;
                };
          })(o && o[1], i),
          s = h.sortDataParsers[e[1]];
        return s
          ? function (t) {
              return t && s(n(t));
            }
          : function (t) {
              return t && n(t);
            };
      };
    })();
    (h.sortDataParsers = {
      parseInt: function (t) {
        return parseInt(t, 10);
      },
      parseFloat: function (t) {
        return parseFloat(t);
      },
    }),
      (l._sort = function () {
        if (this.options.sortBy) {
          var t = n.makeArray(this.options.sortBy);
          this._getIsSameSortBy(t) ||
            (this.sortHistory = t.concat(this.sortHistory));
          var e = (function (t, e) {
            return function (i, o) {
              for (var n = 0; n < t.length; n++) {
                var s = t[n],
                  r = i.sortData[s],
                  a = o.sortData[s];
                if (r > a || r < a)
                  return (
                    (r > a ? 1 : -1) * ((void 0 !== e[s] ? e[s] : e) ? 1 : -1)
                  );
              }
              return 0;
            };
          })(this.sortHistory, this.options.sortAscending);
          this.filteredItems.sort(e);
        }
      }),
      (l._getIsSameSortBy = function (t) {
        for (var e = 0; e < t.length; e++)
          if (t[e] != this.sortHistory[e]) return !1;
        return !0;
      }),
      (l._mode = function () {
        var t = this.options.layoutMode,
          e = this.modes[t];
        if (!e) throw new Error("No layout mode: " + t);
        return (e.options = this.options[t]), e;
      }),
      (l._resetLayout = function () {
        e.prototype._resetLayout.call(this), this._mode()._resetLayout();
      }),
      (l._getItemLayoutPosition = function (t) {
        return this._mode()._getItemLayoutPosition(t);
      }),
      (l._manageStamp = function (t) {
        this._mode()._manageStamp(t);
      }),
      (l._getContainerSize = function () {
        return this._mode()._getContainerSize();
      }),
      (l.needsResizeLayout = function () {
        return this._mode().needsResizeLayout();
      }),
      (l.appended = function (t) {
        var e = this.addItems(t);
        if (e.length) {
          var i = this._filterRevealAdded(e);
          this.filteredItems = this.filteredItems.concat(i);
        }
      }),
      (l.prepended = function (t) {
        var e = this._itemize(t);
        if (e.length) {
          this._resetLayout(), this._manageStamps();
          var i = this._filterRevealAdded(e);
          this.layoutItems(this.filteredItems),
            (this.filteredItems = i.concat(this.filteredItems)),
            (this.items = e.concat(this.items));
        }
      }),
      (l._filterRevealAdded = function (t) {
        var e = this._filter(t);
        return (
          this.hide(e.needHide),
          this.reveal(e.matches),
          this.layoutItems(e.matches, !0),
          e.matches
        );
      }),
      (l.insert = function (t) {
        var e = this.addItems(t);
        if (e.length) {
          var i,
            o,
            n = e.length;
          for (i = 0; i < n; i++)
            (o = e[i]), this.element.appendChild(o.element);
          var s = this._filter(e).matches;
          for (i = 0; i < n; i++) e[i].isLayoutInstant = !0;
          for (this.arrange(), i = 0; i < n; i++) delete e[i].isLayoutInstant;
          this.reveal(s);
        }
      });
    var f = l.remove;
    return (
      (l.remove = function (t) {
        t = n.makeArray(t);
        var e = this.getItems(t);
        f.call(this, t);
        for (var i = e && e.length, o = 0; i && o < i; o++) {
          var s = e[o];
          n.removeFrom(this.filteredItems, s);
        }
      }),
      (l.shuffle = function () {
        for (var t = 0; t < this.items.length; t++) {
          this.items[t].sortData.random = Math.random();
        }
        (this.options.sortBy = "random"), this._sort(), this._layout();
      }),
      (l._noTransition = function (t, e) {
        var i = this.options.transitionDuration;
        this.options.transitionDuration = 0;
        var o = t.apply(this, e);
        return (this.options.transitionDuration = i), o;
      }),
      (l.getFilteredItemElements = function () {
        return this.filteredItems.map(function (t) {
          return t.element;
        });
      }),
      h
    );
  });
//End Isotope  JS

/*
 *
 *  AOS - Animate On Scroll JS
 *
 *  version : 2.3.1
 *
 *
 * */
!(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define([], t)
    : "object" == typeof exports
    ? (exports.AOS = t())
    : (e.AOS = t());
})(this, function () {
  return (function (e) {
    function t(n) {
      if (o[n]) return o[n].exports;
      var i = (o[n] = { exports: {}, id: n, loaded: !1 });
      return e[n].call(i.exports, i, i.exports, t), (i.loaded = !0), i.exports;
    }
    var o = {};
    return (t.m = e), (t.c = o), (t.p = "dist/"), t(0);
  })([
    function (e, t, o) {
      "use strict";
      function n(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var i =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var o = arguments[t];
              for (var n in o)
                Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n]);
            }
            return e;
          },
        r = (n(o(1)), o(6)),
        a = n(r),
        c = n(o(7)),
        u = n(o(8)),
        s = n(o(9)),
        f = n(o(10)),
        d = n(o(11)),
        l = n(o(14)),
        m = [],
        p = !1,
        b = document.all && !window.atob,
        v = {
          offset: 120,
          delay: 0,
          easing: "ease",
          duration: 400,
          disable: !1,
          once: !1,
          startEvent: "DOMContentLoaded",
          throttleDelay: 99,
          debounceDelay: 50,
          disableMutationObserver: !1,
        },
        y = function () {
          if (
            (arguments.length > 0 &&
              void 0 !== arguments[0] &&
              arguments[0] &&
              (p = !0),
            p)
          )
            return (m = (0, d.default)(m, v)), (0, f.default)(m, v.once), m;
        },
        g = function () {
          (m = (0, l.default)()), y();
        };
      e.exports = {
        init: function (e) {
          return (
            (v = i(v, e)),
            (m = (0, l.default)()),
            (function (e) {
              return (
                !0 === e ||
                ("mobile" === e && s.default.mobile()) ||
                ("phone" === e && s.default.phone()) ||
                ("tablet" === e && s.default.tablet()) ||
                ("function" == typeof e && !0 === e())
              );
            })(v.disable) || b
              ? void m.forEach(function (e, t) {
                  e.node.removeAttribute("data-aos"),
                    e.node.removeAttribute("data-aos-easing"),
                    e.node.removeAttribute("data-aos-duration"),
                    e.node.removeAttribute("data-aos-delay");
                })
              : (document
                  .querySelector("body")
                  .setAttribute("data-aos-easing", v.easing),
                document
                  .querySelector("body")
                  .setAttribute("data-aos-duration", v.duration),
                document
                  .querySelector("body")
                  .setAttribute("data-aos-delay", v.delay),
                "DOMContentLoaded" === v.startEvent &&
                ["complete", "interactive"].indexOf(document.readyState) > -1
                  ? y(!0)
                  : "load" === v.startEvent
                  ? window.addEventListener(v.startEvent, function () {
                      y(!0);
                    })
                  : document.addEventListener(v.startEvent, function () {
                      y(!0);
                    }),
                window.addEventListener(
                  "resize",
                  (0, c.default)(y, v.debounceDelay, !0)
                ),
                window.addEventListener(
                  "orientationchange",
                  (0, c.default)(y, v.debounceDelay, !0)
                ),
                window.addEventListener(
                  "scroll",
                  (0, a.default)(function () {
                    (0, f.default)(m, v.once);
                  }, v.throttleDelay)
                ),
                v.disableMutationObserver || (0, u.default)("[data-aos]", g),
                m)
          );
        },
        refresh: y,
        refreshHard: g,
      };
    },
    function (e, t) {},
    ,
    ,
    ,
    ,
    function (e, t) {
      (function (t) {
        "use strict";
        function o(e, t, o) {
          function i(t) {
            var o = d,
              n = l;
            return (d = l = void 0), (y = t), (p = e.apply(n, o));
          }
          function a(e) {
            var o = e - v;
            return void 0 === v || o >= t || o < 0 || (x && e - y >= m);
          }
          function u() {
            var e = k();
            return a(e)
              ? s(e)
              : void (b = setTimeout(
                  u,
                  (function (e) {
                    var o = t - (e - v);
                    return x ? w(o, m - (e - y)) : o;
                  })(e)
                ));
          }
          function s(e) {
            return (b = void 0), j && d ? i(e) : ((d = l = void 0), p);
          }
          function f() {
            var e = k(),
              o = a(e);
            if (((d = arguments), (l = this), (v = e), o)) {
              if (void 0 === b)
                return (function (e) {
                  return (y = e), (b = setTimeout(u, t)), g ? i(e) : p;
                })(v);
              if (x) return (b = setTimeout(u, t)), i(v);
            }
            return void 0 === b && (b = setTimeout(u, t)), p;
          }
          var d,
            l,
            m,
            p,
            b,
            v,
            y = 0,
            g = !1,
            x = !1,
            j = !0;
          if ("function" != typeof e) throw new TypeError(c);
          return (
            (t = r(t) || 0),
            n(o) &&
              ((g = !!o.leading),
              (m = (x = "maxWait" in o) ? h(r(o.maxWait) || 0, t) : m),
              (j = "trailing" in o ? !!o.trailing : j)),
            (f.cancel = function () {
              void 0 !== b && clearTimeout(b),
                (y = 0),
                (d = v = l = b = void 0);
            }),
            (f.flush = function () {
              return void 0 === b ? p : s(k());
            }),
            f
          );
        }
        function n(e) {
          var t = void 0 === e ? "undefined" : a(e);
          return !!e && ("object" == t || "function" == t);
        }
        function i(e) {
          return (
            "symbol" == (void 0 === e ? "undefined" : a(e)) ||
            ((function (e) {
              return !!e && "object" == (void 0 === e ? "undefined" : a(e));
            })(e) &&
              g.call(e) == s)
          );
        }
        function r(e) {
          if ("number" == typeof e) return e;
          if (i(e)) return u;
          if (n(e)) {
            var t = "function" == typeof e.valueOf ? e.valueOf() : e;
            e = n(t) ? t + "" : t;
          }
          if ("string" != typeof e) return 0 === e ? e : +e;
          e = e.replace(f, "");
          var o = l.test(e);
          return o || m.test(e) ? p(e.slice(2), o ? 2 : 8) : d.test(e) ? u : +e;
        }
        var a =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                },
          c = "Expected a function",
          u = NaN,
          s = "[object Symbol]",
          f = /^\s+|\s+$/g,
          d = /^[-+]0x[0-9a-f]+$/i,
          l = /^0b[01]+$/i,
          m = /^0o[0-7]+$/i,
          p = parseInt,
          b =
            "object" == (void 0 === t ? "undefined" : a(t)) &&
            t &&
            t.Object === Object &&
            t,
          v =
            "object" == ("undefined" == typeof self ? "undefined" : a(self)) &&
            self &&
            self.Object === Object &&
            self,
          y = b || v || Function("return this")(),
          g = Object.prototype.toString,
          h = Math.max,
          w = Math.min,
          k = function () {
            return y.Date.now();
          };
        e.exports = function (e, t, i) {
          var r = !0,
            a = !0;
          if ("function" != typeof e) throw new TypeError(c);
          return (
            n(i) &&
              ((r = "leading" in i ? !!i.leading : r),
              (a = "trailing" in i ? !!i.trailing : a)),
            o(e, t, { leading: r, maxWait: t, trailing: a })
          );
        };
      }.call(
        t,
        (function () {
          return this;
        })()
      ));
    },
    function (e, t) {
      (function (t) {
        "use strict";
        function o(e) {
          var t = void 0 === e ? "undefined" : r(e);
          return !!e && ("object" == t || "function" == t);
        }
        function n(e) {
          return (
            "symbol" == (void 0 === e ? "undefined" : r(e)) ||
            ((function (e) {
              return !!e && "object" == (void 0 === e ? "undefined" : r(e));
            })(e) &&
              y.call(e) == u)
          );
        }
        function i(e) {
          if ("number" == typeof e) return e;
          if (n(e)) return c;
          if (o(e)) {
            var t = "function" == typeof e.valueOf ? e.valueOf() : e;
            e = o(t) ? t + "" : t;
          }
          if ("string" != typeof e) return 0 === e ? e : +e;
          e = e.replace(s, "");
          var i = d.test(e);
          return i || l.test(e) ? m(e.slice(2), i ? 2 : 8) : f.test(e) ? c : +e;
        }
        var r =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                },
          a = "Expected a function",
          c = NaN,
          u = "[object Symbol]",
          s = /^\s+|\s+$/g,
          f = /^[-+]0x[0-9a-f]+$/i,
          d = /^0b[01]+$/i,
          l = /^0o[0-7]+$/i,
          m = parseInt,
          p =
            "object" == (void 0 === t ? "undefined" : r(t)) &&
            t &&
            t.Object === Object &&
            t,
          b =
            "object" == ("undefined" == typeof self ? "undefined" : r(self)) &&
            self &&
            self.Object === Object &&
            self,
          v = p || b || Function("return this")(),
          y = Object.prototype.toString,
          g = Math.max,
          h = Math.min,
          w = function () {
            return v.Date.now();
          };
        e.exports = function (e, t, n) {
          function r(t) {
            var o = d,
              n = l;
            return (d = l = void 0), (y = t), (p = e.apply(n, o));
          }
          function c(e) {
            var o = e - v;
            return void 0 === v || o >= t || o < 0 || (x && e - y >= m);
          }
          function u() {
            var e = w();
            return c(e)
              ? s(e)
              : void (b = setTimeout(
                  u,
                  (function (e) {
                    var o = t - (e - v);
                    return x ? h(o, m - (e - y)) : o;
                  })(e)
                ));
          }
          function s(e) {
            return (b = void 0), j && d ? r(e) : ((d = l = void 0), p);
          }
          function f() {
            var e = w(),
              o = c(e);
            if (((d = arguments), (l = this), (v = e), o)) {
              if (void 0 === b)
                return (function (e) {
                  return (y = e), (b = setTimeout(u, t)), k ? r(e) : p;
                })(v);
              if (x) return (b = setTimeout(u, t)), r(v);
            }
            return void 0 === b && (b = setTimeout(u, t)), p;
          }
          var d,
            l,
            m,
            p,
            b,
            v,
            y = 0,
            k = !1,
            x = !1,
            j = !0;
          if ("function" != typeof e) throw new TypeError(a);
          return (
            (t = i(t) || 0),
            o(n) &&
              ((k = !!n.leading),
              (m = (x = "maxWait" in n) ? g(i(n.maxWait) || 0, t) : m),
              (j = "trailing" in n ? !!n.trailing : j)),
            (f.cancel = function () {
              void 0 !== b && clearTimeout(b),
                (y = 0),
                (d = v = l = b = void 0);
            }),
            (f.flush = function () {
              return void 0 === b ? p : s(w());
            }),
            f
          );
        };
      }.call(
        t,
        (function () {
          return this;
        })()
      ));
    },
    function (e, t) {
      "use strict";
      function o(e) {
        e &&
          e.forEach(function (e) {
            var t = Array.prototype.slice.call(e.addedNodes),
              o = Array.prototype.slice.call(e.removedNodes);
            t.concat(o).filter(function (e) {
              return e.hasAttribute && e.hasAttribute("data-aos");
            }).length && r();
          });
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = window.document,
        i =
          window.MutationObserver ||
          window.WebKitMutationObserver ||
          window.MozMutationObserver,
        r = function () {};
      t.default = function (e, t) {
        var a = new i(o);
        (r = t),
          a.observe(n.documentElement, {
            childList: !0,
            subtree: !0,
            removedNodes: !0,
          });
      };
    },
    function (e, t) {
      "use strict";
      function o() {
        return navigator.userAgent || navigator.vendor || window.opera || "";
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = (function () {
          function e(e, t) {
            for (var o = 0; o < t.length; o++) {
              var n = t[o];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n);
            }
          }
          return function (t, o, n) {
            return o && e(t.prototype, o), n && e(t, n), t;
          };
        })(),
        i =
          /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
        r =
          /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
        a =
          /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
        c =
          /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
        u = (function () {
          function e() {
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, e);
          }
          return (
            n(e, [
              {
                key: "phone",
                value: function () {
                  var e = o();
                  return !(!i.test(e) && !r.test(e.substr(0, 4)));
                },
              },
              {
                key: "mobile",
                value: function () {
                  var e = o();
                  return !(!a.test(e) && !c.test(e.substr(0, 4)));
                },
              },
              {
                key: "tablet",
                value: function () {
                  return this.mobile() && !this.phone();
                },
              },
            ]),
            e
          );
        })();
      t.default = new u();
    },
    function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      t.default = function (e, t) {
        var o = window.pageYOffset,
          n = window.innerHeight;
        e.forEach(function (e, i) {
          !(function (e, t, o) {
            var n = e.node.getAttribute("data-aos-once");
            t > e.position
              ? e.node.classList.add("aos-animate")
              : void 0 !== n &&
                ("false" === n || (!o && "true" !== n)) &&
                e.node.classList.remove("aos-animate");
          })(e, n + o, t);
        });
      };
    },
    function (e, t, o) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = (function (e) {
        return e && e.__esModule ? e : { default: e };
      })(o(12));
      t.default = function (e, t) {
        return (
          e.forEach(function (e, o) {
            e.node.classList.add("aos-init"),
              (e.position = (0, n.default)(e.node, t.offset));
          }),
          e
        );
      };
    },
    function (e, t, o) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = (function (e) {
        return e && e.__esModule ? e : { default: e };
      })(o(13));
      t.default = function (e, t) {
        var o = 0,
          i = 0,
          r = window.innerHeight,
          a = {
            offset: e.getAttribute("data-aos-offset"),
            anchor: e.getAttribute("data-aos-anchor"),
            anchorPlacement: e.getAttribute("data-aos-anchor-placement"),
          };
        switch (
          (a.offset && !isNaN(a.offset) && (i = parseInt(a.offset)),
          a.anchor &&
            document.querySelectorAll(a.anchor) &&
            (e = document.querySelectorAll(a.anchor)[0]),
          (o = (0, n.default)(e).top),
          a.anchorPlacement)
        ) {
          case "top-bottom":
            break;
          case "center-bottom":
            o += e.offsetHeight / 2;
            break;
          case "bottom-bottom":
            o += e.offsetHeight;
            break;
          case "top-center":
            o += r / 2;
            break;
          case "bottom-center":
            o += r / 2 + e.offsetHeight;
            break;
          case "center-center":
            o += r / 2 + e.offsetHeight / 2;
            break;
          case "top-top":
            o += r;
            break;
          case "bottom-top":
            o += e.offsetHeight + r;
            break;
          case "center-top":
            o += e.offsetHeight / 2 + r;
        }
        return a.anchorPlacement || a.offset || isNaN(t) || (i = t), o + i;
      };
    },
    function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      t.default = function (e) {
        for (
          var t = 0, o = 0;
          e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop);

        )
          (t += e.offsetLeft - ("BODY" != e.tagName ? e.scrollLeft : 0)),
            (o += e.offsetTop - ("BODY" != e.tagName ? e.scrollTop : 0)),
            (e = e.offsetParent);
        return { top: o, left: t };
      };
    },
    function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      t.default = function (e) {
        return (
          (e = e || document.querySelectorAll("[data-aos]")),
          Array.prototype.map.call(e, function (e) {
            return { node: e };
          })
        );
      };
    },
  ]);
});

/*! jQuery UI - v1.12.1 - 2018-11-12
 * http://jqueryui.com
 * Includes: widget.js, position.js, data.js, disable-selection.js, focusable.js, form-reset-mixin.js, keycode.js, labels.js, scroll-parent.js, tabbable.js, unique-id.js, widgets/mouse.js, widgets/slider.js
 * Copyright jQuery Foundation and other contributors; Licensed MIT */
!(function (t) {
  "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery);
})(function (t) {
  (t.ui = t.ui || {}), (t.ui.version = "1.12.1");
  var e = 0,
    i = Array.prototype.slice;
  (t.cleanData = (function (e) {
    return function (i) {
      var s, n, o;
      for (o = 0; null != (n = i[o]); o++)
        try {
          (s = t._data(n, "events")) &&
            s.remove &&
            t(n).triggerHandler("remove");
        } catch (t) {}
      e(i);
    };
  })(t.cleanData)),
    (t.widget = function (e, i, s) {
      var n,
        o,
        a,
        r = {},
        l = e.split(".")[0],
        h = l + "-" + (e = e.split(".")[1]);
      return (
        s || ((s = i), (i = t.Widget)),
        t.isArray(s) && (s = t.extend.apply(null, [{}].concat(s))),
        (t.expr[":"][h.toLowerCase()] = function (e) {
          return !!t.data(e, h);
        }),
        (t[l] = t[l] || {}),
        (n = t[l][e]),
        (o = t[l][e] =
          function (t, e) {
            return this._createWidget
              ? void (arguments.length && this._createWidget(t, e))
              : new o(t, e);
          }),
        t.extend(o, n, {
          version: s.version,
          _proto: t.extend({}, s),
          _childConstructors: [],
        }),
        ((a = new i()).options = t.widget.extend({}, a.options)),
        t.each(s, function (e, s) {
          return t.isFunction(s)
            ? void (r[e] = (function () {
                function t() {
                  return i.prototype[e].apply(this, arguments);
                }
                function n(t) {
                  return i.prototype[e].apply(this, t);
                }
                return function () {
                  var e,
                    i = this._super,
                    o = this._superApply;
                  return (
                    (this._super = t),
                    (this._superApply = n),
                    (e = s.apply(this, arguments)),
                    (this._super = i),
                    (this._superApply = o),
                    e
                  );
                };
              })())
            : void (r[e] = s);
        }),
        (o.prototype = t.widget.extend(
          a,
          { widgetEventPrefix: (n && a.widgetEventPrefix) || e },
          r,
          { constructor: o, namespace: l, widgetName: e, widgetFullName: h }
        )),
        n
          ? (t.each(n._childConstructors, function (e, i) {
              var s = i.prototype;
              t.widget(s.namespace + "." + s.widgetName, o, i._proto);
            }),
            delete n._childConstructors)
          : i._childConstructors.push(o),
        t.widget.bridge(e, o),
        o
      );
    }),
    (t.widget.extend = function (e) {
      for (var s, n, o = i.call(arguments, 1), a = 0, r = o.length; r > a; a++)
        for (s in o[a])
          (n = o[a][s]),
            o[a].hasOwnProperty(s) &&
              void 0 !== n &&
              (e[s] = t.isPlainObject(n)
                ? t.isPlainObject(e[s])
                  ? t.widget.extend({}, e[s], n)
                  : t.widget.extend({}, n)
                : n);
      return e;
    }),
    (t.widget.bridge = function (e, s) {
      var n = s.prototype.widgetFullName || e;
      t.fn[e] = function (o) {
        var a = "string" == typeof o,
          r = i.call(arguments, 1),
          l = this;
        return (
          a
            ? this.length || "instance" !== o
              ? this.each(function () {
                  var i,
                    s = t.data(this, n);
                  return "instance" === o
                    ? ((l = s), !1)
                    : s
                    ? t.isFunction(s[o]) && "_" !== o.charAt(0)
                      ? (i = s[o].apply(s, r)) !== s && void 0 !== i
                        ? ((l = i && i.jquery ? l.pushStack(i.get()) : i), !1)
                        : void 0
                      : t.error(
                          "no such method '" +
                            o +
                            "' for " +
                            e +
                            " widget instance"
                        )
                    : t.error(
                        "cannot call methods on " +
                          e +
                          " prior to initialization; attempted to call method '" +
                          o +
                          "'"
                      );
                })
              : (l = void 0)
            : (r.length && (o = t.widget.extend.apply(null, [o].concat(r))),
              this.each(function () {
                var e = t.data(this, n);
                e
                  ? (e.option(o || {}), e._init && e._init())
                  : t.data(this, n, new s(o, this));
              })),
          l
        );
      };
    }),
    (t.Widget = function () {}),
    (t.Widget._childConstructors = []),
    (t.Widget.prototype = {
      widgetName: "widget",
      widgetEventPrefix: "",
      defaultElement: "<div>",
      options: { classes: {}, disabled: !1, create: null },
      _createWidget: function (i, s) {
        (s = t(s || this.defaultElement || this)[0]),
          (this.element = t(s)),
          (this.uuid = e++),
          (this.eventNamespace = "." + this.widgetName + this.uuid),
          (this.bindings = t()),
          (this.hoverable = t()),
          (this.focusable = t()),
          (this.classesElementLookup = {}),
          s !== this &&
            (t.data(s, this.widgetFullName, this),
            this._on(!0, this.element, {
              remove: function (t) {
                t.target === s && this.destroy();
              },
            }),
            (this.document = t(s.style ? s.ownerDocument : s.document || s)),
            (this.window = t(
              this.document[0].defaultView || this.document[0].parentWindow
            ))),
          (this.options = t.widget.extend(
            {},
            this.options,
            this._getCreateOptions(),
            i
          )),
          this._create(),
          this.options.disabled &&
            this._setOptionDisabled(this.options.disabled),
          this._trigger("create", null, this._getCreateEventData()),
          this._init();
      },
      _getCreateOptions: function () {
        return {};
      },
      _getCreateEventData: t.noop,
      _create: t.noop,
      _init: t.noop,
      destroy: function () {
        var e = this;
        this._destroy(),
          t.each(this.classesElementLookup, function (t, i) {
            e._removeClass(i, t);
          }),
          this.element.off(this.eventNamespace).removeData(this.widgetFullName),
          this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),
          this.bindings.off(this.eventNamespace);
      },
      _destroy: t.noop,
      widget: function () {
        return this.element;
      },
      option: function (e, i) {
        var s,
          n,
          o,
          a = e;
        if (0 === arguments.length) return t.widget.extend({}, this.options);
        if ("string" == typeof e)
          if (((a = {}), (s = e.split(".")), (e = s.shift()), s.length)) {
            for (
              n = a[e] = t.widget.extend({}, this.options[e]), o = 0;
              s.length - 1 > o;
              o++
            )
              (n[s[o]] = n[s[o]] || {}), (n = n[s[o]]);
            if (((e = s.pop()), 1 === arguments.length))
              return void 0 === n[e] ? null : n[e];
            n[e] = i;
          } else {
            if (1 === arguments.length)
              return void 0 === this.options[e] ? null : this.options[e];
            a[e] = i;
          }
        return this._setOptions(a), this;
      },
      _setOptions: function (t) {
        var e;
        for (e in t) this._setOption(e, t[e]);
        return this;
      },
      _setOption: function (t, e) {
        return (
          "classes" === t && this._setOptionClasses(e),
          (this.options[t] = e),
          "disabled" === t && this._setOptionDisabled(e),
          this
        );
      },
      _setOptionClasses: function (e) {
        var i, s, n;
        for (i in e)
          (n = this.classesElementLookup[i]),
            e[i] !== this.options.classes[i] &&
              n &&
              n.length &&
              ((s = t(n.get())),
              this._removeClass(n, i),
              s.addClass(
                this._classes({ element: s, keys: i, classes: e, add: !0 })
              ));
      },
      _setOptionDisabled: function (t) {
        this._toggleClass(
          this.widget(),
          this.widgetFullName + "-disabled",
          null,
          !!t
        ),
          t &&
            (this._removeClass(this.hoverable, null, "ui-state-hover"),
            this._removeClass(this.focusable, null, "ui-state-focus"));
      },
      enable: function () {
        return this._setOptions({ disabled: !1 });
      },
      disable: function () {
        return this._setOptions({ disabled: !0 });
      },
      _classes: function (e) {
        function i(i, o) {
          var a, r;
          for (r = 0; i.length > r; r++)
            (a = n.classesElementLookup[i[r]] || t()),
              (a = e.add
                ? t(t.unique(a.get().concat(e.element.get())))
                : t(a.not(e.element).get())),
              (n.classesElementLookup[i[r]] = a),
              s.push(i[r]),
              o && e.classes[i[r]] && s.push(e.classes[i[r]]);
        }
        var s = [],
          n = this;
        return (
          (e = t.extend(
            { element: this.element, classes: this.options.classes || {} },
            e
          )),
          this._on(e.element, { remove: "_untrackClassesElement" }),
          e.keys && i(e.keys.match(/\S+/g) || [], !0),
          e.extra && i(e.extra.match(/\S+/g) || []),
          s.join(" ")
        );
      },
      _untrackClassesElement: function (e) {
        var i = this;
        t.each(i.classesElementLookup, function (s, n) {
          -1 !== t.inArray(e.target, n) &&
            (i.classesElementLookup[s] = t(n.not(e.target).get()));
        });
      },
      _removeClass: function (t, e, i) {
        return this._toggleClass(t, e, i, !1);
      },
      _addClass: function (t, e, i) {
        return this._toggleClass(t, e, i, !0);
      },
      _toggleClass: function (t, e, i, s) {
        s = "boolean" == typeof s ? s : i;
        var n = "string" == typeof t || null === t,
          o = {
            extra: n ? e : i,
            keys: n ? t : e,
            element: n ? this.element : t,
            add: s,
          };
        return o.element.toggleClass(this._classes(o), s), this;
      },
      _on: function (e, i, s) {
        var n,
          o = this;
        "boolean" != typeof e && ((s = i), (i = e), (e = !1)),
          s
            ? ((i = n = t(i)), (this.bindings = this.bindings.add(i)))
            : ((s = i), (i = this.element), (n = this.widget())),
          t.each(s, function (s, a) {
            function r() {
              return e ||
                (!0 !== o.options.disabled &&
                  !t(this).hasClass("ui-state-disabled"))
                ? ("string" == typeof a ? o[a] : a).apply(o, arguments)
                : void 0;
            }
            "string" != typeof a &&
              (r.guid = a.guid = a.guid || r.guid || t.guid++);
            var l = s.match(/^([\w:-]*)\s*(.*)$/),
              h = l[1] + o.eventNamespace,
              u = l[2];
            u ? n.on(h, u, r) : i.on(h, r);
          });
      },
      _off: function (e, i) {
        (i =
          (i || "").split(" ").join(this.eventNamespace + " ") +
          this.eventNamespace),
          e.off(i).off(i),
          (this.bindings = t(this.bindings.not(e).get())),
          (this.focusable = t(this.focusable.not(e).get())),
          (this.hoverable = t(this.hoverable.not(e).get()));
      },
      _delay: function (t, e) {
        var i = this;
        return setTimeout(function () {
          return ("string" == typeof t ? i[t] : t).apply(i, arguments);
        }, e || 0);
      },
      _hoverable: function (e) {
        (this.hoverable = this.hoverable.add(e)),
          this._on(e, {
            mouseenter: function (e) {
              this._addClass(t(e.currentTarget), null, "ui-state-hover");
            },
            mouseleave: function (e) {
              this._removeClass(t(e.currentTarget), null, "ui-state-hover");
            },
          });
      },
      _focusable: function (e) {
        (this.focusable = this.focusable.add(e)),
          this._on(e, {
            focusin: function (e) {
              this._addClass(t(e.currentTarget), null, "ui-state-focus");
            },
            focusout: function (e) {
              this._removeClass(t(e.currentTarget), null, "ui-state-focus");
            },
          });
      },
      _trigger: function (e, i, s) {
        var n,
          o,
          a = this.options[e];
        if (
          ((s = s || {}),
          ((i = t.Event(i)).type = (
            e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e
          ).toLowerCase()),
          (i.target = this.element[0]),
          (o = i.originalEvent))
        )
          for (n in o) n in i || (i[n] = o[n]);
        return (
          this.element.trigger(i, s),
          !(
            (t.isFunction(a) &&
              !1 === a.apply(this.element[0], [i].concat(s))) ||
            i.isDefaultPrevented()
          )
        );
      },
    }),
    t.each({ show: "fadeIn", hide: "fadeOut" }, function (e, i) {
      t.Widget.prototype["_" + e] = function (s, n, o) {
        "string" == typeof n && (n = { effect: n });
        var a,
          r = n ? (!0 === n || "number" == typeof n ? i : n.effect || i) : e;
        "number" == typeof (n = n || {}) && (n = { duration: n }),
          (a = !t.isEmptyObject(n)),
          (n.complete = o),
          n.delay && s.delay(n.delay),
          a && t.effects && t.effects.effect[r]
            ? s[e](n)
            : r !== e && s[r]
            ? s[r](n.duration, n.easing, o)
            : s.queue(function (i) {
                t(this)[e](), o && o.call(s[0]), i();
              });
      };
    }),
    t.widget,
    (function () {
      function e(t, e, i) {
        return [
          parseFloat(t[0]) * (u.test(t[0]) ? e / 100 : 1),
          parseFloat(t[1]) * (u.test(t[1]) ? i / 100 : 1),
        ];
      }
      function i(e, i) {
        return parseInt(t.css(e, i), 10) || 0;
      }
      var s,
        n = Math.max,
        o = Math.abs,
        a = /left|center|right/,
        r = /top|center|bottom/,
        l = /[\+\-]\d+(\.[\d]+)?%?/,
        h = /^\w+/,
        u = /%$/,
        c = t.fn.position;
      (t.position = {
        scrollbarWidth: function () {
          if (void 0 !== s) return s;
          var e,
            i,
            n = t(
              "<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"
            ),
            o = n.children()[0];
          return (
            t("body").append(n),
            (e = o.offsetWidth),
            n.css("overflow", "scroll"),
            e === (i = o.offsetWidth) && (i = n[0].clientWidth),
            n.remove(),
            (s = e - i)
          );
        },
        getScrollInfo: function (e) {
          var i = e.isWindow || e.isDocument ? "" : e.element.css("overflow-x"),
            s = e.isWindow || e.isDocument ? "" : e.element.css("overflow-y"),
            n =
              "scroll" === i ||
              ("auto" === i && e.width < e.element[0].scrollWidth);
          return {
            width:
              "scroll" === s ||
              ("auto" === s && e.height < e.element[0].scrollHeight)
                ? t.position.scrollbarWidth()
                : 0,
            height: n ? t.position.scrollbarWidth() : 0,
          };
        },
        getWithinInfo: function (e) {
          var i = t(e || window),
            s = t.isWindow(i[0]),
            n = !!i[0] && 9 === i[0].nodeType;
          return {
            element: i,
            isWindow: s,
            isDocument: n,
            offset: !s && !n ? t(e).offset() : { left: 0, top: 0 },
            scrollLeft: i.scrollLeft(),
            scrollTop: i.scrollTop(),
            width: i.outerWidth(),
            height: i.outerHeight(),
          };
        },
      }),
        (t.fn.position = function (s) {
          if (!s || !s.of) return c.apply(this, arguments);
          s = t.extend({}, s);
          var u,
            f,
            d,
            m,
            p,
            g,
            _ = t(s.of),
            v = t.position.getWithinInfo(s.within),
            w = t.position.getScrollInfo(v),
            y = (s.collision || "flip").split(" "),
            b = {};
          return (
            (g = (function (e) {
              var i = e[0];
              return 9 === i.nodeType
                ? {
                    width: e.width(),
                    height: e.height(),
                    offset: { top: 0, left: 0 },
                  }
                : t.isWindow(i)
                ? {
                    width: e.width(),
                    height: e.height(),
                    offset: { top: e.scrollTop(), left: e.scrollLeft() },
                  }
                : i.preventDefault
                ? {
                    width: 0,
                    height: 0,
                    offset: { top: i.pageY, left: i.pageX },
                  }
                : {
                    width: e.outerWidth(),
                    height: e.outerHeight(),
                    offset: e.offset(),
                  };
            })(_)),
            _[0].preventDefault && (s.at = "left top"),
            (f = g.width),
            (d = g.height),
            (m = g.offset),
            (p = t.extend({}, m)),
            t.each(["my", "at"], function () {
              var t,
                e,
                i = (s[this] || "").split(" ");
              1 === i.length &&
                (i = a.test(i[0])
                  ? i.concat(["center"])
                  : r.test(i[0])
                  ? ["center"].concat(i)
                  : ["center", "center"]),
                (i[0] = a.test(i[0]) ? i[0] : "center"),
                (i[1] = r.test(i[1]) ? i[1] : "center"),
                (t = l.exec(i[0])),
                (e = l.exec(i[1])),
                (b[this] = [t ? t[0] : 0, e ? e[0] : 0]),
                (s[this] = [h.exec(i[0])[0], h.exec(i[1])[0]]);
            }),
            1 === y.length && (y[1] = y[0]),
            "right" === s.at[0]
              ? (p.left += f)
              : "center" === s.at[0] && (p.left += f / 2),
            "bottom" === s.at[1]
              ? (p.top += d)
              : "center" === s.at[1] && (p.top += d / 2),
            (u = e(b.at, f, d)),
            (p.left += u[0]),
            (p.top += u[1]),
            this.each(function () {
              var a,
                r,
                l = t(this),
                h = l.outerWidth(),
                c = l.outerHeight(),
                g = i(this, "marginLeft"),
                x = i(this, "marginTop"),
                M = h + g + i(this, "marginRight") + w.width,
                C = c + x + i(this, "marginBottom") + w.height,
                D = t.extend({}, p),
                k = e(b.my, l.outerWidth(), l.outerHeight());
              "right" === s.my[0]
                ? (D.left -= h)
                : "center" === s.my[0] && (D.left -= h / 2),
                "bottom" === s.my[1]
                  ? (D.top -= c)
                  : "center" === s.my[1] && (D.top -= c / 2),
                (D.left += k[0]),
                (D.top += k[1]),
                (a = { marginLeft: g, marginTop: x }),
                t.each(["left", "top"], function (e, i) {
                  t.ui.position[y[e]] &&
                    t.ui.position[y[e]][i](D, {
                      targetWidth: f,
                      targetHeight: d,
                      elemWidth: h,
                      elemHeight: c,
                      collisionPosition: a,
                      collisionWidth: M,
                      collisionHeight: C,
                      offset: [u[0] + k[0], u[1] + k[1]],
                      my: s.my,
                      at: s.at,
                      within: v,
                      elem: l,
                    });
                }),
                s.using &&
                  (r = function (t) {
                    var e = m.left - D.left,
                      i = e + f - h,
                      a = m.top - D.top,
                      r = a + d - c,
                      u = {
                        target: {
                          element: _,
                          left: m.left,
                          top: m.top,
                          width: f,
                          height: d,
                        },
                        element: {
                          element: l,
                          left: D.left,
                          top: D.top,
                          width: h,
                          height: c,
                        },
                        horizontal: 0 > i ? "left" : e > 0 ? "right" : "center",
                        vertical: 0 > r ? "top" : a > 0 ? "bottom" : "middle",
                      };
                    h > f && f > o(e + i) && (u.horizontal = "center"),
                      c > d && d > o(a + r) && (u.vertical = "middle"),
                      (u.important =
                        n(o(e), o(i)) > n(o(a), o(r))
                          ? "horizontal"
                          : "vertical"),
                      s.using.call(this, t, u);
                  }),
                l.offset(t.extend(D, { using: r }));
            })
          );
        }),
        (t.ui.position = {
          fit: {
            left: function (t, e) {
              var i,
                s = e.within,
                o = s.isWindow ? s.scrollLeft : s.offset.left,
                a = s.width,
                r = t.left - e.collisionPosition.marginLeft,
                l = o - r,
                h = r + e.collisionWidth - a - o;
              e.collisionWidth > a
                ? l > 0 && 0 >= h
                  ? ((i = t.left + l + e.collisionWidth - a - o),
                    (t.left += l - i))
                  : (t.left =
                      h > 0 && 0 >= l
                        ? o
                        : l > h
                        ? o + a - e.collisionWidth
                        : o)
                : l > 0
                ? (t.left += l)
                : h > 0
                ? (t.left -= h)
                : (t.left = n(t.left - r, t.left));
            },
            top: function (t, e) {
              var i,
                s = e.within,
                o = s.isWindow ? s.scrollTop : s.offset.top,
                a = e.within.height,
                r = t.top - e.collisionPosition.marginTop,
                l = o - r,
                h = r + e.collisionHeight - a - o;
              e.collisionHeight > a
                ? l > 0 && 0 >= h
                  ? ((i = t.top + l + e.collisionHeight - a - o),
                    (t.top += l - i))
                  : (t.top =
                      h > 0 && 0 >= l
                        ? o
                        : l > h
                        ? o + a - e.collisionHeight
                        : o)
                : l > 0
                ? (t.top += l)
                : h > 0
                ? (t.top -= h)
                : (t.top = n(t.top - r, t.top));
            },
          },
          flip: {
            left: function (t, e) {
              var i,
                s,
                n = e.within,
                a = n.offset.left + n.scrollLeft,
                r = n.width,
                l = n.isWindow ? n.scrollLeft : n.offset.left,
                h = t.left - e.collisionPosition.marginLeft,
                u = h - l,
                c = h + e.collisionWidth - r - l,
                f =
                  "left" === e.my[0]
                    ? -e.elemWidth
                    : "right" === e.my[0]
                    ? e.elemWidth
                    : 0,
                d =
                  "left" === e.at[0]
                    ? e.targetWidth
                    : "right" === e.at[0]
                    ? -e.targetWidth
                    : 0,
                m = -2 * e.offset[0];
              0 > u
                ? (0 > (i = t.left + f + d + m + e.collisionWidth - r - a) ||
                    o(u) > i) &&
                  (t.left += f + d + m)
                : c > 0 &&
                  ((s =
                    t.left - e.collisionPosition.marginLeft + f + d + m - l) >
                    0 ||
                    c > o(s)) &&
                  (t.left += f + d + m);
            },
            top: function (t, e) {
              var i,
                s,
                n = e.within,
                a = n.offset.top + n.scrollTop,
                r = n.height,
                l = n.isWindow ? n.scrollTop : n.offset.top,
                h = t.top - e.collisionPosition.marginTop,
                u = h - l,
                c = h + e.collisionHeight - r - l,
                f =
                  "top" === e.my[1]
                    ? -e.elemHeight
                    : "bottom" === e.my[1]
                    ? e.elemHeight
                    : 0,
                d =
                  "top" === e.at[1]
                    ? e.targetHeight
                    : "bottom" === e.at[1]
                    ? -e.targetHeight
                    : 0,
                m = -2 * e.offset[1];
              0 > u
                ? (0 > (s = t.top + f + d + m + e.collisionHeight - r - a) ||
                    o(u) > s) &&
                  (t.top += f + d + m)
                : c > 0 &&
                  ((i = t.top - e.collisionPosition.marginTop + f + d + m - l) >
                    0 ||
                    c > o(i)) &&
                  (t.top += f + d + m);
            },
          },
          flipfit: {
            left: function () {
              t.ui.position.flip.left.apply(this, arguments),
                t.ui.position.fit.left.apply(this, arguments);
            },
            top: function () {
              t.ui.position.flip.top.apply(this, arguments),
                t.ui.position.fit.top.apply(this, arguments);
            },
          },
        });
    })(),
    t.ui.position,
    t.extend(t.expr[":"], {
      data: t.expr.createPseudo
        ? t.expr.createPseudo(function (e) {
            return function (i) {
              return !!t.data(i, e);
            };
          })
        : function (e, i, s) {
            return !!t.data(e, s[3]);
          },
    }),
    t.fn.extend({
      disableSelection: (function () {
        var t =
          "onselectstart" in document.createElement("div")
            ? "selectstart"
            : "mousedown";
        return function () {
          return this.on(t + ".ui-disableSelection", function (t) {
            t.preventDefault();
          });
        };
      })(),
      enableSelection: function () {
        return this.off(".ui-disableSelection");
      },
    }),
    (t.ui.focusable = function (e, i) {
      var s,
        n,
        o,
        a,
        r,
        l = e.nodeName.toLowerCase();
      return "area" === l
        ? ((n = (s = e.parentNode).name),
          !(!e.href || !n || "map" !== s.nodeName.toLowerCase()) &&
            (o = t("img[usemap='#" + n + "']")).length > 0 &&
            o.is(":visible"))
        : (/^(input|select|textarea|button|object)$/.test(l)
            ? (a = !e.disabled) &&
              (r = t(e).closest("fieldset")[0]) &&
              (a = !r.disabled)
            : (a = ("a" === l && e.href) || i),
          a &&
            t(e).is(":visible") &&
            (function (t) {
              for (var e = t.css("visibility"); "inherit" === e; )
                e = (t = t.parent()).css("visibility");
              return "hidden" !== e;
            })(t(e)));
    }),
    t.extend(t.expr[":"], {
      focusable: function (e) {
        return t.ui.focusable(e, null != t.attr(e, "tabindex"));
      },
    }),
    t.ui.focusable,
    (t.fn.form = function () {
      return "string" == typeof this[0].form
        ? this.closest("form")
        : t(this[0].form);
    }),
    (t.ui.formResetMixin = {
      _formResetHandler: function () {
        var e = t(this);
        setTimeout(function () {
          var i = e.data("ui-form-reset-instances");
          t.each(i, function () {
            this.refresh();
          });
        });
      },
      _bindFormResetHandler: function () {
        if (((this.form = this.element.form()), this.form.length)) {
          var t = this.form.data("ui-form-reset-instances") || [];
          t.length ||
            this.form.on("reset.ui-form-reset", this._formResetHandler),
            t.push(this),
            this.form.data("ui-form-reset-instances", t);
        }
      },
      _unbindFormResetHandler: function () {
        if (this.form.length) {
          var e = this.form.data("ui-form-reset-instances");
          e.splice(t.inArray(this, e), 1),
            e.length
              ? this.form.data("ui-form-reset-instances", e)
              : this.form
                  .removeData("ui-form-reset-instances")
                  .off("reset.ui-form-reset");
        }
      },
    }),
    (t.ui.keyCode = {
      BACKSPACE: 8,
      COMMA: 188,
      DELETE: 46,
      DOWN: 40,
      END: 35,
      ENTER: 13,
      ESCAPE: 27,
      HOME: 36,
      LEFT: 37,
      PAGE_DOWN: 34,
      PAGE_UP: 33,
      PERIOD: 190,
      RIGHT: 39,
      SPACE: 32,
      TAB: 9,
      UP: 38,
    }),
    (t.ui.escapeSelector = (function () {
      var t = /([!"#$%&'()*+,.\/:;<=>?@[\]^`{|}~])/g;
      return function (e) {
        return e.replace(t, "\\$1");
      };
    })()),
    (t.fn.labels = function () {
      var e, i, s, n, o;
      return this[0].labels && this[0].labels.length
        ? this.pushStack(this[0].labels)
        : ((n = this.eq(0).parents("label")),
          (s = this.attr("id")) &&
            ((o = (e = this.eq(0).parents().last()).add(
              e.length ? e.siblings() : this.siblings()
            )),
            (i = "label[for='" + t.ui.escapeSelector(s) + "']"),
            (n = n.add(o.find(i).addBack(i)))),
          this.pushStack(n));
    }),
    (t.fn.scrollParent = function (e) {
      var i = this.css("position"),
        s = "absolute" === i,
        n = e ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
        o = this.parents()
          .filter(function () {
            var e = t(this);
            return (
              (!s || "static" !== e.css("position")) &&
              n.test(
                e.css("overflow") + e.css("overflow-y") + e.css("overflow-x")
              )
            );
          })
          .eq(0);
      return "fixed" !== i && o.length
        ? o
        : t(this[0].ownerDocument || document);
    }),
    t.extend(t.expr[":"], {
      tabbable: function (e) {
        var i = t.attr(e, "tabindex"),
          s = null != i;
        return (!s || i >= 0) && t.ui.focusable(e, s);
      },
    }),
    t.fn.extend({
      uniqueId: (function () {
        var t = 0;
        return function () {
          return this.each(function () {
            this.id || (this.id = "ui-id-" + ++t);
          });
        };
      })(),
      removeUniqueId: function () {
        return this.each(function () {
          /^ui-id-\d+$/.test(this.id) && t(this).removeAttr("id");
        });
      },
    }),
    (t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()));
  var s = !1;
  t(document).on("mouseup", function () {
    s = !1;
  }),
    t.widget("ui.mouse", {
      version: "1.12.1",
      options: {
        cancel: "input, textarea, button, select, option",
        distance: 1,
        delay: 0,
      },
      _mouseInit: function () {
        var e = this;
        this.element
          .on("mousedown." + this.widgetName, function (t) {
            return e._mouseDown(t);
          })
          .on("click." + this.widgetName, function (i) {
            return !0 === t.data(i.target, e.widgetName + ".preventClickEvent")
              ? (t.removeData(i.target, e.widgetName + ".preventClickEvent"),
                i.stopImmediatePropagation(),
                !1)
              : void 0;
          }),
          (this.started = !1);
      },
      _mouseDestroy: function () {
        this.element.off("." + this.widgetName),
          this._mouseMoveDelegate &&
            this.document
              .off("mousemove." + this.widgetName, this._mouseMoveDelegate)
              .off("mouseup." + this.widgetName, this._mouseUpDelegate);
      },
      _mouseDown: function (e) {
        if (!s) {
          (this._mouseMoved = !1),
            this._mouseStarted && this._mouseUp(e),
            (this._mouseDownEvent = e);
          var i = this,
            n = 1 === e.which,
            o =
              !("string" != typeof this.options.cancel || !e.target.nodeName) &&
              t(e.target).closest(this.options.cancel).length;
          return (
            !(n && !o && this._mouseCapture(e)) ||
            ((this.mouseDelayMet = !this.options.delay),
            this.mouseDelayMet ||
              (this._mouseDelayTimer = setTimeout(function () {
                i.mouseDelayMet = !0;
              }, this.options.delay)),
            this._mouseDistanceMet(e) &&
            this._mouseDelayMet(e) &&
            ((this._mouseStarted = !1 !== this._mouseStart(e)),
            !this._mouseStarted)
              ? (e.preventDefault(), !0)
              : (!0 ===
                  t.data(e.target, this.widgetName + ".preventClickEvent") &&
                  t.removeData(
                    e.target,
                    this.widgetName + ".preventClickEvent"
                  ),
                (this._mouseMoveDelegate = function (t) {
                  return i._mouseMove(t);
                }),
                (this._mouseUpDelegate = function (t) {
                  return i._mouseUp(t);
                }),
                this.document
                  .on("mousemove." + this.widgetName, this._mouseMoveDelegate)
                  .on("mouseup." + this.widgetName, this._mouseUpDelegate),
                e.preventDefault(),
                (s = !0),
                !0))
          );
        }
      },
      _mouseMove: function (e) {
        if (this._mouseMoved) {
          if (
            t.ui.ie &&
            (!document.documentMode || 9 > document.documentMode) &&
            !e.button
          )
            return this._mouseUp(e);
          if (!e.which)
            if (
              e.originalEvent.altKey ||
              e.originalEvent.ctrlKey ||
              e.originalEvent.metaKey ||
              e.originalEvent.shiftKey
            )
              this.ignoreMissingWhich = !0;
            else if (!this.ignoreMissingWhich) return this._mouseUp(e);
        }
        return (
          (e.which || e.button) && (this._mouseMoved = !0),
          this._mouseStarted
            ? (this._mouseDrag(e), e.preventDefault())
            : (this._mouseDistanceMet(e) &&
                this._mouseDelayMet(e) &&
                ((this._mouseStarted =
                  !1 !== this._mouseStart(this._mouseDownEvent, e)),
                this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)),
              !this._mouseStarted)
        );
      },
      _mouseUp: function (e) {
        this.document
          .off("mousemove." + this.widgetName, this._mouseMoveDelegate)
          .off("mouseup." + this.widgetName, this._mouseUpDelegate),
          this._mouseStarted &&
            ((this._mouseStarted = !1),
            e.target === this._mouseDownEvent.target &&
              t.data(e.target, this.widgetName + ".preventClickEvent", !0),
            this._mouseStop(e)),
          this._mouseDelayTimer &&
            (clearTimeout(this._mouseDelayTimer), delete this._mouseDelayTimer),
          (this.ignoreMissingWhich = !1),
          (s = !1),
          e.preventDefault();
      },
      _mouseDistanceMet: function (t) {
        return (
          Math.max(
            Math.abs(this._mouseDownEvent.pageX - t.pageX),
            Math.abs(this._mouseDownEvent.pageY - t.pageY)
          ) >= this.options.distance
        );
      },
      _mouseDelayMet: function () {
        return this.mouseDelayMet;
      },
      _mouseStart: function () {},
      _mouseDrag: function () {},
      _mouseStop: function () {},
      _mouseCapture: function () {
        return !0;
      },
    }),
    t.widget("ui.slider", t.ui.mouse, {
      version: "1.12.1",
      widgetEventPrefix: "slide",
      options: {
        animate: !1,
        classes: {
          "ui-slider": "ui-corner-all",
          "ui-slider-handle": "ui-corner-all",
          "ui-slider-range": "ui-corner-all ui-widget-header",
        },
        distance: 0,
        max: 100,
        min: 0,
        orientation: "horizontal",
        range: !1,
        step: 1,
        value: 0,
        values: null,
        change: null,
        slide: null,
        start: null,
        stop: null,
      },
      numPages: 5,
      _create: function () {
        (this._keySliding = !1),
          (this._mouseSliding = !1),
          (this._animateOff = !0),
          (this._handleIndex = null),
          this._detectOrientation(),
          this._mouseInit(),
          this._calculateNewMax(),
          this._addClass(
            "ui-slider ui-slider-" + this.orientation,
            "ui-widget ui-widget-content"
          ),
          this._refresh(),
          (this._animateOff = !1);
      },
      _refresh: function () {
        this._createRange(),
          this._createHandles(),
          this._setupEvents(),
          this._refreshValue();
      },
      _createHandles: function () {
        var e,
          i,
          s = this.options,
          n = this.element.find(".ui-slider-handle"),
          o = [];
        for (
          i = (s.values && s.values.length) || 1,
            n.length > i && (n.slice(i).remove(), (n = n.slice(0, i))),
            e = n.length;
          i > e;
          e++
        )
          o.push("<span tabindex='0'></span>");
        (this.handles = n.add(t(o.join("")).appendTo(this.element))),
          this._addClass(this.handles, "ui-slider-handle", "ui-state-default"),
          (this.handle = this.handles.eq(0)),
          this.handles.each(function (e) {
            t(this).data("ui-slider-handle-index", e).attr("tabIndex", 0);
          });
      },
      _createRange: function () {
        var e = this.options;
        e.range
          ? (!0 === e.range &&
              (e.values
                ? e.values.length && 2 !== e.values.length
                  ? (e.values = [e.values[0], e.values[0]])
                  : t.isArray(e.values) && (e.values = e.values.slice(0))
                : (e.values = [this._valueMin(), this._valueMin()])),
            this.range && this.range.length
              ? (this._removeClass(
                  this.range,
                  "ui-slider-range-min ui-slider-range-max"
                ),
                this.range.css({ left: "", bottom: "" }))
              : ((this.range = t("<div>").appendTo(this.element)),
                this._addClass(this.range, "ui-slider-range")),
            ("min" === e.range || "max" === e.range) &&
              this._addClass(this.range, "ui-slider-range-" + e.range))
          : (this.range && this.range.remove(), (this.range = null));
      },
      _setupEvents: function () {
        this._off(this.handles),
          this._on(this.handles, this._handleEvents),
          this._hoverable(this.handles),
          this._focusable(this.handles);
      },
      _destroy: function () {
        this.handles.remove(),
          this.range && this.range.remove(),
          this._mouseDestroy();
      },
      _mouseCapture: function (e) {
        var i,
          s,
          n,
          o,
          a,
          r,
          l,
          h = this,
          u = this.options;
        return (
          !u.disabled &&
          ((this.elementSize = {
            width: this.element.outerWidth(),
            height: this.element.outerHeight(),
          }),
          (this.elementOffset = this.element.offset()),
          (i = { x: e.pageX, y: e.pageY }),
          (s = this._normValueFromMouse(i)),
          (n = this._valueMax() - this._valueMin() + 1),
          this.handles.each(function (e) {
            var i = Math.abs(s - h.values(e));
            (n > i ||
              (n === i &&
                (e === h._lastChangedValue || h.values(e) === u.min))) &&
              ((n = i), (o = t(this)), (a = e));
          }),
          !1 !== this._start(e, a) &&
            ((this._mouseSliding = !0),
            (this._handleIndex = a),
            this._addClass(o, null, "ui-state-active"),
            o.trigger("focus"),
            (r = o.offset()),
            (l = !t(e.target).parents().addBack().is(".ui-slider-handle")),
            (this._clickOffset = l
              ? { left: 0, top: 0 }
              : {
                  left: e.pageX - r.left - o.width() / 2,
                  top:
                    e.pageY -
                    r.top -
                    o.height() / 2 -
                    (parseInt(o.css("borderTopWidth"), 10) || 0) -
                    (parseInt(o.css("borderBottomWidth"), 10) || 0) +
                    (parseInt(o.css("marginTop"), 10) || 0),
                }),
            this.handles.hasClass("ui-state-hover") || this._slide(e, a, s),
            (this._animateOff = !0),
            !0))
        );
      },
      _mouseStart: function () {
        return !0;
      },
      _mouseDrag: function (t) {
        var e = { x: t.pageX, y: t.pageY },
          i = this._normValueFromMouse(e);
        return this._slide(t, this._handleIndex, i), !1;
      },
      _mouseStop: function (t) {
        return (
          this._removeClass(this.handles, null, "ui-state-active"),
          (this._mouseSliding = !1),
          this._stop(t, this._handleIndex),
          this._change(t, this._handleIndex),
          (this._handleIndex = null),
          (this._clickOffset = null),
          (this._animateOff = !1),
          !1
        );
      },
      _detectOrientation: function () {
        this.orientation =
          "vertical" === this.options.orientation ? "vertical" : "horizontal";
      },
      _normValueFromMouse: function (t) {
        var e, i, s, n, o;
        return (
          "horizontal" === this.orientation
            ? ((e = this.elementSize.width),
              (i =
                t.x -
                this.elementOffset.left -
                (this._clickOffset ? this._clickOffset.left : 0)))
            : ((e = this.elementSize.height),
              (i =
                t.y -
                this.elementOffset.top -
                (this._clickOffset ? this._clickOffset.top : 0))),
          (s = i / e) > 1 && (s = 1),
          0 > s && (s = 0),
          "vertical" === this.orientation && (s = 1 - s),
          (n = this._valueMax() - this._valueMin()),
          (o = this._valueMin() + s * n),
          this._trimAlignValue(o)
        );
      },
      _uiHash: function (t, e, i) {
        var s = {
          handle: this.handles[t],
          handleIndex: t,
          value: void 0 !== e ? e : this.value(),
        };
        return (
          this._hasMultipleValues() &&
            ((s.value = void 0 !== e ? e : this.values(t)),
            (s.values = i || this.values())),
          s
        );
      },
      _hasMultipleValues: function () {
        return this.options.values && this.options.values.length;
      },
      _start: function (t, e) {
        return this._trigger("start", t, this._uiHash(e));
      },
      _slide: function (t, e, i) {
        var s,
          n = this.value(),
          o = this.values();
        this._hasMultipleValues() &&
          ((s = this.values(e ? 0 : 1)),
          (n = this.values(e)),
          2 === this.options.values.length &&
            !0 === this.options.range &&
            (i = 0 === e ? Math.min(s, i) : Math.max(s, i)),
          (o[e] = i)),
          i !== n &&
            !1 !== this._trigger("slide", t, this._uiHash(e, i, o)) &&
            (this._hasMultipleValues() ? this.values(e, i) : this.value(i));
      },
      _stop: function (t, e) {
        this._trigger("stop", t, this._uiHash(e));
      },
      _change: function (t, e) {
        this._keySliding ||
          this._mouseSliding ||
          ((this._lastChangedValue = e),
          this._trigger("change", t, this._uiHash(e)));
      },
      value: function (t) {
        return arguments.length
          ? ((this.options.value = this._trimAlignValue(t)),
            this._refreshValue(),
            void this._change(null, 0))
          : this._value();
      },
      values: function (e, i) {
        var s, n, o;
        if (arguments.length > 1)
          return (
            (this.options.values[e] = this._trimAlignValue(i)),
            this._refreshValue(),
            void this._change(null, e)
          );
        if (!arguments.length) return this._values();
        if (!t.isArray(arguments[0]))
          return this._hasMultipleValues() ? this._values(e) : this.value();
        for (
          s = this.options.values, n = arguments[0], o = 0;
          s.length > o;
          o += 1
        )
          (s[o] = this._trimAlignValue(n[o])), this._change(null, o);
        this._refreshValue();
      },
      _setOption: function (e, i) {
        var s,
          n = 0;
        switch (
          ("range" === e &&
            !0 === this.options.range &&
            ("min" === i
              ? ((this.options.value = this._values(0)),
                (this.options.values = null))
              : "max" === i &&
                ((this.options.value = this._values(
                  this.options.values.length - 1
                )),
                (this.options.values = null))),
          t.isArray(this.options.values) && (n = this.options.values.length),
          this._super(e, i),
          e)
        ) {
          case "orientation":
            this._detectOrientation(),
              this._removeClass(
                "ui-slider-horizontal ui-slider-vertical"
              )._addClass("ui-slider-" + this.orientation),
              this._refreshValue(),
              this.options.range && this._refreshRange(i),
              this.handles.css("horizontal" === i ? "bottom" : "left", "");
            break;
          case "value":
            (this._animateOff = !0),
              this._refreshValue(),
              this._change(null, 0),
              (this._animateOff = !1);
            break;
          case "values":
            for (
              this._animateOff = !0, this._refreshValue(), s = n - 1;
              s >= 0;
              s--
            )
              this._change(null, s);
            this._animateOff = !1;
            break;
          case "step":
          case "min":
          case "max":
            (this._animateOff = !0),
              this._calculateNewMax(),
              this._refreshValue(),
              (this._animateOff = !1);
            break;
          case "range":
            (this._animateOff = !0), this._refresh(), (this._animateOff = !1);
        }
      },
      _setOptionDisabled: function (t) {
        this._super(t), this._toggleClass(null, "ui-state-disabled", !!t);
      },
      _value: function () {
        var t = this.options.value;
        return this._trimAlignValue(t);
      },
      _values: function (t) {
        var e, i, s;
        if (arguments.length)
          return (e = this.options.values[t]), this._trimAlignValue(e);
        if (this._hasMultipleValues()) {
          for (i = this.options.values.slice(), s = 0; i.length > s; s += 1)
            i[s] = this._trimAlignValue(i[s]);
          return i;
        }
        return [];
      },
      _trimAlignValue: function (t) {
        if (this._valueMin() >= t) return this._valueMin();
        if (t >= this._valueMax()) return this._valueMax();
        var e = this.options.step > 0 ? this.options.step : 1,
          i = (t - this._valueMin()) % e,
          s = t - i;
        return (
          2 * Math.abs(i) >= e && (s += i > 0 ? e : -e),
          parseFloat(s.toFixed(5))
        );
      },
      _calculateNewMax: function () {
        var t = this.options.max,
          e = this._valueMin(),
          i = this.options.step;
        (t = Math.round((t - e) / i) * i + e) > this.options.max && (t -= i),
          (this.max = parseFloat(t.toFixed(this._precision())));
      },
      _precision: function () {
        var t = this._precisionOf(this.options.step);
        return (
          null !== this.options.min &&
            (t = Math.max(t, this._precisionOf(this.options.min))),
          t
        );
      },
      _precisionOf: function (t) {
        var e = "" + t,
          i = e.indexOf(".");
        return -1 === i ? 0 : e.length - i - 1;
      },
      _valueMin: function () {
        return this.options.min;
      },
      _valueMax: function () {
        return this.max;
      },
      _refreshRange: function (t) {
        "vertical" === t && this.range.css({ width: "", left: "" }),
          "horizontal" === t && this.range.css({ height: "", bottom: "" });
      },
      _refreshValue: function () {
        var e,
          i,
          s,
          n,
          o,
          a = this.options.range,
          r = this.options,
          l = this,
          h = !this._animateOff && r.animate,
          u = {};
        this._hasMultipleValues()
          ? this.handles.each(function (s) {
              (i =
                ((l.values(s) - l._valueMin()) /
                  (l._valueMax() - l._valueMin())) *
                100),
                (u["horizontal" === l.orientation ? "left" : "bottom"] =
                  i + "%"),
                t(this).stop(1, 1)[h ? "animate" : "css"](u, r.animate),
                !0 === l.options.range &&
                  ("horizontal" === l.orientation
                    ? (0 === s &&
                        l.range
                          .stop(1, 1)
                          [h ? "animate" : "css"]({ left: i + "%" }, r.animate),
                      1 === s &&
                        l.range[h ? "animate" : "css"](
                          { width: i - e + "%" },
                          { queue: !1, duration: r.animate }
                        ))
                    : (0 === s &&
                        l.range
                          .stop(1, 1)
                          [h ? "animate" : "css"](
                            { bottom: i + "%" },
                            r.animate
                          ),
                      1 === s &&
                        l.range[h ? "animate" : "css"](
                          { height: i - e + "%" },
                          { queue: !1, duration: r.animate }
                        ))),
                (e = i);
            })
          : ((s = this.value()),
            (n = this._valueMin()),
            (o = this._valueMax()),
            (i = o !== n ? ((s - n) / (o - n)) * 100 : 0),
            (u["horizontal" === this.orientation ? "left" : "bottom"] =
              i + "%"),
            this.handle.stop(1, 1)[h ? "animate" : "css"](u, r.animate),
            "min" === a &&
              "horizontal" === this.orientation &&
              this.range
                .stop(1, 1)
                [h ? "animate" : "css"]({ width: i + "%" }, r.animate),
            "max" === a &&
              "horizontal" === this.orientation &&
              this.range
                .stop(1, 1)
                [h ? "animate" : "css"]({ width: 100 - i + "%" }, r.animate),
            "min" === a &&
              "vertical" === this.orientation &&
              this.range
                .stop(1, 1)
                [h ? "animate" : "css"]({ height: i + "%" }, r.animate),
            "max" === a &&
              "vertical" === this.orientation &&
              this.range
                .stop(1, 1)
                [h ? "animate" : "css"]({ height: 100 - i + "%" }, r.animate));
      },
      _handleEvents: {
        keydown: function (e) {
          var i,
            s,
            n,
            o = t(e.target).data("ui-slider-handle-index");
          switch (e.keyCode) {
            case t.ui.keyCode.HOME:
            case t.ui.keyCode.END:
            case t.ui.keyCode.PAGE_UP:
            case t.ui.keyCode.PAGE_DOWN:
            case t.ui.keyCode.UP:
            case t.ui.keyCode.RIGHT:
            case t.ui.keyCode.DOWN:
            case t.ui.keyCode.LEFT:
              if (
                (e.preventDefault(),
                !this._keySliding &&
                  ((this._keySliding = !0),
                  this._addClass(t(e.target), null, "ui-state-active"),
                  !1 === this._start(e, o)))
              )
                return;
          }
          switch (
            ((n = this.options.step),
            (i = s = this._hasMultipleValues() ? this.values(o) : this.value()),
            e.keyCode)
          ) {
            case t.ui.keyCode.HOME:
              s = this._valueMin();
              break;
            case t.ui.keyCode.END:
              s = this._valueMax();
              break;
            case t.ui.keyCode.PAGE_UP:
              s = this._trimAlignValue(
                i + (this._valueMax() - this._valueMin()) / this.numPages
              );
              break;
            case t.ui.keyCode.PAGE_DOWN:
              s = this._trimAlignValue(
                i - (this._valueMax() - this._valueMin()) / this.numPages
              );
              break;
            case t.ui.keyCode.UP:
            case t.ui.keyCode.RIGHT:
              if (i === this._valueMax()) return;
              s = this._trimAlignValue(i + n);
              break;
            case t.ui.keyCode.DOWN:
            case t.ui.keyCode.LEFT:
              if (i === this._valueMin()) return;
              s = this._trimAlignValue(i - n);
          }
          this._slide(e, o, s);
        },
        keyup: function (e) {
          var i = t(e.target).data("ui-slider-handle-index");
          this._keySliding &&
            ((this._keySliding = !1),
            this._stop(e, i),
            this._change(e, i),
            this._removeClass(t(e.target), null, "ui-state-active"));
        },
      },
    });
});

/*! lightgallery - v1.6.11 - 2018-05-22
 * http://sachinchoolur.github.io/lightGallery/
 * Copyright (c) 2018 Sachin N; Licensed GPLv3 */
!(function (e, t) {
  "function" == typeof define && define.amd
    ? define(["jquery"], function (e) {
        return t(e);
      })
    : "object" == typeof module && module.exports
    ? (module.exports = t(require("jquery")))
    : t(e.jQuery);
})(this, function (e) {
  !(function () {
    "use strict";
    function t(t, s) {
      if (
        ((this.el = t),
        (this.$el = e(t)),
        (this.s = e.extend({}, o, s)),
        this.s.dynamic &&
          "undefined" !== this.s.dynamicEl &&
          this.s.dynamicEl.constructor === Array &&
          !this.s.dynamicEl.length)
      )
        throw "When using dynamic mode, you must also define dynamicEl as an Array.";
      return (
        (this.modules = {}),
        (this.lGalleryOn = !1),
        (this.lgBusy = !1),
        (this.hideBartimeout = !1),
        (this.isTouch = "ontouchstart" in document.documentElement),
        this.s.slideEndAnimatoin && (this.s.hideControlOnEnd = !1),
        this.s.dynamic
          ? (this.$items = this.s.dynamicEl)
          : "this" === this.s.selector
          ? (this.$items = this.$el)
          : "" !== this.s.selector
          ? this.s.selectWithin
            ? (this.$items = e(this.s.selectWithin).find(this.s.selector))
            : (this.$items = this.$el.find(e(this.s.selector)))
          : (this.$items = this.$el.children()),
        (this.$slide = ""),
        (this.$outer = ""),
        this.init(),
        this
      );
    }
    var o = {
      mode: "lg-slide",
      cssEasing: "ease",
      easing: "linear",
      speed: 600,
      height: "100%",
      width: "100%",
      addClass: "",
      startClass: "lg-start-zoom",
      backdropDuration: 150,
      hideBarsDelay: 6e3,
      useLeft: !1,
      closable: !0,
      loop: !0,
      escKey: !0,
      keyPress: !0,
      controls: !0,
      slideEndAnimatoin: !0,
      hideControlOnEnd: !1,
      mousewheel: !0,
      getCaptionFromTitleOrAlt: !0,
      appendSubHtmlTo: ".lg-sub-html",
      subHtmlSelectorRelative: !1,
      preload: 1,
      showAfterLoad: !0,
      selector: "",
      selectWithin: "",
      nextHtml: "",
      prevHtml: "",
      index: !1,
      iframeMaxWidth: "100%",
      download: !0,
      counter: !0,
      appendCounterTo: ".lg-toolbar",
      swipeThreshold: 50,
      enableSwipe: !0,
      enableDrag: !0,
      dynamic: !1,
      dynamicEl: [],
      galleryId: 1,
    };
    (t.prototype.init = function () {
      var t = this;
      t.s.preload > t.$items.length && (t.s.preload = t.$items.length);
      var o = window.location.hash;
      o.indexOf("lg=" + this.s.galleryId) > 0 &&
        ((t.index = parseInt(o.split("&slide=")[1], 10)),
        e("body").addClass("lg-from-hash"),
        e("body").hasClass("lg-on") ||
          (setTimeout(function () {
            t.build(t.index);
          }),
          e("body").addClass("lg-on"))),
        t.s.dynamic
          ? (t.$el.trigger("onBeforeOpen.lg"),
            (t.index = t.s.index || 0),
            e("body").hasClass("lg-on") ||
              setTimeout(function () {
                t.build(t.index), e("body").addClass("lg-on");
              }))
          : t.$items.on("click.lgcustom", function (o) {
              try {
                o.preventDefault(), o.preventDefault();
              } catch (e) {
                o.returnValue = !1;
              }
              t.$el.trigger("onBeforeOpen.lg"),
                (t.index = t.s.index || t.$items.index(this)),
                e("body").hasClass("lg-on") ||
                  (t.build(t.index), e("body").addClass("lg-on"));
            });
    }),
      (t.prototype.build = function (t) {
        var o = this;
        o.structure(),
          e.each(e.fn.lightGallery.modules, function (t) {
            o.modules[t] = new e.fn.lightGallery.modules[t](o.el);
          }),
          o.slide(t, !1, !1, !1),
          o.s.keyPress && o.keyPress(),
          o.$items.length > 1
            ? (o.arrow(),
              setTimeout(function () {
                o.enableDrag(), o.enableSwipe();
              }, 50),
              o.s.mousewheel && o.mousewheel())
            : o.$slide.on("click.lg", function () {
                o.$el.trigger("onSlideClick.lg");
              }),
          o.counter(),
          o.closeGallery(),
          o.$el.trigger("onAfterOpen.lg"),
          o.$outer.on("mousemove.lg click.lg touchstart.lg", function () {
            o.$outer.removeClass("lg-hide-items"),
              clearTimeout(o.hideBartimeout),
              (o.hideBartimeout = setTimeout(function () {
                o.$outer.addClass("lg-hide-items");
              }, o.s.hideBarsDelay));
          }),
          o.$outer.trigger("mousemove.lg");
      }),
      (t.prototype.structure = function () {
        var t,
          o = "",
          s = "",
          i = 0,
          l = "",
          r = this;
        for (
          e("body").append('<div class="lg-backdrop"></div>'),
            e(".lg-backdrop").css(
              "transition-duration",
              this.s.backdropDuration + "ms"
            ),
            i = 0;
          i < this.$items.length;
          i++
        )
          o += '<div class="lg-item"></div>';
        if (
          (this.s.controls &&
            this.$items.length > 1 &&
            (s =
              '<div class="lg-actions"><button class="lg-prev lg-icon">' +
              this.s.prevHtml +
              '</button><button class="lg-next lg-icon">' +
              this.s.nextHtml +
              "</button></div>"),
          ".lg-sub-html" === this.s.appendSubHtmlTo &&
            (l = '<div class="lg-sub-html"></div>'),
          (t =
            '<div class="lg-outer ' +
            this.s.addClass +
            " " +
            this.s.startClass +
            '"><div class="lg" style="width:' +
            this.s.width +
            "; height:" +
            this.s.height +
            '"><div class="lg-inner">' +
            o +
            '</div><div class="lg-toolbar lg-group"><span class="lg-close lg-icon"></span></div>' +
            s +
            l +
            "</div></div>"),
          e("body").append(t),
          (this.$outer = e(".lg-outer")),
          (this.$slide = this.$outer.find(".lg-item")),
          this.s.useLeft
            ? (this.$outer.addClass("lg-use-left"), (this.s.mode = "lg-slide"))
            : this.$outer.addClass("lg-use-css3"),
          r.setTop(),
          e(window).on("resize.lg orientationchange.lg", function () {
            setTimeout(function () {
              r.setTop();
            }, 100);
          }),
          this.$slide.eq(this.index).addClass("lg-current"),
          this.doCss()
            ? this.$outer.addClass("lg-css3")
            : (this.$outer.addClass("lg-css"), (this.s.speed = 0)),
          this.$outer.addClass(this.s.mode),
          this.s.enableDrag &&
            this.$items.length > 1 &&
            this.$outer.addClass("lg-grab"),
          this.s.showAfterLoad && this.$outer.addClass("lg-show-after-load"),
          this.doCss())
        ) {
          var a = this.$outer.find(".lg-inner");
          a.css("transition-timing-function", this.s.cssEasing),
            a.css("transition-duration", this.s.speed + "ms");
        }
        setTimeout(function () {
          e(".lg-backdrop").addClass("in");
        }),
          setTimeout(function () {
            r.$outer.addClass("lg-visible");
          }, this.s.backdropDuration),
          this.s.download &&
            this.$outer
              .find(".lg-toolbar")
              .append(
                '<a id="lg-download" target="_blank" download class="lg-download lg-icon"></a>'
              ),
          (this.prevScrollTop = e(window).scrollTop());
      }),
      (t.prototype.setTop = function () {
        if ("100%" !== this.s.height) {
          var t = e(window).height(),
            o = (t - parseInt(this.s.height, 10)) / 2,
            s = this.$outer.find(".lg");
          t >= parseInt(this.s.height, 10)
            ? s.css("top", o + "px")
            : s.css("top", "0px");
        }
      }),
      (t.prototype.doCss = function () {
        return !!(function () {
          var e = [
              "transition",
              "MozTransition",
              "WebkitTransition",
              "OTransition",
              "msTransition",
              "KhtmlTransition",
            ],
            t = document.documentElement,
            o = 0;
          for (o = 0; o < e.length; o++) if (e[o] in t.style) return !0;
        })();
      }),
      (t.prototype.isVideo = function (e, t) {
        var o;
        if (
          ((o = this.s.dynamic
            ? this.s.dynamicEl[t].html
            : this.$items.eq(t).attr("data-html")),
          !e)
        )
          return o
            ? { html5: !0 }
            : (console.error(
                "lightGallery :- data-src is not pvovided on slide item " +
                  (t + 1) +
                  ". Please make sure the selector property is properly configured. More info - http://sachinchoolur.github.io/lightGallery/demos/html-markup.html"
              ),
              !1);
        var s = e.match(
            /\/\/(?:www\.)?youtu(?:\.be|be\.com|be-nocookie\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)/i
          ),
          i = e.match(/\/\/(?:www\.)?vimeo.com\/([0-9a-z\-_]+)/i),
          l = e.match(/\/\/(?:www\.)?dai.ly\/([0-9a-z\-_]+)/i),
          r = e.match(
            /\/\/(?:www\.)?(?:vk\.com|vkontakte\.ru)\/(?:video_ext\.php\?)(.*)/i
          );
        return s
          ? { youtube: s }
          : i
          ? { vimeo: i }
          : l
          ? { dailymotion: l }
          : r
          ? { vk: r }
          : void 0;
      }),
      (t.prototype.counter = function () {
        this.s.counter &&
          e(this.s.appendCounterTo).append(
            '<div id="lg-counter"><span id="lg-counter-current">' +
              (parseInt(this.index, 10) + 1) +
              '</span> / <span id="lg-counter-all">' +
              this.$items.length +
              "</span></div>"
          );
      }),
      (t.prototype.addHtml = function (t) {
        var o,
          s,
          i = null;
        if (
          (this.s.dynamic
            ? this.s.dynamicEl[t].subHtmlUrl
              ? (o = this.s.dynamicEl[t].subHtmlUrl)
              : (i = this.s.dynamicEl[t].subHtml)
            : (s = this.$items.eq(t)).attr("data-sub-html-url")
            ? (o = s.attr("data-sub-html-url"))
            : ((i = s.attr("data-sub-html")),
              this.s.getCaptionFromTitleOrAlt &&
                !i &&
                (i = s.attr("title") || s.find("img").first().attr("alt"))),
          !o)
        )
          if (null != i) {
            var l = i.substring(0, 1);
            ("." !== l && "#" !== l) ||
              (i =
                this.s.subHtmlSelectorRelative && !this.s.dynamic
                  ? s.find(i).html()
                  : e(i).html());
          } else i = "";
        ".lg-sub-html" === this.s.appendSubHtmlTo
          ? o
            ? this.$outer.find(this.s.appendSubHtmlTo).load(o)
            : this.$outer.find(this.s.appendSubHtmlTo).html(i)
          : o
          ? this.$slide.eq(t).load(o)
          : this.$slide.eq(t).append(i),
          null != i &&
            ("" === i
              ? this.$outer
                  .find(this.s.appendSubHtmlTo)
                  .addClass("lg-empty-html")
              : this.$outer
                  .find(this.s.appendSubHtmlTo)
                  .removeClass("lg-empty-html")),
          this.$el.trigger("onAfterAppendSubHtml.lg", [t]);
      }),
      (t.prototype.preload = function (e) {
        var t = 1,
          o = 1;
        for (t = 1; t <= this.s.preload && !(t >= this.$items.length - e); t++)
          this.loadContent(e + t, !1, 0);
        for (o = 1; o <= this.s.preload && !(e - o < 0); o++)
          this.loadContent(e - o, !1, 0);
      }),
      (t.prototype.loadContent = function (t, o, s) {
        var i,
          l,
          r,
          a,
          n,
          d,
          c = this,
          u = !1,
          h = function (t) {
            for (var o = [], s = [], i = 0; i < t.length; i++) {
              var r = t[i].split(" ");
              "" === r[0] && r.splice(0, 1), s.push(r[0]), o.push(r[1]);
            }
            for (var a = e(window).width(), n = 0; n < o.length; n++)
              if (parseInt(o[n], 10) > a) {
                l = s[n];
                break;
              }
          };
        c.s.dynamic
          ? (c.s.dynamicEl[t].poster &&
              ((u = !0), (r = c.s.dynamicEl[t].poster)),
            (d = c.s.dynamicEl[t].html),
            (l = c.s.dynamicEl[t].src),
            c.s.dynamicEl[t].responsive &&
              h(c.s.dynamicEl[t].responsive.split(",")),
            (a = c.s.dynamicEl[t].srcset),
            (n = c.s.dynamicEl[t].sizes))
          : (c.$items.eq(t).attr("data-poster") &&
              ((u = !0), (r = c.$items.eq(t).attr("data-poster"))),
            (d = c.$items.eq(t).attr("data-html")),
            (l =
              c.$items.eq(t).attr("href") || c.$items.eq(t).attr("data-src")),
            c.$items.eq(t).attr("data-responsive") &&
              h(c.$items.eq(t).attr("data-responsive").split(",")),
            (a = c.$items.eq(t).attr("data-srcset")),
            (n = c.$items.eq(t).attr("data-sizes")));
        var g = !1;
        c.s.dynamic
          ? c.s.dynamicEl[t].iframe && (g = !0)
          : "true" === c.$items.eq(t).attr("data-iframe") && (g = !0);
        var m = c.isVideo(l, t);
        if (!c.$slide.eq(t).hasClass("lg-loaded")) {
          if (g)
            c.$slide
              .eq(t)
              .prepend(
                '<div class="lg-video-cont lg-has-iframe" style="max-width:' +
                  c.s.iframeMaxWidth +
                  '"><div class="lg-video"><iframe class="lg-object" frameborder="0" src="' +
                  l +
                  '"  allowfullscreen="true"></iframe></div></div>'
              );
          else if (u) {
            var p;
            (p =
              m && m.youtube
                ? "lg-has-youtube"
                : m && m.vimeo
                ? "lg-has-vimeo"
                : "lg-has-html5"),
              c.$slide
                .eq(t)
                .prepend(
                  '<div class="lg-video-cont ' +
                    p +
                    ' "><div class="lg-video"><span class="lg-video-play"></span><img class="lg-object lg-has-poster" src="' +
                    r +
                    '" /></div></div>'
                );
          } else
            m
              ? (c.$slide
                  .eq(t)
                  .prepend(
                    '<div class="lg-video-cont "><div class="lg-video"></div></div>'
                  ),
                c.$el.trigger("hasVideo.lg", [t, l, d]))
              : c.$slide
                  .eq(t)
                  .prepend(
                    '<div class="lg-img-wrap"><img class="lg-object lg-image" src="' +
                      l +
                      '" /></div>'
                  );
          if (
            (c.$el.trigger("onAferAppendSlide.lg", [t]),
            (i = c.$slide.eq(t).find(".lg-object")),
            n && i.attr("sizes", n),
            a)
          ) {
            i.attr("srcset", a);
            try {
              picturefill({ elements: [i[0]] });
            } catch (e) {
              console.warn(
                "lightGallery :- If you want srcset to be supported for older browser please include picturefil version 2 javascript library in your document."
              );
            }
          }
          ".lg-sub-html" !== this.s.appendSubHtmlTo && c.addHtml(t),
            c.$slide.eq(t).addClass("lg-loaded");
        }
        c.$slide
          .eq(t)
          .find(".lg-object")
          .on("load.lg error.lg", function () {
            var o = 0;
            s && !e("body").hasClass("lg-from-hash") && (o = s),
              setTimeout(function () {
                c.$slide.eq(t).addClass("lg-complete"),
                  c.$el.trigger("onSlideItemLoad.lg", [t, s || 0]);
              }, o);
          }),
          m && m.html5 && !u && c.$slide.eq(t).addClass("lg-complete"),
          !0 === o &&
            (c.$slide.eq(t).hasClass("lg-complete")
              ? c.preload(t)
              : c.$slide
                  .eq(t)
                  .find(".lg-object")
                  .on("load.lg error.lg", function () {
                    c.preload(t);
                  }));
      }),
      (t.prototype.slide = function (t, o, s, i) {
        var l = this.$outer.find(".lg-current").index(),
          r = this;
        if (!r.lGalleryOn || l !== t) {
          var a = this.$slide.length,
            n = r.lGalleryOn ? this.s.speed : 0;
          if (!r.lgBusy) {
            var d, c, u;
            if (this.s.download)
              (d = r.s.dynamic
                ? !1 !== r.s.dynamicEl[t].downloadUrl &&
                  (r.s.dynamicEl[t].downloadUrl || r.s.dynamicEl[t].src)
                : "false" !== r.$items.eq(t).attr("data-download-url") &&
                  (r.$items.eq(t).attr("data-download-url") ||
                    r.$items.eq(t).attr("href") ||
                    r.$items.eq(t).attr("data-src")))
                ? (e("#lg-download").attr("href", d),
                  r.$outer.removeClass("lg-hide-download"))
                : r.$outer.addClass("lg-hide-download");
            if (
              (this.$el.trigger("onBeforeSlide.lg", [l, t, o, s]),
              (r.lgBusy = !0),
              clearTimeout(r.hideBartimeout),
              ".lg-sub-html" === this.s.appendSubHtmlTo &&
                setTimeout(function () {
                  r.addHtml(t);
                }, n),
              this.arrowDisable(t),
              i || (t < l ? (i = "prev") : t > l && (i = "next")),
              o)
            )
              this.$slide.removeClass("lg-prev-slide lg-current lg-next-slide"),
                a > 2
                  ? ((c = t - 1),
                    (u = t + 1),
                    0 === t && l === a - 1
                      ? ((u = 0), (c = a - 1))
                      : t === a - 1 && 0 === l && ((u = 0), (c = a - 1)))
                  : ((c = 0), (u = 1)),
                "prev" === i
                  ? r.$slide.eq(u).addClass("lg-next-slide")
                  : r.$slide.eq(c).addClass("lg-prev-slide"),
                r.$slide.eq(t).addClass("lg-current");
            else
              r.$outer.addClass("lg-no-trans"),
                this.$slide.removeClass("lg-prev-slide lg-next-slide"),
                "prev" === i
                  ? (this.$slide.eq(t).addClass("lg-prev-slide"),
                    this.$slide.eq(l).addClass("lg-next-slide"))
                  : (this.$slide.eq(t).addClass("lg-next-slide"),
                    this.$slide.eq(l).addClass("lg-prev-slide")),
                setTimeout(function () {
                  r.$slide.removeClass("lg-current"),
                    r.$slide.eq(t).addClass("lg-current"),
                    r.$outer.removeClass("lg-no-trans");
                }, 50);
            r.lGalleryOn
              ? (setTimeout(function () {
                  r.loadContent(t, !0, 0);
                }, this.s.speed + 50),
                setTimeout(function () {
                  (r.lgBusy = !1),
                    r.$el.trigger("onAfterSlide.lg", [l, t, o, s]);
                }, this.s.speed))
              : (r.loadContent(t, !0, r.s.backdropDuration),
                (r.lgBusy = !1),
                r.$el.trigger("onAfterSlide.lg", [l, t, o, s])),
              (r.lGalleryOn = !0),
              this.s.counter && e("#lg-counter-current").text(t + 1);
          }
          r.index = t;
        }
      }),
      (t.prototype.goToNextSlide = function (e) {
        var t = this,
          o = t.s.loop;
        e && t.$slide.length < 3 && (o = !1),
          t.lgBusy ||
            (t.index + 1 < t.$slide.length
              ? (t.index++,
                t.$el.trigger("onBeforeNextSlide.lg", [t.index]),
                t.slide(t.index, e, !1, "next"))
              : o
              ? ((t.index = 0),
                t.$el.trigger("onBeforeNextSlide.lg", [t.index]),
                t.slide(t.index, e, !1, "next"))
              : t.s.slideEndAnimatoin &&
                !e &&
                (t.$outer.addClass("lg-right-end"),
                setTimeout(function () {
                  t.$outer.removeClass("lg-right-end");
                }, 400)));
      }),
      (t.prototype.goToPrevSlide = function (e) {
        var t = this,
          o = t.s.loop;
        e && t.$slide.length < 3 && (o = !1),
          t.lgBusy ||
            (t.index > 0
              ? (t.index--,
                t.$el.trigger("onBeforePrevSlide.lg", [t.index, e]),
                t.slide(t.index, e, !1, "prev"))
              : o
              ? ((t.index = t.$items.length - 1),
                t.$el.trigger("onBeforePrevSlide.lg", [t.index, e]),
                t.slide(t.index, e, !1, "prev"))
              : t.s.slideEndAnimatoin &&
                !e &&
                (t.$outer.addClass("lg-left-end"),
                setTimeout(function () {
                  t.$outer.removeClass("lg-left-end");
                }, 400)));
      }),
      (t.prototype.keyPress = function () {
        var t = this;
        this.$items.length > 1 &&
          e(window).on("keyup.lg", function (e) {
            t.$items.length > 1 &&
              (37 === e.keyCode && (e.preventDefault(), t.goToPrevSlide()),
              39 === e.keyCode && (e.preventDefault(), t.goToNextSlide()));
          }),
          e(window).on("keydown.lg", function (e) {
            !0 === t.s.escKey &&
              27 === e.keyCode &&
              (e.preventDefault(),
              t.$outer.hasClass("lg-thumb-open")
                ? t.$outer.removeClass("lg-thumb-open")
                : t.destroy());
          });
      }),
      (t.prototype.arrow = function () {
        var e = this;
        this.$outer.find(".lg-prev").on("click.lg", function () {
          e.goToPrevSlide();
        }),
          this.$outer.find(".lg-next").on("click.lg", function () {
            e.goToNextSlide();
          });
      }),
      (t.prototype.arrowDisable = function (e) {
        !this.s.loop &&
          this.s.hideControlOnEnd &&
          (e + 1 < this.$slide.length
            ? this.$outer
                .find(".lg-next")
                .removeAttr("disabled")
                .removeClass("disabled")
            : this.$outer
                .find(".lg-next")
                .attr("disabled", "disabled")
                .addClass("disabled"),
          e > 0
            ? this.$outer
                .find(".lg-prev")
                .removeAttr("disabled")
                .removeClass("disabled")
            : this.$outer
                .find(".lg-prev")
                .attr("disabled", "disabled")
                .addClass("disabled"));
      }),
      (t.prototype.setTranslate = function (e, t, o) {
        this.s.useLeft
          ? e.css("left", t)
          : e.css({ transform: "translate3d(" + t + "px, " + o + "px, 0px)" });
      }),
      (t.prototype.touchMove = function (t, o) {
        var s = o - t;
        Math.abs(s) > 15 &&
          (this.$outer.addClass("lg-dragging"),
          this.setTranslate(this.$slide.eq(this.index), s, 0),
          this.setTranslate(
            e(".lg-prev-slide"),
            -this.$slide.eq(this.index).width() + s,
            0
          ),
          this.setTranslate(
            e(".lg-next-slide"),
            this.$slide.eq(this.index).width() + s,
            0
          ));
      }),
      (t.prototype.touchEnd = function (e) {
        var t = this;
        "lg-slide" !== t.s.mode && t.$outer.addClass("lg-slide"),
          this.$slide
            .not(".lg-current, .lg-prev-slide, .lg-next-slide")
            .css("opacity", "0"),
          setTimeout(function () {
            t.$outer.removeClass("lg-dragging"),
              e < 0 && Math.abs(e) > t.s.swipeThreshold
                ? t.goToNextSlide(!0)
                : e > 0 && Math.abs(e) > t.s.swipeThreshold
                ? t.goToPrevSlide(!0)
                : Math.abs(e) < 5 && t.$el.trigger("onSlideClick.lg"),
              t.$slide.removeAttr("style");
          }),
          setTimeout(function () {
            t.$outer.hasClass("lg-dragging") ||
              "lg-slide" === t.s.mode ||
              t.$outer.removeClass("lg-slide");
          }, t.s.speed + 100);
      }),
      (t.prototype.enableSwipe = function () {
        var e = this,
          t = 0,
          o = 0,
          s = !1;
        e.s.enableSwipe &&
          e.doCss() &&
          (e.$slide.on("touchstart.lg", function (o) {
            e.$outer.hasClass("lg-zoomed") ||
              e.lgBusy ||
              (o.preventDefault(),
              e.manageSwipeClass(),
              (t = o.originalEvent.targetTouches[0].pageX));
          }),
          e.$slide.on("touchmove.lg", function (i) {
            e.$outer.hasClass("lg-zoomed") ||
              (i.preventDefault(),
              (o = i.originalEvent.targetTouches[0].pageX),
              e.touchMove(t, o),
              (s = !0));
          }),
          e.$slide.on("touchend.lg", function () {
            e.$outer.hasClass("lg-zoomed") ||
              (s
                ? ((s = !1), e.touchEnd(o - t))
                : e.$el.trigger("onSlideClick.lg"));
          }));
      }),
      (t.prototype.enableDrag = function () {
        var t = this,
          o = 0,
          s = 0,
          i = !1,
          l = !1;
        t.s.enableDrag &&
          t.doCss() &&
          (t.$slide.on("mousedown.lg", function (s) {
            t.$outer.hasClass("lg-zoomed") ||
              t.lgBusy ||
              e(s.target).text().trim() ||
              (s.preventDefault(),
              t.manageSwipeClass(),
              (o = s.pageX),
              (i = !0),
              (t.$outer.scrollLeft += 1),
              (t.$outer.scrollLeft -= 1),
              t.$outer.removeClass("lg-grab").addClass("lg-grabbing"),
              t.$el.trigger("onDragstart.lg"));
          }),
          e(window).on("mousemove.lg", function (e) {
            i &&
              ((l = !0),
              (s = e.pageX),
              t.touchMove(o, s),
              t.$el.trigger("onDragmove.lg"));
          }),
          e(window).on("mouseup.lg", function (r) {
            l
              ? ((l = !1), t.touchEnd(s - o), t.$el.trigger("onDragend.lg"))
              : (e(r.target).hasClass("lg-object") ||
                  e(r.target).hasClass("lg-video-play")) &&
                t.$el.trigger("onSlideClick.lg"),
              i &&
                ((i = !1),
                t.$outer.removeClass("lg-grabbing").addClass("lg-grab"));
          }));
      }),
      (t.prototype.manageSwipeClass = function () {
        var e = this.index + 1,
          t = this.index - 1;
        this.s.loop &&
          this.$slide.length > 2 &&
          (0 === this.index
            ? (t = this.$slide.length - 1)
            : this.index === this.$slide.length - 1 && (e = 0)),
          this.$slide.removeClass("lg-next-slide lg-prev-slide"),
          t > -1 && this.$slide.eq(t).addClass("lg-prev-slide"),
          this.$slide.eq(e).addClass("lg-next-slide");
      }),
      (t.prototype.mousewheel = function () {
        var e = this;
        e.$outer.on("mousewheel.lg", function (t) {
          t.deltaY &&
            (t.deltaY > 0 ? e.goToPrevSlide() : e.goToNextSlide(),
            t.preventDefault());
        });
      }),
      (t.prototype.closeGallery = function () {
        var t = this,
          o = !1;
        this.$outer.find(".lg-close").on("click.lg", function () {
          t.destroy();
        }),
          t.s.closable &&
            (t.$outer.on("mousedown.lg", function (t) {
              o = !!(
                e(t.target).is(".lg-outer") ||
                e(t.target).is(".lg-item ") ||
                e(t.target).is(".lg-img-wrap")
              );
            }),
            t.$outer.on("mousemove.lg", function () {
              o = !1;
            }),
            t.$outer.on("mouseup.lg", function (s) {
              (e(s.target).is(".lg-outer") ||
                e(s.target).is(".lg-item ") ||
                (e(s.target).is(".lg-img-wrap") && o)) &&
                (t.$outer.hasClass("lg-dragging") || t.destroy());
            }));
      }),
      (t.prototype.destroy = function (t) {
        var o = this;
        t ||
          (o.$el.trigger("onBeforeClose.lg"),
          e(window).scrollTop(o.prevScrollTop)),
          t &&
            (o.s.dynamic || this.$items.off("click.lg click.lgcustom"),
            e.removeData(o.el, "lightGallery")),
          this.$el.off(".lg.tm"),
          e.each(e.fn.lightGallery.modules, function (e) {
            o.modules[e] && o.modules[e].destroy();
          }),
          (this.lGalleryOn = !1),
          clearTimeout(o.hideBartimeout),
          (this.hideBartimeout = !1),
          e(window).off(".lg"),
          e("body").removeClass("lg-on lg-from-hash"),
          o.$outer && o.$outer.removeClass("lg-visible"),
          e(".lg-backdrop").removeClass("in"),
          setTimeout(function () {
            o.$outer && o.$outer.remove(),
              e(".lg-backdrop").remove(),
              t || o.$el.trigger("onCloseAfter.lg");
          }, o.s.backdropDuration + 50);
      }),
      (e.fn.lightGallery = function (o) {
        return this.each(function () {
          if (e.data(this, "lightGallery"))
            try {
              e(this).data("lightGallery").init();
            } catch (e) {
              console.error("lightGallery has not initiated properly");
            }
          else e.data(this, "lightGallery", new t(this, o));
        });
      }),
      (e.fn.lightGallery.modules = {});
  })();
}),
  (function (e, t) {
    "function" == typeof define && define.amd
      ? define(["jquery"], function (e) {
          return t(e);
        })
      : "object" == typeof exports
      ? (module.exports = t(require("jquery")))
      : t(jQuery);
  })(0, function (e) {
    !(function () {
      "use strict";
      var t = {
          autoplay: !1,
          pause: 5e3,
          progressBar: !0,
          fourceAutoplay: !1,
          autoplayControls: !0,
          appendAutoplayControlsTo: ".lg-toolbar",
        },
        o = function (o) {
          return (
            (this.core = e(o).data("lightGallery")),
            (this.$el = e(o)),
            !(this.core.$items.length < 2) &&
              ((this.core.s = e.extend({}, t, this.core.s)),
              (this.interval = !1),
              (this.fromAuto = !0),
              (this.canceledOnTouch = !1),
              (this.fourceAutoplayTemp = this.core.s.fourceAutoplay),
              this.core.doCss() || (this.core.s.progressBar = !1),
              this.init(),
              this)
          );
        };
      (o.prototype.init = function () {
        var e = this;
        e.core.s.autoplayControls && e.controls(),
          e.core.s.progressBar &&
            e.core.$outer
              .find(".lg")
              .append(
                '<div class="lg-progress-bar"><div class="lg-progress"></div></div>'
              ),
          e.progress(),
          e.core.s.autoplay &&
            e.$el.one("onSlideItemLoad.lg.tm", function () {
              e.startlAuto();
            }),
          e.$el.on("onDragstart.lg.tm touchstart.lg.tm", function () {
            e.interval && (e.cancelAuto(), (e.canceledOnTouch = !0));
          }),
          e.$el.on(
            "onDragend.lg.tm touchend.lg.tm onSlideClick.lg.tm",
            function () {
              !e.interval &&
                e.canceledOnTouch &&
                (e.startlAuto(), (e.canceledOnTouch = !1));
            }
          );
      }),
        (o.prototype.progress = function () {
          var e,
            t,
            o = this;
          o.$el.on("onBeforeSlide.lg.tm", function () {
            o.core.s.progressBar &&
              o.fromAuto &&
              ((e = o.core.$outer.find(".lg-progress-bar")),
              (t = o.core.$outer.find(".lg-progress")),
              o.interval &&
                (t.removeAttr("style"),
                e.removeClass("lg-start"),
                setTimeout(function () {
                  t.css(
                    "transition",
                    "width " + (o.core.s.speed + o.core.s.pause) + "ms ease 0s"
                  ),
                    e.addClass("lg-start");
                }, 20))),
              o.fromAuto || o.core.s.fourceAutoplay || o.cancelAuto(),
              (o.fromAuto = !1);
          });
        }),
        (o.prototype.controls = function () {
          var t = this;
          e(this.core.s.appendAutoplayControlsTo).append(
            '<span class="lg-autoplay-button lg-icon"></span>'
          ),
            t.core.$outer
              .find(".lg-autoplay-button")
              .on("click.lg", function () {
                e(t.core.$outer).hasClass("lg-show-autoplay")
                  ? (t.cancelAuto(), (t.core.s.fourceAutoplay = !1))
                  : t.interval ||
                    (t.startlAuto(),
                    (t.core.s.fourceAutoplay = t.fourceAutoplayTemp));
              });
        }),
        (o.prototype.startlAuto = function () {
          var e = this;
          e.core.$outer
            .find(".lg-progress")
            .css(
              "transition",
              "width " + (e.core.s.speed + e.core.s.pause) + "ms ease 0s"
            ),
            e.core.$outer.addClass("lg-show-autoplay"),
            e.core.$outer.find(".lg-progress-bar").addClass("lg-start"),
            (e.interval = setInterval(function () {
              e.core.index + 1 < e.core.$items.length
                ? e.core.index++
                : (e.core.index = 0),
                (e.fromAuto = !0),
                e.core.slide(e.core.index, !1, !1, "next");
            }, e.core.s.speed + e.core.s.pause));
        }),
        (o.prototype.cancelAuto = function () {
          clearInterval(this.interval),
            (this.interval = !1),
            this.core.$outer.find(".lg-progress").removeAttr("style"),
            this.core.$outer.removeClass("lg-show-autoplay"),
            this.core.$outer.find(".lg-progress-bar").removeClass("lg-start");
        }),
        (o.prototype.destroy = function () {
          this.cancelAuto(), this.core.$outer.find(".lg-progress-bar").remove();
        }),
        (e.fn.lightGallery.modules.autoplay = o);
    })();
  }),
  (function (e, t) {
    "function" == typeof define && define.amd
      ? define(["jquery"], function (e) {
          return t(e);
        })
      : "object" == typeof exports
      ? (module.exports = t(require("jquery")))
      : t(jQuery);
  })(0, function (e) {
    !(function () {
      "use strict";
      var t = { fullScreen: !0 },
        o = function (o) {
          return (
            (this.core = e(o).data("lightGallery")),
            (this.$el = e(o)),
            (this.core.s = e.extend({}, t, this.core.s)),
            this.init(),
            this
          );
        };
      (o.prototype.init = function () {
        var e = "";
        if (this.core.s.fullScreen) {
          if (
            !(
              document.fullscreenEnabled ||
              document.webkitFullscreenEnabled ||
              document.mozFullScreenEnabled ||
              document.msFullscreenEnabled
            )
          )
            return;
          (e = '<span class="lg-fullscreen lg-icon"></span>'),
            this.core.$outer.find(".lg-toolbar").append(e),
            this.fullScreen();
        }
      }),
        (o.prototype.requestFullscreen = function () {
          var e = document.documentElement;
          e.requestFullscreen
            ? e.requestFullscreen()
            : e.msRequestFullscreen
            ? e.msRequestFullscreen()
            : e.mozRequestFullScreen
            ? e.mozRequestFullScreen()
            : e.webkitRequestFullscreen && e.webkitRequestFullscreen();
        }),
        (o.prototype.exitFullscreen = function () {
          document.exitFullscreen
            ? document.exitFullscreen()
            : document.msExitFullscreen
            ? document.msExitFullscreen()
            : document.mozCancelFullScreen
            ? document.mozCancelFullScreen()
            : document.webkitExitFullscreen && document.webkitExitFullscreen();
        }),
        (o.prototype.fullScreen = function () {
          var t = this;
          e(document).on(
            "fullscreenchange.lg webkitfullscreenchange.lg mozfullscreenchange.lg MSFullscreenChange.lg",
            function () {
              t.core.$outer.toggleClass("lg-fullscreen-on");
            }
          ),
            this.core.$outer.find(".lg-fullscreen").on("click.lg", function () {
              document.fullscreenElement ||
              document.mozFullScreenElement ||
              document.webkitFullscreenElement ||
              document.msFullscreenElement
                ? t.exitFullscreen()
                : t.requestFullscreen();
            });
        }),
        (o.prototype.destroy = function () {
          this.exitFullscreen(),
            e(document).off(
              "fullscreenchange.lg webkitfullscreenchange.lg mozfullscreenchange.lg MSFullscreenChange.lg"
            );
        }),
        (e.fn.lightGallery.modules.fullscreen = o);
    })();
  }),
  (function (e, t) {
    "function" == typeof define && define.amd
      ? define(["jquery"], function (e) {
          return t(e);
        })
      : "object" == typeof exports
      ? (module.exports = t(require("jquery")))
      : t(jQuery);
  })(0, function (e) {
    !(function () {
      "use strict";
      var t = { pager: !1 },
        o = function (o) {
          return (
            (this.core = e(o).data("lightGallery")),
            (this.$el = e(o)),
            (this.core.s = e.extend({}, t, this.core.s)),
            this.core.s.pager && this.core.$items.length > 1 && this.init(),
            this
          );
        };
      (o.prototype.init = function () {
        var t,
          o,
          s,
          i = this,
          l = "";
        if (
          (i.core.$outer
            .find(".lg")
            .append('<div class="lg-pager-outer"></div>'),
          i.core.s.dynamic)
        )
          for (var r = 0; r < i.core.s.dynamicEl.length; r++)
            l +=
              '<span class="lg-pager-cont"> <span class="lg-pager"></span><div class="lg-pager-thumb-cont"><span class="lg-caret"></span> <img src="' +
              i.core.s.dynamicEl[r].thumb +
              '" /></div></span>';
        else
          i.core.$items.each(function () {
            i.core.s.exThumbImage
              ? (l +=
                  '<span class="lg-pager-cont"> <span class="lg-pager"></span><div class="lg-pager-thumb-cont"><span class="lg-caret"></span> <img src="' +
                  e(this).attr(i.core.s.exThumbImage) +
                  '" /></div></span>')
              : (l +=
                  '<span class="lg-pager-cont"> <span class="lg-pager"></span><div class="lg-pager-thumb-cont"><span class="lg-caret"></span> <img src="' +
                  e(this).find("img").attr("src") +
                  '" /></div></span>');
          });
        (o = i.core.$outer.find(".lg-pager-outer")).html(l),
          (t = i.core.$outer.find(".lg-pager-cont")).on(
            "click.lg touchend.lg",
            function () {
              var t = e(this);
              (i.core.index = t.index()),
                i.core.slide(i.core.index, !1, !0, !1);
            }
          ),
          o.on("mouseover.lg", function () {
            clearTimeout(s), o.addClass("lg-pager-hover");
          }),
          o.on("mouseout.lg", function () {
            s = setTimeout(function () {
              o.removeClass("lg-pager-hover");
            });
          }),
          i.core.$el.on("onBeforeSlide.lg.tm", function (e, o, s) {
            t.removeClass("lg-pager-active"),
              t.eq(s).addClass("lg-pager-active");
          });
      }),
        (o.prototype.destroy = function () {}),
        (e.fn.lightGallery.modules.pager = o);
    })();
  }),
  (function (e, t) {
    "function" == typeof define && define.amd
      ? define(["jquery"], function (e) {
          return t(e);
        })
      : "object" == typeof exports
      ? (module.exports = t(require("jquery")))
      : t(jQuery);
  })(0, function (e) {
    !(function () {
      "use strict";
      var t = {
          thumbnail: !0,
          animateThumb: !0,
          currentPagerPosition: "middle",
          thumbWidth: 100,
          thumbHeight: "80px",
          thumbContHeight: 100,
          thumbMargin: 5,
          exThumbImage: !1,
          showThumbByDefault: !0,
          toogleThumb: !0,
          pullCaptionUp: !0,
          enableThumbDrag: !0,
          enableThumbSwipe: !0,
          swipeThreshold: 50,
          loadYoutubeThumbnail: !0,
          youtubeThumbSize: 1,
          loadVimeoThumbnail: !0,
          vimeoThumbSize: "thumbnail_small",
          loadDailymotionThumbnail: !0,
        },
        o = function (o) {
          return (
            (this.core = e(o).data("lightGallery")),
            (this.core.s = e.extend({}, t, this.core.s)),
            (this.$el = e(o)),
            (this.$thumbOuter = null),
            (this.thumbOuterWidth = 0),
            (this.thumbTotalWidth =
              this.core.$items.length *
              (this.core.s.thumbWidth + this.core.s.thumbMargin)),
            (this.thumbIndex = this.core.index),
            this.core.s.animateThumb && (this.core.s.thumbHeight = "100%"),
            (this.left = 0),
            this.init(),
            this
          );
        };
      (o.prototype.init = function () {
        var e = this;
        this.core.s.thumbnail &&
          this.core.$items.length > 1 &&
          (this.core.s.showThumbByDefault &&
            setTimeout(function () {
              e.core.$outer.addClass("lg-thumb-open");
            }, 700),
          this.core.s.pullCaptionUp &&
            this.core.$outer.addClass("lg-pull-caption-up"),
          this.build(),
          this.core.s.animateThumb && this.core.doCss()
            ? (this.core.s.enableThumbDrag && this.enableThumbDrag(),
              this.core.s.enableThumbSwipe && this.enableThumbSwipe(),
              (this.thumbClickable = !1))
            : (this.thumbClickable = !0),
          this.toogle(),
          this.thumbkeyPress());
      }),
        (o.prototype.build = function () {
          function t(e, t, o) {
            var r,
              a = s.core.isVideo(e, o) || {},
              n = "";
            a.youtube || a.vimeo || a.dailymotion
              ? a.youtube
                ? (r = s.core.s.loadYoutubeThumbnail
                    ? "//img.youtube.com/vi/" +
                      a.youtube[1] +
                      "/" +
                      s.core.s.youtubeThumbSize +
                      ".jpg"
                    : t)
                : a.vimeo
                ? s.core.s.loadVimeoThumbnail
                  ? ((r = "//i.vimeocdn.com/video/error_" + l + ".jpg"),
                    (n = a.vimeo[1]))
                  : (r = t)
                : a.dailymotion &&
                  (r = s.core.s.loadDailymotionThumbnail
                    ? "//www.dailymotion.com/thumbnail/video/" +
                      a.dailymotion[1]
                    : t)
              : (r = t),
              (i +=
                '<div data-vimeo-id="' +
                n +
                '" class="lg-thumb-item" style="width:' +
                s.core.s.thumbWidth +
                "px; height: " +
                s.core.s.thumbHeight +
                "; margin-right: " +
                s.core.s.thumbMargin +
                'px"><img src="' +
                r +
                '" /></div>'),
              (n = "");
          }
          var o,
            s = this,
            i = "",
            l = "";
          switch (this.core.s.vimeoThumbSize) {
            case "thumbnail_large":
              l = "640";
              break;
            case "thumbnail_medium":
              l = "200x150";
              break;
            case "thumbnail_small":
              l = "100x75";
          }
          if (
            (s.core.$outer.addClass("lg-has-thumb"),
            s.core.$outer
              .find(".lg")
              .append(
                '<div class="lg-thumb-outer"><div class="lg-thumb lg-group"></div></div>'
              ),
            (s.$thumbOuter = s.core.$outer.find(".lg-thumb-outer")),
            (s.thumbOuterWidth = s.$thumbOuter.width()),
            s.core.s.animateThumb &&
              s.core.$outer
                .find(".lg-thumb")
                .css({ width: s.thumbTotalWidth + "px", position: "relative" }),
            this.core.s.animateThumb &&
              s.$thumbOuter.css("height", s.core.s.thumbContHeight + "px"),
            s.core.s.dynamic)
          )
            for (var r = 0; r < s.core.s.dynamicEl.length; r++)
              t(s.core.s.dynamicEl[r].src, s.core.s.dynamicEl[r].thumb, r);
          else
            s.core.$items.each(function (o) {
              s.core.s.exThumbImage
                ? t(
                    e(this).attr("href") || e(this).attr("data-src"),
                    e(this).attr(s.core.s.exThumbImage),
                    o
                  )
                : t(
                    e(this).attr("href") || e(this).attr("data-src"),
                    e(this).find("img").attr("src"),
                    o
                  );
            });
          s.core.$outer.find(".lg-thumb").html(i),
            (o = s.core.$outer.find(".lg-thumb-item")).each(function () {
              var t = e(this),
                o = t.attr("data-vimeo-id");
              o &&
                e.getJSON(
                  "//www.vimeo.com/api/v2/video/" + o + ".json?callback=?",
                  { format: "json" },
                  function (e) {
                    t.find("img").attr("src", e[0][s.core.s.vimeoThumbSize]);
                  }
                );
            }),
            o.eq(s.core.index).addClass("active"),
            s.core.$el.on("onBeforeSlide.lg.tm", function () {
              o.removeClass("active"), o.eq(s.core.index).addClass("active");
            }),
            o.on("click.lg touchend.lg", function () {
              var t = e(this);
              setTimeout(function () {
                ((s.thumbClickable && !s.core.lgBusy) || !s.core.doCss()) &&
                  ((s.core.index = t.index()),
                  s.core.slide(s.core.index, !1, !0, !1));
              }, 50);
            }),
            s.core.$el.on("onBeforeSlide.lg.tm", function () {
              s.animateThumb(s.core.index);
            }),
            e(window).on(
              "resize.lg.thumb orientationchange.lg.thumb",
              function () {
                setTimeout(function () {
                  s.animateThumb(s.core.index),
                    (s.thumbOuterWidth = s.$thumbOuter.width());
                }, 200);
              }
            );
        }),
        (o.prototype.setTranslate = function (e) {
          this.core.$outer
            .find(".lg-thumb")
            .css({ transform: "translate3d(-" + e + "px, 0px, 0px)" });
        }),
        (o.prototype.animateThumb = function (e) {
          var t = this.core.$outer.find(".lg-thumb");
          if (this.core.s.animateThumb) {
            var o;
            switch (this.core.s.currentPagerPosition) {
              case "left":
                o = 0;
                break;
              case "middle":
                o = this.thumbOuterWidth / 2 - this.core.s.thumbWidth / 2;
                break;
              case "right":
                o = this.thumbOuterWidth - this.core.s.thumbWidth;
            }
            (this.left =
              (this.core.s.thumbWidth + this.core.s.thumbMargin) * e - 1 - o),
              this.left > this.thumbTotalWidth - this.thumbOuterWidth &&
                (this.left = this.thumbTotalWidth - this.thumbOuterWidth),
              this.left < 0 && (this.left = 0),
              this.core.lGalleryOn
                ? (t.hasClass("on") ||
                    this.core.$outer
                      .find(".lg-thumb")
                      .css("transition-duration", this.core.s.speed + "ms"),
                  this.core.doCss() ||
                    t.animate({ left: -this.left + "px" }, this.core.s.speed))
                : this.core.doCss() || t.css("left", -this.left + "px"),
              this.setTranslate(this.left);
          }
        }),
        (o.prototype.enableThumbDrag = function () {
          var t = this,
            o = 0,
            s = 0,
            i = !1,
            l = !1,
            r = 0;
          t.$thumbOuter.addClass("lg-grab"),
            t.core.$outer
              .find(".lg-thumb")
              .on("mousedown.lg.thumb", function (e) {
                t.thumbTotalWidth > t.thumbOuterWidth &&
                  (e.preventDefault(),
                  (o = e.pageX),
                  (i = !0),
                  (t.core.$outer.scrollLeft += 1),
                  (t.core.$outer.scrollLeft -= 1),
                  (t.thumbClickable = !1),
                  t.$thumbOuter.removeClass("lg-grab").addClass("lg-grabbing"));
              }),
            e(window).on("mousemove.lg.thumb", function (e) {
              i &&
                ((r = t.left),
                (l = !0),
                (s = e.pageX),
                t.$thumbOuter.addClass("lg-dragging"),
                (r -= s - o) > t.thumbTotalWidth - t.thumbOuterWidth &&
                  (r = t.thumbTotalWidth - t.thumbOuterWidth),
                r < 0 && (r = 0),
                t.setTranslate(r));
            }),
            e(window).on("mouseup.lg.thumb", function () {
              l
                ? ((l = !1),
                  t.$thumbOuter.removeClass("lg-dragging"),
                  (t.left = r),
                  Math.abs(s - o) < t.core.s.swipeThreshold &&
                    (t.thumbClickable = !0))
                : (t.thumbClickable = !0),
                i &&
                  ((i = !1),
                  t.$thumbOuter.removeClass("lg-grabbing").addClass("lg-grab"));
            });
        }),
        (o.prototype.enableThumbSwipe = function () {
          var e = this,
            t = 0,
            o = 0,
            s = !1,
            i = 0;
          e.core.$outer.find(".lg-thumb").on("touchstart.lg", function (o) {
            e.thumbTotalWidth > e.thumbOuterWidth &&
              (o.preventDefault(),
              (t = o.originalEvent.targetTouches[0].pageX),
              (e.thumbClickable = !1));
          }),
            e.core.$outer.find(".lg-thumb").on("touchmove.lg", function (l) {
              e.thumbTotalWidth > e.thumbOuterWidth &&
                (l.preventDefault(),
                (o = l.originalEvent.targetTouches[0].pageX),
                (s = !0),
                e.$thumbOuter.addClass("lg-dragging"),
                (i = e.left),
                (i -= o - t) > e.thumbTotalWidth - e.thumbOuterWidth &&
                  (i = e.thumbTotalWidth - e.thumbOuterWidth),
                i < 0 && (i = 0),
                e.setTranslate(i));
            }),
            e.core.$outer.find(".lg-thumb").on("touchend.lg", function () {
              e.thumbTotalWidth > e.thumbOuterWidth && s
                ? ((s = !1),
                  e.$thumbOuter.removeClass("lg-dragging"),
                  Math.abs(o - t) < e.core.s.swipeThreshold &&
                    (e.thumbClickable = !0),
                  (e.left = i))
                : (e.thumbClickable = !0);
            });
        }),
        (o.prototype.toogle = function () {
          var e = this;
          e.core.s.toogleThumb &&
            (e.core.$outer.addClass("lg-can-toggle"),
            e.$thumbOuter.append(
              '<span class="lg-toogle-thumb lg-icon"></span>'
            ),
            e.core.$outer.find(".lg-toogle-thumb").on("click.lg", function () {
              e.core.$outer.toggleClass("lg-thumb-open");
            }));
        }),
        (o.prototype.thumbkeyPress = function () {
          var t = this;
          e(window).on("keydown.lg.thumb", function (e) {
            38 === e.keyCode
              ? (e.preventDefault(), t.core.$outer.addClass("lg-thumb-open"))
              : 40 === e.keyCode &&
                (e.preventDefault(),
                t.core.$outer.removeClass("lg-thumb-open"));
          });
        }),
        (o.prototype.destroy = function () {
          this.core.s.thumbnail &&
            this.core.$items.length > 1 &&
            (e(window).off(
              "resize.lg.thumb orientationchange.lg.thumb keydown.lg.thumb"
            ),
            this.$thumbOuter.remove(),
            this.core.$outer.removeClass("lg-has-thumb"));
        }),
        (e.fn.lightGallery.modules.Thumbnail = o);
    })();
  }),
  (function (e, t) {
    "function" == typeof define && define.amd
      ? define(["jquery"], function (e) {
          return t(e);
        })
      : "object" == typeof module && module.exports
      ? (module.exports = t(require("jquery")))
      : t(e.jQuery);
  })(this, function (e) {
    !(function () {
      "use strict";
      var t = {
          videoMaxWidth: "855px",
          autoplayFirstVideo: !0,
          youtubePlayerParams: !1,
          vimeoPlayerParams: !1,
          dailymotionPlayerParams: !1,
          vkPlayerParams: !1,
          videojs: !1,
          videojsOptions: {},
        },
        o = function (o) {
          return (
            (this.core = e(o).data("lightGallery")),
            (this.$el = e(o)),
            (this.core.s = e.extend({}, t, this.core.s)),
            (this.videoLoaded = !1),
            this.init(),
            this
          );
        };
      (o.prototype.init = function () {
        var t = this;
        t.core.$el.on(
          "hasVideo.lg.tm",
          function (e, t, o, s) {
            var i = this;
            if (
              (i.core.$slide
                .eq(t)
                .find(".lg-video")
                .append(i.loadVideo(o, "lg-object", !0, t, s)),
              s)
            )
              if (i.core.s.videojs)
                try {
                  videojs(
                    i.core.$slide.eq(t).find(".lg-html5").get(0),
                    i.core.s.videojsOptions,
                    function () {
                      !i.videoLoaded &&
                        i.core.s.autoplayFirstVideo &&
                        this.play();
                    }
                  );
                } catch (e) {
                  console.error("Make sure you have included videojs");
                }
              else
                !i.videoLoaded &&
                  i.core.s.autoplayFirstVideo &&
                  i.core.$slide.eq(t).find(".lg-html5").get(0).play();
          }.bind(this)
        ),
          t.core.$el.on(
            "onAferAppendSlide.lg.tm",
            function (e, t) {
              var o = this.core.$slide.eq(t).find(".lg-video-cont");
              o.hasClass("lg-has-iframe") ||
                (o.css("max-width", this.core.s.videoMaxWidth),
                (this.videoLoaded = !0));
            }.bind(this)
          ),
          t.core.doCss() &&
          t.core.$items.length > 1 &&
          (t.core.s.enableSwipe || t.core.s.enableDrag)
            ? t.core.$el.on("onSlideClick.lg.tm", function () {
                var e = t.core.$slide.eq(t.core.index);
                t.loadVideoOnclick(e);
              })
            : t.core.$slide.on("click.lg", function () {
                t.loadVideoOnclick(e(this));
              }),
          t.core.$el.on(
            "onBeforeSlide.lg.tm",
            function (t, o, s) {
              var i,
                l = this,
                r = l.core.$slide.eq(o),
                a = r.find(".lg-youtube").get(0),
                n = r.find(".lg-vimeo").get(0),
                d = r.find(".lg-dailymotion").get(0),
                c = r.find(".lg-vk").get(0),
                u = r.find(".lg-html5").get(0);
              if (a)
                a.contentWindow.postMessage(
                  '{"event":"command","func":"pauseVideo","args":""}',
                  "*"
                );
              else if (n)
                try {
                  $f(n).api("pause");
                } catch (e) {
                  console.error("Make sure you have included froogaloop2 js");
                }
              else if (d) d.contentWindow.postMessage("pause", "*");
              else if (u)
                if (l.core.s.videojs)
                  try {
                    videojs(u).pause();
                  } catch (e) {
                    console.error("Make sure you have included videojs");
                  }
                else u.pause();
              c &&
                e(c).attr(
                  "src",
                  e(c).attr("src").replace("&autoplay", "&noplay")
                ),
                (i = l.core.s.dynamic
                  ? l.core.s.dynamicEl[s].src
                  : l.core.$items.eq(s).attr("href") ||
                    l.core.$items.eq(s).attr("data-src"));
              var h = l.core.isVideo(i, s) || {};
              (h.youtube || h.vimeo || h.dailymotion || h.vk) &&
                l.core.$outer.addClass("lg-hide-download");
            }.bind(this)
          ),
          t.core.$el.on("onAfterSlide.lg.tm", function (e, o) {
            t.core.$slide.eq(o).removeClass("lg-video-playing");
          }),
          t.core.s.autoplayFirstVideo &&
            t.core.$el.on("onAferAppendSlide.lg.tm", function (e, o) {
              if (!t.core.lGalleryOn) {
                var s = t.core.$slide.eq(o);
                setTimeout(function () {
                  t.loadVideoOnclick(s);
                }, 100);
              }
            });
      }),
        (o.prototype.loadVideo = function (t, o, s, i, l) {
          var r = "",
            a = 1,
            n = "",
            d = this.core.isVideo(t, i) || {};
          if (
            (s &&
              (a = this.videoLoaded
                ? 0
                : this.core.s.autoplayFirstVideo
                ? 1
                : 0),
            d.youtube)
          )
            (n = "?wmode=opaque&autoplay=" + a + "&enablejsapi=1"),
              this.core.s.youtubePlayerParams &&
                (n = n + "&" + e.param(this.core.s.youtubePlayerParams)),
              (r =
                '<iframe class="lg-video-object lg-youtube ' +
                o +
                '" width="560" height="315" src="//www.youtube.com/embed/' +
                d.youtube[1] +
                n +
                '" frameborder="0" allowfullscreen></iframe>');
          else if (d.vimeo)
            (n = "?autoplay=" + a + "&api=1"),
              this.core.s.vimeoPlayerParams &&
                (n = n + "&" + e.param(this.core.s.vimeoPlayerParams)),
              (r =
                '<iframe class="lg-video-object lg-vimeo ' +
                o +
                '" width="560" height="315"  src="//player.vimeo.com/video/' +
                d.vimeo[1] +
                n +
                '" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>');
          else if (d.dailymotion)
            (n = "?wmode=opaque&autoplay=" + a + "&api=postMessage"),
              this.core.s.dailymotionPlayerParams &&
                (n = n + "&" + e.param(this.core.s.dailymotionPlayerParams)),
              (r =
                '<iframe class="lg-video-object lg-dailymotion ' +
                o +
                '" width="560" height="315" src="//www.dailymotion.com/embed/video/' +
                d.dailymotion[1] +
                n +
                '" frameborder="0" allowfullscreen></iframe>');
          else if (d.html5) {
            var c = l.substring(0, 1);
            ("." !== c && "#" !== c) || (l = e(l).html()), (r = l);
          } else
            d.vk &&
              ((n = "&autoplay=" + a),
              this.core.s.vkPlayerParams &&
                (n = n + "&" + e.param(this.core.s.vkPlayerParams)),
              (r =
                '<iframe class="lg-video-object lg-vk ' +
                o +
                '" width="560" height="315" src="//vk.com/video_ext.php?' +
                d.vk[1] +
                n +
                '" frameborder="0" allowfullscreen></iframe>'));
          return r;
        }),
        (o.prototype.loadVideoOnclick = function (e) {
          var t = this;
          if (
            e.find(".lg-object").hasClass("lg-has-poster") &&
            e.find(".lg-object").is(":visible")
          )
            if (e.hasClass("lg-has-video")) {
              var o = e.find(".lg-youtube").get(0),
                s = e.find(".lg-vimeo").get(0),
                i = e.find(".lg-dailymotion").get(0),
                l = e.find(".lg-html5").get(0);
              if (o)
                o.contentWindow.postMessage(
                  '{"event":"command","func":"playVideo","args":""}',
                  "*"
                );
              else if (s)
                try {
                  $f(s).api("play");
                } catch (e) {
                  console.error("Make sure you have included froogaloop2 js");
                }
              else if (i) i.contentWindow.postMessage("play", "*");
              else if (l)
                if (t.core.s.videojs)
                  try {
                    videojs(l).play();
                  } catch (e) {
                    console.error("Make sure you have included videojs");
                  }
                else l.play();
              e.addClass("lg-video-playing");
            } else {
              e.addClass("lg-video-playing lg-has-video");
              var r = function (o, s) {
                if (
                  (e
                    .find(".lg-video")
                    .append(t.loadVideo(o, "", !1, t.core.index, s)),
                  s)
                )
                  if (t.core.s.videojs)
                    try {
                      videojs(
                        t.core.$slide.eq(t.core.index).find(".lg-html5").get(0),
                        t.core.s.videojsOptions,
                        function () {
                          this.play();
                        }
                      );
                    } catch (e) {
                      console.error("Make sure you have included videojs");
                    }
                  else
                    t.core.$slide
                      .eq(t.core.index)
                      .find(".lg-html5")
                      .get(0)
                      .play();
              };
              t.core.s.dynamic
                ? r(
                    t.core.s.dynamicEl[t.core.index].src,
                    t.core.s.dynamicEl[t.core.index].html
                  )
                : r(
                    t.core.$items.eq(t.core.index).attr("href") ||
                      t.core.$items.eq(t.core.index).attr("data-src"),
                    t.core.$items.eq(t.core.index).attr("data-html")
                  );
              var a = e.find(".lg-object");
              e.find(".lg-video").append(a),
                e.find(".lg-video-object").hasClass("lg-html5") ||
                  (e.removeClass("lg-complete"),
                  e
                    .find(".lg-video-object")
                    .on("load.lg error.lg", function () {
                      e.addClass("lg-complete");
                    }));
            }
        }),
        (o.prototype.destroy = function () {
          this.videoLoaded = !1;
        }),
        (e.fn.lightGallery.modules.video = o);
    })();
  }),
  (function (e, t) {
    "function" == typeof define && define.amd
      ? define(["jquery"], function (e) {
          return t(e);
        })
      : "object" == typeof exports
      ? (module.exports = t(require("jquery")))
      : t(jQuery);
  })(0, function (e) {
    !(function () {
      "use strict";
      var t = {
          scale: 1,
          zoom: !0,
          actualSize: !0,
          enableZoomAfter: 300,
          useLeftForZoom: (function () {
            var e = !1,
              t = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);
            return t && parseInt(t[2], 10) < 54 && (e = !0), e;
          })(),
        },
        o = function (o) {
          return (
            (this.core = e(o).data("lightGallery")),
            (this.core.s = e.extend({}, t, this.core.s)),
            this.core.s.zoom &&
              this.core.doCss() &&
              (this.init(),
              (this.zoomabletimeout = !1),
              (this.pageX = e(window).width() / 2),
              (this.pageY = e(window).height() / 2 + e(window).scrollTop())),
            this
          );
        };
      (o.prototype.init = function () {
        var t = this,
          o =
            '<span id="lg-zoom-in" class="lg-icon"></span><span id="lg-zoom-out" class="lg-icon"></span>';
        t.core.s.actualSize &&
          (o += '<span id="lg-actual-size" class="lg-icon"></span>'),
          t.core.s.useLeftForZoom
            ? t.core.$outer.addClass("lg-use-left-for-zoom")
            : t.core.$outer.addClass("lg-use-transition-for-zoom"),
          this.core.$outer.find(".lg-toolbar").append(o),
          t.core.$el.on("onSlideItemLoad.lg.tm.zoom", function (o, s, i) {
            var l = t.core.s.enableZoomAfter + i;
            e("body").hasClass("lg-from-hash") && i
              ? (l = 0)
              : e("body").removeClass("lg-from-hash"),
              (t.zoomabletimeout = setTimeout(function () {
                t.core.$slide.eq(s).addClass("lg-zoomable");
              }, l + 30));
          });
        var s = 1,
          i = function (o) {
            var s = t.core.$outer.find(".lg-current .lg-image"),
              i = (e(window).width() - s.prop("offsetWidth")) / 2,
              l =
                (e(window).height() - s.prop("offsetHeight")) / 2 +
                e(window).scrollTop(),
              r = (o - 1) * (t.pageX - i),
              a = (o - 1) * (t.pageY - l);
            s
              .css("transform", "scale3d(" + o + ", " + o + ", 1)")
              .attr("data-scale", o),
              t.core.s.useLeftForZoom
                ? s
                    .parent()
                    .css({ left: -r + "px", top: -a + "px" })
                    .attr("data-x", r)
                    .attr("data-y", a)
                : s
                    .parent()
                    .css(
                      "transform",
                      "translate3d(-" + r + "px, -" + a + "px, 0)"
                    )
                    .attr("data-x", r)
                    .attr("data-y", a);
          },
          l = function () {
            s > 1 ? t.core.$outer.addClass("lg-zoomed") : t.resetZoom(),
              s < 1 && (s = 1),
              i(s);
          },
          r = function (o, i, r, a) {
            var n,
              d = i.prop("offsetWidth");
            (n = t.core.s.dynamic
              ? t.core.s.dynamicEl[r].width || i[0].naturalWidth || d
              : t.core.$items.eq(r).attr("data-width") ||
                i[0].naturalWidth ||
                d),
              t.core.$outer.hasClass("lg-zoomed")
                ? (s = 1)
                : n > d && (s = n / d || 2),
              a
                ? ((t.pageX = e(window).width() / 2),
                  (t.pageY = e(window).height() / 2 + e(window).scrollTop()))
                : ((t.pageX =
                    o.pageX || o.originalEvent.targetTouches[0].pageX),
                  (t.pageY =
                    o.pageY || o.originalEvent.targetTouches[0].pageY)),
              l(),
              setTimeout(function () {
                t.core.$outer.removeClass("lg-grabbing").addClass("lg-grab");
              }, 10);
          },
          a = !1;
        t.core.$el.on("onAferAppendSlide.lg.tm.zoom", function (e, o) {
          var s = t.core.$slide.eq(o).find(".lg-image");
          s.on("dblclick", function (e) {
            r(e, s, o);
          }),
            s.on("touchstart", function (e) {
              a
                ? (clearTimeout(a), (a = null), r(e, s, o))
                : (a = setTimeout(function () {
                    a = null;
                  }, 300)),
                e.preventDefault();
            });
        }),
          e(window).on(
            "resize.lg.zoom scroll.lg.zoom orientationchange.lg.zoom",
            function () {
              (t.pageX = e(window).width() / 2),
                (t.pageY = e(window).height() / 2 + e(window).scrollTop()),
                i(s);
            }
          ),
          e("#lg-zoom-out").on("click.lg", function () {
            t.core.$outer.find(".lg-current .lg-image").length &&
              ((s -= t.core.s.scale), l());
          }),
          e("#lg-zoom-in").on("click.lg", function () {
            t.core.$outer.find(".lg-current .lg-image").length &&
              ((s += t.core.s.scale), l());
          }),
          e("#lg-actual-size").on("click.lg", function (e) {
            r(
              e,
              t.core.$slide.eq(t.core.index).find(".lg-image"),
              t.core.index,
              !0
            );
          }),
          t.core.$el.on("onBeforeSlide.lg.tm", function () {
            (s = 1), t.resetZoom();
          }),
          t.zoomDrag(),
          t.zoomSwipe();
      }),
        (o.prototype.resetZoom = function () {
          this.core.$outer.removeClass("lg-zoomed"),
            this.core.$slide
              .find(".lg-img-wrap")
              .removeAttr("style data-x data-y"),
            this.core.$slide.find(".lg-image").removeAttr("style data-scale"),
            (this.pageX = e(window).width() / 2),
            (this.pageY = e(window).height() / 2 + e(window).scrollTop());
        }),
        (o.prototype.zoomSwipe = function () {
          var e = this,
            t = {},
            o = {},
            s = !1,
            i = !1,
            l = !1;
          e.core.$slide.on("touchstart.lg", function (o) {
            if (e.core.$outer.hasClass("lg-zoomed")) {
              var s = e.core.$slide.eq(e.core.index).find(".lg-object");
              (l =
                s.prop("offsetHeight") * s.attr("data-scale") >
                e.core.$outer.find(".lg").height()),
                ((i =
                  s.prop("offsetWidth") * s.attr("data-scale") >
                  e.core.$outer.find(".lg").width()) ||
                  l) &&
                  (o.preventDefault(),
                  (t = {
                    x: o.originalEvent.targetTouches[0].pageX,
                    y: o.originalEvent.targetTouches[0].pageY,
                  }));
            }
          }),
            e.core.$slide.on("touchmove.lg", function (r) {
              if (e.core.$outer.hasClass("lg-zoomed")) {
                var a,
                  n,
                  d = e.core.$slide.eq(e.core.index).find(".lg-img-wrap");
                r.preventDefault(),
                  (s = !0),
                  (o = {
                    x: r.originalEvent.targetTouches[0].pageX,
                    y: r.originalEvent.targetTouches[0].pageY,
                  }),
                  e.core.$outer.addClass("lg-zoom-dragging"),
                  (n = l
                    ? -Math.abs(d.attr("data-y")) + (o.y - t.y)
                    : -Math.abs(d.attr("data-y"))),
                  (a = i
                    ? -Math.abs(d.attr("data-x")) + (o.x - t.x)
                    : -Math.abs(d.attr("data-x"))),
                  (Math.abs(o.x - t.x) > 15 || Math.abs(o.y - t.y) > 15) &&
                    (e.core.s.useLeftForZoom
                      ? d.css({ left: a + "px", top: n + "px" })
                      : d.css(
                          "transform",
                          "translate3d(" + a + "px, " + n + "px, 0)"
                        ));
              }
            }),
            e.core.$slide.on("touchend.lg", function () {
              e.core.$outer.hasClass("lg-zoomed") &&
                s &&
                ((s = !1),
                e.core.$outer.removeClass("lg-zoom-dragging"),
                e.touchendZoom(t, o, i, l));
            });
        }),
        (o.prototype.zoomDrag = function () {
          var t = this,
            o = {},
            s = {},
            i = !1,
            l = !1,
            r = !1,
            a = !1;
          t.core.$slide.on("mousedown.lg.zoom", function (s) {
            var l = t.core.$slide.eq(t.core.index).find(".lg-object");
            (a =
              l.prop("offsetHeight") * l.attr("data-scale") >
              t.core.$outer.find(".lg").height()),
              (r =
                l.prop("offsetWidth") * l.attr("data-scale") >
                t.core.$outer.find(".lg").width()),
              t.core.$outer.hasClass("lg-zoomed") &&
                e(s.target).hasClass("lg-object") &&
                (r || a) &&
                (s.preventDefault(),
                (o = { x: s.pageX, y: s.pageY }),
                (i = !0),
                (t.core.$outer.scrollLeft += 1),
                (t.core.$outer.scrollLeft -= 1),
                t.core.$outer.removeClass("lg-grab").addClass("lg-grabbing"));
          }),
            e(window).on("mousemove.lg.zoom", function (e) {
              if (i) {
                var n,
                  d,
                  c = t.core.$slide.eq(t.core.index).find(".lg-img-wrap");
                (l = !0),
                  (s = { x: e.pageX, y: e.pageY }),
                  t.core.$outer.addClass("lg-zoom-dragging"),
                  (d = a
                    ? -Math.abs(c.attr("data-y")) + (s.y - o.y)
                    : -Math.abs(c.attr("data-y"))),
                  (n = r
                    ? -Math.abs(c.attr("data-x")) + (s.x - o.x)
                    : -Math.abs(c.attr("data-x"))),
                  t.core.s.useLeftForZoom
                    ? c.css({ left: n + "px", top: d + "px" })
                    : c.css(
                        "transform",
                        "translate3d(" + n + "px, " + d + "px, 0)"
                      );
              }
            }),
            e(window).on("mouseup.lg.zoom", function (e) {
              i &&
                ((i = !1),
                t.core.$outer.removeClass("lg-zoom-dragging"),
                !l ||
                  (o.x === s.x && o.y === s.y) ||
                  ((s = { x: e.pageX, y: e.pageY }),
                  t.touchendZoom(o, s, r, a)),
                (l = !1)),
                t.core.$outer.removeClass("lg-grabbing").addClass("lg-grab");
            });
        }),
        (o.prototype.touchendZoom = function (e, t, o, s) {
          var i = this,
            l = i.core.$slide.eq(i.core.index).find(".lg-img-wrap"),
            r = i.core.$slide.eq(i.core.index).find(".lg-object"),
            a = -Math.abs(l.attr("data-x")) + (t.x - e.x),
            n = -Math.abs(l.attr("data-y")) + (t.y - e.y),
            d =
              (i.core.$outer.find(".lg").height() - r.prop("offsetHeight")) / 2,
            c = Math.abs(
              r.prop("offsetHeight") * Math.abs(r.attr("data-scale")) -
                i.core.$outer.find(".lg").height() +
                d
            ),
            u = (i.core.$outer.find(".lg").width() - r.prop("offsetWidth")) / 2,
            h = Math.abs(
              r.prop("offsetWidth") * Math.abs(r.attr("data-scale")) -
                i.core.$outer.find(".lg").width() +
                u
            );
          (Math.abs(t.x - e.x) > 15 || Math.abs(t.y - e.y) > 15) &&
            (s && (n <= -c ? (n = -c) : n >= -d && (n = -d)),
            o && (a <= -h ? (a = -h) : a >= -u && (a = -u)),
            s
              ? l.attr("data-y", Math.abs(n))
              : (n = -Math.abs(l.attr("data-y"))),
            o
              ? l.attr("data-x", Math.abs(a))
              : (a = -Math.abs(l.attr("data-x"))),
            i.core.s.useLeftForZoom
              ? l.css({ left: a + "px", top: n + "px" })
              : l.css("transform", "translate3d(" + a + "px, " + n + "px, 0)"));
        }),
        (o.prototype.destroy = function () {
          var t = this;
          t.core.$el.off(".lg.zoom"),
            e(window).off(".lg.zoom"),
            t.core.$slide.off(".lg.zoom"),
            t.core.$el.off(".lg.tm.zoom"),
            t.resetZoom(),
            clearTimeout(t.zoomabletimeout),
            (t.zoomabletimeout = !1);
        }),
        (e.fn.lightGallery.modules.zoom = o);
    })();
  }),
  (function (e, t) {
    "function" == typeof define && define.amd
      ? define(["jquery"], function (e) {
          return t(e);
        })
      : "object" == typeof exports
      ? (module.exports = t(require("jquery")))
      : t(jQuery);
  })(0, function (e) {
    !(function () {
      "use strict";
      var t = { hash: !0 },
        o = function (o) {
          return (
            (this.core = e(o).data("lightGallery")),
            (this.core.s = e.extend({}, t, this.core.s)),
            this.core.s.hash &&
              ((this.oldHash = window.location.hash), this.init()),
            this
          );
        };
      (o.prototype.init = function () {
        var t,
          o = this;
        o.core.$el.on("onAfterSlide.lg.tm", function (e, t, s) {
          history.replaceState
            ? history.replaceState(
                null,
                null,
                window.location.pathname +
                  window.location.search +
                  "#lg=" +
                  o.core.s.galleryId +
                  "&slide=" +
                  s
              )
            : (window.location.hash =
                "lg=" + o.core.s.galleryId + "&slide=" + s);
        }),
          e(window).on("hashchange.lg.hash", function () {
            t = window.location.hash;
            var e = parseInt(t.split("&slide=")[1], 10);
            t.indexOf("lg=" + o.core.s.galleryId) > -1
              ? o.core.slide(e, !1, !1)
              : o.core.lGalleryOn && o.core.destroy();
          });
      }),
        (o.prototype.destroy = function () {
          this.core.s.hash &&
            (this.oldHash &&
            this.oldHash.indexOf("lg=" + this.core.s.galleryId) < 0
              ? history.replaceState
                ? history.replaceState(null, null, this.oldHash)
                : (window.location.hash = this.oldHash)
              : history.replaceState
              ? history.replaceState(
                  null,
                  document.title,
                  window.location.pathname + window.location.search
                )
              : (window.location.hash = ""),
            this.core.$el.off(".lg.hash"));
        }),
        (e.fn.lightGallery.modules.hash = o);
    })();
  }),
  (function (e, t) {
    "function" == typeof define && define.amd
      ? define(["jquery"], function (e) {
          return t(e);
        })
      : "object" == typeof exports
      ? (module.exports = t(require("jquery")))
      : t(jQuery);
  })(0, function (e) {
    !(function () {
      "use strict";
      var t = {
          share: !0,
          facebook: !0,
          facebookDropdownText: "Facebook",
          twitter: !0,
          twitterDropdownText: "Twitter",
          googlePlus: !0,
          googlePlusDropdownText: "GooglePlus",
          pinterest: !0,
          pinterestDropdownText: "Pinterest",
        },
        o = function (o) {
          return (
            (this.core = e(o).data("lightGallery")),
            (this.core.s = e.extend({}, t, this.core.s)),
            this.core.s.share && this.init(),
            this
          );
        };
      (o.prototype.init = function () {
        var t = this,
          o =
            '<span id="lg-share" class="lg-icon"><ul class="lg-dropdown" style="position: absolute;">';
        (o += t.core.s.facebook
          ? '<li><a id="lg-share-facebook" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">' +
            this.core.s.facebookDropdownText +
            "</span></a></li>"
          : ""),
          (o += t.core.s.twitter
            ? '<li><a id="lg-share-twitter" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">' +
              this.core.s.twitterDropdownText +
              "</span></a></li>"
            : ""),
          (o += t.core.s.googlePlus
            ? '<li><a id="lg-share-googleplus" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">' +
              this.core.s.googlePlusDropdownText +
              "</span></a></li>"
            : ""),
          (o += t.core.s.pinterest
            ? '<li><a id="lg-share-pinterest" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">' +
              this.core.s.pinterestDropdownText +
              "</span></a></li>"
            : ""),
          (o += "</ul></span>"),
          this.core.$outer.find(".lg-toolbar").append(o),
          this.core.$outer
            .find(".lg")
            .append('<div id="lg-dropdown-overlay"></div>'),
          e("#lg-share").on("click.lg", function () {
            t.core.$outer.toggleClass("lg-dropdown-active");
          }),
          e("#lg-dropdown-overlay").on("click.lg", function () {
            t.core.$outer.removeClass("lg-dropdown-active");
          }),
          t.core.$el.on("onAfterSlide.lg.tm", function (o, s, i) {
            setTimeout(function () {
              e("#lg-share-facebook").attr(
                "href",
                "https://www.facebook.com/sharer/sharer.php?u=" +
                  encodeURIComponent(
                    t.getSahreProps(i, "facebookShareUrl") ||
                      window.location.href
                  )
              ),
                e("#lg-share-twitter").attr(
                  "href",
                  "https://twitter.com/intent/tweet?text=" +
                    t.getSahreProps(i, "tweetText") +
                    "&url=" +
                    encodeURIComponent(
                      t.getSahreProps(i, "twitterShareUrl") ||
                        window.location.href
                    )
                ),
                e("#lg-share-googleplus").attr(
                  "href",
                  "https://plus.google.com/share?url=" +
                    encodeURIComponent(
                      t.getSahreProps(i, "googleplusShareUrl") ||
                        window.location.href
                    )
                ),
                e("#lg-share-pinterest").attr(
                  "href",
                  "http://www.pinterest.com/pin/create/button/?url=" +
                    encodeURIComponent(
                      t.getSahreProps(i, "pinterestShareUrl") ||
                        window.location.href
                    ) +
                    "&media=" +
                    encodeURIComponent(t.getSahreProps(i, "src")) +
                    "&description=" +
                    t.getSahreProps(i, "pinterestText")
                );
            }, 100);
          });
      }),
        (o.prototype.getSahreProps = function (e, t) {
          var o = "";
          if (this.core.s.dynamic) o = this.core.s.dynamicEl[e][t];
          else {
            var s = this.core.$items.eq(e).attr("href"),
              i = this.core.$items.eq(e).data(t);
            o = ("src" === t && s) || i;
          }
          return o;
        }),
        (o.prototype.destroy = function () {}),
        (e.fn.lightGallery.modules.share = o);
    })();
  });

/*!
	Zoom 1.7.21
	license: MIT
	http://www.jacklmoore.com/zoom
*/
!(function (o) {
  var t = {
    url: !1,
    callback: !1,
    target: !1,
    duration: 120,
    on: "mouseover",
    touch: !0,
    onZoomIn: !1,
    onZoomOut: !1,
    magnify: 1,
  };
  (o.zoom = function (t, n, e, i) {
    var u,
      c,
      a,
      r,
      m,
      l,
      s,
      f = o(t),
      h = f.css("position"),
      d = o(n);
    return (
      (t.style.position = /(absolute|fixed)/.test(h) ? h : "relative"),
      (t.style.overflow = "hidden"),
      (e.style.width = e.style.height = ""),
      o(e)
        .addClass("zoomImg")
        .css({
          position: "absolute",
          top: 0,
          left: 0,
          opacity: 0,
          width: e.width * i,
          height: e.height * i,
          border: "none",
          maxWidth: "none",
          maxHeight: "none",
        })
        .appendTo(t),
      {
        init: function () {
          (c = f.outerWidth()),
            (u = f.outerHeight()),
            n === t
              ? ((r = c), (a = u))
              : ((r = d.outerWidth()), (a = d.outerHeight())),
            (m = (e.width - c) / r),
            (l = (e.height - u) / a),
            (s = d.offset());
        },
        move: function (o) {
          var t = o.pageX - s.left,
            n = o.pageY - s.top;
          (n = Math.max(Math.min(n, a), 0)),
            (t = Math.max(Math.min(t, r), 0)),
            (e.style.left = t * -m + "px"),
            (e.style.top = n * -l + "px");
        },
      }
    );
  }),
    (o.fn.zoom = function (n) {
      return this.each(function () {
        var e = o.extend({}, t, n || {}),
          i = (e.target && o(e.target)[0]) || this,
          u = this,
          c = o(u),
          a = document.createElement("img"),
          r = o(a),
          m = "mousemove.zoom",
          l = !1,
          s = !1;
        if (!e.url) {
          var f = u.querySelector("img");
          if (
            (f && (e.url = f.getAttribute("data-src") || f.currentSrc || f.src),
            !e.url)
          )
            return;
        }
        c.one(
          "zoom.destroy",
          function (o, t) {
            c.off(".zoom"),
              (i.style.position = o),
              (i.style.overflow = t),
              (a.onload = null),
              r.remove();
          }.bind(this, i.style.position, i.style.overflow)
        ),
          (a.onload = function () {
            function t(t) {
              f.init(),
                f.move(t),
                r
                  .stop()
                  .fadeTo(
                    o.support.opacity ? e.duration : 0,
                    1,
                    !!o.isFunction(e.onZoomIn) && e.onZoomIn.call(a)
                  );
            }
            function n() {
              r.stop().fadeTo(
                e.duration,
                0,
                !!o.isFunction(e.onZoomOut) && e.onZoomOut.call(a)
              );
            }
            var f = o.zoom(i, u, a, e.magnify);
            "grab" === e.on
              ? c.on("mousedown.zoom", function (e) {
                  1 === e.which &&
                    (o(document).one("mouseup.zoom", function () {
                      n(), o(document).off(m, f.move);
                    }),
                    t(e),
                    o(document).on(m, f.move),
                    e.preventDefault());
                })
              : "click" === e.on
              ? c.on("click.zoom", function (e) {
                  return l
                    ? void 0
                    : ((l = !0),
                      t(e),
                      o(document).on(m, f.move),
                      o(document).one("click.zoom", function () {
                        n(), (l = !1), o(document).off(m, f.move);
                      }),
                      !1);
                })
              : "toggle" === e.on
              ? c.on("click.zoom", function (o) {
                  l ? n() : t(o), (l = !l);
                })
              : "mouseover" === e.on &&
                (f.init(),
                c
                  .on("mouseenter.zoom", t)
                  .on("mouseleave.zoom", n)
                  .on(m, f.move)),
              e.touch &&
                c
                  .on("touchstart.zoom", function (o) {
                    o.preventDefault(),
                      s
                        ? ((s = !1), n())
                        : ((s = !0),
                          t(
                            o.originalEvent.touches[0] ||
                              o.originalEvent.changedTouches[0]
                          ));
                  })
                  .on("touchmove.zoom", function (o) {
                    o.preventDefault(),
                      f.move(
                        o.originalEvent.touches[0] ||
                          o.originalEvent.changedTouches[0]
                      );
                  })
                  .on("touchend.zoom", function (o) {
                    o.preventDefault(), s && ((s = !1), n());
                  }),
              o.isFunction(e.callback) && e.callback.call(a);
          }),
          a.setAttribute("role", "presentation"),
          (a.alt = ""),
          (a.src = e.url);
      });
    }),
    (o.fn.zoom.defaults = t);
})(window.jQuery);

/*!
 * imagesLoaded PACKAGED v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

!(function (e, t) {
  "function" == typeof define && define.amd
    ? define("ev-emitter/ev-emitter", t)
    : "object" == typeof module && module.exports
    ? (module.exports = t())
    : (e.EvEmitter = t());
})("undefined" != typeof window ? window : this, function () {
  function e() {}
  var t = e.prototype;
  return (
    (t.on = function (e, t) {
      if (e && t) {
        var i = (this._events = this._events || {}),
          n = (i[e] = i[e] || []);
        return n.indexOf(t) == -1 && n.push(t), this;
      }
    }),
    (t.once = function (e, t) {
      if (e && t) {
        this.on(e, t);
        var i = (this._onceEvents = this._onceEvents || {}),
          n = (i[e] = i[e] || {});
        return (n[t] = !0), this;
      }
    }),
    (t.off = function (e, t) {
      var i = this._events && this._events[e];
      if (i && i.length) {
        var n = i.indexOf(t);
        return n != -1 && i.splice(n, 1), this;
      }
    }),
    (t.emitEvent = function (e, t) {
      var i = this._events && this._events[e];
      if (i && i.length) {
        (i = i.slice(0)), (t = t || []);
        for (
          var n = this._onceEvents && this._onceEvents[e], o = 0;
          o < i.length;
          o++
        ) {
          var r = i[o],
            s = n && n[r];
          s && (this.off(e, r), delete n[r]), r.apply(this, t);
        }
        return this;
      }
    }),
    (t.allOff = function () {
      delete this._events, delete this._onceEvents;
    }),
    e
  );
}),
  (function (e, t) {
    "use strict";
    "function" == typeof define && define.amd
      ? define(["ev-emitter/ev-emitter"], function (i) {
          return t(e, i);
        })
      : "object" == typeof module && module.exports
      ? (module.exports = t(e, require("ev-emitter")))
      : (e.imagesLoaded = t(e, e.EvEmitter));
  })("undefined" != typeof window ? window : this, function (e, t) {
    function i(e, t) {
      for (var i in t) e[i] = t[i];
      return e;
    }
    function n(e) {
      if (Array.isArray(e)) return e;
      var t = "object" == typeof e && "number" == typeof e.length;
      return t ? d.call(e) : [e];
    }
    function o(e, t, r) {
      if (!(this instanceof o)) return new o(e, t, r);
      var s = e;
      return (
        "string" == typeof e && (s = document.querySelectorAll(e)),
        s
          ? ((this.elements = n(s)),
            (this.options = i({}, this.options)),
            "function" == typeof t ? (r = t) : i(this.options, t),
            r && this.on("always", r),
            this.getImages(),
            h && (this.jqDeferred = new h.Deferred()),
            void setTimeout(this.check.bind(this)))
          : void a.error("Bad element for imagesLoaded " + (s || e))
      );
    }
    function r(e) {
      this.img = e;
    }
    function s(e, t) {
      (this.url = e), (this.element = t), (this.img = new Image());
    }
    var h = e.jQuery,
      a = e.console,
      d = Array.prototype.slice;
    (o.prototype = Object.create(t.prototype)),
      (o.prototype.options = {}),
      (o.prototype.getImages = function () {
        (this.images = []), this.elements.forEach(this.addElementImages, this);
      }),
      (o.prototype.addElementImages = function (e) {
        "IMG" == e.nodeName && this.addImage(e),
          this.options.background === !0 && this.addElementBackgroundImages(e);
        var t = e.nodeType;
        if (t && u[t]) {
          for (var i = e.querySelectorAll("img"), n = 0; n < i.length; n++) {
            var o = i[n];
            this.addImage(o);
          }
          if ("string" == typeof this.options.background) {
            var r = e.querySelectorAll(this.options.background);
            for (n = 0; n < r.length; n++) {
              var s = r[n];
              this.addElementBackgroundImages(s);
            }
          }
        }
      });
    var u = { 1: !0, 9: !0, 11: !0 };
    return (
      (o.prototype.addElementBackgroundImages = function (e) {
        var t = getComputedStyle(e);
        if (t)
          for (
            var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(t.backgroundImage);
            null !== n;

          ) {
            var o = n && n[2];
            o && this.addBackground(o, e), (n = i.exec(t.backgroundImage));
          }
      }),
      (o.prototype.addImage = function (e) {
        var t = new r(e);
        this.images.push(t);
      }),
      (o.prototype.addBackground = function (e, t) {
        var i = new s(e, t);
        this.images.push(i);
      }),
      (o.prototype.check = function () {
        function e(e, i, n) {
          setTimeout(function () {
            t.progress(e, i, n);
          });
        }
        var t = this;
        return (
          (this.progressedCount = 0),
          (this.hasAnyBroken = !1),
          this.images.length
            ? void this.images.forEach(function (t) {
                t.once("progress", e), t.check();
              })
            : void this.complete()
        );
      }),
      (o.prototype.progress = function (e, t, i) {
        this.progressedCount++,
          (this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded),
          this.emitEvent("progress", [this, e, t]),
          this.jqDeferred &&
            this.jqDeferred.notify &&
            this.jqDeferred.notify(this, e),
          this.progressedCount == this.images.length && this.complete(),
          this.options.debug && a && a.log("progress: " + i, e, t);
      }),
      (o.prototype.complete = function () {
        var e = this.hasAnyBroken ? "fail" : "done";
        if (
          ((this.isComplete = !0),
          this.emitEvent(e, [this]),
          this.emitEvent("always", [this]),
          this.jqDeferred)
        ) {
          var t = this.hasAnyBroken ? "reject" : "resolve";
          this.jqDeferred[t](this);
        }
      }),
      (r.prototype = Object.create(t.prototype)),
      (r.prototype.check = function () {
        var e = this.getIsImageComplete();
        return e
          ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth")
          : ((this.proxyImage = new Image()),
            this.proxyImage.addEventListener("load", this),
            this.proxyImage.addEventListener("error", this),
            this.img.addEventListener("load", this),
            this.img.addEventListener("error", this),
            void (this.proxyImage.src = this.img.src));
      }),
      (r.prototype.getIsImageComplete = function () {
        return this.img.complete && this.img.naturalWidth;
      }),
      (r.prototype.confirm = function (e, t) {
        (this.isLoaded = e), this.emitEvent("progress", [this, this.img, t]);
      }),
      (r.prototype.handleEvent = function (e) {
        var t = "on" + e.type;
        this[t] && this[t](e);
      }),
      (r.prototype.onload = function () {
        this.confirm(!0, "onload"), this.unbindEvents();
      }),
      (r.prototype.onerror = function () {
        this.confirm(!1, "onerror"), this.unbindEvents();
      }),
      (r.prototype.unbindEvents = function () {
        this.proxyImage.removeEventListener("load", this),
          this.proxyImage.removeEventListener("error", this),
          this.img.removeEventListener("load", this),
          this.img.removeEventListener("error", this);
      }),
      (s.prototype = Object.create(r.prototype)),
      (s.prototype.check = function () {
        this.img.addEventListener("load", this),
          this.img.addEventListener("error", this),
          (this.img.src = this.url);
        var e = this.getIsImageComplete();
        e &&
          (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"),
          this.unbindEvents());
      }),
      (s.prototype.unbindEvents = function () {
        this.img.removeEventListener("load", this),
          this.img.removeEventListener("error", this);
      }),
      (s.prototype.confirm = function (e, t) {
        (this.isLoaded = e),
          this.emitEvent("progress", [this, this.element, t]);
      }),
      (o.makeJQueryPlugin = function (t) {
        (t = t || e.jQuery),
          t &&
            ((h = t),
            (h.fn.imagesLoaded = function (e, t) {
              var i = new o(this, e, t);
              return i.jqDeferred.promise(h(this));
            }));
      }),
      o.makeJQueryPlugin(),
      o
    );
  });
