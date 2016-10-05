import angular from 'angular';
import angularMeteor from 'angular-meteor';
import sidebar from '../imports/components/sidebar/sidebar';
import todosList from '../imports/components/todosList/todosList';
import bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/simple-sidebar.css';

angular.module('memebank', [
	angularMeteor,
	sidebar.name,
  todosList.name
]);