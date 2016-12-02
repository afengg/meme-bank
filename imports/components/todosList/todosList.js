import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './todosList.html';
import clipboard from 'ngclipboard';
import { Tasks } from '../../api/tasks.js';
/*import 'bootstrap/dist/css/bootstrap.css';
import bootstrap from 'bootstrap'
 */
class TodosListCtrl {
	constructor($scope) {
		$scope.viewModel(this);
	
		this.hideCompleted = false;
	
		this.helpers({
    
			tasks() {
				const selector = {};
				
				// If hide completed is checked, filter tasks
				if (this.getReactively('hideCompleted')) {
				  selector.checked = {
					$ne: true
				  };
				}
				return Tasks.find(selector, {
					sort: {
						createdAt: -1
					}
				});
			},
				incompleteCount() {
					return Tasks.find({
						checked: {
						$ne: true
					}
				}).count();
			}
		})
	}
	
	addTask(newTask) {
		Tasks.insert({
			text: newTask,
			createdAt: new Date
		});
		
		this.newTask = 'done!';
	}
	
	
	
	setChecked(task) {
    // Set the checked property to the opposite of its current value
		Tasks.update(task._id, {
			$set: {
				checked: !task.checked
			},
		});
  }
 
	removeTask(task) {
		Tasks.remove(task._id);
	}
	
}

 
export default angular.module('todosList', [
  angularMeteor,
  clipboard
])
  .component('todosList', {
    templateUrl: 'imports/components/todosList/todosList.html',
    controller: ['$scope', TodosListCtrl]
  });