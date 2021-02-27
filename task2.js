let data = {
  "contexts": [
    {
      "id": 7,
      "roleId": 4,
      "contextId": 2,
      "createdAt": "2020-02-10T15:05:09.000Z",
      "updatedAt": "2020-02-10T15:05:09.000Z",
      "context": {
        "id": 2,
        "name": "USD",
        "description": "",
        "icon": null,
        "hasDropDown": true,
        "hasAccessOn": "USD",
        "showCauseCreateBtn": false,
        "canAssignCauseAdmin": true,
        "displayName": "USD",
        "dropDownConfig": "[{\"value\": \"state\",\"isVisible\": false,\"isPrimary\":false},{\"value\": \"usd\",\"isVisible\": true,\"isPrimary\":true},{\"value\": \"organization\",\"isVisible\": true,\"isPrimary\":false},{\"value\": \"club\",\"isVisible\": false,\"isPrimary\":false}]\r\n",
        "createdAt": "2020-01-15T00:00:00.000Z",
        "updatedAt": "2020-01-15T00:00:00.000Z"
      }
    },
    {
      "id": 8,
      "roleId": 4,
      "contextId": 3,
      "createdAt": "2020-02-10T15:05:09.000Z",
      "updatedAt": "2020-02-10T15:05:09.000Z",
      "context": {
        "id": 3,
        "name": "Organization",
        "description": "",
        "icon": null,
        "hasDropDown": true,
        "hasAccessOn": "ORG",
        "showCauseCreateBtn": true,
        "canAssignCauseAdmin": true,
        "displayName": "Organization",
        "dropDownConfig": "[{\"value\": \"state\",\"isVisible\": false,\"isPrimary\":false},{\"value\": \"usd\",\"isVisible\": false,\"isPrimary\":false},{\"value\": \"organization\",\"isVisible\": true,\"isPrimary\":true},{\"value\": \"club\",\"isVisible\": false,\"isPrimary\":false}]\r\n",
        "createdAt": "2020-01-15T00:00:00.000Z",
        "updatedAt": "2020-01-15T00:00:00.000Z"
      }
    }
  ]
};
let ctxArr = [];
let ctxObj = {};

let contexts = data.contexts;

for(let i =0;i < contexts.length;i++) {
  
  let value = contexts[i].context;
  
   ctxArr.push(value);
    ctxObj[contexts] = ctxArr;
 
  
}
console.log(ctxArr);
