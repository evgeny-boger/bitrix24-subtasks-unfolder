// ==UserScript==
// @name         Bitrix24 Subtasks Unfolder
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Automatically unfolds folded tasks to show all the subtasks.
// @author       Evgeny Boger
// @include        https://*.bitrix24.ru/*
// @grant        none
// @run-at document-end
// @require  https://code.jquery.com/jquery-3.1.1.slim.min.js
// @require  https://gist.github.com/raw/2625891/waitForKeyElements.js
// ==/UserScript==

(function() {
    'use strict';

    waitForKeyElements (".task-title-folding", function(sel) {
        sel.not(".task-list-item-opened .task-title-folding").click();
    });

    waitForKeyElements (".task-gantt-item-has-children > .task-gantt-item-folding", function(sel) {
        sel.not(".task-gantt-item-opened > .task-gantt-item-folding").click();
    });
})();
