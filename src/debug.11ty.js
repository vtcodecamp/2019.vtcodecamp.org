class Test {
    data() {
      return {
          // https://www.11ty.io/docs/languages/javascript/#permalinks
        permalink: "/debug.json"
      };
    }
  
    render(data) {
      // need to destructure data properties since we can't dump entire data obj
      var {config, sessionsSorted, speakers, sponsors, schedule} = data
      var output = {config, sessionsSorted, speakers, sponsors, schedule}
      var stringify = JSON.stringify(output, null, 2)
      return stringify;
    }
  }
  
  module.exports = Test;
