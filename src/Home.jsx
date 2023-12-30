import {useSearchParams} from 'react-router-dom'

const Home = () => {
  const [searchparam , setSearchParam] = useSearchParams({
    q :"",
    onlycom :false
  })
  const q = searchparam.get("q")
  const onlycom = searchparam.get("onlycom")
  console.log(q , onlycom)
  return (
    <div>
    <input type="text" 
    value={q}
    onChange={(e) =>setSearchParam(prev =>{
      prev.set("q" , e.target.value)
      return prev
    } , {
        replace:true
    })}
     />
    </div>
  )
}
export default Home