sap.ui.define(["sap/ui/core/mvc/Controller",
	"sap/m/MessageBox",
	"./BpF4", "./Name1F4", "./Name2F4", "./CityF4", "./CountryF4", "./StreetF4",
	"./utilities",
	"sap/ui/core/routing/History",
	"sap/ui/base/Event"
], function(BaseController, MessageBox, BpF4, Name1F4, Name2F4, CityF4, CountryF4, StreetF4, Utilities, History, Event) {
	"use strict";

	return BaseController.extend("com.sap.build.standard.businessPartnerCustomerGroupAssignment.controller.page_1", {
		handleRouteMatched: function(oEvent) {
			var sAppId = "App5c6cb640cbb745563a65361c";
    
			var oParams = {};

			if (oEvent.mParameters.data.context) {
				this.sContext = oEvent.mParameters.data.context;

			} else {
				if (this.getOwnerComponent().getComponentData()) {
					var patternConvert = function(oParam) {
						if (Object.keys(oParam).length !== 0) {
							for (var prop in oParam) {
								if (prop !== "sourcePrototype") {
									return prop + "(" + oParam[prop][0] + ")";
								}
							}
						}
					};

					this.sContext = patternConvert(this.getOwnerComponent().getComponentData().startupParameters);

				}
			}

			var oPath;

			if (this.sContext) {
				oPath = {
					path: "/" + this.sContext,
					parameters: oParams
				};
				this.getView().bindObject(oPath);
			}

		},
		
		_onInputValueHelpRequest: function(oEvent) {

			var sSelectDialogName = "BpF4";
			this.mSelectDialogs = this.mSelectDialogs || {};
			var oSelectDialog = this.mSelectDialogs[sSelectDialogName];
			var oSource = oEvent.getSource();

			if (!oSelectDialog) {
				oSelectDialog = new BpF4(this.getView());
				this.mSelectDialogs[sSelectDialogName] = oSelectDialog;

				// For navigation.
				oSelectDialog.setRouter(this.oRouter);
			}
			var fnCancel = function() {
				oSelectDialog.getControl().detachConfirm(fnConfirm);
				oSelectDialog.getControl().detachCancel(fnCancel);
			};
			var fnConfirm = function(oConfirmEvent) {
				fnCancel();
				if (oSelectDialog.getControl().getBinding("items")) {
					var oBindingContext = oConfirmEvent.getParameter("selectedItem").getBindingContext();
					var sPath = oSelectDialog.getControl().data("selectedPropertyPath");
					oSource.setValue(oBindingContext.getProperty(sPath));
				}
			};
			oSelectDialog.getControl().attachConfirm(fnConfirm);
			oSelectDialog.getControl().attachCancel(fnCancel);
			oSelectDialog.open();
			oSelectDialog.getControl().fireLiveChange();

		},
		_onInputValueHelpRequest1: function(oEvent) {

			var sSelectDialogName = "BpF4";
			this.mSelectDialogs = this.mSelectDialogs || {};
			var oSelectDialog = this.mSelectDialogs[sSelectDialogName];
			var oSource = oEvent.getSource();

			if (!oSelectDialog) {
				oSelectDialog = new BpF4(this.getView());
				this.mSelectDialogs[sSelectDialogName] = oSelectDialog;

				// For navigation.
				oSelectDialog.setRouter(this.oRouter);
			}
			var fnCancel = function() {
				oSelectDialog.getControl().detachConfirm(fnConfirm);
				oSelectDialog.getControl().detachCancel(fnCancel);
			};
			var fnConfirm = function(oConfirmEvent) {
				fnCancel();
				if (oSelectDialog.getControl().getBinding("items")) {
					var oBindingContext = oConfirmEvent.getParameter("selectedItem").getBindingContext();
					var sPath = oSelectDialog.getControl().data("selectedPropertyPath");
					oSource.setValue(oBindingContext.getProperty(sPath));
				}
			};
			oSelectDialog.getControl().attachConfirm(fnConfirm);
			oSelectDialog.getControl().attachCancel(fnCancel);
			oSelectDialog.open();
			oSelectDialog.getControl().fireLiveChange();

		},
		_onInputValueHelpRequest2: function(oEvent) {

			var sSelectDialogName = "Name1F4";
			this.mSelectDialogs = this.mSelectDialogs || {};
			var oSelectDialog = this.mSelectDialogs[sSelectDialogName];
			var oSource = oEvent.getSource();

			if (!oSelectDialog) {
				oSelectDialog = new Name1F4(this.getView());
				this.mSelectDialogs[sSelectDialogName] = oSelectDialog;

				// For navigation.
				oSelectDialog.setRouter(this.oRouter);
			}
			var fnCancel = function() {
				oSelectDialog.getControl().detachConfirm(fnConfirm);
				oSelectDialog.getControl().detachCancel(fnCancel);
			};
			var fnConfirm = function(oConfirmEvent) {
				fnCancel();
				if (oSelectDialog.getControl().getBinding("items")) {
					var oBindingContext = oConfirmEvent.getParameter("selectedItem").getBindingContext();
					var sPath = oSelectDialog.getControl().data("selectedPropertyPath");
					oSource.setValue(oBindingContext.getProperty(sPath));
				}
			};
			oSelectDialog.getControl().attachConfirm(fnConfirm);
			oSelectDialog.getControl().attachCancel(fnCancel);
			oSelectDialog.open();
			oSelectDialog.getControl().fireLiveChange();

		},
		_onInputValueHelpRequest3: function(oEvent) {

			var sSelectDialogName = "Name2F4";
			this.mSelectDialogs = this.mSelectDialogs || {};
			var oSelectDialog = this.mSelectDialogs[sSelectDialogName];
			var oSource = oEvent.getSource();

			if (!oSelectDialog) {
				oSelectDialog = new Name2F4(this.getView());
				this.mSelectDialogs[sSelectDialogName] = oSelectDialog;

				// For navigation.
				oSelectDialog.setRouter(this.oRouter);
			}
			var fnCancel = function() {
				oSelectDialog.getControl().detachConfirm(fnConfirm);
				oSelectDialog.getControl().detachCancel(fnCancel);
			};
			var fnConfirm = function(oConfirmEvent) {
				fnCancel();
				if (oSelectDialog.getControl().getBinding("items")) {
					var oBindingContext = oConfirmEvent.getParameter("selectedItem").getBindingContext();
					var sPath = oSelectDialog.getControl().data("selectedPropertyPath");
					oSource.setValue(oBindingContext.getProperty(sPath));
				}
			};
			oSelectDialog.getControl().attachConfirm(fnConfirm);
			oSelectDialog.getControl().attachCancel(fnCancel);
			oSelectDialog.open();
			oSelectDialog.getControl().fireLiveChange();

		},
		_onInputValueHelpRequest4: function(oEvent) {

			var sSelectDialogName = "StreetF4";
			this.mSelectDialogs = this.mSelectDialogs || {};
			var oSelectDialog = this.mSelectDialogs[sSelectDialogName];
			var oSource = oEvent.getSource();

			if (!oSelectDialog) {
				oSelectDialog = new StreetF4(this.getView());
				this.mSelectDialogs[sSelectDialogName] = oSelectDialog;

				// For navigation.
				oSelectDialog.setRouter(this.oRouter);
			}
			var fnCancel = function() {
				oSelectDialog.getControl().detachConfirm(fnConfirm);
				oSelectDialog.getControl().detachCancel(fnCancel);
			};
			var fnConfirm = function(oConfirmEvent) {
				fnCancel();
				if (oSelectDialog.getControl().getBinding("items")) {
					var oBindingContext = oConfirmEvent.getParameter("selectedItem").getBindingContext();
					var sPath = oSelectDialog.getControl().data("selectedPropertyPath");
					oSource.setValue(oBindingContext.getProperty(sPath));
				}
			};
			oSelectDialog.getControl().attachConfirm(fnConfirm);
			oSelectDialog.getControl().attachCancel(fnCancel);
			oSelectDialog.open();
			oSelectDialog.getControl().fireLiveChange();

		},
		_onInputValueHelpRequest5: function(oEvent) {

			var sSelectDialogName = "CityF4";
			this.mSelectDialogs = this.mSelectDialogs || {};
			var oSelectDialog = this.mSelectDialogs[sSelectDialogName];
			var oSource = oEvent.getSource();

			if (!oSelectDialog) {
				oSelectDialog = new CityF4(this.getView());
				this.mSelectDialogs[sSelectDialogName] = oSelectDialog;

				// For navigation.
				oSelectDialog.setRouter(this.oRouter);
			}
			var fnCancel = function() {
				oSelectDialog.getControl().detachConfirm(fnConfirm);
				oSelectDialog.getControl().detachCancel(fnCancel);
			};
			var fnConfirm = function(oConfirmEvent) {
				fnCancel();
				if (oSelectDialog.getControl().getBinding("items")) {
					var oBindingContext = oConfirmEvent.getParameter("selectedItem").getBindingContext();
					var sPath = oSelectDialog.getControl().data("selectedPropertyPath");
					oSource.setValue(oBindingContext.getProperty(sPath));
				}
			};
			oSelectDialog.getControl().attachConfirm(fnConfirm);
			oSelectDialog.getControl().attachCancel(fnCancel);
			oSelectDialog.open();
			oSelectDialog.getControl().fireLiveChange();

		},
		_onInputValueHelpRequest6: function(oEvent) {

			var sSelectDialogName = "CountryF4";
			this.mSelectDialogs = this.mSelectDialogs || {};
			var oSelectDialog = this.mSelectDialogs[sSelectDialogName];
			var oSource = oEvent.getSource();

			if (!oSelectDialog) {
				oSelectDialog = new CountryF4(this.getView());
				this.mSelectDialogs[sSelectDialogName] = oSelectDialog;

				// For navigation.
				oSelectDialog.setRouter(this.oRouter);
			}
			var fnCancel = function() {
				oSelectDialog.getControl().detachConfirm(fnConfirm);
				oSelectDialog.getControl().detachCancel(fnCancel);
			};
			 var fnConfirm = function(oConfirmEvent) {
				fnCancel();
				if (oSelectDialog.getControl().getBinding("items")) {
					var oBindingContext = oConfirmEvent.getParameter("selectedItem").getBindingContext();
					var sPath = oSelectDialog.getControl().data("selectedPropertyPath");
					oSource.setValue(oBindingContext.getProperty(sPath));
				}
			};
			
			oSelectDialog.getControl().attachConfirm(fnConfirm);
			oSelectDialog.getControl().attachCancel(fnCancel);
			oSelectDialog.open();
			oSelectDialog.getControl().fireLiveChange();

		},
		_onFioriListReportTableItemPress: function(oEvent) {
			var oBindingContext = oEvent.getParameter("listItem").getBindingContext();
			return new Promise(function(fnResolve) {
				this.doNavigate("page_2", oBindingContext, fnResolve, "");
			}.bind(this)).catch(function(err) {
				if (err !== undefined) {
					MessageBox.error(err.message);
				}
			});
		},
		doNavigate: function(sRouteName, oBindingContext, fnPromiseResolve, sViaRelation) {
			var sPath = (oBindingContext) ? oBindingContext.getPath() : null;
			var oModel = (oBindingContext) ? oBindingContext.getModel() : null;

			var sEntityNameSet;
			if (sPath !== null && sPath !== "") {
				if (sPath.substring(0, 1) === "/") {
					sPath = sPath.substring(1);
				}
				sEntityNameSet = sPath.split("(")[0];
			}
			var sNavigationPropertyName;
			var sMasterContext = this.sMasterContext ? this.sMasterContext : sPath;

			if (sEntityNameSet !== null) {
				sNavigationPropertyName = sViaRelation || this.getOwnerComponent().getNavigationPropertyForNavigationWithContext(sEntityNameSet, sRouteName);
			}
			if (sNavigationPropertyName !== null && sNavigationPropertyName !== undefined) {
				if (sNavigationPropertyName === "") {
					this.oRouter.navTo(sRouteName, {
						context: sPath,
						masterContext: sMasterContext
					}, false);
				} else {
					oModel.createBindingContext(sNavigationPropertyName, oBindingContext, null, function(bindingContext) {
						if (bindingContext) {
							sPath = bindingContext.getPath();
							if (sPath.substring(0, 1) === "/") {
								sPath = sPath.substring(1);
							}
						} else {
							sPath = "undefined";
						}

						// If the navigation is a 1-n, sPath would be "undefined" as this is not supported in Build
						if (sPath === "undefined") {
							this.oRouter.navTo(sRouteName);
						} else {
							this.oRouter.navTo(sRouteName, {
								context: sPath,
								masterContext: sMasterContext
							}, false);
						}
					}.bind(this));
				}
			} else {
				this.oRouter.navTo(sRouteName);
			}

			if (typeof fnPromiseResolve === "function") {
				fnPromiseResolve();
			}

		},
		_onFioriListReportTableUpdateFinished: function(oEvent) {
			var oTable = oEvent.getSource();
			var oHeaderbar = oTable.getAggregation("headerToolbar");
			if (oHeaderbar && oHeaderbar.getAggregation("content")[1]) {
				var oTitle = oHeaderbar.getAggregation("content")[1];
				if (oTable.getBinding("items") && oTable.getBinding("items").isLengthFinal()) {
					oTitle.setText("(" + oTable.getBinding("items").getLength() + ")");
				} else {
					oTitle.setText("(1)");
				}
			}

		},
		onInit: function() {
			this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			this.oRouter.getTarget("page_1").attachDisplay(jQuery.proxy(this.handleRouteMatched, this));
			this.oFilterBar = null;
			this.oFilterBar = this.getView().byId("ListReportFilterBar");
			var oBasicSearch = new sap.m.SearchField({
				showSearchButton: true
			});
			this.oFilterBar.setBasicSearch(oBasicSearch);

		}
	});
}, /* bExport= */ true);
