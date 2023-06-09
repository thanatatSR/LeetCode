const twoSum = (nums, target) => {
    if (nums.length <= 0) {
        return 'input "nums" not found. '
    } else if (typeof(target) !== 'number') {
        return 'input "target" is not correct'
    }

    const numMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (numMap.has(complement)) {
            return [numMap.get(complement), i];
        }
        numMap.set(nums[i], i);
    }

    return 'Solution either does not exist or is not unique.'
}
