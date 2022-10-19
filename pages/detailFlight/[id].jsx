import React, { useEffect, useState } from 'react'
import styles from './detailFlight.module.css'
// import Banner from '../../assets/img/detailFlight/banner-lg.svg'
import Image from 'next/image';
// import LogoGaruda from '../../assets/img/search/Logo-garuda.svg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { findIconDefinition } from '@fortawesome/fontawesome-svg-core';
import plane from '../../assets/img/booking/plant.svg'
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import axios from 'axios';
import moment from 'moment/moment';
const warning = findIconDefinition({ prefix: 'fas', iconName: "triangle-exclamation"})
const check = findIconDefinition({ prefix: 'fas', iconName: 'circle-check'})


function DetailFlight() {
    const router = useRouter()
    const id = router.query.id
    const token = Cookies.get('token')
    const [dataFlight, setDataFlight] = useState([])
    console.log(dataFlight)
    const fetch = async() =>{
        const result = await axios.get(`${process.env.API_BACKEND}flight/${id}`)
        setDataFlight(result.data.data[0])
    }
    const fetchProfile = async() =>{
        const result = await axios.get(`${process.env.API_BACKEND}users/profile/${token}`)
        console.log(result)
    }
    useEffect(() =>{
        fetchProfile()
        fetch()
    }, [])
    
  return (
    <div className={styles.body}>
    <div className={styles.container}>
        {/* <Navi /> */}
        <div className={styles.bannerWrapper}>
            <div className='row ms-5'>
              <div className='col-7 mt-5'>
                <p className={`${styles.contactText}`}>Contact Person Detail</p>
              </div>
              <div className='col-2 ms-5 mt-5 d-flex justify-content-end'>
                <p className={`${styles.contactText}`}>Flight Detail</p>
              </div>
              <div className='col-2 mt-5 d-flex justify-content-end'>
                <i className={`${styles.contactView}`}>View Detail</i>
              </div>
            </div>
        </div>

        <div className={`row w-100 d-flex justify-content-between ${styles.from_name}`}>
          <div className="col-6 ms-5">
            <form>
              <div className={styles.contactBox}>
                <p className={styles.textFullname}>Full Name</p>
                <input
                  type="text"
                  value={'Nhana'}
                  className={`form-control bg-transparent`}
                  placeholder="Insert Full Name"
                  disabled
                />
                <div className={`${styles.line} mb-2`}></div>
                <p className={styles.emailText}>Email</p>
                  <input
                    type="email"
                    value="Nhana@gamil.com"
                    className={`form-control bg-transparent`}
                    placeholder="Insert Your Email"
                    // disabled
                  ></input>
                <div className={`${styles.line} mb-2`}></div>
                  <p className={styles.phoneText}>Phone Number</p>

                  <div className="row">
                    <div className="col-1">
                      <select className={`${styles.sBtn} d-flex mt-2`} name="phone" id="phoneNumber">
                        <option value="+62">+62</option>
                        <option value="+1">+1</option>
                        <option value="+2">+2</option>
                        <option value="+3">+3</option>
                        <option value="+4">+4</option>
                        <option value="+5">+5</option>
                      </select>
                    </div>
                    <div className="col-11 ">
                      <input
                        type="number"
                        value={
                          "silahkan update profil anda"
                        }
                        className={`form-control bg-transparent`}
                        placeholder="Insert Your Phone Number"
                        // disabled
                      />
                    </div>
                  </div>
                <div className={`${styles.line} mt-2`}></div>
                <div className={styles.warning}>
                  <div className={`d-flex justify-content-start `}>
                    <span className={`text-warning ms-4 mt-3`}><FontAwesomeIcon icon={warning} /></span>
                    <p className={`mt-3 ms-3`}>
                      Make sure the customer data is correct.
                    </p>
                  </div>
                  
                </div>
              </div>
            </form>
            <form action="">
            <div className={styles.passengerWrapper}>
              <p className={styles.passengerText}>Passenger Details</p>
              <div className={styles.passengerBox}>
                <div className={styles.confirm}>
                  <p className={styles.textConfirm}>Passenger: 1 Adult</p>
                  <p className={styles.textConfirm2}>Same as contact person</p>
                  <input type="checkbox"  />
                </div>
                {/* {add ? ( */}
                  <>
                    <p className={styles.titleText}>
                      Title
                    </p>
                    <select
                      className={styles.sBtn2}
                      value="Judul"
                      name="title"
                      id="title"
                      required
                    >
                      <option value="Mr.">Mr.</option>
                      <option value="Mrs.">Mrs.</option>
                    </select>
                    <div className={styles.line3}></div>
                    <p className={styles.passengerName}>Full Name</p>
                    <input
                      name="fullname"
                      type="text"
                      value="Nhana"
                      className={styles.input4}
                      placeholder="Insert Your Name"
                      required
                    />
                    <p className={styles.nationalityText}>Nationality</p>
                    <select
                      className={styles.sBtn3}
                      name="nationality"
                      id="ntionality"
                      value="Nationality"
                      required
                    >
                      <option value="Indonesia">Indonesia</option>
                      <option value="Norwey">Norwey</option>
                      <option value="Iceland">Iceland</option>
                      <option value="Switzerland">Switzerland</option>
                      <option value="Sweden">Sweden</option>
                      <option value="Finland">Finland</option>
                    </select>
                    <div className={styles.line4}></div>
                    <p className={styles.passengerSeat}>Seat</p>
                    <input
                      type="number"
                      name="totalorder"
                      // value="total Order"
                      className={styles.input5}
                      placeholder="Insert How many seat"
                      required
                    />
                  </>
                {/* ) : null} */}
              </div>
              <p className={styles.passengerText2}>Passenger Details</p>
              <div className={styles.passengerBox2}>
                <input type="checkbox"  />
                <p className={styles.textInsurance}>Travel Insurance</p>
                <p className={styles.textPrice}>
                  $ 200<span>/pax</span>
                </p>
                <div className={styles.line5}></div>
                <p className={styles.textCompensation}>
                  Get travel compensation $ 10.000,00
                </p>
              </div>
              <button
                className={styles.paymentBtn}
                type="submit"
                title=""
              >Proceed to Payment</button>
            </div>
          </form>
          </div>
          <div className="col-4 ">
            <div className={`${styles.fDetailBox} d-flex row`}>
              <div className={`d-flex`}>
                <div className='mt-4'>
                    <Image
                    src={dataFlight.airlines_logo
                    }
                    width={100} height={50}
                    alt="logo"
                    />
                </div>
                <p className={`mt-5 ms-3`}>{dataFlight.airlines_name}</p>
              </div>
              <div className={`row`}>
                  <div className={`col-4 ms-3`}>
                    <p className={``}>{`${dataFlight.airport_arrive_country_code} (${dataFlight.airport_arrive_name})`}</p>
                    <p className={`mt-3`}>
                      {moment(dataFlight.arrive).format("ll")}
                    </p>  
                  </div>
                  <div className={`col-6`}>
                    <div className='d-flex'>
                      <span className='me-5'><Image src={plane}/></span>
                      <p className={``}>{`${dataFlight.airport_depature_country_code} (${dataFlight.airport_depature_name})`}</p>
                    </div>
                    <div className='d-flex'>
                      <div className={`${styles.ellipse} mt-2 `} />
                      <p className={`mx-4 `}>
                        {moment(dataFlight.depature).format("ll")}
                      </p>
                    </div>
                  </div>
              </div>

                <div className=''>
                  {dataFlight?.refundable === 'true' ? (
                        <p className={`${styles.icon_color}`}>
                        <span className={`me-2`}><FontAwesomeIcon icon={check}/></span>
                        Refundable</p>
                    ): ''
                  }
                  {dataFlight?.reschedule === 'true' ? (
                    <p className={styles.icon_color}>
                    <span className={`me-2`}><FontAwesomeIcon icon={check}/></span>
                    Can reschedule</p>
                  ): ''

                  }
                  
                </div>
                <div className={`${styles.line2} ms-3`}></div>
              <div className={`d-flex justify-content-between`}>
                <p className={`ms-4 mt-1 ${styles.text_prices}`}>Total Payment</p>
                <p className={`me-5 ${styles.prices}`}>$ {dataFlight.price}</p>
              </div>
            </div>

          </div>
        </div>
        
      </div>
    </div>
  )
}

export default DetailFlight;