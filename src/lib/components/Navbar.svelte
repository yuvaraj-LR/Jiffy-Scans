<script>
  import MoreMenu from "./MoreMenu.svelte";

    const blockchainMenu = ["UserOps", "Bundles", "Factories", "Pay Masters", "Bundlers"];
    const developerMenu = ["Knowledge Base", "Github", "API Reference", "API Plans", "Submit An Issue"];
    const moreMenu = ["About", "Company Docs", "Tools"];
</script>

<nav class="flex flex_row flex_center flex_space_between"> 
    <div class="nav_items relative pointer nav_logo">
        <img src="/icons/jiffyscan-icon.svg" alt="jiffyscan-icon">
    </div>
    <div class="nav_items">
        <ul class="flex flex_row flex_center nav_navigators">
            <li class="nav_elements pointer">Home</li>
            <li class="flex flex_center relative pointer nav_elements" id="blockchain">
                <span>Blockchain</span>
                <span><img src="/icons/down-arrow-icon.svg" alt="down-arrow-icon" class="relative down_arrow"></span>

                <ul class="more_menu absolute hidden" id="blockchain_menu">
                    {#each blockchainMenu as menu}
                        <MoreMenu data={menu}/>
                    {/each}
                </ul>
            </li>
            <li class="flex flex_center relative pointer nav_elements" id="developers">
                <span>Developers</span>
                <span><img src="/icons/down-arrow-icon.svg" alt="down-arrow-icon" class="relative down_arrow"></span>

                <ul class="more_menu absolute hidden" id="developer_menu">
                    {#each developerMenu as menu}
                        <MoreMenu data={menu}/>
                    {/each}
                </ul>
            </li>
            <li class="flex flex_center relative pointer nav_elements" id="more"> 
                <span>More</span>
                <span><img src="/icons/down-arrow-icon.svg" alt="down-arrow-icon" class="relative down_arrow"></span>

                <ul class="more_menu absolute hidden" id="more_menu">
                    {#each moreMenu as menu}
                        <MoreMenu data={menu}/>
                    {/each}
                </ul>
            </li>
            <li class="nav_elements pointer">About 4337</li>
        </ul>
    </div>
    <div class="nav_items ">
        <form action="#" class="relative">
            <div class="absolute input_options">
                <img src="/icons/lightning-icon.svg" alt="lightning-icon">
                <img src="/icons/down-arrow-icon.svg" alt="down-arrow-icon">
            </div>
            <input type="text" id="search" class="search" placeholder="Search an userOp">
        </form>
    </div>
    <div class="nav_items">
        <div class="flex flex_center relative user_details">
            <div class="flex flex_center relative user_profile" id="userProfile">
                <h3 class="user_prof">OR</h3>
                <img src="/icons/online-indicator-icon.svg" alt="online-indicator-icon" class=" online_indicator absolute">
                <div class="user_detail">
                    <h4>Olivia Rhye</h4>
                    <h5 class="normaler">olivia@jiffyscan.xyz</h5>
                </div>
            </div>

            <div class="user_theme">
                <img src="/icons/moon-icon.svg" alt="moon-icon">
            </div>

            <div class="absolute user_dashboard hidden" id="userDashboard">
                <ul class="dashboard_list">
                    <li class="flex flex_gap_10 dashboard_element">
                        <span><img src="/icons/user-icon.svg" alt="user-icon"></span>
                        <span>View Profile</span>
                    </li>
                    <li class="flex flex_gap_10 dashboard_element">
                        <span><img src="/icons/dashboard-icon.svg" alt="dashboard-icon"></span>
                        <span>Dashboard</span>
                    </li>
                    <li class="flex flex_gap_10 dashboard_element">
                        <span><img src="/icons/code-icon.svg" alt="code-icon"></span>
                        <span>API</span>
                    </li>
                    <li class="flex flex_gap_10 dashboard_element">
                        <span><img src="/icons/logout-icon.svg" alt="logout-icon"></span>
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
            <script>
                document.getElementById("userProfile").addEventListener("click", () => {
                    document.getElementById("userDashboard").classList.toggle("hidden");
                });

                document.getElementById("blockchain").addEventListener("click", () => {
                    document.getElementById("blockchain_menu").classList.toggle("hidden");
                });

                document.getElementById("developers").addEventListener("click", () => {
                    document.getElementById("developer_menu").classList.toggle("hidden");
                });

                document.getElementById("more").addEventListener("click", () => {
                    document.getElementById("more_menu").classList.toggle("hidden");
                });
            </script>
        </div>
    </div>
</nav>

<style>
    nav {
        padding: 1rem 0;
    }

    .nav_navigators {
        gap: 1.8rem;
    }

    .input_options {
        top: 11px;
        left: 14px;
    }

    .nav_logo {
        top: 3px;
    }

    .input_options::after {
        content: "";
        border: 1px solid #DADCE0;
        position: relative;
        top: -5px;
        left: 15px;
    }

    .user_prof {
        padding: 10px;
        border-radius: 25px;
        background-color: #F9F5FF;
        color: var(--blue-color);
    }

    .online_indicator {
        bottom: 0;
        left: 30px;
    }

    .user_profile {
        gap: 8px;
        cursor: pointer;
    }

    .user_details {
        gap: 20px;
    }

    .nav_elements {
        gap: 4px;
    }

    .nav_elements:hover {
        text-decoration: underline;
    }

    .down_arrow {
        top: 3px;
    }

    .user_dashboard {
        top: 60px;
        left: 10px;
        border: 1px solid var(--input-border-color);
        border-radius: 5px;
        width: 200px;
        transition: 0.5s all ease-in-out;
        z-index: 1;
        background-color: #fff;
    }

    .dashboard_element {
        padding: 10px;
    }

    .dashboard_element:hover {
        text-decoration: underline;
    }

    .more_menu {
        border: 1px solid var(--input-border-color);
        border-radius: 5px;
        width: 130px;
        transition: 0.3s all ease-in-out;
        z-index: 1;
        background-color: #fff;
        top: 40px;
        left: -10px;
    }

    .user_theme {
        padding: 5px;
        border-radius: 25px;
        cursor: pointer;
    }

    .user_theme:hover {
        background-color: var(--input-border-color);
    }
    
</style>
