!function(e){function a(i){if(t[i])return t[i].exports;var s=t[i]={i:i,l:!1,exports:{}};return e[i].call(s.exports,s,s.exports,a),s.l=!0,s.exports}var t={};a.m=e,a.c=t,a.i=function(e){return e},a.d=function(e,t,i){a.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:i})},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},a.p="",a(a.s=2)}([function(e,a){jQuery(document).ready(function(e){function a(e){t[e]&&(t[i]&&(t[i].$el.removeClass("current"),t[i].$section.removeClass("current")),t[e].$el.addClass("current"),t[e].$section.addClass("current"),i=e)}var t=[],i="",s=0;if(e("ul.subsubsub a").each(function(){s++;var i=e(this),n=i.data("section");t[n]={$el:i,$section:e("#app-settings-"+n)},i.click(function(e){a(n)})}),s){var n=window.location.hash;n=n?n.substr(1):Object.keys(t)[0],a(n)}e(".wp-list-table.services a.edit")"click",function(){var i=(e(this).closest("tr"),e("#app-settings-section-edit-service")),s={action:"appointment_get_service",id:e(this).data("id"),_wpnonce:e(this).data("nonce")};t["section-edit-service"]={$el:e(this),$section:i},e.post(ajaxurl,s,function(t){t.success?(e("#service-capacity",i).val(t.data.capacity),e("#service-duration",i).val(t.data.duration),e("#service-id",i).val(t.data.ID),e("#service-name",i).val(t.data.name),e("#service-page",i).val(t.data.page),e("#service-price",i).val(t.data.price),e.fn.slider&&e("#service-capacity-slider-edit").slider("option","value",t.data.capacity),void 0!==t.data.service_padding&&(void 0!==t.data.service_padding.before&&e("#service_padding_before",i).val(t.data.service_padding.before),void 0!==t.data.service_padding.after&&e("#service_padding_after",i).val(t.data.service_padding.after)),void 0!==t.data.service_location&&e("#service_location",i).val(t.data.service_location),void 0!==t.data.shared_resources&&(e(".app-shared_service label").show(),e(".app-shared_service input[type=checkbox]").each(function(){value=parseInt(e(this).val()),e(this).prop("checked",!1).prop("disabled",!1),parseInt(t.data.ID)===value?(e(this).prop("checked",!1).prop("disabled",!0),e(this).closest("label").hide()):(void 0!==t.data.shared_resources.shared_ids&&(checked=t.data.shared_resources.shared_ids.indexOf(value),e(this).prop("checked",-1<checked)),void 0!==t.data.shared_resources.direct_ids&&(checked=t.data.shared_resources.direct_ids.indexOf(value),e(this).prop("disabled",-1<checked)))})),a("section-edit-service")):window.alert(t.data.message)})}),e(".wp-list-table.workers a.edit")"click",function(){var i=(e(this).closest("tr"),e("#app-settings-section-edit-worker")),s={action:"appointment_get_worker",id:e(this).data("id"),_wpnonce:e(this).data("nonce")};t["section-edit-worker"]={$el:e(this),$section:i},e.post(ajaxurl,s,function(t){t.success?(e("#worker-dummy",i).prop("checked",t.data.dummy),e("#worker-page",i).val(t.data.page),e("#worker-price",i).val(t.data.price),e("#worker-user",i).val(t.data.ID),e("#worker-user-display-name",i).html(t.data.display_name),e("input[name=multiselect_services_provided]",i).prop("checked",!1),e("#services_provided option",i).prop("selected",!1),e.each(t.data.services_provided,function(a,t){e('#services_provided option[value="'+t+'"]',i).prop("selected",!0)}),e(".add_worker_multiple").multiselect("refresh"),void 0!==t.data.worker_padding&&(void 0!==t.data.worker_padding.before&&e("#worker_padding_before",i).val(t.data.worker_padding.before),void 0!==t.data.worker_padding.after&&e("#worker_padding_after",i).val(t.data.worker_padding.after)),void 0!==t.data.worker_location&&e("#worker_location",i).val(t.data.worker_location),a("section-edit-worker")):window.alert(t.data.message)})})})},function(e,a){jQuery(document).ready(function(e){function a(a,t){e.post(ajaxurl,a,function(a){a.success&&t.detach();var i='<div class="notice notice-'+(a.success?"success":"error")+' is-dismissible"><p>'+a.data.message+"</p></div>";e(".appointments-settings h1").after(i)})}var t,i,s,n=e(".custom_color_row"),o=e(".preset_samples");e('select[name="color_set"]').change(function(){var a=e(this).val();if(0==a)n.show(),o.hide();else{n.hide(),o.show();for(s in app_i10n.classes)if(app_i10n.classes.hasOwnProperty(s)){for(t=[],i=1;i<=3;i++)t[i]=app_i10n.presets[s][i];o.find("a."+s).css("background-color","#"+t[a])}}});var r=e(".colorpicker_input");r.each(function(){var a=this.id;e("#"+a).ColorPicker({onSubmit:function(a,t,i,s){e(s).val(t),e(s).ColorPickerHide()},onBeforeShow:function(){e(this).ColorPickerSetColor(this.value)},onChange:function(t,i,s){var n=e("#"+a);n.val(i),n.parent().find("a.pickcolor").css("background-color","#"+i)}}).on("keyup",function(){e(this).ColorPickerSetColor(this.value)})}),r.keyup(function(){var a=e(this).val();a=a.replace(/[^a-fA-F0-9]/,""),3!==a.length&&6!==a.length||e(this).parent().find("a.pickcolor").css("background-color","#"+a)}),e("#app-settings-section-new-worker form.add-new-service-provider")"submit",function(){var a=e(this);if(null==e("#services_provided",a).val())return alert(app_i10n.messages.select_service_provider),!1}),e(".appointment-create-page a.button")"click",function(){var a=e("select",e(this).closest("td")).val(),t={action:e(this).data("action"),_wpnonce:e(this).data("nonce"),app_page_type:a};return e.post(ajaxurl,t,function(a){var t='<div class="notice '+(a.success?"updated":"error")+'"><p>'+a.data.message+"</p></div>";e(".appointments-settings h1").after(t)}),!1}),e(document)"click",".wp-list-table.services .delete a",function(){if(window.confirm(app_i10n.messages.service.delete_confirmation)){var t=e(this).closest("tr");a({action:"delete_service",nonce:e(this).data("nonce"),id:e(this).data("id")},t)}}),e(document)"click","#app-settings-section-services input.action",function(){var a=(e(this).closest("form"),e(".check-column input:checked")),t=e("select",e(this).parent()).val();return 0===a.length?(window.alert(app_i10n.messages.bulk_actions.no_items),!1):"-1"===t?(window.alert(app_i10n.messages.bulk_actions.no_action),!1):!!window.confirm(app_i10n.messages.services.delete_confirmation)&&void 0}),e(document)"click",".wp-list-table.workers .delete a",function(){if(window.confirm(app_i10n.messages.workers.delete_confirmation)){var t=e(this).closest("tr");a({action:"delete_worker",nonce:e(this).data("nonce"),id:e(this).data("id")},t)}}),e(document)"click","#app-settings-section-workers input.action",function(){var a=(e(this).closest("form"),e(".check-column input:checked")),t=e("select",e(this).parent()).val();return 0===a.length?(window.alert(app_i10n.messages.bulk_actions.no_items),!1):"-1"===t?(window.alert(app_i10n.messages.bulk_actions.no_action),!1):!!window.confirm(app_i10n.messages.workers.delete_confirmation)&&void 0}),e.fn.slider&&e("div.app-ui-slider").each(function(){var a=e(this).data("target-id");if(a){var t=e("#"+a),i=t.val(),s=e(this).data("max")||100,n=e(this).data("min")||0;e(this).slider({value:i,min:n,max:s,slide:function(e,a){t.val(a.value)}})}}),columns.saveManageColumnsState=function(){var a=this.hidden();e.post(ajaxurl,{action:"hidden-columns",hidden:a,screenoptionnonce:e("#screenoptionnonce").val(),page:pagenow,tab:e("input[name=app-current-tab]").val()})}})},function(e,a,t){t(0),e.exports=t(1)}]);
//# sourceMappingURL=admin-settings.js.map