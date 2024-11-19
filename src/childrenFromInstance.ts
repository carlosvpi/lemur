export function childrenFromInstance([_, ...children]) {
  return children
}
childrenFromInstance.wrap = function(node) {
  return [node]
}
childrenFromInstance.unwrap = function([node]) {
  return node
}
