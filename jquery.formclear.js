/**
* jQuery.formclear - prefill for input fields
*
* version 1.1
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
            $obj,
            allowedtext,
            normalval;

        opts = $.extend({}, defaults, opts);

        return this.each(function () {
            $obj = $(this);
            allowedtext = $obj.is(':text') || $obj.is(':password') || $obj.is('textarea');

            if (allowedtext) {
                normalval = $obj.attr(opts.fetchattr);
                if ($obj.val() === opts.emptyval) {
                    $obj.val(normalval);
                    $obj.css('color', opts.inactivecolor);
                }

                $obj.bind('focus', function () {
                    if ($obj.val() === normalval) {
                        $obj.val(opts.emptyval);
                        $obj.css('color', opts.activecolor);
                    }
                });

                $obj.bind('blur', function () {
                    if ($obj.val() === opts.emptyval || !$.trim($obj.val()).length) {
                        $obj.val(normalval);
                        $obj.css('color', opts.inactivecolor);
                    }
                });
            }
        });
    };
})(jQuery);