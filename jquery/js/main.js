

/*


 jsonPath - Required - The path to the resources folder where QUAIL is located. Certain tests load additional strings like emoticons or filler words from JSON files to save space. If a test ends up needing to load additional resources, this will be required.
 guideline - Required - Either the name of a guideline file that can be found in the jsonPath directive, or an array of test names.
 accessibilityTests - Optional - If you wish to load your own custom test definitions, this will prevent QUAIL from using it’s own tests.json file to load the tests. This is also useful if you are loading tests.json through your own method and don’t want QUAIL to do it for you.
 testFailed - Optional - A callback that will be called everytime an item fails a test. This callback recieves an object with the following items:

 element - The native jQuery/Sizzle object that represents the DOM element.
 testName - The name of the test that failed
 severity - The severity of the test.
 options - Additional options as passed by the test definition.


 customTests - Optional - An object of tests that can be added to QUAIL on the fly. Tests should have a name, and either use some of the pre-defined callbacks in QUAIL (like “selector”), or a “custom” type, where you define a callback that accepts a QUAIL object.
 preFilter - Optional - A callback that can be used to pre-filter out failed items. If this callback returns false, then the item is skipped and not considered failed. This callback receives the following argumetns: - testName - The name of the test that failed - element - A full jQuery/Sizzle object of the element - options - Any additional options set by the test
 complete - Optional - Called when all the tests are completed. This is useful for reporting, as it gets a summary of all resutls. This callback gets a single object with the following items:
 totals - An object with the total number of severe, moderate, and suggestion tests which failed.
 results - An object with all the elements and tests that failed.


 */




function makeOuterDiv(selector){


    var accessibilityTests = {
        "imgHasAlt": {
            "type": "selector",
            "selector": "img:not(img[alt])",
            "testability": 1,
            "title": {
                "en": "Image elements must have an \"alt\" attribute"
            },
            "description": {
                "en": "All <code>img</code> elements must have an alt attribute"
            }
        },
        "imgHasID": {
            "type": "selector",
            "selector": "img:not(img[id])",
            "testability": 0
        },
        "pHasID": {
            "type": "selector",
            "selector": "p:not(p[id])",
            "testability": 0.5
        },
        "linkHaslabel": {
            "type": "selector",
            "selector": "a:not(p[title])",
            "testability": 1
        }
    };


    console.log('selector = '+selector);

    var element = $('#myimg');

    console.log('element = '+element);
    var parent = element.parent();
    console.log('parent element = '+parent);
    // var div = element.parent().createElement('div');

    var d = document.createElement('div');
    //  $(d).append(element);
    element.clone().appendTo(d);
    $(d).css("display", "none");
    $(d).appendTo(parent);


    //  d.remove();
    //   d.append(element.get().cloneNode(true));


    function failed(event){
        console.log('Error on the page');
        console.log('Element: ' + event.element);
        console.log('Test: ' + event.testName);
        console.log('Severity: '+ event.severity);
    }

    function complete(event){
        console.log("TEST COMPLETE");
        console.log("Error Count "+event.totals);
        console.dir(event.totals);
        console.log("Error Results "+event.results);
        console.dir(event.results);

       // d.remove();
    }

    $(d).quail({ jsonPath : 'js/quail',
        guideline : [ 'imgHasAlt','imgHasID','pHasID','linkHaslabel'],
        accessibilityTests : accessibilityTests,
        testFailed : failed,
        /*
         customTests : {
         myCustomTest : {
         type : 'custom',
         callback : function(quail) {
         quail.html.find('.error').each(function() {
         quail.testFails('myCustomTest', $(this));
         })
         }
         }
         }, */

        complete : complete
    });
}





$( document ).ready(function() {
    console.log('Hi, your stuff has been loaded');
    makeOuterDiv('#myimg');
});
