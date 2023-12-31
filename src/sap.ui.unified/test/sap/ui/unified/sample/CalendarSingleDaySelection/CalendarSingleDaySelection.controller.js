sap.ui.define([
		'sap/ui/core/mvc/Controller',
		'sap/ui/unified/DateRange',
		'sap/ui/core/format/DateFormat',
		'sap/ui/core/library',
		'sap/ui/core/date/UI5Date'
	], function(Controller, DateRange, DateFormat, coreLibrary, UI5Date) {
	"use strict";

	var CalendarType = coreLibrary.CalendarType;

	return Controller.extend("sap.ui.unified.sample.CalendarSingleDaySelection.CalendarSingleDaySelection", {
		oFormatYyyymmdd: null,

		onInit: function() {
			this.oFormatYyyymmdd = DateFormat.getInstance({pattern: "yyyy-MM-dd", calendarType: CalendarType.Gregorian});
		},

		handleCalendarSelect: function(oEvent) {
			var oCalendar = oEvent.getSource();

			this._updateText(oCalendar);
		},

		_updateText: function(oCalendar) {
			var oText = this.byId("selectedDate"),
				aSelectedDates = oCalendar.getSelectedDates(),
				oDate = aSelectedDates[0].getStartDate();

			oText.setText(this.oFormatYyyymmdd.format(oDate));
		},

		handleSelectToday: function() {
			var oCalendar = this.byId("calendar");

			oCalendar.removeAllSelectedDates();
			oCalendar.addSelectedDate(new DateRange({startDate: UI5Date.getInstance()}));
			this._updateText(oCalendar);
		}
	});

});
