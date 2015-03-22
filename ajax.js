var getXMLHTTPRequestObject = function() {
	var XMLHttpRequestObject = false;
	try {
		XMLHttpRequestObject = new ActiveXObject("MSXML2.XMLHTTP");
	} catch (exception1) {
		try {
			XMLHttpRequestObject = new ActiveXObject("Microsoft.XMLHTTP");
		} catch (exception2) {
			XMLHttpRequestObject = false;
		}
	}
	if (!XMLHttpRequestObject && window.XMLHttpRequest) {
		XMLHttpRequestObject = new XMLHttpRequest();
	}
	return XMLHttpRequestObject;
}
