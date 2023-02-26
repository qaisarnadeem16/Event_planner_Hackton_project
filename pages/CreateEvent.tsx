import { Button, Container, Grid, Input, Paper, Table, TableContainer, TextField, Typography } from '@mui/material'
import {  TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { Box } from '@mui/system'
import React, { useState ,useEffect} from 'react'
import{storage ,db ,auth} from '../Firebase/Config'
import { deleteObject, getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { addDoc, collection, deleteDoc, doc, getDocs, Timestamp } from 'firebase/firestore'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'
import Loader from './Components/Loader'
import { Delete } from '@mui/icons-material';

interface EventData {
    id: string;
    eventID: string;
    eventTitle: string;
    eventDate: Timestamp;
    eventTime: string;
    eventLocation: string;
    eventDescription: string;
    creator: string;
    attendees: string[];
    imageUrl: string;
  }
const CreateEvent = () => {
    const [eventID, setEventID] = useState("");
    const [eventTitle, setEventTitle] = useState("");
    const [eventTime, setEventTime] = useState("");
    const [eventLocation, setEventLocation] = useState("");
    const [eventDescription, setEventDescription] = useState("");
    const [imageFile, setImageFile] = useState("");
  const [currentUser, setCurrentUser] = useState(null);
  const router = useRouter();
  const [isLoading , setIsLoading] =useState(false);
  const [eventData, setEventData] = useState<EventData[]>([]);




// check login or not
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
          if (user) {
            setCurrentUser(user);
            console.log('current',currentUser);
          } else {
            router.push("/LoginPage"); // Redirect to login page if user is not logged in
          }
        });
        return () => unsubscribe();
      }, []);

    const handleEventImage = (e: any) => {
        if (e.target.files && e.target.files.length > 0) {
            setImageFile(e.target.files[0]);
        }
    }

    //add event data 
    //  addData in todo 
    const addData = async (e: any) => {
        e.preventDefault();
        setIsLoading(true);
      
        try {
          if (imageFile) {
            // Create a reference to the storage location where the image will be stored
            const storageRef = ref(storage, `eventmages/${imageFile.name}`);
            // Upload the image to Firebase Storage
            await uploadBytes(storageRef, imageFile);
            // Get the URL of the uploaded image
            const imageUrl = await getDownloadURL(storageRef);
      
            const dataRef = collection(db, 'events')
      
            const newData = {
              eventID: eventID,
              eventTitle: eventTitle,
              eventDate: Timestamp.now(),
              eventTime: eventTime,
              eventLocation: eventLocation,
              eventDescription: eventDescription,
              creator: currentUser.email,
              attendees: [],
              imageUrl: imageUrl
            }
      
            const doc = await addDoc(dataRef, newData)
            console.log('New todo added with ID:', doc.id);
            // Clear the form inputs
            setIsLoading(false);
            toast.success('Successfully Create Event....');
          }
        } catch (error) {
          console.error('Error adding event: ', error);
          setIsLoading(false);
          toast.error('Failed to Create Event');
        }
      }
      
       // fetch data from firebase

       useEffect(() => {
        const fetchData = async () => {
          try {
            const Ref = collection(db, 'events');
            const getData = await getDocs(Ref);
            const eventData: EventData[] = [];
            getData.forEach((doc:any) => {
              eventData.push({ id: doc.id, ...doc.data() });
            });
            setEventData(eventData);
          } catch (error) {
            console.log('Error fetching data:', error);
          }
        };
        fetchData();
      }, []);

      // delete event data
      const deleteTodo = async (id: string, imageUrl: string) => {
        try {
          // Delete image from 
          if (imageUrl) {
            const storageRef = ref(storage, imageUrl);
            await deleteObject(storageRef);
          }
      
          // Delete data from Firestore
          const docRef = doc(db, 'events', id);
          await deleteDoc(docRef);
      
          // Update state with remaining todo data
          const remainingTodos = eventData.filter((todo) => todo.id !== id);
          setEventData(remainingTodos);
        } catch (error) {
          console.error("Error removing document: ", error);
        }
      };
      

    return (
        <>
   {isLoading && <Loader/>}

          <Typography  sx={{fontSize:'4rem', textAlign:'center' ,fontWeight:'bold' ,color:'orangered' }}>Create Event</Typography>
            <Grid container >

                <Grid item md={12} display='flex' flexDirection='column' justifyContent='center' sx={{marginLeft:{md:'15rem' , xs:'0'}}}>

                    <form onSubmit={addData}>

                        <Container >
                            <Box sx={{ marginBottom: '.5rem' }}> <Typography component='span'>Event Id</Typography></Box>
                            <TextField
                                value={eventID}
                                onChange={(e) => setEventID(e.target.value)}
                                id="filled-size-small"
                                placeholder='Enter Event ID'

                                size="small" sx={{ width:{md:'70%' , xs:'100%'}, border: '1px solid #adadad ', marginBottom: '1rem', borderRadius: '7px', backgroundColor: 'white' }} />


                            <Box sx={{ marginBottom: '.5rem' }}> <Typography component='span'>Event Title</Typography></Box>
                            <TextField
                                value={eventTitle}
                                onChange={(e) => setEventTitle(e.target.value)}
                                id="filled-size-small"
                                placeholder='Enter Event Title'
                                size="small" sx={{width: {md:'70%' , xs:'100%'}, border: '1px solid #adadad ', marginBottom: '1rem', borderRadius: '7px', backgroundColor: 'white' }} />

                            <Box sx={{ marginBottom: '.5rem' }}> <Typography component='span'>Event Time</Typography></Box>
                            <TextField
                                value={eventTime}
                                onChange={(e) => setEventTime(e.target.value)}
                                id="filled-size-small"
                                placeholder='Enter Time for this event'
                                size="small" sx={{width:{md:'70%' , xs:'100%'}, border: '1px solid #adadad ', marginBottom: '1rem', borderRadius: '7px', backgroundColor: 'white' }} />


                            <Box sx={{ marginBottom: '.5rem' }}> <Typography component='span'>Location of Event</Typography></Box>
                            <TextField
                                value={eventLocation}
                                onChange={(e) => setEventLocation(e.target.value)}
                                id="filled-size-small"
                                placeholder='Enter Time for this event'
                                size="small" sx={{width: {md:'70%' , xs:'100%'}, border: '1px solid #adadad ', marginBottom: '1rem', borderRadius: '7px', backgroundColor: 'white' }} />

                            <Box sx={{ marginBottom: '.5rem' }}> <Typography component='span'>Event Description</Typography></Box>
                            <TextField
                                value={eventDescription}
                                onChange={(e) => setEventDescription(e.target.value)}
                                id="filled-size-small"
                                placeholder='Enter Time for this event'
                                size="small" sx={{width:{md:'70%' , xs:'100%'}, border: '1px solid #adadad ', marginBottom: '1rem', borderRadius: '7px', backgroundColor: 'white' }} />

                            <Box sx={{ marginBottom: '.5rem' }}> <Typography component='span'>Event Description</Typography></Box>
                            <Input type='file'
                                onChange={handleEventImage}
                                id="filled-size-small"
                                size="small" sx={{width: {md:'70%' , xs:'100%'}, border: '1px solid #adadad ', marginBottom: '1rem', borderRadius: '7px', backgroundColor: 'white' }} />
                            
                            
                            
                            <Box sx={{ marginBottom: '.5rem' }}> <Button variant='contained'  type='submit' >Submit</Button></Box>
                            

                        </Container>
                    </form>
                </Grid>

            </Grid>
            <Grid container>
            <TableContainer component={Paper} sx={{ overflowX: 'auto', backgroundColor:'white' }} >
      <TableHead>
        <TableRow>
          <TableCell>ID</TableCell>
          <TableCell>Title</TableCell>
          <TableCell>Date</TableCell>
          <TableCell>Time</TableCell>
          <TableCell>Location</TableCell>
          <TableCell>Description</TableCell>
          <TableCell>Creator</TableCell>
          <TableCell>Attendees</TableCell>
        </TableRow>
      </TableHead>
      <TableBody >
        {eventData.map((event) => (
          <TableRow key={event.id}>
            <TableCell><img src={event.imageUrl} alt='' width={50}/></TableCell>

            <TableCell>{event.eventID}</TableCell>
            <TableCell>{event.eventTitle}</TableCell>
            <TableCell>{event.eventDate.toDate().toLocaleDateString()}</TableCell>
            <TableCell>{event.eventTime}</TableCell>    
            <TableCell>{event.eventLocation}</TableCell>
            <TableCell>{event.eventDescription}</TableCell>
            <TableCell>{event.creator}</TableCell>
            <TableCell><Button variant='contained' onClick={deleteTodo}><Delete/></Button></TableCell>
            
          </TableRow>
        ))}
      </TableBody>
    </TableContainer>
            </Grid>

        </>
    )
}

export default CreateEvent
