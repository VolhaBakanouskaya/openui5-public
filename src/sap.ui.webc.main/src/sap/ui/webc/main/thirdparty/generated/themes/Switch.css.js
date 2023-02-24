sap.ui.define(["exports", "sap/ui/webc/common/thirdparty/base/asset-registries/Themes", "sap/ui/webc/common/thirdparty/theming/generated/themes/sap_fiori_3/parameters-bundle.css", "./sap_fiori_3/parameters-bundle.css"], function (_exports, _Themes, _parametersBundle, _parametersBundle2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _parametersBundle = _interopRequireDefault(_parametersBundle);
  _parametersBundle2 = _interopRequireDefault(_parametersBundle2);
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  (0, _Themes.registerThemePropertiesLoader)("@ui5/webcomponents-theming", "sap_fiori_3", () => _parametersBundle.default);
  (0, _Themes.registerThemePropertiesLoader)("@ui5/webcomponents", "sap_fiori_3", () => _parametersBundle2.default);
  var _default = {
    packageName: "@ui5/webcomponents",
    fileName: "themes/Switch.css",
    content: ".ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}:host{-webkit-tap-highlight-color:rgba(0,0,0,0)}:host(:not([hidden])){display:inline-block}.ui5-switch-root{position:relative;display:flex;align-items:center;width:var(--_ui5_switch_width);height:var(--_ui5_switch_height);min-width:var(--_ui5_switch_min_width);cursor:pointer;outline:none;border-radius:var(--_ui5-switch-root-border-radius)}.ui5-switch-root:not(.ui5-switch--no-label):not(.ui5-switch--semantic){width:var(--_ui5_switch_with_label_width);height:var(--_ui5_switch_height)}.ui5-switch-root.ui5-switch--no-label{min-width:var(--_ui5_switch_width)}.ui5-switch-inner{display:flex;align-items:center;justify-content:center;height:100%;width:100%;min-width:inherit;overflow:hidden;pointer-events:none;will-change:transform}:host([checked]) .ui5-switch-inner{border-radius:6.25rem;box-shadow:var(--_ui5-switch-root-box-shadow)}.ui5-switch-track{display:flex;align-items:center;height:var(--_ui5_switch_track_height);width:var(--_ui5_switch_track_width);border:var(--_ui5-switch-track-border);border-radius:var(--_ui5_switch_track_border_radius);box-sizing:border-box;transition:var(--_ui5_switch_track_transition)}.ui5-switch-root:not(.ui5-switch--no-label):not(.ui5-switch--semantic) .ui5-switch-track{height:var(--_ui5_switch_track_with_label_height);width:var(--_ui5_switch_track_with_label_width)}.ui5-switch-slider{position:relative;height:var(--_ui5_switch_height);width:100%;transition:transform .1s ease-in;transform-origin:top left}.ui5-switch-slider>:not(.ui5-switch-handle){display:var(--_ui5-switch-slider-texts-display)}.ui5-switch-handle{position:absolute;display:flex;justify-content:center;align-items:center;width:var(--_ui5_switch_handle_width);height:var(--_ui5_switch_handle_height);border:var(--_ui5_switch_handle_border);border-radius:var(--_ui5_switch_handle_border_radius);box-sizing:border-box}.ui5-switch-root:not(.ui5-switch--no-label):not(.ui5-switch--semantic) .ui5-switch-handle{height:var(--_ui5_switch_handle_with_label_height);width:var(--_ui5_switch_handle_with_label_width)}.ui5-switch-handle-icon{display:var(--_ui5-switch-handle-icon-display);transition:var(--_ui5_switch_track_transition)}:host([checked]) .ui5-switch-handle-icon{color:var(--_ui5-switch_track-on-background)}.ui5-switch-text{display:flex;justify-content:center;position:absolute;z-index:var(--_ui5_switch_text_z_index);min-width:var(--_ui5_switch_text_min_width);font-size:var(--_ui5_switch_text_font_size);font-family:var(--_ui5-switch-text_font_family);text-transform:uppercase;text-align:center;white-space:nowrap;user-select:none;-webkit-user-select:none}.ui5-switch-handle,.ui5-switch-text{left:var(--_ui5_switch_handle_left);top:50%;transform:translateY(-50%)}.ui5-switch-desktop.ui5-switch-root:focus:after{content:\"\";position:absolute;left:var(--_ui5_switch_root_outline_left);right:var(--_ui5_switch_root_outline_right);top:var(--_ui5_switch_root_outline_top);bottom:var(--_ui5_switch_root_outline_bottom);border:var(--_ui5_switch_focus_outline);border-radius:var(--_ui5_switch_root_after_boreder_radius);pointer-events:none;transition:var(--_ui5_switch_track_transition);outline:var(--_ui5_switch_root_after_outline)}.ui5-switch-root .ui5-switch-input{position:absolute;left:0;width:0;height:0;margin:0;visibility:hidden;-webkit-appearance:none}.ui5-switch-root.ui5-switch--disabled{opacity:var(--_ui5_switch_disabled_opacity);cursor:default}.ui5-switch-root.ui5-switch--checked .ui5-switch-text--off{visibility:var(--_ui5_switch_text_hidden)}.ui5-switch-root:not(.ui5-switch--checked) .ui5-switch-text--on{visibility:var(--_ui5_switch_text_hidden)}.ui5-switch-root.ui5-switch--checked .ui5-switch-text--on{left:var(--_ui5_switch_text_active_left)}.ui5-switch-root:not(.ui5-switch--checked) .ui5-switch-text--off{left:var(--_ui5_switch_text_inactive_left);right:var(--_ui5_switch_text_inactive_right)}.ui5-switch-root.ui5-switch--checked .ui5-switch-handle{background:var(--_ui5_switch_handle_active_background_color);border-color:var(--_ui5_switch_handle_active_border_color)}.ui5-switch-root:not(.ui5-switch--checked) .ui5-switch-handle{background:var(--_ui5_switch_handle_inactive_background_color);border-color:var(--_ui5_switch_handle_inactive_border_color)}.ui5-switch-desktop.ui5-switch-root.ui5-switch--checked:not(.ui5-switch--disabled):hover .ui5-switch-handle{background:var(--_ui5_switch_handle_hover_active_background_color);border-color:var(--_ui5_switch_handle_hover_active_border_color)}.ui5-switch-desktop.ui5-switch-root:not(.ui5-switch--disabled):not(.ui5-switch--checked):hover .ui5-switch-handle{background:var(--_ui5_switch_handle_hover_inactive_background_color);border-color:var(--_ui5_switch_handle_hover_inactive_border_color)}.ui5-switch-root.ui5-switch--semantic.ui5-switch--checked .ui5-switch-handle{background:var(--_ui5_switch_handle_semantic_accept_background_color);border-color:var(--_ui5_switch_handle_semantic_accept_border_color)}.ui5-switch-root.ui5-switch--semantic:not(.ui5-switch--checked) .ui5-switch-handle{background:var(--_ui5_switch_handle_semantic_reject_background_color);border-color:var(--_ui5_switch_handle_semantic_reject_border_color)}.ui5-switch-desktop.ui5-switch-root.ui5-switch--semantic.ui5-switch--checked:not(.ui5-switch--disabled):hover .ui5-switch-handle{background:var(--_ui5_switch_handle_semantic_hover_accept_background_color);border-color:var(--_ui5_switch_handle_semantic_hover_accept_border_color)}.ui5-switch-desktop.ui5-switch--semantic.ui5-switch-root:not(.ui5-switch--checked):not(.ui5-switch--disabled):hover .ui5-switch-handle{background:var(--_ui5_switch_handle_semantic_hover_reject_background_color);border-color:var(--_ui5_switch_handle_semantic_hover_reject_border_color)}.ui5-switch-root.ui5-switch--checked .ui5-switch-track{background:var(--_ui5_switch_track_active_background_color);border-color:var(--_ui5_switch_track_active_border_color)}.ui5-switch-root:not(.ui5-switch--checked) .ui5-switch-track{background:var(--_ui5_switch_track_inactive_background_color);border-color:var(--_ui5_switch_track_inactive_border_color)}.ui5-switch-desktop.ui5-switch-root.ui5-switch--checked:not(.ui5-switch--disabled):hover .ui5-switch-track{background:var(--_ui5_switch_track_hover_active_background_color);border-color:var(--_ui5_switch_track_hover_active_border_color)}.ui5-switch-desktop.ui5-switch-root:not(.ui5-switch--checked):not(.ui5-switch--disabled):hover .ui5-switch-track{background:var(--_ui5_switch_track_hover_inactive_background_color);border-color:var(--_ui5_switch_track_hover_inactive_border_color)}.ui5-switch-root.ui5-switch--semantic.ui5-switch--checked .ui5-switch-track{background:var(--_ui5_switch_track_semantic_accept_background_color);border-color:var(--_ui5_switch_track_semantic_accept_border_color)}.ui5-switch-root.ui5-switch--semantic:not(.ui5-switch--checked) .ui5-switch-track{background:var(--_ui5_switch_track_semantic_reject_background_color);border-color:var(--_ui5_switch_track_semantic_reject_border_color)}.ui5-switch-desktop.ui5-switch-root.ui5-switch--semantic.ui5-switch--checked:not(.ui5-switch--disabled):hover .ui5-switch-track{background:var(--_ui5_switch_track_semantic_hover_accept_background_color);border-color:var(--_ui5_switch_track_semantic_hover_accept_border_color)}.ui5-switch-desktop.ui5-switch--semantic.ui5-switch-root:not(.ui5-switch--checked):not(.ui5-switch--disabled):hover .ui5-switch-track{background:var(--_ui5_switch_track_semantic_hover_reject_background_color);border-color:var(--_ui5_switch_track_semantic_hover_reject_border_color)}.ui5-switch-root.ui5-switch--checked:not(.ui5-switch--no-label):not(.ui5-switch--semantic) .ui5-switch-slider{transform:var(--_ui5_switch_transform_with_label)}.ui5-switch-root.ui5-switch--checked .ui5-switch-slider{transform:var(--_ui5_switch_transform)}.ui5-switch-root.ui5-switch--no-label .ui5-switch-text,.ui5-switch-root.ui5-switch--semantic .ui5-switch-text,.ui5-switch-text .ui5-switch-text--on .ui5-switch-no-label-icon{display:flex;justify-content:center}.ui5-switch--no-label .ui5-switch-no-label-icon-off,.ui5-switch--no-label .ui5-switch-no-label-icon-on{width:var(--_ui5_switch_icon_width);height:var(--_ui5_switch_icon_height);display:var(--_ui5_switch_track_icon_display)}.ui5-switch-root.ui5-switch--semantic .ui5-switch-icon-off,.ui5-switch-root.ui5-switch--semantic .ui5-switch-icon-on{width:var(--_ui5_switch_icon_width);height:var(--_ui5_switch_icon_height)}.ui5-switch-root .ui5-switch-text{font-family:var(--_ui5_switch_text_font_family);font-size:var(--_ui5_switch_text_font_size);width:var(--_ui5_switch_text_width)}.ui5-switch-root:not(.ui5-switch--no-label):not(.ui5-switch--semantic) .ui5-switch-text{font-family:var(--_ui5_switch_text_with_label_font_family);font-size:var(--_ui5_switch_text_with_label_font_size);width:var(--_ui5_switch_text_with_label_width)}:host([active]) .ui5-switch-desktop.ui5-switch-root:not(.ui5-switch--disabled) .ui5-switch-track{background:var(--_ui5-switch_track-off-active-background)}:host([active]) .ui5-switch-desktop.ui5-switch-root.ui5-switch--checked:not(.ui5-switch--disabled):hover .ui5-switch-track{background:var(--_ui5-switch_track-on-active-background)}.ui5-switch-desktop.ui5-switch-root:not(.ui5-switch--disabled):hover .ui5-switch-handle{box-shadow:var(--_ui5_switch_handle_off_hover_box_shadow)}.ui5-switch-desktop.ui5-switch-root.ui5-switch--checked:not(.ui5-switch--disabled):hover .ui5-switch-handle{box-shadow:var(--_ui5_switch_handle_on_hover_box_shadow)}.ui5-switch-desktop.ui5-switch-root.ui5-switch--semantic:not(.ui5-switch--disabled):hover .ui5-switch-handle{box-shadow:var(--_ui5_switch_handle_semantic_off_hover_box_shadow)}.ui5-switch-desktop.ui5-switch-root.ui5-switch--semantic.ui5-switch--checked:not(.ui5-switch--disabled):hover .ui5-switch-handle{box-shadow:var(--_ui5_switch_handle_semantic_on_hover_box_shadow)}.ui5-switch-root.ui5-switch--semantic .ui5-switch-icon-on,.ui5-switch-root.ui5-switch--semantic .ui5-switch-text--on{color:var(--_ui5_switch_text_semantic_accept_color)}.ui5-switch-root.ui5-switch--semantic .ui5-switch-icon-off,.ui5-switch-root.ui5-switch--semantic .ui5-switch-text--off{color:var(--_ui5_switch_text_semantic_reject_color)}.ui5-switch-root .ui5-switch-text--on{color:var(--_ui5_switch_text_active_color);overflow:var(--_ui5_switch_text_overflow);text-overflow:ellipsis}.ui5-switch-root .ui5-switch-text--off{color:var(--_ui5_switch_text_inactive_color);overflow:var(--_ui5_switch_text_overflow);text-overflow:ellipsis}.ui5-switch-root .ui5-switch-icon-on,.ui5-switch-root .ui5-switch-no-label-icon-on{color:var(--_ui5_switch_text_active_color)}.ui5-switch-root .ui5-switch-icon-off,.ui5-switch-root .ui5-switch-no-label-icon-off{color:var(--_ui5_switch_text_inactive_color)}[dir=rtl].ui5-switch-root.ui5-switch--checked:not(.ui5-switch--no-label):not(.ui5-switch--semantic) .ui5-switch-slider{transform:var(--_ui5_switch_rtl_transform_with_label)}[dir=rtl].ui5-switch-root.ui5-switch--checked .ui5-switch-slider{transform:var(--_ui5_switch_rtl_transform)}[dir=rtl].ui5-switch-root .ui5-switch-handle{left:auto;right:var(--_ui5_switch_handle_left)}[dir=rtl].ui5-switch-root .ui5-switch-text--on{right:var(--_ui5_switch_text_active_left);left:var(--_ui5_switch_text_active_right)}[dir=rtl].ui5-switch-root .ui5-switch-text--off{right:var(--_ui5_switch_text_inactive_left);left:var(--_ui5_switch_text_inactive_right)}"
  };
  _exports.default = _default;
});