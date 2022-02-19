import React, { useState, useEffect, Component } from 'react';
import Header from '../../shared/components/Header';
import { Container, Row, Col , Card,Button,Carousel, Spinner} from 'react-bootstrap';
import Options from './Options';
import CollectionsCarousel from '../../shared/components/carousel';
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Loader from "../../shared/components/Loader";
import Afterlogin from './AfterLogin';



export default function Collections(props)
 {
  
    const { user, isAuthenticated, isLoading } = useAuth0();
    console.log(user)
    console.log(isAuthenticated)
    const { logout } = useAuth0();

    
  
      if(isAuthenticated){
        return (
           <Afterlogin/> 
           
          );
        }
      else {
        return(<Loader/>)
      }
      
    }

 
