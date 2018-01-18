webpackJsonp([1],{

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


document.addEventListener("DOMContentLoaded", function (event) {
    var scripts = document.scripts,
        scripts_count = scripts.length,
        scripts_total_count = 0,
        file_loaded_count = 0,
        percent = document.getElementById('perc'),
        preloader = document.getElementById('page-preloader');

    var links = document.querySelectorAll('link'),
        links_count = links.length;

    for (var i = 0; i < links_count; i++) {
        links.item(i).onload = function () {
            file_loaded();
        };
    }
    for (var _i = 0; _i < scripts_count; _i++) {
        if (scripts.item(_i).async) {
            scripts_total_count++;
        }
    }

    for (var _i2 = 0; _i2 < scripts_count; _i2++) {
        if (scripts.item(_i2).async) {
            scripts.item(_i2).onload = function () {
                file_loaded();
            };
            scripts.item(_i2).onerror = function () {
                file_loaded();
            };
        }
    }
    function file_loaded() {
        file_loaded_count++;
        percent.innerHTML = (100 / (scripts_total_count + links_count) * file_loaded_count << 0) + '%';
        if (file_loaded_count >= scripts_total_count + links_count) {
            setTimeout(function () {
                if (!preloader.classList.contains('preloader--done')) {
                    preloader.classList.add('preloader--done');
                    setTimeout(function () {
                        preloader.classList.add('preloader--hidden');
                    }, 1200);
                }
            }, 700);
        }
    }
});

/***/ })

},[45]);