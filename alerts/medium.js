// import React from 'react'

// const Medium = (props) => {
      // const { 
      //       userName,
      //       userAddress,
      //       userPhone,
      //       keyword,
      //       contactName,
             

      // } 
      const key = process.env.TEST_API_KEY
      console.log('env', key)

//       return (
         
//             <div>
//                   Hi {contactName},
//                   <br/>
//                   You are receiving this alert from {userName} via the Pizza Now app because of a domestic violence situation that requires your response. They are currently located at {userAddress} and you can keep track of their location using *geolocation*. {userName} would like you to go to their location immediately. They do not feel safe and want you to come get them ASAP. You can reach them at {userPhone}. 
//                   <br/>
//                   {userName}'s safety word is <i>'{keyword}'</i>. If they say <i>'{keyword}'</i> when you speak to them, it means they are in danger. If they communicate their safety word, or if you don't get any response from them after reaching out,<strong> please contact the authorities immediately.</strong>
//                   <br/>
//                   Stay Safe,
//                   <br/>
//                   The Pizza Now Team
                
//             </div>
//       )
// }

// const mapState = state => {
//       return {
//         userName: state.user.fullName,
//         contactName: state.contact.fullName,
//         userAddress: state.user.addres,
//         userPhone: state.user.number,
//         keyword: state.user.keyword
//       }
// }

// export default connect(mapState)(Medium)