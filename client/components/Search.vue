<template>
    <div>
        <div class="site-search iconset">
            <i class="icon anm anm-search-l"></i>
        </div>
        <div class="search-drawer">
            <div class="container">
                <span class="closeSearch anm anm-times-l"></span>
                <h3 class="title">What are you looking for?</h3>
                <div class="block block-search">
                    <div class="block block-content">
                        <form class="form minisearch" id="header-search" action="#" method="get">
                            <label for="search" class="label"><span>Search</span></label>
                            <div class="control">
                                <div class="searchField">
                                        <div class="search-category">
                                            <select id="rgsearch-category">
                                                <option value="0">All Categories</option>
                                                <option value="4">Shop</option>
                                                <option value="6">- All</option>
                                                <option value="8">- Men</option>
                                                <option value="10">- Women</option>
                                                <option value="12">- Shoes</option>
                                                <option value="14">- Blouses</option>
                                                <option value="16">- Pullovers</option>
                                                <option value="18">- Bags</option>
                                                <option value="20">- Accessories</option>
                                            </select>
                                        </div>
                                    <div class="input-box">
                                        <input id="search" 
                                        type="text" 
                                        name="q" 
                                        value="" 
                                        placeholder="Search for products, brands..." 
                                        class="input-text"
                                        />
                                        <button type="submit" title="Search" class="action search" disabled=""><i class="icon anm anm-search-l"></i></button>
                                    </div>
                                </div>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>