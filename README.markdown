 jQuery.formclear
=================
prefill for input fields
[http://github.com/return1/jquery.formclear][0]

Description and Usage
---------------------

prefills input fields, removes prefill on focus

HTML:

    <input type="text" name="search" title="Search..." />

Javascript:

    $(":input").formclear();

Customizing:

    $(":input").formclear({
        inactivecolor: '#777',
        activecolor: '#000',
        emptyval: "",
        fetchattr: 'title'
    });


Changelog
---------

* 1.2 - multiple input fields with formclear did not work correctly
* 1.1 - use focus instead of click, use title tag for prefill, minor code cleanup, only set helper txt on emtpyval fields
* 1.0 - initial by Jonathan Yarbor @ [http://plugins.jquery.com/project/FormClear][1]


License
-------

[http://return1.mit-license.org/][2]

[0]: http://github.com/return1/jquery.formclear "jQuery.formclear"
[1]: http://plugins.jquery.com/project/FormClear "original plugin"
[2]: http://return1.mit-license.org/ "mit"
