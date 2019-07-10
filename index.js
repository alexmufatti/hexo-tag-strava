'use strict';

var strava = function(args, content){

        var embedId = "";
        var id = "";
        var returnHTML = "";

        // advanced argument "key:value"
        for (var i in args) {
            var arg = args[i];
            if(arg.startsWith('id:')) {
                id = arg.slice(3).trim();
            }
            if(arg.startsWith('embedId:')) {
                embedId = arg.slice(8).trim();
            }
        }

        // common argument "value"
        if(embedId.length==0 || id.length ==0) return returnHTML;
         
        // generate html
        if(embedId != ""){
          returnHTML = '<div class=\'strava-wrapper\'><iframe height=\'405\' width=\'590\' frameborder=\'0\' allowtransparency=\'true\' scrolling=\'no\' src=\'https://www.strava.com/activities/'+id+'/embed/'+embedId+'\'></iframe></div>'
        }
          return returnHTML;
};

if (typeof hexo === 'object') {
  hexo.extend.tag.register('strava', strava ,{
    async: true,
    ends: false
  });
}

if ( typeof module === 'object' && module.exports) {
    module.exports.strava = strava;
}

