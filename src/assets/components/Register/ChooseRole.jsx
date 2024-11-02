import DoctorImage from '../../images/dokter-box.png';
import Role from './Role'

const ChooseRole = () => {
  return (
    <div className="flex w-full h-screen">
      <div className="w-full flex items-center justify-center lg:w-1/2 bg-white">
        <Role/>
      </div>
      <div className="hidden lg:flex h-full w-1/2 items-center justify-center">
        <div className="box flex flex-col items-center justify-center">
          <img src={DoctorImage} alt="Logo" className='w-3/4'/>
        </div>
      </div>
    </div>
  )
}

export default ChooseRole
