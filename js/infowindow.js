google.maps.__gjsload__("infowindow", function (_) {
  var WP = function () {
      this.j = new _.Yv();
    },
    XP = function (a, b) {
      if (1 == a.j.lb()) {
        var c = a.j.Sa()[0];
        c.l != b.l && (c.set("map", null), a.j.remove(c));
      }
      a.j.add(b);
    },
    ZP = function () {
      this.sa = _.X("div");
      this.A = _.X("div", this.sa);
      YP(this.A, "rgba(0,0,0,0.1)", !1);
      this.j = _.X("div", this.sa, _.ti);
      this.j.style.backgroundColor = "rgba(0,0,0,0.2)";
      _.aw(this.j, _.W(2));
      _.$v(this.j, "0 1px 4px -1px rgba(0,0,0,0.3)");
      this.m = _.X("div", this.sa);
      YP(this.m, "#fff", !0);
      this.l = _.X("div", this.sa, new _.N(1, 1));
      _.aw(this.l, _.W(2));
      this.l.style.backgroundColor = "#fff";
    },
    YP = function (a, b, c) {
      if (c) {
        c = _.zi.Jb();
        var d = _.X("div", a);
        a = _.X("div", a);
        var e = _.X("div", d),
          f = _.X("div", a);
        e.style.position =
          d.style.position =
          f.style.position =
          a.style.position =
            "absolute";
        d.style.overflow = a.style.overflow = "hidden";
        e.style.left = f.style.left = a.style.top = "0";
        d.style.left = _.W(-6);
        d.style.top = a.style.top = _.W(-1);
        e.style.left = _.W(6);
        a.style.left = _.W(10);
        d.style.width = a.style.width = _.W(16);
        d.style.height = a.style.height = _.W(30);
        e.style.backgroundColor = f.style.backgroundColor = b;
        c &&
          ((e.style[c] = "skewX(22.6deg)"),
          (f.style[c] = "skewX(-22.6deg)"),
          (e.style[c + "Origin"] = "0 0"),
          (f.style[c + "Origin"] = _.W(10) + " 0"));
        e.style.height = f.style.height = _.W(24);
        e.style.width = f.style.width = _.W(10);
        e.style.boxShadow = f.style.boxShadow =
          "rgba(0,0,0,0.6) 0px 1px " + _.W(6);
      } else
        _.ne(a, _.ui),
          (a.style.borderLeft = a.style.borderRight = "0 solid transparent"),
          (a.style.borderTop = "0 solid " + b),
          (a.style.borderLeftWidth = a.style.borderRightWidth = _.W(10));
    },
    aQ = function (a, b) {
      return new $P(a, b);
    },
    $P = function (a, b) {
      var c = a.offsetWidth,
        d = a.offsetHeight;
      this.j = window.setInterval(function () {
        var e = a.offsetWidth,
          f = a.offsetHeight;
        if (e != c || f != d) b(new _.O(e, f)), (c = e), (d = f);
      }, 100);
    },
    dQ = function (a, b, c, d) {
      d = void 0 === d ? bQ : d;
      var e = this;
      this.A = null;
      this.I = b;
      var f = (this.l = _.X("div"));
      _.wv(f, "default");
      f.style.position = "absolute";
      a.floatPane.appendChild(this.l);
      a = b.Da();
      _.Lk(a, _.ti);
      this.l.appendChild(a);
      this.j = _.X("div", f);
      this.j.style.top = _.W(9);
      this.j.style.position = "absolute";
      c ? (this.j.style.right = _.W(15)) : (this.j.style.left = _.W(15));
      _.DB();
      _.lk(this.j, "gm-style-iw");
      this.m = _.X("div", this.j);
      this.m.style.display = "inline-block";
      this.m.style.overflow = "auto";
      cQ(this, !1);
      _.R.addDomListener(f, "mousedown", _.td);
      _.R.addDomListener(f, "mouseup", _.td);
      _.R.addDomListener(f, "mousemove", _.td);
      _.R.addDomListener(f, "pointerdown", _.td);
      _.R.addDomListener(f, "pointerup", _.td);
      _.R.addDomListener(f, "pointermove", _.td);
      _.R.addDomListener(f, "dblclick", _.td);
      _.R.addDomListener(f, "click", _.td);
      _.R.addDomListener(f, "touchstart", _.td);
      _.R.addDomListener(f, "touchend", _.td);
      _.R.addDomListener(f, "touchmove", _.td);
      _.R.na(f, "contextmenu", this, this.fm);
      _.R.na(f, "wheel", this, _.td);
      _.R.na(f, "mousewheel", this, _.qd);
      _.R.na(f, "MozMousePixelScroll", this, _.qd);
      _.HB(
        this.l,
        function (a) {
          _.td(a);
          _.R.trigger(e, "closeclick");
          e.set("open", !1);
        },
        { padding: d },
      );
      this.B = null;
      this.G = !1;
      this.D = new _.fg(function () {
        !e.G &&
          e.get("content") &&
          e.get("visible") &&
          (_.R.trigger(e, "domready"), (e.G = !0));
      }, 0);
      this.C = null;
    },
    fQ = function (a) {
      var b = !!a.get("open");
      cQ(a, b && a.get("position"));
      var c = a.get("content");
      b = b ? c : null;
      b != a.B &&
        (b && ((a.G = !1), a.m.appendChild(c)),
        a.B && ((c = a.B.parentNode), c == a.m && c.removeChild(a.B)),
        (a.B = b),
        eQ(a));
    },
    gQ = function (a) {
      var b = a.get("pixelOffset") || new _.O(0, 0),
        c = a.A || new _.O(0, 0);
      a = -b.height + c.height + 24 + 50;
      var d = b.height + 50,
        e = -b.width + c.width / 2 + 50;
      c = b.width + c.width / 2 + 50;
      0 > b.height && (d -= b.height);
      return { top: a, bottom: d, left: e, right: c };
    },
    cQ = function (a, b) {
      a.l.style.visibility = b ? "" : "hidden";
      a.j.style.overflow = b ? "" : "hidden";
      b || _.ne(a.j, _.ui);
    },
    iQ = function (a) {
      var b = a.get("layoutPixelBounds"),
        c = a.get("maxWidth"),
        d = a.get("pixelOffset");
      if (!d) return null;
      b
        ? ((a = b.X - b.U - (hQ.width + 23 + 30)),
          (b = b.Y - b.W - (hQ.height + 18 + -d.height)),
          200 <= a && (a -= 100),
          200 <= b && (b -= 100))
        : (b = a = 654);
      a = Math.min(a, 654);
      null != c && (a = Math.min(a, c));
      a = Math.max(0, a);
      b = Math.max(0, b);
      return new _.O(a, b);
    },
    eQ = function (a) {
      a.C && (a.C.ak.cancel(), a.C.lk.cancel(), (a.C = null));
      var b = iQ(a);
      if (b) {
        a.m.style.maxHeight = _.W(Math.max(0, b.height));
        a.m.style.maxWidth = _.W(b.width);
        a.j.style.width = _.W(b.width);
        var c = 30 + Math.min(b.width, a.m.offsetWidth) + 23;
        a.j.style.width = _.W(c - 30);
        a.j.style.height = "";
        a.A = new _.O(c, 18 + Math.min(b.height, a.j.offsetHeight));
        a.I.setSize(a.A);
        _.ne(a.l, a.A);
        jQ(a);
        a.D.start();
        a.C = {
          lk: aQ(a.m, function () {
            return eQ(a);
          }),
          ak: aQ(a.j, function () {
            return eQ(a);
          }),
        };
      }
    },
    jQ = function (a) {
      var b = a.get("position");
      if (a.A && b && a.get("pixelOffset")) {
        var c = gQ(a),
          d = b.x - c.left,
          e = b.y - c.top,
          f = b.x + c.right;
        b = b.y + c.bottom;
        c = e + 50;
        _.Lk(a.l, new _.N(d + 50, c));
        var g = a.get("zIndex");
        _.Mk(a.l, _.L(g) ? g : c);
        a.set("pixelBounds", _.cd(d, e, f, b));
      }
    },
    kQ = function (a) {
      a = a.__gm.get("panes");
      return new dQ(a, new ZP(), _.gr.j);
    },
    lQ = function (a, b, c) {
      var d = this;
      this.C = !0;
      this.ca = this.B = this.A = null;
      var e = b.__gm,
        f = b instanceof _.ce;
      f && c
        ? c.then(function (c) {
            d.C &&
              ((d.A = c),
              (d.ca = new _.BB(function (a) {
                d.B = new _.bm(b, c, a, _.l());
                c.qa(d.B);
                return d.B;
              })),
              d.ca.bindTo("latLngPosition", a, "position"),
              h.bindTo("position", d.ca, "pixelPosition"));
          })
        : ((this.ca = new _.BB()),
          this.ca.bindTo("latLngPosition", a, "position"),
          this.ca.bindTo("center", e, "projectionCenterQ"),
          this.ca.bindTo("zoom", e),
          this.ca.bindTo("offset", e),
          this.ca.bindTo("projection", b),
          this.ca.bindTo("focus", b, "position"));
      this.j = f ? (a.j.get("logAsInternal") ? "Ia" : "Id") : null;
      this.m = [];
      var g = new _.ow(["scale"], "visible", function (a) {
        return null == a || 0.3 <= a;
      });
      this.ca && g.bindTo("scale", this.ca);
      var h = (this.D = kQ(b));
      h.set("logAsInternal", !!a.j.get("logAsInternal"));
      h.bindTo("zIndex", a);
      h.bindTo("layoutPixelBounds", e, "pixelBounds");
      h.bindTo("maxWidth", a);
      h.bindTo("content", a);
      h.bindTo("pixelOffset", a);
      h.bindTo("visible", g);
      this.ca && h.bindTo("position", this.ca, "pixelPosition");
      this.l = new _.fg(function () {
        if (b instanceof _.ce)
          if (d.A) {
            var f = a.get("position");
            f && _.rq(b, d.A, new _.Q(f), gQ(h));
          } else
            c.then(function () {
              return d.l.start();
            });
        else
          (f = h.get("pixelBounds"))
            ? _.R.trigger(e, "pantobounds", f)
            : d.l.start();
      }, 150);
      if (f) {
        var k = null;
        this.m.push(
          _.R.ja(a, "position_changed", function () {
            var b = a.get("position");
            !b ||
              a.get("disableAutoPan") ||
              b.equals(k) ||
              (d.l.start(), (k = b));
          }),
        );
      } else a.get("disableAutoPan") || this.l.start();
      h.set("open", !0);
      this.m.push(
        _.R.addListener(h, "domready", function () {
          a.trigger("domready");
        }),
      );
      this.m.push(
        _.R.addListener(h, "closeclick", function () {
          a.close();
          a.trigger("closeclick");
          d.j && _.Om(d.j, "-i", d);
        }),
      );
      if (this.j) {
        var m = this.j;
        _.Mm(b, this.j);
        _.Om(m, "-p", this);
        f = function () {
          var c = a.get("position"),
            e = b.getBounds();
          c && e && e.contains(c) ? _.Om(m, "-v", d) : _.Pm(m, "-v", d);
        };
        this.m.push(_.R.addListener(b, "idle", f));
        f();
      }
    },
    mQ = function (a, b, c) {
      return b instanceof _.ce ? new lQ(a, b, c) : new lQ(a, b);
    },
    nQ = function (a) {
      a = a.__gm;
      return (a.IW_AUTO_CLOSER = a.IW_AUTO_CLOSER || new WP());
    };
  ZP.prototype.Da = _.pa("sa");
  ZP.prototype.setSize = function (a) {
    var b = a.width,
      c = a.height;
    _.ne(this.j, a);
    _.ne(this.l, new _.O(b - 2, c - 2));
    this.A.style.borderTopWidth = this.m.style.borderTopWidth = _.W(24);
    a = Math.round(b / 2) - 10;
    _.Lk(this.A, new _.N(a, c));
    _.Lk(this.m, new _.N(a, c - 3));
  };
  $P.prototype.cancel = function () {
    window.clearInterval(this.j);
  };
  _.dj(dQ, _.S);
  _.n = dQ.prototype;
  _.n.open_changed = function () {
    fQ(this);
  };
  _.n.content_changed = function () {
    fQ(this);
  };
  _.n.dispose = function () {
    this.l.parentNode.removeChild(this.l);
    this.D.stop();
    this.D.dispose();
  };
  _.n.pixelOffset_changed = function () {
    eQ(this);
  };
  _.n.position_changed = function () {
    this.get("position")
      ? (jQ(this), cQ(this, !!this.get("open")))
      : cQ(this, !1);
  };
  _.n.zIndex_changed = function () {
    jQ(this);
  };
  _.n.visible_changed = function () {
    _.sv(this.l, this.get("visible"));
    this.D.start();
  };
  _.n.fm = function (a) {
    for (var b = !1, c = this.get("content"), d = a.target; !b && d; )
      (b = d == c), (d = d.parentNode);
    b ? _.qd(a) : _.sd(a);
  };
  var bQ = Object.freeze(new _.N(12, 10)),
    hQ = Object.freeze(new _.O(0, 24));
  lQ.prototype.close = function () {
    if (this.C) {
      this.C = !1;
      this.j && (_.Pm(this.j, "-p", this), _.Pm(this.j, "-v", this));
      for (var a = _.ua(this.m), b = a.next(); !b.done; b = a.next())
        _.R.removeListener(b.value);
      this.m.length = 0;
      this.l.stop();
      this.l.dispose();
      this.A && this.B && this.A.Xc(this.B);
      a = this.D;
      a.unbindAll();
      a.set("open", !1);
      a.dispose();
      this.ca && this.ca.unbindAll();
    }
  };
  _.He("infowindow", {
    Tj: function (a) {
      var b = null;
      (0, _.R.ja)(a, "map_changed", function d() {
        var e = a.get("map");
        b && (b.Tg.j.remove(a), b.rm.close(), (b = null));
        if (e) {
          var f = e.__gm;
          f.get("panes")
            ? ((b = {
                rm: mQ(
                  a,
                  e,
                  e instanceof _.ce
                    ? f.j.then(function (a) {
                        return a.ya;
                      })
                    : void 0,
                ),
                Tg: nQ(e),
              }),
              XP(b.Tg, a))
            : _.R.addListenerOnce(f, "panes_changed", d);
        }
      });
    },
  });
});
