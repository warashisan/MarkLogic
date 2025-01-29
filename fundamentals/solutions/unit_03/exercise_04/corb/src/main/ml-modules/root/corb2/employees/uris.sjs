'use strict';

//(: Sample query that returns all URIs :)
let uris = cts.uris('', null, cts.collectionQuery('employee'))
Sequence.from([fn.count(uris), uris])