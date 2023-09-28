import { PostThread } from '@/components/forms'
import { fetchUser } from '@/lib/actions/user.actions'
import { currentUser } from '@clerk/nextjs'
import { redirect } from 'next/navigation'
import React from 'react'


const page = async () => {
 const user = await currentUser()
  if(!user) return null

  const userInfo = await fetchUser(user.id)
  if(!userInfo?.onboarded) redirect('/onboarding')

  return (
    <div className='max-sm:p-2 p-6 mb-6 mx-auto max-w-xl'> 
      <h1 className='uppercase text-center font-bold mt-10'>create thread</h1>
      < PostThread userId={userInfo._id} />
    </div>
  )
}

export default page


