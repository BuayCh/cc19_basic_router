import useBStore from "../store/bStore"

function EasyZustand() {



const firstName = useBStore((state)=>state.firstName)
const address = useBStore((state)=> state.address)
const profile = useBStore((state)=> state.profile)
const products = useBStore((state)=> state.products)
const number = useBStore((state)=> state.number)
const actionIncrease = useBStore((state)=> state.actionIncrease)
const actionDecrease = useBStore((state)=> state.actionDecrease)
const actionMulti = useBStore((state)=> state.actionMulti)
const actionDivide= useBStore((state)=> state.actionDivide)
console.log(address)

const hdlClick = () => {
    actionDecrease();
}
  return (
    <div>
    <p className="text-8xl">{number}</p>
    <button onClick={actionIncrease} className="bg-green-400">
      Increase
    </button>
    <br/>
    <button onClick={hdlClick} className="bg-green-400">
      Decrease
    </button>
    <br />
    <button onClick={actionMulti} className="bg-green-400">
      Multi
    </button>
    <br />
    <button onClick={() => actionDivide("b")} className="bg-green-400">
        Divide
      </button>
  </div>
  );
}

export default EasyZustand