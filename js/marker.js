google.maps.__gjsload__("marker", function (_) {
  var zQ,
    AQ,
    BQ,
    CQ,
    DQ,
    EQ,
    GQ,
    JQ,
    HQ,
    KQ,
    IQ,
    OQ,
    PQ,
    MQ,
    QQ,
    SQ,
    VQ,
    TQ,
    WQ,
    YQ,
    XQ,
    ZQ,
    $Q,
    aR,
    bR,
    kR,
    cR,
    hR,
    fR,
    iR,
    dR,
    gR,
    lR,
    eR,
    jR,
    xR,
    pR,
    qR,
    rR,
    sR,
    tR,
    uR,
    vR,
    wR,
    zR,
    AR,
    oR,
    CR,
    BR,
    DR,
    FR,
    ER,
    GR,
    IR,
    HR,
    JR,
    MR,
    LR,
    KR,
    NR,
    OR,
    PR,
    RR,
    QR,
    TR,
    SR,
    WR,
    XR,
    YR,
    VR,
    UR,
    aS,
    $R,
    ZR,
    bS,
    cS;
  zQ = function (a) {
    var b = 1;
    return function () {
      --b || a();
    };
  };
  AQ = function (a, b) {
    _.lv().Aa.load(new _.OA(a), function (a) {
      b(a && a.size);
    });
  };
  BQ = function (a) {
    this.l = a;
    this.j = !1;
  };
  CQ = function (a, b) {
    if (!b) return null;
    var c = a.get("snappingCallback");
    c && (b = c(b));
    c = b.x;
    b = b.y;
    var d = a.get("referencePosition");
    d && (2 == a.l ? (c = d.x) : 1 == a.l && (b = d.y));
    return new _.N(c, b);
  };
  window.Animation = function (a) {
    this.j = a;
    this.l = "";
  };
  DQ = function (a, b) {
    var c = [];
    c.push("@-webkit-keyframes ", b, " {\n");
    _.C(a.j, function (a) {
      c.push(100 * a.time + "% { ");
      c.push(
        "-webkit-transform: translate3d(" + a.translate[0] + "px,",
        a.translate[1] + "px,0); ",
      );
      c.push("-webkit-animation-timing-function: ", a.ib, "; ");
      c.push("}\n");
    });
    c.push("}\n");
    return c.join("");
  };
  EQ = function (a, b) {
    for (var c = 0; c < a.j.length - 1; c++) {
      var d = a.j[c + 1];
      if (b >= a.j[c].time && b < d.time) return c;
    }
    return a.j.length - 1;
  };
  GQ = function (a) {
    if (a.l) return a.l;
    a.l = "_gm" + Math.round(1e4 * Math.random());
    var b = DQ(a, a.l);
    if (!FQ) {
      FQ = _.nk(window.document, "style");
      FQ.type = "text/css";
      var c = window.document;
      c =
        c.querySelectorAll && c.querySelector
          ? c.querySelectorAll("HEAD")
          : c.getElementsByTagName("HEAD");
      c[0].appendChild(FQ);
    }
    FQ.textContent += b;
    return a.l;
  };
  JQ = function (a, b, c) {
    var d, e;
    if ((e = 0 != c.Bi))
      e =
        5 == _.zi.j.j ||
        6 == _.zi.j.j ||
        (3 == _.zi.j.type && _.Fj(_.zi.j.version, 7));
    e ? (d = new HQ(a, b, c)) : (d = new IQ(a, b, c));
    d.start();
    return d;
  };
  HQ = function (a, b, c) {
    this.sa = a;
    this.m = b;
    this.j = c;
    this.l = !1;
  };
  KQ = function (a, b, c) {
    _.vk(function () {
      a.style.WebkitAnimationDuration = c.duration ? c.duration + "ms" : null;
      a.style.WebkitAnimationIterationCount = c.Yb;
      a.style.WebkitAnimationName = b;
    });
  };
  IQ = function (a, b, c) {
    this.sa = a;
    this.A = b;
    this.l = -1;
    "infinity" != c.Yb && (this.l = c.Yb || 1);
    this.B = c.duration || 1e3;
    this.j = !1;
    this.m = 0;
  };
  OQ = function () {
    for (var a = [], b = 0; b < LQ.length; b++) {
      var c = LQ[b];
      MQ(c);
      c.j || a.push(c);
    }
    LQ = a;
    0 == LQ.length && (window.clearInterval(NQ), (NQ = null));
  };
  PQ = function (a) {
    return a ? a.__gm_at || _.ti : null;
  };
  MQ = function (a) {
    if (!a.j) {
      var b = _.tk();
      QQ(a, (b - a.m) / a.B);
      b >= a.m + a.B &&
        ((a.m = _.tk()), "infinite" != a.l && (a.l--, a.l || a.cancel()));
    }
  };
  QQ = function (a, b) {
    var c = 1,
      d = a.A;
    var e = d.j[EQ(d, b)];
    var f;
    d = a.A;
    (f = d.j[EQ(d, b) + 1]) && (c = (b - e.time) / (f.time - e.time));
    b = PQ(a.sa);
    d = a.sa;
    f
      ? ((c = (0, RQ[e.ib || "linear"])(c)),
        (e = e.translate),
        (f = f.translate),
        (c = new _.N(
          Math.round(c * f[0] - c * e[0] + e[0]),
          Math.round(c * f[1] - c * e[1] + e[1]),
        )))
      : (c = new _.N(e.translate[0], e.translate[1]));
    c = d.__gm_at = c;
    d = c.x - b.x;
    b = c.y - b.y;
    if (0 != d || 0 != b)
      (c = a.sa),
        (e = new _.N(_.sk(c.style.left) || 0, _.sk(c.style.top) || 0)),
        (e.x = e.x + d),
        (e.y += b),
        _.Lk(c, e);
    _.R.trigger(a, "tick");
  };
  SQ = function () {
    var a = _.Lv();
    this.icon = a
      ? {
          url: _.Yl("api-3/images/spotlight-poi2", !0),
          scaledSize: new _.O(27, 43),
          origin: new _.N(0, 0),
          anchor: new _.N(14, 43),
          labelOrigin: new _.N(14, 15),
        }
      : {
          url: _.Yl("api-3/images/spotlight-poi", !0),
          scaledSize: new _.O(22, 40),
          origin: new _.N(0, 0),
          anchor: new _.N(11, 40),
          labelOrigin: new _.N(11, 12),
        };
    this.l = a
      ? {
          url: _.Yl("api-3/images/spotlight-poi-dotless2", !0),
          scaledSize: new _.O(27, 43),
          origin: new _.N(0, 0),
          anchor: new _.N(14, 43),
          labelOrigin: new _.N(14, 15),
        }
      : {
          url: _.Yl("api-3/images/spotlight-poi-dotless", !0),
          scaledSize: new _.O(22, 40),
          origin: new _.N(0, 0),
          anchor: new _.N(11, 40),
          labelOrigin: new _.N(11, 12),
        };
    this.j = a
      ? {
          url: _.Yl("api-3/images/drag-cross", !0),
          scaledSize: new _.O(13, 11),
          origin: new _.N(0, 0),
          anchor: new _.N(7, 6),
        }
      : {
          url: _.Uv("icons/spotlight/directions_drag_cross_67_16.png", 4),
          size: new _.O(16, 16),
          origin: new _.N(0, 0),
          anchor: new _.N(8, 8),
        };
    this.shape = a
      ? {
          coords: [13.5, 0, 4, 3.75, 0, 13.5, 13.5, 43, 27, 13.5, 23, 3.75],
          type: "poly",
        }
      : {
          coords: [
            8, 0, 5, 1, 4, 2, 3, 3, 2, 4, 2, 5, 1, 6, 1, 7, 0, 8, 0, 14, 1, 15,
            1, 16, 2, 17, 2, 18, 3, 19, 3, 20, 4, 21, 5, 22, 5, 23, 6, 24, 7,
            25, 7, 27, 8, 28, 8, 29, 9, 30, 9, 33, 10, 34, 10, 40, 11, 40, 11,
            34, 12, 33, 12, 30, 13, 29, 13, 28, 14, 27, 14, 25, 15, 24, 16, 23,
            16, 22, 17, 21, 18, 20, 18, 19, 19, 18, 19, 17, 20, 16, 20, 15, 21,
            14, 21, 8, 20, 7, 20, 6, 19, 5, 19, 4, 18, 3, 17, 2, 16, 1, 14, 1,
            13, 0, 8, 0,
          ],
          type: "poly",
        };
  };
  VQ = function (a) {
    var b = this;
    this.j = a;
    this.T = new _.fg(function () {
      var a = b.get("modelIcon"),
        d = b.get("modelLabel");
      TQ(b, "viewIcon", a || (d && UQ.l) || UQ.icon);
      TQ(b, "viewCross", UQ.j);
      d = b.get("useDefaults");
      var e = b.get("modelShape");
      e || (a && !d) || (e = UQ.shape);
      b.get("viewShape") != e && b.set("viewShape", e);
    }, 0);
    UQ || (UQ = new SQ());
  };
  TQ = function (a, b, c) {
    WQ(a, c, function (c) {
      a.set(b, c);
      c = a.get("modelLabel");
      a.set(
        "viewLabel",
        c
          ? {
              text: c.text || c,
              color: _.Ac(c.color, "#000000"),
              fontWeight: _.Ac(c.fontWeight, ""),
              fontSize: _.Ac(c.fontSize, "14px"),
              fontFamily: _.Ac(c.fontFamily, "Roboto,Arial,sans-serif"),
            }
          : null,
      );
    });
  };
  WQ = function (a, b, c) {
    b
      ? null != b.path
        ? c(a.j(b))
        : (_.Dc(b) || (b.size = b.size || b.scaledSize),
          b.size
            ? c(b)
            : (b.url || (b = { url: b }),
              AQ(b.url, function (a) {
                b.size = a || new _.O(24, 24);
                c(b);
              })))
      : c(null);
  };
  YQ = function () {
    this.j = XQ(this);
    this.set("shouldRender", this.j);
    this.l = !1;
  };
  XQ = function (a) {
    var b = a.get("mapPixelBoundsQ"),
      c = a.get("icon"),
      d = a.get("position");
    if (!b || !c || !d) return 0 != a.get("visible");
    var e = c.anchor || _.ti,
      f = c.size.width + Math.abs(e.x);
    c = c.size.height + Math.abs(e.y);
    return d.x > b.U - f && d.y > b.W - c && d.x < b.X + f && d.y < b.Y + c
      ? 0 != a.get("visible")
      : !1;
  };
  ZQ = function (a) {
    this.l = a;
    this.j = !1;
  };
  $Q = function (a, b, c, d) {
    this.B = c;
    this.m = a;
    this.A = b;
    this.C = d;
    this.D = 0;
    this.l = null;
    this.j = new _.fg(this.pj, 0, this);
  };
  aR = function (a, b) {
    a.oa = b;
    _.gg(a.j);
  };
  bR = function (a) {
    a.l && (_.Fk(a.l), (a.l = null));
  };
  kR = function (a, b) {
    var c = this;
    this.T = new _.fg(function () {
      var a = c.get("panes"),
        b = c.get("scale");
      if (
        !a ||
        !c.getPosition() ||
        0 == c.qj() ||
        (_.L(b) && 0.1 > b && !c.get("dragging"))
      )
        cR(c);
      else {
        var f = a.markerLayer;
        if ((b = c.Af())) {
          var g = null != b.url;
          c.j && c.Jc == g && (_.Fk(c.j), (c.j = null));
          c.Jc = !g;
          c.j = dR(c, f, c.j, b);
          f = eR(c);
          g = b.size;
          c.Sb.width = f * g.width;
          c.Sb.height = f * g.height;
          c.set("size", c.Sb);
          var h = c.get("anchorPoint");
          if (!h || h.j)
            (b = b.anchor),
              (c.la.x = f * (b ? g.width / 2 - b.x : 0)),
              (c.la.y = -f * (b ? b.y : g.height)),
              (c.la.j = !0),
              c.set("anchorPoint", c.la);
        }
        if (
          !c.da &&
          (g = c.Af()) &&
          ((b = 0 != c.get("clickable")), (f = c.getDraggable()), b || f)
        ) {
          h = g.url || _.fr;
          var k = null != g.url,
            m = {};
          if (_.Ek()) {
            k = g.size.width;
            var p = g.size.height,
              q = new _.O(k + 16, p + 16);
            g = {
              url: h,
              size: q,
              anchor: g.anchor
                ? new _.N(g.anchor.x + 8, g.anchor.y + 8)
                : new _.N(Math.round(k / 2) + 8, p + 8),
              scaledSize: q,
            };
          } else if (_.je.l || _.je.m)
            if (((m.shape = c.get("shape")), m.shape || !k))
              (k = g.scaledSize || g.size),
                (g = { url: h, size: k, anchor: g.anchor, scaledSize: k });
          k = null != g.url;
          c.Lc == k && fR(c);
          c.Lc = !k;
          g = c.C = dR(c, c.getPanes().overlayMouseTarget, c.C, g, m);
          _.xv(g, 0);
          h = g;
          if (
            (m =
              h.getAttribute("usemap") ||
              (h.firstChild && h.firstChild.getAttribute("usemap"))) &&
            m.length &&
            (h = _.Gk(h).getElementById(m.substr(1)))
          )
            var t = h.firstChild;
          g = t || g;
          g.title = c.get("title") || "";
          f &&
            !c.B &&
            ((t = c.B = new _.UB(g, c.Rb, c.C)),
            c.Rb
              ? (t.bindTo("deltaClientPosition", c), t.bindTo("position", c))
              : t.bindTo("position", c.yb, "rawPosition"),
            t.bindTo("containerPixelBounds", c, "mapPixelBounds"),
            t.bindTo("anchorPoint", c),
            t.bindTo("size", c),
            t.bindTo("panningEnabled", c),
            t &&
              !c.Ga &&
              (c.Ga = [
                _.R.forward(t, "dragstart", c),
                _.R.forward(t, "drag", c),
                _.R.forward(t, "dragend", c),
                _.R.forward(t, "panbynow", c),
              ]));
          t = c.get("cursor") || "pointer";
          f ? c.B.set("draggableCursor", t) : _.wv(g, b ? t : "");
          gR(c, g);
        }
        a = a.overlayLayer;
        if ((b = t = c.get("cross")))
          (b = c.get("crossOnDrag")),
            _.r(b) || (b = c.get("raiseOnDrag")),
            (b = 0 != b && c.getDraggable() && c.get("dragging"));
        b ? (c.m = dR(c, a, c.m, t)) : (c.m && _.Fk(c.m), (c.m = null));
        c.D = [c.j, c.m, c.C];
        hR(c);
        for (a = 0; a < c.D.length; ++a)
          if ((b = c.D[a]))
            (t = b),
              (f = b.j),
              (g = PQ(b) || _.ti),
              (b = eR(c)),
              (f = iR(c, f, b, g)),
              _.Lk(t, f),
              (f = _.zi.Jb()) &&
                (t.style[f] = 1 != b ? "scale(" + b + ") " : ""),
              (b = c.get("zIndex")),
              c.get("dragging") && (b = 1e6),
              _.L(b) || (b = Math.min(c.getPosition().y, 999999)),
              _.Mk(t, b),
              c.A && c.A.setZIndex(b);
        jR(c);
        for (a = 0; a < c.D.length; ++a) (t = c.D[a]) && _.uv(t);
      }
    }, 0);
    this.Vd = a;
    this.Rb = b || !1;
    this.yb = new BQ(0);
    this.yb.bindTo("position", this);
    this.A = this.j = null;
    this.td = [];
    this.Jc = !1;
    this.C = null;
    this.Lc = !1;
    this.m = null;
    this.D = [];
    this.gc = new _.N(0, 0);
    this.Sb = new _.O(0, 0);
    this.la = new _.N(0, 0);
    this.Tb = !0;
    this.da = 0;
    this.l = this.Kc = this.vd = this.ud = null;
    this.fc = !1;
    this.Ic = [
      _.R.addListener(this, "dragstart", this.sj),
      _.R.addListener(this, "dragend", this.rj),
      _.R.addListener(this, "panbynow", function () {
        return c.T.Ma();
      }),
    ];
    this.sa = this.I = this.G = this.B = this.L = this.Ga = null;
  };
  cR = function (a) {
    a.A && (lR(a.td), a.A.release(), (a.A = null));
    a.j && _.Fk(a.j);
    a.j = null;
    a.m && _.Fk(a.m);
    a.m = null;
    fR(a);
    a.D = [];
  };
  hR = function (a) {
    var b = a.Hk();
    if (b) {
      if (!a.A) {
        var c = (a.A = new $Q(
          a.getPanes(),
          b,
          a.get("opacity"),
          a.get("visible"),
        ));
        a.td = [
          _.R.addListener(a, "label_changed", function () {
            c.setLabel(this.get("label"));
          }),
          _.R.addListener(a, "opacity_changed", function () {
            c.setOpacity(this.get("opacity"));
          }),
          _.R.addListener(a, "panes_changed", function () {
            var a = this.get("panes");
            c.m = a;
            bR(c);
            _.gg(c.j);
          }),
          _.R.addListener(a, "visible_changed", function () {
            c.setVisible(this.get("visible"));
          }),
        ];
      }
      b = a.Af();
      a.getPosition();
      if (b) {
        var d = a.j,
          e = eR(a);
        d = iR(a, b, e, PQ(d) || _.ti);
        b = b.labelOrigin || new _.N(b.size.width / 2, b.size.height / 2);
        aR(a.A, new _.N(d.x + b.x, d.y + b.y));
        a.A.j.Ma();
      }
    }
  };
  fR = function (a) {
    a.da
      ? (a.fc = !0)
      : (a.C && _.Fk(a.C),
        (a.C = null),
        a.B &&
          (a.B.unbindAll(),
          a.B.release(),
          (a.B = null),
          lR(a.Ga),
          (a.Ga = null)),
        a.G && a.G.remove(),
        a.I && a.I.remove());
  };
  iR = function (a, b, c, d) {
    var e = a.getPosition(),
      f = b.size,
      g = (b = b.anchor) ? b.x : f.width / 2;
    a.gc.x = e.x + d.x - Math.round(g - (g - f.width / 2) * (1 - c));
    b = b ? b.y : f.height;
    a.gc.y = e.y + d.y - Math.round(b - (b - f.height / 2) * (1 - c));
    return a.gc;
  };
  dR = function (a, b, c, d, e) {
    if (null != d.url) {
      var f = e;
      e = d.origin || _.ti;
      var g = a.get("opacity");
      a = _.Ac(g, 1);
      c
        ? (c.firstChild.__src__ != d.url &&
            ((b = c.firstChild), _.fB(b, d.url, b.A)),
          _.jB(c, d.size, e, d.scaledSize),
          (c.firstChild.style.opacity = a))
        : ((f = f || {}),
          (f.l = 1 != _.je.type),
          (f.alpha = !0),
          (f.opacity = g),
          (c = _.iB(d.url, null, e, d.size, null, d.scaledSize, f)),
          _.tv(c),
          b.appendChild(c));
      a = c;
    } else
      (b = c || _.X("div", b)),
        mR(b, d),
        (c = b),
        (a = a.get("opacity")),
        _.xv(c, _.Ac(a, 1)),
        (a = b);
    c = a;
    c.j = d;
    return c;
  };
  gR = function (a, b) {
    (a.G && a.I && a.sa == b) ||
      ((a.sa = b),
      a.G && a.G.remove(),
      a.I && a.I.remove(),
      (a.G = _.En(b, {
        Ia: function (b) {
          a.da++;
          _.Tm(b);
          _.R.trigger(a, "mousedown", b.ea);
        },
        Ka: function (b) {
          a.da--;
          !a.da &&
            a.fc &&
            _.mv(
              this,
              function () {
                a.fc = !1;
                fR(a);
                a.T.Ma();
              },
              0,
            );
          _.Vm(b);
          _.R.trigger(a, "mouseup", b.ea);
        },
        gb: function (b) {
          var c = b.event;
          b = b.rc;
          _.Wm(c);
          3 == c.button
            ? b || _.R.trigger(a, "rightclick", c.ea)
            : b
            ? _.R.trigger(a, "dblclick", c.ea)
            : _.R.trigger(a, "click", c.ea);
        },
      })),
      (a.I = new _.sq(b, b, {
        Kd: function (b) {
          _.R.trigger(a, "mouseout", b);
        },
        Ld: function (b) {
          _.R.trigger(a, "mouseover", b);
        },
      })));
  };
  lR = function (a) {
    if (a) for (var b = 0, c = a.length; b < c; b++) _.R.removeListener(a[b]);
  };
  eR = function (a) {
    return _.zi.Jb() ? Math.min(1, a.get("scale") || 1) : 1;
  };
  jR = function (a) {
    if (!a.Tb) {
      a.l && (a.L && _.R.removeListener(a.L), a.l.cancel(), (a.l = null));
      var b = a.get("animation");
      if ((b = nR[b])) {
        var c = b.options;
        a.j &&
          ((a.Tb = !0),
          a.set("animating", !0),
          (b = JQ(a.j, b.icon, c)),
          (a.l = b),
          (a.L = _.R.addListenerOnce(b, "done", function () {
            a.set("animating", !1);
            a.l = null;
            a.set("animation", null);
          })));
      }
    }
  };
  xR = function (a, b, c, d, e) {
    var f = this;
    this.Ja = b;
    this.j = a;
    this.da = e;
    this.G = b instanceof _.ce;
    a = oR(this);
    b = this.G && a ? _.kl(a, b.getProjection()) : null;
    this.l = new kR(d, !!this.G);
    this.I = !0;
    this.L = this.ia = null;
    (this.m = this.G
      ? new _.Hv(e.l, this.l, b, e, function () {
          if (f.l.get("dragging") && !f.j.get("place")) {
            var a = f.m.getPosition();
            a &&
              ((a = _.ll(a, f.Ja.get("projection"))),
              (f.I = !1),
              f.j.set("position", a),
              (f.I = !0));
          }
        })
      : null) && e.qa(this.m);
    this.A = new VQ(c);
    this.ca = this.G ? null : new _.BB();
    this.C = this.G ? null : new YQ();
    this.D = new _.S();
    this.D.bindTo("position", this.j);
    this.D.bindTo("place", this.j);
    this.D.bindTo("draggable", this.j);
    this.D.bindTo("dragging", this.j);
    this.A.bindTo("modelIcon", this.j, "icon");
    this.A.bindTo("modelLabel", this.j, "label");
    this.A.bindTo("modelCross", this.j, "cross");
    this.A.bindTo("modelShape", this.j, "shape");
    this.A.bindTo("useDefaults", this.j, "useDefaults");
    this.l.bindTo("icon", this.A, "viewIcon");
    this.l.bindTo("label", this.A, "viewLabel");
    this.l.bindTo("cross", this.A, "viewCross");
    this.l.bindTo("shape", this.A, "viewShape");
    this.l.bindTo("title", this.j);
    this.l.bindTo("cursor", this.j);
    this.l.bindTo("dragging", this.j);
    this.l.bindTo("clickable", this.j);
    this.l.bindTo("zIndex", this.j);
    this.l.bindTo("opacity", this.j);
    this.l.bindTo("anchorPoint", this.j);
    this.l.bindTo("animation", this.j);
    this.l.bindTo("crossOnDrag", this.j);
    this.l.bindTo("raiseOnDrag", this.j);
    this.l.bindTo("animating", this.j);
    this.C || this.l.bindTo("visible", this.j);
    pR(this);
    qR(this);
    this.B = [];
    rR(this);
    this.G
      ? (sR(this), tR(this), uR(this))
      : (vR(this),
        this.ca &&
          (this.C.bindTo("visible", this.j),
          this.C.bindTo("cursor", this.j),
          this.C.bindTo("icon", this.j),
          this.C.bindTo("icon", this.A, "viewIcon"),
          this.C.bindTo("mapPixelBoundsQ", this.Ja.__gm, "pixelBoundsQ"),
          this.C.bindTo("position", this.ca, "pixelPosition"),
          this.l.bindTo("visible", this.C, "shouldRender")),
        wR(this));
  };
  pR = function (a) {
    var b = a.Ja.__gm;
    a.l.bindTo("mapPixelBounds", b, "pixelBounds");
    a.l.bindTo("panningEnabled", a.Ja, "draggable");
    a.l.bindTo("panes", b);
  };
  qR = function (a) {
    var b = a.Ja.__gm;
    _.R.addListener(a.D, "dragging_changed", function () {
      b.set("markerDragging", a.j.get("dragging"));
    });
    b.set("markerDragging", b.get("markerDragging") || a.j.get("dragging"));
  };
  rR = function (a) {
    a.B.push(_.R.forward(a.l, "panbynow", a.Ja.__gm));
    _.C(yR, function (b) {
      a.B.push(
        _.R.addListener(a.l, b, function (c) {
          var d = a.G ? oR(a) : a.j.get("internalPosition");
          c = new _.yk(d, c, a.l.get("position"));
          _.R.trigger(a.j, b, c);
        }),
      );
    });
  };
  sR = function (a) {
    function b() {
      a.j.get("place")
        ? a.l.set("draggable", !1)
        : a.l.set("draggable", !!a.j.get("draggable"));
    }
    a.B.push(_.R.addListener(a.D, "draggable_changed", b));
    a.B.push(_.R.addListener(a.D, "place_changed", b));
    b();
  };
  tR = function (a) {
    a.B.push(
      _.R.addListener(a.Ja, "projection_changed", function () {
        return zR(a);
      }),
    );
    a.B.push(
      _.R.addListener(a.D, "position_changed", function () {
        return zR(a);
      }),
    );
    a.B.push(
      _.R.addListener(a.D, "place_changed", function () {
        return zR(a);
      }),
    );
  };
  uR = function (a) {
    a.B.push(
      _.R.addListener(a.l, "dragging_changed", function () {
        if (a.l.get("dragging")) (a.ia = _.Iv(a.m)), a.ia && _.Jv(a.m, a.ia);
        else {
          a.ia = null;
          a.L = null;
          var b = a.m.getPosition();
          if (b && ((b = _.ll(b, a.Ja.get("projection"))), (b = AR(a, b)))) {
            var c = _.kl(b, a.Ja.get("projection"));
            a.j.get("place") ||
              ((a.I = !1), a.j.set("position", b), (a.I = !0));
            a.m.setPosition(c);
          }
        }
      }),
    );
    a.B.push(
      _.R.addListener(a.l, "deltaclientposition_changed", function () {
        var b = a.l.get("deltaClientPosition");
        if (b && (a.ia || a.L)) {
          var c = a.L || a.ia;
          a.L = {
            clientX: c.clientX + b.clientX,
            clientY: c.clientY + b.clientY,
          };
          b = a.da.Cb(a.L);
          b = _.ll(b, a.Ja.get("projection"));
          c = a.L;
          var d = AR(a, b);
          d &&
            (a.j.get("place") ||
              ((a.I = !1), a.j.set("position", d), (a.I = !0)),
            d.equals(b) ||
              ((b = _.kl(d, a.Ja.get("projection"))), (c = _.Iv(a.m, b))));
          c && _.Jv(a.m, c);
        }
      }),
    );
  };
  vR = function (a) {
    if (a.ca) {
      a.l.bindTo("scale", a.ca);
      a.l.bindTo("position", a.ca, "pixelPosition");
      var b = a.Ja.__gm;
      a.ca.bindTo("latLngPosition", a.j, "internalPosition");
      a.ca.bindTo("focus", a.Ja, "position");
      a.ca.bindTo("zoom", b);
      a.ca.bindTo("offset", b);
      a.ca.bindTo("center", b, "projectionCenterQ");
      a.ca.bindTo("projection", a.Ja);
    }
  };
  wR = function (a) {
    if (a.ca) {
      var b = new ZQ(a.Ja instanceof _.$d);
      b.bindTo("internalPosition", a.ca, "latLngPosition");
      b.bindTo("place", a.j);
      b.bindTo("position", a.j);
      b.bindTo("draggable", a.j);
      a.l.bindTo("draggable", b, "actuallyDraggable");
    }
  };
  zR = function (a) {
    if (a.I) {
      var b = oR(a);
      b && a.m.setPosition(_.kl(b, a.Ja.get("projection")));
    }
  };
  AR = function (a, b) {
    var c = a.Ja.__gm.get("snappingCallback");
    return c && (a = c({ latLng: b, overlay: a.j })) ? a : b;
  };
  oR = function (a) {
    var b = a.j.get("place");
    a = a.j.get("position");
    return (b && b.location) || a;
  };
  CR = function (a, b, c) {
    b instanceof _.ce
      ? b.__gm.j.then(function (d) {
          BR(a, b, c, d.ya);
        })
      : BR(a, b, c, null);
  };
  BR = function (a, b, c, d) {
    function e(e) {
      var f = b instanceof _.ce,
        h = f ? e.__gm.cc.map : e.__gm.cc.streetView,
        k = h && h.Ja == b,
        m = k != a.contains(e);
      h &&
        m &&
        (f
          ? (e.__gm.cc.map.dispose(), (e.__gm.cc.map = null))
          : (e.__gm.cc.streetView.dispose(), (e.__gm.cc.streetView = null)));
      !a.contains(e) ||
        (!f && e.get("mapOnly")) ||
        k ||
        (b instanceof _.ce
          ? (e.__gm.cc.map = new xR(e, b, c, _.cC(b.__gm, e), d))
          : (e.__gm.cc.streetView = new xR(e, b, c, _.vb, null)));
    }
    _.R.addListener(a, "insert", e);
    _.R.addListener(a, "remove", e);
    a.forEach(e);
  };
  DR = function (a, b, c, d) {
    this.m = a;
    this.A = b;
    this.C = c;
    this.l = d;
  };
  FR = function (a) {
    if (!a.j) {
      var b = a.m,
        c = b.ownerDocument.createElement("canvas");
      _.Nk(c);
      c.style.position = "absolute";
      c.style.top = c.style.left = "0";
      var d = c.getContext("2d"),
        e = ER(d),
        f = a.l.size;
      c.width = Math.ceil(f.J * e);
      c.height = Math.ceil(f.K * e);
      c.style.width = _.W(f.J);
      c.style.height = _.W(f.K);
      b.appendChild(c);
      a.j = c.context = d;
    }
    return a.j;
  };
  ER = function (a) {
    return (
      _.Dk() /
      (a.webkitBackingStorePixelRatio ||
        a.mozBackingStorePixelRatio ||
        a.msBackingStorePixelRatio ||
        a.oBackingStorePixelRatio ||
        a.backingStorePixelRatio ||
        1)
    );
  };
  GR = function (a, b, c) {
    a = a.C;
    a.width = b;
    a.height = c;
    return a;
  };
  IR = function (a) {
    var b = HR(a),
      c = FR(a),
      d = ER(c);
    a = a.l.size;
    c.clearRect(0, 0, Math.ceil(a.J * d), Math.ceil(a.K * d));
    b.forEach(function (a) {
      c.globalAlpha = _.Ac(a.opacity, 1);
      c.drawImage(
        a.image,
        a.md,
        a.nd,
        a.Rd,
        a.Qd,
        Math.round(a.dx * d),
        Math.round(a.dy * d),
        a.Lb * d,
        a.Kb * d,
      );
    });
  };
  HR = function (a) {
    var b = [];
    a.A.forEach(function (a) {
      b.push(a);
    });
    b.sort(function (a, b) {
      return a.zIndex - b.zIndex;
    });
    return b;
  };
  JR = function () {
    this.j = _.lv().Aa;
  };
  MR = function (a, b, c) {
    var d = this;
    this.B = b;
    this.j = c;
    this.V = {};
    this.l = {};
    this.A = 0;
    this.m = !0;
    var e = {
      animating: 1,
      animation: 1,
      attribution: 1,
      clickable: 1,
      cursor: 1,
      draggable: 1,
      flat: 1,
      icon: 1,
      label: 1,
      opacity: 1,
      optimized: 1,
      place: 1,
      position: 1,
      shape: 1,
      title: 1,
      visible: 1,
      zIndex: 1,
    };
    this.C = function (a) {
      a in e && (delete this.changed, (d.l[_.Cd(this)] = this), KR(d));
    };
    a.j = function (a) {
      LR(d, a);
    };
    a.onRemove = function (a) {
      delete a.changed;
      delete d.l[_.Cd(a)];
      d.B.remove(a);
      d.j.remove(a);
      _.Pm("Om", "-p", a);
      _.Pm("Om", "-v", a);
      _.Pm("Smp", "-p", a);
      _.R.removeListener(d.V[_.Cd(a)]);
      delete d.V[_.Cd(a)];
    };
    a = a.l;
    for (var f in a) LR(this, a[f]);
  };
  LR = function (a, b) {
    a.l[_.Cd(b)] = b;
    KR(a);
  };
  KR = function (a) {
    a.A ||
      (a.A = _.vk(function () {
        a.A = 0;
        var b = a.l;
        a.l = {};
        var c = a.m,
          d;
        for (d in b) NR(a, b[d]);
        c &&
          !a.m &&
          a.j.forEach(function (b) {
            NR(a, b);
          });
      }));
  };
  NR = function (a, b) {
    var c = OR(b);
    b.changed = a.C;
    if (!b.get("animating"))
      if ((a.B.remove(b), c && 0 != b.get("visible"))) {
        a.m && 256 <= a.j.m && (a.m = !1);
        var d = b.get("optimized"),
          e = b.get("draggable"),
          f = !!b.get("animation"),
          g = b.get("icon");
        g = !!g && null != g.path;
        var h = null != b.get("label");
        0 == d || e || f || g || h || (!d && a.m)
          ? _.Sd(a.j, b)
          : (a.j.remove(b), _.Sd(a.B, b));
        !b.get("pegmanMarker") &&
          ((d = b.get("map")),
          _.Mm(d, "Om"),
          _.Om("Om", "-p", b),
          d.getBounds() && d.getBounds().contains(c) && _.Om("Om", "-v", b),
          (a.V[_.Cd(b)] =
            a.V[_.Cd(b)] ||
            _.R.addListener(b, "click", function (a) {
              _.Om("Om", "-i", a);
            })),
          (a = b.get("place"))) &&
          (a.placeId ? _.Mm(d, "Smpi") : _.Mm(d, "Smpq"),
          _.Om("Smp", "-p", b),
          b.get("attribution") && _.Mm(d, "Sma"));
      } else a.j.remove(b);
  };
  OR = function (a) {
    var b = a.get("place");
    b = b ? b.location : a.get("position");
    a.set("internalPosition", b);
    return b;
  };
  PR = function (a, b, c, d) {
    this.A = c;
    this.B = new _.$B(a, d, c);
    this.j = b;
  };
  RR = function (a, b, c, d) {
    var e = b.pa,
      f = a.A.get();
    if (!f) return null;
    f = f.ga.size;
    c = _.aC(a.B, e, new _.N(c, d));
    if (!c) return null;
    a = new _.N(c.Sc.O * f.J, c.Sc.P * f.K);
    var g = [];
    c.Ba.ta.forEach(function (a) {
      g.push(a);
    });
    g.sort(function (a, b) {
      return b.zIndex - a.zIndex;
    });
    c = null;
    for (e = 0; (d = g[e]); ++e)
      if (((f = d.Hd), 0 != f.clickable && ((f = f.Ub), QR(a.x, a.y, d)))) {
        c = f;
        break;
      }
    c && (b.j = d);
    return c;
  };
  QR = function (a, b, c) {
    if (c.dx > a || c.dy > b || c.dx + c.Lb < a || c.dy + c.Kb < b) a = !1;
    else
      a: {
        var d = c.Hd.shape;
        a -= c.dx;
        b -= c.dy;
        c = d.coords;
        switch (d.type.toLowerCase()) {
          case "rect":
            a = c[0] <= a && a <= c[2] && c[1] <= b && b <= c[3];
            break a;
          case "circle":
            d = c[2];
            a -= c[0];
            b -= c[1];
            a = a * a + b * b <= d * d;
            break a;
          default:
            (d = c.length),
              (c[0] == c[d - 2] && c[1] == c[d - 1]) || c.push(c[0], c[1]),
              (a = 0 != _.hC(a, b, c));
        }
      }
    return a;
  };
  TR = function (a, b, c) {
    this.m = b;
    var d = this;
    a.j = function (a) {
      SR(d, a, !0);
    };
    a.onRemove = function (a) {
      SR(d, a, !1);
    };
    this.l = null;
    this.j = !1;
    this.B = 0;
    this.C = c;
    a.m ? ((this.j = !0), this.A()) : _.Fb(_.Vj(_.R.trigger, c, "load"));
  };
  SR = function (a, b, c) {
    4 > a.B++ ? (c ? a.m.B(b) : a.m.D(b)) : (a.j = !0);
    a.l || (a.l = _.vk((0, _.z)(a.A, a)));
  };
  WR = function (a, b, c, d, e, f, g) {
    _.hh.call(this);
    var h = this;
    this.aa = a;
    this.B = d;
    this.m = c;
    this.l = e;
    this.A = f;
    this.j = g || _.Vi;
    b.j = function (a) {
      var b = _.jl(h.get("projection")),
        c = a.j;
      -64 > c.dx || -64 > c.dy || 64 < c.dx + c.Lb || 64 < c.dy + c.Kb
        ? (_.Sd(h.m, a), (c = h.l.search(_.wi)))
        : ((c = a.latLng),
          (c = new _.N(c.lat(), c.lng())),
          (a.pa = c),
          _.jH(h.A, { pa: c, Ae: a }),
          (c = _.gC(h.l, c)));
      for (var d = 0, e = c.length; d < e; ++d) {
        var f = c[d],
          g = f.Ba || null;
        if ((f = UR(h, g, f.wi || null, a, b)))
          (a.ta[_.Cd(f)] = f), _.Sd(g.ta, f);
      }
    };
    b.onRemove = function (a) {
      VR(h, a);
    };
  };
  XR = function (a, b) {
    a.aa[_.Cd(b)] = b;
    var c = { O: b.fa.x, P: b.fa.y, $: b.zoom },
      d = _.jl(a.get("projection")),
      e = _.Ij(a.j, c);
    e = new _.N(e.M, e.N);
    var f = _.Kj(a.j, c, 64 / a.j.size.J);
    c = f.min;
    f = f.max;
    c = _.cd(c.M, c.N, f.M, f.N);
    _.lH(c, d, e, function (c, e) {
      c.wi = e;
      c.Ba = b;
      b.Fb[_.Cd(c)] = c;
      _.eC(a.l, c);
      e = _.zc(a.A.search(c), function (a) {
        return a.Ae;
      });
      a.m.forEach((0, _.z)(e.push, e));
      for (var f = 0, g = e.length; f < g; ++f) {
        var h = e[f],
          q = UR(a, b, c.wi, h, d);
        q && ((h.ta[_.Cd(q)] = q), _.Sd(b.ta, q));
      }
    });
    b.ba && b.ta && a.B(b.ba, b.ta);
  };
  YR = function (a, b) {
    b &&
      (delete a.aa[_.Cd(b)],
      b.ta.forEach(function (a) {
        b.ta.remove(a);
        delete a.Hd.ta[_.Cd(a)];
      }),
      _.uc(b.Fb, function (b, d) {
        a.l.remove(d);
      }));
  };
  VR = function (a, b) {
    a.m.contains(b) ? a.m.remove(b) : a.A.remove({ pa: b.pa, Ae: b });
    _.uc(b.ta, function (a, d) {
      delete b.ta[a];
      d.Ba.ta.remove(d);
    });
  };
  UR = function (a, b, c, d, e) {
    if (!e) return null;
    var f = e.fromLatLngToPoint(c);
    c = e.fromLatLngToPoint(d.latLng);
    e = a.j.size;
    a = _.zu(a.j, new _.Wc(c.x, c.y), new _.Wc(f.x, f.y), b.zoom);
    c.x = a.O * e.J;
    c.y = a.P * e.K;
    a = d.zIndex;
    _.L(a) || (a = c.y);
    a = Math.round(1e3 * a) + (_.Cd(d) % 1e3);
    f = d.j;
    b = {
      image: f.image,
      md: f.md,
      nd: f.nd,
      Rd: f.Rd,
      Qd: f.Qd,
      dx: f.dx + c.x,
      dy: f.dy + c.y,
      Lb: f.Lb,
      Kb: f.Kb,
      zIndex: a,
      opacity: d.opacity,
      Ba: b,
      Hd: d,
    };
    return b.dx > e.J || b.dy > e.K || 0 > b.dx + b.Lb || 0 > b.dy + b.Kb
      ? null
      : b;
  };
  aS = function (a, b, c, d, e) {
    var f = ZR,
      g = this;
    a.j = function (a) {
      $R(g, a);
    };
    a.onRemove = function (a) {
      g.l.remove(a.__gm.qe);
      delete a.__gm.qe;
    };
    this.l = b;
    this.j = c;
    this.B = f;
    this.A = d;
    this.m = e;
  };
  $R = function (a, b) {
    var c = b.get("internalPosition"),
      d = b.get("zIndex"),
      e = b.get("opacity"),
      f = (b.__gm.qe = { Ub: b, latLng: c, zIndex: d, opacity: e, ta: {} });
    c = b.get("useDefaults");
    d = b.get("icon");
    var g = b.get("shape");
    g || (d && !c) || (g = a.j.shape);
    var h = d ? a.B(d) : a.j.icon,
      k = zQ(function () {
        if (f == b.__gm.qe && (f.j || f.l)) {
          var c = g;
          if (f.j) {
            var d = h.size;
            var e = b.get("anchorPoint");
            if (!e || e.j)
              (e = new _.N(f.j.dx + d.width / 2, f.j.dy)),
                (e.j = !0),
                b.set("anchorPoint", e);
          } else d = f.l.size;
          c
            ? (c.coords = c.coords || c.coord)
            : (c = { type: "rect", coords: [0, 0, d.width, d.height] });
          f.shape = c;
          f.clickable = b.get("clickable");
          f.title = b.get("title") || null;
          f.cursor = b.get("cursor") || "pointer";
          _.Sd(a.l, f);
        }
      });
    h.url
      ? a.A.load(h, function (a) {
          f.j = a;
          k();
        })
      : ((f.l = a.m(h)), k());
  };
  ZR = function (a) {
    if (_.Dc(a)) {
      var b = ZR.j;
      return (b[a] = b[a] || { url: a });
    }
    return a;
  };
  bS = function (a, b, c) {
    var d = new _.Rd(),
      e = new _.Rd(),
      f = new JR();
    new aS(a, d, new SQ(), f, c);
    var g = _.Gk(b.getDiv()).createElement("canvas"),
      h = {};
    a = _.cd(-100, -300, 100, 300);
    var k = new _.dC(a, void 0);
    a = _.cd(-90, -180, 90, 180);
    var m = _.kH(a, function (a, b) {
        return a.Ae == b.Ae;
      }),
      p = null,
      q = null,
      t = new _.Yd(null, void 0),
      v = b.__gm;
    v.j.then(function (a) {
      v.m.register(new PR(h, v, t, a.ya.l));
      a.Pc.ja(function (a) {
        if (a && p != a.ga) {
          q && q.unbindAll();
          var c = (p = a.ga);
          q = new WR(
            h,
            d,
            e,
            function (a, b) {
              return new TR(b, new DR(a, b, g, c), a);
            },
            k,
            m,
            p,
          );
          q.bindTo("projection", b);
          t.set(q.Na());
        }
      });
    });
    _.bC(b, t, "markerLayer", -1);
  };
  cS = _.l();
  _.N.prototype.Nf = _.bj(5, function () {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  });
  _.A(BQ, _.S);
  BQ.prototype.position_changed = function () {
    this.j ||
      ((this.j = !0),
      this.set("rawPosition", this.get("position")),
      (this.j = !1));
  };
  BQ.prototype.rawPosition_changed = function () {
    this.j ||
      ((this.j = !0),
      this.set("position", CQ(this, this.get("rawPosition"))),
      (this.j = !1));
  };
  var RQ = {
      linear: _.na(),
      "ease-out": function (a) {
        return 1 - Math.pow(a - 1, 2);
      },
      "ease-in": function (a) {
        return Math.pow(a, 2);
      },
    },
    FQ;
  HQ.prototype.start = function () {
    this.j.Yb = this.j.Yb || 1;
    this.j.duration = this.j.duration || 1;
    _.R.addDomListenerOnce(
      this.sa,
      "webkitAnimationEnd",
      (0, _.z)(function () {
        this.l = !0;
        _.R.trigger(this, "done");
      }, this),
    );
    KQ(this.sa, GQ(this.m), this.j);
  };
  HQ.prototype.cancel = function () {
    KQ(this.sa, null, {});
    _.R.trigger(this, "done");
  };
  HQ.prototype.stop = function () {
    this.l ||
      _.R.addDomListenerOnce(
        this.sa,
        "webkitAnimationIteration",
        (0, _.z)(this.cancel, this),
      );
  };
  var NQ = null,
    LQ = [];
  IQ.prototype.start = function () {
    LQ.push(this);
    NQ || (NQ = window.setInterval(OQ, 10));
    this.m = _.tk();
    MQ(this);
  };
  IQ.prototype.cancel = function () {
    this.j || ((this.j = !0), QQ(this, 1), _.R.trigger(this, "done"));
  };
  IQ.prototype.stop = function () {
    this.j || (this.l = 1);
  };
  var nR = {};
  nR[1] = {
    options: { duration: 700, Yb: "infinite" },
    icon: new window.Animation([
      { time: 0, translate: [0, 0], ib: "ease-out" },
      { time: 0.5, translate: [0, -20], ib: "ease-in" },
      { time: 1, translate: [0, 0], ib: "ease-out" },
    ]),
  };
  nR[2] = {
    options: { duration: 500, Yb: 1 },
    icon: new window.Animation([
      { time: 0, translate: [0, -500], ib: "ease-in" },
      { time: 0.5, translate: [0, 0], ib: "ease-out" },
      { time: 0.75, translate: [0, -20], ib: "ease-in" },
      { time: 1, translate: [0, 0], ib: "ease-out" },
    ]),
  };
  nR[3] = {
    options: { duration: 200, Nf: 20, Yb: 1, Bi: !1 },
    icon: new window.Animation([
      { time: 0, translate: [0, 0], ib: "ease-in" },
      { time: 1, translate: [0, -20], ib: "ease-out" },
    ]),
  };
  nR[4] = {
    options: { duration: 500, Nf: 20, Yb: 1, Bi: !1 },
    icon: new window.Animation([
      { time: 0, translate: [0, -20], ib: "ease-in" },
      { time: 0.5, translate: [0, 0], ib: "ease-out" },
      { time: 0.75, translate: [0, -10], ib: "ease-in" },
      { time: 1, translate: [0, 0], ib: "ease-out" },
    ]),
  };
  var UQ;
  _.A(VQ, _.S);
  VQ.prototype.changed = function (a) {
    ("modelIcon" != a &&
      "modelShape" != a &&
      "modelCross" != a &&
      "modelLabel" != a) ||
      _.gg(this.T);
  };
  _.A(YQ, _.S);
  YQ.prototype.changed = function () {
    if (!this.l) {
      var a = XQ(this);
      this.j != a &&
        ((this.j = a),
        (this.l = !0),
        this.set("shouldRender", this.j),
        (this.l = !1));
    }
  };
  _.A(ZQ, _.S);
  ZQ.prototype.internalPosition_changed = function () {
    if (!this.j) {
      this.j = !0;
      var a = this.get("position"),
        b = this.get("internalPosition");
      a &&
        b &&
        !a.equals(b) &&
        this.set("position", this.get("internalPosition"));
      this.j = !1;
    }
  };
  ZQ.prototype.place_changed =
    ZQ.prototype.position_changed =
    ZQ.prototype.draggable_changed =
      function () {
        if (!this.j) {
          this.j = !0;
          if (this.l) {
            var a = this.get("place");
            a
              ? this.set("internalPosition", a.location)
              : this.set("internalPosition", this.get("position"));
          }
          this.get("place")
            ? this.set("actuallyDraggable", !1)
            : this.set("actuallyDraggable", this.get("draggable"));
          this.j = !1;
        }
      };
  _.n = $Q.prototype;
  _.n.setOpacity = function (a) {
    this.B = a;
    _.gg(this.j);
  };
  _.n.setLabel = function (a) {
    this.A = a;
    _.gg(this.j);
  };
  _.n.setVisible = function (a) {
    this.C = a;
    _.gg(this.j);
  };
  _.n.setZIndex = function (a) {
    this.D = a;
    _.gg(this.j);
  };
  _.n.release = function () {
    this.m = null;
    bR(this);
  };
  _.n.pj = function () {
    if (this.m && this.A && 0 != this.C) {
      var a = this.m.markerLayer,
        b = this.A;
      this.l ? a.appendChild(this.l) : (this.l = _.X("div", a));
      a = this.l;
      this.oa && _.Lk(a, this.oa);
      var c = a.firstChild;
      c ||
        ((c = _.X("div", a)),
        (c.style.height = "100px"),
        (c.style.marginTop = "-50px"),
        (c.style.marginLeft = "-50%"),
        (c.style.display = "table"),
        (c.style.borderSpacing = "0"));
      var d = c.firstChild;
      d ||
        ((d = _.X("div", c)),
        (d.style.display = "table-cell"),
        (d.style.verticalAlign = "middle"),
        (d.style.whiteSpace = "nowrap"),
        (d.style.textAlign = "center"));
      c = d.firstChild || _.X("div", d);
      _.Ik(c, b.text);
      c.style.color = b.color;
      c.style.fontSize = b.fontSize;
      c.style.fontWeight = b.fontWeight;
      c.style.fontFamily = b.fontFamily;
      _.xv(c, _.Ac(this.B, 1));
      _.Mk(a, this.D);
    } else bR(this);
  };
  var mR = (0, _.z)(
    function (a, b, c) {
      _.Ik(b, "");
      var d = _.Dk(),
        e = _.Gk(b).createElement("canvas");
      e.width = c.size.width * d;
      e.height = c.size.height * d;
      e.style.width = _.W(c.size.width);
      e.style.height = _.W(c.size.height);
      _.ne(b, c.size);
      b.appendChild(e);
      _.Lk(e, _.ti);
      _.Nk(e);
      b = e.getContext("2d");
      b.lineCap = b.lineJoin = "round";
      b.scale(d, d);
      a = a(b);
      b.beginPath();
      _.rC(a, c.j, c.anchor.x, c.anchor.y, c.rotation || 0, c.scale);
      c.fillOpacity &&
        ((b.fillStyle = c.fillColor),
        (b.globalAlpha = c.fillOpacity),
        b.fill());
      c.strokeWeight &&
        ((b.lineWidth = c.strokeWeight),
        (b.strokeStyle = c.strokeColor),
        (b.globalAlpha = c.strokeOpacity),
        b.stroke());
    },
    null,
    function (a) {
      return new _.qC(a);
    },
  );
  _.A(kR, _.S);
  _.n = kR.prototype;
  _.n.panes_changed = function () {
    cR(this);
    _.gg(this.T);
  };
  _.n.jd = function (a) {
    this.set("position", a && new _.N(a.J, a.K));
  };
  _.n.dd = function () {
    this.unbindAll();
    this.set("panes", null);
    this.l && this.l.stop();
    this.L && (_.R.removeListener(this.L), (this.L = null));
    this.l = null;
    lR(this.Ic);
    this.Ic = [];
    cR(this);
    fR(this);
  };
  _.n.kg = function () {
    var a;
    if (
      !(a =
        this.ud != (0 != this.get("clickable")) ||
        this.vd != this.getDraggable())
    ) {
      a = this.Kc;
      var b = this.get("shape");
      if (null == a || null == b) a = a == b;
      else {
        var c;
        if ((c = a.type == b.type))
          a: if (
            ((a = a.coords),
            (b = b.coords),
            _.Oa(a) && _.Oa(b) && a.length == b.length)
          ) {
            c = a.length;
            for (var d = 0; d < c; d++)
              if (a[d] !== b[d]) {
                c = !1;
                break a;
              }
            c = !0;
          } else c = !1;
        a = c;
      }
      a = !a;
    }
    a &&
      ((this.ud = 0 != this.get("clickable")),
      (this.vd = this.getDraggable()),
      (this.Kc = this.get("shape")),
      fR(this),
      _.gg(this.T));
  };
  _.n.shape_changed = kR.prototype.kg;
  _.n.clickable_changed = kR.prototype.kg;
  _.n.draggable_changed = kR.prototype.kg;
  _.n.qb = function () {
    _.gg(this.T);
  };
  _.n.cursor_changed = kR.prototype.qb;
  _.n.scale_changed = kR.prototype.qb;
  _.n.raiseOnDrag_changed = kR.prototype.qb;
  _.n.crossOnDrag_changed = kR.prototype.qb;
  _.n.zIndex_changed = kR.prototype.qb;
  _.n.opacity_changed = kR.prototype.qb;
  _.n.title_changed = kR.prototype.qb;
  _.n.cross_changed = kR.prototype.qb;
  _.n.icon_changed = kR.prototype.qb;
  _.n.visible_changed = kR.prototype.qb;
  _.n.dragging_changed = kR.prototype.qb;
  _.n.position_changed = function () {
    this.Rb ? this.T.Ma() : _.gg(this.T);
  };
  _.n.getPosition = _.Nd("position");
  _.n.getPanes = _.Nd("panes");
  _.n.qj = _.Nd("visible");
  _.n.getDraggable = function () {
    return !!this.get("draggable");
  };
  _.n.sj = function () {
    this.set("dragging", !0);
    this.yb.set("snappingCallback", this.Vd);
  };
  _.n.rj = function () {
    this.yb.set("snappingCallback", null);
    this.set("dragging", !1);
  };
  _.n.animation_changed = function () {
    this.Tb = !1;
    this.get("animation")
      ? jR(this)
      : (this.set("animating", !1), this.l && this.l.stop());
  };
  _.n.Af = _.Nd("icon");
  _.n.Hk = _.Nd("label");
  var yR =
    "click dblclick mouseup mousedown mouseover mouseout rightclick dragstart drag dragend".split(
      " ",
    );
  xR.prototype.dispose = function () {
    this.l.set("animation", null);
    this.l.dd();
    this.da && this.m ? this.da.Xc(this.m) : this.l.dd();
    this.C && this.C.unbindAll();
    this.ca && this.ca.unbindAll();
    this.A.unbindAll();
    this.D.unbindAll();
    _.C(this.B, _.R.removeListener);
    this.B.length = 0;
  };
  DR.prototype.B = DR.prototype.D = function (a) {
    var b = HR(this),
      c = FR(this),
      d = ER(c),
      e = Math.round(a.dx * d),
      f = Math.round(a.dy * d),
      g = Math.ceil(a.Lb * d);
    a = Math.ceil(a.Kb * d);
    var h = GR(this, g, a),
      k = h.getContext("2d");
    k.translate(-e, -f);
    b.forEach(function (a) {
      k.globalAlpha = _.Ac(a.opacity, 1);
      k.drawImage(
        a.image,
        a.md,
        a.nd,
        a.Rd,
        a.Qd,
        Math.round(a.dx * d),
        Math.round(a.dy * d),
        a.Lb * d,
        a.Kb * d,
      );
    });
    c.clearRect(e, f, g, a);
    c.globalAlpha = 1;
    c.drawImage(h, e, f);
  };
  JR.prototype.load = function (a, b) {
    return this.j.load(new _.OA(a.url), function (c) {
      if (c) {
        var d = c.size,
          e = a.size || a.scaledSize || d;
        a.size = e;
        var f = a.anchor || new _.N(e.width / 2, e.height),
          g = {};
        g.image = c;
        c = a.scaledSize || d;
        var h = c.width / d.width,
          k = c.height / d.height;
        g.md = a.origin ? a.origin.x / h : 0;
        g.nd = a.origin ? a.origin.y / k : 0;
        g.dx = -f.x;
        g.dy = -f.y;
        g.md * h + e.width > c.width
          ? ((g.Rd = d.width - g.md * h), (g.Lb = c.width))
          : ((g.Rd = e.width / h), (g.Lb = e.width));
        g.nd * k + e.height > c.height
          ? ((g.Qd = d.height - g.nd * k), (g.Kb = c.height))
          : ((g.Qd = e.height / k), (g.Kb = e.height));
        b(g);
      } else b(null);
    });
  };
  JR.prototype.cancel = function (a) {
    this.j.cancel(a);
  };
  PR.prototype.l = function (a) {
    return "dragstart" != a && "drag" != a && "dragend" != a;
  };
  PR.prototype.m = function (a, b) {
    return b
      ? RR(this, a, -8, 0) ||
          RR(this, a, 0, -8) ||
          RR(this, a, 8, 0) ||
          RR(this, a, 0, 8)
      : RR(this, a, 0, 0);
  };
  PR.prototype.handleEvent = function (a, b, c) {
    var d = b.j;
    if ("mouseout" == a) this.j.set("cursor", ""), this.j.set("title", null);
    else if ("mouseover" == a) {
      var e = d.Hd;
      this.j.set("cursor", e.cursor);
      (e = e.title) && this.j.set("title", e);
    }
    d = d && "mouseout" != a ? d.Hd.latLng : b.latLng;
    "dblclick" == a && _.td(b.xa);
    _.R.trigger(c, a, new _.yk(d));
  };
  PR.prototype.zIndex = 40;
  TR.prototype.A = function () {
    this.j && IR(this.m);
    this.j = !1;
    this.l = null;
    this.B = 0;
    _.Fb(_.Vj(_.R.trigger, this.C, "load"));
  };
  _.dj(WR, _.hh);
  WR.prototype.Na = function () {
    return { ga: this.j, cb: !0, fb: 2, Va: this.C.bind(this) };
  };
  WR.prototype.C = function (a, b) {
    var c = this;
    b = void 0 === b ? {} : b;
    var d = !1,
      e = window.document.createElement("div"),
      f = this.j.size;
    e.style.width = f.J + "px";
    e.style.height = f.K + "px";
    e.style.overflow = "hidden";
    _.R.addListenerOnce(e, "load", function () {
      d = !0;
      b.za && b.za();
    });
    f = { ba: e, zoom: a.$, fa: new _.N(a.O, a.P), Fb: {}, ta: new _.Rd() };
    e.Ba = f;
    XR(this, f);
    return {
      fa: a,
      Da: function () {
        return e;
      },
      Bb: function () {
        return d;
      },
      release: function () {
        var a = e.Ba;
        e.Ba = null;
        YR(c, a);
        _.Ik(e, "");
        b.Oa && b.Oa();
      },
      freeze: _.l(),
    };
  };
  ZR.j = {};
  cS.prototype.j = function (a, b) {
    var c = _.CC();
    if (b instanceof _.$d) CR(a, b, c);
    else {
      var d = new _.Rd();
      CR(d, b, c);
      var e = new _.Rd();
      bS(e, b, c);
      new MR(a, e, d);
    }
    _.R.addListener(b, "idle", function () {
      a.forEach(function (a) {
        var c = a.get("internalPosition"),
          d = b.getBounds();
        c && !a.pegmanMarker && d && d.contains(c)
          ? _.Om("Om", "-v", a)
          : _.Pm("Om", "-v", a);
      });
    });
  };
  _.He("marker", new cS());
});
