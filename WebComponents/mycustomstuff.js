/**
 * Created by alex on 23.12.14.
 */

(function() {

    document.MyStuff = {};

    var _myStuff = document.MyStuff;

    var proto =  Object.create(HTMLElement.prototype, {
        createdCallback: {
            value: function () {
                var shadow = this.createShadowRoot();
                shadow.innerHTML = "<b>I'm in the element's Shadow DOM!</b>";
            }
        },
        attachedCallback: {
            value: function () {
                console.dir('@foo (A) = '+this.getAttribute('foo'));
            }
        }
    });


   // Object.defineProperty(proto, "foo");


    _myStuff.ainput = document.registerElement('a-input', {
        prototype: proto
    });


})();