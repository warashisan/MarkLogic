'use strict';
declareUpdate();

var URI;

let content = cts.doc(URI)
let newContent = {
  'envelope' : {
    'headers' : {
      'transformed' : fn.currentDateTime(),
      'transformedBy' : xdmp.getCurrentUser()
    },
    'instance' : {
      ...content.toObject(),
      'latitude' : xs.decimal(content.root.latitude),
      'longitude' : xs.decimal(content.root.longitude)
      
    }
  }
}
xdmp.nodeReplace(content, newContent)