/*
 * ! ${copyright}
 */

sap.ui.define([
	"sap/ui/core/Core", "./TableTypeBase", "../library", "sap/m/Button", "sap/ui/Device", "sap/m/plugins/ColumnResizer"
], function(Core, TableTypeBase, library, Button, Device, ColumnResizer) {
	"use strict";

	var InnerTable, InnerColumn, InnerRow;
	var GrowingMode = library.GrowingMode;
	var RowAction = library.RowAction;
	/**
	 * Constructor for a new <code>ResponsiveTableType</code>.
	 *
	 * @param {string} [sId] Optional ID for the new object; generated automatically if no non-empty ID is given
	 * @param {object} [mSettings] initial settings for the new object
	 * @class The table type info base class for the metadata driven table.
	 * @extends sap.ui.mdc.table.TableTypeBase
	 * @author SAP SE
	 * @private
	 * @experimental
	 * @ui5-restricted sap.fe
	 * MDC_PUBLIC_CANDIDATE
	 * @since 1.65
	 * @alias sap.ui.mdc.table.ResponsiveTableType
	 * @ui5-metamodel This element also will be described in the UI5 (legacy) designtime metamodel
	 */

	var ResponsiveTableType = TableTypeBase.extend("sap.ui.mdc.table.ResponsiveTableType", {
		metadata: {
			library: "sap.ui.mdc",
			properties: {
				/**
				 * See <code>sap.ui.mdc.GrowingMode</code><br>
				 * Defaults to Basic - meaning only growing is enabled on <code>ResponsiveTable</code>
				 */
				growingMode: {
					type: "sap.ui.mdc.GrowingMode",
					defaultValue: GrowingMode.Basic
				},
				/**
				 * Specifies whether the Show / Hide Details button for the <code>ResponsiveTable</code> scenario is shown.
				 *
				 * If the available screen space gets too narrow, the columns configured with <code>High</code> and <code>Medium</code> importance
				 * move to the pop-in area, while the columns with <code>Low</code> importance are hidden.<br>
				 * On mobile phones, the columns with <code>Medium</code> importance are also hidden.<br>
				 * As soon as the first column is hidden, this button appears in the table toolbar and gives the user the possibility to toggle the
				 * visibility of the hidden columns in the pop-in area.
				 *
				 * @since 1.79
				 */
				showDetailsButton: {
					type: "boolean",
					group: "Misc",
					defaultValue: false
				},
				/**
				 * Defines which columns should be hidden instead of moved into the pop-in area depending on their importance.
				 * See {@link sap.m.Column#getImportance} and {@link sap.m.Table#getHiddenInPopin} for more details.
				 *
				 * <b>Note:</b> To hide columns based on their importance, it's mandatory to set <code>showDetailsButton="true"</code>.<br>
				 * If no priority is given, the default configuration of {@link sap.ui.mdc.table.ResponsiveTableType#getShowDetailsButton} is used.<br>
				 * If this property is changed after the <code>MDCTable</code> has been initialized, the new changes take effect only when the
				 * Show / Hide Details button is pressed a second time.
				 *
				 * @since 1.86
				 */
				detailsButtonSetting: {
					type: "sap.ui.core.Priority[]",
					group: "Behavior"
				},
				/**
				 * Defines the layout in which the table pop-in rows are rendered.
				 *
				 * @since 1.96
				 */
				popinLayout: {
					type : "sap.m.PopinLayout",
					group : "Appearance",
					defaultValue : "Block"
				}
			}
		}
	});

	ResponsiveTableType.prototype.setDetailsButtonSetting = function(aPriorities) {
		this.setProperty("detailsButtonSetting", aPriorities, true);
		return this;
	};

	ResponsiveTableType.prototype.updateRelevantTableProperty = function(oTable, sProperty, vValue) {
		if (oTable && oTable.isA("sap.m.Table")) {
			if (sProperty === "growingMode") {
				oTable.setGrowingScrollToLoad(vValue === GrowingMode.Scroll);
				oTable.setGrowing(vValue !== GrowingMode.None);
			} else if (sProperty === "showDetailsButton") {
				this.updateShowDetailsButton(oTable, vValue);
			} else if (sProperty === "popinLayout") {
				oTable.setPopinLayout(vValue);
			}
		}
	};

	ResponsiveTableType.updateDefault = function(oTable) {
		if (oTable) {
			oTable.setGrowing(true);
			oTable.setGrowingScrollToLoad(false);
		}
	};

	ResponsiveTableType.prototype.updateShowDetailsButton = function(oTable, bValue) {
		// avoid execution of the if and else if block if bValue has not changed
		if (bValue && !this._oShowDetailsButton) {
			oTable.getHeaderToolbar().insertEnd(this._getShowDetailsButton(), 0);
			this._renderShowDetailsButton();
			oTable.attachEvent("popinChanged", this._onPopinChanged, this);
			oTable.setHiddenInPopin(this._getImportanceToHide());
		} else if (!bValue && this._oShowDetailsButton) {
			oTable.detachEvent("popinChanged", this._onPopinChanged, this);
			oTable.getHeaderToolbar().removeEnd(this._oShowDetailsButton);
			oTable.setHiddenInPopin([]);
			this._oShowDetailsButton.destroy();
			delete this._oShowDetailsButton;
		}
	};

	/* Below APIs are used during table creation */

	ResponsiveTableType.loadTableModules = function() {
		if (!InnerTable) {
			return new Promise(function(resolve, reject) {
				sap.ui.require([
					"sap/m/Table", "sap/m/Column", "sap/m/ColumnListItem"
				], function(ResponsiveTable, ResponsiveColumn, ColumnListItem) {
					InnerTable = ResponsiveTable;
					InnerColumn = ResponsiveColumn;
					InnerRow = ColumnListItem;
					resolve();
				}, function() {
					reject("Failed to load some modules");
				});
			});
		} else {
			return Promise.resolve();
		}
	};

	ResponsiveTableType.createTable = function(sId, mSettings) {
		return new InnerTable(sId, mSettings);
	};

	ResponsiveTableType.createColumn = function(sId, mSettings) {
		return new InnerColumn(sId, mSettings);
	};

	ResponsiveTableType.createTemplate = function(sId, mSettings) {
		return new InnerRow(sId, mSettings);
	};

	ResponsiveTableType.updateSelection = function(oTable) {
		oTable._oTable.setMode(TableTypeBase.getSelectionMode(oTable));
	};

	ResponsiveTableType.updateMultiSelectMode = function(oTable) {
		oTable._oTable.setMultiSelectMode(oTable.getMultiSelectMode());
	};

	ResponsiveTableType.updateNavigation = function(oTable) {
		oTable._oTemplate.setType(RowAction.Navigation);
	};

	ResponsiveTableType.updateRowAction = function(oTable, bNavigation) {
		var sType = oTable.hasListeners("rowPress") ? "Active" : "Inactive";
		oTable._oTemplate.setType(sType);
		if (bNavigation) {
			this.updateNavigation(oTable);
		}
	};

	ResponsiveTableType.updateRowSettings = function(oRowTemplate, oRowSettings) {
		// Remove all bindings, as applySettings doesn't do it
		oRowTemplate.unbindProperty("navigated");
		oRowTemplate.unbindProperty("highlight");
		oRowTemplate.unbindProperty("highlightText");

		oRowTemplate.applySettings(oRowSettings.getAllSettings());
	};

	ResponsiveTableType.disableColumnResizer = function(oTable, oInnerTable) {
		var oColumnResize = ColumnResizer.getPlugin(oInnerTable);
		if (oColumnResize) {
			oColumnResize.setEnabled(false);
			oColumnResize.detachColumnResize(oTable._onColumnResize, oTable);
		}
	};

	ResponsiveTableType.enableColumnResizer = function(oTable, oInnerTable) {
		oInnerTable.setFixedLayout("Strict");
		var oColumnResize = ColumnResizer.getPlugin(oInnerTable);

		if (!oColumnResize) {
			var oColumnResizer = new ColumnResizer();
			oInnerTable.addDependent(oColumnResizer);
			oColumnResizer.attachColumnResize(oTable._onColumnResize, oTable);
		} else {
			oColumnResize.setEnabled(true);
			oColumnResize.detachColumnResize(oTable._onColumnResize, oTable);
			oColumnResize.attachColumnResize(oTable._onColumnResize, oTable);
		}
	};

	ResponsiveTableType.startColumnResize = function(oInnerTable, oColumn) {
		var oColumnResizer = ColumnResizer.getPlugin(oInnerTable);

		if (!oColumnResizer) {
			return;
		}

		return oColumnResizer.getColumnResizeButton(oColumn);
	};

	/**
	 * Renders the look and feel of the Show / Hide Details button
	 *
	 * @private
	 */
	ResponsiveTableType.prototype._renderShowDetailsButton = function() {
		var oRb = Core.getLibraryResourceBundle("sap.ui.mdc"), sText;

		sText = this.bHideDetails ? oRb.getText("table.SHOWDETAILS_TEXT") : oRb.getText("table.HIDEDETAILS_TEXT");
		this._oShowDetailsButton.setText(sText);
	};

	/**
	 * Toggles the visibility of the Show Details button.<br>
	 * If {@param bValue} is set to <code>true</code>, it sets the <code>hiddenInPopin</code> property on the inner <code>ResponsiveTable</code> to
	 * hide columns based on <code>MDCTable</code> configuration (<code>showDetailsButton</code> and <code>detailsButtonSetting</code> properties).
	 * Otherwise an empty array is set to show all columns.
	 *
	 * @param {boolean} bValue - Whether to hide details and display the Show Details button
	 * @private
	 */
	ResponsiveTableType.prototype._toggleShowDetails = function(bValue) {
		if (!this._oShowDetailsButton || (bValue === this.bHideDetails)) {
			return;
		}

		var oTable = this.getRelevantTable();
		this.bHideDetails = bValue;

		if (this.bHideDetails) {
			oTable.setHiddenInPopin(this._getImportanceToHide());
		} else {
			oTable.setHiddenInPopin([]);
		}
		this._renderShowDetailsButton();
	};

	ResponsiveTableType.prototype._getShowDetailsButton = function() {
		if (!this._oShowDetailsButton) {
			this.bHideDetails = true;
			this._oShowDetailsButton = new Button(this.getId() + "-showHideDetails", {
				visible: false,
				press: [function() {
					this._toggleShowDetails(!this.bHideDetails);
				}, this]
			});
		}
		return this._oShowDetailsButton;
	};

	/**
	 * Helper function to get the importance of the columns that should be hidden based on <code>MDCTable</code> configuration.
	 *
	 * @returns {array} sap.ui.core.Priority[] Array of column priorities
	 * @private
	 */
	ResponsiveTableType.prototype._getImportanceToHide = function() {
		var aDetailsButtonSetting = this.getDetailsButtonSetting() || [];
		var aImportanceToHide = [];

		if (aDetailsButtonSetting.length) {
			aImportanceToHide = aDetailsButtonSetting;
		} else {
			aImportanceToHide = Device.system.phone ? ["Low", "Medium"] : ["Low"];
		}

		return aImportanceToHide;
	};

	/**
	 * Event handler called when the table pop-in has changed.
	 *
	 * @param {sap.ui.base.Event} oEvent - Event object
	 * @private
	 */
	ResponsiveTableType.prototype._onPopinChanged = function(oEvent) {
		var bHasPopin = oEvent.getParameter("hasPopin");
		var aHiddenInPopin = oEvent.getParameter("hiddenInPopin");
		var aVisibleItemsLength = oEvent.getSource().getVisibleItems().length;

		if (aVisibleItemsLength && (aHiddenInPopin.length || (bHasPopin && !this.bHideDetails))) {
			this._oShowDetailsButton.setVisible(true);
		} else {
			this._oShowDetailsButton.setVisible(false);
		}
	};

	return ResponsiveTableType;
});
