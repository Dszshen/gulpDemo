XXAPP.controller('ApiDevCtrl', function($rootScope, $scope, $http,$sce, $timeout) {

    // node.js, "classic" way:
    //var MarkdownIt = require('markdown-it'),
    //    md = new MarkdownIt();
    //var result = md.render('# markdown-it rulezz!');
    // node.js, the same, but with sugar:
    //var md = require('markdown-it')();
    //var result = md.render('# markdown-it rulezz!');
    // browser without AMD, added to "window" on script load
    // Note, there is no dash in "markdownit".
    var md = window.markdownit();
    $http.get("/assets/md/api/dev.md?t="+currTime).success(function(data){
        var result = md.render(data);
        $scope.devApi= $sce.trustAsHtml(result);


    }).error(function(error){
        console.log(error);
    });

});