<script>
    import Card from "$lib/components/Card.svelte";

    export let data;
</script>

<section class="flex w-100 home">
    <div class="home_content">
        <div class="flex flex_center flex_space_between home_title">
            <div class="flex flex_center home_category">
                <h2 class="bolder work_history">Work History</h2>

                <button class="completed active" id="completed" onclick="toggleWorkHistory(1)">Completed</button>
                <button class="in_review" id="in_review" onclick="toggleWorkHistory(2)">In Review</button>
            </div>

            <div class="flex flex_center home_filters">
                <button class="flex flex_center flex_gap_10 filter_button">
                    <img src="/icons/filter-icon.svg" alt="filter-icon">
                    <h4 class="normal">Filter By</h4>
                </button>
                <button class="flex flex_center flex_space_between filter_cata">
                    <span>All</span>
                    <span><img src="/icons/down-arrow-icon.svg" alt="down-arrow-icon"></span>
                </button>
            </div>
        </div>
        <div class="home_cards">
            <div class="completed_cards" id="completed_cards">
                {#each data?.completedCardList as card}
                    <Card heading={card.heading} imgUrl={card.imgURL} sponserBy={card.sponserBy} priceInUSD={card.priceInUSD} place={card.place} category={card.category} contestDate={card.contestDate} participants={card.participants} />
                {/each}
            </div>
            <div class="in_review_cards hidden" id="in_review_cards">
                {#each data?.inReviewCardList as card}
                    <Card heading={card.heading} imgUrl={card.imgURL} sponserBy={card.sponserBy} priceInUSD={card.priceInUSD} place={card.place} category={card.category} contestDate={card.contestDate} participants={card.participants} />
                {/each}
            </div>
        </div>
    </div>
    <div class="seperator">

    </div>
    <div class="home_search">
        <form action="#" class="relative search_form">
            <img src="/icons/search-icon.svg" alt="search-icon" class="absolute search_icon">
            <input type="text" class="search_profile" id="search_profile" name="search_profile" placeholder="Search Bounties, Profiles, and more...">
        </form>
    </div>

    <script>
        function toggleWorkHistory(choice) {
            if(choice == 1) {
                document.getElementById("completed").classList.add("active");
                document.getElementById("in_review").classList.remove("active");

                document.getElementById("completed_cards").classList.remove("hidden")
                document.getElementById("in_review_cards").classList.add("hidden")
            } else {
                document.getElementById("completed").classList.remove("active");
                document.getElementById("in_review").classList.add("active");

                document.getElementById("completed_cards").classList.add("hidden")
                document.getElementById("in_review_cards").classList.remove("hidden")
            }
        }
    </script>
</section>

<style>

    .home {
        margin: 20px 0;
    }

    .home_content {
        width: 68%;
    }

    .home_search {
        width: 30%;
    }

    .search_icon {
        top: 14px;
        left: 20px;
    }

    .search_profile {
        padding-left: 70px;
        background-color: #F1F5F9;
    }

    .search_profile:hover {
        box-shadow: none;
    }

    .home_title {
        border-bottom: 1px solid #EBEBEB;
        padding: 5px 0 15px;
    }

    .work_history::after {
        content: "";
        border: 1px solid var(--heading-seperator-line-color);
        margin-inline: 25px 10px;
    }

    .active {
        color: var(--primary-color);
        border-bottom: 2px solid var(--blue-color);
        padding: 0 20px 25px;
        position: relative;
        top: 15px;
    }

    .home_filters {
        padding-right: 30px;
    }

    .filter_button::before {
        content: "";
        border: 1px solid var(--heading-seperator-line-color);
        height: 25px;
        margin-inline: 10px;
    }

    .filter_cata {
        width: 200px;
        border: 1px solid #EBEBEB;
        padding: 5px 10px;
        color: var(--blue-color);
    }

    .seperator {
        border-right: 1px solid #EBEBEB;
        height: 80vh;
        margin-inline: 20px;
    }

    .home_cards {
        margin: 15px;
    }
</style>