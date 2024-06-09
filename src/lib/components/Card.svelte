<script>
    export let heading;
    export let imgUrl;
    export let sponserBy;
    export let priceInUSD;
    export let place;
    export let category;
    export let contestDate;
    export let participants;
</script>

<section class="flex flex_center flex_space_between w-100 card">
    <div class="flex flex_gap_10 flex_center card_img_with_title">
        <div class="card_img">
            <img src={imgUrl} alt="card-img" class="card-img" height="80px" width="80px">
        </div>
        <div class="flex flex_col card_desp">
            <div class="flex flex_gap_10 card_title">
                <h3 class="bold card_title_element">{heading}</h3>
                <h5>by</h5>
                <h3 class="bold">{sponserBy}</h3>
            </div>
            <div class="flex price_list">
                <div class="flex token_with_amount {!priceInUSD ? "hidden" : ""} ">
                    <img src="/icons/token-icon.svg" alt="token-icon">
                    <h3 class="place_with_tropy normaler"><span class="card_title_element bold">{priceInUSD}</span> USDC</h3>
                </div>
                <div class="flex flex_gap_10 place_with_tropy {!place ? "hidden" : ""}">
                    <img src="/icons/trophy-icon.svg" alt="tropy-icon">
                    <h4 class="normaler">{place} Place</h4>
                </div>
                <div class="category_list">
                    {#each category as cata}
                        <button class="category_button {cata}">{cata}</button>
                    {/each}
                </div>
            </div>
        </div>
    </div>
    <div class="flex flex_col card_date">
        <h4 class="normaler">{contestDate}</h4>
        <h4 class="normaler"><span class="num_of_participants">{participants}</span> Participants</h4>
    </div>
</section>

<style>

    .card {
        padding: 20px;
        margin: 5px 0;
        transition: 0.3s background-color ease-in-out;
        cursor: pointer;
        border-radius: 8px;
    }

    .card:hover {
        background-color: var(--heading-seperator-line-color);
    }

    .card-img {
        border-radius: 5px;
    }

    .card_desp {
        gap: 20px;
        margin-inline: 15px;
    }

    .card_title {
        align-items: baseline;
        color: var(--secondary-color);
    }

    .place_with_tropy {
        width: 100px;
        align-items: baseline;
        color: var(--third-color);
    }

    .card_title_element {
        color: var(--primary-color);
    }

    .token_with_amount::after {
        content: "";
        border: 1px solid var(--heading-seperator-line-color);
        margin-inline: 15px;
    }

    .card_date {
        gap: 20px;
        color: var(--third-color);
        text-align: end;
        /* padding-right: 15px; */
    }

    .num_of_participants {
        color: var(--primary-color);
    }

    .category_button {
        font-size: 0.8rem;
        border-radius: 5px;
        padding: 5px;
        text-transform: capitalize;
        margin-inline: 5px
    }

    .price_list {
        align-items: center;
    }

</style>