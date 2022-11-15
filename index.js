function compareTriplets(a, b) {
    let alice = a;
    let bob = b;
    let aliceTotal = 0;
    let bobTotal = 0;
    for(let i = 0; i < alice.length; i++) {
        if(alice[i] > bob[i]) {
            aliceTotal++;
        } else if(alice[i] < bob[i]) {
            bobTotal++
        }
    }
    return [aliceTotal, bobTotal]
}
