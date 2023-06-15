const longestCommonPrefix = (strs) => {
  if (!strs.length) {
    return 'Input not found.'
  }

  const first = strs[0]

    for (let i = 0; i <= first.length; i++) {
        for (let j = 1; j < strs.length; j++) {
            if (first[i] !== strs[j][i]) {
                return first.slice(0, i)
            }
        }
    }

    return first
}
