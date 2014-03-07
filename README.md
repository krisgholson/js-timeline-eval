js timeline / GANTT Evaluations
===============================

# The short story
I recommend that we use CHAP Links Library until we find a reason to use something heavier weight. Read more about it at http://almende.github.io/chap-links-library/timeline.html  

* Already in use at our company
* Open source Apache 2.0 License
* Active community 
* No other dependencies
* Decent documentation and API
* Minimal footprint - 218 KB js file (79 KB minified) + 4 KB css

IF, and only if, we find ourselves having to write too much custom code to make a timeline look and behave like a full-featured GANTT chart (linking of tasks and heavy event editing expected from within the GANTT view itself), then we should consider using the GANT chart from the Teamwork project (http://gantt.twproject.com/). 

# Online reviews of components

* http://okfnlabs.org/blog/2012/12/04/javascript-timeline-libaries-a-review.html
* http://blog.jamesbayley.com/2013/02/01/a-review-of-javascript-drawing-libraries-for-flowcharts-gantt-charts-and-timelines/
* http://roberto.open-lab.com/2012/06/14/the-javascript-gantt-odyssey/

# Notes about components

## Promising

### http://almende.github.io/chap-links-library/timeline.html and https://github.com/almende/chap-links-library
Already in use at our company - just enough functionality - needs some better styling.
Has an active community on Google Groups posting questions/answers.
Source code updated just days ago.
21 Github contributors, 1 primary - josdejong
Also, Github issue list is active with contributors (primarily josdejong) responding to and fixing issues.
Good documentation and API is easy to work with.

### http://visjs.org/ and https://github.com/almende/vis/
This project is the successor to the CHAP Links Library, developed by the Almende group, and still part of the CHAP project. Found out it was the successor based on the following post from the primary contributor ... https://github.com/almende/chap-links-library/issues/183
Source code updated just hours ago.
5 Github contributors, 1 primary - josdejong (same as chap-links-library)
Good documentation and API is easy to work with.
Jos recommends using this OVER the CHAP Links timeline.
Wanted to use this but found the documentation and example behind where the chap-links-library was.
Also, found some jumpiness/querkiness when refreshing timelines containing even small amounts of data (that did not exist when using CHAP Links).

### http://taitems.github.com/jQuery.Gantt/ and https://github.com/mbielanczuk/jQuery.Gantt 
Simple Gantt chart - source last updated a year ago, many forks of the project on github so popularity is high - originally based on the one from thegrubbsian.
9 contributors, 2 primary - taitems and mbeilanczuk
Github issue list is used and contributors are responding to and fixing issues.
At least some anectodal evidence that there are problems using this in IE8..

```
I get a javascript error in IE8 on load jquery.fn.gantt.js on line 918: find(…).offset().left is null or not an object
The gantt scheme is afterwards empty.
```

Uses an older version of jQuery than we do. Received the following error do to the component's reliance on stuff that is no longer in jQuery ..
TypeError: $.browser is undefined

### http://gantt.twproject.com/ and https://github.com/robicch/jQueryGantt 
Full featured GANTT chart - maybe too much so - this one might have been a good fit had the GANTT chart been the centerpiece of the app's view - vice the calendar - source very recently updated in github. Open source author created the component for use in his company's commercial product - http://www.twproject.com/home.page so I would expect the open source project to get love as the commercial product is enhanced with new features. 5 contributors to the project, but lion's share of work is from one author - robicch.
IF we need more capability than what CHAP Links seems to offer us, this may be a good candidate for a full-featured GANTT chart.  Like the jQuery Gantt from mbielanczuk, this relies on an older version of jQuery with no support for $.browser (so would take a little bit of "doing" to get this framework to live with our current application.)

### http://www.simile-widgets.org/timeline/ and https://code.google.com/p/simile-widgets/source/browse/ 
(one that we thought we would use - timeline source not touched since 2009 - many issues opened in the issue tracker - https://code.google.com/p/simile-widgets/issues/list?can=2&q=&colspec=ID%20Project%20Type%20Status%20Priority%20Fixed%20Owner%20Summary%20Opened%20Closed&sort=-opened&num=100&start=0 - that never seem to be getting closed)


## Not as promising

### http://stoicloofah.github.io/chronoline.js/
One contributor - StoicLoofah :-)
Handful of issues in Github issues - mostly filed by StoicLoofah himself.
Did not seem to have an event model (edit/delete events from timeline) - there was a read only hover method on an event that may able to be tapped into. Just didn't seem to be worth looking at further.

### http://dhtmlx.com/docs/products/dhtmlxGantt/ 
This one has a really clean look and seems to have full-featured GANTT capability. It just seemed somewhat monolithic and more of a framework than a component that could be easily dropped in an integrated.

### https://github.com/thegrubbsian/jquery.ganttView 
Simple GANTT chart - was the basis for the one from mbielanczuk.

### http://timeglider.com/widget/ 
Looks great but is NOT open source, could maybe justify the govt's use for "non-commercial" license but determining the correct license status and gaining official approval to use would probably just take too long.

### http://timeline.knightlab.com/ or http://timeline.verite.co/ 
Looks good for telling a story but not as convincing for deconflicting events of various types or assigned to various resources.

### http://propublica.github.com/timeline-setter/ 
Requires a build step using ruby to generate html/js resources from a csv file - basically sounded like weird additional step.

### https://github.com/wellcomelibrary/timeline 
This one looked like it might have promise but the example usage here ... http://wellcomelibrary.org/using-the-library/subject-guides/genetics/makers-of-modern-genetics/genetics-timeline/ ... also made it look like it would be a better fit for telling a story over time than deconflicting events.
