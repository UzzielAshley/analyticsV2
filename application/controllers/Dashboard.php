<?php 
defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * 
 */
class Dashboard extends CI_Controller {
	function __construct(){
	    parent:: __construct();
	    // $this->api->checkAuth();
	    // $this->load->library('SharedFunctions');
	    // $this->load->model('DashboardModel');
	    $this->uid            = $this->session->userdata('id');
	    $this->auth           = $this->session->userdata('auth');
	    $this->email          = $this->session->userdata('email');
  	}

	public function loadPage(){
		$data['title'] = 'Overview';
		$this->load->view('headers/header', $data);
		$this->load->view('sidebar/sidebar');
		$this->load->view('oa/dashboard');
	}
}

 ?>