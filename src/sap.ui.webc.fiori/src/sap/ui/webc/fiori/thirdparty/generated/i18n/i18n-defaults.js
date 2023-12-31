sap.ui.define(["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.UPLOADCOLLECTIONITEM_CANCELBUTTON_TEXT = _exports.TIMELINE_ARIA_LABEL = _exports.SIDE_NAVIGATION_POPOVER_HIDDEN_TEXT = _exports.SIDE_NAVIGATION_LIST_ITEMS_ARIA_ROLE_DESC = _exports.SIDE_NAVIGATION_LIST_ARIA_ROLE_DESC = _exports.SIDE_NAVIGATION_COLLAPSED_LIST_ITEMS_ARIA_ROLE_DESC = _exports.SIDE_NAVIGATION_COLLAPSED_LIST_ARIA_ROLE_DESC = _exports.SHELLBAR_SEARCH = _exports.SHELLBAR_PROFILE = _exports.SHELLBAR_PRODUCTS = _exports.SHELLBAR_OVERFLOW = _exports.SHELLBAR_NOTIFICATIONS = _exports.SHELLBAR_LOGO = _exports.SHELLBAR_LABEL = _exports.SHELLBAR_COPILOT = _exports.SHELLBAR_CANCEL = _exports.PRODUCT_SWITCH_CONTAINER_LABEL = _exports.NOTIFICATION_LIST_ITEM_UNREAD = _exports.NOTIFICATION_LIST_ITEM_TXT = _exports.NOTIFICATION_LIST_ITEM_SHOW_MORE = _exports.NOTIFICATION_LIST_ITEM_SHOW_LESS = _exports.NOTIFICATION_LIST_ITEM_READ = _exports.NOTIFICATION_LIST_ITEM_OVERLOW_BTN_TITLE = _exports.NOTIFICATION_LIST_ITEM_MEDIUM_PRIORITY_TXT = _exports.NOTIFICATION_LIST_ITEM_LOW_PRIORITY_TXT = _exports.NOTIFICATION_LIST_ITEM_HIGH_PRIORITY_TXT = _exports.NOTIFICATION_LIST_ITEM_CLOSE_BTN_TITLE = _exports.NOTIFICATION_LIST_GROUP_ITEM_TXT = _exports.NOTIFICATION_LIST_GROUP_ITEM_TOGGLE_BTN_EXPAND_TITLE = _exports.NOTIFICATION_LIST_GROUP_ITEM_TOGGLE_BTN_COLLAPSE_TITLE = _exports.NOTIFICATION_LIST_GROUP_ITEM_COUNTER_TXT = _exports.NOTIFICATION_LIST_GROUP_ITEM_CLOSE_BTN_TITLE = _exports.IM_TITLE_UPLOADTOCLOUD = _exports.IM_TITLE_UPLOADCOLLECTION = _exports.IM_TITLE_UNABLETOUPLOAD = _exports.IM_TITLE_UNABLETOLOADIMAGE = _exports.IM_TITLE_UNABLETOLOAD = _exports.IM_TITLE_SURVEY = _exports.IM_TITLE_SUCCESSSCREEN = _exports.IM_TITLE_SORTCOLUMN = _exports.IM_TITLE_RESIZECOLUMN = _exports.IM_TITLE_PAGENOTFOUND = _exports.IM_TITLE_NOTASKS = _exports.IM_TITLE_NOSEARCHRESULTS = _exports.IM_TITLE_NOSAVEDITEMS = _exports.IM_TITLE_NONOTIFICATIONS = _exports.IM_TITLE_NOMAIL = _exports.IM_TITLE_NOFILTERRESULTS = _exports.IM_TITLE_NOENTRIES = _exports.IM_TITLE_NODIMENSIONSSET = _exports.IM_TITLE_NODATA = _exports.IM_TITLE_NOCOLUMNSSET = _exports.IM_TITLE_NOACTIVITIES = _exports.IM_TITLE_GROUPTABLE = _exports.IM_TITLE_FILTERTABLE = _exports.IM_TITLE_EMPTYPLANNINGCALENDAR = _exports.IM_TITLE_BEFORESEARCH = _exports.IM_TITLE_BALLOONSKY = _exports.IM_TITLE_ADDPEOPLE = _exports.IM_TITLE_ADDDIMENSIONS = _exports.IM_TITLE_ADDCOLUMN = _exports.IM_SUBTITLE_UPLOADTOCLOUD = _exports.IM_SUBTITLE_UPLOADCOLLECTION = _exports.IM_SUBTITLE_UNABLETOUPLOAD = _exports.IM_SUBTITLE_UNABLETOLOADIMAGE = _exports.IM_SUBTITLE_UNABLETOLOAD = _exports.IM_SUBTITLE_SURVEY = _exports.IM_SUBTITLE_SUCCESSSCREEN = _exports.IM_SUBTITLE_SORTCOLUMN = _exports.IM_SUBTITLE_RESIZECOLUMN = _exports.IM_SUBTITLE_PAGENOTFOUND = _exports.IM_SUBTITLE_NOTASKS = _exports.IM_SUBTITLE_NOSEARCHRESULTS = _exports.IM_SUBTITLE_NOSAVEDITEMS = _exports.IM_SUBTITLE_NONOTIFICATIONS = _exports.IM_SUBTITLE_NOMAIL = _exports.IM_SUBTITLE_NOFILTERRESULTS = _exports.IM_SUBTITLE_NOENTRIES = _exports.IM_SUBTITLE_NODIMENSIONSSET = _exports.IM_SUBTITLE_NODATA = _exports.IM_SUBTITLE_NOCOLUMNSSET = _exports.IM_SUBTITLE_NOACTIVITIES = _exports.IM_SUBTITLE_GROUPTABLE = _exports.IM_SUBTITLE_FILTERTABLE = _exports.IM_SUBTITLE_EMPTYPLANNINGCALENDAR = _exports.IM_SUBTITLE_BEFORESEARCH = _exports.IM_SUBTITLE_BALLOONSKY = _exports.IM_SUBTITLE_ADDPEOPLE = _exports.IM_SUBTITLE_ADDDIMENSIONS = _exports.IM_SUBTITLE_ADDCOLUMN = _exports.FCL_START_COLUMN_TXT = _exports.FCL_START_COLUMN_EXPAND_BUTTON_TOOLTIP = _exports.FCL_START_COLUMN_COLLAPSE_BUTTON_TOOLTIP = _exports.FCL_MIDDLE_COLUMN_TXT = _exports.FCL_END_COLUMN_TXT = _exports.FCL_END_COLUMN_EXPAND_BUTTON_TOOLTIP = _exports.FCL_END_COLUMN_COLLAPSE_BUTTON_TOOLTIP = _exports.DSC_SIDE_ARIA_LABEL = _exports.BARCODE_SCANNER_DIALOG_LOADING_TXT = _exports.BARCODE_SCANNER_DIALOG_CANCEL_BUTTON_TXT = void 0;
  _exports.WIZARD_STEP_INACTIVE = _exports.WIZARD_STEP_ARIA_LABEL = _exports.WIZARD_STEP_ACTIVE = _exports.WIZARD_OPTIONAL_STEP_ARIA_LABEL = _exports.WIZARD_NAV_STEP_DEFAULT_HEADING = _exports.WIZARD_NAV_ARIA_ROLE_DESCRIPTION = _exports.WIZARD_NAV_ARIA_LABEL = _exports.WIZARD_LIST_ARIA_LABEL = _exports.WIZARD_LIST_ARIA_DESCRIBEDBY = _exports.WIZARD_ACTIONSHEET_STEPS_ARIA_LABEL = _exports.VSD_SUBMIT_BUTTON = _exports.VSD_SORT_ORDER = _exports.VSD_SORT_BY = _exports.VSD_RESET_BUTTON = _exports.VSD_ORDER_DESCENDING = _exports.VSD_ORDER_ASCENDING = _exports.VSD_FILTER_BY = _exports.VSD_DIALOG_TITLE_SORT = _exports.VSD_CANCEL_BUTTON = _exports.UPLOADCOLLECTION_NO_DATA_TEXT = _exports.UPLOADCOLLECTION_NO_DATA_DESCRIPTION = _exports.UPLOADCOLLECTION_DROP_FILE_INDICATOR = _exports.UPLOADCOLLECTION_DRAG_FILE_INDICATOR = _exports.UPLOADCOLLECTION_ARIA_ROLE_DESCRIPTION = _exports.UPLOADCOLLECTIONITEM_UPLOADING_STATE = _exports.UPLOADCOLLECTIONITEM_TERMINATE_BUTTON_TEXT = _exports.UPLOADCOLLECTIONITEM_RETRY_BUTTON_TEXT = _exports.UPLOADCOLLECTIONITEM_RENAMEBUTTON_TEXT = _exports.UPLOADCOLLECTIONITEM_READY_STATE = _exports.UPLOADCOLLECTIONITEM_ERROR_STATE = _exports.UPLOADCOLLECTIONITEM_EDIT_BUTTON_TEXT = void 0;
  const BARCODE_SCANNER_DIALOG_CANCEL_BUTTON_TXT = {
    key: "BARCODE_SCANNER_DIALOG_CANCEL_BUTTON_TXT",
    defaultText: "Cancel"
  };
  _exports.BARCODE_SCANNER_DIALOG_CANCEL_BUTTON_TXT = BARCODE_SCANNER_DIALOG_CANCEL_BUTTON_TXT;
  const BARCODE_SCANNER_DIALOG_LOADING_TXT = {
    key: "BARCODE_SCANNER_DIALOG_LOADING_TXT",
    defaultText: "Loading"
  };
  _exports.BARCODE_SCANNER_DIALOG_LOADING_TXT = BARCODE_SCANNER_DIALOG_LOADING_TXT;
  const FCL_START_COLUMN_TXT = {
    key: "FCL_START_COLUMN_TXT",
    defaultText: "First column"
  };
  _exports.FCL_START_COLUMN_TXT = FCL_START_COLUMN_TXT;
  const FCL_MIDDLE_COLUMN_TXT = {
    key: "FCL_MIDDLE_COLUMN_TXT",
    defaultText: "Middle column"
  };
  _exports.FCL_MIDDLE_COLUMN_TXT = FCL_MIDDLE_COLUMN_TXT;
  const FCL_END_COLUMN_TXT = {
    key: "FCL_END_COLUMN_TXT",
    defaultText: "Last column"
  };
  _exports.FCL_END_COLUMN_TXT = FCL_END_COLUMN_TXT;
  const FCL_START_COLUMN_EXPAND_BUTTON_TOOLTIP = {
    key: "FCL_START_COLUMN_EXPAND_BUTTON_TOOLTIP",
    defaultText: "Expand the first column"
  };
  _exports.FCL_START_COLUMN_EXPAND_BUTTON_TOOLTIP = FCL_START_COLUMN_EXPAND_BUTTON_TOOLTIP;
  const FCL_START_COLUMN_COLLAPSE_BUTTON_TOOLTIP = {
    key: "FCL_START_COLUMN_COLLAPSE_BUTTON_TOOLTIP",
    defaultText: "Collapse the first column"
  };
  _exports.FCL_START_COLUMN_COLLAPSE_BUTTON_TOOLTIP = FCL_START_COLUMN_COLLAPSE_BUTTON_TOOLTIP;
  const FCL_END_COLUMN_EXPAND_BUTTON_TOOLTIP = {
    key: "FCL_END_COLUMN_EXPAND_BUTTON_TOOLTIP",
    defaultText: "Expand the last column"
  };
  _exports.FCL_END_COLUMN_EXPAND_BUTTON_TOOLTIP = FCL_END_COLUMN_EXPAND_BUTTON_TOOLTIP;
  const FCL_END_COLUMN_COLLAPSE_BUTTON_TOOLTIP = {
    key: "FCL_END_COLUMN_COLLAPSE_BUTTON_TOOLTIP",
    defaultText: "Collapse the last column"
  };
  _exports.FCL_END_COLUMN_COLLAPSE_BUTTON_TOOLTIP = FCL_END_COLUMN_COLLAPSE_BUTTON_TOOLTIP;
  const NOTIFICATION_LIST_ITEM_TXT = {
    key: "NOTIFICATION_LIST_ITEM_TXT",
    defaultText: "Notification"
  };
  _exports.NOTIFICATION_LIST_ITEM_TXT = NOTIFICATION_LIST_ITEM_TXT;
  const NOTIFICATION_LIST_ITEM_SHOW_MORE = {
    key: "NOTIFICATION_LIST_ITEM_SHOW_MORE",
    defaultText: "Show More"
  };
  _exports.NOTIFICATION_LIST_ITEM_SHOW_MORE = NOTIFICATION_LIST_ITEM_SHOW_MORE;
  const NOTIFICATION_LIST_ITEM_SHOW_LESS = {
    key: "NOTIFICATION_LIST_ITEM_SHOW_LESS",
    defaultText: "Show Less"
  };
  _exports.NOTIFICATION_LIST_ITEM_SHOW_LESS = NOTIFICATION_LIST_ITEM_SHOW_LESS;
  const NOTIFICATION_LIST_ITEM_OVERLOW_BTN_TITLE = {
    key: "NOTIFICATION_LIST_ITEM_OVERLOW_BTN_TITLE",
    defaultText: "More"
  };
  _exports.NOTIFICATION_LIST_ITEM_OVERLOW_BTN_TITLE = NOTIFICATION_LIST_ITEM_OVERLOW_BTN_TITLE;
  const NOTIFICATION_LIST_ITEM_CLOSE_BTN_TITLE = {
    key: "NOTIFICATION_LIST_ITEM_CLOSE_BTN_TITLE",
    defaultText: "Close"
  };
  _exports.NOTIFICATION_LIST_ITEM_CLOSE_BTN_TITLE = NOTIFICATION_LIST_ITEM_CLOSE_BTN_TITLE;
  const NOTIFICATION_LIST_ITEM_READ = {
    key: "NOTIFICATION_LIST_ITEM_READ",
    defaultText: "read"
  };
  _exports.NOTIFICATION_LIST_ITEM_READ = NOTIFICATION_LIST_ITEM_READ;
  const NOTIFICATION_LIST_ITEM_UNREAD = {
    key: "NOTIFICATION_LIST_ITEM_UNREAD",
    defaultText: "unread"
  };
  _exports.NOTIFICATION_LIST_ITEM_UNREAD = NOTIFICATION_LIST_ITEM_UNREAD;
  const NOTIFICATION_LIST_ITEM_HIGH_PRIORITY_TXT = {
    key: "NOTIFICATION_LIST_ITEM_HIGH_PRIORITY_TXT",
    defaultText: "High Priority"
  };
  _exports.NOTIFICATION_LIST_ITEM_HIGH_PRIORITY_TXT = NOTIFICATION_LIST_ITEM_HIGH_PRIORITY_TXT;
  const NOTIFICATION_LIST_ITEM_MEDIUM_PRIORITY_TXT = {
    key: "NOTIFICATION_LIST_ITEM_MEDIUM_PRIORITY_TXT",
    defaultText: "Medium Priority"
  };
  _exports.NOTIFICATION_LIST_ITEM_MEDIUM_PRIORITY_TXT = NOTIFICATION_LIST_ITEM_MEDIUM_PRIORITY_TXT;
  const NOTIFICATION_LIST_ITEM_LOW_PRIORITY_TXT = {
    key: "NOTIFICATION_LIST_ITEM_LOW_PRIORITY_TXT",
    defaultText: "Low Priority"
  };
  _exports.NOTIFICATION_LIST_ITEM_LOW_PRIORITY_TXT = NOTIFICATION_LIST_ITEM_LOW_PRIORITY_TXT;
  const NOTIFICATION_LIST_GROUP_ITEM_TXT = {
    key: "NOTIFICATION_LIST_GROUP_ITEM_TXT",
    defaultText: "Notification group"
  };
  _exports.NOTIFICATION_LIST_GROUP_ITEM_TXT = NOTIFICATION_LIST_GROUP_ITEM_TXT;
  const NOTIFICATION_LIST_GROUP_ITEM_COUNTER_TXT = {
    key: "NOTIFICATION_LIST_GROUP_ITEM_COUNTER_TXT",
    defaultText: "Counter"
  };
  _exports.NOTIFICATION_LIST_GROUP_ITEM_COUNTER_TXT = NOTIFICATION_LIST_GROUP_ITEM_COUNTER_TXT;
  const NOTIFICATION_LIST_GROUP_ITEM_CLOSE_BTN_TITLE = {
    key: "NOTIFICATION_LIST_GROUP_ITEM_CLOSE_BTN_TITLE",
    defaultText: "Close All"
  };
  _exports.NOTIFICATION_LIST_GROUP_ITEM_CLOSE_BTN_TITLE = NOTIFICATION_LIST_GROUP_ITEM_CLOSE_BTN_TITLE;
  const NOTIFICATION_LIST_GROUP_ITEM_TOGGLE_BTN_COLLAPSE_TITLE = {
    key: "NOTIFICATION_LIST_GROUP_ITEM_TOGGLE_BTN_COLLAPSE_TITLE",
    defaultText: "Collapse Group"
  };
  _exports.NOTIFICATION_LIST_GROUP_ITEM_TOGGLE_BTN_COLLAPSE_TITLE = NOTIFICATION_LIST_GROUP_ITEM_TOGGLE_BTN_COLLAPSE_TITLE;
  const NOTIFICATION_LIST_GROUP_ITEM_TOGGLE_BTN_EXPAND_TITLE = {
    key: "NOTIFICATION_LIST_GROUP_ITEM_TOGGLE_BTN_EXPAND_TITLE",
    defaultText: "Expand Group"
  };
  _exports.NOTIFICATION_LIST_GROUP_ITEM_TOGGLE_BTN_EXPAND_TITLE = NOTIFICATION_LIST_GROUP_ITEM_TOGGLE_BTN_EXPAND_TITLE;
  const TIMELINE_ARIA_LABEL = {
    key: "TIMELINE_ARIA_LABEL",
    defaultText: "Timeline"
  };
  _exports.TIMELINE_ARIA_LABEL = TIMELINE_ARIA_LABEL;
  const UPLOADCOLLECTIONITEM_CANCELBUTTON_TEXT = {
    key: "UPLOADCOLLECTIONITEM_CANCELBUTTON_TEXT",
    defaultText: "Cancel"
  };
  _exports.UPLOADCOLLECTIONITEM_CANCELBUTTON_TEXT = UPLOADCOLLECTIONITEM_CANCELBUTTON_TEXT;
  const UPLOADCOLLECTIONITEM_RENAMEBUTTON_TEXT = {
    key: "UPLOADCOLLECTIONITEM_RENAMEBUTTON_TEXT",
    defaultText: "Rename"
  };
  _exports.UPLOADCOLLECTIONITEM_RENAMEBUTTON_TEXT = UPLOADCOLLECTIONITEM_RENAMEBUTTON_TEXT;
  const UPLOADCOLLECTIONITEM_ERROR_STATE = {
    key: "UPLOADCOLLECTIONITEM_ERROR_STATE",
    defaultText: "Terminated"
  };
  _exports.UPLOADCOLLECTIONITEM_ERROR_STATE = UPLOADCOLLECTIONITEM_ERROR_STATE;
  const UPLOADCOLLECTIONITEM_READY_STATE = {
    key: "UPLOADCOLLECTIONITEM_READY_STATE",
    defaultText: "Pending"
  };
  _exports.UPLOADCOLLECTIONITEM_READY_STATE = UPLOADCOLLECTIONITEM_READY_STATE;
  const UPLOADCOLLECTIONITEM_UPLOADING_STATE = {
    key: "UPLOADCOLLECTIONITEM_UPLOADING_STATE",
    defaultText: "Uploading"
  };
  _exports.UPLOADCOLLECTIONITEM_UPLOADING_STATE = UPLOADCOLLECTIONITEM_UPLOADING_STATE;
  const UPLOADCOLLECTIONITEM_TERMINATE_BUTTON_TEXT = {
    key: "UPLOADCOLLECTIONITEM_TERMINATE_BUTTON_TEXT",
    defaultText: "Terminate"
  };
  _exports.UPLOADCOLLECTIONITEM_TERMINATE_BUTTON_TEXT = UPLOADCOLLECTIONITEM_TERMINATE_BUTTON_TEXT;
  const UPLOADCOLLECTIONITEM_RETRY_BUTTON_TEXT = {
    key: "UPLOADCOLLECTIONITEM_RETRY_BUTTON_TEXT",
    defaultText: "Retry"
  };
  _exports.UPLOADCOLLECTIONITEM_RETRY_BUTTON_TEXT = UPLOADCOLLECTIONITEM_RETRY_BUTTON_TEXT;
  const UPLOADCOLLECTIONITEM_EDIT_BUTTON_TEXT = {
    key: "UPLOADCOLLECTIONITEM_EDIT_BUTTON_TEXT",
    defaultText: "Edit"
  };
  _exports.UPLOADCOLLECTIONITEM_EDIT_BUTTON_TEXT = UPLOADCOLLECTIONITEM_EDIT_BUTTON_TEXT;
  const UPLOADCOLLECTION_NO_DATA_TEXT = {
    key: "UPLOADCOLLECTION_NO_DATA_TEXT",
    defaultText: "No files found"
  };
  _exports.UPLOADCOLLECTION_NO_DATA_TEXT = UPLOADCOLLECTION_NO_DATA_TEXT;
  const UPLOADCOLLECTION_NO_DATA_DESCRIPTION = {
    key: "UPLOADCOLLECTION_NO_DATA_DESCRIPTION",
    defaultText: "Drop files to upload, or use the Upload button."
  };
  _exports.UPLOADCOLLECTION_NO_DATA_DESCRIPTION = UPLOADCOLLECTION_NO_DATA_DESCRIPTION;
  const UPLOADCOLLECTION_ARIA_ROLE_DESCRIPTION = {
    key: "UPLOADCOLLECTION_ARIA_ROLE_DESCRIPTION",
    defaultText: "Upload collection"
  };
  _exports.UPLOADCOLLECTION_ARIA_ROLE_DESCRIPTION = UPLOADCOLLECTION_ARIA_ROLE_DESCRIPTION;
  const UPLOADCOLLECTION_DRAG_FILE_INDICATOR = {
    key: "UPLOADCOLLECTION_DRAG_FILE_INDICATOR",
    defaultText: "Drag files here"
  };
  _exports.UPLOADCOLLECTION_DRAG_FILE_INDICATOR = UPLOADCOLLECTION_DRAG_FILE_INDICATOR;
  const UPLOADCOLLECTION_DROP_FILE_INDICATOR = {
    key: "UPLOADCOLLECTION_DROP_FILE_INDICATOR",
    defaultText: "Drop files to upload"
  };
  _exports.UPLOADCOLLECTION_DROP_FILE_INDICATOR = UPLOADCOLLECTION_DROP_FILE_INDICATOR;
  const SHELLBAR_LABEL = {
    key: "SHELLBAR_LABEL",
    defaultText: "Shell Bar"
  };
  _exports.SHELLBAR_LABEL = SHELLBAR_LABEL;
  const SHELLBAR_LOGO = {
    key: "SHELLBAR_LOGO",
    defaultText: "Logo"
  };
  _exports.SHELLBAR_LOGO = SHELLBAR_LOGO;
  const SHELLBAR_COPILOT = {
    key: "SHELLBAR_COPILOT",
    defaultText: "CoPilot"
  };
  _exports.SHELLBAR_COPILOT = SHELLBAR_COPILOT;
  const SHELLBAR_NOTIFICATIONS = {
    key: "SHELLBAR_NOTIFICATIONS",
    defaultText: "{0} Notifications"
  };
  _exports.SHELLBAR_NOTIFICATIONS = SHELLBAR_NOTIFICATIONS;
  const SHELLBAR_PROFILE = {
    key: "SHELLBAR_PROFILE",
    defaultText: "Profile"
  };
  _exports.SHELLBAR_PROFILE = SHELLBAR_PROFILE;
  const SHELLBAR_PRODUCTS = {
    key: "SHELLBAR_PRODUCTS",
    defaultText: "Products"
  };
  _exports.SHELLBAR_PRODUCTS = SHELLBAR_PRODUCTS;
  const PRODUCT_SWITCH_CONTAINER_LABEL = {
    key: "PRODUCT_SWITCH_CONTAINER_LABEL",
    defaultText: "Products"
  };
  _exports.PRODUCT_SWITCH_CONTAINER_LABEL = PRODUCT_SWITCH_CONTAINER_LABEL;
  const SHELLBAR_SEARCH = {
    key: "SHELLBAR_SEARCH",
    defaultText: "Search"
  };
  _exports.SHELLBAR_SEARCH = SHELLBAR_SEARCH;
  const SHELLBAR_OVERFLOW = {
    key: "SHELLBAR_OVERFLOW",
    defaultText: "More"
  };
  _exports.SHELLBAR_OVERFLOW = SHELLBAR_OVERFLOW;
  const SHELLBAR_CANCEL = {
    key: "SHELLBAR_CANCEL",
    defaultText: "Cancel"
  };
  _exports.SHELLBAR_CANCEL = SHELLBAR_CANCEL;
  const WIZARD_NAV_ARIA_LABEL = {
    key: "WIZARD_NAV_ARIA_LABEL",
    defaultText: "Wizard Progress Bar"
  };
  _exports.WIZARD_NAV_ARIA_LABEL = WIZARD_NAV_ARIA_LABEL;
  const WIZARD_LIST_ARIA_LABEL = {
    key: "WIZARD_LIST_ARIA_LABEL",
    defaultText: "Wizard Steps"
  };
  _exports.WIZARD_LIST_ARIA_LABEL = WIZARD_LIST_ARIA_LABEL;
  const WIZARD_LIST_ARIA_DESCRIBEDBY = {
    key: "WIZARD_LIST_ARIA_DESCRIBEDBY",
    defaultText: "To activate press space bar or enter"
  };
  _exports.WIZARD_LIST_ARIA_DESCRIBEDBY = WIZARD_LIST_ARIA_DESCRIBEDBY;
  const WIZARD_ACTIONSHEET_STEPS_ARIA_LABEL = {
    key: "WIZARD_ACTIONSHEET_STEPS_ARIA_LABEL",
    defaultText: "Steps"
  };
  _exports.WIZARD_ACTIONSHEET_STEPS_ARIA_LABEL = WIZARD_ACTIONSHEET_STEPS_ARIA_LABEL;
  const WIZARD_OPTIONAL_STEP_ARIA_LABEL = {
    key: "WIZARD_OPTIONAL_STEP_ARIA_LABEL",
    defaultText: "Optional"
  };
  _exports.WIZARD_OPTIONAL_STEP_ARIA_LABEL = WIZARD_OPTIONAL_STEP_ARIA_LABEL;
  const WIZARD_STEP_ACTIVE = {
    key: "WIZARD_STEP_ACTIVE",
    defaultText: "Active"
  };
  _exports.WIZARD_STEP_ACTIVE = WIZARD_STEP_ACTIVE;
  const WIZARD_STEP_INACTIVE = {
    key: "WIZARD_STEP_INACTIVE",
    defaultText: "Inactive"
  };
  _exports.WIZARD_STEP_INACTIVE = WIZARD_STEP_INACTIVE;
  const WIZARD_STEP_ARIA_LABEL = {
    key: "WIZARD_STEP_ARIA_LABEL",
    defaultText: "Step {0}"
  };
  _exports.WIZARD_STEP_ARIA_LABEL = WIZARD_STEP_ARIA_LABEL;
  const WIZARD_NAV_ARIA_ROLE_DESCRIPTION = {
    key: "WIZARD_NAV_ARIA_ROLE_DESCRIPTION",
    defaultText: "Wizard"
  };
  _exports.WIZARD_NAV_ARIA_ROLE_DESCRIPTION = WIZARD_NAV_ARIA_ROLE_DESCRIPTION;
  const WIZARD_NAV_STEP_DEFAULT_HEADING = {
    key: "WIZARD_NAV_STEP_DEFAULT_HEADING",
    defaultText: "Step"
  };
  _exports.WIZARD_NAV_STEP_DEFAULT_HEADING = WIZARD_NAV_STEP_DEFAULT_HEADING;
  const VSD_DIALOG_TITLE_SORT = {
    key: "VSD_DIALOG_TITLE_SORT",
    defaultText: "View Settings"
  };
  _exports.VSD_DIALOG_TITLE_SORT = VSD_DIALOG_TITLE_SORT;
  const VSD_SUBMIT_BUTTON = {
    key: "VSD_SUBMIT_BUTTON",
    defaultText: "OK"
  };
  _exports.VSD_SUBMIT_BUTTON = VSD_SUBMIT_BUTTON;
  const VSD_CANCEL_BUTTON = {
    key: "VSD_CANCEL_BUTTON",
    defaultText: "Cancel"
  };
  _exports.VSD_CANCEL_BUTTON = VSD_CANCEL_BUTTON;
  const VSD_RESET_BUTTON = {
    key: "VSD_RESET_BUTTON",
    defaultText: "Reset"
  };
  _exports.VSD_RESET_BUTTON = VSD_RESET_BUTTON;
  const VSD_SORT_ORDER = {
    key: "VSD_SORT_ORDER",
    defaultText: "Sort Order"
  };
  _exports.VSD_SORT_ORDER = VSD_SORT_ORDER;
  const VSD_FILTER_BY = {
    key: "VSD_FILTER_BY",
    defaultText: "Filter By"
  };
  _exports.VSD_FILTER_BY = VSD_FILTER_BY;
  const VSD_SORT_BY = {
    key: "VSD_SORT_BY",
    defaultText: "Sort By"
  };
  _exports.VSD_SORT_BY = VSD_SORT_BY;
  const VSD_ORDER_ASCENDING = {
    key: "VSD_ORDER_ASCENDING",
    defaultText: "Ascending"
  };
  _exports.VSD_ORDER_ASCENDING = VSD_ORDER_ASCENDING;
  const VSD_ORDER_DESCENDING = {
    key: "VSD_ORDER_DESCENDING",
    defaultText: "Descending"
  };
  _exports.VSD_ORDER_DESCENDING = VSD_ORDER_DESCENDING;
  const IM_TITLE_BEFORESEARCH = {
    key: "IM_TITLE_BEFORESEARCH",
    defaultText: "Let''s get some results"
  };
  _exports.IM_TITLE_BEFORESEARCH = IM_TITLE_BEFORESEARCH;
  const IM_SUBTITLE_BEFORESEARCH = {
    key: "IM_SUBTITLE_BEFORESEARCH",
    defaultText: "Start by providing your search criteria."
  };
  _exports.IM_SUBTITLE_BEFORESEARCH = IM_SUBTITLE_BEFORESEARCH;
  const IM_TITLE_NOACTIVITIES = {
    key: "IM_TITLE_NOACTIVITIES",
    defaultText: "You''ve not added any activities yet"
  };
  _exports.IM_TITLE_NOACTIVITIES = IM_TITLE_NOACTIVITIES;
  const IM_SUBTITLE_NOACTIVITIES = {
    key: "IM_SUBTITLE_NOACTIVITIES",
    defaultText: "Would you like to add one now?"
  };
  _exports.IM_SUBTITLE_NOACTIVITIES = IM_SUBTITLE_NOACTIVITIES;
  const IM_TITLE_NOCOLUMNSSET = {
    key: "IM_TITLE_NOCOLUMNSSET",
    defaultText: "Add columns to see the content"
  };
  _exports.IM_TITLE_NOCOLUMNSSET = IM_TITLE_NOCOLUMNSSET;
  const IM_SUBTITLE_NOCOLUMNSSET = {
    key: "IM_SUBTITLE_NOCOLUMNSSET",
    defaultText: "Select the columns you need in the table settings."
  };
  _exports.IM_SUBTITLE_NOCOLUMNSSET = IM_SUBTITLE_NOCOLUMNSSET;
  const IM_TITLE_NODATA = {
    key: "IM_TITLE_NODATA",
    defaultText: "There''s no data yet"
  };
  _exports.IM_TITLE_NODATA = IM_TITLE_NODATA;
  const IM_SUBTITLE_NODATA = {
    key: "IM_SUBTITLE_NODATA",
    defaultText: "When there is, you''ll see it here."
  };
  _exports.IM_SUBTITLE_NODATA = IM_SUBTITLE_NODATA;
  const IM_TITLE_NOMAIL = {
    key: "IM_TITLE_NOMAIL",
    defaultText: "No new mail"
  };
  _exports.IM_TITLE_NOMAIL = IM_TITLE_NOMAIL;
  const IM_SUBTITLE_NOMAIL = {
    key: "IM_SUBTITLE_NOMAIL",
    defaultText: "Check back again later."
  };
  _exports.IM_SUBTITLE_NOMAIL = IM_SUBTITLE_NOMAIL;
  const IM_TITLE_NOENTRIES = {
    key: "IM_TITLE_NOENTRIES",
    defaultText: "There are no entries yet"
  };
  _exports.IM_TITLE_NOENTRIES = IM_TITLE_NOENTRIES;
  const IM_SUBTITLE_NOENTRIES = {
    key: "IM_SUBTITLE_NOENTRIES",
    defaultText: "When there are, you''ll see them here."
  };
  _exports.IM_SUBTITLE_NOENTRIES = IM_SUBTITLE_NOENTRIES;
  const IM_TITLE_NONOTIFICATIONS = {
    key: "IM_TITLE_NONOTIFICATIONS",
    defaultText: "You''ve no new notifications"
  };
  _exports.IM_TITLE_NONOTIFICATIONS = IM_TITLE_NONOTIFICATIONS;
  const IM_SUBTITLE_NONOTIFICATIONS = {
    key: "IM_SUBTITLE_NONOTIFICATIONS",
    defaultText: "Check back again later."
  };
  _exports.IM_SUBTITLE_NONOTIFICATIONS = IM_SUBTITLE_NONOTIFICATIONS;
  const IM_TITLE_NOSAVEDITEMS = {
    key: "IM_TITLE_NOSAVEDITEMS",
    defaultText: "You''ve not added any favorites yet"
  };
  _exports.IM_TITLE_NOSAVEDITEMS = IM_TITLE_NOSAVEDITEMS;
  const IM_SUBTITLE_NOSAVEDITEMS = {
    key: "IM_SUBTITLE_NOSAVEDITEMS",
    defaultText: "Would you like to create a list of your favorite items now?"
  };
  _exports.IM_SUBTITLE_NOSAVEDITEMS = IM_SUBTITLE_NOSAVEDITEMS;
  const IM_TITLE_NOSEARCHRESULTS = {
    key: "IM_TITLE_NOSEARCHRESULTS",
    defaultText: "No results found"
  };
  _exports.IM_TITLE_NOSEARCHRESULTS = IM_TITLE_NOSEARCHRESULTS;
  const IM_SUBTITLE_NOSEARCHRESULTS = {
    key: "IM_SUBTITLE_NOSEARCHRESULTS",
    defaultText: "Try changing your search criteria."
  };
  _exports.IM_SUBTITLE_NOSEARCHRESULTS = IM_SUBTITLE_NOSEARCHRESULTS;
  const IM_TITLE_NOTASKS = {
    key: "IM_TITLE_NOTASKS",
    defaultText: "You''ve no new tasks"
  };
  _exports.IM_TITLE_NOTASKS = IM_TITLE_NOTASKS;
  const IM_SUBTITLE_NOTASKS = {
    key: "IM_SUBTITLE_NOTASKS",
    defaultText: "When you do, you''ll see them here."
  };
  _exports.IM_SUBTITLE_NOTASKS = IM_SUBTITLE_NOTASKS;
  const IM_TITLE_UNABLETOLOAD = {
    key: "IM_TITLE_UNABLETOLOAD",
    defaultText: "Unable to load data"
  };
  _exports.IM_TITLE_UNABLETOLOAD = IM_TITLE_UNABLETOLOAD;
  const IM_SUBTITLE_UNABLETOLOAD = {
    key: "IM_SUBTITLE_UNABLETOLOAD",
    defaultText: "Check your internet connection. If that''s not it, try reloading. If that still doesn''t help, check with your administrator."
  };
  _exports.IM_SUBTITLE_UNABLETOLOAD = IM_SUBTITLE_UNABLETOLOAD;
  const IM_TITLE_UNABLETOLOADIMAGE = {
    key: "IM_TITLE_UNABLETOLOADIMAGE",
    defaultText: "Unable to load image"
  };
  _exports.IM_TITLE_UNABLETOLOADIMAGE = IM_TITLE_UNABLETOLOADIMAGE;
  const IM_SUBTITLE_UNABLETOLOADIMAGE = {
    key: "IM_SUBTITLE_UNABLETOLOADIMAGE",
    defaultText: "We couldn''t find the image at the specified location, or the server isn''t responding."
  };
  _exports.IM_SUBTITLE_UNABLETOLOADIMAGE = IM_SUBTITLE_UNABLETOLOADIMAGE;
  const IM_TITLE_UNABLETOUPLOAD = {
    key: "IM_TITLE_UNABLETOUPLOAD",
    defaultText: "Unable to upload data"
  };
  _exports.IM_TITLE_UNABLETOUPLOAD = IM_TITLE_UNABLETOUPLOAD;
  const IM_SUBTITLE_UNABLETOUPLOAD = {
    key: "IM_SUBTITLE_UNABLETOUPLOAD",
    defaultText: "Check your internet connection. If that''s not it, check the file format and file size. Otherwise, contact your administrator."
  };
  _exports.IM_SUBTITLE_UNABLETOUPLOAD = IM_SUBTITLE_UNABLETOUPLOAD;
  const IM_TITLE_UPLOADTOCLOUD = {
    key: "IM_TITLE_UPLOADTOCLOUD",
    defaultText: "Migrate to SAP Integration Suite"
  };
  _exports.IM_TITLE_UPLOADTOCLOUD = IM_TITLE_UPLOADTOCLOUD;
  const IM_SUBTITLE_UPLOADTOCLOUD = {
    key: "IM_SUBTITLE_UPLOADTOCLOUD",
    defaultText: "Move your integration content from the existing Process Integration subscription to the Cloud Integration capability."
  };
  _exports.IM_SUBTITLE_UPLOADTOCLOUD = IM_SUBTITLE_UPLOADTOCLOUD;
  const IM_TITLE_ADDCOLUMN = {
    key: "IM_TITLE_ADDCOLUMN",
    defaultText: "Looks like there''s free space"
  };
  _exports.IM_TITLE_ADDCOLUMN = IM_TITLE_ADDCOLUMN;
  const IM_SUBTITLE_ADDCOLUMN = {
    key: "IM_SUBTITLE_ADDCOLUMN",
    defaultText: "You can add more columns in the table settings."
  };
  _exports.IM_SUBTITLE_ADDCOLUMN = IM_SUBTITLE_ADDCOLUMN;
  const IM_TITLE_ADDPEOPLE = {
    key: "IM_TITLE_ADDPEOPLE",
    defaultText: "You''ve not added anyone to the calendar yet"
  };
  _exports.IM_TITLE_ADDPEOPLE = IM_TITLE_ADDPEOPLE;
  const IM_SUBTITLE_ADDPEOPLE = {
    key: "IM_SUBTITLE_ADDPEOPLE",
    defaultText: "Do you want to add someone now?"
  };
  _exports.IM_SUBTITLE_ADDPEOPLE = IM_SUBTITLE_ADDPEOPLE;
  const IM_TITLE_BALLOONSKY = {
    key: "IM_TITLE_BALLOONSKY",
    defaultText: "You''ve been appreciated!"
  };
  _exports.IM_TITLE_BALLOONSKY = IM_TITLE_BALLOONSKY;
  const IM_SUBTITLE_BALLOONSKY = {
    key: "IM_SUBTITLE_BALLOONSKY",
    defaultText: "Keep up the great work!"
  };
  _exports.IM_SUBTITLE_BALLOONSKY = IM_SUBTITLE_BALLOONSKY;
  const IM_TITLE_EMPTYPLANNINGCALENDAR = {
    key: "IM_TITLE_EMPTYPLANNINGCALENDAR",
    defaultText: "Nothing planned yet"
  };
  _exports.IM_TITLE_EMPTYPLANNINGCALENDAR = IM_TITLE_EMPTYPLANNINGCALENDAR;
  const IM_SUBTITLE_EMPTYPLANNINGCALENDAR = {
    key: "IM_SUBTITLE_EMPTYPLANNINGCALENDAR",
    defaultText: "There are no activities in this time frame."
  };
  _exports.IM_SUBTITLE_EMPTYPLANNINGCALENDAR = IM_SUBTITLE_EMPTYPLANNINGCALENDAR;
  const IM_TITLE_FILTERTABLE = {
    key: "IM_TITLE_FILTERTABLE",
    defaultText: "Filter options are available"
  };
  _exports.IM_TITLE_FILTERTABLE = IM_TITLE_FILTERTABLE;
  const IM_SUBTITLE_FILTERTABLE = {
    key: "IM_SUBTITLE_FILTERTABLE",
    defaultText: "Filters help you focus on what''s most relevant for you."
  };
  _exports.IM_SUBTITLE_FILTERTABLE = IM_SUBTITLE_FILTERTABLE;
  const IM_TITLE_GROUPTABLE = {
    key: "IM_TITLE_GROUPTABLE",
    defaultText: "Try grouping items for a better overview"
  };
  _exports.IM_TITLE_GROUPTABLE = IM_TITLE_GROUPTABLE;
  const IM_SUBTITLE_GROUPTABLE = {
    key: "IM_SUBTITLE_GROUPTABLE",
    defaultText: "You can choose grouping categories in the group settings."
  };
  _exports.IM_SUBTITLE_GROUPTABLE = IM_SUBTITLE_GROUPTABLE;
  const IM_TITLE_NOFILTERRESULTS = {
    key: "IM_TITLE_NOFILTERRESULTS",
    defaultText: "No results found"
  };
  _exports.IM_TITLE_NOFILTERRESULTS = IM_TITLE_NOFILTERRESULTS;
  const IM_SUBTITLE_NOFILTERRESULTS = {
    key: "IM_SUBTITLE_NOFILTERRESULTS",
    defaultText: "Try adjusting your filter criteria."
  };
  _exports.IM_SUBTITLE_NOFILTERRESULTS = IM_SUBTITLE_NOFILTERRESULTS;
  const IM_TITLE_PAGENOTFOUND = {
    key: "IM_TITLE_PAGENOTFOUND",
    defaultText: "Sorry, we can''t find this page"
  };
  _exports.IM_TITLE_PAGENOTFOUND = IM_TITLE_PAGENOTFOUND;
  const IM_SUBTITLE_PAGENOTFOUND = {
    key: "IM_SUBTITLE_PAGENOTFOUND",
    defaultText: "Please check the URL you are using to call the app."
  };
  _exports.IM_SUBTITLE_PAGENOTFOUND = IM_SUBTITLE_PAGENOTFOUND;
  const IM_TITLE_RESIZECOLUMN = {
    key: "IM_TITLE_RESIZECOLUMN",
    defaultText: "Choose your own column width"
  };
  _exports.IM_TITLE_RESIZECOLUMN = IM_TITLE_RESIZECOLUMN;
  const IM_SUBTITLE_RESIZECOLUMN = {
    key: "IM_SUBTITLE_RESIZECOLUMN",
    defaultText: "You can resize columns by dragging the column borders."
  };
  _exports.IM_SUBTITLE_RESIZECOLUMN = IM_SUBTITLE_RESIZECOLUMN;
  const IM_TITLE_SORTCOLUMN = {
    key: "IM_TITLE_SORTCOLUMN",
    defaultText: "Not seeing the most important items first?"
  };
  _exports.IM_TITLE_SORTCOLUMN = IM_TITLE_SORTCOLUMN;
  const IM_SUBTITLE_SORTCOLUMN = {
    key: "IM_SUBTITLE_SORTCOLUMN",
    defaultText: "Choose the sort criteria in the sort settings."
  };
  _exports.IM_SUBTITLE_SORTCOLUMN = IM_SUBTITLE_SORTCOLUMN;
  const IM_TITLE_SUCCESSSCREEN = {
    key: "IM_TITLE_SUCCESSSCREEN",
    defaultText: "Nicely done!"
  };
  _exports.IM_TITLE_SUCCESSSCREEN = IM_TITLE_SUCCESSSCREEN;
  const IM_SUBTITLE_SUCCESSSCREEN = {
    key: "IM_SUBTITLE_SUCCESSSCREEN",
    defaultText: "You completed all your learning assignments."
  };
  _exports.IM_SUBTITLE_SUCCESSSCREEN = IM_SUBTITLE_SUCCESSSCREEN;
  const IM_TITLE_UPLOADCOLLECTION = {
    key: "IM_TITLE_UPLOADCOLLECTION",
    defaultText: "Drop files here"
  };
  _exports.IM_TITLE_UPLOADCOLLECTION = IM_TITLE_UPLOADCOLLECTION;
  const IM_SUBTITLE_UPLOADCOLLECTION = {
    key: "IM_SUBTITLE_UPLOADCOLLECTION",
    defaultText: "You can also upload several files at once."
  };
  _exports.IM_SUBTITLE_UPLOADCOLLECTION = IM_SUBTITLE_UPLOADCOLLECTION;
  const IM_TITLE_ADDDIMENSIONS = {
    key: "IM_TITLE_ADDDIMENSIONS",
    defaultText: "Some dimensions are missing"
  };
  _exports.IM_TITLE_ADDDIMENSIONS = IM_TITLE_ADDDIMENSIONS;
  const IM_SUBTITLE_ADDDIMENSIONS = {
    key: "IM_SUBTITLE_ADDDIMENSIONS",
    defaultText: "Add more dimensions to complete your chart."
  };
  _exports.IM_SUBTITLE_ADDDIMENSIONS = IM_SUBTITLE_ADDDIMENSIONS;
  const IM_TITLE_NODIMENSIONSSET = {
    key: "IM_TITLE_NODIMENSIONSSET",
    defaultText: "No Chart Data"
  };
  _exports.IM_TITLE_NODIMENSIONSSET = IM_TITLE_NODIMENSIONSSET;
  const IM_SUBTITLE_NODIMENSIONSSET = {
    key: "IM_SUBTITLE_NODIMENSIONSSET",
    defaultText: "Try adjusting your chart settings."
  };
  _exports.IM_SUBTITLE_NODIMENSIONSSET = IM_SUBTITLE_NODIMENSIONSSET;
  const IM_TITLE_SURVEY = {
    key: "IM_TITLE_SURVEY",
    defaultText: "Your Opinion Matters"
  };
  _exports.IM_TITLE_SURVEY = IM_TITLE_SURVEY;
  const IM_SUBTITLE_SURVEY = {
    key: "IM_SUBTITLE_SURVEY",
    defaultText: "We want to hear what you think about SAP software. Share your feedback with us by taking our short survey. It will only take a few minutes."
  };
  _exports.IM_SUBTITLE_SURVEY = IM_SUBTITLE_SURVEY;
  const DSC_SIDE_ARIA_LABEL = {
    key: "DSC_SIDE_ARIA_LABEL",
    defaultText: "Side Content"
  };
  _exports.DSC_SIDE_ARIA_LABEL = DSC_SIDE_ARIA_LABEL;
  const SIDE_NAVIGATION_POPOVER_HIDDEN_TEXT = {
    key: "SIDE_NAVIGATION_POPOVER_HIDDEN_TEXT",
    defaultText: "Navigation"
  };
  _exports.SIDE_NAVIGATION_POPOVER_HIDDEN_TEXT = SIDE_NAVIGATION_POPOVER_HIDDEN_TEXT;
  const SIDE_NAVIGATION_COLLAPSED_LIST_ARIA_ROLE_DESC = {
    key: "SIDE_NAVIGATION_COLLAPSED_LIST_ARIA_ROLE_DESC",
    defaultText: "Navigation List Menu Bar"
  };
  _exports.SIDE_NAVIGATION_COLLAPSED_LIST_ARIA_ROLE_DESC = SIDE_NAVIGATION_COLLAPSED_LIST_ARIA_ROLE_DESC;
  const SIDE_NAVIGATION_COLLAPSED_LIST_ITEMS_ARIA_ROLE_DESC = {
    key: "SIDE_NAVIGATION_COLLAPSED_LIST_ITEMS_ARIA_ROLE_DESC",
    defaultText: "Navigation List Menu Item"
  };
  _exports.SIDE_NAVIGATION_COLLAPSED_LIST_ITEMS_ARIA_ROLE_DESC = SIDE_NAVIGATION_COLLAPSED_LIST_ITEMS_ARIA_ROLE_DESC;
  const SIDE_NAVIGATION_LIST_ARIA_ROLE_DESC = {
    key: "SIDE_NAVIGATION_LIST_ARIA_ROLE_DESC",
    defaultText: "Navigation List Tree"
  };
  _exports.SIDE_NAVIGATION_LIST_ARIA_ROLE_DESC = SIDE_NAVIGATION_LIST_ARIA_ROLE_DESC;
  const SIDE_NAVIGATION_LIST_ITEMS_ARIA_ROLE_DESC = {
    key: "SIDE_NAVIGATION_LIST_ITEMS_ARIA_ROLE_DESC",
    defaultText: "Navigation List Tree Item"
  };
  _exports.SIDE_NAVIGATION_LIST_ITEMS_ARIA_ROLE_DESC = SIDE_NAVIGATION_LIST_ITEMS_ARIA_ROLE_DESC;
});