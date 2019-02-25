sap.ui.define(["sap/ui/core/mvc/Controller",
	"sap/m/MessageBox",
	"./popover_4",
	"./utilities",
	"sap/ui/core/routing/History"
], function(BaseController, MessageBox, popover_4, Utilities, History) {
	"use strict";

	return BaseController.extend("com.sap.build.standard.businessPartnerCustomerGroupAssignment.controller.page_2", {
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
		_onFioriObjectPageHeaderPress: function() {
			var oHistory = History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();
			var oQueryParams = this.getQueryParameters(window.location);

			if (sPreviousHash !== undefined || oQueryParams.navBackToLaunchpad) {
				window.history.go(-1);
			} else {
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.navTo("default", true);
			}

		},
		getQueryParameters: function(oLocation) {
			var oQuery = {};
			var aParams = oLocation.search.substring(1).split("&");
			for (var i = 0; i < aParams.length; i++) {
				var aPair = aParams[i].split("=");
				oQuery[aPair[0]] = decodeURIComponent(aPair[1]);
			}
			return oQuery;

		},
		_onFioriObjectPageActionButtonPress: function(oEvent) {

			var oBindingContext = oEvent.getSource().getBindingContext();

			return new Promise(function(fnResolve) {

				this.doNavigate("page_3", oBindingContext, fnResolve, "");
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
		_onFioriObjectPageActionButtonPress1: function(oEvent) {

			oEvent = jQuery.extend(true, {}, oEvent);
			return new Promise(function(fnResolve) {
					fnResolve(true);
				})
				.then(function(result) {
					return new Promise(function(fnResolve) {
						sap.m.MessageBox.confirm("Delete Product ?", {
							title: "Delete",
							actions: ["Delete", "Cancel"],
							onClose: function(sActionClicked) {
								fnResolve(sActionClicked === "Delete");
							}
						});
					});

				}.bind(this))
				.then(function(result) {
					if (result === false) {
						return false;
					} else {
						alert("Not Implemented Yet!");

					}
				}.bind(this)).catch(function(err) {
					if (err !== undefined) {
						MessageBox.error(err.message);
					}
				});
		},
		_onFioriObjectPageActionButtonPress2: function() {
			alert("Not Implemented Yet!");

		},
		_onFioriObjectPageActionButtonPress3: function(oEvent) {

			var sPopoverName = "popover_4";
			this.mPopovers = this.mPopovers || {};
			var oPopover = this.mPopovers[sPopoverName];

			if (!oPopover) {
				oPopover = new popover_4(this.getView());
				this.mPopovers[sPopoverName] = oPopover;

				oPopover.getControl().setPlacement("Bottom");

				// For navigation.
				oPopover.setRouter(this.oRouter);
			}

			var oSource = oEvent.getSource();

			oPopover.open(oSource);

		},
		formatFractionDigitFromValue: function(sValue) {
			var sNumber;
			if (isNaN(sValue)) {
				sNumber = sValue;
			} else {
				sNumber = Number(sValue).toFixed(2);
			}
			return sNumber;

		},
		_onFioriObjectPageTableActionPress: function(oEvent) {

			var oTable = oEvent.getSource().getParent().getParent();
			return new Promise(function(fnResolve, fnReject) {
				if (oTable instanceof sap.m.Table) {
					var aItems = oTable.getSelectedItems();
					aItems.forEach(function(oItem) {
						oTable.removeItem(oItem);
					});
					fnResolve();
				} else {
					fnReject(new Error("can't find selected items on provided collection"));
				}
			}).catch(function(err) {
				if (err !== undefined) {
					MessageBox.error(err.message);
				}
			});

		},
		_onFioriObjectPageTableActionPress1: function(oEvent) {

			var oBindingContext = oEvent.getSource().getBindingContext();

			return new Promise(function(fnResolve) {

				this.doNavigate("page_3", oBindingContext, fnResolve, "");
			}.bind(this)).catch(function(err) {
				if (err !== undefined) {
					MessageBox.error(err.message);
				}
			});

		},
		onInit: function() {
			this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			this.oRouter.getTarget("page_2").attachDisplay(jQuery.proxy(this.handleRouteMatched, this));

		}
	});
}, /* bExport= */ true);
