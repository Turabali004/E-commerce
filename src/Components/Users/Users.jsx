import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { usersData } from '../../Features/users/usersSlice'

function Users() {
    const dispatch = useDispatch()
    useEffect(() => {
        console.log(dispatch(usersData));
        

    })

  return (
    <div>
      This is users page
    </div>
  )
}

export default Users
