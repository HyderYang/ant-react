import JsonP from 'jsonp'

export default class Http {
  static jsonp(options) {
    return new Promise((resolve, reject) => {
      JsonP(options.url,
        {
          param: 'callback',
        },
        function (error, response) {
          if (response.status === 'success') {
            resolve(response);
          } else {
            reject(response.message);
          }
        });
    });
  }
}