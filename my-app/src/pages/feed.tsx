import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../contexts/AuthContext';
import firebase from '../firebase';
import SubmitButton from '@/components/SubmitButton';
import { AnimatePresence, motion } from 'framer-motion';
import { RiEditBoxLine, RiDeleteBin6Line } from 'react-icons/ri';

interface Post {
  id: string;
  userId: string;
  content: string;
  timestamp: number;
  username: string;
  email: string;
}

async function getUsername(userId: string): Promise<string> {
  const snapshot = await firebase.database().ref(`users/${userId}/username`).once('value');
  return snapshot.val() || '';
}

function PostForm() {
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (content.trim() === '') {
      return;
    }

    const currentUser = firebase.auth().currentUser;
    if (currentUser) {
      const newPostRef = firebase.database().ref('feeds/posts').push();
      const newPost: Post = {
        id: newPostRef.key!,
        userId: currentUser.uid,
        content,
        timestamp: Date.now(),
        username: currentUser.displayName || '',
        email: currentUser.email || '',
      };
      newPostRef.set(newPost);

      setContent('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Digite o conteúdo do post"
        className="resize-none rounded-lg p-6 text-sm text-white focus:outline-none focus:ring-2 focus:ring-orange-600 bg-black/40 w-full  border-transparent"
      />

      <div className='flex justify-end'>
        <SubmitButton />
      </div>
    </form>
  );
}


function Feed() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [editPostId, setEditPostId] = useState('');
  const [editContent, setEditContent] = useState('');

  const handleDeletePost = (postId: string) => {
    const currentUser = firebase.auth().currentUser;
    if (currentUser) {
      firebase
        .database()
        .ref(`feeds/posts/${postId}`)
        .once('value', (snapshot) => {
          const post = snapshot.val();
          if (post && post.userId === currentUser.uid) {
            firebase.database().ref(`feeds/posts/${postId}`).remove();
          }
        });
    }
  };
  

  useEffect(() => {
    const databaseRef = firebase.database().ref('feeds/posts');
    databaseRef.orderByChild('timestamp').on('value', async (snapshot) => {
      const postsData = snapshot.val();
      if (postsData) {
        const postsArray: Post[] = [];
        for (const key in postsData) {
          if (Object.prototype.hasOwnProperty.call(postsData, key)) {
            const post = {
              id: key,
              ...postsData[key],
            };
            post.username = await getUsername(post.userId);
            postsArray.unshift(post);
          }
        }
        setPosts(postsArray);
      }
    });
  
    return () => {
      databaseRef.off();
    };
  }, []);
  

  const handleEditPost = (postId: string, currentContent: string) => {
    setEditPostId(postId);
    setEditContent(currentContent);
  };

  const handleSaveEdit = (postId: string) => {
    const currentUser = firebase.auth().currentUser;
    if (currentUser) {
      firebase
        .database()
        .ref(`feeds/posts/${postId}`)
        .once('value', (snapshot) => {
          const post = snapshot.val();
          if (post && post.userId === currentUser.uid) {
            firebase.database().ref(`feeds/posts/${postId}/content`).set(editContent);
          }
        });
    }
    setEditPostId('');
    setEditContent('');
  };

  return (
    <div>
      <AnimatePresence mode='wait'>
        {posts.map((post) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01]
            }}
            className="p-6 bg-slate-100 rounded-lg my-3"
          >
            <h3 className="font-bold text-sm bg-gradient-to-r from-primary-color-100 to-primary-color-200 text-black bg-clip-text">@{post.username}</h3>
            {editPostId === post.id ? (
              <div>
                <textarea
                  value={editContent}
                  onChange={(e) => setEditContent(e.target.value)}
                  placeholder="Digite o novo conteúdo"
                  className="block w-full p-2 border border-gray-300 rounded resize-none"
                />
                <button
                  onClick={() => handleSaveEdit(post.id)}
                  className="px-4 py-2 mt-2 text-white bg-blue-500 rounded hover:bg-blue-600"
                >
                  Salvar
                </button>
              </div>
            ) : (
              <p>{post.content}</p>
            )}
            <p>{new Date(post.timestamp).toLocaleDateString()}</p>
            {post.userId === firebase.auth().currentUser?.uid && (
  <div className="flex items-center mt-2">
    <button
      onClick={() => handleEditPost(post.id, post.content)}
      className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
    >
      <RiEditBoxLine />
    </button>
    <button
      onClick={() => handleDeletePost(post.id)}
      className="ml-2 px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600"
    >
      <RiDeleteBin6Line />
    </button>
  </div>
            )}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );

}

const PrivatePage: React.FC = () => {
  const { user, logout } = useAuth();
  const router = useRouter();

  if (!user) {
    return null;
  }

  return (
    <div className='mx-6 lg:mx-96 bg-black-100 '>
      <h1 className="text-2xl font-bold mb-4">Página Privada</h1>
      <p className="mb-2">Bem-vindo, {user.email}!</p>
      <button
        onClick={() => logout()}
        className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600"
      >
        Logout
      </button>
      <h2 className="text-xl mt-4">Post Form</h2>
      <PostForm />
      <h2 className="text-xl mt-4">Feed</h2>
      <Feed />
    </div>
  );
};

export default PrivatePage;
