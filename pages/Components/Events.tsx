import React ,{useState,useEffect} from 'react'
import Heading from './Heading'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box, Container } from '@mui/system';
import { Avatar, Button, Card, CardContent, CardHeader, Typography } from '@mui/material';

import {  collection, doc, getDoc, getDocs, Timestamp, updateDoc } from 'firebase/firestore'
import{db,auth } from '../../Firebase/Config'


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

const Events = () => {
      
  const [eventData, setEventData] = useState<EventData[]>([]);
  const [currentUser, setCurrentUser] = useState('');


  // check login or not
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser(user.email);
        console.log('current',currentUser);
      }
    });
    return () => unsubscribe();
  }, []);


  const handleJoinButtonClick = async (eventId: string) => {
    try {
      const eventRef = doc(db, "events", eventId);
      const eventDoc = await getDoc(eventRef);
      if (eventDoc.exists()) {
        const event = eventDoc.data();
        const updatedAttendees = event.attendees.includes(currentUser)
          ? event.attendees.filter((attendee: string) => attendee !== currentUser)
          : [...event.attendees, currentUser];
        await updateDoc(eventRef, { attendees: updatedAttendees });
      }
    } catch (error) {
      console.error("Error updating attendees:", error);
    }
  };
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
          console.log(eventData);
        } catch (error) {
          console.log('Error fetching data:', error);
        }
      };
      fetchData();
    }, []);

  return (
    <>
    <Heading
        title="Top Event"
        text="Discover our Latest Events: Unforgettable Experiences Await!"
        text1="Unforgettable Experiences Await!"
      />
    <Container>
 {eventData.map((event) => (
  <Card sx={{ maxWidth: 345 }} key={event.id}>
    <CardHeader
      avatar={
        <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
          R
        </Avatar>
      }
      title={event.eventTitle}
      subheader={event.eventTime}
    />
    <img src={event.imageUrl} alt='' height={200}  width='100%' />
    <CardContent>
      <Typography fontWeight='bold'>Location: {event.eventLocation}</Typography>
      <Typography variant="body2" color="text.secondary">
        {event.eventDescription}
      </Typography>
      <Button sx={{width:'100%' , padding:'1rem 0' ,borderRadius:'10px',marginTop:'1rem'}}
        variant="contained"
        color={event.attendees.includes(currentUser) ? "success" : "primary"}
        onClick={() => handleJoinButtonClick(event.id)}
      >
        {event.attendees.includes(currentUser) ? "Already Join" : "Join Event"}
      </Button>
    </CardContent>
  </Card>
))}
</Container>
    </>
  )
}

export default Events
