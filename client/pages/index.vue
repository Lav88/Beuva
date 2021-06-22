<template>
  <main class="template-index index-demo1">
    <div id="page-content">
      <MainBanner />
      <div class="container">
          <!--New Arrivals-->
        <div class="section product-slider">>
            <div class="section-header">
                <h2>New Arrivals</h2>
                <p>Shop our new arrivals from established brands</p>
            </div>
            <div class="productSlider grid-products" > <!--data-slick='{"slidesToShow": 1, "slidesToScroll": 4}'-->
              <VueSlickCarousel :arrows="true" :dots="true">
                <div class="col-12 item" v-for="product in products" :key="product._id">
                    <!-- start product image -->
                    <div class="product-image" >
                        <!-- start product image -->
                        <a href="product-layout1.html" class="product-img">
                            <!-- image -->
                            <img class="primary blur-up lazyload" 
                            data-src="assets/images/product-images/product1.jpg" 
                            :src="product.photo" alt="" title="" >
                            <!-- End image -->
                            <!-- Hover image -->
                            <img class="hover blur-up lazyload" data-src="assets/images/product-images/product1.jpg" src="" alt="" title="" >
                            <!-- End hover image -->
                            <!-- product label -->
                            <div class="product-labels"><span class="lbl on-sale">Sale</span></div>
                            <!-- End product label -->
                        </a>
                        <!-- end product image -->
                        
                        <!--Product Button-->
                        <div class="button-set style1">
                            <ul>
                                <li>
                                    <!--Cart Button-->
                                    <form class="add" action="cart-variant1.html" method="post">
                                        <button class="btn-icon btn btn-addto-cart" type="button" tabindex="0">
                                            <i class="icon anm anm-cart-l"></i>
                                            <span class="tooltip-label">Add to Cart</span>
                                        </button>
                                    </form>
                                    <!--end Cart Button-->
                                </li>
                                <li>
                                    <!--Quick View Button-->
                                    <a href="javascript:void(0)" title="Quick View" class="btn-icon quick-view-popup quick-view" data-toggle="modal" data-target="#content_quickview">
                                        <i class="icon anm anm-search-plus-l"></i>
                                        <span class="tooltip-label">Quick View</span>
                                    </a>
                                    <!--End Quick View Button-->
                                </li>
                                <li>
                                    <!--Wishlist Button-->
                                    <div class="wishlist-btn">
                                        <a class="btn-icon wishlist add-to-wishlist" href="my-wishlist.html">
                                            <i class="icon anm anm-heart-l"></i>
                                            <span class="tooltip-label">Add To Wishlist</span>
                                        </a>
                                    </div>
                                    <!--End Wishlist Button-->
                                </li>
                                <li>
                                    <!--Compare Button-->
                                    <div class="compare-btn">
                                        <a class="btn-icon compare add-to-compare" href="compare-style2.html" title="Add to Compare">
                                            <i class="icon icon-reload"></i>
                                            <span class="tooltip-label">Add to Compare</span>
                                        </a>
                                    </div>
                                    <!--End Compare Button-->
                                </li>
                            </ul>
                        </div>
                        <!--End Product Button-->
                    </div>
                    <!-- end product image -->
                    <!--start product details -->
                    <div class="product-details text-center">
                        <!-- product name -->
                        <div class="product-name">
                            <a href="product-layout1.html">{{ product.title }}</a>
                        </div>
                        <!-- End product name -->
                        <!-- product price -->
                        <div class="product-price">
                            <span class="price">${{ product.price }}</span>
                        </div>
                        <!-- End product price -->
                         <!-- product owner -->
                         
                        <div class="product-price">
                            <span class="price">{{ product.owner.name }}</span>
                        </div>
                         <!-- End product owner -->
                        <!--Product Review-->
                        <div class="product-review">
                            <i class="font-13 fa fa-star"></i>
                            <i class="font-13 fa fa-star"></i>
                            <i class="font-13 fa fa-star"></i>
                            <i class="font-13 fa fa-star"></i>
                            <i class="font-13 fa fa-star-o"></i>
                        </div>
                        <!--End Product Review-->
                        <!--Color Variant -->
                        <ul class="swatches">
                            <li class="swatch small rounded navy"><span class="tooltip-label">Navy</span></li>
                            <li class="swatch small rounded green"><span class="tooltip-label">Green</span></li>
                            <li class="swatch small rounded gray"><span class="tooltip-label">Gray</span></li>
                            <li class="swatch small rounded aqua"><span class="tooltip-label">Aqua</span></li>
                            <li class="swatch small rounded orange"><span class="tooltip-label">Orange</span></li>
                        </ul>
                        <!-- End Variant -->
                    </div>
                    <!-- End product details -->
                </div>
              </VueSlickCarousel>
            </div>
        </div>
        <!--End New Arrivals-->
      </div>
    </div>
    
  </main>
</template>

<script>
import MainBanner from "~/components/MainBanner";
import VueSlickCarousel from 'slick-vuejs';
import 'slick-vuejs/dist/slick-vuejs.css';
  // optional style for arrows & dots
import 'slick-vuejs/dist/slick-vuejs-theme.css';
export default {
  components: {
    MainBanner,
    name: 'MyComponent',
    components: { VueSlickCarousel }
  },
  async asyncData({$axios}) {
    try {
      let response = await $axios.$get('/api/products');
      console.log(response);

      return {
        products: response.products
      };

      
    } catch(err) {
      console.log(err);
    }
  }
};

</script>

<style>
</style>
