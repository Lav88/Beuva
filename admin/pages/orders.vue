<template>
    <main>
          <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
	  <div class="container-full">
		<!-- Content Header (Page header) -->

		<!-- Main content -->
		<section class="content">

		  <div class="row">
			  <div class="col-12">
				<div class="box">
				  <div class="box-body">
					<div class="table-responsive">
						<table id="productorder" class="table table-hover no-wrap product-order" data-page-size="10">
							<thead>
								<tr>
									 <th>Product Title</th>
									 <th>Order ID</th>
									 <th>Photo</th>
									 <th>Price</th>
									 <th>Quantity</th>
									 <th>Description </th>
									 <th>Status</th>
									 <th>Actions</th>
								</tr>
							</thead>
							<tbody>
                                
                                <tr v-for="(product, index) in products"
                                :key="product._id">
                                    <td>{{ product.title }}</td>
                                    <td>#12485791</td>
                                    <td><img :src="product.photo" alt="product" width="80"></td>
                                    <td>${{ product.price }}</td>
                                    <td>{{ product.stockQuantity }}</td>
                                    <td>{{ product.description}}</td>
                                    <td><span class="badge badge-pill badge-success">Paid</span></td>
                                    <td><a href="javascript:void(0)" class="text-info mr-10" data-toggle="tooltip" data-original-title="Edit">
                                            <i class="ti-marker-alt"></i>
                                        </a> 
                                        <a href="javascript:void(0)" class="text-danger" data-original-title="Delete" data-toggle="tooltip">
                                            <i class="ti-trash"></i>
                                        </a>
                                    </td>
                                </tr>
                                

							</tbody>						
						</table>
					</div>
				  </div>
				</div>
			  </div>		  
		  </div>

		</section>
		<!-- /.content -->
	  </div>
  </div>
  <!-- /.content-wrapper -->
    </main>
</template>
<script>
export default { //axios is a Library to call api's
//asnycData is fetching data before nuxt page finishes loading on browser
//good for SEO - data will be loaded first
  async asyncData({ $axios }) {
    try {
      let response = await $axios.$get("http://localhost:3000/api/products");
      console.log(response);

      return {
        products: response.products
      };
    } catch (err) {

    }
    
  }
};
</script>