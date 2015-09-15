/**
 * Created by alex on 31.10.14.
 */




function  makt () {



    var link = document.querySelector('link[rel=import]');
    var _import = link.import;

    var host = document.querySelector('#myButton');

    var root = host.createShadowRoot();
    root.textContent = 'こんにちは、影の世界!';


    var shadow = document.querySelector('#nameTag').createShadowRoot();
    var template = _import.querySelector('#nameTagTemplate');
    var clone = document.importNode(template.content, true);
    shadow.appendChild(clone);


    document.querySelector('#nameTag').textContent = 'Shellie';

}




function machett(){


    var link = document.querySelector('link[rel=import]');
    var _import = link.import;

    console.log('Mach ett  = '+  document.querySelector('#nameTag').textContent);

    var name =  document.querySelector('#nameTag').textContent;

    var shadow = document.querySelector('#nameTag').createShadowRoot();
    var template = _import.querySelector('#nameTagTemplate2');
    var clone = document.importNode(template.content, true);

    shadow.appendChild(clone);

    document.querySelector('#nameTag').textContent = name;

}

function test(){


    var template = _import.querySelector('#cinput');
    var clone = document.importNode(template.content, true);

    console.dir(_myStuff.shadow);
    var shadow =  _myStuff.shadow;

    while (shadow.hasChildNodes()) {
        shadow.removeChild(shadow.lastChild);
    }


/*
    var oldChild = shadow.removeChild(shadow.firstChild);
                   shadow.removeChild(shadow.firstChild);

 */

//   shadow.replaceChild(clone,shadow.firstChild);
    _myStuff.shadow.appendChild(clone);

}

function getName(){


    var name =  document.querySelector('#tf').value;

    document.querySelector('#nameTag').textContent = name;

}