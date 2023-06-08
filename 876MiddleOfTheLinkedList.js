const middleNode = (head) => {
  let node = head
  let clone = head
  let count = 0
  
  while (clone != null) {
      count++
      clone = clone.next
  }
  
  const num = count % 2 === 1 ? 1 : 0
  const middlePosition = Math.ceil(count/2) - num
  
  for (let i = 0; i < middlePosition; i++) {
      node = node.next
  }
  
  return node
}
