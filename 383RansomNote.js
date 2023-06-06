const canConstruct = (ransomNote, magazine) => {
    if (typeof(ransomNote) !== 'string' && typeof(magazine) !== 'string') {
        return 'Please insert string'
    }
    
    const ransomNoteMap = new Map()
    const magazineMap = new Map()
    
    for (let char of ransomNote) {
        ransomNoteMap.set(char, (ransomNoteMap.get(char) || 0) + 1)
    }
    
    for (let char of magazine) {
        magazineMap.set(char, (magazineMap.get(char) || 0) + 1)
    }
    
    for (let [char, count] of ransomNoteMap.entries()) {
        if (magazineMap.get(char) === undefined || magazineMap.get(char) < count) {
           return false
        }
    }
    
    return true
}
