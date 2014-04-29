TAMES Search
============

I have created a little bookmarklet for searching for Texas cases in the Courts of Appeals and Supreme Court. A bookmarklet, if you're not familiar with that term, is a "smart bookmark" that does some action when you use it. It's actually a little program, so you can do pretty handy things with bookmarklets.

How this Bookmarklet Works
============

When you select a case number (e.g., `01-02-00345-CV`) and click on the bookmarklet, a new window will open with the TAMES case page for the case number in question. In my example, that would be [this page](http://www.search.txcourts.gov/Case.aspx?cn=01-02-00345-CV).  So, for example, you can highlight the case number in Westlaw, then click this bookmarklet, and it will open a new window with the Court of Appeals or Supreme Court page (as appropriate) for the case. This makes it easy to check petition/writ history, motions for rehearing, and the like.

Features
============

- Works with all Court of Appeals and Supreme Court of Texas cases. It doesn't work with the Court of Criminal Appeals, which uses a different website structure than the other courts.
- Understands sloppy highlighting. For example, it's okay if you highlight `No. 01-02-00345-CV.`  The `No. ` and trailing `.` will be ignored.
- Understands en-dashes and automatically replaces them with hyphens.
- Automatically fixes "incomplete" numbers.  For example, it automatically converts `1-2-345-CV` into `01-02-00345-CV`.
- If you haven't selected anything or if what you have selected isn't a valid case number, it takes you to [the main TAMES search page](http://www.search.txcourts.gov/CaseSearch.aspx?coa=cossup).

How to Use It
============

For instructions on how to add it to your browser (at least for Internet Explorer, Chrome, Firefox, Safari, or Opera), please see the [instructions on this page](http://marklets.com/FAQ.aspx#howDoIAddABookmarkletToMyBrowser).
