/**
 * Created by alex on 28.09.16.
 */


var noble = require('noble');

//noble.state = 'poweredOn';

function callback(state) {

    console.log('Current stat: '+state);


}


noble.on('stateChange', function(state) {
    if (state === 'poweredOn') {
        var serviceUUIDs = ["aa80"]; // default: [] => all
       // var serviceUUIDs = []; // default: [] => all
        noble.startScanning(serviceUUIDs);
    } else {
        noble.stopScanning(serviceUUIDs);
    }
});



//noble.startScanning(); // any service UUID, no duplicates





noble.on('discover', function(peripheral) {
    console.log('on -> discover: ' + peripheral);

    console.log('peripheral discovered (' + peripheral.id +
        ' with address <' + peripheral.address +  ', ' + peripheral.addressType + '>,' +
        ' connectable ' + peripheral.connectable + ',' +
        ' RSSI ' + peripheral.rssi + ':');
    console.log('\thello my local name is:');
    console.log('\t\t' + peripheral.advertisement.localName);
    console.log('\tcan I interest you in any of the following advertised services:');
    console.log('\t\t' + JSON.stringify(peripheral.advertisement.serviceUuids));

    //noble.stopScanning();

    peripheral.on('connect', function() {
        console.log('on -> connect');
        this.updateRssi();
    });

    peripheral.on('disconnect', function() {
        console.log('on -> disconnect');
    });

    peripheral.on('rssiUpdate', function(rssi) {
        console.log('on -> RSSI update ' + rssi);
        this.discoverServices();
    });

    peripheral.on('servicesDiscover', function(services) {
        console.log('on -> peripheral services discovered ' + services);

        var serviceIndex = 0;

        services[serviceIndex].discoverIncludedServices();
    });

    var serviceData = peripheral.advertisement.serviceData;
    if (serviceData && serviceData.length) {
        console.log('\there is my service data:');
        for (var i in serviceData) {
            console.log('\t\t' + JSON.stringify(serviceData[i].uuid) + ': ' + JSON.stringify(serviceData[i].data.toString('hex')));
        }
    }
    if (peripheral.advertisement.manufacturerData) {
        console.log('\there is my manufacturer data:');
        console.log('\t\t' + JSON.stringify(peripheral.advertisement.manufacturerData.toString('hex')));
    }
    if (peripheral.advertisement.txPowerLevel !== undefined) {
        console.log('\tmy TX power level is:');
        console.log('\t\t' + peripheral.advertisement.txPowerLevel);
    }


     peripheral.connect();
});

/*
noble.startScanning([], true); // any service UUID, allow duplicates
var allowDuplicates = false // default: false
noble.startScanning(serviceUUIDs, allowDuplicates[callback(error)]); // particular UUID's
*/