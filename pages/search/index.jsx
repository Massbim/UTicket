import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import styles from './search.module.css';
import plane from '../../assets/img/search/logo-plant.svg'
import plant from '../../assets/img/booking/plant.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
// import GarudaLogo from '../../assets/img/search/Logo-garuda.svg'
// import AirAsia from '../../assets/img/search/Logo-AirAsia.svg'
// import LeonAir from '../../assets/img/search/Logo-LeonAir.svg';
import filter from '../../assets/img/search/Logo-filter.svg'
import { findIconDefinition } from '@fortawesome/fontawesome-svg-core';
// import { useDispatch, useSelector } from 'react-redux';
// import { AirlineAction } from '../../config/redux/actions/airlineAction';
// import { DestinationAction } from '../../config/redux/actions/destinationAction';
import axios from 'axios';

const arrow_switch = findIconDefinition({prefix: "fas", iconName: "arrow-right-arrow-left"})
const wifi = findIconDefinition({prefix: "fas", iconName: "wifi"})
const burger = findIconDefinition({prefix: "fas", iconName: "burger"})
const koper = findIconDefinition({prefix: "fas", iconName: "suitcase-rolling"})


function Search() {
  // const dispatch = useDispatch();
  // const datas = useSelector((state) => state.airlines);
  // const [search, setSearch] = useState('')
  const [dataFrom, setDataFrom] = useState([])
  const [dataTo, setDataTo] = useState([])
  // const [dataCity, setDataCity] = useState([])
  // const [dataCityTo, setDataCityTo] = useState([])
  const [dataTiket, setDataTiket] = useState([])
  const [idFrom, setIdFrom] = useState('')
  const [idTo, setIdTo] = useState('')
  console.log(dataTiket)
  // console.log(idFrom)
  // console.log(idTo)
  // console.log(dataFrom)
  // console.log(dataCity[0].id)
  // console.log(dataCityTo[0].id)
  // data.map(iterm =>{
  //   console.log(iterm.city)
  // })
  // dataTiket.map(item =>{
  //   console.log(item)
  // })
  const fetch = async() =>{
    // if(dataCity[0] && dataCityTo[0]){
    //   setIdFrom(dataCity[0].id)
    //   setIdTo(dataCityTo[0].id)
    // }else{
    //   return;
    // }
    const url = await axios.get(`${process.env.API_BACKEND}flight?search_option_1=${idFrom}&searchby_option_1=airport_depature&search_option_2=${idTo}&searchby_option_2=airport_arrive`)
      // console.log(url.data.data)
      const result = url.data.data
      setDataTiket(result)
    }
    const fetchCountryFrom = async(e) =>{
      const url = await axios.get(`${process.env.API_BACKEND}airport?search=${e}&searchby=country&sortby=city&sort=asc&limit=1000`)
        // console.log(url.data.data)
        const result = url.data.data
        console.log(result)
        
          setDataFrom(result)
          // setDataCity(result)
        
      }
      const fetchCountryTo = async(e) =>{
        const url = await axios.get(`${process.env.API_BACKEND}airport?search=${e}&searchby=country&sortby=city&sort=asc&limit=1000`)
          // console.log(url.data.data)
          const result = url.data.data
          console.log(result)
              setDataTo(result)
              // setDataCityTo(result)
        }
    const handleSearch = () =>{
      fetch()
    }
    useEffect(() =>{
      handleSearch ()
  }, [])

  return (
    <div>
        <div className={styles.flight}>
            <div>
                <div>
                <Image src={plane} alt="" />
                </div>

                <div className={styles.detail}>
                  <div className="row w-100 ">
                    <div className='col'>
                        <span className='fs-6'>From</span>
                    </div>
                    <div className='col text-end'>
                      <span  className='fs-6'>To</span>
                    </div>
                  </div>

                <div className='fs-5 w-100 '>
                  <div className="column w-100">
                      <div>
                      <input
                      // name="origin"
                      type="text"
                      className={`${styles.origin} `}
                      // value={title.city}
                      placeholder="country"
                      onChange={(e) =>{
                        fetchCountryFrom(e.target.value)
                        
                      }}
                      />
  
                      </div>
                    <div className='d-grid'>
                    <select
                    className={` w-100`}
                    placeholder= 'city'
                    onChange={(e) => {
                      // setTitle({...title, city: e.target.value})
                      setIdFrom(e.target.value)
                      fetch()
                    }}
                    >
                    {
                      dataFrom?.map((item, index) =>(
                      <option value={item.id} 
                      key={index} 
                        >{item.city}{` (${item.name})`}</option>
                        ))
                      }
                      </select>
                    </div>

                  </div>
                    <FontAwesomeIcon icon={arrow_switch} />
                    <div className="column ms-3">
                      <div>
                      <input
                      type="text"
                      className={`${styles.origin} `}
                      placeholder="country"
                      onChange={(e) =>{
                        fetchCountryTo(e.target.value)
                      }}
                      />
  
                      </div>
                    <div>
                    <select
                    className={`styles.qty w-100`}
                    onChange={(e) => {
                      setIdTo(e.target.value)
                      fetch()
                    }}
                    >
                    {
                      dataTo?.map((item, index) =>(
                      <option value={item.id}
                      key={index}
                        >{item.city} {` (${item.name})`}</option>
                        ))
                      }
                      </select>
                    </div>

                  </div>
                </div>

                <div className='fs-6'>
                    <input
                    type="date"
                    name="departure"
                    placeholder="dd-mm-yyyy"
                    min="1997-01-01"
                    max="2030-12-31"
                    className={styles.date}
                    />
                    <span> • </span>
                    <select
                    name="ticket"
                    id="ticket"
                    className={styles.qty}
                    >
                    <option value="1">1 Passenger</option>
                    <option value="2">2 Passengers</option>
                    <option value="3">3 Passengers</option>
                    <option value="4">4 Passengers</option>
                    </select>
                    <span> • </span>
                    <select
                    name="class"
                    id="class"
                    className={styles.class}
                    >
                    <option value="Economy">Economy</option>
                    <option value="Business">Business</option>
                    <option value="First Class">First Class</option>
                    </select>
                </div>
                </div>
            </div>

            <button
                type="button"
                className={`${styles["change-search"]}`}
                onClick={handleSearch}
            >Change Search</button>
        </div>
        <div className={styles["search-result"]}>
          <div className={styles["filter-wrap"]}>
            <div className={styles.subtitle}>
              <p>Filter</p>
              <button
                type="button"
                className={styles["reset-filter"]}
              >Reset</button>
            </div>

            <div className={styles.filters}>
              <p>Transit</p>
              <div className={styles.options}>
                <div>
                  <label>Direct</label>
                  <input
                    className="checkbox"
                    id="transit"
                    type="checkbox"
                  />
                </div>
                <div>
                  <label>Transit</label>
                  <input
                    className="checkbox"
                    type="checkbox"
                  />
                </div>
                <div>
                  <label>Transit 2+</label>
                  <input
                    className="checkbox"
                    type="checkbox"
                  />
                </div>
              </div>

              <div className={styles.hl} />

              <p>Facilities</p>
              <div className={styles.options}>
                <div>
                  <label>Luggage</label>
                  <input
                    className="checkbox"
                    type="checkbox"
                  />
                </div>
                <div>
                  <label>In-Flight Meal</label>
                  <input
                    className="checkbox"
                    type="checkbox"
                  />
                </div>
                <div>
                  <label>Wi-Fi</label>
                  <input
                    className="checkbox"
                    type="checkbox"
                  />
                </div>
              </div>

              <div className={styles.hl} />

              <p>Departure Time</p>
              <div className={styles.options}>
                <div>
                  <label>00:00 - 06:00</label>
                  <input
                    className="checkbox"
                    type="checkbox"
                  />
                </div>
                <div>
                  <label>06:00 - 12:00</label>
                  <input
                    className="checkbox"
                    type="checkbox"
                  />
                </div>
                <div>
                  <label>12:00 - 18:00</label>
                  <input
                    className="checkbox"
                    type="checkbox"
                  />
                </div>
                <div>
                  <label>18:00 - 24:00</label>
                  <input
                    className="checkbox"
                    type="checkbox"
                  />
                </div>
              </div>

              <div className={styles.hl} />

              <p>Arrival Time</p>
              <div className={styles.options}>
                <div>
                  <label>00:00 - 06:00</label>
                  <input
                    className="checkbox"
                    type="checkbox"
                  />
                </div>
                <div>
                  <label>06:00 - 12:00</label>
                  <input
                    className="checkbox"
                    type="checkbox"
                  />
                </div>
                <div>
                  <label>12:00 - 18:00</label>
                  <input
                    className="checkbox"
                    type="checkbox"
                  />
                </div>
                <div>
                  <label>18:00 - 24:00</label>
                  <input
                    className="checkbox"
                    type="checkbox"
                  />
                </div>
              </div>

              <div className={styles.hl} />
              <p>Airline</p>
              <div className={styles.options}>
                <div>
                  <label>Garuda Indonesia</label>
                  <input
                    className="checkbox"
                    type="checkbox"
                  />
                </div>
                <div>
                  <label>America</label>
                  <input
                    className="checkbox"
                    type="checkbox"
                  />
                </div>
                <div>
                  <label>Batik Air</label>
                  <input
                    className="checkbox"
                    type="checkbox"
                  />
                </div>
              </div>

              <div className={styles.hl} />
              <p>Price Range</p>
              <div className={styles.options}>
                <div className={styles.pricing}>
                  <label>Min. price</label>
                  <input
                    value="$ 2.00"
                    type="number"
                    step="10000"
                    min="0"
                  />
                </div>
                <div className={styles.pricing}>
                  <label>Max. price</label>
                  <input
                    // value='$ 2.00'
                    type="range"
                    step="10000"
                  />
                  {/* <div>
                  <span id="rangeValue">0</span>
                  <input  type="range" name="0" min="0" max="1000"  
                  onClick={setValue((e) => {return e.target.value})} onmousemove={setValue((e) => e.target.value)}>0</input>
              </div> */}
                </div>
              </div>
            </div>
          </div>
          <div className={styles["ticket-wrap"]}>
            <div className={styles.subtitle}>
              <p>
                Select Ticket<span></span>
              </p>
              <div style={{ display: "flex", alignItems: "center" }}>
                {/* <Dropdown
                  setSortBy={setSortBy}
                  setQuery={setQuery}
                  setParams={setParams}
                  params={params}
                /> */}
                <button className={styles.sort}>
                  <span className='mb-4 fs-5'>sort</span>
                  <div className='ms-2 mt-2'><Image src={filter}/></div>
                </button>
              </div>
            </div>

            <div>
              {
                dataTiket?.map((item, index) =>
                
                (
                <div className={styles.ticket} key={index}>
                    <div className={styles.airline}>
                        <div style={{ width: "100px" }}>
                        <Image width={100} height={50} src={item.airlines_logo} alt="" />
                        </div>
                        <span>{item.airlines_name}</span>
                    </div>

                    <div className={styles["flight-info"]}>
                        <div className={styles.schedule}>
                        <div >
                            <p className='text-center'>{`${item.airport_depature_country_code}`}
                            </p>
                            <small className='fs-6'>{`(${item.airport_arrive_name})`}</small>
                            <br />
                            {/* <span>{item.depature}</span> */}
                        </div>

                        <div>
                            <Image src={plant}/>
                        </div>

                        <div>
                            <p className='text-center'>{item.airport_arrive_country_code}</p>
                            <small className='fs-6'>{`(${item.airport_depature_name})`}</small>
                            <br />
                            {/* <span>{item.arrive}</span> */}
                        </div>
                        </div>

                        <div className={`${styles.duration} text-center`}>
                        <p>{item.status}</p>
                        <span>{item.status_transit}</span>
                        </div>

                        <div className={styles.facilities}>
                          <div>
                            { item.lungage === 'true'? (
                              <FontAwesomeIcon icon={koper} />
                            ): ""

                            }
                          </div>
                          <div>
                            {
                              item.meal === 'true' ? (
                                <FontAwesomeIcon icon={burger}/>
                              ) : ''
                            }
                              
                          </div>
                          <div>
                            {
                              item.wifi === 'true' ? (
                                <FontAwesomeIcon icon={wifi} />
                              ): ''
                            }
                              
                          </div>
                        </div>

                        <div className={styles.pricetag}>
                        <p>{`Rp 2.000.000`}</p>
                        <span>/pax</span>
                        </div>
                        <Link href={`detailFlight/${item.id}`}>
                          <button className={styles.select}>
                              Select
                          </button>
                        
                        </Link>
                    </div>
                </div>

                ))

              }
                {/* <div className={styles.ticket}>
                    <div className={styles.airline}>
                        <div style={{ width: "100px" }}>
                        <Image style={{ width: "100%" }} src={AirAsia} alt="" />
                        </div>
                        <span>Airasia</span>
                    </div>

                    <div className={styles["flight-info"]}>
                        <div className={styles.schedule}>
                        <div>
                            <p>IND</p>
                            <span>9.00</span>
                        </div>

                        <div>
                            <Image src={plant}/>
                        </div>

                        <div>
                            <p>JPN</p>
                            <span>2.00</span>
                        </div>
                        </div>

                        <div className={styles.duration}>
                        <p>3 hours 11 minutes</p>
                        <span>direct</span>
                        </div>

                        <div className={styles.facilities}>
                          <div>
                              <FontAwesomeIcon icon={koper} />
                          </div>
                          <div>
                              <FontAwesomeIcon icon={burger}/>
                          </div>
                          <div>
                              <FontAwesomeIcon icon={wifi} />
                          </div>
                        </div>

                        <div className={styles.pricetag}>
                        <p>{`Rp 2.000.000`}</p>
                        <span>/pax</span>
                        </div>
                        <button className={styles.select}>
                            Select
                        </button>
                    </div>
                </div>
                <div className={styles.ticket}>
                    <div className={styles.airline}>
                        <div style={{ width: "100px" }}>
                        <Image style={{ width: "100%" }} src={LeonAir} alt="" />
                        </div>
                        <span>Leonair</span>
                    </div>

                    <div className={styles["flight-info"]}>
                        <div className={styles.schedule}>
                        <div>
                            <p>IND</p>
                            <span>9.00</span>
                        </div>

                        <div>
                            <Image src={plant}/>
                        </div>

                        <div>
                            <p>JPN</p>
                            <span>2.00</span>
                        </div>
                        </div>

                        <div className={styles.duration}>
                        <p>3 hours 11 minutes</p>
                        <span>direct</span>
                        </div>

                        <div className={styles.facilities}>
                          <div>
                              <FontAwesomeIcon icon={koper} />
                          </div>
                          <div>
                              <FontAwesomeIcon icon={burger}/>
                          </div>
                          <div>
                              <FontAwesomeIcon icon={wifi} />
                          </div>
                        </div>

                        <div className={styles.pricetag}>
                        <p>{`Rp 2.000.000`}</p>
                        <span>/pax</span>
                        </div>
                        <button className={styles.select}>
                            Select
                        </button>
                    </div>
                </div> */}
            </div>
            <div>
              {/* <nav className="mt-4">
                <ul className="pagination">
                  <li
                    className={`page-item`}
                  >
                    <button
                      className="page-link"
                      type="button"
                    >
                      Previous
                    </button>
                  </li>
                  <li
                    className={`page-item `}
                  >
                    <button
                      className="page-link"
                      type="button"
                    >
                      Next
                    </button>
                  </li>
                </ul>
              </nav> */}
            </div>
          </div>
        </div>
    </div>
  )
}

export default Search;