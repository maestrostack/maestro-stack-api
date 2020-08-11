/* eslint-disable require-atomic-updates */
module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return async context => {
    const { app, method, result, params } = context;

    const addGroups = async record => {
      // console.log(record);

      console.log(params);

      const groupMembers = await app.service('group-members').find({
        query: {
          user: record._id
        }
      }, params);

      console.log('\n\n ---- GROUP MEMEBER ----');
      console.log(groupMembers);

      const memberOf = [];

      for ( var i in groupMembers.data ) {
        const groupId = groupMembers.data[i].group;
        console.log('\n\n -- GROUP DI --');
        console.log(groupId);
        
        const groupData = await app.service('groups').get(groupId, params);

        console.log(groupData);
      }

      return {
        ...record,
        memberOfGroups: memberOf
      };
    };

    // const addCreatedBy = async record => {
    //   const created_by_data = await app.service('users').get(record.created_by);
    //   return {
    //     ...record,
    //     created_by_data
    //   };
    // };

    // In a find method we need to process the entire page
    if (method === 'find') {
      // Map all data to include the `user` information
      context.result.data = await Promise.all(result.data.map(addGroups));
    } else {
      // Otherwise just update the single result
      context.result = await addGroups(result);
    }

    return context;
  };
};