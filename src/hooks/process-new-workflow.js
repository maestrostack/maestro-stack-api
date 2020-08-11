// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async context => {
    const {app, result, params} = context;

    // console.log('==== DATA ====');
    // console.log(result); 
    context.result.version= 1;
    context.result.published = false;
    context.result.featured = false;
    context.categories = [];

    app.service('workflow-blocks')
      .create({
        name: 'START',
        start: true,
        can_delete: false,
        sys_protected: true,
        icon: 'play',
        parent_workflow: `${result._id}`,
        version: 1,
        category: null,
        featured: false,
        published: false,
        children: []
      }, params)
      .then( (res) => {
        //console.log(res)
      })
      .catch( err => {
        //console.log(err)
      }, params)
    return context;


  };
};
