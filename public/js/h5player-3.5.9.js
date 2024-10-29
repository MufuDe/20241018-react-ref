!(function a(n, o, l) {
  function c(t, e) {
    if (!o[t]) {
      if (!n[t]) {
        var i = "function" == typeof require && require;
        if (!e && i) return i(t, !0);
        if (d) return d(t, !0);
        var s = new Error("Cannot find module '" + t + "'");
        throw ((s.code = "MODULE_NOT_FOUND"), s);
      }
      var r = (o[t] = { exports: {} });
      n[t][0].call(
        r.exports,
        function (e) {
          return c(n[t][1][e] || e);
        },
        r,
        r.exports,
        a,
        n,
        o,
        l
      );
    }
    return o[t].exports;
  }
  for (
    var d = "function" == typeof require && require, e = 0;
    e < l.length;
    e++
  )
    c(l[e]);
  return c;
})(
  {
    1: [
      function (t, i, s) {
        "use strict";
        var a,
          n = r(t("babel-runtime/core-js/object/get-prototype-of")),
          o = r(t("babel-runtime/helpers/classCallCheck")),
          l = r(t("babel-runtime/helpers/createClass")),
          c = r(t("babel-runtime/helpers/possibleConstructorReturn")),
          d = r(t("babel-runtime/helpers/get")),
          p = r(t("babel-runtime/helpers/inherits")),
          G = r(t("babel-runtime/core-js/json/stringify")),
          K = r(t("babel-runtime/core-js/object/keys")),
          Y = r(t("babel-runtime/helpers/typeof")),
          h = r(t("babel-runtime/core-js/object/assign")),
          X = r(t("babel-runtime/core-js/get-iterator"));
        function r(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function Z() {
          (this.toBase64URL = [
            "A",
            "B",
            "C",
            "D",
            "E",
            "F",
            "G",
            "H",
            "I",
            "J",
            "K",
            "L",
            "M",
            "N",
            "O",
            "P",
            "Q",
            "R",
            "S",
            "T",
            "U",
            "V",
            "W",
            "X",
            "Y",
            "Z",
            "a",
            "b",
            "c",
            "d",
            "e",
            "f",
            "g",
            "h",
            "i",
            "j",
            "k",
            "l",
            "m",
            "n",
            "o",
            "p",
            "q",
            "r",
            "s",
            "t",
            "u",
            "v",
            "w",
            "x",
            "y",
            "z",
            "0",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "-",
            "_",
          ]),
            (this.encodeInt8Array = function (e) {
              var t = this.outLength(e.length),
                i = new Int8Array(t),
                s = this.encode0(e, 0, e.length, i);
              return s != i.length ? i.subarray(0, s) : i;
            }),
            (this.encode0 = function (e, t, i, s) {
              for (
                var a = this.toBase64URL,
                  r = t,
                  n = 3 * parseInt((i - t) / 3 + ""),
                  o = t + n,
                  l = 0;
                r < o;

              ) {
                for (var c = Math.min(r + n, o), d = r, h = l; d < c; ) {
                  var u =
                    ((255 & e[d++]) << 16) |
                    ((255 & e[d++]) << 8) |
                    (255 & e[d++]);
                  (s[h++] = a[(u >>> 18) & 63].charCodeAt(0)),
                    (s[h++] = a[(u >>> 12) & 63].charCodeAt(0)),
                    (s[h++] = a[(u >>> 6) & 63].charCodeAt(0)),
                    (s[h++] = a[63 & u].charCodeAt(0));
                }
                (l += 4 * parseInt((c - r) / 3 + "")), (r = c);
              }
              if (r < i) {
                var p = 255 & e[r++];
                if (((s[l++] = a[p >> 2].charCodeAt(0)), r == i))
                  (s[l++] = a[(p << 4) & 63].charCodeAt(0)),
                    (s[l++] = "=".charCodeAt(0)),
                    (s[l++] = "=".charCodeAt(0));
                else {
                  var y = 255 & e[r++];
                  (s[l++] = a[((p << 4) & 63) | (y >> 4)].charCodeAt(0)),
                    (s[l++] = a[(y << 2) & 63].charCodeAt(0)),
                    (s[l++] = "=".charCodeAt(0));
                }
              }
              return l;
            }),
            (this.outLength = function (e) {
              return 4 * parseInt((e + 2) / 3 + "");
            }),
            (this.binToStr = function (e) {
              for (var t = "", i = 0; i < e.length; i++)
                t += String.fromCharCode(e[i]);
              return t;
            });
        }
        (a = window),
          "function" != typeof CCH5PlayerInnerApi &&
            (a.CCH5PlayerInnerApi = function (s) {
              return {
                errorDict: s.errorDict,
                playerEvent: s.playerEvent,
                readyH5Play: function (e) {
                  s.readyH5Play(e);
                },
                getCurrentCopy: function () {
                  return s.currentCopy;
                },
                setNewCopy: function (e) {
                  return (
                    this.setOuterApiProps({ currentCopiesIdx: e.index }),
                    (s.currentCopy = e)
                  );
                },
                toggleCtrlBar: function () {
                  s.toggleCtrlBar();
                },
                videoPlay: function (t) {
                  try {
                    var i = s.oVideo.play();
                    i &&
                      i["catch"](function (e) {
                        !0 !== t && s.oVideo.pause();
                      });
                  } catch (e) {
                    s.oVideo.pause();
                  }
                },
                videoPause: function () {
                  return s.oVideo.pause();
                },
                toggleVideoPlay: function () {
                  s.togglePlay();
                },
                setVideoVolume: function (e) {
                  s.oVideo.volume = e;
                },
                getVideoVolume: function () {
                  return s.oVideo.volume;
                },
                setCurrentTime: function (e) {
                  try {
                    s.oVideo.currentTime = e;
                  } catch (t) {
                    console.log("innerApi: " + t);
                  }
                },
                getCurrentTime: function () {
                  return s.oVideo ? s.oVideo.currentTime : 0;
                },
                getTotalTime: function () {
                  return (
                    (this.duration = s.oVideo.duration || this.duration),
                    this.duration
                  );
                },
                getLastVideoTime: function () {
                  return s.lastVideoTime;
                },
                setLastVideoTime: function (e) {
                  return (s.lastVideoTime = e);
                },
                getVideoSrc: function () {
                  return s.currentCopy.playurl;
                },
                setVideoSrc: function (e) {
                  return s.setVideoSrc(e);
                },
                isVideoPlay: function () {
                  return 2 != s.currentCopy.mediatype;
                },
                setVideoRate: function (e) {
                  s.oVideo.playbackRate = e;
                },
                getVideoRate: function () {
                  return s.oVideo.playbackRate;
                },
                pageFullScreen: function (e) {
                  return s.pageFullScreen(e);
                },
                exitPageFullScreen: function (e) {
                  return s.exitPageFullScreen(e);
                },
                fullScreen: function (e) {
                  return s.fullScreen(e);
                },
                exitFullScreen: function (e) {
                  return s.exitFullScreen(e);
                },
                registerVideoEvent: function (e, t) {
                  return s.addVideoListenner(e, t);
                },
                removeVideoEvent: function (e, t) {
                  return s.removeVideoListenner(e, t);
                },
                onceVideoListener: function (e, t) {
                  s.onceVideoListener(e, t);
                },
                clearVideoAllListeners: function () {
                  return s.clearVideoAllListeners();
                },
                resolvePlayState: function (e) {
                  s.resolvePlayState(e);
                },
                showInfo: function (e) {
                  (s.oInfo.style.display = "block"), (s.oInfo.innerHTML = e);
                },
                hideInfo: function () {
                  (s.oInfo.style.display = "none"), (s.oInfo.innerHTML = "");
                },
                showPlayBtn: function () {
                  (s.playBtn.className = "ccH5PlayBtn"),
                    (s.playBtn.style.display = "block");
                },
                hidePlayBtn: function () {
                  s.playBtn.style.display = "none";
                },
                toggleVideoOrAudio: function () {
                  s.toggleVideoOrAudio();
                },
                isEnterFullscreenInWeChat: function () {
                  return s.isEnterFullscreen;
                },
                getVideostate: function () {
                  return s.oVideo.paused;
                },
                getVideoBuffered: function () {
                  return s.oVideo.buffered;
                },
                addPlayerEventListenner: function (e, t) {
                  s.addPlayerEventListenner(e, t);
                },
                removePlayerEventListenner: function (e, t) {
                  s.removePlayerEventListenner(e, t);
                },
                triggerPlayerEvent: function () {
                  s.triggerPlayerEvent.call(s, arguments);
                },
                showLoading: function () {
                  s.showLoading();
                },
                setOuterApiProps: function (e) {
                  for (var t in e) s.outerApi[t] = e[t];
                },
                getCurrPlayedMaxTime: function () {
                  return s.currPlayedMaxTime;
                },
                getPlayStartTime: function () {
                  return s.playStartTime;
                },
                getApiResponseData: function () {
                  return s.apiResponseData;
                },
                addGlobalEvent: function (e, t, i) {
                  s.addGlobalEventListener(e, t, i);
                },
                displayingFullscreen: function () {
                  return s.oVideo.webkitDisplayingFullscreen;
                },
                getPlayerVersion: function () {
                  return s.getVersion();
                },
                rerender: function () {
                  s.rerender();
                },
                triggerPlayerEnded: function () {
                  return s.triggerPlayerEnded();
                },
                setGlobalVideoElem: function (e) {
                  (s.videoElem = e), (s.oVideo = s.videoElem);
                },
                clearVttTrack: function () {
                  if (s.oVideo && s.oVideo.getElementsByTagName) {
                    var e = s.oVideo.getElementsByTagName("track");
                    if (e && e.length)
                      for (var t = e.length - 1; 0 <= t; t--)
                        (s.oVideo.textTracks[t].mode = "disabled"),
                          s.oVideo.removeChild(e[t]);
                  }
                },
                destroy: function (e) {
                  s.destroy(e);
                },
                showPlayerError: function () {
                  s.showPlayerError();
                },
                getIsVoteShow: function () {
                  return !(!s.ccPlayerVote || !s.ccPlayerVote.getIsVoteShow());
                },
                hideKnowledge: function () {
                  s.ccPlayerKnow &&
                    s.ccPlayerKnow.isShowing() &&
                    s.ccPlayerKnow.hideDrawer();
                },
                toggleKnowledge: function () {
                  s.ccPlayerKnow &&
                    (s.ccPlayerKnow.isShowing()
                      ? s.ccPlayerKnow.hideDrawer()
                      : s.ccPlayerKnow.showDrawer());
                },
                showKnowledgePart: function (e, t) {
                  s.ccPlayerCtrol && s.ccPlayerCtrol.showKnowledgePart(e, t);
                },
                hideKnowledgePart: function () {
                  s.ccPlayerCtrol && s.ccPlayerCtrol.hideKnowledgePart();
                },
                getVideoFileParams: function () {
                  return s.videoFileParams;
                },
                cch5DestroyCoreHls: function () {
                  s.cch5DestroyHls && s.cch5DestroyHls();
                },
                getLangData: function () {
                  return s.lang;
                },
                getIsWasmPlay: function () {
                  return s.isWasmPlay;
                },
                showNote: function () {
                  s.ccH5PlayerNote && s.ccH5PlayerNote.showNote();
                },
                isBackupPlay: function () {
                  return s.ccPlayerMore.isBackupPlay();
                },
                getPlayingUrl: function () {
                  return s.playingUrl;
                },
                getOrientation: function () {
                  return (
                    s.videoBox &&
                    s.videoBox.classList &&
                    s.videoBox.classList.contains(
                      "ccH5PlayerFullscreenLandscape"
                    )
                  );
                },
                isHlsPlaying: function () {
                  return s.isHlsPlay;
                },
                switchUrl: function () {
                  s.ccPlayerMore && s.ccPlayerMore.switchUrl();
                },
                getIsShowSwitchMode: function () {
                  return s.ccPlayerMore && s.ccPlayerMore.getIsShowSwitchMode();
                },
                getIsShowSwitchUrl: function () {
                  return s.ccPlayerMore && s.ccPlayerMore.getIsShowSwitchUrl();
                },
                getIsShowSwitchVtt: function () {
                  return s.ccPlayerMore && s.ccPlayerMore.getIsShowSwitchVtt();
                },
                selectVttItem: function (e) {
                  s.ccPlayerMore && s.ccPlayerMore.selectVttItem(e);
                },
                closeVtt: function () {
                  s.ccPlayerMore && s.ccPlayerMore.closeVtt();
                },
                processPlayerError: function (e) {
                  s.processPlayerError(e);
                },
                getIsChangeVideo: function (e) {
                  return s.isChangeVideo;
                },
                getIsSwitchVideo: function (e) {
                  return s.isSwitchVideoSmooth;
                },
              };
            }),
          (function (l) {
            if ("function" != typeof CCH5PlayerAdEnd) {
              var c = function c(e) {
                var t = e.playerApi,
                  i = e.params,
                  s = e.videoPlayData,
                  a = e.parentEle,
                  r = e.zIndex,
                  n = e.videoElem;
                (this.playerApi = t),
                  (this.params = i),
                  (this.videoPlayData = s),
                  (this.parentEle = a),
                  (this.zIndex = r),
                  (this.videoElem = n),
                  (this.adVideo = null),
                  (this.adPic = null),
                  (this.intervals = []),
                  (this.isIphonePlay = !1);
              };
              (c.prototype = {
                constructor: c,
                init: function () {
                  1 != this.params.isSkipAd && this.registerVideoListener();
                },
                registerVideoListener: function () {
                  var e = this;
                  this.playerApi.registerVideoEvent("ended", function () {
                    e.adMaterial ? e.initAd() : e.loadAdData();
                  });
                },
                initAd: function (e) {
                  e && this.initData(e),
                    this.isAdVideo
                      ? this.createAdVideoView()
                      : this.createPicAdView(),
                    (this.ccAdEndBox = $.queryEle(
                      ".ccAdEndBox",
                      this.parentEle
                    )),
                    (this.ccAdEndBox.style.zIndex = this.zIndex),
                    (this.adInnerBox = $.queryEle(
                      ".adEndInnerBox",
                      this.parentEle
                    )),
                    (this.adSec = $.queryEle(".adSec", this.parentEle)),
                    (this.skipAdBtn = $.queryEle(".closeAd", this.parentEle)),
                    (this.adCloseTime = $.queryEle(
                      ".closeTime",
                      this.parentEle
                    )),
                    (this.waitTime = $.queryEle(".skipNum", this.parentEle)),
                    (this.adSkipLink = $.queryEle(
                      ".adSkipLink",
                      this.parentEle
                    )),
                    (this.moreDetails = $.queryEle(
                      ".moreDetails",
                      this.parentEle
                    )),
                    this.isAdVideo
                      ? ((this.adPlayBtn = $.queryEle(
                          ".ccH5EndAdPlayBtn",
                          this.parentEle
                        )),
                        (this.adVideoVolume = $.queryEle(
                          ".adVideoVolume",
                          this.adInnerBox
                        )))
                      : (this.pSrc = $.queryEle(".pSrc", this.parentEle)),
                    this.initAdEvents();
                },
                createAdVideoView: function () {
                  var e = document.createElement("div");
                  this.parentEle.appendChild(e),
                    (e.outerHTML =
                      "<div class='ccAdEndBox'>  <div class='ccH5PlayBtn ccH5EndAdPlayBtn'></div>  <div class='x-advert adEndInnerBox' style='display:none;z-index:101;'>\t\t<a class='skipGg adSkipLink' href='' target='_blank'></a>  \t<div class='x-advert-info'>\t  \t\t<div class='x-advert-skip'>\t\t \t\t<div class='x-advert-txt closeAd'><span class='closeTime'><i class='skipNum'></i>s后可</span>关闭广告</div>\t\t \t\t<div class='x-mask'></div>\t  \t\t</div>\t  \t\t<div class='x-advert-countdown'>\t\t \t\t<div class='x-advert-txt'><span class='adSec'></span>s</div>\t\t \t\t<div class='x-mask'></div>\t  \t\t</div>  \t</div>  \t<div class='x-advert-detail'>\t  \t\t<div class='x-advert-txt'><a class='moreDetails' href=''  target='_blank'>了解详情</a></div>\t  \t\t<div class='x-mask'></div>  \t</div>     <div class='adVideoVolume active'></div>  </div>\t</div>"),
                    (e = $.queryEle(".x-advert", this.parentEle));
                  var t = null;
                  this.videoElem &&
                  "video" === this.videoElem.tagName.toLowerCase()
                    ? (this.playerApi.clearVttTrack(),
                      this.playerApi.clearVideoAllListeners(),
                      (t = this.videoElem),
                      e.parentNode.appendChild(t))
                    : ((t = document.createElement("video")),
                      e.parentNode.appendChild(t),
                      (t.outerHTML =
                        "<video id='cch5playerAdVideo' autoplay x-webkit-airplay='allow' x5-playsinline webkit-playsinline playsinline><source></source></video>"),
                      (t = $.queryEle("#cch5playerAdVideo", this.parentEle))),
                    "h5-page" === t.getAttribute("x5-video-player-type") &&
                      (t.removeAttribute("x5-video-player-type"),
                      t.setAttribute("x-webkit-airplay", "allow"),
                      t.setAttribute("x5-playsinline", "")),
                    (t.id = "cc_ad_" + this.params.vid),
                    (t.src = this.adMaterial),
                    (t.querySelector("source").src = this.adMaterial);
                  var i = $.getCross(this.params, this.videoPlayData);
                  i && 0 < i.length && (t.crossOrigin = i),
                    (this.adVideo = t),
                    this.playerApi.setGlobalVideoElem(this.adVideo);
                },
                createPicAdView: function () {
                  var t = this,
                    i = $.getRandomWinFuncName("cch5player");
                  l[i] = function (e) {
                    t.initPicAdStyle(), delete l[i];
                  };
                  var e =
                      "<div class='ccAdEndBox'>  <div class='picAd adEndInnerBox' id='picAd' style='display:none;'>     <a class='picBtn adSkipLink' id='picBtn' href='' target='_blank'></a>  \t<div class='x-advert-info'>\t  \t\t<div class='x-advert-skip'>\t\t \t\t<div class='x-advert-txt closeAd'><span class='closeTime'><i class='skipNum'></i>s后可</span>关闭广告</div>\t\t \t\t<div class='x-mask'></div>\t  \t\t</div>\t  \t\t<div class='x-advert-countdown'>\t\t \t\t<div class='x-advert-txt'><span class='adSec'></span>s</div>\t\t \t\t<div class='x-mask'></div>\t  \t\t</div>  \t</div>\t\t<div class='pictab'><img onload='" +
                      i +
                      "();' class='pSrc' src=''/></div>  \t<div class='x-advert-detail'>\t  \t\t<div class='x-advert-txt'><a class='moreDetails' href='' target='_blank'>了解详情</a></div>\t  \t\t<div class='x-mask'></div>  \t</div>\t  </div>\t</div>",
                    s = document.createElement("div");
                  this.parentEle.appendChild(s), (s.outerHTML = e);
                },
                initAdEvents: function () {
                  var t = this;
                  (this.adSec.innerHTML = this.adTime),
                    (this.adSkipLink.href = $.getAdSrc(
                      this.adId,
                      this.clickurl,
                      this.materialId
                    )),
                    (this.moreDetails.href = this.adSkipLink.href),
                    "" == this.clickurl &&
                      ((this.adSkipLink.style.display = "none"),
                      (this.moreDetails.parentNode.parentNode.style.display =
                        "none")),
                    0 != this.skipTime &&
                      ((this.waitTime.innerHTML = this.skipTime),
                      this.waitCloseBtn()),
                    1 == this.canskip
                      ? (this.skipAdBtn.style.display = "block")
                      : (this.skipAdBtn.parentNode.style.display = "none"),
                    1 == this.canClick && "" != this.clickurl
                      ? (this.adSkipLink.style.display = "block")
                      : (this.adSkipLink.style.display = "none");
                  if (
                    ($.addListener(this.skipAdBtn, "click", function () {
                      t.skipAd();
                    }),
                    !this.isAdVideo)
                  )
                    return (
                      (this.pSrc.src = this.adMaterial), void this.setAdTime()
                    );
                  $.addListener(this.adVideoVolume, "click", function (e) {
                    1 == e.target.classList.contains("active")
                      ? (e.target.classList.remove("active"),
                        (t.adVideo.volume = 0))
                      : (e.target.classList.add("active"),
                        (t.adVideo.volume = 0.5));
                  }),
                    $.addListener(this.adPlayBtn, "click", function () {
                      t.adVideo.play();
                    }),
                    this.playerApi.registerVideoEvent("play", function () {
                      (t.adPlayBtn.style.display = "none"),
                        t.adVideoStared ||
                          (t.setAdTime(), (t.adVideoStared = !0));
                    }),
                    this.playerApi.registerVideoEvent("canplay", function () {
                      t.adVideoStared || t.playerApi.videoPlay();
                    }),
                    this.playerApi.registerVideoEvent("progress", function () {
                      t.adVideo.paused &&
                        $.isIPhone() &&
                        !t.isIphonePlay &&
                        ((t.isIphonePlay = !0), t.playerApi.videoPlay());
                    });
                },
                loadAdData: function () {
                  var t = this,
                    i = this;
                  $.ccJsonp({
                    url: "https://imedia.bokecc.com/servlet/mobile/adloader",
                    data: {
                      vid: i.params.vid,
                      uid: i.params.siteid,
                      type: 3,
                      t: 0,
                    },
                    timeOut: 3e3,
                    success: function (e) {
                      1 == e.response.result
                        ? i.initAd(e)
                        : t.playerApi.triggerPlayerEnded();
                    },
                    error: function () {
                      t.playerApi.triggerPlayerEnded();
                    },
                  });
                },
                initData: function (e) {
                  var t = e.response.ad[0].material,
                    i = t.lastIndexOf(".");
                  ".mp4" == t.substring(i, t.length).toLowerCase()
                    ? (this.isAdVideo = !0)
                    : (this.isAdVideo = !1),
                    -1 != e.response.ad[0].material.indexOf("bokecc.com")
                      ? (this.adMaterial = e.response.ad[0].material.replace(
                          /http:/i,
                          "https:"
                        ))
                      : (this.adMaterial = e.response.ad[0].material),
                    (this.adUrl = e.response.ad[0].material),
                    (this.canClick = e.response.canclick),
                    (this.videoAd = e.response.result),
                    (this.adTime = e.response.time),
                    (this.skipTime = e.response.skiptime),
                    (this.canskip = e.response.canskip),
                    (this.adId = e.response.adid),
                    (this.materialId = e.response.ad[0].materialid),
                    (this.clickurl = e.response.ad[0].clickurl),
                    e.response.statisUrl && $.imgLoad(e.response.statisUrl);
                },
                setAdTime: function () {
                  var e = this,
                    t = this.adTime;
                  (this.adInnerBox.style.display = "block"),
                    (this.adCountDown = function () {
                      t--,
                        0 == (e.adSec.innerHTML = t) &&
                          (clearInterval(e.adTimer), e.skipAdBtn.click());
                    }),
                    (this.adTimer = setInterval(this.adCountDown, 1e3)),
                    this.intervals.push(this.adTimer);
                },
                waitCloseBtn: function () {
                  var e = this.skipTime,
                    t = this;
                  (this.adCloseTime.style.display = "inline-block"),
                    (this.skipAdBtn.style.pointerEvents = "none"),
                    (this.closeAdCountDown = function () {
                      e--,
                        0 == (t.waitTime.innerHTML = e) &&
                          (clearInterval(t.waitTimer),
                          (t.adCloseTime.style.display = "none"),
                          (t.skipAdBtn.style.pointerEvents = "auto"));
                    }),
                    (this.waitTimer = setInterval(this.closeAdCountDown, 1e3)),
                    this.intervals.push(this.waitTimer);
                },
                skipAd: function () {
                  try {
                    clearInterval(this.waitTimer);
                  } catch (e) {}
                  try {
                    clearInterval(this.adTimer);
                  } catch (e) {}
                  this.isAdVideo &&
                    (this.playerApi.clearVideoAllListeners(),
                    (this.adVideo.src = ""),
                    (this.adVideo = null),
                    this.resetNormalPlay()),
                    this.ccAdEndBox.parentNode.removeChild(this.ccAdEndBox),
                    (this.adVideoStared = !1),
                    this.playerApi.triggerPlayerEnded();
                },
                resetNormalPlay: function () {
                  var e = this,
                    t = $.queryEle("#replaybtn", this.parentEle);
                  t &&
                    "block" === t.style.display &&
                    this.playerApi.hidePlayBtn();
                  var i = document.createElement("div");
                  this.parentEle.appendChild(i),
                    (i.outerHTML =
                      '<div class="ccAdEndBox" style="z-index: 10001;"><div id="resetPlay" class="adrPlayBtn"></div></div>');
                  var s = $.queryEle("#resetPlay", this.parentEle);
                  this.playerApi.setLastVideoTime(0),
                    $.addListener(s, "click", function () {
                      e.playerApi.rerender();
                    });
                },
                initPicAdStyle: function () {
                  var e = this.pSrc.width,
                    t = this.pSrc.height,
                    i = this.parentEle.offsetWidth,
                    s = this.parentEle.offsetHeight,
                    a = (s - (i * t) / e) / 2 + "px";
                  e / t <= i / s
                    ? (this.pSrc.style.height = "100%")
                    : ((this.pSrc.style.width = "100%"),
                      (this.pSrc.style.paddingTop = a));
                },
              }),
                (l.CCH5PlayerAdEnd = function (e) {
                  var o = new c(e);
                  return {
                    init: function () {
                      o.init();
                    },
                    destroy: function () {
                      var e = !0,
                        t = !1,
                        i = undefined;
                      try {
                        for (
                          var s, a = (0, X["default"])(o.intervals);
                          !(e = (s = a.next()).done);
                          e = !0
                        ) {
                          var r = s.value;
                          l.clearInterval(r);
                        }
                      } catch (n) {
                        (t = !0), (i = n);
                      } finally {
                        try {
                          !e && a["return"] && a["return"]();
                        } finally {
                          if (t) throw i;
                        }
                      }
                    },
                  };
                });
            }
          })(window),
          (function (l) {
            if ("function" != typeof CCH5PlayerAdHeader) {
              var c = function c(e) {
                var t = e.playerApi,
                  i = e.params,
                  s = e.videoPlayData,
                  a = e.parentEle,
                  r = e.zIndex,
                  n = e.videoElem;
                (this.playerApi = t),
                  (this.params = i),
                  (this.videoPlayData = s),
                  (this.parentEle = a),
                  (this.zIndex = r),
                  (this.videoElem = n),
                  (this.intervals = []),
                  (this.adVideo = null),
                  (this.adPic = null),
                  (this.hasAd = !1);
              };
              (c.prototype = {
                constructor: c,
                init: function () {
                  1 != this.params.isSkipAd
                    ? this.loadAdData()
                    : this.playerApi.readyH5Play(!1);
                },
                initAd: function (e) {
                  (this.hasAd = !0),
                    this.initData(e),
                    this.isAdVideo ? this.playVideoAd() : this.playPicAd();
                },
                playVideoAd: function () {
                  this.createAdVideoView(),
                    this.initAdVideoView(),
                    this.initAdVideoEvents();
                },
                playPicAd: function () {
                  this.createPicAdView(),
                    this.initAdPicView(),
                    this.initAdPicEvents();
                },
                createAdVideoView: function () {
                  var e = document.createElement("div");
                  (this.parentEle.innerHTML = ""),
                    this.parentEle.appendChild(e),
                    (e.outerHTML =
                      "<div class='ccH5playerBox' style='width: 100%; height: 100%;'>  <div class='ccH5PlayBtn'></div>  <div class='x-advert' style='display:none;'>\t\t<a class='skipGg' href='' ></a>  \t<div class='x-advert-info'>\t  \t\t<div class='x-advert-skip'>\t\t \t\t<div class='x-advert-txt closeAd'><span class='closeTime'><i class='skipNum'></i>s后可</span>关闭广告</div>\t\t \t\t<div class='x-mask'></div>\t  \t\t</div>\t  \t\t<div class='x-advert-countdown'>\t\t \t\t<div class='x-advert-txt'><span class='x-advert-sec'></span>s</div>\t\t \t\t<div class='x-mask'></div>\t  \t\t</div>  \t</div>  \t<div class='x-advert-detail'>\t  \t\t<div class='x-advert-txt'><a class='vadSrc' href=''>了解详情</a></div>\t  \t\t<div class='x-mask'></div>  \t</div>  </div>\t</div>"),
                    ((e = $.queryEle(
                      ".x-advert",
                      this.parentEle
                    )).style.zIndex = this.zIndex);
                  var t = null;
                  this.videoElem &&
                  "video" === this.videoElem.tagName.toLowerCase()
                    ? (this.playerApi.clearVttTrack(),
                      this.playerApi.clearVideoAllListeners(),
                      (t = this.videoElem),
                      e.parentNode.appendChild(t))
                    : ((t = document.createElement("video")),
                      e.parentNode.appendChild(t),
                      (t.outerHTML =
                        "<video id='cch5playerAdVideo' x-webkit-airplay='allow' x5-playsinline webkit-playsinline playsinline><source></source></video><source></source></video>"),
                      (t = $.queryEle("#cch5playerAdVideo", this.parentEle))),
                    "h5-page" === t.getAttribute("x5-video-player-type") &&
                      (t.removeAttribute("x5-video-player-type"),
                      t.setAttribute("x-webkit-airplay", "allow"),
                      t.setAttribute("x5-playsinline", "")),
                    (t.id = "cc_ad_" + this.params.vid),
                    (t.src = this.adMaterial),
                    (t.querySelector("source").src = this.adMaterial);
                  var i = $.getCross(this.params, this.videoPlayData);
                  i && 0 < i.length && (t.crossOrigin = i),
                    "true" !== this.params.autoStart || $.isMoble()
                      ? (t.poster = $.getImgSrc(
                          this.params,
                          this.videoPlayData
                        ))
                      : (t.autoplay = "autoplay"),
                    (t.style.width = this.params.width),
                    (this.adVideo = t),
                    this.playerApi.setGlobalVideoElem(this.adVideo);
                },
                createPicAdView: function () {
                  var t = this,
                    i = $.getRandomWinFuncName("cch5player");
                  l[i] = function (e) {
                    t.initPicAdStyle(), delete l[i];
                  };
                  var e =
                      "<div class='ccH5playerBox' style='width: 100%; height: 100%;'>  <div class='picAd' id='picAd' style='display:none;'>     <a class='picBtn' id='picBtn' href='' ></a>  \t<div class='x-advert-info'>\t  \t\t<div class='x-advert-skip'>\t\t \t\t<div class='x-advert-txt closePicAd'><span class='closePicTime'><i class='skipPicNum'></i>s后可</span>关闭广告</div>\t\t \t\t<div class='x-mask'></div>\t  \t\t</div>\t  \t\t<div class='x-advert-countdown'>\t\t \t\t<div class='x-advert-txt'><span class='adSec'></span>s</div>\t\t \t\t<div class='x-mask'></div>\t  \t\t</div>  \t</div>\t\t<div class='pictab'><img onload='" +
                      i +
                      "();' class='pSrc' src=''/></div>  \t<div class='x-advert-detail'>\t  \t\t<div class='x-advert-txt'><a class='picTxth' href='' target='_blank'>了解详情</a></div>\t  \t\t<div class='x-mask'></div>  \t</div>\t  </div>\t</div>",
                    s = document.createElement("div");
                  (this.parentEle.innerHTML = ""),
                    this.parentEle.appendChild(s),
                    (s.outerHTML = e),
                    ($.queryEle(".picAd", this.parentEle).style.zIndex =
                      this.zIndex);
                },
                initAdVideoEvents: function () {
                  var i = this;
                  this.xAdSec.innerHTML = this.adTime;
                  var e = $.getAdSrc(this.adId, this.clickurl, this.materialId);
                  (this.adSrc.href = e),
                    (this.vadSrc.href = e),
                    "" == this.clickurl &&
                      ((this.adSrc.style.display = "none"),
                      (this.vadSrc.parentNode.parentNode.style.display =
                        "none")),
                    0 != this.skipTime &&
                      ((this.waitTime.innerHTML = this.skipTime),
                      this.waitCloseBtn()),
                    1 == this.canskip
                      ? (this.skipAdBtn.style.display = "block")
                      : (this.skipAdBtn.parentNode.style.display = "none"),
                    1 == this.canClick && "" != this.clickurl
                      ? (this.adSrc.style.display = "block")
                      : (this.adSrc.style.display = "none"),
                    (this.adPlayBtn = $.queryEle(
                      ".ccH5PlayBtn",
                      this.parentEle
                    ));
                  var s = this;
                  $.addListener(this.skipAdBtn, "click", function () {
                    s.skipAd();
                  }),
                    $.addListener(this.adPlayBtn, "click", function () {
                      s.adVideo.play();
                    }),
                    this.playerApi.registerVideoEvent("canplay", function () {
                      s.adVideoStared ||
                        "true" != s.params.autoStart ||
                        s.playerApi.videoPlay();
                    }),
                    this.playerApi.registerVideoEvent("play", function () {
                      s.adVideoStared ||
                        (s.videoTime(),
                        (s.adVideoStared = !0),
                        (s.adPlayBtn.style.display = "none"));
                    }),
                    this.playerApi.registerVideoEvent("ended", function () {
                      for (var e = i.materialUrl, t = 0; t < e.length; t++)
                        if (e[t].material == i.adVideo.src) {
                          t == e.length - 1
                            ? ((i.adVideo.src = e[0].material),
                              (i.adSrc.href =
                                "https://imedia.bokecc.com/servlet/mobile/clickstats?adid=" +
                                s.adId +
                                "&clickurl=" +
                                encodeURIComponent(e[0].clickurl) +
                                "&materialid=" +
                                e[0].materialid),
                              (i.vadSrc.href =
                                "https://imedia.bokecc.com/servlet/mobile/clickstats?adid=" +
                                s.adId +
                                "&clickurl=" +
                                encodeURIComponent(e[0].clickurl) +
                                "&materialid=" +
                                e[0].materialid))
                            : ((i.adVideo.src = e[t + 1].material),
                              (i.adSrc.href =
                                "https://imedia.bokecc.com/servlet/mobile/clickstats?adid=" +
                                s.adId +
                                "&clickurl=" +
                                encodeURIComponent(e[t + 1].clickurl) +
                                "&materialid=" +
                                e[t + 1].materialid),
                              (i.vadSrc.href =
                                "https://imedia.bokecc.com/servlet/mobile/clickstats?adid=" +
                                s.adId +
                                "&clickurl=" +
                                encodeURIComponent(e[t + 1].clickurl) +
                                "&materialid=" +
                                e[t + 1].materialid));
                          break;
                        }
                    });
                },
                initAdPicEvents: function () {
                  (this.adSec.innerHTML = this.adTime),
                    (this.pSrc.src = this.adMaterial),
                    (this.picAdSrc.href = $.getAdSrc(
                      this.adId,
                      this.clickurl,
                      this.materialId
                    )),
                    (this.picTxth.href = this.picAdSrc.href),
                    "" == this.clickurl &&
                      ((this.picAdSrc.style.display = "none"),
                      (this.picTxth.style.display = "none"),
                      (this.picTxth.parentNode.parentNode.style.display =
                        "none")),
                    this.picAdTime(),
                    0 != this.skipTime &&
                      ((this.waitPicTime.innerHTML = this.skipTime),
                      this.waitPicClose()),
                    1 == this.canskip
                      ? (this.skipPicAd.style.display = "block")
                      : ((this.skipPicAd.style.display = "none"),
                        (this.skipPicAd.parentNode.style.display = "none")),
                    1 == this.canClick && "" != this.clickurl
                      ? (this.picAdSrc.style.display = "block")
                      : (this.picAdSrc.style.display = "none");
                  var e = this;
                  $.addListener(this.skipPicAd, "click", function () {
                    e.skipAd();
                  });
                },
                initAdVideoView: function () {
                  (this.adSrc = $.queryEle(".skipGg", this.parentEle)),
                    (this.adcloseTime = $.queryEle(
                      ".closeTime",
                      this.parentEle
                    )),
                    (this.vadSrc = $.queryEle(".vadSrc", this.parentEle)),
                    (this.advert = $.queryEle(".x-advert", this.parentEle)),
                    (this.skipAdBtn = $.queryEle(".closeAd", this.parentEle)),
                    (this.xAdSec = $.queryEle(".x-advert-sec", this.parentEle)),
                    (this.waitTime = $.queryEle(".skipNum", this.parentEle));
                },
                initAdPicView: function () {
                  (this.adSec = $.queryEle(".adSec", this.parentEle)),
                    (this.imgCloseTime = $.queryEle(
                      ".closePicTime",
                      this.parentEle
                    )),
                    (this.picAdSrc = $.queryEle(".picBtn", this.parentEle)),
                    (this.waitPicTime = $.queryEle(
                      ".skipPicNum",
                      this.parentEle
                    )),
                    (this.skipPicAd = $.queryEle(
                      ".closePicAd",
                      this.parentEle
                    )),
                    (this.picAd = $.queryEle(".picAd", this.parentEle)),
                    (this.pSrc = $.queryEle(".pSrc", this.parentEle)),
                    (this.picTxth = $.queryEle(".picTxth", this.parentEle));
                },
                loadAdData: function () {
                  var i = this;
                  $.ccJsonp({
                    url: "https://imedia.bokecc.com/servlet/mobile/adloader",
                    data: {
                      vid: i.params.vid,
                      uid: i.params.siteid,
                      type: 1,
                      t: 0,
                    },
                    timeOut: 3e3,
                    success: function (t) {
                      try {
                        if (1 != t.response.result)
                          return void i.playerApi.readyH5Play(!1);
                        i.initAd(t);
                      } catch (e) {
                        i.playerApi.processPlayerError(e);
                      }
                    },
                    error: function () {
                      i.playerApi.readyH5Play(!1);
                    },
                  });
                },
                initData: function (e) {
                  var t = e.response.ad[0].material,
                    i = t.lastIndexOf(".");
                  ".mp4" == t.substring(i, t.length).toLowerCase()
                    ? (this.isAdVideo = !0)
                    : (this.isAdVideo = !1),
                    -1 != e.response.ad[0].material.indexOf("bokecc.com")
                      ? (this.adMaterial = e.response.ad[0].material.replace(
                          /http:/i,
                          "https:"
                        ))
                      : (this.adMaterial = e.response.ad[0].material),
                    (this.adUrl = e.response.ad[0].material),
                    (this.canClick = e.response.canclick),
                    (this.videoAd = e.response.result),
                    (this.adTime = e.response.time),
                    (this.skipTime = e.response.skiptime),
                    (this.canskip = e.response.canskip),
                    (this.materialUrl = e.response.ad),
                    (this.adId = e.response.adid),
                    (this.materialId = e.response.ad[0].materialid),
                    (this.clickurl = e.response.ad[0].clickurl),
                    e.response.statisUrl && $.imgLoad(e.response.statisUrl),
                    (this.isAdTime = !0);
                  var s = {
                    adId: this.adId,
                    adTime: this.adTime,
                    canClick: this.canClick,
                    canskip: this.canskip,
                    materialId: this.materialId,
                    isAdTime: this.isAdTime,
                    videoAd: this.videoAd,
                  };
                  this.isAdVideo
                    ? (s.videoSrc = this.adMaterial)
                    : (s.picSrc = this.adMaterial),
                    this.playerApi.setOuterApiProps(s);
                },
                videoTime: function () {
                  var e = this,
                    t = this.adTime;
                  (this.advert.style.display = "block"),
                    (this.videoAdCountDown = function () {
                      t--,
                        0 == (e.xAdSec.innerHTML = t) &&
                          (clearInterval(e.adTimer), e.skipAdBtn.click());
                    }),
                    "undefined" == typeof e.adTimer &&
                      ((this.adTimer = setInterval(this.videoAdCountDown, 1e3)),
                      this.intervals.push(this.adTimer));
                },
                picAdTime: function () {
                  var e = this.adTime,
                    t = this;
                  (this.picAd.style.display = "block"),
                    (this.picAdCountDown = function () {
                      e--,
                        0 == (t.adSec.innerHTML = e) &&
                          (clearInterval(t.adTimer), t.skipPicAd.click());
                    }),
                    (this.adTimer = setInterval(this.picAdCountDown, 1e3)),
                    this.intervals.push(this.adTimer);
                },
                waitCloseBtn: function () {
                  var e = this.skipTime,
                    t = this;
                  (this.adcloseTime.style.display = "inline-block"),
                    (this.skipAdBtn.style.pointerEvents = "none"),
                    (this.closeVideoCountDown = function () {
                      e--,
                        0 == (t.waitTime.innerHTML = e) &&
                          (clearInterval(t.waitTimer),
                          (t.adcloseTime.style.display = "none"),
                          (t.skipAdBtn.style.pointerEvents = "auto"));
                    }),
                    (this.waitTimer = setInterval(
                      this.closeVideoCountDown,
                      1e3
                    )),
                    this.intervals.push(this.waitTimer);
                },
                waitPicClose: function () {
                  var e = this.skipTime,
                    t = this;
                  (this.imgCloseTime.style.display = "inline-block"),
                    (this.skipPicAd.style.pointerEvents = "none"),
                    (this.closePicCountDown = function () {
                      e--,
                        0 == (t.waitPicTime.innerHTML = e) &&
                          (clearInterval(t.waitTimer),
                          (t.imgCloseTime.style.display = "none"),
                          (t.skipPicAd.style.pointerEvents = "auto"));
                    }),
                    (this.waitTimer = setInterval(this.closePicCountDown, 1e3)),
                    this.intervals.push(this.waitTimer);
                },
                skipAd: function () {
                  try {
                    clearInterval(this.waitTimer);
                  } catch (t) {}
                  try {
                    clearInterval(this.adTimer);
                  } catch (t) {}
                  this.isAdVideo
                    ? (this.advert.style.display = "none")
                    : (this.picAd.style.display = "none"),
                    this.isAdVideo &&
                      ((this.params.autoStart = "true"),
                      this.playerApi.clearVideoAllListeners()),
                    $.invokeWindow(
                      "on_CCH5player_adEnd",
                      this.adId,
                      this.params.vid
                    );
                  try {
                    this.playerApi.readyH5Play(this.hasAd);
                  } catch (e) {
                    this.playerApi.processPlayerError(e);
                  }
                },
                initPicAdStyle: function () {
                  var e = this.pSrc.width,
                    t = this.pSrc.height,
                    i = this.parentEle.offsetWidth,
                    s = this.parentEle.offsetHeight,
                    a = (s - (i * t) / e) / 2 + "px";
                  e / t <= i / s
                    ? (this.pSrc.style.height = "100%")
                    : ((this.pSrc.style.width = "100%"),
                      (this.pSrc.style.paddingTop = a));
                },
              }),
                (l.CCH5PlayerAdHeader = function (e) {
                  var o = new c(e);
                  return {
                    init: function () {
                      o.init();
                    },
                    destroy: function () {
                      var e = !0,
                        t = !1,
                        i = undefined;
                      try {
                        for (
                          var s, a = (0, X["default"])(o.intervals);
                          !(e = (s = a.next()).done);
                          e = !0
                        ) {
                          var r = s.value;
                          l.clearInterval(r);
                        }
                      } catch (n) {
                        (t = !0), (i = n);
                      } finally {
                        try {
                          !e && a["return"] && a["return"]();
                        } finally {
                          if (t) throw i;
                        }
                      }
                    },
                  };
                });
            }
          })(window),
          (function (n) {
            if ("function" != typeof CCH5PlayerAdPaused) {
              var c = function c(e, t, i, s, a, r, n, o) {
                (this.playerApi = e),
                  (this.params = t),
                  (this.videoPlayData = i),
                  (this.parentEle = s),
                  (this.zIndex = a),
                  (this.ccPlayerQA = r),
                  (this.ccPlayerExercise = n),
                  (this.ccPlayerVistor = o);
              };
              (c.prototype = {
                constructor: c,
                init: function () {
                  1 != this.params.isSkipAd &&
                    (this.initData(), this.registerVideoListener());
                },
                createPicView: function () {
                  var t = this,
                    e = $.getRandomWinFuncName("cch5player");
                  n[e] = function (e) {
                    t.picPauseAdStyle();
                  };
                  var i =
                      "<div class='picAdPaused' id='pausedAdContainer' style='display:none;overflow:hidden;'>\t\t<div class='pictabPaused'><div class='closeBoxPaused pausedVideoAdCloseBtn' style='opacity:0;'>广告</div>       <a id='picBtnPaused' href='' target='_blank'>      <img onload='" +
                      e +
                      "();' class='pausedAdSrc' style='opacity:0;' src=''/></a></div>\t</div>",
                    s = document.createElement("div");
                  this.parentEle.appendChild(s), (s.outerHTML = i);
                },
                createVideoView: function () {
                  var e = document.createElement("div");
                  this.parentEle.appendChild(e),
                    (e.outerHTML =
                      "<div class='picAdPaused' id='pausedAdContainer' style='display:none;overflow:hidden;'>  <div class='ccH5PlayBtn ccH5PausedAdPlayBtn'></div>\t\t<div class='pictabPaused'>  \t    <div class='closeBoxPaused pausedVideoAdCloseBtn'>广告</div>         <a id='picBtnPaused' href='' target='_blank' style='display:block;font-size:0;'>             <video id='pausedAdVideo' autoplay loop class='pausedAdSrc' style='width: 100%;height:100%;' x-webkit-airplay='allow' x5-playsinline webkit-playsinline playsinline='true'><source></source>             </video>          </a>  \t    <div class='adVideoVolume'></div>     </div>\t</div>");
                },
                registerVideoListener: function () {
                  var s = this;
                  this.playerApi.registerVideoEvent("pause", function () {
                    var e =
                        s.ccPlayerExercise &&
                        s.ccPlayerExercise.getExerciseIsShow(),
                      t = s.ccPlayerQA && s.ccPlayerQA.getIsQuestionsShow(),
                      i =
                        s.ccPlayerVistor && s.ccPlayerVistor.getVistorIsShow();
                    s.playerApi.getIsVoteShow() ||
                      ((e || t || i) &&
                        !($.isMoble() || $.isIPad() || $.isWindowsPhoneOS())) ||
                      s.toShowPauseAd();
                  }),
                    this.playerApi.registerVideoEvent("playing", function () {
                      s.pausedAdContainer &&
                        ((s.pausedAdContainer.style.display = "none"),
                        s.pausedAdVideo &&
                          (s.pausedAdVideo.pause(),
                          s.pausedVideoAdVolume.classList.contains("active") &&
                            (s.pausedVideoAdVolume.classList.remove("active"),
                            $.isMoble() ||
                              $.isIPad() ||
                              (s.pausedAdVideo.volume = 0))),
                        (s.playEnded = !1),
                        (s.isWillShowPauseAd = !1));
                    }),
                    this.playerApi.registerVideoEvent("ended", function () {
                      s.playEnded = !0;
                    });
                },
                initAdEvents: function () {
                  var a = this,
                    r = this;
                  $.addListener(this.pausedAdContainer, "click", function (e) {
                    var t = e || n.event,
                      i = t.target.id,
                      s = t.target.className;
                    (a.isPausedAdVideo && "pausedAdContainer" !== i) ||
                      (!a.isPausedAdVideo &&
                        "pausedAdContainer" !== i &&
                        "pictabPaused" !== s) ||
                      r.playerApi.videoPlay();
                  }),
                    $.addListener(this.closeBoxPaused, "click", function (e) {
                      r.closePauseAd();
                    }),
                    this.isPausedAdVideo &&
                      ($.addListener(
                        this.pausedVideoAdVolume,
                        "click",
                        function (e) {
                          1 == e.target.classList.contains("active")
                            ? (e.target.classList.remove("active"),
                              (a.pausedAdVideo.volume = 0))
                            : (e.target.classList.add("active"),
                              (a.pausedAdVideo.volume = 0.5));
                        }
                      ),
                      $.addListener(this.adPlayBtn, "click", function () {
                        a.pausedAdVideo.play();
                      }),
                      $.addListener(this.pausedAdVideo, "play", function () {
                        a.adPlayBtn.style.display = "none";
                      }));
                },
                initData: function () {
                  (this.isWillShowPauseAd = !1),
                    (this.loadingAd = !1),
                    (this.hasPauseAd = !0),
                    (this.pauseAd = null);
                },
                initAdData: function () {
                  if (
                    ((this.pausedAdContainer = $.queryEle(
                      "#pausedAdContainer",
                      this.parentEle
                    )),
                    (this.picBtnPaused = $.queryEle(
                      "#picBtnPaused",
                      this.parentEle
                    )),
                    (this.pausedAdSrc = $.queryEle(
                      ".pausedAdSrc",
                      this.parentEle
                    )),
                    (this.closeBoxPaused = $.queryEle(
                      ".closeBoxPaused",
                      this.parentEle
                    )),
                    (this.pausedInnerBox = $.queryEle(
                      ".pictabPaused",
                      this.parentEle
                    )),
                    (this.pausedAdContainer.style.zIndex = this.zIndex),
                    this.isPausedAdVideo)
                  ) {
                    (this.adPlayBtn = $.queryEle(
                      ".ccH5PausedAdPlayBtn",
                      this.parentEle
                    )),
                      (this.pausedAdVideo = $.queryEle(
                        "#pausedAdVideo",
                        this.parentEle
                      )),
                      $.isMoble() ||
                        $.isIPad() ||
                        (this.pausedAdVideo.volume = 0),
                      (this.pausedVideoAdVolume = $.queryEle(
                        ".adVideoVolume",
                        this.pausedAdContainer
                      ));
                    var e = (0.04 * this.parentEle.offsetWidth).toFixed(2);
                    (this.pausedVideoAdVolume.style.width = e + "px"),
                      (this.pausedVideoAdVolume.style.height = e + "px");
                  }
                },
                toShowPauseAd: function (e) {
                  var t = e || 20;
                  if (!(this.playerApi.getCurrentTime() < 1)) {
                    var i = this;
                    (this.isWillShowPauseAd = !0),
                      setTimeout(function () {
                        if (
                          !i.loadingAd &&
                          !i.playEnded &&
                          i.isWillShowPauseAd
                        ) {
                          var e = i.params;
                          if (
                            ($.invokeWindow("on_pause_showAd", e.vid),
                            !i.pauseAd)
                          )
                            return (
                              (i.loadingAd = !0),
                              void $.ccJsonp({
                                url: "https://imedia.bokecc.com/servlet/mobile/adloader",
                                data: {
                                  vid: e.vid,
                                  uid: e.siteid,
                                  type: 2,
                                  t: 0,
                                },
                                timeOut: 5e3,
                                success: function (e) {
                                  (i.loadingAd = !1), i.pauseAdCallback(e);
                                },
                                error: function () {
                                  i.loadingAd = !1;
                                },
                              })
                            );
                          i.hasPauseAd && i.showPausedAd();
                        }
                      }, t);
                  }
                },
                showPausedAd: function () {
                  var e = this.pauseAd;
                  if (
                    (this.isPausedAdVideo
                      ? ((this.pausedAdSrc.src = e.material),
                        (this.pausedAdSrc.querySelector("source").src =
                          e.material),
                        (this.adPlayBtn.style.display = "block"))
                      : (this.pausedAdSrc.src = e.material),
                    "" == e.clickurl)
                  )
                    (this.picBtnPaused.href = "javascript:void(0);"),
                      (this.picBtnPaused.target = "");
                  else {
                    var t =
                      "https://imedia.bokecc.com/servlet/mobile/clickstats?adid=" +
                      e.adId +
                      "&clickurl=" +
                      encodeURIComponent(e.clickurl) +
                      "&materialid=" +
                      e.materialid;
                    this.picBtnPaused.href = t;
                  }
                  (this.pausedAdContainer.style.display = "block"),
                    this.playerApi.hidePlayBtn();
                },
                pauseAdCallback: function (e) {
                  if (1 != e.response.result)
                    return (this.pauseAd = {}), void (this.hasPauseAd = !1);
                  (this.pauseAd = e.response.ad[0]),
                    (this.pauseAd.adId = e.response.adid),
                    -1 != e.response.ad[0].material.indexOf("bokecc.com") &&
                      (this.pauseAd.material =
                        e.response.ad[0].material.replace(/http:/i, "https:"));
                  var t = this.pauseAd.material,
                    i = t.lastIndexOf(".");
                  ".mp4" == t.substring(i, t.length).toLowerCase()
                    ? (this.isPausedAdVideo = !0)
                    : (this.isPausedAdVideo = !1),
                    this.isPausedAdVideo
                      ? this.createVideoView()
                      : this.createPicView(),
                    this.initAdData(),
                    this.initAdEvents(),
                    (this.hasPauseAd = !0),
                    e.response.statisUrl && $.imgLoad(e.response.statisUrl),
                    this.toShowPauseAd(0);
                },
                picPauseAdStyle: function () {
                  if (!this.picPauseAdStyleInvoked) {
                    (this.picPauseAdStyleInvoked = !0),
                      this.pausedAdSrc.width / this.pausedAdSrc.height <=
                      this.parentEle.offsetWidth / this.parentEle.offsetHeight
                        ? (this.pausedAdSrc.style.height = "100%")
                        : (this.pausedAdSrc.style.width = "100%");
                    var e = this.pausedInnerBox.offsetWidth,
                      t = this.pausedInnerBox.offsetHeight,
                      i = (e - this.pausedAdSrc.offsetWidth) / 2,
                      s = (t - this.pausedAdSrc.offsetHeight) / 2;
                    (this.closeBoxPaused.style.right = 10 + i + "px"),
                      (this.closeBoxPaused.style.top = 10 + s + "px"),
                      (this.closeBoxPaused.style.opacity = 1),
                      (this.pausedAdSrc.style.opacity = 1);
                  }
                },
                closePauseAd: function () {
                  (this.pausedAdContainer.style.display = "none"),
                    this.playerApi.showPlayBtn(),
                    this.pausedAdVideo && this.pausedAdVideo.pause();
                },
              }),
                (n.CCH5PlayerAdPaused = function (e, t, i, s, a, r, n, o) {
                  var l = new c(e, t, i, s, a, r, n, o);
                  return {
                    init: function () {
                      l.init();
                    },
                  };
                });
            }
          })(window),
          (function (c) {
            var n = c.document;
            if ("function" != typeof CCH5PlayerBarrage) {
              var e;
              ((e = n.createElement("link")).href =
                "https://p.bokecc.com/css/html5player/barrage.css"),
                (e.rel = "stylesheet"),
                (e.type = "text/css"),
                n.getElementsByTagName("head")[0].appendChild(e);
              var d = function d(e, t, i, s, a, r, n, o) {
                (this.playerApi = e),
                  (this.params = t),
                  (this.videoPlayData = i),
                  (this.parentEle = s),
                  (this.zIndex = a),
                  (this.settingIndex = r),
                  (this.playerContainer = n),
                  (this.ccPlayList = o);
              };
              (d.prototype = {
                hasOpenBarrage: !1,
                switchOn: !0,
                showPopupBarrage: !1,
                barrageColor: "",
                barrageDur: "",
                barrageData: null,
                barragePreloadData: null,
                barragePreloadSec: -1,
                lastPt: -1,
                barrageLoading: !1,
                barrageSec: -1,
                isPlaying: !1,
                ish5: !0,
                lastIndex: 0,
                intervals: [],
                init: function () {
                  var s = this;
                  if (
                    (this.createBarrageHTML(),
                    this.initData(),
                    this.addEvents(),
                    this.classListIE(),
                    $.isFlashPlay(this.videoPlayData.playtype))
                  ) {
                    this.ish5 = !1;
                    var a = null;
                    "function" == typeof c.on_cc_player_init &&
                      (a = c.on_cc_player_init),
                      (c.on_cc_player_init = function (e, t) {
                        s.fPlayer = s.getSWF("cc_" + s.params.vid);
                        var i = {
                          player_plugins: {
                            BulletCurtain: {
                              color: 16777215,
                              font: "微软雅黑",
                              size: 20,
                              duration: 10,
                              alpha: 1,
                              visible: 1,
                            },
                          },
                        };
                        s.fPlayer.setConfig(i), null != a && a(e, t);
                      });
                    var e = null;
                    "function" == typeof c.on_spark_player_ready &&
                      (e = c.on_spark_player_ready),
                      (c.on_spark_player_ready = function () {
                        (s.isPlaying = !0), null != e && e();
                      });
                  } else
                    (this.ish5 = !0), this.openBarrage(), (this.isPlaying = !0);
                  (this.barrageDur = 4e3), (this.move_status = !0);
                  for (var t = 0; t < this.ccSli.length; t++)
                    $.addListener(this.ccSli[t], "click", function () {
                      for (var e = 0; e < s.ccSli.length; e++)
                        s.ccSli[e].classList.remove("cc_current");
                      this.classList.add("cc_current");
                      var t = this.firstChild.style.backgroundColor;
                      s.barrageColor = s.rgb2hex(t);
                    });
                  this.startShowBarrage();
                },
                initData: function () {
                  (this.oDiv = $.queryEle(
                    ".cc_barrage_container",
                    this.playerContainer
                  )),
                    (this.ccPopupBarrage = $.queryEle(
                      "#cc_popup_barrage",
                      this.playerContainer
                    )),
                    (this.ccBarrageSettingsColor = $.queryEle(
                      ".cc_barrage_settings_color",
                      this.oDiv
                    )),
                    (this.ccSli =
                      this.ccBarrageSettingsColor.getElementsByTagName("li")),
                    (this.ccInpText = $.queryEle(".cc_inp_text", this.oDiv)),
                    (this.ccBarrageTips = $.queryEle(
                      ".cc_barrage_tips",
                      this.oDiv
                    )),
                    (this.ccBtnType = $.queryEle(".cc_btn_type", this.oDiv)),
                    (this.ccPopupBarrageType = $.queryEle(
                      ".cc_popup_barrage_type",
                      this.oDiv
                    )),
                    (this.ccSpeedPointer = $.queryEle(
                      ".cc_speed_pointer",
                      this.oDiv
                    )),
                    (this.ccSpeedProgress = $.queryEle(
                      ".cc_speed_progress",
                      this.oDiv
                    )),
                    (this.ccSpeedShow = $.queryEle(
                      ".cc_speed_show",
                      this.oDiv
                    )),
                    (this.ccAlphaPointer = $.queryEle(
                      ".cc_alpha_pointer",
                      this.oDiv
                    )),
                    (this.ccAlphaProgress = $.queryEle(
                      ".cc_alpha_progress",
                      this.oDiv
                    )),
                    (this.ccAlphaShow = $.queryEle(
                      ".cc_alpha_show",
                      this.oDiv
                    )),
                    (this.ccBtnSubmit = $.queryEle(
                      ".cc_btn_submit",
                      this.oDiv
                    )),
                    (this.ccBarrageSwitch = $.queryEle(
                      ".cc_barrage_switch",
                      this.oDiv
                    ));
                },
                addEvents: function () {
                  var e = this;
                  $.addListener(this.ccInpText, "focus", function () {
                    e.ccInpTextFocus();
                  }),
                    $.addListener(this.ccInpText, "blur", function () {
                      e.ccInpTextBlur();
                    }),
                    $.addListener(
                      this.ccPopupBarrage,
                      "mouseenter",
                      function () {
                        e.ccPopupBarrageEnter();
                      }
                    ),
                    $.addListener(
                      this.ccPopupBarrage,
                      "mouseleave",
                      function () {
                        e.ccPopupBarrageOut();
                      }
                    ),
                    $.addListener(this.ccBtnType, "click", function () {
                      e.ccPopupBarrageTypeShow();
                    }),
                    $.addListener(this.ccBtnType, "mouseenter", function () {
                      e.ccPopupBarrageTypeEnter();
                    }),
                    $.addListener(this.ccBtnType, "mouseleave", function () {
                      e.ccPopupBarrageTypeShowTimer();
                    }),
                    $.addListener(
                      this.ccPopupBarrageType,
                      "mouseenter",
                      function () {
                        e.ccPopupBarrageTypeEnter();
                      }
                    ),
                    $.addListener(
                      this.ccPopupBarrageType,
                      "mouseleave",
                      function () {
                        e.ccPopupBarrageTypeShowTimer();
                      }
                    ),
                    $.addListener(this.ccBtnSubmit, "click", function () {
                      e.ccSubmitBarrage();
                    }),
                    $.addListener(this.ccBarrageSwitch, "click", function () {
                      e.ish5 ? e.h5SwitchBarrage() : e.flashSwitchBarrage();
                    }),
                    this.dragSpeed(this.ccSpeedPointer),
                    this.dragAlpha(this.ccAlphaPointer);
                },
                openBarrage: function (e, t, i) {
                  var s = this;
                  if (
                    ((this.CCStyle = { size: 20, col: 16777215, dur: 1e4 }),
                    void 0 !== e && null != e && (this.CCStyle.size = e),
                    void 0 !== t &&
                      null != t &&
                      ("string" == typeof t &&
                        "#" == t.charAt(0) &&
                        ((t = "0x" + t.substring(1)), (t = parseInt(t, "0x"))),
                      (this.CCStyle.col = t)),
                    void 0 !== i && null != i && (this.CCStyle.dur = i),
                    !this.hasOpenBarrage)
                  ) {
                    this.hasOpenBarrage = !0;
                    var a = n.createElement("div");
                    (a.innerHTML = this.createBarrageBox()),
                      this.parentEle.appendChild(a),
                      ($.queryEle(".abp", this.parentEle).style.zIndex =
                        this.zIndex);
                    var r = $.queryEle("#ccBarrage", this.parentEle);
                    $.loadScript(
                      "https://p.bokecc.com/js/player/CommentCoreLibrary.js",
                      function () {
                        (s.CM = new CommentManager(r)),
                          s.CM.init(),
                          s.CM.start();
                      }
                    ),
                      $.addListener(r, "click", function (e) {
                        s.params.listid && s.ccPlayList.isShowing()
                          ? s.ccPlayList.hidePlayList()
                          : e.target.id;
                      });
                  }
                },
                sendBarrage: function (e, t, i, s) {
                  this.hasOpenBarrage
                    ? this.CM &&
                      void 0 !== e &&
                      ("string" == typeof i &&
                        "#" == i.charAt(0) &&
                        ((i = "0x" + i.substring(1)), (i = parseInt(i, "0x"))),
                      (i = parseInt(i)),
                      this.CM.send({
                        mode: 1,
                        text: e,
                        size: t || this.CCStyle.size,
                        color: i || this.CCStyle.col,
                        dur: s || this.CCStyle.dur,
                      }))
                    : this.openBarrage();
                },
                showBarrage: function () {
                  this.hasOpenBarrage
                    ? ($.queryEle(".abp", this.parentEle).style.visibility =
                        "visible")
                    : this.openBarrage();
                },
                hideBarrage: function () {
                  this.hasOpenBarrage &&
                    ($.queryEle(".abp", this.parentEle).style.visibility =
                      "hidden");
                },
                createBarrageBox: function () {
                  return '<div class="abp" style="position:absolute; width:100%; height:100%; z-index:3;top:0px;"><div id="ccBarrage" class="container" style="perspective: 227.217px;"></div></div>';
                },
                rgb2hex: function (e) {
                  function t(e) {
                    return ("0" + parseInt(e).toString(16)).slice(-2);
                  }
                  return (
                    "0x" +
                    t((e = e.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/))[1]) +
                    t(e[2]) +
                    t(e[3])
                  );
                },
                startShowBarrage: function () {
                  var a = this,
                    r = setInterval(function () {
                      if (0 != a.isPlaying)
                        if (
                          a.playerContainer.getElementsByClassName(
                            "cc_barrage_container"
                          ).length < 1
                        )
                          clearInterval(r);
                        else {
                          var e;
                          if (a.ish5) e = a.playerApi.getCurrentTime();
                          else {
                            if (!a.fPlayer.getPosition || !a.fPlayer.addBullet)
                              return void c.clearInterval(r);
                            e = a.fPlayer.getPosition();
                          }
                          var t = parseInt(10 * e);
                          if (a.lastPt != t) {
                            var i = parseInt(e / 60);
                            if (
                              (null === a.barrageData ||
                              (a.barrageSec != i &&
                                (a.barragePreloadSec != i ||
                                  null === a.barragePreloadData))
                                ? a.barrageLoading || a.ccObtainBarrage(i)
                                : 58 <= parseInt(e % 60) &&
                                  null === a.barragePreloadData &&
                                  (a.barrageLoading ||
                                    a.ccObtainBarrage(i + 1)),
                              i != a.barrageSec &&
                                null != a.barragePreloadData &&
                                ((a.barrageData = a.barragePreloadData),
                                (a.barragePreloadData = null),
                                (a.barrageSec = i),
                                (a.barrageLoading = !1),
                                (a.lastIndex = 0)),
                              null !== a.barrageData)
                            ) {
                              (a.lastPt = t),
                                0 != a.lastIndex &&
                                  parseInt(
                                    a.barrageData[a.lastIndex].pt / 100
                                  ) > t &&
                                  (a.lastIndex = 0);
                              for (
                                var s = a.lastIndex;
                                s < a.barrageData.length;
                                s++
                              ) {
                                t == parseInt(a.barrageData[s].pt / 100) &&
                                  ((a.lastIndex = s),
                                  a.ish5
                                    ? a.sendBarrage(
                                        a.barrageData[s].content,
                                        20,
                                        a.barrageData[s].fc,
                                        Math.floor(
                                          4e3 * Math.random() + a.barrageDur
                                        )
                                      )
                                    : ("#" == a.barrageData[s].fc.charAt(0) &&
                                        (a.barrageData[s].fc =
                                          "0x" +
                                          a.barrageData[s].fc.substring(1)),
                                      a.fPlayer.addBullet({
                                        text: a.barrageData[s].content,
                                        color: a.barrageData[s].fc,
                                        type: 0,
                                        size: 20,
                                        borderColor: -1,
                                        speedTime: Math.floor(
                                          4e3 * Math.random() + a.barrageDur
                                        ),
                                      })));
                              }
                            }
                          }
                        }
                    }, 100);
                  this.intervals.push(r);
                },
                ccSubmitBarrage: function () {
                  var e = this.ccInpText.value;
                  if ("" != e) {
                    var t;
                    "" == this.barrageColor && (this.barrageColor = "0xffffff"),
                      (t = this.ish5
                        ? parseInt(1e3 * this.playerApi.getCurrentTime())
                        : parseInt(1e3 * this.fPlayer.getPosition())),
                      this.ccSendBarrageTxt();
                    var i = {
                      vid: this.params.vid,
                      content: e,
                      pt: t,
                      fc: this.barrageColor,
                    };
                    "function" == typeof c.on_CCH5player_barrage_send
                      ? $.invokeWindow("on_CCH5player_barrage_send", i)
                      : this.ccSubmitBarrageDefaultApi(i);
                  }
                },
                ccSubmitBarrageDefaultApi: function (e) {
                  $.ccJsonp({
                    url: "https://barrage.bokecc.com/receive.bo",
                    data: e,
                    success: function (e) {},
                    error: function () {},
                  });
                },
                ccSendBarrageTxt: function () {
                  var e = this,
                    t = this.ccInpText.value;
                  this.ish5
                    ? this.sendBarrage(
                        t,
                        20,
                        parseInt(this.barrageColor),
                        Math.floor(4e3 * Math.random() + this.barrageDur)
                      )
                    : this.fPlayer.addBullet({
                        text: t,
                        color: this.barrageColor,
                        type: 0,
                        size: 20,
                        borderColor: -1,
                        speedTime: Math.floor(
                          4e3 * Math.random() + this.barrageDur
                        ),
                      }),
                    (this.ccInpText.value = ""),
                    this.ccBtnSubmit.classList.add("cc_disabled"),
                    (this.ccBtnSubmit.innerHTML = "发表(5)");
                  var i = 5,
                    s = setInterval(function () {
                      i--,
                        (e.ccBtnSubmit.innerHTML = "发表(" + i + ")"),
                        0 == i &&
                          (clearInterval(s),
                          e.ccBtnSubmit.classList.remove("cc_disabled"),
                          (e.ccBtnSubmit.innerHTML = "发表"));
                    }, 1e3);
                  this.intervals.push(s);
                },
                ccObtainBarrage: function (e) {
                  var t = this;
                  if (this.switchOn) {
                    (this.barrageLoading = !0),
                      (this.barragePreloadSec = e),
                      (this.lastLoadingTime = new Date().getTime());
                    var i = this;
                    "function" == typeof c.on_CCH5Player_barrage_query
                      ? $.invokeWindow(
                          "on_CCH5Player_barrage_query",
                          this.params.vid,
                          e,
                          function (e) {
                            i.handleGetBarrageDataSucc(e);
                          }
                        )
                      : this.ccObtainBarrageDefaultApi(
                          this.params.vid,
                          e,
                          function (e) {
                            i.handleGetBarrageDataSucc(e);
                          }
                        );
                    setTimeout(function () {
                      t.barrageLoading &&
                        3e3 <= new Date().getTime() - t.lastLoadingTime &&
                        (t.barrageLoading = !1);
                    }, 3e3);
                  }
                },
                ccObtainBarrageDefaultApi: function (e, t, i) {
                  $.ccJsonp({
                    url: "https://barrage.bokecc.com/query.bo",
                    data: { vid: e, sec: t },
                    success: function (e) {
                      e.success && i(e.data);
                    },
                    error: function () {},
                  });
                },
                handleGetBarrageDataSucc: function (e) {
                  (this.barragePreloadData = e), (this.barrageLoading = !1);
                },
                h5SwitchBarrage: function () {
                  this.ccBarrageSwitch.classList.contains("cc_open")
                    ? (this.hideBarrage(),
                      this.ccBarrageSwitch.classList.remove("cc_open"),
                      (this.switchOn = !1))
                    : (this.showBarrage(),
                      this.ccBarrageSwitch.classList.add("cc_open"),
                      (this.switchOn = !0));
                },
                flashSwitchBarrage: function () {
                  this.ccBarrageSwitch.classList.contains("cc_open")
                    ? (this.fPlayer.setBulletCurtainVisible(0),
                      this.ccBarrageSwitch.classList.remove("cc_open"),
                      (this.switchOn = !1))
                    : (this.fPlayer.setBulletCurtainVisible(1),
                      this.ccBarrageSwitch.classList.add("cc_open"),
                      (this.switchOn = !0));
                },
                dragAlpha: function (e) {
                  var t = this;
                  e.ontouchstart = e.onmousedown = function (e) {
                    e.preventDefault(),
                      (n.ontouchmove = n.onmousemove =
                        function (e) {
                          e.preventDefault(), t.posAlpha(e);
                        }),
                      (n.ontouchend = n.onmouseup =
                        function () {
                          n.ontouchend =
                            n.onmouseup =
                            n.ontouchmove =
                            n.onmousemove =
                              null;
                        });
                  };
                },
                posAlpha: function (e) {
                  var t = $.queryEle("#ccBarrage", this.parentEle),
                    i =
                      $.getMousePos(e).x -
                      c.pageXOffset -
                      $.getPos(this.ccAlphaProgress).left;
                  i < 0
                    ? ((i = 0),
                      (this.ccAlphaPointer.style.left = "0%"),
                      (this.ccAlphaProgress.style.width = "0%"),
                      (this.ccAlphaShow.innerHTML = "20%"))
                    : 180 < i
                    ? ((i = 180),
                      (this.ccAlphaPointer.style.left = "100%"),
                      (this.ccAlphaProgress.style.width = "100%"),
                      (this.ccAlphaShow.innerHTML = "100%"))
                    : ((this.ccAlphaPointer.style.left =
                        ((i / 180) * 100).toFixed(0) + "%"),
                      (this.ccAlphaProgress.style.width =
                        ((i / 180) * 100).toFixed(0) + "%"),
                      (this.ccAlphaShow.innerHTML =
                        ((i / 180) * 80 + 20).toFixed(0) + "%"),
                      this.ish5
                        ? (t.style.opacity =
                            ((i / 180) * 80 + 20).toFixed(0) / 100)
                        : this.fPlayer.setBulletCurtainAlpha(
                            ((i / 180) * 80 + 20).toFixed(0) / 100
                          ));
                },
                dragSpeed: function (e) {
                  var t = this;
                  e.ontouchstart = e.onmousedown = function (e) {
                    e.preventDefault(),
                      (n.ontouchmove = n.onmousemove =
                        function (e) {
                          e.preventDefault(), t.posSpeed(e);
                        }),
                      (n.ontouchend = n.onmouseup =
                        function () {
                          n.ontouchend =
                            n.onmouseup =
                            n.ontouchmove =
                            n.onmousemove =
                              null;
                        });
                  };
                },
                posSpeed: function (e) {
                  var t =
                    $.getMousePos(e).x -
                    c.pageXOffset -
                    $.getPos(this.ccSpeedProgress).left;
                  t < 0
                    ? ((t = 0),
                      (this.ccSpeedPointer.style.left = "0%"),
                      (this.ccSpeedProgress.style.width = "0%"),
                      (this.ccSpeedShow.innerHTML = "50%"))
                    : 180 < t
                    ? ((t = 180),
                      (this.ccSpeedPointer.style.left = "100%"),
                      (this.ccSpeedProgress.style.width = "100%"),
                      (this.ccSpeedShow.innerHTML = "150%"))
                    : ((this.ccSpeedPointer.style.left =
                        ((t / 180) * 100).toFixed(0) + "%"),
                      (this.ccSpeedProgress.style.width =
                        ((t / 180) * 100).toFixed(0) + "%"),
                      (this.ccSpeedShow.innerHTML =
                        ((t / 180) * 100 + 50).toFixed(0) + "%"),
                      (this.barrageDur =
                        ((200 - ((t / 180) * 100 + 50)).toFixed(0) / 100) *
                        4e3));
                },
                ccPopupBarrageTypeEnter: function () {
                  clearTimeout(c.timerBarrageType);
                },
                ccPopupBarrageTypeShowTimer: function () {
                  var e = this;
                  c.timerBarrageType = setTimeout(function () {
                    e.ccPopupBarrageType.style.display = "none";
                  }, 1e3);
                },
                ccPopupBarrageTypeShow: function () {
                  clearTimeout(c.timerBarrageType),
                    "block" == this.ccPopupBarrageType.style.display
                      ? (this.ccPopupBarrageType.style.display = "none")
                      : ((this.ccPopupBarrageType.style.display = "block"),
                        this.ccPopupBarrage.classList.add("cc_none"));
                },
                ccInpTextFocus: function () {
                  this.ccPopupBarrage.classList.remove("cc_none"),
                    (this.ccPopupBarrageType.style.display = "none"),
                    this.ccBarrageTips.classList.add("cc_none");
                },
                ccInpTextBlur: function () {
                  this.showPopupBarrage ||
                    this.ccPopupBarrage.classList.add("cc_none"),
                    "" == this.ccInpText.value &&
                      this.ccBarrageTips.classList.remove("cc_none");
                },
                ccPopupBarrageEnter: function () {
                  clearTimeout(c.timerbarrage), (this.showPopupBarrage = !0);
                },
                ccPopupBarrageOut: function () {
                  this.showPopupBarrage = !1;
                  var e = this;
                  c.timerbarrage = setTimeout(function () {
                    e.ccPopupBarrage.classList.add("cc_none");
                  }, 1e3);
                },
                classListIE: function () {
                  "classList" in n.documentElement ||
                    Object.defineProperty(HTMLElement.prototype, "classList", {
                      get: function () {
                        var a = this;
                        function e(s) {
                          return function (e) {
                            var t = a.className.split(/\s+/g),
                              i = t.indexOf(e);
                            s(t, i, e), (a.className = t.join(" "));
                          };
                        }
                        return {
                          add: e(function (e, t, i) {
                            ~t || e.push(i);
                          }),
                          remove: e(function (e, t) {
                            ~t && e.splice(t, 1);
                          }),
                          toggle: e(function (e, t, i) {
                            ~t ? e.splice(t, 1) : e.push(i);
                          }),
                          contains: function (e) {
                            return !!~a.className.split(/\s+/g).indexOf(e);
                          },
                          item: function (e) {
                            return a.className.split(/\s+/g)[e] || null;
                          },
                        };
                      },
                    });
                },
                getSWF: function (e) {
                  return c.document[e]
                    ? c.document[e]
                    : -1 != navigator.appName.indexOf("Microsoft")
                    ? $.queryEle("#" + e, this.playerContainer)
                    : n.embeds && n.embeds[e]
                    ? n.embeds[e]
                    : void 0;
                },
                createBarrageHTML: function () {
                  if (!n.querySelector(".cc_barrage_container")) {
                    var e = n.createElement("div");
                    (e.className = "cc_barrage_container"),
                      (e.style.width = "100%"),
                      (e.innerHTML = this.barrageHTML()),
                      this.playerContainer.appendChild(e),
                      this.params.disable_barrage_input &&
                        "true" == String(this.params.disable_barrage_input) &&
                        ($.queryEle(
                          ".cc_barrage_form",
                          this.playerContainer
                        ).style.display = "none"),
                      ($.queryEle(
                        ".cc_barrage_container",
                        this.playerContainer
                      ).style.zIndex = this.settingIndex);
                  }
                },
                barrageHTML: function () {
                  return "<div class='cc_mod_barrage'>\t\t<div class='cc_barrage_switch cc_open'>\t\t\t<div class='cc_btn_toggle'>\t\t\t\t<i class='cc_btn_inner'></i>\t\t\t</div>\t\t\t<div class='cc_btn_text'>弹</div>\t\t</div>\t\t<div class='cc_barrage_form cc_barrage_form_nohotbtn'>\t\t\t<div class='cc_barrage_inp cc_barrage_inp_whole'>\t\t\t\t<input type='text' class='cc_inp_text' data-role='input' maxlength='30'>\t\t\t\t<div class='cc_barrage_tips' data-role='input-tips'>一起吐槽吧！</div>\t\t\t</div>\t\t\t<a class='cc_btn_type'>\t\t\t\t<i class='cc_icon cc_icon_type'>\t\t\t\t\t<svg class='cc_svg_icon cc_svg_icon_type' viewBox='0 0 20 20' style='width:20px;height:20px;'>\t\t\t\t\t\t<use xmlns:xlink='http://www.w3.org/1999/xlink' xlink:href='#cc_svg_icon_type'>\t\t\t\t\t\t\t<svg id='cc_svg_icon_type' viewBox='0 0 20 20' width='100%' height='100%'>\t\t\t\t\t\t\t\t<path d='M19.9 13.9c-0.1 0.4-0.3 0.7-0.6 0.7 0 0 0 0 0 0h-0.1c-1 0-1.7 0.8-1.7 1.8 0 0.3 0.2 0.7 0.2 0.7 0.1 0.4 0 0.8-0.3 1l0 0 -1.7 1 0 0c-0.1 0-0.2 0.1-0.3 0.1 -0.2 0-0.5-0.1-0.6-0.3 -0.2-0.2-0.9-0.9-1.4-0.9 -0.5 0-1.2 0.6-1.4 0.9 -0.2 0.2-0.4 0.3-0.6 0.3 -0.1 0-0.2 0-0.3-0.1l0 0 -1.6-1 0 0c-0.3-0.2-0.4-0.7-0.3-1 0 0 0.2-0.4 0.2-0.7 0-1-0.8-1.8-1.7-1.8H7.4c0 0 0 0 0 0 -0.3 0-0.5-0.3-0.6-0.7 0 0-0.1-0.8-0.1-1.4 0-0.6 0.1-1.4 0.1-1.4 0.1-0.4 0.3-0.7 0.6-0.7 0 0 0 0 0 0h0.1c1 0 1.7-0.8 1.7-1.8C9.2 8.3 9 7.9 9 7.9c-0.1-0.4 0-0.8 0.3-1l0 0 1.7-1 0 0c0.1 0 0.2-0.1 0.3-0.1 0.2 0 0.5 0.1 0.6 0.3 0.2 0.2 0.9 0.8 1.4 0.8 0.5 0 1.2-0.6 1.4-0.8 0.2-0.2 0.4-0.3 0.6-0.3 0.1 0 0.2 0 0.3 0.1l0 0 1.7 1 0 0c0.3 0.2 0.4 0.7 0.3 1 0 0-0.2 0.4-0.2 0.7 0 1 0.8 1.8 1.7 1.8h0.1c0 0 0 0 0 0 0.3 0 0.5 0.3 0.6 0.7 0 0 0.1 0.8 0.1 1.4C20 13.1 19.9 13.8 19.9 13.9zM18.1 12.1c-1.4-0.5-2.5-1.9-2.5-3.5 0-0.2 0-0.4 0-0.5l-0.2-0.1c-0.5 0.4-1.3 0.8-2.1 0.8 -0.9 0-1.6-0.4-2.1-0.8L11 8.1c0 0.2 0 0.4 0 0.5 0 1.6-1 3-2.5 3.5 0 0.1 0 0.2 0 0.4 0 0.1 0 0.2 0 0.4 1.4 0.5 2.5 1.9 2.5 3.5 0 0.2 0 0.4 0 0.6l0.2 0.1c0.5-0.4 1.3-0.9 2.2-0.9 0.9 0 1.7 0.5 2.2 0.9l0.2-0.1c0-0.2 0-0.4 0-0.5 0-1.6 1-3 2.5-3.5 0-0.1 0-0.2 0-0.4C18.1 12.4 18.1 12.2 18.1 12.1zM13.3 14.4c-1 0-1.9-0.9-1.9-1.9s0.9-1.9 1.9-1.9 1.9 0.9 1.9 1.9C15.2 13.5 14.4 14.4 13.3 14.4zM13.4 11.8L13.4 11.8c-0.4 0-0.7 0.3-0.7 0.6 0 0.4 0.3 0.6 0.7 0.6s0.7-0.3 0.7-0.6C14 12.1 14 11.8 13.4 11.8zM5.7 12.5C5.7 12.5 5.7 12.5 5.7 12.5l-1.9 0c-0.5 0-1-0.4-1-1 0-0.5 0.4-1 1-1H6c0 0.1-0.1 0.2-0.1 0.3C5.9 10.9 5.7 11.8 5.7 12.5zM8.6 8c0 0.2 0 0.4-0.1 0.6H5.7c-0.5 0-1-0.4-1-1 0-0.5 0.4-1 1-1h2.6c0 0.2 0 0.3 0.1 0.5C8.4 7.2 8.6 7.6 8.6 8zM16 4.9c-0.1-0.1-0.2-0.1-0.4-0.1 -0.3 0-0.5 0.1-0.7 0.3 -0.1 0.1-0.4 0.4-0.6 0.5V3.9H1.9v11.4h6c0.4 0.4 0.7 0.9 0.7 1.6 0 0.1 0 0.2 0 0.3H1.9c-1.1 0-1.9-0.9-1.9-1.9V3.9C0 2.8 0.9 2 1.9 2h12.4c1.1 0 1.9 0.9 1.9 1.9V5L16 4.9 16 4.9z'></path>\t\t\t\t\t\t\t</svg>\t\t\t\t\t\t</use>\t\t\t\t\t</svg>\t\t\t\t</i>\t\t\t</a>\t\t\t<button type='submit' class='cc_btn_submit' data-role='submit'>发表</button>\t\t\t<div class='cc_popup_barrage cc_popup_barrage_type' style='display:none;'>\t\t\t\t<div class='cc_popup_barrage_inner'>\t\t\t\t\t<div class='cc_barrage_settings'>\t\t\t\t\t\t<div class='cc_barrage_settings_title'>滚动速度</div>\t\t\t\t\t\t<div class='cc_barrage_progress'>\t\t\t\t\t\t\t<div class='cc_barrage_progress_bar' data-role='speed'>\t\t\t\t\t\t\t\t<div class='cc_barrage_progress_play cc_speed_progress' style='width: 50%;' data-role='speed-progress'></div>\t\t\t\t\t\t\t\t<div class='cc_barrage_progress_handler cc_speed_pointer' style='left: 50%;' data-role='speed-pointer'></div>\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t<div class='cc_barrage_progress_value cc_speed_show' data-role='speed-show'>100%</div>\t\t\t\t\t\t</div>\t\t\t\t\t</div>\t\t\t\t\t<div class='cc_barrage_settings'>\t\t\t\t\t\t<div class='cc_barrage_settings_title'>不透明度</div>\t\t\t\t\t\t<div class='cc_barrage_progress'>\t\t\t\t\t\t\t<div class='cc_barrage_progress_bar' data-role='alpha'>\t\t\t\t\t\t\t\t<div class='cc_barrage_progress_play cc_alpha_progress' style='width: 100%;' data-role='alpha-progress'></div>\t\t\t\t\t\t\t\t<div class='cc_barrage_progress_handler cc_alpha_pointer' style='left: 100%;' data-role='alpha-pointer'></div>\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t<div class='cc_barrage_progress_value cc_alpha_show' data-role='alpha-show'>100%</div>\t\t\t\t\t\t</div>\t\t\t\t\t</div>\t\t\t\t</div>\t\t\t</div>\t\t\t<div class='cc_popup_barrage cc_none' data-status='0' id='cc_popup_barrage'>\t\t\t\t<div class='cc_popup_barrage_inner' style='height: 100px;'>\t\t\t\t\t<div class='cc_popup_barrage_text'>\t\t\t\t\t\t<div class='cc_barrage_settings' style='width:168px;'>\t\t\t\t\t\t\t<div class='cc_barrage_settings_title'>颜色</div>\t\t\t\t\t\t\t<ul class='cc_barrage_settings_color' data-role='color-list'>\t\t\t\t\t\t\t\t<li class='cc_list_item cc_current'><span style='background-color:#ffffff'></span></li>\t\t\t\t\t\t\t\t<li class='cc_list_item'><span style='background-color:#999999'></span></li>\t\t\t\t\t\t\t\t<li class='cc_list_item'><span style='background-color:#e6151e'></span></li>\t\t\t\t\t\t\t\t<li class='cc_list_item'><span style='background-color:#9d22b1'></span></li>\t\t\t\t\t\t\t\t<li class='cc_list_item'><span style='background-color:#6738b8'></span></li>\t\t\t\t\t\t\t\t<li class='cc_list_item'><span style='background-color:#3d50b6'></span></li>\t\t\t\t\t\t\t\t<li class='cc_list_item'><span style='background-color:#03a9f4'></span></li>\t\t\t\t\t\t\t\t<li class='cc_list_item'><span style='background-color:#009688'></span></li>\t\t\t\t\t\t\t\t<li class='cc_list_item'><span style='background-color:#259b24'></span></li>\t\t\t\t\t\t\t\t<li class='cc_list_item'><span style='background-color:#8bc34a'></span></li>\t\t\t\t\t\t\t</ul>\t\t\t\t\t\t</div>\t\t\t\t\t</div> \t\t\t\t</div>\t\t\t</div>\t\t</div>\t</div>";
                },
              }),
                (c.CCPlayerBarrage = function (e, t, i, s, a, r, n, o) {
                  var l = new d(e, t, i, s, a, r, n, o);
                  return {
                    init: function () {
                      l.init();
                    },
                    startShowBarrage: function () {
                      l.startShowBarrage();
                    },
                    openBarrage: function (e, t, i) {
                      l.openBarrage(e, t, i);
                    },
                    sendBarrage: function (e, t, i, s) {
                      l.sendBarrage(e, t, i, s);
                    },
                    destroy: function () {
                      for (var e in l.intervals) c.clearInterval(e);
                    },
                  };
                });
            }
          })(window),
          (window.CC_Base64 = Z),
          (function (i) {
            if ("function" != typeof CCH5PlayerTrack) {
              var r = function r(e, t, i, s) {
                (this.playerApi = e),
                  (this.params = t),
                  (this.parentEle = i),
                  (this.version = s),
                  (this.videoData = {
                    loadStartCount: 0,
                    isWaiting: !1,
                    isChangeURL: !1,
                  }),
                  (this.ccTrack = null),
                  (this.heartTimer = null),
                  (this.blockData = {}),
                  (this.blockTimes = 0),
                  (this.timerCount = 0),
                  (this.isReportedPlaySucc = !1);
              };
              (r.prototype = {
                constructor: r,
                initEvent: function () {
                  this.registerVideoListener();
                },
                initTrack: function () {
                  if (!this.ccTrack)
                    try {
                      if (i.ccTrack) {
                        var t = {
                          appver: this.version,
                          business: "1001",
                          userid: this.params.clientUserId,
                          appid: this.params.siteid,
                        };
                        (this.ccTrack = i.ccTrack), this.ccTrack.init(t);
                      }
                    } catch (e) {}
                },
                registerVideoListener: function () {
                  var n = this;
                  this.playerApi.registerVideoEvent("progress", function () {
                    var e = n.playerApi.getVideoBuffered();
                    if (
                      e &&
                      !(e && e.length < 1) &&
                      !(e.end(0) < 1 || (n.heartBeat(), n.isReportedPlaySucc))
                    ) {
                      n.isReportedPlaySucc = !0;
                      var t = n.playerApi.getCurrentCopy().playurl;
                      n.sendStartPlayState({
                        code: 200,
                        cdn: $.getUrlDomain(t),
                      });
                    }
                  }),
                    this.playerApi.registerVideoEvent("error", function (e) {
                      if (
                        (n.stopHeartBeat(), !(!n.videoData.loadStartCount <= 1))
                      ) {
                        var t = "未知错误";
                        if (e.target.error) {
                          if (e.target.error && e.target.error.code)
                            switch (e.target.error.code) {
                              case e.target.error.MEDIA_ERR_ABORTED:
                                t = "客户端主动终止视频加载";
                                break;
                              case e.target.error.MEDIA_ERR_NETWORK:
                                t = "播放过程中视频加载失败";
                                break;
                              case e.target.error.MEDIA_ERR_DECODE:
                                t = "解码错误";
                                break;
                              case e.target.error.MEDIA_ERR_SRC_NOT_SUPPORTED:
                                t = "服务器端视频资源不存在";
                                break;
                              default:
                                t = "未知错误";
                            }
                          if (!n.isReportedPlaySucc) {
                            var i = n.playerApi.getCurrentCopy().playurl;
                            n.sendStartPlayState({
                              code: 401,
                              cdn: $.getUrlDomain(i),
                              data: {
                                msg: t,
                                responseData: n.playerApi.getApiResponseData(),
                              },
                            });
                          }
                        }
                      }
                    }),
                    this.playerApi.registerVideoEvent("waiting", function (e) {
                      if (n.isReportedPlaySucc && !n.videoData.isChangeURL) {
                        var t = n.playerApi.getLastVideoTime(),
                          i = n.playerApi.getCurrentTime(),
                          s = n.playerApi.getTotalTime(),
                          a = i - t;
                        if (!((i <= 0 && s <= t) || 1 < a || a < -1)) {
                          (n.videoData.isWaiting = !0),
                            (n.blockData[++n.blockTimes] = {
                              start: new Date().getTime(),
                            });
                          for (var r = 1; r < n.blockTimes; r++)
                            n.blockData[r].start &&
                              !n.blockData[r].end &&
                              (n.blockData[r].end = new Date().getTime());
                        }
                      }
                    }),
                    this.playerApi.registerVideoEvent("playing", function (e) {
                      n.isReportedPlaySucc && n.setBlockEndTime(),
                        (n.videoData.isWaiting = !1),
                        (n.videoData.isChangeURL = !1);
                    }),
                    this.playerApi.registerVideoEvent("pause", function (e) {
                      n.setBlockEndTime(), (n.videoData.isWaiting = !1);
                    }),
                    this.playerApi.registerVideoEvent(
                      "loadstart",
                      function (e) {
                        n.videoData.loadStartCount++,
                          n.isReportedPlaySucc &&
                            (n.videoData.isChangeURL = !0);
                      }
                    );
                  var e = this.playerApi.getCurrentCopy().playurl;
                  (-1 < e.indexOf(".mp4") || -1 < e.indexOf(".mp3")) &&
                    this.handleCanplay();
                },
                handleCanplay: function () {
                  var i = this;
                  this.playerApi.registerVideoEvent("canplay", function (e) {
                    if (!i.isReportedPlaySucc) {
                      var t = i.playerApi.getCurrentCopy().playurl;
                      (i.isReportedPlaySucc = !0),
                        i.sendStartPlayState({
                          code: 200,
                          cdn: $.getUrlDomain(t),
                        });
                    }
                  });
                },
                setBlockEndTime: function () {
                  this.videoData.isWaiting &&
                    this.blockData[this.blockTimes] &&
                    this.blockData[this.blockTimes].start &&
                    (this.blockData[this.blockTimes].end =
                      new Date().getTime());
                },
                sendStartPlayState: function (t) {
                  this.initTrack();
                  var i = this.playerApi.getPlayStartTime(),
                    s = {
                      event: "play",
                      vid: this.params.vid,
                      nodeip: "",
                      retry: 0,
                      et: new Date().getTime() - i,
                    };
                  s = (0, h["default"])({}, s, t);
                  try {
                    this.ccTrack.tragger(s);
                  } catch (e) {}
                },
                stopHeartBeat: function () {
                  this.heartTimer && clearInterval(this.heartTimer),
                    (this.heartTimer = null);
                },
                heartBeat: function () {
                  if (!this.heartTimer) {
                    var c = this;
                    this.heartTimer = setInterval(function () {
                      c.timerCount++;
                      for (
                        var t = c.playerApi.getCurrentCopy().playurl,
                          i = c.playerApi.getVideostate(),
                          s = c.blockData,
                          a = 0,
                          r = c.blockTimes,
                          n = 1;
                        n <= r;
                        n++
                      ) {
                        a += s[n].end
                          ? s[n].end - s[n].start
                          : new Date().getTime() - s[n].start;
                      }
                      6e4 < a ? (a = 6e4) : a < 0 && (a = 0);
                      var o = {
                        event: "heartbeat",
                        vid: c.params.vid,
                        retry: 0,
                        code: 200,
                        cdn: $.getUrlDomain(t),
                        heartinter: 60,
                        num: c.timerCount,
                        playerstatus: i ? 0 : 1,
                        blocktimes: c.blockTimes,
                        blockduration: a,
                      };
                      try {
                        this.ccTrack.tragger(o);
                      } catch (e) {}
                      (c.blockTimes = 0), (c.blockData = {});
                      var l = c.playerApi.getVideostate();
                      c.videoData.isWaiting &&
                        !l &&
                        ((c.blockTimes = 1),
                        (c.blockData[c.blockTimes] = {
                          start: new Date().getTime(),
                        }));
                    }, 6e4);
                  }
                },
                getIsReportedPlaySucc: function () {
                  return this.isReportedPlaySucc;
                },
                setReportedPlaySucc: function () {
                  this.isReportedPlaySucc = !0;
                },
              }),
                (i.CCH5PlayerTrack = function (e, t, i, s) {
                  var a = new r(e, t, i, s);
                  return {
                    initEvent: function () {
                      a.initEvent();
                    },
                    sendStartPlayState: function (e) {
                      a.sendStartPlayState(e);
                    },
                    destroy: function () {
                      a.heartTimer &&
                        (clearInterval(a.heartTimer),
                        (a.heartTimer = null),
                        (a.blockData = {}),
                        (a.blockTimes = 0));
                    },
                    getIsReportedPlaySucc: function () {
                      return a.getIsReportedPlaySucc();
                    },
                    setReportedPlaySucc: function () {
                      a.setReportedPlaySucc();
                    },
                  };
                });
            }
          })(window);
        var u,
          y,
          m,
          f,
          v,
          g,
          P,
          A,
          E,
          w,
          x,
          T,
          b,
          S,
          C,
          k,
          B,
          I,
          L,
          $ = {
            isPlayerDomin: function (e) {
              return (
                -1 !== e.indexOf("http://union.bokecc.com/player") ||
                -1 !== e.indexOf("http://p.bokecc.com/player") ||
                -1 !== e.indexOf("https://union.bokecc.com/player") ||
                -1 !== e.indexOf("https://p.bokecc.com/player")
              );
            },
            addBrowseStyle: function () {
              if (!document.querySelector(".ccH5videoStyleTag"))
                try {
                  var t =
                      document.getElementsByTagName("head")[0] ||
                      document.documentElement,
                    i = document.createElement("style");
                  i.classList.add("ccH5videoStyleTag"),
                    (i.innerHTML =
                      "body .uc-video-toolbar{display:none !important;}"),
                    t.appendChild(i);
                } catch (e) {}
            },
            isCustomFunction: function (e) {
              return -1 < ["479645DF56640DE7", "8AFF601CCB8448F7"].indexOf(e);
            },
            isSougou: function () {
              return -1 < navigator.userAgent.indexOf("MetaSr");
            },
            isLieBao: function () {
              return -1 < navigator.userAgent.indexOf("LBBROWSER");
            },
            isTV08: function () {
              return -1 < navigator.userAgent.indexOf("YC-3N");
            },
            isTV04: function () {
              return (
                /(iPad; CPU OS 5_0_1 like Mac OS X)/i.test(
                  navigator.userAgent
                ) ||
                /Chrome\/30\.0\.0\.0 Safari\/537\.36/i.test(navigator.userAgent)
              );
            },
            isXiaoMi: function () {
              return -1 < navigator.userAgent.indexOf("MiuiBrowser");
            },
            isHuaWei: function () {
              return -1 < navigator.userAgent.toLowerCase().indexOf("huawei");
            },
            isUC: function () {
              return -1 < navigator.userAgent.indexOf("UCBrowser");
            },
            isDingTalk: function () {
              return -1 < navigator.userAgent.indexOf("DingTalk");
            },
            isQQ: function () {
              return -1 < navigator.userAgent.indexOf("MQQBrowser");
            },
            isWeixin: function () {
              return -1 < navigator.userAgent.indexOf("MicroMessenger");
            },
            isIE: function () {
              return !!window.ActiveXObject || "ActiveXObject" in window;
            },
            isIPad: function () {
              return null != navigator.userAgent.match(/iPad/i);
            },
            isIPhone: function (e) {
              return (
                !!(
                  e &&
                  e.isCustomedUA + "" == "true" &&
                  -1 < navigator.userAgent.indexOf("iOS")
                ) || null != navigator.userAgent.match(/iPhone/i)
              );
            },
            isAndroid: function () {
              return null != navigator.userAgent.match(/Android/i);
            },
            isAndroid2: function () {
              return null != navigator.userAgent.match(/Android 2/i);
            },
            isSymbianOS: function () {
              return null != navigator.userAgent.match(/SymbianOS/i);
            },
            isWindowsPhoneOS: function () {
              return null != navigator.userAgent.match(/Windows Phone/i);
            },
            isMoble: function () {
              return /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i.test(
                navigator.userAgent
              );
            },
            safariInfo: function () {
              return navigator.userAgent
                .toLowerCase()
                .match(/version\/([\d.]+).*safari/);
            },
            isSafari: function () {
              var e = navigator.userAgent.toLowerCase();
              return /safari/.test(e) && !/chrome/.test(e);
            },
            isWin: function () {
              return -1 != navigator.platform.indexOf("Win");
            },
            is360: function () {
              var e = navigator.userAgent;
              return (
                -1 < e.indexOf("QihooBrowser") || -1 < e.indexOf("QHBrowser")
              );
            },
            get_android_version: function () {
              var e = navigator.userAgent.toLowerCase(),
                t = null;
              if (0 < e.indexOf("android")) {
                (t = (e.match(/android [\d._]+/gi) + "")
                  .replace(/[^0-9|_.]/gi, "")
                  .replace(/_/gi, ".")),
                  (t = parseInt(t.split(".")[0]));
              }
              return t;
            },
            canFunScreen: function () {
              return (
                !(
                  this.isWeixin() &&
                  this.isAndroid() &&
                  (0 < navigator.userAgent.indexOf("Redmi") ||
                    navigator.userAgent.match(
                      /Linux; Android \d; MI \d Explorer /
                    ))
                ) &&
                (!this.isXiaoMi() || !this.isAndroid()) &&
                (this.isAndroid() ||
                  this.isIPhone() ||
                  this.isIPad() ||
                  this.isWindowsPhoneOS())
              );
            },
            getParam: function (e) {
              for (
                var t = e.split("&"), i = { mediatype: 1 }, s = 0;
                s < t.length;
                s += 1
              ) {
                var a = t[s].split("=");
                i[(a[0] + "").replace(/(^\s*)|(\s*$)/g, "")] = a[1];
              }
              return i;
            },
            getUserAgent: function () {
              var e = navigator.userAgent.match(
                  /MSIE|Firefox|iPad|iPhone|Android|SymbianOS/
                ),
                t = navigator.userAgent.match(/Windows Phone/);
              return "Windows Phone" == t && (e = t), e || "other";
            },
            isByReplaced: function () {
              return (
                this.isMoble() &&
                this.isWeixin() &&
                /(v1[8|9]\d+|vivo)/i.test(navigator.userAgent)
              );
            },
            isRealtimePlay: function (e) {
              return 1 == e.originalplay && 2 == e.status;
            },
            isAudioPlay: function (e, t) {
              if (2 == e.mediatype) return !0;
              for (var i = 0; i < t.copies.length; i++)
                if (2 != t.copies[i].mediatype) return !1;
              return !0;
            },
            getAudioSrc: function (e) {
              var t = [];
              return (
                e.copies.forEach(function (e) {
                  2 == e.mediatype && t.push(e);
                }),
                0 === t.length ? "" : t[0].playurl.replace(/http:/i, "https:")
              );
            },
            getImgSrc: function (e, t) {
              return e.img_path
                ? e.img_path
                : (this.isRealtimePlay(t), t.img.replace(/http:/i, "https:"));
            },
            getCross: function (e, t) {
              return this.isRealtimePlay(t) ? "" : "anonymous";
            },
            checkFlash: function () {
              var t = !0;
              if (this.isIE())
                try {
                  new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
                } catch (e) {
                  t = !1;
                }
              else navigator.plugins["Shockwave Flash"] || (t = !1);
              return t;
            },
            isCanPlayDomain: function (e) {
              if ("undefined" == typeof e.H5domain) return !0;
              var t = window.location.host;
              -1 < String(t).indexOf(":") && (t = String(t).split(":")[0]);
              var i = e.H5domain.blacklist,
                s = e.H5domain.whitelist;
              if (i && 0 < i.length) {
                var a = !0,
                  r = !1,
                  n = undefined;
                try {
                  for (
                    var o, l = (0, X["default"])(i);
                    !(a = (o = l.next()).done);
                    a = !0
                  ) {
                    var c = o.value;
                    if (String(t).length > c.length) {
                      if (String(t).endsWith("." + c.toLowerCase())) return !1;
                    } else if (
                      String(t).length == c.length &&
                      String(t) == c.toLowerCase()
                    )
                      return !1;
                  }
                } catch (m) {
                  (r = !0), (n = m);
                } finally {
                  try {
                    !a && l["return"] && l["return"]();
                  } finally {
                    if (r) throw n;
                  }
                }
                return !0;
              }
              if (s && 0 < s.length) {
                var d = !0,
                  h = !1,
                  u = undefined;
                try {
                  for (
                    var p, y = (0, X["default"])(s);
                    !(d = (p = y.next()).done);
                    d = !0
                  ) {
                    c = p.value;
                    if (String(t).length > c.length) {
                      if (String(t).endsWith("." + c.toLowerCase())) return !0;
                    } else if (
                      String(t).length == c.length &&
                      String(t) == c.toLowerCase()
                    )
                      return !0;
                  }
                } catch (m) {
                  (h = !0), (u = m);
                } finally {
                  try {
                    !d && y["return"] && y["return"]();
                  } finally {
                    if (h) throw u;
                  }
                }
                return !1;
              }
              return !0;
            },
            createTips: function (e, t, i) {
              var s = e.height;
              isNaN(e.height) || (s = e.height + "px");
              var a = "";
              if (
                i &&
                i.text &&
                ((a =
                  "<a class='ccH5TipBtn' href='javascript:;'>" +
                  i.text +
                  "</a>"),
                i.url)
              ) {
                var r = i.target || "_blank";
                (r = $.isIPhone() && $.is360() ? "" : "target=" + r),
                  (a =
                    "<a class='ccH5TipBtn' href='" +
                    i.url +
                    "' " +
                    r +
                    ">" +
                    i.text +
                    "</a>");
              }
              return (
                "<div style='width: 100%; height:" +
                s +
                "; background: #000;color: #fff; text-align: center; font-size: 18px; display:table;'>   <div style='display:table-cell; vertical-align: middle;'>   <span id='pcmTips' class='ccH5TipText'>" +
                t +
                "</span>" +
                a +
                "   </div></div>"
              );
            },
            imgLoad: function (e, t) {
              var i = document.createElement("img");
              i.src = e;
              var s = setInterval(function () {
                i.complete && (void 0 !== t && t(i), clearInterval(s));
              }, 50);
            },
            timeFormat: function (e) {
              isNaN(e) && (e = 0);
              var t,
                i,
                s,
                a = parseInt(e);
              return (
                (t = (t = Math.floor(a / 3600)) ? t + ":" : "") +
                (i =
                  9 < (i = t ? Math.floor((a % 3600) / 60) : Math.floor(a / 60))
                    ? i
                    : "0" + i) +
                ":" +
                (s = 9 < (s = Math.floor(a % 60)) ? s : "0" + s)
              );
            },
            addCssByStyle: function (e, t) {
              var i = document,
                s = i.createElement("style");
              s.setAttribute("type", "text/css"), (s.id = t || "ccVttStyle");
              var a = i.createTextNode(e);
              s.appendChild(a);
              var r = i.getElementsByTagName("head");
              r.length ? r[0].appendChild(s) : i.documentElement.appendChild(s);
            },
            getPos: function (t) {
              if (t.getBoundingClientRect) {
                var i = t.getBoundingClientRect();
                return { left: i.left, top: i.top };
              }
              for (
                var s = e.offsetLeft, a = e.offsetTop;
                (e = e.offsetParent);

              )
                (s += e.offsetLeft), (a += e.offsetTop);
              return { left: s, top: a };
            },
            getMousePos: function (e, t) {
              var i = "ontouchstart" in window,
                s = 0,
                a = 0,
                r = document.documentElement,
                n = document.body;
              if (
                ((e = e || window.event),
                (a = window.pageYoffset
                  ? ((s = window.pageXOffset), window.pageYOffset)
                  : ((s =
                      ((r && r.scrollLeft) || (n && n.scrollLeft) || 0) -
                      ((r && r.clientLeft) || (n && n.clientLeft) || 0)),
                    ((r && r.scrollTop) || (n && n.scrollTop) || 0) -
                      ((r && r.clientTop) || (n && n.clientTop) || 0))),
                i &&
                  e.touches &&
                  (this.isIPad() || this.isAndroid() || this.isIPhone(t)) &&
                  !this.isTV08())
              ) {
                var o = e.touches.item(0);
                (s = o.pageX), (a = o.pageY);
              } else (s += e.clientX), (a += e.clientY);
              return { x: s, y: a };
            },
            ajax: function (e) {
              var t = e.url || "",
                i = e.data || {},
                s = e.ops || {},
                a = (e.type || "GET").toUpperCase();
              (s.dataType = s.dataType || "json"),
                (s.async = s.async || !0),
                (s.token = s.token || "");
              var r = void 0;
              if (
                (((r = window.XMLHttpRequest
                  ? new XMLHttpRequest()
                  : new ActiveXObject("Microsoft.XMLHTTP")).onreadystatechange =
                  function () {
                    if (4 === r.readyState) {
                      var e = r.status;
                      200 <= e && e < 300
                        ? s.success && s.success(r.responseText, r.responseXML)
                        : s.fail && s.fail(e);
                    }
                  }),
                "GET" === a)
              ) {
                var n = this.formatParams(i);
                r.open("GET", t + "?" + n, s.async),
                  r.setRequestHeader(
                    "Content-Type",
                    "application/x-www-form-urlencoded"
                  ),
                  s.token && r.setRequestHeader("Authorization", s.token),
                  r.send(null);
              } else if ("POST" === a) {
                var o = new FormData();
                for (var l in i) o.append(l, i[l]);
                r.open("POST", t, s.async),
                  s.token && r.setRequestHeader("Authorization", s.token),
                  r.send(o);
              }
            },
            formatParams: function (e) {
              var t = [];
              for (var i in e)
                t.push(encodeURIComponent(i) + "=" + encodeURIComponent(e[i]));
              return t.join("&");
            },
            ccJsonp: function (t) {
              var a = t.url,
                i = t.data,
                s = t.success,
                r = t.error,
                n = t.timeOut,
                o = !1;
              if (
                "object" === (void 0 === i ? "undefined" : (0, Y["default"])(i))
              ) {
                var l = [];
                for (var c in i) l.push(c + "=" + encodeURIComponent(i[c]));
                a =
                  -1 < a.indexOf("?")
                    ? a + "&" + l.join("&")
                    : a + "?" + l.join("&");
              }
              var d = s;
              "function" == typeof s &&
                ((d = this.getRandomWinFuncName("cc_jsonp_callback")),
                (window[d] = function (e) {
                  (o = !0), s(e);
                  try {
                    delete window[d + ""];
                  } catch (t) {
                    console.log(t);
                  }
                }));
              var h = new Date().getTime();
              setTimeout(function () {
                var i =
                    document.getElementsByTagName("head")[0] ||
                    document.documentElement,
                  s = document.createElement("script");
                (s.src = a + "&callback=" + d + "&r=" + 1e7 * Math.random()),
                  (s.onload = s.onreadystatechange =
                    function (e) {
                      (this.readyState &&
                        !/loaded|complete/.test(s.readyState)) ||
                        ((o = !0),
                        (s.onload = s.onreadystatechange = null),
                        i && s.parentNode && i.removeChild(s));
                      var t = new Date().getTime();
                      window.playApiTime = Math.floor(t - h);
                    }),
                  (s.onerror = function () {
                    o || ((o = !0), r && r());
                  }),
                  n &&
                    "number" == typeof n &&
                    setTimeout(function () {
                      try {
                        delete window[d + ""];
                      } catch (e) {
                        console.log(e);
                      }
                      o || ((o = !0), r && r("timeOut")),
                        i && s.parentNode && i.removeChild(s);
                    }, n);
                try {
                  i.insertBefore(s, i.firstChild);
                } catch (e) {
                  console.error(e);
                }
              }, 0);
            },
            getRandomWinFuncName: function (e) {
              for (
                var t = e + "_" + parseInt(1e6 * Math.random());
                "undefined" != typeof window[t];

              )
                t = e + "_" + parseInt(1e6 * Math.random());
              return t;
            },
            stringFormat: function (e) {
              var t = [];
              2 == arguments.length && arguments[1] instanceof Array
                ? (t = arguments[1])
                : 1 < arguments.length &&
                  (t = Array.prototype.slice.apply(arguments).slice(1));
              for (var i = 0; i < t.length; i++)
                e = e.replace("{" + i + "}", t[i]);
              return (e = e.replace(/\{\d+\}/g, ""));
            },
            unifyApiMethods: function () {
              "function" != typeof String.prototype.endsWith &&
                (String.prototype.endsWith = function (e) {
                  return -1 !== this.indexOf(e, this.length - e.length);
                });
            },
            invokeWindow: function (t) {
              if ("function" == typeof window[t])
                try {
                  return window[t].apply(
                    window,
                    Array.prototype.slice.call(arguments, 1)
                  );
                } catch (e) {
                  console.error(e);
                }
              return null;
            },
            isFlashPlay: function (e) {
              return (
                !(
                  !$.isWin() ||
                  !$.isSafari() ||
                  $.isIPhone() ||
                  this.isIPad()
                ) ||
                ($.isIE()
                  ? !(9 <= $.IEVersion() && 1 == e)
                  : !(
                      this.isAndroid() ||
                      1 == e ||
                      this.isIPad() ||
                      $.isWindowsPhoneOS() ||
                      this.isIPhone()
                    ))
              );
            },
            checkH5Play: function (e, s, n) {
              if (0 == s.status || 21 == s.status)
                return {
                  error: "抱歉，视频服务出现异常，请联系网站管理员",
                  failReason: CCH5PlayerStatistic.PLAY_FAIL_REASONS.VIDEO_ERROR,
                };
              if (2 == s.status && !this.isRealtimePlay(s))
                return {
                  error: "视频处理中……",
                  failReason: CCH5PlayerStatistic.PLAY_FAIL_REASONS.VIDEO_DOING,
                };
              if (4 == s.status)
                return {
                  error: "抱歉，网络连接失败，请刷新重试或联系网站管理员。",
                  failReason: CCH5PlayerStatistic.PLAY_FAIL_REASONS.NET_ERROR,
                };
              if (5 == s.status)
                return {
                  error: "抱歉，视频正在上传中，请耐心等待",
                  failReason: CCH5PlayerStatistic.PLAY_FAIL_REASONS.VIDEO_DOING,
                };
              if (6 == s.status)
                return {
                  error: s.opreason || "视频已删除",
                  failReason: CCH5PlayerStatistic.PLAY_FAIL_REASONS.VIDEO_ERROR,
                };
              if (7 == s.status)
                return {
                  error: "视频转码失败",
                  failReason: CCH5PlayerStatistic.PLAY_FAIL_REASONS.VIDEO_ERROR,
                };
              if (8 == s.status || 9 == s.status || 10 == s.status)
                return {
                  error: "参数错误，视频资源加载失败",
                  failReason: CCH5PlayerStatistic.PLAY_FAIL_REASONS.VIDEO_ERROR,
                };
              if (1 != s.status && 2 != s.status)
                return {
                  error: "抱歉，暂不支持本设备，请选择其他设备观看",
                  failReason: CCH5PlayerStatistic.PLAY_FAIL_REASONS.VIDEO_ERROR,
                };
              var a = this;
              return this.isCanPlayDomain(s)
                ? (function t() {
                    return (
                      1 == s.status &&
                      ".pcm" ==
                        (function r(e, t) {
                          var i = n,
                            s = i.lastIndexOf("."),
                            a = i.length;
                          return i.substring(s, a).substring(e, t);
                        })(0, 4)
                    );
                  })()
                  ? {
                      error: "此视频已加密，请在其他设备上观看",
                      failReason:
                        CCH5PlayerStatistic.PLAY_FAIL_REASONS.AUTH_ERROR,
                    }
                  : (function r() {
                      var e =
                        20 != s.safeLevel &&
                        0 <= navigator.userAgent.indexOf("Firefox") &&
                        a.isM3u8Url(n) &&
                        a.isAndroid();
                      if (a.isDingTalk()) return !1;
                      var t =
                          (a.isAndroid() || a.isIPad()) &&
                          a.isQQ() &&
                          !a.isWeixin() &&
                          1 == s.disableQQ,
                        i =
                          (a.isAndroid() || a.isIPad()) &&
                          a.isUC() &&
                          1 == s.disableUC;
                      return (
                        (a.isXiaoMi() && 1 == s.disableXiaoMi) || i || t || e
                      );
                    })()
                  ? {
                      error: "请切换其他浏览器观看视频",
                      failReason:
                        CCH5PlayerStatistic.PLAY_FAIL_REASONS.VIDEO_DISABLE,
                    }
                  : null
                : {
                    error: "当前域名未获得播放授权",
                    failReason:
                      CCH5PlayerStatistic.PLAY_FAIL_REASONS.AUTH_ERROR,
                  };
            },
            loadScript: function (e, t) {
              (this.loadJsArr = {}), "string" == typeof e && (e = [e]);
              for (var i = 0; i < e.length; i++) this.loadJsArr[e[i]] = 0;
              var s = this;
              !(function a() {
                s.getScript(e.shift(), function () {
                  e.length ? a() : t && t();
                });
              })();
            },
            getScript: function (e, t) {
              var i = document.createElement("script");
              i.src = e;
              var s = !1;
              (i.onload = i.onreadystatechange =
                function () {
                  s ||
                    (this.readyState &&
                      "loaded" != this.readyState &&
                      "complete" != this.readyState) ||
                    ((s = !0), t && t());
                }),
                document.body.appendChild(i);
            },
            loadCss: function (e, t) {
              var i = document.createElement("link");
              (i.href = e), (i.rel = "stylesheet");
              var s = !(i.type = "text/css");
              (i.onload = i.onreadystatechange =
                function () {
                  s ||
                    (this.readyState &&
                      "loaded" != this.readyState &&
                      "complete" != this.readyState) ||
                    ((s = !0), t && t());
                }),
                document.body.appendChild(i);
            },
            createFlashView: function (e) {
              var t = "",
                i = "";
              e.img_path &&
                ((t =
                  "<param name='flashvars' value='img_path=" +
                  e.img_path +
                  "' />"),
                (i = " flashvars='img_path=" + e.img_path + "'"));
              var s = "https://p.bokecc.com/flash";
              e.listid
                ? (s =
                    s +
                    ("/list/" +
                      e.siteid +
                      "_" +
                      e.listid +
                      "_list_" +
                      e.autoStart +
                      "_" +
                      e.playerid +
                      "_" +
                      e.playertype) +
                    "/player.swf")
                : (s =
                    s +
                    "/player.swf" +
                    ("?vid=" +
                      e.vid +
                      "&siteid=" +
                      e.siteid +
                      "&playerid=" +
                      e.playerid +
                      "&playertype=" +
                      e.playertype +
                      "&autoStart=" +
                      e.autoStart +
                      "&mediatype=" +
                      e.mediatype));
              return (
                "<object classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000' codebase='http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,0,0' width='" +
                e.width +
                "' height='" +
                e.height +
                "' id='cc_" +
                e.vid +
                "'><param name='movie' value='" +
                s +
                "' /><param value='transparent' name='wmode' /><param name='allowFullScreen' value='true' /><param name='allowScriptAccess' value='always' />" +
                t +
                "<embed src='" +
                s +
                "' width='" +
                e.width +
                "' height='" +
                e.height +
                "' name='cc_" +
                e.vid +
                "' wmode='transparent' allowFullScreen='true' allowScriptAccess='always' pluginspage='http://www.macromedia.com/go/getflashplayer' " +
                i +
                "type='application/x-shockwave-flash'/></object>"
              );
            },
            createFlashInstallTip: function (e) {
              return (
                "<div style='width: 100%; background: #000; color: #fff; text-align: center; font-size: 18px;'>   <div style='line-height:" +
                e.height +
                "px;'>   <span style='font-size:18px'>" +
                decodeURIComponent(
                  "%E6%82%A8%E8%BF%98%E6%B2%A1%E6%9C%89%E5%AE%89%E8%A3%85flash%E6%92%AD%E6%94%BE%E5%99%A8%EF%BC%8C%E8%AF%B7%E7%82%B9%E5%87%BB"
                ) +
                "<a style='color:#06a7e1' href='http://www.adobe.com/go/getflash' target='_blank'>" +
                decodeURIComponent("%E8%BF%99%E9%87%8C") +
                "</a>" +
                decodeURIComponent("%E5%AE%89%E8%A3%85") +
                "</span>   </div></div>"
              );
            },
            addListener: function (e, t, i) {
              e &&
                ((e.getAttribute && e.getAttribute("data-has-bind-" + t)) ||
                  (e.addEventListener(t, i, !1),
                  e.getAttribute && e.setAttribute("data-has-bind-" + t, !0)));
            },
            queryEle: function (e, t) {
              return t.querySelector(e);
            },
            queryEleAll: function (e, t) {
              return t.querySelectorAll(e);
            },
            getPlayerScript: function () {
              for (
                var e = document.getElementsByTagName("script"), t = 0;
                t < e.length;
                t += 1
              ) {
                var i = e[t];
                if (this.isPlayerDomin(i.src)) return i;
              }
              return null;
            },
            preventEvent: function (e) {
              try {
                e.preventDefault && e.preventDefault();
              } catch (t) {}
              try {
                e.stopPropagation && e.stopPropagation();
              } catch (t) {}
            },
            getAdSrc: function (e, t, i) {
              return (
                "https://imedia.bokecc.com/servlet/mobile/clickstats?adid=" +
                e +
                "&clickurl=" +
                encodeURIComponent(t) +
                "&materialid=" +
                i
              );
            },
            IEVersion: function () {
              var e = navigator.userAgent,
                t = -1 < e.indexOf("compatible") && -1 < e.indexOf("MSIE"),
                i =
                  (e.indexOf("Edge"),
                  -1 < e.indexOf("Trident") && -1 < e.indexOf("rv:11.0"));
              if (t) {
                new RegExp("MSIE (\\d+\\.\\d+);").test(e);
                var s = parseFloat(RegExp.$1);
                return 7 === s
                  ? 7
                  : 8 === s
                  ? 8
                  : 9 === s
                  ? 9
                  : 10 === s
                  ? 10
                  : 6;
              }
              return i ? 11 : -1;
            },
            getUrlDomain: function (e) {
              if (e) {
                var t = e.split("/");
                if (t[2]) return t[2];
              }
              return "";
            },
            numberIsNaN: function (e) {
              return "number" == typeof e && window.isNaN(e);
            },
            copyContent: function (e, t) {
              var i = document.createElement("textarea");
              (i.style.position = "fixed"),
                (i.style.top = 0),
                (i.style.left = 0),
                (i.style.width = "2em"),
                (i.style.height = "2em"),
                (i.style.padding = 0),
                (i.style.border = "none"),
                (i.style.outline = "none"),
                (i.style.boxShadow = "none"),
                (i.style.background = "transparent"),
                (i.value = e),
                document.body.appendChild(i),
                i.select();
              var s = !!document.execCommand("copy");
              document.body.removeChild(i), "function" == typeof t && t(s);
            },
            getOSAndBrowser: function () {
              var e = navigator.platform,
                t = navigator.userAgent,
                i = "",
                s = "";
              return (
                -1 < e.indexOf("Win")
                  ? -1 < t.indexOf("Windows NT 5.0")
                    ? (i += "Windows 2000")
                    : -1 < t.indexOf("Windows NT 5.1")
                    ? (i += "Windows XP")
                    : -1 < t.indexOf("Windows NT 5.2")
                    ? (i += "Windows 2003")
                    : -1 < t.indexOf("Windows NT 6.0")
                    ? (i += "Windows Vista")
                    : -1 < t.indexOf("Windows NT 6.1") ||
                      -1 < t.indexOf("Windows 7")
                    ? (i += "Windows 7")
                    : -1 < t.indexOf("Windows NT 6.2") ||
                      -1 < t.indexOf("Windows NT 6.3") ||
                      -1 < t.indexOf("Windows 8")
                    ? (i += "Windows 8")
                    : -1 < t.indexOf("Windows NT 6.4") ||
                      -1 < t.indexOf("Windows NT 10")
                    ? (i += "Windows 10")
                    : (i += "Other")
                  : -1 < e.indexOf("Mac")
                  ? (i += "Mac")
                  : -1 < e.indexOf("X11")
                  ? (i += "Unix")
                  : -1 < e.indexOf("Linux")
                  ? (i += "Linux")
                  : (i += "Other"),
                (i += "/"),
                /[Ff]irefox(\/\d+\.\d+)/.test(t)
                  ? (i += (s = /([Ff]irefox)\/(\d+\.\d+)/.exec(t))[1] + s[2])
                  : /[Tt]rident(\/\d+\.\d+)/.test(t)
                  ? ("7.0" === (s = /([Tt]rident)\/(\d+\.\d+)/.exec(t))[2]
                      ? (s[2] = "11")
                      : "6.0" === s[2]
                      ? (s[2] = "10")
                      : "5.0" === s[2]
                      ? (s[2] = "9")
                      : "4.0" === s[2] && (s[2] = "8"),
                    (s[1] = "IE"),
                    (i += s[1] + s[2]))
                  : /[Cc]hrome\/\d+/.test(t)
                  ? (i += (s = /([Cc]hrome)\/(\d+)/.exec(t))[1] + s[2])
                  : /[Vv]ersion\/\d+\.\d+\.\d+(\.\d)* *[Ss]afari/.test(t)
                  ? (i +=
                      (s =
                        /[Vv]ersion\/(\d+\.\d+\.\d+)(\.\d)* *([Ss]afari)/.exec(
                          t
                        ))[3] + s[1])
                  : /[Oo]pera.+[Vv]ersion\/\d+\.\d+/.test(t)
                  ? (i +=
                      (s = /([Oo]pera).+[Vv]ersion\/(\d+)\.\d+/.exec(t))[1] +
                      s[2])
                  : (i += "unknown"),
                i
              );
            },
            isNativeFunc: function (e) {
              var t = Function.prototype.toString,
                i = Object.prototype.hasOwnProperty,
                s = RegExp(
                  "^" +
                    t
                      .call(i)
                      .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
                      .replace(
                        /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                        "$1.*?"
                      ) +
                    "$"
                );
              try {
                var a = t.call(e);
                return s.test(a);
              } catch (r) {
                return !1;
              }
            },
            isUseHlsPlay: function () {
              try {
                if ("Mac" !== this.getOSAndBrowser().split("/")[0]) return !1;
                var e = this.safariInfo();
                return 14 <= (e && e[1] && e[1].split(".")[0]);
              } catch (t) {
                return console.log(t), !1;
              }
            },
            isHlsSupported: function () {
              var e = window.MediaSource || window.WebKitMediaSource;
              if (!e) return !1;
              var t =
                  window.SourceBuffer ||
                  (window.WebKitSourceBuffer && window.WebKitSourceBuffer()),
                i =
                  e &&
                  "function" == typeof e.isTypeSupported &&
                  e.isTypeSupported(
                    'video/mp4; codecs="avc1.42E01E,mp4a.40.2"'
                  ),
                s =
                  !t ||
                  (t.prototype &&
                    "function" == typeof t.prototype.appendBuffer &&
                    "function" == typeof t.prototype.remove);
              return !!i && !!s;
            },
            formatDate: function (e) {
              var t = e || new Date(),
                i = t.getFullYear(),
                s = t.getMonth() + 1,
                a = t.getDate(),
                r = t.getHours(),
                n = t.getMinutes(),
                o = t.getSeconds();
              return (
                i +
                "" +
                (s = s <= 9 ? "0" + s : s) +
                (a = a <= 9 ? "0" + a : a) +
                (r = r <= 9 ? "0" + r : r) +
                (n = n <= 9 ? "0" + n : n) +
                (o = o <= 9 ? "0" + o : o)
              );
            },
            isM3u8Url: function (e) {
              if (!e) return !1;
              var t = e.split("?")[0];
              return t.endsWith(".m3u8") || t.endsWith(".cmf");
            },
            shouldHlsPlayForArgs: function (e, t, i, s) {
              if (this.isWasmPlay) return !1;
              if (!$.isHlsSupported()) return !1;
              var a =
                "9DD53F70C341DB9B" === e.siteid && $.isHuaWei() && $.isWeixin();
              return (
                !(("1" == e.wx_hls_type && $.isWeixin()) || a) &&
                !!$.isM3u8Url(t) &&
                !(!((i && i.h5_encrypt_enhance) || 15 == s) && $.isUseHlsPlay())
              );
            },
            getStyleValue: function (e, t) {
              return window.getComputedStyle(e).getPropertyValue(t);
            },
            getStyleValueWithoutUnit: function (e, t) {
              var i = window.getComputedStyle(e).getPropertyValue(t);
              return parseFloat(i);
            },
          };
        function _(e, t, i, s, a, r) {
          (this.playerApi = e),
            (this.params = t),
            (this.videoPlayData = i),
            (this.parentEle = s),
            (this.zIndex = a),
            (this.oVideo = r),
            (this.lastCheckTime = 0);
        }
        function V(e) {
          return v.apply(this, arguments);
        }
        function D(e, t, i, s, a, r) {
          (this.playerApi = e),
            (this.params = t),
            (this.videoPlayData = i),
            (this.parentEle = s),
            (this.zIndex = a),
            (this.oVideo = r);
          var n = t.staticMarquee;
          (!n.hasOwnProperty("content") ||
            (n.hasOwnProperty("content") && "" === n.content)) &&
            console.error(
              "初始化播放器静态跑马灯参数staticMarquee的content属性必须设置且非空"
            );
          (this.options = (0, h["default"])(
            {},
            {
              fontFamily: "PingFang SC 微软雅黑",
              fontSize: "12px",
              opacity: 0.5,
              color: "#FFF",
              density: "medium",
              rotate: "-45deg",
            },
            (function o(e) {
              for (var t in e)
                if (e.hasOwnProperty(t)) {
                  var i = e[t];
                  (null === i ||
                    i === undefined ||
                    "" === i ||
                    (Array.isArray(i) && 0 === i.length) ||
                    ("object" ===
                      (void 0 === i ? "undefined" : (0, Y["default"])(i)) &&
                      0 === (0, K["default"])(i).length)) &&
                    delete e[t];
                }
              return e;
            })(n)
          )),
            (this.marqueeBox = {});
        }
        (window.ccH5PlayerUtils = $),
          (function (s) {
            if ("function" != typeof CCBanConsole) {
              var a = function a(e, t) {
                (this.playerApi = e),
                  (this.parentEle = t),
                  (this.threshold = 200);
              };
              (a.prototype = {
                constructor: a,
                isOpen: !1,
                counts: 0,
                isChrome:
                  s.chrome ||
                  -1 < navigator.userAgent.toLowerCase().indexOf("chrome"),
                isPCQQ: -1 < navigator.userAgent.indexOf("QQBrowser"),
                init: function () {
                  var e = $.safariInfo(),
                    t = e && e[1] && e[1].split(".")[0];
                  ($.isIPhone() && 15 <= t) ||
                    ((this.bindCheckOpen = this.checkOpen.bind(this)),
                    this.bindCheckOpen(),
                    $.addListener(s, "resize", this.bindCheckOpen));
                },
                checkOpen: function () {
                  var e = this,
                    t = s.outerWidth - s.innerWidth > this.threshold,
                    i = s.outerHeight - s.innerHeight > this.threshold;
                  !this.isChrome || this.isPCQQ
                    ? this.checkThreshold(t, i)
                    : this.getChromeTest(function () {
                        (e.isOpen && !t && !i) || e.destroyPlayer(),
                          (e.isOpen = !0);
                      });
                },
                checkThreshold: function (e, t) {
                  (t && e) ||
                  !(
                    (s.Firebug &&
                      s.Firebug.chrome &&
                      s.Firebug.chrome.isInitialized) ||
                    e ||
                    t
                  )
                    ? this.isOpen && (this.isOpen = !1)
                    : (this.isOpen || this.destroyPlayer(), (this.isOpen = !0));
                },
                getChromeRerenderTestFunc: function (e) {
                  var t = this,
                    i = 0,
                    s = ++this.counts;
                  return function () {
                    (t.counts && t.counts !== s) ||
                      (2 === ++i && ((t.counts = s), e(), (i = 1)));
                  };
                },
                getChromeTest: function (e) {
                  var t = /./;
                  t.toString = this.getChromeRerenderTestFunc(e);
                  var i = function i() {
                    return t;
                  };
                  i.toString = this.getChromeRerenderTestFunc(e);
                  var s = new Date();
                  (s.toString = this.getChromeRerenderTestFunc(e)),
                    console.log("%c", i, i(), s);
                  var a = this.getChromeRerenderTestFunc(e);
                  this.errorDetector(a);
                },
                errorDetector: function (e) {
                  var t = new Error();
                  Object.defineProperty(t, "message", {
                    get: function () {
                      e();
                    },
                  }),
                    console.log(t);
                },
                destroyPlayer: function () {
                  this.playerApi.destroy(!0),
                    this.playerApi.showPlayerError(),
                    s.removeEventListener("resize", this.bindCheckOpen);
                },
              }),
                (s.CCBanConsole = function (e, t) {
                  var i = new a(e, t);
                  return {
                    init: function () {
                      i.init();
                    },
                  };
                });
            }
          })(window),
          (function (y) {
            var m = y.document;
            $.unifyApiMethods();
            var t = m.createElement("script");
            (t.type = "text/javascript"),
              (t.src = "//class.csslcloud.net/cctrack/ccTrack.js"),
              m.getElementsByTagName("head")[0].appendChild(t);
            var l = {},
              v = "3.5.9",
              a = function a() {
                (this.errorDict = { netErr: "网络繁忙，请刷新页面重试。" }),
                  (this.playerEvent = {
                    changeQuality: "changeQuality",
                    changeSpeed: "changeSpeed",
                    readyComplete: "readyComplete",
                    triggerCustomEnd: "triggerCustomEnd",
                    airPlay: "airPlay",
                  }),
                  (this.playerInnerApi = new CCH5PlayerInnerApi(this)),
                  this.init();
              },
              n = ["https://p.bokecc.com", "https://pb.bokecc.com"],
              f = 100,
              r = 101,
              i = 120,
              s = 122,
              o = 125,
              c = 126,
              d = 127,
              h = 130,
              u = 2001,
              p = 10005,
              g = 150,
              P = 149,
              A = 200,
              E = 205,
              w = 208,
              x = 210,
              T = 2050,
              b = 1e3,
              S = 1500,
              C = 2e3,
              k = 2005,
              B = 2010,
              I = 2100,
              L = 2150,
              _ = 3e3,
              V = 5e3,
              D = 5001,
              M = 5002,
              H = 9e3,
              q = 1e4,
              N = 10001,
              O = 10005,
              F = 10001,
              R = 10010,
              j = 199,
              Q = {
                InvalidParameter: 1e3,
                NotExistVidOrSiteId: 1001,
                NoMatchVidAndSiteId: 1002,
                InvalidVidOrSiteId: 1003,
                BeforePlayError: 2001,
                PlayingError: 2002,
                NetworkUnavaiable: 3e3,
                LoadingTimeout: 3001,
                ServerAPIError: 3002,
              },
              U = {
                InvalidParameter: "No video url, please check the parameters",
                NotExistVidOrSiteId: "The vid or siteId does not exist",
                NoMatchVidAndSiteId: "The vid does not match the siteId",
                InvalidVidOrSiteId: "The format of vid or siteId is incorrect ",
                BeforePlayError: "The video file loaded failed",
                PlayingError: "Error occured while playing",
                NetworkUnavaiable:
                  "The network is unreachable, please click Refresh",
                LoadingTimeout: "A network request timed out",
                ServerAPIError: "Error occurred while requesting server",
              },
              W = {
                zh_CN: {
                  switchLine: "切到线路",
                  switchLineSuccess: "切换线路成功",
                  switchVideo: "视频播放",
                  switchAudio: "音频播放",
                  audioPlaying: "音频播放中",
                  toVideo: "切回视频",
                  lastPlay: "上次观看到",
                  replaying: "点击继续",
                  mobileFullsMarqueeTip: "提示：请播放后全屏",
                  networkUnavaiable: " 网络不可用，请稍后刷新重试",
                  networkWaiting: "播放不佳，请暂停一会、切换清晰度或线路试试",
                  networkError: "网络繁忙，请刷新页面重试",
                },
                en: {
                  switchLine: "Switching line",
                  switchLineSuccess: "Line switching successful",
                  switchVideo: "Video mode",
                  switchAudio: "Audio mode",
                  audioPlaying: "Audio playing",
                  toVideo: "Switch to video mode",
                  lastPlay: "Last played to ",
                  replaying: " Continue playing",
                  mobileFullsMarqueeTip: "Tips: Please fullscreen after play",
                  networkUnavaiable:
                    " The network is unavailable, please refresh later and try again",
                  networkWaiting:
                    "The current network is poor. It is recommended to switch the definition or pause for a while",
                  networkError:
                    "The network is busy, please refresh the page and try again",
                },
              };
            function z() {
              var n = new a(),
                e = function e() {
                  (this.pageFullScreen = function () {
                    n.playerInnerApi.pageFullScreen();
                  }),
                    (this.exitPageFullScreen = function () {
                      n.playerInnerApi.exitPageFullScreen();
                    }),
                    (this.exitFullScreen = function () {
                      n.playerInnerApi.exitFullScreen();
                    }),
                    (this.play = function () {
                      n.playerInnerApi.videoPlay();
                    }),
                    (this.sendBarrage = function (e, t, i, s) {
                      n &&
                        n.ccPlayerBarrage &&
                        n.ccPlayerBarrage.sendBarrage(e, t, i, s);
                    }),
                    (this.openBarrage = function (e, t, i) {
                      n &&
                        n.ccPlayerBarrage &&
                        n.ccPlayerBarrage.openBarrage(e, t, i);
                    });
                };
              (e.prototype = n.outerDom), (y.oPlayer = new e());
              var t = {
                  showPlayer: function () {
                    var e = new a();
                    e.showPlayer(),
                      e.params.vid && "" != e.params.vid && (n = e);
                  },
                  showPlayerDirect: function (e) {
                    n.showPlayerDirect(e);
                  },
                  play: function () {
                    n.playerInnerApi.videoPlay();
                  },
                  pause: function () {
                    n.playerInnerApi.videoPause();
                  },
                  jumpToTime: function (e) {
                    n.isHlsPlay && 0 == n.lastPlayTime
                      ? setTimeout(function () {
                          n.jumpToTime(e);
                        }, 500)
                      : n.jumpToTime(e);
                  },
                  getPosition: function () {
                    return n.playerInnerApi.getCurrentTime();
                  },
                  getDuration: function () {
                    return n.playerInnerApi.getTotalTime();
                  },
                  getQualities: function () {
                    return n.ccPlayerCtrol.getQualities();
                  },
                  setQuality: function (e) {
                    n.ccPlayerCtrol.setQuality(e);
                  },
                  setVolume: function (e) {
                    n.ccPlayerCtrol.setVolume(e);
                  },
                  normalScreen: function () {
                    n.playerInnerApi.exitFullScreen();
                  },
                  fullScreen: function () {
                    n.fullScreen("request");
                  },
                  fast_forward_time: function (e) {
                    n.setFastForwardTime(e);
                  },
                  isFullScreen: function () {
                    return n.isFullScreen();
                  },
                  getCurrRate: function () {
                    return n.playerInnerApi.getVideoRate();
                  },
                  getCurrDf: function () {
                    var e = n.playerInnerApi.getCurrentCopy();
                    return e ? e.quality : null;
                  },
                  getVideoState: function () {
                    return n.playerInnerApi.getVideostate() ? "pause" : "play";
                  },
                  isIPhone: function () {
                    return $.isIPhone();
                  },
                  isIPad: function () {
                    return $.isIPad();
                  },
                  isAndroid: function () {
                    return $.isAndroid();
                  },
                  isAudioPlay: function (e, t) {
                    return $.isAudioPlay(e, t);
                  },
                  isCustomFunction: function (e) {
                    return $.isCustomFunction(e);
                  },
                  showBarrageItem: function (e, t, i, s) {
                    n &&
                      n.ccPlayerBarrage &&
                      n.ccPlayerBarrage.sendBarrage(e, t, i, s);
                  },
                  jsonp: function (e, t, i) {
                    var s = { url: e, data: {}, success: t, error: i };
                    $.ccJsonp(s);
                  },
                  getPlayedPausedTimes: function () {
                    return {
                      playedTimes: n.playedTimes,
                      pausedTimes: n.pausedTimes,
                    };
                  },
                  destroy: function () {
                    n.destroy(!0);
                  },
                  setVideoMarks: function (e) {
                    n.ccPlayerCtrol.setVideoMarks(e);
                  },
                  showMarkDesc: function (e) {
                    n.ccPlayerCtrol.showMarkDesc(e);
                  },
                  setQA: function (e, t) {
                    if (
                      ((e = e || []),
                      delete n.videoPlayData.exercises,
                      n.ccPlayerExercise && n.ccPlayerExercise.resetDom(),
                      (n.videoPlayData.questions = e),
                      !n.ccPlayerQA && n.playerInnerApi.isVideoPlay()
                        ? ((n.ccPlayerQA = new CCH5PlayerQA(
                            n.playerInnerApi,
                            n.params,
                            n.videoPlayData,
                            n.videoBox,
                            T
                          )),
                          n.ccPlayerQA.init())
                        : n.ccPlayerQA.setQA(),
                      e && e[0] && e[0].showTime && t)
                    ) {
                      var i = e && e[0] && e[0].showTime;
                      n.jumpToTime(i);
                    }
                  },
                  viewPointQA: function (e) {
                    n.ccPlayerQA.viewPointQA(e);
                  },
                  setVote: function (e, t) {
                    if (
                      (!n.ccPlayerVote && n.playerInnerApi.isVideoPlay()
                        ? ((n.ccPlayerVote = new CCH5PlayerVote({
                            playerApi: n.playerInnerApi,
                            params: n.params,
                            videoPlayData: n.videoPlayData,
                            parentEle: n.videoBox,
                            zIndex: k,
                          })),
                          n.ccPlayerVote.init(e))
                        : n.ccPlayerVote.setVote(e),
                      e && e[0] && e[0].showTime && t)
                    ) {
                      var i = e && e[0] && e[0].showTime;
                      n.jumpToTime(i);
                    }
                  },
                  viewPointVote: function (e) {
                    n.ccPlayerVote.viewPointVote(e);
                  },
                  getIsVoteShow: function () {
                    return n.ccPlayerVote && n.ccPlayerVote.getIsVoteShow();
                  },
                  setQuestions: function (e) {
                    for (var t = 0; t < e.length; t++)
                      e[t].createTime = new Date().getTime();
                    this.setQA(e);
                  },
                  changeQuestionItem: function (e) {
                    (e.createTime = new Date().getTime()),
                      n.videoPlayData.questions ||
                        (n.videoPlayData.questions = []);
                    var t = n.videoPlayData.questions;
                    if (t.length < 1)
                      (t[0] = e),
                        !n.ccPlayerQA &&
                          n.playerInnerApi.isVideoPlay() &&
                          ((n.ccPlayerQA = new CCH5PlayerQA(
                            n.playerInnerApi,
                            n.params,
                            n.videoPlayData,
                            n.videoBox,
                            T
                          )),
                          n.ccPlayerQA.init());
                    else
                      for (var i = 0; i < t.length; i++)
                        if (t[i].showTime == e.showTime) {
                          t[i] = e;
                          break;
                        }
                  },
                  setExercise: function (e, t) {
                    if (
                      ((e = e || []),
                      delete n.videoPlayData.questions,
                      n.ccPlayerQA && n.ccPlayerQA.setQA(),
                      n.ccPlayerCtrol.setVideoMarks(),
                      (n.videoPlayData.exercises = e),
                      !n.ccPlayerExercise && n.playerInnerApi.isVideoPlay()
                        ? (n.ccPlayerExercise = new CCH5PlayerExercise(
                            n.playerInnerApi,
                            n.params,
                            n.videoPlayData,
                            n.videoBox,
                            I
                          ))
                        : n.ccPlayerExercise.resetDom(),
                      n.ccPlayerExercise.init(),
                      e && e[0] && e[0].showTime && t)
                    ) {
                      var i = e && e[0] && e[0].showTime;
                      n.jumpToTime(i);
                    }
                  },
                  viewPointExercise: function (e) {
                    n.ccPlayerExercise.viewPointExercise(e);
                  },
                  setCutSection: function (e) {
                    n.ccPlayerCtrol.setCutSection(e);
                  },
                  setVtt: function (e) {
                    var t = m.getElementById("ccVttStyle");
                    t && t.parentNode.removeChild(t);
                    for (
                      var i = ["vtt", "vtt2", "bilingual"], s = 0;
                      s < i.length;
                      s++
                    ) {
                      var a = i[s];
                      n.videoPlayData[a] && delete n.videoPlayData[a];
                    }
                    for (var r in ((n.videoPlayData.defaultvtt = 0), e))
                      (n.videoPlayData[r] = e[r]),
                        "vtt2" == r && e[r] && (n.videoPlayData.defaultvtt = 2);
                    n.ccPlayerMore
                      ? (n.ccPlayerMore.resetVttDom(),
                        n.ccPlayerMore.initSwitchVtt())
                      : ((n.ccPlayerMore = new CCH5PlayerMore(
                          n.playerInnerApi,
                          n.params,
                          n.videoPlayData,
                          n.videoBox,
                          q,
                          n.oVideo
                        )),
                        n.ccPlayerMore.init(),
                        n.extralFuncs.push(n.ccPlayerMore));
                  },
                  setKnowledge: function (e, t) {
                    return (
                      t &&
                        (e && e.name
                          ? n.ccPlayerCtrol &&
                            n.ccPlayerCtrol.showKnowledgeBtn(e.name)
                          : (n.ccPlayerCtrol &&
                              n.ccPlayerCtrol.hideKnowledgeBtn(),
                            n.ccPlayerKnow && n.ccPlayerKnow.hideDrawer())),
                      (n.params.knowledge = e),
                      n.ccPlayerKnow && n.ccPlayerKnow.setKnowledge(),
                      !0
                    );
                  },
                  toggleVote: function (e) {
                    return (
                      !(!n.ccPlayerVote || !n.ccPlayerVote.toggleVote) &&
                      (n.ccPlayerVote.toggleVote(e), !0)
                    );
                  },
                  setPublicityPic: function (e) {
                    return (
                      !(!e || !e.url) &&
                      ((n.params.adPic = e),
                      n.ccPlayerAdPic
                        ? n.ccPlayerAdPic.init()
                        : ((n.ccPlayerAdPic = new CCH5PlayerAdPic({
                            playerApi: n.playerInnerApi,
                            params: n.params,
                            videoPlayData: n.videoPlayData,
                            parentEle: n.videoBox,
                            zIndex: c,
                          })),
                          n.ccPlayerAdPic.init(),
                          n.extralFuncs.push(n.ccPlayerAdPic)),
                      !0)
                    );
                  },
                  changeVideo: function (e, t) {
                    n.changeVideo(e, t);
                  },
                  switchVideo: function (e, t) {
                    n.switchVideoSmooth(e, t);
                  },
                },
                i = function i() {
                  for (var e in t) this[e] = t[e];
                };
              i.prototype = n.outerApi;
              var s = new i();
              return (n.playerApiObj = s);
            }
            function J(e, t) {
              var s = new Z();
              (this.sBox = new Uint32Array(256)),
                (this.movePos = e),
                (this.key = t),
                (this.encrypt = function (e) {
                  var t = this.replaceByte(e);
                  return (t = this.mixWithKey(t, this.key));
                }),
                (this.mixWithKey = function (e, t) {
                  for (
                    var i = new Int8Array(t.length), s = 0;
                    s < t.length;
                    s++
                  )
                    i[s] = 255 & t.codePointAt(s);
                  for (
                    var a = new Int8Array(e.length), r = 0;
                    r < e.length;
                    r++
                  )
                    a[r] = e[r] ^ i[r % t.length];
                  return a;
                }),
                (this.replaceByte = function (e) {
                  for (
                    var t = new Int8Array(e.length), i = 0;
                    i < e.length;
                    i++
                  ) {
                    var s = e[i];
                    s < 0 && (s = 128 | (127 & s)), (t[i] = this.sBox[s]);
                  }
                  return t;
                }),
                (this.encryptAsBase64Str = function (e) {
                  for (
                    var t = new Int8Array(e.length), i = 0;
                    i < e.length;
                    i++
                  )
                    t[i] = e.charCodeAt(i);
                  return s.binToStr(s.encodeInt8Array(this.encrypt(t)));
                }),
                (this.initTable = function () {
                  var e = this.sBox,
                    t = new Uint32Array(256),
                    i = 0,
                    s = 0,
                    a = 0;
                  for (a = 0; a < 256; a++)
                    t[a] = a < 128 ? a << 1 : (a << 1) ^ 283;
                  for (a = 0; a < 256; a++) {
                    var r = s ^ (s << 1) ^ (s << 2) ^ (s << 3) ^ (s << 4),
                      n =
                        ((r = (r >>> 8) ^ (255 & r) ^ 99) + this.movePos) % 256;
                    e[i] = n;
                    var o = t[i],
                      l = t[t[o]];
                    i
                      ? ((i = o ^ t[t[t[l ^ o]]]), (s ^= t[t[s]]))
                      : (i = s = 1);
                  }
                }),
                this.initTable();
            }
            (a.prototype = {
              constructor: a,
              outerApi: { isAdTime: !1 },
              outerDom: { playEnded: !1 },
              resolveStateTime: 0,
              init: function () {
                (this.params = {}),
                  (this.playerContainer = null),
                  (this.videoPlayData = {}),
                  (this.apiResponseData = {}),
                  (this.intervals = []),
                  (this.currentCopy = {}),
                  (this.playingUrl = null),
                  (this.isUseBackupUrl = !1),
                  (this.extralFuncs = []),
                  (this.isEnterFullscreen = !1),
                  (this.wechatCount = 0),
                  (this.lastVideoTime = 0),
                  (this.isPlaying = !1),
                  (this.plyerEventListenners = {}),
                  (this.inited = !1),
                  (this.playEnded = !1),
                  (this.playedTimes = 0),
                  (this.pausedTimes = 0),
                  (this.currPlayedMaxTime = 0),
                  (this.lastPlayTime = 0),
                  (this.globalEvents = []),
                  (this.playLoopTimes = 0),
                  (this.videoEvents = []),
                  (this.videoEventAdded = !1),
                  (this.isWasmPlay = !1),
                  (this.cryptor = new J(
                    213,
                    "c03Ea74b4f9K493#9e1e&4e800b8a35f"
                  )),
                  (this.timeMargin = 0),
                  (this.isVirtalM3u8Playing = !1),
                  (this.canPlayed = !1),
                  (this.setSrcTime = 0),
                  (this.loadSrcTime = 0),
                  (this.loadSrcRetryNum = 0),
                  this.resetErrorReTryTimes(),
                  (this.isHlsPlay = !1);
              },
              showPlayer: function () {
                var t = $.getPlayerScript();
                if (null != t) {
                  var i = $.getParam(t.src.split("?")[1]);
                  if (i.listid || (i.vid && "" != i.vid)) {
                    this.params = i;
                    try {
                      if (
                        (this.preDoParams(),
                        this.params.listid && !this.ccPlayList)
                      )
                        return void this.createPlayListWrapper(t, t.parentNode);
                      this.createPlayerContainer(),
                        t.parentNode.replaceChild(this.playerContainer, t),
                        (this.playerContainer = m.getElementById(
                          this.params.divid
                        )),
                        (this.outerDom.oDiv = this.playerContainer),
                        this.loadVideoPlayData();
                    } catch (e) {
                      this.processPlayerError(e);
                    }
                  }
                } else this.handleLog("not find player js script!");
              },
              showPlayerDirect: function (t) {
                if (t)
                  if (
                    (t.parentNode || (t.parentNode = "body"),
                    (this.params = t),
                    "string" == typeof this.params.parentNode &&
                      (this.params.parentNode = m.querySelector(
                        this.params.parentNode
                      )),
                    this.params.parentNode.tagName)
                  )
                    try {
                      if (
                        (this.preDoParams(),
                        this.params.listid && !this.ccPlayList)
                      )
                        return void this.createPlayListWrapper();
                      if ((this.createPlayerContainer(), this.params.listid)) {
                        var i = this.params.parentNode.getElementsByClassName(
                          "CCH5playerContainer"
                        )[0];
                        i
                          ? this.params.parentNode.replaceChild(
                              this.playerContainer,
                              i
                            )
                          : this.params.parentNode.appendChild(
                              this.playerContainer
                            );
                      } else
                        this.isChangeVideo ||
                          this.isSwitchVideoSmooth ||
                          ((this.params.parentNode.innerHTML = ""),
                          this.params.parentNode.appendChild(
                            this.playerContainer
                          ));
                      (this.playerContainer = m.getElementById(
                        this.params.divid
                      )),
                        (this.outerDom.oDiv = this.playerContainer),
                        this.loadVideoPlayData();
                    } catch (e) {
                      this.processPlayerError(e);
                    }
                  else this.handleLog("params parentNode is not found!");
              },
              switchVideo: function (e, t) {
                this.setStorageConfig(t);
                var i = this.params;
                (i.vid = e),
                  (this.playLoopTimes = 0),
                  this.destroy(!0),
                  this.showPlayerDirect(i);
              },
              switchVideoSmooth: function (e, t) {
                var i = this;
                if (e) {
                  t &&
                    (0, K["default"])(t).length &&
                    (0, K["default"])(t).forEach(function (e) {
                      t[e] !== undefined && (i.params[e] = t[e]);
                    }),
                    this.setStorageConfig(!0);
                  var s = this.params;
                  (s.vid = e),
                    (this.isSwitchVideoSmooth = !0),
                    this.playerInnerApi.setCurrentTime(0),
                    this.showPlayerDirect(s);
                }
              },
              changeVideo: function (e, t) {
                var i = this;
                if (e) {
                  t &&
                    (0, K["default"])(t).length &&
                    (0, K["default"])(t).forEach(function (e) {
                      t[e] !== undefined && (i.params[e] = t[e]);
                    }),
                    this.setStorageConfig(!0);
                  var s = this.params;
                  (s.vid = e),
                    (this.playLoopTimes = 0),
                    (this.inited = !1),
                    (this.ccPlayerLoadingPic = null),
                    (this.ccPlayerExercise = null),
                    (this.ccPlayerAdPic = null),
                    (this.playedTimes = 0),
                    (this.pausedTimes = 0),
                    (this.isChangeVideo = !0),
                    (this.resolveStateTime = 0),
                    (this.lastVideoTime = 0),
                    (this.historyTimeOvered = !1),
                    (this.isHlsPlay = !1),
                    this.resetErrorReTryTimes(),
                    this.destroy(),
                    this.exitPageFullScreen(),
                    this.clearVideoAllListeners(),
                    this.showPlayerDirect(s);
                }
              },
              loadVideoPlayData: function () {
                if (this.params.playtype + "" != "0") {
                  this.addIESupport(),
                    (this.outerApi.videoInfo = new Array(this.params)),
                    (this.outerApi.params = this.params),
                    (this.outerApi.paramsObj = this.params);
                  var t = this.params.vc,
                    i = {
                      vid: this.params.vid,
                      siteid: this.params.siteid,
                      width: this.params.width,
                      useragent: this.params.userAgent,
                      version: 20140214,
                      hlssupport: 1,
                      vc: t,
                      mediatype: this.params.mediatype,
                      divid: this.params.divid,
                      customerId: this.params.customerId
                        ? encodeURIComponent(this.params.customerId)
                        : "",
                    },
                    s = this.params.playtype + "";
                  ("0" != s && "1" != s) || (i.playtype = s),
                    1 * this.params.tpl && (i.tpl = this.params.tpl),
                    "1" === this.params.isSys && (i.sys = "1"),
                    (this.isChangeVideo || this.isSwitchVideoSmooth) &&
                      (i.mediatype = 1),
                    (this.videoFileParams = i);
                  var a = this;
                  this.playerTrack = new CCH5PlayerTrack(
                    a.playerInnerApi,
                    a.params,
                    a.playerContainer,
                    v
                  );
                  var r = new Date().getTime();
                  $.ccJsonp({
                    url: n[this.currApiUrlIdx] + "/servlet/getvideofile",
                    data: i,
                    timeOut: 1e4,
                    success: function (t) {
                      try {
                        var i = new Date().getTime();
                        (a.loadDataTimes = i - r),
                          t.dataTime && 0 < t.dataTime
                            ? (a.timeMargin =
                                t.dataTime - parseInt(r / 1e3) - 1)
                            : (a.timeMargin = 0),
                          (a.apiResponseData = t),
                          a.preDealServerData(t),
                          a.gotoPlay();
                      } catch (e) {
                        a.processPlayerError(e);
                      }
                    },
                    error: function (e) {
                      (a.loadDataTimes = new Date().getTime() - r),
                        new CCH5PlayerStatistic(
                          a.playerInnerApi,
                          a.params,
                          {},
                          a.playerContainer,
                          v
                        ).sendReadyPlayState(
                          !1,
                          a.loadDataTimes,
                          CCH5PlayerStatistic.PLAY_FAIL_REASONS.NET_ERROR
                        ),
                        a.playerTrack.sendStartPlayState({
                          code: 400,
                          data: {
                            failReason:
                              CCH5PlayerStatistic.PLAY_FAIL_REASONS.NET_ERROR,
                            requestParams: i,
                          },
                        }),
                        "timeOut" === e
                          ? a.fetchPlayUrlTimeoutTimes++
                          : a.fetchPlayUrlErrorTimes++,
                        a.fetchPlayUrlTimeoutTimes < 2 &&
                        a.fetchPlayUrlErrorTimes < 4
                          ? ((a.currApiUrlIdx = a.currApiUrlIdx ? 0 : 1),
                            a.loadVideoPlayData())
                          : (a.loadCss(function () {
                              (a.playerContainer.innerHTML = ""),
                                a.playerContainer.appendChild(a.oInfo),
                                a.playerInnerApi.showInfo(a.lang.networkError);
                            }),
                            2 <= a.fetchPlayUrlTimeoutTimes &&
                              a.triggerPlayerError("LoadingTimeout"),
                            4 <= a.fetchPlayUrlErrorTimes &&
                              a.triggerPlayerError("ServerAPIError"));
                    },
                  });
                } else this.gotoFlashPlay();
              },
              gotoPlay: function () {
                null !== m.getElementById(this.videoPlayData.divid) &&
                  ($.isFlashPlay(this.videoPlayData.playtype)
                    ? this.gotoFlashPlay()
                    : this.gotoH5Play());
              },
              gotoFlashPlay: function () {
                var e = "";
                $.checkFlash()
                  ? ((e = $.createFlashView(this.params)),
                    (this.playerContainer.innerHTML = e),
                    this.createBarrage())
                  : ((e = $.createFlashInstallTip(this.params)),
                    (this.playerContainer.innerHTML = e));
              },
              gotoH5Play: function () {
                var n = this;
                for (this.playerId = this.params.vid + "_0"; l[this.playerId]; )
                  this.playerId =
                    this.params.vid +
                    "_" +
                    (parseInt(
                      this.playerId.substring(this.params.vid.length + 1)
                    ) +
                      1);
                (l[this.playerId] = this.playerApiObj),
                  $.addBrowseStyle(),
                  this.loadCss(function () {
                    try {
                      if (
                        (n.setCustomSkin(),
                        0 == n.videoPlayData.authenable &&
                          0 == n.videoPlayData.freetime)
                      ) {
                        var t = n.videoPlayData.authmessage;
                        return (
                          "" == t &&
                            (t = decodeURIComponent(
                              "%E4%B8%8D%E5%85%81%E8%AE%B8%E8%A7%82%E7%9C%8B%E6%88%96%E8%AF%95%E7%9C%8B%E6%97%B6%E9%97%B4%E7%94%A8%E5%B0%BD"
                            )),
                          (n.playerContainer.innerHTML = $.createTips(
                            n.params,
                            t
                          )),
                          "" != n.videoPlayData.callback &&
                            $.invokeWindow(
                              n.videoPlayData.callback,
                              n.params.vid
                            ),
                          n.playerTrack.sendStartPlayState({
                            code: 403,
                            cdn: $.getUrlDomain(i),
                            data: {
                              msg: "授权验证没通过",
                              failReason:
                                CCH5PlayerStatistic.PLAY_FAIL_REASONS
                                  .AUTH_ERROR,
                              responseData: n.apiResponseData,
                            },
                          }),
                          void new CCH5PlayerStatistic(
                            n.playerInnerApi,
                            n.params,
                            n.videoPlayData,
                            n.playerContainer,
                            v
                          ).sendReadyPlayState(
                            !1,
                            n.loadDataTimes,
                            CCH5PlayerStatistic.PLAY_FAIL_REASONS.AUTH_ERROR
                          )
                        );
                      }
                      n.initCurrentCopy(),
                        (n.outerApi.currentCopiesIdx =
                          n.currentCopy && n.currentCopy.index);
                      var i = (n.currentCopy && n.currentCopy.playurl) || "",
                        s = $.checkH5Play(n.params, n.videoPlayData, i);
                      if (
                        n.videoPlayData &&
                        n.videoPlayData.status != undefined
                      ) {
                        var a = n.videoPlayData.status;
                        0 == a
                          ? n.triggerPlayerError("InvalidParameter")
                          : 8 == a
                          ? n.triggerPlayerError("NoMatchVidAndSiteId")
                          : 9 == a
                          ? n.triggerPlayerError("InvalidVidOrSiteId")
                          : 10 == a &&
                            n.triggerPlayerError("NotExistVidOrSiteId");
                      }
                      if (s) {
                        var r = $.createTips(n.params, s.error);
                        return (
                          (n.playerContainer.innerHTML = r),
                          n.playerTrack.sendStartPlayState({
                            code: 403,
                            cdn: $.getUrlDomain(i),
                            data: {
                              msg: s.error,
                              failReason: s.failReason,
                              responseData: n.apiResponseData,
                            },
                          }),
                          void new CCH5PlayerStatistic(
                            n.playerInnerApi,
                            n.params,
                            n.videoPlayData,
                            n.playerContainer,
                            v
                          ).sendReadyPlayState(
                            !1,
                            n.loadDataTimes,
                            s.failReason
                          )
                        );
                      }
                      if (
                        (new CCH5PlayerStatistic(
                          n.playerInnerApi,
                          n.params,
                          n.videoPlayData,
                          n.playerContainer,
                          v
                        ).sendReadyPlayState(!0, n.loadDataTimes, null),
                        n.params.teaserId)
                      )
                        (n.ccPlayerTeaser = new CCH5PlayerTeaser({
                          playerApi: n.playerInnerApi,
                          params: n.params,
                          videoPlayData: n.videoPlayData,
                          parentEle: n.playerContainer,
                          zIndex: h,
                          videoElem: n.videoElem,
                        })),
                          n.ccPlayerTeaser.init();
                      else {
                        if (n.params.isAdOver) return void n.readyH5Play(!1);
                        (n.ccPlayerAdHeader = new CCH5PlayerAdHeader({
                          playerApi: n.playerInnerApi,
                          params: n.params,
                          videoPlayData: n.videoPlayData,
                          parentEle: n.playerContainer,
                          zIndex: h,
                          videoElem: n.videoElem,
                        })),
                          n.ccPlayerAdHeader.init(),
                          n.extralFuncs.push(n.ccPlayerAdHeader);
                      }
                    } catch (e) {
                      n.processPlayerError(e);
                    }
                  });
              },
              readyH5Play: function (e) {
                if (
                  ((this.params.isAdOver = !0),
                  !this.videoPlayData.passwd || this.videoPlayData.passwdValid)
                ) {
                  (this.outerApi.isAdTime = !1), this.checkPlayStart();
                  var t =
                      0 === this.videoPlayData.videoCopies.length &&
                      0 !== this.videoPlayData.audioCopies.length,
                    i =
                      0 !== this.videoPlayData.videoCopies.length &&
                      0 !== this.videoPlayData.audioCopies.length;
                  if (
                    (this.params.mediatype ||
                      (this.params.mediatype = t ? 2 : 1),
                    1 == this.params.mediatype)
                  ) {
                    if (t) return void this.switchToAudioPlay();
                  } else if (2 == this.params.mediatype && i)
                    return void this.switchToVideoPlay();
                  if ((this.startH5Play(e), this.isVirtalM3u8Playing))
                    var s = this,
                      a = y.setInterval(function () {
                        s.canPlayed
                          ? y.clearInterval(a)
                          : 1e4 < Date.now() - s.loadSrcTime &&
                            s.setVideoSrc(s.currentCopy.playurl);
                      }, 2e4);
                } else {
                  new CCH5PlayerPwd(
                    this.playerInnerApi,
                    this.params,
                    this.videoPlayData,
                    this.playerContainer,
                    b,
                    this.playerTrack
                  ).init();
                }
              },
              startH5Play: function (e) {
                var t = this.getH5PlayerHtml();
                if (
                  (this.isSwitchVideoSmooth ||
                    (this.playerContainer.innerHTML = t),
                  this.initPlayerBase(),
                  $.isAudioPlay(this.params, this.videoPlayData)
                    ? this.createAudioView(e)
                    : this.createVideoView(!1, e),
                  (this.playingUrl = this.currentCopy.playurl),
                  this.isWasmPlay ||
                    (this.shouldHlsPlay()
                      ? this.hlsPlay()
                      : this.setVideoSrc(this.currentCopy.playurl),
                    this.initAfterVideoCreated(e)),
                  this.isUseStyleLandscape() || this.isMobileVr())
                ) {
                  this.setCustomProperty();
                  var i = y.matchMedia("(orientation: portrait)");
                  (this.handleMatchMeidaChange =
                    this.onMatchMeidaChange.bind(this)),
                    this.handleMatchMeidaChange(i),
                    i.addListener(this.handleMatchMeidaChange);
                }
              },
              onMatchMeidaChange: function (e) {
                var t = this;
                this.mediaTimer && clearTimeout(this.mediaTimer),
                  (this.mediaTimer = setTimeout(function () {
                    t.setCustomProperty(),
                      e.matches
                        ? t.videoBox.classList.remove(
                            "ccH5PlayerDeviceLandscape"
                          )
                        : (t.isUseStyleLandscape() && t.exitFullScreen(),
                          t.videoBox.classList.add(
                            "ccH5PlayerDeviceLandscape"
                          )),
                      t.ccPlayerVr && t.ccPlayerVr.updateSize();
                  }, 100));
              },
              initAfterVideoCreated: function (e) {
                this.initBasePlayEvents(),
                  this.videoEventAdded || this.initVideoPlayEvents(),
                  this.isChangeVideo || this.initWindowEvents(),
                  this.initExtral(),
                  this.initHistoryTimeShow(),
                  "true" === this.params.realAutoPlay
                    ? this.realAutoPlay()
                    : (this.tryAutoPlay(), this.changeVideoAutoPlay(e)),
                  0 < this.params.watchStartTime && this.initWatchStartTime(),
                  this.params.loadingPic &&
                    !this.ccPlayerLoadingPic &&
                    ((this.ccPlayerLoadingPic = new CCH5PlayerLoadingPic(
                      this.playerInnerApi,
                      this.params,
                      this.videoPlayData,
                      this.videoBox,
                      d
                    )),
                    this.ccPlayerLoadingPic.init()),
                  this.authFreeTimePlay(),
                  $.invokeWindow("on_cc_h5player_init", this.videoPlayData.vid),
                  (this.inited = !0),
                  $.invokeWindow("on_CCH5player_ready", {
                    videoElement: this.oVideo,
                    container: this.playerContainer,
                    vid: this.params.vid,
                  }),
                  this.startPlayAndPauseStatis(),
                  ((this.videoPlayData.reskeys &&
                    this.videoPlayData.reskeys.h5_encrypt_enhance) ||
                    15 == this.videoPlayData.safeLevel) &&
                    this.checkPlaySafe();
              },
              checkPlaySafe: function () {
                if (y.MediaSource) {
                  var e = y.MediaSource,
                    t =
                      y.EventTarget && e.__proto__.__proto__ === y.EventTarget;
                  e && !$.isNativeFunc(e.prototype.addSourceBuffer) && (t = !0),
                    t && (this.destroy(!0), this.showPlayerError());
                }
              },
              resetErrorReTryTimes: function () {
                (this.currApiUrlIdx = 0),
                  (this.fetchPlayUrlErrorTimes = 0),
                  (this.fetchPlayUrlTimeoutTimes = 0),
                  (this.playStartErrorTimes = 0),
                  (this.playStartTimeoutTimes = 0),
                  (this.playingErrorTimes = 0),
                  (this.playStartSuccess = !1);
              },
              checkPlayStart: function () {
                var e = this;
                this.playStartTimer && clearTimeout(this.playStartTimer),
                  this.checkPlaySuccess && clearTimeout(this.checkPlaySuccess),
                  (this.playStartTimer = setTimeout(function () {
                    e.playStartSuccess ||
                      e.playStartTimeoutTimes ||
                      (e.playStartTimeoutTimes++, e.switchPlayUrl()),
                      (e.checkPlaySuccess = setTimeout(function () {
                        !e.playStartSuccess &&
                          1 === e.playStartTimeoutTimes &&
                          4 <= e.playStartErrorTimes &&
                          e.triggerPlayerError("BeforePlayError");
                      }, 2e3));
                  }, 3e4));
              },
              switchPlayUrl: function () {
                this.oVideo &&
                  this.oVideo.nodeType &&
                  (this.playingUrl !== this.currentCopy.playurl
                    ? this.setVideoSrc(this.currentCopy.playurl)
                    : this.currentCopy.backupurl &&
                      this.playingUrl !== this.currentCopy.backupurl &&
                      this.setVideoSrc(this.currentCopy.backupurl),
                  this.isPlaying && this.playerInnerApi.videoPlay());
              },
              showPlayerError: function () {
                this.playerContainer.innerHTML =
                  "<div style='width: 100%; height:100%; background: #000;color: #fff; text-align: center; font-size: 18px; display:table;'>   <div style='display:table-cell; vertical-align: middle;'>   <span id='pcmTips' class='ccH5TipText'>播放行为异常，视频已停止播放</span>   </div></div>";
              },
              getNoteToken: function () {
                var i = this;
                $.ajax({
                  url: "//crius-play.bokecc.com/common/token",
                  type: "POST",
                  data: {
                    accountId: this.params.siteid,
                    videoId: this.videoPlayData.vid,
                    courseName: this.params.note.courseName,
                    lessonName: this.params.note.lessonName,
                    studentId: this.params.note.studentId,
                    studentName: this.params.note.studentName,
                  },
                  ops: {
                    success: function (e) {
                      if (e && JSON.parse(e) && JSON.parse(e).token) {
                        (i.params.ccNoteToken = JSON.parse(e).token),
                          (i.ccH5PlayerNote = new CCH5PlayerNote(
                            i.playerInnerApi,
                            i.params,
                            i.videoPlayData,
                            i.videoBox,
                            R
                          ));
                        var t = "//p.bokecc.com/js/note/editor.js?v=" + v;
                        y.isCCPlayerTest &&
                          (t = "./Gaeaunion/js/note/editor.js"),
                          $.loadCss(
                            "//p.bokecc.com/css/note/editor.snow.css?v=3.5.9",
                            function () {
                              $.loadScript(t, function () {
                                i.ccPlayerCtrol &&
                                  i.ccPlayerCtrol.showNoteBtn();
                              });
                            }
                          );
                      }
                    },
                    fail: function (e) {
                      console.log("error: ", e);
                    },
                  },
                });
              },
              getInteractData: function () {
                var i = this;
                this.videoPlayData.interactAuths.join(",");
                $.ccJsonp({
                  url: "//px.bokecc.com/playinfo/get",
                  data: {
                    userid: this.params.siteid,
                    videoid: this.videoPlayData.vid,
                    reskeys: this.videoPlayData.interactAuths.join(","),
                  },
                  success: function (e) {
                    if (e && 0 === e.code && e.data)
                      if (
                        (e.data.video_clicker &&
                          i.playerInnerApi.isVideoPlay() &&
                          ((i.ccPlayerVote = new CCH5PlayerVote({
                            playerApi: i.playerInnerApi,
                            params: i.params,
                            videoPlayData: i.videoPlayData,
                            parentEle: i.videoBox,
                            zIndex: k,
                          })),
                          i.ccPlayerVote.init(e.data.video_clicker)),
                        !i.params.learnBtnTxt &&
                          e.data.video_knowledge &&
                          e.data.video_knowledge.name &&
                          i.playerInnerApi.isVideoPlay() &&
                          !$.isIPad() &&
                          !$.isMoble())
                      ) {
                        var t = e.data.video_knowledge.name;
                        (i.params.knowledge = e.data.video_knowledge),
                          (i.params.knowledge.title = t),
                          i.ccPlayerKnow.init(),
                          i.ccPlayerCtrol &&
                            i.ccPlayerCtrol.showKnowledgeBtn(t);
                      } else
                        i.ccPlayerCtrol && i.ccPlayerCtrol.hideKnowledgeBtn();
                  },
                  error: function (e) {
                    console.log("error", e);
                  },
                });
              },
              initExtral: function () {
                var i = this;
                this.params.banConsole + "" != "true" ||
                  $.isAndroid() ||
                  $.isIPad() ||
                  $.isIPhone() ||
                  ((this.ccBanConsole = new CCBanConsole(
                    this.playerInnerApi,
                    this.playerContainer
                  )),
                  this.ccBanConsole.init());
                var e = this.videoPlayData.config;
                e &&
                  e.rightmenu &&
                  e.rightmenu.rightmenu &&
                  "false" !== this.params.isShowRightMenu &&
                  !$.isMoble() &&
                  !$.isIPad() &&
                  ((this.ccPlayerRightMenu = new CCH5PlayerRightMenu({
                    playerApi: this.playerInnerApi,
                    params: this.params,
                    videoPlayData: this.videoPlayData,
                    parentEle: this.videoBox,
                    zIndex: _,
                    oVideo: this.oVideo,
                  })),
                  this.ccPlayerRightMenu.init()),
                  $.isMoble() ||
                    $.isIPad() ||
                    ((this.ccPlayerMouseMenu = new CCH5PlayerMouseMenu(
                      this.playerInnerApi,
                      this.params,
                      this.videoPlayData,
                      this.videoBox,
                      O
                    )),
                    this.ccPlayerMouseMenu.init()),
                  "true" != String(this.params.isShare) ||
                    $.isMoble() ||
                    $.isIPad() ||
                    ((this.ccPlayerShare = new CCH5PlayerShare(
                      this.playerInnerApi,
                      this.params,
                      this.videoPlayData,
                      this.videoBox,
                      _
                    )),
                    this.ccPlayerShare.init(),
                    this.extralFuncs.push(this.ccPlayerShare)),
                  (this.ccPlayerMore = new CCH5PlayerMore(
                    this.playerInnerApi,
                    this.params,
                    this.videoPlayData,
                    this.videoBox,
                    q,
                    this.oVideo
                  )),
                  this.ccPlayerMore.init(),
                  this.extralFuncs.push(this.ccPlayerMore),
                  this.videoPlayData.exercises !== undefined &&
                    this.playerInnerApi.isVideoPlay() &&
                    ((this.ccPlayerExercise = new CCH5PlayerExercise(
                      this.playerInnerApi,
                      this.params,
                      this.videoPlayData,
                      this.videoBox,
                      I
                    )),
                    this.ccPlayerExercise.init()),
                  this.videoPlayData.questions &&
                    this.playerInnerApi.isVideoPlay() &&
                    ((this.ccPlayerQA = new CCH5PlayerQA(
                      this.playerInnerApi,
                      this.params,
                      this.videoPlayData,
                      this.videoBox,
                      T
                    )),
                    this.ccPlayerQA.init()),
                  !this.playerInnerApi.isVideoPlay() ||
                    $.isIPad() ||
                    $.isMoble() ||
                    ((this.ccPlayerKnow = new CCH5Knowledge(
                      this.playerInnerApi,
                      this.params,
                      this.videoBox,
                      F
                    )),
                    this.params.learnBtnTxt && this.ccPlayerKnow.init()),
                  this.videoPlayData.interactAuths &&
                    this.videoPlayData.interactAuths.length &&
                    this.getInteractData(),
                  (this.ccPlayerCtrol = new CCH5PlayerCtrol({
                    playerApi: this.playerInnerApi,
                    params: this.params,
                    videoPlayData: this.videoPlayData,
                    parentEle: this.videoBox,
                    zIndex: A,
                    ccPlayerShare: this.ccPlayerShare,
                    ccPlayerMore: this.ccPlayerMore,
                    ccPlayerExercise: this.ccPlayerExercise,
                    ccPlayerQA: this.ccPlayerQA,
                    ccPlayList: this.ccPlayList,
                    ccPlayerRightMenu: this.ccPlayerRightMenu,
                  })),
                  this.ccPlayerCtrol.init(),
                  this.extralFuncs.push(this.ccPlayerCtrol),
                  (this.outerDom.fullsBtn =
                    this.ccPlayerCtrol.getCtrolDom().fullsBtn),
                  (this.outerDom.progressBar =
                    this.ccPlayerCtrol.getCtrolDom().progressBar);
                var t = this.params.note;
                !t ||
                  !t.courseName ||
                  !t.lessonName ||
                  !t.studentId ||
                  !t.studentName ||
                  !this.params.openNote ||
                  this.isWasmPlay ||
                  !this.playerInnerApi.isVideoPlay() ||
                  $.isIPad() ||
                  $.isMoble() ||
                  this.getNoteToken(),
                  this.videoPlayData.marquee &&
                  this.playerInnerApi.isVideoPlay()
                    ? (this.ccPlayerMarquee &&
                        (this.ccPlayerMarquee.destroy(),
                        (this.ccPlayerMarquee = null)),
                      (this.ccPlayerMarquee = new CCH5PlayerMarquee(
                        this.playerInnerApi,
                        this.params,
                        this.videoPlayData,
                        this.videoBox,
                        g,
                        this.oVideo
                      )),
                      this.ccPlayerMarquee.init(),
                      this.ccPlayerMarquee.detectionMarquee(function () {
                        if (i.isSwitchVideoSmooth)
                          i.ccPlayerMarquee.stopDetectionMarquee();
                        else {
                          i.playerInnerApi.destroy(!0),
                            i.playerInnerApi.showPlayerError();
                          var e = m.querySelector("#cc_" + i.params.vid);
                          e && e.remove();
                        }
                      }),
                      this.extralFuncs.push(this.ccPlayerMarquee))
                    : this.ccPlayerMarquee &&
                      (this.ccPlayerMarquee.destroy(),
                      (this.ccPlayerMarquee = null)),
                  this.videoPlayData.staticMarquee &&
                    this.playerInnerApi.isVideoPlay() &&
                    ((this.ccPlayerStaticMarquee = new CCH5StaticPlayerMarquee(
                      this.playerInnerApi,
                      this.params,
                      this.videoPlayData,
                      this.videoBox,
                      P,
                      this.oVideo
                    )),
                    this.ccPlayerStaticMarquee.init(),
                    this.ccPlayerStaticMarquee.detectionMarquee(function () {
                      if (i.isSwitchVideoSmooth)
                        i.ccPlayerStaticMarquee.stopDetectionMarquee();
                      else {
                        i.playerInnerApi.destroy(!0),
                          i.playerInnerApi.showPlayerError();
                        var e = m.querySelector("#cc_" + i.params.vid);
                        e && e.remove();
                        var t = m.querySelector("#staticMarquee");
                        t && t.remove();
                      }
                    }),
                    this.extralFuncs.push(this.ccPlayerStaticMarquee)),
                  !this.isWasmPlay &&
                    this.videoPlayData.vrmode &&
                    this.playerInnerApi.isVideoPlay() &&
                    ((this.ccPlayerVr = new CCH5PlayerVr(
                      this.playerInnerApi,
                      this.params,
                      this.videoPlayData,
                      this.playerContainer,
                      r,
                      this.oVideo
                    )),
                    this.ccPlayerVr.init(),
                    (this.oVideo.style.position = "absolute"),
                    this.extralFuncs.push(this.ccPlayerVr)),
                  this.videoPlayData.visitor &&
                    this.playerInnerApi.isVideoPlay() &&
                    ((this.ccPlayerVistor = new CCH5PlayerVistor(
                      this.playerInnerApi,
                      this.params,
                      this.videoPlayData,
                      this.videoBox,
                      B
                    )),
                    this.ccPlayerVistor.init()),
                  this.params.signConfig &&
                    ((this.ccPlayerSign = new CCH5PlayerSign({
                      playerApi: this.playerInnerApi,
                      params: this.params,
                      videoPlayData: this.videoPlayData,
                      parentEle: this.videoBox,
                      zIndex: L,
                    })),
                    this.ccPlayerSign.init()),
                  this.isWasmPlay ||
                    ((this.ccPlayerAdPaused = new CCH5PlayerAdPaused(
                      this.playerInnerApi,
                      this.params,
                      this.videoPlayData,
                      this.videoBox,
                      u,
                      this.ccPlayerQA,
                      this.ccPlayerExercise,
                      this.ccPlayerVistor
                    )),
                    this.ccPlayerAdPaused.init()),
                  this.initStatistic(),
                  this.createBarrage();
                var s =
                  this.videoPlayData.config && this.videoPlayData.config.logo;
                s &&
                  s.url &&
                  ((this.ccPlayerLogo = new CCH5PlayerLogo(
                    this.playerInnerApi,
                    this.params,
                    this.videoPlayData,
                    this.videoBox,
                    o
                  )),
                  this.ccPlayerLogo.init()),
                  this.playerTrack.initEvent(),
                  this.extralFuncs.push(this.playerTrack),
                  this.params.tailId
                    ? ((this.ccPlayerTail = new CCH5PlayerTail({
                        playerApi: this.playerInnerApi,
                        params: this.params,
                        videoPlayData: this.videoPlayData,
                        parentEle: this.videoBox,
                        zIndex: p,
                        videoElem: this.videoElem,
                      })),
                      this.ccPlayerTail.init())
                    : ((this.ccPlayerAdEnd = new CCH5PlayerAdEnd({
                        playerApi: this.playerInnerApi,
                        params: this.params,
                        videoPlayData: this.videoPlayData,
                        parentEle: this.videoBox,
                        zIndex: p,
                        videoElem: this.videoElem,
                      })),
                      this.ccPlayerAdEnd.init(),
                      this.extralFuncs.push(this.ccPlayerAdEnd)),
                  "true" == String(this.params.statement) &&
                    this.params.statementText &&
                    "true" == String(this.params.customizedMobile) &&
                    $.isMoble() &&
                    !$.isIPad() &&
                    ((this.ccPlayerStatement = new CCH5PlayerStatement(
                      this.params,
                      this.videoBox,
                      j
                    )),
                    this.ccPlayerStatement.init(),
                    this.extralFuncs.push(this.ccPlayerStatement));
              },
              initStatistic: function () {
                (this.ccH5PlayerStatistic = new CCH5PlayerStatistic(
                  this.playerInnerApi,
                  this.params,
                  this.videoPlayData,
                  this.playerContainer,
                  v
                )),
                  this.ccH5PlayerStatistic.init(),
                  this.extralFuncs.push(this.ccH5PlayerStatistic);
              },
              createBarrage: function () {
                "true" == this.params.open_barrage &&
                  ((this.ccPlayerBarrage = new CCPlayerBarrage(
                    this.playerInnerApi,
                    this.params,
                    this.videoPlayData,
                    this.videoBox,
                    i,
                    E,
                    this.playerContainer,
                    this.ccPlayList
                  )),
                  this.ccPlayerBarrage.init(),
                  this.extralFuncs.push(this.ccPlayerBarrage));
              },
              initPlayerBase: function () {
                (this.oLoading = $.queryEle(
                  ".ccH5Loading",
                  this.playerContainer
                )),
                  (this.cch5SpeedTips = $.queryEle(
                    ".cch5SpeedTips",
                    this.playerContainer
                  )),
                  (this.oInfo = $.queryEle(".ccH5Info", this.playerContainer)),
                  (this.videoBox = $.queryEle(
                    ".ccH5playerBox",
                    this.playerContainer
                  )),
                  (this.audioBg = $.queryEle(
                    ".ccH5AudioBg",
                    this.playerContainer
                  )),
                  (this.switchVideoBtn = $.queryEle(
                    ".ccbgButton",
                    this.playerContainer
                  )),
                  this.switchVideoBtn && (this.switchVideoBtn.style.zIndex = H),
                  (this.ccMask = $.queryEle("#ccMask", this.playerContainer)),
                  (this.playBtn = $.queryEle(
                    "#replaybtn",
                    this.playerContainer
                  )),
                  (this.historyTimeBox = $.queryEle(
                    "#ccH5historyTimeBox",
                    this.playerContainer
                  )),
                  (this.outerDom.historyTimeBox = this.historyTimeBox),
                  (this.cch5TipToast = $.queryEle(
                    ".cch5TipToast",
                    this.playerContainer
                  )),
                  this.oLoading && (this.oLoading.style.zIndex = D),
                  this.cch5SpeedTips && (this.cch5SpeedTips.style.zIndex = V),
                  this.oInfo && (this.oInfo.style.zIndex = M),
                  this.ccMask && (this.ccMask.style.zIndex = C),
                  this.playBtn && (this.playBtn.style.zIndex = S),
                  this.historyTimeBox && (this.historyTimeBox.style.zIndex = w),
                  (this.poster = $.queryEle(
                    ".ccH5Poster",
                    this.playerContainer
                  ));
                var e = $.getImgSrc(this.params, this.videoPlayData);
                (this.posterImg = $.queryEle(
                  ".ccH5Poster>img",
                  this.playerContainer
                )),
                  this.posterImg && (this.posterImg.src = e),
                  this.poster &&
                    ((this.poster.style.zIndex = x),
                    (this.poster.style.textAlign = "center")),
                  this.audioBg &&
                    ((this.audioBg.style.zIndex = s),
                    this.playerInnerApi.isVideoPlay()
                      ? (this.audioBg.style.display = "none")
                      : (this.audioBg.style.display = "block")),
                  this.inited ||
                    (this.playBtn && (this.playBtn.style.display = "block"),
                    this.historyTimeBox &&
                      (this.historyTimeBox.style.display = "flex"),
                    "true" !== this.params.playReadyShowCtrol &&
                      this.playerInnerApi.isVideoPlay() &&
                      this.poster &&
                      (this.poster.style.display = "flex")),
                  (0 == this.videoPlayData.videoCopies.length ||
                    this.isChangeVideo ||
                    this.isSwitchVideoSmooth) &&
                    this.switchVideoBtn &&
                    (this.switchVideoBtn.style.display = "none");
              },
              createVideoView: function (e, t) {
                if (e || 20 != this.videoPlayData.safeLevel) {
                  var i = $.queryEle("video", this.playerContainer);
                  if (this.videoElem)
                    this.videoElem && this.videoBox.appendChild(this.videoElem),
                      (i = this.videoElem);
                  else {
                    i && this.videoBox.removeChild(i),
                      (i = m.createElement("video")),
                      this.videoBox.appendChild(i);
                    (i.outerHTML =
                      "<video webkit-playsinline playsinline></video>"),
                      (i = $.queryEle("video", this.playerContainer)),
                      (this.videoElem = i);
                  }
                  (i.id = "cc_" + this.params.vid),
                    (i.poster = ""),
                    e ||
                      t ||
                      (i.poster = $.getImgSrc(this.params, this.videoPlayData)),
                    i.setAttribute("x5-playsinline", ""),
                    i.setAttribute("x-webkit-airplay", "allow"),
                    this.params.useX5Play + "" == "true" &&
                      $.isAndroid() &&
                      $.isWeixin() &&
                      -1 < this.currentCopy.playurl.indexOf(".mp4") &&
                      (i.removeAttribute("x5-playsinline"),
                      i.removeAttribute("x-webkit-airplay"),
                      i.setAttribute("x5-video-player-type", "h5-page"));
                  var s = $.getCross(this.params, this.videoPlayData);
                  s && 0 < s.length && (i.crossOrigin = s),
                    "true" !== this.params.autoStart ||
                      $.isMoble() ||
                      (i.autoplay = "autoplay"),
                    "false" !== this.params.autoStart ||
                      $.isMoble() ||
                      (this.playerInnerApi.showPlayBtn(),
                      this.ccPlayerCtrol && this.ccPlayerCtrol.showPlayBtn()),
                    "true" === this.params.loop &&
                      this.params.loopTimes <= 0 &&
                      (i.loop = "loop"),
                    (i.style.width = "100%"),
                    (i.style.height = "100%"),
                    (i.style.zIndex = f),
                    this.params.objectFit &&
                      (i.style.objectFit = this.params.objectFit),
                    (this.oVideo = i),
                    (this.outerDom.oVideo = i),
                    this.oVideoTemp &&
                      (this.oVideoTemp.remove(), (this.oVideoTemp = null));
                } else this.createWasmPlayer();
              },
              createWasmPlayer: function () {
                var t = this;
                this.isWasmPlay = !0;
                var i = {
                  cssFile: "https://p.bokecc.com/css/hdrm/hdrm.css?v=" + v,
                  jsFile: "https://p.bokecc.com/js/hdrm/hdrm-sdk.js?v=" + v,
                  libPath: "https://p.bokecc.com/js/hdrm/lib/",
                };
                if (y.isWasmTest || this.params.wasmPrefixUrl) {
                  var s = this.params.wasmPrefixUrl || "http://xxx.aaa.com";
                  i = {
                    cssFile: s + "/dist/hdrm.css",
                    jsFile: s + "/dist/hdrm-sdk.js",
                    libPath: s + "/dist/lib/",
                  };
                }
                if (y.HDrmPlayer) {
                  var a = m.createElement("div");
                  (a.id = "cc_video_" + this.params.vid),
                    (a.style.width = "100%"),
                    (a.style.height = "100%"),
                    (a.style.zIndex = f),
                    this.params.objectFit &&
                      (a.style.objectFit = this.params.objectFit),
                    this.videoBox.appendChild(a);
                  var r = this.videoBox.querySelector("#" + a.id),
                    o = new y.HDrmPlayer(r, {
                      sourceURL: this.currentCopy.playurl,
                      type: "HLS",
                      libPath: i.libPath,
                      playBackRate: 1,
                      autoPlay: "true" == this.params.autoStart,
                      isSdk: !0,
                      vid: this.videoPlayData.vid,
                    });
                  y.isWasmTest && (y.ccwPlayer = o);
                  var l = this,
                    c = {
                      play: "play",
                      ready: "ready",
                      playing: "playing",
                      pause: "pause",
                      timeupdate: "timeUpdate",
                      loadedmetadata: "loadedMetaData",
                      loadeddata: "loadedMetaData",
                      canplay: "loadedMetaData",
                      ended: "end",
                      progress: "bufferupdate",
                      seeking: "seeking",
                      seeked: "seekend",
                      waiting: "wait",
                      error: "throwError",
                      click: "click",
                    },
                    d = {},
                    h = {},
                    n = !1,
                    u = this.currentCopy.playurl,
                    p = {
                      isWasm: !0,
                      seek: function (e) {
                        (e += 1), o.seek(1e3 * e);
                      },
                      pause: function () {
                        o.pause(!1);
                      },
                      play: function () {
                        0 < o.duration && o.currentTime >= 1e3 * o.duration
                          ? o.seek(0)
                          : o.play(!0);
                      },
                      resizeScreen: function () {
                        setTimeout(function () {
                          var e = l.videoBox.clientWidth,
                            t = l.videoBox.clientHeight,
                            i = m.querySelector("hd-container"),
                            s = m.querySelector("hd-screen");
                          i &&
                            s &&
                            ((i.style.width = e + "px"),
                            (i.style.height = t + "px"),
                            (s.style.width = e + "px"),
                            (s.style.height = t + "px"),
                            o.resizeScreen());
                        }, 200);
                      },
                      addEventListener: function (e, t) {
                        if ("function" == typeof t)
                          if ("click" != e) {
                            var i = c[e] || e;
                            d.name instanceof Array ||
                              ((d.name = []), (h.name = [])),
                              d.name.push(t);
                            var s = function s() {
                              (n && ("pause" === e || "seeked" === e)) ||
                                t({ target: p });
                            };
                            h.name.push(s), o.on(i, s);
                          } else {
                            l.playerContainer
                              .querySelector("hd-container")
                              .addEventListener("click", t);
                          }
                      },
                      removeEventListener: function (e, t) {
                        if ("function" == typeof t) {
                          if ("click" == e) {
                            var i =
                              l.playerContainer.querySelector("hd-container");
                            return (
                              i.addEventListener("click", t),
                              void i.removeEventListener("click", t)
                            );
                          }
                          var s = c[e] || e,
                            a = d.name;
                          if (a)
                            for (var r = 0; r < a.length; r++)
                              if (a[r] == t) {
                                var n = h.name[r];
                                return (
                                  o.off(s, n),
                                  (d.name[r] = undefined),
                                  void (h.name[r] = undefined)
                                );
                              }
                        }
                      },
                      querySelector: function () {
                        return undefined;
                      },
                      get src() {
                        return u;
                      },
                      set src(e) {
                        (n = !0),
                          o.pause(!0),
                          l.showLoading(),
                          (u = e),
                          o.changeRate({ url: e }, !0);
                      },
                      get currentSrc() {
                        return u;
                      },
                      get currentTime() {
                        var e = o.currentTime / 1e3 - 1;
                        return e < 0 && (e = 0), e;
                      },
                      set currentTime(e) {
                        p.seek(e);
                      },
                      get buffered() {
                        var t = o.buffer();
                        return {
                          length: function () {
                            return 1;
                          },
                          start: function (e) {
                            return t[0] / 1e3;
                          },
                          end: function (e) {
                            return t[1] / 1e3;
                          },
                        };
                      },
                      get paused() {
                        return o.paused;
                      },
                      get duration() {
                        return o.duration;
                      },
                      get volume() {
                        return o.volume;
                      },
                      set volume(e) {
                        o.volume = e;
                      },
                      get muted() {
                        return o.muted;
                      },
                      set muted(e) {
                        o.muted = e;
                      },
                      set playbackRate(e) {
                        o.playbackRate = e;
                      },
                      get playbackRate() {
                        return o.playbackRate;
                      },
                      get canvas() {
                        return o.imagePlayer && o.imagePlayer.screen
                          ? o.imagePlayer.screen.canvas
                          : null;
                      },
                      destroy: function () {
                        (d = {}), (h = {}), o.destroy();
                      },
                    };
                  p.resizeScreen(),
                    (this.oVideo = p),
                    this.playerCore
                      ? ((this.playerCore = o), this.playerCore.play())
                      : (this.playerCore = o),
                    this.initAfterVideoCreated(),
                    o.on("end", function () {
                      o.pause(!1);
                    }),
                    ($.isIPhone() || $.isAndroid() || $.isIPad()) &&
                      m.addEventListener("visibilitychange", function () {
                        m.hidden && o.pause(!1);
                      }),
                    o.on("timeUpdate", function (e) {
                      l.hideLoading(), n && 0 < p.buffered.end() && (n = !1);
                    });
                } else
                  $.loadCss(i.cssFile, function () {
                    $.loadScript([i.jsFile], function () {
                      try {
                        t.createWasmPlayer();
                      } catch (e) {
                        t.processPlayerError(e);
                      }
                    });
                  });
              },
              createAudioView: function (e) {
                if ($.isM3u8Url(this.currentCopy.playurl))
                  this.createVideoView(!0, e);
                else {
                  var t = $.queryEle("audio", this.playerContainer);
                  this.audioElem
                    ? (this.videoBox.appendChild(this.audioElem),
                      (t = this.audioElem))
                    : (t && this.videoBox.removeChild(t),
                      (t = m.createElement("audio")),
                      this.videoBox.appendChild(t),
                      (t.outerHTML = "<audio><source></source></audio>"),
                      (t = $.queryEle("audio", this.playerContainer)),
                      (this.audioElem = t)),
                    (t.id = "cc_" + this.params.vid),
                    "true" !== this.params.autoStart ||
                      $.isMoble() ||
                      (t.autoplay = "autoplay"),
                    "true" === this.params.loop &&
                      this.params.loopTimes <= 0 &&
                      (t.loop = "loop"),
                    (t.style.zIndex = f);
                  var i = $.getCross(this.params, this.videoPlayData);
                  i && 0 < i.length && (t.crossOrigin = i),
                    -1 !== (this.params.height + "").indexOf("%") &&
                      this.videoBox.clientHeight < 1 &&
                      (this.videoBox.style.height = "200px"),
                    (this.oVideo = t),
                    (this.outerDom.oVideo = this.oVideo);
                }
              },
              setCustomSkin: function () {
                var e = m.getElementById("skinStyle");
                e && e.parentNode.removeChild(e);
                var t = this.params.skinColor;
                if (t && "#ff920a" !== t.toLowerCase()) {
                  var i = this.colorRGB(t),
                    s =
                      ".ccH5vmbarPro,.ccH5CurrentPro,.ccbgButton,.ccH5vmbarPro,#ccH5-share-box .rows .btn,.ccH5SettingRow span.active:hover{background:" +
                      t +
                      "!important;}.switchVttBox ul li.active,.ccbgButton,.ccH5TipBtn{border-color:" +
                      t +
                      "!important;}.ccH5DragVmBtn:active,.ccVideoMark.active {box-shadow:0px 0px 3px 3px " +
                      t +
                      "!important;}.ccH5hdul li.selected,.ccH5spul li.selected,.switchVttBox ul li.active,#share-btn:hover, #ccH5RightMenu .ccH5RightMenuBtn:hover,.ccH5FreeTimeTipBox a,.freeTimeDuration,.ccH5TipBtn{color:" +
                      t +
                      "!important;}span.ccH5Btn-hover,.ccH5LearnBtn:hover,.ccH5OptionBtn:hover,.ccH5SettingRow span.active{background:rgba(" +
                      i +
                      ",.6)}";
                  if (
                    ($.isAndroid() ||
                      $.isIPhone() ||
                      (s +=
                        ".ccH5DragBtn:active{box-shadow:0px 0px 5px 5px " +
                        t +
                        "!important;}"),
                    "true" === this.params.open_barrage)
                  ) {
                    var a =
                        ".cc_open .cc_btn_text,.cc_btn_type:hover{color:" +
                        t +
                        "!important;} .cc_open .cc_btn_toggle,.cc_barrage_progress_bar .cc_barrage_progress_play, .cc_barrage_progress_bar .cc_barrage_progress_handler,.cc_barrage_progress_bar .cc_barrage_progress_handler:hover:after {background:" +
                        t +
                        "!important;}",
                      r =
                        ".cc_mod_barrage .cc_btn_submit:hover{background: " +
                        t +
                        ";background: linear-gradient(to right,rgba(" +
                        i +
                        ",0.7) 0," +
                        t +
                        " 60%)!important;}";
                    ($.isIPad() ||
                      $.isWindowsPhoneOS() ||
                      $.isAndroid() ||
                      $.isIPhone()) &&
                      (r = ".cc_mod_barrage .cc_btn_submit," + r),
                      (s = s + a + r);
                  }
                  if (this.params.listid)
                    s +=
                      ".ccH5-plist-ul .plist-li-right:hover, .ccH5-plist-ul .selected-item .plist-li-right {color:" +
                      t +
                      "!important;}.ccH5-plist-ul .selected-item .plist-li-left {border-color:" +
                      t +
                      "!important;}.ccH5ListBtn:hover{background:rgba(" +
                      i +
                      ",0.6)!important;}";
                  $.addCssByStyle(s, "skinStyle");
                }
              },
              setConfigRightMenu: function (e) {
                this.params.rightMenu &&
                  "string" == typeof this.params.rightMenu &&
                  (this.params.rightMenu = JSON.parse(this.params.rightMenu));
                var t = this.params.rightMenu;
                if (8 !== $.IEVersion() && t && !(t.length < 1)) {
                  var i = e.filter(function (e) {
                    return -1 < t.indexOf(1 * e.index + 1);
                  });
                  this.videoPlayData.config.rightmenu.rightmenu = i;
                }
              },
              setConfigDefinitions: function () {
                if (
                  (this.params.definitions &&
                    "string" == typeof this.params.definitions &&
                    (this.params.definitions = JSON.parse(
                      this.params.definitions
                    )),
                  8 !== $.IEVersion() &&
                    this.params.definitions &&
                    this.params.definitions instanceof Array &&
                    !(this.params.definitions.length < 1))
                ) {
                  var e = this.videoPlayData.videoCopies,
                    t = this.params.definitions,
                    i = e.filter(function (e) {
                      return -1 < t.indexOf(e.quality);
                    });
                  0 < i.length && (this.videoPlayData.videoCopies = i);
                }
              },
              setDefaultDefinition: function () {
                this.isValidDefinition(this.params.allowMaxDf) ||
                  (this.params.allowMaxDf = ""),
                  this.isValidDefinition(this.params.defaultDf) ||
                    (this.params.defaultDf = ""),
                  2 != this.params.mediatype &&
                    (this.params.defaultDf
                      ? (this.params.allowMaxDf &&
                          this.params.defaultDf > this.params.allowMaxDf &&
                          (this.params.defaultDf = this.params.allowMaxDf),
                        (this.videoPlayData.defaultquality =
                          this.params.defaultDf))
                      : this.params.allowMaxDf &&
                        this.videoPlayData.defaultquality >
                          this.params.allowMaxDf &&
                        (this.videoPlayData.defaultquality =
                          this.params.allowMaxDf));
              },
              isValidDefinition: function (e) {
                for (
                  var t = this.videoPlayData.videoCopies, i = 0;
                  i < t.length;
                  i++
                )
                  if (e == t[i].quality) return !0;
                return !1;
              },
              initCurrentCopy: function () {
                var e = this.videoPlayData.videoCopies,
                  t = this.videoPlayData.audioCopies;
                if ($.isAudioPlay(this.params, this.videoPlayData)) {
                  for (i = 0; i < t.length; i++)
                    if (this.videoPlayData.defaultquality == t[i].quality)
                      return (
                        (this.currentCopy = t[i]),
                        void (this.currentCopy.index = i)
                      );
                  0 < t.length &&
                    ((this.currentCopy = t[0]),
                    this.currentCopy && (this.currentCopy.index = 0));
                } else {
                  for (var i = 0; i < e.length; i++)
                    if (this.videoPlayData.defaultquality == e[i].quality)
                      return (
                        (this.currentCopy = e[i]),
                        void (this.currentCopy.index = i)
                      );
                  0 < e.length &&
                    ((this.currentCopy = e[0]),
                    this.currentCopy && (this.currentCopy.index = 0));
                }
              },
              setStorageConfig: function (e) {
                if (y.sessionStorage) {
                  var t =
                    JSON.parse(y.sessionStorage.getItem("ccH5PlayerStorage")) ||
                    {};
                  (!e && this.params.defaultDf) ||
                    !t.df ||
                    (this.params.defaultDf = t.df),
                    (!e && this.params.rate) ||
                      !t.rate ||
                      (this.params.rate = t.rate),
                    (!e && this.params.volumn) ||
                      t.volume === undefined ||
                      (this.params.volumn = t.volume);
                }
              },
              preDealServerData: function (e) {
                var t = this,
                  i = e.config;
                if (
                  (i &&
                    ((this.params.autoStart =
                      this.params.autoStart || (1 == i.autoplay) + ""),
                    (this.params.isShare =
                      this.params.isShare || (1 == i.share) + ""),
                    (this.params.banDrag =
                      this.params.banDrag || (1 == i.bandrag) + ""),
                    this.params.banConsole === undefined &&
                      i.pcDevelopMode &&
                      (this.params.banConsole = 1 == i.pcDevelopMode),
                    this.params.showNetworkInfoMenu === undefined &&
                      i.showNetworkInfoMenu !== undefined &&
                      (this.params.showNetworkInfoMenu =
                        1 == i.showNetworkInfoMenu),
                    this.params.forward === undefined &&
                      i.fastforwardtime &&
                      (0 == i.fastforwardtype
                        ? (this.forwardSecond = parseInt(i.fastforwardtime))
                        : 1 == i.fastforwardtype &&
                          (this.forwardSecond = i.fastforwardtime + "%")),
                    (this.params.playListStyle =
                      this.params.playListStyle || i.playliststyle),
                    this.params.playListExpand === undefined &&
                      (this.params.playListExpand = i.playlistextend),
                    (this.params.loadingPic =
                      this.params.loadingPic || i.loadingpic),
                    this.params.skinColor === undefined &&
                      i.skincolor &&
                      (this.params.skinColor = i.skincolor)),
                  e.reskeys || (e.reskeys = []),
                  e.reskeys.length)
                ) {
                  for (var s = {}, a = [], r = 0; r < e.reskeys.length; r++)
                    (s[e.reskeys[r]] = 1),
                      "h5_encrypt_enhance" !== e.reskeys[r] &&
                        "invisible_marquee" !== e.reskeys[r] &&
                        a.push(e.reskeys[r]);
                  (e.reskeys = s), (e.interactAuths = a);
                }
                if (
                  ((this.params.forceShowVote = this.params.forceShowVote + ""),
                  this.params.isOpenLoadingPic + "" == "false" &&
                    (this.params.loadingPic = ""),
                  (this.params.isShowRightMenu =
                    this.params.isShowRightMenu + ""),
                  (this.params.banDrag = this.params.banDrag + ""),
                  this.params.open_barrage == undefined
                    ? (this.params.open_barrage =
                        1 == e.isopenbarrage ? "true" : "false")
                    : (this.params.open_barrage =
                        this.params.open_barrage + ""),
                  this.params.subtitleModel !== undefined &&
                    (e.subtitlemodel = this.params.subtitleModel),
                  (this.params.mobileFullsMarquee =
                    this.params.mobileFullsMarquee + ""),
                  (this.params.playReadyShowCtrol =
                    this.params.playReadyShowCtrol + ""),
                  (this.params.closeHistoryTime =
                    this.params.closeHistoryTime + ""),
                  (this.params.progressbar_enable =
                    this.params.progressbar_enable + ""),
                  (this.params.realAutoPlay = this.params.realAutoPlay + ""),
                  (this.params.watchStartTime =
                    1 * this.params.watchStartTime
                      ? 1 * this.params.watchStartTime
                      : 0),
                  (this.params.loop = this.params.loop + ""),
                  (this.params.loopTimes =
                    1 * this.params.loopTimes ? 1 * this.params.loopTimes : 0),
                  (this.params.showHdBtn = this.params.showHdBtn + ""),
                  (this.params.allowSelectHd = this.params.allowSelectHd + ""),
                  (this.params.defaultDf = 1 * this.params.defaultDf),
                  (this.params.allowMaxDf = 1 * this.params.allowMaxDf),
                  (this.params.customizedMobile =
                    this.params.customizedMobile + ""),
                  this.setStorageConfig(),
                  this.params.isShowExercise + "" == "false" &&
                    delete e.exercises,
                  e.exercises &&
                    this.params.exercises &&
                    ("string" == typeof this.params.exercises &&
                      (this.params.exercises = JSON.parse(
                        this.params.exercises
                      )),
                    8 !== $.IEVersion() &&
                      this.params.exercises instanceof Array &&
                      0 < this.params.exercises.length))
                ) {
                  var n = this.params.exercises,
                    o = e.exercises.filter(function (e, t) {
                      return -1 < n.indexOf(t + 1);
                    });
                  0 < o.length && (e.exercises = o);
                }
                (this.params.isShowQuestions + "" == "false" ||
                  (e.exercises !== undefined && e.questions !== undefined)) &&
                  delete e.questions,
                  ((this.params.watchStartTime &&
                    e.visitor &&
                    this.params.watchStartTime >= e.visitor.appearTime) ||
                    this.params.isShowVisitor + "" == "false") &&
                    delete e.visitor,
                  this.params.watchStartTime &&
                    8 !== $.IEVersion() &&
                    (e.exercises &&
                      (e.exercises = e.exercises.filter(function (e) {
                        return 1 * e.showTime > t.params.watchStartTime;
                      })),
                    e.questions &&
                      (e.questions = e.questions.filter(function (e) {
                        return 1 * e.showTime > t.params.watchStartTime;
                      }))),
                  this.params.openNote === undefined &&
                    e.openNote !== undefined &&
                    (this.params.openNote = 1 == e.openNote),
                  this.params.canSkipExercises + "" == "true" &&
                    e.exercises &&
                    e.exercises.forEach(function (e) {
                      e.isJump = 1;
                    }),
                  this.params.logo &&
                    this.params.logo.url &&
                    (e && !e.config && (e.config = {}),
                    e.config.logo || (e.config.logo = {}),
                    (e.config.logo.url = this.params.logo.url),
                    this.params.logo.opacity !== undefined
                      ? (e.config.logo.opacity = this.params.logo.opacity)
                      : e.config.logo.opacity !== undefined &&
                        (e.config.logo.opacity = 100),
                    this.params.logo.position
                      ? (e.config.logo.position = this.params.logo.position)
                      : e.config.logo.position || (e.config.logo.position = 1),
                    this.params.logo.linkUrl !== undefined &&
                      (e.config.logo.linkurl = this.params.logo.linkUrl),
                    (this.params.logo.posX =
                      1 * this.params.logo.posX
                        ? 1 * this.params.logo.posX
                        : 0),
                    (this.params.logo.posY =
                      1 * this.params.logo.posY
                        ? 1 * this.params.logo.posY
                        : 0),
                    (this.params.logo.size =
                      1 * this.params.logo.size
                        ? 1 * this.params.logo.size
                        : 0)),
                  this.params.marquee &&
                    "[object String]" ===
                      Object.prototype.toString.call(this.params.marquee) &&
                    (this.params.marquee = JSON.parse(
                      decodeURIComponent(this.params.marquee)
                    )),
                  this.params.marquee &&
                    "[object Object]" ===
                      Object.prototype.toString.call(this.params.marquee) &&
                    "{}" !== (0, G["default"])(this.params.marquee) &&
                    (e.marquee = this.params.marquee),
                  this.params.staticMarquee &&
                    "[object Object]" ===
                      Object.prototype.toString.call(
                        this.params.staticMarquee
                      ) &&
                    "{}" !== (0, G["default"])(this.params.staticMarquee) &&
                    (e.staticMarquee = this.params.staticMarquee),
                  1 * this.params.preloadBufferLength
                    ? (this.params.preloadBufferLength =
                        this.params.preloadBufferLength < 30
                          ? 30
                          : 600 < this.params.preloadBufferLength
                          ? 600
                          : 1 * this.params.preloadBufferLength)
                    : (this.params.preloadBufferLength = 30),
                  1 * this.params.freeTime
                    ? (this.params.freeTime =
                        60 <= this.params.freeTime
                          ? 60 * parseInt(this.params.freeTime / 60)
                          : 1 * this.params.freeTime)
                    : (this.params.freeTime = 0),
                  (0 === e.authenable && 0 === e.freetime) ||
                    (0 < this.params.freeTime
                      ? (e.freetime = this.params.freeTime)
                      : (e.freetime =
                          60 <= e.freetime
                            ? 60 * parseInt(e.freetime / 60)
                            : e.freetime)),
                  this.adjustSafeLevel(e),
                  this.preDealCopies(e),
                  this.setConfigDefinitions(),
                  this.setDefaultDefinition(),
                  i &&
                    i.rightmenu &&
                    i.rightmenu.rightmenu &&
                    0 < i.rightmenu.rightmenu.length &&
                    this.setConfigRightMenu(i.rightmenu.rightmenu),
                  this.videoPlayData.videoCopies &&
                    1 === this.videoPlayData.videoCopies.length &&
                    this.params.openBtnEnMode + "" != "true" &&
                    (this.lang.networkWaiting =
                      "播放不佳，请暂停一会或切换线路试试");
              },
              preDealCopies: function (t) {
                var i = this;
                if (t.copies && 0 != t.copies.length) {
                  if ($.isRealtimePlay(t)) {
                    var e = t.copies[0];
                    (e.desp = ""), (t.copies = [e]);
                  }
                } else t.copies = [];
                t.copies.forEach(function (e) {
                  $.isTV04()
                    ? (e.playurl &&
                        (e.playurl = e.playurl.replace(/https:/i, "http:")),
                      e.backupurl &&
                        (e.backupurl = e.backupurl.replace(/https:/i, "http:")))
                    : (e.playurl &&
                        (e.playurl = e.playurl.replace(/http:/i, "https:")),
                      e.backupurl &&
                        (e.backupurl = e.backupurl.replace(
                          /http:/i,
                          "https:"
                        ))),
                    i.params.dfDesp &&
                      i.params.dfDesp[e.quality] &&
                      (e.desp = i.params.dfDesp[e.quality]);
                }),
                  t.copies &&
                    0 == t.authenable &&
                    t.freetime &&
                    t.copies[0] &&
                    $.isM3u8Url(t.copies[0].playurl) &&
                    t.copies.forEach(function (e) {
                      (e.playurl = e.playurl + "&freetime=" + t.freetime),
                        (e.backupurl = e.backupurl + "&freetime=" + t.freetime);
                    });
                var s = this.params.customerId;
                if (
                  (s &&
                    ((s = encodeURIComponent(s)),
                    t.copies.forEach(function (e) {
                      (e.playurl = e.playurl + "&custom_id=" + s),
                        (e.backupurl = e.backupurl + "&custom_id=" + s);
                    })),
                  t.reskeys.h5_play_cmf && 15 <= t.safeLevel)
                ) {
                  this.initAudioCopiesAndVideoCopies(t), this.initCurrentCopy();
                  var a = this.currentCopy.playurl,
                    r = t.reskeys || [],
                    n = t.safeLevel;
                  (20 != t.safeLevel &&
                    !$.shouldHlsPlayForArgs(this.params, a, r, n)) ||
                    t.copies.forEach(function (e) {
                      e.playurl &&
                        (e.playurl = e.playurl.replace(".m3u8", ".cmf")),
                        e.backupurl &&
                          (e.backupurl = e.backupurl.replace(".m3u8", ".cmf"));
                    });
                }
                this.initAudioCopiesAndVideoCopies(t);
              },
              initAudioCopiesAndVideoCopies: function (e) {
                var t = [],
                  i = [];
                e.copies.forEach(function (e) {
                  2 == e.mediatype ? i.push(e) : t.push(e);
                }),
                  (this.videoPlayData = e),
                  (this.videoPlayData.audioCopies = this.resortCopies(i)),
                  (this.videoPlayData.videoCopies = this.resortCopies(t));
              },
              adjustSafeLevel: function (e) {
                var t = e.safeLevel || 0;
                if (
                  (this.params.forceWasm && (t = 20),
                  15 == t && !$.isHlsSupported())
                ) {
                  var i = navigator.userAgent.toLowerCase();
                  e.reskeys &&
                    e.reskeys.h5_encrypt_enhance_to_wasm &&
                    /(quark|ucbrowser|mqqbrowser)/.test(i) &&
                    (t = 20);
                }
                e.safeLevel = t;
              },
              addVideoListenner: function (e, t) {
                (this.videoEventAdded = !0),
                  this.videoEvents.push({ name: e, handle: t }),
                  this.addListener(this.oVideo, e, t),
                  "ended" === e &&
                    this.playerInnerApi.addPlayerEventListenner(
                      this.playerEvent.triggerCustomEnd,
                      t
                    );
              },
              removeVideoListenner: function (e, t) {
                this.oVideo.removeEventListener &&
                  this.oVideo.removeEventListener(e, t);
              },
              onceVideoListener: function (i, s) {
                var a = this,
                  r = function r(e, t) {
                    a.removeVideoListenner(i, r), s(e, t);
                  };
                this.addVideoListenner(i, r);
              },
              clearVideoAllListeners: function () {
                var e = !0,
                  t = !1,
                  i = undefined;
                try {
                  for (
                    var s, a = (0, X["default"])(this.videoEvents);
                    !(e = (s = a.next()).done);
                    e = !0
                  ) {
                    var r = s.value;
                    this.oVideo.removeEventListener(r.name, r.handle);
                  }
                } catch (n) {
                  (t = !0), (i = n);
                } finally {
                  try {
                    !e && a["return"] && a["return"]();
                  } finally {
                    if (t) throw i;
                  }
                }
                (this.videoEvents = []), (this.videoEventAdded = !1);
              },
              addGlobalEventListener: function (e, t, i) {
                this.globalEvents.push({ ele: e, type: t, handle: i }),
                  e.addEventListener(t, i, !1);
              },
              removeGlobalEventListener: function () {
                var e = this.globalEvents,
                  t = !0,
                  i = !1,
                  s = undefined;
                try {
                  for (
                    var a, r = (0, X["default"])(e);
                    !(t = (a = r.next()).done);
                    t = !0
                  ) {
                    var n = a.value;
                    n.ele.removeEventListener(n.type, n.handle);
                  }
                } catch (o) {
                  (i = !0), (s = o);
                } finally {
                  try {
                    !t && r["return"] && r["return"]();
                  } finally {
                    if (i) throw s;
                  }
                }
                this.globalEvents = [];
              },
              resolvePlayState: function (e) {
                if (
                  ((this.resolveStateTime = e),
                  !this.playerInnerApi.isHlsPlaying())
                ) {
                  this.fixCurrentTime();
                  var t = this;
                  setTimeout(function () {
                    t.ccPlayerCtrol.resetSp();
                  }, 500);
                }
              },
              fixCurrentTime: function (e) {
                if (!this.isWasmPlay && (e || !this.hls)) {
                  $.isIPhone() && this.playerInnerApi.videoPlay();
                  var s = this,
                    t = function t() {
                      s.removeVideoListenner("canplay", t),
                        s.resolveStateTime &&
                          s.playerInnerApi.setCurrentTime(s.resolveStateTime),
                        setTimeout(function () {
                          s.playerInnerApi.videoPlay(!0);
                        }, 300);
                    },
                    a = function a() {
                      var e =
                          "number" == typeof s.lastPlayTime
                            ? parseInt(s.lastPlayTime)
                            : 0,
                        t =
                          "number" == typeof s.resolveStateTime
                            ? parseInt(s.resolveStateTime)
                            : 0,
                        i =
                          "number" == typeof s.playerInnerApi.getCurrentTime()
                            ? parseInt(s.playerInnerApi.getCurrentTime())
                            : 0;
                      e < t || 1 < i - e
                        ? setTimeout(function () {
                            s.playerInnerApi.setCurrentTime(s.resolveStateTime);
                          }, 100)
                        : s.removeVideoListenner("timeupdate", a);
                    };
                  $.isAndroid() && $.isWeixin()
                    ? (this.playerInnerApi.videoPlay(),
                      this.playerInnerApi.setCurrentTime(this.resolveStateTime),
                      this.addVideoListenner("timeupdate", a))
                    : this.addVideoListenner("canplay", t);
                }
              },
              initVideoPlayEvents: function () {
                var t = this,
                  i = this;
                this.addVideoListenner("loadedmetadata", function () {
                  $.invokeWindow(
                    "on_player_loadedmetadata",
                    i.oVideo,
                    i.params.vid
                  );
                }),
                  this.addVideoListenner("loadeddata", function () {
                    $.invokeWindow(
                      "on_player_loadeddata",
                      i.oVideo,
                      i.params.vid
                    );
                  }),
                  this.addVideoListenner("canplay", function () {
                    i.handleCanplay();
                  }),
                  this.addVideoListenner("play", function () {
                    i.handlePlay();
                  }),
                  this.addVideoListenner("playing", function () {
                    i.handlePlaying();
                  }),
                  this.addVideoListenner("pause", function () {
                    i.handlePause();
                  }),
                  this.addVideoListenner("timeupdate", function () {
                    i.handleTimeupdate(),
                      i.handleProgress(),
                      $.invokeWindow(
                        "on_player_timeupdate",
                        i.playerInnerApi.getCurrentTime(),
                        i.params.vid
                      );
                  }),
                  this.addVideoListenner("progress", function () {
                    i.handleProgress();
                  }),
                  this.addVideoListenner("ended", function () {
                    i.handleEnded();
                  }),
                  this.addVideoListenner("seeking", function () {
                    i.handleSeeking();
                  }),
                  this.addVideoListenner("seeked", function () {
                    i.handleSeeked();
                  }),
                  this.addVideoListenner("waiting", function () {
                    i.handleWaiting();
                  }),
                  this.addVideoListenner("canplaythrough", function () {
                    i.handleCanplaythrough();
                  }),
                  this.addVideoListenner("error", function (e) {
                    i.handleError(e);
                  }),
                  this.addVideoListenner("gesturechange", function (e) {
                    1 < e.scale && i.fullScreen(e);
                  }),
                  this.addVideoListenner("touchstart", function (e) {
                    2 == e.touches.length &&
                      ((i.ctrlBar.className = "ccH5FadeIn"),
                      (i.oVideo.ontouchend = function () {
                        i.togglePlay(), (i.oVideo.ontouchend = null);
                      }));
                  }),
                  this.addVideoListenner("touchend", function (e) {
                    1 == e.changedTouches.length && i.toggleCtrlBar();
                  }),
                  $.isMoble() || $.isIPad()
                    ? this.playerContainer.addEventListener(
                        "dblclick",
                        function (e) {
                          ("video" !== e.target.nodeName.toLowerCase() &&
                            "ccBarrage" !== e.target.id) ||
                            t.playerInnerApi.toggleVideoPlay();
                        }
                      )
                    : (this.addVideoListenner("click", function () {
                        i.params.listid && i.ccPlayList.isShowing()
                          ? i.ccPlayList.hidePlayList()
                          : i.ccPlayerKnow && i.ccPlayerKnow.isShowing()
                          ? i.ccPlayerKnow.hideDrawer()
                          : i.playerInnerApi.toggleVideoPlay();
                      }),
                      this.playerContainer.addEventListener(
                        "dblclick",
                        function (e) {
                          if (
                            "video" === e.target.nodeName.toLowerCase() ||
                            "ccBarrage" === e.target.id
                          ) {
                            var t =
                              m.fullscreenElement ||
                              m.msFullscreenElement ||
                              m.mozFullScreenElement ||
                              m.webkitFullscreenElement ||
                              !1;
                            "true" !== i.params.noDblClick &&
                              (t
                                ? i.exitFullScreen()
                                : i.fullScreen(i.videoBox));
                          }
                        }
                      )),
                  $.isIPhone() &&
                    this.addVideoListenner("webkitendfullscreen", function () {
                      1 == t.videoPlayData.subtitlemodel &&
                        t.ccPlayerMore &&
                        t.ccPlayerMore.setVttFontSize(1),
                        $.invokeWindow("on_player_fullscreen", 0, t.params.vid);
                    });
              },
              initWindowEvents: function () {
                var e = this,
                  r = this;
                this.addListener(y, "orientationchange", function () {
                  r.autoProgressBar();
                }),
                  this.addListener(y, "resize", function () {
                    r.isWasmPlay &&
                      r.oVideo.resizeScreen &&
                      r.oVideo.resizeScreen();
                    var e = r.videoBox.style.width,
                      t = r.videoBox.style.position,
                      i = r.videoBox.style.zIndex,
                      s = r.videoBox.style.textIndent,
                      a = r.videoBox.style.backgroundColor;
                    r.params.closeResizeCheckPlaySafe + "" != "true" &&
                      "100%" == e &&
                      "fixed" == t &&
                      "9999" == i &&
                      "0px" == s &&
                      "rgb(0, 0, 0)" == a &&
                      ((r.videoBox.innerHTML = "视频不支持录屏模式下播放"),
                      (r.videoBox.style.color = "#ffffff"),
                      (r.videoBox.style.textAlign = "center"),
                      (r.videoBox.style.lineHeight = "490px")),
                      $.isWeixin() &&
                        $.isAndroid() &&
                        (2 == ++r.wechatCount
                          ? (r.isEnterFullscreen = !0)
                          : (r.isEnterFullscreen = !1)),
                      4 === r.wechatCount && (r.wechatCount = 0),
                      r.autoProgressBar();
                  }),
                  this.addListener(y, "keydown", function (e) {
                    32 !== e.keyCode ||
                      -1 !== e.target.toString().indexOf("Input") ||
                      -1 !== e.target.toString().indexOf("TextArea") ||
                      e.target.getAttribute("contenteditable") ||
                      e.preventDefault(),
                      (37 !== e.keyCode && 39 !== e.keyCode) ||
                        -1 !== e.target.toString().indexOf("Input") ||
                        -1 !== e.target.toString().indexOf("TextArea") ||
                        e.preventDefault(),
                      27 == e.keyCode && r.exitFullScreen();
                  }),
                  this.addListener(y, "keyup", function (e) {
                    if (r.params.preventKeyboardEvent + "" != "true") {
                      var t = 0;
                      e.preventDefault();
                      var i =
                        -1 === e.target.toString().indexOf("Input") &&
                        -1 === e.target.toString().indexOf("TextArea") &&
                        !e.target.getAttribute("contenteditable");
                      if (
                        32 === e.keyCode &&
                        i &&
                        r.params.allowKeyBoardTogglePlay + "" != "false"
                      )
                        r.togglePlay();
                      else if (
                        (37 === e.keyCode || 39 === e.keyCode) &&
                        -1 === e.target.toString().indexOf("Input") &&
                        -1 === e.target.toString().indexOf("TextArea")
                      ) {
                        if (39 === e.keyCode && "true" == r.params.banDrag)
                          return;
                        if (
                          ("number" != typeof r.forwardSecond &&
                            r.forwardSecond.endsWith("%") &&
                            (r.forwardSecond = parseInt(
                              (r.playerInnerApi.getTotalTime() *
                                parseInt(r.forwardSecond)) /
                                100
                            )),
                          0 == r.forwardSecond)
                        )
                          return;
                        (t =
                          37 === e.keyCode
                            ? r.playerInnerApi.getCurrentTime() -
                              r.forwardSecond
                            : r.playerInnerApi.getCurrentTime() +
                              r.forwardSecond),
                          r.playerInnerApi.setCurrentTime(t);
                      }
                    }
                  }),
                  this.params.isAddQuit + "" == "true" &&
                    $.isAndroid() &&
                    $.isWeixin() &&
                    this.addListener(y, "blur", function () {
                      e.isFullScreen() ||
                        (e.oVideo &&
                          !e.oVideo.paused &&
                          e.playerInnerApi.videoPause());
                    });
              },
              initBasePlayEvents: function () {
                var t = this;
                $.addListener(this.playBtn, "touchend", function (e) {
                  e.stopPropagation(),
                    t.playerInnerApi.videoPlay(),
                    $.isIPhone() &&
                      $.isQQ() &&
                      setTimeout(function () {
                        t.playerInnerApi.getVideostate() &&
                          t.playerInnerApi.videoPlay();
                      }, 500),
                    e.preventDefault();
                }),
                  $.addListener(this.playBtn, "click", function (e) {
                    e.stopPropagation(),
                      t.checkShowListExpand(!0),
                      t.playerInnerApi.videoPlay();
                  }),
                  $.addListener(this.switchVideoBtn, "click", function () {
                    t.toggleVideoOrAudio();
                  }),
                  this.audioBg &&
                    this.addListener(this.audioBg, "touchend", function (e) {
                      1 == e.changedTouches.length && t.toggleCtrlBar();
                    });
              },
              setCustomProperty: function () {
                var e =
                  y.innerHeight ||
                  m.documentElement.clientHeight ||
                  m.body.clientHeight;
                m.documentElement.style.setProperty(
                  "--cc-fullscreen-vh",
                  e + "px"
                );
              },
              isUseStyleLandscape: function () {
                return !(
                  (this.params.openMobileLandscape + "" != "true" &&
                    !this.isWasmPlay) ||
                  !($.isAndroid() || $.isIPhone() || $.isIPad())
                );
              },
              isMobileVr: function () {
                return !(
                  !($.isAndroid() || $.isIPhone() || $.isIPad()) ||
                  this.isWasmPlay ||
                  !this.videoPlayData.vrmode ||
                  !this.playerInnerApi.isVideoPlay()
                );
              },
              changeVideoAutoPlay: function (e) {
                this.playerInnerApi.getVideostate() &&
                  (e ||
                    (this.isChangeVideo &&
                      (($.isAndroid() &&
                        !$.isM3u8Url(this.currentCopy.playurl)) ||
                        $.isIPhone()))) &&
                  this.playerInnerApi.videoPlay(!0);
              },
              tryAutoPlay: function () {
                "function" != typeof CCHls &&
                  ("true" != this.params.autoStart + "" ||
                    $.isIPad() ||
                    $.isIPhone() ||
                    $.isAndroid() ||
                    this.playerInnerApi.videoPlay());
              },
              realAutoPlay: function () {
                if (!($.isIPad() || $.isIPhone() || $.isAndroid())) {
                  var e = this;
                  this.playerInnerApi.hidePlayBtn(),
                    this.ccPlayerCtrol.setVolume(0),
                    (this.poster.style.display = "none"),
                    this.showLoading();
                  var t = function t() {
                    e.playerInnerApi.videoPlay(),
                      e.removeVideoListenner("canplay", t);
                  };
                  this.addVideoListenner("canplay", t);
                }
              },
              initWatchStartTime: function () {
                var t = this,
                  i = function i() {
                    if (t.playerInnerApi.getTotalTime()) {
                      var e = "true" != t.params.autoStart ? 100 : 500;
                      setTimeout(function () {
                        t.setWatchStartTime(), t.checkWatchStartTime();
                      }, e),
                        t.removeVideoListenner(s, i);
                    }
                  },
                  s = this.isWasmPlay ? "loadedmetadata" : "timeupdate";
                this.addVideoListenner(s, i);
              },
              setWatchStartTime: function () {
                var e = this.playerInnerApi.getTotalTime(),
                  t = this.playerInnerApi.getCurrentTime() || 0;
                this.params.watchStartTime < e &&
                  t <= 3 &&
                  ((this.lastVideoTime = this.params.watchStartTime),
                  this.playerInnerApi.setCurrentTime(
                    this.params.watchStartTime
                  ));
              },
              checkWatchStartTime: function () {
                var e = this;
                this.startTimer ||
                  ((this.startTimer = setInterval(function () {
                    e.params.watchStartTime <= 1 ||
                    e.params.watchStartTime <= e.playerInnerApi.getCurrentTime()
                      ? clearInterval(e.startTimer)
                      : e.setWatchStartTime();
                  }, 1e3)),
                  this.intervals.push(this.startTimer));
              },
              initHistoryTimeShow: function () {
                if (y.localStorage) {
                  var e = y.localStorage.getItem(this.params.vid) || 0,
                    t =
                      y.localStorage.getItem(this.params.vid + "_maxtime") || 0;
                  if (
                    ((this.currPlayedMaxTime =
                      this.params.banDragByMaxTime + "" == "true" && e <= t
                        ? parseInt(t)
                        : parseInt(e)),
                    this.params.freeTime ||
                      (!this.params.freeTime &&
                        0 == this.videoPlayData.authenable &&
                        this.videoPlayData.freetime) ||
                      ("1" === this.params.closeHistoryTime &&
                        y.localStorage &&
                        e))
                  )
                    y.localStorage.removeItem(this.params.vid);
                  else if (
                    !this.historyTimeOvered &&
                    !$.isCustomFunction(this.videoPlayData.uid) &&
                    ((this.historyTime = parseInt(e)), 0 != this.historyTime)
                  ) {
                    var i = this;
                    this.addVideoListenner("timeupdate", function s() {
                      i.removeVideoListenner("timeupdate", s),
                        i.historyTimeBox &&
                          i.historyTimeBox.classList &&
                          i.historyTimeBox.classList.add("fade"),
                        i.isChangeVideo && clearTimeout(i.historyTimer),
                        (i.historyTimer = setTimeout(function () {
                          var e = $.queryEle(
                            "#ccH5historyTimeBox",
                            i.playerContainer
                          );
                          e && i.videoBox.removeChild(e),
                            (i.historyTimeBox = null),
                            (i.historyTimeOvered = !0),
                            (i.outerDom.historyTimeBox = null),
                            clearTimeout(i.historyTimer),
                            (i.historyTimer = null);
                        }, 15e3));
                      var e = $.queryEle("#ccH5jumpInto", i.historyTimeBox),
                        t = $.queryEle("#ccH5delBox", i.historyTimeBox);
                      (e.querySelector("i").innerHTML = $.timeFormat(
                        i.historyTime
                      )),
                        (t.onclick = function () {
                          i.videoBox.removeChild(i.historyTimeBox),
                            (i.historyTimeBox = null),
                            (i.historyTimeOvered = !0),
                            (i.outerDom.historyTimeBox = null);
                        }),
                        (e.onclick = function () {
                          (i.lastVideoTime = i.historyTime),
                            i.playerInnerApi.setCurrentTime(i.historyTime),
                            i.historyTimeBox.classList.remove("fade"),
                            i.videoBox.removeChild(i.historyTimeBox),
                            (i.historyTimeOvered = !0);
                        });
                    });
                  }
                }
              },
              toggleVideoOrAudio: function () {
                this.playerInnerApi.isVideoPlay()
                  ? this.switchToAudioPlay()
                  : this.switchToVideoPlay();
              },
              switchToAudioPlay: function () {
                (this.params.mediatype = 2), this.rerender();
              },
              switchToVideoPlay: function () {
                (this.params.mediatype = 1), this.rerender();
              },
              rerender: function () {
                (this.resolveStateTime = this.lastVideoTime),
                  (this.isHlsPlay = !1),
                  (this.params.autoStart = "true"),
                  this.clearVideoAllListeners(),
                  this.destroy(!this.isChangeVideo),
                  (this.params.rate = this.playerInnerApi.getVideoRate()),
                  (this.videoPlayData.defaultquality =
                    this.currentCopy.quality),
                  this.initCurrentCopy(),
                  (this.outerApi.currentCopiesIdx =
                    this.currentCopy && this.currentCopy.index),
                  this.playerContainer.innerHTML,
                  (this.isChangeVideo = !1),
                  (this.isSwitchVideoSmooth = !1),
                  this.exitPageFullScreen(),
                  this.startH5Play(),
                  this.fixCurrentTime();
              },
              shouldHlsPlay: function () {
                var e = this.currentCopy.playurl,
                  t = this.videoPlayData.reskeys || [],
                  i = this.videoPlayData.safeLevel;
                return $.shouldHlsPlayForArgs(this.params, e, t, i);
              },
              hlsPlay: function (t) {
                var s = this;
                if (((this.isHlsPlay = !0), "function" == typeof CCHls))
                  if (CCHls.isSupported()) {
                    var a = this.playerInnerApi.getCurrentTime();
                    s.cch5DestroyHls && s.cch5DestroyHls();
                    var i = [],
                      r = 0;
                    if (2 == this.params.mediatype)
                      i.push({
                        url: this.currentCopy.playurl,
                        name: "音频",
                        bitrate: 524288,
                      }),
                        this.currentCopy.backupurl &&
                          i.push({
                            url: this.currentCopy.backupurl,
                            name: "音频2",
                            bitrate: 526336,
                          });
                    else
                      for (
                        var n = this.videoPlayData.videoCopies, o = 0;
                        o < n.length;
                        o++
                      )
                        i.push({
                          url: n[o].playurl,
                          name: n[o].desp + "1",
                          bitrate: 1024 * (1024 + 10 * o),
                        }),
                          this.currentCopy.playurl == n[o].playurl &&
                            (r = i.length - 1),
                          n[o].backupurl &&
                            i.push({
                              url: n[o].backupurl,
                              name: n[o].desp + "2",
                              bitrate: 1024 * (1024 + 10 * o + 1),
                            });
                    void 0 === t && (t = r);
                    var l = new CCHls({
                      startLevel: t,
                      autoLevelEnabled: !1,
                      vid: this.videoPlayData.vid,
                      startPosition: 1 * (this.lastVideoTime || 0),
                      maxBufferSize: 1,
                      nudgeMaxRetry: 5,
                      maxBufferLength: this.params.preloadBufferLength || 30,
                      enableWasm:
                        !!this.videoPlayData.reskeys.wasm_decrypt_play,
                    });
                    (l.currentLevel = t),
                      l.attachMedia(this.oVideo),
                      (this.playingUrl = this.currentCopy.playurl),
                      (this.hls = l),
                      (this.hls.isLoadedSucc = null),
                      this.hls.trigger(CCHls.Events.MANIFEST_LOADED, {
                        levels: i,
                      }),
                      this.hls.recoverMediaError(),
                      this.hls.on(CCHls.Events.LEVEL_SWITCHING, function () {}),
                      this.hls.on(CCHls.Events.LEVEL_SWITCHED, function () {});
                    var c = !1;
                    this.hls.on(CCHls.Events.ERROR, function (e, t) {
                      console.warn(t);
                      var i = s.playerInnerApi.getTotalTime() || 0;
                      if (
                        "bufferStalledError" == t.details &&
                        i &&
                        i - s.playerInnerApi.getCurrentTime() < 1 &&
                        t.buffer
                      )
                        return (
                          s.playerInnerApi.setCurrentTime(i),
                          s.endTimer && clearTimeout(s.endTimer),
                          void (s.endTimer = setTimeout(function () {
                            s.playEnded ||
                              s.playerInnerApi.triggerPlayerEvent(
                                s.playerEvent.triggerCustomEnd
                              );
                          }, 500))
                        );
                      if (t.type != CCHls.ErrorTypes.WASM_ERROR) {
                        if (
                          t.type == CCHls.ErrorTypes.MEDIA_ERROR &&
                          !$.isWeixin() &&
                          "bufferStalledError" == t.details
                        ) {
                          if (c) return;
                          return (
                            (c = !0),
                            void setTimeout(function () {
                              var e = s.playerInnerApi.getVideoBuffered(),
                                t = s.playerInnerApi.getCurrentTime() || 0,
                                i = 0;
                              1 <= e.length && (i = e.end(e.length - 1)),
                                1 < i - t
                                  ? (c = !1)
                                  : (l.stopLoad(),
                                    s.playerInnerApi.hidePlayBtn(),
                                    setTimeout(function () {
                                      (c = !1),
                                        l.recoverMediaError(),
                                        s.playerInnerApi.setCurrentTime(t),
                                        s.playerInnerApi.videoPlay(),
                                        s.ccPlayerCtrol.resetSp();
                                    }, 100));
                            }, 5e3)
                          );
                        }
                        if (0 < a || "true" == s.params.autoStart) {
                          if (
                            "checkBufferError" == t.details &&
                            $.isWeixin() &&
                            $.isAndroid() &&
                            !s.resetM3u8Play
                          )
                            return (
                              s.playerInnerApi.hidePlayBtn(),
                              (s.resetM3u8Play = !0),
                              s.cch5DestroyHls(),
                              void setTimeout(function () {
                                0 < s.playerInnerApi.getCurrentTime() ||
                                  (s.setVideoSrc(s.currentCopy.playurl),
                                  (s.resetM3u8Play = !1));
                              }, 1e3)
                            );
                          s.playerInnerApi.videoPlay(),
                            s.hls.isLoadedSucc ||
                              s.triggerPlayerError("BeforePlayError");
                        }
                        t.type == CCHls.ErrorTypes.MEDIA_ERROR &&
                          "bufferFullError" == t.details &&
                          setTimeout(function () {
                            l.recoverMediaError(),
                              s.playerInnerApi.setCurrentTime(a),
                              s.playerInnerApi.videoPlay(),
                              s.ccPlayerCtrol.resetSp();
                          }, 100);
                      } else
                        s.playerTrack.sendStartPlayState({
                          code: 400,
                          data: {
                            msg: "播放器错误",
                            error: t,
                            url: y.location.href,
                          },
                        });
                    }),
                      (0 < a || "true" == this.params.autoStart) &&
                        this.hls.on(CCHls.Events.MEDIA_ATTACHED, function () {
                          s.hls.isLoadedSucc = !0;
                          var e = ($.isSafari() && !$.isIPhone()) || !1;
                          if (
                            ($.isWeixin() && $.isAndroid()) ||
                            11 === $.IEVersion() ||
                            e
                          )
                            0 < a && s.jumpToTimeWhenPlayed(a),
                              s.playerInnerApi.videoPlay();
                          else {
                            if (
                              "4391A77DC14C5D2F" === s.params.siteid &&
                              a <= 0
                            )
                              return;
                            s.playerInnerApi.videoPlay(),
                              0 < a && s.jumpToTime(a),
                              s.ccPlayerCtrol.resetSp();
                          }
                        }),
                      (s.cch5DestroyHls = function () {
                        null !== s.hls &&
                          (s.hls.destroy(),
                          s.hls.bufferTimer &&
                            (clearInterval(s.hls.bufferTimer),
                            (s.hls.bufferTimer = undefined)),
                          (s.hls = null));
                      });
                  } else this.handleLog("hls is not support!");
                else
                  $.loadScript(
                    "https://p.bokecc.com/js/player/hls.js?v=2",
                    function () {
                      try {
                        s.hlsPlay();
                      } catch (e) {
                        s.processPlayerError(e);
                      }
                    }
                  );
              },
              jumpToTimeWhenPlayed: function (e) {
                if (!this.jumpToTimeWhenPlayedInvoking) {
                  this.jumpToTimeWhenPlayedInvoking = !0;
                  var t = this;
                  e = parseInt(e);
                  var i = function i() {
                    t.removeVideoListenner("timeupdate", i),
                      setTimeout(function () {
                        (t.lastVideoTime = e),
                          t.playerInnerApi.setCurrentTime(e),
                          t.ccPlayerCtrol.resetSp(),
                          (t.jumpToTimeWhenPlayedInvoking = !1);
                      }, 500);
                  };
                  this.addVideoListenner("timeupdate", i);
                }
              },
              handleTimeupdate: function () {
                this.playerInnerApi.getVideostate() ||
                  this.playerInnerApi.hidePlayBtn(),
                  this.playerInnerApi.getCurrentTime() < 0.1 &&
                    0 < this.playerInnerApi.getCurrentTime() &&
                    this.oLoading &&
                    "block" === this.oLoading.style.display &&
                    this.hideLoading(),
                  "true" === this.params.banDrag &&
                  2 <
                    parseInt(
                      this.playerInnerApi.getCurrentTime() - this.lastVideoTime
                    ) &&
                  this.playerInnerApi.getCurrentTime() > this.currPlayedMaxTime
                    ? this.playerInnerApi.setCurrentTime(this.lastVideoTime)
                    : ((this.lastVideoTime =
                        this.playerInnerApi.getCurrentTime()),
                      (this.lastPlayTime =
                        this.playerInnerApi.getCurrentTime()),
                      this.lastVideoTime > this.currPlayedMaxTime &&
                        ((this.currPlayedMaxTime = this.lastVideoTime),
                        localStorage.setItem(
                          this.params.vid + "_maxtime",
                          this.currPlayedMaxTime
                        )),
                      10 < this.playerInnerApi.getCurrentTime() &&
                        y.localStorage !== undefined &&
                        null !== y.localStorage &&
                        "1" !== this.params.closeHistoryTime &&
                        localStorage.setItem(
                          this.params.vid,
                          this.lastVideoTime
                        ));
              },
              handlePause: function () {
                (this.isPlaying = !1),
                  this.hideLoading(),
                  (this.ccPlayerVote && this.ccPlayerVote.getIsVoteShow()) ||
                    this.playerInnerApi.showPlayBtn(),
                  $.invokeWindow(
                    "on_CCH5player_pause",
                    this.oVideo,
                    this.params.vid
                  );
              },
              handlePlay: function () {
                this.checkShowListExpand(),
                  (this.isPlaying = !0),
                  this.playerInnerApi.hidePlayBtn(),
                  (this.poster.style.display = "none"),
                  $.invokeWindow(
                    "on_CCH5player_play",
                    this.oVideo,
                    this.params.vid
                  );
              },
              handlePlaying: function () {
                (this.isPlaying = !0),
                  this.playerInnerApi.hidePlayBtn(),
                  (this.playEnded = !1),
                  (this.outerDom.playEnded = this.playEnded);
              },
              handleEnded: function () {
                (this.playEnded = !0),
                  (this.outerDom.playEnded = this.playEnded),
                  this.isFullScreen() && this.ccPlayerCtrol.exitFulls(),
                  (this.isPlaying = !1),
                  this.playerInnerApi.showPlayBtn(),
                  (this.playBtn.className = "adrPlayBtn"),
                  (this.playBtn.style.display = "block"),
                  1 == this.params.isSkipAd && this.triggerPlayerEnded(),
                  "true" === this.params.loop &&
                    this.playLoopTimes < this.params.loopTimes &&
                    (this.playLoopTimes++, this.playerInnerApi.videoPlay());
              },
              handleError: function (e) {
                var t = this;
                ((y.localStorage && y.localStorage.getItem("hddebug")) ||
                  (y.location.href &&
                    -1 < y.location.href.indexOf("hddebug"))) &&
                  (this.handleLog(e),
                  console.log(
                    "video error:",
                    e.target.error && e.target.error.code
                  ));
                var i = this.playerInnerApi.getCurrentTime();
                this.oVideo.src &&
                $.isM3u8Url(this.currentCopy.playurl) &&
                0 < i
                  ? !this.resetM3u8Play &&
                    e.target.error &&
                    3 == e.target.error.code &&
                    $.isWeixin() &&
                    $.isAndroid() &&
                    ((this.resetM3u8Play = !0),
                    this.playerInnerApi.hidePlayBtn(),
                    this.cch5DestroyHls(),
                    setTimeout(function () {
                      0 < t.playerInnerApi.getCurrentTime() ||
                        (t.setVideoSrc(t.currentCopy.playurl),
                        (t.resetM3u8Play = !1));
                    }, 800))
                  : (this.playerInnerApi.videoPause(),
                    e &&
                      e.target &&
                      e.target.error &&
                      (!y.navigator.onLine ||
                        this.playStartSuccess ||
                        4 !== e.target.error.code ||
                        $.isM3u8Url(this.currentCopy.playurl) ||
                        (this.playStartErrorTimes++,
                        this.playStartErrorTimes < 4
                          ? this.switchPlayUrl()
                          : this.triggerPlayerError("BeforePlayError")),
                      y.navigator.onLine &&
                        this.playStartSuccess &&
                        e.target.error.code &&
                        (this.playingErrorTimes++,
                        this.playingErrorTimes < 4
                          ? this.switchPlayUrl()
                          : this.triggerPlayerError("PlayingError"))));
              },
              handleSeeking: function () {
                if ($.isIPhone()) this.showLoading();
                else {
                  var e = this.playerInnerApi.getVideoBuffered(),
                    t = this.playerInnerApi.getCurrentTime(),
                    i = !0;
                  if (e && e.length)
                    for (var s = 0; s < e.length; s++) {
                      var a = e.start(s) - 0.2,
                        r = e.end(s) + 0.2;
                      if (a <= t && t <= r) {
                        i = !1;
                        break;
                      }
                    }
                  i && this.showLoading();
                }
              },
              handleSeeked: function () {
                this.hideLoading();
              },
              handleWaiting: function () {
                var i = this,
                  e = this.playerInnerApi.getVideoBuffered(),
                  t = this.playerInnerApi.getCurrentTime() || 0,
                  s = 0;
                e && 1 <= e.length && (s = e.end(e.length - 1)),
                  s - t < 5 &&
                  this.oLoading &&
                  "block" !== this.oLoading.style.display
                    ? (this.loadingTimer = setTimeout(function () {
                        var e = i.playerInnerApi.getVideoBuffered(),
                          t = 0;
                        e && 1 <= e.length && (t = e.end(e.length - 1)),
                          !i.playEnded &&
                            t - i.playerInnerApi.getCurrentTime() < 1 &&
                            i.showLoading();
                      }, 1e3))
                    : this.loadingTimer && clearTimeout(this.loadingTimer),
                  (this.isWaiting = 1);
                var a = this;
                t &&
                  (this.networkTipTimer && clearTimeout(this.networkTipTimer),
                  (this.networkTipTimer = setTimeout(function () {
                    var e = a.playerContainer.querySelector(".cch5SpeedTips");
                    !a.playEnded &&
                      e &&
                      e.style &&
                      (1 === a.isWaiting && (e.style.display = "block"),
                      setTimeout(function () {
                        e.style.display = "none";
                      }, 2e3));
                  }, 8e3))),
                  0 < s &&
                    !y.navigator.onLine &&
                    (this.networkTimer && clearTimeout(this.networkTimer),
                    (this.networkTimer = setTimeout(function () {
                      if (i.isWaiting && !y.navigator.onLine) {
                        var e = $.createTips(
                          i.params,
                          "code：" +
                            Q.NetworkUnavaiable +
                            i.lang.networkUnavaiable
                        );
                        i.destroy(!0),
                          (i.playerContainer.innerHTML = e),
                          i.triggerPlayerError("NetworkUnavaiable");
                      }
                    }, 2e4))),
                  $.invokeWindow("on_player_buffering", {
                    vid: this.params.vid,
                    flag: 1,
                  });
              },
              handleCanplaythrough: function () {
                this.hideLoading(),
                  this.isWaiting &&
                    $.invokeWindow("on_player_buffering", {
                      vid: this.params.vid,
                      flag: 0,
                    }),
                  (this.isWaiting = 0);
                var e = $.queryEle(".cch5SpeedTips", this.playerContainer);
                e && e.style && (e.style.display = "none");
              },
              handleCanplay: function () {
                this.isWaiting && (this.isWaiting = 0),
                  $.isIPhone() || this.hideLoading(),
                  (this.loadSrcRetryNum = 0),
                  (this.canPlayed = !0);
              },
              handleProgress: function () {
                this.progress();
              },
              progress: function () {
                var e = this.playerInnerApi.getCurrentTime() || 0,
                  t = this.oVideo.buffered;
                if (t && !(t.length <= 0)) {
                  0 < (t = t.end(0)) &&
                    !this.playStartSuccess &&
                    ((this.playStartSuccess = !0),
                    (this.playStartTimeoutTimes = 0),
                    (this.playStartErrorTimes = 0),
                    clearTimeout(this.playStartTimer));
                  for (var i = 0; i < t.length; i++)
                    if (e < t.end(i)) {
                      t = t.end(i);
                      break;
                    }
                  15 < t - e && this.hideLoading(),
                    this.ccPlayerCtrol &&
                      (this.ccPlayerCtrol.autoFitProgressBar(),
                      this.ccPlayerCtrol.updateLoadBar(
                        t,
                        this.playerInnerApi.getTotalTime()
                      ));
                }
              },
              triggerPlayerEnded: function () {
                $.invokeWindow(
                  "on_CCH5player_ended",
                  this.oVideo,
                  this.params.vid
                );
              },
              autoProgressBar: function () {
                var e = this;
                setTimeout(function () {
                  e.progress();
                }, 300);
              },
              showLoading: function () {
                (this.playerInnerApi.getVideostate() && !this.isWasmPlay) ||
                  (this.playerInnerApi.hidePlayBtn(),
                  (this.oLoading.style.display = "block"));
              },
              hideLoading: function () {
                this.oLoading.style.display = "none";
              },
              checkShowListExpand: function (e) {
                if (!$.isMoble() && !$.isIPad()) {
                  var t =
                    this.params.listid &&
                    this.ccPlayList &&
                    1 == this.params.playListExpand &&
                    this.ccPlayList.getListExpandNum() < 1;
                  e || (t = t && "none" === this.playBtn.style.display),
                    t && this.ccPlayList.showPlayList();
                }
              },
              getH5PlayerHtml: function () {
                return (
                  "<div class='ccH5playerBox" +
                  ("true" === this.params.customizedMobile
                    ? " ccH5CustomizedMobile"
                    : "") +
                  (this.playerInnerApi.getOrientation()
                    ? " ccH5PlayerFullscreenLandscape"
                    : "") +
                  '\' style=\'height: 100%;width:100%;\'><div class="cch5TipToast" style="display:none"></div>  <p class="cch5SpeedTips" style="width:auto;min-width:5%;max-width: 80%;text-overflow:ellipsis;overflow: hidden;white-space: nowrap;text-align:center;">' +
                  this.lang.networkWaiting +
                  "</p> <div class='ccMask' id='ccMask' style='display:none'></div> <div  id='ccH5historyTimeBox' style='display:none;min-width:184px;line-height:20px;'>\t\t<span id='ccH5jumpInto' >" +
                  this.lang.lastPlay +
                  "<i>00:00</i><b>" +
                  this.lang.replaying +
                  "</b></span>\t\t<span id='ccH5delBox' >&times;</span> </div>\t<div class='ccH5Info'></div>\t<div class='ccH5Loading'></div>\t<div class='ccH5Poster' style='display: none;'><img src=''/></div><div id='replaybtn' class='ccH5PlayBtn' style='display: none;'></div><div class='ccH5PlayBtn2'></div><div class='ccH5AudioBg' style='z-index: 3;'>    <img src='https://p.bokecc.com/images/html5player/ccH5AudioBg.png'>    <p class='ccbgText'>" +
                  this.lang.audioPlaying +
                  "</p>    <div class='ccbgButton'>" +
                  this.lang.toVideo +
                  "</div></div></div>"
                );
              },
              loadCss: function (e) {
                var t = m.createElement("link");
                t.classList.add("ccH5vidoeLinkTag"),
                  (t.href =
                    "https://p.bokecc.com/css/html5player/skin_pc_3.5.9.css"),
                  ($.isIPad() || $.isWindowsPhoneOS()) &&
                    (t.href =
                      "https://p.bokecc.com/css/html5player/skin2.css?" + v),
                  ($.isAndroid() || $.isIPhone(this.params)) &&
                    ((t.href =
                      "https://p.bokecc.com/css/html5player/skin_Android.css?" +
                      v),
                    "231986" == this.videoPlayData.uid &&
                      (t.href =
                        "https://p.bokecc.com/css/html5player/canon_Android.css?" +
                        v),
                    "240837" == this.videoPlayData.uid &&
                      (t.href =
                        "https://p.bokecc.com/css/html5player/zyrs_Android.css?" +
                        v)),
                  $.isIPad() &&
                    "231986" == this.videoPlayData.uid &&
                    (t.href =
                      "https://p.bokecc.com/css/html5player/canon_ipad.css?" +
                      v),
                  y.isCCPlayerTest &&
                    (t.href = "./vendor/css/html5player/skin_pc_3.5.9.css"),
                  (t.rel = "stylesheet"),
                  (t.type = "text/css");
                var i = m.querySelector(".ccH5vidoeLinkTag");
                if (
                  i &&
                  "object" ===
                    (void 0 === i ? "undefined" : (0, Y["default"])(i)) &&
                  i.href == t.href
                )
                  e && e();
                else {
                  var s = !1;
                  9 == $.IEVersion() || 10 == $.IEVersion()
                    ? (t.onreadystatechange = function () {
                        ("loaded" != this.readyState &&
                          "complete" != this.readyState) ||
                          ((s = !0), e && e());
                      })
                    : (t.onload = function () {
                        s || ((s = !0), e && e());
                      }),
                    m.head.appendChild(t);
                }
              },
              addListener: function (e, t, i) {
                e.addEventListener && e.addEventListener(t, i, !1);
              },
              toggleCtrlBar: function () {
                this.ccPlayerCtrol.toggleCtrlBar();
              },
              togglePlay: function () {
                (this.cch5SpeedTips.style.display = "none"),
                  this.playerInnerApi.getVideostate()
                    ? ($.IEVersion(), this.playerInnerApi.videoPlay())
                    : this.playerInnerApi.videoPause();
              },
              createPlayerContainer: function () {
                var e = Math.ceil(1e7 * Math.random()),
                  t = this.params.width || "100%",
                  i = this.params.height || "100%";
                if (
                  (this.params.listid && (i = t = "100%"),
                  /^\d+$/.test(t) && (t += "px"),
                  /^\d+$/.test(i) && (i += "px"),
                  !this.isChangeVideo && !this.isSwitchVideoSmooth)
                ) {
                  var s = m.createElement("div");
                  (s.innerHTML = "<div class='ccH5Info'></div>"),
                    (s.className = "CCH5playerContainer"),
                    (this.playerContainer = s),
                    (this.playerContainer.style.width = t),
                    (this.playerContainer.style.height = i);
                }
                $.isMoble() &&
                  (this.playerContainer.style.position = "relative"),
                  (this.playerContainer.id =
                    "cc_video_" + this.params.vid + "_" + e),
                  (this.params.divid = this.playerContainer.id),
                  (this.oInfo = $.queryEle(".ccH5Info", this.playerContainer)),
                  (this.playStartTime = new Date().getTime());
              },
              createPlayListWrapper: function (e, t) {
                var i = m.createElement("div");
                t
                  ? t.replaceChild(i, e)
                  : this.params.parentNode.appendChild(i),
                  (i.className = "cclist_wrapper_" + this.params.listid);
                var s = this.params.width || "100%",
                  a = this.params.height || "100%";
                /^\d+$/.test(s) && (s += "px"),
                  /^\d+$/.test(a) && (a += "px"),
                  (i.style.width = s),
                  (i.style.height = a),
                  (i.style.position = "relative"),
                  (i.style.background = "#000"),
                  (this.playerWrapper = i),
                  (this.params.parentNode = this.playerWrapper),
                  (this.ccPlayList = new CCH5PlayList(
                    this.playerInnerApi,
                    this.params,
                    N,
                    this.playerWrapper,
                    this
                  )),
                  this.ccPlayList.init();
              },
              resortCopies: function (e) {
                for (var t, i, s = 0; s < e.length; s++)
                  if (15 == e[s].quality) {
                    (i = e[s]), e.splice(s, 1);
                    break;
                  }
                for (var a = 0; a < e.length - 1; a++)
                  for (var r = a + 1; r < e.length; r++)
                    e[a].quality < e[r].quality &&
                      ((t = e[a]), (e[a] = e[r]), (e[r] = t));
                return i && e.push(i), e;
              },
              preDoParams: function () {
                var e =
                  $.invokeWindow("cc_h5player_config", this.params.vid) || {};
                for (var t in e)
                  "object" === (0, Y["default"])(e[t])
                    ? (this.params[t] = e[t])
                    : (this.params[t] = e[t] + "");
                var i = this.params.width + "",
                  s = this.params.height + "";
                /^\d+$/.test(i) && (i += "px"),
                  /^\d+$/.test(s) && (s += "px"),
                  (this.params.showWidth = i),
                  (this.params.showHeight = s),
                  (this.params.userAgent = $.getUserAgent()),
                  (this.forwardSecond = 5),
                  this.params.forward !== undefined &&
                    (/^\d+%$/.test(this.params.forward)
                      ? (this.forwardSecond = this.params.forward)
                      : /^\d+$/.test(this.params.forward) &&
                        (this.forwardSecond = parseInt(this.params.forward))),
                  (this.params.isSkipAd = this.params.isSkipAd || 0),
                  (this.params.isSkipAd =
                    $.invokeWindow("is_skip_ad", this.params.vid) ||
                    this.params.isSkipAd),
                  (this.params.vc = this.params.vc || ""),
                  (this.params.vc =
                    $.invokeWindow(
                      "get_cc_verification_code",
                      this.params.vid
                    ) || this.params.vc),
                  (this.params.customerId = this.params.customerId || ""),
                  (this.params.customerId =
                    $.invokeWindow("get_custom_id") || this.params.customerId),
                  (this.params.clientUserId =
                    this.params.clientUserId ||
                    $.invokeWindow("get_client_user_id") ||
                    "");
                var a =
                  this.params.openBtnEnMode + "" == "true" ? "en" : "zh_CN";
                if (
                  ((this.lang = JSON.parse((0, G["default"])(W[a]))),
                  this.params.customLang &&
                    "[object Object]" ===
                      Object.prototype.toString.call(this.params.customLang))
                )
                  for (var r in this.params.customLang)
                    this.lang[r] && (this.lang[r] = this.params.customLang[r]);
              },
              pageFullScreen: function () {
                this.ccPlayerCtrol &&
                  this.ccPlayerCtrol.switchPageFullsBtnStyle(!0),
                  $.invokeWindow("on_page_fullscreen", 1, this.params.vid);
              },
              exitPageFullScreen: function () {
                this.ccPlayerCtrol &&
                  this.ccPlayerCtrol.switchPageFullsBtnStyle(),
                  $.invokeWindow("on_page_fullscreen", 0, this.params.vid);
              },
              fullScreen: function (e) {
                var t = this;
                if (
                  this.videoBox.classList.contains("ccH5PlayerDeviceLandscape")
                )
                  return (
                    (this.cch5TipToast.innerHTML = $.isAndroid()
                      ? "请返回竖屏后开启方向锁定"
                      : "请开启方向锁定"),
                    (this.cch5TipToast.style.display = "block"),
                    void setTimeout(function () {
                      t.cch5TipToast.style.display = "none";
                    }, 1e3)
                  );
                var i = this.playerInnerApi.getCurrentTime() || 0;
                if (
                  "true" === this.params.mobileFullsMarquee &&
                  $.isMoble() &&
                  i <= 0
                )
                  return (
                    (this.cch5TipToast.innerHTML =
                      this.lang.mobileFullsMarqueeTip),
                    (this.cch5TipToast.style.display = "block"),
                    void setTimeout(function () {
                      t.cch5TipToast.style.display = "none";
                    }, 1e3)
                  );
                if (this.params.allowFullScreen + "" != "false") {
                  if ("request" === e) {
                    if (!this.videoBox) return;
                    e = this.videoBox;
                  }
                  var s = !1;
                  if (
                    (this.videoPlayData.vrmode ||
                      this.isWasmPlay ||
                      (this.params.openMobileLandscape + "" == "true" &&
                        ($.isAndroid() || $.isIPhone() || $.isIPad())) ||
                      (s = $.canFunScreen()),
                    s)
                  ) {
                    var a = this.oVideo;
                    a.requestFullscreen
                      ? a.requestFullscreen()
                      : a.msRequestFullscreen
                      ? a.msRequestFullscreen()
                      : a.mozRequestFullScreen
                      ? a.mozRequestFullScreen()
                      : a.webkitSupportsFullscreen && a.webkitEnterFullscreen();
                  } else {
                    if (this.isUseStyleLandscape())
                      this.videoBox.classList.add(
                        "ccH5PlayerFullscreenLandscape"
                      );
                    else {
                      this.params.listid && (e = this.playerWrapper);
                      var r =
                        e.requestFullScreen ||
                        e.webkitRequestFullScreen ||
                        e.mozRequestFullScreen ||
                        e.msRequestFullScreen;
                      void 0 !== r && r && r.call(e),
                        11 == $.IEVersion() &&
                          (this.params.listid
                            ? this.playerWrapper.msRequestFullscreen()
                            : this.playerContainer.msRequestFullscreen()),
                        this.videoBox.classList.add("ccH5PlayerBoxFixed");
                    }
                    this.isWasmPlay &&
                      this.oVideo.resizeScreen &&
                      this.oVideo.resizeScreen(),
                      this.params.listid &&
                        ((this.playerWrapper.style.width = "100%"),
                        (this.playerWrapper.style.height = "100%"),
                        this.ccPlayList.fullScreenFixedList(!0)),
                      this.ccPlayerCtrol.switchFullsBtnStyle(!0),
                      this.progress(),
                      this.ccPlayerExercise &&
                        this.ccPlayerExercise.changeTestStyle("");
                  }
                  1 == this.videoPlayData.subtitlemodel &&
                    this.ccPlayerMore &&
                    ($.isIPhone()
                      ? this.ccPlayerMore.setVttFontSize(2)
                      : this.ccPlayerMore.setVttFontSize()),
                    this.ccPlayerMarquee &&
                      "true" === this.params.mobileFullsMarquee &&
                      $.isMoble() &&
                      this.ccPlayerMarquee.toggleVttMarquee(!0),
                    $.invokeWindow("on_player_fullscreen", 1, this.params.vid);
                }
              },
              exitFullScreen: function (e) {
                if (this.params.allowFullScreen + "" != "false") {
                  var t = !1;
                  if (
                    (this.videoPlayData.vrmode ||
                      this.isWasmPlay ||
                      (this.params.openMobileLandscape + "" == "true" &&
                        ($.isAndroid() || $.isIPhone() || $.isIPad())) ||
                      (t = $.canFunScreen()),
                    t)
                  ) {
                    var i = this.oVideo;
                    i.exitFullscreen
                      ? i.exitFullscreen()
                      : i.msExitFullscreen
                      ? i.msExitFullscreen()
                      : i.mozExitFullScreen
                      ? i.mozExitFullScreen()
                      : i.webkitExitFullscreen
                      ? i.webkitExitFullscreen()
                      : m.mozCancelFullScreen && m.mozCancelFullScreen();
                  } else {
                    var s =
                      (e = m).cancelFullScreen ||
                      e.webkitCancelFullScreen ||
                      e.mozCancelFullScreen ||
                      e.exitFullScreen;
                    if (
                      (void 0 !== s && s && s.call(e),
                      11 == $.IEVersion() &&
                        m.msExitFullscreen &&
                        m.msExitFullscreen(),
                      this.isWasmPlay &&
                        this.oVideo.resizeScreen &&
                        this.oVideo.resizeScreen(),
                      this.isUseStyleLandscape()
                        ? this.videoBox.classList.remove(
                            "ccH5PlayerFullscreenLandscape"
                          )
                        : this.videoBox.classList.remove("ccH5PlayerBoxFixed"),
                      this.params.listid)
                    ) {
                      var a = this.params.width || "100%",
                        r = this.params.height || "100%";
                      /^\d+$/.test(a) && (a += "px"),
                        /^\d+$/.test(r) && (r += "px"),
                        (this.playerWrapper.style.width = a),
                        (this.playerWrapper.style.height = r),
                        this.ccPlayList.fullScreenFixedList();
                    }
                    this.ccPlayerCtrol.switchFullsBtnStyle(),
                      this.progress(),
                      this.ccPlayerExercise &&
                        this.ccPlayerExercise.changeTestStyle("small");
                  }
                  1 == this.videoPlayData.subtitlemodel &&
                    this.ccPlayerMore &&
                    this.ccPlayerMore.setVttFontSize(),
                    this.ccPlayerMarquee &&
                      "true" === this.params.mobileFullsMarquee &&
                      $.isMoble() &&
                      this.ccPlayerMarquee.toggleVttMarquee(!1),
                    $.invokeWindow("on_player_fullscreen", 0, this.params.vid);
                }
              },
              isFullScreen: function () {
                return !!(
                  m.fullscreenElement ||
                  m.msFullscreenElement ||
                  m.mozFullScreenElement ||
                  m.webkitFullscreenElement ||
                  this.videoBox.classList.contains("ccH5PlayerBoxFixed")
                );
              },
              authFreeTimePlay: function () {
                var s = this;
                if (this.isSwitchVideoSmooth) {
                  this.freeT && clearInterval(this.freeT);
                  var e = m.querySelector(".ccH5FreeTimeTipBox");
                  e && e.remove();
                }
                if (
                  this.params.freeTime ||
                  (0 == this.videoPlayData.authenable &&
                    0 != this.videoPlayData.freetime)
                ) {
                  var t = function t() {
                    a.createFreeTimeTip(), a.removeVideoListenner("canplay", t);
                  };
                  this.addVideoListenner("canplay", t);
                  var a = this,
                    r = (this.freeT = setInterval(function () {
                      if (
                        a.playerInnerApi.getCurrentTime() >=
                        a.videoPlayData.freetime
                      ) {
                        a.destroy(!0);
                        var e = a.videoPlayData.authmessage || "";
                        "" == e &&
                          (e = decodeURIComponent(
                            "%E4%B8%8D%E5%85%81%E8%AE%B8%E8%A7%82%E7%9C%8B%E6%88%96%E8%AF%95%E7%9C%8B%E6%97%B6%E9%97%B4%E7%94%A8%E5%B0%BD"
                          )),
                          s.params.freeTimeEndTip &&
                            s.params.freeTimeEndTip.msg &&
                            (e = decodeURIComponent(
                              s.params.freeTimeEndTip.msg
                            ));
                        var t =
                            s.params.freeTimeEndTip &&
                            s.params.freeTimeEndTip.linkText,
                          i =
                            s.params.freeTimeEndTip &&
                            s.params.freeTimeEndTip.linkUrl;
                        (a.playerContainer.innerHTML = $.createTips(
                          a.params,
                          e,
                          {
                            text: (t && decodeURIComponent(t)) || "",
                            url: i,
                            target:
                              s.params.freeTimeEndTip &&
                              s.params.freeTimeEndTip.target,
                          }
                        )),
                          clearInterval(r),
                          "" != a.videoPlayData.callback &&
                            $.invokeWindow(
                              a.videoPlayData.callback,
                              a.params.vid
                            );
                      }
                    }, 1e3));
                  this.intervals.push(r);
                }
              },
              createFreeTimeTip: function () {
                this.params.freeTime > this.playerInnerApi.getTotalTime() &&
                  ((this.params.freeTime =
                    60 * parseInt(this.playerInnerApi.getTotalTime() / 60)),
                  (this.videoPlayData.freetime = this.params.freeTime));
                var e = "",
                  t = "";
                if (
                  this.params.freeTimeTip &&
                  this.params.freeTimeTip.linkText &&
                  ((e =
                    "<a href='javascript:;'>" +
                    decodeURIComponent(this.params.freeTimeTip.linkText) +
                    "</a>"),
                  this.params.freeTimeTip.linkUrl)
                ) {
                  var i = this.params.freeTimeTip.target || "_blank";
                  (i = $.isIPhone() && $.is360() ? "" : "target=" + i),
                    (e =
                      "<a href='" +
                      this.params.freeTimeTip.linkUrl +
                      "' " +
                      i +
                      ">" +
                      decodeURIComponent(this.params.freeTimeTip.linkText) +
                      "</a>");
                }
                this.params.freeTimeTip &&
                  this.params.freeTimeTip.msg &&
                  (t = "，" + decodeURIComponent(this.params.freeTimeTip.msg));
                var s = m.createElement("div"),
                  a =
                    '<div class="ccH5FreeTimeTipBox">试看<span class="freeTimeDuration"></span>' +
                    (60 <= this.videoPlayData.freetime ? "分钟" : "秒") +
                    '<div class="freeTimeTipMsg">' +
                    t +
                    "</div>" +
                    e +
                    '<div class="closeFreeTimeTip"></div></div>';
                this.videoBox.appendChild(s), (s.outerHTML = a);
                var r = $.queryEle(".ccH5FreeTimeTipBox", this.playerContainer),
                  n = $.queryEle(".freeTimeDuration", this.playerContainer),
                  o = $.queryEle(".closeFreeTimeTip", this.playerContainer);
                (n.innerHTML =
                  60 <= this.videoPlayData.freetime
                    ? this.videoPlayData.freetime / 60
                    : this.videoPlayData.freetime),
                  (o.onclick = function () {
                    r.style.display = "none";
                  });
              },
              colorRGB: function (e) {
                if (
                  ((e = e.toLowerCase()),
                  /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/.test(e))
                ) {
                  if (4 === e.length) {
                    for (var t = "#", i = 1; i < 4; i += 1)
                      t += e.slice(i, i + 1).concat(e.slice(i, i + 1));
                    e = t;
                  }
                  var s = [];
                  for (i = 1; i < 7; i += 2)
                    s.push(parseInt("0x" + e.slice(i, i + 2)));
                  return s.join(",");
                }
                return e;
              },
              addPlayerEventListenner: function (e, t) {
                var i = this.plyerEventListenners[e];
                i && 0 != i.length
                  ? this.plyerEventListenners[e].push(t)
                  : (this.plyerEventListenners[e] = [t]);
              },
              removePlayerEventListenner: function (e, t) {
                var i = this.plyerEventListenners[e];
                if (i && 0 != i.length) {
                  var s = [],
                    a = !0,
                    r = !1,
                    n = undefined;
                  try {
                    for (
                      var o, l = (0, X["default"])(i);
                      !(a = (o = l.next()).done);
                      a = !0
                    ) {
                      var c = o.value;
                      c != t && s.push(c);
                    }
                  } catch (d) {
                    (r = !0), (n = d);
                  } finally {
                    try {
                      !a && l["return"] && l["return"]();
                    } finally {
                      if (r) throw n;
                    }
                  }
                  this.plyerEventListenners[e] = s;
                }
              },
              triggerPlayerEvent: function (t) {
                var e = t[0];
                if (e) {
                  var i = this.plyerEventListenners[e];
                  i &&
                    i.forEach(function (e) {
                      setTimeout(function () {
                        return e.apply(y, Array.prototype.slice.call(t, 1));
                      }, 0);
                    });
                }
              },
              startPlayAndPauseStatis: function () {
                var e = this,
                  t = setInterval(function () {
                    if (e.playerInnerApi.getVideostate()) {
                      if (0 == e.playedTimes) return;
                      e.pausedTimes++;
                    } else e.playedTimes++;
                  }, 1e3);
                this.intervals.push(t);
              },
              jumpToTime: function (e) {
                var t = this;
                if (
                  !$.isByReplaced() &&
                  this.lastVideoTime < 1 &&
                  this.playerInnerApi.getCurrentTime() < 1 &&
                  this.lastPlayTime < 1
                )
                  return (
                    (this.resolveStateTime = e),
                    this.playerInnerApi.setCurrentTime(e),
                    (this.lastVideoTime = e),
                    void this.fixCurrentTime("fix")
                  );
                this.lastVideoTime = e;
                try {
                  this.playerInnerApi.setCurrentTime(e);
                } catch (i) {
                  this.playerInnerApi.videoPlay(),
                    setTimeout(function () {
                      t.handleLog("jumpToTime: ", i),
                        t.playerInnerApi.setCurrentTime(e);
                    }, 1e3);
                }
              },
              destroy: function (e) {
                this.cch5DestroyHls && this.cch5DestroyHls();
                var t = !0,
                  i = !(this.plyerEventListenners = {}),
                  s = undefined;
                try {
                  for (
                    var a, r = (0, X["default"])(this.intervals);
                    !(t = (a = r.next()).done);
                    t = !0
                  ) {
                    var n = a.value;
                    y.clearInterval(n);
                  }
                } catch (o) {
                  (i = !0), (s = o);
                } finally {
                  try {
                    !t && r["return"] && r["return"]();
                  } finally {
                    if (i) throw s;
                  }
                }
                this.extralFuncs.forEach(function (e) {
                  "function" == typeof e.destroy && e.destroy();
                }),
                  this.removeGlobalEventListener(),
                  e &&
                    (this.playerContainer &&
                      (this.playerContainer.innerHTML = ""),
                    this.isWasmPlay
                      ? (this.oVideo.pause(),
                        this.oVideo.destroy(),
                        (this.isWasmPlay = !1))
                      : "object" === (0, Y["default"])(this.oVideo) &&
                        (this.oVideo.src = ""),
                    (this.oVideo = {
                      play: function () {},
                      pause: function () {},
                    })),
                  (l[this.playerId] = null),
                  (this.canPlayed = !1);
              },
              handleLog: function (e) {
                $.isMoble() ? console.log("log:", e) : console.log(e);
              },
              setFastForwardTime: function (e) {
                /^\d+(\.\d+)?$/.test(e)
                  ? (this.forwardSecond =
                      0 <= e && e <= 1
                        ? parseInt(this.playerInnerApi.getTotalTime() * e)
                        : parseInt(e))
                  : this.handleLog("设置快进快退的值不合法");
              },
              classListIE: function () {
                "classList" in m.documentElement ||
                  ((y.HTMLElement = y.HTMLElement || y.Element),
                  Object.defineProperty(y.HTMLElement.prototype, "classList", {
                    get: function () {
                      var a = this;
                      function e(s) {
                        return function (e) {
                          var t = a.className.split(/\s+/g),
                            i = t.indexOf(e);
                          s(t, i, e), (a.className = t.join(" "));
                        };
                      }
                      return {
                        add: e(function (e, t, i) {
                          ~t || e.push(i);
                        }),
                        remove: e(function (e, t) {
                          ~t && e.splice(t, 1);
                        }),
                        toggle: e(function (e, t, i) {
                          ~t ? e.splice(t, 1) : e.push(i);
                        }),
                        contains: function (e) {
                          return !!~a.className.split(/\s+/g).indexOf(e);
                        },
                        item: function (e) {
                          return a.className.split(/\s+/g)[e] || null;
                        },
                      };
                    },
                  }));
              },
              addIESupport: function () {
                this.classListIE(),
                  "function" != typeof Array.prototype.forEach &&
                    (Array.prototype.forEach = function (e) {
                      for (var t = 0; t < this.length; t++)
                        e.apply(this, [this[t], t, this]);
                    }),
                  Array.prototype.indexOf ||
                    (Array.prototype.indexOf = function (e) {
                      var t = this.length >>> 0,
                        i = Number(arguments[1]) || 0;
                      for (
                        (i = i < 0 ? Math.ceil(i) : Math.floor(i)) < 0 &&
                        (i += t);
                        i < t;
                        i++
                      )
                        if (i in this && this[i] === e) return i;
                      return -1;
                    }),
                  y.NodeList &&
                    !NodeList.prototype.forEach &&
                    (NodeList.prototype.forEach = function (e, t) {
                      t = t || y;
                      for (var i = 0; i < this.length; i++)
                        e.call(t, this[i], i, this);
                    });
              },
              triggerPlayerError: function (e) {
                if (y.navigator.onLine) {
                  var t = {
                    siteId: this.params.siteid,
                    vid: this.params.vid,
                    errCode: Q[e],
                    errMsg: U[e],
                  };
                  $.invokeWindow("on_h5player_error", t);
                } else
                  $.invokeWindow("on_h5player_error", {
                    siteId: this.params.siteid,
                    vid: this.params.vid,
                    errCode: Q.NetworkUnavaiable,
                    errMsg: U.NetworkUnavaiable,
                  });
              },
              getVersion: function () {
                return v;
              },
              isInBuffered: function () {
                var e = this.playerInnerApi.getVideoBuffered();
                if (!e || 0 == e.length) return !1;
                var t = e.start(0),
                  i = e.end(0),
                  s = this.playerInnerApi.getCurrentTime();
                return t <= s && s <= i;
              },
              setVideoSrc: function (e) {
                var t = this;
                if (((this.playingUrl = e), this.isHlsPlay)) {
                  if (!this.hls) return;
                  for (
                    var i = this.hls.nextLevel, s = this.hls.levels, a = 0;
                    a < s.length;
                    a++
                  ) {
                    if ((s[a].url + "").startsWith(e.split("?")[0])) {
                      i = a;
                      break;
                    }
                  }
                  if (this.isInBuffered())
                    i != this.hls.nextLevel && (this.hls.nextLevel = i);
                  else {
                    var r = this.oVideo.paused;
                    this.hlsPlay(i),
                      this.oVideo.pause(),
                      this.onceVideoListener("canplay", function () {
                        t.oVideo.play(), r && t.oVideo.pause();
                      });
                  }
                } else {
                  if (
                    15 == (this.videoPlayData.safeLevel || 0) &&
                    $.isM3u8Url(e) &&
                    !$.isHlsSupported()
                  ) {
                    var n = navigator.userAgent.toLowerCase();
                    if (
                      !/(quark|ucbrowser)/.test(n) &&
                      !/android.*mqqbrowser/.test(n)
                    ) {
                      var o = parseInt(new Date().getTime() / 1e3),
                        l = o + this.timeMargin,
                        c = !1;
                      l < this.videoPlayData.dataTime &&
                        ((l = this.videoPlayData.dataTime), (c = !0)),
                        (e =
                          "https://p.bokecc.com/" +
                          this.cryptor.encryptAsBase64Str(
                            "u=" + e + "|v=1|t=" + l + "|r=" + Math.random()
                          ) +
                          ".m3u8?type=1&vid=" +
                          this.params.vid),
                        c && (e = e + "&t=" + o + "&tm=" + this.timeMargin),
                        0 < this.loadSrcRetryNum &&
                          (e = e + "&retry=" + this.loadSrcRetryNum),
                        (this.isVirtalM3u8Playing = !0);
                    }
                  }
                  this.oVideo.src = e;
                  var d = this.oVideo.querySelector("source");
                  d && (d.src = e),
                    (this.canPlayed = !1),
                    (this.setSrcTime = new Date().getTime());
                }
              },
              processPlayerError: function (e) {
                var t = this;
                console.error(e),
                  this.changeToBackPlayer(),
                  CCH5PlayerTrack
                    ? this.playerErrorReport(e)
                    : setTimeout(function () {
                        t.playerErrorReport(e);
                      }, 3e3);
              },
              changeToBackPlayer: function () {
                if (
                  (this.params.parentNode ||
                    (this.params.parentNode = this.playerContainer.parentNode),
                  !(
                    (this.canPlayed &&
                      0 < this.playerInnerApi.getCurrentTime()) ||
                    ((this.params.retryPlayerVersions =
                      (this.params.retryPlayerVersions || 0) + 1),
                    3 < this.params.retryPlayerVersions)
                  ))
                ) {
                  var i = y.cc_js_Player;
                  for (var e in y)
                    if (e.startsWith("CCH5Player")) {
                      if ("CCH5PlayerTrack" == e || "function" != typeof y[e])
                        continue;
                      delete y[e];
                    }
                  var s = this;
                  $.loadScript(
                    "https://p.bokecc.com/js/newplayer/h5player-3.5.8.js",
                    function () {
                      var e = y.createCCH5Player(s.params);
                      for (var t in e) i[t] = e[t];
                    }
                  );
                }
              },
              playerErrorReport: function (e) {
                this.playerTrack ||
                  (this.playerTrack = new CCH5PlayerTrack(
                    this.playerInnerApi,
                    this.params,
                    this.playerContainer,
                    v
                  ));
                var t = (e.stack || e.message || e) + "",
                  i = t.indexOf("(");
                0 < i && (t = t.substring(0, i)),
                  this.playerTrack.sendStartPlayState({
                    code: 400,
                    data: { msg: "播放器错误", error: t, url: y.location.href },
                  });
              },
            }),
              (y.cc_js_Player = z()),
              (y.createCCH5Player = function (e) {
                if (e) {
                  if (e.parentNode) {
                    var t = z();
                    return t.showPlayerDirect(e), (y.cc_js_Player = t);
                  }
                  console.log(
                    "Api createCCH5Player param config must contains parentNode"
                  );
                } else
                  console.log("Api createCCH5Player need one param config");
              }),
              (y.getCCH5Player = function (e, t) {
                return l[e + "_" + (t = t || "0")];
              }),
              $.invokeWindow("onCCH5PlayerLoaded");
          })(window),
          (function (d) {
            var h = d.document;
            if ("function" != typeof CCH5PlayerCtrol) {
              var t = function t(e) {
                (this.playerApi = e.playerApi),
                  (this.params = e.params),
                  (this.videoPlayData = e.videoPlayData),
                  (this.parentEle = e.parentEle),
                  (this.zIndex = e.zIndex),
                  (this.ccPlayerShare = e.ccPlayerShare),
                  (this.ccPlayerMore = e.ccPlayerMore),
                  (this.ccPlayerExercise = e.ccPlayerExercise),
                  (this.ccPlayerQA = e.ccPlayerQA),
                  (this.ccPlayList = e.ccPlayList),
                  (this.ccPlayerRightMenu = e.ccPlayerRightMenu),
                  (this.intervals = []),
                  this.params.controlBarNode &&
                    (this.parentEle = this.params.controlBarNode);
              };
              (t.prototype = {
                constructor: t,
                ccPlayerShare: null,
                ccPlayerMore: null,
                rates: [6, 5, 4, 3, 2],
                defaultRate: 1,
                rateAllowChange: !0,
                startPlayed: !1,
                triggerPlayTimes: 0,
                videoMarkIdx: 0,
                isCreateMobileMarks: !1,
                hfs: {
                  15: "270P",
                  10: "360P",
                  20: "480P",
                  30: "720P",
                  40: "1080P",
                  90: "OPD",
                  45: "2K",
                  50: "HQ",
                  60: "HQ",
                  51: "SQ",
                  61: "SQ",
                },
                settingBtnSize: 40,
                fullPageBtnSize: 40,
                hdBtnSize: 70,
                fullBtnSize: 40,
                init: function () {
                  this.initParamsConfig(),
                    this.createView(),
                    this.initData(),
                    this.addEvents(),
                    this.registerVideoListener();
                },
                initParamsConfig: function () {
                  if (
                    (this.params.rate_array &&
                      "string" == typeof this.params.rate_array &&
                      (this.params.rate_array = JSON.parse(
                        this.params.rate_array
                      )),
                    this.params.rate_array &&
                      this.params.rate_array instanceof Array &&
                      0 < this.params.rate_array.length)
                  )
                    if (7 < this.params.rate_array.length)
                      console.error(
                        "params rates length exceed, rates length max length is 7"
                      );
                    else {
                      for (
                        var e = this.params.rate_array, t = !0, i = !1, s = 0;
                        s < e.length;
                        s++
                      ) {
                        if (e[s] < 0.1 || 16 < e[s]) {
                          t = !1;
                          break;
                        }
                        e[s] == this.defaultRate && (i = !0);
                      }
                      if (t) {
                        if (((this.rates = e), !i)) {
                          var a = e.length;
                          this.defaultRate = 1 < a ? e[a - 1] : e[0];
                        }
                      } else
                        console.error(
                          "params rates is now allow, rate value must between 0.1 and 16."
                        );
                    }
                  if (this.params.rate) {
                    for (var r = !1, n = 0; n < this.rates.length; n++)
                      if (this.rates[n] == this.params.rate) {
                        r = !0;
                        break;
                      }
                    r
                      ? (this.defaultRate = this.params.rate)
                      : console.error("params rate is not in rates list");
                  }
                  if (this.params.rate_allow_change != undefined) {
                    var o = String(this.params.rate_allow_change);
                    if ("true" == o || "false" == o) {
                      if ("false" == o)
                        if (this.params.allowMaxRate != undefined) {
                          var l = Number(this.params.allowMaxRate);
                          this.rates = this.rates.filter(function (e) {
                            return e <= l;
                          });
                        } else
                          (this.rateAllowChange = !1),
                            (this.rates = [this.defaultRate]);
                    } else
                      console.error(
                        "params rate_allow_change can only be true or false"
                      );
                  }
                },
                registerVideoListener: function () {
                  var i = this;
                  this.playerApi.registerVideoEvent("canplay", function (e) {
                    (i.volume = e.target.volume),
                      e.target.duration &&
                        e.target.duration !== Infinity &&
                        (i.timeTotal.innerHTML = $.timeFormat(
                          e.target.duration
                        )),
                      i.startPlayed ||
                        ((i.startPlayed = !0),
                        $.isIPad() || $.isIPhone() || $.isAndroid()
                          ? i.params.showMobileMarks + "" != "false" &&
                            i.mobileMarks()
                          : i.hightlightsInit(),
                        i.playerApi.setOuterApiProps({
                          startPlayed: i.startPlayed,
                        })),
                      i.isSwitchingQuality && (i.isSwitchingQuality = !1),
                      i.playerApi.getCurrentTime() < 1 &&
                        setTimeout(function () {
                          i.playerApi.getVideostate() &&
                            (i.playerApi.showPlayBtn(),
                            (i.toggleBtn.className =
                              "ccH5TogglePlay ccToggleBtn"));
                        }, 100);
                  }),
                    this.playerApi.registerVideoEvent("play", function () {
                      i.triggerPlayTimes++,
                        (i.toggleBtn.className = "ccH5TogglePause ccToggleBtn"),
                        i.autoFitProgressBar();
                    }),
                    this.playerApi.registerVideoEvent("pause", function () {
                      i.toggleBtn.className = "ccH5TogglePlay ccToggleBtn";
                    }),
                    this.playerApi.registerVideoEvent("playing", function () {
                      i.toggleBtn.className = "ccH5TogglePause ccToggleBtn";
                    }),
                    this.playerApi.registerVideoEvent(
                      "timeupdate",
                      function (e) {
                        if (
                          ($.isIE() &&
                            i.playerApi.getVideoRate() != i.defaultRate &&
                            i.playerApi.setVideoRate(i.defaultRate),
                          i.params.rate_allow_change + "" == "false")
                        ) {
                          var t = d.localStorage.getItem(
                            "_h5player_media_playbackRate"
                          );
                          t &&
                            1 < t &&
                            (d.localStorage.removeItem(
                              "_h5player_media_playbackRate"
                            ),
                            i.playerApi.videoPause()),
                            !t &&
                              (i.params.allowMaxRate != undefined
                                ? i.playerApi.getVideoRate() >
                                  Number(i.params.allowMaxRate)
                                : i.playerApi.getVideoRate() !==
                                  i.defaultRate) &&
                              i.playerApi.getCurrentTime() &&
                              (i.playerApi.destroy(!0),
                              i.playerApi.showPlayerError());
                        }
                        "00:00" == i.timeTotal.innerHTML &&
                          e.target.duration &&
                          e.target.duration !== Infinity &&
                          (i.timeTotal.innerHTML = $.timeFormat(
                            e.target.duration
                          )),
                          !($.isIPad() || $.isIPhone() || $.isAndroid()) ||
                            i.params.showMobileMarks + "" == "false" ||
                            $.numberIsNaN(e.target.duration) ||
                            e.target.duration === Infinity ||
                            i.isCreateMobileMarks ||
                            i.mobileMarks(),
                          i.playerApi.getVideostate() ||
                            (i.toggleBtn.className =
                              "ccH5TogglePause ccToggleBtn"),
                          i.params.control_enable + "" == "0" &&
                            (i.ctrlBar.style.visibility = "hidden"),
                          i.isOnDrag ||
                            (!i.playerApi.isHlsPlaying() &&
                              i.isSwitchingQuality) ||
                            ((i.timeCurrent.innerHTML = $.timeFormat(
                              e.target.currentTime
                            )),
                            (i.proCurrent.style.width =
                              (e.target.currentTime / e.target.duration) *
                                i.ctrlWidth +
                              "px"));
                      }
                    ),
                    this.playerApi.registerVideoEvent("ended", function () {
                      (i.toggleBtn.className = "ccH5TogglePlay ccToggleBtn"),
                        i.show();
                    }),
                    this.playerApi.registerVideoEvent("touchend", function (e) {
                      1 == e.changedTouches.length && i.toggleCtrlBar();
                    });
                },
                addEvents: function () {
                  var c = this,
                    e = this;
                  $.addListener(this.toggleBtn, "click", function () {
                    e.playerApi.toggleVideoPlay();
                  }),
                    this.initQualityEvent(),
                    this.toggleFade(),
                    this.initVmEvent(),
                    this.initPlayRateEvent(),
                    this.initFullscreenEvent(),
                    this.initProgressDragEvent(this.dragBtn),
                    this.initProgressBarMoveEvent(),
                    $.addListener(d, "online", function () {
                      var e = c.hdUL.querySelector(".selected");
                      e && e.click();
                    }),
                    $.isIPad() ||
                      $.isMoble() ||
                      ($.addListener(this.playListBtn, "click", function () {
                        c.playerApi.hideKnowledge(),
                          e.ccPlayList.isShowing()
                            ? e.ccPlayList.hidePlayList()
                            : e.ccPlayList.showPlayList();
                      }),
                      $.addListener(this.learnBtn, "click", function () {
                        c.ccPlayList &&
                          c.ccPlayList.isShowing() &&
                          c.ccPlayList.hidePlayList(),
                          c.playerApi.toggleKnowledge();
                      }),
                      $.addListener(this.noteBtn, "click", function () {
                        c.playerApi.showNote();
                      }),
                      $.addListener(this.setting, "mouseover", function () {
                        e.toggleSetting();
                      }),
                      $.addListener(this.setting, "mouseout", function () {
                        e.toggleSettingHide();
                      }),
                      $.addListener(this.settingArea, "click", function (e) {
                        var t = e.target;
                        if ("em" !== t.tagName.toLowerCase()) {
                          if ("span" === t.tagName.toLowerCase()) {
                            var i = t.getAttribute("data-type");
                            if (
                              "vtt" === i &&
                              !c.closeVttBtn.classList.contains("checked")
                            )
                              return;
                            if (t.classList.contains("active")) return;
                            for (
                              var s = t.parentNode,
                                a = $.queryEleAll("span", s),
                                r = 0;
                              r < a.length;
                              r++
                            ) {
                              var n = a[r].classList;
                              n.contains("active") && n.remove("active");
                            }
                            t.classList.add("active"),
                              "line" === i
                                ? c.playerApi.switchUrl()
                                : "mode" === i
                                ? c.playerApi.toggleVideoOrAudio()
                                : "vtt" === i &&
                                  ((c.currVtt = t.getAttribute("data-id")),
                                  c.playerApi.selectVttItem(c.currVtt));
                          }
                        } else {
                          var o = !1;
                          o = t.classList.contains("checked")
                            ? (t.classList.remove("checked"),
                              c.switchVttItems[c.currVtt].classList.remove(
                                "active"
                              ),
                              c.playerApi.closeVtt(),
                              !0)
                            : (c.playerApi.selectVttItem(c.currVtt),
                              c.switchVttItems[c.currVtt].classList.add(
                                "active"
                              ),
                              t.classList.add("checked"),
                              !1);
                          for (var l = 0; l < c.switchVttItems.length; l++)
                            c.switchVttItems[l].style.color = o
                              ? "rgba(255,255,255,0.45)"
                              : "rgba(255,255,255,0.8)";
                        }
                      }));
                },
                initPlayRateEvent: function () {
                  var s = this,
                    a = this;
                  (d.CCH5playerSwitchQSpeed = function (e) {
                    var t = s.rates.length - e;
                    try {
                      s.spUL.querySelectorAll("li")[t].click();
                    } catch (i) {
                      console.error("设置倍速的值不合法");
                    }
                  }),
                    "ontouchstart" in d && !$.isTV08()
                      ? $.addListener(this.spBtn, "touchstart", function () {
                          a.isShowSpBtn
                            ? ((a.isShowSpBtn = !1), a.toggleSpHide())
                            : ((a.isShowSpBtn = !0), a.toggleSp());
                        })
                      : ($.addListener(this.spBtn, "mouseover", function () {
                          a.toggleSp();
                        }),
                        $.addListener(this.spBtn, "mouseout", function () {
                          a.toggleSpHide();
                        }),
                        $.addListener(this.spUL, "mouseover", function () {
                          a.toggleSp();
                        }),
                        $.addListener(this.spUL, "mouseout", function () {
                          a.toggleSpHide();
                        }));
                  for (
                    var r = this.defaultRate, n = this.rates, e = 0;
                    e < n.length;
                    e++
                  )
                    (this.spLi[e].index = e),
                      $.addListener(this.spLi[e], "click", function () {
                        for (var e = n[this.index], t = 0; t < n.length; t++)
                          a.spLi[t].className = "";
                        (this.className = "selected"),
                          $.isIPad() && a.playerApi.videoPause(),
                          a.playerApi.setVideoRate(e);
                        var i = a.playerApi.getVideoSrc();
                        if (
                          (a.playerApi.triggerPlayerEvent(
                            a.playerApi.playerEvent.changeSpeed,
                            r,
                            n[this.index],
                            i
                          ),
                          a.banSwitchSpeedCallback ||
                            $.invokeWindow(
                              "on_switch_rate",
                              a.videoPlayData.vid,
                              e
                            ),
                          (a.banSwitchSpeedCallback = !1),
                          d.sessionStorage)
                        ) {
                          var s =
                            JSON.parse(
                              d.sessionStorage.getItem("ccH5PlayerStorage")
                            ) || {};
                          (s.rate = e),
                            d.sessionStorage.setItem(
                              "ccH5PlayerStorage",
                              (0, G["default"])(s)
                            );
                        }
                        (r = e),
                          (a.defaultRate = e),
                          (a.spUL.style.display = "none"),
                          a.spBtn.classList.remove("ccH5Btn-hover"),
                          (a.isShowSpBtn = !1),
                          "true" === a.params.customizedMobile
                            ? (a.spBtn.innerHTML =
                                "1X" === this.innerHTML
                                  ? "倍速"
                                  : this.innerHTML)
                            : (a.spBtn.innerHTML = this.innerHTML),
                          $.isIPad() &&
                            setTimeout(function () {
                              a.playerApi.videoPlay();
                            }, 300);
                      });
                  if (
                    this.playerApi.getIsChangeVideo() ||
                    this.playerApi.getIsSwitchVideo()
                  )
                    if (d.sessionStorage) {
                      var t =
                        JSON.parse(
                          d.sessionStorage.getItem("ccH5PlayerStorage")
                        ) || {};
                      t.rate && this.resetSp(t.rate);
                    } else this.resetSp();
                  else this.resetSp();
                  var i = function i() {
                    s.playerApi.setVideoRate(s.defaultRate),
                      0 < s.playerApi.getCurrentTime() &&
                        s.playerApi.getVideoRate() == s.defaultRate &&
                        s.playerApi.removeVideoEvent("timeupdate", i);
                  };
                  this.playerApi.registerVideoEvent("timeupdate", i);
                },
                initVmEvent: function () {
                  var e = this,
                    t = this;
                  $.addListener(this.vmBtn, "click", function () {
                    e.mute();
                  }),
                    this.dragVm(),
                    $.addListener(this.vmBtn, "mouseover", function () {
                      t.vmShow();
                    }),
                    $.addListener(this.vmBtn, "mouseout", function () {
                      t.vmHide();
                    }),
                    $.addListener(this.vmDiv, "mouseover", function () {
                      t.vmShow();
                    }),
                    $.addListener(this.vmDiv, "mouseout", function () {
                      t.vmHide();
                    });
                },
                vmShow: function () {
                  (this.vmDiv.style.display = "block"),
                    (this.vmDiv.style.right = null),
                    this.hasFullPageBtn() &&
                      (this.vmDiv.style.right =
                        $.getStyleValueWithoutUnit(this.vmDiv, "right") +
                        this.fullPageBtnSize +
                        "px"),
                    ((this.hasFullBtn() ||
                      $.isAudioPlay(this.params, this.videoPlayData)) &&
                      !this.checkAudioPlay()) ||
                      (this.vmDiv.style.right =
                        $.getStyleValueWithoutUnit(this.vmDiv, "right") -
                        this.fullBtnSize +
                        "px"),
                    clearTimeout(this.vmTimer);
                },
                vmHide: function () {
                  var e = this;
                  this.vmTimer = setTimeout(function () {
                    (e.vmDiv.style.display = "none"),
                      (e.vmDiv.style.right = null);
                  }, 300);
                },
                initFullscreenEvent: function () {
                  var t = this,
                    i = !1;
                  if (this.params.listid) {
                    var e =
                      h.fullscreenElement ||
                      h.msFullscreenElement ||
                      h.mozFullScreenElement ||
                      h.webkitFullscreenElement ||
                      !1;
                    (i = e)
                      ? ((this.fullsBtn.style.display = "none"),
                        (this.exitFullsBtn.style.display = "block"))
                      : ((this.fullsBtn.style.display = "block"),
                        (this.exitFullsBtn.style.display = "none"));
                  }
                  (this.isClickExitPageFulls = !1),
                    (this.isClickExitFulls = !1);
                  for (
                    var s = [
                        "fullscreenchange",
                        "mozfullscreenchange",
                        "webkitfullscreenchange",
                        "msfullscreenchange",
                      ],
                      a = 0;
                    a < s.length;
                    a++
                  ) {
                    var r = s[a];
                    this.playerApi.addGlobalEvent(h, r, function () {
                      i = !i;
                      var e =
                        h.fullscreenElement ||
                        h.webkitFullscreenElement ||
                        h.mozFullScreenElement ||
                        h.webkitIsFullScreen ||
                        h.mozFullScreen;
                      0 != i || e || t.exitFullsBtn.click();
                    });
                  }
                  $.addListener(this.pageFullsBtn, "click", function (e) {
                    t.playerApi.pageFullScreen(t.parentEle);
                  }),
                    $.addListener(this.exitPageFullsBtn, "click", function (e) {
                      t.isClickExitPageFulls ||
                        t.playerApi.exitPageFullScreen(t.parentEle);
                    }),
                    $.addListener(this.fullsBtn, "click", function (e) {
                      t.playerApi.fullScreen(t.parentEle),
                        $.isAndroid() ||
                          $.isIPhone() ||
                          $.isIPad() ||
                          (t.ctrlWidth = t.parentEle.clientWidth);
                    }),
                    $.addListener(this.exitFullsBtn, "click", function (e) {
                      t.isClickExitFulls ||
                        (t.playerApi.exitFullScreen(e),
                        $.isAndroid() ||
                          $.isIPhone() ||
                          $.isIPad() ||
                          (t.ctrlWidth = t.parentEle.clientWidth));
                    });
                },
                initQualityEvent: function () {
                  if ("false" !== this.params.allowSelectHd) {
                    var t = this;
                    "ontouchstart" in d && !$.isTV08()
                      ? $.addListener(this.hdBtn, "touchstart", function () {
                          t.isShowHDBtn
                            ? ((t.isShowHDBtn = !1), t.toggleHdHide())
                            : ((t.isShowHDBtn = !0), t.toggleHd());
                        })
                      : ($.addListener(this.hdBtn, "mouseover", function () {
                          t.toggleHd();
                        }),
                        $.addListener(this.hdBtn, "mouseout", function () {
                          t.toggleHdHide();
                        }),
                        $.addListener(this.hdUL, "mouseover", function () {
                          t.toggleHd();
                        }),
                        $.addListener(this.hdUL, "mouseout", function () {
                          t.toggleHdHide();
                        })),
                      (d.CCH5playerSwitchQuality = function (e) {
                        t.setQuality(e);
                      }),
                      this.initSwitchQualityEvent();
                  }
                },
                initData: function () {
                  var n = this;
                  (this.ctrlBar = $.queryEle("section", this.parentEle)),
                    (this.loadBar = $.queryEle(".ccH5LoadBar", this.parentEle)),
                    (this.toggleBtn = $.queryEle(
                      ".ccToggleBtn",
                      this.parentEle
                    )),
                    (this.progressBar = $.queryEle(
                      ".ccH5ProgressBar",
                      this.parentEle
                    )),
                    (this.dragBtn = $.queryEle(".ccH5DragBtn", this.parentEle)),
                    (this.proCurrent = $.queryEle(
                      ".ccH5CurrentPro",
                      this.parentEle
                    )),
                    (this.timeCurrent = $.queryEle(
                      ".ccH5TimeCurrent",
                      this.parentEle
                    )),
                    (this.timeTotal = $.queryEle(
                      ".ccH5TimeTotal",
                      this.parentEle
                    )),
                    (this.pageFullsBtn = $.queryEle(
                      ".ccH5PageFullsBtn",
                      this.parentEle
                    )),
                    (this.exitPageFullsBtn = $.queryEle(
                      ".ccH5ExitPageFullsBtn",
                      this.parentEle
                    )),
                    (this.fullsBtn = $.queryEle(
                      ".ccH5FullsBtn",
                      this.parentEle
                    )),
                    (this.exitFullsBtn = $.queryEle(
                      ".ccH5ExitFullsBtn",
                      this.parentEle
                    )),
                    (this.hdBtn = $.queryEle(".ccH5hd", this.parentEle)),
                    (this.hdUL = $.queryEle(".ccH5hdul", this.parentEle)),
                    (this.spBtn = $.queryEle(".ccH5sp", this.parentEle)),
                    (this.spUL = $.queryEle(".ccH5spul", this.parentEle)),
                    (this.spLi = $.queryEleAll("li", this.spUL)),
                    (this.vmBtn = $.queryEle(".ccH5vm", this.parentEle)),
                    (this.vmDiv = $.queryEle(".ccH5vmdiv", this.parentEle)),
                    (this.vmDragBtn = $.queryEle(
                      ".ccH5DragVmBtn",
                      this.parentEle
                    )),
                    (this.vmBar = $.queryEle(".ccH5vmbar", this.parentEle)),
                    (this.vmPro = $.queryEle(".ccH5vmbarPro", this.parentEle)),
                    (this.preViewTime = $.queryEle(
                      "#cch5CurrentTime",
                      this.parentEle
                    )),
                    (this.preViewTimeTips = $.queryEle(
                      "span",
                      this.preViewTime
                    ));
                  var e = this.getQualityText(this.playerApi.getCurrentCopy());
                  if (
                    (($.queryEle(".ccH5hd", this.parentEle).innerHTML = e),
                    d.sessionStorage)
                  ) {
                    var t =
                      JSON.parse(
                        d.sessionStorage.getItem("ccH5PlayerStorage")
                      ) || {};
                    this.params.defaultDf &&
                      t.df &&
                      this.params.defaultDf != t.df &&
                      ((t.df = this.params.defaultDf),
                      d.sessionStorage.setItem(
                        "ccH5PlayerStorage",
                        (0, G["default"])(t)
                      ));
                  }
                  (this.playListBtn = $.queryEle(
                    ".ccH5ListBtn",
                    this.parentEle
                  )),
                    (this.params.listid && !$.isIPad() && !$.isMoble()) ||
                      (this.playListBtn.style.display = "none"),
                    (this.learnBtn = $.queryEle(
                      ".ccH5LearnBtn",
                      this.parentEle
                    )),
                    this.params.learnBtnTxt &&
                      this.playerApi.isVideoPlay() &&
                      !$.isIPad() &&
                      !$.isMoble() &&
                      this.showKnowledgeBtn(),
                    (this.noteBtn = $.queryEle(".ccH5NoteBtn", this.parentEle)),
                    (this.setting = $.queryEle(".ccH5Setting", this.parentEle)),
                    (this.settingArea = $.queryEle(
                      ".ccH5SettingArea",
                      this.parentEle
                    )),
                    (this.switchUrl = $.queryEle(".switchUrl", this.parentEle)),
                    (this.switchMode = $.queryEle(
                      ".switchMode",
                      this.parentEle
                    )),
                    (this.switchVtt = $.queryEle(".switchVtt", this.parentEle)),
                    (this.switchVttBtns = $.queryEle(
                      ".switchVttBtns",
                      this.parentEle
                    )),
                    (this.switchVttItems = $.queryEleAll(
                      "span",
                      this.switchVtt
                    )),
                    (this.closeVttBtn = $.queryEle("em", this.settingArea)),
                    (this.currVtt = this.videoPlayData.defaultvtt),
                    "true" === this.params.customizedMobile &&
                      ((this.customSpBox = $.queryEle(
                        ".ccH5CustomSp",
                        this.parentEle
                      )),
                      (this.customDfBox = $.queryEle(
                        ".ccH5CustomDf",
                        this.parentEle
                      )),
                      this.customSpBox.appendChild(this.spBtn),
                      this.customSpBox.appendChild(this.spUL),
                      this.customDfBox.appendChild(this.hdBtn),
                      this.customDfBox.appendChild(this.hdUL),
                      (this.customSwitchUrl = $.queryEle(
                        ".ccH5MobileSwitchUrl",
                        this.parentEle
                      )),
                      (this.customSwitchBtn = $.queryEle(
                        ".ccH5MobileSwitchUrlBtn",
                        this.parentEle
                      )),
                      (this.switchAudioBtn = $.queryEle(
                        ".ccH5SwitchAudioIcon",
                        this.parentEle
                      )),
                      (this.castingBtn = $.queryEle(
                        ".ccH5Casting",
                        this.parentEle
                      )),
                      this.switchAudioBtn &&
                        $.addListener(
                          this.switchAudioBtn,
                          "click",
                          function () {
                            n.playerApi.toggleVideoOrAudio();
                          }
                        ),
                      this.castingBtn &&
                        $.addListener(this.castingBtn, "click", function () {
                          var e = $.queryEle("video", n.parentEle);
                          "function" ==
                            typeof e.webkitShowPlaybackTargetPicker &&
                            (e.webkitShowPlaybackTargetPicker(),
                            n.playerApi.triggerPlayerEvent(
                              n.playerApi.playerEvent.airPlay
                            ));
                        }),
                      $.addListener(
                        this.customSwitchBtn,
                        "click",
                        function (e) {
                          (n.spUL.style.display = "none"),
                            n.spBtn.classList.remove("ccH5Btn-hover"),
                            (n.isShowSpBtn = !1),
                            (n.hdUL.style.display = "none"),
                            n.hdBtn.classList.remove("ccH5Btn-hover"),
                            (n.isShowHDBtn = !1);
                        }
                      ),
                      $.addListener(
                        this.customSwitchUrl,
                        "click",
                        function (e) {
                          var t = e.target;
                          if ("li" === t.tagName.toLowerCase()) {
                            if (t.classList.contains("active")) return;
                            for (
                              var i = t.parentNode,
                                s = $.queryEleAll("li", i),
                                a = 0;
                              a < s.length;
                              a++
                            ) {
                              var r = s[a].classList;
                              r.contains("active") && r.remove("active");
                            }
                            t.classList.add("active"), n.playerApi.switchUrl();
                          }
                        }
                      )),
                    this.currVtt !== undefined &&
                      this.switchVttItems[this.currVtt].classList.add("active"),
                    this.playerApi.getIsShowSwitchMode() ||
                      this.playerApi.getIsSwitchVideo() ||
                      (this.switchMode.style.display = "none"),
                    this.playerApi.getIsShowSwitchUrl() ||
                      this.playerApi.getIsSwitchVideo() ||
                      (this.switchUrl.style.display = "none"),
                    (this.playerApi.isVideoPlay() &&
                      this.videoPlayData.vtt &&
                      this.params.showSrt + "" != "false") ||
                      this.playerApi.getIsSwitchVideo() ||
                      (this.switchVtt.style.display = "none"),
                    this.playerApi.getIsShowSwitchVtt() ||
                      this.playerApi.getIsSwitchVideo() ||
                      (this.switchVttBtns.style.display = "none"),
                    (this.params.isShowMoreBtn + "" != "false" &&
                      this.checkShowSetting() &&
                      !$.isAndroid() &&
                      !$.isIPhone() &&
                      !$.isIPad()) ||
                      this.playerApi.getIsSwitchVideo() ||
                      (this.setting.style.display = "none"),
                    this.autoFitProgressBar(),
                    (/(iPad; CPU OS 5_0_1 like Mac OS X)/i.test(
                      navigator.userAgent
                    ) ||
                      /Chrome\/30\.0\.0\.0 Safari\/537\.36/i.test(
                        navigator.userAgent
                      )) &&
                      ((this.spBtn.style.display = "none"),
                      (this.fullsBtn.style.display = "none")),
                    this.params.showRateBtn + "" != "false" ||
                      this.playerApi.getIsSwitchVideo() ||
                      (this.spBtn.style.display = "none"),
                    (this.params.showFullScreenBtn + "" != "false" &&
                      !$.isAudioPlay(this.params, this.videoPlayData)) ||
                      this.playerApi.getIsSwitchVideo() ||
                      (this.fullsBtn.style.display = "none"),
                    this.playerApi.getOrientation() &&
                      "none" !== this.fullsBtn.style.display &&
                      !this.playerApi.getIsSwitchVideo() &&
                      ((this.fullsBtn.style.display = "none"),
                      (this.exitFullsBtn.style.display = "block")),
                    ("false" !== this.params.showHdBtn &&
                      0 != this.videoPlayData.videoCopies.length &&
                      !$.isRealtimePlay(this.videoPlayData)) ||
                    this.playerApi.getIsSwitchVideo()
                      ? this.initQuality()
                      : (this.hdBtn.style.display = "none"),
                    this.playerApi.getIsWasmPlay() ||
                      this.params.volumn === undefined ||
                      isNaN(parseFloat(this.params.volumn)) ||
                      ("string" == typeof this.params.volumn &&
                        (this.params.volumn = parseFloat(this.params.volumn)),
                      this.setVolume(this.params.volumn)),
                    this.params.showPageFullScreenBtn + "" != "true" ||
                      this.playerApi.getIsSwitchVideo() ||
                      ((this.pageFullsBtn.style.display = "block"),
                      (this.exitPageFullsBtn.style.display = "none")),
                    (!$.isIPad() && !$.isMoble()) ||
                      this.playerApi.getIsSwitchVideo() ||
                      ((this.pageFullsBtn.style.display = "none"),
                      (this.exitPageFullsBtn.style.display = "none"));
                },
                createView: function () {
                  var e =
                      "<section class='" +
                      ("true" === this.params.playReadyShowCtrol
                        ? ""
                        : "ccH5FadeOut") +
                      "'>\t\t<div class='ccH5ProgressBar'>\t\t\t<div class='cch5CurrentTime' id='cch5CurrentTime'>\t\t\t\t<p></p>\t\t\t\t<span></span>\t\t\t\t<div class='trangel'></div>\t\t\t</div>\t\t\t<div class='ccH5LoadBar'>\t\t\t\t<div class='ccH5CurrentPro' style='width: 0;'>\t\t\t\t\t<span class='ccH5DragBtn'></span>\t\t\t\t</div>\t\t\t</div>\t\t</div>\t\t<span class='ccH5TogglePlay ccToggleBtn'></span>\t\t<div class='ccH5Time'>\t\t\t<em class='ccH5TimeCurrent'>00:00</em><span>/</span><em class='ccH5TimeTotal'>00:00</em>\t\t</div>\t\t<em class='ccH5FullsBtn'>B</em>\t\t<em class='ccH5ExitFullsBtn'>B</em>\t\t<em class='ccH5PageFullsBtn'>B</em>\t\t<em class='ccH5ExitPageFullsBtn'>B</em>\t\t<span class='ccH5vm'>T</span>\t\t<div class='ccH5vmdiv' style='display:none;'>\t\t\t<div class='ccH5vmbar'>\t\t\t\t<div class='ccH5vmbarPro'>\t\t\t\t\t<span class='ccH5DragVmBtn'></span>\t\t\t\t</div>\t\t\t</div>\t\t</div>     <div class='ccH5Setting'>         <div class='ccH5SettingBtn'></div>         <div class='ccH5SettingArea' style='display:none;'>             <div class='ccH5SettingRow switchUrl'>                 <div>线路</div>                 <div>                   <span class='active' data-type='line'>线路1</span><span data-type='line'>线路2</span>                 </div>             </div>             <div class='ccH5SettingRow switchMode'>                 <div>模式</div>                 <div>                   <span class='" +
                      (this.playerApi.isVideoPlay() ? "active" : "") +
                      "' data-type='mode'>视频</span>                   <span class='" +
                      (this.playerApi.isVideoPlay() ? "" : "active") +
                      "' data-type='mode'>音频</span>                 </div>             </div>             <div class='ccH5SettingRow switchVtt'>                 <div><em class='checked'></em>字幕</div>                 <div class='switchVttBtns'>                   <span data-type='vtt' data-id='0'>字幕1</span><span data-type='vtt' data-id='1'>字幕2</span><span data-type='vtt' data-id='2'>双语</span>                 </div>             </div>         </div>     </div>\t\t<span class='ccH5hd' style='overflow:hidden;'></span>\t\t<span class='ccH5sp'>" +
                      decodeURIComponent("%E6%AD%A3%E5%B8%B8") +
                      "</span>     <div class='ccH5ListBtn'>列表</div>     <div class='ccH5LearnBtn' style='display:none;'>" +
                      (this.params.learnBtnTxt || "") +
                      "</div>     <div class='ccH5OptionBtn ccH5NoteBtn' style='display:none;'>笔记</div>\t\t<ul class='ccH5spul' style='bottom:36px;top:auto;'>\t\t</ul>\t\t<ul class='ccH5hdul'>\t\t</ul></section>",
                    t = h.createElement("section");
                  this.parentEle.appendChild(t),
                    (t.outerHTML = e),
                    ($.queryEle("section", this.parentEle).style.zIndex =
                      this.zIndex),
                    this.createCutTime();
                  var i = $.queryEle(".ccH5spul", this.parentEle),
                    s = "",
                    a = "";
                  if ("true" === this.params.customizedMobile) {
                    this.createCustomMobile(), (a = "X");
                    for (var r = 0; r < this.rates.length; r++)
                      s =
                        s +
                        '<li data-sp="' +
                        this.rates[r] +
                        '">' +
                        this.rates[r] +
                        a +
                        "</li>";
                  } else {
                    a = this.params.openBtnEnMode + "" == "true" ? "X" : "倍";
                    for (var n = 0; n < this.rates.length; n++)
                      s =
                        s +
                        '<li data-sp="' +
                        this.rates[n] +
                        '">' +
                        (1 == this.rates[n] &&
                        this.params.openBtnEnMode + "" != "true"
                          ? "正常"
                          : this.rates[n] + a) +
                        "</li>";
                  }
                  i.innerHTML = s;
                },
                createCustomMobile: function () {
                  var e =
                      "<div class='ccH5HeaderBtns " +
                      ($.isIPhone() ? "" : "noH5Casting") +
                      "'>" +
                      (this.playerApi.getIsShowSwitchMode()
                        ? "<div class='ccH5CustomIcon ccH5SwitchAudioIcon'></div>"
                        : "") +
                      "<div class='ccH5CustomBtn ccH5CustomSp'></div><div  class='ccH5CustomBtn ccH5CustomDf'></div><div class='ccH5CustomBtn ccH5MobileSwitchUrlBtn'>    <span>线路</span>    <ul class='ccH5DropDoown ccH5MobileSwitchUrl'>       <li class='ccH5DropDoownItem active'>线路1</li>       <li class='ccH5DropDoownItem'>线路2</li>    </ul></div>" +
                      ($.isIPhone()
                        ? "<div class='ccH5CustomIcon ccH5Casting'></div>"
                        : "") +
                      "</div>",
                    t = h.createElement("div");
                  this.parentEle.appendChild(t),
                    (t.outerHTML = e),
                    ($.queryEle(
                      ".ccH5HeaderBtns",
                      this.parentEle
                    ).style.zIndex = this.zIndex),
                    2 == this.params.mediatype &&
                      ($.queryEle(
                        ".ccH5HeaderBtns",
                        this.parentEle
                      ).style.display = "none");
                },
                createCutTime: function () {
                  var i = this;
                  if (
                    !$.isMoble() &&
                    !$.isIPad() &&
                    "cut" === this.params.previewMode
                  ) {
                    var e = h.createElement("div");
                    $.queryEle("section", this.parentEle).appendChild(e),
                      (e.outerHTML =
                        '<div class="ccCutSetting" style="width:50%;min-width:240px;height:32px;line-height:32px;position:absolute;top:5px;right:0;background:#000;text-align:right"><span class="ccCutStartTime" style="background:#ff920a;color:#fff;margin-right:10px;padding:2px 4px">设为开始时间</span><span class="ccCutEndTime" style="background:#ff920a;color:#fff;margin-right:10px;padding:2px">设为结束时间</span></div>');
                    var t = $.queryEle(".ccCutStartTime", this.parentEle),
                      s = $.queryEle(".ccCutEndTime", this.parentEle);
                    (t.onclick = function (e) {
                      var t = i.playerApi.getCurrentTime();
                      $.invokeWindow("setStartTime", t);
                    }),
                      (s.onclick = function (e) {
                        var t = i.playerApi.getCurrentTime();
                        $.invokeWindow("setEndTime", t);
                      });
                  }
                },
                showKnowledgeBtn: function (e) {
                  e && (this.learnBtn.innerHTML = e),
                    this.learnBtn && (this.learnBtn.style.display = "block");
                },
                hideKnowledgeBtn: function () {
                  this.learnBtn && (this.learnBtn.style.display = "none");
                },
                getKnowledgePartStyle: function (e, t) {
                  var i = this.playerApi.getTotalTime(),
                    s = parseInt(i);
                  return {
                    left: parseFloat((e / s) * 100, 2) + "%",
                    width: parseFloat(((t - e) / s) * 100, 2) + "%",
                  };
                },
                createKnowledgePart: function (e, t) {
                  var i = this.getKnowledgePartStyle(e, t),
                    s =
                      '<div class="ccKnowledgePart" style="left:' +
                      i.left +
                      ";width:" +
                      i.width +
                      '"></div>',
                    a = h.createElement("div");
                  $.queryEle("section", this.parentEle).appendChild(a),
                    (a.outerHTML = s);
                },
                showKnowledgePart: function (e, t) {
                  var i = $.queryEle(".ccKnowledgePart", this.parentEle);
                  if (i) {
                    var s = this.getKnowledgePartStyle(e, t);
                    (i.style.width = s.width),
                      (i.style.left = s.left),
                      (i.style.display = "block");
                  } else this.createKnowledgePart(e, t);
                },
                hideKnowledgePart: function () {
                  var e = $.queryEle(".ccKnowledgePart", this.parentEle);
                  e && "none" !== e.style.display && (e.style.display = "none");
                },
                checkShowSetting: function () {
                  for (
                    var e = !1,
                      t = $.queryEleAll(".ccH5SettingRow", this.settingArea),
                      i = 0;
                    i < t.length;
                    i++
                  )
                    if ("none" != t[i].style.display) {
                      e = !0;
                      break;
                    }
                  return e;
                },
                toggleSetting: function () {
                  (this.settingArea.style.display = "block"),
                    (this.settingArea.style.right = null),
                    this.hasFullPageBtn() &&
                      (this.settingArea.style.right =
                        $.getStyleValueWithoutUnit(this.settingArea, "right") +
                        this.fullPageBtnSize +
                        "px"),
                    ((this.hasFullBtn() ||
                      $.isAudioPlay(this.params, this.videoPlayData)) &&
                      !this.checkAudioPlay()) ||
                      (this.settingArea.style.right =
                        $.getStyleValueWithoutUnit(this.settingArea, "right") -
                        this.fullBtnSize +
                        "px");
                },
                toggleSettingHide: function () {
                  (this.settingArea.style.display = "none"),
                    (this.settingArea.style.right = null);
                },
                toggleHd: function () {
                  (this.spUL.style.display = "none"),
                    (this.spUL.style.right = null),
                    this.spBtn.classList.remove("ccH5Btn-hover"),
                    (this.isShowSpBtn = !1),
                    (this.hdUL.style.display = "block"),
                    (this.hdUL.style.right = null),
                    this.hasFullPageBtn() &&
                      (this.hdUL.style.right =
                        $.getStyleValueWithoutUnit(this.hdUL, "right") +
                        this.fullPageBtnSize +
                        "px"),
                    ((this.hasFullBtn() ||
                      $.isAudioPlay(this.params, this.videoPlayData)) &&
                      !this.checkAudioPlay()) ||
                      (this.hdUL.style.right =
                        $.getStyleValueWithoutUnit(this.hdUL, "right") -
                        this.fullBtnSize +
                        "px"),
                    this.hasSettingBtn() ||
                      (this.hdUL.style.right =
                        $.getStyleValueWithoutUnit(this.hdUL, "right") -
                        this.settingBtnSize +
                        "px"),
                    this.hdBtn.classList.add("ccH5Btn-hover"),
                    (this.isShowHDBtn = !0),
                    clearTimeout(this.hdtimer);
                },
                toggleHdHide: function () {
                  var e = this;
                  this.hdtimer = setTimeout(function () {
                    (e.hdUL.style.display = "none"),
                      (e.hdUL.style.right = null),
                      e.hdBtn.classList.remove("ccH5Btn-hover"),
                      (e.isShowHDBtn = !1);
                  }, 200);
                },
                toggleSp: function () {
                  this.rateAllowChange &&
                    ((this.hdUL.style.display = "none"),
                    (this.hdUL.style.right = null),
                    this.hdBtn.classList.remove("ccH5Btn-hover"),
                    (this.isShowHDBtn = !1),
                    (this.spUL.style.display = "block"),
                    (this.spUL.style.right = null),
                    this.hasFullPageBtn() &&
                      (this.spUL.style.right =
                        $.getStyleValueWithoutUnit(this.spUL, "right") +
                        this.fullPageBtnSize +
                        "px"),
                    this.hasHdBtn() ||
                      (this.spUL.style.right =
                        $.getStyleValueWithoutUnit(this.spUL, "right") -
                        this.hdBtnSize +
                        "px"),
                    ((this.hasFullBtn() ||
                      $.isAudioPlay(this.params, this.videoPlayData)) &&
                      !this.checkAudioPlay()) ||
                      (this.spUL.style.right =
                        $.getStyleValueWithoutUnit(this.spUL, "right") -
                        this.fullBtnSize +
                        "px"),
                    this.hasSettingBtn() ||
                      (this.spUL.style.right =
                        $.getStyleValueWithoutUnit(this.spUL, "right") -
                        this.settingBtnSize +
                        "px"),
                    this.spBtn.classList.add("ccH5Btn-hover"),
                    (this.isShowSpBtn = !0),
                    clearTimeout(this.sptimer));
                },
                toggleSpHide: function () {
                  var e = this;
                  this.sptimer = setTimeout(function () {
                    (e.spUL.style.display = "none"),
                      (e.spUL.style.right = null),
                      e.spBtn.classList.remove("ccH5Btn-hover"),
                      (e.isShowSpBtn = !1);
                  }, 200);
                },
                findQualityIdx: function () {
                  for (
                    var e = this.hdUL.getElementsByTagName("li"), t = 0;
                    t < e.length;
                    t++
                  )
                    if ("selected" === e[t].className) return t;
                },
                findSpeedIdx: function () {
                  for (
                    var e = this.spUL.getElementsByTagName("li"), t = 0;
                    t < e.length;
                    t++
                  )
                    if ("selected" === e[t].className) return t;
                },
                initQuality: function () {
                  this.hdUL.innerHTML = "";
                  var e = [];
                  e = this.playerApi.isVideoPlay()
                    ? this.videoPlayData.videoCopies
                    : this.videoPlayData.audioCopies;
                  for (var t = 0; t < e.length; t++) {
                    this.hdUL.style.top = 30 * -e.length + "px";
                    var i = h.createElement("li"),
                      s = this.getQualityText(e[t]),
                      a = h.createTextNode(s);
                    i.appendChild(a),
                      this.hdUL.appendChild(i),
                      (this.hdUL.style.top = 30 * -e.length + "px");
                  }
                },
                getQualityText: function (e) {
                  var t = e.quality;
                  return this.params.openBtnEnMode + "" == "true"
                    ? this.hfs[t]
                    : e.desp;
                },
                initSwitchQualityEvent: function () {
                  var o = this.hdUL.getElementsByTagName("li");
                  if (!(o.length < 1))
                    for (var e = 0; e < o.length; e++) {
                      var l = this;
                      if (
                        ((o[e].index = e),
                        o[e].innerHTML == this.hdBtn.innerHTML &&
                          (o[e].className = "selected"),
                        this.params.allowMaxDf)
                      )
                        if (
                          this.videoPlayData.videoCopies[e].quality >
                          this.params.allowMaxDf
                        )
                          continue;
                      $.addListener(o[e], "click", function () {
                        (l.isSwitchingQuality = !0),
                          l.playerApi.isHlsPlaying() ||
                            l.playerApi.showLoading();
                        for (var e = 0; e < l.spLi.length; e++)
                          "selected" === l.spLi[e].className && l.spLi[e];
                        for (var t = 0; t < o.length; t++) o[t].className = "";
                        (this.className = "selected"),
                          (l.hdBtn.innerHTML = this.innerText),
                          (l.hdUL.style.display = "none"),
                          l.hdBtn.classList.remove("ccH5Btn-hover"),
                          (l.isShowHDBtn = !1);
                        var i = l.playerApi.getCurrentTime(),
                          s = l.playerApi.getVideoSrc(),
                          a = null;
                        if (
                          (a = l.playerApi.isVideoPlay()
                            ? l.videoPlayData.videoCopies[this.index]
                            : l.videoPlayData.audioCopies[this.index])
                        ) {
                          (a.index = this.index),
                            l.playerApi.isBackupPlay()
                              ? l.playerApi.setVideoSrc(a.backupurl)
                              : l.playerApi.setVideoSrc(a.playurl),
                            l.playerApi.setNewCopy(a);
                          var r = l.playerApi.getVideoSrc() || "";
                          if (
                            (l.playerApi.triggerPlayerEvent(
                              l.playerApi.playerEvent.changeQuality,
                              s,
                              r
                            ),
                            $.invokeWindow(
                              "on_switch_quality",
                              l.videoPlayData.vid,
                              a.quality
                            ),
                            d.sessionStorage)
                          ) {
                            var n =
                              JSON.parse(
                                d.sessionStorage.getItem("ccH5PlayerStorage")
                              ) || {};
                            (n.df = a.quality),
                              d.sessionStorage.setItem(
                                "ccH5PlayerStorage",
                                (0, G["default"])(n)
                              );
                          }
                          l.playerApi.resolvePlayState(i);
                        }
                      });
                    }
                },
                mute: function () {
                  (this.videoMute = !this.videoMute),
                    (this.volume = this.playerApi.getVideoVolume()),
                    this.videoMute && 0 != this.volume
                      ? ((this.vmPro.style.top = "80px"),
                        (this.vmPro.style.height = "0px"),
                        this.setVol(0),
                        (this.vmBtn.style.backgroundPosition = "right center"))
                      : ((this.vmPro.style.top = "20px"),
                        (this.vmPro.style.height = "60px"),
                        this.setVol(0.8),
                        (this.vmBtn.style.backgroundPosition = "left center"));
                },
                setVol: function (e, t) {
                  if (
                    (this.playerApi.setVideoVolume(e),
                    t ||
                      $.invokeWindow(
                        "on_player_volumechange",
                        e,
                        this.params.vid
                      ),
                    d.sessionStorage)
                  ) {
                    var i =
                      JSON.parse(
                        d.sessionStorage.getItem("ccH5PlayerStorage")
                      ) || {};
                    (i.volume = 1 * e),
                      d.sessionStorage.setItem(
                        "ccH5PlayerStorage",
                        (0, G["default"])(i)
                      );
                  }
                },
                posVm: function (e) {
                  var t =
                    $.getMousePos(e).y -
                    d.pageYOffset -
                    $.getPos(this.vmBar).top;
                  if (t < 80 && 0 < t) {
                    (this.vmPro.style.top = t + "px"),
                      (this.vmPro.style.height = 80 - t + "px");
                    var i = ((80 - t) / 80).toFixed(1);
                    this.setVol(i),
                      0 == i
                        ? ((this.vmBtn.style.backgroundPosition =
                            "right center"),
                          (this.videoMute = !0))
                        : ((this.vmBtn.style.backgroundPosition =
                            "left center"),
                          (this.videoMute = !1));
                  }
                },
                dragVm: function () {
                  var t = this;
                  this.vmDragBtn.ontouchstart = this.vmDragBtn.onmousedown =
                    function (e) {
                      e.preventDefault(),
                        (t.parentEle.ontouchmove = t.parentEle.onmousemove =
                          function (e) {
                            e.preventDefault(), t.posVm(e);
                          }),
                        (t.parentEle.ontouchend = t.parentEle.onmouseup =
                          function () {
                            t.parentEle.ontouchend =
                              t.parentEle.onmouseup =
                              t.parentEle.ontouchmove =
                              t.parentEle.onmousemove =
                                null;
                          });
                    };
                },
                ctrlFadeIn: function () {
                  if (
                    !(
                      "true" === this.params.playReadyShowCtrol &&
                      this.triggerPlayTimes < 1
                    )
                  ) {
                    clearTimeout(this.hide_timer);
                    var e = this;
                    (this.ctrlBar.className = "ccH5FadeIn"),
                      this.ccPlayerMore.show(),
                      this.ccPlayerShare && this.ccPlayerShare.show(),
                      this.ccPlayerRightMenu && this.ccPlayerRightMenu.show(),
                      (this.hide_timer = setTimeout(function () {
                        (e.ctrlBar.className = "ccH5FadeOut"),
                          e.toggleHdHide(),
                          (e.isShowHDBtn = !1),
                          e.toggleSpHide(),
                          (e.isShowSpBtn = !1),
                          e.ccPlayerMore.hide(),
                          this.ccPlayerShare && this.ccPlayerShare.hide(),
                          this.ccPlayerRightMenu &&
                            this.ccPlayerRightMenu.hide();
                      }, 4e3));
                  }
                },
                ctrlFadeOut: function () {
                  ("true" === this.params.playReadyShowCtrol &&
                    this.triggerPlayTimes < 1) ||
                    (clearTimeout(this.hide_timer),
                    "true" !== this.params.ctrolShowing &&
                      (this.ctrlBar.className = "ccH5FadeOut"),
                    this.ccPlayerMore.hide(),
                    this.ccPlayerShare && this.ccPlayerShare.hide(),
                    this.ccPlayerRightMenu && this.ccPlayerRightMenu.hide());
                },
                toggleFade: function () {
                  var t = this;
                  $.addListener(this.parentEle, "mouseover", function (e) {
                    $.isQQ() &&
                      $.isIPhone() &&
                      "replaybtn" === e.target.id &&
                      (t.playerApi.videoPlay(),
                      setTimeout(function () {
                        t.playerApi.getVideostate() && t.playerApi.videoPlay();
                      }, 1e3)),
                      t.ctrlFadeIn();
                  }),
                    $.addListener(this.parentEle, "mousemove", function () {
                      t.ctrlFadeIn();
                    }),
                    $.addListener(this.parentEle, "mouseleave", function () {
                      t.ctrlFadeOut();
                    });
                },
                toggleCtrlBar: function () {
                  "ccH5FadeOut" == this.ctrlBar.className
                    ? this.ctrlFadeIn()
                    : this.ctrlFadeOut();
                },
                initProgressDragEvent: function (e) {
                  if ("0" !== this.params.progressbar_enable) {
                    var l = this,
                      c = 0,
                      d = 0;
                    (e.ontouchstart = e.onmousedown =
                      function (e) {
                        e.preventDefault();
                        var t = l.playerApi.getCurrentTime();
                        $.invokeWindow(
                          "on_player_start_drag",
                          parseInt(t),
                          l.params.vid
                        );
                        var o = !1;
                        (h.ontouchmove = h.onmousemove =
                          function (e) {
                            try {
                              e.preventDefault && e.preventDefault();
                            } catch (event) {
                              return void console.log(event);
                            }
                            var t = $.getMousePos(e, l.params),
                              i = $.getPos(l.progressBar),
                              s = t.x - i.left;
                            l.playerApi.getOrientation() && (s = t.y - i.top),
                              s <= 0
                                ? (s = 0)
                                : s >= l.ctrlWidth && (s = l.ctrlWidth),
                              (l.isOnDrag = !0);
                            var a = l.playerApi.getTotalTime();
                            (c = (s / l.ctrlWidth) * a),
                              (o = !0),
                              l.playerApi.hidePlayBtn();
                            var r = l.playerApi.getCurrentTime();
                            (d = r), c < 0 ? (c = 0) : a < c && (c = a);
                            var n = $.timeFormat(c) + "/" + $.timeFormat(a);
                            l.playerApi.showInfo(n),
                              (l.proCurrent.style.width = s + "px");
                          }),
                          (h.ontouchend = h.onmouseup =
                            function (e) {
                              (l.isOnDrag = !1),
                                (h.ontouchend =
                                  h.onmouseup =
                                  h.ontouchmove =
                                  h.onmousemove =
                                    null),
                                l.playerApi.hideInfo(),
                                ("true" == l.params.banDrag &&
                                  c >= l.playerApi.getLastVideoTime() &&
                                  c >= l.playerApi.getCurrPlayedMaxTime()) ||
                                  (l.playerApi.setCurrentTime(c),
                                  o && l.onDragProgressBar(d, c),
                                  (o = !1),
                                  l.params.controlBarNode ||
                                    setTimeout(function () {
                                      l.playerApi.videoPlay(!0);
                                    }, 100));
                            });
                      }),
                      (this.progressBar.ontouchstart =
                        this.progressBar.onclick =
                          function (e) {
                            if (
                              !(
                                (e.target.className &&
                                  -1 <
                                    e.target.className.indexOf(
                                      "ccVideoMarkBox"
                                    )) ||
                                -1 < e.target.className.indexOf("ccVideoMark")
                              )
                            ) {
                              d = l.playerApi.getCurrentTime();
                              var t = $.getMousePos(e, l.params),
                                i = $.getPos(l.progressBar),
                                s = t.x - i.left;
                              l.playerApi.getOrientation() && (s = t.y - i.top);
                              var a = l.playerApi.getTotalTime(),
                                r = (s / l.ctrlWidth) * a;
                              (l.ccPlayerExercise &&
                                l.ccPlayerExercise.checkExercise(r)) ||
                                ("true" == l.params.banDrag &&
                                  r >= l.playerApi.getLastVideoTime() &&
                                  r >= l.playerApi.getCurrPlayedMaxTime()) ||
                                ("true" !== l.params.banDrag &&
                                  l.proCurrent.style &&
                                  (l.proCurrent.style.width =
                                    (r / a) * l.ctrlWidth + "px"),
                                l.playerApi.setCurrentTime(r),
                                l.onDragProgressBar(d, r),
                                l.ccPlayerQA && l.ccPlayerQA.queryAnswer());
                            }
                          });
                  }
                },
                onDragProgressBar: function (e, t) {
                  var i = this.playerApi.getTotalTime();
                  t < 0 ? (t = 0) : i < t && (t = i),
                    parseInt(e) === parseInt(t) ||
                      parseInt(e) < 0 ||
                      $.invokeWindow(
                        "on_player_seek",
                        parseInt(e),
                        parseInt(t),
                        this.params.vid
                      );
                },
                initProgressBarMoveEvent: function () {
                  if (!("ontouchstart" in d)) {
                    var l = this,
                      c = [];
                    this.videoPlayData.videothumbnails &&
                      0 != this.videoPlayData.videothumbnails.length &&
                      (this.videoPlayData.videothumbnails.forEach(function (
                        e,
                        t
                      ) {
                        var i = new Image();
                        (e.url = e.url.replace(/http:/, "https:")),
                          (i.src = e.url);
                        var s = parseInt(e.url.match(/[0-9]+(?=[^0-9]*$)/)[0]);
                        c[s] = e;
                      }),
                      this.progressBar.addEventListener(
                        "mousemove",
                        function (e) {
                          var t = $.getMousePos(e).x - $.getPos(this).left,
                            i = 0;
                          (i = 0 !== c.length ? t - 80 : t - 25) < 0 && (i = 0),
                            i > this.clientWidth - 50 &&
                              (i = this.clientWidth - 50),
                            0 !== c.length &&
                              i > this.clientWidth - 160 &&
                              (i = this.clientWidth - 160),
                            (l.preViewTime.style.left = i + "px"),
                            (l.preViewTime.style.display = "block");
                          var s = t / l.ctrlWidth;
                          1 < s && (s = 1);
                          var a = s * l.playerApi.getTotalTime();
                          isNaN(a) && (a = 0);
                          var r = $.timeFormat(a);
                          if (0 !== c.length) {
                            (l.preViewTime.style.width = "160px"),
                              (l.preViewTime.style.paddingTop = "90px"),
                              (l.preViewTime.style.height = "auto");
                            var n = parseInt((a / 6) % 10),
                              o = parseInt(a / 6 / 10);
                            (l.preViewTime.style.backgroundImage =
                              "url('" + c[parseInt(a / 600)].url + "')"),
                              (l.preViewTime.style.backgroundPosition =
                                -160 * n + "px " + -90 * o + "px");
                          }
                          0 === a && (l.preViewTime.style.display = "none"),
                            (l.preViewTime.querySelector("p").innerText = r);
                        }
                      ),
                      this.progressBar.addEventListener(
                        "mouseout",
                        function (e) {
                          l.preViewTime.style.display = "none";
                        }
                      ));
                  }
                },
                hide: function () {
                  this.ctrlBar.style.display = "none";
                },
                show: function () {
                  this.ctrlBar.style.display = "block";
                },
                showMore: function () {
                  $.queryEle(".ccH5More", this.parentEle).style.className =
                    "ccH5More ccH5FadeIn";
                },
                hideMore: function () {
                  $.queryEle(".ccH5More", this.parentEle).style.className =
                    "ccH5More ccH5FadeOut";
                },
                resetSp: function (e) {
                  e ? (this.defaultRate = e) : (e = this.defaultRate),
                    (this.banSwitchSpeedCallback = !0);
                  for (var t = 0, i = 0; i < this.rates.length; i++)
                    if (e == this.rates[i]) {
                      t = i;
                      break;
                    }
                  this.spUL.getElementsByTagName("li")[t].click();
                },
                mobileMarks: function () {
                  var i = this,
                    e = this.playerApi.getTotalTime();
                  if (
                    this.videoPlayData.videomarks &&
                    !$.numberIsNaN(e) &&
                    e !== Infinity &&
                    !this.isCreateMobileMarks
                  ) {
                    var a = this.videoPlayData.videothumbnails || [];
                    a.forEach(function (e, t) {
                      var i = new Image();
                      (e.url = e.url.replace(/http:/, "https:")),
                        (i.src = e.url);
                      var s = parseInt(e.url.match(/[0-9]+(?=[^0-9]*$)/)[0]);
                      a[s] = e;
                    }),
                      (this.isCreateMobileMarks = !0);
                    for (
                      var t = this.videoPlayData.videomarks,
                        s = parseInt(e),
                        r = 0;
                      r < t.length;
                      r++
                    ) {
                      var n = t[r].marktime,
                        o = h.createElement("div");
                      (o.innerHTML = '<span class="ccVideoMark"></span>'),
                        (o.className = "ccVideoMarkBox"),
                        (o.id = n),
                        (o.style.left = ((n / s) * 100).toFixed(4) + "%"),
                        this.progressBar.appendChild(o);
                    }
                    for (
                      var l = $.queryEleAll(
                          ".ccVideoMarkBox",
                          this.progressBar
                        ),
                        c = function c(t) {
                          l[t].onclick = function (e) {
                            e.stopPropagation(),
                              i.setMarkPointStyle(t),
                              i.showMarkModel(t);
                          };
                        },
                        d = 0;
                      d < l.length;
                      d++
                    )
                      c(d);
                  }
                },
                showMarkModel: function (e) {
                  var t = this,
                    i = $.queryEle(".ccMarkModel", this.parentEle);
                  this.videoMarkIdx = e;
                  var s = this.videoPlayData.videomarks;
                  if (i) {
                    $.queryEle(".ccMarkViewPoint", this.ccMarkModel).innerHTML =
                      "看点" + (e + 1);
                    var a = $.queryEle(".ccMarkViewTime", this.ccMarkModel);
                    (a.innerHTML = $.timeFormat(s[e].marktime)),
                      a.setAttribute("data-t", s[e].marktime),
                      ($.queryEle(
                        ".ccMarkViewDesc",
                        this.ccMarkModel
                      ).innerHTML = s[e].markdesc),
                      (this.ccMarkModel.style.display = "block");
                  } else this.createMarkModel(e, s[e].marktime, s[e].markdesc);
                  var r = this.videoPlayData.videothumbnails || [];
                  if (0 !== r.length) {
                    var n = s[e].marktime;
                    isNaN(n) && (n = 0);
                    var o = parseInt((n / 6) % 10),
                      l = parseInt(n / 6 / 10);
                    r[parseInt(n / 600)] &&
                      ((this.ccMarkViewImg.style.backgroundImage =
                        "url('" + r[parseInt(n / 600)].url + "')"),
                      (this.ccMarkViewImg.style.backgroundPosition =
                        -160 * o + "px " + -90 * l + "px"));
                  }
                  this.setMarkBtnStyle(e),
                    this.removeMarkModel &&
                      (clearTimeout(this.removeMarkModel),
                      (this.removeMarkModel = null)),
                    (this.removeMarkModel = setTimeout(function () {
                      var e = $.queryEle(".ccMarkModel", t.parentEle);
                      e &&
                        "none" !== e.style.display &&
                        (t.hideMarkModel(),
                        clearTimeout(t.removeMarkModel),
                        (t.removeMarkModel = null));
                    }, 5e3));
                },
                createMarkModel: function (e, t, i) {
                  var s = this,
                    a = h.createElement("div");
                  (a.className = "ccMarkModel"),
                    (a.innerHTML =
                      '<div class="ccMarkModelBox"><div class="ccOptBtn prevMark"></div><div class="ccMarkViewBox"><div class="ccMarkViewImg" style="display:none;width:160px;height:90px;margin:0 auto;"></div><div class="ccMarkView"><div class="ccMarkViewPoint">看点' +
                      (e + 1) +
                      '</div><div class="ccMarkViewTime" data-t="' +
                      t +
                      '">' +
                      $.timeFormat(t) +
                      '</div><div class="ccMarkViewDesc">' +
                      i +
                      '</div></div></div><div class="ccOptBtn nextMark"></div>'),
                    this.parentEle.appendChild(a),
                    (this.ccMarkModel = $.queryEle(
                      ".ccMarkModel",
                      this.parentEle
                    )),
                    (this.ccMarkViewBox = $.queryEle(
                      ".ccMarkViewBox",
                      this.parentEle
                    )),
                    (this.prevMark = $.queryEle(".prevMark", this.parentEle)),
                    (this.nextMark = $.queryEle(".nextMark", this.parentEle)),
                    (this.ccMarkViewImg = $.queryEle(
                      ".ccMarkViewImg",
                      this.parentEle
                    )),
                    (this.ccMarkModel.style.zIndex = 2e3),
                    0 !== (this.videoPlayData.videothumbnails || []).length &&
                      (this.ccMarkViewImg.style.display = "block"),
                    (this.ccMarkModel.onclick = function (e) {
                      "ccMarkModel" === e.target.className && s.hideMarkModel();
                    }),
                    (this.prevMark.onclick = function (e) {
                      if (!(s.videoMarkIdx <= 0)) {
                        var t = s.videoMarkIdx;
                        t--, s.setMarkBtnStyle(t), s.showMarkModel(t);
                      }
                    });
                  var r = this.videoPlayData.videomarks;
                  (this.nextMark.onclick = function () {
                    if (!(s.videoMarkIdx >= r.length - 1)) {
                      var e = s.videoMarkIdx;
                      e++, s.setMarkBtnStyle(e), s.showMarkModel(e);
                    }
                  }),
                    (this.ccMarkViewBox.onclick = function () {
                      var e =
                        $.queryEle(
                          ".ccMarkViewTime",
                          s.ccMarkModel
                        ).getAttribute("data-t") || 0;
                      s.playerApi.setCurrentTime(e),
                        s.playerApi.getVideostate() && s.playerApi.videoPlay(),
                        s.hideMarkModel();
                    });
                },
                setMarkPointStyle: function (e) {
                  for (
                    var t = $.queryEleAll(".ccVideoMarkBox", this.progressBar),
                      i = 0;
                    i < t.length;
                    i++
                  )
                    $.queryEle(".ccVideoMark", t[i]).classList.remove("active");
                  $.queryEle(".ccVideoMark", t[e]).classList.add("active");
                },
                hideMarkModel: function () {
                  this.ccMarkModel.style.display = "none";
                  var e = $.queryEleAll(".ccVideoMarkBox", this.progressBar)[
                    this.videoMarkIdx
                  ];
                  e && $.queryEle(".ccVideoMark", e).classList.remove("active");
                },
                setMarkBtnStyle: function (e) {
                  var t = this.videoPlayData.videomarks;
                  0 === e
                    ? this.prevMark.classList.add("disabled")
                    : this.prevMark.classList.remove("disabled"),
                    e === t.length - 1
                      ? this.nextMark.classList.add("disabled")
                      : this.nextMark.classList.remove("disabled"),
                    this.setMarkPointStyle(e);
                },
                hightlightsInit: function () {
                  "mark" === this.params.previewMode &&
                    delete this.videoPlayData.exercises;
                  var e = this.videoPlayData,
                    t = this.playerApi.getTotalTime();
                  if (e.exercises === undefined || $.isMoble() || $.isIPad()) {
                    if (e.videomarks)
                      for (i = 0; i < e.videomarks.length; i++) {
                        (a = e.videomarks[i].marktime),
                          (r = e.videomarks[i].markdesc);
                        this.createHightlights(a, r),
                          (s = parseInt((a / t) * this.ctrlWidth)) < 60 &&
                            this.parentEle
                              .getElementsByClassName("ccHightlightsTips")
                              [i].classList.add("hov"),
                          s > this.ctrlWidth - 60 &&
                            this.parentEle
                              .getElementsByClassName("ccHightlightsTips")
                              [i].classList.add("lasthov");
                      }
                  } else
                    for (var i = 0; i < e.exercises.length; i++) {
                      var s,
                        a = e.exercises[i].showTime,
                        r = e.exercises[i].title;
                      this.createHightlights(a, r),
                        (s = parseInt((a / t) * this.ctrlWidth)) < 60 &&
                          this.parentEle
                            .getElementsByClassName("ccHightlightsTips")
                            [i].classList.add("hov"),
                        s > this.ctrlWidth - 60 &&
                          this.parentEle
                            .getElementsByClassName("ccHightlightsTips")
                            [i].classList.add("lasthov");
                    }
                },
                createHightlights: function (e, t) {
                  var i = this.videoPlayData,
                    s = h.createElement("span"),
                    a = this.playerApi.getTotalTime(),
                    r = parseInt(a),
                    n = this;
                  (s.className = "ccHightlights"),
                    (s.style.left = ((e / r) * 100).toFixed(4) + "%"),
                    i.videothumbnail &&
                    0 !== i.videothumbnail.length &&
                    i.exercises === undefined
                      ? (s.addEventListener("mouseover", function () {
                          n.preViewTimeTips.innerText = t;
                        }),
                        s.addEventListener("mouseout", function () {
                          n.preViewTimeTips.innerText = "";
                        }))
                      : (s.innerHTML =
                          "<span class='ccHightlightsTips'>" + t + "</span>"),
                    this.progressBar.appendChild(s);
                },
                updateLoadBar: function (e, t) {
                  var i = Math.round((e / t) * this.ctrlWidth);
                  "240837" == this.videoPlayData.uid
                    ? (this.loadBar.style.width = i + 12 + "px")
                    : (this.loadBar.style.width = i + "px");
                },
                autoFitProgressBar: function () {
                  var e = this.ctrlWidth;
                  $.isAndroid() || $.isIPhone(this.params)
                    ? ((this.ctrlWidth = this.parentEle.clientWidth - 247),
                      "240837" == this.videoPlayData.uid &&
                        (this.ctrlWidth = this.parentEle.clientWidth - 214),
                      $.isAudioPlay(this.params, this.videoPlayData) &&
                        ("none" == this.hdBtn.style.display
                          ? ((this.progressBar.style.right = "85px"),
                            (this.ctrlWidth = this.parentEle.clientWidth - 204))
                          : ((this.progressBar.style.right = "138px"),
                            (this.ctrlWidth =
                              this.parentEle.clientWidth - 257))),
                      "true" === this.params.customizedMobile &&
                        ((this.progressBar.style.right = "92px"),
                        (this.ctrlWidth = this.parentEle.clientWidth - 184)))
                    : $.isIPad()
                    ? ((this.ctrlWidth = this.parentEle.clientWidth - 372),
                      "231986" == this.videoPlayData.uid &&
                        (this.ctrlWidth = this.parentEle.clientWidth - 220))
                    : (this.ctrlWidth = this.parentEle.clientWidth),
                    e != this.ctrlWidth &&
                      (this.proCurrent.style.width =
                        (this.playerApi.getCurrentTime() /
                          this.playerApi.getTotalTime()) *
                          this.ctrlWidth +
                        "px");
                },
                getQualities: function () {
                  var t = [];
                  return (
                    (this.playerApi.isVideoPlay()
                      ? this.videoPlayData.videoCopies
                      : this.videoPlayData.audioCopies
                    ).forEach(function (e) {
                      e.quality &&
                        e.desp &&
                        t.push({ value: e.quality, label: e.desp });
                    }),
                    t
                  );
                },
                setQuality: function (i) {
                  var s = 0;
                  (this.playerApi.isVideoPlay()
                    ? this.videoPlayData.videoCopies
                    : this.videoPlayData.audioCopies
                  ).some(function (e, t) {
                    return (s = t), e.quality == i;
                  })
                    ? this.hdUL.querySelectorAll("li")[s].click()
                    : console.error("设置清晰度的值不合法");
                },
                setVolume: function (e, t) {
                  !/^\d+(\.\d+)?$/.test(e) || 1 < e || e < 0
                    ? console.error("设置音量取值范围为：[0-1]")
                    : (0 == (e = (1 * e).toFixed(2))
                        ? ((this.vmBtn.style.backgroundPosition =
                            "right center"),
                          (this.videoMute = !0))
                        : ((this.vmBtn.style.backgroundPosition =
                            "left center"),
                          (this.videoMute = !1)),
                      (this.vmPro.style.top = 80 * (1 - e) + "px"),
                      (this.vmPro.style.height = 80 * e + "px"),
                      this.setVol(e, t));
                },
                switchPageFullsBtnStyle: function (e) {
                  !0 === e
                    ? ((this.isClickExitPageFulls = !1),
                      this.params.showPageFullScreenBtn + "" != "false" &&
                        ((this.pageFullsBtn.style.display = "none"),
                        (this.exitPageFullsBtn.style.display = "block")))
                    : ((this.isClickExitPageFulls = !0),
                      this.params.showPageFullScreenBtn + "" != "false" &&
                        ((this.pageFullsBtn.style.display = "block"),
                        (this.exitPageFullsBtn.style.display = "none")));
                },
                switchFullsBtnStyle: function (e) {
                  !0 === e
                    ? ((this.isClickExitFulls = !1),
                      this.params.showFullScreenBtn + "" != "false" &&
                        ((this.fullsBtn.style.display = "none"),
                        (this.exitFullsBtn.style.display = "block")))
                    : ((this.isClickExitFulls = !0),
                      this.params.showFullScreenBtn + "" != "false" &&
                        ((this.fullsBtn.style.display = "block"),
                        (this.exitFullsBtn.style.display = "none")));
                },
                setVideoMarks: function (e) {
                  if (!($.isIPad() || $.isIPhone() || $.isAndroid())) {
                    e = e || [];
                    for (var t = 0; t < e.length; t++) {
                      var i = e[t];
                      i.hasOwnProperty("mark_desc") &&
                        !i.hasOwnProperty("markdesc") &&
                        ((i.markdesc = i.mark_desc),
                        (i.marktime = i.mark_time),
                        delete i.mark_desc,
                        delete i.mark_time);
                    }
                    (this.videoPlayData.videomarks = e),
                      delete this.videoPlayData.exercises;
                    for (
                      var s = $.queryEleAll(".ccHightlights", this.parentEle),
                        a = 0;
                      a < s.length;
                      a++
                    ) {
                      var r = s[a];
                      r.parentNode.removeChild(r);
                    }
                    this.hightlightsInit();
                  }
                },
                showMarkDesc: function (e) {
                  for (
                    var t = this.playerApi.getTotalTime(),
                      i = ((e / parseInt(t)) * 100).toFixed(4),
                      s = $.queryEleAll(".ccHightlights", this.parentEle),
                      a = 0;
                    a < s.length;
                    a++
                  ) {
                    var r = s[a],
                      n = r.style.left.replace(/%$/, "");
                    if (1 * n == i || n == i.replace(/0$/, "")) {
                      (r.style.display = "block"),
                        ($.queryEle("span", r).style.display = "block");
                      var o = setTimeout(function () {
                        (r.style.display = null),
                          ($.queryEle("span", r).style.display = null),
                          clearTimeout(o);
                      }, 1500);
                      return;
                    }
                  }
                },
                setCutSection: function (e) {
                  e = e || [];
                  var t = $.queryEle(".ccCutBox", this.parentEle);
                  t && t.parentNode.removeChild(t);
                  var i = h.createElement("div");
                  this.progressBar.appendChild(i),
                    (i.outerHTML =
                      '<div class="ccCutBox" style="height:10px;position:absolute;bottom:200%;left:0;right:0;cursor:default;"></div>');
                  for (var s = 0; s < e.length; s++) {
                    var a = e[s];
                    this.createCutLine(a.start, a.end);
                  }
                },
                createCutLine: function (e, t) {
                  this.lineBox = $.queryEle(".ccCutBox", this.parentEle);
                  var i = h.createElement("div"),
                    s = this.playerApi.getTotalTime(),
                    a = parseInt(s),
                    r =
                      '<div style="height:3px;position:absolute;bottom:3px;background:#ffcc01;left:' +
                      ((e / a) * 100 + "%") +
                      ";width:" +
                      (((t - e) / a) * 100 + "%") +
                      '"><div style="position:absolute;width:3px;height:10px;left:0px;top:-100%;background:#ffcc01;border-radius:2px"></div><div style="position:absolute;width:3px;height:10px;right:0px;top:-100%;background:#ffcc01;border-radius:2px"></div></div>';
                  this.lineBox.appendChild(i), (i.outerHTML = r);
                },
                showNoteBtn: function () {
                  this.noteBtn && (this.noteBtn.style.display = "block");
                },
                hasSettingBtn: function () {
                  return (
                    !!($.isIPad() || $.isIPhone() || $.isAndroid()) ||
                    (this.setting &&
                      "none" !== $.getStyleValue(this.setting, "display"))
                  );
                },
                hasFullPageBtn: function () {
                  return (
                    this.params.showPageFullScreenBtn + "" == "true" &&
                    !$.isIPad() &&
                    !$.isMoble()
                  );
                },
                hasFullBtn: function () {
                  return (
                    this.params.showFullScreenBtn + "" != "false" ||
                    $.isIPad() ||
                    $.isMoble()
                  );
                },
                hasHdBtn: function () {
                  return (
                    !!($.isIPad() || $.isIPhone() || $.isAndroid()) ||
                    (this.hdBtn &&
                      "none" !== $.getStyleValue(this.hdBtn, "display"))
                  );
                },
                checkAudioPlay: function () {
                  return (
                    $.isAudioPlay(this.params, this.videoPlayData) &&
                    !$.isIPad() &&
                    !$.isMoble()
                  );
                },
                showPlayBtn: function () {
                  this.toggleBtn.className = "ccH5TogglePlay ccToggleBtn";
                },
              }),
                (d.CCH5PlayerCtrol = function (e) {
                  var o = new t(e);
                  return {
                    init: function () {
                      o.init();
                    },
                    hide: function () {
                      o.hide();
                    },
                    show: function () {
                      o.show();
                    },
                    updateLoadBar: function (e, t) {
                      o.updateLoadBar(e, t);
                    },
                    toggleCtrlBar: function () {
                      o.toggleCtrlBar();
                    },
                    exitFulls: function () {
                      o.exitFullsBtn.click();
                    },
                    resetSp: function (e) {
                      o.resetSp(e);
                    },
                    getQualities: function () {
                      return o.getQualities();
                    },
                    setQuality: function (e) {
                      o.setQuality(e);
                    },
                    setVolume: function (e) {
                      o.setVolume(e);
                    },
                    switchPageFullsBtnStyle: function (e) {
                      o.switchPageFullsBtnStyle(e);
                    },
                    switchFullsBtnStyle: function (e) {
                      o.switchFullsBtnStyle(e);
                    },
                    autoFitProgressBar: function () {
                      o.autoFitProgressBar();
                    },
                    getCtrolDom: function () {
                      return {
                        fullsBtn: o.fullsBtn,
                        progressBar: o.progressBar,
                      };
                    },
                    setVideoMarks: function (e) {
                      o.setVideoMarks(e);
                    },
                    showMarkDesc: function (e) {
                      o.showMarkDesc(e);
                    },
                    setCutSection: function (e) {
                      o.setCutSection(e);
                    },
                    showKnowledgeBtn: function (e) {
                      o.showKnowledgeBtn(e);
                    },
                    hideKnowledgeBtn: function () {
                      o.hideKnowledgeBtn();
                    },
                    showKnowledgePart: function (e, t) {
                      o.showKnowledgePart(e, t);
                    },
                    hideKnowledgePart: function () {
                      o.hideKnowledgePart();
                    },
                    showNoteBtn: function () {
                      o.showNoteBtn();
                    },
                    destroy: function () {
                      var e = !0,
                        t = !1,
                        i = undefined;
                      try {
                        for (
                          var s, a = (0, X["default"])(o.intervals);
                          !(e = (s = a.next()).done);
                          e = !0
                        ) {
                          var r = s.value;
                          d.clearInterval(r);
                        }
                      } catch (n) {
                        (t = !0), (i = n);
                      } finally {
                        try {
                          !e && a["return"] && a["return"]();
                        } finally {
                          if (t) throw i;
                        }
                      }
                    },
                    showPlayBtn: function () {
                      o.showPlayBtn();
                    },
                    initPlayRateEvent: function () {
                      o.initPlayRateEvent();
                    },
                  };
                });
            }
          })(window),
          (u = window),
          (y = u.document),
          (m = function m(e, t, i, s, a) {
            (this.playerApi = e),
              (this.params = t),
              (this.videoPlayData = i),
              (this.parentEle = s),
              (this.zIndex = a);
          }),
          (m.prototype = {
            init: function () {
              this.createView(), this.initData(), this.registerVideoListener();
            },
            createView: function () {
              var e = y.createElement("div");
              if (
                (this.parentEle.appendChild(e),
                (e.outerHTML =
                  "<div id='ccH5classTestContainer' class='ccH5classTestContainer'><div id='ccH5classTest'></div><div class='outerBtnsBox'></div></div>"),
                (this.classTestOuterBox = $.queryEle(
                  "#ccH5classTestContainer",
                  this.parentEle
                )),
                (this.classTestOuterBox.style.zIndex = this.zIndex),
                !(
                  $.isAndroid() ||
                  $.isIPhone(this.params) ||
                  $.isIPad() ||
                  $.isWindowsPhoneOS()
                ))
              ) {
                var t =
                    this.parentEle.offsetHeight / this.parentEle.offsetWidth,
                  i = (0.8 * this.parentEle.offsetWidth).toFixed(2);
                (this.classTestOuterBox.style.width = i + "px"),
                  (this.classTestOuterBox.style.height = i * t + "px");
              }
            },
            initData: function () {
              (this.ccMask = $.queryEle("#ccMask", this.parentEle)),
                (this.classTestContainer = $.queryEle(
                  "#ccH5classTest",
                  this.parentEle
                )),
                (this.classTestExercisesIdx = 0),
                (this.classTestQuestionIdx = 0),
                (this.countPrevious = 0),
                (this.classTestAnswers = {});
            },
            registerVideoListener: function () {
              var d = this,
                h = this.videoPlayData;
              this.playerApi.registerVideoEvent("timeupdate", function () {
                var e = h.exercises;
                if (
                  !(
                    e == undefined ||
                    (e && e.length < 1) ||
                    d.classTestExercisesIdx >= e.length
                  )
                ) {
                  var t = e[d.classTestExercisesIdx],
                    i = d.playerApi.getCurrentTime(),
                    s = parseInt(i),
                    a = t.showTime;
                  if ("block" !== d.ccMask.style.display && a <= s) {
                    var r = t.questions,
                      n = d.classTestAnswers[d.classTestExercisesIdx],
                      o = r ? (0, K["default"])(r) : [],
                      l = n ? (0, K["default"])(n) : [];
                    if (0 < l.length && l.length < o.length) {
                      var c = 1 * l[l.length - 1];
                      if (1 + c >= o.length) return;
                      return (
                        ($.queryEleAll(
                          ".ccTestContainer",
                          d.classTestContainer
                        )[d.classTestQuestionIdx].style.display = "none"),
                        (d.classTestQuestionIdx = 1 + c),
                        d.playerApi.videoPause(),
                        d.updateCurrExerciseProgress(),
                        ($.queryEleAll(
                          ".ccTestContainer",
                          d.classTestContainer
                        )[d.classTestQuestionIdx].style.display = "block"),
                        (d.classTestOuterBox.style.display = "block"),
                        (d.ccMask.style.display = "block"),
                        void setTimeout(function () {
                          d.setListToBottom();
                        }, 300)
                      );
                    }
                    d.playerApi.videoPause(),
                      d.createExercises(
                        h.exercises[d.classTestExercisesIdx],
                        d
                      ),
                      (d.classTestOuterBox.style.display = "block");
                  }
                }
              });
            },
            createExercises: function (r, n) {
              (n.ccMask.style.display = "block"),
                n.playerApi.getOrientation() && n.playerApi.exitFullScreen(),
                this.changeTestStyle("small");
              for (
                var e =
                    '<div class="ccTestHeader"><div class="ccTestProgressBg"><div class="ccTestProgress"></div></div><div class="ccTestHeaderTitle"><div style="float:left;max-height:50px;overflow:hidden;max-width:80%;display:inline-block;">' +
                    r.title +
                    '</div><span><i class="currQuestionNum">1</i>/<i class="questionTotal"></i></span></div>' +
                    (1 === r.isJump
                      ? '<div class="ccTestJumpOverBtn"></div>'
                      : "") +
                    "</div>",
                  t = (0, K["default"])(r.questions).length,
                  i = 0;
                i < t;
                i++
              )
                e += n.createQuestions(r.questions[i]);
              (e += '<div class="ccTestContainer"></div>'),
                (n.classTestContainer.innerHTML = e),
                ($.queryEle(".questionTotal", n.classTestContainer).innerHTML =
                  t),
                ($.queryEleAll(".ccTestContainer", n.classTestContainer)[
                  n.classTestQuestionIdx
                ].style.display = "block"),
                (n.ccTestProgress = $.queryEle(
                  ".ccTestProgress",
                  n.classTestContainer
                )),
                n.updateCurrExerciseProgress(),
                setTimeout(function () {
                  n.setListToBottom();
                }, 300),
                (n.classTestContainer.onclick = function (e) {
                  var t =
                      this.querySelectorAll(".ccTestContainer")[
                        n.classTestQuestionIdx
                      ],
                    i = $.queryEle("#submit", t);
                  "label" === e.target.nodeName.toLowerCase() &&
                    (0 ===
                    n.videoPlayData.exercises[n.classTestExercisesIdx]
                      .questions[n.classTestQuestionIdx].type
                      ? (t.querySelectorAll("label").forEach(function (e) {
                          e.className = "";
                        }),
                        (e.target.className = "selected"))
                      : "selected" === e.target.className
                      ? (e.target.className = "")
                      : (e.target.className = "selected"),
                    setTimeout(function () {
                      n.checkSelected(t, n);
                    }, 200));
                  if (
                    ("text" === e.target.type &&
                      ((i.className = "submit"),
                      (i.onclick = function (e) {
                        e.stopPropagation(), n.submitBtnEvent(t, n);
                      })),
                    1 === r.isJump &&
                      "ccTestJumpOverBtn" === e.target.className)
                  ) {
                    n.continuePlay();
                    var s = $.queryEle("#previous", n.classTestOuterBox),
                      a = $.queryEle("#next", n.classTestOuterBox);
                    s && (s.onclick = null),
                      a && (a.onclick = null),
                      ($.queryEle(
                        ".outerBtnsBox",
                        n.classTestOuterBox
                      ).innerHTML = "");
                  }
                });
            },
            createQuestions: function (e) {
              var i = "";
              return (
                0 === e.type
                  ? e.answers.forEach(function (e, t) {
                      i +=
                        '<label><input type="radio" name="radio" style="visibility: hidden;">' +
                        e.content +
                        "</label>";
                    })
                  : 1 === e.type
                  ? e.answers.forEach(function (e, t) {
                      i +=
                        '<label><input type="checkbox" name="checkbox" style="visibility: hidden;">' +
                        e.content +
                        "</label>";
                    })
                  : (i =
                      '\t\t<div class="front">' +
                      e.content +
                      '</div>\t\t<input type="text">\t\t<div class="end">' +
                      e.content2 +
                      "</div>"),
                '<div class="ccTestContainer"><div class=\'ccTestOuter\'>\t<div class="ccTestBox">\t\t<div class="title">\t\t\t<span class="testType">' +
                  ["单选", "多选", "填空"][e.type] +
                  "</span>\t\t\t<p>" +
                  (2 === e.type ? "" : e.content) +
                  '</p>\t\t</div>\t\t<div class="selectesBox ' +
                  (2 === e.type ? "blank" : 1 === e.type ? "checkBox" : "") +
                  '" >\t\t\t<div class="testMask"></div>' +
                  i +
                  '\t\t</div>\t</div> <div class="ccTestanswerOuter">\t    <div class="ccTestanswerBox">\t    </div>\t</div></div>\t<div class="ccTestBtnsBox">\t\t<button class="disabled" id="submit">提交</button>\t</div></div>'
              );
            },
            checkSelected: function (t, i) {
              var e = t.querySelector("#submit");
              Array.prototype.slice
                .call(t.querySelectorAll("input"))
                .some(function (e) {
                  return e.checked;
                })
                ? ((e.className = "submit"),
                  (e.onclick = function (e) {
                    e.stopPropagation(), i.submitBtnEvent(t, i);
                  }))
                : ((e.className = "disabled"), (e.onclick = null));
            },
            submitBtnEvent: function (e, s) {
              var t = this.videoPlayData,
                i = e.querySelectorAll("label"),
                a =
                  t.exercises[s.classTestExercisesIdx].questions[
                    s.classTestQuestionIdx
                  ],
                r = a.type,
                n = a.answers,
                o = !1,
                l = "",
                c = t.exercises[s.classTestExercisesIdx].isPlay,
                d = t.exercises[s.classTestExercisesIdx].backSecond;
              if ((0 < a.backSecond && (d = a.backSecond), 2 !== r))
                i.forEach(function (e, t) {
                  "selected" === e.className
                    ? (n[t].right
                        ? (e.className = "right")
                        : ((e.className = "wrong"), (o = !0)),
                      (l += String.fromCharCode(65 + t) + " "))
                    : ((e.className = "unselected"),
                      n[t].right && ((e.className = "right"), (o = !0)));
                });
              else {
                var h = e.querySelector("input"),
                  u = h.value.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
                u === n[0].content
                  ? (h.className = "correct")
                  : ((h.className = "wrong"), (o = !0)),
                  (l = u);
              }
              ($.queryEle(".testMask", e).style.display = "block"),
                s.classTestAnswers[s.classTestExercisesIdx] === undefined &&
                  (s.classTestAnswers[s.classTestExercisesIdx] = {});
              var p = s.classTestAnswers[s.classTestExercisesIdx];
              (p[s.classTestQuestionIdx] = { questionId: null, isRight: null }),
                (p[s.classTestQuestionIdx].isRight = !0 === o ? 0 : 1),
                (p[s.classTestQuestionIdx].questionId = a.id);
              var y = $.queryEle(".ccTestanswerBox", e),
                m = "",
                v = $.queryEle(".outerBtnsBox", s.classTestOuterBox);
              (m =
                2 !== r
                  ? n.reduce(function (e, t, i) {
                      return t.right ? e + String.fromCharCode(65 + i) : e;
                    }, m)
                  : n[0].content),
                (y.style.display = "block"),
                (y.innerHTML =
                  ' <div class="row">\t<span>答案:</span>\t<div class="answerBox">\t\t<p>你的答案：<i class="yourAns">' +
                  l +
                  '</i></p>\t\t<p>正确答案：<i class="right">' +
                  m +
                  '</i></p>\t</div> </div> <p class="details"><span>解析：</span>' +
                  a.explainInfo +
                  "</p>"),
                (e.querySelector(".ccTestBtnsBox").innerHTML = ""),
                (v.innerHTML =
                  '<button  id="previous">上一题</button><button  id="next">下一题</button>' +
                  (0 < d ? '<button  id="backViewBtn">回看</button>' : ""));
              var f = $.queryEle("#previous", s.classTestOuterBox),
                g = $.queryEle("#next", s.classTestOuterBox),
                P = $.queryEle("#backViewBtn", s.classTestOuterBox);
              1 !== p[s.classTestQuestionIdx].isRight &&
                1 !== c &&
                (g.style.display = "none"),
                0 <= s.classTestQuestionIdx - 1
                  ? (f.onclick = function (e) {
                      e.stopPropagation(),
                        s.classTestContainer
                          .querySelectorAll(".ccTestContainer")
                          .forEach(function (e) {
                            e.style.display = "none";
                          }),
                        s.classTestQuestionIdx--,
                        0 === s.classTestQuestionIdx &&
                          (f.className = "disabled"),
                        s.classTestQuestionIdx < 0
                          ? (s.classTestQuestionIdx = 0)
                          : s.countPrevious++,
                        (g.style.display = "inline-block"),
                        ($.queryEleAll(
                          ".ccTestContainer",
                          s.classTestContainer
                        )[s.classTestQuestionIdx].style.display = "block"),
                        s.updateCurrExerciseProgress(),
                        s.classTestOuterBox.scrollTo !== undefined
                          ? s.classTestOuterBox.scrollTo(0, 0)
                          : (s.classTestOuterBox.scrollTop = 0),
                        s.classTestQuestionIdx >= A - 1
                          ? (g.innerText = "完成")
                          : (g.innerText = "下一题");
                    })
                  : (f.className = "disabled");
              var A = (0, K["default"])(
                t.exercises[s.classTestExercisesIdx].questions
              ).length;
              (g.onclick = function (e) {
                if (
                  (p[s.classTestQuestionIdx + 1] &&
                    p[s.classTestQuestionIdx + 1].questionId) ||
                  1 === p[s.classTestQuestionIdx].isRight ||
                  1 === c
                ) {
                  e.stopPropagation(),
                    s.classTestContainer
                      .querySelectorAll(".ccTestContainer")
                      .forEach(function (e) {
                        e.style.display = "none";
                      }),
                    s.classTestQuestionIdx++,
                    --s.countPrevious < 0 &&
                      ((v.innerHTML = ""),
                      (g.onclick = null),
                      (f.onclick = null),
                      (s.countPrevious = 0));
                  var t =
                      p[s.classTestQuestionIdx + 1] &&
                      p[s.classTestQuestionIdx + 1].questionId,
                    i = p[s.classTestQuestionIdx];
                  i &&
                    i.questionId &&
                    1 !== i.isRight &&
                    1 !== c &&
                    !t &&
                    (g.style.display = "none"),
                    (f.className = ""),
                    ($.queryEleAll(".ccTestContainer", s.classTestContainer)[
                      s.classTestQuestionIdx
                    ].style.display = "block"),
                    setTimeout(function () {
                      s.setListToBottom();
                    }, 300),
                    s.updateCurrExerciseProgress(),
                    s.classTestQuestionIdx === A && s.createFinal(s),
                    s.classTestOuterBox.scrollTo !== undefined
                      ? s.classTestOuterBox.scrollTo(0, 0)
                      : (s.classTestOuterBox.scrollTop = 0),
                    s.classTestQuestionIdx == A - 1
                      ? (g.innerText = "完成")
                      : (g.innerText = "下一题"),
                    s.classTestQuestionIdx == A &&
                      ((v.innerHTML = ""),
                      (g.onclick = null),
                      (f.onclick = null));
                }
              }),
                s.classTestQuestionIdx == A - 1
                  ? (g.innerText = "完成")
                  : (g.innerText = "下一题"),
                0 < d &&
                  (P.onclick = function () {
                    s.playerApi.setCurrentTime(d),
                      s.continuePlay(A),
                      ($.queryEle(
                        ".outerBtnsBox",
                        s.classTestOuterBox
                      ).innerHTML = "");
                  }),
                s.classTestOuterBox.scrollTo !== undefined
                  ? s.classTestOuterBox.scrollTo(0, 1e4)
                  : (s.classTestOuterBox.scrollTop = 1e4);
            },
            createFinal: function (a) {
              for (
                var e = a.classTestAnswers[a.classTestExercisesIdx],
                  t = "",
                  i = (0, K["default"])(e).length,
                  s = 0,
                  r = [],
                  n = 0;
                n < i;
                n++
              )
                r.push(e[n]),
                  1 === e[n].isRight && s++,
                  (t +=
                    '<div class="row" id="q' +
                    e[n].questionId +
                    '"><div class="tipsBox"><p>统计数据加载中...</p><div class="triangle"></div></div><span>第' +
                    (n + 1) +
                    '题</span><div class="progressBox"><div class="' +
                    (1 === e[n].isRight ? "right" : "wrong") +
                    '">统计数据加载中...</div></div></div>');
              a.classTestContainer.querySelectorAll(".ccTestContainer")[
                a.classTestQuestionIdx
              ].innerHTML =
                '\t\t<div class="finalBox">\t\t     <h3>你答对了<i class="right">' +
                s +
                "</i>题，共<span>" +
                i +
                "</span>题</h3>" +
                t +
                '\t\t</div>\t<div class="ccTestBtnsBox">\t    <button  class="continue">继续学习</button>  </div>';
              var o = a.videoPlayData.exercises[a.classTestExercisesIdx].id,
                l = (0, G["default"])(r);
              $.ccJsonp({
                url: "https://spark.bokecc.com/servlet/exercise/collect",
                data: { exerciseId: o, questionMes: l },
                success: function (e) {
                  var t = a.classTestContainer.querySelector(".finalBox"),
                    i = null,
                    s = null;
                  if ("OK" !== e.result) throw "发送数据失败参考 " + e.error;
                  e.accuracy.forEach(function (e) {
                    (i = t.querySelector("#q" + e.questionId)),
                      "right" ===
                      (s = i.querySelector(".progressBox div")).className
                        ? ((i.querySelector(".tipsBox p").innerText =
                            "居然有" + e.accuracy + "%的人答对了"),
                          (s.style.width = e.accuracy + "%"),
                          (s.innerText = e.accuracy + "%"))
                        : ((i.querySelector(".tipsBox p").innerText =
                            "居然有" + (100 - e.accuracy) + "%的人答错了"),
                          (s.style.width = 100 - e.accuracy + "%"),
                          (s.innerText = 100 - e.accuracy + "%"));
                  });
                },
                error: function () {},
              }),
                (a.classTestContainer.querySelector(
                  ".ccTestBtnsBox .continue"
                ).onclick = function (e) {
                  e.stopPropagation(), a.continuePlay();
                });
            },
            createClassTestMask: function (e) {
              var t = e,
                i = $.queryEle("#ccMask", t.parentEle);
              (i.innerHTML =
                '<div class="box">\t<span>&times;</span>\t<p>请先完成练习</p>\t<div class="btns">\t\t<button id="back">返回听课</button>\t\t<button id="continue">去做练习</button>\t</div> </div>'),
                (i.style.display = "block");
              var s = $.queryEle("span", i),
                a = $.queryEle("#back", i),
                r = $.queryEle("#continue", i);
              function n() {
                (i.style.display = "none"),
                  ($.isMoble() || $.isIPad()) &&
                    ((i.innerHTML = ""), (i.style.display = "block"));
              }
              (s.onclick = n),
                (a.onclick = n),
                (r.onclick = function () {
                  n(),
                    t.playerApi.videoPause(),
                    t.createExercises(
                      t.videoPlayData.exercises[t.classTestExercisesIdx],
                      t
                    ),
                    (t.classTestOuterBox.style.display = "block"),
                    (t.classTestQuestionIdx = 0);
                });
            },
            setProgressBarCheckExercise: function (e) {
              if (
                this.videoPlayData.exercises !== undefined &&
                this.classTestExercisesIdx < this.videoPlayData.exercises.length
              ) {
                var t = null;
                return (
                  this.videoPlayData.exercises[this.classTestExercisesIdx] !==
                    undefined &&
                    (t =
                      this.videoPlayData.exercises[this.classTestExercisesIdx]
                        .showTime),
                  t < e && (this.createClassTestMask(this), !0)
                );
              }
              return !1;
            },
            changeTestStyle: function (e) {
              if (this.parentEle.clientHeight < 600) {
                var t = $.queryEle("#ccH5classTest", this.parentEle);
                if (!t) return;
                t.className = "small" === e ? "small" : "";
              }
            },
            setListToBottom: function () {
              var e = $.queryEleAll(
                  ".ccTestContainer",
                  this.classTestContainer
                )[this.classTestQuestionIdx],
                t = $.queryEle(".ccTestOuter", e);
              if (t) {
                var i = t,
                  s = i.clientHeight,
                  a = i.scrollHeight,
                  r = 10;
                if (i.scrollTop + s <= a)
                  var n = setInterval(function o() {
                    var e = i.scrollTop;
                    if (((i.scrollTop = i.scrollTop + r), i.scrollTop - e < r))
                      return void clearInterval(n);
                    Math.ceil(i.scrollTop) + s >= a && clearInterval(n);
                  }, 20);
              }
            },
            resetDom: function () {
              var e = $.queryEle("#ccH5classTestContainer", this.parentEle);
              e && e.parentNode.removeChild(e),
                (this.ccMask.style.display = "none");
            },
            viewPointExercise: function (e) {
              for (
                var t = (this.classTestExercisesIdx = 0);
                t < this.videoPlayData.exercises.length;
                t++
              ) {
                if (this.videoPlayData.exercises[t].showTime == e) {
                  this.classTestExercisesIdx = t;
                  break;
                }
              }
              this.playerApi.videoPause(),
                this.createExercises(
                  this.videoPlayData.exercises[this.classTestExercisesIdx],
                  this
                ),
                (this.classTestOuterBox.style.display = "block"),
                (this.classTestQuestionIdx = 0);
            },
            updateCurrExerciseProgress: function () {
              var e = this.videoPlayData,
                t = (0, K["default"])(
                  e.exercises[this.classTestExercisesIdx].questions
                ).length;
              if (!(this.classTestQuestionIdx >= t)) {
                var i = this.classTestQuestionIdx + 1;
                ($.queryEle(
                  ".currQuestionNum",
                  this.classTestContainer
                ).innerHTML = i),
                  (this.ccTestProgress.style.width =
                    parseInt((i / t) * 100) + "%");
              }
            },
            continuePlay: function (e) {
              (this.classTestOuterBox.style.display = "none"),
                (!e || this.classTestQuestionIdx >= e - 1) &&
                  (this.classTestExercisesIdx++,
                  (this.classTestQuestionIdx = 0)),
                this.playerApi.videoPlay(),
                (this.ccMask.style.display = "none");
            },
            getExerciseIsShow: function () {
              var e = $.queryEle("#ccH5classTestContainer", this.parentEle);
              return !(!e || "block" !== e.style.display);
            },
          }),
          (u.CCH5PlayerExercise = function (e, t, i, s, a) {
            var r = new m(e, t, i, s, a);
            return {
              init: function () {
                r.init();
              },
              checkExercise: function (e) {
                return r.setProgressBarCheckExercise(e);
              },
              changeTestStyle: function (e) {
                r.changeTestStyle(e);
              },
              resetDom: function () {
                r.resetDom();
              },
              viewPointExercise: function (e) {
                r.viewPointExercise(e);
              },
              getExerciseIsShow: function () {
                return r.getExerciseIsShow();
              },
            };
          }),
          (function (e) {
            var s = e.document;
            if ("function" != typeof CCH5Knowledge) {
              var r = function r(e, t, i, s) {
                (this.playerApi = e),
                  (this.params = t),
                  (this.zIndex = s),
                  (this.parentEle = i),
                  (this.knowledge = []),
                  (this.currPartEndTime = 0);
              };
              (r.prototype = {
                init: function () {
                  this.params.knowledge &&
                    (this.knowledge = this.params.knowledge),
                    this.createView(),
                    this.addEvents();
                },
                createView: function () {
                  var e = this.knowledge,
                    t =
                      '<div class="ccH5KnowBox"><div class="ccH5-drawer-title">' +
                      ((e && e.title) || "") +
                      '</div><div class="ccH5-close-drawer"></div><div class="ccH5-drawer-box"><ul class="ccH5-drawer-ul" id="ccH5KnowList">' +
                      this.createListHTML(e.category) +
                      "</ul></div></div>",
                    i = s.createElement("div");
                  this.parentEle.appendChild(i),
                    (i.outerHTML = t),
                    (this.knowledgeBox = $.queryEle(
                      ".ccH5KnowBox",
                      this.parentEle
                    )),
                    (this.knowledgeBox.style.zIndex = this.zIndex);
                },
                createListHTML: function (e) {
                  var t = "";
                  if (!(e = e || []).length)
                    return '<div style="text-align:center;color:#fff">暂无数据</div>';
                  for (var i = 0; i < e.length; i++) {
                    var s = e[i],
                      a = this.filterInfoData(s.info) || [];
                    0 !== a.length &&
                      (t +=
                        '<li id="' +
                        s.cateId +
                        '"><div class="ccH5-cate-name" data-cate="' +
                        a.length +
                        '"><div>' +
                        s.name +
                        (a.length ? "(" + a.length + ")" : "") +
                        '</div><div class="ccH5-collapse-btn"' +
                        (1 < a.length ? "" : 'style="display:none"') +
                        '></div></div><div class="ccH5-cate-info" data-idx="' +
                        i +
                        '" ' +
                        (1 < a.length ? "" : 'style="max-height:666px"') +
                        ">" +
                        this.createPointHTML(a) +
                        "</div></li>");
                  }
                  return t;
                },
                createPointHTML: function (e) {
                  for (var t = "", i = 0; i < e.length; i++)
                    t +=
                      '<div class="ccH5-cate-item ' +
                      (e[i].desc ? "" : "ccH5-no-desc") +
                      '" data-t="' +
                      e[i].time +
                      '" ' +
                      (e[i].endTime ? 'data-et="' + e[i].endTime + '"' : "") +
                      '><div class="ccH5-know-time">' +
                      $.timeFormat(e[i].time) +
                      (e[i].endTime ? "~" + $.timeFormat(e[i].endTime) : "") +
                      "</div>" +
                      (e[i].desc
                        ? '<div class="ccH5-know-desc">' + e[i].desc + "</div>"
                        : "") +
                      '<div class="ccH5-know-index">' +
                      (i + 1) +
                      "</div></div>";
                  return t;
                },
                filterInfoData: function (e) {
                  if (e && 8 !== $.IEVersion())
                    return e.filter(function (e) {
                      return (
                        e.startTime && (e.time = e.startTime),
                        e.time !== undefined
                      );
                    });
                },
                addEvents: function () {
                  var t = this;
                  (this.knowList = $.queryEle("#ccH5KnowList", this.parentEle)),
                    (this.closeListBtn = $.queryEle(
                      ".ccH5-close-drawer",
                      this.parentEle
                    )),
                    $.addListener(this.closeListBtn, "click", function () {
                      t.hideDrawer();
                    }),
                    this.initListEvent(),
                    this.playerApi.registerVideoEvent(
                      "timeupdate",
                      function (e) {
                        t.currPartEndTime &&
                          e.target.currentTime >= t.currPartEndTime &&
                          ((t.currPartEndTime = 0),
                          t.knowledge.timeAxisStatus &&
                            t.playerApi.hideKnowledgePart(),
                          t.knowledge.pauseStatus !== undefined &&
                            (t.knowledge.pauseStatus
                              ? t.playerApi.getVideostate() ||
                                t.playerApi.videoPause()
                              : t.playerApi.getVideostate() &&
                                t.playerApi.videoPlay()));
                      }
                    );
                },
                initListEvent: function () {
                  var d = this;
                  $.addListener(this.knowList, "click", function (e) {
                    if (
                      "ccH5-cate-name" === e.target.className ||
                      "ccH5-cate-name" === e.target.parentNode.className
                    ) {
                      var t = e.target;
                      "ccH5-cate-name" === e.target.parentNode.className &&
                        (t = e.target.parentNode);
                      var i = t.getAttribute("data-cate");
                      if (!i || i <= 1) return;
                      var s = t.parentNode,
                        a = $.queryEle(".ccH5-cate-info", s),
                        r = $.queryEle(".ccH5-collapse-btn", s);
                      if (!a) return;
                      a.classList.contains("expand")
                        ? (a.classList.remove("expand"),
                          r.classList.remove("expand"))
                        : (a.classList.add("expand"),
                          r.classList.add("expand"));
                    }
                    if (
                      -1 < e.target.className.indexOf("ccH5-cate-item") ||
                      -1 <
                        e.target.parentNode.className.indexOf("ccH5-cate-item")
                    ) {
                      var n = e.target;
                      -1 <
                        e.target.parentNode.className.indexOf(
                          "ccH5-cate-item"
                        ) && (n = e.target.parentNode);
                      var o = 1 * n.getAttribute("data-t") || 0,
                        l = 1 * n.getAttribute("data-et") || 0;
                      (d.currPartEndTime = l),
                        d.knowledge.timeAxisStatus &&
                          (d.playerApi.hideKnowledgePart(),
                          l && d.playerApi.showKnowledgePart(o, l)),
                        d.playerApi.setCurrentTime(o),
                        d.hideDrawer(),
                        d.playerApi.getVideostate() && d.playerApi.videoPlay();
                      var c = n.parentNode.getAttribute("data-idx") || 0;
                      $.invokeWindow(
                        "on_view_knowledge",
                        d.knowledge.category[c],
                        o,
                        d.params.vid
                      );
                    }
                  });
                },
                showDrawer: function () {
                  this.knowledgeBox.classList.remove("ccH5DrawerHide"),
                    this.knowledgeBox.classList.add("ccH5DrawerShow");
                },
                hideDrawer: function () {
                  this.knowledgeBox.classList.remove("ccH5DrawerShow"),
                    this.knowledgeBox.classList.add("ccH5DrawerHide");
                },
                isShowing: function () {
                  return !(
                    !this.knowledgeBox ||
                    !this.knowledgeBox.classList.contains("ccH5DrawerShow")
                  );
                },
                setKnowledge: function () {
                  var e = $.queryEle("#ccH5KnowList", this.parentEle);
                  e
                    ? ((this.knowledge = this.params.knowledge),
                      (e.innerHTML = this.createListHTML(
                        this.knowledge.category
                      )),
                      ($.queryEle(
                        ".ccH5-drawer-title",
                        this.knowledgeBox
                      ).innerHTML = this.knowledge.title))
                    : this.init();
                },
              }),
                (e.CCH5Knowledge = function (e, t, i, s) {
                  var a = new r(e, t, i, s);
                  return {
                    init: function () {
                      a.init();
                    },
                    isShowing: function () {
                      return a.isShowing();
                    },
                    showDrawer: function () {
                      a.showDrawer();
                    },
                    hideDrawer: function () {
                      a.hideDrawer();
                    },
                    setKnowledge: function () {
                      a.setKnowledge();
                    },
                  };
                });
            }
          })(window),
          (function (i) {
            if ("function" != typeof CCH5PlayerLoadingPic) {
              var n = function n(e, t, i, s, a) {
                (this.playerApi = e),
                  (this.params = t),
                  (this.videoPlayData = i),
                  (this.parentEle = s),
                  (this.zIndex = a);
              };
              (n.prototype = {
                constructor: n,
                init: function () {
                  this.checkUrl();
                },
                checkUrl: function () {
                  var e = this,
                    t = this.params.loadingPic;
                  if (
                    /https?:\/\/.+/.test(t) &&
                    /\.(gif|jpg|jpeg|png|GIF|JPG|PNG|JPEG)$/.test(t)
                  ) {
                    var i = new Image();
                    (i.src = t),
                      (i.onload = function () {
                        e.createView(),
                          e.initEvents(),
                          e.registerVideoListener();
                      }),
                      (i.onerror = function () {
                        console.error("片头素材加载失败");
                      });
                  } else console.error("片头素材地址或格式不符合规范");
                },
                createView: function () {
                  var e = this,
                    t = $.getRandomWinFuncName("cch5player");
                  (i[t] = function () {
                    e.fitPicStyle();
                  }),
                    (this.picEle = document.createElement("img")),
                    (this.picEle.src = this.params.loadingPic),
                    (this.picEle.style.display = "block"),
                    this.parentEle.appendChild(this.picEle),
                    (this.picEle.style.position = "absolute"),
                    (this.picEle.style.zIndex = this.zIndex),
                    (this.picEle.onload = i[t]),
                    (this.picEle.style.userSelect = "none;"),
                    (this.picEle.style.maxHeight = "100%"),
                    (this.picEle.style.border = "0");
                },
                registerVideoListener: function () {
                  var t = this;
                  this.playerApi.registerVideoEvent("progress", function () {
                    if ("none" !== t.picEle.style.display) {
                      var e = t.playerApi.getVideoBuffered();
                      if (e && !(e && e.length < 1))
                        e.end(0) < 3 || (t.picEle.style.display = "none");
                    }
                  });
                },
                initEvents: function () {
                  var t = this;
                  $.addListener(this.picEle, "click", function (e) {
                    (e || i.event).target.src === t.params.loadingPic &&
                      t.playerApi.toggleVideoPlay();
                  });
                },
                fitPicStyle: function () {
                  if (!this.imgHasLoaded) {
                    this.imgHasLoaded = !0;
                    var e = this.picEle.width,
                      t = this.picEle.height,
                      i = this.parentEle.offsetWidth,
                      s = this.parentEle.offsetHeight;
                    e / t <= i / s
                      ? ((this.picEle.style.width = "auto"),
                        (this.picEle.style.height = "100%"))
                      : ((this.picEle.style.width = "100%"),
                        (this.picEle.style.height = "auto"));
                    var a = (i - this.picEle.offsetWidth) / 2,
                      r = (s - this.picEle.offsetHeight) / 2;
                    (this.picEle.style.right = a + "px"),
                      (this.picEle.style.top = r + "px");
                  }
                },
              }),
                (i.CCH5PlayerLoadingPic = function (e, t, i, s, a) {
                  var r = new n(e, t, i, s, a);
                  return {
                    init: function () {
                      r.init();
                    },
                  };
                });
            }
          })(window),
          (function (i) {
            if ("function" != typeof CCH5PlayerLogo) {
              var n = function n(e, t, i, s, a) {
                (this.playerApi = e),
                  (this.params = t),
                  (this.videoPlayData = i),
                  (this.parentEle = s),
                  (this.zIndex = a),
                  (this.initedLogoWidth = null),
                  (this.initedLogoHeight = null),
                  (this.logoData =
                    this.videoPlayData.config &&
                    this.videoPlayData.config.logo);
              };
              (n.prototype = {
                constructor: n,
                defaultPlayerW: 640,
                defaultPlayerH: 480,
                defaultMargin: 14,
                init: function () {
                  this.logoData && this.logoData.url && this.checkUrl();
                },
                checkUrl: function () {
                  var e = this,
                    t = this.logoData.url;
                  if (
                    /https?:\/\/.+/.test(t) &&
                    /\.(gif|jpg|jpeg|png|GIF|JPG|PNG|JPEG)$/.test(t)
                  ) {
                    var i = new Image();
                    (i.src = t),
                      (i.onload = function () {
                        e.createView(),
                          e.setLogoPos(),
                          e.fitLogoStyle(),
                          e.initEvents();
                      }),
                      (i.onerror = function () {
                        console.error("logo加载失败");
                      });
                  } else console.error("logo地址格式不符合规范");
                },
                createView: function () {
                  (this.logoParentEle = document.createElement("a")),
                    (this.logoParentEle.href =
                      this.logoData.linkurl || "javascript:;"),
                    (this.logoParentEle.style.display = "block"),
                    this.logoData.linkurl &&
                      (this.logoParentEle.target = "_blank"),
                    this.parentEle.appendChild(this.logoParentEle),
                    (this.logoParentEle.style.position = "absolute"),
                    (this.logoParentEle.style.zIndex = this.zIndex),
                    (this.logoEle = document.createElement("img")),
                    (this.logoEle.src = this.logoData.url),
                    this.logoParentEle.appendChild(this.logoEle),
                    (this.logoEle.style.userSelect = "none;"),
                    (this.logoEle.style.border = "0"),
                    (this.logoEle.style.position = "absolute"),
                    (this.logoEle.style.opacity = this.logoData.opacity / 100);
                },
                initEvents: function () {
                  var t = this;
                  $.addListener(this.logoEle, "click", function (e) {
                    (e || i.event).target.src !== t.logoData.url ||
                      t.logoData.linkurl ||
                      t.playerApi.toggleVideoPlay();
                  }),
                    $.addListener(this.logoEle, "mousedown", function (e) {
                      e.preventDefault();
                    });
                },
                setLogoPos: function () {
                  var e = (
                      (this.defaultMargin / this.defaultPlayerW) *
                      100
                    ).toFixed(2),
                    t = e;
                  this.params.logo &&
                    this.params.logo.url &&
                    0 < this.params.logo.posX &&
                    ((this.params.logo.posX =
                      50 < this.params.logo.posX ? 50 : this.params.logo.posX),
                    (e = this.params.logo.posX)),
                    this.params.logo &&
                      this.params.logo.url &&
                      this.params.logo.posY &&
                      ((this.params.logo.posY =
                        50 < this.params.logo.posY
                          ? 50
                          : this.params.logo.posY),
                      (t = this.params.logo.posY));
                  var i = this.logoData.position;
                  2 == i
                    ? ((this.logoParentEle.style.top = t + "%"),
                      (this.logoParentEle.style.right = e + "%"),
                      (this.logoEle.style.top = 0),
                      (this.logoEle.style.right = 0))
                    : 3 == i
                    ? ((this.logoParentEle.style.bottom = t + "%"),
                      (this.logoParentEle.style.left = e + "%"),
                      (this.logoParentEle.style.marginBottom = "40px"),
                      (this.logoEle.style.left = 0),
                      (this.logoEle.style.bottom = 0))
                    : 4 == i
                    ? ((this.logoParentEle.style.bottom = t + "%"),
                      (this.logoParentEle.style.right = e + "%"),
                      (this.logoParentEle.style.marginBottom = "40px"),
                      (this.logoEle.style.right = 0),
                      (this.logoEle.style.bottom = 0))
                    : ((this.logoParentEle.style.top = t + "%"),
                      (this.logoParentEle.style.left = e + "%"),
                      (this.logoEle.style.top = 0),
                      (this.logoEle.style.left = 0));
                },
                fitLogoStyle: function () {
                  if (!this.logoHasLoaded) {
                    this.logoHasLoaded = !0;
                    var e = this.logoEle.width,
                      t = this.logoEle.height,
                      i = 100 < e ? 21.74 : 10;
                    this.params.logo &&
                      this.params.logo.url &&
                      0 < this.params.logo.size &&
                      ((this.params.logo.size =
                        30 < this.params.logo.size
                          ? 30
                          : this.params.logo.size),
                      (i = this.params.logo.size)),
                      (this.logoParentEle.style.width = i + "%"),
                      (this.logoParentEle.style.height = i + "%"),
                      e / t <=
                      this.logoParentEle.offsetWidth /
                        this.logoParentEle.offsetHeight
                        ? ((this.logoParentEle.style.maxHeight = "30%"),
                          (this.logoEle.style.width = "auto"),
                          (this.logoEle.style.height = "100%"))
                        : ((this.logoParentEle.style.maxWidth = "30%"),
                          (this.logoEle.style.width = "100%"),
                          (this.logoEle.style.height = "auto"));
                  }
                },
              }),
                (i.CCH5PlayerLogo = function (e, t, i, s, a) {
                  var r = new n(e, t, i, s, a);
                  return {
                    init: function () {
                      r.init();
                    },
                  };
                });
            }
          })(window),
          (f = window),
          (g = f.document),
          (_.prototype = {
            intervals: [],
            axis: {
              1: { x: "right", y: "top" },
              2: { x: "left", y: "top" },
              3: { x: "left", y: "bottom" },
              0: { x: "right", y: "bottom" },
            },
            init: function () {
              "[object Array]" ===
              Object.prototype.toString.call(this.videoPlayData.marquee.action)
                ? ((this.currentActionIdx = 0),
                  (this.marqueeLoop = this.videoPlayData.marquee.loop),
                  (this.marqueeBox = {}),
                  (this.safeSign = null),
                  (this.currentSignTime = 0),
                  this.registerVideoListener(),
                  this.bindEvents())
                : console.error("跑马灯action类型为数组");
            },
            createVttMarquee: function () {
              var e = this;
              (this.vttTrack = null),
                (this.cueCn = null),
                this.oVideo &&
                  ((this.vttTrack = this.oVideo.addTextTrack(
                    "subtitles",
                    "字幕",
                    "zh_CN"
                  )),
                  (this.vttTrack.mode = "disabled"),
                  this.addVttCue(),
                  this.vttMarqueeTimer && clearInterval(this.vttMarqueeTimer),
                  (this.vttMarqueeTimer = setInterval(function () {
                    e.addVttCue();
                  }, 5e3)),
                  this.intervals.push(this.vttMarqueeTimer));
            },
            addVttCue: function () {
              var e = this.playerApi.getTotalTime() || 0;
              if (!this.cueCn) {
                var t =
                  (this.videoPlayData.marquee.text &&
                    this.videoPlayData.marquee.text) ||
                  {};
                if (
                  ((this.cueCn = new VTTCue(0, e, t.content)),
                  this.vttTrack.addCue(this.cueCn),
                  !g.getElementById("ccVttStyle"))
                ) {
                  t.font_size &&
                    -1 === (t.font_size + "").indexOf("px") &&
                    (t.font_size += "px");
                  var i =
                    "video::cue{background: none;text-shadow:none;background: none;font-size:" +
                    t.font_size +
                    ";color:" +
                    t.color.replace("0x", "#") +
                    ";opacity:0.7}";
                  $.addCssByStyle(i, "vttMarqueeStyle");
                }
              }
              var s = parseInt(9 * Math.random(), 10),
                a = [
                  { pos: 10, line: 2 },
                  { pos: 45, line: 2 },
                  { pos: 85, line: 2 },
                  { pos: 10, line: 6 },
                  { pos: 45, line: 6 },
                  { pos: 85, line: 6 },
                  { pos: 10, line: 16 },
                  { pos: 45, line: 16 },
                  { pos: 85, line: 16 },
                ];
              (this.cueCn.line = a[s].line), (this.cueCn.position = a[s].pos);
            },
            toggleVttMarquee: function (e) {
              (this.isFulls = e),
                (this.vttTrack.mode = e ? "showing" : "disabled");
            },
            checkSafeSign: function (e) {
              this.safeSign && this.safeSign.remove(),
                (this.safeSign = this.createRandomTagElement()),
                (this.safeSign.innerText =
                  this.videoPlayData.marquee.text.content);
              var t =
                this.params.invisibleMarqueeLightMode + "" == "true"
                  ? "color:rgb(255, 0, 0);text-shadow:#fff -1px 0px 2px, #fff 1px 0px 2px;"
                  : "color:#fff;text-shadow:rgb(255, 0, 0) 0px 0px 5px, rgb(255, 0, 0) 0px 0px 5px;";
              this.safeSign.style.cssText =
                "font-size:18px;position:absolute;opacity:0;z-index:150;" +
                this.axis[e].x +
                ":15%;" +
                this.axis[e].y +
                ":15%;" +
                t;
              var i = new Date().getTime(),
                s = this.parentEle.childNodes.length;
              this.parentEle.insertBefore(
                this.safeSign,
                this.parentEle.childNodes[i % s]
              ),
                this.startMove();
            },
            startMove: function () {
              var e = this;
              clearInterval(this.opTimer);
              var t = 0;
              (this.opTimer = setInterval(function () {
                19 <= t
                  ? (clearInterval(e.opTimer),
                    e.safeSign && e.safeSign.remove())
                  : ((t += 5), (e.safeSign.style.opacity = t / 100));
              }, 10)),
                this.intervals.push(this.opTimer);
            },
            registerVideoListener: function () {
              var i = this;
              (this.timeUpdateEvent = function (e) {
                "function" == typeof i.oVideo.addTextTrack &&
                  "true" === i.params.mobileFullsMarquee &&
                  $.isMoble() &&
                  (!i.vttTrack || (i.cueCn && !i.cueCn.track)) &&
                  e.target.currentTime &&
                  i.createVttMarquee(),
                  $.isIPhone() &&
                    "true" === i.params.mobileFullsMarquee &&
                    i.isFulls &&
                    "showing" !== i.vttTrack.mode &&
                    (i.vttTrack.mode = "showing"),
                  i.checkMarqueeInterval();
                var t = e.target.currentTime && parseInt(e.target.currentTime);
                i.currentSignTime !== t &&
                  ((i.currentSignTime = t),
                  i.videoPlayData.reskeys &&
                    i.videoPlayData.reskeys.invisible_marquee &&
                    "text" === i.videoPlayData.marquee.type &&
                    t &&
                    t % 10 == 0 &&
                    i.checkSafeSign((t / 10) % 4));
              }),
                this.playerApi.registerVideoEvent(
                  "timeupdate",
                  this.timeUpdateEvent
                ),
                $.isIPhone() &&
                  "true" === this.params.mobileFullsMarquee &&
                  this.playerApi.registerVideoEvent(
                    "webkitendfullscreen",
                    function () {
                      i.toggleVttMarquee(!1);
                    }
                  );
            },
            removeVideoListener: function () {
              this.timeUpdateEvent &&
                this.playerApi.removeVideoEvent(
                  "timeupdate",
                  this.timeUpdateEvent
                );
            },
            bindEvents: function () {
              var e = this;
              g.addEventListener("webkitfullscreenchange", function () {
                e.checkMarqueeInterval();
              });
            },
            checkMarqueeInterval: function () {
              if (!(new Date().getTime() - this.lastCheckTime < 4e3)) {
                (this.lastCheckTime = new Date().getTime()),
                  this.timer && f.clearInterval(this.timer),
                  this.animationIt && f.clearInterval(this.animationIt);
                var e = this;
                (this.timer = setInterval(function () {
                  e.checkMarquee();
                }, 2e3)),
                  this.intervals.push(this.timer);
              }
            },
            checkMarquee: function () {
              if (0 != this.lastCheckTime) {
                this.lastCheckTime = new Date().getTime();
                for (
                  var e = this.parentEle.children, t = 0;
                  t < e.length && e[t] !== this.marqueeBox;
                  t++
                );
                if (t !== e.length) {
                  $.isIE() || (this.marqueeBox.style = "");
                  var i = this.playerApi.getIsWasmPlay() ? "canvas" : "video",
                    s = $.queryEle(i, this.parentEle);
                  if (!s || s.style.zIndex >= this.zIndex)
                    $.queryEle(i, this.parentEle) &&
                      $.queryEle(i, this.parentEle).remove();
                  else {
                    var a = this.videoPlayData;
                    if ("text" === a.marquee.type)
                      (this.marqueeBox.innerText = a.marquee.text.content),
                        (this.marqueeBox.style.fontSize =
                          a.marquee.text.font_size),
                        (this.marqueeBox.style.color =
                          a.marquee.text.color.replace("0x", "#"));
                    else {
                      var r = $.queryEle("img", this.marqueeBox);
                      r && r.src == a.marquee.image.image_url
                        ? ((r.className = ""),
                          (r.style =
                            "width:" +
                            a.marquee.image.width +
                            "px;height:" +
                            a.marquee.image.height +
                            "px;"))
                        : (this.marqueeBox.innerHTML =
                            "<img src=" +
                            a.marquee.image.image_url +
                            " width=" +
                            a.marquee.image.width +
                            "px height=" +
                            a.marquee.image.height +
                            "px >");
                    }
                    (this.marqueeBox.style.left = this.start.x + "px"),
                      (this.marqueeBox.style.top = this.start.y + "px"),
                      (this.marqueeBox.style.opacity = this.start.a),
                      (this.marqueeBox.style.display = "block"),
                      (this.marqueeBox.style.position = "absolute"),
                      (this.marqueeBox.style.overflow = "visible"),
                      (this.marqueeBox.style.height = "auto"),
                      (this.marqueeBox.style.width = "auto"),
                      (this.marqueeBox.style.zIndex = this.zIndex),
                      (this.marqueeBox.style.visibility = "visible"),
                      (this.marqueeBox.style.whiteSpace = "nowrap"),
                      (this.marqueeBox.style.transition = "unset"),
                      (this.marqueeBox.className = ""),
                      (this.marqueeBox.id = "");
                  }
                } else this.createMarquee();
              } else this.createMarquee();
            },
            createMarquee: function () {
              var e = this.videoPlayData;
              "text" === e.marquee.type
                ? ((this.marqueeBox = this.createRandomTagElement(!0)),
                  (this.marqueeBox.innerText = e.marquee.text.content),
                  e.marquee.text.font_size &&
                    -1 === (e.marquee.text.font_size + "").indexOf("px") &&
                    (e.marquee.text.font_size += "px"),
                  (this.marqueeBox.style.fontSize = e.marquee.text.font_size),
                  (this.marqueeBox.style.color = e.marquee.text.color.replace(
                    "0x",
                    "#"
                  )))
                : ((this.marqueeBox = g.createElement("div")),
                  (this.marqueeBox.innerHTML =
                    "<img src=" +
                    e.marquee.image.image_url +
                    " width=" +
                    e.marquee.image.width +
                    "px height=" +
                    e.marquee.image.height +
                    "px >")),
                (this.marqueeBox.style.position = "absolute"),
                (this.marqueeBox.style.display = "none"),
                (this.marqueeBox.style.zIndex = this.zIndex),
                (this.marqueeBox.style.whiteSpace = "nowrap");
              var t = new Date().getTime(),
                i = this.parentEle.childNodes.length;
              this.parentEle.insertBefore(
                this.marqueeBox,
                this.parentEle.childNodes[t % i]
              ),
                this.marqueeAnimation(e.marquee.action);
            },
            createRandomTagElement:
              ((v = function (t) {
                for (
                  var i = 3 + (new Date().getTime() % 2), s = "", a = 0;
                  a < i;
                  a++
                ) {
                  var r = 97 + (parseInt(100 * Math.random()) % 26);
                  s += String.fromCharCode(r);
                }
                var n = null;
                try {
                  n = g.createElement(s);
                } catch (e) {
                  return g.createElement("div");
                }
                return "HTMLUnknownElement" == n.constructor.name
                  ? ((n.style.display = "block"), n)
                  : t
                  ? createRandomTagElement(!1)
                  : g.createElement("div");
              }),
              (V.toString = function () {
                return v.toString();
              }),
              V),
            marqueeAnimation: function (e) {
              var t = this;
              this.marqueeBox.style.display = "block";
              var i = e[this.currentActionIdx].duration;
              i < 10 && (i = 10);
              for (
                var s = {
                    x:
                      e[this.currentActionIdx].start.xpos *
                      this.parentEle.clientWidth,
                    y:
                      e[this.currentActionIdx].start.ypos *
                      this.parentEle.clientHeight,
                    a: e[this.currentActionIdx].start.alpha,
                  },
                  a =
                    e[this.currentActionIdx].end.xpos *
                    this.parentEle.clientWidth,
                  r =
                    e[this.currentActionIdx].end.ypos *
                    this.parentEle.clientHeight,
                  n = e[this.currentActionIdx].end.alpha,
                  o = Math.abs(a - s.x),
                  l = Math.abs(r - s.y),
                  c = l < o ? o : l,
                  d = 10,
                  h = 0;
                h++ < 100;

              ) {
                var u = (d * c) / i;
                if (u <= 2 || d <= 1) break;
                d = (2 * (d - 1)) / parseInt(u);
              }
              var p = ((a - s.x) * d) / i,
                y = ((r - s.y) * d) / i,
                m = ((n - s.a) * d) / i;
              (this.marqueeBox.style.left = s.x),
                (this.marqueeBox.style.top = s.y),
                (this.marqueeBox.style.opacity = s.a),
                (this.start = s);
              var v = 0;
              this.animationIt && f.clearInterval(this.animationIt),
                (this.animationIt = setInterval(function () {
                  (v += d),
                    (s.x = s.x + p),
                    (s.y = s.y + y),
                    (s.a = s.a + m),
                    (t.marqueeBox.style.left = s.x + "px"),
                    (t.marqueeBox.style.top = s.y + "px"),
                    (t.marqueeBox.style.opacity = s.a),
                    i <= v &&
                      ((v = 0),
                      f.clearInterval(t.animationIt),
                      setTimeout(function () {
                        t.animationNext();
                      }, 100));
                }, d)),
                this.intervals.push(this.animationIt);
            },
            animationNext: function () {
              if (
                ((this.marqueeBox.style.display = "none"),
                this.currentActionIdx++,
                this.currentActionIdx ===
                  this.videoPlayData.marquee.action.length)
              ) {
                if (
                  ((this.marqueeLoop = this.marqueeLoop - 1),
                  0 === this.marqueeLoop)
                )
                  return;
                this.currentActionIdx = 0;
              }
              "text" === this.videoPlayData.marquee.type
                ? (this.marqueeBox.remove(), this.createMarquee())
                : this.marqueeAnimation(this.videoPlayData.marquee.action);
            },
            detectionMarquee: function (A) {
              var E = this,
                e = g.querySelector(".ccH5playerBox"),
                w = function w(e) {
                  var t = !0,
                    i = !1,
                    s = undefined;
                  try {
                    for (
                      var a, r = (0, X["default"])(e);
                      !(t = (a = r.next()).done);
                      t = !0
                    ) {
                      var n = a.value;
                      if ("childList" === n.type) {
                        var o = !0,
                          l = !1,
                          c = undefined;
                        try {
                          for (
                            var d, h = (0, X["default"])(n.addedNodes);
                            !(o = (d = h.next()).done);
                            o = !0
                          ) {
                            var u = d.value;
                            if (
                              u &&
                              "staticMarquee" !== u.id &&
                              ("VIDEO" === u.nodeName ||
                                ("{}" !== (0, G["default"])(E.marqueeBox) &&
                                  E.videoPlayData.marquee.type === text &&
                                  E.marqueeBox.innerText !=
                                    E.videoPlayData.marquee.text.content &&
                                  E.marqueeBox.textContent !=
                                    E.videoPlayData.marquee.text.content) ||
                                ("{}" !== (0, G["default"])(E.marqueeBox) &&
                                  E.videoPlayData.marquee.type === image &&
                                  -1 ===
                                    E.marqueeBox.innerHTML.indexOf(
                                      E.videoPlayData.marquee.image.image_url
                                    )))
                            )
                              return (
                                E.containerOb.disconnect(), void (A && A())
                              );
                          }
                        } catch (P) {
                          (l = !0), (c = P);
                        } finally {
                          try {
                            !o && h["return"] && h["return"]();
                          } finally {
                            if (l) throw c;
                          }
                        }
                        var p = !0,
                          y = !1,
                          m = undefined;
                        try {
                          for (
                            var v, f = (0, X["default"])(n.removedNodes);
                            !(p = (v = f.next()).done);
                            p = !0
                          ) {
                            var g = v.value;
                            if (g && "VIDEO" === g.nodeName)
                              return (
                                E.containerOb.disconnect(), void (A && A())
                              );
                          }
                        } catch (P) {
                          (y = !0), (m = P);
                        } finally {
                          try {
                            !p && f["return"] && f["return"]();
                          } finally {
                            if (y) throw m;
                          }
                        }
                      }
                    }
                  } catch (P) {
                    (i = !0), (s = P);
                  } finally {
                    try {
                      !t && r["return"] && r["return"]();
                    } finally {
                      if (i) throw s;
                    }
                  }
                };
              (this.containerOb = new MutationObserver(w)),
                this.containerOb.observe(e, { childList: !0 });
            },
            stopDetectionMarquee: function () {
              this.containerOb && this.containerOb.disconnect();
            },
            destroy: function () {
              this.marqueeBox &&
                this.marqueeBox.remove &&
                this.marqueeBox.remove(),
                this.containerOb && this.containerOb.disconnect(),
                this.removeVideoListener();
            },
          }),
          (f.CCH5PlayerMarquee = function (e, t, i, s, a, r) {
            var o = new _(e, t, i, s, a, r);
            return {
              init: function () {
                o.init();
              },
              destroy: function () {
                var e = !0,
                  t = !1,
                  i = undefined;
                try {
                  for (
                    var s, a = (0, X["default"])(o.intervals);
                    !(e = (s = a.next()).done);
                    e = !0
                  ) {
                    var r = s.value;
                    f.clearInterval(r);
                  }
                } catch (n) {
                  (t = !0), (i = n);
                } finally {
                  try {
                    !e && a["return"] && a["return"]();
                  } finally {
                    if (t) throw i;
                  }
                }
                o.destroy();
              },
              toggleVttMarquee: function (e) {
                o.toggleVttMarquee(e);
              },
              detectionMarquee: function (e) {
                o.detectionMarquee(e);
              },
              stopDetectionMarquee: function () {
                o.stopDetectionMarquee();
              },
            };
          }),
          (function (l) {
            var d = l.document;
            if ("function" != typeof CCH5PlayerMore) {
              var n = function n(e, t, i, s, a, r) {
                (this.playerApi = e),
                  (this.params = t),
                  (this.videoPlayData = i),
                  (this.parentEle = s),
                  (this.zIndex = a),
                  (this.oVideo = r),
                  (this.intervals = []),
                  (this.hasMore = !1),
                  (this.trackIdx = i.defaultvtt);
              };
              (n.prototype = {
                constructor: n,
                isUseBackupUrl: !1,
                showBtnList: !1,
                isCloseVtt: !1,
                init: function () {
                  (this.lang = this.playerApi.getLangData()),
                    this.createView(),
                    this.initData(),
                    this.addEvents();
                },
                addEvents: function () {
                  var t = this;
                  function i() {
                    if (
                      (t.playerApi.removeVideoEvent("play", i),
                      $.queryEle("track", t.oVideo))
                    ) {
                      var e = t.oVideo.innerHTML;
                      (t.oVideo.innerHTML = ""),
                        (t.oVideo.innerHTML = e),
                        setTimeout(function () {
                          t.selectVttItem();
                        }, 200);
                    }
                  }
                  $.addListener(this.switchUrlBtn, "click", function () {
                    t.handelSwitchUrl();
                  }),
                    $.addListener(this.moreBtn, "click", function () {
                      (this.className = "ccH5More ccH5FadeIn"),
                        t.showBtnList ? t.hideTheBtnList() : t.showTheBtnList();
                    }),
                    $.addListener(this.switchAudioBtn, "click", function () {
                      t.playerApi.toggleVideoOrAudio();
                    }),
                    $.addListener(this.switchVttBtn, "click", function () {
                      (t.switchVttBox.style.visibility = "visible"),
                        (t.switchVttBox.style.top = 0);
                    }),
                    this.playerApi.registerVideoEvent("loadstart", function () {
                      !(function e() {
                        t.playerApi.registerVideoEvent("play", i);
                      })();
                    });
                },
                initData: function () {
                  if (
                    ((this.moreBtn = $.queryEle(".ccH5More", this.parentEle)),
                    (this.switchAudioBtn = $.queryEle(
                      ".ccH5SwitchAudio",
                      this.parentEle
                    )),
                    (this.switchUrlBtn = $.queryEle(
                      "#ccH5SwitchUrl",
                      this.parentEle
                    )),
                    (this.cch5TipToast = $.queryEle(
                      ".cch5TipToast",
                      this.parentEle
                    )),
                    (this.switchVttBtn = $.queryEle(
                      "#ccH5switchVtt",
                      this.parentEle
                    )),
                    (this.btnList = $.queryEle("#ccBtnList", this.parentEle)),
                    this.params.showSrt + "" != "false" && this.initSwitchVtt(),
                    this.getIsShowSwitchVtt() ||
                      (this.switchVttBtn.style.display = "none"),
                    this.getIsShowSwitchMode() ||
                      (this.switchAudioBtn.style.display = "none"),
                    this.getIsShowSwitchUrl() ||
                      (this.switchUrlBtn.style.display = "none"),
                    (this.moreBtn.style.display = "none"),
                    (this.hasMore = !1),
                    this.params.isShowMoreBtn + "" != "false" &&
                      ($.isAndroid() || $.isIPhone() || $.isIPad()))
                  )
                    for (
                      var e = $.queryEleAll("li", this.btnList), t = 0;
                      t < e.length;
                      t++
                    )
                      if ("none" != e[t].style.display) {
                        (this.moreBtn.style.display = "block"),
                          (this.hasMore = !0);
                        break;
                      }
                },
                getIsShowSwitchMode: function () {
                  var e = this.videoPlayData;
                  return (
                    0 != e.videoCopies.length &&
                    0 != e.audioCopies.length &&
                    !this.params.disableSwitchMode
                  );
                },
                getIsShowSwitchVtt: function () {
                  return !(
                    !this.playerApi.isVideoPlay() ||
                    this.videoPlayData.vtt2 === undefined ||
                    $.isLieBao() ||
                    $.isSougou() ||
                    $.isUC() ||
                    9 === $.IEVersion() ||
                    this.params.showSrt + "" == "false"
                  );
                },
                getIsShowSwitchUrl: function () {
                  return !(
                    this.params.isShowUrlBtn + "" == "false" ||
                    0 == this.videoPlayData.copies.length ||
                    !this.playerApi.getCurrentCopy().backupurl
                  );
                },
                createView: function () {
                  var e = this.playerApi.isVideoPlay()
                      ? this.lang.switchAudio
                      : this.lang.switchVideo,
                    t =
                      "<div  class='ccH5More ccH5FadeOut'>     <ul id='ccBtnList' class='ccBtnList'>\t        <li id='ccH5SwitchUrl' class='ccH5SwitchUrl'>" +
                      this.lang.switchLine +
                      "2</li>\t\t    <li id='ccH5SwitchAudio' class='ccH5SwitchAudio'>" +
                      e +
                      "</li>\t\t    <li id='ccH5switchVtt' class='ccH5SwitchAudio'>字幕切换</li>     </ul></div>",
                    i = d.createElement("section");
                  this.parentEle.appendChild(i),
                    (i.outerHTML = t),
                    ($.queryEle(".ccH5More", this.parentEle).style.zIndex =
                      this.zIndex);
                },
                handelSwitchUrl: function () {
                  var e = this,
                    t = this.playerApi.getCurrentTime();
                  this.isUseBackupUrl
                    ? (this.playerApi.setVideoSrc(
                        this.playerApi.getCurrentCopy().playurl
                      ),
                      (this.switchUrlBtn.innerHTML =
                        this.lang.switchLine + "2"))
                    : (this.playerApi.setVideoSrc(
                        this.playerApi.getCurrentCopy().backupurl
                      ),
                      (this.switchUrlBtn.innerHTML =
                        this.lang.switchLine + "1")),
                    (this.isUseBackupUrl = !this.isUseBackupUrl),
                    this.playerApi.resolvePlayState(t),
                    (this.cch5TipToast.innerHTML = this.lang.switchLineSuccess),
                    (this.cch5TipToast.style.display = "block"),
                    setTimeout(function () {
                      e.cch5TipToast.style.display = "none";
                    }, 1e3),
                    $.invokeWindow(
                      "on_player_play_url_change",
                      this.params.vid
                    );
                },
                showTheBtnList: function () {
                  (this.btnList.style.display = "block"),
                    (this.showBtnList = !0);
                },
                hideTheBtnList: function () {
                  (this.btnList.style.display = "none"),
                    (this.showBtnList = !1);
                },
                show: function () {
                  this.hasMore &&
                    (this.moreBtn.className = "ccH5More ccH5FadeIn");
                },
                hide: function () {
                  (this.moreBtn.className = "ccH5More ccH5FadeOut"),
                    (this.btnList.style.display = "none"),
                    (this.showBtnList = !1);
                },
                initSwitchVtt: function () {
                  this.playerApi.clearVttTrack();
                  var e = d.getElementById("ccVttStyle");
                  if (
                    (e && e.parentNode.removeChild(e),
                    "undefined" != typeof this.videoPlayData.vtt &&
                      this.videoPlayData.vtt)
                  ) {
                    var t =
                      "video::cue{" +
                      this.videoPlayData.vtt.cssStyle +
                      " background: none; white-space:pre-wrap;}";
                    $.addCssByStyle(t),
                      this.createVttTrackHTML(),
                      this.createVttListDom(),
                      (this.switchVttBox = $.queryEle(
                        "#switchVttBox",
                        this.parentEle
                      )),
                      (this.switchVttContainer = $.queryEle(
                        "ul",
                        this.switchVttBox
                      )),
                      (this.vttBtns =
                        this.switchVttContainer.getElementsByTagName("li")),
                      ($.queryEle(".container", this.switchVttBox).style.width =
                        "auto"),
                      this.initSwitchVttBtns(),
                      this.selectedDefaultVtt(),
                      1 == this.videoPlayData.subtitlemodel &&
                        ((this.bindVttFontSize =
                          this.setVttFontSize.bind(this)),
                        this.playerApi.addGlobalEvent(
                          l,
                          "load",
                          this.bindVttFontSize
                        ),
                        this.playerApi.addGlobalEvent(
                          l,
                          "resize",
                          this.bindVttFontSize
                        ));
                  }
                },
                createVttListDom: function () {
                  var e = d.createElement("div");
                  this.parentEle.appendChild(e),
                    (e.outerHTML =
                      "<div class='switchVttBox' id='switchVttBox'>  \t<div class='container'>\t \t \t<ul><li></li><li></li><li></li><li></li></ul>\t \t</div>");
                },
                createVttTrackHTML: function () {
                  var e;
                  (e =
                    -1 != this.videoPlayData.vtt.vttUrl.indexOf("bokecc.com")
                      ? this.videoPlayData.vtt.vttUrl.replace(
                          /http:/i,
                          "https:"
                        )
                      : this.videoPlayData.vtt.vttUrl),
                    this.addTrackDom(e, "简体中文", "default"),
                    this.videoPlayData.vtt2 !== undefined &&
                      this.videoPlayData.bilingual !== undefined &&
                      (this.addTrackDom(
                        this.videoPlayData.vtt2.vttUrl.replace(
                          /http:/i,
                          "https:"
                        ),
                        "vtt2"
                      ),
                      this.addTrackDom(
                        this.videoPlayData.bilingual.vttUrl.replace(
                          /http:/i,
                          "https:"
                        ),
                        "bilingual"
                      ));
                },
                addTrackDom: function (e, t, i) {
                  var s = d.createElement("track");
                  (s.src = e),
                    (s.srclang = "zh-cn"),
                    (s.label = t),
                    (s.kind = "subtitles"),
                    i &&
                      this.videoPlayData.vtt2 === undefined &&
                      (s["default"] = "default"),
                    this.oVideo.appendChild && this.oVideo.appendChild(s);
                },
                initSwitchVttBtns: function () {
                  var e = this.videoPlayData;
                  if (e.vtt !== undefined) {
                    var t = "",
                      i = 1;
                    (t += '<li id="vtt">' + e.vtt.vttName + "</li>"),
                      e.vtt2 !== undefined &&
                        ((t += '<li id="vtt2">' + e.vtt2.vttName + "</li>"),
                        i++),
                      e.bilingual !== undefined &&
                        ((t +=
                          '<li id="bilingual">' +
                          e.bilingual.vttName +
                          "</li>"),
                        i++),
                      (t += '<li id="closeVtt">关闭字幕</li>'),
                      (this.switchVttContainer.innerHTML = t);
                    1 < i
                      ? (this.bindVttEvent("vtt", this.vttBtns, 0, this),
                        this.bindVttEvent("vtt2", this.vttBtns, 1, this),
                        this.bindVttEvent("bilingual", this.vttBtns, 2, this))
                      : this.bindVttEvent("vtt", this.vttBtns, 0, this),
                      this.handleClickCloseVtt();
                  } else this.switchVttBtn.style.display = "none";
                },
                bindVttEvent: function (r, n, o, l) {
                  var c = this.videoPlayData;
                  this.parentEle.querySelector("#" + r).onclick = function () {
                    for (var e = 0; e < n.length; e++) n[e].className = "";
                    this.classList.add("active");
                    var t = l.oVideo.textTracks;
                    if (t) {
                      for (var i = 0; i < t.length; i++) t[i].mode = "disabled";
                      setTimeout(function () {
                        l.oVideo.textTracks[o].mode = "showing";
                      }, 100),
                        (l.switchVttBox.style.visibility = "hidden"),
                        (l.switchVttBox.style.top = "150%"),
                        (l.trackIdx = o),
                        (l.videoPlayData.defaultvtt = o),
                        (l.isCloseVtt = !1);
                      var s = d.getElementById("ccVttStyle");
                      s.parentNode.removeChild(s);
                      var a =
                        "video::cue{" +
                        c[r].cssStyle +
                        " background: none; white-space:pre-wrap;}";
                      $.addCssByStyle(a),
                        1 == l.videoPlayData.subtitlemodel &&
                          l.setVttFontSize();
                    }
                  };
                },
                setVttFontSize: function (e) {
                  if (
                    "undefined" != typeof this.videoPlayData.vtt &&
                    this.params.showSrt + "" != "false"
                  ) {
                    var t = this.playerApi.getOrientation()
                        ? this.parentEle.clientHeight
                        : this.parentEle.clientWidth,
                      i = this.videoPlayData.subtitlefontsize || 13;
                    this.playerApi.getOrientation() && (e = 1);
                    var s = $.isMoble()
                        ? "number" == typeof e
                          ? 1.5 * e
                          : 1.5
                        : 1,
                      a = parseInt((i / 480) * t * s);
                    a = 140 < a ? 140 : a < 12 ? 12 : a;
                    var r = d.getElementById("ccVttStyle"),
                      n = r.innerHTML,
                      o = /font-size:-*\d{1,}px/;
                    if (-1 == n.match(o)[0].indexOf(a)) {
                      var l = n.replace(o, "font-size:" + a + "px");
                      r.innerHTML = l;
                    }
                  }
                },
                selectedDefaultVtt: function () {
                  var e = this.videoPlayData.defaultvtt;
                  if (
                    e !== undefined &&
                    this.videoPlayData.vtt2 !== undefined
                  ) {
                    this.parentEle
                      .querySelector(
                        "#" + { 0: "vtt", 1: "vtt2", 2: "bilingual" }[e]
                      )
                      .click();
                  }
                },
                handleClickCloseVtt: function () {
                  var t = this;
                  this.parentEle.querySelector("#closeVtt").onclick =
                    function () {
                      for (var e = 0; e < t.vttBtns.length; e++)
                        t.vttBtns[e].className = "";
                      this.classList.add("active");
                      for (e = 0; e < t.oVideo.textTracks.length; e++)
                        t.oVideo.textTracks[e].mode = "disabled";
                      (t.switchVttBox.style.visibility = "hidden"),
                        (t.switchVttBox.style.top = "150%"),
                        (t.isCloseVtt = !0);
                    };
                },
                selectVttItem: function (e) {
                  if (this.vttBtns) {
                    var t = e || this.trackIdx;
                    this.vttBtns[t].click();
                  }
                },
                closeVtt: function () {
                  this.parentEle.querySelector("#closeVtt").click();
                },
                getIsCloseVttFlag: function () {
                  return this.isCloseVtt;
                },
                resetVttDom: function () {
                  for (
                    var e = this.oVideo.getElementsByTagName("track"),
                      t = e.length - 1;
                    0 <= t;
                    t--
                  ) {
                    var i = e[t];
                    i.parentNode.removeChild(i);
                  }
                  var s = $.queryEle("#switchVttBox", this.parentEle);
                  s && s.parentNode.removeChild(s),
                    (this.switchVttBtn.style.display = "block"),
                    (this.trackIdx = this.videoPlayData.defaultvtt);
                },
              }),
                (l.CCH5PlayerMore = function (e, t, i, s, a, r) {
                  var o = new n(e, t, i, s, a, r);
                  return {
                    init: function () {
                      o.init();
                    },
                    hide: function () {
                      o.hide();
                    },
                    show: function () {
                      o.show();
                    },
                    destroy: function () {
                      var e = !0,
                        t = !1,
                        i = undefined;
                      try {
                        for (
                          var s, a = (0, X["default"])(o.intervals);
                          !(e = (s = a.next()).done);
                          e = !0
                        ) {
                          var r = s.value;
                          l.clearInterval(r);
                        }
                      } catch (n) {
                        (t = !0), (i = n);
                      } finally {
                        try {
                          !e && a["return"] && a["return"]();
                        } finally {
                          if (t) throw i;
                        }
                      }
                    },
                    initSwitchVtt: function () {
                      o.initSwitchVtt();
                    },
                    resetVttDom: function () {
                      o.resetVttDom();
                    },
                    setVttFontSize: function (e) {
                      o.setVttFontSize(e);
                    },
                    isBackupPlay: function () {
                      return o.isUseBackupUrl;
                    },
                    switchUrl: function () {
                      o.handelSwitchUrl();
                    },
                    getIsShowSwitchMode: function () {
                      return o.getIsShowSwitchMode();
                    },
                    getIsShowSwitchUrl: function () {
                      return o.getIsShowSwitchUrl();
                    },
                    getIsShowSwitchVtt: function () {
                      return o.getIsShowSwitchVtt();
                    },
                    selectVttItem: function (e) {
                      o.selectVttItem(e);
                    },
                    closeVtt: function () {
                      o.closeVtt();
                    },
                  };
                });
            }
          })(window),
          (function (o) {
            var l = o.document;
            if ("function" != typeof CCH5PlayerMouseMenu) {
              var c = { index: 1e3, content: null, name: "复制视频网络信息" },
                n = function n(e, t, i, s, a) {
                  (this.playerApi = e),
                    (this.params = t),
                    (this.videoPlayData = i),
                    (this.parentEle = s),
                    (this.zIndex = a),
                    (this.ccPlayerNetInfo = new CCH5PlayerNetInfo(
                      e,
                      t,
                      i,
                      s,
                      a
                    )),
                    this.ccPlayerNetInfo.init();
                };
              (n.prototype = {
                constructor: n,
                init: function () {
                  var e = this.videoPlayData.config;
                  (this.hasMouseMenu =
                    e &&
                    e.mousemenu &&
                    e.mousemenu.mousemenu &&
                    e.mousemenu.mousemenu.length),
                    (this.showMouseMenu =
                      (e && e.mousemenu && e.mousemenu.showmousemenu) || 0),
                    this.createView(),
                    this.addEvents();
                },
                createView: function () {
                  this.hasMouseMenu
                    ? (this.menuData =
                        this.videoPlayData.config.mousemenu.mousemenu)
                    : (this.menuData = []),
                    this.params.showNetworkInfoMenu + "" != "false" &&
                      this.menuData.push(c);
                  for (var e = "", t = 0; t < this.menuData.length; t++)
                    ("#playerVersion#" != this.menuData[t].name &&
                      !/^V\d+.\d+.\d+[a-z]*版本$/.test(
                        this.menuData[t].name
                      )) ||
                      (this.menuData[t].name =
                        "V" + this.playerApi.getPlayerVersion() + "版本"),
                      (e +=
                        '<li data-mouse-index="' +
                        this.menuData[t].index +
                        '"' +
                        (this.menuData[t].content
                          ? "data-target"
                          : "cc-no-target") +
                        ">" +
                        this.menuData[t].name +
                        "</li>");
                  var i =
                      '<div class="ccH5MouseMenu" id="ccH5MouseMenu"><ul>' +
                      e +
                      "</ul></div>",
                    s = l.createElement("div");
                  this.parentEle.appendChild(s),
                    (s.outerHTML = i),
                    (this.menuBox = $.queryEle(
                      "#ccH5MouseMenu",
                      this.parentEle
                    )),
                    (this.menuBox.style.zIndex = this.zIndex),
                    (this.menuUl = $.queryEle("ul", this.menuBox)),
                    this.menuData.length || (this.menuBox.style.padding = 0);
                },
                addEvents: function () {
                  var n = this;
                  $.addListener(this.parentEle, "contextmenu", function (e) {
                    var t = e || o.event;
                    if ((t.preventDefault(), 1 == n.showMouseMenu)) {
                      n.menuBox.style.display = "block";
                      var i = t.clientX,
                        s = t.clientY,
                        a = o.innerWidth,
                        r = o.innerHeight;
                      (n.menuBox.style.left = Math.min(a - 202, i) + "px"),
                        (n.menuBox.style.top = Math.min(r - 230, s) + "px");
                    }
                  }),
                    $.addListener(this.menuUl, "click", function (e) {
                      var t = e.target.getAttribute("data-mouse-index");
                      if (t == c.index)
                        return n.hide(), void n.ccPlayerNetInfo.show();
                      for (var i = null, s = 0; s < n.menuData.length; s++)
                        if (t === n.menuData[s].index) {
                          i = n.menuData[s];
                          break;
                        }
                      if (t && i.content) {
                        var a = i.content;
                        -1 === i.content.indexOf("http://") &&
                          -1 === i.content.indexOf("https://") &&
                          (a = "//" + a);
                        var r = l.createElement("a");
                        r.setAttribute("href", a),
                          r.setAttribute("target", "_blank"),
                          l.body.appendChild(r),
                          r.click(),
                          l.body.removeChild(r);
                      } else e.preventDefault();
                    }),
                    $.addListener(this.parentEle, "click", function (e) {
                      "" !== e.target.getAttribute("cc-no-target") && n.hide();
                    }),
                    $.addListener(o, "click", function (e) {
                      "" !== e.target.getAttribute("cc-no-target") && n.hide();
                    });
                },
                hide: function () {
                  "block" === this.menuBox.style.display &&
                    (this.menuBox.style.display = "none");
                },
              }),
                (o.CCH5PlayerMouseMenu = function (e, t, i, s, a) {
                  var r = new n(e, t, i, s, a);
                  return {
                    init: function () {
                      r.init();
                    },
                  };
                });
            }
          })(window),
          (function (n) {
            var o = n.document;
            if ("function" != typeof CCH5PlayerNetInfo) {
              var l = function l(e, t, i, s, a) {
                (this.playerApi = e),
                  (this.params = t),
                  (this.videoPlayData = i),
                  (this.parentEle = s),
                  (this.zIndex = a),
                  (this.ip = "");
              };
              (l.prototype = {
                constructor: l,
                init: function () {
                  this.createView(), this.addEvents();
                },
                createView: function () {
                  var e = o.createElement("div");
                  this.parentEle.appendChild(e),
                    (e.outerHTML =
                      '<div class="ccH5MouseMenu ccH5NetInfo" style="position: absolute;" id="netInfoLayer"><div class="close-btn"></div><ul></ul></div>'),
                    (this.netInfoLayer = $.queryEle(
                      "#netInfoLayer",
                      this.parentEle
                    )),
                    (this.netInfoLayer.style.zIndex = this.zIndex),
                    (this.closeBtn = $.queryEle(
                      ".close-btn",
                      this.netInfoLayer
                    )),
                    (this.listUl = $.queryEle("ul", this.netInfoLayer));
                },
                addEvents: function () {
                  var e = this;
                  $.addListener(this.closeBtn, "click", function () {
                    e.hide();
                  });
                },
                hide: function () {
                  this.netInfoLayer.style.display = "none";
                },
                show: function () {
                  var e = this,
                    t =
                      "<li>vid: " +
                      this.params.vid +
                      '\n</li><li>网络ip: <span id="netIp">' +
                      this.ip +
                      "</span>\n</li><li>浏览器版本: " +
                      $.getOSAndBrowser() +
                      "\n</li><li>域名节点: " +
                      this.getPlayDomainNode() +
                      "\n</li><li>播放器版本: " +
                      this.getShowPlayerVersion() +
                      "\n</li><li>时间: " +
                      this.getFormatDate() +
                      "\n</li>";
                  if (
                    ((this.listUl.innerHTML = t),
                    (this.netInfoLayer.style.display = "block"),
                    $.copyContent(this.listUl.textContent, function () {
                      e.showCopySuccessTip();
                    }),
                    "" == this.ip)
                  ) {
                    var i = this;
                    (n.ipCallback = function (e) {
                      e &&
                        e.ip &&
                        ((i.ip = e.ip),
                        ($.queryEle("#netIp", i.netInfoLayer).innerHTML = i.ip),
                        $.copyContent(i.listUl.textContent, function () {
                          i.showCopySuccessTip();
                        }));
                    }),
                      $.loadScript("https://www.taobao.com/help/getip.php");
                  }
                },
                getPlayDomainNode: function () {
                  var e = this.playerApi.getVideoSrc(),
                    t = e.indexOf("//") + 2,
                    i = e.indexOf("/", t);
                  return i < t ? "" : e.substring(t, i);
                },
                getFormatDate: function () {
                  var e = new Date();
                  return (
                    e.getFullYear() +
                    "-" +
                    (e.getMonth() + 1 < 10
                      ? "0" + (e.getMonth() + 1)
                      : e.getMonth() + 1) +
                    "-" +
                    (e.getDate() < 10 ? "0" + e.getDate() : e.getDate()) +
                    " " +
                    (e.getHours() < 10 ? "0" + e.getHours() : e.getHours()) +
                    ":" +
                    (e.getMinutes() < 10
                      ? "0" + e.getMinutes()
                      : e.getMinutes()) +
                    ":" +
                    (e.getSeconds() < 10
                      ? "0" + e.getSeconds()
                      : e.getSeconds())
                  );
                },
                getShowPlayerVersion: function () {
                  return "V" + this.playerApi.getPlayerVersion();
                },
                showCopySuccessTip: function () {
                  var e = "tip_" + new Date().getTime(),
                    t = '<div id="' + e + '" class="ccH5Msg">复制成功</div>',
                    i = o.createElement("div");
                  this.parentEle.appendChild(i),
                    (i.outerHTML = t),
                    (i = $.queryEle("#" + e, this.parentEle));
                  var s = 1,
                    a = parseInt(2e3 / ((s - 0.2) / 0.01)),
                    r = setInterval(function () {
                      if ((s -= 0.01) < 0.2)
                        return (
                          n.clearInterval(r), void i.parentNode.removeChild(i)
                        );
                      "undefined" != typeof i.style.opacity &&
                        (i.style.opacity = s);
                    }, a);
                },
              }),
                (n.CCH5PlayerNetInfo = function (e, t, i, s, a) {
                  var r = new l(e, t, i, s, a);
                  return {
                    init: function () {
                      r.init();
                    },
                    show: function () {
                      r.show();
                    },
                  };
                });
            }
          })(window),
          (function (h) {
            var u = h.document;
            if ("function" != typeof CCH5PlayerNote) {
              var s = "//crius-play.bokecc.com",
                r = function r(e, t, i, s, a) {
                  (this.playerApi = e),
                    (this.params = t),
                    (this.videoPlayData = i),
                    (this.parentEle = s),
                    (this.zIndex = a);
                };
              (r.prototype = {
                constructor: r,
                intervals: [],
                totalLength: 1e4,
                type: 0,
                asc: !1,
                pageSize: 10,
                sortBy: 1,
                startId: 0,
                currNoteId: 0,
                delelteNotId: 0,
                list: [],
                msgType: 1,
                msgInfo: {
                  1: { title: "提示", content: "确认删除笔记？" },
                  2: {
                    title: "提交共享笔记",
                    content:
                      "共享提交后将会进行审核，提交后的笔记将不可再编辑，是否继续提交？",
                  },
                  3: {
                    title: "提交共享笔记",
                    content: "存在共享待审核笔记，请等待审核完成后重试。",
                  },
                },
                posX: 0,
                posY: 0,
                zoomSize: [
                  { width: "412px", height: "614px" },
                  { width: "800px", height: "610px" },
                ],
                init: function () {},
                handleSort: function () {
                  (this.startId = 0),
                    (this.isFinished = !1),
                    (this.sharedList.innerHTML = ""),
                    (this.list = []),
                    this.getListData();
                },
                changeTab: function () {
                  (this.asc = !1), (this.sortBy = 1), this.handleSort();
                },
                getListData: function () {
                  var i = this;
                  this.isLoading = !0;
                  var e = {
                    asc: this.asc,
                    size: this.type ? 100 : this.pageSize,
                    sortBy: this.sortBy,
                  };
                  this.startId && (e.startId = this.startId);
                  var t = this.type ? "/note/my/shared" : "/note/shared";
                  $.ajax({
                    url: s + t,
                    type: "GET",
                    data: e,
                    ops: {
                      token: this.params.ccNoteToken,
                      success: function (e) {
                        if (((i.isLoading = !1), e && JSON.parse(e))) {
                          var t = JSON.parse(e) || [];
                          t.length && (i.startId = t[t.length - 1].encryptId),
                            i.startId && !t.length && (i.isFinished = !0),
                            (i.list = i.list.concat(t)),
                            i.createItemView(t);
                        }
                      },
                      fail: function (e) {
                        (i.isLoading = !1), console.log("error: ", e);
                      },
                    },
                  });
                },
                getNoteData: function () {
                  var i = this;
                  $.ajax({
                    url: s + "/note/last/content",
                    type: "GET",
                    ops: {
                      token: this.params.ccNoteToken,
                      success: function (e) {
                        if (e && JSON.parse(e) && JSON.parse(e).content) {
                          var t = JSON.parse(e).content;
                          (i.quill.root.innerHTML = t), (i.preContent = t);
                        }
                      },
                      fail: function (e) {
                        console.log("error: ", e);
                      },
                    },
                  });
                },
                handleSaveNote: function (t) {
                  var i = this;
                  if (t || this.preContent !== this.quill.root.innerHTML) {
                    var e = this.quill.root.innerHTML;
                    $.ajax({
                      url: s + "/note/save",
                      type: "POST",
                      data: { content: e },
                      ops: {
                        token: this.params.ccNoteToken,
                        success: function (e) {
                          t && i.showToast("保存成功"),
                            (i.preContent = i.quill.root.innerHTML);
                        },
                        fail: function (e) {
                          console.log("error: ", e);
                        },
                      },
                    });
                  }
                },
                handleShareNote: function () {
                  var e = this,
                    t = this.quill.root.innerHTML;
                  $.ajax({
                    url: s + "/note/share",
                    type: "POST",
                    data: { content: t },
                    ops: {
                      token: this.params.ccNoteToken,
                      success: function () {
                        e.showToast("共享已提交"), e.type && e.changeTab();
                      },
                      fail: function (e) {
                        console.log("error: ", e);
                      },
                    },
                  });
                },
                handleDeleteNote: function () {
                  var t = this;
                  $.ajax({
                    url: s + "/note/del",
                    type: "POST",
                    data: { notId: this.delelteNotId },
                    ops: {
                      token: this.params.ccNoteToken,
                      success: function () {
                        var e = $.queryEle(
                          "#note-item-" + t.delelteNotId,
                          t.sharedList
                        );
                        e && e.remove(), t.list.length <= 1 && t.createNoData();
                      },
                      fail: function (e) {
                        console.log("error: ", e);
                      },
                    },
                  });
                },
                checkNoteStatus: function () {
                  var t = this;
                  $.ajax({
                    url: s + "/note/checking/id",
                    type: "GET",
                    ops: {
                      token: this.params.ccNoteToken,
                      success: function (e) {
                        e
                          ? e &&
                            JSON.parse(e) &&
                            JSON.parse(e).encryptId &&
                            (t.msgType = 3)
                          : (t.msgType = 2),
                          t.showMsg();
                      },
                      fail: function (e) {
                        console.log("error: ", e);
                      },
                    },
                  });
                },
                showToast: function (e, t) {
                  if (!$.queryEle(".ccNoteToastMask", this.parentEle)) {
                    var i = t || 1500,
                      s =
                        '<div class="ccNoteCommonMask ccNoteToastMask"><div class="ccNoteToast"><div>' +
                        e +
                        "</div></div></div>",
                      a = u.createElement("div");
                    this.msgParentBox.appendChild(a), (a.outerHTML = s);
                    var r = $.queryEle(".ccNoteToastMask", this.parentEle),
                      n = setTimeout(function () {
                        r.remove(), clearTimeout(n);
                      }, i);
                  }
                },
                createMsgView: function (e) {
                  this.isCreatedMsg = !0;
                  var t =
                      '<div class="ccNoteCommonMask ccNoteMsgMask" style="display:none;"><div class="ccNoteMsgBox"><div class="ccNoteMsgHeader"><div class="ccNoteMsgTitle">' +
                      e.title +
                      '</div><i class="ccNoteOpt ccNoteMsgClose"></i></div><div class="ccNoteMsgContent">' +
                      e.content +
                      '</div><div class="ccNoteMsgBtns"><div class="ccNoteMsgCancel">取消</div><div class="ccNoteMsgOK">确定</div></div></div></div>',
                    i = u.createElement("div");
                  this.msgParentBox.appendChild(i),
                    (i.outerHTML = t),
                    (this.msgBox = $.queryEle(
                      ".ccNoteMsgMask",
                      this.parentEle
                    )),
                    (this.msgTitle = $.queryEle(
                      ".ccNoteMsgTitle",
                      this.msgBox
                    )),
                    (this.msgContent = $.queryEle(
                      ".ccNoteMsgContent",
                      this.msgBox
                    )),
                    (this.cancelListMsg = $.queryEle(
                      ".ccNoteMsgCancel",
                      this.msgBox
                    )),
                    (this.closeListMsg = $.queryEle(
                      ".ccNoteMsgClose",
                      this.msgBox
                    )),
                    (this.confirmListMsg = $.queryEle(
                      ".ccNoteMsgOK",
                      this.msgBox
                    ));
                },
                createListView: function () {
                  this.isCreatedList = !0;
                  var e = u.createElement("div");
                  this.parentEle.appendChild(e),
                    (e.outerHTML =
                      '<div class="ccH5Note ccH5NoteListBox"><div class="ccNoteHeader ccNoteTabs"><span class="ccNoteTabItem active" data-type="0">共享笔记<i class="ccNoteNotice"><em class="ccNoteNoticeIcon"></em><em class="ccNoteNoticeTip">此共享笔记已经经过审核</em></i></span><span class="ccNoteTabItem" data-type="1">我的共享</span><i class="ccNoteOpt ccNoteClose"></i></div><div class="ccNoteSort"><span data-sort="1">按时间<i></i><em></em></span><span data-sort="2">按字数<i></i><em></em></span></div><div id="ccNoteList"></div><div class="ccH5NoteBtns"><div class="ccNoteBtn" id="doNoteBtn">记笔记</div></div>'),
                    (this.ccNoteListBox = $.queryEle(
                      ".ccH5NoteListBox",
                      this.parentEle
                    )),
                    (this.ccNoteListBox.style.zIndex = this.zIndex),
                    this.setPosStyle(this.ccNoteListBox),
                    (this.noteListHeader = $.queryEle(
                      ".ccNoteHeader",
                      this.ccNoteListBox
                    )),
                    (this.tabItems = $.queryEleAll(
                      ".ccNoteTabs>.ccNoteTabItem",
                      this.ccNoteListBox
                    )),
                    (this.sortItems = $.queryEleAll(
                      ".ccNoteSort>span",
                      this.ccNoteListBox
                    )),
                    (this.sharedList = $.queryEle(
                      "#ccNoteList",
                      this.ccNoteListBox
                    )),
                    (this.doNoteBtn = $.queryEle(
                      "#doNoteBtn",
                      this.ccNoteListBox
                    )),
                    (this.closeList = $.queryEle(
                      ".ccNoteClose",
                      this.ccNoteListBox
                    ));
                },
                createItemView: function (e) {
                  if (this.startId || !e || e.length) {
                    for (var t = "", i = 0; i < e.length; i++)
                      t +=
                        '<div class="ccNoteItem" id="note-item-' +
                        e[i].encryptId +
                        '" data-id="' +
                        e[i].encryptId +
                        '"><div class="ccNoteItemHeader" data-id="' +
                        e[i].encryptId +
                        '"><div class="ccNoteItemAvatar" data-id="' +
                        e[i].encryptId +
                        '"></div><div class="ccNoteItemInfo" data-id="' +
                        e[i].encryptId +
                        '"><div data-id="' +
                        e[i].encryptId +
                        '">' +
                        (e[i].studentName || "-") +
                        '</div><div data-id="' +
                        e[i].encryptId +
                        '">' +
                        e[i].shareTime +
                        '</div></div></div><div class="ccNoteItemDesc" data-id="' +
                        e[i].encryptId +
                        '">' +
                        (e[i].content &&
                          e[i].content
                            .replace(/<[^>]+>/g, "")
                            .replace(/\s*/g, "")) +
                        '</div><div class="ccNoteItemFooter" data-id="' +
                        e[i].encryptId +
                        '"><div class="ccNoteDelete" data-id="' +
                        e[i].encryptId +
                        '">删除</div><div class="ccNoteGoDetails" data-id="' +
                        e[i].encryptId +
                        '">查看全部笔记</div></div><div class="ccNoteSharedStatus ccNoteSharedStatus' +
                        e[i].status +
                        '" data-id="' +
                        e[i].encryptId +
                        '"></div></div>';
                    this.sharedList.innerHTML += t;
                  } else this.createNoData();
                },
                createNoteView: function () {
                  this.isCreatedNoteDom = !0;
                  var e = u.createElement("div");
                  this.parentEle.appendChild(e),
                    (e.outerHTML =
                      '<div class="ccH5Note ccH5NoteDown"><div class="ccNoteHeader"><div class="ccNoteHeaderLeft"><i class="ccNoteOpt ccNoteBack"></i><span>记笔记</span>  </div><div class="ccNoteHeaderRight"><span style="vertical-align:top;">自动保存（每30秒）</span><i class="ccNoteOpt ccNoteZoomIn"></i><i class="ccNoteOpt ccNoteClose"></i>  </div></div><div class="ccSaveNote"></div><div id="ccNoteEditor"></div><div class="ccH5NoteBtns"><div class="ccNoteBtn" id="shareNoteBtn">共享笔记</div></div><div class="ccNoteInsertModal" style="display:none;"><div class="ccNoteInsertBox"><div class="ccNoteInsertTime"><span></span><em>00:00:20</em></div><i class="ccNoteOpt ccNoteInsertClose"></i><div class="ccNoteInsertArea"><textarea class="ccNoteInsertText" placeholder="写点什么（可选）" maxlength="50"></textarea><div class="ccNoteLen ccNoteInsertLen"><span>0</span>/50</div></div><div class="ccNoteInsertBtns"><div class="ccNoteInsertCancel">取消</div><div class="ccNoteInsertOK">确定</div></div></div></div>'),
                    (this.ccNoteDown = $.queryEle(
                      ".ccH5NoteDown",
                      this.parentEle
                    )),
                    (this.ccNoteDown.style.zIndex = this.zIndex),
                    this.setPosStyle(this.ccNoteDown),
                    (this.noteDownHeader = $.queryEle(
                      ".ccNoteHeader",
                      this.ccNoteDown
                    )),
                    (this.ccNoteEditor = $.queryEle(
                      "#ccNoteEditor",
                      this.ccNoteDown
                    )),
                    (this.noteDownBack = $.queryEle(
                      ".ccNoteBack",
                      this.ccNoteDown
                    )),
                    (this.noteZoom = $.queryEle(
                      ".ccNoteZoomIn",
                      this.ccNoteDown
                    )),
                    (this.closeNoteDown = $.queryEle(
                      ".ccNoteClose",
                      this.ccNoteDown
                    )),
                    (this.saveNote = $.queryEle(
                      ".ccSaveNote",
                      this.ccNoteDown
                    )),
                    (this.shareBtn = $.queryEle(
                      "#shareNoteBtn",
                      this.ccNoteDown
                    )),
                    (this.ccNoteInsertModal = $.queryEle(
                      ".ccNoteInsertModal",
                      this.ccNoteDown
                    )),
                    (this.tagTime = $.queryEle(
                      ".ccNoteInsertTime>em",
                      this.ccNoteInsertModal
                    )),
                    (this.tagText = $.queryEle(
                      ".ccNoteInsertText",
                      this.ccNoteInsertModal
                    )),
                    (this.closeInsertTime = $.queryEle(
                      ".ccNoteInsertClose",
                      this.ccNoteInsertModal
                    )),
                    (this.cancelInsertTime = $.queryEle(
                      ".ccNoteInsertCancel",
                      this.ccNoteInsertModal
                    )),
                    (this.saveInsertTime = $.queryEle(
                      ".ccNoteInsertOK",
                      this.ccNoteInsertModal
                    )),
                    (this.insertLength = $.queryEle(
                      ".ccNoteInsertLen>span",
                      this.ccNoteInsertModal
                    ));
                },
                createDetailsView: function (e) {
                  this.isCreatedDetailsDom = !0;
                  var t =
                      '<div class="ccH5Note ccH5NoteDetails"><div class="ccNoteHeader"><div class="ccNoteHeaderLeft"><i class="ccNoteOpt ccNoteBack"></i><span>共享笔记详情</span>  </div><div class="ccNoteHeaderRight"><i class="ccNoteOpt ccNoteZoomIn"></i><i class="ccNoteOpt ccNoteClose"></i>  </div></div><div class="ccNoteDetailsBox"><div class="ccNoteItemHeader"><div class="ccNoteItemAvatar"></div><div class="ccNoteItemInfo"><div class="ccNoteDetailName">' +
                      (e.studentName || "-") +
                      '</div><div class="ccNoteDetailTime">' +
                      e.shareTime +
                      '</div></div></div><div class="ccNoteDetails">' +
                      e.content +
                      "</div></div>",
                    i = u.createElement("div");
                  this.parentEle.appendChild(i),
                    (i.outerHTML = t),
                    (this.noteDetails = $.queryEle(
                      ".ccH5NoteDetails",
                      this.parentEle
                    )),
                    (this.noteDetails.style.zIndex = this.zIndex),
                    this.setPosStyle(this.noteDetails),
                    (this.noteDetailsHeader = $.queryEle(
                      ".ccNoteHeader",
                      this.noteDetails
                    )),
                    (this.detailsBack = $.queryEle(
                      ".ccNoteBack",
                      this.noteDetails
                    )),
                    (this.closeDetails = $.queryEle(
                      ".ccNoteClose",
                      this.noteDetails
                    )),
                    (this.detailsZoom = $.queryEle(
                      ".ccNoteZoomIn",
                      this.noteDetails
                    )),
                    (this.detailName = $.queryEle(
                      ".ccNoteDetailName",
                      this.noteDetails
                    )),
                    (this.detailTime = $.queryEle(
                      ".ccNoteDetailTime",
                      this.noteDetails
                    )),
                    (this.detailContent = $.queryEle(
                      ".ccNoteDetails",
                      this.noteDetails
                    ));
                },
                createNoData: function () {
                  this.sharedList.innerHTML =
                    '<div class="ccNoteNoData"><div class="ccNoteNoDataImg"></div><div>暂无共享笔记，快去共享吧~</div></div>';
                },
                createDragEvents: function (e, c) {
                  if (e) {
                    var d = this;
                    e.onmousedown = function (e) {
                      e = e || h.event;
                      var s = u.documentElement.clientWidth,
                        a = u.documentElement.clientHeight,
                        r = c.clientWidth,
                        n = c.clientHeight,
                        o = e.clientX - c.offsetLeft,
                        l = e.clientY - c.offsetTop;
                      return (
                        (u.onmousemove = function (e) {
                          var t = (e = e || event).clientX - o,
                            i = e.clientY - l;
                          t < 0 ? (t = 0) : s - r < t && (t = s - r),
                            i < 0 ? (i = 0) : a - n < i && (i = a - n),
                            (c.style.left = t + "px"),
                            (c.style.top = i + "px"),
                            (d.posX = t),
                            (d.posY = i);
                        }),
                        !(u.onmouseup = function () {
                          (u.onmousemove = null), (u.onmouseup = null);
                        })
                      );
                    };
                  }
                },
                addMsgEvents: function () {
                  var e = this;
                  $.addListener(this.confirmListMsg, "click", function () {
                    1 === e.msgType
                      ? e.handleDeleteNote()
                      : 2 === e.msgType && e.handleShareNote(),
                      e.hideMsg();
                  }),
                    $.addListener(this.cancelListMsg, "click", function () {
                      e.hideMsg();
                    }),
                    $.addListener(this.closeListMsg, "click", function () {
                      e.hideMsg();
                    });
                },
                addListEvents: function () {
                  var i = this;
                  if (!this.isAddedEvent) {
                    (this.isAddedEvent = !0),
                      (this.sharedListHeight =
                        this.sharedList.clientHeight || 0),
                      (this.handleListScroll = this.onListScroll.bind(this)),
                      $.addListener(
                        this.sharedList,
                        "scroll",
                        this.handleListScroll
                      );
                    for (
                      var s = this.tabItems,
                        a = this,
                        e = function e(t) {
                          s[t].onclick = function () {
                            if (!a.isLoading) {
                              for (var e = 0; e < s.length; e++)
                                s[e].classList.remove("active");
                              this.classList.add("active"),
                                (a.type = 1 * s[t].getAttribute("data-type")),
                                1 === a.type
                                  ? a.ccNoteListBox.classList.add(
                                      "ccNoteMyShared"
                                    )
                                  : a.ccNoteListBox.classList.remove(
                                      "ccNoteMyShared"
                                    ),
                                a.changeTab();
                            }
                          };
                        },
                        t = 0;
                      t < s.length;
                      t++
                    )
                      e(t);
                    $.addListener(this.ccNoteListBox, "click", function (e) {
                      var t = e.target.getAttribute("data-id");
                      if (t) {
                        if ("ccNoteDelete" === e.target.className)
                          return (
                            (i.delelteNotId = t),
                            (i.msgType = 1),
                            void i.showMsg()
                          );
                        (i.currNoteId = t), i.showDetaiils(), i.hideNoteList();
                      }
                    }),
                      $.addListener(this.closeList, "click", function () {
                        i.hideNoteList();
                      }),
                      $.addListener(this.closeList, "click", function () {
                        i.hideNoteList();
                      }),
                      $.addListener(this.doNoteBtn, "click", function () {
                        i.hideNoteList(), i.showNoteDown();
                      });
                    var r = this.sortItems,
                      n = function n(s) {
                        r[s].onclick = function (e) {
                          for (var t = 0; t < r.length; t++)
                            r[s] !== r[t] &&
                              r[t].className &&
                              (r[t].className = "");
                          var i = e.currentTarget.getAttribute("data-sort");
                          (a.sortBy = 1 * i),
                            this.classList.contains("active")
                              ? this.classList.contains("asc")
                                ? (this.classList.remove("asc"),
                                  this.classList.add("desc"),
                                  (a.asc = !1),
                                  a.handleSort())
                                : this.classList.contains("desc") &&
                                  (this.classList.remove("active", "desc"),
                                  (a.asc = !1))
                              : (this.classList.add("active", "asc"),
                                (a.asc = !0),
                                a.handleSort());
                        };
                      };
                    for (t = 0; t < r.length; t++) n(t);
                  }
                },
                onListScroll: function () {
                  var e = this;
                  if (this.sharedList) {
                    var t = this.sharedList.scrollTop;
                    0 === this.sharedListHeight &&
                      (this.sharedListHeight = this.sharedList.clientHeight),
                      this.sharedList.scrollHeight - t - this.sharedListHeight <
                        80 &&
                        !this.isLoading &&
                        !this.isFinished &&
                        ((this.isLoading = !0),
                        setTimeout(function () {
                          e.getListData();
                        }, 500));
                  }
                },
                addDetailsEvents: function () {
                  var t = this;
                  $.addListener(this.noteDetails, "click", function (e) {
                    t.handleJumpToPlay(e);
                  }),
                    $.addListener(this.closeDetails, "click", function () {
                      t.hideDetaiils();
                    }),
                    $.addListener(this.detailsZoom, "click", function (e) {
                      e.stopPropagation(),
                        t.handleZoom(t.detailsZoom, t.noteDetails);
                    }),
                    $.addListener(this.detailsBack, "click", function () {
                      t.hideDetaiils(), t.showNoteList();
                    });
                },
                addNoteEvents: function () {
                  var i = this;
                  $.addListener(this.ccNoteEditor, "click", function (e) {
                    i.handleJumpToPlay(e);
                  }),
                    $.addListener(this.closeNoteDown, "click", function () {
                      i.hideNoteDown();
                    }),
                    $.addListener(this.noteZoom, "click", function (e) {
                      e.stopPropagation(),
                        i.handleZoom(i.noteZoom, i.ccNoteDown);
                    }),
                    $.addListener(this.noteDownBack, "click", function () {
                      i.hideNoteDown(), i.showNoteList();
                    }),
                    $.addListener(this.tagText, "input", function (e) {
                      i.insertLength.innerHTML = (e.target.value || "").length;
                    }),
                    $.addListener(this.saveNote, "click", function () {
                      i.handleSaveNote(!0);
                    }),
                    $.addListener(this.shareBtn, "click", function () {
                      i.inputLength < 100
                        ? i.showToast("100字以上的笔记才有机会共享哦~")
                        : i.checkNoteStatus();
                    }),
                    $.addListener(this.closeInsertTime, "click", function () {
                      i.hideInsertModal();
                    }),
                    $.addListener(this.cancelInsertTime, "click", function () {
                      i.hideInsertModal();
                    }),
                    $.addListener(this.saveInsertTime, "click", function () {
                      i.quill.focus();
                      var e = i.getActiveIndex(),
                        t =
                          i.quill.getLeaf(e - 1)[0] &&
                          i.quill.getLeaf(e - 1)[0].statics.blotName;
                      "break" === t && (i.quill.deleteText(e - 1, 1), e--),
                        "text" === t &&
                          i.quill.getLeaf(e)[0] &&
                          "text" === i.quill.getLeaf(e)[0].statics.blotName &&
                          (i.quill.insertText(e, "\n"), e++),
                        i.quill.insertEmbed(e, "tag", {
                          second: i.insertTime || 0,
                          tagTime: i.tagTime.innerHTML,
                          tagText: i.tagText.value,
                        }),
                        i.quill.insertText(e + 1, "\n"),
                        i.quill.setSelection(e + 2),
                        i.hideInsertModal();
                    });
                },
                createEditor: function () {
                  var e = this;
                  if (Quill) {
                    var t = ["14px", "17px", "20px", "22px", "24px"];
                    (Quill.imports["attributors/style/size"].whitelist = t),
                      Quill.register(Quill.imports["attributors/style/size"]);
                    var i,
                      s = Quill.imports.parchment,
                      a =
                        ((i = s.Embed),
                        (0, p["default"])(r, i),
                        (0, l["default"])(r, null, [
                          {
                            key: "create",
                            value: function (e) {
                              var t = (0, d["default"])(
                                r.__proto__ || (0, n["default"])(r),
                                "create",
                                this
                              ).call(this, e);
                              t.setAttribute("contenteditable", "false");
                              var i = u.createElement("span"),
                                s = u.createElement("span");
                              return (
                                i.classList.add("ctime-tag-txt"),
                                s.classList.add("ctime-tag-desc"),
                                (i.innerHTML = e.tagTime),
                                (s.innerHTML = e.tagText),
                                (t.dataset.second = e.second),
                                (t.dataset.time = e.tagTime),
                                (t.dataset.desc = e.tagText),
                                t.appendChild(i),
                                t.appendChild(s),
                                t
                              );
                            },
                          },
                          {
                            key: "value",
                            value: function (e) {
                              return {
                                second: Number(e.dataset.second || 0),
                                tagTime: e.dataset.time || "",
                                tagText: e.dataset.desc || "",
                              };
                            },
                          },
                        ]),
                        r);
                    (a.blotName = "tag"),
                      (a.tagName = "CTIME"),
                      (a.className = "ql-ctime"),
                      Quill.register(a),
                      (this.quill = new Quill("#ccNoteEditor", {
                        modules: {
                          toolbar: {
                            container: [
                              { size: t },
                              "bold",
                              "italic",
                              "underline",
                              { list: "bullet" },
                              { list: "ordered" },
                              "insert-tag",
                            ],
                            handlers: {
                              "insert-tag": function () {
                                (e.insertTime =
                                  e.playerApi.getCurrentTime() || 0),
                                  (e.tagTime.innerHTML = $.timeFormat(
                                    e.insertTime
                                  )),
                                  e.showInsertModal();
                              },
                            },
                          },
                        },
                        placeholder: "写点什么...",
                        theme: "snow",
                      })),
                      (this.handleTextChange = this.onTextChange.bind(this)),
                      this.quill.on("text-change", this.handleTextChange);
                  }
                  function r() {
                    return (
                      (0, o["default"])(this, r),
                      (0, c["default"])(
                        this,
                        (r.__proto__ || (0, n["default"])(r)).apply(
                          this,
                          arguments
                        )
                      )
                    );
                  }
                },
                onTextChange: function (e, t, i) {
                  var s = this.quill.root.innerHTML;
                  if (
                    ((s = s.replace(/<[^>]+>/g, "").replace(/\s*/g, "")),
                    (this.inputLength = (s && s.length) || 0),
                    this.inputLength > this.totalLength)
                  ) {
                    this.showToast("已达字数上限", 2500);
                    var a = this.inputLength - this.totalLength;
                    this.quill.deleteText(this.totalLength + 4, a);
                  }
                },
                getActiveIndex: function () {
                  return (this.quill.getSelection() || {}).index
                    ? (this.quill.getSelection() || {}).index
                    : this.quill.getLength();
                },
                handleJumpToPlay: function (e) {
                  var t = e.target.className,
                    i = e.target;
                  ("ctime-tag-txt" !== t && "ctime-tag-desc" !== t) ||
                    (i = e.target.parentNode),
                    "ql-ctime" === i.className &&
                      i.dataset.second !== undefined &&
                      (this.playerApi.setCurrentTime(i.dataset.second),
                      this.playerApi.videoPlay());
                },
                handleZoom: function (e, t) {
                  e.classList.contains("ccNoteZoomIn")
                    ? (e.classList.add("ccNoteZoomOut"),
                      e.classList.remove("ccNoteZoomIn"),
                      (t.style.width = this.zoomSize[1].width),
                      (t.style.height = this.zoomSize[1].height))
                    : (e.classList.add("ccNoteZoomIn"),
                      e.classList.remove("ccNoteZoomOut"),
                      (t.style.width = this.zoomSize[0].width),
                      (t.style.height = this.zoomSize[0].height));
                },
                setPosStyle: function (e) {
                  e &&
                    ((e.style.left = this.posX + "px"),
                    (e.style.top = this.posY + "px"));
                },
                showNoteList: function () {
                  if (!this.posX && !this.posY) {
                    var e = this.parentEle.getBoundingClientRect();
                    if (e && 550 <= e.width && 720 <= e.height) {
                      var t = $.queryEle(".ccH5NoteBtn", this.parentEle),
                        i = t && t.getBoundingClientRect();
                      i &&
                        ((this.posX = i.left - 170), (this.posY = i.top - 670));
                    } else {
                      var s = u.documentElement.clientWidth,
                        a = u.documentElement.clientHeight;
                      (this.posX = s - 412 - 80), (this.posY = (a - 614) / 2);
                    }
                  }
                  this.isCreatedList
                    ? (this.setPosStyle(this.ccNoteListBox),
                      (this.ccNoteListBox.style.display = "block"))
                    : (this.createListView(),
                      this.addListEvents(),
                      this.getListData(),
                      this.createDragEvents(
                        this.noteListHeader,
                        this.ccNoteListBox
                      )),
                    (this.msgParentBox = this.ccNoteListBox);
                },
                hideNoteList: function () {
                  this.ccNoteListBox.style.display = "none";
                },
                showNoteDown: function () {
                  var t = this;
                  if (this.isCreatedNoteDom)
                    this.setPosStyle(this.ccNoteDown),
                      (this.ccNoteDown.style.display = "block");
                  else {
                    if (!h.Quill) return;
                    try {
                      this.createNoteView(),
                        this.addNoteEvents(),
                        this.createEditor(),
                        this.createDragEvents(
                          this.noteDownHeader,
                          this.ccNoteDown
                        );
                    } catch (e) {
                      console.log(e);
                    }
                  }
                  (this.msgParentBox = this.ccNoteDown),
                    this.getNoteData(),
                    clearInterval(this.autoSaveTimer),
                    (this.autoSaveTimer = setInterval(function () {
                      t.handleSaveNote();
                    }, 3e4)),
                    this.intervals.push(this.autoSaveTimer);
                },
                hideNoteDown: function () {
                  (this.ccNoteDown.style.display = "none"),
                    clearInterval(this.autoSaveTimer);
                },
                showDetaiils: function () {
                  for (var e = {}, t = 0; t < this.list.length; t++)
                    if (this.currNoteId === this.list[t].encryptId) {
                      e = this.list[t];
                      break;
                    }
                  this.isCreatedDetailsDom
                    ? ((this.detailName.innerHTML = e.studentName || "-"),
                      (this.detailTime.innerHTML = e.shareTime),
                      (this.detailContent.innerHTML = e.content),
                      this.setPosStyle(this.noteDetails),
                      (this.noteDetails.style.display = "block"))
                    : (this.createDetailsView(e),
                      this.addDetailsEvents(),
                      this.createDragEvents(
                        this.noteDetailsHeader,
                        this.noteDetails
                      ));
                },
                hideDetaiils: function () {
                  this.noteDetails.style.display = "none";
                },
                showInsertModal: function () {
                  (this.insertLength.innerHTML = 0),
                    (this.ccNoteInsertModal.style.display = "block");
                },
                hideInsertModal: function () {
                  (this.ccNoteInsertModal.style.display = "none"),
                    (this.tagText.value = ""),
                    (this.tagTime.innerHTML = ""),
                    (this.insertTime = 0);
                },
                showMsg: function () {
                  if (this.msgInfo[this.msgType]) {
                    var e = this.msgInfo[this.msgType];
                    this.isCreatedMsg
                      ? ((this.msgTitle.innerHTML = e.title),
                        (this.msgContent.innerHTML = e.content),
                        this.msgBox &&
                          this.msgParentBox.appendChild(this.msgBox))
                      : (this.createMsgView(e), this.addMsgEvents()),
                      (this.msgBox.style.display = "block");
                  }
                },
                hideMsg: function () {
                  this.msgBox.style.display = "none";
                },
                removeQuillEvents: function () {
                  this.quill.off("text-change", this.handleTextChange);
                },
              }),
                (h.CCH5PlayerNote = function (e, t, i, s, a) {
                  var o = new r(e, t, i, s, a);
                  return {
                    init: function () {
                      o.init();
                    },
                    showNote: function () {
                      o.showNoteList();
                    },
                    clearIntervals: function () {
                      o.removeQuillEvents();
                      var e = !0,
                        t = !1,
                        i = undefined;
                      try {
                        for (
                          var s, a = (0, X["default"])(o.intervals);
                          !(e = (s = a.next()).done);
                          e = !0
                        ) {
                          var r = s.value;
                          h.clearInterval(r);
                        }
                      } catch (n) {
                        (t = !0), (i = n);
                      } finally {
                        try {
                          !e && a["return"] && a["return"]();
                        } finally {
                          if (t) throw i;
                        }
                      }
                    },
                  };
                });
            }
          })(window),
          (function (e) {
            var o = e.document;
            if ("function" != typeof CCH5PlayList) {
              var t;
              ((t = o.createElement("link")).href =
                "//p.bokecc.com/css/html5player/playlist.css"),
                (t.rel = "stylesheet"),
                (t.type = "text/css"),
                o.getElementsByTagName("head")[0].appendChild(t);
              var n = function n(e, t, i, s, a) {
                (this.playerApi = e),
                  (this.params = t),
                  (this.zIndex = i),
                  (this.parentEle = s),
                  (this.currPlayer = a);
              };
              (n.prototype = {
                currPlayer: null,
                expandNum: 0,
                init: function () {
                  this.getPlayList();
                },
                getPlayList: function () {
                  var i = this,
                    e = {
                      userid: this.params.siteid,
                      listid: this.params.listid,
                    };
                  $.ccJsonp({
                    url: "//p.bokecc.com/servlet/geth5playlist",
                    data: e,
                    success: function (e) {
                      if (e && 1 === e.result) {
                        if (e.videolist && e.videolist.length < 1)
                          return void i.showErrTip("播放列表为空");
                        var t = i.params.vid || e.videolist[0].videoid;
                        e.playtype && (i.params.playtype = e.playtype + ""),
                          i.createNewPlayer(t),
                          i.createView(e.videolist, t),
                          i.addEvents();
                      } else i.showErrTip("获取播放列表失败");
                    },
                    error: function () {},
                  });
                },
                showErrTip: function (e) {
                  this.parentEle.innerHTML = $.createTips(this.params, e);
                },
                createView: function (e, t) {
                  e = e || [];
                  for (var i = "", s = 0; s < e.length; s++) {
                    var a = e[s];
                    i +=
                      '<li class="ccH5-plist-li ' +
                      (t === a.videoid ? "selected-item" : "") +
                      '" id="' +
                      a.videoid +
                      '">        <div class="plist-li-left">             <img src="' +
                      a.imgurl +
                      '">             <span>' +
                      a.playtime +
                      '</span>         </div>       <div class="plist-li-right">' +
                      a.title +
                      "</div>   </li>";
                  }
                  var r =
                      '<div class="ccH5PlayListBox"><div class="ccH5-plist-title">列表</div><div class="close-plist-btn"></div><div class="ccH5-plist-box"><ul class="ccH5-plist-ul" id="ccH5PlayList">' +
                      i +
                      "</ul></div></div>",
                    n = o.createElement("div");
                  this.parentEle.appendChild(n),
                    (n.outerHTML = r),
                    (this.playListBox = $.queryEle(
                      ".ccH5PlayListBox",
                      this.parentEle
                    )),
                    (this.playListBox.style.zIndex = this.zIndex);
                },
                addEvents: function () {
                  var t = this;
                  (this.playListUl = $.queryEle(
                    "#ccH5PlayList",
                    this.parentEle
                  )),
                    (this.playListItems =
                      this.playListUl.getElementsByTagName("li")),
                    (this.closeListBtn = $.queryEle(
                      ".close-plist-btn",
                      this.parentEle
                    )),
                    $.addListener(this.closeListBtn, "click", function (e) {
                      t.hidePlayList();
                    }),
                    this.initListEvent();
                },
                initListEvent: function () {
                  for (
                    var s = this, a = this.playListItems, e = 0;
                    e < a.length;
                    e++
                  )
                    $.addListener(a[e], "click", function (e) {
                      for (var t = this.id, i = 0; i < a.length; i++)
                        a[i].classList.remove("selected-item");
                      this.classList.add("selected-item"),
                        s.hidePlayList(),
                        s.createNewPlayer(t, !0);
                    });
                },
                createNewPlayer: function (e, t) {
                  this.currPlayer.switchVideo(e, t);
                },
                setListStyle: function () {
                  if (
                    "2" == this.params.playListStyle &&
                    this.playListItems &&
                    !this.playListUl.classList.contains("ccPlayListStyle2")
                  ) {
                    this.playListUl.classList.add("ccPlayListStyle2");
                    for (var e = this.playListItems, t = 0; t < e.length; t++)
                      (e[t].style.height = "auto"),
                        ($.queryEle(".plist-li-left", e[t]).style.display =
                          "none");
                  }
                },
                showPlayList: function () {
                  "1" == this.params.playListExpand &&
                    (this.setDefaultExpandStyle(), this.expandNum++),
                    this.setListStyle(),
                    this.playListBox.classList.remove("ccH5PlayListHide"),
                    this.playListBox.classList.add("ccH5PlayListShow"),
                    this.currPlayer &&
                      this.currPlayer.ccPlayerCtrol &&
                      this.currPlayer.ccPlayerCtrol.hide();
                },
                hidePlayList: function () {
                  "1" == this.params.playListExpand &&
                    this.setDefaultExpandStyle(),
                    this.playListBox.classList.remove("ccH5PlayListShow"),
                    this.playListBox.classList.add("ccH5PlayListHide"),
                    this.currPlayer &&
                      this.currPlayer.ccPlayerCtrol &&
                      this.currPlayer.ccPlayerCtrol.show();
                },
                isShowing: function () {
                  return !!this.playListBox.classList.contains(
                    "ccH5PlayListShow"
                  );
                },
                fullScreenFixedList: function (e) {
                  this.playListBox.style.position = e ? "fixed" : "absolute";
                },
                setDefaultExpandStyle: function () {
                  this.expandNum < 1
                    ? (this.playListBox.style.transition = "none")
                    : (this.playListBox.style.transition = "all .3s ease-in");
                },
                getListExpandNum: function () {
                  return this.expandNum;
                },
              }),
                (e.CCH5PlayList = function (e, t, i, s, a) {
                  var r = new n(e, t, i, s, a);
                  return {
                    init: function () {
                      r.init();
                    },
                    isShowing: function () {
                      return r.isShowing();
                    },
                    showPlayList: function () {
                      r.showPlayList();
                    },
                    hidePlayList: function () {
                      r.hidePlayList();
                    },
                    fullScreenFixedList: function (e) {
                      r.fullScreenFixedList(e);
                    },
                    getListExpandNum: function () {
                      return r.getListExpandNum();
                    },
                  };
                });
            }
          })(window),
          (function (l) {
            if ("function" != typeof CCH5PlayerAdPic) {
              var t = function t(e) {
                (this.playerApi = e.playerApi),
                  (this.params = e.params),
                  (this.videoPlayData = e.videoPlayData),
                  (this.parentEle = e.parentEle),
                  (this.zIndex = e.zIndex),
                  (this.intervals = []);
              };
              (t.prototype = {
                constructor: t,
                init: function () {
                  if (
                    ((this.adPic = this.params.adPic),
                    this.adPic && this.adPic.url)
                  ) {
                    var e = $.queryEle(".ccPicAdBox", this.parentEle);
                    e && e.parentNode.removeChild(e), this.checkUrl();
                  }
                },
                checkUrl: function () {
                  var e = this,
                    t = this.adPic.url;
                  if (
                    /https?:\/\/.+/.test(t) &&
                    /\.(gif|jpg|jpeg|png|GIF|JPG|PNG|JPEG)$/.test(t)
                  ) {
                    var i = new Image();
                    (i.src = t),
                      (i.onload = function () {
                        e.createView(), e.initEvents();
                      }),
                      (i.onerror = function () {
                        console.error("图片加载失败");
                      });
                  } else console.error("图片地址格式不符合规范");
                },
                createView: function () {
                  var e = this.adPic.posX || 0,
                    t = this.adPic.posY || 0,
                    i = this.adPic.size || 10,
                    s = document.createElement("div");
                  this.parentEle.appendChild(s);
                  var a =
                    '<div class="ccPicAdBox"style="z-index:' +
                    this.zIndex +
                    ";left:" +
                    e +
                    "%;bottom:" +
                    t +
                    "%;width:" +
                    i +
                    '%"><img src="' +
                    this.adPic.url +
                    '"/><div style="position:absolute;right:0;top:0;height:20px;line-height:20px;"><div class="ccPicAdShowTime"><span>0</span>s</div><div class="closePicWait" style="display:none;"><span class="closeWaitTime">0</span>秒后可关闭</div><div class="closePicAd" style="display:none;"></div></div></div>';
                  (s.outerHTML = a),
                    (this.adBoxEle = $.queryEle(".ccPicAdBox", this.parentEle)),
                    (this.adPicEle = $.queryEle("img", this.adBoxEle)),
                    (this.picAdShowTimeEle = $.queryEle(
                      ".ccPicAdShowTime",
                      this.adBoxEle
                    )),
                    (this.showCountTime = $.queryEle(
                      "span",
                      this.picAdShowTimeEle
                    )),
                    (this.closePicWaitEle = $.queryEle(
                      ".closePicWait",
                      this.adBoxEle
                    )),
                    (this.closeWaitTime = $.queryEle(
                      "span",
                      this.closePicWaitEle
                    )),
                    (this.closePicAd = $.queryEle(
                      ".closePicAd",
                      this.adBoxEle
                    ));
                },
                initEvents: function () {
                  var t = this;
                  this.adPic.changeVideoStatus + "" == "true" &&
                    this.playerApi.toggleVideoPlay(),
                    $.addListener(this.adPicEle, "click", function () {
                      if (t.adPic.linkUrl) {
                        var e = t.playerApi.getCurrentTime() || 0;
                        return (
                          $.invokeWindow(
                            "on_CCH5player_publicityJump",
                            t.params.vid,
                            e,
                            t.adPic.linkUrl
                          ),
                          void l.open(t.adPic.linkUrl, "target")
                        );
                      }
                      t.playerApi.toggleVideoPlay();
                    }),
                    $.addListener(this.adPicEle, "touchend", function () {
                      if (t.adPic.linkUrl) {
                        var e = t.playerApi.getCurrentTime() || 0;
                        return (
                          $.invokeWindow(
                            "on_CCH5player_publicityJump",
                            t.params.vid,
                            e,
                            t.adPic.linkUrl
                          ),
                          void l.open(t.adPic.linkUrl, "target")
                        );
                      }
                      t.playerApi.toggleVideoPlay();
                    }),
                    $.addListener(this.adPicEle, "mousedown", function (e) {
                      e.preventDefault();
                    }),
                    0 < this.adPic.showTime && this.picAdShowTime(),
                    this.adPic.canClose + "" != "false" &&
                      ($.addListener(this.closePicAd, "click", function () {
                        t.handleClosePicAd(!0);
                      }),
                      $.addListener(this.closePicAd, "touchend", function () {
                        t.handleClosePicAd(!0);
                      }),
                      0 < this.adPic.closeTime
                        ? this.waitPicClose()
                        : (this.closePicAd.style.display = "block"));
                },
                handleClosePicAd: function (e) {
                  try {
                    clearInterval(this.adPicTimer);
                  } catch (i) {}
                  try {
                    clearInterval(this.waitCloseTimer);
                  } catch (i) {}
                  this.adBoxEle.style.display = "none";
                  var t = this.playerApi.getCurrentTime() || 0;
                  $.invokeWindow(
                    "on_CCH5player_publicityClose",
                    this.params.vid,
                    t,
                    e
                  );
                },
                picAdShowTime: function () {
                  var e = this;
                  this.adPicTimer && clearInterval(this.adPicTimer);
                  var t = this.adPic.showTime;
                  (this.showCountTime.innerHTML = t),
                    $.isIPad() ||
                      $.isMoble() ||
                      (this.picAdShowTimeEle.style.display = "block"),
                    (this.adPicCountDown = function () {
                      t--,
                        0 == (e.showCountTime.innerHTML = t) &&
                          (clearInterval(e.adPicTimer), e.handleClosePicAd(!1));
                    }),
                    (this.adPicTimer = setInterval(this.adPicCountDown, 1e3)),
                    this.intervals.push(this.adPicTimer);
                },
                waitPicClose: function () {
                  var e = this;
                  this.waitCloseTimer && clearInterval(this.waitCloseTimer);
                  var t = this.adPic.closeTime;
                  (this.closeWaitTime.innerHTML = t),
                    $.isIPad() ||
                      $.isMoble() ||
                      (this.closePicWaitEle.style.display = "block"),
                    (this.closeWaitCountDown = function () {
                      t--,
                        0 == (e.closeWaitTime.innerHTML = t) &&
                          (clearInterval(e.waitCloseTimer),
                          (e.closePicWaitEle.style.display = "none"),
                          (e.closePicAd.style.display = "block"));
                    }),
                    (this.waitCloseTimer = setInterval(
                      this.closeWaitCountDown,
                      1e3
                    )),
                    this.intervals.push(this.waitCloseTimer);
                },
              }),
                (l.CCH5PlayerAdPic = function (e) {
                  var o = new t(e);
                  return {
                    init: function () {
                      o.init();
                    },
                    destroy: function () {
                      var e = !0,
                        t = !1,
                        i = undefined;
                      try {
                        for (
                          var s, a = (0, X["default"])(o.intervals);
                          !(e = (s = a.next()).done);
                          e = !0
                        ) {
                          var r = s.value;
                          l.clearInterval(r);
                        }
                      } catch (n) {
                        (t = !0), (i = n);
                      } finally {
                        try {
                          !e && a["return"] && a["return"]();
                        } finally {
                          if (t) throw i;
                        }
                      }
                    },
                  };
                });
            }
          })(window),
          (function (e) {
            e.document;
            if ("function" != typeof CCH5PlayerPwd) {
              var n = function n(e, t, i, s, a, r) {
                (this.playerApi = e),
                  (this.params = t),
                  (this.videoPlayData = i),
                  (this.parentEle = s),
                  (this.zIndex = a),
                  (this.playerTrack = r);
              };
              (n.prototype = {
                constructor: n,
                init: function () {
                  $.loadScript("https://p.bokecc.com/js/player/cc_md5.js"),
                    this.createView(),
                    this.addEvents();
                },
                createView: function () {
                  var e = this.params.height,
                    t = this.params.width;
                  isNaN(this.params.height) || (e = this.params.height + "px"),
                    isNaN(this.params.width) || (t = this.params.width + "px");
                  var i =
                    "<div style='width:" +
                    t +
                    "; height:" +
                    e +
                    "; min-height:280px; background: #000;color: #fff; text-align: center; font-size: 14px; display:table;'>\t<div id='pwdBox' style='display:table-cell; vertical-align: middle; font-size:20px;'>\t\t<div id='pwdTips' style='display:none;font-size:14px;'></div>\t\t<input id='ccPwd' style='border-radius:4px;-webkit-appearance: none; padding:6px;font-size:15px;border:0;height:20px;' type='password' autocomplete='new-password' placeholder='请输入密码'>\t\t<input id='ccSubmit' style='border-radius:4px;-webkit-appearance: none; padding:7px 12px;border:0;background:#e1742d;color:#fff;height:32px;box-sizing: border-box;font-size:13.3333px' type='submit' value='确认'>\t</div></div>";
                  this.parentEle.innerHTML = i;
                },
                addEvents: function () {
                  var i = $.queryEle("#pwdTips", this.parentEle),
                    e = $.queryEle("#ccSubmit", this.parentEle),
                    s = $.queryEle("#pwdBox", this.parentEle),
                    a = this,
                    r = 2;
                  e.onclick = function () {
                    var e = $.queryEle("#ccPwd", a.parentEle).value;
                    if (hex_md5(e) === a.videoPlayData.passwd)
                      (a.videoPlayData.passwdValid = !0),
                        a.playerApi.readyH5Play();
                    else if (((i.style.display = "block"), 0 == r)) {
                      s.innerHTML =
                        "<span>您已多次尝试失败，请联系管理员</span>";
                      var t = a.playerApi.getCurrentCopy().playurl;
                      a.playerTrack.sendStartPlayState({
                        code: 403,
                        cdn: $.getUrlDomain(t),
                        data: { msg: "密码错误" },
                      });
                    } else
                      (i.innerHTML =
                        "<span style='color:#ff2944;'>密码错误，请重新输入</span>（剩余" +
                        r +
                        "次机会）"),
                        r--;
                  };
                },
              }),
                (e.CCH5PlayerPwd = n);
            }
          })(window),
          (P = window),
          (A = P.document),
          (E = function E(e, t, i, s, a) {
            (this.playerApi = e),
              (this.params = t),
              (this.videoPlayData = i),
              (this.parentEle = s),
              (this.zIndex = a);
          }),
          (E.prototype = {
            ans: {},
            answerd: {},
            isQuestionsShow: !1,
            init: function () {
              this.registerVideoListener();
            },
            registerVideoListener: function () {
              var e = this;
              this.playerApi.registerVideoEvent("timeupdate", function () {
                e.videoPlayData.questions != undefined &&
                  (e.monitorQuestion(), e.queryAnswer());
              });
            },
            monitorQuestion: function () {
              for (
                var e = this,
                  d = this,
                  h = this.videoPlayData,
                  t = this.playerApi.getCurrentTime(),
                  i = parseInt(t),
                  s = 0;
                s < h.questions.length;
                s++
              ) {
                var u, a, r, p, n, o, l, y, m;
                if (
                  !this.isQuestionsShow &&
                  !this.ans["ans_" + h.questions[s].id] &&
                  h.questions[s].showTime == i
                )
                  !(function () {
                    var c = function c() {
                      for (var e = 0; e < arguments.length; e++)
                        return arguments[e].toString() == arguments[e + 1];
                    };
                    for (
                      u = s,
                        e.playerApi.videoPause(),
                        e.playerApi.isEnterFullscreenInWeChat() &&
                          alert("请退出全屏回答问题"),
                        a =
                          A.fullscreenElement ||
                          A.msFullscreenElement ||
                          A.mozFullScreenElement ||
                          A.webkitFullscreenElement ||
                          !1,
                        r =
                          $.isIPhone() &&
                          $.isWeixin() &&
                          e.playerApi.displayingFullscreen(),
                        (a || r || e.playerApi.getOrientation()) &&
                          e.playerApi.exitFullScreen(),
                        e.isQuestionsShow = !0,
                        e.playerApi.setOuterApiProps({
                          isQuestionsShow: e.isQuestionsShow,
                        }),
                        $.invokeWindow(
                          "on_player_qa_show",
                          h.questions[u],
                          h.vid
                        ),
                        p = [],
                        o = n = 0;
                      o < h.questions[s].answers.length;
                      o++
                    )
                      1 == (l = h.questions[s].answers[o].right) && n++,
                        p.push(l);
                    1 < n ? e.checkboxSelect(s) : e.radioSelect(s),
                      setTimeout(function () {
                        e.setListToBottom();
                      }, 500),
                      ($.queryEle("#ccQuestionSubmit", e.parentEle).onclick =
                        function () {
                          for (
                            var e,
                              t = $.queryEle(
                                ".ccInputBox",
                                d.parentEle
                              ).getElementsByTagName("input"),
                              i = [],
                              s = [],
                              a = 0,
                              r = 0;
                            r < t.length;
                            r++
                          )
                            i.push(t[r].checked),
                              t[r].checked &&
                                (s.push(h.questions[u].answers[r].id),
                                s.join(","),
                                a++);
                          if (0 != a) {
                            if (c(p, i))
                              d.createRightAnswer(
                                h.questions[u].explainInfo,
                                u
                              ),
                                (e = 1);
                            else {
                              var n = h.questions[u].explainInfo;
                              h.questions[u].createTime &&
                                (n = h.questions[u].explainWrongAns || ""),
                                d.createWrongAnswer(n, u),
                                (e = 0);
                            }
                            if (
                              ($.invokeWindow(
                                "on_player_qa_result",
                                {
                                  question: h.questions[u],
                                  answersId: s,
                                  isRight: e,
                                },
                                h.vid
                              ),
                              !h.questions[u].createTime)
                            ) {
                              var o = new Date().getTime(),
                                l = d.params.customerId || "";
                              (l = l && encodeURIComponent(l)),
                                d.answerd["first_" + h.questions[u].id] ||
                                  ($.ccJsonp({
                                    url: "https://ikkyu.bokecc.com/servlet/report",
                                    data: {
                                      vid: d.params.vid,
                                      qid: h.questions[u].id,
                                      answer: s,
                                      status: e,
                                      terminal_type: 30,
                                      time: o,
                                      customid: l,
                                    },
                                    success: function (e) {},
                                  }),
                                  (d.answerd["first_" + h.questions[u].id] =
                                    !0),
                                  d.playerApi.setOuterApiProps({
                                    answerd: d.answerd,
                                  }));
                            }
                          } else d.createQuestionTips();
                        }),
                      (y = $.queryEle("#ccJumpOver", e.parentEle)),
                      (m = $.queryEle(".ccQuestionDiv", d.parentEle)),
                      h.questions[s].jump || (y.style.display = "none"),
                      (y.onclick = function () {
                        d.parentEle.removeChild(m),
                          d.playerApi.videoPlay(),
                          (d.ans["ans_" + h.questions[u].id] = !0),
                          (d.isQuestionsShow = !1),
                          d.playerApi.setOuterApiProps({
                            isQuestionsShow: d.isQuestionsShow,
                            ans: d.ans,
                          }),
                          $.invokeWindow(
                            "on_player_qa_skip",
                            h.questions[u],
                            h.vid
                          );
                      });
                  })();
              }
            },
            queryAnswer: function () {
              for (
                var e = this.videoPlayData,
                  t = this.playerApi.getCurrentTime(),
                  i = 0,
                  s = 0;
                s < e.questions.length;
                s++
              )
                if (!this.ans["ans_" + e.questions[s].id]) {
                  var a = e.questions[s].showTime;
                  if (a < t) {
                    i = a;
                    break;
                  }
                }
              0 < i &&
                (this.playerApi.videoPause(), this.playerApi.setCurrentTime(i));
            },
            createQuestionBox: function (e) {
              return (
                "<div class='ccQuestionBox'>  <img class='ccQuestionBg' src='" +
                ($.isIPhone() || $.isAndroid()
                  ? "https://p.bokecc.com/images/questionimage/ccquestionbgphone.jpg"
                  : "https://p.bokecc.com/images/questionimage/ccquestionbg.png") +
                "'>  <div class='ccQuestion'>  \t<div class='ccProblem'><span class='ccCheckTips fl'>单选</span><span class='fl tim'>题目:</span><span class='text fl'>" +
                e +
                "</span></div>     <ul class='ccQuestionList'></ul>     <div class='ccInputBox'></div>  </div>  <input id='ccJumpOver' style='width: 8%' type='button' value='跳过'>  <input id='ccQuestionSubmit' style='width: 8%' type='submit' value='提交'></div>"
              );
            },
            radioSelect: function (e) {
              var t = this.videoPlayData,
                i = A.createElement("div"),
                s = t.questions[e].content.replace(
                  /\{([^\{\}]*)\}/g,
                  '<img src="$1"/>'
                );
              (s = s.replace(
                /<img src="http:\/\/([^\"]+)bokecc.com([^\"]+)"\/>/g,
                '<img src="https://$1bokecc.com$2"/>'
              )),
                (i.className = "ccQuestionDiv"),
                (i.innerHTML = this.createQuestionBox(s)),
                this.parentEle.appendChild(i),
                ($.queryEle(".ccQuestionDiv", this.parentEle).style.zIndex =
                  this.zIndex),
                "true" == this.params.ctrolShowing &&
                  (($.queryEle(
                    ".ccQuestionBox",
                    this.parentEle
                  ).style.minWidth = "480px"),
                  ($.queryEle(".ccQuestionBg", this.parentEle).style.margin =
                    "0"));
              for (var a = 0; a < t.questions[e].answers.length; a++) {
                var r = $.queryEle(".ccQuestionList", this.parentEle),
                  n = $.queryEle(".ccInputBox", this.parentEle),
                  o = A.createElement("li"),
                  l = t.questions[e].answers[a].content.replace(
                    /\{([^\{\}]*)\}/g,
                    '<img src="$1"/>'
                  );
                (l = l.replace(
                  /<img src="http:\/\/([^\"]+)bokecc.com([^\"]+)"\/>/g,
                  '<img src="https://$1bokecc.com$2"/>'
                )),
                  (o.innerHTML =
                    "<i class='radioBg'></i><span>" + l + "</span>"),
                  r.appendChild(o);
                var c = A.createElement("input");
                (c.type = "radio"), n.appendChild(c);
              }
              var d = r.getElementsByTagName("li"),
                h = n.getElementsByTagName("input");
              for (a = 0; a < d.length; a++)
                (d[a].index = a),
                  (d[a].onclick = function () {
                    for (var e = 0; e < d.length; e++)
                      d[e].classList.remove("active"),
                        h[e].removeAttribute("checked");
                    this.classList.add("active"),
                      h[this.index].setAttribute("checked", !0);
                  });
              $.queryEle(".ccCheckTips", i).innerText = "单选";
            },
            checkboxSelect: function (e) {
              var t = this.videoPlayData,
                i = A.createElement("div"),
                s = t.questions[e].content.replace(
                  /\{([^\{\}]*)\}/g,
                  '<img src="$1"/>'
                );
              (s = s.replace(
                /<img src="http:\/\/([^\"]+)bokecc.com([^\"]+)"\/>/g,
                '<img src="https://$1bokecc.com$2"/>'
              )),
                (i.className = "ccQuestionDiv"),
                (i.innerHTML = this.createQuestionBox(s)),
                this.parentEle.appendChild(i),
                ($.queryEle(".ccQuestionDiv", this.parentEle).style.zIndex =
                  this.zIndex),
                "true" == this.params.ctrolShowing &&
                  (($.queryEle(
                    ".ccQuestionBox",
                    this.parentEle
                  ).style.minWidth = "480px"),
                  ($.queryEle(".ccQuestionBg", this.parentEle).style.margin =
                    "0"));
              for (var a = 0; a < t.questions[e].answers.length; a++) {
                var r = $.queryEle(".ccQuestionList", this.parentEle),
                  n = $.queryEle(".ccInputBox", this.parentEle),
                  o = A.createElement("li"),
                  l = t.questions[e].answers[a].content.replace(
                    /\{([^\{\}]*)\}/g,
                    '<img src="$1"/>'
                  );
                (l = l.replace(
                  /<img src="http:\/\/([^\"]+)bokecc.com([^\"]+)"\/>/g,
                  '<img src="https://$1bokecc.com$2"/>'
                )),
                  (o.innerHTML =
                    "<i class='checkboxBg'></i><span>" + l + "</span>"),
                  r.appendChild(o);
                var c = A.createElement("input");
                (c.type = "checkbox"), n.appendChild(c);
              }
              var d = r.getElementsByTagName("li"),
                h = n.getElementsByTagName("input");
              for (a = 0; a < d.length; a++)
                (d[a].index = a),
                  (d[a].onclick = function () {
                    1 == this.classList.contains("active")
                      ? (this.classList.remove("active"),
                        h[this.index].removeAttribute("checked"))
                      : (this.classList.add("active"),
                        h[this.index].setAttribute("checked", !0));
                  });
              $.queryEle(".ccCheckTips", i).innerText = "多选";
            },
            createQuestionTips: function () {
              var e = $.queryEle(".ccQuestionBox", this.parentEle),
                t = A.createElement("div");
              (t.className = "ccTips"),
                (t.innerHTML =
                  "<span>请选择答案</span><div class='dark'></div>"),
                e.appendChild(t),
                setTimeout(function () {
                  e.removeChild(t);
                }, 3e3);
            },
            createWrongAnswer: function (e, t) {
              var i,
                s = this.videoPlayData,
                a = this,
                r = $.queryEle(".ccQuestionDiv", this.parentEle),
                n = $.queryEle(".ccQuestionBox", this.parentEle),
                o = A.createElement("div");
              (i =
                $.isIPhone() || $.isAndroid()
                  ? "https://p.bokecc.com/images/questionimage/wronganswerphone.jpg"
                  : "https://p.bokecc.com/images/questionimage/wronganswer.png"),
                (o.className = "ccWrongTips"),
                (o.innerHTML =
                  "<div class='dark'></div><div class='ccWrongAnswer'><img src='" +
                  i +
                  "' alt=''><div class='txt'><p>" +
                  (e || "") +
                  "</p></div><input type='submit' id='wrongBtn' value='继续播放'><input style='display:none' type='submit' id='questionscontinueBtn' value='继续播放'></div>"),
                n.appendChild(o);
              var l = $.queryEle("#wrongBtn", this.parentEle),
                c = s.questions[t].backSecond,
                d = t,
                h = s.questions[t].keepPlay;
              if (-1 != c && ((l.value = "回看知识点"), h)) {
                var u = $.queryEle("#questionscontinueBtn", this.parentEle);
                (u.style.display = "block"),
                  (u.onclick = function () {
                    a.parentEle.removeChild(r),
                      a.playerApi.videoPlay(),
                      (a.ans["ans_" + s.questions[d].id] = !0),
                      (a.isQuestionsShow = !1),
                      a.playerApi.setOuterApiProps({
                        isQuestionsShow: a.isQuestionsShow,
                        ans: a.ans,
                      });
                  });
              }
              l.onclick = function () {
                -1 == c
                  ? (a.parentEle.removeChild(r),
                    a.playerApi.videoPlay(),
                    (a.ans["ans_" + s.questions[d].id] = !0),
                    (a.isQuestionsShow = !1),
                    a.playerApi.setOuterApiProps({
                      isQuestionsShow: a.isQuestionsShow,
                      ans: a.ans,
                    }))
                  : (a.parentEle.removeChild(r),
                    a.playerApi.setCurrentTime(c),
                    h && (a.ans["ans_" + s.questions[d].id] = !0),
                    a.playerApi.videoPlay(),
                    (a.isQuestionsShow = !1),
                    a.playerApi.setOuterApiProps({
                      isQuestionsShow: a.isQuestionsShow,
                      ans: a.ans,
                    }),
                    $.invokeWindow(
                      "on_player_qa_review",
                      s.questions[t],
                      0,
                      s.vid
                    ));
              };
            },
            createRightAnswer: function (e, t) {
              var i,
                s = this,
                a = this.videoPlayData,
                r = $.queryEle(".ccQuestionDiv", this.parentEle),
                n = $.queryEle(".ccQuestionBox", this.parentEle),
                o = A.createElement("div"),
                l = a.questions[t].backSecond;
              (i =
                $.isIPhone() || $.isAndroid()
                  ? "https://p.bokecc.com/images/questionimage/rightanswerphone.jpg"
                  : "https://p.bokecc.com/images/questionimage/rightanswer.png"),
                (o.className = "ccRightTips"),
                (o.innerHTML =
                  "<div class='dark'></div><div class='ccRightAnswer'><img src='" +
                  i +
                  "' alt=''><div class='txt'><p>" +
                  e +
                  "</p></div><input style='display:none' type='submit' id='questionBackBtn' value='回看知识点'><input type='submit' id='rightBtn' value='继续播放'></div>"),
                n.appendChild(o);
              var c = t;
              if (
                (($.queryEle("#rightBtn", this.parentEle).onclick =
                  function () {
                    s.parentEle.removeChild(r),
                      s.playerApi.videoPlay(),
                      (s.ans["ans_" + a.questions[c].id] = !0),
                      (s.isQuestionsShow = !1),
                      s.playerApi.setOuterApiProps({
                        isQuestionsShow: s.isQuestionsShow,
                        ans: s.ans,
                      });
                  }),
                -1 != l)
              ) {
                var d = $.queryEle("#questionBackBtn", this.parentEle);
                (d.style.display = "block"),
                  (d.onclick = function () {
                    s.parentEle.removeChild(r),
                      s.playerApi.setCurrentTime(l),
                      s.playerApi.videoPlay(),
                      (s.ans["ans_" + a.questions[c].id] = !0),
                      (s.isQuestionsShow = !1),
                      s.playerApi.setOuterApiProps({
                        isQuestionsShow: s.isQuestionsShow,
                        ans: s.ans,
                      }),
                      $.invokeWindow(
                        "on_player_qa_review",
                        a.questions[t],
                        1,
                        a.vid
                      );
                  });
              }
            },
            setListToBottom: function () {
              var i = this,
                s = $.queryEle(".ccQuestion", this.parentEle);
              if (s) {
                var a = s.clientHeight,
                  r = s.scrollHeight,
                  n = 10;
                if (s.scrollTop + a <= r)
                  var o = setInterval(function l() {
                    var e = s.scrollTop;
                    if (((s.scrollTop = s.scrollTop + n), s.scrollTop - e < n))
                      return void clearInterval(o);
                    if (Math.ceil(s.scrollTop) + a >= r) {
                      clearInterval(o);
                      var t = $.queryEle(".ccQuestion", i.parentEle);
                      t.scrollTop + t.clientHeight <= t.scrollHeight &&
                        r != t.scrollHeight &&
                        i.setListToBottom();
                    }
                  }, 10);
              }
            },
            getIsQuestionsShow: function () {
              return this.isQuestionsShow;
            },
            setQA: function () {
              var e = $.queryEle(".ccQuestionDiv", this.parentEle);
              e && e.parentNode.removeChild(e),
                (this.answerd = {}),
                (this.ans = {}),
                (this.isQuestionsShow = !1);
            },
            viewPointQA: function (e) {
              var t = $.queryEle(".ccQuestionDiv", this.parentEle);
              t && t.parentNode.removeChild(t), (this.isQuestionsShow = !1);
              var i = this.videoPlayData.questions;
              this.queryAnswer();
              for (var s = 0; s < i.length; s++)
                if (i[s].showTime >= parseInt(e)) {
                  var a = i[s].id;
                  this.ans["ans_" + a] = !1;
                }
            },
          }),
          (P.CCH5PlayerQA = function (e, t, i, s, a) {
            var r = new E(e, t, i, s, a);
            return {
              init: function () {
                r.init();
              },
              queryAnswer: function () {
                r.queryAnswer();
              },
              getIsQuestionsShow: function () {
                return r.getIsQuestionsShow();
              },
              setQA: function () {
                r.setQA();
              },
              viewPointQA: function (e) {
                r.viewPointQA(e);
              },
            };
          }),
          (function (e) {
            var o = e.document;
            if ("function" != typeof CCH5PlayerRightMenu) {
              var i = function i(e) {
                (this.playerApi = e.playerApi),
                  (this.params = e.params),
                  (this.videoPlayData = e.videoPlayData),
                  (this.parentEle = e.parentEle),
                  (this.zIndex = e.zIndex),
                  (this.zIndex = e.zIndex),
                  (this.oVideo = e.oVideo);
              };
              (i.prototype = {
                constructor: i,
                init: function () {
                  this.createView(), this.initEvents();
                },
                createView: function () {
                  var e = this.videoPlayData.config.rightmenu.rightmenu,
                    t = this.videoPlayData.config.rightmenu.showrightmenuname,
                    i = this.videoPlayData.config.rightmenu.showrightmenu,
                    s = "";
                  this.videoPlayData.config &&
                    this.videoPlayData.config.rightmenu &&
                    this.videoPlayData.config.rightmenu.rightmenuscreenshot &&
                    (s =
                      '<a class="ccH5RightMenuBtn" href="javascript:;" style="display: none;" id="ccH5CaptureBtn"><img src="https://p.bokecc.com/images/html5player/rightmenu/radio0.png" ' +
                      (0 == t ? 'class="icon-pos"' : "") +
                      ' alt="">\t<div' +
                      (0 == t ? ' style="display:none"' : "") +
                      ">截图</div></a>");
                  for (var a = 0; a < e.length; a++)
                    s +=
                      '<a class="ccH5RightMenuBtn" target="_blank" href="' +
                      e[a].content +
                      '"><img src="' +
                      e[a].iconurl +
                      '" ' +
                      (0 == t ? 'class="icon-pos"' : "") +
                      ' alt="">\t<div' +
                      (0 == t ? ' style="display:none"' : "") +
                      ">" +
                      e[a].name +
                      "</div></a>";
                  var r =
                      '<div id="ccH5RightMenu" class="ccH5FadeOut"' +
                      (i ? 'style="opacity:1"' : "") +
                      '">' +
                      s +
                      "</div>",
                    n = o.createElement("div");
                  this.parentEle.appendChild(n),
                    (n.outerHTML = r),
                    (this.menuBox = $.queryEle(
                      "#ccH5RightMenu",
                      this.parentEle
                    )),
                    (this.menuBox.style.zIndex = this.zIndex),
                    (this.screenshotBtn = $.queryEle(
                      "#ccH5CaptureBtn",
                      this.parentEle
                    )),
                    (this.cch5TipToast = $.queryEle(
                      ".cch5TipToast",
                      this.parentEle
                    ));
                },
                initEvents: function () {
                  var e = this;
                  this.screenshotBtn &&
                    (this.handleScreenshot(),
                    this.playerApi.onceVideoListener("timeupdate", function () {
                      e.screenshotBtn.style.display = "block";
                    }));
                },
                handleScreenshot: function () {
                  var r = this;
                  this.screenshotBtn.onclick = function () {
                    if (
                      !(
                        r.playerApi.getTotalTime() <= 0 ||
                        (r.cch5TipToast &&
                          "block" === r.cch5TipToast.style.display)
                      )
                    ) {
                      var e = r.oVideo,
                        t = o.createElement("a"),
                        i = void 0;
                      if (e.isWasm) {
                        if (!(i = e.canvas))
                          return void console.error("开播后才可截图");
                      } else
                        ((i = o.createElement("canvas")).width =
                          e.videoWidth || e.clientWidth),
                          (i.height = e.videoHeight || e.clientHeight),
                          i
                            .getContext("2d")
                            .drawImage(e, 0, 0, i.width, i.height);
                      var s = i.toDataURL("image/png");
                      t.setAttribute("href", s);
                      var a = "视频截图" + $.formatDate() + ".png";
                      t.setAttribute("download", a),
                        t.click(),
                        (r.cch5TipToast.innerHTML = "截图保存成功"),
                        (r.cch5TipToast.style.display = "block"),
                        setTimeout(function () {
                          r.cch5TipToast.style.display = "none";
                        }, 1e3);
                    }
                  };
                },
                show: function () {
                  this.menuBox.className = "ccH5FadeIn";
                },
                hide: function () {
                  this.menuBox.className = "ccH5FadeOut";
                },
              }),
                (e.CCH5PlayerRightMenu = function (e) {
                  var t = new i(e);
                  return {
                    init: function () {
                      t.init();
                    },
                    hide: function () {
                      t.hide();
                    },
                    show: function () {
                      t.show();
                    },
                  };
                });
            }
          })(window),
          (function (l) {
            var n = l.document;
            if ("function" != typeof CCH5PlayerShare) {
              var r = function r(e, t, i, s, a) {
                (this.playerApi = e),
                  (this.params = t),
                  (this.videoPlayData = i),
                  (this.parentEle = s),
                  (this.zIndex = a),
                  (this.hasShare = !0);
              };
              (r.prototype = {
                constructor: r,
                intervals: [],
                init: function () {
                  this.createView(), this.initData(), this.addEvents();
                },
                addEvents: function () {
                  var i = this;
                  (this.shareBtn = $.queryEle("#share-btn", this.parentEle)),
                    (this.shareBox = $.queryEle(
                      "#ccH5-share-box",
                      this.parentEle
                    )),
                    (this.shareBtn.style.display = "block"),
                    /firefox/i.test(navigator.userAgent) &&
                      (this.shareBtn.style.top = "70%");
                  var e =
                    "https://p.bokecc.com/qrplay.bo?uid=" +
                    this.videoPlayData.uid +
                    "&vid=" +
                    this.videoPlayData.vid;
                  $.ccJsonp({
                    url: "https://p.bokecc.com/api/video/qrcodeimage",
                    data: { qrwidth: 120, qrheight: 120, qrurl: e },
                    success: function (e) {
                      i.shareBox.querySelector(".qrcode-box img") &&
                        (i.shareBox.querySelector(".qrcode-box img").src =
                          "data:image/png;base64," + e);
                    },
                    error: function () {},
                  }),
                    this.shareBtn.addEventListener("click", function () {
                      i.shareBox.style.display = "block";
                    }),
                    $.queryEle(
                      ".title .right",
                      this.parentEle
                    ).addEventListener("click", function () {
                      i.shareBox.style.display = "none";
                    }),
                    $.queryEle("#wb", this.parentEle).addEventListener(
                      "click",
                      function () {
                        var e = encodeURIComponent(
                            "https://p.bokecc.com/qrplay.bo?uid=" +
                              i.videoPlayData.uid +
                              "&vid=" +
                              i.videoPlayData.vid
                          ),
                          t = encodeURIComponent(i.videoPlayData.img);
                        l.open(
                          "http://service.weibo.com/share/share.php?url=" +
                            e +
                            "&title= &pic=" +
                            t
                        );
                      }
                    ),
                    $.queryEle("#kj", this.parentEle).addEventListener(
                      "click",
                      function () {
                        var e = encodeURIComponent(
                            "https://p.bokecc.com/qrplay.bo?uid=" +
                              i.videoPlayData.uid +
                              "&vid=" +
                              i.videoPlayData.vid
                          ),
                          t = encodeURIComponent(i.videoPlayData.img);
                        l.open(
                          "https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=" +
                            e +
                            "&pics=" +
                            t
                        );
                      }
                    ),
                    $.queryEleAll(".btn", this.parentEle).forEach(function (e) {
                      e.addEventListener("click", function () {
                        this.parentNode.querySelector("input").select(),
                          n.execCommand("Copy"),
                          alert("复制成功");
                      });
                    });
                },
                initData: function () {
                  var e =
                    '<script src="https://p.bokecc.com/player?vid=' +
                    this.videoPlayData.vid +
                    "&siteid=" +
                    this.videoPlayData.uid +
                    '&autoStart=false&width=600&height=490&playertype=1" type="text/javascript"></script>';
                  $.queryEle("#jsCodeInput", this.parentEle).value = e;
                  var t = "";
                  (t = this.videoPlayData.pageaddr
                    ? this.videoPlayData.pageaddr
                    : "https://p.bokecc.com/qrplay.bo?uid=" +
                      this.videoPlayData.uid +
                      "&vid=" +
                      this.videoPlayData.vid),
                    ($.queryEle("#videoAddrInput", this.parentEle).value = t);
                },
                createView: function () {
                  var e = $.queryEle("#ccH5RightMenu", this.parentEle),
                    t = e
                      ? ""
                      : "position: absolute;top: 50%;right: 5px;transform: translateY(-50%);";
                  this.videoPlayData.config &&
                    this.videoPlayData.config.rightmenu.showrightmenu &&
                    (t += "opacity:1;");
                  var i =
                      '<div id="share-btn" class="ccH5FadeOut" style="display:none;' +
                      t +
                      '">\t\t\t<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAASOklEQVR4Xu1d0ZEdpxJlIrAdgaQIZEVgMQlYjsDrCCxFYDkCSxE8OYInJTBIEXgVgfdFYCsCXh0XY1+t9+6Fhm6YmUOVSh/LQHOac5uGppkcCxEgAmcRmIgNESAC5xEgQTg7iMA9CJAgnB5EgAThHCACMgRoQWS48auDIECCHETRHKYMARJEhhu/OggCJMhBFM1hyhAgQWS48auDIECCHETRHKYMARJEhhu/OggCJMhBFK05zBDClzHGx9M0fe2c+/JWXzcxxpt5nj9oyqDVNgmiheyO2wUhnHPfOueeOeee3kGKc6O/ds69jzG+n+f53RYgIkG2oKVBZAwhgAw/JmLUSvWnc+6Nc+619/6mtjGt70kQLWR31G4ixk/JWmiMDER54b0HaYYqJMhQ6hhLmLSU+sU5d2UgGcjx0nv/2qCv7C5IkGyojlUxhACH+7/OuYfGI3/rnPthFGtCghhrfwvdhRBgMf7TUVb4JN957+HUdy0kSFf4x+t8AHKsoGDJ5XuThAQZb452k2ggcgxDEhKk23Qcq+MByXFKkie9toJJkLHmaRdpkkMeCg78rOW89t4/se4U/ZEgPVAfrM8Qwm/OOexajVx+9t6/tBaQBLFGfLD+QgiYdDgE3ELBUst0Z4sE2cK0UJIxhIAzDliP2wGGRT3GGD9O04Tzi/fOuZvVX0hLN/TxLMb4bJqmL4oa/nfl99jWqmyj6HMSpAiufVUOISDE43vpqGKMH6Zpwuk3iHGxYCMgxviqkijgSFZ/FwXKqECCZIC0xyopjOSPirHhtBsEKyqpX3yHaGBJMbUiJIhERTv4JoTw3DmHOKuiEmP8NE3Ts9pf8RDCqxQZXNR/qvzIatuXBJGoZwffVOxcIQQE/kZ1qVjime1okSDVat5eA8k5/10gefOJuSzL9TRNjwtlMTsXIUEKNbOH6pJT8xjj/3CltnWUbbprgkPK0vJVa1nuEoAEKVXLDuqHELBEKnWSRU55DlzLsryfpumbnLondZot9e7rlwQp1MoeqgsnpNovtsSiOeeaL/doQfYwuxuMIYQQC5t5571HggaVItxy/tV7r37TkRZEReVjNyogiPqv9bIsN9M0PchFDoeU8zwjiYRqIUFU4R2vceGvtQVBivwQEmS8ubULiYS7RmoO+gpqqV9EguxiOo43CFqQMp1wiVWG1y5qj+iDhBBwcJmdQYUWZBdTccxBlBJEezIKrRp3scacXtuXqnS9n0bMc5Dtq54jyEFAGEmr5qiHEBBqUrply5P0HGWzTjkCIQQc+iFrYklBniqEmTfNnyvcVYPcahbtFBQ66SVTZCd1hWt+jL7peUiSA9ajKGEErvjO81z0jVR1JIgUuQ1/J52YacjNllohBKQ3lYSLNCXqfaokQTY80SWip+UVbhJmb6ne6gdLLKz/q+6FV5AD4vBGoUT5/OY8AumSFIjRKujwueSpgmS9YDlEcmhvOd9GkBbkAKwKIeBVKOS/qkrvcwdUsCJY7mRZk0ZyMKvJAeasyRBTXir8Wms7tOvbg2+nafq0JndblgWXoL5EkodkMaoIam09oCRaEJOpattJWsYgWyIyl+ypmPkeK2gkyJ6mj3MuOeGwGlW/1gPCYrZzxXOQAbVfK1JywkGM0hPp2q7Vv++xtKIFUVerXQchhHU5tTer4VKiuoetT/BztcMlVi5SA9ZLYRrYutV2wruMPpHjqXVGdy6xuqi7XafGzzO3E7ygpRHIwV2sAoWNUjWEgGzsyGvbfDmVJiXOS65jjNiyrX2uQARbSlKH/L+mb4HcJSyXWCIV2n9k4IS/w7bw6dseMcY3grSgteBAjqtePsdt4UmQWnUafJ+ccJXnx9KvNYhxZ0JqqxeokvWCHMVPKmiqgATRRLey7eSEY+tWGlh4SYLXCEG59GudrBcIKn5s54Igvybr1fSuyaXB5/ydBMlBybhObUDfJXHTy1D4tS5a469EafGcWrJcsBavLhH00ng0/06CaKIraLtRQN+dPa9OuPceTn5VSfl0n8YYn+ZmRExvGSKwEa9ENXljpGoQGR+TIBkgWVRJgYU409A6CVdzfpPFw1kMloK3l4N/RfrmRvxaYF3SBwlSgpZCXe3AwrSUwa5QVki6whA33SQJ0lF9DW73XZL+59HX+JcG0PvvJEgHDSjc7vtsFMkJh9W46TC8XXVJghir08AJH+4swRjipt2RIE3hPN+YQWDhsGcJRhCrdEOCqMD6T6N0wpUBVm6eBFEEWPN2XzrTwCGbSgiKIiybapoEUVCXdmAhnXAFpZ1pkgRpjLXm7b5kNbA7tYlT6MbQdmmOBGkE+yiBhY2Gw2YSAiRI5VTQvt2X4pewdcuT8EpdST4nQSSopW8MbvfRCa/QT4tPN0WQFND3bUpSgCundwX24U4BwrjXfx9anyhrO+HOuc9u97VQNNuQITA8QdLaHhd1kL5Seg8bZMHdA7xrJ76Uk5ZTa55bGeL3fHXpdl/zDtngRQSGJUhaviB1ZuuUNiAKsvQVxSnRCb84l3ZZYTiCGNyLWBWJA7bXlyyKwe2+j9M0Yeu26HbfLmfjgIMaiiCayQnOYA8rgsdg7pycBoGFuA9efbtvwHm1G5GGIEjlk2AtlPHZYzAGVkztdl8LMNjGPwh0J0iajHhxVStzR66+4Zu8cM6pPRvA2325qhinXleCJHLglVPp7lRrJLHDpSULb/e11pZBe90IkpZVvw1gOVRhlqbYURWKjWcj0JMgIEfrLdzsgWtXbJliR1tWtn8egS4ECSFg5wYHbnstvN23E82aEyQduMHv2F2hE747ldo/4hlC+L2F34ElDOKtpmnCWcZ6Kv51jPFhh4zkmBld3tDb35Qca0SmFiSlq0QyZnFJTi+iXM9eGkrBhEiL+TI3LaZUIN7ukyK3je+sCSK2HtJ7EVrp+0dN17+NabcdKc0IUmk9qk6ecd4SY3zf8MWkrGcDtjMNKOk5BCwJgiUR7nKUlnfee4S6V5UWJJFasSrB+XFXBEwIkg4F/ygdaZqQeOVUfIfjtE/pDhpT7JRqbj/1rQgCC4B4q9LypHUYuNAnufbePykVnvW3j4AVQSQHg7j9d9UaYlizGOONwB/5qpUlaz0mtqeHgAlBlmWBg/xN4TCaW4+1f+FJPu6NMB9VoRK3Xt2EICGEWAIUTqTneVYLf09RxIgFKyk8CCxBayd1hyRIugqL++hqpZS0FjKpDZYNixFQJ8iov9alyz6cmM/zrPV+oFiB/FAXAQuCYFKVBif+oP2gPAmiO7H20joJkqlJWpBMoHZWzYIgcLYRg1VS1B1iWpASdRy3rjpBAO2IDrFApiYhL8edatscuQlBlmX5s/Bg7sZ7/0gLUmHIibpV0xov25UjYEUQHhTKdcQvOyJgQhDhybVaqEnyiUrT+zwqzefbUa/suhECVgSRBiv61g/HSMiqfbLfSJdsRgEBK4Lg17o43D298QGSdA135ym6wszbSJMmBEk7WUjtiXc+Sstb7/13pR/drl+ZxVEtcLJ2XPxeFwFLgkiXWUAA7/MhmlZkSdKuFe6jlPodDpe25nnebYI73em1/dbNCAKolmXBPYwHQtiQ2gchKNmPWTZ6EUo97EWIBz8zQMCUIJWJG1Y4QBAs13Bwd6dFSWl/cP8dj+QUW41buPMeiMFEHLULU4IkKyI5EzmHH8iyPtoJImAptP7fEnP0g4PCbOvVsnO21Q8Bc4IIw9/7IfR5z6L3DUcRnnKUI2BOEIgoTJxQPjq9L7LeN9Trni1bIdCFIApLLSu8TvvB0g5vDCKJHMtOEehGkJRdBP7I441ji921F0zosHEtnhG/G0HSUgspePZAEgyHjvwOOdKVIDskCYZER35HROlOkJUkaWJJcveOqg468qNqpkCuIQiyyhtCeJ7e9PiiYAwjV6UjP7J2MmQbiiDJmuAOO1KVqlmT9FQafuGRKRGkfF544zED2s+q0JEvRWyQ+sMR5MSarC9ElaYsPQttIgZ8BLxQ9XeYSgpNAWEk0cYlqqQjX4LWAHWHJcgJUWBRrmKMVxWBjnh1FmHz9+bWTW+IvBLkES5VJR35UsQ61R+eIKe4rG8P4hHQGOOa5RCPdj5YH/VE/WmaYB3wa/1e8nwCwuNjjG8qCJmrTjryuUh1qrcpglhjhOjjGCMsiuamAciMJd/P1uNjf5cRIEEuYJTulFg58ghdwXKQZRAESJBMRdCRzwRqZ9VIkEKFGjry2FBAjBe2iFk6IUCCCIE3dORxJoTLWqL7+MLh8bOEAAlSORXoyFcCOPjnJEgDBdGRbwDioE2QIA0VQ0e+IZiDNEWCKCiCjrwCqJ2aJEEUgacjrwiuUdMkiAHQdOQNQFbqggRRAvZ2s3TkjYBu3A0J0hjQS83t0ZHHmGKMD6ZpuvOZ7BjjNRL8zfP84RI+o/2dBOmkkS078ska4kIbEpKDFCXpXRFljSgBpI4dPkqABOlEkLXbLTnyyfr9lIhRQopzKP+VZ3nkAE0SpDNBTogybGj9CTGulOAqztyvJMe/miVBrJDO6GdERz6EAIuBi10WBUsvPDcxTNwZCWKh9sI+RnDkkwx4dMj68SCQA09ODJFJnwQpnLyW1Xs58pXP1bWCaIiHi0iQVupUbMfYkcdW7H8Kd6a0Ro+ryC+0Gs9plwTJQWmQOkYn8oOM9m8xcGkMd2K6FBKkC+zyTg0debmQ7b/sttwiQdor06RFQ0feZDwXOoHj7iUpnGqFJ0FqEez8vaEj33mk7tp7/8RaCBLEGnGl/gwdeaURZDWLu/lWZzJ/CUSCZOllO5V6OPIxxo/TNOGQD5ksPzu/SFvGiNfCv9qE5FhqPbGM4SJBtjP3syW1cuRTMvDnl3Ier4KnqF+kdK1JSG5qRUiQ7Gm3vYrKjvyv3ntRbFallYMVeWQVjkKCbG/eF0us4MhXb7smmfA+pSTvcXX/uSCSILlI7aBeI0f+tff+eQs4II9zLgjaMtvRIkEE2tn6J1jipHCSoqHEGD/M83znrcGihk4qhxCwK4WI4dLylcUyiwQpVcsO6icn/g/BULCDhOuzTcuyLDeCt1hMllkkSFNVb6OxEAKuyiKUvaSInfJLnQgtWrOl3n3ykSCXtLfDv4cQEPz3Y+HQcEfj3ifsCtv7u7rEomks9+6SnwSRanXD3y3Lgt2j0rMI1TV/CAHkKzlIvPHeP9JWAwmijfCA7ZcSxOLXWuKse+/V5696BwPOj8OLFEL4reQqLQly+ClzLABCCLFkxEYEwdnKLyVy0YKUoMW62Qgsy3I9TdPj3A+MCFJ8HkKC5GqQ9YoQKPVBnNO/i0EfpEiFrKyJgIAgEEd7F6vUL/o4z7N6SiI66ZozcdC2Jb/WKaHbG40hpajj30vatlj2QR4SpEQrO6krPLnGZSivAYGQsCb3QkgQDY0P3qbkFzsNCRxpmvEwnaLDepQmw24uy11qI0EGn8xa4gkDBJFkGgGLzXLnhhCQpK744pXFDhaXWFqzbwPtCuOxMLK33vvvWgxRuNRD13hbBAGX6oUWRB3iMTuoWGZhQHjT44eakVWQA92qBU7eHhMJUqPljX8r3O5dR417IfADipdbIQScmItuJSJRxDzPD62gJ0GskB6wn4orr+toQA6EzuNuxkWihBC+T2+N1Exwk4tS6wBJkAEnrqVIlVbkVFSEq7+NMeJ24Cc82omHPbE7NU0T/AX8K92p+gwKa+tBJ91yJg7aV0rshlPsLRSTrd1TIGhBtjAtlGUUHtQpS/Wv5s12rkgQa9VuoL+GS63mo00ZHL/O8XNad04L0hrRjbaHE+0YI8Lg4TcMU2KMn6ZpeqqRTSVnkCRIDkoHqVOZ7bA5Sr3JQSe9uUq33+AoJEnkeNY69qtUQ7QgpYgdoH7Kwv625NZhS1hGsBzreEiQlprdUVspyhaHgDjcMyu454Fzkx4O+V2DJEHMVL/NjpCFMcb4Stt5T1bjZc8XbUmQbc7R7lJrPsiTiIFTeDzEczFcxRoMWhBrxDfcXyLKVYzxqtY/SWcbuML7akRi0AfZ8EQdQfTTtwdjjE9zHsJJ/gVuJOJOSfMs8Rq40IJooHrANpN1OZdlBA/eDLd8ylETCZKDEuscFgES5LCq58BzECBBclBincMiQIIcVvUceA4CJEgOSqxzWARIkMOqngPPQYAEyUGJdQ6LAAlyWNVz4DkIkCA5KLHOYREgQQ6reg48BwESJAcl1jksAiTIYVXPgecg8H+UMa0yglfUhgAAAABJRU5ErkJggg==" alt="">\t\t\t<span>分享</span>\t</div>',
                    s = n.createElement("div");
                  if (!n.querySelector("#share-btn")) {
                    if (e) {
                      var a = e.firstChild;
                      e.insertBefore(s, a);
                    } else this.parentEle.appendChild(s);
                    (s.outerHTML = i), (s.style.zIndex = this.zIndex);
                    var r = n.createElement("div");
                    this.parentEle.appendChild(r),
                      (r.outerHTML =
                        '<div id="ccH5-share-box" style="display:none">\t\t\t<div class="main-box">\t\t\t    <div class="title">\t\t\t        <p class="left" style="font-size:14px;line-height:30px;">分享</p>\t\t\t        <p class="right">&times;</p>\t\t\t    </div>\t\t\t    <div class="body">\t\t\t        <div class="first" style="box-sizing: content-box;">\t\t\t            <span>分享到</span>\t\t\t            <img id="wb" style="width:32px;" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAgACADASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAABQIDAf/EABYBAQEBAAAAAAAAAAAAAAAAAAIABP/aAAwDAQACEAMQAAABajE3NpagtA2JrGMY7e5X/8QAHBAAAgIDAQEAAAAAAAAAAAAAAQIAAwQRExIh/9oACAEBAAEFAozqsJ+BpbZzTlbZGa5JrYfXfK2X9EYWMpWsjY5wVqDP/8QAGhEAAgMBAQAAAAAAAAAAAAAAAAECAxIhMf/aAAgBAwEBPwGFafZMdeSS0eRyj//EABsRAAIDAAMAAAAAAAAAAAAAAAABAgMREiEx/9oACAECAQE/AV2S1ELUljJ2cvD/xAAiEAACAQIFBQAAAAAAAAAAAAAAARECIQMQMkFhEiIjMZH/2gAIAQEABj8CO5xlcnfYmPopsizMN1aSrrrac2p4PNqZfchlqqkT7fOX/8QAHRABAAICAwEBAAAAAAAAAAAAAQARITFRYXFBgf/aAAgBAQABPyG5oX1Nkf2JZhnSTvDEGRbf2FTjYOJSwkW8T0F5cTIWhm+UoDQwO+p2GsITDZwyppjReped8zubn//aAAwDAQACAAMAAAAQ7XL7/8QAGREBAAMBAQAAAAAAAAAAAAAAAQARIVGB/9oACAEDAQE/EDchCBaI8gg2qhXuT//EABgRAQEBAQEAAAAAAAAAAAAAAAEAESEx/9oACAECAQE/EG+JJpZoj4F//8QAHRABAAICAwEBAAAAAAAAAAAAAQARITFBUWFxgf/aAAgBAQABPxCKTJaFmaHCrFkhgSPCWEwpSj2LLTOyr+XDXa1BkeswUndYITS0oLpxuWepuCrAdcsMuWh887Hc2YNg4IcdMIQqneB/F6lEffELVFq9T//Z">\t\t\t            <img id="kj" style="width:32px;" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAIBAQIBAQICAgICAgICAwUDAwMDAwYEBAMFBwYHBwcGBwcICQsJCAgKCAcHCg0KCgsMDAwMBwkODw0MDgsMDAz/2wBDAQICAgMDAwYDAwYMCAcIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wAARCAAeACADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDz3I9vy/8Ar12X7Pvw1Hxc+L+jaLNHNNYNIbm/EeVK20fzPk5yoY7Y9wOQZBjnFbH7MfhHwL8TvGUfh7xV/wAJBDq2oSFdMktJ9trckKWMLhULo+FZg5bYQCDsKr5n2p8Gv2fPhv8AA1by6sY/EVnNeRolzcKq3TlFyQAZpiVGTkhcAkDPQV914+fSOwHCVHG8NYejWp5lOk/YzkoQornTiqsakqibUPea5Yv34ckuV3t+R+F/hHis+q4fNqs6csJGa9pFOUp+7q4OCi0ubRO7Xuy5lfS/wr+0J8Nl+E/xh1rR4YZINPEgubBWJObeT5lAJJLKp3R5JJPlnPOa4vOT/wDWr9QP2mf2KfAPjHRND1LxNca9/bM1s7WFmYRBcCBmyTJNbzmLbkAgEuw38KMtj4M/ah8E+BfhV4xk8O+GP+Egm1jT3U6i93PutbXcgdYlDIHeQqyOWB2KpABdiwj7PBXx9o56sFwhmmHrvNYUYus0oVKdopJ1Z1I1W4c6cZSVSMZKc1FJ3jfHxI8La2UyxGeYSrT+pSqNU1eUZatvkjFwSly6pOMmuWN21rbxeXU/KUsWZRHh9wYqVKncCCOQQQCCOQQCORX6rfBH4taR8Avg3oeseNoVutYs9Mt/tWualqSRtbXAhUs6I8RQzBgSGYOxK9M5z+SDXwf7y7lzyp6MPTgg/liuu+Nvx+8Q/tBeLY9Y8Sy2rS26GO1tbSHyrW0Qtu2qpJZiCTh3Zn5xuxxXveN3hLmvHOZZRTwdWnh6GGlVnVqypwqVItqmoRpRmmry95uTaUeWMtZKKfm+G/HmE4Yw2OnVhKrVqqEYQUnGDs5OUptO9l7qSs27taJtn6eeKfiBoPxe+H2s614Xuda1a61Wym8jVIvEEc8zTmI+XiTyDtcZXAZTt4+XAAr8rzrH2t3mBkxcO02ZJTK5LEsSznl2JJJY8sSSeTWl8FPjx4g/Z/8AGDa14bmtUuJkEdzbXUPm212m7dtdQQVJIHzoVfjG7HFcrPqfmzSPsWMMxbYv3VyegyScD3JNcvgT4M5h4f5nm9KvVhiMPiXSnSqqEYVG17TnhVjFatNxakm1K8mlFtxW3iX4hYbivCYGcISp1aSnGcOZyhry8soN7J2kmrJrRapJn//Z">\t\t\t            <img id="wx" style="width:32px;" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAgACADASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAwQFAAL/xAAXAQADAQAAAAAAAAAAAAAAAAAAAgMB/9oADAMBAAIQAxAAAAFpg3cUlirTlmRqXguLJhff/8QAHRAAAgICAwEAAAAAAAAAAAAAAQIAAxITBBARM//aAAgBAQABBQJVLzRHUoZV8iBg6ZiyspKrMStys3gnIIFfW5xHYuf/xAAXEQADAQAAAAAAAAAAAAAAAAAAAhEB/9oACAEDAQE/AYNkMeDPkP/EABgRAAMBAQAAAAAAAAAAAAAAAAABAhEh/9oACAECAQE/AZhYOcFTQ64f/8QAGxAAAgMBAQEAAAAAAAAAAAAAAAEQESExMmH/2gAIAQEABj8Cw9GzWlON4JD+lT0tn//EACEQAAIBAgYDAAAAAAAAAAAAAAERADFhECFBUXGBkaHw/9oACAEBAAE/ITi8p9KJgd4CEu3AtFS8I0A6hPPMGhjpuMARjmbQbry49BiBl7iaoFP/2gAMAwEAAgADAAAAEAS+pv/EABgRAQEBAQEAAAAAAAAAAAAAAAEAESEx/9oACAEDAQE/EA52fo8kGSsF/8QAGREBAQEAAwAAAAAAAAAAAAAAAQARITFB/9oACAECAQE/EOUTZ1p1EZ5C4C//xAAgEAEAAgICAgMBAAAAAAAAAAABABEhMUFRYfBxkaHB/9oACAEBAAE/EHogG1ojj399znG0NMY4TG4Yd1LBVSlOUwd9JSUfm/5CGOk+4ZRVEK0u3x5gMOiFCr+/bgCi7o/UCmhQFwEuLKiuGkFgmmoFOZ//2Q==">\t\t\t            <div class="qrcode-box">\t\t\t\t\t\t\t<img src="" alt="">\t\t\t            </div>\t\t\t        </div>\t\t\t        <div class="rows">\t\t\t            <span>JS代码</span>\t\t\t            <input id=\'jsCodeInput\' readonly=\'readonly\' style=\'color:#000;\' type=\'text\'>\t\t\t            <div class="btn" style="padding:0">复制</div>\t\t\t        </div>\t\t\t        <div class="rows">\t\t\t            <span class="video-adress">视频地址</span>\t\t\t            <input id="videoAddrInput" readonly="readonly" style="color:#000;" type="text">\t\t\t            <div class="btn" style="padding:0">复制</div>\t\t\t        </div>\t\t\t    </div>\t\t\t</div>\t</div>'),
                      (r.style.zIndex = this.zIndex);
                  }
                },
                show: function () {
                  this.hasShare && (this.shareBtn.className = "ccH5FadeIn");
                },
                hide: function () {
                  this.hasShare && (this.shareBtn.className = "ccH5FadeOut");
                },
              }),
                (l.CCH5PlayerShare = function (e, t, i, s, a) {
                  var o = new r(e, t, i, s, a);
                  return {
                    init: function () {
                      o.init();
                    },
                    hide: function () {
                      o.hide();
                    },
                    show: function () {
                      o.show();
                    },
                    clearIntervals: function () {
                      var e = !0,
                        t = !1,
                        i = undefined;
                      try {
                        for (
                          var s, a = (0, X["default"])(o.intervals);
                          !(e = (s = a.next()).done);
                          e = !0
                        ) {
                          var r = s.value;
                          l.clearInterval(r);
                        }
                      } catch (n) {
                        (t = !0), (i = n);
                      } finally {
                        try {
                          !e && a["return"] && a["return"]();
                        } finally {
                          if (t) throw i;
                        }
                      }
                    },
                  };
                });
            }
          })(window),
          (w = window),
          (x = w.document),
          (T = function T(e) {
            (this.playerApi = e.playerApi),
              (this.params = e.params),
              (this.videoPlayData = e.videoPlayData),
              (this.parentEle = e.parentEle),
              (this.zIndex = e.zIndex),
              (this.seconds = []),
              (this.signIdx = 0);
          }),
          (T.prototype = {
            ans: {},
            isSignShow: !1,
            init: function () {
              var e =
                (this.params.signConfig && this.params.signConfig.seconds) ||
                [];
              e.length &&
                ((this.seconds = this.handleSignData(e)),
                this.registerVideoListener());
            },
            handleSignData: function (e) {
              5 < e.length && (e = e.slice(0, 5));
              for (var t = void 0, i = 0; i < e.length - 1; i++)
                for (var s = i + 1; s < e.length; s++)
                  1 * e[i] > 1 * e[s] &&
                    ((t = 1 * e[i]), (e[i] = 1 * e[s]), (e[s] = t));
              return e;
            },
            registerVideoListener: function () {
              var e = this;
              this.playerApi.registerVideoEvent("timeupdate", function () {
                e.seconds &&
                  0 !== e.seconds.length &&
                  (e.monitorSign(), e.querySign());
              });
            },
            querySign: function () {
              var e = this.seconds;
              if (e && e.length) {
                var t = this.playerApi.getCurrentTime();
                this.ccSignContainer &&
                  this.isSignShow &&
                  t < this.seconds[this.signIdx] &&
                  ((this.ccSignContainer.style.display = "none"),
                  (this.isSignShow = !1));
                for (var i = 0, s = 0; s < e.length; s++)
                  if (!this.ans["ans_" + s]) {
                    var a = 1 * e[s];
                    if (a < t) {
                      i = a;
                      break;
                    }
                  }
                0 < i && this.playerApi.videoPause();
              }
            },
            monitorSign: function () {
              for (
                var e = this.seconds,
                  t = this.playerApi.getCurrentTime(),
                  i = parseInt(t),
                  s = 0;
                s < e.length;
                s++
              )
                if (
                  !this.isSignShow &&
                  !this.ans["ans_" + s] &&
                  e[s] &&
                  i >= e[s]
                ) {
                  (this.signIdx = s), this.playerApi.videoPause();
                  var a =
                      x.fullscreenElement ||
                      x.msFullscreenElement ||
                      x.mozFullScreenElement ||
                      x.webkitFullscreenElement ||
                      !1,
                    r =
                      $.isIPhone() &&
                      $.isWeixin() &&
                      this.playerApi.displayingFullscreen();
                  (a || r) && this.playerApi.exitFullScreen(),
                    (this.isSignShow = !0),
                    $.invokeWindow(
                      "on_player_sign_show",
                      e[this.signIdx],
                      this.videoPlayData.vid
                    ),
                    $.queryEle(".ccSignContainer", this.parentEle)
                      ? ((this.ccSignIdx.innerHTML = s + 1),
                        (this.ccSignContainer.style.display = "block"))
                      : this.createSignBox(s);
                }
            },
            createSignBox: function (e) {
              var t = this,
                i = this.params.signConfig.logo;
              i &&
                !/\.(jpg|jpeg|png|JPG|PNG|JPEG)$/.test(i) &&
                ((i = ""), console.error("签到logo地址不符合规范"));
              var s = this.params.signConfig.title || "学习签到",
                a =
                  this.params.signConfig.content ||
                  "请点击签到，签到后可继续学习",
                r = this.params.signConfig.btnText || "签到",
                n = x.createElement("div");
              n.className = "ccSignContainer";
              var o =
                '<div class="ccSignWrap"><div class="ccSignIdxBox"><div class="ccSignIdxBg"></div><div class="ccSignIdx">' +
                (e + 1) +
                '</div></div><div class="ccSignWrapLogo">' +
                (i
                  ? '<img src="' + i + '"/>'
                  : '<div class="ccSignLogoDefault"></div>') +
                '</div><div class="ccSignWrapTitle" title="' +
                s.substring(0, 16) +
                '">' +
                s +
                '</div><div class="ccSignWrapContent">' +
                a.substring(0, 200) +
                '</div><div class="ccSignWrapBtn">' +
                r.substring(0, 8) +
                "</div></div>";
              (n.innerHTML = o),
                this.parentEle.appendChild(n),
                (n.style.zIndex = this.zIndex),
                (this.ccSignContainer = $.queryEle(
                  ".ccSignContainer",
                  this.parentEle
                )),
                (this.confirmBtn = $.queryEle(
                  ".ccSignWrapBtn",
                  this.ccSignContainer
                )),
                (this.ccSignIdx = $.queryEle(
                  ".ccSignIdx",
                  this.ccSignContainer
                )),
                (this.confirmBtn.onclick = function () {
                  $.invokeWindow(
                    "on_player_sign_result",
                    t.seconds[t.signIdx],
                    t.videoPlayData.vid
                  ),
                    (t.ans["ans_" + t.signIdx] = !0),
                    (t.ccSignContainer.style.display = "none"),
                    (t.isSignShow = !1),
                    t.playerApi.videoPlay();
                });
            },
            getIsSignShow: function () {
              return this.isSignShow;
            },
          }),
          (w.CCH5PlayerSign = function (e) {
            var t = new T(e);
            return {
              init: function () {
                t.init();
              },
              getIsSignShow: function () {
                return t.getIsSignShow();
              },
            };
          }),
          (function (e) {
            if ("function" != typeof CCH5PlayerStatement) {
              var a = function a(e, t, i) {
                (this.params = e),
                  (this.parentEle = t),
                  (this.zIndex = i),
                  (this.topDeclarationTime = "");
              };
              (a.prototype = {
                constructor: a,
                init: function () {
                  this.createView(), this.initData();
                },
                createView: function () {
                  var e =
                      '<div class="ccplayer-topstatement" id="ccHDTopstatement" style="z-index: ' +
                      this.zIndex +
                      '">    <div class="ccplayer-topstatement-wrapper">        <div class="ccplayer-topstatement-text">' +
                      this.params.statementText +
                      "</div>    </div></div>",
                    t = document.createElement("section");
                  this.parentEle.appendChild(t), (t.outerHTML = e);
                },
                initData: function () {
                  var e = $.queryEle(
                      "#ccHDTopstatement .ccplayer-topstatement-text",
                      this.parentEle
                    ),
                    t = $.queryEle("#ccHDTopstatement", this.parentEle);
                  (this.topDeclarationTime = (
                    (t.clientWidth + e.clientWidth) /
                    60
                  ).toFixed(2)),
                    this.showTopStatement();
                },
                showTopStatement: function () {
                  ($.queryEle(
                    "#ccHDTopstatement",
                    this.parentEle
                  ).style.display = "block"),
                    ($.queryEle(
                      "#ccHDTopstatement .ccplayer-topstatement-text",
                      this.parentEle
                    ).style.animation =
                      "noticeAnimation " +
                      this.topDeclarationTime +
                      "s linear infinite");
                },
                closeTopStatement: function () {
                  $.queryEle(
                    "#ccHDTopstatement",
                    this.parentEle
                  ).style.display = "none";
                },
              }),
                (e.CCH5PlayerStatement = function (e, t, i) {
                  var s = new a(e, t, i);
                  return {
                    init: function () {
                      s.init();
                    },
                    showTopStatement: function () {
                      s.showTopStatement();
                    },
                    closeTopStatement: function () {
                      s.closeTopStatement();
                    },
                  };
                });
            }
          })(window),
          (b = window),
          (S = { low: 8, medium: 12, high: 24 }),
          (D.prototype = {
            init: function () {
              this.createMarquee();
            },
            createMarquee: function () {
              if (!document.querySelector("#staticMarquee")) {
                (this.marqueeBox = document.createElement("div")),
                  (this.marqueeBox.id = "staticMarquee"),
                  (this.marqueeBox.style.display = "flex"),
                  (this.marqueeBox.style.flexWrap = "wrap"),
                  (this.marqueeBox.style.justifyContent = "space-around"),
                  (this.marqueeBox.style.position = "absolute"),
                  (this.marqueeBox.style.top = 0),
                  (this.marqueeBox.style.left = 0),
                  (this.marqueeBox.style.width = "100%"),
                  (this.marqueeBox.style.height = "100%"),
                  (this.marqueeBox.style.zIndex = this.zIndex),
                  (this.marqueeBox.style.overflow = "hidden"),
                  (this.marqueeBox.style.pointerEvents = "none");
                for (var e = S[this.options.density], t = 0; t < e; t++) {
                  var i = document.createElement("p");
                  (i.innerHTML = this.options.content),
                    (i.style.display = "flex"),
                    (i.style.flex = "1 0 " + 100 / (e / 3) + "%"),
                    (i.style.justifyContent = "center"),
                    (i.style.alignItems = "center"),
                    (i.style.margin = 0),
                    (i.style.fontFamily = this.options.fontFamily),
                    (i.style.fontSize = this.options.fontSize),
                    (i.style.opacity = this.options.opacity),
                    (i.style.color = this.options.color),
                    (i.style.whiteSpace = "nowrap"),
                    (i.style.transformOrigin = "center center"),
                    (i.style.transform = "rotate(" + this.options.rotate + ")"),
                    this.marqueeBox.appendChild(i);
                }
                var s = new Date().getTime(),
                  a = this.parentEle.childNodes.length;
                this.parentEle.insertBefore(
                  this.marqueeBox,
                  this.parentEle.childNodes[s % a]
                );
              }
            },
            detectionMarquee: function (g) {
              var P = this,
                e = document.querySelector(".ccH5playerBox"),
                t = document.getElementById("staticMarquee"),
                A = function A(e) {
                  var t = !0,
                    i = !1,
                    s = undefined;
                  try {
                    for (
                      var a, r = (0, X["default"])(e);
                      !(t = (a = r.next()).done);
                      t = !0
                    ) {
                      var n = a.value;
                      if (
                        "attributes" === n.type &&
                        ("DIV" === n.target.nodeName ||
                          "P" === n.target.nodeName)
                      )
                        return (
                          P.ob.disconnect(),
                          P.containerOb.disconnect(),
                          void (g && g())
                        );
                      if ("childList" === n.type) {
                        var o = !0,
                          l = !1,
                          c = undefined;
                        try {
                          for (
                            var d, h = (0, X["default"])(n.addedNodes);
                            !(o = (d = h.next()).done);
                            o = !0
                          ) {
                            if (d.value)
                              return (
                                P.ob.disconnect(),
                                P.containerOb.disconnect(),
                                void (g && g())
                              );
                          }
                        } catch (f) {
                          (l = !0), (c = f);
                        } finally {
                          try {
                            !o && h["return"] && h["return"]();
                          } finally {
                            if (l) throw c;
                          }
                        }
                        var u = !0,
                          p = !1,
                          y = undefined;
                        try {
                          for (
                            var m, v = (0, X["default"])(n.removedNodes);
                            !(u = (m = v.next()).done);
                            u = !0
                          ) {
                            if (m.value)
                              return (
                                P.ob.disconnect(),
                                P.containerOb.disconnect(),
                                void (g && g())
                              );
                          }
                        } catch (f) {
                          (p = !0), (y = f);
                        } finally {
                          try {
                            !u && v["return"] && v["return"]();
                          } finally {
                            if (p) throw y;
                          }
                        }
                      }
                      if ("subtree" === n.type)
                        return (
                          P.ob.disconnect(),
                          P.containerOb.disconnect(),
                          void (g && g())
                        );
                      if ("characterData" === n.type)
                        return (
                          P.ob.disconnect(),
                          P.containerOb.disconnect(),
                          void (g && g())
                        );
                    }
                  } catch (f) {
                    (i = !0), (s = f);
                  } finally {
                    try {
                      !t && r["return"] && r["return"]();
                    } finally {
                      if (i) throw s;
                    }
                  }
                },
                y = function y(e) {
                  var t = !0,
                    i = !1,
                    s = undefined;
                  try {
                    for (
                      var a, r = (0, X["default"])(e);
                      !(t = (a = r.next()).done);
                      t = !0
                    ) {
                      var n = a.value;
                      if ("childList" === n.type) {
                        var o = !0,
                          l = !1,
                          c = undefined;
                        try {
                          for (
                            var d, h = (0, X["default"])(n.removedNodes);
                            !(o = (d = h.next()).done);
                            o = !0
                          ) {
                            var u = d.value;
                            if (
                              u &&
                              ("staticMarquee" === u.id ||
                                "VIDEO" === u.nodeName)
                            )
                              return (
                                P.containerOb.disconnect(), void (g && g())
                              );
                          }
                        } catch (p) {
                          (l = !0), (c = p);
                        } finally {
                          try {
                            !o && h["return"] && h["return"]();
                          } finally {
                            if (l) throw c;
                          }
                        }
                      }
                    }
                  } catch (p) {
                    (i = !0), (s = p);
                  } finally {
                    try {
                      !t && r["return"] && r["return"]();
                    } finally {
                      if (i) throw s;
                    }
                  }
                };
              (this.ob = new MutationObserver(A)),
                this.ob.observe(t, {
                  childList: !0,
                  attributes: !0,
                  subtree: !0,
                  characterData: !0,
                }),
                (this.containerOb = new MutationObserver(y)),
                this.containerOb.observe(e, { childList: !0 });
            },
            stopDetectionMarquee: function () {
              this.ob && this.ob.disconnect(),
                this.containerOb && this.containerOb.disconnect();
            },
            destroy: function () {
              this.ob && this.ob.disconnect(),
                this.containerOb && this.containerOb.disconnect();
            },
          }),
          (b.CCH5StaticPlayerMarquee = function (e, t, i, s, a, r) {
            var n = new D(e, t, i, s, a, r);
            return {
              init: function () {
                n.init();
              },
              detectionMarquee: function (e) {
                n.detectionMarquee(e);
              },
              destroy: function () {
                n.destroy();
              },
              stopDetectionMarquee: function () {
                n.stopDetectionMarquee();
              },
            };
          }),
          (function (i) {
            var o = i.document;
            if ("function" != typeof CCH5PlayerStatistic) {
              var n = function n(e, t, i, s, a) {
                (this.playerApi = e),
                  (this.params = t),
                  (this.videoPlayData = i),
                  (this.parentEle = s),
                  (this.playerVersion = a),
                  (this.videoData = {
                    load_start_point: 0,
                    load_end_point: 0,
                    isSeeked: !1,
                    bufferedArray: [],
                    isEnded: !1,
                    isPlayError: !1,
                    playBtnClicked: !1,
                    buffered: !1,
                    isBuffering: !1,
                    isPlaying: !1,
                    isSeeking: !1,
                    userPause: !1,
                    duration: 0,
                    currentTime: 0,
                    seekingTime: 0,
                    isStart: !1,
                    t1: new Date().getTime(),
                    watingNum: 1,
                    canplayNum: 1,
                    isDraging: !1,
                    isDraging2: !1,
                    isChangeQuality: !1,
                    isChangeQuality2: !1,
                    isResume: !1,
                    isEnded2: !1,
                    isCanplay: !1,
                  }),
                  (this.heartId = null),
                  (this.dataPack = {
                    upid: i.UPID || 99999,
                    userid: t.siteid,
                    videoid: t.vid,
                    time: 0,
                    stage: 0,
                    random: 0,
                    id: 0,
                    uvid: null,
                  }),
                  (this.config = {
                    uid: t.siteid,
                    vid: t.vid,
                    video: "cc_" + t.vid,
                  }),
                  (this.customId =
                    encodeURIComponent(this.params.customerId) ||
                    (this.params.consolePlay + "" == "true" ? "preview" : "")),
                  this.getUvid();
              };
              n.prototype = {
                constructor: n,
                init: function () {
                  this.addEvents(), this.start();
                },
                addEvents: function () {
                  var e = this,
                    s = this,
                    t = this.playerApi.playerEvent.airPlay;
                  this.playerApi.addPlayerEventListenner(t, function () {
                    e.send({
                      stage: 50,
                      upid: e.dataPack.upid,
                      userid: e.dataPack.userid,
                      videoid: e.dataPack.videoid,
                      type: 1,
                      play_url: e.getUrlEncodedSourceUrl(),
                      play_position: Math.floor(
                        1e3 * e.playerApi.getCurrentTime()
                      ),
                      time: e.dataPack.time,
                      random: e.dataPack.random,
                      terminal_type: e.isPC() ? 40 : 30,
                      custom_id: e.customId,
                    });
                  });
                  var i = this.playerApi.playerEvent.changeQuality;
                  this.playerApi.addPlayerEventListenner(i, function (e, t) {
                    s.send({
                      stage: 37,
                      upid: s.dataPack.upid,
                      userid: s.dataPack.userid,
                      videoid: s.dataPack.videoid,
                      source_url: encodeURIComponent(e.split("?")[0]),
                      destination_url: encodeURIComponent(t.split("?")[0]),
                      time: s.dataPack.time,
                      random: s.dataPack.random,
                      terminal_type: s.isPC() ? 40 : 30,
                    }),
                      (s.videoData.isChangeQuality = !0),
                      (s.videoData.isChangeQuality2 = !0);
                  });
                  var a = this.playerApi.playerEvent.changeSpeed;
                  this.playerApi.addPlayerEventListenner(a, function (e, t, i) {
                    s.send({
                      stage: 38,
                      upid: s.dataPack.upid,
                      userid: s.dataPack.userid,
                      videoid: s.dataPack.videoid,
                      play_url: encodeURIComponent(i.split("?")[0]),
                      source_speed: e,
                      target_speed: t,
                      time: s.dataPack.time,
                      random: s.dataPack.random,
                      terminal_type: s.isPC() ? 40 : 30,
                    });
                  });
                  var r = o.getElementById("replaybtn"),
                    n = 0;
                  null !== r &&
                    (r.onclick = function () {
                      1 < ++n &&
                        s.send({
                          stage: 77,
                          upid: s.dataPack.upid,
                          userid: s.dataPack.userid,
                          videoid: s.dataPack.videoid,
                          play_position: Math.floor(
                            1e3 * s.videoData.currentTime
                          ),
                          video_duration: Math.floor(
                            1e3 * s.videoData.duration
                          ),
                          time: s.dataPack.time,
                          random: s.dataPack.random,
                          terminal_type: s.isPC() ? 40 : 30,
                          player_status: s.playerApi.getVideostate() ? 0 : 1,
                          play_speed: s.playerApi.getVideoRate(),
                          custom_id: s.customId,
                        });
                    });
                },
                sendReadyPlayState: function (e, t, i) {
                  this.freshDataPack(), this.randomData();
                  var s = e ? 1 : 0,
                    a = {
                      stage: 10,
                      upid: this.dataPack.upid,
                      userid: this.dataPack.userid,
                      videoid: this.dataPack.videoid,
                      status: s,
                      pl_time: 1,
                      pi_time: t,
                      uvid: this.dataPack.uvid,
                      ready_time:
                        new Date().getTime() -
                        this.playerApi.getPlayStartTime(),
                      time: this.dataPack.time,
                      random: this.dataPack.random,
                      terminal_type: this.isPC() ? 40 : 30,
                      cv: this.playerVersion,
                    };
                  !e && i && (a.reason = i), this.send(a);
                },
                smartBuffer: function () {
                  var e = this;
                  this.smartInterval = setInterval(function () {
                    0 == e.videoData.isSeeked &&
                      0 == e.videoData.userPause &&
                      0 == e.videoData.isSeeking &&
                      1 == e.videoData.isPlaying &&
                      e.videoData.currentTime == e.playerApi.getCurrentTime() &&
                      (e.videoData.isPlaying = !1);
                  }, 300);
                },
                getUrlEncodedSourceUrl: function () {
                  var e = this.playerApi.getPlayingUrl();
                  return encodeURIComponent(e.split("?")[0]);
                },
                start: function () {
                  var i = this,
                    e = !0,
                    t = !1,
                    s = undefined;
                  try {
                    for (
                      var a,
                        r = (0, X["default"])([
                          "canplay",
                          "loadstart",
                          "progress",
                          "durationchange",
                          "waiting",
                          "play",
                          "pause",
                          "seeking",
                          "seeked",
                          "ended",
                          "error",
                          "stalled",
                          "loadedmetadata",
                          "timeupdate",
                          "playing",
                          "suspend",
                          "canplaythrough",
                        ]);
                      !(e = (a = r.next()).done);
                      e = !0
                    ) {
                      !(function (t) {
                        i.playerApi.registerVideoEvent(t, function (e) {
                          i[t] && i[t] && i[t](e);
                        });
                      })(a.value);
                    }
                  } catch (n) {
                    (t = !0), (s = n);
                  } finally {
                    try {
                      !e && r["return"] && r["return"]();
                    } finally {
                      if (t) throw s;
                    }
                  }
                },
                isInBuffered: function () {
                  var e,
                    t = this.videoData.bufferedArray,
                    i = !0,
                    s = !1,
                    a = undefined;
                  try {
                    for (
                      var r, n = (0, X["default"])(t);
                      !(i = (r = n.next()).done);
                      i = !0
                    ) {
                      var o = r.value;
                      if (
                        (e = this.playerApi.getCurrentTime()) > o.start &&
                        e < o.end - 10
                      )
                        return !1;
                    }
                  } catch (l) {
                    (s = !0), (a = l);
                  } finally {
                    try {
                      !i && n["return"] && n["return"]();
                    } finally {
                      if (s) throw a;
                    }
                  }
                  return !0;
                },
                canplay: function (e) {
                  if (
                    (this.videoData.canplayNum++, 2 < this.videoData.canplayNum)
                  ) {
                    if (
                      ((this.videoData.isCanplay = !0),
                      1 == this.videoData.isDraging)
                    )
                      return;
                    if (1 == this.videoData.isChangeQuality) return;
                    this.send({
                      stage: 33,
                      upid: this.dataPack.upid,
                      userid: this.dataPack.userid,
                      videoid: this.dataPack.videoid,
                      play_url: this.getUrlEncodedSourceUrl(),
                      play_position: Math.floor(1e3 * e.target.currentTime),
                      load_start_point: this.videoData.load_start_point,
                      load_end_point: this.videoData.load_end_point,
                      buffered_size: -1,
                      buffered_time: this.videoData.load_end_point,
                      time: this.dataPack.time,
                      random: this.dataPack.random,
                      terminal_type: this.isPC() ? 40 : 30,
                    });
                  }
                  (this.videoData.isDraging = !1),
                    (this.videoData.isChangeQuality = !1);
                },
                play: function (e) {
                  0 == this.videoData.playBtnClicked
                    ? (this.videoData.playBtnClicked = !0)
                    : (0 == this.videoData.isEnded &&
                        0 == this.videoData.isChangeQuality2 &&
                        ((this.videoData.isResume = !0),
                        this.send({
                          stage: 33,
                          upid: this.dataPack.upid,
                          userid: this.dataPack.userid,
                          videoid: this.dataPack.videoid,
                          play_url: this.getUrlEncodedSourceUrl(),
                          play_position: Math.floor(1e3 * e.target.currentTime),
                          load_start_point: this.videoData.load_start_point,
                          load_end_point: this.videoData.load_end_point,
                          buffered_size: -1,
                          buffered_time: this.videoData.load_end_point,
                          time: this.dataPack.time,
                          random: this.dataPack.random,
                          terminal_type: this.isPC() ? 40 : 30,
                        }),
                        this.send({
                          stage: 35,
                          upid: this.dataPack.upid,
                          userid: this.dataPack.userid,
                          videoid: this.dataPack.videoid,
                          type: 1,
                          time: this.dataPack.time,
                          random: this.dataPack.random,
                          terminal_type: this.isPC() ? 40 : 30,
                        })),
                      (this.videoData.isEnded = !1),
                      (this.videoData.isChangeQuality2 = !1)),
                    (this.videoData.userPause = !1);
                },
                pause: function (e) {
                  (this.videoData.userPause = !0),
                    e.target.currentTime != this.videoData.duration &&
                      this.send({
                        stage: 35,
                        upid: this.dataPack.upid,
                        userid: this.dataPack.userid,
                        videoid: this.dataPack.videoid,
                        type: 0,
                        time: this.dataPack.time,
                        random: this.dataPack.random,
                        terminal_type: this.isPC() ? 40 : 30,
                      });
                },
                seeking: function (e) {
                  (this.videoData.isSeeked = !0),
                    (this.videoData.isSeeking = !0),
                    (this.videoData.isDraging = !0);
                },
                seeked: function (e) {
                  (this.videoData.isDraging = !0),
                    1 == this.videoData.isEnded2
                      ? (this.videoData.isDraging2 = !1)
                      : (this.videoData.isDraging2 = !0),
                    0 == this.videoData.isEnded &&
                      0 == this.videoData.isChangeQuality &&
                      this.send({
                        stage: 36,
                        upid: this.dataPack.upid,
                        userid: this.dataPack.userid,
                        videoid: this.dataPack.videoid,
                        start_position: Math.floor(
                          1e3 * this.videoData.currentTime
                        ),
                        end_position: Math.floor(1e3 * e.target.currentTime),
                        load_start_point: this.videoData.load_start_point,
                        load_end_point: this.videoData.load_end_point,
                        time: this.dataPack.time,
                        random: this.dataPack.random,
                        terminal_type: this.isPC() ? 40 : 30,
                      }),
                    (this.videoData.isSeeking = !1),
                    (this.videoData.isChangeQuality = !1),
                    (this.videoData.isEnded2 = !1);
                },
                loadstart: function (e) {},
                progress: function (e) {
                  this.videoData.bufferedArray = [];
                  var t = this.playerApi.getVideoBuffered();
                  if (t) {
                    for (var i = t.length, s = 0; s < i; s++) {
                      var a = { start: 0, end: 0 };
                      (a.start = t.start(s)),
                        (a.end = t.end(s)),
                        this.videoData.bufferedArray.push(a);
                    }
                    0 < i &&
                      (void 0 === t.start(i - 1) || void 0 === t.end(i - 1)
                        ? ((this.videoData.load_start_point = 0),
                          (this.videoData.load_end_point = 0))
                        : ((this.videoData.load_start_point = Math.floor(
                            1e3 * t.start(i - 1)
                          )),
                          (this.videoData.load_end_point = Math.floor(
                            1e3 * t.end(i - 1)
                          ))));
                  }
                },
                waiting: function (e) {
                  if (0 != this.videoData.isStart) {
                    if (1 == this.videoData.isDraging) return;
                    if (1 == this.videoData.isChangeQuality) return;
                    this.videoData.watingNum++,
                      this.send({
                        stage: 32,
                        upid: this.dataPack.upid,
                        userid: this.dataPack.userid,
                        videoid: this.dataPack.videoid,
                        play_url: this.getUrlEncodedSourceUrl(),
                        play_position: Math.floor(1e3 * e.target.currentTime),
                        load_start_point: this.videoData.load_start_point,
                        load_end_point: this.videoData.load_end_point,
                        buffer_left: Math.floor(
                          1e3 * this.videoData.duration -
                            this.videoData.load_end_point
                        ),
                        time: this.dataPack.time,
                        random: this.dataPack.random,
                        terminal_type: this.isPC() ? 40 : 30,
                      });
                  }
                  (this.videoData.isDraging = !1),
                    (this.videoData.isChangeQuality = !1);
                },
                ended: function (e) {
                  (this.videoData.isEnded = !0),
                    (this.videoData.isDraging2 = !1),
                    (this.videoData.isResume = !1),
                    (this.videoData.isEnded2 = !0),
                    this.send({
                      stage: 40,
                      upid: this.dataPack.upid,
                      userid: this.dataPack.userid,
                      videoid: this.dataPack.videoid,
                      play_url: this.getUrlEncodedSourceUrl(),
                      play_position: Math.floor(
                        1e3 * this.playerApi.getCurrentTime()
                      ),
                      load_start_point: this.videoData.load_start_point,
                      load_end_point: this.videoData.load_end_point,
                      video_duration: Math.floor(1e3 * this.videoData.duration),
                      retry: 0,
                      time: this.dataPack.time,
                      random: this.dataPack.random,
                      terminal_type: this.isPC() ? 40 : 30,
                      play_speed: this.playerApi.getVideoRate(),
                      custom_id: this.customId,
                    }),
                    this.heartStop();
                },
                stalled: function () {
                  new Date().getTime();
                  switch (i.videoStatus) {
                    case 0:
                      115;
                      break;
                    case 2:
                      113;
                      break;
                    case 4:
                      116;
                      break;
                    case 5:
                      207;
                  }
                },
                durationchange: function (e) {},
                timeupdate: function (e) {
                  (this.videoData.isPlaying = !0),
                    (this.videoData.currentTime = e.target.currentTime);
                },
                playing: function (e) {
                  if (
                    ((this.videoData.duration = e.target.duration),
                    (this.videoData.isPlaying = !0),
                    (this.videoData.userPause = !1),
                    0 == this.videoData.isStart)
                  ) {
                    this.smartBuffer();
                    var t = new Date().getTime();
                    (this.videoData.isStart = !0),
                      this.send({
                        stage: 31,
                        upid: this.dataPack.upid,
                        userid: this.dataPack.userid,
                        videoid: this.dataPack.videoid,
                        play_url: this.getUrlEncodedSourceUrl(),
                        play_position: Math.floor(1e3 * e.target.currentTime),
                        load_start_point: this.videoData.load_start_point,
                        load_end_point: this.videoData.load_end_point,
                        pre_adduration: 0,
                        group_test_count: 1,
                        total_test_time: 1,
                        video_duration: Math.floor(
                          1e3 * this.videoData.duration
                        ),
                        video_size: -1,
                        page_url: encodeURIComponent(i.location.href),
                        uvid: this.dataPack.uvid,
                        ready_time: Math.floor(t - this.videoData.t1),
                        time: this.dataPack.time,
                        random: this.dataPack.random,
                        terminal_type: this.isPC() ? 40 : 30,
                        custom_id: this.customId,
                      });
                  }
                  0 == this.videoData.isResume &&
                    0 == this.videoData.isDraging2 &&
                    0 == this.videoData.isCanplay &&
                    this.send({
                      stage: 77,
                      upid: this.dataPack.upid,
                      userid: this.dataPack.userid,
                      videoid: this.dataPack.videoid,
                      play_position: Math.floor(
                        1e3 * this.videoData.currentTime
                      ),
                      video_duration: Math.floor(1e3 * this.videoData.duration),
                      time: this.dataPack.time,
                      random: this.dataPack.random,
                      terminal_type: this.isPC() ? 40 : 30,
                      player_status: this.playerApi.getVideostate() ? 0 : 1,
                      play_speed: this.playerApi.getVideoRate(),
                      custom_id: this.customId,
                    }),
                    (this.videoData.isResume = !1),
                    (this.videoData.isDraging2 = !1),
                    (this.videoData.isCanplay = !1),
                    this.heartSend();
                },
                canplaythrough: function (e) {},
                suspend: function (e) {},
                error: function (e) {
                  this.heartStop();
                  var t = !(this.videoData.isPlayError = !0);
                  if (e.target.error && e.target.error.code)
                    switch (e.target.error.code) {
                      case e.target.error.MEDIA_ERR_ABORTED:
                        "客户端主动终止视频加载";
                        break;
                      case e.target.error.MEDIA_ERR_NETWORK:
                        "播放过程中视频加载失败";
                        break;
                      case e.target.error.MEDIA_ERR_DECODE:
                        "解码错误";
                        break;
                      case e.target.error.MEDIA_ERR_SRC_NOT_SUPPORTED:
                        (this.dataPack.stage = 34), (t = !0);
                        break;
                      default:
                        "未知错误";
                    }
                  t
                    ? this.send({
                        stage: 34,
                        upid: this.dataPack.upid,
                        userid: this.dataPack.userid,
                        videoid: this.dataPack.videoid,
                        play_url: this.getUrlEncodedSourceUrl(),
                        play_position: Math.floor(1e3 * e.target.currentTime),
                        load_start_point: 0,
                        load_end_point: 0,
                        status: 1,
                        time: this.dataPack.time,
                        random: this.dataPack.random,
                        terminal_type: this.isPC() ? 40 : 30,
                      })
                    : this.send({
                        stage: 34,
                        upid: this.dataPack.upid,
                        userid: this.dataPack.userid,
                        videoid: this.dataPack.videoid,
                        play_url: this.getUrlEncodedSourceUrl(),
                        play_position: Math.floor(1e3 * e.target.currentTime),
                        load_start_point: this.videoData.load_start_point,
                        load_end_point: this.videoData.load_end_point,
                        status: 2,
                        time: this.dataPack.time,
                        random: this.dataPack.random,
                        terminal_type: this.isPC() ? 40 : 30,
                      });
                },
                setCookie: function (e, t, i) {
                  var s = new Date();
                  s.setTime(s.getTime() + 60 * (i || 24) * 60 * 1e3 * 365),
                    (o.cookie =
                      e +
                      "=" +
                      escape(t) +
                      ";expires=" +
                      s.toGMTString() +
                      ";path=/");
                },
                getCookie: function (e) {
                  var t = o.cookie.match(
                    new RegExp("(^| )" + e + "=([^;]*)(;|$)")
                  );
                  return null != t ? unescape(t[2]) : null;
                },
                isPC: function () {
                  if (
                    !/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i.test(
                      navigator.userAgent
                    )
                  )
                    return !0;
                },
                initDataPack: function () {
                  for (var e = 1; e <= 32; e++) {
                    Math.floor(16 * Math.random()).toString(16),
                      (8 != e && 12 != e && 16 != e && 20 != e) || "-";
                  }
                },
                freshDataPack: function () {
                  this.dataPack.time = new Date().getTime();
                },
                randomData: function () {
                  this.dataPack.random = Math.floor(
                    Math.random() * Math.pow(10, 7)
                  );
                },
                idData: function () {
                  var e = new Date(),
                    t = e.getHours(),
                    i = e.getMinutes(),
                    s = e.getSeconds();
                  this.dataPack.id =
                    (3600 * t + 60 * i + s).toString(36) +
                    "_" +
                    Math.round(999999 * Math.random()).toString(36);
                },
                getUvid: function () {
                  var e;
                  null != this.getCookie("uniqueVisitorId")
                    ? (e = this.getCookie("uniqueVisitorId"))
                    : ((e = (function t() {
                        var e = function e() {
                          return ((65536 * (1 + Math.random())) | 0)
                            .toString(16)
                            .substring(1);
                        };
                        return (
                          e() +
                          e() +
                          "-" +
                          e() +
                          "-" +
                          e() +
                          "-" +
                          e() +
                          "-" +
                          e() +
                          e() +
                          e()
                        );
                      })()),
                      this.setCookie("uniqueVisitorId", e)),
                    (this.dataPack.uvid = s.hex_sha1(e).toUpperCase());
                },
                parseJsonToParams: function (e) {
                  var t = [];
                  for (var i in e) {
                    var s = i + "=" + e[i];
                    t.push(s);
                  }
                  return t.join("&");
                },
                heartSend: function () {
                  if (!this.heartId) {
                    var e = this;
                    this.heartId = setInterval(function () {
                      e.send({
                        stage: 77,
                        upid: e.dataPack.upid,
                        userid: e.dataPack.userid,
                        videoid: e.dataPack.videoid,
                        play_position: Math.floor(
                          1e3 * e.videoData.currentTime
                        ),
                        video_duration: Math.floor(1e3 * e.videoData.duration),
                        time: e.dataPack.time,
                        random: e.dataPack.random,
                        terminal_type: e.isPC() ? 40 : 30,
                        player_status: e.playerApi.getVideostate() ? 0 : 1,
                        play_speed: e.playerApi.getVideoRate(),
                        custom_id: e.customId,
                      });
                    }, 1e4);
                  }
                },
                heartStop: function () {
                  clearInterval(this.heartId), (this.heartId = null);
                },
                send: function (e) {
                  this.idData(),
                    this.freshDataPack(),
                    this.randomData(),
                    this.sendRequest(
                      "https://m-flare.bokecc.com/flash/playlog",
                      e
                    );
                },
                sendRequest: function (e, t) {
                  var i = "";
                  if (t) {
                    var s = this.parseJsonToParams(t) + "&" + i;
                    i = s.substring(0, s.length - 1);
                  }
                  var a =
                      o.getElementsByTagName("head")[0] || o.documentElement,
                    r = o.createElement("script");
                  -1 < e.indexOf("?")
                    ? (r.src = e + "&" + i)
                    : (r.src = e + "?" + i),
                    a.insertBefore(r, a.firstChild),
                    (r.onload = r.onreadystatechange =
                      function () {
                        (this.readyState &&
                          !/loaded|complete/.test(r.readyState)) ||
                          ((r.onload = r.onreadystatechange = null),
                          a && r.parentNode && a.removeChild(r));
                      });
                },
              };
              var s = {
                hexcase: 0,
                b64pad: "",
                chrsz: 8,
                hex_sha1: function (e) {
                  return this.binb2hex(
                    this.core_sha1(this.str2binb(e), e.length * this.chrsz)
                  );
                },
                b64_sha1: function (e) {
                  return this.binb2hex(
                    this.core_sha1(this.str2binb(e), e.length * this.chrsz)
                  );
                },
                str_sha1: function (e) {
                  return this.binb2hex(
                    this.core_sha1(this.str2binb(e), e.length * this.chrsz)
                  );
                },
                hex_hmac_sha1: function (e, t) {
                  return this.binb2hex(this.core_hmac_sha1(e, t));
                },
                b64_hmac_sha1: function (e, t) {
                  return this.binb2b64(this.core_hmac_sha1(e, t));
                },
                str_hmac_sha1: function (e, t) {
                  return this.binb2str(this.core_hmac_sha1(e, t));
                },
                sha1_vm_test: function () {
                  return (
                    "a9993e364706816aba3e25717850c26c9cd0d89d" ==
                    this.hex_sha1("abc")
                  );
                },
                core_sha1: function (e, t) {
                  (e[t >> 5] |= 128 << (24 - (t % 32))),
                    (e[15 + (((t + 64) >> 9) << 4)] = t);
                  for (
                    var i = Array(80),
                      s = 1732584193,
                      a = -271733879,
                      r = -1732584194,
                      n = 271733878,
                      o = -1009589776,
                      l = 0;
                    l < e.length;
                    l += 16
                  ) {
                    for (
                      var c = s, d = a, h = r, u = n, p = o, y = 0;
                      y < 80;
                      y++
                    ) {
                      i[y] =
                        y < 16
                          ? e[l + y]
                          : this.rol(
                              i[y - 3] ^ i[y - 8] ^ i[y - 14] ^ i[y - 16],
                              1
                            );
                      var m = this.safe_add(
                        this.safe_add(this.rol(s, 5), this.sha1_ft(y, a, r, n)),
                        this.safe_add(this.safe_add(o, i[y]), this.sha1_kt(y))
                      );
                      (o = n), (n = r), (r = this.rol(a, 30)), (a = s), (s = m);
                    }
                    (s = this.safe_add(s, c)),
                      (a = this.safe_add(a, d)),
                      (r = this.safe_add(r, h)),
                      (n = this.safe_add(n, u)),
                      (o = this.safe_add(o, p));
                  }
                  return Array(s, a, r, n, o);
                },
                sha1_ft: function (e, t, i, s) {
                  return e < 20
                    ? (t & i) | (~t & s)
                    : e < 40
                    ? t ^ i ^ s
                    : e < 60
                    ? (t & i) | (t & s) | (i & s)
                    : t ^ i ^ s;
                },
                sha1_kt: function (e) {
                  return e < 20
                    ? 1518500249
                    : e < 40
                    ? 1859775393
                    : e < 60
                    ? -1894007588
                    : -899497514;
                },
                core_hmac_sha1: function (e, t) {
                  var i = this.str2binb(e);
                  16 < i.length &&
                    (i = this.core_sha1(i, e.length * this.chrsz));
                  for (var s = Array(16), a = Array(16), r = 0; r < 16; r++)
                    (s[r] = 909522486 ^ i[r]), (a[r] = 1549556828 ^ i[r]);
                  var n = this.core_sha1(
                    s.concat(this.str2binb(t)),
                    512 + t.length * this.chrsz
                  );
                  return this.core_sha1(a.concat(n), 672);
                },
                safe_add: function (e, t) {
                  var i = (65535 & e) + (65535 & t);
                  return (
                    (((e >> 16) + (t >> 16) + (i >> 16)) << 16) | (65535 & i)
                  );
                },
                rol: function (e, t) {
                  return (e << t) | (e >>> (32 - t));
                },
                str2binb: function (e) {
                  for (
                    var t = Array(), i = (1 << this.chrsz) - 1, s = 0;
                    s < e.length * this.chrsz;
                    s += this.chrsz
                  )
                    t[s >> 5] |=
                      (e.charCodeAt(s / this.chrsz) & i) << (24 - (s % 32));
                  return t;
                },
                binb2str: function (e) {
                  for (
                    var t = "", i = (1 << this.chrsz) - 1, s = 0;
                    s < 32 * e.length;
                    s += this.chrsz
                  )
                    t += String.fromCharCode(
                      (e[s >> 5] >>> (24 - (s % 32))) & i
                    );
                  return t;
                },
                binb2hex: function (e) {
                  for (
                    var t = this.hexcase
                        ? "0123456789ABCDEF"
                        : "0123456789abcdef",
                      i = "",
                      s = 0;
                    s < 4 * e.length;
                    s++
                  )
                    i +=
                      t.charAt((e[s >> 2] >> (8 * (3 - (s % 4)) + 4)) & 15) +
                      t.charAt((e[s >> 2] >> (8 * (3 - (s % 4)))) & 15);
                  return i;
                },
                binb2b64: function (e) {
                  for (var t = "", i = 0; i < 4 * e.length; i += 3)
                    for (
                      var s =
                          (((e[i >> 2] >> (8 * (3 - (i % 4)))) & 255) << 16) |
                          (((e[(i + 1) >> 2] >> (8 * (3 - ((i + 1) % 4)))) &
                            255) <<
                            8) |
                          ((e[(i + 2) >> 2] >> (8 * (3 - ((i + 2) % 4)))) &
                            255),
                        a = 0;
                      a < 4;
                      a++
                    )
                      8 * i + 6 * a > 32 * e.length
                        ? (t += this.b64pad)
                        : (t +=
                            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(
                              (s >> (6 * (3 - a))) & 63
                            ));
                  return t;
                },
              };
              (i.CCH5PlayerStatistic = function (e, t, i, s, a) {
                var r = new n(e, t, i, s, a);
                return {
                  init: function () {
                    r.init();
                  },
                  sendReadyPlayState: function (e, t, i) {
                    r.sendReadyPlayState(e, t, i);
                  },
                  destroy: function () {
                    r.heartId && clearInterval(r.heartId),
                      r.smartInterval && clearInterval(r.smartInterval);
                  },
                };
              }),
                (i.CCH5PlayerStatistic.PLAY_FAIL_REASONS = {
                  VIDEO_DOING: 113,
                  VIDEO_DISABLE: 114,
                  VIDEO_ERROR: 115,
                  NO_COPY: 116,
                  RESULT_FAILE: 120,
                  AUTH_ERROR: 207,
                  NET_ERROR: 121,
                });
            }
          })(window),
          (function (l) {
            if ("function" != typeof CCH5PlayerTail) {
              var c = function c(e) {
                var t = e.playerApi,
                  i = e.params,
                  s = e.videoPlayData,
                  a = e.parentEle,
                  r = e.zIndex,
                  n = e.videoElem;
                (this.playerApi = t),
                  (this.params = i),
                  (this.videoPlayData = s),
                  (this.parentEle = a),
                  (this.zIndex = r),
                  (this.videoElem = n),
                  (this.adVideo = null),
                  (this.isIphonePlay = !1),
                  (this.intervals = []);
              };
              (c.prototype = {
                constructor: c,
                init: function () {
                  this.registerVideoListener();
                },
                registerVideoListener: function () {
                  var e = this;
                  this.playerApi.registerVideoEvent("ended", function () {
                    e.playUrl ? e.initAd() : e.loadTeaser();
                  });
                },
                getCopy: function (e) {
                  if (e && e.length) {
                    for (
                      var t = 1 == e[0].mediatype && e[0], i = 0;
                      i < e.length;
                      i++
                    )
                      1 == e[i].mediatype &&
                        t.quality > e[i].quality &&
                        (t = e[i]);
                    return t;
                  }
                },
                initAd: function () {
                  this.createAdVideoView(),
                    (this.ccAdEndBox = $.queryEle(
                      ".ccAdEndBox",
                      this.parentEle
                    )),
                    (this.ccAdEndBox.style.zIndex = this.zIndex),
                    (this.adPlayBtn = $.queryEle(
                      ".ccH5EndAdPlayBtn",
                      this.parentEle
                    )),
                    (this.oLoading = $.queryEle(
                      ".tailLoading",
                      this.parentEle
                    )),
                    this.initAdEvents(),
                    this.checkIsPlay();
                },
                createAdVideoView: function () {
                  var e = document.createElement("div");
                  this.parentEle.appendChild(e),
                    (e.outerHTML =
                      "<div class='ccAdEndBox'>  <div class='ccH5PlayBtn ccH5EndAdPlayBtn' style='display:none;'></div>  <div class='ccH5Loading tailLoading' style='z-index: 5001;display:block;'></div>\t</div>"),
                    (e = $.queryEle(".ccAdEndBox", this.parentEle));
                  var t = null;
                  this.videoElem &&
                  "video" === this.videoElem.tagName.toLowerCase()
                    ? (this.playerApi.clearVttTrack(),
                      this.playerApi.clearVideoAllListeners(),
                      this.playerApi.cch5DestroyCoreHls(),
                      (t = this.videoElem),
                      e.appendChild(t))
                    : ((t = document.createElement("video")),
                      e.appendChild(t),
                      (t.outerHTML =
                        "<video id='cch5playerAdVideo' autoplay x-webkit-airplay='allow' x5-playsinline webkit-playsinline playsinline><source></source></video>"),
                      (t = $.queryEle("#cch5playerAdVideo", this.parentEle))),
                    "h5-page" === t.getAttribute("x5-video-player-type") &&
                      (t.removeAttribute("x5-video-player-type"),
                      t.setAttribute("x-webkit-airplay", "allow"),
                      t.setAttribute("x5-playsinline", "")),
                    (t.id = "cc_ad_" + this.params.vid),
                    (t.src = this.playUrl),
                    (t.querySelector("source").src = this.playUrl);
                  var i = $.getCross(this.params, this.videoPlayData);
                  i && 0 < i.length && (t.crossOrigin = i),
                    (t.poster = this.poster),
                    (this.adVideo = t),
                    this.playerApi.setGlobalVideoElem(this.adVideo);
                },
                checkIsPlay: function () {
                  var e = this;
                  this.timer && (clearTimeout(this.timer), (this.timer = null)),
                    (this.timer = setTimeout(function () {
                      e.adVideo.currentTime <= 0 &&
                        (e.adVideo.pause(),
                        (e.adPlayBtn.style.display = "block"),
                        (e.oLoading.style.display = "none"),
                        clearTimeout(e.timer));
                    }, 2e4));
                },
                initAdEvents: function () {
                  var t = this;
                  $.addListener(this.adPlayBtn, "click", function () {
                    t.adVideo.play(), (t.oLoading.style.display = "block");
                  }),
                    this.playerApi.registerVideoEvent("loadstart", function () {
                      t.adVideo.src &&
                        -1 != t.adVideo.src.indexOf(".m3u8") &&
                        t.hlsPlay();
                    }),
                    this.playerApi.registerVideoEvent("play", function () {
                      (t.adPlayBtn.style.display = "none"),
                        t.adVideoStared || (t.adVideoStared = !0);
                    }),
                    this.playerApi.registerVideoEvent("canplay", function () {
                      (t.oLoading.style.display = "none"),
                        t.adVideoStared ||
                          "true" != t.params.autoStart ||
                          t.playerApi.videoPlay();
                    }),
                    this.playerApi.registerVideoEvent("progress", function () {
                      t.adVideo.paused &&
                        $.isIPhone() &&
                        !t.isIphonePlay &&
                        ((t.isIphonePlay = !0), t.playerApi.videoPlay());
                    }),
                    this.playerApi.registerVideoEvent("ended", function () {
                      t.skipAd();
                    }),
                    this.adVideo.src &&
                      !$.isM3u8Url(this.adVideo.src) &&
                      this.playerApi.registerVideoEvent("error", function () {
                        t.skipAd();
                      }),
                    this.playerApi.registerVideoEvent(
                      "timeupdate",
                      function (e) {
                        0 < e.target.currentTime &&
                          "block" === t.oLoading.style.display &&
                          (t.oLoading.style.display = "none"),
                          1 * t.params.tailTime &&
                            e.target.currentTime > 1 * t.params.tailTime &&
                            t.skipAd();
                      }
                    );
                },
                hlsPlay: function () {
                  var e = this;
                  if ("function" == typeof Hls)
                    if (Hls.isSupported()) {
                      this.cch5DestroyHls();
                      var t = this.adVideo.src,
                        i = new Hls();
                      i.loadSource(t),
                        i.attachMedia(this.adVideo),
                        (this.hls = i);
                    } else console.log("hls is not support!");
                  else
                    $.loadScript(
                      "https://p.bokecc.com/js/player/hls.js?v=1",
                      function () {
                        e.hlsPlay();
                      }
                    );
                },
                cch5DestroyHls: function () {
                  this.hls &&
                    (this.hls.destroy(),
                    this.hls.bufferTimer &&
                      (clearInterval(this.hls.bufferTimer),
                      (this.hls.bufferTimer = undefined)),
                    (this.hls = null));
                },
                loadTeaser: function () {
                  var i = this,
                    s = this,
                    e = this.playerApi.getVideoFileParams() || {};
                  ((e = JSON.parse((0, G["default"])(e))).vid =
                    this.params.tailId),
                    this.params.tailSiteId &&
                      (e.siteid = this.params.tailSiteId),
                    $.ccJsonp({
                      url: "https://p.bokecc.com/servlet/getvideofile",
                      data: e,
                      timeOut: 5e3,
                      success: function (e) {
                        if (e && e.copies) {
                          var t = i.getCopy(e.copies);
                          (i.playUrl = t && t.playurl),
                            (i.poster = e.img),
                            s.initAd(e);
                        } else s.playerApi.triggerPlayerEnded();
                      },
                      error: function (e) {
                        s.playerApi.triggerPlayerEnded();
                      },
                    });
                },
                skipAd: function () {
                  this.cch5DestroyHls(),
                    this.playerApi.clearVideoAllListeners(),
                    (this.adVideo.src = ""),
                    (this.adVideo.poster = ""),
                    (this.adVideo = null),
                    this.timer &&
                      (clearTimeout(this.timer), (this.timer = null)),
                    this.resetNormalPlay(),
                    this.ccAdEndBox.parentNode.removeChild(this.ccAdEndBox),
                    (this.adVideoStared = !1),
                    this.playerApi.triggerPlayerEnded();
                },
                resetNormalPlay: function () {
                  var e = this,
                    t = $.queryEle("#replaybtn", this.parentEle);
                  t &&
                    "block" === t.style.display &&
                    this.playerApi.hidePlayBtn();
                  var i = document.createElement("div");
                  this.parentEle.appendChild(i),
                    (i.outerHTML =
                      '<div class="ccAdEndBox" style="z-index: 10001;"><div id="resetPlay" class="adrPlayBtn"></div></div>');
                  var s = $.queryEle("#resetPlay", this.parentEle);
                  this.playerApi.setLastVideoTime(0),
                    $.addListener(s, "click", function () {
                      e.playerApi.rerender();
                    });
                },
              }),
                (l.CCH5PlayerTail = function (e) {
                  var o = new c(e);
                  return {
                    init: function () {
                      o.init();
                    },
                    destroy: function () {
                      var e = !0,
                        t = !1,
                        i = undefined;
                      try {
                        for (
                          var s, a = (0, X["default"])(o.intervals);
                          !(e = (s = a.next()).done);
                          e = !0
                        ) {
                          var r = s.value;
                          l.clearInterval(r);
                        }
                      } catch (n) {
                        (t = !0), (i = n);
                      } finally {
                        try {
                          !e && a["return"] && a["return"]();
                        } finally {
                          if (t) throw i;
                        }
                      }
                    },
                  };
                });
            }
          })(window),
          (function (e) {
            if ("function" != typeof CCH5PlayerTeaser) {
              var o = function o(e) {
                var t = e.playerApi,
                  i = e.params,
                  s = e.videoPlayData,
                  a = e.parentEle,
                  r = e.zIndex,
                  n = e.videoElem;
                (this.playerApi = t),
                  (this.params = i),
                  (this.videoPlayData = s),
                  (this.parentEle = a),
                  (this.zIndex = r),
                  (this.videoElem = n),
                  (this.adVideo = null),
                  (this.hasAd = !1);
              };
              (o.prototype = {
                constructor: o,
                init: function () {
                  this.loadTeaser();
                },
                getCopy: function (e) {
                  if (e && e.length) {
                    for (
                      var t = 1 == e[0].mediatype && e[0], i = 0;
                      i < e.length;
                      i++
                    )
                      1 == e[i].mediatype &&
                        t.quality > e[i].quality &&
                        (t = e[i]);
                    return t;
                  }
                },
                initAd: function (e) {
                  this.hasAd = !0;
                  var t = this.getCopy(e.copies);
                  (this.playUrl =
                    t && t.playurl && t.playurl.replace(/http:/i, "https:")),
                    this.createAdVideoView(e),
                    this.initAdVideoEvents();
                },
                createAdVideoView: function (e) {
                  var t = document.createElement("div");
                  (this.parentEle.innerHTML = ""),
                    this.parentEle.appendChild(t),
                    (t.outerHTML =
                      "<div class='ccH5playerBox' style='width: 100%; height: 100%;'>  <div class='ccH5PlayBtn'></div>  <div class='ccH5Loading' style='z-index: 5001;display:none;'></div>\t</div>"),
                    ((t = $.queryEle(
                      ".ccH5playerBox",
                      this.parentEle
                    )).style.zIndex = this.zIndex);
                  var i = null;
                  this.videoElem &&
                  "video" === this.videoElem.tagName.toLowerCase()
                    ? (this.playerApi.clearVttTrack(),
                      this.playerApi.clearVideoAllListeners(),
                      (i = this.videoElem),
                      t.appendChild(i))
                    : ((i = document.createElement("video")),
                      t.appendChild(i),
                      (i.outerHTML =
                        "<video id='cch5playerAdVideo' x-webkit-airplay='allow' x5-playsinline webkit-playsinline playsinline><source></source></video><source></source></video>"),
                      (i = $.queryEle("#cch5playerAdVideo", this.parentEle))),
                    "h5-page" === i.getAttribute("x5-video-player-type") &&
                      (i.removeAttribute("x5-video-player-type"),
                      i.setAttribute("x-webkit-airplay", "allow"),
                      i.setAttribute("x5-playsinline", "")),
                    (i.id = "cc_ad_" + this.params.vid),
                    (i.src = this.playUrl),
                    (i.querySelector("source").src = this.playUrl);
                  var s = $.getCross(this.params, this.videoPlayData);
                  s && 0 < s.length && (i.crossOrigin = s),
                    "true" !== this.params.autoStart ||
                      $.isMoble() ||
                      (i.autoplay = "autoplay"),
                    (i.poster = e.img),
                    (i.style.width = this.params.width),
                    (this.adVideo = i),
                    this.playerApi.setGlobalVideoElem(this.adVideo);
                },
                initAdVideoEvents: function () {
                  var t = this;
                  (this.adPlayBtn = $.queryEle(".ccH5PlayBtn", this.parentEle)),
                    (this.oLoading = $.queryEle(
                      ".ccH5Loading",
                      this.parentEle
                    )),
                    $.addListener(this.adPlayBtn, "click", function () {
                      t.adVideo.play(), (t.oLoading.style.display = "block");
                    }),
                    this.playerApi.registerVideoEvent("canplay", function () {
                      (t.oLoading.style.display = "none"),
                        t.adVideoStared ||
                          "true" != t.params.autoStart ||
                          t.playerApi.videoPlay();
                    }),
                    this.playerApi.registerVideoEvent("play", function () {
                      t.adVideoStared ||
                        ((t.adVideoStared = !0),
                        (t.adPlayBtn.style.display = "none"));
                    }),
                    this.playerApi.registerVideoEvent("loadstart", function () {
                      t.adVideo.src &&
                        $.isM3u8Url(t.adVideo.src) &&
                        t.hlsPlay();
                    }),
                    this.playerApi.registerVideoEvent(
                      "timeupdate",
                      function (e) {
                        0 < e.target.currentTime &&
                          "block" === t.oLoading.style.display &&
                          (t.oLoading.style.display = "none"),
                          1 * t.params.teaserTime &&
                            e.target.currentTime > 1 * t.params.teaserTime &&
                            t.skipAd();
                      }
                    ),
                    this.playerApi.registerVideoEvent("ended", function () {
                      t.skipAd();
                    }),
                    this.adVideo.src &&
                      !$.isM3u8Url(this.adVideo.src) &&
                      this.playerApi.registerVideoEvent("error", function () {
                        t.skipAd();
                      });
                },
                hlsPlay: function () {
                  var e = this;
                  if ("function" == typeof Hls)
                    if (Hls.isSupported()) {
                      this.cch5DestroyHls();
                      var t = this.adVideo.src,
                        i = new Hls();
                      i.loadSource(t),
                        i.attachMedia(this.adVideo),
                        (this.hls = i);
                    } else this.handleLog("hls is not support!");
                  else
                    $.loadScript(
                      "https://p.bokecc.com/js/player/hls.js?v=1",
                      function () {
                        e.hlsPlay();
                      }
                    );
                },
                cch5DestroyHls: function () {
                  this.hls &&
                    (this.hls.destroy(),
                    this.hls.bufferTimer &&
                      (clearInterval(this.hls.bufferTimer),
                      (this.hls.bufferTimer = undefined)),
                    (this.hls = null));
                },
                loadTeaser: function () {
                  var t = this,
                    e = this.playerApi.getVideoFileParams() || {};
                  ((e = JSON.parse((0, G["default"])(e))).vid =
                    this.params.teaserId),
                    this.params.teaserSiteId &&
                      (e.siteid = this.params.teaserSiteId),
                    $.ccJsonp({
                      url: "https://p.bokecc.com/servlet/getvideofile",
                      data: e,
                      timeOut: 5e3,
                      success: function (e) {
                        e && e.copies
                          ? t.initAd(e)
                          : t.playerApi.readyH5Play(!1);
                      },
                      error: function (e) {
                        t.playerApi.readyH5Play(!1);
                      },
                    });
                },
                skipAd: function () {
                  this.cch5DestroyHls(),
                    (this.params.autoStart = "true"),
                    this.playerApi.clearVideoAllListeners(),
                    this.playerApi.readyH5Play(this.hasAd);
                },
              }),
                (e.CCH5PlayerTeaser = function (e) {
                  var t = new o(e);
                  return {
                    init: function () {
                      t.init();
                    },
                  };
                });
            }
          })(window),
          window,
          (C = window.document),
          (k = function k(e, t, i, s, a) {
            (this.playerApi = e),
              (this.params = t),
              (this.videoPlayData = i),
              (this.parentEle = s),
              (this.zIndex = a);
          }),
          (k.prototype = {
            isCanClose: !1,
            init: function () {
              this.createView(), this.initData(), this.registerVideoListener();
            },
            createView: function () {
              var e = C.createElement("div");
              this.parentEle.appendChild(e),
                (e.outerHTML =
                  "<div id='ccVisitorBox' style='display:none'></div><p class='ccVisitorSuccessTips'>提交成功，感谢您的填写</p>"),
                ($.queryEle("#ccVisitorBox", this.parentEle).style.zIndex =
                  this.zIndex),
                ($.queryEle(
                  ".ccVisitorSuccessTips",
                  this.parentEle
                ).style.zIndex = this.zIndex);
            },
            initData: function () {
              (this.ccMask = $.queryEle("#ccMask", this.parentEle)),
                (this.visitorBox = $.queryEle("#ccVisitorBox", this.parentEle));
            },
            registerVideoListener: function () {
              var t = this,
                i = this;
              this.playerApi.registerVideoEvent("timeupdate", function () {
                if (t.videoPlayData.visitor) {
                  var e = t.playerApi.getCurrentTime();
                  parseInt(e) >= t.videoPlayData.visitor.appearTime &&
                    !1 === i.isCanClose &&
                    i.createVistorView(t.videoPlayData.visitor);
                }
              });
            },
            createVistorView: function (e) {
              if (null === this.ccMask) {
                var t = C.createElement("div");
                (t.className = "ccMask"),
                  (t.id = "ccMask"),
                  this.parentEle.appendChild(t),
                  (this.ccMask = t);
              }
              if (null === this.visitorBox) {
                var i = C.createElement("div");
                (i.id = "ccVisitorBox"),
                  this.parentEle.appendChild(i),
                  (this.visitorBox = i);
              }
              var s = e.visitorMessage.reduce(function (e, t) {
                  return (
                    e +
                    '<div class="row"><span>' +
                    t.visitorMes +
                    '</span><input type="text" placeholder=' +
                    t.visitorTip +
                    "></div>"
                  );
                }, ""),
                a = '<button class="jumpOver">跳过</button>';
              0 === e.isJump && (a = "");
              var r =
                '<div class="header">\t    <a href=http://' +
                e.jumpURL +
                ">\t\t    <img src=" +
                e.imageURL +
                " alt=" +
                e.title +
                " title=" +
                e.title +
                '>\t\t</a>\t</div>\t<div class="body">' +
                s +
                '  <p class="ccVisitorErrorTips"></p>\t</div>\t<div class="footer">\t    <button class="submit">提交</button>' +
                a +
                "\t</div>";
              this.playerApi.videoPause(),
                (this.ccMask.style.display = "block"),
                (this.visitorBox.style.display = "block"),
                (this.visitorBox.innerHTML = r),
                (this.visitorSubmitBtn = $.queryEle(
                  ".submit",
                  this.visitorBox
                )),
                (this.jumpOverBtn = $.queryEle(".jumpOver", this.visitorBox)),
                this.visitorSubmitBtn.addEventListener(
                  "click",
                  this.visitorSubmit.bind(this, e)
                ),
                0 !== e.isJump &&
                  this.jumpOverBtn.addEventListener(
                    "click",
                    this.closeVisitor.bind(this)
                  );
            },
            visitorSubmit: function (e) {
              for (
                var t = $.queryEleAll("input", this.visitorBox),
                  i = $.queryEleAll("span", this.visitorBox),
                  s = [],
                  a = !1,
                  r = 0;
                r < t.length;
                r++
              )
                if (
                  "" ===
                  t[r].value.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
                ) {
                  a = !0;
                  break;
                }
              if (a) alert("请检查是否有未填项");
              else {
                for (r = 0; r < t.length; r++) {
                  var n = {};
                  (n.collector = i[r].innerText),
                    (n.collectorMes = t[r].value),
                    s.push(n);
                }
                var o = (0, G["default"])(s),
                  l = this,
                  c = e.appearTime;
                $.ccJsonp({
                  url: "https://spark.bokecc.com/servlet/visitor/collect",
                  data: {
                    visitorId: e.visitorId,
                    videoId: this.videoPlayData.vid,
                    userId: this.videoPlayData.uid,
                    message: o,
                  },
                  success: function (e) {
                    var t = $.queryEle(".ccVisitorErrorTips", l.visitorBox),
                      i = $.queryEle(".ccVisitorSuccessTips", l.parentEle);
                    if ("OK" !== e.result)
                      throw (
                        ((t.innerText = "请尝试重新提交或联系网站管理员"),
                        (t.style.display = "block"),
                        setTimeout(function () {
                          t.style.display = "none";
                        }, 4e3),
                        "发送数据失败参考 " + e.error)
                      );
                    l.closeVisitor(c),
                      (i.style.display = "block"),
                      setTimeout(function () {
                        i.style.display = "none";
                      }, 3e3);
                  },
                  error: function () {},
                });
              }
            },
            closeVisitor: function (e) {
              (this.ccMask.style.display = "none"),
                (this.visitorBox.style.display = "none"),
                (this.isCanClose = !0),
                (this.videoPlayData.visitor = null),
                e !== undefined &&
                  "number" == typeof e &&
                  this.playerApi.setCurrentTime(e),
                this.playerApi.videoPlay();
            },
            getVistorIsShow: function () {
              var e = $.queryEle("#ccVisitorBox", this.parentEle);
              return !(!e || "block" !== e.style.display);
            },
          }),
          (window.CCH5PlayerVistor = function (e, t, i, s, a) {
            var r = new k(e, t, i, s, a);
            return {
              init: function () {
                r.init();
              },
              getVistorIsShow: function () {
                return r.getVistorIsShow();
              },
            };
          }),
          (B = window),
          (I = B.document),
          (L = function L(e) {
            (this.playerApi = e.playerApi),
              (this.params = e.params),
              (this.videoPlayData = e.videoPlayData),
              (this.parentEle = e.parentEle),
              (this.zIndex = e.zIndex),
              (this.vote = []),
              (this.voteIdx = 0),
              (this.openVote = !0);
          }),
          (L.prototype = {
            ans: {},
            answerd: {},
            isVoteShow: !1,
            init: function (e) {
              var t = this;
              e &&
                e.length &&
                (this.params.watchStartTime &&
                  8 !== $.IEVersion() &&
                  (e = e.filter(function (e) {
                    return 1 * e.showTime > t.params.watchStartTime;
                  })),
                (this.vote = this.handleVoteData(e)),
                this.registerVideoListener());
            },
            handleVoteData: function (e) {
              for (var t = void 0, i = 0; i < e.length - 1; i++)
                for (var s = i + 1; s < e.length; s++)
                  e[i].showTime > e[s].showTime &&
                    ((t = e[i]), (e[i] = e[s]), (e[s] = t));
              return e;
            },
            registerVideoListener: function () {
              var e = this;
              this.playerApi.registerVideoEvent("timeupdate", function () {
                e.vote &&
                  0 !== e.vote.length &&
                  e.openVote &&
                  (e.monitorVote(), e.queryVote());
              });
            },
            queryVote: function () {
              var e = this.vote;
              if (e && e.length) {
                var t = this.playerApi.getCurrentTime();
                this.ccVoteContainer &&
                  this.isVoteShow &&
                  t < this.vote[this.voteIdx].showTime &&
                  (this.parentEle.removeChild(this.ccVoteContainer),
                  (this.isVoteShow = !1));
                for (var i = 0, s = 0; s < e.length; s++)
                  if (!this.ans["ans_" + e[s].id]) {
                    var a = e[s].showTime;
                    if (a < t) {
                      i = a;
                      break;
                    }
                  }
                "false" !== this.params.forceShowVote &&
                  0 < i &&
                  this.playerApi.videoPause();
              }
            },
            isShowVote: function (e, t) {
              return "false" === this.params.forceShowVote ? e == t : t <= e;
            },
            monitorVote: function () {
              for (
                var e = this,
                  o = this,
                  l = this.vote,
                  t = this.playerApi.getCurrentTime(),
                  i = parseInt(t),
                  s = 0;
                s < l.length;
                s++
              ) {
                var a, r, c, d, h, u;
                if (
                  !this.isVoteShow &&
                  !this.ans["ans_" + l[s].id] &&
                  this.isShowVote(i, l[s].showTime)
                )
                  !(function () {
                    var n = function n() {
                      for (var e = 0; e < arguments.length; e++)
                        return arguments[e].toString() == arguments[e + 1];
                    };
                    for (
                      e.voteIdx = s,
                        e.playerApi.videoPause(),
                        a =
                          I.fullscreenElement ||
                          I.msFullscreenElement ||
                          I.mozFullScreenElement ||
                          I.webkitFullscreenElement ||
                          !1,
                        r =
                          $.isIPhone() &&
                          $.isWeixin() &&
                          e.playerApi.displayingFullscreen(),
                        (a || r) && e.playerApi.exitFullScreen(),
                        e.isVoteShow = !0,
                        $.invokeWindow(
                          "on_player_vote_show",
                          l[e.voteIdx],
                          e.videoPlayData.vid
                        ),
                        c = [],
                        h = d = 0;
                      h < l[s].answers.length;
                      h++
                    )
                      1 == (u = l[s].answers[h].right) && d++, c.push(u);
                    e.createVoteBox(d),
                      (e.confirmBtn.onclick = function () {
                        for (
                          var e = o.ccVoteInput, t = [], i = [], s = 0, a = 0;
                          a < e.length;
                          a++
                        )
                          t.push(e[a].checked),
                            e[a].checked &&
                              (i.push(l[o.voteIdx].answers[a].id),
                              i.join(","),
                              s++);
                        var r = void 0;
                        0 != s
                          ? ((r = n(c, t) ? 1 : 0),
                            $.invokeWindow(
                              "on_player_vote_result",
                              {
                                currVote: l[o.voteIdx],
                                answersId: i,
                                isRight: r,
                              },
                              o.videoPlayData.vid
                            ),
                            (o.ans["ans_" + l[o.voteIdx].id] = !0),
                            o.answerd["first_" + l[o.voteIdx].id] ||
                              ((o.answerd["first_" + l[o.voteIdx].id] = !0),
                              $.ccJsonp({
                                url: "//px.bokecc.com/clicker/collect",
                                data: { clickerid: l[o.voteIdx].id, ids: i },
                                success: function (e) {
                                  if (e && 0 == e.code) {
                                    if (e.data && 0 == e.data.length)
                                      return void o.createVoteResultTip(!0);
                                    o.createVoteReport(i, r, e.data);
                                  } else o.createVoteResultTip(!1);
                                },
                                error: function () {
                                  o.createVoteResultTip(!1);
                                },
                              })))
                          : o.createTips();
                      }),
                      (ccVoteJumpOver.onclick = function () {
                        o.removeCurrVote(),
                          o.playerApi.videoPlay(),
                          $.invokeWindow(
                            "on_player_vote_skip",
                            l[o.voteIdx],
                            o.videoPlayData.vid
                          );
                      });
                  })();
              }
            },
            createVoteBox: function (t) {
              for (
                var i = this,
                  s = this.vote[this.voteIdx].jump,
                  e = this.vote[this.voteIdx].answers,
                  a = "",
                  r = "",
                  n = 0;
                n < e.length;
                n++
              )
                (a += "<li>" + e[n].content + "</li>"),
                  (r +=
                    "<input type='" + (1 < t ? "checkbox" : "radio") + "'/>");
              var o = I.createElement("div");
              o.className = "ccVoteContainer";
              var l =
                "<div class='ccVoteBox'>    <ul class='ccVoteList'>" +
                a +
                "</ul>    <div class='ccVoteInputBox'>" +
                r +
                "</div> <div class='ccVoteBtn' id='ccVoteJumpOver' style='display:" +
                (s ? "block" : "none") +
                ";'>跳过</div>  <div class='ccVoteBtn' id='ccVoteSubmit' style='display:" +
                (s ? "none" : "block") +
                ";'>提交</div></div>";
              (o.innerHTML = l),
                this.parentEle.appendChild(o),
                (o.style.zIndex = this.zIndex),
                (this.ccVoteContainer = $.queryEle(
                  ".ccVoteContainer",
                  this.parentEle
                )),
                (this.ccVoteBox = $.queryEle(
                  ".ccVoteBox",
                  this.ccVoteContainer
                )),
                (this.ccVoteList = $.queryEle(
                  ".ccVoteList",
                  this.ccVoteContainer
                )),
                (this.ccVoteInputBox = $.queryEle(
                  ".ccVoteInputBox",
                  this.ccVoteContainer
                )),
                (this.confirmBtn = $.queryEle(
                  "#ccVoteSubmit",
                  this.ccVoteContainer
                )),
                (this.ccVoteJumpOver = $.queryEle(
                  "#ccVoteJumpOver",
                  this.ccVoteContainer
                )),
                (this.ccVoteLi = this.ccVoteList.getElementsByTagName("li")),
                (this.ccVoteInput =
                  this.ccVoteInputBox.getElementsByTagName("input"));
              for (
                var c = this,
                  d = function d(e) {
                    i.ccVoteLi[e].onclick = function () {
                      1 < t ? c.checkboxSelect(e) : c.radioSelect(e),
                        s && c.checkSelectedOpt();
                    };
                  },
                  h = 0;
                h < this.ccVoteLi.length;
                h++
              )
                d(h);
            },
            radioSelect: function (e) {
              for (var t = 0; t < this.ccVoteLi.length; t++)
                this.ccVoteLi[t].classList.remove("active"),
                  this.ccVoteInput[t].removeAttribute("checked");
              this.ccVoteLi[e].classList.add("active"),
                this.ccVoteInput[e].setAttribute("checked", !0);
            },
            checkboxSelect: function (e) {
              1 == this.ccVoteLi[e].classList.contains("active")
                ? (this.ccVoteLi[e].classList.remove("active"),
                  this.ccVoteInput[e].removeAttribute("checked"))
                : (this.ccVoteLi[e].classList.add("active"),
                  this.ccVoteInput[e].setAttribute("checked", !0));
            },
            createVoteReport: function (e, t, i) {
              for (
                var s = this,
                  a = this.vote[this.voteIdx].answers,
                  r = "",
                  n = 0;
                n < a.length;
                n++
              ) {
                var o = a[n];
                r +=
                  "<li class='" +
                  (o.right ? "right" : "wrong") +
                  "' id='v" +
                  o.id +
                  "'><div class='ccReportProgressBg'><div class='ccReportProgress'></div><div class='col ccReportPercent'>0%</div><div class='col ccReportScale'>0</div>" +
                  (-1 < e.indexOf(o.id)
                    ? "<div class='ccVoteSelected'></div>"
                    : "") +
                  "</div><div class='ccReportTxt'>" +
                  o.content +
                  "</div></li>";
              }
              var l = this.vote[this.voteIdx].backSecond;
              this.ccVoteBox.style.display = "none";
              var c = I.createElement("div");
              (c.className = "ccVoteReport"),
                (c.innerHTML =
                  "<div class='ccVoteReportHeader'>答题统计<div class='ccVoteReportTip " +
                  (t ? "right" : "wrong") +
                  "'>" +
                  (t ? "你答对了" : "你答错了") +
                  "</div><div class='closeCCVoteReport'></div></div><ul class='ccReportList'>" +
                  r +
                  "</ul><div style='text-align:center;'>" +
                  (-1 < l
                    ? "<div class='ccVoteBtn' style='display:inline-block;margin-right:30px;background:rgba(255,255,255,.8);color: #FF6E0A;' id='ccVoteReviewBtn'>回看</div>"
                    : "") +
                  "<div class='ccVoteBtn' style='display:inline-block;' id='ccVoteContinueBtn'>继续播放</div>"),
                this.ccVoteContainer.appendChild(c),
                (this.ccVoteReport = $.queryEle(
                  ".ccVoteReport",
                  this.parentEle
                ));
              var d = $.queryEle(".closeCCVoteReport", this.ccVoteReport),
                h = $.queryEle("#ccVoteContinueBtn", this.ccVoteReport),
                u = $.queryEle("#ccVoteReviewBtn", this.ccVoteReport),
                p = this;
              (d.onclick = function () {
                p.removeCurrVote(), p.playerApi.showPlayBtn();
              }),
                (h.onclick = function () {
                  p.removeCurrVote(), p.playerApi.videoPlay();
                }),
                -1 < l &&
                  (u.onclick = function () {
                    p.removeCurrVote(),
                      p.playerApi.setCurrentTime(l),
                      p.playerApi.videoPlay();
                  }),
                setTimeout(function () {
                  i.forEach(function (e) {
                    var t = $.queryEle("#v" + e.id, s.ccVoteContainer);
                    t &&
                      (($.queryEle(".ccReportProgress", t).style.height =
                        e.scale + "%"),
                      ($.queryEle(".ccReportPercent", t).innerText =
                        e.scale + "%"),
                      ($.queryEle(".ccReportScale", t).innerText = e.num));
                  });
                }, 1e3);
            },
            createTips: function () {
              var e = this,
                t = I.createElement("div");
              (t.className = "ccTips"),
                (t.innerHTML =
                  "<span>请选择答案</span><div class='dark'></div>"),
                this.ccVoteContainer.appendChild(t),
                setTimeout(function () {
                  e.ccVoteContainer.removeChild(t);
                }, 3e3);
            },
            createVoteResultTip: function (e) {
              this.ccVoteBox.style.display = "none";
              var t = this,
                i = I.createElement("div");
              (i.className = "ccVoteResultTip"),
                (i.innerHTML =
                  "<div class='ccCloseVoteResultTip'></div><div class='resultIcon " +
                  (e ? "succ" : "fail") +
                  "'></div><div>" +
                  (e ? "提交成功!" : "提交失败!") +
                  "</div><div class='ccVoteResultBtns'><div class='ccVoteBtn ccReBtn' id='ccVoteReSubmitBtn' style='display: " +
                  (e ? "none" : "inline-block") +
                  "'>重新提交</div><div class='ccVoteBtn' id='ccVoteContinueBtn'>继续播放</div></div>"),
                this.ccVoteContainer.appendChild(i);
              var s = $.queryEle("#ccVoteReSubmitBtn", this.ccVoteContainer),
                a = $.queryEle("#ccVoteContinueBtn", this.ccVoteContainer),
                r = $.queryEle(".ccCloseVoteResultTip", this.ccVoteContainer);
              (s.onclick = function () {
                e || (t.answerd["first_" + t.vote[t.voteIdx].id] = !1),
                  i.parentNode.removeChild(i),
                  t.confirmBtn.click();
              }),
                (a.onclick = function () {
                  t.removeCurrVote(), t.playerApi.videoPlay();
                }),
                (r.onclick = function () {
                  t.removeCurrVote(), t.playerApi.showPlayBtn();
                });
            },
            checkSelectedOpt: function () {
              for (var e = this.ccVoteInput, t = 0, i = 0; i < e.length; i++)
                e[i].checked && t++;
              0 === t
                ? ((this.ccVoteJumpOver.style.display = "block"),
                  (this.confirmBtn.style.display = "none"))
                : ((this.ccVoteJumpOver.style.display = "none"),
                  (this.confirmBtn.style.display = "block"));
            },
            getIsVoteShow: function () {
              return this.isVoteShow;
            },
            removeCurrVote: function () {
              this.ccVoteContainer &&
                this.parentEle.removeChild(this.ccVoteContainer),
                (this.ans["ans_" + this.vote[this.voteIdx].id] = !0),
                (this.isVoteShow = !1);
            },
            setVote: function (e) {
              this.vote = this.handleVoteData(e);
              var t = $.queryEle(".ccVoteContainer", this.parentEle);
              t && t.parentNode.removeChild(t),
                (this.answerd = {}),
                (this.ans = {}),
                (this.isVoteShow = !1);
            },
            viewPointVote: function (e) {
              var t = $.queryEle(".ccVoteContainer", this.parentEle);
              t && t.parentNode.removeChild(t), (this.isVoteShow = !1);
              var i = this.vote;
              this.queryVote();
              for (var s = 0; s < i.length; s++)
                if (i[s].showTime >= parseInt(e)) {
                  var a = i[s].id;
                  (this.ans["ans_" + a] = !1),
                    (this.answerd["first_" + a] = !1);
                }
            },
            toggleVote: function (e) {
              !(this.openVote = e) &&
                this.isVoteShow &&
                (this.ccVoteContainer &&
                  this.parentEle.removeChild(this.ccVoteContainer),
                (this.isVoteShow = !1),
                this.playerApi.videoPlay());
            },
          }),
          (B.CCH5PlayerVote = function (e) {
            var t = new L(e);
            return {
              init: function (e) {
                t.init(e);
              },
              queryVote: function () {
                t.queryVote();
              },
              getIsVoteShow: function () {
                return t.getIsVoteShow();
              },
              setVote: function (e) {
                t.setVote(e);
              },
              viewPointVote: function (e) {
                t.viewPointVote(e);
              },
              toggleVote: function (e) {
                t.toggleVote(e);
              },
            };
          }),
          (function (b) {
            var S = b.document;
            if ("function" != typeof CCH5PlayerVr) {
              var n = function n(e, t, i, s, a, r) {
                (this.playerApi = e),
                  (this.params = t),
                  (this.data = i),
                  (this.parentEle = s),
                  (this.zIndex = a),
                  (this.oVideo = r),
                  (this.renderer = null),
                  (this.vrPlayerBox = null),
                  (this.isDestroy = !1);
              };
              (n.prototype = {
                constructor: n,
                intervals: [],
                init: function () {
                  this.initData();
                  var e = this;
                  $.loadScript(
                    [
                      "https://p.bokecc.com/js/player/three.min.js",
                      "https://p.bokecc.com/js/player/DeviceOrientationControls.js",
                    ],
                    function () {
                      e.on_vr_init(), e.initEvents();
                    }
                  );
                },
                initData: function () {
                  (this.vrPlayerBox = $.queryEle(
                    ".ccH5playerBox",
                    this.parentEle
                  )),
                    ($.isIPad() || $.isIPhone() || $.isAndroid()) &&
                      this.vrPlayerBox.classList.add("ccVrBox"),
                    (this.vr_w = this.vrPlayerBox.clientWidth),
                    (this.vr_h = this.vrPlayerBox.clientHeight);
                },
                initEvents: function () {
                  var t = this;
                  this.canvas.addEventListener("touchstart", function (e) {
                    1 == e.touches.length && t.playerApi.toggleCtrlBar();
                  });
                },
                on_vr_init: function () {
                  var i = this;
                  this.playerApi.registerVideoEvent("playing", function () {
                    y(), u();
                  });
                  var t = 90,
                    e = 1 * this.params.vrFov;
                  (!e && 0 != e) || (t = e);
                  var s = -1.6,
                    a = 1 * this.params.vrRotationY;
                  (!a && 0 != a) || (s = a);
                  var r = new THREE.PerspectiveCamera(
                    t,
                    b.innerWidth / b.innerHeight,
                    1,
                    1e3
                  );
                  (r.zoom = 0.8),
                    r.lookAt({ x: 0, y: 0, z: 0 }),
                    (this.camera = r);
                  var n = new THREE.Scene(),
                    o = new THREE.VideoTexture(this.oVideo);
                  (o.minFilter = THREE.LinearFilter),
                    (o.format = THREE.RGBFormat);
                  var l = new THREE.MeshBasicMaterial({ map: o }),
                    c = new THREE.SphereBufferGeometry(
                      500,
                      this.vr_w / 10,
                      this.vr_h / 10
                    );
                  c.scale(-1, 1, 1);
                  var d = new THREE.Mesh(c, l);
                  (d.rotation.y = s), n.add(d), this.initRenderer();
                  var h = 0,
                    u = function u() {
                      i.isDestroy ||
                        ((h = requestAnimationFrame(u)),
                        i.renderer.clear(),
                        (i.renderer.domElement.style.zIndex = i.zIndex),
                        i.renderer.render(n, r));
                    },
                    p = 0,
                    y = function y() {
                      i.isDestroy || (p = requestAnimationFrame(y));
                    };
                  this.playerApi.registerVideoEvent("ended", function () {
                    cancelAnimationFrame(h), cancelAnimationFrame(p);
                  });
                  var m = function m(e) {
                      return Math.max(
                        Math.min((90 * Math.PI) / 180, e),
                        (-90 * Math.PI) / 180
                      );
                    },
                    v = {},
                    f = function f(e) {
                      $.preventEvent(e);
                      var t = $.getMousePos(e);
                      i.playerApi.getOrientation()
                        ? ((d.rotation.x -= (-(t.x - v.x) / i.vr_w) * 2),
                          (d.rotation.y = m(
                            d.rotation.y - ((v.y - t.y) / i.vr_h) * 2
                          )))
                        : ((d.rotation.y -= ((t.x - v.x) / i.vr_w) * 2),
                          (d.rotation.x = m(
                            d.rotation.x - ((t.y - v.y) / i.vr_h) * 2
                          ))),
                        (v = t);
                    },
                    g = function g(e) {
                      S.removeEventListener("touchend", g, { passive: !1 }),
                        S.removeEventListener("touchmove", f, { passive: !1 });
                    },
                    P = function P(e) {
                      (v = $.getMousePos(e)),
                        d.rotation.x,
                        d.rotation.y,
                        S.addEventListener("touchend", g, { passive: !1 }),
                        S.addEventListener("touchmove", f, { passive: !1 });
                    },
                    A = function A(e) {
                      $.preventEvent(e);
                      var t = $.getMousePos(e);
                      (d.rotation.y -= ((t.x - v.x) / i.vr_w) * 2),
                        (d.rotation.x = m(
                          d.rotation.x - ((t.y - v.y) / i.vr_h) * 2
                        )),
                        (v = t);
                    },
                    E = function E(e) {
                      S.removeEventListener("mouseup", E),
                        S.removeEventListener("mousemove", A, { passive: !1 });
                    },
                    w = function w(e) {
                      (v = $.getMousePos(e)),
                        d.rotation.x,
                        d.rotation.y,
                        S.addEventListener("mouseup", E),
                        S.addEventListener("mousemove", A, { passive: !1 });
                    };
                  this.canvas.addEventListener("touchstart", P),
                    this.canvas.addEventListener("mousedown", w);
                  var x = function x(e) {
                      e.preventDefault(),
                        e.scale &&
                          (1 < e.scale && (t -= 2) < 20 && (t = 20),
                          e.scale < 1 && 120 < (t += 2) && (t = 120)),
                        (r.fov = t),
                        r.updateProjectionMatrix();
                    },
                    T = function T(e) {
                      e.preventDefault(),
                        e.wheelDelta
                          ? (0 < e.wheelDelta &&
                              (t -= 1 < t ? 5 : 0) < 20 &&
                              (t = 20),
                            e.wheelDelta < 0 &&
                              120 < (t += t < 1e3 ? 5 : 0) &&
                              (t = 120))
                          : e.detail &&
                            (0 < e.detail && (t -= 5) < 20 && (t = 20),
                            e.detail < 0 && 120 < (t += 5) && (t = 120)),
                        (r.fov = t),
                        r.updateProjectionMatrix();
                    };
                  this.canvas.addEventListener("mousewheel", T, !1),
                    this.canvas.addEventListener("gesturechange", x, !1);
                },
                initRenderer: function () {
                  var e = new THREE.WebGLRenderer({ antialias: !0 });
                  e.setPixelRatio(b.devicePixelRatio),
                    e.setSize(this.vr_w, this.vr_h),
                    (e.domElement.style.position = "absolute"),
                    (e.domElement.style.zIndex = 1),
                    (e.domElement.style.width = "100%"),
                    (e.domElement.style.height = "100%"),
                    this.vrPlayerBox.appendChild(e.domElement),
                    (this.renderer = e),
                    (this.canvas = e.domElement);
                },
                updateSize: function () {
                  (this.vr_w = this.vrPlayerBox.clientWidth),
                    (this.vr_h = this.vrPlayerBox.clientHeight),
                    this.camera &&
                      ((this.camera.aspect = this.vr_w / this.vr_h),
                      this.camera.updateProjectionMatrix());
                },
              }),
                (b.CCH5PlayerVr = function (e, t, i, s, a, r) {
                  var o = new n(e, t, i, s, a, r);
                  return {
                    init: function () {
                      o.init();
                    },
                    destroy: function () {
                      o.renderer.clear();
                      var e = (o.isDestroy = !0),
                        t = !1,
                        i = undefined;
                      try {
                        for (
                          var s, a = (0, X["default"])(o.intervals);
                          !(e = (s = a.next()).done);
                          e = !0
                        ) {
                          var r = s.value;
                          b.clearInterval(r);
                        }
                      } catch (n) {
                        (t = !0), (i = n);
                      } finally {
                        try {
                          !e && a["return"] && a["return"]();
                        } finally {
                          if (t) throw i;
                        }
                      }
                    },
                    updateSize: function () {
                      o.updateSize();
                    },
                  };
                });
            }
          })(window);
      },
      {
        "babel-runtime/core-js/get-iterator": 2,
        "babel-runtime/core-js/json/stringify": 3,
        "babel-runtime/core-js/object/assign": 4,
        "babel-runtime/core-js/object/get-prototype-of": 8,
        "babel-runtime/core-js/object/keys": 9,
        "babel-runtime/helpers/classCallCheck": 13,
        "babel-runtime/helpers/createClass": 14,
        "babel-runtime/helpers/get": 15,
        "babel-runtime/helpers/inherits": 16,
        "babel-runtime/helpers/possibleConstructorReturn": 17,
        "babel-runtime/helpers/typeof": 18,
      },
    ],
    2: [
      function (e, t, i) {
        t.exports = {
          default: e("core-js/library/fn/get-iterator"),
          __esModule: !0,
        };
      },
      { "core-js/library/fn/get-iterator": 19 },
    ],
    3: [
      function (e, t, i) {
        t.exports = {
          default: e("core-js/library/fn/json/stringify"),
          __esModule: !0,
        };
      },
      { "core-js/library/fn/json/stringify": 20 },
    ],
    4: [
      function (e, t, i) {
        t.exports = {
          default: e("core-js/library/fn/object/assign"),
          __esModule: !0,
        };
      },
      { "core-js/library/fn/object/assign": 21 },
    ],
    5: [
      function (e, t, i) {
        t.exports = {
          default: e("core-js/library/fn/object/create"),
          __esModule: !0,
        };
      },
      { "core-js/library/fn/object/create": 22 },
    ],
    6: [
      function (e, t, i) {
        t.exports = {
          default: e("core-js/library/fn/object/define-property"),
          __esModule: !0,
        };
      },
      { "core-js/library/fn/object/define-property": 23 },
    ],
    7: [
      function (e, t, i) {
        t.exports = {
          default: e("core-js/library/fn/object/get-own-property-descriptor"),
          __esModule: !0,
        };
      },
      { "core-js/library/fn/object/get-own-property-descriptor": 24 },
    ],
    8: [
      function (e, t, i) {
        t.exports = {
          default: e("core-js/library/fn/object/get-prototype-of"),
          __esModule: !0,
        };
      },
      { "core-js/library/fn/object/get-prototype-of": 25 },
    ],
    9: [
      function (e, t, i) {
        t.exports = {
          default: e("core-js/library/fn/object/keys"),
          __esModule: !0,
        };
      },
      { "core-js/library/fn/object/keys": 26 },
    ],
    10: [
      function (e, t, i) {
        t.exports = {
          default: e("core-js/library/fn/object/set-prototype-of"),
          __esModule: !0,
        };
      },
      { "core-js/library/fn/object/set-prototype-of": 27 },
    ],
    11: [
      function (e, t, i) {
        t.exports = { default: e("core-js/library/fn/symbol"), __esModule: !0 };
      },
      { "core-js/library/fn/symbol": 28 },
    ],
    12: [
      function (e, t, i) {
        t.exports = {
          default: e("core-js/library/fn/symbol/iterator"),
          __esModule: !0,
        };
      },
      { "core-js/library/fn/symbol/iterator": 29 },
    ],
    13: [
      function (e, t, i) {
        "use strict";
        (i.__esModule = !0),
          (i["default"] = function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          });
      },
      {},
    ],
    14: [
      function (e, t, i) {
        "use strict";
        i.__esModule = !0;
        var a = (function r(e) {
          return e && e.__esModule ? e : { default: e };
        })(e("../core-js/object/define-property"));
        function s(e, t) {
          for (var i = 0; i < t.length; i++) {
            var s = t[i];
            (s.enumerable = s.enumerable || !1),
              (s.configurable = !0),
              "value" in s && (s.writable = !0),
              (0, a["default"])(e, s.key, s);
          }
        }
        i["default"] = function (e, t, i) {
          return t && s(e.prototype, t), i && s(e, i), e;
        };
      },
      { "../core-js/object/define-property": 6 },
    ],
    15: [
      function (e, t, i) {
        "use strict";
        i.__esModule = !0;
        var n = s(e("../core-js/object/get-prototype-of")),
          o = s(e("../core-js/object/get-own-property-descriptor"));
        function s(e) {
          return e && e.__esModule ? e : { default: e };
        }
        i["default"] = function l(e, t, i) {
          null === e && (e = Function.prototype);
          var s = (0, o["default"])(e, t);
          if (s === undefined) {
            var a = (0, n["default"])(e);
            return null === a ? undefined : l(a, t, i);
          }
          if ("value" in s) return s.value;
          var r = s.get;
          return r === undefined ? undefined : r.call(i);
        };
      },
      {
        "../core-js/object/get-own-property-descriptor": 7,
        "../core-js/object/get-prototype-of": 8,
      },
    ],
    16: [
      function (e, t, i) {
        "use strict";
        i.__esModule = !0;
        var s = n(e("../core-js/object/set-prototype-of")),
          a = n(e("../core-js/object/create")),
          r = n(e("../helpers/typeof"));
        function n(e) {
          return e && e.__esModule ? e : { default: e };
        }
        i["default"] = function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                (void 0 === t ? "undefined" : (0, r["default"])(t))
            );
          (e.prototype = (0, a["default"])(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
            t && (s["default"] ? (0, s["default"])(e, t) : (e.__proto__ = t));
        };
      },
      {
        "../core-js/object/create": 5,
        "../core-js/object/set-prototype-of": 10,
        "../helpers/typeof": 18,
      },
    ],
    17: [
      function (e, t, i) {
        "use strict";
        i.__esModule = !0;
        var s = (function a(e) {
          return e && e.__esModule ? e : { default: e };
        })(e("../helpers/typeof"));
        i["default"] = function (e, t) {
          if (!e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return !t ||
            ("object" !== (void 0 === t ? "undefined" : (0, s["default"])(t)) &&
              "function" != typeof t)
            ? e
            : t;
        };
      },
      { "../helpers/typeof": 18 },
    ],
    18: [
      function (e, t, i) {
        "use strict";
        i.__esModule = !0;
        var s = n(e("../core-js/symbol/iterator")),
          a = n(e("../core-js/symbol")),
          r =
            "function" == typeof a["default"] && "symbol" == typeof s["default"]
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof a["default"] &&
                    e.constructor === a["default"] &&
                    e !== a["default"].prototype
                    ? "symbol"
                    : typeof e;
                };
        function n(e) {
          return e && e.__esModule ? e : { default: e };
        }
        i["default"] =
          "function" == typeof a["default"] && "symbol" === r(s["default"])
            ? function (e) {
                return void 0 === e ? "undefined" : r(e);
              }
            : function (e) {
                return e &&
                  "function" == typeof a["default"] &&
                  e.constructor === a["default"] &&
                  e !== a["default"].prototype
                  ? "symbol"
                  : void 0 === e
                  ? "undefined"
                  : r(e);
              };
      },
      { "../core-js/symbol": 11, "../core-js/symbol/iterator": 12 },
    ],
    19: [
      function (e, t, i) {
        e("../modules/web.dom.iterable"),
          e("../modules/es6.string.iterator"),
          (t.exports = e("../modules/core.get-iterator"));
      },
      {
        "../modules/core.get-iterator": 90,
        "../modules/es6.string.iterator": 100,
        "../modules/web.dom.iterable": 104,
      },
    ],
    20: [
      function (e, t, i) {
        var s = e("../../modules/_core"),
          a = s.JSON || (s.JSON = { stringify: JSON.stringify });
        t.exports = function (e) {
          return a.stringify.apply(a, arguments);
        };
      },
      { "../../modules/_core": 36 },
    ],
    21: [
      function (e, t, i) {
        e("../../modules/es6.object.assign"),
          (t.exports = e("../../modules/_core").Object.assign);
      },
      { "../../modules/_core": 36, "../../modules/es6.object.assign": 92 },
    ],
    22: [
      function (e, t, i) {
        e("../../modules/es6.object.create");
        var s = e("../../modules/_core").Object;
        t.exports = function (e, t) {
          return s.create(e, t);
        };
      },
      { "../../modules/_core": 36, "../../modules/es6.object.create": 93 },
    ],
    23: [
      function (e, t, i) {
        e("../../modules/es6.object.define-property");
        var s = e("../../modules/_core").Object;
        t.exports = function (e, t, i) {
          return s.defineProperty(e, t, i);
        };
      },
      {
        "../../modules/_core": 36,
        "../../modules/es6.object.define-property": 94,
      },
    ],
    24: [
      function (e, t, i) {
        e("../../modules/es6.object.get-own-property-descriptor");
        var s = e("../../modules/_core").Object;
        t.exports = function (e, t) {
          return s.getOwnPropertyDescriptor(e, t);
        };
      },
      {
        "../../modules/_core": 36,
        "../../modules/es6.object.get-own-property-descriptor": 95,
      },
    ],
    25: [
      function (e, t, i) {
        e("../../modules/es6.object.get-prototype-of"),
          (t.exports = e("../../modules/_core").Object.getPrototypeOf);
      },
      {
        "../../modules/_core": 36,
        "../../modules/es6.object.get-prototype-of": 96,
      },
    ],
    26: [
      function (e, t, i) {
        e("../../modules/es6.object.keys"),
          (t.exports = e("../../modules/_core").Object.keys);
      },
      { "../../modules/_core": 36, "../../modules/es6.object.keys": 97 },
    ],
    27: [
      function (e, t, i) {
        e("../../modules/es6.object.set-prototype-of"),
          (t.exports = e("../../modules/_core").Object.setPrototypeOf);
      },
      {
        "../../modules/_core": 36,
        "../../modules/es6.object.set-prototype-of": 98,
      },
    ],
    28: [
      function (e, t, i) {
        e("../../modules/es6.symbol"),
          e("../../modules/es6.object.to-string"),
          e("../../modules/es7.symbol.async-iterator"),
          e("../../modules/es7.symbol.observable"),
          (t.exports = e("../../modules/_core").Symbol);
      },
      {
        "../../modules/_core": 36,
        "../../modules/es6.object.to-string": 99,
        "../../modules/es6.symbol": 101,
        "../../modules/es7.symbol.async-iterator": 102,
        "../../modules/es7.symbol.observable": 103,
      },
    ],
    29: [
      function (e, t, i) {
        e("../../modules/es6.string.iterator"),
          e("../../modules/web.dom.iterable"),
          (t.exports = e("../../modules/_wks-ext").f("iterator"));
      },
      {
        "../../modules/_wks-ext": 87,
        "../../modules/es6.string.iterator": 100,
        "../../modules/web.dom.iterable": 104,
      },
    ],
    30: [
      function (e, t, i) {
        t.exports = function (e) {
          if ("function" != typeof e)
            throw TypeError(e + " is not a function!");
          return e;
        };
      },
      {},
    ],
    31: [
      function (e, t, i) {
        t.exports = function () {};
      },
      {},
    ],
    32: [
      function (e, t, i) {
        var s = e("./_is-object");
        t.exports = function (e) {
          if (!s(e)) throw TypeError(e + " is not an object!");
          return e;
        };
      },
      { "./_is-object": 52 },
    ],
    33: [
      function (e, t, i) {
        var l = e("./_to-iobject"),
          c = e("./_to-length"),
          d = e("./_to-absolute-index");
        t.exports = function (o) {
          return function (e, t, i) {
            var s,
              a = l(e),
              r = c(a.length),
              n = d(i, r);
            if (o && t != t) {
              for (; n < r; ) if ((s = a[n++]) != s) return !0;
            } else
              for (; n < r; n++)
                if ((o || n in a) && a[n] === t) return o || n || 0;
            return !o && -1;
          };
        };
      },
      { "./_to-absolute-index": 79, "./_to-iobject": 81, "./_to-length": 82 },
    ],
    34: [
      function (t, i, s) {
        var r = t("./_cof"),
          n = t("./_wks")("toStringTag"),
          o =
            "Arguments" ==
            r(
              (function () {
                return arguments;
              })()
            );
        i.exports = function (t) {
          var i, s, a;
          return t === undefined
            ? "Undefined"
            : null === t
            ? "Null"
            : "string" ==
              typeof (s = (function (t, i) {
                try {
                  return t[i];
                } catch (e) {}
              })((i = Object(t)), n))
            ? s
            : o
            ? r(i)
            : "Object" == (a = r(i)) && "function" == typeof i.callee
            ? "Arguments"
            : a;
        };
      },
      { "./_cof": 35, "./_wks": 88 },
    ],
    35: [
      function (e, t, i) {
        var s = {}.toString;
        t.exports = function (e) {
          return s.call(e).slice(8, -1);
        };
      },
      {},
    ],
    36: [
      function (e, t, i) {
        var s = (t.exports = { version: "2.6.10" });
        "number" == typeof __e && (__e = s);
      },
      {},
    ],
    37: [
      function (e, t, i) {
        var r = e("./_a-function");
        t.exports = function (s, a, e) {
          if ((r(s), a === undefined)) return s;
          switch (e) {
            case 1:
              return function (e) {
                return s.call(a, e);
              };
            case 2:
              return function (e, t) {
                return s.call(a, e, t);
              };
            case 3:
              return function (e, t, i) {
                return s.call(a, e, t, i);
              };
          }
          return function () {
            return s.apply(a, arguments);
          };
        };
      },
      { "./_a-function": 30 },
    ],
    38: [
      function (e, t, i) {
        t.exports = function (e) {
          if (e == undefined) throw TypeError("Can't call method on  " + e);
          return e;
        };
      },
      {},
    ],
    39: [
      function (e, t, i) {
        t.exports = !e("./_fails")(function () {
          return (
            7 !=
            Object.defineProperty({}, "a", {
              get: function () {
                return 7;
              },
            }).a
          );
        });
      },
      { "./_fails": 44 },
    ],
    40: [
      function (e, t, i) {
        var s = e("./_is-object"),
          a = e("./_global").document,
          r = s(a) && s(a.createElement);
        t.exports = function (e) {
          return r ? a.createElement(e) : {};
        };
      },
      { "./_global": 45, "./_is-object": 52 },
    ],
    41: [
      function (e, t, i) {
        t.exports =
          "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(
            ","
          );
      },
      {},
    ],
    42: [
      function (e, t, i) {
        var o = e("./_object-keys"),
          l = e("./_object-gops"),
          c = e("./_object-pie");
        t.exports = function (e) {
          var t = o(e),
            i = l.f;
          if (i)
            for (var s, a = i(e), r = c.f, n = 0; a.length > n; )
              r.call(e, (s = a[n++])) && t.push(s);
          return t;
        };
      },
      { "./_object-gops": 66, "./_object-keys": 69, "./_object-pie": 70 },
    ],
    43: [
      function (e, t, i) {
        var m = e("./_global"),
          v = e("./_core"),
          f = e("./_ctx"),
          g = e("./_hide"),
          P = e("./_has"),
          A = "prototype",
          E = function (e, t, i) {
            var s,
              a,
              r,
              n = e & E.F,
              o = e & E.G,
              l = e & E.S,
              c = e & E.P,
              d = e & E.B,
              h = e & E.W,
              u = o ? v : v[t] || (v[t] = {}),
              p = u[A],
              y = o ? m : l ? m[t] : (m[t] || {})[A];
            for (s in (o && (i = t), i))
              ((a = !n && y && y[s] !== undefined) && P(u, s)) ||
                ((r = a ? y[s] : i[s]),
                (u[s] =
                  o && "function" != typeof y[s]
                    ? i[s]
                    : d && a
                    ? f(r, m)
                    : h && y[s] == r
                    ? (function (s) {
                        var e = function (e, t, i) {
                          if (this instanceof s) {
                            switch (arguments.length) {
                              case 0:
                                return new s();
                              case 1:
                                return new s(e);
                              case 2:
                                return new s(e, t);
                            }
                            return new s(e, t, i);
                          }
                          return s.apply(this, arguments);
                        };
                        return (e[A] = s[A]), e;
                      })(r)
                    : c && "function" == typeof r
                    ? f(Function.call, r)
                    : r),
                c &&
                  (((u.virtual || (u.virtual = {}))[s] = r),
                  e & E.R && p && !p[s] && g(p, s, r)));
          };
        (E.F = 1),
          (E.G = 2),
          (E.S = 4),
          (E.P = 8),
          (E.B = 16),
          (E.W = 32),
          (E.U = 64),
          (E.R = 128),
          (t.exports = E);
      },
      {
        "./_core": 36,
        "./_ctx": 37,
        "./_global": 45,
        "./_has": 46,
        "./_hide": 47,
      },
    ],
    44: [
      function (t, i, s) {
        i.exports = function (t) {
          try {
            return !!t();
          } catch (e) {
            return !0;
          }
        };
      },
      {},
    ],
    45: [
      function (e, t, i) {
        var s = (t.exports =
          "undefined" != typeof window && window.Math == Math
            ? window
            : "undefined" != typeof self && self.Math == Math
            ? self
            : Function("return this")());
        "number" == typeof __g && (__g = s);
      },
      {},
    ],
    46: [
      function (e, t, i) {
        var s = {}.hasOwnProperty;
        t.exports = function (e, t) {
          return s.call(e, t);
        };
      },
      {},
    ],
    47: [
      function (e, t, i) {
        var s = e("./_object-dp"),
          a = e("./_property-desc");
        t.exports = e("./_descriptors")
          ? function (e, t, i) {
              return s.f(e, t, a(1, i));
            }
          : function (e, t, i) {
              return (e[t] = i), e;
            };
      },
      { "./_descriptors": 39, "./_object-dp": 61, "./_property-desc": 72 },
    ],
    48: [
      function (e, t, i) {
        var s = e("./_global").document;
        t.exports = s && s.documentElement;
      },
      { "./_global": 45 },
    ],
    49: [
      function (e, t, i) {
        t.exports =
          !e("./_descriptors") &&
          !e("./_fails")(function () {
            return (
              7 !=
              Object.defineProperty(e("./_dom-create")("div"), "a", {
                get: function () {
                  return 7;
                },
              }).a
            );
          });
      },
      { "./_descriptors": 39, "./_dom-create": 40, "./_fails": 44 },
    ],
    50: [
      function (e, t, i) {
        var s = e("./_cof");
        t.exports = Object("z").propertyIsEnumerable(0)
          ? Object
          : function (e) {
              return "String" == s(e) ? e.split("") : Object(e);
            };
      },
      { "./_cof": 35 },
    ],
    51: [
      function (e, t, i) {
        var s = e("./_cof");
        t.exports =
          Array.isArray ||
          function (e) {
            return "Array" == s(e);
          };
      },
      { "./_cof": 35 },
    ],
    52: [
      function (e, t, i) {
        t.exports = function (e) {
          return "object" == typeof e ? null !== e : "function" == typeof e;
        };
      },
      {},
    ],
    53: [
      function (e, t, i) {
        "use strict";
        var s = e("./_object-create"),
          a = e("./_property-desc"),
          r = e("./_set-to-string-tag"),
          n = {};
        e("./_hide")(n, e("./_wks")("iterator"), function () {
          return this;
        }),
          (t.exports = function (e, t, i) {
            (e.prototype = s(n, { next: a(1, i) })), r(e, t + " Iterator");
          });
      },
      {
        "./_hide": 47,
        "./_object-create": 60,
        "./_property-desc": 72,
        "./_set-to-string-tag": 75,
        "./_wks": 88,
      },
    ],
    54: [
      function (e, t, i) {
        "use strict";
        var P = e("./_library"),
          A = e("./_export"),
          E = e("./_redefine"),
          w = e("./_hide"),
          x = e("./_iterators"),
          T = e("./_iter-create"),
          b = e("./_set-to-string-tag"),
          S = e("./_object-gpo"),
          C = e("./_wks")("iterator"),
          k = !([].keys && "next" in [].keys()),
          B = "values",
          I = function () {
            return this;
          };
        t.exports = function (e, t, i, s, a, r, n) {
          T(i, t, s);
          var o,
            l,
            c,
            d = function (e) {
              if (!k && e in y) return y[e];
              switch (e) {
                case "keys":
                case B:
                  return function () {
                    return new i(this, e);
                  };
              }
              return function () {
                return new i(this, e);
              };
            },
            h = t + " Iterator",
            u = a == B,
            p = !1,
            y = e.prototype,
            m = y[C] || y["@@iterator"] || (a && y[a]),
            v = m || d(a),
            f = a ? (u ? d("entries") : v) : undefined,
            g = ("Array" == t && y.entries) || m;
          if (
            (g &&
              (c = S(g.call(new e()))) !== Object.prototype &&
              c.next &&
              (b(c, h, !0), P || "function" == typeof c[C] || w(c, C, I)),
            u &&
              m &&
              m.name !== B &&
              ((p = !0),
              (v = function () {
                return m.call(this);
              })),
            (P && !n) || (!k && !p && y[C]) || w(y, C, v),
            (x[t] = v),
            (x[h] = I),
            a)
          )
            if (
              ((o = {
                values: u ? v : d(B),
                keys: r ? v : d("keys"),
                entries: f,
              }),
              n)
            )
              for (l in o) l in y || E(y, l, o[l]);
            else A(A.P + A.F * (k || p), t, o);
          return o;
        };
      },
      {
        "./_export": 43,
        "./_hide": 47,
        "./_iter-create": 53,
        "./_iterators": 56,
        "./_library": 57,
        "./_object-gpo": 67,
        "./_redefine": 73,
        "./_set-to-string-tag": 75,
        "./_wks": 88,
      },
    ],
    55: [
      function (e, t, i) {
        t.exports = function (e, t) {
          return { value: t, done: !!e };
        };
      },
      {},
    ],
    56: [
      function (e, t, i) {
        t.exports = {};
      },
      {},
    ],
    57: [
      function (e, t, i) {
        t.exports = !0;
      },
      {},
    ],
    58: [
      function (e, t, i) {
        var s = e("./_uid")("meta"),
          a = e("./_is-object"),
          r = e("./_has"),
          n = e("./_object-dp").f,
          o = 0,
          l =
            Object.isExtensible ||
            function () {
              return !0;
            },
          c = !e("./_fails")(function () {
            return l(Object.preventExtensions({}));
          }),
          d = function (e) {
            n(e, s, { value: { i: "O" + ++o, w: {} } });
          },
          h = (t.exports = {
            KEY: s,
            NEED: !1,
            fastKey: function (e, t) {
              if (!a(e))
                return "symbol" == typeof e
                  ? e
                  : ("string" == typeof e ? "S" : "P") + e;
              if (!r(e, s)) {
                if (!l(e)) return "F";
                if (!t) return "E";
                d(e);
              }
              return e[s].i;
            },
            getWeak: function (e, t) {
              if (!r(e, s)) {
                if (!l(e)) return !0;
                if (!t) return !1;
                d(e);
              }
              return e[s].w;
            },
            onFreeze: function (e) {
              return c && h.NEED && l(e) && !r(e, s) && d(e), e;
            },
          });
      },
      {
        "./_fails": 44,
        "./_has": 46,
        "./_is-object": 52,
        "./_object-dp": 61,
        "./_uid": 85,
      },
    ],
    59: [
      function (e, t, i) {
        "use strict";
        var u = e("./_descriptors"),
          p = e("./_object-keys"),
          y = e("./_object-gops"),
          m = e("./_object-pie"),
          v = e("./_to-object"),
          f = e("./_iobject"),
          a = Object.assign;
        t.exports =
          !a ||
          e("./_fails")(function () {
            var e = {},
              t = {},
              i = Symbol(),
              s = "abcdefghijklmnopqrst";
            return (
              (e[i] = 7),
              s.split("").forEach(function (e) {
                t[e] = e;
              }),
              7 != a({}, e)[i] || Object.keys(a({}, t)).join("") != s
            );
          })
            ? function (e, t) {
                for (
                  var i = v(e), s = arguments.length, a = 1, r = y.f, n = m.f;
                  a < s;

                )
                  for (
                    var o,
                      l = f(arguments[a++]),
                      c = r ? p(l).concat(r(l)) : p(l),
                      d = c.length,
                      h = 0;
                    h < d;

                  )
                    (o = c[h++]), (u && !n.call(l, o)) || (i[o] = l[o]);
                return i;
              }
            : a;
      },
      {
        "./_descriptors": 39,
        "./_fails": 44,
        "./_iobject": 50,
        "./_object-gops": 66,
        "./_object-keys": 69,
        "./_object-pie": 70,
        "./_to-object": 83,
      },
    ],
    60: [
      function (s, e, t) {
        var a = s("./_an-object"),
          r = s("./_object-dps"),
          n = s("./_enum-bug-keys"),
          o = s("./_shared-key")("IE_PROTO"),
          l = function () {},
          c = "prototype",
          d = function () {
            var e,
              t = s("./_dom-create")("iframe"),
              i = n.length;
            for (
              t.style.display = "none",
                s("./_html").appendChild(t),
                t.src = "javascript:",
                (e = t.contentWindow.document).open(),
                e.write("<script>document.F=Object</script>"),
                e.close(),
                d = e.F;
              i--;

            )
              delete d[c][n[i]];
            return d();
          };
        e.exports =
          Object.create ||
          function (e, t) {
            var i;
            return (
              null !== e
                ? ((l[c] = a(e)), (i = new l()), (l[c] = null), (i[o] = e))
                : (i = d()),
              t === undefined ? i : r(i, t)
            );
          };
      },
      {
        "./_an-object": 32,
        "./_dom-create": 40,
        "./_enum-bug-keys": 41,
        "./_html": 48,
        "./_object-dps": 62,
        "./_shared-key": 76,
      },
    ],
    61: [
      function (t, i, s) {
        var a = t("./_an-object"),
          r = t("./_ie8-dom-define"),
          n = t("./_to-primitive"),
          o = Object.defineProperty;
        s.f = t("./_descriptors")
          ? Object.defineProperty
          : function (t, i, s) {
              if ((a(t), (i = n(i, !0)), a(s), r))
                try {
                  return o(t, i, s);
                } catch (e) {}
              if ("get" in s || "set" in s)
                throw TypeError("Accessors not supported!");
              return "value" in s && (t[i] = s.value), t;
            };
      },
      {
        "./_an-object": 32,
        "./_descriptors": 39,
        "./_ie8-dom-define": 49,
        "./_to-primitive": 84,
      },
    ],
    62: [
      function (e, t, i) {
        var n = e("./_object-dp"),
          o = e("./_an-object"),
          l = e("./_object-keys");
        t.exports = e("./_descriptors")
          ? Object.defineProperties
          : function (e, t) {
              o(e);
              for (var i, s = l(t), a = s.length, r = 0; r < a; )
                n.f(e, (i = s[r++]), t[i]);
              return e;
            };
      },
      {
        "./_an-object": 32,
        "./_descriptors": 39,
        "./_object-dp": 61,
        "./_object-keys": 69,
      },
    ],
    63: [
      function (t, i, s) {
        var a = t("./_object-pie"),
          r = t("./_property-desc"),
          n = t("./_to-iobject"),
          o = t("./_to-primitive"),
          l = t("./_has"),
          c = t("./_ie8-dom-define"),
          d = Object.getOwnPropertyDescriptor;
        s.f = t("./_descriptors")
          ? d
          : function (t, i) {
              if (((t = n(t)), (i = o(i, !0)), c))
                try {
                  return d(t, i);
                } catch (e) {}
              if (l(t, i)) return r(!a.f.call(t, i), t[i]);
            };
      },
      {
        "./_descriptors": 39,
        "./_has": 46,
        "./_ie8-dom-define": 49,
        "./_object-pie": 70,
        "./_property-desc": 72,
        "./_to-iobject": 81,
        "./_to-primitive": 84,
      },
    ],
    64: [
      function (t, i, s) {
        var a = t("./_to-iobject"),
          r = t("./_object-gopn").f,
          n = {}.toString,
          o =
            "object" == typeof window && window && Object.getOwnPropertyNames
              ? Object.getOwnPropertyNames(window)
              : [];
        i.exports.f = function (t) {
          return o && "[object Window]" == n.call(t)
            ? (function (t) {
                try {
                  return r(t);
                } catch (e) {
                  return o.slice();
                }
              })(t)
            : r(a(t));
        };
      },
      { "./_object-gopn": 65, "./_to-iobject": 81 },
    ],
    65: [
      function (e, t, i) {
        var s = e("./_object-keys-internal"),
          a = e("./_enum-bug-keys").concat("length", "prototype");
        i.f =
          Object.getOwnPropertyNames ||
          function (e) {
            return s(e, a);
          };
      },
      { "./_enum-bug-keys": 41, "./_object-keys-internal": 68 },
    ],
    66: [
      function (e, t, i) {
        i.f = Object.getOwnPropertySymbols;
      },
      {},
    ],
    67: [
      function (e, t, i) {
        var s = e("./_has"),
          a = e("./_to-object"),
          r = e("./_shared-key")("IE_PROTO"),
          n = Object.prototype;
        t.exports =
          Object.getPrototypeOf ||
          function (e) {
            return (
              (e = a(e)),
              s(e, r)
                ? e[r]
                : "function" == typeof e.constructor &&
                  e instanceof e.constructor
                ? e.constructor.prototype
                : e instanceof Object
                ? n
                : null
            );
          };
      },
      { "./_has": 46, "./_shared-key": 76, "./_to-object": 83 },
    ],
    68: [
      function (e, t, i) {
        var n = e("./_has"),
          o = e("./_to-iobject"),
          l = e("./_array-includes")(!1),
          c = e("./_shared-key")("IE_PROTO");
        t.exports = function (e, t) {
          var i,
            s = o(e),
            a = 0,
            r = [];
          for (i in s) i != c && n(s, i) && r.push(i);
          for (; t.length > a; ) n(s, (i = t[a++])) && (~l(r, i) || r.push(i));
          return r;
        };
      },
      {
        "./_array-includes": 33,
        "./_has": 46,
        "./_shared-key": 76,
        "./_to-iobject": 81,
      },
    ],
    69: [
      function (e, t, i) {
        var s = e("./_object-keys-internal"),
          a = e("./_enum-bug-keys");
        t.exports =
          Object.keys ||
          function (e) {
            return s(e, a);
          };
      },
      { "./_enum-bug-keys": 41, "./_object-keys-internal": 68 },
    ],
    70: [
      function (e, t, i) {
        i.f = {}.propertyIsEnumerable;
      },
      {},
    ],
    71: [
      function (e, t, i) {
        var a = e("./_export"),
          r = e("./_core"),
          n = e("./_fails");
        t.exports = function (e, t) {
          var i = (r.Object || {})[e] || Object[e],
            s = {};
          (s[e] = t(i)),
            a(
              a.S +
                a.F *
                  n(function () {
                    i(1);
                  }),
              "Object",
              s
            );
        };
      },
      { "./_core": 36, "./_export": 43, "./_fails": 44 },
    ],
    72: [
      function (e, t, i) {
        t.exports = function (e, t) {
          return {
            enumerable: !(1 & e),
            configurable: !(2 & e),
            writable: !(4 & e),
            value: t,
          };
        };
      },
      {},
    ],
    73: [
      function (e, t, i) {
        t.exports = e("./_hide");
      },
      { "./_hide": 47 },
    ],
    74: [
      function (a, t, i) {
        var s = a("./_is-object"),
          r = a("./_an-object"),
          n = function (e, t) {
            if ((r(e), !s(t) && null !== t))
              throw TypeError(t + ": can't set as prototype!");
          };
        t.exports = {
          set:
            Object.setPrototypeOf ||
            ("__proto__" in {}
              ? (function (t, i, s) {
                  try {
                    (s = a("./_ctx")(
                      Function.call,
                      a("./_object-gopd").f(Object.prototype, "__proto__").set,
                      2
                    ))(t, []),
                      (i = !(t instanceof Array));
                  } catch (e) {
                    i = !0;
                  }
                  return function (e, t) {
                    return n(e, t), i ? (e.__proto__ = t) : s(e, t), e;
                  };
                })({}, !1)
              : undefined),
          check: n,
        };
      },
      {
        "./_an-object": 32,
        "./_ctx": 37,
        "./_is-object": 52,
        "./_object-gopd": 63,
      },
    ],
    75: [
      function (e, t, i) {
        var s = e("./_object-dp").f,
          a = e("./_has"),
          r = e("./_wks")("toStringTag");
        t.exports = function (e, t, i) {
          e &&
            !a((e = i ? e : e.prototype), r) &&
            s(e, r, { configurable: !0, value: t });
        };
      },
      { "./_has": 46, "./_object-dp": 61, "./_wks": 88 },
    ],
    76: [
      function (e, t, i) {
        var s = e("./_shared")("keys"),
          a = e("./_uid");
        t.exports = function (e) {
          return s[e] || (s[e] = a(e));
        };
      },
      { "./_shared": 77, "./_uid": 85 },
    ],
    77: [
      function (e, t, i) {
        var s = e("./_core"),
          a = e("./_global"),
          r = "__core-js_shared__",
          n = a[r] || (a[r] = {});
        (t.exports = function (e, t) {
          return n[e] || (n[e] = t !== undefined ? t : {});
        })("versions", []).push({
          version: s.version,
          mode: e("./_library") ? "pure" : "global",
          copyright: "© 2019 Denis Pushkarev (zloirock.ru)",
        });
      },
      { "./_core": 36, "./_global": 45, "./_library": 57 },
    ],
    78: [
      function (e, t, i) {
        var l = e("./_to-integer"),
          c = e("./_defined");
        t.exports = function (o) {
          return function (e, t) {
            var i,
              s,
              a = String(c(e)),
              r = l(t),
              n = a.length;
            return r < 0 || n <= r
              ? o
                ? ""
                : undefined
              : (i = a.charCodeAt(r)) < 55296 ||
                56319 < i ||
                r + 1 === n ||
                (s = a.charCodeAt(r + 1)) < 56320 ||
                57343 < s
              ? o
                ? a.charAt(r)
                : i
              : o
              ? a.slice(r, r + 2)
              : s - 56320 + ((i - 55296) << 10) + 65536;
          };
        };
      },
      { "./_defined": 38, "./_to-integer": 80 },
    ],
    79: [
      function (e, t, i) {
        var s = e("./_to-integer"),
          a = Math.max,
          r = Math.min;
        t.exports = function (e, t) {
          return (e = s(e)) < 0 ? a(e + t, 0) : r(e, t);
        };
      },
      { "./_to-integer": 80 },
    ],
    80: [
      function (e, t, i) {
        var s = Math.ceil,
          a = Math.floor;
        t.exports = function (e) {
          return isNaN((e = +e)) ? 0 : (0 < e ? a : s)(e);
        };
      },
      {},
    ],
    81: [
      function (e, t, i) {
        var s = e("./_iobject"),
          a = e("./_defined");
        t.exports = function (e) {
          return s(a(e));
        };
      },
      { "./_defined": 38, "./_iobject": 50 },
    ],
    82: [
      function (e, t, i) {
        var s = e("./_to-integer"),
          a = Math.min;
        t.exports = function (e) {
          return 0 < e ? a(s(e), 9007199254740991) : 0;
        };
      },
      { "./_to-integer": 80 },
    ],
    83: [
      function (e, t, i) {
        var s = e("./_defined");
        t.exports = function (e) {
          return Object(s(e));
        };
      },
      { "./_defined": 38 },
    ],
    84: [
      function (e, t, i) {
        var a = e("./_is-object");
        t.exports = function (e, t) {
          if (!a(e)) return e;
          var i, s;
          if (t && "function" == typeof (i = e.toString) && !a((s = i.call(e))))
            return s;
          if ("function" == typeof (i = e.valueOf) && !a((s = i.call(e))))
            return s;
          if (
            !t &&
            "function" == typeof (i = e.toString) &&
            !a((s = i.call(e)))
          )
            return s;
          throw TypeError("Can't convert object to primitive value");
        };
      },
      { "./_is-object": 52 },
    ],
    85: [
      function (e, t, i) {
        var s = 0,
          a = Math.random();
        t.exports = function (e) {
          return "Symbol(".concat(
            e === undefined ? "" : e,
            ")_",
            (++s + a).toString(36)
          );
        };
      },
      {},
    ],
    86: [
      function (e, t, i) {
        var s = e("./_global"),
          a = e("./_core"),
          r = e("./_library"),
          n = e("./_wks-ext"),
          o = e("./_object-dp").f;
        t.exports = function (e) {
          var t = a.Symbol || (a.Symbol = r ? {} : s.Symbol || {});
          "_" == e.charAt(0) || e in t || o(t, e, { value: n.f(e) });
        };
      },
      {
        "./_core": 36,
        "./_global": 45,
        "./_library": 57,
        "./_object-dp": 61,
        "./_wks-ext": 87,
      },
    ],
    87: [
      function (e, t, i) {
        i.f = e("./_wks");
      },
      { "./_wks": 88 },
    ],
    88: [
      function (e, t, i) {
        var s = e("./_shared")("wks"),
          a = e("./_uid"),
          r = e("./_global").Symbol,
          n = "function" == typeof r;
        (t.exports = function (e) {
          return s[e] || (s[e] = (n && r[e]) || (n ? r : a)("Symbol." + e));
        }).store = s;
      },
      { "./_global": 45, "./_shared": 77, "./_uid": 85 },
    ],
    89: [
      function (e, t, i) {
        var s = e("./_classof"),
          a = e("./_wks")("iterator"),
          r = e("./_iterators");
        t.exports = e("./_core").getIteratorMethod = function (e) {
          if (e != undefined) return e[a] || e["@@iterator"] || r[s(e)];
        };
      },
      { "./_classof": 34, "./_core": 36, "./_iterators": 56, "./_wks": 88 },
    ],
    90: [
      function (e, t, i) {
        var s = e("./_an-object"),
          a = e("./core.get-iterator-method");
        t.exports = e("./_core").getIterator = function (e) {
          var t = a(e);
          if ("function" != typeof t) throw TypeError(e + " is not iterable!");
          return s(t.call(e));
        };
      },
      { "./_an-object": 32, "./_core": 36, "./core.get-iterator-method": 89 },
    ],
    91: [
      function (e, t, i) {
        "use strict";
        var s = e("./_add-to-unscopables"),
          a = e("./_iter-step"),
          r = e("./_iterators"),
          n = e("./_to-iobject");
        (t.exports = e("./_iter-define")(
          Array,
          "Array",
          function (e, t) {
            (this._t = n(e)), (this._i = 0), (this._k = t);
          },
          function () {
            var e = this._t,
              t = this._k,
              i = this._i++;
            return !e || i >= e.length
              ? ((this._t = undefined), a(1))
              : a(0, "keys" == t ? i : "values" == t ? e[i] : [i, e[i]]);
          },
          "values"
        )),
          (r.Arguments = r.Array),
          s("keys"),
          s("values"),
          s("entries");
      },
      {
        "./_add-to-unscopables": 31,
        "./_iter-define": 54,
        "./_iter-step": 55,
        "./_iterators": 56,
        "./_to-iobject": 81,
      },
    ],
    92: [
      function (e, t, i) {
        var s = e("./_export");
        s(s.S + s.F, "Object", { assign: e("./_object-assign") });
      },
      { "./_export": 43, "./_object-assign": 59 },
    ],
    93: [
      function (e, t, i) {
        var s = e("./_export");
        s(s.S, "Object", { create: e("./_object-create") });
      },
      { "./_export": 43, "./_object-create": 60 },
    ],
    94: [
      function (e, t, i) {
        var s = e("./_export");
        s(s.S + s.F * !e("./_descriptors"), "Object", {
          defineProperty: e("./_object-dp").f,
        });
      },
      { "./_descriptors": 39, "./_export": 43, "./_object-dp": 61 },
    ],
    95: [
      function (e, t, i) {
        var s = e("./_to-iobject"),
          a = e("./_object-gopd").f;
        e("./_object-sap")("getOwnPropertyDescriptor", function () {
          return function (e, t) {
            return a(s(e), t);
          };
        });
      },
      { "./_object-gopd": 63, "./_object-sap": 71, "./_to-iobject": 81 },
    ],
    96: [
      function (e, t, i) {
        var s = e("./_to-object"),
          a = e("./_object-gpo");
        e("./_object-sap")("getPrototypeOf", function () {
          return function (e) {
            return a(s(e));
          };
        });
      },
      { "./_object-gpo": 67, "./_object-sap": 71, "./_to-object": 83 },
    ],
    97: [
      function (e, t, i) {
        var s = e("./_to-object"),
          a = e("./_object-keys");
        e("./_object-sap")("keys", function () {
          return function (e) {
            return a(s(e));
          };
        });
      },
      { "./_object-keys": 69, "./_object-sap": 71, "./_to-object": 83 },
    ],
    98: [
      function (e, t, i) {
        var s = e("./_export");
        s(s.S, "Object", { setPrototypeOf: e("./_set-proto").set });
      },
      { "./_export": 43, "./_set-proto": 74 },
    ],
    99: [function (e, t, i) {}, {}],
    100: [
      function (e, t, i) {
        "use strict";
        var s = e("./_string-at")(!0);
        e("./_iter-define")(
          String,
          "String",
          function (e) {
            (this._t = String(e)), (this._i = 0);
          },
          function () {
            var e,
              t = this._t,
              i = this._i;
            return i >= t.length
              ? { value: undefined, done: !0 }
              : ((e = s(t, i)), (this._i += e.length), { value: e, done: !1 });
          }
        );
      },
      { "./_iter-define": 54, "./_string-at": 78 },
    ],
    101: [
      function (e, t, i) {
        "use strict";
        var s = e("./_global"),
          n = e("./_has"),
          a = e("./_descriptors"),
          r = e("./_export"),
          o = e("./_redefine"),
          l = e("./_meta").KEY,
          c = e("./_fails"),
          d = e("./_shared"),
          h = e("./_set-to-string-tag"),
          u = e("./_uid"),
          p = e("./_wks"),
          y = e("./_wks-ext"),
          m = e("./_wks-define"),
          v = e("./_enum-keys"),
          f = e("./_is-array"),
          g = e("./_an-object"),
          P = e("./_is-object"),
          A = e("./_to-object"),
          E = e("./_to-iobject"),
          w = e("./_to-primitive"),
          x = e("./_property-desc"),
          T = e("./_object-create"),
          b = e("./_object-gopn-ext"),
          S = e("./_object-gopd"),
          C = e("./_object-gops"),
          k = e("./_object-dp"),
          B = e("./_object-keys"),
          I = S.f,
          L = k.f,
          _ = b.f,
          V = s.Symbol,
          D = s.JSON,
          M = D && D.stringify,
          H = "prototype",
          q = p("_hidden"),
          N = p("toPrimitive"),
          O = {}.propertyIsEnumerable,
          F = d("symbol-registry"),
          R = d("symbols"),
          j = d("op-symbols"),
          Q = Object[H],
          U = "function" == typeof V && !!C.f,
          W = s.QObject,
          z = !W || !W[H] || !W[H].findChild,
          J =
            a &&
            c(function () {
              return (
                7 !=
                T(
                  L({}, "a", {
                    get: function () {
                      return L(this, "a", { value: 7 }).a;
                    },
                  })
                ).a
              );
            })
              ? function (e, t, i) {
                  var s = I(Q, t);
                  s && delete Q[t], L(e, t, i), s && e !== Q && L(Q, t, s);
                }
              : L,
          G = function (e) {
            var t = (R[e] = T(V[H]));
            return (t._k = e), t;
          },
          K =
            U && "symbol" == typeof V.iterator
              ? function (e) {
                  return "symbol" == typeof e;
                }
              : function (e) {
                  return e instanceof V;
                },
          Y = function (e, t, i) {
            return (
              e === Q && Y(j, t, i),
              g(e),
              (t = w(t, !0)),
              g(i),
              n(R, t)
                ? (i.enumerable
                    ? (n(e, q) && e[q][t] && (e[q][t] = !1),
                      (i = T(i, { enumerable: x(0, !1) })))
                    : (n(e, q) || L(e, q, x(1, {})), (e[q][t] = !0)),
                  J(e, t, i))
                : L(e, t, i)
            );
          },
          X = function (e, t) {
            g(e);
            for (var i, s = v((t = E(t))), a = 0, r = s.length; a < r; )
              Y(e, (i = s[a++]), t[i]);
            return e;
          },
          Z = function (e) {
            var t = O.call(this, (e = w(e, !0)));
            return (
              !(this === Q && n(R, e) && !n(j, e)) &&
              (!(t || !n(this, e) || !n(R, e) || (n(this, q) && this[q][e])) ||
                t)
            );
          },
          $ = function (e, t) {
            if (((e = E(e)), (t = w(t, !0)), e !== Q || !n(R, t) || n(j, t))) {
              var i = I(e, t);
              return (
                !i || !n(R, t) || (n(e, q) && e[q][t]) || (i.enumerable = !0), i
              );
            }
          },
          ee = function (e) {
            for (var t, i = _(E(e)), s = [], a = 0; i.length > a; )
              n(R, (t = i[a++])) || t == q || t == l || s.push(t);
            return s;
          },
          te = function (e) {
            for (
              var t, i = e === Q, s = _(i ? j : E(e)), a = [], r = 0;
              s.length > r;

            )
              !n(R, (t = s[r++])) || (i && !n(Q, t)) || a.push(R[t]);
            return a;
          };
        U ||
          (o(
            (V = function () {
              if (this instanceof V)
                throw TypeError("Symbol is not a constructor!");
              var t = u(0 < arguments.length ? arguments[0] : undefined),
                i = function (e) {
                  this === Q && i.call(j, e),
                    n(this, q) && n(this[q], t) && (this[q][t] = !1),
                    J(this, t, x(1, e));
                };
              return a && z && J(Q, t, { configurable: !0, set: i }), G(t);
            })[H],
            "toString",
            function () {
              return this._k;
            }
          ),
          (S.f = $),
          (k.f = Y),
          (e("./_object-gopn").f = b.f = ee),
          (e("./_object-pie").f = Z),
          (C.f = te),
          a && !e("./_library") && o(Q, "propertyIsEnumerable", Z, !0),
          (y.f = function (e) {
            return G(p(e));
          })),
          r(r.G + r.W + r.F * !U, { Symbol: V });
        for (
          var ie =
              "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(
                ","
              ),
            se = 0;
          ie.length > se;

        )
          p(ie[se++]);
        for (var ae = B(p.store), re = 0; ae.length > re; ) m(ae[re++]);
        r(r.S + r.F * !U, "Symbol", {
          for: function (e) {
            return n(F, (e += "")) ? F[e] : (F[e] = V(e));
          },
          keyFor: function (e) {
            if (!K(e)) throw TypeError(e + " is not a symbol!");
            for (var t in F) if (F[t] === e) return t;
          },
          useSetter: function () {
            z = !0;
          },
          useSimple: function () {
            z = !1;
          },
        }),
          r(r.S + r.F * !U, "Object", {
            create: function (e, t) {
              return t === undefined ? T(e) : X(T(e), t);
            },
            defineProperty: Y,
            defineProperties: X,
            getOwnPropertyDescriptor: $,
            getOwnPropertyNames: ee,
            getOwnPropertySymbols: te,
          });
        var ne = c(function () {
          C.f(1);
        });
        r(r.S + r.F * ne, "Object", {
          getOwnPropertySymbols: function (e) {
            return C.f(A(e));
          },
        }),
          D &&
            r(
              r.S +
                r.F *
                  (!U ||
                    c(function () {
                      var e = V();
                      return (
                        "[null]" != M([e]) ||
                        "{}" != M({ a: e }) ||
                        "{}" != M(Object(e))
                      );
                    })),
              "JSON",
              {
                stringify: function (e) {
                  for (var t, i, s = [e], a = 1; a < arguments.length; )
                    s.push(arguments[a++]);
                  if (((i = t = s[1]), (P(t) || e !== undefined) && !K(e)))
                    return (
                      f(t) ||
                        (t = function (e, t) {
                          if (
                            ("function" == typeof i && (t = i.call(this, e, t)),
                            !K(t))
                          )
                            return t;
                        }),
                      (s[1] = t),
                      M.apply(D, s)
                    );
                },
              }
            ),
          V[H][N] || e("./_hide")(V[H], N, V[H].valueOf),
          h(V, "Symbol"),
          h(Math, "Math", !0),
          h(s.JSON, "JSON", !0);
      },
      {
        "./_an-object": 32,
        "./_descriptors": 39,
        "./_enum-keys": 42,
        "./_export": 43,
        "./_fails": 44,
        "./_global": 45,
        "./_has": 46,
        "./_hide": 47,
        "./_is-array": 51,
        "./_is-object": 52,
        "./_library": 57,
        "./_meta": 58,
        "./_object-create": 60,
        "./_object-dp": 61,
        "./_object-gopd": 63,
        "./_object-gopn": 65,
        "./_object-gopn-ext": 64,
        "./_object-gops": 66,
        "./_object-keys": 69,
        "./_object-pie": 70,
        "./_property-desc": 72,
        "./_redefine": 73,
        "./_set-to-string-tag": 75,
        "./_shared": 77,
        "./_to-iobject": 81,
        "./_to-object": 83,
        "./_to-primitive": 84,
        "./_uid": 85,
        "./_wks": 88,
        "./_wks-define": 86,
        "./_wks-ext": 87,
      },
    ],
    102: [
      function (e, t, i) {
        e("./_wks-define")("asyncIterator");
      },
      { "./_wks-define": 86 },
    ],
    103: [
      function (e, t, i) {
        e("./_wks-define")("observable");
      },
      { "./_wks-define": 86 },
    ],
    104: [
      function (e, t, i) {
        e("./es6.array.iterator");
        for (
          var s = e("./_global"),
            a = e("./_hide"),
            r = e("./_iterators"),
            n = e("./_wks")("toStringTag"),
            o =
              "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(
                ","
              ),
            l = 0;
          l < o.length;
          l++
        ) {
          var c = o[l],
            d = s[c],
            h = d && d.prototype;
          h && !h[n] && a(h, n, c), (r[c] = r.Array);
        }
      },
      {
        "./_global": 45,
        "./_hide": 47,
        "./_iterators": 56,
        "./_wks": 88,
        "./es6.array.iterator": 91,
      },
    ],
  },
  {},
  [1]
);
