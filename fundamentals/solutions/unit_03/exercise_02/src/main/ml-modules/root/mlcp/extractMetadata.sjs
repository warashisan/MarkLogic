function extractImageMetadata(content, context){
  let value = content.value;
  let kind = xdmp.nodeKind(value)
  let result = [content]
  if (kind === 'binary') {
    result.push({
      uri: content.uri + ".xml",
      value: xdmp.documentFilter(value)
    })
  }
  return Sequence.from(result)
}

exports.transform = extractImageMetadata