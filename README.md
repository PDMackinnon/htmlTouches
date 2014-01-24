htmlTouches
===========

Applying gesture recognizers from multiple views to perform CSS transforms on embedded HTML in iOS app. Builds on Apple provided sample code.

This sample app has been modified to apply the touch recognition to a UIWebView. The original views are hidden behind the web view and the transforms are sent as javascript calls to the web view so that each <div> element replicates the scaling, rotation and translation of the equivalent UIImage (which is now hidden) using CSS 2D transforms.


Modified source is redistributed according to the licence provided.
-------------------------------------------------------------------
Copyright © Dundee University 2014
