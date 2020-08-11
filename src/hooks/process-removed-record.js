// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async context => {

    const { app, params } = context;
    const { user } = params;

    
    if( context.path != 'users') {
      if( context.path != 'syslog' ) {
        if( context.path != 'authentication') {
          if(user) {
            // data.created_by = user._id;
            // data.updated_by = user._id;

            app.service('syslog').create({
              category: 'info',
              topic: 'audit/record-deleted',
              message: `API PATH: ${context.path} || USER: ${user.email} || DATA: Please see the event for the created record-deletions service.`,
              created_by: user._id
            }, params);
          }

        }
      }
    }


    
    // console.log()


    return context;
  };
};
