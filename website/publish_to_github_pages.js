const ghpages = require('gh-pages');
const path = require('path');
const fs = require('fs-extra')


ghpages.publish('build/captainduckduck', function (err) {
    if (err)
        console.log(err);
    else
        console.log('Built and deployed successfully');
});