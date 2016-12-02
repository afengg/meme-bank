import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './items.html';
import clipboard from 'ngclipboard';
import { Items } from '../../api/items.js';
/*import 'bootstrap/dist/css/bootstrap.css';
import bootstrap from 'bootstrap'
 */
class ItemsCtrl {
	constructor($scope) {
		$scope.viewModel(this);
    
		this.helpers({
    
			items() {
        return Items.find({});
			}
		})
	}
	
 
	removeItem(item) {
		Items.remove(item._id);
	}
	
}

 
export default angular.module('items', [
  angularMeteor,
  clipboard
])
  .component('items', {
    templateUrl: 'imports/components/items/items.html',
    controller: ['$scope', ItemsCtrl]
  });