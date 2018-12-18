export function test1(){
    console.log('Calling test 1 function');
    angular.module('app',['ngAudio'])
      .controller("total-list",function($scope,ngAudio){
        $scope.sound = ngAudio.load("../../assets/play.mp3"); // returns NgAudioObject
      })
}
