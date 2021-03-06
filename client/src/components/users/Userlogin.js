import React from 'react'
import {useForm} from 'react-hook-form'


export default function Userlogin(props) {
    const { register, handleSubmit, errors } = useForm(); // initialize the hook
    const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div style={{
        display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh'

    }}>
    <form style={{display:'flex', flexDirection: 'column'}} onSubmit={handleSubmit(onSubmit)}>
      <input name="name" ref={register({ required: true })} /> {/* register an input */}
      {errors.name && 'name is required.'}
      <input name="email" ref={register({ required: true })} />
      {errors.email && 'email is required.'}
      <input name="password" ref={register({ required: true, pattern: /\d+/ })} />
      {errors.age && 'Please enter number for age.'}
      <input type="submit" />
    </form>
    </div>
  );






    // return (
    //     < style={{
    //         display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh'

    //     }}>
    //         <form style={{display:'flex', flexDirection: 'column'}} onSubmit={}>
    //             <label>Email</label>
    //             <input type="" value={} onChange={}/>
    //             <label>Password</label>
    //             <input type="" value={} onChange={}/>
                

    //         </form>
    //     </>
    // )
}
