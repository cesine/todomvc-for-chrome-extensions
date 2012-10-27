# TodoMVC - For Chrome Extensions

#### A fork of ToDoMVC to allow developers to test if popular JavaScript MV* frameworks work in Chrome Extensions with manifest v2, and the new Content Security Policies.
[http://code.google.com/p/chromium/issues/detail?id=107538](http://code.google.com/p/chromium/issues/detail?id=107538)

#### Works out of the ToDoMVC box!
- [Agility.js](http://agilityjs.com/)
- Vanilla JS
- Batman.js
- [AngularJS](http://angularjs.org/) - [if you add ng-csp ](https://github.com/angular/angular.js/wiki/Using-AngularJS-in-a-Chrome-Extension-environment) 

#### Works if you change to precompiled templates or use an eval workaround
- [Backbone.js](http://documentcloud.github.com/backbone/)
- [Ember.js](http://emberjs.com/)
- [Knockback.js](http://kmalakoff.github.com/knockback/)
- [Spine.js](http://spinejs.com/) 
- jQuery example

#### Will not work without an eval workaround
- [Dojo](http://dojotoolkit.org/) - [no plan to remove evals](https://github.com/cesine/todomvc-for-chrome-extensions/issues/7)
- [KnockoutJS](http://knockoutjs.com/) (MVVM) - [no plan to remove evals](https://github.com/cesine/todomvc-for-chrome-extensions/issues/6)

#### Needs a workaround from someone who knows the framework before it will work in a Chrome Extension
- GWT - inline-script : example creates a script tag on the fly
- [Closure](http://code.google.com/closure/library/) - example uses eval, but might not be neccesary
- [YUILibrary](http://yuilibrary.com/) - example is pulling from non-https servers





# TodoMVC

#### A common learning application for popular JavaScript MV* frameworks


## Introduction

Developers these days are spoiled with choice when it comes to selecting an MV* framework for structuring and organizing JavaScript web apps. Backbone, Spine, Ember.js, AngularJS, JavaScriptMVC... The list of new and stable solutions goes on and on, but just how do you decide on which to use in a sea of so many options?

To help solve this problem, TodoMVC was created - a project which offers the same Todo application implemented using MVC concepts in most of the popular JavaScript MV* frameworks of today. Solutions look and feel the same, have a common feature set, and make it easy for you to compare the syntax and structure of different frameworks, so you can select the one you feel the most comfortable with.


#### Todo apps are included for:

- [Backbone.js](http://documentcloud.github.com/backbone/)
- [Backbone.js + RequireJS](http://requirejs.org/) (using AMD)
- [Ember.js](http://emberjs.com/)
- [JavaScriptMVC](http://javascriptmvc.com/)
- [Spine.js](http://spinejs.com/)
- [KnockoutJS](http://knockoutjs.com/) (MVVM)
- [Knockback.js](http://kmalakoff.github.com/knockback/)
- [Dojo](http://dojotoolkit.org/)
- [Closure](http://code.google.com/closure/library/)
- [YUILibrary](http://yuilibrary.com/)
- [AngularJS](http://angularjs.org/)
- [Angular + PersistenceJS](http://persistencejs.org/)
- [Ext.js](http://www.sencha.com/products/extjs)
- [Agility.js](http://agilityjs.com/)

###### Non MV*

- jQuery
- Vanilla JS

We also have a number of in-progress applications for new frameworks (such as [CanJS](http://canjs.us/) and [Meteor](http://meteor.com/)) being worked on in our [Labs](http://addyosmani.github.com/todomvc/labs) site. 

## Live demos

Live demos are available on the official [TodoMVC site](http://todomvc.com).


## Screenshot

![screenshot](https://raw.github.com/addyosmani/todomvc/master/screenshot.png)


## Team

TodoMVC would not be possible without a strong team of [contributors](https://github.com/addyosmani/todomvc/contributors) helping push the project forward each day. In addition, we have a core project team composed of:

* [Addy Osmani - Founder/Lead](http://github.com/addyosmani): Addy is a Developer Platform Engineer at Google who originally created TodoMVC. He oversees the project direction, drives expansion and helps lead core development with Sindre Sorhus (by far our most active contributor!).

* [Sindre Sorhus - Lead Developer](https://github.com/sindresorhus): Sindre is a Web Developer who drives core development, quality control and application design for the project. His contributions have helped us ensure consistency and best practices are enforced wherever possible. 

* [Aaron Boushley - on leave](https://github.com/boushley): Aaron is a JavaScript developer with a keen interest in architectural frameworks and has helped both standardize existing examples and improve the project as we worked on expansion. He is currently taking a break from his open-source contributions at this time.


## Disclaimer

TodoMVC has been called many things including the 'Speed-dating' and 'Rosetta Stone' of MV* frameworks. Whilst we hope that this project is able to offer assistance in deciding what frameworks are worth spending more time looking at, remember that the Todo application offers a limited view of what a framework may be capable of.

It is meant to be used as a gateway to reviewing how a basic application using a framework may be structured and we heavily recommend investing time researching a solution in more depth before opting to use it.


## Getting Involved

Whilst we enjoy implementing and improving existing Todo apps, we're always interested in speaking to framework authors (and users) wishing to share Todo app implementations in their framework/solution of choice.

If you have an implementation you would like to show us or a patch you would like to send upstream, please feel free to send through a pull request after reading our [contribution guidelines](https://github.com/addyosmani/todomvc/wiki) (in particular our [application specifications](https://github.com/addyosmani/todomvc/wiki/App-Specification)). One of us will be happy to review your submission and discuss any changes that may be required before they can be included.

Note that due to the current number of MVC/MVVM/MV* frameworks in circulation at the moment, it's not always possible to include each one in TodoMVC, but we'll definitely discuss the merits of any framework prior to making a decision. We hope you understand :)


## License

Public Domain
