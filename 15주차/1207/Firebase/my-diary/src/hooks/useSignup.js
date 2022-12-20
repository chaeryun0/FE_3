import { useContext, useState } from "react"
import { appAuth } from '../firebase/config'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
    // 에러 정보를 저장 (정보가 있거나 없거나)
    const [error, setError] = useState(null);
    // 서버와의 통신 상태를 저장 (초기값으로 true,false 값을 넣을때 보통 앞에 is를 붙여줌)
    const [isPending, setIsPending] = useState(false);
    const { dispatch } = useAuthContext();

    // signup 훅 만들기, e회원가입 정보 (이메일, 비번, 닉네임) 세가지 매개변수를 갖는다.
    const signup = (email, password, displayName) => {
        setError(null); // 아직 에러가 없으니 null
        setIsPending(true); // 통신중이므로 true

        // 비밀번호 설정으로 유저 정보를 등록함, import 받아야함
        // config.js에서 auth를 appAuth()로 저장했기 때문에 해당 이름으로 받아와야 한다. auth -> appAuth로 변경
        createUserWithEmailAndPassword(appAuth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // console.log(user); // 성공하면 유저 정보가 콘솔에 확인됨

                if (!user) { // 회원 정보를 정상적으로 받지 못하면(빈 값이 들어오면) 실패
                    throw new Error('회원가입에 실패했습니다.');
                }

                // 회원가입이 완료되고 유저 정보에 닉네임을 업데이트함, import 받아야함
                updateProfile(appAuth.currentUser, { displayName })
                    .then(() => {
                        dispatch({ type: 'login', payload: user });
                        setError(null);
                        setIsPending(false);
                    }).catch((error) => {
                        console.log(error.message); // 어떤 에러를 발생했는지 알 수 있음
                        setError(error.message);
                        setIsPending(false);
                    });

            })
            .catch((error) => {
                console.log(error.message);
                setError(error.message);
                setIsPending(false);
            });
    }

    // hook으로 사용하기 위해 밖으로 빼줌
    return { error, isPending, signup }
}