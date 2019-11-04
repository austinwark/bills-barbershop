import Head from 'next/head';

import Testimonials from '../components/Testimonials';


import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';
import Jumbotron from 'react-bootstrap/Jumbotron';


function Index() {

    function myMap() {

        let centerMark = {lat: 42.642997, lng: -73.608440};

        let map = new google.maps.Map(

            document.getElementById('google-map'), {zoom: 15, center: centerMark}

            );

        let market = new google.maps.Marker({position: centerMark, map: map});

    }
    
    return (
        <>
        <Head>
            <title>Bill's Barber Shop</title>
            <meta
                name="viewport"
                content="initial-scale=1.0, width=device-width"
            />
            <meta charset='utf-8'></meta>
            <link rel="stylesheet" type="text/css" href="/bootstrap.css" />
            <link rel="stylesheet" type="text/css" href="/styles.css" />

            <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyADSna2_hZJLFY9Zxy5_40Gqcg8u-yF_wY&callback=myMap"></script>
    	    
        </Head>
        <div>
			<div id='header-main' className='jumbotron jumbotron-fluid my-0'>
				<div id='header-text' className='container text-center text-light mt-5'>
					<h1 className='display-3 text-info'><strong>Bill's Barber Shop</strong></h1>
					<hr className=''></hr>
					<h2 className='text-secondary mt-2'>Est. 1996</h2>
				</div>
			</div>
			<Navbar bg='dark' variant='dark' expand='md' className='p-0' id='banner'>
				<Navbar.Toggle aria-controls='basic-navbar-nav'/>
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav id='banner1' className='mr-auto' fill>
							<Nav.Link href='#header-main' className='font-weight-bold bg-primary header-link px-2'>Bill's Barber Shop</Nav.Link>
							<Nav.Link href='#about' className='font-weight-bold header-link px-2'>About</Nav.Link>
							<Nav.Link href='#gallery' className='font-weight-bold header-link px-2'>Gallery</Nav.Link>
							<Nav.Link href='#testimonials' className='font-weight-bold header-link px-2'>Testimonials</Nav.Link>
							<Nav.Link href='#contact' className='font-weight-bold header-link px-2'>Contact</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</div>
            <div id='about'>
				<div className='container mt-5'>
					<div className='row'>
						<div className='col-12 col-md-4 col-xl-6 ml-auto'>
							<h3 className='mb-4'>Payments</h3>
							<ListGroup variant='flush' className='lead'>
								<ListGroup.Item className='text-success pl-2'>
									<p>&#10004;&nbsp;Cash</p>
								</ListGroup.Item>
								<ListGroup.Item className='text-success pl-2'>
									<p>&#10004;&nbsp;Venmo</p>
								</ListGroup.Item>
								<ListGroup.Item className='text-danger pl-2'>
									<p>&#10008; &nbsp;&nbsp;Card</p>
								</ListGroup.Item>
							</ListGroup>
						</div>
						<div className='col-12 col-md-6 mr-auto mt-5 mt-md-0'>
							<h3 className='mb-4'>Hours</h3>
							<ListGroup variant='flush' className='text-primary lead'>
								<ListGroup.Item className=''>
									<p>Monday<span className='float-right'>CLOSED</span></p>
								</ListGroup.Item>
								<ListGroup.Item className=''>
									<p>Tuesday<span className='float-right'>8:00am - 6:00pm</span></p>
								</ListGroup.Item>
								<ListGroup.Item className=''>
									<p>Wednesday<span className='float-right'>8:00am - 6:00pm</span></p>
								</ListGroup.Item>
								<ListGroup.Item className=''>
									<p>Thursday<span className='float-right'>8:00am - 6:00pm</span></p>
								</ListGroup.Item>
								<ListGroup.Item className=''>
									<p>Friday<span className='float-right'>8:00am - 6:00pm</span></p>
								</ListGroup.Item>
								<ListGroup.Item className=''>
									<p>Saturday<span className='float-right'>8:00am - 12:00pm</span></p>
								</ListGroup.Item>
								<ListGroup.Item className=''>
									<p>Sunday<span className='float-right'>CLOSED</span></p>
								</ListGroup.Item>
							</ListGroup>
						</div>
					</div>
				</div>
				<hr className='w-75'></hr>
				<div className='container mt-5'>
					<div className='row'>
						<div className='col-12 col-md-10 mx-auto linear-gradient'>
							<h1 className='text-center text-primary mt-5 mb-3'>Since 1996</h1>
							<p className='text-center text-secondary about-shop-p lead mb-5'>Bill's Barber Shop is a classic, American, no-holds-barred barbershop. A variety of services is 
							offered, catering to everyone, with solely the clientele in mind. The Shop stays true to the ways of the classic gentleman's shop, 
							striving to bring the memories back. People still pay for quality - Bill's Barber Shop is where you will get it. I am a barber who 
							loves my craft, providing top-notch service that helps men stay sharp.</p>
						</div>
					</div>
				</div>
				<div className='container my-5'>
					<div className='row'>
						<div className='col-12 col-md-10 mx-md-auto col-lg-5 col-xl-5 ml-lg-auto mr-lg-0 mb-5'>
							<Image src='https://i.postimg.cc/d0MQhBTL/insta-photo-1.jpg' thumbnail className='mx-auto shadow-lg' />
						</div>
						<div className='col-12 col-md-10 mx-md-auto col-lg-5 mr-lg-auto ml-lg-0'>
							<ListGroup variant='flush' className='mx-auto text-primary'>
								<ListGroup.Item className=''>
									<h2>Bill The Barber</h2>
								</ListGroup.Item>
								<ListGroup.Item>
									<p className='btb-card-p lead'>Bill Rudolph is a father, a husband, a veteran, and an esteemed local business owner. After cutting hair for over 30
									years, Bill has secured a steady clientele who appreciate his experience and itegrity. Whether you are looking for the newest 
									and sharpest style, or want to remain true to the classic cuts, Bill is your local go-to barber.</p>
								</ListGroup.Item>
							</ListGroup>
						</div>
					</div>
				</div>
			</div>
            <Testimonials />
            <Jumbotron fluid className='container-fluid bg-dark m-0 p-3 pb-5' id='contact'>
					<h1 className='display-4 text-center my-0 text-primary'>Contact</h1>
					<div className='row mt-3'>
						<div className='col-11 col-md-4 mx-auto ml-md-auto mr-5 shadow-lg' id='map-div'>
							<div id='google-map'>
							</div>
						</div>
						<div className='col-11 col-md-5 mx-auto mt-4 mt-md-0 ml-md-5 mr-md-auto'>
							<div className='row mt-2 text-light'>
								<div className='col-6 contact-address'>
									<h6>Address</h6>
									<address>
										4337 NY-150,<br></br>West Sand Lake, NY 12196
									</address>
								</div>
								<div className='col-6 contact-phone'>
									<h6>Phone (text prefered)</h6>
									<address><a href='sms:+15185909013'>(518) 590-9013</a></address>
								</div>
							</div>
							<hr className='my-1'></hr>
							<div className='row mt-2'>
								<div className='col-12 text-left text-left text-light' id='footer-info'>
									<ol className=' float-left ml-0 pl-3'>
										<li>At the corner of Route 43 & Route 150, across from Doors of Hope</li>
										<li>Parking located in front of shop, as well as across the street</li>
										<li>Walk-ins welcomed and encouraged!</li>
										<li>Cash & the Venmo App accepted, no card</li>
									</ol>
								</div>
							</div>
							<div className='row mt-2'>
								<div className='col-12'>
									<div className='d-flex footer-links'>
										<a href='https://www.facebook.com/pages/Bills-Barber-Shop/152627261418715' target='_blank'><img src='https://i.postimg.cc/s2KKgG7B/facebook-logo.png' /></a>
										<a href='https://www.instagram.com/bills_american_barbershop/' target='_blank'><img src='https://i.postimg.cc/1ttBnRrv/insta-logo.png' id='desktop-insta' /></a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</Jumbotron>
        </>
    )
}
export default Index;