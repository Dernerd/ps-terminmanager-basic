!function(t){function e(i){if(n[i])return n[i].exports;var s=n[i]={i:i,l:!1,exports:{}};return t[i].call(s.exports,s,s.exports,e),s.l=!0,s.exports}var n={};e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=1)}([,function(t,e){jQuery(document).ready(function(t){"use strict";window.Appointments=window.Appointments||{},Appointments.shortcodes=Appointments.shortcodes||{},Appointments.shortcodes.services={thumbnailsCache:[],strings:null,init:function(){this.strings=appointmentsStrings,this.$servicesSelector=t(".app_select_services"),this.$submitButton=t(".app_services_button"),"1"==this.strings.autorefresh&&this.$submitButton.hide(),this.on()},bind:function(){var e=this;this.$submitButton.click(function(){var t=e.$servicesSelector.val();void 0!==t&&null!==t||(t=e.strings.first_service_id),e.reload(t)}),this.$servicesSelector.change(function(){var n=t(this).val();if("1"==e.strings.autorefresh)return e.$submitButton.trigger("click"),!1;t(".app_service_excerpt").hide(),t("#app_service_excerpt_"+n).show()})},reload:function(t){window.location.href=this.strings.reload_url.replace("__selected_service__",t)}},Appointments.shortcodes.services.init()})}]);
//# sourceMappingURL=app-services.js.map