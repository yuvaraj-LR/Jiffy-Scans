import { completedCards, inReviewCards } from "$lib/services/HomeCardsList.js";


export async function load() {
    const completedCardList = completedCards();
    const inReviewCardList = inReviewCards();

    return {
        completedCardList,
        inReviewCardList
    }
}