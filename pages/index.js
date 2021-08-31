import Head from 'next/head';

import Testimonials from '../components/Testimonials';

import React from 'react';


import Carousel from 'react-bootstrap/Carousel'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';
import Jumbotron from 'react-bootstrap/Jumbotron';

import GoogleApiWrapper from '../components/MapContainer';

class Index extends React.Component {

    constructor(props, context) {
		super(props, context);

		this.handleSelect = this.handleSelect.bind(this);

		this.state = {
			index: 0,
			direction: null
		};
	}

	handleSelect(selectedIndex, e) {
		this.setState({
			index: selectedIndex,
			direction: e.direction
		});
	}

    buttonStyles = {
        backgroundColor: "#1F9BCF",
        marginBottom: "1rem",
        height: "30px",
        width: "30px",
        borderRadius: "40px"
    }

    render() {

        const { index, direction } = this.state;
    
        return (
            <>
            <Head>
                <title>Bill's Barber Shop</title>
                <meta
                    name="description"
                    content="Bill's Barber Shop - Located at 4337 NY-150, West Sand Lake, Ny 12196. The best haircuts around!"
                />
                <meta
                    name="keywords"
                    content="Barber, Hair, Shave, Men, Women, Unisex, West, Sand, Lake"
                />
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
                <meta charset='utf-8'></meta>
                <link rel="stylesheet" type="text/css" href="/bootstrap.css" />
                <link rel="stylesheet" type="text/css" href="/styles.css" />
                <link href="/favicon.ico" rel="icon" type="image/x-icon" />
                <link href="https://fonts.googleapis.com/css?family=Karla|Rubik:400,500&display=swap" rel="stylesheet"></link>
            </Head>
            <div>
                <div id='header-main' className='jumbotron jumbotron-fluid my-0 cms-editable'>
                    <div id='header-text' className='container text-center text-light mt-5'>
                        <h1 className='display-3 text-info'><strong>Bill's Barber Shop</strong></h1>
                        <hr className=''></hr>
                        <h2 className='text-secondary mt-2'>Est. 1996</h2>
                    </div>
                </div>
                <Navbar bg='dark' variant='dark' expand='md' className='p-0' id='banner'>
                    <Navbar.Brand>
                        <Nav.Link href='/' className='font-weight-bold header-link py-0 pr-2 pl-0'>
                        <img src='shop-icon.png' width="40" className='mx-2' />
                        <span style={{position: "relative", top: "2px"}} className='font-weight-bold'>Bill's Barber Shop</span>
                        </Nav.Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls='basic-navbar-nav'/>
                        <Navbar.Collapse id='basic-navbar-nav'>
                            <Nav id='banner1' className='mr-auto' fill>
                                <Nav.Link href='#about' className='font-weight-bold header-link px-2'>About</Nav.Link>
                                <Nav.Link href='#testimonials' className='font-weight-bold header-link px-2'>Testimonials</Nav.Link>
                                <Nav.Link href='#contact' className='font-weight-bold header-link px-2'>Contact</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
                <div id='about'>
                    <div className='container mt-5'>
                        <div className='row'>
                            <div id='payments-list' className='col-12 col-md-4 col-xl-5 ml-auto cms-editable'>
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
                            <div id='hours-list' className='col-12 col-md-5 mr-auto mt-5 mt-md-0 cms-editable'>
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
                    <div id='about-the-shop' className='container mt-5 cms-editable'>
                        <div className='row'>
                            <div className='col-12 mx-auto '>
                                <h1 className='text-center text-primary mt-5 mb-3'>Since 1996</h1>
                                <p className='text-center about-shop-p lead mb-5'>Bill's Barber Shop is a classic, American, no-holds-barred barbershop. A variety of services is 
                                offered, catering to everyone, with solely the clientele in mind. The Shop stays true to the ways of the classic gentleman's shop, 
                                striving to bring the memories back. People still pay for quality - Bill's Barber Shop is where you will get it. I am a barber who 
                                loves my craft, providing top-notch service that helps men stay sharp.</p>
                            </div>
                        </div>
                    </div>
                    <div id='about-the-owner' className='container my-5 cms-editable'>
                        <div className='row'>
                            <div className='col-12 col-md-10 mx-md-auto col-lg-5 ml-lg-auto mr-lg-0 mb-5'>
                                <Image src='https://i.postimg.cc/d0MQhBTL/insta-photo-1.jpg' thumbnail className='mx-auto shadow' />
                            </div>
                            <div className='col-12 col-md-10 mx-md-auto col-lg-5 mr-lg-auto ml-lg-0'>
                                <ListGroup variant='flush' className='mx-auto text-primary'>
                                    <ListGroup.Item className=''>
                                        <h2>Bill The Barber</h2>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <p className='btb-card-p lead'>Bill Rudolph is a father, a husband, a veteran, and an esteemed local business owner. After cutting hair for over 30
                                        years, Bill has secured a steady clientele who appreciate his experience and integrity. Whether you are looking for the newest 
                                        and sharpest style, or want to remain true to the classic cuts, Bill is your local go-to barber.</p>
                                    </ListGroup.Item>
                                </ListGroup>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-12 col-md-8 mx-auto mt-5 cms-editable' id='testimonials'>
                <Jumbotron className='shadow'>
                    <Carousel activeIndex={index} direction={direction} onSelect={this.handleSelect} className='my-auto bg-dark my-0'>
                        <Carousel.Item className='h-100 w-100'>
                            <div className='d-block w-100 h-100 bg-light text-dark testimonial-slide shadow'>
                                <h1 className='m-2 mt-2 pb-2 border-bottom border-primary'>Testimonial</h1>
                                <blockquote className='blockquote'>
                                    <p className='px-0'>“Best local barbershop. Its always busy on the weekends, but I always get a clean and sharp haircut. 
                                    If you visit during the week, there's typically no wait. This place is a one man show, and Bill always does a damn 
                                    good job”</p>
                                    <footer className='blockquote-footer'>Timothy Guarino</footer>
                                    <span className='test-stars'>&#x2605;&#x2605;&#x2605;&#x2605;&#x2605;</span>
                                </blockquote>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item className='h-100 w-100'>
                            <div className='d-block w-100 h-100 bg-light text-dark testimonial-slide shadow'>
                                <h1 className='m-2 mt-2 pb-2 border-bottom border-primary'>Testimonial</h1>
                                <blockquote className='blockquote'>
                                    <p className='px-0'>“Great place, the man knows what he's doing.  I could never find a good place to get my hair cut since 
                                    I moved back to NY, problem solved!”</p>
                                    <footer className='blockquote-footer'>Joe Withkowski</footer>
                                    <span className='test-stars'>&#x2605;&#x2605;&#x2605;&#x2605;&#x2605;</span>
                                </blockquote>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item className='h-100 w-100'>
                            <div className='d-block w-100 h-100 bg-light text-dark testimonial-slide shadow'>
                                <h1 className='m-2 mt-2 pb-2 border-bottom border-primary'>Testimonial</h1>
                                <blockquote className='blockquote'>
                                    <p className='px-0'>“If you've ever been offended don't come here. If your a man who wants a good hair cut at a real barbershop, this is the place.”</p>
                                    <footer className='blockquote-footer'>Joel Fennelly</footer>
                                    <span className='test-stars'>&#x2605;&#x2605;&#x2605;&#x2605;&#x2605;</span>
                                </blockquote>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item className='h-100 w-100'>
                            <div className='d-block w-100 h-100 bg-light text-dark testimonial-slide shadow'>
                                <h1 className='m-2 mt-2 pb-2 border-bottom border-primary'>Testimonial</h1>
                                <blockquote className='blockquote mt-0'>
                                    <p className='px-0'>“Bill is a great source of entertainment, and he cuts a good haircut”</p>
                                    <footer className='blockquote-footer'>Rich Maxon</footer>
                                    <span className='test-stars'>&#x2605;&#x2605;&#x2605;&#x2605;&#x2605;</span>
                                </blockquote>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item className='h-100 w-100'>
                            <div className='d-block w-100 h-100 bg-light text-dark testimonial-slide shadow'>
                                <h1 className='m-2 mt-2 pb-2 border-bottom border-primary'>Testimonial</h1>
                                <blockquote className='blockquote'>
                                    <p className='px-0'>“He cuts it just the way you tell him and he remembers each time you get in the chair.”</p>
                                    <footer className='blockquote-footer'>Frank Lukovits</footer>
                                    <span className='test-stars'>&#x2605;&#x2605;&#x2605;&#x2605;&#x2605;</span>
                                </blockquote>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item className='h-100 w-100'>
                            <div className='d-block w-100 h-100 bg-light text-dark testimonial-slide shadow'>
                                <h1 className='m-2 mt-2 pb-2 border-bottom border-primary'>Testimonial</h1>
                                <blockquote className='blockquote'>
                                    <p className='px-0'>“Definitely a guys barber shop. You better have thick skin. The haircut is great”</p>
                                    <footer className='blockquote-footer'>Sean Doran</footer>
                                    <span className='test-stars'>&#x2605;&#x2605;&#x2605;&#x2605;&#x2605;</span>
                                </blockquote>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item className='h-100 w-100'>
                            <div className='d-block w-100 h-100 bg-light text-dark testimonial-slide shadow'>
                                <h1 className='m-2 mt-2 pb-2 border-bottom border-primary'>Testimonial</h1>
                                <blockquote className='blockquote'>
                                    <p className='px-0'>“This is where men get their hair cut.”</p>
                                    <footer className='blockquote-footer'>Matthew Timber</footer>
                                    <span className='test-stars'>&#x2605;&#x2605;&#x2605;&#x2605;&#x2605;</span>
                                </blockquote>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </Jumbotron>
                </div>
                <Jumbotron fluid className='container-fluid bg-dark m-0 p-3 pb-5 cms-editable' id='contact'>
                        <h1 className='display-4 text-center my-0 text-primary'>Contact</h1>
                        <div className='row mt-3'>
                            <div className='col-11 col-md-4 mx-auto ml-md-auto mr-5' id='map-div'>
                                <div id='google-map'>
                                    <GoogleApiWrapper />
                                </div>
                            </div>
                            <div className='col-11 col-md-5 mx-auto mt-4 mt-md-0 ml-md-5 mr-md-auto'>
                                <div className='row mt-2 text-light'>
                                    <div className='col-6 contact-address'>
                                        <h6 className='text-info'>Address</h6>
                                        <address>
                                            4337 NY-150,<br></br>West Sand Lake, NY 12196
                                        </address>
                                    </div>
                                    <div className='col-6 contact-phone'>
                                        <h6 className='text-info'>Phone (text prefered)</h6>
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
                                        <div className='d-flex footer-links mw-100 justify-content-start'>
                                            <span className='text-info font-weight-bold' style={{fontSize: "1.2rem"}}>See us on social media!</span>
                                            <a href='https://www.facebook.com/pages/Bills-Barber-Shop/152627261418715' target='_blank'><img style={{marginRight: "10px", marginLeft: "10px"}} src='https://i.postimg.cc/s2KKgG7B/facebook-logo.png' /></a>
                                            <a href='https://www.instagram.com/bills_american_barbershop/' target='_blank'><img style={{marginRight: "10px", marginLeft: "10px"}} src='https://i.postimg.cc/1ttBnRrv/insta-logo.png' id='desktop-insta' /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Jumbotron>
            </>
        )
    }
}
export default Index;