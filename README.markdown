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

* 1.1 - use focus instead of click, use title tag for prefill, minor code cleanup, only set helper txt on emtpyval fields
* 1.0 - initial by Jonathan Yarbor @ [http://plugins.jquery.com/project/FormClear][1]


License
-------

The MIT License

Copyright (c) 2010 Dominique Lederer, [http://return1.at][2]

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

[0]: http://github.com/return1/jquery.formclear "jQuery.formclear"
[1]: http://plugins.jquery.com/project/FormClear "original plugin"
[2]: http://return1.at/ "return1"