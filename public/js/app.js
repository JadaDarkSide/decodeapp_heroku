"use strict";

class App{
constructor(){
this.lap = [
{
	"Brand": "Asus",
	"kind1": "Zenfone 2 laser",
	"kind2":"Zenfone 3 Max Ultra",
	"kind3":"Zenfone 4",
	"kind4":"Zenfone 5",
	"kind5":"Zenfone 6",
},
{
	"Brand": "Apple",
	"kind1": "Iphone 5",
	"kind2":"Iphone 5s",
	"kind3":"Iphone 6s",
	"kind4":"Iphone 6s plus",
	"kind5":"Iphone 7"
},
{
	"Brand": "Microsoft",
	"kind1": "Lumia 950 XL",
	"kind2":"Lumia 650",
	"kind3":"Lumia 640",
	"kind4":"Lumia 532",
	"kind5":"Lumia 830"
},
{
  "name": "Nathaniel Aris O Bureros",
  "description": "GadgetStop App",
  "repository": "https://github.com/JadaDarkSide/decodeapp_heroku.git",
  "image": "heroku/nodejs"
},      

];
this.bio = [ 
{
	"image":"img/ASUS.jpg",
	"name":"Ludwig Van Beethoven",
	"details":"Pianist, Composer"
	

},
{
	"image":"img/Sony.jpg",
	"name":"Wolfgang Amadeus Mozart",
	"details":"Pianist, Composer"
	

},
{
	"image":"img/Microsoft_Nokia_Lumia_930.jpg",
	"name":"Johann Sebastian Bach",
	"details":"Composer"
	
}
];

}

render(html,component){
component.innerHTML += html;
}


reRender(html,component){
component.innerHTML = html;
}	
}

class Component extends App{
constructor(){		
super();
}

landingPage(){
let html = `

<nav class="gtco-nav" role="navigation">
		<div class="gtco-container">
			
			<div class="row">
				<div class="col-sm-4 col-xs-12">
					<div id="gtco-logo"><a href="#indexpage"  onclick="component.indexpage()">GadgetStop<em>.</em></a></div>
				</div>
				<div class="col-xs-8 text-right menu-1">
					<ul>
						<li><a href="#" onclick="component.aboutpage()">About Us</a></li>
						<li class="has-dropdown">
							<a href="#" onclick="component.contactpage()">Contact</a>
							<ul class="dropdown">
								<li><a href="https://www.facebook.com/SummerWhereDoWeBegin05">Facebook</a></li>
								<li><a href="https://plus.google.com/u/0/113253070990440331406">GOOGLE PLUS</a></li>
								<li><a href="https://www.instagram.com/jada05atxhupz/">Instagram</a></li>
							</ul>
						</li>
						<li class="btn-cta"><a href="#"  onclick="component.orderpage()"><span>Order</span></a></li>
					</ul>	
				</div>
			</div>
			
		</div>
	</nav>

	<div id="indexpage">
	<header id="gtco-header" class="gtco-cover gtco-cover-md" role="banner" style="background-image: url(images/banner1.jpg)" data-stellar-background-ratio="0.5">
		<div class="overlay"></div>
		<div class="gtco-container">
			<div class="row">
				<div class="col-md-12 col-md-offset-0 text-left">
					

					<div class="row row-mt-15em">
						<div class="col-md-7 mt-text animate-box" data-animate-effect="fadeInUp">
							<span class="intro-text-small">This is Buy and Sell <a href="http://gettemplates.co" target="_blank">GadgetStop</a></span>
							<h1 class="cursive-font">All in one</h1>	
						</div>
						<div class="col-md-4 col-md-push-1 animate-box" data-animate-effect="fadeInRight">
							<div class="form-wrap">
								<div class="tab">
									
									<div class="tab-content">
										<div class="tab-content-inner active" data-content="signup">
											<h3 class="cursive-font">Gadget Order Info</h3>
											<form action="#">
												<div class="row form-group">
													<div class="col-md-12">
														<label for="activities">Kind of Gadget</label>
														<select name="#" id="activities" class="form-control">
															<option value="">${this.lap[0].Brand}</option>
															<option value="">${this.lap[0].kind1}</option>
															<option value="">${this.lap[0].kind2}</option>
															<option value="">${this.lap[0].kind3}</option>
															<option value="">${this.lap[0].kind4}</option>
															<option value="">${this.lap[0].kind5}</option>
														</select>
														<select name="#" id="activities" class="form-control">
															<option value="">${this.lap[1].Brand}</option>
															<option value="">${this.lap[1].kind1}</option>
															<option value="">${this.lap[1].kind2}</option>
															<option value="">${this.lap[1].kind3}</option>
															<option value="">${this.lap[1].kind4}</option>
															<option value="">${this.lap[1].kind5}</option>
														</select>
														<select name="#" id="activities" class="form-control">
															<option value="">${this.lap[2].Brand}</option>
															<option value="">${this.lap[2].kind1}</option>
															<option value="">${this.lap[2].kind2}</option>
															<option value="">${this.lap[2].kind3}</option>
															<option value="">${this.lap[2].kind4}</option>
															<option value="">${this.lap[2].kind5}</option>
														</select>
													</div>
												</div>
												<div class="row form-group">
													<div class="col-md-12">
														<label for="date-start">How many</label>
														<input type="text" id="text" class="form-control">
													</div>
												</div>
												</div>
												<div class="row form-group">
													<div class="col-md-12">
														<label for="date-start">Date</label>
														<input type="text" id="date" class="form-control">
													</div>

												<div class="row form-group">
													<div class="col-md-12">
														<form method="post" action="mailto:jibz1432@gmail.com?subject=subject&message=Info">
														<input type="submit" value="Submit Now" /> 
													</div>
												</div>
											</form>	
										</div>

										
									</div>
								</div>
							</div>
						</div>
					</div>
							
					
				</div>
			</div>
		</div>
	</header>
	</div>

	
	
	<div id="orderpage">
	<div class="gtco-section">
		<div class="gtco-containerz">
			<div class="row">
				<div class="col-md-8 col-md-offset-2 text-center gtco-heading">
					<h2 class="cursive-font primary-color">GadgetStop Seller</h2>
					<p>This is GadgetStop Seller You Can Purchase Any Model of the Gadget. If you want to order it you can simply leave a message.</p>
				</div>
			</div>
			<div class="row">

				<div class="col-lg-4 col-md-4 col-sm-6">
					<a href="images/zenfone 2.jpg" class="fh5co-card-item image-popup">
						<figure>
							<div class="overlay"><i class="ti-plus"></i></div>
							<img src="images/zenfone 2.jpg" alt="Image" class="img-responsive">
						</figure>
						<div class="fh5co-text">
							<h2>Zenfone 2</h2>
							<p>ASUS is offering a good phone with a big screen, better-than-average camera and solid internals that offer great performance...</p>
							<p><span class="price cursive-font">PHP 14,695</span></p>
						</div>
					</a>
				</div>
				<div class="col-lg-4 col-md-4 col-sm-6">
					<a href="images/iphone 7.jpg" class="fh5co-card-item image-popup">
						<figure>
							<div class="overlay"><i class="ti-plus"></i></div>
							<img src="images/iphone 7.jpg" alt="Image" class="img-responsive">
						</figure>
						<div class="fh5co-text">
							<h2>Iphone 7</h2>
							<p>The new iPhone 7 and iPhone 7 Plus are the best, most advanced iPhone ever. With a improved design, display, camera, performance and audio are truly invincible on all frontiers...</p>
							<p><span class="price cursive-font">PHP 32,000.00</span></p>
						</div>
					</a>
				</div>
				<div class="col-lg-4 col-md-4 col-sm-6">
					<a href="images/images/Microsoft_Nokia_Lumia_930.jpg" class="fh5co-card-item image-popup">
						<figure>
							<div class="overlay"><i class="ti-plus"></i></div>
							<img src="images/Microsoft_Nokia_Lumia_930.jpg" alt="Image" class="img-responsive">
						</figure>
						<div class="fh5co-text">
							<h2>Microsoft Nokia Lumia 930</h2>
							<p>Far Nokia's Windows OS phone with 20MP camera, 5inch Full HD display, Qualcomm Snapdragon 800 processor and high battery life...</p>
							<p><span class="price cursive-font">PHP11,990.00</span></p>

						</div>
					</a>
				</div>


				<div class="col-lg-4 col-md-4 col-sm-6">
					<a href="images/Sony.jpg" class="fh5co-card-item image-popup">
						<figure>
							<div class="overlay"><i class="ti-plus"></i></div>
							<img src="images/Sony.jpg" alt="Image" class="img-responsive">
						</figure>
						<div class="fh5co-text">
							<h2>Sony Xperia Z5 </h2>
							<p>Sony Xperia Z5 is the latest in the Xperia Z series with a 5.2 Inches Full HD display, powered by Qualcomm Snapdragon 810 processor and runs on Android™ 5.1 LP..</p>
							<p><span class="price cursive-font">PHP18,500.00</span></p>
						</div>
					</a>
				</div>

				<div class="col-lg-4 col-md-4 col-sm-6">
					<a href="images/samsung.jpg" class="fh5co-card-item image-popup">
						<figure>
							<div class="overlay"><i class="ti-plus"></i></div>
							<img src="images/samsung.jpg" alt="Image" class="img-responsive">
						</figure>
						<div class="fh5co-text">
							<h2>Samsung Galaxy S7</h2>
							<p>5.1" Quad HD Super AMOLED display with Snapdragon 820 / Exynos 8890 processor, 4GB RAM and Android 6.0 Marshmallow...</p>
							<p><span class="price cursive-font">PHP P17,000.00 - 30,000</span></p>
						</div>
					</a>
				</div>

				<div class="col-lg-4 col-md-4 col-sm-6">
					<a href="images/Infinix-Note-2.jpg" class="fh5co-card-item image-popup">
						<figure>
							<div class="overlay"><i class="ti-plus"></i></div>
							<img src="images/Infinix-Note-2.jpg" alt="Image" class="img-responsive">
						</figure>
						<div class="fh5co-text">
							<h2>Infinix-Note-2</h2>
							<p>The Infinix Note 2 has a 13 Megapixel camera at the back and 5.0 Megapixel front camera. ..</p>
							<p><span class="price cursive-font">₱HP6,290.00</span></p>
						</div>
					</a>
				</div>

			</div>
		</div>
	</div>
	</div>




	<div id="aboutpage">
	<div id="gtco-features">
		<div class="gtco-container">
			<div class="row">
				<div class="col-md-8 col-md-offset-2 text-center gtco-heading animate-box">
					<h2 class="cursive-font">Our Services</h2>
					<p>Online 24/7, Credit Card or Paypal Method(if you want buy gadget) But We also have Free Shipping</p>
				</div>
			</div>
			<div class="row">
				<div class="col-md-4 col-sm-6">
					<div class="feature-center animate-box" data-animate-effect="fadeIn">
						<span class="icon">
							<i class="ti-face-smile"></i>
						</span>
						<h3>Happy Customer</h3>
						<p>Our Staff is Being Happy for not hearing negative saying of our customer.</p>
					</div>
				</div>
				<div class="col-md-4 col-sm-6">
					<div class="feature-center animate-box" data-animate-effect="fadeIn">
						<span class="icon">
							<i class="ti-thought"></i>
						</span>
						<h3>Creative Selling</h3>
						<p>Not Selling Fake Phone.</p>
					</div>
				</div>
				<div class="col-md-4 col-sm-6">
					<div class="feature-center animate-box" data-animate-effect="fadeIn">
						<span class="icon">
							<i class="ti-truck"></i>
						</span>
						<h3>,Delivery</h3>
						<p>We Have A Shipping If you order Gadget.</p>
					</div>
				</div>
				

			</div>
		</div>
	</div>
	</div>




	<div id="contactpage">
	<div class="gtco-cover gtco-cover-sm" style="background-image: url(images/gadgetbackground.jpg)"  data-stellar-background-ratio="0.5">
		<div class="overlay"></div>
		<div class="gtco-container text-center">
			<div class="display-t">
				<div class="display-tc">
					<h1>&ldquo; You Don't Have To Be Great To Start But You Have To Start To Be Great!&rdquo;</h1>
					<p>&mdash; JadaDarkSide, CEO of Doofenshmirtz Inc.</p>
				</div>	
			</div>
		</div>
	</div>
	</div>

		<div class="gtco-section">
		<div class="gtco-container">
			<div class="row">
				<div class="col-md-12">
					<div class="col-md-6 animate-box">
					<h3>Get In Touch</h3>
					<form action="#">
						<div class="row form-group">
							<div class="col-md-12">
								<label class="sr-only" for="name">Name</label>
								<input type="text" id="name" class="form-control" placeholder="Your firstname">
							</div>
							
						</div>

						<div class="row form-group">
							<div class="col-md-12">
								<label class="sr-only" for="email">Email</label>
								<input type="text" id="email" class="form-control" placeholder="Your email address">
							</div>
						</div>
						<div class="row form-group">
							<div class="col-md-12">
								<label class="sr-only" for="message">Message</label>
								<textarea name="message" id="message" cols="30" rows="10" class="form-control" placeholder="Write us something"></textarea>
							</div>
						</div>
						<div class="form-group">
							<form method="post" action="mailto:jibz1432@gmail.com?subject=subject&message=message">
							<input type="submit" value="Send Email" /> 
						</div>

					</form>		
				</div>
				<div class="col-md-5 col-md-push-1 animate-box">
					
					<div class="gtco-contact-info">
						<h3>Contact Information</h3>
						<ul>
							<li class="address">Purok 3 Ilumina Estate Subd Communal Davao City, <br> Suite 721 New York NY 10016</li>
							<li class="phone"><a href=" "> 09331227931/09174779949</a></li>
							<li class="email"><a href="jibz1432@gmail.com">GadgetStop.com</a></li>
							<li class="url"><a href="">GadgetStop</a></li>
						</ul>
					</div>

<footer id="gtco-footer" role="contentinfo" style="background-image: url(images/gadgetbackground.jpg)" data-stellar-background-ratio="0.5">
		<div class="overlay"></div>
		<div class="gtco-container">
			<div class="row row-pb-md">

				

				
				<div class="col-md-12 text-center">
					<div class="gtco-widget">
						<h3>Get In Touch</h3>
						<ul class="gtco-quick-contact">
							<li><a href="#"><i class="icon-phone"></i> 09331227931/09174779949</a></li>
							<li><a href="#"><i class="icon-mail2"></i> jibz1432@gmail.com</a></li>
							<li><a href="#"><i class="icon-chat"></i> Live Chat</a></li>
						</ul>
					</div>
					<div class="gtco-widget">
						<h3>Get Social</h3>
						<ul class="gtco-social-icons">
							<li><a href="https://www.instagram.com/jada05atxhupz/"><i class="icon-Instagram"></i></a></li>
							<li><a href="https://www.facebook.com/SummerWhereDoWeBegin05"><i class="icon-facebook"></i></a></li>
							<li><a href="https://plus.google.com/u/0/113253070990440331406"><i class="icon-Gmail"></i></a></li>
							<li><a href="#"><i class="icon-dribbble"></i></a></li>
						</ul>
					</div>
				</div>

				<div class="col-md-12 text-center copyright">
					<p><small class="block">&copy; 2016 JadaDarkSide All Rights Reserved.</small> 
						<small class="block">Designed by <a href="http://gettemplates.co/" target="_blank">GadgetStop</a> Demo Images: <a href="http://unsplash.com/" target="_blank">Unsplash</a></small></p>
				</div>

			</div>

			

		</div>
	</footer>
	<!-- </div> -->

	</div>

	<div class="gototop js-top">
		<a href="#" class="js-gotop"><i class="icon-arrow-up"></i></a>
	</div>
			`;
			this.reRender(`${html}`,document.getElementById("app"));
		}

indexpage(){
	$('#indexpage').show();
	$('#aboutpage').hide();
	$('#contactpage').hide();
	$('#orderpage').hide();
}

aboutpage(){
	$('#indexpage').hide();
	$('#aboutpage').show();
	$('#contactpage').hide();
	$('#orderpage').hide();
}

contactpage(){
	$('#indexpage').hide();
	$('#aboutpage').hide();
	$('#contactpage').show();
	$('#orderpage').hide();
}

orderpage(){
	$('#indexpage').hide();
	$('#aboutpage').hide();
	$('#contactpage').hide();
	$('#orderpage').show();
}

}

let component = new Component();
component.landingPage();





