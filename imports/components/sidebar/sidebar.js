import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './sidebar.html';
import { Items } from '../../api/items.js';

class SidebarCtrl {
  constructor($scope) {
    $scope.viewModel(this);
  
  }
  addItem(newItem, tag1, tag2, tag3, tag4, tag5) {
    tag_array = [tag1, tag2, tag3, tag4, tag5];
    tag_array = tag_array.filter(function(n){ return n != null }); 
    Items.insert({
      link: newItem,
      createdAt: new Date,
      tags: tag_array
      });
    this.newItem = 'done!';
  }

}
export default angular.module('sidebar', [
  angularMeteor
])
  .component('sidebar', {
    templateUrl: 'imports/components/sidebar/sidebar.html',
    controller: ['$scope', SidebarCtrl]
  });