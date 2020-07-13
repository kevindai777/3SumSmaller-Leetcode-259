//Objective is similar to '3Sum' but this time to instead find all triplets that are 
//less than the given target.

let nums = [-2,0,1,3], target = 2


//O(n^2) solution that uses two-pointers to find the smallest sum pairs

let count = 0
nums.sort((a,b) => {
    return a - b
})

for (let i = 0; i < nums.length - 2; i++) {
    let j = i + 1
    let k = nums.length - 1

    while (j < k) {
        let sum = nums[i] + nums[j] + nums[k]

        if (sum < target) {
            //We add 'k - j' here since that is the number of pairs
            //that will return a smaller sum
            count += k - j
            j++
        } else {
            k--            
        }
    }
}

return count