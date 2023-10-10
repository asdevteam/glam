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
!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):"object"==typeof module&&module.exports?module.exports=t(require("jquery")):t(jQuery)}(function(t){var e=function(){function e(){var e=this,n=function(){var n=["br-wrapper"];""!==e.options.theme&&n.push("br-theme-"+e.options.theme),e.$elem.wrap(t("<div />",{"class":n.join(" ")}))},i=function(){e.$elem.unwrap()},a=function(n){return t.isNumeric(n)&&(n=Math.floor(n)),t('option[value="'+n+'"]',e.$elem)},r=function(){var n=e.options.initialRating;return n?a(n):t("option:selected",e.$elem)},o=function(){var n=e.$elem.find('option[value="'+e.options.emptyValue+'"]');return!n.length&&e.options.allowEmpty?(n=t("<option />",{value:e.options.emptyValue}),n.prependTo(e.$elem)):n},l=function(t){var n=e.$elem.data("barrating");return"undefined"!=typeof t?n[t]:n},s=function(t,n){null!==n&&"object"==typeof n?e.$elem.data("barrating",n):e.$elem.data("barrating")[t]=n},u=function(){var t=r(),n=o(),i=t.val(),a=t.data("html")?t.data("html"):t.text(),l=null!==e.options.allowEmpty?e.options.allowEmpty:!!n.length,u=n.length?n.val():null,d=n.length?n.text():null;s(null,{userOptions:e.options,ratingValue:i,ratingText:a,originalRatingValue:i,originalRatingText:a,allowEmpty:l,emptyRatingValue:u,emptyRatingText:d,readOnly:e.options.readonly,ratingMade:!1})},d=function(){e.$elem.removeData("barrating")},c=function(){return l("ratingText")},f=function(){return l("ratingValue")},g=function(){var n=t("<div />",{"class":"br-widget"});return e.$elem.find("option").each(function(){var i,a,r,o;i=t(this).val(),i!==l("emptyRatingValue")&&(a=t(this).text(),r=t(this).data("html"),r&&(a=r),o=t("<a />",{href:"#","data-rating-value":i,"data-rating-text":a,html:e.options.showValues?a:""}),n.append(o))}),e.options.showSelectedRating&&n.append(t("<div />",{text:"","class":"br-current-rating"})),e.options.reverse&&n.addClass("br-reverse"),e.options.readonly&&n.addClass("br-readonly"),n},p=function(){return l("userOptions").reverse?"nextAll":"prevAll"},h=function(t){a(t).prop("selected",!0),l("userOptions").triggerChange&&e.$elem.change()},m=function(){t("option",e.$elem).prop("selected",function(){return this.defaultSelected}),l("userOptions").triggerChange&&e.$elem.change()},v=function(t){t=t?t:c(),t==l("emptyRatingText")&&(t=""),e.options.showSelectedRating&&e.$elem.parent().find(".br-current-rating").text(t)},y=function(t){return Math.round(Math.floor(10*t)/10%1*100)},b=function(){e.$widget.find("a").removeClass(function(t,e){return(e.match(/(^|\s)br-\S+/g)||[]).join(" ")})},w=function(){var n,i,a=e.$widget.find('a[data-rating-value="'+f()+'"]'),r=l("userOptions").initialRating,o=t.isNumeric(f())?f():0,s=y(r);if(b(),a.addClass("br-selected br-current")[p()]().addClass("br-selected"),!l("ratingMade")&&t.isNumeric(r)){if(o>=r||!s)return;n=e.$widget.find("a"),i=a.length?a[l("userOptions").reverse?"prev":"next"]():n[l("userOptions").reverse?"last":"first"](),i.addClass("br-fractional"),i.addClass("br-fractional-"+s)}},$=function(t){return l("allowEmpty")&&l("userOptions").deselectable?f()==t.attr("data-rating-value"):!1},x=function(n){n.on("click.barrating",function(n){var i,a,r=t(this),o=l("userOptions");return n.preventDefault(),i=r.attr("data-rating-value"),a=r.attr("data-rating-text"),$(r)&&(i=l("emptyRatingValue"),a=l("emptyRatingText")),s("ratingValue",i),s("ratingText",a),s("ratingMade",!0),h(i),v(a),w(),o.onSelect.call(e,f(),c(),n),!1})},C=function(e){e.on("mouseenter.barrating",function(){var e=t(this);b(),e.addClass("br-active")[p()]().addClass("br-active"),v(e.attr("data-rating-text"))})},O=function(t){e.$widget.on("mouseleave.barrating blur.barrating",function(){v(),w()})},R=function(e){e.on("touchstart.barrating",function(e){e.preventDefault(),e.stopPropagation(),t(this).click()})},V=function(t){t.on("click.barrating",function(t){t.preventDefault()})},S=function(t){x(t),e.options.hoverState&&(C(t),O(t))},T=function(t){t.off(".barrating")},j=function(t){var n=e.$widget.find("a");l("userOptions").fastClicks&&R(n),t?(T(n),V(n)):S(n)};this.show=function(){l()||(n(),u(),e.$widget=g(),e.$widget.insertAfter(e.$elem),w(),v(),j(e.options.readonly),e.$elem.hide())},this.readonly=function(t){"boolean"==typeof t&&l("readOnly")!=t&&(j(t),s("readOnly",t),e.$widget.toggleClass("br-readonly"))},this.set=function(t){var n=l("userOptions");0!==e.$elem.find('option[value="'+t+'"]').length&&(s("ratingValue",t),s("ratingText",e.$elem.find('option[value="'+t+'"]').text()),s("ratingMade",!0),h(f()),v(c()),w(),n.silent||n.onSelect.call(this,f(),c()))},this.clear=function(){var t=l("userOptions");s("ratingValue",l("originalRatingValue")),s("ratingText",l("originalRatingText")),s("ratingMade",!1),m(),v(c()),w(),t.onClear.call(this,f(),c())},this.destroy=function(){var t=f(),n=c(),a=l("userOptions");T(e.$widget.find("a")),e.$widget.remove(),d(),i(),e.$elem.show(),a.onDestroy.call(this,t,n)}}return e.prototype.init=function(e,n){return this.$elem=t(n),this.options=t.extend({},t.fn.barrating.defaults,e),this.options},e}();t.fn.barrating=function(n,i){return this.each(function(){var a=new e;if(t(this).is("select")||t.error("Sorry, this plugin only works with select fields."),a.hasOwnProperty(n)){if(a.init(i,this),"show"===n)return a.show(i);if(a.$elem.data("barrating"))return a.$widget=t(this).next(".br-widget"),a[n](i)}else{if("object"==typeof n||!n)return i=n,a.init(i,this),a.show();t.error("Method "+n+" does not exist on jQuery.barrating")}})},t.fn.barrating.defaults={theme:"",initialRating:null,allowEmpty:null,emptyValue:"",showValues:!1,showSelectedRating:!0,deselectable:!0,reverse:!1,readonly:!1,fastClicks:!0,hoverState:!0,silent:!1,triggerChange:!0,onSelect:function(t,e,n){},onClear:function(t,e){},onDestroy:function(t,e){}},t.fn.barrating.BarRating=e});

/**
 * @file
 * Attaches fivestar rating.
 */

(function ($, Drupal) {
  Drupal.behaviors.fiveStarRating = {
    attach: function (context, settings) {
     $('body').find('.fivestar').each(function () {
      var $this = $(this);
      var $select = $this.find('select');
      var value = Math.round($select.data('result-value'));
      var vote_own_value = $select.data('vote-value');
      var isEdit = $select.data('is-edit');
      var show_own_vote = $select.data('show-own-vote');
      if (isEdit) {
        value = $select.val();
      }
      if (!value) {
        value = -1;
      }
      var options = {
        theme: ($select.data('style') == 'default') ? 'css-stars' : $select.data('style'),
        initialRating: show_own_vote ? (vote_own_value ? vote_own_value : -1) : value,
        allowEmpty: true,
        emptyValue: '',
        readonly: ($select.attr('disabled')) ? true : false,
        onSelect: function (value, text) {
          if (isEdit) {
            return;
          }
          $this.find('select').barrating('readonly', true);
          $this.find('[type=submit]').trigger('click');
          $this.find('a').addClass('disabled');
          $this.find('.vote-result').html();
        },
      };

      $this.find('select').once('processed').barrating('show', options);
      $this.find('[type=submit]').hide();
    });
    }
  };
})(jQuery, Drupal);
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
