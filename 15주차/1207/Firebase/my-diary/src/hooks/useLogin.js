import { useState } from "react";
import { appAuth } from "../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
  // 에러 정보를 저장
  const [error, setError] = useState(null);
  // 서버와의 통신 상태를 저장
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  // console.log(appAuth.currentUser); 사용자 정보, 로그인에서 확인 가능

  // signup 훅을 만든다. email, password, displayName 세가지 매개변수를 갖는다.
  const login = (email, password) => {
    setError(null); // 아직 에러가 없으니 null
    setIsPending(true); // 통신중이므로 true

    // 로그인을 진행하는 함수, 비밀번호 설정으로 유저 정보를 등록, import 받아야 한다.
    signInWithEmailAndPassword(appAuth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        dispatch({ type: "login", payload: user });
        setError(null);
        setIsPending(false);

        // 회원 정보를 정상적으로 받지 못하면 실패
        if (!user) {
          throw new Error("로그인에 실패했습니다.");
        }
      })
      .catch((err) => {
        setError(err.message);
        setIsPending(false);
        console.log(err.message);
      });
  };

  return { error, isPending, login };
};
