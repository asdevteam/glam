/*
* jquery.gmap
* Version 2.1.5 2013-10-30
* @requires jQuery >= 1.6.1 or later
*
* Homepage: http://labs.mario.ec/jquery-gmap/
* Author: Mario Estrada <me@mario.ec>
* License: MIT
*/
!function(a){a.fn.gMap=function(b,c){switch(b){case"addMarker":return a(this).trigger("gMap.addMarker",[c.latitude,c.longitude,c.content,c.icon,c.popup]);case"centerAt":return a(this).trigger("gMap.centerAt",[c.latitude,c.longitude,c.zoom]);case"clearMarkers":return a(this).trigger("gMap.clearMarkers")}var d=a.extend({},a.fn.gMap.defaults,b);return this.each(function(){var b=new google.maps.Map(this);a(this).data("gMap.reference",b);var c=new google.maps.Geocoder;d.address?c.geocode({address:d.address},function(a){a&&a.length&&b.setCenter(a[0].geometry.location)}):d.latitude&&d.longitude?b.setCenter(new google.maps.LatLng(d.latitude,d.longitude)):a.isArray(d.markers)&&d.markers.length>0?d.markers[0].address?c.geocode({address:d.markers[0].address},function(a){a&&a.length>0&&b.setCenter(a[0].geometry.location)}):b.setCenter(new google.maps.LatLng(d.markers[0].latitude,d.markers[0].longitude)):b.setCenter(new google.maps.LatLng(34.885931,9.84375)),b.setZoom(d.zoom),b.setMapTypeId(google.maps.MapTypeId[d.maptype]);var e={scrollwheel:d.scrollwheel,disableDoubleClickZoom:!d.doubleclickzoom};d.controls===!1?a.extend(e,{disableDefaultUI:!0}):0!==d.controls.length&&a.extend(e,d.controls,{disableDefaultUI:!0}),b.setOptions(e);var f,g,h=new google.maps.Marker;f=new google.maps.MarkerImage(d.icon.image),f.size=new google.maps.Size(d.icon.iconsize[0],d.icon.iconsize[1]),f.anchor=new google.maps.Point(d.icon.iconanchor[0],d.icon.iconanchor[1]),h.setIcon(f),d.icon.shadow&&(g=new google.maps.MarkerImage(d.icon.shadow),g.size=new google.maps.Size(d.icon.shadowsize[0],d.icon.shadowsize[1]),g.anchor=new google.maps.Point(d.icon.shadowanchor[0],d.icon.shadowanchor[1]),h.setShadow(g)),a(this).bind("gMap.centerAt",function(a,c,d,e){e&&b.setZoom(e),b.panTo(new google.maps.LatLng(parseFloat(c),parseFloat(d)))});var i=[];a(this).bind("gMap.clearMarkers",function(){for(;i[0];)i.pop().setMap(null)});var j;a(this).bind("gMap.addMarker",function(a,c,e,f,g,k){var l,m,n=new google.maps.LatLng(parseFloat(c),parseFloat(e)),o=new google.maps.Marker({position:n});if(g?(l=new google.maps.MarkerImage(g.image),l.size=new google.maps.Size(g.iconsize[0],g.iconsize[1]),l.anchor=new google.maps.Point(g.iconanchor[0],g.iconanchor[1]),o.setIcon(l),g.shadow&&(m=new google.maps.MarkerImage(g.shadow),m.size=new google.maps.Size(g.shadowsize[0],g.shadowsize[1]),m.anchor=new google.maps.Point(g.shadowanchor[0],g.shadowanchor[1]),h.setShadow(m))):(o.setIcon(h.getIcon()),o.setShadow(h.getShadow())),f){"_latlng"===f&&(f=c+", "+e);var p=new google.maps.InfoWindow({content:d.html_prepend+f+d.html_append});google.maps.event.addListener(o,"click",function(){j&&j.close(),p.open(b,o),j=p}),k&&google.maps.event.addListenerOnce(b,"tilesloaded",function(){p.open(b,o)})}o.setMap(b),i.push(o)});for(var k,l=this,m=function(b){return function(c){c&&c.length>0&&a(l).trigger("gMap.addMarker",[c[0].geometry.location.lat(),c[0].geometry.location.lng(),b.html,b.icon,b.popup])}},n=0;n<d.markers.length;n++)k=d.markers[n],k.address?("_address"===k.html&&(k.html=k.address),c.geocode({address:k.address},m(k))):a(this).trigger("gMap.addMarker",[k.latitude,k.longitude,k.html,k.icon,k.popup])})},a.fn.gMap.defaults={address:"",latitude:0,longitude:0,zoom:1,markers:[],controls:[],scrollwheel:!1,doubleclickzoom:!0,maptype:"ROADMAP",html_prepend:'<div class="gmap_marker">',html_append:"</div>",icon:{image:"http://www.google.com/mapfiles/marker.png",shadow:"http://www.google.com/mapfiles/shadow50.png",iconsize:[20,34],shadowsize:[37,34],iconanchor:[9,34],shadowanchor:[6,34]}}}(jQuery);;
(function($){
google.maps.event.addDomListener(window, 'load', init);
 var lat = $('.oshop-map').data('lat');
 var lag = $('.oshop-map').data('lag');
function init() {
    var mapOptions = {
        zoom: 11,
        center: new google.maps.LatLng(lat, lag),
        styles: [{
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{
                "color": "#e9e9e9"
            }, {
                "lightness": 17
            }]
        }, {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [{
                "color": "#f5f5f5"
            }, {
                "lightness": 20
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#ffffff"
            }, {
                "lightness": 17
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#ffffff"
            }, {
                "lightness": 29
            }, {
                "weight": 0.2
            }]
        }, {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [{
                "color": "#ffffff"
            }, {
                "lightness": 18
            }]
        }, {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [{
                "color": "#ffffff"
            }, {
                "lightness": 16
            }]
        }, {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [{
                "color": "#f5f5f5"
            }, {
                "lightness": 21
            }]
        }, {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [{
                "color": "#dedede"
            }, {
                "lightness": 21
            }]
        }, {
            "elementType": "labels.text.stroke",
            "stylers": [{
                "visibility": "on"
            }, {
                "color": "#ffffff"
            }, {
                "lightness": 16
            }]
        }, {
            "elementType": "labels.text.fill",
            "stylers": [{
                "saturation": 36
            }, {
                "color": "#333333"
            }, {
                "lightness": 40
            }]
        }, {
            "elementType": "labels.icon",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [{
                "color": "#f2f2f2"
            }, {
                "lightness": 19
            }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#fefefe"
            }, {
                "lightness": 20
            }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#fefefe"
            }, {
                "lightness": 17
            }, {
                "weight": 1.2
            }]
        }]
    };
    if (document.getElementById('map')){
    var mapElement = document.getElementById('map');
    var map = new google.maps.Map(mapElement, mapOptions);
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(lat, lag),
        map: map,
        title: 'Snazzy!'
    });
}
}
})(jQuery);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function ($, Drupal) {
  Drupal.theme.progressBar = function (id) {
    return "<div id=\"".concat(id, "\" class=\"progress\" aria-live=\"polite\">") + '<div class="progress__label">&nbsp;</div>' + '<div class="progress__track"><div class="progress__bar"></div></div>' + '<div class="progress__percentage"></div>' + '<div class="progress__description">&nbsp;</div>' + '</div>';
  };
  Drupal.ProgressBar = function (id, updateCallback, method, errorCallback) {
    this.id = id;
    this.method = method || 'GET';
    this.updateCallback = updateCallback;
    this.errorCallback = errorCallback;
    this.element = $(Drupal.theme('progressBar', id));
  };
  $.extend(Drupal.ProgressBar.prototype, {
    setProgress: function setProgress(percentage, message, label) {
      if (percentage >= 0 && percentage <= 100) {
        $(this.element).find('div.progress__bar').css('width', "".concat(percentage, "%"));
        $(this.element).find('div.progress__percentage').html("".concat(percentage, "%"));
      }
      $('div.progress__description', this.element).html(message);
      $('div.progress__label', this.element).html(label);
      if (this.updateCallback) {
        this.updateCallback(percentage, message, this);
      }
    },
    startMonitoring: function startMonitoring(uri, delay) {
      this.delay = delay;
      this.uri = uri;
      this.sendPing();
    },
    stopMonitoring: function stopMonitoring() {
      clearTimeout(this.timer);
      this.uri = null;
    },
    sendPing: function sendPing() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      if (this.uri) {
        var pb = this;
        var uri = this.uri;
        if (uri.indexOf('?') === -1) {
          uri += '?';
        } else {
          uri += '&';
        }
        uri += '_format=json';
        $.ajax({
          type: this.method,
          url: uri,
          data: '',
          dataType: 'json',
          success: function success(progress) {
            if (progress.status === 0) {
              pb.displayError(progress.data);
              return;
            }
            pb.setProgress(progress.percentage, progress.message, progress.label);
            pb.timer = setTimeout(function () {
              pb.sendPing();
            }, pb.delay);
          },
          error: function error(xmlhttp) {
            var e = new Drupal.AjaxError(xmlhttp, pb.uri);
            pb.displayError("<pre>".concat(e.message, "</pre>"));
          }
        });
      }
    },
    displayError: function displayError(string) {
      var error = $('<div class="messages messages--error"></div>').html(string);
      $(this.element).before(error).hide();
      if (this.errorCallback) {
        this.errorCallback(this);
      }
    }
  });
})(jQuery, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function ($, once) {
  var deprecatedMessageSuffix = "is deprecated in Drupal 9.3.0 and will be removed in Drupal 10.0.0. Use the core/once library instead. See https://www.drupal.org/node/3158256";
  var originalJQOnce = $.fn.once;
  var originalJQRemoveOnce = $.fn.removeOnce;
  $.fn.once = function jQueryOnce(id) {
    Drupal.deprecationError({
      message: "jQuery.once() ".concat(deprecatedMessageSuffix)
    });
    return originalJQOnce.apply(this, [id]);
  };
  $.fn.removeOnce = function jQueryRemoveOnce(id) {
    Drupal.deprecationError({
      message: "jQuery.removeOnce() ".concat(deprecatedMessageSuffix)
    });
    return originalJQRemoveOnce.apply(this, [id]);
  };
  var drupalOnce = once;
  function augmentedOnce(id, selector, context) {
    originalJQOnce.apply($(selector, context), [id]);
    return drupalOnce(id, selector, context);
  }
  function remove(id, selector, context) {
    originalJQRemoveOnce.apply($(selector, context), [id]);
    return drupalOnce.remove(id, selector, context);
  }
  window.once = Object.assign(augmentedOnce, drupalOnce, {
    remove: remove
  });
})(jQuery, once);;
loadjs=function(){var h=function(){},c={},u={},f={};function o(e,n){if(e){var r=f[e];if(u[e]=n,r)for(;r.length;)r[0](e,n),r.splice(0,1)}}function l(e,n){e.call&&(e={success:e}),n.length?(e.error||h)(n):(e.success||h)(e)}function d(r,t,s,i){var c,o,e=document,n=s.async,u=(s.numRetries||0)+1,f=s.before||h,l=r.replace(/[\?|#].*$/,""),a=r.replace(/^(css|img)!/,"");i=i||0,/(^css!|\.css$)/.test(l)?((o=e.createElement("link")).rel="stylesheet",o.href=a,(c="hideFocus"in o)&&o.relList&&(c=0,o.rel="preload",o.as="style")):/(^img!|\.(png|gif|jpg|svg|webp)$)/.test(l)?(o=e.createElement("img")).src=a:((o=e.createElement("script")).src=r,o.async=void 0===n||n),!(o.onload=o.onerror=o.onbeforeload=function(e){var n=e.type[0];if(c)try{o.sheet.cssText.length||(n="e")}catch(e){18!=e.code&&(n="e")}if("e"==n){if((i+=1)<u)return d(r,t,s,i)}else if("preload"==o.rel&&"style"==o.as)return o.rel="stylesheet";t(r,n,e.defaultPrevented)})!==f(r,o)&&e.head.appendChild(o)}function r(e,n,r){var t,s;if(n&&n.trim&&(t=n),s=(t?r:n)||{},t){if(t in c)throw"LoadJS";c[t]=!0}function i(n,r){!function(e,t,n){var r,s,i=(e=e.push?e:[e]).length,c=i,o=[];for(r=function(e,n,r){if("e"==n&&o.push(e),"b"==n){if(!r)return;o.push(e)}--i||t(o)},s=0;s<c;s++)d(e[s],r,n)}(e,function(e){l(s,e),n&&l({success:n,error:r},e),o(t,e)},s)}if(s.returnPromise)return new Promise(i);i()}return r.ready=function(e,n){return function(e,r){e=e.push?e:[e];var n,t,s,i=[],c=e.length,o=c;for(n=function(e,n){n.length&&i.push(e),--o||r(i)};c--;)t=e[c],(s=u[t])?n(t,s):(f[t]=f[t]||[]).push(n)}(e,function(e){l(n,e)}),r},r.done=function(e){o(e,[])},r.reset=function(){c={},u={},f={}},r.isDefined=function(e){return e in c},r}();;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
(function ($, window, Drupal, drupalSettings, loadjs, _ref) {
  var isFocusable = _ref.isFocusable,
    tabbable = _ref.tabbable;
  Drupal.behaviors.AJAX = {
    attach: function attach(context, settings) {
      function loadAjaxBehavior(base) {
        var elementSettings = settings.ajax[base];
        if (typeof elementSettings.selector === 'undefined') {
          elementSettings.selector = "#".concat(base);
        }
        once('drupal-ajax', $(elementSettings.selector)).forEach(function (el) {
          elementSettings.element = el;
          elementSettings.base = base;
          Drupal.ajax(elementSettings);
        });
      }
      Object.keys(settings.ajax || {}).forEach(function (base) {
        return loadAjaxBehavior(base);
      });
      Drupal.ajax.bindAjaxLinks(document.body);
      once('ajax', '.use-ajax-submit').forEach(function (el) {
        var elementSettings = {};
        elementSettings.url = $(el.form).attr('action');
        elementSettings.setClick = true;
        elementSettings.event = 'click';
        elementSettings.progress = {
          type: 'throbber'
        };
        elementSettings.base = el.id;
        elementSettings.element = el;
        Drupal.ajax(elementSettings);
      });
    },
    detach: function detach(context, settings, trigger) {
      if (trigger === 'unload') {
        Drupal.ajax.expired().forEach(function (instance) {
          Drupal.ajax.instances[instance.instanceIndex] = null;
        });
      }
    }
  };
  Drupal.AjaxError = function (xmlhttp, uri, customMessage) {
    var statusCode;
    var statusText;
    var responseText;
    if (xmlhttp.status) {
      statusCode = "\n".concat(Drupal.t('An AJAX HTTP error occurred.'), "\n").concat(Drupal.t('HTTP Result Code: !status', {
        '!status': xmlhttp.status
      }));
    } else {
      statusCode = "\n".concat(Drupal.t('An AJAX HTTP request terminated abnormally.'));
    }
    statusCode += "\n".concat(Drupal.t('Debugging information follows.'));
    var pathText = "\n".concat(Drupal.t('Path: !uri', {
      '!uri': uri
    }));
    statusText = '';
    try {
      statusText = "\n".concat(Drupal.t('StatusText: !statusText', {
        '!statusText': xmlhttp.statusText.trim()
      }));
    } catch (e) {}
    responseText = '';
    try {
      responseText = "\n".concat(Drupal.t('ResponseText: !responseText', {
        '!responseText': xmlhttp.responseText.trim()
      }));
    } catch (e) {}
    responseText = responseText.replace(/<("[^"]*"|'[^']*'|[^'">])*>/gi, '');
    responseText = responseText.replace(/[\n]+\s+/g, '\n');
    var readyStateText = xmlhttp.status === 0 ? "\n".concat(Drupal.t('ReadyState: !readyState', {
      '!readyState': xmlhttp.readyState
    })) : '';
    customMessage = customMessage ? "\n".concat(Drupal.t('CustomMessage: !customMessage', {
      '!customMessage': customMessage
    })) : '';
    this.message = statusCode + pathText + statusText + customMessage + responseText + readyStateText;
    this.name = 'AjaxError';
  };
  Drupal.AjaxError.prototype = new Error();
  Drupal.AjaxError.prototype.constructor = Drupal.AjaxError;
  Drupal.ajax = function (settings) {
    if (arguments.length !== 1) {
      throw new Error('Drupal.ajax() function must be called with one configuration object only');
    }
    var base = settings.base || false;
    var element = settings.element || false;
    delete settings.base;
    delete settings.element;
    if (!settings.progress && !element) {
      settings.progress = false;
    }
    var ajax = new Drupal.Ajax(base, element, settings);
    ajax.instanceIndex = Drupal.ajax.instances.length;
    Drupal.ajax.instances.push(ajax);
    return ajax;
  };
  Drupal.ajax.instances = [];
  Drupal.ajax.expired = function () {
    return Drupal.ajax.instances.filter(function (instance) {
      return instance && instance.element !== false && !document.body.contains(instance.element);
    });
  };
  Drupal.ajax.bindAjaxLinks = function (element) {
    once('ajax', '.use-ajax', element).forEach(function (ajaxLink) {
      var $linkElement = $(ajaxLink);
      var elementSettings = {
        progress: {
          type: 'throbber'
        },
        dialogType: $linkElement.data('dialog-type'),
        dialog: $linkElement.data('dialog-options'),
        dialogRenderer: $linkElement.data('dialog-renderer'),
        base: $linkElement.attr('id'),
        element: ajaxLink
      };
      var href = $linkElement.attr('href');
      if (href) {
        elementSettings.url = href;
        elementSettings.event = 'click';
      }
      Drupal.ajax(elementSettings);
    });
  };
  Drupal.Ajax = function (base, element, elementSettings) {
    var defaults = {
      event: element ? 'mousedown' : null,
      keypress: true,
      selector: base ? "#".concat(base) : null,
      effect: 'none',
      speed: 'none',
      method: 'replaceWith',
      progress: {
        type: 'throbber',
        message: Drupal.t('Please wait...')
      },
      submit: {
        js: true
      }
    };
    $.extend(this, defaults, elementSettings);
    this.commands = new Drupal.AjaxCommands();
    this.instanceIndex = false;
    if (this.wrapper) {
      this.wrapper = "#".concat(this.wrapper);
    }
    this.element = element;
    this.element_settings = elementSettings;
    this.elementSettings = elementSettings;
    if (this.element && this.element.form) {
      this.$form = $(this.element.form);
    }
    if (!this.url) {
      var $element = $(this.element);
      if ($element.is('a')) {
        this.url = $element.attr('href');
      } else if (this.element && element.form) {
        this.url = this.$form.attr('action');
      }
    }
    var originalUrl = this.url;
    this.url = this.url.replace(/\/nojs(\/|$|\?|#)/, '/ajax$1');
    if (drupalSettings.ajaxTrustedUrl[originalUrl]) {
      drupalSettings.ajaxTrustedUrl[this.url] = true;
    }
    var ajax = this;
    ajax.options = {
      url: ajax.url,
      data: ajax.submit,
      isInProgress: function isInProgress() {
        return ajax.ajaxing;
      },
      beforeSerialize: function beforeSerialize(elementSettings, options) {
        return ajax.beforeSerialize(elementSettings, options);
      },
      beforeSubmit: function beforeSubmit(formValues, elementSettings, options) {
        ajax.ajaxing = true;
        return ajax.beforeSubmit(formValues, elementSettings, options);
      },
      beforeSend: function beforeSend(xmlhttprequest, options) {
        ajax.ajaxing = true;
        return ajax.beforeSend(xmlhttprequest, options);
      },
      success: function success(response, status, xmlhttprequest) {
        var _this = this;
        if (typeof response === 'string') {
          response = $.parseJSON(response);
        }
        if (response !== null && !drupalSettings.ajaxTrustedUrl[ajax.url]) {
          if (xmlhttprequest.getResponseHeader('X-Drupal-Ajax-Token') !== '1') {
            var customMessage = Drupal.t('The response failed verification so will not be processed.');
            return ajax.error(xmlhttprequest, ajax.url, customMessage);
          }
        }
        return Promise.resolve(ajax.success(response, status)).then(function () {
          ajax.ajaxing = false;
          $(document).trigger('ajaxSuccess', [xmlhttprequest, _this]);
          $(document).trigger('ajaxComplete', [xmlhttprequest, _this]);
          if (--$.active === 0) {
            $(document).trigger('ajaxStop');
          }
        });
      },
      error: function error(xmlhttprequest, status, _error) {
        ajax.ajaxing = false;
      },
      complete: function complete(xmlhttprequest, status) {
        if (status === 'error' || status === 'parsererror') {
          return ajax.error(xmlhttprequest, ajax.url);
        }
      },
      dataType: 'json',
      jsonp: false,
      type: 'POST'
    };
    if (elementSettings.dialog) {
      ajax.options.data.dialogOptions = elementSettings.dialog;
    }
    if (ajax.options.url.indexOf('?') === -1) {
      ajax.options.url += '?';
    } else {
      ajax.options.url += '&';
    }
    var wrapper = "drupal_".concat(elementSettings.dialogType || 'ajax');
    if (elementSettings.dialogRenderer) {
      wrapper += ".".concat(elementSettings.dialogRenderer);
    }
    ajax.options.url += "".concat(Drupal.ajax.WRAPPER_FORMAT, "=").concat(wrapper);
    $(ajax.element).on(elementSettings.event, function (event) {
      if (!drupalSettings.ajaxTrustedUrl[ajax.url] && !Drupal.url.isLocal(ajax.url)) {
        throw new Error(Drupal.t('The callback URL is not local and not trusted: !url', {
          '!url': ajax.url
        }));
      }
      return ajax.eventResponse(this, event);
    });
    if (elementSettings.keypress) {
      $(ajax.element).on('keypress', function (event) {
        return ajax.keypressResponse(this, event);
      });
    }
    if (elementSettings.prevent) {
      $(ajax.element).on(elementSettings.prevent, false);
    }
  };
  Drupal.ajax.WRAPPER_FORMAT = '_wrapper_format';
  Drupal.Ajax.AJAX_REQUEST_PARAMETER = '_drupal_ajax';
  Drupal.Ajax.prototype.execute = function () {
    if (this.ajaxing) {
      return;
    }
    try {
      this.beforeSerialize(this.element, this.options);
      return $.ajax(this.options);
    } catch (e) {
      this.ajaxing = false;
      window.alert("An error occurred while attempting to process ".concat(this.options.url, ": ").concat(e.message));
      return $.Deferred().reject();
    }
  };
  Drupal.Ajax.prototype.keypressResponse = function (element, event) {
    var ajax = this;
    if (event.which === 13 || event.which === 32 && element.type !== 'text' && element.type !== 'textarea' && element.type !== 'tel' && element.type !== 'number') {
      event.preventDefault();
      event.stopPropagation();
      $(element).trigger(ajax.elementSettings.event);
    }
  };
  Drupal.Ajax.prototype.eventResponse = function (element, event) {
    event.preventDefault();
    event.stopPropagation();
    var ajax = this;
    if (ajax.ajaxing) {
      return;
    }
    try {
      if (ajax.$form) {
        if (ajax.setClick) {
          element.form.clk = element;
        }
        ajax.$form.ajaxSubmit(ajax.options);
      } else {
        ajax.beforeSerialize(ajax.element, ajax.options);
        $.ajax(ajax.options);
      }
    } catch (e) {
      ajax.ajaxing = false;
      window.alert("An error occurred while attempting to process ".concat(ajax.options.url, ": ").concat(e.message));
    }
  };
  Drupal.Ajax.prototype.beforeSerialize = function (element, options) {
    if (this.$form && document.body.contains(this.$form.get(0))) {
      var settings = this.settings || drupalSettings;
      Drupal.detachBehaviors(this.$form.get(0), settings, 'serialize');
    }
    options.data[Drupal.Ajax.AJAX_REQUEST_PARAMETER] = 1;
    var pageState = drupalSettings.ajaxPageState;
    options.data['ajax_page_state[theme]'] = pageState.theme;
    options.data['ajax_page_state[theme_token]'] = pageState.theme_token;
    options.data['ajax_page_state[libraries]'] = pageState.libraries;
  };
  Drupal.Ajax.prototype.beforeSubmit = function (formValues, element, options) {};
  Drupal.Ajax.prototype.beforeSend = function (xmlhttprequest, options) {
    if (this.$form) {
      options.extraData = options.extraData || {};
      options.extraData.ajax_iframe_upload = '1';
      var v = $.fieldValue(this.element);
      if (v !== null) {
        options.extraData[this.element.name] = v;
      }
    }
    $(this.element).prop('disabled', true);
    if (!this.progress || !this.progress.type) {
      return;
    }
    var progressIndicatorMethod = "setProgressIndicator".concat(this.progress.type.slice(0, 1).toUpperCase()).concat(this.progress.type.slice(1).toLowerCase());
    if (progressIndicatorMethod in this && typeof this[progressIndicatorMethod] === 'function') {
      this[progressIndicatorMethod].call(this);
    }
  };
  Drupal.theme.ajaxProgressThrobber = function (message) {
    var messageMarkup = typeof message === 'string' ? Drupal.theme('ajaxProgressMessage', message) : '';
    var throbber = '<div class="throbber">&nbsp;</div>';
    return "<div class=\"ajax-progress ajax-progress-throbber\">".concat(throbber).concat(messageMarkup, "</div>");
  };
  Drupal.theme.ajaxProgressIndicatorFullscreen = function () {
    return '<div class="ajax-progress ajax-progress-fullscreen">&nbsp;</div>';
  };
  Drupal.theme.ajaxProgressMessage = function (message) {
    return "<div class=\"message\">".concat(message, "</div>");
  };
  Drupal.theme.ajaxProgressBar = function ($element) {
    return $('<div class="ajax-progress ajax-progress-bar"></div>').append($element);
  };
  Drupal.Ajax.prototype.setProgressIndicatorBar = function () {
    var progressBar = new Drupal.ProgressBar("ajax-progress-".concat(this.element.id), $.noop, this.progress.method, $.noop);
    if (this.progress.message) {
      progressBar.setProgress(-1, this.progress.message);
    }
    if (this.progress.url) {
      progressBar.startMonitoring(this.progress.url, this.progress.interval || 1500);
    }
    this.progress.element = $(Drupal.theme('ajaxProgressBar', progressBar.element));
    this.progress.object = progressBar;
    $(this.element).after(this.progress.element);
  };
  Drupal.Ajax.prototype.setProgressIndicatorThrobber = function () {
    this.progress.element = $(Drupal.theme('ajaxProgressThrobber', this.progress.message));
    $(this.element).after(this.progress.element);
  };
  Drupal.Ajax.prototype.setProgressIndicatorFullscreen = function () {
    this.progress.element = $(Drupal.theme('ajaxProgressIndicatorFullscreen'));
    $('body').append(this.progress.element);
  };
  Drupal.Ajax.prototype.commandExecutionQueue = function (response, status) {
    var _this2 = this;
    var ajaxCommands = this.commands;
    return Object.keys(response || {}).reduce(function (executionQueue, key) {
      return executionQueue.then(function () {
        var command = response[key].command;
        if (command && ajaxCommands[command]) {
          return ajaxCommands[command](_this2, response[key], status);
        }
      });
    }, Promise.resolve());
  };
  Drupal.Ajax.prototype.success = function (response, status) {
    var _this3 = this;
    if (this.progress.element) {
      $(this.progress.element).remove();
    }
    if (this.progress.object) {
      this.progress.object.stopMonitoring();
    }
    $(this.element).prop('disabled', false);
    var elementParents = $(this.element).parents('[data-drupal-selector]').addBack().toArray();
    var focusChanged = Object.keys(response || {}).some(function (key) {
      var _response$key = response[key],
        command = _response$key.command,
        method = _response$key.method;
      return command === 'focusFirst' || command === 'invoke' && method === 'focus';
    });
    return this.commandExecutionQueue(response, status).then(function () {
      if (!focusChanged && _this3.element && !$(_this3.element).data('disable-refocus')) {
        var target = false;
        for (var n = elementParents.length - 1; !target && n >= 0; n--) {
          target = document.querySelector("[data-drupal-selector=\"".concat(elementParents[n].getAttribute('data-drupal-selector'), "\"]"));
        }
        if (target) {
          $(target).trigger('focus');
        }
      }
      if (_this3.$form && document.body.contains(_this3.$form.get(0))) {
        var settings = _this3.settings || drupalSettings;
        Drupal.attachBehaviors(_this3.$form.get(0), settings);
      }
      _this3.settings = null;
    }).catch(function (error) {
      return console.error(Drupal.t('An error occurred during the execution of the Ajax response: !error', {
        '!error': error
      }));
    });
  };
  Drupal.Ajax.prototype.getEffect = function (response) {
    var type = response.effect || this.effect;
    var speed = response.speed || this.speed;
    var effect = {};
    if (type === 'none') {
      effect.showEffect = 'show';
      effect.hideEffect = 'hide';
      effect.showSpeed = '';
    } else if (type === 'fade') {
      effect.showEffect = 'fadeIn';
      effect.hideEffect = 'fadeOut';
      effect.showSpeed = speed;
    } else {
      effect.showEffect = "".concat(type, "Toggle");
      effect.hideEffect = "".concat(type, "Toggle");
      effect.showSpeed = speed;
    }
    return effect;
  };
  Drupal.Ajax.prototype.error = function (xmlhttprequest, uri, customMessage) {
    if (this.progress.element) {
      $(this.progress.element).remove();
    }
    if (this.progress.object) {
      this.progress.object.stopMonitoring();
    }
    $(this.wrapper).show();
    $(this.element).prop('disabled', false);
    if (this.$form && document.body.contains(this.$form.get(0))) {
      var settings = this.settings || drupalSettings;
      Drupal.attachBehaviors(this.$form.get(0), settings);
    }
    throw new Drupal.AjaxError(xmlhttprequest, uri, customMessage);
  };
  Drupal.theme.ajaxWrapperNewContent = function ($newContent, ajax, response) {
    return (response.effect || ajax.effect) !== 'none' && $newContent.filter(function (i) {
      return !($newContent[i].nodeName === '#comment' || $newContent[i].nodeName === '#text' && /^(\s|\n|\r)*$/.test($newContent[i].textContent));
    }).length > 1 ? Drupal.theme('ajaxWrapperMultipleRootElements', $newContent) : $newContent;
  };
  Drupal.theme.ajaxWrapperMultipleRootElements = function ($elements) {
    return $('<div></div>').append($elements);
  };
  Drupal.AjaxCommands = function () {};
  Drupal.AjaxCommands.prototype = {
    insert: function insert(ajax, response) {
      var $wrapper = response.selector ? $(response.selector) : $(ajax.wrapper);
      var method = response.method || ajax.method;
      var effect = ajax.getEffect(response);
      var settings = response.settings || ajax.settings || drupalSettings;
      var $newContent = $($.parseHTML(response.data, document, true));
      $newContent = Drupal.theme('ajaxWrapperNewContent', $newContent, ajax, response);
      switch (method) {
        case 'html':
        case 'replaceWith':
        case 'replaceAll':
        case 'empty':
        case 'remove':
          Drupal.detachBehaviors($wrapper.get(0), settings);
          break;
        default:
          break;
      }
      $wrapper[method]($newContent);
      if (effect.showEffect !== 'show') {
        $newContent.hide();
      }
      var $ajaxNewContent = $newContent.find('.ajax-new-content');
      if ($ajaxNewContent.length) {
        $ajaxNewContent.hide();
        $newContent.show();
        $ajaxNewContent[effect.showEffect](effect.showSpeed);
      } else if (effect.showEffect !== 'show') {
        $newContent[effect.showEffect](effect.showSpeed);
      }
      if ($newContent.parents('html').length) {
        $newContent.each(function (index, element) {
          if (element.nodeType === Node.ELEMENT_NODE) {
            Drupal.attachBehaviors(element, settings);
          }
        });
      }
    },
    remove: function remove(ajax, response, status) {
      var settings = response.settings || ajax.settings || drupalSettings;
      $(response.selector).each(function () {
        Drupal.detachBehaviors(this, settings);
      }).remove();
    },
    changed: function changed(ajax, response, status) {
      var $element = $(response.selector);
      if (!$element.hasClass('ajax-changed')) {
        $element.addClass('ajax-changed');
        if (response.asterisk) {
          $element.find(response.asterisk).append(" <abbr class=\"ajax-changed\" title=\"".concat(Drupal.t('Changed'), "\">*</abbr> "));
        }
      }
    },
    alert: function alert(ajax, response, status) {
      window.alert(response.text);
    },
    announce: function announce(ajax, response) {
      if (response.priority) {
        Drupal.announce(response.text, response.priority);
      } else {
        Drupal.announce(response.text);
      }
    },
    redirect: function redirect(ajax, response, status) {
      window.location = response.url;
    },
    css: function css(ajax, response, status) {
      $(response.selector).css(response.argument);
    },
    settings: function settings(ajax, response, status) {
      var ajaxSettings = drupalSettings.ajax;
      if (ajaxSettings) {
        Drupal.ajax.expired().forEach(function (instance) {
          if (instance.selector) {
            var selector = instance.selector.replace('#', '');
            if (selector in ajaxSettings) {
              delete ajaxSettings[selector];
            }
          }
        });
      }
      if (response.merge) {
        $.extend(true, drupalSettings, response.settings);
      } else {
        ajax.settings = response.settings;
      }
    },
    data: function data(ajax, response, status) {
      $(response.selector).data(response.name, response.value);
    },
    focusFirst: function focusFirst(ajax, response, status) {
      var focusChanged = false;
      var container = document.querySelector(response.selector);
      if (container) {
        var tabbableElements = tabbable(container);
        if (tabbableElements.length) {
          tabbableElements[0].focus();
          focusChanged = true;
        } else if (isFocusable(container)) {
          container.focus();
          focusChanged = true;
        }
      }
      if (ajax.hasOwnProperty('element') && !focusChanged) {
        ajax.element.focus();
      }
    },
    invoke: function invoke(ajax, response, status) {
      var $element = $(response.selector);
      $element[response.method].apply($element, _toConsumableArray(response.args));
    },
    restripe: function restripe(ajax, response, status) {
      $(response.selector).find('> tbody > tr:visible, > tr:visible').removeClass('odd even').filter(':even').addClass('odd').end().filter(':odd').addClass('even');
    },
    update_build_id: function update_build_id(ajax, response, status) {
      document.querySelectorAll("input[name=\"form_build_id\"][value=\"".concat(response.old, "\"]")).forEach(function (item) {
        item.value = response.new;
      });
    },
    add_css: function add_css(ajax, response, status) {
      $('head').prepend(response.data);
    },
    message: function message(ajax, response) {
      var messages = new Drupal.Message(document.querySelector(response.messageWrapperQuerySelector));
      if (response.clearPrevious) {
        messages.clear();
      }
      messages.add(response.message, response.messageOptions);
    },
    add_js: function add_js(ajax, response, status) {
      var parentEl = document.querySelector(response.selector || 'body');
      var settings = ajax.settings || drupalSettings;
      var allUniqueBundleIds = response.data.map(function (script) {
        var uniqueBundleId = script.src + ajax.instanceIndex;
        loadjs(script.src, uniqueBundleId, {
          async: false,
          before: function before(path, scriptEl) {
            Object.keys(script).forEach(function (attributeKey) {
              scriptEl.setAttribute(attributeKey, script[attributeKey]);
            });
            parentEl.appendChild(scriptEl);
            return false;
          }
        });
        return uniqueBundleId;
      });
      return new Promise(function (resolve, reject) {
        loadjs.ready(allUniqueBundleIds, {
          success: function success() {
            Drupal.attachBehaviors(parentEl, settings);
            resolve();
          },
          error: function error(depsNotFound) {
            var message = Drupal.t("The following files could not be loaded: @dependencies", {
              '@dependencies': depsNotFound.join(', ')
            });
            reject(message);
          }
        });
      });
    }
  };
  var stopEvent = function stopEvent(xhr, settings) {
    return xhr.getResponseHeader('X-Drupal-Ajax-Token') === '1' && settings.isInProgress && settings.isInProgress();
  };
  $.extend(true, $.event.special, {
    ajaxSuccess: {
      trigger: function trigger(event, xhr, settings) {
        if (stopEvent(xhr, settings)) {
          return false;
        }
      }
    },
    ajaxComplete: {
      trigger: function trigger(event, xhr, settings) {
        if (stopEvent(xhr, settings)) {
          $.active++;
          return false;
        }
      }
    }
  });
})(jQuery, window, Drupal, drupalSettings, loadjs, window.tabbable);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function (Drupal) {
  Drupal.theme.ajaxProgressBar = function ($element) {
    return $element.addClass('ajax-progress ajax-progress-bar');
  };
})(Drupal);;
/**
 * @file
 * Defines the ajax command for updating product urls on variation selection.
 */

(function (Drupal) {

  'use strict';

  /**
   * Command to update the current url on variation selection.
   *
   * @param {Drupal.Ajax} ajax
   *   {@link Drupal.Ajax} object created by {@link Drupal.ajax}.
   * @param {object} response
   *   The response from the Ajax request.
   * @param {string} [response.variation_id]
   *   The variation ID that should be updated in the url.
   */
  Drupal.AjaxCommands.prototype.updateProductUrl = function (ajax, response) {
    var params = new URLSearchParams(window.location.search);
    params.set('v', response.variation_id);
    window.history.replaceState({}, document.title, window.location.pathname + '?' + params.toString());
  }

})(Drupal);
;
/*!
 * jQuery Form Plugin
 * version: 4.3.0
 * Requires jQuery v1.7.2 or later
 * Project repository: https://github.com/jquery-form/form

 * Copyright 2017 Kevin Morris
 * Copyright 2006 M. Alsup

 * Dual licensed under the LGPL-2.1+ or MIT licenses
 * https://github.com/jquery-form/form#license

 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 2.1 of the License, or (at your option) any later version.
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 */
!function(r){"function"==typeof define&&define.amd?define(["jquery"],r):"object"==typeof module&&module.exports?module.exports=function(e,t){return void 0===t&&(t="undefined"!=typeof window?require("jquery"):require("jquery")(e)),r(t),t}:r(jQuery)}(function(q){"use strict";var m=/\r?\n/g,S={};S.fileapi=void 0!==q('<input type="file">').get(0).files,S.formdata=void 0!==window.FormData;var _=!!q.fn.prop;function o(e){var t=e.data;e.isDefaultPrevented()||(e.preventDefault(),q(e.target).closest("form").ajaxSubmit(t))}function i(e){var t=e.target,r=q(t);if(!r.is("[type=submit],[type=image]")){var a=r.closest("[type=submit]");if(0===a.length)return;t=a[0]}var n,o=t.form;"image"===(o.clk=t).type&&(void 0!==e.offsetX?(o.clk_x=e.offsetX,o.clk_y=e.offsetY):"function"==typeof q.fn.offset?(n=r.offset(),o.clk_x=e.pageX-n.left,o.clk_y=e.pageY-n.top):(o.clk_x=e.pageX-t.offsetLeft,o.clk_y=e.pageY-t.offsetTop)),setTimeout(function(){o.clk=o.clk_x=o.clk_y=null},100)}function N(){var e;q.fn.ajaxSubmit.debug&&(e="[jquery.form] "+Array.prototype.join.call(arguments,""),window.console&&window.console.log?window.console.log(e):window.opera&&window.opera.postError&&window.opera.postError(e))}q.fn.attr2=function(){if(!_)return this.attr.apply(this,arguments);var e=this.prop.apply(this,arguments);return e&&e.jquery||"string"==typeof e?e:this.attr.apply(this,arguments)},q.fn.ajaxSubmit=function(M,e,t,r){if(!this.length)return N("ajaxSubmit: skipping submit process - no element selected"),this;var O,a,n,o,X=this;"function"==typeof M?M={success:M}:"string"==typeof M||!1===M&&0<arguments.length?(M={url:M,data:e,dataType:t},"function"==typeof r&&(M.success=r)):void 0===M&&(M={}),O=M.method||M.type||this.attr2("method"),n=(n=(n="string"==typeof(a=M.url||this.attr2("action"))?q.trim(a):"")||window.location.href||"")&&(n.match(/^([^#]+)/)||[])[1],o=/(MSIE|Trident)/.test(navigator.userAgent||"")&&/^https/i.test(window.location.href||"")?"javascript:false":"about:blank",M=q.extend(!0,{url:n,success:q.ajaxSettings.success,type:O||q.ajaxSettings.type,iframeSrc:o},M);var i={};if(this.trigger("form-pre-serialize",[this,M,i]),i.veto)return N("ajaxSubmit: submit vetoed via form-pre-serialize trigger"),this;if(M.beforeSerialize&&!1===M.beforeSerialize(this,M))return N("ajaxSubmit: submit aborted via beforeSerialize callback"),this;var s=M.traditional;void 0===s&&(s=q.ajaxSettings.traditional);var u,c,C=[],l=this.formToArray(M.semantic,C,M.filtering);if(M.data&&(c=q.isFunction(M.data)?M.data(l):M.data,M.extraData=c,u=q.param(c,s)),M.beforeSubmit&&!1===M.beforeSubmit(l,this,M))return N("ajaxSubmit: submit aborted via beforeSubmit callback"),this;if(this.trigger("form-submit-validate",[l,this,M,i]),i.veto)return N("ajaxSubmit: submit vetoed via form-submit-validate trigger"),this;var f=q.param(l,s);u&&(f=f?f+"&"+u:u),"GET"===M.type.toUpperCase()?(M.url+=(0<=M.url.indexOf("?")?"&":"?")+f,M.data=null):M.data=f;var d,m,p,h=[];M.resetForm&&h.push(function(){X.resetForm()}),M.clearForm&&h.push(function(){X.clearForm(M.includeHidden)}),!M.dataType&&M.target?(d=M.success||function(){},h.push(function(e,t,r){var a=arguments,n=M.replaceTarget?"replaceWith":"html";q(M.target)[n](e).each(function(){d.apply(this,a)})})):M.success&&(q.isArray(M.success)?q.merge(h,M.success):h.push(M.success)),M.success=function(e,t,r){for(var a=M.context||this,n=0,o=h.length;n<o;n++)h[n].apply(a,[e,t,r||X,X])},M.error&&(m=M.error,M.error=function(e,t,r){var a=M.context||this;m.apply(a,[e,t,r,X])}),M.complete&&(p=M.complete,M.complete=function(e,t){var r=M.context||this;p.apply(r,[e,t,X])});var v=0<q("input[type=file]:enabled",this).filter(function(){return""!==q(this).val()}).length,g="multipart/form-data",x=X.attr("enctype")===g||X.attr("encoding")===g,y=S.fileapi&&S.formdata;N("fileAPI :"+y);var b,T=(v||x)&&!y;!1!==M.iframe&&(M.iframe||T)?M.closeKeepAlive?q.get(M.closeKeepAlive,function(){b=w(l)}):b=w(l):b=(v||x)&&y?function(e){for(var r=new FormData,t=0;t<e.length;t++)r.append(e[t].name,e[t].value);if(M.extraData){var a=function(e){var t,r,a=q.param(e,M.traditional).split("&"),n=a.length,o=[];for(t=0;t<n;t++)a[t]=a[t].replace(/\+/g," "),r=a[t].split("="),o.push([decodeURIComponent(r[0]),decodeURIComponent(r[1])]);return o}(M.extraData);for(t=0;t<a.length;t++)a[t]&&r.append(a[t][0],a[t][1])}M.data=null;var n=q.extend(!0,{},q.ajaxSettings,M,{contentType:!1,processData:!1,cache:!1,type:O||"POST"});M.uploadProgress&&(n.xhr=function(){var e=q.ajaxSettings.xhr();return e.upload&&e.upload.addEventListener("progress",function(e){var t=0,r=e.loaded||e.position,a=e.total;e.lengthComputable&&(t=Math.ceil(r/a*100)),M.uploadProgress(e,r,a,t)},!1),e});n.data=null;var o=n.beforeSend;return n.beforeSend=function(e,t){M.formData?t.data=M.formData:t.data=r,o&&o.call(this,e,t)},q.ajax(n)}(l):q.ajax(M),X.removeData("jqxhr").data("jqxhr",b);for(var j=0;j<C.length;j++)C[j]=null;return this.trigger("form-submit-notify",[this,M]),this;function w(e){var t,r,l,f,o,d,m,p,a,n,h,v,i=X[0],g=q.Deferred();if(g.abort=function(e){p.abort(e)},e)for(r=0;r<C.length;r++)t=q(C[r]),_?t.prop("disabled",!1):t.removeAttr("disabled");(l=q.extend(!0,{},q.ajaxSettings,M)).context=l.context||l,o="jqFormIO"+(new Date).getTime();var s=i.ownerDocument,u=X.closest("body");if(l.iframeTarget?(n=(d=q(l.iframeTarget,s)).attr2("name"))?o=n:d.attr2("name",o):(d=q('<iframe name="'+o+'" src="'+l.iframeSrc+'" />',s)).css({position:"absolute",top:"-1000px",left:"-1000px"}),m=d[0],p={aborted:0,responseText:null,responseXML:null,status:0,statusText:"n/a",getAllResponseHeaders:function(){},getResponseHeader:function(){},setRequestHeader:function(){},abort:function(e){var t="timeout"===e?"timeout":"aborted";N("aborting upload... "+t),this.aborted=1;try{m.contentWindow.document.execCommand&&m.contentWindow.document.execCommand("Stop")}catch(e){}d.attr("src",l.iframeSrc),p.error=t,l.error&&l.error.call(l.context,p,t,e),f&&q.event.trigger("ajaxError",[p,l,t]),l.complete&&l.complete.call(l.context,p,t)}},(f=l.global)&&0==q.active++&&q.event.trigger("ajaxStart"),f&&q.event.trigger("ajaxSend",[p,l]),l.beforeSend&&!1===l.beforeSend.call(l.context,p,l))return l.global&&q.active--,g.reject(),g;if(p.aborted)return g.reject(),g;(a=i.clk)&&(n=a.name)&&!a.disabled&&(l.extraData=l.extraData||{},l.extraData[n]=a.value,"image"===a.type&&(l.extraData[n+".x"]=i.clk_x,l.extraData[n+".y"]=i.clk_y));var x=1,y=2;function b(t){var r=null;try{t.contentWindow&&(r=t.contentWindow.document)}catch(e){N("cannot get iframe.contentWindow document: "+e)}if(r)return r;try{r=t.contentDocument?t.contentDocument:t.document}catch(e){N("cannot get iframe.contentDocument: "+e),r=t.document}return r}var c=q("meta[name=csrf-token]").attr("content"),T=q("meta[name=csrf-param]").attr("content");function j(){var e=X.attr2("target"),t=X.attr2("action"),r=X.attr("enctype")||X.attr("encoding")||"multipart/form-data";i.setAttribute("target",o),O&&!/post/i.test(O)||i.setAttribute("method","POST"),t!==l.url&&i.setAttribute("action",l.url),l.skipEncodingOverride||O&&!/post/i.test(O)||X.attr({encoding:"multipart/form-data",enctype:"multipart/form-data"}),l.timeout&&(v=setTimeout(function(){h=!0,A(x)},l.timeout));var a=[];try{if(l.extraData)for(var n in l.extraData)l.extraData.hasOwnProperty(n)&&(q.isPlainObject(l.extraData[n])&&l.extraData[n].hasOwnProperty("name")&&l.extraData[n].hasOwnProperty("value")?a.push(q('<input type="hidden" name="'+l.extraData[n].name+'">',s).val(l.extraData[n].value).appendTo(i)[0]):a.push(q('<input type="hidden" name="'+n+'">',s).val(l.extraData[n]).appendTo(i)[0]));l.iframeTarget||d.appendTo(u),m.attachEvent?m.attachEvent("onload",A):m.addEventListener("load",A,!1),setTimeout(function e(){try{var t=b(m).readyState;N("state = "+t),t&&"uninitialized"===t.toLowerCase()&&setTimeout(e,50)}catch(e){N("Server abort: ",e," (",e.name,")"),A(y),v&&clearTimeout(v),v=void 0}},15);try{i.submit()}catch(e){document.createElement("form").submit.apply(i)}}finally{i.setAttribute("action",t),i.setAttribute("enctype",r),e?i.setAttribute("target",e):X.removeAttr("target"),q(a).remove()}}T&&c&&(l.extraData=l.extraData||{},l.extraData[T]=c),l.forceSync?j():setTimeout(j,10);var w,S,k,D=50;function A(e){if(!p.aborted&&!k){if((S=b(m))||(N("cannot access response document"),e=y),e===x&&p)return p.abort("timeout"),void g.reject(p,"timeout");if(e===y&&p)return p.abort("server abort"),void g.reject(p,"error","server abort");if(S&&S.location.href!==l.iframeSrc||h){m.detachEvent?m.detachEvent("onload",A):m.removeEventListener("load",A,!1);var t,r="success";try{if(h)throw"timeout";var a="xml"===l.dataType||S.XMLDocument||q.isXMLDoc(S);if(N("isXml="+a),!a&&window.opera&&(null===S.body||!S.body.innerHTML)&&--D)return N("requeing onLoad callback, DOM not available"),void setTimeout(A,250);var n=S.body?S.body:S.documentElement;p.responseText=n?n.innerHTML:null,p.responseXML=S.XMLDocument?S.XMLDocument:S,a&&(l.dataType="xml"),p.getResponseHeader=function(e){return{"content-type":l.dataType}[e.toLowerCase()]},n&&(p.status=Number(n.getAttribute("status"))||p.status,p.statusText=n.getAttribute("statusText")||p.statusText);var o,i,s,u=(l.dataType||"").toLowerCase(),c=/(json|script|text)/.test(u);c||l.textarea?(o=S.getElementsByTagName("textarea")[0])?(p.responseText=o.value,p.status=Number(o.getAttribute("status"))||p.status,p.statusText=o.getAttribute("statusText")||p.statusText):c&&(i=S.getElementsByTagName("pre")[0],s=S.getElementsByTagName("body")[0],i?p.responseText=i.textContent?i.textContent:i.innerText:s&&(p.responseText=s.textContent?s.textContent:s.innerText)):"xml"===u&&!p.responseXML&&p.responseText&&(p.responseXML=F(p.responseText));try{w=E(p,u,l)}catch(e){r="parsererror",p.error=t=e||r}}catch(e){N("error caught: ",e),r="error",p.error=t=e||r}p.aborted&&(N("upload aborted"),r=null),p.status&&(r=200<=p.status&&p.status<300||304===p.status?"success":"error"),"success"===r?(l.success&&l.success.call(l.context,w,"success",p),g.resolve(p.responseText,"success",p),f&&q.event.trigger("ajaxSuccess",[p,l])):r&&(void 0===t&&(t=p.statusText),l.error&&l.error.call(l.context,p,r,t),g.reject(p,"error",t),f&&q.event.trigger("ajaxError",[p,l,t])),f&&q.event.trigger("ajaxComplete",[p,l]),f&&!--q.active&&q.event.trigger("ajaxStop"),l.complete&&l.complete.call(l.context,p,r),k=!0,l.timeout&&clearTimeout(v),setTimeout(function(){l.iframeTarget?d.attr("src",l.iframeSrc):d.remove(),p.responseXML=null},100)}}}var F=q.parseXML||function(e,t){return window.ActiveXObject?((t=new ActiveXObject("Microsoft.XMLDOM")).async="false",t.loadXML(e)):t=(new DOMParser).parseFromString(e,"text/xml"),t&&t.documentElement&&"parsererror"!==t.documentElement.nodeName?t:null},L=q.parseJSON||function(e){return window.eval("("+e+")")},E=function(e,t,r){var a=e.getResponseHeader("content-type")||"",n=("xml"===t||!t)&&0<=a.indexOf("xml"),o=n?e.responseXML:e.responseText;return n&&"parsererror"===o.documentElement.nodeName&&q.error&&q.error("parsererror"),r&&r.dataFilter&&(o=r.dataFilter(o,t)),"string"==typeof o&&(("json"===t||!t)&&0<=a.indexOf("json")?o=L(o):("script"===t||!t)&&0<=a.indexOf("javascript")&&q.globalEval(o)),o};return g}},q.fn.ajaxForm=function(e,t,r,a){if(("string"==typeof e||!1===e&&0<arguments.length)&&(e={url:e,data:t,dataType:r},"function"==typeof a&&(e.success=a)),(e=e||{}).delegation=e.delegation&&q.isFunction(q.fn.on),e.delegation||0!==this.length)return e.delegation?(q(document).off("submit.form-plugin",this.selector,o).off("click.form-plugin",this.selector,i).on("submit.form-plugin",this.selector,e,o).on("click.form-plugin",this.selector,e,i),this):(e.beforeFormUnbind&&e.beforeFormUnbind(this,e),this.ajaxFormUnbind().on("submit.form-plugin",e,o).on("click.form-plugin",e,i));var n={s:this.selector,c:this.context};return!q.isReady&&n.s?(N("DOM not ready, queuing ajaxForm"),q(function(){q(n.s,n.c).ajaxForm(e)})):N("terminating; zero elements found by selector"+(q.isReady?"":" (DOM not ready)")),this},q.fn.ajaxFormUnbind=function(){return this.off("submit.form-plugin click.form-plugin")},q.fn.formToArray=function(e,t,r){var a=[];if(0===this.length)return a;var n,o,i,s,u,c,l,f,d,m,p=this[0],h=this.attr("id"),v=(v=e||void 0===p.elements?p.getElementsByTagName("*"):p.elements)&&q.makeArray(v);if(h&&(e||/(Edge|Trident)\//.test(navigator.userAgent))&&(n=q(':input[form="'+h+'"]').get()).length&&(v=(v||[]).concat(n)),!v||!v.length)return a;for(q.isFunction(r)&&(v=q.map(v,r)),o=0,c=v.length;o<c;o++)if((m=(u=v[o]).name)&&!u.disabled)if(e&&p.clk&&"image"===u.type)p.clk===u&&(a.push({name:m,value:q(u).val(),type:u.type}),a.push({name:m+".x",value:p.clk_x},{name:m+".y",value:p.clk_y}));else if((s=q.fieldValue(u,!0))&&s.constructor===Array)for(t&&t.push(u),i=0,l=s.length;i<l;i++)a.push({name:m,value:s[i]});else if(S.fileapi&&"file"===u.type){t&&t.push(u);var g=u.files;if(g.length)for(i=0;i<g.length;i++)a.push({name:m,value:g[i],type:u.type});else a.push({name:m,value:"",type:u.type})}else null!=s&&(t&&t.push(u),a.push({name:m,value:s,type:u.type,required:u.required}));return e||!p.clk||(m=(d=(f=q(p.clk))[0]).name)&&!d.disabled&&"image"===d.type&&(a.push({name:m,value:f.val()}),a.push({name:m+".x",value:p.clk_x},{name:m+".y",value:p.clk_y})),a},q.fn.formSerialize=function(e){return q.param(this.formToArray(e))},q.fn.fieldSerialize=function(n){var o=[];return this.each(function(){var e=this.name;if(e){var t=q.fieldValue(this,n);if(t&&t.constructor===Array)for(var r=0,a=t.length;r<a;r++)o.push({name:e,value:t[r]});else null!=t&&o.push({name:this.name,value:t})}}),q.param(o)},q.fn.fieldValue=function(e){for(var t=[],r=0,a=this.length;r<a;r++){var n=this[r],o=q.fieldValue(n,e);null==o||o.constructor===Array&&!o.length||(o.constructor===Array?q.merge(t,o):t.push(o))}return t},q.fieldValue=function(e,t){var r=e.name,a=e.type,n=e.tagName.toLowerCase();if(void 0===t&&(t=!0),t&&(!r||e.disabled||"reset"===a||"button"===a||("checkbox"===a||"radio"===a)&&!e.checked||("submit"===a||"image"===a)&&e.form&&e.form.clk!==e||"select"===n&&-1===e.selectedIndex))return null;if("select"!==n)return q(e).val().replace(m,"\r\n");var o=e.selectedIndex;if(o<0)return null;for(var i=[],s=e.options,u="select-one"===a,c=u?o+1:s.length,l=u?o:0;l<c;l++){var f=s[l];if(f.selected&&!f.disabled){var d=(d=f.value)||(f.attributes&&f.attributes.value&&!f.attributes.value.specified?f.text:f.value);if(u)return d;i.push(d)}}return i},q.fn.clearForm=function(e){return this.each(function(){q("input,select,textarea",this).clearFields(e)})},q.fn.clearFields=q.fn.clearInputs=function(r){var a=/^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;return this.each(function(){var e=this.type,t=this.tagName.toLowerCase();a.test(e)||"textarea"===t?this.value="":"checkbox"===e||"radio"===e?this.checked=!1:"select"===t?this.selectedIndex=-1:"file"===e?/MSIE/.test(navigator.userAgent)?q(this).replaceWith(q(this).clone(!0)):q(this).val(""):r&&(!0===r&&/hidden/.test(e)||"string"==typeof r&&q(this).is(r))&&(this.value="")})},q.fn.resetForm=function(){return this.each(function(){var t=q(this),e=this.tagName.toLowerCase();switch(e){case"input":this.checked=this.defaultChecked;case"textarea":return this.value=this.defaultValue,!0;case"option":case"optgroup":var r=t.parents("select");return r.length&&r[0].multiple?"option"===e?this.selected=this.defaultSelected:t.find("option").resetForm():r.resetForm(),!0;case"select":return t.find("option").each(function(e){if(this.selected=this.defaultSelected,this.defaultSelected&&!t[0].multiple)return t[0].selectedIndex=e,!1}),!0;case"label":var a=q(t.attr("for")),n=t.find("input,select,textarea");return a[0]&&n.unshift(a[0]),n.resetForm(),!0;case"form":return"function"!=typeof this.reset&&("object"!=typeof this.reset||this.reset.nodeType)||this.reset(),!0;default:return t.find("form,input,label,select,textarea").resetForm(),!0}})},q.fn.enable=function(e){return void 0===e&&(e=!0),this.each(function(){this.disabled=!e})},q.fn.selected=function(r){return void 0===r&&(r=!0),this.each(function(){var e,t=this.type;"checkbox"===t||"radio"===t?this.checked=r:"option"===this.tagName.toLowerCase()&&(e=q(this).parent("select"),r&&e[0]&&"select-one"===e[0].type&&e.find("option").selected(!1),this.selected=r)})},q.fn.ajaxSubmit.debug=!1});

;

(function ($) {
    $.fn.touchwipe = function (settings) {
        var config = {
            min_move_x: 20,
            min_move_y: 20,
            wipeLeft: function () {},
            wipeRight: function () {},
            wipeUp: function () {},
            wipeDown: function () {},
            preventDefaultEvents: true
        };
        if (settings) $.extend(config, settings);
        this.each(function () {
            var startX;
            var startY;
            var isMoving = false;

            function cancelTouch() {
                this.removeEventListener('touchmove', onTouchMove);
                startX = null;
                isMoving = false
            }
            function onTouchMove(e) {
                if (config.preventDefaultEvents) {
                    e.preventDefault()
                }
                if (isMoving) {
                    var x = e.touches[0].pageX;
                    var y = e.touches[0].pageY;
                    var dx = startX - x;
                    var dy = startY - y;
                    if (Math.abs(dx) >= config.min_move_x) {
                        cancelTouch();
                        if (dx > 0) {
                            config.wipeLeft()
                        } else {
                            config.wipeRight()
                        }
                    } else if (Math.abs(dy) >= config.min_move_y) {
                        cancelTouch();
                        if (dy > 0) {
                            config.wipeDown()
                        } else {
                            config.wipeUp()
                        }
                    }
                }
            }
            function onTouchStart(e) {
                if (e.touches.length == 1) {
                    startX = e.touches[0].pageX;
                    startY = e.touches[0].pageY;
                    isMoving = true;
                    this.addEventListener('touchmove', onTouchMove, false)
                }
            }
            if ('ontouchstart' in document.documentElement) {
                this.addEventListener('touchstart', onTouchStart, false)
            }
        });
        return this
    }
})(jQuery);;
/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-csstransforms3d-csstransitions-touch-shiv-cssclasses-prefixed-teststyles-testprop-testallprops-prefixes-domprefixes-load
 */
;window.Modernizr=function(a,b,c){function z(a){j.cssText=a}function A(a,b){return z(m.join(a+";")+(b||""))}function B(a,b){return typeof a===b}function C(a,b){return!!~(""+a).indexOf(b)}function D(a,b){for(var d in a){var e=a[d];if(!C(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function E(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:B(f,"function")?f.bind(d||b):f}return!1}function F(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+o.join(d+" ")+d).split(" ");return B(b,"string")||B(b,"undefined")?D(e,b):(e=(a+" "+p.join(d+" ")+d).split(" "),E(e,b,c))}var d="2.6.2",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m=" -webkit- -moz- -o- -ms- ".split(" "),n="Webkit Moz O ms",o=n.split(" "),p=n.toLowerCase().split(" "),q={},r={},s={},t=[],u=t.slice,v,w=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},x={}.hasOwnProperty,y;!B(x,"undefined")&&!B(x.call,"undefined")?y=function(a,b){return x.call(a,b)}:y=function(a,b){return b in a&&B(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=u.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(u.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(u.call(arguments)))};return e}),q.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:w(["@media (",m.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c},q.csstransforms3d=function(){var a=!!F("perspective");return a&&"webkitPerspective"in g.style&&w("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b,c){a=b.offsetLeft===9&&b.offsetHeight===3}),a},q.csstransitions=function(){return F("transition")};for(var G in q)y(q,G)&&(v=G.toLowerCase(),e[v]=q[G](),t.push((e[v]?"":"no-")+v));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)y(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},z(""),i=k=null,function(a,b){function k(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function l(){var a=r.elements;return typeof a=="string"?a.split(" "):a}function m(a){var b=i[a[g]];return b||(b={},h++,a[g]=h,i[h]=b),b}function n(a,c,f){c||(c=b);if(j)return c.createElement(a);f||(f=m(c));var g;return f.cache[a]?g=f.cache[a].cloneNode():e.test(a)?g=(f.cache[a]=f.createElem(a)).cloneNode():g=f.createElem(a),g.canHaveChildren&&!d.test(a)?f.frag.appendChild(g):g}function o(a,c){a||(a=b);if(j)return a.createDocumentFragment();c=c||m(a);var d=c.frag.cloneNode(),e=0,f=l(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function p(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return r.shivMethods?n(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+l().join().replace(/\w+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(r,b.frag)}function q(a){a||(a=b);var c=m(a);return r.shivCSS&&!f&&!c.hasCSS&&(c.hasCSS=!!k(a,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),j||p(a,c),a}var c=a.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,e=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,f,g="_html5shiv",h=0,i={},j;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",f="hidden"in a,j=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){f=!0,j=!0}})();var r={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:c.shivCSS!==!1,supportsUnknownElements:j,shivMethods:c.shivMethods!==!1,type:"default",shivDocument:q,createElement:n,createDocumentFragment:o};a.html5=r,q(b)}(this,b),e._version=d,e._prefixes=m,e._domPrefixes=p,e._cssomPrefixes=o,e.testProp=function(a){return D([a])},e.testAllProps=F,e.testStyles=w,e.prefixed=function(a,b,c){return b?F(a,b,c):F(a,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+t.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};;
/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing["jswing"]=jQuery.easing["swing"];jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(a,b,c,d,e){return jQuery.easing[jQuery.easing.def](a,b,c,d,e)},easeInQuad:function(a,b,c,d,e){return d*(b/=e)*b+c},easeOutQuad:function(a,b,c,d,e){return-d*(b/=e)*(b-2)+c},easeInOutQuad:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b+c;return-d/2*(--b*(b-2)-1)+c},easeInCubic:function(a,b,c,d,e){return d*(b/=e)*b*b+c},easeOutCubic:function(a,b,c,d,e){return d*((b=b/e-1)*b*b+1)+c},easeInOutCubic:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b+c;return d/2*((b-=2)*b*b+2)+c},easeInQuart:function(a,b,c,d,e){return d*(b/=e)*b*b*b+c},easeOutQuart:function(a,b,c,d,e){return-d*((b=b/e-1)*b*b*b-1)+c},easeInOutQuart:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b*b+c;return-d/2*((b-=2)*b*b*b-2)+c},easeInQuint:function(a,b,c,d,e){return d*(b/=e)*b*b*b*b+c},easeOutQuint:function(a,b,c,d,e){return d*((b=b/e-1)*b*b*b*b+1)+c},easeInOutQuint:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b*b*b+c;return d/2*((b-=2)*b*b*b*b+2)+c},easeInSine:function(a,b,c,d,e){return-d*Math.cos(b/e*(Math.PI/2))+d+c},easeOutSine:function(a,b,c,d,e){return d*Math.sin(b/e*(Math.PI/2))+c},easeInOutSine:function(a,b,c,d,e){return-d/2*(Math.cos(Math.PI*b/e)-1)+c},easeInExpo:function(a,b,c,d,e){return b==0?c:d*Math.pow(2,10*(b/e-1))+c},easeOutExpo:function(a,b,c,d,e){return b==e?c+d:d*(-Math.pow(2,-10*b/e)+1)+c},easeInOutExpo:function(a,b,c,d,e){if(b==0)return c;if(b==e)return c+d;if((b/=e/2)<1)return d/2*Math.pow(2,10*(b-1))+c;return d/2*(-Math.pow(2,-10*--b)+2)+c},easeInCirc:function(a,b,c,d,e){return-d*(Math.sqrt(1-(b/=e)*b)-1)+c},easeOutCirc:function(a,b,c,d,e){return d*Math.sqrt(1-(b=b/e-1)*b)+c},easeInOutCirc:function(a,b,c,d,e){if((b/=e/2)<1)return-d/2*(Math.sqrt(1-b*b)-1)+c;return d/2*(Math.sqrt(1-(b-=2)*b)+1)+c},easeInElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e)==1)return c+d;if(!g)g=e*.3;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return-(h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g))+c},easeOutElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e)==1)return c+d;if(!g)g=e*.3;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return h*Math.pow(2,-10*b)*Math.sin((b*e-f)*2*Math.PI/g)+d+c},easeInOutElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e/2)==2)return c+d;if(!g)g=e*.3*1.5;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);if(b<1)return-.5*h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)+c;return h*Math.pow(2,-10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)*.5+d+c},easeInBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;return d*(b/=e)*b*((f+1)*b-f)+c},easeOutBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;return d*((b=b/e-1)*b*((f+1)*b+f)+1)+c},easeInOutBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;if((b/=e/2)<1)return d/2*b*b*(((f*=1.525)+1)*b-f)+c;return d/2*((b-=2)*b*(((f*=1.525)+1)*b+f)+2)+c},easeInBounce:function(a,b,c,d,e){return d-jQuery.easing.easeOutBounce(a,e-b,0,d,e)+c},easeOutBounce:function(a,b,c,d,e){if((b/=e)<1/2.75){return d*7.5625*b*b+c}else if(b<2/2.75){return d*(7.5625*(b-=1.5/2.75)*b+.75)+c}else if(b<2.5/2.75){return d*(7.5625*(b-=2.25/2.75)*b+.9375)+c}else{return d*(7.5625*(b-=2.625/2.75)*b+.984375)+c}},easeInOutBounce:function(a,b,c,d,e){if(b<e/2)return jQuery.easing.easeInBounce(a,b*2,0,d,e)*.5+c;return jQuery.easing.easeOutBounce(a,b*2-e,0,d,e)*.5+d*.5+c}})
/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */;
/*! jQuery Migrate v1.2.1 | (c) 2005, 2013 jQuery Foundation, Inc. and other contributors | jquery.org/license */
jQuery.migrateMute===void 0&&(jQuery.migrateMute=!0),function(e,t,n){function r(n){var r=t.console;i[n]||(i[n]=!0,e.migrateWarnings.push(n),r&&r.warn&&!e.migrateMute&&(r.warn("JQMIGRATE: "+n),e.migrateTrace&&r.trace&&r.trace()))}function a(t,a,i,o){if(Object.defineProperty)try{return Object.defineProperty(t,a,{configurable:!0,enumerable:!0,get:function(){return r(o),i},set:function(e){r(o),i=e}}),n}catch(s){}e._definePropertyBroken=!0,t[a]=i}var i={};e.migrateWarnings=[],!e.migrateMute&&t.console&&t.console.log&&t.console.log("JQMIGRATE: Logging is active"),e.migrateTrace===n&&(e.migrateTrace=!0),e.migrateReset=function(){i={},e.migrateWarnings.length=0},"BackCompat"===document.compatMode&&r("jQuery is not compatible with Quirks Mode");var o=e("<input/>",{size:1}).attr("size")&&e.attrFn,s=e.attr,u=e.attrHooks.value&&e.attrHooks.value.get||function(){return null},c=e.attrHooks.value&&e.attrHooks.value.set||function(){return n},l=/^(?:input|button)$/i,d=/^[238]$/,p=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,f=/^(?:checked|selected)$/i;a(e,"attrFn",o||{},"jQuery.attrFn is deprecated"),e.attr=function(t,a,i,u){var c=a.toLowerCase(),g=t&&t.nodeType;return u&&(4>s.length&&r("jQuery.fn.attr( props, pass ) is deprecated"),t&&!d.test(g)&&(o?a in o:e.isFunction(e.fn[a])))?e(t)[a](i):("type"===a&&i!==n&&l.test(t.nodeName)&&t.parentNode&&r("Can't change the 'type' of an input or button in IE 6/7/8"),!e.attrHooks[c]&&p.test(c)&&(e.attrHooks[c]={get:function(t,r){var a,i=e.prop(t,r);return i===!0||"boolean"!=typeof i&&(a=t.getAttributeNode(r))&&a.nodeValue!==!1?r.toLowerCase():n},set:function(t,n,r){var a;return n===!1?e.removeAttr(t,r):(a=e.propFix[r]||r,a in t&&(t[a]=!0),t.setAttribute(r,r.toLowerCase())),r}},f.test(c)&&r("jQuery.fn.attr('"+c+"') may use property instead of attribute")),s.call(e,t,a,i))},e.attrHooks.value={get:function(e,t){var n=(e.nodeName||"").toLowerCase();return"button"===n?u.apply(this,arguments):("input"!==n&&"option"!==n&&r("jQuery.fn.attr('value') no longer gets properties"),t in e?e.value:null)},set:function(e,t){var a=(e.nodeName||"").toLowerCase();return"button"===a?c.apply(this,arguments):("input"!==a&&"option"!==a&&r("jQuery.fn.attr('value', val) no longer sets properties"),e.value=t,n)}};var g,h,v=e.fn.init,m=e.parseJSON,y=/^([^<]*)(<[\w\W]+>)([^>]*)$/;e.fn.init=function(t,n,a){var i;return t&&"string"==typeof t&&!e.isPlainObject(n)&&(i=y.exec(e.trim(t)))&&i[0]&&("<"!==t.charAt(0)&&r("$(html) HTML strings must start with '<' character"),i[3]&&r("$(html) HTML text after last tag is ignored"),"#"===i[0].charAt(0)&&(r("HTML string cannot start with a '#' character"),e.error("JQMIGRATE: Invalid selector string (XSS)")),n&&n.context&&(n=n.context),e.parseHTML)?v.call(this,e.parseHTML(i[2],n,!0),n,a):v.apply(this,arguments)},e.fn.init.prototype=e.fn,e.parseJSON=function(e){return e||null===e?m.apply(this,arguments):(r("jQuery.parseJSON requires a valid JSON string"),null)},e.uaMatch=function(e){e=e.toLowerCase();var t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||0>e.indexOf("compatible")&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}},e.browser||(g=e.uaMatch(navigator.userAgent),h={},g.browser&&(h[g.browser]=!0,h.version=g.version),h.chrome?h.webkit=!0:h.webkit&&(h.safari=!0),e.browser=h),a(e,"browser",e.browser,"jQuery.browser is deprecated"),e.sub=function(){function t(e,n){return new t.fn.init(e,n)}e.extend(!0,t,this),t.superclass=this,t.fn=t.prototype=this(),t.fn.constructor=t,t.sub=this.sub,t.fn.init=function(r,a){return a&&a instanceof e&&!(a instanceof t)&&(a=t(a)),e.fn.init.call(this,r,a,n)},t.fn.init.prototype=t.fn;var n=t(document);return r("jQuery.sub() is deprecated"),t},e.ajaxSetup({converters:{"text json":e.parseJSON}});var b=e.fn.data;e.fn.data=function(t){var a,i,o=this[0];return!o||"events"!==t||1!==arguments.length||(a=e.data(o,t),i=e._data(o,t),a!==n&&a!==i||i===n)?b.apply(this,arguments):(r("Use of jQuery.fn.data('events') is deprecated"),i)};var j=/\/(java|ecma)script/i,w=e.fn.andSelf||e.fn.addBack;e.fn.andSelf=function(){return r("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"),w.apply(this,arguments)},e.clean||(e.clean=function(t,a,i,o){a=a||document,a=!a.nodeType&&a[0]||a,a=a.ownerDocument||a,r("jQuery.clean() is deprecated");var s,u,c,l,d=[];if(e.merge(d,e.buildFragment(t,a).childNodes),i)for(c=function(e){return!e.type||j.test(e.type)?o?o.push(e.parentNode?e.parentNode.removeChild(e):e):i.appendChild(e):n},s=0;null!=(u=d[s]);s++)e.nodeName(u,"script")&&c(u)||(i.appendChild(u),u.getElementsByTagName!==n&&(l=e.grep(e.merge([],u.getElementsByTagName("script")),c),d.splice.apply(d,[s+1,0].concat(l)),s+=l.length));return d});var Q=e.event.add,x=e.event.remove,k=e.event.trigger,N=e.fn.toggle,T=e.fn.live,M=e.fn.die,S="ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",C=RegExp("\\b(?:"+S+")\\b"),H=/(?:^|\s)hover(\.\S+|)\b/,A=function(t){return"string"!=typeof t||e.event.special.hover?t:(H.test(t)&&r("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"),t&&t.replace(H,"mouseenter$1 mouseleave$1"))};e.event.props&&"attrChange"!==e.event.props[0]&&e.event.props.unshift("attrChange","attrName","relatedNode","srcElement"),e.event.dispatch&&a(e.event,"handle",e.event.dispatch,"jQuery.event.handle is undocumented and deprecated"),e.event.add=function(e,t,n,a,i){e!==document&&C.test(t)&&r("AJAX events should be attached to document: "+t),Q.call(this,e,A(t||""),n,a,i)},e.event.remove=function(e,t,n,r,a){x.call(this,e,A(t)||"",n,r,a)},e.fn.error=function(){var e=Array.prototype.slice.call(arguments,0);return r("jQuery.fn.error() is deprecated"),e.splice(0,0,"error"),arguments.length?this.bind.apply(this,e):(this.triggerHandler.apply(this,e),this)},e.fn.toggle=function(t,n){if(!e.isFunction(t)||!e.isFunction(n))return N.apply(this,arguments);r("jQuery.fn.toggle(handler, handler...) is deprecated");var a=arguments,i=t.guid||e.guid++,o=0,s=function(n){var r=(e._data(this,"lastToggle"+t.guid)||0)%o;return e._data(this,"lastToggle"+t.guid,r+1),n.preventDefault(),a[r].apply(this,arguments)||!1};for(s.guid=i;a.length>o;)a[o++].guid=i;return this.click(s)},e.fn.live=function(t,n,a){return r("jQuery.fn.live() is deprecated"),T?T.apply(this,arguments):(e(this.context).on(t,this.selector,n,a),this)},e.fn.die=function(t,n){return r("jQuery.fn.die() is deprecated"),M?M.apply(this,arguments):(e(this.context).off(t,this.selector||"**",n),this)},e.event.trigger=function(e,t,n,a){return n||C.test(e)||r("Global events are undocumented and deprecated"),k.call(this,e,t,n||document,a)},e.each(S.split("|"),function(t,n){e.event.special[n]={setup:function(){var t=this;return t!==document&&(e.event.add(document,n+"."+e.guid,function(){e.event.trigger(n,null,t,!0)}),e._data(this,n,e.guid++)),!1},teardown:function(){return this!==document&&e.event.remove(document,n+"."+e._data(this,n)),!1}}})}(jQuery,window);;

(function ($) {
    var transitionEffects = [
            "slit-horizontal-left-top",
            "slit-horizontal-top-right",
            "slit-horizontal-bottom-up",
            "slit-vertical-down",
            "slit-vertical-up",
            "strip-up-right",
            "strip-up-left",
            "strip-down-right",
            "strip-down-left",
            "strip-left-up",
            "strip-left-down",
            "strip-right-up",
            "strip-right-down",
            "strip-right-left-up",
            "strip-right-left-down",
            "strip-up-down-right",
            "strip-up-down-left",
            "left-curtain",
            "right-curtain",
            "top-curtain",
            "bottom-curtain",
            "slide-in-right",
            "slide-in-left",
            "slide-in-up",
            "slide-in-down",
            "fade"
        ],
        effectsIn = [
            "bounceIn",
            "bounceInDown",
            "bounceInUp",
            "bounceInLeft",
            "bounceInRight",
            "fadeIn",
            "fadeInUp",
            "fadeInDown",
            "fadeInLeft",
            "fadeInRight",
            "fadeInUpBig",
            "fadeInDownBig",
            "fadeInLeftBig",
            "fadeInRightBig",
            "flipInX",
            "flipInY",
            "foolishIn",
            "lightSpeedIn",
            "puffIn",
            "rollIn",
            "rotateIn",
            "rotateInDownLeft",
            "rotateInDownRight",
            "rotateInUpLeft",
            "rotateInUpRight",
            "twisterInDown",
            "twisterInUp",
            "swap",
            "swashIn",
            "tinRightIn",
            "tinLeftIn",
            "tinUpIn",
            "tinDownIn",
            "vanishIn"
        ],
        effectsOut = [
            "bombRightOut",
            "bombLeftOut",
            "bounceOut",
            "bounceOutDown",
            "bounceOutUp",
            "bounceOutLeft",
            "bounceOutRight",
            "fadeOut",
            "fadeOutUp",
            "fadeOutDown",
            "fadeOutLeft",
            "fadeOutRight",
            "fadeOutUpBig",
            "fadeOutDownBig",
            "fadeOutLeftBig",
            "fadeOutRightBig",
            "flipOutX",
            "flipOutY",
            "foolishOut",
            "hinge",
            "holeOut",
            "lightSpeedOut",
            "puffOut",
            "rollOut",
            "rotateOut",
            "rotateOutDownLeft",
            "rotateOutDownRight",
            "rotateOutUpLeft",
            "rotateOutUpRight",
            "rotateDown",
            "rotateUp",
            "rotateLeft",
            "rotateRight",
            "swashOut",
            "tinRightOut",
            "tinLeftOut",
            "tinUpOut",
            "tinDownOut",
            "vanishOut"
        ];
    var MDSlider = function ($element, options) {
        var default_options = {
            autoPlay: true,
            loop: true,
            width: 960,
            height: 420,
            responsive: true,
            fullWidth: true,
            pauseOnHover: true,
            enableLoadingBar: true,
            loadingBarPosition: 1,
            enableNextPrevButton: true,
            hoverNextPrevButton: true,
            enableKeyNavigation: true,
            enableBullet: false,
            bulletPosition: 2,
            hoverBullet: 0,
            enableThumbnail: true,
            thumbnailPosition: 3,
            thumbnailWidth: 80,
            thumbnailHeight: 50,
            enableBorderStyle: false,
            borderStyle: 1, // from 1-9
            enableDropShadow: false,
            dropShadowStyle: 1, // from 1 - 5
            enableDrag: true, // Allow mouse drag to change slide
            defaultTransitions: "fade", // Default transition effect when slide transition effect not choose
            defaultTransitionSpeed: 1000, // Default time to play transition slide effect. Calculate by milliseconds
            defaultSlideTime: 6000, // Default time for slides (millisecond)
            stripCols: 20,
            stripRows: 10,
            touchSensitive: 50,
            onInit: function () {
            },	// this callback is invoked when init slide show
            onEndTransition: function () {
            },	// this callback is invoked when the transition effect ends
            onStartTransition: function () {
            },	// this callback is invoked when the transition effect starts
            lightBoxVideoWidth: 640,
            lightBoxVideoHeight: 350,
            lightBoxOverlay: 0.8,
            onVideoClick: function () {
            }
        }

        this.slider = $element;
        this.options = $.extend(default_options, options);
        this.slideTime = this.options.defaultSlideTime;
        this.slides = [];
        this.playTime = 0;
        this.timeUnit = 40;
        this.itemsTimer = [];
        this.active = -1;
        this.prev = -1;
        this.numberSlides = 0;
        this.hasTouch = ("ontouchstart" in window || "createTouch" in document);
        this.width = 0;
        this.height = 0;
        this.lock = false;
        this.pause = false;
        this.supportCss3 = (window.Modernizr.csstransitions && window.Modernizr.csstransforms3d);
        this.tooltipDistance = 50;

        this.init();
    }
    MDSlider.prototype = {
        constructor: MDSlider,
        init: function () {
            var self = this,
                inActiveTime = false;

            // Add class loading-image to start initialize for slide show
            this.slider.addClass("loading-image");

            // Create wrap element for slide show
            this.slider.wrap('<div class="md-slider-wrap"><div class="md-slide-wrap"></div></div>');
            this.wrap = this.slider.parent().parent();
            this.wrap.addClass(this.slider.attr("id") + "-wrap");

            // Init slide show classes configure
            if (this.options.responsive)
                this.wrap.addClass("md-slider-responsive");
            if (this.options.fullWidth)
                this.wrap.addClass("md-slider-full-width");

            if (this.options.responsive && !this.options.fullWidth)
                this.wrap.css("max-width", this.options.width + "px");

            if (this.options.enableBullet && this.options.bulletPosition)
                this.wrap.addClass("md-slider-bullet-" + this.options.bulletPosition);
            if (!this.options.enableBullet && this.options.enableThumbnail && this.options.thumbnailPosition);
            this.wrap.addClass("md-slider-thumb-" + this.options.thumbnailPosition);

            // Initialize width and height of slide
            this.width = (this.options.responsive) ? this.slider.width() : this.options.width;
            this.height = this.options.height;

            // Initialize slides
            this.numberSlides = $(".md-slide-item", this.slider).length;
            $(".md-slide-item", this.slider).each(function (index) {
                self.slides[index] = $(this);

                // Initialize for items in slide
                $(".md-object", $(this)).each(function () {
                    var top = $(this).data("y") ? $(this).data("y") : 0,
                        left = $(this).data("x") ? $(this).data("x") : 0,
                        width = $(this).data("width") ? $(this).data("width") : 0,
                        height = $(this).data("height") ? $(this).data("height") : 0;
                    width = 100 * width/self.options.width;
                    height = 100 * height / self.options.height;

                    top = 100 * top/self.options.height;
                    left = 100 * left / self.options.width;

                    if (width > 0)
                        $(this).width(width + "%");
                    if (height > 0)
                        $(this).height(height + "%");

                    $(this).css({top: top + "%", left: left + "%"});
                    $(this).hide();
                });
                if (index > 0)
                    $(this).hide();
            });

            // Load slide show elements
            this.initControl();
            this.initDrag();
            this.initVideo();
            this.initHotSpot();

            // Load images to play slide
            this.loadImages();
            this.removeLoader();
            //

            // Invoke custom init callback
            this.options.onInit.call(self.slider);

            // process when un-active tab
            $(window).blur(function () {
                inActiveTime = (new Date()).getTime();
            });
            $(window).focus(function () {
                if (inActiveTime) {
                    var duration = (new Date()).getTime() - inActiveTime;

                    if (duration > self.slideTime - self.playTime)
                        self.playTime = self.slideTime - 200;
                    else
                        self.playTime += duration;
                    inActiveTime = false;
                }
            });

            $(window).resize(function () {
                self.resize();
            }).trigger("resize");
        },
        initControl: function () {
            var self = this;

            // Initialize loading bar
            if (this.options.enableLoadingBar) {
                var loadingContainer = $('<div class="loading-bar-hoz loading-bar-' + this.options.loadingBarPosition + '"><div class="br-timer-glow" style="left: -100px;"></div><div class="br-timer-bar" style="width:0px"></div></div>');
                this.wrap.append(loadingContainer);
            }

            // Initialize pause on hover
            if (this.options.pauseOnHover) {
                $(".md-slide-wrap", this.wrap).mouseenter(function () {
                    self.pauseSlide();
                });
                $(".md-slide-wrap", this.wrap).mouseleave(function () {
                    self.unPauseSlide();
                });
            }

            // Initialize border
            if (this.options.enableBorderStyle && this.options.borderStyle) {
                var borderDivs = '<div class="border-top border-style-' + this.options.borderStyle + '"></div><div class="border-bottom border-style-' + this.options.borderStyle + '"></div>';

                if (!this.options.fullWidth) {
                    borderDivs += '<div class="border-left border-style-' + this.options.borderStyle + '"><div class="edge-top"></div><div class="edge-bottom"></div></div>';
                    borderDivs += '<div class="border-right border-style-' + this.options.borderStyle + '"><div class="edge-top"></div><div class="edge-bottom"></div></div>';
                }
                this.wrap.append(borderDivs);
            }

            // Initialize for shadow
            if (this.options.enableDropShadow && this.options.dropShadowStyle) {
                var shadowDiv = '<div class="md-shadow md-shadow-style-' + this.options.dropShadowStyle + '"></div>';
                this.wrap.append(shadowDiv);
            }

            // Initialize bullets
            if (this.options.enableBullet && this.options.bulletPosition) {
                var $bullets = $('<div class="md-bullets"></div>');
                $(".md-slide-wrap", this.wrap).append($bullets);

                for (var i = 0; i < this.numberSlides; i++) {
                    $bullets.append('<div class="md-bullet"  rel="' + i + '"><a></a></div>');
                }

                if (this.options.hoverBullet) {
                    $bullets.css("opacity", 0);
                    $(".md-slide-wrap", this.wrap).hover(
                        function () {
                            $bullets.stop().animate({opacity: 1.0}, "fast");
                        },
                        function () {
                            $bullets.stop().animate({opacity: 0}, "fast");
                        }
                    );
                }

                // Show thumbnail is set => Hover bullet would be show thumbnail
                if (this.options.enableThumbnail) {
                    var thumbW = parseInt(this.slider.data("thumb-width")),
                        thumbH = parseInt(this.slider.data("thumb-height"));

                    for (var i = 0; i < this.numberSlides; i++) {
                        var thumbSrc = this.slides[i].data("thumb"),
                            thumbType = this.slides[i].data("thumb-type"),
                            thumbAlt = this.slides[i].data("thumb-alt");
                        if (thumbSrc) {
                            var thumb;
                            if (thumbType == "image")
                                thumb = $('<img />').attr("src", thumbSrc).attr("alt", this.slides[i].data("thumb-alt")).css({
                                    top: -(9 + thumbH) + "px",
                                    left: -(thumbW / 2 - 2) + "px",
                                    opacity: 0
                                })
                            else
                                thumb = $("<span></span>").attr("style", thumbSrc).css({
                                    top: -(9 + thumbH) + "px",
                                    left: -(thumbW / 2 - 2) + "px",
                                    opacity: 0
                                });
                            $("div.md-bullet:eq(" + i + ")", $bullets).append(thumb).append('<div class="md-thumb-arrow" style="opacity: 0"></div>');
                        }
                    }
                    $("div.md-bullet", $bullets).hover(
                        function () {
                            $(this).addClass("md-hover");
                            $("img, span", this).show().animate({'opacity': 1}, 200);
                            $('.md-thumb-arrow', this).show().animate({'opacity': 1}, 200);
                        },
                        function () {
                            $(this).removeClass('md_hover');
                            $('img, span', this).animate({'opacity': 0}, 200, function () {
                                $(this).hide();
                            });
                            $('.md-thumb-arrow', this).animate({'opacity': 0}, 200, function () {
                                $(this).hide();
                            });
                        }
                    );
                }
                $("div.md-bullet", this.wrap).click(function () {
                    if ($(this).hasClass("md-current"))
                        return false;

                    self.slide($(this).attr("rel"));
                });
            }
            else if (this.options.enableThumbnail && this.options.thumbnailPosition) {
                var $thumbnailContainer = $('<div class="md-thumb"><div class="md-thumb-container"><div class="md-thumb-items"></div></div></div>'),
                    $thumbnails = $(".md-thumb-items", $thumbnailContainer);

                for (var i = 0; i < this.numberSlides; i++) {
                    var thumbSrc = this.slides[i].data("thumb");
                    if (thumbSrc) {
                        var link = $('<a class="md-thumb-item" />').attr("rel", i).append($('<img />').attr("src", thumbSrc));
                        $thumbnails.append(link);
                    }
                }
                this.wrap.append($thumbnailContainer);

                $("a", $thumbnails).click(function () {
                    if ($(this).hasClass("md-current"))
                        return false;

                    self.slide($(this).attr("rel"));
                });
            }

            // initialize next previous button
            if (this.options.enableNextPrevButton) {
                $(".md-slide-wrap", self.wrap).append('<div class="md-arrow"><div class="md-arrow-left"><span></span></div><div class="md-arrow-right"><span></span></div></div>');
                $(".md-arrow-right", self.wrap).bind("click", function () {
                    self.nextSlide();
                });
                $(".md-arrow-left", self.wrap).bind("click", function () {
                    self.prevSlide();
                });

                if (this.options.hoverNextPrevButton) {
                    $(".md-arrow", self.wrap).css("opacity", 0);
                    $(".md-slide-wrap", self.wrap).hover(
                        function () {
                            $(".md-arrow", self.wrap).stop().animate({opacity: 1}, "fast");
                        },
                        function () {
                            $(".md-arrow", self.wrap).stop().animate({opacity: 0}, "fast");
                        }
                    );
                }
            }

            // Next, Prev slides with key navigation
            if (this.options.enableKeyNavigation) {
                $(window).keydown(function (event) {
                    var key = event.keyCode || event.which;

                    if (key == 37 || key == 38)
                        self.nextSlide();
                    else if (key == 39 || key == 40)
                        self.prevSlide();
                });
            }
        },
        initDrag: function () {
            var self = this,
                touchStart = false,
                isScrolling = false,
                mouseLeft = 0;

            if (this.hasTouch) {
                this.slider.bind("touchstart", function (event) {
                    if (touchStart) return false;
                    event = event.originalEvent.touches[0] || event.originalEvent.changedTouches[0];
                    touchStart = true;
                    isScrolling = undefined;
                    self.slider.mouseY = event.pageY;
                    self.slider.mouseX = event.pageX;
                });
                this.slider.bind("touchmove", function (event) {
                    event = event.originalEvent.touches[0] || event.originalEvent.changedTouches[0];
                    if (touchStart) {
                        var pageX = (event.pageX || event.clientX),
                            pageY = (event.pageY || event.clientY);

                        if (typeof isScrolling == 'undefined')
                            isScrolling = !!( isScrolling || Math.abs(pageY - self.slider.mouseY) > Math.abs(pageX - self.slider.mouseX));

                        if (isScrolling)
                            touchStart = false;
                        else
                            mouseLeft = pageX - self.slider.mouseX;
                    }
                    return;
                });
                this.slider.bind("touchend", function (event) {
                    if (touchStart) {
                        touchStart = false;

                        if (mouseLeft > self.options.touchSensitive) {
                            self.nextSlide();
                            mouseLeft = 0;
                        }
                        else if (mouseLeft < -self.options.touchSensitive) {
                            self.nextSlide();
                            mouseLeft = 0;
                            return false;
                        }
                    }
                });
            }
            else {
                $(".md-slide-wrap", this.wrap).hover(
                    function () {
                        if ($(".md-arrow", self.wrap))
                            $(".md-arrow", self.wrap).stop(true, true).animate({opacity: 1}, 200);
                    },
                    function () {
                        if ($(".md-arrow", self.wrap))
                            $(".md-arrow", self.wrap).stop(true, true).animate({opacity: 0}, 200);
                    }
                ).trigger("hover");
            }

            if (this.options.enableDrag) {
                this.slider.mousedown(function (event) {
                    if (!touchStart) {
                        touchStart = true;
                        isScrolling = undefined;
                        self.slider.mouseY = event.pageY;
                        self.slider.mouseX = event.pageX;
                    }
                    ;
                    return false;
                });

                this.slider.mousemove(function (event) {
                    if (touchStart) {
                        var pageX = (event.pageX || event.clientX);
                        var pageY = (event.pageY || event.clientY);

                        if (typeof isScrolling == 'undefined')
                            isScrolling = !!( isScrolling || Math.abs(pageY - self.slider.mouseY) > Math.abs(pageX - self.slider.mouseX))

                        if (isScrolling)
                            touchStart = false;
                        else
                            mouseLeft = pageX - self.slider.mouseX;
                    }
                });

                this.slider.mouseup(function (event) {
                    if (touchStart) {
                        touchStart = false;

                        if (mouseLeft > self.options.touchSensitive)
                            self.prevSlide();
                        else if (mouseLeft < -self.options.touchSensitive)
                            self.nextSlide();

                        mouseLeft = 0;
                        return false;
                    }
                });
                this.slider.mouseleave(function (event) {
                    self.slider.mouseup();
                });
            }
            ;
        },
        initVideo: function () {
            var self = this;

            $(".md-video", this.slider).each(function () {
                var $video = $(this),
                    display = $(this).parent().data("display"),
                    videoSrc = $video.attr("href")+'?autoplay=1';

                switch (display) {
                    case "lightbox":
                        var videoBoxOptions = {
                            videoWidth: self.options.lightBoxVideoWidth,
                            videoHeight: self.options.lightBoxVideoHeight,
                            overlay: self.options.lightBoxOverlay,
                            onClick: self.options.onVideoClick
                        }
                        $(this).mdVideoBox(self, videoBoxOptions);
                        break;

                    case "full":
                        var $videoContainer = $('<div class="md-video-control md-loading" style="display: none"></div>');

                        // Add video container
                        self.wrap.append($videoContainer);
                        $videoContainer.hover(
                            function () {
                                self.pauseSlide();
                            },
                            function () {
                            }
                        );

                        // Process when click to video
                        $video.click(function () {
                            var $closeBtn = $('<a href="#" class="md-close-video" title="close"></a>'),
                                $videoFrame = $('<iframe frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>');

                            // Process for close video button click
                            $closeBtn.click(function () {
                                $videoContainer.html("").hide();
                                self.unPauseSlide();
                                return false;
                            });

                            // Load video content
                            $videoFrame.attr("src", videoSrc).css({
                                width: "100%",
                                height: "100%"
                            });
                            $videoContainer.append($videoFrame).append($closeBtn).show();

                            return false;
                        });
                        break;

                    default :
                        $video.click(function () {
                            var $videoContainer = $video.parent(),
                                $videoFrame = $('<iframe frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>');

                            $videoContainer.addClass("md-loading");
                            $video.hide();
                            $videoFrame.attr("src", videoSrc);
                            $videoFrame.css({
                                width: $videoContainer.width(),
                                height: $videoContainer.height()
                            });

                            $videoContainer.append($videoFrame);
                            return false;
                        });
                        break;
                }
            });
        },
        initHotSpot: function () {
            var self = this;

            $(".md-object .md-hotspot", this.slider).hover(
                function () {

                    var $tooltip = $(".md-hotspot-tooltip", $(this).parent()).clone(),
                        position;

                    self.wrap.append($tooltip);
                    position = self.getTooltipPosition($(this), $tooltip);
                    if (position != false) {
                        self.wrap.append($tooltip);
                        $tooltip.addClass("active");
                        $tooltip.addClass(position.class);
                        $tooltip.offset({
                            left: position.left,
                            top: position.top
                        }).animate({opacity: 1}, "fast");
                    }
                },
                function () {
                    $(".md-hotspot-tooltip.active", self.wrap).remove();
                }
            ).click(function () {
                    return false;
                }
            );

            $(".md-object .transBg-diamond", this.slider).hover(
                function () {
                    $(this).addClass("animation");
                    $(".darkBg-diamond", $(this)).addClass("animation");
                    $(".hoverBg-diamond", $(this)).addClass("animation");
                    $(".content-diamond", $(this)).addClass("animation");
                    $(".transBg-diamond .diamon-title", $(this)).addClass("animation");
                    $(".border", $(this).parent()).addClass("animation");
                },
                function () {
                    $(this).removeClass("animation");
                    $(".darkBg-diamond", $(this)).removeClass("animation");
                    $(".hoverBg-diamond", $(this)).removeClass("animation");
                    $(".transBg-diamond .diamon-title", $(this)).removeClass("animation");
                    $(".content-diamond", $(this)).removeClass("animation");
                    $(".border", $(this).parent()).removeClass("animation");
                }
            );
        },
        getTooltipPosition: function ($hotSpot, $tooltip) {
            var $itemObj = $hotSpot.parent(),
                direction = $itemObj.data("tooltip-direction") ? $itemObj.data("tooltip-direction") : "left",
                responsive = $itemObj.data("tooltip-responsive") ? $itemObj.data("tooltip-responsive") : 0,
                position = $hotSpot.offset(),
                pointWidth = $hotSpot.width(),
                pointHeight = $hotSpot.height(),
                width = $tooltip.width(),
                height = $tooltip.height(),
                top = 0,
                left = 0,
                directionClass = "md-hotspot-tooltip-" + direction;

            if (width > $(window).width())
                return false;

            if (direction == "auto")
                return this.autoTooltipPosition($hotSpot, $tooltip);
            else {
                switch (direction) {
                    case "left":
                        top = position.top - (height - pointHeight) / 2;
                        left = position.left - width - 10;
                        $tooltip.offset({
                            left: left - this.tooltipDistance,
                            top: top
                        });
                        break;

                    case "top":
                        top = position.top - height - 10;
                        left = position.left - (width - pointWidth) / 2;
                        $tooltip.offset({
                            left: left,
                            top: top - this.tooltipDistance
                        });
                        break;

                    case "right":
                        top = position.top - (height - pointHeight) / 2;
                        left = position.left + pointWidth + 10;
                        $tooltip.offset({
                            left: left + this.tooltipDistance,
                            top: top
                        });
                        break;

                    case "bottom":
                        top = position.top + pointHeight + 10;
                        left = position.left - (width - pointWidth) / 2;
                        $tooltip.offset({
                            left: left,
                            top: top + this.tooltipDistance
                        });
                        break;
                }

                if ((left < 0 || top < 0 || left + width > $(window).width() || top + height > $(window).height()) && responsive)
                    return this.autoTooltipPosition($hotSpot, $tooltip);

                return {left: left, top: top, class: directionClass};
            }
        },
        autoTooltipPosition: function ($hotSpot, $tooltip) {
            var $itemObj = $hotSpot.parent(),
                direction = $itemObj.data("tooltip-direction") ? $itemObj.data("tooltip-direction") : "left",
                responsive = $itemObj.data("tooltip-responsive") ? $itemObj.data("tooltip-responsive") : 0,
                position = $hotSpot.offset(),
                pointWidth = $hotSpot.width(),
                pointHeight = $hotSpot.height(),
                width = $tooltip.width(),
                height = $tooltip.height(),
                top = position.top - (height - pointHeight) / 2,
                left = position.left - width - 10,
                directionClass = "md-hotspot-tooltip-left";

            if (top < 0) {
                top = position.top + pointHeight + 10;
                if (top + height > $(window).height())
                    return false;

                left = position.left - (width - pointWidth) / 2;
                if (left < 0) {
                    left = 0;
                    $(".md-hotspot-tooltip-arrow", $tooltip).css({
                        top: "-10px",
                        bottom: "auto",
                        left: position.left + pointWidth / 2,
                        right: "auto"
                    });
                }
                else if (left + width > $(window).width()) {
                    left += ($(window).width() - (left + width));
                    $(".md-hotspot-tooltip-arrow", $tooltip).css({
                        top: "-10px",
                        bottom: "auto",
                        left: position.left + pointWidth / 2 - left,
                        right: "auto"
                    });
                }
                directionClass = "md-hotspot-tooltip-bottom";
                $tooltip.offset({top: top + this.tooltipDistance, left: left});
            }
            else {
                if (left < 0) {
                    directionClass = "md-hotspot-tooltip-top";
                    left = position.left - (width - pointWidth) / 2;
                    top = position.top - height - 10;

                    if (top < 0) {
                        directionClass = "md-hotspot-tooltip-right";
                        top = position.top - (height - pointHeight) / 2;
                        left = position.left + pointWidth + 10;

                        if (left + width > $(window).width()) {
                            directionClass = "md-hotspot-tooltip-bottom";
                            top = position.top + pointHeight + 10;
                            left = position.left + (width - pointWidth) / 2;

                            if (top + height > $(window).height())
                                return false;

                            if (left < 0) {
                                left = 0;
                                $(".md-hotspot-tooltip-arrow", $tooltip).css({
                                    top: "-10px",
                                    bottom: "auto",
                                    left: position.left + pointWidth / 2
                                });
                            }
                            else if (left + width > $(window).width()) {
                                left += ($(window).width() - (left + width));
                                $(".md-hotspot-tooltip-arrow", $tooltip).css({
                                    top: "-10px",
                                    bottom: "auto",
                                    left: position.left + pointWidth / 2 - left,
                                    right: "auto"
                                });
                            }
                            $tooltip.offset({
                                top: top + this.tooltipDistance,
                                left: left
                            });
                        }
                        else
                            $tooltip.offset({
                                top: top,
                                left: left + this.tooltipDistance
                            });
                    }
                    else {
                        if (left < 0) {
                            left = 0;
                            $(".md-hotspot-tooltip-arrow", $tooltip).css({
                                top: "auto",
                                bottom: "-10px",
                                left: position.left + pointWidth / 2
                            });
                        }
                        else if (left + width > $(window).width()) {
                            left += ($(window).width() - (left + width));
                            $(".md-hotspot-tooltip-arrow", $tooltip).css({
                                top: "auto",
                                bottom: "-10px",
                                left: position.left + pointWidth / 2 - left
                            });
                        }

                        $tooltip.offset({
                            top: top - this.tooltipDistance,
                            left: left
                        });
                    }
                }
                else
                    $tooltip.offset({
                        top: top,
                        left: left - this.tooltipDistance
                    });
            }

            return {left: left, top: top, class: directionClass}
        },
        timer: function () {
            if (this.lock)
                return;

            if (!this.pause) {
                this.playTime += this.timeUnit;
                if (this.playTime > this.slideTime) {
                    if (this.options.autoPlay)
                        this.nextSlide();
                }
                else {
                    if (this.options.enableLoadingBar) {
                        var width = this.playTime * this.width / this.slideTime;
                        $(".br-timer-bar", this.wrap).width(width);
                        $(".br-timer-glow", this.wrap).css({left: width - 100 + "px"});
                    }
                }
            }
        },
        play: function () {
            var self = this;

            this.slider.removeClass("loading-image")
            this.slide(0);
            setInterval(function () {
                self.timer();
            }, this.timeUnit);
        },
        slide: function (index) {
            index = parseInt(index);
            if (this.lock)
                return;

            this.lock = true;
            this.playTime = 0;
            this.slideTime = this.slides[index].data("timeout") ? this.slides[index].data("timeout") : this.options.defaultSlideTime;
            if (this.options.enableLoadingBar) {
                $(".br-timer-bar", this.wrap).width(0);
                $(".br-timer-glow", this.wrap).css({left: "-100px"});
            }
            this.prev = this.active;
            this.active = index;
            // Clear effect classes in slide items
            $(".md-object", this.slides[this.active]).each(function () {
                $(this).removeClass(effectsIn.join(" "));
                $(this).removeClass(effectsOut.join(" "));
                $(this).hide();
            });

            // Invoke custom onTransitionBegin
            this.options.onStartTransition.call(this.slider);

            if (this.slides[this.prev]) {
                $("div.md-bullet:eq(" + this.prev + ")", this.wrap).removeClass("md-current");
                $("a:eq(" + this.prev + ")", this.wrap).removeClass("md-current");

                // Clear items timer
                this.clearItemsTimer();

                // Reset video item with inline display style
                $(".md-video", this.slides[this.prev]).each(function () {
                    var $itemObject = $(this).parent();
                    if (!$itemObject.data("display") || $itemObject.data("display") == "inline")
                        $("iframe", $itemObject).remove();

                    $(this).show();
                });

                // Get slide transition effect
                var fx = this.slides[this.active].data("transition") ? this.slides[this.active].data("transition") : this.options.defaultTransitions;
                fx = fx.trim();

                if (fx.toLowerCase() == "random") {
                    fx = transitionEffects[Math.floor(Math.random() * transitionEffects.length)];
                    if (fx == undefined)
                        fx = "fade";
                    fx = $.trim(fx.toLowerCase());
                }
                else if (fx.indexOf(",") != -1) {
                    var transitions = fx.split(",");
                    fx = transitions[Math.floor(Math.random() * transitions.length)];
                    if (fx == undefined)
                        fx = "fade";
                    fx = $.trim(fx.toLowerCase());
                }

                if (!this.supportCss3 && fx.indexOf("slit-") != -1)
                    fx = "fade";

                // Play transition effect
                this.playTransition(fx);
                this.setCurrent();
            }
            else {
                this.slides[this.active].css({top: 0, left: 0}).show();
                this.playSlideItems();
                this.setCurrent();
            }
        },
        nextSlide: function () {
            if (this.lock)
                return;

            var index = this.active + 1;
            if (index < this.numberSlides)
                this.slide(index)
            else if (this.options.loop)
                this.slide(0);
        },
        prevSlide: function () {
            if (this.lock)
                return;

            if (this.active - 1 >= 0)
                this.slide(this.active - 1);
            else if (this.options.loop)
                this.slide(this.numberSlides - 1);
        },
        pauseSlide: function () {
            this.pause = true;
            if (!this.lock)
                this.clearItemsTimer();
        },
        unPauseSlide: function () {
            this.pause = false;
            if (!this.lock)
                this.playSlideItems();
        },
        clearItemsTimer: function () {
            $.each(this.itemsTimer, function (index, timer) {
                clearTimeout(timer);
            });

            this.itemsTimer = [];
        },
        playSlideItems: function () {
            var self = this,
                activeSlide = this.slides[this.active];
            $(".md-object", activeSlide).each(function () {
                var $caption = $(this),
                    inFx = $caption.data("easein") ? $caption.data("easein") : "",
                    outFx = $caption.data("easeout") ? $caption.data("easeout") : "",
                    start = $caption.data("start") ? $caption.data("start") : 0,
                    stop = $caption.data("stop") ? $caption.data("stop") : 0;

                // Get effect in and out
                if (inFx.toLowerCase() == "random")
                    inFx = effectsIn[Math.floor(Math.random() * effectsIn.length)];
                if (outFx.toLowerCase() == "random")
                    outFx = effectsOut[Math.floor(Math.random() * effectsOut.length)];

                // Process start for slide item
                if (stop - self.playTime >= 0) {
                    if (start - self.playTime >= 0) {
                        // Remove class effect out and hide caption
                        $caption.removeClass(effectsOut.join(" "));
                        $caption.removeClass(effectsIn.join(" "));
                        $caption.hide();

                        var timer = setTimeout(
                            function () {
                                if (inFx == "" || !self.supportCss3 || (inFx == "shuffleLetter" && !jQuery().shuffleLetters))
                                    $caption.show();
                                else {
                                    if (inFx !== "shuffleLetter") {
                                        var fxDuration = $caption.data("duration-in");
                                        if (fxDuration != undefined && fxDuration > 0) {
                                            $caption.css({
                                                "animation-duration": fxDuration + "ms",
                                                "-webkit-animation-duration": fxDuration + "ms",
                                                "-moz-animation-duration": fxDuration + "ms",
                                                "-ms-animation-duration": fxDuration + "ms"
                                            });
                                        }
                                        $caption.show().addClass(inFx);
                                    }
                                    else {
                                        var shuffleLetterOpt = {fps: 25};
                                        if (fxDuration && fxDuration > 0) {
                                            shuffleLetterOpt.fps = 25/(fxDuration/1000)
                                        }
                                        $caption.show().shuffleLetters(shuffleLetterOpt);
                                    }
                                }
                            },
                            start - self.playTime
                        );

                        self.itemsTimer.push(timer);
                    }
                    else
                        $caption.show();

                    // Process for stop slide item
                    if (stop - self.playTime >= 0) {
                        var timer = setTimeout(
                            function () {
                                if (outFx == "" || !self.supportCss3)
                                    $caption.fadeOut();
                                else {
                                    var fxDuration = $caption.data("duration-out");
                                    if (fxDuration != undefined && fxDuration > 0) {
                                        $caption.css({
                                            "animation-duration": fxDuration + "ms",
                                            "-webkit-animation-duration": fxDuration + "ms",
                                            "-moz-animation-duration": fxDuration + "ms",
                                            "-ms-animation-duration": fxDuration + "ms"
                                        });
                                    }
                                    $caption.addClass(outFx);
                                }

                                $caption.removeClass(inFx);
                            },
                            stop - self.playTime
                        );

                        self.itemsTimer.push(timer);
                    }
                }
                else
                    $caption.hide();
            });
            this.lock = false;

            if (this.options.pauseOnHover && this.pause)
                $(".md-slide-wrap", this.wrap).trigger("mouseenter");
        },
        loadImages: function () {
            var self = this,
                count = $(".md-slide-item .md-main-img img", this.slider).length;
            if(count){
                $(".md-slide-item .md-main-img img", this.slider).each(function () {
                    $(this).on('load', function () {
                        var $image = $(this);
                        if (!$image.data("defW")) {
                            var imgSize = self.getImageSize($image.attr("src"));

                            self.changeBackgroundPosition($image, imgSize.width, imgSize.height);
                            $image.data({
                                defW: imgSize.width,
                                defH: imgSize.height
                            });
                        }

                    count--;
                        if (count == 0)
                            self.play();
                    });

                    if (this.complete)
                        $(this).trigger('load');
                });
            }else{
                self.play();
            }
        },
        changeBackgroundPosition: function ($background, width, height) {
            var panelWidth = $(".md-slide-item:visible", this.slider).width(),
                panelHeight = $(".md-slide-item:visible", this.slider).height();

            if (height > 0 && panelHeight > 0) {
                if (((width / height) > (panelWidth / panelHeight))) {
                    var left = panelWidth - (panelHeight / height) * width;
                    $background.css({
                        width: "auto",
                        height: panelHeight + "px"
                    });
                    if (left < 0)
                        $background.css({left: (left / 2) + "px", top: 0});
                    else
                        $background.css({left: 0, top: 0});
                }
                else {
                    var top = panelHeight - (panelWidth / width) * height;
                    $background.css({width: panelWidth + "px", height: "auto"});
                    if (top < 0)
                        $background.css({top: (top / 2) + "px", left: 0});
                    else
                        $background.css({left: 0, top: 0});
                }
            }
        },
        getImageSize: function (src) {
            var image = new Image();

            image.src = src;
            return {width: image.width, height: image.height}
        },
        resize: function () {
            this.width = this.options.responsive ? this.wrap.width() : this.options.width;
            if (this.options.responsive && (this.width < this.options.width)) {
                this.height = Math.round(this.options.height * this.width / this.options.width);
            }
            else
                this.height = this.options.height;

            this.wrap.height(this.height);
            $(".md-slide-item", this.slider).height(this.height);

            if (this.options.fullWidth) {
                var bulletSpace = 20;

                if ((this.wrap.width() - this.options.width) / 2 > 20)
                    bulletSpace = (this.wrap.width() - this.options.width) / 2;

                $(".md-bullets", this.wrap).css({
                    left: bulletSpace,
                    right: bulletSpace
                });
                $(".md-thumb", this.wrap).css({
                    left: bulletSpace,
                    right: bulletSpace
                });
                $(".md-objects", this.slider).width(this.options.width);
            }

            if (this.options.responsive && this.wrap.width() < this.options.width)
                $(".md-objects", this.slider).width(this.width);

            this.resizeBackgroundImages();
            this.resizeThumbnail();
            this.resizeFont();
            this.resizePadding();
            this.setThumbnailPosition();
        },
        resizeBackgroundImages: function () {
            var self = this;

            $(".md-slide-item", this.slider).each(function () {
                var $background = $(".md-main-img img", this);
                if($background.length){
                    if ($background.data("defW") && $background.data("defH")) {
                        self.changeBackgroundPosition($background, $background.data("defW"), $background.data("defH"));
                    }
                }else{
                    $(".md-main-img", $(this)).width($(".md-slide-item:visible", self.slider).width()).height($(".md-slide-item:visible", self.slider).height())
                }
            });
        },
        resizeThumbnail: function () {
            var self = this;

            if (this.options.enableThumbnail && !this.options.enableBullet) {
                var $thumbnailItems = $(".md-thumb-items", this.wrap),
                    thumbnailsWidth = $("a", $thumbnailItems).width() * this.numberSlides,
                    $thumbnailContainer = $(".md-thumb", this.wrap);

                $thumbnailItems.unbind("touchstart").unbind("touchmove").unbind("touchend").css("left", 0);
                $(".md-thumb-next", $thumbnailContainer).remove();
                $(".md-thumb-prev", $thumbnailContainer).remove();

                if (thumbnailsWidth > $(".md-thumb-container", $thumbnailContainer).width()) {
                    var thumbWidthInvisible = $(".md-thumb-container", this.wrap).width() - thumbnailsWidth;

                    $thumbnailItems.width(thumbnailsWidth);

                    // Add scroll thumbnail button
                    $thumbnailContainer.append('<div class="md-thumb-prev"></div><div class="md-thumb-next"></div>');
                    $(".md-thumb-prev", $thumbnailContainer).click(function () {
                        self.scrollThumbnail("right");
                    });
                    $(".md-thumb-next", $thumbnailContainer).click(function () {
                        self.scrollThumbnail("left");
                    });
                    this.enableThumbnailArrow(thumbWidthInvisible);

                    if (this.hasTouch) {
                        var thumbTouch = false,
                            thumbLeft = 0;

                        $(".md-thumb-items", this.wrap).bind("touchstart", function (event) {
                            event = event.originalEvent.touches[0] || event.originalEvent.changedTouches[0];
                            thumbTouch = true;
                            this.mouseX = event.pageX;
                            thumbLeft = $thumbnailItems.position().left;
                            return false;
                        });
                        $thumbnailItems.bind("touchmove", function (event) {
                            event.preventDefault();
                            event = event.originalEvent.touches[0] || event.originalEvent.changedTouches[0];
                            if (thumbTouch)
                                $thumbnailItems.css("left", thumbLeft + event.pageX - this.mouseX);

                            return false;
                        });
                        $thumbnailItems.bind("touchend", function (event) {
                            event.preventDefault();
                            event = event.originalEvent.touches[0] || event.originalEvent.changedTouches[0];
                            thumbTouch = false;
                            if (Math.abs(event.pageX - this.mouseX) < self.options.touchSensitive) {
                                var item = $(event.target).closest("a.md-thumb-item");

                                if (item.length)
                                    self.slide(item.attr("rel"));

                                $thumbnailItems.stop(true, true).animate({left: thumbLeft}, 400);
                                return false;
                            }

                            if ($thumbnailItems.position().left < thumbWidthInvisible)
                                $thumbnailItems.stop(true, true).animate({left: thumbWidthInvisible}, 400, function () {
                                    self.enableThumbnailArrow(thumbWidthInvisible);
                                });
                            else if ($thumbnailItems.position().left > 0)
                                $thumbnailItems.stop(true, true).animate({left: 0}, 400, function () {
                                    self.enableThumbnailArrow(thumbWidthInvisible);
                                });

                            thumbLeft = 0;
                            return false;
                        });
                    }
                }
            }
        },
        scrollThumbnail: function (direction) {
            var self = this,
                $thumbnailItems = $(".md-thumb-items", this.wrap),
                thumbnailsWidth = $("a", $thumbnailItems).width() * this.numberSlides;

            if (this.options.enableThumbnail && !this.options.enableBullet) {
                var thumbWidthInvisible = $(".md-thumb-container", this.wrap).width() - thumbnailsWidth;

                switch (direction) {
                    case "left":
                        var thumbLeft = $thumbnailItems.position().left;

                        if (thumbLeft > thumbWidthInvisible) {
                            var containerWidth = $(".md-thumb-container", self.wrap).width();
                            if ((thumbLeft - containerWidth) > thumbWidthInvisible)
                                $thumbnailItems.stop(true, true).animate({left: thumbLeft - containerWidth}, 400, function () {
                                    self.enableThumbnailArrow(thumbWidthInvisible);
                                });
                            else
                                $thumbnailItems.stop(true, true).animate({left: thumbWidthInvisible}, 400, function () {
                                    self.enableThumbnailArrow(thumbWidthInvisible)
                                });
                        }
                        break;

                    case "right":
                        var thumbLeft = $thumbnailItems.position().left;
                        if (thumbLeft < 0) {
                            var containerWidth = $(".md-thumb-container", self.wrap).width();
                            if (thumbLeft + containerWidth < 0)
                                $thumbnailItems.stop(true, true).animate({left: thumbLeft + containerWidth}, 400, function () {
                                    self.enableThumbnailArrow(thumbWidthInvisible);
                                });
                            else
                                $thumbnailItems.stop(true, true).animate({left: 0}, 400, function () {
                                    self.enableThumbnailArrow(thumbWidthInvisible);
                                });
                        }
                        break;

                    default :
                        var thumbCurrent = $("a", $thumbnailItems).index($("a.md-current", $thumbnailItems));
                        if (thumbCurrent >= 0) {
                            var thumbLeft = $thumbnailItems.position().left;
                            var currentLeft = thumbCurrent * $("a", $thumbnailItems).width();
                            if (currentLeft + thumbLeft < 0)
                                $thumbnailItems.stop(true, true).animate({left: -currentLeft}, 400, function () {
                                    self.enableThumbnailArrow(thumbWidthInvisible);
                                });
                            else {
                                var currentRight = currentLeft + $("a", $thumbnailItems).width(),
                                    containerWidth = $(".md-thumb-container", self.wrap).width();

                                if (currentRight + thumbLeft > containerWidth)
                                    $thumbnailItems.stop(true, true).animate({left: containerWidth - currentRight}, 400, function () {
                                        self.enableThumbnailArrow(thumbWidthInvisible);
                                    });
                            }
                        }
                        break;
                }
            }
        },
        enableThumbnailArrow: function (minThumbsLeft) {
            var thumbLeft = $(".md-thumb-items", this.wrap).position().left;

            if (thumbLeft > minThumbsLeft)
                $(".md-thumb-next", this.wrap).show();
            else
                $(".md-thumb-next", this.wrap).hide();

            if (thumbLeft < 0)
                $(".md-thumb-prev", this.wrap).show();
            else
                $(".md-thumb-prev", this.wrap).hide();
        },
        setThumbnailPosition: function () {
            if (this.options.enableThumbnail && !this.options.enableBullet) {
                var thumbHeight = this.slider.data("thumb-height");

                if (this.options.thumbnailPosition == 1) {
                    var thumbBottom = thumbHeight / 2;
                    $(".md-thumb", this.wrap).css({
                        height: thumbHeight + 20,
                        bottom: -thumbBottom - 10
                    });
                    this.wrap.css({"margin-bottom": thumbBottom + 10})
                }
                else {
                    $(".md-thumb", this.wrap).css({
                        height: thumbHeight + 20,
                        bottom: -(thumbHeight + 20)
                    });
                    this.wrap.css({"margin-bottom": thumbHeight + 50})
                }
            }
        },
        resizeFont: function () {
            var fontDiff = 1;

            if (parseInt($.browser.version, 10) < 9)
                fontDiff = 6;
            if (this.wrap.width() < this.options.width)
                $(".md-objects", this.slider).css({"font-size": 100 * this.wrap.width() / this.options.width - fontDiff + "%"});
            else
                $(".md-objects", this.slider).css({"font-size": 100 - fontDiff + "%"});
        },
        resizePadding: function () {
            var self = this;

            if (this.wrap.width() < this.options.width && this.options.responsive) {
                $(".md-objects > div", this.slider).each(function () {
                    var objectRatio = self.wrap.width() / self.options.width,
                        $_object = $(this),
                        objectPadding = {};

                    if ($_object.data("paddingtop")) objectPadding["padding-top"] = $_object.data("paddingtop") * objectRatio;
                    if ($_object.data("paddingright")) objectPadding["padding-right"] = $_object.data("paddingright") * objectRatio;
                    if ($_object.data("paddingbottom")) objectPadding["padding-bottom"] = $_object.data("paddingbottom") * objectRatio;
                    if ($_object.data("paddingleft")) objectPadding["padding-left"] = $_object.data("paddingleft") * objectRatio;
                    if ($_object.find("a").length)
                        $_object.find("a").css(objectPadding);
                    else
                        $_object.css(objectPadding);
                });
            }
            else {
                $(".md-objects > div", this.slider).each(function () {
                    var $_object = $(this),
                        objectPadding = {};

                    if ($_object.data("paddingtop")) objectPadding["padding-top"] = $_object.data("paddingtop");
                    if ($_object.data("paddingright")) objectPadding["padding-right"] = $_object.data("paddingright");
                    if ($_object.data("paddingbottom")) objectPadding["padding-bottom"] = $_object.data("paddingbottom");
                    if ($_object.data("paddingleft")) objectPadding["padding-left"] = $_object.data("paddingleft");
                    if ($_object.find("a").length)
                        $_object.find("a").css(objectPadding);
                    else
                        $_object.css(objectPadding);
                });
            }
        },
        playTransition: function (fx) {
            var self = this,
                transitionSpeed = this.options.transitionsSpeed ? this.options.transitionsSpeed : this.options.defaultTransitionSpeed;
            switch (fx) {
                case "slit-horizontal-left-top":
                case "slit-horizontal-top-right":
                case "slit-horizontal-bottom-up":
                case "slit-vertical-down":
                case "slit-vertical-up":
                    this.addSlit(fx);
                    $(".md-object", this.slides[this.active]).hide();
                    this.slides[this.prev].hide();
                    this.slides[this.active].show();
                    var slice1 = $(".md-slider-slit", this.slider).first(),
                        slice2 = $(".md-slider-slit", this.slider).last(),
                        transitionProp = {
                            "transition": "all " + transitionSpeed + "ms ease-in-out",
                            "-webkit-transition": "all " + transitionSpeed + "ms ease-in-out",
                            "-moz-transition": "all " + transitionSpeed + "ms ease-in-out",
                            "-ms-transition": "all " + transitionSpeed + "ms ease-in-out"
                        };

                    $(".md-slider-slit", this.slider).css(transitionProp);
                    setTimeout(function () {
                        slice1.addClass("md-transition-elements-1");
                        slice2.addClass("md-transition-elements-2");
                    }, 50);
                    setTimeout(function () {
                        self.transitionEnd();
                    }, transitionSpeed);
                    break;
                case "strip-up-right":
                case "strip-up-left":
                    this.addTiles(this.options.stripCols, 1, this.active);
                    var strips = $(".md-slider-title", this.slider),
                        timeStep = transitionSpeed / this.options.stripCols / 2,
                        speed = transitionSpeed / 2;
                    if (fx == "strip-up-right")
                        strips = $(".md-slider-title", this.slider).reverse();
                    strips.css({height: "1px", bottom: 0, top: "auto"});
                    strips.each(function (i) {
                        var strip = $(this);

                        setTimeout(
                            function () {
                                strip.animate({
                                    height: "100%",
                                    opacity: "1.0"
                                }, speed, "easeInOutQuart", function () {
                                    if (i == self.options.stripCols - 1)
                                        self.transitionEnd();
                                });
                            },
                            i * timeStep
                        );
                    });
                    break;
                case "strip-down-right":
                case "strip-down-left":
                    this.addTiles(this.options.stripCols, 1, this.active);
                    var $strips = $(".md-slider-title", this.slider),
                        timeStep = transitionSpeed / this.options.stripCols / 2,
                        speed = transitionSpeed / 2;

                    if (fx == "strip-down-right")
                        $strips = $(".md-slider-title", this.slider).reverse();
                    $strips.css({height: "1px", top: 0, bottom: "auto"});
                    $strips.each(function (i) {
                        var $strip = $(this);
                        setTimeout(
                            function () {
                                $strip.animate({
                                    height: "100%",
                                    opacity: "1.0"
                                }, speed, "easeInOutQuart", function () {
                                    if (i == self.options.stripCols - 1)
                                        self.transitionEnd();
                                });
                            },
                            i * timeStep
                        );
                    });
                    break;
                case "strip-left-up":
                case "strip-left-down":
                    this.addTiles(1, this.options.stripRows, this.active);
                    var $strips = $(".md-slider-title", this.slider),
                        timeStep = transitionSpeed / this.options.stripRows / 2,
                        speed = transitionSpeed / 2;

                    if (fx == "strip-left-up")
                        $strips = $(".md-slider-title", this.slider).reverse();
                    $strips.css({width: "1px", left: 0, right: "auto"});
                    $strips.each(function (i) {
                        var $strip = $(this);
                        setTimeout(
                            function () {
                                $strip.animate({
                                    width: "100%",
                                    opacity: "1.0"
                                }, speed, "easeInOutQuart", function () {
                                    if (i == self.options.stripRows - 1)
                                        self.transitionEnd();
                                });
                            },
                            i * timeStep
                        );
                    });
                    break;
                case "strip-right-up":
                case "strip-right-down":
                    this.addTiles(1, this.options.stripRows, this.active);
                    var $strips = $(".md-slider-title", this.slider),
                        timeStep = transitionSpeed / this.options.stripRows / 2,
                        speed = transitionSpeed / 2;
                    if (fx == "strip-left-right-up")
                        $strips = $(".md-slider-title", self).reverse();
                    $strips.css({width: "1px", left: "auto", right: "1px"});
                    $strips.each(function (i) {
                        var $strip = $(this);
                        setTimeout(
                            function () {
                                $strip.animate({
                                    width: "100%",
                                    opacity: "1.0"
                                }, speed, "easeInOutQuart", function () {
                                    if (i == self.options.stripRows - 1)
                                        self.transitionEnd();
                                });
                            },
                            i * timeStep
                        );
                    });
                    break;
                case "strip-right-left-up":
                case "strip-right-left-down":
                    this.addTiles(1, this.options.stripRows, this.prev);
                    this.slides[this.prev].hide();
                    this.slides[this.active].show();

                    var $strips = $(".md-slider-title", this.slider),
                        timeStep = transitionSpeed / this.options.stripRows,
                        speed = transitionSpeed / 2;

                    if (fx == "strip-right-left-up")
                        $strips = $(".md-slider-title", this.slider).reverse();
                    $strips.filter(":odd").css({
                        width: "100%",
                        right: 0,
                        left: "auto",
                        opacity: 1
                    }).end().filter(":even").css({
                        width: "100%",
                        right: "auto",
                        left: "0px",
                        opacity: 1
                    });
                    $strips.each(function (i) {
                        var $strip = $(this),
                            css = (i % 2 == 0) ? {
                                left: "-50%",
                                opacity: 0
                            } : {right: "-50%", opacity: 0};

                        setTimeout(
                            function () {
                                $strip.animate(css, speed, "easeOutQuint", function () {
                                    if (i == self.options.stripRows - 1) {
                                        self.transitionEnd();
                                    }
                                });
                            },
                            i * timeStep
                        );
                    });
                    break;
                case "strip-up-down-right":
                case "strip-up-down-left":
                    this.addTiles(this.options.stripCols, 1, this.prev);
                    this.slides[this.prev].hide();
                    this.slides[this.active].show();

                    var $strips = $(".md-slider-title", this.slider),
                        timeStep = transitionSpeed / this.options.stripCols / 2,
                        speed = transitionSpeed / 2;

                    if (fx == "strip-up-down-right")
                        $strips = $(".md-slider-title", this.slider).reverse();

                    $strips.filter(":odd").css({
                        height: "100%",
                        bottom: 0,
                        top: "auto",
                        opacity: 1
                    }).end().filter(":even").css({
                        height: "100%",
                        bottom: "auto",
                        top: 0,
                        opacity: 1
                    });
                    $strips.each(function (i) {
                        var $strip = $(this),
                            css = (i % 2 == 0) ? {
                                top: "-50%",
                                opacity: 0
                            } : {bottom: "-50%", opacity: 0};

                        setTimeout(
                            function () {
                                $strip.animate(css, speed, "easeOutQuint", function () {
                                    if (i == self.options.stripCols - 1)
                                        self.transitionEnd();
                                });
                            },
                            i * timeStep
                        );
                    });
                    break;
                case "left-curtain":
                    this.addTiles(this.options.stripCols, 1, this.active);
                    var $strips = $(".md-slider-title", this.slider),
                        stripItemWidth = this.getWidthStripItem(),
                        _self = this,
                        timeStep = transitionSpeed / this.options.stripCols / 2;

                    $strips.each(function (i) {
                        var $strip = $(this);
                        var width = (i == _self.options.stripCols - 1) ? stripItemWidth.last : stripItemWidth.normal,
                            left = (i == _self.options.stripCols - 1) ? (_self.width - stripItemWidth.last) : (width * i);
                        $strip.css({left: left, width: 0, opacity: 0});
                        setTimeout(
                            function () {
                                $strip.animate({
                                    width: width,
                                    opacity: 1
                                }, transitionSpeed / 2, function () {
                                    if (i == self.options.stripCols - 1)
                                        self.transitionEnd();
                                });
                            },
                            timeStep * i
                        );
                    });
                    break;
                case "right-curtain":
                    this.addTiles(this.options.stripCols, 1, this.active);

                    var $strips = $(".md-slider-title", this.slider).reverse(),
                        stripItemWidth = this.getWidthStripItem(),
                        _self = this,
                        timeStep = transitionSpeed / this.options.stripCols / 2;
                    //right-curtain neu de item cuoi cung co width la last thi js transition se chuyen cai last nay thanh first va gay loi
                    //vay nen ta lam nguoc lai, cho item first chua width last
                    $strips.each(function (i) {
                        var $strip = $(this);
                        var width = (i == 0) ? stripItemWidth.last : stripItemWidth.normal,
                            right = i ? ((width * (i -1)) + stripItemWidth.last) : 0;
                        $strip.css({
                            right: right,
                            left: "auto",
                            width: 0,
                            opacity: 0
                        });
                        setTimeout(
                            function () {
                                $strip.animate({
                                    width: width,
                                    opacity: 1
                                }, transitionSpeed / 2, function () {
                                    if (i == self.options.stripCols - 1)
                                        self.transitionEnd();
                                });
                            },
                            timeStep * i
                        );
                    });
                    break;
                case "top-curtain":
                    this.addTiles(1, this.options.stripRows, this.active);

                    var $strips = $(".md-slider-title", this.slider),
                        stripItemHeight = this.getHeightStripItem(),
                        _self = this,
                        timeStep = transitionSpeed / this.options.stripRows / 2;

                    $strips.each(function (i) {
                        var $strip = $(this);
                        var height = (i == _self.options.stripRows - 1) ? stripItemHeight.last : stripItemHeight.normal,
                            top = (i == _self.options.stripRows - 1) ? (_self.height - stripItemHeight.last) : (height * i);
                        $strip.css({top: top, height: 0, opacity: 0});
                        setTimeout(
                            function () {
                                $strip.animate({
                                    height: height,
                                    opacity: 1
                                }, transitionSpeed / 2, function () {
                                    if (i == self.options.stripRows - 1)
                                        self.transitionEnd();
                                });
                            },
                            timeStep * i
                        );
                    });
                    break;
                case "bottom-curtain":
                    this.addTiles(1, this.options.stripRows, this.active);
                    var $strips = $(".md-slider-title", this.slider).reverse(),
                        stripItemHeight = this.getHeightStripItem(),
                        _self = this,
                        timeStep = transitionSpeed / this.options.stripRows / 2;
                    //bottom-curtain neu de item cuoi cung co height la last thi js transition se chuyen cai last nay thanh first va gay loi
                    //vay nen ta lam nguoc lai, cho item first chua height last
                    $strips.each(function (i) {
                        var $strip = $(this);
                        var height = (i == 0) ? stripItemHeight.last : stripItemHeight.normal,
                            bottom = i ? ((height * (i -1)) + stripItemHeight.last) : 0;
                        $strip.css({bottom: bottom, height: 0, opacity: 0});
                        setTimeout(
                            function () {
                                $strip.animate({
                                    height: height,
                                    opacity: 1
                                }, transitionSpeed / 2, function () {
                                    if (i == self.options.stripRows - 1)
                                        self.transitionEnd();
                                });
                            },
                            timeStep * i
                        );
                    });
                    break;
                case "slide-in-right":
                    this.addStrips2();

                    var $strips = $(".md-slider-strip", this.slider);

                    $strips.each(function (i) {
                        var left = i * self.width,
                            $strip = $(this);

                        $strip.css({left: left}).animate({left: left - self.width}, transitionSpeed, function () {
                            self.transitionEnd();
                        });
                    });
                    break;
                case "slide-in-left":
                    this.addStrips2();
                    var $strips = $(".md-slider-strip", this.slider);

                    $strips.each(function (i) {
                        var left = -i * self.width,
                            $strip = $(this);

                        $strip.css({left: left}).animate({left: self.width + left}, transitionSpeed * 2, function () {
                            self.transitionEnd();
                        });
                    });
                    break;
                case "slide-in-up":
                    this.addStrips2();
                    var $strips = $(".md-slider-strip", this.slider);

                    $strips.each(function (i) {
                        var top = i * self.height,
                            $strip = $(this);

                        $strip.css({top: top}).animate({top: top - self.height}, transitionSpeed, function () {
                            self.transitionEnd();
                        });
                    });
                    break;
                case "slide-in-down":
                    this.addStrips2();
                    var $strips = $(".md-slider-strip", this.slider);

                    $strips.each(function (i) {
                        var top = -i * self.height,
                            $strip = $(this);

                        $strip.css({top: top}).animate({top: self.height + top}, transitionSpeed, function () {
                            self.transitionEnd();
                        });
                    });
                    break;
                case "fade":
                default:
                    this.addStrips(false, {strips: 1});

                    var $strip = $(".md-slider-strip:first", this.slider);

                    $strip.css({height: "100%", width: self.width});
                    if (fx == "slide-in-right")
                        $strip.css({
                            height: "100%",
                            width: self.width + "px",
                            left: self.width + "px",
                            right: "auto"
                        });
                    else if (fx == "slide-in-left")
                        $strip.css({
                            left: "-" + self.width + "px"
                        });

                    $strip.animate({
                        left: 0,
                        opacity: 1
                    }, transitionSpeed, function () {
                        self.transitionEnd();
                    });
                    break;
            }
        },
        getWidthStripItem: function(){
            var width = this.width / this.options.stripCols,
                result = {};
            result.normal = Math.round(width);
            result.last = this.width - (result.normal * (this.options.stripCols - 1));
            return result;
        },
        getHeightStripItem: function(){
            var height = this.height / this.options.stripRows,
                result = {};
            result.normal = Math.round(height);
            result.last = this.height - (result.normal * (this.options.stripRows - 1));
            return result;
        },
        addSlit: function (fx) {
            var $slitContainer = $('<div class="md-strips-container ' + fx + '"></div>'),
                $image = $(".md-main-img img", this.slides[this.prev]).length ? $(".md-main-img img", this.slides[this.prev]) : $(".md-main-img ", this.slides[this.prev]),
                $div1 = $('<div class="md-slider-slit"/>').append($image.clone()),
                position = $image.position(),
                $div2 = $('<div class="md-slider-slit"/>').append($image.clone().css("top", position.top - (this.height / 2) + "px"));
            if (fx == "slit-vertical-down" || fx == "slit-vertical-up")
                $div2 = $('<div class="md-slider-slit"/>').append($image.clone().css("left", position.left - (this.width / 2) + "px"));

            $slitContainer.append($div1).append($div2);
            this.slider.append($slitContainer);
        },
        addStrips: function (vertical, opts) {
            var $strip,
                opts = (opts) ? opts : this.options,
                stripsContainer = $('<div class="md-strips-container"></div>'),
                stripWidth = Math.round(this.width / opts.strips),
                stripHeight = Math.round(this.height / opts.strips),
                $image = $(".md-main-img img", this.slides[this.active]);

            for (var i = 0; i < opts.strips; i++) {
                var top = ((vertical) ? (stripHeight * i) + "px" : 0),
                    left = ((vertical) ? 0 : (stripWidth * i) + "px"),
                    width,
                    height;

                if (i == opts.strips - 1) {
                    width = ((vertical) ? 0 : (this.width - (stripWidth * i)) + "px");
                    height = ((vertical) ? (this.height - (stripHeight * i)) + "px" : 0);
                }
                else {
                    width = ((vertical) ? 0 : stripWidth + "px");
                    height = ((vertical) ? stripHeight + "px" : 0);
                }

                $strip = $('<div class="md-slider-strip"></div>').css({
                    width: width,
                    height: height,
                    top: top,
                    left: left,
                    opacity: 0
                });
                $strip.append($image.clone().css({
                    marginLeft: vertical ? 0 : -(i * stripWidth) + "px",
                    marginTop: vertical ? -(i * stripHeight) + "px" : 0
                }));
                stripsContainer.append($strip);
            }
            this.slider.append(stripsContainer);
        },
        addStrips2: function () {
            var $strip,
                images = [this.slides[this.prev].children(), $(".md-main-img img", this.slides[this.active])];
            var stripsContainer = $('<div class="md-strips-container"></div>');
            for (var i = 0; i < 2; i++) {
                var cloneHtml = images[i].clone();
                if(i == 0){
                    $('.md-object', cloneHtml).removeClass(effectsIn.join(" "));
                }
                $strip = $('<div class="md-slider-strip"></div>').css({
                    width: this.width,
                    height: this.height
                }).append(cloneHtml);
                stripsContainer.append($strip);
            }
            this.slider.append(stripsContainer);
        },
        addTiles: function (x, y, index) {
            var $title,
                $stripsContainer = $('<div class="md-strips-container"></div>'),
                titleWidth = this.width / x,
                titleHeight = this.height / y,
                $image = $(".md-main-img img", this.slides[index]),
                specialHeight = 0,
                specialWidth = 0;
                
            if ($image.length == 0)
                $image = $(".md-main-img", this.slides[index]);
        
            // fix make round width height
            if(x > 1){
                var titleWidthRound = Math.round(titleWidth);
                specialWidth = titleWidthRound - titleWidth;
                titleWidth = titleWidthRound;
            }else if(y > 1){
                var titleHeightRound = Math.round(titleHeight);
                specialHeight = titleHeightRound - titleHeight;
                titleHeight = titleHeightRound;
            }
        
            for (var i = 0; i < y; i++) {
                for (var j = 0; j < x; j++) {                    
                    var top = (titleHeight * i) + 'px',
                        left = (titleWidth * j) + 'px';
                    
                    // fix increase / decrease with/height in last col / last row
                    if(x > 1 && specialWidth && j === (x-1)){
                        var titleWidthNew = titleWidth - x * specialWidth;
                        left = (x-1)*titleWidth + 'px';
                        titleWidth = titleWidthNew;
                    }
                    else if(y > 1 && specialHeight && i == (y-1)){
                        var titleHeightNew = titleHeight - y * specialHeight;
                        top = (y-1)*titleHeight + 'px';
                        titleHeight = titleHeightNew;
                    }
                    
                    $title = $('<div class="md-slider-title"/>').css({
                        width: titleWidth,
                        height: titleHeight,
                        top: top,
                        left: left
                    });
                    $title.append($image.clone().css({
                        marginLeft: "-" + left,
                        marginTop: "-" + top
                    }));

                    $stripsContainer.append($title);
                }
            }
            this.slider.append($stripsContainer);
        },
        transitionEnd: function () {
            this.options.onEndTransition.call(this.slider);
            $(".md-strips-container", this.slider).remove();
            if (this.numberSlides != 1)
                this.slides[this.prev].hide();
            this.slides[this.active].show();
            this.playSlideItems();
        },
        setCurrent: function () {
            if (this.options.enableBullet)
                $("div.md-bullet:eq(" + this.active + ")", this.wrap).addClass("md-current");
            if (this.enableThumbnail && !this.options.enableBullet)
                $("a:eq(" + this.active + ")", this.wrap).addClass("md-current");
            this.scrollThumbnail("");
        },
        removeLoader: function() {
            $('.wrap-loader-slider').addClass('fadeOut');
            $('.md-slide-items').css('min-height','');
        }
    }
    $.fn.mdSlider = function (options) {
        return new MDSlider($(this), options);
    }
    $.fn.reverse = [].reverse;
})(jQuery);

(function($) {
    var MDVideoBox = function($element, slider, options) {
        var default_options = {
            videoWidth: 640,
            videoHeight: 350,
            overlay: 0.8,
            onClick: function(){}
        };

        this.video = $element;
        this.slider = slider;
        this.options = $.extend(default_options, options);
        this.height = this.options.videoHeight;
        this.width = this.options.videoWidth;

        this.init();
    }

    MDVideoBox.prototype = {
        constructor: MDVideoBox,
        init: function() {
            var self = this;

            if($("#md-overlay").length == 0) {
                $("body").append('<div id="md-overlay" class="md-overlay" style="display: none"></div>');
                $("body").append('<div id="md-video-container" class="md-video-container" style="display: none"><div id="md-video-embed"></div><div class="md-description clearfix"><div class="md-caption"></div><a id="md-close-btn" class="md-close-btn" href="#"></a></div></div>');
            }

            this.video.click(function() {
                self.open();
                return false;
            });

            $("#md-overlay").click(function() {
                self.close();
            });

            $("#md-video-container #md-close-btn").click(function() {
                self.close();
            });

            $(window).resize(function() {
                self.resize();
            });
            $(window).keydown(function(event) {
                var key = event.keyCode || event.which;

                if (key == 27)
                    self.close();
            });
        },
        open: function() {
            var self = this,
                $videoContainer = $("#md-video-container");

            // Pause slide
            $videoContainer.hover(
                function() {
                    self.slider.pauseSlide();
                },
                function() {}
            );
            $("#md-video-embed", $videoContainer).hover(
                function() {
                    self.slider.pauseSlide();
                },
                function() {}
            );

            // Invoke custom on click video element callback
            this.options.onClick.call(this.video);

            // Implements set size for video box elements
            var docWidth = $(window).width(),
                docHeight = $(window).height();

            if (docWidth < this.options.videoWidth) {
                this.width = docWidth;
                this.height = this.options.videoHeight * docWidth / this.options.videoWidth;

                if (docHeight < this.height) {
                    this.width = docHeight*this.options.videoWidth/this.options.videoHeight;
                    this.height = docHeight;
                }
            }
            $("#md-video-embed", $videoContainer).css({width: this.width + "px", height: this.height + "px"}).addClass("md-loading");
            $(window).trigger("resize");

            $videoContainer.show();
            $(".md-caption", $videoContainer).html(this.video.attr("title"));
            $("#md-overlay").show().fadeTo("fast", this.options.opacity);
            $("#md-video-embed", $videoContainer).fadeIn("slow", function() {
                var $videoFrame = $('<iframe frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>'),
                    videoSrc = self.video.attr("href") + '?autoplay=1';

                $videoFrame.attr("src", videoSrc);
                $videoFrame.css({width: self.width, height: self.height});
                $("#md-video-embed", $videoContainer).append($videoFrame);
            });
        },
        close: function() {
            $("#md-overlay").fadeOut("fast");
            $("#md-video-embed").html("");
            $("#md-video-container").hide();
            return false;
        },
        resize: function() {
            var docWidth = $(window).width(),
                docHeight = $(window).height();

            $("#md-video-container").css({left: (docWidth - this.width)/2 + "px", top: (docHeight - this.height)/2 + "px"});
            $("#md-overlay").css({width: docWidth, height: docHeight});
        }
    }
    $.fn.mdVideoBox = function(slider, options) {
        return new MDVideoBox($(this), slider, options);
    }
})(jQuery);
;
(function ($, Drupal, drupalSettings) {
    "use strict";
    /**
     * Attaches the JS test behavior to weight div.
     */
    Drupal.behaviors.iniMDSlider = {
        attach: function(context, settings) {
            var effectsIn = drupalSettings.inEffects,
                effectsOut = drupalSettings.outEffects;
            $(window).on('load', function(){
                window.listMegaSlide = [];
                var i = 0,
                    cssInline = '';
                $.each(drupalSettings.md_slider, function(slid, slider) {
                    listMegaSlide[i] = $('#md-slider-' + slid  + '-block').mdSlider(slider);
                    if(slider.device_enable){
                        cssInline += '@media (max-width: ' + slider.device_width + 'px) {\
                            #md-slider-' + slid + '-block .md-objects {\
                              display: none;\
                            }\
                          } ';
                    }
                    
                    if(slider.device_width){
                        cssInline += '@media (max-width: ' + slider.device_width + 'px) {\
                                .hideonmobile {\
                                  display: none !important;\
                                }\
                              }';
                    }
                    
                    i++;
                });
                //$('head').append(`<style>${cssInline}</style>`);
                $('head').append('<style>' +cssInline + '</style>');
            });
        }
    };
})(jQuery, Drupal, drupalSettings);
;
