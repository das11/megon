
"use strict";
! function(t, e) {
    function r(r) {
        if ("undefined" == typeof r) throw new Error('Pathformer [constructor]: "element" parameter is required');
        if (r.constructor === String && (r = e.getElementById(r), !r)) throw new Error('Pathformer [constructor]: "element" parameter is not related to an existing ID');
        if (!(r.constructor instanceof t.SVGElement || /^svg$/i.test(r.nodeName))) throw new Error('Pathformer [constructor]: "element" parameter must be a string or a SVGelement');
        this.el = r, this.scan(r)
    }

    function n(t, e, r) {
        this.isReady = !1, this.setElement(t, e), this.setOptions(e), this.setCallback(r), this.isReady && this.init()
    }
    r.prototype.TYPES = ["line", "elipse", "circle", "polygon", "polyline", "rect"], r.prototype.ATTR_WATCH = ["cx", "cy", "points", "r", "rx", "ry", "x", "x1", "x2", "y", "y1", "y2"], r.prototype.scan = function(t) {
        for (var e, r, n, i, a = t.querySelectorAll(this.TYPES.join(",")), o = 0; o < a.length; o++) r = a[o], e = this[r.tagName.toLowerCase() + "ToPath"], n = e(this.parseAttr(r.attributes)), i = this.pathMaker(r, n), r.parentNode.replaceChild(i, r)
    }, r.prototype.lineToPath = function(t) {
        var e = {};
        return e.d = "M" + t.x1 + "," + t.y1 + "L" + t.x2 + "," + t.y2, e
    }, r.prototype.rectToPath = function(t) {
        var e = {},
            r = parseFloat(t.x) || 0,
            n = parseFloat(t.y) || 0,
            i = parseFloat(t.width) || 0,
            a = parseFloat(t.height) || 0;
        return e.d = "M" + r + " " + n + " ", e.d += "L" + (r + i) + " " + n + " ", e.d += "L" + (r + i) + " " + (n + a) + " ", e.d += "L" + r + " " + (n + a) + " Z", e
    }, r.prototype.polylineToPath = function(t) {
        var e, r, n = {},
            i = t.points.split(" ");
        if (-1 === t.points.indexOf(",")) {
            var a = [];
            for (e = 0; e < i.length; e += 2) a.push(i[e] + "," + i[e + 1]);
            i = a
        }
        for (r = "M" + i[0], e = 1; e < i.length; e++) - 1 !== i[e].indexOf(",") && (r += "L" + i[e]);
        return n.d = r, n
    }, r.prototype.polygonToPath = function(t) {
        var e = r.prototype.polylineToPath(t);
        return e.d += "Z", e
    }, r.prototype.elipseToPath = function(t) {
        var e = t.cx - t.rx,
            r = t.cy,
            n = parseFloat(t.cx) + parseFloat(t.rx),
            i = t.cy,
            a = {};
        return a.d = "M" + e + "," + r + "A" + t.rx + "," + t.ry + " 0,1,1 " + n + "," + i + "A" + t.rx + "," + t.ry + " 0,1,1 " + e + "," + i, a
    }, r.prototype.circleToPath = function(t) {
        var e = {},
            r = t.cx - t.r,
            n = t.cy,
            i = parseFloat(t.cx) + parseFloat(t.r),
            a = t.cy;
        return e.d = "M" + r + "," + n + "A" + t.r + "," + t.r + " 0,1,1 " + i + "," + a + "A" + t.r + "," + t.r + " 0,1,1 " + r + "," + a, e
    }, r.prototype.pathMaker = function(t, r) {
        var n, i, a = e.createElementNS("http://www.w3.org/2000/svg", "path");
        for (n = 0; n < t.attributes.length; n++) i = t.attributes[n], -1 === this.ATTR_WATCH.indexOf(i.name) && a.setAttribute(i.name, i.value);
        for (n in r) a.setAttribute(n, r[n]);
        return a
    }, r.prototype.parseAttr = function(t) {
        for (var e, r = {}, n = 0; n < t.length; n++) {
            if (e = t[n], -1 !== this.ATTR_WATCH.indexOf(e.name) && -1 !== e.value.indexOf("%")) throw new Error("Pathformer [parseAttr]: a SVG shape got values in percentage. This cannot be transformed into 'path' tags. Please use 'viewBox'.");
            r[e.name] = e.value
        }
        return r
    };
    var i, a, o;
    n.LINEAR = function(t) {
        return t
    }, n.EASE = function(t) {
        return -Math.cos(t * Math.PI) / 2 + .5
    }, n.EASE_OUT = function(t) {
        return 1 - Math.pow(1 - t, 3)
    }, n.EASE_IN = function(t) {
        return Math.pow(t, 3)
    }, n.EASE_OUT_BOUNCE = function(t) {
        var e = -Math.cos(.5 * t * Math.PI) + 1,
            r = Math.pow(e, 1.5),
            n = Math.pow(1 - t, 2),
            i = -Math.abs(Math.cos(2.5 * r * Math.PI)) + 1;
        return 1 - n + i * n
    }, n.prototype.setElement = function(r, n) {
        if ("undefined" == typeof r) throw new Error('Dganimic [constructor]: "element" parameter is required');
        if (r.constructor === String && (r = e.getElementById(r), !r)) throw new Error('Dganimic [constructor]: "element" parameter is not related to an existing ID');
        if (n && n.file) {
            var i = e.createElement("object");
            i.setAttribute("type", "image/svg+xml"), i.setAttribute("data", n.file), r.appendChild(i), r = i
        }
        switch (r.constructor) {
            case t.SVGSVGElement:
            case t.SVGElement:
                this.el = r, this.isReady = !0;
                break;
            case t.HTMLObjectElement:
                if (this.el = r.contentDocument && r.contentDocument.querySelector("svg"), this.el) return this.isReady = !0, void 0;
                var a = this;
                r.addEventListener("load", function() {
                    if (a.el = r.contentDocument && r.contentDocument.querySelector("svg"), !a.el) throw new Error("Dganimic [constructor]: object loaded does not contain any SVG");
                    a.isReady = !0, a.init()
                });
                break;
            default:
                throw new Error('Dganimic [constructor]: "element" parameter is not valid (or miss the "file" attribute)')
        }
    }, n.prototype.setOptions = function(e) {
        var r = ["delayed", "async", "oneByOne", "scenario", "scenario-sync"],
            i = ["inViewport", "manual", "autostart"];
        if (void 0 !== e && e.constructor !== Object) throw new Error('Dganimic [constructor]: "options" parameter must be an object');
        if (e = e || {}, e.type && -1 === r.indexOf(e.type)) throw new Error("Dganimic [constructor]: " + e.type + " is not an existing animation `type`");
        if (this.type = e.type || r[0], e.start && -1 === i.indexOf(e.start)) throw new Error("Dganimic [constructor]: " + e.start + " is not an existing `start` option");
        if (this.start = e.start || i[0], this.isIE = -1 !== t.navigator.userAgent.indexOf("MSIE"), this.duration = o(e.duration, 120), this.delay = o(e.delay, null), this.dashGap = o(e.dashGap, 2), this.forceRender = e.hasOwnProperty("forceRender") ? !!e.forceRender : this.isIE, this.selfDestroy = !!e.selfDestroy, this.onReady = e.onReady, this.animTimingFunction = e.animTimingFunction || n.LINEAR, this.pathTimingFunction = e.pathTimingFunction || n.LINEAR, this.delay >= this.duration) throw new Error("Dganimic [constructor]: delay must be shorter than duration")
    }, n.prototype.setCallback = function(t) {
        if (t && t.constructor !== Function) throw new Error('Dganimic [constructor]: "callback" parameter must be a function');
        this.callback = t || function() {}
    }, n.prototype.mapping = function() {
        var e, r, n, i, a, s, h, c;
        for (c = s = h = 0, r = this.el.querySelectorAll("path"), e = 0; e < r.length; e++) n = r[e], a = {
            el: n,
            length: Math.ceil(n.getTotalLength())
        }, isNaN(a.length) ? t.console && console.warn && console.warn("Dganimic [mapping]: cannot retrieve a path element length", n) : (s += a.length, this.map.push(a), n.style.strokeDasharray = a.length + " " + (a.length + this.dashGap), n.style.strokeDashoffset = a.length, this.isIE && (a.length += this.dashGap), this.renderPath(e));
        for (s = 0 === s ? 1 : s, this.delay = null === this.delay ? this.duration / 3 : this.delay, this.delayUnit = this.delay / (r.length > 1 ? r.length - 1 : 1), e = 0; e < this.map.length; e++) {
            switch (a = this.map[e], this.type) {
                case "delayed":
                    a.startAt = this.delayUnit * e, a.duration = this.duration - this.delay;
                    break;
                case "oneByOne":
                    a.startAt = h / s * this.duration, a.duration = a.length / s * this.duration;
                    break;
                case "async":
                    a.startAt = 0, a.duration = this.duration;
                    break;
                case "scenario-sync":
                    n = r[e], i = this.parseAttr(n), a.startAt = c + (o(i["data-delay"], this.delayUnit) || 0), a.duration = o(i["data-duration"], this.duration), c = void 0 !== i["data-async"] ? a.startAt : a.startAt + a.duration, this.frameLength = Math.max(this.frameLength, a.startAt + a.duration);
                    break;
                case "scenario":
                    n = r[e], i = this.parseAttr(n), a.startAt = o(i["data-start"], this.delayUnit) || 0, a.duration = o(i["data-duration"], this.duration), this.frameLength = Math.max(this.frameLength, a.startAt + a.duration)
            }
            h += a.length, this.frameLength = this.frameLength || this.duration
        }
    }, n.prototype.drawer = function() {
        var t = this;
        this.currentFrame += this.speed, this.currentFrame <= 0 ? (this.stop(), this.reset(), this.callback(this)) : this.currentFrame >= this.frameLength ? (this.stop(), this.currentFrame = this.frameLength, this.trace(), this.selfDestroy && this.destroy(), this.callback(this)) : (this.trace(), this.handle = i(function() {
            t.drawer()
        }))
    }, n.prototype.trace = function() {
        var t, e, r, n;
        for (n = this.animTimingFunction(this.currentFrame / this.frameLength) * this.frameLength, t = 0; t < this.map.length; t++) r = this.map[t], e = (n - r.startAt) / r.duration, e = this.pathTimingFunction(Math.max(0, Math.min(1, e))), r.progress !== e && (r.progress = e, r.el.style.strokeDashoffset = Math.floor(r.length * (1 - e)), this.renderPath(t))
    }, n.prototype.renderPath = function(t) {
        if (this.forceRender && this.map && this.map[t]) {
            var e = this.map[t],
                r = e.el.cloneNode(!0);
            e.el.parentNode.replaceChild(r, e.el), e.el = r
        }
    }, n.prototype.init = function() {
        this.frameLength = 0, this.currentFrame = 0, this.map = [], new r(this.el), this.mapping(), this.starter(), this.onReady && this.onReady(this)
    }, n.prototype.starter = function() {
        switch (this.start) {
            case "manual":
                return;
            case "autostart":
                this.play();
                break;
            case "inViewport":
                var e = this,
                    r = function() {
                        e.isInViewport(e.el, 1) && (e.play(), t.removeEventListener("scroll", r))
                    };
                t.addEventListener("scroll", r), r()
        }
    }, n.prototype.getStatus = function() {
        return 0 === this.currentFrame ? "start" : this.currentFrame === this.frameLength ? "end" : "progress"
    }, n.prototype.reset = function() {
        return this.setFrameProgress(0)
    }, n.prototype.finish = function() {
        return this.setFrameProgress(1)
    }, n.prototype.setFrameProgress = function(t) {
        return t = Math.min(1, Math.max(0, t)), this.currentFrame = Math.round(this.frameLength * t), this.trace(), this
    }, n.prototype.play = function(t) {
        if (t && "number" != typeof t) throw new Error("Dganimic [play]: invalid speed");
        return this.speed = t || 1, this.handle || this.drawer(), this
    }, n.prototype.stop = function() {
        return this.handle && (a(this.handle), delete this.handle), this
    }, n.prototype.destroy = function() {
        var t, e;
        for (t = 0; t < this.map.length; t++) e = this.map[t], e.el.style.strokeDashoffset = null, e.el.style.strokeDasharray = null, this.renderPath(t)
    }, n.prototype.parseAttr = function(t) {
        var e, r = {};
        if (t && t.attributes)
            for (var n = 0; n < t.attributes.length; n++) e = t.attributes[n], r[e.name] = e.value;
        return r
    }, n.prototype.isInViewport = function(t, e) {
        var r = this.scrollY(),
            n = r + this.getViewportH(),
            i = t.getBoundingClientRect(),
            a = i.height,
            o = r + i.top,
            s = o + a;
        return e = e || 0, n >= o + a * e && s >= r
    }, n.prototype.docElem = t.document.documentElement, n.prototype.getViewportH = function() {
        var e = this.docElem.clientHeight,
            r = t.innerHeight;
        return r > e ? r : e
    }, n.prototype.scrollY = function() {
        return t.pageYOffset || this.docElem.scrollTop
    }, i = function() {
        return t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || t.msRequestAnimationFrame || function(e) {
            return t.setTimeout(e, 1e3 / 60)
        }
    }(), a = function() {
        return t.cancelAnimationFrame || t.webkitCancelAnimationFrame || t.mozCancelAnimationFrame || t.oCancelAnimationFrame || t.msCancelAnimationFrame || function(e) {
            return t.clearTimeout(e)
        }
    }(), o = function(t, e) {
        var r = parseInt(t, 10);
        return r >= 0 ? r : e
    }, "function" == typeof define && define.amd ? define([], function() {
        return n
    }) : "object" == typeof exports ? module.exports = n : t.Dganimic = n
}(window, document);