---
layout: post
title: Scaling Meteor JS
published: false
---

## Thoughts on scalability
In terms of production readyness, how close is Meteor? If you've followed closely you may have noticed that it's possible to have a lot of events firing and data being passed along. It's actually possible to have all the clients hitting Mongo at the same time which can be bad.

As a first line of defense it's recommended to defensive code your queries to be as minimal as possible and be smart about your indexes.

On a more promising note, Arunoda (an active community member) has a package called [Smart Collections](http://meteorhacks.com/introducing-smart-collections.html) that watches Mongo's opslog to eliminate calls straight into the database, you can see his performance tests [here](http://meteorhacks.com/making-meteor-500-faster-with-smart-collections.html).

A recent discussion on the mailing list indicates that the core team really likes this idea and we should expect to see it in the core package soon enough. Additionally, the core team is working away at a version of meteor that can be deployed across multiple servers.