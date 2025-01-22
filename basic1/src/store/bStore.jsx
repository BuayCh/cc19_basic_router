import {create} from "zustand"

const bStore = (set)=>({
    adress: { streer:"1234", zipcode:"567"},
    profile: ['charoenpiemphaisarn','chanyapak'],
    products: [
        {id:1, title:'ASUS', price:50000},
        {id:2, title:'MSI', price:40000}
    ],
    number : 5 ,
    actionIncrease: () => {
        // * setNumber2((state) => ({ num: state.num + 1 }));
        set((state) => ({ number: state.number + 1 }));
      },
      actionDecrease: () => {
        // code body
        set((state) => ({ number: Math.max(0, state.number - 1) }));
      },
      actionMulti: () => {
        set((state) => ({ number: state.number * 2 }));
      },
      actionDivide: (newValue) => {
        console.log(newValue);
        set((state) => ({ number: state.number / 2 }));
      },
});
const useBStore = create(bStore);

export default useBStore;