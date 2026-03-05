import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { db } from "../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";

export default function PostDetail() {

  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {

    async function load() {
      const ref = doc(db, "community", id);
      const snap = await getDoc(ref);

      setPost(snap.data());
    }

    load();

  }, [id]);

  if (!post) return <div>Loading...</div>;

  return (
    <div className="container">

      <h1>{post.title}</h1>

      <p>{post.content}</p>

      <hr />

      <h3>더 많은 상담은 앱에서</h3>

      <a href="/install">
        <button>LawHero 앱 설치</button>
      </a>

    </div>
  );
}