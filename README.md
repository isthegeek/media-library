# Media Module

## Introduction

The Media module provides an extensible framework for managing files and multimedia assets, regardless of whether they are hosted on your own site or a 3rd party site.

Media's aim is to solve Drupal's long standing media handling problem.

## Requirements

* [Media Entity](https://www.drupal.org/project/media_entity)
* [Media Entity Image](https://www.drupal.org/project/media_entity_image)
* [Video Embed Field](https://www.drupal.org/project/video_embed_field)
* [Media Entity Slideshow](https://www.drupal.org/project/media_entity_slideshow)

## Installation

After downloading the module in the modules folder, visit the Extend (/admin/modules) page to enable the module. You might have to install the modules required before enabling this module.

## Configuration

1) Enable the module
2) visit /media/add to add media content to website.
3) Visit /admin/structure/media to edit the default media bundles.

### Using Slick to modify gallery display

You can use the slick library to improve the gallery display.

1) Download [Slick Library](https://github.com/kenwheeler/slick/) and extract it in libraries directory. Required assets should be available at /libraries/slick/slick/slick.css
2) Download [Blazy](https://github.com/dinbror/blazy) and extract in libraries directory so that the required file is located at /libraries/blazy/blazy.min.js
3) Download [Jquery Easing](https://github.com/gdsmith/jquery.easing) and extract it in the libraries directory. Required files should be available at /libraries/easing/jquery.easing.min.js
4) Download and install [Blazy Module](https://www.drupal.org/project/blazy)
5) Download and install [Slick Module](https://www.drupal.org/project/slick)
6) Download and install [Slick Media Module](https://www.drupal.org/project/slick_media)
7) Now visit admin/structure/media/manage/gallery/display and change the Format of Slide field to 'Slick Media'. Click on the configure icon for additional settings. You can now save the form and verify that the new display is working.

## Technical details

@ToDo

## Maintainers

@ToDo

