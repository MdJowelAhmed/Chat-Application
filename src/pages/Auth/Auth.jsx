import React, { useState } from 'react'
import Login from "../../assets/login.png"
import Victory from "../../assets/victory.svg"
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs'
import { Input } from '../../components/ui/input'
import { Button } from '../../components/ui/button'
import { toast } from 'sonner'
import { apiClient } from '@/lib/api-client'
import { SIGNUP_ROUTE,LOGIN_ROUTE } from '@/utils/constands'
// import { LOGIN_ROUTE } from 'src/utils/constands'

const Auth = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPass, setConfirmPass] = useState('')

  const validateLogin=()=>{
    if(!email.length){
      toast.error("Email is required")
      return false
    }
    if(!password.length){
      toast.error("Password is required")
      return false
    }
    return true
  }

  const handleLogin = async() => {
    if(validateLogin()){
      const res=await apiClient.post(LOGIN_ROUTE,{email,password},
        {withCredentials:true}
      )
      console.log({res})
    }
  }

  const validateSignup =()=>{
    if(!email.length){
      toast.error("Email is required")
      return false
    }
    if(!password.length){
      toast.error("Password is required")
      return false
    }
    if(password !== confirmPass){
      toast.error("password and confirm password should be same")
      return false
    }
    return true
  }


  const handleRegister = async() => {
    if(validateSignup()){
      const res=await apiClient.post(SIGNUP_ROUTE,{email,password},
        {withCredentials:true}
      )
      console.log({res})
    }
  }
  return (
    <div className='h-[100vh] w-[100vw] flex items-center justify-center'>
      <div className='h-[550px] w-[80vw] bg-white border-2 border-white text-opacity-90 shadow-2xl md:w-[90vw] lg:w-[70vw] xl:w-[60vw] grid lg:grid-cols-2 rounded-3xl '>
        <div className='flex flex-col gap-10 justify-center items-center'>
          <div className='flex justify-center items-center flex-col'>
            <div className=' flex justify-center items-center'>
              <h1 className='text-3xl lg:text-5xl font-bold'>Welcome </h1>
              <img src={Victory} alt="" className='h-20 ' />
            </div>
            <p className='text-center font-medium'>Fill-up the all input file for using best chat app</p>
          </div>
          <div className='flex items-center justify-center w-full'>
            <Tabs className='w-3/4'>
              <TabsList className='bg-transparent rounded-none w-full'>
                <TabsTrigger value="login" className="data-[state=active]:bg-transparent text-black text-opacity-90 border-b-2 rounded-none w-full data-[state=active]:text-black data-[state=active]:font-semibold data-[state=active]:border-b-purple-500 p-3 transition-all duration-300">Login</TabsTrigger>
                <TabsTrigger value="register" className="data-[state=active]:bg-transparent text-black text-opacity-90 border-b-2 rounded-none w-full data-[state=active]:text-black data-[state=active]:font-semibold data-[state=active]:border-b-purple-500 p-3 transition-all duration-300"> Register</TabsTrigger>
              </TabsList>
              <TabsContent value="login" className="flex flex-col gap-5 mt-6">
                <Input placeholder="Email" type="email" className="rounded-lg p-5" value={email} onChange={(e) => setEmail(e.target.value)} />
                <Input placeholder="Password" type="password" className="rounded-lg p-5" value={password} onChange={(e) => setPassword(e.target.value)} />
                <Button className="rounded-lg mt-5" onClick={handleLogin}>Login</Button>
              </TabsContent>

              <TabsContent value="register" className="flex flex-col gap-5 mt-6">
                <Input placeholder="Email" type="email" className="rounded-lg p-5" value={email} onChange={(e) => setEmail(e.target.value)} />
                <Input placeholder="Password" type="password" className="rounded-lg p-5" value={password} onChange={(e) => setPassword(e.target.value)} />
                <Input placeholder="Confirm Password" type="password" className="rounded-lg p-5" value={confirmPass} onChange={(e) => setConfirmPass(e.target.value)} />
                <Button className="rounded-lg " onClick={handleRegister}>Register</Button>
              </TabsContent>
            </Tabs>
          </div>
        </div>
        <div className='hidden lg:flex justify-center items-center'>
          <img src={Login} alt="" className='h-[480px] p-5 rounded-md' />
        </div>
      </div>
    </div>
  )
}

export default Auth