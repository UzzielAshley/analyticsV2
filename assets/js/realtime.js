class OARealtime {

	constructor(){

    let c_type    	= location.protocol;
    let random    	= Math.random().toString().replace(/\./ig, '');

    this.school     = "local/";
    this.host      	= this.school == "local/" ? 'ws://localhost:1884' : (c_type == "http:" ? "ws://v2node001.orangeapps.ph:1884/mqtt" : "wss://v2node001.orangeapps.ph:1885/mqtt");
    this.client_id  = 'oa_admin_' + random;

	this.mqtt = this.connect();
	}

	connect(){
    var client = mqtt.connect(this.host, {clientId: this.client_id, qos: 1});

    client.subscribe(this.client_id, {qos: 1});
    client.subscribe('oa_admin_updates');

    return client;
	}


	send(topic, data){
	}

	subscribe(topic){
	}


}


const realtime = new OARealtime();


// console.log(realtime)