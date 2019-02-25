function initModel() {
	var sUrl = "/SCP_DEV/sap/opu/odata/sap/YY1_CUSTOMERGROUP_CDS/";
	var oModel = new sap.ui.model.odata.ODataModel(sUrl, true, "BHF_COMM", "nBhLsiwWXmfwqmX)FDLRUA6SwdCitAXUswwZwLqX");
	sap.ui.getCore().setModel(oModel);
}