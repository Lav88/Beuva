<template>
    <!--Breadcrumbs-->
        <div class="breadcrumbs-wrapper">
        	<div class="container">
            	<div class="breadcrumbs">
                    <a href="index.html" title="Back to the home page">Home</a> 
                    <span aria-hidden="true">|</span> 
                    <a href="index.html" title="Back to the home page"> {{ product.category.type }}</a> 
                    <span aria-hidden="true">|</span> 
                    <span>{{ product.title }}</span>
                </div>
            </div>
        </div>
        <!--End Breadcrumbs-->
</template>
<script>
export default {
    async asyncData({ $axios, params }) {
    try {
      let response = await $axios.$get(`/api/products/${params.id}`);
      
      console.log(response);

      return {
        product: response.product
      };

      
    } catch(err) {
      console.log(err);
    }
  }
};
    
</script>


