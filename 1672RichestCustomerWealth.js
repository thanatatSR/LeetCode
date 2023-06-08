const maximumWealth = (accounts) => {
    let richestWealth = 0

    for(let i = 0; i < accounts.length; i++) {
        let wealth = 0
        for(let j = 0; j < accounts[i].length; j++) {
            wealth = wealth + accounts[i][j]
        }
        if (wealth > richestWealth) {
            richestWealth = wealth
        }
    }

    return richestWealth
}
