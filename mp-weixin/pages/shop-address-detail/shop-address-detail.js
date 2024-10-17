(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/shop-address-detail/shop-address-detail"], {
  "0d0d": function (t, e, a) {
      "use strict";
      var n = a("a410"), r = a.n(n);
      r.a;
  },
  "4055": function (t, e, a) {
      "use strict";
      (function (t) {
          Object.defineProperty(e, "__esModule", { value: !0 });
          e.default = void 0;
          var n = r(a("a34a"));

          function r(t) {
              return t && t.__esModule ? t : { default: t };
          }

          function s(t, e, a, n, r, s, i) {
              try {
                  var u = t[s](i), d = u.value;
              } catch (c) {
                  return void a(c);
              }
              u.done ? e(d) : Promise.resolve(d).then(n, r);
          }

          function i(t) {
              return function () {
                  var e = this, a = arguments;
                  return new Promise((function (n, r) {
                      var i = t.apply(e, a);
                      function u(t) { s(i, n, r, u, d, "next", t); }
                      function d(t) { s(i, n, r, u, d, "throw", t); }
                      u(void 0);
                  }));
              };
          }

          var u = {
              data: function () {
                  return {
                      addressData: {
                          name: "",
                          phone: "",
                          addressName: "在地图选择",
                          address: "",
                          default: !1
                      },
                      id: ""
                  };
              },
              onLoad: function () {
                  var e = i(n.default.mark((function e(a) {
                      var r, s;
                      return n.default.wrap((function (e) {
                          while (1) switch (e.prev = e.next) {
                              case 0:
                                  r = "新增收货地址", !a.id ? e.next = 10 : (r = "编辑收货地址", this.id = a.id, e.next = 6, this.$api.info("address", this.id));
                              case 6:
                                  s = e.sent, this.addressData = s.data, this.addressData.addressName = s.data.address, "是" == this.addressData.isdefault && (this.addressData.default = !0);
                              case 10:
                                  t.setNavigationBarTitle({ title: r });
                              case 11: case "end":
                                  return e.stop();
                          }
                      }), e, this);
                  })));

                  function a(t) { return e.apply(this, arguments); }
                  return a;
              },
              methods: {
                  switchChange: function(t) {
                      this.addressData.default = t.detail;
                  },
                  userLocation: function() {
                      var e = this;
                      return new Promise((resolve, reject) => {
                          wx.getLocation({
                              type: 'wgs84',
                              success: function(res) {
                                  e.addressData.addressName = res.name; // 根据需要进行赋值
                                  e.addressData.address = res.address; // 根据需要进行赋值
                                  resolve(res);
                              },
                              fail: function(error) {
                                  reject(error);
                              }
                          });
                      });
                  },
                  chooseLocation: function() {
                      var e = this;
                      this.userLocation().then(() => {
                          wx.chooseLocation({
                              success: function(res) {
                                  e.addressData.addressName = res.name;
                                  e.addressData.address = res.address;
                              }
                          });
                      }).catch(error => {
                          this.$utils.msg("获取位置失败: " + error.message);
                      });
                  },
                  confirm: function () {
                      console.log("确认按钮被点击");
                      console.log(this.addressData); // 检查数据
                      var t = i(n.default.mark((function t() {
                          var e;
                          return n.default.wrap((function (t) {
                              while (1) switch (t.prev = t.next) {
                                  case 0:
                                      if (e = this.addressData, e.name) { t.next = 4; break; }
                                      return this.$utils.msg("请填写收货人姓名"), t.abrupt("return");
                                  case 4:
                                      if (this.$validate.isMobile(e.phone)) { t.next = 7; break; }
                                      return this.$utils.msg("请输入正确的手机号码"), t.abrupt("return");
                                  case 7:
                                      if (e.address) { t.next = 10; break; }
                                      return this.$utils.msg("请在地图选择所在位置"), t.abrupt("return");
                                  case 10:
                                      e.default ? e.isdefault = "是" : e.isdefault = "否";
                                      if (!this.id) { t.next = 16; break; }
                                      return t.next = 14, this.$api.update("address", e);
                                  case 14:
                                      t.next = 18;
                                      break;
                                  case 16:
                                      return t.next = 18, this.$api.add("address", e);
                                  case 18:
                                      this.$utils.msgBack("操作成功");
                                  case 19: case "end":
                                      return t.stop();
                              }
                          }), t, this);
                      })));

                      function e() { return t.apply(this, arguments); }
                      return e;
                  }
              }
          };
          e.default = u;
      }).call(this, a("543d")["default"]);
  },
  "6f5c": function (t, e, a) {
      "use strict";
      a.r(e);
      var n = a("4055"), r = a.n(n);
      for (var s in n) {
          if ("default" !== s) {
              (function (t) {
                  a.d(e, t, (function () { return n[t]; }));
              })(s);
          }
      }
      e["default"] = r.a;
  },
  "88fb": function (t, e, a) {
      "use strict";
      (function (t) {
          a("166b"), a("921b");
          n(a("66fd"));
          var e = n(a("9774"));
          function n(t) {
              return t && t.__esModule ? t : { default: t };
          }
          t(e.default);
      }).call(this, a("543d")["createPage"]);
  },
  "9431": function (t, e, a) {
      "use strict";
      var n, r = function () {
          var t = this, e = t.$createElement;
          t._self._c;
      }, s = [];
      a.d(e, "b", (function () { return r; }));
      a.d(e, "c", (function () { return s; }));
      a.d(e, "a", (function () { return n; }));
  },
  "9774": function (t, e, a) {
      "use strict";
      a.r(e);
      var n = a("9431"), r = a("6f5c");
      for (var s in r) {
          if ("default" !== s) {
              (function (t) {
                  a.d(e, t, (function () { return r[t]; }));
              })(s);
          }
      }
      a("0d0d");
      var i, u = a("f0c5"), d = Object(u["a"])(r["default"], n["b"], n["c"], !1, null, null, null, !1, n["a"], i);
      e["default"] = d.exports;
  },
  "a410": function (t, e, a) {}
}, [["88fb", "common/runtime", "common/vendor"]]]);
