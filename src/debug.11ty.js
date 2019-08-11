class Test {
    data() {
      return {
          // https://www.11ty.io/docs/languages/javascript/#permalinks
        permalink: "/debug.json"
      };
    }
  
    // need to destructure data properties since we can't dump entire data obj
    render({config, sessions, speakers, sponsors}) {
        var output = {config, sessions, speakers, sponsors}
        var stringify = JSON.stringify(output, null, 2)
        return stringify;
      }
  }
  
  module.exports = Test;