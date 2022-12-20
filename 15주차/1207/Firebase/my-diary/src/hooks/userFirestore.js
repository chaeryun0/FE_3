import { appFireStore, timeStamp } from "../firebase/config";
import { addDoc, collection } from "firebase/firestore";
import { useReducer } from "react";

// 받을 응답을 저장할 객체이다. 객체이기 때문에 리듀서로 관리
// 그리고 이전까지는 상태를 관리할 때 error나 isPending을 위한 useState을 따로 작성해왔지만 이번에는 useReducer로 한번에 관리함

// document : 파이어스토어에 document의 생성을 요청하면 우리가 생성한 document를 반환
// isPending: 통신중인지 아닌지 상태
// success : 요청에 대한 응답의 성공 유무
const initState = {
  document: null,
  isPending: false,
  error: null,
  success: false,
};

// 전달 받는 action에 따른 state 업데이트를 위한 함수
const storeReducer = (state, action) => {
  switch (action.type) {
    case "isPending":
      return { isPending: true, document: null, error: null, success: false };
    case "addDoc":
      return {
        isPending: false,
        document: action.payload,
        error: null,
        success: true,
      };
    case "error":
      return {
        isPending: false,
        document: null,
        error: action.payload,
        success: false,
      };
    default:
      return state;
  }
};

// 데이터를 저장할 컬렉션을 인자로 한다. CS에서 보통 DB와 통신할 때 이루어지는 모든 상호작용을 transaction이라고 함
export const useFirestore = (transaction) => {
  // response에는 우리의 요청에 대한 firestore로 부터의 응답을 저장
  // 주로 데이터의 저장 성공 또는 요청한 문서 데이터일 것이며, 때문에 객체데이터를 다루는데 유용한 useReducer를 사용
  const [response, dispatch] = useReducer(storeReducer, initState);

  // colRef : 우리가 만들 컬랙션의 참조입니다. 우리가 따로 컬렉션을 만들지는 않았지만,
  // 원하는 컬렉션의 참조를 요구하기만 해도 파이어스토어는 자동으로 해당 컬렉션을 생성해준다.
  const colRef = collection(appFireStore, transaction);

  // 컬렉션에 문서를 추가
  // 인자로 받는 doc 는 우리가 DiaryFrom 에서 작성하고 서밋할 폼의 데이터가 들어감
  const addDocument = async (doc) => {
    dispatch({ type: "isPending" });
    try {
      // docRef : 우리가 만들 문서의 참조
      // addDoc : 컬렉션에 문서를 추가한다.
      // 코드참고 : https://firebase.google.com/docs/firestore/manage-data/add-data#add_a_document

      // fromDate 메서드를 통해 현재시각을 timeStamp 객체에 전달한다.
      const createdTime = timeStamp.fromDate(new Date());
      // doc에는 어떤 데이터가 들어가든 반영될 수 있도록 전개연산자를 사용한다.
      const docRef = await addDoc(colRef, { ...doc, createdTime });
      dispatch({ type: "addDoc", payload: docRef });
    } catch (e) {
      dispatch({ type: "error", payload: e.message });
    }
  };

  // 컬렉션에서 문서를 제거
  const deleteDocument = async (id) => {
    dispatch({ type: "isPending" });
    try {
      const docRef = await deleteDoc(doc(colRef, id));
      dispatch({ type: "deleteDoc", payload: docRef });
    } catch (e) {
      dispatch({ type: "error", payload: e.message });
    }
  };

  return { addDocument, deleteDocument, response };
};
