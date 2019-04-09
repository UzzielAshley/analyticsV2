<?php 
defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * 
 */
class Login extends CI_Controller {	
 	function userLogin(){
		$data['title'] = 'Paydro Analytics';
		$this->load->view('headers/header', $data);
		$this->load->view('login/login');
		$this->load->view('footers/footer');
	}

 	function userValidation(){
 		redirect(base_url() . 'dashboard');
	}
	
}

 ?>