google.maps.__gjsload__("stats", function (_) {
  var xX = function (a) {
      this.data = a || [];
    },
    yX = function (a) {
      this.data = a || [];
    },
    zX = function () {
      this.j = new _.Bl();
    },
    AX = function (a) {
      var b = 0,
        c = 0;
      a.j.forEach(function (a) {
        b += a.Bn;
        c += a.an;
      });
      return c ? b / c : 0;
    },
    BX = function (a, b, c) {
      var d = [];
      _.bk(a, function (a, c) {
        d.push(c + b + a);
      });
      return d.join(c);
    },
    CX = function (a) {
      var b = {};
      _.bk(a, function (a, d) {
        b[(0, window.encodeURIComponent)(d)] = (0, window.encodeURIComponent)(
          a,
        ).replace(/%7C/g, "|");
      });
      return BX(b, ":", ",");
    },
    DX = function () {
      var a;
      _.mg[35] ? (a = _.H(_.tc(_.V), 11)) : (a = _.Nq);
      var b = window.document;
      this.A = _.th;
      this.l = a + "/maps/gen_204";
      this.m = b;
    },
    EX = function (a, b, c, d) {
      var e = {};
      e.host =
        (window.document.location && window.document.location.host) ||
        window.location.host;
      e.v = a;
      e.r = Math.round(1 / b);
      c && (e.client = c);
      d && (e.key = d);
      return e;
    },
    FX = function (a, b, c, d) {
      var e = _.G(_.V, 0, 1);
      this.B = a;
      this.D = b;
      this.A = e;
      this.l = c;
      this.m = d;
      this.j = new _.Bl();
      this.C = _.Wa();
    },
    HX = function (a, b, c, d, e) {
      var f = _.G(_.V, 23, 500);
      var g = _.G(_.V, 22, 2);
      this.G = a;
      this.I = b;
      this.L = f;
      this.A = g;
      this.D = c;
      this.B = d;
      this.C = e;
      this.l = new _.Bl();
      this.j = 0;
      this.m = _.Wa();
      GX(this);
    },
    GX = function (a) {
      window.setTimeout(
        function () {
          IX(a);
          GX(a);
        },
        Math.min(a.L * Math.pow(a.A, a.j), 2147483647),
      );
    },
    IX = function (a) {
      var b = EX(a.I, a.D, a.B, a.C);
      b.t = a.j + "-" + (_.Wa() - a.m);
      a.l.forEach(function (a, d) {
        a = a();
        0 < a && (b[d] = Number(a.toFixed(2)) + (_.Rk() ? "-if" : ""));
      });
      a.G.j({ ev: "api_snap" }, b);
      ++a.j;
    },
    JX = function (a, b, c, d, e) {
      this.C = a;
      this.D = b;
      this.B = c;
      this.m = d;
      this.A = e;
      this.l = {};
      this.j = [];
    },
    KX = function (a, b, c) {
      var d = _.wh;
      this.m = a;
      _.R.bind(this.m, "set_at", this, this.A);
      _.R.bind(this.m, "insert_at", this, this.A);
      this.C = b;
      this.D = d;
      this.B = c;
      this.l = 0;
      this.j = {};
      this.A();
    },
    LX = function () {
      this.l = _.H(_.V, 6);
      this.m = _.H(_.V, 16);
      this.j = new DX();
      _.vh && new KX(_.vh, (0, _.z)(this.j.j, this.j), !!this.l);
      var a = _.H(new _.oc(_.V.data[3]), 1);
      this.I = a.split(".")[1] || a;
      this.L = {};
      this.D = {};
      this.C = {};
      this.ia = {};
      this.G = _.G(_.V, 0, 1);
      _.sh && (this.B = new HX(this.j, this.I, this.G, this.l, this.m));
      this.A = new yX();
      this.A.data[1] = _.H(new _.oc(_.V.data[3]), 1);
      this.l && (this.A.data[2] = this.l);
      this.m && (this.A.data[3] = this.m);
    },
    MX;
  _.A(xX, _.F);
  _.A(yX, _.F);
  zX.prototype.l = function (a, b, c) {
    this.j.set(_.Cd(a), { Bn: b, an: c });
  };
  DX.prototype.j = function (a, b) {
    b = b || {};
    var c = _.tk().toString(36);
    b.src = "apiv3";
    b.token = this.A;
    b.ts = c.substr(c.length - 6);
    a.cad = CX(b);
    a = BX(a, "=", "&");
    a = this.l + "?target=api&" + a;
    this.m.createElement("img").src = a;
    (b = _.x.__gm_captureCSI) && b(a);
  };
  FX.prototype.G = function (a, b) {
    b = _.r(b) ? b : 1;
    this.j.isEmpty() &&
      window.setTimeout(
        (0, _.z)(function () {
          var a = EX(this.D, this.A, this.l, this.m);
          a.t = _.Wa() - this.C;
          var b = this.j;
          _.Cl(b);
          for (var e = {}, f = 0; f < b.j.length; f++) {
            var g = b.j[f];
            e[g] = b.l[g];
          }
          _.qu(a, e);
          this.j.clear();
          this.B.j({ ev: "api_maprft" }, a);
        }, this),
        500,
      );
    b = this.j.get(a, 0) + b;
    this.j.set(a, b);
  };
  HX.prototype.register = function (a, b) {
    this.l.set(a, b);
  };
  JX.prototype.G = function (a) {
    this.l[a] ||
      ((this.l[a] = !0),
      this.j.push(a),
      2 > this.j.length && _.mv(this, this.I, 500));
  };
  JX.prototype.I = function () {
    for (
      var a = EX(this.D, this.B, this.m, this.A), b = 0, c;
      (c = this.j[b]);
      ++b
    )
      a[c] = "1";
    a.hybrid = +_.Ek();
    this.j.length = 0;
    this.C.j({ ev: "api_mapft" }, a);
  };
  KX.prototype.A = function () {
    for (var a; (a = this.m.removeAt(0)); ) {
      var b = a.Fm;
      a = a.timestamp - this.D;
      ++this.l;
      this.j[b] || (this.j[b] = 0);
      ++this.j[b];
      if (20 <= this.l && !(this.l % 5)) {
        var c = {};
        c.s = b;
        c.sr = this.j[b];
        c.tr = this.l;
        c.te = a;
        c.hc = this.B ? "1" : "0";
        this.C({ ev: "api_services" }, c);
      }
    }
  };
  _.n = LX.prototype;
  _.n.Ik = function (a) {
    a = _.Cd(a);
    this.L[a] || (this.L[a] = new JX(this.j, this.I, this.G, this.l, this.m));
    return this.L[a];
  };
  _.n.Gk = function (a) {
    a = _.Cd(a);
    this.D[a] || (this.D[a] = new FX(this.j, this.I, this.l, this.m));
    return this.D[a];
  };
  _.n.ie = function (a) {
    if (this.B) {
      this.C[a] ||
        ((this.C[a] = new _.Yv()),
        this.B.register(a, function () {
          return b.lb();
        }));
      var b = this.C[a];
      return b;
    }
  };
  _.n.Fk = function (a) {
    if (this.B) {
      this.ia[a] ||
        ((this.ia[a] = new zX()),
        this.B.register(a, function () {
          return AX(b);
        }));
      var b = this.ia[a];
      return b;
    }
  };
  _.n.xl = function (a) {
    if (_.sh) {
      var b = this.A;
      b = new b.constructor(_.lj(b));
      var c = Math.floor(_.Wa() / 1e3);
      b.data[0] = c;
      c = new xX(_.I(b, 5));
      c.data[0] = Math.round(1 / this.G);
      c.data[1] = a;
      a = this.j;
      c = { ev: "api_map_style" };
      var d = new _.ym();
      MX || (MX = { F: "issssm", H: ["is"] });
      b = d.j(b.data, MX);
      c.pb = (0, window.encodeURIComponent)(b).replace(/%20/g, "+");
      b = BX(c, "=", "&");
      a.m.createElement("img").src = a.l + "?target=api&" + b;
    }
  };
  var NX = new LX();
  _.He("stats", NX);
});
