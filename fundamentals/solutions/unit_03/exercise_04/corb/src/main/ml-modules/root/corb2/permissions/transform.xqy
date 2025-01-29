xquery version "1.0-ml";
declare variable $URI external;

xdmp:document-add-permissions(
  $URI,
  (
    xdmp:permission('star-wars-reader', 'read'),
    xdmp:permission('star-wars-admin', 'update')
  )
)
