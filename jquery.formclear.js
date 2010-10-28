/**
* jQuery.formclear - prefill for input fields
*
* version 1.2
*
* http://return1.at/
* http://github.com/return1/jquery.formclear
*
* Original plugin (discontinued) by Jonathan Yarbor @ http://plugins.jquery.com/project/FormClear
* modified by Dominique Lederer (use focus instead of click, use title tag for prefill, minor code cleanup, only set helper txt on emtpyval fields)
*
* Copyright (c) 2010 Dominique Lederer
* Licensed under terms of the MIT License (http://www.opensource.org/licenses/mit-license.php)
*/

/*jslint white: true, undef: true, nomen: true, eqeqeq: true, regexp: true, newcap: true */
/*global $, jQuery */

(function ($) {
    $.fn.formclear = function (opts) {
        var defaults = {
                inactivecolor: '#777',
                activecolor: '#000',
                emptyval: "",
                fetchattr: 'title'
            },
            allowedtext;

        opts = $.extend({}, defaults, opts);

        return this.each(function () {
            allowedtext = $(this).is(':text') || $(this).is(':password') || $(this).is('textarea');

            if (allowedtext) {
                if ($(this).val() === opts.emptyval) {
                    $(this).val($(this).attr(opts.fetchattr));
                    $(this).css('color', opts.inactivecolor);
                }

                $(this).bind('focus', function () {
                    if ($(this).val() === $(this).attr(opts.fetchattr)) {
                        $(this).val(opts.emptyval);
                        $(this).css('color', opts.activecolor);
                    }
                });

                $(this).bind('blur', function () {
                    if ($(this).val() === opts.emptyval || !$.trim($(this).val()).length) {
                        $(this).val($(this).attr(opts.fetchattr));
                        $(this).css('color', opts.inactivecolor);
                    }
                });
            }
        });
    };
})(jQuery);