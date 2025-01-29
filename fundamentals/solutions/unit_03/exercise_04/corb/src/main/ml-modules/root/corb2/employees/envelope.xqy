xquery version "1.0-ml";
declare variable $URI external;

let $content := fn:doc($URI)
let $map as map:map := $content
let $map := $map
  => map:with('latitude', xs:decimal(map:get($map, 'latitude')))
  => map:with('longitude', xs:decimal(map:get($map, 'longitude')))
let $new-content := object-node {
  'envelope' : object-node {
    'headers' : object-node {
      'transformed' : fn:current-dateTime(),
      'transformedBy' : xdmp:get-current-user()
    },
    'instance' : $map
  }
}
return xdmp:node-replace($content, $new-content)
