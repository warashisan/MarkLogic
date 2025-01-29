'use strict';
declareUpdate();

var URI;

xdmp.documentAddPermissions(
  URI,
  [
    xdmp.permission('star-wars-reader', 'read'),
    xdmp.permission('star-wars-admin', 'update')
  ]
)
