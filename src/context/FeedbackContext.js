import { v4 as uuidv4} from 'uuid'
import {  createContext, useState} from 'react'

const FeedbackContext = createContext()

export const FeedbackProvider = ({children})=>{


    const[ feedback, setFeedback]= useState([
        {

        id:1,
        text: 'this item is from context level 1',
        rating: 10
        
        },
        {

            id:2,
            text: 'this item is from context level 2',
            rating: 9
            
            },
            {

                id:3,
                text: 'this item is from context level 3',
                rating: 8
                
                }
]) 
     
 const [feedbackEdit,setFeedbackEdit] = useState({
     item: {},
     edit:false
 })
   //Add feedback
    const addFeedback = (newFeedback)=>{
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])

    }
    //Delete feedback
    const deleteFeedback = (id) =>{
        if(window.confirm('Are You sure You want to Delete??')){
            setFeedback(feedback.filter((item)=> item.id !== id))
        }
    }

    //update feedback item
    const updateFeedback = ( id, updItem)=>{
        setFeedback(feedback.map((item)=>(item.id===id ?{
            ...item,...updItem
         }: item)))

    }
    //Set  item to be updated
   const editFeedback = (item)=>{
       setFeedbackEdit({
           item,
           edit:true
       })
   }

    return <FeedbackContext.Provider  value={{
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
        

    }}>
        {children}
    </FeedbackContext.Provider>
}

 export default FeedbackContext