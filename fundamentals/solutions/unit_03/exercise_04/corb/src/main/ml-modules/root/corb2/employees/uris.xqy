xquery version "1.0-ml";
(: Sample query that returns all URIs :)
let $uris := cts:uris("", (), cts:collection-query('employee'))
return (fn:count($uris), $uris)