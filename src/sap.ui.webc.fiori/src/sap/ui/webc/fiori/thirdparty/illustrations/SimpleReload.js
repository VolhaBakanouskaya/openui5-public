sap.ui.define(["exports", "sap/ui/webc/common/thirdparty/base/asset-registries/Illustrations", "./sapIllus-Dialog-SimpleReload", "./sapIllus-Scene-SimpleReload", "./sapIllus-Spot-SimpleReload", "../generated/i18n/i18n-defaults"], function (_exports, _Illustrations, _sapIllusDialogSimpleReload, _sapIllusSceneSimpleReload, _sapIllusSpotSimpleReload, _i18nDefaults) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "dialogSvg", {
    enumerable: true,
    get: function () {
      return _sapIllusDialogSimpleReload.default;
    }
  });
  Object.defineProperty(_exports, "sceneSvg", {
    enumerable: true,
    get: function () {
      return _sapIllusSceneSimpleReload.default;
    }
  });
  Object.defineProperty(_exports, "spotSvg", {
    enumerable: true,
    get: function () {
      return _sapIllusSpotSimpleReload.default;
    }
  });
  _sapIllusDialogSimpleReload = _interopRequireDefault(_sapIllusDialogSimpleReload);
  _sapIllusSceneSimpleReload = _interopRequireDefault(_sapIllusSceneSimpleReload);
  _sapIllusSpotSimpleReload = _interopRequireDefault(_sapIllusSpotSimpleReload);
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  const name = "SimpleReload";
  const set = "fiori";
  const title = _i18nDefaults.IM_TITLE_UNABLETOLOAD;
  const subtitle = _i18nDefaults.IM_SUBTITLE_UNABLETOLOAD;
  (0, _Illustrations.registerIllustration)(name, {
    dialogSvg: _sapIllusDialogSimpleReload.default,
    sceneSvg: _sapIllusSceneSimpleReload.default,
    spotSvg: _sapIllusSpotSimpleReload.default,
    title,
    subtitle,
    set
  });
});