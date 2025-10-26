// problem : You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

function maxProfit(prices) {
    let maximumProfit = 0;
    for (let i = 0; i < prices.length; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            const currProfit = prices[j] - prices[i];
            if (currProfit > maximumProfit) {
                maximumProfit = currProfit;
            }
        }
    }
    return maximumProfit;
};
const prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices));

function maxProfitV2(arr) {
    let maximumProfit = 0;
    let minPriceToBuy = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < minPriceToBuy) {
            minPriceToBuy = arr[i]
        }
        const currProfit = arr[i] - minPriceToBuy;
        if (currProfit > maximumProfit) maximumProfit = currProfit;
    }
    return maximumProfit;
}
const pricesV2 = [7, 1, 5, 3, 6, 4];
console.log(maxProfitV2(pricesV2));