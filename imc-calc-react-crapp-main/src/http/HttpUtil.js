import "whatwg-fetch"



export default class HttpUtil {
  
  createRequest(method, body = "",res) {
    return {
      method: method,
      headers: {
        "Content-Type": "application/json; charset=UTF-8;",
      },
      body: JSON.stringify(body),
      
    };
  }

  get(hostname, url) {
    return fetch(`${hostname}${url}`);
  }

  post(hostname, url, obj) {
    const req = this.createRequest("POST", obj);
    //res.headers("Access-Control-Allow-Origin","http://localhost:8080")
    return fetch(`${hostname}${url}`, req);
  }


}
