$(function(){

	// $('#audit_date').daterangepicker()
	// $('#datepicker').datepicker({
  //   autoclose: true
  // });

	let student 	= [];
	let employee	= [];
	let parent 		= [];
	let schools 	= {};
	let urlx 			= 'http://localhost:3006';
	let mute 			= false;
	let a_school 	= 'all';
	let modules 	= [];
	let timer 		= null;

	setInterval(()=>{
		getAnalytics();
	}, 5000);

	setInterval(()=>{
		getModules(1);
	}, 30000);

	$(document).on('change', '#school_list', function(){
		a_school = $('#school_list').val();
		$('#pagination').twbsPagination("destroy");
		getATrail();
	});

	$(document).on('change', '#school_list_mdl', function(){
		var type = $('#online_users_mdl').attr('data-type');
		getOnlineUsers(type);
	})

	$(document).on('click', '#mute_notif', function(e){
		e.stopPropagation();
		if(mute == false){
			$(this).text('Allow notification');
			mute = true;
		}else{
			$(this).text('Mute notification');
			mute = false;
		}
	});

	$(document).on('click', '.-user_details', function(){
		var users = ['e4da3b7fbbce2345d7772b0674a318d5', 'c4ca4238a0b923820dcc509a6f75849b',
								 'c81e728d9d4c2f636f067f89cc14862c', 'eccbc87e4b5ce2fe28308fd9f2a7baf3'];
	  var parent= $(this).parents('.-user_div');
		var index = parent.index();
		var type  = users[index];
		var modal = $('#online_users_mdl');
		getOnlineUsers(type);

		$('#school_list_mdl').val('all');
		modal.find('.modal-title').html(parent.find('p').text())
		modal.attr('data-type', type);
		modal.modal('show');
	});

	$(document).on('change', '#audit_date', function(){
		$('#pagination').twbsPagination("destroy");
		getATrail();
		getModules();
	});

	$(document).on('keyup', '#search_input', function(){
		$('#pagination').twbsPagination("destroy")

		clearTimeout (timer);
	  timer = setTimeout(() => {
			getATrail()
		}, 500);
	});

	let getOnlineUsers = (type)=>{
		var id = $('#school_list_mdl').val();

		$.ajax({
			url:  `${urlx}/get_schools`,
	    type: 'POST',
	    dataType: 'json',
	    data: 'data',
	    success: function(school){
	    	$.ajax({
					url:  `${urlx}/get_online_users`,
			    type: 'POST',
			    dataType: 'json',
			    data: {id, type},
			    success: function(data){
						var html = '';

						if(data != null){
				    	for(var i in data){
				    		var auth  = i.split('_')[i.split('_').length - 1];
				    		var ndata = JSON.parse(data[i]);

				    		if((type == auth) && (ndata.status == 1)){
									html += `<li><span class="text"><b>${school[ndata.school_id]}</b> ${ndata.name}</span></li>`;
								}
							}

							$('#user_list').html(html);
						} else{
							$('#user_list').html('<li><span class="text">No user found</span></li>')
						}
			    }
				});
	    }
	  });
	}

	let getATrail = (offset = 1)=>{
		var search = $.trim($('#search_input').val());
		$('#pagination').unbind('page');

		$.ajax({
			url:  `${urlx}/get_audit_trail`,
	    type: 'POST',
	    dataType: 'json',
	    data: {'id': 'local', offset, 'date' : '02/28/2019 - 02/28/2019', search},
	    success: function(data){
	    	if(data.data.length != 0){
	    		total = data.total;
		    	data  = data.data;

					$('#audit_trail').html('');

		    	for(let i in data){
		    		ndata = data[i];
		    		var html = `<div class="-log-list -brdr">
								          <figure class="-fig-log">
								            <img class="-img-log" src="https://techcrunch.com/wp-content/uploads/2018/07/logo-2.png?w=300" alt="">
								          </figure>
								          <span class="-spn-logs">
								            <h1 class="-school-name">${ndata.school_name}</h1>
								            <p class="-log-desc">${ndata.data}</p>
								          </span>
								          <small class="-time-log">${ndata.date}</small>
								        </div>`;

		    		$('#audit_trail').append(html);
		    	}

		    	if(total > 20){
		    		var total_pages = Math.ceil(total / 20);

			    	$('#pagination').twbsPagination({
		          totalPages: total_pages,
		          visiblePages: 5
		        }).on('page', function (event, page) {
		        	getATrail(page)
		        }).removeClass('hide');
		      }

		    	$('#atrail_loader').addClass('hide');
	    	}else{
	    		$('#audit_list').html('<h2><center>No Data</center></h2>');
	    		$('#atrail_loader').addClass('hide');
	    	}

	    }

		})

	}

	let getSchools = ()=>{

		$.ajax({
			url:  `${urlx}/get_schools`,
	    type: 'POST',
	    dataType: 'json',
	    data: 'data',
	    success: function(data){
	    	for(let i in data){
	    		$('#school_list').append(`<option value="${i}">${data[i].toUpperCase()}</option>`);
	    		$('#school_list_mdl').append(`<option value="${i}">${data[i].toUpperCase()}</option>`);
	    	}
	    }

		})

	}

	let getModules = (auto = 0) =>{

		$.ajax({
			url:  `${urlx}/get_modules`,
	    type: 'POST',
	    dataType: 'json',
	    data: {'date' : '02/28/2019 - 02/28/2019'},
	    success: function(data){
	    	html = stat = '';
	    	if(auto == 0){
	    		$('#module_graphs').html('');
	    	}
	    	for(let i in data){

	    		html = `<section class="col-lg-6 connectedSortable">
					          <div class="box box-primary">
					             <div class="box-header">
					                <i class="ion ion-clipboard"></i>
					                <h3 class="box-title">${i.toUpperCase()}</h3>
					                <div class="box-tools pull-right">
					                  <button class="btn btn-default btn-sm testx" data-widget="collapse"><i class="fa fa-minus"></i></button>
					                  <button class="btn btn-default btn-sm" data-widget="remove"><i class="fa fa-times"></i></button>
					                </div>
					              </div>
					            <div class="box-body">
					              <div id="${i}-graph"></div>
					            </div>
					          </div>

					        </section>`;

	    		let xdata 	= [];
	    		let ydata 	= [];
	    		let gwidth	= [];

	    		for(let a in data[i]){
	    			sub_module = a.toUpperCase().replace('_', ' ');
	    			count 		 = data[i][a].length;
	    			icon 			 = 'thumbs-o-up';

	    			switch(sub_module){
	    				case 'POST': icon = 'edit';	break;
	    				case 'COMMENT': icon = 'comment-o';	break;
	    				case 'FILE SUBMISSION': icon = 'paperclip';	break;
	    				case 'DOCUMENTS': icon = 'folder-open-o';	break;
	    				case 'CALENDAR': icon = 'calendar-o';	break;
	    				case 'ACTIVITY TAKING': icon = 'pencil';	break;
	    				case 'ACTIVITY CREATION': icon = 'file-o';	break;
	    				case 'FILE DOWNLOAD' : icon = 'download'; break;
	    				case 'FILE VIEW' : icon = 'eye'; break;
	    				case 'UPLOAD' : icon = 'upload'; break;
	    				case 'DELETE' : icon = 'remove'; break;
	    				case 'CREATE EVENT' : icon = 'calendar-plus-o'; break;
	    				case 'DELETE EVENT' : icon = 'calendar-times-o'; break;
	    				case 'UPDATE EVENT' : icon = 'calendar-minus-o'; break;
	    			}

	    			stat += `<div class="col-md-3 col-sm-6 col-xs-12">
						            <div class="info-box">
						              <span class="info-box-icon bg-orange"><i class="fa fa-${icon}"></i></span>
						              <div class="info-box-content">
						                <span class="info-box-text">${sub_module}</span>
						                <p>${i}</p>
						                <span class="info-box-number">${count}</span>
						              </div>
						            </div>
						          </div>`;

						xdata.push(sub_module);
	    			ydata.push(count);
	    			gwidth.push(0.2)
	    		}

	    		let gdata = [{x: xdata, y: ydata, type: 'bar', width: gwidth}];

	    		if(auto == 0){
	    			$('#module_graphs').append(html);
	    			$('.connectedSortable').sortable({
					    placeholder         : 'sort-highlight',
					    connectWith         : '.connectedSortable',
					    handle              : '.box-header, .nav-tabs',
					    forcePlaceholderSize: true,
					    zIndex              : 999999
					  });
	    		}

	    		Plotly.newPlot(`${i}-graph`, gdata);
	    		$('#module_statistics').html(stat);
	    	}
	    }

		})

	}


	let getAnalytics = ()=>{
		$.ajax({

			url:  `${urlx}/get_analytics`,
	    type: 'POST',
	    dataType: 'json',
	    data: {'id': $('#school_list').val()},
	    success: function(data){
	    	$('.-user_count').eq(0).find('h3').text(data.parent);
	    	$('.-user_count').eq(1).find('h3').text(data.student);
	    	$('.-user_count').eq(2).find('h3').text(data.employee);

	    	for(let x in data.online_users){
	    		s_data = data.online_users[x]
	    		if(schools[x] === undefined){
	    			schools[x] = [{s_data}];
	    		}else{
	    			schools[x].push(s_data);
	    		}
	    	}

	    }

		})
	}

	getATrail();
	getSchools();
	getAnalytics();
	getModules();

	realtime.mqtt.on('message', function(topic, data){
		let ndata = JSON.parse(data.toString());

		if(ndata.type == 'audit_trail'){
			if(ndata.school == a_school){
				$('#audit_list').prepend(`<li><b>${ndata.school_name}</b><span class="text">${ndata.data}</span></li>`);
				if(mute == false){
					playSound();
				}
			}else if(a_school == 'all'){
				$('#audit_list').prepend(`<li><b>${ndata.school_name}</b><span class="text">${ndata.data}</span></li>`);
				if(mute == false){
					playSound();
				}
			}
		}


	})

})

function playSound(){
  document.getElementById("notif_sound").innerHTML='<audio autoplay="autoplay"><source src="' + $('#soundpath').val() + '.mp3" type="audio/mpeg" /><embed hidden="true" autostart="true" loop="false" src="' + $('#soundpath').val() +'.mp3" /></audio>';
}
