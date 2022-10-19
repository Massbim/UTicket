import axios from 'axios'
import React, { useState } from 'react'
import FormProfile from '../../components/formProfile'
// import NavbarProfile from '../../components/navbarProfile'
import ProfileCard from '../../components/profileCard'
import TabMyBooking from '../../components/tabMyBooking'
import styles from './profile.module.css'

export const getServerSideProps = async (ctx) => {
  const { cookies } = ctx.req
  const token = cookies.token
  console.log('cookies-profile: ', cookies);
  const resProfile = await axios.get(process.env.API_BACKEND + "/users/profile/", {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  })

  const resCC = await axios.get(process.env.API_BACKEND + "/creditCard", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  console.log('resProfile: ', resProfile);
  return {
    props: {
      dataProfile: resProfile.data.data,
      dataCC: resCC.data?.data,
    }
  };
}



const Profile = ({ dataProfile, dataCC }) => {
  const [focus, setFocus] = useState("profile");
  // console.log('data-profile: ', dataProfile);
  // console.log('data-CC: ', dataCC);

  return (
    <div className={styles.container}>
      {/* <NavbarProfile setFocus={setFocus} /> */}
      <div>
        <div className={styles.wrapper}>
          
          <div className={styles.sect1}>
            <ProfileCard
              picture={dataProfile?.picture}
              name={dataProfile?.name}
              dataCC={dataCC}
              setFocus={setFocus}
            />
          </div>
          {focus === "my-booking" ?
          <TabMyBooking/> :
           focus === "profile" ?
          <FormProfile
            email={dataProfile?.email}
            username={dataProfile?.username}
            country={dataProfile?.country}
            city={dataProfile?.city}
            phone={dataProfile?.phone}
            address={dataProfile?.address}
            postal_code={dataProfile?.postal_code}
          /> : ""
          }
        </div>
      </div>
    </div>
  )
}

export default Profile