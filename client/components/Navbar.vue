<template>
    <!--Header-->
    <div>
        <!--Promotion Bar-->
        <div class="notification-bar mobilehide">
            <div class="row">
                <div class="col-md-8 col-lg-4">
                    <nuxt-link to="#"><span class="notification-bar__message"><font-awesome-icon :icon="['fas', 'sign-in-alt']" style="margin-right:2px;"/>Sign-in Seller Account</span></nuxt-link> 
                    <nuxt-link to="#"><span class="notification-bar__message"><font-awesome-icon :icon="['fas', 'calendar']" style="margin-right:2px; "/>Book Beauty Service</span></nuxt-link> 
                </div>
            
                <div class="col-md-4 col-lg-8">
                    <a href="#" class="notification-bar__message">SELL YOUR OWN PRODUCTS ON BEUVA! FOR FREE!</a>
                    <span class="close-announcement"><i class="anm anm-times-l" aria-hidden="true"></i></span>
                </div>
            </div>
        </div>
        <!--End Promotion Bar-->
        <div class="header-12">
            <header class="header animated d-flex align-items-center">
                <div class="container">        
                    <div class="row">
                        <!--Mobile Icons-->
                        <div class="col-4 col-sm-4 col-md-4 d-block d-lg-none mobile-icons">
                            <!--Mobile Toggle-->
                            <button type="button" class="btn--link site-header__menu js-mobile-nav-toggle mobile-nav--open">
                                <i class="icon anm anm-times-l"></i>
                                <i class="anm anm-bars-r"></i>
                            </button>
                            <!--End Mobile Toggle-->
                            <!--Search-->
                            <div class="site-search iconset">
                                <i class="icon anm anm-search-l"></i>
                            </div>
                            <!--End Search-->
                        </div>
                        <!--Mobile Icons-->
                        <!--Desktop Logo-->
                        <div class="logo col-3 col-sm-3 col-md-2 col-lg-2 align-self-center">
                            <a href="index.html" style="color: brown; font-weight:600px;"><strong>BEUVA</strong> 
                                <img src="assets/images/avon-logo.svg" alt="Beuva Online Beauty Shopping" title="Avone Multipurpose Html Template" />
                            </a>
                        </div>
                        <!--End Desktop Logo-->
                        <div class="col-1 col-sm-1 col-md-2 col-lg-7 align-self-left d-menu-col">
                            <!--Desktop Menu-->
                            <nav class="grid__item" id="AccessibleNav">
                                <ul id="siteNav" class="site-nav medium center hidearrow">
                                    <li class="lvl1 parent megamenu mdropdown"><a href="#;">#TRENDING <i class="anm anm-angle-down-l"></i></a>
                                        <div class="megamenu style1">
                                            <ul class="grid mmWrapper">
                                                <li class="grid__item large-up--one-whole">
                                                    <ul class="grid">
                                                        <li class="grid__item lvl-1 col-md-5 col-lg-5">
                                                            <a href="#" class="site-nav lvl-1 menu-title">#TRENDING</a>
                                                            <ul class="subLinks">
                                                            <li class="lvl-2"><a href="index.html" class="site-nav lvl-2">No-Makeup Makeup</a></li>
                                                            <li class="lvl-2"><a href="index-demo2.html" class="site-nav lvl-2">Natural Hair Journey <span class="lbl nm_label3">Popular</span></a></li>
                                                            <li class="lvl-2"><a href="index-demo3.html" class="site-nav lvl-2">Gua Sha <span class="lbl nm_label3">Popular</span></a></li>
                                                            <li class="lvl-2"><a href="index-demo4.html" class="site-nav lvl-2">Skinimalism</a></li>
                                                            <li class="lvl-2"><a href="index-demo5.html" class="site-nav lvl-2">Biotech Beauty</a></li>
                                                            <li class="lvl-2"><a href="index-demo6.html" class="site-nav lvl-2">Refillables</a></li>
                                                            </ul>
                                                        </li>
                                                        <li class="grid__item lvl-1 col-md-3 col-lg-3">
                                                            <a href="#" class="site-nav lvl-1 menu-title">INGREDIENTS</a>
                                                            <ul class="subLinks">
                                                                <li class="lvl-2"><a href="index-demo11.html" class="site-nav lvl-2">SPF makeup</a></li>
                                                                <li class="lvl-2"><a href="index-demo12.html" class="site-nav lvl-2">Retinoids</a></li>
                                                                <li class="lvl-2"><a href="index-demo13.html" class="site-nav lvl-2">Vegan &amp; parabin free</a></li>
                                                                <li class="lvl-2"><a href="index-demo14.html" class="site-nav lvl-2">Hyaluronic acid anti-aging</a></li>
                                                                <li class="lvl-2"><a href="index-demo15.html" class="site-nav lvl-2">CBD &amp; Cannabis Beauty</a></li>
                                                                <li class="lvl-2"><a href="index-demo16.html" class="site-nav lvl-2">AHA &amp; BHA</a></li>
                                                            </ul>
                                                        </li>
                                                        <li class="grid__item lvl-1 col-md-3 col-lg-3">
                                                            <a href="#" class="site-nav lvl-1 menu-title">Home Spa</a>
                                                            <ul class="subLinks">
                                                                <li class="lvl-2"><a href="index-jewelry-store.html" class="site-nav lvl-2">Candals</a></li>
                                                                <li class="lvl-2"><a href="index-pet-store.html" class="site-nav lvl-2">Aroma therapy <span class="lbl nm_label4">Hot</span></a></li>
                                                                <li class="lvl-2"><a href="index-medical-demo.html" class="site-nav lvl-2">Massagers </a></li>
                                                                <li class="lvl-2"><a href="index-bags-store.html" class="site-nav lvl-2">Healing stones and crystals <span class="lbl nm_label2">New</span></a></li>
                                                                <li class="lvl-2"><a href="index-digital-store.html" class="site-nav lvl-2">Salts <span class="lbl nm_label2">New</span></a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                    <ul class="grid mm-Banners">
                                                        <li class="grid__item large-up--one-half imageCol">
                                                            <a href="#"><img class="lazyload" src="assets/images/megamenu-banner7.jpg" data-src="assets/images/megamenu-banner7.jpg" alt=""></a>
                                                        </li>
                                                        <li class="grid__item large-up--one-half imageCol">
                                                            <a href="#"><img class="lazyload" src="assets/images/megamenu-banner8.jpg" data-src="assets/images/megamenu-banner8.jpg" alt=""></a>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li class="lvl1 parent megamenu"><a href="#">SALE <i class="anm anm-angle-down-l"></i></a>
                                    </li>
                                    <li class="lvl1 parent megamenu"><a href="#">MAKEUP <i class="anm anm-angle-down-l"></i></a>
                                        <div class="megamenu style2">
                                            <ul class="grid mmWrapper">
                                                <li class="grid__item one-whole">
                                                    <ul class="grid">
                                                        <li class="grid__item lvl-1 col-md-3 col-lg-3"><a href="#" class="site-nav lvl-1 menu-title">COMPLEXION</a>
                                                            <ul class="subLinks">
                                                                <li class="lvl-2"><a href="product-layout1.html" class="site-nav lvl-2">Foundation</a></li>
                                                                <li class="lvl-2"><a href="product-layout2.html" class="site-nav lvl-2">Powders &amp; Setting Spray</a></li>
                                                                <li class="lvl-2"><a href="product-layout3.html" class="site-nav lvl-2">Concealers &amp; Colour Correctors</a></li>
                                                                <li class="lvl-2"><a href="product-layout4.html" class="site-nav lvl-2">Contouring</a></li>
                                                                <li class="lvl-2"><a href="product-layout5.html" class="site-nav lvl-2">Bronzers</a></li>
                                                                <li class="lvl-2"><a href="product-layout6.html" class="site-nav lvl-2">Blush</a></li>
                                                                <li class="lvl-2"><a href="product-layout7.html" class="site-nav lvl-2">BB &amp; CC Creams</a></li>
                                                                <li class="lvl-2"><a href="product-accordian.html" class="site-nav lvl-2">Highlighters</a></li>
                                                                <li class="lvl-2"><a href="product-accordian.html" class="site-nav lvl-2">Makeup Removers</a></li>
                                                            </ul>
                                                        </li>
                                                        <li class="grid__item lvl-1 col-md-3 col-lg-3"><a href="#" class="site-nav lvl-1 menu-title">Lips</a>
                                                            <ul class="subLinks">
                                                                <li class="lvl-2"><a href="product-standard.html" class="site-nav lvl-2">Lipsticks</a></li>
                                                                <li class="lvl-2"><a href="product-variable.html" class="site-nav lvl-2">Lipsgloss</a></li>
                                                                <li class="lvl-2"><a href="product-grouped.html" class="site-nav lvl-2">Lip Liners</a></li>
                                                                <li class="lvl-2"><a href="product-layout1.html" class="site-nav lvl-2">Lip Scrubs</a></li>
                                                                <li class="lvl-2"><a href="product-layout2.html" class="site-nav lvl-2">Lip Stains</a></li>
                                                                <li class="lvl-2"><a href="product-outofstock.html" class="site-nav lvl-2">Lip Balms</a></li>
                                                            </ul>
                                                        </li>
                                                        <li class="grid__item lvl-1 col-md-3 col-lg-3"><a href="#" class="site-nav lvl-1 menu-title">Eyes</a>
                                                            <ul class="subLinks">
                                                                <li class="lvl-2"><a href="product-standard.html" class="site-nav lvl-2">Eye Palettes</a></li>
                                                                <li class="lvl-2"><a href="product-variable.html" class="site-nav lvl-2">Eye Liners</a></li>
                                                                <li class="lvl-2"><a href="product-grouped.html" class="site-nav lvl-2">Lashe Enhancers</a></li>
                                                                <li class="lvl-2"><a href="product-layout1.html" class="site-nav lvl-2">Mascara</a></li>
                                                                <li class="lvl-2"><a href="product-layout2.html" class="site-nav lvl-2">Flase Lashes</a></li>
                                                                <li class="lvl-2"><a href="product-outofstock.html" class="site-nav lvl-2">Brows</a></li>
                                                            </ul>
                                                        </li>
                                                        <li class="grid__item lvl-1 col-md-3 col-lg-3"><a href="#" class="site-nav lvl-1 menu-title">Top Brands</a>
                                                            <div class="menu-brand-logo">
                                                                <a href="#;"><img src="../static/images/blog/117x490.jpg" alt=""/></a>
                                                                <a href="#;"><img src="assets/images/logo/brandlogo1.png" alt=""/></a>
                                                                <a href="#;"><img src="assets/images/logo/brandlogo1.png" alt=""/></a>
                                                            </div>
                                                            <div class="menu-brand-logo">
                                                                <a href="#;"><img src="../static/images/blog/117x490.jpg" alt=""/></a>
                                                                <a href="#;"><img src="assets/images/logo/brandlogo1.png" alt=""/></a>
                                                                <a href="#;"><img src="assets/images/logo/brandlogo1.png" alt=""/></a>
                                                            </div>
                                                        </li>
                                                        <li class="grid__item lvl-1 col-md-3 col-lg-3 p-0">
                                                            <a href="#"><img src="../static/images/blog/117x490.jpg" alt=""/></a>
                                                        </li>
                                                        
                                                        <li class="grid__item lvl-1 col-md-3 col-lg-3"><a href="#" class="site-nav lvl-1 menu-title">Makeup Tools</a>
                                                            <ul class="subLinks">
                                                                <li class="lvl-2"><a href="product-standard.html" class="site-nav lvl-2">Beauty Blender &amp; Sponges</a></li>
                                                                <li class="lvl-2"><a href="product-variable.html" class="site-nav lvl-2">Makeup Brushes</a></li>
                                                                <li class="lvl-2"><a href="product-grouped.html" class="site-nav lvl-2">Brow Tools</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li class="lvl1 parent megamenu"><a href="#">BODY <i class="anm anm-angle-down-l"></i></a>
                                        <div class="megamenu style2">
                                            <ul class="grid mmWrapper">
                                                <li class="grid__item one-whole">
                                                    <ul class="grid">
                                                        <li class="grid__item lvl-1 col-md-3 col-lg-3"><a href="#" class="site-nav lvl-1 menu-title">Bath &amp; Body</a>
                                                            <ul class="subLinks">
                                                                <li class="lvl-2"><a href="product-layout1.html" class="site-nav lvl-2">Bath &amp; Shower Gels</a></li>
                                                                <li class="lvl-2"><a href="product-layout2.html" class="site-nav lvl-2">Oils &amp; Moisturisers</a></li>
                                                                <li class="lvl-2"><a href="product-layout3.html" class="site-nav lvl-2">Bath Salts &amp; Oils</a></li>
                                                                <li class="lvl-2"><a href="product-layout6.html" class="site-nav lvl-2">Product Layout6</a></li>
                                                            </ul>
                                                        </li>
                                                        <li class="grid__item lvl-1 col-md-3 col-lg-3"><a href="#" class="site-nav lvl-1 menu-title">Cleansing &amp; Firming</a>
                                                            <ul class="subLinks">
                                                                <li class="lvl-2"><a href="product-standard.html" class="site-nav lvl-2">Masks &amp; Scrubs</a></li>
                                                                <li class="lvl-2"><a href="product-variable.html" class="site-nav lvl-2">Feminine Hygiene</a></li>
                                                                <li class="lvl-2"><a href="product-grouped.html" class="site-nav lvl-2">Hair Removal</a></li>
                                                                <li class="lvl-2"><a href="product-layout1.html" class="site-nav lvl-2">Firming</a></li>
                                                                <li class="lvl-2"><a href="product-layout1.html" class="site-nav lvl-2">Exfoliators</a></li>
                                                                <li class="lvl-2"><a href="product-layout1.html" class="site-nav lvl-2">Deodarents</a></li>
                                                                <li class="lvl-2"><a href="product-layout1.html" class="site-nav lvl-2">Body Sponges &amp; Cloths</a></li>
                                                            </ul>
                                                        </li>
                                                        <li class="grid__item lvl-1 col-md-3 col-lg-3"><a href="#" class="site-nav lvl-1 menu-title">Top Brands</a>
                                                            <div class="menu-brand-logo">
                                                                <a href="#;"><img src="assets/images/logo/brandlogo1.png" alt=""/></a>
                                                                <a href="#;"><img src="assets/images/logo/brandlogo1.png" alt=""/></a>
                                                                <a href="#;"><img src="assets/images/logo/brandlogo1.png" alt=""/></a>
                                                            </div>
                                                            <div class="menu-brand-logo">
                                                                <a href="#;"><img src="assets/images/logo/brandlogo1.png" alt=""/></a>
                                                                <a href="#;"><img src="assets/images/logo/brandlogo1.png" alt=""/></a>
                                                                <a href="#;"><img src="assets/images/logo/brandlogo1.png" alt=""/></a>
                                                            </div>
                                                        </li>
                                                        <li class="grid__item lvl-1 col-md-3 col-lg-3 p-0">
                                                            <a href="#"><img src="assets/images/megamenu-banner3.jpg" alt=""/></a>
                                                        </li>
                                                        <li class="grid__item lvl-1 col-md-3 col-lg-3"><a href="#" class="site-nav lvl-1 menu-title">Suncare &amp; Tanning</a>
                                                            <ul class="subLinks">
                                                                <li class="lvl-2"><a href="product-standard.html" class="site-nav lvl-2">Sun Cream &amp; SPF</a></li>
                                                                <li class="lvl-2"><a href="product-variable.html" class="site-nav lvl-2">Tan Removal</a></li>
                                                                <li class="lvl-2"><a href="product-grouped.html" class="site-nav lvl-2">Fake Tan</a></li>
                                                                <li class="lvl-2"><a href="product-layout1.html" class="site-nav lvl-2">After Sun Care</a></li>
                                                                <li class="lvl-2"><a href="product-layout1.html" class="site-nav lvl-2">Blue Light Protection</a></li>
                                                            </ul>
                                                        </li>
                                                        <li class="grid__item lvl-1 col-md-3 col-lg-3"><a href="#" class="site-nav lvl-1 menu-title">Moisturisers</a>
                                                            <ul class="subLinks">
                                                                <li class="lvl-2"><a href="product-standard.html" class="site-nav lvl-2">Oils &amp; Mist</a></li>
                                                                <li class="lvl-2"><a href="product-variable.html" class="site-nav lvl-2">Serums</a></li>
                                                                <li class="lvl-2"><a href="product-grouped.html" class="site-nav lvl-2">Moisturisers</a></li>
                                                                <li class="lvl-2"><a href="product-layout1.html" class="site-nav lvl-2">Cellulite &amp; Strech Marks</a></li>
                                                                <li class="lvl-2"><a href="product-layout1.html" class="site-nav lvl-2">Sensitive</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li class="lvl1 parent megamenu"><a href="#">FACE <i class="anm anm-angle-down-l"></i></a>
                                        <div class="megamenu style2">
                                            <ul class="grid mmWrapper">
                                                <li class="grid__item one-whole">
                                                    <ul class="grid">
                                                        <li class="grid__item lvl-1 col-md-3 col-lg-3"><a href="#" class="site-nav lvl-1 menu-title">Skincare Products</a>
                                                            <ul class="subLinks">
                                                                <li class="lvl-2"><a href="product-layout1.html" class="site-nav lvl-2">Masks &amp; Peels</a></li>
                                                                <li class="lvl-2"><a href="product-layout2.html" class="site-nav lvl-2">Vitamin Serums &amp; Creams</a></li>
                                                                <li class="lvl-2"><a href="product-tabs-left.html" class="site-nav lvl-2">Toners &amp; Mists</a></li>
                                                                <li class="lvl-2"><a href="product-layout3.html" class="site-nav lvl-2">Retinol</a></li>
                                                                <li class="lvl-2"><a href="product-layout4.html" class="site-nav lvl-2">Cleansers</a></li>
                                                                <li class="lvl-2"><a href="product-layout5.html" class="site-nav lvl-2">Scrub &amp; Exfoliators</a></li>
                                                                <li class="lvl-2"><a href="product-layout6.html" class="site-nav lvl-2">Hyaluronic Acid</a></li>
                                                                <li class="lvl-2"><a href="product-layout7.html" class="site-nav lvl-2">Retinol</a></li>
                                                                <li class="lvl-2"><a href="product-accordian.html" class="site-nav lvl-2">Salicylic Acid</a></li>
                                                                <li class="lvl-2"><a href="product-tabs-left.html" class="site-nav lvl-2">Collagen</a></li>
                                                            </ul>
                                                        </li>
                                                        <li class="grid__item lvl-1 col-md-3 col-lg-3"><a href="#" class="site-nav lvl-1 menu-title">Skincare Concerns</a>
                                                            <ul class="subLinks">
                                                                <li class="lvl-2"><a href="product-standard.html" class="site-nav lvl-2">Acne &amp; Breakouts</a></li>
                                                                <li class="lvl-2"><a href="product-variable.html" class="site-nav lvl-2">Aging</a></li>
                                                                <li class="lvl-2"><a href="product-grouped.html" class="site-nav lvl-2">Dry Skin</a></li>
                                                                <li class="lvl-2"><a href="product-layout1.html" class="site-nav lvl-2">Oily</a></li>
                                                                <li class="lvl-2"><a href="product-layout2.html" class="site-nav lvl-2">Scars</a></li>
                                                                <li class="lvl-2"><a href="product-outofstock.html" class="site-nav lvl-2">Blackheads &amp; Block Pores</a></li>
                                                                <li class="lvl-2"><a href="product-external-affiliate.html" class="site-nav lvl-2">Sensitive</a></li>
                                                                <li class="lvl-2"><a href="product-layout1.html" class="site-nav lvl-2">Sun Damage</a></li>
                                                            </ul>
                                                        </li>
                                                        <li class="grid__item lvl-1 col-md-3 col-lg-3"><a href="#" class="site-nav lvl-1 menu-title">Tools</a>
                                                            <ul class="subLinks">
                                                                <li class="lvl-2"><a href="product-standard.html" class="site-nav lvl-2">Beaty Rollers</a></li>
                                                                <li class="lvl-2"><a href="product-variable.html" class="site-nav lvl-2">Hair Removal</a></li>
                                                                <li class="lvl-2"><a href="product-grouped.html" class="site-nav lvl-2">Gua Sha</a></li>
                                                                <li class="lvl-2"><a href="product-layout1.html" class="site-nav lvl-2">Steam &amp; Misters</a></li>
                                                                <li class="lvl-2"><a href="product-layout2.html" class="site-nav lvl-2">Brushes &amp; Scrubers</a></li>
                                                                <li class="lvl-2"><a href="product-layout2.html" class="site-nav lvl-2">Blemish Extractor</a></li>
                                                            </ul>
                                                        </li>
                                                        <li class="grid__item lvl-1 col-md-3 col-lg-3"><a href="#" class="site-nav lvl-1 menu-title">Top Brands</a>
                                                            <div class="menu-brand-logo">
                                                                <a href="#;"><img src="assets/images/logo/brandlogo1.png" alt=""/></a>
                                                                <a href="#;"><img src="assets/images/logo/brandlogo1.png" alt=""/></a>
                                                                <a href="#;"><img src="assets/images/logo/brandlogo1.png" alt=""/></a>
                                                            </div>
                                                            <div class="menu-brand-logo">
                                                                <a href="#;"><img src="assets/images/logo/brandlogo1.png" alt=""/></a>
                                                                <a href="#;"><img src="assets/images/logo/brandlogo1.png" alt=""/></a>
                                                                <a href="#;"><img src="assets/images/logo/brandlogo1.png" alt=""/></a>
                                                            </div>
                                                        </li>
                                                        <li class="grid__item lvl-1 col-md-3 col-lg-3 p-0">
                                                            <a href="#"><img src="assets/images/megamenu-banner3.jpg" alt=""/></a>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li class="lvl1 parent megamenu"><a href="#">HAIR <i class="anm anm-angle-down-l"></i></a>
                                        <div class="megamenu style2">
                                            <ul class="grid mmWrapper">
                                                <li class="grid__item one-whole">
                                                    <ul class="grid">
                                                        <li class="grid__item lvl-1 col-md-3 col-lg-3"><a href="#" class="site-nav lvl-1 menu-title">Wigs &amp; Hair Pieces</a>
                                                            <ul class="subLinks">
                                                                <li class="lvl-2"><a href="product-layout1.html" class="site-nav lvl-2">Lace Wigs</a></li>
                                                                <li class="lvl-2"><a href="product-layout2.html" class="site-nav lvl-2">Clip Ins</a></li>
                                                                <li class="lvl-2"><a href="product-layout3.html" class="site-nav lvl-2">iTips</a></li>
                                                                <li class="lvl-2"><a href="product-layout4.html" class="site-nav lvl-2">Sewins</a></li>
                                                                <li class="lvl-2"><a href="product-layout5.html" class="site-nav lvl-2">Braid Extentions</a></li>
                                                                <li class="lvl-2"><a href="product-layout6.html" class="site-nav lvl-2">Ponytails &amp; Fringes</a></li>
                                                                <li class="lvl-2"><a href="product-layout7.html" class="site-nav lvl-2">Afro &amp; Textured Hair</a></li>
                                                                <li class="lvl-2"><a href="product-layout7.html" class="site-nav lvl-2">Human Hair</a></li>
                                                                <li class="lvl-2"><a href="product-layout7.html" class="site-nav lvl-2">Synthetic Hair</a></li>
                                                            </ul>
                                                        </li>
                                                        <li class="grid__item lvl-1 col-md-3 col-lg-3"><a href="#" class="site-nav lvl-1 menu-title">Hair Care &amp; Cleansing</a>
                                                            <ul class="subLinks">
                                                                <li class="lvl-2"><a href="product-standard.html" class="site-nav lvl-2">Shampoo</a></li>
                                                                <li class="lvl-2"><a href="product-variable.html" class="site-nav lvl-2">Masks &amp; Conditioners</a></li>
                                                                <li class="lvl-2"><a href="product-grouped.html" class="site-nav lvl-2">Scalp Scrubs &amp; Treatments</a></li>
                                                                <li class="lvl-2"><a href="product-layout1.html" class="site-nav lvl-2">Hair thinning &amp; Loss</a></li>
                                                                <li class="lvl-2"><a href="product-layout1.html" class="site-nav lvl-2">Damaged Hair</a></li>
                                                            </ul>
                                                        </li>
                                                        <li class="grid__item lvl-1 col-md-3 col-lg-3"><a href="#" class="site-nav lvl-1 menu-title">Top Brands</a>
                                                            <div class="menu-brand-logo">
                                                                <a href="#;"><img src="assets/images/logo/brandlogo1.png" alt=""/></a>
                                                                <a href="#;"><img src="assets/images/logo/brandlogo1.png" alt=""/></a>
                                                                <a href="#;"><img src="assets/images/logo/brandlogo1.png" alt=""/></a>
                                                            </div>
                                                            <div class="menu-brand-logo">
                                                                <a href="#;"><img src="assets/images/logo/brandlogo1.png" alt=""/></a>
                                                                <a href="#;"><img src="assets/images/logo/brandlogo1.png" alt=""/></a>
                                                                <a href="#;"><img src="assets/images/logo/brandlogo1.png" alt=""/></a>
                                                            </div>
                                                        </li>
                                                        <li class="grid__item lvl-1 col-md-3 col-lg-3 p-0">
                                                            <a href="#"><img src="assets/images/megamenu-banner3.jpg" alt=""/></a>
                                                        </li>
                                                        <li class="grid__item lvl-1 col-md-3 col-lg-3"><a href="#" class="site-nav lvl-1 menu-title">Styling &amp; Products</a>
                                                            <ul class="subLinks">
                                                                <li class="lvl-2"><a href="product-standard.html" class="site-nav lvl-2">Gel &amp; Wax</a></li>
                                                                <li class="lvl-2"><a href="product-variable.html" class="site-nav lvl-2">Hair Tools &amp; Equipment</a></li>
                                                                <li class="lvl-2"><a href="product-grouped.html" class="site-nav lvl-2">Hair Dye</a></li>
                                                                <li class="lvl-2"><a href="product-layout1.html" class="site-nav lvl-2">Accessories</a></li>
                                                                <li class="lvl-2"><a href="product-layout2.html" class="site-nav lvl-2">Sale Product</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li class="lvl1 parent megamenu"><a href="#">HANDS &amp;FEET <i class="anm anm-angle-down-l"></i></a>
                                        <div class="megamenu style2">
                                            <ul class="grid mmWrapper">
                                                <li class="grid__item one-whole">
                                                    <ul class="grid">
                                                        <li class="grid__item lvl-1 col-md-3 col-lg-3"><a href="#" class="site-nav lvl-1 menu-title">Products</a>
                                                            <ul class="subLinks">
                                                                <li class="lvl-2"><a href="product-layout1.html" class="site-nav lvl-2">Suppliments</a></li>
                                                                <li class="lvl-2"><a href="product-layout2.html" class="site-nav lvl-2">Nail Polish</a></li>
                                                                <li class="lvl-2"><a href="product-layout3.html" class="site-nav lvl-2">Anti Aging</a></li>
                                                                <li class="lvl-2"><a href="product-layout4.html" class="site-nav lvl-2">Moisturisers</a></li>
                                                                <li class="lvl-2"><a href="product-layout5.html" class="site-nav lvl-2">Handwash &amp; Soaps</a></li>
                                                                <li class="lvl-2"><a href="product-layout6.html" class="site-nav lvl-2">Artifical Nails</a></li>
                                                                <li class="lvl-2"><a href="product-layout7.html" class="site-nav lvl-2">Masks</a></li>
                                                                <li class="lvl-2"><a href="product-standard.html" class="site-nav lvl-2">Corns &amp; Bunions</a></li>
                                                            </ul>
                                                        </li>
                                                        <li class="grid__item lvl-1 col-md-3 col-lg-3"><a href="#" class="site-nav lvl-1 menu-title">Tools</a>
                                                            <ul class="subLinks">
                                                                <li class="lvl-2"><a href="product-standard.html" class="site-nav lvl-2">Cuticle Care</a></li>
                                                                <li class="lvl-2"><a href="product-variable.html" class="site-nav lvl-2">Files &amp; Clippers</a></li>
                                                                <li class="lvl-2"><a href="product-grouped.html" class="site-nav lvl-2">Manicure</a></li>
                                                                <li class="lvl-2"><a href="product-layout1.html" class="site-nav lvl-2">Pedicure</a></li>
                                                                <li class="lvl-2"><a href="product-layout2.html" class="site-nav lvl-2">Sale Product</a></li>
                                                            </ul>
                                                        </li>
                                                        <li class="grid__item lvl-1 col-md-3 col-lg-3"><a href="#" class="site-nav lvl-1 menu-title">Top Brands</a>
                                                            <div class="menu-brand-logo">
                                                                <a href="#;"><img src="assets/images/logo/brandlogo1.png" alt=""/></a>
                                                                <a href="#;"><img src="assets/images/logo/brandlogo1.png" alt=""/></a>
                                                                <a href="#;"><img src="assets/images/logo/brandlogo1.png" alt=""/></a>
                                                            </div>
                                                            <div class="menu-brand-logo">
                                                                <a href="#;"><img src="assets/images/logo/brandlogo1.png" alt=""/></a>
                                                                <a href="#;"><img src="assets/images/logo/brandlogo1.png" alt=""/></a>
                                                                <a href="#;"><img src="assets/images/logo/brandlogo1.png" alt=""/></a>
                                                            </div>
                                                        </li>
                                                        <li class="grid__item lvl-1 col-md-3 col-lg-3 p-0">
                                                            <a href="#"><img src="assets/images/megamenu-banner3.jpg" alt=""/></a>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li class="lvl1 parent megamenu"><a href="#">HEALTH &amp; WELLNESS<i class="anm anm-angle-down-l"></i></a>
                                        <div class="megamenu style2">
                                            <ul class="grid mmWrapper">
                                                <li class="grid__item one-whole">
                                                    <ul class="grid">
                                                        <li class="grid__item lvl-1 col-md-3 col-lg-3"><a href="#" class="site-nav lvl-1 menu-title">Digestables</a>
                                                            <ul class="subLinks">
                                                                <li class="lvl-2"><a href="product-layout1.html" class="site-nav lvl-2">Weight Loss</a></li>
                                                                <li class="lvl-2"><a href="product-layout2.html" class="site-nav lvl-2">Vitamin &amp; Suppliments</a></li>
                                                                <li class="lvl-2"><a href="product-layout3.html" class="site-nav lvl-2">Menopause</a></li>
                                                                <li class="lvl-2"><a href="product-layout4.html" class="site-nav lvl-2">Detox</a></li>
                                                                <li class="lvl-2"><a href="product-layout5.html" class="site-nav lvl-2">Product Layout5</a></li>
                                                                <li class="lvl-2"><a href="product-layout6.html" class="site-nav lvl-2">Sexual Wellness</a></li>
                                                            </ul>
                                                        </li>
                                                        <li class="grid__item lvl-1 col-md-3 col-lg-3"><a href="#" class="site-nav lvl-1 menu-title">Tools &amp; Products</a>
                                                            <ul class="subLinks">
                                                                <li class="lvl-2"><a href="product-standard.html" class="site-nav lvl-2">Oral Care</a></li>
                                                                <li class="lvl-2"><a href="product-variable.html" class="site-nav lvl-2">Sexual Wellness</a></li>
                                                                <li class="lvl-2"><a href="product-grouped.html" class="site-nav lvl-2">Waist Trainers</a></li>
                                                                <li class="lvl-2"><a href="product-layout1.html" class="site-nav lvl-2">Massage</a></li>
                                                                <li class="lvl-2"><a href="product-layout2.html" class="site-nav lvl-2">Home Spa &amp; Aroma Therapy</a></li>
                                                                <li class="lvl-2"><a href="product-outofstock.html" class="site-nav lvl-2">Sexual Wellness</a></li>
                                                                <li class="lvl-2"><a href="product-external-affiliate.html" class="site-nav lvl-2">Femanine Wellness</a></li>
                                                            </ul>
                                                        </li>
                                                        <li class="grid__item lvl-1 col-md-3 col-lg-3"><a href="#" class="site-nav lvl-1 menu-title">Top Brands</a>
                                                            <div class="menu-brand-logo">
                                                                <a href="#;"><img src="assets/images/logo/brandlogo1.png" alt=""/></a>
                                                                <a href="#;"><img src="assets/images/logo/brandlogo1.png" alt=""/></a>
                                                                <a href="#;"><img src="assets/images/logo/brandlogo1.png" alt=""/></a>
                                                            </div>
                                                            <div class="menu-brand-logo">
                                                                <a href="#;"><img src="assets/images/logo/brandlogo1.png" alt=""/></a>
                                                                <a href="#;"><img src="assets/images/logo/brandlogo1.png" alt=""/></a>
                                                                <a href="#;"><img src="assets/images/logo/brandlogo1.png" alt=""/></a>
                                                            </div>
                                                        </li>
                                                        <li class="grid__item lvl-1 col-md-3 col-lg-3 p-0">
                                                            <a href="#"><img src="assets/images/megamenu-banner3.jpg" alt=""/></a>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li class="lvl1 parent megamenu"><a href="#">SERVICES <i class="anm anm-angle-down-l"></i></a>
                                        <div class="megamenu style4">
                                            <ul class="grid grid--uniform mmWrapper">
                                                <li class="grid__item lvl-1 col-md-3 col-lg-3"><a href="#" class="site-nav lvl-1 menu-title">Hair</a>
                                                    <ul class="subLinks">
                                                        <li class="lvl-2"><a href="category-2columns.html" class="site-nav lvl-2">Mobile Hairdresser &amp; Barber</a></li>
                                                        <li class="lvl-2"><a href="category-5columns.html" class="site-nav lvl-2">Extensions &amp; Wigs</a></li>
                                                        <li class="lvl-2"><a href="category-3columns.html" class="site-nav lvl-2">European &amp; Straigt Hair Types</a></li>
                                                        <li class="lvl-2"><a href="category-4columns.html" class="site-nav lvl-2">Afro Hair Stylists</a></li>
                                                    </ul>
                                                </li>
                                                <li class="grid__item lvl-1 col-md-3 col-lg-3"><a href="#" class="site-nav lvl-1 menu-title">Hands &amp; Feet</a>
                                                    <ul class="subLinks">
                                                        <li class="lvl-2"><a href="shop-list-view.html" class="site-nav lvl-2">Nail Technician</a></li>
                                                        <li class="lvl-2"><a href="shop-category-slideshow.html" class="site-nav lvl-2">Mobile Service</a></li>
                                                        <li class="lvl-2"><a href="shop-left-sidebar.html" class="site-nav lvl-2">Massage</a></li>
                                                        <li class="lvl-2"><a href="shop-left-sidebar.html" class="site-nav lvl-2">Male Nail Care</a></li>
                                                    </ul>
                                                </li>
                                                <li class="grid__item lvl-1 col-md-3 col-lg-3"><a href="#" class="site-nav lvl-1 menu-title">Health &amp; Beauty</a>
                                                    <ul class="subLinks">
                                                        <li class="lvl-2"><a href="shop-left-sidebar.html" class="site-nav lvl-2">Makeup Artist</a></li>
                                                        <li class="lvl-2"><a href="shop-small-heading.html" class="site-nav lvl-2">Spa &amp; De-stress</a></li>
                                                        <li class="lvl-2"><a href="shop-no-sidebar.html" class="site-nav lvl-2">Mobile Service</a></li>
                                                        <li class="lvl-2"><a href="shop-right-sidebar.html" class="site-nav lvl-2">Wax</a></li>
                                                        <li class="lvl-2"><a href="shop-heading-with-banner2.html" class="site-nav lvl-2">Fitness</a></li>
                                                        <li class="lvl-2"><a href="swatches-style.html" class="site-nav lvl-2">Dermatology</a></li>
                                                    </ul>
                                                </li>
                                                <li class="grid__item lvl-1 col-md-3 col-lg-3"><a href="#" class="site-nav lvl-1 menu-title">Groups &amp; Special Occassions</a>
                                                    <ul class="subLinks">
                                                    <li class="lvl-2"><a href="my-wishlist.html" class="site-nav lvl-2">Weddings &amp; Special</a></li>
                                                    <li class="lvl-2"><a href="cart-style1.html" class="site-nav lvl-2">Group Packages</a></li>
                                                    <li class="lvl-2"><a href="cart-style2.html" class="site-nav lvl-2">Hen &amp; Stag</a></li>
                                                    <li class="lvl-2"><a href="checkout-style1.html" class="site-nav lvl-2">Special Deals</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                            <div class="row clear">
                                                <div class="col-md-4 col-lg-4">
                                                    <a href="#;"><img src="assets/images/megamenu-banner4.jpg" data-src="assets/images/megamenu-banner4.jpg" alt=""/></a>
                                                </div>
                                                <div class="col-md-4 col-lg-4">
                                                    <a href="#;"><img src="assets/images/megamenu-banner4.jpg" data-src="assets/images/megamenu-banner4.jpg" alt=""/></a>
                                                </div>
                                                <div class="col-md-4 col-lg-4">
                                                    <a href="#;"><img src="assets/images/megamenu-banner4.jpg" data-src="assets/images/megamenu-banner4.jpg" alt=""/></a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="lvl1 parent megamenu"><a href="#">MEN<i class="anm anm-angle-down-l"></i></a>
                                        <div class="megamenu style4">
                                            <ul class="grid grid--uniform mmWrapper">
                                                <li class="grid__item lvl-1 col-md-3 col-lg-3"><a href="#" class="site-nav lvl-1 menu-title">Hair Care</a>
                                                    <ul class="subLinks">
                                                        <li class="lvl-2"><a href="category-2columns.html" class="site-nav lvl-2">Mobile Hairdresser &amp; Barber</a></li>
                                                        <li class="lvl-2"><a href="category-5columns.html" class="site-nav lvl-2">Extensions &amp; Wigs</a></li>
                                                        <li class="lvl-2"><a href="category-3columns.html" class="site-nav lvl-2">European &amp; Straigt Hair Types</a></li>
                                                        <li class="lvl-2"><a href="category-4columns.html" class="site-nav lvl-2">Afro Hair Stylists</a></li>
                                                    </ul>
                                                </li>
                                                <li class="grid__item lvl-1 col-md-3 col-lg-3"><a href="#" class="site-nav lvl-1 menu-title">Hands &amp; Feet</a>
                                                    <ul class="subLinks">
                                                        <li class="lvl-2"><a href="shop-list-view.html" class="site-nav lvl-2">Nail Technician</a></li>
                                                        <li class="lvl-2"><a href="shop-category-slideshow.html" class="site-nav lvl-2">Mobile Service</a></li>
                                                        <li class="lvl-2"><a href="shop-left-sidebar.html" class="site-nav lvl-2">Massage</a></li>
                                                        <li class="lvl-2"><a href="shop-left-sidebar.html" class="site-nav lvl-2">Male Nail Care</a></li>
                                                    </ul>
                                                </li>
                                                <li class="grid__item lvl-1 col-md-3 col-lg-3"><a href="#" class="site-nav lvl-1 menu-title">Tools</a>
                                                    <ul class="subLinks">
                                                        <li class="lvl-2"><a href="shop-left-sidebar.html" class="site-nav lvl-2">Makeup Artist</a></li>
                                                        <li class="lvl-2"><a href="shop-small-heading.html" class="site-nav lvl-2">Spa &amp; De-stress</a></li>
                                                        <li class="lvl-2"><a href="shop-no-sidebar.html" class="site-nav lvl-2">Mobile Service</a></li>
                                                        <li class="lvl-2"><a href="shop-right-sidebar.html" class="site-nav lvl-2">Wax</a></li>
                                                        <li class="lvl-2"><a href="shop-heading-with-banner2.html" class="site-nav lvl-2">Fitness</a></li>
                                                        <li class="lvl-2"><a href="swatches-style.html" class="site-nav lvl-2">Dermatology</a></li>
                                                    </ul>
                                                </li>
                                                <li class="grid__item lvl-1 col-md-3 col-lg-3"><a href="#" class="site-nav lvl-1 menu-title">Groups &amp; Special Occassions</a>
                                                    <ul class="subLinks">
                                                    <li class="lvl-2"><a href="my-wishlist.html" class="site-nav lvl-2">Weddings &amp; Special</a></li>
                                                    <li class="lvl-2"><a href="cart-style1.html" class="site-nav lvl-2">Group Packages</a></li>
                                                    <li class="lvl-2"><a href="cart-style2.html" class="site-nav lvl-2">Hen &amp; Stag</a></li>
                                                    <li class="lvl-2"><a href="checkout-style1.html" class="site-nav lvl-2">Special Deals</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                            <div class="row clear">
                                                <div class="col-md-4 col-lg-4">
                                                    <a href="#;"><img src="assets/images/megamenu-banner4.jpg" data-src="assets/images/megamenu-banner4.jpg" alt=""/></a>
                                                </div>
                                                <div class="col-md-4 col-lg-4">
                                                    <a href="#;"><img src="assets/images/megamenu-banner4.jpg" data-src="assets/images/megamenu-banner4.jpg" alt=""/></a>
                                                </div>
                                                <div class="col-md-4 col-lg-4">
                                                    <a href="#;"><img src="assets/images/megamenu-banner4.jpg" data-src="assets/images/megamenu-banner4.jpg" alt=""/></a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </nav>
                            <!--End Desktop Menu-->
                        </div>
                        <div class="col-3 col-sm-3 col-md-3 col-lg-3 align-self-center icons-col text-right">
                            <!--Search-->
                            <Search />
                            <!--End Search-->
                            <!--Account Dropdown-->
                            <div class="setting-link iconset">
                                <a href="#" class="site-header__cart btn-minicart" data-toggle="modal" data-target="#minicart-drawer">
                                    <font-awesome-icon :icon="['fas', 'user']"/>
                                    <span class="site-cart-count">2</span>
                                </a>
                            </div>
                            <!--End Minicart Dropdown-->
                            <!--Setting Dropdown-->
                            <div class="setting-link iconset">
                                <i class="icon icon-settings"></i>
                            </div>
                            <div id="settingsBox">
                                <div class="customer-links">
                                    <p><a href="login.html" class="btn">Login</a></p>
                                    <p class="text-center">New User? <a href="register.html" class="register">Create an Account</a></p>
                                    <p class="text-center">Hi welcome msg!</p>
                                </div>
                                <div class="currency-picker">
                                    <span class="ttl">Select Currency</span>
                                    <ul id="currencies" class="cnrLangList">
                                    <li class="selected"><a href="#;">INR</a></li><li><a href="#;">GBP</a></li><li><a href="#;">CAD</a></li><li><a href="#;">USD</a></li><li><a href="#;">AUD</a></li><li><a href="#;">EUR</a></li><li><a href="#;">JPY</a></li></ul>
                                </div>
                                <div class="language-picker">
                                    <span class="ttl">SELECT LANGUAGE</span>
                                    <ul id="language" class="cnrLangList">
                                        <li><a href="#">English</a></li><li><a href="#">French</a></li><li><a>German</a></li>
                                    </ul>
                                </div>
                            </div>
                            <!--End Setting Dropdown-->
                            <!--Wishlist-->
                            <div class="wishlist-link iconset">
                                <i class="icon anm anm-heart-l"></i>
                                <span class="wishlist-count">0</span>
                            </div>
                            <!--End Wishlist-->
                            <!--Minicart Dropdown-->
                            <div class="header-cart iconset">
                                <a href="#" class="site-header__cart btn-minicart" data-toggle="modal" data-target="#minicart-drawer">
                                    <i class="icon anm anm-bag-l"></i>
                                    <span class="site-cart-count">2</span>
                                </a>
                            </div>
                            <!--End Minicart Dropdown-->
                        </div>
                    </div>
                </div>
            </header>
            <!--Store Features-->
            <div class="store-info-slider clearfix">
                <div class="container">
                    <div class="store-slider-items">
                        <div class="info-bar"><a href="#">SHOP DEALS OF THE WEEK - <b>UP TO 70% OFF</b></a></div>
                        <div class="info-bar"><a href="#"><b>FREE WORLDWIDE SHIPPING</b> ON ALL ORDERSABOVE $100</a></div>
                        <div class="info-bar text-right"><a href="#"><b>EXTENDED RETURN</b> UNTIL 10TH NOVEMBER</a></div>
                    </div>
                </div>
            </div>
            <!--End Store Features-->
        </div>
        <!--End Header-->
        <!--Mobile Menu-->
        <div class="mobile-nav-wrapper" role="navigation">
            <div class="closemobileMenu"><i class="icon anm anm-times-l pull-right"></i> Close Menu</div>
            <ul id="MobileNav" class="mobile-nav">
                <li class="lvl1 parent megamenu"><a href="index.html">#TRENDING <i class="anm anm-plus-l"></i></a>
                    <ul>
                        <li><a href="#" class="site-nav">Homepages<i class="anm anm-plus-l"></i></a>
                        <ul>
                            <li><a href="index.html" class="site-nav">Home 01 <span class="lbl nm_label3">Popular</span></a></li>
                            <li><a href="index-demo2.html" class="site-nav">Home 02 <span class="lbl nm_label3">Popular</span></a></li>
                            <li><a href="index-demo3.html" class="site-nav">Home 03</a></li>
                            <li><a href="index-demo4.html" class="site-nav">Home 04</a></li>
                            <li><a href="index-demo5.html" class="site-nav">Home 05</a></li>
                            <li><a href="index-demo6.html" class="site-nav">Home 06</a></li>
                            <li><a href="index-demo7.html" class="site-nav">Home 07</a></li>
                            <li><a href="index-demo8.html" class="site-nav">Home 08</a></li>
                            <li><a href="index-demo9.html" class="site-nav">Home 09</a></li>
                        </ul>
                        </li>
                        <li><a href="#" class="site-nav">Homepages<i class="anm anm-plus-l"></i></a>
                        <ul>
                            <li><a href="index-demo10.html" class="site-nav">Home 10</a></li>
                            <li><a href="index-demo11.html" class="site-nav">Home 11</a></li>
                            <li><a href="index-demo12.html" class="site-nav">Home 12</a></li>
                            <li><a href="index-demo13.html" class="site-nav">Home 13</a></li>
                            <li><a href="index-demo14.html" class="site-nav">Home 14</a></li>
                            <li><a href="index-demo15.html" class="site-nav">Home 15</a></li>
                            <li><a href="index-demo16.html" class="site-nav">Home 16</a></li>
                            <li><a href="index-demo17.html" class="site-nav">Home 17</a></li>
                            <li><a href="index-yoga-shop.html" class="site-nav">Yoga Shop</a></li>
                        </ul>
                        </li>
                        <li>
                            <a href="#" class="site-nav">Homeskin <i class="anm anm-plus-l"></i></a>
                            <ul>
                                <li class="lvl-2"><a href="index-jewelry-store.html" class="site-nav">Jewelry Store</a></li>
                                <li class="lvl-2"><a href="index-pet-store.html" class="site-nav">Pet Store <span class="lbl nm_label4">Hot</span></a></li>
                                <li class="lvl-2"><a href="index-medical-demo.html" class="site-nav">Medical</a></li>
                                <li class="lvl-2"><a href="index-demo18.html" class="site-nav">Furniture Store <span class="lbl nm_label4">Hot</span></a></li>
                                <li class="lvl-2"><a href="index-christmas-1.html" class="site-nav">Christmas 1</a></li>
                                <li class="lvl-2"><a href="index-christmas-2.html" class="site-nav">Christmas 2</a></li>
                                <li class="lvl-2"><a href="index-bags-store.html" class="site-nav">Bags Store <span class="lbl nm_label2">New</span></a></li>
                                <li class="lvl-2"><a href="index-digital-store.html" class="site-nav">Digital Store <span class="lbl nm_label2">New</span></a></li>
                                <li class="lvl-2"><a href="index-beachwear.html" class="site-nav">Beachwear <span class="lbl nm_label2">New</span></a></li>
                                <li class="lvl-2"><a href="index-bike-store.html" class="site-nav">Bike Store <span class="lbl nm_label2">New</span></a></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li class="lvl1 parent megamenu"><a href="#">Shop <i class="anm anm-plus-l"></i></a>
                    <ul>
                        <li><a href="#" class="site-nav">Category Page<i class="anm anm-plus-l"></i></a>
                        <ul>
                            <li><a href="category-2columns.html" class="site-nav">2 Columns with style1</a></li>
                            <li><a href="category-3columns.html" class="site-nav">3 Columns with style2</a></li>
                            <li><a href="category-4columns.html" class="site-nav">4 Columns with style3</a></li>
                            <li><a href="category-5columns.html" class="site-nav">5 Columns with style4</a></li>
                            <li><a href="category-6columns.html" class="site-nav">6 Columns with Fullwidth</a></li>
                            <li><a href="category-7columns.html" class="site-nav">7 Columns</a></li>
                            <li><a href="category-empty.html" class="site-nav last">Category Empty</a></li>
                        </ul>
                        </li>
                        <li><a href="#" class="site-nav">Shop Page<i class="anm anm-plus-l"></i></a>
                        <ul>
                            <li><a href="shop-list-view.html" class="site-nav">List View</a></li>
                            <li><a href="shop-category-slideshow.html" class="site-nav">Category Slideshow</a></li>
                            <li><a href="shop-left-sidebar.html" class="site-nav">Left Sidebar</a></li>
                            <li><a href="shop-right-sidebar.html" class="site-nav">Right Sidebar</a></li>
                            <li><a href="shop-fullwidth.html" class="site-nav">Fullwidth/No Sidebar</a></li>
                            <li><a href="shop-no-sidebar.html" class="site-nav">No Sidebar/No Filter</a></li>
                            <li><a href="shop-category-slideshow.html" class="site-nav last">With category description</a></li>
                        </ul>
                        </li>
                        <li><a href="#" class="site-nav">Shop Page<i class="anm anm-plus-l"></i></a>
                            <ul>
                                <li><a href="shop-left-sidebar.html" class="site-nav">Simple Heading</a></li>
                                <li><a href="shop-small-heading.html" class="site-nav">Small Heading</a></li>
                                <li><a href="shop-no-sidebar.html" class="site-nav">Big Heading With Image</a></li>
                                <li><a href="shop-right-sidebar.html" class="site-nav">Headings With Banner#1</a></li>
                                <li><a href="shop-heading-with-banner2.html" class="site-nav2">Headings With Banner#2</a></li>
                                <li><a href="swatches-style.html" class="site-nav">Swatches Style</a></li>
                                <li><a href="classic-pagination.html" class="site-nav last">Classic Pagination</a></li>
                            </ul>
                        </li>
                        <li><a href="#" class="site-nav">Shop Other Page<i class="anm anm-plus-l"></i></a>
                            <ul>
                            <li><a href="my-wishlist.html" class="site-nav">My Wishlist</a></li>
                            <li><a href="cart-style1.html" class="site-nav">Cart Page Style1</a></li>
                            <li><a href="cart-style2.html" class="site-nav">Cart Page Style2</a></li>
                            <li><a href="checkout-style1.html" class="site-nav">Checkout Page Style1</a></li>
                            <li><a href="checkout-style2.html" class="site-nav">Checkout Page Style2</a></li>
                            <li><a href="compare-style1.html" class="site-nav">Compare Page Style1</a></li>
                            <li><a href="compare-style2.html" class="site-nav last">Compare Page Style2</a></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li class="lvl1 parent megamenu"><a href="product-layout1.html">Product <i class="anm anm-plus-l"></i></a>
                    <ul>
                        <li><a href="product-layout1.html" class="site-nav">Product Page<i class="anm anm-plus-l"></i></a>
                        <ul>
                            <li><a href="product-layout1.html" class="site-nav">Product Layout1</a></li>
                            <li><a href="product-layout2.html" class="site-nav">Product Layout2</a></li>
                            <li><a href="product-layout3.html" class="site-nav">Product Layout3</a></li>
                            <li><a href="product-layout4.html" class="site-nav">Product Layout4</a></li>
                            <li><a href="product-layout5.html" class="site-nav">Product Layout5</a></li>
                            <li><a href="product-layout6.html" class="site-nav">Product Layout6</a></li>
                            <li><a href="product-layout7.html" class="site-nav">Product Layout7</a></li>
                            <li><a href="product-accordian.html" class="site-nav">Product Accordian</a></li>
                            <li><a href="product-tabs-left.html" class="site-nav">Product Tabs Left</a></li>
                            <li><a href="product-tabs-center.html" class="site-nav last">Product Tabs Center</a></li>
                        </ul>
                        </li>
                        <li><a href="short-description.html" class="site-nav">Product Page Types <i class="anm anm-plus-l"></i></a>
                        <ul>
                            <li><a href="product-standard.html" class="site-nav">Standard Product</a></li>
                            <li><a href="product-variable.html" class="site-nav">Variable Product</a></li>
                            <li><a href="product-grouped.html" class="site-nav">Grouped Product</a></li>
                            <li><a href="product-layout1.html" class="site-nav">New Product</a></li>
                            <li><a href="product-layout2.html" class="site-nav">Sale Product</a></li>
                            <li><a href="product-outofstock.html" class="site-nav">Out Of Stock Product</a></li>
                            <li><a href="product-external-affiliate.html" class="site-nav">External / Affiliate Product</a></li>
                            <li><a href="product-layout1.html" class="site-nav">Variable Image</a></li>
                            <li><a href="product-layout4.html" class="site-nav">Variable Select</a></li>
                            <li><a href="prodcut-360-degree-view.html" class="site-nav last">360 Degree view</a></li>
                        </ul>
                        </li>
                    </ul>
                </li>
                <li class="lvl1 parent megamenu"><a href="#">Lookbook <i class="anm anm-plus-l"></i></a>
                    <ul>
                        <li><a href="lookbook-2columns.html" class="site-nav">2 Columns</a></li>
                        <li><a href="lookbook-3columns.html" class="site-nav">3 Columns</a></li>
                        <li><a href="lookbook-4columns.html" class="site-nav">4 Columns</a></li>
                        <li><a href="lookbook-5columns.html" class="site-nav">5 Columns + Fullwidth</a></li>
                        <li><a href="lookbook-shop.html" class="site-nav last">Lookbook Shop</a></li>
                    </ul>
                </li>
                <li class="lvl1 parent megamenu"><a href="about-us.html">Pages <i class="anm anm-plus-l"></i></a>
                    <ul>
                        <li><a href="brands-page.html" class="site-nav">Brands Page</a></li>
                        <li><a href="login.html" class="site-nav">Login</a></li>
                        <li><a href="my-account.html" class="site-nav">My Account</a></li>
                        <li><a href="aboutus-style1.html" class="site-nav">About Us <i class="anm anm-plus-l"></i></a>
                            <ul class="dropdown">
                                <li><a href="aboutus-style1.html" class="site-nav">About Us Style1</a></li>
                                <li><a href="aboutus-style2.html" class="site-nav">About Us Style2</a></li>
                            </ul>
                        </li>
                        <li><a href="contact-style1.html" class="site-nav">Contact Us <i class="anm anm-plus-l"></i></a>
                            <ul class="dropdown">
                                <li><a href="contact-style1.html" class="site-nav">Contact Us Style1</a></li>
                                <li><a href="contact-style2.html" class="site-nav">Contact Us Style2</a></li>
                            </ul>
                        </li>
                        <li><a href="faqs-style1.html" class="site-nav">FAQs <i class="anm anm-plus-l"></i></a>
                            <ul class="dropdown">
                                <li><a href="faqs-style1.html" class="site-nav">FAQs Style1</a></li>
                                <li><a href="faqs-style2.html" class="site-nav">FAQs Style2</a></li>
                            </ul>
                        </li>
                        <li><a href="cms.html" class="site-nav">CMS</a></li>
                        <li><a href="error-404.html" class="site-nav">Error 404</a></li>
                        <li><a href="coming-soon.html" class="site-nav">Coming soon</a></li>
                    </ul>
                </li>
                <li class="lvl1 parent megamenu"><a href="blog-left-sidebar.html">Blog <i class="anm anm-plus-l"></i></a>
                    <ul>
                        <li><a href="blog-left-sidebar.html" class="site-nav">Left Sidebar</a></li>
                        <li><a href="blog-right-sidebar.html" class="site-nav">Right Sidebar</a></li>
                        <li><a href="blog-fullwidth.html" class="site-nav">Fullwidth</a></li>
                        <li><a href="blog-2columns.html" class="site-nav">2 Columns</a></li>
                        <li><a href="blog-3columns.html" class="site-nav">3 Columns</a></li>
                        <li><a href="blog-4columns.html" class="site-nav">4 Columns</a></li>
                        <li><a href="blog-single-post.html" class="site-nav">Single Post</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
	<!--End Mobile Menu-->
</template>
<script>
import Search from "~/components/Search";
export default {
    componants: {
        Search
    }
};
</script>