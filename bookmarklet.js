javascript:
/**
 * TAMES Case Number Search Bookmarklet
 * (c) 2014 Ed Cottrell
 *
 * Licensed under the MIT License
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
 
var domain = "http://www.search.txcourts.gov/", /* Domain for the searches */
	path = "CaseSearch.aspx?coa=cossup", /* Initialize the URL to use if we cannot do a search */
	gs = window.getSelection(); /* Get the selection */
 
/* See if the user has actually selected anything */
if(gs.type != "None") {
	var caseNoContainer = gs.getRangeAt(0), /* Get the selected range */
		sc = caseNoContainer.startContainer; /* Get the data container for the selection */
	if(typeof(sc.data) != "undefined") {
		/* Get the raw selection */
		var caseNo = sc.data.substr(caseNoContainer.startOffset, caseNoContainer.endOffset - caseNoContainer.startOffset);
	
		/* Replace en-dashes with hyphens and strip any leading or trailing characters */
		caseNo = caseNo.replace(/\u2013/g, "-").replace(/^[^\d]+|[^CRV\d]+$/g, "");
	
		/* If the case is a -CR or -CV case, make sure the numeric parts are appropriately padded with leading zeroes */
		if(caseNo.match(/C[RV]$/)) {
			caseNoParts = caseNo.split("-");
			caseNoParts[0] = ("00"+caseNoParts[0]).slice(-2);
			caseNoParts[1] = ("00"+caseNoParts[1]).slice(-2);
			caseNoParts[2] = ("00000"+caseNoParts[2]).slice(-5);
			caseNo = caseNoParts.join("-");
		}
		
		/* If the case number is non-empty, get the URL for the search page. */
		if(caseNo != "") {
			var path = "Case.aspx?cn="+caseNo;
		}
	}
}
/* Open the search window */
window.open(domain+path);
