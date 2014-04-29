TAMES Search
============

I have created a little bookmarklet for searching for Texas cases in the Courts of Appeals and Supreme Court. A bookmarklet, if you're not familiar with that term, is a "smart bookmark" that does some action when you use it. It's actually a little program, so you can do pretty handy things with bookmarklets.

How this Bookmarklet Works
------------

When you select a case number (e.g., `01-02-00345-CV`) and click on the bookmarklet, a new window will open with the TAMES case page for the case number in question. In my example, that would be [this page](http://www.search.txcourts.gov/Case.aspx?cn=01-02-00345-CV).  So, for example, you can highlight the case number in Westlaw, then click this bookmarklet, and it will open a new window with the Court of Appeals or Supreme Court page (as appropriate) for the case. This makes it easy to check petition/writ history, motions for rehearing, and the like.

Features
------------

- Works with all Court of Appeals and Supreme Court of Texas cases. It doesn't work with the Court of Criminal Appeals, which uses a different website structure than the other courts.
- Understands sloppy highlighting. For example, it's okay if you highlight `No. 01-02-00345-CV.`  The `No. ` and trailing `.` will be ignored.
- Understands en-dashes and automatically replaces them with hyphens. So, <code>01&ndash;02&ndash;00345&ndash;CV</code> becomes <code>01-02-00345-CV</code>.
- Automatically fixes "incomplete" numbers.  For example, it automatically converts `1-2-345-CV` into `01-02-00345-CV`.
- If you haven't selected anything or if what you have selected isn't a valid case number, it takes you to [the main TAMES search page](http://www.search.txcourts.gov/CaseSearch.aspx?coa=cossup).
 
The Bookmarklet
------------

Here is the bookmarklet itself. To use it, create a bookmark in your browser and use this as the URL:

    javascript:/** * TAMES Case Number Search Bookmarklet * (c) 2014 Ed Cottrell * * Licensed under the MIT License * * Permission is hereby granted, free of charge, to any person obtaining a copy * of this software and associated documentation files (the "Software"), to deal * in the Software without restriction, including without limitation the rights * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell * copies of the Software, and to permit persons to whom the Software is * furnished to do so, subject to the following conditions: * * The above copyright notice and this permission notice shall be included in * all copies or substantial portions of the Software. * * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN * THE SOFTWARE. */var url = 'http://www.search.txcourts.gov/CaseSearch.aspx?coa=cossup', /* Initialize the URL to use if we can't do a search */gs = window.getSelection(); /* Get the user's selection *//* See if the user has actually selected anything */ if(gs.type != "None") {var caseNoContainer = gs.getRangeAt(0), /* Get the selected range */sc = caseNoContainer.startContainer; /* Get the data container for the user's selection */if(typeof(sc.data) != 'undefined') {/* Get the raw selection */var caseNo = sc.data.substr(caseNoContainer.startOffset, caseNoContainer.endOffset - caseNoContainer.startOffset);/* Replace en-dashes with hyphens and strip any leading or trailing characters */caseNo = caseNo.replace(/\u2013/g, '-').replace(/^[^\d]+|[^CRV\d]+$/g, '');/* If the case is a -CR or -CV case, make sure the numeric parts are appropriately padded with leading zeroes */if(caseNo.match(/C[RV]$/)) {caseNoParts = caseNo.split('-');caseNoParts[0] = ("00"+caseNoParts[0]).slice(-2);caseNoParts[1] = ("00"+caseNoParts[1]).slice(-2);caseNoParts[2] = ("00000"+caseNoParts[2]).slice(-5);caseNo = caseNoParts.join('-');}/* If the case number is non-empty, get the URL for the search page. */if(caseNo != '') {var url = 'http://www.search.txcourts.gov/Case.aspx?cn='+caseNo;}}}/* Open the search window */window.open(url);

See the next section for additional instructions.

How to Use It
------------

For instructions on how to add it to your browser (at least for Internet Explorer, Chrome, Firefox, Safari, or Opera), please see the [instructions on this page](http://marklets.com/FAQ.aspx#howDoIAddABookmarkletToMyBrowser).
