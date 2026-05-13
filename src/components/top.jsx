import profileIMG from './imgs/image_2.jpg'
import logo from './imgs/image 910.png'
import leftImg from './imgs/Group 5292.png'
import centralImg from './imgs/Group 4703.png'
import rightImg from './imgs/Rectangle 2512 (1).png'

const Top = () => {
  return (
    <div className="h-screen bg-black text-white font-serif">
      <div>
        <div className=' flex justify-center items-center gap-30 pt-7'>
          <p>RU $</p>
          <p>Накопительный счёт</p>
          <div className=' flex justify-center items-center gap-10'>
            <p>Отзывы</p>
            <p>Гарантии</p>
            <p>Как купить</p>
            <p>Накопительная</p>
            <p>Заработай</p>
          </div>
          <div className=' flex justify-center items-center gap-5'><p>Karimzoda Mustafo</p><img src={profileIMG} alt="" className='w-10 h-10 rounded-4xl border-2 border-white'/></div>
        </div>
        <div  className=' flex justify-center items-center gap-20 pt-5'><div className=' flex  items-center gap-5'><img src={logo} alt="" /><p className=' text-2xl'>SHOHON</p></div> <p>🗂️</p> <input type="Search" name="" id="" placeholder='Поиск' className='w-120 h-10 bg-gray-200 rounded-2xl text-black pl-10'/><p className='text-green-500'>Бесплатно</p><p>🤍</p><p>🛒</p></div>
      </div>
      <div className=' flex justify-center items-center gap-5 pt-10'>
        <img src={leftImg} alt=""  className='w-70 h-130 brightness-50'/><img src={centralImg} alt="" className='w-250 h-130 brightness-75'/> <img src={rightImg} alt="" className='w-70 h-130 brightness-50' />
      </div>
    </div>
  );
};

export default Top;
