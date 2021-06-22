<template>
    <main>
        		<!-- Main content -->
		<section class="content">

			<div class="row">
			  <div class="col-12">
				<div class="box">
					<div class="box-header with-border">
					  <h4 class="box-title">Add Product</h4>
					</div>
				  <div class="box-body">
					<form action="#">
						<div class="form-body">
							<div class="row">
								<div class="col-md-6">
									<div class="form-group">
									  <label class="font-weight-700 font-size-16">Product Title</label>
									  <input type="text" class="form-control" placeholder="Product Name">
									</div>
								</div>
								<!--/span-->
								<div class="col-md-6">
									<div class="form-group">
									   <label class="font-weight-700 font-size-16">Sub Title</label>
									   <span>Increase your chance of getting found</span>
									   <input type="text" class="form-control" placeholder="Lorem Ipsum Text...">
									</div>
								</div>
								<!--/span-->
							</div>
							<!--/row-->
							<!--/row-->
							<div class="row">
								<!--CATEGORY DROPDOWN-->
								<div class="col-md-6">
									<div class="form-group">
										<label class="font-weight-700 font-size-16">Category</label>
										<select class="form-control" data-placeholder="Choose a Category" tabindex="1">
											<option v-for="category in categories" 
											:value="category._id" 
											:key="category._id">{{ category.type }}</option>
										</select>
									</div>
								</div>
								<!--SUB-CATEGORY DROPDOWN-->
                                <div class="col-md-6">
									<div class="form-group">
										<label class="font-weight-700 font-size-16">Sub-Category</label>
										<select class="form-control" data-placeholder="Choose a Category" tabindex="1">
											<option v-for="category in categories" 
											:value="category._id" 
											:key="category._id">{{ category.type }}</option>
										</select>
									</div>
								</div>
								<!--/span-->
								<div class="col-md-6">
									<div class="form-group">
										<label class="font-weight-700 font-size-16">Status</label>
										<div class="radio-list">
											<label class="radio-inline p-0 mr-10">
												<div class="radio radio-info">
													<input type="radio" name="radio" id="radio1" value="option1">
													<label for="radio1">Publish</label>
												</div>
											</label>
											<label class="radio-inline">
												<div class="radio radio-info">
													<input type="radio" name="radio" id="radio2" value="option2">
													<label for="radio2">Draft</label>
												</div>
											</label>
										</div>
									</div>
								</div>
								<!--/span-->
							</div>
							<!--/row-->
							<div class="row">
								<div class="col-md-6">
									<div class="form-group">
										<label class="font-weight-700 font-size-16">Price</label>
										<div class="input-group">
											<div class="input-group-addon"><i class="ti-money"></i></div>
											<input type="number" class="form-control" placeholder="9.99"> </div>
									</div>
								</div>
								<!--/span-->
								<div class="col-md-6">
									<div class="form-group">
										<label class="font-weight-700 font-size-16">Discount</label>
										<div class="input-group">
											<div class="input-group-addon"><i class="ti-cut"></i></div>
											<input type="number" class="form-control" placeholder="50%"> </div>
									</div>
								</div>
								<!--/span-->
							</div>
							<div class="row">
								<div class="col-md-12">
									<div class="form-group">
										<label class="font-weight-700 font-size-16">Product Description</label>
										<textarea placeholder="Provide a description of your product or service" class="form-control p-20" rows="4">There are many variations of passages of Lorem Ipsum available,</textarea>
									</div>
								</div>
							</div>
							<!--/row-->
							<div class="row">
								<div class="col-md-6">
									<div class="form-group">
										<label class="font-weight-700 font-size-16">Meta Title</label>
										<input type="text" class="form-control"> </div>
								</div>
								<!--/span-->
								<div class="col-md-6">
									<div class="form-group">
										<label class="font-weight-700 font-size-16">Meta Keyword</label>
										<input type="text" class="form-control"> </div>
								</div>
								<!--/span-->
								<!-- UPLOAD PHOTO-->
								<div class="col-md-3">
									<h4 class="box-title mt-20">Upload Image</h4>
									<div class="product-img text-left">
										<img src="../static/images/product/product-9.png" alt="">
										<div class="btn btn-info mb-20">
											<span>Upload Another Image</span>
                                            <input type="file" class="upload"> 
										</div>
										<button class="btn btn-success">Edit</button>
										<button class="btn btn-danger">Delete</button>
									</div>
								</div>
							</div>
							<div class="row">
								<div class="col-md-12">
									<h4 class="box-title mt-40">General Info</h4>
									<div class="table-responsive">
										<table class="table no-border td-padding">
											<tbody>
												<tr>
													<td>
														<input type="text" class="form-control" placeholder="Brand">
													</td>
													<td>
														<input type="text" class="form-control" placeholder="Sellar">
													</td>
												</tr>
												<tr>
													<td>
														<input type="text" class="form-control" placeholder="Delivery Condition">
													</td>
													<td>
														<input type="text" class="form-control" placeholder="Knock Down">
													</td>
												</tr>
												<tr>
													<td>
														<input type="text" class="form-control" placeholder="Color">
													</td>
													<td>
														<input type="text" class="form-control" placeholder="Gift Pack">
													</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>
						<div class="form-actions mt-10">
							<button type="submit" class="btn btn-primary"> <i class="fa fa-check"></i> Save</button>
							<button type="button" class="btn btn-danger">Cancel</button>
						</div>
					</form>
				  </div>
				</div>
			  </div>		  
		  </div>

		</section>
		<!-- /.content -->

    </main>
</template>
<script>
export default {
    async asyncData({ $axios}) {
        try {
			let categories = $axios.$get('http://localhost:3000/api/categories');
			let owners = $axios.$get("http://localhost:3000/api/owners");

			const [catResponse, ownerResponse] = await Promise.all([ //promise all runs api at the same time 
				categories,
				owners
			]);

			console.log(catResponse);

			return {
				categories: catResponse.categories,
				owners: ownerResponse.owners
			};

        } catch (err) {
			res.status(500).json({
				success: false,
				message: err.message
			});
        }
    }
};
</script>