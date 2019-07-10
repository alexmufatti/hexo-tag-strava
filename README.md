[![Build Status](https://travis-ci.org/alexmufatti/hexo-tag-strava.svg?branch=master)](https://travis-ci.org/alexmufatti/hexo-tag-strava)

# hexo-tag-strava

Simply Embed Strava activity tag plugin for [Hexo](https://github.com/hexojs/hexo).

## Introduction

This is a Hexo tag plugin which allows you to simply embed Strava activities to you blog.

## DEMO

TBD

## Installation

`npm install hexo-tag-strava`

## Usage

```
{% strava id:activityId embedId:embedId %}
```
You have to grab the two parameters from the actifity page:
- activityId is the last part of the activity address
- embedId can be found in "share activity" menu under embed. It is the last part of the src attribute

Sorry, is not simple to get this information but if can't be done in other way.

## Example

[14km lento](https://alexmufatti.it/2019/07/07/activity/)

## License

MIT

[Hexo]: http://hexo.io/
