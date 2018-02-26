# get-migration-issues
### *Package Name*: get-migration-issues
### *Child Type*: post import
### *Platform*: all
### *Required*: All (Deprecated)

This child module is built to be used by the Brigham Young University - Idaho D2L to Canvas Conversion Tool. It utilizes the standard `module.exports => (course, stepCallback)` signature and uses the Conversion Tool's standard logging functions. You can view extended documentation [Here](https://github.com/byuitechops/d2l-to-canvas-conversion-tool/tree/master/documentation).

## Purpose

This child module retrieves any and all migration issues created by by Canvas following a content migration (i.e broken links, items which failed to import). This child module is not currently in use because the report is only accurate before the other post import child modules run.

## How to Install

```
npm install get-migration-issues
```
OR
```
npm install https://github.com/byuitechops/get-migration-issues.git
```

## Run Requirements

This child module requires the following fields in the course.info object:
* `migrationID`
* `canvasOU`
* `domain`


## Options
None

## Outputs
A new property titled `migrationIssues` is created on course.info.

## Process
1. API call to get migration issues
2. Add results to course.info

## Log Categories
This module does not use course.log anywhere.

## Requirements
Get Canvas migration issues for debugging and reporting purposes.