---
layout: post
title: Meteor.js, First Impressions
published: true
---

Since taking up Node.js development I haven't been fully satisfied with the Express.js/MVC styled approach of application development. For whatever reason (me?) my code base ends up getting messy and I feel disheveled working on my projects.

So when a recent work project came up that had a requirement for multiple users interacting real-time I thought I would use it as an opportunity to evaluate Meteor.js. Disclaimer, I only built a prototype alongside the actual product so I won't get to test the app at scale.

For those who haven't heard about it, go watch the Meteor [intro video](http://www.meteor.com/screencast) and [sequel](http://www.meteor.com/authcast). Awesome stuff, huh?

So far I am delighted ^_^

The reactive datasources are truly as simple as they seem. For instance, with the following four lines my app is automatically watching for changes to a Collection.

``` javascript
Tweets = new Meteor.Collection('tweets');

Template.home.tweets = function () {
return Tweets.find({}, { sort: { created_at: -1 } });
}
```

I've also been pretty happy with how applications are structured. For instance, you can create as many template files as you want and Meteor will do the dirty work of picking them up and concatenating all of them. Then for each template you can define all the helper functions you need in the following manner.

``` html
// In template.html
<template name="nav">
  <nav>Welcome, {% raw %}{{ username }}{% endraw %}</nav>
</template>
```

``` javascript
// In main.js

if (Meteor.isClient) {
  Template.nav.username = function () {
    return Session.get('username');
  };
}
```

I really like how I can break my templates and views down into smaller and smaller chunks and then piece them together as needed. After working in Backbone.js a good bit recently it feels like the 'right' amount of boilerplate code.

So what have I been frustrated so far?

Well, developing packages isn't simple. It took me a while to figure out the proper way to specify a package to use straight from a github repo. I.E. The recent 0.6.5 release changed how dependencies in pacakages are specified.

It certainly is still an emerging framework and because of this APIs for packages still aren't 'nailed down'. That being said, it looks like that is one of the [next items on the roadmap](https://trello.com/b/hjBDflxp/meteor-roadmap). I think it's safe to say that meteorite will be rolled into the core app pretty soon.

Additionally, understanding the core parts of how an application is built isn't simple. For example, did you know that Meteor runs within a Node.js Fiber? It is in fact a synchronous framework. Moreover, digging into the guts of the framework isn't for the feint of heart. The core files are pretty well documented but I'd love to see a talk on how the whole framework is bootstrapped.

So far that's all I have, if you haven't yet I hope you give this framework a try.

