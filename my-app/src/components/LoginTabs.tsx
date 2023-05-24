import React, { useState, useContext } from 'react';
import LogoCadastro from '../assets/bro.png';
import LogoLogin from '../assets/bro2.png';
import Image from 'next/image';
import firebase from '../firebase';
import { useRouter } from 'next/router';
import { AuthContext } from '../contexts/AuthContext';
import "firebase/auth";
import "firebase/database"


interface ITabEntry {
  header: string;
  component: React.ReactNode;
}

interface ILoginTabs {
  config: ITabEntry[];
}


const Register = () => {
  const auth = firebase.auth();
  const router = useRouter();

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    confirmEmail: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value.trim() });
  };

  const handleSubmit = async (event: React.MouseEvent<HTMLFormElement, MouseEvent>) => {
    event.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      console.log('Senhas não correspondem');
      return;
    }

    try {
      const userCredential = await auth.createUserWithEmailAndPassword(formData.email, formData.password);
      const user = userCredential.user;
      const { username, email } = formData;
    
      if (user) {
        const userRef = firebase.database().ref('users').child(user.uid);
        userRef.set({
          username,
          email,
        });
          router.push('/feed');

        console.log('Usuário cadastrado com sucesso:', user);
        console.log('Username:', username);

    

      } else {
        console.log('Não foi possível obter o usuário cadastrado.');
      }
    } catch (error) {
      console.log('Erro ao cadastrar usuário:', error);
    }
    
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
              type='password'
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

const Login: React.FC = () => {
  const auth = useContext(AuthContext);
  const router = useRouter();

  

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value.trim() });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  
    if (!auth) {
      console.error('Erro: contexto de autenticação não encontrado');
      return;
    }
  
    try {
      await auth.login(formData.email, formData.password);
      console.log('Login realizado com sucesso!');
      router.push('/feed');
    } catch (error) {
      console.error('Erro durante o login:', error);
    }
  
    setFormData({
      email: '',
      password: '',
    });
  };
  
  return (
    <>
      <div id='cadastro' className='flex flex-row gap-6'>
        <div className=''>
          <Image className='rounded-md' src={LogoLogin} alt='logo' />
        </div>
        <div className='w-3/5'>
          <form className='flex flex-col bg-zinc-700 shadow-md rounded px-8 pt-6 pb-8 mb-4' onSubmit={handleSubmit}>
            <h1 className='text-orange-500 text-2xl font-bold text-center'>Login</h1>
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
            <label className='block uppercase tracking-wide text-white text-xs font-semibold mb-2' htmlFor='email'>Senha</label>
            <input
              className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 mb-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange-500'
              placeholder='********'
              type='password'
              id='password'
              name='password'
              value={formData.password}
              onChange={handleChange}
            />
            <button
              className="text-white leading-tight font-medium self-center w-64 h-12 py-3 px-4 rounded-md ring-inset ring-1 ring-orange-400 bg-orange-500 hover:ring-orange-500 hover:bg-orange-600 active:opacity-80 transition-all duration-75"
              type="submit"
            >
              Entrar
            </button>
          </form>
        </div>
      </div>
    </>
  );
};



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