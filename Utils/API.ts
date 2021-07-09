
const processRequest = function (cb: Function, mode: string = 'GET', path: string, load: string | null) {

    var url: string = "https://classicrevivaltestdf.azurewebsites.net/api/";
    var request = new XMLHttpRequest();
    request.open(mode, url + path, true);
    request.timeout = 30000;
  
    console.log('API processRequest, mode: ' + mode + ', path: ', path);
    request.setRequestHeader("Accept", "application/json");
    request.setRequestHeader("Content-Type", "application/json");
    const myLoad: string = JSON.stringify({ post: load ? load : {}, queryString: (path + '?x').split('?')[1] });
    
    console.log('API myLoad = ', myLoad, ', path = ', path);

    request.onload = function () {
        var data: object = JSON.parse(request.responseText);
        cb({ ...data, uri: path, load: myLoad });
    }
    
  request.send(load);
}

export const loadComposers = function (cb: Function) {
    const mode: string = 'GET';
    return processRequest(cb, mode, 'ShowComposer?code=q6afFxk5RGvSeAPHysOSnVuU47fb23n5L8vvbLHjWShKCAAkmPpQvA==', '');
  }