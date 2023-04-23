import React, { useState } from 'react';
import LogoCadastro from '../assets/bro.png';
import LogoLogin from '../assets/bro2.png';
import Image from 'next/image';

interface ITabEntry {
  header: string;
  component: React.ReactNode;
}

interface ILoginTabs {
  config: ITabEntry[];
}


const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    confirmEmail: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.MouseEvent<HTMLFormElement, MouseEvent>) => {
    event.preventDefault();
    console.log(formData);

    setFormData({
      username: '',
      email: '',
      confirmEmail: '',
      password: '',
      confirmPassword: '',
    });

  };


  return (
    <>
      <div id='cadastro' className='flex flex-row gap-6'>
        <div className=''>
          <Image src={LogoCadastro} alt='logo' />
        </div>
        <div className='w-3/5'>
          <form className='flex flex-col bg-zinc-700 shadow-md rounded px-8 pt-6 pb-8 mb-4' onSubmit={handleSubmit}>
            <h1 className='text-orange-500 text-2xl font-bold text-center'>Cadastro</h1>
            <label className='block uppercase tracking-wide text-white text-xs font-semibold mb-2' htmlFor='username'>Username</label>
            <input
              className='bg-gray-200 appearance-none border-2 border-gray-200  text-gray-700 rounded w-full py-2 px-4 mb-4 t leading-tight focus:outline-none focus:bg-white focus:border-orange-500'
              placeholder='@example'
              type='text'
              id='username'
              name='username'
              value={formData.username}
              onChange={handleChange}
            />
            <label className='block uppercase tracking-wide text-white text-xs font-semibold mb-2' htmlFor='email'>E-mail</label>
            <input
              className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 mb-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange-500'
              placeholder='johndoe@gmail.com'
              type='text'
              id='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
            />
            <label className='block uppercase tracking-wide text-white text-xs font-semibold mb-2' htmlFor='email'>Confirme o e-mail</label>
            <input
              className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 mb-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange-500'
              placeholder='johndoe@gmail.com'
              type='text'
              id='confirmEmail'
              name='confirmEmail'
              value={formData.confirmEmail}
              onChange={handleChange}
            />
            <label className='block uppercase tracking-wide text-white text-xs font-semibold mb-2' htmlFor='email'>Senha</label>
            <input
              className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 mb-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange-500'
              placeholder='********'
              type='password'
              id='password'
              name='password'
              value={formData.password}
              onChange={handleChange}
              security='password'
            />
            <label className='block uppercase tracking-wide text-white text-xs font-semibold mb-2' htmlFor='email'>Confirme a senha</label>
            <input
              className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 mb-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange-500'
              placeholder='********'
              type='text'
              id='confirmPassword'
              name='confirmPassword'
              value={formData.confirmPassword}
              onChange={handleChange}
              security='password'
            />
            <button className="text-white leading-tight font-medium self-center w-64 h-12 py-3 px-4 rounded-md ring-inset ring-1 ring-orange-400 bg-orange-500 hover:ring-orange-500 hover:bg-orange-600 active:opacity-80 transition-all duration-75"
              onClick={() => handleSubmit}
            >
              Entrar
            </button>
          </form>
        </div>
      </div>
    </>

  );
};

const Login = () => {
  const handleDataSubmit = (event: React.MouseEvent<HTMLFormElement, MouseEvent>) => {
    event.preventDefault();
    console.log('its working')
  }

  return (
    <>
      <div id='cadastro' className='flex flex-row gap-6'>
        <div className=''>
          <Image className='rounded-md' src={LogoLogin} alt='logo' />
        </div>
        <div className='w-3/5'>
          <form className='flex flex-col bg-zinc-700 shadow-md rounded px-8 pt-6 pb-8 mb-4'>
            <h1 className='text-orange-500 text-2xl font-bold text-center'>Login</h1>
          
            <label className='block uppercase tracking-wide text-white text-xs font-semibold mb-2' htmlFor='email'>E-mail</label>
            <input
              className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 mb-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange-500'
              placeholder='johndoe@gmail.com'
              type='text'
              id='email'
              name='email'
          
            />
         
            <label className='block uppercase tracking-wide text-white text-xs font-semibold mb-2' htmlFor='email'>Senha</label>
            <input
              className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 mb-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange-500'
              placeholder='********'
              type='password'
              id='password'
              name='password'
              security='password'
            />

            <button className="text-white leading-tight font-medium self-center w-64 h-12 py-3 px-4 rounded-md ring-inset ring-1 ring-orange-400 bg-orange-500 hover:ring-orange-500 hover:bg-orange-600 active:opacity-80 transition-all duration-75"
        
            >
              Entrar
            </button>
          </form>
        </div>
      </div>
    </>

  )
}

const Tabs = ({ config }: ILoginTabs) => {
  const [activeTab, setActiveTab] = React.useState(0);
  const [active, setActive] = React.useState('false')

  return (
    <div className="w-[calc(100%_-_48px)] max-w-[1344px] mx-auto bg-zinc-800 rounded p-6">
      <div className="flex flex-row gap-3 justify-center self-center mb-5 text-white/80 cursor-pointer ">
        {
          config.map((entry, index) => (
            <div
              className={`text-center font-bold  ${activeTab === index ? "text-white text-decoration-line: underline focus:decoration-solid cursor-pointer" : ""}`}
              onClick={() => setActiveTab(index)}
            >
              {entry.header}
            </div>
          ))
        }
      </div>
      <div className="tab-body">
        {config[activeTab].component}
      </div>
    </div>
  );
};

function LoginTabs() {
  return (
    <Tabs
      config={[
        { header: " Login ", component: <Login /> },
        { header: " Cadastro ", component: <Register /> },
      ]}
    />
  )
}

export default LoginTabs