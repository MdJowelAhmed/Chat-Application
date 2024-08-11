
import { useAppStore } from '@/store/store'

const Profile = () => {
  const {userInfo}=useAppStore()

  return (
    <div>Profile
      <h2> email: {userInfo.email}</h2>
    </div>
  )
}

export default Profile