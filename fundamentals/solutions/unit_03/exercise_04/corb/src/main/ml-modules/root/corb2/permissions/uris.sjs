'use strict';

//(: Sample query that returns all URIs :)
let uris = cts.uris('', null, cts.trueQuery())
Sequence.from([fn.count(uris), uris])