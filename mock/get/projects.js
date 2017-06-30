var data = require("./projects/projects.json");

module.exports = {
    path: '/billedhours/ddc/v1/projecthours',
    template: function(params, query, body, cookie) {
        return data;
    }
};